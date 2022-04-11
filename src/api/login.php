<?php
$query = require('connect.php'); //conexao banco
// Get the posted data.
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  // Extract the data.

  $request = json_decode($postdata);
  $email = $request->data->email;
  $senha = $request->data->senha;
  $senha = md5($senha);

  // Validate.
  if ($email === '' || $senha === '') {
    return http_response_code(400);
  }
  


  $user = $query->selectClienteByEmail('cadastro', $email);
 
  
  if (!empty($user)){
      $user = $user[0];
      //print_r($user);
    if($user -> senha == $senha){
        // ieua
        echo json_encode(['data'=>[
          
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