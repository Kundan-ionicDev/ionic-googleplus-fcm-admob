(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginsucess-loginsucess-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/loginsucess/loginsucess.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/loginsucess/loginsucess.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content *ngIf='userReady'>\n    <ion-card>\n      <ion-img [src]=\"user.picture\"></ion-img>\n      <ion-card-header>\n        <ion-card-title>{{user.name}}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>{{user.email}}</p>\n      </ion-card-content>\n      <ion-button expand=\"block\" (click)=\"doGoogleLogout()\">Log Out</ion-button>\n    </ion-card>\n  </ion-content>"

/***/ }),

/***/ "./src/app/loginsucess/loginsucess.module.ts":
/*!***************************************************!*\
  !*** ./src/app/loginsucess/loginsucess.module.ts ***!
  \***************************************************/
/*! exports provided: LoginsucessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginsucessPageModule", function() { return LoginsucessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loginsucess_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginsucess.page */ "./src/app/loginsucess/loginsucess.page.ts");







const routes = [
    {
        path: '',
        component: _loginsucess_page__WEBPACK_IMPORTED_MODULE_6__["LoginsucessPage"]
    }
];
let LoginsucessPageModule = class LoginsucessPageModule {
};
LoginsucessPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_loginsucess_page__WEBPACK_IMPORTED_MODULE_6__["LoginsucessPage"]]
    })
], LoginsucessPageModule);



/***/ }),

/***/ "./src/app/loginsucess/loginsucess.page.scss":
/*!***************************************************!*\
  !*** ./src/app/loginsucess/loginsucess.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luc3VjZXNzL2xvZ2luc3VjZXNzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/loginsucess/loginsucess.page.ts":
/*!*************************************************!*\
  !*** ./src/app/loginsucess/loginsucess.page.ts ***!
  \*************************************************/
/*! exports provided: LoginsucessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginsucessPage", function() { return LoginsucessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/native-storage/ngx */ "./node_modules/@ionic-native/native-storage/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LoginsucessPage = class LoginsucessPage {
    constructor(googlePlus, nativeStorage, loadingController, router) {
        this.googlePlus = googlePlus;
        this.nativeStorage = nativeStorage;
        this.loadingController = loadingController;
        this.router = router;
        this.userReady = false;
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Please wait...'
            });
            yield loading.present();
            this.nativeStorage.getItem('google_user')
                .then(data => {
                this.user = {
                    name: data.name,
                    email: data.email,
                    picture: data.picture,
                };
                this.userReady = true;
            }, error => {
                alert(error);
            });
            // alert('this.user' + JSON.stringify(this.user));
            yield loading.onDidDismiss();
        });
    }
    doGoogleLogout() {
        this.googlePlus.logout()
            .then(res => {
            //user logged out so we will remove him from the NativeStorage
            this.nativeStorage.remove('google_user');
            this.router.navigate(["home"]);
        }, err => {
            console.log(err);
        });
    }
};
LoginsucessPage.ctorParameters = () => [
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"] },
    { type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LoginsucessPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginsucess',
        template: __webpack_require__(/*! raw-loader!./loginsucess.page.html */ "./node_modules/raw-loader/index.js!./src/app/loginsucess/loginsucess.page.html"),
        styles: [__webpack_require__(/*! ./loginsucess.page.scss */ "./src/app/loginsucess/loginsucess.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"],
        _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_3__["NativeStorage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], LoginsucessPage);



/***/ })

}]);
//# sourceMappingURL=loginsucess-loginsucess-module-es2015.js.map