import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

import { Usuario } from '../interfaces//usuario';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  logado: Boolean;
  users: User[];
  cadastro!: User[];

  constructor(
    private router: Router,
    private http:HttpClient
  ) {
    this.logado = this.hasUsuarioLocalStorage()
    this.users = []
    this.cadastro = []    
  }
  hasUsuarioLocalStorage(){
    let usuario = this.buscarUsuarioLocalStorage()
    if(usuario.nome){
      return true
    }
    return false
  }

  isLogado(){
    return this.logado;
  }

  setLogado(value:boolean){
    this.logado = value
  }

  getUsuarioAtual(){
    this.setUsuarioAtual()
    return this.cadastro[0]
  }

  setUsuarioAtual(){
    let usuario = this.buscarUsuarioLocalStorage()
    if(usuario){
      this.cadastro[0]= usuario
      this.logado = true
    }else{
      this.cadastro = []
      this.logado = false
    }
  }

  cadastrarUsuario(formularioValue:User){
    this.users.push(formularioValue)
    debugger
  }

  salvarUsuarioLocalStorage(user:any){
    if(user){
      window.localStorage.setItem('user',JSON.stringify(user));
      this.setUsuarioAtual();
    }
  }
  salvarTokenLocalStorage(token:any){
    if(token){
      window.localStorage.setItem('token',JSON.stringify(token));
    }
  }
  
  buscarUsuarioLocalStorage():any{
    let usuario = window.localStorage.getItem('user')?.toString();
    if(typeof usuario == 'string'){
      let dadosUsuario = JSON.parse(usuario) 
      return dadosUsuario;
    }
    return ''
  }

  logarUsuario(usuario:Usuario):Observable<any>{
    let dados = {
      data: usuario
    }
    return this.http.post("http://localhost/api/login",dados).pipe(
      map((res:any) => res.data)
    )
  } 
  

  deslogarUsuario(){
    this.logado = false;
    this.cadastro = []
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
  }

  getNomeUsuarioLogado(){
    let usuario = this.buscarUsuarioLocalStorage()
    if(usuario){
      return usuario['nome'];
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
      map((res:any)=> res)
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
