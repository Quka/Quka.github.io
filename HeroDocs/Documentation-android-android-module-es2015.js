(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Documentation-android-android-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/android/Childcomponents/getting-started/getting-started.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/android/Childcomponents/getting-started/getting-started.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>getting-started works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/android/android.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/android/android.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>android works!</p>\n"

/***/ }),

/***/ "./src/app/Documentation/android/Childcomponents/getting-started/getting-started.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Documentation/android/Childcomponents/getting-started/getting-started.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vYW5kcm9pZC9DaGlsZGNvbXBvbmVudHMvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Documentation/android/Childcomponents/getting-started/getting-started.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/Documentation/android/Childcomponents/getting-started/getting-started.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let GettingStartedComponent = class GettingStartedComponent {
    constructor() { }
    ngOnInit() {
    }
};
GettingStartedComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-getting-started',
        template: __webpack_require__(/*! raw-loader!./getting-started.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/android/Childcomponents/getting-started/getting-started.component.html"),
        styles: [__webpack_require__(/*! ./getting-started.component.css */ "./src/app/Documentation/android/Childcomponents/getting-started/getting-started.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GettingStartedComponent);



/***/ }),

/***/ "./src/app/Documentation/android/android-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Documentation/android/android-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AndroidRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidRoutingModule", function() { return AndroidRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Childcomponents_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Childcomponents/getting-started/getting-started.component */ "./src/app/Documentation/android/Childcomponents/getting-started/getting-started.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



const routes = [
    { path: 'getting-started', component: _Childcomponents_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__["GettingStartedComponent"] }
];
let AndroidRoutingModule = class AndroidRoutingModule {
};
AndroidRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AndroidRoutingModule);



/***/ }),

/***/ "./src/app/Documentation/android/android.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Documentation/android/android.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vYW5kcm9pZC9hbmRyb2lkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Documentation/android/android.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Documentation/android/android.component.ts ***!
  \************************************************************/
/*! exports provided: AndroidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidComponent", function() { return AndroidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let AndroidComponent = class AndroidComponent {
    constructor() { }
    ngOnInit() {
    }
};
AndroidComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-android',
        template: __webpack_require__(/*! raw-loader!./android.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/android/android.component.html"),
        styles: [__webpack_require__(/*! ./android.component.css */ "./src/app/Documentation/android/android.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AndroidComponent);



/***/ }),

/***/ "./src/app/Documentation/android/android.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Documentation/android/android.module.ts ***!
  \*********************************************************/
/*! exports provided: AndroidModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AndroidModule", function() { return AndroidModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _android_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./android-routing.module */ "./src/app/Documentation/android/android-routing.module.ts");
/* harmony import */ var _android_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./android.component */ "./src/app/Documentation/android/android.component.ts");
/* harmony import */ var _Childcomponents_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Childcomponents/getting-started/getting-started.component */ "./src/app/Documentation/android/Childcomponents/getting-started/getting-started.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let AndroidModule = class AndroidModule {
};
AndroidModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [_android_component__WEBPACK_IMPORTED_MODULE_3__["AndroidComponent"], _Childcomponents_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_4__["GettingStartedComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _android_routing_module__WEBPACK_IMPORTED_MODULE_2__["AndroidRoutingModule"]
        ]
    })
], AndroidModule);



/***/ })

}]);
//# sourceMappingURL=Documentation-android-android-module-es2015.js.map