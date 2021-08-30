import { User } from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logado: Boolean;
  users: User[];
  user!: User;

  constructor(
  ) {
    this.logado = false
    this.users = []
    
  }

  isLogado(){
    return this.logado;
  }

  clickCadastrar(){

  }

  cadastrarUsuario(formularioValue:User){
    this.users.push(formularioValue)


    console.table(this.users)
    debugger
  }
  //   if(){

  //     this.user.email = email;
  //     this.user.email = email;
  //     this.user.endereco.cep = cep;
  //     this.user.endereco.bairro = bairro;
  //     this.users.push(this.user);
    
    
  // }

  // logarUsuario(){
  //   this.logado = true;
  // }

  // deslogarUsuario(){
  //   this.logado = false;
  // }
  // getNomeUsuario(){

  // }
}
