<?php
$query = require('connect.php'); //conexao banco
// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
  // Extract the data.

  $request = json_decode($postdata);
  $nome =  trim($request->data->nome);
  $cpf =  trim($request->data->cpf);
  $email = trim($request->data->email);
  $telefone =  trim($request->data->telefone);
  $cep =  trim($request->data->cep);
  $numero =  $request->data->numero;
  $rua =  trim($request->data->rua);
  $bairro =  trim($request->data->bairro);
  $cidade =  trim($request->data->cidade);
  $estado =  trim($request->data->estado);
  $senha =  trim($request->data->senha);
  
  // Validate.
  if ($nome === '' || $cpf === '' || $email === '' || $telefone === ''|| $cep === ''|| $numero === ''|| $rua === ''|| $bairro === ''|| $cidade === ''|| $estado === '' || $senha === '') {
    return http_response_code(Algum campo não foi preenchido);
  }
  return http_response_code( foi preenchido);

  $query->insert('cadastro', [
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
} else {
  die('Dados inválidos');
}
