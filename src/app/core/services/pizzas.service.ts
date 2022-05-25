import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../interfaces/pizza';
import { Injectable } from '@angular/core';
import { ALL_PIZZAS } from '../mocks/all-pizzas.constants';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  pizzas: Pizza[];
  token:any;
  constructor(
    private http: HttpClient,
    private authenticationService:AuthenticationService
  ) {
    this.pizzas = ALL_PIZZAS;
    this.token = this.authenticationService.getToken()
  }


  getPizzas(){
    let data = {
      token: this.token
    }
    return this.http.post('/api/Pizza/Lista',{data});
  }

  createPizza(pizza:Pizza){
    let data = {
      ...pizza,
      token: this.token
    }
    return this.http.post('/api/Pizza/Cadastro',{data});
  }

  deletePizza(pizzaId:string){
    let data = {
      id:pizzaId,
      token: this.token
    }
    return this.http.post('/api/Pizza/Cancelar-Cadastro',{data});
  }

  updatePizza(pizza:Pizza){
    let data = {
      ...pizza,
      token: this.token
    }
    return this.http.post('/api/Pizza/Atualizar-Cadastro',{data});
  }

  getPizzaByIndex(index: string){
    let pizza = {}
    this.pizzas.forEach(piz => {
      if(piz.id ==index ){
        pizza = piz
      }
    })
    return pizza
  }
}
