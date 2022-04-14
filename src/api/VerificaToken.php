<?php

require_once 'jwt.php';

    $tokenFront = $_GET['token'];
    //$token = $tokenGerado; //recebe o token gerado ateriormente 
 
    //$parts = explode('.',$token); //separaramos ele pelos pontos( header , payload e assinatura(senha) )

    //$signature = base64Erlencode( //refazmeos a assinatura
      //  hash_hmac('sha256',$parts[0].'.'.$parts[1],"qualquercoisa",true)
    //);/

    if($signature == $parts[2]){ //compara com a assinatura anterior 
        $paylaod = json_decode(
        base64_decode($parts[1])
    );
    echo 'token valido';
    } else {
      echo 'token invalido';
    }

    // }else{
    //   echo 'Token invalido ';
    // }

?>