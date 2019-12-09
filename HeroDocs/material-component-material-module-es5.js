(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["material-component-material-module"],{

/***/ "./node_modules/@angular/http/fesm5/http.js":
/*!**************************************************!*\
  !*** ./node_modules/@angular/http/fesm5/http.js ***!
  \**************************************************/
/*! exports provided: ɵangular_packages_http_http_e, ɵangular_packages_http_http_f, ɵangular_packages_http_http_a, ɵangular_packages_http_http_b, ɵangular_packages_http_http_c, BrowserXhr, JSONPBackend, JSONPConnection, CookieXSRFStrategy, XHRBackend, XHRConnection, BaseRequestOptions, RequestOptions, BaseResponseOptions, ResponseOptions, ReadyState, RequestMethod, ResponseContentType, ResponseType, Headers, Http, Jsonp, HttpModule, JsonpModule, Connection, ConnectionBackend, XSRFStrategy, Request, Response, QueryEncoder, URLSearchParams, VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_e", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_f", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_a", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_b", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_http_http_c", function() { return jsonpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/@angular/http/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license Angular v7.2.15
 * (c) 2010-2019 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BrowserXhr = /** @class */ (function () {
    function BrowserXhr() {
    }
    BrowserXhr.prototype.build = function () { return (new XMLHttpRequest()); };
    BrowserXhr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BrowserXhr);
    return BrowserXhr;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Supported http methods.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestMethod;
(function (RequestMethod) {
    RequestMethod[RequestMethod["Get"] = 0] = "Get";
    RequestMethod[RequestMethod["Post"] = 1] = "Post";
    RequestMethod[RequestMethod["Put"] = 2] = "Put";
    RequestMethod[RequestMethod["Delete"] = 3] = "Delete";
    RequestMethod[RequestMethod["Options"] = 4] = "Options";
    RequestMethod[RequestMethod["Head"] = 5] = "Head";
    RequestMethod[RequestMethod["Patch"] = 6] = "Patch";
})(RequestMethod || (RequestMethod = {}));
/**
 * All possible states in which a connection can be, based on
 * [States](http://www.w3.org/TR/XMLHttpRequest/#states) from the `XMLHttpRequest` spec, but with an
 * additional "CANCELLED" state.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ReadyState;
(function (ReadyState) {
    ReadyState[ReadyState["Unsent"] = 0] = "Unsent";
    ReadyState[ReadyState["Open"] = 1] = "Open";
    ReadyState[ReadyState["HeadersReceived"] = 2] = "HeadersReceived";
    ReadyState[ReadyState["Loading"] = 3] = "Loading";
    ReadyState[ReadyState["Done"] = 4] = "Done";
    ReadyState[ReadyState["Cancelled"] = 5] = "Cancelled";
})(ReadyState || (ReadyState = {}));
/**
 * Acceptable response types to be associated with a {@link Response}, based on
 * [ResponseType](https://fetch.spec.whatwg.org/#responsetype) from the Fetch spec.
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["Basic"] = 0] = "Basic";
    ResponseType[ResponseType["Cors"] = 1] = "Cors";
    ResponseType[ResponseType["Default"] = 2] = "Default";
    ResponseType[ResponseType["Error"] = 3] = "Error";
    ResponseType[ResponseType["Opaque"] = 4] = "Opaque";
})(ResponseType || (ResponseType = {}));
/**
 * Supported content type to be automatically associated with a {@link Request}.
 * @deprecated see https://angular.io/guide/http
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["NONE"] = 0] = "NONE";
    ContentType[ContentType["JSON"] = 1] = "JSON";
    ContentType[ContentType["FORM"] = 2] = "FORM";
    ContentType[ContentType["FORM_DATA"] = 3] = "FORM_DATA";
    ContentType[ContentType["TEXT"] = 4] = "TEXT";
    ContentType[ContentType["BLOB"] = 5] = "BLOB";
    ContentType[ContentType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ContentType || (ContentType = {}));
/**
 * Define which buffer to use to store the response
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType[ResponseContentType["Text"] = 0] = "Text";
    ResponseContentType[ResponseContentType["Json"] = 1] = "Json";
    ResponseContentType[ResponseContentType["ArrayBuffer"] = 2] = "ArrayBuffer";
    ResponseContentType[ResponseContentType["Blob"] = 3] = "Blob";
})(ResponseContentType || (ResponseContentType = {}));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Headers} from '@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Headers = /** @class */ (function () {
    // TODO(vicb): any -> string|string[]
    function Headers(headers) {
        var _this = this;
        /** @internal header names are lower case */
        this._headers = new Map();
        /** @internal map lower case names to actual names */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var index = line.indexOf(':');
            if (index > 0) {
                var name_1 = line.slice(0, index);
                var value = line.slice(index + 1).trim();
                headers.set(name_1, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     */
    Headers.prototype.append = function (name, value) {
        var values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     */
    Headers.prototype.delete = function (name) {
        var lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     */
    Headers.prototype.get = function (name) {
        var values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * Returns string of all headers.
     */
    // TODO(vicb): returns {[name: string]: string[]}
    Headers.prototype.toJSON = function () {
        var _this = this;
        var serialized = {};
        this._headers.forEach(function (values, name) {
            var split = [];
            values.forEach(function (v) { return split.push.apply(split, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(v.split(','))); });
            serialized[_this._normalizedNames.get(name)] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {@link Response Responses} for
 * mock responses (see {@link MockBackend}).
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {ResponseOptions, Response} from '@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ResponseOptions = /** @class */ (function () {
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * @usageNotes
     * ### Example
     *
     * ```typescript
     * import {ResponseOptions, Response} from '@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link ResponseOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create {@link Response Responses}.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {provide} from '@angular/core';
 * import {bootstrap} from '@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {@link Response}
 * object.
 *
 * ### Example
 *
 * ```
 * import {BaseResponseOptions, Response} from '@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseResponseOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    BaseResponseOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseResponseOptions);
    return BaseResponseOptions;
}(ResponseOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {@link Request}.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var ConnectionBackend = /** @class */ (function () {
    function ConnectionBackend() {
    }
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Connection = /** @class */ (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XSRFStrategy = /** @class */ (function () {
    function XSRFStrategy() {
    }
    return XSRFStrategy;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
function stringToArrayBuffer(input) {
    var view = new Uint16Array(input.length);
    for (var i = 0, strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var map = new Map();
    if (rawParams.length > 0) {
        var params = rawParams.split('&');
        params.forEach(function (param) {
            var eqIdx = param.indexOf('=');
            var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], 2), key = _a[0], val = _a[1];
            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 **/
var QueryEncoder = /** @class */ (function () {
    function QueryEncoder() {
    }
    QueryEncoder.prototype.encodeKey = function (key) { return standardEncoding(key); };
    QueryEncoder.prototype.encodeValue = function (value) { return standardEncoding(value); };
    return QueryEncoder;
}());
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var URLSearchParams = /** @class */ (function () {
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    URLSearchParams.prototype.clone = function () {
        var clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    URLSearchParams.prototype.get = function (param) {
        var storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `set(name, values[0])`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `append(name, value)`
    // for each value in `values`.
    //
    // E.g: "a=[1,2], c=[8]" + "a=[3,4], b=[7]" = "a=[1,2,3,4], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    // A merge operation
    // For each name-values pair in `searchParams`, perform `delete(name)`,
    // followed by `set(name, values)`
    //
    // E.g: "a=[1,2,3], c=[8]" + "a=[4,5,6], b=[7]" = "a=[4,5,6], c=[8], b=[7]"
    //
    // TODO(@caitp): document this better
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {@link Request} and {@link Response}
 * https://fetch.spec.whatwg.org/#body
 */
var Body = /** @class */ (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(this._body));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(this._body));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return this._body;
        }
        return stringToArrayBuffer(this.text());
    };
    /**
      * Returns the request's body as a Blob, assuming that body exists.
      */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return this._body;
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Response = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Response, _super);
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
function _getJsonpConnections() {
    var w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
// Make sure not to evaluate this in a non-browser environment!
var BrowserJsonp = /** @class */ (function () {
    function BrowserJsonp() {
    }
    // Construct a <script> element with the specified URL
    BrowserJsonp.prototype.build = function (url) {
        var node = document.createElement('script');
        node.src = url;
        return node;
    };
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var connections = _getJsonpConnections();
        connections[id] = connection;
    };
    BrowserJsonp.prototype.removeConnection = function (id) {
        var connections = _getJsonpConnections();
        connections[id] = null;
    };
    // Attach the <script> element to the DOM
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild((node)); };
    // Remove <script> element from the DOM
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild((node));
        }
    };
    BrowserJsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BrowserJsonp);
    return BrowserJsonp;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Base class for an in-flight JSONP request.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPConnection = /** @class */ (function () {
    /** @internal */
    function JSONPConnection(req, _dom, baseResponseOptions) {
        var _this = this;
        this._dom = _dom;
        this.baseResponseOptions = baseResponseOptions;
        this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     */
    JSONPConnection.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection;
}());
/**
 * A {@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var JSONPBackend = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(JSONPBackend, _super);
    /** @internal */
    function JSONPBackend(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    JSONPBackend.prototype.createConnection = function (request) {
        return new JSONPConnection(request, this._browserJSONP, this._baseResponseOptions);
    };
    JSONPBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserJsonp, ResponseOptions])
    ], JSONPBackend);
    return JSONPBackend;
}(ConnectionBackend));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {@link MockConnection} may be interacted with in tests.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRConnection = /** @class */ (function () {
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var CookieXSRFStrategy = /** @class */ (function () {
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var xsrfToken = Object(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * @usageNotes
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '@angular/http';
 * @Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var XHRBackend = /** @class */ (function () {
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    XHRBackend = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [BrowserXhr, ResponseOptions,
            XSRFStrategy])
    ], XHRBackend);
    return XHRBackend;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var RequestOptions = /** @class */ (function () {
    // TODO(Dzmitry): remove search when this.search is removed
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {@link RequestMethod RequestMethod.Get}
 *  * headers: empty {@link Headers} object
 *
 * This class could be extended and bound to the {@link RequestOptions} class
 * when configuring an {@link Injector}, in order to override the default options
 * used by {@link Http} to create and send {@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var BaseRequestOptions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    BaseRequestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BaseRequestOptions);
    return BaseRequestOptions;
}(RequestOptions));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(jeffbcross): properly implement body accessors
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {@link Http} and
 * {@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '@angular/http';
 *
 * @Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Request = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Request, _super);
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
function urlEncodeParams(params) {
    var searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = w /** TODO #9100 */['FormData'] || noop;
var Blob$1 = w /** TODO #9100 */['Blob'] || noop;
var ArrayBuffer$1 = w /** TODO #9100 */['ArrayBuffer'] || noop;

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        }));
    }
    return newOptions.merge(new RequestOptions({ method: method, url: url }));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {@link Response} when a
 * response is received.
 *
 * @usageNotes
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '@angular/http';
 * import {map} from 'rxjs/operators';
 *
 * @Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .pipe(map(res => res.json()))
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '@angular/http';
 * import {MockBackend} from '@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Http = /** @class */ (function () {
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     */
    Http.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    Http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Http);
    return Http;
}());
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var Jsonp = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Jsonp, _super);
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {@link Request} instance. If the first argument is a url, an optional {@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {@link BaseRequestOptions} before performing the request.
     *
     * @security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     */
    Jsonp.prototype.request = function (url, options) {
        var responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    Jsonp = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ConnectionBackend, RequestOptions])
    ], Jsonp);
    return Jsonp;
}(Http));

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var HttpModule = /** @class */ (function () {
    function HttpModule() {
    }
    HttpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                BrowserXhr,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                XHRBackend,
                { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
            ],
        })
    ], HttpModule);
    return HttpModule;
}());
/**
 * The module that includes jsonp's providers
 *
 * @deprecated see https://angular.io/api/common/http/HttpClient#jsonp
 * @publicApi
 */
var JsonpModule = /** @class */ (function () {
    function JsonpModule() {
    }
    JsonpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [
                // TODO(pascal): use factory type annotations once supported in DI
                // issue: https://github.com/angular/angular/issues/3183
                { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                BrowserJsonp,
                { provide: RequestOptions, useClass: BaseRequestOptions },
                { provide: ResponseOptions, useClass: BaseResponseOptions },
                JSONPBackend,
            ],
        })
    ], JsonpModule);
    return JsonpModule;
}());

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @deprecated see https://angular.io/guide/http
 * @publicApi
 */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Version"]('7.2.15');

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=http.js.map


/***/ }),

/***/ "./node_modules/@angular/http/node_modules/tslib/tslib.es6.js":
/*!********************************************************************!*\
  !*** ./node_modules/@angular/http/node_modules/tslib/tslib.es6.js ***!
  \********************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/badge/badge.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/badge/badge.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <mat-card-title>Badges</mat-card-title>\r\n    <p>\r\n      <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\r\n    </p>\r\n\r\n    <p>\r\n      Button with a badge on the left\r\n      <button mat-raised-button color=\"primary\" matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\r\n        Action\r\n      </button>\r\n    </p>\r\n\r\n    <p>\r\n      Icon with a badge\r\n      <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\r\n    </p>\r\n\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/buttons/buttons.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/buttons/buttons.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <mat-card-title>Buttons</mat-card-title>\r\n    <mat-card-subtitle>Angular Material buttons are native\r\n      <code> button or a </code> elements enhanced with Material Design styling and ink ripples.\r\n      <code><a href=\"https://material.angular.io/components/button/overview\" target=\"_blank\">Official Doc</a></code>\r\n    </mat-card-subtitle>\r\n\r\n    <h4>Basic Buttons</h4>\r\n    <h4>\r\n      <code class=\"bg-light\">&lt;button mat-button color=\"primary\"&gt;Primary&lt;/button&gt;</code>\r\n    </h4>\r\n    <div class=\"button-row\">\r\n      <button mat-button>Basic</button>\r\n      <button mat-button color=\"primary\">Primary</button>\r\n      <button mat-button color=\"accent\">Accent</button>\r\n      <button mat-button color=\"warn\">Warn</button>\r\n      <button mat-button disabled>Disabled</button>\r\n      <a mat-button routerLink=\".\">Link</a>\r\n    </div>\r\n\r\n    <h4>Raised Buttons</h4>\r\n    <h4>\r\n      <code class=\"bg-light\">&lt;button mat-raised-button color=\"primary\"&gt;Primary&lt;/button&gt;</code>\r\n    </h4>\r\n    <div class=\"button-row\">\r\n      <button mat-raised-button>Basic</button>\r\n      <button mat-raised-button color=\"primary\">Primary</button>\r\n      <button mat-raised-button color=\"accent\">Accent</button>\r\n      <button mat-raised-button color=\"warn\">Warn</button>\r\n      <button mat-raised-button disabled>Disabled</button>\r\n      <a mat-raised-button routerLink=\".\">Link</a>\r\n    </div>\r\n\r\n    <h4>Icon Buttons</h4>\r\n    <h4>\r\n      <code class=\"bg-light\">&lt;button mat-icon-button color=\"primary\"&gt; <br/>&nbsp;&nbsp;&nbsp;&nbsp;&lt;mat-icon aria-label=\"Example icon-button with a heart icon\"&gt;favorite&lt;/mat-icon&gt;<br/>&lt;/button&gt;</code>\r\n    </h4>\r\n    <div class=\"button-row\">\r\n      <button mat-icon-button>\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"primary\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"accent\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <button mat-icon-button color=\"warn\">\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <button mat-icon-button disabled>\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n    </div>\r\n\r\n    <h4>Fab Buttons</h4>\r\n    <h4>\r\n      <code class=\"bg-light\">&lt;button mat-fab color=\"primary\"&gt;Primary&lt;/button&gt;</code>\r\n    </h4>\r\n    <div class=\"button-row\">\r\n      <button mat-fab>Basic</button>\r\n      <button mat-fab color=\"primary\">Primary</button>\r\n      <button mat-fab color=\"accent\">Accent</button>\r\n      <button mat-fab color=\"warn\">Warn</button>\r\n      <button mat-fab disabled>Disabled</button>\r\n      <button mat-fab>\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <a mat-fab routerLink=\".\">Link</a>\r\n    </div>\r\n\r\n    <h4>Mini Fab Buttons</h4>\r\n    <h4>\r\n      <code class=\"bg-light\">&lt;button mat-mini-fab color=\"primary\"&gt;Primary&lt;/button&gt;</code>\r\n    </h4>\r\n    <div class=\"button-row\">\r\n      <button mat-mini-fab>Base</button>\r\n      <button mat-mini-fab color=\"primary\">Pri</button>\r\n      <button mat-mini-fab color=\"accent\">Acc</button>\r\n      <button mat-mini-fab color=\"warn\">Warn</button>\r\n      <button mat-mini-fab disabled>Dis</button>\r\n      <button mat-mini-fab>\r\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\r\n      </button>\r\n      <a mat-mini-fab routerLink=\".\">Link</a>\r\n    </div>\r\n    <h4>Button toggle </h4>\r\n    <mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n      <mat-button-toggle value=\"left\">\r\n        <mat-icon>format_align_left</mat-icon>\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"center\">\r\n        <mat-icon>format_align_center</mat-icon>\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"right\">\r\n        <mat-icon>format_align_right</mat-icon>\r\n      </mat-button-toggle>\r\n      <mat-button-toggle value=\"justify\" disabled>\r\n        <mat-icon>format_align_justify</mat-icon>\r\n      </mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n    <div class=\"m-t-20\">Selected value: {{group.value}}</div>\r\n\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/cards/cards.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/cards/cards.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Basic Card -->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n    <mat-card-content>Simple card just use\r\n        <code>&lt;mat-card&gt; &lt;mat-card-content&gt; ... &lt;/mat-card-content&gt; &lt;/mat-card&gt;</code>\r\n        <code><a href=\"https://material.angular.io/components/card/overview\" target=\"_blank\">Official Doc</a></code>\r\n    </mat-card-content>\r\n</mat-card>\r\n<!-- ============================================================== -->\r\n<!-- Image Card row-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n    <!-- Card column -->\r\n    <div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <div mat-card-avatar>\r\n                    <img src=\"assets/images/users/1.jpg\" class=\"img-fluid img-circle\" />\r\n                </div>\r\n                <mat-card-title>Shiba Inu</mat-card-title>\r\n                <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/images/big/img4.jpg\" alt=\"Photo of a Shiba Inu\">\r\n            <mat-card-content>\r\n                <p>\r\n                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes\r\n                    very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\r\n                </p>\r\n                <mat-card-actions>\r\n                    <button mat-raised-button color=\"accent\">LIKE</button>\r\n                    <button mat-button>SHARE</button>\r\n                </mat-card-actions>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <!-- Card column -->\r\n    <div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <div mat-card-avatar>\r\n                    <img src=\"assets/images/users/2.jpg\" class=\"img-fluid img-circle\" />\r\n                </div>\r\n                <mat-card-title>Shiba Inu</mat-card-title>\r\n                <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/images/big/img3.jpg\" alt=\"Photo of a Shiba Inu\">\r\n            <mat-card-content>\r\n                <p>\r\n                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes\r\n                    very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\r\n                </p>\r\n\r\n                <mat-card-actions>\r\n                    <button mat-raised-button color=\"accent\">LIKE</button>\r\n                    <button mat-button>SHARE</button>\r\n                </mat-card-actions>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <!-- Card column -->\r\n    <div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-header>\r\n                <div mat-card-avatar>\r\n                    <img src=\"assets/images/users/3.jpg\" class=\"img-fluid img-circle\" />\r\n                </div>\r\n                <mat-card-title>Shiba Inu</mat-card-title>\r\n                <mat-card-subtitle>Dog Breed</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/images/big/img5.jpg\" alt=\"Photo of a Shiba Inu\">\r\n            <mat-card-content>\r\n                <p>\r\n                    The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes\r\n                    very well with mountainous terrain, the Shiba Inu was originally bred for hunting.\r\n                </p>\r\n\r\n                <mat-card-actions>\r\n                    <button mat-raised-button color=\"accent\">LIKE</button>\r\n                    <button mat-button>SHARE</button>\r\n                </mat-card-actions>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Title subtitle Card row-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Card with title and footer\r\n                    <code>&lt;mat-card-title&gt;</code>\r\n                </mat-card-title>\r\n                <mat-card-subtitle>This is the subtitle\r\n                    <code>&lt;mat-card-subtitle&gt;</code>\r\n                </mat-card-subtitle>\r\n\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\r\n                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit\r\n                    anim id est laborum.</p>\r\n\r\n                <mat-card-actions>\r\n                    <button mat-icon-button color=\"accent\">\r\n                        <mat-icon>favorite</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button>\r\n                        <mat-icon>share</mat-icon>\r\n                    </button>\r\n                </mat-card-actions>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Half width Card row-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex.gt-sm=\"50%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>\r\n                    <h4 class=\"m-0\">Half width Card</h4>\r\n                </mat-card-title>\r\n                <mat-card-subtitle>This is the subtitle</mat-card-subtitle>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                    commodo consequat. </p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex.gt-sm=\"50%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>\r\n                    <h4 class=\"m-0\">Half width Card</h4>\r\n                </mat-card-title>\r\n                <mat-card-subtitle>This is the subtitle</mat-card-subtitle>\r\n\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                    commodo consequat.</p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Colored Card row-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-header class=\"bg-primary text-white\">\r\n                <mat-card-title>Card bg-primary</mat-card-title>\r\n                <mat-card-subtitle>This is the subtitle</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                    commodo consequat. </p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-header class=\"bg-info text-white\">\r\n                <mat-card-title>Card bg-info</mat-card-title>\r\n                <mat-card-subtitle>This is the subtitle</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                    commodo consequat. </p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-header class=\"bg-danger text-white\">\r\n                <mat-card-title>Card bg-danger</mat-card-title>\r\n                <mat-card-subtitle>This is the subtitle</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                    commodo consequat. </p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-header class=\"bg-warning text-white\">\r\n                <mat-card-title>Card bg-warning</mat-card-title>\r\n                <mat-card-subtitle>This is the subtitle</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                    commodo consequat. </p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex.gt-sm=\"33.33%\">\r\n        <mat-card>\r\n            <mat-card-header class=\"bg-inverse text-white\">\r\n                <mat-card-title>Card bg-inverse</mat-card-title>\r\n                <mat-card-subtitle>This is the subtitle</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                    commodo consequat. </p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex.gt-sm=\"33.33%\" fxFlex=\"100\">\r\n        <mat-card>\r\n            <mat-card-header class=\"bg-success text-white\">\r\n                <mat-card-title>Card bg-success</mat-card-title>\r\n                <mat-card-subtitle>This is the subtitle</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\r\n                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\r\n                    commodo consequat. </p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/chips/chips.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/chips/chips.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <mat-card-title>Basic Chips</mat-card-title>\r\n    <mat-card-subtitle>\r\n      <code>&lt;mat-chip&gt;</code>displays a list of values as individual, keyboard accessible, chips.\r\n      <code class=\"\"><a href=\"https://material.angular.io/components/chips/overview\">Official Component</a></code>\r\n    </mat-card-subtitle>\r\n    <mat-chip-list>\r\n      <mat-chip>One fish</mat-chip>\r\n      <mat-chip>Two fish</mat-chip>\r\n      <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\r\n      <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\r\n    </mat-chip-list>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card>\r\n  <mat-card-content>\r\n    <mat-card-title>Chip input</mat-card-title>\r\n    <mat-card-subtitle>The MatChipInput directive can be used together with a chip-list to streamline the interaction between the two components.\r\n      This directive adds chip-specific behaviors to the input element within for adding and removing chips. </mat-card-subtitle>\r\n\r\n    <mat-form-field class=\"demo-chip-list\">\r\n      <mat-chip-list #chipList>\r\n        <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\" [removable]=\"removable\" (remove)=\"remove(fruit)\">\r\n          {{fruit.name}}\r\n          <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n        </mat-chip>\r\n        <input placeholder=\"New fruit...\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\r\n          (matChipInputTokenEnd)=\"add($event)\" />\r\n      </mat-chip-list>\r\n    </mat-form-field>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card>\r\n  <mat-card-content>\r\n    <mat-card-title>Stacked Chips</mat-card-title>\r\n    <mat-card-subtitle>You can also stack the chips if you want them on top of each other and/or use the\r\n      <code>(focus)</code> event to run custom code.</mat-card-subtitle>\r\n\r\n    <mat-chip-list class=\"mat-chip-list-stacked\">\r\n      <mat-chip *ngFor=\"let aColor of availableColors\" (focus)=\"color = aColor.color\" color=\"{{aColor.color}}\" selected=\"true\">\r\n        {{aColor.name}}\r\n      </mat-chip>\r\n    </mat-chip-list>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/dialog/dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/dialog/dialog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Dialog Overview</mat-card-title>\r\n        <mat-card-subtitle>The\r\n          <code>&lt;MatDialog&gt;</code> service can be used to open modal dialogs with Material Design styling and animations.</mat-card-subtitle>\r\n        <ol>\r\n          <li>\r\n            <mat-form-field>\r\n              <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\r\n            </mat-form-field>\r\n          </li>\r\n          <li>\r\n            <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\r\n          </li>\r\n          <li *ngIf=\"animal\">\r\n            You chose:\r\n            <i>{{animal}}</i>\r\n          </li>\r\n        </ol>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Basic Card Grid-->\r\n<!-- ============================================================== -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/expansion/expansion.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/expansion/expansion.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Basic-->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n    <mat-card-content>\r\n        <mat-card-title>Basic Expansion</mat-card-title>\r\n        <mat-card-subtitle>Expansion panel\r\n            <code class=\"\"><a href=\"https://material.angular.io/components/expansion/overview\">Official Component</a></code>\r\n        </mat-card-subtitle>\r\n        <mat-accordion>\r\n            <mat-expansion-panel>\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title> Personal data </mat-panel-title>\r\n                    <mat-panel-description> Type your name and age </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"First name\"> </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Age\"> </mat-form-field>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\" (closed)=\"panelOpenState = false\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title> Self aware panel </mat-panel-title>\r\n                    <mat-panel-description> Currently I am {{panelOpenState ? 'open' : 'closed'}} </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <p>I'm visible because I am open</p>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </mat-card-content>\r\n</mat-card>\r\n<!-- ============================================================== -->\r\n<!-- As an Accordion -->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n    <mat-card-content>\r\n        <mat-card-title>Accordion</mat-card-title>\r\n        <mat-card-subtitle>Expansion panel</mat-card-subtitle>\r\n\r\n        <mat-accordion class=\"example-headers-align\">\r\n            <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title> Personal data </mat-panel-title>\r\n                    <mat-panel-description> Type your name and age\r\n                        <mat-icon>account_circle</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"First name\"> </mat-form-field>\r\n                <mat-form-field>\r\n                    <input matInput type=\"number\" min=\"1\" placeholder=\"Age\"> </mat-form-field>\r\n                <mat-action-row>\r\n                    <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                </mat-action-row>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title> Destination </mat-panel-title>\r\n                    <mat-panel-description> Type the country name\r\n                        <mat-icon>map</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Country\"> </mat-form-field>\r\n                <mat-action-row>\r\n                    <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                    <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                </mat-action-row>\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\r\n                <mat-expansion-panel-header>\r\n                    <mat-panel-title> Day of the trip </mat-panel-title>\r\n                    <mat-panel-description> Inform the date you wish to travel\r\n                        <mat-icon>date_range</mat-icon>\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly> </mat-form-field>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n                <mat-action-row>\r\n                    <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                    <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n                </mat-action-row>\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/grid/grid.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/grid/grid.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex.gt-sm=\"100%\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Fixed height grid-list</mat-card-title>\r\n                <mat-card-subtitle>\r\n                    <code>&lt;mat-grid-list&gt;</code> is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec.\r\n                    <code><a href=\"https://material.io/guidelines/components/grid-lists.html\">Official Doc here</a></code>\r\n                </mat-card-subtitle>\r\n                <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n                    <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\r\n                        {{tile.text}}\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Basic Card Grid-->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n    <mat-card-content>\r\n        <mat-card-title>Basic grid-list</mat-card-title>\r\n        <mat-card-subtitle>\r\n            <code>&lt;mat-grid-list&gt;</code> is a two-dimensional list view that arranges cells into grid-based layout. See Material Design spec.\r\n            <a href=\"https://material.io/guidelines/components/grid-lists.html\">here</a>\r\n        </mat-card-subtitle>\r\n        <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n            <mat-grid-tile>1</mat-grid-tile>\r\n            <mat-grid-tile>2</mat-grid-tile>\r\n            <mat-grid-tile>3</mat-grid-tile>\r\n            <mat-grid-tile>4</mat-grid-tile>\r\n        </mat-grid-list>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/lists/lists.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/lists/lists.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Basic list</mat-card-title>\r\n        <mat-card-subtitle>\r\n          <code>&lt;mat-list&gt;</code> is a container component that wraps and formats a series of line items. As the base list component, it provides\r\n          Material Design styling, but no behavior of its own.\r\n          <code><a href=\"https://material.angular.io/components/list/overview\">Official Doc here</a></code>\r\n        </mat-card-subtitle>\r\n        <mat-list role=\"list\">\r\n          <mat-list-item role=\"listitem\">Item 1</mat-list-item>\r\n          <mat-list-item role=\"listitem\">Item 2</mat-list-item>\r\n          <mat-list-item role=\"listitem\">Item 3</mat-list-item>\r\n        </mat-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- List with selection-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"50%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>List with selection</mat-card-title>\r\n        <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n        <mat-selection-list #shoes>\r\n          <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\r\n            {{shoe}}\r\n          </mat-list-option>\r\n        </mat-selection-list>\r\n        <p>\r\n          Options selected: {{shoes.selectedOptions.selected.length}}\r\n        </p>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex.gt-sm=\"50%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Multiline lists</mat-card-title>\r\n        <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n        <mat-list>\r\n          <mat-list-item *ngFor=\"let message of messages\">\r\n            <h3 matLine>{{message.from}}</h3>\r\n            <p matLine class=\"text-muted\">{{message.subject}}</p>\r\n            <p matLine class=\"text-muted\">{{message.content}}</p>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- List with icons selection-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Multiline lists</mat-card-title>\r\n        <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n        <mat-list>\r\n          <mat-list-item *ngFor=\"let message of messages\">\r\n            <img mat-list-avatar [src]=\"message.image\" alt=\"Image of {{message.from}}\">\r\n            <h3 matLine>{{message.from}}</h3>\r\n            <p matLine class=\"text-muted\">{{message.content}}</p>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- List with icons selection-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content class=\"p-b-0 m-b-0\">\r\n        <mat-card-title>List with sections</mat-card-title>\r\n        <mat-card-subtitle>A selection list provides an interface for selecting values, where each list item is an option.</mat-card-subtitle>\r\n      </mat-card-content>\r\n      <mat-list>\r\n        <mat-card-content class=\"p-t-0\">\r\n          <h3 mat-subheader>Folders</h3>\r\n          <mat-list-item *ngFor=\"let folder of folders\">\r\n            <mat-icon mat-list-icon>folder</mat-icon>\r\n            <h4 mat-line>{{folder.name}}</h4>\r\n            <p mat-line> {{folder.updated | date}} </p>\r\n          </mat-list-item>\r\n        </mat-card-content>\r\n\r\n        <mat-divider></mat-divider>\r\n        <mat-card-content>\r\n          <h3 mat-subheader>Notes</h3>\r\n          <mat-list-item *ngFor=\"let note of notes\">\r\n            <mat-icon mat-list-icon>note</mat-icon>\r\n            <h4 mat-line>{{note.name}}</h4>\r\n            <p mat-line> {{note.updated | date}} </p>\r\n          </mat-list-item>\r\n        </mat-card-content>\r\n      </mat-list>\r\n\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/menu/menu.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/menu/menu.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Basic menu</mat-card-title>\r\n        <mat-card-subtitle>\r\n          <code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n        <button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\r\n        <mat-menu #menu=\"matMenu\">\r\n          <button mat-menu-item>Item 1</button>\r\n          <button mat-menu-item>Item 2</button>\r\n        </mat-menu>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>On icon menu</mat-card-title>\r\n        <mat-card-subtitle>\r\n          <code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu2\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n        <mat-menu #menu2=\"matMenu\">\r\n          <button mat-menu-item>Item 1</button>\r\n          <button mat-menu-item>Item 2</button>\r\n        </mat-menu>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Nested menu</mat-card-title>\r\n        <mat-card-subtitle>\r\n          <code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n        <button mat-raised-button color=\"accent\" [matMenuTriggerFor]=\"animals\">Animal index</button>\r\n\r\n        <mat-menu #animals=\"matMenu\">\r\n          <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\r\n          <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\r\n        </mat-menu>\r\n\r\n        <mat-menu #vertebrates=\"matMenu\">\r\n          <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\r\n          <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\r\n          <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\r\n          <button mat-menu-item>Birds</button>\r\n          <button mat-menu-item>Mammals</button>\r\n        </mat-menu>\r\n\r\n        <mat-menu #invertebrates=\"matMenu\">\r\n          <button mat-menu-item>Insects</button>\r\n          <button mat-menu-item>Molluscs</button>\r\n          <button mat-menu-item>Crustaceans</button>\r\n          <button mat-menu-item>Corals</button>\r\n          <button mat-menu-item>Arachnids</button>\r\n          <button mat-menu-item>Velvet worms</button>\r\n          <button mat-menu-item>Horseshoe crabs</button>\r\n        </mat-menu>\r\n\r\n        <mat-menu #fish=\"matMenu\">\r\n          <button mat-menu-item>Baikal oilfish</button>\r\n          <button mat-menu-item>Bala shark</button>\r\n          <button mat-menu-item>Ballan wrasse</button>\r\n          <button mat-menu-item>Bamboo shark</button>\r\n          <button mat-menu-item>Banded killifish</button>\r\n        </mat-menu>\r\n\r\n        <mat-menu #amphibians=\"matMenu\">\r\n          <button mat-menu-item>Sonoran desert toad</button>\r\n          <button mat-menu-item>Western toad</button>\r\n          <button mat-menu-item>Arroyo toad</button>\r\n          <button mat-menu-item>Yosemite toad</button>\r\n        </mat-menu>\r\n\r\n        <mat-menu #reptiles=\"matMenu\">\r\n          <button mat-menu-item>Banded Day Gecko</button>\r\n          <button mat-menu-item>Banded Gila Monster</button>\r\n          <button mat-menu-item>Black Tree Monitor</button>\r\n          <button mat-menu-item>Blue Spiny Lizard</button>\r\n          <button mat-menu-item disabled>Velociraptor</button>\r\n        </mat-menu>\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>With icon menu</mat-card-title>\r\n        <mat-card-subtitle>\r\n          <code>&lt;mat-menu&gt;</code> is a floating panel containing list of options.</mat-card-subtitle>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"menu4\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </button>\r\n        <mat-menu #menu4=\"matMenu\">\r\n          <button mat-menu-item>\r\n            <mat-icon>dialpad</mat-icon>\r\n            <span>Redial</span>\r\n          </button>\r\n          <button mat-menu-item disabled>\r\n            <mat-icon>voicemail</mat-icon>\r\n            <span>Check voicemail</span>\r\n          </button>\r\n          <button mat-menu-item>\r\n            <mat-icon>notifications_off</mat-icon>\r\n            <span>Disable alerts</span>\r\n          </button>\r\n        </mat-menu>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/progress-snipper/progress-snipper.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/progress-snipper/progress-snipper.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Basic Progress spinner</mat-card-title>\r\n        <mat-card-subtitle>\r\n          <code>&lt;mat-progress-spinner&gt;</code> are a circular indicators of progress and activity.</mat-card-subtitle>\r\n        <mat-spinner></mat-spinner>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Basic Card Grid-->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n  <mat-card-content>\r\n    <mat-card-title>Configurable progress spinner</mat-card-title>\r\n\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Color:</label>\r\n      <mat-radio-group [(ngModel)]=\"color\">\r\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n          Primary\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n          Accent\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n          Warn\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n    <br/>\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Mode:</label>\r\n      <mat-radio-group [(ngModel)]=\"mode\">\r\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n          Determinate\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n          Indeterminate\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n    <br/>\r\n    <section class=\"example-section\" *ngIf=\"mode == 'determinate'\">\r\n      <label class=\"example-margin\">Progress:</label>\r\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\r\n    </section>\r\n    <h4 class=\"example-h2\">Result</h4>\r\n\r\n    <mat-progress-spinner class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\">\r\n    </mat-progress-spinner>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/progress/progress.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/progress/progress.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex.gt-sm=\"100%\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Determinate progress-bar</mat-card-title>\r\n                <mat-card-subtitle>\r\n                    <code>&lt;mat-progress-bar mode=\"determinate\"&gt;</code> is a horizontal progress-bar for\r\n                    indicating progress and activity.</mat-card-subtitle>\r\n                <mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row\">\r\n    <div fxFlex.gt-sm=\"100%\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Indeterminate progress-bar</mat-card-title>\r\n                <mat-card-subtitle>\r\n                    <code>&lt;mat-progress-bar mode=\"indeterminate\"&gt;</code> is a horizontal progress-bar for\r\n                    indicating progress and activity.</mat-card-subtitle>\r\n                <mat-progress-bar mode=\"indeterminate\" value=\"40\"></mat-progress-bar>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex.gt-sm=\"100%\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Buffer progress-bar</mat-card-title>\r\n                <mat-card-subtitle>\r\n                    <code>&lt;mat-progress-bar mode=\"buffer\"&gt;</code> is a horizontal progress-bar for indicating\r\n                    progress and activity.</mat-card-subtitle>\r\n                <mat-progress-bar mode=\"buffer\"></mat-progress-bar>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex.gt-sm=\"100%\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Query progress-bar</mat-card-title>\r\n                <mat-card-subtitle>\r\n                    <code>&lt;mat-progress-bar mode=\"query\"&gt;</code> is a horizontal progress-bar for indicating\r\n                    progress and activity.</mat-card-subtitle>\r\n                <mat-progress-bar mode=\"query\"></mat-progress-bar>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex.gt-sm=\"100%\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Colored progress-bar</mat-card-title>\r\n                <mat-card-subtitle>\r\n                    <code>&lt;mat-progress-bar mode=\"determinate\"&gt;</code> is a horizontal progress-bar for\r\n                    indicating progress and activity.</mat-card-subtitle>\r\n                <mat-progress-bar mode=\"determinate\" value=\"40\" color=\"primary\"></mat-progress-bar>\r\n                <br />\r\n                <mat-progress-bar mode=\"determinate\" value=\"80\" color=\"accent\"></mat-progress-bar>\r\n                <br />\r\n                <mat-progress-bar mode=\"determinate\" value=\"20\" color=\"warn\"></mat-progress-bar>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n    <div fxFlex.gt-sm=\"100%\">\r\n        <mat-card>\r\n            <mat-card-content>\r\n                <mat-card-title>Configurable progress-bar</mat-card-title>\r\n                <mat-card-subtitle>\r\n                    <code>&lt;mat-progress-bar mode=\"query\"&gt;</code> is a horizontal progress-bar for indicating\r\n                    progress and activity.</mat-card-subtitle>\r\n                <section class=\"example-section\">\r\n                    <label class=\"example-margin\">Color:</label>\r\n                    <mat-radio-group [(ngModel)]=\"color\">\r\n                        <mat-radio-button class=\"example-margin\" value=\"primary\">\r\n                            Primary\r\n                        </mat-radio-button>\r\n                        <mat-radio-button class=\"example-margin\" value=\"accent\">\r\n                            Accent\r\n                        </mat-radio-button>\r\n                        <mat-radio-button class=\"example-margin\" value=\"warn\">\r\n                            Warn\r\n                        </mat-radio-button>\r\n                    </mat-radio-group>\r\n                </section>\r\n                <br />\r\n                <section class=\"example-section\">\r\n                    <label class=\"example-margin\">Mode:</label>\r\n                    <mat-radio-group [(ngModel)]=\"mode\">\r\n                        <mat-radio-button class=\"example-margin\" value=\"determinate\">\r\n                            Determinate\r\n                        </mat-radio-button>\r\n                        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\r\n                            Indeterminate\r\n                        </mat-radio-button>\r\n                        <mat-radio-button class=\"example-margin\" value=\"buffer\">\r\n                            Buffer\r\n                        </mat-radio-button>\r\n                        <mat-radio-button class=\"example-margin\" value=\"query\">\r\n                            Query\r\n                        </mat-radio-button>\r\n                    </mat-radio-group>\r\n                </section>\r\n\r\n                <section class=\"example-section\" *ngIf=\"mode == 'determinate' || mode == 'buffer'\">\r\n                    <label class=\"example-margin\">Progress:</label>\r\n                    <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\r\n                </section>\r\n                <section class=\"example-section\" *ngIf=\"mode == 'buffer'\">\r\n                    <label class=\"example-margin\">Buffer:</label>\r\n                    <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\r\n                </section>\r\n                <h2 class=\"example-h2\">Result</h2>\r\n\r\n                <section class=\"example-section\">\r\n                    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\r\n                        [bufferValue]=\"bufferValue\">\r\n                    </mat-progress-bar>\r\n                </section>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/ripples/ripples.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/ripples/ripples.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <mat-card-title>Ripples</mat-card-title>\r\n    <mat-checkbox [(ngModel)]=\"centered\" class=\"example-ripple-checkbox\">Centered</mat-checkbox>\r\n    <mat-checkbox [(ngModel)]=\"disabled\" class=\"example-ripple-checkbox\">Disabled</mat-checkbox>\r\n    <mat-checkbox [(ngModel)]=\"unbounded\" class=\"example-ripple-checkbox\">Unbounded</mat-checkbox>\r\n\r\n    <mat-form-field class=\"example-ripple-form-field\">\r\n      <input matInput [(ngModel)]=\"radius\" type=\"number\" placeholder=\"Radius\">\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-ripple-form-field\">\r\n      <input matInput [(ngModel)]=\"color\" type=\"text\" placeholder=\"Color\">\r\n    </mat-form-field>\r\n\r\n\r\n    <div class=\"example-ripple-container mat-elevation-z4\" matRipple [matRippleCentered]=\"centered\" [matRippleDisabled]=\"disabled\"\r\n      [matRippleUnbounded]=\"unbounded\" [matRippleRadius]=\"radius\" [matRippleColor]=\"color\">\r\n      Click me\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/slide-toggle/slide-toggle.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/slide-toggle/slide-toggle.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Basic slide-toggles</mat-card-title>\r\n        <mat-card-subtitle>\r\n          <code>&lt;mat-slide-toggle&gt;</code> is an on/off control that can be toggled via clicking or dragging.</mat-card-subtitle>\r\n        <mat-slide-toggle>Slide me!</mat-slide-toggle>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Basic Card Grid-->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n  <mat-card-content>\r\n    <mat-card-title>Basic grid-list</mat-card-title>\r\n    <mat-card-subtitle>\r\n      <code>&lt;mat-slide-toggle&gt;</code> is an on/off control that can be toggled via clicking or dragging.</mat-card-subtitle>\r\n    <section class=\"example-section\">\r\n      <label class=\"example-margin\">Color:</label>\r\n      <mat-radio-group [(ngModel)]=\"color\">\r\n        <mat-radio-button class=\"example-margin\" color=\"primary\" value=\"primary\">\r\n          Primary\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" color=\"accent\" value=\"accent\">\r\n          Accent\r\n        </mat-radio-button>\r\n        <mat-radio-button class=\"example-margin\" color=\"warn\" value=\"warn\">\r\n          Warn\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </section>\r\n    <mat-card-title>Result</mat-card-title>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" [disabled]=\"disabled\">\r\n        Slide me!\r\n      </mat-slide-toggle>\r\n    </section>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/slider/slider.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/slider/slider.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n    <mat-card-title>Slider</mat-card-title>\r\n    <mat-card-subtitle>mat-slider allows for the selection of a value from a range via mouse, touch, or keyboard, similar to\r\n      <code class=\"\"><a href=\"https://material.angular.io/components/slider/overview\">Official Component</a></code>\r\n    </mat-card-subtitle>\r\n\r\n    <h4 class=\"m-b-0\">Basic Slider</h4>\r\n    <mat-slider color=\"warn\" value=\"40\"></mat-slider>\r\n\r\n    <h4 class=\"m-b-0\">value Slider</h4>\r\n    Label\r\n    <mat-slider #slidey color=\"primary\" value=\"40\"></mat-slider>\r\n    {{slidey.value}}\r\n\r\n    <h4 class=\"m-b-0\">With Min and Max</h4>\r\n    <mat-form-field>\r\n      <input [(ngModel)]=\"min\" matInput> </mat-form-field>\r\n    <mat-form-field>\r\n      <input [(ngModel)]=\"max\" matInput>\r\n    </mat-form-field>\r\n    <br/>\r\n    <mat-slider [min]=\"min\" [max]=\"max\" tick-interval=\"5\" #slider2 color=\"warn\"></mat-slider>\r\n    {{slider2.value}}\r\n\r\n\r\n    <h4 class=\"m-b-0\">Disabled Slider</h4>\r\n    <mat-slider disabled #slider3></mat-slider>\r\n    {{slider3.value}}\r\n\r\n    <h4 class=\"m-b-0\">Vertical slider</h4>\r\n    <mat-slider vertical value=\"50\"></mat-slider>\r\n\r\n    <h4 class=\"m-b-0\">Selecting a value</h4>\r\n    <mat-slider min=\"1\" max=\"100\" step=\"20\" #slider5></mat-slider>\r\n    {{slider5.value}}\r\n\r\n    <h4 class=\"m-b-0\">Slider with set tick interval</h4>\r\n    <mat-slider tick-interval=\"auto\"></mat-slider>\r\n    <mat-slider tick-interval=\"9\"></mat-slider>\r\n\r\n    <h4 class=\"m-b-0\">Slider with Thumb Label</h4>\r\n    <mat-slider thumb-label></mat-slider>\r\n\r\n    <h4 class=\"m-b-0\">Slider with one-way binding</h4>\r\n    <mat-slider [value]=\"val\" step=\"40\"></mat-slider>\r\n    <mat-form-field>\r\n      <input [(ngModel)]=\"val\" matInput>\r\n    </mat-form-field>\r\n\r\n    <h4 class=\"m-b-0\">Slider with two-way binding</h4>\r\n    <mat-slider [(ngModel)]=\"demo\" step=\"40\"></mat-slider>\r\n    <mat-form-field>\r\n      <input [(ngModel)]=\"demo\" matInput>\r\n    </mat-form-field>\r\n\r\n    <h4 class=\"m-b-0\">Inverted slider</h4>\r\n    <mat-slider invert value=\"50\" tick-interval=\"5\"></mat-slider>\r\n\r\n\r\n\r\n    <h4 class=\"m-b-0\">Inverted vertical slider</h4>\r\n    <mat-slider vertical invert thumb-label tick-interval=\"auto\" value=\"50\"></mat-slider>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n<mat-card>\r\n  <mat-card-content>\r\n    <h5 class=\"example-h2\">Slider configuration</h5>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-margin\">\r\n        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\r\n      </mat-form-field>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\r\n        Auto ticks\r\n      </mat-checkbox>\r\n      <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\r\n        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\r\n      </mat-form-field>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\r\n    </section>\r\n\r\n    <section class=\"example-section\">\r\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\r\n    </section>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card class=\"result\">\r\n  <mat-card-content>\r\n    <h5 class=\"example-h2\">Result</h5>\r\n\r\n    <mat-slider\r\n        class=\"example-margin\"\r\n        [disabled]=\"disabled\"\r\n        [invert]=\"invert\"\r\n        [max]=\"max\"\r\n        [min]=\"min\"\r\n        [step]=\"step\"\r\n        [thumbLabel]=\"thumbLabel\"\r\n        [tickInterval]=\"tickInterval\"\r\n        [(ngModel)]=\"value\"\r\n        [vertical]=\"vertical\">\r\n    </mat-slider>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/snackbar/snackbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/snackbar/snackbar.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-content>\r\n        <mat-card-title>Basic snack-bar</mat-card-title>\r\n        <mat-card-subtitle>matSnackBar is a service for displaying snack-bar notifications.\r\n            <code class=\"\"><a href=\"https://material.angular.io/components/snack-bar/overview\">Official Component</a></code>\r\n        </mat-card-subtitle>\r\n        <mat-form-field>\r\n            <input matInput value=\"Disco party!\" placeholder=\"Message\" #message> </mat-form-field>\r\n        <mat-form-field>\r\n            <input matInput value=\"Dance\" placeholder=\"Action\" #action> </mat-form-field>\r\n        <button mat-raised-button color=\"warn\" (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/stepper/stepper.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/stepper/stepper.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Stepper</mat-card-title>\r\n        <mat-card-subtitle>Check the\r\n          <code class=\"\"><a href=\"https://material.angular.io/components/stepper/overview\">Official Component</a></code>\r\n        </mat-card-subtitle>\r\n        <button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button>\r\n        <mat-horizontal-stepper [linear]=\"isLinear\">\r\n          <mat-step [stepControl]=\"firstFormGroup\">\r\n            <form [formGroup]=\"firstFormGroup\">\r\n              <ng-template matStepLabel>Fill out your name</ng-template>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n              </mat-form-field>\r\n              <div>\r\n                <button mat-raised-button color=\"warn\" matStepperNext>Next</button>\r\n              </div>\r\n            </form>\r\n          </mat-step>\r\n          <mat-step [stepControl]=\"secondFormGroup\">\r\n            <form [formGroup]=\"secondFormGroup\">\r\n              <ng-template matStepLabel>Fill out your address</ng-template>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\r\n              </mat-form-field>\r\n              <div>\r\n                <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n                <button mat-raised-button color=\"warn\" matStepperNext>Next</button>\r\n              </div>\r\n            </form>\r\n          </mat-step>\r\n          <mat-step>\r\n            <ng-template matStepLabel>Done</ng-template>\r\n            You are now done.\r\n            <div>\r\n              <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\r\n            </div>\r\n          </mat-step>\r\n        </mat-horizontal-stepper>\r\n\r\n      </mat-card-content>\r\n\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title class=\"p-b-20\">Stepper variants</mat-card-title>\r\n        \r\n       <button mat-raised-button (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">\r\n        {{!isLinear ? 'Enable linear mode' : 'Disable linear mode'}}\r\n      </button>\r\n      <mat-vertical-stepper [linear]=\"isLinear\" #stepper>\r\n        <mat-step [stepControl]=\"firstFormGroup\">\r\n          <form [formGroup]=\"firstFormGroup\">\r\n            <ng-template matStepLabel>Fill out your name</ng-template>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n            </mat-form-field>\r\n            <div>\r\n              <button mat-button matStepperNext>Next</button>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"secondFormGroup\">\r\n          <form [formGroup]=\"secondFormGroup\">\r\n            <ng-template matStepLabel>Fill out your address</ng-template>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\r\n            </mat-form-field>\r\n            <div>\r\n              <button mat-button matStepperPrevious>Back</button>\r\n              <button mat-button matStepperNext>Next</button>\r\n            </div>\r\n          </form>\r\n        </mat-step>\r\n        <mat-step>\r\n          <ng-template matStepLabel>Done</ng-template>\r\n          You are now done.\r\n          <div>\r\n            <button mat-button matStepperPrevious>Back</button>\r\n            <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n          </div>\r\n        </mat-step>\r\n      </mat-vertical-stepper>\r\n    </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title class=\"p-b-20\">Optional step</mat-card-title>\r\n        <button mat-raised-button (click)=\"isOptional = !isOptional\">\r\n          {{!isOptional ? 'Enable optional steps' : 'Disable optional steps'}}\r\n        </button>\r\n\r\n        <mat-horizontal-stepper linear #stepper>\r\n          <mat-step [stepControl]=\"firstFormGroup\">\r\n            <form [formGroup]=\"firstFormGroup\">\r\n              <ng-template matStepLabel>Fill out your name</ng-template>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n              </mat-form-field>\r\n              <div>\r\n                <button mat-button matStepperNext>Next</button>\r\n              </div>\r\n            </form>\r\n          </mat-step>\r\n          <mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\">\r\n            <form [formGroup]=\"secondFormGroup\">\r\n              <ng-template matStepLabel>Fill out your address</ng-template>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\r\n              </mat-form-field>\r\n              <div>\r\n                <button mat-button matStepperPrevious>Back</button>\r\n                <button mat-button matStepperNext>Next</button>\r\n              </div>\r\n            </form>\r\n          </mat-step>\r\n          <mat-step>\r\n            <ng-template matStepLabel>Done</ng-template>\r\n            You are now done.\r\n            <div>\r\n              <button mat-button matStepperPrevious>Back</button>\r\n              <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n            </div>\r\n          </mat-step>\r\n        </mat-horizontal-stepper>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title class=\"p-b-20\">Stepper with editable steps</mat-card-title>\r\n        <button mat-raised-button (click)=\"isEditable = !isEditable\">\r\n          {{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}\r\n        </button>\r\n\r\n        <mat-horizontal-stepper linear #stepper>\r\n          <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\">\r\n            <form [formGroup]=\"firstFormGroup\">\r\n              <ng-template matStepLabel>Fill out your name</ng-template>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n              </mat-form-field>\r\n              <div>\r\n                <button mat-button matStepperNext>Next</button>\r\n              </div>\r\n            </form>\r\n          </mat-step>\r\n          <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\">\r\n            <form [formGroup]=\"secondFormGroup\">\r\n              <ng-template matStepLabel>Fill out your address</ng-template>\r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\r\n              </mat-form-field>\r\n              <div>\r\n                <button mat-button matStepperPrevious>Back</button>\r\n                <button mat-button matStepperNext>Next</button>\r\n              </div>\r\n            </form>\r\n          </mat-step>\r\n          <mat-step>\r\n            <ng-template matStepLabel>Done</ng-template>\r\n            You are now done.\r\n            <div>\r\n              <button mat-button matStepperPrevious>Back</button>\r\n              <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n            </div>\r\n          </mat-step>\r\n        </mat-horizontal-stepper>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/tabs/tabs.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/tabs/tabs.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Basic Tab </mat-card-title>\r\n        <mat-card-subtitle>Check the\r\n          <code class=\"\"><a href=\"https://material.angular.io/components/tabs/overview\">Official Component</a></code>\r\n        </mat-card-subtitle>\r\n      </mat-card-content>\r\n      <mat-tab-group>\r\n        <mat-tab label=\"Tab 1\">\r\n          <mat-card-content>Content 1</mat-card-content>\r\n        </mat-tab>\r\n        <mat-tab label=\"Tab 2\">\r\n          <mat-card-content>Content 2</mat-card-content>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Complex Tab Example (Responsive tab)</mat-card-title>\r\n      </mat-card-content>\r\n      <mat-tab-group class=\"demo-tab-group\">\r\n        <mat-tab label=\"Tab 1\">\r\n          <div class=\"demo-tab-content\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis\r\n            vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur\r\n            felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim\r\n            rutrum enim, vel tempor sapien arcu a tellus.\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Tab 2\">\r\n          <ng-template mat-tab-label>\r\n            ⭐\r\n          </ng-template>\r\n          <div class=\"demo-tab-content\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis\r\n            vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur\r\n            felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim\r\n            rutrum enim, vel tempor sapien arcu a tellus.\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Tab 3\" disabled>\r\n          No content\r\n        </mat-tab>\r\n        <mat-tab label=\"Tab 4\">\r\n          <div class=\"demo-tab-content\">\r\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque ac dui mattis\r\n            vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur\r\n            felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor, orci enim\r\n            rutrum enim, vel tempor sapien arcu a tellus.\r\n            <br />\r\n            <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue. Phasellus volutpat neque\r\n            ac dui mattis vulputate. Etiam consequat aliquam cursus. In sodales pretium ultrices. Maecenas lectus est, sollicitudin\r\n            consectetur felis nec, feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Tab 5\">\r\n          No content\r\n        </mat-tab>\r\n        <mat-tab label=\"Tab 6\">\r\n          No content\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Using tabs with a custom label template</mat-card-title>\r\n        <mat-tab-group>\r\n          <mat-tab>\r\n            <ng-template mat-tab-label>\r\n              <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n              First\r\n            </ng-template>\r\n            Content 1\r\n          </mat-tab>\r\n\r\n          <mat-tab>\r\n            <ng-template mat-tab-label>\r\n              <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n              Second\r\n            </ng-template>\r\n            Content 2\r\n          </mat-tab>\r\n\r\n          <mat-tab>\r\n            <ng-template mat-tab-label>\r\n              <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\r\n              Third\r\n            </ng-template>\r\n\r\n            Content 3\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tag group with dynamic height based on tab contents</mat-card-title>\r\n        <mat-tab-group dynamicHeight>\r\n          <mat-tab label=\"Short tab\">\r\n            <div class=\"example-small-box mat-elevation-z4\">\r\n              Small content\r\n            </div>\r\n          </mat-tab>\r\n          <mat-tab label=\"Long tab\">\r\n            <div class=\"example-large-box mat-elevation-z4\">\r\n              Large content\r\n            </div>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tab group with dynamically changing tabs</mat-card-title>\r\n        <div>\r\n          <span class=\"example-input-label\"> Selected tab index: </span>\r\n          <mat-form-field>\r\n            <input matInput type=\"number\" [formControl]=\"selected\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <div>\r\n          <button mat-raised-button\r\n                  class=\"example-add-tab-button\"\r\n                  (click)=\"addTab(selectAfterAdding.checked)\">\r\n            Add new tab\r\n          </button>\r\n          <mat-checkbox #selectAfterAdding> Select tab after adding </mat-checkbox>\r\n        </div>\r\n\r\n        <mat-tab-group [selectedIndex]=\"selected.value\"\r\n                       (selectedIndexChange)=\"selected.setValue($event)\">\r\n          <mat-tab *ngFor=\"let tab of tabs; let index = index\" [label]=\"tab\">\r\n            Contents for {{tab}} tab\r\n\r\n            <button mat-raised-button\r\n                    class=\"example-delete-tab-button\"\r\n                    [disabled]=\"tabs.length === 1\"\r\n                    (click)=\"removeTab(index)\">\r\n              Delete Tab\r\n            </button>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tab group with the headers on the bottom</mat-card-title>\r\n        <mat-tab-group headerPosition=\"below\">\r\n          <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n          <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n          <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tab group where the tab content is loaded lazily (when activated)</mat-card-title>\r\n        <mat-tab-group>\r\n          <mat-tab label=\"First\">\r\n            <ng-template matTabContent>\r\n              Content 1 - Loaded: {{getTimeLoaded(1) | date:'medium'}}\r\n            </ng-template>\r\n          </mat-tab>\r\n          <mat-tab label=\"Second\">\r\n            <ng-template matTabContent>\r\n              Content 2 - Loaded: {{getTimeLoaded(2) | date:'medium'}}\r\n            </ng-template>\r\n          </mat-tab>\r\n          <mat-tab label=\"Third\">\r\n            <ng-template matTabContent>\r\n              Content 3 - Loaded: {{getTimeLoaded(3) | date:'medium'}}\r\n            </ng-template>\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tab group with stretched labels</mat-card-title>\r\n        <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4\">\r\n          <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n          <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n          <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n        </mat-tab-group>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Customizing the theme options on the tab group</mat-card-title>\r\n        <div>\r\n          <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\r\n                                   value=\"primary\"\r\n                                   aria-label=\"Change color\">\r\n            <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\r\n            <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\r\n          </mat-button-toggle-group>\r\n          <span class=\"example-button-toggle-label\"> Color </span>\r\n        </div>\r\n\r\n        <div>\r\n          <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\r\n                                   value=\"primary\"\r\n                                   aria-label=\"Change color\">\r\n            <mat-button-toggle value=\"primary\"> Primary </mat-button-toggle>\r\n            <mat-button-toggle value=\"accent\"> Accent </mat-button-toggle>\r\n          </mat-button-toggle-group>\r\n          <span class=\"example-button-toggle-label\"> Background Color </span>\r\n        </div>\r\n\r\n        <mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\r\n          <mat-tab label=\"First\"> Content 1 </mat-tab>\r\n          <mat-tab label=\"Second\"> Content 2 </mat-tab>\r\n          <mat-tab label=\"Third\"> Content 3 </mat-tab>\r\n        </mat-tab-group>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tab group with asynchronously loading tab contents</mat-card-title>\r\n        <ng-container *ngIf=\"(asyncTabs | async) === null\">\r\n          Loading tabs...\r\n        </ng-container>\r\n\r\n        <mat-tab-group>\r\n          <mat-tab *ngFor=\"let tab of asyncTabs | async\">\r\n            <ng-template mat-tab-label>{{tab.label}}</ng-template>\r\n            {{tab.content}}\r\n          </mat-tab>\r\n        </mat-tab-group>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- row -->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <!-- Card column -->\r\n  <div fxFlex.gt-sm=\"100%\" fxFlex=\"100\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Basic use of the tab nav bar</mat-card-title>\r\n        <button mat-raised-button\r\n          class=\"example-action-button\"\r\n          (click)=\"toggleBackground()\">\r\n          Toggle background\r\n        </button>\r\n\r\n        <nav mat-tab-nav-bar [backgroundColor]=\"background\">\r\n          <a mat-tab-link *ngFor=\"let link of links\"\r\n             (click)=\"activeLink = link\"\r\n             [active]=\"activeLink == link\"> {{link}} </a>\r\n          <a mat-tab-link disabled>Disabled Link</a>\r\n        </nav>\r\n\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/toolbar/toolbar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/toolbar/toolbar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"no-shadow\">\r\n  <mat-card-content>\r\n    <mat-card-title>Toolbar</mat-card-title>\r\n    <mat-card-subtitle>matToolbar is a container for headers, titles, or actions.\r\n      <code class=\"\"><a href=\"https://material.angular.io/components/toolbar/overview\">Official Component</a></code>\r\n    </mat-card-subtitle>\r\n\r\n    <p>Basic toolbar:</p>\r\n    <mat-toolbar>My App</mat-toolbar>\r\n    <p>The primary color toolbar:</p>\r\n    <mat-toolbar color=\"primary\">\r\n      <span>Primary Toolbar</span>\r\n      <span fxFlex></span>\r\n      <button mat-button href=\"#\" mat-icon-button>\r\n        <mat-icon>search</mat-icon>\r\n      </button>\r\n      <button mat-button href=\"#\" mat-icon-button>\r\n        <mat-icon>more_vert</mat-icon>\r\n      </button>\r\n    </mat-toolbar>\r\n    <p>Multiple row</p>\r\n    <mat-toolbar>\r\n      <mat-toolbar-row>\r\n        <span>First Row</span>\r\n      </mat-toolbar-row>\r\n\r\n      <mat-toolbar-row>\r\n        <span>Second Row</span>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <p>Positining toolbar</p>\r\n    <mat-toolbar color=\"primary\">\r\n      <span>Application Title</span>\r\n\r\n      <!-- This fills the remaining space of the current row -->\r\n      <span class=\"example-fill-remaining-space\"></span>\r\n\r\n      <span>Right Aligned Text</span>\r\n    </mat-toolbar>\r\n    <p>An accent toolbar using the second toolbar row:</p>\r\n    <mat-toolbar color=\"accent\">\r\n      <mat-toolbar-row>\r\n        <span>Second Line Toolbar</span>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n    <p>A primary toolbar using the third toolbar row:</p>\r\n    <mat-toolbar class=\"bg-success\" color=\"warn\">\r\n      <mat-toolbar-row>\r\n        <span>Custom Toolbar</span>\r\n      </mat-toolbar-row>\r\n\r\n      <mat-toolbar-row>\r\n        <span>Second Line</span>\r\n        <span class=\"example-spacer\"></span>\r\n        <mat-icon class=\"example-icon\">verified_user</mat-icon>\r\n      </mat-toolbar-row>\r\n\r\n      <mat-toolbar-row>\r\n        <span>Third Line</span>\r\n        <span class=\"example-spacer\"></span>\r\n        <mat-icon class=\"example-icon\">favorite</mat-icon>\r\n        <mat-icon class=\"example-icon\">delete</mat-icon>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/material-component/tooltip/tooltip.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/material-component/tooltip/tooltip.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Basic Tooltip</mat-card-title>\r\n        <mat-card-subtitle>The Angular Material tooltip provides a text label that is displayed when the user hovers over or longpresses an\r\n          element. add\r\n          <code>matTooltip=\"yourtext\"</code> to any element </mat-card-subtitle>\r\n        <button mat-raised-button\r\n        matTooltip=\"Info about the action\"\r\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\r\n        Action\r\n      </button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<mat-card>\r\n  <mat-card-content>\r\n    <mat-card-title>Tooltip with custom position</mat-card-title>\r\n    <mat-card-subtitle>The Angular Material tooltip provides a text label that is displayed when the user hovers over or longpresses an element.</mat-card-subtitle>\r\n\r\n    <div class=\"example-tooltip-host\" matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\">\r\n      <span>Show tooltip</span>\r\n      <mat-form-field>\r\n        <mat-select class=\"example-select\" [(ngModel)]=\"position\">\r\n          <mat-option value=\"before\">Before</mat-option>\r\n          <mat-option value=\"after\">After</mat-option>\r\n          <mat-option value=\"above\">Above</mat-option>\r\n          <mat-option value=\"below\">Below</mat-option>\r\n          <mat-option value=\"left\">Left</mat-option>\r\n          <mat-option value=\"right\">Right</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tooltip that can have a custom class applied.</mat-card-title>\r\n        <button mat-raised-button\r\n              matTooltip=\"Info about the action\"\r\n              matTooltipClass=\"example-tooltip-red\"\r\n              aria-label=\"Button that shows a red tooltip\"\r\n              >\r\n        Red-tooltip Action\r\n      </button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tooltip with a show and hide delay</mat-card-title>\r\n        <mat-form-field class=\"example-user-input\">\r\n          <input matInput placeholder=\"Show delay (milliseconds)\"\r\n                 type=\"number\"\r\n                 aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\"\r\n                 [formControl]=\"showDelay\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"example-user-input\">\r\n          <input matInput placeholder=\"Hide delay (milliseconds)\"\r\n                 type=\"number\"\r\n                 aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\"\r\n                 [formControl]=\"hideDelay\">\r\n        </mat-form-field>\r\n\r\n        <button mat-raised-button\r\n                matTooltip=\"Info about the action\"\r\n                [matTooltipShowDelay]=\"showDelay.value\"\r\n                [matTooltipHideDelay]=\"hideDelay.value\"\r\n                aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\r\n          Action\r\n        </button>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tooltip that can be disabled</mat-card-title>\r\n        <button mat-raised-button\r\n        matTooltip=\"Info about the action\"\r\n        [matTooltipDisabled]=\"disabled.value\"\r\n        aria-label=\"Button that displays a tooltip that can be programatically disabled\">\r\n          Action\r\n        </button>\r\n\r\n        <mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\r\n          Tooltip disabled\r\n        </mat-checkbox>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tooltip that can be manually shown/hidden.</mat-card-title>\r\n        <div>\r\n          <span> Mouse over to </span>\r\n          <button mat-button\r\n                  (mouseenter)=\"tooltip.show()\"\r\n                  aria-label=\"Button that progamatically shows a tooltip on another button\"\r\n                  class=\"example-action-button\">\r\n            show\r\n          </button>\r\n          <button mat-button\r\n                  (mouseenter)=\"tooltip.hide()\"\r\n                  aria-label=\"Button that progamatically hides a tooltip on another button\"\r\n                  class=\"example-action-button\">\r\n            hide\r\n          </button>\r\n          <button mat-button\r\n                  (mouseenter)=\"tooltip.toggle()\"\r\n                  aria-label=\"Button that progamatically toggles a tooltip on another button to show/hide\"\r\n                  class=\"example-action-button\">\r\n            toggle show/hide\r\n          </button>\r\n        </div>\r\n\r\n        <button mat-raised-button #tooltip=\"matTooltip\"\r\n                matTooltip=\"Info about the action\"\r\n                matTooltipPosition=\"right\"\r\n                aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\r\n          Action\r\n        </button>\r\n\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tooltip with a changing message</mat-card-title>\r\n        <mat-form-field class=\"example-user-input\">\r\n          <input matInput placeholder=\"Tooltip message\" [formControl]=\"message\">\r\n        </mat-form-field>\r\n\r\n        <button mat-raised-button [matTooltip]=\"message.value\" aria-label=\"Button that displays a tooltip with a custom message\" class=\"m-l-20\">\r\n          Action\r\n        </button>\r\n\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============================================================== -->\r\n<!-- Fixed height Card Grid-->\r\n<!-- ============================================================== -->\r\n<div fxLayout=\"row wrap\">\r\n  <div fxFlex.gt-sm=\"100%\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n        <mat-card-title>Tooltip with a show and hide delay</mat-card-title>\r\n        <button mat-raised-button\r\n                matTooltip=\"By default, I delay\"\r\n                aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\r\n          Button with delay-default tooltip\r\n        </button>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/material-component/badge/badge.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/material-component/badge/badge.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9iYWRnZS9iYWRnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2JhZGdlL2JhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDZCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvYmFkZ2UvYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuIiwiLmV4YW1wbGUtYnV0dG9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/material-component/badge/badge.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-component/badge/badge.component.ts ***!
  \*************************************************************/
/*! exports provided: BadgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadgeComponent", function() { return BadgeComponent; });
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

var BadgeComponent = /** @class */ (function () {
    function BadgeComponent() {
    }
    BadgeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-badge',
            template: __webpack_require__(/*! raw-loader!./badge.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/badge/badge.component.html"),
            styles: [__webpack_require__(/*! ./badge.component.scss */ "./src/app/material-component/badge/badge.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BadgeComponent);
    return BadgeComponent;
}());



/***/ }),

/***/ "./src/app/material-component/buttons/buttons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/buttons/buttons.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9idXR0b25zL2J1dHRvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1idXR0b24tcm93IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuIiwiLmV4YW1wbGUtYnV0dG9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/material-component/buttons/buttons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/buttons/buttons.component.ts ***!
  \*****************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
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

var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! raw-loader!./buttons.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/buttons/buttons.component.html"),
            styles: [__webpack_require__(/*! ./buttons.component.scss */ "./src/app/material-component/buttons/buttons.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/material-component/cards/cards.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/material-component/cards/cards.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9jYXJkcy9jYXJkcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/material-component/cards/cards.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-component/cards/cards.component.ts ***!
  \*************************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
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

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! raw-loader!./cards.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.scss */ "./src/app/material-component/cards/cards.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/material-component/chips/chips.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/material-component/chips/chips.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-chip-list {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9jaGlwcy9jaGlwcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2NoaXBzL2NoaXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2NoaXBzL2NoaXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tY2hpcC1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iLCIuZGVtby1jaGlwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/material-component/chips/chips.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-component/chips/chips.component.ts ***!
  \*************************************************************/
/*! exports provided: ChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsComponent", function() { return ChipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ChipsComponent = /** @class */ (function () {
    function ChipsComponent() {
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // Enter, comma
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.fruits = [{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }];
        this.availableColors = [
            { name: 'none', color: 'gray' },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ChipsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chips',
            template: __webpack_require__(/*! raw-loader!./chips.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/chips/chips.component.html"),
            styles: [__webpack_require__(/*! ./chips.component.scss */ "./src/app/material-component/chips/chips.component.scss")]
        })
    ], ChipsComponent);
    return ChipsComponent;
}());



/***/ }),

/***/ "./src/app/material-component/dialog/dialog.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/dialog/dialog.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/material-component/dialog/dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/material-component/dialog/dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: DialogOverviewExampleDialogComponent, DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialogComponent", function() { return DialogOverviewExampleDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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


var DialogOverviewExampleDialogComponent = /** @class */ (function () {
    function DialogOverviewExampleDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogOverviewExampleDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-overview-example-dialog',
            template: "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"data.animal\" tabindex=\"2\">Ok</button>\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button>\n</div>"
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialogComponent);
    return DialogOverviewExampleDialogComponent;
}());

var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialog) {
        this.dialog = dialog;
    }
    DialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
    ]; };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/dialog/dialog.component.html"),
            styles: [__webpack_require__(/*! ./dialog.component.scss */ "./src/app/material-component/dialog/dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/material-component/expansion/expansion.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/material-component/expansion/expansion.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9leHBhbnNpb24vZXhwYW5zaW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvZXhwYW5zaW9uL2V4cGFuc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2V4cGFuc2lvbi9leHBhbnNpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xyXG4gIGZsZXgtYmFzaXM6IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iLCIuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgZmxleC1iYXNpczogMDtcbn1cblxuLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/material-component/expansion/expansion.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/expansion/expansion.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExpansionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionComponent", function() { return ExpansionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExpansionComponent = /** @class */ (function () {
    function ExpansionComponent() {
        this.panelOpenState = false;
        this.step = 0;
    }
    ExpansionComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ExpansionComponent.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionComponent.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expansion',
            template: __webpack_require__(/*! raw-loader!./expansion.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/expansion/expansion.component.html"),
            styles: [__webpack_require__(/*! ./expansion.component.scss */ "./src/app/material-component/expansion/expansion.component.scss")]
        })
    ], ExpansionComponent);
    return ExpansionComponent;
}());



/***/ }),

/***/ "./src/app/material-component/grid/grid.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-component/grid/grid.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-tile {\n  background: lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9ncmlkL2dyaWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L2dyaWQvZ3JpZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcclxufVxyXG4iLCJtYXQtZ3JpZC10aWxlIHtcbiAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/material-component/grid/grid.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-component/grid/grid.component.ts ***!
  \***********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GridComponent = /** @class */ (function () {
    function GridComponent() {
        this.tiles = [
            {
                text: 'One',
                cols: 3,
                rows: 1,
                color: 'lightblue'
            },
            {
                text: 'Two',
                cols: 1,
                rows: 2,
                color: 'lightgreen'
            },
            {
                text: 'Three',
                cols: 1,
                rows: 1,
                color: 'lightpink'
            },
            {
                text: 'Four',
                cols: 2,
                rows: 1,
                color: '#DDBDF1'
            }
        ];
    }
    GridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid',
            template: __webpack_require__(/*! raw-loader!./grid.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/grid/grid.component.html"),
            styles: [__webpack_require__(/*! ./grid.component.scss */ "./src/app/material-component/grid/grid.component.scss")]
        })
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/material-component/lists/lists.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/material-component/lists/lists.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9saXN0cy9saXN0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/material-component/lists/lists.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/material-component/lists/lists.component.ts ***!
  \*************************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ListsComponent = /** @class */ (function () {
    function ListsComponent() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
        this.messages = [
            {
                from: 'Nirav joshi (nbj@gmail.com)',
                image: 'assets/images/users/1.jpg',
                subject: 'Material angular',
                content: 'This is the material angular template'
            },
            {
                from: 'Sunil joshi (sbj@gmail.com)',
                image: 'assets/images/users/2.jpg',
                subject: 'Wrappixel',
                content: 'We have wrappixel launched'
            },
            {
                from: 'Vishal Bhatt (bht@gmail.com)',
                image: 'assets/images/users/3.jpg',
                subject: 'Task list',
                content: 'This is the latest task hasbeen done'
            }
        ];
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16')
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16')
            },
            {
                name: 'Work',
                updated: new Date('1/28/16')
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16')
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16')
            }
        ];
    }
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! raw-loader!./lists.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.scss */ "./src/app/material-component/lists/lists.component.scss")]
        })
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/material-component/material.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/material-component/material.module.ts ***!
  \*******************************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../demo-material-module */ "./src/app/demo-material-module.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _material_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material.routing */ "./src/app/material-component/material.routing.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/material-component/buttons/buttons.component.ts");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./badge/badge.component */ "./src/app/material-component/badge/badge.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/material-component/cards/cards.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/material-component/grid/grid.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/material-component/lists/lists.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/material-component/menu/menu.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/material-component/tabs/tabs.component.ts");
/* harmony import */ var _ripples_ripples_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ripples/ripples.component */ "./src/app/material-component/ripples/ripples.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/material-component/stepper/stepper.component.ts");
/* harmony import */ var _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./expansion/expansion.component */ "./src/app/material-component/expansion/expansion.component.ts");
/* harmony import */ var _chips_chips_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chips/chips.component */ "./src/app/material-component/chips/chips.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/material-component/toolbar/toolbar.component.ts");
/* harmony import */ var _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./progress-snipper/progress-snipper.component */ "./src/app/material-component/progress-snipper/progress-snipper.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/material-component/progress/progress.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/material-component/dialog/dialog.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/material-component/tooltip/tooltip.component.ts");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./snackbar/snackbar.component */ "./src/app/material-component/snackbar/snackbar.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/material-component/slider/slider.component.ts");
/* harmony import */ var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./slide-toggle/slide-toggle.component */ "./src/app/material-component/slide-toggle/slide-toggle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_material_routing__WEBPACK_IMPORTED_MODULE_9__["MaterialRoutes"]),
                _demo_material_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"]
            ],
            providers: [],
            entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_24__["DialogOverviewExampleDialogComponent"]],
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_10__["ButtonsComponent"],
                _badge_badge_component__WEBPACK_IMPORTED_MODULE_11__["BadgeComponent"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_12__["CardsComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_13__["GridComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_14__["ListsComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_16__["TabsComponent"],
                _ripples_ripples_component__WEBPACK_IMPORTED_MODULE_17__["RipplesComponent"],
                _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_18__["StepperComponent"],
                _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_19__["ExpansionComponent"],
                _chips_chips_component__WEBPACK_IMPORTED_MODULE_20__["ChipsComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_21__["ToolbarComponent"],
                _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_22__["ProgressSnipperComponent"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_23__["ProgressComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_24__["DialogComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_24__["DialogOverviewExampleDialogComponent"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_25__["TooltipComponent"],
                _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_26__["SnackbarComponent"],
                _slider_slider_component__WEBPACK_IMPORTED_MODULE_27__["SliderComponent"],
                _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_28__["SlideToggleComponent"]
            ]
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/material-component/material.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/material-component/material.routing.ts ***!
  \********************************************************/
/*! exports provided: MaterialRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialRoutes", function() { return MaterialRoutes; });
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/material-component/buttons/buttons.component.ts");
/* harmony import */ var _badge_badge_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge/badge.component */ "./src/app/material-component/badge/badge.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/material-component/cards/cards.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/material-component/grid/grid.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/material-component/lists/lists.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/material-component/menu/menu.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs/tabs.component */ "./src/app/material-component/tabs/tabs.component.ts");
/* harmony import */ var _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stepper/stepper.component */ "./src/app/material-component/stepper/stepper.component.ts");
/* harmony import */ var _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expansion/expansion.component */ "./src/app/material-component/expansion/expansion.component.ts");
/* harmony import */ var _chips_chips_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chips/chips.component */ "./src/app/material-component/chips/chips.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/material-component/toolbar/toolbar.component.ts");
/* harmony import */ var _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./progress-snipper/progress-snipper.component */ "./src/app/material-component/progress-snipper/progress-snipper.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/material-component/progress/progress.component.ts");
/* harmony import */ var _ripples_ripples_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ripples/ripples.component */ "./src/app/material-component/ripples/ripples.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/material-component/dialog/dialog.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/material-component/tooltip/tooltip.component.ts");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./snackbar/snackbar.component */ "./src/app/material-component/snackbar/snackbar.component.ts");
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./slider/slider.component */ "./src/app/material-component/slider/slider.component.ts");
/* harmony import */ var _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./slide-toggle/slide-toggle.component */ "./src/app/material-component/slide-toggle/slide-toggle.component.ts");



















var MaterialRoutes = [
    {
        path: '',
        children: [
            {
                path: 'button',
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_0__["ButtonsComponent"]
            },
            {
                path: 'badge',
                component: _badge_badge_component__WEBPACK_IMPORTED_MODULE_1__["BadgeComponent"]
            },
            {
                path: 'cards',
                component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_2__["CardsComponent"]
            },
            {
                path: 'grid',
                component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_3__["GridComponent"]
            },
            {
                path: 'lists',
                component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_4__["ListsComponent"]
            },
            {
                path: 'menu',
                component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"]
            },
            {
                path: 'tabs',
                component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"]
            },
            {
                path: 'ripples',
                component: _ripples_ripples_component__WEBPACK_IMPORTED_MODULE_13__["RipplesComponent"]
            },
            {
                path: 'stepper',
                component: _stepper_stepper_component__WEBPACK_IMPORTED_MODULE_7__["StepperComponent"]
            },
            {
                path: 'expansion',
                component: _expansion_expansion_component__WEBPACK_IMPORTED_MODULE_8__["ExpansionComponent"]
            },
            {
                path: 'chips',
                component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_9__["ChipsComponent"]
            },
            {
                path: 'toolbar',
                component: _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["ToolbarComponent"]
            },
            {
                path: 'progress-snipper',
                component: _progress_snipper_progress_snipper_component__WEBPACK_IMPORTED_MODULE_11__["ProgressSnipperComponent"]
            },
            {
                path: 'progress',
                component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_12__["ProgressComponent"]
            },
            {
                path: 'dialog',
                component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DialogComponent"]
            },
            {
                path: 'tooltip',
                component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_15__["TooltipComponent"]
            },
            {
                path: 'snackbar',
                component: _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_16__["SnackbarComponent"]
            },
            {
                path: 'slider',
                component: _slider_slider_component__WEBPACK_IMPORTED_MODULE_17__["SliderComponent"]
            },
            {
                path: 'slide-toggle',
                component: _slide_toggle_slide_toggle_component__WEBPACK_IMPORTED_MODULE_18__["SlideToggleComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/material-component/menu/menu.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-component/menu/menu.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/material-component/menu/menu.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-component/menu/menu.component.ts ***!
  \***********************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/material-component/menu/menu.component.scss")]
        })
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/material-component/progress-snipper/progress-snipper.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/material-component/progress-snipper/progress-snipper.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9wcm9ncmVzcy1zbmlwcGVyL3Byb2dyZXNzLXNuaXBwZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/material-component/progress-snipper/progress-snipper.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/material-component/progress-snipper/progress-snipper.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ProgressSnipperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSnipperComponent", function() { return ProgressSnipperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressSnipperComponent = /** @class */ (function () {
    function ProgressSnipperComponent() {
        this.color = 'warn';
        this.mode = 'determinate';
        this.value = 50;
    }
    ProgressSnipperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snipper',
            template: __webpack_require__(/*! raw-loader!./progress-snipper.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/progress-snipper/progress-snipper.component.html"),
            styles: [__webpack_require__(/*! ./progress-snipper.component.scss */ "./src/app/material-component/progress-snipper/progress-snipper.component.scss")]
        })
    ], ProgressSnipperComponent);
    return ProgressSnipperComponent;
}());



/***/ }),

/***/ "./src/app/material-component/progress/progress.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/progress/progress.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: -webkit-box;\n  display: flex;\n  align-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWF0ZXJpYWwtY29tcG9uZW50L3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaDIge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuIiwiLmV4YW1wbGUtaDIge1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/material-component/progress/progress.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/progress/progress.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressComponent = /** @class */ (function () {
    function ProgressComponent() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! raw-loader!./progress.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.scss */ "./src/app/material-component/progress/progress.component.scss")]
        })
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/material-component/ripples/ripples.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/ripples/ripples.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-ripple-container {\n  cursor: pointer;\n  text-align: center;\n  width: 300px;\n  height: 300px;\n  line-height: 300px;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n/** Styles to make the demo look better. */\n\n.example-ripple-checkbox {\n  margin: 6px 12px 6px 0;\n}\n\n.example-ripple-form-field {\n  margin: 0 12px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9yaXBwbGVzL3JpcHBsZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9yaXBwbGVzL3JpcHBsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFFQSx1QkFBQTtFQUNBLHdDQUFBO0FDRkY7O0FES0EsMENBQUE7O0FBQ0E7RUFDRSxzQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9yaXBwbGVzL3JpcHBsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1yaXBwbGUtY29udGFpbmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBsaW5lLWhlaWdodDogMzAwcHg7XHJcblxyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qKiBTdHlsZXMgdG8gbWFrZSB0aGUgZGVtbyBsb29rIGJldHRlci4gKi9cclxuLmV4YW1wbGUtcmlwcGxlLWNoZWNrYm94IHtcclxuICBtYXJnaW46IDZweCAxMnB4IDZweCAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1yaXBwbGUtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luOiAwIDEycHggMCAwO1xyXG59XHJcbiIsIi5leGFtcGxlLXJpcHBsZS1jb250YWluZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDMwMHB4O1xuICBsaW5lLWhlaWdodDogMzAwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiogU3R5bGVzIHRvIG1ha2UgdGhlIGRlbW8gbG9vayBiZXR0ZXIuICovXG4uZXhhbXBsZS1yaXBwbGUtY2hlY2tib3gge1xuICBtYXJnaW46IDZweCAxMnB4IDZweCAwO1xufVxuXG4uZXhhbXBsZS1yaXBwbGUtZm9ybS1maWVsZCB7XG4gIG1hcmdpbjogMCAxMnB4IDAgMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/material-component/ripples/ripples.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/ripples/ripples.component.ts ***!
  \*****************************************************************/
/*! exports provided: RipplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RipplesComponent", function() { return RipplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RipplesComponent = /** @class */ (function () {
    function RipplesComponent() {
        this.centered = false;
        this.disabled = false;
        this.unbounded = false;
    }
    RipplesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ripples',
            template: __webpack_require__(/*! raw-loader!./ripples.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/ripples/ripples.component.html"),
            styles: [__webpack_require__(/*! ./ripples.component.scss */ "./src/app/material-component/ripples/ripples.component.scss")]
        })
    ], RipplesComponent);
    return RipplesComponent;
}());



/***/ }),

/***/ "./src/app/material-component/slide-toggle/slide-toggle.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/material-component/slide-toggle/slide-toggle.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: -webkit-box;\n  display: flex;\n  align-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaDIge1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbiIsIi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5leGFtcGxlLW1hcmdpbiB7XG4gIG1hcmdpbjogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/material-component/slide-toggle/slide-toggle.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/material-component/slide-toggle/slide-toggle.component.ts ***!
  \***************************************************************************/
/*! exports provided: SlideToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideToggleComponent", function() { return SlideToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideToggleComponent = /** @class */ (function () {
    function SlideToggleComponent() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    SlideToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slide-toggle',
            template: __webpack_require__(/*! raw-loader!./slide-toggle.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/slide-toggle/slide-toggle.component.html"),
            styles: [__webpack_require__(/*! ./slide-toggle.component.scss */ "./src/app/material-component/slide-toggle/slide-toggle.component.scss")]
        })
    ], SlideToggleComponent);
    return SlideToggleComponent;
}());



/***/ }),

/***/ "./src/app/material-component/slider/slider.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/slider/slider.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: inline;\n  align-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n\n.mat-slider-horizontal {\n  width: 300px;\n}\n\n.mat-slider-vertical {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tYXRlcmlhbC1jb21wb25lbnQvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWgyIHtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG59XHJcblxyXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbi5tYXQtc2xpZGVyLXZlcnRpY2FsIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcbiIsIi5leGFtcGxlLWgyIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uZXhhbXBsZS1zZWN0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmV4YW1wbGUtbWFyZ2luIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0LXNsaWRlci12ZXJ0aWNhbCB7XG4gIGhlaWdodDogMzAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/material-component/slider/slider.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/material-component/slider/slider.component.ts ***!
  \***************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.val = 50;
        this.min = 0;
        this.max = 100;
        // 2
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this._tickInterval = 1;
    }
    Object.defineProperty(SliderComponent.prototype, "tickInterval", {
        get: function () {
            return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
        },
        set: function (value) {
            this._tickInterval = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceNumberProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.scss */ "./src/app/material-component/slider/slider.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/material-component/snackbar/snackbar.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/material-component/snackbar/snackbar.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/material-component/snackbar/snackbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/snackbar/snackbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBar) {
        this.snackBar = snackBar;
    }
    SnackbarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    };
    SnackbarComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }
    ]; };
    SnackbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! raw-loader!./snackbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/material-component/snackbar/snackbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/material-component/stepper/stepper.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/stepper/stepper.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC9zdGVwcGVyL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/material-component/stepper/stepper.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/stepper/stepper.component.ts ***!
  \*****************************************************************/
/*! exports provided: StepperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperComponent", function() { return StepperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StepperComponent = /** @class */ (function () {
    function StepperComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
        this.isOptional = false;
        this.isEditable = false;
    }
    StepperComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    StepperComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }
    ]; };
    StepperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stepper',
            template: __webpack_require__(/*! raw-loader!./stepper.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/stepper/stepper.component.html"),
            styles: [__webpack_require__(/*! ./stepper.component.scss */ "./src/app/material-component/stepper/stepper.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StepperComponent);
    return StepperComponent;
}());



/***/ }),

/***/ "./src/app/material-component/tabs/tabs.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/material-component/tabs/tabs.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-tab-group {\n  border: 1px solid #e8e8e8;\n}\n\n.demo-tab-content {\n  padding: 24px;\n}\n\n.example-small-box, .example-large-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 16px;\n  padding: 16px;\n  border-radius: 8px;\n}\n\n.example-small-box {\n  height: 100px;\n  width: 100px;\n}\n\n.example-large-box {\n  height: 300px;\n  width: 300px;\n}\n\n.example-tab-icon {\n  margin-right: 8px;\n}\n\n.example-input-label,\n.example-add-tab-button,\n.example-delete-tab-button {\n  margin: 8px;\n}\n\n.example-stretched-tabs {\n  max-width: 800px;\n}\n\n.example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FERUE7OztFQUdFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVtby10YWItZ3JvdXAge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbn1cclxuXHJcbi5kZW1vLXRhYi1jb250ZW50IHtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zbWFsbC1ib3gsIC5leGFtcGxlLWxhcmdlLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc21hbGwtYm94IHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtbGFyZ2UtYm94IHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtdGFiLWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1pbnB1dC1sYWJlbCxcclxuLmV4YW1wbGUtYWRkLXRhYi1idXR0b24sXHJcbi5leGFtcGxlLWRlbGV0ZS10YWItYnV0dG9uIHtcclxuICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3RyZXRjaGVkLXRhYnMge1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJ1dHRvbi10b2dnbGUtbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDE2cHg7XHJcbn0iLCIuZGVtby10YWItZ3JvdXAge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZThlOGU4O1xufVxuXG4uZGVtby10YWItY29udGVudCB7XG4gIHBhZGRpbmc6IDI0cHg7XG59XG5cbi5leGFtcGxlLXNtYWxsLWJveCwgLmV4YW1wbGUtbGFyZ2UtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uZXhhbXBsZS1zbWFsbC1ib3gge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5leGFtcGxlLWxhcmdlLWJveCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmV4YW1wbGUtdGFiLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmV4YW1wbGUtaW5wdXQtbGFiZWwsXG4uZXhhbXBsZS1hZGQtdGFiLWJ1dHRvbixcbi5leGFtcGxlLWRlbGV0ZS10YWItYnV0dG9uIHtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5leGFtcGxlLXN0cmV0Y2hlZC10YWJzIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXRvZ2dsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/material-component/tabs/tabs.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/material-component/tabs/tabs.component.ts ***!
  \***********************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = ['First', 'Second', 'Third'];
        this.selected = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0);
        this.tabLoadTimes = [];
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = '';
        this.asyncTabs = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            setTimeout(function () {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' }
                ]);
            }, 1000);
        });
    }
    TabsComponent.prototype.addTab = function (selectAfterAdding) {
        this.tabs.push('New');
        if (selectAfterAdding) {
            this.selected.setValue(this.tabs.length - 1);
        }
    };
    TabsComponent.prototype.removeTab = function (index) {
        this.tabs.splice(index, 1);
    };
    TabsComponent.prototype.getTimeLoaded = function (index) {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }
        return this.tabLoadTimes[index];
    };
    TabsComponent.prototype.toggleBackground = function () {
        this.background = this.background ? '' : 'primary';
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.scss */ "./src/app/material-component/tabs/tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/material-component/toolbar/toolbar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/toolbar/toolbar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-shadow mat-toolbar {\n  box-shadow: none;\n}\n\n.example-fill-remaining-space {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.example-icon {\n  padding: 0 14px;\n}\n\n.example-spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBRENBO0VBR0UsbUJBQUE7VUFBQSxjQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tc2hhZG93IG1hdC10b29sYmFyIHtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAvLyBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXHJcbiAgLy8gRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC5cclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG4uZXhhbXBsZS1pY29uIHtcclxuICBwYWRkaW5nOiAwIDE0cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuIiwiLm5vLXNoYWRvdyBtYXQtdG9vbGJhciB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5leGFtcGxlLWljb24ge1xuICBwYWRkaW5nOiAwIDE0cHg7XG59XG5cbi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/material-component/toolbar/toolbar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/toolbar/toolbar.component.ts ***!
  \*****************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
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

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () { };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/material-component/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/material-component/tooltip/tooltip.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/material-component/tooltip/tooltip.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-tooltip-host {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 50px;\n}\n\n.example-select {\n  margin: 0 10px;\n}\n\n.example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-red {\n  background: #b71c1c;\n}\n\n.example-user-input {\n  display: block;\n  width: 150px;\n}\n\n.example-disabled-checkbox {\n  margin-left: 8px;\n}\n\n.example-action-button {\n  margin-top: 16px;\n}\n\n.example-user-input {\n  margin-right: 8px;\n}\n\n.example-button {\n  display: block;\n  width: 48px;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oZXJvL0RvY3VtZW50cy9Qcm9qZWN0cy9Bbmd1bGFyL0hlcm9BcHBzRG9jdW1lbnRhdGlvbi9zcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtFQUFBLG9CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtBQ0VGOztBRENBO0VBQ0UsaUJBQUE7QUNFRjs7QURDQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaWFsLWNvbXBvbmVudC90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS10b29sdGlwLWhvc3Qge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1zZWxlY3Qge1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5leGFtcGxlLWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLmV4YW1wbGUtdG9vbHRpcC1yZWQge1xyXG4gIGJhY2tncm91bmQ6ICNiNzFjMWM7XHJcbn1cclxuXHJcbi5leGFtcGxlLXVzZXItaW5wdXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZGlzYWJsZWQtY2hlY2tib3gge1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWFjdGlvbi1idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLXVzZXItaW5wdXQge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIG1hcmdpbjogODBweCBhdXRvIDQwMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4iLCIuZXhhbXBsZS10b29sdGlwLWhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1MHB4O1xufVxuXG4uZXhhbXBsZS1zZWxlY3Qge1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmV4YW1wbGUtdG9vbHRpcC1yZWQge1xuICBiYWNrZ3JvdW5kOiAjYjcxYzFjO1xufVxuXG4uZXhhbXBsZS11c2VyLWlucHV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLmV4YW1wbGUtZGlzYWJsZWQtY2hlY2tib3gge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZXhhbXBsZS1hY3Rpb24tYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmV4YW1wbGUtdXNlci1pbnB1dCB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uZXhhbXBsZS1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQ4cHg7XG4gIG1hcmdpbjogODBweCBhdXRvIDQwMHB4O1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/material-component/tooltip/tooltip.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/material-component/tooltip/tooltip.component.ts ***!
  \*****************************************************************/
/*! exports provided: myCustomTooltipDefaults, TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myCustomTooltipDefaults", function() { return myCustomTooltipDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/** Custom options the configure the tooltip's default show/hide delays. */
var myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
var TooltipComponent = /** @class */ (function () {
    function TooltipComponent() {
        this.position = 'before';
        this.showDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1000);
        this.hideDelay = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](2000);
        this.disabled = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Info about the action');
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.positionOptions[0]);
    }
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__(/*! raw-loader!./tooltip.component.html */ "./node_modules/raw-loader/index.js!./src/app/material-component/tooltip/tooltip.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_TOOLTIP_DEFAULT_OPTIONS"], useValue: myCustomTooltipDefaults }
            ],
            styles: [__webpack_require__(/*! ./tooltip.component.scss */ "./src/app/material-component/tooltip/tooltip.component.scss")]
        })
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ })

}]);
//# sourceMappingURL=material-component-material-module-es5.js.map