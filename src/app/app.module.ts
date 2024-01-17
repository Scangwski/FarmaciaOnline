import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RecuperaPasswordComponent } from './recupera-password/recupera-password.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RecensioniComponent } from './recensioni/recensioni.component';
import {HttpClientModule} from "@angular/common/http";
import { PaginaProdottoComponent } from './pagina-prodotto/pagina-prodotto.component';
import { PaginaProdottiComponent } from './pagina-prodotti/pagina-prodotti.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RecuperaPasswordComponent,
    RegisterComponent,
    RecensioniComponent,
    PaginaProdottoComponent,
    PaginaProdottiComponent,
    FooterComponent,
    HeaderComponent
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
