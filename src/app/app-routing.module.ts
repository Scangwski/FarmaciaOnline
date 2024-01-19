import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { HomeComponent } from './home/home.component'; // Importa HomeComponent
import { CarrelloComponent } from './carrello/carrello.component'; // Importa CarrelloComponent

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Reindirizza il path vuoto alla home
    { path: 'home', component: HomeComponent },
    { path: 'carrello', component: CarrelloComponent },
    // ... altre rotte
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
