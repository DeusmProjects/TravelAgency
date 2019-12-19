import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Hotel} from '../models/hotel';
import { environment } from "../../environments/environment";

@Injectable()
export class HotelsService {

  constructor(private httpClient: HttpClient) { }

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
  };

  url = environment.server;

  public get(): Observable<any> {
    return this.httpClient.get(this.url + '/hotels');
  }

  public post(hotel: Hotel): Observable<any> {
    return this.httpClient.post<Hotel>(this.url + '/hotels/add', hotel, this.options );
  }

  public delete(id: number): Observable<{}> {
    return this.httpClient.delete<Hotel>(`${this.url}/hotels/delete/${id}`);
  }

  public put(hotel: Hotel): Observable<any> {
    return this.httpClient.put<Hotel>(`${this.url}/update/${hotel.id}`, hotel, this.options);
  }

  public searchHotels(term: string): Observable<Hotel[]> {
    if (!term.trim()) return of([]);

    return this.httpClient.get<Hotel[]>(`${this.url}/hotels/${term}`)
  }
}
