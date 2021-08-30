import { CatalogoComponent } from './catalogo/catalogo.component';
import { ContatoComponent } from './contato/contato.component';
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
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzariaRoutingModule { }
