import { Pizza } from './../pizzaria/lista/pizza';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  pizzas: Pizza[]
  constructor() {
    this.pizzas = [
      {
        "id": "1",
        "code": "acvx872gc",
        "name": "Fantastic Iron Shoes",//
        "description": "Rerum quisquam dolore repellat nihil. Quia quas quia et optio. Dignissimos qui voluptatem et enim corporis nemo. Id laudantium autem est quo aut numquam cum iste.",
        "image": "p1-480x480.jpg",//
        "price": 187,//
        "category": "PIZZA",//
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      },
      {
        "id": "2",
        "code": "tx125ck42",
        "name": "Sleek Iron Clock",
        "description": "Qui ut neque et minima qui incidunt. Velit et provident ex itaque. Perferendis quasi ducimus et at.",
        "image": "p2-480x480.jpg",
        "price": 198,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "3",
        "code": "gwuby345v",
        "name": "Gorgeous Silk Plate",
        "description": "Totam quam commodi explicabo omnis omnis. Necessitatibus aliquam dolore dolores et eos dolor qui. Esse consequatur reiciendis qui ad.",
        "image": "p3-480x480.jpg",
        "price": 194,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "4",
        "code": "kishj335v",
        "name": "Fantastic Marble Bag",
        "description": "Est eius aperiam id eveniet quidem. Quas ad minus officiis magnam. Architecto et sit quo. Quos fugit asperiores aperiam consequuntur.",
        "image": "p4-480x480.jpg",
        "price": 104,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "5",
        "code": "babylie222v",
        "name": "Small Cotton Plate",
        "description": "Rerum exercitationem corporis eum non adipisci. Cumque illum rerum sed voluptas earum harum quaerat. Ea nobis illo labore. Porro culpa atque praesentium nihil.",
        "image": "p5-480x480.jpg",
        "price": 183,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "6",
        "code": "where569v",
        "name": "Incredible Rubber Coat",
        "description": "Molestiae reiciendis dolores cumque. Ducimus rerum ut ducimus eligendi. Dolor quia occaecati sed cum.",
        "image": "p6-480x480.jpg",
        "price": 187,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "7",
        "code": "forever111v",
        "name": "Durable Steel Chair",
        "description": "Qui sit quia cum vel eos quo vero. Nulla quia ut accusamus qui veritatis. Amet non dolores odio assumenda consectetur exercitationem modi.",
        "image": "p7-480x480.jpg",
        "price": 120,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "8",
        "code": "juststo456v",
        "name": "Ergonomic Marble Lamp",
        "description": "Mollitia quaerat alias ut. Similique cumque voluptas voluptatem dolore. Vero ipsam sed facilis reprehenderit. Similique et officia culpa fugiat. Quia et pariatur et recusandae.",
        "image": "p8-480x480.jpg",
        "price": 124,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "9",
        "code": "tocrying569v",
        "name": "Mediocre Wool Computer",
        "description": "Non et fugit magni dolorum. Tempore repellendus doloremque explicabo ut cupiditate consequatur quo. Soluta ex dolor odit dolores est voluptas. Eveniet harum voluptas itaque est ut.",
        "image": "p9-480x480.jpg",
        "price": 104,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "10",
        "code": "wegotta888v",
        "name": "Lightweight Wool Car",
        "description": "Quas qui consequuntur rerum. Placeat occaecati dolores qui facere dicta at fugiat. Laudantium in et et ut deleniti. In aut neque provident sed.",
        "image": "p10-480x480.jpg",
        "price": 199,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "11",
        "code": "acvx872gc",
        "name": "Fantastic Iron Shoes",//
        "description": "Rerum quisquam dolore repellat nihil. Quia quas quia et optio. Dignissimos qui voluptatem et enim corporis nemo. Id laudantium autem est quo aut numquam cum iste.",
        "image": "p1-480x480.jpg",//
        "price": 187,//
        "category": "PIZZA",//
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      },
      {
        "id": "12",
        "code": "tx125ck42",
        "name": "Sleek Iron Clock",
        "description": "Qui ut neque et minima qui incidunt. Velit et provident ex itaque. Perferendis quasi ducimus et at.",
        "image": "p2-480x480.jpg",
        "price": 198,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "13",
        "code": "gwuby345v",
        "name": "Gorgeous Silk Plate",
        "description": "Totam quam commodi explicabo omnis omnis. Necessitatibus aliquam dolore dolores et eos dolor qui. Esse consequatur reiciendis qui ad.",
        "image": "p3-480x480.jpg",
        "price": 194,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "14",
        "code": "kishj335v",
        "name": "Fantastic Marble Bag",
        "description": "Est eius aperiam id eveniet quidem. Quas ad minus officiis magnam. Architecto et sit quo. Quos fugit asperiores aperiam consequuntur.",
        "image": "p4-480x480.jpg",
        "price": 104,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "15",
        "code": "babylie222v",
        "name": "Small Cotton Plate",
        "description": "Rerum exercitationem corporis eum non adipisci. Cumque illum rerum sed voluptas earum harum quaerat. Ea nobis illo labore. Porro culpa atque praesentium nihil.",
        "image": "p5-480x480.jpg",
        "price": 183,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "16",
        "code": "where569v",
        "name": "Incredible Rubber Coat",
        "description": "Molestiae reiciendis dolores cumque. Ducimus rerum ut ducimus eligendi. Dolor quia occaecati sed cum.",
        "image": "p6-480x480.jpg",
        "price": 187,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "17",
        "code": "forever111v",
        "name": "Durable Steel Chair",
        "description": "Qui sit quia cum vel eos quo vero. Nulla quia ut accusamus qui veritatis. Amet non dolores odio assumenda consectetur exercitationem modi.",
        "image": "p7-480x480.jpg",
        "price": 120,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "18",
        "code": "juststo456v",
        "name": "Ergonomic Marble Lamp",
        "description": "Mollitia quaerat alias ut. Similique cumque voluptas voluptatem dolore. Vero ipsam sed facilis reprehenderit. Similique et officia culpa fugiat. Quia et pariatur et recusandae.",
        "image": "p8-480x480.jpg",
        "price": 124,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "19",
        "code": "tocrying569v",
        "name": "Mediocre Wool Computer",
        "description": "Non et fugit magni dolorum. Tempore repellendus doloremque explicabo ut cupiditate consequatur quo. Soluta ex dolor odit dolores est voluptas. Eveniet harum voluptas itaque est ut.",
        "image": "p9-480x480.jpg",
        "price": 104,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "20",
        "code": "wegotta888v",
        "name": "Lightweight Wool Car",
        "description": "Quas qui consequuntur rerum. Placeat occaecati dolores qui facere dicta at fugiat. Laudantium in et et ut deleniti. In aut neque provident sed.",
        "image": "p10-480x480.jpg",
        "price": 199,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "21",
        "code": "acvx872gc",
        "name": "Fantastic Iron Shoes",//
        "description": "Rerum quisquam dolore repellat nihil. Quia quas quia et optio. Dignissimos qui voluptatem et enim corporis nemo. Id laudantium autem est quo aut numquam cum iste.",
        "image": "p1-480x480.jpg",//
        "price": 187,//
        "category": "PIZZA",//
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 3
      },
      {
        "id": "22",
        "code": "tx125ck42",
        "name": "Sleek Iron Clock",
        "description": "Qui ut neque et minima qui incidunt. Velit et provident ex itaque. Perferendis quasi ducimus et at.",
        "image": "p2-480x480.jpg",
        "price": 198,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "23",
        "code": "gwuby345v",
        "name": "Gorgeous Silk Plate",
        "description": "Totam quam commodi explicabo omnis omnis. Necessitatibus aliquam dolore dolores et eos dolor qui. Esse consequatur reiciendis qui ad.",
        "image": "p3-480x480.jpg",
        "price": 194,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "24",
        "code": "kishj335v",
        "name": "Fantastic Marble Bag",
        "description": "Est eius aperiam id eveniet quidem. Quas ad minus officiis magnam. Architecto et sit quo. Quos fugit asperiores aperiam consequuntur.",
        "image": "p4-480x480.jpg",
        "price": 104,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "25",
        "code": "babylie222v",
        "name": "Small Cotton Plate",
        "description": "Rerum exercitationem corporis eum non adipisci. Cumque illum rerum sed voluptas earum harum quaerat. Ea nobis illo labore. Porro culpa atque praesentium nihil.",
        "image": "p5-480x480.jpg",
        "price": 183,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "26",
        "code": "where569v",
        "name": "Incredible Rubber Coat",
        "description": "Molestiae reiciendis dolores cumque. Ducimus rerum ut ducimus eligendi. Dolor quia occaecati sed cum.",
        "image": "p6-480x480.jpg",
        "price": 187,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      },
      {
        "id": "27",
        "code": "forever111v",
        "name": "Durable Steel Chair",
        "description": "Qui sit quia cum vel eos quo vero. Nulla quia ut accusamus qui veritatis. Amet non dolores odio assumenda consectetur exercitationem modi.",
        "image": "p7-480x480.jpg",
        "price": 120,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "28",
        "code": "juststo456v",
        "name": "Ergonomic Marble Lamp",
        "description": "Mollitia quaerat alias ut. Similique cumque voluptas voluptatem dolore. Vero ipsam sed facilis reprehenderit. Similique et officia culpa fugiat. Quia et pariatur et recusandae.",
        "image": "p8-480x480.jpg",
        "price": 124,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4,
      },
      {
        "id": "29",
        "code": "tocrying569v",
        "name": "Mediocre Wool Computer",
        "description": "Non et fugit magni dolorum. Tempore repellendus doloremque explicabo ut cupiditate consequatur quo. Soluta ex dolor odit dolores est voluptas. Eveniet harum voluptas itaque est ut.",
        "image": "p9-480x480.jpg",
        "price": 104,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 5
      },
      {
        "id": "30",
        "code": "wegotta888v",
        "name": "Lightweight Wool Car",
        "description": "Quas qui consequuntur rerum. Placeat occaecati dolores qui facere dicta at fugiat. Laudantium in et et ut deleniti. In aut neque provident sed.",
        "image": "p10-480x480.jpg",
        "price": 199,
        "category": "PIZZA",
        "quantity": 1,
        "inventoryStatus": "INSTOCK",
        "rating": 4
      }
      
    ]

  }

  getPizzas(): Pizza[]{
    return this.pizzas;
  }


  getPizzaByIndex(index: number): Pizza{
    let pizza = this.pizzas[index]
    return pizza
  }
}
