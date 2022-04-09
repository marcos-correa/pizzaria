export interface Pizza {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price:number;
  quantity:number;
  inventoryStatus?:string;
  category?:string;
  image?:string;
  rating?:number;
}

export interface Carro {
  model?:string;
  price?:number;
}