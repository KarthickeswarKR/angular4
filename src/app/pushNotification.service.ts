import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER_URL = 'http://localhost/subscription';

@Injectable()
export class PushNotificationService {
  constructor(private http: HttpClient) {}

   sendSubscriptionToTheServer=function(subscription: PushSubscription) {
    return this.http.post(SERVER_URL, subscription);
  }
}
