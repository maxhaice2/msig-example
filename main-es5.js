(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/jupiter/Work/msyg/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.
      // const host  = 'wax-testnet.cryptolions.io';
      // const chain = 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12';


      var host = 'wax.cryptolions.io';
      var chain = '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4';
      var environment = {
        giveEndpoint: '',
        production: false,
        chainName: 'WAX',
        assetsApi: "https://wax.api.simpleassets.io",
        marketApi: "https://wax.simplemarket.io",
        contracts: {
          giveaway: {
            name: 'nftgiveaways'
          },
          assets: {
            name: 'simpleassets',
            tables: {
              assets: 'sassets',
              assetsFt: 'accounts'
            }
          }
        },
        ulm: {
          wax: {
            appName: 'WAX SA TOOLS dev',
            httpEndpoint: "https://".concat(host),
            chain: chain,
            host: host,
            verbose: false,
            blockchain: 'eos',
            port: 443,
            protocol: 'https',
            expireInSeconds: 5
          },
          jungle: {
            appName: 'Jungle SA TOOLS',
            httpEndpoint: "https://".concat(host),
            chain: chain,
            host: host,
            verbose: false,
            blockchain: 'eos',
            port: 443,
            protocol: 'https',
            expireInSeconds: 5
          },
          eos: {
            appName: 'EOS SA TOOLS',
            httpEndpoint: "https://".concat(host),
            chain: chain,
            host: host,
            verbose: false,
            blockchain: 'eos',
            port: 443,
            protocol: 'https',
            expireInSeconds: 5
          }
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "DnCW":
    /*!**************************************************************!*\
      !*** ./src/app/core/view/routes/core.route/app.component.ts ***!
      \**************************************************************/

    /*! exports provided: AppComponent */

    /***/
    function DnCW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30vw auto 10vw 10vw;\n  align-items: center;\n  justify-items: center;\n  width: 100vw;\n  height: 10vh;\n  background: #cba6fb;\n  font-family: Comfortaa, cursive;\n}\nheader[_ngcontent-%COMP%]   span.h1[_ngcontent-%COMP%] {\n  color: white;\n  -webkit-text-fill-color: #424242;\n  -webkit-text-stroke-width: 0.8px;\n  -webkit-text-stroke-color: white;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 40px;\n}\nheader[_ngcontent-%COMP%]   span.p[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 27px;\n}\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nmain[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 90vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aWV3L3JvdXRlcy9jb3JlLnJvdXRlL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29yZS92aWV3L3JvdXRlcy9jb3JlLnJvdXRlL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwdncgYXV0byAxMHZ3IDEwdnc7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBiYWNrZ3JvdW5kOiAjY2JhNmZiO1xuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWEsIGN1cnNpdmU7XG4gICAgc3Bhbi5oMSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICM0MjQyNDI7XG4gICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuOHB4O1xuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgfVxuICAgIHNwYW4ucCwgYSB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxubWFpbiB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogOTB2aDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "UeI+":
    /*!********************************************!*\
      !*** ./src/app/core/app-routing.module.ts ***!
      \********************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function UeI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: 'eos',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | view-modules-eos-module */
          [__webpack_require__.e("default~view-modules-eos-module~view-modules-jungle-module~view-modules-wax-module"), __webpack_require__.e("view-modules-eos-module")]).then(__webpack_require__.bind(null,
          /*! ./view/modules/eos.module */
          "Z5BJ")).then(function (m) {
            return m.EosModule;
          });
        }
      }, {
        path: 'wax',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | view-modules-wax-module */
          [__webpack_require__.e("default~view-modules-eos-module~view-modules-jungle-module~view-modules-wax-module"), __webpack_require__.e("view-modules-wax-module")]).then(__webpack_require__.bind(null,
          /*! ./view/modules/wax.module */
          "1lO9")).then(function (m) {
            return m.WaxModule;
          });
        }
      }, {
        path: 'jungle',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | view-modules-jungle-module */
          [__webpack_require__.e("default~view-modules-eos-module~view-modules-jungle-module~view-modules-wax-module"), __webpack_require__.e("view-modules-jungle-module")]).then(__webpack_require__.bind(null,
          /*! ./view/modules/jungle.module */
          "Y4jW")).then(function (m) {
            return m.JungleModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'eos'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./core/app-routing.module */
      "UeI+");
      /* harmony import */


      var _core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/view/routes/core.route/app.component */
      "DnCW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/services/contact.services/contract.api.service */
      "mzXJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./core/services/json.services/json.service */
      "tcm4");

      var AppModule = /*#__PURE__*/function () {
        function AppModule() {
          _classCallCheck(this, AppModule);
        }

        _createClass(AppModule, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AppModule;
      }();

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_5__["ContractApiService"], _core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_20__["JsonService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _core_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _core_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _core_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatCommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"]],
            providers: [_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_5__["ContractApiService"], _core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_20__["JsonService"]],
            bootstrap: [_core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "mzXJ":
    /*!************************************************************************!*\
      !*** ./src/app/core/services/contact.services/contract.api.service.ts ***!
      \************************************************************************/

    /*! exports provided: API, apiIndex, ContractApiService */

    /***/
    function mzXJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API", function () {
        return API;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "apiIndex", function () {
        return apiIndex;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContractApiService", function () {
        return ContractApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var API = {
        EOS: 'https://api.eosn.io',
        WAX: 'https://testnet.wax.eosdetroit.io',
        ACCINFO: 'https://lightapi.eosamsterdam.net',
        PROTON: 'https://proton.greymass.com',
        TELOS: 'https://telos.greymass.com',
        JUNGLE3: 'https://api.jungle3.alohaeos.com',
        FIO: 'https://fio.greymass.com',
        BOS: 'https://api.bossweden.org',
        // wax.ctyptolions.io
        TEST: 'https://api.light.xeos.me'
      };
      var apiIndex = {
        value: 'eos'
      };

      var ContractApiService = /*#__PURE__*/function () {
        function ContractApiService(http) {
          _classCallCheck(this, ContractApiService);

          this.http = http;
          this.apiIndex = 'EOS';
          this.account_name = '';
        }

        _createClass(ContractApiService, [{
          key: "getApiIndex",
          value: function getApiIndex() {
            return "".concat(this.apiIndex);
          }
        }, {
          key: "changeApi",
          value: function changeApi(newApi) {
            apiIndex.value = newApi.toLowerCase();
            this.apiIndex = newApi;
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            return "".concat(this.account_name);
          }
        }, {
          key: "changeUserName",
          value: function changeUserName(accountName) {
            this.account_name = accountName;
          }
        }, {
          key: "getContractActionsList",
          value: function getContractActionsList(body) {
            return this.http.post("".concat(API[this.apiIndex], "/v1/chain/get_abi"), body);
          }
        }, {
          key: "getFromJsonTemplate",
          value: function getFromJsonTemplate() {
            return this.http.get('./assets/templates.json');
          }
        }, {
          key: "getProducers",
          value: function getProducers(from) {
            return this.http.get("".concat(API.ACCINFO, "/api/accinfo/").concat(this.apiIndex.toLowerCase(), "/") + from);
          }
        }, {
          key: "getTopProducers",
          value: function getTopProducers() {
            return this.http.get("https://wax.greymass.com/v1/chain/get_producers");
          }
        }]);

        return ContractApiService;
      }();

      ContractApiService.ɵfac = function ContractApiService_Factory(t) {
        return new (t || ContractApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      };

      ContractApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ContractApiService,
        factory: ContractApiService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "tcm4":
    /*!*************************************************************!*\
      !*** ./src/app/core/services/json.services/json.service.ts ***!
      \*************************************************************/

    /*! exports provided: JsonService */

    /***/
    function tcm4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JsonService", function () {
        return JsonService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var JsonService = /*#__PURE__*/function () {
        function JsonService() {
          _classCallCheck(this, JsonService);
        }

        _createClass(JsonService, [{
          key: "importObjectFromJson",
          value: function importObjectFromJson(f) {
            var input = document.createElement('input');
            input.type = 'file';
            var e = input.onchange = f;
            input.click();
            return e;
          }
        }, {
          key: "exportObjectAsJson",
          value: function exportObjectAsJson(exportObj, exportName) {
            var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj));
            var downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute('href', dataStr);
            downloadAnchorNode.setAttribute('download', exportName + '.json');
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
          }
        }]);

        return JsonService;
      }();

      JsonService.ɵfac = function JsonService_Factory(t) {
        return new (t || JsonService)();
      };

      JsonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JsonService,
        factory: JsonService.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].chainName === 'WAX') {
        var head = document.getElementsByTagName('head')[0];
        var js = document.createElement('script');
        js.type = 'text/javascript';
        js.appendChild(document.createTextNode("\n    var _paq = window._paq = window._paq || [];\n    /* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n    _paq.push(['trackPageView']);\n    _paq.push(['enableLinkTracking']);\n    (function() {\n      var u=\"//analytics.cryptolions.io/\";\n      _paq.push(['setTrackerUrl', u+'matomo.php']);\n      _paq.push(['setSiteId', '11']);\n      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n      g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);\n    })();"));
        head.appendChild(js);
      } else if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].chainName === 'Jungle 3') {
        var _head = document.getElementsByTagName('head')[0];

        var _js = document.createElement('script');

        _js.type = 'text/javascript';

        _js.appendChild(document.createTextNode("\n    var _paq = window._paq = window._paq || [];\n    /* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n    _paq.push(['trackPageView']);\n    _paq.push(['enableLinkTracking']);\n    (function() {\n      var u=\"//analytics.cryptolions.io/\";\n      _paq.push(['setTrackerUrl', u+'matomo.php']);\n      _paq.push(['setSiteId', '12']);\n      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n      g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);\n    })();"));

        _head.appendChild(_js);
      } else if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].chainName === 'EOS') {
        var _head2 = document.getElementsByTagName('head')[0];

        var _js2 = document.createElement('script');

        _js2.type = 'text/javascript';

        _js2.appendChild(document.createTextNode("\n  var _paq = window._paq = window._paq || [];\n  /* tracker methods like \"setCustomDimension\" should be called before \"trackPageView\" */\n  _paq.push(['trackPageView']);\n  _paq.push(['enableLinkTracking']);\n  (function() {\n    var u=\"//analytics.cryptolions.io/\";\n    _paq.push(['setTrackerUrl', u+'matomo.php']);\n    _paq.push(['setSiteId', '10']);\n    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];\n    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);\n  })();"));

        _head2.appendChild(_js2);
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map