(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jupiter/Work/msyg/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1Ukd":
/*!*****************************************************************************!*\
  !*** ./src/app/core/view/components/dynamic.form/dynamic.form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dynamic_form_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/dynamic-form.main.service */ "m/QC");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _components_action_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/action/action.component */ "8PAZ");
/* harmony import */ var _components_account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/account/account.component */ "4wfq");










function DynamicFormComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-action", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("action", action_r3);
} }
function DynamicFormComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.dynamicFormMainService.clearSession(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CLEAR");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DynamicFormComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-account", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("account", account_r6);
} }
class DynamicFormComponent {
    constructor(dynamicFormMainService) {
        this.dynamicFormMainService = dynamicFormMainService;
    }
    ngOnInit() {
        this.dynamicFormMainService.clearSession();
    }
}
DynamicFormComponent.ɵfac = function DynamicFormComponent_Factory(t) { return new (t || DynamicFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dynamic_form_main_service__WEBPACK_IMPORTED_MODULE_1__["DynamicFormMainService"])); };
DynamicFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DynamicFormComponent, selectors: [["app-dynamic-form"]], decls: 51, vars: 8, consts: [[1, "parent-main"], [1, "main"], [1, "h2"], [1, "main-icons"], ["mat-icon-button", "", 2, "background-color", "white", "color", "black", 3, "click"], ["width", "40", "height", "40", "viewBox", "0 0 40 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M38.7447 8.74473L31.2553 1.25527C30.4515 0.451539 29.3615 5.94354e-06 28.2248 0H4.28571C1.91875 0 0 1.91875 0 4.28571V35.7143C0 38.0812 1.91875 40 4.28571 40H35.7143C38.0812 40 40 38.0812 40 35.7143V11.7752C40 10.6385 39.5485 9.54845 38.7447 8.74473ZM20 34.2857C16.8441 34.2857 14.2857 31.7273 14.2857 28.5714C14.2857 25.4155 16.8441 22.8571 20 22.8571C23.1559 22.8571 25.7143 25.4155 25.7143 28.5714C25.7143 31.7273 23.1559 34.2857 20 34.2857ZM28.5714 7.09643V16.0714C28.5714 16.6631 28.0917 17.1429 27.5 17.1429H6.78571C6.19402 17.1429 5.71429 16.6631 5.71429 16.0714V6.78571C5.71429 6.19402 6.19402 5.71429 6.78571 5.71429H27.1893C27.4735 5.71429 27.746 5.82714 27.9469 6.02813L28.2576 6.33884C28.3571 6.43831 28.436 6.55642 28.4899 6.68641C28.5437 6.8164 28.5714 6.95573 28.5714 7.09643Z", "fill", "black"], ["width", "44", "height", "44", "viewBox", "0 0 44 44", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M25.4375 32.9984H18.5625C17.4195 32.9984 16.5 32.0787 16.5 30.9356V16.496H8.96328C7.43359 16.496 6.66875 14.648 7.75156 13.5651L20.8227 0.483469C21.4672 -0.161156 22.5242 -0.161156 23.1688 0.483469L36.2484 13.5651C37.3312 14.648 36.5664 16.496 35.0367 16.496H27.5V30.9356C27.5 32.0787 26.5805 32.9984 25.4375 32.9984ZM44 32.3108V41.9372C44 43.0803 43.0805 44 41.9375 44H2.0625C0.919531 44 0 43.0803 0 41.9372V32.3108C0 31.1677 0.919531 30.248 2.0625 30.248H13.75V30.9356C13.75 33.5914 15.907 35.7488 18.5625 35.7488H25.4375C28.093 35.7488 30.25 33.5914 30.25 30.9356V30.248H41.9375C43.0805 30.248 44 31.1677 44 32.3108ZM33.3438 39.8744C33.3438 38.9289 32.5703 38.1554 31.625 38.1554C30.6797 38.1554 29.9062 38.9289 29.9062 39.8744C29.9062 40.8198 30.6797 41.5934 31.625 41.5934C32.5703 41.5934 33.3438 40.8198 33.3438 39.8744ZM38.8438 39.8744C38.8438 38.9289 38.0703 38.1554 37.125 38.1554C36.1797 38.1554 35.4062 38.9289 35.4062 39.8744C35.4062 40.8198 36.1797 41.5934 37.125 41.5934C38.0703 41.5934 38.8438 40.8198 38.8438 39.8744Z", "fill", "black"], [1, "parent", 2, "overflow", "auto"], ["appearance", "fill", 1, "field", 2, "width", "100%"], ["required", "", "matInput", "", "readonly", "", 3, "ngModel", "value", "ngModelChange"], ["required", "", "matInput", "", 3, "ngModel", "ngModelChange"], ["required", "", "matInput", "", "placeholder", "in days", 3, "ngModel", "ngModelChange"], [1, "parent-trans"], [1, "h3"], ["style", "padding-bottom: 15px;", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], [1, "parent-auths"], [1, "example-section"], [3, "change"], [3, "disabled", "change"], ["checked", "true", "disabled", "true"], [1, "parent-auths-content", 2, "overflow", "auto"], ["class", "producers", 4, "ngFor", "ngForOf"], [2, "width", "100px", "height", "20px", 3, "click"], [2, "padding-bottom", "15px"], [3, "action"], [1, "producers"], [3, "account"]], template: function DynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CREATE NEW MSIG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_5_listener() { return ctx.dynamicFormMainService.importSessionFromJsonFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_8_listener() { return ctx.dynamicFormMainService.exportSessionOnJsonFile; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "MSIG proposer account: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_Template_input_ngModelChange_15_listener($event) { return ctx.dynamicFormMainService.getSessionOwnerInfo().account = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "MSIG proposal name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_Template_input_ngModelChange_20_listener($event) { return ctx.dynamicFormMainService.getSessionOwnerInfo().name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "MSIG expiration: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DynamicFormComponent_Template_input_ngModelChange_25_listener($event) { return ctx.dynamicFormMainService.getSessionOwnerInfo().expiration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "1. Add Transaction(s)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DynamicFormComponent_div_29_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DynamicFormComponent_button_31_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_32_listener() { return ctx.dynamicFormMainService.addingNewActionToSession(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2. MSIG Authorizations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DynamicFormComponent_Template_mat_checkbox_change_38_listener() { return ctx.dynamicFormMainService.addTopSessionProducers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Top 30 Block Producers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-checkbox", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DynamicFormComponent_Template_mat_checkbox_change_40_listener() { return ctx.dynamicFormMainService.addProtonSessionProducers(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Proton Committee (proton chain only)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-checkbox", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Smart detection & Manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DynamicFormComponent_div_45_Template, 2, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "3. Check and propose");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DynamicFormComponent_Template_button_click_49_listener() { return ctx.dynamicFormMainService.proposeSessionActions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "PROPOSE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dynamicFormMainService.getSessionOwnerInfo().account)("value", ctx.dynamicFormMainService.getSessionOwnerInfo().account);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dynamicFormMainService.getSessionOwnerInfo().name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.dynamicFormMainService.getSessionOwnerInfo().expiration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dynamicFormMainService.getSessionActions());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dynamicFormMainService.getSessionActions().length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.dynamicFormMainService.getSessionOwnerInfo().chain != "PROTON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dynamicFormMainService.getSessionProducers());
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckbox"], _components_action_action_component__WEBPACK_IMPORTED_MODULE_7__["ActionComponent"], _components_account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"]], styles: ["[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: Comfortaa;\n  display: grid;\n  justify-self: center;\n}\n\n.parent-main[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  margin-bottom: 100px;\n}\n\n.parent-main[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 4vw;\n  margin-bottom: 100px;\n}\n\n.parent-main[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   span.h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 64px;\n  line-height: 71px;\n}\n\n.parent-main[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   div.main-icons[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 2vw;\n}\n\n.parent-trans[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.parent-trans[_ngcontent-%COMP%]   span.h3[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 54px;\n  margin-bottom: 20px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-header[_ngcontent-%COMP%] {\n  display: grid;\n  font-family: Roboto;\n  grid-auto-flow: column;\n  justify-items: center;\n  align-items: center;\n  grid-gap: 5px;\n  margin-bottom: 10px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-header[_ngcontent-%COMP%]   .trans-name[_ngcontent-%COMP%] {\n  width: 40vw;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  background: #c4c4c4;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-header[_ngcontent-%COMP%]   .a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 28px;\n  color: #ff0000;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%] {\n  width: 40vw;\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 14px;\n  margin-top: 17px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 28px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   div.content[_ngcontent-%COMP%] {\n  background: #c4c4c4;\n  width: 40vw;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-auth[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-auth__separator[_ngcontent-%COMP%] {\n  height: 3vw;\n  margin-top: 10px;\n  display: flex;\n  align-items: center;\n  background-color: white;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  font-size: 1vw;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-auth__btn[_ngcontent-%COMP%] {\n  width: 2vw;\n  height: 0.8vw;\n  background-color: red;\n  border-radius: 0 !important;\n  margin: 2vw 1.3vw;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-auth__wrapper[_ngcontent-%COMP%] {\n  width: 29vw !important;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  margin: 10px 0;\n  grid-gap: 2vw;\n  margin-bottom: 10px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16x;\n  line-height: 28px;\n  justify-self: center;\n  width: 10vw;\n  height: 4vh;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 25vw;\n  height: 2vh;\n  padding: 10px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: white;\n  border: black 1px solid;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  height: 6vh;\n  padding: 10px;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field__select[_ngcontent-%COMP%]:not(.trans-field__select-right), .parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field__select-right[_ngcontent-%COMP%] {\n  width: 9vw !important;\n  height: 3vw !important;\n  font-size: 1.3vw;\n  line-height: 1.6vw;\n  font-weight: bold;\n  padding: 6px 0 7px 0;\n  font-family: \"Roboto\";\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: 1px;\n  text-overflow: \"\";\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field__select[_ngcontent-%COMP%]:not(.trans-field__select-right) {\n  text-align: right;\n  border-right: none !important;\n}\n\n.parent-trans[_ngcontent-%COMP%]   .trans-content[_ngcontent-%COMP%]   .trans-field__select-right[_ngcontent-%COMP%] {\n  border-left: none !important;\n}\n\n.parent-auths[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.parent-auths[_ngcontent-%COMP%]   span.h3[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 54px;\n}\n\n.parent-auths[_ngcontent-%COMP%]   .parent-auths-content[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.parent-auths[_ngcontent-%COMP%]   .parent-auths-content[_ngcontent-%COMP%]   .producers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n}\n\ndiv.field[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 2vw;\n  margin-bottom: 10px;\n}\n\ndiv.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  justify-self: center;\n  width: 10vw;\n  height: 4vh;\n}\n\ndiv.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 25vw;\n  height: 4vh;\n  background: #c4c4c4;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aWV3L2NvbXBvbmVudHMvZHluYW1pYy5mb3JtL2R5bmFtaWMuZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBRUo7O0FBREk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUFHUjs7QUFGUTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUlaOztBQUZRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUlaOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFGSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUlSOztBQUZJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQWVBLG1CQUFBO0FBVlI7O0FBSlE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU1aOztBQUpRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQU1aOztBQUZJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUlSOztBQUhRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBS1o7O0FBSFE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUFLWjs7QUFIUTtFQUNJLGFBQUE7QUFLWjs7QUFKWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUFNaEI7O0FBSlk7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQU1oQjs7QUFKWTtFQUNJLHNCQUFBO0FBTWhCOztBQUhRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUE0Q0EsbUJBQUE7QUF0Q1o7O0FBTFk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFPaEI7O0FBTFk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFPaEI7O0FBTFk7O0VBRUksaUJBQUE7RUFDQSx1QkFBQTtBQU9oQjs7QUFMWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBT2hCOztBQUxZO0VBRUkscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQU1oQjs7QUFKWTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7QUFNaEI7O0FBSlk7RUFDSSw0QkFBQTtBQU1oQjs7QUFBQTtFQUNJLGtCQUFBO0FBR0o7O0FBRkk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBSVI7O0FBRkk7RUFDSSxhQUFBO0FBSVI7O0FBSFE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFLWjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFZQSxtQkFBQTtBQVBKOztBQUpJO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQU1SOztBQUpJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFNUiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvdmlldy9jb21wb25lbnRzL2R5bmFtaWMuZm9ybS9keW5hbWljLmZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCAqIHtcbiAgICBmb250LWZhbWlseTogQ29tZm9ydGFhO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG4ucGFyZW50LW1haW4ge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIC5tYWluIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgICAgZ3JpZC1nYXA6IDR2dztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgIHNwYW4uaDIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDY0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNzFweDtcbiAgICAgICAgfVxuICAgICAgICBkaXYubWFpbi1pY29ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAydnc7XG4gICAgICAgIH1cbiAgICB9XG59XG4ucGFyZW50LXRyYW5zIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgc3Bhbi5oMyB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC50cmFucy1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdyaWQtZ2FwOiA1cHg7XG4gICAgICAgIC50cmFucy1uYW1lIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjNGM0YzQ7XG4gICAgICAgIH1cbiAgICAgICAgLmEge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmYwMDAwO1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC50cmFucy1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDQwdnc7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgICAgIGdyaWQtZ2FwOiAxNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICB9XG4gICAgICAgIGRpdi5jb250ZW50IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNjNGM0YzQ7XG4gICAgICAgICAgICB3aWR0aDogNDB2dztcbiAgICAgICAgfVxuICAgICAgICAudHJhbnMtYXV0aCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgJl9fc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDN2dztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJl9fYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMnZ3O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMC44dnc7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJ2dyAxLjN2dztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX3dyYXBwZXIge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyOXZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRyYW5zLWZpZWxkIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICBncmlkLWdhcDogMnZ3O1xuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZ4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNXZ3O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMnZoO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCxcbiAgICAgICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiBibGFjayAxcHggc29saWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2dmg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX3NlbGVjdDpub3QoLnRyYW5zLWZpZWxkX19zZWxlY3QtcmlnaHQpLFxuICAgICAgICAgICAgJl9fc2VsZWN0LXJpZ2h0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOXZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzdncgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuM3Z3O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjZ2dztcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHggMCA3cHggMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAxcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX3NlbGVjdDpub3QoLnRyYW5zLWZpZWxkX19zZWxlY3QtcmlnaHQpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZfX3NlbGVjdC1yaWdodCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ucGFyZW50LWF1dGhzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgc3Bhbi5oMyB7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDU0cHg7XG4gICAgfVxuICAgIC5wYXJlbnQtYXV0aHMtY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIC5wcm9kdWNlcnMge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAgICAgIH1cbiAgICB9XG59XG5kaXYuZmllbGQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgICBncmlkLWdhcDogMnZ3O1xuICAgIGxhYmVsIHtcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMHZ3O1xuICAgICAgICBoZWlnaHQ6IDR2aDtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMjV2dztcbiAgICAgICAgaGVpZ2h0OiA0dmg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNjNGM0YzQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dynamic-form',
                templateUrl: './dynamic.form.component.html',
                styleUrls: ['./dynamic.form.component.scss']
            }]
    }], function () { return [{ type: _services_dynamic_form_main_service__WEBPACK_IMPORTED_MODULE_1__["DynamicFormMainService"] }]; }, null); })();


/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4wfq":
/*!*******************************************************************************************!*\
  !*** ./src/app/core/view/components/dynamic.form/components/account/account.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




function AccountComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_div_0_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.account.actor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " @ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AccountComponent_div_0_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.account.permission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.account.actor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.account.permission);
} }
class AccountComponent {
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], inputs: { account: "account" }, decls: 1, vars: 1, consts: [["class", "account-main", 4, "ngIf"], [1, "account-main"], ["appearance", "fill"], ["required", "", "type", "text", "placeholder", "from", "readonly", "", 3, "ngModel", "ngModelChange"], ["required", "", "type", "text", "placeholder", "permission", "readonly", "", 3, "ngModel", "ngModelChange"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AccountComponent_div_0_Template, 6, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.account);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: [".account-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 1vw;\n  margin-bottom: 10px;\n}\n.account-main[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: solid 2px black;\n  width: 18vw;\n  height: 3vh;\n  padding: 10px;\n}\n.account-main[_ngcontent-%COMP%]   input[type=text].key[_ngcontent-%COMP%] {\n  width: 40vw;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aWV3L2NvbXBvbmVudHMvZHluYW1pYy5mb3JtL2NvbXBvbmVudHMvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQVlBLG1CQUFBO0FBVko7QUFESTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFHUjtBQURJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBR1IiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3ZpZXcvY29tcG9uZW50cy9keW5hbWljLmZvcm0vY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3VudC1tYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG4gICAgZ3JpZC1nYXA6IDF2dztcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJvcmRlcjogc29saWQgMnB4IGJsYWNrO1xuICAgICAgICB3aWR0aDogMTh2dztcbiAgICAgICAgaGVpZ2h0OiAzdmg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLmtleSB7XG4gICAgICAgIHdpZHRoOiA0MHZ3O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account',
                templateUrl: './account.component.html',
                styleUrls: ['./account.component.scss']
            }]
    }], null, { account: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 5:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 6:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 7:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 8:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "8PAZ":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/view/components/dynamic.form/components/action/action.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionComponent", function() { return ActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_dynamic_form_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/dynamic-form.main.service */ "m/QC");
/* harmony import */ var _services_accounts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/accounts.service */ "qrKc");
/* harmony import */ var src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/contact.services/contract.api.service */ "mzXJ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");











function ActionComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionComponent_div_13_div_2_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return field_r4.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", field_r4.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", field_r4.type)("ngModel", field_r4.value);
} }
function ActionComponent_div_13_div_3_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (+", field_r4.value.length - 1, " ", (field_r4.value == null ? null : field_r4.value.length) === 2 ? "other" : "others", ") ");
} }
function ActionComponent_div_13_div_3_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const producer_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", producer_r15.owner);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](producer_r15.owner);
} }
function ActionComponent_div_13_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionComponent_div_13_div_3_Template_mat_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return field_r4.value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ActionComponent_div_13_div_3_span_6_Template, 2, 2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ActionComponent_div_13_div_3_mat_option_7_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", field_r4.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", field_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", field_r4.value ? field_r4.value[0] : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (field_r4.value == null ? null : field_r4.value.length) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.producers);
} }
function ActionComponent_div_13_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ActionComponent_div_13_div_4_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.onFileSelected($event, ctx_r20.filed.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", field_r4.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", field_r4.type);
} }
function ActionComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActionComponent_div_13_div_2_Template, 4, 3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ActionComponent_div_13_div_3_Template, 8, 5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ActionComponent_div_13_div_4_Template, 4, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", field_r4.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "name[]");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "bytes");
} }
function ActionComponent_div_15_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionComponent_div_15_div_13_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const account_permiss_r24 = ctx.$implicit; return account_permiss_r24.actor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionComponent_div_15_div_13_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const account_permiss_r24 = ctx.$implicit; return account_permiss_r24.permission = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionComponent_div_15_div_13_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const account_permiss_r24 = ctx.$implicit; return account_permiss_r24.weight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionComponent_div_15_div_13_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r25 = ctx.index; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.removeUpdateAuthPermission(i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_permiss_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", account_permiss_r24.actor)("ngModel", account_permiss_r24.actor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", account_permiss_r24.permission)("ngModel", account_permiss_r24.permission);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", account_permiss_r24.weight)("ngModel", account_permiss_r24.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r23.action.action.updateauth.permiss.length == 1);
} }
function ActionComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "permiss");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ActionComponent_div_15_div_13_Template, 8, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionComponent_div_15_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.addUpdateAuthPermission(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.action.action.updateauth.permiss);
} }
function ActionComponent_div_16_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionComponent_div_16_div_10_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const account_key_r34 = ctx.$implicit; return account_key_r34.key = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionComponent_div_16_div_10_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const account_key_r34 = ctx.$implicit; return account_key_r34.weight = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionComponent_div_16_div_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const i_r35 = ctx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.removeUpdateAuthKey(i_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "x");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const account_key_r34 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", account_key_r34.key)("ngModel", account_key_r34.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", account_key_r34.weight)("ngModel", account_key_r34.weight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r33.action.action.updateauth.keys.length == 1);
} }
function ActionComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "| ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "weight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ActionComponent_div_16_div_10_Template, 7, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionComponent_div_16_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.addUpdateAuthKey(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.action.action.updateauth.keys);
} }
function ActionComponent_div_21_ng_container_5_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", value_r48.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", value_r48.value, " ");
} }
function ActionComponent_div_21_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActionComponent_div_21_ng_container_5_mat_option_1_Template, 2, 2, "mat-option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const value_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", value_r48.name == "owner" || value_r48.name == "from" || value_r48.name == "to" || value_r48.name == "account");
} }
function ActionComponent_div_21_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const perm_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", perm_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", perm_r51, " ");
} }
function ActionComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ActionComponent_div_21_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const auth_r42 = ctx.$implicit; const authIndex_r43 = ctx.index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.clearLocalAuth(auth_r42._name, ctx_r52.actionsIndex, authIndex_r43); })("ngModelChange", function ActionComponent_div_21_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const auth_r42 = ctx.$implicit; return auth_r42._name = $event; })("ngModelChange", function ActionComponent_div_21_Template_input_ngModelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const auth_r42 = ctx.$implicit; const authIndex_r43 = ctx.index; const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r55.clearLocalAuth(auth_r42._name, ctx_r55.actionsIndex, authIndex_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", null, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActionComponent_div_21_ng_container_5_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "@");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionComponent_div_21_Template_input_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const auth_r42 = ctx.$implicit; const authIndex_r43 = ctx.index; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r56.clearLocalAuth(auth_r42._name, ctx_r56.actionsIndex, authIndex_r43); })("ngModelChange", function ActionComponent_div_21_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const auth_r42 = ctx.$implicit; return auth_r42._perm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-autocomplete", null, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ActionComponent_div_21_mat_option_12_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionComponent_div_21_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const authIndex_r43 = ctx.index; const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r58.removeLocalAuth(ctx_r58.actionsIndex, authIndex_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " - ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const auth_r42 = ctx.$implicit;
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", auth_r42._name)("matAutocomplete", _r44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.action.action.fields);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", auth_r42._perm)("matAutocomplete", _r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", auth_r42.perms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.action.auths.length == 1);
} }
class ActionComponent {
    constructor(dynamicFormMainService, accountService, contractApiService) {
        this.dynamicFormMainService = dynamicFormMainService;
        this.accountService = accountService;
        this.contractApiService = contractApiService;
        this.producers = [];
    }
    ngOnInit() {
        if (this.action.action.name == 'voteproducer') {
            this.contractApiService.getTopProducers().subscribe((data) => {
                data.rows.forEach((r) => {
                    this.producers.push(r);
                });
            });
        }
    }
    addLocalAuth(tId) {
        if (this.dynamicFormMainService.getSessionActions()[tId].auths.length !== this.dynamicFormMainService.getSessionActions()[tId].action._fields.length)
            this.dynamicFormMainService.getSessionActions()[tId].auths.push({
                _name: '',
                _perm: '',
                perms: []
            });
    }
    removeLocalAuth(tId = 0, i) {
        this.dynamicFormMainService.setSessionProducers(this.dynamicFormMainService.getSessionProducers().filter((producer) => !(producer.config.actionIndex == tId && producer.config.authorizationIndex == i)));
        this.dynamicFormMainService.getSessionActions()[tId].auths = this.dynamicFormMainService.getSessionActions()[tId].auths.filter((auth, index) => index != i);
    }
    clearLocalAuth(value, tId, i) {
        // const globalIndex = this.t.auths.indexOf(this.t.auths.find((auth) => auth._name === value));
        // if (globalIndex >= 0) {
        //   this.t.auths = this.t.auths.filter((x, y) => y !== globalIndex);
        // }
        this.collectAllProducers();
    }
    removeLocalTransaction(tId) {
        this.dynamicFormMainService.setSessionActions(this.dynamicFormMainService.getSessionActions().filter((x, y) => y !== tId));
    }
    collectAllProducers() {
        const promisses = [];
        this.dynamicFormMainService.getSessionActions().forEach((tran, tranIndex) => {
            tran.action.fields.forEach((from) => {
                let finded = tran.auths.find((auth) => auth._name === from.value);
                if (finded) {
                    promisses.push(this.accountService.colectAndStabledProducers({ actor: from.value, permission: finded._perm === '' ? 'active' : finded._perm }, 0, 0).then((array) => {
                        let f = array.find((data) => data.config.deep == 1);
                        if (f) {
                            let d = tran.action.correctPermissions.find((p) => p.actor === f.actor);
                            if (!d) {
                                tran.action.correctPermissions.push(f);
                            }
                            else {
                                tran.action.correctPermissions[tran.action.correctPermissions.indexOf(d)].permission = f.permission;
                            }
                            finded.perms = f === null || f === void 0 ? void 0 : f.permissions;
                            finded._perm = finded._perm === '' ? finded.perms[0] : finded._perm;
                        }
                        const correctArray = [];
                        array.forEach((account) => {
                            if (array.filter((inner_account) => inner_account.config.father === account.actor).length === 0) {
                                correctArray.push(account);
                            }
                        });
                        return correctArray;
                    }));
                }
            });
        });
        Promise.all(promisses).then((array) => {
            this.dynamicFormMainService.setSessionProducers([]);
            if (array.length > 0) {
                array.forEach((a) => {
                    this.dynamicFormMainService.setSessionProducers(this.dynamicFormMainService.getSessionProducers().concat(a));
                });
            }
        });
    }
    onFileSelected(event, value) {
        if (event.target.files.length > 0 && this.action.action.name == 'setabi') {
            value = JSON.parse(event.target.files[0]);
        }
        else if (event.target.files.length > 0 && this.action.action.name == 'setcode') {
            value = (event.target.files[0]).toString('hex');
        }
        else if (event.target.files.length > 0) {
            value = JSON.parse(event.target.files[0]);
        }
    }
    addUpdateAuthKey() {
        this.action.action.updateauth.keys.push({
            key: '',
            weight: 1
        });
    }
    addUpdateAuthPermission() {
        this.action.action.updateauth.permiss.push({
            actor: '',
            permission: '',
            weight: 1
        });
    }
    removeUpdateAuthKey(index) {
        this.action.action.updateauth.keys = this.action.action.updateauth.keys.filter((value, _index) => _index != index);
    }
    removeUpdateAuthPermission(index) {
        this.action.action.updateauth.permiss = this.action.action.updateauth.permiss.filter((value, _index) => _index != index);
    }
}
ActionComponent.ɵfac = function ActionComponent_Factory(t) { return new (t || ActionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dynamic_form_main_service__WEBPACK_IMPORTED_MODULE_1__["DynamicFormMainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_3__["ContractApiService"])); };
ActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionComponent, selectors: [["app-action"]], inputs: { action: "action" }, decls: 26, vars: 6, consts: [[1, "actions-header"], ["width", "19", "height", "14", "viewBox", "0 0 19 14", "fill", "none"], ["d", "M14.63 0.84C14.27 0.33 13.67 0 13 0L2 0.0100002C0.9 0.0100002 0 0.9 0 2V12C0 13.1 0.9 13.99 2 13.99L13 14C13.67 14 14.27 13.67 14.63 13.16L19 7L14.63 0.84Z", "fill", "black"], [1, "actions-name"], [1, "a", "remove_button", 3, "click"], [1, "actions-content"], [1, "content"], [4, "ngFor", "ngForOf"], [1, "spacer"], ["class", "actions-content", 4, "ngIf"], [1, "actions-content", "auths"], [1, "content", "actions-auth__wrapper", 2, "overflow", "auto"], ["class", "actions-auth", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "add_button", 3, "click"], ["appearance", "fill", 1, "inner_content", 3, "ngSwitch"], ["class", "actions-field-data", 4, "ngSwitchDefault"], ["class", "actions-field-data", 4, "ngSwitchCase"], [1, "actions-field-data"], ["required", "", 3, "placeholder", "ngModel", "ngModelChange"], ["multiple", "", 2, "max-height", "40px !important", "height", "35px", "border", "2px #8f8f9d solid", "background-color", "white", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["required", "", "type", "file", 1, "file", 3, "placeholder", "change"], [1, "header_permiss"], ["appearance", "fill", 1, "inner_content"], [1, "actions-field-data", "updateauth_permiss"], ["mat-button", "", 1, "remove_button", 3, "disabled", "click"], [1, "header_keys"], [1, "actions-field-data", "updateauth_keys"], [1, "actions-auth"], ["appearance", "fill", 1, "actions-field"], ["required", "", 1, "actions-field__select", 3, "ngModel", "matAutocomplete", "ngModelChange"], ["account", "matAutocomplete"], [1, "actions-auth__separator"], ["requiredrequired", "", 1, "actions-field__select", "actions-field__select-right", 3, "ngModel", "matAutocomplete", "click", "ngModelChange"], ["perm", "matAutocomplete"], ["mat-icon-button", "", 1, "actions-auth__btn", "remove_button", 3, "disabled", "click"], [3, "value", 4, "ngIf"]], template: function ActionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionComponent_Template_span_click_7_listener() { return ctx.removeLocalTransaction(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " - Remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ActionComponent_div_13_Template, 5, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ActionComponent_div_15_Template, 17, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ActionComponent_div_16_Template, 14, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Authorizations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ActionComponent_div_21_Template, 15, 7, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActionComponent_Template_button_click_22_listener() { return ctx.addLocalAuth(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.action.name, "::", ctx.action.action.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.action.action.fields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action.action.name == "updateauth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.action.action.name == "updateauth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.action.auths);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectTrigger"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocomplete"]], styles: [".actions-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5% 75% 30%;\n  align-items: center;\n  font-size: 24px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-bottom: 2%;\n}\n.actions-header[_ngcontent-%COMP%]   .actions-name[_ngcontent-%COMP%] {\n  height: 42px;\n  background-color: #c4c4c4;\n  display: grid;\n  align-items: center;\n}\n.actions-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 20% 60% 30%;\n  font-size: 24px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  margin-bottom: 1%;\n}\n.actions-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n  background-color: #c4c4c4;\n  padding: 2.5%;\n}\n.actions-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions-field-data[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40% 60%;\n  margin-bottom: 2%;\n}\n.actions-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions-field-data[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.actions-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions-field-data[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 800;\n  text-indent: 5%;\n  text-align: left;\n}\n.actions-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .header_permiss[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 1% 31% 1% 30% 5%;\n  margin-bottom: 1%;\n}\n.actions-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .updateauth_permiss[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 29% 29% 29% 3%;\n  justify-items: center;\n  grid-gap: 3%;\n}\n.actions-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .updateauth_permiss[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.actions-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .header_keys[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 45% 1% 45% 3%;\n  margin-bottom: 1%;\n}\n.actions-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .updateauth_keys[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 44% 44% 5%;\n  justify-items: center;\n  grid-gap: 3%;\n}\n.actions-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .updateauth_keys[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.auths[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30% 50% 30%;\n  font-size: 24px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n}\n.auths[_ngcontent-%COMP%]   .actions-auth__wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: row;\n}\n.auths[_ngcontent-%COMP%]   .actions-auth__wrapper[_ngcontent-%COMP%]   .actions-auth[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n}\n.auths[_ngcontent-%COMP%]   .actions-auth__wrapper[_ngcontent-%COMP%]   .actions-auth[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.auths[_ngcontent-%COMP%]   .actions-auth__wrapper[_ngcontent-%COMP%]   .actions-auth[_ngcontent-%COMP%]   .actions-auth__btn[_ngcontent-%COMP%] {\n  font-size: large;\n  font-weight: 900;\n}\n.add_button[_ngcontent-%COMP%] {\n  color: green;\n}\n.remove_button[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aWV3L2NvbXBvbmVudHMvZHluYW1pYy5mb3JtL2NvbXBvbmVudHMvYWN0aW9uL2FjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdJQUFBO0VBUUEsaUJBQUE7QUFOSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRVI7QUFFQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esd0lBQUE7RUFpREEsaUJBQUE7QUEvQ0o7QUFBSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUVSO0FBRFE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFTQSxpQkFBQTtBQUxaO0FBSFk7RUFDSSxXQUFBO0FBS2hCO0FBSFk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUtoQjtBQURRO0VBQ0ksYUFBQTtFQUNBLDJDQUFBO0VBQ0EsaUJBQUE7QUFHWjtBQURRO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBR1o7QUFGWTtFQUNJLGtCQUFBO0FBSWhCO0FBRFE7RUFDSSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtBQUdaO0FBRFE7RUFDSSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUFHWjtBQUZZO0VBQ0ksa0JBQUE7QUFJaEI7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSx3SUFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUFRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBRVo7QUFEWTtFQUNJLFdBQUE7QUFHaEI7QUFEWTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHaEI7QUFFQTtFQUNJLFlBQUE7QUFDSjtBQUNBO0VBQ0ksVUFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29yZS92aWV3L2NvbXBvbmVudHMvZHluYW1pYy5mb3JtL2NvbXBvbmVudHMvYWN0aW9uL2FjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb25zLWhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUlIDc1JSAzMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsXG4gICAgICAgIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAuYWN0aW9ucy1uYW1lIHtcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRjNGM0O1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbn1cbi5hY3Rpb25zLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgNjAlIDMwJTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsXG4gICAgICAgIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGM0YzQ7XG4gICAgICAgIHBhZGRpbmc6IDIuNSU7XG4gICAgICAgIC5hY3Rpb25zLWZpZWxkLWRhdGEge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDAlIDYwJTtcbiAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiA1JTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlYWRlcl9wZXJtaXNzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSAxJSAzMSUgMSUgMzAlIDUlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XG4gICAgICAgIH1cbiAgICAgICAgLnVwZGF0ZWF1dGhfcGVybWlzcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyOSUgMjklIDI5JSAzJTtcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAzJTtcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaGVhZGVyX2tleXMge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDUlIDElIDQ1JSAzJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDElO1xuICAgICAgICB9XG4gICAgICAgIC51cGRhdGVhdXRoX2tleXMge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDQlIDQ0JSA1JTtcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAzJTtcbiAgICAgICAgICAgICoge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcbn1cbi5hdXRocyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwJSA1MCUgMzAlO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIixcbiAgICAgICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIC5hY3Rpb25zLWF1dGhfX3dyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLWF1dG8tZmxvdzogcm93O1xuICAgICAgICAuYWN0aW9ucy1hdXRoIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFjdGlvbnMtYXV0aF9fYnRuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uYWRkX2J1dHRvbiB7XG4gICAgY29sb3I6IGdyZWVuO1xufVxuLnJlbW92ZV9idXR0b24ge1xuICAgIGNvbG9yOiByZWQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action',
                templateUrl: './action.component.html',
                styleUrls: ['./action.component.scss']
            }]
    }], function () { return [{ type: _services_dynamic_form_main_service__WEBPACK_IMPORTED_MODULE_1__["DynamicFormMainService"] }, { type: _services_accounts_service__WEBPACK_IMPORTED_MODULE_2__["AccountsService"] }, { type: src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_3__["ContractApiService"] }]; }, { action: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
// const host  = 'wax-testnet.cryptolions.io';
// const chain = 'f16b1833c747c43682f4386fca9cbb327929334a762755ebec17f6f23c9b8a12';
const host = 'wax.cryptolions.io';
const chain = '1064487b3cd1a897ce03ae5b6a865651747e2e152090f99c1d19d44e01aea5a4';
const environment = {
    production: false,
    chainName: 'WAX',
    ulm: {
        appName: 'WAX SA TOOLS',
        httpEndpoint: `https://${host}`,
        chain,
        host,
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


/***/ }),

/***/ "DnCW":
/*!**************************************************************!*\
  !*** ./src/app/core/view/routes/core.route/app.component.ts ***!
  \**************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/contact.services/contract.api.service */ "mzXJ");
/* harmony import */ var _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cryptolions/ulm-eosio */ "S1Ef");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dynamic.form/dynamic.form.component */ "1Ukd");









function AppComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "WAX");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "EOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "JUNGLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PROTON");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "XEC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TELOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "FIO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.loginEOSService.openPopup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_a_19_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.loginEOSService.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_h4_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.loginEOSService.accountName);
} }
const _c0 = function (a0) { return { disabled: a0 }; };
class AppComponent {
    constructor(contract, loginEOSService, router) {
        this.contract = contract;
        this.loginEOSService = loginEOSService;
        this.router = router;
        this.account_name = '';
        loginEOSService.loggedIn.subscribe(res => {
            this.account_name = loginEOSService.accountName;
            this.contract.changeUserName(loginEOSService.accountName);
            // this.contract.changePublicKey(loginEOSService.accountInfo.publicKey);
        });
    }
    login() {
        console.log('g');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__["ContractApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_2__["LoginEOSService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 15, consts: [[1, "h1"], [1, "p"], ["mat-button", "", 1, "p", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 4, "ngIf"], [3, "click", 4, "ngIf"], [4, "ngIf"], [3, "ngClass"], ["mat-menu-item", ""], ["href", "http://wax.msig.dev.cryptolions.io"], ["href", "http://eos.msig.dev.cryptolions.io"], ["href", "http://jungle.msig.dev.cryptolions.io"], ["href", "http://proton.msig.dev.cryptolions.io"], ["href", "http://xec.msig.dev.cryptolions.io"], ["href", "http://telos.msig.dev.cryptolions.io"], ["href", "http://fio.msig.dev.cryptolions.io"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-login-eos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MSIG.CRYPTOLIONS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_button_10_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_button_11_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_button_12_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_button_13_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_button_14_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_button_15_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_button_16_Template, 3, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_a_18_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AppComponent_a_19_Template, 2, 0, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_h4_20_Template, 2, 1, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "main", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-dynamic-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contract.getApiIndex() ? ctx.contract.getApiIndex() : "CHAIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== "WAX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== "EOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== "JUNGLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== "PROTON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== "XEC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== "TELOS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contract.getApiIndex() !== "FIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginEOSService.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginEOSService.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginEOSService.connected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, !ctx.loginEOSService.connected));
    } }, directives: [_cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_2__["LoginEOSComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_7__["DynamicFormComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: ["header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30vw auto 10vw 10vw;\n  align-items: center;\n  justify-items: center;\n  width: 100vw;\n  height: 10vh;\n  background: #cba6fb;\n  font-family: Comfortaa, cursive;\n}\nheader[_ngcontent-%COMP%]   span.h1[_ngcontent-%COMP%] {\n  color: white;\n  -webkit-text-fill-color: #424242;\n  -webkit-text-stroke-width: 0.8px;\n  -webkit-text-stroke-color: white;\n  font-weight: bold;\n  font-size: 36px;\n  line-height: 40px;\n}\nheader[_ngcontent-%COMP%]   span.p[_ngcontent-%COMP%], header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 27px;\n}\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\nmain[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 90vh;\n}\nmain.disabled[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aWV3L3JvdXRlcy9jb3JlLnJvdXRlL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFDSjtBQUFJO0VBQ0ksWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTs7RUFFSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUNBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFFSjtBQUFBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUdKIiwiZmlsZSI6InNyYy9hcHAvY29yZS92aWV3L3JvdXRlcy9jb3JlLnJvdXRlL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwdncgYXV0byAxMHZ3IDEwdnc7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTB2aDtcbiAgICBiYWNrZ3JvdW5kOiAjY2JhNmZiO1xuICAgIGZvbnQtZmFtaWx5OiBDb21mb3J0YWEsIGN1cnNpdmU7XG4gICAgc3Bhbi5oMSB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICM0MjQyNDI7XG4gICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuOHB4O1xuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgfVxuICAgIHNwYW4ucCxcbiAgICBhIHtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICB9XG4gICAgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5tYWluIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA5MHZoO1xufVxubWFpbi5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__["ContractApiService"] }, { type: _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_2__["LoginEOSService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "IZum":
/*!*************************************************************************************!*\
  !*** ./src/app/core/view/components/transaction.form/transaction.form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TransactionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionFormComponent", function() { return TransactionFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/contact.services/contract.api.service */ "mzXJ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "FKr1");











function TransactionFormComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", act_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](act_r2.name + "::" + act_r2.action.name);
} }
function TransactionFormComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const act_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", act_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", act_r3, " ");
} }
class TransactionFormComponent {
    constructor(cas, dialogRef) {
        this.cas = cas;
        this.dialogRef = dialogRef;
        this.data = {
            name: 'eosio.token',
            action: {
                name: '',
                fields: [
                    {
                        name: '',
                        type: '',
                        value: ''
                    }
                ],
                _fields: []
            },
        };
        this._actions = [];
        this._json_actions = [];
    }
    viaContractApi(from) {
        this.cas.getContractActionsList({ account_name: this.data.name }).subscribe(from);
    }
    viaJson(after) {
        this.cas.getFromJsonTemplate().subscribe(after);
    }
    reBuildData() {
        this.viaContractApi((res) => {
            this._actions = res.abi.actions.map((a) => a.name);
            this.actions = res.abi.structs.map((s) => {
                return {
                    name: s.name,
                    fields: s.fields.map((f) => {
                        return {
                            name: f.name,
                            type: f.type,
                            value: f.type.includes('[]') ? [] : f.type
                        };
                    }),
                    _fields: s.fields.map((f) => f.name)
                };
            });
            this.data.action.name = this._actions[0];
            this.data.action.fields = this.actions.find((a) => a.name === this.data.action.name).fields;
            this.data.action._fields = this.actions.find((a) => a.name === this.data.action.name).fields.filter(f => { return f.type != 'bytes'; }).map(f => f.name);
        });
    }
    ngOnInit() {
        this.reBuildData();
        this.viaJson((arr) => {
            this._json_actions = arr;
        });
    }
    onActionChange() {
        this.data.action = this.actions.find((a) => a.name === this.data.action.name);
        this.data.action.fields = this.actions.find((a) => a.name === this.data.action.name).fields;
        this.data.action._fields = this.actions.find((a) => a.name === this.data.action.name).fields.filter(f => { return f.type != 'bytes'; }).map(f => f.name);
    }
    onContractChange() {
        this.reBuildData();
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
TransactionFormComponent.ɵfac = function TransactionFormComponent_Factory(t) { return new (t || TransactionFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__["ContractApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"])); };
TransactionFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionFormComponent, selectors: [["app-transaction-form"]], decls: 22, vars: 5, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "fill"], ["required", ""], [4, "ngFor", "ngForOf"], ["required", "", "matInput", "", 3, "ngModel", "ngModelChange", "focusout", "keyup.enter"], ["required", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-button", "", 3, "mat-dialog-close"], [3, "value"]], template: function TransactionFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Quickly actions:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TransactionFormComponent_mat_option_7_Template, 3, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contract name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionFormComponent_Template_input_ngModelChange_11_listener($event) { return ctx.data.name = $event; })("focusout", function TransactionFormComponent_Template_input_focusout_11_listener() { return ctx.onContractChange(); })("keyup.enter", function TransactionFormComponent_Template_input_keyup_enter_11_listener() { return ctx.onContractChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Action name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionFormComponent_Template_mat_select_ngModelChange_15_listener($event) { return ctx.data.action.name = $event; })("ngModelChange", function TransactionFormComponent_Template_mat_select_ngModelChange_15_listener() { return ctx.onActionChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TransactionFormComponent_mat_option_16_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransactionFormComponent_Template_button_click_18_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._json_actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.action.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: ["form[_ngcontent-%COMP%] {\n  background-color: #CCFFE0;\n  display: grid;\n  grid-auto-flow: row;\n  justify-items: center;\n  align-self: center;\n}\nform[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  background-color: #74A086;\n  width: 100%;\n}\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS92aWV3L2NvbXBvbmVudHMvdHJhbnNhY3Rpb24uZm9ybS90cmFuc2FjdGlvbi5mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQUNSO0FBRVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQVoiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3ZpZXcvY29tcG9uZW50cy90cmFuc2FjdGlvbi5mb3JtL3RyYW5zYWN0aW9uLmZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmZvcm17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0NDRkZFMDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXV0by1mbG93OiByb3c7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBoMntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc0QTA4NjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIGxhYmVse1xuICAgICAgICBzZWxlY3R7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction-form',
                templateUrl: './transaction.form.component.html',
                styleUrls: ['./transaction.form.component.scss']
            }]
    }], function () { return [{ type: _services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_1__["ContractApiService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "UeI+":
/*!********************************************!*\
  !*** ./src/app/core/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _core_app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/app-routing.module */ "UeI+");
/* harmony import */ var _core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/view/routes/core.route/app.component */ "DnCW");
/* harmony import */ var _core_view_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/view/components/dynamic.form/dynamic.form.component */ "1Ukd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/contact.services/contract.api.service */ "mzXJ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ "vrAh");
/* harmony import */ var _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @cryptolions/ulm-eosio */ "S1Ef");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core/services/json.services/json.service */ "tcm4");
/* harmony import */ var _core_view_components_transaction_form_transaction_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/view/components/transaction.form/transaction.form.component */ "IZum");
/* harmony import */ var _core_view_components_dynamic_form_components_account_account_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./core/view/components/dynamic.form/components/account/account.component */ "4wfq");
/* harmony import */ var _core_view_components_dynamic_form_components_action_action_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./core/view/components/dynamic.form/components/action/action.component */ "8PAZ");
/* harmony import */ var _core_view_components_dynamic_form_services_dynamic_form_main_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./core/view/components/dynamic.form/services/dynamic-form.main.service */ "m/QC");
/* harmony import */ var _core_view_components_dynamic_form_services_accounts_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./core/view/components/dynamic.form/services/accounts.service */ "qrKc");


































class AppModule {
    ngOnInit() {
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_6__["ContractApiService"], _core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_26__["JsonService"], _core_view_components_dynamic_form_services_dynamic_form_main_service__WEBPACK_IMPORTED_MODULE_30__["DynamicFormMainService"], _core_view_components_dynamic_form_services_accounts_service__WEBPACK_IMPORTED_MODULE_31__["AccountsService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _core_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_24__["LoginEOSModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].ulm),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _core_view_components_transaction_form_transaction_form_component__WEBPACK_IMPORTED_MODULE_27__["TransactionFormComponent"],
        _core_view_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"],
        _core_view_components_dynamic_form_components_account_account_component__WEBPACK_IMPORTED_MODULE_28__["AccountComponent"],
        _core_view_components_dynamic_form_components_action_action_component__WEBPACK_IMPORTED_MODULE_29__["ActionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _core_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_24__["LoginEOSModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _core_view_components_transaction_form_transaction_form_component__WEBPACK_IMPORTED_MODULE_27__["TransactionFormComponent"],
                    _core_view_components_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"],
                    _core_view_components_dynamic_form_components_account_account_component__WEBPACK_IMPORTED_MODULE_28__["AccountComponent"],
                    _core_view_components_dynamic_form_components_action_action_component__WEBPACK_IMPORTED_MODULE_29__["ActionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _core_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatCommonModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__["MatAutocompleteModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_24__["LoginEOSModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].ulm),
                ],
                providers: [_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_6__["ContractApiService"], _core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_26__["JsonService"], _core_view_components_dynamic_form_services_dynamic_form_main_service__WEBPACK_IMPORTED_MODULE_30__["DynamicFormMainService"], _core_view_components_dynamic_form_services_accounts_service__WEBPACK_IMPORTED_MODULE_31__["AccountsService"]],
                bootstrap: [_core_view_routes_core_route_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "m/QC":
/*!*****************************************************************************************!*\
  !*** ./src/app/core/view/components/dynamic.form/services/dynamic-form.main.service.ts ***!
  \*****************************************************************************************/
/*! exports provided: DynamicFormMainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormMainService", function() { return DynamicFormMainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _transaction_form_transaction_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../transaction.form/transaction.form.component */ "IZum");
/* harmony import */ var src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/contact.services/contract.api.service */ "mzXJ");
/* harmony import */ var src_app_core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/json.services/json.service */ "tcm4");
/* harmony import */ var _accounts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accounts.service */ "qrKc");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");








class DynamicFormMainService {
    constructor(contractApiService, jsonApiService, accountService, dialogService) {
        this.contractApiService = contractApiService;
        this.jsonApiService = jsonApiService;
        this.accountService = accountService;
        this.dialogService = dialogService;
    }
    ngOnInit() {
        this.clearSession();
    }
    getSession() {
        return this.session;
    }
    getSessionOwnerInfo() {
        return this.session.ownerInfo;
    }
    getSessionActions() {
        return this.session.actions;
    }
    setSessionActions(actions) {
        this.session.actions = actions;
    }
    getSessionProducers() {
        return this.session.producers;
    }
    setSessionProducers(producers) {
        this.session.producers = producers;
    }
    addTopSessionProducers() {
        this.accountService.addTopSessionProducers(this.session.producers)
            .then((value) => {
            this.session.producers = value;
        });
    }
    addProtonSessionProducers() {
        if (!this.session.producers.find((producer) => producer.config.actionIndex == -1)) {
            this.accountService.colectAndStabledProducers({ actor: 'admin.proton', permission: 'committee' }, -1, -1)
                .then((value) => {
                value.forEach((producer) => {
                    this.session.producers.push(producer);
                });
            });
        }
        else {
            this.session.producers = this.session.producers.filter((producer) => producer.config.actionIndex != -1);
        }
    }
    clearSession() {
        this.session = {
            ownerInfo: {
                chain: this.contractApiService.getApiIndex(),
                name: '',
                account: this.contractApiService.getUserName(),
                expiration: '14',
            },
            actions: [],
            producers: []
        };
        if (this.contractApiService.getUserName() && this.contractApiService.getUserName() !== '') {
            // this.addingNewActionToSession();
        }
    }
    addingNewActionToSessionViaDialog(after) {
        this.dialogService.open(_transaction_form_transaction_form_component__WEBPACK_IMPORTED_MODULE_2__["TransactionFormComponent"], {
            width: '250px',
        }).afterClosed().subscribe(after);
    }
    addingNewActionToSession() {
        this.addingNewActionToSessionViaDialog((action) => {
            var _a;
            if (!action) {
                return;
            }
            else {
                this.session.actions.push({
                    name: action.name,
                    action: {
                        name: action.action.name,
                        fields: action.action.fields,
                        correctPermissions: [],
                        votes: [],
                        updateauth: (_a = action.action.updateauth) !== null && _a !== void 0 ? _a : undefined,
                        _fields: action.action._fields
                    },
                    auths: [
                        {
                            _name: '',
                            _perm: '',
                            perms: []
                        }
                    ]
                });
            }
            this.session.ownerInfo.account = this.contractApiService.getUserName();
        });
    }
    importSessionFromJsonFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.jsonApiService.importObjectFromJson((e) => {
                const reader = new FileReader();
                reader.onload = (e2 => {
                    const obj = JSON.parse(e2.target.result.toString());
                    if (this.session.accInfo.chain != obj.t.accInfo.chain) {
                        alert(`First you need to change the chain to ${obj.t.accInfo.chain}`);
                    }
                    else if (this.session.accInfo.chain != obj.t.accInfo.chain) {
                        alert(`First you need to log in as ${obj.t.accInfo.name}`);
                    }
                    else {
                        this.session = obj.session;
                    }
                });
                reader.readAsText(e.target.files[0]);
            });
        });
    }
    exportSessionOnJsonFile() {
        this.jsonApiService.exportObjectAsJson({
            session: this.session
        }, 'msig-save-' + new Date().toLocaleString());
    }
    //TODO: test version
    proposeSessionActions() {
        this.contractApiService.deploy(this.session);
    }
}
DynamicFormMainService.ɵfac = function DynamicFormMainService_Factory(t) { return new (t || DynamicFormMainService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_3__["ContractApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
DynamicFormMainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DynamicFormMainService, factory: DynamicFormMainService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DynamicFormMainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_3__["ContractApiService"] }, { type: src_app_core_services_json_services_json_service__WEBPACK_IMPORTED_MODULE_4__["JsonService"] }, { type: _accounts_service__WEBPACK_IMPORTED_MODULE_5__["AccountsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "mzXJ":
/*!************************************************************************!*\
  !*** ./src/app/core/services/contact.services/contract.api.service.ts ***!
  \************************************************************************/
/*! exports provided: API, ContractApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractApiService", function() { return ContractApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cryptolions/ulm-eosio */ "S1Ef");






const API = {
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
class ContractApiService {
    constructor(http, loginEOSService) {
        this.http = http;
        this.loginEOSService = loginEOSService;
        this.apiIndex = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].chainName.toUpperCase();
    }
    getApiIndex() {
        return `${this.apiIndex}`;
    }
    changeApi(newApi) {
        this.apiIndex = newApi;
    }
    getUserName() {
        return this.account_name;
    }
    changeUserName(accountName) {
        this.account_name = accountName;
    }
    getContractActionsList(body) {
        return this.http.post(`${API[this.apiIndex]}/v1/chain/get_abi`, body);
    }
    getFromJsonTemplate() {
        return this.http.get('./assets/templates.json');
    }
    getProducers(from) {
        return this.http.get(`${API.ACCINFO}/api/accinfo/${this.apiIndex.toLowerCase()}/` + from);
    }
    getTopProducers() {
        return this.http.post(`https://wax.greymass.com/v1/chain/get_producers`, { json: true });
    }
    deploy(t) {
        this.deployContract(t).subscribe((o) => {
            console.log(o);
        }, (error) => alert(error));
    }
    deployContract(session) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.loginEOSService.eos.transaction({
            actions: [
                {
                    account: 'eosio.msig',
                    name: 'propose',
                    authorization: [{
                            actor: session.ownerInfo.account,
                            permission: 'active'
                        }],
                    data: {
                        proposer: session.ownerInfo.account,
                        proposal_name: session.ownerInfo.name,
                        requested: session.producers.map(producer => ({ actor: producer.actor, permission: producer.permission })),
                        trx: {
                            expiration: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + session.ownerInfo.expiration).toISOString(),
                            ref_block_num: 36080,
                            ref_block_prefix: 36080,
                            max_net_usage_words: 0,
                            max_cpu_usage_ms: 0,
                            delay_sec: 0,
                            context_free_actions: [],
                            actions: this.parseActions(session),
                            transaction_extensions: []
                        }
                    }
                }
            ]
        }, {
            blocksBehind: 3,
            expireSeconds: 1200,
        }));
    }
    parseActions(session) {
        const actions = [];
        session.actions.forEach((action, actionIndex) => {
            let authorization = [];
            action.action.correctPermissions.forEach((producer) => {
                if (producer.config.actionIndex === actionIndex) {
                    authorization.push({
                        actor: producer.actor,
                        permission: producer.permission
                    });
                }
            });
            let data = {};
            action.action.fields.forEach(field => {
                if (action.action.name == 'setabi' && field.name == 'bytes') {
                    // const buffer = new serialize({
                    //   textEncoder: new TextEncoder(),
                    //   textDecoder: new TextDecoder(),
                    // })
                    // const abiDefinition = this.loginEOSService.eos.abiTypes.get(`abi_def`);
                    // let abi = abiDefinition.abiTypes.fields.reduce(
                    //   (acc, { name: fieldName }) =>
                    //     Object.assign(acc, { [fieldName]: acc[fieldName] || [] }),
                    //   field.value
                    // )
                    // abiDefinition.serialize(buffer, abi)
                    // field.value = Array.from(buffer.asUint8Array()).map((i) => {
                    //   return ('0' + i.toString(16)).slice(-2);
                    // }).join('');
                }
                else {
                    data[field.name] = field.value;
                }
            });
            if (action.action.name == 'updateauth') {
                data['accounts'] = action.action.updateauth.permiss;
                data['keys'] = action.action.updateauth.keys;
            }
            actions.push({
                account: action.name,
                name: action.action.name,
                authorization,
                data: Array.from(new TextEncoder().encode(JSON.stringify(data)), function (byte) {
                    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
                }).join(''),
            });
        });
        return actions;
    }
}
ContractApiService.ɵfac = function ContractApiService_Factory(t) { return new (t || ContractApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_4__["LoginEOSService"])); };
ContractApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContractApiService, factory: ContractApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContractApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _cryptolions_ulm_eosio__WEBPACK_IMPORTED_MODULE_4__["LoginEOSService"] }]; }, null); })();


/***/ }),

/***/ "qrKc":
/*!********************************************************************************!*\
  !*** ./src/app/core/view/components/dynamic.form/services/accounts.service.ts ***!
  \********************************************************************************/
/*! exports provided: AccountsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsService", function() { return AccountsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "41Ph");
/* harmony import */ var src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/contact.services/contract.api.service */ "mzXJ");




class AccountsService {
    constructor(contract) {
        this.contract = contract;
    }
    colectAndStabledProducers(account, authorizationIndex, transactionIndex) {
        return this.collectProducers(account, authorizationIndex, transactionIndex).then((array) => {
            return Promise.resolve(this.stableProducers(array));
        });
    }
    stableProducers(array) {
        const objects = [];
        const arrays = [];
        arrays.push(array);
        for (let i = 0; i < arrays.length; i++) {
            arrays[i].forEach((objectOrArray) => {
                if (Array.isArray(objectOrArray)) {
                    arrays.push(objectOrArray);
                }
                else if (!objects.find((o) => o.actor === objectOrArray.actor && o.permission === objectOrArray.permission)) {
                    objects.push(objectOrArray);
                }
            });
        }
        return objects;
    }
    collectProducers(account, actionIndex, authorizationIndex, father = '', deep = 0) {
        return this.contract.getProducers(account.actor).toPromise().then((accountInfo) => {
            deep += 1;
            const promisses = [];
            let soloProducer = false;
            accountInfo.permissions.forEach((permission) => {
                if (permission.perm === account.permission) {
                    let correctInnerAccounts = permission.auth.accounts;
                    correctInnerAccounts.forEach((correct_inner_account) => {
                        promisses.push(this.collectProducers(correct_inner_account, actionIndex, authorizationIndex, account.actor, deep));
                    });
                    if (!soloProducer) {
                        soloProducer = true;
                        account.config = {
                            actionIndex,
                            authorizationIndex,
                            father,
                            deep
                        };
                        if (deep === 1) {
                            account.permissions = accountInfo.permissions.map((perm) => perm.perm);
                        }
                        promisses.push(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(account).toPromise());
                    }
                }
            });
            return Promise.all(promisses);
        });
    }
    addTopSessionProducers(producers) {
        if (!producers.find(producer => producer.config.actionIndex == -2)) {
            return this.contract.getTopProducers().toPromise().then(inner_producers => {
                inner_producers.rows.map((row) => ({
                    config: {
                        actionIndex: -2,
                        authorizationIndex: -2,
                        father: '_top_default',
                        deep: 3
                    },
                    actor: row.owner,
                    permission: '_producer_'
                })).forEach((producer) => producers.push(producer));
                return producers;
            });
        }
        else {
            producers = producers.filter((producer) => producer.config.actionIndex != -2);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(producers).toPromise();
        }
    }
}
AccountsService.ɵfac = function AccountsService_Factory(t) { return new (t || AccountsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_2__["ContractApiService"])); };
AccountsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountsService, factory: AccountsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: src_app_core_services_contact_services_contract_api_service__WEBPACK_IMPORTED_MODULE_2__["ContractApiService"] }]; }, null); })();


/***/ }),

/***/ "tcm4":
/*!*************************************************************!*\
  !*** ./src/app/core/services/json.services/json.service.ts ***!
  \*************************************************************/
/*! exports provided: JsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonService", function() { return JsonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class JsonService {
    constructor() {
    }
    importObjectFromJson(f) {
        const input = document.createElement('input');
        input.type = 'file';
        const e = input.onchange = f;
        input.click();
        return e;
    }
    exportObjectAsJson(exportObj, exportName) {
        const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(exportObj));
        const downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute('href', dataStr);
        downloadAnchorNode.setAttribute('download', exportName + '.json');
        document.body.appendChild(downloadAnchorNode);
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
}
JsonService.ɵfac = function JsonService_Factory(t) { return new (t || JsonService)(); };
JsonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JsonService, factory: JsonService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].chainName === 'WAX') {
    const head = document.getElementsByTagName('head')[0];
    const js = document.createElement('script');
    js.type = 'text/javascript';
    js.appendChild(document.createTextNode(`
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="//analytics.cryptolions.io/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '11']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();`));
    head.appendChild(js);
}
else if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].chainName === 'Jungle 3') {
    const head = document.getElementsByTagName('head')[0];
    const js = document.createElement('script');
    js.type = 'text/javascript';
    js.appendChild(document.createTextNode(`
    var _paq = window._paq = window._paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="//analytics.cryptolions.io/";
      _paq.push(['setTrackerUrl', u+'matomo.php']);
      _paq.push(['setSiteId', '12']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
    })();`));
    head.appendChild(js);
}
else if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].chainName === 'EOS') {
    const head = document.getElementsByTagName('head')[0];
    const js = document.createElement('script');
    js.type = 'text/javascript';
    js.appendChild(document.createTextNode(`
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytics.cryptolions.io/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '10']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();`));
    head.appendChild(js);
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map