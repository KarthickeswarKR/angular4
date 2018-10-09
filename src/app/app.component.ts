import { Component , OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
userId:string;
token:string;
constructor(private router : Router ,private cookieService : CookieService) {

};
  ngOnInit(){
    this.userId=this.cookieService.get('userId');
  this.token=this.cookieService.get('token');

  }

}
