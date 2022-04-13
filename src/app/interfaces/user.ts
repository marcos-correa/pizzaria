import { Cep } from './cep';

export interface User{
  nome?:string,
  cpf?:string, 
  telefone?:string, 
  email?:string,
  aniversario?:string,
  senha?:string, 
  endereco: Cep
}
