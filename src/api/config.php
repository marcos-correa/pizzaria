<?php

return [
    'database' => [
        'name' => 'aulabd', //Nome do Banco
        'username' => 'root', //Nome do usuário
        'password' => '', //Senha
        'conection' => 'mysql:host=localhost',
        'table' => 'cadastro', //Nome da tabela
        'options' => [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]
    ]
        ];