import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    HomeComponent,
    DatosPersonalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'lista/:id',
        component: ListaComponent
      },
      {
        path: 'datosPersonales',
        component: DatosPersonalesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
