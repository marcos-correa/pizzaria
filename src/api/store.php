<?php
$query = require('connect.php'); //conexao banco
// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.

  $request = json_decode($postdata);
  $model = trim($request->data->model);
  $price = $request->data->price;
  
  // Validate.
  if ($model === '' || $price < 1) {
    return http_response_code(400);
  }


  $query->insert('cars', [
    'model' => $model,
    'price' => $price
  ]);
} else {
  die('Dados inválidos');
}
