<?php
    class QueryBuilder{
        protected $bd;

        public function __construct($bd)
        {
            $this -> bd = $bd;
        }

        public function selectAll($table){
            $statement = $this -> bd -> prepare("select * from {$table}");
           try{
            $statement -> execute();
            return  $statement -> fetchAll(PDO::FETCH_CLASS);
           }
           catch(Exception $e){
            throw new Exception($e->getMessage());
        }
           

        }

        public function selectUsuarioByEmail($table, $email){
            $statement = $this -> bd -> prepare("select * from {$table} where email = '{$email}'");
            try{
                $statement -> execute();
                return  $statement -> fetchAll(PDO::FETCH_CLASS);
            }
            catch(Exception $e){
                throw new Exception($e->getMessage());
            }

        }

        public function selectUsuarioByCpf($table, $cpf){
            $statement = $this -> bd -> prepare("select * from {$table} where cpf = '{$cpf}'");
            try{
                $statement -> execute();
                return  $statement -> fetchAll(PDO::FETCH_CLASS);
            }
            catch(Exception $e){
                throw new Exception($e->getMessage());
            }

        }

        public function delete($table, $id){
            $statement = $this -> bd -> prepare("delete from {$table} where nome = '{$id}'");
            //print_r($statement);
            try{
                $statement -> execute();
            }
            catch(Exception $e){
                //throw new Exception($e->getMessage());
                echo 'Falha para cancelar o cadastro: ' . $e->getMessage();
            }

        }

        public function insert($table, $parameters){
            $sql = sprintf(
                'insert into %s (%s) values (%s)',
                $table,
                implode(', ', array_keys($parameters)),
                ':' . implode(', :', array_keys($parameters))
            );

            try{
                $statement = $this -> bd -> prepare($sql);

                $statement -> execute($parameters);
            }
            catch(Exception $e){
                //throw new Exception($e->getMessage());
                echo 'Falha na inserção dos dados no banco: ' . $e->getMessage();
            }
        }

        public function update($table, $parameters ){
            $statement = $this -> bd -> prepare("update {$table}  set 
            nome = '{$parameters['nome']}', 
            cpf = '{$parameters['cpf']}', 
            email = '{$parameters['email']}', 
            telefone = '{$parameters['telefone']}', 
            cep = '{$parameters['cep']}', 
            numero = '{$parameters['numero']}', 
            rua = '{$parameters['rua']}', 
            bairro = '{$parameters['bairro']}', 
            cidade = '{$parameters['cidade']}', 
            estado = '{$parameters['estado']}', 
            senha = '{$parameters['senha']}' 
            where id = '{$parameters['id']}'");
            //print_r($statement);
            try{
                $statement -> execute();
            }
            catch(Exception $e){
                //throw new Exception($e->getMessage());
                echo 'Falha na atualização dos dados no banco: ' . $e->getMessage();
            }

        }
        
        }




        

      
    
   
