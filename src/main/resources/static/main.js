(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

    /***/ "+zxD":
    /*!*************************************************************!*\
      !*** ./src/app/news/news-article/news-article.component.ts ***!
      \*************************************************************/
    /*! exports provided: NewsArticleComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NewsArticleComponent", function () {
            return NewsArticleComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news.service */ "sffY");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


        const _c0 = ["newsForm"];

        function NewsArticleComponent_div_2_Template(rf, ctx) {
            if (rf & 1) {
                const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Go to article");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " | ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsArticleComponent_div_2_Template_button_click_8_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
                    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                    return ctx_r2.onEditArticle();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Edit article ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.newsArticle.title);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.newsArticle.summary);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.newsArticle.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
            }
        }

        function NewsArticleComponent_div_3_Template(rf, ctx) {
            if (rf & 1) {
                const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8, 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewsArticleComponent_div_3_Template_form_ngSubmit_1_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
                    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                    return ctx_r5.onSubmit();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "textarea", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "        ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Submit changes ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " | ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewsArticleComponent_div_3_Template_button_click_11_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
                    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                    return ctx_r7.onAbortEdit();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Abort changes ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.tempTitle);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.tempSummary);
            }
        }

        class NewsArticleComponent {
            constructor(newsService) {
                this.newsService = newsService;
                this.isBeingEdited = false;
            }

            ngOnInit() {
            }

            onEditArticle() {
                this.isBeingEdited = true;
                this.tempTitle = this.newsArticle.title;
                this.tempSummary = this.newsArticle.summary;
            }

            onSubmit() {
                this.newsArticle.title = this.newsForm.value.title;
                this.newsArticle.summary = this.newsForm.value.summary;
                this.newsService.modifyNews(this.newsArticle);
                this.isBeingEdited = false;
            }

            onAbortEdit() {
                this.newsForm.reset();
                this.isBeingEdited = false;
            }
        }

        NewsArticleComponent.ɵfac = function NewsArticleComponent_Factory(t) {
            return new (t || NewsArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]));
        };
        NewsArticleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: NewsArticleComponent,
            selectors: [["app-news-article"]],
            viewQuery: function NewsArticleComponent_Query(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
                }
                if (rf & 2) {
                    var _t;
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newsForm = _t.first);
                }
            },
            inputs: {newsArticle: "newsArticle"},
            decls: 5,
            vars: 3,
            consts: [[1, "card", 2, "width", "50rem"], ["alt", "news-image", 1, "card-img-top", 2, "max-height", "300px", 3, "src"], ["class", "card-body", 4, "ngIf"], [1, "card-body"], [1, "card-title"], [1, "card-text"], ["target", "_blank", 1, "btn", "btn-primary", 3, "href"], [1, "btn", "btn-success", 3, "click"], [3, "ngSubmit"], ["newsForm", "ngForm"], [1, "form-group"], ["type", "text", "name", "title", 1, "form-control", 3, "ngModel"], ["type", "", "name", "summary", 1, "form-control", 3, "ngModel"], ["type", "submit", 1, "btn", "btn-primary"], [1, "btn", "btn-warning", 3, "click"]],
            template: function NewsArticleComponent_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsArticleComponent_div_2_Template, 10, 3, "div", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewsArticleComponent_div_3_Template, 13, 2, "div", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.newsArticle.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isBeingEdited);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isBeingEdited);
                }
            },
            directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
            styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy1hcnRpY2xlL25ld3MtYXJ0aWNsZS5jb21wb25lbnQuY3NzIn0= */"]
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsArticleComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-news-article',
                    templateUrl: './news-article.component.html',
                    styleUrls: ['./news-article.component.css']
                }]
            }], function () {
                return [{type: _news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]}];
            }, {
                newsArticle: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
                }], newsForm: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
                    args: ['newsForm']
                }]
            });
        })();


        /***/
    }),

    /***/ 0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(/*! /Users/Hubson/IdeaProjects/KursSpringBoot/praca-domowa-7/src/main/frontend/src/main.ts */"zUnb");


        /***/
    }),

    /***/ "AMoA":
    /*!**************************************!*\
      !*** ./src/app/cars/cars.service.ts ***!
      \**************************************/
    /*! exports provided: CarsService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CarsService", function () {
            return CarsService;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");


        class CarsService {
            constructor(http) {
                this.http = http;
                this.cars = [];
                this.statusChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
            }

            createCar(carData) {
                const newCar = {
                    model: carData.model,
                    brand: carData.brand,
                    color: carData.color,
                    productionYear: carData.productionYear
                };
                return this.http
                    .post('http://localhost:8080/cars', newCar);
            }

            getCars() {
                return this.http.get('http://localhost:8080/cars')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(responseData => {
                        this.cars = responseData;
                        return this.cars;
                    }));
            }

            getCarsFromYearScope(fromYear, toYear) {
                let searchParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
                searchParams = searchParams.append('from', fromYear);
                searchParams = searchParams.append('to', toYear);
                return this.http.get('http://localhost:8080/cars/filterByYear', {
                    params: searchParams
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(responseData => {
                        this.cars = responseData;
                        return this.cars;
                    }));
            }
        }

        CarsService.ɵfac = function CarsService_Factory(t) {
            return new (t || CarsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
        };
        CarsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
            token: CarsService,
            factory: CarsService.ɵfac,
            providedIn: 'root'
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarsService, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [{
                    providedIn: 'root'
                }]
            }], function () {
                return [{type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/
    /*! exports provided: environment */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "environment", function () {
            return environment;
        });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
        const environment = {
            production: false
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
    }),

    /***/ "EKko":
    /*!****************************************!*\
      !*** ./src/app/cars/cars.component.ts ***!
      \****************************************/
    /*! exports provided: CarsComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CarsComponent", function () {
            return CarsComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var _cars_search_cars_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cars-search/cars-search.component */ "R32B");
        /* harmony import */
        var _cars_add_cars_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cars-add/cars-add.component */ "ZdAn");
        /* harmony import */
        var _cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cars-list/cars-list.component */ "Sm13");


        class CarsComponent {
            constructor() {
            }

            ngOnInit() {
            }
        }

        CarsComponent.ɵfac = function CarsComponent_Factory(t) {
            return new (t || CarsComponent)();
        };
        CarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: CarsComponent,
            selectors: [["app-cars"]],
            decls: 7,
            vars: 0,
            consts: [[1, "row"], [1, "col", "col-md-4"], [1, "col", "col-md-offset-2", "col-sm-6"]],
            template: function CarsComponent_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cars-search");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cars-add");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-cars-list");
                }
            },
            directives: [_cars_search_cars_search_component__WEBPACK_IMPORTED_MODULE_1__["CarsSearchComponent"], _cars_add_cars_add_component__WEBPACK_IMPORTED_MODULE_2__["CarsAddComponent"], _cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_3__["CarsListComponent"]],
            styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnMvY2Fycy5jb21wb25lbnQuY3NzIn0= */"]
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarsComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-cars',
                    templateUrl: './cars.component.html',
                    styleUrls: ['./cars.component.css']
                }]
            }], function () {
                return [];
            }, null);
        })();


        /***/
    }),

    /***/ "R32B":
    /*!***********************************************************!*\
      !*** ./src/app/cars/cars-search/cars-search.component.ts ***!
      \***********************************************************/
    /*! exports provided: CarsSearchComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CarsSearchComponent", function () {
            return CarsSearchComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var _cars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cars.service */ "AMoA");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


        class CarsSearchComponent {
            constructor(carService) {
                this.carService = carService;
                this.fromYear = '';
                this.toYear = '';
            }

            ngOnInit() {
            }

            onFilter(filterParams) {
                this.carService.getCarsFromYearScope(filterParams['fromYear'], filterParams['toYear'])
                    .subscribe(responseData => {
                        this.carService.statusChanged.emit(responseData);
                    });
            }

            onClearFilter() {
                this.carService.getCars()
                    .subscribe(responseData => {
                        this.carService.statusChanged.emit(responseData);
                        this.fromYear = '';
                        this.toYear = '';
                    });
            }
        }

        CarsSearchComponent.ɵfac = function CarsSearchComponent_Factory(t) {
            return new (t || CarsSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"]));
        };
        CarsSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: CarsSearchComponent,
            selectors: [["app-cars-search"]],
            decls: 19,
            vars: 2,
            consts: [[3, "ngSubmit"], ["filterForm", "ngForm"], [1, "form-group"], ["for", "fromYear"], ["type", "text", "id", "fromYear", "required", "", "name", "fromYear", "value", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "toYear"], ["type", "text", "id", "toYear", "required", "", "name", "toYear", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-warning", 3, "click"]],
            template: function CarsSearchComponent_Template(rf, ctx) {
                if (rf & 1) {
                    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filter cars");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "by production year");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 0, 1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CarsSearchComponent_Template_form_ngSubmit_4_listener() {
                        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
                        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
                        return ctx.onFilter(_r0.value);
                    });
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 3);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "From");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 4);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsSearchComponent_Template_input_ngModelChange_9_listener($event) {
                        return ctx.fromYear = $event;
                    });
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "To");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 6);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CarsSearchComponent_Template_input_ngModelChange_13_listener($event) {
                        return ctx.toYear = $event;
                    });
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Filter ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " | ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsSearchComponent_Template_button_click_17_listener() {
                        return ctx.onClearFilter();
                    });
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Clear Filter ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fromYear);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.toYear);
                }
            },
            directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
            styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnMvY2Fycy1zZWFyY2gvY2Fycy1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"]
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarsSearchComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-cars-search',
                    templateUrl: './cars-search.component.html',
                    styleUrls: ['./cars-search.component.css']
                }]
            }], function () {
                return [{type: _cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "Sm13":
    /*!*******************************************************!*\
      !*** ./src/app/cars/cars-list/cars-list.component.ts ***!
      \*******************************************************/
    /*! exports provided: CarsListComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CarsListComponent", function () {
            return CarsListComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var _cars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cars.service */ "AMoA");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");


        function CarsListComponent_tr_19_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const car_r1 = ctx.$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r1.carId);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r1.brand);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r1.model);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r1.color);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](car_r1.productionYear);
            }
        }

        class CarsListComponent {
            constructor(carService) {
                this.carService = carService;
                this.cars = [];
            }

            ngOnInit() {
                this.onFetchCars();
                this.carService.statusChanged
                    .subscribe(data => {
                        this.cars = data;
                    });
            }

            onFetchCars() {
                this.carService.getCars()
                    .subscribe(responseData => {
                        this.cars = responseData;
                    });
            }
        }

        CarsListComponent.ɵfac = function CarsListComponent_Factory(t) {
            return new (t || CarsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"]));
        };
        CarsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: CarsListComponent,
            selectors: [["app-cars-list"]],
            decls: 20,
            vars: 1,
            consts: [[1, "btn", "btn-primary", 3, "click"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"]],
            template: function CarsListComponent_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cars table ");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsListComponent_Template_button_click_3_listener() {
                        return ctx.onFetchCars();
                    });
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Fetch Cars");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "ID");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Brand");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Model");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Color");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Produced");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CarsListComponent_tr_19_Template, 11, 5, "tr", 3);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cars);
                }
            },
            directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
            styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnMvY2Fycy1saXN0L2NhcnMtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarsListComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-cars-list',
                    templateUrl: './cars-list.component.html',
                    styleUrls: ['./cars-list.component.css']
                }]
            }], function () {
                return [{type: _cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/
    /*! exports provided: AppComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
            return AppComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


        const _c0 = function () {
            return {exact: true};
        };

        class AppComponent {
            constructor() {
                this.title = 'frontend';
            }
        }

        AppComponent.ɵfac = function AppComponent_Factory(t) {
            return new (t || AppComponent)();
        };
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: AppComponent,
            selectors: [["app-root"]],
            decls: 17,
            vars: 2,
            consts: [[1, "container"], [1, "row"], [1, "col", "col-md-10"], [1, "nav", "nav-tabs"], ["role", "presentation", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "/api/cars"], ["role", "presentation", "routerLinkActive", "active"], ["routerLink", "/api/news"]],
            template: function AppComponent_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Week 7");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 3);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cars");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "News");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                }
                if (rf & 2) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
                }
            },
            directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
            styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                }]
            }], null, null);
        })();


        /***/
    }),

    /***/ "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/
    /*! exports provided: AppModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppModule", function () {
            return AppModule;
        });
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
        /* harmony import */
        var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
        /* harmony import */
        var _cars_cars_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cars/cars.component */ "EKko");
        /* harmony import */
        var _cars_cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cars/cars-list/cars-list.component */ "Sm13");
        /* harmony import */
        var _cars_cars_add_cars_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cars/cars-add/cars-add.component */ "ZdAn");
        /* harmony import */
        var _cars_cars_search_cars_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cars/cars-search/cars-search.component */ "R32B");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
        /* harmony import */
        var _news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./news/news-list/news-list.component */ "jU7Z");
        /* harmony import */
        var _news_news_article_news_article_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./news/news-article/news-article.component */ "+zxD");


        class AppModule {
        }

        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
            type: AppModule,
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
            factory: function AppModule_Factory(t) {
                return new (t || AppModule)();
            }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ]]
        });
        (function () {
            (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _cars_cars_component__WEBPACK_IMPORTED_MODULE_4__["CarsComponent"],
                    _cars_cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_5__["CarsListComponent"],
                    _cars_cars_add_cars_add_component__WEBPACK_IMPORTED_MODULE_6__["CarsAddComponent"],
                    _cars_cars_search_cars_search_component__WEBPACK_IMPORTED_MODULE_7__["CarsSearchComponent"],
                    _news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_10__["NewsListComponent"],
                    _news_news_article_news_article_component__WEBPACK_IMPORTED_MODULE_11__["NewsArticleComponent"]],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]]
            });
        })();
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
                args: [{
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _cars_cars_component__WEBPACK_IMPORTED_MODULE_4__["CarsComponent"],
                        _cars_cars_list_cars_list_component__WEBPACK_IMPORTED_MODULE_5__["CarsListComponent"],
                        _cars_cars_add_cars_add_component__WEBPACK_IMPORTED_MODULE_6__["CarsAddComponent"],
                        _cars_cars_search_cars_search_component__WEBPACK_IMPORTED_MODULE_7__["CarsSearchComponent"],
                        _news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_10__["NewsListComponent"],
                        _news_news_article_news_article_component__WEBPACK_IMPORTED_MODULE_11__["NewsArticleComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                }]
            }], null, null);
        })();


        /***/
    }),

    /***/ "ZdAn":
    /*!*****************************************************!*\
      !*** ./src/app/cars/cars-add/cars-add.component.ts ***!
      \*****************************************************/
    /*! exports provided: CarsAddComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "CarsAddComponent", function () {
            return CarsAddComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var _cars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cars.service */ "AMoA");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
        /* harmony import */
        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


        const _c0 = ["carForm"];

        function CarsAddComponent_button_0_Template(rf, ctx) {
            if (rf & 1) {
                const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsAddComponent_button_0_Template_button_click_0_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
                    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                    return ctx_r2.onOpenAddForm();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add New Car\n");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
        }

        function CarsAddComponent_div_1_Template(rf, ctx) {
            if (rf & 1) {
                const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 3, 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CarsAddComponent_div_1_Template_form_ngSubmit_1_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
                    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                    return ctx_r6.onAddCar();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Brand");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Model");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Color");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " : ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 8, 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "red");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "blue");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "black");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "white");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Produced");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 14);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 15);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Add Car ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " | ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsAddComponent_div_1_Template_button_click_32_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
                    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                    return ctx_r8.onClearInput();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Clear Input ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " | ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarsAddComponent_div_1_Template_button_click_35_listener() {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
                    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
                    return ctx_r9.onCloseForm();
                });
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Close Form ");
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
                const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r4.valid || _r5.value == "Select color");
            }
        }

        class CarsAddComponent {
            constructor(carService) {
                this.carService = carService;
                this.car = {
                    brand: '',
                    model: '',
                    color: '',
                    productionYear: ''
                };
                this.openAddForm = false;
            }

            ngOnInit() {
            }

            onAddCar() {
                this.car.brand = this.carAddForm.value.brand;
                this.car.model = this.carAddForm.value.model;
                this.car.color = this.carAddForm.value.color;
                this.car.productionYear = this.carAddForm.value.productionYear;
                this.carService.createCar(this.car).subscribe();
                this.carService.getCars().subscribe(data => {
                    this.carService.statusChanged.emit(data);
                });
                this.carAddForm.reset();
            }

            onOpenAddForm() {
                this.openAddForm = true;
            }

            onClearInput() {
                this.carAddForm.reset();
            }

            onCloseForm() {
                this.openAddForm = false;
            }
        }

        CarsAddComponent.ɵfac = function CarsAddComponent_Factory(t) {
            return new (t || CarsAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"]));
        };
        CarsAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: CarsAddComponent,
            selectors: [["app-cars-add"]],
            viewQuery: function CarsAddComponent_Query(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
                }
                if (rf & 2) {
                    var _t;
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.carAddForm = _t.first);
                }
            },
            decls: 2,
            vars: 2,
            consts: [["class", "btn btn-block btn-primary", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-block", "btn-primary", 3, "click"], [3, "ngSubmit"], ["carForm", "ngForm"], [1, "form-group"], ["type", "text", "required", "", "ngModel", "", "name", "brand", 1, "form-control"], ["type", "text", "required", "", "ngModel", "", "name", "model", 1, "form-control"], ["ngModel", "", "name", "color", 1, "form-inline"], ["carColor", ""], ["value", "RED"], ["value", "BLUE"], ["value", "BLACK"], ["value", "WHITE"], ["type", "text", "required", "", "ngModel", "", "name", "productionYear", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["type", "button", 1, "btn", "btn-warning", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
            template: function CarsAddComponent_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarsAddComponent_button_0_Template, 2, 0, "button", 0);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CarsAddComponent_div_1_Template, 37, 1, "div", 1);
                }
                if (rf & 2) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.openAddForm);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openAddForm);
                }
            },
            directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]],
            styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnMvY2Fycy1hZGQvY2Fycy1hZGQuY29tcG9uZW50LmNzcyJ9 */"]
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarsAddComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-cars-add',
                    templateUrl: './cars-add.component.html',
                    styleUrls: ['./cars-add.component.css']
                }]
            }], function () {
                return [{type: _cars_service__WEBPACK_IMPORTED_MODULE_1__["CarsService"]}];
            }, {
                carAddForm: [{
                    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
                    args: ['carForm']
                }]
            });
        })();


        /***/
    }),

    /***/ "jU7Z":
    /*!*******************************************************!*\
      !*** ./src/app/news/news-list/news-list.component.ts ***!
      \*******************************************************/
    /*! exports provided: NewsListComponent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NewsListComponent", function () {
            return NewsListComponent;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news.service */ "sffY");
        /* harmony import */
        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
        /* harmony import */
        var _news_article_news_article_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news-article/news-article.component */ "+zxD");


        function NewsListComponent_app_news_article_0_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-news-article", 1);
            }
            if (rf & 2) {
                const newsEl_r1 = ctx.$implicit;
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("newsArticle", newsEl_r1);
            }
        }

        class NewsListComponent {
            constructor(newsService) {
                this.newsService = newsService;
                this.newsArray = [];
            }

            ngOnInit() {
                this.onFetchNews();
            }

            onFetchNews() {
                this.newsService.getNews().subscribe(response => {
                    this.newsArray = response;
                });
            }
        }

        NewsListComponent.ɵfac = function NewsListComponent_Factory(t) {
            return new (t || NewsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]));
        };
        NewsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
            type: NewsListComponent,
            selectors: [["app-news-list"]],
            decls: 1,
            vars: 1,
            consts: [[3, "newsArticle", 4, "ngFor", "ngForOf"], [3, "newsArticle"]],
            template: function NewsListComponent_Template(rf, ctx) {
                if (rf & 1) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewsListComponent_app_news_article_0_Template, 1, 1, "app-news-article", 0);
                }
                if (rf & 2) {
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.newsArray);
                }
            },
            directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _news_article_news_article_component__WEBPACK_IMPORTED_MODULE_3__["NewsArticleComponent"]],
            styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld3MvbmV3cy1saXN0L25ld3MtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsListComponent, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
                args: [{
                    selector: 'app-news-list',
                    templateUrl: './news-list.component.html',
                    styleUrls: ['./news-list.component.css']
                }]
            }], function () {
                return [{type: _news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "sffY":
    /*!**************************************!*\
      !*** ./src/app/news/news.service.ts ***!
      \**************************************/
    /*! exports provided: NewsService */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "NewsService", function () {
            return NewsService;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
        /* harmony import */
        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


        class NewsService {
            constructor(http) {
                this.http = http;
                this.newsArray = [];
            }

            getNews() {
                return this.http.get('http://localhost:8080/news')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => {
                        this.newsArray = response;
                        return this.newsArray;
                    }));
            }

            modifyNews(modifiedArticle) {
                this.http.put('http://localhost:8080/news/' + modifiedArticle.newsId, modifiedArticle).subscribe();
            }
        }

        NewsService.ɵfac = function NewsService_Factory(t) {
            return new (t || NewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
        };
        NewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
            token: NewsService,
            factory: NewsService.ɵfac,
            providedIn: 'root'
        });
        /*@__PURE__*/
        (function () {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsService, [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
                args: [{
                    providedIn: 'root'
                }]
            }], function () {
                return [{type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]}];
            }, null);
        })();


        /***/
    }),

    /***/ "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/
    /*! exports provided: AppRoutingModule */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
            return AppRoutingModule;
        });
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
        /* harmony import */
        var _cars_cars_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cars/cars.component */ "EKko");
        /* harmony import */
        var _news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/news-list/news-list.component */ "jU7Z");


        const routes = [
            {path: 'api/cars', component: _cars_cars_component__WEBPACK_IMPORTED_MODULE_2__["CarsComponent"]},
            {
                path: 'api/news',
                component: _news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_3__["NewsListComponent"]
            }
        ];

        class AppRoutingModule {
        }

        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type: AppRoutingModule});
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
            factory: function AppRoutingModule_Factory(t) {
                return new (t || AppRoutingModule)();
            },
            imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
                }]
            }], null, null);
        })();


        /***/
    }),

    /***/ "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
        /* harmony import */
        var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
        /* harmony import */
        var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
        /* harmony import */
        var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
            .catch(err => console.error(err));


        /***/
    }),

    /***/ "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

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
    })

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main.js.map
