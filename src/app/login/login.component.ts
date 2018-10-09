import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import {Globals} from '../app.globals'
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {
  }
  username:String;
  password:String;
  userId:string;
  token:string;
    constructor(private router : Router , public globals: Globals , public appService: AppService , private cookieService : CookieService) {
      console.log(globals)

     }

    fnAuthenticateUser=function(){
      try {

      this.appService.login({username:this.username,password:this.password,"client_id": "$vgodown1","client_secret": "grnklnio576543hyjvbk","grant_type": "password"})
        .subscribe(resp => {
          console.log(resp)
          this.userId=resp.userId;
          this.token=resp.token;
          this.globals.userId=this.userId;
          this.globals.token=this.token;
          this.cookieService.set('userId',this.userId);
          this.cookieService.set('token',this.token);
          this.username='';
          this.password='';
          this.router.navigateByUrl('');
        },
          error => {
            alert(error)
            console.log(error, "error");
          })
    } catch (e) {
      console.log(e);
    }
    }
}
