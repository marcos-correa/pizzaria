export interface Pizza {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  price:number;
  image?:string;
  category?:string;
  // quantity:number;
  // inventoryStatus?:string;
  // rating?:number;
}

export interface Carro {
  model?:string;
  price?:number;
}