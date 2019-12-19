import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable()
export class FilesUploadService {

  constructor(private httpClient: HttpClient) { }

  url = environment.server;

  options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
  };

  public post(file: any): Observable<any> {
    return this.httpClient.post<any>(this.url + '/files/upload', file);
  }
}
