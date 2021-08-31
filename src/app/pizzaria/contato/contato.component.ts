import { UserService } from './../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from "rxjs/operators";
import { Cep } from 'src/app/services/cep';
import { CepService } from 'src/app/services/cep.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  formulario: FormGroup;
  cep = new Cep();
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
      aniversario: ['', [Validators.required] ],
      senha: ['', [Validators.required] ],
      endereco: this.formBuilder.group({
        cep: ['', [Validators.required]],
        numero: ['', Validators.required],
        complemento: [''],
        logradouro: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required]
      }),

  })
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

  verificaValidTouched(campo: any) {
    console.log("verifica");
    console.log(this.formulario.get(campo)?.touched);
    return !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched;

  }

  aplicaCssErro(campo: any) {
    return {
      //'is-invalid': this.verificaValidTouched(campo)
      //'invalid-feedback': this.verificaValidTouched(campo)
    };
  }


  buscar() {
    console.log("buscar");
    this.cepService.busca(this.cep.cep)
      .then((cep:Cep) => this.cep = cep);
  }

  
  
}
