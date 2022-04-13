<?php
    $query = require ('connect.php'); //conexao banco
    $clientes = $query ->selectAll($table);
    
    echo json_encode(['data'=>$clientes]);