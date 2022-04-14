<?php

// RODAR NO CMD:  "composer require lcobucci/jwt" 

//include 'login.php'; //pega as info do login 
function base64Erlencode($data){
    return str_replace(['+','/','-'],['-','_',''], base64_encode($data));
} //função q o vccode n tem

function gerarToken($email, $senha){
    $header =base64Erlencode ('{ "alg" : "HS256", "typ":"JWT"}');
    //O Header é um objeto JSON que define informações sobre o tipo do token (typ),
    // nesse caso JWT, e o algorítmo de criptografia usado em sua assinatura (alg), 
    // normalmente HMAC SHA256 ou RSA.

    $payload =base64Erlencode('{"email":'.$email.', "iat":'.time().'}');
    //O Payload é um objeto JSON com as Claims (informações) da entidade tratada, normalmente o usuário autenticado.
    //iat (issued at) = Timestamp de quando o token foi criado;

    $signature = base64Erlencode( //assinatura 'senha'
       hash_hmac('sha256',$header.'.'.$payload,$senha,true)
    );

    $tokenGerado = $header.'.'.$payload.'.'.$signature;

    return $tokenGerado; 

}


function verificaToken($http_header)
{
  if (isset($http_header['Authorization']) && $http_header['Authorization'] != null) {
      $bearer = explode (' ', $http_header['Authorization']);
      $token = explode('.', $bearer[1]);
      $header = $token[0];
      $payload = $token[1];
      $sign = $token[2];

      $valid = hash_hmac('sha256', $header . "." . $payload, 'trabalho_web_servidor', true);
      $valid = base64Erlencode($valid);

      if ($sign === $valid) {
        return true;
      }
  }

  return false;
}

function verificaTokenBody($bearer_)
{
  if (isset($bearer_) && $bearer_ != null) {
      $bearer = explode (' ', $bearer_);
      $token = explode('.', $bearer[1]);
      $header = $token[0];
      $payload = $token[1];
      $sign = $token[2];

      $valid = hash_hmac('sha256', $header . "." . $payload, 'trabalho_web_servidor', true);
      $valid = base64Erlencode($valid);

      if ($sign === $valid) {
        return true;
      }
  }

  return false;
}

?>




