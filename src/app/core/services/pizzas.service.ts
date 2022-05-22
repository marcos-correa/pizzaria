import { HttpClient } from '@angular/common/http';
import { Pizza } from '../interfaces/pizza';
import { Injectable } from '@angular/core';
import { ALL_PIZZAS } from '../mocks/all-pizzas.constants';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  pizzas: Pizza[];
  constructor(
    private http: HttpClient
  ) {
    this.pizzas = ALL_PIZZAS;
  }



  getPizzas(): Pizza[]{
    // TODO: this.pizzas = this.http.get('url');
    // return this.http.get('URLBANCO');

    return this.pizzas;
  }

  //TODO:
  createPizza(pizza:Pizza){
    return this.http.post('url',pizza);
  }

  //TODO:
  deletePizza(pizzaId:string){
    return this.http.post('url',pizzaId);
  }

  //TODO:
  updatePizza(pizzaId:string,pizza:Pizza){
    return this.http.patch('url',{pizzaId,pizza})
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
