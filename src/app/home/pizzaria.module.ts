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
import { NgxMaskModule, IConfig } from 'ngx-mask';
import {ToastModule} from 'primeng/toast';
// import {CalendarModule} from 'primeng/calendar';
// import {SliderModule} from 'primeng/slider';
// import {MultiSelectModule} from 'primeng/multiselect';
// import {ContextMenuModule} from 'primeng/contextmenu';
// import {DialogModule} from 'primeng/dialog';
// import {ButtonModule} from 'primeng/button';
// import {DropdownModule} from 'primeng/dropdown';
// import {ProgressBarModule} from 'primeng/progressbar';
// import {FileUploadModule} from 'primeng/fileupload';
// import {ToolbarModule} from 'primeng/toolbar';
// import {RatingModule} from 'primeng/rating';
// import {RadioButtonModule} from 'primeng/radiobutton';
// import {InputNumberModule} from 'primeng/inputnumber';
// import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { SharedModule } from '../shared/shared.module';
import {BreadcrumbModule} from 'primeng/breadcrumb';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;


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
    ConfirmDialogModule,
    ToastModule,
    ButtonModule,
    ToolbarModule,
    TableModule,
    DialogModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    FileUploadModule,
    DropdownModule,
    ProgressBarModule,
    BreadcrumbModule,
    // FormBuilder,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()

  ],
  exports:[
    LoginComponent
  ],
  providers:[MessageService, ConfirmationService]
})
export class PizzariaModule { }
