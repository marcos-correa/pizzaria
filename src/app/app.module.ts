import { PizzariaModule } from './home/pizzaria.module';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ToastModule} from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
// import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';




// export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    
    ButtonModule,
    ToolbarModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ToastModule,
    DialogModule,
    PizzariaModule,
    // NgxMaskModule.forRoot(),


  ],
  providers: [
    MessageService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
