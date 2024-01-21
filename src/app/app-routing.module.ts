import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { HomeComponent } from './home/home.component'; // Importa HomeComponent
import { CarrelloComponent } from './carrello/carrello.component';
import {PagineComponent} from "./pagine/pagine.component";
import {CounterComponent} from "./counter/counter.component";
import {TendinaComponent} from "./tendina/tendina.component";
import {ScorrimentoComponent} from "./scorrimento/scorrimento.component";
import {PaginaProdottoComponent} from "./pagina-prodotto/pagina-prodotto.component";
import {RecuperaPasswordComponent} from "./recupera-password/recupera-password.component";
import {RegisterComponent} from "./register/register.component";
import {PaginaUtenteComponent} from "./pagina-utente/pagina-utente.component";
import {Counter2Component} from "./counter2/counter2.component";
import {InventarioComponent} from "./inventario/inventario.component"; // Importa CarrelloComponent

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Reindirizza il path vuoto al login
  { path: 'home', component: HomeComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'pagine', component: PagineComponent},
  { path: 'login', component: LoginComponent},
  { path: "recupera-password", component: RecuperaPasswordComponent},
  { path: "counter", component: CounterComponent},
  { path: "counter2", component: Counter2Component},
  { path: "tendina", component: TendinaComponent},
  { path: "scorrimento", component: ScorrimentoComponent},
  { path:"paginaProdotto", component: PaginaProdottoComponent},
  { path:"paginaProdotti", component: PaginaProdottoComponent},
  { path: "register", component: RegisterComponent},
  { path: "paginaUtente", component: PaginaUtenteComponent},
  { path: "inventario", component: InventarioComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
