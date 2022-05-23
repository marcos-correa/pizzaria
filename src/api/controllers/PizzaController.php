<?php


use Pecee\SimpleRouter\SimpleRouter as Router;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Validator\Validation;




    class PizzaController{
        
        protected Pizza $pizza;
        public Request $request;
        

        public function __construct()
        {
            $this -> pizza = new Pizza();
            $this -> request = new Request();
            
        }

        

        public function inserirPizza(){
                  
            try{

                $dados = $this -> request -> jsonData();
                $this -> pizza = $this -> pizza -> loadData($dados, Pizza::class);
                $errors = $this -> pizza -> validatesParameters($this -> pizza);
                
                if(empty($errors))//se vazio insere
                    
                {   $errors = $this -> pizza -> validatesInsert($this -> pizza);
                    if(empty($errors)){
                        $this -> pizza -> insert();
                        new Response(200, ["Inserção com sucesso"]);
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
           

        public function updatePizza(){
            try{
                $dados = $this -> request -> jsonData();
                $this -> pizza = $this -> pizza -> loadData($dados, Pizza::class);
                $errors = $this -> pizza -> validatesParameters($this -> pizza);
                
                if(empty($errors))
                    
                {   $errors = $this -> pizza -> validatesUpdate($this -> pizza);
                    if(empty($errors)){
                        $this -> pizza -> update();
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

        public function deletePizza(){
            try{
                $dados = $this -> request -> objectData();
                $errors = $this -> pizza -> validatesDelete($dados -> id);
                
                if(empty($errors)) {   
                    $this -> pizza -> delete($dados -> id);
                    new Response(200, ["Remoção da pizza com sucesso"]);                   
                }
                else{
                    new Response(400, $errors[0]);
                }
            }

            catch(Exception $e){
                new Response(400, ['Falha no cancelamento do cadastro -> ' . $e->getMessage()]);
               
            }
        }

        public function selectPizza(){
            try{
                $dados = $this -> request -> objectData();
                $pizza = $this -> pizza -> selectByParameter('id', $dados -> id);
                if(!empty($pizza)) {   
                    new Response(200, $pizza[0]);                   
                }
                else{
                    new Response(400, ["A pizza não foi encontrada no sistema"]);
                }
            }

            catch(Exception $e){
                new Response(400, ['Falha na busca pela pizza -> ' . $e->getMessage()]);
               
            }
        }

        public function selecList(){
            try{
                $list = $this -> pizza -> selectAll();
                if(!empty($list)) {   
                    new Response(200, $list);                   
                }
                else{
                    new Response(400, ["Não foram encontradas pizza no sistema"]); 
                }
            }

            catch(Exception $e){
                new Response(400, ['Falha na busca pelas pizzas -> ' . $e->getMessage()]);
               
            }
        }

        

        
    }
