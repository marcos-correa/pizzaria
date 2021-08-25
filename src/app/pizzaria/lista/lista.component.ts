import { PizzariaService } from './../pizzaria.service';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product } from './product';
// import { Product } from '../../domain/product';
// import { ProductService } from '../../service/productservice';
// import { ConfirmationService } from 'primeng/api';
// import { MessageService } from 'primeng/api';
// import { PizzariaService } from '../pizzaria.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  productDialog: boolean;
  // selectedProducts: any[];
  submitted: boolean;
  pizza: Product;
  
  products: Product[];
  // product: Product;
  selectedProducts: any[];
  productName:string;
  productDescription:string;

  productPrice:string;


  constructor(
    private pizzariaService: PizzariaService, 
    // private messageService: MessageService, 
    // private confirmationService: ConfirmationService
  ) {
    this.productPrice = ''
    this.productName = ''
    this.productDescription = ''
    this.productPrice = ''
    this.productPrice = ''
    this.productPrice = ''
    this.submitted = false;
    this.pizza = {}
    this.productDialog = false;
    this.selectedProducts = []
    this.products = this.pizzariaService.getPizzas();//[{}{}]
   }


  ngOnInit(): void {
  }

  deleteProduct(pizza:any){
    this.products = this.products.filter(val => val.id !== pizza.id);
    this.pizza = {};
  }
  novaPizza(){
    this.pizza = {};
    this.submitted = false;
    this.productDialog = true;
  }

  saveProduct(){
    if(this.invalidName()){
      return;
    }
    this.submitted = true;

    if(this.pizza.name){
      if (this.pizza.name.trim() && this.pizza.id) {
        this.products[this.findIndexById(this.pizza.id)] = this.pizza;                
        // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Updated', life: 3000});
      }else {
        if(!this.invalidName()){
          this.pizza.id = this.createId();
          this.pizza.image = this.createImage();
          this.products.push(this.pizza);
          //         // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        }else{
          //Nome inválido 
          //         // this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
        }
      }

          this.products = [...this.products];
          this.productDialog = false;
          this.pizza = {};
      }
  }


  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  createImage(): string {
    let img = 'p';
    var chars = '12345678';
    img += chars.charAt(Math.floor(Math.random() * chars.length));
    img += '-480x480.jpg'
    return img;
  }
  InputNumberModule(){

  }
  deleteSelectedProducts(){

  }
  editProduct(pizza: Product) {
    this.pizza = {...pizza};
    this.productDialog = true;
  }

  hideDialog(){
    this.productDialog = false;
  }

  invalidName(){

    debugger
    if(this.pizza.name){
      let parametro = /[^a-zA-z\s]+$/i; // apenas nomes sem acento/^[a-z\s]+$/i
      let invalido = !this.pizza.name.match(parametro);
      debugger
      if(invalido){
        return false
      }else{
        return true
      }
    }
    return false;
  }
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
}
}
