import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ScorrimentoComponent } from './scorrimento/scorrimento.component';
import { CounterComponent } from './counter/counter.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ImmaginiComponent } from './immagini/immagini.component';
import { HomeComponent } from './home/home.component';
import { TendinaComponent } from './tendina/tendina.component';
import { TimerComponent } from './timer/timer.component';
import { PagineComponent } from './pagine/pagine.component';
import {Recuperapassword} from "./recupera-password/recupera-password";
import {PaginaProdotto} from "./pagina-prodotto/pagina-prodotto";
import {PaginaProdotti} from "./pagina-prodotti/pagina-prodotti";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ScorrimentoComponent,
    CounterComponent,
    CarrelloComponent,
    ImmaginiComponent,
    HomeComponent,
    TendinaComponent,
    TimerComponent,
    PagineComponent,
      Recuperapassword,
      PaginaProdotto,
      PaginaProdotti

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
