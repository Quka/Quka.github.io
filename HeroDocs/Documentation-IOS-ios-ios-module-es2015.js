(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Documentation-IOS-ios-ios-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/IOS/ios/Childcomponents/getting-started/getting-started.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/IOS/ios/Childcomponents/getting-started/getting-started.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-title>IOS Getting Started</mat-card-title>\n    </mat-card-header>\n</mat-card>\n\n\n<app-tab-group [contents]=\"content\">Hej</app-tab-group>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/IOS/ios/Childcomponents/navigation/navigation.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/IOS/ios/Childcomponents/navigation/navigation.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>navigation works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/IOS/ios/Childcomponents/single-app/single-app.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/IOS/ios/Childcomponents/single-app/single-app.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <mat-card-header>\n        <mat-card-title>IOS Single App</mat-card-title>\n    </mat-card-header>\n</mat-card>\n\n<app-tab-group [contents]=\"content\">Hej</app-tab-group>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Documentation/IOS/ios/ios.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Documentation/IOS/ios/ios.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/Documentation/IOS/ios/Childcomponents/getting-started/getting-started.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/Documentation/IOS/ios/Childcomponents/getting-started/getting-started.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vSU9TL2lvcy9DaGlsZGNvbXBvbmVudHMvZ2V0dGluZy1zdGFydGVkL2dldHRpbmctc3RhcnRlZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/Documentation/IOS/ios/Childcomponents/getting-started/getting-started.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/Documentation/IOS/ios/Childcomponents/getting-started/getting-started.component.ts ***!
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
    constructor() {
        this.content = [
            {
                tabtitle: 'Hardware',
                intro: 'You will need the following in order to develop IOS content on the HeroAppmaker platform',
                list: [
                    {
                        title: 'Hardware',
                        subtitle: '',
                        headerStyle: 'bg-info text-white',
                        content: `
          <ul>
          <li>A Macbook or iMac</li>
          <li>A testdevice iPhone or iPad</li>
          </ul>
          `
                    }
                ]
            },
            {
                tabtitle: "Software",
                intro: "You will need the following software in order to develop IOS content on the HeroAppMaker platform",
                list: [
                    {
                        title: "Xcode",
                        subtitle: "Swift/Objective C IDE",
                        headerStyle: 'bg-info text-white',
                        content: `
               <p>Xcode is our primary IOS IDE</p>
               <p>It is recommended to not have it update automaticly, because it can cause trouble when opening projects - we update Xcode scheduled</p>
               <p>Current versions</p>
               <ul>
                <li>Swift: version 4.0</li>
                <li>Xcode: version 10.3</li>
                </ul>
                <a href="https://apps.apple.com/dk/app/xcode/id497799835?l=da&mt=12">Download it from the appstore</a>
               `
                    },
                    {
                        title: "SQLPro",
                        subtitle: "MSSQL Client",
                        headerStyle: 'bg-info text-white',
                        content: `
          <p>SQL Pro is our MSSQL client of choice, it takes all sql queries and connects easily to the databases</p>
          <p>SQL Pro is paid software and requires a license key</p>
          
          <p>License Key</p>
          <ul>
            <li>S1-3689B7-4851E9-AADF98-B8608D-D860AA-PRYCUA</li>
            
          </ul>
          <a href="https://www.macsqlclient.com/">Download it from their website</a>
          `
                    },
                ]
            }
        ];
    }
    ngOnInit() {
    }
};
GettingStartedComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-getting-started',
        template: __webpack_require__(/*! raw-loader!./getting-started.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/IOS/ios/Childcomponents/getting-started/getting-started.component.html"),
        styles: [__webpack_require__(/*! ./getting-started.component.css */ "./src/app/Documentation/IOS/ios/Childcomponents/getting-started/getting-started.component.css")]
    }),
    __metadata("design:paramtypes", [])
], GettingStartedComponent);



/***/ }),

/***/ "./src/app/Documentation/IOS/ios/Childcomponents/navigation/navigation.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/Documentation/IOS/ios/Childcomponents/navigation/navigation.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vSU9TL2lvcy9DaGlsZGNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Documentation/IOS/ios/Childcomponents/navigation/navigation.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/Documentation/IOS/ios/Childcomponents/navigation/navigation.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

let NavigationComponent = class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavigationComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/IOS/ios/Childcomponents/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/Documentation/IOS/ios/Childcomponents/navigation/navigation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);



/***/ }),

/***/ "./src/app/Documentation/IOS/ios/Childcomponents/single-app/single-app.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/Documentation/IOS/ios/Childcomponents/single-app/single-app.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vSU9TL2lvcy9DaGlsZGNvbXBvbmVudHMvc2luZ2xlLWFwcC9zaW5nbGUtYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/Documentation/IOS/ios/Childcomponents/single-app/single-app.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/Documentation/IOS/ios/Childcomponents/single-app/single-app.component.ts ***!
  \******************************************************************************************/
/*! exports provided: SingleAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleAppComponent", function() { return SingleAppComponent; });
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

let SingleAppComponent = class SingleAppComponent {
    constructor() {
        this.items = [
            {
                title: 'Hardware',
                subtitle: 'What is the Single App',
                headerStyle: 'bg-info text-white',
                content: `
      <p>The Single App is an tabbar style mobile application. It is made from a tabbar navigation controller that can display up to 5 different pages.</p>
      <p>The app loads a list list from the DB and based on that list it generates the tabbar and the icons. THis will be shown in detail later.</p>
      `
            },
        ];
        this.content = [
            {
                tabtitle: "Introduction",
                intro: "The Single App is an tabbar style mobile application. It is made from a tabbar navigation controller that can display up to 5 different pages.",
                list: [
                    {
                        title: "Purpose",
                        subtitle: "What do we use the single app for?",
                        headerStyle: 'bg-info text-white',
                        content: `
              <p>The app loads a list list from the DB and based on that list it generates the tabbar and the icons. THis will be shown in detail later.</p>
              `
                    },
                ]
            },
            {
                tabtitle: "Directory overview",
                intro: "An overview and explanation of the IOS Single App directory",
                list: [
                    {
                        title: 'Folder structure',
                        subtitle: 'An overview of the folder structure',
                        headerStyle: 'bg-info text-white',
                        content: `
                  <p>Below is the folder structure visualized with corresponding comments</p>
                  <ul>
                  <li><strong>SingleApp</strong> - Project root, contains the entire project
                      <ul>
                          <li><strong>BaseClasses</strong> - base classes for buttons, labels and much more - used if we want to create a class for UIElements.
                          <li><strong>Launcscreens</strong> - used for custom launchscreens for each app.
                          <li><strong>PlistFiles</strong> - plist files, witch are used for connecting to firebase services.
                          <li><strong>TableCells</strong> - cell adapters for prototype cells - used for creating a connection between cell and code.
                          <li><strong>HelperClasses</strong> - all utility classes
                              <ul>
                                  <li><strong>Utilities</strong> - global functions.
                                  <li><strong>Extensions</strong> - class extensions.
                                  <li><strong>Controllers</strong> - controllers for http requests.
                                      <ul>
                                          <li><strong>Pages</strong> - http requests for pages.
                                          <li><strong>Resources</strong> - http requests for resurces like menu, layout, images etc.
                                      </ul>
                              </ul>
                          <li><strong>Assets</strong> - contains asset folder for each app, containing icons, launchscreen images and other custom image files.
                          <li><strong>Constants</strong> - constant files where data is stored locally when loaded from the DB.
                              <ul>
                                  <li><strong>AppConstants</strong> - Contains a constant file for each app with appid.
                              </ul>
                          <li><strong>Model</strong> - modelclasses
                          <li><strong>ViewController</strong> - viewcontrollers
                              <ul>
                                  <li><strong>Pages</strong> - viewcontrollers for pages.
                                  <li><strong>Loading</strong> - viewcontroller for loading.
                              </ul>
                          <li><strong>View</strong> - storyboards for every page
                              
                          </li>
                      </ul>
                  </li>
              </ul>
              <p>The project contains additional folders and files - those of importance will be explained in detail later</p>
                  `
                    }
                ]
            },
            {
                tabtitle: "Add new page",
                intro: "Adding a new page to the single app requires a certain amount of tasks to be performed in order to add the page for production",
                list: [
                    {
                        title: "Database",
                        subtitle: "",
                        headerStyle: 'bg-info text-white',
                        content: `
                  <p><strong>PageId</strong></p>
                  <p>When adding a new page you have to add it to the DB first</p>
                  <p>Adding the page to the list of pages - execute the code below in an SQL Client</p>
<pre>
INSERT INTO dbo.PageId ( name, description, app) 
VALUES (
    '<span class="hl">[PageName]</span>', 
    '<span class="hl">[PageDescription]</span>', 
    '<span class="hl">[AppType (Single/Event/AppInApp)]</span>'
);</pre>

                  <p>This adds the page to the list of pages that is shown in the Add Page dropdown section of the dashboard</p>

                  <p><strong>Table</strong></p>
                  <p>Next we add a new table for the page - all pages have to contain id, appId and targetPageId - theese are essential for the system to work and explained in detail in another chapter</p>
<pre>
CREATE TABLE <span class="hl">[TableName]</span> (
    id int IDENTITY(1,1) PRIMARY KEY,
    appId int NOT NULL,
    targetPageId int NOT NULL,
    <span class="hl">[AdditionalProperties]</span> NOT NULL
);</pre>
                  <p>This adds the new table that we can use to store page data</p>

                  `
                    },
                    {
                        title: "Webservice",
                        subtitle: "",
                        headerStyle: 'bg-info text-white',
                        content: `
                <p>A new entry in the webservice HAppWebSerivice is required - see information in the Webservice section on how this is done</p>
                <a href="">Insert link to webservice</a>
                 `
                    },
                    {
                        title: "Model Class",
                        subtitle: "",
                        headerStyle: 'bg-info text-white',
                        content: `
                  <p>Create a modelclass based on the table created in the DB</p>
                  <p>In swift you have to make a model struct that is decodeable - it means that the class can be parsed automaticly by Xcode</p>
                  <p>Create a new swift file in the ModelClass directory and use the below class as inspiration</p>
                  <pre>
import Foundation

struct Message: <span class="hl">Decodable</span>{
    var id: Int
    var appId: Int
    var pageId: Int
    var imageUrl: String
    var messageDate: String
    var messageHeader: String
    var messageContent: String
}</pre>
                  `
                    },
                    {
                        title: "Controller",
                        subtitle: "HelperClasses/Controllers/Pages",
                        headerStyle: 'bg-info text-white',
                        content: `
                <p>ToDo</p>
                 `
                    },
                    {
                        title: "Loading",
                        subtitle: "ViewController/Loading",
                        headerStyle: 'bg-info text-white',
                        content: `
                <p>ToDo</p>
                `
                    },
                    {
                        title: "Constants",
                        subtitle: "",
                        headerStyle: 'bg-info text-white',
                        content: `
                <p>ToDo</p>
                 `
                    },
                    {
                        title: "Storyboard",
                        subtitle: "",
                        headerStyle: 'bg-info text-white',
                        content: `
                <p>ToDo</p>
                 `
                    },
                    {
                        title: "ViewController",
                        subtitle: "",
                        headerStyle: 'bg-info text-white',
                        content: `
                <p>ToDo</p>
                 `
                    },
                    {
                        title: "Storyboard",
                        subtitle: "",
                        headerStyle: 'bg-info text-white',
                        content: `
                <p>ToDo</p>
                 `
                    },
                ]
            },
        ];
    }
    ngOnInit() {
    }
};
SingleAppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-single-app',
        template: __webpack_require__(/*! raw-loader!./single-app.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/IOS/ios/Childcomponents/single-app/single-app.component.html"),
        styles: [__webpack_require__(/*! ./single-app.component.css */ "./src/app/Documentation/IOS/ios/Childcomponents/single-app/single-app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SingleAppComponent);



/***/ }),

/***/ "./src/app/Documentation/IOS/ios/ios-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Documentation/IOS/ios/ios-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: IOSRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOSRoutingModule", function() { return IOSRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Childcomponents_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Childcomponents/navigation/navigation.component */ "./src/app/Documentation/IOS/ios/Childcomponents/navigation/navigation.component.ts");
/* harmony import */ var _Childcomponents_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Childcomponents/getting-started/getting-started.component */ "./src/app/Documentation/IOS/ios/Childcomponents/getting-started/getting-started.component.ts");
/* harmony import */ var _Childcomponents_single_app_single_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Childcomponents/single-app/single-app.component */ "./src/app/Documentation/IOS/ios/Childcomponents/single-app/single-app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const routes = [
    { path: 'navigation', component: _Childcomponents_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"] },
    { path: 'getting-started', component: _Childcomponents_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_3__["GettingStartedComponent"] },
    { path: 'single-app', component: _Childcomponents_single_app_single_app_component__WEBPACK_IMPORTED_MODULE_4__["SingleAppComponent"] },
];
let IOSRoutingModule = class IOSRoutingModule {
};
IOSRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], IOSRoutingModule);



/***/ }),

/***/ "./src/app/Documentation/IOS/ios/ios.component.css":
/*!*********************************************************!*\
  !*** ./src/app/Documentation/IOS/ios/ios.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0RvY3VtZW50YXRpb24vSU9TL2lvcy9pb3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/Documentation/IOS/ios/ios.component.ts":
/*!********************************************************!*\
  !*** ./src/app/Documentation/IOS/ios/ios.component.ts ***!
  \********************************************************/
/*! exports provided: IOSComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOSComponent", function() { return IOSComponent; });
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

let IOSComponent = class IOSComponent {
    constructor() { }
    ngOnInit() {
    }
};
IOSComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-ios',
        template: __webpack_require__(/*! raw-loader!./ios.component.html */ "./node_modules/raw-loader/index.js!./src/app/Documentation/IOS/ios/ios.component.html"),
        styles: [__webpack_require__(/*! ./ios.component.css */ "./src/app/Documentation/IOS/ios/ios.component.css")]
    }),
    __metadata("design:paramtypes", [])
], IOSComponent);



/***/ }),

/***/ "./src/app/Documentation/IOS/ios/ios.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Documentation/IOS/ios/ios.module.ts ***!
  \*****************************************************/
/*! exports provided: IOSModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOSModule", function() { return IOSModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ios_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ios-routing.module */ "./src/app/Documentation/IOS/ios/ios-routing.module.ts");
/* harmony import */ var _ios_ios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ios/ios.component */ "./src/app/Documentation/IOS/ios/ios.component.ts");
/* harmony import */ var _Childcomponents_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Childcomponents/navigation/navigation.component */ "./src/app/Documentation/IOS/ios/Childcomponents/navigation/navigation.component.ts");
/* harmony import */ var _Childcomponents_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Childcomponents/getting-started/getting-started.component */ "./src/app/Documentation/IOS/ios/Childcomponents/getting-started/getting-started.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_tab_group_tab_group_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/tab-group/tab-group.module */ "./src/app/Documentation/shared/tab-group/tab-group.module.ts");
/* harmony import */ var _Childcomponents_single_app_single_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Childcomponents/single-app/single-app.component */ "./src/app/Documentation/IOS/ios/Childcomponents/single-app/single-app.component.ts");
/* harmony import */ var _shared_docs_card_docs_card_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/docs-card/docs-card.module */ "./src/app/Documentation/shared/docs-card/docs-card.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let IOSModule = class IOSModule {
};
IOSModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _ios_ios_component__WEBPACK_IMPORTED_MODULE_3__["IOSComponent"],
            _Childcomponents_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
            _Childcomponents_getting_started_getting_started_component__WEBPACK_IMPORTED_MODULE_5__["GettingStartedComponent"],
            _Childcomponents_single_app_single_app_component__WEBPACK_IMPORTED_MODULE_8__["SingleAppComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ios_routing_module__WEBPACK_IMPORTED_MODULE_2__["IOSRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _shared_tab_group_tab_group_module__WEBPACK_IMPORTED_MODULE_7__["TabGroupModule"],
            _shared_docs_card_docs_card_module__WEBPACK_IMPORTED_MODULE_9__["DocsCardModule"]
        ],
        providers: []
    })
], IOSModule);



/***/ })

}]);
//# sourceMappingURL=Documentation-IOS-ios-ios-module-es2015.js.map