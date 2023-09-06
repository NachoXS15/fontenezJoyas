<?php
    try {
        $conection = new mysqli ("localhost", "root", "", "fontenezjoyas");
    } catch (\Throwable $e) {
        echo "Error en la conexion: " . $e -> getMessage();
    }
?>