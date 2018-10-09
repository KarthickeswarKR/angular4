import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PushNotificationService } from './pushNotification.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Globals } from './app.globals';
import { TokenInterceptor } from './TokenInterceptor';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        OrganisationComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
FormsModule,
HttpClientModule,
ServiceWorkerModule.register('/ngsw-worker.js', { enabled: false }),
    ],
    providers: [Globals,PushNotificationService,CookieService,{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }]
})
export class AppModule { }
