<?php

    require("vendor/autoload.php");
    use Pecee\SimpleRouter\SimpleRouter as Router;
  
    
   
    //rotas seguras 
    
    Router::post('api/User/Cadastro', 'UserController@inserirUser');
    Router::post('api/User/Atualizar-Cadastro', 'UserController@updateUser');
    Router::post('api/User/Cancelar-Cadastro', 'UserController@deleteUser');
    Router::get('api/User/Busca', 'UserController@selectUser');
    Router::get('api/User/Lista', 'UserController@selecList');


    Router::post('api/Pizza/Cadastro', 'PizzaController@inserirPizza');
    Router::post('api/Pizza/Atualizar-Cadastro', 'PizzaController@updatePizza');
    Router::post('api/Pizza/Cancelar-Cadastro', 'PizzaController@deletePizza');
    Router::get('api/Pizza/Busca', 'PizzaController@selectPizza');
    Router::get('api/Pizza/Lista', 'PizzaController@selecPizza');



    Router::start();