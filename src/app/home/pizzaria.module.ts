import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PizzariaRoutingModule } from './pizzaria-routing.module';
import { InicialComponent } from './inicial/inicial.component';
import { ListaComponent } from './lista/lista.component';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';




import {FileUploadModule} from 'primeng/fileupload';

import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { EnderecoComponent } from './endereco/endereco.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { LoginComponent } from './login/login.component';
import { ContatoComponent } from './contato/contato.component';
import { PainelComponent } from './painel/painel.component';
import { PizzariaService } from '../core/services/pizzaria.service';


@NgModule({
  declarations: [
    InicialComponent,
    ListaComponent,
    EnderecoComponent,
    CadastroComponent,
    CatalogoComponent,
    LoginComponent,
    ContatoComponent,
    PainelComponent,
  ],
  imports: [
    CommonModule,
    PizzariaRoutingModule,
    FormsModule,
    
    ButtonModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    InputNumberModule,
    InputTextareaModule,
    FileUploadModule,
    DropdownModule,
    ProgressBarModule,
    // FormBuilder,
    ReactiveFormsModule

  ],
  exports:[
    LoginComponent
  ]
})
export class PizzariaModule { }
