import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { InicialComponent } from './inicial/inicial.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {
    path: '',
    component: InicialComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'endereco',
    component: ListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzariaRoutingModule { }
