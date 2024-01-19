import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { HomeComponent } from './home/home.component'; // Importa HomeComponent
import { CarrelloComponent } from './carrello/carrello.component';
import {PagineComponent} from "./pagine/pagine.component";
import {Recuperapassword} from "./recupera-password/recupera-password";
import {CounterComponent} from "./counter/counter.component";
import {TendinaComponent} from "./tendina/tendina.component";
import {ScorrimentoComponent} from "./scorrimento/scorrimento.component";
import {PaginaProdotto} from "./pagina-prodotto/pagina-prodotto";
import {PaginaProdotti} from "./pagina-prodotti/pagina-prodotti"; // Importa CarrelloComponent

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Reindirizza il path vuoto alla home
  { path: 'home', component: HomeComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'pagine', component: PagineComponent},
  { path: 'login', component: LoginComponent},
  { path: "recupera-password", component: Recuperapassword},
  { path: "counter", component: CounterComponent},
  { path: "tendina", component: TendinaComponent},
  {path: "scorrimento", component: ScorrimentoComponent},
  {path:"pagina-prodotto", component: PaginaProdotto},
  {path:"pagina-prodotti", component: PaginaProdotti}
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
