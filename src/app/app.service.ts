import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient ) { }
  /* Uses http.get() to load data from a single API endpoint */
  login(data) {
    return this.http.post('https://develop-branch.herokuapp.com/api/token/login',data);
  }
}
