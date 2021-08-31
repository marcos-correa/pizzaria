import { Component, OnInit } from '@angular/core';
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
  constructor(
    private userService:UserService,
    public messageService: MessageService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    //console.log(this.usuario);
    let mensagem = this.userService.logarUsuario(this.usuario);
    this.messageService.add({severity:'success', summary:'Login', detail:mensagem, life: 3000});
    
  }

}

