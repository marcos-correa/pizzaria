import { PizzariaService } from './pizzaria/pizzaria.service';
import { Component } from '@angular/core';
PizzariaService
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pizzaria';
  totalCarrinho: number;

  constructor(
    private pizzariaService:PizzariaService
  ){
    this.totalCarrinho = 0;
  }
 
  getNumbers(){
    return this.pizzariaService.getFavoritas();
  }
  
  getValorTotal(){
    return this.pizzariaService.getValorTotal()
  }

  getValorCarrinho(){
    return this.pizzariaService.getValorCarrinho()
  }
  getTotalPizzasNoCarrinho(){
    return this.pizzariaService.getTotalPizzasNoCarrinho();
  }
}
