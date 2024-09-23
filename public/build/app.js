(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$":
/*!*******************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.(j%7Ct)sx?$ ***!
  \*******************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js",
	"./main_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/main_controller.js",
	"./registration_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/registration_controller.js",
	"./resetpassword_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/resetpassword_controller.js",
	"./security_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/security_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-turbo--turbo-core': class extends _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_0__.Controller {
      constructor(context) {
          super(context);
          this.__stimulusLazyController = true;
      }
      initialize() {
          if (this.application.controllers.find((controller) => {
              return controller.identifier === this.identifier && controller.__stimulusLazyController;
          })) {
              return;
          }
          Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_hotwired_turbo_dist_turbo_es2017-esm_js"), __webpack_require__.e("vendor_symfony_ux-turbo_assets_dist_turbo_controller_js")]).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-turbo/dist/turbo_controller.js */ "./vendor/symfony/ux-turbo/assets/dist/turbo_controller.js")).then((controller) => {
              this.application.register(this.identifier, controller.default);
          });
      }
  },
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }


















function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    _classCallCheck(this, _default);
    return _callSuper(this, _default, arguments);
  }
  _inherits(_default, _Controller);
  return _createClass(_default, [{
    key: "connect",
    value: function connect() {
      console.log("Hello World!");
    }
  }]);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_18__.Controller);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/main_controller.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/main_controller.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array-buffer.constructor.js */ "./node_modules/core-js/modules/es.array-buffer.constructor.js");
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.data-view.js */ "./node_modules/core-js/modules/es.data-view.js");
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last.js */ "./node_modules/core-js/modules/es.typed-array.find-last.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last-index.js */ "./node_modules/core-js/modules/es.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var core_js_modules_esnext_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.to-reversed.js */ "./node_modules/core-js/modules/esnext.typed-array.to-reversed.js");
/* harmony import */ var core_js_modules_esnext_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var core_js_modules_esnext_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.to-sorted.js */ "./node_modules/core-js/modules/esnext.typed-array.to-sorted.js");
/* harmony import */ var core_js_modules_esnext_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var core_js_modules_esnext_typed_array_with_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.with.js */ "./node_modules/core-js/modules/esnext.typed-array.with.js");
/* harmony import */ var core_js_modules_esnext_typed_array_with_js__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_with_js__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var core_js_modules_web_atob_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! core-js/modules/web.atob.js */ "./node_modules/core-js/modules/web.atob.js");
/* harmony import */ var core_js_modules_web_atob_js__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_atob_js__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! core-js/modules/web.btoa.js */ "./node_modules/core-js/modules/web.btoa.js");
/* harmony import */ var core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! core-js/modules/web.dom-exception.constructor.js */ "./node_modules/core-js/modules/web.dom-exception.constructor.js");
/* harmony import */ var core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! core-js/modules/web.dom-exception.stack.js */ "./node_modules/core-js/modules/web.dom-exception.stack.js");
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! core-js/modules/web.dom-exception.to-string-tag.js */ "./node_modules/core-js/modules/web.dom-exception.to-string-tag.js");
/* harmony import */ var core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_83__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_84__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_85__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_86__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../js/utils */ "./assets/js/utils.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../service/service */ "./assets/service/service.js");
/* harmony import */ var _ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! @ffmpeg/ffmpeg */ "./node_modules/@ffmpeg/ffmpeg/dist/esm/index.js");
/* harmony import */ var _ffmpeg_util__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! @ffmpeg/util */ "./node_modules/@ffmpeg/util/dist/esm/index.js");
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! viewerjs */ "./node_modules/viewerjs/dist/viewer.js");
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_92___default = /*#__PURE__*/__webpack_require__.n(viewerjs__WEBPACK_IMPORTED_MODULE_92__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! pusher-js */ "./node_modules/pusher-js/dist/web/pusher.js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_93___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_93__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_94___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_94__);
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! wavesurfer.js */ "./node_modules/wavesurfer.js/dist/wavesurfer.esm.js");
/* harmony import */ var wavesurfer_js_dist_plugins_record_esm_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! wavesurfer.js/dist/plugins/record.esm.js */ "./node_modules/wavesurfer.js/dist/plugins/record.esm.js");
/* harmony import */ var javascript_time_ago__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! javascript-time-ago */ "./node_modules/javascript-time-ago/modules/TimeAgo.js");
/* harmony import */ var heic2any__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! heic2any */ "./node_modules/heic2any/dist/heic2any.js");
/* harmony import */ var heic2any__WEBPACK_IMPORTED_MODULE_97___default = /*#__PURE__*/__webpack_require__.n(heic2any__WEBPACK_IMPORTED_MODULE_97__);
/* harmony import */ var javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! javascript-time-ago/locale/en */ "./node_modules/javascript-time-ago/locale/en.json.js");
/* harmony import */ var emoji_picker_element__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! emoji-picker-element */ "./node_modules/emoji-picker-element/index.js");
/* harmony import */ var viewerjs_dist_viewer_css__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! viewerjs/dist/viewer.css */ "./node_modules/viewerjs/dist/viewer.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }























































































function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }















var MessageType = /*#__PURE__*/function () {
  function MessageType() {
    _classCallCheck(this, MessageType);
  }
  return _createClass(MessageType, null, [{
    key: "TEXT",
    get: function get() {
      return TEXT;
    }
  }, {
    key: "IMAGE",
    get: function get() {
      return IMAGE;
    }
  }, {
    key: "GIF",
    get: function get() {
      return GIF;
    }
  }]);
}();
_defineProperty(MessageType, "TEXT", 0);
_defineProperty(MessageType, "IMAGE", 1);
_defineProperty(MessageType, "GIF", 2);
_defineProperty(MessageType, "AUDIO", 3);
var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    var _this;
    _classCallCheck(this, _default);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _default, [].concat(args));
    _defineProperty(_this, "connect", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response, users;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            javascript_time_ago__WEBPACK_IMPORTED_MODULE_100__["default"].addDefaultLocale(javascript_time_ago_locale_en__WEBPACK_IMPORTED_MODULE_101__["default"]);
            (pusher_js__WEBPACK_IMPORTED_MODULE_93___default().logToConsole) = false;
            _this.pusher = new (pusher_js__WEBPACK_IMPORTED_MODULE_93___default())('7c4d952c51d2be9a8302', {
              cluster: 'ap1',
              authEndpoint: '/pusher_auth',
              auth: {
                params: {
                  'uid': _this.uidValue
                }
              }
            });
            _this.page = 1;
            _this.pageSize = 20;
            _this.service = new _service_service__WEBPACK_IMPORTED_MODULE_89__["default"]();
            _this.timeAgo = new javascript_time_ago__WEBPACK_IMPORTED_MODULE_100__["default"]('en-US');
            _this.audioBlob = null;
            _this.isVoiceRecording = false;
            _this.isCloseVoiceRecording = true;
            _this.isReceivedFirstMessage = false;
            _this.isLockInfiniteScrolling = false;
            _this.usersOnlineMap = new Map();
            _this.usersMap = new Map();
            _this.toSendImagesMap = new Map();
            _this.ffmpeg = new _ffmpeg_ffmpeg__WEBPACK_IMPORTED_MODULE_90__.FFmpeg();
            _this.viewer = new (viewerjs__WEBPACK_IMPORTED_MODULE_92___default())(document.getElementById("viewerjs-images-container"));
            _this.forwardUserMessageType = null;
            _this.forwardUserMessageContent = null;
            _this.forwardUserMessageBlob = null;
            _this.forwardUserMessageInput = null;
            _this.forwardUserMessageWidth = null;
            _this.forwardUserMessageHeight = null;
            _this.forwardUserMessageMimeType = null;
            _this.forwardUserMessageExtension = null;
            _this.forwardUserMessageOutput = null;
            _context2.t0 = _this.ffmpeg;
            _context2.next = 29;
            return (0,_ffmpeg_util__WEBPACK_IMPORTED_MODULE_91__.toBlobURL)('/ffmpeg-core.js', 'text/javascript');
          case 29:
            _context2.t1 = _context2.sent;
            _context2.next = 32;
            return (0,_ffmpeg_util__WEBPACK_IMPORTED_MODULE_91__.toBlobURL)('/ffmpeg-core.wasm', 'application/wasm');
          case 32:
            _context2.t2 = _context2.sent;
            _context2.t3 = {
              coreURL: _context2.t1,
              wasmURL: _context2.t2
            };
            _context2.next = 36;
            return _context2.t0.load.call(_context2.t0, _context2.t3);
          case 36:
            _context2.next = 38;
            return _this.service.getUsers(_this.uidValue);
          case 38:
            response = _context2.sent;
            if (!response.ok) {
              _context2.next = 61;
              break;
            }
            _context2.next = 42;
            return response.json();
          case 42:
            users = _context2.sent;
            _this.setDarkModeToggle();
            _this.setEmojiPickerElement();
            _this.setImageButtonClick();
            _this.setOnChangeImageFileInput();
            _this.setSendTextButtonClick();
            _this.setSendVoiceButtonClick();
            _this.setSendImageButtonClick();
            _this.setUserPusherPresenceChannel();
            _this.setSendMessageChatboxInputKeyDown();
            _this.setVoiceChatRecording();
            _this.setChatboxEventListener();
            users.forEach(/*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(user) {
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      _this.usersMap.set(user.id, user);
                      _this.setForwardUserMessage(user);
                      _context.next = 4;
                      return _this.setSidebarUserClickEvent(user);
                    case 4:
                      _context.next = 6;
                      return _this.setUserPusherMessagesChannel(user);
                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }());
            _context2.next = 57;
            return _this.setEncryptionDetails();
          case 57:
            _context2.next = 59;
            return _this.setUserLastMessage();
          case 59:
            _context2.next = 61;
            return _this.setChatboxInfiniteScrolling();
          case 61:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    })));
    _defineProperty(_this, "setEncryptionDetails", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var randomBytes, passphrase, keypair, publickey, privatekey;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (_this.passphraseValue) {
              _context3.next = 13;
              break;
            }
            randomBytes = crypto_js__WEBPACK_IMPORTED_MODULE_94___default().lib.WordArray.random(16);
            passphrase = randomBytes.toString((crypto_js__WEBPACK_IMPORTED_MODULE_94___default().enc).Hex);
            _context3.next = 5;
            return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].generateEncryptionKeyPair();
          case 5:
            keypair = _context3.sent;
            publickey = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].arrayBufferToBase64(keypair.publicKey);
            privatekey = crypto_js__WEBPACK_IMPORTED_MODULE_94___default().AES.encrypt(_js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].arrayBufferToBase64(keypair.privateKey), passphrase);
            _context3.next = 10;
            return _this.service.setEncryptionDetails(_this.uidValue, publickey, privatekey, passphrase);
          case 10:
            window.location.href = "/";
            _context3.next = 15;
            break;
          case 13:
            _this.currentUserPublickey = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].base64ToArrayBuffer(_this.publickeyValue);
            _this.currentUserPrivatekey = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].base64ToArrayBuffer(crypto_js__WEBPACK_IMPORTED_MODULE_94___default().AES.decrypt(_this.privatekeyValue, _this.passphraseValue).toString((crypto_js__WEBPACK_IMPORTED_MODULE_94___default().enc).Utf8));
          case 15:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    })));
    _defineProperty(_this, "setUserPusherMessagesChannel", /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(user) {
        var chatbox, channel;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              chatbox = document.getElementById('chatbox');
              channel = _this.pusher.subscribe("".concat(user.id, "-").concat(_this.currentUserValue.id));
              channel.bind("messages/".concat(user.id, "/").concat(_this.currentUserValue.id), /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
                  var id, content, isSeen, _JSON$parse, sender, receiver, messageData, messageElement, firstname, _firstname;
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        id = data.id, content = data.content, isSeen = data.isSeen;
                        _JSON$parse = JSON.parse(atob(content)), sender = _JSON$parse.sender, receiver = _JSON$parse.receiver;
                        _context4.t0 = JSON;
                        _context4.next = 5;
                        return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].decryptMessage(_this.currentUserPrivatekey, receiver);
                      case 5:
                        _context4.t1 = _context4.sent;
                        messageData = _context4.t0.parse.call(_context4.t0, _context4.t1);
                        if (messageData.sender == _this.userToChatId) {
                          messageElement = null;
                          if (messageData.type == MessageType.TEXT) {
                            messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createIncomingMessageTextElement(messageData.content, user.userDetails.avatar, messageData.timestamp, _this.timeAgo);
                          } else if (messageData.type == MessageType.AUDIO) {
                            messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createIncomingMessageVoiceElement(messageData.content, user.userDetails.avatar, messageData.timestamp, _this.timeAgo);
                          } else if (messageData.type == MessageType.IMAGE) {
                            messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createIncommingMessageImageElement(messageData.content, user.userDetails.avatar, messageData.timestamp, _this.timeAgo);
                            _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setViewerJsImageElement(messageElement, _this.viewer);
                          }
                          messageElement.setAttribute('messageId', id);
                          messageElement.setAttribute('messageData', JSON.stringify(messageData));
                          messageElement.copyTextMessageCallback = _this.copyTextMessageCallback;
                          messageElement.forwardMessageCallback = _this.forwardMessageCallback;
                          _this.chatboxScrollToBottom();
                          chatbox.appendChild(messageElement);
                          _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].reOrderLastFourChatboxElements();
                          _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxMessageAvatarHidden();
                          _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxDividerTimestamp();
                          _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxMessageBorderAndMargin();
                        }
                        if (messageData.type == MessageType.TEXT) {
                          _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(messageData.sender, messageData.content);
                        } else if (messageData.type == MessageType.AUDIO) {
                          firstname = _this.usersMap.get(messageData.sender).userDetails.firstname;
                          _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(messageData.sender, firstname + ' sent an audio');
                        } else if (messageData.type == MessageType.IMAGE) {
                          _firstname = _this.usersMap.get(messageData.sender).userDetails.firstname;
                          _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(messageData.sender, _firstname + ' sent an image');
                        }
                        _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageTimestamp(messageData.sender, messageData.timestamp);
                        _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageTimeAgo(messageData.sender, messageData.timestamp, _this.timeAgo);
                        _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].reOrderUsersListIfNewMessageIsBeingSentOrReceived(messageData.sender);
                      case 12:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function (_x3) {
                  return _ref5.apply(this, arguments);
                };
              }());
              _context5.next = 5;
              return _this.sleep(1);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x2) {
        return _ref4.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "setUserPusherPresenceChannel", function () {
      var myThis = _this;
      var channel = _this.pusher.subscribe('presence-online-users');
      channel.bind('pusher:subscription_succeeded', function (members) {
        members.each(function (member) {
          var id = member.info.id;
          var userOnlineStatus = document.getElementById("user".concat(id, "-online-status"));
          userOnlineStatus.classList.remove('bg-red-400');
          userOnlineStatus.classList.add('bg-green-400');
          myThis.usersOnlineMap.set(id, true);
        });
      });
      channel.bind('pusher:member_added', function (member) {
        var id = member.info.id;
        var userOnlineStatus = document.getElementById("user".concat(id, "-online-status"));
        userOnlineStatus.classList.remove('bg-red-400');
        userOnlineStatus.classList.add('bg-green-400');
        if (id == myThis.userToChatId) {
          var userToChatOnlineStatus = document.getElementById('usertochat-online-status');
          var userToChatOnlineText = document.getElementById('usertochat-online-text');
          userToChatOnlineStatus.classList.remove('bg-red-400');
          userToChatOnlineStatus.classList.add('bg-green-400');
          userToChatOnlineText.textContent = "Active now";
        }
        myThis.usersOnlineMap.set(id, true);
      });
      channel.bind('pusher:member_removed', function (member) {
        var id = member.info.id;
        var userOnlineStatus = document.getElementById("user".concat(id, "-online-status"));
        userOnlineStatus.classList.add('bg-red-400');
        userOnlineStatus.classList.remove('bg-green-400');
        if (id == myThis.userToChatId) {
          var userToChatOnlineStatus = document.getElementById('usertochat-online-status');
          var userToChatOnlineText = document.getElementById('usertochat-online-text');
          userToChatOnlineStatus.classList.remove('bg-green-400');
          userToChatOnlineStatus.classList.add('bg-red-400');
          userToChatOnlineText.textContent = "Offline";
        }
        myThis.usersOnlineMap.set(id, false);
      });
    });
    _defineProperty(_this, "setSidebarUserClickEvent", /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(user) {
        var userElement;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              userElement = document.getElementById("user".concat(user.id)); // sidebar user list element   
              userElement.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                var name, avatar, publickey;
                return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                  while (1) switch (_context6.prev = _context6.next) {
                    case 0:
                      name = "".concat(user.userDetails.firstname, " ").concat(user.userDetails.lastname);
                      avatar = user.userDetails.avatar;
                      publickey = user.userDetails.publickey.publickey;
                      _this.userTochatPublickey = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].base64ToArrayBuffer(publickey);
                      _this.userToChatId = user.id;
                      _this.isSidebarUserClickOnce = true;
                      _this.setUserToChatName(name);
                      _this.setUserToChatAvatar(avatar);
                      _this.setSidebarUserToggleForMobile();
                      _this.setMainChatbox();
                      _this.setDefaultValues();
                      _context6.next = 13;
                      return _this.setConversations();
                    case 13:
                      _this.setUserToChatOnlineStatus();
                    case 14:
                    case "end":
                      return _context6.stop();
                  }
                }, _callee6);
              }));
              _context7.next = 4;
              return _this.sleep(1);
            case 4:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      return function (_x4) {
        return _ref6.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "setVoiceChatRecording", function () {
      var voiceChatRecordButton = document.getElementById('voicechat-record-button');
      voiceChatRecordButton.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var waveFormContainer, wavesurfer, MAX_RECORDING_LIMIT, chatboxMessageInput, sendTextButton, sendVoiceButton, voiceChatRecordInput, voiceChatRecordTime, voiceChatRecordStart, voiceChatRecordSvgPlay, voiceChatRecordSvgStop, voiceChatRecordDelete, voiceChatRecordClose, record;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (_this.toSendImagesMap.size) {
                _context10.next = 32;
                break;
              }
              waveFormContainer = document.getElementById('waveform-input');
              waveFormContainer.textContent = '';
              wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_95__["default"].create({
                container: waveFormContainer,
                waveColor: 'rgb(200, 0, 200)',
                hideScrollbar: true,
                autoCenter: true,
                height: 30,
                barHeight: 25,
                barWidth: 1.5,
                cursorWidth: 0
              });
              _this.audioBlob = null;
              _this.isVoiceRecording = true;
              _this.isCloseVoiceRecording = false;
              MAX_RECORDING_LIMIT = 60;
              chatboxMessageInput = document.getElementById('chatbox-message-input');
              sendTextButton = document.getElementById('send-text-button');
              sendVoiceButton = document.getElementById('send-voice-button');
              voiceChatRecordInput = document.getElementById('chatbox-voice-input');
              voiceChatRecordTime = document.getElementById('voicechat-record-time');
              voiceChatRecordStart = document.getElementById('voicechat-record-start');
              voiceChatRecordSvgPlay = document.getElementById('voicechat-record-svg-play');
              voiceChatRecordSvgStop = document.getElementById('voicechat-record-svg-stop');
              voiceChatRecordDelete = document.getElementById('voicechat-record-delete');
              voiceChatRecordClose = document.getElementById('voicechat-record-close');
              chatboxMessageInput.classList.add('hidden');
              voiceChatRecordInput.classList.remove('hidden');
              sendTextButton.classList.add('hidden');
              sendVoiceButton.classList.remove('hidden');
              wavesurfer.empty();
              record = wavesurfer.registerPlugin(wavesurfer_js_dist_plugins_record_esm_js__WEBPACK_IMPORTED_MODULE_96__["default"].create({
                scrollingWaveform: false,
                renderRecordedAudio: false
              }));
              record.on('record-end', /*#__PURE__*/function () {
                var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(blob) {
                  var recordedUrl;
                  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                    while (1) switch (_context8.prev = _context8.next) {
                      case 0:
                        recordedUrl = URL.createObjectURL(blob);
                        wavesurfer.destroy();
                        wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_95__["default"].create({
                          container: waveFormContainer,
                          waveColor: 'rgb(200, 0, 200)',
                          progressColor: 'rgb(100, 50, 0)',
                          hideScrollbar: true,
                          autoCenter: true,
                          height: 30,
                          barHeight: 25,
                          barWidth: 1.5,
                          cursorWidth: 0,
                          url: recordedUrl
                        });
                        voiceChatRecordStart.onclick = function () {
                          return wavesurfer.playPause();
                        };
                        wavesurfer.on('pause', function () {
                          voiceChatRecordSvgPlay.classList.remove('hidden');
                          voiceChatRecordSvgStop.classList.add('hidden');
                        });
                        wavesurfer.on('play', function () {
                          voiceChatRecordSvgPlay.classList.add('hidden');
                          voiceChatRecordSvgStop.classList.remove('hidden');
                        });
                        wavesurfer.on('timeupdate', function (currentTime) {
                          var remainingTime = Math.abs(wavesurfer.getDuration() - currentTime);
                          var minutes = Math.floor(remainingTime / 60);
                          var seconds = Math.floor(remainingTime % 60);
                          var formattedTime = "0".concat(minutes, ":").concat(seconds.toString().padStart(2, '0'));
                          voiceChatRecordTime.textContent = formattedTime;
                        });
                        wavesurfer.on('finish', function () {
                          wavesurfer.seekTo(0);
                        });
                        _this.audioBlob = blob;
                        _this.isVoiceRecording = false;
                      case 10:
                      case "end":
                        return _context8.stop();
                    }
                  }, _callee8);
                }));
                return function (_x5) {
                  return _ref9.apply(this, arguments);
                };
              }());
              record.on('record-progress', function (time) {
                if (parseInt(time / 1000) >= MAX_RECORDING_LIMIT + 1) {
                  voiceChatRecordStart.click();
                } else {
                  var formattedTime = [Math.floor(time % 3600000 / 60000), Math.floor(time % 60000 / 1000)].map(function (v) {
                    return v < 10 ? '0' + v : v;
                  }).join(':');
                  voiceChatRecordTime.textContent = formattedTime;
                }
              });
              voiceChatRecordStart.onclick = function () {
                record.stopRecording();
                voiceChatRecordSvgPlay.classList.remove('hidden');
                voiceChatRecordSvgStop.classList.add('hidden');
                voiceChatRecordDelete.classList.remove('hidden');
                voiceChatRecordClose.classList.add('hidden');
              };
              voiceChatRecordDelete.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                  while (1) switch (_context9.prev = _context9.next) {
                    case 0:
                      voiceChatRecordSvgPlay.classList.add('hidden');
                      voiceChatRecordSvgStop.classList.remove('hidden');
                      voiceChatRecordDelete.classList.add('hidden');
                      voiceChatRecordClose.classList.remove('hidden');
                      wavesurfer.empty();
                      wavesurfer.destroy();
                      voiceChatRecordButton.click();
                      _context9.next = 9;
                      return record.startRecording();
                    case 9:
                    case "end":
                      return _context9.stop();
                  }
                }, _callee9);
              }));
              voiceChatRecordClose.onclick = function () {
                _this.isVoiceRecording = false;
                _this.isCloseVoiceRecording = true;
                wavesurfer.empty();
                wavesurfer.destroy();
                record.destroy();
                _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].unHideMediaGroup();
                chatboxMessageInput.classList.remove('hidden');
                voiceChatRecordInput.classList.add('hidden');
                sendTextButton.classList.remove('hidden');
                sendVoiceButton.classList.add('hidden');
                record.stopRecording();
              };
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].hideMediaGroup();
              _context10.next = 32;
              return record.startRecording();
            case 32:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
    });
    _defineProperty(_this, "setUserLastMessage", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
      var response, messages, i, _messages$i, id, content, isSeen, _JSON$parse2, sender, receiver, messageData, _messageData, firstname, _firstname2;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            _context11.next = 2;
            return _this.service.getLastMessages(_this.uidValue, _this.currentUserValue.id);
          case 2:
            response = _context11.sent;
            if (!response.ok) {
              _context11.next = 40;
              break;
            }
            _context11.next = 6;
            return response.json();
          case 6:
            messages = _context11.sent;
            i = 0;
          case 8:
            if (!(i < messages.length)) {
              _context11.next = 40;
              break;
            }
            _messages$i = messages[i], id = _messages$i.id, content = _messages$i.content, isSeen = _messages$i.isSeen;
            _JSON$parse2 = JSON.parse(atob(content)), sender = _JSON$parse2.sender, receiver = _JSON$parse2.receiver;
            _context11.prev = 11;
            _context11.t0 = JSON;
            _context11.next = 15;
            return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].decryptMessage(_this.currentUserPrivatekey, sender);
          case 15:
            _context11.t1 = _context11.sent;
            messageData = _context11.t0.parse.call(_context11.t0, _context11.t1);
            if (messageData.type == MessageType.TEXT) {
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(messageData.receiver, messageData.content);
            } else if (messageData.type == MessageType.AUDIO) {
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(messageData.receiver, 'You sent an audio');
            } else if (messageData.type == MessageType.IMAGE) {
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(messageData.receiver, 'You sent an image');
            }
            _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageTimestamp(messageData.receiver, messageData.timestamp);
            _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageTimeAgo(messageData.receiver, messageData.timestamp, _this.timeAgo);
            _context11.next = 37;
            break;
          case 22:
            _context11.prev = 22;
            _context11.t2 = _context11["catch"](11);
            _context11.prev = 24;
            _context11.t3 = JSON;
            _context11.next = 28;
            return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].decryptMessage(_this.currentUserPrivatekey, receiver);
          case 28:
            _context11.t4 = _context11.sent;
            _messageData = _context11.t3.parse.call(_context11.t3, _context11.t4);
            if (_messageData.type == MessageType.TEXT) {
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(_messageData.sender, _messageData.content);
            } else if (_messageData.type == MessageType.AUDIO) {
              firstname = _this.usersMap.get(_messageData.sender).userDetails.firstname;
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(_messageData.sender, firstname + ' sent an audio');
            } else if (_messageData.type == MessageType.IMAGE) {
              _firstname2 = _this.usersMap.get(_messageData.sender).userDetails.firstname;
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(_messageData.sender, _firstname2 + ' sent an image');
            }
            _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageTimestamp(_messageData.sender, _messageData.timestamp);
            _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageTimeAgo(_messageData.sender, _messageData.timestamp, _this.timeAgo);
            _context11.next = 37;
            break;
          case 35:
            _context11.prev = 35;
            _context11.t5 = _context11["catch"](24);
          case 37:
            i++;
            _context11.next = 8;
            break;
          case 40:
            _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].sortUsersListBaseOnLastMessageTimestamp();
          case 41:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[11, 22], [24, 35]]);
    })));
    _defineProperty(_this, "setChatboxEventListener", function () {
      var chatbox = document.getElementById('chatbox-message-input');
      chatbox.onblur = function () {
        _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].unHideMediaGroup();
      };
      chatbox.onfocus = function () {
        _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].hideMediaGroup();
      };
    });
    _defineProperty(_this, "setChatboxInfiniteScrolling", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
      var chatbox;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            chatbox = document.getElementById('chatbox');
            chatbox.onscroll = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var scrollTop, flexGrowChild, index, firstChild, loader, response, messages, i, _messages$i2, id, content, isSeen, _JSON$parse3, sender, receiver, messageElement, messageData, imgCheck, _messageElement, _messageData2;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    scrollTop = chatbox.scrollTop;
                    if (!(scrollTop == 0 && !_this.isReceivedFirstMessage && !_this.isLockInfiniteScrolling)) {
                      _context12.next = 72;
                      break;
                    }
                    _this.page += 1;
                    _this.isLockInfiniteScrolling = true;
                    flexGrowChild = chatbox.removeChild(chatbox.children[0]);
                    index = 0;
                    firstChild = null;
                  case 7:
                    if (!(index < chatbox.children.length)) {
                      _context12.next = 14;
                      break;
                    }
                    firstChild = chatbox.children[index];
                    if (firstChild.classList.contains('divider-timestamp')) {
                      _context12.next = 11;
                      break;
                    }
                    return _context12.abrupt("break", 14);
                  case 11:
                    index++;
                    _context12.next = 7;
                    break;
                  case 14:
                    loader = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createLoaderElement();
                    chatbox.prepend(loader);
                    _context12.next = 18;
                    return _this.service.getMessages(_this.uidValue, _this.currentUserValue.id, _this.userToChatId, _this.page, _this.pageSize, 1);
                  case 18:
                    response = _context12.sent;
                    if (!response.ok) {
                      _context12.next = 70;
                      break;
                    }
                    _context12.next = 22;
                    return response.json();
                  case 22:
                    messages = _context12.sent;
                    chatbox.removeChild(loader);
                    if (!messages.length) {
                      _context12.next = 69;
                      break;
                    }
                    i = 0;
                  case 26:
                    if (!(i < messages.length)) {
                      _context12.next = 63;
                      break;
                    }
                    _messages$i2 = messages[i], id = _messages$i2.id, content = _messages$i2.content, isSeen = _messages$i2.isSeen;
                    _JSON$parse3 = JSON.parse(atob(content)), sender = _JSON$parse3.sender, receiver = _JSON$parse3.receiver;
                    _context12.prev = 29;
                    messageElement = null;
                    _context12.t0 = JSON;
                    _context12.next = 34;
                    return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].decryptMessage(_this.currentUserPrivatekey, sender);
                  case 34:
                    _context12.t1 = _context12.sent;
                    messageData = _context12.t0.parse.call(_context12.t0, _context12.t1);
                    if (messageData.type == MessageType.TEXT) {
                      messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createOutgoingMessageTextElement(messageData.content, messageData.timestamp, _this.timeAgo);
                    } else if (messageData.type == MessageType.AUDIO) {
                      messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createOutgoingMessageVoiceElement(messageData.content, messageData.timestamp, _this.timeAgo);
                    } else if (messageData.type == MessageType.IMAGE) {
                      messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createOutgoingMessageImageElement(messageData.content, messageData.timestamp, _this.timeAgo);
                      _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setViewerJsImageElement(messageElement, _this.viewer);
                    }
                    messageElement.setAttribute('messageId', id);
                    messageElement.setAttribute('messageData', JSON.stringify(messageData));
                    messageElement.copyTextMessageCallback = _this.copyTextMessageCallback;
                    messageElement.forwardMessageCallback = _this.forwardMessageCallback;
                    chatbox.prepend(messageElement);
                    imgCheck = messageElement.querySelector('.img-check');
                    imgCheck.src = '/green_checks.svg';
                    _context12.next = 60;
                    break;
                  case 46:
                    _context12.prev = 46;
                    _context12.t2 = _context12["catch"](29);
                    _messageElement = null;
                    _context12.t3 = JSON;
                    _context12.next = 52;
                    return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].decryptMessage(_this.currentUserPrivatekey, receiver);
                  case 52:
                    _context12.t4 = _context12.sent;
                    _messageData2 = _context12.t3.parse.call(_context12.t3, _context12.t4);
                    if (_messageData2.type == MessageType.TEXT) {
                      _messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createIncomingMessageTextElement(_messageData2.content, _this.usersMap.get(_messageData2.sender).userDetails.avatar, _messageData2.timestamp, _this.timeAgo);
                    } else if (_messageData2.type == MessageType.AUDIO) {
                      _messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createIncomingMessageVoiceElement(_messageData2.content, _this.usersMap.get(_messageData2.sender).userDetails.avatar, _messageData2.timestamp, _this.timeAgo);
                    } else if (_messageData2.type == MessageType.IMAGE) {
                      _messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createIncommingMessageImageElement(_messageData2.content, _this.usersMap.get(_messageData2.sender).userDetails.avatar, _messageData2.timestamp, _this.timeAgo);
                      _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setViewerJsImageElement(_messageElement, _this.viewer);
                    }
                    _messageElement.setAttribute('messageId', id);
                    _messageElement.setAttribute('messageData', JSON.stringify(_messageData2));
                    _messageElement.copyTextMessageCallback = _this.copyTextMessageCallback;
                    _messageElement.forwardMessageCallback = _this.forwardMessageCallback;
                    chatbox.prepend(_messageElement);
                  case 60:
                    i++;
                    _context12.next = 26;
                    break;
                  case 63:
                    _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxMessageAvatarHidden();
                    _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxDividerTimestamp();
                    _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxMessageBorderAndMargin();
                    setTimeout(function () {
                      firstChild.scrollIntoView({
                        behavior: "smooth",
                        block: "end"
                      });
                      chatbox.prepend(flexGrowChild);
                      _this.isLockInfiniteScrolling = false;
                    }, 500);
                    _context12.next = 70;
                    break;
                  case 69:
                    _this.isReceivedFirstMessage = true;
                  case 70:
                    _context12.next = 73;
                    break;
                  case 72:
                    _this.isSidebarUserClickOnce = false;
                  case 73:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, null, [[29, 46]]);
            }));
            _context13.next = 4;
            return _this.sleep(1);
          case 4:
          case "end":
            return _context13.stop();
        }
      }, _callee13);
    })));
    _defineProperty(_this, "setForwardUserMessage", function (user) {
      var forwardUserSvgSent = document.getElementById("forward-user-svg-sent-".concat(user.id));
      var forwardUserSvgDefault = document.getElementById("forward-user-svg-default-".concat(user.id));
      var forwardUserSpanText = document.getElementById("forward-user-span-text-".concat(user.id));
      var forwadUserButton = document.getElementById("forward-user-button-".concat(user.id));
      forwadUserButton.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              forwadUserButton.setAttribute('disabled', '');
              forwadUserButton.classList.add("cursor-not-allowed");
              forwardUserSvgSent.classList.remove('hidden');
              forwardUserSvgDefault.classList.add('hidden');
              forwardUserSpanText.textContent = 'Sent';
              if (!(_this.forwardUserMessageType == MessageType.TEXT)) {
                _context14.next = 10;
                break;
              }
              _context14.next = 8;
              return _this.sendTextMessage(user.id, _this.forwardUserMessageContent);
            case 8:
              _context14.next = 18;
              break;
            case 10:
              if (!(_this.forwardUserMessageType == MessageType.AUDIO)) {
                _context14.next = 15;
                break;
              }
              _context14.next = 13;
              return _this.sendVoiceMessage(user.id, _this.forwardUserMessageBlob);
            case 13:
              _context14.next = 18;
              break;
            case 15:
              if (!(_this.forwardUserMessageType == MessageType.IMAGE)) {
                _context14.next = 18;
                break;
              }
              _context14.next = 18;
              return _this.sendImageMessage(user.id, _this.forwardUserMessageBlob, _this.forwardUserMessageInput, _this.forwardUserMessageWidth, _this.forwardUserMessageHeight, _this.forwardUserMessageMimeType, _this.forwardUserMessageExtension, _this.forwardUserMessageOutput);
            case 18:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
    });
    _defineProperty(_this, "setDefaultValues", function () {
      _this.page = 1;
      _this.isReceivedFirstMessage = false;
      _this.isLockInfiniteScrolling = true;
      document.getElementById("viewerjs-images-container").innerHTML = '';
    });
    _defineProperty(_this, "copyTextMessageCallback", /*#__PURE__*/function () {
      var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(content) {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return navigator.clipboard.writeText(content);
            case 2:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
      return function (_x6) {
        return _ref15.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "forwardMessageCallback", function (type, content, blob, input, width, height, mimeType, extension, output) {
      _this.forwardUserMessageType = type;
      _this.forwardUserMessageContent = content;
      _this.forwardUserMessageBlob = blob;
      _this.forwardUserMessageInput = input;
      _this.forwardUserMessageWidth = width;
      _this.forwardUserMessageHeight = height;
      _this.forwardUserMessageMimeType = mimeType;
      _this.forwardUserMessageExtension = extension;
      _this.forwardUserMessageOutput = output;
      _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setForwardUserUiDefaults(_this.usersMap);
    });
    _defineProperty(_this, "setConversations", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
      var clearChatboxElement, chatbox, loader, hasMessages, response, messages, i, _messages$i3, id, content, isSeen, _JSON$parse4, sender, receiver, messageElement, messageData, imgCheck, _messageElement2, _messageData3, user, name, avatar;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            clearChatboxElement = function _clearChatboxElement() {
              var chatbox = document.getElementById('chatbox');
              var element = document.createElement('div');
              element.className = 'flex flex-grow';
              chatbox.innerHTML = '';
              chatbox.append(element);
            };
            clearChatboxElement();
            chatbox = document.getElementById('chatbox');
            loader = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createLoaderElement();
            chatbox.appendChild(loader);
            hasMessages = false;
            _context16.next = 8;
            return _this.service.getMessages(_this.uidValue, _this.currentUserValue.id, _this.userToChatId, _this.page, _this.pageSize);
          case 8:
            response = _context16.sent;
            if (!response.ok) {
              _context16.next = 53;
              break;
            }
            _context16.next = 12;
            return response.json();
          case 12:
            messages = _context16.sent;
            i = 0;
          case 14:
            if (!(i < messages.length)) {
              _context16.next = 51;
              break;
            }
            _messages$i3 = messages[i], id = _messages$i3.id, content = _messages$i3.content, isSeen = _messages$i3.isSeen;
            _JSON$parse4 = JSON.parse(atob(content)), sender = _JSON$parse4.sender, receiver = _JSON$parse4.receiver;
            _context16.prev = 17;
            messageElement = null;
            _context16.t0 = JSON;
            _context16.next = 22;
            return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].decryptMessage(_this.currentUserPrivatekey, sender);
          case 22:
            _context16.t1 = _context16.sent;
            messageData = _context16.t0.parse.call(_context16.t0, _context16.t1);
            if (messageData.type == MessageType.TEXT) {
              messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createOutgoingMessageTextElement(messageData.content, messageData.timestamp, _this.timeAgo);
            } else if (messageData.type == MessageType.AUDIO) {
              messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createOutgoingMessageVoiceElement(messageData.content, messageData.timestamp, _this.timeAgo);
            } else if (messageData.type == MessageType.IMAGE) {
              messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createOutgoingMessageImageElement(messageData.content, messageData.timestamp, _this.timeAgo);
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setViewerJsImageElement(messageElement, _this.viewer);
            }
            messageElement.setAttribute('messageId', id);
            messageElement.setAttribute('messageData', JSON.stringify(messageData));
            messageElement.copyTextMessageCallback = _this.copyTextMessageCallback;
            messageElement.forwardMessageCallback = _this.forwardMessageCallback;
            chatbox.appendChild(messageElement);
            imgCheck = messageElement.querySelector('.img-check');
            imgCheck.src = '/green_checks.svg';
            _context16.next = 48;
            break;
          case 34:
            _context16.prev = 34;
            _context16.t2 = _context16["catch"](17);
            _messageElement2 = null;
            _context16.t3 = JSON;
            _context16.next = 40;
            return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].decryptMessage(_this.currentUserPrivatekey, receiver);
          case 40:
            _context16.t4 = _context16.sent;
            _messageData3 = _context16.t3.parse.call(_context16.t3, _context16.t4);
            if (_messageData3.type == MessageType.TEXT) {
              _messageElement2 = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createIncomingMessageTextElement(_messageData3.content, _this.usersMap.get(_messageData3.sender).userDetails.avatar, _messageData3.timestamp, _this.timeAgo);
            } else if (_messageData3.type == MessageType.AUDIO) {
              _messageElement2 = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createIncomingMessageVoiceElement(_messageData3.content, _this.usersMap.get(_messageData3.sender).userDetails.avatar, _messageData3.timestamp, _this.timeAgo);
            } else if (_messageData3.type == MessageType.IMAGE) {
              _messageElement2 = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createIncommingMessageImageElement(_messageData3.content, _this.usersMap.get(_messageData3.sender).userDetails.avatar, _messageData3.timestamp, _this.timeAgo);
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setViewerJsImageElement(_messageElement2, _this.viewer);
            }
            _messageElement2.setAttribute('messageId', id);
            _messageElement2.setAttribute('messageData', JSON.stringify(_messageData3));
            _messageElement2.copyTextMessageCallback = _this.copyTextMessageCallback;
            _messageElement2.forwardMessageCallback = _this.forwardMessageCallback;
            chatbox.appendChild(_messageElement2);
          case 48:
            i++;
            _context16.next = 14;
            break;
          case 51:
            _this.chatboxScrollToBottom(true);
            hasMessages = messages.length ? true : false;
          case 53:
            _this.isLockInfiniteScrolling = false;
            chatbox.removeChild(loader);
            _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxMessageAvatarHidden();
            _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxDividerTimestamp();
            _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxMessageBorderAndMargin();
            if (!hasMessages) {
              user = _this.usersMap.get(_this.userToChatId);
              name = "".concat(user.userDetails.firstname, " ").concat(user.userDetails.lastname);
              avatar = user.userDetails.avatar;
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setIntroductionElement(name, avatar);
            }
          case 59:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[17, 34]]);
    })));
    _defineProperty(_this, "setUserToChatName", function (name) {
      var userToChatName = document.getElementById('userToChatName');
      userToChatName.textContent = name;
    });
    _defineProperty(_this, "setUserToChatAvatar", function (avatar) {
      var userToChatAvatar = document.getElementById('usertochat-avatar');
      userToChatAvatar.style.backgroundImage = "url('".concat(avatar, "')");
    });
    _defineProperty(_this, "setUserToChatOnlineStatus", function () {
      var isOnline = _this.usersOnlineMap.get(_this.userToChatId);
      var userToChatOnlineStatus = document.getElementById('usertochat-online-status');
      var userToChatOnlineText = document.getElementById('usertochat-online-text');
      if (isOnline) {
        userToChatOnlineStatus.classList.remove('bg-red-400');
        userToChatOnlineStatus.classList.add('bg-green-400');
        userToChatOnlineText.textContent = "Active now";
      } else {
        userToChatOnlineStatus.classList.add('bg-red-400');
        userToChatOnlineStatus.classList.remove('bg-green-400');
        setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
          return _regeneratorRuntime().wrap(function _callee17$(_context17) {
            while (1) switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return _this.setUserLastSeen(userToChatOnlineText);
              case 2:
              case "end":
                return _context17.stop();
            }
          }, _callee17);
        })), 1);
      }
    });
    _defineProperty(_this, "setUserLastSeen", /*#__PURE__*/function () {
      var _ref18 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(element) {
        var response, data;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              element.textContent = 'Offline';
              _context18.next = 3;
              return _this.service.getUserLastSeen(_this.uidValue, _this.userToChatId);
            case 3:
              response = _context18.sent;
              if (!response.ok) {
                _context18.next = 9;
                break;
              }
              _context18.next = 7;
              return response.json();
            case 7:
              data = _context18.sent;
              element.textContent = "Last seen " + _this.timeAgo.format(parseInt(data.timestamp), 'round');
            case 9:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }));
      return function (_x7) {
        return _ref18.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "setDarkModeToggle", function () {
      var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
      var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
      var emojiPicker = document.querySelector('.emoji-picker');

      // Change the icons inside the button based on previous settings
      if (localStorage.getItem('color-theme') === 'dark' || !('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        themeToggleLightIcon.classList.remove('hidden');
        document.documentElement.classList.add('dark');
        emojiPicker.classList.remove('light');
        emojiPicker.classList.add('dark');
      } else {
        themeToggleDarkIcon.classList.remove('hidden');
        document.documentElement.classList.remove('dark');
        emojiPicker.classList.add('light');
        emojiPicker.classList.remove('dark');
      }
      var themeToggleBtn = document.getElementById('theme-toggle');
      themeToggleBtn.onclick = function () {
        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');

        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            emojiPicker.classList.remove('light');
            emojiPicker.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            emojiPicker.classList.add('light');
            emojiPicker.classList.remove('dark');
          }

          // if NOT set via local storage previously
        } else {
          if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
          } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
          }
        }
      };
    });
    _defineProperty(_this, "setEmojiPickerElement", function () {
      var chatbox = document.getElementById('chatbox-message-input');
      document.querySelector('emoji-picker').addEventListener('emoji-click', function (e) {
        var caretPosition = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].saveCaretPosition(chatbox);
        chatbox.innerHTML = chatbox.innerHTML.substring(0, caretPosition) + e.detail.unicode + chatbox.innerHTML.substring(caretPosition);
        _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].restoreCaretPosition(chatbox, caretPosition + e.detail.unicode.length);
      });
    });
    _defineProperty(_this, "setSidebarUserToggleForMobile", function () {
      if (_js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].getUserAgentPlatformType() == 'mobile') {
        setTimeout(function () {
          document.getElementById('separator-sidebar-button').click();
        }, 200);
      }
    });
    _defineProperty(_this, "setMainChatbox", function () {
      var mainChatbox = document.getElementById('main-chatbox');
      var mainChatboxIntro = document.getElementById('main-chatbox-intro');
      mainChatbox.classList.remove('hidden');
      mainChatboxIntro.classList.add('hidden');
    });
    _defineProperty(_this, "setSentMessage", /*#__PURE__*/function () {
      var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(receiver, content, messageElement, message, type, timestamp) {
        var oldMessageElement,
          chatbox,
          response,
          imgCheck,
          messageData,
          id,
          _args19 = arguments;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              oldMessageElement = _args19.length > 6 && _args19[6] !== undefined ? _args19[6] : null;
              chatbox = document.getElementById('chatbox');
              _this.chatboxScrollToBottom(true);
              if (parseInt(_this.userToChatId) == parseInt(receiver)) {
                if (oldMessageElement) {
                  chatbox.replaceChild(messageElement, oldMessageElement);
                } else {
                  chatbox.appendChild(messageElement);
                }
              }
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].reOrderLastFourChatboxElements();
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxMessageAvatarHidden();
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxDividerTimestamp();
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setChatboxMessageBorderAndMargin();
              _context19.next = 10;
              return _this.service.createTextMessage(_this.uidValue, "messages/".concat(_this.currentUserValue.id, "/").concat(receiver), "".concat(_this.currentUserValue.id, "-").concat(receiver), _this.currentUserValue.id, receiver, MessageType.TEXT, content, timestamp, true);
            case 10:
              response = _context19.sent;
              imgCheck = messageElement.querySelector('.img-check');
              if (!response.ok) {
                _context19.next = 25;
                break;
              }
              _context19.next = 15;
              return response.json();
            case 15:
              messageData = _context19.sent;
              id = messageData.id;
              messageElement.setAttribute('messageId', id);
              if (type == MessageType.TEXT) {
                _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(receiver, message);
              } else if (type == MessageType.AUDIO) {
                _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(receiver, 'You sent an audio');
              } else if (type == MessageType.IMAGE) {
                _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageContent(receiver, 'You sent an image');
              }
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageTimestamp(receiver, timestamp);
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setUserLastMessageTimeAgo(receiver, timestamp, _this.timeAgo);
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].reOrderUsersListIfNewMessageIsBeingSentOrReceived(receiver);
              imgCheck.src = '/green_checks.svg';
              _context19.next = 26;
              break;
            case 25:
              imgCheck.src = '/red_checks.svg';
            case 26:
            case "end":
              return _context19.stop();
          }
        }, _callee19);
      }));
      return function (_x8, _x9, _x10, _x11, _x12, _x13) {
        return _ref19.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "sendTextMessage", /*#__PURE__*/function () {
      var _ref20 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(receiver, message) {
        var chatboxMessageInput, type, timestamp, data, userTochatPublickey, encryptedSenderTextMessage, encryptedReceiverTextMessage, content, messageElement;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              chatboxMessageInput = document.getElementById('chatbox-message-input');
              chatboxMessageInput.textContent = '';
              type = MessageType.TEXT;
              timestamp = Date.now();
              data = JSON.stringify({
                sender: _this.currentUserValue.id,
                receiver: receiver,
                type: type,
                content: message,
                timestamp: timestamp
              });
              userTochatPublickey = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].base64ToArrayBuffer(_this.usersMap.get(receiver).userDetails.publickey.publickey);
              _context20.next = 8;
              return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].encryptMessage(_this.currentUserPublickey, data);
            case 8:
              encryptedSenderTextMessage = _context20.sent;
              _context20.next = 11;
              return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].encryptMessage(userTochatPublickey, data);
            case 11:
              encryptedReceiverTextMessage = _context20.sent;
              content = btoa(JSON.stringify({
                sender: encryptedSenderTextMessage,
                receiver: encryptedReceiverTextMessage
              }));
              messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createOutgoingMessageTextElement(message, timestamp, _this.timeAgo);
              messageElement.setAttribute('messageData', data);
              messageElement.copyTextMessageCallback = _this.copyTextMessageCallback;
              messageElement.forwardMessageCallback = _this.forwardMessageCallback;
              _context20.next = 19;
              return _this.setSentMessage(receiver, content, messageElement, message, type, timestamp);
            case 19:
            case "end":
              return _context20.stop();
          }
        }, _callee20);
      }));
      return function (_x14, _x15) {
        return _ref20.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "sendVoiceMessage", /*#__PURE__*/function () {
      var _ref21 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(receiver, blob) {
        var voiceChatRecordDelete, voiceChatRecordClose, url, chatbox, messageTempElement, file, response, type, timestamp, data, userTochatPublickey, encryptedSenderTextMessage, encryptedReceiverTextMessage, content, messageElement;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              _this.audioBlob = null;
              voiceChatRecordDelete = document.getElementById('voicechat-record-delete');
              voiceChatRecordClose = document.getElementById('voicechat-record-close');
              voiceChatRecordDelete.click();
              voiceChatRecordClose.click();
              url = URL.createObjectURL(blob);
              chatbox = document.getElementById('chatbox');
              messageTempElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createOutgoingMessageVoiceElement(url, Date.now(), _this.timeAgo);
              _this.chatboxScrollToBottom(true);
              if (parseInt(_this.userToChatId) == parseInt(receiver)) {
                chatbox.appendChild(messageTempElement);
              }
              _context21.t0 = _this.ffmpeg;
              _context21.t1 = Uint8Array;
              _context21.next = 14;
              return blob.arrayBuffer();
            case 14:
              _context21.t2 = _context21.sent;
              _context21.t3 = new _context21.t1(_context21.t2);
              _context21.next = 18;
              return _context21.t0.writeFile.call(_context21.t0, 'input.webm', _context21.t3);
            case 18:
              _context21.next = 20;
              return _this.ffmpeg.exec(['-i', 'input.webm', '-c:a', 'libopus', '-b:a', '0', 'output.webm']);
            case 20:
              _context21.t4 = File;
              _context21.next = 23;
              return _this.ffmpeg.readFile('output.webm');
            case 23:
              _context21.t5 = _context21.sent;
              _context21.t6 = [_context21.t5];
              _context21.t7 = {
                type: 'audio/webm'
              };
              file = new _context21.t4(_context21.t6, 'audio.webm', _context21.t7);
              _context21.next = 29;
              return _this.service.createAudioMessage(_this.uidValue, file, messageTempElement, _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].progressSvgElementCallback);
            case 29:
              response = _context21.sent;
              if (!(response.status == 200)) {
                _context21.next = 48;
                break;
              }
              type = MessageType.AUDIO;
              timestamp = Date.now();
              data = JSON.stringify({
                sender: _this.currentUserValue.id,
                receiver: receiver,
                type: type,
                content: response.data,
                timestamp: timestamp
              });
              userTochatPublickey = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].base64ToArrayBuffer(_this.usersMap.get(receiver).userDetails.publickey.publickey);
              _context21.next = 37;
              return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].encryptMessage(_this.currentUserPublickey, data);
            case 37:
              encryptedSenderTextMessage = _context21.sent;
              _context21.next = 40;
              return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].encryptMessage(userTochatPublickey, data);
            case 40:
              encryptedReceiverTextMessage = _context21.sent;
              content = btoa(JSON.stringify({
                sender: encryptedSenderTextMessage,
                receiver: encryptedReceiverTextMessage
              }));
              messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createOutgoingMessageVoiceElement(url, timestamp, _this.timeAgo);
              messageElement.setAttribute('messageData', data);
              messageElement.copyTextMessageCallback = _this.copyTextMessageCallback;
              messageElement.forwardMessageCallback = _this.forwardMessageCallback;
              _context21.next = 48;
              return _this.setSentMessage(receiver, content, messageElement, null, type, timestamp, messageTempElement);
            case 48:
            case "end":
              return _context21.stop();
          }
        }, _callee21);
      }));
      return function (_x16, _x17) {
        return _ref21.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "sendImageMessage", /*#__PURE__*/function () {
      var _ref22 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(receiver, blob, input, width, height, mimeType, extension, output) {
        var file, url, chatbox, messageTempElement, response, type, timestamp, data, userTochatPublickey, encryptedSenderTextMessage, encryptedReceiverTextMessage, content, messageElement;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              file = null;
              url = URL.createObjectURL(blob);
              _context22.t0 = File;
              _context22.t1 = Uint8Array;
              _context22.next = 6;
              return blob.arrayBuffer();
            case 6:
              _context22.t2 = _context22.sent;
              _context22.t3 = new _context22.t1(_context22.t2);
              _context22.t4 = [_context22.t3];
              _context22.t5 = output;
              _context22.t6 = {
                type: mimeType
              };
              file = new _context22.t0(_context22.t4, _context22.t5, _context22.t6);
              /*
              if (extension == 'png') {
                  await this.ffmpeg.writeFile(input, new Uint8Array(await blob.arrayBuffer()))
                  await this.ffmpeg.exec(['-i', input, '-vf', `scale=${width}:${height}`, output]);
                  file = new File([await this.ffmpeg.readFile(output)], output, { type: mimeType })  
              }
              else if (extension == 'GIF') {
                  file = new File([new Uint8Array(await blob.arrayBuffer())], output, { type: mimeType }) 
              }
              else if (extension == "heic") {
                  const heicBlob = await heic2any({ blob, toType: 'image/jpeg'}) 
                  url = URL.createObjectURL(heicBlob)
                  
                  await this.ffmpeg.writeFile('input.jpeg', new Uint8Array(await heicBlob.arrayBuffer()))
                  await this.ffmpeg.exec(['-i', 'input.jpeg', '-pix_fmt', 'yuv420p', '-vf', `scale=${width}:${height}`, 'output.jpeg']);
                  file = new File([await this.ffmpeg.readFile('output.jpeg')], 'output.jpeg', { type: 'image/jpeg' })  
              }
              else {
                  await this.ffmpeg.writeFile(input, new Uint8Array(await blob.arrayBuffer()))
                  await this.ffmpeg.exec(['-i', input, '-pix_fmt', 'yuv420p', '-vf', `scale=${width}:${height}`, output]);
                  file = new File([await this.ffmpeg.readFile(output)], output, { type: mimeType }) 
              } 
                  */
              chatbox = document.getElementById('chatbox');
              messageTempElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createOutgoingMessageImageElement(url, Date.now(), _this.timeAgo);
              _this.chatboxScrollToBottom(true);
              if (parseInt(_this.userToChatId) == parseInt(receiver)) {
                chatbox.appendChild(messageTempElement);
              }
              _context22.next = 18;
              return _this.service.createImageMessage(_this.uidValue, file, extension == 'heic' ? 'jpeg' : extension, messageTempElement, _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].progressSvgElementCallback);
            case 18:
              response = _context22.sent;
              if (!(response.status == 200)) {
                _context22.next = 38;
                break;
              }
              type = MessageType.IMAGE;
              timestamp = Date.now();
              data = JSON.stringify({
                sender: _this.currentUserValue.id,
                receiver: receiver,
                type: type,
                content: response.data,
                timestamp: timestamp
              });
              userTochatPublickey = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].base64ToArrayBuffer(_this.usersMap.get(receiver).userDetails.publickey.publickey);
              _context22.next = 26;
              return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].encryptMessage(_this.currentUserPublickey, data);
            case 26:
              encryptedSenderTextMessage = _context22.sent;
              _context22.next = 29;
              return _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].encryptMessage(userTochatPublickey, data);
            case 29:
              encryptedReceiverTextMessage = _context22.sent;
              content = btoa(JSON.stringify({
                sender: encryptedSenderTextMessage,
                receiver: encryptedReceiverTextMessage
              }));
              messageElement = _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].createOutgoingMessageImageElement(url, timestamp, _this.timeAgo);
              messageElement.setAttribute('messageData', data);
              messageElement.copyTextMessageCallback = _this.copyTextMessageCallback;
              messageElement.forwardMessageCallback = _this.forwardMessageCallback;
              _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].setViewerJsImageElement(messageElement, _this.viewer);
              _context22.next = 38;
              return _this.setSentMessage(receiver, content, messageElement, null, type, timestamp, messageTempElement);
            case 38:
            case "end":
              return _context22.stop();
          }
        }, _callee22);
      }));
      return function (_x18, _x19, _x20, _x21, _x22, _x23, _x24, _x25) {
        return _ref22.apply(this, arguments);
      };
    }());
    _defineProperty(_this, "setOnChangeImageFileInput", function () {
      var imageFileInput = document.getElementById('image-file-input');
      imageFileInput.onchange = /*#__PURE__*/function () {
        var _ref23 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(e) {
          var files, chatboxMessageInput, chatboxVoiceInput, chatboxImageInput, sendTextButton, sendVoiceButton, sendImageButton, _loop, i;
          return _regeneratorRuntime().wrap(function _callee23$(_context24) {
            while (1) switch (_context24.prev = _context24.next) {
              case 0:
                files = e.target.files;
                chatboxMessageInput = document.getElementById('chatbox-message-input');
                chatboxVoiceInput = document.getElementById('chatbox-voice-input');
                chatboxImageInput = document.getElementById('chatbox-image-input');
                sendTextButton = document.getElementById('send-text-button');
                sendVoiceButton = document.getElementById('send-voice-button');
                sendImageButton = document.getElementById('send-image-button');
                chatboxImageInput.innerHTML = '';
                if (!files.length) {
                  _context24.next = 23;
                  break;
                }
                _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].hideMediaGroup();
                chatboxMessageInput.classList.add('hidden');
                chatboxVoiceInput.classList.add('hidden');
                chatboxImageInput.classList.remove('hidden');
                sendTextButton.classList.add('hidden');
                sendVoiceButton.classList.add('hidden');
                sendImageButton.classList.remove('hidden');
                _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
                  var file, imageContainer, img, reader, closeButton;
                  return _regeneratorRuntime().wrap(function _loop$(_context23) {
                    while (1) switch (_context23.prev = _context23.next) {
                      case 0:
                        file = files[i];
                        _this.toSendImagesMap.set(i, {
                          'file': file,
                          'width': null,
                          'height': null
                        });
                        // Create a container div for image and close button
                        imageContainer = document.createElement('div');
                        imageContainer.style.position = 'relative';
                        imageContainer.style.display = 'inline-block';
                        imageContainer.style.margin = '5px';

                        // Create the img element
                        img = document.createElement('img');
                        img.setAttribute('mimeType', file.type);
                        img.setAttribute('key', i);
                        img.classList.add('image');
                        img.style.width = '50px';
                        img.style.height = '50px';
                        img.style.objectFit = 'fill';

                        // Read the file as a Data URL
                        reader = new FileReader();
                        reader.onload = function (event) {
                          var fakeImg = document.createElement('img');
                          fakeImg.src = event.target.result;
                          fakeImg.onload = function () {
                            _this.toSendImagesMap.set(i, {
                              'file': file,
                              'width': fakeImg.width,
                              'height': fakeImg.height
                            });
                          };
                          img.src = event.target.result;
                        };

                        // Read the image file
                        reader.readAsDataURL(file);

                        // Create a close button
                        closeButton = document.createElement('button');
                        closeButton.innerHTML = '&times;';
                        closeButton.style.position = 'absolute';
                        closeButton.style.top = '0';
                        closeButton.style.right = '0';
                        closeButton.style.backgroundColor = 'rgb(234 63 63)';
                        closeButton.style.color = 'white';
                        closeButton.style.border = 'none';
                        closeButton.style.borderRadius = '50%';
                        closeButton.style.cursor = 'pointer';
                        closeButton.style.width = '25px';
                        closeButton.style.height = '25px';
                        closeButton.style.fontSize = '14px';
                        closeButton.style.lineHeight = '25px'; // Set line-height to match the button height for vertical centering
                        closeButton.style.textAlign = 'center';

                        // Add event listener to remove the imageContainer on click
                        closeButton.onclick = function () {
                          _this.toSendImagesMap["delete"](i);
                          chatboxImageInput.removeChild(imageContainer);
                          if (!_this.toSendImagesMap.size) {
                            chatboxMessageInput.classList.remove('hidden');
                            chatboxVoiceInput.classList.add('hidden');
                            chatboxImageInput.classList.add('hidden');
                            sendTextButton.classList.remove('hidden');
                            sendVoiceButton.classList.add('hidden');
                            sendImageButton.classList.add('hidden');
                          }
                        };

                        // Append the img and close button to the container
                        imageContainer.appendChild(img);
                        imageContainer.appendChild(closeButton);

                        // Append the container to the chatboxInput div
                        chatboxImageInput.appendChild(imageContainer);
                      case 35:
                      case "end":
                        return _context23.stop();
                    }
                  }, _loop);
                });
                i = 0;
              case 18:
                if (!(i < files.length)) {
                  _context24.next = 23;
                  break;
                }
                return _context24.delegateYield(_loop(i), "t0", 20);
              case 20:
                i++;
                _context24.next = 18;
                break;
              case 23:
              case "end":
                return _context24.stop();
            }
          }, _callee23);
        }));
        return function (_x26) {
          return _ref23.apply(this, arguments);
        };
      }();
    });
    _defineProperty(_this, "setImageButtonClick", function () {
      var imageInputButton = document.getElementById('image-input-button');
      imageInputButton.onclick = function () {
        if (!_this.isVoiceRecording && _this.isCloseVoiceRecording) {
          var imageFileInput = document.getElementById('image-file-input');
          imageFileInput.click();
        }
      };
    });
    _defineProperty(_this, "setSendTextButtonClick", function () {
      var chatboxMessageInput = document.getElementById('chatbox-message-input');
      var sendTextButton = document.getElementById('send-text-button');
      sendTextButton.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
        var message;
        return _regeneratorRuntime().wrap(function _callee24$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              message = chatboxMessageInput.innerText.trim();
              if (_this.isEmptyOrSpaces(message)) {
                _context25.next = 4;
                break;
              }
              _context25.next = 4;
              return _this.sendTextMessage(_this.userToChatId, message);
            case 4:
            case "end":
              return _context25.stop();
          }
        }, _callee24);
      }));
    });
    _defineProperty(_this, "setSendVoiceButtonClick", function () {
      var sendVoiceButton = document.getElementById('send-voice-button');
      sendVoiceButton.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
        return _regeneratorRuntime().wrap(function _callee25$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              if (!(_this.audioBlob != null && !_this.isVoiceRecording)) {
                _context26.next = 3;
                break;
              }
              _context26.next = 3;
              return _this.sendVoiceMessage(_this.userToChatId, _this.audioBlob);
            case 3:
            case "end":
              return _context26.stop();
          }
        }, _callee25);
      }));
    });
    _defineProperty(_this, "setSendImageButtonClick", function () {
      var chatboxMessageInput = document.getElementById('chatbox-message-input');
      var chatboxVoiceInput = document.getElementById('chatbox-voice-input');
      var chatboxImageInput = document.getElementById('chatbox-image-input');
      var sendTextButton = document.getElementById('send-text-button');
      var sendVoiceButton = document.getElementById('send-voice-button');
      var sendImageButton = document.getElementById('send-image-button');
      sendImageButton.onclick = function () {
        if (!_js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].isTotalImagesToSendNotExceeded(_this.toSendImagesMap.size)) {
          return;
        }
        if (!_js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].isImageFilesizeNotExceeded(Array.from(_this.toSendImagesMap))) {
          return;
        }
        _this.toSendImagesMap.forEach(/*#__PURE__*/function () {
          var _ref26 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(value, key) {
            var blob, input, width, height, mimeType, extension, output;
            return _regeneratorRuntime().wrap(function _callee26$(_context27) {
              while (1) switch (_context27.prev = _context27.next) {
                case 0:
                  blob = value['file'];
                  input = value['file'].name;
                  width = Math.floor(value['width'] * .75);
                  height = Math.floor(value['height'] * .75);
                  mimeType = value['file'].type;
                  extension = mimeType.split("/")[1];
                  output = crypto_js__WEBPACK_IMPORTED_MODULE_94___default().MD5(_js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].generateRandomString(16)).toString() + "." + extension;
                  _context27.next = 9;
                  return _this.sendImageMessage(_this.userToChatId, blob, input, width, height, mimeType, extension, output);
                case 9:
                case "end":
                  return _context27.stop();
              }
            }, _callee26);
          }));
          return function (_x27, _x28) {
            return _ref26.apply(this, arguments);
          };
        }());
        _js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].unHideMediaGroup();
        _this.toSendImagesMap = new Map();
        chatboxImageInput.innerHTML = '';
        chatboxMessageInput.classList.remove('hidden');
        chatboxVoiceInput.classList.add('hidden');
        chatboxImageInput.classList.add('hidden');
        sendTextButton.classList.remove('hidden');
        sendVoiceButton.classList.add('hidden');
        sendImageButton.classList.add('hidden');
      };
    });
    _defineProperty(_this, "setSendMessageChatboxInputKeyDown", function () {
      var chatboxMessageInput = document.getElementById('chatbox-message-input');
      chatboxMessageInput.onkeydown = /*#__PURE__*/function () {
        var _ref27 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(e) {
          var message;
          return _regeneratorRuntime().wrap(function _callee27$(_context28) {
            while (1) switch (_context28.prev = _context28.next) {
              case 0:
                message = e.target.innerText.trim();
                if (!(_js_utils__WEBPACK_IMPORTED_MODULE_88__["default"].getUserAgentPlatformType() == 'desktop')) {
                  _context28.next = 7;
                  break;
                }
                if (!(e.key === 'Enter' && !e.shiftKey)) {
                  _context28.next = 7;
                  break;
                }
                e.preventDefault();
                if (_this.isEmptyOrSpaces(message)) {
                  _context28.next = 7;
                  break;
                }
                _context28.next = 7;
                return _this.sendTextMessage(_this.userToChatId, message);
              case 7:
              case "end":
                return _context28.stop();
            }
          }, _callee27);
        }));
        return function (_x29) {
          return _ref27.apply(this, arguments);
        };
      }();
    });
    _defineProperty(_this, "chatboxScrollToBottom", function () {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var chatbox = document.getElementById('chatbox');
      function isScrollbarAtBottom(element) {
        var offset = Math.abs(element.scrollHeight - element.clientHeight) * .40;
        return Math.abs(element.scrollHeight - element.clientHeight - element.scrollTop) <= offset;
      }
      if (force) {
        setTimeout(function () {
          chatbox.style.scrollBehavior = "smooth";
          chatbox.scrollTop = chatbox.scrollHeight;
        }, 500);
      } else {
        if (isScrollbarAtBottom(chatbox)) {
          setTimeout(function () {
            chatbox.style.scrollBehavior = "smooth";
            chatbox.scrollTop = chatbox.scrollHeight;
          }, 500);
        }
      }
    });
    _defineProperty(_this, "isEmptyOrSpaces", function (str) {
      return str === null || str.match(/^ *$/) !== null;
    });
    _defineProperty(_this, "sleep", function (ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    });
    return _this;
  }
  _inherits(_default, _Controller);
  return _createClass(_default);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_87__.Controller);
_defineProperty(_default, "values", {
  currentUser: Object,
  uid: String,
  publickey: String,
  privatekey: String,
  passphrase: String
});


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/registration_controller.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/registration_controller.js ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






























function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    var _this;
    _classCallCheck(this, _default);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _default, [].concat(args));
    _defineProperty(_this, "connect", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
          case "end":
            return _context.stop();
        }
      }, _callee);
    })));
    _defineProperty(_this, "showPassword", function (e) {
      var inputPassword = document.getElementById(e.params.inputPasswordId);
      var eyeSvg = document.getElementById(e.params.eyeSvg);
      var eyeSvgDefault = document.getElementById(e.params.eyeSvgDefault);
      if (e.params.isShow) {
        eyeSvg.classList.add("hidden");
        eyeSvgDefault.classList.remove("hidden");
        inputPassword.setAttribute("type", "text");
      } else {
        eyeSvg.classList.remove("hidden");
        eyeSvgDefault.classList.add("hidden");
        inputPassword.setAttribute("type", "password");
      }
    });
    return _this;
  }
  _inherits(_default, _Controller);
  return _createClass(_default);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_30__.Controller);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/resetpassword_controller.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/resetpassword_controller.js ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    var _this;
    _classCallCheck(this, _default);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _default, [].concat(args));
    _defineProperty(_this, "connect", function () {});
    _defineProperty(_this, "showPassword", function (e) {
      var inputPassword = document.getElementById(e.params.inputPasswordId);
      var eyeSvg = document.getElementById(e.params.eyeSvg);
      var eyeSvgDefault = document.getElementById(e.params.eyeSvgDefault);
      if (e.params.isShow) {
        eyeSvg.classList.add("hidden");
        eyeSvgDefault.classList.remove("hidden");
        inputPassword.setAttribute("type", "text");
      } else {
        eyeSvg.classList.remove("hidden");
        eyeSvgDefault.classList.add("hidden");
        inputPassword.setAttribute("type", "password");
      }
    });
    return _this;
  }
  _inherits(_default, _Controller);
  return _createClass(_default);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/security_controller.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/security_controller.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }



















function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var _default = /*#__PURE__*/function (_Controller) {
  function _default() {
    var _this;
    _classCallCheck(this, _default);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, _default, [].concat(args));
    _defineProperty(_this, "connect", function () {});
    _defineProperty(_this, "showPassword", function (e) {
      var inputPassword = document.getElementById(e.params.inputPasswordId);
      var eyeSvg = document.getElementById(e.params.eyeSvg);
      var eyeSvgDefault = document.getElementById(e.params.eyeSvgDefault);
      if (e.params.isShow) {
        eyeSvg.classList.add("hidden");
        eyeSvgDefault.classList.remove("hidden");
        inputPassword.setAttribute("type", "text");
      } else {
        eyeSvg.classList.remove("hidden");
        eyeSvgDefault.classList.add("hidden");
        inputPassword.setAttribute("type", "password");
      }
    });
    return _this;
  }
  _inherits(_default, _Controller);
  return _createClass(_default);
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.js */ "./assets/bootstrap.js");
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/lib/esm/index.js");

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */



/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");

var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.(j%7Ct)sx?$"));
// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/js/utils.js":
/*!****************************!*\
  !*** ./assets/js/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array-buffer.constructor.js */ "./node_modules/core-js/modules/es.array-buffer.constructor.js");
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "./node_modules/core-js/modules/es.array-buffer.slice.js");
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.data-view.js */ "./node_modules/core-js/modules/es.data-view.js");
/* harmony import */ var core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_data_view_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.number.is-integer.js */ "./node_modules/core-js/modules/es.number.is-integer.js");
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "./node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "./node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.typed-array.at.js */ "./node_modules/core-js/modules/es.typed-array.at.js");
/* harmony import */ var core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_at_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "./node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "./node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "./node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "./node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "./node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "./node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last.js */ "./node_modules/core-js/modules/es.typed-array.find-last.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-last-index.js */ "./node_modules/core-js/modules/es.typed-array.find-last-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_last_index_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "./node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "./node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "./node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "./node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "./node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "./node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "./node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "./node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "./node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "./node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "./node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "./node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "./node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "./node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "./node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "./node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "./node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var core_js_modules_esnext_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.to-reversed.js */ "./node_modules/core-js/modules/esnext.typed-array.to-reversed.js");
/* harmony import */ var core_js_modules_esnext_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_to_reversed_js__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var core_js_modules_esnext_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.to-sorted.js */ "./node_modules/core-js/modules/esnext.typed-array.to-sorted.js");
/* harmony import */ var core_js_modules_esnext_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_to_sorted_js__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var core_js_modules_esnext_typed_array_with_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! core-js/modules/esnext.typed-array.with.js */ "./node_modules/core-js/modules/esnext.typed-array.with.js");
/* harmony import */ var core_js_modules_esnext_typed_array_with_js__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_typed_array_with_js__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var core_js_modules_web_atob_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! core-js/modules/web.atob.js */ "./node_modules/core-js/modules/web.atob.js");
/* harmony import */ var core_js_modules_web_atob_js__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_atob_js__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! core-js/modules/web.btoa.js */ "./node_modules/core-js/modules/web.btoa.js");
/* harmony import */ var core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_btoa_js__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! core-js/modules/web.dom-exception.constructor.js */ "./node_modules/core-js/modules/web.dom-exception.constructor.js");
/* harmony import */ var core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! core-js/modules/web.dom-exception.stack.js */ "./node_modules/core-js/modules/web.dom-exception.stack.js");
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! core-js/modules/web.dom-exception.to-string-tag.js */ "./node_modules/core-js/modules/web.dom-exception.to-string-tag.js");
/* harmony import */ var core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! core-js/modules/web.url.js */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "./node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_83__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "./node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_84__);
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! bowser */ "./node_modules/bowser/es5.js");
/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_85__);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_86__);
/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! wavesurfer.js */ "./node_modules/wavesurfer.js/dist/wavesurfer.esm.js");
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! flowbite */ "./node_modules/flowbite/lib/esm/index.js");
















var _Utils;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }





































































function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var MessageType = /*#__PURE__*/function () {
  function MessageType() {
    _classCallCheck(this, MessageType);
  }
  return _createClass(MessageType, null, [{
    key: "TEXT",
    get: function get() {
      return TEXT;
    }
  }, {
    key: "IMAGE",
    get: function get() {
      return IMAGE;
    }
  }, {
    key: "GIF",
    get: function get() {
      return GIF;
    }
  }]);
}();
_defineProperty(MessageType, "TEXT", 0);
_defineProperty(MessageType, "IMAGE", 1);
_defineProperty(MessageType, "GIF", 2);
_defineProperty(MessageType, "AUDIO", 3);
var Utils = /*#__PURE__*/_createClass(function Utils() {
  _classCallCheck(this, Utils);
});
_Utils = Utils;
_defineProperty(Utils, "encryptMessage", /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(publicKey, message) {
    var chunkSize,
      importedPublicKey,
      encoder,
      encodedMessage,
      chunks,
      i,
      encryptedChunks,
      totalLength,
      concatenatedEncryptedMessage,
      offset,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          chunkSize = _args.length > 2 && _args[2] !== undefined ? _args[2] : 190;
          _context.next = 3;
          return window.crypto.subtle.importKey("spki", publicKey, {
            name: "RSA-OAEP",
            hash: "SHA-256"
          }, false, ["encrypt"]);
        case 3:
          importedPublicKey = _context.sent;
          encoder = new TextEncoder();
          encodedMessage = encoder.encode(message);
          chunks = [];
          for (i = 0; i < encodedMessage.length; i += chunkSize) {
            chunks.push(encodedMessage.slice(i, i + chunkSize));
          }
          _context.next = 10;
          return Promise.all(chunks.map(function (chunk) {
            return window.crypto.subtle.encrypt({
              name: "RSA-OAEP"
            }, importedPublicKey, chunk);
          }));
        case 10:
          encryptedChunks = _context.sent;
          totalLength = encryptedChunks.reduce(function (acc, chunk) {
            return acc + chunk.byteLength;
          }, 0);
          concatenatedEncryptedMessage = new Uint8Array(totalLength);
          offset = 0;
          encryptedChunks.forEach(function (chunk) {
            concatenatedEncryptedMessage.set(new Uint8Array(chunk), offset);
            offset += chunk.byteLength;
          });
          return _context.abrupt("return", _Utils.arrayBufferToBase64(concatenatedEncryptedMessage.buffer));
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
_defineProperty(Utils, "decryptMessage", /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(privateKey, base64Message) {
    var chunkSize,
      encryptedMessage,
      importedPrivateKey,
      encryptedChunks,
      i,
      decryptedChunks,
      totalLength,
      concatenatedDecryptedMessage,
      offset,
      decoder,
      _args2 = arguments;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          chunkSize = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 256;
          encryptedMessage = _Utils.base64ToArrayBuffer(base64Message);
          _context2.next = 4;
          return window.crypto.subtle.importKey("pkcs8", privateKey, {
            name: "RSA-OAEP",
            hash: "SHA-256"
          }, false, ["decrypt"]);
        case 4:
          importedPrivateKey = _context2.sent;
          encryptedChunks = [];
          for (i = 0; i < encryptedMessage.byteLength; i += chunkSize) {
            encryptedChunks.push(encryptedMessage.slice(i, i + chunkSize));
          }
          _context2.next = 9;
          return Promise.all(encryptedChunks.map(function (chunk) {
            return window.crypto.subtle.decrypt({
              name: "RSA-OAEP"
            }, importedPrivateKey, chunk);
          }));
        case 9:
          decryptedChunks = _context2.sent;
          totalLength = decryptedChunks.reduce(function (acc, chunk) {
            return acc + chunk.byteLength;
          }, 0);
          concatenatedDecryptedMessage = new Uint8Array(totalLength);
          offset = 0;
          decryptedChunks.forEach(function (chunk) {
            concatenatedDecryptedMessage.set(new Uint8Array(chunk), offset);
            offset += chunk.byteLength;
          });
          decoder = new TextDecoder();
          return _context2.abrupt("return", decoder.decode(concatenatedDecryptedMessage));
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
_defineProperty(Utils, "generateEncryptionKeyPair", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  var keyPair, publicKey, privateKey;
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.next = 2;
        return window.crypto.subtle.generateKey({
          name: "RSA-OAEP",
          modulusLength: 2048,
          publicExponent: new Uint8Array([1, 0, 1]),
          hash: "SHA-256"
        }, true, ["encrypt", "decrypt"]);
      case 2:
        keyPair = _context3.sent;
        _context3.next = 5;
        return window.crypto.subtle.exportKey("spki", keyPair.publicKey);
      case 5:
        publicKey = _context3.sent;
        _context3.next = 8;
        return window.crypto.subtle.exportKey("pkcs8", keyPair.privateKey);
      case 8:
        privateKey = _context3.sent;
        return _context3.abrupt("return", {
          publicKey: publicKey,
          privateKey: privateKey
        });
      case 10:
      case "end":
        return _context3.stop();
    }
  }, _callee3);
})));
_defineProperty(Utils, "generateRandomString", function (length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
});
_defineProperty(Utils, "arrayBufferToBase64", function (buffer) {
  var uint8Array = new Uint8Array(buffer);
  var binary = '';
  var len = uint8Array.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binary);
});
_defineProperty(Utils, "base64ToArrayBuffer", function (base64) {
  var binaryString = window.atob(base64);
  var len = binaryString.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
});
_defineProperty(Utils, "formatTimestampIntoDaysOfWeek", function (timestamp) {
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Convert epoch to milliseconds and create a Date object
  var date = new Date(parseInt(timestamp));

  // Get today's date
  var today = new Date();

  // Strip time from today's date and just keep year, month, day
  var startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();

  // Strip time from yesterday
  var startOfYesterday = startOfToday - 86400000; // 24 hours earlier

  // Get date 7 days ago at midnight
  var oneWeekAgo = startOfToday - 7 * 86400000;

  // Strip time from the timestamp date
  var dateWithoutTime = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

  // If the timestamp is within today's range
  if (dateWithoutTime >= startOfToday) {
    return "Today";
  }

  // If the timestamp is within yesterday's range
  if (dateWithoutTime >= startOfYesterday && dateWithoutTime < startOfToday) {
    return "Yesterday";
  }

  // If the timestamp is within the last 7 days
  if (dateWithoutTime >= oneWeekAgo && dateWithoutTime < startOfYesterday) {
    return daysOfWeek[date.getDay()];
  }

  // If the timestamp is older than a week, return the original timestamp
  return timestamp;
});
_defineProperty(Utils, "reOrderUsersListIfNewMessageIsBeingSentOrReceived", function (id) {
  var usersList = document.getElementById('users-list');
  var element = document.getElementById("user".concat(id));
  usersList.removeChild(element);
  usersList.prepend(element);
});
_defineProperty(Utils, "isTimestampIsGreaterThanNminutes", function (timestamp, N) {
  var t = parseInt(timestamp);
  var milliseconds = N * 60 * 1000;
  var currentTime = Date.now();
  return t >= currentTime - milliseconds;
});
_defineProperty(Utils, "saveCaretPosition", function (div) {
  var selection = window.getSelection();
  var range = selection.getRangeAt(0);
  var preCaretRange = range.cloneRange();
  preCaretRange.selectNodeContents(div);
  preCaretRange.setEnd(range.endContainer, range.endOffset);
  return preCaretRange.toString().length; // Return caret's offset within the div
});
_defineProperty(Utils, "restoreCaretPosition", function (div, offset) {
  var selection = window.getSelection();
  var range = document.createRange();
  var walker = document.createTreeWalker(div, NodeFilter.SHOW_TEXT, null, false);
  var currentNode = walker.nextNode();
  var currentOffset = 0;
  while (currentNode) {
    var nodeLength = currentNode.length;
    if (currentOffset + nodeLength >= offset) {
      // We found the node where caret should be restored
      range.setStart(currentNode, offset - currentOffset);
      range.setEnd(currentNode, offset - currentOffset);
      break;
    }
    currentOffset += nodeLength;
    currentNode = walker.nextNode();
  }
  selection.removeAllRanges();
  selection.addRange(range);
});
_defineProperty(Utils, "getUserAgentPlatformType", function () {
  var browser = bowser__WEBPACK_IMPORTED_MODULE_85___default().getParser(window.navigator.userAgent);
  return browser.parsedResult.platform.type;
});
_defineProperty(Utils, "hideMediaGroup", function () {
  var group = document.getElementById('media-group');
  if (_Utils.getUserAgentPlatformType() == 'mobile') {
    group.classList.add('hidden');
  }
});
_defineProperty(Utils, "unHideMediaGroup", function () {
  var group = document.getElementById('media-group');
  group.classList.remove('hidden');
});
_defineProperty(Utils, "sortUsersListBaseOnLastMessageTimestamp", function () {
  var usersList = document.getElementById('users-list');
  var usersElements = Array.from(usersList.children);
  usersElements.sort(function (a, b) {
    var timestampA = parseInt(a.querySelector('.last-message').getAttribute('timestamp'));
    var timestampB = parseInt(b.querySelector('.last-message').getAttribute('timestamp'));
    return timestampB - timestampA;
  }).forEach(function (element) {
    usersList.removeChild(element);
    usersList.appendChild(element);
  });
});
_defineProperty(Utils, "isTotalImagesToSendNotExceeded", function (totalFiles) {
  var MAX_IMAGES_UPLOAD = 5;
  if (totalFiles > MAX_IMAGES_UPLOAD) {
    var title = 'Maximum files to upload exceeded';
    var content = "You can upload a maximum of ".concat(MAX_IMAGES_UPLOAD, " files, but you have attempted to upload ").concat(totalFiles, " files.");
    _Utils.showAlertMessage(title, content);
    return false;
  }
  return true;
});
_defineProperty(Utils, "isImageFilesizeNotExceeded", function (images) {
  function toOrdinal(num) {
    if (typeof num !== 'number' || !Number.isInteger(num)) {
      throw new Error('Input must be an integer.');
    }
    var suffixes = ["th", "st", "nd", "rd"];
    var v = num % 100;
    return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  }
  var MAX_SIZE_IN_BYTES = 10 * 1024 * 1024; // 10MB
  for (var i = 0; i < images.length; i++) {
    var _images$i = _slicedToArray(images[i], 2),
      key = _images$i[0],
      value = _images$i[1];
    var filesize = value['file'].size;
    if (filesize > MAX_SIZE_IN_BYTES) {
      var title = 'Maximum upload filesize exceeded';
      var content = "The ".concat(toOrdinal(i + 1), " image size (").concat(Math.round(filesize / 1048576), " MB) exceeds the maximum allowed filesize of 10 MB.");
      _Utils.showAlertMessage(title, content);
      return false;
    }
  }
  return true;
});
_defineProperty(Utils, "showAlertMessage", function (title, content) {
  var alertMessageContainer = document.getElementById('alert-message-container');
  var alertMessageTitle = alertMessageContainer.querySelector('#alert-message-title');
  var alertMessageContent = alertMessageContainer.querySelector('#alert-message-content');
  alertMessageTitle.textContent = title;
  alertMessageContent.textContent = content;
  alertMessageContainer.classList.remove('hidden');
  setTimeout(function () {
    alertMessageContainer.classList.add('hidden');
  }, 5000);
});
_defineProperty(Utils, "progressSvgElementCallback", function (messageTempElement, percentCompleted) {
  var svgCircleElement = messageTempElement.querySelector(".svgCircle");
  var progressCircleElement = messageTempElement.querySelector(".progressCircle");
  var imgCheck = messageTempElement.querySelector('.img-check');
  imgCheck.classList.add('hidden');
  if (percentCompleted == 100) {
    svgCircleElement.classList.add('hidden');
  } else {
    svgCircleElement.classList.remove('hidden');
    progressCircleElement.setAttribute("stroke-dashoffset", "calc(251.2px - (251.2px * ".concat(percentCompleted - 1, " / 100))"));
  }
});
_defineProperty(Utils, "reOrderLastFourChatboxElements", function () {
  var chatbox = document.getElementById('chatbox');
  var chatboxArray = Array.from(chatbox.children);
  var chatboxElements = chatboxArray.slice(-4);
  chatboxElements.sort(function (a, b) {
    var timestampA = a.getAttribute('timestamp');
    var timestampB = b.getAttribute('timestamp');
    return timestampA - timestampB;
  }).forEach(function (element) {
    chatbox.removeChild(element);
    chatbox.appendChild(element);
  });
});
_defineProperty(Utils, "setForwardUserUiDefaults", function (usersMap) {
  usersMap.forEach(function (value, key) {
    var userId = key;
    var forwardUserSvgSent = document.getElementById("forward-user-svg-sent-".concat(userId));
    var forwardUserSvgDefault = document.getElementById("forward-user-svg-default-".concat(userId));
    var forwardUserSpanText = document.getElementById("forward-user-span-text-".concat(userId));
    var forwadUserButton = document.getElementById("forward-user-button-".concat(userId));
    forwadUserButton.removeAttribute('disabled');
    forwadUserButton.classList.remove("cursor-not-allowed");
    forwardUserSvgSent.classList.add('hidden');
    forwardUserSvgDefault.classList.remove('hidden');
    forwardUserSpanText.textContent = 'Send';
  });
});
_defineProperty(Utils, "setChatboxMessageAvatarHidden", function () {
  // if the user has successive messages then only show 1 avatar
  var chatbox = document.getElementById('chatbox');
  var elements = Array.from(chatbox.children);
  for (var i = 0; i < elements.length - 1; i++) {
    var current = elements[i];
    var next = elements[i + 1];
    var avatar1 = current.querySelector('.avatar');
    var avatar2 = next.querySelector('.avatar');
    if (avatar1 != null && avatar2 != null) {
      avatar1.classList.add('invisible');
    }
  }
});
_defineProperty(Utils, "setChatboxMessageBorderAndMargin", function () {
  // if the user has successive messages then the last element border and margin must be updated
  var chatbox = document.getElementById('chatbox');
  var elements = Array.from(chatbox.children);
  for (var i = 0; i < elements.length - 1; i++) {
    var current = elements[i];
    var next = elements[i + 1];
    var avatar1 = current.querySelector('.avatar');
    var avatar2 = next.querySelector('.avatar');
    if (avatar1 != null && avatar2 != null) {
      current.classList.remove('mb-5');
      current.querySelector('.chat-message-container').classList.remove('rounded-bl-none');
      if (i != elements.length - 2) {
        next.classList.add('mb-5');
      }
    } else if (avatar1 == null && avatar2 == null) {
      try {
        current.classList.remove('mb-5');
        current.querySelector('.chat-message-container').classList.remove('rounded-br-none');
        if (i != elements.length - 2) {
          next.classList.add('mb-5');
        }
      } catch (e) {}
    } else {
      if (i != elements.length - 2) {
        next.classList.add('mb-5');
      }
    }
  }
});
_defineProperty(Utils, "setChatboxDividerTimestamp", function () {
  var chatbox = document.getElementById('chatbox');
  var elements = Array.from(chatbox.children);
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var dividerElements = chatbox.querySelectorAll('.divider-timestamp');
  dividerElements.forEach(function (element) {
    chatbox.removeChild(element);
  });
  var prevDate = null;
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var timestamp = element.getAttribute('timestamp');
    if (timestamp != null) {
      var currentDate = new Date(parseInt(timestamp));
      var currentLocaleDateString = currentDate.toLocaleDateString('en-US', options);
      if (prevDate != currentLocaleDateString) {
        var dividerTimestampElement = null;
        var formattedTimestamp = _Utils.formatTimestampIntoDaysOfWeek(timestamp);
        if (formattedTimestamp == timestamp) {
          dividerTimestampElement = _Utils.createDividerTimestampElement(currentLocaleDateString);
        } else {
          dividerTimestampElement = _Utils.createDividerTimestampElement(formattedTimestamp);
        }
        chatbox.insertBefore(dividerTimestampElement, element);
      }
      prevDate = currentLocaleDateString;
    }
  }
});
_defineProperty(Utils, "setViewerJsImageElement", function (messageElement, viewer) {
  var viewerjsContainer = document.getElementById("viewerjs-images-container");
  var imageDiv = messageElement.querySelector('.image');
  var url = imageDiv.getAttribute('url');
  var img = document.createElement('img');
  img.src = url;
  var li = document.createElement('li');
  li.appendChild(img);
  viewerjsContainer.appendChild(li);
  var index = viewerjsContainer.childNodes.length - 1;
  viewer.update();
  imageDiv.onclick = function () {
    viewer.show();
    viewer.view(index);
  };
});
_defineProperty(Utils, "setUserLastMessageContent", function (id, content) {
  var userLastMessage = document.getElementById("user".concat(id, "-last-message"));
  userLastMessage.textContent = content;
});
_defineProperty(Utils, "setUserLastMessageTimestamp", function (id, timestamp) {
  var userLastMessage = document.getElementById("user".concat(id, "-last-message"));
  userLastMessage.setAttribute('timestamp', timestamp);
});
_defineProperty(Utils, "setUserLastMessageTimeAgo", function (id, timestamp, timeAgo) {
  var userLastMessageTimeAgo = document.getElementById("user".concat(id, "-time-ago"));
  userLastMessageTimeAgo.textContent = "·" + timeAgo.format(timestamp, 'mini-now');
  if (_Utils.isTimestampIsGreaterThanNminutes(timestamp, 60)) {
    var intervalId = setInterval(function () {
      var userLastMessage = document.getElementById("user".concat(id, "-last-message"));
      var prevTimestamp = userLastMessage.getAttribute('timestamp');
      if (prevTimestamp != timestamp) {
        clearInterval(intervalId);
      } else {
        userLastMessageTimeAgo.textContent = "·" + timeAgo.format(timestamp, 'mini-now');
      }
    }, 30 * 1000);
  }
});
_defineProperty(Utils, "setMessageTextElementTimeAgo", function (element, timestamp, timeAgo) {
  element.textContent = timeAgo.format(timestamp, 'round');
  if (_Utils.isTimestampIsGreaterThanNminutes(timestamp, 60)) {
    setInterval(function () {
      element.textContent = timeAgo.format(timestamp, 'round');
    }, 30 * 1000);
  }
});
_defineProperty(Utils, "setIntroductionElement", function (name, avatar) {
  var chatbox = document.getElementById('chatbox');
  var container = document.createElement('div');
  var flexContainer = document.createElement('div');
  flexContainer.className = 'flex flex-col justify-center items-center absolute left-0 right-0 top-0 bottom-0';
  var profileImage = document.createElement('div');
  profileImage.className = 'w-16 h-16 rounded-full bg-contain bg-center shadow border border-gray-200 dark:border-gray-700 mb-2';
  profileImage.style.backgroundImage = "url('".concat(avatar, "')");
  var nameParagraph = document.createElement('p');
  nameParagraph.className = 'outline-none text-sm text-black opacity-80 dark:text-white dark:opacity-90 font-semibold leading-4 tracking-[.01rem] default-outline';
  nameParagraph.tabIndex = 0;
  nameParagraph.textContent = name;
  var encryptedContainer = document.createElement('div');
  encryptedContainer.className = 'bg-indigo-50 dark:bg-gray-600 rounded p-3 mt-8 mx-5 sm:mx-0';
  var flexInnerContainer = document.createElement('div');
  flexInnerContainer.className = 'flex justify-center items-center gap-1';
  var svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgIcon.setAttribute('viewBox', '0 0 24 24');
  svgIcon.setAttribute('fill', 'currentColor');
  svgIcon.setAttribute('aria-hidden', 'true');
  svgIcon.setAttribute('class', 'w-5 h-6 group-focus:text-indigo-400 hover:text-indigo-400 active:text-indigo-400 active:scale-110 dark:text-gray-500 transition ease-out duration-200 text-gray-300');
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('fill-rule', 'evenodd');
  path.setAttribute('d', 'M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z');
  path.setAttribute('clip-rule', 'evenodd');
  svgIcon.appendChild(path);
  var encryptedText = document.createElement('span');
  encryptedText.className = 'flex align-middle outline-none text-xs text-black opacity-80 dark:text-white dark:opacity-90 font-bold leading-4 tracking-[.01rem] default-outline';
  encryptedText.tabIndex = 0;
  encryptedText.textContent = 'End-to-end encrypted';
  flexInnerContainer.appendChild(svgIcon);
  flexInnerContainer.appendChild(encryptedText);
  var messageText = document.createElement('div');
  messageText.className = 'text-center mx-auto outline-none text-xs text-black opacity-80 dark:text-white dark:opacity-90 leading-4 tracking-[.01rem] default-outline';
  messageText.tabIndex = 0;
  messageText.innerHTML = 'Messages and calls are secured with end-to-end encryption. <span class="text-blue-500">Learn more</span>';
  encryptedContainer.appendChild(flexInnerContainer);
  encryptedContainer.appendChild(messageText);
  flexContainer.appendChild(profileImage);
  flexContainer.appendChild(nameParagraph);
  flexContainer.appendChild(encryptedContainer);
  container.appendChild(flexContainer);
  chatbox.appendChild(container);
});
_defineProperty(Utils, "createDividerTimestampElement", function (date) {
  // Create the main container div
  var container = document.createElement('div');
  container.className = 'divider-timestamp w-full my-7 flex items-center justify-center';

  // Create the left border div
  var leftBorder = document.createElement('div');
  leftBorder.className = 'w-full h-0 border-t border-dashed dark:border-gray-600 dark:bg-opacity-0';

  // Create the text element
  var dateElement = document.createElement('p');
  dateElement.className = 'outline-none text-xs font-light text-black opacity-80 dark:text-white dark:opacity-90 leading-4 tracking-[.01rem] mx-2 whitespace-nowrap';
  dateElement.textContent = date;

  // Create the right border div
  var rightBorder = document.createElement('div');
  rightBorder.className = 'w-full h-0 border-t border-dashed dark:border-gray-600 dark:bg-opacity-0';

  // Append the elements to the container
  container.appendChild(leftBorder);
  container.appendChild(dateElement);
  container.appendChild(rightBorder);

  // Return the complete container
  return container;
});
_defineProperty(Utils, "createProgressSvgElemet", function () {
  var SVG_NS = "http://www.w3.org/2000/svg";

  // Create the SVG element
  var svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  // fixed top-0 right-0 left-0 z-50 justify-center items-center
  svg.classList.add("svgCircle", "w-12", "h-12", "hidden", "absolute", "inset-0", "justify-center", "self-center", "m-auto");

  // Create the background circle
  var bgCircle = document.createElementNS(SVG_NS, "circle");
  bgCircle.setAttribute("cx", "50");
  bgCircle.setAttribute("cy", "50");
  bgCircle.setAttribute("r", "40");
  bgCircle.setAttribute("fill", "transparent");
  bgCircle.setAttribute("stroke-width", "5");
  bgCircle.classList.add("text-gray-200", "stroke-current");

  // Create the progress circle
  var progressCircle = document.createElementNS(SVG_NS, "circle");
  progressCircle.setAttribute("cx", "50");
  progressCircle.setAttribute("cy", "50");
  progressCircle.setAttribute("r", "40");
  progressCircle.setAttribute("fill", "transparent");
  progressCircle.setAttribute("stroke-width", "5");
  progressCircle.setAttribute("stroke-linecap", "round");
  progressCircle.setAttribute("stroke-dasharray", "251.2");
  progressCircle.setAttribute("stroke-dashoffset", "calc(251.2px - (251.2px * 1) / 100)");
  progressCircle.classList.add("progressCircle", "text-indigo-500", "progress-ring__circle", "stroke-current");

  // Append elements to the SVG
  svg.appendChild(bgCircle);
  svg.appendChild(progressCircle);
  return svg;
});
_defineProperty(Utils, "createLoaderElement", function () {
  var colorTheme = localStorage.getItem('color-theme');
  var loader = document.createElement("div");
  loader.className = colorTheme === "dark" ? "loader-white absolute" : "loader-black absolute";
  loader.style.left = "calc(50% - 25px)";
  loader.style.top = "50%";
  return loader;
});
_defineProperty(Utils, "createVoiceMessageElement", function (url) {
  var recordInput = document.createElement('div');
  recordInput.classList.add("group", "w-full", "self-center", "rounded", "transition", "duration-500", "bg-indigo-50", "dark:bg-gray-600");
  var flexContainer = document.createElement('div');
  flexContainer.classList.add("flex", "relative", "items-center", "outline-none", "gap-2");
  flexContainer.setAttribute("tabindex", "0");
  flexContainer.setAttribute("aria-label", "audio message");
  var startBtn = document.createElement('button');
  startBtn.classList.add("px-2.5", "py-2", "flex", "justify-center", "items-center", "rounded-[.75rem]", "outline-none", "transition-all", "duration-200", "bg-indigo-300", "active:bg-indigo-400");
  startBtn.setAttribute("title", "Play");
  startBtn.setAttribute("aria-label", "Play");
  startBtn.type = "button";
  var playSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  playSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  playSvg.setAttribute('fill', 'none');
  playSvg.setAttribute('viewBox', '0 0 24 24');
  playSvg.setAttribute('stroke-width', '1.5');
  playSvg.setAttribute('stroke', 'currentColor');
  playSvg.setAttribute('aria-hidden', 'true');
  playSvg.classList.add("w-3.5", "h-3.5", "text-white");
  var playPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  playPath.setAttribute('stroke-linecap', 'round');
  playPath.setAttribute('stroke-linejoin', 'round');
  playPath.setAttribute('d', 'M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z');
  playSvg.appendChild(playPath);
  var stopSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  stopSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  stopSvg.setAttribute('fill', 'none');
  stopSvg.setAttribute('viewBox', '0 0 24 24');
  stopSvg.setAttribute('stroke-width', '1.5');
  stopSvg.setAttribute('stroke', 'currentColor');
  stopSvg.setAttribute('aria-hidden', 'true');
  stopSvg.classList.add("hidden", "w-3.5", "h-3.5", "text-white");
  var stopRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  stopRect.setAttribute('width', '12');
  stopRect.setAttribute('height', '12');
  stopRect.setAttribute('x', '6');
  stopRect.setAttribute('y', '6');
  stopRect.setAttribute('stroke', 'currentColor');
  stopRect.setAttribute('stroke-linejoin', 'round');
  stopRect.setAttribute('stroke-width', '2');
  stopRect.setAttribute('rx', '1');
  stopSvg.appendChild(stopRect);
  startBtn.appendChild(playSvg);
  startBtn.appendChild(stopSvg);
  var waveformDiv = document.createElement('div');
  waveformDiv.classList.add("w-36");
  var wavesurfer = wavesurfer_js__WEBPACK_IMPORTED_MODULE_87__["default"].create({
    container: waveformDiv,
    waveColor: 'rgb(200, 0, 200)',
    hideScrollbar: true,
    autoCenter: true,
    height: 30,
    barHeight: 25,
    barWidth: 1.5,
    cursorWidth: 0,
    url: url
  });
  var timer = document.createElement('p');
  timer.classList.add("outline-none", "text-xs", "font-light", "leading-4", "tracking-[.01rem]", "text-black", "dark:text-white", "opacity-80", "dark:opacity-90");
  timer.setAttribute("tabindex", "0");
  timer.setAttribute("aria-label", "00:00");
  startBtn.onclick = function () {
    return wavesurfer.playPause();
  };
  wavesurfer.on('ready', function (duration) {
    var remainingTime = wavesurfer.getDuration();
    var minutes = Math.floor(remainingTime / 60);
    var seconds = Math.floor(remainingTime % 60);
    var formattedTime = "0".concat(minutes, ":").concat(seconds.toString().padStart(2, '0'));
    timer.textContent = formattedTime;
  });
  wavesurfer.on('finish', function () {
    wavesurfer.seekTo(0);
  });
  wavesurfer.on('pause', function () {
    playSvg.classList.remove('hidden');
    stopSvg.classList.add('hidden');
  });
  wavesurfer.on('play', function () {
    playSvg.classList.add('hidden');
    stopSvg.classList.remove('hidden');
  });
  wavesurfer.on('timeupdate', function (currentTime) {
    var remainingTime = Math.abs(wavesurfer.getDuration() - currentTime);
    var minutes = Math.floor(remainingTime / 60);
    var seconds = Math.floor(remainingTime % 60);
    var formattedTime = "0".concat(minutes, ":").concat(seconds.toString().padStart(2, '0'));
    timer.textContent = formattedTime;
  });
  var progressSvg = _Utils.createProgressSvgElemet();
  flexContainer.appendChild(progressSvg);
  flexContainer.appendChild(startBtn);
  flexContainer.appendChild(waveformDiv);
  flexContainer.appendChild(timer);
  recordInput.appendChild(flexContainer);
  return recordInput;
});
_defineProperty(Utils, "createImageMessageElement", function (url) {
  // Create button element
  var divContainer = document.createElement('div');
  divContainer.className = 'outline-none cursor-pointer';

  // Create div for background image
  var imageDiv = document.createElement('div');
  imageDiv.setAttribute('url', url);
  imageDiv.className = 'image relative rounded bg-cover bg-center w-56 h-56';
  imageDiv.style.backgroundImage = "url(\"".concat(url, "\")");
  var progressSvg = _Utils.createProgressSvgElemet();

  // Create inner div for overlay
  var overlayDiv = document.createElement('div');
  overlayDiv.className = 'w-full h-full flex justify-center items-center rounded bg-black bg-opacity-20 hover:bg-opacity-10 transition duration-200';

  // Append the overlay div to the image div
  imageDiv.appendChild(progressSvg);
  imageDiv.appendChild(overlayDiv);

  // Append the image div to the button
  divContainer.appendChild(imageDiv);
  return divContainer;
});
_defineProperty(Utils, "createVerticalThreeDotsOptionsElement", function (placement, type) {
  var isIncomingMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  function getRootParent(node) {
    var current = node;
    while (current.parentNode) {
      if (current.getAttribute('messageId')) {
        break;
      }
      current = current.parentNode;
    }
    return current;
  }
  function createDropdownElement(options, placement) {
    // Create the dropdown container
    var dropdownDiv = document.createElement('div');
    var dropdown = new flowbite__WEBPACK_IMPORTED_MODULE_88__.Dropdown(dropdownDiv, options, {
      placement: placement
    });
    dropdownDiv.classList.add('hidden', 'top-0', 'absolute', 'z-[100]', 'w-[12.5rem]', 'mt-2', 'rounded-sm', 'bg-white', 'dark:bg-gray-800', 'shadow-lg', 'border', 'border-gray-100', 'dark:border-gray-600', 'focus:outline-none');
    dropdownDiv.setAttribute('role', 'menu');
    dropdownDiv.setAttribute('aria-orientation', 'vertical');
    dropdownDiv.setAttribute('aria-labelledby', 'menu-button');
    dropdownDiv.setAttribute('tabindex', '-1');

    // List of button items
    var buttons = [{
      label: 'Reply',
      iconPath: 'M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
    }, {
      label: 'Copy',
      iconPath: 'M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z'
    }, {
      label: 'Forward',
      iconPath: 'M4.248 19C3.22 15.77 5.275 8.232 12.466 8.232V6.079a1.025 1.025 0 0 1 1.644-.862l5.479 4.307a1.108 1.108 0 0 1 0 1.723l-5.48 4.307a1.026 1.026 0 0 1-1.643-.861v-2.154C5.275 13.616 4.248 19 4.248 19Z'
    }];
    if (type == MessageType.AUDIO || type == MessageType.IMAGE) {
      buttons.splice(1, 1);
    }
    if (!isIncomingMessage) {
      buttons.push({
        label: 'Delete Message',
        iconPath: 'M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
      });
    }

    // Create buttons 
    buttons.forEach(function (button) {
      var btn = document.createElement('button');
      btn.classList.add('w-full', 'px-4', 'py-3', 'flex', 'items-center', 'border-b', 'opacity-60', 'dark:opacity-70', 'outline-none', 'text-sm', 'border-gray-200', 'dark:border-gray-600', 'transition-all', 'duration-200', 'text-black', 'hover:bg-gray-50', 'dark:hover:bg-gray-600', 'active:bg-gray-100', 'dark:focus:bg-gray-600');
      if (button.label === 'Delete Message') {
        btn.classList.add('text-red-500', 'hover:bg-red-50', 'dark:hover:text-red-50', 'active:bg-red-100', 'dark:hover:bg-red-900');
      } else {
        btn.classList.add('dark:text-white');
      }
      var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      icon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      icon.setAttribute('fill', 'none');
      icon.setAttribute('viewBox', '0 0 24 24');
      icon.setAttribute('stroke-width', '1.5');
      icon.setAttribute('stroke', 'currentColor');
      icon.setAttribute('aria-hidden', 'true');
      icon.classList.add('h-5', 'w-5', 'mr-3');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      path.setAttribute('d', button.iconPath);
      icon.appendChild(path);
      btn.appendChild(icon);
      btn.appendChild(document.createTextNode(button.label));
      btn.onclick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var messageElement, messageData, forwardButtonTrigger, _messageElement, _messageData, response, blob, _response, _blob, img;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              dropdown.hide();
              if (!(button.label == 'Reply')) {
                _context4.next = 4;
                break;
              }
              _context4.next = 43;
              break;
            case 4:
              if (!(button.label == 'Copy')) {
                _context4.next = 11;
                break;
              }
              messageElement = getRootParent(btn);
              messageData = JSON.parse(messageElement.getAttribute('messageData'));
              _context4.next = 9;
              return messageElement.copyTextMessageCallback(messageData.content);
            case 9:
              _context4.next = 43;
              break;
            case 11:
              if (!(button.label == 'Forward')) {
                _context4.next = 42;
                break;
              }
              forwardButtonTrigger = document.getElementById('static-modal-forward-users-list-button');
              _messageElement = getRootParent(btn);
              _messageData = JSON.parse(_messageElement.getAttribute('messageData'));
              forwardButtonTrigger.click();
              if (!(type == MessageType.TEXT)) {
                _context4.next = 20;
                break;
              }
              _messageElement.forwardMessageCallback(type, _messageData.content, null, null, null, null, null, null, null);
              _context4.next = 40;
              break;
            case 20:
              if (!(type == MessageType.AUDIO)) {
                _context4.next = 30;
                break;
              }
              _context4.next = 23;
              return fetch(_messageData.content);
            case 23:
              response = _context4.sent;
              _context4.next = 26;
              return response.blob();
            case 26:
              blob = _context4.sent;
              _messageElement.forwardMessageCallback(type, null, blob, null, null, null, null, null, null);
              _context4.next = 40;
              break;
            case 30:
              if (!(type == MessageType.IMAGE)) {
                _context4.next = 40;
                break;
              }
              _context4.next = 33;
              return fetch(_messageData.content);
            case 33:
              _response = _context4.sent;
              _context4.next = 36;
              return _response.blob();
            case 36:
              _blob = _context4.sent;
              img = document.createElement('img');
              img.src = URL.createObjectURL(_blob);
              img.onload = function () {
                var width = img.width;
                var height = img.height;
                var mimeType = _blob.type;
                var extension = mimeType.split("/")[1];
                var input = "input" + "." + extension;
                var output = "output" + "." + extension;
                _messageElement.forwardMessageCallback(type, null, _blob, input, width, height, mimeType, extension, output);
              };
            case 40:
              _context4.next = 43;
              break;
            case 42:
              if (button.label == 'Delete Message') {}
            case 43:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      dropdownDiv.appendChild(btn);
    });
    return [dropdownDiv, dropdown];
  }
  var options = document.createElement('div');

  // Create the SVG element
  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.classList.add('w-5', 'h-5', 'text-neutral-400');
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('fill', 'currentColor');
  svg.setAttribute('viewBox', '0 0 24 24');

  // Create the path element
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z');

  // Append the path to the SVG
  svg.appendChild(path);
  var _createDropdownElemen = createDropdownElement(options, placement),
    _createDropdownElemen2 = _slicedToArray(_createDropdownElemen, 2),
    dropdownElement = _createDropdownElemen2[0],
    dropdown = _createDropdownElemen2[1];
  options.classList.add('invisible', 'cursor-pointer');
  options.appendChild(svg);
  //options.appendChild(dropdownElement)

  options.onclick = function () {
    dropdown.show();
  };
  return [options, dropdownElement];
});
_defineProperty(Utils, "createOutgoingMessageTextElement", function (content, timestamp, timeAgo) {
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute('timestamp', timestamp);
  var selectNoneDiv = document.createElement('div');
  selectNoneDiv.classList.add('select-none');
  var flexDiv = document.createElement('div');
  flexDiv.classList.add('flex', 'justify-end');
  var mr4Div = document.createElement('div');
  mr4Div.classList.add('mr-4');
  var flexItemsDiv = document.createElement('div');
  flexItemsDiv.classList.add('flex', 'relative', 'items-end');
  var chatMessageContainer = document.createElement('div');
  chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-4', 'transition', 'duration-500', 'rounded', 'rounded-br-none', 'order-2', 'bg-indigo-50', 'dark:bg-gray-600');
  var chatContent = document.createElement('p');
  chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90');
  chatContent.setAttribute('tabindex', '0');
  chatContent.textContent = content;
  chatMessageContainer.appendChild(chatContent);
  var timeDiv = document.createElement('div');
  timeDiv.classList.add('ml-1.5', 'order-1');
  var timeText = document.createElement('p');
  timeText.classList.add('hidden', 'flex', 'justify-end', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre');
  timeText.textContent = timestamp;
  _Utils.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo);
  mainDiv.appendChild(timeText);
  var divOptions = document.createElement('div');
  var _Utils$createVertical = _Utils.createVerticalThreeDotsOptionsElement('top-end', MessageType.TEXT),
    _Utils$createVertical2 = _slicedToArray(_Utils$createVertical, 2),
    options = _Utils$createVertical2[0],
    dropdownElement = _Utils$createVertical2[1];
  divOptions.style.height = '100%';
  divOptions.classList.add('flex', 'flex-col', 'justify-between', 'items-center');
  var img = document.createElement('img');
  img.src = '/gray_checks.svg';
  img.classList.add('w-[.875rem]', 'h-[.875rem]', 'img-check');
  divOptions.appendChild(options);
  divOptions.appendChild(img);
  divOptions.appendChild(dropdownElement);
  flexItemsDiv.appendChild(chatMessageContainer);
  flexItemsDiv.appendChild(timeDiv);
  flexItemsDiv.appendChild(divOptions);
  flexDiv.appendChild(mr4Div);
  flexDiv.appendChild(flexItemsDiv);
  selectNoneDiv.appendChild(flexDiv);
  mainDiv.appendChild(selectNoneDiv);
  mainDiv.onclick = function () {
    timeText.classList.remove('hidden');
    options.classList.remove('invisible');
  };
  return mainDiv;
});
_defineProperty(Utils, "createOutgoingMessageVoiceElement", function (url, timestamp, timeAgo) {
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute('timestamp', timestamp);
  var selectNoneDiv = document.createElement('div');
  selectNoneDiv.classList.add('select-none');
  var flexDiv = document.createElement('div');
  flexDiv.classList.add('flex', 'justify-end');
  var mr4Div = document.createElement('div');
  mr4Div.classList.add('mr-4');
  var flexItemsDiv = document.createElement('div');
  flexItemsDiv.classList.add('flex', 'items-end');
  var chatMessageContainer = document.createElement('div');
  chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-4', 'transition', 'duration-500', 'rounded', 'rounded-br-none', 'order-2', 'bg-indigo-50', 'dark:bg-gray-600');
  var chatContent = document.createElement('p');
  chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90');
  chatContent.setAttribute('tabindex', '0');
  var voiceElement = _Utils.createVoiceMessageElement(url);
  chatMessageContainer.appendChild(voiceElement);
  var timeDiv = document.createElement('div');
  timeDiv.classList.add('ml-1.5', 'order-1');
  var timeText = document.createElement('p');
  timeText.classList.add('hidden', 'flex', 'justify-end', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre');
  timeText.textContent = timestamp;
  _Utils.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo);
  mainDiv.appendChild(timeText);
  var divOptions = document.createElement('div');
  var _Utils$createVertical3 = _Utils.createVerticalThreeDotsOptionsElement('top-end', MessageType.AUDIO),
    _Utils$createVertical4 = _slicedToArray(_Utils$createVertical3, 2),
    options = _Utils$createVertical4[0],
    dropdownElement = _Utils$createVertical4[1];
  divOptions.style.height = '100%';
  divOptions.classList.add('flex', 'flex-col', 'justify-between', 'items-center');
  var img = document.createElement('img');
  img.src = '/gray_checks.svg';
  img.classList.add('w-[.875rem]', 'h-[.875rem]', 'img-check');
  divOptions.appendChild(options);
  divOptions.appendChild(img);
  divOptions.appendChild(dropdownElement);
  flexItemsDiv.appendChild(chatMessageContainer);
  flexItemsDiv.appendChild(timeDiv);
  flexItemsDiv.appendChild(divOptions);
  flexDiv.appendChild(mr4Div);
  flexDiv.appendChild(flexItemsDiv);
  selectNoneDiv.appendChild(flexDiv);
  mainDiv.appendChild(selectNoneDiv);
  mainDiv.onclick = function () {
    timeText.classList.remove('hidden');
    options.classList.remove('invisible');
  };
  return mainDiv;
});
_defineProperty(Utils, "createOutgoingMessageImageElement", function (url, timestamp, timeAgo) {
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute('timestamp', timestamp);
  var selectNoneDiv = document.createElement('div');
  selectNoneDiv.classList.add('select-none');
  var flexDiv = document.createElement('div');
  flexDiv.classList.add('flex', 'justify-end');
  var mr4Div = document.createElement('div');
  mr4Div.classList.add('mr-4');
  var flexItemsDiv = document.createElement('div');
  flexItemsDiv.classList.add('flex', 'relative', 'items-end');
  var chatMessageContainer = document.createElement('div');
  chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'transition', 'duration-500', 'rounded', 'rounded-br-none', 'order-2', 'bg-indigo-50', 'dark:bg-gray-600');
  var imageContent = _Utils.createImageMessageElement(url);
  chatMessageContainer.appendChild(imageContent);
  var timeDiv = document.createElement('div');
  timeDiv.classList.add('ml-1.5', 'order-1');
  var timeText = document.createElement('p');
  timeText.classList.add('hidden', 'flex', 'justify-end', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre');
  timeText.textContent = timestamp;
  _Utils.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo);
  mainDiv.appendChild(timeText);
  var divOptions = document.createElement('div');
  var _Utils$createVertical5 = _Utils.createVerticalThreeDotsOptionsElement('top-end', MessageType.IMAGE),
    _Utils$createVertical6 = _slicedToArray(_Utils$createVertical5, 2),
    options = _Utils$createVertical6[0],
    dropdownElement = _Utils$createVertical6[1];
  divOptions.style.height = '100%';
  divOptions.classList.add('flex', 'flex-col', 'justify-between', 'items-center');
  var img = document.createElement('img');
  img.src = '/gray_checks.svg';
  img.classList.add('w-[.875rem]', 'h-[.875rem]', 'img-check');
  divOptions.appendChild(options);
  divOptions.appendChild(img);
  divOptions.appendChild(dropdownElement);
  flexItemsDiv.appendChild(chatMessageContainer);
  flexItemsDiv.appendChild(timeDiv);
  flexItemsDiv.appendChild(divOptions);
  flexDiv.appendChild(mr4Div);
  flexDiv.appendChild(flexItemsDiv);
  selectNoneDiv.appendChild(flexDiv);
  mainDiv.appendChild(selectNoneDiv);
  mainDiv.onclick = function () {
    timeText.classList.remove('hidden');
    options.classList.remove('invisible');
  };
  return mainDiv;
});
_defineProperty(Utils, "createIncomingMessageTextElement", function (content, avatar, timestamp, timeAgo) {
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute('timestamp', timestamp);
  var innerDiv1 = document.createElement('div');
  innerDiv1.classList.add('select-none');
  var flexDiv = document.createElement('div');
  flexDiv.classList.add('flex');
  var avatarDivContainer = document.createElement('div');
  avatarDivContainer.classList.add('mr-4', 'flex', 'items-end');
  var avatarDiv = document.createElement('div');
  avatarDiv.classList.add('outline-none');
  var avatarImageDiv = document.createElement('div');
  avatarImageDiv.classList.add('avatar', 'w-[2.25rem]', 'h-[2.25rem]', 'bg-cover', 'bg-center', 'rounded-full');
  avatarImageDiv.style.backgroundImage = "url(\"".concat(avatar, "\")");
  avatarDiv.appendChild(avatarImageDiv);
  avatarDivContainer.appendChild(avatarDiv);
  var chatContainer = document.createElement('div');
  chatContainer.classList.add('flex', 'items-end');
  var chatMessageContainer = document.createElement('div');
  chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-4', 'transition', 'duration-500', 'rounded', 'rounded-bl-none', 'mr-4', 'bg-gray-100', 'dark:bg-gray-600');
  var chatContent = document.createElement('p');
  chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90');
  chatContent.setAttribute('tabindex', '0');
  chatContent.textContent = content;
  chatMessageContainer.appendChild(chatContent);
  var timeContainer = document.createElement('div');
  var timeText = document.createElement('p');
  timeText.classList.add('hidden', 'pl-12', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre');
  timeText.textContent = timestamp;
  _Utils.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo);
  mainDiv.append(timeText);
  var _Utils$createVertical7 = _Utils.createVerticalThreeDotsOptionsElement('top-start', MessageType.TEXT, true),
    _Utils$createVertical8 = _slicedToArray(_Utils$createVertical7, 2),
    options = _Utils$createVertical8[0],
    dropdownElement = _Utils$createVertical8[1];
  chatContainer.appendChild(chatMessageContainer);
  chatContainer.appendChild(timeContainer);
  flexDiv.appendChild(avatarDivContainer);
  flexDiv.appendChild(chatContainer);
  flexDiv.appendChild(options);
  flexDiv.appendChild(dropdownElement);
  innerDiv1.appendChild(flexDiv);
  mainDiv.appendChild(innerDiv1);
  mainDiv.onclick = function () {
    timeText.classList.remove('hidden');
    options.classList.remove('invisible');
  };
  return mainDiv;
});
_defineProperty(Utils, "createIncomingMessageVoiceElement", function (url, avatar, timestamp, timeAgo) {
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute('timestamp', timestamp);
  var innerDiv1 = document.createElement('div');
  innerDiv1.classList.add('select-none');
  var flexDiv = document.createElement('div');
  flexDiv.classList.add('flex');
  var avatarDivContainer = document.createElement('div');
  avatarDivContainer.classList.add('mr-4', 'flex', 'items-end');
  var avatarDiv = document.createElement('div');
  avatarDiv.classList.add('outline-none');
  var avatarImageDiv = document.createElement('div');
  avatarImageDiv.classList.add('avatar', 'w-[2.25rem]', 'h-[2.25rem]', 'bg-cover', 'bg-center', 'rounded-full');
  avatarImageDiv.style.backgroundImage = "url(\"".concat(avatar, "\")");
  avatarDiv.appendChild(avatarImageDiv);
  avatarDivContainer.appendChild(avatarDiv);
  var chatContainer = document.createElement('div');
  chatContainer.classList.add('flex', 'items-end');
  var chatMessageContainer = document.createElement('div');
  chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'p-4', 'transition', 'duration-500', 'rounded', 'rounded-bl-none', 'mr-4', 'bg-gray-100', 'dark:bg-gray-600');
  var chatContent = document.createElement('p');
  chatContent.classList.add('whitespace-pre-wrap', 'break-all', 'text-sm', 'font-normal', 'leading-4', 'tracking-[.01rem]', 'outline-none', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90');
  chatContent.setAttribute('tabindex', '0');
  var voiceElement = _Utils.createVoiceMessageElement(url);
  chatMessageContainer.appendChild(voiceElement);
  var timeContainer = document.createElement('div');
  var timeText = document.createElement('p');
  timeText.classList.add('hidden', 'pl-12', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre');
  timeText.textContent = timestamp;
  _Utils.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo);
  mainDiv.append(timeText);
  var _Utils$createVertical9 = _Utils.createVerticalThreeDotsOptionsElement('top-start', MessageType.AUDIO, true),
    _Utils$createVertical10 = _slicedToArray(_Utils$createVertical9, 2),
    options = _Utils$createVertical10[0],
    dropdownElement = _Utils$createVertical10[1];
  chatContainer.appendChild(chatMessageContainer);
  chatContainer.appendChild(timeContainer);
  flexDiv.appendChild(avatarDivContainer);
  flexDiv.appendChild(chatContainer);
  flexDiv.appendChild(options);
  flexDiv.appendChild(dropdownElement);
  innerDiv1.appendChild(flexDiv);
  mainDiv.appendChild(innerDiv1);
  mainDiv.onclick = function () {
    timeText.classList.remove('hidden');
    options.classList.remove('invisible');
  };
  return mainDiv;
});
_defineProperty(Utils, "createIncommingMessageImageElement", function (url, avatar, timestamp, timeAgo) {
  var mainDiv = document.createElement('div');
  mainDiv.setAttribute('timestamp', timestamp);
  var innerDiv1 = document.createElement('div');
  innerDiv1.classList.add('select-none');
  var flexDiv = document.createElement('div');
  flexDiv.classList.add('flex');
  var avatarDivContainer = document.createElement('div');
  avatarDivContainer.classList.add('mr-4', 'flex', 'items-end');
  var avatarDiv = document.createElement('div');
  avatarDiv.classList.add('outline-none');
  var avatarImageDiv = document.createElement('div');
  avatarImageDiv.classList.add('avatar', 'w-[2.25rem]', 'h-[2.25rem]', 'bg-cover', 'bg-center', 'rounded-full');
  avatarImageDiv.style.backgroundImage = "url(\"".concat(avatar, "\")");
  avatarDiv.appendChild(avatarImageDiv);
  avatarDivContainer.appendChild(avatarDiv);
  var chatContainer = document.createElement('div');
  chatContainer.classList.add('flex', 'items-end');
  var chatMessageContainer = document.createElement('div');
  chatMessageContainer.classList.add('chat-message-container', 'group', 'max-w-[31.25rem]', 'transition', 'duration-500', 'rounded', 'rounded-bl-none', 'mr-4', 'bg-gray-100', 'dark:bg-gray-600');
  var imageElement = _Utils.createImageMessageElement(url);
  chatMessageContainer.appendChild(imageElement);
  var timeContainer = document.createElement('div');
  var timeText = document.createElement('p');
  timeText.classList.add('hidden', 'pl-12', 'outline-none', 'text-xs', 'text-black', 'opacity-80', 'dark:text-white', 'dark:opacity-90', 'font-light', 'leading-4', 'tracking-[.01rem]', 'whitespace-pre');
  timeText.textContent = timestamp;
  _Utils.setMessageTextElementTimeAgo(timeText, timestamp, timeAgo);
  mainDiv.append(timeText);
  var _Utils$createVertical11 = _Utils.createVerticalThreeDotsOptionsElement('top-start', MessageType.IMAGE, true),
    _Utils$createVertical12 = _slicedToArray(_Utils$createVertical11, 2),
    options = _Utils$createVertical12[0],
    dropdownElement = _Utils$createVertical12[1];
  chatContainer.appendChild(chatMessageContainer);
  chatContainer.appendChild(timeContainer);
  flexDiv.appendChild(avatarDivContainer);
  flexDiv.appendChild(chatContainer);
  flexDiv.appendChild(options);
  flexDiv.appendChild(dropdownElement);
  innerDiv1.appendChild(flexDiv);
  mainDiv.appendChild(innerDiv1);
  mainDiv.onclick = function () {
    timeText.classList.remove('hidden');
    options.classList.remove('invisible');
  };
  return mainDiv;
});


/***/ }),

/***/ "./assets/service/service.js":
/*!***********************************!*\
  !*** ./assets/service/service.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }




























function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Service = /*#__PURE__*/_createClass(function Service() {
  _classCallCheck(this, Service);
  _defineProperty(this, "setEncryptionDetails", /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(uid, publickey, privatekey, passphrase) {
      var data, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            data = new FormData();
            data.append("uid", uid);
            data.append("publickey", publickey);
            data.append("privatekey", privatekey);
            data.append("passphrase", passphrase);
            _context.prev = 5;
            _context.next = 8;
            return fetch("/set_encryption_details", {
              method: "POST",
              body: data
            });
          case 8:
            response = _context.sent;
            _context.next = 11;
            return response;
          case 11:
            return _context.abrupt("return", _context.sent);
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](5);
            return _context.abrupt("return", {
              ok: false
            });
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[5, 14]]);
    }));
    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }());
  _defineProperty(this, "createTextMessage", /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(uid, event, channels, sender, receiver, type, content, timestamp) {
      var isSaveMessage,
        data,
        response,
        _args2 = arguments;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            isSaveMessage = _args2.length > 8 && _args2[8] !== undefined ? _args2[8] : true;
            data = new FormData();
            data.append("uid", uid);
            data.append("event", event);
            data.append("channels", channels);
            data.append("sender", sender);
            data.append("receiver", receiver);
            data.append("type", type);
            data.append("content", content);
            data.append("timestamp", timestamp);
            data.append("isSaveMessage", isSaveMessage);
            _context2.prev = 11;
            _context2.next = 14;
            return fetch("/create_text_message", {
              method: "POST",
              body: data
            });
          case 14:
            response = _context2.sent;
            _context2.next = 17;
            return response;
          case 17:
            return _context2.abrupt("return", _context2.sent);
          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](11);
            return _context2.abrupt("return", {
              ok: false
            });
          case 23:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[11, 20]]);
    }));
    return function (_x5, _x6, _x7, _x8, _x9, _x10, _x11, _x12) {
      return _ref2.apply(this, arguments);
    };
  }());
  _defineProperty(this, "createAudioMessage", /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(uid, file, messageTempElement, progressCallback) {
      var data, response;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            data = new FormData();
            data.append('uid', uid);
            data.append('file', file);
            _context3.prev = 3;
            _context3.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_28__["default"].post('/create_audio_message', data, {
              onUploadProgress: function onUploadProgress(progressEvent) {
                var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                progressCallback(messageTempElement, percentCompleted);
              }
            });
          case 6:
            response = _context3.sent;
            progressCallback(messageTempElement, 100);
            return _context3.abrupt("return", response);
          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](3);
            return _context3.abrupt("return", {
              status: 500
            });
          case 14:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[3, 11]]);
    }));
    return function (_x13, _x14, _x15, _x16) {
      return _ref3.apply(this, arguments);
    };
  }());
  _defineProperty(this, "createImageMessage", /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(uid, file, extension, messageTempElement, progressCallback) {
      var data, response;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            data = new FormData();
            data.append('uid', uid);
            data.append('file', file);
            data.append('extension', extension);
            _context4.prev = 4;
            _context4.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_28__["default"].post('/create_image_message', data, {
              onUploadProgress: function onUploadProgress(progressEvent) {
                var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                progressCallback(messageTempElement, percentCompleted);
              }
            });
          case 7:
            response = _context4.sent;
            progressCallback(messageTempElement, 100);
            return _context4.abrupt("return", response);
          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](4);
            return _context4.abrupt("return", {
              status: 500
            });
          case 15:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[4, 12]]);
    }));
    return function (_x17, _x18, _x19, _x20, _x21) {
      return _ref4.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getUserLastSeen", /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(uid, id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return fetch("/get_user_last_seen/".concat(uid, "/").concat(id), {
              method: "GET"
            });
          case 3:
            response = _context5.sent;
            _context5.next = 6;
            return response;
          case 6:
            return _context5.abrupt("return", _context5.sent);
          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", {
              ok: false
            });
          case 12:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 9]]);
    }));
    return function (_x22, _x23) {
      return _ref5.apply(this, arguments);
    };
  }());
  _defineProperty(this, "createMessage", /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(uid, sender, receiver, type, content, timestamp, saveMessages) {
      var data, response;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            data = new FormData();
            data.append("uid", uid);
            data.append("sender", sender);
            data.append("receiver", receiver);
            data.append("type", type);
            data.append("content", content);
            data.append("timestamp", timestamp);
            data.append("saveMessages", saveMessages);
            _context6.prev = 8;
            _context6.next = 11;
            return fetch("/message", {
              method: "POST",
              body: data
            });
          case 11:
            response = _context6.sent;
            _context6.next = 14;
            return response;
          case 14:
            return _context6.abrupt("return", _context6.sent);
          case 17:
            _context6.prev = 17;
            _context6.t0 = _context6["catch"](8);
            return _context6.abrupt("return", {
              ok: false
            });
          case 20:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[8, 17]]);
    }));
    return function (_x24, _x25, _x26, _x27, _x28, _x29, _x30) {
      return _ref6.apply(this, arguments);
    };
  }());
  _defineProperty(this, "deleteMessage", /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(uid, id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee7$(_context7) {
        while (1) switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return fetch("/message/".concat(uid, "/").concat(id), {
              method: "DELETE"
            });
          case 3:
            response = _context7.sent;
            _context7.next = 6;
            return response;
          case 6:
            return _context7.abrupt("return", _context7.sent);
          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](0);
            return _context7.abrupt("return", {
              ok: false
            });
          case 12:
          case "end":
            return _context7.stop();
        }
      }, _callee7, null, [[0, 9]]);
    }));
    return function (_x31, _x32) {
      return _ref7.apply(this, arguments);
    };
  }());
  _defineProperty(this, "createImage", /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(uid, sender, file, progressCircle) {
      var data, response;
      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
        while (1) switch (_context8.prev = _context8.next) {
          case 0:
            data = new FormData();
            data.append('uid', uid);
            data.append('sender', sender);
            data.append('file', file);
            _context8.prev = 4;
            _context8.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_28__["default"].post('/image', data, {
              onUploadProgress: function onUploadProgress(progressEvent) {
                var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                progressCircle.setAttribute("stroke-dashoffset", "calc(251.2px - (251.2px * ".concat(percentCompleted - 1, ") / 100)"));
              }
            });
          case 7:
            response = _context8.sent;
            return _context8.abrupt("return", response);
          case 11:
            _context8.prev = 11;
            _context8.t0 = _context8["catch"](4);
            return _context8.abrupt("return", {
              status: 500
            });
          case 14:
          case "end":
            return _context8.stop();
        }
      }, _callee8, null, [[4, 11]]);
    }));
    return function (_x33, _x34, _x35, _x36) {
      return _ref8.apply(this, arguments);
    };
  }());
  _defineProperty(this, "createAudio", /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(uid, sender, file, progressCircle) {
      var data, response;
      return _regeneratorRuntime().wrap(function _callee9$(_context9) {
        while (1) switch (_context9.prev = _context9.next) {
          case 0:
            data = new FormData();
            data.append('uid', uid);
            data.append('sender', sender);
            data.append('file', file);
            _context9.prev = 4;
            _context9.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_28__["default"].post('/audio', data, {
              onUploadProgress: function onUploadProgress(progressEvent) {
                var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                progressCircle.setAttribute("stroke-dashoffset", "calc(251.2px - (251.2px * ".concat(percentCompleted - 1, ") / 100)"));
              }
            });
          case 7:
            response = _context9.sent;
            return _context9.abrupt("return", response);
          case 11:
            _context9.prev = 11;
            _context9.t0 = _context9["catch"](4);
            return _context9.abrupt("return", {
              status: 500
            });
          case 14:
          case "end":
            return _context9.stop();
        }
      }, _callee9, null, [[4, 11]]);
    }));
    return function (_x37, _x38, _x39, _x40) {
      return _ref9.apply(this, arguments);
    };
  }());
  _defineProperty(this, "setSeenMessage", /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(uid, sender, id) {
      var data, response;
      return _regeneratorRuntime().wrap(function _callee10$(_context10) {
        while (1) switch (_context10.prev = _context10.next) {
          case 0:
            data = new FormData();
            data.append('uid', uid);
            data.append('sender', sender);
            data.append('id', id);
            _context10.prev = 4;
            _context10.next = 7;
            return fetch("/set_seen_message", {
              method: "POST",
              body: data
            });
          case 7:
            response = _context10.sent;
            _context10.next = 10;
            return response;
          case 10:
            return _context10.abrupt("return", _context10.sent);
          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](4);
            return _context10.abrupt("return", {
              ok: false
            });
          case 16:
          case "end":
            return _context10.stop();
        }
      }, _callee10, null, [[4, 13]]);
    }));
    return function (_x41, _x42, _x43) {
      return _ref10.apply(this, arguments);
    };
  }());
  _defineProperty(this, "setPairKey", /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(uid, sender, publicKey, privateKey) {
      var data, response;
      return _regeneratorRuntime().wrap(function _callee11$(_context11) {
        while (1) switch (_context11.prev = _context11.next) {
          case 0:
            data = new FormData();
            data.append('uid', uid);
            data.append('sender', sender);
            data.append('publicKey', publicKey);
            data.append('privateKey', privateKey);
            _context11.prev = 5;
            _context11.next = 8;
            return fetch("/set_pairkey", {
              method: "POST",
              body: data
            });
          case 8:
            response = _context11.sent;
            _context11.next = 11;
            return response;
          case 11:
            return _context11.abrupt("return", _context11.sent);
          case 14:
            _context11.prev = 14;
            _context11.t0 = _context11["catch"](5);
            return _context11.abrupt("return", {
              ok: false
            });
          case 17:
          case "end":
            return _context11.stop();
        }
      }, _callee11, null, [[5, 14]]);
    }));
    return function (_x44, _x45, _x46, _x47) {
      return _ref11.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getPrivateKey", /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(uid, sender) {
      var response;
      return _regeneratorRuntime().wrap(function _callee12$(_context12) {
        while (1) switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return fetch("/get_private_key/".concat(uid, "/").concat(sender), {
              method: "GET"
            });
          case 3:
            response = _context12.sent;
            _context12.next = 6;
            return response;
          case 6:
            return _context12.abrupt("return", _context12.sent);
          case 9:
            _context12.prev = 9;
            _context12.t0 = _context12["catch"](0);
            return _context12.abrupt("return", {
              ok: false
            });
          case 12:
          case "end":
            return _context12.stop();
        }
      }, _callee12, null, [[0, 9]]);
    }));
    return function (_x48, _x49) {
      return _ref12.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getMessages", /*#__PURE__*/function () {
    var _ref13 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(uid, sender, receiver, page, pageSize) {
      var toReverse,
        response,
        _args13 = arguments;
      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
        while (1) switch (_context13.prev = _context13.next) {
          case 0:
            toReverse = _args13.length > 5 && _args13[5] !== undefined ? _args13[5] : 0;
            _context13.prev = 1;
            _context13.next = 4;
            return fetch("/get_messages/".concat(uid, "/").concat(sender, "/").concat(receiver, "/").concat(page, "/").concat(pageSize, "/").concat(toReverse), {
              method: "GET"
            });
          case 4:
            response = _context13.sent;
            _context13.next = 7;
            return response;
          case 7:
            return _context13.abrupt("return", _context13.sent);
          case 10:
            _context13.prev = 10;
            _context13.t0 = _context13["catch"](1);
            return _context13.abrupt("return", {
              ok: false
            });
          case 13:
          case "end":
            return _context13.stop();
        }
      }, _callee13, null, [[1, 10]]);
    }));
    return function (_x50, _x51, _x52, _x53, _x54) {
      return _ref13.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getLastMessages", /*#__PURE__*/function () {
    var _ref14 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(uid, id) {
      var response;
      return _regeneratorRuntime().wrap(function _callee14$(_context14) {
        while (1) switch (_context14.prev = _context14.next) {
          case 0:
            _context14.prev = 0;
            _context14.next = 3;
            return fetch("/get_last_messages/".concat(uid, "/").concat(id), {
              method: "GET"
            });
          case 3:
            response = _context14.sent;
            _context14.next = 6;
            return response;
          case 6:
            return _context14.abrupt("return", _context14.sent);
          case 9:
            _context14.prev = 9;
            _context14.t0 = _context14["catch"](0);
            return _context14.abrupt("return", {
              ok: false
            });
          case 12:
          case "end":
            return _context14.stop();
        }
      }, _callee14, null, [[0, 9]]);
    }));
    return function (_x55, _x56) {
      return _ref14.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getUsers", /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(uid) {
      var response;
      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
        while (1) switch (_context15.prev = _context15.next) {
          case 0:
            _context15.prev = 0;
            _context15.next = 3;
            return fetch("/get_users/".concat(uid), {
              method: "GET"
            });
          case 3:
            response = _context15.sent;
            _context15.next = 6;
            return response;
          case 6:
            return _context15.abrupt("return", _context15.sent);
          case 9:
            _context15.prev = 9;
            _context15.t0 = _context15["catch"](0);
            return _context15.abrupt("return", {
              ok: false
            });
          case 12:
          case "end":
            return _context15.stop();
        }
      }, _callee15, null, [[0, 9]]);
    }));
    return function (_x57) {
      return _ref15.apply(this, arguments);
    };
  }());
  _defineProperty(this, "getFirebaseConfig", /*#__PURE__*/function () {
    var _ref16 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(uid) {
      var response;
      return _regeneratorRuntime().wrap(function _callee16$(_context16) {
        while (1) switch (_context16.prev = _context16.next) {
          case 0:
            _context16.prev = 0;
            _context16.next = 3;
            return fetch("/get_firebase_config/".concat(uid), {
              method: "GET"
            });
          case 3:
            response = _context16.sent;
            _context16.next = 6;
            return response;
          case 6:
            return _context16.abrupt("return", _context16.sent);
          case 9:
            _context16.prev = 9;
            _context16.t0 = _context16["catch"](0);
            return _context16.abrupt("return", {
              ok: false
            });
          case 12:
          case "end":
            return _context16.stop();
        }
      }, _callee16, null, [[0, 9]]);
    }));
    return function (_x58) {
      return _ref16.apply(this, arguments);
    };
  }());
});


/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?9157":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_ffmpeg_ffmpeg_dist_esm_index_js-node_modules_ffmpeg_util_dist_esm_index_-525ad1"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO1lBQUF3WSxVQUFBLENBQUFuYSxJQUFBO1lBQUEsT0FFQ3N6QixLQUFLLHlCQUFBcHVCLE1BQUEsQ0FBeUJ5Z0IsR0FBRyxHQUFJO2NBQUVwbUIsTUFBTSxFQUFFO1lBQU0sQ0FBQyxDQUFDO1VBQUE7WUFBeEU2RixRQUFRLEdBQUErVSxVQUFBLENBQUF6YSxJQUFBO1lBQUF5YSxVQUFBLENBQUFuYSxJQUFBO1lBQUEsT0FDRG9GLFFBQVE7VUFBQTtZQUFBLE9BQUErVSxVQUFBLENBQUF0YSxNQUFBLFdBQUFzYSxVQUFBLENBQUF6YSxJQUFBO1VBQUE7WUFBQXlhLFVBQUEsQ0FBQXhZLElBQUE7WUFBQXdZLFVBQUEsQ0FBQXpTLEVBQUEsR0FBQXlTLFVBQUE7WUFBQSxPQUFBQSxVQUFBLENBQUF0YSxNQUFBLFdBRWQ7Y0FBRXFJLEVBQUUsRUFBRTtZQUFNLENBQUM7VUFBQTtVQUFBO1lBQUEsT0FBQWlTLFVBQUEsQ0FBQXJZLElBQUE7UUFBQTtNQUFBLEdBQUE2WCxTQUFBO0lBQUEsQ0FFM0I7SUFBQSxpQkFBQXFmLElBQUE7TUFBQSxPQUFBRCxNQUFBLENBQUF4MkIsS0FBQSxPQUFBakgsU0FBQTtJQUFBO0VBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQy9OTDs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuKGolN0N0KXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy5qc29uIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9tYWluX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3JlZ2lzdHJhdGlvbl9jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb250cm9sbGVycy9yZXNldHBhc3N3b3JkX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL3NlY3VyaXR5X2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYm9vdHN0cmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2VydmljZS9zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcyIsIndlYnBhY2s6Ly8vaWdub3JlZHwvaG9tZS9za3lsYW5kLTEvUHJhY3RpY2UvYW1pY2FuZW0vbm9kZV9tb2R1bGVzL2NyeXB0by1qc3xjcnlwdG8iXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCIsXG5cdFwiLi9tYWluX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9tYWluX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3JlZ2lzdHJhdGlvbl9jb250cm9sbGVyLmpzXCI6IFwiLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhLi9hc3NldHMvY29udHJvbGxlcnMvcmVnaXN0cmF0aW9uX2NvbnRyb2xsZXIuanNcIixcblx0XCIuL3Jlc2V0cGFzc3dvcmRfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3Jlc2V0cGFzc3dvcmRfY29udHJvbGxlci5qc1wiLFxuXHRcIi4vc2VjdXJpdHlfY29udHJvbGxlci5qc1wiOiBcIi4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzIS4vYXNzZXRzL2NvbnRyb2xsZXJzL3NlY3VyaXR5X2NvbnRyb2xsZXIuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9hc3NldHMvY29udHJvbGxlcnMgc3luYyByZWN1cnNpdmUgLi9ub2RlX21vZHVsZXMvQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIuanMhIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbmV4cG9ydCBkZWZhdWx0IHtcbiAgJ3N5bWZvbnktLXV4LXR1cmJvLS10dXJiby1jb3JlJzogY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgICB0aGlzLl9fc3RpbXVsdXNMYXp5Q29udHJvbGxlciA9IHRydWU7XG4gICAgICB9XG4gICAgICBpbml0aWFsaXplKCkge1xuICAgICAgICAgIGlmICh0aGlzLmFwcGxpY2F0aW9uLmNvbnRyb2xsZXJzLmZpbmQoKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXIuaWRlbnRpZmllciA9PT0gdGhpcy5pZGVudGlmaWVyICYmIGNvbnRyb2xsZXIuX19zdGltdWx1c0xhenlDb250cm9sbGVyO1xuICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1wb3J0KCdAc3ltZm9ueS91eC10dXJiby9kaXN0L3R1cmJvX2NvbnRyb2xsZXIuanMnKS50aGVuKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb24ucmVnaXN0ZXIodGhpcy5pZGVudGlmaWVyLCBjb250cm9sbGVyLmRlZmF1bHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICB9LFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbiBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZCFcIilcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbiBcbmltcG9ydCBVdGlscyBmcm9tICcuLi9qcy91dGlscyc7XG5pbXBvcnQgU2VydmljZSBmcm9tIFwiLi4vc2VydmljZS9zZXJ2aWNlXCIgICBcbiBcbmltcG9ydCB7IEZGbXBlZyB9IGZyb20gJ0BmZm1wZWcvZmZtcGVnJ1xuaW1wb3J0IHsgdG9CbG9iVVJMIH0gZnJvbSAnQGZmbXBlZy91dGlsJ1xuXG5pbXBvcnQgVmlld2VyIGZyb20gJ3ZpZXdlcmpzJyAgIFxuaW1wb3J0IFB1c2hlciBmcm9tICdwdXNoZXItanMnICBcbmltcG9ydCBDcnlwdG9KUyBmcm9tICdjcnlwdG8tanMnO1xuaW1wb3J0IFdhdmVTdXJmZXIgZnJvbSAnd2F2ZXN1cmZlci5qcydcbmltcG9ydCBSZWNvcmRQbHVnaW4gZnJvbSAnd2F2ZXN1cmZlci5qcy9kaXN0L3BsdWdpbnMvcmVjb3JkLmVzbS5qcydcbmltcG9ydCBUaW1lQWdvIGZyb20gJ2phdmFzY3JpcHQtdGltZS1hZ28nO1xuaW1wb3J0IGhlaWMyYW55IGZyb20gJ2hlaWMyYW55JztcblxuaW1wb3J0IGVuIGZyb20gJ2phdmFzY3JpcHQtdGltZS1hZ28vbG9jYWxlL2VuJ1xuaW1wb3J0ICdlbW9qaS1waWNrZXItZWxlbWVudCdcbmltcG9ydCAndmlld2VyanMvZGlzdC92aWV3ZXIuY3NzJyBcblxuY2xhc3MgTWVzc2FnZVR5cGUge1xuICAgIHN0YXRpYyBURVhUID0gMFxuICAgIHN0YXRpYyBJTUFHRSA9IDFcbiAgICBzdGF0aWMgR0lGID0gMlxuICAgIHN0YXRpYyBBVURJTyA9IDNcbiAgICBcbiAgICBzdGF0aWMgZ2V0IFRFWFQoKSB7IHJldHVybiBURVhUIH1cbiAgICBzdGF0aWMgZ2V0IElNQUdFKCkgeyByZXR1cm4gSU1BR0UgfVxuICAgIHN0YXRpYyBnZXQgR0lGKCkgeyByZXR1cm4gR0lGIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgc3RhdGljIHZhbHVlcyA9IHtcbiAgICAgICAgY3VycmVudFVzZXI6IE9iamVjdCxcbiAgICAgICAgdWlkOiBTdHJpbmcsXG4gICAgICAgIHB1YmxpY2tleTogU3RyaW5nLFxuICAgICAgICBwcml2YXRla2V5OiBTdHJpbmcsXG4gICAgICAgIHBhc3NwaHJhc2U6IFN0cmluZ1xuICAgIH0gXG5cbiAgICBjb25uZWN0ID0gYXN5bmMgKCkgPT4geyAgIFxuICAgICAgICBUaW1lQWdvLmFkZERlZmF1bHRMb2NhbGUoZW4pXG4gICAgICAgIFB1c2hlci5sb2dUb0NvbnNvbGUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnB1c2hlciA9IG5ldyBQdXNoZXIoJzdjNGQ5NTJjNTFkMmJlOWE4MzAyJywgeyBcbiAgICAgICAgICAgIGNsdXN0ZXI6ICdhcDEnLCBcbiAgICAgICAgICAgIGF1dGhFbmRwb2ludDogJy9wdXNoZXJfYXV0aCcsIFxuICAgICAgICAgICAgYXV0aDogeyBcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgXG4gICAgICAgICAgICAgICAgICAgICd1aWQnOiB0aGlzLnVpZFZhbHVlIFxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9IFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnBhZ2UgPSAxXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSAyMFxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBuZXcgU2VydmljZSgpXG4gICAgICAgIHRoaXMudGltZUFnbyA9IG5ldyBUaW1lQWdvKCdlbi1VUycpXG5cbiAgICAgICAgdGhpcy5hdWRpb0Jsb2IgPSBudWxsXG4gICAgICAgIHRoaXMuaXNWb2ljZVJlY29yZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNDbG9zZVZvaWNlUmVjb3JkaW5nID0gdHJ1ZVxuICAgICAgICB0aGlzLmlzUmVjZWl2ZWRGaXJzdE1lc3NhZ2UgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzTG9ja0luZmluaXRlU2Nyb2xsaW5nID0gZmFsc2VcbiAgICAgICAgdGhpcy51c2Vyc09ubGluZU1hcCA9IG5ldyBNYXAoKVxuICAgICAgICB0aGlzLnVzZXJzTWFwID0gbmV3IE1hcCgpIFxuICAgICAgICB0aGlzLnRvU2VuZEltYWdlc01hcCA9IG5ldyBNYXAoKVxuICAgICAgICB0aGlzLmZmbXBlZyA9IG5ldyBGRm1wZWcoKVxuICAgICAgICB0aGlzLnZpZXdlciA9IG5ldyBWaWV3ZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aWV3ZXJqcy1pbWFnZXMtY29udGFpbmVyXCIpKSAgXG4gICAgICAgIHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlVHlwZSA9IG51bGxcbiAgICAgICAgdGhpcy5mb3J3YXJkVXNlck1lc3NhZ2VDb250ZW50ID0gbnVsbFxuICAgICAgICB0aGlzLmZvcndhcmRVc2VyTWVzc2FnZUJsb2IgPSBudWxsXG4gICAgICAgIHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlSW5wdXQgPSBudWxsXG4gICAgICAgIHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlV2lkdGggPSBudWxsXG4gICAgICAgIHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlSGVpZ2h0ID0gbnVsbFxuICAgICAgICB0aGlzLmZvcndhcmRVc2VyTWVzc2FnZU1pbWVUeXBlID0gbnVsbFxuICAgICAgICB0aGlzLmZvcndhcmRVc2VyTWVzc2FnZUV4dGVuc2lvbiA9IG51bGxcbiAgICAgICAgdGhpcy5mb3J3YXJkVXNlck1lc3NhZ2VPdXRwdXQgPSBudWxsXG5cbiAgICAgICAgYXdhaXQgdGhpcy5mZm1wZWcubG9hZCh7XG4gICAgICAgICAgICBjb3JlVVJMOiBhd2FpdCB0b0Jsb2JVUkwoJy9mZm1wZWctY29yZS5qcycsICd0ZXh0L2phdmFzY3JpcHQnKSxcbiAgICAgICAgICAgIHdhc21VUkw6IGF3YWl0IHRvQmxvYlVSTCgnL2ZmbXBlZy1jb3JlLndhc20nLCAnYXBwbGljYXRpb24vd2FzbScpLFxuICAgICAgICB9KSBcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRVc2Vycyh0aGlzLnVpZFZhbHVlKVxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpIFxuXG4gICAgICAgICAgICB0aGlzLnNldERhcmtNb2RlVG9nZ2xlKCkgXG4gICAgICAgICAgICB0aGlzLnNldEVtb2ppUGlja2VyRWxlbWVudCgpXG4gICAgICAgICAgICB0aGlzLnNldEltYWdlQnV0dG9uQ2xpY2soKVxuICAgICAgICAgICAgdGhpcy5zZXRPbkNoYW5nZUltYWdlRmlsZUlucHV0KClcbiAgICAgICAgICAgIHRoaXMuc2V0U2VuZFRleHRCdXR0b25DbGljaygpXG4gICAgICAgICAgICB0aGlzLnNldFNlbmRWb2ljZUJ1dHRvbkNsaWNrKClcbiAgICAgICAgICAgIHRoaXMuc2V0U2VuZEltYWdlQnV0dG9uQ2xpY2soKVxuICAgICAgICAgICAgdGhpcy5zZXRVc2VyUHVzaGVyUHJlc2VuY2VDaGFubmVsKClcbiAgICAgICAgICAgIHRoaXMuc2V0U2VuZE1lc3NhZ2VDaGF0Ym94SW5wdXRLZXlEb3duKClcbiAgICAgICAgICAgIHRoaXMuc2V0Vm9pY2VDaGF0UmVjb3JkaW5nKClcbiAgICAgICAgICAgIHRoaXMuc2V0Q2hhdGJveEV2ZW50TGlzdGVuZXIoKSBcblxuICAgICAgICAgICAgdXNlcnMuZm9yRWFjaChhc3luYyh1c2VyKSA9PiB7IFxuICAgICAgICAgICAgICAgIHRoaXMudXNlcnNNYXAuc2V0KHVzZXIuaWQsIHVzZXIpXG5cbiAgICAgICAgICAgICAgICB0aGlzLnNldEZvcndhcmRVc2VyTWVzc2FnZSh1c2VyKVxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0U2lkZWJhclVzZXJDbGlja0V2ZW50KHVzZXIpXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRVc2VyUHVzaGVyTWVzc2FnZXNDaGFubmVsKHVzZXIpIFxuICAgICAgICAgICAgfSkgXG5cbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0RW5jcnlwdGlvbkRldGFpbHMoKSAgXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldFVzZXJMYXN0TWVzc2FnZSgpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldENoYXRib3hJbmZpbml0ZVNjcm9sbGluZygpXG4gICAgICAgIH0gICAgIFxuICAgIH0gXG5cbiAgICBzZXRFbmNyeXB0aW9uRGV0YWlscyA9IGFzeW5jICgpID0+IHsgICBcbiAgICAgICAgaWYgKCF0aGlzLnBhc3NwaHJhc2VWYWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tQnl0ZXMgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XG4gICAgICAgICAgICBjb25zdCBwYXNzcGhyYXNlID0gcmFuZG9tQnl0ZXMudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLkhleClcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGtleXBhaXIgPSBhd2FpdCBVdGlscy5nZW5lcmF0ZUVuY3J5cHRpb25LZXlQYWlyKClcbiAgICAgICAgICAgIGNvbnN0IHB1YmxpY2tleSA9IFV0aWxzLmFycmF5QnVmZmVyVG9CYXNlNjQoa2V5cGFpci5wdWJsaWNLZXkpXG4gICAgICAgICAgICBjb25zdCBwcml2YXRla2V5ID0gQ3J5cHRvSlMuQUVTLmVuY3J5cHQoVXRpbHMuYXJyYXlCdWZmZXJUb0Jhc2U2NChrZXlwYWlyLnByaXZhdGVLZXkpLCBwYXNzcGhyYXNlKVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXJ2aWNlLnNldEVuY3J5cHRpb25EZXRhaWxzKHRoaXMudWlkVmFsdWUsIHB1YmxpY2tleSwgcHJpdmF0ZWtleSwgcGFzc3BocmFzZSlcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsgXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyUHVibGlja2V5ID0gVXRpbHMuYmFzZTY0VG9BcnJheUJ1ZmZlcih0aGlzLnB1YmxpY2tleVZhbHVlKVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlclByaXZhdGVrZXkgPSBVdGlscy5iYXNlNjRUb0FycmF5QnVmZmVyKENyeXB0b0pTLkFFUy5kZWNyeXB0KHRoaXMucHJpdmF0ZWtleVZhbHVlLCB0aGlzLnBhc3NwaHJhc2VWYWx1ZSkudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpKVxuICAgICAgICB9XG4gICAgfSBcblxuICAgIHNldFVzZXJQdXNoZXJNZXNzYWdlc0NoYW5uZWwgPSBhc3luYyAodXNlcikgPT4geyAgXG4gICAgICAgIGNvbnN0IGNoYXRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdGJveCcpXG4gICAgICAgIGNvbnN0IGNoYW5uZWwgPSB0aGlzLnB1c2hlci5zdWJzY3JpYmUoYCR7dXNlci5pZH0tJHt0aGlzLmN1cnJlbnRVc2VyVmFsdWUuaWR9YClcblxuICAgICAgICBjaGFubmVsLmJpbmQoYG1lc3NhZ2VzLyR7dXNlci5pZH0vJHt0aGlzLmN1cnJlbnRVc2VyVmFsdWUuaWR9YCwgYXN5bmMgKGRhdGEpID0+IHsgXG4gICAgICAgICAgICBjb25zdCB7IGlkLCBjb250ZW50LCBpc1NlZW4gfSA9IGRhdGFcbiAgICAgICAgICAgIGNvbnN0IHsgc2VuZGVyLCByZWNlaXZlciB9ID0gSlNPTi5wYXJzZShhdG9iKGNvbnRlbnQpKVxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKGF3YWl0IFV0aWxzLmRlY3J5cHRNZXNzYWdlKHRoaXMuY3VycmVudFVzZXJQcml2YXRla2V5LCByZWNlaXZlcikpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS5zZW5kZXIgPT0gdGhpcy51c2VyVG9DaGF0SWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVsZW1lbnQgPSBudWxsXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT0gTWVzc2FnZVR5cGUuVEVYVCkge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudCA9IFV0aWxzLmNyZWF0ZUluY29taW5nTWVzc2FnZVRleHRFbGVtZW50KG1lc3NhZ2VEYXRhLmNvbnRlbnQsIHVzZXIudXNlckRldGFpbHMuYXZhdGFyLCBtZXNzYWdlRGF0YS50aW1lc3RhbXAsIHRoaXMudGltZUFnbylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZURhdGEudHlwZSA9PSBNZXNzYWdlVHlwZS5BVURJTykge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudCA9IFV0aWxzLmNyZWF0ZUluY29taW5nTWVzc2FnZVZvaWNlRWxlbWVudChtZXNzYWdlRGF0YS5jb250ZW50LCB1c2VyLnVzZXJEZXRhaWxzLmF2YXRhciwgbWVzc2FnZURhdGEudGltZXN0YW1wLCB0aGlzLnRpbWVBZ28pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT0gTWVzc2FnZVR5cGUuSU1BR0UpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQgPSBVdGlscy5jcmVhdGVJbmNvbW1pbmdNZXNzYWdlSW1hZ2VFbGVtZW50KG1lc3NhZ2VEYXRhLmNvbnRlbnQsIHVzZXIudXNlckRldGFpbHMuYXZhdGFyLCBtZXNzYWdlRGF0YS50aW1lc3RhbXAsIHRoaXMudGltZUFnbylcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuc2V0Vmlld2VySnNJbWFnZUVsZW1lbnQobWVzc2FnZUVsZW1lbnQsIHRoaXMudmlld2VyKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVzc2FnZUlkJywgaWQpXG4gICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZXNzYWdlRGF0YScsIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VEYXRhKSlcbiAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5jb3B5VGV4dE1lc3NhZ2VDYWxsYmFjayA9IHRoaXMuY29weVRleHRNZXNzYWdlQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5mb3J3YXJkTWVzc2FnZUNhbGxiYWNrID0gdGhpcy5mb3J3YXJkTWVzc2FnZUNhbGxiYWNrXG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoYXRib3hTY3JvbGxUb0JvdHRvbSgpXG4gICAgICAgICAgICAgICAgY2hhdGJveC5hcHBlbmRDaGlsZChtZXNzYWdlRWxlbWVudClcblxuICAgICAgICAgICAgICAgIFV0aWxzLnJlT3JkZXJMYXN0Rm91ckNoYXRib3hFbGVtZW50cygpXG4gICAgICAgICAgICAgICAgVXRpbHMuc2V0Q2hhdGJveE1lc3NhZ2VBdmF0YXJIaWRkZW4oKVxuICAgICAgICAgICAgICAgIFV0aWxzLnNldENoYXRib3hEaXZpZGVyVGltZXN0YW1wKClcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRDaGF0Ym94TWVzc2FnZUJvcmRlckFuZE1hcmdpbigpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09IE1lc3NhZ2VUeXBlLlRFWFQpIHtcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRVc2VyTGFzdE1lc3NhZ2VDb250ZW50KG1lc3NhZ2VEYXRhLnNlbmRlciwgbWVzc2FnZURhdGEuY29udGVudCkgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZURhdGEudHlwZSA9PSBNZXNzYWdlVHlwZS5BVURJTykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0bmFtZSA9IHRoaXMudXNlcnNNYXAuZ2V0KG1lc3NhZ2VEYXRhLnNlbmRlcikudXNlckRldGFpbHMuZmlyc3RuYW1lXG4gICAgICAgICAgICAgICAgVXRpbHMuc2V0VXNlckxhc3RNZXNzYWdlQ29udGVudChtZXNzYWdlRGF0YS5zZW5kZXIsIGZpcnN0bmFtZSArICcgc2VudCBhbiBhdWRpbycpIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZURhdGEudHlwZSA9PSBNZXNzYWdlVHlwZS5JTUFHRSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0bmFtZSA9IHRoaXMudXNlcnNNYXAuZ2V0KG1lc3NhZ2VEYXRhLnNlbmRlcikudXNlckRldGFpbHMuZmlyc3RuYW1lXG4gICAgICAgICAgICAgICAgVXRpbHMuc2V0VXNlckxhc3RNZXNzYWdlQ29udGVudChtZXNzYWdlRGF0YS5zZW5kZXIsIGZpcnN0bmFtZSArICcgc2VudCBhbiBpbWFnZScpIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBVdGlscy5zZXRVc2VyTGFzdE1lc3NhZ2VUaW1lc3RhbXAobWVzc2FnZURhdGEuc2VuZGVyLCBtZXNzYWdlRGF0YS50aW1lc3RhbXApXG4gICAgICAgICAgICBVdGlscy5zZXRVc2VyTGFzdE1lc3NhZ2VUaW1lQWdvKG1lc3NhZ2VEYXRhLnNlbmRlciwgbWVzc2FnZURhdGEudGltZXN0YW1wLCB0aGlzLnRpbWVBZ28pXG4gICAgICAgICAgICBVdGlscy5yZU9yZGVyVXNlcnNMaXN0SWZOZXdNZXNzYWdlSXNCZWluZ1NlbnRPclJlY2VpdmVkKG1lc3NhZ2VEYXRhLnNlbmRlcilcbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCB0aGlzLnNsZWVwKDEpXG4gICAgfVxuXG4gICAgc2V0VXNlclB1c2hlclByZXNlbmNlQ2hhbm5lbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbXlUaGlzID0gdGhpc1xuICAgICAgICBjb25zdCBjaGFubmVsID0gdGhpcy5wdXNoZXIuc3Vic2NyaWJlKCdwcmVzZW5jZS1vbmxpbmUtdXNlcnMnKTsgXG4gICAgICAgIFxuICAgICAgICBjaGFubmVsLmJpbmQoJ3B1c2hlcjpzdWJzY3JpcHRpb25fc3VjY2VlZGVkJywgZnVuY3Rpb24obWVtYmVycykgeyAgXG4gICAgICAgICAgICBtZW1iZXJzLmVhY2goZnVuY3Rpb24obWVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBtZW1iZXIuaW5mby5pZFxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJPbmxpbmVTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdXNlciR7aWR9LW9ubGluZS1zdGF0dXNgKVxuICAgICAgICAgICAgICAgIHVzZXJPbmxpbmVTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnYmctcmVkLTQwMCcpXG4gICAgICAgICAgICAgICAgdXNlck9ubGluZVN0YXR1cy5jbGFzc0xpc3QuYWRkKCdiZy1ncmVlbi00MDAnKSBcblxuICAgICAgICAgICAgICAgIG15VGhpcy51c2Vyc09ubGluZU1hcC5zZXQoaWQsIHRydWUpIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY2hhbm5lbC5iaW5kKCdwdXNoZXI6bWVtYmVyX2FkZGVkJywgZnVuY3Rpb24obWVtYmVyKSB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IG1lbWJlci5pbmZvLmlkXG4gICAgICAgICAgICBjb25zdCB1c2VyT25saW5lU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHVzZXIke2lkfS1vbmxpbmUtc3RhdHVzYClcbiAgICAgICAgICAgIHVzZXJPbmxpbmVTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnYmctcmVkLTQwMCcpXG4gICAgICAgICAgICB1c2VyT25saW5lU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2JnLWdyZWVuLTQwMCcpIFxuXG4gICAgICAgICAgICBpZiAoaWQgPT0gbXlUaGlzLnVzZXJUb0NoYXRJZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJUb0NoYXRPbmxpbmVTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcnRvY2hhdC1vbmxpbmUtc3RhdHVzJylcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyVG9DaGF0T25saW5lVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VydG9jaGF0LW9ubGluZS10ZXh0JykgXG4gICAgICAgICAgICAgICAgdXNlclRvQ2hhdE9ubGluZVN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdiZy1yZWQtNDAwJylcbiAgICAgICAgICAgICAgICB1c2VyVG9DaGF0T25saW5lU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2JnLWdyZWVuLTQwMCcpXG4gICAgICAgICAgICAgICAgdXNlclRvQ2hhdE9ubGluZVRleHQudGV4dENvbnRlbnQgPSBcIkFjdGl2ZSBub3dcIiBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbXlUaGlzLnVzZXJzT25saW5lTWFwLnNldChpZCwgdHJ1ZSlcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjaGFubmVsLmJpbmQoJ3B1c2hlcjptZW1iZXJfcmVtb3ZlZCcsIGZ1bmN0aW9uKG1lbWJlcikge1xuICAgICAgICAgICAgY29uc3QgaWQgPSBtZW1iZXIuaW5mby5pZFxuICAgICAgICAgICAgY29uc3QgdXNlck9ubGluZVN0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB1c2VyJHtpZH0tb25saW5lLXN0YXR1c2ApXG4gICAgICAgICAgICB1c2VyT25saW5lU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2JnLXJlZC00MDAnKVxuICAgICAgICAgICAgdXNlck9ubGluZVN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmVlbi00MDAnKVxuXG4gICAgICAgICAgICBpZiAoaWQgPT0gbXlUaGlzLnVzZXJUb0NoYXRJZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJUb0NoYXRPbmxpbmVTdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcnRvY2hhdC1vbmxpbmUtc3RhdHVzJylcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyVG9DaGF0T25saW5lVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VydG9jaGF0LW9ubGluZS10ZXh0JykgXG4gICAgICAgICAgICAgICAgdXNlclRvQ2hhdE9ubGluZVN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmVlbi00MDAnKVxuICAgICAgICAgICAgICAgIHVzZXJUb0NoYXRPbmxpbmVTdGF0dXMuY2xhc3NMaXN0LmFkZCgnYmctcmVkLTQwMCcpXG4gICAgICAgICAgICAgICAgdXNlclRvQ2hhdE9ubGluZVRleHQudGV4dENvbnRlbnQgPSBcIk9mZmxpbmVcIlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBteVRoaXMudXNlcnNPbmxpbmVNYXAuc2V0KGlkLCBmYWxzZSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2V0U2lkZWJhclVzZXJDbGlja0V2ZW50ID0gYXN5bmMgKHVzZXIpID0+IHtcbiAgICAgICAgY29uc3QgdXNlckVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdXNlciR7dXNlci5pZH1gKSAvLyBzaWRlYmFyIHVzZXIgbGlzdCBlbGVtZW50ICAgXG4gICAgICAgIHVzZXJFbGVtZW50Lm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gYCR7dXNlci51c2VyRGV0YWlscy5maXJzdG5hbWV9ICR7dXNlci51c2VyRGV0YWlscy5sYXN0bmFtZX1gXG4gICAgICAgICAgICBjb25zdCBhdmF0YXIgPSB1c2VyLnVzZXJEZXRhaWxzLmF2YXRhclxuICAgICAgICAgICAgY29uc3QgcHVibGlja2V5ID0gdXNlci51c2VyRGV0YWlscy5wdWJsaWNrZXkucHVibGlja2V5IFxuICAgICAgICAgICAgdGhpcy51c2VyVG9jaGF0UHVibGlja2V5ID0gVXRpbHMuYmFzZTY0VG9BcnJheUJ1ZmZlcihwdWJsaWNrZXkpXG4gICAgICAgICAgICB0aGlzLnVzZXJUb0NoYXRJZCA9IHVzZXIuaWRcbiAgICAgICAgICAgIHRoaXMuaXNTaWRlYmFyVXNlckNsaWNrT25jZSA9IHRydWVcblxuICAgICAgICAgICAgdGhpcy5zZXRVc2VyVG9DaGF0TmFtZShuYW1lKVxuICAgICAgICAgICAgdGhpcy5zZXRVc2VyVG9DaGF0QXZhdGFyKGF2YXRhcikgXG4gICAgICAgICAgICB0aGlzLnNldFNpZGViYXJVc2VyVG9nZ2xlRm9yTW9iaWxlKCkgXG4gICAgICAgICAgICB0aGlzLnNldE1haW5DaGF0Ym94KClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5zZXREZWZhdWx0VmFsdWVzKClcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0Q29udmVyc2F0aW9ucygpXG5cbiAgICAgICAgICAgIHRoaXMuc2V0VXNlclRvQ2hhdE9ubGluZVN0YXR1cygpXG4gICAgICAgIH0gXG5cbiAgICAgICAgYXdhaXQgdGhpcy5zbGVlcCgxKVxuICAgIH0gXG5cbiAgICBzZXRWb2ljZUNoYXRSZWNvcmRpbmcgPSAoKSA9PiB7IFxuICAgICAgICBjb25zdCB2b2ljZUNoYXRSZWNvcmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9pY2VjaGF0LXJlY29yZC1idXR0b24nKVxuICAgICAgICB2b2ljZUNoYXRSZWNvcmRCdXR0b24ub25jbGljayA9IGFzeW5jICgpID0+IHsgXG4gICAgICAgICAgICBpZiAoIXRoaXMudG9TZW5kSW1hZ2VzTWFwLnNpemUpIHsgXG4gICAgICAgICAgICAgICAgY29uc3Qgd2F2ZUZvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2F2ZWZvcm0taW5wdXQnKVxuICAgICAgICAgICAgICAgIHdhdmVGb3JtQ29udGFpbmVyLnRleHRDb250ZW50ID0gJydcblxuICAgICAgICAgICAgICAgIHZhciB3YXZlc3VyZmVyID0gV2F2ZVN1cmZlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHdhdmVGb3JtQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICB3YXZlQ29sb3I6ICdyZ2IoMjAwLCAwLCAyMDApJywgXG4gICAgICAgICAgICAgICAgICAgIGhpZGVTY3JvbGxiYXI6IHRydWUsICAgXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DZW50ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgIGJhckhlaWdodDogMjUsIFxuICAgICAgICAgICAgICAgICAgICBiYXJXaWR0aDogMS41LFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3JXaWR0aDogMCwgXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9CbG9iID0gbnVsbFxuICAgICAgICAgICAgICAgIHRoaXMuaXNWb2ljZVJlY29yZGluZyA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2xvc2VWb2ljZVJlY29yZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgY29uc3QgTUFYX1JFQ09SRElOR19MSU1JVCA9IDYwXG4gICAgICAgICAgICAgICAgY29uc3QgY2hhdGJveE1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0Ym94LW1lc3NhZ2UtaW5wdXQnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbmRUZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbmQtdGV4dC1idXR0b24nKVxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbmRWb2ljZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kLXZvaWNlLWJ1dHRvbicpXG4gICAgICAgICAgICAgICAgY29uc3Qgdm9pY2VDaGF0UmVjb3JkSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdGJveC12b2ljZS1pbnB1dCcpXG4gICAgICAgICAgICAgICAgY29uc3Qgdm9pY2VDaGF0UmVjb3JkVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2ljZWNoYXQtcmVjb3JkLXRpbWUnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHZvaWNlQ2hhdFJlY29yZFN0YXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvaWNlY2hhdC1yZWNvcmQtc3RhcnQnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHZvaWNlQ2hhdFJlY29yZFN2Z1BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9pY2VjaGF0LXJlY29yZC1zdmctcGxheScpXG4gICAgICAgICAgICAgICAgY29uc3Qgdm9pY2VDaGF0UmVjb3JkU3ZnU3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2ljZWNoYXQtcmVjb3JkLXN2Zy1zdG9wJylcbiAgICAgICAgICAgICAgICBjb25zdCB2b2ljZUNoYXRSZWNvcmREZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9pY2VjaGF0LXJlY29yZC1kZWxldGUnKVxuICAgICAgICAgICAgICAgIGNvbnN0IHZvaWNlQ2hhdFJlY29yZENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvaWNlY2hhdC1yZWNvcmQtY2xvc2UnKVxuXG4gICAgICAgICAgICAgICAgY2hhdGJveE1lc3NhZ2VJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIHZvaWNlQ2hhdFJlY29yZElucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgc2VuZFRleHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICBzZW5kVm9pY2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICAgICAgICAgIHdhdmVzdXJmZXIuZW1wdHkoKVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlY29yZCA9IHdhdmVzdXJmZXIucmVnaXN0ZXJQbHVnaW4oUmVjb3JkUGx1Z2luLmNyZWF0ZSh7IHNjcm9sbGluZ1dhdmVmb3JtOiBmYWxzZSwgcmVuZGVyUmVjb3JkZWRBdWRpbzogZmFsc2UgfSkpXG4gICAgICAgICAgICAgICAgcmVjb3JkLm9uKCdyZWNvcmQtZW5kJywgYXN5bmMgKGJsb2IpID0+IHsgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVjb3JkZWRVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgd2F2ZXN1cmZlci5kZXN0cm95KCkgXG4gICAgICAgICAgICAgICAgICAgIHdhdmVzdXJmZXIgPSBXYXZlU3VyZmVyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXI6IHdhdmVGb3JtQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2F2ZUNvbG9yOiAncmdiKDIwMCwgMCwgMjAwKScsIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NDb2xvcjogJ3JnYigxMDAsIDUwLCAwKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlU2Nyb2xsYmFyOiB0cnVlLCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NlbnRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYXJIZWlnaHQ6IDI1LCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhcldpZHRoOiAxLjUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3JXaWR0aDogMCwgXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IHJlY29yZGVkVXJsXG4gICAgICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VDaGF0UmVjb3JkU3RhcnQub25jbGljayA9ICgpID0+IHdhdmVzdXJmZXIucGxheVBhdXNlKCkgICBcblxuICAgICAgICAgICAgICAgICAgICB3YXZlc3VyZmVyLm9uKCdwYXVzZScsICgpID0+IHsgXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2ljZUNoYXRSZWNvcmRTdmdQbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2ljZUNoYXRSZWNvcmRTdmdTdG9wLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgd2F2ZXN1cmZlci5vbigncGxheScsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWNlQ2hhdFJlY29yZFN2Z1BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHZvaWNlQ2hhdFJlY29yZFN2Z1N0b3AuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgfSkgXG5cbiAgICAgICAgICAgICAgICAgICAgd2F2ZXN1cmZlci5vbigndGltZXVwZGF0ZScsIChjdXJyZW50VGltZSkgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbWFpbmluZ1RpbWUgPSBNYXRoLmFicyh3YXZlc3VyZmVyLmdldER1cmF0aW9uKCkgLSBjdXJyZW50VGltZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHJlbWFpbmluZ1RpbWUgLyA2MClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHJlbWFpbmluZ1RpbWUgJSA2MClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBgMCR7bWludXRlc306JHtzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2ljZUNoYXRSZWNvcmRUaW1lLnRleHRDb250ZW50ID0gZm9ybWF0dGVkVGltZVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHdhdmVzdXJmZXIub24oJ2ZpbmlzaCcsICggKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3YXZlc3VyZmVyLnNlZWtUbygwKVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9CbG9iID0gYmxvYiAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWb2ljZVJlY29yZGluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHJlY29yZC5vbigncmVjb3JkLXByb2dyZXNzJywgKHRpbWUpID0+IHsgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KCh0aW1lKSAvIDEwMDApID49IE1BWF9SRUNPUkRJTkdfTElNSVQgKyAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2b2ljZUNoYXRSZWNvcmRTdGFydC5jbGljaygpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3IoKHRpbWUgJSAzNjAwMDAwKSAvIDYwMDAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKCh0aW1lICUgNjAwMDApIC8gMTAwMCksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLm1hcCgodikgPT4gKHYgPCAxMCA/ICcwJyArIHYgOiB2KSkuam9pbignOicpXG4gICAgICAgICAgICAgICAgICAgICAgICB2b2ljZUNoYXRSZWNvcmRUaW1lLnRleHRDb250ZW50ID0gZm9ybWF0dGVkVGltZSBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pICBcblxuICAgICAgICAgICAgICAgIHZvaWNlQ2hhdFJlY29yZFN0YXJ0Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZC5zdG9wUmVjb3JkaW5nKClcblxuICAgICAgICAgICAgICAgICAgICB2b2ljZUNoYXRSZWNvcmRTdmdQbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlQ2hhdFJlY29yZFN2Z1N0b3AuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VDaGF0UmVjb3JkRGVsZXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlQ2hhdFJlY29yZENsb3NlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdm9pY2VDaGF0UmVjb3JkRGVsZXRlLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZvaWNlQ2hhdFJlY29yZFN2Z1BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VDaGF0UmVjb3JkU3ZnU3RvcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICB2b2ljZUNoYXRSZWNvcmREZWxldGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgdm9pY2VDaGF0UmVjb3JkQ2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICAgICAgICAgICAgICB3YXZlc3VyZmVyLmVtcHR5KClcbiAgICAgICAgICAgICAgICAgICAgd2F2ZXN1cmZlci5kZXN0cm95KCkgXG5cbiAgICAgICAgICAgICAgICAgICAgdm9pY2VDaGF0UmVjb3JkQnV0dG9uLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVjb3JkLnN0YXJ0UmVjb3JkaW5nKCkgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdm9pY2VDaGF0UmVjb3JkQ2xvc2Uub25jbGljayA9ICgpID0+IHsgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVm9pY2VSZWNvcmRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ2xvc2VWb2ljZVJlY29yZGluZyA9IHRydWVcblxuICAgICAgICAgICAgICAgICAgICB3YXZlc3VyZmVyLmVtcHR5KClcbiAgICAgICAgICAgICAgICAgICAgd2F2ZXN1cmZlci5kZXN0cm95KCkgXG5cbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICBVdGlscy51bkhpZGVNZWRpYUdyb3VwKClcblxuICAgICAgICAgICAgICAgICAgICBjaGF0Ym94TWVzc2FnZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgIHZvaWNlQ2hhdFJlY29yZElucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpIFxuICAgICAgICAgICAgICAgICAgICBzZW5kVGV4dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICBzZW5kVm9pY2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkLnN0b3BSZWNvcmRpbmcoKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIFV0aWxzLmhpZGVNZWRpYUdyb3VwKClcbiAgICAgICAgICAgICAgICBhd2FpdCByZWNvcmQuc3RhcnRSZWNvcmRpbmcoKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgXG4gICAgfVxuXG4gICAgc2V0VXNlckxhc3RNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRMYXN0TWVzc2FnZXModGhpcy51aWRWYWx1ZSwgdGhpcy5jdXJyZW50VXNlclZhbHVlLmlkKVxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1lc3NhZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpZCwgY29udGVudCwgaXNTZWVuIH0gPSBtZXNzYWdlc1tpXVxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2VuZGVyLCByZWNlaXZlciB9ID0gSlNPTi5wYXJzZShhdG9iKGNvbnRlbnQpKSAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdHJ5IHsgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShhd2FpdCBVdGlscy5kZWNyeXB0TWVzc2FnZSh0aGlzLmN1cnJlbnRVc2VyUHJpdmF0ZWtleSwgc2VuZGVyKSkgXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09IE1lc3NhZ2VUeXBlLlRFWFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLnNldFVzZXJMYXN0TWVzc2FnZUNvbnRlbnQobWVzc2FnZURhdGEucmVjZWl2ZXIsIG1lc3NhZ2VEYXRhLmNvbnRlbnQpIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT0gTWVzc2FnZVR5cGUuQVVESU8pIHsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuc2V0VXNlckxhc3RNZXNzYWdlQ29udGVudChtZXNzYWdlRGF0YS5yZWNlaXZlciwgJ1lvdSBzZW50IGFuIGF1ZGlvJykgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZURhdGEudHlwZSA9PSBNZXNzYWdlVHlwZS5JTUFHRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuc2V0VXNlckxhc3RNZXNzYWdlQ29udGVudChtZXNzYWdlRGF0YS5yZWNlaXZlciwgJ1lvdSBzZW50IGFuIGltYWdlJykgXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBVdGlscy5zZXRVc2VyTGFzdE1lc3NhZ2VUaW1lc3RhbXAobWVzc2FnZURhdGEucmVjZWl2ZXIsIG1lc3NhZ2VEYXRhLnRpbWVzdGFtcClcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMuc2V0VXNlckxhc3RNZXNzYWdlVGltZUFnbyhtZXNzYWdlRGF0YS5yZWNlaXZlciwgbWVzc2FnZURhdGEudGltZXN0YW1wLCB0aGlzLnRpbWVBZ28pXG4gICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7ICBcbiAgICAgICAgICAgICAgICAgICAgdHJ5e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UoYXdhaXQgVXRpbHMuZGVjcnlwdE1lc3NhZ2UodGhpcy5jdXJyZW50VXNlclByaXZhdGVrZXksIHJlY2VpdmVyKSkgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PSBNZXNzYWdlVHlwZS5URVhUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuc2V0VXNlckxhc3RNZXNzYWdlQ29udGVudChtZXNzYWdlRGF0YS5zZW5kZXIsIG1lc3NhZ2VEYXRhLmNvbnRlbnQpIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT0gTWVzc2FnZVR5cGUuQVVESU8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdG5hbWUgPSB0aGlzLnVzZXJzTWFwLmdldChtZXNzYWdlRGF0YS5zZW5kZXIpLnVzZXJEZXRhaWxzLmZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLnNldFVzZXJMYXN0TWVzc2FnZUNvbnRlbnQobWVzc2FnZURhdGEuc2VuZGVyLCBmaXJzdG5hbWUgKyAnIHNlbnQgYW4gYXVkaW8nKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT0gTWVzc2FnZVR5cGUuSU1BR0UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXJzdG5hbWUgPSB0aGlzLnVzZXJzTWFwLmdldChtZXNzYWdlRGF0YS5zZW5kZXIpLnVzZXJEZXRhaWxzLmZpcnN0bmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLnNldFVzZXJMYXN0TWVzc2FnZUNvbnRlbnQobWVzc2FnZURhdGEuc2VuZGVyLCBmaXJzdG5hbWUgKyAnIHNlbnQgYW4gaW1hZ2UnKSBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuc2V0VXNlckxhc3RNZXNzYWdlVGltZXN0YW1wKG1lc3NhZ2VEYXRhLnNlbmRlciwgbWVzc2FnZURhdGEudGltZXN0YW1wKVxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuc2V0VXNlckxhc3RNZXNzYWdlVGltZUFnbyhtZXNzYWdlRGF0YS5zZW5kZXIsIG1lc3NhZ2VEYXRhLnRpbWVzdGFtcCwgdGhpcy50aW1lQWdvKSBcbiAgICAgICAgICAgICAgICAgICAgfWNhdGNoKGVlKSB7IFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIFV0aWxzLnNvcnRVc2Vyc0xpc3RCYXNlT25MYXN0TWVzc2FnZVRpbWVzdGFtcCgpXG4gICAgfVxuXG4gICAgc2V0Q2hhdGJveEV2ZW50TGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYXRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdGJveC1tZXNzYWdlLWlucHV0JykgXG5cbiAgICAgICAgY2hhdGJveC5vbmJsdXIgPSAoKSA9PiB7ICBcbiAgICAgICAgICAgIFV0aWxzLnVuSGlkZU1lZGlhR3JvdXAoKVxuICAgICAgICB9XG5cbiAgICAgICAgY2hhdGJveC5vbmZvY3VzID0gKCkgPT4geyBcbiAgICAgICAgICAgIFV0aWxzLmhpZGVNZWRpYUdyb3VwKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldENoYXRib3hJbmZpbml0ZVNjcm9sbGluZyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgY2hhdGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0Ym94JykgXG4gICAgICAgIGNoYXRib3gub25zY3JvbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBjaGF0Ym94LnNjcm9sbFRvcDsgXG4gICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID09IDAgJiYgIXRoaXMuaXNSZWNlaXZlZEZpcnN0TWVzc2FnZSAmJiAhdGhpcy5pc0xvY2tJbmZpbml0ZVNjcm9sbGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFnZSArPSAxICAgXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvY2tJbmZpbml0ZVNjcm9sbGluZyA9IHRydWVcbiAgICAgICAgICAgICAgICBjb25zdCBmbGV4R3Jvd0NoaWxkID0gY2hhdGJveC5yZW1vdmVDaGlsZChjaGF0Ym94LmNoaWxkcmVuWzBdKSAgXG5cbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwXG4gICAgICAgICAgICAgICAgbGV0IGZpcnN0Q2hpbGQgPSBudWxsXG4gICAgICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgY2hhdGJveC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3RDaGlsZCA9IGNoYXRib3guY2hpbGRyZW5baW5kZXhdIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXZpZGVyLXRpbWVzdGFtcCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluZGV4KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRlciA9IFV0aWxzLmNyZWF0ZUxvYWRlckVsZW1lbnQoKVxuICAgICAgICAgICAgICAgIGNoYXRib3gucHJlcGVuZChsb2FkZXIpXG4gXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0TWVzc2FnZXModGhpcy51aWRWYWx1ZSwgdGhpcy5jdXJyZW50VXNlclZhbHVlLmlkLCB0aGlzLnVzZXJUb0NoYXRJZCwgdGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplLCAxKVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgICAgICAgICBjaGF0Ym94LnJlbW92ZUNoaWxkKGxvYWRlcilcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VzLmxlbmd0aCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGlkLCBjb250ZW50LCBpc1NlZW4gfSA9IG1lc3NhZ2VzW2ldIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc2VuZGVyLCByZWNlaXZlciB9ID0gSlNPTi5wYXJzZShhdG9iKGNvbnRlbnQpKSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtZXNzYWdlRWxlbWVudCA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKGF3YWl0IFV0aWxzLmRlY3J5cHRNZXNzYWdlKHRoaXMuY3VycmVudFVzZXJQcml2YXRla2V5LCBzZW5kZXIpKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09IE1lc3NhZ2VUeXBlLlRFWFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50ID0gVXRpbHMuY3JlYXRlT3V0Z29pbmdNZXNzYWdlVGV4dEVsZW1lbnQobWVzc2FnZURhdGEuY29udGVudCwgbWVzc2FnZURhdGEudGltZXN0YW1wLCB0aGlzLnRpbWVBZ28pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZURhdGEudHlwZSA9PSBNZXNzYWdlVHlwZS5BVURJTykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQgPSBVdGlscy5jcmVhdGVPdXRnb2luZ01lc3NhZ2VWb2ljZUVsZW1lbnQobWVzc2FnZURhdGEuY29udGVudCwgbWVzc2FnZURhdGEudGltZXN0YW1wLCB0aGlzLnRpbWVBZ28pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT0gTWVzc2FnZVR5cGUuSU1BR0UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50ID0gVXRpbHMuY3JlYXRlT3V0Z29pbmdNZXNzYWdlSW1hZ2VFbGVtZW50KG1lc3NhZ2VEYXRhLmNvbnRlbnQsIG1lc3NhZ2VEYXRhLnRpbWVzdGFtcCwgdGhpcy50aW1lQWdvKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLnNldFZpZXdlckpzSW1hZ2VFbGVtZW50KG1lc3NhZ2VFbGVtZW50LCB0aGlzLnZpZXdlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVzc2FnZUlkJywgaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVzc2FnZURhdGEnLCBKU09OLnN0cmluZ2lmeShtZXNzYWdlRGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmNvcHlUZXh0TWVzc2FnZUNhbGxiYWNrID0gdGhpcy5jb3B5VGV4dE1lc3NhZ2VDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5mb3J3YXJkTWVzc2FnZUNhbGxiYWNrID0gdGhpcy5mb3J3YXJkTWVzc2FnZUNhbGxiYWNrXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhdGJveC5wcmVwZW5kKG1lc3NhZ2VFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWdDaGVjayA9IG1lc3NhZ2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWctY2hlY2snKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdDaGVjay5zcmMgPSAnL2dyZWVuX2NoZWNrcy5zdmcnICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UoYXdhaXQgVXRpbHMuZGVjcnlwdE1lc3NhZ2UodGhpcy5jdXJyZW50VXNlclByaXZhdGVrZXksIHJlY2VpdmVyKSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZURhdGEudHlwZSA9PSBNZXNzYWdlVHlwZS5URVhUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudCA9IFV0aWxzLmNyZWF0ZUluY29taW5nTWVzc2FnZVRleHRFbGVtZW50KG1lc3NhZ2VEYXRhLmNvbnRlbnQsIHRoaXMudXNlcnNNYXAuZ2V0KG1lc3NhZ2VEYXRhLnNlbmRlcikudXNlckRldGFpbHMuYXZhdGFyLCBtZXNzYWdlRGF0YS50aW1lc3RhbXAsIHRoaXMudGltZUFnbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChtZXNzYWdlRGF0YS50eXBlID09IE1lc3NhZ2VUeXBlLkFVRElPKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudCA9IFV0aWxzLmNyZWF0ZUluY29taW5nTWVzc2FnZVZvaWNlRWxlbWVudChtZXNzYWdlRGF0YS5jb250ZW50LCB0aGlzLnVzZXJzTWFwLmdldChtZXNzYWdlRGF0YS5zZW5kZXIpLnVzZXJEZXRhaWxzLmF2YXRhciwgbWVzc2FnZURhdGEudGltZXN0YW1wLCB0aGlzLnRpbWVBZ28pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZURhdGEudHlwZSA9PSBNZXNzYWdlVHlwZS5JTUFHRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQgPSBVdGlscy5jcmVhdGVJbmNvbW1pbmdNZXNzYWdlSW1hZ2VFbGVtZW50KG1lc3NhZ2VEYXRhLmNvbnRlbnQsIHRoaXMudXNlcnNNYXAuZ2V0KG1lc3NhZ2VEYXRhLnNlbmRlcikudXNlckRldGFpbHMuYXZhdGFyLCBtZXNzYWdlRGF0YS50aW1lc3RhbXAsIHRoaXMudGltZUFnbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLnNldFZpZXdlckpzSW1hZ2VFbGVtZW50KG1lc3NhZ2VFbGVtZW50LCB0aGlzLnZpZXdlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZXNzYWdlSWQnLCBpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZXNzYWdlRGF0YScsIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VEYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuY29weVRleHRNZXNzYWdlQ2FsbGJhY2sgPSB0aGlzLmNvcHlUZXh0TWVzc2FnZUNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmZvcndhcmRNZXNzYWdlQ2FsbGJhY2sgPSB0aGlzLmZvcndhcmRNZXNzYWdlQ2FsbGJhY2tcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0Ym94LnByZXBlbmQobWVzc2FnZUVsZW1lbnQpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLnNldENoYXRib3hNZXNzYWdlQXZhdGFySGlkZGVuKClcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLnNldENoYXRib3hEaXZpZGVyVGltZXN0YW1wKClcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLnNldENoYXRib3hNZXNzYWdlQm9yZGVyQW5kTWFyZ2luKClcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RDaGlsZC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJlbmRcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRib3gucHJlcGVuZChmbGV4R3Jvd0NoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrSW5maW5pdGVTY3JvbGxpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlY2VpdmVkRmlyc3RNZXNzYWdlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2lkZWJhclVzZXJDbGlja09uY2UgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuXG4gICAgICAgIGF3YWl0IHRoaXMuc2xlZXAoMSlcbiAgICB9XG5cbiAgICBzZXRGb3J3YXJkVXNlck1lc3NhZ2UgPSAodXNlcikgPT4ge1xuICAgICAgICBjb25zdCBmb3J3YXJkVXNlclN2Z1NlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9yd2FyZC11c2VyLXN2Zy1zZW50LSR7dXNlci5pZH1gKVxuICAgICAgICBjb25zdCBmb3J3YXJkVXNlclN2Z0RlZmF1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9yd2FyZC11c2VyLXN2Zy1kZWZhdWx0LSR7dXNlci5pZH1gKVxuICAgICAgICBjb25zdCBmb3J3YXJkVXNlclNwYW5UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZvcndhcmQtdXNlci1zcGFuLXRleHQtJHt1c2VyLmlkfWApXG4gICAgICAgIGNvbnN0IGZvcndhZFVzZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9yd2FyZC11c2VyLWJ1dHRvbi0ke3VzZXIuaWR9YClcblxuICAgICAgICBmb3J3YWRVc2VyQnV0dG9uLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7ICAgXG4gICAgICAgICAgICBmb3J3YWRVc2VyQnV0dG9uLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJylcbiAgICAgICAgICAgIGZvcndhZFVzZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcImN1cnNvci1ub3QtYWxsb3dlZFwiKVxuICAgICAgICAgICAgZm9yd2FyZFVzZXJTdmdTZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICBmb3J3YXJkVXNlclN2Z0RlZmF1bHQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIGZvcndhcmRVc2VyU3BhblRleHQudGV4dENvbnRlbnQgPSAnU2VudCdcblxuICAgICAgICAgICAgaWYgKHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlVHlwZSA9PSBNZXNzYWdlVHlwZS5URVhUKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kVGV4dE1lc3NhZ2UodXNlci5pZCwgdGhpcy5mb3J3YXJkVXNlck1lc3NhZ2VDb250ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5mb3J3YXJkVXNlck1lc3NhZ2VUeXBlID09IE1lc3NhZ2VUeXBlLkFVRElPKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kVm9pY2VNZXNzYWdlKHVzZXIuaWQsIHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlQmxvYilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlVHlwZSA9PSBNZXNzYWdlVHlwZS5JTUFHRSkge1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZEltYWdlTWVzc2FnZSh1c2VyLmlkLCB0aGlzLmZvcndhcmRVc2VyTWVzc2FnZUJsb2IsIHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlSW5wdXQsIHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlV2lkdGgsIHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlSGVpZ2h0LCB0aGlzLmZvcndhcmRVc2VyTWVzc2FnZU1pbWVUeXBlLCB0aGlzLmZvcndhcmRVc2VyTWVzc2FnZUV4dGVuc2lvbiwgdGhpcy5mb3J3YXJkVXNlck1lc3NhZ2VPdXRwdXQpXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0RGVmYXVsdFZhbHVlcyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5wYWdlID0gMSBcbiAgICAgICAgdGhpcy5pc1JlY2VpdmVkRmlyc3RNZXNzYWdlID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc0xvY2tJbmZpbml0ZVNjcm9sbGluZyA9IHRydWUgXG4gICAgICAgIFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZpZXdlcmpzLWltYWdlcy1jb250YWluZXJcIikuaW5uZXJIVE1MID0gJycgXG4gICAgfSBcblxuICAgIGNvcHlUZXh0TWVzc2FnZUNhbGxiYWNrID0gYXN5bmMgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29udGVudClcbiAgICB9XG5cbiAgICBmb3J3YXJkTWVzc2FnZUNhbGxiYWNrID0gKHR5cGUsIGNvbnRlbnQsIGJsb2IsIGlucHV0LCB3aWR0aCwgaGVpZ2h0LCBtaW1lVHlwZSwgZXh0ZW5zaW9uLCBvdXRwdXQpID0+IHtcbiAgICAgICAgdGhpcy5mb3J3YXJkVXNlck1lc3NhZ2VUeXBlID0gdHlwZVxuICAgICAgICB0aGlzLmZvcndhcmRVc2VyTWVzc2FnZUNvbnRlbnQgPSBjb250ZW50XG4gICAgICAgIHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlQmxvYiA9IGJsb2JcbiAgICAgICAgdGhpcy5mb3J3YXJkVXNlck1lc3NhZ2VJbnB1dCA9IGlucHV0XG4gICAgICAgIHRoaXMuZm9yd2FyZFVzZXJNZXNzYWdlV2lkdGggPSB3aWR0aFxuICAgICAgICB0aGlzLmZvcndhcmRVc2VyTWVzc2FnZUhlaWdodCA9IGhlaWdodFxuICAgICAgICB0aGlzLmZvcndhcmRVc2VyTWVzc2FnZU1pbWVUeXBlID0gbWltZVR5cGVcbiAgICAgICAgdGhpcy5mb3J3YXJkVXNlck1lc3NhZ2VFeHRlbnNpb24gPSBleHRlbnNpb25cbiAgICAgICAgdGhpcy5mb3J3YXJkVXNlck1lc3NhZ2VPdXRwdXQgPSBvdXRwdXQgXG5cbiAgICAgICAgVXRpbHMuc2V0Rm9yd2FyZFVzZXJVaURlZmF1bHRzKHRoaXMudXNlcnNNYXApXG4gICAgfVxuICAgIFxuICAgIHNldENvbnZlcnNhdGlvbnMgPSBhc3luYyAoKSA9PiB7ICAgXG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyQ2hhdGJveEVsZW1lbnQoKSB7IFxuICAgICAgICAgICAgY29uc3QgY2hhdGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0Ym94JykgXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gJ2ZsZXggZmxleC1ncm93JyBcbiAgICAgICAgICAgIGNoYXRib3guaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgIGNoYXRib3guYXBwZW5kKGVsZW1lbnQpIFxuICAgICAgICB9XG4gXG4gICAgICAgIGNsZWFyQ2hhdGJveEVsZW1lbnQoKVxuICAgICAgICBjb25zdCBjaGF0Ym94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXRib3gnKVxuICAgICAgICBjb25zdCBsb2FkZXIgPSBVdGlscy5jcmVhdGVMb2FkZXJFbGVtZW50KClcbiAgICAgICAgY2hhdGJveC5hcHBlbmRDaGlsZChsb2FkZXIpXG5cbiAgICAgICAgbGV0IGhhc01lc3NhZ2VzID0gZmFsc2VcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0TWVzc2FnZXModGhpcy51aWRWYWx1ZSwgdGhpcy5jdXJyZW50VXNlclZhbHVlLmlkLCB0aGlzLnVzZXJUb0NoYXRJZCwgdGhpcy5wYWdlLCB0aGlzLnBhZ2VTaXplKSAgXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykgeyAgXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKSAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtZXNzYWdlcy5sZW5ndGg7IGkrKykgeyBcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlkLCBjb250ZW50LCBpc1NlZW4gfSA9IG1lc3NhZ2VzW2ldXG4gICAgICAgICAgICAgICAgY29uc3QgeyBzZW5kZXIsIHJlY2VpdmVyIH0gPSBKU09OLnBhcnNlKGF0b2IoY29udGVudCkpIFxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VFbGVtZW50ID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UoYXdhaXQgVXRpbHMuZGVjcnlwdE1lc3NhZ2UodGhpcy5jdXJyZW50VXNlclByaXZhdGVrZXksIHNlbmRlcikpICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YS50eXBlID09IE1lc3NhZ2VUeXBlLlRFWFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50ID0gVXRpbHMuY3JlYXRlT3V0Z29pbmdNZXNzYWdlVGV4dEVsZW1lbnQobWVzc2FnZURhdGEuY29udGVudCwgbWVzc2FnZURhdGEudGltZXN0YW1wLCB0aGlzLnRpbWVBZ28pIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT0gTWVzc2FnZVR5cGUuQVVESU8pIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudCA9IFV0aWxzLmNyZWF0ZU91dGdvaW5nTWVzc2FnZVZvaWNlRWxlbWVudChtZXNzYWdlRGF0YS5jb250ZW50LCBtZXNzYWdlRGF0YS50aW1lc3RhbXAsIHRoaXMudGltZUFnbykgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobWVzc2FnZURhdGEudHlwZSA9PSBNZXNzYWdlVHlwZS5JTUFHRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQgPSBVdGlscy5jcmVhdGVPdXRnb2luZ01lc3NhZ2VJbWFnZUVsZW1lbnQobWVzc2FnZURhdGEuY29udGVudCwgbWVzc2FnZURhdGEudGltZXN0YW1wLCB0aGlzLnRpbWVBZ28pIFxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMuc2V0Vmlld2VySnNJbWFnZUVsZW1lbnQobWVzc2FnZUVsZW1lbnQsIHRoaXMudmlld2VyKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lc3NhZ2VJZCcsIGlkKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lc3NhZ2VEYXRhJywgSlNPTi5zdHJpbmdpZnkobWVzc2FnZURhdGEpKVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5jb3B5VGV4dE1lc3NhZ2VDYWxsYmFjayA9IHRoaXMuY29weVRleHRNZXNzYWdlQ2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuZm9yd2FyZE1lc3NhZ2VDYWxsYmFjayA9IHRoaXMuZm9yd2FyZE1lc3NhZ2VDYWxsYmFja1xuXG4gICAgICAgICAgICAgICAgICAgIGNoYXRib3guYXBwZW5kQ2hpbGQobWVzc2FnZUVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NoZWNrID0gbWVzc2FnZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmltZy1jaGVjaycpXG4gICAgICAgICAgICAgICAgICAgIGltZ0NoZWNrLnNyYyA9ICcvZ3JlZW5fY2hlY2tzLnN2ZycgIFxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7IFxuICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZUVsZW1lbnQgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VEYXRhID0gSlNPTi5wYXJzZShhd2FpdCBVdGlscy5kZWNyeXB0TWVzc2FnZSh0aGlzLmN1cnJlbnRVc2VyUHJpdmF0ZWtleSwgcmVjZWl2ZXIpKSBcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT0gTWVzc2FnZVR5cGUuVEVYVCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50ID0gVXRpbHMuY3JlYXRlSW5jb21pbmdNZXNzYWdlVGV4dEVsZW1lbnQobWVzc2FnZURhdGEuY29udGVudCwgdGhpcy51c2Vyc01hcC5nZXQobWVzc2FnZURhdGEuc2VuZGVyKS51c2VyRGV0YWlscy5hdmF0YXIsIG1lc3NhZ2VEYXRhLnRpbWVzdGFtcCwgdGhpcy50aW1lQWdvKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1lc3NhZ2VEYXRhLnR5cGUgPT0gTWVzc2FnZVR5cGUuQVVESU8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50ID0gVXRpbHMuY3JlYXRlSW5jb21pbmdNZXNzYWdlVm9pY2VFbGVtZW50KG1lc3NhZ2VEYXRhLmNvbnRlbnQsIHRoaXMudXNlcnNNYXAuZ2V0KG1lc3NhZ2VEYXRhLnNlbmRlcikudXNlckRldGFpbHMuYXZhdGFyLCBtZXNzYWdlRGF0YS50aW1lc3RhbXAsIHRoaXMudGltZUFnbylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICggbWVzc2FnZURhdGEudHlwZSA9PSBNZXNzYWdlVHlwZS5JTUFHRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQgPSBVdGlscy5jcmVhdGVJbmNvbW1pbmdNZXNzYWdlSW1hZ2VFbGVtZW50KG1lc3NhZ2VEYXRhLmNvbnRlbnQsIHRoaXMudXNlcnNNYXAuZ2V0KG1lc3NhZ2VEYXRhLnNlbmRlcikudXNlckRldGFpbHMuYXZhdGFyLCBtZXNzYWdlRGF0YS50aW1lc3RhbXAsIHRoaXMudGltZUFnbylcbiAgICAgICAgICAgICAgICAgICAgICAgIFV0aWxzLnNldFZpZXdlckpzSW1hZ2VFbGVtZW50KG1lc3NhZ2VFbGVtZW50LCB0aGlzLnZpZXdlcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZXNzYWdlSWQnLCBpZClcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZXNzYWdlRGF0YScsIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2VEYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuY29weVRleHRNZXNzYWdlQ2FsbGJhY2sgPSB0aGlzLmNvcHlUZXh0TWVzc2FnZUNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmZvcndhcmRNZXNzYWdlQ2FsbGJhY2sgPSB0aGlzLmZvcndhcmRNZXNzYWdlQ2FsbGJhY2tcblxuICAgICAgICAgICAgICAgICAgICBjaGF0Ym94LmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50KSAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHRoaXMuY2hhdGJveFNjcm9sbFRvQm90dG9tKHRydWUpXG5cbiAgICAgICAgICAgIGhhc01lc3NhZ2VzID0gbWVzc2FnZXMubGVuZ3RoID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzTG9ja0luZmluaXRlU2Nyb2xsaW5nID0gZmFsc2VcbiAgICAgICAgY2hhdGJveC5yZW1vdmVDaGlsZChsb2FkZXIpIFxuICAgICAgICBVdGlscy5zZXRDaGF0Ym94TWVzc2FnZUF2YXRhckhpZGRlbigpXG4gICAgICAgIFV0aWxzLnNldENoYXRib3hEaXZpZGVyVGltZXN0YW1wKClcbiAgICAgICAgVXRpbHMuc2V0Q2hhdGJveE1lc3NhZ2VCb3JkZXJBbmRNYXJnaW4oKSBcbiAgICAgICAgXG4gICAgICAgIGlmICghaGFzTWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB0aGlzLnVzZXJzTWFwLmdldCh0aGlzLnVzZXJUb0NoYXRJZClcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBgJHt1c2VyLnVzZXJEZXRhaWxzLmZpcnN0bmFtZX0gJHt1c2VyLnVzZXJEZXRhaWxzLmxhc3RuYW1lfWBcbiAgICAgICAgICAgIGNvbnN0IGF2YXRhciA9IHVzZXIudXNlckRldGFpbHMuYXZhdGFyXG4gICAgICAgICAgICBVdGlscy5zZXRJbnRyb2R1Y3Rpb25FbGVtZW50KG5hbWUsIGF2YXRhcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFVzZXJUb0NoYXROYW1lID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgdXNlclRvQ2hhdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlclRvQ2hhdE5hbWUnKVxuICAgICAgICB1c2VyVG9DaGF0TmFtZS50ZXh0Q29udGVudCA9IG5hbWVcbiAgICB9XG5cbiAgICBzZXRVc2VyVG9DaGF0QXZhdGFyID0gKGF2YXRhcikgPT4ge1xuICAgICAgICBjb25zdCB1c2VyVG9DaGF0QXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJ0b2NoYXQtYXZhdGFyJylcbiAgICAgICAgdXNlclRvQ2hhdEF2YXRhci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2F2YXRhcn0nKWBcbiAgICB9XG5cbiAgICBzZXRVc2VyVG9DaGF0T25saW5lU3RhdHVzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpc09ubGluZSA9IHRoaXMudXNlcnNPbmxpbmVNYXAuZ2V0KHRoaXMudXNlclRvQ2hhdElkKVxuICAgICAgICBjb25zdCB1c2VyVG9DaGF0T25saW5lU3RhdHVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJ0b2NoYXQtb25saW5lLXN0YXR1cycpXG4gICAgICAgIGNvbnN0IHVzZXJUb0NoYXRPbmxpbmVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJ0b2NoYXQtb25saW5lLXRleHQnKVxuICAgICAgICBpZiAoaXNPbmxpbmUpIHtcbiAgICAgICAgICAgIHVzZXJUb0NoYXRPbmxpbmVTdGF0dXMuY2xhc3NMaXN0LnJlbW92ZSgnYmctcmVkLTQwMCcpXG4gICAgICAgICAgICB1c2VyVG9DaGF0T25saW5lU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2JnLWdyZWVuLTQwMCcpXG4gICAgICAgICAgICB1c2VyVG9DaGF0T25saW5lVGV4dC50ZXh0Q29udGVudCA9IFwiQWN0aXZlIG5vd1wiXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB1c2VyVG9DaGF0T25saW5lU3RhdHVzLmNsYXNzTGlzdC5hZGQoJ2JnLXJlZC00MDAnKVxuICAgICAgICAgICAgdXNlclRvQ2hhdE9ubGluZVN0YXR1cy5jbGFzc0xpc3QucmVtb3ZlKCdiZy1ncmVlbi00MDAnKSBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoYXN5bmMoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXRVc2VyTGFzdFNlZW4odXNlclRvQ2hhdE9ubGluZVRleHQpXG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VXNlckxhc3RTZWVuID0gYXN5bmMgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9ICdPZmZsaW5lJ1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXRVc2VyTGFzdFNlZW4odGhpcy51aWRWYWx1ZSwgdGhpcy51c2VyVG9DaGF0SWQpIFxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCkgIFxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IFwiTGFzdCBzZWVuIFwiICsgdGhpcy50aW1lQWdvLmZvcm1hdChwYXJzZUludChkYXRhLnRpbWVzdGFtcCksICdyb3VuZCcpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXREYXJrTW9kZVRvZ2dsZSA9ICgpID0+IHsgXG4gICAgICAgIGxldCB0aGVtZVRvZ2dsZURhcmtJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXRvZ2dsZS1kYXJrLWljb24nKTtcbiAgICAgICAgbGV0IHRoZW1lVG9nZ2xlTGlnaHRJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXRvZ2dsZS1saWdodC1pY29uJyk7XG4gICAgICAgIGxldCBlbW9qaVBpY2tlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbW9qaS1waWNrZXInKVxuXG4gICAgICAgIC8vIENoYW5nZSB0aGUgaWNvbnMgaW5zaWRlIHRoZSBidXR0b24gYmFzZWQgb24gcHJldmlvdXMgc2V0dGluZ3NcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2xvci10aGVtZScpID09PSAnZGFyaycgfHwgKCEoJ2NvbG9yLXRoZW1lJyBpbiBsb2NhbFN0b3JhZ2UpICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcykpIHtcbiAgICAgICAgICAgIHRoZW1lVG9nZ2xlTGlnaHRJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcblxuICAgICAgICAgICAgZW1vamlQaWNrZXIuY2xhc3NMaXN0LnJlbW92ZSgnbGlnaHQnKVxuICAgICAgICAgICAgZW1vamlQaWNrZXIuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGVtZVRvZ2dsZURhcmtJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcblxuICAgICAgICAgICAgZW1vamlQaWNrZXIuY2xhc3NMaXN0LmFkZCgnbGlnaHQnKVxuICAgICAgICAgICAgZW1vamlQaWNrZXIuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpXG4gICAgICAgIH0gXG4gXG4gICAgICAgIHZhciB0aGVtZVRvZ2dsZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS10b2dnbGUnKTtcblxuICAgICAgICB0aGVtZVRvZ2dsZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gdG9nZ2xlIGljb25zIGluc2lkZSBidXR0b25cbiAgICAgICAgICAgIHRoZW1lVG9nZ2xlRGFya0ljb24uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGVtZVRvZ2dsZUxpZ2h0SWNvbi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcblxuICAgICAgICAgICAgLy8gaWYgc2V0IHZpYSBsb2NhbCBzdG9yYWdlIHByZXZpb3VzbHlcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sb3ItdGhlbWUnKSkge1xuICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sb3ItdGhlbWUnKSA9PT0gJ2xpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sb3ItdGhlbWUnLCAnZGFyaycpO1xuXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppUGlja2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2xpZ2h0JylcbiAgICAgICAgICAgICAgICAgICAgZW1vamlQaWNrZXIuY2xhc3NMaXN0LmFkZCgnZGFyaycpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yLXRoZW1lJywgJ2xpZ2h0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZW1vamlQaWNrZXIuY2xhc3NMaXN0LmFkZCgnbGlnaHQnKVxuICAgICAgICAgICAgICAgICAgICBlbW9qaVBpY2tlci5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIE5PVCBzZXQgdmlhIGxvY2FsIHN0b3JhZ2UgcHJldmlvdXNseVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZGFyaycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xvci10aGVtZScsICdsaWdodCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2xvci10aGVtZScsICdkYXJrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBzZXRFbW9qaVBpY2tlckVsZW1lbnQgPSAoKSA9PiB7ICAgXG4gICAgICAgIGNvbnN0IGNoYXRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdGJveC1tZXNzYWdlLWlucHV0JylcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZW1vamktcGlja2VyJykuYWRkRXZlbnRMaXN0ZW5lcignZW1vamktY2xpY2snLCAoZSkgPT4geyAgIFxuICAgICAgICAgICAgY29uc3QgY2FyZXRQb3NpdGlvbiA9IFV0aWxzLnNhdmVDYXJldFBvc2l0aW9uKGNoYXRib3gpXG4gICAgICAgICAgICBjaGF0Ym94LmlubmVySFRNTCA9IGNoYXRib3guaW5uZXJIVE1MLnN1YnN0cmluZygwLCBjYXJldFBvc2l0aW9uKSArIGUuZGV0YWlsLnVuaWNvZGUgKyBjaGF0Ym94LmlubmVySFRNTC5zdWJzdHJpbmcoY2FyZXRQb3NpdGlvbilcbiAgICAgICAgICAgIFV0aWxzLnJlc3RvcmVDYXJldFBvc2l0aW9uKGNoYXRib3gsIGNhcmV0UG9zaXRpb24gKyBlLmRldGFpbC51bmljb2RlLmxlbmd0aClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXRTaWRlYmFyVXNlclRvZ2dsZUZvck1vYmlsZSA9ICgpID0+IHsgXG4gICAgICAgIGlmIChVdGlscy5nZXRVc2VyQWdlbnRQbGF0Zm9ybVR5cGUoKSA9PSAnbW9iaWxlJykge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlcGFyYXRvci1zaWRlYmFyLWJ1dHRvbicpLmNsaWNrKClcbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBzZXRNYWluQ2hhdGJveCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkNoYXRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1jaGF0Ym94JylcbiAgICAgICAgY29uc3QgbWFpbkNoYXRib3hJbnRybyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWNoYXRib3gtaW50cm8nKVxuXG4gICAgICAgIG1haW5DaGF0Ym94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgIG1haW5DaGF0Ym94SW50cm8uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykgXG4gICAgfSBcblxuICAgIHNldFNlbnRNZXNzYWdlID0gYXN5bmMgKHJlY2VpdmVyLCBjb250ZW50LCBtZXNzYWdlRWxlbWVudCwgbWVzc2FnZSwgdHlwZSwgdGltZXN0YW1wLCBvbGRNZXNzYWdlRWxlbWVudD1udWxsKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYXRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdGJveCcpIFxuICAgICAgICBcbiAgICAgICAgdGhpcy5jaGF0Ym94U2Nyb2xsVG9Cb3R0b20odHJ1ZSkgXG4gICAgICAgIGlmIChwYXJzZUludCh0aGlzLnVzZXJUb0NoYXRJZCkgPT0gcGFyc2VJbnQocmVjZWl2ZXIpKSB7XG4gICAgICAgICAgICBpZiAob2xkTWVzc2FnZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjaGF0Ym94LnJlcGxhY2VDaGlsZChtZXNzYWdlRWxlbWVudCwgb2xkTWVzc2FnZUVsZW1lbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGF0Ym94LmFwcGVuZENoaWxkKG1lc3NhZ2VFbGVtZW50KSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIFV0aWxzLnJlT3JkZXJMYXN0Rm91ckNoYXRib3hFbGVtZW50cygpXG4gICAgICAgIFV0aWxzLnNldENoYXRib3hNZXNzYWdlQXZhdGFySGlkZGVuKClcbiAgICAgICAgVXRpbHMuc2V0Q2hhdGJveERpdmlkZXJUaW1lc3RhbXAoKVxuICAgICAgICBVdGlscy5zZXRDaGF0Ym94TWVzc2FnZUJvcmRlckFuZE1hcmdpbigpICBcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5jcmVhdGVUZXh0TWVzc2FnZSh0aGlzLnVpZFZhbHVlLCBgbWVzc2FnZXMvJHt0aGlzLmN1cnJlbnRVc2VyVmFsdWUuaWR9LyR7cmVjZWl2ZXJ9YCwgYCR7dGhpcy5jdXJyZW50VXNlclZhbHVlLmlkfS0ke3JlY2VpdmVyfWAsIHRoaXMuY3VycmVudFVzZXJWYWx1ZS5pZCwgcmVjZWl2ZXIsIE1lc3NhZ2VUeXBlLlRFWFQsIGNvbnRlbnQsIHRpbWVzdGFtcCwgdHJ1ZSlcbiAgICAgICAgY29uc3QgaW1nQ2hlY2sgPSBtZXNzYWdlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLWNoZWNrJylcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7IFxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgICAgIGNvbnN0IGlkID0gbWVzc2FnZURhdGEuaWRcbiAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVzc2FnZUlkJywgaWQpXG4gICAgICAgICBcbiAgICAgICAgICAgIGlmICh0eXBlID09IE1lc3NhZ2VUeXBlLlRFWFQpIHtcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRVc2VyTGFzdE1lc3NhZ2VDb250ZW50KHJlY2VpdmVyLCBtZXNzYWdlKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gTWVzc2FnZVR5cGUuQVVESU8pIHtcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRVc2VyTGFzdE1lc3NhZ2VDb250ZW50KHJlY2VpdmVyLCAnWW91IHNlbnQgYW4gYXVkaW8nKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gTWVzc2FnZVR5cGUuSU1BR0UpIHtcbiAgICAgICAgICAgICAgICBVdGlscy5zZXRVc2VyTGFzdE1lc3NhZ2VDb250ZW50KHJlY2VpdmVyLCAnWW91IHNlbnQgYW4gaW1hZ2UnKSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFV0aWxzLnNldFVzZXJMYXN0TWVzc2FnZVRpbWVzdGFtcChyZWNlaXZlciwgdGltZXN0YW1wKVxuICAgICAgICAgICAgVXRpbHMuc2V0VXNlckxhc3RNZXNzYWdlVGltZUFnbyhyZWNlaXZlciwgdGltZXN0YW1wLCB0aGlzLnRpbWVBZ28pXG4gICAgICAgICAgICBVdGlscy5yZU9yZGVyVXNlcnNMaXN0SWZOZXdNZXNzYWdlSXNCZWluZ1NlbnRPclJlY2VpdmVkKHJlY2VpdmVyKVxuICAgICAgICAgICAgaW1nQ2hlY2suc3JjID0gJy9ncmVlbl9jaGVja3Muc3ZnJ1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW1nQ2hlY2suc3JjID0gJy9yZWRfY2hlY2tzLnN2ZydcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmRUZXh0TWVzc2FnZSA9IGFzeW5jIChyZWNlaXZlciwgbWVzc2FnZSkgPT4ge1xuICAgICAgICBjb25zdCBjaGF0Ym94TWVzc2FnZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXRib3gtbWVzc2FnZS1pbnB1dCcpXG4gICAgICAgIFxuICAgICAgICBjaGF0Ym94TWVzc2FnZUlucHV0LnRleHRDb250ZW50ID0gJydcbiAgICAgICAgY29uc3QgdHlwZSA9IE1lc3NhZ2VUeXBlLlRFWFRcbiAgICAgICAgY29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBzZW5kZXI6IHRoaXMuY3VycmVudFVzZXJWYWx1ZS5pZCxcbiAgICAgICAgICAgIHJlY2VpdmVyOiByZWNlaXZlcixcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICBjb250ZW50OiBtZXNzYWdlLFxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXBcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB1c2VyVG9jaGF0UHVibGlja2V5ID0gVXRpbHMuYmFzZTY0VG9BcnJheUJ1ZmZlcih0aGlzLnVzZXJzTWFwLmdldChyZWNlaXZlcikudXNlckRldGFpbHMucHVibGlja2V5LnB1YmxpY2tleSlcbiAgICAgICAgY29uc3QgZW5jcnlwdGVkU2VuZGVyVGV4dE1lc3NhZ2UgPSBhd2FpdCBVdGlscy5lbmNyeXB0TWVzc2FnZSh0aGlzLmN1cnJlbnRVc2VyUHVibGlja2V5LCBkYXRhKVxuICAgICAgICBjb25zdCBlbmNyeXB0ZWRSZWNlaXZlclRleHRNZXNzYWdlID0gYXdhaXQgVXRpbHMuZW5jcnlwdE1lc3NhZ2UodXNlclRvY2hhdFB1YmxpY2tleSwgZGF0YSkgXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBidG9hKEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIHNlbmRlcjogZW5jcnlwdGVkU2VuZGVyVGV4dE1lc3NhZ2UsXG4gICAgICAgICAgICByZWNlaXZlcjogZW5jcnlwdGVkUmVjZWl2ZXJUZXh0TWVzc2FnZVxuICAgICAgICB9KSlcblxuICAgICAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IFV0aWxzLmNyZWF0ZU91dGdvaW5nTWVzc2FnZVRleHRFbGVtZW50KG1lc3NhZ2UsIHRpbWVzdGFtcCwgdGhpcy50aW1lQWdvKVxuICAgICAgICBtZXNzYWdlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ21lc3NhZ2VEYXRhJywgZGF0YSlcbiAgICAgICAgbWVzc2FnZUVsZW1lbnQuY29weVRleHRNZXNzYWdlQ2FsbGJhY2sgPSB0aGlzLmNvcHlUZXh0TWVzc2FnZUNhbGxiYWNrXG4gICAgICAgIG1lc3NhZ2VFbGVtZW50LmZvcndhcmRNZXNzYWdlQ2FsbGJhY2sgPSB0aGlzLmZvcndhcmRNZXNzYWdlQ2FsbGJhY2tcbiAgICAgICAgYXdhaXQgdGhpcy5zZXRTZW50TWVzc2FnZShyZWNlaXZlciwgY29udGVudCwgbWVzc2FnZUVsZW1lbnQsIG1lc3NhZ2UsIHR5cGUsIHRpbWVzdGFtcClcbiAgICB9IFxuXG4gICAgc2VuZFZvaWNlTWVzc2FnZSA9IGFzeW5jIChyZWNlaXZlciwgYmxvYikgPT4geyBcbiAgICAgICAgdGhpcy5hdWRpb0Jsb2IgPSBudWxsXG4gIFxuICAgICAgICBjb25zdCB2b2ljZUNoYXRSZWNvcmREZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndm9pY2VjaGF0LXJlY29yZC1kZWxldGUnKVxuICAgICAgICBjb25zdCB2b2ljZUNoYXRSZWNvcmRDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2ljZWNoYXQtcmVjb3JkLWNsb3NlJylcbiAgICAgICAgdm9pY2VDaGF0UmVjb3JkRGVsZXRlLmNsaWNrKClcbiAgICAgICAgdm9pY2VDaGF0UmVjb3JkQ2xvc2UuY2xpY2soKVxuXG4gICAgICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICAgICAgY29uc3QgY2hhdGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0Ym94JykgXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VUZW1wRWxlbWVudCA9IFV0aWxzLmNyZWF0ZU91dGdvaW5nTWVzc2FnZVZvaWNlRWxlbWVudCh1cmwsIERhdGUubm93KCksIHRoaXMudGltZUFnbylcbiAgICAgICAgdGhpcy5jaGF0Ym94U2Nyb2xsVG9Cb3R0b20odHJ1ZSlcbiAgICAgICAgaWYgKHBhcnNlSW50KHRoaXMudXNlclRvQ2hhdElkKSA9PSBwYXJzZUludChyZWNlaXZlcikpIHsgXG4gICAgICAgICAgICBjaGF0Ym94LmFwcGVuZENoaWxkKG1lc3NhZ2VUZW1wRWxlbWVudCkgXG4gICAgICAgIH1cbiBcbiAgICAgICAgYXdhaXQgdGhpcy5mZm1wZWcud3JpdGVGaWxlKCdpbnB1dC53ZWJtJywgbmV3IFVpbnQ4QXJyYXkoYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpKSlcbiAgICAgICAgYXdhaXQgdGhpcy5mZm1wZWcuZXhlYyhbJy1pJywgJ2lucHV0LndlYm0nLCAnLWM6YScsICdsaWJvcHVzJywgJy1iOmEnLCAnMCcsICdvdXRwdXQud2VibSddKTtcbiAgICAgICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKFthd2FpdCB0aGlzLmZmbXBlZy5yZWFkRmlsZSgnb3V0cHV0LndlYm0nKV0sICdhdWRpby53ZWJtJywgeyB0eXBlOiAnYXVkaW8vd2VibScgfSkgXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmNyZWF0ZUF1ZGlvTWVzc2FnZSh0aGlzLnVpZFZhbHVlLCBmaWxlLCBtZXNzYWdlVGVtcEVsZW1lbnQsIFV0aWxzLnByb2dyZXNzU3ZnRWxlbWVudENhbGxiYWNrKSBcblxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IDIwMCkgeyAgIFxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IE1lc3NhZ2VUeXBlLkFVRElPXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpXG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc2VuZGVyOiB0aGlzLmN1cnJlbnRVc2VyVmFsdWUuaWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHJlY2VpdmVyLFxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcFxuICAgICAgICAgICAgfSkgXG5cbiAgICAgICAgICAgIGNvbnN0IHVzZXJUb2NoYXRQdWJsaWNrZXkgPSBVdGlscy5iYXNlNjRUb0FycmF5QnVmZmVyKHRoaXMudXNlcnNNYXAuZ2V0KHJlY2VpdmVyKS51c2VyRGV0YWlscy5wdWJsaWNrZXkucHVibGlja2V5KVxuICAgICAgICAgICAgY29uc3QgZW5jcnlwdGVkU2VuZGVyVGV4dE1lc3NhZ2UgPSBhd2FpdCBVdGlscy5lbmNyeXB0TWVzc2FnZSh0aGlzLmN1cnJlbnRVc2VyUHVibGlja2V5LCBkYXRhKVxuICAgICAgICAgICAgY29uc3QgZW5jcnlwdGVkUmVjZWl2ZXJUZXh0TWVzc2FnZSA9IGF3YWl0IFV0aWxzLmVuY3J5cHRNZXNzYWdlKHVzZXJUb2NoYXRQdWJsaWNrZXksIGRhdGEpIFxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNlbmRlcjogZW5jcnlwdGVkU2VuZGVyVGV4dE1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZXI6IGVuY3J5cHRlZFJlY2VpdmVyVGV4dE1lc3NhZ2VcbiAgICAgICAgICAgIH0pKVxuIFxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUVsZW1lbnQgPSBVdGlscy5jcmVhdGVPdXRnb2luZ01lc3NhZ2VWb2ljZUVsZW1lbnQodXJsLCB0aW1lc3RhbXAsIHRoaXMudGltZUFnbylcbiAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVzc2FnZURhdGEnLCBkYXRhKVxuICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuY29weVRleHRNZXNzYWdlQ2FsbGJhY2sgPSB0aGlzLmNvcHlUZXh0TWVzc2FnZUNhbGxiYWNrXG4gICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5mb3J3YXJkTWVzc2FnZUNhbGxiYWNrID0gdGhpcy5mb3J3YXJkTWVzc2FnZUNhbGxiYWNrXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldFNlbnRNZXNzYWdlKHJlY2VpdmVyLCBjb250ZW50LCBtZXNzYWdlRWxlbWVudCwgbnVsbCwgdHlwZSwgdGltZXN0YW1wLCBtZXNzYWdlVGVtcEVsZW1lbnQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kSW1hZ2VNZXNzYWdlID0gYXN5bmMgKHJlY2VpdmVyLCBibG9iLCBpbnB1dCwgd2lkdGgsIGhlaWdodCwgbWltZVR5cGUsIGV4dGVuc2lvbiwgb3V0cHV0KSA9PiB7XG4gICAgICAgIGxldCBmaWxlID0gbnVsbCBcbiAgICAgICAgbGV0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICAgICAgZmlsZSA9IG5ldyBGaWxlKFtuZXcgVWludDhBcnJheShhd2FpdCBibG9iLmFycmF5QnVmZmVyKCkpXSwgb3V0cHV0LCB7IHR5cGU6IG1pbWVUeXBlIH0pIFxuICAgICAgICAvKlxuICAgICAgICBpZiAoZXh0ZW5zaW9uID09ICdwbmcnKSB7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZmbXBlZy53cml0ZUZpbGUoaW5wdXQsIG5ldyBVaW50OEFycmF5KGF3YWl0IGJsb2IuYXJyYXlCdWZmZXIoKSkpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmZmbXBlZy5leGVjKFsnLWknLCBpbnB1dCwgJy12ZicsIGBzY2FsZT0ke3dpZHRofToke2hlaWdodH1gLCBvdXRwdXRdKTtcbiAgICAgICAgICAgIGZpbGUgPSBuZXcgRmlsZShbYXdhaXQgdGhpcy5mZm1wZWcucmVhZEZpbGUob3V0cHV0KV0sIG91dHB1dCwgeyB0eXBlOiBtaW1lVHlwZSB9KSAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXh0ZW5zaW9uID09ICdHSUYnKSB7XG4gICAgICAgICAgICBmaWxlID0gbmV3IEZpbGUoW25ldyBVaW50OEFycmF5KGF3YWl0IGJsb2IuYXJyYXlCdWZmZXIoKSldLCBvdXRwdXQsIHsgdHlwZTogbWltZVR5cGUgfSkgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXh0ZW5zaW9uID09IFwiaGVpY1wiKSB7XG4gICAgICAgICAgICBjb25zdCBoZWljQmxvYiA9IGF3YWl0IGhlaWMyYW55KHsgYmxvYiwgdG9UeXBlOiAnaW1hZ2UvanBlZyd9KSBcbiAgICAgICAgICAgIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoaGVpY0Jsb2IpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmZtcGVnLndyaXRlRmlsZSgnaW5wdXQuanBlZycsIG5ldyBVaW50OEFycmF5KGF3YWl0IGhlaWNCbG9iLmFycmF5QnVmZmVyKCkpKVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZm1wZWcuZXhlYyhbJy1pJywgJ2lucHV0LmpwZWcnLCAnLXBpeF9mbXQnLCAneXV2NDIwcCcsICctdmYnLCBgc2NhbGU9JHt3aWR0aH06JHtoZWlnaHR9YCwgJ291dHB1dC5qcGVnJ10pO1xuICAgICAgICAgICAgZmlsZSA9IG5ldyBGaWxlKFthd2FpdCB0aGlzLmZmbXBlZy5yZWFkRmlsZSgnb3V0cHV0LmpwZWcnKV0sICdvdXRwdXQuanBlZycsIHsgdHlwZTogJ2ltYWdlL2pwZWcnIH0pICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmZtcGVnLndyaXRlRmlsZShpbnB1dCwgbmV3IFVpbnQ4QXJyYXkoYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpKSlcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmZtcGVnLmV4ZWMoWyctaScsIGlucHV0LCAnLXBpeF9mbXQnLCAneXV2NDIwcCcsICctdmYnLCBgc2NhbGU9JHt3aWR0aH06JHtoZWlnaHR9YCwgb3V0cHV0XSk7XG4gICAgICAgICAgICBmaWxlID0gbmV3IEZpbGUoW2F3YWl0IHRoaXMuZmZtcGVnLnJlYWRGaWxlKG91dHB1dCldLCBvdXRwdXQsIHsgdHlwZTogbWltZVR5cGUgfSkgXG4gICAgICAgIH0gXG4gICAgICAgICAgICAqL1xuICAgICAgICBcbiAgICAgICAgY29uc3QgY2hhdGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0Ym94JykgXG4gICAgICAgIGNvbnN0IG1lc3NhZ2VUZW1wRWxlbWVudCA9IFV0aWxzLmNyZWF0ZU91dGdvaW5nTWVzc2FnZUltYWdlRWxlbWVudCh1cmwsIERhdGUubm93KCksIHRoaXMudGltZUFnbykgIFxuICAgICAgICB0aGlzLmNoYXRib3hTY3JvbGxUb0JvdHRvbSh0cnVlKVxuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy51c2VyVG9DaGF0SWQpID09IHBhcnNlSW50KHJlY2VpdmVyKSkge1xuICAgICAgICAgICAgY2hhdGJveC5hcHBlbmRDaGlsZChtZXNzYWdlVGVtcEVsZW1lbnQpIFxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuY3JlYXRlSW1hZ2VNZXNzYWdlKHRoaXMudWlkVmFsdWUsIGZpbGUsIGV4dGVuc2lvbiA9PSAnaGVpYycgPyAnanBlZycgOiBleHRlbnNpb24sIG1lc3NhZ2VUZW1wRWxlbWVudCwgVXRpbHMucHJvZ3Jlc3NTdmdFbGVtZW50Q2FsbGJhY2spXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7IFxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IE1lc3NhZ2VUeXBlLklNQUdFXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBEYXRlLm5vdygpXG5cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc2VuZGVyOiB0aGlzLmN1cnJlbnRVc2VyVmFsdWUuaWQsXG4gICAgICAgICAgICAgICAgcmVjZWl2ZXI6IHJlY2VpdmVyLFxuICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgY29udGVudDogcmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgdXNlclRvY2hhdFB1YmxpY2tleSA9IFV0aWxzLmJhc2U2NFRvQXJyYXlCdWZmZXIodGhpcy51c2Vyc01hcC5nZXQocmVjZWl2ZXIpLnVzZXJEZXRhaWxzLnB1YmxpY2tleS5wdWJsaWNrZXkpXG4gICAgICAgICAgICBjb25zdCBlbmNyeXB0ZWRTZW5kZXJUZXh0TWVzc2FnZSA9IGF3YWl0IFV0aWxzLmVuY3J5cHRNZXNzYWdlKHRoaXMuY3VycmVudFVzZXJQdWJsaWNrZXksIGRhdGEpXG4gICAgICAgICAgICBjb25zdCBlbmNyeXB0ZWRSZWNlaXZlclRleHRNZXNzYWdlID0gYXdhaXQgVXRpbHMuZW5jcnlwdE1lc3NhZ2UodXNlclRvY2hhdFB1YmxpY2tleSwgZGF0YSkgXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gYnRvYShKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc2VuZGVyOiBlbmNyeXB0ZWRTZW5kZXJUZXh0TWVzc2FnZSxcbiAgICAgICAgICAgICAgICByZWNlaXZlcjogZW5jcnlwdGVkUmVjZWl2ZXJUZXh0TWVzc2FnZVxuICAgICAgICAgICAgfSkpIFxuXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IFV0aWxzLmNyZWF0ZU91dGdvaW5nTWVzc2FnZUltYWdlRWxlbWVudCh1cmwsIHRpbWVzdGFtcCwgdGhpcy50aW1lQWdvKSBcbiAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVzc2FnZURhdGEnLCBkYXRhKVxuICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuY29weVRleHRNZXNzYWdlQ2FsbGJhY2sgPSB0aGlzLmNvcHlUZXh0TWVzc2FnZUNhbGxiYWNrXG4gICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5mb3J3YXJkTWVzc2FnZUNhbGxiYWNrID0gdGhpcy5mb3J3YXJkTWVzc2FnZUNhbGxiYWNrXG4gICAgICAgICAgICBVdGlscy5zZXRWaWV3ZXJKc0ltYWdlRWxlbWVudChtZXNzYWdlRWxlbWVudCwgdGhpcy52aWV3ZXIpXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNldFNlbnRNZXNzYWdlKHJlY2VpdmVyLCBjb250ZW50LCBtZXNzYWdlRWxlbWVudCwgbnVsbCwgdHlwZSwgdGltZXN0YW1wLCBtZXNzYWdlVGVtcEVsZW1lbnQpIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0T25DaGFuZ2VJbWFnZUZpbGVJbnB1dCA9ICgpID0+IHsgXG4gICAgICAgIGNvbnN0IGltYWdlRmlsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltYWdlLWZpbGUtaW5wdXQnKVxuICAgICAgICBpbWFnZUZpbGVJbnB1dC5vbmNoYW5nZSA9IGFzeW5jIChlKSA9PiB7IFxuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSBlLnRhcmdldC5maWxlc1xuICAgICAgICAgICAgY29uc3QgY2hhdGJveE1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0Ym94LW1lc3NhZ2UtaW5wdXQnKSBcbiAgICAgICAgICAgIGNvbnN0IGNoYXRib3hWb2ljZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXRib3gtdm9pY2UtaW5wdXQnKVxuICAgICAgICAgICAgY29uc3QgY2hhdGJveEltYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdGJveC1pbWFnZS1pbnB1dCcpXG4gICAgICAgICAgICBjb25zdCBzZW5kVGV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kLXRleHQtYnV0dG9uJylcbiAgICAgICAgICAgIGNvbnN0IHNlbmRWb2ljZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kLXZvaWNlLWJ1dHRvbicpXG4gICAgICAgICAgICBjb25zdCBzZW5kSW1hZ2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZC1pbWFnZS1idXR0b24nKSBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hhdGJveEltYWdlSW5wdXQuaW5uZXJIVE1MID0gJydcbiAgICAgICAgICAgIGlmIChmaWxlcy5sZW5ndGgpIHsgXG4gICAgICAgICAgICAgICAgVXRpbHMuaGlkZU1lZGlhR3JvdXAoKVxuICAgICAgICAgICAgICAgIGNoYXRib3hNZXNzYWdlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICBjaGF0Ym94Vm9pY2VJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgIGNoYXRib3hJbWFnZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgc2VuZFRleHRCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICBzZW5kVm9pY2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICBzZW5kSW1hZ2VCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2ldXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9TZW5kSW1hZ2VzTWFwLnNldChpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnZmlsZSc6IGZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgY29udGFpbmVyIGRpdiBmb3IgaW1hZ2UgYW5kIGNsb3NlIGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZUNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VDb250YWluZXIuc3R5bGUubWFyZ2luID0gJzVweCc7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBpbWcgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnbWltZVR5cGUnLCBmaWxlLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ2tleScsIGkpXG4gICAgICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWFnZScpXG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLm9iamVjdEZpdCA9ICdmaWxsJ1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlIGZpbGUgYXMgYSBEYXRhIFVSTFxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmYWtlSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGZha2VJbWcuc3JjID0gZXZlbnQudGFyZ2V0LnJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFrZUltZy5vbmxvYWQgPSAoKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9TZW5kSW1hZ2VzTWFwLnNldChpLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmaWxlJzogZmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZmFrZUltZy53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2hlaWdodCc6IGZha2VJbWcuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVhZCB0aGUgaW1hZ2UgZmlsZVxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSBjbG9zZSBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUucmlnaHQgPSAnMCc7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2IoMjM0IDYzIDYzKSc7XG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUuYm9yZGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbi5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNTAlJztcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbi5zdHlsZS53aWR0aCA9ICcyNXB4JztcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUuaGVpZ2h0ID0gJzI1cHgnO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZUJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9ICcxNHB4JztcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VCdXR0b24uc3R5bGUubGluZUhlaWdodCA9ICcyNXB4JzsgIC8vIFNldCBsaW5lLWhlaWdodCB0byBtYXRjaCB0aGUgYnV0dG9uIGhlaWdodCBmb3IgdmVydGljYWwgY2VudGVyaW5nXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciB0byByZW1vdmUgdGhlIGltYWdlQ29udGFpbmVyIG9uIGNsaWNrXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvU2VuZEltYWdlc01hcC5kZWxldGUoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRib3hJbWFnZUlucHV0LnJlbW92ZUNoaWxkKGltYWdlQ29udGFpbmVyKTsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50b1NlbmRJbWFnZXNNYXAuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRib3hNZXNzYWdlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGF0Ym94Vm9pY2VJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXRib3hJbWFnZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZFRleHRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kVm9pY2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW5kSW1hZ2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBBcHBlbmQgdGhlIGltZyBhbmQgY2xvc2UgYnV0dG9uIHRvIHRoZSBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGVuZCB0aGUgY29udGFpbmVyIHRvIHRoZSBjaGF0Ym94SW5wdXQgZGl2XG4gICAgICAgICAgICAgICAgICAgIGNoYXRib3hJbWFnZUlucHV0LmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0SW1hZ2VCdXR0b25DbGljayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW1hZ2VJbnB1dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZS1pbnB1dC1idXR0b24nKVxuXG4gICAgICAgIGltYWdlSW5wdXRCdXR0b24ub25jbGljayA9ICgpID0+IHsgXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNWb2ljZVJlY29yZGluZyAmJiB0aGlzLmlzQ2xvc2VWb2ljZVJlY29yZGluZykgeyBcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZUZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZS1maWxlLWlucHV0JylcbiAgICAgICAgICAgICAgICBpbWFnZUZpbGVJbnB1dC5jbGljaygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTZW5kVGV4dEJ1dHRvbkNsaWNrID0gKCkgPT4geyBcbiAgICAgICAgY29uc3QgY2hhdGJveE1lc3NhZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0Ym94LW1lc3NhZ2UtaW5wdXQnKVxuICAgICAgICBjb25zdCBzZW5kVGV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kLXRleHQtYnV0dG9uJylcblxuICAgICAgICBzZW5kVGV4dEJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGNoYXRib3hNZXNzYWdlSW5wdXQuaW5uZXJUZXh0LnRyaW0oKSAgXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNFbXB0eU9yU3BhY2VzKG1lc3NhZ2UpKSB7IFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZFRleHRNZXNzYWdlKHRoaXMudXNlclRvQ2hhdElkLCBtZXNzYWdlKVxuICAgICAgICAgICAgfSAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTZW5kVm9pY2VCdXR0b25DbGljayA9ICgpID0+IHsgXG4gICAgICAgIGNvbnN0IHNlbmRWb2ljZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kLXZvaWNlLWJ1dHRvbicpXG4gICAgICAgIHNlbmRWb2ljZUJ1dHRvbi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyAgXG4gICAgICAgICAgICBpZih0aGlzLmF1ZGlvQmxvYiAhPSBudWxsICYmICF0aGlzLmlzVm9pY2VSZWNvcmRpbmcpIHsgIFxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZFZvaWNlTWVzc2FnZSh0aGlzLnVzZXJUb0NoYXRJZCwgdGhpcy5hdWRpb0Jsb2IpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRTZW5kSW1hZ2VCdXR0b25DbGljayA9ICgpID0+IHsgXG4gICAgICAgIGNvbnN0IGNoYXRib3hNZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdGJveC1tZXNzYWdlLWlucHV0JykgXG4gICAgICAgIGNvbnN0IGNoYXRib3hWb2ljZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXRib3gtdm9pY2UtaW5wdXQnKVxuICAgICAgICBjb25zdCBjaGF0Ym94SW1hZ2VJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0Ym94LWltYWdlLWlucHV0JylcbiAgICAgICAgY29uc3Qgc2VuZFRleHRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZC10ZXh0LWJ1dHRvbicpIFxuICAgICAgICBjb25zdCBzZW5kVm9pY2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZC12b2ljZS1idXR0b24nKSBcbiAgICAgICAgY29uc3Qgc2VuZEltYWdlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbmQtaW1hZ2UtYnV0dG9uJykgXG5cbiAgICAgICAgc2VuZEltYWdlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7ICBcbiAgICAgICAgICAgIGlmICghVXRpbHMuaXNUb3RhbEltYWdlc1RvU2VuZE5vdEV4Y2VlZGVkKHRoaXMudG9TZW5kSW1hZ2VzTWFwLnNpemUpKSB7IHJldHVybiB9XG4gICAgICAgICAgICBpZiAoIVV0aWxzLmlzSW1hZ2VGaWxlc2l6ZU5vdEV4Y2VlZGVkKEFycmF5LmZyb20odGhpcy50b1NlbmRJbWFnZXNNYXApKSkgeyByZXR1cm4gfVxuXG4gICAgICAgICAgICB0aGlzLnRvU2VuZEltYWdlc01hcC5mb3JFYWNoKGFzeW5jICh2YWx1ZSwga2V5KSA9PiB7IFxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSB2YWx1ZVsnZmlsZSddXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSB2YWx1ZVsnZmlsZSddLm5hbWVcbiAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IE1hdGguZmxvb3IodmFsdWVbJ3dpZHRoJ10gKiAuNzUpXG4gICAgICAgICAgICAgICAgY29uc3QgaGVpZ2h0ID0gTWF0aC5mbG9vcih2YWx1ZVsnaGVpZ2h0J10gKiAuNzUpXG4gICAgICAgICAgICAgICAgY29uc3QgbWltZVR5cGUgPSB2YWx1ZVsnZmlsZSddLnR5cGVcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBtaW1lVHlwZS5zcGxpdChcIi9cIilbMV0gXG4gICAgICAgICAgICAgICAgY29uc3Qgb3V0cHV0ID0gQ3J5cHRvSlMuTUQ1KFV0aWxzLmdlbmVyYXRlUmFuZG9tU3RyaW5nKDE2KSkudG9TdHJpbmcoKSArIFwiLlwiICsgZXh0ZW5zaW9uXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5zZW5kSW1hZ2VNZXNzYWdlKHRoaXMudXNlclRvQ2hhdElkLCBibG9iLCBpbnB1dCwgd2lkdGgsIGhlaWdodCwgbWltZVR5cGUsIGV4dGVuc2lvbiwgb3V0cHV0KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgVXRpbHMudW5IaWRlTWVkaWFHcm91cCgpXG4gICAgICAgICAgICB0aGlzLnRvU2VuZEltYWdlc01hcCA9IG5ldyBNYXAoKVxuICAgICAgICAgICAgY2hhdGJveEltYWdlSW5wdXQuaW5uZXJIVE1MID0gJydcblxuICAgICAgICAgICAgY2hhdGJveE1lc3NhZ2VJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgY2hhdGJveFZvaWNlSW5wdXQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIGNoYXRib3hJbWFnZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICBzZW5kVGV4dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgc2VuZFZvaWNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgICAgICBzZW5kSW1hZ2VCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFNlbmRNZXNzYWdlQ2hhdGJveElucHV0S2V5RG93biA9ICgpID0+IHsgXG4gICAgICAgIGNvbnN0IGNoYXRib3hNZXNzYWdlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdGJveC1tZXNzYWdlLWlucHV0JylcbiAgICAgICAgY2hhdGJveE1lc3NhZ2VJbnB1dC5vbmtleWRvd24gPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGUudGFyZ2V0LmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgIGlmIChVdGlscy5nZXRVc2VyQWdlbnRQbGF0Zm9ybVR5cGUoKSA9PSAnZGVza3RvcCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgIWUuc2hpZnRLZXkpIHsgIFxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0VtcHR5T3JTcGFjZXMobWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2VuZFRleHRNZXNzYWdlKHRoaXMudXNlclRvQ2hhdElkLCBtZXNzYWdlKVxuICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICBjaGF0Ym94U2Nyb2xsVG9Cb3R0b20gPSAoZm9yY2U9ZmFsc2UpID0+IHtcbiAgICAgICAgY29uc3QgY2hhdGJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGF0Ym94JylcbiAgICAgICAgZnVuY3Rpb24gaXNTY3JvbGxiYXJBdEJvdHRvbShlbGVtZW50KXtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldCA9IE1hdGguYWJzKGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQpICogLjQwICBcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFicyhlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gZWxlbWVudC5zY3JvbGxUb3ApIDw9IG9mZnNldFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcmNlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjaGF0Ym94LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gXCJzbW9vdGhcIlxuICAgICAgICAgICAgICAgIGNoYXRib3guc2Nyb2xsVG9wID0gY2hhdGJveC5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgIH0sIDUwMClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc1Njcm9sbGJhckF0Qm90dG9tKGNoYXRib3gpKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNoYXRib3guc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSBcInNtb290aFwiXG4gICAgICAgICAgICAgICAgICAgIGNoYXRib3guc2Nyb2xsVG9wID0gY2hhdGJveC5zY3JvbGxIZWlnaHRcbiAgICAgICAgICAgICAgICB9LCA1MDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0VtcHR5T3JTcGFjZXMgPSAoc3RyKSA9PiB7XG4gICAgICAgIHJldHVybiBzdHIgPT09IG51bGwgfHwgc3RyLm1hdGNoKC9eICokLykgIT09IG51bGxcbiAgICB9IFxuXG4gICAgc2xlZXAgPSAobXMpID0+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG4gIFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgXG4gICAgfVxuXG4gICAgc2hvd1Bhc3N3b3JkID0gKGUpID0+IHsgIFxuICAgICAgICBjb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5wYXJhbXMuaW5wdXRQYXNzd29yZElkKVxuICAgICAgICBjb25zdCBleWVTdmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnBhcmFtcy5leWVTdmcpXG4gICAgICAgIGNvbnN0IGV5ZVN2Z0RlZmF1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnBhcmFtcy5leWVTdmdEZWZhdWx0KVxuICAgICAgICBpZiAoZS5wYXJhbXMuaXNTaG93KSB7XG4gICAgICAgICAgICBleWVTdmcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgICAgICAgICAgZXllU3ZnRGVmYXVsdC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICBpbnB1dFBhc3N3b3JkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBleWVTdmcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICAgICAgICAgICAgZXllU3ZnRGVmYXVsdC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICBpbnB1dFBhc3N3b3JkLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJwYXNzd29yZFwiKVxuICAgICAgICB9XG4gICAgfSAgXG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcbiBcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCA9ICgpID0+IHtcblxuICAgIH1cblxuICAgIHNob3dQYXNzd29yZCA9IChlKSA9PiB7ICBcbiAgICAgICAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUucGFyYW1zLmlucHV0UGFzc3dvcmRJZClcbiAgICAgICAgY29uc3QgZXllU3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5wYXJhbXMuZXllU3ZnKVxuICAgICAgICBjb25zdCBleWVTdmdEZWZhdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZS5wYXJhbXMuZXllU3ZnRGVmYXVsdClcbiAgICAgICAgaWYgKGUucGFyYW1zLmlzU2hvdykge1xuICAgICAgICAgICAgZXllU3ZnLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICAgICAgICAgIGV5ZVN2Z0RlZmF1bHQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICAgICAgICAgICAgaW5wdXRQYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXllU3ZnLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgICAgIGV5ZVN2Z0RlZmF1bHQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgICAgICAgICAgaW5wdXRQYXNzd29yZC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicGFzc3dvcmRcIilcbiAgICAgICAgfVxuICAgIH0gIFxufVxuIiwiaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0Bob3R3aXJlZC9zdGltdWx1cyc7XG4gXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbnRyb2xsZXIge1xuICAgIGNvbm5lY3QgPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICBzaG93UGFzc3dvcmQgPSAoZSkgPT4geyAgXG4gICAgICAgIGNvbnN0IGlucHV0UGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlLnBhcmFtcy5pbnB1dFBhc3N3b3JkSWQpXG4gICAgICAgIGNvbnN0IGV5ZVN2ZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUucGFyYW1zLmV5ZVN2ZylcbiAgICAgICAgY29uc3QgZXllU3ZnRGVmYXVsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGUucGFyYW1zLmV5ZVN2Z0RlZmF1bHQpXG4gICAgICAgIGlmIChlLnBhcmFtcy5pc1Nob3cpIHtcbiAgICAgICAgICAgIGV5ZVN2Zy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICBleWVTdmdEZWZhdWx0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIilcbiAgICAgICAgICAgIGlucHV0UGFzc3dvcmQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV5ZVN2Zy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpXG4gICAgICAgICAgICBleWVTdmdEZWZhdWx0LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIilcbiAgICAgICAgICAgIGlucHV0UGFzc3dvcmQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInBhc3N3b3JkXCIpXG4gICAgICAgIH1cbiAgICB9ICBcbn1cbiIsImltcG9ydCAnLi9ib290c3RyYXAuanMnO1xuLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBUaGlzIGZpbGUgd2lsbCBiZSBpbmNsdWRlZCBvbnRvIHRoZSBwYWdlIHZpYSB0aGUgaW1wb3J0bWFwKCkgVHdpZyBmdW5jdGlvbixcbiAqIHdoaWNoIHNob3VsZCBhbHJlYWR5IGJlIGluIHlvdXIgYmFzZS5odG1sLnR3aWcuXG4gKi9cbmltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5pbXBvcnQgJ2Zsb3diaXRlJ1xuIiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSdcblxuY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLihqfHQpc3g/JC9cbikpOyBcbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgQm93c2VyIGZyb20gJ2Jvd3Nlcic7XG5pbXBvcnQgQ3J5cHRvSlMgZnJvbSAnY3J5cHRvLWpzJztcbmltcG9ydCBXYXZlU3VyZmVyIGZyb20gJ3dhdmVzdXJmZXIuanMnXG5pbXBvcnQgeyBEcm9wZG93biB9IGZyb20gJ2Zsb3diaXRlJztcblxuY2xhc3MgTWVzc2FnZVR5cGUge1xuICAgIHN0YXRpYyBURVhUID0gMFxuICAgIHN0YXRpYyBJTUFHRSA9IDFcbiAgICBzdGF0aWMgR0lGID0gMlxuICAgIHN0YXRpYyBBVURJTyA9IDNcbiAgICBcbiAgICBzdGF0aWMgZ2V0IFRFWFQoKSB7IHJldHVybiBURVhUIH1cbiAgICBzdGF0aWMgZ2V0IElNQUdFKCkgeyByZXR1cm4gSU1BR0UgfVxuICAgIHN0YXRpYyBnZXQgR0lGKCkgeyByZXR1cm4gR0lGIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcbiAgICBzdGF0aWMgZW5jcnlwdE1lc3NhZ2UgPSBhc3luYyAocHVibGljS2V5LCBtZXNzYWdlLCBjaHVua1NpemU9MTkwKSA9PiB7XG4gICAgICAgIGNvbnN0IGltcG9ydGVkUHVibGljS2V5ID0gYXdhaXQgd2luZG93LmNyeXB0by5zdWJ0bGUuaW1wb3J0S2V5KFxuICAgICAgICAgICAgXCJzcGtpXCIsXG4gICAgICAgICAgICBwdWJsaWNLZXksXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJSU0EtT0FFUFwiLFxuICAgICAgICAgICAgICAgIGhhc2g6IFwiU0hBLTI1NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgW1wiZW5jcnlwdFwiXVxuICAgICAgICApO1xuICAgIFxuICAgICAgICBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG4gICAgICAgIGNvbnN0IGVuY29kZWRNZXNzYWdlID0gZW5jb2Rlci5lbmNvZGUobWVzc2FnZSk7XG4gICAgIFxuICAgICAgICBjb25zdCBjaHVua3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbmNvZGVkTWVzc2FnZS5sZW5ndGg7IGkgKz0gY2h1bmtTaXplKSB7XG4gICAgICAgICAgICBjaHVua3MucHVzaChlbmNvZGVkTWVzc2FnZS5zbGljZShpLCBpICsgY2h1bmtTaXplKSk7XG4gICAgICAgIH1cbiAgICAgXG4gICAgICAgIGNvbnN0IGVuY3J5cHRlZENodW5rcyA9IGF3YWl0IFByb21pc2UuYWxsKGNodW5rcy5tYXAoY2h1bmsgPT5cbiAgICAgICAgICAgIHdpbmRvdy5jcnlwdG8uc3VidGxlLmVuY3J5cHQoXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlJTQS1PQUVQXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGltcG9ydGVkUHVibGljS2V5LFxuICAgICAgICAgICAgICAgIGNodW5rXG4gICAgICAgICAgICApXG4gICAgICAgICkpO1xuICAgICBcbiAgICAgICAgY29uc3QgdG90YWxMZW5ndGggPSBlbmNyeXB0ZWRDaHVua3MucmVkdWNlKChhY2MsIGNodW5rKSA9PiBhY2MgKyBjaHVuay5ieXRlTGVuZ3RoLCAwKTtcbiAgICAgICAgY29uc3QgY29uY2F0ZW5hdGVkRW5jcnlwdGVkTWVzc2FnZSA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcblxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgZW5jcnlwdGVkQ2h1bmtzLmZvckVhY2goY2h1bmsgPT4ge1xuICAgICAgICAgICAgY29uY2F0ZW5hdGVkRW5jcnlwdGVkTWVzc2FnZS5zZXQobmV3IFVpbnQ4QXJyYXkoY2h1bmspLCBvZmZzZXQpO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IGNodW5rLmJ5dGVMZW5ndGg7XG4gICAgICAgIH0pO1xuICAgICBcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXlCdWZmZXJUb0Jhc2U2NChjb25jYXRlbmF0ZWRFbmNyeXB0ZWRNZXNzYWdlLmJ1ZmZlcik7IFxuICAgIH1cblxuICAgIHN0YXRpYyBkZWNyeXB0TWVzc2FnZSA9IGFzeW5jIChwcml2YXRlS2V5LCBiYXNlNjRNZXNzYWdlLCBjaHVua1NpemU9MjU2KSA9PiB7ICBcbiAgICAgICAgY29uc3QgZW5jcnlwdGVkTWVzc2FnZSA9IHRoaXMuYmFzZTY0VG9BcnJheUJ1ZmZlcihiYXNlNjRNZXNzYWdlKTtcblxuICAgICAgICBjb25zdCBpbXBvcnRlZFByaXZhdGVLZXkgPSBhd2FpdCB3aW5kb3cuY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoXG4gICAgICAgICAgICBcInBrY3M4XCIsXG4gICAgICAgICAgICBwcml2YXRlS2V5LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiUlNBLU9BRVBcIixcbiAgICAgICAgICAgICAgICBoYXNoOiBcIlNIQS0yNTZcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIFtcImRlY3J5cHRcIl1cbiAgICAgICAgKTtcbiBcbiAgICAgICAgY29uc3QgZW5jcnlwdGVkQ2h1bmtzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jcnlwdGVkTWVzc2FnZS5ieXRlTGVuZ3RoOyBpICs9IGNodW5rU2l6ZSkge1xuICAgICAgICAgICAgZW5jcnlwdGVkQ2h1bmtzLnB1c2goZW5jcnlwdGVkTWVzc2FnZS5zbGljZShpLCBpICsgY2h1bmtTaXplKSk7XG4gICAgICAgIH1cbiBcbiAgICAgICAgY29uc3QgZGVjcnlwdGVkQ2h1bmtzID0gYXdhaXQgUHJvbWlzZS5hbGwoZW5jcnlwdGVkQ2h1bmtzLm1hcChjaHVuayA9PlxuICAgICAgICAgICAgd2luZG93LmNyeXB0by5zdWJ0bGUuZGVjcnlwdChcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUlNBLU9BRVBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW1wb3J0ZWRQcml2YXRlS2V5LFxuICAgICAgICAgICAgICAgIGNodW5rXG4gICAgICAgICAgICApXG4gICAgICAgICkpO1xuIFxuICAgICAgICBjb25zdCB0b3RhbExlbmd0aCA9IGRlY3J5cHRlZENodW5rcy5yZWR1Y2UoKGFjYywgY2h1bmspID0+IGFjYyArIGNodW5rLmJ5dGVMZW5ndGgsIDApO1xuICAgICAgICBjb25zdCBjb25jYXRlbmF0ZWREZWNyeXB0ZWRNZXNzYWdlID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xuXG4gICAgICAgIGxldCBvZmZzZXQgPSAwO1xuICAgICAgICBkZWNyeXB0ZWRDaHVua3MuZm9yRWFjaChjaHVuayA9PiB7XG4gICAgICAgICAgICBjb25jYXRlbmF0ZWREZWNyeXB0ZWRNZXNzYWdlLnNldChuZXcgVWludDhBcnJheShjaHVuayksIG9mZnNldCk7XG4gICAgICAgICAgICBvZmZzZXQgKz0gY2h1bmsuYnl0ZUxlbmd0aDtcbiAgICAgICAgfSk7XG4gXG4gICAgICAgIGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKTtcbiAgICAgICAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKGNvbmNhdGVuYXRlZERlY3J5cHRlZE1lc3NhZ2UpOyBcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVFbmNyeXB0aW9uS2V5UGFpciA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5UGFpciA9IGF3YWl0IHdpbmRvdy5jcnlwdG8uc3VidGxlLmdlbmVyYXRlS2V5KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiUlNBLU9BRVBcIixcbiAgICAgICAgICAgICAgICBtb2R1bHVzTGVuZ3RoOiAyMDQ4LFxuICAgICAgICAgICAgICAgIHB1YmxpY0V4cG9uZW50OiBuZXcgVWludDhBcnJheShbMSwgMCwgMV0pLFxuICAgICAgICAgICAgICAgIGhhc2g6IFwiU0hBLTI1NlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBbXCJlbmNyeXB0XCIsIFwiZGVjcnlwdFwiXVxuICAgICAgICApO1xuICAgICBcbiAgICAgICAgY29uc3QgcHVibGljS2V5ID0gYXdhaXQgd2luZG93LmNyeXB0by5zdWJ0bGUuZXhwb3J0S2V5KFwic3BraVwiLCBrZXlQYWlyLnB1YmxpY0tleSk7XG4gICAgICAgIGNvbnN0IHByaXZhdGVLZXkgPSBhd2FpdCB3aW5kb3cuY3J5cHRvLnN1YnRsZS5leHBvcnRLZXkoXCJwa2NzOFwiLCBrZXlQYWlyLnByaXZhdGVLZXkpO1xuICAgIFxuICAgICAgICByZXR1cm4geyBwdWJsaWNLZXksIHByaXZhdGVLZXkgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2VuZXJhdGVSYW5kb21TdHJpbmcgPSAobGVuZ3RoKSA9PiB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHN0YXRpYyBhcnJheUJ1ZmZlclRvQmFzZTY0ID0gKGJ1ZmZlcikgPT4ge1xuICAgICAgICBjb25zdCB1aW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgbGV0IGJpbmFyeSA9ICcnO1xuICAgICAgICBjb25zdCBsZW4gPSB1aW50OEFycmF5LmJ5dGVMZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGJpbmFyeSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHVpbnQ4QXJyYXlbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJ0b2EoYmluYXJ5KTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGJhc2U2NFRvQXJyYXlCdWZmZXIgPSAoYmFzZTY0KSA9PiB7XG4gICAgICAgIGNvbnN0IGJpbmFyeVN0cmluZyA9IHdpbmRvdy5hdG9iKGJhc2U2NCk7XG4gICAgICAgIGNvbnN0IGxlbiA9IGJpbmFyeVN0cmluZy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYnl0ZXMuYnVmZmVyO1xuICAgIH0gIFxuXG4gICAgc3RhdGljIGZvcm1hdFRpbWVzdGFtcEludG9EYXlzT2ZXZWVrID0gKHRpbWVzdGFtcCkgPT4ge1xuICAgICAgICBjb25zdCBkYXlzT2ZXZWVrID0gW1wiU3VuZGF5XCIsIFwiTW9uZGF5XCIsIFwiVHVlc2RheVwiLCBcIldlZG5lc2RheVwiLCBcIlRodXJzZGF5XCIsIFwiRnJpZGF5XCIsIFwiU2F0dXJkYXlcIl1cbiAgICBcbiAgICAgICAgLy8gQ29udmVydCBlcG9jaCB0byBtaWxsaXNlY29uZHMgYW5kIGNyZWF0ZSBhIERhdGUgb2JqZWN0XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShwYXJzZUludCh0aW1lc3RhbXApKVxuICAgICAgICBcbiAgICAgICAgLy8gR2V0IHRvZGF5J3MgZGF0ZVxuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcbiAgICAgICAgXG4gICAgICAgIC8vIFN0cmlwIHRpbWUgZnJvbSB0b2RheSdzIGRhdGUgYW5kIGp1c3Qga2VlcCB5ZWFyLCBtb250aCwgZGF5XG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZUb2RheSA9IG5ldyBEYXRlKHRvZGF5LmdldEZ1bGxZZWFyKCksIHRvZGF5LmdldE1vbnRoKCksIHRvZGF5LmdldERhdGUoKSkuZ2V0VGltZSgpXG4gICAgICAgIFxuICAgICAgICAvLyBTdHJpcCB0aW1lIGZyb20geWVzdGVyZGF5XG4gICAgICAgIGNvbnN0IHN0YXJ0T2ZZZXN0ZXJkYXkgPSBzdGFydE9mVG9kYXkgLSA4NjQwMDAwMCAvLyAyNCBob3VycyBlYXJsaWVyXG4gICAgICAgIFxuICAgICAgICAvLyBHZXQgZGF0ZSA3IGRheXMgYWdvIGF0IG1pZG5pZ2h0XG4gICAgICAgIGNvbnN0IG9uZVdlZWtBZ28gPSBzdGFydE9mVG9kYXkgLSAoNyAqIDg2NDAwMDAwKVxuICAgICAgICBcbiAgICAgICAgLy8gU3RyaXAgdGltZSBmcm9tIHRoZSB0aW1lc3RhbXAgZGF0ZVxuICAgICAgICBjb25zdCBkYXRlV2l0aG91dFRpbWUgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpLmdldFRpbWUoKVxuICAgICAgICBcbiAgICAgICAgLy8gSWYgdGhlIHRpbWVzdGFtcCBpcyB3aXRoaW4gdG9kYXkncyByYW5nZVxuICAgICAgICBpZiAoZGF0ZVdpdGhvdXRUaW1lID49IHN0YXJ0T2ZUb2RheSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiVG9kYXlcIlxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIElmIHRoZSB0aW1lc3RhbXAgaXMgd2l0aGluIHllc3RlcmRheSdzIHJhbmdlXG4gICAgICAgIGlmIChkYXRlV2l0aG91dFRpbWUgPj0gc3RhcnRPZlllc3RlcmRheSAmJiBkYXRlV2l0aG91dFRpbWUgPCBzdGFydE9mVG9kYXkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlllc3RlcmRheVwiXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gSWYgdGhlIHRpbWVzdGFtcCBpcyB3aXRoaW4gdGhlIGxhc3QgNyBkYXlzXG4gICAgICAgIGlmIChkYXRlV2l0aG91dFRpbWUgPj0gb25lV2Vla0FnbyAmJiBkYXRlV2l0aG91dFRpbWUgPCBzdGFydE9mWWVzdGVyZGF5KSB7XG4gICAgICAgICAgICByZXR1cm4gZGF5c09mV2Vla1tkYXRlLmdldERheSgpXVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIElmIHRoZSB0aW1lc3RhbXAgaXMgb2xkZXIgdGhhbiBhIHdlZWssIHJldHVybiB0aGUgb3JpZ2luYWwgdGltZXN0YW1wXG4gICAgICAgIHJldHVybiB0aW1lc3RhbXBcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVPcmRlclVzZXJzTGlzdElmTmV3TWVzc2FnZUlzQmVpbmdTZW50T3JSZWNlaXZlZCA9IChpZCkgPT4geyBcbiAgICAgICAgY29uc3QgdXNlcnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJzLWxpc3QnKVxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHVzZXIke2lkfWApXG4gICAgICAgIHVzZXJzTGlzdC5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgICAgICB1c2Vyc0xpc3QucHJlcGVuZChlbGVtZW50KVxuICAgIH1cblxuICAgIHN0YXRpYyBpc1RpbWVzdGFtcElzR3JlYXRlclRoYW5ObWludXRlcyA9ICh0aW1lc3RhbXAsIE4pID0+IHtcbiAgICAgICAgY29uc3QgdCA9IHBhcnNlSW50KHRpbWVzdGFtcClcbiAgICAgICAgY29uc3QgbWlsbGlzZWNvbmRzID0gTiAqIDYwICogMTAwMFxuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KClcblxuICAgICAgICByZXR1cm4gdCA+PSAoY3VycmVudFRpbWUgLSBtaWxsaXNlY29uZHMpXG4gICAgfVxuXG4gICAgc3RhdGljIHNhdmVDYXJldFBvc2l0aW9uID0gKGRpdikgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpXG4gICAgICAgIGxldCByYW5nZSA9IHNlbGVjdGlvbi5nZXRSYW5nZUF0KDApXG4gICAgICAgIGxldCBwcmVDYXJldFJhbmdlID0gcmFuZ2UuY2xvbmVSYW5nZSgpXG4gICAgICAgIHByZUNhcmV0UmFuZ2Uuc2VsZWN0Tm9kZUNvbnRlbnRzKGRpdilcbiAgICAgICAgcHJlQ2FyZXRSYW5nZS5zZXRFbmQocmFuZ2UuZW5kQ29udGFpbmVyLCByYW5nZS5lbmRPZmZzZXQpXG5cbiAgICAgICAgcmV0dXJuIHByZUNhcmV0UmFuZ2UudG9TdHJpbmcoKS5sZW5ndGggLy8gUmV0dXJuIGNhcmV0J3Mgb2Zmc2V0IHdpdGhpbiB0aGUgZGl2XG4gICAgfVxuICAgIFxuICAgIHN0YXRpYyByZXN0b3JlQ2FyZXRQb3NpdGlvbiA9IChkaXYsIG9mZnNldCkgPT4ge1xuICAgICAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpXG4gICAgICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKClcbiAgICAgICAgbGV0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoZGl2LCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwgbnVsbCwgZmFsc2UpXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IHdhbGtlci5uZXh0Tm9kZSgpXG4gICAgICAgIGxldCBjdXJyZW50T2Zmc2V0ID0gMFxuICAgIFxuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUpIHtcbiAgICAgICAgICAgIGxldCBub2RlTGVuZ3RoID0gY3VycmVudE5vZGUubGVuZ3RoXG4gICAgICAgICAgICBpZiAoY3VycmVudE9mZnNldCArIG5vZGVMZW5ndGggPj0gb2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZm91bmQgdGhlIG5vZGUgd2hlcmUgY2FyZXQgc2hvdWxkIGJlIHJlc3RvcmVkXG4gICAgICAgICAgICAgICAgcmFuZ2Uuc2V0U3RhcnQoY3VycmVudE5vZGUsIG9mZnNldCAtIGN1cnJlbnRPZmZzZXQpXG4gICAgICAgICAgICAgICAgcmFuZ2Uuc2V0RW5kKGN1cnJlbnROb2RlLCBvZmZzZXQgLSBjdXJyZW50T2Zmc2V0KVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50T2Zmc2V0ICs9IG5vZGVMZW5ndGhcbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gd2Fsa2VyLm5leHROb2RlKClcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKClcbiAgICAgICAgc2VsZWN0aW9uLmFkZFJhbmdlKHJhbmdlKVxuICAgIH1cblxuICAgIHN0YXRpYyBnZXRVc2VyQWdlbnRQbGF0Zm9ybVR5cGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJyb3dzZXIgPSBCb3dzZXIuZ2V0UGFyc2VyKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTsgXG4gICAgICAgIHJldHVybiBicm93c2VyLnBhcnNlZFJlc3VsdC5wbGF0Zm9ybS50eXBlICBcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZU1lZGlhR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lZGlhLWdyb3VwJylcbiAgICAgICAgaWYgKHRoaXMuZ2V0VXNlckFnZW50UGxhdGZvcm1UeXBlKCkgPT0gJ21vYmlsZScpIHtcbiAgICAgICAgICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHVuSGlkZU1lZGlhR3JvdXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lZGlhLWdyb3VwJylcbiAgICAgICAgZ3JvdXAuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykgXG4gICAgfVxuXG4gICAgc3RhdGljIHNvcnRVc2Vyc0xpc3RCYXNlT25MYXN0TWVzc2FnZVRpbWVzdGFtcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdXNlcnNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJzLWxpc3QnKVxuICAgICAgICBjb25zdCB1c2Vyc0VsZW1lbnRzID0gQXJyYXkuZnJvbSh1c2Vyc0xpc3QuY2hpbGRyZW4pICBcbiAgICAgICAgdXNlcnNFbGVtZW50cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXBBID0gcGFyc2VJbnQoYS5xdWVyeVNlbGVjdG9yKCcubGFzdC1tZXNzYWdlJykuZ2V0QXR0cmlidXRlKCd0aW1lc3RhbXAnKSlcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcEIgPSBwYXJzZUludChiLnF1ZXJ5U2VsZWN0b3IoJy5sYXN0LW1lc3NhZ2UnKS5nZXRBdHRyaWJ1dGUoJ3RpbWVzdGFtcCcpKSBcbiAgICAgICAgICAgIHJldHVybiB0aW1lc3RhbXBCIC0gdGltZXN0YW1wQVxuICAgICAgICB9KS5mb3JFYWNoKChlbGVtZW50KSA9PiB7IFxuICAgICAgICAgICAgdXNlcnNMaXN0LnJlbW92ZUNoaWxkKGVsZW1lbnQpXG4gICAgICAgICAgICB1c2Vyc0xpc3QuYXBwZW5kQ2hpbGQoZWxlbWVudClcbiAgICAgICAgfSkgXG4gICAgfSBcblxuICAgIHN0YXRpYyBpc1RvdGFsSW1hZ2VzVG9TZW5kTm90RXhjZWVkZWQgPSAodG90YWxGaWxlcykgPT4ge1xuICAgICAgICBjb25zdCBNQVhfSU1BR0VTX1VQTE9BRCA9IDVcblxuICAgICAgICBpZiAodG90YWxGaWxlcyA+IE1BWF9JTUFHRVNfVVBMT0FEKSB7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9ICdNYXhpbXVtIGZpbGVzIHRvIHVwbG9hZCBleGNlZWRlZCdcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBgWW91IGNhbiB1cGxvYWQgYSBtYXhpbXVtIG9mICR7TUFYX0lNQUdFU19VUExPQUR9IGZpbGVzLCBidXQgeW91IGhhdmUgYXR0ZW1wdGVkIHRvIHVwbG9hZCAke3RvdGFsRmlsZXN9IGZpbGVzLmBcbiAgICAgICAgICAgIFV0aWxzLnNob3dBbGVydE1lc3NhZ2UodGl0bGUsIGNvbnRlbnQpIFxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgc3RhdGljIGlzSW1hZ2VGaWxlc2l6ZU5vdEV4Y2VlZGVkID0gKGltYWdlcykgPT4ge1xuICAgICAgICBmdW5jdGlvbiB0b09yZGluYWwobnVtKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG51bSAhPT0gJ251bWJlcicgfHwgIU51bWJlci5pc0ludGVnZXIobnVtKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW5wdXQgbXVzdCBiZSBhbiBpbnRlZ2VyLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBzdWZmaXhlcyA9IFtcInRoXCIsIFwic3RcIiwgXCJuZFwiLCBcInJkXCJdO1xuICAgICAgICAgICAgY29uc3QgdiA9IG51bSAlIDEwMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIG51bSArIChzdWZmaXhlc1sodiAtIDIwKSAlIDEwXSB8fCBzdWZmaXhlc1t2XSB8fCBzdWZmaXhlc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBNQVhfU0laRV9JTl9CWVRFUyA9IDEwICogMTAyNCAqIDEwMjQ7IC8vIDEwTUJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGltYWdlc1tpXVxuICAgICAgICAgICAgY29uc3QgZmlsZXNpemUgPSB2YWx1ZVsnZmlsZSddLnNpemVcbiAgICAgICAgICAgIGlmIChmaWxlc2l6ZSA+IE1BWF9TSVpFX0lOX0JZVEVTKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGUgPSAnTWF4aW11bSB1cGxvYWQgZmlsZXNpemUgZXhjZWVkZWQnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBgVGhlICR7dG9PcmRpbmFsKGkgKyAxKX0gaW1hZ2Ugc2l6ZSAoJHtNYXRoLnJvdW5kKGZpbGVzaXplIC8gMTA0ODU3Nil9IE1CKSBleGNlZWRzIHRoZSBtYXhpbXVtIGFsbG93ZWQgZmlsZXNpemUgb2YgMTAgTUIuYDtcbiAgICAgICAgICAgICAgICBVdGlscy5zaG93QWxlcnRNZXNzYWdlKHRpdGxlLCBjb250ZW50KSBcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dBbGVydE1lc3NhZ2UgPSAodGl0bGUsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgY29uc3QgYWxlcnRNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsZXJ0LW1lc3NhZ2UtY29udGFpbmVyJylcbiAgICAgICAgY29uc3QgYWxlcnRNZXNzYWdlVGl0bGUgPSBhbGVydE1lc3NhZ2VDb250YWluZXIucXVlcnlTZWxlY3RvcignI2FsZXJ0LW1lc3NhZ2UtdGl0bGUnKVxuICAgICAgICBjb25zdCBhbGVydE1lc3NhZ2VDb250ZW50ID0gYWxlcnRNZXNzYWdlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJyNhbGVydC1tZXNzYWdlLWNvbnRlbnQnKVxuXG4gICAgICAgIGFsZXJ0TWVzc2FnZVRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcbiAgICAgICAgYWxlcnRNZXNzYWdlQ29udGVudC50ZXh0Q29udGVudCA9IGNvbnRlbnRcblxuICAgICAgICBhbGVydE1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBhbGVydE1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgfSwgNTAwMClcbiAgICB9XG5cbiAgICBzdGF0aWMgcHJvZ3Jlc3NTdmdFbGVtZW50Q2FsbGJhY2sgPSAobWVzc2FnZVRlbXBFbGVtZW50LCBwZXJjZW50Q29tcGxldGVkKSA9PiB7IFxuICAgICAgICBjb25zdCBzdmdDaXJjbGVFbGVtZW50ID0gbWVzc2FnZVRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3ZnQ2lyY2xlXCIpICBcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NDaXJjbGVFbGVtZW50ID0gbWVzc2FnZVRlbXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZ3Jlc3NDaXJjbGVcIikgIFxuICAgICAgICBjb25zdCBpbWdDaGVjayA9IG1lc3NhZ2VUZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nLWNoZWNrJylcbiAgICAgICAgaW1nQ2hlY2suY2xhc3NMaXN0LmFkZCgnaGlkZGVuJykgIFxuXG4gICAgICAgIGlmIChwZXJjZW50Q29tcGxldGVkID09IDEwMCkge1xuICAgICAgICAgICAgc3ZnQ2lyY2xlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3ZnQ2lyY2xlRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgcHJvZ3Jlc3NDaXJjbGVFbGVtZW50LnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNob2Zmc2V0XCIsIGBjYWxjKDI1MS4ycHggLSAoMjUxLjJweCAqICR7cGVyY2VudENvbXBsZXRlZCAtIDF9IC8gMTAwKSlgKTtcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVPcmRlckxhc3RGb3VyQ2hhdGJveEVsZW1lbnRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGF0Ym94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXRib3gnKSBcbiAgICAgICAgY29uc3QgY2hhdGJveEFycmF5ID0gQXJyYXkuZnJvbShjaGF0Ym94LmNoaWxkcmVuKVxuICAgICAgICBjb25zdCBjaGF0Ym94RWxlbWVudHMgPSBjaGF0Ym94QXJyYXkuc2xpY2UoLTQpXG4gICAgICAgICAgICBcbiAgICAgICAgY2hhdGJveEVsZW1lbnRzLnNvcnQoKGEsIGIpID0+IHsgXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXBBID0gYS5nZXRBdHRyaWJ1dGUoJ3RpbWVzdGFtcCcpXG4gICAgICAgICAgICBjb25zdCB0aW1lc3RhbXBCID0gYi5nZXRBdHRyaWJ1dGUoJ3RpbWVzdGFtcCcpXG4gICAgICAgICAgICByZXR1cm4gdGltZXN0YW1wQSAtIHRpbWVzdGFtcEJcbiAgICAgICAgfSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY2hhdGJveC5yZW1vdmVDaGlsZChlbGVtZW50KVxuICAgICAgICAgICAgY2hhdGJveC5hcHBlbmRDaGlsZChlbGVtZW50KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRGb3J3YXJkVXNlclVpRGVmYXVsdHMgPSAodXNlcnNNYXApID0+IHtcbiAgICAgICAgdXNlcnNNYXAuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXNlcklkID0ga2V5XG4gICAgICAgICAgICBjb25zdCBmb3J3YXJkVXNlclN2Z1NlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9yd2FyZC11c2VyLXN2Zy1zZW50LSR7dXNlcklkfWApXG4gICAgICAgICAgICBjb25zdCBmb3J3YXJkVXNlclN2Z0RlZmF1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9yd2FyZC11c2VyLXN2Zy1kZWZhdWx0LSR7dXNlcklkfWApXG4gICAgICAgICAgICBjb25zdCBmb3J3YXJkVXNlclNwYW5UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGZvcndhcmQtdXNlci1zcGFuLXRleHQtJHt1c2VySWR9YClcbiAgICAgICAgICAgIGNvbnN0IGZvcndhZFVzZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZm9yd2FyZC11c2VyLWJ1dHRvbi0ke3VzZXJJZH1gKVxuXG4gICAgICAgICAgICBmb3J3YWRVc2VyQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVxuICAgICAgICAgICAgZm9yd2FkVXNlckJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiY3Vyc29yLW5vdC1hbGxvd2VkXCIpXG4gICAgICAgICAgICBmb3J3YXJkVXNlclN2Z1NlbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIGZvcndhcmRVc2VyU3ZnRGVmYXVsdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgZm9yd2FyZFVzZXJTcGFuVGV4dC50ZXh0Q29udGVudCA9ICdTZW5kJ1xuICAgICAgICB9KVxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgc2V0Q2hhdGJveE1lc3NhZ2VBdmF0YXJIaWRkZW4gPSAoKSA9PiB7XG4gICAgICAgIC8vIGlmIHRoZSB1c2VyIGhhcyBzdWNjZXNzaXZlIG1lc3NhZ2VzIHRoZW4gb25seSBzaG93IDEgYXZhdGFyXG4gICAgICAgIGNvbnN0IGNoYXRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdGJveCcpXG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShjaGF0Ym94LmNoaWxkcmVuKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IGVsZW1lbnRzW2ldXG4gICAgICAgICAgICBjb25zdCBuZXh0ID0gZWxlbWVudHNbaSArIDFdXG5cbiAgICAgICAgICAgIGNvbnN0IGF2YXRhcjEgPSBjdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdmF0YXInKVxuICAgICAgICAgICAgY29uc3QgYXZhdGFyMiA9IG5leHQucXVlcnlTZWxlY3RvcignLmF2YXRhcicpXG4gICAgICAgICAgICBpZiAoYXZhdGFyMSAhPSBudWxsICYmICBhdmF0YXIyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBhdmF0YXIxLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScpIFxuICAgICAgICAgICAgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRDaGF0Ym94TWVzc2FnZUJvcmRlckFuZE1hcmdpbiA9ICgpID0+IHtcbiAgICAgICAgLy8gaWYgdGhlIHVzZXIgaGFzIHN1Y2Nlc3NpdmUgbWVzc2FnZXMgdGhlbiB0aGUgbGFzdCBlbGVtZW50IGJvcmRlciBhbmQgbWFyZ2luIG11c3QgYmUgdXBkYXRlZFxuICAgICAgICBjb25zdCBjaGF0Ym94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXRib3gnKVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oY2hhdGJveC5jaGlsZHJlbilcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBlbGVtZW50c1tpXVxuICAgICAgICAgICAgY29uc3QgbmV4dCA9IGVsZW1lbnRzW2kgKyAxXVxuXG4gICAgICAgICAgICBjb25zdCBhdmF0YXIxID0gY3VycmVudC5xdWVyeVNlbGVjdG9yKCcuYXZhdGFyJylcbiAgICAgICAgICAgIGNvbnN0IGF2YXRhcjIgPSBuZXh0LnF1ZXJ5U2VsZWN0b3IoJy5hdmF0YXInKVxuICAgICAgICAgICAgaWYgKGF2YXRhcjEgIT0gbnVsbCAmJiBhdmF0YXIyICE9IG51bGwpIHsgXG4gICAgICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdtYi01JylcbiAgICAgICAgICAgICAgICBjdXJyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGF0LW1lc3NhZ2UtY29udGFpbmVyJykuY2xhc3NMaXN0LnJlbW92ZSgncm91bmRlZC1ibC1ub25lJylcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSBlbGVtZW50cy5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZCgnbWItNScpIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGF2YXRhcjEgPT0gbnVsbCAmJiBhdmF0YXIyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0cnkgeyBcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdtYi01JylcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudC5xdWVyeVNlbGVjdG9yKCcuY2hhdC1tZXNzYWdlLWNvbnRhaW5lcicpLmNsYXNzTGlzdC5yZW1vdmUoJ3JvdW5kZWQtYnItbm9uZScpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPSBlbGVtZW50cy5sZW5ndGggLSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5hZGQoJ21iLTUnKSBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkgeyB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gZWxlbWVudHMubGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5hZGQoJ21iLTUnKSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICB9IFxuICAgIH0gXG4gICAgXG4gICAgc3RhdGljIHNldENoYXRib3hEaXZpZGVyVGltZXN0YW1wID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjaGF0Ym94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoYXRib3gnKVxuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oY2hhdGJveC5jaGlsZHJlbilcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHsgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJyB9ICBcbiAgICAgICBcbiAgICAgICAgY29uc3QgZGl2aWRlckVsZW1lbnRzID0gY2hhdGJveC5xdWVyeVNlbGVjdG9yQWxsKCcuZGl2aWRlci10aW1lc3RhbXAnKVxuICAgICAgICBkaXZpZGVyRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY2hhdGJveC5yZW1vdmVDaGlsZChlbGVtZW50KSBcbiAgICAgICAgfSlcblxuICAgICAgICBsZXQgcHJldkRhdGUgPSBudWxsXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXVxuICAgICAgICAgICAgY29uc3QgdGltZXN0YW1wID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpbWVzdGFtcCcpXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHRpbWVzdGFtcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZShwYXJzZUludCh0aW1lc3RhbXApKVxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMb2NhbGVEYXRlU3RyaW5nID0gY3VycmVudERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIG9wdGlvbnMpICBcblxuICAgICAgICAgICAgICAgIGlmIChwcmV2RGF0ZSAhPSBjdXJyZW50TG9jYWxlRGF0ZVN0cmluZykgeyBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpdmlkZXJUaW1lc3RhbXBFbGVtZW50ID0gbnVsbCBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZXN0YW1wID0gVXRpbHMuZm9ybWF0VGltZXN0YW1wSW50b0RheXNPZldlZWsodGltZXN0YW1wKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0dGVkVGltZXN0YW1wID09IHRpbWVzdGFtcCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdmlkZXJUaW1lc3RhbXBFbGVtZW50ID0gdGhpcy5jcmVhdGVEaXZpZGVyVGltZXN0YW1wRWxlbWVudChjdXJyZW50TG9jYWxlRGF0ZVN0cmluZylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZpZGVyVGltZXN0YW1wRWxlbWVudCA9IHRoaXMuY3JlYXRlRGl2aWRlclRpbWVzdGFtcEVsZW1lbnQoZm9ybWF0dGVkVGltZXN0YW1wKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNoYXRib3guaW5zZXJ0QmVmb3JlKGRpdmlkZXJUaW1lc3RhbXBFbGVtZW50LCBlbGVtZW50KVxuICAgICAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgICAgICBwcmV2RGF0ZSA9IGN1cnJlbnRMb2NhbGVEYXRlU3RyaW5nIFxuICAgICAgICAgICAgfSBcbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0Vmlld2VySnNJbWFnZUVsZW1lbnQgPSAobWVzc2FnZUVsZW1lbnQsIHZpZXdlcikgPT4ge1xuICAgICAgICBjb25zdCB2aWV3ZXJqc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlld2VyanMtaW1hZ2VzLWNvbnRhaW5lclwiKVxuICAgICAgICBjb25zdCBpbWFnZURpdiA9IG1lc3NhZ2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWFnZScpXG4gICAgICAgIGNvbnN0IHVybCA9IGltYWdlRGl2LmdldEF0dHJpYnV0ZSgndXJsJylcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaW1nLnNyYyA9IHVybFxuXG4gICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBsaS5hcHBlbmRDaGlsZChpbWcpXG5cbiAgICAgICAgdmlld2VyanNDb250YWluZXIuYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgIGNvbnN0IGluZGV4ID0gdmlld2VyanNDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggLSAxXG4gICAgICAgIHZpZXdlci51cGRhdGUoKVxuXG4gICAgICAgIGltYWdlRGl2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB2aWV3ZXIuc2hvdygpXG4gICAgICAgICAgICB2aWV3ZXIudmlldyhpbmRleCkgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0VXNlckxhc3RNZXNzYWdlQ29udGVudCA9IChpZCwgY29udGVudCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyTGFzdE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdXNlciR7aWR9LWxhc3QtbWVzc2FnZWApXG4gICAgICAgIHVzZXJMYXN0TWVzc2FnZS50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgICB9XG5cbiAgICBzdGF0aWMgc2V0VXNlckxhc3RNZXNzYWdlVGltZXN0YW1wID0gKGlkLCB0aW1lc3RhbXApID0+IHtcbiAgICAgICAgY29uc3QgdXNlckxhc3RNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHVzZXIke2lkfS1sYXN0LW1lc3NhZ2VgKVxuICAgICAgICB1c2VyTGFzdE1lc3NhZ2Uuc2V0QXR0cmlidXRlKCd0aW1lc3RhbXAnLCB0aW1lc3RhbXApIFxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRVc2VyTGFzdE1lc3NhZ2VUaW1lQWdvID0gKGlkLCB0aW1lc3RhbXAsIHRpbWVBZ28pID0+IHtcbiAgICAgICAgY29uc3QgdXNlckxhc3RNZXNzYWdlVGltZUFnbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB1c2VyJHtpZH0tdGltZS1hZ29gKSBcbiAgICAgICAgdXNlckxhc3RNZXNzYWdlVGltZUFnby50ZXh0Q29udGVudCA9IFwiwrdcIiArIHRpbWVBZ28uZm9ybWF0KHRpbWVzdGFtcCwgJ21pbmktbm93JylcbiAgICAgICAgaWYgKHRoaXMuaXNUaW1lc3RhbXBJc0dyZWF0ZXJUaGFuTm1pbnV0ZXModGltZXN0YW1wLCA2MCkpIHtcbiAgICAgICAgICAgIHZhciBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4geyBcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyTGFzdE1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdXNlciR7aWR9LWxhc3QtbWVzc2FnZWApXG4gICAgICAgICAgICAgICAgY29uc3QgcHJldlRpbWVzdGFtcCA9IHVzZXJMYXN0TWVzc2FnZS5nZXRBdHRyaWJ1dGUoJ3RpbWVzdGFtcCcpXG4gICAgICAgICAgICAgICAgaWYgKHByZXZUaW1lc3RhbXAgIT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJMYXN0TWVzc2FnZVRpbWVBZ28udGV4dENvbnRlbnQgPSBcIsK3XCIgKyB0aW1lQWdvLmZvcm1hdCh0aW1lc3RhbXAsICdtaW5pLW5vdycpXG4gICAgICAgICAgICAgICAgfVxuIFxuICAgICAgICAgICAgfSwgMzAgKiAxMDAwKVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIHN0YXRpYyBzZXRNZXNzYWdlVGV4dEVsZW1lbnRUaW1lQWdvID0gKGVsZW1lbnQsIHRpbWVzdGFtcCwgdGltZUFnbykgPT4ge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gdGltZUFnby5mb3JtYXQodGltZXN0YW1wLCAncm91bmQnKVxuICAgICAgICBpZiAodGhpcy5pc1RpbWVzdGFtcElzR3JlYXRlclRoYW5ObWludXRlcyh0aW1lc3RhbXAsIDYwKSkge1xuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB0aW1lQWdvLmZvcm1hdCh0aW1lc3RhbXAsICdyb3VuZCcpIFxuICAgICAgICAgICAgfSwgMzAgKiAxMDAwKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIHNldEludHJvZHVjdGlvbkVsZW1lbnQgPSAobmFtZSwgYXZhdGFyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYXRib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdGJveCcpIFxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgICAgIGNvbnN0IGZsZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBmbGV4Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSBsZWZ0LTAgcmlnaHQtMCB0b3AtMCBib3R0b20tMCdcblxuICAgICAgICBjb25zdCBwcm9maWxlSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9maWxlSW1hZ2UuY2xhc3NOYW1lID0gJ3ctMTYgaC0xNiByb3VuZGVkLWZ1bGwgYmctY29udGFpbiBiZy1jZW50ZXIgc2hhZG93IGJvcmRlciBib3JkZXItZ3JheS0yMDAgZGFyazpib3JkZXItZ3JheS03MDAgbWItMidcbiAgICAgICAgcHJvZmlsZUltYWdlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7YXZhdGFyfScpYFxuXG4gICAgICAgIGNvbnN0IG5hbWVQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgbmFtZVBhcmFncmFwaC5jbGFzc05hbWUgPSAnb3V0bGluZS1ub25lIHRleHQtc20gdGV4dC1ibGFjayBvcGFjaXR5LTgwIGRhcms6dGV4dC13aGl0ZSBkYXJrOm9wYWNpdHktOTAgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTQgdHJhY2tpbmctWy4wMXJlbV0gZGVmYXVsdC1vdXRsaW5lJ1xuICAgICAgICBuYW1lUGFyYWdyYXBoLnRhYkluZGV4ID0gMFxuICAgICAgICBuYW1lUGFyYWdyYXBoLnRleHRDb250ZW50ID0gbmFtZVxuXG4gICAgICAgIGNvbnN0IGVuY3J5cHRlZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGVuY3J5cHRlZENvbnRhaW5lci5jbGFzc05hbWUgPSAnYmctaW5kaWdvLTUwIGRhcms6YmctZ3JheS02MDAgcm91bmRlZCBwLTMgbXQtOCBteC01IHNtOm14LTAnXG5cbiAgICAgICAgY29uc3QgZmxleElubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZmxleElubmVyQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBnYXAtMSdcblxuICAgICAgICBjb25zdCBzdmdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKVxuICAgICAgICBzdmdJY29uLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgMjQgMjQnKVxuICAgICAgICBzdmdJY29uLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdjdXJyZW50Q29sb3InKVxuICAgICAgICBzdmdJY29uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgIHN2Z0ljb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ3ctNSBoLTYgZ3JvdXAtZm9jdXM6dGV4dC1pbmRpZ28tNDAwIGhvdmVyOnRleHQtaW5kaWdvLTQwMCBhY3RpdmU6dGV4dC1pbmRpZ28tNDAwIGFjdGl2ZTpzY2FsZS0xMTAgZGFyazp0ZXh0LWdyYXktNTAwIHRyYW5zaXRpb24gZWFzZS1vdXQgZHVyYXRpb24tMjAwIHRleHQtZ3JheS0zMDAnKVxuICAgICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJylcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2ZpbGwtcnVsZScsICdldmVub2RkJylcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTggMTBWN2E0IDQgMCAxIDEgOCAwdjNoMWEyIDIgMCAwIDEgMiAydjdhMiAyIDAgMCAxLTIgMkg3YTIgMiAwIDAgMS0yLTJ2LTdhMiAyIDAgMCAxIDItMmgxWm0yLTNhMiAyIDAgMSAxIDQgMHYzaC00VjdabTIgNmExIDEgMCAwIDEgMSAxdjNhMSAxIDAgMSAxLTIgMHYtM2ExIDEgMCAwIDEgMS0xWicpXG4gICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdjbGlwLXJ1bGUnLCAnZXZlbm9kZCcpXG4gICAgICAgIHN2Z0ljb24uYXBwZW5kQ2hpbGQocGF0aClcblxuICAgICAgICBjb25zdCBlbmNyeXB0ZWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgIGVuY3J5cHRlZFRleHQuY2xhc3NOYW1lID0gJ2ZsZXggYWxpZ24tbWlkZGxlIG91dGxpbmUtbm9uZSB0ZXh0LXhzIHRleHQtYmxhY2sgb3BhY2l0eS04MCBkYXJrOnRleHQtd2hpdGUgZGFyazpvcGFjaXR5LTkwIGZvbnQtYm9sZCBsZWFkaW5nLTQgdHJhY2tpbmctWy4wMXJlbV0gZGVmYXVsdC1vdXRsaW5lJ1xuICAgICAgICBlbmNyeXB0ZWRUZXh0LnRhYkluZGV4ID0gMFxuICAgICAgICBlbmNyeXB0ZWRUZXh0LnRleHRDb250ZW50ID0gJ0VuZC10by1lbmQgZW5jcnlwdGVkJ1xuXG4gICAgICAgIGZsZXhJbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmdJY29uKVxuICAgICAgICBmbGV4SW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZW5jcnlwdGVkVGV4dClcblxuICAgICAgICBjb25zdCBtZXNzYWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1lc3NhZ2VUZXh0LmNsYXNzTmFtZSA9ICd0ZXh0LWNlbnRlciBteC1hdXRvIG91dGxpbmUtbm9uZSB0ZXh0LXhzIHRleHQtYmxhY2sgb3BhY2l0eS04MCBkYXJrOnRleHQtd2hpdGUgZGFyazpvcGFjaXR5LTkwIGxlYWRpbmctNCB0cmFja2luZy1bLjAxcmVtXSBkZWZhdWx0LW91dGxpbmUnXG4gICAgICAgIG1lc3NhZ2VUZXh0LnRhYkluZGV4ID0gMFxuICAgICAgICBtZXNzYWdlVGV4dC5pbm5lckhUTUwgPSAnTWVzc2FnZXMgYW5kIGNhbGxzIGFyZSBzZWN1cmVkIHdpdGggZW5kLXRvLWVuZCBlbmNyeXB0aW9uLiA8c3BhbiBjbGFzcz1cInRleHQtYmx1ZS01MDBcIj5MZWFybiBtb3JlPC9zcGFuPidcblxuICAgICAgICBlbmNyeXB0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmxleElubmVyQ29udGFpbmVyKVxuICAgICAgICBlbmNyeXB0ZWRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVzc2FnZVRleHQpXG5cbiAgICAgICAgZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9maWxlSW1hZ2UpXG4gICAgICAgIGZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZVBhcmFncmFwaClcbiAgICAgICAgZmxleENvbnRhaW5lci5hcHBlbmRDaGlsZChlbmNyeXB0ZWRDb250YWluZXIpXG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZsZXhDb250YWluZXIpXG5cbiAgICAgICAgY2hhdGJveC5hcHBlbmRDaGlsZChjb250YWluZXIpIFxuICAgIH0gXG5cbiAgICBzdGF0aWMgY3JlYXRlRGl2aWRlclRpbWVzdGFtcEVsZW1lbnQgPSAoZGF0ZSkgPT4ge1xuICAgICAgICAvLyBDcmVhdGUgdGhlIG1haW4gY29udGFpbmVyIGRpdlxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2RpdmlkZXItdGltZXN0YW1wIHctZnVsbCBteS03IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyJ1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbGVmdCBib3JkZXIgZGl2XG4gICAgICAgIGNvbnN0IGxlZnRCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBsZWZ0Qm9yZGVyLmNsYXNzTmFtZSA9ICd3LWZ1bGwgaC0wIGJvcmRlci10IGJvcmRlci1kYXNoZWQgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpiZy1vcGFjaXR5LTAnXG5cbiAgICAgICAgLy8gQ3JlYXRlIHRoZSB0ZXh0IGVsZW1lbnRcbiAgICAgICAgY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgZGF0ZUVsZW1lbnQuY2xhc3NOYW1lID0gJ291dGxpbmUtbm9uZSB0ZXh0LXhzIGZvbnQtbGlnaHQgdGV4dC1ibGFjayBvcGFjaXR5LTgwIGRhcms6dGV4dC13aGl0ZSBkYXJrOm9wYWNpdHktOTAgbGVhZGluZy00IHRyYWNraW5nLVsuMDFyZW1dIG14LTIgd2hpdGVzcGFjZS1ub3dyYXAnXG4gICAgICAgIGRhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZGF0ZVxuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgcmlnaHQgYm9yZGVyIGRpdlxuICAgICAgICBjb25zdCByaWdodEJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHJpZ2h0Qm9yZGVyLmNsYXNzTmFtZSA9ICd3LWZ1bGwgaC0wIGJvcmRlci10IGJvcmRlci1kYXNoZWQgZGFyazpib3JkZXItZ3JheS02MDAgZGFyazpiZy1vcGFjaXR5LTAnXG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBlbGVtZW50cyB0byB0aGUgY29udGFpbmVyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsZWZ0Qm9yZGVyKVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUVsZW1lbnQpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEJvcmRlcilcblxuICAgICAgICAvLyBSZXR1cm4gdGhlIGNvbXBsZXRlIGNvbnRhaW5lclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVQcm9ncmVzc1N2Z0VsZW1ldCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgU1ZHX05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgU1ZHIGVsZW1lbnRcbiAgICAgICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OUywgXCJzdmdcIik7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwMCAxMDBcIilcbiAgICAgICAgLy8gZml4ZWQgdG9wLTAgcmlnaHQtMCBsZWZ0LTAgei01MCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcbiAgICAgICAgc3ZnLmNsYXNzTGlzdC5hZGQoXCJzdmdDaXJjbGVcIiwgXCJ3LTEyXCIsIFwiaC0xMlwiLCBcImhpZGRlblwiLCBcImFic29sdXRlXCIsIFwiaW5zZXQtMFwiLCBcImp1c3RpZnktY2VudGVyXCIsIFwic2VsZi1jZW50ZXJcIiwgXCJtLWF1dG9cIik7XG4gICAgICAgIFxuICAgICAgICAvLyBDcmVhdGUgdGhlIGJhY2tncm91bmQgY2lyY2xlXG4gICAgICAgIGNvbnN0IGJnQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFNWR19OUywgXCJjaXJjbGVcIik7XG4gICAgICAgIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFwiNTBcIik7XG4gICAgICAgIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsIFwiNTBcIik7XG4gICAgICAgIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgXCI0MFwiKTtcbiAgICAgICAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpO1xuICAgICAgICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCI1XCIpO1xuICAgICAgICBiZ0NpcmNsZS5jbGFzc0xpc3QuYWRkKFwidGV4dC1ncmF5LTIwMFwiLCBcInN0cm9rZS1jdXJyZW50XCIpO1xuICAgICAgICBcbiAgICAgICAgLy8gQ3JlYXRlIHRoZSBwcm9ncmVzcyBjaXJjbGVcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoU1ZHX05TLCBcImNpcmNsZVwiKTsgXG4gICAgICAgIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFwiNTBcIik7XG4gICAgICAgIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsIFwiNTBcIik7XG4gICAgICAgIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgXCI0MFwiKTtcbiAgICAgICAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInRyYW5zcGFyZW50XCIpO1xuICAgICAgICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCI1XCIpO1xuICAgICAgICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xuICAgICAgICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFwiMjUxLjJcIik7XG4gICAgICAgIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNob2Zmc2V0XCIsIGBjYWxjKDI1MS4ycHggLSAoMjUxLjJweCAqIDEpIC8gMTAwKWApO1xuICAgICAgICBwcm9ncmVzc0NpcmNsZS5jbGFzc0xpc3QuYWRkKFwicHJvZ3Jlc3NDaXJjbGVcIiwgXCJ0ZXh0LWluZGlnby01MDBcIiwgXCJwcm9ncmVzcy1yaW5nX19jaXJjbGVcIiwgXCJzdHJva2UtY3VycmVudFwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byB0aGUgU1ZHXG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChiZ0NpcmNsZSk7XG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChwcm9ncmVzc0NpcmNsZSk7XG5cbiAgICAgICAgcmV0dXJuIHN2Z1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVMb2FkZXJFbGVtZW50ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjb2xvclRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yLXRoZW1lJykgXG4gICAgICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgbG9hZGVyLmNsYXNzTmFtZSA9IGNvbG9yVGhlbWUgPT09IFwiZGFya1wiID8gXCJsb2FkZXItd2hpdGUgYWJzb2x1dGVcIiA6IFwibG9hZGVyLWJsYWNrIGFic29sdXRlXCIgXG4gICAgICAgIGxvYWRlci5zdHlsZS5sZWZ0ID0gXCJjYWxjKDUwJSAtIDI1cHgpXCJcbiAgICAgICAgbG9hZGVyLnN0eWxlLnRvcCA9IFwiNTAlXCJcblxuICAgICAgICByZXR1cm4gbG9hZGVyXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVZvaWNlTWVzc2FnZUVsZW1lbnQgPSAodXJsKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcmVjb3JkSW5wdXQuY2xhc3NMaXN0LmFkZChcImdyb3VwXCIsIFwidy1mdWxsXCIsIFwic2VsZi1jZW50ZXJcIiwgXCJyb3VuZGVkXCIsIFwidHJhbnNpdGlvblwiLCBcImR1cmF0aW9uLTUwMFwiLCBcImJnLWluZGlnby01MFwiLCBcImRhcms6YmctZ3JheS02MDBcIilcblxuICAgICAgICBjb25zdCBmbGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZmxleENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxleFwiLCBcInJlbGF0aXZlXCIsIFwiaXRlbXMtY2VudGVyXCIsIFwib3V0bGluZS1ub25lXCIsIFwiZ2FwLTJcIilcbiAgICAgICAgZmxleENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIjBcIilcbiAgICAgICAgZmxleENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiYXVkaW8gbWVzc2FnZVwiKVxuXG4gICAgICAgIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgc3RhcnRCdG4uY2xhc3NMaXN0LmFkZChcInB4LTIuNVwiLCBcInB5LTJcIiwgXCJmbGV4XCIsIFwianVzdGlmeS1jZW50ZXJcIiwgXCJpdGVtcy1jZW50ZXJcIiwgXCJyb3VuZGVkLVsuNzVyZW1dXCIsIFwib3V0bGluZS1ub25lXCIsIFwidHJhbnNpdGlvbi1hbGxcIiwgXCJkdXJhdGlvbi0yMDBcIiwgXCJiZy1pbmRpZ28tMzAwXCIsIFwiYWN0aXZlOmJnLWluZGlnby00MDBcIilcbiAgICAgICAgc3RhcnRCdG4uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgXCJQbGF5XCIpXG4gICAgICAgIHN0YXJ0QnRuLnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgXCJQbGF5XCIpXG4gICAgICAgIHN0YXJ0QnRuLnR5cGUgPSBcImJ1dHRvblwiXG5cbiAgICAgICAgY29uc3QgcGxheVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJylcbiAgICAgICAgcGxheVN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJylcbiAgICAgICAgcGxheVN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIHBsYXlTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpXG4gICAgICAgIHBsYXlTdmcuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMS41JylcbiAgICAgICAgcGxheVN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdjdXJyZW50Q29sb3InKVxuICAgICAgICBwbGF5U3ZnLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgIHBsYXlTdmcuY2xhc3NMaXN0LmFkZChcInctMy41XCIsIFwiaC0zLjVcIiwgXCJ0ZXh0LXdoaXRlXCIpXG4gICAgICAgIGNvbnN0IHBsYXlQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJylcbiAgICAgICAgcGxheVBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWNhcCcsICdyb3VuZCcpXG4gICAgICAgIHBsYXlQYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcbiAgICAgICAgcGxheVBhdGguc2V0QXR0cmlidXRlKCdkJywgJ001LjI1IDUuNjUzYzAtLjg1Ni45MTctMS4zOTggMS42NjctLjk4NmwxMS41NCA2LjM0OGExLjEyNSAxLjEyNSAwIDAxMCAxLjk3MWwtMTEuNTQgNi4zNDdhMS4xMjUgMS4xMjUgMCAwMS0xLjY2Ny0uOTg1VjUuNjUzeicpXG4gICAgICAgIHBsYXlTdmcuYXBwZW5kQ2hpbGQocGxheVBhdGgpXG5cbiAgICAgICAgY29uc3Qgc3RvcFN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJylcbiAgICAgICAgc3RvcFN2Zy5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJylcbiAgICAgICAgc3RvcFN2Zy5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgIHN0b3BTdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAyNCAyNCcpXG4gICAgICAgIHN0b3BTdmcuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMS41JylcbiAgICAgICAgc3RvcFN2Zy5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdjdXJyZW50Q29sb3InKVxuICAgICAgICBzdG9wU3ZnLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG4gICAgICAgIHN0b3BTdmcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiLCBcInctMy41XCIsIFwiaC0zLjVcIiwgXCJ0ZXh0LXdoaXRlXCIpXG4gICAgICAgIGNvbnN0IHN0b3BSZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdyZWN0JylcbiAgICAgICAgc3RvcFJlY3Quc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMicpXG4gICAgICAgIHN0b3BSZWN0LnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEyJylcbiAgICAgICAgc3RvcFJlY3Quc2V0QXR0cmlidXRlKCd4JywgJzYnKVxuICAgICAgICBzdG9wUmVjdC5zZXRBdHRyaWJ1dGUoJ3knLCAnNicpXG4gICAgICAgIHN0b3BSZWN0LnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgJ2N1cnJlbnRDb2xvcicpXG4gICAgICAgIHN0b3BSZWN0LnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVqb2luJywgJ3JvdW5kJylcbiAgICAgICAgc3RvcFJlY3Quc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMicpXG4gICAgICAgIHN0b3BSZWN0LnNldEF0dHJpYnV0ZSgncngnLCAnMScpXG4gICAgICAgIHN0b3BTdmcuYXBwZW5kQ2hpbGQoc3RvcFJlY3QpXG5cbiAgICAgICAgc3RhcnRCdG4uYXBwZW5kQ2hpbGQocGxheVN2ZylcbiAgICAgICAgc3RhcnRCdG4uYXBwZW5kQ2hpbGQoc3RvcFN2ZylcblxuICAgICAgICBjb25zdCB3YXZlZm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIFxuICAgICAgICB3YXZlZm9ybURpdi5jbGFzc0xpc3QuYWRkKFwidy0zNlwiKSBcbiAgICAgICAgY29uc3Qgd2F2ZXN1cmZlciA9IFdhdmVTdXJmZXIuY3JlYXRlKHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogd2F2ZWZvcm1EaXYsXG4gICAgICAgICAgICB3YXZlQ29sb3I6ICdyZ2IoMjAwLCAwLCAyMDApJywgXG4gICAgICAgICAgICBoaWRlU2Nyb2xsYmFyOiB0cnVlLCAgIFxuICAgICAgICAgICAgYXV0b0NlbnRlcjogdHJ1ZSxcbiAgICAgICAgICAgIGhlaWdodDogMzAsXG4gICAgICAgICAgICBiYXJIZWlnaHQ6IDI1LCBcbiAgICAgICAgICAgIGJhcldpZHRoOiAxLjUsXG4gICAgICAgICAgICBjdXJzb3JXaWR0aDogMCwgXG4gICAgICAgICAgICB1cmw6IHVybFxuICAgICAgICB9KSBcblxuICAgICAgICBjb25zdCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0aW1lci5jbGFzc0xpc3QuYWRkKFwib3V0bGluZS1ub25lXCIsIFwidGV4dC14c1wiLCBcImZvbnQtbGlnaHRcIiwgXCJsZWFkaW5nLTRcIiwgXCJ0cmFja2luZy1bLjAxcmVtXVwiLCBcInRleHQtYmxhY2tcIiwgXCJkYXJrOnRleHQtd2hpdGVcIiwgXCJvcGFjaXR5LTgwXCIsIFwiZGFyazpvcGFjaXR5LTkwXCIpXG4gICAgICAgIHRpbWVyLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiMFwiKVxuICAgICAgICB0aW1lci5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiMDA6MDBcIilcbiAgICAgICAgc3RhcnRCdG4ub25jbGljayA9ICgpID0+IHdhdmVzdXJmZXIucGxheVBhdXNlKCkgIFxuICAgICAgIFxuICAgICAgICB3YXZlc3VyZmVyLm9uKCdyZWFkeScsIChkdXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nVGltZSA9IHdhdmVzdXJmZXIuZ2V0RHVyYXRpb24oKSBcbiAgICAgICAgICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHJlbWFpbmluZ1RpbWUgLyA2MClcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHJlbWFpbmluZ1RpbWUgJSA2MClcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBgMCR7bWludXRlc306JHtzZWNvbmRzLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1gXG4gICAgICAgICAgICB0aW1lci50ZXh0Q29udGVudCA9IGZvcm1hdHRlZFRpbWVcbiAgICAgICAgfSlcblxuICAgICAgICB3YXZlc3VyZmVyLm9uKCdmaW5pc2gnLCAoICkgPT4ge1xuICAgICAgICAgICAgd2F2ZXN1cmZlci5zZWVrVG8oMClcbiAgICAgICAgfSlcblxuICAgICAgICB3YXZlc3VyZmVyLm9uKCdwYXVzZScsICgpID0+IHsgXG4gICAgICAgICAgICBwbGF5U3ZnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICBzdG9wU3ZnLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIH0pXG5cbiAgICAgICAgd2F2ZXN1cmZlci5vbigncGxheScsICgpID0+IHtcbiAgICAgICAgICAgIHBsYXlTdmcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICAgICAgICAgIHN0b3BTdmcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgfSkgXG4gICAgICAgIFxuICAgICAgICB3YXZlc3VyZmVyLm9uKCd0aW1ldXBkYXRlJywgKGN1cnJlbnRUaW1lKSA9PiB7IFxuICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nVGltZSA9IE1hdGguYWJzKHdhdmVzdXJmZXIuZ2V0RHVyYXRpb24oKSAtIGN1cnJlbnRUaW1lKVxuICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IocmVtYWluaW5nVGltZSAvIDYwKVxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IocmVtYWluaW5nVGltZSAlIDYwKVxuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGAwJHttaW51dGVzfToke3NlY29uZHMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpfWBcbiAgICAgICAgICAgIHRpbWVyLnRleHRDb250ZW50ID0gZm9ybWF0dGVkVGltZVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHByb2dyZXNzU3ZnID0gdGhpcy5jcmVhdGVQcm9ncmVzc1N2Z0VsZW1ldCgpXG4gICAgICAgIGZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NTdmcpXG4gICAgICAgIGZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pXG4gICAgICAgIGZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQod2F2ZWZvcm1EaXYpXG4gICAgICAgIGZsZXhDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZXIpXG4gXG4gICAgICAgIHJlY29yZElucHV0LmFwcGVuZENoaWxkKGZsZXhDb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiByZWNvcmRJbnB1dFxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbWFnZU1lc3NhZ2VFbGVtZW50ID0gKHVybCkgPT4ge1xuICAgICAgICAvLyBDcmVhdGUgYnV0dG9uIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGl2Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdvdXRsaW5lLW5vbmUgY3Vyc29yLXBvaW50ZXInO1xuXG4gICAgICAgIC8vIENyZWF0ZSBkaXYgZm9yIGJhY2tncm91bmQgaW1hZ2VcbiAgICAgICAgY29uc3QgaW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpbWFnZURpdi5zZXRBdHRyaWJ1dGUoJ3VybCcsIHVybClcbiAgICAgICAgaW1hZ2VEaXYuY2xhc3NOYW1lID0gJ2ltYWdlIHJlbGF0aXZlIHJvdW5kZWQgYmctY292ZXIgYmctY2VudGVyIHctNTYgaC01NidcbiAgICAgICAgaW1hZ2VEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7dXJsfVwiKWBcblxuICAgICAgICBjb25zdCBwcm9ncmVzc1N2ZyA9IHRoaXMuY3JlYXRlUHJvZ3Jlc3NTdmdFbGVtZXQoKVxuXG4gICAgICAgIC8vIENyZWF0ZSBpbm5lciBkaXYgZm9yIG92ZXJsYXlcbiAgICAgICAgY29uc3Qgb3ZlcmxheURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG92ZXJsYXlEaXYuY2xhc3NOYW1lID0gJ3ctZnVsbCBoLWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcm91bmRlZCBiZy1ibGFjayBiZy1vcGFjaXR5LTIwIGhvdmVyOmJnLW9wYWNpdHktMTAgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAnXG5cbiAgICAgICAgLy8gQXBwZW5kIHRoZSBvdmVybGF5IGRpdiB0byB0aGUgaW1hZ2UgZGl2XG4gICAgICAgIGltYWdlRGl2LmFwcGVuZENoaWxkKHByb2dyZXNzU3ZnKVxuICAgICAgICBpbWFnZURpdi5hcHBlbmRDaGlsZChvdmVybGF5RGl2KVxuXG4gICAgICAgIC8vIEFwcGVuZCB0aGUgaW1hZ2UgZGl2IHRvIHRoZSBidXR0b25cbiAgICAgICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlRGl2KVxuXG4gICAgICAgIHJldHVybiBkaXZDb250YWluZXJcbiAgICB9IFxuXG4gICAgc3RhdGljIGNyZWF0ZVZlcnRpY2FsVGhyZWVEb3RzT3B0aW9uc0VsZW1lbnQgPSAocGxhY2VtZW50LCB0eXBlLCBpc0luY29taW5nTWVzc2FnZT1mYWxzZSkgPT4geyBcbiAgICAgICAgZnVuY3Rpb24gZ2V0Um9vdFBhcmVudChub2RlKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IG5vZGVcbiAgICBcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudC5nZXRBdHRyaWJ1dGUoJ21lc3NhZ2VJZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gY3VycmVudFxuICAgICAgICB9IFxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZURyb3Bkb3duRWxlbWVudChvcHRpb25zLCBwbGFjZW1lbnQpIHsgXG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIGRyb3Bkb3duIGNvbnRhaW5lclxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgY29uc3QgZHJvcGRvd24gPSBuZXcgRHJvcGRvd24oZHJvcGRvd25EaXYsIG9wdGlvbnMsIHsgcGxhY2VtZW50OiBwbGFjZW1lbnQgfSkgXG5cbiAgICAgICAgICAgIGRyb3Bkb3duRGl2LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicsICd0b3AtMCcsICdhYnNvbHV0ZScsICd6LVsxMDBdJywgJ3ctWzEyLjVyZW1dJywgJ210LTInLCAncm91bmRlZC1zbScsICdiZy13aGl0ZScsICdkYXJrOmJnLWdyYXktODAwJywgJ3NoYWRvdy1sZycsICdib3JkZXInLCAnYm9yZGVyLWdyYXktMTAwJywgJ2Rhcms6Ym9yZGVyLWdyYXktNjAwJywgJ2ZvY3VzOm91dGxpbmUtbm9uZScpXG4gICAgICAgICAgICBkcm9wZG93bkRpdi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbWVudScpXG4gICAgICAgICAgICBkcm9wZG93bkRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtb3JpZW50YXRpb24nLCAndmVydGljYWwnKVxuICAgICAgICAgICAgZHJvcGRvd25EaXYuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCAnbWVudS1idXR0b24nKVxuICAgICAgICAgICAgZHJvcGRvd25EaXYuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpXG5cbiAgICAgICAgICAgIC8vIExpc3Qgb2YgYnV0dG9uIGl0ZW1zXG4gICAgICAgICAgICBjb25zdCBidXR0b25zID0gW1xuICAgICAgICAgICAgICAgIHsgbGFiZWw6ICdSZXBseScsIGljb25QYXRoOiAnTTkgMTVMMyA5bTAgMGw2LTZNMyA5aDEyYTYgNiAwIDAxMCAxMmgtMycgfSxcbiAgICAgICAgICAgICAgICB7IGxhYmVsOiAnQ29weScsIGljb25QYXRoOiAnTTguMjUgNy41VjYuMTA4YzAtMS4xMzUuODQ1LTIuMDk4IDEuOTc2LTIuMTkyLjM3My0uMDMuNzQ4LS4wNTcgMS4xMjMtLjA4TTE1Ljc1IDE4SDE4YTIuMjUgMi4yNSAwIDAwMi4yNS0yLjI1VjYuMTA4YzAtMS4xMzUtLjg0NS0yLjA5OC0xLjk3Ni0yLjE5MmE0OC40MjQgNDguNDI0IDAgMDAtMS4xMjMtLjA4TTE1Ljc1IDE4Ljc1di0xLjg3NWEzLjM3NSAzLjM3NSAwIDAwLTMuMzc1LTMuMzc1aC0xLjVhMS4xMjUgMS4xMjUgMCAwMS0xLjEyNS0xLjEyNXYtMS41QTMuMzc1IDMuMzc1IDAgMDA2LjM3NSA3LjVINS4yNW0xMS45LTMuNjY0QTIuMjUxIDIuMjUxIDAgMDAxNSAyLjI1aC0xLjVhMi4yNTEgMi4yNTEgMCAwMC0yLjE1IDEuNTg2bTUuOCAwYy4wNjUuMjEuMS40MzMuMS42NjR2Ljc1aC02VjQuNWMwLS4yMzEuMDM1LS40NTQuMS0uNjY0TTYuNzUgNy41SDQuODc1Yy0uNjIxIDAtMS4xMjUuNTA0LTEuMTI1IDEuMTI1djEyYzAgLjYyMS41MDQgMS4xMjUgMS4xMjUgMS4xMjVoOS43NWMuNjIxIDAgMS4xMjUtLjUwNCAxLjEyNS0xLjEyNVYxNi41YTkgOSAwIDAwLTktOXonIH0sXG4gICAgICAgICAgICAgICAgeyBsYWJlbDogJ0ZvcndhcmQnLCBpY29uUGF0aDogJ000LjI0OCAxOUMzLjIyIDE1Ljc3IDUuMjc1IDguMjMyIDEyLjQ2NiA4LjIzMlY2LjA3OWExLjAyNSAxLjAyNSAwIDAgMSAxLjY0NC0uODYybDUuNDc5IDQuMzA3YTEuMTA4IDEuMTA4IDAgMCAxIDAgMS43MjNsLTUuNDggNC4zMDdhMS4wMjYgMS4wMjYgMCAwIDEtMS42NDMtLjg2MXYtMi4xNTRDNS4yNzUgMTMuNjE2IDQuMjQ4IDE5IDQuMjQ4IDE5WicgfSwgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIF1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gTWVzc2FnZVR5cGUuQVVESU8gfHwgdHlwZSA9PSBNZXNzYWdlVHlwZS5JTUFHRSkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbnMuc3BsaWNlKDEsIDEpXG4gICAgICAgICAgICB9IFxuXG4gICAgICAgICAgICBpZiAoIWlzSW5jb21pbmdNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHsgbGFiZWw6ICdEZWxldGUgTWVzc2FnZScsIGljb25QYXRoOiAnTTE0Ljc0IDlsLS4zNDYgOW0tNC43ODggMEw5LjI2IDltOS45NjgtMy4yMWMuMzQyLjA1Mi42ODIuMTA3IDEuMDIyLjE2Nm0tMS4wMjItLjE2NUwxOC4xNiAxOS42NzNhMi4yNSAyLjI1IDAgMDEtMi4yNDQgMi4wNzdIOC4wODRhMi4yNSAyLjI1IDAgMDEtMi4yNDQtMi4wNzdMNC43NzIgNS43OW0xNC40NTYgMGE0OC4xMDggNDguMTA4IDAgMDAtMy40NzgtLjM5N20tMTIgLjU2MmMuMzQtLjA1OS42OC0uMTE0IDEuMDIyLS4xNjVtMCAwYTQ4LjExIDQ4LjExIDAgMDEzLjQ3OC0uMzk3bTcuNSAwdi0uOTE2YzAtMS4xOC0uOTEtMi4xNjQtMi4wOS0yLjIwMWE1MS45NjQgNTEuOTY0IDAgMDAtMy4zMiAwYy0xLjE4LjAzNy0yLjA5IDEuMDIyLTIuMDkgMi4yMDF2LjkxNm03LjUgMGE0OC42NjcgNDguNjY3IDAgMDAtNy41IDAnfSlcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQ3JlYXRlIGJ1dHRvbnMgXG4gICAgICAgICAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IHsgXG4gICAgICAgICAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7ICBcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgndy1mdWxsJywgJ3B4LTQnLCAncHktMycsICdmbGV4JywgJ2l0ZW1zLWNlbnRlcicsICdib3JkZXItYicsICdvcGFjaXR5LTYwJywgJ2Rhcms6b3BhY2l0eS03MCcsICdvdXRsaW5lLW5vbmUnLCAndGV4dC1zbScsICdib3JkZXItZ3JheS0yMDAnLCAnZGFyazpib3JkZXItZ3JheS02MDAnLCAndHJhbnNpdGlvbi1hbGwnLCAnZHVyYXRpb24tMjAwJywgJ3RleHQtYmxhY2snLCAgICdob3ZlcjpiZy1ncmF5LTUwJywgJ2Rhcms6aG92ZXI6YmctZ3JheS02MDAnLCAnYWN0aXZlOmJnLWdyYXktMTAwJywgJ2Rhcms6Zm9jdXM6YmctZ3JheS02MDAnKVxuXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5sYWJlbCA9PT0gJ0RlbGV0ZSBNZXNzYWdlJykge1xuICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgndGV4dC1yZWQtNTAwJywgJ2hvdmVyOmJnLXJlZC01MCcsICdkYXJrOmhvdmVyOnRleHQtcmVkLTUwJywgJ2FjdGl2ZTpiZy1yZWQtMTAwJywgJ2Rhcms6aG92ZXI6YmctcmVkLTkwMCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZCgnZGFyazp0ZXh0LXdoaXRlJylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKVxuICAgICAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpXG4gICAgICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpXG4gICAgICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0JylcbiAgICAgICAgICAgICAgICBpY29uLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzEuNScpXG4gICAgICAgICAgICAgICAgaWNvbi5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsICdjdXJyZW50Q29sb3InKVxuICAgICAgICAgICAgICAgIGljb24uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJylcbiAgICAgICAgICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2gtNScsICd3LTUnLCAnbXItMycpXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJylcbiAgICAgICAgICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWxpbmVjYXAnLCAncm91bmQnKVxuICAgICAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdzdHJva2UtbGluZWpvaW4nLCAncm91bmQnKVxuICAgICAgICAgICAgICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgYnV0dG9uLmljb25QYXRoKVxuICAgICAgICAgICAgICAgIGljb24uYXBwZW5kQ2hpbGQocGF0aClcblxuICAgICAgICAgICAgICAgIGJ0bi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgICAgICAgICBidG4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYnV0dG9uLmxhYmVsKSlcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyAgICBcbiAgICAgICAgICAgICAgICAgICAgZHJvcGRvd24uaGlkZSgpICAgICBcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmxhYmVsID09ICdSZXBseScpIHtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJ1dHRvbi5sYWJlbCA9PSAnQ29weScpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IGdldFJvb3RQYXJlbnQoYnRuKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2VFbGVtZW50LmdldEF0dHJpYnV0ZSgnbWVzc2FnZURhdGEnKSkgXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBtZXNzYWdlRWxlbWVudC5jb3B5VGV4dE1lc3NhZ2VDYWxsYmFjayhtZXNzYWdlRGF0YS5jb250ZW50KSAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJ1dHRvbi5sYWJlbCA9PSAnRm9yd2FyZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvcndhcmRCdXR0b25UcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRpYy1tb2RhbC1mb3J3YXJkLXVzZXJzLWxpc3QtYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VFbGVtZW50ID0gZ2V0Um9vdFBhcmVudChidG4pXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0YSA9IEpTT04ucGFyc2UobWVzc2FnZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtZXNzYWdlRGF0YScpKSAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmRCdXR0b25UcmlnZ2VyLmNsaWNrKClcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09IE1lc3NhZ2VUeXBlLlRFWFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5mb3J3YXJkTWVzc2FnZUNhbGxiYWNrKHR5cGUsIG1lc3NhZ2VEYXRhLmNvbnRlbnQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlID09IE1lc3NhZ2VUeXBlLkFVRElPKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChtZXNzYWdlRGF0YS5jb250ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuZm9yd2FyZE1lc3NhZ2VDYWxsYmFjayh0eXBlLCBudWxsLCBibG9iLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PSBNZXNzYWdlVHlwZS5JTUFHRSkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG1lc3NhZ2VEYXRhLmNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IGltZy53aWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWcuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pbWVUeXBlID0gYmxvYi50eXBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IG1pbWVUeXBlLnNwbGl0KFwiL1wiKVsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9IFwiaW5wdXRcIiArIFwiLlwiICsgZXh0ZW5zaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dHB1dCA9IFwib3V0cHV0XCIgKyBcIi5cIiArIGV4dGVuc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlRWxlbWVudC5mb3J3YXJkTWVzc2FnZUNhbGxiYWNrKHR5cGUsIG51bGwsIGJsb2IsIGlucHV0LCB3aWR0aCwgaGVpZ2h0LCBtaW1lVHlwZSwgZXh0ZW5zaW9uLCBvdXRwdXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChidXR0b24ubGFiZWwgPT0gJ0RlbGV0ZSBNZXNzYWdlJykge1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkcm9wZG93bkRpdi5hcHBlbmRDaGlsZChidG4pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIFtkcm9wZG93bkRpdiwgZHJvcGRvd25dXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIFNWRyBlbGVtZW50XG4gICAgICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJylcbiAgICAgICAgc3ZnLmNsYXNzTGlzdC5hZGQoJ3ctNScsICdoLTUnLCAndGV4dC1uZXV0cmFsLTQwMCcpXG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCdmaWxsJywgJ2N1cnJlbnRDb2xvcicpXG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0JylcblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHBhdGggZWxlbWVudFxuICAgICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdwYXRoJylcbiAgICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCAnTTMuNSAxLjVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBabTAgNi4wNDFhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBabTAgNS45NTlhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBaJylcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIHBhdGggdG8gdGhlIFNWR1xuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aClcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFtkcm9wZG93bkVsZW1lbnQsIGRyb3Bkb3duXSA9IGNyZWF0ZURyb3Bkb3duRWxlbWVudChvcHRpb25zLCBwbGFjZW1lbnQpXG4gICAgICAgIFxuICAgICAgICBvcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2ludmlzaWJsZScsICdjdXJzb3ItcG9pbnRlcicpIFxuICAgICAgICBvcHRpb25zLmFwcGVuZENoaWxkKHN2ZykgXG4gICAgICAgIC8vb3B0aW9ucy5hcHBlbmRDaGlsZChkcm9wZG93bkVsZW1lbnQpXG5cbiAgICAgICAgb3B0aW9ucy5vbmNsaWNrID0gKCkgPT4geyBcbiAgICAgICAgICAgIGRyb3Bkb3duLnNob3coKSAgICBcbiAgICAgICAgfSBcblxuICAgICAgICByZXR1cm4gW29wdGlvbnMsIGRyb3Bkb3duRWxlbWVudF1cbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlT3V0Z29pbmdNZXNzYWdlVGV4dEVsZW1lbnQgPSAoY29udGVudCwgdGltZXN0YW1wLCB0aW1lQWdvKSA9PiB7ICBcbiAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKCd0aW1lc3RhbXAnLCB0aW1lc3RhbXApXG4gXG4gICAgICAgIGNvbnN0IHNlbGVjdE5vbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzZWxlY3ROb25lRGl2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1ub25lJylcbiBcbiAgICAgICAgY29uc3QgZmxleERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGZsZXhEaXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdqdXN0aWZ5LWVuZCcpXG4gXG4gICAgICAgIGNvbnN0IG1yNERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1yNERpdi5jbGFzc0xpc3QuYWRkKCdtci00Jyk7XG4gXG4gICAgICAgIGNvbnN0IGZsZXhJdGVtc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGZsZXhJdGVtc0Rpdi5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ3JlbGF0aXZlJywgJ2l0ZW1zLWVuZCcpXG4gXG4gICAgICAgIGNvbnN0IGNoYXRNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2hhdE1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hhdC1tZXNzYWdlLWNvbnRhaW5lcicsICdncm91cCcsICdtYXgtdy1bMzEuMjVyZW1dJywgJ3AtNCcsICd0cmFuc2l0aW9uJywgJ2R1cmF0aW9uLTUwMCcsICdyb3VuZGVkJywgJ3JvdW5kZWQtYnItbm9uZScsICdvcmRlci0yJywgJ2JnLWluZGlnby01MCcsICdkYXJrOmJnLWdyYXktNjAwJylcbiBcbiAgICAgICAgY29uc3QgY2hhdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY2hhdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnd2hpdGVzcGFjZS1wcmUtd3JhcCcsICdicmVhay1hbGwnLCAndGV4dC1zbScsICdmb250LW5vcm1hbCcsICdsZWFkaW5nLTQnLCAndHJhY2tpbmctWy4wMXJlbV0nLCAnb3V0bGluZS1ub25lJywgJ3RleHQtYmxhY2snLCAnb3BhY2l0eS04MCcsICdkYXJrOnRleHQtd2hpdGUnLCAnZGFyazpvcGFjaXR5LTkwJylcbiAgICAgICAgY2hhdENvbnRlbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJylcbiAgICAgICAgY2hhdENvbnRlbnQudGV4dENvbnRlbnQgPSBjb250ZW50XG4gXG4gICAgICAgIGNoYXRNZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXRDb250ZW50KTtcbiBcbiAgICAgICAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRpbWVEaXYuY2xhc3NMaXN0LmFkZCgnbWwtMS41JywgJ29yZGVyLTEnKVxuIFxuICAgICAgICBjb25zdCB0aW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0aW1lVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nLCAnZmxleCcsICdqdXN0aWZ5LWVuZCcsICdvdXRsaW5lLW5vbmUnLCAndGV4dC14cycsICd0ZXh0LWJsYWNrJywgJ29wYWNpdHktODAnLCAnZGFyazp0ZXh0LXdoaXRlJywgJ2Rhcms6b3BhY2l0eS05MCcsICdmb250LWxpZ2h0JywgJ2xlYWRpbmctNCcsICd0cmFja2luZy1bLjAxcmVtXScsICd3aGl0ZXNwYWNlLXByZScpXG4gICAgICAgIHRpbWVUZXh0LnRleHRDb250ZW50ID0gdGltZXN0YW1wXG5cbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlVGV4dEVsZW1lbnRUaW1lQWdvKHRpbWVUZXh0LCB0aW1lc3RhbXAsIHRpbWVBZ28pXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGltZVRleHQpIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpICBcbiAgICAgICAgY29uc3QgW29wdGlvbnMsIGRyb3Bkb3duRWxlbWVudF0gPSB0aGlzLmNyZWF0ZVZlcnRpY2FsVGhyZWVEb3RzT3B0aW9uc0VsZW1lbnQgKCd0b3AtZW5kJywgTWVzc2FnZVR5cGUuVEVYVClcblxuICAgICAgICBkaXZPcHRpb25zLnN0eWxlLmhlaWdodCA9ICcxMDAlJ1xuICAgICAgICBkaXZPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnZmxleC1jb2wnLCAnanVzdGlmeS1iZXR3ZWVuJywgJ2l0ZW1zLWNlbnRlcicpXG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaW1nLnNyYyA9ICcvZ3JheV9jaGVja3Muc3ZnJ1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgndy1bLjg3NXJlbV0nLCAnaC1bLjg3NXJlbV0nLCAnaW1nLWNoZWNrJylcbiAgICAgICAgXG4gICAgICAgIGRpdk9wdGlvbnMuYXBwZW5kQ2hpbGQob3B0aW9ucylcbiAgICAgICAgZGl2T3B0aW9ucy5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgIGRpdk9wdGlvbnMuYXBwZW5kQ2hpbGQoZHJvcGRvd25FbGVtZW50KVxuICAgICAgICAgIFxuICAgICAgICBmbGV4SXRlbXNEaXYuYXBwZW5kQ2hpbGQoY2hhdE1lc3NhZ2VDb250YWluZXIpXG4gICAgICAgIGZsZXhJdGVtc0Rpdi5hcHBlbmRDaGlsZCh0aW1lRGl2KVxuICAgICAgICBmbGV4SXRlbXNEaXYuYXBwZW5kQ2hpbGQoZGl2T3B0aW9ucylcbiBcbiAgICAgICAgZmxleERpdi5hcHBlbmRDaGlsZChtcjREaXYpXG4gICAgICAgIGZsZXhEaXYuYXBwZW5kQ2hpbGQoZmxleEl0ZW1zRGl2KVxuXG4gICAgICAgIHNlbGVjdE5vbmVEaXYuYXBwZW5kQ2hpbGQoZmxleERpdilcbiBcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChzZWxlY3ROb25lRGl2KVxuICAgICAgICBtYWluRGl2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aW1lVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgb3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1haW5EaXYgXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZU91dGdvaW5nTWVzc2FnZVZvaWNlRWxlbWVudCA9ICh1cmwsIHRpbWVzdGFtcCwgdGltZUFnbykgPT4ge1xuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoJ3RpbWVzdGFtcCcsIHRpbWVzdGFtcClcbiBcbiAgICAgICAgY29uc3Qgc2VsZWN0Tm9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHNlbGVjdE5vbmVEaXYuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LW5vbmUnKVxuIFxuICAgICAgICBjb25zdCBmbGV4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZmxleERpdi5jbGFzc0xpc3QuYWRkKCAnZmxleCcsICdqdXN0aWZ5LWVuZCcpXG4gXG4gICAgICAgIGNvbnN0IG1yNERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1yNERpdi5jbGFzc0xpc3QuYWRkKCdtci00Jyk7XG4gXG4gICAgICAgIGNvbnN0IGZsZXhJdGVtc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGZsZXhJdGVtc0Rpdi5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2l0ZW1zLWVuZCcpXG4gXG4gICAgICAgIGNvbnN0IGNoYXRNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2hhdE1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hhdC1tZXNzYWdlLWNvbnRhaW5lcicsICdncm91cCcsICdtYXgtdy1bMzEuMjVyZW1dJywgJ3AtNCcsICd0cmFuc2l0aW9uJywgJ2R1cmF0aW9uLTUwMCcsICdyb3VuZGVkJywgJ3JvdW5kZWQtYnItbm9uZScsICdvcmRlci0yJywgJ2JnLWluZGlnby01MCcsICdkYXJrOmJnLWdyYXktNjAwJylcbiBcbiAgICAgICAgY29uc3QgY2hhdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY2hhdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnd2hpdGVzcGFjZS1wcmUtd3JhcCcsICdicmVhay1hbGwnLCAndGV4dC1zbScsICdmb250LW5vcm1hbCcsICdsZWFkaW5nLTQnLCAndHJhY2tpbmctWy4wMXJlbV0nLCAnb3V0bGluZS1ub25lJywgJ3RleHQtYmxhY2snLCAnb3BhY2l0eS04MCcsICdkYXJrOnRleHQtd2hpdGUnLCAnZGFyazpvcGFjaXR5LTkwJylcbiAgICAgICAgY2hhdENvbnRlbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJykgXG5cbiAgICAgICAgY29uc3Qgdm9pY2VFbGVtZW50ID0gdGhpcy5jcmVhdGVWb2ljZU1lc3NhZ2VFbGVtZW50KHVybCkgXG4gICAgICAgIGNoYXRNZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHZvaWNlRWxlbWVudClcbiBcbiAgICAgICAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRpbWVEaXYuY2xhc3NMaXN0LmFkZCgnbWwtMS41JywgJ29yZGVyLTEnKVxuIFxuICAgICAgICBjb25zdCB0aW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0aW1lVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nLCAnZmxleCcsICdqdXN0aWZ5LWVuZCcsICdvdXRsaW5lLW5vbmUnLCAndGV4dC14cycsICd0ZXh0LWJsYWNrJywgJ29wYWNpdHktODAnLCAnZGFyazp0ZXh0LXdoaXRlJywgJ2Rhcms6b3BhY2l0eS05MCcsICdmb250LWxpZ2h0JywgJ2xlYWRpbmctNCcsICd0cmFja2luZy1bLjAxcmVtXScsICd3aGl0ZXNwYWNlLXByZScpXG4gICAgICAgIHRpbWVUZXh0LnRleHRDb250ZW50ID0gdGltZXN0YW1wXG5cbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlVGV4dEVsZW1lbnRUaW1lQWdvKHRpbWVUZXh0LCB0aW1lc3RhbXAsIHRpbWVBZ28pXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGltZVRleHQpIFxuXG4gICAgICAgIGNvbnN0IGRpdk9wdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSAgXG4gICAgICAgIGNvbnN0IFtvcHRpb25zLCBkcm9wZG93bkVsZW1lbnRdID0gdGhpcy5jcmVhdGVWZXJ0aWNhbFRocmVlRG90c09wdGlvbnNFbGVtZW50ICgndG9wLWVuZCcsIE1lc3NhZ2VUeXBlLkFVRElPKVxuXG4gICAgICAgIGRpdk9wdGlvbnMuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXG4gICAgICAgIGRpdk9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdmbGV4LWNvbCcsICdqdXN0aWZ5LWJldHdlZW4nLCAnaXRlbXMtY2VudGVyJylcbiBcbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgaW1nLnNyYyA9ICcvZ3JheV9jaGVja3Muc3ZnJ1xuICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgndy1bLjg3NXJlbV0nLCAnaC1bLjg3NXJlbV0nLCAnaW1nLWNoZWNrJylcblxuICAgICAgICBkaXZPcHRpb25zLmFwcGVuZENoaWxkKG9wdGlvbnMpXG4gICAgICAgIGRpdk9wdGlvbnMuYXBwZW5kQ2hpbGQoaW1nKVxuICAgICAgICBkaXZPcHRpb25zLmFwcGVuZENoaWxkKGRyb3Bkb3duRWxlbWVudClcbiBcbiAgICAgICAgZmxleEl0ZW1zRGl2LmFwcGVuZENoaWxkKGNoYXRNZXNzYWdlQ29udGFpbmVyKVxuICAgICAgICBmbGV4SXRlbXNEaXYuYXBwZW5kQ2hpbGQodGltZURpdilcbiAgICAgICAgZmxleEl0ZW1zRGl2LmFwcGVuZENoaWxkKGRpdk9wdGlvbnMpXG4gXG4gICAgICAgIGZsZXhEaXYuYXBwZW5kQ2hpbGQobXI0RGl2KVxuICAgICAgICBmbGV4RGl2LmFwcGVuZENoaWxkKGZsZXhJdGVtc0RpdilcblxuICAgICAgICBzZWxlY3ROb25lRGl2LmFwcGVuZENoaWxkKGZsZXhEaXYpXG4gXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoc2VsZWN0Tm9uZURpdilcbiAgICAgICAgbWFpbkRpdi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgdGltZVRleHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgICAgICAgIG9wdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJylcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYWluRGl2IFxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVPdXRnb2luZ01lc3NhZ2VJbWFnZUVsZW1lbnQgPSAodXJsLCB0aW1lc3RhbXAsIHRpbWVBZ28pID0+IHtcbiAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKCd0aW1lc3RhbXAnLCB0aW1lc3RhbXApXG4gXG4gICAgICAgIGNvbnN0IHNlbGVjdE5vbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBzZWxlY3ROb25lRGl2LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1ub25lJylcbiBcbiAgICAgICAgY29uc3QgZmxleERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGZsZXhEaXYuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdqdXN0aWZ5LWVuZCcpXG4gXG4gICAgICAgIGNvbnN0IG1yNERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1yNERpdi5jbGFzc0xpc3QuYWRkKCdtci00Jyk7XG4gXG4gICAgICAgIGNvbnN0IGZsZXhJdGVtc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGZsZXhJdGVtc0Rpdi5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ3JlbGF0aXZlJywgJ2l0ZW1zLWVuZCcpXG4gXG4gICAgICAgIGNvbnN0IGNoYXRNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2hhdE1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hhdC1tZXNzYWdlLWNvbnRhaW5lcicsICdncm91cCcsICdtYXgtdy1bMzEuMjVyZW1dJywgJ3RyYW5zaXRpb24nLCAnZHVyYXRpb24tNTAwJywgJ3JvdW5kZWQnLCAncm91bmRlZC1ici1ub25lJywgJ29yZGVyLTInLCAnYmctaW5kaWdvLTUwJywgJ2Rhcms6YmctZ3JheS02MDAnKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgaW1hZ2VDb250ZW50ID0gdGhpcy5jcmVhdGVJbWFnZU1lc3NhZ2VFbGVtZW50KHVybClcbiAgIFxuICAgICAgICBjaGF0TWVzc2FnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNvbnRlbnQpO1xuIFxuICAgICAgICBjb25zdCB0aW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGltZURpdi5jbGFzc0xpc3QuYWRkKCdtbC0xLjUnLCAnb3JkZXItMScpXG4gXG4gICAgICAgIGNvbnN0IHRpbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRpbWVUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicsICdmbGV4JywgJ2p1c3RpZnktZW5kJywgJ291dGxpbmUtbm9uZScsICd0ZXh0LXhzJywgJ3RleHQtYmxhY2snLCAnb3BhY2l0eS04MCcsICdkYXJrOnRleHQtd2hpdGUnLCAnZGFyazpvcGFjaXR5LTkwJywgJ2ZvbnQtbGlnaHQnLCAnbGVhZGluZy00JywgJ3RyYWNraW5nLVsuMDFyZW1dJywgJ3doaXRlc3BhY2UtcHJlJylcbiAgICAgICAgdGltZVRleHQudGV4dENvbnRlbnQgPSB0aW1lc3RhbXBcblxuICAgICAgICB0aGlzLnNldE1lc3NhZ2VUZXh0RWxlbWVudFRpbWVBZ28odGltZVRleHQsIHRpbWVzdGFtcCwgdGltZUFnbylcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0aW1lVGV4dCkgXG5cbiAgICAgICAgY29uc3QgZGl2T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpICBcbiAgICAgICAgY29uc3QgW29wdGlvbnMsIGRyb3Bkb3duRWxlbWVudF0gPSB0aGlzLmNyZWF0ZVZlcnRpY2FsVGhyZWVEb3RzT3B0aW9uc0VsZW1lbnQgKCd0b3AtZW5kJywgTWVzc2FnZVR5cGUuSU1BR0UpXG5cbiAgICAgICAgZGl2T3B0aW9ucy5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcbiAgICAgICAgZGl2T3B0aW9ucy5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2ZsZXgtY29sJywgJ2p1c3RpZnktYmV0d2VlbicsICdpdGVtcy1jZW50ZXInKVxuIFxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgICAgICBpbWcuc3JjID0gJy9ncmF5X2NoZWNrcy5zdmcnXG4gICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCd3LVsuODc1cmVtXScsICdoLVsuODc1cmVtXScsICdpbWctY2hlY2snKVxuXG4gICAgICAgIGRpdk9wdGlvbnMuYXBwZW5kQ2hpbGQob3B0aW9ucylcbiAgICAgICAgZGl2T3B0aW9ucy5hcHBlbmRDaGlsZChpbWcpXG4gICAgICAgIGRpdk9wdGlvbnMuYXBwZW5kQ2hpbGQoZHJvcGRvd25FbGVtZW50KVxuICAgICAgICAgIFxuICAgICAgICBmbGV4SXRlbXNEaXYuYXBwZW5kQ2hpbGQoY2hhdE1lc3NhZ2VDb250YWluZXIpXG4gICAgICAgIGZsZXhJdGVtc0Rpdi5hcHBlbmRDaGlsZCh0aW1lRGl2KVxuICAgICAgICBmbGV4SXRlbXNEaXYuYXBwZW5kQ2hpbGQoZGl2T3B0aW9ucylcbiBcbiAgICAgICAgZmxleERpdi5hcHBlbmRDaGlsZChtcjREaXYpXG4gICAgICAgIGZsZXhEaXYuYXBwZW5kQ2hpbGQoZmxleEl0ZW1zRGl2KVxuXG4gICAgICAgIHNlbGVjdE5vbmVEaXYuYXBwZW5kQ2hpbGQoZmxleERpdilcbiBcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChzZWxlY3ROb25lRGl2KVxuICAgICAgICBtYWluRGl2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aW1lVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgb3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1haW5EaXYgXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUluY29taW5nTWVzc2FnZVRleHRFbGVtZW50ID0gKGNvbnRlbnQsIGF2YXRhciwgdGltZXN0YW1wLCB0aW1lQWdvKSA9PiB7ICBcbiAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKCd0aW1lc3RhbXAnLCB0aW1lc3RhbXApXG4gXG4gICAgICAgIGNvbnN0IGlubmVyRGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGlubmVyRGl2MS5jbGFzc0xpc3QuYWRkKCdzZWxlY3Qtbm9uZScpXG4gXG4gICAgICAgIGNvbnN0IGZsZXhEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBmbGV4RGl2LmNsYXNzTGlzdC5hZGQoICdmbGV4JylcbiBcbiAgICAgICAgY29uc3QgYXZhdGFyRGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYXZhdGFyRGl2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21yLTQnLCAnZmxleCcsICdpdGVtcy1lbmQnKVxuIFxuICAgICAgICBjb25zdCBhdmF0YXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBhdmF0YXJEaXYuY2xhc3NMaXN0LmFkZCgnb3V0bGluZS1ub25lJylcbiBcbiAgICAgICAgY29uc3QgYXZhdGFySW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBhdmF0YXJJbWFnZURpdi5jbGFzc0xpc3QuYWRkKCdhdmF0YXInLCAndy1bMi4yNXJlbV0nLCAnaC1bMi4yNXJlbV0nLCAnYmctY292ZXInLCAnYmctY2VudGVyJywgJ3JvdW5kZWQtZnVsbCcpXG4gICAgICAgIGF2YXRhckltYWdlRGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke2F2YXRhcn1cIilgXG4gXG4gICAgICAgIGF2YXRhckRpdi5hcHBlbmRDaGlsZChhdmF0YXJJbWFnZURpdilcbiBcbiAgICAgICAgYXZhdGFyRGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGF2YXRhckRpdilcbiBcbiAgICAgICAgY29uc3QgY2hhdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNoYXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxleCcsICdpdGVtcy1lbmQnKVxuIFxuICAgICAgICBjb25zdCBjaGF0TWVzc2FnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGNoYXRNZXNzYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NoYXQtbWVzc2FnZS1jb250YWluZXInLCAnZ3JvdXAnLCAnbWF4LXctWzMxLjI1cmVtXScsICdwLTQnLCAndHJhbnNpdGlvbicsICdkdXJhdGlvbi01MDAnLCAncm91bmRlZCcsICdyb3VuZGVkLWJsLW5vbmUnLCAnbXItNCcsICdiZy1ncmF5LTEwMCcsICdkYXJrOmJnLWdyYXktNjAwJylcbiBcbiAgICAgICAgY29uc3QgY2hhdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgY2hhdENvbnRlbnQuY2xhc3NMaXN0LmFkZCgnd2hpdGVzcGFjZS1wcmUtd3JhcCcsICdicmVhay1hbGwnLCAndGV4dC1zbScsICdmb250LW5vcm1hbCcsICdsZWFkaW5nLTQnLCAndHJhY2tpbmctWy4wMXJlbV0nLCAnb3V0bGluZS1ub25lJywgJ3RleHQtYmxhY2snLCAnb3BhY2l0eS04MCcsICdkYXJrOnRleHQtd2hpdGUnLCAnZGFyazpvcGFjaXR5LTkwJylcbiAgICAgICAgY2hhdENvbnRlbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJylcbiAgICAgICAgY2hhdENvbnRlbnQudGV4dENvbnRlbnQgPSBjb250ZW50XG4gXG4gICAgICAgIGNoYXRNZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXRDb250ZW50KVxuIFxuICAgICAgICBjb25zdCB0aW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgXG4gXG4gICAgICAgIGNvbnN0IHRpbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIHRpbWVUZXh0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicsICdwbC0xMicsICdvdXRsaW5lLW5vbmUnLCAndGV4dC14cycsICd0ZXh0LWJsYWNrJywgJ29wYWNpdHktODAnLCAnZGFyazp0ZXh0LXdoaXRlJywgJ2Rhcms6b3BhY2l0eS05MCcsICdmb250LWxpZ2h0JywgJ2xlYWRpbmctNCcsICd0cmFja2luZy1bLjAxcmVtXScsICd3aGl0ZXNwYWNlLXByZScpXG4gICAgICAgIHRpbWVUZXh0LnRleHRDb250ZW50ID0gdGltZXN0YW1wXG4gICAgICAgIHRoaXMuc2V0TWVzc2FnZVRleHRFbGVtZW50VGltZUFnbyh0aW1lVGV4dCwgdGltZXN0YW1wLCB0aW1lQWdvKVxuICAgICAgICBtYWluRGl2LmFwcGVuZCh0aW1lVGV4dCkgIFxuICAgICAgICBcbiAgICAgICAgY29uc3QgW29wdGlvbnMsIGRyb3Bkb3duRWxlbWVudF0gPSB0aGlzLmNyZWF0ZVZlcnRpY2FsVGhyZWVEb3RzT3B0aW9uc0VsZW1lbnQgKCd0b3Atc3RhcnQnLCBNZXNzYWdlVHlwZS5URVhULCB0cnVlKVxuXG4gICAgICAgIGNoYXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhdE1lc3NhZ2VDb250YWluZXIpXG4gICAgICAgIGNoYXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUNvbnRhaW5lcilcbiBcbiAgICAgICAgZmxleERpdi5hcHBlbmRDaGlsZChhdmF0YXJEaXZDb250YWluZXIpXG4gICAgICAgIGZsZXhEaXYuYXBwZW5kQ2hpbGQoY2hhdENvbnRhaW5lcilcbiAgICAgICAgZmxleERpdi5hcHBlbmRDaGlsZChvcHRpb25zKVxuICAgICAgICBmbGV4RGl2LmFwcGVuZENoaWxkKGRyb3Bkb3duRWxlbWVudClcbiBcbiAgICAgICAgaW5uZXJEaXYxLmFwcGVuZENoaWxkKGZsZXhEaXYpXG4gXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYxKVxuICAgICAgICBtYWluRGl2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aW1lVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgb3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1haW5EaXYgXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUluY29taW5nTWVzc2FnZVZvaWNlRWxlbWVudCA9ICh1cmwsIGF2YXRhciwgdGltZXN0YW1wLCB0aW1lQWdvKSA9PiB7XG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtYWluRGl2LnNldEF0dHJpYnV0ZSgndGltZXN0YW1wJywgdGltZXN0YW1wKVxuIFxuICAgICAgICBjb25zdCBpbm5lckRpdjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBpbm5lckRpdjEuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LW5vbmUnKVxuIFxuICAgICAgICBjb25zdCBmbGV4RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZmxleERpdi5jbGFzc0xpc3QuYWRkKCAnZmxleCcpXG4gXG4gICAgICAgIGNvbnN0IGF2YXRhckRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGF2YXRhckRpdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtci00JywgJ2ZsZXgnLCAnaXRlbXMtZW5kJylcbiBcbiAgICAgICAgY29uc3QgYXZhdGFyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYXZhdGFyRGl2LmNsYXNzTGlzdC5hZGQoJ291dGxpbmUtbm9uZScpXG4gXG4gICAgICAgIGNvbnN0IGF2YXRhckltYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYXZhdGFySW1hZ2VEaXYuY2xhc3NMaXN0LmFkZCgnYXZhdGFyJywgJ3ctWzIuMjVyZW1dJywgJ2gtWzIuMjVyZW1dJywgJ2JnLWNvdmVyJywgJ2JnLWNlbnRlcicsICdyb3VuZGVkLWZ1bGwnKVxuICAgICAgICBhdmF0YXJJbWFnZURpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHthdmF0YXJ9XCIpYFxuIFxuICAgICAgICBhdmF0YXJEaXYuYXBwZW5kQ2hpbGQoYXZhdGFySW1hZ2VEaXYpXG4gXG4gICAgICAgIGF2YXRhckRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChhdmF0YXJEaXYpXG4gXG4gICAgICAgIGNvbnN0IGNoYXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjaGF0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnLCAnaXRlbXMtZW5kJylcbiBcbiAgICAgICAgY29uc3QgY2hhdE1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBjaGF0TWVzc2FnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaGF0LW1lc3NhZ2UtY29udGFpbmVyJywgJ2dyb3VwJywgJ21heC13LVszMS4yNXJlbV0nLCAncC00JywgJ3RyYW5zaXRpb24nLCAnZHVyYXRpb24tNTAwJywgJ3JvdW5kZWQnLCAncm91bmRlZC1ibC1ub25lJywgJ21yLTQnLCAnYmctZ3JheS0xMDAnLCAnZGFyazpiZy1ncmF5LTYwMCcpXG4gXG4gICAgICAgIGNvbnN0IGNoYXRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIGNoYXRDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3doaXRlc3BhY2UtcHJlLXdyYXAnLCAnYnJlYWstYWxsJywgJ3RleHQtc20nLCAnZm9udC1ub3JtYWwnLCAnbGVhZGluZy00JywgJ3RyYWNraW5nLVsuMDFyZW1dJywgJ291dGxpbmUtbm9uZScsICd0ZXh0LWJsYWNrJywgJ29wYWNpdHktODAnLCAnZGFyazp0ZXh0LXdoaXRlJywgJ2Rhcms6b3BhY2l0eS05MCcpXG4gICAgICAgIGNoYXRDb250ZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpXG5cbiAgICAgICAgY29uc3Qgdm9pY2VFbGVtZW50ID0gdGhpcy5jcmVhdGVWb2ljZU1lc3NhZ2VFbGVtZW50KHVybCkgXG4gICAgICAgIGNoYXRNZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKHZvaWNlRWxlbWVudClcbiBcbiAgICAgICAgY29uc3QgdGltZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIFxuIFxuICAgICAgICBjb25zdCB0aW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0aW1lVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nLCAncGwtMTInLCAnb3V0bGluZS1ub25lJywgJ3RleHQteHMnLCAndGV4dC1ibGFjaycsICdvcGFjaXR5LTgwJywgJ2Rhcms6dGV4dC13aGl0ZScsICdkYXJrOm9wYWNpdHktOTAnLCAnZm9udC1saWdodCcsICdsZWFkaW5nLTQnLCAndHJhY2tpbmctWy4wMXJlbV0nLCAnd2hpdGVzcGFjZS1wcmUnKVxuICAgICAgICB0aW1lVGV4dC50ZXh0Q29udGVudCA9IHRpbWVzdGFtcFxuICAgICAgICB0aGlzLnNldE1lc3NhZ2VUZXh0RWxlbWVudFRpbWVBZ28odGltZVRleHQsIHRpbWVzdGFtcCwgdGltZUFnbylcbiAgICAgICAgbWFpbkRpdi5hcHBlbmQodGltZVRleHQpIFxuIFxuICAgICAgICBjb25zdCBbb3B0aW9ucywgZHJvcGRvd25FbGVtZW50XSA9IHRoaXMuY3JlYXRlVmVydGljYWxUaHJlZURvdHNPcHRpb25zRWxlbWVudCAoJ3RvcC1zdGFydCcsIE1lc3NhZ2VUeXBlLkFVRElPLCB0cnVlKVxuXG4gICAgICAgIGNoYXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hhdE1lc3NhZ2VDb250YWluZXIpXG4gICAgICAgIGNoYXRDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUNvbnRhaW5lcilcbiBcbiAgICAgICAgZmxleERpdi5hcHBlbmRDaGlsZChhdmF0YXJEaXZDb250YWluZXIpXG4gICAgICAgIGZsZXhEaXYuYXBwZW5kQ2hpbGQoY2hhdENvbnRhaW5lcilcbiAgICAgICAgZmxleERpdi5hcHBlbmRDaGlsZChvcHRpb25zKVxuICAgICAgICBmbGV4RGl2LmFwcGVuZENoaWxkKGRyb3Bkb3duRWxlbWVudClcbiBcbiAgICAgICAgaW5uZXJEaXYxLmFwcGVuZENoaWxkKGZsZXhEaXYpXG4gXG4gICAgICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYxKVxuICAgICAgICBtYWluRGl2Lm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aW1lVGV4dC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgICAgICAgb3B0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1haW5EaXYgXG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUluY29tbWluZ01lc3NhZ2VJbWFnZUVsZW1lbnQgPSAodXJsLCBhdmF0YXIsIHRpbWVzdGFtcCwgdGltZUFnbykgPT4ge1xuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoJ3RpbWVzdGFtcCcsIHRpbWVzdGFtcClcbiBcbiAgICAgICAgY29uc3QgaW5uZXJEaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgaW5uZXJEaXYxLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1ub25lJylcbiBcbiAgICAgICAgY29uc3QgZmxleERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGZsZXhEaXYuY2xhc3NMaXN0LmFkZCggJ2ZsZXgnKVxuIFxuICAgICAgICBjb25zdCBhdmF0YXJEaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBhdmF0YXJEaXZDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbXItNCcsICdmbGV4JywgJ2l0ZW1zLWVuZCcpXG4gXG4gICAgICAgIGNvbnN0IGF2YXRhckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGF2YXRhckRpdi5jbGFzc0xpc3QuYWRkKCdvdXRsaW5lLW5vbmUnKVxuIFxuICAgICAgICBjb25zdCBhdmF0YXJJbWFnZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGF2YXRhckltYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ2F2YXRhcicsICd3LVsyLjI1cmVtXScsICdoLVsyLjI1cmVtXScsICdiZy1jb3ZlcicsICdiZy1jZW50ZXInLCAncm91bmRlZC1mdWxsJylcbiAgICAgICAgYXZhdGFySW1hZ2VEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7YXZhdGFyfVwiKWBcbiBcbiAgICAgICAgYXZhdGFyRGl2LmFwcGVuZENoaWxkKGF2YXRhckltYWdlRGl2KVxuIFxuICAgICAgICBhdmF0YXJEaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoYXZhdGFyRGl2KVxuIFxuICAgICAgICBjb25zdCBjaGF0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2hhdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGV4JywgJ2l0ZW1zLWVuZCcpXG4gXG4gICAgICAgIGNvbnN0IGNoYXRNZXNzYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgY2hhdE1lc3NhZ2VDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2hhdC1tZXNzYWdlLWNvbnRhaW5lcicsICdncm91cCcsICdtYXgtdy1bMzEuMjVyZW1dJywgJ3RyYW5zaXRpb24nLCAnZHVyYXRpb24tNTAwJywgJ3JvdW5kZWQnLCAncm91bmRlZC1ibC1ub25lJywgJ21yLTQnLCAnYmctZ3JheS0xMDAnLCAnZGFyazpiZy1ncmF5LTYwMCcpXG4gXG4gICAgICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IHRoaXMuY3JlYXRlSW1hZ2VNZXNzYWdlRWxlbWVudCh1cmwpXG4gXG4gICAgICAgIGNoYXRNZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlRWxlbWVudClcbiBcbiAgICAgICAgY29uc3QgdGltZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpIFxuIFxuICAgICAgICBjb25zdCB0aW1lVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICB0aW1lVGV4dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nLCAncGwtMTInLCAnb3V0bGluZS1ub25lJywgJ3RleHQteHMnLCAndGV4dC1ibGFjaycsICdvcGFjaXR5LTgwJywgJ2Rhcms6dGV4dC13aGl0ZScsICdkYXJrOm9wYWNpdHktOTAnLCAnZm9udC1saWdodCcsICdsZWFkaW5nLTQnLCAndHJhY2tpbmctWy4wMXJlbV0nLCAnd2hpdGVzcGFjZS1wcmUnKVxuICAgICAgICB0aW1lVGV4dC50ZXh0Q29udGVudCA9IHRpbWVzdGFtcFxuICAgICAgICB0aGlzLnNldE1lc3NhZ2VUZXh0RWxlbWVudFRpbWVBZ28odGltZVRleHQsIHRpbWVzdGFtcCwgdGltZUFnbylcbiAgICAgICAgbWFpbkRpdi5hcHBlbmQodGltZVRleHQpICBcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IFtvcHRpb25zLCBkcm9wZG93bkVsZW1lbnRdID0gdGhpcy5jcmVhdGVWZXJ0aWNhbFRocmVlRG90c09wdGlvbnNFbGVtZW50ICgndG9wLXN0YXJ0JywgTWVzc2FnZVR5cGUuSU1BR0UsIHRydWUpXG5cbiAgICAgICAgY2hhdENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGF0TWVzc2FnZUNvbnRhaW5lcilcbiAgICAgICAgY2hhdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lQ29udGFpbmVyKVxuIFxuICAgICAgICBmbGV4RGl2LmFwcGVuZENoaWxkKGF2YXRhckRpdkNvbnRhaW5lcilcbiAgICAgICAgZmxleERpdi5hcHBlbmRDaGlsZChjaGF0Q29udGFpbmVyKVxuICAgICAgICBmbGV4RGl2LmFwcGVuZENoaWxkKG9wdGlvbnMpXG4gICAgICAgIGZsZXhEaXYuYXBwZW5kQ2hpbGQoZHJvcGRvd25FbGVtZW50KVxuIFxuICAgICAgICBpbm5lckRpdjEuYXBwZW5kQ2hpbGQoZmxleERpdilcbiBcbiAgICAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChpbm5lckRpdjEpXG4gICAgICAgIG1haW5EaXYub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgIHRpbWVUZXh0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICAgICAgICBvcHRpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFpbkRpdiBcbiAgICB9XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXJ2aWNlIHsgXG4gICAgc2V0RW5jcnlwdGlvbkRldGFpbHMgPSBhc3luYyAodWlkLCBwdWJsaWNrZXksIHByaXZhdGVrZXksIHBhc3NwaHJhc2UpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGRhdGEuYXBwZW5kKFwidWlkXCIsIHVpZClcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJwdWJsaWNrZXlcIiwgcHVibGlja2V5KVxuICAgICAgICBkYXRhLmFwcGVuZChcInByaXZhdGVrZXlcIiwgcHJpdmF0ZWtleSlcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJwYXNzcGhyYXNlXCIsIHBhc3NwaHJhc2UpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvc2V0X2VuY3J5cHRpb25fZGV0YWlsc1wiLCB7IG1ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEgfSlcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG9rOiBmYWxzZSB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY3JlYXRlVGV4dE1lc3NhZ2UgPSBhc3luYyAodWlkLCBldmVudCwgY2hhbm5lbHMsIHNlbmRlciwgcmVjZWl2ZXIsIHR5cGUsIGNvbnRlbnQsIHRpbWVzdGFtcCwgaXNTYXZlTWVzc2FnZT10cnVlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBkYXRhLmFwcGVuZChcInVpZFwiLCB1aWQpXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiZXZlbnRcIiwgZXZlbnQpXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiY2hhbm5lbHNcIiwgY2hhbm5lbHMpXG4gICAgICAgIGRhdGEuYXBwZW5kKFwic2VuZGVyXCIsIHNlbmRlcilcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJyZWNlaXZlclwiLCByZWNlaXZlcilcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJ0eXBlXCIsIHR5cGUpXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiY29udGVudFwiLCBjb250ZW50KVxuICAgICAgICBkYXRhLmFwcGVuZChcInRpbWVzdGFtcFwiLCB0aW1lc3RhbXApXG4gICAgICAgIGRhdGEuYXBwZW5kKFwiaXNTYXZlTWVzc2FnZVwiLCBpc1NhdmVNZXNzYWdlKVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2NyZWF0ZV90ZXh0X21lc3NhZ2VcIiwgeyBtZXRob2Q6IFwiUE9TVFwiLCBib2R5OiBkYXRhIH0pXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2VcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICByZXR1cm4geyBvazogZmFsc2UgfVxuICAgICAgICB9IFxuICAgIH1cblxuICAgIGNyZWF0ZUF1ZGlvTWVzc2FnZSA9IGFzeW5jICh1aWQsIGZpbGUsIG1lc3NhZ2VUZW1wRWxlbWVudCwgcHJvZ3Jlc3NDYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3VpZCcsIHVpZCkgXG4gICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSlcblxuICAgICAgICB0cnkgeyAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jcmVhdGVfYXVkaW9fbWVzc2FnZScsIGRhdGEsIHtcbiAgICAgICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3NFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50Q29tcGxldGVkID0gTWF0aC5yb3VuZCgocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbCkgXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQ2FsbGJhY2sobWVzc2FnZVRlbXBFbGVtZW50LCBwZXJjZW50Q29tcGxldGVkKSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSAgXG4gICAgICAgICAgICBwcm9ncmVzc0NhbGxiYWNrKG1lc3NhZ2VUZW1wRWxlbWVudCwgMTAwKSBcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9IGNhdGNoKGUpIHsgIFxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgICB9XG4gICAgfSBcblxuICAgIGNyZWF0ZUltYWdlTWVzc2FnZSA9IGFzeW5jICh1aWQsIGZpbGUsIGV4dGVuc2lvbiwgbWVzc2FnZVRlbXBFbGVtZW50LCBwcm9ncmVzc0NhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBkYXRhLmFwcGVuZCgndWlkJywgdWlkKSBcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKVxuICAgICAgICBkYXRhLmFwcGVuZCgnZXh0ZW5zaW9uJywgZXh0ZW5zaW9uKVxuXG4gICAgICAgIHRyeSB7ICAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9jcmVhdGVfaW1hZ2VfbWVzc2FnZScsIGRhdGEsIHtcbiAgICAgICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3NFdmVudCkgeyAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRDb21wbGV0ZWQgPSBNYXRoLnJvdW5kKChwcm9ncmVzc0V2ZW50LmxvYWRlZCAqIDEwMCkgLyBwcm9ncmVzc0V2ZW50LnRvdGFsKSBcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NDYWxsYmFjayhtZXNzYWdlVGVtcEVsZW1lbnQsIHBlcmNlbnRDb21wbGV0ZWQpIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pICBcbiAgICAgICAgICAgIHByb2dyZXNzQ2FsbGJhY2sobWVzc2FnZVRlbXBFbGVtZW50LCAxMDApIFxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH0gY2F0Y2goZSkgeyAgXG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IDUwMCB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRVc2VyTGFzdFNlZW4gPSBhc3luYyAodWlkLCBpZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2dldF91c2VyX2xhc3Rfc2Vlbi8ke3VpZH0vJHtpZH1gLCB7IG1ldGhvZDogXCJHRVRcIiB9KSBcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG9rOiBmYWxzZSB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVNZXNzYWdlID0gYXN5bmMgKHVpZCwgc2VuZGVyLCByZWNlaXZlciwgdHlwZSwgY29udGVudCwgdGltZXN0YW1wLCBzYXZlTWVzc2FnZXMpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGRhdGEuYXBwZW5kKFwidWlkXCIsIHVpZClcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJzZW5kZXJcIiwgc2VuZGVyKVxuICAgICAgICBkYXRhLmFwcGVuZChcInJlY2VpdmVyXCIsIHJlY2VpdmVyKVxuICAgICAgICBkYXRhLmFwcGVuZChcInR5cGVcIiwgdHlwZSlcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJjb250ZW50XCIsIGNvbnRlbnQpXG4gICAgICAgIGRhdGEuYXBwZW5kKFwidGltZXN0YW1wXCIsIHRpbWVzdGFtcCkgXG4gICAgICAgIGRhdGEuYXBwZW5kKFwic2F2ZU1lc3NhZ2VzXCIsIHNhdmVNZXNzYWdlcykgIFxuIFxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9tZXNzYWdlXCIsIHsgbWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSB9KVxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlXG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgcmV0dXJuIHsgb2s6IGZhbHNlIH1cbiAgICAgICAgfSBcbiAgICB9XG5cbiAgICBkZWxldGVNZXNzYWdlID0gYXN5bmMgKHVpZCwgaWQpID0+IHsgXG4gICAgICAgIHRyeSB7IFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL21lc3NhZ2UvJHt1aWR9LyR7aWR9YCwgeyBtZXRob2Q6IFwiREVMRVRFXCIgfSlcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG9rOiBmYWxzZSB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgY3JlYXRlSW1hZ2UgPSBhc3luYyAodWlkLCBzZW5kZXIsIGZpbGUsIHByb2dyZXNzQ2lyY2xlKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgICAgICBkYXRhLmFwcGVuZCgndWlkJywgdWlkKVxuICAgICAgICBkYXRhLmFwcGVuZCgnc2VuZGVyJywgc2VuZGVyKVxuICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpXG5cbiAgICAgICAgdHJ5IHsgIFxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvaW1hZ2UnLCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogZnVuY3Rpb24gKHByb2dyZXNzRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudENvbXBsZXRlZCA9IE1hdGgucm91bmQoKHByb2dyZXNzRXZlbnQubG9hZGVkICogMTAwKSAvIHByb2dyZXNzRXZlbnQudG90YWwpOyAgXG4gICAgICAgICAgICAgICAgICAgIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNob2Zmc2V0XCIsIGBjYWxjKDI1MS4ycHggLSAoMjUxLjJweCAqICR7cGVyY2VudENvbXBsZXRlZCAtIDF9KSAvIDEwMClgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSAgXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfSBjYXRjaChlKSB7ICAgXG4gICAgICAgICAgICByZXR1cm4geyBzdGF0dXM6IDUwMCB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVBdWRpbyA9IGFzeW5jICh1aWQsIHNlbmRlciwgZmlsZSwgcHJvZ3Jlc3NDaXJjbGUpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGRhdGEuYXBwZW5kKCd1aWQnLCB1aWQpXG4gICAgICAgIGRhdGEuYXBwZW5kKCdzZW5kZXInLCBzZW5kZXIpXG4gICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSlcblxuICAgICAgICB0cnkgeyAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hdWRpbycsIGRhdGEsIHtcbiAgICAgICAgICAgICAgICBvblVwbG9hZFByb2dyZXNzOiBmdW5jdGlvbiAocHJvZ3Jlc3NFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50Q29tcGxldGVkID0gTWF0aC5yb3VuZCgocHJvZ3Jlc3NFdmVudC5sb2FkZWQgKiAxMDApIC8gcHJvZ3Jlc3NFdmVudC50b3RhbCk7ICBcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgYGNhbGMoMjUxLjJweCAtICgyNTEuMnB4ICogJHtwZXJjZW50Q29tcGxldGVkIC0gMX0pIC8gMTAwKWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pICBcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9IGNhdGNoKGUpIHsgIFxuICAgICAgICAgICAgcmV0dXJuIHsgc3RhdHVzOiA1MDAgfVxuICAgICAgICB9XG4gICAgfSBcblxuICAgIHNldFNlZW5NZXNzYWdlID0gYXN5bmMgKHVpZCwgc2VuZGVyLCBpZCkgPT4ge1xuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3VpZCcsIHVpZClcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3NlbmRlcicsIHNlbmRlcilcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2lkJywgaWQpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvc2V0X3NlZW5fbWVzc2FnZVwiLCB7IG1ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEgfSlcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG9rOiBmYWxzZSB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRQYWlyS2V5ID0gYXN5bmMgKHVpZCwgc2VuZGVyLCBwdWJsaWNLZXksIHByaXZhdGVLZXkpID0+IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGRhdGEuYXBwZW5kKCd1aWQnLCB1aWQpXG4gICAgICAgIGRhdGEuYXBwZW5kKCdzZW5kZXInLCBzZW5kZXIpXG4gICAgICAgIGRhdGEuYXBwZW5kKCdwdWJsaWNLZXknLCBwdWJsaWNLZXkpXG4gICAgICAgIGRhdGEuYXBwZW5kKCdwcml2YXRlS2V5JywgcHJpdmF0ZUtleSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9zZXRfcGFpcmtleVwiLCB7IG1ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEgfSlcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG9rOiBmYWxzZSB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQcml2YXRlS2V5ID0gYXN5bmMgKHVpZCwgc2VuZGVyKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvZ2V0X3ByaXZhdGVfa2V5LyR7dWlkfS8ke3NlbmRlcn1gLCB7IG1ldGhvZDogXCJHRVRcIiB9KSBcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG9rOiBmYWxzZSB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNZXNzYWdlcyA9IGFzeW5jICh1aWQsIHNlbmRlciwgcmVjZWl2ZXIsIHBhZ2UsIHBhZ2VTaXplLCB0b1JldmVyc2UgPSAwKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvZ2V0X21lc3NhZ2VzLyR7dWlkfS8ke3NlbmRlcn0vJHtyZWNlaXZlcn0vJHtwYWdlfS8ke3BhZ2VTaXplfS8ke3RvUmV2ZXJzZX1gLCB7IG1ldGhvZDogXCJHRVRcIiB9KSBcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG9rOiBmYWxzZSB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMYXN0TWVzc2FnZXMgPSBhc3luYyAodWlkLCBpZCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2dldF9sYXN0X21lc3NhZ2VzLyR7dWlkfS8ke2lkfWAsIHsgbWV0aG9kOiBcIkdFVFwiIH0pICBcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG9rOiBmYWxzZSB9XG4gICAgICAgIH1cbiAgICB9IFxuXG4gICAgZ2V0VXNlcnMgPSBhc3luYyAodWlkKSA9PiB7XG4gICAgICAgIHRyeSB7ICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9nZXRfdXNlcnMvJHt1aWR9YCwgeyBtZXRob2Q6IFwiR0VUXCIgfSkgXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2VcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICByZXR1cm4geyBvazogZmFsc2UgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RmlyZWJhc2VDb25maWcgPSBhc3luYyAodWlkKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvZ2V0X2ZpcmViYXNlX2NvbmZpZy8ke3VpZH1gLCB7IG1ldGhvZDogXCJHRVRcIiB9KSBcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IG9rOiBmYWxzZSB9XG4gICAgICAgIH1cbiAgICB9IFxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiX2RlZmF1bHQiLCJfQ29udHJvbGxlciIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiX2dldFByb3RvdHlwZU9mIiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiYmluZCIsIl9zZXRQcm90b3R5cGVPZiIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJvcGVydHlLZXkiLCJfZGVmaW5lUHJvcGVydHkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIlV0aWxzIiwiU2VydmljZSIsIkZGbXBlZyIsInRvQmxvYlVSTCIsIlZpZXdlciIsIlB1c2hlciIsIkNyeXB0b0pTIiwiV2F2ZVN1cmZlciIsIlJlY29yZFBsdWdpbiIsIlRpbWVBZ28iLCJoZWljMmFueSIsImVuIiwiTWVzc2FnZVR5cGUiLCJnZXQiLCJURVhUIiwiSU1BR0UiLCJHSUYiLCJfdGhpcyIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY29uY2F0IiwiX2NhbGxlZTIiLCJyZXNwb25zZSIsInVzZXJzIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiYWRkRGVmYXVsdExvY2FsZSIsImxvZ1RvQ29uc29sZSIsInB1c2hlciIsImNsdXN0ZXIiLCJhdXRoRW5kcG9pbnQiLCJhdXRoIiwicGFyYW1zIiwidWlkVmFsdWUiLCJwYWdlIiwicGFnZVNpemUiLCJzZXJ2aWNlIiwidGltZUFnbyIsImF1ZGlvQmxvYiIsImlzVm9pY2VSZWNvcmRpbmciLCJpc0Nsb3NlVm9pY2VSZWNvcmRpbmciLCJpc1JlY2VpdmVkRmlyc3RNZXNzYWdlIiwiaXNMb2NrSW5maW5pdGVTY3JvbGxpbmciLCJ1c2Vyc09ubGluZU1hcCIsIk1hcCIsInVzZXJzTWFwIiwidG9TZW5kSW1hZ2VzTWFwIiwiZmZtcGVnIiwidmlld2VyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZvcndhcmRVc2VyTWVzc2FnZVR5cGUiLCJmb3J3YXJkVXNlck1lc3NhZ2VDb250ZW50IiwiZm9yd2FyZFVzZXJNZXNzYWdlQmxvYiIsImZvcndhcmRVc2VyTWVzc2FnZUlucHV0IiwiZm9yd2FyZFVzZXJNZXNzYWdlV2lkdGgiLCJmb3J3YXJkVXNlck1lc3NhZ2VIZWlnaHQiLCJmb3J3YXJkVXNlck1lc3NhZ2VNaW1lVHlwZSIsImZvcndhcmRVc2VyTWVzc2FnZUV4dGVuc2lvbiIsImZvcndhcmRVc2VyTWVzc2FnZU91dHB1dCIsInQwIiwidDEiLCJ0MiIsInQzIiwiY29yZVVSTCIsIndhc21VUkwiLCJsb2FkIiwiZ2V0VXNlcnMiLCJvayIsImpzb24iLCJzZXREYXJrTW9kZVRvZ2dsZSIsInNldEVtb2ppUGlja2VyRWxlbWVudCIsInNldEltYWdlQnV0dG9uQ2xpY2siLCJzZXRPbkNoYW5nZUltYWdlRmlsZUlucHV0Iiwic2V0U2VuZFRleHRCdXR0b25DbGljayIsInNldFNlbmRWb2ljZUJ1dHRvbkNsaWNrIiwic2V0U2VuZEltYWdlQnV0dG9uQ2xpY2siLCJzZXRVc2VyUHVzaGVyUHJlc2VuY2VDaGFubmVsIiwic2V0U2VuZE1lc3NhZ2VDaGF0Ym94SW5wdXRLZXlEb3duIiwic2V0Vm9pY2VDaGF0UmVjb3JkaW5nIiwic2V0Q2hhdGJveEV2ZW50TGlzdGVuZXIiLCJfcmVmMiIsIl9jYWxsZWUiLCJ1c2VyIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInNldCIsImlkIiwic2V0Rm9yd2FyZFVzZXJNZXNzYWdlIiwic2V0U2lkZWJhclVzZXJDbGlja0V2ZW50Iiwic2V0VXNlclB1c2hlck1lc3NhZ2VzQ2hhbm5lbCIsIl94Iiwic2V0RW5jcnlwdGlvbkRldGFpbHMiLCJzZXRVc2VyTGFzdE1lc3NhZ2UiLCJzZXRDaGF0Ym94SW5maW5pdGVTY3JvbGxpbmciLCJfY2FsbGVlMyIsInJhbmRvbUJ5dGVzIiwicGFzc3BocmFzZSIsImtleXBhaXIiLCJwdWJsaWNrZXkiLCJwcml2YXRla2V5IiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwicGFzc3BocmFzZVZhbHVlIiwibGliIiwiV29yZEFycmF5IiwicmFuZG9tIiwidG9TdHJpbmciLCJlbmMiLCJIZXgiLCJnZW5lcmF0ZUVuY3J5cHRpb25LZXlQYWlyIiwiYXJyYXlCdWZmZXJUb0Jhc2U2NCIsInB1YmxpY0tleSIsIkFFUyIsImVuY3J5cHQiLCJwcml2YXRlS2V5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY3VycmVudFVzZXJQdWJsaWNrZXkiLCJiYXNlNjRUb0FycmF5QnVmZmVyIiwicHVibGlja2V5VmFsdWUiLCJjdXJyZW50VXNlclByaXZhdGVrZXkiLCJkZWNyeXB0IiwicHJpdmF0ZWtleVZhbHVlIiwiVXRmOCIsIl9yZWY0IiwiX2NhbGxlZTUiLCJjaGF0Ym94IiwiY2hhbm5lbCIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInN1YnNjcmliZSIsImN1cnJlbnRVc2VyVmFsdWUiLCJfcmVmNSIsIl9jYWxsZWU0IiwiZGF0YSIsImNvbnRlbnQiLCJpc1NlZW4iLCJfSlNPTiRwYXJzZSIsInNlbmRlciIsInJlY2VpdmVyIiwibWVzc2FnZURhdGEiLCJtZXNzYWdlRWxlbWVudCIsImZpcnN0bmFtZSIsIl9maXJzdG5hbWUiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJKU09OIiwicGFyc2UiLCJhdG9iIiwiZGVjcnlwdE1lc3NhZ2UiLCJ1c2VyVG9DaGF0SWQiLCJjcmVhdGVJbmNvbWluZ01lc3NhZ2VUZXh0RWxlbWVudCIsInVzZXJEZXRhaWxzIiwiYXZhdGFyIiwidGltZXN0YW1wIiwiQVVESU8iLCJjcmVhdGVJbmNvbWluZ01lc3NhZ2VWb2ljZUVsZW1lbnQiLCJjcmVhdGVJbmNvbW1pbmdNZXNzYWdlSW1hZ2VFbGVtZW50Iiwic2V0Vmlld2VySnNJbWFnZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHJpbmdpZnkiLCJjb3B5VGV4dE1lc3NhZ2VDYWxsYmFjayIsImZvcndhcmRNZXNzYWdlQ2FsbGJhY2siLCJjaGF0Ym94U2Nyb2xsVG9Cb3R0b20iLCJhcHBlbmRDaGlsZCIsInJlT3JkZXJMYXN0Rm91ckNoYXRib3hFbGVtZW50cyIsInNldENoYXRib3hNZXNzYWdlQXZhdGFySGlkZGVuIiwic2V0Q2hhdGJveERpdmlkZXJUaW1lc3RhbXAiLCJzZXRDaGF0Ym94TWVzc2FnZUJvcmRlckFuZE1hcmdpbiIsInNldFVzZXJMYXN0TWVzc2FnZUNvbnRlbnQiLCJzZXRVc2VyTGFzdE1lc3NhZ2VUaW1lc3RhbXAiLCJzZXRVc2VyTGFzdE1lc3NhZ2VUaW1lQWdvIiwicmVPcmRlclVzZXJzTGlzdElmTmV3TWVzc2FnZUlzQmVpbmdTZW50T3JSZWNlaXZlZCIsIl94MyIsInNsZWVwIiwiX3gyIiwibXlUaGlzIiwibWVtYmVycyIsImVhY2giLCJtZW1iZXIiLCJpbmZvIiwidXNlck9ubGluZVN0YXR1cyIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInVzZXJUb0NoYXRPbmxpbmVTdGF0dXMiLCJ1c2VyVG9DaGF0T25saW5lVGV4dCIsInRleHRDb250ZW50IiwiX3JlZjYiLCJfY2FsbGVlNyIsInVzZXJFbGVtZW50IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3Iiwib25jbGljayIsIl9jYWxsZWU2IiwiX2NhbGxlZTYkIiwiX2NvbnRleHQ2IiwibGFzdG5hbWUiLCJ1c2VyVG9jaGF0UHVibGlja2V5IiwiaXNTaWRlYmFyVXNlckNsaWNrT25jZSIsInNldFVzZXJUb0NoYXROYW1lIiwic2V0VXNlclRvQ2hhdEF2YXRhciIsInNldFNpZGViYXJVc2VyVG9nZ2xlRm9yTW9iaWxlIiwic2V0TWFpbkNoYXRib3giLCJzZXREZWZhdWx0VmFsdWVzIiwic2V0Q29udmVyc2F0aW9ucyIsInNldFVzZXJUb0NoYXRPbmxpbmVTdGF0dXMiLCJfeDQiLCJ2b2ljZUNoYXRSZWNvcmRCdXR0b24iLCJfY2FsbGVlMTAiLCJ3YXZlRm9ybUNvbnRhaW5lciIsIndhdmVzdXJmZXIiLCJNQVhfUkVDT1JESU5HX0xJTUlUIiwiY2hhdGJveE1lc3NhZ2VJbnB1dCIsInNlbmRUZXh0QnV0dG9uIiwic2VuZFZvaWNlQnV0dG9uIiwidm9pY2VDaGF0UmVjb3JkSW5wdXQiLCJ2b2ljZUNoYXRSZWNvcmRUaW1lIiwidm9pY2VDaGF0UmVjb3JkU3RhcnQiLCJ2b2ljZUNoYXRSZWNvcmRTdmdQbGF5Iiwidm9pY2VDaGF0UmVjb3JkU3ZnU3RvcCIsInZvaWNlQ2hhdFJlY29yZERlbGV0ZSIsInZvaWNlQ2hhdFJlY29yZENsb3NlIiwicmVjb3JkIiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJzaXplIiwiY29udGFpbmVyIiwid2F2ZUNvbG9yIiwiaGlkZVNjcm9sbGJhciIsImF1dG9DZW50ZXIiLCJoZWlnaHQiLCJiYXJIZWlnaHQiLCJiYXJXaWR0aCIsImN1cnNvcldpZHRoIiwiZW1wdHkiLCJyZWdpc3RlclBsdWdpbiIsInNjcm9sbGluZ1dhdmVmb3JtIiwicmVuZGVyUmVjb3JkZWRBdWRpbyIsIm9uIiwiX3JlZjkiLCJfY2FsbGVlOCIsImJsb2IiLCJyZWNvcmRlZFVybCIsIl9jYWxsZWU4JCIsIl9jb250ZXh0OCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRlc3Ryb3kiLCJwcm9ncmVzc0NvbG9yIiwidXJsIiwicGxheVBhdXNlIiwiY3VycmVudFRpbWUiLCJyZW1haW5pbmdUaW1lIiwiTWF0aCIsImFicyIsImdldER1cmF0aW9uIiwibWludXRlcyIsImZsb29yIiwic2Vjb25kcyIsImZvcm1hdHRlZFRpbWUiLCJwYWRTdGFydCIsInNlZWtUbyIsIl94NSIsInRpbWUiLCJwYXJzZUludCIsImNsaWNrIiwibWFwIiwiam9pbiIsInN0b3BSZWNvcmRpbmciLCJfY2FsbGVlOSIsIl9jYWxsZWU5JCIsIl9jb250ZXh0OSIsInN0YXJ0UmVjb3JkaW5nIiwidW5IaWRlTWVkaWFHcm91cCIsImhpZGVNZWRpYUdyb3VwIiwiX2NhbGxlZTExIiwibWVzc2FnZXMiLCJfbWVzc2FnZXMkaSIsIl9KU09OJHBhcnNlMiIsIl9tZXNzYWdlRGF0YSIsIl9maXJzdG5hbWUyIiwiX2NhbGxlZTExJCIsIl9jb250ZXh0MTEiLCJnZXRMYXN0TWVzc2FnZXMiLCJ0NCIsInQ1Iiwic29ydFVzZXJzTGlzdEJhc2VPbkxhc3RNZXNzYWdlVGltZXN0YW1wIiwib25ibHVyIiwib25mb2N1cyIsIl9jYWxsZWUxMyIsIl9jYWxsZWUxMyQiLCJfY29udGV4dDEzIiwib25zY3JvbGwiLCJfY2FsbGVlMTIiLCJzY3JvbGxUb3AiLCJmbGV4R3Jvd0NoaWxkIiwiaW5kZXgiLCJmaXJzdENoaWxkIiwibG9hZGVyIiwiX21lc3NhZ2VzJGkyIiwiX0pTT04kcGFyc2UzIiwiaW1nQ2hlY2siLCJfbWVzc2FnZUVsZW1lbnQiLCJfbWVzc2FnZURhdGEyIiwiX2NhbGxlZTEyJCIsIl9jb250ZXh0MTIiLCJyZW1vdmVDaGlsZCIsImNoaWxkcmVuIiwiY29udGFpbnMiLCJjcmVhdGVMb2FkZXJFbGVtZW50IiwicHJlcGVuZCIsImdldE1lc3NhZ2VzIiwiY3JlYXRlT3V0Z29pbmdNZXNzYWdlVGV4dEVsZW1lbnQiLCJjcmVhdGVPdXRnb2luZ01lc3NhZ2VWb2ljZUVsZW1lbnQiLCJjcmVhdGVPdXRnb2luZ01lc3NhZ2VJbWFnZUVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3JjIiwic2V0VGltZW91dCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImZvcndhcmRVc2VyU3ZnU2VudCIsImZvcndhcmRVc2VyU3ZnRGVmYXVsdCIsImZvcndhcmRVc2VyU3BhblRleHQiLCJmb3J3YWRVc2VyQnV0dG9uIiwiX2NhbGxlZTE0IiwiX2NhbGxlZTE0JCIsIl9jb250ZXh0MTQiLCJzZW5kVGV4dE1lc3NhZ2UiLCJzZW5kVm9pY2VNZXNzYWdlIiwic2VuZEltYWdlTWVzc2FnZSIsImlubmVySFRNTCIsIl9yZWYxNSIsIl9jYWxsZWUxNSIsIl9jYWxsZWUxNSQiLCJfY29udGV4dDE1IiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiX3g2IiwiaW5wdXQiLCJ3aWR0aCIsIm1pbWVUeXBlIiwiZXh0ZW5zaW9uIiwib3V0cHV0Iiwic2V0Rm9yd2FyZFVzZXJVaURlZmF1bHRzIiwiX2NhbGxlZTE2IiwiY2xlYXJDaGF0Ym94RWxlbWVudCIsImhhc01lc3NhZ2VzIiwiX21lc3NhZ2VzJGkzIiwiX0pTT04kcGFyc2U0IiwiX21lc3NhZ2VFbGVtZW50MiIsIl9tZXNzYWdlRGF0YTMiLCJfY2FsbGVlMTYkIiwiX2NvbnRleHQxNiIsIl9jbGVhckNoYXRib3hFbGVtZW50IiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmQiLCJzZXRJbnRyb2R1Y3Rpb25FbGVtZW50IiwidXNlclRvQ2hhdE5hbWUiLCJ1c2VyVG9DaGF0QXZhdGFyIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJpc09ubGluZSIsIl9jYWxsZWUxNyIsIl9jYWxsZWUxNyQiLCJfY29udGV4dDE3Iiwic2V0VXNlckxhc3RTZWVuIiwiX3JlZjE4IiwiX2NhbGxlZTE4IiwiX2NhbGxlZTE4JCIsIl9jb250ZXh0MTgiLCJnZXRVc2VyTGFzdFNlZW4iLCJmb3JtYXQiLCJfeDciLCJ0aGVtZVRvZ2dsZURhcmtJY29uIiwidGhlbWVUb2dnbGVMaWdodEljb24iLCJlbW9qaVBpY2tlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJtYXRjaE1lZGlhIiwibWF0Y2hlcyIsImRvY3VtZW50RWxlbWVudCIsInRoZW1lVG9nZ2xlQnRuIiwidG9nZ2xlIiwic2V0SXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXJldFBvc2l0aW9uIiwic2F2ZUNhcmV0UG9zaXRpb24iLCJzdWJzdHJpbmciLCJkZXRhaWwiLCJ1bmljb2RlIiwicmVzdG9yZUNhcmV0UG9zaXRpb24iLCJnZXRVc2VyQWdlbnRQbGF0Zm9ybVR5cGUiLCJtYWluQ2hhdGJveCIsIm1haW5DaGF0Ym94SW50cm8iLCJfcmVmMTkiLCJfY2FsbGVlMTkiLCJtZXNzYWdlIiwib2xkTWVzc2FnZUVsZW1lbnQiLCJfYXJnczE5IiwiX2NhbGxlZTE5JCIsIl9jb250ZXh0MTkiLCJ1bmRlZmluZWQiLCJyZXBsYWNlQ2hpbGQiLCJjcmVhdGVUZXh0TWVzc2FnZSIsIl94OCIsIl94OSIsIl94MTAiLCJfeDExIiwiX3gxMiIsIl94MTMiLCJfcmVmMjAiLCJfY2FsbGVlMjAiLCJlbmNyeXB0ZWRTZW5kZXJUZXh0TWVzc2FnZSIsImVuY3J5cHRlZFJlY2VpdmVyVGV4dE1lc3NhZ2UiLCJfY2FsbGVlMjAkIiwiX2NvbnRleHQyMCIsIkRhdGUiLCJub3ciLCJlbmNyeXB0TWVzc2FnZSIsImJ0b2EiLCJzZXRTZW50TWVzc2FnZSIsIl94MTQiLCJfeDE1IiwiX3JlZjIxIiwiX2NhbGxlZTIxIiwibWVzc2FnZVRlbXBFbGVtZW50IiwiZmlsZSIsIl9jYWxsZWUyMSQiLCJfY29udGV4dDIxIiwiVWludDhBcnJheSIsImFycmF5QnVmZmVyIiwid3JpdGVGaWxlIiwiZXhlYyIsIkZpbGUiLCJyZWFkRmlsZSIsInQ2IiwidDciLCJjcmVhdGVBdWRpb01lc3NhZ2UiLCJwcm9ncmVzc1N2Z0VsZW1lbnRDYWxsYmFjayIsInN0YXR1cyIsIl94MTYiLCJfeDE3IiwiX3JlZjIyIiwiX2NhbGxlZTIyIiwiX2NhbGxlZTIyJCIsIl9jb250ZXh0MjIiLCJjcmVhdGVJbWFnZU1lc3NhZ2UiLCJfeDE4IiwiX3gxOSIsIl94MjAiLCJfeDIxIiwiX3gyMiIsIl94MjMiLCJfeDI0IiwiX3gyNSIsImltYWdlRmlsZUlucHV0Iiwib25jaGFuZ2UiLCJfcmVmMjMiLCJfY2FsbGVlMjMiLCJmaWxlcyIsImNoYXRib3hWb2ljZUlucHV0IiwiY2hhdGJveEltYWdlSW5wdXQiLCJzZW5kSW1hZ2VCdXR0b24iLCJfbG9vcCIsIl9jYWxsZWUyMyQiLCJfY29udGV4dDI0IiwidGFyZ2V0IiwiaW1hZ2VDb250YWluZXIiLCJpbWciLCJyZWFkZXIiLCJjbG9zZUJ1dHRvbiIsIl9sb29wJCIsIl9jb250ZXh0MjMiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJtYXJnaW4iLCJvYmplY3RGaXQiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZXZlbnQiLCJmYWtlSW1nIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsInRvcCIsInJpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJjdXJzb3IiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJfeDI2IiwiaW1hZ2VJbnB1dEJ1dHRvbiIsIl9jYWxsZWUyNCIsIl9jYWxsZWUyNCQiLCJfY29udGV4dDI1IiwiaW5uZXJUZXh0IiwidHJpbSIsImlzRW1wdHlPclNwYWNlcyIsIl9jYWxsZWUyNSIsIl9jYWxsZWUyNSQiLCJfY29udGV4dDI2IiwiaXNUb3RhbEltYWdlc1RvU2VuZE5vdEV4Y2VlZGVkIiwiaXNJbWFnZUZpbGVzaXplTm90RXhjZWVkZWQiLCJmcm9tIiwiX3JlZjI2IiwiX2NhbGxlZTI2IiwiX2NhbGxlZTI2JCIsIl9jb250ZXh0MjciLCJzcGxpdCIsIk1ENSIsImdlbmVyYXRlUmFuZG9tU3RyaW5nIiwiX3gyNyIsIl94MjgiLCJvbmtleWRvd24iLCJfcmVmMjciLCJfY2FsbGVlMjciLCJfY2FsbGVlMjckIiwiX2NvbnRleHQyOCIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJfeDI5IiwiZm9yY2UiLCJpc1Njcm9sbGJhckF0Qm90dG9tIiwib2Zmc2V0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsQmVoYXZpb3IiLCJzdHIiLCJtYXRjaCIsIm1zIiwiY3VycmVudFVzZXIiLCJ1aWQiLCJpbnB1dFBhc3N3b3JkIiwiaW5wdXRQYXNzd29yZElkIiwiZXllU3ZnIiwiZXllU3ZnRGVmYXVsdCIsImlzU2hvdyIsInN0YXJ0U3RpbXVsdXNBcHAiLCJhcHAiLCJyZXF1aXJlIiwiY29udGV4dCIsIkJvd3NlciIsIkRyb3Bkb3duIiwiX1V0aWxzIiwiX3JlZiIsImNodW5rU2l6ZSIsImltcG9ydGVkUHVibGljS2V5IiwiZW5jb2RlciIsImVuY29kZWRNZXNzYWdlIiwiY2h1bmtzIiwiZW5jcnlwdGVkQ2h1bmtzIiwidG90YWxMZW5ndGgiLCJjb25jYXRlbmF0ZWRFbmNyeXB0ZWRNZXNzYWdlIiwiX2FyZ3MiLCJjcnlwdG8iLCJzdWJ0bGUiLCJpbXBvcnRLZXkiLCJoYXNoIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJhbGwiLCJjaHVuayIsInJlZHVjZSIsImFjYyIsImJ5dGVMZW5ndGgiLCJidWZmZXIiLCJiYXNlNjRNZXNzYWdlIiwiZW5jcnlwdGVkTWVzc2FnZSIsImltcG9ydGVkUHJpdmF0ZUtleSIsImRlY3J5cHRlZENodW5rcyIsImNvbmNhdGVuYXRlZERlY3J5cHRlZE1lc3NhZ2UiLCJkZWNvZGVyIiwiX2FyZ3MyIiwiVGV4dERlY29kZXIiLCJkZWNvZGUiLCJrZXlQYWlyIiwiZ2VuZXJhdGVLZXkiLCJtb2R1bHVzTGVuZ3RoIiwicHVibGljRXhwb25lbnQiLCJleHBvcnRLZXkiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsInVpbnQ4QXJyYXkiLCJiaW5hcnkiLCJsZW4iLCJmcm9tQ2hhckNvZGUiLCJiYXNlNjQiLCJiaW5hcnlTdHJpbmciLCJieXRlcyIsImNoYXJDb2RlQXQiLCJkYXlzT2ZXZWVrIiwiZGF0ZSIsInRvZGF5Iiwic3RhcnRPZlRvZGF5IiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRUaW1lIiwic3RhcnRPZlllc3RlcmRheSIsIm9uZVdlZWtBZ28iLCJkYXRlV2l0aG91dFRpbWUiLCJnZXREYXkiLCJ1c2Vyc0xpc3QiLCJOIiwibWlsbGlzZWNvbmRzIiwiZGl2Iiwic2VsZWN0aW9uIiwiZ2V0U2VsZWN0aW9uIiwicmFuZ2UiLCJnZXRSYW5nZUF0IiwicHJlQ2FyZXRSYW5nZSIsImNsb25lUmFuZ2UiLCJzZWxlY3ROb2RlQ29udGVudHMiLCJzZXRFbmQiLCJlbmRDb250YWluZXIiLCJlbmRPZmZzZXQiLCJjcmVhdGVSYW5nZSIsIndhbGtlciIsImNyZWF0ZVRyZWVXYWxrZXIiLCJOb2RlRmlsdGVyIiwiU0hPV19URVhUIiwiY3VycmVudE5vZGUiLCJuZXh0Tm9kZSIsImN1cnJlbnRPZmZzZXQiLCJub2RlTGVuZ3RoIiwic2V0U3RhcnQiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImJyb3dzZXIiLCJnZXRQYXJzZXIiLCJ1c2VyQWdlbnQiLCJwYXJzZWRSZXN1bHQiLCJwbGF0Zm9ybSIsImdyb3VwIiwidXNlcnNFbGVtZW50cyIsInNvcnQiLCJiIiwidGltZXN0YW1wQSIsImdldEF0dHJpYnV0ZSIsInRpbWVzdGFtcEIiLCJ0b3RhbEZpbGVzIiwiTUFYX0lNQUdFU19VUExPQUQiLCJ0aXRsZSIsInNob3dBbGVydE1lc3NhZ2UiLCJpbWFnZXMiLCJ0b09yZGluYWwiLCJudW0iLCJpc0ludGVnZXIiLCJzdWZmaXhlcyIsIk1BWF9TSVpFX0lOX0JZVEVTIiwiX2ltYWdlcyRpIiwiX3NsaWNlZFRvQXJyYXkiLCJmaWxlc2l6ZSIsInJvdW5kIiwiYWxlcnRNZXNzYWdlQ29udGFpbmVyIiwiYWxlcnRNZXNzYWdlVGl0bGUiLCJhbGVydE1lc3NhZ2VDb250ZW50IiwicGVyY2VudENvbXBsZXRlZCIsInN2Z0NpcmNsZUVsZW1lbnQiLCJwcm9ncmVzc0NpcmNsZUVsZW1lbnQiLCJjaGF0Ym94QXJyYXkiLCJjaGF0Ym94RWxlbWVudHMiLCJ1c2VySWQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJlbGVtZW50cyIsImN1cnJlbnQiLCJhdmF0YXIxIiwiYXZhdGFyMiIsIm9wdGlvbnMiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJkaXZpZGVyRWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicHJldkRhdGUiLCJjdXJyZW50RGF0ZSIsImN1cnJlbnRMb2NhbGVEYXRlU3RyaW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGl2aWRlclRpbWVzdGFtcEVsZW1lbnQiLCJmb3JtYXR0ZWRUaW1lc3RhbXAiLCJmb3JtYXRUaW1lc3RhbXBJbnRvRGF5c09mV2VlayIsImNyZWF0ZURpdmlkZXJUaW1lc3RhbXBFbGVtZW50IiwiaW5zZXJ0QmVmb3JlIiwidmlld2VyanNDb250YWluZXIiLCJpbWFnZURpdiIsImxpIiwiY2hpbGROb2RlcyIsInVwZGF0ZSIsInNob3ciLCJ2aWV3IiwidXNlckxhc3RNZXNzYWdlIiwidXNlckxhc3RNZXNzYWdlVGltZUFnbyIsImlzVGltZXN0YW1wSXNHcmVhdGVyVGhhbk5taW51dGVzIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwicHJldlRpbWVzdGFtcCIsImNsZWFySW50ZXJ2YWwiLCJmbGV4Q29udGFpbmVyIiwicHJvZmlsZUltYWdlIiwibmFtZVBhcmFncmFwaCIsInRhYkluZGV4IiwiZW5jcnlwdGVkQ29udGFpbmVyIiwiZmxleElubmVyQ29udGFpbmVyIiwic3ZnSWNvbiIsImNyZWF0ZUVsZW1lbnROUyIsInBhdGgiLCJlbmNyeXB0ZWRUZXh0IiwibWVzc2FnZVRleHQiLCJsZWZ0Qm9yZGVyIiwiZGF0ZUVsZW1lbnQiLCJyaWdodEJvcmRlciIsIlNWR19OUyIsInN2ZyIsImJnQ2lyY2xlIiwicHJvZ3Jlc3NDaXJjbGUiLCJjb2xvclRoZW1lIiwibGVmdCIsInJlY29yZElucHV0Iiwic3RhcnRCdG4iLCJwbGF5U3ZnIiwicGxheVBhdGgiLCJzdG9wU3ZnIiwic3RvcFJlY3QiLCJ3YXZlZm9ybURpdiIsInRpbWVyIiwiZHVyYXRpb24iLCJwcm9ncmVzc1N2ZyIsImNyZWF0ZVByb2dyZXNzU3ZnRWxlbWV0IiwiZGl2Q29udGFpbmVyIiwib3ZlcmxheURpdiIsInBsYWNlbWVudCIsImlzSW5jb21pbmdNZXNzYWdlIiwiZ2V0Um9vdFBhcmVudCIsIm5vZGUiLCJwYXJlbnROb2RlIiwiY3JlYXRlRHJvcGRvd25FbGVtZW50IiwiZHJvcGRvd25EaXYiLCJkcm9wZG93biIsImJ1dHRvbnMiLCJsYWJlbCIsImljb25QYXRoIiwic3BsaWNlIiwiYnV0dG9uIiwiYnRuIiwiaWNvbiIsImNyZWF0ZVRleHROb2RlIiwiZm9yd2FyZEJ1dHRvblRyaWdnZXIiLCJfcmVzcG9uc2UiLCJfYmxvYiIsImhpZGUiLCJmZXRjaCIsIl9jcmVhdGVEcm9wZG93bkVsZW1lbiIsIl9jcmVhdGVEcm9wZG93bkVsZW1lbjIiLCJkcm9wZG93bkVsZW1lbnQiLCJtYWluRGl2Iiwic2VsZWN0Tm9uZURpdiIsImZsZXhEaXYiLCJtcjREaXYiLCJmbGV4SXRlbXNEaXYiLCJjaGF0TWVzc2FnZUNvbnRhaW5lciIsImNoYXRDb250ZW50IiwidGltZURpdiIsInRpbWVUZXh0Iiwic2V0TWVzc2FnZVRleHRFbGVtZW50VGltZUFnbyIsImRpdk9wdGlvbnMiLCJfVXRpbHMkY3JlYXRlVmVydGljYWwiLCJjcmVhdGVWZXJ0aWNhbFRocmVlRG90c09wdGlvbnNFbGVtZW50IiwiX1V0aWxzJGNyZWF0ZVZlcnRpY2FsMiIsInZvaWNlRWxlbWVudCIsImNyZWF0ZVZvaWNlTWVzc2FnZUVsZW1lbnQiLCJfVXRpbHMkY3JlYXRlVmVydGljYWwzIiwiX1V0aWxzJGNyZWF0ZVZlcnRpY2FsNCIsImltYWdlQ29udGVudCIsImNyZWF0ZUltYWdlTWVzc2FnZUVsZW1lbnQiLCJfVXRpbHMkY3JlYXRlVmVydGljYWw1IiwiX1V0aWxzJGNyZWF0ZVZlcnRpY2FsNiIsImlubmVyRGl2MSIsImF2YXRhckRpdkNvbnRhaW5lciIsImF2YXRhckRpdiIsImF2YXRhckltYWdlRGl2IiwiY2hhdENvbnRhaW5lciIsInRpbWVDb250YWluZXIiLCJfVXRpbHMkY3JlYXRlVmVydGljYWw3IiwiX1V0aWxzJGNyZWF0ZVZlcnRpY2FsOCIsIl9VdGlscyRjcmVhdGVWZXJ0aWNhbDkiLCJfVXRpbHMkY3JlYXRlVmVydGljYWwxMCIsImltYWdlRWxlbWVudCIsIl9VdGlscyRjcmVhdGVWZXJ0aWNhbDExIiwiX1V0aWxzJGNyZWF0ZVZlcnRpY2FsMTIiLCJheGlvcyIsIkZvcm1EYXRhIiwiYm9keSIsImNoYW5uZWxzIiwiaXNTYXZlTWVzc2FnZSIsIl9yZWYzIiwicHJvZ3Jlc3NDYWxsYmFjayIsInBvc3QiLCJvblVwbG9hZFByb2dyZXNzIiwicHJvZ3Jlc3NFdmVudCIsImxvYWRlZCIsInRvdGFsIiwic2F2ZU1lc3NhZ2VzIiwiX3gzMCIsIl9yZWY3IiwiX3gzMSIsIl94MzIiLCJfcmVmOCIsIl94MzMiLCJfeDM0IiwiX3gzNSIsIl94MzYiLCJfeDM3IiwiX3gzOCIsIl94MzkiLCJfeDQwIiwiX3JlZjEwIiwiX3g0MSIsIl94NDIiLCJfeDQzIiwiX3JlZjExIiwiX3g0NCIsIl94NDUiLCJfeDQ2IiwiX3g0NyIsIl9yZWYxMiIsIl94NDgiLCJfeDQ5IiwiX3JlZjEzIiwidG9SZXZlcnNlIiwiX2FyZ3MxMyIsIl94NTAiLCJfeDUxIiwiX3g1MiIsIl94NTMiLCJfeDU0IiwiX3JlZjE0IiwiX3g1NSIsIl94NTYiLCJfeDU3IiwiX3JlZjE2IiwiX3g1OCJdLCJzb3VyY2VSb290IjoiIn0=