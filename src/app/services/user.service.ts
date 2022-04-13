import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  adminuser = {
    nome:'Administrador',
    cpf:'0000000', 
    telefone:'string', 
    email:'admin@admin.com',
    aniversario:'string',
    senha:'123456', 
    endereco: {
        cep:'831654651',
        logradouro:'',
        numero:'',
        complemento:'',
        cidade:'',
        bairro:'',
        estado:'',
    }
  }

  constructor(
    private router: Router,
    private http:HttpClient
  ) {
    this.logado = false
    this.users = []
    this.users.push(this.adminuser)
    this.cadastro = []
    this.cadastro.push(this.adminuser)
    
  }

  isLogado(){
    return this.logado;
  }

  clickCadastrar(){

  }

  getUsuarioAtual(){
    return this.cadastro[0]
  }

  cadastrarUsuario(formularioValue:User){
    this.users.push(formularioValue)


    //console.table(this.users)
    debugger
  }

  salvarUsuarioLocalStorage(user:any){
    window.localStorage.setItem('user',JSON.stringify(user));
  }
  
  buscarUsuarioLocalStorage():any{
    let user = window.localStorage.getItem('user')?.toString();
    if(typeof user == 'string'){
      return JSON.parse(user);
    }
    return ''
  }

  logarUsuario(usuario:Usuario):Observable<any>{
    let dados = {
      data: usuario
    }
    return this.http.post("http://localhost/api/login",dados).pipe(
      tap((res:any)=> console.log(res)),
      map((res:any) => res)
    )
    // let mensagem = 'Inicial'
    // if (usuario.login){
      // this.cadastro = this.users.filter(cad => cad.email == usuario.login)
        // console.log(this.cadastro);

      // if(this.cadastro.length>0){
        // console.log(this.cadastro[0].senha);
        // console.log(usuario.senha);
    //     if(usuario.senha == this.cadastro[0].senha){
          // this.logado = true;
          // console.log(this.logado);
    //       this.router.navigate(['/catalogo']);
    //     }
    //     else{
    //       mensagem = 'Senha incorreta'
    //     }
  
    //   }else{
    //     mensagem = 'Usuario não encontrado'
    //   }
    // }else{
    //   mensagem = 'Campo vazio'
    // }
    // return mensagem;
  } 
  

  deslogarUsuario(){
    this.logado = false;
    this.cadastro = []
  }
  getNomeUsuarioLogado(){
    if(this.isLogado()){
      return this.cadastro[0].nome?.split(' ')[0]
    }
    return ''
  }


  //Serviços Cliente

  getEndereco(cep:string){
    return this.http.get(`//viacep.com.br/ws/${cep}/json`)
    .pipe(map(res => {
      return res;
    })); 
  }

  //CRUD usuario
  insertUsuario(nome:string , cpf:string, email:string , telefone:string, cep:string , numero:number, rua:string , bairro:string, cidade:string, estado:string, senha:string ): Observable<any>{
    let data = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      cep: cep,
      numero: numero,
      rua: rua,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      senha: senha

     
    }
    
    return this.http.post("http://localhost/api/store",{data}).pipe(
      map((res:any)=> res['data'])
    )
  }

  updateUsuario(nome:string , cpf:string, email:string , telefone:string, cep:string , numero:number, rua:string , bairro:string, cidade:string, estado:string, senha:string ): Observable<any>{
    let data = {
      nome: nome,
      cpf: cpf,
      email: email,
      telefone: telefone,
      cep: cep,
      numero: numero,
      rua: rua,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      senha: senha

     
    }
    
    return this.http.post("http://localhost/api/update",{data}).pipe(
      map((res:any)=> res['data'])
    )
  }


  deleteUsuarioById(id:string): Observable<any>{
    return this.http.delete(`http://localhost/api/delete.php?nome=${id}`).pipe(
      map((res:any) => res)
    )
  }

  getUsuarioID(id:string): Observable<any>{
    return this.http.get(`http://localhost/api/search.php?model=${id}`).pipe(
      map((res:any) => res['data'])
    )
  }

}
