<?php

    $query = require ('connect.php'); //conexao banco
    $nome= $_GET['nome'];

   if(isset($nome) && !empty($nome))
   {
      

       // Validate.
       if($nome === '')
       {
       
           return http_response_code(400);
       }
   

       $query ->delete("cadastro", $nome);

   
   }
   else{
       die('Dados inválidos');
   }

    
