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
  getProduct(id: string): Observable<Prodotto> {
    return this.http.get(`$this.http_product_url/${id}`)
        .map((response: Response) => response.json());
  }
  addProduct(context: any) {
    return this.http.post(`$this.http_product_url`, JSON.stringify(context))
        .map((response: Response) => response.json());
  }
  updateProduct(id:string, context: any) {
    return this.http.put(`$this.http_product_url/${id}`, JSON.stringify(context))
        .map((response: Response) => response.json());
  }
  deleteProduct(id: string) {
    return this.http.delete(`$this.http_product_url/${id}`)
        .map((response: Response) => response.json());
  }
}
