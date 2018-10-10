import { Component , OnInit} from '@angular/core';
import { SwPush , SwUpdate} from '@angular/service-worker';
import { PushNotificationService } from './pushNotification.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  userId:string;
  token:string;

    constructor(private swUpdate: SwUpdate, swPush: SwPush , public cookieService:CookieService) {
       if (swPush.isEnabled) {
         swPush
           .requestSubscription({
             serverPublicKey: 'BBWLVU743rUhRSmnugLLWm_q6_C5u-i-ZTylbe6WSmRMUVLbcs0HwFZ2wji-2WuaTy2IhAJCEi-NSBSf2MfIZYg'
           })
           .then(subscription => {
             // send subscription to the server
           })
           .catch(console.error);
       }
     }
public ngOnInit():void {
        if (this.swUpdate.isEnabled) {
            this.swUpdate.available.subscribe((evt) => {
                console.log('service worker updated');
            });

            this.swUpdate.checkForUpdate().then(() => {
                // noop
            }).catch((err) => {
                console.error('error when checking for update', err);
            });
        }
        this.userId=this.cookieService.get('userId');
        this.token=this.cookieService.get('token');
      }

}
