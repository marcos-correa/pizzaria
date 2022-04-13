<?php

    $query = require ('connect.php'); //conexao banco
    $nome= $_GET['id'];

   if(isset($id) && !empty($id))
   {
      

       // Validate.
       if($id === '')
       {
       
           return http_response_code(400);
       }
   

       $query ->delete($table, $id);

   
   }
   else{
       die('Dados inválidos');
   }

    
