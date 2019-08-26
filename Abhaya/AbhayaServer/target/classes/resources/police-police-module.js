(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["police-police-module"],{

/***/ "./src/app/police/dashboard/dashboard.component.css":
/*!**********************************************************!*\
  !*** ./src/app/police/dashboard/dashboard.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/police/dashboard/dashboard.component.html":
/*!***********************************************************!*\
  !*** ./src/app/police/dashboard/dashboard.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row row_shadow\">\n  <div class=\"container\">\n    <div class=\"topnav\">\n      <div class=\"row m-0 p-0\">\n        <div class=\"col-11 m-0 p-0\">\n          <a class=\"active icon_alignment\" href=\"#home\">\n            <i class=\"fa fa-pie-chart\" aria-hidden=\"true\"></i> <span>DASHBOARD</span></a>\n        </div>\n        <div class=\"col-1 m-0 p-0\">\n          <div class=\"btn-group btn_todays out_line_green\">\n            <button type=\"button\" class=\"out_line_green  btn btn btn-outline-primary\">Today's</button>\n            <button type=\"button\" class=\"out_line_green  btn btn btn-outline-primary\">All</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row_style\">\n  <div class=\"container dashboard_secondrow\">\n    <div class=\"row m-0 p-0\">\n      <div class=\"col-7\">\n        <div class=\"card_boxshadow_left\">\n          <div class=\"row\">\n            <div class=\"col-3\">\n              <div class=\"gradient_box_left auto_img\">\n                <img src=\"assets/images/SVG/ic_deviceInstalled.svg\" style=\"width:72%;\">\n                <h4>Tracking\n                  <br>Reports\n                </h4>\n              </div>\n            </div>\n            <div class=\"col-3\">\n              <div class=\"div_padding progress_bar_text1 text-center\">\n                <p>\n                  <span> Live Tracking</span>\n                </p>\n                <h4>89663</h4>\n                <div class=\"progress progress_line\">\n                  <div class=\"progress-bar progress_bar_line\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  <span class=\"vertical_line_left\"></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3\">\n              <div class=\"div_padding progress_bar_text2 text-center\">\n                <p>\n                  <span> Route Deviation</span>\n                </p>\n                <h4>89</h4>\n                <div class=\"progress progress_line\">\n                  <div class=\"progress-bar progress_bar_line2\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                  <span class=\"vertical_line_left\"></span>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3\">\n              <div class=\"div_padding progress_bar_text3 text-center\">\n                <p>\n                  <span> Ignition Off</span>\n                </p>\n                <h4>03</h4>\n                <div class=\"progress progress_line\">\n                  <div class=\"progress-bar progress_bar_line3\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-5\">\n        <div class=\"card_boxshadow_right\">\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <div class=\"gradient_box_right auto_img\">\n                <img src=\"assets/images/SVG/ic_Distresscall.svg\" style=\"width:72%;\">\n                <h4>Distress\n                  <br> Alerts\n                </h4>\n              </div>\n            </div>\n            <div class=\"col-4\">\n              <div class=\"div_padding_right progress_bar_text3 text-center\">\n                <p>\n                  <span> Distress Call</span>\n                </p>\n                <h4>03</h4>\n                <span class=\"vertical_line_right\"></span>\n              </div>\n            </div>\n            <div class=\"col-4\">\n              <div class=\"div_padding_right progress_bar_text2 text-center\">\n                <p>\n                  <span> Panic Alerts</span>\n                </p>\n                <h4>50</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-7\">\n          <div class=\"card_boxshadow_left2\">\n            <div class=\"row m-0 p-0\">\n              <div class=\"col-8\">\n                <div class=\"table_graph_heading\">\n                  <h3>District Wise Trackings</h3>\n                </div>\n              </div>\n              <div class=\"col-4\">\n                <div class=\"btn-group float-right\">\n                  <select class=\"form-control\">\n                    <option value=\"\">Oct 2018</option>\n                    <option value=\"\">Sep 2018</option>\n                    <option value=\"\">Aug 2018</option>\n                  </select>\n                </div>\n              </div>\n              <ngx-charts-bar-horizontal\n                [view]=\"horizontalBarChart.view\"\n                [scheme]=\"horizontalBarChart.colorScheme\"\n                [results]=\"horizontalBarChart.data\"\n                [gradient]=\"horizontalBarChart.gradient\"\n                [xAxis]=\"horizontalBarChart.showXAxis\"\n                [yAxis]=\"horizontalBarChart.showYAxis\"\n                [legend]=\"horizontalBarChart.showLegend\"\n                [showXAxisLabel]=\"horizontalBarChart.showXAxisLabel\"\n                [showYAxisLabel]=\"horizontalBarChart.showYAxisLabel\"\n                [xAxisLabel]=\"horizontalBarChart.xAxisLabel\"\n                [yAxisLabel]=\"horizontalBarChart.yAxisLabel\"\n                [showDataLabel]=\"horizontalBarChart.showDataLabel\"\n                (select)=\"onSelect($event)\">\n              </ngx-charts-bar-horizontal>\n            </div>\n          </div>\n        </div>\n        </div>\n        <div class=\"col-5\">\n          <div class=\"card_boxshadow_right2\">\n            <div class=\"col-8 table_heading_main m-0 p-0\">\n              <h3>Live Tracking Reports</h3>\n            </div>\n            <div>\n            <ngx-charts-pie-chart\n              [view]=\"pieChart.view\"\n              [scheme]=\"pieChart.colorScheme\"\n              [results]=\"pieChart.data\"\n              [legend]=\"pieChart.showLegend\"\n              [explodeSlices]=\"pieChart.explodeSlices\"\n              [labels]=\"pieChart.showLabels\"\n              [doughnut]=\"pieChart.doughnut\"\n              [gradient]=\"pieChart.gradient\"\n              [legendPosition]=\"pieChart.legendPosition\"\n              [arcWidth]=\"pieChart.arcWidth\"\n              [legendTitle]=\"pieChart.legendTitle\"\n              (select)=\"onSelect($event)\">\n            </ngx-charts-pie-chart>\n            </div>\n          </div>\n        </div>\n      \n      <!-- ---------------------------------------Table-->\n      <div class=\"container m-0 p-0\">\n        <div class=\"card_boxshadow_full\">\n          <div class=\"row\">\n            <div class=\"col-8 table_heading_main\">\n              <h3>Live Tracking</h3>\n            </div>\n            <div class=\"col-4\">\n              <button type=\"button\" class=\"btn-primary btn_custom\" value=\"view\" (click)=\"openTrip()\">View All</button>\n            </div>\n          </div>\n          <table class=\"table table-borderless table_police_dashboard table-fixed\">\n            <thead class=\"thead-bg\">\n              <tr>\n                <th style=\"width:6%;\"colspan=\"2\">Vehicle Number</th>\n                <th class=\"number\">IoT Device Number</th>\n                <th>Owner Name</th>\n                <th>#Mobile Number</th>\n                <th>Maker's Calss</th>\n                <th>Action</th>\n              </tr>\n              </thead>\n              <tbody class=\"hoverTable align-middle no-border-x table_alignment img_auto row_bg\">\n                <tr>\n                  <td style=\"width:3%;\"><img src=\"assets/images/SVG/ic_deviceInstalled.svg\"></td>\n                    <td class=\"align-middle\"><span> AP01AP1234 </span></td>\n                  <td class=\"number align-middle\">IoT1234556567</td>\n                  <td class=\"align-middle\">Ashok Moddukuri</td>\n                  <td class=\"align-middle\">964 000 0011</td>\n                  <td class=\"align-middle\">Bajaj Auto</td>\n                  <td class=\"action align-middle\">\n                    <a class=\"icon\" href=\"#\">\n                      <i class=\"fa fa-pencil-square-o\"></i>\n                    </a>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"width:3%;\" class=\"align-middle\">\n                    <img src=\"assets/images/SVG/ic_deviceInstalled.svg\"></td>\n                   <td> <span> AP01AP1234 </span></td>\n                  <td class=\"number align-middle\">IoT1234556567</td>\n                  <td class=\"align-middle\">Ashok Moddukuri</td>\n                  <td class=\"align-middle\">964 000 0011</td>\n                  <td class=\"align-middle\">Bajaj Auto</td>\n                  <td class=\"action align-middle\">\n                    <a class=\"icon\" href=\"#\">\n                      <i class=\"fa fa-pencil-square-o\"></i>\n                    </a>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"width:3%;\" class=\"align-middle\">\n                    <img src=\"assets/images/SVG/ic_deviceInstalled.svg\"></td>\n                    <td><span> AP01AP1234 </span> </td>\n                  <td class=\"number align-middle\">IoT1234556567</td>\n                  <td class=\"align-middle\">Ashok Moddukuri</td>\n                  <td class=\"align-middle\">964 000 0011</td>\n                  <td class=\"align-middle\">Bajaj Auto</td>\n                  <td class=\"action align-middle\">\n                    <a class=\"icon\" href=\"#\">\n                      <i class=\"fa fa-pencil-square-o\"></i>\n                    </a>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"width:3%;\" class=\"align-middle\">\n                    <img src=\"assets/images/SVG/ic_deviceInstalled.svg\"></td>\n                    <td><span> AP01AP1234 </span></td>\n                  <td class=\"number align-middle\">IoT1234556567</td>\n                  <td class=\"align-middle\">Ashok Moddukuri</td>\n                  <td class=\"align-middle\">964 000 0011</td>\n                  <td class=\"align-middle\">Bajaj Auto</td>\n                  <td class=\"action align-middle\">\n                    <a class=\"icon\" href=\"#\">\n                      <i class=\"fa fa-pencil-square-o\"></i>\n                    </a>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"width:3%;\" class=\"align-middle\">\n                    <img src=\"assets/images/SVG/ic_deviceInstalled.svg\"></td>\n                    <td><span> AP01AP1234 </span></td>\n                  <td class=\"number align-middle\">IoT1234556567</td>\n                  <td class=\"align-middle\">Ashok Moddukuri</td>\n                  <td class=\"align-middle\">964 000 0011</td>\n                  <td class=\"align-middle\">Bajaj Auto</td>\n                  <td class=\"action align-middle\">\n                    <a class=\"icon\" href=\"#\">\n                      <i class=\"fa fa-pencil-square-o\"></i>\n                    </a>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"width:3%;\" class=\"align-middle\">\n                    <img src=\"assets/images/SVG/ic_deviceInstalled.svg\"></td>\n                    <td><span> AP01AP1234 </span></td>                  \n                  <td class=\"number align-middle\">IoT1234556567</td>\n                  <td class=\"align-middle\">Ashok Moddukuri</td>\n                  <td class=\"align-middle\">964 000 0011</td>\n                  <td class=\"align-middle\">Bajaj Auto</td>\n                  <td class=\"action align-middle\">\n                    <a class=\"icon\" href=\"#\">\n                      <i class=\"fa fa-pencil-square-o\"></i>\n                    </a>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"width:3%;\" class=\"align-middle\">\n                    <img src=\"assets/images/SVG/ic_deviceInstalled.svg\"></td>\n                   <td> <span> AP01AP1234 </span></td>                  \n                  <td class=\"number align-middle\">IoT1234556567</td>\n                  <td class=\"align-middle\">Ashok Moddukuri</td>\n                  <td class=\"align-middle\">964 000 0011</td>\n                  <td class=\"align-middle\">Bajaj Auto</td>\n                  <td class=\"action align-middle\">\n                    <a class=\"icon\" href=\"#\">\n                      <i class=\"fa fa-pencil-square-o\"></i>\n                    </a>\n                  </td>\n                </tr>\n                <tr>\n                  <td style=\"width:3%;\" class=\"align-middle\">\n                    <img src=\"assets/images/SVG/ic_deviceInstalled.svg\"></td>\n                    <td><span> AP01AP1234 </span></td>                  \n                  <td class=\"number align-middle\">IoT1234556567</td>\n                  <td class=\"align-middle\">Ashok Moddukuri</td>\n                  <td class=\"align-middle\">964 000 0011</td>\n                  <td class=\"align-middle\">Bajaj Auto</td>\n                  <td class=\"action align-middle\">\n                    <a class=\"icon\" href=\"#\">\n                      <i class=\"fa fa-pencil-square-o\"></i>\n                    </a>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/police/dashboard/dashboard.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/police/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_util_horizontalbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/util/horizontalbar */ "./src/app/shared/util/horizontalbar.ts");
/* harmony import */ var _shared_util_piechart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/util/piechart */ "./src/app/shared/util/piechart.ts");
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
    // https://plnkr.co/edit/BooZfKJz0nLATpTe1SwH?p=preview
    function DashboardComponent(router) {
        this.router = router;
        this.horizontalBarChart = new _shared_util_horizontalbar__WEBPACK_IMPORTED_MODULE_2__["HorizontalBarChart"]([636, 375], true, true, true, false, false, false, true, 'Label of X', 'Label of Y');
        this.pieChart = new _shared_util_piechart__WEBPACK_IMPORTED_MODULE_3__["PieChart"]([400, 280], true, false, false, true, false, 'below', '0.35', '');
        this.horizontalBarChart.data = [
            { 'name': 'Anantapur', 'value': 8940000 },
            { 'name': 'Chittor', 'value': 5000000 },
            { 'name': 'East Godavari', 'value': 7200000 },
            { 'name': 'Guntur', 'value': 5000000 },
            { 'name': 'Ysr Kadapa', 'value': 7200000 },
            { 'name': 'Krishna', 'value': 5000000 },
            { 'name': 'Kurnool', 'value': 7200000 },
            { 'name': 'Nellore', 'value': 5000000 },
            { 'name': 'Prakasam', 'value': 7200000 },
            { 'name': 'Srikakulam', 'value': 5000000 },
            { 'name': 'Vishkapatnam', 'value': 7200000 },
            { 'name': 'Vizianagaram', 'value': 5000000 },
            { 'name': 'West Godavari', 'value': 7200000 }
        ];
        this.horizontalBarChart.colorScheme = { domain: ['#26a1ee'] };
        this.pieChart.data = [
            { 'name': 'Stopped', 'value': 89400 },
            { 'name': 'Running', 'value': 5000 },
            { 'name': 'Completed', 'value': 720 }
        ];
        this.pieChart.colorScheme = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    DashboardComponent.prototype.openTrip = function () {
        this.router.navigate(['/police/closedtrips']);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/police/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/police/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/police/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/police/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/police/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/police/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar nav_bg\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div [ngClass]=\"showMenuFlag ? 'col-1 menu_bar change' : 'col-1 menu_bar'\" (click)=\"toogleHeader();\">\n        <div class=\"bar1\"></div>\n        <div class=\"bar2\"></div>\n        <div class=\"bar3\"></div>\n        <div [ngClass]=\"showMenuFlag ? 'dropdown-menu show menu_color' : 'dropdown-menu menu_color'\">\n          <a class=\"dropdown-item\" [routerLink]=\"['/police/dashboard']\" routerLinkActive=\"active\"><img src=\"assets/images/SVG/ic_dashboard.svg\">Dash Board</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/police/vehicles']\" routerLinkActive=\"active\"><img src=\"assets/images/SVG/ic_vehclelist.svg\">Vehicles</a>\n          <a class=\"dropdown-item\" [routerLink]=\"['/police/drivers']\" routerLinkActive=\"active\"><img src=\"assets/images/SVG/ic_driverlist.svg\">Drivers</a>\n        </div>\n      </div>\n      <div class=\"col-3\">\n        <div class=\"navbar_logo\"></div>\n      </div>\n      <div class=\"col-4\">\n        <input type=\"text\" class=\"search_bg search_icon\" placeholder=\"Search\" name=\"search\">\n      </div>\n      <div class=\"col-4\">\n        <div class=\"row\">\n          <div class=\"col-2 notification\"></div>\n          <div class=\"col-3 offset-md-1\">\n            <div class=\" profile_name\">\n              <img src=\"assets/images/plice-pic.png\">\n              <!-- <h4>RatanKumar</h4> -->\n            </div>\n          </div>\n          <div class=\"col-6\">\n            <div class=\"profile_name\">\n              <li class=\"dropdown list-unstyled\">\n                <a href=\"#\" class=\"dropdown-toggle sign_out\" data-toggle=\"dropdown\">Malakondaiah\n                  <div [ngClass]=\"showProfileFlag ? 'dropdown-menu show menu_color' : 'dropdown-menu menu_color'\">\n                  <a class=\"dropdown-item\" [routerLink]=\"['/login']\">  Sign Out</a>\n                  <a class=\"dropdown-item\" [routerLink]=\"['/login']\">  Change Password</a>\n                  <a class=\"dropdown-item\" [routerLink]=\"['/login']\">  Settings</a>\n               </div>\n                  <span class=\"caret\"></span>\n                </a>\n                <br>\n                <h5>AP DGP\n                  <span class=\"caret\"></span>\n                </h5>\n              </li>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/police/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/police/header/header.component.ts ***!
  \***************************************************/
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
        this.showMenuFlag = false;
        this.showProfileFlag = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toogleHeader = function () {
        this.showMenuFlag = !this.showMenuFlag;
    };
    HeaderComponent.prototype.toogleProfileHeader = function () {
        this.showProfileFlag = !this.showProfileFlag;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/police/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/police/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/police/main/main.component.css":
/*!************************************************!*\
  !*** ./src/app/police/main/main.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvbGljZS9tYWluL21haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/police/main/main.component.html":
/*!*************************************************!*\
  !*** ./src/app/police/main/main.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/police/main/main.component.ts":
/*!***********************************************!*\
  !*** ./src/app/police/main/main.component.ts ***!
  \***********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(router) {
        this.router = router;
        this.url = '/police/dashboard';
        if (this.router.url !== '/police') {
            this.url = this.router.url;
        }
        this.router.navigate([this.url]);
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/police/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/police/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/police/police-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/police/police-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PoliceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliceRoutingModule", function() { return PoliceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/police/main/main.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/police/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/vehicles/vehicles.component */ "./src/app/shared/vehicles/vehicles.component.ts");
/* harmony import */ var _shared_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/drivers/drivers.component */ "./src/app/shared/drivers/drivers.component.ts");
/* harmony import */ var _shared_trip_details_closed_trips_closed_trips_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/trip-details/closed-trips/closed-trips.component */ "./src/app/shared/trip-details/closed-trips/closed-trips.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var policeRoutes = [
    {
        path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"],
        children: [
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
            { path: 'vehicles', component: _shared_vehicles_vehicles_component__WEBPACK_IMPORTED_MODULE_4__["VehiclesComponent"] },
            { path: 'drivers', component: _shared_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_5__["DriversComponent"] },
            { path: 'closedtrips', component: _shared_trip_details_closed_trips_closed_trips_component__WEBPACK_IMPORTED_MODULE_6__["ClosedTripsComponent"] }
        ]
    }
];
var PoliceRoutingModule = /** @class */ (function () {
    function PoliceRoutingModule() {
    }
    PoliceRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(policeRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], PoliceRoutingModule);
    return PoliceRoutingModule;
}());



/***/ }),

/***/ "./src/app/police/police.module.ts":
/*!*****************************************!*\
  !*** ./src/app/police/police.module.ts ***!
  \*****************************************/
/*! exports provided: PoliceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoliceModule", function() { return PoliceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/esm.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/police/main/main.component.ts");
/* harmony import */ var _police_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./police-routing.module */ "./src/app/police/police-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/police/header/header.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/police/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PoliceModule = /** @class */ (function () {
    function PoliceModule() {
    }
    PoliceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_2__["NgxChartsModule"],
                _police_routing_module__WEBPACK_IMPORTED_MODULE_4__["PoliceRoutingModule"]
            ],
            declarations: [_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"]]
        })
    ], PoliceModule);
    return PoliceModule;
}());



/***/ })

}]);
//# sourceMappingURL=police-police-module.js.map