import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Hotel} from './hotel';

@Injectable()
export class HotelsService {

  constructor(private httpClient: HttpClient) { }

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  public get(url: string): Observable<any> {
    return this.httpClient.get(url);
  }

  public post(url: string, hotel: Hotel): Observable<any> {
    return this.httpClient.post<Hotel>(url, hotel, this.options );
  }

  public delete(url: string, id: number): Observable<{}> {
    return this.httpClient.delete<Hotel>(`${url}/${id}`);
  }

  public put(url: string, hotel: Hotel): Observable<any> {
    return this.httpClient.put<Hotel>(`${url}/${hotel.id}`, hotel, this.options);
  }
}
