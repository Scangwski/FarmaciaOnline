import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthServiceService} from "./services/auth-service.service";
import {Observable} from "rxjs";
import {Prodotto} from "./model/prodotto";
import {Recensioni} from "./model/recensione";

@Injectable({
  providedIn: 'root'
})
export class ProdottoServiceService {
  private backendUrl = "http://localhost:8085"

  constructor(private http:HttpClient,private auth:AuthServiceService) {}
  dammiRistorantiMigliori():Observable<Prodotto[]>{

    var header = {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + this.auth.token)
    }

    return this.http.get<Prodotto[]>(this.backendUrl + "/prodottiMigliori",
        header)
  }

  recensioni():Observable<Recensioni[]>{
    var header = {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + this.auth.getToken())

    }
    return this.http.get<Recensioni[]>(this.backendUrl + "/recensioni", {withCredentials: true});
  }
}
