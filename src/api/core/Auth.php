<?php

  class Auth{

    

    public function base64Erlencode($data){
      return str_replace(['+','/','-'],['-','_',''], base64_encode($data));
    } 
  
    public function gerarToken($email){
      $header = $this -> base64Erlencode('{ "alg" : "HS256", "typ":"JWT"}');
      $payload = $this -> base64Erlencode('{"email":'.$email.'}');
      $senhasecreta = 'trabalho_web_servidor';
  
      $signature = $this -> base64Erlencode(
         hash_hmac('sha256',$header.'.'.$payload,$senhasecreta,true)
      );
  
      $tokenGerado = $header.'.'.$payload.'.'.$signature;
  
      return $tokenGerado; 
  
    }
  
  
    public function verificaToken($http_header){
      if (isset($http_header['Authorization']) && $http_header['Authorization'] != null) {
        $bearer = explode (' ', $http_header['Authorization']);
        $token = explode('.', $bearer[1]);
        $header = $token[0];
        $payload = $token[1];
        $sign = $token[2];
  
        $valid = hash_hmac('sha256', $header . "." . $payload, 'trabalho_web_servidor', true);
        $valid = $this -> base64Erlencode($valid);
  
        if ($sign === $valid) {
          return true;
        }
    }
  
    return false;
  }
  
    public function verificaTokenBody($bearer_){
      if (isset($bearer_) && $bearer_ != null) {

        $bearer = explode (' ', $bearer_);
        $token = explode('.', $bearer[1]);
        $header = $token[0];
        $payload = $token[1];
        $sign = $token[2];
  
        $valid = hash_hmac('sha256', $header . "." . $payload, 'trabalho_web_servidor', true);
        $valid = $this -> base64Erlencode($valid);
  
        if ($sign === $valid) {
          return true;
        }
    }
  
    return false;
  }

  }








