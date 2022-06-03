<?php 

$conn = new mysqli('127.0.0.1', 'root', '', 'edogame');
    if($conn->connect_error){
        die('connessione fallita: '.$conn->connect_error);

    }


?>