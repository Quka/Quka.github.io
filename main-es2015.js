(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div class=\"main-container\" [dir]=\"dir\" [ngClass]=\"{'minisidebar': minisidebar, 'boxed': boxed, 'danger': danger, 'blue': blue, 'green': green, 'dark': dark }\">\r\n    <!-- ============================================================== -->\r\n    <!-- Topbar - style you can find in header.scss -->\r\n    <!-- ============================================================== -->\r\n    <mat-toolbar color=\"primary\" class=\"topbar telative\">\r\n        <!-- ============================================================== -->\r\n        <!-- Logo - style you can find in header.scss -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"/\">\r\n                <!-- Logo icon -->\r\n                <b>\r\n                    <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\r\n                    <!-- Dark Logo icon -->\r\n                    <img src=\"assets/images/hero/logo-white.png\" alt=\"homepage\" class=\"dark-logo\">\r\n                    <!-- Light Logo icon -->\r\n                    <img src=\"assets/images/hero/logo-white.png\" alt=\"homepage\" class=\"light-logo\">\r\n                </b>\r\n                <!--End Logo icon -->\r\n            </a>\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- sidebar toggle -->\r\n        <!-- ============================================================== -->\r\n\r\n        <button mat-icon-button (click)=\"snav.toggle()\" value=\"sidebarclosed\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n        <!-- ============================================================== -->\r\n        <!-- Search - style you can find in header.scss -->\r\n        <!-- ============================================================== -->\r\n        <button mat-icon-button class=\"srh-btn\">\r\n            <mat-icon>search</mat-icon>\r\n        </button>\r\n        <form class=\"app-search\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search &amp; enter\">\r\n            <a class=\"cl-srh-btn\">\r\n                <i class=\"ti-close\"></i>\r\n            </a>\r\n        </form>\r\n        <span fxFlex></span>\r\n        <button (click)=\"end.toggle()\" mat-icon-button class=\"ml-xs overflow-visible\">\r\n            <mat-icon>settings</mat-icon>\r\n        </button>\r\n    </mat-toolbar>\r\n    <!-- ============================================================== -->\r\n    <!-- End Topbar - style you can find in pages.scss -->\r\n    <!-- ============================================================== -->\r\n    <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 0 : 0\"\r\n        [ngClass]=\"{'minisidebar': minisidebar}\">\r\n        <!-- ============================================================== -->\r\n        <!-- Sidebar - style you can find in sidebar.scss -->\r\n        <!-- ============================================================== -->\r\n        <mat-sidenav #snav id=\"snav\" class=\"pl-xs\" [mode]=\"mobileQuery.matches ? 'side' : 'over'\" fixedTopGap=\"0\"\r\n            [opened]=\"mobileQuery.matches\" [disableClose]=\"mobileQuery.matches\" (open)=\"sidebarOpened = true\" (close)=\"sidebarOpened = false\"\r\n            [perfectScrollbar]=\"config\">\r\n\r\n            <app-sidebar class=\"app-sidebar\"></app-sidebar>\r\n\r\n        </mat-sidenav>\r\n        <!-- ============================================================== -->\r\n        <!-- Sidebar - style you can find in sidebar.scss -->\r\n        <!-- ============================================================== -->\r\n        <!-- ============================================================== -->\r\n        <!-- Right Sidebar - style you can find in rightsidebar.component.scss -->\r\n        <!-- ============================================================== -->\r\n        <mat-sidenav #end position=\"end\" class=\"chat-panel\" mode=\"over\" opened=\"false\">\r\n            <div class=\"scroll\">\r\n                <mat-nav-list>\r\n\r\n                    <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Settings</h3>\r\n                    <mat-list-item>\r\n                        <mat-slide-toggle color=\"warn\" (change)=\"dir = (dir == 'rtl' ? 'ltr' : 'rtl')\">RTL</mat-slide-toggle>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <mat-slide-toggle color=\"warn\" [(ngModel)]=\"boxed\">Boxed Layout</mat-slide-toggle>\r\n                    </mat-list-item>\r\n                    <!--<mat-list-item>\r\n                    <mat-slide-toggle [(ngModel)]=\"minisidebar\">Mini Sidebar</mat-slide-toggle>\r\n                  </mat-list-item>    -->\r\n                    <mat-divider></mat-divider>\r\n                    <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Colors</h3>\r\n                    <mat-list-item>\r\n                        <mat-checkbox color=\"warn\" [(ngModel)]=\"danger\" (change)=\"green = blue = false\" class=\"text-danger\">Red</mat-checkbox>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <mat-checkbox color=\"warn\" [(ngModel)]=\"green\" (change)=\"danger = blue = false\" class=\"text-megna\">Teal\r\n                            Green</mat-checkbox>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <mat-checkbox color=\"warn\" [(ngModel)]=\"blue\" (change)=\"green = danger = false\" class=\"text-info\">Blue</mat-checkbox>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <mat-checkbox color=\"warn\" [(ngModel)]=\"dark\" (change)=\"green = blue = danger = false\">Dark</mat-checkbox>\r\n                    </mat-list-item>\r\n                </mat-nav-list>\r\n            </div>\r\n        </mat-sidenav>\r\n\r\n        <!-- ============================================================== -->\r\n        <!-- Page container - style you can find in pages.scss -->\r\n        <!-- ============================================================== -->\r\n        <mat-sidenav-content class=\"page-wrapper\">\r\n            \r\n                <div class=\"page-content\">\r\n\r\n                    <router-outlet>\r\n                        <app-spinner></app-spinner>\r\n                    </router-outlet>\r\n\r\n                </div>\r\n            \r\n        </mat-sidenav-content>\r\n        <!-- ============================================================== -->\r\n        <!-- Page container - style you can find in pages.scss -->\r\n        <!-- ============================================================== -->\r\n    </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/full.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Main wrapper - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n<div class=\"main-container\" [dir]=\"dir\" [ngClass]=\"{'minisidebar': minisidebar, 'boxed': boxed, 'danger': danger, 'blue': blue, 'green': green, 'dark': dark }\">\r\n    <!-- ============================================================== -->\r\n    <!-- Topbar - style you can find in header.scss -->\r\n    <!-- ============================================================== -->\r\n    <mat-toolbar color=\"primary\" class=\"topbar telative\">\r\n        <!-- ============================================================== -->\r\n        <!-- Logo - style you can find in header.scss -->\r\n        <!-- ============================================================== -->\r\n        <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" href=\"/\">\r\n                <!-- Logo icon -->\r\n                <b>\r\n                    <!--You can put here icon as well // <i class=\"wi wi-sunset\"></i> //-->\r\n                    <!-- Dark Logo icon -->\r\n                    <img src=\"assets/images/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\">\r\n                    <!-- Light Logo icon -->\r\n                    <img src=\"assets/images/logo-light-icon.png\" alt=\"homepage\" class=\"light-logo\">\r\n                </b>\r\n                <!--End Logo icon -->\r\n                <!-- Logo text -->\r\n                <span fxShow=\"false\" fxShow.gt-xs>\r\n                    <!-- dark Logo text -->\r\n                    <img src=\"assets/images/logo-text.png\" alt=\"homepage\" class=\"dark-logo\">\r\n                    <!-- Light Logo text -->\r\n                    <img src=\"assets/images/logo-light-text.png\" class=\"light-logo\" alt=\"homepage\">\r\n                </span>\r\n            </a>\r\n        </div>\r\n        <!-- ============================================================== -->\r\n        <!-- sidebar toggle -->\r\n        <!-- ============================================================== -->\r\n\r\n        <button mat-icon-button (click)=\"snav.toggle()\" value=\"sidebarclosed\">\r\n            <mat-icon>menu</mat-icon>\r\n        </button>\r\n        <!-- ============================================================== -->\r\n        <!-- Search - style you can find in header.scss -->\r\n        <!-- ============================================================== -->\r\n        <button mat-icon-button class=\"srh-btn\">\r\n            <mat-icon>search</mat-icon>\r\n        </button>\r\n        <form class=\"app-search\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search &amp; enter\">\r\n            <a class=\"cl-srh-btn\">\r\n                <i class=\"ti-close\"></i>\r\n            </a>\r\n        </form>\r\n        <span fxFlex></span>\r\n        <!-- ============================================================== -->\r\n        <!-- app header component - style you can find in header.scss / header.component.ts-->\r\n        <!-- ============================================================== -->\r\n        <app-header></app-header>\r\n        <!-- ============================================================== -->\r\n        <!-- Right sidebar toggle - style you can find in rightsidebar.component.scss -->\r\n        <!-- ============================================================== -->\r\n        <button (click)=\"end.toggle()\" mat-icon-button class=\"ml-xs overflow-visible\">\r\n            <mat-icon>settings</mat-icon>\r\n        </button>\r\n    </mat-toolbar>\r\n    <!-- ============================================================== -->\r\n    <!-- End Topbar - style you can find in pages.scss -->\r\n    <!-- ============================================================== -->\r\n    <mat-sidenav-container class=\"example-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 0 : 0\"\r\n        [ngClass]=\"{'minisidebar': minisidebar}\">\r\n        <!-- ============================================================== -->\r\n        <!-- Sidebar - style you can find in sidebar.scss -->\r\n        <!-- ============================================================== -->\r\n        <mat-sidenav #snav id=\"snav\" class=\"pl-xs\" [mode]=\"mobileQuery.matches ? 'side' : 'over'\" fixedTopGap=\"0\"\r\n            [opened]=\"mobileQuery.matches\" [disableClose]=\"mobileQuery.matches\" (open)=\"sidebarOpened = true\" (close)=\"sidebarOpened = false\"\r\n            [perfectScrollbar]=\"config\">\r\n\r\n            <app-sidebar class=\"app-sidebar\"></app-sidebar>\r\n\r\n        </mat-sidenav>\r\n        <!-- ============================================================== -->\r\n        <!-- Sidebar - style you can find in sidebar.scss -->\r\n        <!-- ============================================================== -->\r\n        <!-- ============================================================== -->\r\n        <!-- Right Sidebar - style you can find in rightsidebar.component.scss -->\r\n        <!-- ============================================================== -->\r\n        <mat-sidenav #end position=\"end\" class=\"chat-panel\" mode=\"over\" opened=\"false\">\r\n            <div class=\"scroll\">\r\n                <mat-nav-list>\r\n\r\n                    <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Settings</h3>\r\n                    <mat-list-item>\r\n                        <mat-slide-toggle color=\"warn\" (change)=\"dir = (dir == 'rtl' ? 'ltr' : 'rtl')\">RTL</mat-slide-toggle>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <mat-slide-toggle color=\"warn\" [(ngModel)]=\"boxed\">Boxed Layout</mat-slide-toggle>\r\n                    </mat-list-item>\r\n                    <!--<mat-list-item>\r\n                    <mat-slide-toggle [(ngModel)]=\"minisidebar\">Mini Sidebar</mat-slide-toggle>\r\n                  </mat-list-item>    -->\r\n                    <mat-divider></mat-divider>\r\n                    <h3 mat-subheader class=\"text-uppercase font-weight-bold\">Colors</h3>\r\n                    <mat-list-item>\r\n                        <mat-checkbox color=\"warn\" [(ngModel)]=\"danger\" (change)=\"green = blue = false\" class=\"text-danger\">Red</mat-checkbox>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <mat-checkbox color=\"warn\" [(ngModel)]=\"green\" (change)=\"danger = blue = false\" class=\"text-megna\">Teal\r\n                            Green</mat-checkbox>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <mat-checkbox color=\"warn\" [(ngModel)]=\"blue\" (change)=\"green = danger = false\" class=\"text-info\">Blue</mat-checkbox>\r\n                    </mat-list-item>\r\n                    <mat-list-item>\r\n                        <mat-checkbox color=\"warn\" [(ngModel)]=\"dark\" (change)=\"green = blue = danger = false\">Dark</mat-checkbox>\r\n                    </mat-list-item>\r\n                </mat-nav-list>\r\n            </div>\r\n        </mat-sidenav>\r\n\r\n        <!-- ============================================================== -->\r\n        <!-- Page container - style you can find in pages.scss -->\r\n        <!-- ============================================================== -->\r\n        <mat-sidenav-content class=\"page-wrapper\">\r\n            \r\n                <div class=\"page-content\">\r\n\r\n                    <router-outlet>\r\n                        <app-spinner></app-spinner>\r\n                    </router-outlet>\r\n\r\n                </div>\r\n            \r\n        </mat-sidenav-content>\r\n        <!-- ============================================================== -->\r\n        <!-- Page container - style you can find in pages.scss -->\r\n        <!-- ============================================================== -->\r\n    </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/header/header.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/header/header.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Notification - style you can find in header.scss -->\r\n<!-- ============================================================== -->\r\n<button [matMenuTriggerFor]=\"notification\" mat-icon-button class=\"m-r-10\">\r\n    <mat-icon>message</mat-icon>\r\n    <div class=\"notify\">\r\n        <span class=\"heartbit\"></span>\r\n        <span class=\"point\"></span>\r\n    </div>\r\n</button>\r\n<mat-menu #notification=\"matMenu\" class=\"mymegamenu\">\r\n    <div class=\"mailbox\">\r\n        <ul>\r\n            <li>\r\n                <div class=\"drop-title\">Notifications</div>\r\n            </li>\r\n            <li>\r\n                <div class=\"message-center\">\r\n                    <perfect-scrollbar [config]=\"config\">\r\n                        <!-- Message -->\r\n                        <a href=\"#\" *ngFor=\"let notification of notifications\">\r\n                            <div class=\"round {{notification.round}}\">\r\n                                <i class=\"{{notification.icon}}\"></i>\r\n                            </div>\r\n                            <div class=\"mail-content\">\r\n                                <h5>{{notification.title}}</h5>\r\n                                <span class=\"mail-desc\">{{notification.subject}}</span>\r\n                                <span class=\"time\">{{notification.time}}</span>\r\n                            </div>\r\n                        </a>\r\n\r\n                    </perfect-scrollbar>\r\n                </div>\r\n            </li>\r\n\r\n        </ul>\r\n    </div>\r\n</mat-menu>\r\n<!-- ============================================================== -->\r\n<!-- Profile - style you can find in header.scss -->\r\n<!-- ============================================================== -->\r\n<button [matMenuTriggerFor]=\"message\" mat-icon-button class=\"m-r-10\">\r\n    <mat-icon>email</mat-icon>\r\n    <div class=\"notify\">\r\n        <span class=\"heartbit\"></span>\r\n        <span class=\"point\"></span>\r\n    </div>\r\n</button>\r\n<mat-menu #message=\"matMenu\" class=\"mymessage\">\r\n    <div class=\"mailbox\">\r\n        <ul>\r\n            <li>\r\n                <div class=\"drop-title\">You have 4 new Mymessages</div>\r\n            </li>\r\n            <li>\r\n                <div class=\"message-center\">\r\n                    <perfect-scrollbar [config]=\"config\">\r\n                        <!-- Message -->\r\n                        <a href=\"#\" *ngFor=\"let mymessage of mymessages\">\r\n                            <div class=\"user-img\">\r\n                                <img src=\"{{mymessage.useravatar}}\" alt=\"user\" class=\"img-circle\" width=\"40\">\r\n                                <span class=\"profile-status {{mymessage.status}} pull-right\"></span>\r\n                            </div>\r\n                            <div class=\"mail-content\">\r\n                                <h5>{{mymessage.from}}</h5>\r\n                                <span class=\"mail-desc\">{{mymessage.subject}}</span>\r\n                                <span class=\"time\">{{mymessage.time}}</span>\r\n                            </div>\r\n                        </a>\r\n                        <!-- Message -->\r\n                    </perfect-scrollbar>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</mat-menu>\r\n<!-- ============================================================== -->\r\n<!-- Profile - style you can find in header.scss -->\r\n<!-- ============================================================== -->\r\n<button [matMenuTriggerFor]=\"profile\" mat-icon-button class=\"m-r-5\">\r\n    <img src=\"assets/images/users/1.jpg\" alt=\"user\" class=\"profile-pic\"> </button>\r\n<mat-menu #profile=\"matMenu\" class=\"mymegamenu\">\r\n    <button mat-menu-item>\r\n        <mat-icon>settings</mat-icon> Settings </button>\r\n    <button mat-menu-item>\r\n        <mat-icon>account_box</mat-icon> Profile </button>\r\n    <button mat-menu-item>\r\n        <mat-icon>notifications_off</mat-icon> Disable notifications </button>\r\n    <button mat-menu-item>\r\n        <mat-icon>exit_to_app</mat-icon> Sign Out </button>\r\n</mat-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/full/sidebar/sidebar.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/full/sidebar/sidebar.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- sidebar -->\r\n<!-- ============================================================== -->\r\n\r\n\r\n<mat-nav-list appAccordion>\r\n    <mat-list-item appAccordionLink *ngFor=\"let menuitem of menuItems.getMenuitem()\" routerLinkActive=\"selected\" group=\"{{menuitem.state}}\">\r\n        <a class=\"\" appAccordionToggle [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\r\n            <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n            <span>{{ menuitem.name }}</span>\r\n            <span fxFlex></span>\r\n            <span class=\"label label-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n        </a>\r\n\r\n        <a class=\"\" appAccordionToggle href=\"{{menuitem.state}}\" *ngIf=\"menuitem.type === 'extLink'\">\r\n            <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n            <span>{{ menuitem.name }}</span>\r\n            <span fxFlex></span>\r\n            <span class=\"label label-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n        </a>\r\n        <a class=\"\" appAccordionToggle href=\"{{menuitem.state}}\" target=\"_blank\" *ngIf=\"menuitem.type === 'extTabLink'\">\r\n            <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n            <span>{{ menuitem.name}}</span>\r\n            <span fxFlex></span>\r\n            <span class=\"label label-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n        </a>\r\n\r\n        <a class=\"\" appAccordionToggle href=\"javascript:;\" *ngIf=\"menuitem.type === 'sub'\">\r\n            <mat-icon>{{ menuitem.icon }}</mat-icon>\r\n            <span>{{ menuitem.name }}</span>\r\n            <span fxFlex></span>\r\n            <span class=\"label label-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\r\n            <mat-icon class=\"dd-icon\">keyboard_arrow_down</mat-icon>\r\n        </a>\r\n        <mat-nav-list class=\"sub-item\" *ngIf=\"menuitem.type === 'sub'\">\r\n            <mat-list-item *ngFor=\"let childitem of menuitem.children\" routerLinkActive=\"selected\">\r\n                <a [routerLink]=\"['/', menuitem.state, childitem.state ]\"  *ngIf=\"childitem.type === 'link'\" class=\"relative\"\r\n                    routerLinkActive=\"selected\" (click)=\"itemSelect[i]=j\">{{ childitem.name}}</a>\r\n            </mat-list-item>\r\n            <mat-list-item *ngFor=\"let childitem of menuitem.children; let j=index\">\r\n                <a class=\"\" href=\"javascript: void(0);\" *ngIf=\"childitem.type === 'subchild'\" (click)=\"itemSelect[i]=j\"\r\n                    [ngClass]=\"j==itemSelect[i]? 'selected' : ''\">\r\n                    <span>{{ childitem.name }}</span>\r\n                    <span fxFlex></span>\r\n                    <mat-icon class=\"dd-icon\">keyboard_arrow_down</mat-icon>\r\n                </a>\r\n                <mat-nav-list class=\"child-sub-item\" *ngIf=\"childitem.type === 'subchild'\" >\r\n                    <mat-list-item *ngFor=\"let child of childitem.subchildren\" routerLinkActive=\"selected\">\r\n                        <a [routerLink]=\"['/', menuitem.state, childitem.state, child.state ]\" routerLinkActive=\"selected\" >{{child.name}}</a>\r\n                    </mat-list-item>\r\n                </mat-nav-list>\r\n            </mat-list-item>\r\n\r\n        </mat-nav-list>\r\n\r\n        <div class=\"saperator text-muted\" *ngIf=\"menuitem.type === 'saperator'\">\r\n            <span>{{ menuitem.name }}</span>\r\n        </div>\r\n    </mat-list-item>\r\n</mat-nav-list>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Documentation/IOS/ios/ios.module": [
		"./src/app/Documentation/IOS/ios/ios.module.ts",
		"common",
		"Documentation-IOS-ios-ios-module"
	],
	"./Documentation/android/android.module": [
		"./src/app/Documentation/android/android.module.ts",
		"Documentation-android-android-module"
	],
	"./Documentation/angular/angular.module": [
		"./src/app/Documentation/angular/angular.module.ts",
		"common",
		"Documentation-angular-angular-module"
	],
	"./Documentation/webservice/webservice.module": [
		"./src/app/Documentation/webservice/webservice.module.ts",
		"common",
		"Documentation-webservice-webservice-module"
	],
	"./hero/hero.module": [
		"./src/app/hero/hero.module.ts",
		"hero-hero-module"
	],
	"./icons/mat-icon.module": [
		"./src/app/icons/mat-icon.module.ts",
		"icons-mat-icon-module"
	],
	"./material-component/material.module": [
		"./src/app/material-component/material.module.ts",
		"material-component-material-module"
	],
	"./starter/starter.module": [
		"./src/app/starter/starter.module.ts",
		"starter-starter-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n* ::ng-deep pre{\n    background-color: rgba(40, 136, 229, 0.1);\n    border: 1px solid rgba(14, 72, 128, 0.4);\n    border-radius: 5px;\n    color: rgb(6, 37, 68);\n    padding: 1rem;\n    overflow: auto;\n    max-width: 100%;\n}\n\n* ::ng-deep pre .hl {\n    color: #062544;\n    background: rgba(255, 0, 0, 0.4);\n    padding: 1px 5px;\n    border-radius: 3px;\n}\n\nmat-toolbar .navbar-header .navbar-brand {\n    display: -webkit-box;\n    display: block;\n    line-height: 18px;\n    -webkit-box-align: center;\n    align-items: center;\n    width: 90px;\n}\n\n.navbar-brand img {\n    max-width: 100%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLHlDQUF5QztJQUN6Qyx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7O0FBRW5CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuKiA6Om5nLWRlZXAgcHJle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDAsIDEzNiwgMjI5LCAwLjEpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQsIDcyLCAxMjgsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiByZ2IoNiwgMzcsIDY4KTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cblxuKiA6Om5nLWRlZXAgcHJlIC5obCB7XG4gICAgY29sb3I6ICMwNjI1NDQ7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDAsIDAsIDAuNCk7XG4gICAgcGFkZGluZzogMXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbm1hdC10b29sYmFyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItYnJhbmQge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogOTBweDtcbn1cblxuLm5hdmJhci1icmFuZCBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcblxufSJdfQ== */"

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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _src_app_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/app/shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let AppComponent = class AppComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.dir = 'ltr';
        this.config = {};
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngAfterViewInit() {
        // This is for the topbar search
        jquery__WEBPACK_IMPORTED_MODULE_0__('.srh-btn, .cl-srh-btn').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__('.app-search').toggle(200);
        });
        // This is for the megamenu
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] },
    { type: _src_app_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"],
        _src_app_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"]])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layouts/full/header/header.component */ "./src/app/layouts/full/header/header.component.ts");
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ "./src/app/layouts/full/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/spinner.component */ "./src/app/shared/spinner.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_8__["FullComponent"],
            _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_9__["AppHeaderComponent"],
            _shared_spinner_component__WEBPACK_IMPORTED_MODULE_14__["SpinnerComponent"],
            _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["AppSidebarComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _demo_material_module__WEBPACK_IMPORTED_MODULE_12__["DemoMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["FlexLayoutModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutes"]),
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"]
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/full/full.component */ "./src/app/layouts/full/full.component.ts");

const AppRoutes = [
    {
        path: '',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_0__["FullComponent"],
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'material',
                loadChildren: './material-component/material.module#MaterialComponentsModule'
            },
            {
                path: 'starter',
                loadChildren: './starter/starter.module#StarterModule'
            },
            {
                path: 'icons',
                loadChildren: './icons/mat-icon.module#IconsModule'
            }
        ]
    },
    { path: 'home', loadChildren: './hero/hero.module#HeroModule' },
    { path: 'ios', loadChildren: './Documentation/IOS/ios/ios.module#IOSModule' },
    { path: 'android', loadChildren: './Documentation/android/android.module#AndroidModule' },
    { path: 'angular', loadChildren: './Documentation/angular/angular.module#AngularModule' },
    { path: 'webservice', loadChildren: './Documentation/webservice/webservice.module#WebServiceModule' },
];


/***/ }),

/***/ "./src/app/demo-material-module.ts":
/*!*****************************************!*\
  !*** ./src/app/demo-material-module.ts ***!
  \*****************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm2015/accordion.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
let DemoMaterialModule = class DemoMaterialModule {
};
DemoMaterialModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
            _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_3__["CdkAccordionModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_8__["ObserversModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["PortalModule"]
        ]
    })
], DemoMaterialModule);



/***/ }),

/***/ "./src/app/layouts/full/full.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/** @title Responsive sidenav */
let FullComponent = class FullComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.dir = 'ltr';
        this.config = {};
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngAfterViewInit() {
        // This is for the topbar search
        jquery__WEBPACK_IMPORTED_MODULE_0__('.srh-btn, .cl-srh-btn').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_0__('.app-search').toggle(200);
        });
        // This is for the megamenu
    }
};
FullComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] },
    { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"] }
];
FullComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-full-layout',
        template: __webpack_require__(/*! raw-loader!./full.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/full.component.html")
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"],
        _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_3__["MenuItems"]])
], FullComponent);



/***/ }),

/***/ "./src/app/layouts/full/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppHeaderComponent = class AppHeaderComponent {
    constructor() {
        this.config = {};
        // This is for Notifications
        this.notifications = [
            {
                round: 'round-danger',
                icon: 'ti-link',
                title: 'Launch Admin',
                subject: 'Just see the my new admin!',
                time: '9:30 AM'
            },
            {
                round: 'round-success',
                icon: 'ti-calendar',
                title: 'Event today',
                subject: 'Just a reminder that you have event',
                time: '9:10 AM'
            },
            {
                round: 'round-info',
                icon: 'ti-settings',
                title: 'Settings',
                subject: 'You can customize this template as you want',
                time: '9:08 AM'
            },
            {
                round: 'round-primary',
                icon: 'ti-user',
                title: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
        // This is for Mymessages
        this.mymessages = [
            {
                useravatar: 'assets/images/users/1.jpg',
                status: 'online',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:30 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'busy',
                from: 'Sonu Nigam',
                subject: 'I have sung a song! See you at',
                time: '9:10 AM'
            },
            {
                useravatar: 'assets/images/users/2.jpg',
                status: 'away',
                from: 'Arijit Sinh',
                subject: 'I am a singer!',
                time: '9:08 AM'
            },
            {
                useravatar: 'assets/images/users/4.jpg',
                status: 'offline',
                from: 'Pavan kumar',
                subject: 'Just see the my admin!',
                time: '9:00 AM'
            }
        ];
    }
};
AppHeaderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/header/header.component.html")
    })
], AppHeaderComponent);



/***/ }),

/***/ "./src/app/layouts/full/sidebar/sidebar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/*! exports provided: AppSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSidebarComponent", function() { return AppSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AppSidebarComponent = class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.config = {};
        this.status = true;
        this.itemSelect = [];
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    subclickEvent() {
        this.status = true;
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
};
AppSidebarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"] },
    { type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"] }
];
AppSidebarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/full/sidebar/sidebar.component.html")
    }),
    __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["MediaMatcher"],
        _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]])
], AppSidebarComponent);



/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let AccordionDirective = class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
        this.router.events
            .filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])
            .subscribe(e => this.checkOpenLinks());
    }
};
AccordionDirective.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AccordionDirective = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[appAccordion]'
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], AccordionDirective);



/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
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


let AccordionAnchorDirective = class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
};
AccordionAnchorDirective.ctorParameters = () => [
    { type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"],] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AccordionAnchorDirective.prototype, "onClick", null);
AccordionAnchorDirective = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[appAccordionToggle]'
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])),
    __metadata("design:paramtypes", [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]])
], AccordionAnchorDirective);



/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
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


let AccordionLinkDirective = class AccordionLinkDirective {
    constructor(nav) {
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
};
AccordionLinkDirective.ctorParameters = () => [
    { type: _accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"],] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], AccordionLinkDirective.prototype, "group", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.selected'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionLinkDirective.prototype, "selected", null);
AccordionLinkDirective = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
        selector: '[appAccordionLink]'
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])),
    __metadata("design:paramtypes", [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]])
], AccordionLinkDirective);



/***/ }),

/***/ "./src/app/shared/accordion/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const MENUITEMS = [
    {
        state: 'home',
        name: 'Home',
        type: 'link',
        icon: 'home'
    },
    {
        state: 'ios',
        name: 'IOS',
        type: 'sub',
        icon: 'phone_iphone',
        //badge: [{ type: 'red', value: '2' }],
        children: [
            { state: 'getting-started', name: 'Getting Started', type: 'link' },
            { state: 'single-app', name: 'Single App', type: 'link' },
            { state: 'navigation', name: 'Navigation', type: 'link' },
        ]
    },
    {
        state: 'android',
        name: 'Android',
        type: 'sub',
        icon: 'phone_android',
        children: [
            { state: 'getting-started', name: 'Getting Started', type: 'link' },
        ]
    },
    {
        state: 'angular',
        name: 'Angular',
        type: 'sub',
        icon: 'font_download',
        children: [
            { state: 'getting-started', name: 'Getting Started', type: 'link' },
            { state: 'directory-overview', name: 'Directory overview', type: 'link' },
            { state: 'main-plugins-overview', name: 'Main plugins overview', type: 'link' },
            { state: 'main-components', name: 'Main components', type: 'link' },
            { state: 'developing-features', name: 'Developing features', type: 'link' },
        ]
    },
    {
        state: 'webservice',
        name: 'Web Service',
        type: 'sub',
        icon: 'router',
        children: [
            { state: 'getting-started', name: 'Getting Started', type: 'link' },
            { state: 'introduction', name: 'Introduction', type: 'link' },
            { state: 'connection-string', name: 'Connection String', type: 'link' },
            { state: 'helpers', name: 'Helpers', type: 'link' },
            { state: 'models', name: 'Models', type: 'link' },
            { state: 'controllers', name: 'Controllers', type: 'link' },
            { state: 'sending-emails', name: 'Sending Emails', type: 'link' },
            { state: 'new-table', name: 'DB Tables', type: 'link' },
            { state: 'test-debug', name: 'Testing & Debugging', type: 'link' },
            { state: 'publish', name: 'Publishing', type: 'link' },
        ]
    },
];
let MenuItems = class MenuItems {
    getMenuitem() {
        return MENUITEMS;
    }
};
MenuItems = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
], MenuItems);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion */ "./src/app/shared/accordion/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        declarations: [
            _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
            _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
            _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]
        ],
        exports: [
            _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionAnchorDirective"],
            _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionLinkDirective"],
            _accordion__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]
        ],
        providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_1__["MenuItems"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/spinner.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
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



let SpinnerComponent = class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"] ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
};
SpinnerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Object)
], SpinnerComponent.prototype, "backgroundColor", void 0);
SpinnerComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-spinner',
        template: `<div class="preloader" *ngIf="isSpinnerVisible">
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
    </div>`,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
        Document])
], SpinnerComponent);



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
const environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hero/Documents/Projects/Angular/HeroAppsDocumentation/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map