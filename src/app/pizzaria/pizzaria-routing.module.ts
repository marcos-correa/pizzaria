import { CatalogoComponent } from './catalogo/catalogo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { InicialComponent } from './inicial/inicial.component';
import { ListaComponent } from './lista/lista.component';
import { ContatoComponent } from './contato/contato.component';

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
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
