import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from 'src/app/core/services/user.service';
import { Pizza } from '../../core/interfaces/pizza';
import { PizzasService } from '../../core/services/pizzas.service';
import { Component, OnInit } from '@angular/core';
import { PizzariaService } from './../../core/services/pizzaria.service';


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
    private confirmationService:ConfirmationService,
    public messageService: MessageService,
    private router:Router
  ) {}
  pizza: Pizza;
  pizzas: Pizza[] = [];

  productDialog: boolean = false;

  // products: Product[];

  // product: Pizza;

  selectedPizzas: Pizza[] = [];

  submitted: boolean = false;
  users: any | undefined;
  selectedCar: any | undefined;
  modelCar!: string;
  priceCar!: number;
  modelId!: string;
  deleteModelId!: string;
  // statuses: any[];


  ngOnInit(): void {
    this.verificarUsuarioLogado()
    this.getAllPizzas();    
  }
  verificarUsuarioLogado(){
    if(!this.userService.isLogado()){
      this.router.navigate(['login']);
    }
  }

  getAllPizzas(){
    this.pizzasService.getPizzas().pipe().subscribe({
      next: (res:any) =>{
        this.pizzas = res.data;
      },
      error: () => this.hasError
    });
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
  
  /**
   * Erros
   * @param err 
   */
  hasError = (err:any) => {
    let msg = 'Você não está logado ou o seu Token expirou'
    this.messageService.add({severity:'error', summary:'Falha na autenticação', detail:msg, life: 3000});
    this.router.navigate(['login']);
  }

  //Pizzaria



  openNew() {
    this.resetPizza()
    // this.pizza = {price:0, quantity:0};
    this.submitted = false;
    this.productDialog = true;
  }
  resetPizza(){
    this.pizza={
      price:0,
      // quantity:0,
    }

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
    this.productDialog = true;
  }

  deleteProduct(pizza: Pizza) {
    let id = pizza.id;
    
    this.confirmationService.confirm({
      message: 'Você tem certeza que deseja deletar a pizza "' + pizza.name + '"?',
      header: 'Excluir Pizza',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.pizzasService.deletePizza(id).subscribe({
            next:()=>{
              this.messageService.add({
                severity: 'success',
                summary: 'Sucesso',
                detail: 'A pizza '+ pizza.name +' foi excluída',
                life: 3000,
              });
            },
            error:(err)=>{
              this.messageService.add({
                severity: 'error',
                summary: 'Erro ao excluir',
                detail: 'Não foi possível deletar a pizza '+ pizza.name,
                life: 3000,
              });
            },
            complete:()=>{
              this.getAllPizzas();
            }
          })
        
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;

    if (this.pizza.name?.trim()) {
      if (this.pizza.id) {
        this.pizzas[this.findIndexById(this.pizza.id)] = this.pizza;
        this.editPizza();
      } else {
        this.pizza.image = this.getRandomImagePizza();
        this.pizza.code = this.createId();
        this.pizza.category = "PIZZA";
        this.createNewPizza();
      }
    }
  }

  getRandomImagePizza(){
    let number = Math.floor(Math.random()*(10-1+1)+1);
    return `p${number.toString()}-480x480.png`
  }

  editPizza(){
    this.pizzasService.updatePizza(this.pizza).subscribe({
      next:()=>{
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: `A pizza ${this.pizza.name} foi atualizada`,
          life: 3000,
        });
      },
      error:()=>{
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao atualizar a pizza "'+this.pizza.name+'".',
          life: 3000,
        });
      },
      complete:()=>{
        this.productDialog = false
        this.resetPizza();
        this.getAllPizzas();
      }
    })

   
  }
  createNewPizza(){
    this.pizzasService.createPizza(this.pizza).subscribe({
      next:()=>{
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'A pizza "'+this.pizza.name+'" foi criada.',
          life: 3000,
        });
      },
      error:()=>{
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Erro ao criar a pizza "'+this.pizza.name+'".',
          life: 3000,
        });
      },
      complete:()=>{
        this.productDialog = false
        this.resetPizza();
        this.getAllPizzas();
      }
    })
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
