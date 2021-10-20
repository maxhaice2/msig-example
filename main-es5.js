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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", act_r1.name, " ");
        }
      }

      var TransactionFormComponent = /*#__PURE__*/function () {
        function TransactionFormComponent(cas, dialogRef) {
          _classCallCheck(this, TransactionFormComponent);

          this.cas = cas;
          this.dialogRef = dialogRef;
          this.data = {
            contract: 'eosio.token',
            selectedAction: {
              "name": "action",
              "base": "",
              "fields": [{
                "name": "account",
                "type": "name"
              }, {
                "name": "name",
                "type": "name"
              }, {
                "name": "authorization",
                "type": "permission_level[]"
              }, {
                "name": "data",
                "type": "bytes"
              }]
            },
            actions: [],
            structs: []
          };
        }

        _createClass(TransactionFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.cas.getContractActionsList({
              account_name: this.data.contract
            }).subscribe(function (actions) {
              _this.data.actions = actions.abi.actions;
              _this.data.structs = actions.abi.structs;
              _this.data.selectedAction = actions.abi.actions[0];
            });
          }
        }, {
          key: "onContractChange",
          value: function onContractChange(event) {
            var _this2 = this;

            this.cas.getContractActionsList({
              account_name: this.data.contract
            }).subscribe(function (actions) {
              if (actions.abi.structs.length > 0) {
                _this2.data.actions = actions.abi.actions;
                _this2.data.structs = actions.abi.structs;
                _this2.data.selectedAction = actions.abi.actions[0];
              } else {
                _this2.data.actions = [];
              }
            }, function () {});
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
              return ctx.data.contract = $event;
            })("focusout", function TransactionFormComponent_Template_input_focusout_6_listener($event) {
              return ctx.onContractChange($event);
            })("keyup.enter", function TransactionFormComponent_Template_input_keyup_enter_6_listener($event) {
              return ctx.onContractChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Action name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionFormComponent_Template_mat_select_ngModelChange_10_listener($event) {
              return ctx.data.selectedAction = $event;
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.contract);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.selectedAction);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.actions);

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


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_dynamic_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../components/dynamic.form.component/dynamic.form.component */
      "YCt8");

      function AppComponent_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.contract.changeApi("EOS");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "EOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_button_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_10_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.contract.changeApi("WAX");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "WAX");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.contract.changeApi("JUNGLE3");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "JUNGLE3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_button_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_12_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.contract.changeApi("PROTON");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "PROTON");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.contract.changeApi("TELOS");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "TELOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_button_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "FIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_button_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r20.contract.changeApi("BOS");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "BOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_a_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_16_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.loginEOSService.openPopup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_a_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_17_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r24.loginEOSService.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.account_name);
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
        decls: 20,
        vars: 11,
        consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "below"], ["belowMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["disabled", "", "mat-menu-item", "", 4, "ngIf"], [3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["disabled", "", "mat-menu-item", ""], [3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login-eos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MSIG.CRYPTOLIONS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_button_9_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_button_10_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_button_11_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_button_12_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_button_13_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_button_14_Template, 2, 0, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_button_15_Template, 2, 0, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_a_16_Template, 2, 0, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_a_17_Template, 4, 1, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "main");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-dynamic-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Chain ", ctx.contract.getApiIndex(), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== ":: EOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== ":: WAX");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== ":: JUNGLE3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== ":: PROTON");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== ":: TELOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== ":: FIO");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== ":: BOS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginEOSService.connected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginEOSService.connected);
          }
        },
        directives: [_cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_2__["LoginEOSComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_dynamic_form_component_dynamic_form_component__WEBPACK_IMPORTED_MODULE_6__["DynamicFormComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]],
        styles: ["header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 70vw 10vw 20vw;\n  align-items: center;\n  width: 100vw;\n  height: 10vh;\n  background: #CBA6FB;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  justify-self: center;\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 2vw;\n}\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nmain[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 90vh;\n  display: grid;\n  justify-items: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aWV3L3JvdXRlcy9jb3JlLnJvdXRlL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFKO0FBQ0k7RUFDSSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3ZpZXcvcm91dGVzL2NvcmUucm91dGUvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaGVhZGVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3MHZ3IDEwdncgMjB2dztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBiYWNrZ3JvdW5kOiAjQ0JBNkZCO1xuICAgIHNwYW57XG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICBncmlkLWdhcDogMnZ3O1xuICAgIH1cbiAgICBhe1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxubWFpbntcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA5MHZoO1xuXG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"]
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


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_1_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13);

            var field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            return field_r7.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, field_r7.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", field_r7.type);
        }
      }

      function DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_2_Template_input_focusout_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var i1_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r15.onFromChange(field_r7.type, i1_r4);
          })("ngModelChange", function DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_2_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

            var field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            return field_r7.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, field_r7.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", field_r7.type);
        }
      }

      function DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("focusout", function DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_3_Template_input_focusout_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var i1_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r22.onFromChange(field_r7.type, i1_r4);
          })("keyup.enter", function DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_3_Template_input_keyup_enter_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            var i1_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r26.onFromChange(field_r7.type, i1_r4);
          })("ngModelChange", function DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_3_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            return field_r7.type = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, field_r7.name));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", field_r7.type);
        }
      }

      function DynamicFormComponent_mat_card_content_29_div_1_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_1_Template, 5, 4, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_2_Template, 5, 4, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DynamicFormComponent_mat_card_content_29_div_1_div_5_mat_form_field_3_Template, 5, 4, "mat-form-field", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var field_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", field_r7.name !== "from" && field_r7.name !== "abi" && field_r7.name !== "wasm");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", field_r7.name === "from");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", field_r7.name === "abi" || field_r7.name === "wasm");
        }
      }

      function DynamicFormComponent_mat_card_content_29_div_1_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_mat_card_content_29_div_1_div_10_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

            var i_r33 = ctx.index;

            var t1_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            return t1_r3.authorizations[i_r33].name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " @ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "account");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_mat_card_content_29_div_1_div_10_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

            var i_r33 = ctx.index;

            var t1_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

            return t1_r3.authorizations[i_r33].permission = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_mat_card_content_29_div_1_div_10_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

            var i_r33 = ctx.index;

            var i1_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r39.removeAuthorization(i1_r4, i_r33);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "remove_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r33 = ctx.index;

          var t1_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", t1_r3.authorizations[i_r33].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", t1_r3.authorizations[i_r33].permission);
        }
      }

      function DynamicFormComponent_mat_card_content_29_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DynamicFormComponent_mat_card_content_29_div_1_div_5_Template, 4, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Authorizations");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-card-content", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DynamicFormComponent_mat_card_content_29_div_1_div_10_Template, 13, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_mat_card_content_29_div_1_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43);

            var i1_r4 = ctx.index;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r42.addAuthorization(i1_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var t1_r3 = ctx.$implicit;
          var i1_r4 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", t1_r3.contractName, "::", t1_r3.selectedAction.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.actionStructure(t1_r3.selectedAction.name, i1_r4).fields);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", t1_r3.authorizations);
        }
      }

      function DynamicFormComponent_mat_card_content_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DynamicFormComponent_mat_card_content_29_div_1_Template, 13, 4, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.t.body);
        }
      }

      function DynamicFormComponent_div_39_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "from");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_39_div_1_Template_input_ngModelChange_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51);

            var i1_r49 = ctx.index;

            var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r50.t.authorizationAlly[i_r45].accounts[i1_r49].name = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " @ ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "permission");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_div_39_div_1_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51);

            var i1_r49 = ctx.index;

            var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r53.t.authorizationAlly[i_r45].accounts[i1_r49].permission = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_div_39_div_1_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51);

            var i1_r49 = ctx.index;

            var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r55.removeAuthorizationAlly(i_r45, i1_r49);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "remove_circle_outline");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i1_r49 = ctx.index;

          var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r46.t.authorizationAlly[i_r45].accounts[i1_r49].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r46.t.authorizationAlly[i_r45].accounts[i1_r49].permission);
        }
      }

      function DynamicFormComponent_div_39_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_div_39_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r60);

            var i_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r58.addAuthorizationAlly(i_r45);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function DynamicFormComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DynamicFormComponent_div_39_div_1_Template, 13, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DynamicFormComponent_div_39_button_2_Template, 2, 0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r44 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", a_r44.accounts);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", a_r44.accounts.length > 0);
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
          key: "ngOnInit",
          value: function ngOnInit() {
            this.reChoiseTransaction();
          }
        }, {
          key: "reChoiseTransaction",
          value: function reChoiseTransaction() {
            var _this4 = this;

            this.t = {
              account: '',
              name: '',
              expiration: '',
              body: [],
              authorizationAlly: [{
                accounts: []
              }]
            };
            this.dialog.open(_transaction_form_component_copy_transaction_form_component__WEBPACK_IMPORTED_MODULE_2__["TransactionFormComponent"], {
              width: '250px'
            }).afterClosed().subscribe(function (result) {
              _this4.contract.getFromJsonTemplate().subscribe(function (j) {
                if (j.find(function (s) {
                  return s.name === result.selectedAction.name;
                })) {
                  _this4.t.body.push({
                    contractName: result.contract,
                    selectedAction: j.find(function (s) {
                      return s.name === result.selectedAction.name;
                    }),
                    actions: result.actions,
                    structs: result.structs,
                    authorizations: [{
                      name: 'from',
                      permission: 'active'
                    }]
                  });
                } else {
                  _this4.t.body.push({
                    contractName: result.contract,
                    selectedAction: result.selectedAction,
                    actions: result.actions,
                    structs: result.structs,
                    authorizations: [{
                      name: 'from',
                      permission: 'active'
                    }]
                  });
                }
              });
            });
          }
        }, {
          key: "actionStructure",
          value: function actionStructure(name, tId) {
            return this.t.body[tId].structs.find(function (item) {
              return item.name === name;
            });
          }
        }, {
          key: "import",
          value: function _import() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.json.importObjectFromJson(function (e) {
                        var reader = new FileReader();

                        reader.onload = function (e2) {
                          var obj = JSON.parse(e2.target.result.toString());
                          _this5.t = obj.t;

                          _this5.contract.changeApi(obj.a);
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
          key: "addAuthorization",
          value: function addAuthorization(tId) {
            console.log(this.t);
            this.t.body[tId].authorizations.push({
              name: 'from',
              permission: 'active'
            });
          }
        }, {
          key: "removeAuthorization",
          value: function removeAuthorization(tId, i) {
            this.t.body[tId].authorizations = this.t.body[tId].authorizations.filter(function (x, y) {
              return y !== i;
            });
          }
        }, {
          key: "removeAuthorizationAlly",
          value: function removeAuthorizationAlly(tId, i) {
            this.t.authorizationAlly[tId].accounts = this.t.authorizationAlly[tId].accounts.filter(function (x, y) {
              return y !== i;
            });
          }
        }, {
          key: "addAuthorizationAlly",
          value: function addAuthorizationAlly(tId) {
            this.t.authorizationAlly[tId].accounts.push({
              name: 'from',
              permission: 'active'
            });
          }
        }, {
          key: "onFromChange",
          value: function onFromChange(from, tId) {
            var _this6 = this;

            this.contract.getProducersTEST(from).subscribe(function (info) {
              var oldLength = _this6.t.authorizationAlly[tId].accounts.length;
              info.permissions.forEach(function (p) {
                if (p.auth.accounts.length > 0) {
                  p.auth.accounts.forEach(function (a) {
                    if (_this6.t.authorizationAlly[tId].accounts.filter(function (l) {
                      return l.name === a.actor && l.permission === a.permission;
                    }).length === 0) {
                      _this6.t.authorizationAlly[tId].accounts.push({
                        name: a.actor,
                        permission: a.permission
                      });
                    }
                  });
                }
              });

              if (oldLength === _this6.t.authorizationAlly[tId].accounts.length) {
                _this6.t.authorizationAlly[tId].accounts = [];
              }
            });
          }
        }, {
          key: "addTransaction",
          value: function addTransaction() {
            var _this7 = this;

            this.dialog.open(_transaction_form_component_copy_transaction_form_component__WEBPACK_IMPORTED_MODULE_2__["TransactionFormComponent"], {
              width: '250px'
            }).afterClosed().subscribe(function (result) {
              _this7.contract.getFromJsonTemplate().subscribe(function (j) {
                if (j.find(function (s) {
                  return s.name === result.selectedAction.name;
                })) {
                  _this7.t.body.push({
                    contractName: result.contract,
                    selectedAction: j.find(function (s) {
                      return s.name === result.selectedAction.name;
                    }),
                    actions: result.actions,
                    structs: result.structs,
                    authorizations: [{
                      name: 'from',
                      permission: 'active'
                    }]
                  });
                } else {
                  _this7.t.body.push({
                    contractName: result.contract,
                    selectedAction: result.selectedAction,
                    actions: result.actions,
                    structs: result.structs,
                    authorizations: [{
                      name: 'from',
                      permission: 'active'
                    }]
                  });
                }
              });
            });
            this.t.authorizationAlly.push({
              accounts: []
            });
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
        decls: 40,
        vars: 5,
        consts: [[1, "parent"], ["side", "end"], [2, "margin-left", "12vw"], ["mat-icon-button", "", 2, "background-color", "white", "color", "black", 3, "click"], ["aria-label", "export json"], ["aria-label", "import json"], [1, "parent", 2, "overflow", "auto"], ["appearance", "fill", 2, "width", "100%"], ["required", "", "matInput", "", 3, "ngModel", "ngModelChange"], ["class", "parent", 4, "ngIf"], ["mat-button", "", 3, "click"], [4, "ngFor", "ngForOf"], [1, "child"], [1, "child-content"], [1, "child-component", 2, "overflow", "auto"], ["appearance", "fill", 4, "ngIf"], ["appearance", "fill"], ["required", "", "matInput", "", 3, "ngModel", "focusout", "ngModelChange"], ["required", "", "matInput", "", "type", "file", 3, "ngModel", "focusout", "keyup.enter", "ngModelChange"], ["mat-button", "", 3, "click", 4, "ngIf"]],
        template: function DynamicFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card-title", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "1. CREATE NEW MSIG");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_5_listener() {
              return ctx["import"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "file_download");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_8_listener() {
              return ctx["export"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "file_upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "MSIG proposer account: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.t.account = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "MSIG proposal name: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.t.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "MSIG expiration: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.t.expiration = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "1. Add Transaction(s)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, DynamicFormComponent_mat_card_content_29_Template, 2, 1, "mat-card-content", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-card-actions");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_31_listener() {
              return ctx.reChoiseTransaction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "CLEAR");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_33_listener() {
              return ctx.addTransaction();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "ADD");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "2. MSIG Authorizations");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-card-content", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, DynamicFormComponent_div_39_Template, 3, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.t.account);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.t.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.t.expiration);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.t.body.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.t.authorizationAlly);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["TitleCasePipe"]],
        styles: ["mat-card.parent[_ngcontent-%COMP%] {\n  width: 80vh;\n  overflow: auto;\n}\nmat-card.parent[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n}\nmat-card.child[_ngcontent-%COMP%] {\n  width: auto;\n  height: auto;\n}\nmat-card.child[_ngcontent-%COMP%]   mat-card-content.child-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 5vh;\n  grid-auto-rows: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aWV3L2NvbXBvbmVudHMvZHluYW1pYy5mb3JtLmNvbXBvbmVudC9keW5hbWljLmZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtBQUNKO0FBQUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFFUjtBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFSjtBQURJO0VBQ0ksYUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBR1IiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3ZpZXcvY29tcG9uZW50cy9keW5hbWljLmZvcm0uY29tcG9uZW50L2R5bmFtaWMuZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkLnBhcmVudHtcbiAgICB3aWR0aDogODB2aDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXQtY2FyZC1oZWFkZXJ7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgfVxufVxubWF0LWNhcmQuY2hpbGR7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hdC1jYXJkLWNvbnRlbnQuY2hpbGQtY29udGVudHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gICAgICAgIGdyaWQtZ2FwOiA1dmg7XG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICAgIH1cbn0iXX0= */"]
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
        PROTON: 'https://proton.greymass.com',
        TELOS: 'https://telos.greymass.com',
        JUNGLE3: 'https://api.jungle3.alohaeos.com',
        FIO: 'https://fio.greymass.com',
        BOS: 'https://api.bossweden.org',
        TEST: 'https://api.light.xeos.me'
      };

      var ContractApiService = /*#__PURE__*/function () {
        function ContractApiService(http) {
          _classCallCheck(this, ContractApiService);

          this.http = http;
          this.apiIndex = 'EOS';
        }

        _createClass(ContractApiService, [{
          key: "getApiIndex",
          value: function getApiIndex() {
            return ":: ".concat(this.apiIndex);
          }
        }, {
          key: "changeApi",
          value: function changeApi(newApi) {
            this.apiIndex = newApi;
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
          value: function getProducers(body) {
            return this.http.post("".concat(API[this.apiIndex], "/v1/chain/get_producers"), body);
          }
        }, {
          key: "getProducersTEST",
          value: function getProducersTEST(from) {
            return this.http.get("".concat(API['TEST'], "/api/accinfo/eos/") + from);
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
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
            var downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", exportName + ".json");
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