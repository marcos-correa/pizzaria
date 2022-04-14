import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';
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
    private userService: UserService,
    private pizzasService: PizzasService,
    private pizzariaService:PizzariaService,
    public messageService: MessageService,
    private router:Router
  ) {}
  pizza!: Pizza;
  pizzas: Pizza[] = [];

  // productDialog: boolean;

  // products: Product[];

  // product: Product;

  selectedPizzas: Pizza[] = [];

  submitted: boolean = false;
  users: any | undefined;
  selectedCar: any | undefined;
  modelCar!: string;
  priceCar!: number;
  modelId!: string;
  deleteModelId!: string;
  // statuses: any[];

  // constructor(private productService: ProductService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.pizzas = this.pizzasService.getPizzas();
    this.getUsers();
    
  }

  getUsers(){
    this.userService.getUsers().subscribe(
      {
        next: this.hasResults,
        error: this.hasError
      }
    );
  }

  getCarById(){
    this.pizzariaService.getCarByID(this.modelId).subscribe({
        next: this.hasSucceedGetCarById,
        error: this.hasError
      }
    )
  }

 

  insertCar(){
    this.pizzariaService.insertCar(this.modelCar,this.priceCar).subscribe({
        next: this.hasSucceedInsert,
        error: this.hasError
      }
    )
  }
  deleteCarById(){
    this.pizzariaService.deleteCarById(this.deleteModelId).subscribe({
        next: this.hasSucceedDelete,
        error: this.hasError
      }
    )
  }

  updateCar(){
    this.pizzariaService.updateCar(this.selectedCar).subscribe({
        next: this.hasSucceedUpdate,
        error: this.hasError
      }
    )
  }

  setUsers(users:any){
    this.users = users
  }
  /**
   * Sucessos
   * @param res 
   */ 
  hasResults = (res:any) => {
    this.setUsers(res);
  }
  hasSucceedInsert = () =>{
    alert(`Cliente ${this.modelCar} inserido com sucesso`)
  }
  hasSucceedUpdate = () =>{
    this.getUsers()
  }
  hasSucceedDelete = () =>{
    alert(`Carro ${this.modelCar} inserido com sucesso`)
  }
  hasSucceedGetCarById = (res:any) =>{
    this.selectedCar = res
  }

  /**
   * Erros
   * @param err 
   */
  hasError = (err:any) => {
    let msg = 'Você não está logado ou o seu Token expirou'
    this.messageService.add({severity:'error', summary:'Falha na autenticação', detail:msg, life: 3000});
    this.router.navigate(['login']);
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
