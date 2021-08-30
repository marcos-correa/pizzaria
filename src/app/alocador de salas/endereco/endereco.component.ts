import { Component, OnInit } from '@angular/core';
import { Endereco } from './endereco';
import { PizzariaService } from './../pizzaria.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.scss']
})
export class EnderecoComponent implements OnInit {

  endereco: Endereco;
  valorcep:string;
  invalidcpf: boolean;
  constructor(
    private pizzariaService: PizzariaService, 
    ) { 
      this.endereco = {};
      this.valorcep = '';
      this.invalidcpf = false;
  }
  
  ngOnInit(): void {
  }

  buscaCep(){
    if(this.isValidCep()){
      this.pizzariaService.getEndereco(this.valorcep)
      .subscribe((res:any)=>{
          this.endereco = res
          if(res.erro == true){
            this.invalidcpf = true
          }else{
            this.invalidcpf = false

          }
      },err=>{
        this.endereco = {}
      })
      if(this.endereco.erro){
        this.endereco = {}
      }
    }else{
      this.endereco = {}
    }
     
  }

  isValidCep(){
    let cep = this.valorcep.replace(/\D/g, '');
    if(cep != ""){
      var validacep = /^[0-9]{8}$/;
      if(validacep.test(cep)) {
        return true
      }
    }
    return false
  }
  validateCep(){
    if(this.isValidCep()){
      this.buscaCep()
    }
    if(this.valorcep.length<8){
      this.endereco = {}
    }
  }

}
