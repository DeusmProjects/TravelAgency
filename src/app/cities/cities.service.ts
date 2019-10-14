import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from './city';

@Injectable()
export class CitiesService {

  constructor(private httpClient: HttpClient) { }

  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  public post(url: string, city: City): Observable<City> {
    return this.httpClient.post<City>(url, city);
  }

  public delete(url: string, id: number): Observable<{}> {
    return this.httpClient.delete<City>(`${url}/${id}`);
  }
}
