<?php
// Configurazione
$to = "nicola.prebenna@gmail.com";
$subject_prefix = "Messaggio dal sito: ";

// Header per risposta JSON (fondamentale per Lovable/React)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Permette le chiamate dal tuo dominio Lovable

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Recupero e sanificazione dati
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject_user = strip_tags(trim($_POST["subject"]));
    $message = strip_tags(trim($_POST["message"]));
    $privacy = isset($_POST["privacy"]) ? "Accettata" : "Non accettata";

    // Validazione semplice
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Compila tutti i campi correttamente."]);
        exit;
    }

    // Costruzione corpo email
    $email_content = "Hai ricevuto un nuovo messaggio dal sito www.nicolaprebenna.it\n\n";
    $email_content .= "Nome: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Oggetto: $subject_user\n\n";
    $email_content .= "Messaggio:\n$message\n\n";
    $email_content .= "Consenso Privacy: $privacy\n";

    // Header email
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Invio
    if (mail($to, $subject_prefix . $subject_user, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Messaggio inviato con successo!"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Errore durante l'invio. Riprova più tardi."]);
    }

} else {
    http_response_code(403);
    echo json_encode(["message" => "Accesso negato."]);
}
?>
