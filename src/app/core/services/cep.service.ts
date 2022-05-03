import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cep } from '../interfaces/cep';

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

  buscarCep(cep:string) {
    console.log("busca");
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
        .toPromise()
        .then(response => this.converterRespostaParaCep(response));
        //return this.converterRespostaParaCep(response.json())});
    // .map(data => this.resultado = this.converterRespostaParaCep(data));
  }

  private converterRespostaParaCep(cepResponse:any): Cep {
    return new Cep(
      cepResponse.cep,
      cepResponse.logradouro,
      cepResponse.bairro,
      cepResponse.localidade,
      cepResponse.uf
    )
  }
}
