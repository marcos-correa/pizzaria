<?php

    $query = require ('connect.php'); //conexao banco
    $model = $_GET['model'];

   if(isset($model) && !empty($model))
   {
      
       

       // Validate.
       if($model === '')
       {
           return http_response_code(400);
       }
   

       $car = $query ->selectCarById("cars", $model);
       echo json_encode(['data'=>$car]);

   
   }
   else{
       die('Dados inválidos');
   }

    
