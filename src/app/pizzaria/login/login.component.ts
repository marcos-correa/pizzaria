import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';
import { MessageService } from 'primeng/api';

import { UserService } from 'src/app/services/user.service';
import { Usuario } from '../../services/usuario'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  passwordType:Boolean;

  @Output() logado = new EventEmitter();
  
  constructor(
    private userService:UserService,
    public messageService: MessageService) { 
      this.passwordType = true;
    }

  ngOnInit(): void {
  }

  fazerLogin(){
    //console.log(this.usuario);
    let mensagem = this.userService.logarUsuario(this.usuario);
    if(this.userService.isLogado()){
      this.logado.emit('true')
      this.messageService.add({severity:'success', summary:'Login Realizado', life: 3000});
    }else{
      this.messageService.add({severity:'error', summary:'Ops', detail:mensagem, life: 3000});
    }
    
  }
  getTypeInput(){
    if(this.passwordType){
      return 'password'
    }else{
      return 'text'
    }
  }
  toogleType(){
    this.passwordType = !this.passwordType
  }



}

