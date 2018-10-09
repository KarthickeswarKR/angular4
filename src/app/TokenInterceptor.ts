import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private cookieService : CookieService){}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer `+this.cookieService.get('token'),
        userid: this.cookieService.get('userId')
      }
    });
    return next.handle(request);
  }
}
