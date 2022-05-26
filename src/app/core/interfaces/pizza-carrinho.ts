import { Pizza } from "./pizza";

export interface PizzaNoCarrinho extends Pizza {
  quantity?:number;
}