<?php
$query = require('connect.php'); //conexao banco
// Get the posted data.
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  // Extract the data.

  $request = json_decode($postdata);
  $email = $request->data->email;
  $senha = $request->data->senha;
  
  // Validate.
  if ($nome === '' || $senha === '') {
    return http_response_code(400);
  }
  


  $user = $query->selectClienteByEmail('cadastro', ['email' => $email ]);
  if (!$user){
    if($user['senha'] == $senha){
        echo json_encode(['data'=>['user'=>$user]]);
      }
      else{
        throw new Exception("Senha inválida");
     }
  }
  else{
    throw new Exception("Usuário não encontrado");
  }
  
  
} else {
  die('Dados inválidos encontrado');
}