import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../models/city';
import {environment} from "../../environments/environment.prod";

@Injectable()
export class CitiesService {

  constructor(private httpClient: HttpClient) { }

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  url = environment.server;

  public get(): Observable<any> {
    return this.httpClient.get(this.url + '/cities');
  }

  public post(city: City): Observable<any> {
    return this.httpClient.post<City>(this.url + '/cities/add', city, this.options );
  }

  public delete(id: number): Observable<{}> {
    return this.httpClient.delete<City>(`${this.url}/cities/delete/${id}`);
  }

  public put(city: City): Observable<any> {
    return this.httpClient.put<City>(`${this.url}/cities/update/${city.id}`, city, this.options);
  }
}
