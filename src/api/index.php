<?php

    require("vendor/autoload.php");
    use Pecee\SimpleRouter\SimpleRouter as Router;
  
    
   
    //rotas seguras 
    
    Router::post('/User/Cadastro', 'UserController@inserirUser');
    Router::post('/User/Atualizar-Cadastro', 'UserController@updateUser');
    Router::post('/User/Cancelar-Cadastro', 'UserController@deleteUser');//cadastrado e logado token
    Router::get('/User/Busca', 'UserController@selectUser');
    Router::get('/User/Lista', 'UserController@selecList');
    Router::start();