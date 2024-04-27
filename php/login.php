<?php
// Connessione al database
$conn = new mysqli("localhost", "root", "", "pickspet");

// Verifica della connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Preparazione della query
$query = $conn->prepare("SELECT * FROM user WHERE username=? AND password=?");
$query->bind_param("ss", $username, $password);

// Raccolta dei dati inviati dal form
$username = $_POST['username'];
$password = $_POST['password']; // Considera di usare hash della password

// Esecuzione della query
$query->execute();
$result = $query->get_result();

// Verifica dell'esistenza dell'utente
if ($result->num_rows > 0) {
    echo "Login effettuato con successo!";
    // Qui potresti impostare sessioni o cookie come necessario
} else {
    echo "Login fallito. Username o password errati.";
}

$query->close();
$conn->close();
?>
