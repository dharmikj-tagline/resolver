import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  dataGet(): Observable<any> {
    return this.http.get(`${environment.url}`);
  }

  dataPost(data: any): Observable<any> {
    return this.http.post(`${environment.url}`,data);
  }
}
