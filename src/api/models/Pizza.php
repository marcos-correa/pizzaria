<?php
    use JMS\Serializer\Annotation as Serializer;
    use Symfony\Component\Validator\Constraints\NotBlank;
    use Symfony\Component\Validator\Mapping\ClassMetadata;
    use Symfony\Component\Validator\Constraints as Assert;
    


    class Pizza extends Query{

        public $id;
       
        /**
         * @var string
         * @Assert\NotBlank(message="O campo nome não pode estar vazio")
         * @Assert\Regex(
         * pattern = "/^[a-z ]+$/i",
         * message="O campo nome {{ value }} só pode conter letras"
        * )
         */
        public $name;
        
        /**
         * @var string
         * @Assert\NotBlank(message="O campo código não pode estar vazio")
         */
        public $code;

         /**
         * @var string
         * @Assert\NotBlank(message="O campo de descrição não pode estar vazio")
         */  
        public $description;

        /**
         * @var string
         * @Assert\NotBlank(message="O campo imagem não pode estar vazio")
         */
        public $image;

        /**
         * @var numeric
         * @Assert\NotBlank(message="O campo prço não pode estar vazio")    
         */
        public $price;

        /**
         * @var string
         * @Assert\NotBlank(message="O campo categoria não pode estar vazio")
         * @Assert\Type("string", message="O campo categoria {{ value }}  está inválido")
         */ 
        public $category;

        
        
        public $table;
        



        public function __construct(){
            $config = require("config.php");
            $this -> table = $config['table_pizza'];
           


            parent::__construct($this -> table);
            
        }

        public function attributes(): array{
            return ['id','name', 'code', 'image', 'description', 'price', 'category'];
        }

        public function validatesInsert($object){
            $errors=array();
            if (!empty($object -> selectByParameter('code', $object -> code))){
                array_push($errors, 'Este código já está cadastrado');
                return [$errors];
                }

            if (!empty($object -> selectByParameter('name', $object -> name))){
                array_push($errors,'Uma pizza com este nome já está cadastrada');
                return [$errors];
                }
            return $errors;
        }

        public function validatesUpdate($object){
            $errors=array();

            $pizza = $object -> selectByParameter('id', $object -> id);
            if (empty($pizza)){
                array_push($errors, 'A pizza não foi encontrada no sistema');
                return [$errors];
            }

            $pizza = $object -> selectByParameter('code', $object -> code);
            if (!empty($pizza)){
                $pizza = $pizza[0];
                if (($pizza -> code == $object -> code) && ($pizza -> id != $object -> id)){
                    array_push($errors, 'Uma pizza com este código já está cadastrada');
                    return [$errors];
                    }
            }
            

            $pizza = $object -> selectByParameter('name', $object -> name);
            if (!empty($pizza)){
                $pizza = $pizza[0];
                if (($pizza -> name == $object -> name) && ($pizza -> id != $object -> id)){
                    array_push($errors,'Uma pizza com este nome já está cadastrada');
                    return [$errors];
                }
            }
            
            return $errors;
        }

        public function validatesDelete($id){
            $errors=array();

            $pizza = $this -> selectByParameter('id', $id);
            if (empty($pizza)){
                array_push($errors, 'A Pizza não foi encontrada no sistema');
                return [$errors];
            }

            return $errors;
            }
            
            
        
    }
