<?php

    require("vendor/autoload.php");
    use Pecee\SimpleRouter\SimpleRouter as Router;
  
    //Router::csrfVerifier(new CsrfVerifier());
   
    //rotas seguras 
    //var_dump(Router::router()->getCsrfVerifier()->getTokenProvider()->getToken());

    Router::group(['middleware' => ApiVerification::class], function () {
        Router::post('api/User/Atualizar-Cadastro', 'UserController@updateUser');
        Router::post('api/User/Cancelar-Cadastro', 'UserController@deleteUser');
        
        Router::post('api/Pizza/Cadastro', 'PizzaController@inserirPizza');
        Router::post('api/Pizza/Atualizar-Cadastro', 'PizzaController@updatePizza');
        Router::post('api/Pizza/Cancelar-Cadastro', 'PizzaController@deletePizza');
        
        // Router::get('api/Pizza/Lista', 'PizzaController@selectList');
        
      });
    Router::get('api/Pizza/Busca', 'PizzaController@selectPizza');
    Router::post('api/Pizza/Lista', 'PizzaController@selectList');
    Router::get('api/User/Lista', 'UserController@selecList');
    Router::get('api/User/Busca', 'UserController@selectUser');
    Router::post('api/User/Login', 'UserController@login');
    Router::post('api/User/Cadastro', 'UserController@inserirUser');

    
    

    

    Router::start();
