(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
    1:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    2:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    3:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "3f24":
    /*!****************************************************************************************************!*\
      !*** ./src/app/core/view/components/transaction.form.component copy/transaction.form.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: TransactionFormComponent */

    /***/
    function f24(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionFormComponent", function () {
        return TransactionFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../services/contact.services/contract.api.service */
      "mzXJ");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function TransactionFormComponent_mat_option_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var act_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", act_r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", act_r1, " ");
        }
      }

      var TransactionFormComponent = /*#__PURE__*/function () {
        function TransactionFormComponent(cas, dialogRef) {
          _classCallCheck(this, TransactionFormComponent);

          this.cas = cas;
          this.dialogRef = dialogRef;
          this.data = {
            name: 'eosio.token',
            action: {
              name: '',
              fields: [{
                name: '',
                type: '',
                value: ''
              }],
              _fields: []
            }
          };
          this._actions = [];
        }

        _createClass(TransactionFormComponent, [{
          key: "viaContractApi",
          value: function viaContractApi(from) {
            this.cas.getContractActionsList({
              account_name: this.data.name
            }).subscribe(from);
          }
        }, {
          key: "reBuildData",
          value: function reBuildData() {
            var _this = this;

            this.viaContractApi(function (res) {
              _this._actions = res.abi.actions.map(function (a) {
                return a.name;
              });
              _this.actions = res.abi.structs.map(function (s) {
                return {
                  name: s.name,
                  fields: s.fields.map(function (f) {
                    return {
                      name: f.name,
                      type: f.type,
                      value: f.type
                    };
                  }),
                  _fields: s.fields.map(function (f) {
                    return f.name;
                  })
                };
              });
              _this.data.action.name = _this._actions[0];
              _this.data.action = _this.actions.find(function (a) {
                return a.name === _this.data.action.name;
              });
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reBuildData();
          }
        }, {
          key: "onActionChange",
          value: function onActionChange() {
            var _this2 = this;

            this.data.action = this.actions.find(function (a) {
              return a.name === _this2.data.action.name;
            });
          }
        }, {
          key: "onContractChange",
          value: function onContractChange() {
            this.reBuildData();
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return TransactionFormComponent;
      }();

      TransactionFormComponent.ɵfac = function TransactionFormComponent_Factory(t) {
        return new (t || TransactionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__["ContractApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]));
      };

      TransactionFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TransactionFormComponent,
        selectors: [["app-transaction-form"]],
        decls: 17,
        vars: 4,
        consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "fill"], ["required", "", "matInput", "", 3, "ngModel", "ngModelChange", "focusout", "keyup.enter"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], [3, "value"]],
        template: function TransactionFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add transaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contract name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionFormComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.data.name = $event;
            })("focusout", function TransactionFormComponent_Template_input_focusout_6_listener() {
              return ctx.onContractChange();
            })("keyup.enter", function TransactionFormComponent_Template_input_keyup_enter_6_listener() {
              return ctx.onContractChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Action name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionFormComponent_Template_mat_select_ngModelChange_10_listener($event) {
              return ctx.data.action.name = $event;
            })("ngModelChange", function TransactionFormComponent_Template_mat_select_ngModelChange_10_listener() {
              return ctx.onActionChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TransactionFormComponent_mat_option_11_Template, 2, 2, "mat-option", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionFormComponent_Template_button_click_13_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Add");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.action.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._actions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]],
        styles: ["form[_ngcontent-%COMP%] {\n  background-color: #CCFFE0;\n  display: grid;\n  grid-auto-flow: row;\n  justify-items: center;\n  align-self: center;\n}\nform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  background-color: #74A086;\n  width: 100%;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2p1cGl0ZXIvV29yay9tc3lnL3NyYy9hcHAvY29yZS92aWV3L2NvbXBvbmVudHMvdHJhbnNhY3Rpb24uZm9ybS5jb21wb25lbnQlMjBjb3B5L3RyYW5zYWN0aW9uLmZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvcmUvdmlldy9jb21wb25lbnRzL3RyYW5zYWN0aW9uLmZvcm0uY29tcG9uZW50IGNvcHkvdHJhbnNhY3Rpb24uZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0FKO0FEQ0k7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNDUjtBREVRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FaIiwiZmlsZSI6InNyYy9hcHAvY29yZS92aWV3L2NvbXBvbmVudHMvdHJhbnNhY3Rpb24uZm9ybS5jb21wb25lbnQgY29weS90cmFuc2FjdGlvbi5mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mb3Jte1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0ZGRTA7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgaDJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NEEwODY7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBsYWJlbHtcbiAgICAgICAgc2VsZWN0e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0ZGRTA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXV0by1mbG93OiByb3c7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuZm9ybSBoMiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NEEwODY7XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9ybSBsYWJlbCBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-transaction-form',
            templateUrl: './transaction.form.component.html',
            styleUrls: ['./transaction.form.component.scss']
          }]
        }], function () {
          return [{
            type: _services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__["ContractApiService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    4:
    /*!**********************!*\
      !*** util (ignored) ***!
      \**********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    5:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    6:
    /*!************************!*\
      !*** buffer (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    7:
    /*!************************!*\
      !*** crypto (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    8:
    /*!************************!*\
      !*** buffer (ignored) ***!
      \************************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

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
          appName: 'WAX SA TOOLS dev',
          httpEndpoint: "https://".concat(host),
          chain: chain,
          host: host,
          verbose: false,
          blockchain: 'eos',
          port: 443,
          protocol: 'https',
          expireInSeconds: 5
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


      var src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/services/contact.services/contract.api.service */
      "mzXJ");
      /* harmony import */


      var _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @cryptolions/ulm-eosio */
      "S1Ef");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_dynamic_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/dynamic.form.component/dynamic.form.component */
      "YCt8");

      function AppComponent_a_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_8_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.loginEOSService.openPopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_a_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_9_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.loginEOSService.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(contract, loginEOSService) {
          var _this3 = this;

          _classCallCheck(this, AppComponent);

          this.contract = contract;
          this.loginEOSService = loginEOSService;
          this.account_name = '';
          loginEOSService.loggedIn.subscribe(function (res) {
            _this3.account_name = loginEOSService.accountName;

            _this3.contract.changeUserName(loginEOSService.accountName);

            _this3.contract.changeApi(loginEOSService.eosioWalletType.toUpperCase());
          });
        }

        _createClass(AppComponent, [{
          key: "login",
          value: function login() {
            console.log('g');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__["ContractApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_2__["LoginEOSService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 12,
        vars: 3,
        consts: [[1, "h1"], [1, "p"], [3, "click", 4, "ngIf"], [3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login-eos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MSIG.CRYPTOLIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppComponent_a_8_Template, 2, 0, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_a_9_Template, 2, 0, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-dynamic-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.contract.getApiIndex() ? ctx.contract.getApiIndex() : "CHAIN", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginEOSService.connected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginEOSService.connected);
          }
        },
        directives: [_cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_2__["LoginEOSComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_dynamic_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]],
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
          return [{
            type: src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__["ContractApiService"]
          }, {
            type: _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_2__["LoginEOSService"]
          }];
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

      var routes = [];

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
    "YCt8":
    /*!***************************************************************************************!*\
      !*** ./src/app/core/view/components/dynamic.form.component/dynamic.form.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: DynamicFormComponent */

    /***/
    function YCt8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function () {
        return DynamicFormComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _transaction_form_component_copy_transaction_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../transaction.form.component copy/transaction.form.component */
      "3f24");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/services/json.services/json.service */
      "tcm4");
      /* harmony import */


      var src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/services/contact.services/contract.api.service */
      "mzXJ");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DynamicFormComponent_div_29_div_14_div_2_input_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function DynamicFormComponent_div_29_div_14_div_2_input_3_Template_input_focusout_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var field_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var transIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.onFromChange(field_r6, transIndex_r3);
          })("keyup.enter", function DynamicFormComponent_div_29_div_14_div_2_input_3_Template_input_keyup_enter_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var field_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            var transIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r13.onFromChange(field_r6, transIndex_r3);
          })("ngModelChange", function DynamicFormComponent_div_29_div_14_div_2_input_3_Template_input_ngModelChange_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var field_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

            return field_r6.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", field_r6.type)("ngModel", field_r6.value);
        }
      }

      function DynamicFormComponent_div_29_div_14_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DynamicFormComponent_div_29_div_14_div_2_input_3_Template, 1, 2, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", field_r6.name, ":");
        }
      }

      function DynamicFormComponent_div_29_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DynamicFormComponent_div_29_div_14_div_2_Template, 4, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", field_r6.name);
        }
      }

      function DynamicFormComponent_div_29_div_19_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var name_r24 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", name_r24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", name_r24, " ");
        }
      }

      function DynamicFormComponent_div_29_div_19_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var perm_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", perm_r25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", perm_r25, " ");
        }
      }

      function DynamicFormComponent_div_29_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "select", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_29_div_19_Template_select_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var auth_r20 = ctx.$implicit;
            return auth_r20._name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "field");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DynamicFormComponent_div_29_div_19_option_5_Template, 2, 2, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "@");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "select", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_29_div_19_Template_select_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var auth_r20 = ctx.$implicit;
            return auth_r20.perightrm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DynamicFormComponent_div_29_div_19_option_12_Template, 2, 2, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_div_29_div_19_Template_button_click_13_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27);

            var authIndex_r21 = ctx.index;

            var transIndex_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r29.removeLocalAuth(transIndex_r3, authIndex_r21);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var auth_r20 = ctx.$implicit;

          var tran_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", auth_r20._name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", tran_r2.action._fields);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", auth_r20.perightrm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", auth_r20.perms);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", tran_r2.auths.length == 1);
        }
      }

      function DynamicFormComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_div_29_Template_span_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

            var transIndex_r3 = ctx.index;

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r32.removeLocalTransaction(transIndex_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " - Remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, DynamicFormComponent_div_29_div_14_Template, 3, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Authorizations");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DynamicFormComponent_div_29_div_19_Template, 14, 5, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_div_29_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

            var transIndex_r3 = ctx.index;

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r34.addLocalAuth(transIndex_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tran_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", tran_r2.name, "::", tran_r2.action.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", tran_r2.action.fields);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", tran_r2.auths);
        }
      }

      function DynamicFormComponent_div_48_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_48_div_1_div_1_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

            var account_r40 = ctx.$implicit;
            return account_r40.acc = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " @ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_48_div_1_div_1_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

            var account_r40 = ctx.$implicit;
            return account_r40.prm = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var account_r40 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", account_r40.acc);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", account_r40.prm);
        }
      }

      function DynamicFormComponent_div_48_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DynamicFormComponent_div_48_div_1_div_1_Template, 6, 2, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var auth_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", auth_r35.perms[ctx_r37.getIndexByFieldName(auth_r35._name, auth_r35._id)].accounts);
        }
      }

      function DynamicFormComponent_div_48_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_48_div_2_div_1_Template_input_ngModelChange_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50);

            var key_r47 = ctx.$implicit;
            return key_r47.public_key = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var key_r47 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", key_r47.public_key);
        }
      }

      function DynamicFormComponent_div_48_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DynamicFormComponent_div_48_div_2_div_1_Template, 3, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var auth_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", auth_r35.perms[ctx_r38.getIndexByFieldName(auth_r35._name, auth_r35._id)].keys);
        }
      }

      function DynamicFormComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DynamicFormComponent_div_48_div_1_Template, 2, 1, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DynamicFormComponent_div_48_div_2_Template, 2, 1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var auth_r35 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", auth_r35.perms.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", auth_r35.perms.length > 0);
        }
      }

      var DynamicFormComponent = /*#__PURE__*/function () {
        function DynamicFormComponent(dialog, json, contract) {
          _classCallCheck(this, DynamicFormComponent);

          this.dialog = dialog;
          this.json = json;
          this.contract = contract;
        }

        _createClass(DynamicFormComponent, [{
          key: "diaTrans",
          value: function diaTrans(after) {
            this.dialog.open(_transaction_form_component_copy_transaction_form_component__WEBPACK_IMPORTED_MODULE_2__["TransactionFormComponent"], {
              width: '250px'
            }).afterClosed().subscribe(after);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.clearMsig();
          }
        }, {
          key: "diaJson",
          value: function diaJson(after) {
            this.contract.getFromJsonTemplate().subscribe(after);
          }
        }, {
          key: "clearMsig",
          value: function clearMsig() {
            this.t = {
              accInfo: {
                chain: '',
                name: this.contract.getUserName(),
                account: '',
                expiration: ''
              },
              trans: [],
              auths: []
            };
            this.addTran();
          }
        }, {
          key: "import",
          value: function _import() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.json.importObjectFromJson(function (e) {
                        var reader = new FileReader();

                        reader.onload = function (e2) {
                          var obj = JSON.parse(e2.target.result.toString());
                          _this4.t = obj.t;

                          _this4.contract.changeApi(obj.a);
                        };

                        reader.readAsText(e.target.files[0]);
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "export",
          value: function _export() {
            this.json.exportObjectAsJson({
              t: this.t,
              a: this.contract.getApiIndex().split(':: ')[1]
            }, 'msig-save-' + new Date().toLocaleString());
          }
        }, {
          key: "addTran",
          value: function addTran() {
            var _this5 = this;

            this.diaTrans(function (tran) {
              if (!tran) {
                return;
              } else {
                console.log(tran);

                _this5.diaJson(function (jsonArray) {
                  if (!jsonArray || !jsonArray.find(function (s) {
                    return s.name === tran.action.name;
                  })) {
                    _this5.t.trans.push({
                      name: tran.name,
                      chain: _this5.contract.getApiIndex(),
                      action: {
                        name: tran.action.name,
                        fields: tran.action.fields,
                        _fields: tran.action._fields
                      },
                      auths: [{
                        _name: '',
                        perm: '',
                        perms: []
                      }]
                    });
                  } else {
                    _this5.t.trans.push({
                      name: tran.name,
                      chain: _this5.contract.getApiIndex(),
                      action: {
                        name: tran.action.name,
                        fields: tran.action.fields,
                        _fields: tran.action._fields
                      },
                      auths: [{
                        _name: '',
                        perm: '',
                        perms: []
                      }]
                    });
                  }
                });
              }

              _this5.t.accInfo.account = _this5.contract.getUserName();
            });
          }
        }, {
          key: "addLocalAuth",
          value: function addLocalAuth(tId) {
            this.t.trans[tId].auths.push({
              _name: '',
              perm: '',
              perms: []
            });
          }
        }, {
          key: "removeLocalAuth",
          value: function removeLocalAuth(tId, i) {
            this.t.trans[tId].auths = this.t.trans[tId].auths.filter(function (x, y) {
              return y !== i;
            });
          }
        }, {
          key: "removeLocalTransaction",
          value: function removeLocalTransaction(tId) {
            this.t.trans = this.t.trans.filter(function (x, y) {
              return y !== tId;
            });
            this.t.auths = this.t.auths.filter(function (x) {
              return x._id !== tId;
            });
          }
        }, {
          key: "getIndexByFieldName",
          value: function getIndexByFieldName(from, id) {
            return this.t.trans[id].auths.find(function (auth) {
              return auth._name === from;
            }).perms.indexOf(this.t.trans[id].auths.find(function (auth) {
              return auth._name === from;
            }).perm);
          }
        }, {
          key: "onFromChange",
          value: function onFromChange(from, tranIndex) {
            var _this6 = this;

            if (this.t.trans[tranIndex].auths.find(function (auth) {
              return auth._name === from.name;
            })) {
              this.contract.getProducers(from.value).subscribe(function (accInfo) {
                var perms = [];
                var _perms = [];
                accInfo.permissions.forEach(function (permission) {
                  perms.push({
                    name: permission.perm,
                    accounts: permission.auth.accounts.map(function (account) {
                      return {
                        acc: account.actor,
                        prm: account.permission
                      };
                    }),
                    keys: permission.auth.keys
                  });

                  _perms.push(permission.perm);
                });
                _this6.t.trans[tranIndex].auths.find(function (auth) {
                  return auth._name === from.name;
                }).perms = _perms;
                _this6.t.trans[tranIndex].auths.find(function (auth) {
                  return auth._name === from.name;
                }).perm = _perms[0];

                if (!_this6.t.auths.find(function (auth) {
                  return auth._name === from.name && auth._id === tranIndex;
                })) {
                  _this6.t.auths.push({
                    _name: from.name,
                    _id: tranIndex,
                    _value: from.value,
                    perms: perms
                  });
                } else {
                  _this6.t.auths.find(function (auth) {
                    return auth._name === from.name && auth._id === tranIndex;
                  })._value = from.value;
                  _this6.t.auths.find(function (auth) {
                    return auth._name === from.name && auth._id === tranIndex;
                  }).perms = perms;
                }
              });
            }
          }
        }]);

        return DynamicFormComponent;
      }();

      DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) {
        return new (t || DynamicFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_5__["ContractApiService"]));
      };

      DynamicFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DynamicFormComponent,
        selectors: [["app-dynamic-form"]],
        decls: 49,
        vars: 5,
        consts: [[1, "parent-main"], [1, "main"], [1, "h2"], [1, "main-icons"], ["mat-icon-button", "", 2, "background-color", "white", "color", "black", 3, "click"], ["width", "40", "height", "40", "viewBox", "0 0 40 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M38.7447 8.74473L31.2553 1.25527C30.4515 0.451539 29.3615 5.94354e-06 28.2248 0H4.28571C1.91875 0 0 1.91875 0 4.28571V35.7143C0 38.0812 1.91875 40 4.28571 40H35.7143C38.0812 40 40 38.0812 40 35.7143V11.7752C40 10.6385 39.5485 9.54845 38.7447 8.74473ZM20 34.2857C16.8441 34.2857 14.2857 31.7273 14.2857 28.5714C14.2857 25.4155 16.8441 22.8571 20 22.8571C23.1559 22.8571 25.7143 25.4155 25.7143 28.5714C25.7143 31.7273 23.1559 34.2857 20 34.2857ZM28.5714 7.09643V16.0714C28.5714 16.6631 28.0917 17.1429 27.5 17.1429H6.78571C6.19402 17.1429 5.71429 16.6631 5.71429 16.0714V6.78571C5.71429 6.19402 6.19402 5.71429 6.78571 5.71429H27.1893C27.4735 5.71429 27.746 5.82714 27.9469 6.02813L28.2576 6.33884C28.3571 6.43831 28.436 6.55642 28.4899 6.68641C28.5437 6.8164 28.5714 6.95573 28.5714 7.09643Z", "fill", "black"], ["width", "44", "height", "44", "viewBox", "0 0 44 44", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M25.4375 32.9984H18.5625C17.4195 32.9984 16.5 32.0787 16.5 30.9356V16.496H8.96328C7.43359 16.496 6.66875 14.648 7.75156 13.5651L20.8227 0.483469C21.4672 -0.161156 22.5242 -0.161156 23.1688 0.483469L36.2484 13.5651C37.3312 14.648 36.5664 16.496 35.0367 16.496H27.5V30.9356C27.5 32.0787 26.5805 32.9984 25.4375 32.9984ZM44 32.3108V41.9372C44 43.0803 43.0805 44 41.9375 44H2.0625C0.919531 44 0 43.0803 0 41.9372V32.3108C0 31.1677 0.919531 30.248 2.0625 30.248H13.75V30.9356C13.75 33.5914 15.907 35.7488 18.5625 35.7488H25.4375C28.093 35.7488 30.25 33.5914 30.25 30.9356V30.248H41.9375C43.0805 30.248 44 31.1677 44 32.3108ZM33.3438 39.8744C33.3438 38.9289 32.5703 38.1554 31.625 38.1554C30.6797 38.1554 29.9062 38.9289 29.9062 39.8744C29.9062 40.8198 30.6797 41.5934 31.625 41.5934C32.5703 41.5934 33.3438 40.8198 33.3438 39.8744ZM38.8438 39.8744C38.8438 38.9289 38.0703 38.1554 37.125 38.1554C36.1797 38.1554 35.4062 38.9289 35.4062 39.8744C35.4062 40.8198 36.1797 41.5934 37.125 41.5934C38.0703 41.5934 38.8438 40.8198 38.8438 39.8744Z", "fill", "black"], [1, "parent", 2, "overflow", "auto"], ["appearance", "fill", 1, "field", 2, "width", "100%"], ["required", "", "matInput", "", "readonly", "", 3, "ngModel", "ngModelChange"], ["required", "", "matInput", "", 3, "ngModel", "ngModelChange"], ["required", "", "matInput", "", "placeholder", "in days", 3, "ngModel", "ngModelChange"], [1, "parent-trans"], [1, "h3"], [4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click"], [1, "parent-auths"], [1, "parent-auths-content", 2, "overflow", "auto"], [1, "producers"], [1, "auth-producers"], ["type", "radio", "id", "top-producers", "name", "producers", "value", "top-producers", "disabled", ""], ["for", "top-producers"], ["type", "radio", "id", "smart-producers", "name", "producers", "value", "smart-producers", "checked", ""], ["for", "smart-producers"], ["class", "producers", 4, "ngFor", "ngForOf"], [1, "trans-header"], ["width", "19", "height", "14", "viewBox", "0 0 19 14", "fill", "none"], ["d", "M14.63 0.84C14.27 0.33 13.67 0 13 0L2 0.0100002C0.9 0.0100002 0 0.9 0 2V12C0 13.1 0.9 13.99 2 13.99L13 14C13.67 14 14.27 13.67 14.63 13.16L19 7L14.63 0.84Z", "fill", "black"], [1, "trans-name"], [1, "a", 3, "click"], [1, "trans-content"], [1, "content"], [1, "content", "trans-auth__wrapper", 2, "overflow", "auto"], ["class", "trans-auth", 4, "ngFor", "ngForOf"], ["appearance", "fill", 3, "ngSwitch"], ["class", "trans-field", 4, "ngSwitchDefault"], [1, "trans-field"], ["required", "", "matInput", "", 3, "placeholder", "ngModel", "focusout", "keyup.enter", "ngModelChange", 4, "ngSwitchDefault"], ["required", "", "matInput", "", 3, "placeholder", "ngModel", "focusout", "keyup.enter", "ngModelChange"], [1, "trans-auth"], ["appearance", "fill", 1, "trans-field"], ["required", "", 1, "trans-field__select", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "trans-auth__separator"], ["required", "", 1, "trans-field__select", "trans-field__select-right", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", 1, "trans-auth__btn", 3, "disabled", "click"], [3, "value"], [4, "ngIf"], ["class", "producers", 4, "ngIf"], ["class", "auth-producers", 4, "ngFor", "ngForOf"], ["appearance", "fill"], ["required", "", "type", "text", "placeholder", "from", "readonly", "", 3, "ngModel", "ngModelChange"], ["required", "", "type", "text", "placeholder", "permission", "readonly", "", 3, "ngModel", "ngModelChange"], ["appearance", "fill", 1, "auth-producers"], ["required", "", "type", "text", "placeholder", "public key", "readonly", "", 1, "key", 3, "ngModel", "ngModelChange"]],
        template: function DynamicFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "CREATE NEW MSIG");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_5_listener() {
              return ctx["import"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_8_listener() {
              return ctx["export"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "path", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "MSIG proposer account: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.t.accInfo.account = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "MSIG proposal name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.t.accInfo.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "MSIG expiration: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.t.accInfo.expiration = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "1. Add Transaction(s)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DynamicFormComponent_div_29_Template, 22, 4, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_31_listener() {
              return ctx.clearMsig();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "CLEAR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_33_listener() {
              return ctx.addTran();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "ADD");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "2. MSIG Authorizations");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Top 30 producers");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Smart detection & Manual");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, DynamicFormComponent_div_48_Template, 3, 2, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.t.accInfo.account);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.t.accInfo.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.t.accInfo.expiration);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.t.trans);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.t.auths);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"]],
        styles: ["[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  display: grid;\n  justify-self: center;\n}\n\n.parent-main[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n\n.parent-main[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 4vw;\n  margin-bottom: 100px;\n}\n\n.parent-main[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   span.h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 64px;\n  line-height: 71px;\n}\n\n.parent-main[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   div.main-icons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 2vw;\n}\n\n.parent-trans[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.parent-trans[_ngcontent-%COMP%]   span.h3[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 54px;\n  margin-bottom: 20px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-header[_ngcontent-%COMP%] {\n  display: grid;\n  font-family: Roboto;\n  grid-auto-flow: column;\n  justify-items: center;\n  align-items: center;\n  grid-gap: 5px;\n  margin-bottom: 10px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-header[_ngcontent-%COMP%]   .trans-name[_ngcontent-%COMP%] {\n  width: 40vw;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  background: #c4c4c4;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-header[_ngcontent-%COMP%]   .a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  color: #ff0000;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%] {\n  width: 40vw;\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 14px;\n  margin-top: 17px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n  background: #c4c4c4;\n  width: 40vw;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-auth[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-auth__separator[_ngcontent-%COMP%] {\n  height: 3vw;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  background-color: white;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  font-size: 1vw;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-auth__btn[_ngcontent-%COMP%] {\n  width: 2vw;\n  height: 0.8vw;\n  background-color: red;\n  border-radius: 0 !important;\n  margin: 2vw 1.3vw;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-auth__wrapper[_ngcontent-%COMP%] {\n  width: 29vw !important;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  margin: 10px 0;\n  grid-gap: 2vw;\n  margin-bottom: 10px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16x;\n  line-height: 28px;\n  justify-self: center;\n  width: 10vw;\n  height: 4vh;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 25vw;\n  height: 2vh;\n  padding: 10px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: white;\n  border: black 1px solid;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field__select[_ngcontent-%COMP%]:not(.trans-field__select-right), .parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field__select-right[_ngcontent-%COMP%] {\n  width: 9vw !important;\n  height: 3vw !important;\n  font-size: 1.3vw;\n  line-height: 1.6vw;\n  font-weight: bold;\n  padding: 6px 0 7px 0;\n  font-family: \"Roboto\";\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: 1px;\n  text-overflow: \"\";\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field__select[_ngcontent-%COMP%]:not(.trans-field__select-right) {\n  text-align: right;\n  border-right: none !important;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field__select-right[_ngcontent-%COMP%] {\n  border-left: none !important;\n}\n\n.parent-auths[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.parent-auths[_ngcontent-%COMP%]   span.h3[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 54px;\n}\n\n.parent-auths[_ngcontent-%COMP%]   .parent-auths-content[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.parent-auths[_ngcontent-%COMP%]   .parent-auths-content[_ngcontent-%COMP%]   .producers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n}\n\n.parent-auths[_ngcontent-%COMP%]   .parent-auths-content[_ngcontent-%COMP%]   .producers[_ngcontent-%COMP%]   .auth-producers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 1vw;\n  margin-bottom: 10px;\n}\n\n.parent-auths[_ngcontent-%COMP%]   .parent-auths-content[_ngcontent-%COMP%]   .producers[_ngcontent-%COMP%]   .auth-producers[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: solid 2px black;\n  width: 18vw;\n  height: 3vh;\n  padding: 10px;\n}\n\n.parent-auths[_ngcontent-%COMP%]   .parent-auths-content[_ngcontent-%COMP%]   .producers[_ngcontent-%COMP%]   .auth-producers[_ngcontent-%COMP%]   input[type=text].key[_ngcontent-%COMP%] {\n  width: 40vw;\n}\n\ndiv.field[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 2vw;\n  margin-bottom: 10px;\n}\n\ndiv.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  justify-self: center;\n  width: 10vw;\n  height: 4vh;\n}\n\ndiv.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 25vw;\n  height: 4vh;\n  background: #c4c4c4;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aWV3L2NvbXBvbmVudHMvZHluYW1pYy5mb3JtLmNvbXBvbmVudC9keW5hbWljLmZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUVKOztBQURJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBR1I7O0FBRlE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFJWjs7QUFGUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFJWjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBRkk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFJUjs7QUFGSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFlQSxtQkFBQTtBQVZSOztBQUpRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFNWjs7QUFKUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFNWjs7QUFGSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFJUjs7QUFIUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUtaOztBQUhRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBS1o7O0FBSFE7RUFDSSxhQUFBO0FBS1o7O0FBSlk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FBTWhCOztBQUpZO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFNaEI7O0FBSlk7RUFDSSxzQkFBQTtBQU1oQjs7QUFIUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBd0NBLG1CQUFBO0FBbENaOztBQUxZO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBT2hCOztBQUxZO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBT2hCOztBQUxZOztFQUVJLGlCQUFBO0VBQ0EsdUJBQUE7QUFPaEI7O0FBTFk7RUFFSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTWhCOztBQUpZO0VBQ0ksaUJBQUE7RUFDQSw2QkFBQTtBQU1oQjs7QUFKWTtFQUNJLDRCQUFBO0FBTWhCOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFGSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFJUjs7QUFGSTtFQUNJLGFBQUE7QUFJUjs7QUFIUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUtaOztBQUpZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQVdBLG1CQUFBO0FBSmhCOztBQU5nQjtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFRcEI7O0FBTmdCO0VBQ0ksV0FBQTtBQVFwQjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFZQSxtQkFBQTtBQVBKOztBQUpJO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQU1SOztBQUpJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFNUiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdmlldy9jb21wb25lbnRzL2R5bmFtaWMuZm9ybS5jb21wb25lbnQvZHluYW1pYy5mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QgKiB7XG4gICAgZm9udC1mYW1pbHk6IENvbWZvcnRhYTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuLnBhcmVudC1tYWluIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAubWFpbiB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgICAgIGdyaWQtZ2FwOiA0dnc7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICBzcGFuLmgyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiA2NHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDcxcHg7XG4gICAgICAgIH1cbiAgICAgICAgZGl2Lm1haW4taWNvbnMge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgICAgICAgICBncmlkLWdhcDogMnZ3O1xuICAgICAgICB9XG4gICAgfVxufVxuLnBhcmVudC10cmFucyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHNwYW4uaDMge1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1NHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICAudHJhbnMtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBncmlkLWdhcDogNXB4O1xuICAgICAgICAudHJhbnMtbmFtZSB7XG4gICAgICAgICAgICB3aWR0aDogNDB2dztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xuICAgICAgICB9XG4gICAgICAgIC5hIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcbiAgICAgICAgfVxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAudHJhbnMtY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICBncmlkLWdhcDogMTRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTdweDtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgfVxuICAgICAgICBkaXYuY29udGVudCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYzRjNGM0O1xuICAgICAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICAgIH1cbiAgICAgICAgLnRyYW5zLWF1dGgge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICZfX3NlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzdnc7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDF2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX2J0biB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDJ2dztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuOHZ3O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAydncgMS4zdnc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmX193cmFwcGVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjl2dyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50cmFucy1maWVsZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDJ2dztcbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2eDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTB2dztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDR2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjV2dztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJ2aDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQsXG4gICAgICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJl9fc2VsZWN0Om5vdCgudHJhbnMtZmllbGRfX3NlbGVjdC1yaWdodCksXG4gICAgICAgICAgICAmX19zZWxlY3QtcmlnaHQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5dncgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDN2dyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zdnc7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNnZ3O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAwIDdweCAwO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDFweDtcbiAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJl9fc2VsZWN0Om5vdCgudHJhbnMtZmllbGRfX3NlbGVjdC1yaWdodCkge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJl9fc2VsZWN0LXJpZ2h0IHtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5wYXJlbnQtYXV0aHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBzcGFuLmgzIHtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNTRweDtcbiAgICB9XG4gICAgLnBhcmVudC1hdXRocy1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgLnByb2R1Y2VycyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcbiAgICAgICAgICAgIC5hdXRoLXByb2R1Y2VycyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxdnc7XG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDJweCBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4dnc7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3ZoO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXS5rZXkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDB2dztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmRpdi5maWVsZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIGdyaWQtZ2FwOiAydnc7XG4gICAgbGFiZWwge1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwdnc7XG4gICAgICAgIGhlaWdodDogNHZoO1xuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAyNXZ3O1xuICAgICAgICBoZWlnaHQ6IDR2aDtcbiAgICAgICAgYmFja2dyb3VuZDogI2M0YzRjNDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DynamicFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-dynamic-form',
            templateUrl: './dynamic.form.component.html',
            styleUrls: ['./dynamic.form.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: src_app_core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"]
          }, {
            type: src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_5__["ContractApiService"]
          }];
        }, null);
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


      var _core_view_components_dynamic_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./core/view/components/dynamic.form.component/dynamic.form.component */
      "YCt8");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _core_view_components_transaction_form_component_copy_transaction_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./core/view/components/transaction.form.component copy/transaction.form.component */
      "3f24");
      /* harmony import */


      var _core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./core/services/contact.services/contract.api.service */
      "mzXJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/button-toggle */
      "jaxi");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @cryptolions/ulm-eosio */
      "S1Ef");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");
      /* harmony import */


      var _core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./core/services/json.services/json.service */
      "tcm4");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_7__["ContractApiService"], _core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_24__["JsonService"]],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _core_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_22__["LoginEOSModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].ulm)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _core_view_components_transaction_form_component_copy_transaction_form_component__WEBPACK_IMPORTED_MODULE_6__["TransactionFormComponent"], _core_view_components_dynamic_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _core_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_22__["LoginEOSModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _core_view_components_transaction_form_component_copy_transaction_form_component__WEBPACK_IMPORTED_MODULE_6__["TransactionFormComponent"], _core_view_components_dynamic_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _core_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatCommonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"], _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_22__["LoginEOSModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].ulm)],
            providers: [_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_7__["ContractApiService"], _core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_24__["JsonService"]],
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

    /*! exports provided: API, ContractApiService */

    /***/
    function mzXJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "API", function () {
        return API;
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