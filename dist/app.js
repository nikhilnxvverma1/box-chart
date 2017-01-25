webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var app_module_1 = __webpack_require__(23);
	__webpack_require__(137);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var forms_1 = __webpack_require__(24);
	var http_1 = __webpack_require__(28);
	var app_component_1 = __webpack_require__(29);
	var app_routing_module_1 = __webpack_require__(31);
	var home_component_1 = __webpack_require__(62);
	var login_component_1 = __webpack_require__(101);
	var signup_component_1 = __webpack_require__(64);
	var dashboard_module_1 = __webpack_require__(103);
	var workspace_module_1 = __webpack_require__(105);
	var account_component_1 = __webpack_require__(99);
	var user_service_1 = __webpack_require__(66);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                forms_1.FormsModule,
	                http_1.HttpModule,
	                app_routing_module_1.AppRoutingModule,
	                dashboard_module_1.DashboardModule,
	                workspace_module_1.WorkspaceModule
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                home_component_1.HomeComponent,
	                login_component_1.LoginComponent,
	                signup_component_1.SignupComponent,
	                account_component_1.AccountComponent
	            ],
	            providers: [user_service_1.UserService],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 24:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v2.4.1
	 * (c) 2010-2016 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
	     true ? factory(exports, __webpack_require__(3), __webpack_require__(25), __webpack_require__(4), __webpack_require__(5), __webpack_require__(26)) :
	    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/operator/toPromise', 'rxjs/Subject', 'rxjs/Observable', 'rxjs/observable/fromPromise'], factory) :
	    (factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable.prototype,global.Rx,global.Rx,global.Rx.Observable));
	}(this, function (exports,_angular_core,rxjs_operator_toPromise,rxjs_Subject,rxjs_Observable,rxjs_observable_fromPromise) { 'use strict';
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     *  Base class for control directives.
	      * *
	      * Only used internally in the forms module.
	      * *
	     * @abstract
	     */
	    var AbstractControlDirective = (function () {
	        function AbstractControlDirective() {
	        }
	        Object.defineProperty(AbstractControlDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { throw new Error('unimplemented'); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "value", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.value : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.valid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.invalid : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.pending : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.errors : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.pristine : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.dirty : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.touched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.untouched : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.disabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.enabled : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.statusChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.control ? this.control.valueChanges : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.reset = function (value) {
	            if (value === void 0) { value = undefined; }
	            if (this.control)
	                this.control.reset(value);
	        };
	        /**
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.hasError(errorCode, path) : false;
	        };
	        /**
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControlDirective.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return this.control ? this.control.getError(errorCode, path) : null;
	        };
	        return AbstractControlDirective;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$1 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  A directive that contains multiple {@link NgControl}s.
	      * *
	      * Only used by the forms module.
	      * *
	     */
	    var ControlContainer = (function (_super) {
	        __extends$1(ControlContainer, _super);
	        function ControlContainer() {
	            _super.apply(this, arguments);
	        }
	        Object.defineProperty(ControlContainer.prototype, "formDirective", {
	            /**
	             *  Get the form to which this container belongs.
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(ControlContainer.prototype, "path", {
	            /**
	             *  Get the path to this container.
	             * @return {?}
	             */
	            get: function () { return null; },
	            enumerable: true,
	            configurable: true
	        });
	        return ControlContainer;
	    }(AbstractControlDirective));
	
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isPresent(obj) {
	        return obj != null;
	    }
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isBlank(obj) {
	        return obj == null;
	    }
	    /**
	     * @param {?} a
	     * @param {?} b
	     * @return {?}
	     */
	    function looseIdentical(a, b) {
	        return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
	    }
	    /**
	     * @param {?} o
	     * @return {?}
	     */
	    function isJsObject(o) {
	        return o !== null && (typeof o === 'function' || typeof o === 'object');
	    }
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function isPrimitive(obj) {
	        return !isJsObject(obj);
	    }
	
	    /**
	     *  Wraps Javascript Objects
	     */
	    var StringMapWrapper = (function () {
	        function StringMapWrapper() {
	        }
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.merge = function (m1, m2) {
	            var /** @type {?} */ m = {};
	            for (var _i = 0, _a = Object.keys(m1); _i < _a.length; _i++) {
	                var k = _a[_i];
	                m[k] = m1[k];
	            }
	            for (var _b = 0, _c = Object.keys(m2); _b < _c.length; _b++) {
	                var k = _c[_b];
	                m[k] = m2[k];
	            }
	            return m;
	        };
	        /**
	         * @param {?} m1
	         * @param {?} m2
	         * @return {?}
	         */
	        StringMapWrapper.equals = function (m1, m2) {
	            var /** @type {?} */ k1 = Object.keys(m1);
	            var /** @type {?} */ k2 = Object.keys(m2);
	            if (k1.length != k2.length) {
	                return false;
	            }
	            for (var /** @type {?} */ i = 0; i < k1.length; i++) {
	                var /** @type {?} */ key = k1[i];
	                if (m1[key] !== m2[key]) {
	                    return false;
	                }
	            }
	            return true;
	        };
	        return StringMapWrapper;
	    }());
	    var ListWrapper = (function () {
	        function ListWrapper() {
	        }
	        /**
	         * @param {?} arr
	         * @param {?} condition
	         * @return {?}
	         */
	        ListWrapper.findLast = function (arr, condition) {
	            for (var /** @type {?} */ i = arr.length - 1; i >= 0; i--) {
	                if (condition(arr[i])) {
	                    return arr[i];
	                }
	            }
	            return null;
	        };
	        /**
	         * @param {?} list
	         * @param {?} items
	         * @return {?}
	         */
	        ListWrapper.removeAll = function (list, items) {
	            for (var /** @type {?} */ i = 0; i < items.length; ++i) {
	                var /** @type {?} */ index = list.indexOf(items[i]);
	                if (index > -1) {
	                    list.splice(index, 1);
	                }
	            }
	        };
	        /**
	         * @param {?} list
	         * @param {?} el
	         * @return {?}
	         */
	        ListWrapper.remove = function (list, el) {
	            var /** @type {?} */ index = list.indexOf(el);
	            if (index > -1) {
	                list.splice(index, 1);
	                return true;
	            }
	            return false;
	        };
	        /**
	         * @param {?} a
	         * @param {?} b
	         * @return {?}
	         */
	        ListWrapper.equals = function (a, b) {
	            if (a.length != b.length)
	                return false;
	            for (var /** @type {?} */ i = 0; i < a.length; ++i) {
	                if (a[i] !== b[i])
	                    return false;
	            }
	            return true;
	        };
	        /**
	         * @param {?} list
	         * @return {?}
	         */
	        ListWrapper.flatten = function (list) {
	            return list.reduce(function (flat, item) {
	                var /** @type {?} */ flatItem = Array.isArray(item) ? ListWrapper.flatten(item) : item;
	                return ((flat)).concat(flatItem);
	            }, []);
	        };
	        return ListWrapper;
	    }());
	
	    var /** @type {?} */ isPromise = _angular_core.__core_private__.isPromise;
	
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    function isEmptyInputValue(value) {
	        return value == null || typeof value === 'string' && value.length === 0;
	    }
	    /**
	     * Providers for validators to be used for {@link FormControl}s in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * ### Example
	     *
	     * {@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	     * @stable
	     */
	    var /** @type {?} */ NG_VALIDATORS = new _angular_core.OpaqueToken('NgValidators');
	    /**
	     * Providers for asynchronous validators to be used for {@link FormControl}s
	     * in a form.
	     *
	     * Provide this using `multi: true` to add validators.
	     *
	     * See {@link NG_VALIDATORS} for more details.
	     *
	     * @stable
	     */
	    var /** @type {?} */ NG_ASYNC_VALIDATORS = new _angular_core.OpaqueToken('NgAsyncValidators');
	    /**
	     *  Provides a set of validators used by form controls.
	      * *
	      * A validator is a function that processes a {@link FormControl} or collection of
	      * controls and returns a map of errors. A null map means that validation has passed.
	      * *
	      * ### Example
	      * *
	      * ```typescript
	      * var loginControl = new FormControl("", Validators.required)
	      * ```
	      * *
	     */
	    var Validators = (function () {
	        function Validators() {
	        }
	        /**
	         *  Validator that requires controls to have a non-empty value.
	         * @param {?} control
	         * @return {?}
	         */
	        Validators.required = function (control) {
	            return isEmptyInputValue(control.value) ? { 'required': true } : null;
	        };
	        /**
	         *  Validator that requires control value to be true.
	         * @param {?} control
	         * @return {?}
	         */
	        Validators.requiredTrue = function (control) {
	            return control.value === true ? null : { 'required': true };
	        };
	        /**
	         *  Validator that requires controls to have a value of a minimum length.
	         * @param {?} minLength
	         * @return {?}
	         */
	        Validators.minLength = function (minLength) {
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var /** @type {?} */ length = control.value ? control.value.length : 0;
	                return length < minLength ?
	                    { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         *  Validator that requires controls to have a value of a maximum length.
	         * @param {?} maxLength
	         * @return {?}
	         */
	        Validators.maxLength = function (maxLength) {
	            return function (control) {
	                var /** @type {?} */ length = control.value ? control.value.length : 0;
	                return length > maxLength ?
	                    { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
	                    null;
	            };
	        };
	        /**
	         *  Validator that requires a control to match a regex to its value.
	         * @param {?} pattern
	         * @return {?}
	         */
	        Validators.pattern = function (pattern) {
	            if (!pattern)
	                return Validators.nullValidator;
	            var /** @type {?} */ regex;
	            var /** @type {?} */ regexStr;
	            if (typeof pattern === 'string') {
	                regexStr = "^" + pattern + "$";
	                regex = new RegExp(regexStr);
	            }
	            else {
	                regexStr = pattern.toString();
	                regex = pattern;
	            }
	            return function (control) {
	                if (isEmptyInputValue(control.value)) {
	                    return null; // don't validate empty values to allow optional controls
	                }
	                var /** @type {?} */ value = control.value;
	                return regex.test(value) ? null :
	                    { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
	            };
	        };
	        /**
	         *  No-op validator.
	         * @param {?} c
	         * @return {?}
	         */
	        Validators.nullValidator = function (c) { return null; };
	        /**
	         *  Compose multiple validators into a single function that returns the union
	          * of the individual error maps.
	         * @param {?} validators
	         * @return {?}
	         */
	        Validators.compose = function (validators) {
	            if (!validators)
	                return null;
	            var /** @type {?} */ presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                return _mergeErrors(_executeValidators(control, presentValidators));
	            };
	        };
	        /**
	         * @param {?} validators
	         * @return {?}
	         */
	        Validators.composeAsync = function (validators) {
	            if (!validators)
	                return null;
	            var /** @type {?} */ presentValidators = validators.filter(isPresent);
	            if (presentValidators.length == 0)
	                return null;
	            return function (control) {
	                var /** @type {?} */ promises = _executeAsyncValidators(control, presentValidators).map(_convertToPromise);
	                return Promise.all(promises).then(_mergeErrors);
	            };
	        };
	        return Validators;
	    }());
	    /**
	     * @param {?} obj
	     * @return {?}
	     */
	    function _convertToPromise(obj) {
	        return isPromise(obj) ? obj : rxjs_operator_toPromise.toPromise.call(obj);
	    }
	    /**
	     * @param {?} control
	     * @param {?} validators
	     * @return {?}
	     */
	    function _executeValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    /**
	     * @param {?} control
	     * @param {?} validators
	     * @return {?}
	     */
	    function _executeAsyncValidators(control, validators) {
	        return validators.map(function (v) { return v(control); });
	    }
	    /**
	     * @param {?} arrayOfErrors
	     * @return {?}
	     */
	    function _mergeErrors(arrayOfErrors) {
	        var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
	            return isPresent(errors) ? StringMapWrapper.merge(res, errors) : res;
	        }, {});
	        return Object.keys(res).length === 0 ? null : res;
	    }
	
	    /**
	     * Used to provide a {@link ControlValueAccessor} for form controls.
	     *
	     * See {@link DefaultValueAccessor} for how to implement one.
	     * @stable
	     */
	    var /** @type {?} */ NG_VALUE_ACCESSOR = new _angular_core.OpaqueToken('NgValueAccessor');
	
	    var /** @type {?} */ CHECKBOX_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	        multi: true,
	    };
	    /**
	     *  The accessor for writing a value and listening to changes on a checkbox input element.
	      * *
	      * ### Example
	      * ```
	      * <input type="checkbox" name="rememberLogin" ngModel>
	      * ```
	      * *
	      * @stable
	     */
	    var CheckboxControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function CheckboxControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        CheckboxControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                        host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                        providers: [CHECKBOX_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return CheckboxControlValueAccessor;
	    }());
	
	    var /** @type {?} */ DEFAULT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The default accessor for writing a value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="text" name="searchQuery" ngModel>
	      * ```
	      * *
	      * @stable
	     */
	    var DefaultValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function DefaultValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.writeValue = function (value) {
	            var /** @type {?} */ normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        DefaultValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                        // TODO: vsavkin replace the above selector with the one below it once
	                        // https://github.com/angular/angular/issues/3011 is implemented
	                        // selector: '[ngControl],[ngModel],[ngFormControl]',
	                        host: { '(input)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [DEFAULT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        DefaultValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return DefaultValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function normalizeValidator(validator) {
	        if (((validator)).validate) {
	            return function (c) { return ((validator)).validate(c); };
	        }
	        else {
	            return (validator);
	        }
	    }
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function normalizeAsyncValidator(validator) {
	        if (((validator)).validate) {
	            return function (c) { return ((validator)).validate(c); };
	        }
	        else {
	            return (validator);
	        }
	    }
	
	    var /** @type {?} */ NUMBER_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The accessor for writing a number value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="number" [(ngModel)]="age">
	      * ```
	     */
	    var NumberValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function NumberValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.writeValue = function (value) {
	            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	            var /** @type {?} */ normalizedValue = value == null ? '' : value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        NumberValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [NUMBER_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        NumberValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return NumberValueAccessor;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$2 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * @return {?}
	     */
	    function unimplemented() {
	        throw new Error('unimplemented');
	    }
	    /**
	     *  A base class that all control directive extend.
	      * It binds a {@link FormControl} object to a DOM element.
	      * *
	      * Used internally by Angular forms.
	      * *
	     * @abstract
	     */
	    var NgControl = (function (_super) {
	        __extends$2(NgControl, _super);
	        function NgControl() {
	            _super.apply(this, arguments);
	            /** @internal */
	            this._parent = null;
	            this.name = null;
	            this.valueAccessor = null;
	            /** @internal */
	            this._rawValidators = [];
	            /** @internal */
	            this._rawAsyncValidators = [];
	        }
	        Object.defineProperty(NgControl.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return (unimplemented()); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgControl.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return (unimplemented()); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @abstract
	         * @param {?} newValue
	         * @return {?}
	         */
	        NgControl.prototype.viewToModelUpdate = function (newValue) { };
	        return NgControl;
	    }(AbstractControlDirective));
	
	    var /** @type {?} */ RADIO_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  Internal class used by Angular to uncheck radio buttons with the matching name.
	     */
	    var RadioControlRegistry = (function () {
	        function RadioControlRegistry() {
	            this._accessors = [];
	        }
	        /**
	         * @param {?} control
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.add = function (control, accessor) {
	            this._accessors.push([control, accessor]);
	        };
	        /**
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.remove = function (accessor) {
	            for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
	                if (this._accessors[i][1] === accessor) {
	                    this._accessors.splice(i, 1);
	                    return;
	                }
	            }
	        };
	        /**
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype.select = function (accessor) {
	            var _this = this;
	            this._accessors.forEach(function (c) {
	                if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                    c[1].fireUncheck(accessor.value);
	                }
	            });
	        };
	        /**
	         * @param {?} controlPair
	         * @param {?} accessor
	         * @return {?}
	         */
	        RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	            if (!controlPair[0].control)
	                return false;
	            return controlPair[0]._parent === accessor._control._parent &&
	                controlPair[1].name === accessor.name;
	        };
	        RadioControlRegistry.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        RadioControlRegistry.ctorParameters = function () { return []; };
	        return RadioControlRegistry;
	    }());
	    /**
	     *  *
	      * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	      * to keep the view synced with the {@link FormControl} model.
	      * *
	      * *
	      * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	      * value accessor will be active on any radio control that has a form directive. You do
	      * **not** need to add a special selector to activate it.
	      * *
	      * ### How to use radio buttons with form directives
	      * *
	      * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	      * in the same group have the same `name` attribute.  Radio buttons with different `name`
	      * attributes do not affect each other.
	      * *
	      * {@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	      * *
	      * When using radio buttons in a reactive form, radio buttons in the same group should have the
	      * same `formControlName`. You can also add a `name` attribute, but it's optional.
	      * *
	      * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * @stable
	     */
	    var RadioControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         * @param {?} _registry
	         * @param {?} _injector
	         */
	        function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this._registry = _registry;
	            this._injector = _injector;
	            this.onChange = function () { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.ngOnInit = function () {
	            this._control = this._injector.get(NgControl);
	            this._checkName();
	            this._registry.add(this._control, this);
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.writeValue = function (value) {
	            this._state = value === this.value;
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this._fn = fn;
	            this.onChange = function () {
	                fn(_this.value);
	                _this._registry.select(_this);
	            };
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype._checkName = function () {
	            if (this.name && this.formControlName && this.name !== this.formControlName) {
	                this._throwNameError();
	            }
	            if (!this.name && this.formControlName)
	                this.name = this.formControlName;
	        };
	        /**
	         * @return {?}
	         */
	        RadioControlValueAccessor.prototype._throwNameError = function () {
	            throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	        };
	        RadioControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                        host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                        providers: [RADIO_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RadioControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	            { type: RadioControlRegistry, },
	            { type: _angular_core.Injector, },
	        ]; };
	        RadioControlValueAccessor.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'formControlName': [{ type: _angular_core.Input },],
	            'value': [{ type: _angular_core.Input },],
	        };
	        return RadioControlValueAccessor;
	    }());
	
	    var /** @type {?} */ RANGE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return RangeValueAccessor; }),
	        multi: true
	    };
	    /**
	     *  The accessor for writing a range value and listening to changes that is used by the
	      * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
	      * *
	      * ### Example
	      * ```
	      * <input type="range" [(ngModel)]="age" >
	      * ```
	     */
	    var RangeValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function RangeValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.writeValue = function (value) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.registerOnChange = function (fn) {
	            this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        RangeValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
	                        host: {
	                            '(change)': 'onChange($event.target.value)',
	                            '(input)': 'onChange($event.target.value)',
	                            '(blur)': 'onTouched()'
	                        },
	                        providers: [RANGE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        RangeValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return RangeValueAccessor;
	    }());
	
	    var /** @type {?} */ SELECT_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * @param {?} id
	     * @param {?} value
	     * @return {?}
	     */
	    function _buildValueString(id, value) {
	        if (id == null)
	            return "" + value;
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    /**
	     * @param {?} valueString
	     * @return {?}
	     */
	    function _extractId(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     *  *
	      * Used by {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName}
	      * to keep the view synced with the {@link FormControl} model.
	      * *
	      * *
	      * If you have imported the {@link FormsModule} or the {@link ReactiveFormsModule}, this
	      * value accessor will be active on any select control that has a form directive. You do
	      * **not** need to add a special selector to activate it.
	      * *
	      * ### How to use select controls with form directives
	      * *
	      * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	      * attribute to the main `<select>` tag.
	      * *
	      * If your option values are simple strings, you can bind to the normal `value` property
	      * on the option.  If your option values happen to be objects (and you'd like to save the
	      * selection in your form as an object), use `ngValue` instead:
	      * *
	      * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
	      * *
	      * In reactive forms, you'll also want to add your form directive (`formControlName` or
	      * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	      * choice of binding to the  `value` or `ngValue` property on the select's options.
	      * *
	      * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	      * *
	      * Note: We listen to the 'change' event because 'input' events aren't fired
	      * for selects in Firefox and IE:
	      * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	      * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var SelectControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function SelectControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.writeValue = function (value) {
	            this.value = value;
	            var /** @type {?} */ valueString = _buildValueString(this._getOptionId(value), value);
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (valueString) {
	                _this.value = valueString;
	                fn(_this._getOptionValue(valueString));
	            };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id), value))
	                    return id;
	            }
	            return null;
	        };
	        /**
	         * @param {?} valueString
	         * @return {?}
	         */
	        SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var /** @type {?} */ id = _extractId(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
	        };
	        SelectControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                        host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return SelectControlValueAccessor;
	    }());
	    /**
	     *  *
	      * *
	      * See docs for {@link SelectControlValueAccessor} for usage examples.
	      * *
	     */
	    var NgSelectOption = (function () {
	        /**
	         * @param {?} _element
	         * @param {?} _renderer
	         * @param {?} _select
	         */
	        function NgSelectOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select)
	                this.id = this._select._registerOption();
	        }
	        Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._select._optionMap.set(this.id, value);
	                this._setElementValue(_buildValueString(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectOption.prototype, "value", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                this._setElementValue(value);
	                if (this._select)
	                    this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgSelectOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /**
	         * @return {?}
	         */
	        NgSelectOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectOption.ctorParameters = function () { return [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ]; };
	        NgSelectOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectOption;
	    }());
	
	    var /** @type {?} */ SELECT_MULTIPLE_VALUE_ACCESSOR = {
	        provide: NG_VALUE_ACCESSOR,
	        useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	        multi: true
	    };
	    /**
	     * @param {?} id
	     * @param {?} value
	     * @return {?}
	     */
	    function _buildValueString$1(id, value) {
	        if (id == null)
	            return "" + value;
	        if (typeof value === 'string')
	            value = "'" + value + "'";
	        if (!isPrimitive(value))
	            value = 'Object';
	        return (id + ": " + value).slice(0, 50);
	    }
	    /**
	     * @param {?} valueString
	     * @return {?}
	     */
	    function _extractId$1(valueString) {
	        return valueString.split(':')[0];
	    }
	    /**
	     *  The accessor for writing a value and listening to changes on a select element.
	      * *
	     */
	    var SelectMultipleControlValueAccessor = (function () {
	        /**
	         * @param {?} _renderer
	         * @param {?} _elementRef
	         */
	        function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	            this._renderer = _renderer;
	            this._elementRef = _elementRef;
	            /** @internal */
	            this._optionMap = new Map();
	            /** @internal */
	            this._idCounter = 0;
	            this.onChange = function (_) { };
	            this.onTouched = function () { };
	        }
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	            var _this = this;
	            this.value = value;
	            var /** @type {?} */ optionSelectedStateSetter;
	            if (Array.isArray(value)) {
	                // convert values to ids
	                var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
	                optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
	            }
	            else {
	                optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
	            }
	            this._optionMap.forEach(optionSelectedStateSetter);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	            var _this = this;
	            this.onChange = function (_) {
	                var /** @type {?} */ selected = [];
	                if (_.hasOwnProperty('selectedOptions')) {
	                    var /** @type {?} */ options = _.selectedOptions;
	                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                        var /** @type {?} */ opt = options.item(i);
	                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	                else {
	                    var /** @type {?} */ options = (_.options);
	                    for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                        var /** @type {?} */ opt = options.item(i);
	                        if (opt.selected) {
	                            var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                            selected.push(val);
	                        }
	                    }
	                }
	                _this.value = selected;
	                fn(selected);
	            };
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	            var /** @type {?} */ id = (this._idCounter++).toString();
	            this._optionMap.set(id, value);
	            return id;
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	            for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	                var id = _a[_i];
	                if (looseIdentical(this._optionMap.get(id)._value, value))
	                    return id;
	            }
	            return null;
	        };
	        /**
	         * @param {?} valueString
	         * @return {?}
	         */
	        SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	            var /** @type {?} */ id = _extractId$1(valueString);
	            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
	        };
	        SelectMultipleControlValueAccessor.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                        host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	                    },] },
	        ];
	        /** @nocollapse */
	        SelectMultipleControlValueAccessor.ctorParameters = function () { return [
	            { type: _angular_core.Renderer, },
	            { type: _angular_core.ElementRef, },
	        ]; };
	        return SelectMultipleControlValueAccessor;
	    }());
	    /**
	     *  Marks `<option>` as dynamic, so Angular can be notified when options change.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <select multiple name="city" ngModel>
	      * <option *ngFor="let c of cities" [value]="c"></option>
	      * </select>
	      * ```
	     */
	    var NgSelectMultipleOption = (function () {
	        /**
	         * @param {?} _element
	         * @param {?} _renderer
	         * @param {?} _select
	         */
	        function NgSelectMultipleOption(_element, _renderer, _select) {
	            this._element = _element;
	            this._renderer = _renderer;
	            this._select = _select;
	            if (this._select) {
	                this.id = this._select._registerOption(this);
	            }
	        }
	        Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select == null)
	                    return;
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                if (this._select) {
	                    this._value = value;
	                    this._setElementValue(_buildValueString$1(this.id, value));
	                    this._select.writeValue(this._select.value);
	                }
	                else {
	                    this._setElementValue(value);
	                }
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype._setElementValue = function (value) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	        };
	        /**
	         * @param {?} selected
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype._setSelected = function (selected) {
	            this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	        };
	        /**
	         * @return {?}
	         */
	        NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	            if (this._select) {
	                this._select._optionMap.delete(this.id);
	                this._select.writeValue(this._select.value);
	            }
	        };
	        NgSelectMultipleOption.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	        ];
	        /** @nocollapse */
	        NgSelectMultipleOption.ctorParameters = function () { return [
	            { type: _angular_core.ElementRef, },
	            { type: _angular_core.Renderer, },
	            { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	        ]; };
	        NgSelectMultipleOption.propDecorators = {
	            'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	            'value': [{ type: _angular_core.Input, args: ['value',] },],
	        };
	        return NgSelectMultipleOption;
	    }());
	
	    /**
	     * @param {?} name
	     * @param {?} parent
	     * @return {?}
	     */
	    function controlPath(name, parent) {
	        return parent.path.concat([name]);
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function setUpControl(control, dir) {
	        if (!control)
	            _throwError(dir, 'Cannot find control with');
	        if (!dir.valueAccessor)
	            _throwError(dir, 'No value accessor for form control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	        dir.valueAccessor.writeValue(control.value);
	        // view -> model
	        dir.valueAccessor.registerOnChange(function (newValue) {
	            dir.viewToModelUpdate(newValue);
	            control.markAsDirty();
	            control.setValue(newValue, { emitModelToViewChange: false });
	        });
	        // touched
	        dir.valueAccessor.registerOnTouched(function () { return control.markAsTouched(); });
	        control.registerOnChange(function (newValue, emitModelEvent) {
	            // control -> view
	            dir.valueAccessor.writeValue(newValue);
	            // control -> ngModel
	            if (emitModelEvent)
	                dir.viewToModelUpdate(newValue);
	        });
	        if (dir.valueAccessor.setDisabledState) {
	            control.registerOnDisabledChange(function (isDisabled) { dir.valueAccessor.setDisabledState(isDisabled); });
	        }
	        // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	        dir._rawValidators.forEach(function (validator) {
	            if (((validator)).registerOnValidatorChange)
	                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (((validator)).registerOnValidatorChange)
	                ((validator)).registerOnValidatorChange(function () { return control.updateValueAndValidity(); });
	        });
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function cleanUpControl(control, dir) {
	        dir.valueAccessor.registerOnChange(function () { return _noControlError(dir); });
	        dir.valueAccessor.registerOnTouched(function () { return _noControlError(dir); });
	        dir._rawValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        dir._rawAsyncValidators.forEach(function (validator) {
	            if (validator.registerOnValidatorChange) {
	                validator.registerOnValidatorChange(null);
	            }
	        });
	        if (control)
	            control._clearChangeFns();
	    }
	    /**
	     * @param {?} control
	     * @param {?} dir
	     * @return {?}
	     */
	    function setUpFormContainer(control, dir) {
	        if (isBlank(control))
	            _throwError(dir, 'Cannot find control with');
	        control.validator = Validators.compose([control.validator, dir.validator]);
	        control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	    }
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    function _noControlError(dir) {
	        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	    }
	    /**
	     * @param {?} dir
	     * @param {?} message
	     * @return {?}
	     */
	    function _throwError(dir, message) {
	        var /** @type {?} */ messageEnd;
	        if (dir.path.length > 1) {
	            messageEnd = "path: '" + dir.path.join(' -> ') + "'";
	        }
	        else if (dir.path[0]) {
	            messageEnd = "name: '" + dir.path + "'";
	        }
	        else {
	            messageEnd = 'unspecified name attribute';
	        }
	        throw new Error(message + " " + messageEnd);
	    }
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    function composeValidators(validators) {
	        return isPresent(validators) ? Validators.compose(validators.map(normalizeValidator)) : null;
	    }
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    function composeAsyncValidators(validators) {
	        return isPresent(validators) ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	            null;
	    }
	    /**
	     * @param {?} changes
	     * @param {?} viewModel
	     * @return {?}
	     */
	    function isPropertyUpdated(changes, viewModel) {
	        if (!changes.hasOwnProperty('model'))
	            return false;
	        var /** @type {?} */ change = changes['model'];
	        if (change.isFirstChange())
	            return true;
	        return !looseIdentical(viewModel, change.currentValue);
	    }
	    var /** @type {?} */ BUILTIN_ACCESSORS = [
	        CheckboxControlValueAccessor,
	        RangeValueAccessor,
	        NumberValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	    ];
	    /**
	     * @param {?} valueAccessor
	     * @return {?}
	     */
	    function isBuiltInAccessor(valueAccessor) {
	        return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
	    }
	    /**
	     * @param {?} dir
	     * @param {?} valueAccessors
	     * @return {?}
	     */
	    function selectValueAccessor(dir, valueAccessors) {
	        if (!valueAccessors)
	            return null;
	        var /** @type {?} */ defaultAccessor;
	        var /** @type {?} */ builtinAccessor;
	        var /** @type {?} */ customAccessor;
	        valueAccessors.forEach(function (v) {
	            if (v.constructor === DefaultValueAccessor) {
	                defaultAccessor = v;
	            }
	            else if (isBuiltInAccessor(v)) {
	                if (builtinAccessor)
	                    _throwError(dir, 'More than one built-in value accessor matches form control with');
	                builtinAccessor = v;
	            }
	            else {
	                if (customAccessor)
	                    _throwError(dir, 'More than one custom value accessor matches form control with');
	                customAccessor = v;
	            }
	        });
	        if (customAccessor)
	            return customAccessor;
	        if (builtinAccessor)
	            return builtinAccessor;
	        if (defaultAccessor)
	            return defaultAccessor;
	        _throwError(dir, 'No valid value accessor for form control with');
	        return null;
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  This is a base class for code shared between {@link NgModelGroup} and {@link FormGroupName}.
	      * *
	     */
	    var AbstractFormGroupDirective = (function (_super) {
	        __extends(AbstractFormGroupDirective, _super);
	        function AbstractFormGroupDirective() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormGroup(this);
	        };
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormGroup(this);
	            }
	        };
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	            /**
	             *  Get the {@link FormGroup} backing this binding.
	             * @return {?}
	             */
	            get: function () { return this.formDirective.getFormGroup(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	            /**
	             *  Get the path to this control group.
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	            /**
	             *  Get the {@link Form} to which this group belongs.
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        AbstractFormGroupDirective.prototype._checkParentType = function () { };
	        return AbstractFormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$3 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var AbstractControlStatus = (function () {
	        /**
	         * @param {?} cd
	         */
	        function AbstractControlStatus(cd) {
	            this._cd = cd;
	        }
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.untouched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.touched : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.pristine : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.dirty : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.valid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.invalid : false; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._cd.control ? this._cd.control.pending : false; },
	            enumerable: true,
	            configurable: true
	        });
	        return AbstractControlStatus;
	    }());
	    var /** @type {?} */ ngControlStatusHost = {
	        '[class.ng-untouched]': 'ngClassUntouched',
	        '[class.ng-touched]': 'ngClassTouched',
	        '[class.ng-pristine]': 'ngClassPristine',
	        '[class.ng-dirty]': 'ngClassDirty',
	        '[class.ng-valid]': 'ngClassValid',
	        '[class.ng-invalid]': 'ngClassInvalid',
	        '[class.ng-pending]': 'ngClassPending',
	    };
	    /**
	     *  Directive automatically applied to Angular form controls that sets CSS classes
	      * based on control status (valid/invalid/dirty/etc).
	      * *
	     */
	    var NgControlStatus = (function (_super) {
	        __extends$3(NgControlStatus, _super);
	        /**
	         * @param {?} cd
	         */
	        function NgControlStatus(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatus.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	        ];
	        /** @nocollapse */
	        NgControlStatus.ctorParameters = function () { return [
	            { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	        ]; };
	        return NgControlStatus;
	    }(AbstractControlStatus));
	    /**
	     *  Directive automatically applied to Angular form groups that sets CSS classes
	      * based on control status (valid/invalid/dirty/etc).
	      * *
	     */
	    var NgControlStatusGroup = (function (_super) {
	        __extends$3(NgControlStatusGroup, _super);
	        /**
	         * @param {?} cd
	         */
	        function NgControlStatusGroup(cd) {
	            _super.call(this, cd);
	        }
	        NgControlStatusGroup.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                        host: ngControlStatusHost
	                    },] },
	        ];
	        /** @nocollapse */
	        NgControlStatusGroup.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	        ]; };
	        return NgControlStatusGroup;
	    }(AbstractControlStatus));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$5 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     *  Use by directives and components to emit custom Events.
	      * *
	      * ### Examples
	      * *
	      * In the following example, `Zippy` alternatively emits `open` and `close` events when its
	      * title gets clicked:
	      * *
	      * ```
	      * selector: 'zippy',
	      * template: `
	      * <div class="zippy">
	      * <div (click)="toggle()">Toggle</div>
	      * <div [hidden]="!visible">
	      * <ng-content></ng-content>
	      * </div>
	      * </div>`})
	      * export class Zippy {
	      * visible: boolean = true;
	      * @Output() open: EventEmitter<any> = new EventEmitter();
	      * @Output() close: EventEmitter<any> = new EventEmitter();
	      * *
	      * toggle() {
	      * this.visible = !this.visible;
	      * if (this.visible) {
	      * this.open.emit(null);
	      * } else {
	      * this.close.emit(null);
	      * }
	      * }
	      * }
	      * ```
	      * *
	      * The events payload can be accessed by the parameter `$event` on the components output event
	      * handler:
	      * *
	      * ```
	      * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
	      * ```
	      * *
	      * Uses Rx.Observable but provides an adapter to make it work as specified here:
	      * https://github.com/jhusain/observable-spec
	      * *
	      * Once a reference implementation of the spec is available, switch to it.
	     */
	    var EventEmitter = (function (_super) {
	        __extends$5(EventEmitter, _super);
	        /**
	         *  Creates an instance of [EventEmitter], which depending on [isAsync],
	          * delivers events synchronously or asynchronously.
	         * @param {?=} isAsync
	         */
	        function EventEmitter(isAsync) {
	            if (isAsync === void 0) { isAsync = false; }
	            _super.call(this);
	            this.__isAsync = isAsync;
	        }
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        EventEmitter.prototype.emit = function (value) { _super.prototype.next.call(this, value); };
	        /**
	         * @param {?=} generatorOrNext
	         * @param {?=} error
	         * @param {?=} complete
	         * @return {?}
	         */
	        EventEmitter.prototype.subscribe = function (generatorOrNext, error, complete) {
	            var /** @type {?} */ schedulerFn;
	            var /** @type {?} */ errorFn = function (err) { return null; };
	            var /** @type {?} */ completeFn = function () { return null; };
	            if (generatorOrNext && typeof generatorOrNext === 'object') {
	                schedulerFn = this.__isAsync ? function (value) {
	                    setTimeout(function () { return generatorOrNext.next(value); });
	                } : function (value) { generatorOrNext.next(value); };
	                if (generatorOrNext.error) {
	                    errorFn = this.__isAsync ? function (err) { setTimeout(function () { return generatorOrNext.error(err); }); } :
	                        function (err) { generatorOrNext.error(err); };
	                }
	                if (generatorOrNext.complete) {
	                    completeFn = this.__isAsync ? function () { setTimeout(function () { return generatorOrNext.complete(); }); } :
	                        function () { generatorOrNext.complete(); };
	                }
	            }
	            else {
	                schedulerFn = this.__isAsync ? function (value) { setTimeout(function () { return generatorOrNext(value); }); } :
	                    function (value) { generatorOrNext(value); };
	                if (error) {
	                    errorFn =
	                        this.__isAsync ? function (err) { setTimeout(function () { return error(err); }); } : function (err) { error(err); };
	                }
	                if (complete) {
	                    completeFn =
	                        this.__isAsync ? function () { setTimeout(function () { return complete(); }); } : function () { complete(); };
	                }
	            }
	            return _super.prototype.subscribe.call(this, schedulerFn, errorFn, completeFn);
	        };
	        return EventEmitter;
	    }(rxjs_Subject.Subject));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$6 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /**
	     * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	     */
	    var /** @type {?} */ VALID = 'VALID';
	    /**
	     * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	     */
	    var /** @type {?} */ INVALID = 'INVALID';
	    /**
	     * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	     * errors are not yet available for the input value.
	     */
	    var /** @type {?} */ PENDING = 'PENDING';
	    /**
	     * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	     * calculations of validity or value.
	     */
	    var /** @type {?} */ DISABLED = 'DISABLED';
	    /**
	     * @param {?} control
	     * @param {?} path
	     * @param {?} delimiter
	     * @return {?}
	     */
	    function _find(control, path, delimiter) {
	        if (path == null)
	            return null;
	        if (!(path instanceof Array)) {
	            path = ((path)).split(delimiter);
	        }
	        if (path instanceof Array && (path.length === 0))
	            return null;
	        return ((path)).reduce(function (v, name) {
	            if (v instanceof FormGroup) {
	                return v.controls[name] || null;
	            }
	            if (v instanceof FormArray) {
	                return v.at(/** @type {?} */ (name)) || null;
	            }
	            return null;
	        }, control);
	    }
	    /**
	     * @param {?} r
	     * @return {?}
	     */
	    function toObservable(r) {
	        return isPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    }
	    /**
	     * @param {?} validator
	     * @return {?}
	     */
	    function coerceToValidator(validator) {
	        return Array.isArray(validator) ? composeValidators(validator) : validator;
	    }
	    /**
	     * @param {?} asyncValidator
	     * @return {?}
	     */
	    function coerceToAsyncValidator(asyncValidator) {
	        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator;
	    }
	    /**
	     *  {@link FormArray}.
	      * *
	      * It provides some of the shared behavior that all controls and groups of controls have, like
	      * running validators, calculating status, and resetting state. It also defines the properties
	      * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	      * instantiated directly.
	      * *
	     * @abstract
	     */
	    var AbstractControl = (function () {
	        /**
	         * @param {?} validator
	         * @param {?} asyncValidator
	         */
	        function AbstractControl(validator, asyncValidator) {
	            this.validator = validator;
	            this.asyncValidator = asyncValidator;
	            /** @internal */
	            this._onCollectionChange = function () { };
	            this._pristine = true;
	            this._touched = false;
	            /** @internal */
	            this._onDisabledChange = [];
	        }
	        Object.defineProperty(AbstractControl.prototype, "value", {
	            /**
	             *  The value of the control.
	             * @return {?}
	             */
	            get: function () { return this._value; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "parent", {
	            /**
	             *  The parent control.
	             * @return {?}
	             */
	            get: function () { return this._parent; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "status", {
	            /**
	             *  The validation status of the control. There are four possible
	              * validation statuses:
	              * *
	              * * **VALID**:  control has passed all validation checks
	              * * **INVALID**: control has failed at least one validation check
	              * * **PENDING**: control is in the midst of conducting a validation check
	              * * **DISABLED**: control is exempt from validation checks
	              * *
	              * These statuses are mutually exclusive, so a control cannot be
	              * both valid AND invalid or invalid AND disabled.
	             * @return {?}
	             */
	            get: function () { return this._status; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valid", {
	            /**
	             *  A control is `valid` when its `status === VALID`.
	              * *
	              * In order to have this status, the control must have passed all its
	              * validation checks.
	             * @return {?}
	             */
	            get: function () { return this._status === VALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "invalid", {
	            /**
	             *  A control is `invalid` when its `status === INVALID`.
	              * *
	              * In order to have this status, the control must have failed
	              * at least one of its validation checks.
	             * @return {?}
	             */
	            get: function () { return this._status === INVALID; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pending", {
	            /**
	             *  A control is `pending` when its `status === PENDING`.
	              * *
	              * In order to have this status, the control must be in the
	              * middle of conducting a validation check.
	             * @return {?}
	             */
	            get: function () { return this._status == PENDING; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "disabled", {
	            /**
	             *  A control is `disabled` when its `status === DISABLED`.
	              * *
	              * Disabled controls are exempt from validation checks and
	              * are not included in the aggregate value of their ancestor
	              * controls.
	             * @return {?}
	             */
	            get: function () { return this._status === DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "enabled", {
	            /**
	             *  A control is `enabled` as long as its `status !== DISABLED`.
	              * *
	              * In other words, it has a status of `VALID`, `INVALID`, or
	              * `PENDING`.
	             * @return {?}
	             */
	            get: function () { return this._status !== DISABLED; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "errors", {
	            /**
	             *  Returns any errors generated by failing validation. If there
	              * are no errors, it will return null.
	             * @return {?}
	             */
	            get: function () { return this._errors; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "pristine", {
	            /**
	             *  A control is `pristine` if the user has not yet changed
	              * the value in the UI.
	              * *
	              * Note that programmatic changes to a control's value will
	              * *not* mark it dirty.
	             * @return {?}
	             */
	            get: function () { return this._pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "dirty", {
	            /**
	             *  A control is `dirty` if the user has changed the value
	              * in the UI.
	              * *
	              * Note that programmatic changes to a control's value will
	              * *not* mark it dirty.
	             * @return {?}
	             */
	            get: function () { return !this.pristine; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "touched", {
	            /**
	             *  A control is marked `touched` once the user has triggered
	              * a `blur` event on it.
	             * @return {?}
	             */
	            get: function () { return this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "untouched", {
	            /**
	             *  A control is `untouched` if the user has not yet triggered
	              * a `blur` event on it.
	             * @return {?}
	             */
	            get: function () { return !this._touched; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	            /**
	             *  Emits an event every time the value of the control changes, in
	              * the UI or programmatically.
	             * @return {?}
	             */
	            get: function () { return this._valueChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	            /**
	             *  Emits an event every time the validation status of the control
	              * is re-calculated.
	             * @return {?}
	             */
	            get: function () { return this._statusChanges; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the synchronous validators that are active on this control.  Calling
	          * this will overwrite any existing sync validators.
	         * @param {?} newValidator
	         * @return {?}
	         */
	        AbstractControl.prototype.setValidators = function (newValidator) {
	            this.validator = coerceToValidator(newValidator);
	        };
	        /**
	         *  Sets the async validators that are active on this control. Calling this
	          * will overwrite any existing async validators.
	         * @param {?} newValidator
	         * @return {?}
	         */
	        AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	            this.asyncValidator = coerceToAsyncValidator(newValidator);
	        };
	        /**
	         *  Empties out the sync validator list.
	         * @return {?}
	         */
	        AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	        /**
	         *  Empties out the async validator list.
	         * @return {?}
	         */
	        AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	        /**
	         *  Marks the control as `touched`.
	          * *
	          * This will also mark all direct ancestors as `touched` to maintain
	          * the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = true;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `untouched`.
	          * *
	          * If the control has any children, it will also mark all children as `untouched`
	          * to maintain the model, and re-calculate the `touched` status of all parent
	          * controls.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsUntouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = false;
	            this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `dirty`.
	          * *
	          * This will also mark all direct ancestors as `dirty` to maintain
	          * the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsDirty = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = false;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsDirty({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `pristine`.
	          * *
	          * If the control has any children, it will also mark all children as `pristine`
	          * to maintain the model, and re-calculate the `pristine` status of all parent
	          * controls.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsPristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = true;
	            this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Marks the control as `pending`.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.markAsPending = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._status = PENDING;
	            if (this._parent && !onlySelf) {
	                this._parent.markAsPending({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         *  Disables the control. This means the control will be exempt from validation checks and
	          * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	          * *
	          * If the control has children, all children will be disabled to maintain the model.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.disable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = DISABLED;
	            this._errors = null;
	            this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	            this._updateValue();
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	        };
	        /**
	         *  Enables the control. This means the control will be included in validation checks and
	          * the aggregate value of its parent. Its status is re-calculated based on its value and
	          * its validators.
	          * *
	          * If the control has children, all children will be enabled.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.enable = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._status = VALID;
	            this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	            this._updateAncestors(onlySelf);
	            this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	        };
	        /**
	         * @param {?} onlySelf
	         * @return {?}
	         */
	        AbstractControl.prototype._updateAncestors = function (onlySelf) {
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity();
	                this._parent._updatePristine();
	                this._parent._updateTouched();
	            }
	        };
	        /**
	         * @param {?} parent
	         * @return {?}
	         */
	        AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	        /**
	         *  Sets the value of the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.setValue = function (value, options) { };
	        /**
	         *  Patches the value of the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.patchValue = function (value, options) { };
	        /**
	         *  Resets the control. Abstract method (implemented in sub-classes).
	         * @abstract
	         * @param {?=} value
	         * @param {?=} options
	         * @return {?}
	         */
	        AbstractControl.prototype.reset = function (value, options) { };
	        /**
	         *  Re-calculates the value and validation status of the control.
	          * *
	          * By default, it will also update the value and validity of its ancestors.
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype.updateValueAndValidity = function (_a) {
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._setInitialStatus();
	            this._updateValue();
	            if (this.enabled) {
	                this._errors = this._runValidator();
	                this._status = this._calculateStatus();
	                if (this._status === VALID || this._status === PENDING) {
	                    this._runAsyncValidator(emitEvent);
	                }
	            }
	            if (emitEvent !== false) {
	                this._valueChanges.emit(this._value);
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent && !onlySelf) {
	                this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            }
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updateTreeValidity = function (_a) {
	            var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	            this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._runValidator = function () {
	            return this.validator ? this.validator(this) : null;
	        };
	        /**
	         * @param {?} emitEvent
	         * @return {?}
	         */
	        AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	            var _this = this;
	            if (this.asyncValidator) {
	                this._status = PENDING;
	                this._cancelExistingSubscription();
	                var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
	                this._asyncValidationSubscription =
	                    obs.subscribe({ next: function (res) { return _this.setErrors(res, { emitEvent: emitEvent }); } });
	            }
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._cancelExistingSubscription = function () {
	            if (this._asyncValidationSubscription) {
	                this._asyncValidationSubscription.unsubscribe();
	            }
	        };
	        /**
	         *  Sets errors on a form control.
	          * *
	          * This is used when validations are run manually by the user, rather than automatically.
	          * *
	          * Calling `setErrors` will also update the validity of the parent control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const login = new FormControl("someLogin");
	          * login.setErrors({
	          * "notUnique": true
	          * });
	          * *
	          * expect(login.valid).toEqual(false);
	          * expect(login.errors).toEqual({"notUnique": true});
	          * *
	          * login.setValue("someOtherLogin");
	          * *
	          * expect(login.valid).toEqual(true);
	          * ```
	         * @param {?} errors
	         * @param {?=} __1
	         * @return {?}
	         */
	        AbstractControl.prototype.setErrors = function (errors, _a) {
	            var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	            this._errors = errors;
	            this._updateControlsErrors(emitEvent !== false);
	        };
	        /**
	         *  Retrieves a child control given the control's name or path.
	          * *
	          * Paths can be passed in as an array or a string delimited by a dot.
	          * *
	          * To get a control nested within a `person` sub-group:
	          * *
	          * * `this.form.get('person.name');`
	          * *
	          * -OR-
	          * *
	          * * `this.form.get(['person', 'name']);`
	         * @param {?} path
	         * @return {?}
	         */
	        AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	        /**
	         *  Returns true if the control with the given path has the error specified. Otherwise
	          * returns null or undefined.
	          * *
	          * If no path is given, it checks for the error on the present control.
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControl.prototype.getError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            var /** @type {?} */ control = path ? this.get(path) : this;
	            return control && control._errors ? control._errors[errorCode] : null;
	        };
	        /**
	         *  Returns true if the control with the given path has the error specified. Otherwise
	          * returns false.
	          * *
	          * If no path is given, it checks for the error on the present control.
	         * @param {?} errorCode
	         * @param {?=} path
	         * @return {?}
	         */
	        AbstractControl.prototype.hasError = function (errorCode, path) {
	            if (path === void 0) { path = null; }
	            return !!this.getError(errorCode, path);
	        };
	        Object.defineProperty(AbstractControl.prototype, "root", {
	            /**
	             *  Retrieves the top-level ancestor of this control.
	             * @return {?}
	             */
	            get: function () {
	                var /** @type {?} */ x = this;
	                while (x._parent) {
	                    x = x._parent;
	                }
	                return x;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} emitEvent
	         * @return {?}
	         */
	        AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	            this._status = this._calculateStatus();
	            if (emitEvent) {
	                this._statusChanges.emit(this._status);
	            }
	            if (this._parent) {
	                this._parent._updateControlsErrors(emitEvent);
	            }
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._initObservables = function () {
	            this._valueChanges = new EventEmitter();
	            this._statusChanges = new EventEmitter();
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._calculateStatus = function () {
	            if (this._allControlsDisabled())
	                return DISABLED;
	            if (this._errors)
	                return INVALID;
	            if (this._anyControlsHaveStatus(PENDING))
	                return PENDING;
	            if (this._anyControlsHaveStatus(INVALID))
	                return INVALID;
	            return VALID;
	        };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        AbstractControl.prototype._updateValue = function () { };
	        /**
	         * @abstract
	         * @param {?} cb
	         * @return {?}
	         */
	        AbstractControl.prototype._forEachChild = function (cb) { };
	        /**
	         * @abstract
	         * @param {?} condition
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControls = function (condition) { };
	        /**
	         * @abstract
	         * @return {?}
	         */
	        AbstractControl.prototype._allControlsDisabled = function () { };
	        /**
	         * @param {?} status
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	            return this._anyControls(function (control) { return control.status === status; });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsDirty = function () {
	            return this._anyControls(function (control) { return control.dirty; });
	        };
	        /**
	         * @return {?}
	         */
	        AbstractControl.prototype._anyControlsTouched = function () {
	            return this._anyControls(function (control) { return control.touched; });
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updatePristine = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._pristine = !this._anyControlsDirty();
	            if (this._parent && !onlySelf) {
	                this._parent._updatePristine({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * @param {?=} __0
	         * @return {?}
	         */
	        AbstractControl.prototype._updateTouched = function (_a) {
	            var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	            this._touched = this._anyControlsTouched();
	            if (this._parent && !onlySelf) {
	                this._parent._updateTouched({ onlySelf: onlySelf });
	            }
	        };
	        /**
	         * @param {?} formState
	         * @return {?}
	         */
	        AbstractControl.prototype._isBoxedValue = function (formState) {
	            return typeof formState === 'object' && formState !== null &&
	                Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	        return AbstractControl;
	    }());
	    /**
	     *  *
	      * It is one of the three fundamental building blocks of Angular forms, along with
	      * {@link FormGroup} and {@link FormArray}.
	      * *
	      * *
	      * When instantiating a {@link FormControl}, you can pass in an initial value as the
	      * first argument. Example:
	      * *
	      * ```ts
	      * const ctrl = new FormControl('some value');
	      * console.log(ctrl.value);     // 'some value'
	      * *```
	      * *
	      * You can also initialize the control with a form state object on instantiation,
	      * which includes both the value and whether or not the control is disabled.
	      * You can't use the value key without the disabled key; both are required
	      * to use this way of initialization.
	      * *
	      * ```ts
	      * const ctrl = new FormControl({value: 'n/a', disabled: true});
	      * console.log(ctrl.value);     // 'n/a'
	      * console.log(ctrl.status);   // 'DISABLED'
	      * ```
	      * *
	      * To include a sync validator (or an array of sync validators) with the control,
	      * pass it in as the second argument. Async validators are also supported, but
	      * have to be passed in separately as the third arg.
	      * *
	      * ```ts
	      * const ctrl = new FormControl('', Validators.required);
	      * console.log(ctrl.value);     // ''
	      * console.log(ctrl.status);   // 'INVALID'
	      * ```
	      * *
	      * See its superclass, {@link AbstractControl}, for more properties and methods.
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormControl = (function (_super) {
	        __extends$6(FormControl, _super);
	        /**
	         * @param {?=} formState
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormControl(formState, validator, asyncValidator) {
	            if (formState === void 0) { formState = null; }
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator));
	            /** @internal */
	            this._onChange = [];
	            this._applyFormState(formState);
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	            this._initObservables();
	        }
	        /**
	         *  Set the value of the form control to `value`.
	          * *
	          * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	          * and not its parent component. This defaults to false.
	          * *
	          * If `emitEvent` is `true`, this
	          * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	          * to true (as it falls through to `updateValueAndValidity`).
	          * *
	          * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	          * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	          * specified.
	          * *
	          * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	          * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormControl.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	            this._value = value;
	            if (this._onChange.length && emitModelToViewChange !== false) {
	                this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
	            }
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of a control.
	          * *
	          * This function is functionally the same as {@link FormControl.setValue} at this level.
	          * It exists for symmetry with {@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	          * where it does behave differently.
	         * @param {?} value
	         * @param {?=} options
	         * @return {?}
	         */
	        FormControl.prototype.patchValue = function (value, options) {
	            if (options === void 0) { options = {}; }
	            this.setValue(value, options);
	        };
	        /**
	         *  Resets the form control. This means by default:
	          * *
	          * * it is marked as `pristine`
	          * * it is marked as `untouched`
	          * * value is set to null
	          * *
	          * You can also reset to a specific form state by passing through a standalone
	          * value or a form state object that contains both a value and a disabled state
	          * (these are the only two properties that cannot be calculated).
	          * *
	          * Ex:
	          * *
	          * ```ts
	          * this.control.reset('Nancy');
	          * *
	          * console.log(this.control.value);  // 'Nancy'
	          * ```
	          * *
	          * OR
	          * *
	          * ```
	          * this.control.reset({value: 'Nancy', disabled: true});
	          * *
	          * console.log(this.control.value);  // 'Nancy'
	          * console.log(this.control.status);  // 'DISABLED'
	          * ```
	         * @param {?=} formState
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormControl.prototype.reset = function (formState, _a) {
	            if (formState === void 0) { formState = null; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._applyFormState(formState);
	            this.markAsPristine({ onlySelf: onlySelf });
	            this.markAsUntouched({ onlySelf: onlySelf });
	            this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._updateValue = function () { };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormControl.prototype._anyControls = function (condition) { return false; };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	        /**
	         *  Register a listener for change events.
	         * @param {?} fn
	         * @return {?}
	         */
	        FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	        /**
	         * @return {?}
	         */
	        FormControl.prototype._clearChangeFns = function () {
	            this._onChange = [];
	            this._onDisabledChange = [];
	            this._onCollectionChange = function () { };
	        };
	        /**
	         *  Register a listener for disabled events.
	         * @param {?} fn
	         * @return {?}
	         */
	        FormControl.prototype.registerOnDisabledChange = function (fn) {
	            this._onDisabledChange.push(fn);
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormControl.prototype._forEachChild = function (cb) { };
	        /**
	         * @param {?} formState
	         * @return {?}
	         */
	        FormControl.prototype._applyFormState = function (formState) {
	            if (this._isBoxedValue(formState)) {
	                this._value = formState.value;
	                formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                    this.enable({ onlySelf: true, emitEvent: false });
	            }
	            else {
	                this._value = formState;
	            }
	        };
	        return FormControl;
	    }(AbstractControl));
	    /**
	     *  instances.
	      * *
	      * A `FormGroup` aggregates the values of each child {@link FormControl} into one object,
	      * with each control name as the key.  It calculates its status by reducing the statuses
	      * of its children. For example, if one of the controls in a group is invalid, the entire
	      * group becomes invalid.
	      * *
	      * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	      * along with {@link FormControl} and {@link FormArray}.
	      * *
	      * *
	      * When instantiating a {@link FormGroup}, pass in a collection of child controls as the first
	      * argument. The key for each child will be the name under which it is registered.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const form = new FormGroup({
	      * first: new FormControl('Nancy', Validators.minLength(2)),
	      * last: new FormControl('Drew'),
	      * });
	      * *
	      * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	      * console.log(form.status);  // 'VALID'
	      * ```
	      * *
	      * You can also include group-level validators as the second arg, or group-level async
	      * validators as the third arg. These come in handy when you want to perform validation
	      * that considers the value of more than one child control.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const form = new FormGroup({
	      * password: new FormControl('', Validators.minLength(2)),
	      * passwordConfirm: new FormControl('', Validators.minLength(2)),
	      * }, passwordMatchValidator);
	      * *
	      * *
	      * function passwordMatchValidator(g: FormGroup) {
	      * return g.get('password').value === g.get('passwordConfirm').value
	      * ? null : {'mismatch': true};
	      * }
	      * ```
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormGroup = (function (_super) {
	        __extends$6(FormGroup, _super);
	        /**
	         * @param {?} controls
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormGroup(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         *  Registers a control with the group's list of controls.
	          * *
	          * This method does not update value or validity of the control, so for
	          * most cases you'll want to use {@link FormGroup.addControl} instead.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.registerControl = function (name, control) {
	            if (this.controls[name])
	                return this.controls[name];
	            this.controls[name] = control;
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	            return control;
	        };
	        /**
	         *  Add a control to this group.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.addControl = function (name, control) {
	            this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Remove a control from this group.
	         * @param {?} name
	         * @return {?}
	         */
	        FormGroup.prototype.removeControl = function (name) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Replace an existing control.
	         * @param {?} name
	         * @param {?} control
	         * @return {?}
	         */
	        FormGroup.prototype.setControl = function (name, control) {
	            if (this.controls[name])
	                this.controls[name]._registerOnCollectionChange(function () { });
	            delete (this.controls[name]);
	            if (control)
	                this.registerControl(name, control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Check whether there is an enabled control with the given name in the group.
	          * *
	          * It will return false for disabled controls. If you'd like to check for
	          * existence in the group only, use {@link AbstractControl.get} instead.
	         * @param {?} controlName
	         * @return {?}
	         */
	        FormGroup.prototype.contains = function (controlName) {
	            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	        };
	        /**
	         *  Sets the value of the {@link FormGroup}. It accepts an object that matches
	          * the structure of the group, with control names as keys.
	          * *
	          * This method performs strict checks, so it will throw an error if you try
	          * to set the value of a control that doesn't exist or if you exclude the
	          * value of a control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const form = new FormGroup({
	          * first: new FormControl(),
	          * last: new FormControl()
	          * });
	          * console.log(form.value);   // {first: null, last: null}
	          * *
	          * form.setValue({first: 'Nancy', last: 'Drew'});
	          * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	          * *
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            Object.keys(value).forEach(function (name) {
	                _this._throwIfControlMissing(name);
	                _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormGroup}. It accepts an object with control
	          * names as keys, and will do its best to match the values to the correct controls
	          * in the group.
	          * *
	          * It accepts both super-sets and sub-sets of the group without throwing an error.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const form = new FormGroup({
	          * first: new FormControl(),
	          * last: new FormControl()
	          * });
	          * console.log(form.value);   // {first: null, last: null}
	          * *
	          * form.patchValue({first: 'Nancy'});
	          * console.log(form.value);   // {first: 'Nancy', last: null}
	          * *
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            Object.keys(value).forEach(function (name) {
	                if (_this.controls[name]) {
	                    _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Resets the {@link FormGroup}. This means by default:
	          * *
	          * * The group and all descendants are marked `pristine`
	          * * The group and all descendants are marked `untouched`
	          * * The value of all descendants will be null or null maps
	          * *
	          * You can also reset to a specific form state by passing in a map of states
	          * that matches the structure of your form, with control names as keys. The state
	          * can be a standalone value or a form state object with both a value and a disabled
	          * status.
	          * *
	          * ### Example
	          * *
	          * ```ts
	          * this.form.reset({first: 'name', last: 'last name'});
	          * *
	          * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	          * ```
	          * *
	          * - OR -
	          * *
	          * ```
	          * this.form.reset({
	          * first: {value: 'name', disabled: true},
	          * last: 'last'
	          * });
	          * *
	          * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	          * console.log(this.form.get('first').status);  // 'DISABLED'
	          * ```
	         * @param {?=} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormGroup.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = {}; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, name) {
	                control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         *  The aggregate value of the {@link FormGroup}, including any disabled controls.
	          * *
	          * If you'd like to include all values regardless of disabled status, use this method.
	          * Otherwise, the `value` property is the best way to get the value of the group.
	         * @return {?}
	         */
	        FormGroup.prototype.getRawValue = function () {
	            return this._reduceChildren({}, function (acc, control, name) {
	                acc[name] = control.value;
	                return acc;
	            });
	        };
	        /**
	         * @param {?} name
	         * @return {?}
	         */
	        FormGroup.prototype._throwIfControlMissing = function (name) {
	            if (!Object.keys(this.controls).length) {
	                throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.controls[name]) {
	                throw new Error("Cannot find form control with name: " + name + ".");
	            }
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormGroup.prototype._forEachChild = function (cb) {
	            var _this = this;
	            Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) {
	                control.setParent(_this);
	                control._registerOnCollectionChange(_this._onCollectionChange);
	            });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormGroup.prototype._anyControls = function (condition) {
	            var _this = this;
	            var /** @type {?} */ res = false;
	            this._forEachChild(function (control, name) {
	                res = res || (_this.contains(name) && condition(control));
	            });
	            return res;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._reduceValue = function () {
	            var _this = this;
	            return this._reduceChildren({}, function (acc, control, name) {
	                if (control.enabled || _this.disabled) {
	                    acc[name] = control.value;
	                }
	                return acc;
	            });
	        };
	        /**
	         * @param {?} initValue
	         * @param {?} fn
	         * @return {?}
	         */
	        FormGroup.prototype._reduceChildren = function (initValue, fn) {
	            var /** @type {?} */ res = initValue;
	            this._forEachChild(function (control, name) { res = fn(res, control, name); });
	            return res;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroup.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	                var controlName = _a[_i];
	                if (this.controls[controlName].enabled) {
	                    return false;
	                }
	            }
	            return Object.keys(this.controls).length > 0 || this.disabled;
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        FormGroup.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, name) {
	                if (value[name] === undefined) {
	                    throw new Error("Must supply a value for form control with name: '" + name + "'.");
	                }
	            });
	        };
	        return FormGroup;
	    }(AbstractControl));
	    /**
	     *  instances.
	      * *
	      * A `FormArray` aggregates the values of each child {@link FormControl} into an array.
	      * It calculates its status by reducing the statuses of its children. For example, if one of
	      * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	      * *
	      * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	      * along with {@link FormControl} and {@link FormGroup}.
	      * *
	      * *
	      * When instantiating a {@link FormArray}, pass in an array of child controls as the first
	      * argument.
	      * *
	      * ### Example
	      * *
	      * ```
	      * const arr = new FormArray([
	      * new FormControl('Nancy', Validators.minLength(2)),
	      * new FormControl('Drew'),
	      * ]);
	      * *
	      * console.log(arr.value);   // ['Nancy', 'Drew']
	      * console.log(arr.status);  // 'VALID'
	      * ```
	      * *
	      * You can also include array-level validators as the second arg, or array-level async
	      * validators as the third arg. These come in handy when you want to perform validation
	      * that considers the value of more than one child control.
	      * *
	      * ### Adding or removing controls
	      * *
	      * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	      * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	      * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	      * the `FormArray` directly, as that will result in strange and unexpected behavior such
	      * as broken change detection.
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	     */
	    var FormArray = (function (_super) {
	        __extends$6(FormArray, _super);
	        /**
	         * @param {?} controls
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         */
	        function FormArray(controls, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            _super.call(this, validator, asyncValidator);
	            this.controls = controls;
	            this._initObservables();
	            this._setUpControls();
	            this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        }
	        /**
	         *  Get the {@link AbstractControl} at the given `index` in the array.
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype.at = function (index) { return this.controls[index]; };
	        /**
	         *  Insert a new {@link AbstractControl} at the end of the array.
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.push = function (control) {
	            this.controls.push(control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Insert a new {@link AbstractControl} at the given `index` in the array.
	         * @param {?} index
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.insert = function (index, control) {
	            this.controls.splice(index, 0, control);
	            this._registerControl(control);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Remove the control at the given `index` in the array.
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype.removeAt = function (index) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        /**
	         *  Replace an existing control.
	         * @param {?} index
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype.setControl = function (index, control) {
	            if (this.controls[index])
	                this.controls[index]._registerOnCollectionChange(function () { });
	            this.controls.splice(index, 1);
	            if (control) {
	                this.controls.splice(index, 0, control);
	                this._registerControl(control);
	            }
	            this.updateValueAndValidity();
	            this._onCollectionChange();
	        };
	        Object.defineProperty(FormArray.prototype, "length", {
	            /**
	             *  Length of the control array.
	             * @return {?}
	             */
	            get: function () { return this.controls.length; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         *  Sets the value of the {@link FormArray}. It accepts an array that matches
	          * the structure of the control.
	          * *
	          * This method performs strict checks, so it will throw an error if you try
	          * to set the value of a control that doesn't exist or if you exclude the
	          * value of a control.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const arr = new FormArray([
	          * new FormControl(),
	          * new FormControl()
	          * ]);
	          * console.log(arr.value);   // [null, null]
	          * *
	          * arr.setValue(['Nancy', 'Drew']);
	          * console.log(arr.value);   // ['Nancy', 'Drew']
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.setValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._checkAllValuesPresent(value);
	            value.forEach(function (newValue, index) {
	                _this._throwIfControlMissing(index);
	                _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Patches the value of the {@link FormArray}. It accepts an array that matches the
	          * structure of the control, and will do its best to match the values to the correct
	          * controls in the group.
	          * *
	          * It accepts both super-sets and sub-sets of the array without throwing an error.
	          * *
	          * ### Example
	          * *
	          * ```
	          * const arr = new FormArray([
	          * new FormControl(),
	          * new FormControl()
	          * ]);
	          * console.log(arr.value);   // [null, null]
	          * *
	          * arr.patchValue(['Nancy']);
	          * console.log(arr.value);   // ['Nancy', null]
	          * ```
	         * @param {?} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.patchValue = function (value, _a) {
	            var _this = this;
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            value.forEach(function (newValue, index) {
	                if (_this.at(index)) {
	                    _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	                }
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        };
	        /**
	         *  Resets the {@link FormArray}. This means by default:
	          * *
	          * * The array and all descendants are marked `pristine`
	          * * The array and all descendants are marked `untouched`
	          * * The value of all descendants will be null or null maps
	          * *
	          * You can also reset to a specific form state by passing in an array of states
	          * that matches the structure of the control. The state can be a standalone value
	          * or a form state object with both a value and a disabled status.
	          * *
	          * ### Example
	          * *
	          * ```ts
	          * this.arr.reset(['name', 'last name']);
	          * *
	          * console.log(this.arr.value);  // ['name', 'last name']
	          * ```
	          * *
	          * - OR -
	          * *
	          * ```
	          * this.arr.reset([
	          * {value: 'name', disabled: true},
	          * 'last'
	          * ]);
	          * *
	          * console.log(this.arr.value);  // ['name', 'last name']
	          * console.log(this.arr.get(0).status);  // 'DISABLED'
	          * ```
	         * @param {?=} value
	         * @param {?=} __1
	         * @return {?}
	         */
	        FormArray.prototype.reset = function (value, _a) {
	            if (value === void 0) { value = []; }
	            var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	            this._forEachChild(function (control, index) {
	                control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
	            });
	            this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	            this._updatePristine({ onlySelf: onlySelf });
	            this._updateTouched({ onlySelf: onlySelf });
	        };
	        /**
	         *  The aggregate value of the array, including any disabled controls.
	          * *
	          * If you'd like to include all values regardless of disabled status, use this method.
	          * Otherwise, the `value` property is the best way to get the value of the array.
	         * @return {?}
	         */
	        FormArray.prototype.getRawValue = function () { return this.controls.map(function (control) { return control.value; }); };
	        /**
	         * @param {?} index
	         * @return {?}
	         */
	        FormArray.prototype._throwIfControlMissing = function (index) {
	            if (!this.controls.length) {
	                throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	            }
	            if (!this.at(index)) {
	                throw new Error("Cannot find form control at index " + index);
	            }
	        };
	        /**
	         * @param {?} cb
	         * @return {?}
	         */
	        FormArray.prototype._forEachChild = function (cb) {
	            this.controls.forEach(function (control, index) { cb(control, index); });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._updateValue = function () {
	            var _this = this;
	            this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	                .map(function (control) { return control.value; });
	        };
	        /**
	         * @param {?} condition
	         * @return {?}
	         */
	        FormArray.prototype._anyControls = function (condition) {
	            return this.controls.some(function (control) { return control.enabled && condition(control); });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._setUpControls = function () {
	            var _this = this;
	            this._forEachChild(function (control) { return _this._registerControl(control); });
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        FormArray.prototype._checkAllValuesPresent = function (value) {
	            this._forEachChild(function (control, i) {
	                if (value[i] === undefined) {
	                    throw new Error("Must supply a value for form control at index: " + i + ".");
	                }
	            });
	        };
	        /**
	         * @return {?}
	         */
	        FormArray.prototype._allControlsDisabled = function () {
	            for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	                var control = _a[_i];
	                if (control.enabled)
	                    return false;
	            }
	            return this.controls.length > 0 || this.disabled;
	        };
	        /**
	         * @param {?} control
	         * @return {?}
	         */
	        FormArray.prototype._registerControl = function (control) {
	            control.setParent(this);
	            control._registerOnCollectionChange(this._onCollectionChange);
	        };
	        return FormArray;
	    }(AbstractControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$4 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formDirectiveProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgForm; })
	    };
	    var /** @type {?} */ resolvedPromise = Promise.resolve(null);
	    /**
	     *  to track aggregate form value and validation status.
	      * *
	      * *
	      * As soon as you import the `FormsModule`, this directive becomes active by default on
	      * all `<form>` tags.  You don't need to add a special selector.
	      * *
	      * You can export the directive into a local template variable using `ngForm` as the key
	      * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	      * {@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	      * will give you access to the aggregate value and validity status of the form, as well as
	      * user interaction properties like `dirty` and `touched`.
	      * *
	      * To register child controls with the form, you'll want to use {@link NgModel} with a
	      * `name` attribute.  You can also use {@link NgModelGroup} if you'd like to create
	      * sub-groups within the form.
	      * *
	      * You can listen to the directive's `ngSubmit` event to be notified when the user has
	      * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	      * submission event.
	      * *
	      * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `FormsModule`
	      * *
	      * @stable
	     */
	    var NgForm = (function (_super) {
	        __extends$4(NgForm, _super);
	        /**
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function NgForm(validators, asyncValidators) {
	            _super.call(this);
	            this._submitted = false;
	            this.ngSubmit = new EventEmitter();
	            this.form =
	                new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        }
	        Object.defineProperty(NgForm.prototype, "submitted", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgForm.prototype, "controls", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form.controls; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.addControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                dir._control = (container.registerControl(dir.name, dir.control));
	                setUpControl(dir.control, dir);
	                dir.control.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.removeControl = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.addFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                var /** @type {?} */ group = new FormGroup({});
	                setUpFormContainer(group, dir);
	                container.registerControl(dir.name, group);
	                group.updateValueAndValidity({ emitEvent: false });
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.removeFormGroup = function (dir) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ container = _this._findContainer(dir.path);
	                if (container) {
	                    container.removeControl(dir.name);
	                }
	            });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @param {?} value
	         * @return {?}
	         */
	        NgForm.prototype.updateModel = function (dir, value) {
	            var _this = this;
	            resolvedPromise.then(function () {
	                var /** @type {?} */ ctrl = (_this.form.get(dir.path));
	                ctrl.setValue(value);
	            });
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	        /**
	         * @param {?} $event
	         * @return {?}
	         */
	        NgForm.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        /**
	         * @return {?}
	         */
	        NgForm.prototype.onReset = function () { this.resetForm(); };
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        NgForm.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /**
	         * @param {?} path
	         * @return {?}
	         */
	        NgForm.prototype._findContainer = function (path) {
	            path.pop();
	            return path.length ? (this.form.get(path)) : this.form;
	        };
	        NgForm.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                        providers: [formDirectiveProvider],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        outputs: ['ngSubmit'],
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgForm.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        return NgForm;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var /** @type {?} */ Examples = {
	        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; let i=index\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	    };
	
	    var TemplateDrivenErrors = (function () {
	        function TemplateDrivenErrors() {
	        }
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.modelParentException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + Examples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + Examples.ngModelWithFormGroup);
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.formGroupNameException = function () {
	            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.missingNameException = function () {
	            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	        };
	        /**
	         * @return {?}
	         */
	        TemplateDrivenErrors.modelGroupParentException = function () {
	            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + Examples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + Examples.ngModelGroup);
	        };
	        return TemplateDrivenErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$8 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ modelGroupProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	    };
	    /**
	     *  *
	      * *
	      * This directive can only be used as a child of {@link NgForm} (or in other words,
	      * within `<form>` tags).
	      * *
	      * Use this directive if you'd like to create a sub-group within a form. This can
	      * come in handy if you want to validate a sub-group of your form separately from
	      * the rest of your form, or if some values in your domain model make more sense to
	      * consume together in a nested object.
	      * *
	      * Pass in the name you'd like this sub-group to have and it will become the key
	      * for the sub-group in the form's full value. You can also export the directive into
	      * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	      * *
	      * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `FormsModule`
	      * *
	     */
	    var NgModelGroup = (function (_super) {
	        __extends$8(NgModelGroup, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function NgModelGroup(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        NgModelGroup.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelGroupParentException();
	            }
	        };
	        NgModelGroup.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	        ];
	        /** @nocollapse */
	        NgModelGroup.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        NgModelGroup.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	        };
	        return NgModelGroup;
	    }(AbstractFormGroupDirective));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$7 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formControlBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return NgModel; })
	    };
	    /**
	     * `ngModel` forces an additional change detection run when its inputs change:
	     * E.g.:
	     * ```
	     * <div>{{myModel.valid}}</div>
	     * <input [(ngModel)]="myValue" #myModel="ngModel">
	     * ```
	     * I.e. `ngModel` can export itself on the element and then be used in the template.
	     * Normally, this would result in expressions before the `input` that use the exported directive
	     * to have and old value as they have been
	     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
	     * detection run.
	     *
	     * Notes:
	     * - this is just one extra run no matter how many `ngModel` have been changed.
	     * - this is a general problem when using `exportAs` for directives!
	     */
	    var /** @type {?} */ resolvedPromise$1 = Promise.resolve(null);
	    /**
	     *  to a form control element.
	      * *
	      * The {@link FormControl} instance will track the value, user interaction, and
	      * validation status of the control and keep the view synced with the model. If used
	      * within a parent form, the directive will also register itself with the form as a child
	      * control.
	      * *
	      * *
	      * This directive can be used by itself or as part of a larger form. All you need is the
	      * `ngModel` selector to activate it.
	      * *
	      * It accepts a domain model as an optional {@link @Input}. If you have a one-way binding
	      * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	      * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	      * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	      * the domain model in your class as well.
	      * *
	      * If you wish to inspect the properties of the associated {@link FormControl} (like
	      * validity state), you can also export the directive into a local template variable using
	      * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	      * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	      * will fall through to the control anyway, so you can access them directly. You can see a
	      * full list of properties directly available in {@link AbstractControlDirective}.
	      * *
	      * The following is an example of a simple standalone control using `ngModel`:
	      * *
	      * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	      * *
	      * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	      * so that the control can be registered with the parent form under that name.
	      * *
	      * It's worth noting that in the context of a parent form, you often can skip one-way or
	      * two-way binding because the parent form will sync the value for you. You can access
	      * its properties by exporting it into a local template variable using `ngForm` (ex:
	      * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	      * *
	      * If you do need to populate initial values into your form, using a one-way binding for
	      * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	      * than the domain model's value on submit.
	      * *
	      * Take a look at an example of using `ngModel` within a form:
	      * *
	      * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	      * *
	      * To see `ngModel` examples with different form control types, see:
	      * *
	      * * Radio buttons: {@link RadioControlValueAccessor}
	      * * Selects: {@link SelectControlValueAccessor}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: `FormsModule`
	      * *
	      * @stable
	     */
	    var NgModel = (function (_super) {
	        __extends$7(NgModel, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function NgModel(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            /** @internal */
	            this._control = new FormControl();
	            /** @internal */
	            this._registered = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        NgModel.prototype.ngOnChanges = function (changes) {
	            this._checkForErrors();
	            if (!this._registered)
	                this._setUpControl();
	            if ('isDisabled' in changes) {
	                this._updateDisabled(changes);
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this._updateValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	        Object.defineProperty(NgModel.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return this._parent ? controlPath(this.name, this._parent) : [this.name];
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(NgModel.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        NgModel.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._setUpControl = function () {
	            this._isStandalone() ? this._setUpStandalone() :
	                this.formDirective.addControl(this);
	            this._registered = true;
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._isStandalone = function () {
	            return !this._parent || (this.options && this.options.standalone);
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._setUpStandalone = function () {
	            setUpControl(this._control, this);
	            this._control.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkForErrors = function () {
	            if (!this._isStandalone()) {
	                this._checkParentType();
	            }
	            this._checkName();
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkParentType = function () {
	            if (!(this._parent instanceof NgModelGroup) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                TemplateDrivenErrors.formGroupNameException();
	            }
	            else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	                TemplateDrivenErrors.modelParentException();
	            }
	        };
	        /**
	         * @return {?}
	         */
	        NgModel.prototype._checkName = function () {
	            if (this.options && this.options.name)
	                this.name = this.options.name;
	            if (!this._isStandalone() && !this.name) {
	                TemplateDrivenErrors.missingNameException();
	            }
	        };
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        NgModel.prototype._updateValue = function (value) {
	            var _this = this;
	            resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	        };
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        NgModel.prototype._updateDisabled = function (changes) {
	            var _this = this;
	            var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
	            var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	            resolvedPromise$1.then(function () {
	                if (isDisabled && !_this.control.disabled) {
	                    _this.control.disable();
	                }
	                else if (!isDisabled && _this.control.disabled) {
	                    _this.control.enable();
	                }
	            });
	        };
	        NgModel.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[ngModel]:not([formControlName]):not([formControl])',
	                        providers: [formControlBinding],
	                        exportAs: 'ngModel'
	                    },] },
	        ];
	        /** @nocollapse */
	        NgModel.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        NgModel.propDecorators = {
	            'name': [{ type: _angular_core.Input },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	        };
	        return NgModel;
	    }(NgControl));
	
	    var ReactiveErrors = (function () {
	        function ReactiveErrors() {
	        }
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.controlParentException = function () {
	            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formControlName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.ngModelGroupException = function () {
	            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + Examples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + Examples.ngModelGroup);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.missingFormException = function () {
	            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + Examples.formControlName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.groupParentException = function () {
	            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + Examples.formGroupName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.arrayParentException = function () {
	            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + Examples.formArrayName);
	        };
	        /**
	         * @return {?}
	         */
	        ReactiveErrors.disabledAttrWarning = function () {
	            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	        };
	        return ReactiveErrors;
	    }());
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$9 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formControlBinding$1 = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	    };
	    /**
	     *  *
	      * In other words, this directive ensures that any values written to the {@link FormControl}
	      * instance programmatically will be written to the DOM element (model -> view). Conversely,
	      * any values written to the DOM element through user input will be reflected in the
	      * {@link FormControl} instance (view -> model).
	      * *
	      * *
	      * Use this directive if you'd like to create and manage a {@link FormControl} instance directly.
	      * Simply create a {@link FormControl}, save it to your component class, and pass it into the
	      * {@link FormControlDirective}.
	      * *
	      * This directive is designed to be used as a standalone control.  Unlike {@link FormControlName},
	      * it does not require that your {@link FormControl} instance be part of any parent
	      * {@link FormGroup}, and it won't be registered to any {@link FormGroupDirective} that
	      * exists above it.
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormControl} instance. See a full list of available properties in
	      * {@link AbstractControl}.
	      * *
	      * **Set the value**: You can pass in an initial value when instantiating the {@link FormControl},
	      * or you can set it programmatically later using {@link AbstractControl.setValue} or
	      * {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the control, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	      * @stable
	     */
	    var FormControlDirective = (function (_super) {
	        __extends$9(FormControlDirective, _super);
	        /**
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function FormControlDirective(validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this.update = new EventEmitter();
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	            /**
	             * @param {?} isDisabled
	             * @return {?}
	             */
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlDirective.prototype.ngOnChanges = function (changes) {
	            if (this._isControlChanged(changes)) {
	                setUpControl(this.form, this);
	                if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                    this.valueAccessor.setDisabledState(true);
	                }
	                this.form.updateValueAndValidity({ emitEvent: false });
	            }
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.form.setValue(this.model);
	                this.viewModel = this.model;
	            }
	        };
	        Object.defineProperty(FormControlDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlDirective.prototype._isControlChanged = function (changes) {
	            return changes.hasOwnProperty('form');
	        };
	        FormControlDirective.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	        ];
	        /** @nocollapse */
	        FormControlDirective.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        FormControlDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlDirective;
	    }(NgControl));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$11 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formDirectiveProvider$1 = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	    };
	    /**
	     *  *
	      * *
	      * This directive accepts an existing {@link FormGroup} instance. It will then use this
	      * {@link FormGroup} instance to match any child {@link FormControl}, {@link FormGroup},
	      * and {@link FormArray} instances to child {@link FormControlName}, {@link FormGroupName},
	      * and {@link FormArrayName} directives.
	      * *
	      * **Set value**: You can set the form's initial value when instantiating the
	      * {@link FormGroup}, or you can set it programmatically later using the {@link FormGroup}'s
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue} methods.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	      * to the {@link FormGroup}'s {@link AbstractControl.valueChanges} event.  You can also listen to
	      * its {@link AbstractControl.statusChanges} event to be notified when the validation status is
	      * re-calculated.
	      * *
	      * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
	      * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	      * submission event.
	      * *
	      * ### Example
	      * *
	      * In this example, we create form controls for first name and last name.
	      * *
	      * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: {@link ReactiveFormsModule}
	      * *
	      * @stable
	     */
	    var FormGroupDirective = (function (_super) {
	        __extends$11(FormGroupDirective, _super);
	        /**
	         * @param {?} _validators
	         * @param {?} _asyncValidators
	         */
	        function FormGroupDirective(_validators, _asyncValidators) {
	            _super.call(this);
	            this._validators = _validators;
	            this._asyncValidators = _asyncValidators;
	            this._submitted = false;
	            this.directives = [];
	            this.form = null;
	            this.ngSubmit = new EventEmitter();
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormGroupDirective.prototype.ngOnChanges = function (changes) {
	            this._checkFormPresent();
	            if (changes.hasOwnProperty('form')) {
	                this._updateValidators();
	                this._updateDomValue();
	                this._updateRegistrations();
	            }
	        };
	        Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._submitted; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.form; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormGroupDirective.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return []; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addControl = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpControl(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	            this.directives.push(dir);
	            return ctrl;
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeControl = function (dir) { ListWrapper.remove(this.directives, dir); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addFormGroup = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.addFormArray = function (dir) {
	            var /** @type {?} */ ctrl = this.form.get(dir.path);
	            setUpFormContainer(ctrl, dir);
	            ctrl.updateValueAndValidity({ emitEvent: false });
	        };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.removeFormArray = function (dir) { };
	        /**
	         * @param {?} dir
	         * @return {?}
	         */
	        FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
	        /**
	         * @param {?} dir
	         * @param {?} value
	         * @return {?}
	         */
	        FormGroupDirective.prototype.updateModel = function (dir, value) {
	            var /** @type {?} */ ctrl = (this.form.get(dir.path));
	            ctrl.setValue(value);
	        };
	        /**
	         * @param {?} $event
	         * @return {?}
	         */
	        FormGroupDirective.prototype.onSubmit = function ($event) {
	            this._submitted = true;
	            this.ngSubmit.emit($event);
	            return false;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	        /**
	         * @param {?=} value
	         * @return {?}
	         */
	        FormGroupDirective.prototype.resetForm = function (value) {
	            if (value === void 0) { value = undefined; }
	            this.form.reset(value);
	            this._submitted = false;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateDomValue = function () {
	            var _this = this;
	            this.directives.forEach(function (dir) {
	                var /** @type {?} */ newCtrl = _this.form.get(dir.path);
	                if (dir._control !== newCtrl) {
	                    cleanUpControl(dir._control, dir);
	                    if (newCtrl)
	                        setUpControl(newCtrl, dir);
	                    dir._control = newCtrl;
	                }
	            });
	            this.form._updateTreeValidity({ emitEvent: false });
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateRegistrations = function () {
	            var _this = this;
	            this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	            if (this._oldForm)
	                this._oldForm._registerOnCollectionChange(function () { });
	            this._oldForm = this.form;
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._updateValidators = function () {
	            var /** @type {?} */ sync = composeValidators(this._validators);
	            this.form.validator = Validators.compose([this.form.validator, sync]);
	            var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
	            this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
	        };
	        /**
	         * @return {?}
	         */
	        FormGroupDirective.prototype._checkFormPresent = function () {
	            if (!this.form) {
	                ReactiveErrors.missingFormException();
	            }
	        };
	        FormGroupDirective.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[formGroup]',
	                        providers: [formDirectiveProvider$1],
	                        host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                        exportAs: 'ngForm'
	                    },] },
	        ];
	        /** @nocollapse */
	        FormGroupDirective.ctorParameters = function () { return [
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormGroupDirective.propDecorators = {
	            'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	            'ngSubmit': [{ type: _angular_core.Output },],
	        };
	        return FormGroupDirective;
	    }(ControlContainer));
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$12 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ formGroupNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	    };
	    /**
	     *  *
	      * *
	      * This directive can only be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the nested {@link FormGroup} you want to link, and
	      * will look for a {@link FormGroup} registered with that name in the parent
	      * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	      * *
	      * Nested form groups can come in handy when you want to validate a sub-group of a
	      * form separately from the rest or when you'd like to group the values of certain
	      * controls into their own nested object.
	      * *
	      * **Access the group**: You can access the associated {@link FormGroup} using the
	      * {@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	      * *
	      * You can also access individual controls within the group using dot syntax.
	      * Ex: `this.form.get('name.first')`
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormGroup}. See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set the value**: You can set an initial value for each child control when instantiating
	      * the {@link FormGroup}, or you can set it programmatically later using
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the group, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	     */
	    var FormGroupName = (function (_super) {
	        __extends$12(FormGroupName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function FormGroupName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        FormGroupName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.groupParentException();
	            }
	        };
	        FormGroupName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormGroupName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormGroupName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	        };
	        return FormGroupName;
	    }(AbstractFormGroupDirective));
	    var /** @type {?} */ formArrayNameProvider = {
	        provide: ControlContainer,
	        useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	    };
	    /**
	     *  *
	      * *
	      * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the nested {@link FormArray} you want to link, and
	      * will look for a {@link FormArray} registered with that name in the parent
	      * {@link FormGroup} instance you passed into {@link FormGroupDirective}.
	      * *
	      * Nested form arrays can come in handy when you have a group of form controls but
	      * you're not sure how many there will be. Form arrays allow you to create new
	      * form controls dynamically.
	      * *
	      * **Access the array**: You can access the associated {@link FormArray} using the
	      * {@link AbstractControl.get} method on the parent {@link FormGroup}.
	      * Ex: `this.form.get('cities')`.
	      * *
	      * **Get the value**: the `value` property is always synced and available on the
	      * {@link FormArray}. See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set the value**: You can set an initial value for each child control when instantiating
	      * the {@link FormArray}, or you can set the value programmatically later using the
	      * {@link FormArray}'s {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}
	      * methods.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the array, you can
	      * subscribe to the {@link FormArray}'s {@link AbstractControl.valueChanges} event.  You can also
	      * listen to its {@link AbstractControl.statusChanges} event to be notified when the validation
	      * status is re-calculated.
	      * *
	      * **Add new controls**: You can add new controls to the {@link FormArray} dynamically by
	      * calling its {@link FormArray.push} method.
	      * Ex: `this.form.get('cities').push(new FormControl());`
	      * *
	      * ### Example
	      * *
	      * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: `ReactiveFormsModule`
	      * *
	     */
	    var FormArrayName = (function (_super) {
	        __extends$12(FormArrayName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         */
	        function FormArrayName(parent, validators, asyncValidators) {
	            _super.call(this);
	            this._parent = parent;
	            this._validators = validators;
	            this._asyncValidators = asyncValidators;
	        }
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype.ngOnInit = function () {
	            this._checkParentType();
	            this.formDirective.addFormArray(this);
	        };
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeFormArray(this);
	            }
	        };
	        Object.defineProperty(FormArrayName.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this.formDirective.getFormArray(this); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return this._parent ? (this._parent.formDirective) : null;
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._validators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeAsyncValidators(this._asyncValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        FormArrayName.prototype._checkParentType = function () {
	            if (_hasInvalidParent(this._parent)) {
	                ReactiveErrors.arrayParentException();
	            }
	        };
	        FormArrayName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	        ];
	        /** @nocollapse */
	        FormArrayName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	        ]; };
	        FormArrayName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	        };
	        return FormArrayName;
	    }(ControlContainer));
	    /**
	     * @param {?} parent
	     * @return {?}
	     */
	    function _hasInvalidParent(parent) {
	        return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	            !(parent instanceof FormArrayName);
	    }
	
	    /**
	     * @license
	     * Copyright Google Inc. All Rights Reserved.
	     *
	     * Use of this source code is governed by an MIT-style license that can be
	     * found in the LICENSE file at https://angular.io/license
	     */
	    var __extends$10 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ controlNameBinding = {
	        provide: NgControl,
	        useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	    };
	    /**
	     *  element by name.
	      * *
	      * In other words, this directive ensures that any values written to the {@link FormControl}
	      * instance programmatically will be written to the DOM element (model -> view). Conversely,
	      * any values written to the DOM element through user input will be reflected in the
	      * {@link FormControl} instance (view -> model).
	      * *
	      * *
	      * This directive is designed to be used with a parent {@link FormGroupDirective} (selector:
	      * `[formGroup]`).
	      * *
	      * It accepts the string name of the {@link FormControl} instance you want to
	      * link, and will look for a {@link FormControl} registered with that name in the
	      * closest {@link FormGroup} or {@link FormArray} above it.
	      * *
	      * **Access the control**: You can access the {@link FormControl} associated with
	      * this directive by using the {@link AbstractControl.get} method.
	      * Ex: `this.form.get('first');`
	      * *
	      * **Get value**: the `value` property is always synced and available on the {@link FormControl}.
	      * See a full list of available properties in {@link AbstractControl}.
	      * *
	      * **Set value**: You can set an initial value for the control when instantiating the
	      * {@link FormControl}, or you can set it programmatically later using
	      * {@link AbstractControl.setValue} or {@link AbstractControl.patchValue}.
	      * *
	      * **Listen to value**: If you want to listen to changes in the value of the control, you can
	      * subscribe to the {@link AbstractControl.valueChanges} event.  You can also listen to
	      * {@link AbstractControl.statusChanges} to be notified when the validation status is
	      * re-calculated.
	      * *
	      * ### Example
	      * *
	      * In this example, we create form controls for first name and last name.
	      * *
	      * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	      * *
	      * To see `formControlName` examples with different form control types, see:
	      * *
	      * * Radio buttons: {@link RadioControlValueAccessor}
	      * * Selects: {@link SelectControlValueAccessor}
	      * *
	      * **npm package**: `@angular/forms`
	      * *
	      * **NgModule**: {@link ReactiveFormsModule}
	      * *
	      * @stable
	     */
	    var FormControlName = (function (_super) {
	        __extends$10(FormControlName, _super);
	        /**
	         * @param {?} parent
	         * @param {?} validators
	         * @param {?} asyncValidators
	         * @param {?} valueAccessors
	         */
	        function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	            _super.call(this);
	            this._added = false;
	            this.update = new EventEmitter();
	            this._parent = parent;
	            this._rawValidators = validators || [];
	            this._rawAsyncValidators = asyncValidators || [];
	            this.valueAccessor = selectValueAccessor(this, valueAccessors);
	        }
	        Object.defineProperty(FormControlName.prototype, "isDisabled", {
	            /**
	             * @param {?} isDisabled
	             * @return {?}
	             */
	            set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        FormControlName.prototype.ngOnChanges = function (changes) {
	            if (!this._added)
	                this._setUpControl();
	            if (isPropertyUpdated(changes, this.viewModel)) {
	                this.viewModel = this.model;
	                this.formDirective.updateModel(this, this.model);
	            }
	        };
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype.ngOnDestroy = function () {
	            if (this.formDirective) {
	                this.formDirective.removeControl(this);
	            }
	        };
	        /**
	         * @param {?} newValue
	         * @return {?}
	         */
	        FormControlName.prototype.viewToModelUpdate = function (newValue) {
	            this.viewModel = newValue;
	            this.update.emit(newValue);
	        };
	        Object.defineProperty(FormControlName.prototype, "path", {
	            /**
	             * @return {?}
	             */
	            get: function () { return controlPath(this.name, this._parent); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "formDirective", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._parent ? this._parent.formDirective : null; },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "validator", {
	            /**
	             * @return {?}
	             */
	            get: function () { return composeValidators(this._rawValidators); },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	            /**
	             * @return {?}
	             */
	            get: function () {
	                return composeAsyncValidators(this._rawAsyncValidators);
	            },
	            enumerable: true,
	            configurable: true
	        });
	        Object.defineProperty(FormControlName.prototype, "control", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._control; },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype._checkParentType = function () {
	            if (!(this._parent instanceof FormGroupName) &&
	                this._parent instanceof AbstractFormGroupDirective) {
	                ReactiveErrors.ngModelGroupException();
	            }
	            else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	                !(this._parent instanceof FormArrayName)) {
	                ReactiveErrors.controlParentException();
	            }
	        };
	        /**
	         * @return {?}
	         */
	        FormControlName.prototype._setUpControl = function () {
	            this._checkParentType();
	            this._control = this.formDirective.addControl(this);
	            if (this.control.disabled && this.valueAccessor.setDisabledState) {
	                this.valueAccessor.setDisabledState(true);
	            }
	            this._added = true;
	        };
	        FormControlName.decorators = [
	            { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	        ];
	        /** @nocollapse */
	        FormControlName.ctorParameters = function () { return [
	            { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	            { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	        ]; };
	        FormControlName.propDecorators = {
	            'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	            'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	            'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	            'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	        };
	        return FormControlName;
	    }(NgControl));
	
	    var __extends$13 = (this && this.__extends) || function (d, b) {
	        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    var /** @type {?} */ REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	        multi: true
	    };
	    var /** @type {?} */ CHECKBOX_REQUIRED_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return CheckboxRequiredValidator; }),
	        multi: true
	    };
	    /**
	     *  A Directive that adds the `required` validator to any controls marked with the
	      * `required` attribute, via the {@link NG_VALIDATORS} binding.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input name="fullName" ngModel required>
	      * ```
	      * *
	     */
	    var RequiredValidator = (function () {
	        function RequiredValidator() {
	        }
	        Object.defineProperty(RequiredValidator.prototype, "required", {
	            /**
	             * @return {?}
	             */
	            get: function () { return this._required; },
	            /**
	             * @param {?} value
	             * @return {?}
	             */
	            set: function (value) {
	                this._required = value != null && value !== false && "" + value !== 'false';
	                if (this._onChange)
	                    this._onChange();
	            },
	            enumerable: true,
	            configurable: true
	        });
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        RequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.required(c) : null;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        RequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
	                        providers: [REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        RequiredValidator.ctorParameters = function () { return []; };
	        RequiredValidator.propDecorators = {
	            'required': [{ type: _angular_core.Input },],
	        };
	        return RequiredValidator;
	    }());
	    /**
	     *  A Directive that adds the `required` validator to checkbox controls marked with the
	      * `required` attribute, via the {@link NG_VALIDATORS} binding.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input type="checkbox" name="active" ngModel required>
	      * ```
	      * *
	     */
	    var CheckboxRequiredValidator = (function (_super) {
	        __extends$13(CheckboxRequiredValidator, _super);
	        function CheckboxRequiredValidator() {
	            _super.apply(this, arguments);
	        }
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        CheckboxRequiredValidator.prototype.validate = function (c) {
	            return this.required ? Validators.requiredTrue(c) : null;
	        };
	        CheckboxRequiredValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
	                        providers: [CHECKBOX_REQUIRED_VALIDATOR],
	                        host: { '[attr.required]': 'required ? "" : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        CheckboxRequiredValidator.ctorParameters = function () { return []; };
	        return CheckboxRequiredValidator;
	    }(RequiredValidator));
	    /**
	     * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='min'}
	     */
	    var /** @type {?} */ MIN_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	        multi: true
	    };
	    /**
	     *  A directive which installs the {@link MinLengthValidator} for any `formControlName`,
	      * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	      * *
	     */
	    var MinLengthValidator = (function () {
	        function MinLengthValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        MinLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('minlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        MinLengthValidator.prototype.validate = function (c) {
	            return this.minlength == null ? null : this._validator(c);
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        MinLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.minLength(parseInt(this.minlength, 10));
	        };
	        MinLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                        providers: [MIN_LENGTH_VALIDATOR],
	                        host: { '[attr.minlength]': 'minlength ? minlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MinLengthValidator.ctorParameters = function () { return []; };
	        MinLengthValidator.propDecorators = {
	            'minlength': [{ type: _angular_core.Input },],
	        };
	        return MinLengthValidator;
	    }());
	    /**
	     * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	     *
	     * ## Example:
	     *
	     * {@example common/forms/ts/validators/validators.ts region='max'}
	     */
	    var /** @type {?} */ MAX_LENGTH_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	        multi: true
	    };
	    /**
	     *  A directive which installs the {@link MaxLengthValidator} for any `formControlName,
	      * `formControl`,
	      * or control with `ngModel` that also has a `maxlength` attribute.
	      * *
	     */
	    var MaxLengthValidator = (function () {
	        function MaxLengthValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	            if ('maxlength' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.validate = function (c) {
	            return this.maxlength != null ? this._validator(c) : null;
	        };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        MaxLengthValidator.prototype._createValidator = function () {
	            this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	        };
	        MaxLengthValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                        providers: [MAX_LENGTH_VALIDATOR],
	                        host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        MaxLengthValidator.ctorParameters = function () { return []; };
	        MaxLengthValidator.propDecorators = {
	            'maxlength': [{ type: _angular_core.Input },],
	        };
	        return MaxLengthValidator;
	    }());
	    var /** @type {?} */ PATTERN_VALIDATOR = {
	        provide: NG_VALIDATORS,
	        useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	        multi: true
	    };
	    /**
	     *  A Directive that adds the `pattern` validator to any controls marked with the
	      * `pattern` attribute, via the {@link NG_VALIDATORS} binding. Uses attribute value
	      * as the regex to validate Control value against.  Follows pattern attribute
	      * semantics; i.e. regex must match entire Control value.
	      * *
	      * ### Example
	      * *
	      * ```
	      * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	      * ```
	     */
	    var PatternValidator = (function () {
	        function PatternValidator() {
	        }
	        /**
	         * @param {?} changes
	         * @return {?}
	         */
	        PatternValidator.prototype.ngOnChanges = function (changes) {
	            if ('pattern' in changes) {
	                this._createValidator();
	                if (this._onChange)
	                    this._onChange();
	            }
	        };
	        /**
	         * @param {?} c
	         * @return {?}
	         */
	        PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	        /**
	         * @return {?}
	         */
	        PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	        PatternValidator.decorators = [
	            { type: _angular_core.Directive, args: [{
	                        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                        providers: [PATTERN_VALIDATOR],
	                        host: { '[attr.pattern]': 'pattern ? pattern : null' }
	                    },] },
	        ];
	        /** @nocollapse */
	        PatternValidator.ctorParameters = function () { return []; };
	        PatternValidator.propDecorators = {
	            'pattern': [{ type: _angular_core.Input },],
	        };
	        return PatternValidator;
	    }());
	
	    /**
	     *  *
	      * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	      * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	      * forms.
	      * *
	      * *
	      * To use, inject `FormBuilder` into your component class. You can then call its methods
	      * directly.
	      * *
	      * {@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	      * *
	      * * **npm package**: `@angular/forms`
	      * *
	      * * **NgModule**: {@link ReactiveFormsModule}
	      * *
	     */
	    var FormBuilder = (function () {
	        function FormBuilder() {
	        }
	        /**
	         *  Construct a new {@link FormGroup} with the given map of configuration.
	          * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	          * *
	          * See the {@link FormGroup} constructor for more details.
	         * @param {?} controlsConfig
	         * @param {?=} extra
	         * @return {?}
	         */
	        FormBuilder.prototype.group = function (controlsConfig, extra) {
	            if (extra === void 0) { extra = null; }
	            var /** @type {?} */ controls = this._reduceControls(controlsConfig);
	            var /** @type {?} */ validator = isPresent(extra) ? extra['validator'] : null;
	            var /** @type {?} */ asyncValidator = isPresent(extra) ? extra['asyncValidator'] : null;
	            return new FormGroup(controls, validator, asyncValidator);
	        };
	        /**
	         *  Construct a new {@link FormControl} with the given `formState`,`validator`, and
	          * `asyncValidator`.
	          * *
	          * `formState` can either be a standalone value for the form control or an object
	          * that contains both a value and a disabled status.
	          * *
	         * @param {?} formState
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         * @return {?}
	         */
	        FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            return new FormControl(formState, validator, asyncValidator);
	        };
	        /**
	         *  Construct a {@link FormArray} from the given `controlsConfig` array of
	          * configuration, with the given optional `validator` and `asyncValidator`.
	         * @param {?} controlsConfig
	         * @param {?=} validator
	         * @param {?=} asyncValidator
	         * @return {?}
	         */
	        FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	            var _this = this;
	            if (validator === void 0) { validator = null; }
	            if (asyncValidator === void 0) { asyncValidator = null; }
	            var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	            return new FormArray(controls, validator, asyncValidator);
	        };
	        /**
	         * @param {?} controlsConfig
	         * @return {?}
	         */
	        FormBuilder.prototype._reduceControls = function (controlsConfig) {
	            var _this = this;
	            var /** @type {?} */ controls = {};
	            Object.keys(controlsConfig).forEach(function (controlName) {
	                controls[controlName] = _this._createControl(controlsConfig[controlName]);
	            });
	            return controls;
	        };
	        /**
	         * @param {?} controlConfig
	         * @return {?}
	         */
	        FormBuilder.prototype._createControl = function (controlConfig) {
	            if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	                controlConfig instanceof FormArray) {
	                return controlConfig;
	            }
	            else if (Array.isArray(controlConfig)) {
	                var /** @type {?} */ value = controlConfig[0];
	                var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
	                var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	                return this.control(value, validator, asyncValidator);
	            }
	            else {
	                return this.control(controlConfig);
	            }
	        };
	        FormBuilder.decorators = [
	            { type: _angular_core.Injectable },
	        ];
	        /** @nocollapse */
	        FormBuilder.ctorParameters = function () { return []; };
	        return FormBuilder;
	    }());
	
	    /**
	     * @stable
	     */
	    var /** @type {?} */ VERSION = new _angular_core.Version('2.4.1');
	
	    var /** @type {?} */ SHARED_FORM_DIRECTIVES = [
	        NgSelectOption,
	        NgSelectMultipleOption,
	        DefaultValueAccessor,
	        NumberValueAccessor,
	        RangeValueAccessor,
	        CheckboxControlValueAccessor,
	        SelectControlValueAccessor,
	        SelectMultipleControlValueAccessor,
	        RadioControlValueAccessor,
	        NgControlStatus,
	        NgControlStatusGroup,
	        RequiredValidator,
	        MinLengthValidator,
	        MaxLengthValidator,
	        PatternValidator,
	        CheckboxRequiredValidator,
	    ];
	    var /** @type {?} */ TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	    var /** @type {?} */ REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	    /**
	     *  Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	     */
	    var InternalFormsSharedModule = (function () {
	        function InternalFormsSharedModule() {
	        }
	        InternalFormsSharedModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: SHARED_FORM_DIRECTIVES,
	                        exports: SHARED_FORM_DIRECTIVES,
	                    },] },
	        ];
	        /** @nocollapse */
	        InternalFormsSharedModule.ctorParameters = function () { return []; };
	        return InternalFormsSharedModule;
	    }());
	
	    /**
	     *  The ng module for forms.
	     */
	    var FormsModule = (function () {
	        function FormsModule() {
	        }
	        FormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                        providers: [RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        FormsModule.ctorParameters = function () { return []; };
	        return FormsModule;
	    }());
	    /**
	     *  The ng module for reactive forms.
	     */
	    var ReactiveFormsModule = (function () {
	        function ReactiveFormsModule() {
	        }
	        ReactiveFormsModule.decorators = [
	            { type: _angular_core.NgModule, args: [{
	                        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                        providers: [FormBuilder, RadioControlRegistry],
	                        exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	                    },] },
	        ];
	        /** @nocollapse */
	        ReactiveFormsModule.ctorParameters = function () { return []; };
	        return ReactiveFormsModule;
	    }());
	
	    exports.AbstractControlDirective = AbstractControlDirective;
	    exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	    exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	    exports.ControlContainer = ControlContainer;
	    exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	    exports.DefaultValueAccessor = DefaultValueAccessor;
	    exports.NgControl = NgControl;
	    exports.NgControlStatus = NgControlStatus;
	    exports.NgControlStatusGroup = NgControlStatusGroup;
	    exports.NgForm = NgForm;
	    exports.NgModel = NgModel;
	    exports.NgModelGroup = NgModelGroup;
	    exports.RadioControlValueAccessor = RadioControlValueAccessor;
	    exports.FormControlDirective = FormControlDirective;
	    exports.FormControlName = FormControlName;
	    exports.FormGroupDirective = FormGroupDirective;
	    exports.FormArrayName = FormArrayName;
	    exports.FormGroupName = FormGroupName;
	    exports.NgSelectOption = NgSelectOption;
	    exports.SelectControlValueAccessor = SelectControlValueAccessor;
	    exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	    exports.CheckboxRequiredValidator = CheckboxRequiredValidator;
	    exports.MaxLengthValidator = MaxLengthValidator;
	    exports.MinLengthValidator = MinLengthValidator;
	    exports.PatternValidator = PatternValidator;
	    exports.RequiredValidator = RequiredValidator;
	    exports.FormBuilder = FormBuilder;
	    exports.AbstractControl = AbstractControl;
	    exports.FormArray = FormArray;
	    exports.FormControl = FormControl;
	    exports.FormGroup = FormGroup;
	    exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	    exports.NG_VALIDATORS = NG_VALIDATORS;
	    exports.Validators = Validators;
	    exports.VERSION = VERSION;
	    exports.FormsModule = FormsModule;
	    exports.ReactiveFormsModule = ReactiveFormsModule;
	
	}));

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AppComponent = (function () {
	    function AppComponent() {
	        this.name = 'Angular 2.4';
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(30),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ },

/***/ 30:
/***/ function(module, exports) {

	module.exports = "<router-outlet></router-outlet>\n\n";

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(32);
	var home_component_1 = __webpack_require__(62);
	var signup_component_1 = __webpack_require__(64);
	var dashboard_component_1 = __webpack_require__(69);
	var workspace_component_1 = __webpack_require__(77);
	var account_component_1 = __webpack_require__(99);
	var AppRoutingModule = (function () {
	    function AppRoutingModule() {
	    }
	    AppRoutingModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                router_1.RouterModule.forRoot([
	                    { path: '', component: home_component_1.HomeComponent },
	                    { path: 'signup', component: signup_component_1.SignupComponent },
	                    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
	                    { path: 'worksheet', component: workspace_component_1.WorkspaceComponent },
	                    { path: 'account', component: account_component_1.AccountComponent },
	                ])
	            ],
	            exports: [
	                router_1.RouterModule
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppRoutingModule);
	    return AppRoutingModule;
	}());
	exports.AppRoutingModule = AppRoutingModule;


/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(32);
	var HomeComponent = (function () {
	    function HomeComponent(route) {
	        this.route = route;
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        this.attemptType = this.route.queryParams.map(function (params) { return params['attemptType'] || 'none'; });
	        this.attemptCode = this.route.queryParams.map(function (params) { return params['attemptCode'] || 0; });
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'home',
	            template: __webpack_require__(63),
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
	    ], HomeComponent);
	    return HomeComponent;
	    var _a;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 63:
/***/ function(module, exports) {

	module.exports = "<h1>homepage</h1>\n<!-- All the design stuff goes here-->\n<login></login>\n\n<!--login attempt-->\n<div *ngIf=\"(attemptType|async)=='login'\">\n\tLogin attempt : <span>{{attemptCode|async}}</span>\n</div>\n\n<!--signup attempt-->\n<div *ngIf=\"(attemptType|async)=='signup'\">\n\tSignup attempt : <span>{{attemptCode|async}}</span>\n</div>";

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_account_1 = __webpack_require__(65);
	var user_service_1 = __webpack_require__(66);
	var router_1 = __webpack_require__(32);
	var SignupComponent = (function () {
	    function SignupComponent(userService, router) {
	        this.userService = userService;
	        this.router = router;
	        this.user = new user_account_1.User();
	    }
	    SignupComponent.prototype.createUserAccount = function () {
	        var _this = this;
	        if (this.validPassword()) {
	            console.log("registering user: " + this.user.toString());
	            this.userService.createUserAccount(this.user).subscribe(function (attempt) {
	                console.log("Response from server " + attempt);
	                //redirect back to homepage along with the type of attempt in query params
	                var navigationExtras = {
	                    queryParams: { 'attemptType': 'signup', 'attemptCode': attempt },
	                };
	                _this.router.navigate([""], navigationExtras);
	            }, function (error) {
	                console.log("Error From Server: " + error.message);
	            });
	        }
	        else {
	            console.log("Passwords not valid");
	        }
	    };
	    SignupComponent.prototype.validPassword = function () {
	        return this.user.password != null && this.user.password.length >= 8 && this.user.password == this.confirmPassword;
	    };
	    SignupComponent = __decorate([
	        core_1.Component({
	            selector: 'signup',
	            template: __webpack_require__(68),
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof user_service_1.UserService !== 'undefined' && user_service_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], SignupComponent);
	    return SignupComponent;
	    var _a, _b;
	}());
	exports.SignupComponent = SignupComponent;


/***/ },

/***/ 65:
/***/ function(module, exports) {

	"use strict";
	var LoginCredential = (function () {
	    function LoginCredential() {
	    }
	    LoginCredential.prototype.toString = function () {
	        return this.username;
	    };
	    return LoginCredential;
	}());
	exports.LoginCredential = LoginCredential;
	var User = (function () {
	    function User() {
	    }
	    User.prototype.toString = function () {
	        return this.firstName + " " + this.lastName;
	    };
	    return User;
	}());
	exports.User = User;


/***/ },

/***/ 66:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_account_1 = __webpack_require__(65);
	var http_1 = __webpack_require__(28);
	var shared_codes_1 = __webpack_require__(67);
	var UserService = (function () {
	    function UserService(http) {
	        this.http = http;
	    }
	    /** Creates an account for the supplied model.*/
	    UserService.prototype.createUserAccount = function (user) {
	        var body = JSON.stringify(user);
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this.http.post(UserService.CREATE_USER_ACCOUNT_URL, body, options).map(this.toSignupAttempt);
	    };
	    UserService.prototype.toSignupAttempt = function (response) {
	        //get the code from the response
	        var body = response.json();
	        if (typeof shared_codes_1.SignupAttempt[body] === 'undefined') {
	            console.log("Invalid code from server");
	            return null;
	        }
	        else {
	            return body;
	        }
	    };
	    /** Attempts to login with the credentials.*/
	    UserService.prototype.login = function (login) {
	        var body = JSON.stringify(login);
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this.http.post(UserService.AUTHENTICATE_USER_URL, body, options).map(this.toLoginAttempt);
	    };
	    UserService.prototype.toLoginAttempt = function (response) {
	        //get the code from the response
	        var body = response.json();
	        if (typeof shared_codes_1.LoginAttempt[body] === 'undefined') {
	            console.log("Invalid code from server");
	            return null;
	        }
	        else {
	            return body;
	        }
	    };
	    /** Gets the user object for the logged in user. Will return null(Observable) if the user is not in session. */
	    UserService.prototype.accountInfo = function () {
	        return this.http.get(UserService.ACCOUNT_URL).map(this.toUserObject);
	    };
	    UserService.prototype.toUserObject = function (response) {
	        var body = response.json();
	        var user = new user_account_1.User();
	        user.firstName = body['firstName'];
	        user.lastName = body['lastName'];
	        user.email = body['email'];
	        user.gender = body['gender'];
	        user.rid = body['@rid'];
	        return user;
	    };
	    UserService.prototype.logout = function () {
	        return this.http.get(UserService.LOGOUT_URL).map(this.toUserObject);
	    };
	    //TODO move these urls in the shared-codes file
	    UserService.CREATE_USER_ACCOUNT_URL = "api/create-user";
	    UserService.AUTHENTICATE_USER_URL = "api/authenticate-user";
	    UserService.ACCOUNT_URL = "api/account";
	    UserService.LOGOUT_URL = "api/logout";
	    UserService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], UserService);
	    return UserService;
	    var _a;
	}());
	exports.UserService = UserService;


/***/ },

/***/ 67:
/***/ function(module, exports) {

	//IMPORTANT this file is shared between client and server but is duplicated in both places. 
	//This is because typescript compiler is separete for both client and server.
	//Make sure both the copies are kept in sync at all times
	"use strict";
	//TODO find a way to make this a common file
	/** A mutually shared code between the client and server that identifies the login attempt. */
	(function (LoginAttempt) {
	    LoginAttempt[LoginAttempt["Success"] = 1] = "Success";
	    LoginAttempt[LoginAttempt["InvalidUsernameOrPassword"] = 2] = "InvalidUsernameOrPassword";
	    LoginAttempt[LoginAttempt["EmailDoesNotExist"] = 3] = "EmailDoesNotExist";
	    LoginAttempt[LoginAttempt["InternalServerError"] = 4] = "InternalServerError";
	})(exports.LoginAttempt || (exports.LoginAttempt = {}));
	var LoginAttempt = exports.LoginAttempt;
	/** A mutually shared code between the client and server that identifies the signup attempt. */
	(function (SignupAttempt) {
	    SignupAttempt[SignupAttempt["Success"] = 1] = "Success";
	    SignupAttempt[SignupAttempt["EmailAlreadyExists"] = 2] = "EmailAlreadyExists";
	    SignupAttempt[SignupAttempt["WeakPassword"] = 3] = "WeakPassword";
	    SignupAttempt[SignupAttempt["NullPassword"] = 4] = "NullPassword";
	    SignupAttempt[SignupAttempt["InternalServerError"] = 5] = "InternalServerError";
	})(exports.SignupAttempt || (exports.SignupAttempt = {}));
	var SignupAttempt = exports.SignupAttempt;


/***/ },

/***/ 68:
/***/ function(module, exports) {

	module.exports = "<h1>signup</h1>\n\n\n<div>\n\t<span>firstName:</span>\n\t<input type=\"text\" [(ngModel)]=\"user.firstName\"/>\n</div>\n\n<div>\n\t<span>lastName:</span>\n\t<input type=\"text\" [(ngModel)]=\"user.lastName\"/>\n</div>\n\n<div>\n\t<span>email:</span>\n\t<input type=\"text\" [(ngModel)]=\"user.email\"/>\n</div>\n\n<div>\n\t<span>password:</span>\n\t<input type=\"password\" [(ngModel)]=\"user.password\"/>\n</div>\n\n<div>\n\t<span>confirmPassword:</span>\n\t<input type=\"password\" [(ngModel)]=\"confirmPassword\"/>\n</div>\n\n<a (click)=\"createUserAccount()\">Sign Up</a>";

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var worksheet_1 = __webpack_require__(70);
	var dashboard_service_1 = __webpack_require__(75);
	var user_service_1 = __webpack_require__(66);
	var router_1 = __webpack_require__(32);
	var DashboardComponent = (function () {
	    function DashboardComponent(dashboardService, userService, router) {
	        this.dashboardService = dashboardService;
	        this.userService = userService;
	        this.router = router;
	        this.worksheetList = [];
	    }
	    DashboardComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.dashboardService.worksheetListForLoggedInUser().subscribe(function (worksheetList) {
	            _this.worksheetList = worksheetList;
	        }, function (error) {
	            console.error("Worksheet retrieval: " + error.message); //TODO show some friendly message to user
	        });
	    };
	    DashboardComponent.prototype.fillWithDummyData = function () {
	        var first = new worksheet_1.Worksheet();
	        first.title = "Bubble sort";
	        first.description = "Functioning of a sorting algorithm";
	        this.worksheetList.push(first);
	        var second = new worksheet_1.Worksheet();
	        second.title = "Class project";
	        second.description = "Implementation of class project (discussion related)";
	        this.worksheetList.push(second);
	        var third = new worksheet_1.Worksheet();
	        third.title = "Binary tree";
	        third.description = "Different type of traversal techniques in binary trees";
	        this.worksheetList.push(third);
	    };
	    DashboardComponent.prototype.createNewWorksheet = function () {
	        var _this = this;
	        var title = Math.random().toString(36).slice(2);
	        var description = "made from frontend";
	        this.dashboardService.createWorksheet(title, description).subscribe(function (worksheet) {
	            _this.worksheetList.push(worksheet);
	        }, function (error) {
	            console.error("Worksheet retrieval: " + error.message); //TODO show some friendly message to user
	        });
	    };
	    DashboardComponent.prototype.removeWorksheet = function (worksheet) {
	        var _this = this;
	        this.dashboardService.removeWorksheet(worksheet).subscribe(function (deleted) {
	            if (deleted) {
	                var index = _this.worksheetList.indexOf(worksheet);
	                if (index != -1) {
	                    _this.worksheetList.splice(index, 1);
	                }
	                else {
	                    console.error("Worksheet not found in frontend list but did exist in db(and is deleted now)");
	                }
	            }
	            else {
	                console.error("Did not delete worksheet from db. Is it actually associated with the user? ");
	            }
	        }, function (error) {
	            console.error("Worksheet deletion: " + error.message); //TODO show some friendly message to user
	        });
	    };
	    DashboardComponent.prototype.logout = function () {
	        var _this = this;
	        this.userService.logout().subscribe(function (user) {
	            _this.router.navigate(["/"]);
	        }, function (error) {
	            console.error("Logging out user"); //TODO show some friendly message to user
	        });
	    };
	    DashboardComponent = __decorate([
	        core_1.Component({
	            selector: 'dashboard',
	            template: __webpack_require__(76),
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof dashboard_service_1.DashboardService !== 'undefined' && dashboard_service_1.DashboardService) === 'function' && _a) || Object, (typeof (_b = typeof user_service_1.UserService !== 'undefined' && user_service_1.UserService) === 'function' && _b) || Object, (typeof (_c = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _c) || Object])
	    ], DashboardComponent);
	    return DashboardComponent;
	    var _a, _b, _c;
	}());
	exports.DashboardComponent = DashboardComponent;


/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var geometry_1 = __webpack_require__(71);
	var tracking_point_1 = __webpack_require__(74);
	//the following constants are used to identify objects of this data model in JSON
	exports.WorksheetType = "Worksheet"; //TODO may not be required
	/** Containment of all worksheet related data is maintained in the model. */
	var Worksheet = (function () {
	    function Worksheet() {
	    }
	    return Worksheet;
	}());
	exports.Worksheet = Worksheet;
	/**
	 * Holds a list of diagram nodes and a list of diagram edges in the worksheet.
	 * This model can also be used to hold any selection of diagram nodes and edges,
	 * even if they are not part of the worksheet.
	 */
	var DiagramModel = (function () {
	    function DiagramModel() {
	        /** List of nodes in graph */
	        this.nodeList = [];
	        /** List of edges in graph */
	        this.edgeList = [];
	    }
	    /** Checks weather a given node exists in this diagram node or not */
	    DiagramModel.prototype.containsNode = function (node) {
	        return this.nodeList.indexOf(node) != -1;
	    };
	    /** Checks weather a given edge exists in this diagram node or not */
	    DiagramModel.prototype.containsEdge = function (edge) {
	        return this.edgeList.indexOf(edge) != -1;
	    };
	    return DiagramModel;
	}());
	exports.DiagramModel = DiagramModel;
	/** Specifies color in the range 0-255 for four channels. Default is white(255,255,255,255) */
	var Color = (function () {
	    function Color(r, g, b, a) {
	        if (r === void 0) { r = 255; }
	        if (g === void 0) { g = 255; }
	        if (b === void 0) { b = 255; }
	        if (a === void 0) { a = 255; }
	        this.red = r;
	        this.green = g;
	        this.blue = b;
	        this.alpha = a;
	    }
	    /** Returns the a hashcode equivalent string like #2343A4 */
	    Color.prototype.hashCode = function () {
	        return "#" + this.red.toString(16) + this.green.toString(16) + this.blue.toString(16);
	    };
	    return Color;
	}());
	exports.Color = Color;
	/**
	 * A node in the diagram graph that contains both the incoming and outgoing edges.
	 * A diagram node is also a visual block to display and additionally also holds geometry.
	 */
	var DiagramNode = (function () {
	    function DiagramNode() {
	        /** Used exclusively as a flag to tell weather this node is selected or not. IMPORTANT only 'Workspace' class should toggle this. */
	        this.selected = false;
	        /** Color of the background */
	        this.background = new Color(); //white by default
	        /** Color of the foreground(text) */
	        this.foreground = new Color(0, 0, 0, 0);
	        /** Color of the stroke */
	        this.stroke = new Color(0, 0, 0, 0);
	        this.incomingEdges = []; //TODO remove
	        this.outgoingEdges = []; //TODO remove
	    }
	    return DiagramNode;
	}());
	exports.DiagramNode = DiagramNode;
	/**
	 * An edge in the diagram graph connecting two nodes. Geometrically, it houses the tracking point of the geometry of the two nodes.
	 * Additionally(and optionally) it also contains label and intermediate points that may be required for denoting linked line segments.
	 */
	var DiagramEdge = (function () {
	    function DiagramEdge() {
	        /** Used exclusively as a flag to tell weather this node is selected or not. IMPORTANT only 'Workspace' class should toggle this. */
	        this.selected = false;
	    }
	    Object.defineProperty(DiagramEdge.prototype, "from", {
	        get: function () {
	            return this._from;
	        },
	        set: function (value) {
	            this._from = value;
	            this._fromPoint = new tracking_point_1.CenterTrackingPoint(value.getGeometry());
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DiagramEdge.prototype, "to", {
	        get: function () {
	            return this._to;
	        },
	        set: function (value) {
	            this._to = value;
	            this._toPoint = new tracking_point_1.CenterTrackingPoint(value.getGeometry());
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DiagramEdge.prototype, "fromPoint", {
	        get: function () {
	            return this._fromPoint;
	        },
	        set: function (value) {
	            this._fromPoint = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(DiagramEdge.prototype, "toPoint", {
	        get: function () {
	            return this._toPoint;
	        },
	        set: function (value) {
	            this._toPoint = value;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return DiagramEdge;
	}());
	exports.DiagramEdge = DiagramEdge;
	/** Identification for the type of generic node */
	(function (GenericDiagramNodeType) {
	    //WARNING: These number are connected to the values in the template. Don't change them
	    GenericDiagramNodeType[GenericDiagramNodeType["Rectangle"] = 1] = "Rectangle";
	    GenericDiagramNodeType[GenericDiagramNodeType["Circle"] = 2] = "Circle";
	    GenericDiagramNodeType[GenericDiagramNodeType["Diamond"] = 3] = "Diamond";
	    GenericDiagramNodeType[GenericDiagramNodeType["Ellipse"] = 4] = "Ellipse";
	    GenericDiagramNodeType[GenericDiagramNodeType["RoundedRectangle"] = 5] = "RoundedRectangle";
	    GenericDiagramNodeType[GenericDiagramNodeType["StickFigure"] = 6] = "StickFigure";
	    GenericDiagramNodeType[GenericDiagramNodeType["Database"] = 7] = "Database";
	    GenericDiagramNodeType[GenericDiagramNodeType["Parallelogram"] = 8] = "Parallelogram";
	})(exports.GenericDiagramNodeType || (exports.GenericDiagramNodeType = {}));
	var GenericDiagramNodeType = exports.GenericDiagramNodeType;
	/** Returns a rectangle whose dimensions are based on the generic node type */
	function getRectForGenericNode(nodeType, x, y) {
	    if (x === void 0) { x = 0; }
	    if (y === void 0) { y = 0; }
	    var width = 0;
	    var height = 0;
	    switch (nodeType) {
	        case GenericDiagramNodeType.Rectangle:
	            width = 200;
	            height = 30;
	            break;
	        case GenericDiagramNodeType.Circle:
	            width = 100;
	            height = 100;
	            break;
	        case GenericDiagramNodeType.Diamond:
	            width = 100;
	            height = 100;
	            break;
	        case GenericDiagramNodeType.Ellipse:
	            width = 200;
	            height = 60;
	            break;
	        case GenericDiagramNodeType.RoundedRectangle:
	            width = 200;
	            height = 60;
	            break;
	        case GenericDiagramNodeType.StickFigure:
	            width = 80;
	            height = 120;
	            break;
	        case GenericDiagramNodeType.Database:
	            width = 80;
	            height = 120;
	        case GenericDiagramNodeType.Parallelogram:
	            width = 200;
	            height = 80;
	            break;
	    }
	    return new geometry_1.Rect(x, y, width, height);
	}
	exports.getRectForGenericNode = getRectForGenericNode;
	var GenericDiagramNode = (function (_super) {
	    __extends(GenericDiagramNode, _super);
	    function GenericDiagramNode(type) {
	        _super.call(this);
	        this._type = type;
	        this._rect = getRectForGenericNode(this._type);
	        this._content = "Content";
	    }
	    GenericDiagramNode.prototype.getGeometry = function () {
	        return this._rect;
	    };
	    GenericDiagramNode.prototype.cellRequirement = function () {
	        return 0;
	    };
	    Object.defineProperty(GenericDiagramNode.prototype, "rect", {
	        get: function () {
	            return this._rect;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GenericDiagramNode.prototype, "type", {
	        get: function () {
	            return this._type;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(GenericDiagramNode.prototype, "content", {
	        get: function () {
	            return this._content;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    GenericDiagramNode.Width = 200;
	    GenericDiagramNode.Height = 30;
	    return GenericDiagramNode;
	}(DiagramNode));
	exports.GenericDiagramNode = GenericDiagramNode;
	/** A rect diagram node used for holding class definition, its associated geometry and collapse flags for field and method blocks*/
	var ClassDiagramNode = (function (_super) {
	    __extends(ClassDiagramNode, _super);
	    function ClassDiagramNode(classDefinition, x, y) {
	        _super.call(this);
	        this.classDefinition = classDefinition;
	        this.rect = new geometry_1.Rect(x, y, ClassDiagramNode.DEFAULT_WIDTH, 250);
	    }
	    ClassDiagramNode.prototype.getGeometry = function () {
	        return this.rect;
	    };
	    ClassDiagramNode.prototype.cellRequirement = function () {
	        var fieldCells = !this.fieldsCollapsed ? this.classDefinition.fieldList.length : 1;
	        var methodCells = !this.methodsCollapsed ? this.classDefinition.methodList.length : 0;
	        return 1 + fieldCells + methodCells;
	    };
	    ClassDiagramNode.DEFAULT_WIDTH = 300;
	    return ClassDiagramNode;
	}(DiagramNode));
	exports.ClassDiagramNode = ClassDiagramNode;
	/** A rect diagram node used for holding interface definition, its associated geometry and collapse flag for method block*/
	var InterfaceDiagramNode = (function (_super) {
	    __extends(InterfaceDiagramNode, _super);
	    function InterfaceDiagramNode(interfaceDefinition, x, y) {
	        _super.call(this);
	        this.interfaceDefinition = interfaceDefinition;
	        this.rect = new geometry_1.Rect(x, y, ClassDiagramNode.DEFAULT_WIDTH, 250);
	    }
	    InterfaceDiagramNode.prototype.getGeometry = function () {
	        return this.rect;
	    };
	    InterfaceDiagramNode.prototype.cellRequirement = function () {
	        var methodCells = !this.methodsCollapsed ? this.interfaceDefinition.methodList.length : 0;
	        return 1 + methodCells;
	    };
	    return InterfaceDiagramNode;
	}(DiagramNode));
	exports.InterfaceDiagramNode = InterfaceDiagramNode;
	/** A single line comment block thats put in a rect */
	var SingleLineComment = (function (_super) {
	    __extends(SingleLineComment, _super);
	    function SingleLineComment() {
	        _super.apply(this, arguments);
	    }
	    SingleLineComment.prototype.getGeometry = function () {
	        return this.rect;
	    };
	    SingleLineComment.prototype.cellRequirement = function () {
	        return 1;
	    };
	    return SingleLineComment;
	}(DiagramNode));
	exports.SingleLineComment = SingleLineComment;
	/** A multi line comment block thats put in a rect */
	var MultiLineComment = (function (_super) {
	    __extends(MultiLineComment, _super);
	    function MultiLineComment() {
	        _super.apply(this, arguments);
	        this.lines = [];
	    }
	    MultiLineComment.prototype.getGeometry = function () {
	        return this.rect;
	    };
	    MultiLineComment.prototype.cellRequirement = function () {
	        return this.lines.length;
	    };
	    return MultiLineComment;
	}(DiagramNode));
	exports.MultiLineComment = MultiLineComment;
	var ObjectDiagram = (function (_super) {
	    __extends(ObjectDiagram, _super);
	    function ObjectDiagram() {
	        _super.apply(this, arguments);
	    }
	    ObjectDiagram.prototype.getGeometry = function () {
	        return this.rect;
	    };
	    return ObjectDiagram;
	}(DiagramNode));
	exports.ObjectDiagram = ObjectDiagram;
	var ClassObjectDiagram = (function (_super) {
	    __extends(ClassObjectDiagram, _super);
	    function ClassObjectDiagram(classObject, x, y) {
	        _super.call(this);
	        this.classObject = classObject;
	        this.rect = new geometry_1.Rect(x, y, ClassDiagramNode.DEFAULT_WIDTH, 250);
	    }
	    ClassObjectDiagram.prototype.cellRequirement = function () {
	        //header + description + field data list
	        return 1 + 1 + this.classObject.fieldDataList.length;
	    };
	    return ClassObjectDiagram;
	}(ObjectDiagram));
	exports.ClassObjectDiagram = ClassObjectDiagram;
	var InterfaceObjectDiagram = (function (_super) {
	    __extends(InterfaceObjectDiagram, _super);
	    function InterfaceObjectDiagram() {
	        _super.apply(this, arguments);
	    }
	    InterfaceObjectDiagram.prototype.cellRequirement = function () {
	        //header + description 
	        return 1 + 1;
	    };
	    return InterfaceObjectDiagram;
	}(ObjectDiagram));
	exports.InterfaceObjectDiagram = InterfaceObjectDiagram;


/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var common_1 = __webpack_require__(72);
	var tracking_point_1 = __webpack_require__(74);
	/** Generic model for storing 2d coordinates */
	var Point = (function () {
	    function Point(x, y) {
	        this.x = x;
	        this.y = y;
	    }
	    Point.prototype.toString = function () {
	        return "P(" + this.x + "," + this.y + ")";
	    };
	    /** Finds the distance from another point */
	    Point.prototype.distance = function (p) {
	        return Math.sqrt((this.x - p.x) * (this.x - p.x) + (this.y - p.y) * (this.y - p.y));
	    };
	    /** Finds the angle (b/w 0-360) that gets made b/w the x axis and line segment comprised of this point and another point */
	    Point.prototype.angleOfSegment = function (to) {
	        var inDegrees = 0;
	        if (to.x - this.x == 0) {
	            inDegrees = 90;
	            if (to.y < this.y) {
	                inDegrees += 180;
	            }
	        }
	        else {
	            var slope = (to.y - this.y) / (to.x - this.x);
	            inDegrees = Math.atan(slope) * common_1.RadiansToDegrees;
	            //angle is between +90 and -90
	            if (to.y > this.y) {
	                if (to.x > this.x) {
	                }
	                else {
	                    inDegrees += 180;
	                }
	            }
	            else {
	                if (to.x < this.x) {
	                    inDegrees += 180;
	                }
	                else {
	                    inDegrees += 360;
	                }
	            }
	        }
	        return inDegrees;
	    };
	    /** Finds the point situated at some distance in a given direction(angle) */
	    Point.prototype.pointAtLength = function (angleInDegrees, length) {
	        return new Point(this.x + length * Math.cos(common_1.DegreesToRadians * angleInDegrees), this.y + length * Math.sin(common_1.DegreesToRadians * angleInDegrees));
	    };
	    /**
	    * Checks if this point is within the bounding box defined by the endpoints of a diagonal.
	    * Interchanging order of points is safe and does not affect result.
	    */
	    Point.prototype.withinBounds = function (start, end) {
	        var lx = start.x < end.x ? start.x : end.x;
	        var ly = start.y < end.y ? start.y : end.y;
	        var mx = start.x >= end.x ? start.x : end.x;
	        var my = start.y >= end.y ? start.y : end.y;
	        return this.x >= lx && this.x <= mx &&
	            this.y >= ly && this.y <= my;
	    };
	    /**
	     * Checks if the point is within infinite horizontal section defined by two vertical axis.
	     * Interchanging order of points is safe and does not affect result.
	     */
	    Point.prototype.withinYSpan = function (y1, y2) {
	        var ly = y1 < y2 ? y1 : y2;
	        var my = y1 >= y2 ? y2 : y1;
	        return this.y >= ly && this.y <= my;
	    };
	    /**
	     * Checks if the point is within infinite vertical section defined by two horizontal axis.
	     * Interchanging order of points is safe and does not affect result.
	     */
	    Point.prototype.withinXSpan = function (x1, x2) {
	        var lx = x1 < x2 ? x1 : x2;
	        var mx = x1 >= x2 ? x2 : x1;
	        return this.x >= lx && this.x <= mx;
	    };
	    /** Returns true if both x and y are 0 for this point. */
	    Point.prototype.isZero = function () {
	        return this.x == 0 && this.y == 0;
	    };
	    /** Returns a new point that contains the negative of x and y of this point */
	    Point.prototype.inverse = function () {
	        return new Point(-1 * this.x, -1 * this.y);
	    };
	    /**Move by the difference in x and y axis specified by the point */
	    Point.prototype.moveBy = function (point) {
	        this.x += point.x;
	        this.y += point.y;
	    };
	    /** Returns a new point shifted by specified numbers */
	    Point.prototype.offset = function (dx, dy) {
	        return new Point(this.x + dx, this.y + dy);
	    };
	    return Point;
	}());
	exports.Point = Point;
	/** Stores 2D position and holds links to previous and next point in series */
	var LinkedPoint = (function (_super) {
	    __extends(LinkedPoint, _super);
	    function LinkedPoint() {
	        _super.apply(this, arguments);
	    }
	    LinkedPoint.prototype.toString = function () {
	        var prevString = this.previous == null ? "NULL" : "<-";
	        var nextString = this.next == null ? "NULL" : "->";
	        return "<-" + _super.prototype.toString.call(this) + "->";
	    };
	    return LinkedPoint;
	}(Point));
	exports.LinkedPoint = LinkedPoint;
	var Rect = (function () {
	    function Rect(x, y, width, height) {
	        this.x = x;
	        this.y = y;
	        this.width = width;
	        this.height = height;
	    }
	    Rect.prototype.toString = function () {
	        return "R(" + this.x + "," + this.y + "," + this.width + "," + this.height + ")";
	    };
	    Rect.prototype.contains = function (p) {
	        return p.x >= this.x && p.x <= (this.x + this.width) &&
	            p.y >= this.y && p.y <= (this.y + this.height);
	    };
	    Rect.prototype.getTrackingPoint = function () {
	        return new tracking_point_1.RectTrackingPoint(this);
	    };
	    Rect.prototype.topLeft = function () {
	        return new Point(this.x, this.y);
	    };
	    Rect.prototype.topRight = function () {
	        return new Point(this.x + this.width, this.y);
	    };
	    Rect.prototype.bottomRight = function () {
	        return new Point(this.x + this.width, this.y + this.height);
	    };
	    Rect.prototype.bottomLeft = function () {
	        return new Point(this.x, this.y + this.height);
	    };
	    Rect.prototype.center = function () {
	        return new Point(this.x + this.width / 2, this.y + this.height / 2);
	    };
	    Rect.prototype.getBoundingBox = function () {
	        return new Rect(this.x, this.y, this.width, this.height);
	    };
	    Rect.prototype.overlapsWithRect = function (rect) {
	        //check which rect is top left
	        if (rect.x < this.x) {
	            if (rect.y < this.y) {
	                return rect.contains(this.topLeft());
	            }
	            else {
	                return rect.contains(this.bottomLeft());
	            }
	        }
	        else {
	            if (rect.y > this.y) {
	                return rect.contains(this.bottomRight());
	            }
	            else {
	                return rect.contains(this.topRight());
	            }
	        }
	    };
	    Rect.prototype.moveBy = function (point) {
	        this.x += point.x;
	        this.y += point.y;
	    };
	    return Rect;
	}());
	exports.Rect = Rect;
	var Circle = (function () {
	    function Circle(center, radius) {
	        this.center = center;
	        this.radius = radius;
	    }
	    Circle.prototype.toString = function () {
	        return "C(" + this.center.x + "," + this.center.y + "," + this.radius + ")";
	    };
	    Circle.prototype.contains = function (p) {
	        return new Point(this.center.x, this.center.y).distance(p) <= this.radius;
	    };
	    Circle.prototype.getTrackingPoint = function () {
	        return new tracking_point_1.CircleTrackingPoint(this);
	    };
	    Circle.prototype.getBoundingBox = function () {
	        return new Rect(this.center.x - this.radius, this.center.y - this.radius, this.radius * 2, this.radius * 2);
	    };
	    Circle.prototype.overlapsWithRect = function (rect) {
	        //TODO line circle overlap check
	        return false;
	    };
	    Circle.prototype.moveBy = function (point) {
	        this.center.moveBy(point);
	    };
	    return Circle;
	}());
	exports.Circle = Circle;
	var LineSegment = (function () {
	    function LineSegment(start, end) {
	        this.start = start;
	        this.end = end;
	    }
	    LineSegment.prototype.toString = function () {
	        return "LS: " + this.start + "," + this.end + ")";
	    };
	    LineSegment.prototype.contains = function (p) {
	        return p.withinBounds(this.start, this.end) && this.distanceFromLine(p) <= LineSegment.closeEnoughDistance;
	    };
	    /** Finds the perpendicular distance of a point from the line when this segment is extended in both directions */
	    LineSegment.prototype.distanceFromLine = function (p) {
	        return new common_1.LineEquation(this.start, this.end).perpendicularDistanceFrom(p);
	    };
	    LineSegment.prototype.getTrackingPoint = function () {
	        return new tracking_point_1.LineSegmentTrackingPoint();
	    };
	    LineSegment.prototype.getBoundingBox = function () {
	        var lx = this.start.x < this.end.x ? this.start.x : this.end.x;
	        var ly = this.start.y < this.end.y ? this.start.y : this.end.y;
	        var hx = this.start.x > this.end.x ? this.start.x : this.end.x;
	        var hy = this.start.y > this.end.y ? this.start.y : this.end.y;
	        return new Rect(lx, ly, hx - lx, hy - ly);
	    };
	    LineSegment.prototype.overlapsWithRect = function (rect) {
	        //TODO line rect overlap check
	        return false;
	    };
	    LineSegment.prototype.moveBy = function (point) {
	        this.start.moveBy(point);
	        this.end.moveBy(point);
	    };
	    LineSegment.closeEnoughDistance = 10;
	    return LineSegment;
	}());
	exports.LineSegment = LineSegment;


/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var geometry_1 = __webpack_require__(71);
	var semantic_model_1 = __webpack_require__(73);
	/** Gives radians when multiplied by an angle in degrees */
	exports.DegreesToRadians = Math.PI / 180;
	/** Gives degrees when multiplied by an angle in radians */
	exports.RadiansToDegrees = 180 / Math.PI;
	/** Represents direction in all 8 corners */
	(function (Direction) {
	    Direction[Direction["Top"] = 1] = "Top";
	    Direction[Direction["TopRight"] = 2] = "TopRight";
	    Direction[Direction["Right"] = 3] = "Right";
	    Direction[Direction["BottomRight"] = 4] = "BottomRight";
	    Direction[Direction["Bottom"] = 5] = "Bottom";
	    Direction[Direction["BottomLeft"] = 6] = "BottomLeft";
	    Direction[Direction["Left"] = 7] = "Left";
	    Direction[Direction["TopLeft"] = 8] = "TopLeft";
	})(exports.Direction || (exports.Direction = {}));
	var Direction = exports.Direction;
	/** Computes a point between two points based on fraction between 0 to 1 */
	function linearInterpolation(start, end, fraction) {
	    var interpolated = new geometry_1.Point(start.x, start.y);
	    interpolated.x += fraction * (end.x - start.x);
	    interpolated.y += fraction * (end.y - start.y);
	    return interpolated;
	}
	exports.linearInterpolation = linearInterpolation;
	/** Holds the equation of the line in the form ax + bx + c = 0 */
	var LineEquation = (function () {
	    /**
	     * Constructs the equation of the line from two endpoints.
	     * Order doesn't matter, interchanging endpoints will not make any differene
	     */
	    function LineEquation(start, end) {
	        if (start.x == end.x) {
	            this.a = 1;
	            this.b = 0;
	            this.c = -start.x;
	        }
	        else if (start.y == end.y) {
	            this.a = 0;
	            this.b = 1;
	            this.c = -start.y;
	        }
	        else {
	            var m = (end.y - start.y) / (end.x - start.x);
	            this.a = m;
	            this.b = -1;
	            this.c = end.y - m * end.x;
	        }
	    }
	    /** Finds the perpendicular distance of a point from this line */
	    LineEquation.prototype.perpendicularDistanceFrom = function (p) {
	        //find the perpendicular distance using equation
	        return Math.abs(this.a * p.x + this.b * p.y + this.c) / Math.sqrt(this.a * this.a + this.b * this.b);
	    };
	    /** Finds the intersection point with given line equation. Returns null if the lines are parallel */
	    LineEquation.prototype.intersectionWith = function (line) {
	        //using determinant formula (adjusted for the form ax + by + c = 0)
	        var delta = this.a * line.b - line.a * this.b;
	        if (delta == 0) {
	            return null;
	        }
	        var x = (line.b * this.c * (-1) - this.b * line.c * (-1)) / delta;
	        var y = (this.a * line.c * (-1) - line.a * this.c * (-1)) / delta;
	        return new geometry_1.Point(x, y);
	    };
	    return LineEquation;
	}());
	exports.LineEquation = LineEquation;
	/** Returns string representation for the access specifier like + for public, - for private, # for protected etc. */
	function stringForAccessSpecifier(accessSpecifier) {
	    switch (accessSpecifier) {
	        case semantic_model_1.AccessSpecifier.Private:
	            return "-";
	        case semantic_model_1.AccessSpecifier.Protected:
	            return "#";
	        case semantic_model_1.AccessSpecifier.Public:
	            return "+";
	        case semantic_model_1.AccessSpecifier.Default:
	        default:
	            return "";
	    }
	}
	exports.stringForAccessSpecifier = stringForAccessSpecifier;
	/** Returns a matching element if present in list, null otherwise */
	function existsInList(item, list) {
	    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
	        var inList = list_1[_i];
	        if (item == inList) {
	            return true;
	        }
	    }
	    return false;
	}
	exports.existsInList = existsInList;
	/**
	 * Merges two lists together ensuring no two elements are repeated. Returns duplicates count.
	 * The result list should not be either of the two lists.
	 */
	function merge(list1, list2, result) {
	    var duplicatesFound = 0;
	    //add all items of first list
	    for (var _i = 0, list1_1 = list1; _i < list1_1.length; _i++) {
	        var fromList1 = list1_1[_i];
	        result.push(fromList1);
	    }
	    //only add those items of second list that don't exist already
	    for (var _a = 0, list2_1 = list2; _a < list2_1.length; _a++) {
	        var fromList2 = list2_1[_a];
	        if (!existsInList(fromList2, result)) {
	            result.push(fromList2);
	        }
	        else {
	            duplicatesFound++;
	        }
	    }
	    return duplicatesFound;
	}
	exports.merge = merge;
	/** Returns a delimeter separated string for a supplied list */
	function csv(list, delimeter) {
	    if (delimeter === void 0) { delimeter = ","; }
	    var csv = "";
	    for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
	        var item = list_2[_i];
	        csv += item.toString();
	    }
	    return csv;
	}
	exports.csv = csv;
	/** Outputs the supplied list by calling its toString for each element */
	function printList(list) {
	    for (var _i = 0, list_3 = list; _i < list_3.length; _i++) {
	        var item = list_3[_i];
	        console.log(item.toString());
	    }
	}
	exports.printList = printList;


/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var util = __webpack_require__(72);
	var SemanticModel = (function () {
	    function SemanticModel() {
	        this.classDefinitionList = [];
	        this.interfaceDefinitionList = [];
	    }
	    /** Finds the class for the given name in the class definition list */
	    SemanticModel.prototype.getClassByName = function (name) {
	        for (var _i = 0, _a = this.classDefinitionList; _i < _a.length; _i++) {
	            var classDefinition = _a[_i];
	            if (classDefinition.getName() == name) {
	                return classDefinition;
	            }
	        }
	        return null;
	    };
	    /** Finds the interface for the given name in the interface definition list */
	    SemanticModel.prototype.getInterfaceByName = function (name) {
	        for (var _i = 0, _a = this.interfaceDefinitionList; _i < _a.length; _i++) {
	            var interfaceDefinition = _a[_i];
	            if (interfaceDefinition.getName() == name) {
	                return interfaceDefinition;
	            }
	        }
	        return null;
	    };
	    return SemanticModel;
	}());
	exports.SemanticModel = SemanticModel;
	(function (PrimitiveType) {
	    PrimitiveType[PrimitiveType["IntType"] = 1] = "IntType";
	    PrimitiveType[PrimitiveType["FloatType"] = 2] = "FloatType";
	    PrimitiveType[PrimitiveType["CharType"] = 3] = "CharType";
	    PrimitiveType[PrimitiveType["BoolType"] = 4] = "BoolType";
	    PrimitiveType[PrimitiveType["StringType"] = 5] = "StringType";
	})(exports.PrimitiveType || (exports.PrimitiveType = {}));
	var PrimitiveType = exports.PrimitiveType;
	/**
	 * Type fpr holdind primitive data like int,char,bool and also(exceptionally) string.
	 * Refrain from creating new ones as these type are predefined and already exist as
	 * static variable in the SemanticModel class
	 */
	var PrimitiveWrapper = (function () {
	    function PrimitiveWrapper(type) {
	        this.type = type;
	    }
	    PrimitiveWrapper.getPrimtiveName = function (type) {
	        switch (type) {
	            case PrimitiveType.IntType:
	                return "int";
	            case PrimitiveType.FloatType:
	                return "float";
	            case PrimitiveType.CharType:
	                return "char";
	            case PrimitiveType.BoolType:
	                return "bool";
	            case PrimitiveType.StringType:
	                return "string";
	            default:
	                return "unknown primitive";
	        }
	    };
	    PrimitiveWrapper.prototype.getName = function () {
	        return PrimitiveWrapper.getPrimtiveName(this.type);
	    };
	    return PrimitiveWrapper;
	}());
	exports.PrimitiveWrapper = PrimitiveWrapper;
	(function (AccessSpecifier) {
	    AccessSpecifier[AccessSpecifier["Private"] = 1] = "Private";
	    AccessSpecifier[AccessSpecifier["Protected"] = 2] = "Protected";
	    AccessSpecifier[AccessSpecifier["Public"] = 3] = "Public";
	    AccessSpecifier[AccessSpecifier["Default"] = 4] = "Default";
	})(exports.AccessSpecifier || (exports.AccessSpecifier = {}));
	var AccessSpecifier = exports.AccessSpecifier;
	var MethodMember = (function () {
	    function MethodMember(identifier, returnType, accessSpecifier) {
	        if (accessSpecifier === void 0) { accessSpecifier = AccessSpecifier.Public; }
	        this.isStatic = false;
	        this.isFinal = false;
	        this.isAbstract = false;
	        this.methodPrototype = new MethodPrototype(identifier, returnType);
	        this.accessSpecifier = accessSpecifier;
	    }
	    MethodMember.prototype.toString = function () {
	        var staticPart = this.isStatic ? " static" : " ";
	        var finalPart = this.isFinal ? " final" : " ";
	        return util.stringForAccessSpecifier(this.accessSpecifier)
	            + staticPart
	            + finalPart
	            + this.methodPrototype.toString();
	    };
	    return MethodMember;
	}());
	exports.MethodMember = MethodMember;
	var MethodPrototype = (function () {
	    function MethodPrototype(identifier, returnType) {
	        this.argumentList = [];
	        this.identifier = identifier;
	        this.returnType = returnType;
	    }
	    MethodPrototype.prototype.toString = function () {
	        var returnTypePart = this.returnType != null ? ":" + this.returnType.getName() : "";
	        var argumentInString = "";
	        var commaNeeded = false;
	        for (var _i = 0, _a = this.argumentList; _i < _a.length; _i++) {
	            var argument = _a[_i];
	            if (commaNeeded) {
	                argumentInString += ",";
	            }
	            argumentInString += argument.toString();
	            commaNeeded = true;
	        }
	        return this.identifier + "("
	            + argumentInString
	            + ")"
	            + returnTypePart;
	    };
	    return MethodPrototype;
	}());
	exports.MethodPrototype = MethodPrototype;
	var FieldMember = (function () {
	    function FieldMember(name, type, accessSpecifier) {
	        if (accessSpecifier === void 0) { accessSpecifier = AccessSpecifier.Public; }
	        this.accessSpecifier = accessSpecifier;
	        this.variableDefinition = new VariableDefinition(name, type);
	    }
	    FieldMember.prototype.toString = function () {
	        var staticPart = this.isStatic ? " static" : " ";
	        var finalPart = this.isFinal ? " final" : " ";
	        return util.stringForAccessSpecifier(this.accessSpecifier)
	            + staticPart
	            + finalPart
	            + this.variableDefinition.toString();
	    };
	    return FieldMember;
	}());
	exports.FieldMember = FieldMember;
	var VariableDefinition = (function () {
	    function VariableDefinition(name, type) {
	        this.name = name;
	        this.type = type;
	    }
	    VariableDefinition.prototype.toString = function () {
	        return this.name + ":" + this.type.getName();
	    };
	    return VariableDefinition;
	}());
	exports.VariableDefinition = VariableDefinition;
	var ClassDefinition = (function () {
	    function ClassDefinition(name, parentClass) {
	        if (parentClass === void 0) { parentClass = null; }
	        this.fieldList = [];
	        this.methodList = [];
	        this.subClasses = [];
	        this.interfacesImplemented = [];
	        this.name = name;
	        this.parentClass = parentClass;
	    }
	    ClassDefinition.prototype.getName = function () {
	        return this.name;
	    };
	    ClassDefinition.prototype.addSubClasses = function () {
	        var subClasses = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            subClasses[_i - 0] = arguments[_i];
	        }
	        for (var i = 0; i < subClasses.length; i++) {
	            this.subClasses.push(subClasses[i]);
	        }
	    };
	    ClassDefinition.prototype.getFieldByName = function (fieldName) {
	        for (var _i = 0, _a = this.fieldList; _i < _a.length; _i++) {
	            var field = _a[_i];
	            if (field.variableDefinition.name == fieldName) {
	                return field;
	            }
	        }
	        return null;
	    };
	    ClassDefinition.prototype.toString = function () {
	        return "class " + this.name;
	    };
	    return ClassDefinition;
	}());
	exports.ClassDefinition = ClassDefinition;
	var InterfaceDefinition = (function () {
	    function InterfaceDefinition(name) {
	        this.methodList = []; //it can be assumed that all the methods are non static public
	        this.subInterfaces = [];
	        this.implementingClasses = [];
	        this.name = name;
	    }
	    InterfaceDefinition.prototype.getName = function () {
	        return this.name;
	    };
	    InterfaceDefinition.prototype.addImplementingClasses = function () {
	        var implementations = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            implementations[_i - 0] = arguments[_i];
	        }
	        for (var i = 0; i < implementations.length; i++) {
	            this.implementingClasses.push(implementations[i]);
	        }
	    };
	    InterfaceDefinition.prototype.toString = function () {
	        return "interface " + this.name;
	    };
	    return InterfaceDefinition;
	}());
	exports.InterfaceDefinition = InterfaceDefinition;
	(function (CollectionType) {
	    CollectionType[CollectionType["Array"] = 1] = "Array";
	    CollectionType[CollectionType["LinkedList"] = 2] = "LinkedList";
	    CollectionType[CollectionType["Stack"] = 3] = "Stack";
	    CollectionType[CollectionType["Queue"] = 4] = "Queue";
	    CollectionType[CollectionType["Graph"] = 5] = "Graph";
	})(exports.CollectionType || (exports.CollectionType = {}));
	var CollectionType = exports.CollectionType;
	var GenericCollection = (function () {
	    function GenericCollection() {
	    }
	    GenericCollection.getCollectionName = function (type, generic) {
	        var genericTypeName = "object";
	        if (generic != null) {
	            genericTypeName = generic.getName();
	        }
	        var collectionName;
	        switch (type) {
	            case CollectionType.Array:
	                collectionName = "Array";
	            case CollectionType.LinkedList:
	                collectionName = "LinkedList";
	            case CollectionType.Stack:
	                collectionName = "Stack";
	            case CollectionType.Queue:
	                collectionName = "Queue";
	            case CollectionType.Graph:
	                collectionName = "Graph";
	            default:
	                collectionName = "Unknown Collection";
	        }
	        return collectionName + "<" + genericTypeName + ">";
	    };
	    GenericCollection.prototype.getName = function () {
	        return GenericCollection.getCollectionName(this.type, this.generic);
	    };
	    return GenericCollection;
	}());
	exports.GenericCollection = GenericCollection;
	exports.IntWrapper = new PrimitiveWrapper(PrimitiveType.IntType);
	exports.CharWrapper = new PrimitiveWrapper(PrimitiveType.CharType);
	exports.BoolWrapper = new PrimitiveWrapper(PrimitiveType.BoolType);
	exports.FloatWrapper = new PrimitiveWrapper(PrimitiveType.FloatType);
	exports.StringWrapper = new PrimitiveWrapper(PrimitiveType.StringType);


/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(72);
	var geometry_1 = __webpack_require__(71);
	/** A simple point. Empty suggests that this tracking point is not tracking anything(geometry) */
	var EmptyTrackingPoint = (function () {
	    function EmptyTrackingPoint() {
	    }
	    EmptyTrackingPoint.prototype.pointOnGeometry = function () {
	        return this.point;
	    };
	    EmptyTrackingPoint.prototype.gravitateTowards = function (p) {
	        return this.point;
	    };
	    return EmptyTrackingPoint;
	}());
	exports.EmptyTrackingPoint = EmptyTrackingPoint;
	/** Tracks the center point of a given geometry */
	var CenterTrackingPoint = (function () {
	    function CenterTrackingPoint(geometry) {
	        this.geometry = geometry;
	    }
	    CenterTrackingPoint.prototype.pointOnGeometry = function () {
	        return this.geometry.getBoundingBox().center();
	    };
	    CenterTrackingPoint.prototype.gravitateTowards = function (p) {
	        return this.geometry.getBoundingBox().center();
	    };
	    return CenterTrackingPoint;
	}());
	exports.CenterTrackingPoint = CenterTrackingPoint;
	var RectTrackingPoint = (function () {
	    /**
	     * Creates a new tracking point for a given side of a rect with a
	     * fraction that is linearly interpolated to get the tracked point
	     */
	    function RectTrackingPoint(rect, direction, fraction) {
	        if (direction === void 0) { direction = common_1.Direction.Top; }
	        if (fraction === void 0) { fraction = 0; }
	        this.rect = rect;
	        this.side = direction;
	        this.fraction = fraction;
	        this.trackedPoint = this.pointOnSide(this.side, this.fraction);
	    }
	    RectTrackingPoint.prototype.pointOnGeometry = function () {
	        return this.pointOnSide(this.side, this.fraction);
	    };
	    /** Returns the point defined by a side and a fraction between 0 and 1 */
	    RectTrackingPoint.prototype.pointOnSide = function (side, fraction) {
	        if (fraction === void 0) { fraction = this.fraction; }
	        var startPoint;
	        var endPoint;
	        switch (side) {
	            case common_1.Direction.Top:
	                startPoint = new geometry_1.Point(this.rect.x, this.rect.y);
	                endPoint = new geometry_1.Point(this.rect.x + this.rect.width, this.rect.y);
	                break;
	            case common_1.Direction.Right:
	                startPoint = new geometry_1.Point(this.rect.x + this.rect.width, this.rect.y);
	                endPoint = new geometry_1.Point(this.rect.x + this.rect.width, this.rect.y + this.rect.height);
	                break;
	            case common_1.Direction.Bottom:
	                startPoint = new geometry_1.Point(this.rect.x + this.rect.width, this.rect.y + this.rect.height);
	                endPoint = new geometry_1.Point(this.rect.x, this.rect.y + this.rect.height);
	                break;
	            case common_1.Direction.Left:
	                startPoint = new geometry_1.Point(this.rect.x, this.rect.y + this.rect.height);
	                endPoint = new geometry_1.Point(this.rect.x, this.rect.y);
	                break;
	            default:
	                console.log("Wrong side on rect tracking point");
	                break;
	        }
	        return common_1.linearInterpolation(startPoint, endPoint, fraction);
	    };
	    RectTrackingPoint.prototype.gravitateTowards = function (p) {
	        //find the center of the rectangle
	        var cx = (this.rect.x + this.rect.x + this.rect.width) / 2;
	        var cy = (this.rect.y + this.rect.y + this.rect.height) / 2;
	        var centerToPoint = new common_1.LineEquation(new geometry_1.Point(cx, cy), p);
	        var topLeft = this.rect.topLeft();
	        var topRight = this.rect.topRight();
	        var bottomLeft = this.rect.bottomLeft();
	        var bottomRight = this.rect.bottomRight();
	        var verticalSideEquation;
	        var horizontalSideEquation;
	        var verticalSideDirection;
	        var horizontalSideDirection;
	        //choose the side on which this point should get close to
	        if (p.y > cy) {
	            if (p.x > cx) {
	                var verticalSideEquation = new common_1.LineEquation(topRight, bottomRight);
	                verticalSideDirection = common_1.Direction.Right;
	                var horizontalSideEquation = new common_1.LineEquation(topLeft, topRight);
	                horizontalSideDirection = common_1.Direction.Top;
	            }
	            else {
	                var verticalSideEquation = new common_1.LineEquation(topLeft, bottomLeft);
	                verticalSideDirection = common_1.Direction.Left;
	                var horizontalSideEquation = new common_1.LineEquation(topLeft, topRight);
	                horizontalSideDirection = common_1.Direction.Top;
	            }
	        }
	        else {
	            if (p.x > cx) {
	                var verticalSideEquation = new common_1.LineEquation(topRight, bottomRight);
	                verticalSideDirection = common_1.Direction.Right;
	                var horizontalSideEquation = new common_1.LineEquation(bottomLeft, bottomRight);
	                horizontalSideDirection = common_1.Direction.Bottom;
	            }
	            else {
	                var verticalSideEquation = new common_1.LineEquation(topLeft, bottomLeft);
	                verticalSideDirection = common_1.Direction.Left;
	                var horizontalSideEquation = new common_1.LineEquation(bottomLeft, bottomRight);
	                horizontalSideDirection = common_1.Direction.Bottom;
	            }
	        }
	        var verticalSidePoint = verticalSideEquation.intersectionWith(centerToPoint);
	        var horizontalSidePoint = horizontalSideEquation.intersectionWith(centerToPoint);
	        if (verticalSidePoint != null && verticalSidePoint.withinYSpan(topRight.y, bottomRight.y)) {
	            this.side = verticalSideDirection;
	            this.trackedPoint = verticalSidePoint;
	        }
	        else {
	            this.side = horizontalSideDirection;
	            this.trackedPoint = horizontalSidePoint;
	        }
	        return this.trackedPoint;
	    };
	    return RectTrackingPoint;
	}());
	exports.RectTrackingPoint = RectTrackingPoint;
	var CircleTrackingPoint = (function () {
	    function CircleTrackingPoint(circle) {
	        this.circle = circle;
	    }
	    CircleTrackingPoint.prototype.pointOnGeometry = function () {
	        return this.trackedPoint;
	    };
	    CircleTrackingPoint.prototype.gravitateTowards = function (p) {
	        var angleOfSegment = this.circle.center.angleOfSegment(p);
	        this.trackedPoint = this.circle.center.pointAtLength(angleOfSegment, this.circle.radius);
	        return this.trackedPoint;
	    };
	    return CircleTrackingPoint;
	}());
	exports.CircleTrackingPoint = CircleTrackingPoint;
	var LineSegmentTrackingPoint = (function () {
	    function LineSegmentTrackingPoint() {
	    }
	    LineSegmentTrackingPoint.prototype.pointOnGeometry = function () {
	        return common_1.linearInterpolation(this.lineSegment.start, this.lineSegment.end, this.fraction);
	    };
	    LineSegmentTrackingPoint.prototype.gravitateTowards = function (p) {
	        return null; //TODO
	    };
	    return LineSegmentTrackingPoint;
	}());
	exports.LineSegmentTrackingPoint = LineSegmentTrackingPoint;


/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var worksheet_1 = __webpack_require__(70);
	var http_1 = __webpack_require__(28);
	var DashboardService = (function () {
	    function DashboardService(http) {
	        this.http = http;
	    }
	    /**
	     * Gets the list of worksheets associated with the logged in user.
	     * Will return null(Observable) if the user is not in session.
	     */
	    DashboardService.prototype.worksheetListForLoggedInUser = function () {
	        var _this = this;
	        return this.http.get(DashboardService.DASHBOARD_URL).map(function (response) { return _this.toWorksheetList(response); });
	    };
	    DashboardService.prototype.toWorksheetList = function (response) {
	        var worksheetList = [];
	        var arrayBody = response.json();
	        for (var i = 0; i < arrayBody.length; i++) {
	            worksheetList[i] = this.worksheetFromJson(arrayBody[i]);
	        }
	        return worksheetList;
	    };
	    DashboardService.prototype.worksheetFromJson = function (json) {
	        var worksheet = new worksheet_1.Worksheet();
	        worksheet.title = json.title;
	        worksheet.description = json.description;
	        worksheet.rid = json['@rid'];
	        return worksheet;
	    };
	    /** Creates a worksheet for the logged in user. */
	    DashboardService.prototype.createWorksheet = function (title, description) {
	        var _this = this;
	        var body = {
	            "title": title,
	            "description": description
	        };
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({ headers: headers });
	        return this.http.post(DashboardService.CREATE_WORKSHEET_URL, body, options).map(function (res) { return _this.worksheetFromJson(res.json()); });
	    };
	    /**
	     * Removes the specified worksheet from the logged in user.
	     * Returns false in case the worksheet is not associated with the user.
	     */
	    DashboardService.prototype.removeWorksheet = function (worksheet) {
	        var body = {
	            "worksheetRid": worksheet.rid
	        };
	        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
	        var options = new http_1.RequestOptions({
	            headers: headers,
	            body: body
	        });
	        return this.http.delete(DashboardService.REMOVE_WORKSHEET_URL, options).map(function (res) { return (res.json()); });
	    };
	    //TODO move these urls in the shared-codes file
	    DashboardService.DASHBOARD_URL = "api/dashboard";
	    DashboardService.CREATE_WORKSHEET_URL = "api/create-worksheet";
	    DashboardService.REMOVE_WORKSHEET_URL = "api/remove-worksheet";
	    DashboardService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
	    ], DashboardService);
	    return DashboardService;
	    var _a;
	}());
	exports.DashboardService = DashboardService;


/***/ },

/***/ 76:
/***/ function(module, exports) {

	module.exports = "<a style=\"background: blue;color: white\" (click)=\"router.navigate(['/account'])\">Account</a>\n<a style=\"background: pink;color: white\" (click)=\"logout()\">Logout</a>\n\n<h1>Worksheet list</h1>\n\n<div class=\"worksheet-tag\" *ngFor=\"let worksheet of worksheetList\">\n\t<span>{{worksheet.title}}</span> : \n\t<span>{{worksheet.description}}</span> \n\t<a style=\"background: red;color: white\" (click)=\"removeWorksheet(worksheet)\">Remove</a>\n</div>\n\n<div class=\"worksheet-tag\">\n\t<a style=\"background: green;color: white\" (click)=\"createNewWorksheet()\">Create new worksheet</a>\n</div>";

/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var core_2 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var sidebar_component_1 = __webpack_require__(79);
	var artboard_component_1 = __webpack_require__(82);
	var workspace_1 = __webpack_require__(89);
	var worksheet_1 = __webpack_require__(70);
	var SpaceKey = 32;
	var WorkspaceComponent = (function () {
	    function WorkspaceComponent() {
	        this.windowMovementAllowed = false; //allowed only when space is held
	        this.dragEntered = false;
	        this.startX = 0;
	        this.startY = 0;
	        this.lastX = 0;
	        this.lastY = 0;
	    }
	    WorkspaceComponent.prototype.ngOnInit = function () {
	        //TODO get the worksheet for the given rid defined in url params in OnInit method
	        this.workspace = new workspace_1.Workspace(new worksheet_1.Worksheet());
	        this.workspace.worksheet.diagramModel = new worksheet_1.DiagramModel();
	        //'window' here refers to the window object
	        //get the width and height of the 'device' window and get the 
	        this.movingWindow = new geometry_1.Rect(this.artboard.massiveArea.width / 2 - window.innerWidth / 2, this.artboard.massiveArea.height / 2 - window.innerHeight / 2, window.innerWidth, window.outerHeight);
	        this.positionArtboardBasis(this.movingWindow);
	    };
	    WorkspaceComponent.prototype.toggleSidebar = function () {
	        this.sidebar.open = !this.sidebar.open;
	    };
	    WorkspaceComponent.prototype.positionArtboardBasis = function (frame) {
	        this.artboard.massiveArea.x = -frame.x;
	        this.artboard.massiveArea.y = -frame.y;
	        this.movingWindow.x = frame.x;
	        this.movingWindow.y = frame.y;
	    };
	    WorkspaceComponent.prototype.keydown = function (event) {
	        if (event.keyCode == SpaceKey) {
	            this.windowMovementAllowed = true;
	        }
	    };
	    WorkspaceComponent.prototype.keyup = function (event) {
	        if (event.keyCode == SpaceKey) {
	            this.windowMovementAllowed = false;
	        }
	    };
	    WorkspaceComponent.prototype.mousedown = function (event) {
	        this.dragEntered = true;
	        this.startX = event.clientX;
	        this.startY = event.clientY;
	        this.lastX = event.clientX;
	        this.lastY = event.clientY;
	    };
	    WorkspaceComponent.prototype.mousemove = function (event) {
	        var dx = event.clientX - this.lastX;
	        var dy = event.clientY - this.lastY;
	        if (this.dragEntered && this.windowMovementAllowed) {
	            //we inverse the differences because the gesture 'grabs' and pulls the artboard in the other direction
	            dx *= -1;
	            dy *= -1;
	            if (this.movingWindow.x + dx >= this.artboard.massiveArea.x &&
	                this.movingWindow.x + dx <= this.artboard.massiveArea.x + this.artboard.massiveArea.width) {
	                this.movingWindow.x += dx;
	            }
	            if (this.movingWindow.y + dy >= this.artboard.massiveArea.y &&
	                this.movingWindow.y + dy <= this.artboard.massiveArea.y + this.artboard.massiveArea.height) {
	                this.movingWindow.y += dy;
	            }
	            this.positionArtboardBasis(this.movingWindow);
	        }
	        this.lastX = event.clientX;
	        this.lastY = event.clientY;
	    };
	    WorkspaceComponent.prototype.mouseup = function (event) {
	        this.dragEntered = false;
	    };
	    WorkspaceComponent.prototype.resize = function (event) {
	        console.log("Window resize changing moving window size");
	        this.movingWindow.width = window.innerWidth; //TODO what if the scale is different?
	        this.movingWindow.height = window.innerHeight;
	    };
	    __decorate([
	        core_1.ViewChild(sidebar_component_1.SidebarComponent), 
	        __metadata('design:type', (typeof (_a = typeof sidebar_component_1.SidebarComponent !== 'undefined' && sidebar_component_1.SidebarComponent) === 'function' && _a) || Object)
	    ], WorkspaceComponent.prototype, "sidebar", void 0);
	    __decorate([
	        core_1.ViewChild(artboard_component_1.ArtboardComponent), 
	        __metadata('design:type', (typeof (_b = typeof artboard_component_1.ArtboardComponent !== 'undefined' && artboard_component_1.ArtboardComponent) === 'function' && _b) || Object)
	    ], WorkspaceComponent.prototype, "artboard", void 0);
	    WorkspaceComponent = __decorate([
	        core_1.Component({
	            selector: 'workspace',
	            styles: [__webpack_require__(97)],
	            template: __webpack_require__(98),
	            animations: [
	                core_2.trigger('shiftMenuControls', [
	                    core_2.state('unshifted', core_2.style({
	                        left: '20px'
	                    })),
	                    core_2.state('shifted', core_2.style({
	                        left: '300px'
	                    })),
	                    core_2.transition('unshifted => shifted', core_2.animate('100ms ease-in')),
	                    core_2.transition('shifted => unshifted', core_2.animate('100ms ease-out'))
	                ])
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WorkspaceComponent);
	    return WorkspaceComponent;
	    var _a, _b;
	}());
	exports.WorkspaceComponent = WorkspaceComponent;


/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var TransformService = (function () {
	    function TransformService() {
	    }
	    TransformService.prototype.toModelSpace = function (p) {
	        return new geometry_1.Point(p.x, p.y); //TODO
	    };
	    TransformService.prototype.lengthInModelSpace = function (l) {
	        return l; //TODO
	    };
	    TransformService.prototype.toViewSpace = function (p) {
	        return new geometry_1.Point(p.x, p.y); //TODO
	    };
	    TransformService.prototype.lengthInViewSpace = function (l) {
	        return l; //TODO
	    };
	    TransformService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], TransformService);
	    return TransformService;
	}());
	exports.TransformService = TransformService;


/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var core_2 = __webpack_require__(3);
	var SidebarComponent = (function () {
	    function SidebarComponent() {
	        this.open = false;
	    }
	    SidebarComponent = __decorate([
	        core_1.Component({
	            selector: 'sidebar',
	            styles: [__webpack_require__(80)],
	            template: __webpack_require__(81),
	            animations: [
	                core_2.trigger('sidebarOpen', [
	                    core_2.state('close', core_2.style({
	                        left: '-300px'
	                    })),
	                    core_2.state('open', core_2.style({
	                        left: '0px'
	                    })),
	                    core_2.transition('close => open', core_2.animate('100ms ease-in')),
	                    core_2.transition('open => close', core_2.animate('100ms ease-out'))
	                ])
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SidebarComponent);
	    return SidebarComponent;
	}());
	exports.SidebarComponent = SidebarComponent;


/***/ },

/***/ 80:
/***/ function(module, exports) {

	module.exports = "#sidebar {\n  background: #8f42de;\n  color: whitesmoke;\n  width: 280px;\n  height: 100%;\n  position: absolute;\n  top: 0px; }\n"

/***/ },

/***/ 81:
/***/ function(module, exports) {

	module.exports = "<div id=\"sidebar\" [@sidebarOpen]=\"open?'open':'close'\">\n\t<h2>sidebar</h2>\n\t<i class=\"ms-Icon ms-Icon--Cancel\" aria-hidden=\"true\" (click)=\"open=false\"></i>\n\t\n</div>";

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var core_2 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var geometry_2 = __webpack_require__(71);
	var mock_data_service_1 = __webpack_require__(83);
	var auto_completion_component_1 = __webpack_require__(85);
	var creationDrawer = __webpack_require__(88);
	var interpreter_service_1 = __webpack_require__(91);
	var worksheet_1 = __webpack_require__(70);
	var workspace_1 = __webpack_require__(89);
	var selection_box_component_1 = __webpack_require__(130);
	var move_1 = __webpack_require__(694);
	exports.ArtboardWidth = 3200;
	exports.ArtboardHeight = (2 / 3) * exports.ArtboardWidth;
	var ArtboardComponent = (function () {
	    function ArtboardComponent(mockDataService, interpreter) {
	        this.mockDataService = mockDataService;
	        this.interpreter = interpreter;
	        this.rectList = [];
	        this.diagramticComponentList = [];
	        this.mousedownEvent = new core_1.EventEmitter();
	        this.mousemoveEvent = new core_1.EventEmitter();
	        this.mouseupEvent = new core_1.EventEmitter();
	        this.creationDrawerLocation = new geometry_2.Point(exports.ArtboardWidth / 2, exports.ArtboardHeight / 2);
	        //testing stuff
	        this.st = new geometry_2.Point(1501, 1300);
	        this.en = new geometry_2.Point(1700, 700);
	        this.massiveArea = new geometry_1.Rect(0, 0, exports.ArtboardWidth, exports.ArtboardHeight);
	    }
	    ArtboardComponent.prototype.ngOnInit = function () {
	        this.testing();
	    };
	    ArtboardComponent.prototype.testing = function () {
	        this.interpreter.parseFieldMember("#someMethod(n:int,str:string):bool");
	        this.rectList.push(new geometry_1.Rect(1300, 1000, 200, 50));
	        var genericNode1 = new worksheet_1.GenericDiagramNode(worksheet_1.GenericDiagramNodeType.Rectangle);
	        genericNode1.rect.x = 1500;
	        genericNode1.rect.y = 1200;
	        var genericNode2 = new worksheet_1.GenericDiagramNode(worksheet_1.GenericDiagramNodeType.RoundedRectangle);
	        genericNode2.rect.x = 1800;
	        genericNode2.rect.y = 1000;
	        var edge = new worksheet_1.DiagramEdge();
	        edge.from = genericNode1;
	        edge.to = genericNode2;
	        this.workspace.worksheet.diagramModel.nodeList.push(genericNode1);
	        this.workspace.worksheet.diagramModel.nodeList.push(genericNode2);
	        this.workspace.worksheet.diagramModel.edgeList.push(edge);
	    };
	    ArtboardComponent.prototype.doubleClickedArtboard = function (event) {
	        this.creationDrawerLocation = new geometry_2.Point(event.offsetX - creationDrawer.WIDTH / 2, event.offsetY - creationDrawer.HEIGHT / 2);
	        this.workspace.creationDrawerIsOpen = true;
	    };
	    ArtboardComponent.prototype.mousedown = function (event) {
	        //toggle creation drawer to false to close it (done using bindings)
	        this.workspace.creationDrawerIsOpen = false;
	        this.mousedownEvent.emit(event);
	        if (this.draggingInteraction != null) {
	            this.draggingInteraction.handleMousePress(event);
	        }
	        else {
	            this.selectionBox.mousePressed(event);
	        }
	    };
	    ArtboardComponent.prototype.mousemove = function (event) {
	        this.mousemoveEvent.emit(event);
	        if (this.draggingInteraction != null) {
	            this.draggingInteraction.handleMouseDrag(event);
	        }
	        else {
	            this.selectionBox.mouseMoved(event);
	        }
	    };
	    ArtboardComponent.prototype.mouseup = function (event) {
	        this.mouseupEvent.emit(event);
	        if (this.draggingInteraction != null) {
	            this.draggingInteraction.handleMouseRelease(event);
	        }
	        else {
	            this.selectionBox.mouseReleased(event);
	        }
	        this.draggingInteraction = null;
	    };
	    ArtboardComponent.prototype.setDragInteractionIfEmpty = function (dragProcessor) {
	        if (this.draggingInteraction == null) {
	            console.log("Setting new drag processor");
	            this.draggingInteraction = dragProcessor;
	        }
	    };
	    ArtboardComponent.prototype.moveNodes = function (pressedNode) {
	        if (this.draggingInteraction == null) {
	            console.debug("Creating move command for possible movement");
	            //if the workspace did not already contain the pressed node, then
	            //behavioraly, only that node gets selected and moved, and all other node loose selection
	            if (!this.workspace.selectionContainsNode(pressedNode)) {
	                this.workspace.clearSelection();
	                this.workspace.addNodeToSelection(pressedNode);
	            }
	            //issue a press drag release based command which will work on the current selection
	            this.draggingInteraction = new move_1.MoveCommand(this.workspace);
	        }
	    };
	    ArtboardComponent.prototype.register = function (listener) {
	        this.diagramticComponentList.push(listener);
	    };
	    ArtboardComponent.prototype.unregister = function (listener) {
	        var index = this.diagramticComponentList.indexOf(listener, 0);
	        if (index > -1) {
	            this.diagramticComponentList.splice(index, 1);
	        }
	    };
	    __decorate([
	        core_2.ViewChild(selection_box_component_1.SelectionBoxComponent), 
	        __metadata('design:type', (typeof (_a = typeof selection_box_component_1.SelectionBoxComponent !== 'undefined' && selection_box_component_1.SelectionBoxComponent) === 'function' && _a) || Object)
	    ], ArtboardComponent.prototype, "selectionBox", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_b = typeof workspace_1.Workspace !== 'undefined' && workspace_1.Workspace) === 'function' && _b) || Object)
	    ], ArtboardComponent.prototype, "workspace", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ArtboardComponent.prototype, "mousedownEvent", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ArtboardComponent.prototype, "mousemoveEvent", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ArtboardComponent.prototype, "mouseupEvent", void 0);
	    __decorate([
	        core_2.ViewChild(auto_completion_component_1.AutoCompletionComponent), 
	        __metadata('design:type', (typeof (_c = typeof auto_completion_component_1.AutoCompletionComponent !== 'undefined' && auto_completion_component_1.AutoCompletionComponent) === 'function' && _c) || Object)
	    ], ArtboardComponent.prototype, "autoCompletion", void 0);
	    ArtboardComponent = __decorate([
	        core_1.Component({
	            selector: 'artboard',
	            styles: [__webpack_require__(95)],
	            template: __webpack_require__(96),
	        }), 
	        __metadata('design:paramtypes', [(typeof (_d = typeof mock_data_service_1.MockDataService !== 'undefined' && mock_data_service_1.MockDataService) === 'function' && _d) || Object, (typeof (_e = typeof interpreter_service_1.InterpreterService !== 'undefined' && interpreter_service_1.InterpreterService) === 'function' && _e) || Object])
	    ], ArtboardComponent);
	    return ArtboardComponent;
	    var _a, _b, _c, _d, _e;
	}());
	exports.ArtboardComponent = ArtboardComponent;


/***/ },

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var semantic = __webpack_require__(73);
	var worksheet = __webpack_require__(70);
	var object = __webpack_require__(84);
	var artboard_component_1 = __webpack_require__(82);
	var MockDataService = (function () {
	    function MockDataService() {
	    }
	    MockDataService.prototype.vehicleUml = function () {
	        //Vehicle abstract class
	        var vehicle = new semantic.ClassDefinition("Vehicle");
	        vehicle.isAbstract = true;
	        vehicle.fieldList.push(new semantic.FieldMember("weight", semantic.FloatWrapper));
	        vehicle.fieldList.push(new semantic.FieldMember("passengerCapacity", semantic.IntWrapper));
	        vehicle.methodList.push(new semantic.MethodMember("estimatedTotalWeight", semantic.FloatWrapper));
	        var getOwnerName = new semantic.MethodMember("getOwnerName", semantic.StringWrapper);
	        getOwnerName.isAbstract = true;
	        vehicle.methodList.push(getOwnerName);
	        //Land, Water, Air sub abstract classes
	        var land = new semantic.ClassDefinition("Land", vehicle);
	        land.isAbstract = true;
	        land.fieldList.push(new semantic.FieldMember("numberOfWheels", semantic.IntWrapper));
	        var water = new semantic.ClassDefinition("Water", vehicle);
	        water.isAbstract = true;
	        water.methodList.push(new semantic.MethodMember("getDockingInformation", semantic.StringWrapper));
	        var air = new semantic.ClassDefinition("Air", vehicle);
	        air.isAbstract = true;
	        land.fieldList.push(new semantic.FieldMember("takeOffDistance", semantic.FloatWrapper));
	        vehicle.subClasses.push(land, water, air);
	        //concrete classes
	        var truck = new semantic.ClassDefinition("Truck", land);
	        var car = new semantic.ClassDefinition("Car", land);
	        vehicle.addSubClasses(truck, car);
	        var boat = new semantic.ClassDefinition("Boat", water);
	        var ship = new semantic.ClassDefinition("Ship", water);
	        water.addSubClasses(boat, ship);
	        var plane = new semantic.ClassDefinition("Plane", air);
	        var helicopter = new semantic.ClassDefinition("Helicopter", air);
	        air.addSubClasses(plane, helicopter);
	        //cargo interface
	        var cargo = new semantic.InterfaceDefinition("Cargo");
	        cargo.methodList.push(new semantic.MethodPrototype("weightRequirement", semantic.FloatWrapper));
	        cargo.methodList.push(new semantic.MethodPrototype("areaRequirement", semantic.FloatWrapper));
	        // Simple luggage concrete class
	        var luggage = new semantic.ClassDefinition("Luggage");
	        luggage.fieldList.push(new semantic.FieldMember("weight", semantic.FloatWrapper));
	        luggage.fieldList.push(new semantic.FieldMember("area", semantic.FloatWrapper));
	        luggage.fieldList.push(new semantic.FieldMember("fragile", semantic.BoolWrapper));
	        luggage.interfacesImplemented.push(cargo);
	        cargo.addImplementingClasses(luggage);
	        //CargoCarier interface
	        var cargoCarrier = new semantic.InterfaceDefinition("CargoCarier");
	        cargoCarrier.methodList.push(new semantic.MethodPrototype("maximumAllowedWeight", semantic.FloatWrapper));
	        cargoCarrier.methodList.push(new semantic.MethodPrototype("carryCargo", cargo));
	        // Vehicle also implements cargo
	        vehicle.interfacesImplemented.push(cargo);
	        cargo.addImplementingClasses(vehicle);
	        truck.interfacesImplemented.push(cargoCarrier);
	        plane.interfacesImplemented.push(cargoCarrier);
	        ship.interfacesImplemented.push(cargoCarrier);
	        cargoCarrier.addImplementingClasses(truck, plane, ship);
	        var semanticModel = new semantic.SemanticModel();
	        semanticModel.classDefinitionList.push(vehicle, land, water, air, truck, car, ship, boat, plane, helicopter, luggage);
	        semanticModel.interfaceDefinitionList.push(cargo, cargoCarrier);
	        return semanticModel;
	    };
	    MockDataService.prototype.vehicleWorksheet = function () {
	        var width = artboard_component_1.ArtboardWidth;
	        var height = artboard_component_1.ArtboardHeight;
	        var softwareDesign = this.vehicleUml();
	        var vehicle = softwareDesign.getClassByName("Vehicle");
	        var vehicleClassDiagram = new worksheet.ClassDiagramNode(vehicle, width / 2, height / 2);
	        var cargoCarrier = softwareDesign.getInterfaceByName("CargoCarier");
	        var cargoCarrierDiagram = new worksheet.InterfaceDiagramNode(cargoCarrier, width / 2 + 250, height / 2 + 200);
	        var luggage = softwareDesign.getClassByName("Luggage");
	        var weight = luggage.getFieldByName("weight");
	        var area = luggage.getFieldByName("area");
	        var fragile = luggage.getFieldByName("fragile");
	        var luggageObject = new object.ClassObjectData("luggage", luggage);
	        luggageObject.fieldDataList.push(new object.DataHolder(weight.variableDefinition, new object.PrimitiveData(semantic.PrimitiveType.FloatType, "23.4")));
	        luggageObject.fieldDataList.push(new object.DataHolder(area.variableDefinition, new object.PrimitiveData(semantic.PrimitiveType.FloatType, "13.4")));
	        luggageObject.fieldDataList.push(new object.DataHolder(weight.variableDefinition, new object.PrimitiveData(semantic.PrimitiveType.BoolType, "true")));
	        var luggageObjectDiagram = new worksheet.ClassObjectDiagram(luggageObject, width / 2 + 100, height / 2 - 300);
	        var document = new worksheet.Worksheet();
	        // the new design does not have these fields
	        // document.semanticModel=softwareDesign;
	        // document.classDiagramList.push(vehicleClassDiagram);
	        // document.interfaceDiagramList.push(cargoCarrierDiagram);
	        // document.classObjectDiagramList.push(luggageObjectDiagram);
	        return document;
	    };
	    MockDataService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], MockDataService);
	    return MockDataService;
	}());
	exports.MockDataService = MockDataService;


/***/ },

/***/ 84:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var semantic_model_1 = __webpack_require__(73);
	/** Root class that holds all data objects entries in one place */
	var ObjectModel = (function () {
	    function ObjectModel() {
	        this.classObjectList = [];
	        this.interfaceObjectList = [];
	        this.collectionList = [];
	    }
	    return ObjectModel;
	}());
	exports.ObjectModel = ObjectModel;
	/** Holds a primitive value as a string */
	var PrimitiveData = (function () {
	    function PrimitiveData(type, value) {
	        this.value = value;
	        this.type = type;
	    }
	    /** Formats as per the data type eg: 'char',"string", 34.0, 23, true/false etc. */
	    PrimitiveData.prototype.formatted = function () {
	        switch (this.type) {
	            case semantic_model_1.PrimitiveType.IntType:
	                return this.value;
	            case semantic_model_1.PrimitiveType.CharType:
	                return "'" + this.value + "'";
	            case semantic_model_1.PrimitiveType.BoolType:
	                return this.value.toLowerCase() == "true" ? "true" : "false"; //assuming the value itself is just either true or false
	            case semantic_model_1.PrimitiveType.FloatType:
	                return parseFloat(this.value).toString();
	            case semantic_model_1.PrimitiveType.StringType:
	                return "\"" + this.value + "\"";
	        }
	        return this.value; // if all else fails, just return the string itself
	    };
	    PrimitiveData.prototype.isPrimitive = function () {
	        return true;
	    };
	    PrimitiveData.prototype.stringRepresentation = function () {
	        return this.formatted();
	    };
	    return PrimitiveData;
	}());
	exports.PrimitiveData = PrimitiveData;
	/** A struct that denotes an object which could either be a class object or an interface implementation */
	var ObjectData = (function () {
	    function ObjectData() {
	    }
	    ObjectData.prototype.isPrimitive = function () {
	        return true;
	    };
	    ObjectData.prototype.stringRepresentation = function () {
	        return this.description;
	    };
	    return ObjectData;
	}());
	exports.ObjectData = ObjectData;
	/** An implementation of an interface */
	var InterfaceObjectData = (function (_super) {
	    __extends(InterfaceObjectData, _super);
	    function InterfaceObjectData() {
	        _super.apply(this, arguments);
	    }
	    InterfaceObjectData.prototype.getTypeNode = function () {
	        return this.interfaceDefinition;
	    };
	    return InterfaceObjectData;
	}(ObjectData));
	exports.InterfaceObjectData = InterfaceObjectData;
	/** A concrete object holding several values for its fields */
	var ClassObjectData = (function (_super) {
	    __extends(ClassObjectData, _super);
	    function ClassObjectData(name, classDefinition) {
	        _super.call(this);
	        this.fieldDataList = [];
	        this.name = name;
	        this.classDefinition = classDefinition;
	    }
	    ClassObjectData.prototype.getTypeNode = function () {
	        return this.classDefinition;
	    };
	    return ClassObjectData;
	}(ObjectData));
	exports.ClassObjectData = ClassObjectData;
	/** Holds data for a variable. Weather primitive(through PrimitiveData) or a reference(through ObjectData or Collection) */
	var DataHolder = (function () {
	    function DataHolder(variable, data) {
	        this.variable = variable;
	        this.data = data;
	    }
	    return DataHolder;
	}());
	exports.DataHolder = DataHolder;
	/** Abstraction over different types of data collections  */
	var Collection = (function () {
	    function Collection() {
	    }
	    Collection.prototype.isPrimitive = function () {
	        return false;
	    };
	    return Collection;
	}());
	exports.Collection = Collection;
	/** Data collection of Array types with a generic */
	var ArrayData = (function (_super) {
	    __extends(ArrayData, _super);
	    function ArrayData() {
	        _super.apply(this, arguments);
	    }
	    ArrayData.prototype.isPrimitive = function () {
	        return false;
	    };
	    ArrayData.prototype.stringRepresentation = function () {
	        return this.generic.getName() + "[]";
	    };
	    return ArrayData;
	}(Collection));
	exports.ArrayData = ArrayData;
	/** Data holder for the collection with a single link */
	var SinglyLinkedNode = (function () {
	    function SinglyLinkedNode() {
	    }
	    return SinglyLinkedNode;
	}());
	exports.SinglyLinkedNode = SinglyLinkedNode;
	/** Data holder for the collection with a two links */
	var DoublyLinkedNode = (function () {
	    function DoublyLinkedNode() {
	    }
	    return DoublyLinkedNode;
	}());
	exports.DoublyLinkedNode = DoublyLinkedNode;
	/** Data holder for graph collection comprising of nodes and edges */
	var GraphNode = (function () {
	    function GraphNode() {
	    }
	    return GraphNode;
	}());
	exports.GraphNode = GraphNode;
	/** Edge relationship of a graph node based collection represented by this class */
	var GraphEdge = (function () {
	    function GraphEdge() {
	    }
	    return GraphEdge;
	}());
	exports.GraphEdge = GraphEdge;
	/** Data collection of a doubly linked list */
	var LinkedListData = (function (_super) {
	    __extends(LinkedListData, _super);
	    function LinkedListData() {
	        _super.apply(this, arguments);
	    }
	    LinkedListData.prototype.stringRepresentation = function () {
	        return "LinkedList<" + this.generic.getName() + ">";
	    };
	    return LinkedListData;
	}(Collection));
	exports.LinkedListData = LinkedListData;
	/** Data collection of a queue */
	var QueueData = (function (_super) {
	    __extends(QueueData, _super);
	    function QueueData() {
	        _super.apply(this, arguments);
	    }
	    QueueData.prototype.stringRepresentation = function () {
	        return "Queue<" + this.generic.getName() + ">";
	    };
	    return QueueData;
	}(Collection));
	exports.QueueData = QueueData;
	/** Data collection of a stack */
	var StackData = (function (_super) {
	    __extends(StackData, _super);
	    function StackData() {
	        _super.apply(this, arguments);
	    }
	    StackData.prototype.stringRepresentation = function () {
	        return "Stack<" + this.generic.getName() + ">";
	    };
	    return StackData;
	}(Collection));
	exports.StackData = StackData;
	/** Data collection of a graph */
	var GraphData = (function (_super) {
	    __extends(GraphData, _super);
	    function GraphData() {
	        _super.apply(this, arguments);
	    }
	    GraphData.prototype.stringRepresentation = function () {
	        return "Graph<" + this.generic.getName() + ">";
	    };
	    return GraphData;
	}(Collection));
	exports.GraphData = GraphData;


/***/ },

/***/ 85:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var semantic_model_1 = __webpack_require__(73);
	var object_model_1 = __webpack_require__(84);
	var AutoCompletionComponent = (function () {
	    function AutoCompletionComponent() {
	        this.position = new geometry_1.Point(1200, 900);
	    }
	    __decorate([
	        core_1.Input('semanticModel'), 
	        __metadata('design:type', (typeof (_a = typeof semantic_model_1.SemanticModel !== 'undefined' && semantic_model_1.SemanticModel) === 'function' && _a) || Object)
	    ], AutoCompletionComponent.prototype, "semanticModel", void 0);
	    __decorate([
	        core_1.Input('objectModel'), 
	        __metadata('design:type', (typeof (_b = typeof object_model_1.ObjectModel !== 'undefined' && object_model_1.ObjectModel) === 'function' && _b) || Object)
	    ], AutoCompletionComponent.prototype, "objectModel", void 0);
	    AutoCompletionComponent = __decorate([
	        core_1.Component({
	            selector: 'auto-completion',
	            template: __webpack_require__(86),
	            styles: [__webpack_require__(87)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AutoCompletionComponent);
	    return AutoCompletionComponent;
	    var _a, _b;
	}());
	exports.AutoCompletionComponent = AutoCompletionComponent;


/***/ },

/***/ 86:
/***/ function(module, exports) {

	module.exports = "<div id=\"auto-completion-box\"\n\t[style.left.px]=\"position.x\"\n\t[style.top.px]=\"position.y\"\n\t>\n\tSomeClassName\n</div>";

/***/ },

/***/ 87:
/***/ function(module, exports) {

	module.exports = "#auto-completion-box {\n  position: absolute;\n  background: #6f6f6f;\n  color: white;\n  width: 250px;\n  height: 200px;\n  overflow-x: hidden;\n  overflow-y: scroll; }\n"

/***/ },

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var core_2 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var workspace_1 = __webpack_require__(89);
	exports.WIDTH = 200;
	exports.HEIGHT = 250;
	var CreationDrawerComponent = (function () {
	    function CreationDrawerComponent() {
	        this.requestDragging = new core_1.EventEmitter();
	    }
	    CreationDrawerComponent.prototype.handleMousePress = function (event) {
	    };
	    CreationDrawerComponent.prototype.handleMouseDrag = function (event) {
	    };
	    CreationDrawerComponent.prototype.handleMouseRelease = function (event) {
	    };
	    CreationDrawerComponent.prototype.registerDragIntention = function (dragProcessor) {
	        this.requestDragging.emit(dragProcessor);
	    };
	    __decorate([
	        core_1.Input('workspace'), 
	        __metadata('design:type', (typeof (_a = typeof workspace_1.Workspace !== 'undefined' && workspace_1.Workspace) === 'function' && _a) || Object)
	    ], CreationDrawerComponent.prototype, "workspace", void 0);
	    __decorate([
	        core_1.Input('position'), 
	        __metadata('design:type', (typeof (_b = typeof geometry_1.Point !== 'undefined' && geometry_1.Point) === 'function' && _b) || Object)
	    ], CreationDrawerComponent.prototype, "position", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], CreationDrawerComponent.prototype, "requestDragging", void 0);
	    CreationDrawerComponent = __decorate([
	        core_1.Component({
	            selector: 'creation-drawer',
	            template: __webpack_require__(90),
	            animations: [
	                core_2.trigger('isDrawerOpen', [
	                    core_2.state('open', core_2.style({
	                        width: exports.WIDTH + "px",
	                        height: exports.HEIGHT + "px",
	                        transform: "scale(1,1)"
	                    })),
	                    core_2.state('closed', core_2.style({
	                        width: exports.WIDTH + "px",
	                        height: exports.HEIGHT + "px",
	                        transform: "scale(0,0)"
	                    })),
	                    core_2.transition('open => closed', core_2.animate('100ms ease-in')),
	                    core_2.transition('closed => open', core_2.animate('200ms ease-out'))
	                ])
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], CreationDrawerComponent);
	    return CreationDrawerComponent;
	    var _a, _b;
	}());
	exports.CreationDrawerComponent = CreationDrawerComponent;


/***/ },

/***/ 89:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var worksheet_1 = __webpack_require__(70);
	/** Current configuration of the workspace on account of user actions so far. */
	var Workspace = (function () {
	    function Workspace(worksheet) {
	        this.history = [];
	        this.future = [];
	        this.creationDrawerIsOpen = false;
	        this._worksheet = worksheet;
	    }
	    /** Pushes the command onto history. By specifying true as the second argument, it will also execute before pushing to history */
	    Workspace.prototype.commit = function (command, execute) {
	        if (execute === void 0) { execute = false; }
	        if (execute) {
	            command.execute();
	        }
	        this.history.push(command);
	        this.future.splice(0, this.future.length);
	    };
	    Workspace.prototype.undo = function () {
	        if (this.history.length) {
	            console.debug("history stack is empty");
	            return;
	        }
	        var latestCommand = this.history.pop();
	        latestCommand.unExecute(); //undo it
	        this.future.push(latestCommand);
	    };
	    Workspace.prototype.redo = function () {
	        if (this.future.length) {
	            console.debug("future stack is empty");
	            return;
	        }
	        var undoneCommand = this.history.pop();
	        undoneCommand.execute(); //redo it back
	        this.history.push(undoneCommand);
	    };
	    Object.defineProperty(Workspace.prototype, "worksheet", {
	        get: function () {
	            return this._worksheet;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(Workspace.prototype, "selection", {
	        /** Gets a diagram model that contains items in selection. Can be null if selection is empty*/
	        get: function () {
	            return this._selection;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Workspace.prototype.addNodeToSelection = function (node) {
	        if (this._selection == null) {
	            this._selection = new worksheet_1.DiagramModel();
	        }
	        if (this._selection.containsNode(node)) {
	            return;
	        }
	        this._selection.nodeList.push(node);
	        node.selected = true;
	    };
	    Workspace.prototype.removeNodeFromSelection = function (node) {
	        if (this._selection == null)
	            return;
	        var index = this._selection.nodeList.indexOf(node);
	        if (index != -1) {
	            this._selection.nodeList.splice(index, 1);
	            node.selected = false;
	        }
	    };
	    Workspace.prototype.addEdgeToSelection = function (edge) {
	        if (this._selection == null) {
	            this._selection = new worksheet_1.DiagramModel();
	        }
	        if (this._selection.containsEdge(edge)) {
	            return;
	        }
	        this._selection.edgeList.push(edge);
	        edge.selected = true;
	    };
	    Workspace.prototype.removeEdgeFromSelection = function (edge) {
	        if (this._selection == null)
	            return;
	        var index = this._selection.edgeList.indexOf(edge);
	        if (index != -1) {
	            this._selection.edgeList.splice(index, 1);
	            edge.selected = false;
	        }
	    };
	    /** Resets the selected flag for each node and edge in selection and nullifies the selection diagram model. */
	    Workspace.prototype.clearSelection = function () {
	        if (this._selection == null)
	            return;
	        //reset selected flag of all edges
	        for (var _i = 0, _a = this._selection.edgeList; _i < _a.length; _i++) {
	            var edge = _a[_i];
	            edge.selected = false;
	        }
	        //reset selected flag of all nodes
	        for (var _b = 0, _c = this._selection.nodeList; _b < _c.length; _b++) {
	            var node = _c[_b];
	            node.selected = false;
	        }
	        //nullify selection, this ensures that any references to an old selection stay intact.
	        this._selection = null;
	    };
	    /** Makes a copy of the selection diagram model that stays unchanged when the selection changes */
	    Workspace.prototype.copySelection = function () {
	        var copy = new worksheet_1.DiagramModel();
	        //add off all edges to new copy's list
	        for (var _i = 0, _a = this._selection.edgeList; _i < _a.length; _i++) {
	            var edge = _a[_i];
	            copy.edgeList.push(edge);
	        }
	        //add off all nodes to new copy's list
	        for (var _b = 0, _c = this._selection.nodeList; _b < _c.length; _b++) {
	            var node = _c[_b];
	            copy.nodeList.push(node);
	        }
	        return copy;
	    };
	    /** Tells if the selection contains the specified node or not */
	    Workspace.prototype.selectionContainsNode = function (node) {
	        return this._selection != null && this._selection.containsNode(node);
	    };
	    /** Tells if the selection contains the specified Edge or not */
	    Workspace.prototype.selectionContainsEdge = function (edge) {
	        return this._selection != null && this._selection.containsEdge(edge);
	    };
	    /** Returns true if argument is the only node selected */
	    Workspace.prototype.selectionContainsOnlyNode = function (node) {
	        return this._selection != null && this._selection.nodeList.length == 1 && this._selection.containsNode(node);
	    };
	    /** Returns true if argument is the only Edge selected */
	    Workspace.prototype.selectionContainsOnlyEdge = function (edge) {
	        return this._selection != null && this._selection.edgeList.length == 1 && this._selection.containsEdge(edge);
	    };
	    return Workspace;
	}());
	exports.Workspace = Workspace;


/***/ },

/***/ 90:
/***/ function(module, exports) {

	module.exports = "<div \n\tclass=\"drop-shadowed-pop-up\"\n\tid=\"creation-pop-up\"\n\t[style.left.px]=\"position.x\"\n\t[style.top.px]=\"position.y\"\n\t[@isDrawerOpen]=\"workspace.creationDrawerIsOpen?'open':'closed'\" >\n\n</div>";

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var lexer = __webpack_require__(92);
	var parser = __webpack_require__(93);
	var InterpreterService = (function () {
	    function InterpreterService() {
	    }
	    InterpreterService.prototype.parseFieldMember = function (input) {
	        console.log("Parsing for field member " + input);
	        var lexemeList = lexer.getLexemeList(input);
	        for (var _i = 0, lexemeList_1 = lexemeList; _i < lexemeList_1.length; _i++) {
	            var lexeme = lexemeList_1[_i];
	            console.log(lexeme);
	        }
	        var cfg = this.makeDummyGrammer();
	        var parseTree = cfg.parse("--++");
	        console.log(parseTree);
	        return null;
	    };
	    InterpreterService.prototype.makeDummyGrammer = function () {
	        var s = new parser.NonTerminal(0);
	        var a = new parser.NonTerminal(1);
	        var ta = new parser.Terminal(lexer.LexemeType.Minus);
	        var tb = new parser.Terminal(lexer.LexemeType.Plus);
	        var cfg = new parser.ContextFreeGrammer(s);
	        cfg.variableList.push(s, a);
	        cfg.terminalList.push(ta, tb);
	        cfg.relation.push(new parser.Rule(s, a, a));
	        cfg.relation.push(new parser.Rule(a, ta, a));
	        cfg.relation.push(new parser.Rule(a, tb));
	        cfg.finalizeGrammer();
	        return cfg;
	    };
	    InterpreterService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], InterpreterService);
	    return InterpreterService;
	}());
	exports.InterpreterService = InterpreterService;


/***/ },

/***/ 92:
/***/ function(module, exports) {

	"use strict";
	/** Each lexeme can be identified by its type. These help in easily categorising the different tokens in a string. */
	(function (LexemeType) {
	    LexemeType[LexemeType["Identifier"] = 1] = "Identifier";
	    LexemeType[LexemeType["Number"] = 2] = "Number";
	    LexemeType[LexemeType["Unknown"] = 3] = "Unknown";
	    LexemeType[LexemeType["Minus"] = 4] = "Minus";
	    LexemeType[LexemeType["Plus"] = 5] = "Plus";
	    LexemeType[LexemeType["HashTag"] = 6] = "HashTag";
	    LexemeType[LexemeType["Tilde"] = 7] = "Tilde";
	    LexemeType[LexemeType["Colon"] = 8] = "Colon";
	    LexemeType[LexemeType["Comma"] = 9] = "Comma";
	    LexemeType[LexemeType["Int"] = 10] = "Int";
	    LexemeType[LexemeType["Float"] = 11] = "Float";
	    LexemeType[LexemeType["Bool"] = 12] = "Bool";
	    LexemeType[LexemeType["Char"] = 13] = "Char";
	    LexemeType[LexemeType["String"] = 14] = "String";
	    LexemeType[LexemeType["Void"] = 15] = "Void";
	    LexemeType[LexemeType["Star"] = 16] = "Star";
	    LexemeType[LexemeType["OpeningSquareBracket"] = 17] = "OpeningSquareBracket";
	    LexemeType[LexemeType["ClosingSquareBracket"] = 18] = "ClosingSquareBracket";
	    LexemeType[LexemeType["OpeningAngularBracket"] = 19] = "OpeningAngularBracket";
	    LexemeType[LexemeType["ClosingAngularBracket"] = 20] = "ClosingAngularBracket";
	    LexemeType[LexemeType["OpeningCurvedBracket"] = 21] = "OpeningCurvedBracket";
	    LexemeType[LexemeType["ClosingCurvedBracket"] = 22] = "ClosingCurvedBracket";
	    LexemeType[LexemeType["DoubleOpeningSquareBracket"] = 23] = "DoubleOpeningSquareBracket";
	    LexemeType[LexemeType["DoubleClosingSquareBracket"] = 24] = "DoubleClosingSquareBracket";
	    LexemeType[LexemeType["DoubleOpeningAngularBracket"] = 25] = "DoubleOpeningAngularBracket";
	    LexemeType[LexemeType["DoubleClosingAngularBracket"] = 26] = "DoubleClosingAngularBracket";
	    LexemeType[LexemeType["DoubleOpeningCurvedBracket"] = 27] = "DoubleOpeningCurvedBracket";
	    LexemeType[LexemeType["DoubleClosingCurvedBracket"] = 28] = "DoubleClosingCurvedBracket";
	    LexemeType[LexemeType["Interface"] = 29] = "Interface";
	    LexemeType[LexemeType["Enumeration"] = 30] = "Enumeration";
	    LexemeType[LexemeType["UserSymbol"] = 31] = "UserSymbol";
	    LexemeType[LexemeType["DatabaseSymbol"] = 32] = "DatabaseSymbol";
	    LexemeType[LexemeType["Arrow"] = 33] = "Arrow";
	    LexemeType[LexemeType["Line"] = 34] = "Line";
	    LexemeType[LexemeType["Dotted"] = 35] = "Dotted";
	    LexemeType[LexemeType["DoubleSlash"] = 36] = "DoubleSlash";
	    LexemeType[LexemeType["OpeningMultiLineComment"] = 37] = "OpeningMultiLineComment";
	    LexemeType[LexemeType["ClosingMultiLineComment"] = 38] = "ClosingMultiLineComment";
	    LexemeType[LexemeType["EOF"] = 39] = "EOF"; //End of File, artificial and used exclusively by parser
	})(exports.LexemeType || (exports.LexemeType = {}));
	var LexemeType = exports.LexemeType;
	/** Returns string representation of the lexeme type. Used only for development purposes */
	function stringForLexemeType(type) {
	    switch (type) {
	        case LexemeType.Identifier: return "id";
	        case LexemeType.Number: return "num";
	        case LexemeType.Unknown: return "'unknown'";
	        case LexemeType.Minus: return "-";
	        case LexemeType.Plus: return "+";
	        case LexemeType.HashTag: return "#";
	        case LexemeType.Tilde: return "~";
	        case LexemeType.Colon: return ":";
	        case LexemeType.Comma: return ",";
	        case LexemeType.Int: return "int";
	        case LexemeType.Float: return "float";
	        case LexemeType.Bool: return "bool";
	        case LexemeType.Char: return "char";
	        case LexemeType.String: return "string";
	        case LexemeType.Void: return "void";
	        case LexemeType.Star: return "*";
	        case LexemeType.OpeningSquareBracket: return "[";
	        case LexemeType.ClosingSquareBracket: return "]";
	        case LexemeType.OpeningAngularBracket: return "<";
	        case LexemeType.ClosingAngularBracket: return ">";
	        case LexemeType.OpeningCurvedBracket: return "(";
	        case LexemeType.ClosingCurvedBracket: return ")";
	        case LexemeType.DoubleOpeningSquareBracket: return "[[";
	        case LexemeType.DoubleClosingSquareBracket: return "]]";
	        case LexemeType.DoubleOpeningAngularBracket: return "<<";
	        case LexemeType.DoubleClosingAngularBracket: return ">>";
	        case LexemeType.DoubleOpeningCurvedBracket: return "((";
	        case LexemeType.DoubleClosingCurvedBracket: return "))";
	        case LexemeType.Interface: return "interface";
	        case LexemeType.Enumeration: return "enumeration";
	        case LexemeType.UserSymbol: return "o<<";
	        case LexemeType.DatabaseSymbol: return "o((";
	        case LexemeType.Arrow: return "-->";
	        case LexemeType.Line: return "---";
	        case LexemeType.Dotted: return "...";
	        case LexemeType.DoubleSlash: return "//";
	        case LexemeType.OpeningMultiLineComment: return "/*";
	        case LexemeType.ClosingMultiLineComment: return "*/";
	        case LexemeType.EOF: return "EOF";
	    }
	    return null;
	}
	exports.stringForLexemeType = stringForLexemeType;
	/**
	 * A token in the string that qualifies as an identified symbol in the grammer .
	 * A Lexeme should be thought of as an instance of a terminal in the CFG.
	 */
	var Lexeme = (function () {
	    function Lexeme(type, startIndex, length) {
	        this.type = type;
	        this.start = startIndex;
	        this.length = length;
	    }
	    Lexeme.prototype.toString = function () {
	        return this.type + " ";
	    };
	    return Lexeme;
	}());
	exports.Lexeme = Lexeme;
	var Keyword = (function () {
	    function Keyword(word, type) {
	        this.word = word;
	        this.type = type;
	    }
	    Keyword.prototype.lexemeMatch = function (container, fromIndex) {
	        if (fromIndex + this.word.length > container.length) {
	            return null;
	        }
	        var fromHere = container.substring(fromIndex, fromIndex + this.word.length);
	        if (this.word == fromHere) {
	            return new Lexeme(this.type, fromIndex, this.word.length);
	        }
	        else {
	            return null;
	        }
	    };
	    Keyword.prototype.toString = function () {
	        return this.word + " (" + this.type + ")";
	    };
	    return Keyword;
	}());
	var keywordList = [
	    new Keyword("interface", LexemeType.Interface),
	    new Keyword("enumeration", LexemeType.Enumeration),
	    new Keyword("int", LexemeType.Int),
	    new Keyword("char", LexemeType.Char),
	    new Keyword("bool", LexemeType.Bool),
	    new Keyword("float", LexemeType.Float),
	    new Keyword("string", LexemeType.String),
	    new Keyword("void", LexemeType.Void),
	    new Keyword("+", LexemeType.Plus),
	    new Keyword("-", LexemeType.Minus),
	    new Keyword("#", LexemeType.HashTag),
	    new Keyword("~", LexemeType.Tilde),
	    new Keyword(":", LexemeType.Colon),
	    new Keyword(",", LexemeType.Comma),
	    new Keyword("*", LexemeType.Star),
	    new Keyword("o<<", LexemeType.UserSymbol),
	    new Keyword("o((", LexemeType.DatabaseSymbol),
	    new Keyword("-->", LexemeType.Arrow),
	    new Keyword("---", LexemeType.Line),
	    new Keyword("...", LexemeType.Dotted),
	    new Keyword("//", LexemeType.DoubleSlash),
	    new Keyword("/*", LexemeType.OpeningMultiLineComment),
	    new Keyword("*/", LexemeType.ClosingMultiLineComment),
	    new Keyword("[", LexemeType.OpeningSquareBracket),
	    new Keyword("]", LexemeType.ClosingSquareBracket),
	    new Keyword("(", LexemeType.OpeningCurvedBracket),
	    new Keyword(")", LexemeType.ClosingCurvedBracket),
	    new Keyword("<", LexemeType.OpeningAngularBracket),
	    new Keyword(">", LexemeType.ClosingAngularBracket),
	    new Keyword("[[", LexemeType.DoubleOpeningSquareBracket),
	    new Keyword("]]", LexemeType.DoubleClosingSquareBracket),
	    new Keyword("((", LexemeType.DoubleOpeningCurvedBracket),
	    new Keyword("))", LexemeType.DoubleClosingCurvedBracket),
	    new Keyword("<<", LexemeType.DoubleOpeningAngularBracket),
	    new Keyword(">>", LexemeType.DoubleClosingAngularBracket),
	];
	//sort the keyword list in descending order because
	//longer keywords are prioritised over shorter ones during ambiguities. 
	//Example: 'interface' before 'int' 
	keywordList.sort(function (a, b) {
	    return b.word.length - a.word.length;
	});
	/**
	 * Performs lexical analysis algorithm to yield a list of lexeme(of various categories).
	 */
	function getLexemeList(input) {
	    var lexemeList = [];
	    var inputLength = input.length;
	    var i = 0;
	    while (i < inputLength) {
	        //check for match with any keyword
	        //this is an O(1) operation since the keyword list is finitely defined
	        //in other words, think of this as multiple if else statements
	        var keywordMatch = null;
	        for (var _i = 0, keywordList_1 = keywordList; _i < keywordList_1.length; _i++) {
	            var keyword = keywordList_1[_i];
	            //if there is a match, store the result, and break from this inner loop
	            var keywordMatch = keyword.lexemeMatch(input, i);
	            if (keywordMatch != null) {
	                break;
	            }
	        }
	        //for a keyword match, push to lexeme list and increment the index by that much length for the next iteration
	        if (keywordMatch != null) {
	            lexemeList.push(keywordMatch);
	            i += keywordMatch.length;
	            continue;
	        }
	        //if no keywords matched by now, check to see if it is any other type of symbol
	        if (isAlpha(input.charAt(i))) {
	            var startIndex = i;
	            while (i < inputLength &&
	                (isAlpha(input.charAt(i)) ||
	                    isDigit(input.charAt(i))) ||
	                "_" == input.charAt(i)) {
	                i++;
	            }
	            var length = i - startIndex;
	            var identifier = new Lexeme(LexemeType.Identifier, startIndex, length);
	            lexemeList.push(identifier);
	        }
	        else if (isDigit(input.charAt(i))) {
	            var startIndex = i;
	            while (i < inputLength && isDigit(input.charAt(i))) {
	                i++;
	            }
	            var length = i - startIndex;
	            var digitsOnly = new Lexeme(LexemeType.Number, startIndex, length);
	            lexemeList.push(digitsOnly);
	        }
	        else if (" " == input.charAt(i)) {
	            //simply skip whitespaces
	            while (i < inputLength && (" " == input.charAt(i))) {
	                i++;
	            }
	        }
	        else {
	            var unknown = new Lexeme(LexemeType.Unknown, i, 1);
	            lexemeList.push(unknown);
	            i++;
	        }
	    }
	    //at the very end, append the EOF symbol
	    lexemeList.push(new Lexeme(LexemeType.EOF, input.length, 0));
	    return lexemeList;
	}
	exports.getLexemeList = getLexemeList;
	function isAlpha(str) {
	    return /^[a-zA-Z]+$/.test(str);
	}
	function isDigit(str) {
	    return /^\d+$/.test(str);
	}


/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var lexical_analyzer_1 = __webpack_require__(92);
	var parser_table_1 = __webpack_require__(94);
	var util = __webpack_require__(72);
	/** Different types of syntax elements that can exists in a CFG */
	(function (SyntaxElementType) {
	    SyntaxElementType[SyntaxElementType["NonTerminal"] = 0] = "NonTerminal";
	    SyntaxElementType[SyntaxElementType["Terminal"] = 1] = "Terminal";
	    SyntaxElementType[SyntaxElementType["Epsilon"] = 2] = "Epsilon";
	})(exports.SyntaxElementType || (exports.SyntaxElementType = {}));
	var SyntaxElementType = exports.SyntaxElementType;
	/** A variable in the context free grammer */
	var NonTerminal = (function () {
	    /**
	     * Constructs a non terminal with a representational id.
	     * For augumented variable, this should always be -1
	     */
	    function NonTerminal(id) {
	        this.id = id;
	    }
	    NonTerminal.prototype.getType = function () {
	        return SyntaxElementType.NonTerminal;
	    };
	    NonTerminal.prototype.toString = function () {
	        if (this.isAugumentedVariable()) {
	            return "A'";
	        }
	        var startLetter = "A";
	        return String.fromCharCode(startLetter.charCodeAt(0) + this.id);
	    };
	    NonTerminal.prototype.isAugumentedVariable = function () {
	        return this.id == -1;
	    };
	    return NonTerminal;
	}());
	exports.NonTerminal = NonTerminal;
	/** An ending symbol in the context free grammer */
	var Terminal = (function () {
	    function Terminal(tokenType) {
	        this.token = tokenType;
	    }
	    Terminal.prototype.getType = function () {
	        return SyntaxElementType.Terminal;
	    };
	    /** Indicates the terminating point in a string. This is also treated as a terminal. */
	    Terminal.prototype.isEndOfFile = function () {
	        return this.token == lexical_analyzer_1.LexemeType.EOF;
	    };
	    Terminal.prototype.toString = function () {
	        return lexical_analyzer_1.stringForLexemeType(this.token);
	    };
	    return Terminal;
	}());
	exports.Terminal = Terminal;
	/** Denotes an empty string */
	var Epsilon = (function () {
	    function Epsilon() {
	    }
	    Epsilon.prototype.getType = function () {
	        return SyntaxElementType.Epsilon;
	    };
	    Epsilon.prototype.toString = function () {
	        return "\E";
	    };
	    return Epsilon;
	}());
	exports.Epsilon = Epsilon;
	/** Container that holds the LHS and RHS of a CFG rule */
	var Rule = (function () {
	    function Rule(from) {
	        var goesTo = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            goesTo[_i - 1] = arguments[_i];
	        }
	        this.lhs = from;
	        this.rhs = goesTo;
	    }
	    Rule.prototype.toString = function () {
	        var line = this.lhs.toString();
	        line += " -> ";
	        for (var _i = 0, _a = this.rhs; _i < _a.length; _i++) {
	            var element = _a[_i];
	            line += element.toString() + " ";
	        }
	        return line;
	    };
	    return Rule;
	}());
	exports.Rule = Rule;
	/**
	 * Holds a Context Free Grammer and provides methods for parsing a string.
	 * For the sake of reliable parsing results unambigous grammer should be supplied.
	 */
	var ContextFreeGrammer = (function () {
	    function ContextFreeGrammer(start) {
	        this.variableList = [];
	        this.terminalList = [];
	        this.relation = [];
	        this.eof = new Terminal(lexical_analyzer_1.LexemeType.EOF);
	        this.start = start;
	    }
	    /** Simply prints out the rules line by line */
	    ContextFreeGrammer.prototype.printRules = function () {
	        for (var _i = 0, _a = this.relation; _i < _a.length; _i++) {
	            var rule = _a[_i];
	            console.log(rule.toString());
	        }
	    };
	    /** Augments the grammer with a starting rule,adds EOF, creates the parsing table etc.*/
	    ContextFreeGrammer.prototype.finalizeGrammer = function () {
	        this.augumentGrammer();
	        this.terminalList.push(this.eof);
	        this.setRuleIndices();
	        this.parserTable = new parser_table_1.ParserTable(this);
	        return this.parserTable;
	    };
	    /** Finds the possible first terminals for the given non terminal in this Grammer */
	    ContextFreeGrammer.prototype.first = function (variable, found, recursive) {
	        if (recursive === void 0) { recursive = true; }
	        //for each rule where lhs matches the given variable
	        for (var _i = 0, _a = this.relation; _i < _a.length; _i++) {
	            var rule = _a[_i];
	            if (rule.lhs == variable) {
	                var element = rule.rhs[0];
	                if (element.getType() == SyntaxElementType.NonTerminal &&
	                    element != variable && recursive) {
	                    //for a new non terminal recursively find and add its first element
	                    this.first(element, found);
	                }
	                else if (element.getType() == SyntaxElementType.Terminal &&
	                    !util.existsInList(element, found)) {
	                    //for a newly discovered terminal, add to list
	                    found.push(element);
	                }
	            }
	        }
	    };
	    /** Returns all rules where supplied variable is the LHS */
	    ContextFreeGrammer.prototype.rulesFor = function (variable) {
	        var ruleList = [];
	        for (var _i = 0, _a = this.relation; _i < _a.length; _i++) {
	            var rule = _a[_i];
	            if (rule.lhs == variable) {
	                ruleList.push(rule);
	            }
	        }
	        return ruleList;
	    };
	    /**
	     * Inserts a new starting rule that goes to the current starting rule adding new non terminal in the proceess.
	     * Returns the said starting Non Terminal
	     */
	    ContextFreeGrammer.prototype.augumentGrammer = function () {
	        var sPrime = new NonTerminal(-1); //-1 indicates augumented start rule
	        //its IMPORTANT to insert the new augumented rule at the start
	        this.variableList.unshift(sPrime);
	        this.relation.unshift(new Rule(sPrime, this.start));
	        this.start = sPrime;
	        return sPrime;
	    };
	    /** Sets the indices on the rules of the context free grammer. */
	    ContextFreeGrammer.prototype.setRuleIndices = function () {
	        for (var _i = 0, _a = this.relation; _i < _a.length; _i++) {
	            var rule = _a[_i];
	            rule.ruleIndex = this.relation.indexOf(rule);
	        }
	    };
	    /** Parses a string to give an appropriate parse tree which can be used to retrieve information from(semantic analysis)*/
	    ContextFreeGrammer.prototype.parse = function (input) {
	        var parsingResult = new ParsingResult(input);
	        parsingResult.lexemeList = lexical_analyzer_1.getLexemeList(input);
	        this.setRespectiveTerminalIndices(parsingResult.lexemeList);
	        var stack = [];
	        stack.push(new StateParseTreeNode(0));
	        while (parsingResult.status == ParsingStatus.InProgress) {
	            var lexeme = parsingResult.lexemeList[parsingResult.pointer];
	            var terminal = this.terminalList[lexeme.terminalIndex];
	            //get the state from whatever is on top of stack
	            var state = stack[stack.length - 1].getStateNumber();
	            var action = this.parserTable.getAction(state, terminal);
	            if (action.type == parser_table_1.ParserTableValueType.Shift) {
	                //perform shift operation
	                this.shift(action, stack, parsingResult);
	            }
	            else if (action.type == parser_table_1.ParserTableValueType.Reduce) {
	                //perform reduce operation
	                this.reduce(action, stack, parsingResult);
	            }
	            else if (action.type == parser_table_1.ParserTableValueType.Accept) {
	                //success (accepted)
	                parsingResult.status = ParsingStatus.Passed;
	            }
	            else if (action.type == parser_table_1.ParserTableValueType.Blank) {
	                //error
	                parsingResult.status = ParsingStatus.Failed;
	            }
	        }
	        return parsingResult;
	    };
	    /** Shifts the pointer once and adds the symbol and that state on top of stack. Returns the new shifted pointer */
	    ContextFreeGrammer.prototype.shift = function (action, stack, parsingResult) {
	        var lexeme = parsingResult.lexemeList[parsingResult.pointer];
	        var terminal = this.terminalList[lexeme.terminalIndex];
	        var symbolElement = new LeafParseTreeNode(lexeme);
	        var stateElement = new StateParseTreeNode(action.n);
	        stack.push(symbolElement, stateElement);
	        parsingResult.pointer++;
	    };
	    /** Pops appropriate elements from stack and turns it into a rule */
	    ContextFreeGrammer.prototype.reduce = function (action, stack, parsingResult) {
	        //get the associated rule that we want to reduce to
	        var rule = this.relation[action.n];
	        //create a new parent node that denotes this reduction derivative
	        var lhsNode = new ParentParseTreeNode(rule.lhs);
	        //pop twice as many elements from stack as there are elements in the rhs
	        var elementsToPop = 2 * rule.rhs.length;
	        //to keep track of all the children arisen from this reduce, hold them in an array
	        var descendents = [];
	        for (var i = 0; i < elementsToPop; i++) {
	            var stackElement = stack.pop();
	            if (stackElement.getType() != ParseTreeNodeType.StateHolder) {
	                descendents.push(stackElement);
	            }
	        }
	        //because the descendents are popped backwards, reverse the array for the correct order
	        descendents.reverse();
	        //set as children to the LHS node
	        lhsNode.children = descendents;
	        //the LHS now becomes the new root of the parse tree
	        parsingResult.root = lhsNode;
	        //use the top state and the LHS to get the 'goto state'
	        var topAfterPops = stack[stack.length - 1].getStateNumber();
	        var gotoStateNumber = this.parserTable.getGoto(topAfterPops, rule.lhs);
	        var gotoStateElement = new StateParseTreeNode(gotoStateNumber);
	        //push the LHS and the goto on stack and perform the goto operation immediately
	        stack.push(lhsNode, gotoStateElement);
	        this.gotoStateAndPerformAction(stack, parsingResult, parsingResult.pointer);
	    };
	    /**
	     * Goto part of the reduce step that occurs after the main reduce step is performed.
	     * It is assumed that the top elemen on the stack is a goto action.
	     */
	    ContextFreeGrammer.prototype.gotoStateAndPerformAction = function (stack, parsingResult, pointer) {
	        var lexeme = parsingResult.lexemeList[pointer];
	        var terminal = this.terminalList[lexeme.terminalIndex];
	        //get the state from whatever is on top of stack
	        var state = stack[stack.length - 1].getStateNumber();
	        var action = this.parserTable.getAction(state, terminal);
	        if (action.type == parser_table_1.ParserTableValueType.Shift) {
	            //perform shift operation
	            this.shift(action, stack, parsingResult);
	        }
	        else if (action.type == parser_table_1.ParserTableValueType.Reduce) {
	            //perform reduce operation again. This recursively builds the parse tree bottom up.
	            this.reduce(action, stack, parsingResult);
	        }
	        else if (action.type == parser_table_1.ParserTableValueType.Accept) {
	            //success (accepted)
	            parsingResult.status = ParsingStatus.Passed;
	        }
	        else if (action.type == parser_table_1.ParserTableValueType.Blank) {
	            //error
	            parsingResult.status = ParsingStatus.Failed;
	        }
	    };
	    /** Sets the indices of terminal in each lexeme for matching lexeme types*/
	    ContextFreeGrammer.prototype.setRespectiveTerminalIndices = function (lexemeList) {
	        for (var _i = 0, lexemeList_1 = lexemeList; _i < lexemeList_1.length; _i++) {
	            var lexeme = lexemeList_1[_i];
	            for (var i = 0; i < this.terminalList.length; i++) {
	                if (this.terminalList[i].token == lexeme.type) {
	                    lexeme.terminalIndex = i;
	                    break;
	                }
	            }
	        }
	    };
	    /** Loops through the terminal list to return a terminal which matches the given type */
	    ContextFreeGrammer.prototype.getTerminalBy = function (type) {
	        for (var _i = 0, _a = this.terminalList; _i < _a.length; _i++) {
	            var terminal = _a[_i];
	            if (terminal.token == type) {
	                return terminal;
	            }
	        }
	        return null;
	    };
	    /** Loops through the variable list to return a variable which matches the given id */
	    ContextFreeGrammer.prototype.getNonTerminalBy = function (id) {
	        for (var _i = 0, _a = this.variableList; _i < _a.length; _i++) {
	            var variable = _a[_i];
	            if (variable.id == id) {
	                return variable;
	            }
	        }
	        return null;
	    };
	    /** Constructs the parser table using LR1 construction algorithm */
	    ContextFreeGrammer.prototype.constructParserTableUsingLR1 = function () {
	        this.parserTable = this.makeDummyParserTable(); //TODO
	    };
	    /** Rigs a parser table from the final result of https://www.youtube.com/watch?v=APJ_Eh60Qwo */
	    ContextFreeGrammer.prototype.makeDummyParserTable = function () {
	        var table = new parser_table_1.ParserTable(this);
	        var s = this.getNonTerminalBy(0);
	        var a = this.getNonTerminalBy(1);
	        var ta = this.getTerminalBy(lexical_analyzer_1.LexemeType.Minus);
	        var tb = this.getTerminalBy(lexical_analyzer_1.LexemeType.Plus);
	        //table rigging
	        //final result from https://www.youtube.com/watch?v=APJ_Eh60Qwo
	        table.setAction(0, ta, parser_table_1.ParserTableValueType.Shift, 3);
	        table.setAction(0, tb, parser_table_1.ParserTableValueType.Shift, 4);
	        table.setGoto(0, a, 2);
	        table.setGoto(0, s, 1);
	        table.setAction(1, this.eof, parser_table_1.ParserTableValueType.Accept, 0);
	        table.setAction(2, ta, parser_table_1.ParserTableValueType.Shift, 3);
	        table.setAction(2, tb, parser_table_1.ParserTableValueType.Shift, 4);
	        table.setGoto(2, a, 5);
	        table.setAction(3, ta, parser_table_1.ParserTableValueType.Shift, 3);
	        table.setAction(3, tb, parser_table_1.ParserTableValueType.Shift, 4);
	        table.setGoto(3, a, 6);
	        table.setAction(4, ta, parser_table_1.ParserTableValueType.Reduce, 3);
	        table.setAction(4, tb, parser_table_1.ParserTableValueType.Reduce, 3);
	        table.setAction(4, this.eof, parser_table_1.ParserTableValueType.Reduce, 3);
	        table.setAction(5, ta, parser_table_1.ParserTableValueType.Reduce, 1);
	        table.setAction(5, tb, parser_table_1.ParserTableValueType.Reduce, 1);
	        table.setAction(5, this.eof, parser_table_1.ParserTableValueType.Reduce, 1);
	        table.setAction(6, ta, parser_table_1.ParserTableValueType.Reduce, 2);
	        table.setAction(6, tb, parser_table_1.ParserTableValueType.Reduce, 2);
	        table.setAction(6, this.eof, parser_table_1.ParserTableValueType.Reduce, 2);
	        return table;
	    };
	    return ContextFreeGrammer;
	}());
	exports.ContextFreeGrammer = ContextFreeGrammer;
	(function (ParsingStatus) {
	    ParsingStatus[ParsingStatus["Passed"] = 1] = "Passed";
	    ParsingStatus[ParsingStatus["Failed"] = 2] = "Failed";
	    ParsingStatus[ParsingStatus["InProgress"] = 3] = "InProgress";
	})(exports.ParsingStatus || (exports.ParsingStatus = {}));
	var ParsingStatus = exports.ParsingStatus;
	/** Tree Structure for containing the Parse tree */
	var ParsingResult = (function () {
	    function ParsingResult(input) {
	        this.input = input;
	        this.status = ParsingStatus.InProgress;
	        this.pointer = 0;
	    }
	    ParsingResult.prototype.toString = function () {
	        return this.root.toString();
	    };
	    return ParsingResult;
	}());
	exports.ParsingResult = ParsingResult;
	/** Tells wheather a node denotes a leaf,parent, or a state number(used inside the parsing stack).*/
	(function (ParseTreeNodeType) {
	    ParseTreeNodeType[ParseTreeNodeType["Leaf"] = 0] = "Leaf";
	    ParseTreeNodeType[ParseTreeNodeType["Parent"] = 1] = "Parent";
	    ParseTreeNodeType[ParseTreeNodeType["StateHolder"] = 2] = "StateHolder";
	})(exports.ParseTreeNodeType || (exports.ParseTreeNodeType = {}));
	var ParseTreeNodeType = exports.ParseTreeNodeType;
	/** As a parent node in the parse tree, this class holds a non terminal and children */
	var ParentParseTreeNode = (function () {
	    function ParentParseTreeNode(nonTerminal) {
	        this.nonTerminal = nonTerminal;
	    }
	    ParentParseTreeNode.prototype.getType = function () {
	        return ParseTreeNodeType.Parent;
	    };
	    /** Finds the child node that contains the supplied non terminal */
	    ParentParseTreeNode.prototype.findChildNodeHoldingNonTerminal = function (nonTerminal) {
	        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
	            var node = _a[_i];
	            if (node.getNonTerminal() == nonTerminal) {
	                return node;
	            }
	        }
	        return null;
	    };
	    /** Returns non terminal, if this node is supposed to contain a non terminal, null otherwise */
	    ParentParseTreeNode.prototype.getNonTerminal = function () {
	        return this.nonTerminal;
	    };
	    /** Returns lexeme, if this node is supposed to contain a lexeme, null otherwise */
	    ParentParseTreeNode.prototype.getLexeme = function () {
	        return null;
	    };
	    /** Returns state number, if this node is supposed to contain a state number, null otherwise */
	    ParentParseTreeNode.prototype.getStateNumber = function () {
	        return -1;
	    };
	    ParentParseTreeNode.prototype.toString = function () {
	        return this.nonTerminal.toString();
	    };
	    return ParentParseTreeNode;
	}());
	exports.ParentParseTreeNode = ParentParseTreeNode;
	/** As a leaf node in the parse tree, this class holds the lexeme */
	var LeafParseTreeNode = (function () {
	    function LeafParseTreeNode(lexeme) {
	        this.lexeme = lexeme;
	    }
	    LeafParseTreeNode.prototype.getType = function () {
	        return ParseTreeNodeType.Leaf;
	    };
	    /** Returns non terminal, if this node is supposed to contain a non terminal, null otherwise */
	    LeafParseTreeNode.prototype.getNonTerminal = function () {
	        return null;
	    };
	    /** Returns lexeme, if this node is supposed to contain a lexeme, null otherwise */
	    LeafParseTreeNode.prototype.getLexeme = function () {
	        return this.lexeme;
	    };
	    /** Returns state number, if this node is supposed to contain a state number, null otherwise */
	    LeafParseTreeNode.prototype.getStateNumber = function () {
	        return -1;
	    };
	    LeafParseTreeNode.prototype.toString = function () {
	        return lexical_analyzer_1.stringForLexemeType(this.lexeme.type);
	    };
	    return LeafParseTreeNode;
	}());
	exports.LeafParseTreeNode = LeafParseTreeNode;
	/** State numbers are also held as parse tree nodes but only for parsing computation purposes */
	var StateParseTreeNode = (function () {
	    function StateParseTreeNode(state) {
	        this.state = state;
	    }
	    StateParseTreeNode.prototype.getType = function () {
	        return ParseTreeNodeType.StateHolder;
	    };
	    /** Returns non terminal, if this node is supposed to contain a non terminal, null otherwise */
	    StateParseTreeNode.prototype.getNonTerminal = function () {
	        return null;
	    };
	    /** Returns lexeme, if this node is supposed to contain a lexeme, null otherwise */
	    StateParseTreeNode.prototype.getLexeme = function () {
	        return null;
	    };
	    /** Returns state number, if this node is supposed to contain a state number, null otherwise */
	    StateParseTreeNode.prototype.getStateNumber = function () {
	        return this.state;
	    };
	    StateParseTreeNode.prototype.toString = function () {
	        return "'# " + this.state + " #'";
	    };
	    return StateParseTreeNode;
	}());


/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var syntax_parser_1 = __webpack_require__(93);
	var util = __webpack_require__(72);
	/** Type of action in the parser table */
	(function (ParserTableValueType) {
	    ParserTableValueType[ParserTableValueType["Blank"] = 1] = "Blank";
	    ParserTableValueType[ParserTableValueType["Shift"] = 2] = "Shift";
	    ParserTableValueType[ParserTableValueType["Reduce"] = 3] = "Reduce";
	    ParserTableValueType[ParserTableValueType["Goto"] = 4] = "Goto";
	    ParserTableValueType[ParserTableValueType["Accept"] = 5] = "Accept";
	})(exports.ParserTableValueType || (exports.ParserTableValueType = {}));
	var ParserTableValueType = exports.ParserTableValueType;
	/**  Inidivual cell value of the 2d parse table. */
	var ParserTableValue = (function () {
	    function ParserTableValue(type, n) {
	        this.type = type;
	        this.n = n;
	    }
	    ParserTableValue.prototype.toString = function () {
	        switch (this.type) {
	            case ParserTableValueType.Blank: return "  ";
	            case ParserTableValueType.Shift: return "S" + this.n;
	            case ParserTableValueType.Reduce: return "R" + this.n;
	            case ParserTableValueType.Goto: return "G" + this.n;
	            case ParserTableValueType.Accept: return "Ac";
	        }
	        return null;
	    };
	    return ParserTableValue;
	}());
	exports.ParserTableValue = ParserTableValue;
	/** Holds a 2d table that drives the shift reduce algorithm. */
	var ParserTable = (function () {
	    function ParserTable(cfg) {
	        this.table = [];
	        this.rowCount = 0;
	        this.cfg = cfg;
	        //set the indices and get table length
	        this.setIndices();
	        this.constructUsingLR1();
	    }
	    /** Sets the indices of the terminal and variable elements and */
	    ParserTable.prototype.setIndices = function () {
	        var index = 0;
	        for (; index < this.cfg.terminalList.length; index++) {
	            this.cfg.terminalList[index].tableIndex = index;
	        }
	        // this.cfg.eof.tableIndex=index;
	        for (var j = 0; j < this.cfg.variableList.length; j++) {
	            this.cfg.variableList[j].tableIndex = index++;
	        }
	        return this.cfg.terminalList.length + 1 + this.cfg.variableList.length;
	    };
	    /** Returns total column length of the parser table */
	    ParserTable.prototype.totalColumns = function () {
	        return this.cfg.terminalList.length + this.cfg.variableList.length;
	    };
	    /** Creates new row in the table column */
	    ParserTable.prototype.makeNewRow = function () {
	        var totalColumns = this.totalColumns();
	        this.table[this.rowCount] = [];
	        for (var j = 0; j < totalColumns; j++) {
	            this.table[this.rowCount][j] = new ParserTableValue(ParserTableValueType.Blank, 0);
	        }
	        this.rowCount++;
	    };
	    ParserTable.prototype.getAction = function (row, terminal) {
	        return this.table[row][terminal.tableIndex];
	    };
	    ParserTable.prototype.setAction = function (row, terminal, type, n) {
	        this.table[row][terminal.tableIndex].type = type;
	        this.table[row][terminal.tableIndex].n = n;
	    };
	    ParserTable.prototype.getGoto = function (row, variable) {
	        return this.table[row][variable.tableIndex].n;
	    };
	    ParserTable.prototype.setGoto = function (row, variable, n) {
	        this.table[row][variable.tableIndex].type = ParserTableValueType.Goto;
	        this.table[row][variable.tableIndex].n = n;
	    };
	    /** Constructs the parser table using LR1 construction algorithm */
	    ParserTable.prototype.constructUsingLR1 = function () {
	        //used in marking the indices of all the states
	        var stateCount = 0;
	        //these two stack help in tracking which all states have got their transitions found
	        var processedStates = [];
	        var unprocessedStates = [];
	        //create the first state by finding the closure of the first rule
	        var firstItem = new LR1Item(this.cfg.relation[0], 0);
	        firstItem.lookaheads.push(this.cfg.eof);
	        //closure is found internally inside the constructor
	        var firstState = new ParsingState(firstItem, this.cfg);
	        //find the outgoing transitions for all the unprocessed states 
	        unprocessedStates.push(firstState);
	        while (unprocessedStates.length != 0) {
	            //pop from unprocessed and push to processed before  adding new states
	            var state = unprocessedStates.pop();
	            processedStates.push(state);
	            state.stateNo = stateCount++;
	            //for each LR(1) item of this state, find outgoing states 
	            for (var _i = 0, _a = state.itemList; _i < _a.length; _i++) {
	                var item = _a[_i];
	                var outgoing = item.proceed(this.cfg);
	                if (outgoing != null) {
	                    //add this transition to the current state's transition list
	                    outgoing.from = state;
	                    state.transitions.push(outgoing); //note that this is a transition and not a state
	                    //check if this state already exists
	                    var existing = this.findMatchingState(outgoing.to, processedStates);
	                    if (existing != null) {
	                        //use existing state if they exist, 
	                        outgoing.to = existing;
	                    }
	                    else {
	                        //otherwise add the new state to unprocessed list
	                        unprocessedStates.push(outgoing.to);
	                    }
	                }
	            }
	        }
	        this.fillTableUsing(processedStates);
	        //output
	        util.printList(processedStates); //only states
	        this.printStateDiagram(processedStates);
	        this.printParsingTable();
	    };
	    /** Uses the LR(1) state diagram to fill entries in the parsing table */
	    ParserTable.prototype.fillTableUsing = function (stateDiagram) {
	        //initialize the 2d table
	        for (var i = 0; i < stateDiagram.length; i++) {
	            this.makeNewRow();
	        }
	        //for each state
	        for (var _i = 0, stateDiagram_1 = stateDiagram; _i < stateDiagram_1.length; _i++) {
	            var state = stateDiagram_1[_i];
	            if (state.isFinalState()) {
	                //get the only first entry from the state
	                var item = state.itemList[0];
	                if (item.rule.ruleIndex == 0) {
	                    this.setAction(state.stateNo, this.cfg.eof, ParserTableValueType.Accept, -1);
	                }
	                else {
	                    // set the reduce entries only under the lookahead symbols
	                    for (var _a = 0, _b = item.lookaheads; _a < _b.length; _a++) {
	                        var lookahead = _b[_a];
	                        this.setAction(state.stateNo, lookahead, ParserTableValueType.Reduce, item.rule.ruleIndex);
	                    }
	                }
	            }
	            else {
	                //check all its transitions 
	                for (var _c = 0, _d = state.transitions; _c < _d.length; _c++) {
	                    var transition = _d[_c];
	                    //if the outgoing symbol is a non terminal
	                    if (transition.syntaxElement.getType() == syntax_parser_1.SyntaxElementType.NonTerminal) {
	                        this.setGoto(state.stateNo, transition.syntaxElement, transition.to.stateNo);
	                    }
	                    else {
	                        this.setAction(state.stateNo, transition.syntaxElement, ParserTableValueType.Shift, transition.to.stateNo);
	                    }
	                }
	            }
	        }
	    };
	    /** Prints the entire state diagram with the transitions */
	    ParserTable.prototype.printStateDiagram = function (stateList) {
	        console.log("LR(1) State Diagram. Total States: " + stateList.length);
	        //go to each state
	        for (var _i = 0, stateList_1 = stateList; _i < stateList_1.length; _i++) {
	            var state = stateList_1[_i];
	            //print transition between states for this state
	            for (var _a = 0, _b = state.transitions; _a < _b.length; _a++) {
	                var transition = _b[_a];
	                console.log(state.stateNo + " " +
	                    transition.syntaxElement.toString() +
	                    " > " +
	                    transition.to.stateNo);
	            }
	        }
	    };
	    /** Prints the entire table held by this object */
	    ParserTable.prototype.printParsingTable = function () {
	        console.log("Parsing table");
	        var headerString = "	";
	        for (var i = 0; i < this.cfg.terminalList.length; i++) {
	            headerString += this.cfg.terminalList[i].toString() + "		";
	        }
	        // headerString+=this.cfg.eof.toString()+"  ";
	        for (var j = 0; j < this.cfg.variableList.length; j++) {
	            headerString += this.cfg.variableList[j].toString() + "		";
	        }
	        console.log(headerString);
	        for (i = 0; i < this.table.length; i++) {
	            var rowString = i + "	";
	            for (var _i = 0, _a = this.table[i]; _i < _a.length; _i++) {
	                var cell = _a[_i];
	                rowString += cell.toString() + "|		";
	            }
	            console.log(rowString);
	        }
	    };
	    /** Finds the matching state from a list of states, if exists */
	    ParserTable.prototype.findMatchingState = function (parsingState, list) {
	        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
	            var stateInList = list_1[_i];
	            if (parsingState != stateInList && parsingState.equals(stateInList)) {
	                return stateInList;
	            }
	        }
	        return null;
	    };
	    return ParserTable;
	}());
	exports.ParserTable = ParserTable;
	/** An LR(1) item is a combination of rule, position of cursor(dot) and lookahead symbols */
	var LR1Item = (function () {
	    function LR1Item(rule, dot) {
	        this.lookaheads = [];
	        this.rule = rule;
	        this.dot = dot;
	    }
	    /** Checks if the two items are same by comparing their attributes */
	    LR1Item.prototype.equals = function (other) {
	        var lookaheadsMatch = true;
	        if (this.lookaheads.length == other.lookaheads.length) {
	            //matches lookaheads in both items 
	            for (var _i = 0, _a = this.lookaheads; _i < _a.length; _i++) {
	                var lookahead = _a[_i];
	                //using two loops ensure order of lookaheads in each doesn't matter
	                //if both lookahead lists are in same order, this will take O(n) time anyway
	                var found = false;
	                for (var _b = 0, _c = other.lookaheads; _b < _c.length; _b++) {
	                    var otherLookahead = _c[_b];
	                    if (lookahead == otherLookahead) {
	                        found = true;
	                        break;
	                    }
	                }
	                if (!found) {
	                    lookaheadsMatch = false;
	                    break;
	                }
	            }
	        }
	        else {
	            lookaheadsMatch = false;
	        }
	        return this.rule == other.rule && this.dot == other.dot && lookaheadsMatch;
	    };
	    /**
	     * Proceeds the cursor(dot) one step to produce a parsing transition
	     * to a new state . The transition returned has an empty 'from' state.
	     */
	    LR1Item.prototype.proceed = function (cfg) {
	        if (this.dot < this.rule.rhs.length) {
	            return new ParsingTransition(this, cfg);
	        }
	        return null;
	    };
	    /**
	     * Gives the element after dot.Optionally, you can also skip elements(default is 0).
	     * Gives null if dot(plus skip) is beyond the length of RHS
	     */
	    LR1Item.prototype.elementAfterDot = function (skip) {
	        if (skip === void 0) { skip = 0; }
	        if (this.dot + skip < this.rule.rhs.length) {
	            return this.rule.rhs[this.dot + skip];
	        }
	        return null;
	    };
	    /** Returns true if dot exists before a variable or terminal, false otherwise */
	    LR1Item.prototype.dotBeforeSyntaxElement = function () {
	        return this.dot < this.rule.rhs.length; //TODO what about epsilon
	    };
	    LR1Item.prototype.toString = function () {
	        var rhsProgress = "";
	        for (var i = 0; i < this.dot; i++) {
	            rhsProgress += this.rule.rhs[i].toString(); //+" ";
	        }
	        rhsProgress += ".";
	        while (i < this.rule.rhs.length) {
	            rhsProgress += this.rule.rhs[i].toString(); //+" ";
	            i++;
	        }
	        return this.rule.lhs.toString() + "->" + rhsProgress + "," + util.csv(this.lookaheads, " ");
	    };
	    return LR1Item;
	}());
	/** A collection of LR(1) item set along with transitions to other states */
	var ParsingState = (function () {
	    function ParsingState(firstItem, cfg) {
	        this.itemList = [];
	        this.transitions = [];
	        this.itemList.push(firstItem);
	        this.closure(firstItem, cfg); //only first item is not derived
	    }
	    /** A final state is one which has a single item where the dot is at the end */
	    ParsingState.prototype.isFinalState = function () {
	        return this.itemList.length == 1 && !this.itemList[0].dotBeforeSyntaxElement();
	    };
	    /** Checks if the two states are same by comparing only their LR(1) item set */
	    ParsingState.prototype.equals = function (other) {
	        var itemsMatch = true;
	        if (this.itemList.length == other.itemList.length) {
	            //matches LR(1) items in both states
	            for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
	                var item = _a[_i];
	                //using two loops ensure order of LR(1) items in each doesn't matter
	                //if both item lists are in same order, this will take O(n) time anyway
	                var found = false;
	                for (var _b = 0, _c = other.itemList; _b < _c.length; _b++) {
	                    var otherItem = _c[_b];
	                    if (item.equals(otherItem)) {
	                        found = true;
	                        break;
	                    }
	                }
	                if (!found) {
	                    itemsMatch = false;
	                    break;
	                }
	            }
	        }
	        else {
	            itemsMatch = false;
	        }
	        return itemsMatch;
	    };
	    /** Recursively finds and adds all LR(1) items by looking at the position of the dot */
	    ParsingState.prototype.closure = function (item, cfg) {
	        if (item.dotBeforeSyntaxElement()) {
	            //check the item after the dot
	            var afterDot = item.elementAfterDot();
	            if (afterDot.getType() == syntax_parser_1.SyntaxElementType.NonTerminal) {
	                //find all rules for this non terminal
	                var variableRules = cfg.rulesFor(afterDot);
	                //for each variable rule, 
	                for (var _i = 0, variableRules_1 = variableRules; _i < variableRules_1.length; _i++) {
	                    var variableRule = variableRules_1[_i];
	                    //make an LR(1) item with dot placed at the beginning,
	                    var derived = new LR1Item(variableRule, 0);
	                    //find the lookaheads for the derived item
	                    var derivedsLookaheads;
	                    var followingAfterDot = item.elementAfterDot(1); //it is item's follow after dot
	                    if (followingAfterDot != null) {
	                        if (followingAfterDot.getType() == syntax_parser_1.SyntaxElementType.NonTerminal) {
	                            //find first and store in a list
	                            var firstTerminals = [];
	                            cfg.first(followingAfterDot, firstTerminals, false); //we intentionally don't find first recursively
	                            //if the first list is empty, 
	                            if (firstTerminals.length == 0) {
	                                //use the first from existing item
	                                derivedsLookaheads = item.lookaheads;
	                            }
	                            else {
	                                //remove eof from first terminal if exist
	                                var eofIndex = firstTerminals.indexOf(cfg.eof);
	                                if (eofIndex != -1) {
	                                    firstTerminals.splice(eofIndex, 1);
	                                }
	                                derivedsLookaheads = firstTerminals;
	                            }
	                        }
	                        else if (followingAfterDot.getType() == syntax_parser_1.SyntaxElementType.Terminal) {
	                            //only add that terminal in the deriveds lookahead
	                            derivedsLookaheads = [];
	                            derivedsLookaheads.push(followingAfterDot);
	                        }
	                    }
	                    else {
	                        derivedsLookaheads = item.lookaheads; //TODO same object may cause problems later if changes are made
	                    }
	                    //set the lookaheads for the derived items 
	                    derived.lookaheads = derivedsLookaheads;
	                    //add this item to the set
	                    this.itemList.push(derived);
	                    //and find its closure recursively
	                    this.closure(derived, cfg);
	                }
	            }
	        }
	    };
	    ParsingState.prototype.toString = function () {
	        var itemSets = "";
	        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
	            var item = _a[_i];
	            itemSets += item.toString();
	            itemSets += ", ";
	        }
	        return this.stateNo + ":" + itemSets;
	    };
	    return ParsingState;
	}());
	/** Denotes transition from one parsing state to another for a given syntax element */
	var ParsingTransition = (function () {
	    function ParsingTransition(item, cfg) {
	        if (item.dotBeforeSyntaxElement()) {
	            //set the syntax element as the current position of the dot
	            this.syntaxElement = item.elementAfterDot();
	            //create a new LR(1) item which is a proceeded version of given item
	            var proceededItem = new LR1Item(item.rule, item.dot + 1);
	            //while transitioning, the lookaheads dont change
	            for (var _i = 0, _a = item.lookaheads; _i < _a.length; _i++) {
	                var lookahead = _a[_i];
	                proceededItem.lookaheads.push(lookahead);
	            }
	            //create a new outgoing state for the proceeded item
	            this.to = new ParsingState(proceededItem, cfg);
	        }
	    }
	    ParsingTransition.prototype.toString = function () {
	        return this.from.stateNo + ":" + this.syntaxElement.toString() + ":" + this.to.toString();
	    };
	    return ParsingTransition;
	}());


/***/ },

/***/ 95:
/***/ function(module, exports) {

	module.exports = "#massive-area {\n  position: absolute; }\n\n#starter-tip {\n  position: absolute;\n  color: gray; }\n"

/***/ },

/***/ 96:
/***/ function(module, exports) {

	module.exports = "<div id=\"massive-area\"\n [style.width]=\"massiveArea.width+'px'\" \n [style.height]=\"massiveArea.height+'px'\" \n [style.left]=\"massiveArea.x+'px'\" \n [style.top]=\"massiveArea.y+'px'\"\n (mousedown)=\"mousedown($event)\"\n (mousemove)=\"mousemove($event)\"\n (mouseup)=\"mouseup($event)\"\n (dblclick)=\"doubleClickedArtboard($event)\"\n >\n\n\t<h1 id=\"starter-tip\"\n\t[style.left.px]=\"massiveArea.width/2\"\n\t[style.top.px]=\"massiveArea.height/2\"\n\t>Double click anywhere to create a box</h1>\n\n\t<creation-drawer [workspace]=\"workspace\" [position]=\"creationDrawerLocation\"></creation-drawer>\n\t<selection-box [workspace]=\"workspace\"></selection-box>\n\n\t<box *ngFor=\"let rect of rectList\" [rect]=\"rect\" (requestDragging)=\"setDragInteractionIfEmpty($event)\"></box>\n\n\t<ng-container *ngFor=\"let node of workspace.worksheet.diagramModel.nodeList\">\n\t\t<generic-node\n\t\t\t[genericNode]=\"node\"\n\t\t\t(requestDragging)=\"moveNodes($event)\"\n\t\t\t[soloSelected]=\"workspace.selectionContainsOnlyNode(node)\"\n\t\t\t></generic-node>\n\t</ng-container>\n\n\t<ng-container *ngFor=\"let edge of workspace.worksheet.diagramModel.edgeList\">\n\t\t<line-segment [start]=\"edge.fromPoint.pointOnGeometry()\" [end]=\"edge.toPoint.pointOnGeometry()\"></line-segment>\n\t</ng-container>\n\n</div>";

/***/ },

/***/ 97:
/***/ function(module, exports) {

	module.exports = "#menu-controls {\n  position: absolute;\n  padding: 0px;\n  top: 10px; }\n  #menu-controls li {\n    color: blue;\n    cursor: pointer;\n    display: inline;\n    list-style: none; }\n  #menu-controls li:hover {\n    color: darkblue; }\n\n#container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n"

/***/ },

/***/ 98:
/***/ function(module, exports) {

	module.exports = "<div id=\"container\" \n\t[focus]=\"true\"\n\t(window:keydown)=\"keydown($event)\"\n\t(window:keyup)=\"keyup($event)\"\n\t(window:resize)=\"resize($event)\"\n\t[style.cursor]=\"windowMovementAllowed?(dragEntered?'all-scroll':'all-scroll'):'auto'\"\n\t>\n\t<artboard \n\t\t(mousedownEvent)=\"mousedown($event)\"\n\t\t(mousemoveEvent)=\"mousemove($event)\"\n\t\t(mouseupEvent)=\"mouseup($event)\"\n\t\t[workspace]=\"workspace\"\n\t></artboard>\n\t<sidebar></sidebar>\n\t<ul id=\"menu-controls\" [@shiftMenuControls]=\"sidebar.open?'shifted':'unshifted'\">\n\t\t<li (click)=toggleSidebar()>Menu</li>\n\t\t<li>Area</li>\n\t\t<li>Overview</li>\n\t</ul>\n</div>\n";

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_service_1 = __webpack_require__(66);
	var router_1 = __webpack_require__(32);
	var AccountComponent = (function () {
	    function AccountComponent(userService, router) {
	        this.userService = userService;
	        this.router = router;
	    }
	    AccountComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.userService.accountInfo().subscribe(function (user) {
	            _this.user = user;
	        }, function (error) {
	            console.error("Retrieving account info"); //TODO show user friendly message
	        });
	    };
	    AccountComponent.prototype.saveAccountDetails = function () {
	        console.log("TODO Saving account Details");
	    };
	    AccountComponent = __decorate([
	        core_1.Component({
	            selector: 'account',
	            template: __webpack_require__(100),
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof user_service_1.UserService !== 'undefined' && user_service_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], AccountComponent);
	    return AccountComponent;
	    var _a, _b;
	}());
	exports.AccountComponent = AccountComponent;


/***/ },

/***/ 100:
/***/ function(module, exports) {

	module.exports = "<a style=\"background: blue;color: white\" (click)=\"router.navigate(['/dashboard'])\">Dashboard</a>\n\n<div>Account</div>\n\n<div *ngIf=\"user!=null\">\n\n\t<div>\n\t\t<span>firstName:</span>\n\t\t<input type=\"text\" [(ngModel)]=\"user.firstName\"/>\n\t</div>\n\n\t<div>\n\t\t<span>lastName:</span>\n\t\t<input type=\"text\" [(ngModel)]=\"user.lastName\"/>\n\t</div>\n\n\t<div>\n\t\t<span>email:</span>\n\t\t<input type=\"text\" [(ngModel)]=\"user.email\"/>\n\t</div>\n\n\t<div>\n\t\t<span>gender:</span>\n\t\t<input type=\"text\" [(ngModel)]=\"user.gender\"/>\n\t</div>\n</div>\n\n<!--TODO allow changing password-->\n\n<a (click)=\"saveAccountDetails()\">Save details</a>";

/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var user_account_1 = __webpack_require__(65);
	var user_service_1 = __webpack_require__(66);
	var shared_codes_1 = __webpack_require__(67);
	var router_1 = __webpack_require__(32);
	var LoginComponent = (function () {
	    function LoginComponent(userService, router) {
	        this.userService = userService;
	        this.router = router;
	        this.loginForm = new user_account_1.LoginCredential();
	    }
	    LoginComponent.prototype.attemptLogin = function () {
	        var _this = this;
	        console.log("Attemtping login for " + this.loginForm.toString());
	        this.userService.login(this.loginForm).subscribe(function (attempt) {
	            console.log("Response from server " + attempt);
	            if (attempt == shared_codes_1.LoginAttempt.Success) {
	                //send directly to dashboard 
	                _this.router.navigate(["/dashboard"]);
	            }
	            else {
	                //redirect back to homepage along with the type of error in query params
	                var navigationExtras = {
	                    queryParams: { 'attemptType': 'login', 'attemptCode': attempt },
	                };
	                _this.router.navigate([""], navigationExtras);
	            }
	        }, function (error) {
	            console.log("Error From Server: " + error.message);
	        });
	    };
	    LoginComponent = __decorate([
	        core_1.Component({
	            selector: 'login',
	            template: __webpack_require__(102),
	        }), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof user_service_1.UserService !== 'undefined' && user_service_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
	    ], LoginComponent);
	    return LoginComponent;
	    var _a, _b;
	}());
	exports.LoginComponent = LoginComponent;


/***/ },

/***/ 102:
/***/ function(module, exports) {

	module.exports = "<input type=\"text\" [(ngModel)]=\"loginForm.username\"/>\n<input type=\"password\" [(ngModel)]=\"loginForm.password\"/>\n<a href=\"#\" (click)=\"attemptLogin()\">Login</a>\n<div><a routerLink=\"/signup\">Sign Up</a></div>";

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var forms_1 = __webpack_require__(24);
	var dashboard_routing_module_1 = __webpack_require__(104);
	var dashboard_component_1 = __webpack_require__(69);
	var dashboard_service_1 = __webpack_require__(75);
	var DashboardModule = (function () {
	    function DashboardModule() {
	    }
	    DashboardModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                forms_1.FormsModule,
	                dashboard_routing_module_1.DashboardRoutingModule
	            ],
	            declarations: [
	                dashboard_component_1.DashboardComponent
	            ],
	            providers: [dashboard_service_1.DashboardService],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DashboardModule);
	    return DashboardModule;
	}());
	exports.DashboardModule = DashboardModule;


/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(32);
	var dashboard_component_1 = __webpack_require__(69);
	var DashboardRoutingModule = (function () {
	    function DashboardRoutingModule() {
	    }
	    DashboardRoutingModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                router_1.RouterModule.forChild([
	                    {
	                        path: 'dashboard',
	                        component: dashboard_component_1.DashboardComponent
	                    },
	                ])
	            ],
	            exports: [
	                router_1.RouterModule
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], DashboardRoutingModule);
	    return DashboardRoutingModule;
	}());
	exports.DashboardRoutingModule = DashboardRoutingModule;


/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var platform_browser_1 = __webpack_require__(21);
	var forms_1 = __webpack_require__(24);
	var workspace_component_1 = __webpack_require__(77);
	var artboard_component_1 = __webpack_require__(82);
	var sidebar_component_1 = __webpack_require__(79);
	var area_component_1 = __webpack_require__(106);
	var box_component_1 = __webpack_require__(108);
	var generic_node_component_1 = __webpack_require__(112);
	var line_segment_component_1 = __webpack_require__(114);
	var resize_handle_component_1 = __webpack_require__(109);
	var linker_component_1 = __webpack_require__(116);
	var input_box_component_1 = __webpack_require__(118);
	var auto_completion_component_1 = __webpack_require__(85);
	var class_diagram_component_1 = __webpack_require__(120);
	var class_object_diagram_component_1 = __webpack_require__(122);
	var interface_diagram_component_1 = __webpack_require__(124);
	var interface_object_diagram_component_1 = __webpack_require__(126);
	var linked_segments_component_1 = __webpack_require__(128);
	var creation_drawer_component_1 = __webpack_require__(88);
	var selection_box_component_1 = __webpack_require__(130);
	var transform_service_1 = __webpack_require__(78);
	var interpreter_service_1 = __webpack_require__(91);
	var mock_data_service_1 = __webpack_require__(83);
	var focus_directive_1 = __webpack_require__(132);
	var my_rect_directive_1 = __webpack_require__(133);
	var my_circle_directive_1 = __webpack_require__(134);
	var access_symbol_pipe_1 = __webpack_require__(135);
	var node_background_pipe_1 = __webpack_require__(136);
	var WorkspaceModule = (function () {
	    function WorkspaceModule() {
	    }
	    WorkspaceModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                forms_1.FormsModule,
	            ],
	            declarations: [
	                focus_directive_1.FocusDirective,
	                my_rect_directive_1.MyRectDirective,
	                my_circle_directive_1.MyCircleDirective,
	                access_symbol_pipe_1.AccessSymbol,
	                node_background_pipe_1.NodeBackground,
	                workspace_component_1.WorkspaceComponent,
	                sidebar_component_1.SidebarComponent,
	                artboard_component_1.ArtboardComponent,
	                area_component_1.AreaComponent,
	                box_component_1.BoxComponent,
	                generic_node_component_1.GenericNodeComponent,
	                line_segment_component_1.LineSegmentComponent,
	                resize_handle_component_1.ResizeHandleComponent,
	                input_box_component_1.InputBoxComponent,
	                auto_completion_component_1.AutoCompletionComponent,
	                class_diagram_component_1.ClassDiagramComponent,
	                class_object_diagram_component_1.ClassObjectComponent,
	                interface_diagram_component_1.InterfaceDiagramComponent,
	                interface_object_diagram_component_1.InterfaceObjectDiagramComponent,
	                linked_segments_component_1.LinkedSegmentsComponent,
	                linker_component_1.LinkerComponent,
	                creation_drawer_component_1.CreationDrawerComponent,
	                selection_box_component_1.SelectionBoxComponent
	            ],
	            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA],
	            providers: [transform_service_1.TransformService, interpreter_service_1.InterpreterService, mock_data_service_1.MockDataService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], WorkspaceModule);
	    return WorkspaceModule;
	}());
	exports.WorkspaceModule = WorkspaceModule;


/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var AreaComponent = (function () {
	    function AreaComponent() {
	    }
	    AreaComponent = __decorate([
	        core_1.Component({
	            selector: 'area-highlight',
	            template: __webpack_require__(107),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AreaComponent);
	    return AreaComponent;
	}());
	exports.AreaComponent = AreaComponent;


/***/ },

/***/ 107:
/***/ function(module, exports) {

	module.exports = "<h1>TODO area</h1>";

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var core_2 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var resize_handle_component_1 = __webpack_require__(109);
	var BoxComponent = (function () {
	    function BoxComponent() {
	        this.requestDragging = new core_1.EventEmitter();
	        this.isSelected = false;
	    }
	    BoxComponent.prototype.toggleSelection = function () {
	        this.isSelected = !this.isSelected;
	    };
	    BoxComponent.prototype.handleMousePress = function (event) {
	    };
	    BoxComponent.prototype.handleMouseDrag = function (event) {
	    };
	    BoxComponent.prototype.handleMouseRelease = function (event) {
	    };
	    BoxComponent.prototype.registerDragIntention = function (dragProcessor) {
	        this.requestDragging.emit(dragProcessor);
	    };
	    BoxComponent.prototype.updateAllResizeHandlers = function (resizeHandler) {
	        this.resizeHandlers.forEach(function (item) {
	            item.updateHandlePosition();
	        });
	    };
	    __decorate([
	        core_1.Input('rect'), 
	        __metadata('design:type', (typeof (_a = typeof geometry_1.Rect !== 'undefined' && geometry_1.Rect) === 'function' && _a) || Object)
	    ], BoxComponent.prototype, "rect", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], BoxComponent.prototype, "requestDragging", void 0);
	    __decorate([
	        core_1.ViewChildren(resize_handle_component_1.ResizeHandleComponent), 
	        __metadata('design:type', (typeof (_b = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _b) || Object)
	    ], BoxComponent.prototype, "resizeHandlers", void 0);
	    BoxComponent = __decorate([
	        core_1.Component({
	            selector: 'box',
	            template: __webpack_require__(111),
	            animations: [
	                core_2.trigger('selection', [
	                    core_2.state('selected', core_2.style({
	                        borderColor: "#2BA3FC"
	                    })),
	                    core_2.state('unselected', core_2.style({
	                        borderColor: "black"
	                    })),
	                    core_2.transition('selected => unselected', core_2.animate('100ms ease-in')),
	                    core_2.transition('unselected => selected', core_2.animate('100ms ease-out'))
	                ])
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], BoxComponent);
	    return BoxComponent;
	    var _a, _b;
	}());
	exports.BoxComponent = BoxComponent;


/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var common_1 = __webpack_require__(72);
	var tracking_point_1 = __webpack_require__(74);
	var ResizeHandleComponent = (function () {
	    function ResizeHandleComponent() {
	        this.requestDragging = new core_1.EventEmitter();
	        this.updateAllResizeHandlers = new core_1.EventEmitter();
	        //the following private fields are used exclusively to handle the drag event
	        this.startX = 0;
	        this.startY = 0;
	        this.lastX = 0;
	        this.lastY = 0;
	    }
	    ResizeHandleComponent.prototype.ngOnInit = function () {
	        this.initHandle();
	        this.updateHandlePosition();
	    };
	    ResizeHandleComponent.prototype.initHandle = function () {
	        //initialize tracking point based on this handles placement
	        this.rectTracking = new tracking_point_1.RectTrackingPoint(this.rect);
	        switch (this.placement) {
	            case common_1.Direction.Top:
	                this.rectTracking.fraction = 0.5;
	                this.rectTracking.side = common_1.Direction.Top;
	                this.cursor = "ns-resize";
	                break;
	            case common_1.Direction.TopLeft:
	                this.rectTracking.fraction = 0;
	                this.rectTracking.side = common_1.Direction.Top;
	                this.cursor = "nwse-resize";
	                break;
	            case common_1.Direction.TopRight:
	                this.rectTracking.fraction = 1;
	                this.rectTracking.side = common_1.Direction.Top;
	                this.cursor = "nesw-resize";
	                break;
	            case common_1.Direction.Bottom:
	                this.rectTracking.fraction = 0.5;
	                this.rectTracking.side = common_1.Direction.Bottom;
	                this.cursor = "ns-resize";
	                break;
	            case common_1.Direction.BottomLeft:
	                this.rectTracking.fraction = 1; //because fraction of rect with side goes clockwise
	                this.rectTracking.side = common_1.Direction.Bottom;
	                this.cursor = "nesw-resize";
	                break;
	            case common_1.Direction.BottomRight:
	                this.rectTracking.fraction = 0;
	                this.rectTracking.side = common_1.Direction.Bottom;
	                this.cursor = "nwse-resize";
	                break;
	            case common_1.Direction.Left:
	                this.rectTracking.fraction = 0.5;
	                this.rectTracking.side = common_1.Direction.Left;
	                this.cursor = "ew-resize";
	                break;
	            case common_1.Direction.Right:
	                this.rectTracking.fraction = 0.5;
	                this.rectTracking.side = common_1.Direction.Right;
	                this.cursor = "ew-resize";
	                break;
	        }
	        //initialize handle's rect by using the tracking point
	        var point = this.rectTracking.pointOnSide(this.rectTracking.side, this.rectTracking.fraction);
	        this.handle = new geometry_1.Rect(point.x - ResizeHandleComponent.HandleWidth / 2, point.y - ResizeHandleComponent.HandleWidth / 2, ResizeHandleComponent.HandleWidth, ResizeHandleComponent.HandleWidth);
	    };
	    ResizeHandleComponent.prototype.updateHandlePosition = function () {
	        var point = this.rectTracking.pointOnGeometry();
	        //shift in the x and y relative to handle's width
	        var xShift = -0.5;
	        var yShift = -0.5;
	        //TODO fix minor visual displacement due to border outsets
	        this.handle.x = point.x + xShift * ResizeHandleComponent.HandleWidth;
	        this.handle.y = point.y + yShift * ResizeHandleComponent.HandleWidth;
	    };
	    ResizeHandleComponent.prototype.handleMousePress = function (event) {
	        this.startX = event.clientX;
	        this.startY = event.clientY;
	        this.lastX = event.clientX;
	        this.lastY = event.clientY;
	    };
	    ResizeHandleComponent.prototype.handleMouseDrag = function (event) {
	        console.debug("resize handle dragged " + event.target.id);
	        var dx = event.clientX - this.lastX;
	        var dy = event.clientY - this.lastY;
	        if (event.buttons == 1) {
	            //change the transform of the rect basis this handle's placement
	            switch (this.placement) {
	                case common_1.Direction.TopLeft:
	                    this.rect.x += dx;
	                    this.rect.y += dy;
	                    this.rect.width -= dx;
	                    this.rect.height -= dy;
	                    break;
	                case common_1.Direction.Top:
	                    this.rect.y += dy;
	                    this.rect.height -= dy;
	                    break;
	                case common_1.Direction.TopRight:
	                    this.rect.y += dy;
	                    this.rect.width += dx;
	                    this.rect.height -= dy;
	                    break;
	                case common_1.Direction.Right:
	                    this.rect.width += dx;
	                    break;
	                case common_1.Direction.BottomRight:
	                    this.rect.width += dx;
	                    this.rect.height += dy;
	                    break;
	                case common_1.Direction.Bottom:
	                    this.rect.height += dy;
	                    break;
	                case common_1.Direction.BottomLeft:
	                    this.rect.x += dx;
	                    this.rect.width -= dx;
	                    this.rect.height += dy;
	                    break;
	                case common_1.Direction.Left:
	                    this.rect.x += dx;
	                    this.rect.width -= dx;
	                    break;
	            }
	            this.updateAllResizeHandlers.emit(this);
	        }
	        this.lastX = event.clientX;
	        this.lastY = event.clientY;
	    };
	    ResizeHandleComponent.prototype.handleMouseRelease = function (event) {
	        //TODO make command
	    };
	    ResizeHandleComponent.prototype.modelHasBeenChanged = function () {
	        console.log("Model has been changed");
	    };
	    ResizeHandleComponent.HandleWidth = 8;
	    __decorate([
	        core_1.Input('rect'), 
	        __metadata('design:type', (typeof (_a = typeof geometry_1.Rect !== 'undefined' && geometry_1.Rect) === 'function' && _a) || Object)
	    ], ResizeHandleComponent.prototype, "rect", void 0);
	    __decorate([
	        core_1.Input('placement'), 
	        __metadata('design:type', (typeof (_b = typeof common_1.Direction !== 'undefined' && common_1.Direction) === 'function' && _b) || Object)
	    ], ResizeHandleComponent.prototype, "placement", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ResizeHandleComponent.prototype, "requestDragging", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ResizeHandleComponent.prototype, "updateAllResizeHandlers", void 0);
	    ResizeHandleComponent = __decorate([
	        core_1.Component({
	            selector: 'resize-handle',
	            template: __webpack_require__(110)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ResizeHandleComponent);
	    return ResizeHandleComponent;
	    var _a, _b;
	}());
	exports.ResizeHandleComponent = ResizeHandleComponent;


/***/ },

/***/ 110:
/***/ function(module, exports) {

	module.exports = "<div class=\"handle-pick\"\n\t[style.left.px]=\"handle.x\"\n\t[style.top.px]=\"handle.y\"\n\t[style.width.px]=\"handle.width\"\n\t[style.height.px]=\"handle.height\"\n\t[style.cursor]=\"cursor\"\n\t(mousedown)=\"requestDragging.emit(this)\"\n\t></div>";

/***/ },

/***/ 111:
/***/ function(module, exports) {

	module.exports = "<div class=\"generic-block\"\n[style.left.px]=\"rect.x\"\n[style.top.px]=\"rect.y\"\n[style.width.px]=\"rect.width\"\n[style.height.px]=\"rect.height\"\n[@selection]=\"isSelected?'selected':'unselected'\" \n(click)=\"toggleSelection()\" \n(mousepress)=\"registerDragIntention(this)\"></div>\n\n<!-- Linker associated with this box-->\n<linker [geometry]=\"rect\"></linker>\n\n<!-- 8 Reize handlers with different placement can be placed outside (absolute positioned)-->\n<!-- TODO possible through loop but angular 2 doesn't provide general counter loops-->\n<resize-handle [rect]=\"rect\" [placement]=\"1\" \n*ngIf=\"isSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"rect\" [placement]=\"2\"  \n*ngIf=\"isSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"rect\" [placement]=\"3\"  \n*ngIf=\"isSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"rect\" [placement]=\"4\"  \n*ngIf=\"isSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"rect\" [placement]=\"5\"  \n*ngIf=\"isSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"rect\" [placement]=\"6\"  \n*ngIf=\"isSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"rect\" [placement]=\"7\" \n*ngIf=\"isSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"rect\" [placement]=\"8\"  \n*ngIf=\"isSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n";

/***/ },

/***/ 112:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var core_2 = __webpack_require__(3);
	var resize_handle_component_1 = __webpack_require__(109);
	var worksheet_1 = __webpack_require__(70);
	//TODO move outside to a special 'variables' file 
	var SELECTION_COLOR = '#2BA3FC';
	var GenericNodeComponent = (function () {
	    function GenericNodeComponent() {
	        this.requestDragging = new core_1.EventEmitter();
	    }
	    GenericNodeComponent.prototype.registerDragIntention = function () {
	        console.debug("Registering for drag");
	        this.requestDragging.emit(this.node);
	    };
	    GenericNodeComponent.prototype.updateAllResizeHandlers = function (resizeHandler) {
	        this.resizeHandlers.forEach(function (item) {
	            item.updateHandlePosition();
	        });
	    };
	    GenericNodeComponent.prototype.editContent = function (event) {
	        console.debug("Double clicked to edit content");
	    };
	    GenericNodeComponent.prototype.strokeColor = function () {
	        return this.node.selected ? SELECTION_COLOR : this.node.stroke.hashCode();
	    };
	    __decorate([
	        core_1.Input("soloSelected"), 
	        __metadata('design:type', Boolean)
	    ], GenericNodeComponent.prototype, "soloSelected", void 0);
	    __decorate([
	        core_1.Input('genericNode'), 
	        __metadata('design:type', (typeof (_a = typeof worksheet_1.GenericDiagramNode !== 'undefined' && worksheet_1.GenericDiagramNode) === 'function' && _a) || Object)
	    ], GenericNodeComponent.prototype, "node", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], GenericNodeComponent.prototype, "requestDragging", void 0);
	    __decorate([
	        core_1.ViewChildren(resize_handle_component_1.ResizeHandleComponent), 
	        __metadata('design:type', (typeof (_b = typeof core_1.QueryList !== 'undefined' && core_1.QueryList) === 'function' && _b) || Object)
	    ], GenericNodeComponent.prototype, "resizeHandlers", void 0);
	    GenericNodeComponent = __decorate([
	        core_1.Component({
	            selector: 'generic-node',
	            template: __webpack_require__(113),
	            animations: [
	                core_2.trigger('selection', [
	                    core_2.state('selected', core_2.style({
	                        borderColor: "#2BA3FC"
	                    })),
	                    core_2.state('unselected', core_2.style({
	                        borderColor: "black"
	                    })),
	                    core_2.transition('selected => unselected', core_2.animate('100ms ease-in')),
	                    core_2.transition('unselected => selected', core_2.animate('100ms ease-out'))
	                ])
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], GenericNodeComponent);
	    return GenericNodeComponent;
	    var _a, _b;
	}());
	exports.GenericNodeComponent = GenericNodeComponent;


/***/ },

/***/ 113:
/***/ function(module, exports) {

	module.exports = "<div class=\"generic-block\"\n[style.left.px]=\"node.rect.x\"\n[style.top.px]=\"node.rect.y\"\n[style.width.px]=\"node.rect.width\"\n[style.height.px]=\"node.rect.height\"\n[@selection]=\"node.selected?'selected':'unselected'\" \n(mousedown)=\"registerDragIntention()\"\n(dblclick)=\"editContent($event)\">\n\t<!-- Background based on type of generic shape (Refer GenericDiagramNodeType in worksheet.ts)-->\n\t<svg width=\"100%\" height=\"100%\" class=\"node-background\" >\n\t\t<!--Rectangle(1)-->\n\t\t<rect *ngIf=\"node.type==1\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" [style.fill]=\"node.background.hashCode()\" [style.stroke]=\"strokeColor()\" [style.stroke-width]=\"3\"/>\n\t\t<!--Circle(2) or Ellipse(4)-->\n\t\t<ellipse *ngIf=\"node.type==2||node.type==4\" cx=\"50%\" cy=\"50%\" rx=\"50%\" ry=\"50%\" [style.fill]=\"node.background.hashCode()\" [style.stroke]=\"strokeColor()\" [style.stroke-width]=\"3\"/>\n\t\t<!--Rounded Rectangle(5)-->\n\t\t<rect *ngIf=\"node.type==5\" width=\"100%\" height=\"100%\" rx=\"20px\" ry=\"20px\" [style.fill]=\"node.background.hashCode()\" [style.stroke]=\"strokeColor()\" [style.stroke-width]=\"3\"/>\n\t\t<!--Parallelogram(8)-->\n\t\t<!--TODO buggy:gets clipped by bounds, needs trignometry fix-->\n\t\t<rect *ngIf=\"node.type==8\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\" transform=\"skewX(-20)\" [style.fill]=\"node.background.hashCode()\" [style.stroke]=\"strokeColor()\" [style.stroke-width]=\"3\"/>\n\t</svg>\n\t<div class=\"node-content\" [style.color]=\"node.foreground.hashCode()\" >{{node.content}}</div>\n</div>\n\n<!-- Linker associated with this box-->\n<linker [geometry]=\"node.rect\"></linker>\n\n<!-- 8 Reize handlers with different placement can be placed outside (absolute positioned)-->\n<!-- TODO possible through loop but angular 2 doesn't provide general counter loops-->\n<resize-handle [rect]=\"node.rect\" [placement]=\"1\" \n*ngIf=\"soloSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"node.rect\" [placement]=\"2\"  \n*ngIf=\"soloSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"node.rect\" [placement]=\"3\"  \n*ngIf=\"soloSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"node.rect\" [placement]=\"4\"  \n*ngIf=\"soloSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"node.rect\" [placement]=\"5\"  \n*ngIf=\"soloSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"node.rect\" [placement]=\"6\"  \n*ngIf=\"soloSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"node.rect\" [placement]=\"7\" \n*ngIf=\"soloSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n\n<resize-handle [rect]=\"node.rect\" [placement]=\"8\"  \n*ngIf=\"soloSelected\" \n(requestDragging)=\"registerDragIntention($event)\" \n(updateAllResizeHandlers)=\"updateAllResizeHandlers($event)\">\n</resize-handle>\n";

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var LineSegmentComponent = (function () {
	    function LineSegmentComponent() {
	    }
	    LineSegmentComponent.prototype.transformationMatrix = function () {
	        var xMid = this.start.distance(this.end) / 2;
	        var yMid = 1; //TODO purely hardcoded based on the value in the stylesheet for line-segment class
	        var degree = this.start.angleOfSegment(this.end);
	        var radians = Math.PI * degree / 180;
	        return "matrix(" +
	            Math.cos(radians) + "," + Math.sin(radians) + "," +
	            -Math.sin(radians) + "," + Math.cos(radians) + "," +
	            -xMid + "," + -yMid
	            + ")";
	    };
	    __decorate([
	        core_1.Input('start'), 
	        __metadata('design:type', (typeof (_a = typeof geometry_1.Point !== 'undefined' && geometry_1.Point) === 'function' && _a) || Object)
	    ], LineSegmentComponent.prototype, "start", void 0);
	    __decorate([
	        core_1.Input('end'), 
	        __metadata('design:type', (typeof (_b = typeof geometry_1.Point !== 'undefined' && geometry_1.Point) === 'function' && _b) || Object)
	    ], LineSegmentComponent.prototype, "end", void 0);
	    LineSegmentComponent = __decorate([
	        core_1.Component({
	            selector: 'line-segment',
	            template: __webpack_require__(115),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LineSegmentComponent);
	    return LineSegmentComponent;
	    var _a, _b;
	}());
	exports.LineSegmentComponent = LineSegmentComponent;


/***/ },

/***/ 115:
/***/ function(module, exports) {

	module.exports = "<div \n\tclass=\"line-segment\" \n\t[style.left.px]=\"(start.x+end.x)/2\" \n\t[style.top.px]=\"(start.y+end.y)/2\"\n\t[style.width.px]=\"start.distance(end)\"\n\t[style.-webkit-transform]=\"transformationMatrix()\"\n\t[style.-ms-transform]=\"transformationMatrix()\"\n\t[style.transform]=\"transformationMatrix()\">\n\t<div class=\"line-segment-text\" >\n\t\t<span contenteditable=\"true\">Editable</span>\n\t</div>\n</div>";

/***/ },

/***/ 116:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var LinkerComponent = (function () {
	    function LinkerComponent() {
	    }
	    LinkerComponent.prototype.ngOnInit = function () {
	        this.trackingPoint = this.geometry.getTrackingPoint();
	        var point = this.trackingPoint.pointOnGeometry();
	        this.link = new geometry_1.Circle(point, 7);
	    };
	    LinkerComponent.prototype.ngOnDestroy = function () {
	        //TODO make diagrammatic element an abstract class and then handle this
	    };
	    __decorate([
	        core_1.Input('geometry'), 
	        __metadata('design:type', (typeof (_a = typeof geometry_1.Geometry !== 'undefined' && geometry_1.Geometry) === 'function' && _a) || Object)
	    ], LinkerComponent.prototype, "geometry", void 0);
	    LinkerComponent = __decorate([
	        core_1.Component({
	            selector: 'linker',
	            template: __webpack_require__(117),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LinkerComponent);
	    return LinkerComponent;
	    var _a;
	}());
	exports.LinkerComponent = LinkerComponent;


/***/ },

/***/ 117:
/***/ function(module, exports) {

	module.exports = "<div class=\"link-circle\" \n\t[style.left.px]=\"link.center.x\"\n\t[style.top.px]=\"link.center.y\"\n\t[style.width.px]=\"link.radius*2\"\n\t[style.height.px]=\"link.radius*2\">\n\n</div>";

/***/ },

/***/ 118:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var InputBoxComponent = (function () {
	    function InputBoxComponent() {
	    }
	    InputBoxComponent = __decorate([
	        core_1.Component({
	            selector: 'input-box',
	            template: __webpack_require__(119),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], InputBoxComponent);
	    return InputBoxComponent;
	}());
	exports.InputBoxComponent = InputBoxComponent;


/***/ },

/***/ 119:
/***/ function(module, exports) {

	module.exports = "TODO";

/***/ },

/***/ 120:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var worksheet_1 = __webpack_require__(70);
	var ClassDiagramComponent = (function () {
	    function ClassDiagramComponent() {
	        this.requestDragging = new core_1.EventEmitter();
	    }
	    ClassDiagramComponent.prototype.toggleSelection = function () {
	        this.classDiagram.selected = !this.classDiagram.selected;
	    };
	    ClassDiagramComponent.prototype.registerDragIntention = function (dragProcessor) {
	        this.requestDragging.emit(dragProcessor);
	    };
	    __decorate([
	        core_1.Input('classDiagram'), 
	        __metadata('design:type', (typeof (_a = typeof worksheet_1.ClassDiagramNode !== 'undefined' && worksheet_1.ClassDiagramNode) === 'function' && _a) || Object)
	    ], ClassDiagramComponent.prototype, "classDiagram", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ClassDiagramComponent.prototype, "requestDragging", void 0);
	    ClassDiagramComponent = __decorate([
	        core_1.Component({
	            selector: 'class-diagram',
	            template: __webpack_require__(121),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ClassDiagramComponent);
	    return ClassDiagramComponent;
	    var _a;
	}());
	exports.ClassDiagramComponent = ClassDiagramComponent;


/***/ },

/***/ 121:
/***/ function(module, exports) {

	module.exports = "<div class=\"generic-block\"\n[style.left.px]=\"classDiagram.rect.x\"\n[style.top.px]=\"classDiagram.rect.y\"\n[style.width.px]=\"classDiagram.rect.width\"\n[style.height.px]=\"classDiagram.rect.height\"\n[style.selected-block]=\"classDiagram.selected\" \n(click)=\"toggleSelection()\" \n(mousepress)=\"registerDragIntention(this)\">\n\n\t<div class=\"block-cell bottom-border-solid header-block-cell\">\n\t\t<span [class.italic]=\"classDiagram.classDefinition.isAbstract\">{{classDiagram.classDefinition.name}}</span>\n\t</div>\n\n\t<div \n\t*ngFor=\"let fieldMember of classDiagram.classDefinition.fieldList \" \n\tclass=\"block-cell content-block-cell\"\n\tcontenteditable=\"true\"\n\t>\n\t\t{{fieldMember.accessSpecifier | accessSymbol}} {{fieldMember.variableDefinition.name}} : {{fieldMember.variableDefinition.type.getName()}}\n\t</div>\n\t<div class=\"solid-horizontal-line mini-top-bottom-margin\"> </div>\n\t<div *ngFor=\"let methodMember of classDiagram.classDefinition.methodList; let i=index\" \n\t\tclass=\"block-cell content-block-cell\"\n\t\tcontenteditable=\"true\"\n\t\t>\n\n\t\t{{methodMember.accessSpecifier | accessSymbol}} \n\t\t<span [class.italic]=\"methodMember.isAbstract\">\n\t\t{{methodMember.methodPrototype.identifier}} \n\t\t(\n\t\t\t<span *ngFor=\"let argument of methodMember.methodPrototype.argumentList\">\n\t\t\t\t{{argument.name}} : {{argument.type.getName()}}\n\t\t\t</span>\n\t\t)\n\t\t: {{methodMember.methodPrototype.returnType.getName()}}\n\t\t</span>\n\t</div>\n</div>";

/***/ },

/***/ 122:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var worksheet_1 = __webpack_require__(70);
	var ClassObjectComponent = (function () {
	    function ClassObjectComponent() {
	        this.requestDragging = new core_1.EventEmitter();
	    }
	    ClassObjectComponent.prototype.toggleSelection = function () {
	        this.classObjectDiagram.selected = !this.classObjectDiagram.selected;
	    };
	    ClassObjectComponent.prototype.registerDragIntention = function (dragProcessor) {
	        this.requestDragging.emit(dragProcessor);
	    };
	    __decorate([
	        core_1.Input('classObjectDiagram'), 
	        __metadata('design:type', (typeof (_a = typeof worksheet_1.ClassObjectDiagram !== 'undefined' && worksheet_1.ClassObjectDiagram) === 'function' && _a) || Object)
	    ], ClassObjectComponent.prototype, "classObjectDiagram", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], ClassObjectComponent.prototype, "requestDragging", void 0);
	    ClassObjectComponent = __decorate([
	        core_1.Component({
	            selector: 'class-object-diagram',
	            template: __webpack_require__(123),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ClassObjectComponent);
	    return ClassObjectComponent;
	    var _a;
	}());
	exports.ClassObjectComponent = ClassObjectComponent;


/***/ },

/***/ 123:
/***/ function(module, exports) {

	module.exports = "<div class=\"generic-block\"\n[style.left.px]=\"classObjectDiagram.rect.x\"\n[style.top.px]=\"classObjectDiagram.rect.y\"\n[style.width.px]=\"classObjectDiagram.rect.width\"\n[style.height.px]=\"classObjectDiagram.rect.height\"\n[style.selected-block]=\"classObjectDiagram.selected\" \n(click)=\"toggleSelection()\" \n(mousepress)=\"registerDragIntention(this)\">\n\n\t<div class=\"block-cell bottom-border-solid header-block-cell\">\n\t\t<span>{{classObjectDiagram.classObject.name}}</span>\n\t\t : \n\t\t<span class=\"bold\">{{classObjectDiagram.classObject.classDefinition.getName()}}</span>\n\t</div>\n\n\t<div *ngFor=\"let fieldData of classObjectDiagram.classObject.fieldDataList\" \n\t\tclass=\"block-cell content-block-cell\">\n\t\t+ \n\t\t{{fieldData.variable.name}} \n\t\t=\n\t\t{{fieldData.data.stringRepresentation()}}\n\t</div>\n</div>";

/***/ },

/***/ 124:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var worksheet_1 = __webpack_require__(70);
	var InterfaceDiagramComponent = (function () {
	    function InterfaceDiagramComponent() {
	        this.requestDragging = new core_1.EventEmitter();
	    }
	    InterfaceDiagramComponent.prototype.toggleSelection = function () {
	        this.interfaceDiagram.selected = !this.interfaceDiagram.selected;
	    };
	    InterfaceDiagramComponent.prototype.registerDragIntention = function (dragProcessor) {
	        this.requestDragging.emit(dragProcessor);
	    };
	    __decorate([
	        core_1.Input('interfaceDiagram'), 
	        __metadata('design:type', (typeof (_a = typeof worksheet_1.InterfaceDiagramNode !== 'undefined' && worksheet_1.InterfaceDiagramNode) === 'function' && _a) || Object)
	    ], InterfaceDiagramComponent.prototype, "interfaceDiagram", void 0);
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', Object)
	    ], InterfaceDiagramComponent.prototype, "requestDragging", void 0);
	    InterfaceDiagramComponent = __decorate([
	        core_1.Component({
	            selector: 'interface-diagram',
	            template: __webpack_require__(125),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], InterfaceDiagramComponent);
	    return InterfaceDiagramComponent;
	    var _a;
	}());
	exports.InterfaceDiagramComponent = InterfaceDiagramComponent;


/***/ },

/***/ 125:
/***/ function(module, exports) {

	module.exports = "<div class=\"generic-block\"\n[style.left.px]=\"interfaceDiagram.rect.x\"\n[style.top.px]=\"interfaceDiagram.rect.y\"\n[style.width.px]=\"interfaceDiagram.rect.width\"\n[style.height.px]=\"interfaceDiagram.rect.height\"\n[style.selected-block]=\"interfaceDiagram.selected\" \n(click)=\"toggleSelection()\" \n(mousepress)=\"registerDragIntention(this)\">\n\n\t<div class=\"block-cell bottom-border-solid header-block-cell\">\n\t\t<div class=\"header-decorater\"> &lt;&lt; Interface &gt;&gt; </div>\n\t\t<span>{{interfaceDiagram.interfaceDefinition.name}}</span>\n\t</div>\n\n\t<div *ngFor=\"let method of interfaceDiagram.interfaceDefinition.methodList\" \n\t\tclass=\"block-cell content-block-cell\">\n\t\t+ \n\t\t{{method.identifier}} \n\t\t(\n\t\t\t<span *ngFor=\"let argument of method.argumentList\">\n\t\t\t\t{{argument.name}} : {{argument.type.getName()}}\n\t\t\t</span>\n\t\t)\n\t\t: {{method.returnType.getName()}}\n\t</div>\n</div>";

/***/ },

/***/ 126:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var InterfaceObjectDiagramComponent = (function () {
	    function InterfaceObjectDiagramComponent() {
	    }
	    InterfaceObjectDiagramComponent = __decorate([
	        core_1.Component({
	            selector: 'interface-object-diagram',
	            template: __webpack_require__(127),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], InterfaceObjectDiagramComponent);
	    return InterfaceObjectDiagramComponent;
	}());
	exports.InterfaceObjectDiagramComponent = InterfaceObjectDiagramComponent;


/***/ },

/***/ 127:
/***/ function(module, exports) {

	module.exports = "TODO";

/***/ },

/***/ 128:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var LinkedSegmentsComponent = (function () {
	    function LinkedSegmentsComponent() {
	    }
	    LinkedSegmentsComponent = __decorate([
	        core_1.Component({
	            selector: 'linked-segments',
	            template: __webpack_require__(129),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LinkedSegmentsComponent);
	    return LinkedSegmentsComponent;
	}());
	exports.LinkedSegmentsComponent = LinkedSegmentsComponent;


/***/ },

/***/ 129:
/***/ function(module, exports) {

	module.exports = "TODO";

/***/ },

/***/ 130:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var workspace_1 = __webpack_require__(89);
	var SelectionBoxComponent = (function () {
	    function SelectionBoxComponent() {
	        this.rect = new geometry_1.Rect(1500, 900, 200, 300);
	        //for controlling selection box positioning
	        this.active = false;
	    }
	    SelectionBoxComponent.prototype.mousePressed = function (event) {
	        this.workspace.clearSelection();
	        this.active = true;
	        this.rect.x = event.offsetX;
	        this.rect.y = event.offsetY;
	        this.rect.width = 0;
	        this.rect.height = 0;
	        this.difference = new geometry_1.Point(0, 0);
	        this.originalPress = new geometry_1.Point(this.rect.x, this.rect.y);
	    };
	    SelectionBoxComponent.prototype.mouseMoved = function (event) {
	        if (this.active) {
	            this.difference.x += event.movementX;
	            this.difference.y += event.movementY;
	            if (this.difference.x < 0) {
	                this.rect.x = this.originalPress.x + this.difference.x;
	                this.rect.width = this.difference.x * -1;
	            }
	            else {
	                this.rect.x = this.originalPress.x;
	                this.rect.width = this.difference.x;
	            }
	            if (this.difference.y < 0) {
	                this.rect.y = this.originalPress.y + this.difference.y;
	                this.rect.height = this.difference.y * -1;
	            }
	            else {
	                this.rect.y = this.originalPress.y;
	                this.rect.height = this.difference.y;
	            }
	            this.selectOverlappingNodes();
	        }
	    };
	    SelectionBoxComponent.prototype.mouseReleased = function (event) {
	        this.active = false;
	    };
	    SelectionBoxComponent.prototype.selectOverlappingNodes = function () {
	        //start afresh
	        this.workspace.clearSelection();
	        var count = 0;
	        //select all overlapping nodes
	        for (var _i = 0, _a = this.workspace.worksheet.diagramModel.nodeList; _i < _a.length; _i++) {
	            var node = _a[_i];
	            if (node.getGeometry().overlapsWithRect(this.rect)) {
	                this.workspace.addNodeToSelection(node);
	                count++;
	            }
	        }
	        return count;
	    };
	    __decorate([
	        core_1.Input('workspace'), 
	        __metadata('design:type', (typeof (_a = typeof workspace_1.Workspace !== 'undefined' && workspace_1.Workspace) === 'function' && _a) || Object)
	    ], SelectionBoxComponent.prototype, "workspace", void 0);
	    SelectionBoxComponent = __decorate([
	        core_1.Component({
	            selector: 'selection-box',
	            template: __webpack_require__(131),
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SelectionBoxComponent);
	    return SelectionBoxComponent;
	    var _a;
	}());
	exports.SelectionBoxComponent = SelectionBoxComponent;


/***/ },

/***/ 131:
/***/ function(module, exports) {

	module.exports = "<div \n\tid=\"selection-box\"\n\t[style.left.px]=\"rect.x\"\n\t[style.top.px]=\"rect.y\"\n\t[style.width.px]=\"rect.width\"\n\t[style.height.px]=\"rect.height\"\n\t[style.display]=\"active?'block':'none'\">\n\n</div>";

/***/ },

/***/ 132:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var FocusDirective = (function () {
	    function FocusDirective(element) {
	        this.element = element;
	    }
	    FocusDirective.prototype.ngOnChanges = function () {
	        this.element.nativeElement.focus();
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], FocusDirective.prototype, "focus", void 0);
	    FocusDirective = __decorate([
	        core_1.Directive({
	            selector: '[focus]'
	        }),
	        __param(0, core_1.Inject(core_1.ElementRef)), 
	        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
	    ], FocusDirective);
	    return FocusDirective;
	    var _a;
	}());
	exports.FocusDirective = FocusDirective;


/***/ },

/***/ 133:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var MyRectDirective = (function () {
	    function MyRectDirective(element) {
	        this.element = element;
	        this.background = "white";
	        this.strokeColor = 'black';
	        this.strokeWidth = 2;
	        this.strokeStyle = 'solid';
	        this.opacity = 1;
	    }
	    MyRectDirective.prototype.ngOnChanges = function () {
	        this.element.nativeElement.style.position = "absolute";
	        this.element.nativeElement.style.left = this.myRect.x + "px";
	        this.element.nativeElement.style.top = this.myRect.y + "px";
	        this.element.nativeElement.style.width = this.myRect.width + "px";
	        this.element.nativeElement.style.height = this.myRect.height + "px";
	        this.element.nativeElement.style.background = this.background;
	        this.element.nativeElement.style.borderColor = this.strokeColor;
	        this.element.nativeElement.style.borderWidth = this.strokeWidth + "px";
	        this.element.nativeElement.style.borderStyle = this.strokeStyle;
	        this.element.nativeElement.style.opacity = this.opacity;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof geometry_1.Rect !== 'undefined' && geometry_1.Rect) === 'function' && _a) || Object)
	    ], MyRectDirective.prototype, "myRect", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MyRectDirective.prototype, "background", void 0);
	    __decorate([
	        core_1.Input('borderColor'), 
	        __metadata('design:type', Object)
	    ], MyRectDirective.prototype, "strokeColor", void 0);
	    __decorate([
	        core_1.Input('borderWidth'), 
	        __metadata('design:type', Object)
	    ], MyRectDirective.prototype, "strokeWidth", void 0);
	    __decorate([
	        core_1.Input('borderStyle'), 
	        __metadata('design:type', Object)
	    ], MyRectDirective.prototype, "strokeStyle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MyRectDirective.prototype, "opacity", void 0);
	    MyRectDirective = __decorate([
	        core_1.Directive({
	            selector: '[myRect]'
	        }),
	        __param(0, core_1.Inject(core_1.ElementRef)), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
	    ], MyRectDirective);
	    return MyRectDirective;
	    var _a, _b;
	}());
	exports.MyRectDirective = MyRectDirective;


/***/ },

/***/ 134:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(3);
	var geometry_1 = __webpack_require__(71);
	var MyCircleDirective = (function () {
	    function MyCircleDirective(element) {
	        this.element = element;
	        this.background = "white";
	        this.strokeColor = 'black';
	        this.strokeWidth = 2;
	        this.strokeStyle = 'solid';
	        this.opacity = 1;
	    }
	    MyCircleDirective.prototype.ngOnChanges = function () {
	        this.element.nativeElement.style.borderRadius = "50%";
	        this.element.nativeElement.style.position = "absolute";
	        this.element.nativeElement.style.left = this.myCircle.center.x + "px";
	        this.element.nativeElement.style.top = this.myCircle.center.y + "px";
	        this.element.nativeElement.style.width = this.myCircle.radius * 2 + "px";
	        this.element.nativeElement.style.height = this.myCircle.radius * 2 + "px";
	        this.element.nativeElement.style.background = this.background;
	        this.element.nativeElement.style.borderColor = this.strokeColor;
	        this.element.nativeElement.style.borderWidth = this.strokeWidth + "px";
	        this.element.nativeElement.style.borderStyle = this.strokeStyle;
	        this.element.nativeElement.style.opacity = this.opacity;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', (typeof (_a = typeof geometry_1.Circle !== 'undefined' && geometry_1.Circle) === 'function' && _a) || Object)
	    ], MyCircleDirective.prototype, "myCircle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MyCircleDirective.prototype, "background", void 0);
	    __decorate([
	        core_1.Input('borderColor'), 
	        __metadata('design:type', Object)
	    ], MyCircleDirective.prototype, "strokeColor", void 0);
	    __decorate([
	        core_1.Input('borderWidth'), 
	        __metadata('design:type', Object)
	    ], MyCircleDirective.prototype, "strokeWidth", void 0);
	    __decorate([
	        core_1.Input('borderStyle'), 
	        __metadata('design:type', Object)
	    ], MyCircleDirective.prototype, "strokeStyle", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object)
	    ], MyCircleDirective.prototype, "opacity", void 0);
	    MyCircleDirective = __decorate([
	        core_1.Directive({
	            selector: '[myCircle]'
	        }),
	        __param(0, core_1.Inject(core_1.ElementRef)), 
	        __metadata('design:paramtypes', [(typeof (_b = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _b) || Object])
	    ], MyCircleDirective);
	    return MyCircleDirective;
	    var _a, _b;
	}());
	exports.MyCircleDirective = MyCircleDirective;


/***/ },

/***/ 135:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var semantic_model_1 = __webpack_require__(73);
	/*
	 * Gives the symbol for an access specifier
	 *
	 * Usage:
	 *   value | accessSymbol
	*/
	var AccessSymbol = (function () {
	    function AccessSymbol() {
	    }
	    AccessSymbol.prototype.transform = function (value) {
	        switch (value) {
	            case semantic_model_1.AccessSpecifier.Private:
	                return "-";
	            case semantic_model_1.AccessSpecifier.Protected:
	                return "#";
	            case semantic_model_1.AccessSpecifier.Public:
	                return "+";
	            case semantic_model_1.AccessSpecifier.Default:
	            default:
	                return " ";
	        }
	    };
	    AccessSymbol = __decorate([
	        core_1.Pipe({ name: 'accessSymbol' }), 
	        __metadata('design:paramtypes', [])
	    ], AccessSymbol);
	    return AccessSymbol;
	}());
	exports.AccessSymbol = AccessSymbol;


/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var worksheet_1 = __webpack_require__(70);
	/*
	 * Gives the background(mostly svg) for generic type node
	 * @Deprecated (Using inline svgs now)
	 * Usage:
	 *   value | nodeBg
	*/
	var NodeBackground = (function () {
	    function NodeBackground() {
	    }
	    NodeBackground.prototype.transform = function (value) {
	        var pathToBg = "";
	        switch (value) {
	            case worksheet_1.GenericDiagramNodeType.Rectangle:
	                break;
	            case worksheet_1.GenericDiagramNodeType.Circle:
	                break;
	            case worksheet_1.GenericDiagramNodeType.Diamond:
	                break;
	            case worksheet_1.GenericDiagramNodeType.Ellipse:
	                break;
	            case worksheet_1.GenericDiagramNodeType.StickFigure:
	                break;
	            case worksheet_1.GenericDiagramNodeType.Database:
	        }
	        return pathToBg;
	    };
	    NodeBackground = __decorate([
	        core_1.Pipe({ name: 'nodeBg' }), 
	        __metadata('design:paramtypes', [])
	    ], NodeBackground);
	    return NodeBackground;
	}());
	exports.NodeBackground = NodeBackground;


/***/ },

/***/ 137:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(140)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./workspace.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./workspace.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 138:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(139)();
	// imports
	
	
	// module
	exports.push([module.id, ".generic-block {\n  position: absolute;\n  overflow: scroll;\n  z-index: 1; }\n\n.drop-shadowed-pop-up {\n  position: absolute;\n  overflow: scroll;\n  z-index: 10;\n  background: #FFFFFF;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.5); }\n\n#selection-box {\n  border: 1px solid blue;\n  background: rgba(50, 122, 237, 0.3);\n  position: absolute;\n  z-index: 11; }\n\n.selected {\n  border-color: #2BA3FC;\n  color: #2BA3FC; }\n\n.node-background {\n  z-index: -1;\n  position: absolute;\n  top: 0px;\n  left: 0px; }\n\n.node-content {\n  text-align: center; }\n\n.selected-block {\n  border-color: #2BA3FC; }\n\n.block-cell {\n  padding: 4px;\n  margin: 0px; }\n\n.header-block-cell {\n  line-height: 34px;\n  text-align: center;\n  margin-bottom: 4px; }\n\n.header-decorater {\n  line-height: 15px;\n  margin-top: 3px; }\n\n.content-block-cell {\n  line-height: 20px;\n  padding-left: 8px; }\n\n.top-border-solid {\n  border-top: 2px solid black; }\n\n.bottom-border-solid {\n  border-bottom: 2px solid black; }\n\n.solid-horizontal-line {\n  width: 100%;\n  background: black;\n  height: 2px; }\n\n.mini-top-bottom-margin {\n  margin-top: 4px;\n  margin-bottom: 4px; }\n\n.bogus-container {\n  margin: 0px;\n  padding: 0px; }\n\n.italic {\n  font-style: italic; }\n\n.bold {\n  font-weight: bold; }\n\n.center-align {\n  text-align: center; }\n\n.handle-pick {\n  position: absolute;\n  border: none;\n  background: #2BA3FC; }\n\nh1 {\n  color: black;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%; }\n\n.center-anchored {\n  position: absolute;\n  transform-origin: center; }\n\n.line-segment {\n  text-align: center;\n  position: absolute;\n  height: 1px;\n  background: black;\n  z-index: -1; }\n\n#starter-tip {\n  color: grey;\n  position: absolute; }\n\n.link-circle {\n  position: absolute;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  background: #344353; }\n\n.debug {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background: red;\n  border: 1px solid black;\n  transform: translate(-50%, -50%); }\n", ""]);
	
	// exports


/***/ },

/***/ 139:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 140:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var command_1 = __webpack_require__(695);
	var geometry_1 = __webpack_require__(71);
	var MoveCommand = (function (_super) {
	    __extends(MoveCommand, _super);
	    function MoveCommand(workspace) {
	        _super.call(this);
	        this.difference = new geometry_1.Point(0, 0);
	        this.workspace = workspace;
	        this.target = this.workspace.copySelection();
	    }
	    MoveCommand.prototype.handleMousePress = function (event) {
	        console.debug("Move command presed");
	    };
	    MoveCommand.prototype.handleMouseDrag = function (event) {
	        console.debug("Move command dragged");
	        //record the cumalative difference
	        this.difference.x += event.movementX;
	        this.difference.y += event.movementY;
	        //move all nodes by marginal change in mouse position
	        for (var _i = 0, _a = this.target.nodeList; _i < _a.length; _i++) {
	            var node = _a[_i];
	            node.getGeometry().moveBy(new geometry_1.Point(event.movementX, event.movementY));
	        }
	    };
	    MoveCommand.prototype.handleMouseRelease = function (event) {
	        console.debug("Move command released");
	        if (!this.difference.isZero()) {
	            this.workspace.commit(this);
	        }
	    };
	    MoveCommand.prototype.execute = function () {
	        //move all nodes by marginal change in mouse position
	        for (var _i = 0, _a = this.target.nodeList; _i < _a.length; _i++) {
	            var node = _a[_i];
	            node.getGeometry().moveBy(this.difference);
	        }
	    };
	    MoveCommand.prototype.unExecute = function () {
	        //move all nodes by marginal change in mouse position
	        for (var _i = 0, _a = this.target.nodeList; _i < _a.length; _i++) {
	            var node = _a[_i];
	            node.getGeometry().moveBy(this.difference.inverse());
	        }
	    };
	    MoveCommand.prototype.getName = function () {
	        return "Move Items";
	    };
	    return MoveCommand;
	}(command_1.Command));
	exports.MoveCommand = MoveCommand;


/***/ },

/***/ 695:
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/** Any actionable change in the editor that results in a change to the model is handled by a command.*/
	var Command = (function () {
	    function Command() {
	    }
	    return Command;
	}());
	exports.Command = Command;
	/** Holds several commands that will run in one go. */
	var CompositeCommand = (function (_super) {
	    __extends(CompositeCommand, _super);
	    function CompositeCommand() {
	        _super.apply(this, arguments);
	        this.commandList = [];
	    }
	    CompositeCommand.prototype.execute = function () {
	        for (var _i = 0, _a = this.commandList; _i < _a.length; _i++) {
	            var command = _a[_i];
	            command.execute();
	        }
	    };
	    CompositeCommand.prototype.unExecute = function () {
	        for (var _i = 0, _a = this.commandList; _i < _a.length; _i++) {
	            var command = _a[_i];
	            command.unExecute();
	        }
	    };
	    /** Subclasses should override to return a more descriptive user friendly name*/
	    CompositeCommand.prototype.getName = function () {
	        return "Composite Command";
	    };
	    return CompositeCommand;
	}(Command));
	exports.CompositeCommand = CompositeCommand;


/***/ }

});
//# sourceMappingURL=app.js.map