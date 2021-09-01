import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from "rxjs/operators";
import { Cep } from 'src/app/services/cep';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  cep = new Cep();
  passwordType:Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cepService:CepService,
    private userService:UserService
  ) { 

    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      cpf: ['', [Validators.required, Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern("[0-9]+$")]],
      aniversario: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]],
      senha: ['', [Validators.required, Validators.minLength(6)] ],
      endereco: this.formBuilder.group({
        cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/) ]],
        numero: ['', [Validators.required, Validators.pattern("[0-9]+$")]],
        complemento: [''],
        logradouro: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      }),
      
    })
    this.passwordType = true;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //console.log(this.formulario);
    this.userService.cadastrarUsuario(this.formulario.value);
    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value)).pipe(map(res => res)).subscribe(dados => {
      console.log(dados);
      this.formulario.reset();
    },
      (error: any) => alert('erro'));


  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
    };
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

  buscar() {
    console.log("buscar");
    this.cepService.busca(this.cep.cep)
      .then((cep:Cep) => this.cep = cep);
  }

  
  
}
