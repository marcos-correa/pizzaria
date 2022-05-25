import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  usuario:any;

  constructor() { }

  hasUsuarioLocalStorage(){
    this.usuario = this.buscarUsuarioLocalStorage()
    if(this.usuario.nome){
      return true
    }
    return false
  }

  salvarUsuarioLocalStorage(user:any){
    if(user){
      window.localStorage.setItem('user',JSON.stringify(user));
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

  getToken(){
    return  "Bearer "+ JSON.parse(window.localStorage.getItem('token')?.toString());

    // let token = window.localStorage.getItem('token')?.toString()
    // // let auth = "Bearer "
    // let data = {
    //   token:"Bearer "+JSON.parse(token)
    // }
    // if(token){
    //   // auth += JSON.parse(token)
    //   data.token += JSON.parse(token)
    // }
  }

  verificarToken(token:any){
    let token_ = token;
    
    let {email} = this.usuario

    // return this.http.get(`/api/VerificaToken?token=${token_},email=${email}`)
  }
}
