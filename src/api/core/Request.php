<?php 


    class Request{

        public $dados;
        
        public function __construct()
            {
                $this -> dados = $this -> validate();
            }

        public function validate(){
            try{
                $this -> request = json_decode(file_get_contents("php://input"));

                if(isset($this -> request) && !empty($this -> request)){
                    return $this -> request -> data;
                }
                else{
                    throw new Exception("Sem dados na requisição");
                }
            }
            catch(Exception $e){
                throw new Exception("Falha na requisição dos dados -> " . $e->getMessage());
               
            }     
        }


        public function jsonData(){
            return json_encode($this -> validate());
        }

        public function objectData(){
            return $this -> validate();
        }
        
        
    }