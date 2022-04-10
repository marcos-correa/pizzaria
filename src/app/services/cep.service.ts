import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cep } from './cep';
// import 'rxjs/add/operator/toPromise';
// import {map} from 'rxjs/operators';
// import {toPromise} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(
    private http: HttpClient
  ) { }

  busca(cep:string) {
    console.log("busca");
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
        .toPromise()
        .then(response => this.converterRespostaParaCep(response));
        //return this.converterRespostaParaCep(response.json())});
    // .map(data => this.resultado = this.converterRespostaParaCep(data));
  }

  private converterRespostaParaCep(cepNaresposta:any): Cep {
  
    console.log("converte");
    let cep = new Cep();
    cep.cep = cepNaresposta.cep;
    cep.logradouro = cepNaresposta.logradouro;
    cep.bairro = cepNaresposta.bairro;
    cep.cidade = cepNaresposta.localidade;
    cep.estado = cepNaresposta.uf;
    console.dir(cep);
    return cep;
  }
}
