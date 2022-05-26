import { PizzaNoCarrinho } from './../../core/interfaces/pizza-carrinho';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { Pizza } from '../../core/interfaces/pizza';
import { UserService } from '../../core/services/user.service';
import { PizzariaService } from './../../core/services/pizzaria.service';

// import { Product } from '../../domain/product';
// import { ProductService } from '../../service/productservice';
// import { ConfirmationService } from 'primeng/api';
// import { MessageService } from 'primeng/api';
// import { PizzariaService } from '../pizzaria.service';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  modalFinalizar: boolean;
  // selectedProducts: any[];
  submitted: boolean;
  pizza!: PizzaNoCarrinho;

  pizzas: PizzaNoCarrinho[];
  // product: Product;
  selectedProducts: any[];
  productName: string;
  productDescription: string;

  productPrice: string;
  cupom!: String;
  valorCarrinho: Number;
  descontoAplicado: Boolean;

  constructor(
    private pizzariaService: PizzariaService,
    private userService: UserService,
    public messageService: MessageService
  ) // private confirmationService: ConfirmationService
  {
    this.productPrice = '';
    this.productName = '';
    this.productDescription = '';
    this.productPrice = '';
    this.productPrice = '';
    this.productPrice = '';
    this.submitted = false;
    // this.pizza = null;
    this.modalFinalizar = false;
    this.selectedProducts = [];
    this.pizzas = this.pizzariaService.getPizzasNoCarrinho();
    this.valorCarrinho = 0;
    this.descontoAplicado = false;
  }

  ngOnInit(): void {
    this.getDescontoAplicado();
  }

  deleteProduct(pizza: any) {
    this.pizzas = this.pizzas.filter((val) => val.id !== pizza.id);
    if (this.pizzas.length == 0) {
      this.resetarDescontoAplicadoECupom();
    }
    this.atualizarCarrinho();
  }

  resetarDescontoAplicadoECupom() {
    this.resetarCupom();
    this.pizzariaService.setDescontoAplicado(false);
    this.getDescontoAplicado();
  }
  
  resetarCupom() {
    this.cupom = '';
  }

  getValorTotal() {
    return this.pizzariaService.getValorTotal();
  }

  atualizarCarrinho() {
    this.pizzariaService.setPizzasNoCarrinho(this.pizzas);
    this.pizzariaService.valorTotalCarrinho();
  }

  decrementarUnidade(pizza: any) {
    this.pizzas.forEach((piz) => {
      if (piz.id == pizza.id) {
        pizza.quantity -= 1;
        if (pizza.quantity == 0) {
          this.deleteProduct(pizza);
          return;
        } else {
          this.atualizarCarrinho();
        }
      }
    });
  }

  acrescentarUnidade(pizza: any) {
    this.pizzas.forEach((piz) => {
      if (piz.id == pizza.id) {
        pizza.quantity += 1;
      }
    });
    this.atualizarCarrinho();
  }

  aplicarDesconto() {
    this.pizzariaService.setDescontoAplicado(false);
    this.descontoAplicado = false;
    if (this.cupom == 'UTFPR') {
      this.pizzariaService.setDescontoAplicado(true);
      this.getDescontoAplicado();
    }
  }

  getDescontoAplicado() {
    this.descontoAplicado = this.pizzariaService.getDescontoAplicado();
  }

  getValorCarrinho() {
    return this.pizzariaService.getValorCarrinho();
  }

  novaPizza() {
    this.pizza = {price: 0 };
    this.submitted = false;
    this.modalFinalizar = true;
  }

  saveProduct() {
    if (this.invalidName()) {
      return;
    }
    this.submitted = true;

    if (this.pizza.name) {
      if (this.pizza.name.trim() && this.pizza.id) {
        this.pizzas[this.findIndexById(this.pizza.id)] = this.pizza;
        // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      } else {
        if (!this.invalidName()) {
          this.pizza.id = this.createId();
          this.pizza.image = this.createImage();
          this.pizzas.push(this.pizza);
          //         // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        } else {
          //Nome inválido
          //         // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        }
      }

      this.pizzas = [...this.pizzas];
      this.modalFinalizar = false;
      // this.pizza = {};
    }
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  createImage(): string {
    let img = 'p';
    var chars = '12345678';
    img += chars.charAt(Math.floor(Math.random() * chars.length));
    img += '-480x480.jpg';
    return img;
  }

  editProduct(pizza: Pizza) {
    this.pizza = { ...pizza };
    this.modalFinalizar = true;
  }

  hideDialog() {
    this.modalFinalizar = false;
  }

  invalidName() {
    if (this.pizza.name) {
      let parametro = /[^a-zA-z\s]+$/i; // apenas nomes sem acento/^[a-z\s]+$/i
      let invalido = !this.pizza.name.match(parametro);
      if (invalido) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  }
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.pizzas.length; i++) {
      if (this.pizzas[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  getTotalPizzasNoCarrinho() {
    return this.pizzariaService.getTotalPizzasNoCarrinho();
  }

  isLogado() {
    return this.userService.isLogado();
  }

  finalizarCompra() {
    if (this.isLogado()) {
      this.limparCarrinho();
      this.messageService.add({
        severity: 'success',
        summary: 'Compra finalizada',
        life: 3000,
      });
    } else {
      this.modalFinalizar = true;
    }
  }

  limparCarrinho() {
    this.pizzariaService.setPizzasNoCarrinho([]);
    this.pizzariaService.valorTotalCarrinho();
    this.pizzas = this.pizzariaService.getPizzasNoCarrinho();
  }
}
