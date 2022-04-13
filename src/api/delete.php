<?php

    $query = require ('connect.php'); //conexao banco
    $nome= $_GET['id'];

   if(isset($id) && !empty($id))
   {
      

       // Validação
       if($id === '')
       {
       
        die('Dados faltando');
    }
   

       $query ->delete($table, $id);

   
   }
   else{
       die('Falha na requisição');
   }

    
