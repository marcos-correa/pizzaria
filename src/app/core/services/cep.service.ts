import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

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
    let requisicao = this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
    return requisicao.pipe(
      first(),
      tap(response=> this.converterRespostaParaCep(response)
    ));
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
