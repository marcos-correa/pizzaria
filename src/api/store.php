<?php
$query = require('connect.php'); //conexao banco
// Get the posted data.
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {

  $request = json_decode($postdata);
  $nome = $request->data->nome;
  $cpf = $request->data->cpf;
  $email = $request->data->email;
  $telefone = $request->data->telefone;
  $cep = $request->data->cep;
  $numero = $request->data->numero;
  $rua = $request->data->rua;
  $bairro = $request->data->bairro;
  $cidade = $request->data->cidade;
  $estado = $request->data->estado;
  $senha = $request->data->senha;
  $senha = md5($senha);
  
  // Validação
  //Dados Faltando
  try{
  if ($nome === '' || $cpf === '' || $email === '' || $telefone === ''|| $cep === ''|| $numero === ''|| $rua === ''|| $bairro === ''|| $cidade === ''|| $estado === '' || $senha === '') {
    //return http_response_code(400);
    //die('Dados faltando");
    throw new Exception('Dados faltando');
  }
  
  //Dados duplicados
  if (!empty($query -> selectUsuarioByEmail($table, $email))){
    throw new Exception('Este email já está cadastrado');
  }

  if (!empty($query -> selectUsuarioByEmail($table, $email))){
    throw new Exception('Este email já está cadastrado');
  }

  if (!empty($query -> selectUsuarioByCpf($table, $cpf))){
    throw new Exception('O usuário com este cpf já está cadastrado');
  }

  $query->insert($table, [
    'nome' => $nome,
    'cpf' => $cpf,
    'email' => $email,
    'telefone' => $telefone,
    'cep' => $cep,
    'numero' => $numero,
    'rua' => $rua,
    'bairro' => $bairro,
    'cidade' => $cidade,
    'estado' => $estado,
    'senha' => $senha,
  ]);
  
  echo json_encode($nome, JSON_FORCE_OBJECT);}

  catch(Exception $e){
    echo 'Falha na inserção dos dados no banco: ' .  $e->getMessage();
  }
} else {
  die('Falha na requisição ');
}
