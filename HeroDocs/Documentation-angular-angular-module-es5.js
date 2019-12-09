(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Documentation-angular-angular-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/angular.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/angular/angular.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>angular works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/developing-features/developing-features.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/angular/child-components/developing-features/developing-features.component.html ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>developing-features works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-title>Directory overview</mat-card-title>\n        <mat-card-subtitle>An overview and explanation of the control panel directory</mat-card-subtitle>\n    </mat-card-header>\n</mat-card>\n\n\n<app-docs-card [items]=\"items\"></app-docs-card>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/getting-started/getting-started.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/angular/child-components/getting-started/getting-started.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-title>Getting started with Angular</mat-card-title>\n        <mat-card-subtitle>How to get started with Angular on the control panel</mat-card-subtitle>\n    </mat-card-header>\n</mat-card>\n\n<app-docs-card [items]=\"items\"></app-docs-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/main-components/main-components.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/angular/child-components/main-components/main-components.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-title>Main components</mat-card-title>\n        <mat-card-subtitle>This section describes the various components which are the most important ones for the\n            control panel\n        </mat-card-subtitle>\n    </mat-card-header>\n</mat-card>\n\n<app-tab-group [contents]=\"content\"></app-tab-group>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-title>Main plugin overview</mat-card-title>\n        <mat-card-subtitle>This is an overview of the most important plugins we use and how we use them\n        </mat-card-subtitle>\n    </mat-card-header>\n</mat-card>\n\n<app-tab-group [contents]=\"content\"></app-tab-group>"

/***/ }),

/***/ "./src/app/Documentation/angular/angular-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Documentation/angular/angular-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AngularRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularRoutingModule", function() { return AngularRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _child_components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child-components/getting-started/getting-started.component */ "./src/app/Documentation/angular/child-components/getting-started/getting-started.component.ts");
/* harmony import */ var _child_components_directory_overview_directory_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./child-components/directory-overview/directory-overview.component */ "./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.ts");
/* harmony import */ var _child_components_main_plugins_overview_main_plugins_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child-components/main-plugins-overview/main-plugins-overview.component */ "./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.ts");
/* harmony import */ var _child_components_main_components_main_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./child-components/main-components/main-components.component */ "./src/app/Documentation/angular/child-components/main-components/main-components.component.ts");
/* harmony import */ var _child_components_developing_features_developing_features_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./child-components/developing-features/developing-features.component */ "./src/app/Documentation/angular/child-components/developing-features/developing-features.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'getting-started', component: _child_components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__["GettingStartedComponent"] },
    { path: 'directory-overview', component: _child_components_directory_overview_directory_overview_component__WEBPACK_IMPORTED_MODULE_3__["DirectoryOverviewComponent"] },
    { path: 'main-plugins-overview', component: _child_components_main_plugins_overview_main_plugins_overview_component__WEBPACK_IMPORTED_MODULE_4__["MainPluginsOverviewComponent"] },
    { path: 'main-components', component: _child_components_main_components_main_components_component__WEBPACK_IMPORTED_MODULE_5__["MainComponentsComponent"] },
    { path: 'developing-features', component: _child_components_developing_features_developing_features_component__WEBPACK_IMPORTED_MODULE_6__["DevelopingFeaturesComponent"] },
];
var AngularRoutingModule = /** @class */ (function () {
    function AngularRoutingModule() {
    }
    AngularRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AngularRoutingModule);
    return AngularRoutingModule;
}());



/***/ }),

/***/ "./src/app/Documentation/angular/angular.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Documentation/angular/angular.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vYW5ndWxhci9hbmd1bGFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Documentation/angular/angular.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Documentation/angular/angular.component.ts ***!
  \************************************************************/
/*! exports provided: AngularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularComponent", function() { return AngularComponent; });
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

var AngularComponent = /** @class */ (function () {
    function AngularComponent() {
    }
    AngularComponent.prototype.ngOnInit = function () {
    };
    AngularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-angular',
            template: __webpack_require__(/*! raw-loader!./angular.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/angular.component.html"),
            styles: [__webpack_require__(/*! ./angular.component.css */ "./src/app/Documentation/angular/angular.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AngularComponent);
    return AngularComponent;
}());



/***/ }),

/***/ "./src/app/Documentation/angular/angular.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Documentation/angular/angular.module.ts ***!
  \*********************************************************/
/*! exports provided: AngularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularModule", function() { return AngularModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-routing.module */ "./src/app/Documentation/angular/angular-routing.module.ts");
/* harmony import */ var _angular_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular.component */ "./src/app/Documentation/angular/angular.component.ts");
/* harmony import */ var _child_components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child-components/getting-started/getting-started.component */ "./src/app/Documentation/angular/child-components/getting-started/getting-started.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _child_components_directory_overview_directory_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./child-components/directory-overview/directory-overview.component */ "./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.ts");
/* harmony import */ var _shared_docs_card_docs_card_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/docs-card/docs-card.module */ "./src/app/Documentation/shared/docs-card/docs-card.module.ts");
/* harmony import */ var _child_components_main_plugins_overview_main_plugins_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./child-components/main-plugins-overview/main-plugins-overview.component */ "./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.ts");
/* harmony import */ var _shared_tab_group_tab_group_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/tab-group/tab-group.module */ "./src/app/Documentation/shared/tab-group/tab-group.module.ts");
/* harmony import */ var _child_components_main_components_main_components_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./child-components/main-components/main-components.component */ "./src/app/Documentation/angular/child-components/main-components/main-components.component.ts");
/* harmony import */ var _child_components_developing_features_developing_features_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./child-components/developing-features/developing-features.component */ "./src/app/Documentation/angular/child-components/developing-features/developing-features.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AngularModule = /** @class */ (function () {
    function AngularModule() {
    }
    AngularModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _angular_component__WEBPACK_IMPORTED_MODULE_3__["AngularComponent"],
                _child_components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_4__["GettingStartedComponent"],
                _child_components_directory_overview_directory_overview_component__WEBPACK_IMPORTED_MODULE_6__["DirectoryOverviewComponent"],
                _child_components_main_plugins_overview_main_plugins_overview_component__WEBPACK_IMPORTED_MODULE_8__["MainPluginsOverviewComponent"],
                _child_components_main_components_main_components_component__WEBPACK_IMPORTED_MODULE_10__["MainComponentsComponent"],
                _child_components_developing_features_developing_features_component__WEBPACK_IMPORTED_MODULE_11__["DevelopingFeaturesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_routing_module__WEBPACK_IMPORTED_MODULE_2__["AngularRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _shared_tab_group_tab_group_module__WEBPACK_IMPORTED_MODULE_9__["TabGroupModule"],
                _shared_docs_card_docs_card_module__WEBPACK_IMPORTED_MODULE_7__["DocsCardModule"]
            ]
        })
    ], AngularModule);
    return AngularModule;
}());



/***/ }),

/***/ "./src/app/Documentation/angular/child-components/developing-features/developing-features.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/Documentation/angular/child-components/developing-features/developing-features.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vYW5ndWxhci9jaGlsZC1jb21wb25lbnRzL2RldmVsb3BpbmctZmVhdHVyZXMvZGV2ZWxvcGluZy1mZWF0dXJlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Documentation/angular/child-components/developing-features/developing-features.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/Documentation/angular/child-components/developing-features/developing-features.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DevelopingFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopingFeaturesComponent", function() { return DevelopingFeaturesComponent; });
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

var DevelopingFeaturesComponent = /** @class */ (function () {
    function DevelopingFeaturesComponent() {
    }
    DevelopingFeaturesComponent.prototype.ngOnInit = function () {
    };
    DevelopingFeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-developing-features',
            template: __webpack_require__(/*! raw-loader!./developing-features.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/developing-features/developing-features.component.html"),
            styles: [__webpack_require__(/*! ./developing-features.component.css */ "./src/app/Documentation/angular/child-components/developing-features/developing-features.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DevelopingFeaturesComponent);
    return DevelopingFeaturesComponent;
}());



/***/ }),

/***/ "./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vYW5ndWxhci9jaGlsZC1jb21wb25lbnRzL2RpcmVjdG9yeS1vdmVydmlldy9kaXJlY3Rvcnktb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DirectoryOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryOverviewComponent", function() { return DirectoryOverviewComponent; });
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

var DirectoryOverviewComponent = /** @class */ (function () {
    function DirectoryOverviewComponent() {
        this.items = [
            {
                title: 'Folder structure',
                subtitle: 'An overview of the folder structure',
                headerStyle: 'bg-info text-white',
                content: "\n      <p>Below is the folder structure visualized with corresponding comments</p>\n      <ul>\n          <li><strong>src/app</strong> - the root of our project, containing our components\n              <ul>\n                  <li><strong>Components</strong> - contains all our components\n                      <ul>\n                          <li><strong>access-denied</strong> - shows this page when user isn't logged in</li>\n                          <li><strong>admin-settings</strong> - used only by Hero for administrating the control panel</li>\n                          <li><strong>app-settings</strong> - for the user to adjust app settings\n                              <ul>\n                                  <li><strong>app-color-settings</strong> - settings for changing app colors</li>\n                                  <li>\n                                      <strong>app-images</strong> - contains several components for changing images in the app\n                                  </li>\n                                  <li>\n                                      <strong>appstore-settings</strong> - contains settings which are used in the app store for the app\n                                  </li>\n                              </ul>\n                          </li>\n                          <li><strong>create-new-app</strong> - shows a stepper for creatings apps\n                              <ul>\n                                  <li><strong>publish-app</strong> - contains a stepper with required fields when the user is\n                                      ready to publish their app</li>\n                              </ul>\n                          </li>\n                          <li><strong>header</strong> - the header containing the logo, menu, and user settings menu</li>\n                          <li><strong>home</strong> - the default route component (first page), contains helpful sections</li>\n                          <li><strong>imagecrop</strong> - the image cropper for uploading images</li>\n                          <li><strong>login</strong> - the login component (heavily customized styles)</li>\n                          <li><strong>my-app</strong> - my app component contains all the different pages for administrating the app\n                              <ul>\n                                  <li><strong>ChildComponents</strong>\n                                      <ul>\n                                          <li><strong>activity</strong>\n                                              <ul>\n                                                  <li>editActivity</li>\n                                              </ul>\n                                          </li>\n                                          <li><strong>addpage - for adding new pages to the controlpanel and the app</strong></li>\n                                          <li><s><strong>app-layout</strong> - deprecated</s></li>\n                                          <li><strong>apphometext</strong></li>\n                                          <li><strong>class</strong>\n                                              <ul>\n                                                  <li>editClass</li>\n                                              </ul>\n                                          </li>\n                                          <li><strong>contact</strong></li>\n                                          <li><strong>event</strong>\n                                              <ul>\n                                                  <li>\n                                                      editEvent\n                                                  </li>\n                                              </ul>\n                                          </li>\n                                          <li><strong>information</strong>\n                                              <ul>\n                                                  <li>\n                                                      editInformation\n                                                  </li>\n                                              </ul>\n                                          </li>\n                                          <li><strong>live-timings</strong></li>\n                                          <li><strong>localinfo</strong></li>\n                                          <li><strong>map-marker</strong> - app page for adding a map with defined marker\n                                              <ul>\n                                                  <li>editMarker</li>\n                                              </ul>\n                                          </li>\n                                          <li><strong>message</strong>\n                                              <ul>\n                                                  <li>\n                                                      deleteMessage\n                                                  </li>\n                                              </ul>\n                                          </li>\n                                          <li><strong>no-more-pages</strong> - shows when the user has more pages to use, than available programmed pages</li>\n                                          <li><strong>out-of-pages</strong> - an error page for when a user has exceeded their max number of pages</li>\n                                          <li><strong>participant-list</strong>\n                                              <ul>\n                                                  <li>addParticipant</li>\n                                                  <li>editParticipant</li>\n                                                  <li>editRaceMenu</li>\n                                              </ul>\n                                          </li>\n                                          <li><strong>race-official</strong>\n                                              <ul>\n                                                  <li>editRaceOfficial</li>\n                                              </ul>\n                                          </li>\n                                          <li><strong>raceprogram</strong>\n                                              <ul>\n                                                  <li>editraceprogram</li>\n                                              </ul>\n                                          </li>\n                                          <li><strong>socialtext</strong></li>\n                                          <li><strong>ticket</strong>\n                                              <ul>\n                                                  <li>editTicket</li>\n                                              </ul>\n                                          </li>\n                                          <li><strong>travel</strong>\n                                              <ul>\n                                                  <li>edit-travel</li>\n                                              </ul>\n                                          </li>\n                                          <li><strong>welcome</strong> - the default page for addpage</li>\n                                      </ul>\n                                  </li>\n                              </ul>\n                          </li>\n                          <li><strong>newsletter</strong> - future newsletter component</li>\n                          <li><strong>not-found404</strong> - 404 page not found component</li>\n                          <li><strong>notifications</strong> - page for sending out notifications to the users app</li>\n                          <li><strong>reset-password</strong></li>\n                          <li><strong>settings</strong> - settings relevant to the controlpanel, such as users settings</li>\n                          <li><strong>user-menu</strong> - the user settings menu component</li>\n                      </ul>\n                  </li>\n                  <li><strong>Interfaces</strong> - all our model classes used throughout the control panel</li>\n                  <li><strong>Services</strong> - very useful functions / services used throughout the control panel\n                      <ul>\n                          <li><strong>auth</strong> - uses FirebaseAuth to signup/login/logout/authenticate users. Also contains password reset and toasts</li>\n                          <li><s><strong>contactHttp</strong> - deprecated</s></li>\n                          <li><strong>errorlog.service</strong> - called on catched errors, sends an email and makes a toast on errors</li>\n                          <li><strong>FieldValidator</strong> - not in use yet</li>\n                          <li><strong>guards</strong> - contains guards used on routes to make sure requirements are met before routing\n                              <ul>\n                                  <li><strong>adminGuard</strong> - check if user is admin (for our use)</li>\n                                  <li><strong>GuardService</strong> - check if user is logged in</li>\n                                  <li><strong>PagesAmountGuard</strong> - checks if user has reached max nr of pages</li>\n                              </ul>\n                          </li>\n                          <li><strong>HeaderNavigation</strong> - navigates to other routes</li>\n                          <li><strong>helper.service</strong> - used in general for getting/updating titles and menus</li>\n                          <li><strong>Toastr</strong> - creates pop up toasts</li>\n                      </ul>\n                  </li>\n              </ul>\n          </li>\n          <li><strong>dist</strong> - when the project is build for production, it is generated in the dist folder, upload to the webserver</li>\n      </ul>\n      "
            },
        ];
    }
    DirectoryOverviewComponent.prototype.ngOnInit = function () {
    };
    DirectoryOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-directory-overview',
            template: __webpack_require__(/*! raw-loader!./directory-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.html"),
            styles: [__webpack_require__(/*! ./directory-overview.component.css */ "./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectoryOverviewComponent);
    return DirectoryOverviewComponent;
}());



/***/ }),

/***/ "./src/app/Documentation/angular/child-components/getting-started/getting-started.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/Documentation/angular/child-components/getting-started/getting-started.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vYW5ndWxhci9jaGlsZC1jb21wb25lbnRzL2dldHRpbmctc3RhcnRlZC9nZXR0aW5nLXN0YXJ0ZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Documentation/angular/child-components/getting-started/getting-started.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Documentation/angular/child-components/getting-started/getting-started.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: GettingStartedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GettingStartedComponent", function() { return GettingStartedComponent; });
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

var GettingStartedComponent = /** @class */ (function () {
    function GettingStartedComponent() {
        this.items = [
            {
                title: 'Info',
                subtitle: 'How do we use Angular',
                headerStyle: 'bg-info text-white',
                content: "\n      <p>We use Angular for developing the control panel. The Angular control panel is for our customers\n      to use in administrating their apps.</p>\n      <p>The control panel has several features but is primarily used for its MyApp component - which is where\n      the user can change the contents of their app. This documentation will describe how to\n      develop on these features.</p>\n      "
            },
            {
                title: 'Setup',
                subtitle: 'How to setup Angular',
                headerStyle: 'bg-info text-white',
                content: "\n      <p>Download and install Node.js</p>\n      <ul>\n      <li><a href=\"https://nodejs.org/en/\">Download node.js here</a></li>\n      <li>Make sure Node and Npm are installed</li>\n      <li>In the terminal run: 'node -v' and 'npm -v'</li>\n      </ul>\n\n      <p>Install Angular CLI (globally)</p>\n      <ul>\n      <li>In the terminal run: 'npm install -g @angular/cli'</li>\n      <li>Read the CLI docs if you're not fully updated on available commands (<a href=\"https://cli.angular.io/\">Angular CLI</a>)</li>\n      <li>Important commands: 'ng serve -o' | 'ng g c [component]' | 'ng g m [module]'</li>\n      </ul>\n\n      <p>Working on the Angular projects</p>\n      <ul>\n      <li>Setup an appropriate folder structure</li>\n      <li>Git clone the project to the folder</li>\n      <li>Open the project and terminal in VSCode and run: 'npm install' and then 'ng serve -o'</li>\n      </ul>\n      "
            },
            {
                title: 'Contents',
                subtitle: 'The contents of the Angular docs',
                headerStyle: 'bg-info text-white',
                content: "\n      <ol>\n      <li>Directory overview\n        <ul>\n          <li>src/app\n            <ul>\n              <li>Components</li>\n              <li>Interfaces</li>\n              <li>Services</li>\n              <li>assets</li>\n              <li>evnviroment</li>\n            </ul>\n          </li>\n          <li>dist</li>\n        </ul>\n      </li>\n      <li>Main plugins overview\n        <ul>\n          <li>Nebular</li>\n          <li>The App module (and nebular)</li>\n      </ul>\n      </li>\n      <li>Main components</li>\n      <li>Developing features</li>\n      </ol>\n      "
            },
        ];
    }
    GettingStartedComponent.prototype.ngOnInit = function () {
    };
    GettingStartedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getting-started',
            template: __webpack_require__(/*! raw-loader!./getting-started.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/getting-started/getting-started.component.html"),
            styles: [__webpack_require__(/*! ./getting-started.component.css */ "./src/app/Documentation/angular/child-components/getting-started/getting-started.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GettingStartedComponent);
    return GettingStartedComponent;
}());



/***/ }),

/***/ "./src/app/Documentation/angular/child-components/main-components/main-components.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/Documentation/angular/child-components/main-components/main-components.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vYW5ndWxhci9jaGlsZC1jb21wb25lbnRzL21haW4tY29tcG9uZW50cy9tYWluLWNvbXBvbmVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Documentation/angular/child-components/main-components/main-components.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Documentation/angular/child-components/main-components/main-components.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: MainComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponentsComponent", function() { return MainComponentsComponent; });
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

var MainComponentsComponent = /** @class */ (function () {
    function MainComponentsComponent() {
        this.content = [
            {
                tabtitle: "My App ",
                intro: "The my-app components and it's child components",
                list: [
                    {
                        title: "Description",
                        subtitle: "How do we use it",
                        headerStyle: 'bg-info text-white',
                        content: "\n          <p>\n            The my app component is the component we most likely will spend the most time developing in.\n            It is here we add new pages to the control panel, when these are created in the android and iOS apps.\n          </p>\n          <p>\n            The my app-component contains a ChildComponents folder with all the pages that are available in the app.\n          </p>\n          <p>\n            The addpage component is the one used for adding new pages, and is not an actual page in the app. \n            Every other component is a page selectable in the addpagge component. \n          </p>\n          <pre>\nmy-app\n - ChildComponents\n   > activity\n   > <span class=\"hl\">addpage</span>\n   > app-layout\n   > apphometext\n     ...\n          </pre>\n          <p>See the <a href=\"angular/developing-features\">developing features page</a>, for a how to on implementing new pages</p>\n          "
                    },
                ]
            },
            {
                tabtitle: "Addpage component",
                intro: "The addpage component is used when user wants to add a new page to their app",
                list: [
                    {
                        title: "Description",
                        subtitle: "How do we use the addpage component",
                        headerStyle: 'bg-info text-white',
                        content: "\n        addpage\n         "
                    },
                ]
            },
        ];
    }
    MainComponentsComponent.prototype.ngOnInit = function () {
    };
    MainComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-components',
            template: __webpack_require__(/*! raw-loader!./main-components.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/main-components/main-components.component.html"),
            styles: [__webpack_require__(/*! ./main-components.component.css */ "./src/app/Documentation/angular/child-components/main-components/main-components.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponentsComponent);
    return MainComponentsComponent;
}());



/***/ }),

/***/ "./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vYW5ndWxhci9jaGlsZC1jb21wb25lbnRzL21haW4tcGx1Z2lucy1vdmVydmlldy9tYWluLXBsdWdpbnMtb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: MainPluginsOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPluginsOverviewComponent", function() { return MainPluginsOverviewComponent; });
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

var MainPluginsOverviewComponent = /** @class */ (function () {
    function MainPluginsOverviewComponent() {
        this.content = [
            {
                tabtitle: "Bootstrap",
                intro: "We use bootstrap in conjuction with nebular (our theme) for layouting the controlpanel",
                list: [
                    {
                        title: "Purpose",
                        subtitle: "How do we use bootstrap",
                        headerStyle: 'bg-info text-white',
                        content: "\n            <p>\n            We mainly use bootstrap for its layouting and responsive capabilities when we create our components. More specifically\n            the container, row, and col classes. And media queries in the CSS.\n            </p>\n            <p>\n            We also use the bootstrap for its other predefined styles, such as formms and buttons which you can read more about.\n            <ul>\n              <li>Read the <a href=\"https://getbootstrap.com/docs/4.3/layout/overview/\">bootstrap documentation</a> for in-depth info.</li>\n            </ul>\n            </p>\n            "
                    },
                    {
                        title: "Layouting",
                        subtitle: "How to use containers, rows, cols",
                        headerStyle: 'bg-info text-white',
                        content: "\n          <p>When we create a component we use a default setup with a root container div with a row child and col child.</p>\n          <p>Depending on how the layout should look, we use col-lg-6 (lg are large devices aka desktop and half column) and col-12 (default full width column on all devices).</p>\n          <p>Below is an example of a component we use (home.component.html)</p>\n          <pre>\n&lt;div class=&quot;<span class=\"hl\">container-fluid</span>&quot;&gt;\n  &lt;div class=&quot;<span class=\"hl\">row</span>&quot;&gt;\n      &lt;div class=&quot;<span class=\"hl\">col-12 col-lg-6</span>&quot;&gt;\n          &lt;nb-card&gt;\n          ...\n          &lt;/nb-card&gt;\n      &lt;/div&gt;\n      &lt;div class=&quot;<span class=\"hl\">col-12 col-lg-6</span>&quot;&gt;\n          &lt;nb-card&gt;\n              &lt;nb-card-header class=&quot;card-header&quot;&gt;Nyheder&lt;/nb-card-header&gt;\n              &lt;nb-card-body&gt;\n                  ...\n              &lt;/nb-card-body&gt;\n          &lt;/nb-card&gt;\n      &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/div&gt;\n          </pre>\n\n          <p>The highlighted areas shows how we use col-12 on small deviced and col-lg-6 for larger devices.</p>\n          <p>\n            Notice that a row has a maximum col amount of 12. So make sure not to cram too, \n            much information inside a row, instead create another row below it.\n          </p>\n          "
                    },
                    {
                        title: "Responsive CSS",
                        subtitle: "How to use responsive CSS styles and media queries",
                        headerStyle: 'bg-info text-white',
                        content: "\n        <p>Usually we need to make some custom CSS styling to make sure the components look good on small devices.</p>\n        <p>For this we use media queries in specific components stylesheet. These media queries has a target of small devices up to desktop (up to 991px) - excluding desktops</p>\n        <p>Below is an example of how we use media queries in a editBox component</p>\n        <pre>\n.container-fluid {\n    min-width: 600px;\n}\n\nbutton {\n    cursor: pointer !important;\n}\n\n.img-wrapper {\n    min-height: 300px;\n}\n\ninput,\nlabel {\n    width: 100%;\n}\n\n<span class=\"hl\">@media (max-width: 991px)</span> {\n    .container-fluid {\n        min-width: 0;\n    }\n\n    .img-wrapper {\n        min-height: 0;\n    }\n}\n        </pre>\n         "
                    },
                ]
            },
            {
                tabtitle: "Nebular",
                intro: "Nebular is our main theme framework. Nebular has a lot of predefined components which allows for faster development",
                list: [
                    {
                        title: "Purpose",
                        subtitle: "What is Nebular",
                        headerStyle: 'bg-info text-white',
                        content: "\n            <p>\n            Nebular is used for theming our controlpanel. We use their predefined components and styles for developing in Angular faster.\n            We use a lot of their predefined components, which you should read up on.\n            <ul>\n              <li><a href=\"https://akveo.github.io/nebular/docs/components/components-overview\">The Nebular docs</a></li>\n            </ul>\n            </p>\n            "
                    },
                    {
                        title: "Theming",
                        subtitle: "How do we use Nebular components",
                        headerStyle: 'bg-info text-white',
                        content: "\n        <p>\n          We use a lot of Nebular components, some for layouting and some for their functionality.\n          Make use of whatever component makes sense for your problem at the time\n        </p>\n        <p>Below is a short overview of the different components we use from Nebular</p>\n        <ul>\n          <li><strong>Cards</strong> - for its styling purpose, making the layout more easily readable</li>\n          <li><strong>ContextMenu</strong> - easy menu setup with dropdowns/icons and more</li>\n          <li><strong>Stepper</strong> - for easier use of our app creation and settings</li>\n          <li><strong>Actions</strong> - used as our main navigation</li>\n          <li><strong>Forms</strong> - (inputs, buttons, datepicker, etc) - used a lot when posting or putting to the webservice</li>\n          <li><strong>Toastr</strong> - used for notifying the user of changes in the controlpanel</li>\n        </ul>\n        <p>\n          This is a snippet of some of the Nebular components. As stated, nebular is our main theming framework and is used a lot.\n          Feel free to use any of their components wherever it makes sense.\n        </p>\n         "
                    },
                ]
            },
        ];
    }
    MainPluginsOverviewComponent.prototype.ngOnInit = function () {
    };
    MainPluginsOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-plugins-overview',
            template: __webpack_require__(/*! raw-loader!./main-plugins-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.html"),
            styles: [__webpack_require__(/*! ./main-plugins-overview.component.css */ "./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPluginsOverviewComponent);
    return MainPluginsOverviewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=Documentation-angular-angular-module-es5.js.map