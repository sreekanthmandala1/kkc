(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./auth_config.json":
/*!**************************!*\
  !*** ./auth_config.json ***!
  \**************************/
/*! exports provided: domain, clientId, audience, apiUrl, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"domain\":\"snelstart-test.eu.auth0.com\",\"clientId\":\"iutTzzwh0FktQPpzzkQX5bnLJvMKJ5G6\",\"audience\":\"https://webapi-tst.snelstart.nl\",\"apiUrl\":\"http://localhost:7000\"}");

/***/ }),

/***/ "./src/app/Models/invoice-data.ts":
/*!****************************************!*\
  !*** ./src/app/Models/invoice-data.ts ***!
  \****************************************/
/*! exports provided: InvoiceDataDetails, InvoiceLinesData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDataDetails", function() { return InvoiceDataDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceLinesData", function() { return InvoiceLinesData; });
class InvoiceDataDetails {
}
class InvoiceLinesData {
}


/***/ }),

/***/ "./src/app/angular-material/angular-material.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularmaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularmaterialModule", function() { return AngularmaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");














































class AngularmaterialModule {
}
AngularmaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularmaterialModule });
AngularmaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularmaterialModule_Factory(t) { return new (t || AngularmaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"]
        ], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularmaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"]], exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularmaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"]
                ],
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_44__["OverlayModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-invoice/create-invoice.component */ "./src/app/create-invoice/create-invoice.component.ts");
/* harmony import */ var _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-login/social-login.component */ "./src/app/social-login/social-login.component.ts");
/* harmony import */ var _invoice_data_invoice_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice-data/invoice-data.component */ "./src/app/invoice-data/invoice-data.component.ts");
/* harmony import */ var _download_invoicee_download_invoicee_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./download-invoicee/download-invoicee.component */ "./src/app/download-invoicee/download-invoicee.component.ts");
/* harmony import */ var _components_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/google-login/google-login.component */ "./src/app/components/google-login/google-login.component.ts");









const routes = [
    // {
    //   path: '', redirectTo : 'create-invoice', pathMatch:'full'
    // },
    {
        path: 'create-invoice',
        component: _create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_2__["CreateInvoiceComponent"]
    },
    {
        path: '',
        component: _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_3__["SocialLoginComponent"]
    },
    {
        path: 'invoice-data',
        component: _invoice_data_invoice_data_component__WEBPACK_IMPORTED_MODULE_4__["InvoiceDataComponent"]
    },
    {
        path: 'create-invoice',
        component: _create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_2__["CreateInvoiceComponent"]
    },
    {
        path: 'download-invoice',
        component: _download_invoicee_download_invoicee_component__WEBPACK_IMPORTED_MODULE_5__["DownloadInvoiceeComponent"]
    },
    { path: 'googlelogins', component: _components_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'E-Invoice';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular5-social-login */ "./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular5_social_login__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-invoice/create-invoice.component */ "./src/app/create-invoice/create-invoice.component.ts");
/* harmony import */ var _user_image_user_image_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-image/user-image.component */ "./src/app/user-image/user-image.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./social-login/social-login.component */ "./src/app/social-login/social-login.component.ts");
/* harmony import */ var _invoice_data_invoice_data_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./invoice-data/invoice-data.component */ "./src/app/invoice-data/invoice-data.component.ts");
/* harmony import */ var _download_invoicee_download_invoicee_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./download-invoicee/download-invoicee.component */ "./src/app/download-invoicee/download-invoicee.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _app_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../app/angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _components_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/google-login/google-login.component */ "./src/app/components/google-login/google-login.component.ts");
/* harmony import */ var _app_components_google_google_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../app/components/google/google.module */ "./src/app/components/google/google.module.ts");
/* harmony import */ var _components_facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/facebook-login/facebook-login.component */ "./src/app/components/facebook-login/facebook-login.component.ts");




























function provideConfig() {
    return rxjs__WEBPACK_IMPORTED_MODULE_8__["config"];
}
// Configs 
function getAuthServiceConfigs() {
    let config = new angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthServiceConfig"]([
        {
            id: angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["FacebookLoginProvider"]("1370874466610019")
        },
        {
            id: angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["GoogleLoginProvider"]("276020003674-6dkiudvd4sc2c4olf7fj5hmc1rfrdil0.apps.googleusercontent.com"),
        },
        {
            id: angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["LinkedinLoginProvider"].PROVIDER_ID,
            provider: new angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["LinkedinLoginProvider"]("785x8liqxz2stg")
        }
    ]);
    return config;
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
            useFactory: getAuthServiceConfigs,
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__["AuthModule"].forRoot(Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].auth)),
            _app_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_22__["AngularmaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _app_components_google_google_module__WEBPACK_IMPORTED_MODULE_24__["GoogleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__["MainPageComponent"],
        _create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_13__["CreateInvoiceComponent"],
        _user_image_user_image_component__WEBPACK_IMPORTED_MODULE_14__["UserImageComponent"],
        _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavBarComponent"],
        _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_16__["MainNavComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__["MainPageComponent"],
        _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_18__["SocialLoginComponent"],
        _invoice_data_invoice_data_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceDataComponent"],
        _download_invoicee_download_invoicee_component__WEBPACK_IMPORTED_MODULE_20__["DownloadInvoiceeComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__["NotFoundComponent"],
        _components_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_23__["GoogleLoginComponent"],
        _components_facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_25__["FacebookLoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__["AuthModule"], _app_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_22__["AngularmaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _app_components_google_google_module__WEBPACK_IMPORTED_MODULE_24__["GoogleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__["MainPageComponent"],
                    _create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_13__["CreateInvoiceComponent"],
                    _user_image_user_image_component__WEBPACK_IMPORTED_MODULE_14__["UserImageComponent"],
                    _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_15__["NavBarComponent"],
                    _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_16__["MainNavComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__["MainPageComponent"],
                    _social_login_social_login_component__WEBPACK_IMPORTED_MODULE_18__["SocialLoginComponent"],
                    _invoice_data_invoice_data_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceDataComponent"],
                    _download_invoicee_download_invoicee_component__WEBPACK_IMPORTED_MODULE_20__["DownloadInvoiceeComponent"],
                    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_21__["NotFoundComponent"],
                    _components_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_23__["GoogleLoginComponent"],
                    _components_facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_25__["FacebookLoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                    _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_6__["AuthModule"].forRoot(Object.assign({}, _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].auth)),
                    _app_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_22__["AngularmaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _app_components_google_google_module__WEBPACK_IMPORTED_MODULE_24__["GoogleModule"]
                ],
                providers: [
                    {
                        provide: angular5_social_login__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                        useFactory: getAuthServiceConfigs,
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/facebook-login/facebook-login.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/facebook-login/facebook-login.component.ts ***!
  \***********************************************************************/
/*! exports provided: FacebookLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookLoginComponent", function() { return FacebookLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");




class FacebookLoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID);
    }
    signInWithFB() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_ID);
    }
    signOut() {
        this.authService.signOut();
    }
    refreshToken() {
        this.authService.refreshAuthToken(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID);
    }
}
FacebookLoginComponent.ɵfac = function FacebookLoginComponent_Factory(t) { return new (t || FacebookLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"])); };
FacebookLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FacebookLoginComponent, selectors: [["app-facebook-login"]], decls: 2, vars: 0, consts: [[1, "btn", "btn-primary", "col-lg-5", 2, "cursor", "pointer", 3, "click"]], template: function FacebookLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacebookLoginComponent_Template_button_click_0_listener() { return ctx.signInWithFB(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacebookLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-facebook-login',
                templateUrl: './facebook-login.component.html',
                styles: []
            }]
    }], function () { return [{ type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/google-login/google-login.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/google-login/google-login.component.ts ***!
  \*******************************************************************/
/*! exports provided: GoogleLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginComponent", function() { return GoogleLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");




class GoogleLoginComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
        });
    }
    signInWithGoogle() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID);
    }
    signInWithFB() {
        this.authService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_ID);
    }
    signOut() {
        this.authService.signOut();
    }
    refreshToken() {
        this.authService.refreshAuthToken(angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID);
    }
}
GoogleLoginComponent.ɵfac = function GoogleLoginComponent_Factory(t) { return new (t || GoogleLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"])); };
GoogleLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoogleLoginComponent, selectors: [["app-google-login"]], decls: 2, vars: 0, consts: [[1, "btn", "btn-success", "col-lg-5", 2, "cursor", "pointer", 3, "click"]], template: function GoogleLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoogleLoginComponent_Template_button_click_0_listener() { return ctx.signInWithGoogle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-google-login',
                templateUrl: './google-login.component.html',
                styles: []
            }]
    }], function () { return [{ type: angularx_social_login__WEBPACK_IMPORTED_MODULE_1__["SocialAuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/google/google.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/google/google.module.ts ***!
  \****************************************************/
/*! exports provided: GoogleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleModule", function() { return GoogleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");





class GoogleModule {
}
GoogleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GoogleModule });
GoogleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GoogleModule_Factory(t) { return new (t || GoogleModule)(); }, providers: [
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"]('276020003674-6dkiudvd4sc2c4olf7fj5hmc1rfrdil0.apps.googleusercontent.com')
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"]('1370874466610019')
                    }
                ]
            },
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialLoginModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GoogleModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialLoginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoogleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialLoginModule"]
                ],
                providers: [
                    {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: false,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"]('276020003674-6dkiudvd4sc2c4olf7fj5hmc1rfrdil0.apps.googleusercontent.com')
                                },
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["FacebookLoginProvider"]('1370874466610019')
                                }
                            ]
                        },
                    }
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/create-invoice/create-invoice.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-invoice/create-invoice.component.ts ***!
  \************************************************************/
/*! exports provided: CreateInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateInvoiceComponent", function() { return CreateInvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _Models_invoice_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Models/invoice-data */ "./src/app/Models/invoice-data.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_user_invoice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user-invoice.service */ "./src/app/services/user-invoice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









const _c0 = function () { return { "color": "colorGreen" }; };
const _c1 = function (a0, a1) { return { "green": a0, "red": a1 }; };
function CreateInvoiceComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 80);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r0.toggle, !ctx_r0.toggle));
} }
function CreateInvoiceComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " invoice version is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 81);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r3.toggle, !ctx_r3.toggle));
} }
function CreateInvoiceComponent_span_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Registration Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_93_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Street is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Postal Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Vat Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Kvk Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_div_132_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 82);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r12.toggle, !ctx_r12.toggle));
} }
function CreateInvoiceComponent_span_142_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Country is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Street is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_169_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " City is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " postal Code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_span_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Vat Number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateInvoiceComponent_div_203_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 83);
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r20.toggle, !ctx_r20.toggle));
} }
function CreateInvoiceComponent_tbody_256_tr_1_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateInvoiceComponent_tbody_256_tr_1_td_1_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.deleteInvoiceValue(i_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", invoice_r25.name, " ");
} }
function CreateInvoiceComponent_tbody_256_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateInvoiceComponent_tbody_256_tr_1_td_1_Template, 3, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", invoice_r25 == null ? null : invoice_r25.name);
} }
function CreateInvoiceComponent_tbody_256_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateInvoiceComponent_tbody_256_tr_1_Template, 2, 1, "tr", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r21.InvoiceArray);
} }
function CreateInvoiceComponent_tbody_257_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateInvoiceComponent_tbody_257_tr_1_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ind_r34 = ctx.index; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.deleteInvoiceValue(ind_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "--Select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "item1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "item2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "item3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "item4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "item5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreateInvoiceComponent_tbody_257_tr_1_Template_input_input_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.quantitychange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CreateInvoiceComponent_tbody_257_tr_1_Template_input_input_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.pricechange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u00A0\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const invoice_r33 = ctx.$implicit;
    const ind_r34 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "itemname", ind_r34 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", invoice_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "quat", ind_r34 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", invoice_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "price", ind_r34 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", invoice_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "total", ind_r34 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", invoice_r33.name);
} }
function CreateInvoiceComponent_tbody_257_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateInvoiceComponent_tbody_257_tr_1_Template, 26, 8, "tr", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateInvoiceComponent_tbody_257_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.addInvoiceValue(ctx_r39.InvoiceArray.length); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add More Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.InvoiceArray);
} }
function CreateInvoiceComponent_div_260_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r41.name, " ");
} }
class CreateInvoiceComponent {
    constructor(activatedroute, http, userInvoiceService, fb) {
        this.activatedroute = activatedroute;
        this.http = http;
        this.userInvoiceService = userInvoiceService;
        this.fb = fb;
        this.clsName = 'one';
        this.clsName2 = 'two';
        this.Name = "";
        this.supplierName = "";
        this.invoiceVersion = "";
        this.toggle = true;
        this.status = 'Enable';
        this.InvoiceArray = [];
        this.newAttribute = {};
        this.totalAmount = 0;
        this.userDetails = [];
        this.verticalLine = false;
        this.supplierVerticalLine = false;
        this.customerPartyVerticalLine = false;
        this.paymentVerticalLine = false;
        this.activatedroute.queryParams.subscribe(data => {
            ;
            this.username = data.name;
        });
    }
    ngOnInit() {
        // this.customerDetails = new FormGroup({
        //   'date': new FormControl(null, Validators.required),
        //   'invoiceVersion': new FormControl(null, Validators.required),
        //   'supplierName': new FormControl(null, Validators.required),
        //   'registationName': new FormControl(null, Validators.required),
        //   'country': new FormControl(null, Validators.required),
        //   'street': new FormControl(null, Validators.required),
        //   'city': new FormControl(null, Validators.required),
        //   'postalCode': new FormControl(null, Validators.required),
        //   'vatNumber': new FormControl(null, Validators.required),
        //   'kvkNumber': new FormControl(null, Validators.required),
        //   'customerName': new FormControl(null, Validators.required),
        //   'customerEmail': new FormControl(null, Validators.required),
        //   'customerCountry': new FormControl(null, Validators.required),
        //   'customerStreet': new FormControl(null, Validators.required),
        //   'customerCity': new FormControl(null, Validators.required),
        //   'customerPostalCode': new FormControl(null, Validators.required),
        //   'customerVatNumber': new FormControl(null, Validators.required),
        //   'customerKvkNumber': new FormControl(null, Validators.required),
        //   'dueDate': new FormControl(null, Validators.required),
        //   'ibanNumber': new FormControl(null, Validators.required),
        //   'branchCode': new FormControl(null, Validators.required),
        //   'itemName': new FormControl(null, Validators.required),
        //   'quantity': new FormControl(null, Validators.required),
        //   'price': new FormControl(null, Validators.required),
        //   'total': new FormControl(null, Validators.required),
        // })
        this.customerDetails = this.fb.group({
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'invoiceVersion': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.supplierDetailsFb = this.fb.group({
            'supplierName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-z]{1,15}'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            'registrationName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'country': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'street': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'postalCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'vatNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'kvkNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.customerPartyFb = this.fb.group({
            'customerName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(25),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])),
            'customerEmail': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'customerCountry': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'customerStreet': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'customerCity': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'customerPostalCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'customerVatNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'customerKvkNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.paymentDetailsFb = this.fb.group({
            'dueDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'ibanNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'branchCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.invoiceLinesFb = this.fb.group({
            'itemName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'quantity': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'price': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            'total': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        this.addInvoiceValue(this.index);
        this.isEditItems = !this.isEditItems;
    }
    onEditCloseItems() {
        this.isEditItems = !this.isEditItems;
    }
    deleteInvoiceValue(index) {
        this.InvoiceArray.splice(index, 1);
    }
    addInvoiceValue(index) {
        ;
        this.InvoiceArray.push(this.newAttribute);
        this.newAttribute = {};
    }
    quantitychange() {
        ;
        for (var i = 1; i <= this.InvoiceArray.length; i++) {
            var itemsdata = {
                "quatity": (document.getElementById('quat' + i)).value,
                "price": (document.getElementById('price' + i)).value
            };
            (document.getElementById('total' + i)).value = "";
            (document.getElementById('total' + i)).value = itemsdata.quatity * itemsdata.price;
        }
    }
    pricechange() {
        ;
        for (var i = 1; i <= this.InvoiceArray.length; i++) {
            var itemsdata = {
                "quatity": (document.getElementById('quat' + i)).value,
                "price": (document.getElementById('price' + i)).value
            };
            (document.getElementById('total' + i)).value = "";
            (document.getElementById('total' + i)).value = itemsdata.quatity * itemsdata.price;
        }
    }
    SubmitInvoice() {
        ;
        var Invoiceitemlines = [];
        var invoiceDate = (document.getElementById('txtinvoiceDate')).value;
        var supName = (document.getElementById('txtsupName')).value;
        var supStreet = (document.getElementById('txtsupStreet')).value;
        var supCity = (document.getElementById('txtsupCity')).value;
        var supPostalCode = (document.getElementById('txtsupPostalCode')).value;
        var supCountry = (document.getElementById('txtsupCountry')).value;
        var supVatNumber = (document.getElementById('txtsupVatNumber')).value;
        var supKvkNumber = (document.getElementById('txtsupKvkNumber')).value;
        var supRegistration = (document.getElementById('txtsupRegistration')).value;
        var CustmerName = (document.getElementById('txtCustmerName')).value;
        var CustmerStreet = (document.getElementById('txtCustmerStreet')).value;
        var CustmerCity = (document.getElementById('txtCustmerCity')).value;
        var CustPostalCode = (document.getElementById('txtPostalCode')).value;
        var CustmerCountry = (document.getElementById('txtCustmerCountry')).value;
        var CustmerVatNumber = (document.getElementById('txtCustmerVatNumber')).value;
        var CustmerKvkNumber = (document.getElementById('txtCustmerKvkNumber')).value;
        //var CustmerRegisterName = (<any>(document.getElementById('txtCustmerRegisterName'))).value;
        var CustmerEmail = (document.getElementById('txtCustmerEmail')).value;
        var PaymentDate = (document.getElementById('txtPaymentDate')).value;
        var PaymentIbanNumber = (document.getElementById('txtPaymentIbanNumber')).value;
        var PaymentBranch = (document.getElementById('txtPaymentBranch')).value;
        var TotalAmount = 0;
        var invoicedata = new _Models_invoice_data__WEBPACK_IMPORTED_MODULE_2__["InvoiceDataDetails"]();
        var invoicedetails = new Array();
        for (var i = 1; i <= this.InvoiceArray.length; i++) {
            var itemsdata = {
                "invoiceItemName": (document.getElementById('itemname' + i)).value,
                "invoiceQuantity": (document.getElementById('quat' + i)).value,
                "invoiceprice": (document.getElementById('price' + i)).value,
                "invoicetotalAmount": (document.getElementById('total' + i)).value
            };
            TotalAmount = TotalAmount + parseInt(itemsdata.invoicetotalAmount);
            invoicedetails.push(itemsdata);
        }
        invoicedata.invoiceLine = invoicedetails;
        var TotalTax = TotalAmount * (21 / 100);
        var invoicetotalamount = String(TotalAmount);
        var invoicetaxamount = String(TotalTax);
        ;
        var InvoiceData = {
            InvoiceDate: invoiceDate, InvoiceDueDate: PaymentDate, InvoiceNumber: "INV1234",
            TotalAmount: invoicetotalamount, TotalTaxAmount: invoicetaxamount, TaxPercentage: "21",
            Supplier: supName, SupplierStreet: supStreet, SupplierCity: supCity,
            SupplierPostalCode: supPostalCode, SupplierCountry: supCountry,
            KvkNumber: supKvkNumber, VatNumber: supVatNumber, RegistrationName: supRegistration,
            Customer: CustmerName, CustomerStreet: CustmerStreet, CustomerCity: CustmerCity,
            CustomerPostalCode: CustPostalCode, CustomerCountry: CustmerCountry, CustomerEmail: CustmerEmail,
            CustomerKvkNumber: CustmerKvkNumber, CustomerVatNumber: CustmerVatNumber,
            IbanNumber: PaymentIbanNumber, PaymentBranch: PaymentBranch, base64: "", InvoiceLinesDataInfo: invoicedata.invoiceLine
        };
        let opt = { responseType: 'text' };
        this.http.post('https://einvoiceservice-dev.azurewebsites.net/api/InvoiceService', InvoiceData, opt).subscribe(data => {
            ;
            alert("Invoice Send Successfully, Please Check your Mail...");
        });
    }
    // onUserSubmit(){
    //   this.userInvoiceService.onGetUserDetails().subscribe((data)=>{
    //     this.userDetails = data;
    //   },
    //   (error)=>{
    //     console.log(error)
    //   })
    // }
    onLineClick() {
        this.verticalLine = !this.verticalLine;
    }
    onLineClickSupplierDetails() {
        this.supplierVerticalLine = !this.supplierVerticalLine;
    }
    onNext() {
        this.toggle = !this.toggle;
        this.status = this.toggle ? 'Enable' : 'Disable';
    }
    onSupplierLineClick() {
        this.supplierVerticalLine = !this.supplierVerticalLine;
    }
    onCustomerPartyClick() {
        this.customerPartyVerticalLine = !this.customerPartyVerticalLine;
    }
    onPaymentClick() {
        this.paymentVerticalLine = !this.paymentVerticalLine;
    }
}
CreateInvoiceComponent.ɵfac = function CreateInvoiceComponent_Factory(t) { return new (t || CreateInvoiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_invoice_service__WEBPACK_IMPORTED_MODULE_5__["UserInvoiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
CreateInvoiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateInvoiceComponent, selectors: [["app-create-invoice"]], decls: 264, vars: 34, consts: [[1, "container"], [1, "row"], [1, "col-md-12"], ["id", "accordion", 1, "checkout", 2, "box-shadow", "0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)"], [1, "panel", "checkout-step"], [1, "content"], [1, "checkout-step-number"], [1, "checkout-step-title"], ["role", "button", "data-parent", "#accordion", 2, "color", "blue"], [1, "col-md-1"], ["id", "line", 3, "ngStyle", "ngClass", 4, "ngIf"], [1, "col-md-11", 2, "padding", "0px"], ["id", "collapseOne"], [1, "checkout-step-body"], [1, "col-lg-12"], [1, "checkout-login"], [1, "row", 3, "formGroup"], [1, "col-md-4"], [1, "login-date"], [2, "color", "midnightblue", "font-weight", "bold", "float", "left"], ["id", "ddlinvoiceVersion", "formControlName", "invoiceVersion", 1, "form-control"], ["value", "2.0"], ["value", "2.1"], ["value", "Bissv3"], [4, "ngIf"], [2, "color", "midnightblue", "font-weight", "bold"], ["type", "date", "id", "txtinvoiceDate", "placeholder", "Invoice Date", "formControlName", "date", 1, "form-control"], [1, "col-4"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseTwo", 1, "collapsed", "btn", "btn-default", 2, "background-color", "navy", "color", "white", 3, "disabled", "click"], ["role", "tab", "id", "headingTwo"], ["role", "button", "data-parent", "#accordion", 1, "collapsed", 2, "color", "blue"], ["id", "collapseTwo", 1, "panel-collapse", "collapse"], [1, "checout-address-step"], ["id", "supplierLine", 3, "ngStyle", "ngClass", 4, "ngIf"], [1, "col-md-11"], [3, "formGroup"], [1, "form-group"], ["for", "name", 1, "control-label", 2, "color", "midnightblue", "font-weight", "bold"], ["name", "name", "id", "txtsupName", "type", "text", "placeholder", "Name", "formControlName", "supplierName", 1, "form-control"], ["for", "Locality", 1, "control-label", 2, "color", "midnightblue", "font-weight", "bold"], ["id", "txtsupRegistration", "type", "text", "placeholder", "Registration Name", "required", "", "formControlName", "registrationName", 1, "form-control", "input-md"], ["for", "street", 1, "control-label", 2, "color", "midnightblue", "font-weight", "bold"], ["id", "txtsupCountry", "type", "text", "placeholder", "country", "formControlName", "country", 1, "form-control", "input-md"], ["for", "flat", 1, "col-md-5", "control-label", 2, "color", "midnightblue", "font-weight", "bold"], ["id", "txtsupStreet", "type", "text", "placeholder", "street", "required", "", "formControlName", "street", 1, "form-control", "input-md"], ["id", "txtsupCity", "type", "text", "placeholder", "City", "formControlName", "city", 1, "form-control", "input-md"], ["id", "txtsupPostalCode", "type", "text", "placeholder", "Postal Code", "formControlName", "postalCode", 1, "form-control", "input-md"], ["id", "txtsupVatNumber", "type", "text", "placeholder", "Vat Number", "required", "", "formControlName", "vatNumber", 1, "form-control", "input-md"], ["for", "Locality", 1, "col-md-5", "control-label", 2, "color", "midnightblue", "font-weight", "bold"], ["id", "txtsupKvkNumber", "type", "text", "placeholder", "Kvk Number", "required", "", "formControlName", "kvkNumber", 1, "form-control", "input-md"], [1, "col-md-5"], ["type", "submit", "role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseThree", 1, "collapsed", "btn", "btn-default", 2, "background-color", "navy", "color", "white", 3, "disabled", "click"], ["role", "tab", "id", "headingThree"], ["id", "collapseThree", 1, "panel-collapse", "collapse"], ["id", "customerPartyLine", 3, "ngStyle", "ngClass", 4, "ngIf"], ["id", "txtCustmerName", "type", "text", "placeholder", "Name", "required", "", "formControlName", "customerName", 1, "form-control", "input-md"], ["id", "txtCustmerEmail", "type", "text", "placeholder", "Email", "required", "", "formControlName", "customerEmail", 1, "form-control", "input-md"], ["for", "street", 1, "col-md-5", "control-label", 2, "color", "midnightblue", "font-weight", "bold"], ["id", "txtCustmerCountry", "type", "text", "placeholder", "country", "formControlName", "customerCountry", 1, "form-control", "input-md"], ["for", "flat", 1, "control-label", 2, "color", "midnightblue", "font-weight", "bold"], ["id", "txtCustmerStreet", "type", "text", "placeholder", "street", "required", "", "formControlName", "customerStreet", 1, "form-control", "input-md"], ["id", "txtCustmerCity", "name", "street", "type", "text", "placeholder", "City", "formControlName", "customerCity", 1, "form-control", "input-md"], ["id", "txtPostalCode", "name", "street", "type", "text", "placeholder", "Postal Code", "formControlName", "customerPostalCode", 1, "form-control", "input-md"], ["id", "txtCustmerVatNumber", "type", "text", "placeholder", "Vat Number", "required", "", "formControlName", "customerVatNumber", 1, "form-control", "input-md"], ["id", "txtCustmerKvkNumber", "type", "text", "placeholder", "Kvk Number", "formControlName", "customerKvkNumber", 1, "form-control", "input-md"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFour", 1, "collapsed", "btn", "btn-default", 2, "background-color", "navy", "color", "white", 3, "disabled", "click"], ["role", "tab", "id", "headingFour"], ["id", "paymentLine", 3, "ngStyle", "ngClass", 4, "ngIf"], ["id", "collapseFour", 1, "panel-collapse", "collapse"], ["id", "txtPaymentDate", "type", "date", "placeholder", "Name", "required", "", "formControlName", "dueDate", 1, "form-control", "input-md"], ["id", "txtPaymentIbanNumber", "type", "text", "placeholder", "IBan Number", "required", "", "formControlName", "ibanNumber", 1, "form-control", "input-md"], ["id", "txtPaymentBranch", "type", "text", "placeholder", "Branch Code", "formControlName", "branchCode", 1, "form-control", "input-md"], [1, "col-md-6"], ["role", "button", "data-toggle", "collapse", "data-parent", "#accordion", "href", "#collapseFive", 1, "collapsed", "btn", "btn-default", 2, "background-color", "navy", "color", "white", 3, "disabled", "click"], ["id", "collapseFive", 1, "panel-collapse", "collapse"], [2, "color", "navy", "font-weight", "bold"], [1, "table", "table-striped", "table-bordered", "col-md-12"], ["role", "button", "data-toggle", "collapse", 1, "collapsed", "btn", "btn-default", 2, "background-color", "navy", "color", "white", 3, "disabled", "click"], [4, "ngFor", "ngForOf"], [1, "col-3"], ["id", "line", 3, "ngStyle", "ngClass"], ["id", "supplierLine", 3, "ngStyle", "ngClass"], ["id", "customerPartyLine", 3, "ngStyle", "ngClass"], ["id", "paymentLine", 3, "ngStyle", "ngClass"], [1, "mdi", "mdi-close", "mdi-18px", 3, "click"], ["align", "right"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg1", 2, "margin-right", "10px", 3, "click"], [1, "input-group"], [1, "input-group-prepend", 2, "cursor", "pointer"], [1, "input-group-text", 3, "click"], [1, "mdi", "mdi-close", "mdi-18px"], ["autocomplete", "off", "type", "text", "formControlName", "itemName", 1, "form-control", 3, "id", "name"], ["value", "--Select--", 3, "selected"], ["value", "item1"], ["value", "item2"], ["value", "item3"], ["value", "item4"], ["value", "item5"], ["autocomplete", "off", "type", "text", "placeholder", "Quantity", "formControlName", "quantity", 1, "form-control", 3, "id", "name", "input"], ["autocomplete", "off", "type", "text", "placeholder", "Price", "formControlName", "price", 1, "form-control", 3, "id", "name", "input"], ["autocomplete", "off", "disabled", "", "type", "text", "placeholder", "Total", "formControlName", "total", 1, "form-control", 3, "id", "name"]], template: function CreateInvoiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CreateInvoiceComponent_div_14_Template, 1, 6, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Invoice Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "2.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "2.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Bissv3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, CreateInvoiceComponent_span_34_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, CreateInvoiceComponent_div_42_Template, 2, 0, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateInvoiceComponent_Template_button_click_46_listener() { return ctx.onLineClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Supplier Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, CreateInvoiceComponent_div_61_Template, 1, 6, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Supplier Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, CreateInvoiceComponent_span_71_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Registration name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, CreateInvoiceComponent_span_78_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, CreateInvoiceComponent_span_85_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, CreateInvoiceComponent_span_93_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](97, CreateInvoiceComponent_span_97_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](100, CreateInvoiceComponent_span_100_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Vat Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](108, CreateInvoiceComponent_span_108_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Kvk Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, CreateInvoiceComponent_span_115_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateInvoiceComponent_Template_button_click_118_listener() { return ctx.onSupplierLineClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " Customer Party ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, CreateInvoiceComponent_div_132_Template, 1, 6, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Party Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](142, CreateInvoiceComponent_span_142_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](149, CreateInvoiceComponent_span_149_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](156, CreateInvoiceComponent_span_156_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](165, CreateInvoiceComponent_span_165_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "input", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](169, CreateInvoiceComponent_span_169_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "input", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](172, CreateInvoiceComponent_span_172_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Vat Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](180, CreateInvoiceComponent_span_180_Template, 2, 0, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "label", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Kvk Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "input", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateInvoiceComponent_Template_button_click_190_listener() { return ctx.onCustomerPartyClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Payment Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](203, CreateInvoiceComponent_div_203_Template, 1, 6, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Due date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "IBan Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "input", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "label", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Branch Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "input", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "button", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateInvoiceComponent_Template_button_click_230_listener() { return ctx.onPaymentClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Next ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Invoice Lines ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "form", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " \u00A0\u00A0\u00A0ItemName");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " \u00A0\u00A0\u00A0Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "table", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](256, CreateInvoiceComponent_tbody_256_Template, 2, 1, "tbody", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](257, CreateInvoiceComponent_tbody_257_Template, 6, 1, "tbody", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateInvoiceComponent_Template_button_click_258_listener() { return ctx.SubmitInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " Submit Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](260, CreateInvoiceComponent_div_260_Template, 2, 1, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](263, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verticalLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customerDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerDetails.controls["invoiceVersion"].invalid && (ctx.customerDetails.controls["invoiceVersion"].dirty || ctx.customerDetails.controls["invoiceVersion"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerDetails.controls["date"].invalid && (ctx.customerDetails.controls["date"].dirty || ctx.customerDetails.controls["date"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.customerDetails.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supplierVerticalLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.supplierDetailsFb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supplierDetailsFb.controls["supplierName"].invalid && (ctx.supplierDetailsFb.controls["supplierName"].dirty || ctx.supplierDetailsFb.controls["supplierName"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supplierDetailsFb.controls["registrationName"].invalid && (ctx.supplierDetailsFb.controls["registrationName"].dirty || ctx.supplierDetailsFb.controls["registrationName"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supplierDetailsFb.controls["country"].invalid && (ctx.supplierDetailsFb.controls["country"].dirty || ctx.supplierDetailsFb.controls["country"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supplierDetailsFb.controls["street"].invalid && (ctx.supplierDetailsFb.controls["street"].dirty || ctx.supplierDetailsFb.controls["street"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supplierDetailsFb.controls["city"].invalid && (ctx.supplierDetailsFb.controls["city"].dirty || ctx.supplierDetailsFb.controls["city"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supplierDetailsFb.controls["postalCode"].invalid && (ctx.supplierDetailsFb.controls["postalCode"].dirty || ctx.supplierDetailsFb.controls["postalCode"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supplierDetailsFb.controls["vatNumber"].invalid && (ctx.supplierDetailsFb.controls["vatNumber"].dirty || ctx.supplierDetailsFb.controls["vatNumber"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.supplierDetailsFb.controls["kvkNumber"].invalid && (ctx.supplierDetailsFb.controls["kvkNumber"].dirty || ctx.supplierDetailsFb.controls["kvkNumber"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.supplierDetailsFb.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerPartyVerticalLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.customerPartyFb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerPartyFb.controls["customerName"].invalid && (ctx.customerPartyFb.controls["customerName"].dirty || ctx.customerPartyFb.controls["customerName"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerPartyFb.controls["customerEmail"].invalid && (ctx.customerPartyFb.controls["customerEmail"].dirty || ctx.customerPartyFb.controls["customerEmail"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerPartyFb.controls["customerCountry"].invalid && (ctx.customerPartyFb.controls["customerCountry"].dirty || ctx.customerPartyFb.controls["customerCountry"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerPartyFb.controls["customerStreet"].invalid && (ctx.customerPartyFb.controls["customerStreet"].dirty || ctx.customerPartyFb.controls["customerStreet"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerPartyFb.controls["customerCity"].invalid && (ctx.customerPartyFb.controls["customerCity"].dirty || ctx.customerPartyFb.controls["customerCity"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerPartyFb.controls["customerPostalCode"].invalid && (ctx.customerPartyFb.controls["customerPostalCode"].dirty || ctx.customerPartyFb.controls["customerPostalCode"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.customerPartyFb.controls["customerVatNumber"].invalid && (ctx.customerPartyFb.controls["customerVatNumber"].dirty || ctx.customerPartyFb.controls["customerVatNumber"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.customerPartyFb.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paymentVerticalLine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.paymentDetailsFb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.paymentDetailsFb.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.invoiceLinesFb);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isEditItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.invoiceLinesFb.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".checkout-wrapper[_ngcontent-%COMP%] {\r\n    padding-top: 40px;\r\n    padding-bottom: 40px;\r\n    background-color: #fafbfa;\r\n}\r\n.checkout[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border: 1px solid #eaefe9;\r\n\r\n    font-size: 14px;\r\n}\r\n.panel[_ngcontent-%COMP%] {\r\n    margin-bottom: 0px;\r\n}\r\n.checkout-step[_ngcontent-%COMP%] {\r\n    border-top: 1px solid #e8dede;\r\n    color: #881717;\r\n    font-size: 14px;\r\n    padding: 30px;\r\n    position: relative;\r\n}\r\n.checkout-step-number[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    border: 1px solid #666;\r\n    display: inline-block;\r\n    font-size: 12px;\r\n    height: 32px;\r\n    margin-right: 26px;\r\n    padding: 1px;\r\n    text-align: center;\r\n    width: 32px;\r\n}\r\n.checkout-step-title[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    font-weight: 500;\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    margin: 0px;\r\n}\r\n.checout-address-step[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 18px;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n.checkout-step-body[_ngcontent-%COMP%] {\r\n    padding-left: 60px;\r\n    padding-top: 30px;\r\n}\r\n.checkout-step-active[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n.checkout-step-disabled[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n.login-phone[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n}\r\n.login-phone[_ngcontent-%COMP%]:after {\r\n    content: \"+91 - \";\r\n    font-size: 14px;\r\n    left: 36px;\r\n}\r\n.login-phone[_ngcontent-%COMP%]:before {\r\n    content: \"\";\r\n    font-style: normal;\r\n    color: #333;\r\n    font-size: 18px;\r\n    left: 12px;\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n.login-phone[_ngcontent-%COMP%]:after, .login-phone[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n}\r\n.login-phone[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\r\n    padding-left: 68px;\r\n    font-size: 14px;\r\n}\r\n.checkout-login[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\r\n    height: 42px;\r\n    line-height: 1.8;\r\n}\r\n.otp-verifaction[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n}\r\n.checkout-sidebar[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border: 1px solid #eaefe9;\r\n    padding: 30px;\r\n    margin-bottom: 30px;\r\n}\r\n.checkout-sidebar-merchant-box[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    border: 1px solid #eaefe9;\r\n    margin-bottom: 30px;\r\n}\r\n.checkout-total[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #eaefe9;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n.checkout-invoice[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n.checout-invoice-title[_ngcontent-%COMP%] {\r\n    float: left;\r\n    color: #30322f;\r\n}\r\n.checout-invoice-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #30322f;\r\n}\r\n.checkout-charges[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n.checout-charges-title[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n.checout-charges-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n.charges-free[_ngcontent-%COMP%] {\r\n    color: #43b02a;\r\n    font-weight: 600;\r\n}\r\n.checkout-payable[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 100%;\r\n    color: #333;\r\n}\r\n.checkout-payable-title[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n.checkout-payable-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n}\r\n.checkout-cart-merchant-box[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-bottom: 1px solid #eaefe9;\r\n    padding-bottom: 20px;\r\n}\r\n.checkout-cart-merchant-name[_ngcontent-%COMP%] {\r\n    color: #30322f;\r\n    float: left;\r\n}\r\n.checkout-cart-merchant-item[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #30322f;\r\n}\r\n.checkout-cart-products[_ngcontent-%COMP%]   .checkout-charges[_ngcontent-%COMP%] {\r\n    padding: 10px 20px;\r\n    color: #333;\r\n}\r\n.checkout-cart-item[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #eaefe9;\r\n    box-sizing: border-box;\r\n    display: table;\r\n    font-size: 12px;\r\n    padding: 22px 20px;\r\n    width: 100%;\r\n}\r\n.checkout-item-count[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n.checkout-item-img[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n    float: left;\r\n}\r\n.checkout-item-name-box[_ngcontent-%COMP%] {\r\n    float: left;\r\n}\r\n.checkout-item-title[_ngcontent-%COMP%] {\r\n    color: #30322f;\r\n    font-size: 14px;\r\n}\r\n.checkout-item-price[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #30322f;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n}\r\n.checkout-viewmore-btn[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    text-align: center;\r\n}\r\n.header-checkout-item[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n    padding-top: 20px;\r\n}\r\n.checkout-promise-item[_ngcontent-%COMP%] {\r\n    background-repeat: no-repeat;\r\n    background-size: 14px;\r\n    display: inline-block;\r\n    margin-left: 20px;\r\n    padding-left: 24px;\r\n    color: #30322f;\r\n}\r\n.checkout-promise-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    padding-right: 10px;\r\n    color: #43b02a;\r\n}\r\n#line[_ngcontent-%COMP%]:before, #line[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 6px;\r\n    height: 0;\r\n    \r\n    background-color: rgb(21, 179, 55);\r\n    animation-name: lineAnimation;\r\n    position: absolute;\r\n    top: 0;\r\n    \r\n}\r\n#line[_ngcontent-%COMP%]:after {\r\n    margin-top: -5px;\r\n    margin-left: 13px;\r\n    animation: lineOne 0.5s forwards;\r\n}\r\n@keyframes lineOne {\r\n    100% {\r\n        height: 242px;\r\n    }\r\n}\r\n#supplierLine[_ngcontent-%COMP%]:before, #supplierLine[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 6px;\r\n    height: 0;\r\n    \r\n    background-color: rgb(21, 179, 55);\r\n    animation-name: lineAnimation;\r\n    position: absolute;\r\n    top: 0;\r\n    \r\n}\r\n#supplierLine[_ngcontent-%COMP%]:after {\r\n    margin-top: -35px;\r\n    margin-left: -62px;\r\n    animation: lineTwo 0.5s forwards;\r\n}\r\n@keyframes lineTwo {\r\n    100% {\r\n        height: 475px;\r\n    }\r\n}\r\n#customerPartyLine[_ngcontent-%COMP%]:before, #customerPartyLine[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 6px;\r\n    height: 0;\r\n    \r\n    background-color: rgb(21, 179, 55);\r\n    animation-name: lineAnimation;\r\n    position: absolute;\r\n    top: 0;\r\n    \r\n}\r\n#customerPartyLine[_ngcontent-%COMP%]:after {\r\n    margin-top: -35px;\r\n    margin-left: -48px;\r\n    animation: lineThree 0.5s forwards;\r\n}\r\n@keyframes lineThree {\r\n    100% {\r\n        height: 456px;\r\n    }\r\n}\r\n#paymentLine[_ngcontent-%COMP%]:before, #paymentLine[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    width: 6px;\r\n    height: 0;\r\n    \r\n    background-color: rgb(21, 179, 55);\r\n    animation-name: lineAnimation;\r\n    position: absolute;\r\n    top: 0;\r\n    \r\n}\r\n#paymentLine[_ngcontent-%COMP%]:after {\r\n    margin-top: -5px;\r\n    margin-left: 13px;\r\n    animation: lineFour 0.5s forwards;\r\n}\r\n@keyframes lineFour {\r\n    100% {\r\n        height: 248px;\r\n    }\r\n}\r\n\r\n\r\ninput.ng-touched.ng-invalid[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n    box-shadow: 0 0 13px inset rgba(255, 0, 0, 0.2);\r\n}\r\nselect.ng-touched.ng-invalid[_ngcontent-%COMP%] {\r\n    border: 1px solid red;\r\n    box-shadow: 0 0 13px inset rgba(255, 0, 0, 0.2);\r\n}\r\n.valid[_ngcontent-%COMP%] {\r\n    color: yellow;\r\n    \r\n}\r\n.invalid[_ngcontent-%COMP%] {\r\n    \r\n    background-color: rgb(226, 223, 8);\r\n}\r\n.green[_ngcontent-%COMP%] {\r\n    background-color: green;\r\n}\r\n.red[_ngcontent-%COMP%] {\r\n    background-color: red;\r\n}\r\n@media (max-width: 768px) {\r\n    #line[_ngcontent-%COMP%]:before, #line[_ngcontent-%COMP%]:after {\r\n        content: \"\";\r\n        width: 6px;\r\n        height: 0;\r\n        \r\n        background-color: rgb(21, 179, 55);\r\n        animation-name: lineAnimation;\r\n        position: absolute;\r\n        top: 0;\r\n        \r\n    }\r\n\r\n    #line[_ngcontent-%COMP%]:after {\r\n        margin-top: -5px;\r\n        margin-left: 13px;\r\n        animation: lineOne 0.5s forwards;\r\n    }\r\n\r\n    @keyframes lineOne {\r\n        100% {\r\n            height: 318px;\r\n        }\r\n    }\r\n\r\n    @keyframes lineTwo {\r\n        100% {\r\n            height: 679px;\r\n        }\r\n    }\r\n\r\n    @keyframes lineThree {\r\n        100% {\r\n            height: 820px;\r\n        }\r\n    }\r\n    @keyframes lineFour {\r\n        100% {\r\n            height: 430px;\r\n        }\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWludm9pY2UvY3JlYXRlLWludm9pY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCOztJQUV6QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0QztBQUNBOztJQUVJLGtCQUFrQjtJQUNsQixRQUFRO0lBRVIsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtJ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QjtJQUNqQixpQ0FBaUM7QUFDckM7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0NHO0FBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0JHO0FBRUg7SUFDSSxxQkFBcUI7SUFDckIsK0NBQStDO0FBQ25EO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsK0NBQStDO0FBQ25EO0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0FBQzNDO0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0NBQWtDO0FBQ3RDO0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0k7O1FBRUksV0FBVztRQUNYLFVBQVU7UUFDVixTQUFTO1FBQ1Qsa0NBQWtDO1FBQ2xDLGtDQUFrQztRQUNsQyw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixtQ0FBbUM7SUFDdkM7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGdDQUFnQztJQUNwQzs7SUFFQTtRQUNJO1lBQ0ksYUFBYTtRQUNqQjtJQUNKOztJQUVBO1FBQ0k7WUFDSSxhQUFhO1FBQ2pCO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLGFBQWE7UUFDakI7SUFDSjtJQUNBO1FBQ0k7WUFDSSxhQUFhO1FBQ2pCO0lBQ0o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS1pbnZvaWNlL2NyZWF0ZS1pbnZvaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmJmYTtcclxufVxyXG4uY2hlY2tvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVmZTk7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5wYW5lbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLmNoZWNrb3V0LXN0ZXAge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGRlZGU7XHJcbiAgICBjb2xvcjogIzg4MTcxNztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jaGVja291dC1zdGVwLW51bWJlciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNnB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbn1cclxuLmNoZWNrb3V0LXN0ZXAtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmNoZWNvdXQtYWRkcmVzcy1zdGVwIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNoZWNrb3V0LXN0ZXAtYm9keSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxufVxyXG5cclxuLmNoZWNrb3V0LXN0ZXAtYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jaGVja291dC1zdGVwLWRpc2FibGVkIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxvZ2luLXBob25lIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubG9naW4tcGhvbmU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCIrOTEgLSBcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxlZnQ6IDM2cHg7XHJcbn1cclxuLmxvZ2luLXBob25lOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMTRweC8xIEZvbnRBd2Vzb21lO1xyXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuLmxvZ2luLXBob25lOmFmdGVyLFxyXG4ubG9naW4tcGhvbmU6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuLmxvZ2luLXBob25lIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA2OHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jaGVja291dC1sb2dpbiAuYnRuIHtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbn1cclxuXHJcbi5vdHAtdmVyaWZhY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG4uY2hlY2tvdXQtc2lkZWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWZlOTtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5jaGVja291dC1zaWRlYmFyLW1lcmNoYW50LWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWZlOTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLmNoZWNrb3V0LXRvdGFsIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlZmU5O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jaGVja291dC1pbnZvaWNlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jaGVjb3V0LWludm9pY2UtdGl0bGUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogIzMwMzIyZjtcclxufVxyXG4uY2hlY291dC1pbnZvaWNlLXByaWNlIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjMzAzMjJmO1xyXG59XHJcbi5jaGVja291dC1jaGFyZ2VzIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jaGVjb3V0LWNoYXJnZXMtdGl0bGUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNoZWNvdXQtY2hhcmdlcy1wcmljZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmNoYXJnZXMtZnJlZSB7XHJcbiAgICBjb2xvcjogIzQzYjAyYTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmNoZWNrb3V0LXBheWFibGUge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG4uY2hlY2tvdXQtcGF5YWJsZS10aXRsZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY2hlY2tvdXQtcGF5YWJsZS1wcmljZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jaGVja291dC1jYXJ0LW1lcmNoYW50LWJveCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWZlOTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jaGVja291dC1jYXJ0LW1lcmNoYW50LW5hbWUge1xyXG4gICAgY29sb3I6ICMzMDMyMmY7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY2hlY2tvdXQtY2FydC1tZXJjaGFudC1pdGVtIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjMzAzMjJmO1xyXG59XHJcbi5jaGVja291dC1jYXJ0LXByb2R1Y3RzIC5jaGVja291dC1jaGFyZ2VzIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi5jaGVja291dC1jYXJ0LWl0ZW0ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVmZTk7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY2hlY2tvdXQtaXRlbS1jb3VudCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY2hlY2tvdXQtaXRlbS1pbWcge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY2hlY2tvdXQtaXRlbS1uYW1lLWJveCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uY2hlY2tvdXQtaXRlbS10aXRsZSB7XHJcbiAgICBjb2xvcjogIzMwMzIyZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uY2hlY2tvdXQtaXRlbS1wcmljZSB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzMwMzIyZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jaGVja291dC12aWV3bW9yZS1idG4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRlci1jaGVja291dC1pdGVtIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmNoZWNrb3V0LXByb21pc2UtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxNHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzMwMzIyZjtcclxufVxyXG4uY2hlY2tvdXQtcHJvbWlzZS1pdGVtIGkge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIGNvbG9yOiAjNDNiMDJhO1xyXG59XHJcblxyXG4jbGluZTpiZWZvcmUsXHJcbiNsaW5lOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgLyogYmFja2dyb3VuZDogcmdiKDIxNCwgMjQsIDI0KTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMTc5LCA1NSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbGluZUFuaW1hdGlvbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIC8qIGFuaW1hdGlvbjogbGluZXVwIDNzIGZvcndhcmRzOyAqL1xyXG59XHJcblxyXG4jbGluZTphZnRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcbiAgICBhbmltYXRpb246IGxpbmVPbmUgMC41cyBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBsaW5lT25lIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIGhlaWdodDogMjQycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNzdXBwbGllckxpbmU6YmVmb3JlLFxyXG4jc3VwcGxpZXJMaW5lOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgLyogYmFja2dyb3VuZDogcmdiKDIxNCwgMjQsIDI0KTsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMTc5LCA1NSk7XHJcbiAgICBhbmltYXRpb24tbmFtZTogbGluZUFuaW1hdGlvbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIC8qIGFuaW1hdGlvbjogbGluZXVwIDNzIGZvcndhcmRzOyAqL1xyXG59XHJcblxyXG4jc3VwcGxpZXJMaW5lOmFmdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02MnB4O1xyXG4gICAgYW5pbWF0aW9uOiBsaW5lVHdvIDAuNXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGluZVR3byB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBoZWlnaHQ6IDQ3NXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4jY3VzdG9tZXJQYXJ0eUxpbmU6YmVmb3JlLFxyXG4jY3VzdG9tZXJQYXJ0eUxpbmU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiByZ2IoMjE0LCAyNCwgMjQpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCAxNzksIDU1KTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBsaW5lQW5pbWF0aW9uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgLyogYW5pbWF0aW9uOiBsaW5ldXAgM3MgZm9yd2FyZHM7ICovXHJcbn1cclxuXHJcbiNjdXN0b21lclBhcnR5TGluZTphZnRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDhweDtcclxuICAgIGFuaW1hdGlvbjogbGluZVRocmVlIDAuNXMgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGluZVRocmVlIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAgIGhlaWdodDogNDU2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNwYXltZW50TGluZTpiZWZvcmUsXHJcbiNwYXltZW50TGluZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIC8qIGJhY2tncm91bmQ6IHJnYigyMTQsIDI0LCAyNCk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjEsIDE3OSwgNTUpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxpbmVBbmltYXRpb247XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAvKiBhbmltYXRpb246IGxpbmV1cCAzcyBmb3J3YXJkczsgKi9cclxufVxyXG5cclxuI3BheW1lbnRMaW5lOmFmdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTNweDtcclxuICAgIGFuaW1hdGlvbjogbGluZUZvdXIgMC41cyBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBsaW5lRm91ciB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBoZWlnaHQ6IDI0OHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiAuY29udGFpbmVyT25le1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgNzEsIDEzOCk7XHJcbn1cclxuLmJveHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNDYsIDU1LCA1NSk7XHJcbiAgICB3aWR0aDoyNTBweDtcclxuICAgIGhlaWdodDoyNTBweDtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGxpbmVBbmltYXRpb247XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246MnM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxpbmVBbmltYXRpb24ge1xyXG4gICAgMCV7XHJcbiAgICAgICAgdG9wOjBweDtcclxuICAgICAgICBsZWZ0OjBweDtcclxuICAgIH1cclxuICAgIDI1JXtcclxuICAgICAgICB0b3A6MjUwcHg7XHJcbiAgICAgICAgbGVmdDowcHg7XHJcbiAgICB9XHJcbiAgICA3NSV7XHJcbiAgICAgICAgdG9wOjI1MHB4O1xyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICB0b3A6MHB4O1xyXG4gICAgICAgIGxlZnQ6MHB4O1xyXG4gICAgfVxyXG59ICovXHJcblxyXG4vKiAucG9pbnQtZG93bi1leGFtcGxle1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDo1MHZ3O1xyXG4gICAgYW5pbWF0aW9uOiBkcmF3LWxpbmUgMTBzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZSA6IGZvcndhcmRzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRyYXctbGluZXtcclxuICAgIDAle1xyXG4gICAgICAgIGhlaWdodDoxMDtcclxuICAgIH1cclxuICAgIDUwJXtcclxuICAgICAgICBib3JkZXItbGVmdDoxcHggc29saWQgYmx1ZTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxufSAqL1xyXG5cclxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxM3B4IGluc2V0IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5zZWxlY3QubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxM3B4IGluc2V0IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4udmFsaWQge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYig5MiwgMjgsIDI4KTsgKi9cclxufVxyXG5cclxuLmludmFsaWQge1xyXG4gICAgLyogY29sb3I6cmdiKDEzNiwgMzYsIDEwNik7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMjMsIDgpO1xyXG59XHJcblxyXG4uZ3JlZW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICNsaW5lOmJlZm9yZSxcclxuICAgICNsaW5lOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHdpZHRoOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIC8qIGJhY2tncm91bmQ6IHJnYigyMTQsIDI0LCAyNCk7ICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxLCAxNzksIDU1KTtcclxuICAgICAgICBhbmltYXRpb24tbmFtZTogbGluZUFuaW1hdGlvbjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIC8qIGFuaW1hdGlvbjogbGluZXVwIDNzIGZvcndhcmRzOyAqL1xyXG4gICAgfVxyXG5cclxuICAgICNsaW5lOmFmdGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgICAgIGFuaW1hdGlvbjogbGluZU9uZSAwLjVzIGZvcndhcmRzO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgbGluZU9uZSB7XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgbGluZVR3byB7XHJcbiAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjc5cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgbGluZVRocmVlIHtcclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGxpbmVGb3VyIHtcclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateInvoiceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-invoice',
                templateUrl: './create-invoice.component.html',
                styleUrls: ['./create-invoice.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _services_user_invoice_service__WEBPACK_IMPORTED_MODULE_5__["UserInvoiceService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/download-invoicee/download-invoicee.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/download-invoicee/download-invoicee.component.ts ***!
  \******************************************************************/
/*! exports provided: DownloadInvoiceeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadInvoiceeComponent", function() { return DownloadInvoiceeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DownloadInvoiceeComponent {
    constructor() { }
    ngOnInit() {
    }
}
DownloadInvoiceeComponent.ɵfac = function DownloadInvoiceeComponent_Factory(t) { return new (t || DownloadInvoiceeComponent)(); };
DownloadInvoiceeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DownloadInvoiceeComponent, selectors: [["app-download-invoicee"]], decls: 122, vars: 0, consts: [["lang", "en"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [1, "container"], [1, "row"], [1, "col-md-1"], [1, "col-md-4"], [1, "card10007"], [1, "card10007Header"], [1, "badge", "bg-warning", "text-dark"], [1, "col-md-6"], [1, "invoiceRow"], [1, "col-md-7"], [1, "col-md-5", "invoiceSent"], [1, "badge", "bg-success"], [1, "col-md-5"], [1, "badge", "bg-warning", "text-dark", "expiredSince18Days"], [1, "col-md-6", "totalDue"], [1, "col-md-8"], [1, "col-md-2"], [1, "col-md-2", "buttonsColumn"], [1, "btn", "btn-outline-primary", "btn-block"], [1, "col-6"], ["src", "../../assets/pdfImage.png"]], template: function DownloadInvoiceeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Download Invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "invoice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "due");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " 10007 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " poorna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 12-07-2021 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " \u20AC20.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u20AC20.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " expired Since 18 Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Invoicecustomer invoice data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " invoice Sent ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Monday, July 12, 2021(18 days ago) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " expired Since 18 Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " 5 Poorna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Total(excl) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Due ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " \u20AC20.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " \u20AC20.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " \u20AC20.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " VAT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " 8020 sales of exports outside the EU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " high ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " \u20AC20.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " \u20AC20.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Send ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " memory ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " registerPayment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " modify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " copy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " remove ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{margin-top:3vh}.invoiceRow[_ngcontent-%COMP%] { background-color:#f4f4f4;margin-top:3vh;padding:2vh;border:1px solid gray } .buttonsColumn[_ngcontent-%COMP%]{margin-top:3vh}", "@media (max-width:770px) {\n\n            .invoiceRow[_ngcontent-%COMP%] {\n                background-color: rgb(255, 255, 255);\n            }\n\n            .card10007[_ngcontent-%COMP%] {\n                width: 50vw;\n                position: absolute;\n                top: 9vh;\n                left: 40%;\n                background-color: rgb(255, 255, 255);\n            }\n\n            .invoiceSent[_ngcontent-%COMP%] {\n                position: absolute;\n                top: 22vh;\n            }\n\n            .expiredSince18Days[_ngcontent-%COMP%] {\n                position: absolute;\n                top: 15vh;\n                left: 30vw;\n            }\n\n            .totalDue[_ngcontent-%COMP%] {\n                display: flex;\n            }\n        }\n\n        \n        @media (max-width:415px) {\n            \n            .invoiceRow[_ngcontent-%COMP%] {\n                \n            }\n            .card10007Header[_ngcontent-%COMP%]{\n                \n                \n            }\n            .card10007[_ngcontent-%COMP%]{\n                border:1px solid white;\n                margin-top:2vh;\n            }\n            .invoiceSent[_ngcontent-%COMP%]{\n                margin-top:30px;\n                color:white;\n            }\n\n            .expiredSince18Days[_ngcontent-%COMP%]{\n                color:white;\n                margin-top:-7px;\n            }\n            \n        }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DownloadInvoiceeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-download-invoicee',
                templateUrl: './download-invoicee.component.html',
                styles: ['.container{margin-top:3vh}.invoiceRow { background-color:#f4f4f4;margin-top:3vh;padding:2vh;border:1px solid gray } .buttonsColumn{margin-top:3vh}']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");



class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "navbar-laravel", "text-center", 2, "background-color", "#3f51b5", "box-shadow", "0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)", "text-align", "center", "color", "white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/invoice-data/invoice-data.component.ts":
/*!********************************************************!*\
  !*** ./src/app/invoice-data/invoice-data.component.ts ***!
  \********************************************************/
/*! exports provided: InvoiceDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceDataComponent", function() { return InvoiceDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function InvoiceDataComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("        ", ctx_r0.rawdata, "\n      ");
} }
class InvoiceDataComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    onSelectFile(files) {
        ;
        this.fileToUpload = true;
        if (files.length === 0) {
            return;
        }
        let fileToUpload = files[0];
        const formData = new FormData();
        formData.append('file', fileToUpload, fileToUpload.name);
        this.fileData = formData;
    }
    submitInvoice() {
        ;
        let opt = { responseType: 'text' };
        this.http.post('https://einvoiceservice-dev.azurewebsites.net/api/InvoiceService/upload', this.fileData, opt).subscribe(data => {
            ;
            this.viewRawData = true;
            this.rawdata = data;
        });
    }
}
InvoiceDataComponent.ɵfac = function InvoiceDataComponent_Factory(t) { return new (t || InvoiceDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
InvoiceDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvoiceDataComponent, selectors: [["app-invoice-data"]], decls: 16, vars: 1, consts: [[1, "row"], [1, "col-md-3"], ["type", "file", "id", "myFile", "name", "filename", 1, "form-control", 3, "change"], [1, "btn", "btn-info", "col-lg-8", 2, "cursor", "pointer", 3, "click"], ["class", "card col-md-12", 4, "ngIf"], [1, "card", "col-md-12"], ["type", "textarea", "id", "txtrawdata", "rows", "30", 1, "form-control", "text-light", "bg-dark"]], template: function InvoiceDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InvoiceDataComponent_Template_input_change_8_listener($event) { return ctx.onSelectFile($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvoiceDataComponent_Template_button_click_10_listener() { return ctx.submitInvoice(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, InvoiceDataComponent_div_15_Template, 3, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.viewRawData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvoiceDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-invoice-data',
                templateUrl: './invoice-data.component.html',
                styles: []
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function MainNavComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Invoice-data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainNavComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        if (this.auth.isAuthenticated$) {
            console.log("is authenticated");
        }
        else {
            console.log("is not authenticated");
        }
        console.log(this.auth.isAuthenticated$);
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["app-main-nav"]], decls: 5, vars: 6, consts: [[1, "navbar-nav", "mr-auto"], ["class", "nav-item", "style", "margin-top: 10px;margin-left: 50px;", 4, "ngIf"], ["class", "nav-item", "style", "margin-top: 10px;margin-left: 4px;", 4, "ngIf"], [1, "nav-item", 2, "margin-top", "10px", "margin-left", "50px"], ["routerLink", "/create-invoice", "routerLinkActive", "router-link-exact-active", 1, "nav-link"], [2, "font-size", "medium"], [1, "nav-item", 2, "margin-top", "10px", "margin-left", "4px"], ["routerLink", "/invoice-data", "routerLinkActive", "router-link-exact-active", 1, "nav-link"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainNavComponent_div_1_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainNavComponent_div_3_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx.auth.isAuthenticated$) == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, ctx.auth.isAuthenticated$) == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\r\n    flex: 1;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLE9BQU87RUFDVCIsImZpbGUiOiJzcmMvYXBwL21haW4tbmF2L21haW4tbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-nav',
                templateUrl: './main-nav.component.html',
                styleUrls: ['./main-nav.component.css'],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular5-social-login */ "./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var angular5_social_login__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular5_social_login__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var msal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! msal */ "./node_modules/msal/lib-es6/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/facebook-login/facebook-login.component */ "./src/app/components/facebook-login/facebook-login.component.ts");
/* harmony import */ var _components_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/google-login/google-login.component */ "./src/app/components/google-login/google-login.component.ts");









class MainPageComponent {
    constructor(socialAuthService, router, http, route) {
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.authorized = false;
        this.href = "";
        const microsoftconfig = {
            auth: {
                clientId: 'e81a2dce-2935-4505-b149-97cbd9723ec6'
            }
        };
        this.userAgentApplicationforMicrosoft = new msal__WEBPACK_IMPORTED_MODULE_2__["UserAgentApplication"](microsoftconfig);
    }
    ngOnInit() {
    }
    tokenReceivedCallback(errorDesc, token, error, tokenType) {
        if (token) {
            this.userData = token;
            console.log("Token: " + token);
        }
        else {
            console.log(error + ":" + errorDesc);
        }
    }
    microsoftSignInn() {
        var graphScopes = ["user.read", "mail.send"];
        let that = this;
        that.userAgentApplicationforMicrosoft.loginPopup(graphScopes).then((idToken) => {
            //Login Success
            this.name = idToken.account.name;
            this.useremail = idToken.account.userName;
            this.router.navigate(['/create-invoice'], { queryParams: { name: idToken.account.userName } });
        }, function (error) {
            //login failure
            console.log(error);
        });
    }
    socialSignIn(socialPlatform) {
        let socialPlatformProvider;
        if (socialPlatform == "facebook") {
            socialPlatformProvider = angular5_social_login__WEBPACK_IMPORTED_MODULE_1__["FacebookLoginProvider"].PROVIDER_ID;
        }
        else if (socialPlatform == "google") {
            socialPlatformProvider = angular5_social_login__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData        
            if (userData != null) {
                this.authorized = true;
                this.user = userData;
                this.useremail = userData.email;
                this.name = userData.name;
                this.router.navigate(['/create-invoice'], { queryParams: { name: userData.email } });
            }
        });
    }
    signOut() {
        this.socialAuthService.signOut();
        this.authorized = false;
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular5_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 23, vars: 0, consts: [[1, "row"], [1, "col-md-4"], [1, "col-sm-4"], [1, "btn", "btn-danger", "col-lg-5", 2, "cursor", "pointer", 3, "click"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Social login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-facebook-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-google-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainPageComponent_Template_button_click_20_listener() { return ctx.microsoftSignInn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Microsoft");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_facebook_login_facebook_login_component__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginComponent"], _components_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styles: []
            }]
    }], function () { return [{ type: angular5_social_login__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _user_image_user_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user-image/user-image.component */ "./src/app/user-image/user-image.component.ts");






class NavBarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    loginWithRedirect() {
        this.auth.loginWithRedirect({ redirect_uri: 'https://localhost:44308/callback' });
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], decls: 6, vars: 0, consts: [[1, "nav-container"], [1, "navbar", "navbar-expand-md", 2, "background-color", "#fff", "box-shadow", "0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)", "height", "70px"], [1, "container"], ["src", "data:image/png;base64,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", "height", "100px", "width", "200px"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-user-image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"], _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_3__["MainNavComponent"], _user_image_user_image_component__WEBPACK_IMPORTED_MODULE_4__["UserImageComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    justify-content: flex-start;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7RUFDN0IiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css'],
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styles: []
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/user-invoice.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/user-invoice.service.ts ***!
  \**************************************************/
/*! exports provided: UserInvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInvoiceService", function() { return UserInvoiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



// import { InvoiceDataDetails } from '../Models/invoice-data';
class UserInvoiceService {
    // API = 'https://jsonplaceholder.typicode.com/users'
    constructor(http) {
        this.http = http;
    }
}
UserInvoiceService.ɵfac = function UserInvoiceService_Factory(t) { return new (t || UserInvoiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UserInvoiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserInvoiceService, factory: UserInvoiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserInvoiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/social-login/social-login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/social-login/social-login.component.ts ***!
  \********************************************************/
/*! exports provided: SocialLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLoginComponent", function() { return SocialLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../create-invoice/create-invoice.component */ "./src/app/create-invoice/create-invoice.component.ts");






function SocialLoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-main-page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialLoginComponent_div_0_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.loginWithRedirect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Snelstart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SocialLoginComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-create-invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SocialLoginComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        if (this.auth.isAuthenticated$) {
            console.log("is authenticated");
        }
        else {
            console.log("is not authenticated");
        }
        console.log(this.auth.isAuthenticated$);
    }
    loginWithRedirect() {
        this.auth.loginWithRedirect();
    }
}
SocialLoginComponent.ɵfac = function SocialLoginComponent_Factory(t) { return new (t || SocialLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
SocialLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialLoginComponent, selectors: [["app-social-login"]], decls: 4, vars: 6, consts: [["class", "text-center", 4, "ngIf"], [4, "ngIf"], [1, "text-center"], [1, "row"], [1, "col-md-4"], [1, "col-sm-4"], [1, "btn", "btn-info", "col-lg-5", 2, "cursor", "pointer", 3, "click"]], template: function SocialLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SocialLoginComponent_div_0_Template, 9, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SocialLoginComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.auth.isAuthenticated$) == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.auth.isAuthenticated$) == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"], _create_invoice_create_invoice_component__WEBPACK_IMPORTED_MODULE_4__["CreateInvoiceComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-login',
                templateUrl: './social-login.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/user-image/user-image.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-image/user-image.component.ts ***!
  \****************************************************/
/*! exports provided: UserImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserImageComponent", function() { return UserImageComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-angular */ "./node_modules/@auth0/auth0-angular/__ivy_ngcc__/fesm2015/auth0-auth0-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







function UserImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UserImageComponent_div_0_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", user_r1.picture, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class UserImageComponent {
    constructor(auth, doc, activatedroute) {
        this.auth = auth;
        this.doc = doc;
        this.activatedroute = activatedroute;
        this.profileJson = null;
        this.activatedroute.queryParams.subscribe(data => {
            this.username = data.name;
        });
    }
    ngOnInit() {
    }
    logout() {
        this.auth.logout({ returnTo: this.doc.location.origin });
    }
    profile() {
        this.auth.user$.subscribe((profile) => (this.profileJson = JSON.stringify(profile, null, 2)));
    }
}
UserImageComponent.ɵfac = function UserImageComponent_Factory(t) { return new (t || UserImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
UserImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserImageComponent, selectors: [["app-user-image"]], decls: 2, vars: 3, consts: [["class", "dropdown", 4, "ngIf"], [1, "dropdown"], ["type", "button", "id", "menu1", "data-toggle", "dropdown", 1, "btn", "btn-default", "dropdown-toggle"], ["alt", "User's Profile Picture", 1, "rounded-circle", "img-fluid", "profile-picture", 2, "width", "50px", "margin-left", "10px", 3, "src"], [1, "caret"], ["role", "menu", "aria-labelledby", "menu1", 1, "dropdown-menu"], ["role", "presentation"], ["href", "", "routerLinkActive", "router-link-exact-active", 1, "nav-link", 3, "click"]], template: function UserImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserImageComponent_div_0_Template, 8, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.auth.user$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-image',
                templateUrl: './user-image.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth0_auth0_angular__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _auth_config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../auth_config.json */ "./auth_config.json");
var _auth_config_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../auth_config.json */ "./auth_config.json", 1);

const environment = {
    production: false,
    auth: {
        domain: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__["domain"],
        clientId: _auth_config_json__WEBPACK_IMPORTED_MODULE_0__["clientId"],
        redirectUri: window.location.origin,
    },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\snelstart_M\checkpoint2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map