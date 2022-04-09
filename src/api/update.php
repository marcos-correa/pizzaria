<?php
    $query = require ('connect.php'); //conexao banco
   // Get the posted data.
    $postdata = file_get_contents("php://input");

   if(isset($postdata) && !empty($postdata))
   {
       // Extract the data.
       $request = json_decode($postdata);
       $model = trim($request->data->model);
       $price = $request->data->price;
       $id = $request->data->id;

       // Validate.
       if($model === '' || $price < 1)
       {
           return http_response_code(400);
       }
   

       $query ->update('cars', [
           'model' => $model,
           'price' => $price,
           'id' => $id
   ]);
   
   }
   else{
       die('Dados inválidos');
   }