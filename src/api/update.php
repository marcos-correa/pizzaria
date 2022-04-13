<?php
$query = require('connect.php'); //conexao banco
// Get the posted data.
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  // Extract the data.

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
  $id = "1000";
  // Validação
  //Falha requisição
  try{
  if ($nome === '' || $cpf === '' || $email === '' || $telefone === ''|| $cep === ''|| $numero === ''|| $rua === ''|| $bairro === ''|| $cidade === ''|| $estado === '' || $senha === '') {
    //return http_response_code(400);
    throw new Exception('Dados faltando');
  }
  $user = $query->selectUsuarioByEmail($table, $email);
  $user = $user[0];

  if($user -> email == $email && $user -> id != $id){
    throw new Exception('Este email já está cadastrado');
  }
  
  $user = $query->selectUsuarioByCpf($table, $cpf);
  $user = $user[0];
  if ($user -> cpf == $cpf && $user -> id != $id){
    throw new Exception('O usuário com este cpf já está cadastrado');
  }



  
  $query->update($table, [
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
  
  echo json_encode(['data'=>['nome'=>$nome]]);}
  catch(Exception $e){
    echo 'Falha na alteração dos dados no banco: ' .  $e->getMessage();
  }
} else {
  die('Falha na requisição: ');
}
