<?php

    $query = require ('connect.php'); //conexao banco
    $model = $_GET['email'];

   if(isset($email) && !empty($email))
   {
      
       

       // Validate.
       if($email === '')
       {
           return http_response_code(400);
       }
   

       $cliente = $query ->selectClienteByEmail("cadastro", $email);
       echo json_encode(['data'=>['email'=>$email]]);

   
   }
   else{
       die('Dados inválidos');
   }

    
