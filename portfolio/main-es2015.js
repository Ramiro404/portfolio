(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _habilidades_tecnicas_habilidades_tecnicas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./habilidades-tecnicas/habilidades-tecnicas.component */ "./src/app/habilidades-tecnicas/habilidades-tecnicas.component.ts");
/* harmony import */ var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proyectos/proyectos.component */ "./src/app/proyectos/proyectos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc  Web development.
     * @meaning Presentation title
     */ 
    const MSG_EXTERNAL_webDevelopment$$SRC_APP_APP_COMPONENT_TS_1 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_0 = MSG_EXTERNAL_webDevelopment$$SRC_APP_APP_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:Presentation title | Web development.@@webDevelopment␟090fd1a2fc49db5abd25f4cfaeb7effb49f96170␟89629791424469825:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
}
function AppComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r2);
} }
class AppComponent {
    constructor(translate) {
        this.translate = translate;
        this.title = 'portfolio';
        translate.addLangs(['es', 'en']);
        translate.setDefaultLang('es');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 74, vars: 28, consts: [[1, "contenedor"], [1, "caja", "navegacion"], [1, "contenedor-flex"], [1, "subcontenedor-flex"], ["src", "../assets/logo.png", "alt", "Logo, Robot, Future", 1, "logo"], [1, "subcontenedor-flex", "lenguaje"], [1, "seleccionar-idioma", 3, "change"], ["langselect", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "caja", "presentacion"], [1, "contenedor-presentacion"], [1, "titulo"], ["id", "desarrollo-web"], [1, "caja", "menu"], [1, "contenedor-menu"], [1, "lista-menu"], [1, "elemento-menu"], ["href", "#quien-soy", "routerLinkActive", "activo"], ["href", "#habilidades-tecnicas", "routerLinkActive", "activo"], ["href", "#proyectos", "routerLinkActive", "activo"], ["href", "#contacto", "routerLinkActive", "activo"], [1, "caja", "contenido"], [1, "contenedor-principal"], ["id", "quien-soy", 1, "quien-soy"], ["src", "../assets/perfil.png", "alt", "Ramiro De La Cruz Navarro", 1, "img-foto-perfil"], ["id", "habilidades-tecnicas", 1, "habilidades"], ["id", "proyectos", 1, "caja", "proyectos"], [1, "contenedor-proyectos"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered", "modal-xl"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["src", "../assets/project-1.png", "alt", "Hotel Pousada Sandi", 1, "img-fluid"], ["id", "contacto", 1, "caja", "pie-pagina"], [1, "contenedor-pie-pagina"], [1, "contenido-enlaces"], ["href", "https://www.linkedin.com/in/ramiro-de-la-cruz-navarro/", "target", "_blank", 1, "enlace-linkedin"], [1, "fab", "fa-linkedin"], ["href", "https://github.com/Ramiro404", "target", "_blank", 1, "enlace-github"], [1, "fab", "fa-github"], [3, "value"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.translate.use(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_option_8_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ramiro De La Cruz Navarro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](14, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "app-habilidades-tecnicas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-proyectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Pousada Sandi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " \u00A9 Copyright 2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, "HOME.OFFICE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 12, "ME.QUESTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 14, "TECHNICAL_SKILLS.TECH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 16, "PROJECTS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 18, "HOME.CONTACT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 20, "ME.QUESTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 22, "ME.DESCRIPTION"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 24, "ME.MY_WORK"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 26, "HOME.MORE_INFO"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _habilidades_tecnicas_habilidades_tecnicas_component__WEBPACK_IMPORTED_MODULE_4__["HabilidadesTecnicasComponent"], _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_5__["ProyectosComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: ["@charset \"UTF-8\";\n.contenedor[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 20% 80%;\n  background-color: var(--tial-claro);\n}\n.caja[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n.navegacion[_ngcontent-%COMP%], .presentacion[_ngcontent-%COMP%], .formulario[_ngcontent-%COMP%], .pie-pagina[_ngcontent-%COMP%] {\n  grid-column-start: 1;\n  grid-column-end: 3;\n}\n.menu[_ngcontent-%COMP%] {\n  grid-row-start: 3;\n  grid-row-end: 5;\n}\n.contenedor-menu[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0.5rem;\n}\n.contenedor-flex[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 0.5rem;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.boton[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0.9rem 1.8rem;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  cursor: pointer;\n}\n.boton-navegacion[_ngcontent-%COMP%], ul.lista-menu[_ngcontent-%COMP%], .contenido-enlaces[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], select[_ngcontent-%COMP%], .contenedor-principal[_ngcontent-%COMP%], .contenedor-proyectos[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.contenedor-presentacion[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n.contenedor-presentacion[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40rem;\n  display: grid;\n  place-items: center;\n  place-content: center;\n  background: linear-gradient(135deg, var(--gradiente-1), var(--gradiente-2)), url('fondo.jpg') no-repeat center center/cover;\n  background-attachment: fixed;\n}\n.contenedor-presentacion[_ngcontent-%COMP%]    > .titulo[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 2rem;\n  font-weight: 300;\n}\n#desarrollo-web[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\nul.lista-menu[_ngcontent-%COMP%] {\n  list-style-type: none;\n  width: 100%;\n}\nli.elemento-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5rem 1rem;\n  text-decoration: none;\n}\nli.elemento-menu[_ngcontent-%COMP%]   a.activo[_ngcontent-%COMP%], .activo[_ngcontent-%COMP%] {\n  color: var(--tial-fuerte);\n}\nli.elemento-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.activo) {\n  background-color: #c9c9c9;\n}\n.pie-pagina[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.contenido[_ngcontent-%COMP%], .menu[_ngcontent-%COMP%], .proyectos[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n}\n.contenedor-principal[_ngcontent-%COMP%], .contenedor-proyectos[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n\n.img-foto-perfil[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: var(--img-tama\u00F1o);\n  height: var(--img-tama\u00F1o);\n  display: block;\n  margin: 0 auto;\n}\nli.elemento-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .enlace-github[_ngcontent-%COMP%], li.elemento-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.activo), .boton-navegacion[_ngcontent-%COMP%] {\n  color: #000;\n}\na.linkedin[_ngcontent-%COMP%]:link, a.linkedin[_ngcontent-%COMP%]:visited {\n  background-color: rgba(255, 255, 255, 0.9);\n  padding: 0.9rem 2.1rem;\n  text-align: center;\n  text-decoration: none;\n}\na.linkedin[_ngcontent-%COMP%]:hover, a.linkedin[_ngcontent-%COMP%]:active {\n  background-color: rgba(255, 255, 255, 0.7);\n}\n.contenedor-pie-pagina[_ngcontent-%COMP%] {\n  margin: 2rem 0 0.5rem 0;\n}\n.contenido-enlaces[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.contenido-enlaces[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0.5rem;\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  font-size: 2rem;\n}\n.enlace-linkedin[_ngcontent-%COMP%] {\n  color: #0077b5;\n}\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  right: 0;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #f1f1f1;\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n.dropdown[_ngcontent-%COMP%]:hover   .dropbtn[_ngcontent-%COMP%] {\n  background-color: #3e8e41;\n}\n#boton-inicio[_ngcontent-%COMP%], #boton-proyecto[_ngcontent-%COMP%] {\n  display: none;\n}\n.seleccionar-idioma[_ngcontent-%COMP%], option[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.7rem;\n}\n.lenguaje[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  right: 0.5rem;\n}\nselect[_ngcontent-%COMP%] {\n  border: none;\n}\nselect[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.lenguaje[_ngcontent-%COMP%]::after {\n  content: \"\u25BE\";\n  display: table-cell;\n  text-align: center;\n  background-color: #d9d9d9;\n  position: absolute;\n  pointer-events: none;\n}\nol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n.logo[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: auto;\n}\n@media only screen and (max-width: 768px) {\n  .navegacion[_ngcontent-%COMP%], .presentacion[_ngcontent-%COMP%], .formulario[_ngcontent-%COMP%], .pie-pagina[_ngcontent-%COMP%], .contenido[_ngcontent-%COMP%], .proyectos[_ngcontent-%COMP%] {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n\n  .menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .img-presentacion[_ngcontent-%COMP%] {\n    height: 20rem;\n  }\n}\n@media only screen and (max-width: 460px) {\n  .contenedor-presentacion[_ngcontent-%COMP%] {\n    background: linear-gradient(135deg, var(--gradiente-1), var(--gradiente-2)), url('fondo-mobile.jpg') no-repeat center center/cover;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcVXNlcnNcXHJhbWlyXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcQ3Vyc28gQ1NTXFxOdWV2YSBjYXJwZXRhXFxwb3J0Zm9saW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtBREVKO0FDQ0E7RUFBTyxlQUFBO0FER1A7QUNEQTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QURJSjtBQ0RBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FESUo7QUNEQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBRElKO0FDREE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FESUo7QUNEQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURJSjtBQ0RBO0VBQ0ksdUJBQUE7QURJSjtBQ0RBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBRElKO0FDREE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDSCxtQkFBQTtFQUNBLHFCQUFBO0VBQ0csMkhBQUE7RUFDQSw0QkFBQTtBRElKO0FDREE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FESUo7QUNEQTtFQUFpQixlQUFBO0FES2pCO0FDSEE7RUFBSSxxQkFBQTtBRE9KO0FDTEE7RUFDSSxxQkFBQTtFQUNBLFdBQUE7QURRSjtBQ0xBO0VBQ0ksY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QURRSjtBQ0xBO0VBQXFDLHlCQUFBO0FEU3JDO0FDUEE7RUFDSSx5QkFBQTtBRFVKO0FDUEE7RUFBYSxrQkFBQTtBRFdiO0FDVEE7RUFDSSxlQUFBO0FEWUo7QUNUQTtFQUNJLGFBQUE7QURZSjtBQ1ZBOzs7RUFBQTtBQUtBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QURZSjtBQ1RBO0VBQ0ksV0FBQTtBRFlKO0FDVEE7RUFDSSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBRFlKO0FDVEE7RUFDSSwwQ0FBQTtBRFlKO0FDVEE7RUFBd0IsdUJBQUE7QURheEI7QUNYQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FEY0o7QUNYQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRGNKO0FDWEE7RUFBa0IsY0FBQTtBRGVsQjtBQ2JBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBRGdCSjtBQ2JFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7QURnQko7QUNiRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FEZ0JKO0FDYkU7RUFBMkIseUJBQUE7QURpQjdCO0FDZkU7RUFDRSxjQUFBO0FEa0JKO0FDZkU7RUFBMkIseUJBQUE7QURtQjdCO0FDakJFO0VBQ0ksYUFBQTtBRG9CTjtBQ2pCRTtFQUNJLHNCQUFBO0FEb0JOO0FDakJFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QURvQko7QUNqQkU7RUFDRSxZQUFBO0FEb0JKO0FDbEJDO0VBQWMsYUFBQTtBRHNCZjtBQ3BCQztFQUNHLFlBQUE7RUFDSCxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FEdUJEO0FDcEJBO0VBQVEsZUFBQTtBRHdCUjtBQ3RCQztFQUNJLGFBQUE7RUFDQSxZQUFBO0FEeUJMO0FDckJFO0VBQ0U7SUFDSSxvQkFBQTtJQUNBLGtCQUFBO0VEd0JOOztFQ3JCRTtJQUFPLGFBQUE7RUR5QlQ7O0VDdkJFO0lBQW9CLGFBQUE7RUQyQnRCO0FBQ0Y7QUN2QkU7RUFDSTtJQUNFLGtJQUFBO0VEeUJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGlhbC1jbGFybyk7XG59XG5cbi5jYWphIHtcbiAgcGFkZGluZzogMXJlbSAwO1xufVxuXG4ubmF2ZWdhY2lvbiwgLnByZXNlbnRhY2lvbiwgLmZvcm11bGFyaW8sIC5waWUtcGFnaW5hIHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuLm1lbnUge1xuICBncmlkLXJvdy1zdGFydDogMztcbiAgZ3JpZC1yb3ctZW5kOiA1O1xufVxuXG4uY29udGVuZWRvci1tZW51IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwLjVyZW07XG59XG5cbi5jb250ZW5lZG9yLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYm90b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAuOXJlbSAxLjhyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJvdG9uLW5hdmVnYWNpb24sIHVsLmxpc3RhLW1lbnUsIC5jb250ZW5pZG8tZW5sYWNlcyBhLCBzZWxlY3QsIC5jb250ZW5lZG9yLXByaW5jaXBhbCwgLmNvbnRlbmVkb3ItcHJveWVjdG9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jb250ZW5lZG9yLXByZXNlbnRhY2lvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVuZWRvci1wcmVzZW50YWNpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1ncmFkaWVudGUtMSksIHZhcigtLWdyYWRpZW50ZS0yKSksIHVybChcIi4uL2Fzc2V0cy9mb25kby5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG59XG5cbi5jb250ZW5lZG9yLXByZXNlbnRhY2lvbiA+IC50aXR1bG8ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuI2Rlc2Fycm9sbG8td2ViIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxudWwubGlzdGEtbWVudSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmxpLmVsZW1lbnRvLW1lbnUgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5saS5lbGVtZW50by1tZW51IGEuYWN0aXZvLCAuYWN0aXZvIHtcbiAgY29sb3I6IHZhcigtLXRpYWwtZnVlcnRlKTtcbn1cblxubGkuZWxlbWVudG8tbWVudSBhOmhvdmVyOm5vdCguYWN0aXZvKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk7XG59XG5cbi5waWUtcGFnaW5hIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVuaWRvLCAubWVudSwgLnByb3llY3RvcyB7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuLmNvbnRlbmVkb3ItcHJpbmNpcGFsLCAuY29udGVuZWRvci1wcm95ZWN0b3Mge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4vKlxuLmNvbnRlbmVkb3ItbWVudSwgLmNvbnRlbmVkb3ItcHJpbmNpcGFsLCAuY29udGVuZWRvci1wcm95ZWN0b3N7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn0qL1xuLmltZy1mb3RvLXBlcmZpbCB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IHZhcigtLWltZy10YW1hw7FvKTtcbiAgaGVpZ2h0OiB2YXIoLS1pbWctdGFtYcOxbyk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxubGkuZWxlbWVudG8tbWVudSBhLCAuZHJvcGRvd24tY29udGVudCBhLCAuZW5sYWNlLWdpdGh1YiwgbGkuZWxlbWVudG8tbWVudSBhOmhvdmVyOm5vdCguYWN0aXZvKSwgLmJvdG9uLW5hdmVnYWNpb24ge1xuICBjb2xvcjogIzAwMDtcbn1cblxuYS5saW5rZWRpbjpsaW5rLCBhLmxpbmtlZGluOnZpc2l0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIHBhZGRpbmc6IDAuOXJlbSAyLjFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hLmxpbmtlZGluOmhvdmVyLCBhLmxpbmtlZGluOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbn1cblxuLmNvbnRlbmVkb3ItcGllLXBhZ2luYSB7XG4gIG1hcmdpbjogMnJlbSAwIDAuNXJlbSAwO1xufVxuXG4uY29udGVuaWRvLWVubGFjZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbmlkby1lbmxhY2VzIGEge1xuICBtYXJnaW46IDAuNXJlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5lbmxhY2UtbGlua2VkaW4ge1xuICBjb2xvcjogIzAwNzdiNTtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgbWluLXdpZHRoOiAxNjBweDtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbn1cblxuI2JvdG9uLWluaWNpbywgI2JvdG9uLXByb3llY3RvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlbGVjY2lvbmFyLWlkaW9tYSwgb3B0aW9uIHtcbiAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcbn1cblxuLmxlbmd1YWplIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMC41cmVtO1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5sZW5ndWFqZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKWvlwiO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbm9sLCB1bCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmxvZ28ge1xuICB3aWR0aDogMy41cmVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmVnYWNpb24sIC5wcmVzZW50YWNpb24sIC5mb3JtdWxhcmlvLCAucGllLXBhZ2luYSwgLmNvbnRlbmlkbywgLnByb3llY3RvcyB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICB9XG5cbiAgLm1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuaW1nLXByZXNlbnRhY2lvbiB7XG4gICAgaGVpZ2h0OiAyMHJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NjBweCkge1xuICAuY29udGVuZWRvci1wcmVzZW50YWNpb24ge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWdyYWRpZW50ZS0xKSwgdmFyKC0tZ3JhZGllbnRlLTIpKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbmRvLW1vYmlsZS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG4gIH1cbn0iLCIuY29udGVuZWRvcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwJSA4MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aWFsLWNsYXJvKTtcclxufVxyXG5cclxuLmNhamF7IHBhZGRpbmc6IDFyZW0gMDsgfVxyXG5cclxuLm5hdmVnYWNpb24sIC5wcmVzZW50YWNpb24sIC5mb3JtdWxhcmlvLCAucGllLXBhZ2luYXsgXHJcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxufVxyXG5cclxuLm1lbnV7IFxyXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDM7XHJcbiAgICBncmlkLXJvdy1lbmQ6IDU7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLW1lbnV7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYm90b24ge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogMC45cmVtIDEuOHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJvdG9uLW5hdmVnYWNpb24sIHVsLmxpc3RhLW1lbnUsIC5jb250ZW5pZG8tZW5sYWNlcyBhLCBzZWxlY3QsIC5jb250ZW5lZG9yLXByaW5jaXBhbCwgLmNvbnRlbmVkb3ItcHJveWVjdG9ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLXByZXNlbnRhY2lvbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItcHJlc2VudGFjaW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcmVtO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuXHRwbGFjZS1pdGVtczogY2VudGVyO1xyXG5cdHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWdyYWRpZW50ZS0xKSwgdmFyKC0tZ3JhZGllbnRlLTIpKSwgdXJsKCcuLi9hc3NldHMvZm9uZG8uanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IFxyXG59XHJcblxyXG4uY29udGVuZWRvci1wcmVzZW50YWNpb24gPiAudGl0dWxvIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbiNkZXNhcnJvbGxvLXdlYnsgZm9udC1zaXplOiAzcmVtOyB9XHJcblxyXG51bHsgbGlzdC1zdHlsZS10eXBlOiBub25lOyB9XHJcblxyXG51bC5saXN0YS1tZW51e1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbmxpLmVsZW1lbnRvLW1lbnUgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5saS5lbGVtZW50by1tZW51IGEuYWN0aXZvLCAuYWN0aXZvIHsgY29sb3I6IHZhcigtLXRpYWwtZnVlcnRlKTsgfVxyXG5cclxubGkuZWxlbWVudG8tbWVudSBhOmhvdmVyOm5vdCguYWN0aXZvKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjOWM5Yzk7XHJcbn1cclxuXHJcbi5waWUtcGFnaW5heyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cclxuXHJcbi5jb250ZW5pZG8sIC5tZW51LCAucHJveWVjdG9zIHtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxufVxyXG5cclxuLmNvbnRlbmVkb3ItcHJpbmNpcGFsLCAuY29udGVuZWRvci1wcm95ZWN0b3N7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcbi8qXHJcbi5jb250ZW5lZG9yLW1lbnUsIC5jb250ZW5lZG9yLXByaW5jaXBhbCwgLmNvbnRlbmVkb3ItcHJveWVjdG9ze1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufSovXHJcblxyXG4uaW1nLWZvdG8tcGVyZmlse1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IHZhcigtLWltZy10YW1hw7FvKTtcclxuICAgIGhlaWdodDogdmFyKC0taW1nLXRhbWHDsW8pO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxubGkuZWxlbWVudG8tbWVudSBhLCAuZHJvcGRvd24tY29udGVudCBhLCAuZW5sYWNlLWdpdGh1YiwgbGkuZWxlbWVudG8tbWVudSBhOmhvdmVyOm5vdCguYWN0aXZvKSwgLmJvdG9uLW5hdmVnYWNpb24ge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbmEubGlua2VkaW46bGluaywgYS5saW5rZWRpbjp2aXNpdGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgcGFkZGluZzogMC45cmVtIDIuMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuYS5saW5rZWRpbjpob3ZlciwgYS5saW5rZWRpbjphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XHJcbn1cclxuXHJcbi5jb250ZW5lZG9yLXBpZS1wYWdpbmF7IG1hcmdpbjogMnJlbSAwIDAuNXJlbSAwO31cclxuXHJcbi5jb250ZW5pZG8tZW5sYWNlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVuaWRvLWVubGFjZXMgYXtcclxuICAgIG1hcmdpbjogMC41cmVtO1xyXG4gICAgd2lkdGg6IDNyZW07XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbi5lbmxhY2UtbGlua2VkaW57IGNvbG9yOiByZ2IoMCwgMTE5LCAxODEpOyB9XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICBcclxuICAuZHJvcGRvd24tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgbWluLXdpZHRoOiAxNjBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMX1cclxuICBcclxuICAuZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcm9wZG93bjpob3ZlciAuZHJvcGJ0biB7IGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7ICB9XHJcblxyXG4gICNib3Rvbi1pbmljaW8sICNib3Rvbi1wcm95ZWN0b3tcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zZWxlY2Npb25hci1pZGlvbWEsIG9wdGlvbntcclxuICAgICAgcGFkZGluZzogMC40cmVtIDAuN3JlbTtcclxuICB9XHJcblxyXG4gIC5sZW5ndWFqZXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICBzZWxlY3Qge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gfVxyXG4gc2VsZWN0OmZvY3VzeyBvdXRsaW5lOiBub25lO31cclxuICAgIFxyXG4gLmxlbmd1YWplOjphZnRlcntcclxuICAgIGNvbnRlbnQ6XCJcXDAyNWJlXCI7XHJcblx0ZGlzcGxheTp0YWJsZS1jZWxsO1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6I2Q5ZDlkOTtcclxuXHRwb3NpdGlvbjphYnNvbHV0ZTtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuIH1cclxuXHJcbm9sLCB1bCB7cGFkZGluZy1sZWZ0OiAwO31cclxuXHJcbiAubG9nb3tcclxuICAgICB3aWR0aDogMy41cmVtO1xyXG4gICAgIGhlaWdodDogYXV0bztcclxuICAgICBcclxuIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAubmF2ZWdhY2lvbiwgLnByZXNlbnRhY2lvbiwgLmZvcm11bGFyaW8sIC5waWUtcGFnaW5hLCAuY29udGVuaWRvLCAucHJveWVjdG9ze1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLWVuZDogMztcclxuICAgIH1cclxuXHJcbiAgICAubWVudXsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuICAgIC5pbWctcHJlc2VudGFjaW9uIHsgaGVpZ2h0OiAyMHJlbTsgfVxyXG5cclxuICAgIFxyXG4gIH0gIFxyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KXtcclxuICAgICAgLmNvbnRlbmVkb3ItcHJlc2VudGFjaW9ue1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWdyYWRpZW50ZS0xKSwgdmFyKC0tZ3JhZGllbnRlLTIpKSwgdXJsKCcuLi9hc3NldHMvZm9uZG8tbW9iaWxlLmpwZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proyectos/proyectos.component */ "./src/app/proyectos/proyectos.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_formulario_contacto_formulario_contacto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/formulario-contacto/formulario-contacto.component */ "./src/app/formulario-contacto/formulario-contacto.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _servicios_contacto_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./servicios/contacto.service */ "./src/app/servicios/contacto.service.ts");
/* harmony import */ var _habilidades_tecnicas_habilidades_tecnicas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./habilidades-tecnicas/habilidades-tecnicas.component */ "./src/app/habilidades-tecnicas/habilidades-tecnicas.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");














function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http);
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _servicios_contacto_service__WEBPACK_IMPORTED_MODULE_8__["ContactoService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__["ProyectosComponent"],
        _app_formulario_contacto_formulario_contacto_component__WEBPACK_IMPORTED_MODULE_6__["FormularioContactoComponent"],
        _habilidades_tecnicas_habilidades_tecnicas_component__WEBPACK_IMPORTED_MODULE_9__["HabilidadesTecnicasComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_4__["ProyectosComponent"],
                    _app_formulario_contacto_formulario_contacto_component__WEBPACK_IMPORTED_MODULE_6__["FormularioContactoComponent"],
                    _habilidades_tecnicas_habilidades_tecnicas_component__WEBPACK_IMPORTED_MODULE_9__["HabilidadesTecnicasComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
                        loader: {
                            provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
                            useFactory: HttpLoaderFactory,
                            deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                        }
                    }),
                ],
                providers: [
                    _servicios_contacto_service__WEBPACK_IMPORTED_MODULE_8__["ContactoService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/formulario-contacto/formulario-contacto.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/formulario-contacto/formulario-contacto.component.ts ***!
  \**********************************************************************/
/*! exports provided: FormularioContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioContactoComponent", function() { return FormularioContactoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _servicios_contacto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/contacto.service */ "./src/app/servicios/contacto.service.ts");





class FormularioContactoComponent {
    constructor(builder, contact) {
        this.builder = builder;
        this.contact = contact;
    }
    ngOnInit() {
        this.FormData = this.builder.group({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])]),
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    onSubmit(FormData) {
        console.log(FormData);
        this.contact.postMessage(FormData).subscribe(response => {
            //location.href = 'http://mailthis.to/confirm';
            console.log(response);
        }, error => {
            console.warn(error.responseText);
            console.log({ error });
        });
    }
}
FormularioContactoComponent.ɵfac = function FormularioContactoComponent_Factory(t) { return new (t || FormularioContactoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_servicios_contacto_service__WEBPACK_IMPORTED_MODULE_2__["ContactoService"])); };
FormularioContactoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormularioContactoComponent, selectors: [["app-formulario-contacto"]], decls: 12, vars: 2, consts: [[3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "email", "name", "email", "placeholder", "Correo electronico", "formControlName", "email"], ["for", "fullName"], ["type", "text", "name", "fullName", "placeholder", "Tu nombre", "formControlName", "fullName"], ["for", "comment"], ["type", "text-area", "name", "comment", "placeholder", "Alg\u00FAn comentario", "formControlName", "comment"], ["type", "submit", 3, "disabled"]], template: function FormularioContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormularioContactoComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(ctx.FormData.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nombre completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Comentario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.FormData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.FormData.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm11bGFyaW8tY29udGFjdG8vZm9ybXVsYXJpby1jb250YWN0by5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormularioContactoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formulario-contacto',
                templateUrl: './formulario-contacto.component.html',
                styleUrls: ['./formulario-contacto.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _servicios_contacto_service__WEBPACK_IMPORTED_MODULE_2__["ContactoService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/habilidades-tecnicas/habilidades-tecnicas.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/habilidades-tecnicas/habilidades-tecnicas.component.ts ***!
  \************************************************************************/
/*! exports provided: HabilidadesTecnicasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabilidadesTecnicasComponent", function() { return HabilidadesTecnicasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");



class HabilidadesTecnicasComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HabilidadesTecnicasComponent.ɵfac = function HabilidadesTecnicasComponent_Factory(t) { return new (t || HabilidadesTecnicasComponent)(); };
HabilidadesTecnicasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HabilidadesTecnicasComponent, selectors: [["app-habilidades-tecnicas"]], decls: 63, vars: 24, consts: [[1, "contenedor"], [1, "elemento"], [1, "ul-d"]], template: function HabilidadesTecnicasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Java 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "JSP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Servlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Web Responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Frameworks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Angular 2+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Bootstrap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Mysql");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "PL/SQL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, "TECHNICAL_SKILLS.TECH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, "TECHNICAL_SKILLS.JAVA_TECHNOLOGIES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 12, "TECHNICAL_SKILLS.WEB_TECNOLOGIES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 14, "TECHNICAL_SKILLS.DATABASE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 16, "TECHNICAL_SKILLS.ADDITIONAL_KNOWLEDGE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](56, 18, "TECHNICAL_SKILLS.MVC"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 20, "TECHNICAL_SKILLS.OOP"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 22, "TECHNICAL_SKILLS.GIT"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], styles: [".contenedor[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  grid-gap: 1rem;\n}\n\n.ul-d[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0;\n}\n\n.ul-d[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-left: 24px;\n  background-image: url(https://interactive-examples.mdn.mozilla.net/media/examples/rocket.svg);\n  background-repeat: no-repeat;\n  background-size: 10px 10px;\n  background-position: top 6px left 5px;\n}\n\nb[_ngcontent-%COMP%] {\n  color: var(--tial-fuerte);\n}\n\n@media only screen and (max-width: 768px) {\n  .contenedor[_ngcontent-%COMP%] {\n    grid-template-columns: 50% 50%;\n  }\n}\n\n@media only screen and (max-width: 460px) {\n  .contenedor[_ngcontent-%COMP%] {\n    grid-template-columns: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFiaWxpZGFkZXMtdGVjbmljYXMvQzpcXFVzZXJzXFxyYW1pclxcT25lRHJpdmVcXERvY3VtZW50b3NcXEN1cnNvIENTU1xcTnVldmEgY2FycGV0YVxccG9ydGZvbGlvL3NyY1xcYXBwXFxoYWJpbGlkYWRlcy10ZWNuaWNhc1xcaGFiaWxpZGFkZXMtdGVjbmljYXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hhYmlsaWRhZGVzLXRlY25pY2FzL2hhYmlsaWRhZGVzLXRlY25pY2FzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtFQUNBLDZGQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBRUU7SUFDRSw4QkFBQTtFQ0FGO0FBQ0Y7O0FESUE7RUFFRTtJQUNFLDJCQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hhYmlsaWRhZGVzLXRlY25pY2FzL2hhYmlsaWRhZGVzLXRlY25pY2FzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3J7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0byA7XHJcbiAgICBncmlkLWdhcDogMXJlbTtcclxufVxyXG5cclxuLnVsLWQge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbiAgXHJcbiAgLnVsLWQgbGkge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW50ZXJhY3RpdmUtZXhhbXBsZXMubWRuLm1vemlsbGEubmV0L21lZGlhL2V4YW1wbGVzL3JvY2tldC5zdmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIDZweCBsZWZ0IDVweDtcclxuICB9XHJcblxyXG5iIHtcclxuICAgIGNvbG9yOiB2YXIoLS10aWFsLWZ1ZXJ0ZSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG5cclxuICAuY29udGVuZWRvcntcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KXtcclxuXHJcbiAgLmNvbnRlbmVkb3J7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XHJcbiAgfVxyXG59IiwiLmNvbnRlbmVkb3Ige1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xuICBncmlkLWdhcDogMXJlbTtcbn1cblxuLnVsLWQge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi51bC1kIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbnRlcmFjdGl2ZS1leGFtcGxlcy5tZG4ubW96aWxsYS5uZXQvbWVkaWEvZXhhbXBsZXMvcm9ja2V0LnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTBweCAxMHB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgNnB4IGxlZnQgNXB4O1xufVxuXG5iIHtcbiAgY29sb3I6IHZhcigtLXRpYWwtZnVlcnRlKTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HabilidadesTecnicasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-habilidades-tecnicas',
                templateUrl: './habilidades-tecnicas.component.html',
                styleUrls: ['./habilidades-tecnicas.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/proyectos/lista-proyectos.ts":
/*!**********************************************!*\
  !*** ./src/app/proyectos/lista-proyectos.ts ***!
  \**********************************************/
/*! exports provided: PROYECTOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROYECTOS", function() { return PROYECTOS; });
const PROYECTOS = [
    {
        id: 1,
        nombre: "Pousada Sandi",
        descripcion: `Pagina web de un hotel que ofrece sus servicios.`,
        imagenUrl: "../assets/project-1.png",
    },
];


/***/ }),

/***/ "./src/app/proyectos/proyectos.component.ts":
/*!**************************************************!*\
  !*** ./src/app/proyectos/proyectos.component.ts ***!
  \**************************************************/
/*! exports provided: ProyectosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosComponent", function() { return ProyectosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lista_proyectos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lista-proyectos */ "./src/app/proyectos/lista-proyectos.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");





function ProyectosComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proyecto_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", proyecto_r5.imagenUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proyecto_r5.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, "PROJECTS.POUSADA_DESC"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "PROJECTS.SEEMORE"), " ");
} }
class ProyectosComponent {
    constructor() {
        this.proyectos = _lista_proyectos__WEBPACK_IMPORTED_MODULE_1__["PROYECTOS"];
    }
    ngOnInit() {
    }
}
ProyectosComponent.ɵfac = function ProyectosComponent_Factory(t) { return new (t || ProyectosComponent)(); };
ProyectosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProyectosComponent, selectors: [["app-proyectos"]], decls: 4, vars: 4, consts: [["class", "contenedor-proyecto", 4, "ngFor", "ngForOf"], [1, "contenedor-proyecto"], [1, "imagen-proyecto"], ["width", "100%", "height", "auto", 3, "src"], [1, "descripcion-proyecto"], ["target", "_blank", "href", "https://github.com/Ramiro404/pousada_sandi", "type", "button", 1, "btn"]], template: function ProyectosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProyectosComponent_div_3_Template, 12, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "PROJECTS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.proyectos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: [".contenedor-proyecto[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.imagen-proyecto[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.descripcion-proyecto[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n  width: 50%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  color: var(--tial-fuerte);\n}\n\n@media only screen and (max-width: 768px) {\n  .contenedor-proyecto[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .imagen-proyecto[_ngcontent-%COMP%], .descripcion-proyecto[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJveWVjdG9zL0M6XFxVc2Vyc1xccmFtaXJcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxDdXJzbyBDU1NcXE51ZXZhIGNhcnBldGFcXHBvcnRmb2xpby9zcmNcXGFwcFxccHJveWVjdG9zXFxwcm95ZWN0b3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb3llY3Rvcy9wcm95ZWN0b3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQztFQUNHLFVBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksc0JBQUE7RUNDTjs7RURFRTtJQUNJLFdBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJveWVjdG9zL3Byb3llY3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yLXByb3llY3Rve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbiAuaW1hZ2VuLXByb3llY3RvIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5kZXNjcmlwY2lvbi1wcm95ZWN0byB7XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBjb2xvcjogdmFyKC0tdGlhbC1mdWVydGUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5jb250ZW5lZG9yLXByb3llY3Rve1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlbi1wcm95ZWN0bywgLmRlc2NyaXBjaW9uLXByb3llY3Rve1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59IiwiLmNvbnRlbmVkb3ItcHJveWVjdG8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4uaW1hZ2VuLXByb3llY3RvIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmRlc2NyaXBjaW9uLXByb3llY3RvIHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmJ0biB7XG4gIGNvbG9yOiB2YXIoLS10aWFsLWZ1ZXJ0ZSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbmVkb3ItcHJveWVjdG8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuaW1hZ2VuLXByb3llY3RvLCAuZGVzY3JpcGNpb24tcHJveWVjdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-proyectos',
                templateUrl: './proyectos.component.html',
                styleUrls: ['./proyectos.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/servicios/contacto.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/contacto.service.ts ***!
  \***********************************************/
/*! exports provided: ContactoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoService", function() { return ContactoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ContactoService {
    constructor(http) {
        this.http = http;
        this.api = 'https://mailthis.to/ramirocruznavarro@hotmail.com';
    }
    postMessage(input) {
        return this.http.post(this.api, input, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
            if (response) {
                return response;
            }
        }, (error) => {
            return error;
        }));
    }
}
ContactoService.ɵfac = function ContactoService_Factory(t) { return new (t || ContactoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ContactoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactoService, factory: ContactoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ramir\OneDrive\Documentos\Curso CSS\Nueva carpeta\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map