<?php
    $query = require ('connect.php'); //conexao banco
    $user = $query ->selectAll($table);
    
    echo json_encode(['data'=>$user]);