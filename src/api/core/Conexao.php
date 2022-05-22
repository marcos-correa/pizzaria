<?php

    class Conexao{
            private $host, $user, $senha, $banco;

        function __construct(){
            $config = require("config.php");
            $this -> host = $config['conection'];
            $this -> user = $config['username'];
            $this -> senha = $config['password'];
            $this -> banco = $config['name'];

        }

        public function Conectar() {
            $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
            
            try{
                return new PDO(
                    $this -> host.';dbname='.$this -> banco,
                    $this -> user,
                    $this -> senha,
                    $options
                );
                
            }
            catch(Exception $e) {
                throw new Exception($e->getMessage() . "Erro ao conectar com o banco de dados");
            }
          
        }

    }

    