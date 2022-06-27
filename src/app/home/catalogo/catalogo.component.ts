import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { Pizza } from '../../core/interfaces/pizza';
import { PizzariaService } from './../../core/services/pizzaria.service';
import { PizzasService } from './../../core/services/pizzas.service';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  pizzas: Pizza[];
  ordenacao = [
    { label: 'Nome', value: 'name' },
    { label: 'Preço', value: 'price' },
  ];


  @Input() quantidade: Number;
  selectedOrder: any;
  modal: Boolean;
  pizza!: Pizza;

  @Input() showOrder: Boolean;
  @Input() paginaIcial: Boolean;
  @Input() margem: Boolean;
  @Input() showTitle: Boolean;

  constructor(
    private pizzasService: PizzasService,
    private pizzariaService: PizzariaService,
    public messageService: MessageService
  ) {
    this.pizzasService.getPizzas().subscribe({
      next: (res: any) => {
        this.pizzas = res.data;
        this.alterarOrdem({ label: 'Nome', value: 'name' });
      },
      error: () =>{
        this.messageService.add({
          severity: 'error',
          summary: 'Erro ao buscar as pizzas.',
          detail: "Não foi possível localizar as pizzas",
          life: 3000,
        });
      }
    });
    this.modal = false;

    this.quantidade = 29;
    this.showOrder = true;
    this.showTitle = true;
    this.paginaIcial = false;
    this.margem = true;
  }

  items: MenuItem[];
  home:MenuItem
  ngOnInit(): void {
    this.selectedOrder = { label: 'Nome', value: 'name' };
    this.items = [
      {label:'Cardápio'},
    ]
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }
  alterarOrdem(order: any) {
    if (this.pizzas) {
      if (order.value == 'price') {
        this.pizzas = this.pizzas.sort((a: Pizza, b: Pizza) => {
          if (a.price && b.price) {
            if (a.price < b.price) {
              return -1;
            }
            if (a.price > b.price) {
              return 1;
            }
          }
          return 0;
        });
      }
      if (order.value == 'name') {
        this.pizzas = this.pizzas.sort((a: Pizza, b: Pizza) => {
          if (a.name && b.name) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
          }
          return 0;
        });
      }
    }
  }

  getQuantidade(){
    if(this.quantidade == 3){
      return 'col-4'
    }else{
      return 'col-3'
    }
  }
  adicionarAoCarrinho(pizza: Pizza) {
    let mensagem = this.pizzariaService.adicionarAoCarrinho(pizza);
    this.messageService.add({
      severity: 'success',
      summary: 'Pizza adicionada ao carrinho',
      detail: mensagem,
      life: 1500,
    });
  }

  toggleModal(pizza: Pizza) {
    this.modal = true;
    this.pizza = pizza;
  }
}
