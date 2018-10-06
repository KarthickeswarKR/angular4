import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ "../../node_modules/bootstrap/dist/css/bootstrap.min.css",
  './app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'Angular';
  username:String;
  password:String;
  constructor(public appService: AppService) { }

  fnAuthenticateUser(){
    try {

    this.appService.login({username:this.username,password:this.password,"client_id": "$vgodown1","client_secret": "grnklnio576543hyjvbk","grant_type": "password"})
      .subscribe(resp => {
        console.log(resp, "res");
        alert("login successful")
        this.username='';
        this.password='';
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
