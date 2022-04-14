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

  try {
    // Validação
    if ($email === '' || $senha === '') {
      throw new Exception('Dados faltando');
    }

    $user = $query->selectUsuarioByEmail($table, $email);

    if (!empty($user)) {
      $user = $user[0];
      if ($user->senha == $senha) {
        $tokenGerado = gerarToken($email);
        echo json_encode(
          ['data' => [
            'token' => $tokenGerado,
            'usuario' => $user
          ]]
        );
      } else {
        throw new Exception('Senha inválida');
      }
    } else {
      throw new Exception('Usuário não encontrado');
    }
  } catch (Exception $e) {
    echo 'Não foi possível fazer o login: ' .  $e->getMessage();
  }
} else {
  $code = 404;
  $reason = 'Falha na requisição';
  header("HTTP/1.0 $code $reason");
}
