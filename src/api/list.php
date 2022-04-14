<?php
    $query = require ('connect.php'); //conexao banco
    require('jwt.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    if (isset($request) && !empty($request)) {
      $token = $request->data->token;
      if(verificaTokenBody($token)){
        $user = $query ->selectAll($table);
        echo json_encode(['data'=>$user]);
      }
      else{
        $code = 404;
        $reason = 'Acesso nao autorizado. Falha na autenticacao';
        header("HTTP/1.0 $code $reason");
      }
    }
    