import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzariaRoutingModule } from './pizzaria-routing.module';
import { InicialComponent } from './inicial/inicial.component';


@NgModule({
  declarations: [
    InicialComponent
  ],
  imports: [
    CommonModule,
    PizzariaRoutingModule
  ]
})
export class PizzariaModule { }
