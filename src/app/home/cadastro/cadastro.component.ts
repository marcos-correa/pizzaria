import { PizzariaService } from './../../core/services/pizzaria.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { distinctUntilChanged, filter, last, map, tap } from 'rxjs/operators';
import { Cep } from 'src/app/core/interfaces/cep';
import { CepService } from 'src/app/core/services/cep.service';

import { UserService } from '../../core/services/user.service';
import { PizzasService } from '../../core/services/pizzas.service';
import { GenericValidator } from 'src/app/core/utils/generic-validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formulario: FormGroup;
  cep = new Cep();
  passwordType!:Boolean;
  nome!: string;
  cpf!: string;
  email!: string;
  telefone!: string;
  numero!: number;
  deleteById!: string;
  senha!: string;
  // numeroCep!: string//BS
  numeroCep: FormControl = new FormControl()//BS


  // rua!: string;
  // bairro!: string;
  // cidade!: string;
  // estado!: string;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private cepService:CepService,
    private userService:UserService,
    private pizzasService: PizzasService,
    private pizzariaService:PizzariaService,
    private messageService:MessageService
  ) { 

    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      cpf: ['', [Validators.required, GenericValidator.isValidCpf()]],
      // cpf: ['', [Validators.required, Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern("[0-9]+$")]],
      senha: ['', [Validators.required, Validators.minLength(6)] ],
      endereco: this.formBuilder.group({
        cep: ['', [Validators.required, Validators.minLength(8) ]],
        // cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/) ]],
        numero: ['', [Validators.required, Validators.pattern("[0-9]+$")]],
        logradouro: ['', Validators.required],
        bairro: ['', Validators.required],
        localidade: ['', Validators.required],
        estado: ['', Validators.required]
      }),
      
    })
    this.passwordType = true;
  }

  ngOnInit(): void {
    this.numeroCep.valueChanges
    .pipe( //rxjs
      distinctUntilChanged(),
      tap( console.log),
      tap( value => this.resetCepValues()),
      map(value => value.trim()),
      filter(value => value.length > 7),
    )
    .subscribe({
      next: (value)=>this.buscarCEP(value),
      error: (value) =>console.log
    }); 
  }
  resetCepValues(){
    this.cep.localidade=''
    this.cep.estado=''
    this.cep.logradouro=''
    this.cep.bairro=''
    this.cep.uf=''
  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
    };
  }

  getTypeInput(){
    if(this.senha){
      return 'password'
    }else{
      return 'text'
    }
  }
  toogleType(){
    this.passwordType = !this.passwordType
  }

  buscarCEP(numeroCep:string) {
    this.cepService.buscarCep(numeroCep)
      .subscribe({
        next: (endereco:any) => this.setCep(endereco)
      });
      // .then((cep:Cep) => this.cep = cep);
  }

  setCep(endereco:Cep){
    endereco.cep = this.numeroCep.value // para tirar o - do viacep
    this.cep = endereco
  }

  insertUsuario(){
    this.userService.insertUsuario(this.nome, this.cpf, this.email , this.telefone, this.cep.cep , this.numero, this.cep.logradouro, this.cep.bairro, this.cep.localidade, this.cep.uf, this.senha).subscribe({
        next: (res:any) =>this.hasSucceedInsert(res),
        error: (err:any) => this.hasError(err)
      }
    )
    //this.formulario.reset();

  }

  updateUsuario(){
    this.userService.updateUsuario(this.nome, this.cpf, this.email , this.telefone, this.cep.cep , this.numero, this.cep.logradouro, this.cep.bairro, this.cep.cidade, this.cep.estado, this.senha).subscribe({
        next: (res:any) => this.hasSucceedUpdate(res),
        error: (err:any) => this.hasError(err)
      }
    )
    this.formulario.reset();

  }

  //Para excluir pelo id preciso olhar para o storage
  deleteUsuarioById(){
    this.userService.deleteUsuarioById(this.nome).subscribe({
        next: (res:any) => this.hasSucceedDelete(res),
        error: (err:any) => this.hasError(err)
      }
    )
  }

 /**
   * Sucessos
   * @param res 
   */
  hasSucceedInsert(res:any){
    let msg = "Usuario inserido com sucesso"
    if(res.data[0]){
      msg = res.data[0]
    }
    this.messageService.add({severity:'success', summary:'Sucesso', detail:msg, life: 3000});
  }

  hasSucceedUpdate  = (res:any) =>{
    alert(`Os dados do cliente ${res.nome} foram altearados  com sucesso`)
  }

  hasSucceedDelete = (res:any) =>{
    alert(`Cliente ${this.nome} retirado com sucesso`)
  }
  /**
   * Erros
   * @param err 
   */
  //  hasError = (err:any) => {
  //   console.log(err)
  // }
  hasError(err:any){
    // alert(err./error.data[0])
    let msg = err.error.data[0];
    console.log(msg)
    this.messageService.add({severity:'error', summary:'Ops', detail:err.error.data[0], life: 3000});
  }


  
}
