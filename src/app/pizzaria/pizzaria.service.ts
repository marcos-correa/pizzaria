import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PizzariaService {
  products:any[];

  constructor(
    private http: HttpClient,
    ) { 
    this.products = [
      {
        "id": "1",
        "code": "acvx872gc",
        "name": "Fantastic Iron Shoes",//
        "description": "Product Description",
        "image": "p1-480x480.jpg",//
        "price": 187,//
        "category": "PIZZA",//
        "quantity": 35,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      },
      {
        "id": "2",
        "code": "tx125ck42",
        "name": "Sleek Iron Clock",
        "description": "Product Description",
        "image": "p2-480x480.jpg",
        "price": 198,
        "category": "PIZZA",
        "quantity": 15,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "3",
        "code": "gwuby345v",
        "name": "Gorgeous Silk Plate",
        "description": "Product Description",
        "image": "p3-480x480.jpg",
        "price": 194,
        "category": "PIZZA",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "4",
        "code": "kishj335v",
        "name": "Fantastic Marble Bag",
        "description": "Product Description",
        "image": "p4-480x480.jpg",
        "price": 104,
        "category": "PIZZA",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "5",
        "code": "babylie222v",
        "name": "Small Cotton Plate",
        "description": "Product Description",
        "image": "p5-480x480.jpg",
        "price": 183,
        "category": "PIZZA",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "6",
        "code": "where569v",
        "name": "Incredible Rubber Coat",
        "description": "Product Description",
        "image": "p6-480x480.jpg",
        "price": 187,
        "category": "PIZZA",
        "quantity": 25,
        "inventoryS4tatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "7",
        "code": "forever111v",
        "name": "Durable Steel Chair",
        "description": "Product Description",
        "image": "p7-480x480.jpg",
        "price": 120,
        "category": "PIZZA",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "8",
        "code": "juststo456v",
        "name": "Ergonomic Marble Lamp",
        "description": "Product Description",
        "image": "p8-480x480.jpg",
        "price": 124,
        "category": "PIZZA",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "9",
        "code": "tocrying569v",
        "name": "Mediocre Wool Computer",
        "description": "Product Description",
        "image": "p1-480x480.jpg",
        "price": 104,
        "category": "PIZZA",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "10",
        "code": "wegotta888v",
        "name": "Lightweight Wool Car",
        "description": "Product Description",
        "image": "p1-480x480.jpg",
        "price": 199,
        "category": "PIZZA",
        "quantity": 25,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      }
  ]

  }
  logar(){
    this.userlogado = true
  }

  getPizzas(){
    return this.products
  }

  getEndereco(cep:string){
    return this.http.get(`//viacep.com.br/ws/${cep}/json`)
    .pipe(map(res => {
      return res;
    })); 
  }
}
