import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(
    private http: HttpClient
  ) { }

  debitStatus(url: string, body: any, headers: any): Observable<any> {
    return this.http.post(url, body, {headers: headers}).pipe();
  }
}
