import { HttpClient } from '@angular/common/http';
import { Pizza } from '../interfaces/pizza';
import { Injectable } from '@angular/core';
import { ALL_PIZZAS } from '../mocks/all-pizzas.constants';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  pizzas: Pizza[]
  constructor(
    private http: HttpClient
  ) {
    this.pizzas = ALL_PIZZAS;
  }


  getPizzas(){ // data
    return this.http.get('/api/Pizza/Lista');
  }

  createPizza(pizza:Pizza){
    return this.http.post('/api/Pizza/Cadastro',{data:pizza});
  }

  deletePizza(pizzaId:string){
    return this.http.post('/api/Pizza/Cancelar-Cadastro',{data:{id:pizzaId}});
  }

  updatePizza(pizza:Pizza){
    return this.http.post('/api/Pizza/Atualizar-Cadastro',{data:pizza});
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
