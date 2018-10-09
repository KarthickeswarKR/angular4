(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/TokenInterceptor.ts":
/*!*************************************!*\
  !*** ./src/app/TokenInterceptor.ts ***!
  \*************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(cookieService) {
        this.cookieService = cookieService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.cookieService.get('token'),
                userid: this.cookieService.get('userId')
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _components_organisation_organisation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/organisation/organisation.component */ "./src/app/components/organisation/organisation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"] },
    { path: 'organisation', component: _components_organisation_organisation_component__WEBPACK_IMPORTED_MODULE_5__["OrganisationComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  text-align: center; }\n  :host > .nav {\n    padding: 15px; }\n  :host > .nav > a {\n      display: inline-block;\n      margin: 0 5px;\n      padding: 5px 10px;\n      text-decoration: none;\n      color: #333;\n      font-weight: 500;\n      border: 2px solid grey; }\n  :host > .nav > a:hover {\n        border-color: black; }\n  :host > .nav > a.active {\n        border-color: blue; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
        this.title = 'app';
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.userId = this.cookieService.get('userId');
        this.token = this.cookieService.get('token');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.globals.ts":
/*!********************************!*\
  !*** ./src/app/app.globals.ts ***!
  \********************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
        this.token = '';
        this.uerinfo = '';
        this.userId = '';
    }
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _pushNotification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pushNotification.service */ "./src/app/pushNotification.service.ts");
/* harmony import */ var _app_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.globals */ "./src/app/app.globals.ts");
/* harmony import */ var _TokenInterceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TokenInterceptor */ "./src/app/TokenInterceptor.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_organisation_organisation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/organisation/organisation.component */ "./src/app/components/organisation/organisation.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_organisation_organisation_component__WEBPACK_IMPORTED_MODULE_13__["OrganisationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: false }),
            ],
            providers: [_app_globals__WEBPACK_IMPORTED_MODULE_5__["Globals"], _pushNotification_service__WEBPACK_IMPORTED_MODULE_4__["PushNotificationService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_8__["CookieService"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _TokenInterceptor__WEBPACK_IMPORTED_MODULE_6__["TokenInterceptor"],
                    multi: true
                }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    /* Uses http.get() to load data from a single API endpoint */
    AppService.prototype.login = function (data) {
        return this.http.post('https://develop-branch.herokuapp.com/api/token/login', data);
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/browser.app.module.ts":
/*!***************************************!*\
  !*** ./src/app/browser.app.module.ts ***!
  \***************************************/
/*! exports provided: BrowserAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserAppModule", function() { return BrowserAppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BrowserAppModule = /** @class */ (function () {
    function BrowserAppModule() {
    }
    BrowserAppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ssr-example' }),
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], BrowserAppModule);
    return BrowserAppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Virtualgodown!</h1>\n\n<div class=\"nav\">\n  <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n  <a routerLink=\"/organisation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">organisation</a>\n  <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n</div>\n<h2>Welcome to about section</h2>\n\n<ul>\n    <li *ngFor=\"let user of users\">\n        {{ user.name }} ({{ user.email }})\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  text-align: center; }\n  :host > .nav {\n    padding: 15px; }\n  :host > .nav > a {\n      display: inline-block;\n      margin: 0 5px;\n      padding: 5px 10px;\n      text-decoration: none;\n      color: #333;\n      font-weight: 500;\n      border: 2px solid grey; }\n  :host > .nav > a:hover {\n        border-color: black; }\n  :host > .nav > a.active {\n        border-color: blue; }\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutComponent = /** @class */ (function () {
    function AboutComponent(title, meta, http) {
        this.title = title;
        this.meta = meta;
        this.http = http;
        this.users = [];
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.title.setTitle('About / Virtualgodown');
        this.meta.updateTag({
            'description': 'Welcome to about section'
        });
        this.users = [{
                name: 'virtualgodown',
                username: 'virtualgodown',
                email: 'virtualgodown@gmail.com',
            }];
        /*this.http.get('https://jsonplaceholder.typicode.com/users')
        .subscribe((users) => {
            this.users = users;
        }, (err) => {
            console.log(err);
        });*/
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Virtualgodown!</h1>\n\n<div class=\"nav\">\n  <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n  <a routerLink=\"/organisation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">organisation</a>\n  <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n</div>\n<img src=\"../../../assets/vg-logo.png\" alt=\"\">\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  text-align: center; }\n  :host > .nav {\n    padding: 15px; }\n  :host > .nav > a {\n      display: inline-block;\n      margin: 0 5px;\n      padding: 5px 10px;\n      text-decoration: none;\n      color: #333;\n      font-weight: 500;\n      border: 2px solid grey; }\n  :host > .nav > a:hover {\n        border-color: black; }\n  :host > .nav > a.active {\n        border-color: blue; }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(title, meta) {
        this.title = title;
        this.meta = meta;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Home / Virtualgodown');
        this.meta.updateTag({
            'description': 'Welcome to home section'
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/organisation/organisation.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/organisation/organisation.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to Virtualgodown!</h1>\n\n<div class=\"nav\">\n  <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Home</a>\n  <a routerLink=\"/organisation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">organisation</a>\n  <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n</div>\n<p>\n  organisation works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/organisation/organisation.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/organisation/organisation.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  text-align: center; }\n  :host > .nav {\n    padding: 15px; }\n  :host > .nav > a {\n      display: inline-block;\n      margin: 0 5px;\n      padding: 5px 10px;\n      text-decoration: none;\n      color: #333;\n      font-weight: 500;\n      border: 2px solid grey; }\n  :host > .nav > a:hover {\n        border-color: black; }\n  :host > .nav > a.active {\n        border-color: blue; }\n"

/***/ }),

/***/ "./src/app/components/organisation/organisation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/organisation/organisation.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrganisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationComponent", function() { return OrganisationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrganisationComponent = /** @class */ (function () {
    function OrganisationComponent(title, meta) {
        this.title = title;
        this.meta = meta;
    }
    OrganisationComponent.prototype.ngOnInit = function () {
        this.title.setTitle('About / Virtualgodown');
        this.meta.updateTag({
            'description': 'Welcome to about section'
        });
    };
    OrganisationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-organisation',
            template: __webpack_require__(/*! ./organisation.component.html */ "./src/app/components/organisation/organisation.component.html"),
            styles: [__webpack_require__(/*! ./organisation.component.scss */ "./src/app/components/organisation/organisation.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]])
    ], OrganisationComponent);
    return OrganisationComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"header\">\n  <div class=\"headertab ng-scope\" style=\"\n      border-bottom: #eee;\n      background:#3481d8;\n      border-bottom-width: thin;\n      border-bottom-style: inset;\">\n    <div style=\"position: relative;\">\n      <div class=\"loginheaderlogodiv\"><a><img src=\"https://s3-us-west-2.amazonaws.com/virtualgodown/white.png\" class=\"headerlogoimg\"><font class=\"headerlogoimg\" style=\"\n      color: white;\n      padding-left:0px;\n      margin-left:5px;\n      margin-top:5px;\n      \" size=\"5\" >virtualgodown</font></a>\n      <sup><font style=\"\n    font-size: 10px;\n    margin-left: 5px;\n    color:#61f323;\">beta</font></sup>\n      </div>\n</div>\n</div>\n</div>\n\n<div id=\"page_content\">\n  <div id=\"page_content_inner\">\n    <div class=\"container marginTopAlign\">\n      <div style=\"    margin-left: 50px;\n                margin-top: 50px;\n    margin-right: 50px;\" class=\"row\">\n\n        <div style=\"\n        float: left;\n        width: 350px;\n        text-align: center;\n        padding: 20px;\n    \">\n\n          <div>\n            <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1Ljk4NSA0NS45ODUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1Ljk4NSA0NS45ODU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMi45OTMsMEMxMC4zMTUsMCwwLDEwLjMxNCwwLDIyLjk5MUMwLDM1LjY3LDEwLjMxNCw0NS45ODUsMjIuOTkzLDQ1Ljk4NSAgICBjMTIuNjc4LDAsMjIuOTkyLTEwLjMxNSwyMi45OTItMjIuOTk0QzQ1Ljk4NSwxMC4zMTQsMzUuNjcxLDAsMjIuOTkzLDB6IE0zOS44MzMsMzMuNzIzYy0xLjIyMi0wLjU3Ni0zLjM5Ni0xLjI4LTcuMTI4LTEuNzIzICAgIGMxLjE2Ny0yLjYyNSwxLjk4LTUuNTA4LDIuMDYzLTguNTA5aDguMTkxQzQyLjg2NiwyNy4yNTEsNDEuNzM0LDMwLjc1MSwzOS44MzMsMzMuNzIzeiBNMy4wMjYsMjMuNDkxaDguMDk4ICAgIGMwLjA4NCwzLjA2LDAuOTI2LDUuOTk5LDIuMTMsOC42NjVjLTMuNzM5LDAuNDY0LTUuODY5LDEuMTE2LTcuMDU1LDEuNjQzQzQuMjY5LDMwLjgxMiwzLjEyLDI3LjI4MywzLjAyNiwyMy40OTF6IE02LjE0OSwxMi4yNjYgICAgYzEuMTcyLDAuNTI5LDMuMjk4LDEuMTg5LDcuMDYzLDEuNjZjLTEuMTgsMi42NC0yLjAwNCw1LjU0My0yLjA4Nyw4LjU2NUgzLjAyN0MzLjExOSwxOC43MzUsNC4yNSwxNS4yMzcsNi4xNDksMTIuMjY2eiAgICAgTTIzLjQ5MywxNC41MTZjMC4yNzEsMC4wMDIsMC41NDQsMC4wMDUsMC44MDcsMC4wMDVjMi45MjYsMCw1LjM1NC0wLjEyNiw3LjM3Ny0wLjMyNWMxLjE3NiwyLjU3MiwyLjAwMyw1LjM5LDIuMDksOC4yOTVIMjMuNDkzICAgIFYxNC41MTZ6IE0yMy40OTMsMTMuNTE2VjMuMDI1YzAuMDkzLDAuMDAyLDAuMTg0LDAuMDEsMC4yNzYsMC4wMTRjMS43NjksMS43OTgsNS4xMTQsNS41MzYsNy40NTEsMTAuMjAxICAgIEMyOS4xMjgsMTMuNDMxLDI2LjU3OSwxMy41NDEsMjMuNDkzLDEzLjUxNnogTTIyLjQ5MywzLjAyNXYxMC40NzljLTMuMDk4LTAuMDUtNS42NDktMC4yMDUtNy43NDItMC40MTkgICAgYzIuMzM1LTQuNTk2LDUuNjItOC4yNjUsNy4zNjctMTAuMDQxQzIyLjI0NCwzLjAzOCwyMi4zNjcsMy4wMjgsMjIuNDkzLDMuMDI1eiBNMjIuNDkzLDE0LjUwNHY3Ljk4N0gxMi4xMzQgICAgYzAuMDg5LTIuOTYyLDAuOTQ1LTUuODI5LDIuMTU4LTguNDQxQzE2LjQ5MiwxNC4yODMsMTkuMTksMTQuNDUxLDIyLjQ5MywxNC41MDR6IE0xMi4xMzQsMjMuNDkxaDEwLjM1OXY4LjA5MiAgICBjLTMuMjgsMC4wNTItNS45NjMsMC4yMTgtOC4xNTQsMC40NDlDMTMuMTAyLDI5LjM5NCwxMi4yMjUsMjYuNDkxLDEyLjEzNCwyMy40OTF6IE0yMi40OTMsMzIuNTg0VjQyLjk2ICAgIGMtMC4xMjYtMC4wMDMtMC4yNS0wLjAxMy0wLjM3NS0wLjAxOWMtMS43MzUtMS43NjMtNC45ODItNS4zOTQtNy4zMTQtOS45NDNDMTYuODg3LDMyLjc4NiwxOS40MjIsMzIuNjMzLDIyLjQ5MywzMi41ODR6ICAgICBNMjMuNDkzLDQyLjk2VjMyLjU3MmMzLjA2LTAuMDIyLDUuNTkxLDAuMDg3LDcuNjc0LDAuMjc1Yy0yLjMzNCw0LjYxNy01LjY0Myw4LjMxNC03LjM5OCwxMC4wOTkgICAgQzIzLjY3Nyw0Mi45NDksMjMuNTg2LDQyLjk1NywyMy40OTMsNDIuOTZ6IE0yMy40OTMsMzEuNTcydi04LjA4MWgxMC4yNzVjLTAuMDg4LDIuOTQyLTAuOTM0LDUuNzk1LTIuMTMzLDguMzkzICAgIEMyOS40MzgsMzEuNjcsMjYuNzU2LDMxLjU0NiwyMy40OTMsMzEuNTcyeiBNMzQuNzY4LDIyLjQ5MWMtMC4wODItMi45NjQtMC44NzctNS44MTItMi4wMjEtOC40MTEgICAgYzMuNzYtMC40NSw1LjkyNy0xLjE2Myw3LjEzNC0xLjc0YzEuODcsMi45NTUsMi45ODUsNi40MjUsMy4wNzgsMTAuMTUxSDM0Ljc2OHogTTM5LjMyNywxMS41MDIgICAgYy0xLjEzMywwLjUyMi0zLjI1MSwxLjIwNS03LjAxOCwxLjYyOGMtMi4wOTctNC4zNDMtNS4wNjYtNy45MDItNy4wMzUtOS45OUMzMS4wNzQsMy44MDIsMzYuMTE5LDYuOTU2LDM5LjMyNywxMS41MDJ6ICAgICBNMjAuNjAyLDMuMTU2Yy0xLjk0NCwyLjA2NC00Ljg1NCw1LjU1LTYuOTQsOS44MDdjLTMuNzIzLTAuNDUtNS44MTQtMS4wODItNi45MzQtMS41NTRDOS45MTgsNi45NDMsMTQuODg4LDMuODQyLDIwLjYwMiwzLjE1NnogICAgIE02Ljc4NywzNC42NTRjMS4xMzgtMC40NzIsMy4yMzQtMS4wOTMsNi45MjItMS41MzZjMi4wODMsNC4yMTQsNC45NjMsNy42NjIsNi44OTMsOS43MUMxNC45MjMsNDIuMTQ3LDkuOTgsMzkuMDc3LDYuNzg3LDM0LjY1NHogICAgIE0yNS4yNzQsNDIuODQ1YzEuOTU0LTIuMDcyLDQuODkzLTUuNTksNi45ODYtOS44ODdjMy43MzQsMC40MTcsNS44NTYsMS4wODUsNy4wMDgsMS42MDQgICAgQzM2LjA1NywzOS4wNjUsMzEuMDM5LDQyLjE4NiwyNS4yNzQsNDIuODQ1eiIgZmlsbD0iIzgwODA4MCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\">\n          </div>\n          <div style=\"\n        padding-top: 30px;\n    \">\n\n            Virtualgodown connects source and destination to form a business network . It maps warehouses, factories, mines, retail stores across the globe thereby optimizing the distribution of resources.\n          </div><input  type=\"submit\" value=\"Create an account\" style=\"\n        background-color: #3481d8;\n        color: white;\n        border: 1px;\n        height: 35px;\n        width: 100%;\n        font-weight: 500 !important;\n        margin-top:30px\n    \">\n\n\n        </div>\n\n        <div style=\"    float: right;\n    width: 390px;\n    padding: 40px;\n    background-color: #f9f9f9;\">\n          <form role=\"form\" name=\"myForm\" class=\"ng-pristine ng-invalid ng-invalid-required ng-valid-angular-validator\" novalidate=\"\" angular-validator=\"\">\n            <!--form-horizontal-->\n            <div class=\"form-group\" style=\"color: #000000;margin-bottom: 5px;font-weight: 400;\">Email</div>\n            <div class=\"form-group\">\n              <input [(ngModel)]=\"username\" name=\"username\" #username1=\"ngModel\" style=\"border: 1px solid #ccc !important; height:40px; border-radius: 0px;\n    -webkit-box-shadow: 0 0 0 1000px white inset !important;\" type=\"text\"  validate-on=\"dirty\" class=\"form-control input-sm loginInput inputMaxWidth ng-pristine ng-invalid ng-invalid-required ng-touched\" required-message=\"'Email address cannot be blank'\"\n                placeholder=\"Email\" required=\"\">\n            </div>\n            <div class=\"form-group\" style=\"color: grey;height: 10px;\"> <span style=\"float:left;font-weight: 400;color:black;\">Password</span>\n              <a style=\"\n    float: right;\n    cursor:pointer;\n    font-weight: 400 !important;\n    text-decoration: none;\n\">Forget Password?</a>\n            </div>\n            <div class=\"form-group\">\n              <input [(ngModel)]=\"password\" name=\"password\" #password1=\"ngModel\" style=\"border: 1px solid #ccc !important; height:40px;border-radius: 0px;\n    -webkit-box-shadow: 0 0 0 1000px white inset !important;\" type=\"password\" id=\"password\" autocomplete=\"new-password\" validate-on=\"dirty\" class=\"form-control input-sm loginInput inputMaxWidth ng-pristine ng-untouched ng-invalid ng-invalid-required\" required-message=\"'Password cannot be blank.'\"\n                placeholder=\"Password\" required=\"\">\n            </div>\n            <input class=\"loginButton\" (click)=\"fnAuthenticateUser()\" style=\"\n    font-weight: 400 !important;\n\" type=\"button\"  value=\"Login\" class=\"btn btn-block singinButton inputMaxWidth\">\n\n            <div class=\"form-group\" style=\"margin-top: 10px;font-weight: 500 !important;color: grey;\">New to Virtualgodown? <a style=\"text-decoration:none;cursor: pointer;\" ng-click=\"signup()\"> Create a new account</a></div>\n          </form>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div>\n\n\n    <div class=\"\" style=\"\n      padding: 30px;\n      text-align: center;\n      background-color: #3481d8;\n      margin-top: 100px;\n      padding-bottom: 70px;\n  \">\n      <div>\n        <div style=\"\n      margin: 30px;\n      font-size: 26px;\n      color: white;\n  \"> Create unique stockarea</div>\n        <div>\n          <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1OS40MTkgNDU5LjQxOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU5LjQxOSA0NTkuNDE5OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4Ij4KPGc+Cgk8Zz4KCQk8cG9seWdvbiBwb2ludHM9IjgzLjExNSwxNzIuOTExIDM3Ni4zMDQsMTcyLjkxMSAzNzYuMzA0LDQ1OS40MTkgNDU4Ljc3Nyw0NTkuNDE5IDQ1OC43NzcsMTA2Ljk1NiAgICAgMjIzLjE3OCwwIDAuNjQyLDEwNi45NTYgMC42NDIsNDU5LjQxOSA4My4xMTUsNDU5LjQxOSAgICIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxyZWN0IHg9IjE3MS4xNTUiIHk9IjQwMy41NDMiIHdpZHRoPSI1Mi4wMjMiIGhlaWdodD0iNDQuODc4IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHJlY3QgeD0iMjM1LjAwNSIgeT0iNDAzLjU0MyIgd2lkdGg9IjUyLjAyMyIgaGVpZ2h0PSI0NC44NzgiIGZpbGw9IiNGRkZGRkYiLz4KCQk8cmVjdCB4PSIxMDcuMzEzIiB5PSI0MDMuNTQzIiB3aWR0aD0iNTIuMDIzIiBoZWlnaHQ9IjQ0Ljg3OCIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxyZWN0IHg9IjE3MS4xNTUiIHk9IjM0MS45ODUiIHdpZHRoPSI1Mi4wMjMiIGhlaWdodD0iNDQuODc4IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHJlY3QgeD0iMTA3LjMxMyIgeT0iMzQxLjk4NSIgd2lkdGg9IjUyLjAyMyIgaGVpZ2h0PSI0NC44NzgiIGZpbGw9IiNGRkZGRkYiLz4KCQk8cmVjdCB4PSIyMzUuMDA1IiB5PSIzNDEuOTg1IiB3aWR0aD0iNTIuMDIzIiBoZWlnaHQ9IjQ0Ljg3OCIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxyZWN0IHg9IjE3MS4xNTUiIHk9IjI4MC40MzYiIHdpZHRoPSI1Mi4wMjMiIGhlaWdodD0iNDQuODc4IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHJlY3QgeD0iMTA3LjMxMyIgeT0iMjgwLjQzNiIgd2lkdGg9IjUyLjAyMyIgaGVpZ2h0PSI0NC44NzgiIGZpbGw9IiNGRkZGRkYiLz4KCQk8cmVjdCB4PSIyOTguODQ3IiB5PSI0MDMuNTQzIiB3aWR0aD0iNTIuMDIzIiBoZWlnaHQ9IjQ0Ljg3OCIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\">\n        </div>\n        <div style=\"\n      padding: 30px;\n      padding-left: 200px;\n      color: white;\n      padding-right: 200px;\n  \">\n\n          Stockarea can be your physical inventory location or delivery address or trade connection location from where you will be able to sell or buy the product.&nbsp;Stockareas will be connected to form a trade nervous system\n\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"\" style=\"\n    padding: 30px;\n    text-align: center;\n    /* background-color: #87D37C; */\n\">\n\n      <div style=\"\n    margin: 30px;\n    font-size: 26px;\n    color: grey;\n\">Build your network by connecting other stockarea</div>\n      <div>\n        <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ4OC45IDQ4OC45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODguOSA0ODguOTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIxMjhweCIgaGVpZ2h0PSIxMjhweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI3NS42LDIyMy44NWM1LjctMjcuMS03LjMtMjgtNy4zLTI4cy0xLjktMy43LTcuMS02LjZjLTMuNC0yLTguMi0zLjYtMTQuNS0zLjFjLTIsMC4xLTQsMC41LTUuOCwxLjFsMCwwICAgIGMtMi4zLDAuOC00LjQsMS45LTYuNCwzLjNjLTIuNCwxLjUtNC42LDMuMy02LjYsNS40Yy0zLjEsMy4yLTUuOSw3LjMtNy4xLDEyLjRjLTEuMSw0LjQtMS4xLDkuMSwwLjYsMTMuOSAgICBjLTIuMy0wLjItNS4xLDEuMS0yLjUsMTAuMmMxLjksNi43LDMuNiw4LjUsNSw4LjZjMS41LDkuNiw2LjcsMjIsMjMuNCwyMy4zYzE2LjQtMC42LDIxLjQtMTIuOCwyMy4xLTIyLjIgICAgYzEuNCwwLjksMy42LDAuNCw2LjEtOC4zQzI3OC42LDIyNi43NSwyNzcuMywyMjQuNDUsMjc1LjYsMjIzLjg1eiIgZmlsbD0iIzgwODA4MCIvPgoJCTxwYXRoIGQ9Ik00NDQuNCwyMTcuNjVjLTE5LjcsMC0zNi41LDEyLjktNDIuMywzMC43bC02Mi43LTYuMmMtMC4yLTI5LjktMTQuNi01Ni40LTM2LjktNzMuMWw0My40LTczYzQuNCwxLjUsOS4xLDIuMywxNCwyLjMgICAgYzI0LjUsMCw0NC40LTE5LjksNDQuNC00NC40cy0xOS45LTQ0LjUtNDQuNC00NC41cy00NC40LDE5LjktNDQuNCw0NC40YzAsMTIuOCw1LjQsMjQuMywxNC4xLDMyLjRsLTQzLjQsNzMgICAgYy0xMS43LTUuNC0yNC43LTguNC0zOC40LTguNGMtMjIuOCwwLTQzLjcsOC40LTU5LjcsMjIuMmwtMzUuMi0zMy4zYzQtNi43LDYuMy0xNC41LDYuMy0yMi45YzAtMjQuNS0xOS45LTQ0LjQtNDQuNC00NC40ICAgIHMtNDQuNCwxOS45LTQ0LjQsNDQuNHMxOS45LDQ0LjQsNDQuNCw0NC40YzkuMywwLDE3LjktMi44LDI1LTcuN2wzNS4yLDMzLjNjLTExLjgsMTUuNC0xOC45LDM0LjctMTguOSw1NS43ICAgIGMwLDYuOCwwLjgsMTMuNSwyLjIsMTkuOWwtNzUuOCwyNS4zYy03LjgtMTMtMjEuOS0yMS42LTM4LjEtMjEuNmMtMjQuNSwwLTQ0LjQsMTkuOS00NC40LDQ0LjRzMTkuOSw0NC40LDQ0LjQsNDQuNCAgICBzNDQuNC0xOS45LDQ0LjQtNDQuNGMwLTEuNi0wLjEtMy4yLTAuMy00LjdsNzUuOC0yNS4zYzE0LjQsMzEuNyw0Ni40LDUzLjgsODMuNSw1My44YzMuOCwwLDcuNS0wLjMsMTEuMS0wLjdsMTQsNjEuMiAgICBjLTE1LDcuMS0yNS40LDIyLjQtMjUuNCw0MC4yYzAsMjQuNSwxOS45LDQ0LjQsNDQuNCw0NC40czQ0LjQtMTkuOSw0NC40LTQ0LjRzLTE5LjktNDQuNC00NC40LTQ0LjRjLTAuMSwwLTAuMywwLTAuNCwwbC0xNC02MS4yICAgIGMzMC40LTEwLjQsNTMuNy0zNi4zLDYwLjItNjguM2w2Mi43LDYuMmMyLjYsMjIuMSwyMS4zLDM5LjIsNDQuMSwzOS4yYzI0LjUsMCw0NC40LTE5LjksNDQuNC00NC40UzQ2OSwyMTcuNjUsNDQ0LjQsMjE3LjY1eiAgICAgTTMwNS44LDI4OS4wNWMtMC43LTYtMy4yLTEyLjctMTAuOC0xNC42Yy0xNC41LTMuNy0yNi4zLTEyLTI2LjMtMTJsLTkuMiwyOS4xbC0xLjcsNS41di0wLjFsLTEuNSw0LjZsLTQuOS0xMy44ICAgIGMxMi4zLTE3LjEtMy4zLTE2LjUtMy4zLTE2LjVzLTE1LjUtMC43LTMuMywxNi41bC00LjksMTMuOWwtMS41LTQuN2wtMTAuOS0zNC42YzAsMC0xMS44LDguMy0yNi4zLDEyICAgIGMtNy42LDEuOS0xMC4xLDguNy0xMC44LDE0LjZjLTEwLjItMTIuNy0xNi40LTI4LjgtMTYuNC00Ni40YzAtNDAuOSwzMy4yLTc0LDc0LTc0YzQwLjksMCw3NCwzMy4yLDc0LDc0ICAgIEMzMjIuMSwyNjAuMTUsMzE2LDI3Ni4zNSwzMDUuOCwyODkuMDV6IiBmaWxsPSIjODA4MDgwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==\">\n\n      </div>\n\n\n      <div style=\"\n    padding: 30px;\n    padding-left: 200px;\n    color: grey;\n    padding-right: 200px;\n\">If you are a buyer or seller, manage your inventory capacity for every product in the stock area. You will be able to explore other stock areas for the products you are interested in.\n      </div>\n\n    </div>\n\n\n\n\n    <div class=\"\" style=\"\n    padding: 30px;\n    text-align: center;\n    background-color: #3481d8;\n    /* margin-top: 100px; */\n    padding-bottom: 70px;\n\">\n\n      <div style=\"\n    margin: 30px;\n    font-size: 26px;\n    color: white;\n\">Connect to other possible trade</div>\n      <div>\n        <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjEyOHB4IiBoZWlnaHQ9IjEyOHB4IiB2aWV3Qm94PSIwIDAgNDUuMjIgNDUuMjIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjIyIDQ1LjIyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPGNpcmNsZSBjeD0iMjIuNjExIiBjeT0iNS4wMjQiIHI9IjMuNTUyIiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTI2LjQzNiwxMi42NzVjLTAuMzk5LTItMi4yODktMy4zNzMtNC4zMzktMy4wOTljLTEuNjk2LDAuMjI1LTIuOTksMS41MS0zLjMwOSwzLjA5OWMxLjA3LTAuNzkyLDIuMzk0LTEuMjYyLDMuODI0LTEuMjYyICAgIFMyNS4zNjQsMTEuODg0LDI2LjQzNiwxMi42NzV6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTM1LjI5MSwyOS40MDFjLTAuODE0LTAuNzE3LTIuMDU3LTAuNjM3LTIuNzcyLDAuMTc4bC0yLjgsMy4xOGMtMC43MTcsMC44MTQtMC42MzcsMi4wNTcsMC4xNzgsMi43NzMgICAgYzAuMzczLDAuMzI4LDAuODM2LDAuNDksMS4yOTcsMC40OWMwLjU0NSwwLDEuMDg3LTAuMjI3LDEuNDc2LTAuNjY4bDIuNzk4LTMuMTgxQzM2LjE4NiwzMS4zNiwzNi4xMDYsMzAuMTE4LDM1LjI5MSwyOS40MDF6IiBmaWxsPSIjRkZGRkZGIi8+CgkJPHBhdGggZD0iTTMyLjY2OSwxMC45MTFjLTAuNzE4LTAuODE0LTEuOTU5LTAuODk0LTIuNzcyLTAuMTc3Yy0wLjgxNCwwLjcxNy0wLjg5NSwxLjk1OS0wLjE3OCwyLjc3M2wyLjgsMy4xODEgICAgYzAuMzg5LDAuNDQxLDAuOTMxLDAuNjY3LDEuNDc3LDAuNjY3YzAuNDYxLDAsMC45MjMtMC4xNjEsMS4yOTctMC40ODljMC44MTQtMC43MTcsMC44OTUtMS45NTksMC4xNzctMi43NzNMMzIuNjY5LDEwLjkxMXoiIGZpbGw9IiNGRkZGRkYiLz4KCQk8Zz4KCQkJPHBhdGggZD0iTTIyLjYyOSwyMy41MTdjLTAuMDA2LDAtMC4wMzEsMC0wLjAzNywwYy0xLjI1MSwwLTIuNDQ0LDAuNTY3LTMuMjc4LDEuNTAyYy0wLjgzNCwwLjkzNC0xLjIzMSwyLjE5NC0xLjA5LDMuNDM4ICAgICBsMi4wMTksMTMuMDQ4YzAuMTM4LDEuMjI5LDEuMTQ0LDIuMjQ0LDIuMzY4LDIuMjQ0YzEuMjI2LDAsMi4yMjktMS4wMDcsMi4zNy0yLjIzOGwyLjAxNy0xMy4wNTYgICAgIGMwLjE0Mi0xLjI0My0wLjI1Ni0yLjUwNC0xLjA5LTMuNDM4QzI1LjA3MiwyNC4wODUsMjMuODgxLDIzLjUxNywyMi42MjksMjMuNTE3eiIgZmlsbD0iI0ZGRkZGRiIvPgoJCQk8Y2lyY2xlIGN4PSIyMi42MSIgY3k9IjE4LjA3OCIgcj0iNC4zMyIgZmlsbD0iI0ZGRkZGRiIvPgoJCTwvZz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQxLjIxOSwxNy41MDljLTAuMDA1LDAtMC4wMjcsMC0wLjAzMywwYy0xLjE0LDAtMi4yMjYsMC41MTctMi45ODQsMS4zNjdjLTAuNzYsMC44NS0xLjEyMSwxLjk5OC0wLjk5MywzLjEzMSAgICAgbDEuODM3LDExLjg3OGMwLjEyNiwxLjEyLDEuMDQyLDIuMDQzLDIuMTU2LDIuMDQzYzEuMTE1LDAsMi4wMy0wLjkxNywyLjE1Ny0yLjAzNmwxLjgzNi0xMS44ODcgICAgIGMwLjEyOC0xLjEzMi0wLjIzMy0yLjI3OS0wLjk5Mi0zLjEyOVM0Mi4zNTgsMTcuNTA5LDQxLjIxOSwxNy41MDl6IiBmaWxsPSIjRkZGRkZGIi8+CgkJCTxjaXJjbGUgY3g9IjQxLjIwMiIgY3k9IjEyLjU1NyIgcj0iMy45NDIiIGZpbGw9IiNGRkZGRkYiLz4KCQk8L2c+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBkPSJNOS45MywyOS40MDFjMC44MTUtMC43MTcsMi4wNTctMC42MzcsMi43NzMsMC4xNzhsMi43OTksMy4xOGMwLjcxNywwLjgxNCwwLjYzNywyLjA1Ny0wLjE3NywyLjc3MyAgICBjLTAuMzczLDAuMzI4LTAuODM2LDAuNDktMS4yOTcsMC40OWMtMC41NDUsMC0xLjA4Ny0wLjIyNy0xLjQ3Ni0wLjY2OGwtMi43OTgtMy4xODFDOS4wMzYsMzEuMzYsOS4xMTQsMzAuMTE4LDkuOTMsMjkuNDAxeiIgZmlsbD0iI0ZGRkZGRiIvPgoJCTxwYXRoIGQ9Ik0xMi41NSwxMC45MTFjMC43MTgtMC44MTQsMS45NTktMC44OTQsMi43NzMtMC4xNzdjMC44MTQsMC43MTcsMC44OTQsMS45NTksMC4xNzcsMi43NzNsLTIuNzk5LDMuMTgxICAgIGMtMC4zODksMC40NDEtMC45MzEsMC42NjctMS40NzcsMC42NjdjLTAuNDYxLDAtMC45MjMtMC4xNjEtMS4yOTctMC40ODljLTAuODE0LTAuNzE3LTAuODk0LTEuOTU5LTAuMTc3LTIuNzczTDEyLjU1LDEwLjkxMXoiIGZpbGw9IiNGRkZGRkYiLz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQuMDAxLDE3LjUwOWMwLjAwNSwwLDAuMDI4LDAsMC4wMzQsMGMxLjEzOSwwLDIuMjI1LDAuNTE3LDIuOTg0LDEuMzY3YzAuNzYsMC44NSwxLjEyMSwxLjk5OCwwLjk5MywzLjEzMUw2LjE3NCwzMy44ODUgICAgIGMtMC4xMjYsMS4xMi0xLjA0MiwyLjA0My0yLjE1NiwyLjA0M2MtMS4xMTUsMC0yLjAzLTAuOTE3LTIuMTU3LTIuMDM2TDAuMDI1LDIyLjAwNWMtMC4xMjgtMS4xMzIsMC4yMzMtMi4yNzksMC45OTItMy4xMjkgICAgIEMxLjc3NiwxOC4wMjYsMi44NjEsMTcuNTA5LDQuMDAxLDE3LjUwOXoiIGZpbGw9IiNGRkZGRkYiLz4KCQkJPGNpcmNsZSBjeD0iNC4wMTkiIGN5PSIxMi41NTciIHI9IjMuOTQyIiBmaWxsPSIjRkZGRkZGIi8+CgkJPC9nPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=\">\n\n      </div>\n\n      <div style=\"\n    padding: 30px;\n    padding-left: 200px;\n    color: white;\n    padding-right: 200px;\n\">Trade possibilities exists between any possible space-time (location at specific time) based on various factors such as Bilateral Trade Policies, Trade Route, Cascading effect on other supply chain, Logistics planning, Market sentiments Virtualgodown\n        tries to find the possible trade opportunity between any space time.</div>\n\n    </div>\n    <div class=\"\" style=\"\n    padding: 30px;\n    text-align: center;\n    background-color: #ffffff;\n    /* margin-top: 100px; */\n\">\n\n      Virtualgodown © 2018\n\n\n    </div>\n\n\n\n\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _app_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.globals */ "./src/app/app.globals.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, globals, appService, cookieService) {
        this.router = router;
        this.globals = globals;
        this.appService = appService;
        this.cookieService = cookieService;
        this.fnAuthenticateUser = function () {
            var _this = this;
            try {
                this.appService.login({ username: this.username, password: this.password, "client_id": "$vgodown1", "client_secret": "grnklnio576543hyjvbk", "grant_type": "password" })
                    .subscribe(function (resp) {
                    console.log(resp);
                    _this.userId = resp.userId;
                    _this.token = resp.token;
                    _this.globals.userId = _this.userId;
                    _this.globals.token = _this.token;
                    _this.cookieService.set('userId', _this.userId);
                    _this.cookieService.set('token', _this.token);
                    _this.username = '';
                    _this.password = '';
                    _this.router.navigateByUrl('');
                }, function (error) {
                    alert(error);
                    console.log(error, "error");
                });
            }
            catch (e) {
                console.log(e);
            }
        };
        console.log(globals);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss"), __webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pushNotification.service.ts":
/*!*********************************************!*\
  !*** ./src/app/pushNotification.service.ts ***!
  \*********************************************/
/*! exports provided: PushNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationService", function() { return PushNotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SERVER_URL = 'http://localhost/subscription';
var PushNotificationService = /** @class */ (function () {
    function PushNotificationService(http) {
        this.http = http;
        this.sendSubscriptionToTheServer = function (subscription) {
            return this.http.post(SERVER_URL, subscription);
        };
    }
    PushNotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PushNotificationService);
    return PushNotificationService;
}());



/***/ }),

/***/ "./src/browser.main.ts":
/*!*****************************!*\
  !*** ./src/browser.main.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_browser_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/browser.app.module */ "./src/app/browser.app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_browser_app_module__WEBPACK_IMPORTED_MODULE_3__["BrowserAppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./src/browser.main.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\Downloads\node-ng-ssr-example-master\src\browser.main.ts */"./src/browser.main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map