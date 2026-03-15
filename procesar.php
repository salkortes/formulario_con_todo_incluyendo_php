<?php

$usuario = trim($_POST["usuario"]);
$email = trim($_POST["email"]);
$dni = trim($_POST["dni"]);
$password = trim($_POST["password"]);
$pais = trim($_POST["pais"]);
$edad = $_POST["edad"];

// aquí usamos isset porque el checkbox puede no existir
$terminos = isset($_POST["terminos"]);

if (empty($usuario)) {
    echo "El usuario está vacío";
} else {
    echo "El usuario es: " . $usuario . "<br>";
}

if (empty($email)) {
    echo "El email está vacío";
} else {
    echo "El email es: " . $email . "<br>";
}

if (empty($dni)) {
    echo "El dni está vacío";
} else {
    echo "El dni es: " . $dni . "<br>";
}

if (empty($password)) {
    echo "La contraseña está vacía";
} else {
    echo "La contraseña es: " . $password . "<br>";
}

if (empty($pais)) {
    echo "El campo país está vacío";
} else {
    echo "El país es: " . $pais . "<br>";
}

if (empty($edad)) {
    echo "La edad está vacía";
} else {
    echo "La edad es: " . $edad . "<br>";
}

// aquí comprobamos el checkbox correctamente
if (!$terminos) {
    echo "Los términos no están aceptados";
} else {
    echo "Has aceptado los términos";
}

?>