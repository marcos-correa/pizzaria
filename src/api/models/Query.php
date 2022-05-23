<?php


use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Serializer\Exception\PartialDenormalizationException;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Validation;
use Symfony\Component\Validator\ConstraintViolationList;
use Doctrine\Common\Annotations\AnnotationRegistry;




    abstract class Query{
        protected $bd;
        protected $table;
        protected Serializer $serializer;
        protected ValidatorInterface $validator;

        public function __construct($table)
        {
            $connect = new Conexao();
            $this -> bd =  $connect -> Conectar(); 
            $this -> table = $table;
            $this -> attributes = $this -> attributes();
        }

        abstract public function attributes(): array;

        public function selectAll(){
            $statement = $this -> bd -> prepare("select * from {$this -> table}");
           try{
            $statement -> execute();
            return  $statement -> fetchAll(PDO::FETCH_CLASS);
           }
           catch(Exception $e){
            throw new Exception("Falha na busca pelos usuários no banco ->" . $e->getMessage());
        }
           

        }

        public function selectByParameter($parameter, $value){
            $statement = $this -> bd -> prepare("select * from {$this -> table} where {$parameter} = '{$value}'");
            try{
                $statement -> execute();
                return  $statement -> fetchAll(PDO::FETCH_CLASS);
            }
            catch(Exception $e){
                throw new Exception("Falha na busca do usuário no banco ->" . $e->getMessage());
            }

        }


        public function delete($id){
            $statement = $this -> bd -> prepare("delete from {$this -> table} where id = '{$id}'");
           
            try{
                $statement -> execute();
            }
            catch(Exception $e){
                throw new Exception ('Falha para cancelar o cadastro -> ' . $e->getMessage());
            }

        }

        public function insert(){
           
            $this -> attributes = array_diff( $this -> attributes, ['id'] );
            $params = array_map(fn($attr) => ":$attr", $this -> attributes);

            $sql =  sprintf(
                'insert into %s (%s) values (%s)',
                $this -> table,
                implode(', ', $this -> attributes),
                implode(',', $params) 
            );
            
            try{
                $statement = $this -> bd -> prepare($sql);
              
                foreach($this -> attributes as $attribute){
                    $statement -> bindValue(":$attribute", $this ->{$attribute});}
               
                $statement -> execute();
               
                
            }
            catch(Exception $e){
                throw new Exception ('Falha na inserção dos dados no banco -> ' . $e->getMessage());
                
            }
            
        }

        
 
        public function update(){

            $sql = "update {$this -> table}  set ";
            foreach ($this -> attributes as $attribute): 
                if($attribute !='id'){
                    $sql = $sql . $attribute . "= :" . $attribute . ", ";
                }
                
            endforeach;
            $sql = rtrim($sql, ", ");
            $sql = $sql . " where id = :id";

           
            try{
                $statement = $this -> bd -> prepare($sql);

                foreach($this -> attributes as $attribute){
                    $statement -> bindValue(":$attribute", $this ->{$attribute});}
                var_dump($statement);
                $statement -> execute(); //bindParam com vetor
            }
            catch(Exception $e){
                throw new Exception('Falha na atualização dos dados no banco: ' . $e->getMessage());
            }

        }

        public function loadData($dados, $classe){

            $encoders = [new JsonEncoder()];
            $normalizers = [new ObjectNormalizer()];
            $this->serializer = new Serializer($normalizers, $encoders);
            
            return $this->serializer->deserialize($dados, $classe, 'json');
        }

        abstract public function validatesInsert($object);

        abstract public function validatesUpdate($object);

        abstract public function validatesDelete($object);

        public function validatesParameters($object){
            $errors=array();

            $this->validator = Validation::createValidatorBuilder()
                        ->enableAnnotationMapping(true)
                        ->addDefaultDoctrineAnnotationReader()
                        ->getValidator();


            $errors_form = $this -> validator->validate($object);
            
            if (!empty($errors_form[0])){
                array_push($errors, $this->get_violations($errors_form));
                return $errors;
            }
           
                
            return $errors;
            
        }


        function get_violations(ConstraintViolationList $violations) {
            //$out = 'violation count: ' . count($violations);
            $out = array();
            foreach($violations as $v) {  
                
                array_push($out,$v->getMessage());
            }
    
            return $out;
        }

        
        
    }

   