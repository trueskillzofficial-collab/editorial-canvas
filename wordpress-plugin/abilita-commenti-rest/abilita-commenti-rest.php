<?php
/**
 * Plugin Name: Headless – Commenti REST + Redirect al frontend + Open Graph
 * Description: Abilita i commenti via REST dal sito React e reindirizza le pagine articolo di WordPress al frontend del sito (nicolaprebenna.it/blog/...). Esclude i bot social dal redirect ed emette gli Open Graph tag con la featured image dedicata, così condividendo un articolo Facebook/LinkedIn/WhatsApp mostrano la foto specifica di quell'articolo.
 * Version: 1.3.1
 * Author: nicolaprebenna.it
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Accesso diretto non consentito.
}

// Dominio del frontend React (senza slash finale).
if ( ! defined( 'PREBENNA_FRONTEND_URL' ) ) {
	define( 'PREBENNA_FRONTEND_URL', 'https://nicolaprebenna.it' );
}

// 1) Consente la creazione di commenti anonimi via REST API.
add_filter( 'rest_allow_anonymous_comments', '__return_true' );

// 2) Reindirizza la pagina di un articolo WordPress al corrispondente articolo
//    sul frontend React. Così i link WP condivisi atterrano sul sito "bello".
add_action( 'template_redirect', function () {
	// Solo per la pagina di un singolo articolo (non pagine, categorie, home, ecc.).
	if ( ! is_singular( 'post' ) ) {
		return;
	}

	// I bot dei social (Facebook, LinkedIn, WhatsApp, Telegram, X, Slack, ecc.)
	// NON vengono reindirizzati: devono poter leggere gli Open Graph tag
	// generati da WordPress (con featured image dedicata all'articolo).
	$ua = isset( $_SERVER['HTTP_USER_AGENT'] ) ? (string) $_SERVER['HTTP_USER_AGENT'] : '';
	$social_bots = array(
		'facebookexternalhit',
		'facebookcatalog',
		'Facebot',
		'LinkedInBot',
		'Twitterbot',
		'Slackbot',
		'TelegramBot',
		'WhatsApp',
		'Discordbot',
		'Pinterest',
		'redditbot',
		'Applebot',
		'SkypeUriPreview',
		'vkShare',
		'W3C_Validator',
		'Embedly',
		'Iframely',
	);
	foreach ( $social_bots as $bot ) {
		if ( stripos( $ua, $bot ) !== false ) {
			return;
		}
	}

	// Gli utenti che possono modificare i post (admin/editor) NON vengono
	// reindirizzati: così possono ancora vedere/anteprima l'articolo in WordPress.
	if ( current_user_can( 'edit_posts' ) ) {
		return;
	}

	$slug = get_post_field( 'post_name', get_queried_object_id() );
	if ( empty( $slug ) ) {
		return;
	}

	// 302 = redirect temporaneo (sicuro e reversibile durante il rollout).
	// Una volta verificato che tutto funziona, si può portare a 301 (permanente,
	// migliore per la SEO) cambiando il numero qui sotto.
	wp_redirect( PREBENNA_FRONTEND_URL . '/blog/' . $slug, 302 );
	exit;
} );

// 3) Emette gli Open Graph tag per i singoli articoli, con la FEATURED IMAGE
//    dedicata dell'articolo. In pratica questo <head> viene servito solo ai bot
//    social (gli utenti reali vengono reindirizzati prima da template_redirect),
//    che così mostrano la foto specifica dell'articolo condiviso.
//
//    Se sul sito è già attivo un plugin SEO che genera gli Open Graph
//    (Yoast, Rank Math, SEOPress, All in One SEO), NON aggiungiamo i nostri tag
//    per evitare duplicati: lasciamo fare a lui.
add_action( 'wp_head', function () {
	if ( ! is_singular( 'post' ) ) {
		return;
	}

	// Evita duplicati se un plugin SEO gestisce già gli Open Graph.
	if (
		defined( 'WPSEO_VERSION' )                 // Yoast SEO
		|| defined( 'RANK_MATH_VERSION' )          // Rank Math
		|| defined( 'SEOPRESS_VERSION' )           // SEOPress
		|| defined( 'AIOSEO_VERSION' )             // All in One SEO
	) {
		return;
	}

	$post_id = get_queried_object_id();
	if ( ! $post_id ) {
		return;
	}

	$slug        = get_post_field( 'post_name', $post_id );
	$title       = get_the_title( $post_id );
	$description  = wp_strip_all_tags( get_the_excerpt( $post_id ) );
	$description = trim( preg_replace( '/\s+/', ' ', $description ) );
	if ( strlen( $description ) > 200 ) {
		$description = mb_substr( $description, 0, 197 ) . '…';
	}

	// og:url = la STESSA pagina WordPress che il bot sta leggendo (il permalink WP).
	// IMPORTANTE: NON puntare al frontend. Se og:url differisce dall'URL letto,
	// Facebook lo considera l'URL "canonico" e va a rileggere gli OG di quella
	// pagina (la SPA React, che ha solo la og-image GENERALE) -> mostrerebbe la
	// foto sbagliata. Puntando alla stessa pagina WP, usa la featured image qui sotto.
	// L'utente reale che clicca viene comunque reindirizzato al frontend.
	$canonical = get_permalink( $post_id );

	// Featured image dedicata all'articolo (dimensione grande per un'anteprima ricca).
	$image     = '';
	$image_w   = 0;
	$image_h   = 0;
	$thumb_id  = get_post_thumbnail_id( $post_id );
	if ( $thumb_id ) {
		$src = wp_get_attachment_image_src( $thumb_id, 'large' );
		if ( $src ) {
			$image   = $src[0];
			$image_w = (int) $src[1];
			$image_h = (int) $src[2];
		}
	}

	echo "\n<!-- Open Graph headless (nicolaprebenna.it) -->\n";
	echo '<meta property="og:type" content="article" />' . "\n";
	echo '<meta property="og:site_name" content="' . esc_attr( get_bloginfo( 'name' ) ) . '" />' . "\n";
	echo '<meta property="og:locale" content="it_IT" />' . "\n";
	echo '<meta property="og:title" content="' . esc_attr( $title ) . '" />' . "\n";
	if ( $description !== '' ) {
		echo '<meta property="og:description" content="' . esc_attr( $description ) . '" />' . "\n";
	}
	echo '<meta property="og:url" content="' . esc_url( $canonical ) . '" />' . "\n";

	echo '<meta name="twitter:card" content="' . ( $image ? 'summary_large_image' : 'summary' ) . '" />' . "\n";
	echo '<meta name="twitter:title" content="' . esc_attr( $title ) . '" />' . "\n";
	if ( $description !== '' ) {
		echo '<meta name="twitter:description" content="' . esc_attr( $description ) . '" />' . "\n";
	}

	if ( $image ) {
		echo '<meta property="og:image" content="' . esc_url( $image ) . '" />' . "\n";
		echo '<meta property="og:image:secure_url" content="' . esc_url( $image ) . '" />' . "\n";
		if ( $image_w && $image_h ) {
			echo '<meta property="og:image:width" content="' . $image_w . '" />' . "\n";
			echo '<meta property="og:image:height" content="' . $image_h . '" />' . "\n";
		}
		echo '<meta name="twitter:image" content="' . esc_url( $image ) . '" />' . "\n";
	}
	echo "<!-- /Open Graph headless -->\n";
}, 5 );
