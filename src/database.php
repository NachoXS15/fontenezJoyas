<?php
    try {
        $conection = new mysqli ("localhost", "root", "", "fontenezJoyas");
    } catch (\Throwable $e) {
        echo "Error en la conexion: " . $e -> getMessage();
    }
?>