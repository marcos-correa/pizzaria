<?php


function base64Erlencode($data){
    return str_replace(['+','/','-'],['-','_',''], base64_encode($data));
} 

function gerarToken($email){
    $header = base64Erlencode('{ "alg" : "HS256", "typ":"JWT"}');
    $payload = base64Erlencode('{"email":'.$email.'}');
    $senhasecreta = 'trabalho_web_servidor';

    $signature = base64Erlencode(
       hash_hmac('sha256',$header.'.'.$payload,$senhasecreta,true)
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




