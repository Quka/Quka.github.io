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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
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







const routes = [
    { path: 'getting-started', component: _child_components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_2__["GettingStartedComponent"] },
    { path: 'directory-overview', component: _child_components_directory_overview_directory_overview_component__WEBPACK_IMPORTED_MODULE_3__["DirectoryOverviewComponent"] },
    { path: 'main-plugins-overview', component: _child_components_main_plugins_overview_main_plugins_overview_component__WEBPACK_IMPORTED_MODULE_4__["MainPluginsOverviewComponent"] },
    { path: 'main-components', component: _child_components_main_components_main_components_component__WEBPACK_IMPORTED_MODULE_5__["MainComponentsComponent"] },
    { path: 'developing-features', component: _child_components_developing_features_developing_features_component__WEBPACK_IMPORTED_MODULE_6__["DevelopingFeaturesComponent"] },
];
let AngularRoutingModule = class AngularRoutingModule {
};
AngularRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AngularRoutingModule);



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

let AngularComponent = class AngularComponent {
    constructor() { }
    ngOnInit() {
    }
};
AngularComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-angular',
        template: __webpack_require__(/*! raw-loader!./angular.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/angular.component.html"),
        styles: [__webpack_require__(/*! ./angular.component.css */ "./src/app/Documentation/angular/angular.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AngularComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./angular-routing.module */ "./src/app/Documentation/angular/angular-routing.module.ts");
/* harmony import */ var _angular_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular.component */ "./src/app/Documentation/angular/angular.component.ts");
/* harmony import */ var _child_components_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child-components/getting-started/getting-started.component */ "./src/app/Documentation/angular/child-components/getting-started/getting-started.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
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












let AngularModule = class AngularModule {
};
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

let DevelopingFeaturesComponent = class DevelopingFeaturesComponent {
    constructor() { }
    ngOnInit() {
    }
};
DevelopingFeaturesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-developing-features',
        template: __webpack_require__(/*! raw-loader!./developing-features.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/developing-features/developing-features.component.html"),
        styles: [__webpack_require__(/*! ./developing-features.component.css */ "./src/app/Documentation/angular/child-components/developing-features/developing-features.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DevelopingFeaturesComponent);



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

let DirectoryOverviewComponent = class DirectoryOverviewComponent {
    constructor() {
        this.items = [
            {
                title: 'Folder structure',
                subtitle: 'An overview of the folder structure',
                headerStyle: 'bg-info text-white',
                content: `
      <p>Below is the folder structure visualized with corresponding comments</p>
      <ul>
          <li><strong>src/app</strong> - the root of our project, containing our components
              <ul>
                  <li><strong>Components</strong> - contains all our components
                      <ul>
                          <li><strong>access-denied</strong> - shows this page when user isn't logged in</li>
                          <li><strong>admin-settings</strong> - used only by Hero for administrating the control panel</li>
                          <li><strong>app-settings</strong> - for the user to adjust app settings
                              <ul>
                                  <li><strong>app-color-settings</strong> - settings for changing app colors</li>
                                  <li>
                                      <strong>app-images</strong> - contains several components for changing images in the app
                                  </li>
                                  <li>
                                      <strong>appstore-settings</strong> - contains settings which are used in the app store for the app
                                  </li>
                              </ul>
                          </li>
                          <li><strong>create-new-app</strong> - shows a stepper for creatings apps
                              <ul>
                                  <li><strong>publish-app</strong> - contains a stepper with required fields when the user is
                                      ready to publish their app</li>
                              </ul>
                          </li>
                          <li><strong>header</strong> - the header containing the logo, menu, and user settings menu</li>
                          <li><strong>home</strong> - the default route component (first page), contains helpful sections</li>
                          <li><strong>imagecrop</strong> - the image cropper for uploading images</li>
                          <li><strong>login</strong> - the login component (heavily customized styles)</li>
                          <li><strong>my-app</strong> - my app component contains all the different pages for administrating the app
                              <ul>
                                  <li><strong>ChildComponents</strong>
                                      <ul>
                                          <li><strong>activity</strong>
                                              <ul>
                                                  <li>editActivity</li>
                                              </ul>
                                          </li>
                                          <li><strong>addpage - for adding new pages to the controlpanel and the app</strong></li>
                                          <li><s><strong>app-layout</strong> - deprecated</s></li>
                                          <li><strong>apphometext</strong></li>
                                          <li><strong>class</strong>
                                              <ul>
                                                  <li>editClass</li>
                                              </ul>
                                          </li>
                                          <li><strong>contact</strong></li>
                                          <li><strong>event</strong>
                                              <ul>
                                                  <li>
                                                      editEvent
                                                  </li>
                                              </ul>
                                          </li>
                                          <li><strong>information</strong>
                                              <ul>
                                                  <li>
                                                      editInformation
                                                  </li>
                                              </ul>
                                          </li>
                                          <li><strong>live-timings</strong></li>
                                          <li><strong>localinfo</strong></li>
                                          <li><strong>map-marker</strong> - app page for adding a map with defined marker
                                              <ul>
                                                  <li>editMarker</li>
                                              </ul>
                                          </li>
                                          <li><strong>message</strong>
                                              <ul>
                                                  <li>
                                                      deleteMessage
                                                  </li>
                                              </ul>
                                          </li>
                                          <li><strong>no-more-pages</strong> - shows when the user has more pages to use, than available programmed pages</li>
                                          <li><strong>out-of-pages</strong> - an error page for when a user has exceeded their max number of pages</li>
                                          <li><strong>participant-list</strong>
                                              <ul>
                                                  <li>addParticipant</li>
                                                  <li>editParticipant</li>
                                                  <li>editRaceMenu</li>
                                              </ul>
                                          </li>
                                          <li><strong>race-official</strong>
                                              <ul>
                                                  <li>editRaceOfficial</li>
                                              </ul>
                                          </li>
                                          <li><strong>raceprogram</strong>
                                              <ul>
                                                  <li>editraceprogram</li>
                                              </ul>
                                          </li>
                                          <li><strong>socialtext</strong></li>
                                          <li><strong>ticket</strong>
                                              <ul>
                                                  <li>editTicket</li>
                                              </ul>
                                          </li>
                                          <li><strong>travel</strong>
                                              <ul>
                                                  <li>edit-travel</li>
                                              </ul>
                                          </li>
                                          <li><strong>welcome</strong> - the default page for addpage</li>
                                      </ul>
                                  </li>
                              </ul>
                          </li>
                          <li><strong>newsletter</strong> - future newsletter component</li>
                          <li><strong>not-found404</strong> - 404 page not found component</li>
                          <li><strong>notifications</strong> - page for sending out notifications to the users app</li>
                          <li><strong>reset-password</strong></li>
                          <li><strong>settings</strong> - settings relevant to the controlpanel, such as users settings</li>
                          <li><strong>user-menu</strong> - the user settings menu component</li>
                      </ul>
                  </li>
                  <li><strong>Interfaces</strong> - all our model classes used throughout the control panel</li>
                  <li><strong>Services</strong> - very useful functions / services used throughout the control panel
                      <ul>
                          <li><strong>auth</strong> - uses FirebaseAuth to signup/login/logout/authenticate users. Also contains password reset and toasts</li>
                          <li><s><strong>contactHttp</strong> - deprecated</s></li>
                          <li><strong>errorlog.service</strong> - called on catched errors, sends an email and makes a toast on errors</li>
                          <li><strong>FieldValidator</strong> - not in use yet</li>
                          <li><strong>guards</strong> - contains guards used on routes to make sure requirements are met before routing
                              <ul>
                                  <li><strong>adminGuard</strong> - check if user is admin (for our use)</li>
                                  <li><strong>GuardService</strong> - check if user is logged in</li>
                                  <li><strong>PagesAmountGuard</strong> - checks if user has reached max nr of pages</li>
                              </ul>
                          </li>
                          <li><strong>HeaderNavigation</strong> - navigates to other routes</li>
                          <li><strong>helper.service</strong> - used in general for getting/updating titles and menus</li>
                          <li><strong>Toastr</strong> - creates pop up toasts</li>
                      </ul>
                  </li>
              </ul>
          </li>
          <li><strong>dist</strong> - when the project is build for production, it is generated in the dist folder, upload to the webserver</li>
      </ul>
      `
            },
        ];
    }
    ngOnInit() {
    }
};
DirectoryOverviewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-directory-overview',
        template: __webpack_require__(/*! raw-loader!./directory-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.html"),
        styles: [__webpack_require__(/*! ./directory-overview.component.css */ "./src/app/Documentation/angular/child-components/directory-overview/directory-overview.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DirectoryOverviewComponent);



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
    constructor() {
        this.items = [
            {
                title: 'Info',
                subtitle: 'How do we use Angular',
                headerStyle: 'bg-info text-white',
                content: `
      <p>We use Angular for developing the control panel. The Angular control panel is for our customers
      to use in administrating their apps.</p>
      <p>The control panel has several features but is primarily used for its MyApp component - which is where
      the user can change the contents of their app. This documentation will describe how to
      develop on these features.</p>
      `
            },
            {
                title: 'Setup',
                subtitle: 'How to setup Angular',
                headerStyle: 'bg-info text-white',
                content: `
      <p>Download and install Node.js</p>
      <ul>
      <li><a href="https://nodejs.org/en/">Download node.js here</a></li>
      <li>Make sure Node and Npm are installed</li>
      <li>In the terminal run: 'node -v' and 'npm -v'</li>
      </ul>

      <p>Install Angular CLI (globally)</p>
      <ul>
      <li>In the terminal run: 'npm install -g @angular/cli'</li>
      <li>Read the CLI docs if you're not fully updated on available commands (<a href="https://cli.angular.io/">Angular CLI</a>)</li>
      <li>Important commands: 'ng serve -o' | 'ng g c [component]' | 'ng g m [module]'</li>
      </ul>

      <p>Working on the Angular projects</p>
      <ul>
      <li>Setup an appropriate folder structure</li>
      <li>Git clone the project to the folder</li>
      <li>Open the project and terminal in VSCode and run: 'npm install' and then 'ng serve -o'</li>
      </ul>
      `
            },
            {
                title: 'Contents',
                subtitle: 'The contents of the Angular docs',
                headerStyle: 'bg-info text-white',
                content: `
      <ol>
      <li>Directory overview
        <ul>
          <li>src/app
            <ul>
              <li>Components</li>
              <li>Interfaces</li>
              <li>Services</li>
              <li>assets</li>
              <li>evnviroment</li>
            </ul>
          </li>
          <li>dist</li>
        </ul>
      </li>
      <li>Main plugins overview
        <ul>
          <li>Nebular</li>
          <li>The App module (and nebular)</li>
      </ul>
      </li>
      <li>Main components</li>
      <li>Developing features</li>
      </ol>
      `
            },
        ];
    }
    ngOnInit() {
    }
};
GettingStartedComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-getting-started',
        template: __webpack_require__(/*! raw-loader!./getting-started.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/getting-started/getting-started.component.html"),
        styles: [__webpack_require__(/*! ./getting-started.component.css */ "./src/app/Documentation/angular/child-components/getting-started/getting-started.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GettingStartedComponent);



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

let MainComponentsComponent = class MainComponentsComponent {
    constructor() {
        this.content = [
            {
                tabtitle: "My App ",
                intro: "The my-app components and it's child components",
                list: [
                    {
                        title: "Description",
                        subtitle: "How do we use it",
                        headerStyle: 'bg-info text-white',
                        content: `
          <p>
            The my app component is the component we most likely will spend the most time developing in.
            It is here we add new pages to the control panel, when these are created in the android and iOS apps.
          </p>
          <p>
            The my app-component contains a ChildComponents folder with all the pages that are available in the app.
          </p>
          <p>
            The addpage component is the one used for adding new pages, and is not an actual page in the app. 
            Every other component is a page selectable in the addpagge component. 
          </p>
          <pre>
my-app
 - ChildComponents
   > activity
   > <span class="hl">addpage</span>
   > app-layout
   > apphometext
     ...
          </pre>
          <p>See the <a href="angular/developing-features">developing features page</a>, for a how to on implementing new pages</p>
          `
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
                        content: `
        addpage
         `
                    },
                ]
            },
        ];
    }
    ngOnInit() {
    }
};
MainComponentsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-main-components',
        template: __webpack_require__(/*! raw-loader!./main-components.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/main-components/main-components.component.html"),
        styles: [__webpack_require__(/*! ./main-components.component.css */ "./src/app/Documentation/angular/child-components/main-components/main-components.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainComponentsComponent);



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

let MainPluginsOverviewComponent = class MainPluginsOverviewComponent {
    constructor() {
        this.content = [
            {
                tabtitle: "Bootstrap",
                intro: "We use bootstrap in conjuction with nebular (our theme) for layouting the controlpanel",
                list: [
                    {
                        title: "Purpose",
                        subtitle: "How do we use bootstrap",
                        headerStyle: 'bg-info text-white',
                        content: `
            <p>
            We mainly use bootstrap for its layouting and responsive capabilities when we create our components. More specifically
            the container, row, and col classes. And media queries in the CSS.
            </p>
            <p>
            We also use the bootstrap for its other predefined styles, such as formms and buttons which you can read more about.
            <ul>
              <li>Read the <a href="https://getbootstrap.com/docs/4.3/layout/overview/">bootstrap documentation</a> for in-depth info.</li>
            </ul>
            </p>
            `
                    },
                    {
                        title: "Layouting",
                        subtitle: "How to use containers, rows, cols",
                        headerStyle: 'bg-info text-white',
                        content: `
          <p>When we create a component we use a default setup with a root container div with a row child and col child.</p>
          <p>Depending on how the layout should look, we use col-lg-6 (lg are large devices aka desktop and half column) and col-12 (default full width column on all devices).</p>
          <p>Below is an example of a component we use (home.component.html)</p>
          <pre>
&lt;div class=&quot;<span class="hl">container-fluid</span>&quot;&gt;
  &lt;div class=&quot;<span class="hl">row</span>&quot;&gt;
      &lt;div class=&quot;<span class="hl">col-12 col-lg-6</span>&quot;&gt;
          &lt;nb-card&gt;
          ...
          &lt;/nb-card&gt;
      &lt;/div&gt;
      &lt;div class=&quot;<span class="hl">col-12 col-lg-6</span>&quot;&gt;
          &lt;nb-card&gt;
              &lt;nb-card-header class=&quot;card-header&quot;&gt;Nyheder&lt;/nb-card-header&gt;
              &lt;nb-card-body&gt;
                  ...
              &lt;/nb-card-body&gt;
          &lt;/nb-card&gt;
      &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
          </pre>

          <p>The highlighted areas shows how we use col-12 on small deviced and col-lg-6 for larger devices.</p>
          <p>
            Notice that a row has a maximum col amount of 12. So make sure not to cram too, 
            much information inside a row, instead create another row below it.
          </p>
          `
                    },
                    {
                        title: "Responsive CSS",
                        subtitle: "How to use responsive CSS styles and media queries",
                        headerStyle: 'bg-info text-white',
                        content: `
        <p>Usually we need to make some custom CSS styling to make sure the components look good on small devices.</p>
        <p>For this we use media queries in specific components stylesheet. These media queries has a target of small devices up to desktop (up to 991px) - excluding desktops</p>
        <p>Below is an example of how we use media queries in a editBox component</p>
        <pre>
.container-fluid {
    min-width: 600px;
}

button {
    cursor: pointer !important;
}

.img-wrapper {
    min-height: 300px;
}

input,
label {
    width: 100%;
}

<span class="hl">@media (max-width: 991px)</span> {
    .container-fluid {
        min-width: 0;
    }

    .img-wrapper {
        min-height: 0;
    }
}
        </pre>
         `
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
                        content: `
            <p>
            Nebular is used for theming our controlpanel. We use their predefined components and styles for developing in Angular faster.
            We use a lot of their predefined components, which you should read up on.
            <ul>
              <li><a href="https://akveo.github.io/nebular/docs/components/components-overview">The Nebular docs</a></li>
            </ul>
            </p>
            `
                    },
                    {
                        title: "Theming",
                        subtitle: "How do we use Nebular components",
                        headerStyle: 'bg-info text-white',
                        content: `
        <p>
          We use a lot of Nebular components, some for layouting and some for their functionality.
          Make use of whatever component makes sense for your problem at the time
        </p>
        <p>Below is a short overview of the different components we use from Nebular</p>
        <ul>
          <li><strong>Cards</strong> - for its styling purpose, making the layout more easily readable</li>
          <li><strong>ContextMenu</strong> - easy menu setup with dropdowns/icons and more</li>
          <li><strong>Stepper</strong> - for easier use of our app creation and settings</li>
          <li><strong>Actions</strong> - used as our main navigation</li>
          <li><strong>Forms</strong> - (inputs, buttons, datepicker, etc) - used a lot when posting or putting to the webservice</li>
          <li><strong>Toastr</strong> - used for notifying the user of changes in the controlpanel</li>
        </ul>
        <p>
          This is a snippet of some of the Nebular components. As stated, nebular is our main theming framework and is used a lot.
          Feel free to use any of their components wherever it makes sense.
        </p>
         `
                    },
                ]
            },
        ];
    }
    ngOnInit() {
    }
};
MainPluginsOverviewComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-main-plugins-overview',
        template: __webpack_require__(/*! raw-loader!./main-plugins-overview.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.html"),
        styles: [__webpack_require__(/*! ./main-plugins-overview.component.css */ "./src/app/Documentation/angular/child-components/main-plugins-overview/main-plugins-overview.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainPluginsOverviewComponent);



/***/ })

}]);
//# sourceMappingURL=Documentation-angular-angular-module-es2015.js.map