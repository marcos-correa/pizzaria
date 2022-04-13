import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from "rxjs/operators";
import { CepService } from 'src/app/services/cep.service';
import { PizzariaService } from '../pizzaria.service';
import { PizzasService } from './../../services/pizzas.service';
import { SelectionChange } from '@angular/cdk/collections';
import { Cep } from 'src/app/interfaces/cep';

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
    private pizzariaService:PizzariaService
  ) { 

    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      cpf: ['', [Validators.required, Validators.pattern(/^(\d{3}\.){2}\d{3}\-\d{2}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern("[0-9]+$")]],
      senha: ['', [Validators.required, Validators.minLength(6)] ],
      endereco: this.formBuilder.group({
        cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/) ]],
        numero: ['', [Validators.required, Validators.pattern("[0-9]+$")]],
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
    if(this.senha){
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

  insertUsuario(){
    this.userService.insertUsuario(this.nome, this.cpf, this.email , this.telefone, this.cep.cep , this.numero, this.cep.logradouro, this.cep.bairro, this.cep.cidade, this.cep.estado, this.senha).subscribe({
        next: this.hasSucceedInsert,
        error: this.hasError
      }
    )
    //this.formulario.reset();

  }

  updateUsuario(){
    this.userService.updateUsuario(this.nome, this.cpf, this.email , this.telefone, this.cep.cep , this.numero, this.cep.logradouro, this.cep.bairro, this.cep.cidade, this.cep.estado, this.senha).subscribe({
        next: this.hasSucceedUpdate,
        error: this.hasError
      }
    )
    this.formulario.reset();

  }

  //Para excluir pelo id preciso olhar para o storage
  deleteUsuarioById(){
    this.userService.deleteUsuarioById(this.nome).subscribe({
        next: this.hasSucceedDelete,
        error: this.hasError
      }
    )
  }

 
  hasSucceedInsert(res:any){
    if(res){
      alert(`Cliente ${res} inserido com sucesso`)
    }
    // this.userService.logado = true;
  }

  hasSucceedUpdate  = (res:any) =>{
    alert(`Os dados do cliente ${res.nome} foram altearados  com sucesso`)
  }

  hasSucceedDelete = () =>{
    alert(`Cliente ${this.nome} retirado com sucesso`)
  }
  /**
   * Erros
   * @param err 
   */
  //  hasError = (err:any) => {
  //   console.log(err)
  // }
    hasError(){
      alert("Não foi possível fazer a operação")
    }


  
}
