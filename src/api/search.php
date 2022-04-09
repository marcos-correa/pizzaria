<?php

    $query = require ('connect.php');
// localhost/api/search?model=tesla
// {data}
    $model = $_GET['model'];

   if(isset($model))
   {
       // Extract the data.
      //  $request = json_decode($postdata);
      //  $model = trim($request->data->model);

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