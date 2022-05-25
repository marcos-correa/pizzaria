<?php


use Pecee\SimpleRouter\SimpleRouter as Router;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Validator\Validation;




    class UserController{
        
        public User $user;
        public Request $request;
        public Auth $auth;
        

        public function __construct()
        {
            $this -> user = new User();
            $this -> request = new Request();
            $this -> auth = new Auth();
            //$this -> registerMiddleware(new AuthMiddleware());
        }

        

        public function inserirUser(){
                  
            try{

                $dados = $this -> request -> jsonData();
                $this -> user = $this -> user -> loadData($dados, User::class);
                //--------------$this -> user ->  senha
                $errors = $this -> user -> validatesParameters($this -> user);
                
                if(empty($errors))//se vazio insere
                    
                {   $errors = $this -> user -> validatesInsert($this -> user);
                    if(empty($errors)){
                        $this -> user -> insert();
                        new Response(200, ["Inserção com sucesso"]);
                        //session set 
                        //-------response redirect 

                    }
                    else{
                        new Response(400, $errors[0]);
                    }                    
                }
                else{
                    new Response(400, $errors[0]);
                }
            }

            catch(Exception $e){
                new Response(400, ['Falha na inserção -> ' . $e->getMessage()]);
               
            }
      
        }
           

        public function updateUser(){
            try{
                $dados = $this -> request -> jsonData();
                $this -> user = $this -> user -> loadData($dados, User::class);
                $errors = $this -> user -> validatesParameters($this -> user);
                
                if(empty($errors))
                    
                {   $errors = $this -> user -> validatesUpdate($this -> user);
                    if(empty($errors)){
                        $this -> user -> update();
                        new Response(200, ["Atualização com sucesso"]);
                    }
                    else{
                        new Response(400, $errors[0]);
                    }                    
                }
                else{
                    new Response(400, $errors[0]);
                }
            }

            catch(Exception $e){
                new Response(400, ['Falha na atualização -> ' . $e->getMessage()]);
               
            }
        }

        public function deleteUser(){
            try{
                $dados = $this -> request -> objectData();
                $errors = $this -> user -> validatesDelete($dados -> id);
                
                if(empty($errors)) {   
                    $this -> user -> delete($dados -> id);
                    new Response(200, ["Cancelamento da conta com sucesso"]);                   
                }
                else{
                    new Response(400, $errors[0]);
                }
            }

            catch(Exception $e){
                new Response(400, ['Falha no cancelamento do cadastro -> ' . $e->getMessage()]);
               
            }
        }

        public function selectUser(){
            try{
                $dados = $this -> request -> objectData();
                $user = $this -> user -> selectByParameter('id', $dados -> id);
                if(!empty($user)) {   
                    new Response(200, $user[0]);                   
                }
                else{
                    new Response(400, ["O usuário não foi encontrado no sistema"]);
                }
            }

            catch(Exception $e){
                new Response(400, ['Falha na busca pelo usuário -> ' . $e->getMessage()]);
               
            }
        }

        public function selecList(){
            try{
                $list = $this -> user -> selectAll();
                if(!empty($list)) {   
                    new Response(200, $list);                   
                }
                else{
                    new Response(400, ["Não foram encontrados usuários no sistema"]); 
                }
            }

            catch(Exception $e){
                new Response(400, ['Falha na busca pelos usuários -> ' . $e->getMessage()]);
               
            }
        }

        

        public function login(){
            try{
                $dados = $this -> request -> objectData();
                $user = $this -> user -> validatesLogin($dados -> email, $dados -> senha );
                $tokenGerado = $this -> auth ->gerarToken($dados -> email);

                new Response(200, [
                    'token' => $tokenGerado,
                    'usuario' => $user
                  ]);
                       
            }
 
            catch(Exception $e){
                new Response(400, ['Falha no login -> ' . $e->getMessage()]);
               
            }
        }

        
    }

    //get sessio para redirect
    //setflash