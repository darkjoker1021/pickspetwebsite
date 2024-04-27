<?php
// Connessione al database
$conn = new mysqli("localhost", "root", "", "pickspet");

// Verifica della connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Preparazione della query
$query = $conn->prepare("INSERT INTO user (username, email, password, dob) VALUES (?, ?, ?, ?)");
$query->bind_param("ssss", $username, $email, $password, $dob);

// Raccolta dei dati inviati dal form
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password']; // Considera di usare hash della password
$dob = $_POST['dob'];

// Esecuzione della query
$query->execute();

if ($query->affected_rows > 0) {
    echo "Registrazione effettuata con successo!";
} else {
    echo "Registrazione fallita: " . $conn->error;
}

$query->close();
$conn->close();
?>
