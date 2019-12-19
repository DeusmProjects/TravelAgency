import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../models/customer";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  url = environment.server;

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  public post(customer: Customer): Observable<any> {
    return this.httpClient.post<Customer>(this.url + '/customers/reg', customer, this.options );
  }
}
