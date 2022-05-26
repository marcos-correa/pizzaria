import { PizzaNoCarrinho } from './../interfaces/pizza-carrinho';
import { PizzasService } from '../services/pizzas.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, first, map, tap} from 'rxjs/operators';
import { Pizza, Carro } from '../interfaces/pizza';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzariaService {
  favoritas:number;
  
  pizzas:Pizza[];
  carrinho: PizzaNoCarrinho[];


  valorTotal: number;
  valorTotalComDesconto: number;
  descontoAplicado: Boolean;
  constructor(
    private http: HttpClient,
    private pizzasService: PizzasService
  ) { 
    // this.pizzas = this.pizzasService.getPizzas()
    this.carrinho = []


    this.valorTotal = 0;
    this.valorTotalComDesconto = 0;
    this.favoritas = 0;
    this.descontoAplicado = false;
  }

  //Serviços da aplicação

  getPizzas(){
    // this.http.get("http://localhost/api/")
    return this.pizzas
  }

  getPizzasNoCarrinho(){
    return this.carrinho
  }
  setPizzasNoCarrinho(pizzas: Pizza[]){
    this.carrinho = pizzas;
  }
  
  getTotalPizzasNoCarrinho(){
    let carrinho = 0;

    // todo quantity pizza
    for(let pizza of this.carrinho){
      carrinho += pizza.quantity
    }
    return carrinho
  }

  getFavoritas(){
    //todo: favorite
    return this.favoritas;
  }

  getTest(): Observable<any>{
    return this.http.get(`/api/teste`)
    .pipe(
      map((res:any) => res.json()),
    );
  }

  hasError(err:any,type:any){ 
    console.log(err, type)

  }

  adicionarAoCarrinho(pizza:Pizza){
    let pizza_:PizzaNoCarrinho = pizza;
    let mensagem = ''
    if (pizza_.id){
      let pizza_existe_no_carrinho = this.carrinho.filter(piz => piz.id == pizza_.id)//[{}] length == 1
      if(pizza_existe_no_carrinho.length>0){
        let i = this.findIndexById(pizza_.id);
        this.carrinho[i].quantity++
      }else{
        pizza_.quantity = 1;
        this.carrinho.push(pizza_)
      }
      mensagem = 'Pizza adicionada ao carrinho'
    }
    this.valorTotalCarrinho();
    return mensagem;
  }

  valorTotalCarrinho(){
    this.valorTotal = 0;
    for(let pizza of this.carrinho){
      this.valorTotal += 1*pizza.price
      this.valorTotalComDesconto = this.valorTotal;
    }
    if(this.descontoAplicado){
      this.valorTotalComDesconto = this.valorTotal - (this.valorTotal*0.15)
    }
  }

  getDescontoAplicado(){
    return this.descontoAplicado;
  }
  getValorCarrinho(){
    if(this.descontoAplicado){
      this.valorTotalCarrinho()
      return this.valorTotalComDesconto
    }else{
      return this.valorTotal
    }
  }
  

  setDescontoAplicado(descontoAplicado: Boolean){
    this.descontoAplicado = descontoAplicado
  }
  
  getValorTotalComDesconto(){
    return this.valorTotalComDesconto
  }
  getValorTotal(){
    return this.valorTotal;
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.carrinho.length; i++) {
        if (this.carrinho[i].id === id) {
            index = i;
            break;
        }
    }

    return index;
  } 
  
  
//Testes CRUD


  getCars(): Observable<any>{
    return this.http.get("http://localhost/api/list").pipe(
      map((res:any)=> res['data'])
    )
  }

  insertCar(model:string , price:number ): Observable<any>{
    let data = {
      model: model,
      price: price
    }
    return this.http.post("http://localhost/api/store",{data}).pipe(
      map((res:any)=> res['data'])
    )
  }

  updateCar( car:any ): Observable<any>{
    let data = car[0]
    return this.http.post("http://localhost/api/update",{data}).pipe(
      map((res:any)=> res)
    )
  }

  
  getCarByID(id:string): Observable<any>{
    return this.http.get(`http://localhost/api/search.php?model=${id}`).pipe(
      map((res:any) => res['data'])
    )
  }

  deleteCarById(id:string): Observable<any>{
    return this.http.delete(`http://localhost/api/delete.php?model=${id}`).pipe(
      map((res:any) => res)
    )
  }

}
