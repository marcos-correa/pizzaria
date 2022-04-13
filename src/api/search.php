<?php

    $query = require ('connect.php'); //conexao banco
    $cliente = $_GET['email'];

   if(isset($email) && !empty($email))
   {
      
       

       // Validate.
       if($email === '')
       {
           return http_response_code(400);
       }
   

       $cliente = $query ->selectUsuarioByEmail($table, $email);
       echo json_encode(['data'=>['nome'=>$nome]]);

   
   }
   else{
       die('Dados inválidos');
   }

    
