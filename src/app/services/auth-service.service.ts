import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthToken, Utente} from "../model/utente";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private backendUrl = "http://localhost:8085";
  public token?:string | null;

  getToken(){
    if (this.token == undefined){
      this.token = localStorage.getItem("prodotto_token");
    }
    return this.token;
  }

  setToken(token:string){
    this.token = token;
    localStorage.setItem("prodotto_token", token);

  }

  removeToken(){
    this.token = undefined;
    localStorage.removeItem("prodotto_token");
  }
  constructor(private http:HttpClient, private router:Router) { }

  checkAuthentication(){
    this.http.post<AuthToken>(this.backendUrl + "/isAuthenticated",
        {"Authorization":"Basic " + this.token}, {withCredentials: true}).subscribe(
        res => {
          if (!res){
            this.removeToken();
          }
        }
    );
  }

  isAuthenticated(){
    return this.getToken() != undefined;
  }

    login(email:string, pass:string){
    var utente: Utente = {"email": email, "password": pass};
    this.http.post<AuthToken>(this.backendUrl + "/login",utente,{withCredentials: true})
        .subscribe(response => {
          this.setToken(response.token);
          this.router.navigate(["/"]);
        });
  }
  logout(){
    this.http.post<AuthToken>(this.backendUrl + "/logout",
        {"Authorization":"Basic " + this.token}, {withCredentials: true}).subscribe(
        res => {
          if (res){
            this.removeToken();
          }
          this.router.navigate(["/"]);
        }
    );
  }
}
