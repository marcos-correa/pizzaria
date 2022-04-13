<?php

return [
    'database' => [
        'name' => 'aulabd',
        'username' => 'root',
        'password' => '',
        'conection' => 'mysql:host=localhost',
        'table' => 'cadastro',
        'options' => [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]
    ]
        ];