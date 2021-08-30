import { Cep } from './cep';

export interface User{
  nome?:string,
  email?:string,
  endereco: Cep
}
