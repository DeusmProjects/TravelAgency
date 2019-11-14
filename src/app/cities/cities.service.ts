import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../models/city';

@Injectable()
export class CitiesService {

  constructor(private httpClient: HttpClient) { }

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  public post(url: string, city: City): Observable<any> {
    return this.httpClient.post<City>(url, city, this.options );
  }

  public delete(url: string, id: number): Observable<{}> {
    return this.httpClient.delete<City>(`${url}/${id}`);
  }

  public put(url: string, city: City): Observable<any> {
    return this.httpClient.put<City>(`${url}/${city.id}`, city, this.options);
  }
}
