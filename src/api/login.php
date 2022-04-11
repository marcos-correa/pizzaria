<?php
$query = require('connect.php'); //conexao banco
require('jwt.php');
// Get the posted data.
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  // Extract the data.

  $request = json_decode($postdata);
  $email = $request->data->email;
  $senha = $request->data->senha;
  $senha = md5($senha);
  $tokenGerado = gerarToken($email,$senha);

  // Validate.
  if ($email === '' || $senha === '') {
    return http_response_code(400);
  }
  


  $user = $query->selectClienteByEmail('cadastro', $email);
 
  
  if (!empty($user)){
      $user = $user[0];
    if($user -> senha == $senha){
        echo json_encode(['data'=>[
          'token'=>$tokenGerado, 
          'usuario'=>$user]]);
      }
      else{
       die('Senha inválida');
     }
  }
  else{
    die("Usuário não encontrado");
  }
  
  
} else {
  die('Dados inválidos encontrado');
}