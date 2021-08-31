import { User } from './user';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  logado: Boolean;
  users: User[];
  cadastro!: User[];

  constructor(
    private router: Router
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
  

  logarUsuario(usuario:Usuario){
    let mensagem = ''
    if (usuario.login){
      this.cadastro = this.users.filter(cad => cad.email == usuario.login)
        console.log(this.cadastro);

      if(this.cadastro.length>0){
        console.log(this.cadastro[0].senha);
        console.log(usuario.senha);
        if(usuario.senha == this.cadastro[0].senha){
          this.logado = true;
          console.log(this.logado);
          this.router.navigate(['/catalogo']);
        }
        else{
          mensagem = 'Senha incorreta'
        }
  
      }else{
        mensagem = 'Usuario não encontrado'
      }
      
    }
   
      return mensagem;
    } 
  

  // deslogarUsuario(){
  //   this.logado = false;
  // }
  // getNomeUsuario(){

  // }
}
