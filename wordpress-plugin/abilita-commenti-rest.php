<?php
/**
 * Plugin Name: Headless – Commenti REST + Redirect al frontend
 * Description: Abilita i commenti via REST dal sito React e reindirizza le pagine articolo di WordPress al frontend del sito (nicolaprebenna.it/blog/...). Esclude i bot social dal redirect così Facebook/LinkedIn/WhatsApp leggono gli Open Graph con la featured image.
 * Version: 1.2.0
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
