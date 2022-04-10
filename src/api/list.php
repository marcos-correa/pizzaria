<?php
    $query = require ('connect.php'); //conexao banco
    $cars = $query ->selectAll("cars");
    
    echo json_encode(['data'=>$cars]);