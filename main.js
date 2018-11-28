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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"outer-container\">\r\n  <div class=\"loader-container\">\r\n    <mat-spinner></mat-spinner>\r\n  </div>\r\n  \r\n  <!-- Main Header -->\r\n  <app-header *ngIf=\"checkHomeLocation()\"></app-header>\r\n  \r\n  <!-- Main Content -->\r\n  <main class=\"main-container\" [ngClass]=\"{'home-container':checkHomeLocation()}\">\r\n    <mat-sidenav-container>\r\n      <mat-sidenav mode=\"side\" [opened]=\"true\" *ngIf=\"checkNoMenuLocations()\">\r\n        <app-sidenav-menu></app-sidenav-menu>\r\n      </mat-sidenav>\r\n  \r\n      <mat-sidenav-content>\r\n        <router-outlet></router-outlet>\r\n      </mat-sidenav-content>\r\n    </mat-sidenav-container>\r\n  </main>\r\n  \r\n  <!-- Main Footer -->\r\n  <app-footer *ngIf=\"checkHomeLocation()\"></app-footer>\r\n</div>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.checkHomeLocation = function () {
        return this.router.url === '/';
    };
    AppComponent.prototype.checkNoMenuLocations = function () {
        return !(this.router.url === '/' || this.router.url === '/login' || this.router.url === '/signup');
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_util_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./base/util/auth.service */ "./src/app/base/util/auth.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _base_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./base/header/header.component */ "./src/app/base/header/header.component.ts");
/* harmony import */ var _base_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./base/footer/footer.component */ "./src/app/base/footer/footer.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _base_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./base/sidenav-menu/sidenav-menu.component */ "./src/app/base/sidenav-menu/sidenav-menu.component.ts");
/* harmony import */ var _components_eventos_eventos_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/eventos/eventos.component */ "./src/app/components/eventos/eventos.component.ts");
/* harmony import */ var _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/perfil/perfil.component */ "./src/app/components/perfil/perfil.component.ts");
/* harmony import */ var _components_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/noticias/noticias.component */ "./src/app/components/noticias/noticias.component.ts");
/* harmony import */ var _components_perfil_perfil_dialog_perfil_dialog_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/perfil/perfil-dialog/perfil-dialog.component */ "./src/app/components/perfil/perfil-dialog/perfil-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_noticias_admin_noticias_admin_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/noticias-admin/noticias-admin.component */ "./src/app/components/noticias-admin/noticias-admin.component.ts");
/* harmony import */ var _components_noticias_admin_noticias_admin_dialog_noticias_admin_dialog_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component */ "./src/app/components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component.ts");
/* harmony import */ var _components_noticias_admin_noticias_admin_remover_dialog_noticias_admin_remover_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component */ "./src/app/components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component.ts");
/* harmony import */ var _components_noticias_noticias_detalhe_dialog_noticias_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component */ "./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.ts");
/* harmony import */ var _components_eventos_eventos_novo_dialog_eventos_novo_dialog_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/eventos/eventos-novo-dialog/eventos-novo-dialog.component */ "./src/app/components/eventos/eventos-novo-dialog/eventos-novo-dialog.component.ts");
/* harmony import */ var _components_meus_eventos_meus_eventos_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/meus-eventos/meus-eventos.component */ "./src/app/components/meus-eventos/meus-eventos.component.ts");
/* harmony import */ var _components_eventos_eventos_detalhe_dialog_eventos_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component */ "./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.ts");
/* harmony import */ var _components_meus_eventos_meus_eventos_dialog_meus_eventos_dialog_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component */ "./src/app/components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component.ts");
/* harmony import */ var _components_meus_eventos_meus_eventos_remover_dialog_meus_eventos_remover_dialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component */ "./src/app/components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component.ts");
/* harmony import */ var _components_eventos_eventos_participar_dialog_eventos_participar_dialog_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/eventos/eventos-participar-dialog/eventos-participar-dialog.component */ "./src/app/components/eventos/eventos-participar-dialog/eventos-participar-dialog.component.ts");
/* harmony import */ var _components_eventos_eventos_sair_dialog_eventos_sair_dialog_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/eventos/eventos-sair-dialog/eventos-sair-dialog.component */ "./src/app/components/eventos/eventos-sair-dialog/eventos-sair-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var appRoutes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"]
    },
    {
        path: 'signup',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_24__["SignupComponent"]
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
        canActivate: [_base_util_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    },
    {
        path: 'eventos',
        component: _components_eventos_eventos_component__WEBPACK_IMPORTED_MODULE_27__["EventosComponent"],
        canActivate: [_base_util_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    },
    {
        path: 'meus-eventos',
        component: _components_meus_eventos_meus_eventos_component__WEBPACK_IMPORTED_MODULE_37__["MeusEventosComponent"],
        canActivate: [_base_util_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    },
    {
        path: 'noticias',
        component: _components_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_29__["NoticiasComponent"],
        canActivate: [_base_util_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    },
    {
        path: 'noticiasadmin',
        component: _components_noticias_admin_noticias_admin_component__WEBPACK_IMPORTED_MODULE_32__["NoticiasAdminComponent"],
        canActivate: [_base_util_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    },
    {
        path: 'perfil',
        component: _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_28__["PerfilComponent"],
        canActivate: [_base_util_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]]
    },
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"],
                _base_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
                _base_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_24__["SignupComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                _base_sidenav_menu_sidenav_menu_component__WEBPACK_IMPORTED_MODULE_26__["SidenavMenuComponent"],
                _components_eventos_eventos_component__WEBPACK_IMPORTED_MODULE_27__["EventosComponent"],
                _components_perfil_perfil_component__WEBPACK_IMPORTED_MODULE_28__["PerfilComponent"],
                _components_perfil_perfil_dialog_perfil_dialog_component__WEBPACK_IMPORTED_MODULE_30__["PerfilDialogComponent"],
                _components_noticias_noticias_component__WEBPACK_IMPORTED_MODULE_29__["NoticiasComponent"],
                _components_noticias_admin_noticias_admin_component__WEBPACK_IMPORTED_MODULE_32__["NoticiasAdminComponent"],
                _components_noticias_admin_noticias_admin_dialog_noticias_admin_dialog_component__WEBPACK_IMPORTED_MODULE_33__["NoticiasAdminDialogComponent"],
                _components_noticias_admin_noticias_admin_remover_dialog_noticias_admin_remover_dialog_component__WEBPACK_IMPORTED_MODULE_34__["NoticiasAdminRemoverDialogComponent"],
                _components_noticias_noticias_detalhe_dialog_noticias_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_35__["NoticiasDetalheDialogComponent"],
                _components_eventos_eventos_novo_dialog_eventos_novo_dialog_component__WEBPACK_IMPORTED_MODULE_36__["EventosNovoDialogComponent"],
                _components_meus_eventos_meus_eventos_component__WEBPACK_IMPORTED_MODULE_37__["MeusEventosComponent"],
                _components_eventos_eventos_detalhe_dialog_eventos_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_38__["EventosDetalheDialogComponent"],
                _components_meus_eventos_meus_eventos_dialog_meus_eventos_dialog_component__WEBPACK_IMPORTED_MODULE_39__["MeusEventosDialogComponent"],
                _components_meus_eventos_meus_eventos_remover_dialog_meus_eventos_remover_dialog_component__WEBPACK_IMPORTED_MODULE_40__["MeusEventosRemoverDialogComponent"],
                _components_eventos_eventos_participar_dialog_eventos_participar_dialog_component__WEBPACK_IMPORTED_MODULE_41__["EventosParticiparDialogComponent"],
                _components_eventos_eventos_sair_dialog_eventos_sair_dialog_component__WEBPACK_IMPORTED_MODULE_42__["EventosSairDialogComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_31__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"]
            ],
            providers: [
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _base_util_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]],
            entryComponents: [
                _components_perfil_perfil_dialog_perfil_dialog_component__WEBPACK_IMPORTED_MODULE_30__["PerfilDialogComponent"],
                _components_noticias_noticias_detalhe_dialog_noticias_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_35__["NoticiasDetalheDialogComponent"],
                _components_noticias_admin_noticias_admin_dialog_noticias_admin_dialog_component__WEBPACK_IMPORTED_MODULE_33__["NoticiasAdminDialogComponent"],
                _components_noticias_admin_noticias_admin_remover_dialog_noticias_admin_remover_dialog_component__WEBPACK_IMPORTED_MODULE_34__["NoticiasAdminRemoverDialogComponent"],
                _components_eventos_eventos_novo_dialog_eventos_novo_dialog_component__WEBPACK_IMPORTED_MODULE_36__["EventosNovoDialogComponent"],
                _components_eventos_eventos_detalhe_dialog_eventos_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_38__["EventosDetalheDialogComponent"],
                _components_eventos_eventos_participar_dialog_eventos_participar_dialog_component__WEBPACK_IMPORTED_MODULE_41__["EventosParticiparDialogComponent"],
                _components_eventos_eventos_sair_dialog_eventos_sair_dialog_component__WEBPACK_IMPORTED_MODULE_42__["EventosSairDialogComponent"],
                _components_meus_eventos_meus_eventos_dialog_meus_eventos_dialog_component__WEBPACK_IMPORTED_MODULE_39__["MeusEventosDialogComponent"],
                _components_meus_eventos_meus_eventos_remover_dialog_meus_eventos_remover_dialog_component__WEBPACK_IMPORTED_MODULE_40__["MeusEventosRemoverDialogComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/base/footer/footer.component.css":
/*!**************************************************!*\
  !*** ./src/app/base/footer/footer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/base/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/base/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"main-footer\">\n  <p>@FollowUs 2018 - Todos os direitos reservados</p>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/base/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/base/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/base/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/base/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/base/header/header.component.css":
/*!**************************************************!*\
  !*** ./src/app/base/header/header.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/base/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/base/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"main-header\" id=\"main-header\">\n  <h1 class=\"header-logo\">\n    <a routerLink=\"/\">\n      FollowUs <img src=\"/assets/images/logo.png\" alt=\"FollowUs\" />\n    </a>\n  </h1>\n\n  <ul class=\"header-links\">\n    <li>\n      <a routerLink=\"/login\">\n        <i class=\"material-icons\">face</i> Entrar\n      </a>\n    </li>\n  </ul>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/base/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/base/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/base/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/base/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/base/sidenav-menu/sidenav-menu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/base/sidenav-menu/sidenav-menu.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/base/sidenav-menu/sidenav-menu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/base/sidenav-menu/sidenav-menu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-menu\">\n\n  <figure class=\"user-data\">\n    <span>\n      <img *ngIf=\"pessoa.foto\" src=\"{{pessoa.foto}}\" alt=\"{{pessoa.nome}}\">\n      <img *ngIf=\"!pessoa.foto\" src=\"/assets/images/avatar.png\" alt=\"\">\n    </span>\n    \n    <figcaption>\n      Bem vindo <b>{{pessoa.nome}}</b>!\n    </figcaption>\n  </figure>\n\n  <ul class=\"links-list\">\n    <li><a routerLink=\"/dashboard\" routerLinkActive=\"active\"><i class=\"material-icons\">dashboard</i> Dashboard</a></li>\n    <li><a routerLink=\"/eventos\" routerLinkActive=\"active\"><i class=\"material-icons\">assignment</i> Eventos</a></li>\n    <li><a routerLink=\"/meus-eventos\" routerLinkActive=\"active\"><i class=\"material-icons\">assignment</i> Meus Eventos</a></li>\n    <li><a routerLink=\"/noticias\" routerLinkActive=\"active\"><i class=\"material-icons\">speaker_notes</i> Notícias</a></li>\n    <li><a routerLink=\"/noticiasadmin\" routerLinkActive=\"active\"><i class=\"material-icons\">speaker_notes</i> Notícias Admin</a></li>\n    <li><a routerLink=\"/perfil\" routerLinkActive=\"active\"><i class=\"material-icons\">person</i> Perfil</a></li>\n    <li><a href=\"javascript:void(0)\" (click)=\"sair()\"><i class=\"material-icons\">arrow_back</i> Sair</a></li>\n  </ul>\n  \n  <h1 class=\"main-logo\">\n    <a routerLink=\"/\">\n      <img src=\"/assets/images/logo.png\" alt=\"FollowUs\" /> <br>\n      FollowUs\n    </a>\n  </h1>\n</div>"

/***/ }),

/***/ "./src/app/base/sidenav-menu/sidenav-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/base/sidenav-menu/sidenav-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: SidenavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenuComponent", function() { return SidenavMenuComponent; });
/* harmony import */ var _vo_pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../vo/pessoa */ "./src/app/base/vo/pessoa.ts");
/* harmony import */ var _sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidenav-menu.service */ "./src/app/base/sidenav-menu/sidenav-menu.service.ts");
/* harmony import */ var _util_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../util/auth.service */ "./src/app/base/util/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidenavMenuComponent = /** @class */ (function () {
    function SidenavMenuComponent(authService, sidenavMenuService) {
        this.authService = authService;
        this.sidenavMenuService = sidenavMenuService;
        this.pessoa = new _vo_pessoa__WEBPACK_IMPORTED_MODULE_0__["PessoaVO"]();
    }
    SidenavMenuComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("currentUser")) {
            this.recuperarPessoa();
        }
    };
    SidenavMenuComponent.prototype.recuperarPessoa = function () {
        var _this = this;
        this.sidenavMenuService.showLoader();
        this.sidenavMenuService.recuperarPessoa().subscribe(function (response) {
            _this.sidenavMenuService.hideLoader();
            _this.pessoa = response;
            localStorage.setItem('currentPerson', JSON.stringify(response));
        }, function (error) {
            _this.sidenavMenuService.hideLoader();
            _this.sidenavMenuService.showError("Erro ao recuperar usuário");
            _this.authService.logout();
        });
    };
    SidenavMenuComponent.prototype.sair = function () {
        this.authService.logout();
    };
    SidenavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-sidenav-menu',
            template: __webpack_require__(/*! ./sidenav-menu.component.html */ "./src/app/base/sidenav-menu/sidenav-menu.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-menu.component.css */ "./src/app/base/sidenav-menu/sidenav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_util_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _sidenav_menu_service__WEBPACK_IMPORTED_MODULE_1__["SidenavMenuService"]])
    ], SidenavMenuComponent);
    return SidenavMenuComponent;
}());



/***/ }),

/***/ "./src/app/base/sidenav-menu/sidenav-menu.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/base/sidenav-menu/sidenav-menu.service.ts ***!
  \***********************************************************/
/*! exports provided: SidenavMenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavMenuService", function() { return SidenavMenuService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _util_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../util/base.service */ "./src/app/base/util/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidenavMenuService = /** @class */ (function (_super) {
    __extends(SidenavMenuService, _super);
    function SidenavMenuService(http, snackBar) {
        var _this = _super.call(this, http, snackBar) || this;
        _this.http = http;
        _this.snackBar = snackBar;
        return _this;
    }
    SidenavMenuService.prototype.recuperarPessoa = function () {
        var curUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
        var query = JSON.stringify({ "where": { "userId": { "like": curUserId } } });
        return this.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/Pessoas/findOne?filter=' + query);
    };
    SidenavMenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SidenavMenuService);
    return SidenavMenuService;
}(_util_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/base/util/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/base/util/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "./src/app/base/util/base.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function (_super) {
    __extends(AuthService, _super);
    function AuthService(http, snackBar, router) {
        var _this = _super.call(this, http, snackBar) || this;
        _this.http = http;
        _this.snackBar = snackBar;
        _this.router = router;
        return _this;
    }
    AuthService.prototype.login = function (user) {
        var _this = this;
        this.showLoader();
        this.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + "/Users/login", user).subscribe(function (response) {
            localStorage.setItem('currentUser', JSON.stringify(response));
            _this.headers.append('ACCESS_TOKEN', response.id);
            _this.getPerson();
        }, function (error) {
            _this.hideLoader();
            _this.showError("Email ou senha inválidos");
        });
    };
    AuthService.prototype.getPerson = function () {
        var _this = this;
        var curUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
        var query = JSON.stringify({ "where": { "userId": { "like": curUserId } } });
        this.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/Pessoas/findOne?filter=' + query).subscribe(function (response) {
            _this.hideLoader();
            localStorage.setItem('currentPerson', JSON.stringify(response));
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            _this.hideLoader();
            _this.showError("Erro ao recuperar usuário");
            _this.logout();
        });
    };
    AuthService.prototype.getLoggedPerson = function () {
        var pessoa = JSON.parse(localStorage.getItem('currentPerson'));
        return pessoa;
    };
    AuthService.prototype.logout = function () {
        localStorage.clear();
        this.headers.delete('ACCESS_TOKEN');
        this.router.navigate(['/login']);
    };
    AuthService.prototype.canActivate = function () {
        var curUser = JSON.parse(localStorage.getItem('currentUser'));
        if (curUser) {
            var creationDate = new Date(curUser.created);
            var expirationDate = new Date(creationDate.getTime() + curUser.ttl * 1000);
            if (!(expirationDate > new Date())) {
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }
        else {
            if (this.router.url !== '/signup') {
                this.router.navigate(['/login']);
            }
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



/***/ }),

/***/ "./src/app/base/util/base.service.ts":
/*!*******************************************!*\
  !*** ./src/app/base/util/base.service.ts ***!
  \*******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");



var BaseService = /** @class */ (function () {
    function BaseService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json; charset=utf-8');
    }
    BaseService.prototype.get = function (url) {
        return this
            .http
            .get(url)
            .map(function (response) {
            return response;
        });
    };
    BaseService.prototype.getFile = function (url) {
        return this
            .http
            .get(url, { responseType: "blob" })
            .map(function (response) {
            return response;
        });
    };
    BaseService.prototype.post = function (url, body, headers) {
        var header = headers || this.headers;
        return this.http
            .post(url, body, { headers: header })
            .map(function (response) {
            return response;
        });
    };
    BaseService.prototype.put = function (url, body) {
        return this
            .http
            .put(url, body)
            .map(function (response) {
            return response;
        });
    };
    BaseService.prototype.delete = function (url) {
        return this
            .http
            .delete(url)
            .map(function (response) {
            return response;
        });
    };
    BaseService.prototype.showLoader = function () {
        document.getElementById("outer-container").classList.add("loading");
    };
    BaseService.prototype.hideLoader = function () {
        document.getElementById("outer-container").classList.remove("loading");
    };
    BaseService.prototype.showSuccess = function (successText) {
        this.snackBar.open(successText, '', {
            duration: 3000,
            panelClass: ['success-snackbar']
        });
    };
    BaseService.prototype.showError = function (errorText) {
        this.snackBar.open(errorText, '', {
            duration: 3000,
            panelClass: ['error-snackbar']
        });
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/base/vo/evento.ts":
/*!***********************************!*\
  !*** ./src/app/base/vo/evento.ts ***!
  \***********************************/
/*! exports provided: EventoVO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventoVO", function() { return EventoVO; });
var EventoVO = /** @class */ (function () {
    function EventoVO(id, titulo, descricao, endereco, dataEvento, horaEvento, dataCriacao, distancia, tipoEvento, criador, participantes, imagem) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.endereco = endereco;
        this.dataEvento = dataEvento;
        this.horaEvento = horaEvento;
        this.dataCriacao = dataCriacao;
        this.distancia = distancia;
        this.tipoEvento = tipoEvento;
        this.criador = criador;
        this.participantes = participantes;
        this.imagem = imagem;
    }
    return EventoVO;
}());



/***/ }),

/***/ "./src/app/base/vo/noticia.ts":
/*!************************************!*\
  !*** ./src/app/base/vo/noticia.ts ***!
  \************************************/
/*! exports provided: NoticiaVO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiaVO", function() { return NoticiaVO; });
var NoticiaVO = /** @class */ (function () {
    function NoticiaVO(id, titulo, sutitulo, texto, dtCriacao, autor, imagem) {
        this.id = id;
        this.titulo = titulo;
        this.sutitulo = sutitulo;
        this.texto = texto;
        this.dtCriacao = dtCriacao;
        this.autor = autor;
        this.imagem = imagem;
    }
    return NoticiaVO;
}());



/***/ }),

/***/ "./src/app/base/vo/pessoa-simplificada.ts":
/*!************************************************!*\
  !*** ./src/app/base/vo/pessoa-simplificada.ts ***!
  \************************************************/
/*! exports provided: PessoaSimplificadaVO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaSimplificadaVO", function() { return PessoaSimplificadaVO; });
var PessoaSimplificadaVO = /** @class */ (function () {
    function PessoaSimplificadaVO(nome, personId) {
        this.nome = nome;
        this.personId = personId;
    }
    return PessoaSimplificadaVO;
}());



/***/ }),

/***/ "./src/app/base/vo/pessoa.ts":
/*!***********************************!*\
  !*** ./src/app/base/vo/pessoa.ts ***!
  \***********************************/
/*! exports provided: PessoaVO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PessoaVO", function() { return PessoaVO; });
var PessoaVO = /** @class */ (function () {
    function PessoaVO(id, nome, idade, tipoEsportista, userId, foto) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.tipoEsportista = tipoEsportista;
        this.userId = userId;
        this.foto = foto;
    }
    return PessoaVO;
}());



/***/ }),

/***/ "./src/app/base/vo/usuario.ts":
/*!************************************!*\
  !*** ./src/app/base/vo/usuario.ts ***!
  \************************************/
/*! exports provided: UsuarioVO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioVO", function() { return UsuarioVO; });
var UsuarioVO = /** @class */ (function () {
    function UsuarioVO(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
    return UsuarioVO;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"inner-container dashboard-container\">\n\n  <div class=\"default-grid\">\n\n    <div class=\"col-6\">\n      <div class=\"default-card z-depth-1\">\n        <div class=\"card-icon icon-orange z-depth-2\">\n          <i class=\"material-icons\">event_note</i>\n        </div>\n        <div class=\"card-info\">\n          <p class=\"info-text\">Eventos concluídos</p>\n          <p class=\"info-data\">{{meusEventosConcluidos()}}/{{meusEventos.length}}</p>\n        </div>\n        <div class=\"card-footer\">\n          <span>\n            <i class=\"material-icons\">calendar_today</i> desde o início</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"default-card z-depth-1\">\n        <div class=\"card-icon icon-green z-depth-2\">\n          <i class=\"material-icons\">directions_walk</i>\n        </div>\n        <div class=\"card-info\">\n          <p class=\"info-text\">Distância percorrida</p>\n          <p class=\"info-data\">{{distanciaTotalPercorrida()}}km</p>\n        </div>\n        <div class=\"card-footer\">\n          <span>\n            <i class=\"material-icons\">calendar_today</i> desde o início</span>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"col-6\">\n      <div class=\"default-card z-depth-1\">\n        <div class=\"card-icon icon-red z-depth-2\">\n          <i class=\"material-icons\">event</i>\n        </div>\n        <div class=\"card-info\">\n          <p class=\"info-text\">Próximo evento</p>\n          <p class=\"info-data\">30/08 - Corrida do kartódromo</p>\n        </div>\n        <div class=\"card-footer\">\n          <a href=\"#\">\n            <i class=\"material-icons\">remove_red_eye</i> Ver evento</a>\n        </div>\n      </div>\n    </div> -->\n\n  </div>\n\n  <div class=\"default-grid other-info\">\n\n    <div class=\"col-6\">\n      <div class=\"default-card z-depth-1\" style=\"min-height: 280px;\">\n        <div class=\"card-icon icon-blue full z-depth-2\">\n          Últimos eventos\n        </div>\n        <div class=\"card-info\">\n          <mat-list role=\"list\" class=\"card-list\">\n            <ng-container *ngFor=\"let evento of eventos; let i = index\">\n              <mat-list-item role=\"listitem\" *ngIf=\"i<3 && validateDate(evento)\">\n                <a class=\"card-link\" (click)=\"detalheEventoDialog(evento)\">\n                  <span>\n                    <b>{{evento.titulo}}</b> - {{evento.tipoEvento}}</span>\n                  <span>\n                    <i class=\"material-icons align-center\">directions_run</i> {{evento.distancia}}km</span>\n                </a>\n              </mat-list-item>\n            </ng-container>\n          </mat-list>\n        </div>\n        <div class=\"card-footer\" style=\"align-self: flex-end;\">\n          <a routerLink=\"/eventos\">\n            <i class=\"material-icons\">remove_red_eye</i> Ver todos os eventos</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n      <div class=\"default-card z-depth-1\" style=\"min-height: 280px;\">\n        <div class=\"card-icon icon-red full z-depth-2\">\n          Últimas notícias\n        </div>\n        <div class=\"card-info\">\n          <mat-list role=\"list\" class=\"card-list\">\n            <ng-container *ngFor=\"let noticia of noticias; let i = index;\">\n              <mat-list-item role=\"listitem\" *ngIf=\"i<3\">\n                <a class=\"card-link\" (click)=\"detalheNoticiaDialog(noticia)\">\n                  <p class=\"truncate text-left\"><b>{{noticia.titulo}}</b> - {{noticia.subtitulo}}</p>\n                  <i class=\"material-icons\">remove_red_eye</i>\n                </a>\n              </mat-list-item>\n            </ng-container>\n          </mat-list>\n        </div>\n        <div class=\"card-footer\" style=\"align-self: flex-end;\">\n          <a routerLink=\"/noticias\">\n            <i class=\"material-icons\">remove_red_eye</i> Ver todas as notícias</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _eventos_eventos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../eventos/eventos.service */ "./src/app/components/eventos/eventos.service.ts");
/* harmony import */ var _eventos_eventos_detalhe_dialog_eventos_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component */ "./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.ts");
/* harmony import */ var _noticias_noticias_detalhe_dialog_noticias_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component */ "./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.ts");
/* harmony import */ var _noticias_noticias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../noticias/noticias.service */ "./src/app/components/noticias/noticias.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dialog, noticiasService, eventosService) {
        this.dialog = dialog;
        this.noticiasService = noticiasService;
        this.eventosService = eventosService;
        this.noticias = [];
        this.eventos = [];
        this.meusEventos = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.recuperarNoticias();
        this.recuperarEventos();
    };
    DashboardComponent.prototype.recuperarNoticias = function () {
        var _this = this;
        this.noticiasService.recuperarNoticias().subscribe(function (response) {
            _this.noticias = response;
        }, function (error) {
            _this.noticiasService.hideLoader();
            _this.noticiasService.showError("Erro ao recuperar notícias");
        });
    };
    DashboardComponent.prototype.recuperarEventos = function () {
        var _this = this;
        this.eventosService.recuperarEventos().subscribe(function (response) {
            _this.eventos = response;
            _this.getMyEvents();
            console.log(response);
            console.log(_this.meusEventos);
        }, function (error) {
            _this.eventosService.hideLoader();
            _this.eventosService.showError("Erro ao recuperar eventos");
        });
    };
    DashboardComponent.prototype.detalheNoticiaDialog = function (noticia) {
        this.dialog.open(_noticias_noticias_detalhe_dialog_noticias_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_2__["NoticiasDetalheDialogComponent"], {
            data: noticia,
            disableClose: true
        });
    };
    DashboardComponent.prototype.detalheEventoDialog = function (evento) {
        this.dialog.open(_eventos_eventos_detalhe_dialog_eventos_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_1__["EventosDetalheDialogComponent"], {
            data: evento,
            disableClose: true
        });
    };
    DashboardComponent.prototype.validateDate = function (evento) {
        var eventDate = new Date(evento.dataEvento);
        return eventDate > new Date();
    };
    DashboardComponent.prototype.getMyEvents = function () {
        var _this = this;
        var curPersonId = JSON.parse(localStorage.getItem('currentPerson')).id;
        this.meusEventos = [];
        this.eventos.forEach(function (evento) {
            evento.participantes.forEach(function (participante) {
                if (participante.personId === curPersonId) {
                    _this.meusEventos.push(evento);
                }
            });
        });
    };
    DashboardComponent.prototype.meusEventosConcluidos = function () {
        var _this = this;
        var count = 0;
        this.meusEventos.forEach(function (evento) {
            if (!_this.validateDate(evento)) {
                count++;
            }
        });
        return count;
    };
    DashboardComponent.prototype.distanciaTotalPercorrida = function () {
        var _this = this;
        var distanciaTotal = 0;
        this.meusEventos.forEach(function (evento) {
            if (!_this.validateDate(evento)) {
                distanciaTotal = distanciaTotal + evento.distancia;
            }
        });
        return distanciaTotal;
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _noticias_noticias_service__WEBPACK_IMPORTED_MODULE_3__["NoticiasService"],
            _eventos_eventos_service__WEBPACK_IMPORTED_MODULE_0__["EventosService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{evento.titulo}}</h1>\n<div mat-dialog-content>\n  <div class=\"detalhe-evento-content\">\n    <figure class=\"evento-data\">\n      <span>\n        <img *ngIf=\"evento.imagem\" src=\"{{evento.imagem}}\" alt=\"{{evento.titulo}}\">\n        <img *ngIf=\"!evento.imagem\" src=\"/assets/images/noticia-default.jpg\" alt=\"\">\n      </span>\n\n      <figcaption>\n        <b>{{evento.tipoEvento}} {{evento.distancia}}km {{evento.dataEvento | date:\"dd/MM/yyyy\"}} - {{evento.horaEvento}}h</b>\n        <span>{{evento.criador.nome}} | Criado em: {{evento.dataCriacao | date:\"dd/MM/yyyy\"}}</span>\n      </figcaption>\n    </figure>\n\n    <p class=\"noticia-text\">{{evento.descricao}}</p>\n\n    <table class=\"default-table\">\n      <thead>\n        <tr>\n          <th>Participante</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let participante of evento.participantes\">\n          <td>{{participante.nome}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div mat-dialog-actions>\n  <div class=\"text-center\" style=\"width: 100%;\">\n    <button mat-button color=\"primary\" (click)=\"dialogRef.close()\">Fechar</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: EventosDetalheDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosDetalheDialogComponent", function() { return EventosDetalheDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_vo_evento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base/vo/evento */ "./src/app/base/vo/evento.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var EventosDetalheDialogComponent = /** @class */ (function () {
    function EventosDetalheDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.evento = new _base_vo_evento__WEBPACK_IMPORTED_MODULE_2__["EventoVO"]();
    }
    EventosDetalheDialogComponent.prototype.ngOnInit = function () {
        this.evento = this.data;
    };
    EventosDetalheDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventos-detalhe-dialog',
            template: __webpack_require__(/*! ./eventos-detalhe-dialog.component.html */ "./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.html"),
            styles: [__webpack_require__(/*! ./eventos-detalhe-dialog.component.css */ "./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], _base_vo_evento__WEBPACK_IMPORTED_MODULE_2__["EventoVO"]])
    ], EventosDetalheDialogComponent);
    return EventosDetalheDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/eventos/eventos-novo-dialog/eventos-novo-dialog.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-novo-dialog/eventos-novo-dialog.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/eventos/eventos-novo-dialog/eventos-novo-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-novo-dialog/eventos-novo-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Novo evento</h1>\r\n<div mat-dialog-content>\r\n  <div class=\"default-grid\">\r\n    <div class=\"col-4\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Título\" id=\"titulo\" name=\"titulo\" [(ngModel)]=\"evento.titulo\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Endereço\" id=\"endereco\" name=\"endereco\" [(ngModel)]=\"evento.endereco\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Data do evento\" id=\"dataEvento\" name=\"dataEvento\" [(ngModel)]=\"evento.dataEvento\" [matDatepicker]=\"eventoDatePicker\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"eventoDatePicker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #eventoDatePicker></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <mat-form-field>\r\n        <input matInput type=\"number\" placeholder=\"Hora do evento\" id=\"horaEvento\" name=\"horaEvento\" [(ngModel)]=\"evento.horaEvento\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <mat-form-field>\r\n        <input matInput type=\"number\" placeholder=\"Distância(km)\" id=\"distancia\" name=\"distancia\" [(ngModel)]=\"evento.distancia\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-4\">\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Tipo de evento\" id=\"tipoEvento\" name=\"tipoEvento\" [(ngModel)]=\"evento.tipoEvento\">\r\n          <mat-option value=\"Corrida\">\r\n            Corrida\r\n          </mat-option>\r\n          <mat-option value=\"Caminhada\">\r\n            Caminhada\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-12\">\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Descrição\" id=\"descricao\" name=\"descricao\" [(ngModel)]=\"evento.descricao\"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"image-input\">\r\n    <figure class=\"input-data\">\r\n      <span>\r\n        <img *ngIf=\"evento.imagem\" src=\"{{evento.imagem}}\" alt=\"{{evento.titulo}}\">\r\n        <img *ngIf=\"!evento.imagem\" src=\"/assets/images/noticia-default.jpg\" alt=\"\">\r\n      </span>\r\n    </figure>\r\n  \r\n    <label for=\"foto\"><i class=\"material-icons\">cloud_upload</i> Escolher imagem</label>\r\n    <input type=\"file\" name=\"foto\" id=\"foto\" (change)=\"handleFileSelect($event)\">\r\n  </div>\r\n</div>\r\n\r\n<div mat-dialog-actions>\r\n  <div class=\"text-center\" style=\"width: 100%;\">\r\n    <button mat-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>\r\n    <button mat-button color=\"primary\" (click)=\"salvarEvento()\">Salvar</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/eventos/eventos-novo-dialog/eventos-novo-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-novo-dialog/eventos-novo-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EventosNovoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosNovoDialogComponent", function() { return EventosNovoDialogComponent; });
/* harmony import */ var _base_vo_pessoa_simplificada__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../base/vo/pessoa-simplificada */ "./src/app/base/vo/pessoa-simplificada.ts");
/* harmony import */ var _eventos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../eventos.service */ "./src/app/components/eventos/eventos.service.ts");
/* harmony import */ var _base_vo_evento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../base/vo/evento */ "./src/app/base/vo/evento.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventosNovoDialogComponent = /** @class */ (function () {
    function EventosNovoDialogComponent(dialogRef, eventosService) {
        this.dialogRef = dialogRef;
        this.eventosService = eventosService;
        this.evento = new _base_vo_evento__WEBPACK_IMPORTED_MODULE_2__["EventoVO"]();
    }
    EventosNovoDialogComponent.prototype.ngOnInit = function () {
    };
    EventosNovoDialogComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    EventosNovoDialogComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var base64Header = "data:image/jpeg;base64,";
        var binaryString = readerEvt.target.result;
        this.evento.imagem = base64Header + btoa(binaryString);
    };
    EventosNovoDialogComponent.prototype.salvarEvento = function () {
        var _this = this;
        this.eventosService.showLoader();
        this.populaCriador();
        this.evento.dataCriacao = new Date();
        this.evento.participantes = [];
        this.eventosService.novoEvento(this.evento).subscribe(function (response) {
            _this.eventosService.hideLoader();
            _this.eventosService.showSuccess("Evento criado com sucesso");
            _this.dialogRef.close();
        }, function (error) {
            _this.eventosService.hideLoader();
            _this.eventosService.showError("Erro ao criar evento");
        });
    };
    EventosNovoDialogComponent.prototype.populaCriador = function () {
        var pessoa = JSON.parse(localStorage.getItem('currentPerson'));
        this.evento.criador = new _base_vo_pessoa_simplificada__WEBPACK_IMPORTED_MODULE_0__["PessoaSimplificadaVO"]();
        this.evento.criador.personId = pessoa.id;
        this.evento.criador.nome = pessoa.nome;
    };
    EventosNovoDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-eventos-novo-dialog',
            template: __webpack_require__(/*! ./eventos-novo-dialog.component.html */ "./src/app/components/eventos/eventos-novo-dialog/eventos-novo-dialog.component.html"),
            styles: [__webpack_require__(/*! ./eventos-novo-dialog.component.css */ "./src/app/components/eventos/eventos-novo-dialog/eventos-novo-dialog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _eventos_service__WEBPACK_IMPORTED_MODULE_1__["EventosService"]])
    ], EventosNovoDialogComponent);
    return EventosNovoDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/eventos/eventos-participar-dialog/eventos-participar-dialog.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-participar-dialog/eventos-participar-dialog.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/eventos/eventos-participar-dialog/eventos-participar-dialog.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-participar-dialog/eventos-participar-dialog.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Participar de evento</h1>\n<div mat-dialog-content>\n  <p style=\"margin: 15px 0;\">Gostaria de participar do evento \"{{evento.titulo}}\"?</p>  \n</div>\n\n<div mat-dialog-actions>\n  <div class=\"text-center\" style=\"width: 100%;\">\n    <button mat-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>\n    <button mat-button color=\"primary\" (click)=\"participarEvento()\">Sim</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/eventos/eventos-participar-dialog/eventos-participar-dialog.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-participar-dialog/eventos-participar-dialog.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: EventosParticiparDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosParticiparDialogComponent", function() { return EventosParticiparDialogComponent; });
/* harmony import */ var _base_util_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../base/util/auth.service */ "./src/app/base/util/auth.service.ts");
/* harmony import */ var _eventos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../eventos.service */ "./src/app/components/eventos/eventos.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_vo_evento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../base/vo/evento */ "./src/app/base/vo/evento.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_vo_pessoa_simplificada__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../base/vo/pessoa-simplificada */ "./src/app/base/vo/pessoa-simplificada.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var EventosParticiparDialogComponent = /** @class */ (function () {
    function EventosParticiparDialogComponent(dialogRef, data, eventosService, authService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.eventosService = eventosService;
        this.authService = authService;
    }
    EventosParticiparDialogComponent.prototype.ngOnInit = function () {
        this.evento = this.data;
    };
    EventosParticiparDialogComponent.prototype.participarEvento = function () {
        var _this = this;
        var pessoaLogada = this.authService.getLoggedPerson();
        var pessoa = new _base_vo_pessoa_simplificada__WEBPACK_IMPORTED_MODULE_5__["PessoaSimplificadaVO"](pessoaLogada.nome, pessoaLogada.id);
        this.evento.participantes.push(pessoa);
        this.eventosService.alterarEvento(this.evento).subscribe(function (response) {
            _this.eventosService.showSuccess("Agora você está participando do evento!");
            _this.dialogRef.close();
        }, function (error) {
            _this.eventosService.hideLoader();
            _this.eventosService.showError("Erro ao participar do evento");
        });
    };
    EventosParticiparDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-eventos-participar-dialog',
            template: __webpack_require__(/*! ./eventos-participar-dialog.component.html */ "./src/app/components/eventos/eventos-participar-dialog/eventos-participar-dialog.component.html"),
            styles: [__webpack_require__(/*! ./eventos-participar-dialog.component.css */ "./src/app/components/eventos/eventos-participar-dialog/eventos-participar-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _base_vo_evento__WEBPACK_IMPORTED_MODULE_3__["EventoVO"], _eventos_service__WEBPACK_IMPORTED_MODULE_1__["EventosService"], _base_util_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], EventosParticiparDialogComponent);
    return EventosParticiparDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/eventos/eventos-sair-dialog/eventos-sair-dialog.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-sair-dialog/eventos-sair-dialog.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/eventos/eventos-sair-dialog/eventos-sair-dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-sair-dialog/eventos-sair-dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Sair de evento</h1>\n<div mat-dialog-content>\n  <p style=\"margin: 15px 0;\">Gostaria de sair do evento \"{{evento.titulo}}\"?</p>  \n</div>\n\n<div mat-dialog-actions>\n  <div class=\"text-center\" style=\"width: 100%;\">\n    <button mat-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>\n    <button mat-button color=\"primary\" (click)=\"sairEvento()\">Sim</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/eventos/eventos-sair-dialog/eventos-sair-dialog.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/eventos/eventos-sair-dialog/eventos-sair-dialog.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: EventosSairDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosSairDialogComponent", function() { return EventosSairDialogComponent; });
/* harmony import */ var _base_util_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../base/util/auth.service */ "./src/app/base/util/auth.service.ts");
/* harmony import */ var _eventos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../eventos.service */ "./src/app/components/eventos/eventos.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_vo_evento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../base/vo/evento */ "./src/app/base/vo/evento.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var EventosSairDialogComponent = /** @class */ (function () {
    function EventosSairDialogComponent(dialogRef, data, eventosService, authService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.eventosService = eventosService;
        this.authService = authService;
    }
    EventosSairDialogComponent.prototype.ngOnInit = function () {
        this.evento = this.data;
    };
    EventosSairDialogComponent.prototype.sairEvento = function () {
        var _this = this;
        var pessoa = this.authService.getLoggedPerson();
        this.evento.participantes.forEach(function (participante, index) {
            if (participante.personId === pessoa.id) {
                _this.evento.participantes.splice(index, 1);
                _this.eventosService.alterarEvento(_this.evento).subscribe(function (response) {
                    _this.eventosService.showSuccess("Agora você está participando do evento!");
                    _this.dialogRef.close();
                }, function (error) {
                    _this.eventosService.hideLoader();
                    _this.eventosService.showError("Erro ao participar do evento");
                });
                return;
            }
        });
    };
    EventosSairDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-eventos-sair-dialog',
            template: __webpack_require__(/*! ./eventos-sair-dialog.component.html */ "./src/app/components/eventos/eventos-sair-dialog/eventos-sair-dialog.component.html"),
            styles: [__webpack_require__(/*! ./eventos-sair-dialog.component.css */ "./src/app/components/eventos/eventos-sair-dialog/eventos-sair-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _base_vo_evento__WEBPACK_IMPORTED_MODULE_3__["EventoVO"], _eventos_service__WEBPACK_IMPORTED_MODULE_1__["EventosService"], _base_util_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], EventosSairDialogComponent);
    return EventosSairDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/eventos/eventos.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/eventos/eventos.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/eventos/eventos.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/eventos/eventos.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"inner-container\">\n  <mat-card>\n    <div class=\"default-title-header\">\n      <h3 class=\"default-title\">Eventos</h3>\n      <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Novo Evento</button>\n    </div>\n  </mat-card>\n\n  <div class=\"noticias-list\">\n\n    <div class=\"default-grid\">\n      <ng-container *ngFor=\"let evento of eventos\">\n        <div class=\"col-3\" *ngIf=\"validateDate(evento)\">\n            <mat-card>\n              <mat-card-header>\n                <mat-card-title>{{evento.titulo}}</mat-card-title>\n                <mat-card-subtitle>{{evento.tipoEvento}} {{evento.distancia}}km {{evento.dataEvento | date:\"dd/MM/yyyy\"}} - {{evento.horaEvento}}h</mat-card-subtitle>\n                <mat-card-subtitle>{{evento.participantes.length}} Pessoas participando</mat-card-subtitle>\n              </mat-card-header>\n              <div mat-card-image>\n                <img *ngIf=\"evento.imagem\" src=\"{{evento.imagem}}\" alt=\"{{evento.titulo}}\">\n                <img *ngIf=\"!evento.imagem\" src=\"/assets/images/noticia-default.jpg\" alt=\"\">\n              </div>\n              <mat-card-content>\n                <a href=\"#\" class=\"truncate\" matTooltip=\"{{evento.endereco}}\">{{evento.endereco}}</a>\n                <br>\n                <p class=\"multiline-truncate\">\n                  {{evento.descricao}}\n                </p>\n              </mat-card-content>\n              <mat-card-actions class=\"text-center\">\n                <button mat-button mat-raised-button color=\"primary\" (click)=\"detalheEventoDialog(evento)\"><i class=\"material-icons\">remove_red_eye</i> Ver mais</button>\n                <button mat-button mat-raised-button *ngIf=\"!estouParticipando(evento)\" color=\"accent\" (click)=\"participarEventoDialog(evento)\"><i class=\"material-icons\">thumb_up</i> Participar</button>\n                <button mat-button mat-raised-button *ngIf=\"estouParticipando(evento)\" color=\"warn\" (click)=\"sairEventoDialog(evento)\"><i class=\"material-icons\">thumb_down</i> Sair</button>\n              </mat-card-actions>\n            </mat-card>\n        </div>\n      </ng-container>\n    </div>\n    \n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/eventos/eventos.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/eventos/eventos.component.ts ***!
  \*********************************************************/
/*! exports provided: EventosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosComponent", function() { return EventosComponent; });
/* harmony import */ var _eventos_sair_dialog_eventos_sair_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventos-sair-dialog/eventos-sair-dialog.component */ "./src/app/components/eventos/eventos-sair-dialog/eventos-sair-dialog.component.ts");
/* harmony import */ var _base_util_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../base/util/auth.service */ "./src/app/base/util/auth.service.ts");
/* harmony import */ var _eventos_participar_dialog_eventos_participar_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventos-participar-dialog/eventos-participar-dialog.component */ "./src/app/components/eventos/eventos-participar-dialog/eventos-participar-dialog.component.ts");
/* harmony import */ var _eventos_detalhe_dialog_eventos_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventos-detalhe-dialog/eventos-detalhe-dialog.component */ "./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.ts");
/* harmony import */ var _eventos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventos.service */ "./src/app/components/eventos/eventos.service.ts");
/* harmony import */ var _eventos_novo_dialog_eventos_novo_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventos-novo-dialog/eventos-novo-dialog.component */ "./src/app/components/eventos/eventos-novo-dialog/eventos-novo-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EventosComponent = /** @class */ (function () {
    function EventosComponent(dialog, eventosService, authService) {
        this.dialog = dialog;
        this.eventosService = eventosService;
        this.authService = authService;
    }
    EventosComponent.prototype.ngOnInit = function () {
        this.recuperarEventos();
    };
    EventosComponent.prototype.recuperarEventos = function () {
        var _this = this;
        this.eventosService.recuperarEventos().subscribe(function (response) {
            _this.eventos = response;
        }, function (error) {
            _this.eventosService.hideLoader();
            _this.eventosService.showError("Erro ao recuperar eventos");
        });
    };
    EventosComponent.prototype.openDialog = function (noticia) {
        var _this = this;
        if (!noticia) {
            noticia = null;
        }
        var dialogRef = this.dialog.open(_eventos_novo_dialog_eventos_novo_dialog_component__WEBPACK_IMPORTED_MODULE_5__["EventosNovoDialogComponent"], {
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.recuperarEventos();
        });
    };
    EventosComponent.prototype.detalheEventoDialog = function (evento) {
        this.dialog.open(_eventos_detalhe_dialog_eventos_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_3__["EventosDetalheDialogComponent"], {
            data: evento,
            disableClose: true
        });
    };
    EventosComponent.prototype.estouParticipando = function (evento) {
        var participandoControl = false;
        var pessoa = this.authService.getLoggedPerson();
        evento.participantes.forEach(function (participante) {
            if (participante.personId === pessoa.id) {
                participandoControl = true;
            }
        });
        return participandoControl;
    };
    EventosComponent.prototype.participarEventoDialog = function (evento) {
        this.dialog.open(_eventos_participar_dialog_eventos_participar_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EventosParticiparDialogComponent"], {
            data: evento,
            disableClose: true
        });
    };
    EventosComponent.prototype.sairEventoDialog = function (evento) {
        this.dialog.open(_eventos_sair_dialog_eventos_sair_dialog_component__WEBPACK_IMPORTED_MODULE_0__["EventosSairDialogComponent"], {
            data: evento,
            disableClose: true
        });
    };
    EventosComponent.prototype.validateDate = function (evento) {
        var eventDate = new Date(evento.dataEvento);
        return eventDate > new Date();
    };
    EventosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'app-eventos',
            template: __webpack_require__(/*! ./eventos.component.html */ "./src/app/components/eventos/eventos.component.html"),
            styles: [__webpack_require__(/*! ./eventos.component.css */ "./src/app/components/eventos/eventos.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _eventos_service__WEBPACK_IMPORTED_MODULE_4__["EventosService"], _base_util_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], EventosComponent);
    return EventosComponent;
}());



/***/ }),

/***/ "./src/app/components/eventos/eventos.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/eventos/eventos.service.ts ***!
  \*******************************************************/
/*! exports provided: EventosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventosService", function() { return EventosService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_util_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../base/util/base.service */ "./src/app/base/util/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventosService = /** @class */ (function (_super) {
    __extends(EventosService, _super);
    function EventosService(http, snackBar) {
        var _this = _super.call(this, http, snackBar) || this;
        _this.http = http;
        _this.snackBar = snackBar;
        return _this;
    }
    EventosService.prototype.recuperarEventos = function () {
        return this.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/Eventos');
    };
    EventosService.prototype.novoEvento = function (evento) {
        return this.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + "/Eventos", evento);
    };
    EventosService.prototype.alterarEvento = function (evento) {
        return this.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + "/Eventos", evento);
    };
    EventosService.prototype.removerEvento = function (eventoId) {
        return this.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + "/Eventos/" + eventoId);
    };
    EventosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], EventosService);
    return EventosService;
}(_base_util_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main-banner\" id=\"main-banner\">\n\n  <div class=\"banner-content\">\n\n    <h3><span>Vá longe com</span> FollowUs!</h3>\n\n    <p>\n      O lugar perfeito para quem quer se movimentar :) <br>\n      Entre, caminhe e corra com várias pessoas próximas a você!!!\n    </p>\n    \n    <button mat-raised-button color=\"primary\" routerLink=\"/signup\">Cadastre-se</button>\n  </div>\n\n</section>\n\n<section class=\"home-description-cards\">\n\n  <div class=\"container\">\n\n    <p class=\"cards-list-title\">Com <span>FollowUs</span> você:</p>\n\n    <div class=\"default-grid\">\n  \n      <div class=\"col-4\">\n        <mat-card>\n          <span class=\"card-icon\">\n            <i class=\"material-icons\">directions_walk</i>\n          </span>\n\n          <h4 class=\"card-title\">Caminha</h4>\n\n          <p class=\"card-description\">\n            Caminhe com seus amigos ou encontre pessoas novas para caminhar\n          </p>\n        </mat-card>\n      </div>\n      <div class=\"col-4\">\n        <mat-card>\n          <span class=\"card-icon\">\n            <i class=\"material-icons\">directions_run</i>\n          </span>\n\n          <h4 class=\"card-title\">Corre</h4>\n\n          <p class=\"card-description\">\n            Participe de corridas próximas a você com diversos grupos\n          </p>\n        </mat-card>\n      </div>\n      <div class=\"col-4\">\n          <mat-card>\n            <span class=\"card-icon\">\n              <i class=\"material-icons\">mood</i>\n            </span>\n\n            <h4 class=\"card-title\">Se Diverte</h4>\n\n            <p class=\"card-description\">\n              Faça exercícios e divirta-se conhecendo novas pessoas\n            </p>\n          </mat-card>\n      </div>\n  \n    </div>\n\n  </div>\n\n</section>\n\n<section class=\"home-other-info\">\n  <div class=\"container\">\n\n    <div class=\"inner-content\">\n      <div class=\"info-content\">\n        <h4 class=\"info-title\">Faça Exercícios</h4>\n        <p>\n          A caminhada e a corrida podem ser praticadas por qualquer pessoa, até mesmo por crianças e idosos,\n          a sua pratica também é importante para melhorar o humor e sensação de bem estar. <br>\n          Se você quer sair do sedentarismo e começar a praticar uma atividade física, venha para a FollowUs e divirta-se :)\n        </p>\n    \n        <button mat-raised-button color=\"primary\" routerLink=\"/signup\">Entre para o FollowUs</button>\n      </div>\n\n      <img src=\"/assets/images/runner-flat.png\" alt=\"\" class=\"info-image\">\n    </div>\n  </div>\n</section>"

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
    function HomeComponent() {
        this.scroll = function () {
            var yPos = -(window.scrollY / 15);
            var bgpos = '50% ' + yPos + 'px';
            var selectedElement = document.getElementById("main-banner");
            var headerElement = document.getElementById("main-header");
            selectedElement.style.backgroundPosition = bgpos;
            if (-yPos > 0) {
                headerElement.classList.remove("transparent");
            }
            else {
                headerElement.classList.add("transparent");
            }
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.scroll, true);
        document.getElementById("main-header").classList.add("transparent");
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('scroll', this.scroll, true);
        document.getElementById("main-header").classList.remove("transparent");
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"access-page\">\n\n  <mat-card class=\"form-container\">\n\n    <figure class=\"logo-image\">\n      <img src=\"/assets/images/logo.png\" alt=\"FollowUs\" />\n\n      <figcaption>\n        Follow Us\n      </figcaption>\n    </figure>\n\n    <form class=\"content-form\">\n      <mat-form-field>\n        <input matInput placeholder=\"E-mail\" name=\"email\" id=\"email\" [(ngModel)]=\"user.email\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"password\" matInput placeholder=\"Senha\" name=\"password\" id=\"password\" [(ngModel)]=\"user.password\">\n      </mat-form-field>\n      <button mat-raised-button class=\"action-button\" color=\"primary\" (click)=\"entrar()\">Entrar</button>\n      <p class=\"signup-text\">ou <a routerLink=\"/signup\">clique aqui</a> e cadastre-se</p>\n    </form>\n\n  </mat-card>\n\n</section>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_util_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../base/util/auth.service */ "./src/app/base/util/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_vo_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/vo/usuario */ "./src/app/base/vo/usuario.ts");
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
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new _base_vo_usuario__WEBPACK_IMPORTED_MODULE_3__["UsuarioVO"]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.canActivate()) {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.entrar = function () {
        this.authService.login(this.user);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_base_util_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Novo evento</h1>\n<div mat-dialog-content>\n  <div class=\"default-grid\">\n    <div class=\"col-4\">\n      <mat-form-field>\n        <input matInput placeholder=\"Título\" id=\"titulo\" name=\"titulo\" [(ngModel)]=\"evento.titulo\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n      <mat-form-field>\n        <input matInput placeholder=\"Endereço\" id=\"endereco\" name=\"endereco\" [(ngModel)]=\"evento.endereco\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n      <mat-form-field>\n        <input matInput placeholder=\"Data do evento\" id=\"dataEvento\" name=\"dataEvento\" [(ngModel)]=\"evento.dataEvento\" [matDatepicker]=\"eventoDatePicker\">\n        <mat-datepicker-toggle matSuffix [for]=\"eventoDatePicker\"></mat-datepicker-toggle>\n        <mat-datepicker #eventoDatePicker></mat-datepicker>\n      </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n      <mat-form-field>\n        <input matInput type=\"number\" placeholder=\"Hora do evento\" id=\"horaEvento\" name=\"horaEvento\" [(ngModel)]=\"evento.horaEvento\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n      <mat-form-field>\n        <input matInput type=\"number\" placeholder=\"Distância(km)\" id=\"distancia\" name=\"distancia\" [(ngModel)]=\"evento.distancia\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n      <mat-form-field>\n        <mat-select placeholder=\"Tipo de evento\" id=\"tipoEvento\" name=\"tipoEvento\" [(ngModel)]=\"evento.tipoEvento\">\n          <mat-option value=\"Corrida\">\n            Corrida\n          </mat-option>\n          <mat-option value=\"Caminhada\">\n            Caminhada\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n    <div class=\"col-12\">\n      <mat-form-field>\n        <textarea matInput placeholder=\"Descrição\" id=\"descricao\" name=\"descricao\" [(ngModel)]=\"evento.descricao\"></textarea>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <div class=\"image-input\">\n    <figure class=\"input-data\">\n      <span>\n        <img *ngIf=\"evento.imagem\" src=\"{{evento.imagem}}\" alt=\"{{evento.titulo}}\">\n        <img *ngIf=\"!evento.imagem\" src=\"/assets/images/noticia-default.jpg\" alt=\"\">\n      </span>\n    </figure>\n  \n    <label for=\"foto\"><i class=\"material-icons\">cloud_upload</i> Escolher imagem</label>\n    <input type=\"file\" name=\"foto\" id=\"foto\" (change)=\"handleFileSelect($event)\">\n  </div>\n</div>\n\n<div mat-dialog-actions>\n  <div class=\"text-center\" style=\"width: 100%;\">\n    <button mat-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>\n    <button mat-button color=\"primary\" (click)=\"salvarEvento()\">Salvar</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: MeusEventosDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusEventosDialogComponent", function() { return MeusEventosDialogComponent; });
/* harmony import */ var _meus_eventos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../meus-eventos.service */ "./src/app/components/meus-eventos/meus-eventos.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_vo_evento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../base/vo/evento */ "./src/app/base/vo/evento.ts");
/* harmony import */ var _base_vo_pessoa_simplificada__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../base/vo/pessoa-simplificada */ "./src/app/base/vo/pessoa-simplificada.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MeusEventosDialogComponent = /** @class */ (function () {
    function MeusEventosDialogComponent(dialogRef, data, meusEventosService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.meusEventosService = meusEventosService;
        this.evento = new _base_vo_evento__WEBPACK_IMPORTED_MODULE_3__["EventoVO"]();
    }
    MeusEventosDialogComponent.prototype.ngOnInit = function () {
        if (this.data) {
            this.evento = this.data;
        }
    };
    MeusEventosDialogComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    MeusEventosDialogComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var base64Header = "data:image/jpeg;base64,";
        var binaryString = readerEvt.target.result;
        this.evento.imagem = base64Header + btoa(binaryString);
    };
    MeusEventosDialogComponent.prototype.salvarEvento = function () {
        var _this = this;
        this.meusEventosService.showLoader();
        if (!this.evento.dataCriacao) {
            this.populaCriador();
            this.evento.dataCriacao = new Date();
            this.evento.participantes = [];
        }
        if (!this.data) {
            this.meusEventosService.novoEvento(this.evento).subscribe(function (response) {
                _this.meusEventosService.hideLoader();
                _this.meusEventosService.showSuccess("Evento criado com sucesso");
                _this.dialogRef.close();
            }, function (error) {
                _this.meusEventosService.hideLoader();
                _this.meusEventosService.showError("Erro ao criar evento");
            });
        }
        else {
            this.meusEventosService.alterarEvento(this.evento).subscribe(function (response) {
                _this.meusEventosService.hideLoader();
                _this.meusEventosService.showSuccess("Evento alterado com sucesso");
                _this.dialogRef.close();
            }, function (error) {
                _this.meusEventosService.hideLoader();
                _this.meusEventosService.showError("Erro ao alterar evento");
            });
        }
    };
    MeusEventosDialogComponent.prototype.populaCriador = function () {
        var pessoa = JSON.parse(localStorage.getItem('currentPerson'));
        this.evento.criador = new _base_vo_pessoa_simplificada__WEBPACK_IMPORTED_MODULE_4__["PessoaSimplificadaVO"]();
        this.evento.criador.personId = pessoa.id;
        this.evento.criador.nome = pessoa.nome;
    };
    MeusEventosDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-meus-eventos-dialog',
            template: __webpack_require__(/*! ./meus-eventos-dialog.component.html */ "./src/app/components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component.html"),
            styles: [__webpack_require__(/*! ./meus-eventos-dialog.component.css */ "./src/app/components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _base_vo_evento__WEBPACK_IMPORTED_MODULE_3__["EventoVO"], _meus_eventos_service__WEBPACK_IMPORTED_MODULE_0__["MeusEventosService"]])
    ], MeusEventosDialogComponent);
    return MeusEventosDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Remover evento</h1>\n<div mat-dialog-content>\n  <p style=\"margin: 15px 0;\">Gostaria de remover o evento \"{{evento.titulo}}\"?</p>  \n</div>\n\n<div mat-dialog-actions>\n  <div class=\"text-center\" style=\"width: 100%;\">\n    <button mat-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>\n    <button mat-button color=\"primary\" (click)=\"removerEvento()\">Remover</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: MeusEventosRemoverDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusEventosRemoverDialogComponent", function() { return MeusEventosRemoverDialogComponent; });
/* harmony import */ var _meus_eventos_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../meus-eventos.service */ "./src/app/components/meus-eventos/meus-eventos.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _base_vo_evento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../base/vo/evento */ "./src/app/base/vo/evento.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var MeusEventosRemoverDialogComponent = /** @class */ (function () {
    function MeusEventosRemoverDialogComponent(dialogRef, data, meusEventosService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.meusEventosService = meusEventosService;
    }
    MeusEventosRemoverDialogComponent.prototype.ngOnInit = function () {
        this.evento = this.data;
    };
    MeusEventosRemoverDialogComponent.prototype.removerEvento = function () {
        var _this = this;
        this.meusEventosService.removerEvento(this.evento.id).subscribe(function (response) {
            _this.meusEventosService.showSuccess("Evento removido com sucesso!");
            _this.dialogRef.close();
        }, function (error) {
            _this.meusEventosService.hideLoader();
            _this.meusEventosService.showError("Erro ao remover evento");
        });
    };
    MeusEventosRemoverDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-meus-eventos-remover-dialog',
            template: __webpack_require__(/*! ./meus-eventos-remover-dialog.component.html */ "./src/app/components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component.html"),
            styles: [__webpack_require__(/*! ./meus-eventos-remover-dialog.component.css */ "./src/app/components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _base_vo_evento__WEBPACK_IMPORTED_MODULE_2__["EventoVO"], _meus_eventos_service__WEBPACK_IMPORTED_MODULE_0__["MeusEventosService"]])
    ], MeusEventosRemoverDialogComponent);
    return MeusEventosRemoverDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/meus-eventos/meus-eventos.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/meus-eventos/meus-eventos.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/meus-eventos/meus-eventos.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/meus-eventos/meus-eventos.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"inner-container\">\n  <mat-card>\n    <div class=\"default-title-header\">\n      <h3 class=\"default-title\">Meus Eventos</h3>\n      <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Novo Evento</button>\n    </div>\n\n    <table class=\"default-table\">\n      <thead>\n        <tr>\n          <th>Título</th>\n          <th>Tipo de Evento</th>\n          <th>Distância</th>\n          <th>Criador</th>\n          <th>Data de Criação</th>\n          <th>Data do Evento</th>\n          <th class=\"actions text-center\">Ações</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let evento of eventos\">\n          <td>{{evento.titulo}}</td>\n          <td>{{evento.tipoEvento}}</td>\n          <td>{{evento.distancia}}Km</td>\n          <td>{{evento.criador.nome}}</td>\n          <td>{{evento.dataCriacao | date:\"dd/MM/yyyy\"}}</td>\n          <td>{{evento.dataEvento | date:\"dd/MM/yyyy\"}} - {{evento.horaEvento}}h</td>\n          <td class=\"actions text-center\">\n            <a href=\"javascript:void(0)\" matTooltip=\"Ver Evento\" class=\"blue-text\" (click)=\"detalheEventoDialog(evento)\"><i class=\"material-icons\">remove_red_eye</i></a>\n            <a href=\"javascript:void(0)\" matTooltip=\"Editar evento\" class=\"green-text\" (click)=\"openDialog(evento)\"><i class=\"material-icons\">edit</i></a>\n            <a href=\"javascript:void(0)\" matTooltip=\"Remover evento\" class=\"red-text\" (click)=\"removerEventoDialog(evento)\"><i class=\"material-icons\">cancel</i></a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </mat-card>\n</section>\n"

/***/ }),

/***/ "./src/app/components/meus-eventos/meus-eventos.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/meus-eventos/meus-eventos.component.ts ***!
  \*******************************************************************/
/*! exports provided: MeusEventosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusEventosComponent", function() { return MeusEventosComponent; });
/* harmony import */ var _meus_eventos_remover_dialog_meus_eventos_remover_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meus-eventos-remover-dialog/meus-eventos-remover-dialog.component */ "./src/app/components/meus-eventos/meus-eventos-remover-dialog/meus-eventos-remover-dialog.component.ts");
/* harmony import */ var _meus_eventos_dialog_meus_eventos_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meus-eventos-dialog/meus-eventos-dialog.component */ "./src/app/components/meus-eventos/meus-eventos-dialog/meus-eventos-dialog.component.ts");
/* harmony import */ var _eventos_eventos_detalhe_dialog_eventos_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component */ "./src/app/components/eventos/eventos-detalhe-dialog/eventos-detalhe-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _meus_eventos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meus-eventos.service */ "./src/app/components/meus-eventos/meus-eventos.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MeusEventosComponent = /** @class */ (function () {
    function MeusEventosComponent(dialog, meusEventosService) {
        this.dialog = dialog;
        this.meusEventosService = meusEventosService;
    }
    MeusEventosComponent.prototype.ngOnInit = function () {
        this.recuperarEventos();
    };
    MeusEventosComponent.prototype.recuperarEventos = function () {
        var _this = this;
        this.meusEventosService.recuperarEventos().subscribe(function (response) {
            _this.eventos = response;
        }, function (error) {
            _this.meusEventosService.hideLoader();
            _this.meusEventosService.showError("Erro ao recuperar eventos");
        });
    };
    MeusEventosComponent.prototype.detalheEventoDialog = function (evento) {
        this.dialog.open(_eventos_eventos_detalhe_dialog_eventos_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_2__["EventosDetalheDialogComponent"], {
            data: evento,
            disableClose: true
        });
    };
    MeusEventosComponent.prototype.openDialog = function (evento) {
        var _this = this;
        if (!evento) {
            evento = null;
        }
        var dialogRef = this.dialog.open(_meus_eventos_dialog_meus_eventos_dialog_component__WEBPACK_IMPORTED_MODULE_1__["MeusEventosDialogComponent"], {
            data: evento,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.recuperarEventos();
        });
    };
    MeusEventosComponent.prototype.removerEventoDialog = function (evento) {
        var _this = this;
        var dialogRef = this.dialog.open(_meus_eventos_remover_dialog_meus_eventos_remover_dialog_component__WEBPACK_IMPORTED_MODULE_0__["MeusEventosRemoverDialogComponent"], {
            data: evento,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.recuperarEventos();
        });
    };
    MeusEventosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-meus-eventos',
            template: __webpack_require__(/*! ./meus-eventos.component.html */ "./src/app/components/meus-eventos/meus-eventos.component.html"),
            styles: [__webpack_require__(/*! ./meus-eventos.component.css */ "./src/app/components/meus-eventos/meus-eventos.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _meus_eventos_service__WEBPACK_IMPORTED_MODULE_4__["MeusEventosService"]])
    ], MeusEventosComponent);
    return MeusEventosComponent;
}());



/***/ }),

/***/ "./src/app/components/meus-eventos/meus-eventos.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/meus-eventos/meus-eventos.service.ts ***!
  \*****************************************************************/
/*! exports provided: MeusEventosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeusEventosService", function() { return MeusEventosService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_util_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../base/util/base.service */ "./src/app/base/util/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MeusEventosService = /** @class */ (function (_super) {
    __extends(MeusEventosService, _super);
    function MeusEventosService(http, snackBar) {
        var _this = _super.call(this, http, snackBar) || this;
        _this.http = http;
        _this.snackBar = snackBar;
        return _this;
    }
    MeusEventosService.prototype.recuperarEventos = function () {
        var curPersonId = JSON.parse(localStorage.getItem('currentPerson')).id;
        var query = JSON.stringify({ "where": { "criador.personId": { "like": curPersonId } } });
        return this.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/Eventos?filter=' + query);
    };
    MeusEventosService.prototype.novoEvento = function (evento) {
        return this.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + "/Eventos", evento);
    };
    MeusEventosService.prototype.alterarEvento = function (evento) {
        return this.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + "/Eventos", evento);
    };
    MeusEventosService.prototype.removerEvento = function (eventoId) {
        return this.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + "/Eventos/" + eventoId);
    };
    MeusEventosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], MeusEventosService);
    return MeusEventosService;
}(_base_util_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Nova notícia</h1>\n<div mat-dialog-content>\n  <div class=\"default-grid\">\n    <div class=\"col-4\">\n      <mat-form-field>\n        <input matInput placeholder=\"Título\" id=\"titulo\" name=\"titulo\" [(ngModel)]=\"noticia.titulo\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n      <mat-form-field>\n        <input matInput placeholder=\"Subtítulo\" id=\"subtitulo\" name=\"subtitulo\" [(ngModel)]=\"noticia.subtitulo\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n      <mat-form-field>\n        <input matInput placeholder=\"Autor\" id=\"autor\" name=\"autor\" [(ngModel)]=\"noticia.autor\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-12\">\n      <mat-form-field>\n        <textarea matInput placeholder=\"Texto\" id=\"texto\" name=\"texto\" [(ngModel)]=\"noticia.texto\"></textarea>\n      </mat-form-field>\n    </div>\n  </div>\n</div>\n\n<div class=\"image-input\">\n  <figure class=\"input-data\">\n    <span>\n      <img *ngIf=\"noticia.imagem\" src=\"{{noticia.imagem}}\" alt=\"{{noticia.titulo}}\">\n      <img *ngIf=\"!noticia.imagem\" src=\"/assets/images/noticia-default.jpg\" alt=\"\">\n    </span>\n  </figure>\n\n  <label for=\"foto\"><i class=\"material-icons\">cloud_upload</i> Escolher imagem</label>\n  <input type=\"file\" name=\"foto\" id=\"foto\" (change)=\"handleFileSelect($event)\">\n</div>\n\n<div mat-dialog-actions>\n  <div class=\"text-center\" style=\"width: 100%;\">\n    <button mat-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>\n    <button mat-button color=\"primary\" (click)=\"salvarNoticia()\">Salvar</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: NoticiasAdminDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasAdminDialogComponent", function() { return NoticiasAdminDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _noticias_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../noticias-admin.service */ "./src/app/components/noticias-admin/noticias-admin.service.ts");
/* harmony import */ var _base_vo_noticia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../base/vo/noticia */ "./src/app/base/vo/noticia.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NoticiasAdminDialogComponent = /** @class */ (function () {
    function NoticiasAdminDialogComponent(dialogRef, data, noticiasAdminService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.noticiasAdminService = noticiasAdminService;
        this.noticia = new _base_vo_noticia__WEBPACK_IMPORTED_MODULE_2__["NoticiaVO"]();
    }
    NoticiasAdminDialogComponent.prototype.ngOnInit = function () {
        if (this.data) {
            this.noticia = this.data;
        }
    };
    NoticiasAdminDialogComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    NoticiasAdminDialogComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var base64Header = "data:image/jpeg;base64,";
        var binaryString = readerEvt.target.result;
        this.noticia.imagem = base64Header + btoa(binaryString);
    };
    NoticiasAdminDialogComponent.prototype.salvarNoticia = function () {
        var _this = this;
        this.noticiasAdminService.showLoader();
        if (!this.noticia.dtCriacao) {
            this.noticia.dtCriacao = new Date();
        }
        if (!this.data) {
            this.noticiasAdminService.novaNoticia(this.noticia).subscribe(function (response) {
                _this.noticiasAdminService.hideLoader();
                _this.noticiasAdminService.showSuccess("Notícia criada com sucesso");
                _this.dialogRef.close();
            }, function (error) {
                _this.noticiasAdminService.hideLoader();
                _this.noticiasAdminService.showError("Erro ao criar notícia");
            });
        }
        else {
            this.noticiasAdminService.alterarNoticia(this.noticia).subscribe(function (response) {
                _this.noticiasAdminService.hideLoader();
                _this.noticiasAdminService.showSuccess("Notícia alterada com sucesso");
                _this.dialogRef.close();
            }, function (error) {
                _this.noticiasAdminService.hideLoader();
                _this.noticiasAdminService.showError("Erro ao alterar notícia");
            });
        }
    };
    NoticiasAdminDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-noticias-admin-dialog',
            template: __webpack_require__(/*! ./noticias-admin-dialog.component.html */ "./src/app/components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component.html"),
            styles: [__webpack_require__(/*! ./noticias-admin-dialog.component.css */ "./src/app/components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], _base_vo_noticia__WEBPACK_IMPORTED_MODULE_2__["NoticiaVO"], _noticias_admin_service__WEBPACK_IMPORTED_MODULE_1__["NoticiasAdminService"]])
    ], NoticiasAdminDialogComponent);
    return NoticiasAdminDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component.css":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Remover notícia</h1>\n<div mat-dialog-content>\n  <p style=\"margin: 15px 0;\">Gostaria de remover a notícia \"{{noticia.titulo}}\"?</p>  \n</div>\n\n<div mat-dialog-actions>\n  <div class=\"text-center\" style=\"width: 100%;\">\n    <button mat-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>\n    <button mat-button color=\"primary\" (click)=\"removerNoticia()\">Remover</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: NoticiasAdminRemoverDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasAdminRemoverDialogComponent", function() { return NoticiasAdminRemoverDialogComponent; });
/* harmony import */ var _base_vo_noticia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../base/vo/noticia */ "./src/app/base/vo/noticia.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _noticias_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../noticias-admin.service */ "./src/app/components/noticias-admin/noticias-admin.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NoticiasAdminRemoverDialogComponent = /** @class */ (function () {
    function NoticiasAdminRemoverDialogComponent(dialogRef, data, noticiasAdminService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.noticiasAdminService = noticiasAdminService;
    }
    NoticiasAdminRemoverDialogComponent.prototype.ngOnInit = function () {
        this.noticia = this.data;
    };
    NoticiasAdminRemoverDialogComponent.prototype.removerNoticia = function () {
        var _this = this;
        this.noticiasAdminService.removerNoticia(this.noticia.id).subscribe(function (response) {
            _this.noticiasAdminService.showSuccess("Notícia removida com sucesso!");
            _this.dialogRef.close();
        }, function (error) {
            _this.noticiasAdminService.hideLoader();
            _this.noticiasAdminService.showError("Erro ao remover notícias");
        });
    };
    NoticiasAdminRemoverDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-noticias-admin-remover-dialog',
            template: __webpack_require__(/*! ./noticias-admin-remover-dialog.component.html */ "./src/app/components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component.html"),
            styles: [__webpack_require__(/*! ./noticias-admin-remover-dialog.component.css */ "./src/app/components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _base_vo_noticia__WEBPACK_IMPORTED_MODULE_0__["NoticiaVO"], _noticias_admin_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasAdminService"]])
    ], NoticiasAdminRemoverDialogComponent);
    return NoticiasAdminRemoverDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/noticias-admin/noticias-admin.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/noticias-admin/noticias-admin.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/noticias-admin/noticias-admin.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/noticias-admin/noticias-admin.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"inner-container noticias-admin-container\">\n  <mat-card>\n    <div class=\"default-title-header\">\n      <h3 class=\"default-title\">Configurar Notícias</h3>\n      <button mat-raised-button color=\"primary\" (click)=\"openDialog()\">Nova Notícia</button>\n    </div>\n\n    <table class=\"default-table\">\n      <thead>\n        <tr>\n          <th>Título</th>\n          <th>Subtítulo</th>\n          <th>Autor</th>\n          <th>Data de Criação</th>\n          <th class=\"actions text-center\">Ações</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let noticia of noticias\">\n          <td>{{noticia.titulo}}</td>\n          <td>{{noticia.subtitulo}}</td>\n          <td>{{noticia.autor}}</td>\n          <td>{{noticia.dtCriacao | date:\"dd/MM/yyyy\"}}</td>\n          <td class=\"actions text-center\">\n            <a href=\"javascript:void(0)\" matTooltip=\"Ver notícia\" class=\"blue-text\" (click)=\"detalheNoticiaDialog(noticia)\"><i class=\"material-icons\">remove_red_eye</i></a>\n            <a href=\"javascript:void(0)\" matTooltip=\"Editar notícia\" class=\"green-text\" (click)=\"openDialog(noticia)\"><i class=\"material-icons\">edit</i></a>\n            <a href=\"javascript:void(0)\" matTooltip=\"Remover notícia\" class=\"red-text\" (click)=\"removerNoticiaDialog(noticia)\"><i class=\"material-icons\">cancel</i></a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </mat-card>\n</section>\n"

/***/ }),

/***/ "./src/app/components/noticias-admin/noticias-admin.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/noticias-admin/noticias-admin.component.ts ***!
  \***********************************************************************/
/*! exports provided: NoticiasAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasAdminComponent", function() { return NoticiasAdminComponent; });
/* harmony import */ var _noticias_noticias_detalhe_dialog_noticias_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component */ "./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.ts");
/* harmony import */ var _noticias_admin_remover_dialog_noticias_admin_remover_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticias-admin-remover-dialog/noticias-admin-remover-dialog.component */ "./src/app/components/noticias-admin/noticias-admin-remover-dialog/noticias-admin-remover-dialog.component.ts");
/* harmony import */ var _noticias_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./noticias-admin.service */ "./src/app/components/noticias-admin/noticias-admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _noticias_admin_dialog_noticias_admin_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./noticias-admin-dialog/noticias-admin-dialog.component */ "./src/app/components/noticias-admin/noticias-admin-dialog/noticias-admin-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NoticiasAdminComponent = /** @class */ (function () {
    function NoticiasAdminComponent(dialog, noticiasAdminService) {
        this.dialog = dialog;
        this.noticiasAdminService = noticiasAdminService;
    }
    NoticiasAdminComponent.prototype.ngOnInit = function () {
        this.recuperarNoticias();
    };
    NoticiasAdminComponent.prototype.openDialog = function (noticia) {
        var _this = this;
        if (!noticia) {
            noticia = null;
        }
        var dialogRef = this.dialog.open(_noticias_admin_dialog_noticias_admin_dialog_component__WEBPACK_IMPORTED_MODULE_5__["NoticiasAdminDialogComponent"], {
            data: noticia,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.recuperarNoticias();
        });
    };
    NoticiasAdminComponent.prototype.recuperarNoticias = function () {
        var _this = this;
        this.noticiasAdminService.recuperarNoticias().subscribe(function (response) {
            _this.noticias = response;
        }, function (error) {
            _this.noticiasAdminService.hideLoader();
            _this.noticiasAdminService.showError("Erro ao recuperar notícias");
        });
    };
    NoticiasAdminComponent.prototype.detalheNoticiaDialog = function (noticia) {
        this.dialog.open(_noticias_noticias_detalhe_dialog_noticias_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_0__["NoticiasDetalheDialogComponent"], {
            data: noticia,
            disableClose: true
        });
    };
    NoticiasAdminComponent.prototype.removerNoticiaDialog = function (noticia) {
        var _this = this;
        var dialogRef = this.dialog.open(_noticias_admin_remover_dialog_noticias_admin_remover_dialog_component__WEBPACK_IMPORTED_MODULE_1__["NoticiasAdminRemoverDialogComponent"], {
            data: noticia,
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.recuperarNoticias();
        });
    };
    NoticiasAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-noticias-admin',
            template: __webpack_require__(/*! ./noticias-admin.component.html */ "./src/app/components/noticias-admin/noticias-admin.component.html"),
            styles: [__webpack_require__(/*! ./noticias-admin.component.css */ "./src/app/components/noticias-admin/noticias-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _noticias_admin_service__WEBPACK_IMPORTED_MODULE_2__["NoticiasAdminService"]])
    ], NoticiasAdminComponent);
    return NoticiasAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/noticias-admin/noticias-admin.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/noticias-admin/noticias-admin.service.ts ***!
  \*********************************************************************/
/*! exports provided: NoticiasAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasAdminService", function() { return NoticiasAdminService; });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_util_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../base/util/base.service */ "./src/app/base/util/base.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoticiasAdminService = /** @class */ (function (_super) {
    __extends(NoticiasAdminService, _super);
    function NoticiasAdminService(http, snackBar) {
        var _this = _super.call(this, http, snackBar) || this;
        _this.http = http;
        _this.snackBar = snackBar;
        return _this;
    }
    NoticiasAdminService.prototype.recuperarNoticias = function () {
        return this.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + '/Noticias');
    };
    NoticiasAdminService.prototype.novaNoticia = function (noticia) {
        return this.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/Noticias", noticia);
    };
    NoticiasAdminService.prototype.alterarNoticia = function (noticia) {
        return this.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/Noticias", noticia);
    };
    NoticiasAdminService.prototype.removerNoticia = function (noticiaId) {
        return this.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/Noticias/" + noticiaId);
    };
    NoticiasAdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]])
    ], NoticiasAdminService);
    return NoticiasAdminService;
}(_base_util_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"]));



/***/ }),

/***/ "./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{noticia.titulo}}</h1>\n<div mat-dialog-content>\n  <div class=\"detalhe-noticia-content\">\n    <figure class=\"noticia-data\">\n      <span>\n        <img *ngIf=\"noticia.imagem\" src=\"{{noticia.imagem}}\" alt=\"{{noticia.titulo}}\">\n        <img *ngIf=\"!noticia.imagem\" src=\"/assets/images/noticia-default.jpg\" alt=\"\">\n      </span>\n\n      <figcaption>\n        <b>{{noticia.subtitulo}}</b>\n        <span>{{noticia.autor}} | {{noticia.dtCriacao | date:\"dd/MM/yyyy\"}}</span>\n      </figcaption>\n    </figure>\n\n    <p class=\"noticia-text\">{{noticia.texto}}</p>\n  </div>\n</div>\n\n<div mat-dialog-actions>\n  <div class=\"text-center\" style=\"width: 100%;\">\n    <button mat-button color=\"primary\" (click)=\"dialogRef.close()\">Fechar</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NoticiasDetalheDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasDetalheDialogComponent", function() { return NoticiasDetalheDialogComponent; });
/* harmony import */ var _base_vo_noticia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../base/vo/noticia */ "./src/app/base/vo/noticia.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NoticiasDetalheDialogComponent = /** @class */ (function () {
    function NoticiasDetalheDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.noticia = new _base_vo_noticia__WEBPACK_IMPORTED_MODULE_0__["NoticiaVO"]();
    }
    NoticiasDetalheDialogComponent.prototype.ngOnInit = function () {
        this.noticia = this.data;
    };
    NoticiasDetalheDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-noticias-detalhe-dialog',
            template: __webpack_require__(/*! ./noticias-detalhe-dialog.component.html */ "./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.html"),
            styles: [__webpack_require__(/*! ./noticias-detalhe-dialog.component.css */ "./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _base_vo_noticia__WEBPACK_IMPORTED_MODULE_0__["NoticiaVO"]])
    ], NoticiasDetalheDialogComponent);
    return NoticiasDetalheDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/noticias/noticias.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/noticias/noticias.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/noticias/noticias.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/noticias/noticias.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"inner-container\">\n  <mat-card>\n    <h3 class=\"default-title\">Notícias</h3>\n  </mat-card>\n\n  <div class=\"noticias-list\">\n\n    <div class=\"default-grid\">\n      <div class=\"col-3\" *ngFor=\"let noticia of noticias\">\n          <mat-card>\n            <mat-card-header>\n              <mat-card-title>{{noticia.titulo}}</mat-card-title>\n              <mat-card-subtitle>{{noticia.subtitulo}}</mat-card-subtitle>\n            </mat-card-header>\n            <div mat-card-image>\n              <img *ngIf=\"noticia.imagem\" src=\"{{noticia.imagem}}\" alt=\"{{noticia.titulo}}\">\n              <img *ngIf=\"!noticia.imagem\" src=\"/assets/images/noticia-default.jpg\" alt=\"\">\n            </div>\n            <mat-card-content>\n              <p class=\"multiline-truncate\">\n                {{noticia.texto}}\n              </p>\n            </mat-card-content>\n            <mat-card-actions class=\"text-center\">\n              <button mat-button mat-raised-button color=\"primary\" (click)=\"detalheNoticiaDialog(noticia)\"><i class=\"material-icons\">remove_red_eye</i> Ver mais</button>\n            </mat-card-actions>\n          </mat-card>\n      </div>\n    </div>\n    \n  </div>\n</section>"

/***/ }),

/***/ "./src/app/components/noticias/noticias.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/noticias/noticias.component.ts ***!
  \***********************************************************/
/*! exports provided: NoticiasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function() { return NoticiasComponent; });
/* harmony import */ var _noticias_detalhe_dialog_noticias_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias-detalhe-dialog/noticias-detalhe-dialog.component */ "./src/app/components/noticias/noticias-detalhe-dialog/noticias-detalhe-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _noticias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./noticias.service */ "./src/app/components/noticias/noticias.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent(dialog, noticiasService) {
        this.dialog = dialog;
        this.noticiasService = noticiasService;
    }
    NoticiasComponent.prototype.ngOnInit = function () {
        this.recuperarNoticia();
    };
    NoticiasComponent.prototype.recuperarNoticia = function () {
        var _this = this;
        this.noticiasService.recuperarNoticias().subscribe(function (response) {
            _this.noticias = response;
        }, function (error) {
            _this.noticiasService.hideLoader();
            _this.noticiasService.showError("Erro ao recuperar notícias");
        });
    };
    NoticiasComponent.prototype.detalheNoticiaDialog = function (noticia) {
        this.dialog.open(_noticias_detalhe_dialog_noticias_detalhe_dialog_component__WEBPACK_IMPORTED_MODULE_0__["NoticiasDetalheDialogComponent"], {
            data: noticia,
            disableClose: true
        });
    };
    NoticiasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-noticias',
            template: __webpack_require__(/*! ./noticias.component.html */ "./src/app/components/noticias/noticias.component.html"),
            styles: [__webpack_require__(/*! ./noticias.component.css */ "./src/app/components/noticias/noticias.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _noticias_service__WEBPACK_IMPORTED_MODULE_3__["NoticiasService"]])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "./src/app/components/noticias/noticias.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/noticias/noticias.service.ts ***!
  \*********************************************************/
/*! exports provided: NoticiasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticiasService", function() { return NoticiasService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_util_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../base/util/base.service */ "./src/app/base/util/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NoticiasService = /** @class */ (function (_super) {
    __extends(NoticiasService, _super);
    function NoticiasService(http, snackBar) {
        var _this = _super.call(this, http, snackBar) || this;
        _this.http = http;
        _this.snackBar = snackBar;
        return _this;
    }
    NoticiasService.prototype.recuperarNoticias = function () {
        return this.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/Noticias');
    };
    NoticiasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], NoticiasService);
    return NoticiasService;
}(_base_util_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/components/perfil/perfil-dialog/perfil-dialog.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/perfil/perfil-dialog/perfil-dialog.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/perfil/perfil-dialog/perfil-dialog.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/perfil/perfil-dialog/perfil-dialog.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Editar perfil</h1>\n<div mat-dialog-content>\n  <div class=\"default-grid\">\n    <div class=\"col-4\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Nome Completo\" id=\"nome\" name=\"nome\" [(ngModel)]=\"pessoa.nome\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-4\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"number\" placeholder=\"Idade\" id=\"idade\" name=\"idade\" [(ngModel)]=\"pessoa.idade\">\n      </mat-form-field>\n    </div>\n    <div class=\"col-4\">          \n      <mat-form-field>\n        <mat-select placeholder=\"Tipo de esportista\" id=\"tipoEsportista\" name=\"tipoEsportista\" [(ngModel)]=\"pessoa.tipoEsportista\">\n          <mat-option value=\"Corredor\">\n            Corredor\n          </mat-option>\n          <mat-option value=\"Caminhante\">\n            Caminhante\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n    </div>\n  </div>\n</div>\n\n<div class=\"image-input\">\n  <figure class=\"input-data\">\n    <span>\n      <img *ngIf=\"pessoa.foto\" src=\"{{pessoa.foto}}\" alt=\"{{pessoa.nome}}\">\n      <img *ngIf=\"!pessoa.foto\" src=\"/assets/images/avatar.png\" alt=\"\">\n    </span>\n  </figure>\n\n  <label for=\"foto\"><i class=\"material-icons\">cloud_upload</i> Escolher imagem</label>\n  <input type=\"file\" name=\"foto\" id=\"foto\" (change)=\"handleFileSelect($event)\">\n</div>\n\n<div mat-dialog-actions>\n  <div class=\"text-center\" style=\"width: 100%;\">\n    <button mat-button color=\"warn\" (click)=\"dialogRef.close()\">Cancelar</button>\n    <button mat-button color=\"primary\" (click)=\"atualizarPessoa()\">Salvar</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/perfil/perfil-dialog/perfil-dialog.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/perfil/perfil-dialog/perfil-dialog.component.ts ***!
  \****************************************************************************/
/*! exports provided: PerfilDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilDialogComponent", function() { return PerfilDialogComponent; });
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../perfil.service */ "./src/app/components/perfil/perfil.service.ts");
/* harmony import */ var _base_vo_pessoa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../base/vo/pessoa */ "./src/app/base/vo/pessoa.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PerfilDialogComponent = /** @class */ (function () {
    function PerfilDialogComponent(dialogRef, data, perfilService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.perfilService = perfilService;
    }
    PerfilDialogComponent.prototype.ngOnInit = function () {
        this.pessoa = this.data;
    };
    PerfilDialogComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    PerfilDialogComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var base64Header = "data:image/jpeg;base64,";
        var binaryString = readerEvt.target.result;
        this.pessoa.foto = base64Header + btoa(binaryString);
    };
    PerfilDialogComponent.prototype.atualizarPessoa = function () {
        var _this = this;
        this.perfilService.showLoader();
        this.perfilService.atualizarPessoa(this.pessoa).subscribe(function (response) {
            _this.perfilService.hideLoader();
            _this.perfilService.showSuccess("Usuário atualizado com sucesso");
            _this.dialogRef.close();
            location.reload();
        }, function (error) {
            _this.perfilService.hideLoader();
            _this.perfilService.showError("Erro ao atualizar usuário");
        });
    };
    PerfilDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-perfil-dialog',
            template: __webpack_require__(/*! ./perfil-dialog.component.html */ "./src/app/components/perfil/perfil-dialog/perfil-dialog.component.html"),
            styles: [__webpack_require__(/*! ./perfil-dialog.component.css */ "./src/app/components/perfil/perfil-dialog/perfil-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], _base_vo_pessoa__WEBPACK_IMPORTED_MODULE_1__["PessoaVO"], _perfil_service__WEBPACK_IMPORTED_MODULE_0__["PerfilService"]])
    ], PerfilDialogComponent);
    return PerfilDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil/perfil.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/perfil/perfil.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"inner-container perfil-container\">\n\n  <div class=\"default-grid\">\n    <div class=\"col-4\">\n      <mat-card class=\"user-image\">\n        <figure>\n          <img *ngIf=\"pessoa.foto\" src=\"{{pessoa.foto}}\" alt=\"{{pessoa.nome}}\">\n          <img *ngIf=\"!pessoa.foto\" src=\"/assets/images/avatar.png\" alt=\"\">\n        </figure>\n      </mat-card>\n    </div>\n\n    <div class=\"col-8\">\n      <mat-card class=\"user-data\">\n\n        <div class=\"default-grid\">\n          <div class=\"col-8\">\n            <h4>{{pessoa.nome}}</h4>\n            <mat-list role=\"list\">\n              <mat-list-item role=\"listitem\">Nome completo: <b>{{pessoa.nome}}</b></mat-list-item>\n              <mat-list-item role=\"listitem\">Idade: <b>{{pessoa.idade}} anos</b></mat-list-item>\n              <mat-list-item role=\"listitem\">Tipo de esportista: <b>{{pessoa.tipoEsportista}}</b></mat-list-item>\n            </mat-list>\n          </div>\n          <div class=\"col-4\">\n            <button mat-fab color=\"primary\" (click)=\"openDialog()\"><i class=\"material-icons\">edit</i></button>\n          </div>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/components/perfil/perfil.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/perfil/perfil.component.ts ***!
  \*******************************************************/
/*! exports provided: PerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilComponent", function() { return PerfilComponent; });
/* harmony import */ var _base_vo_pessoa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../base/vo/pessoa */ "./src/app/base/vo/pessoa.ts");
/* harmony import */ var _perfil_dialog_perfil_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil-dialog/perfil-dialog.component */ "./src/app/components/perfil/perfil-dialog/perfil-dialog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _perfil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perfil.service */ "./src/app/components/perfil/perfil.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerfilComponent = /** @class */ (function () {
    function PerfilComponent(dialog, perfilService) {
        this.dialog = dialog;
        this.perfilService = perfilService;
        this.pessoa = new _base_vo_pessoa__WEBPACK_IMPORTED_MODULE_0__["PessoaVO"]();
    }
    PerfilComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("currentUser")) {
            this.recuperarPessoa();
        }
    };
    PerfilComponent.prototype.recuperarPessoa = function () {
        var _this = this;
        this.perfilService.recuperarPessoa().subscribe(function (response) {
            _this.pessoa = response;
        }, function (error) {
            _this.perfilService.hideLoader();
            _this.perfilService.showError("Erro ao recuperar usuário");
        });
    };
    PerfilComponent.prototype.openDialog = function () {
        this.dialog.open(_perfil_dialog_perfil_dialog_component__WEBPACK_IMPORTED_MODULE_1__["PerfilDialogComponent"], {
            data: this.pessoa,
            disableClose: true
        });
    };
    PerfilComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-perfil',
            template: __webpack_require__(/*! ./perfil.component.html */ "./src/app/components/perfil/perfil.component.html"),
            styles: [__webpack_require__(/*! ./perfil.component.css */ "./src/app/components/perfil/perfil.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _perfil_service__WEBPACK_IMPORTED_MODULE_4__["PerfilService"]])
    ], PerfilComponent);
    return PerfilComponent;
}());



/***/ }),

/***/ "./src/app/components/perfil/perfil.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/perfil/perfil.service.ts ***!
  \*****************************************************/
/*! exports provided: PerfilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilService", function() { return PerfilService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_util_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../base/util/base.service */ "./src/app/base/util/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PerfilService = /** @class */ (function (_super) {
    __extends(PerfilService, _super);
    function PerfilService(http, snackBar) {
        var _this = _super.call(this, http, snackBar) || this;
        _this.http = http;
        _this.snackBar = snackBar;
        return _this;
    }
    PerfilService.prototype.recuperarPessoa = function () {
        var curUserId = JSON.parse(localStorage.getItem('currentUser')).userId;
        var query = JSON.stringify({ "where": { "userId": { "like": curUserId } } });
        return this.get(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + '/Pessoas/findOne?filter=' + query);
    };
    PerfilService.prototype.atualizarPessoa = function (pessoa) {
        return this.put(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + "/Pessoas", pessoa);
    };
    PerfilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], PerfilService);
    return PerfilService;
}(_base_util_base_service__WEBPACK_IMPORTED_MODULE_3__["BaseService"]));



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"access-page\">\n\n  <mat-card class=\"form-container\">\n\n    <figure class=\"logo-image\">\n      <img src=\"/assets/images/logo.png\" alt=\"FollowUs\" />\n\n      <figcaption>\n        Follow Us\n      </figcaption>\n    </figure>\n\n    <form class=\"content-form\">\n      <mat-form-field>\n        <input type=\"text\" id=\"nome\" name=\"nome\" matInput placeholder=\"Nome completo\" [(ngModel)]=\"pessoa.nome\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"number\" id=\"idade\" name=\"idade\" matInput placeholder=\"Idade\" [(ngModel)]=\"pessoa.idade\">\n      </mat-form-field>\n      <mat-form-field>\n        <mat-select id=\"tipoEsportista\" name=\"tipoEsportista\" placeholder=\"Tipo de esportista\" [(ngModel)]=\"pessoa.tipoEsportista\">\n          <mat-option value=\"Corredor\">\n            Corredor\n          </mat-option>\n          <mat-option value=\"Caminhante\">\n            Caminhante\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"email\" id=\"email\" name=\"email\" matInput placeholder=\"E-mail\" [(ngModel)]=\"user.email\">\n      </mat-form-field>\n      <mat-form-field>\n        <input type=\"password\" id=\"password\" name=\"password\" matInput placeholder=\"Senha\" [(ngModel)]=\"user.password\">\n      </mat-form-field>\n      <button mat-raised-button class=\"action-button\" color=\"primary\" (click)=\"novoUsuario()\">Cadastrar</button>\n      <p class=\"signup-text\">ou <a routerLink=\"/login\">clique aqui</a> e acesse o site</p>\n    </form>\n\n  </mat-card>\n\n</section>"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _base_util_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../base/util/auth.service */ "./src/app/base/util/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _base_vo_pessoa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/vo/pessoa */ "./src/app/base/vo/pessoa.ts");
/* harmony import */ var _base_vo_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base/vo/usuario */ "./src/app/base/vo/usuario.ts");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup.service */ "./src/app/components/signup/signup.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = /** @class */ (function () {
    function SignupComponent(signupService, router, authService) {
        this.signupService = signupService;
        this.router = router;
        this.authService = authService;
        this.user = new _base_vo_usuario__WEBPACK_IMPORTED_MODULE_3__["UsuarioVO"]();
        this.pessoa = new _base_vo_pessoa__WEBPACK_IMPORTED_MODULE_2__["PessoaVO"]();
    }
    SignupComponent.prototype.ngOnInit = function () {
        if (this.authService.canActivate()) {
            this.router.navigate(['/dashboard']);
        }
    };
    SignupComponent.prototype.novoUsuario = function () {
        var _this = this;
        this.signupService.showLoader();
        this.signupService.criarUsuario(this.user).subscribe(function (response) {
            _this.pessoa.userId = response.id;
            _this.signupService.criarPessoa(_this.pessoa).subscribe(function (response) {
                _this.signupService.hideLoader();
                _this.signupService.showSuccess("Usuário criado com sucesso");
                _this.router.navigate(['/']);
            }, function (error) {
                _this.signupService.hideLoader();
                _this.signupService.showError("Erro ao criar usuário");
            });
        }, function (error) {
            _this.signupService.hideLoader();
            _this.signupService.showError("Erro ao criar usuário");
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_4__["SignupService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _base_util_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/signup/signup.service.ts ***!
  \*****************************************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _base_util_base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/util/base.service */ "./src/app/base/util/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupService = /** @class */ (function (_super) {
    __extends(SignupService, _super);
    function SignupService(http, snackBar) {
        var _this = _super.call(this, http, snackBar) || this;
        _this.http = http;
        _this.snackBar = snackBar;
        return _this;
    }
    SignupService.prototype.criarUsuario = function (user) {
        return this.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + "/Users", user);
    };
    SignupService.prototype.criarPessoa = function (pessoa) {
        return this.post(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].baseUrl + "/Pessoas", pessoa);
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SignupService);
    return SignupService;
}(_base_util_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"]));



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cris\Documents\opt\pessoal\followus-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map