import { MessageService } from 'primeng/api';
import { Pizza } from '../lista/pizza';
import { PizzariaService } from './../pizzaria.service';
import { Component, OnInit, Injectable, Input } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  pizzas: Pizza[];
  ordenacao = [
    {label: "Nome", value: "name"},
    {label: "Preço", value: "price"}
  ]

  @Input() quantidade: Number;
  selectedOrder: any;
  modal: Boolean;
  pizza!: Pizza;

  @Input() showOrder: Boolean;
  @Input() paginaIcial: Boolean;

  constructor(
    private pizzariaService: PizzariaService,
    public messageService: MessageService
  ) { 
    this.pizzas = this.pizzariaService.getPizzas();//todas as pizzas [{}{}]
    this.alterarOrdem({label: "Nome", value: "name"});
    this.modal = false;

    this.quantidade = 29;
    this.showOrder = true;
    this.paginaIcial = false;
    
  }

  ngOnInit(): void {
    this.selectedOrder =  {label: "Nome", value: "name"};
  }
  alterarOrdem(order:any){
    if(order.value == 'price'){
      this.pizzas = this.pizzas.sort((a:Pizza,b:Pizza)=>{
        if(a.price && b.price){
          if(a.price < b.price){
            return -1
          }
          if(a.price > b.price){
            return 1
          }
        }
        return 0
      })
    }
    if(order.value == 'name'){
      this.pizzas = this.pizzas.sort((a:Pizza,b:Pizza)=>{
        if(a.name && b.name){
          if(a.name < b.name){
            return -1
          }
          if(a.name > b.name){
            return 1
          }
        }
        return 0
      })

    }
  }
  adicionarAoCarrinho(pizza:Pizza){
    let mensagem = this.pizzariaService.adicionarAoCarrinho(pizza)
    this.messageService.add({severity:'success', summary:'Pizza adicionada ao carrinho', detail:mensagem, life: 1500});
  } 

  toggleModal(pizza: Pizza){
    this.modal = true;
    this.pizza = pizza;
  }

  
 
}
