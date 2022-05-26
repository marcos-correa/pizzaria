<?php 


    class Request{

        

        public function validate(){
            try{
                $this -> request = json_decode(file_get_contents("php://input"));

                if(isset($this -> request) && !empty($this -> request)){
                    return $this -> request -> data;
                }
                else{
                    new Response(400, ['Sem dados de requisição ']);
                    die;
                }
            }
            catch(Exception $e){
                new Response(400, ['Falha na requisição dos dados -> '. $e->getMessage()]);
                die;
            }     
        }


        public function jsonData(){
            return json_encode($this -> validate());
        }

        public function objectData(){
            return $this -> validate();
        }
        
        
    }