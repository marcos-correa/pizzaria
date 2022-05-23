<?php
    use JMS\Serializer\Annotation as Serializer;
    use Symfony\Component\Validator\Constraints\NotBlank;
    use Symfony\Component\Validator\Mapping\ClassMetadata;
    use Symfony\Component\Validator\Constraints as Assert;
    


    class User extends Query{

        public $id;
       
        /**
         * @var string
         * @Assert\NotBlank(message="O campo nome não pode estar vazio")
         * @Assert\Type("string", message="O campo nome  está inválido")
         */
        public $nome;
        
        /**
         * @var string
         * @Assert\NotBlank(message="O campo cpf não pode estar vazio")
         * @Assert\Regex(
         * pattern = "/^[0-9]+$/",
         * message="O campo cpf {{ value }}  está inválido"
         * )
         * @Assert\Length(
         * min = 11,    
         * minMessage = "O campo cpf {{ value }}  está inválido"
         * max = 11,    
         * maxMessage = "O campo cpf {{ value }}  está inválido"
         * )
         */
        public $cpf;

         /**
         * @var string
         * @Assert\Email(
         * message = "O email '{{ value }}' não é um email válido.")
         * @Assert\NotBlank(message="O campo email não pode estar vazio")
         */  
        public $email;

        /**
         * @var string
         * @Assert\Length(
         * min = 8,    
         * minMessage = "O campo cep {{ value }}  está inválido"
         * max = 8,    
         * maxMessage = "O campo cep {{ value }}  está inválido"
         * )
         * @Assert\NotBlank(message="O campo cep não pode estar vazio")
         */
        public $cep;

        /**
         * @var numeric
         * @Assert\NotBlank(message="O campo número não pode estar vazio")
         * @Assert\Regex(
         * pattern="/^[0-9]+$/",
         * message="O campo númeo {{ value }} só pode conter números."
        * )         
         */
        public $numero;

        /**
         * @var string
         * @Assert\NotBlank(message="O campo rua não pode estar vazio")
         * @Assert\Type("string", message="O campo rua {{ value }}  está inválido")
         */ 
        public $rua;

        
         /**
         * @var string
         * @Assert\NotBlank(message="O campo bairro não pode estar vazio")
         * @Assert\Type("string", message="O campo bairro {{ value }}  está inválido")
         * 
         */
        public $bairro;

        /**
         * @var string
         * @Assert\NotBlank(message="O campo cidade não pode estar vazio")
         * @Assert\Type("string", message="O campo cidade {{ value }}  está inválido")
         * 
         */
        public $cidade;
        
        /**
         * @var string
         * @Assert\NotBlank(message="O campo estado não pode estar vazio")
         * @Assert\Type("string", message="O campo estado {{ value }}  está inválido")
         * 
         */
        public $estado;

        /**
         * @var string
         * @Assert\NotBlank(message="O campo senha não pode estar vazio")
         * @Assert\Length(
         * min = 6,    
         * minMessage = "Sua senha deve conter mais do que {{ limit }} caracteres"
         * )
         */
        public $senha;

        public $table;
        



        public function __construct(){
            $config = require("config.php");
            $this -> table = $config['table_user'];
           


            parent::__construct($this -> table);
            
        }

        public function attributes(): array{
            return ['id','nome', 'cpf', 'email', 'cep', 'numero', 'rua', 'bairro', 'cidade', 'estado', 'senha'];
        }

        public function validatesInsert($object){
            $errors=array();
            if (!empty($object -> selectByParameter('email', $object -> email))){
                array_push($errors, 'Este email já está cadastrado');
                return [$errors];
                }

            if (!empty($object -> selectByParameter('cpf', $object -> cpf))){
                array_push($errors,'O usuário com este cpf já está cadastrado');
                return [$errors];
                }
            return $errors;
        }

        public function validatesUpdate($object){
            $errors=array();

            $user = $object -> selectByParameter('id', $object -> id);
            if (empty($user)){
                array_push($errors, 'O usuário não foi encontrado no sistema');
                return [$errors];
            }

            $user = $object -> selectByParameter('email', $object -> email);
            if (!empty($user)){
                $user = $user[0];
                if (($user -> email == $object -> email) && ($user -> id != $object -> id)){
                    array_push($errors, 'Este email já está cadastrado');
                    return [$errors];
                    }
            }
            

            $user = $object -> selectByParameter('cpf', $object -> cpf);
            if (!empty($user)){
                $user = $user[0];
                if (($user -> cpf == $object -> cpf) && ($user -> id != $object -> id)){
                    array_push($errors,'O usuário com este cpf já está cadastrado');
                    return [$errors];
                }
            }
            
            return $errors;
        }

        public function validatesDelete($id){
            $errors=array();

            $user = $this -> selectByParameter('id', $id);
            if (empty($user)){
                array_push($errors, 'O usuário não foi encontrado no sistema');
                return [$errors];
            }

            return $errors;
            }
            
            
        
    }
