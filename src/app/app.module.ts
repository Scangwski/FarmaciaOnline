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
import { PaginaProdottoComponent } from './pagina-prodotto/pagina-prodotto.component';
import { PaginaProdottiComponent } from './pagina-prodotti/pagina-prodotti.component';
import { RecuperaPasswordComponent } from './recupera-password/recupera-password.component';


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
      RecuperaPasswordComponent,
      PaginaProdottoComponent,
      PaginaProdottiComponent,
      PaginaProdottoComponent,
      PaginaProdottiComponent,
      RecuperaPasswordComponent

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
