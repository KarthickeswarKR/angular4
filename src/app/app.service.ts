import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }
  /* Uses http.get() to load data from a single API endpoint */
  login(data) {
    interface alldata {
      username: String;
      password: String;
      client_id: String;
      client_secret: String;
      grant_type: String;
}
    return this.http.post('https://develop-branch.herokuapp.com/api/token/login',data);
  }
}
