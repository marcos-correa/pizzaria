import { Pizza } from './../lista/pizza';
import { PizzasService } from './../../services/pizzas.service';
import { Component, OnInit } from '@angular/core';
import { PizzariaService } from '../pizzaria.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
})
export class PainelComponent implements OnInit {
  constructor(
    private pizzasService: PizzasService,
    private pizzariaService:PizzariaService
  ) {}
  pizza!: Pizza;
  pizzas: Pizza[] = [];

  // productDialog: boolean;

  // products: Product[];

  // product: Product;

  selectedPizzas: Pizza[] = [];

  submitted: boolean = false;
  cars: any | undefined;
  // statuses: any[];

  // constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.pizzas = this.pizzasService.getPizzas();
    this.pizzariaService.getCars().subscribe({
        next: this.hasResults,
        error: this.hasError
      }
    );
  }

  hasResults = (res:any) => {
    this.setCars(res);
  }

  setCars(cars:any){
    this.cars = cars
  }
  hasError = (err:any) => {
    console.log(err)
  }

  openNew() {
    this.pizza = {price:0, quantity:0};
    this.submitted = false;
    // this.productDialog = true;
  }

  deleteSelectedProducts() {
    // this.confirmationService.confirm({
    //   message: 'Are you sure you want to delete the selected products?',
    //   header: 'Confirm',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.products = this.products.filter(
    //       (val) => !this.selectedProducts.includes(val)
    //     );
    //     this.selectedProducts = null;
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Successful',
    //       detail: 'Products Deleted',
    //       life: 3000,
    //     });
    //   },
    // });
  }

  editProduct(pizza: Pizza) {
    this.pizza = { ...pizza };
    // this.productDialog = true;
  }

  deleteProduct(pizza: Pizza) {
    // this.confirmationService.confirm({
    //   message: 'Are you sure you want to delete ' + product.name + '?',
    //   header: 'Confirm',
    //   icon: 'pi pi-exclamation-triangle',
    //   accept: () => {
    //     this.products = this.products.filter((val) => val.id !== product.id);
    //     this.product = {};
    //     this.messageService.add({
    //       severity: 'success',
    //       summary: 'Successful',
    //       detail: 'Product Deleted',
    //       life: 3000,
    //     });
    //   },
    // });
  }

  hideDialog() {
    // this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.pizza.name?.trim()) {
      if (this.pizza.id) {
        this.pizzas[this.findIndexById(this.pizza.id)] = this.pizza;
        // this.messageService.add({
        //   severity: 'success',
        //   summary: 'Successful',
        //   detail: 'Product Updated',
        //   life: 3000,
        // });
      } else {
        this.pizza.id = this.createId();
        this.pizza.image = 'product-placeholder.svg';
        this.pizzas.push(this.pizza);
        // this.messageService.add({
        //   severity: 'success',
        //   summary: 'Successful',
        //   detail: 'Product Created',
        //   life: 3000,
        // });
      }

      this.pizzas = [...this.pizzas];
      // this.productDialog = false;
      this.pizza = {quantity:0,price:0};
    }
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

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
