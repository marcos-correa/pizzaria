import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/core/interfaces/usuario';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();
  passwordType:Boolean;
  @Input() modal:boolean = false;

  @Output() logado = new EventEmitter();
  
  constructor(
    private userService:UserService,
    public messageService: MessageService,
    private router:Router
  ) { 
      this.passwordType = true;
    }

  ngOnInit(): void {
    this.verificarUsuarioLogado()
  }
  verificarUsuarioLogado(){
    let usuario = this.userService.buscarUsuarioLocalStorage()
    if(usuario.name){
      this.userService.setLogado(true)
    }
  }

  fazerLogin(){
    this.userService.logarUsuario(this.usuario).subscribe({
      next: res => this.hasUserLogged(res),
      error: err => this.errorLogin(err)
    });    
  }

  hasUserLogged(res:any){
    this.userService.salvarUsuarioLocalStorage(res.usuario);
    this.userService.salvarTokenLocalStorage(res.token);
    this.userService.setUsuarioAtual();
    this.messageService.add({severity:'success', summary:'Login Realizado', life: 3000});
    this.logado.emit();
    if(!this.modal){
      this.router.navigate(['painel'])
    }
    if(this.router.url === '/cadastro'){
      this.router.navigate(['/'])
    }

  }

  errorLogin(err:any){
    console.log(err.error);
    this.messageService.add({severity:'error', summary:'Erro ao realizar o Login', detail:err.error, life: 3000});
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

