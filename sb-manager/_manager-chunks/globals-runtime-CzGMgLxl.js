import { a as __toESM$1, n as __esmMin, t as __commonJSMin } from "./globals-runtime-XrdeG17s.js";
import { ct as require_react } from "./globals-runtime-DpF3al7J.js";
import { t as require_hastscript } from "./globals-runtime-DfPn-YQU.js";
//#region ../../node_modules/ts-dedent/esm/index.js
function dedent(templ) {
	var values = [];
	for (var _i = 1; _i < arguments.length; _i++) values[_i - 1] = arguments[_i];
	var strings = Array.from(typeof templ === "string" ? [templ] : templ);
	strings[strings.length - 1] = strings[strings.length - 1].replace(/\r?\n([\t ]*)$/, "");
	var indentLengths = strings.reduce(function(arr, str) {
		var matches = str.match(/\n([\t ]+|(?!\s).)/g);
		if (matches) return arr.concat(matches.map(function(match) {
			var _a, _b;
			return (_b = (_a = match.match(/[\t ]/g)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
		}));
		return arr;
	}, []);
	if (indentLengths.length) {
		var pattern_1 = new RegExp("\n[	 ]{" + Math.min.apply(Math, indentLengths) + "}", "g");
		strings = strings.map(function(str) {
			return str.replace(pattern_1, "\n");
		});
	}
	strings[0] = strings[0].replace(/^\r?\n/, "");
	var string = strings[0];
	values.forEach(function(value, i) {
		var endentations = string.match(/(?:^|\n)( *)$/);
		var endentation = endentations ? endentations[1] : "";
		var indentedValue = value;
		if (typeof value === "string" && value.includes("\n")) indentedValue = String(value).split("\n").map(function(str, i) {
			return i === 0 ? str : "" + endentation + str;
		}).join("\n");
		string += indentedValue + strings[i + 1];
	});
	return string;
}
var init_esm = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/telejson/dist/chunk-EAFQLD22.mjs
function extractEventHiddenProperties(event) {
	const rebuildEvent = eventProperties.filter((value) => event[value] !== void 0).reduce((acc, value) => {
		acc[value] = event[value];
		return acc;
	}, {});
	if (event instanceof CustomEvent) for (const value of customEventSpecificProperties.filter((value2) => event[value2] !== void 0)) rebuildEvent[value] = event[value];
	return rebuildEvent;
}
var __create, __defProp, __getOwnPropDesc, __getOwnPropNames, __getProtoOf, __hasOwnProp, __commonJS, __copyProps, __toESM, eventProperties, customEventSpecificProperties;
var init_chunk_EAFQLD22 = __esmMin((() => {
	__create = Object.create;
	__defProp = Object.defineProperty;
	__getOwnPropDesc = Object.getOwnPropertyDescriptor;
	__getOwnPropNames = Object.getOwnPropertyNames;
	__getProtoOf = Object.getPrototypeOf;
	__hasOwnProp = Object.prototype.hasOwnProperty;
	__commonJS = (cb, mod) => function __require() {
		return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
	};
	__copyProps = (to, from, except, desc) => {
		if (from && typeof from === "object" || typeof from === "function") {
			for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
				get: () => from[key],
				enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
			});
		}
		return to;
	};
	__toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
		value: mod,
		enumerable: true
	}) : target, mod));
	eventProperties = [
		"bubbles",
		"cancelBubble",
		"cancelable",
		"composed",
		"currentTarget",
		"defaultPrevented",
		"eventPhase",
		"isTrusted",
		"returnValue",
		"srcElement",
		"target",
		"timeStamp",
		"type"
	];
	customEventSpecificProperties = ["detail"];
}));
//#endregion
//#region ../../node_modules/telejson/dist/index.mjs
function isObject(val) {
	return val != null && typeof val === "object" && Array.isArray(val) === false;
}
function getRawTag(value) {
	var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
	try {
		value[symToStringTag] = void 0;
		var unmasked = true;
	} catch (e) {}
	var result = nativeObjectToString.call(value);
	if (unmasked) if (isOwn) value[symToStringTag] = tag;
	else delete value[symToStringTag];
	return result;
}
function objectToString(value) {
	return nativeObjectToString2.call(value);
}
function baseGetTag(value) {
	if (value == null) return value === void 0 ? undefinedTag : nullTag;
	return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
function isObjectLike(value) {
	return value != null && typeof value == "object";
}
function isSymbol(value) {
	return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
function arrayMap(array, iteratee) {
	var index = -1, length = array == null ? 0 : array.length, result = Array(length);
	while (++index < length) result[index] = iteratee(array[index], index, array);
	return result;
}
function baseToString(value) {
	if (typeof value == "string") return value;
	if (isArray_default(value)) return arrayMap_default(value, baseToString) + "";
	if (isSymbol_default(value)) return symbolToString ? symbolToString.call(value) : "";
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
function isObject2(value) {
	var type = typeof value;
	return value != null && (type == "object" || type == "function");
}
function isFunction(value) {
	if (!isObject_default(value)) return false;
	var tag = baseGetTag_default(value);
	return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
function isMasked(func) {
	return !!maskSrcKey && maskSrcKey in func;
}
function toSource(func) {
	if (func != null) {
		try {
			return funcToString.call(func);
		} catch (e) {}
		try {
			return func + "";
		} catch (e) {}
	}
	return "";
}
function baseIsNative(value) {
	if (!isObject_default(value) || isMasked_default(value)) return false;
	return (isFunction_default(value) ? reIsNative : reIsHostCtor).test(toSource_default(value));
}
function getValue(object, key) {
	return object == null ? void 0 : object[key];
}
function getNative(object, key) {
	var value = getValue_default(object, key);
	return baseIsNative_default(value) ? value : void 0;
}
function eq(value, other) {
	return value === other || value !== value && other !== other;
}
function isKey(value, object) {
	if (isArray_default(value)) return false;
	var type = typeof value;
	if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) return true;
	return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
function hashClear() {
	this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
	this.size = 0;
}
function hashDelete(key) {
	var result = this.has(key) && delete this.__data__[key];
	this.size -= result ? 1 : 0;
	return result;
}
function hashGet(key) {
	var data = this.__data__;
	if (nativeCreate_default) {
		var result = data[key];
		return result === HASH_UNDEFINED ? void 0 : result;
	}
	return hasOwnProperty3.call(data, key) ? data[key] : void 0;
}
function hashHas(key) {
	var data = this.__data__;
	return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
}
function hashSet(key, value) {
	var data = this.__data__;
	this.size += this.has(key) ? 0 : 1;
	data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
	return this;
}
function Hash(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
function listCacheClear() {
	this.__data__ = [];
	this.size = 0;
}
function assocIndexOf(array, key) {
	var length = array.length;
	while (length--) if (eq_default(array[length][0], key)) return length;
	return -1;
}
function listCacheDelete(key) {
	var data = this.__data__, index = assocIndexOf_default(data, key);
	if (index < 0) return false;
	if (index == data.length - 1) data.pop();
	else splice.call(data, index, 1);
	--this.size;
	return true;
}
function listCacheGet(key) {
	var data = this.__data__, index = assocIndexOf_default(data, key);
	return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
	return assocIndexOf_default(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
	var data = this.__data__, index = assocIndexOf_default(data, key);
	if (index < 0) {
		++this.size;
		data.push([key, value]);
	} else data[index][1] = value;
	return this;
}
function ListCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
function mapCacheClear() {
	this.size = 0;
	this.__data__ = {
		"hash": new Hash_default(),
		"map": new (Map_default || ListCache_default)(),
		"string": new Hash_default()
	};
}
function isKeyable(value) {
	var type = typeof value;
	return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
	var data = map.__data__;
	return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
	var result = getMapData_default(this, key)["delete"](key);
	this.size -= result ? 1 : 0;
	return result;
}
function mapCacheGet(key) {
	return getMapData_default(this, key).get(key);
}
function mapCacheHas(key) {
	return getMapData_default(this, key).has(key);
}
function mapCacheSet(key, value) {
	var data = getMapData_default(this, key), size = data.size;
	data.set(key, value);
	this.size += data.size == size ? 0 : 1;
	return this;
}
function MapCache(entries) {
	var index = -1, length = entries == null ? 0 : entries.length;
	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}
function memoize(func, resolver) {
	if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
	var memoized = function() {
		var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
		if (cache.has(key)) return cache.get(key);
		var result = func.apply(this, args);
		memoized.cache = cache.set(key, result) || cache;
		return result;
	};
	memoized.cache = new (memoize.Cache || MapCache_default)();
	return memoized;
}
function memoizeCapped(func) {
	var result = memoize_default(func, function(key) {
		if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
		return key;
	});
	var cache = result.cache;
	return result;
}
function toString(value) {
	return value == null ? "" : baseToString_default(value);
}
function castPath(value, object) {
	if (isArray_default(value)) return value;
	return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
function toKey(value) {
	if (typeof value == "string" || isSymbol_default(value)) return value;
	var result = value + "";
	return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
function baseGet(object, path) {
	path = castPath_default(path, object);
	var index = 0, length = path.length;
	while (object != null && index < length) object = object[toKey_default(path[index++])];
	return index && index == length ? object : void 0;
}
function get(object, path, defaultValue) {
	var result = object == null ? void 0 : baseGet_default(object, path);
	return result === void 0 ? defaultValue : result;
}
function convertUnconventionalData(data) {
	if (!isObject3(data)) return data;
	let result = data;
	let wasMutated = false;
	if (typeof Event !== "undefined" && data instanceof Event) {
		result = extractEventHiddenProperties(result);
		wasMutated = true;
	}
	result = Object.keys(result).reduce((acc, key) => {
		try {
			if (result[key]) result[key].toJSON;
			acc[key] = result[key];
		} catch (_err) {
			wasMutated = true;
		}
		return acc;
	}, {});
	return wasMutated ? result : data;
}
var require_es_object_atoms, require_es_errors, require_eval, require_range, require_ref, require_syntax, require_type, require_uri, require_abs, require_floor, require_max, require_min, require_pow, require_round, require_isNaN, require_sign, require_gOPD, require_gopd, require_es_define_property, require_shams, require_has_symbols, require_Reflect_getPrototypeOf, require_Object_getPrototypeOf, require_implementation, require_function_bind, require_functionCall, require_functionApply, require_reflectApply, require_actualApply, require_call_bind_apply_helpers, require_get, require_get_proto, require_hasown, require_get_intrinsic, require_call_bound, require_shams2, require_is_regex, require_is_function, require_safe_regex_test, require_is_symbol, import_is_regex, import_is_function, import_is_symbol, freeGlobal_default, freeSelf, root_default, Symbol_default, objectProto, hasOwnProperty, nativeObjectToString, symToStringTag, getRawTag_default, nativeObjectToString2, objectToString_default, nullTag, undefinedTag, symToStringTag2, baseGetTag_default, isObjectLike_default, symbolTag, isSymbol_default, arrayMap_default, isArray_default, INFINITY, symbolProto, symbolToString, baseToString_default, isObject_default, asyncTag, funcTag, genTag, proxyTag, isFunction_default, coreJsData_default, maskSrcKey, isMasked_default, funcToString, toSource_default, reRegExpChar, reIsHostCtor, funcProto2, objectProto3, funcToString2, hasOwnProperty2, reIsNative, baseIsNative_default, getValue_default, getNative_default, eq_default, reIsDeepProp, reIsPlainProp, isKey_default, nativeCreate_default, hashClear_default, hashDelete_default, HASH_UNDEFINED, hasOwnProperty3, hashGet_default, hasOwnProperty4, hashHas_default, HASH_UNDEFINED2, hashSet_default, Hash_default, listCacheClear_default, assocIndexOf_default, splice, listCacheDelete_default, listCacheGet_default, listCacheHas_default, listCacheSet_default, ListCache_default, Map_default, mapCacheClear_default, isKeyable_default, getMapData_default, mapCacheDelete_default, mapCacheGet_default, mapCacheHas_default, mapCacheSet_default, MapCache_default, FUNC_ERROR_TEXT, memoize_default, MAX_MEMOIZE_SIZE, memoizeCapped_default, rePropName, reEscapeChar, stringToPath_default, toString_default, castPath_default, INFINITY2, toKey_default, baseGet_default, get_default, isObject3, dateFormat, isJSON, replacer, reviver, defaultOptions, stringify$1, mutator, parse$1;
var init_dist = __esmMin((() => {
	init_chunk_EAFQLD22();
	require_es_object_atoms = __commonJS({ "node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js"(exports, module) {
		"use strict";
		module.exports = Object;
	} });
	require_es_errors = __commonJS({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js"(exports, module) {
		"use strict";
		module.exports = Error;
	} });
	require_eval = __commonJS({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js"(exports, module) {
		"use strict";
		module.exports = EvalError;
	} });
	require_range = __commonJS({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js"(exports, module) {
		"use strict";
		module.exports = RangeError;
	} });
	require_ref = __commonJS({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js"(exports, module) {
		"use strict";
		module.exports = ReferenceError;
	} });
	require_syntax = __commonJS({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js"(exports, module) {
		"use strict";
		module.exports = SyntaxError;
	} });
	require_type = __commonJS({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js"(exports, module) {
		"use strict";
		module.exports = TypeError;
	} });
	require_uri = __commonJS({ "node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js"(exports, module) {
		"use strict";
		module.exports = URIError;
	} });
	require_abs = __commonJS({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js"(exports, module) {
		"use strict";
		module.exports = Math.abs;
	} });
	require_floor = __commonJS({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js"(exports, module) {
		"use strict";
		module.exports = Math.floor;
	} });
	require_max = __commonJS({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js"(exports, module) {
		"use strict";
		module.exports = Math.max;
	} });
	require_min = __commonJS({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js"(exports, module) {
		"use strict";
		module.exports = Math.min;
	} });
	require_pow = __commonJS({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js"(exports, module) {
		"use strict";
		module.exports = Math.pow;
	} });
	require_round = __commonJS({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js"(exports, module) {
		"use strict";
		module.exports = Math.round;
	} });
	require_isNaN = __commonJS({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js"(exports, module) {
		"use strict";
		module.exports = Number.isNaN || function isNaN2(a) {
			return a !== a;
		};
	} });
	require_sign = __commonJS({ "node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js"(exports, module) {
		"use strict";
		var $isNaN = require_isNaN();
		module.exports = function sign(number) {
			if ($isNaN(number) || number === 0) return number;
			return number < 0 ? -1 : 1;
		};
	} });
	require_gOPD = __commonJS({ "node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js"(exports, module) {
		"use strict";
		module.exports = Object.getOwnPropertyDescriptor;
	} });
	require_gopd = __commonJS({ "node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js"(exports, module) {
		"use strict";
		var $gOPD = require_gOPD();
		if ($gOPD) try {
			$gOPD([], "length");
		} catch (e) {
			$gOPD = null;
		}
		module.exports = $gOPD;
	} });
	require_es_define_property = __commonJS({ "node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js"(exports, module) {
		"use strict";
		var $defineProperty = Object.defineProperty || false;
		if ($defineProperty) try {
			$defineProperty({}, "a", { value: 1 });
		} catch (e) {
			$defineProperty = false;
		}
		module.exports = $defineProperty;
	} });
	require_shams = __commonJS({ "node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js"(exports, module) {
		"use strict";
		module.exports = function hasSymbols() {
			if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") return false;
			if (typeof Symbol.iterator === "symbol") return true;
			var obj = {};
			var sym = Symbol("test");
			var symObj = Object(sym);
			if (typeof sym === "string") return false;
			if (Object.prototype.toString.call(sym) !== "[object Symbol]") return false;
			if (Object.prototype.toString.call(symObj) !== "[object Symbol]") return false;
			var symVal = 42;
			obj[sym] = symVal;
			for (var _ in obj) return false;
			if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) return false;
			if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) return false;
			var syms = Object.getOwnPropertySymbols(obj);
			if (syms.length !== 1 || syms[0] !== sym) return false;
			if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) return false;
			if (typeof Object.getOwnPropertyDescriptor === "function") {
				var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
				if (descriptor.value !== symVal || descriptor.enumerable !== true) return false;
			}
			return true;
		};
	} });
	require_has_symbols = __commonJS({ "node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js"(exports, module) {
		"use strict";
		var origSymbol = typeof Symbol !== "undefined" && Symbol;
		var hasSymbolSham = require_shams();
		module.exports = function hasNativeSymbols() {
			if (typeof origSymbol !== "function") return false;
			if (typeof Symbol !== "function") return false;
			if (typeof origSymbol("foo") !== "symbol") return false;
			if (typeof Symbol("bar") !== "symbol") return false;
			return hasSymbolSham();
		};
	} });
	require_Reflect_getPrototypeOf = __commonJS({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js"(exports, module) {
		"use strict";
		module.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
	} });
	require_Object_getPrototypeOf = __commonJS({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js"(exports, module) {
		"use strict";
		module.exports = require_es_object_atoms().getPrototypeOf || null;
	} });
	require_implementation = __commonJS({ "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js"(exports, module) {
		"use strict";
		var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
		var toStr = Object.prototype.toString;
		var max = Math.max;
		var funcType = "[object Function]";
		var concatty = function concatty2(a, b) {
			var arr = [];
			for (var i = 0; i < a.length; i += 1) arr[i] = a[i];
			for (var j = 0; j < b.length; j += 1) arr[j + a.length] = b[j];
			return arr;
		};
		var slicy = function slicy2(arrLike, offset) {
			var arr = [];
			for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) arr[j] = arrLike[i];
			return arr;
		};
		var joiny = function(arr, joiner) {
			var str = "";
			for (var i = 0; i < arr.length; i += 1) {
				str += arr[i];
				if (i + 1 < arr.length) str += joiner;
			}
			return str;
		};
		module.exports = function bind(that) {
			var target = this;
			if (typeof target !== "function" || toStr.apply(target) !== funcType) throw new TypeError(ERROR_MESSAGE + target);
			var args = slicy(arguments, 1);
			var bound;
			var binder = function() {
				if (this instanceof bound) {
					var result = target.apply(this, concatty(args, arguments));
					if (Object(result) === result) return result;
					return this;
				}
				return target.apply(that, concatty(args, arguments));
			};
			var boundLength = max(0, target.length - args.length);
			var boundArgs = [];
			for (var i = 0; i < boundLength; i++) boundArgs[i] = "$" + i;
			bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
			if (target.prototype) {
				var Empty = function Empty2() {};
				Empty.prototype = target.prototype;
				bound.prototype = new Empty();
				Empty.prototype = null;
			}
			return bound;
		};
	} });
	require_function_bind = __commonJS({ "node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js"(exports, module) {
		"use strict";
		var implementation = require_implementation();
		module.exports = Function.prototype.bind || implementation;
	} });
	require_functionCall = __commonJS({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js"(exports, module) {
		"use strict";
		module.exports = Function.prototype.call;
	} });
	require_functionApply = __commonJS({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js"(exports, module) {
		"use strict";
		module.exports = Function.prototype.apply;
	} });
	require_reflectApply = __commonJS({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js"(exports, module) {
		"use strict";
		module.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
	} });
	require_actualApply = __commonJS({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js"(exports, module) {
		"use strict";
		var bind = require_function_bind();
		var $apply = require_functionApply();
		var $call = require_functionCall();
		module.exports = require_reflectApply() || bind.call($call, $apply);
	} });
	require_call_bind_apply_helpers = __commonJS({ "node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js"(exports, module) {
		"use strict";
		var bind = require_function_bind();
		var $TypeError = require_type();
		var $call = require_functionCall();
		var $actualApply = require_actualApply();
		module.exports = function callBindBasic(args) {
			if (args.length < 1 || typeof args[0] !== "function") throw new $TypeError("a function is required");
			return $actualApply(bind, $call, args);
		};
	} });
	require_get = __commonJS({ "node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js"(exports, module) {
		"use strict";
		var callBind = require_call_bind_apply_helpers();
		var gOPD = require_gopd();
		var hasProtoAccessor;
		try {
			hasProtoAccessor = [].__proto__ === Array.prototype;
		} catch (e) {
			if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") throw e;
		}
		var desc = !!hasProtoAccessor && gOPD && gOPD(
			Object.prototype,
			/** @type {keyof typeof Object.prototype} */
			"__proto__"
		);
		var $Object = Object;
		var $getPrototypeOf = $Object.getPrototypeOf;
		module.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
		/** @type {import('./get')} */
function getDunder(value) {
			return $getPrototypeOf(value == null ? value : $Object(value));
		}) : false;
	} });
	require_get_proto = __commonJS({ "node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js"(exports, module) {
		"use strict";
		var reflectGetProto = require_Reflect_getPrototypeOf();
		var originalGetProto = require_Object_getPrototypeOf();
		var getDunderProto = require_get();
		module.exports = reflectGetProto ? function getProto(O) {
			return reflectGetProto(O);
		} : originalGetProto ? function getProto(O) {
			if (!O || typeof O !== "object" && typeof O !== "function") throw new TypeError("getProto: not an object");
			return originalGetProto(O);
		} : getDunderProto ? function getProto(O) {
			return getDunderProto(O);
		} : null;
	} });
	require_hasown = __commonJS({ "node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js"(exports, module) {
		"use strict";
		var call = Function.prototype.call;
		var $hasOwn = Object.prototype.hasOwnProperty;
		module.exports = require_function_bind().call(call, $hasOwn);
	} });
	require_get_intrinsic = __commonJS({ "node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js"(exports, module) {
		"use strict";
		var undefined2;
		var $Object = require_es_object_atoms();
		var $Error = require_es_errors();
		var $EvalError = require_eval();
		var $RangeError = require_range();
		var $ReferenceError = require_ref();
		var $SyntaxError = require_syntax();
		var $TypeError = require_type();
		var $URIError = require_uri();
		var abs = require_abs();
		var floor = require_floor();
		var max = require_max();
		var min = require_min();
		var pow = require_pow();
		var round = require_round();
		var sign = require_sign();
		var $Function = Function;
		var getEvalledConstructor = function(expressionSyntax) {
			try {
				return $Function("\"use strict\"; return (" + expressionSyntax + ").constructor;")();
			} catch (e) {}
		};
		var $gOPD = require_gopd();
		var $defineProperty = require_es_define_property();
		var throwTypeError = function() {
			throw new $TypeError();
		};
		var ThrowTypeError = $gOPD ? function() {
			try {
				arguments.callee;
				return throwTypeError;
			} catch (calleeThrows) {
				try {
					return $gOPD(arguments, "callee").get;
				} catch (gOPDthrows) {
					return throwTypeError;
				}
			}
		}() : throwTypeError;
		var hasSymbols = require_has_symbols()();
		var getProto = require_get_proto();
		var $ObjectGPO = require_Object_getPrototypeOf();
		var $ReflectGPO = require_Reflect_getPrototypeOf();
		var $apply = require_functionApply();
		var $call = require_functionCall();
		var needsEval = {};
		var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
		var INTRINSICS = {
			__proto__: null,
			"%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
			"%Array%": Array,
			"%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
			"%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
			"%AsyncFromSyncIteratorPrototype%": undefined2,
			"%AsyncFunction%": needsEval,
			"%AsyncGenerator%": needsEval,
			"%AsyncGeneratorFunction%": needsEval,
			"%AsyncIteratorPrototype%": needsEval,
			"%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
			"%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
			"%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
			"%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
			"%Boolean%": Boolean,
			"%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
			"%Date%": Date,
			"%decodeURI%": decodeURI,
			"%decodeURIComponent%": decodeURIComponent,
			"%encodeURI%": encodeURI,
			"%encodeURIComponent%": encodeURIComponent,
			"%Error%": $Error,
			"%eval%": eval,
			"%EvalError%": $EvalError,
			"%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
			"%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
			"%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
			"%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
			"%Function%": $Function,
			"%GeneratorFunction%": needsEval,
			"%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
			"%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
			"%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
			"%isFinite%": isFinite,
			"%isNaN%": isNaN,
			"%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
			"%JSON%": typeof JSON === "object" ? JSON : undefined2,
			"%Map%": typeof Map === "undefined" ? undefined2 : Map,
			"%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
			"%Math%": Math,
			"%Number%": Number,
			"%Object%": $Object,
			"%Object.getOwnPropertyDescriptor%": $gOPD,
			"%parseFloat%": parseFloat,
			"%parseInt%": parseInt,
			"%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
			"%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
			"%RangeError%": $RangeError,
			"%ReferenceError%": $ReferenceError,
			"%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
			"%RegExp%": RegExp,
			"%Set%": typeof Set === "undefined" ? undefined2 : Set,
			"%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
			"%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
			"%String%": String,
			"%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
			"%Symbol%": hasSymbols ? Symbol : undefined2,
			"%SyntaxError%": $SyntaxError,
			"%ThrowTypeError%": ThrowTypeError,
			"%TypedArray%": TypedArray,
			"%TypeError%": $TypeError,
			"%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
			"%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
			"%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
			"%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
			"%URIError%": $URIError,
			"%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
			"%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
			"%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
			"%Function.prototype.call%": $call,
			"%Function.prototype.apply%": $apply,
			"%Object.defineProperty%": $defineProperty,
			"%Object.getPrototypeOf%": $ObjectGPO,
			"%Math.abs%": abs,
			"%Math.floor%": floor,
			"%Math.max%": max,
			"%Math.min%": min,
			"%Math.pow%": pow,
			"%Math.round%": round,
			"%Math.sign%": sign,
			"%Reflect.getPrototypeOf%": $ReflectGPO
		};
		if (getProto) try {
			null.error;
		} catch (e) {
			errorProto = getProto(getProto(e));
			INTRINSICS["%Error.prototype%"] = errorProto;
		}
		var errorProto;
		var doEval = function doEval2(name) {
			var value;
			if (name === "%AsyncFunction%") value = getEvalledConstructor("async function () {}");
			else if (name === "%GeneratorFunction%") value = getEvalledConstructor("function* () {}");
			else if (name === "%AsyncGeneratorFunction%") value = getEvalledConstructor("async function* () {}");
			else if (name === "%AsyncGenerator%") {
				var fn = doEval2("%AsyncGeneratorFunction%");
				if (fn) value = fn.prototype;
			} else if (name === "%AsyncIteratorPrototype%") {
				var gen = doEval2("%AsyncGenerator%");
				if (gen && getProto) value = getProto(gen.prototype);
			}
			INTRINSICS[name] = value;
			return value;
		};
		var LEGACY_ALIASES = {
			__proto__: null,
			"%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
			"%ArrayPrototype%": ["Array", "prototype"],
			"%ArrayProto_entries%": [
				"Array",
				"prototype",
				"entries"
			],
			"%ArrayProto_forEach%": [
				"Array",
				"prototype",
				"forEach"
			],
			"%ArrayProto_keys%": [
				"Array",
				"prototype",
				"keys"
			],
			"%ArrayProto_values%": [
				"Array",
				"prototype",
				"values"
			],
			"%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
			"%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
			"%AsyncGeneratorPrototype%": [
				"AsyncGeneratorFunction",
				"prototype",
				"prototype"
			],
			"%BooleanPrototype%": ["Boolean", "prototype"],
			"%DataViewPrototype%": ["DataView", "prototype"],
			"%DatePrototype%": ["Date", "prototype"],
			"%ErrorPrototype%": ["Error", "prototype"],
			"%EvalErrorPrototype%": ["EvalError", "prototype"],
			"%Float32ArrayPrototype%": ["Float32Array", "prototype"],
			"%Float64ArrayPrototype%": ["Float64Array", "prototype"],
			"%FunctionPrototype%": ["Function", "prototype"],
			"%Generator%": ["GeneratorFunction", "prototype"],
			"%GeneratorPrototype%": [
				"GeneratorFunction",
				"prototype",
				"prototype"
			],
			"%Int8ArrayPrototype%": ["Int8Array", "prototype"],
			"%Int16ArrayPrototype%": ["Int16Array", "prototype"],
			"%Int32ArrayPrototype%": ["Int32Array", "prototype"],
			"%JSONParse%": ["JSON", "parse"],
			"%JSONStringify%": ["JSON", "stringify"],
			"%MapPrototype%": ["Map", "prototype"],
			"%NumberPrototype%": ["Number", "prototype"],
			"%ObjectPrototype%": ["Object", "prototype"],
			"%ObjProto_toString%": [
				"Object",
				"prototype",
				"toString"
			],
			"%ObjProto_valueOf%": [
				"Object",
				"prototype",
				"valueOf"
			],
			"%PromisePrototype%": ["Promise", "prototype"],
			"%PromiseProto_then%": [
				"Promise",
				"prototype",
				"then"
			],
			"%Promise_all%": ["Promise", "all"],
			"%Promise_reject%": ["Promise", "reject"],
			"%Promise_resolve%": ["Promise", "resolve"],
			"%RangeErrorPrototype%": ["RangeError", "prototype"],
			"%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
			"%RegExpPrototype%": ["RegExp", "prototype"],
			"%SetPrototype%": ["Set", "prototype"],
			"%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
			"%StringPrototype%": ["String", "prototype"],
			"%SymbolPrototype%": ["Symbol", "prototype"],
			"%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
			"%TypedArrayPrototype%": ["TypedArray", "prototype"],
			"%TypeErrorPrototype%": ["TypeError", "prototype"],
			"%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
			"%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
			"%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
			"%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
			"%URIErrorPrototype%": ["URIError", "prototype"],
			"%WeakMapPrototype%": ["WeakMap", "prototype"],
			"%WeakSetPrototype%": ["WeakSet", "prototype"]
		};
		var bind = require_function_bind();
		var hasOwn = require_hasown();
		var $concat = bind.call($call, Array.prototype.concat);
		var $spliceApply = bind.call($apply, Array.prototype.splice);
		var $replace = bind.call($call, String.prototype.replace);
		var $strSlice = bind.call($call, String.prototype.slice);
		var $exec = bind.call($call, RegExp.prototype.exec);
		var rePropName2 = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
		var reEscapeChar2 = /\\(\\)?/g;
		var stringToPath2 = function stringToPath3(string) {
			var first = $strSlice(string, 0, 1);
			var last = $strSlice(string, -1);
			if (first === "%" && last !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
			else if (last === "%" && first !== "%") throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
			var result = [];
			$replace(string, rePropName2, function(match, number, quote, subString) {
				result[result.length] = quote ? $replace(subString, reEscapeChar2, "$1") : number || match;
			});
			return result;
		};
		var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
			var intrinsicName = name;
			var alias;
			if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
				alias = LEGACY_ALIASES[intrinsicName];
				intrinsicName = "%" + alias[0] + "%";
			}
			if (hasOwn(INTRINSICS, intrinsicName)) {
				var value = INTRINSICS[intrinsicName];
				if (value === needsEval) value = doEval(intrinsicName);
				if (typeof value === "undefined" && !allowMissing) throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
				return {
					alias,
					name: intrinsicName,
					value
				};
			}
			throw new $SyntaxError("intrinsic " + name + " does not exist!");
		};
		module.exports = function GetIntrinsic(name, allowMissing) {
			if (typeof name !== "string" || name.length === 0) throw new $TypeError("intrinsic name must be a non-empty string");
			if (arguments.length > 1 && typeof allowMissing !== "boolean") throw new $TypeError("\"allowMissing\" argument must be a boolean");
			if ($exec(/^%?[^%]*%?$/, name) === null) throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
			var parts = stringToPath2(name);
			var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
			var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
			var intrinsicRealName = intrinsic.name;
			var value = intrinsic.value;
			var skipFurtherCaching = false;
			var alias = intrinsic.alias;
			if (alias) {
				intrinsicBaseName = alias[0];
				$spliceApply(parts, $concat([0, 1], alias));
			}
			for (var i = 1, isOwn = true; i < parts.length; i += 1) {
				var part = parts[i];
				var first = $strSlice(part, 0, 1);
				var last = $strSlice(part, -1);
				if ((first === "\"" || first === "'" || first === "`" || last === "\"" || last === "'" || last === "`") && first !== last) throw new $SyntaxError("property names with quotes must have matching quotes");
				if (part === "constructor" || !isOwn) skipFurtherCaching = true;
				intrinsicBaseName += "." + part;
				intrinsicRealName = "%" + intrinsicBaseName + "%";
				if (hasOwn(INTRINSICS, intrinsicRealName)) value = INTRINSICS[intrinsicRealName];
				else if (value != null) {
					if (!(part in value)) {
						if (!allowMissing) throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
						return;
					}
					if ($gOPD && i + 1 >= parts.length) {
						var desc = $gOPD(value, part);
						isOwn = !!desc;
						if (isOwn && "get" in desc && !("originalValue" in desc.get)) value = desc.get;
						else value = value[part];
					} else {
						isOwn = hasOwn(value, part);
						value = value[part];
					}
					if (isOwn && !skipFurtherCaching) INTRINSICS[intrinsicRealName] = value;
				}
			}
			return value;
		};
	} });
	require_call_bound = __commonJS({ "node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js"(exports, module) {
		"use strict";
		var GetIntrinsic = require_get_intrinsic();
		var callBindBasic = require_call_bind_apply_helpers();
		var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
		module.exports = function callBoundIntrinsic(name, allowMissing) {
			var intrinsic = GetIntrinsic(name, !!allowMissing);
			if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) return callBindBasic(
				/** @type {const} */
				[intrinsic]
			);
			return intrinsic;
		};
	} });
	require_shams2 = __commonJS({ "node_modules/.pnpm/has-tostringtag@1.0.2/node_modules/has-tostringtag/shams.js"(exports, module) {
		"use strict";
		var hasSymbols = require_shams();
		module.exports = function hasToStringTagShams() {
			return hasSymbols() && !!Symbol.toStringTag;
		};
	} });
	require_is_regex = __commonJS({ "node_modules/.pnpm/is-regex@1.2.1/node_modules/is-regex/index.js"(exports, module) {
		"use strict";
		var callBound = require_call_bound();
		var hasToStringTag = require_shams2()();
		var hasOwn = require_hasown();
		var gOPD = require_gopd();
		var fn;
		if (hasToStringTag) {
			$exec = callBound("RegExp.prototype.exec");
			isRegexMarker = {};
			throwRegexMarker = function() {
				throw isRegexMarker;
			};
			badStringifier = {
				toString: throwRegexMarker,
				valueOf: throwRegexMarker
			};
			if (typeof Symbol.toPrimitive === "symbol") badStringifier[Symbol.toPrimitive] = throwRegexMarker;
			fn = function isRegex(value) {
				if (!value || typeof value !== "object") return false;
				var descriptor = gOPD(
					/** @type {{ lastIndex?: unknown }} */
					value,
					"lastIndex"
				);
				if (!(descriptor && hasOwn(descriptor, "value"))) return false;
				try {
					$exec(
						value,
						/** @type {string} */
						/** @type {unknown} */
						badStringifier
					);
				} catch (e) {
					return e === isRegexMarker;
				}
			};
		} else {
			$toString = callBound("Object.prototype.toString");
			regexClass = "[object RegExp]";
			fn = function isRegex(value) {
				if (!value || typeof value !== "object" && typeof value !== "function") return false;
				return $toString(value) === regexClass;
			};
		}
		var $exec;
		var isRegexMarker;
		var throwRegexMarker;
		var badStringifier;
		var $toString;
		var regexClass;
		module.exports = fn;
	} });
	require_is_function = __commonJS({ "node_modules/.pnpm/is-function@1.0.2/node_modules/is-function/index.js"(exports, module) {
		module.exports = isFunction3;
		var toString2 = Object.prototype.toString;
		function isFunction3(fn) {
			if (!fn) return false;
			var string = toString2.call(fn);
			return string === "[object Function]" || typeof fn === "function" && string !== "[object RegExp]" || typeof window !== "undefined" && (fn === window.setTimeout || fn === window.alert || fn === window.confirm || fn === window.prompt);
		}
	} });
	require_safe_regex_test = __commonJS({ "node_modules/.pnpm/safe-regex-test@1.1.0/node_modules/safe-regex-test/index.js"(exports, module) {
		"use strict";
		var callBound = require_call_bound();
		var isRegex = require_is_regex();
		var $exec = callBound("RegExp.prototype.exec");
		var $TypeError = require_type();
		module.exports = function regexTester(regex) {
			if (!isRegex(regex)) throw new $TypeError("`regex` must be a RegExp");
			return function test(s) {
				return $exec(regex, s) !== null;
			};
		};
	} });
	require_is_symbol = __commonJS({ "node_modules/.pnpm/is-symbol@1.1.1/node_modules/is-symbol/index.js"(exports, module) {
		"use strict";
		var callBound = require_call_bound();
		var $toString = callBound("Object.prototype.toString");
		var hasSymbols = require_has_symbols()();
		var safeRegexTest = require_safe_regex_test();
		if (hasSymbols) {
			$symToStr = callBound("Symbol.prototype.toString");
			isSymString = safeRegexTest(/^Symbol\(.*\)$/);
			isSymbolObject = function isRealSymbolObject(value) {
				if (typeof value.valueOf() !== "symbol") return false;
				return isSymString($symToStr(value));
			};
			module.exports = function isSymbol3(value) {
				if (typeof value === "symbol") return true;
				if (!value || typeof value !== "object" || $toString(value) !== "[object Symbol]") return false;
				try {
					return isSymbolObject(value);
				} catch (e) {
					return false;
				}
			};
		} else module.exports = function isSymbol3(value) {
			return false;
		};
		var $symToStr;
		var isSymString;
		var isSymbolObject;
	} });
	import_is_regex = __toESM(require_is_regex());
	import_is_function = __toESM(require_is_function());
	import_is_symbol = __toESM(require_is_symbol());
	freeGlobal_default = typeof global == "object" && global && global.Object === Object && global;
	freeSelf = typeof self == "object" && self && self.Object === Object && self;
	root_default = freeGlobal_default || freeSelf || Function("return this")();
	Symbol_default = root_default.Symbol;
	objectProto = Object.prototype;
	hasOwnProperty = objectProto.hasOwnProperty;
	nativeObjectToString = objectProto.toString;
	symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
	getRawTag_default = getRawTag;
	nativeObjectToString2 = Object.prototype.toString;
	objectToString_default = objectToString;
	nullTag = "[object Null]";
	undefinedTag = "[object Undefined]";
	symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
	baseGetTag_default = baseGetTag;
	isObjectLike_default = isObjectLike;
	symbolTag = "[object Symbol]";
	isSymbol_default = isSymbol;
	arrayMap_default = arrayMap;
	isArray_default = Array.isArray;
	INFINITY = Infinity;
	symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
	symbolToString = symbolProto ? symbolProto.toString : void 0;
	baseToString_default = baseToString;
	isObject_default = isObject2;
	asyncTag = "[object AsyncFunction]";
	funcTag = "[object Function]";
	genTag = "[object GeneratorFunction]";
	proxyTag = "[object Proxy]";
	isFunction_default = isFunction;
	coreJsData_default = root_default["__core-js_shared__"];
	maskSrcKey = function() {
		var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
		return uid ? "Symbol(src)_1." + uid : "";
	}();
	isMasked_default = isMasked;
	funcToString = Function.prototype.toString;
	toSource_default = toSource;
	reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	reIsHostCtor = /^\[object .+?Constructor\]$/;
	funcProto2 = Function.prototype;
	objectProto3 = Object.prototype;
	funcToString2 = funcProto2.toString;
	hasOwnProperty2 = objectProto3.hasOwnProperty;
	reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
	baseIsNative_default = baseIsNative;
	getValue_default = getValue;
	getNative_default = getNative;
	eq_default = eq;
	reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
	reIsPlainProp = /^\w*$/;
	isKey_default = isKey;
	nativeCreate_default = getNative_default(Object, "create");
	hashClear_default = hashClear;
	hashDelete_default = hashDelete;
	HASH_UNDEFINED = "__lodash_hash_undefined__";
	hasOwnProperty3 = Object.prototype.hasOwnProperty;
	hashGet_default = hashGet;
	hasOwnProperty4 = Object.prototype.hasOwnProperty;
	hashHas_default = hashHas;
	HASH_UNDEFINED2 = "__lodash_hash_undefined__";
	hashSet_default = hashSet;
	Hash.prototype.clear = hashClear_default;
	Hash.prototype["delete"] = hashDelete_default;
	Hash.prototype.get = hashGet_default;
	Hash.prototype.has = hashHas_default;
	Hash.prototype.set = hashSet_default;
	Hash_default = Hash;
	listCacheClear_default = listCacheClear;
	assocIndexOf_default = assocIndexOf;
	splice = Array.prototype.splice;
	listCacheDelete_default = listCacheDelete;
	listCacheGet_default = listCacheGet;
	listCacheHas_default = listCacheHas;
	listCacheSet_default = listCacheSet;
	ListCache.prototype.clear = listCacheClear_default;
	ListCache.prototype["delete"] = listCacheDelete_default;
	ListCache.prototype.get = listCacheGet_default;
	ListCache.prototype.has = listCacheHas_default;
	ListCache.prototype.set = listCacheSet_default;
	ListCache_default = ListCache;
	Map_default = getNative_default(root_default, "Map");
	mapCacheClear_default = mapCacheClear;
	isKeyable_default = isKeyable;
	getMapData_default = getMapData;
	mapCacheDelete_default = mapCacheDelete;
	mapCacheGet_default = mapCacheGet;
	mapCacheHas_default = mapCacheHas;
	mapCacheSet_default = mapCacheSet;
	MapCache.prototype.clear = mapCacheClear_default;
	MapCache.prototype["delete"] = mapCacheDelete_default;
	MapCache.prototype.get = mapCacheGet_default;
	MapCache.prototype.has = mapCacheHas_default;
	MapCache.prototype.set = mapCacheSet_default;
	MapCache_default = MapCache;
	FUNC_ERROR_TEXT = "Expected a function";
	memoize.Cache = MapCache_default;
	memoize_default = memoize;
	MAX_MEMOIZE_SIZE = 500;
	memoizeCapped_default = memoizeCapped;
	rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
	reEscapeChar = /\\(\\)?/g;
	stringToPath_default = memoizeCapped_default(function(string) {
		var result = [];
		if (string.charCodeAt(0) === 46) result.push("");
		string.replace(rePropName, function(match, number, quote, subString) {
			result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
		});
		return result;
	});
	toString_default = toString;
	castPath_default = castPath;
	INFINITY2 = Infinity;
	toKey_default = toKey;
	baseGet_default = baseGet;
	get_default = get;
	isObject3 = isObject;
	dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
	isJSON = (input) => input.match(/^[\[\{\"\}].*[\]\}\"]$/);
	replacer = function replacer2(options) {
		let objects;
		let map;
		let stack;
		let keys;
		return function replace(key, value) {
			try {
				if (key === "") {
					keys = [];
					objects = /* @__PURE__ */ new Map([[value, "[]"]]);
					map = /* @__PURE__ */ new Map();
					stack = [];
					return value;
				}
				const origin = map.get(this) || this;
				while (stack.length && origin !== stack[0]) {
					stack.shift();
					keys.pop();
				}
				if (typeof value === "boolean") return value;
				if (value === void 0) {
					if (!options.allowUndefined) return;
					return "_undefined_";
				}
				if (value === null) return null;
				if (typeof value === "number") {
					if (value === Number.NEGATIVE_INFINITY) return "_-Infinity_";
					if (value === Number.POSITIVE_INFINITY) return "_Infinity_";
					if (Number.isNaN(value)) return "_NaN_";
					return value;
				}
				if (typeof value === "bigint") return `_bigint_${value.toString()}`;
				if (typeof value === "string") {
					if (dateFormat.test(value)) {
						if (!options.allowDate) return;
						return `_date_${value}`;
					}
					return value;
				}
				if ((0, import_is_regex.default)(value)) {
					if (!options.allowRegExp) return;
					return `_regexp_${value.flags}|${value.source}`;
				}
				if ((0, import_is_function.default)(value)) return;
				if ((0, import_is_symbol.default)(value)) {
					if (!options.allowSymbol) return;
					const globalRegistryKey = Symbol.keyFor(value);
					if (globalRegistryKey !== void 0) return `_gsymbol_${globalRegistryKey}`;
					return `_symbol_${value.toString().slice(7, -1)}`;
				}
				if (stack.length >= options.maxDepth) {
					if (Array.isArray(value)) return `[Array(${value.length})]`;
					return "[Object]";
				}
				if (value === this) return `_duplicate_${JSON.stringify(keys)}`;
				if (value instanceof Error && options.allowError) return {
					__isConvertedError__: true,
					errorProperties: {
						...value.cause ? { cause: value.cause } : {},
						...value,
						name: value.name,
						message: value.message,
						stack: value.stack,
						"_constructor-name_": value.constructor.name
					}
				};
				if (value?.constructor?.name && value.constructor.name !== "Object" && !Array.isArray(value)) {
					const found2 = objects.get(value);
					if (!found2) {
						const plainObject = {
							__isClassInstance__: true,
							__className__: value.constructor.name,
							...Object.getOwnPropertyNames(value).reduce((acc, prop) => {
								try {
									acc[prop] = value[prop];
								} catch (_err) {}
								return acc;
							}, {})
						};
						keys.push(key);
						stack.unshift(plainObject);
						objects.set(value, JSON.stringify(keys));
						if (value !== plainObject) map.set(value, plainObject);
						return plainObject;
					}
					return `_duplicate_${found2}`;
				}
				const found = objects.get(value);
				if (!found) {
					const converted = Array.isArray(value) ? value : convertUnconventionalData(value);
					keys.push(key);
					stack.unshift(converted);
					objects.set(value, JSON.stringify(keys));
					if (value !== converted) map.set(value, converted);
					return converted;
				}
				return `_duplicate_${found}`;
			} catch (_e) {
				return;
			}
		};
	};
	reviver = function reviver2(options) {
		const refs = [];
		let root2;
		return function revive(key, value) {
			if (key === "") {
				root2 = value;
				refs.forEach(({ target, container, replacement }) => {
					const replacementArr = isJSON(replacement) ? JSON.parse(replacement) : replacement.split(".");
					if (replacementArr.length === 0) container[target] = root2;
					else container[target] = get_default(root2, replacementArr);
				});
			}
			if (key === "_constructor-name_") return value;
			if (isObject3(value) && value.__isConvertedError__) {
				const { message, ...properties } = value.errorProperties;
				const error = new Error(message);
				Object.assign(error, properties);
				return error;
			}
			if (typeof value === "string" && value.startsWith("_regexp_") && options.allowRegExp) {
				const [, flags, source] = value.match(/_regexp_([^|]*)\|(.*)/) || [];
				return new RegExp(source, flags);
			}
			if (typeof value === "string" && value.startsWith("_date_") && options.allowDate) return new Date(value.replace("_date_", ""));
			if (typeof value === "string" && value.startsWith("_duplicate_")) {
				refs.push({
					target: key,
					container: this,
					replacement: value.replace(/^_duplicate_/, "")
				});
				return null;
			}
			if (typeof value === "string" && value.startsWith("_symbol_") && options.allowSymbol) return Symbol(value.replace("_symbol_", ""));
			if (typeof value === "string" && value.startsWith("_gsymbol_") && options.allowSymbol) return Symbol.for(value.replace("_gsymbol_", ""));
			if (typeof value === "string" && value === "_-Infinity_") return Number.NEGATIVE_INFINITY;
			if (typeof value === "string" && value === "_Infinity_") return Number.POSITIVE_INFINITY;
			if (typeof value === "string" && value === "_NaN_") return NaN;
			if (typeof value === "string" && value.startsWith("_bigint_") && typeof BigInt === "function") return BigInt(value.replace("_bigint_", ""));
			return value;
		};
	};
	defaultOptions = {
		maxDepth: 10,
		space: void 0,
		allowRegExp: true,
		allowDate: true,
		allowError: true,
		allowUndefined: true,
		allowSymbol: true
	};
	stringify$1 = (data, options = {}) => {
		const mergedOptions = {
			...defaultOptions,
			...options
		};
		return JSON.stringify(convertUnconventionalData(data), replacer(mergedOptions), options.space);
	};
	mutator = () => {
		const mutated = /* @__PURE__ */ new Map();
		return function mutateUndefined(value) {
			if (isObject3(value)) Object.entries(value).forEach(([k, v]) => {
				if (v === "_undefined_") value[k] = void 0;
				else if (!mutated.get(v)) {
					mutated.set(v, true);
					mutateUndefined(v);
				}
			});
			if (Array.isArray(value)) value.forEach((v, index) => {
				if (v === "_undefined_") {
					mutated.set(v, true);
					value[index] = void 0;
				} else if (!mutated.get(v)) {
					mutated.set(v, true);
					mutateUndefined(v);
				}
			});
		};
	};
	parse$1 = (data, options = {}) => {
		const mergedOptions = {
			...defaultOptions,
			...options
		};
		const result = JSON.parse(data, reviver(mergedOptions));
		mutator()(result);
		return result;
	};
}));
/*! Bundled license information:

isobject/index.js:
(*!
* isobject <https://github.com/jonschlinkert/isobject>
*
* Copyright (c) 2014-2017, Jon Schlinkert.
* Released under the MIT License.
*)

lodash-es/lodash.js:
(**
* @license
* Lodash (Custom Build) <https://lodash.com/>
* Build: `lodash modularize exports="es" -o ./`
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*)
*/
//#endregion
//#region ../../node_modules/tiny-invariant/dist/esm/tiny-invariant.js
function invariant(condition, message) {
	if (condition) return;
	throw new Error(prefix);
}
var prefix;
var init_tiny_invariant = __esmMin((() => {
	prefix = "Invariant failed";
}));
//#endregion
//#region ../../node_modules/stylis/src/Enum.js
var MS, MOZ, WEBKIT, COMMENT, RULESET, DECLARATION, IMPORT, KEYFRAMES, LAYER;
var init_Enum = __esmMin((() => {
	MS = "-ms-";
	MOZ = "-moz-";
	WEBKIT = "-webkit-";
	COMMENT = "comm";
	RULESET = "rule";
	DECLARATION = "decl";
	IMPORT = "@import";
	KEYFRAMES = "@keyframes";
	LAYER = "@layer";
}));
//#endregion
//#region ../../node_modules/stylis/src/Utility.js
/**
* @param {string} value
* @param {number} length
* @return {number}
*/
function hash(value, length) {
	return charat(value, 0) ^ 45 ? (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
/**
* @param {string} value
* @return {string}
*/
function trim(value) {
	return value.trim();
}
/**
* @param {string} value
* @param {RegExp} pattern
* @return {string?}
*/
function match(value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value;
}
/**
* @param {string} value
* @param {(string|RegExp)} pattern
* @param {string} replacement
* @return {string}
*/
function replace(value, pattern, replacement) {
	return value.replace(pattern, replacement);
}
/**
* @param {string} value
* @param {string} search
* @return {number}
*/
function indexof(value, search) {
	return value.indexOf(search);
}
/**
* @param {string} value
* @param {number} index
* @return {number}
*/
function charat(value, index) {
	return value.charCodeAt(index) | 0;
}
/**
* @param {string} value
* @param {number} begin
* @param {number} end
* @return {string}
*/
function substr(value, begin, end) {
	return value.slice(begin, end);
}
/**
* @param {string} value
* @return {number}
*/
function strlen(value) {
	return value.length;
}
/**
* @param {any[]} value
* @return {number}
*/
function sizeof(value) {
	return value.length;
}
/**
* @param {any} value
* @param {any[]} array
* @return {any}
*/
function append(value, array) {
	return array.push(value), value;
}
/**
* @param {string[]} array
* @param {function} callback
* @return {string}
*/
function combine(array, callback) {
	return array.map(callback).join("");
}
var abs, from, assign;
var init_Utility = __esmMin((() => {
	abs = Math.abs;
	from = String.fromCharCode;
	assign = Object.assign;
}));
//#endregion
//#region ../../node_modules/stylis/src/Tokenizer.js
/**
* @param {string} value
* @param {object | null} root
* @param {object | null} parent
* @param {string} type
* @param {string[] | string} props
* @param {object[] | string} children
* @param {number} length
*/
function node(value, root, parent, type, props, children, length) {
	return {
		value,
		root,
		parent,
		type,
		props,
		children,
		line,
		column,
		length,
		return: ""
	};
}
/**
* @param {object} root
* @param {object} props
* @return {object}
*/
function copy(root, props) {
	return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
/**
* @return {number}
*/
function char() {
	return character;
}
/**
* @return {number}
*/
function prev() {
	character = position > 0 ? charat(characters, --position) : 0;
	if (column--, character === 10) column = 1, line--;
	return character;
}
/**
* @return {number}
*/
function next() {
	character = position < length ? charat(characters, position++) : 0;
	if (column++, character === 10) column = 1, line++;
	return character;
}
/**
* @return {number}
*/
function peek() {
	return charat(characters, position);
}
/**
* @return {number}
*/
function caret() {
	return position;
}
/**
* @param {number} begin
* @param {number} end
* @return {string}
*/
function slice(begin, end) {
	return substr(characters, begin, end);
}
/**
* @param {number} type
* @return {number}
*/
function token(type) {
	switch (type) {
		case 0:
		case 9:
		case 10:
		case 13:
		case 32: return 5;
		case 33:
		case 43:
		case 44:
		case 47:
		case 62:
		case 64:
		case 126:
		case 59:
		case 123:
		case 125: return 4;
		case 58: return 3;
		case 34:
		case 39:
		case 40:
		case 91: return 2;
		case 41:
		case 93: return 1;
	}
	return 0;
}
/**
* @param {string} value
* @return {any[]}
*/
function alloc(value) {
	return line = column = 1, length = strlen(characters = value), position = 0, [];
}
/**
* @param {any} value
* @return {any}
*/
function dealloc(value) {
	return characters = "", value;
}
/**
* @param {number} type
* @return {string}
*/
function delimit(type) {
	return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
/**
* @param {number} type
* @return {string}
*/
function whitespace(type) {
	while (character = peek()) if (character < 33) next();
	else break;
	return token(type) > 2 || token(character) > 3 ? "" : " ";
}
/**
* @param {number} index
* @param {number} count
* @return {string}
*/
function escaping(index, count) {
	while (--count && next()) if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
/**
* @param {number} type
* @return {number}
*/
function delimiter(type) {
	while (next()) switch (character) {
		case type: return position;
		case 34:
		case 39:
			if (type !== 34 && type !== 39) delimiter(character);
			break;
		case 40:
			if (type === 41) delimiter(type);
			break;
		case 92:
			next();
			break;
	}
	return position;
}
/**
* @param {number} type
* @param {number} index
* @return {number}
*/
function commenter(type, index) {
	while (next()) if (type + character === 57) break;
	else if (type + character === 84 && peek() === 47) break;
	return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
/**
* @param {number} index
* @return {string}
*/
function identifier(index) {
	while (!token(peek())) next();
	return slice(index, position);
}
var line, column, length, position, character, characters;
var init_Tokenizer = __esmMin((() => {
	init_Utility();
	line = 1;
	column = 1;
	length = 0;
	position = 0;
	character = 0;
	characters = "";
}));
//#endregion
//#region ../../node_modules/stylis/src/Parser.js
/**
* @param {string} value
* @return {object[]}
*/
function compile(value) {
	return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {string[]} rule
* @param {string[]} rules
* @param {string[]} rulesets
* @param {number[]} pseudo
* @param {number[]} points
* @param {string[]} declarations
* @return {object}
*/
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = "";
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;
	while (scanning) switch (previous = character, character = next()) {
		case 40: if (previous != 108 && charat(characters, length - 1) == 58) {
			if (indexof(characters += replace(delimit(character), "&", "&\f"), "&\f") != -1) ampersand = -1;
			break;
		}
		case 34:
		case 39:
		case 91:
			characters += delimit(character);
			break;
		case 9:
		case 10:
		case 13:
		case 32:
			characters += whitespace(previous);
			break;
		case 92:
			characters += escaping(caret() - 1, 7);
			continue;
		case 47:
			switch (peek()) {
				case 42:
				case 47:
					append(comment(commenter(next(), caret()), root, parent), declarations);
					break;
				default: characters += "/";
			}
			break;
		case 123 * variable: points[index++] = strlen(characters) * ampersand;
		case 125 * variable:
		case 59:
		case 0:
			switch (character) {
				case 0:
				case 125: scanning = 0;
				case 59 + offset:
					if (ampersand == -1) characters = replace(characters, /\f/g, "");
					if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ";", rule, parent, length - 1) : declaration(replace(characters, " ", "") + ";", rule, parent, length - 2), declarations);
					break;
				case 59: characters += ";";
				default:
					append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
					if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);
					else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
						case 100:
						case 108:
						case 109:
						case 115:
							parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
							break;
						default: parse(characters, reference, reference, reference, [""], children, 0, points, children);
					}
			}
			index = offset = property = 0, variable = ampersand = 1, type = characters = "", length = pseudo;
			break;
		case 58: length = 1 + strlen(characters), property = previous;
		default:
			if (variable < 1) {
				if (character == 123) --variable;
				else if (character == 125 && variable++ == 0 && prev() == 125) continue;
			}
			switch (characters += from(character), character * variable) {
				case 38:
					ampersand = offset > 0 ? 1 : (characters += "\f", -1);
					break;
				case 44:
					points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
					break;
				case 64:
					if (peek() === 45) characters += delimit(next());
					atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
					break;
				case 45: if (previous === 45 && strlen(characters) == 2) variable = 0;
			}
	}
	return rulesets;
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} index
* @param {number} offset
* @param {string[]} rules
* @param {number[]} points
* @param {string} type
* @param {string[]} props
* @param {string[]} children
* @param {number} length
* @return {object}
*/
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [""];
	var size = sizeof(rule);
	for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
}
/**
* @param {number} value
* @param {object} root
* @param {object?} parent
* @return {object}
*/
function comment(value, root, parent) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
/**
* @param {string} value
* @param {object} root
* @param {object?} parent
* @param {number} length
* @return {object}
*/
function declaration(value, root, parent, length) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
}
var init_Parser = __esmMin((() => {
	init_Enum();
	init_Utility();
	init_Tokenizer();
}));
//#endregion
//#region ../../node_modules/stylis/src/Prefixer.js
var init_Prefixer = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/stylis/src/Serializer.js
/**
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function serialize(children, callback) {
	var output = "";
	var length = sizeof(children);
	for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || "";
	return output;
}
/**
* @param {object} element
* @param {number} index
* @param {object[]} children
* @param {function} callback
* @return {string}
*/
function stringify(element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break;
		case IMPORT:
		case DECLARATION: return element.return = element.return || element.value;
		case COMMENT: return "";
		case KEYFRAMES: return element.return = element.value + "{" + serialize(element.children, callback) + "}";
		case RULESET: element.value = element.props.join(",");
	}
	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
var init_Serializer = __esmMin((() => {
	init_Enum();
	init_Utility();
}));
//#endregion
//#region ../../node_modules/stylis/src/Middleware.js
/**
* @param {function[]} collection
* @return {function}
*/
function middleware(collection) {
	var length = sizeof(collection);
	return function(element, index, children, callback) {
		var output = "";
		for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || "";
		return output;
	};
}
/**
* @param {function} callback
* @return {function}
*/
function rulesheet(callback) {
	return function(element) {
		if (!element.root) {
			if (element = element.return) callback(element);
		}
	};
}
var init_Middleware = __esmMin((() => {
	init_Utility();
}));
//#endregion
//#region ../../node_modules/stylis/index.js
var init_stylis = __esmMin((() => {
	init_Enum();
	init_Utility();
	init_Parser();
	init_Prefixer();
	init_Tokenizer();
	init_Serializer();
	init_Middleware();
}));
//#endregion
//#region ../../node_modules/toggle-selection/index.js
var require_toggle_selection = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function() {
		var selection = document.getSelection();
		if (!selection.rangeCount) return function() {};
		var active = document.activeElement;
		var ranges = [];
		for (var i = 0; i < selection.rangeCount; i++) ranges.push(selection.getRangeAt(i));
		switch (active.tagName.toUpperCase()) {
			case "INPUT":
			case "TEXTAREA":
				active.blur();
				break;
			default:
				active = null;
				break;
		}
		selection.removeAllRanges();
		return function() {
			selection.type === "Caret" && selection.removeAllRanges();
			if (!selection.rangeCount) ranges.forEach(function(range) {
				selection.addRange(range);
			});
			active && active.focus();
		};
	};
}));
//#endregion
//#region ../../node_modules/semver/internal/debug.js
var require_debug = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {};
}));
//#endregion
//#region ../../node_modules/semver/internal/constants.js
var require_constants = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const SEMVER_SPEC_VERSION = "2.0.0";
	const MAX_LENGTH = 256;
	const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	module.exports = {
		MAX_LENGTH,
		MAX_SAFE_COMPONENT_LENGTH: 16,
		MAX_SAFE_BUILD_LENGTH: MAX_LENGTH - 6,
		MAX_SAFE_INTEGER,
		RELEASE_TYPES: [
			"major",
			"premajor",
			"minor",
			"preminor",
			"patch",
			"prepatch",
			"prerelease"
		],
		SEMVER_SPEC_VERSION,
		FLAG_INCLUDE_PRERELEASE: 1,
		FLAG_LOOSE: 2
	};
}));
//#endregion
//#region ../../node_modules/semver/internal/re.js
var require_re = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = require_constants();
	const debug = require_debug();
	exports = module.exports = {};
	const re = exports.re = [];
	const safeRe = exports.safeRe = [];
	const src = exports.src = [];
	const safeSrc = exports.safeSrc = [];
	const t = exports.t = {};
	let R = 0;
	const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
	const safeRegexReplacements = [
		["\\s", 1],
		["\\d", MAX_LENGTH],
		[LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
	];
	const makeSafeRegex = (value) => {
		for (const [token, max] of safeRegexReplacements) value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
		return value;
	};
	const createToken = (name, value, isGlobal) => {
		const safe = makeSafeRegex(value);
		const index = R++;
		debug(name, index, value);
		t[name] = index;
		src[index] = value;
		safeSrc[index] = safe;
		re[index] = new RegExp(value, isGlobal ? "g" : void 0);
		safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
	};
	createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
	createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
	createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
	createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
	createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
	createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
	createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
	createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
	createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
	createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
	createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
	createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
	createToken("FULL", `^${src[t.FULLPLAIN]}$`);
	createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
	createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
	createToken("GTLT", "((?:<|>)?=?)");
	createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
	createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
	createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
	createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
	createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
	createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
	createToken("COERCEPLAIN", `(^|[^\\d])(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
	createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
	createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
	createToken("COERCERTL", src[t.COERCE], true);
	createToken("COERCERTLFULL", src[t.COERCEFULL], true);
	createToken("LONETILDE", "(?:~>?)");
	createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
	exports.tildeTrimReplace = "$1~";
	createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
	createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
	createToken("LONECARET", "(?:\\^)");
	createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
	exports.caretTrimReplace = "$1^";
	createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
	createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
	createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
	createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
	createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
	exports.comparatorTrimReplace = "$1$2$3";
	createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
	createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
	createToken("STAR", "(<|>)?=?\\s*\\*");
	createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
	createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
}));
//#endregion
//#region ../../node_modules/semver/internal/parse-options.js
var require_parse_options = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const looseOption = Object.freeze({ loose: true });
	const emptyOpts = Object.freeze({});
	const parseOptions = (options) => {
		if (!options) return emptyOpts;
		if (typeof options !== "object") return looseOption;
		return options;
	};
	module.exports = parseOptions;
}));
//#endregion
//#region ../../node_modules/semver/internal/identifiers.js
var require_identifiers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const numeric = /^[0-9]+$/;
	const compareIdentifiers = (a, b) => {
		if (typeof a === "number" && typeof b === "number") return a === b ? 0 : a < b ? -1 : 1;
		const anum = numeric.test(a);
		const bnum = numeric.test(b);
		if (anum && bnum) {
			a = +a;
			b = +b;
		}
		return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
	};
	const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
	module.exports = {
		compareIdentifiers,
		rcompareIdentifiers
	};
}));
//#endregion
//#region ../../node_modules/semver/classes/semver.js
var require_semver = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const debug = require_debug();
	const { MAX_LENGTH, MAX_SAFE_INTEGER } = require_constants();
	const { safeRe: re, t } = require_re();
	const parseOptions = require_parse_options();
	const { compareIdentifiers } = require_identifiers();
	const isPrereleaseIdentifier = (prerelease, identifier) => {
		const identifiers = identifier.split(".");
		if (identifiers.length > prerelease.length) return false;
		for (let i = 0; i < identifiers.length; i++) if (compareIdentifiers(prerelease[i], identifiers[i]) !== 0) return false;
		return true;
	};
	module.exports = class SemVer {
		constructor(version, options) {
			options = parseOptions(options);
			if (version instanceof SemVer) if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) return version;
			else version = version.version;
			else if (typeof version !== "string") throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
			if (version.length > MAX_LENGTH) throw new TypeError(`version is longer than ${MAX_LENGTH} characters`);
			debug("SemVer", version, options);
			this.options = options;
			this.loose = !!options.loose;
			this.includePrerelease = !!options.includePrerelease;
			const m = version.trim().match(options.loose ? re[t.LOOSE] : re[t.FULL]);
			if (!m) throw new TypeError(`Invalid Version: ${version}`);
			this.raw = version;
			this.major = +m[1];
			this.minor = +m[2];
			this.patch = +m[3];
			if (this.major > MAX_SAFE_INTEGER || this.major < 0) throw new TypeError("Invalid major version");
			if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) throw new TypeError("Invalid minor version");
			if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) throw new TypeError("Invalid patch version");
			if (!m[4]) this.prerelease = [];
			else this.prerelease = m[4].split(".").map((id) => {
				if (/^[0-9]+$/.test(id)) {
					const num = +id;
					if (num >= 0 && num < MAX_SAFE_INTEGER) return num;
				}
				return id;
			});
			this.build = m[5] ? m[5].split(".") : [];
			this.format();
		}
		format() {
			this.version = `${this.major}.${this.minor}.${this.patch}`;
			if (this.prerelease.length) this.version += `-${this.prerelease.join(".")}`;
			return this.version;
		}
		toString() {
			return this.version;
		}
		compare(other) {
			debug("SemVer.compare", this.version, this.options, other);
			if (!(other instanceof SemVer)) {
				if (typeof other === "string" && other === this.version) return 0;
				other = new SemVer(other, this.options);
			}
			if (other.version === this.version) return 0;
			return this.compareMain(other) || this.comparePre(other);
		}
		compareMain(other) {
			if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
			if (this.major < other.major) return -1;
			if (this.major > other.major) return 1;
			if (this.minor < other.minor) return -1;
			if (this.minor > other.minor) return 1;
			if (this.patch < other.patch) return -1;
			if (this.patch > other.patch) return 1;
			return 0;
		}
		comparePre(other) {
			if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
			if (this.prerelease.length && !other.prerelease.length) return -1;
			else if (!this.prerelease.length && other.prerelease.length) return 1;
			else if (!this.prerelease.length && !other.prerelease.length) return 0;
			let i = 0;
			do {
				const a = this.prerelease[i];
				const b = other.prerelease[i];
				debug("prerelease compare", i, a, b);
				if (a === void 0 && b === void 0) return 0;
				else if (b === void 0) return 1;
				else if (a === void 0) return -1;
				else if (a === b) continue;
				else return compareIdentifiers(a, b);
			} while (++i);
		}
		compareBuild(other) {
			if (!(other instanceof SemVer)) other = new SemVer(other, this.options);
			let i = 0;
			do {
				const a = this.build[i];
				const b = other.build[i];
				debug("build compare", i, a, b);
				if (a === void 0 && b === void 0) return 0;
				else if (b === void 0) return 1;
				else if (a === void 0) return -1;
				else if (a === b) continue;
				else return compareIdentifiers(a, b);
			} while (++i);
		}
		inc(release, identifier, identifierBase) {
			if (release.startsWith("pre")) {
				if (!identifier && identifierBase === false) throw new Error("invalid increment argument: identifier is empty");
				if (identifier) {
					const match = `-${identifier}`.match(this.options.loose ? re[t.PRERELEASELOOSE] : re[t.PRERELEASE]);
					if (!match || match[1] !== identifier) throw new Error(`invalid identifier: ${identifier}`);
				}
			}
			switch (release) {
				case "premajor":
					this.prerelease.length = 0;
					this.patch = 0;
					this.minor = 0;
					this.major++;
					this.inc("pre", identifier, identifierBase);
					break;
				case "preminor":
					this.prerelease.length = 0;
					this.patch = 0;
					this.minor++;
					this.inc("pre", identifier, identifierBase);
					break;
				case "prepatch":
					this.prerelease.length = 0;
					this.inc("patch", identifier, identifierBase);
					this.inc("pre", identifier, identifierBase);
					break;
				case "prerelease":
					if (this.prerelease.length === 0) this.inc("patch", identifier, identifierBase);
					this.inc("pre", identifier, identifierBase);
					break;
				case "release":
					if (this.prerelease.length === 0) throw new Error(`version ${this.raw} is not a prerelease`);
					this.prerelease.length = 0;
					break;
				case "major":
					if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) this.major++;
					this.minor = 0;
					this.patch = 0;
					this.prerelease = [];
					break;
				case "minor":
					if (this.patch !== 0 || this.prerelease.length === 0) this.minor++;
					this.patch = 0;
					this.prerelease = [];
					break;
				case "patch":
					if (this.prerelease.length === 0) this.patch++;
					this.prerelease = [];
					break;
				case "pre": {
					const base = Number(identifierBase) ? 1 : 0;
					if (this.prerelease.length === 0) this.prerelease = [base];
					else {
						let i = this.prerelease.length;
						while (--i >= 0) if (typeof this.prerelease[i] === "number") {
							this.prerelease[i]++;
							i = -2;
						}
						if (i === -1) {
							if (identifier === this.prerelease.join(".") && identifierBase === false) throw new Error("invalid increment argument: identifier already exists");
							this.prerelease.push(base);
						}
					}
					if (identifier) {
						let prerelease = [identifier, base];
						if (identifierBase === false) prerelease = [identifier];
						if (isPrereleaseIdentifier(this.prerelease, identifier)) {
							const prereleaseBase = this.prerelease[identifier.split(".").length];
							if (isNaN(prereleaseBase)) this.prerelease = prerelease;
						} else this.prerelease = prerelease;
					}
					break;
				}
				default: throw new Error(`invalid increment argument: ${release}`);
			}
			this.raw = this.format();
			if (this.build.length) this.raw += `+${this.build.join(".")}`;
			return this;
		}
	};
}));
//#endregion
//#region ../../node_modules/semver/functions/parse.js
var require_parse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const SemVer = require_semver();
	const parse = (version, options, throwErrors = false) => {
		if (version instanceof SemVer) return version;
		try {
			return new SemVer(version, options);
		} catch (er) {
			if (!throwErrors) return null;
			throw er;
		}
	};
	module.exports = parse;
}));
//#endregion
//#region ../../node_modules/semver/functions/diff.js
var require_diff = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const parse = require_parse();
	const diff = (version1, version2) => {
		const v1 = parse(version1, null, true);
		const v2 = parse(version2, null, true);
		const comparison = v1.compare(v2);
		if (comparison === 0) return null;
		const v1Higher = comparison > 0;
		const highVersion = v1Higher ? v1 : v2;
		const lowVersion = v1Higher ? v2 : v1;
		const highHasPre = !!highVersion.prerelease.length;
		if (!!lowVersion.prerelease.length && !highHasPre) {
			if (!lowVersion.patch && !lowVersion.minor) return "major";
			if (lowVersion.compareMain(highVersion) === 0) {
				if (lowVersion.minor && !lowVersion.patch) return "minor";
				return "patch";
			}
		}
		const prefix = highHasPre ? "pre" : "";
		if (v1.major !== v2.major) return prefix + "major";
		if (v1.minor !== v2.minor) return prefix + "minor";
		if (v1.patch !== v2.patch) return prefix + "patch";
		return "prerelease";
	};
	module.exports = diff;
}));
//#endregion
//#region ../../node_modules/semver/functions/compare.js
var require_compare = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const SemVer = require_semver();
	const compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
	module.exports = compare;
}));
//#endregion
//#region ../../node_modules/semver/functions/gt.js
var require_gt = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const compare = require_compare();
	const gt = (a, b, loose) => compare(a, b, loose) > 0;
	module.exports = gt;
}));
//#endregion
//#region ../../node_modules/semver/functions/major.js
var require_major = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const SemVer = require_semver();
	const major = (a, loose) => new SemVer(a, loose).major;
	module.exports = major;
}));
//#endregion
//#region ../../node_modules/semver/functions/minor.js
var require_minor = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const SemVer = require_semver();
	const minor = (a, loose) => new SemVer(a, loose).minor;
	module.exports = minor;
}));
//#endregion
//#region ../../node_modules/semver/functions/patch.js
var require_patch = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const SemVer = require_semver();
	const patch = (a, loose) => new SemVer(a, loose).patch;
	module.exports = patch;
}));
//#endregion
//#region ../../node_modules/semver/functions/prerelease.js
var require_prerelease = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	const parse = require_parse();
	const prerelease = (version, options) => {
		const parsed = parse(version, options);
		return parsed && parsed.prerelease.length ? parsed.prerelease : null;
	};
	module.exports = prerelease;
}));
//#endregion
//#region ../../node_modules/store2/dist/store2.js
var require_store2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/*! store2 - v2.14.4 - 2024-12-26
	* Copyright (c) 2024 Nathan Bubna; Licensed MIT */
	(function(window, define) {
		var _ = {
			version: "2.14.4",
			areas: {},
			apis: {},
			nsdelim: ".",
			inherit: function(api, o) {
				for (var p in api) if (!o.hasOwnProperty(p)) Object.defineProperty(o, p, Object.getOwnPropertyDescriptor(api, p));
				return o;
			},
			stringify: function(d, fn) {
				return d === void 0 || typeof d === "function" ? d + "" : JSON.stringify(d, fn || _.replace);
			},
			parse: function(s, fn) {
				try {
					return JSON.parse(s, fn || _.revive);
				} catch (e) {
					return s;
				}
			},
			fn: function(name, fn) {
				_.storeAPI[name] = fn;
				for (var api in _.apis) _.apis[api][name] = fn;
			},
			get: function(area, key) {
				return area.getItem(key);
			},
			set: function(area, key, string) {
				area.setItem(key, string);
			},
			remove: function(area, key) {
				area.removeItem(key);
			},
			key: function(area, i) {
				return area.key(i);
			},
			length: function(area) {
				return area.length;
			},
			clear: function(area) {
				area.clear();
			},
			Store: function(id, area, namespace) {
				var store = _.inherit(_.storeAPI, function(key, data, overwrite) {
					if (arguments.length === 0) return store.getAll();
					if (typeof data === "function") return store.transact(key, data, overwrite);
					if (data !== void 0) return store.set(key, data, overwrite);
					if (typeof key === "string" || typeof key === "number") return store.get(key);
					if (typeof key === "function") return store.each(key);
					if (!key) return store.clear();
					return store.setAll(key, data);
				});
				store._id = id;
				try {
					var testKey = "__store2_test";
					area.setItem(testKey, "ok");
					store._area = area;
					area.removeItem(testKey);
				} catch (e) {
					store._area = _.storage("fake");
				}
				store._ns = namespace || "";
				if (!_.areas[id]) _.areas[id] = store._area;
				if (!_.apis[store._ns + store._id]) _.apis[store._ns + store._id] = store;
				return store;
			},
			storeAPI: {
				area: function(id, area) {
					var store = this[id];
					if (!store || !store.area) {
						store = _.Store(id, area, this._ns);
						if (!this[id]) this[id] = store;
					}
					return store;
				},
				namespace: function(namespace, singleArea, delim) {
					delim = delim || this._delim || _.nsdelim;
					if (!namespace) return this._ns ? this._ns.substring(0, this._ns.length - delim.length) : "";
					var ns = namespace, store = this[ns];
					if (!store || !store.namespace) {
						store = _.Store(this._id, this._area, this._ns + ns + delim);
						store._delim = delim;
						if (!this[ns]) this[ns] = store;
						if (!singleArea) for (var name in _.areas) store.area(name, _.areas[name]);
					}
					return store;
				},
				isFake: function(force) {
					if (force) {
						this._real = this._area;
						this._area = _.storage("fake");
					} else if (force === false) this._area = this._real || this._area;
					return this._area.name === "fake";
				},
				toString: function() {
					return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]";
				},
				has: function(key) {
					if (this._area.has) return this._area.has(this._in(key));
					return !!(this._in(key) in this._area);
				},
				size: function() {
					return this.keys().length;
				},
				each: function(fn, fill) {
					for (var i = 0, m = _.length(this._area); i < m; i++) {
						var key = this._out(_.key(this._area, i));
						if (key !== void 0) {
							if (fn.call(this, key, this.get(key), fill) === false) break;
						}
						if (m > _.length(this._area)) {
							m--;
							i--;
						}
					}
					return fill || this;
				},
				keys: function(fillList) {
					return this.each(function(k, v, list) {
						list.push(k);
					}, fillList || []);
				},
				get: function(key, alt) {
					var s = _.get(this._area, this._in(key)), fn;
					if (typeof alt === "function") {
						fn = alt;
						alt = null;
					}
					return s !== null ? _.parse(s, fn) : alt != null ? alt : s;
				},
				getAll: function(fillObj) {
					return this.each(function(k, v, all) {
						all[k] = v;
					}, fillObj || {});
				},
				transact: function(key, fn, alt) {
					var val = this.get(key, alt), ret = fn(val);
					this.set(key, ret === void 0 ? val : ret);
					return this;
				},
				set: function(key, data, overwrite) {
					var d = this.get(key), replacer;
					if (d != null && overwrite === false) return data;
					if (typeof overwrite === "function") {
						replacer = overwrite;
						overwrite = void 0;
					}
					return _.set(this._area, this._in(key), _.stringify(data, replacer), overwrite) || d;
				},
				setAll: function(data, overwrite) {
					var changed, val;
					for (var key in data) {
						val = data[key];
						if (this.set(key, val, overwrite) !== val) changed = true;
					}
					return changed;
				},
				add: function(key, data, replacer) {
					var d = this.get(key);
					if (d instanceof Array) data = d.concat(data);
					else if (d !== null) {
						var type = typeof d;
						if (type === typeof data && type === "object") {
							for (var k in data) d[k] = data[k];
							data = d;
						} else data = d + data;
					}
					_.set(this._area, this._in(key), _.stringify(data, replacer));
					return data;
				},
				remove: function(key, alt) {
					var d = this.get(key, alt);
					_.remove(this._area, this._in(key));
					return d;
				},
				clear: function() {
					if (!this._ns) _.clear(this._area);
					else this.each(function(k) {
						_.remove(this._area, this._in(k));
					}, 1);
					return this;
				},
				clearAll: function() {
					var area = this._area;
					for (var id in _.areas) if (_.areas.hasOwnProperty(id)) {
						this._area = _.areas[id];
						this.clear();
					}
					this._area = area;
					return this;
				},
				_in: function(k) {
					if (typeof k !== "string") k = _.stringify(k);
					return this._ns ? this._ns + k : k;
				},
				_out: function(k) {
					return this._ns ? k && k.indexOf(this._ns) === 0 ? k.substring(this._ns.length) : void 0 : k;
				}
			},
			storage: function(name) {
				return _.inherit(_.storageAPI, {
					items: {},
					name
				});
			},
			storageAPI: {
				length: 0,
				has: function(k) {
					return this.items.hasOwnProperty(k);
				},
				key: function(i) {
					var c = 0;
					for (var k in this.items) if (this.has(k) && i === c++) return k;
				},
				setItem: function(k, v) {
					if (!this.has(k)) this.length++;
					this.items[k] = v;
				},
				removeItem: function(k) {
					if (this.has(k)) {
						delete this.items[k];
						this.length--;
					}
				},
				getItem: function(k) {
					return this.has(k) ? this.items[k] : null;
				},
				clear: function() {
					for (var k in this.items) this.removeItem(k);
				}
			}
		};
		var store = _.Store("local", (function() {
			try {
				return localStorage;
			} catch (e) {}
		})());
		store.local = store;
		store._ = _;
		store.area("session", (function() {
			try {
				return sessionStorage;
			} catch (e) {}
		})());
		store.area("page", _.storage("page"));
		if (typeof define === "function" && define.amd !== void 0) define("store2", [], function() {
			return store;
		});
		else if (typeof module !== "undefined" && module.exports) module.exports = store;
		else {
			if (window.store) _.conflict = window.store;
			window.store = store;
		}
	})(exports, exports && exports.define);
}));
//#endregion
//#region ../../node_modules/use-resize-observer/dist/bundle.esm.js
function useResolvedElement(subscriber, refOrElement) {
	var lastReportRef = (0, import_react$3.useRef)(null);
	var refOrElementRef = (0, import_react$3.useRef)(null);
	refOrElementRef.current = refOrElement;
	var cbElementRef = (0, import_react$3.useRef)(null);
	(0, import_react$3.useEffect)(function() {
		evaluateSubscription();
	});
	var evaluateSubscription = (0, import_react$3.useCallback)(function() {
		var cbElement = cbElementRef.current;
		var refOrElement = refOrElementRef.current;
		var element = cbElement ? cbElement : refOrElement ? refOrElement instanceof Element ? refOrElement : refOrElement.current : null;
		if (lastReportRef.current && lastReportRef.current.element === element && lastReportRef.current.subscriber === subscriber) return;
		if (lastReportRef.current && lastReportRef.current.cleanup) lastReportRef.current.cleanup();
		lastReportRef.current = {
			element,
			subscriber,
			cleanup: element ? subscriber(element) : void 0
		};
	}, [subscriber]);
	(0, import_react$3.useEffect)(function() {
		return function() {
			if (lastReportRef.current && lastReportRef.current.cleanup) {
				lastReportRef.current.cleanup();
				lastReportRef.current = null;
			}
		};
	}, []);
	return (0, import_react$3.useCallback)(function(element) {
		cbElementRef.current = element;
		evaluateSubscription();
	}, [evaluateSubscription]);
}
function extractSize(entry, boxProp, sizeType) {
	if (!entry[boxProp]) {
		if (boxProp === "contentBoxSize") return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
		return;
	}
	return entry[boxProp][0] ? entry[boxProp][0][sizeType] : entry[boxProp][sizeType];
}
function useResizeObserver(opts) {
	if (opts === void 0) opts = {};
	var onResize = opts.onResize;
	var onResizeRef = (0, import_react$3.useRef)(void 0);
	onResizeRef.current = onResize;
	var round = opts.round || Math.round;
	var resizeObserverRef = (0, import_react$3.useRef)();
	var _useState = (0, import_react$3.useState)({
		width: void 0,
		height: void 0
	}), size = _useState[0], setSize = _useState[1];
	var didUnmount = (0, import_react$3.useRef)(false);
	(0, import_react$3.useEffect)(function() {
		didUnmount.current = false;
		return function() {
			didUnmount.current = true;
		};
	}, []);
	var previous = (0, import_react$3.useRef)({
		width: void 0,
		height: void 0
	});
	var refCallback = useResolvedElement((0, import_react$3.useCallback)(function(element) {
		if (!resizeObserverRef.current || resizeObserverRef.current.box !== opts.box || resizeObserverRef.current.round !== round) resizeObserverRef.current = {
			box: opts.box,
			round,
			instance: new ResizeObserver(function(entries) {
				var entry = entries[0];
				var boxProp = opts.box === "border-box" ? "borderBoxSize" : opts.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
				var reportedWidth = extractSize(entry, boxProp, "inlineSize");
				var reportedHeight = extractSize(entry, boxProp, "blockSize");
				var newWidth = reportedWidth ? round(reportedWidth) : void 0;
				var newHeight = reportedHeight ? round(reportedHeight) : void 0;
				if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
					var newSize = {
						width: newWidth,
						height: newHeight
					};
					previous.current.width = newWidth;
					previous.current.height = newHeight;
					if (onResizeRef.current) onResizeRef.current(newSize);
					else if (!didUnmount.current) setSize(newSize);
				}
			})
		};
		resizeObserverRef.current.instance.observe(element, { box: opts.box });
		return function() {
			if (resizeObserverRef.current) resizeObserverRef.current.instance.unobserve(element);
		};
	}, [opts.box, round]), opts.ref);
	return (0, import_react$3.useMemo)(function() {
		return {
			ref: refCallback,
			width: size.width,
			height: size.height
		};
	}, [
		refCallback,
		size.width,
		size.height
	]);
}
var import_react$3;
var init_bundle_esm = __esmMin((() => {
	import_react$3 = /* @__PURE__ */ __toESM$1(require_react());
}));
//#endregion
//#region ../../node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js
var import_react$2, index;
var init_use_isomorphic_layout_effect_browser_esm = __esmMin((() => {
	import_react$2 = /* @__PURE__ */ __toESM$1(require_react());
	index = import_react$2.useLayoutEffect;
}));
//#endregion
//#region ../../node_modules/use-latest/dist/use-latest.esm.js
var import_react$1, useLatest;
var init_use_latest_esm = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM$1(require_react());
	init_use_isomorphic_layout_effect_browser_esm();
	useLatest = function useLatest(value) {
		var ref = import_react$1.useRef(value);
		index(function() {
			ref.current = value;
		});
		return ref;
	};
}));
//#endregion
//#region ../../node_modules/use-composed-ref/dist/use-composed-ref.esm.js
var import_react, updateRef, useComposedRef;
var init_use_composed_ref_esm = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM$1(require_react());
	updateRef = function updateRef(ref, value) {
		if (typeof ref === "function") {
			ref(value);
			return;
		}
		ref.current = value;
	};
	useComposedRef = function useComposedRef(libRef, userRef) {
		var prevUserRef = import_react.useRef();
		return import_react.useCallback(function(instance) {
			libRef.current = instance;
			if (prevUserRef.current) updateRef(prevUserRef.current, null);
			prevUserRef.current = userRef;
			if (!userRef) return;
			updateRef(userRef, instance);
		}, [userRef]);
	};
}));
//#endregion
//#region ../../node_modules/refractor/lang/bash.js
var require_bash = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = bash;
	bash.displayName = "bash";
	bash.aliases = ["shell"];
	function bash(Prism) {
		(function(Prism) {
			var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
			var commandAfterHeredoc = {
				pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
				lookbehind: true,
				alias: "punctuation",
				inside: null
			};
			var insideString = {
				bash: commandAfterHeredoc,
				environment: {
					pattern: RegExp("\\$" + envVars),
					alias: "constant"
				},
				variable: [
					{
						pattern: /\$?\(\([\s\S]+?\)\)/,
						greedy: true,
						inside: {
							variable: [{
								pattern: /(^\$\(\([\s\S]+)\)\)/,
								lookbehind: true
							}, /^\$\(\(/],
							number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
							operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
							punctuation: /\(\(?|\)\)?|,|;/
						}
					},
					{
						pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
						greedy: true,
						inside: { variable: /^\$\(|^`|\)$|`$/ }
					},
					{
						pattern: /\$\{[^}]+\}/,
						greedy: true,
						inside: {
							operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
							punctuation: /[\[\]]/,
							environment: {
								pattern: RegExp("(\\{)" + envVars),
								lookbehind: true,
								alias: "constant"
							}
						}
					},
					/\$(?:\w+|[#?*!@$])/
				],
				entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
			};
			Prism.languages.bash = {
				shebang: {
					pattern: /^#!\s*\/.*/,
					alias: "important"
				},
				comment: {
					pattern: /(^|[^"{\\$])#.*/,
					lookbehind: true
				},
				"function-name": [{
					pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
					lookbehind: true,
					alias: "function"
				}, {
					pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
					alias: "function"
				}],
				"for-or-select": {
					pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
					alias: "variable",
					lookbehind: true
				},
				"assign-left": {
					pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
					inside: { environment: {
						pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
						lookbehind: true,
						alias: "constant"
					} },
					alias: "variable",
					lookbehind: true
				},
				string: [
					{
						pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
						lookbehind: true,
						greedy: true,
						inside: insideString
					},
					{
						pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
						lookbehind: true,
						greedy: true,
						inside: { bash: commandAfterHeredoc }
					},
					{
						pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
						lookbehind: true,
						greedy: true,
						inside: insideString
					},
					{
						pattern: /(^|[^$\\])'[^']*'/,
						lookbehind: true,
						greedy: true
					},
					{
						pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
						greedy: true,
						inside: { entity: insideString.entity }
					}
				],
				environment: {
					pattern: RegExp("\\$?" + envVars),
					alias: "constant"
				},
				variable: insideString.variable,
				function: {
					pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
					lookbehind: true
				},
				keyword: {
					pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
					lookbehind: true
				},
				builtin: {
					pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
					lookbehind: true,
					alias: "class-name"
				},
				boolean: {
					pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
					lookbehind: true
				},
				"file-descriptor": {
					pattern: /\B&\d\b/,
					alias: "important"
				},
				operator: {
					pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
					inside: { "file-descriptor": {
						pattern: /^\d/,
						alias: "important"
					} }
				},
				punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
				number: {
					pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
					lookbehind: true
				}
			};
			commandAfterHeredoc.inside = Prism.languages.bash;
			var toBeCopied = [
				"comment",
				"function-name",
				"for-or-select",
				"assign-left",
				"string",
				"environment",
				"function",
				"keyword",
				"builtin",
				"boolean",
				"file-descriptor",
				"operator",
				"punctuation",
				"number"
			];
			var inside = insideString.variable[1].inside;
			for (var i = 0; i < toBeCopied.length; i++) inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
			Prism.languages.shell = Prism.languages.bash;
		})(Prism);
	}
}));
//#endregion
//#region ../../node_modules/refractor/lang/css.js
var require_css = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = css;
	css.displayName = "css";
	css.aliases = [];
	function css(Prism) {
		(function(Prism) {
			var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
			Prism.languages.css = {
				comment: /\/\*[\s\S]*?\*\//,
				atrule: {
					pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
					inside: {
						rule: /^@[\w-]+/,
						"selector-function-argument": {
							pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
							lookbehind: true,
							alias: "selector"
						},
						keyword: {
							pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
							lookbehind: true
						}
					}
				},
				url: {
					pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
					greedy: true,
					inside: {
						function: /^url/i,
						punctuation: /^\(|\)$/,
						string: {
							pattern: RegExp("^" + string.source + "$"),
							alias: "url"
						}
					}
				},
				selector: {
					pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + string.source + ")*(?=\\s*\\{)"),
					lookbehind: true
				},
				string: {
					pattern: string,
					greedy: true
				},
				property: {
					pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
					lookbehind: true
				},
				important: /!important\b/i,
				function: {
					pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
					lookbehind: true
				},
				punctuation: /[(){};:,]/
			};
			Prism.languages.css["atrule"].inside.rest = Prism.languages.css;
			var markup = Prism.languages.markup;
			if (markup) {
				markup.tag.addInlined("style", "css");
				markup.tag.addAttribute("style", "css");
			}
		})(Prism);
	}
}));
//#endregion
//#region ../../node_modules/refractor/lang/graphql.js
var require_graphql = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = graphql;
	graphql.displayName = "graphql";
	graphql.aliases = [];
	function graphql(Prism) {
		Prism.languages.graphql = {
			comment: /#.*/,
			description: {
				pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
				greedy: true,
				alias: "string",
				inside: { "language-markdown": {
					pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
					lookbehind: true,
					inside: Prism.languages.markdown
				} }
			},
			string: {
				pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
				greedy: true
			},
			number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
			boolean: /\b(?:false|true)\b/,
			variable: /\$[a-z_]\w*/i,
			directive: {
				pattern: /@[a-z_]\w*/i,
				alias: "function"
			},
			"attr-name": {
				pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
				greedy: true
			},
			"atom-input": {
				pattern: /\b[A-Z]\w*Input\b/,
				alias: "class-name"
			},
			scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
			constant: /\b[A-Z][A-Z_\d]*\b/,
			"class-name": {
				pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
				lookbehind: true
			},
			fragment: {
				pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
				lookbehind: true,
				alias: "function"
			},
			"definition-mutation": {
				pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
				lookbehind: true,
				alias: "function"
			},
			"definition-query": {
				pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
				lookbehind: true,
				alias: "function"
			},
			keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
			operator: /[!=|&]|\.{3}/,
			"property-query": /\w+(?=\s*\()/,
			object: /\w+(?=\s*\{)/,
			punctuation: /[!(){}\[\]:=,]/,
			property: /\w+/
		};
		Prism.hooks.add("after-tokenize", function afterTokenizeGraphql(env) {
			if (env.language !== "graphql") return;
			/**
			* get the graphql token stream that we want to customize
			*
			* @typedef {InstanceType<import("./prism-core")["Token"]>} Token
			* @type {Token[]}
			*/
			var validTokens = env.tokens.filter(function(token) {
				return typeof token !== "string" && token.type !== "comment" && token.type !== "scalar";
			});
			var currentIndex = 0;
			/**
			* Returns whether the token relative to the current index has the given type.
			*
			* @param {number} offset
			* @returns {Token | undefined}
			*/
			function getToken(offset) {
				return validTokens[currentIndex + offset];
			}
			/**
			* Returns whether the token relative to the current index has the given type.
			*
			* @param {readonly string[]} types
			* @param {number} [offset=0]
			* @returns {boolean}
			*/
			function isTokenType(types, offset) {
				offset = offset || 0;
				for (var i = 0; i < types.length; i++) {
					var token = getToken(i + offset);
					if (!token || token.type !== types[i]) return false;
				}
				return true;
			}
			/**
			* Returns the index of the closing bracket to an opening bracket.
			*
			* It is assumed that `token[currentIndex - 1]` is an opening bracket.
			*
			* If no closing bracket could be found, `-1` will be returned.
			*
			* @param {RegExp} open
			* @param {RegExp} close
			* @returns {number}
			*/
			function findClosingBracket(open, close) {
				var stackHeight = 1;
				for (var i = currentIndex; i < validTokens.length; i++) {
					var token = validTokens[i];
					var content = token.content;
					if (token.type === "punctuation" && typeof content === "string") {
						if (open.test(content)) stackHeight++;
						else if (close.test(content)) {
							stackHeight--;
							if (stackHeight === 0) return i;
						}
					}
				}
				return -1;
			}
			/**
			* Adds an alias to the given token.
			*
			* @param {Token} token
			* @param {string} alias
			* @returns {void}
			*/
			function addAlias(token, alias) {
				var aliases = token.alias;
				if (!aliases) token.alias = aliases = [];
				else if (!Array.isArray(aliases)) token.alias = aliases = [aliases];
				aliases.push(alias);
			}
			for (; currentIndex < validTokens.length;) {
				var startToken = validTokens[currentIndex++];
				if (startToken.type === "keyword" && startToken.content === "mutation") {
					var inputVariables = [];
					if (isTokenType(["definition-mutation", "punctuation"]) && getToken(1).content === "(") {
						currentIndex += 2;
						var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
						if (definitionEnd === -1) continue;
						for (; currentIndex < definitionEnd; currentIndex++) {
							var t = getToken(0);
							if (t.type === "variable") {
								addAlias(t, "variable-input");
								inputVariables.push(t.content);
							}
						}
						currentIndex = definitionEnd + 1;
					}
					if (isTokenType(["punctuation", "property-query"]) && getToken(0).content === "{") {
						currentIndex++;
						addAlias(getToken(0), "property-mutation");
						if (inputVariables.length > 0) {
							var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
							if (mutationEnd === -1) continue;
							for (var i = currentIndex; i < mutationEnd; i++) {
								var varToken = validTokens[i];
								if (varToken.type === "variable" && inputVariables.indexOf(varToken.content) >= 0) addAlias(varToken, "variable-input");
							}
						}
					}
				}
			}
		});
	}
}));
//#endregion
//#region ../../node_modules/refractor/lang/js-extras.js
var require_js_extras = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = jsExtras;
	jsExtras.displayName = "jsExtras";
	jsExtras.aliases = [];
	function jsExtras(Prism) {
		(function(Prism) {
			Prism.languages.insertBefore("javascript", "function-variable", { "method-variable": {
				pattern: RegExp("(\\.\\s*)" + Prism.languages.javascript["function-variable"].pattern.source),
				lookbehind: true,
				alias: [
					"function-variable",
					"method",
					"function",
					"property-access"
				]
			} });
			Prism.languages.insertBefore("javascript", "function", { method: {
				pattern: RegExp("(\\.\\s*)" + Prism.languages.javascript["function"].source),
				lookbehind: true,
				alias: ["function", "property-access"]
			} });
			Prism.languages.insertBefore("javascript", "constant", { "known-class-name": [{
				pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
				alias: "class-name"
			}, {
				pattern: /\b(?:[A-Z]\w*)Error\b/,
				alias: "class-name"
			}] });
			/**
			* Replaces the `<ID>` placeholder in the given pattern with a pattern for general JS identifiers.
			*
			* @param {string} source
			* @param {string} [flags]
			* @returns {RegExp}
			*/
			function withId(source, flags) {
				return RegExp(source.replace(/<ID>/g, function() {
					return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
				}), flags);
			}
			Prism.languages.insertBefore("javascript", "keyword", {
				imports: {
					pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
					lookbehind: true,
					inside: Prism.languages.javascript
				},
				exports: {
					pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
					lookbehind: true,
					inside: Prism.languages.javascript
				}
			});
			Prism.languages.javascript["keyword"].unshift({
				pattern: /\b(?:as|default|export|from|import)\b/,
				alias: "module"
			}, {
				pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
				alias: "control-flow"
			}, {
				pattern: /\bnull\b/,
				alias: ["null", "nil"]
			}, {
				pattern: /\bundefined\b/,
				alias: "nil"
			});
			Prism.languages.insertBefore("javascript", "operator", {
				spread: {
					pattern: /\.{3}/,
					alias: "operator"
				},
				arrow: {
					pattern: /=>/,
					alias: "operator"
				}
			});
			Prism.languages.insertBefore("javascript", "punctuation", {
				"property-access": {
					pattern: withId(/(\.\s*)#?<ID>/.source),
					lookbehind: true
				},
				"maybe-class-name": {
					pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
					lookbehind: true
				},
				dom: {
					pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
					alias: "variable"
				},
				console: {
					pattern: /\bconsole(?=\s*\.)/,
					alias: "class-name"
				}
			});
			var maybeClassNameTokens = [
				"function",
				"function-variable",
				"method",
				"method-variable",
				"property-access"
			];
			for (var i = 0; i < maybeClassNameTokens.length; i++) {
				var token = maybeClassNameTokens[i];
				var value = Prism.languages.javascript[token];
				if (Prism.util.type(value) === "RegExp") value = Prism.languages.javascript[token] = { pattern: value };
				var inside = value.inside || {};
				value.inside = inside;
				inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
			}
		})(Prism);
	}
}));
//#endregion
//#region ../../node_modules/refractor/lang/json.js
var require_json = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = json;
	json.displayName = "json";
	json.aliases = ["webmanifest"];
	function json(Prism) {
		Prism.languages.json = {
			property: {
				pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
				lookbehind: true,
				greedy: true
			},
			string: {
				pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
				lookbehind: true,
				greedy: true
			},
			comment: {
				pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
				greedy: true
			},
			number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
			punctuation: /[{}[\],]/,
			operator: /:/,
			boolean: /\b(?:false|true)\b/,
			null: {
				pattern: /\bnull\b/,
				alias: "keyword"
			}
		};
		Prism.languages.webmanifest = Prism.languages.json;
	}
}));
//#endregion
//#region ../../node_modules/refractor/lang/jsx.js
var require_jsx = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = jsx;
	jsx.displayName = "jsx";
	jsx.aliases = [];
	function jsx(Prism) {
		(function(Prism) {
			var javascript = Prism.util.clone(Prism.languages.javascript);
			var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
			var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
			var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
			/**
			* @param {string} source
			* @param {string} [flags]
			*/
			function re(source, flags) {
				source = source.replace(/<S>/g, function() {
					return space;
				}).replace(/<BRACES>/g, function() {
					return braces;
				}).replace(/<SPREAD>/g, function() {
					return spread;
				});
				return RegExp(source, flags);
			}
			spread = re(spread).source;
			Prism.languages.jsx = Prism.languages.extend("markup", javascript);
			Prism.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
			Prism.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
			Prism.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
			Prism.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
			Prism.languages.jsx.tag.inside["comment"] = javascript["comment"];
			Prism.languages.insertBefore("inside", "attr-name", { spread: {
				pattern: re(/<SPREAD>/.source),
				inside: Prism.languages.jsx
			} }, Prism.languages.jsx.tag);
			Prism.languages.insertBefore("inside", "special-attr", { script: {
				pattern: re(/=<BRACES>/.source),
				alias: "language-javascript",
				inside: {
					"script-punctuation": {
						pattern: /^=(?=\{)/,
						alias: "punctuation"
					},
					rest: Prism.languages.jsx
				}
			} }, Prism.languages.jsx.tag);
			var stringifyToken = function(token) {
				if (!token) return "";
				if (typeof token === "string") return token;
				if (typeof token.content === "string") return token.content;
				return token.content.map(stringifyToken).join("");
			};
			var walkTokens = function(tokens) {
				var openedTags = [];
				for (var i = 0; i < tokens.length; i++) {
					var token = tokens[i];
					var notTagNorBrace = false;
					if (typeof token !== "string") if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") if (token.content[0].content[0].content === "</") {
						if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) openedTags.pop();
					} else if (token.content[token.content.length - 1].content === "/>") {} else openedTags.push({
						tagName: stringifyToken(token.content[0].content[1]),
						openedBraces: 0
					});
					else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") openedTags[openedTags.length - 1].openedBraces++;
					else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") openedTags[openedTags.length - 1].openedBraces--;
					else notTagNorBrace = true;
					if (notTagNorBrace || typeof token === "string") {
						if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
							var plainText = stringifyToken(token);
							if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
								plainText += stringifyToken(tokens[i + 1]);
								tokens.splice(i + 1, 1);
							}
							if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
								plainText = stringifyToken(tokens[i - 1]) + plainText;
								tokens.splice(i - 1, 1);
								i--;
							}
							tokens[i] = new Prism.Token("plain-text", plainText, null, plainText);
						}
					}
					if (token.content && typeof token.content !== "string") walkTokens(token.content);
				}
			};
			Prism.hooks.add("after-tokenize", function(env) {
				if (env.language !== "jsx" && env.language !== "tsx") return;
				walkTokens(env.tokens);
			});
		})(Prism);
	}
}));
//#endregion
//#region ../../node_modules/refractor/lang/markdown.js
var require_markdown = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = markdown;
	markdown.displayName = "markdown";
	markdown.aliases = ["md"];
	function markdown(Prism) {
		(function(Prism) {
			var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
			/**
			* This function is intended for the creation of the bold or italic pattern.
			*
			* This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
			*
			* _Note:_ Keep in mind that this adds a capturing group.
			*
			* @param {string} pattern
			* @returns {RegExp}
			*/
			function createInline(pattern) {
				pattern = pattern.replace(/<inner>/g, function() {
					return inner;
				});
				return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
			}
			var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
			var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
				return tableCell;
			});
			var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
			Prism.languages.markdown = Prism.languages.extend("markup", {});
			Prism.languages.insertBefore("markdown", "prolog", {
				"front-matter-block": {
					pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
					lookbehind: true,
					greedy: true,
					inside: {
						punctuation: /^---|---$/,
						"front-matter": {
							pattern: /\S+(?:\s+\S+)*/,
							alias: ["yaml", "language-yaml"],
							inside: Prism.languages.yaml
						}
					}
				},
				blockquote: {
					pattern: /^>(?:[\t ]*>)*/m,
					alias: "punctuation"
				},
				table: {
					pattern: RegExp("^" + tableRow + tableLine + "(?:" + tableRow + ")*", "m"),
					inside: {
						"table-data-rows": {
							pattern: RegExp("^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"),
							lookbehind: true,
							inside: {
								"table-data": {
									pattern: RegExp(tableCell),
									inside: Prism.languages.markdown
								},
								punctuation: /\|/
							}
						},
						"table-line": {
							pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
							lookbehind: true,
							inside: { punctuation: /\||:?-{3,}:?/ }
						},
						"table-header-row": {
							pattern: RegExp("^" + tableRow + "$"),
							inside: {
								"table-header": {
									pattern: RegExp(tableCell),
									alias: "important",
									inside: Prism.languages.markdown
								},
								punctuation: /\|/
							}
						}
					}
				},
				code: [{
					pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
					lookbehind: true,
					alias: "keyword"
				}, {
					pattern: /^```[\s\S]*?^```$/m,
					greedy: true,
					inside: {
						"code-block": {
							pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
							lookbehind: true
						},
						"code-language": {
							pattern: /^(```).+/,
							lookbehind: true
						},
						punctuation: /```/
					}
				}],
				title: [{
					pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
					alias: "important",
					inside: { punctuation: /==+$|--+$/ }
				}, {
					pattern: /(^\s*)#.+/m,
					lookbehind: true,
					alias: "important",
					inside: { punctuation: /^#+|#+$/ }
				}],
				hr: {
					pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
					lookbehind: true,
					alias: "punctuation"
				},
				list: {
					pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
					lookbehind: true,
					alias: "punctuation"
				},
				"url-reference": {
					pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
					inside: {
						variable: {
							pattern: /^(!?\[)[^\]]+/,
							lookbehind: true
						},
						string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
						punctuation: /^[\[\]!:]|[<>]/
					},
					alias: "url"
				},
				bold: {
					pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
					lookbehind: true,
					greedy: true,
					inside: {
						content: {
							pattern: /(^..)[\s\S]+(?=..$)/,
							lookbehind: true,
							inside: {}
						},
						punctuation: /\*\*|__/
					}
				},
				italic: {
					pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
					lookbehind: true,
					greedy: true,
					inside: {
						content: {
							pattern: /(^.)[\s\S]+(?=.$)/,
							lookbehind: true,
							inside: {}
						},
						punctuation: /[*_]/
					}
				},
				strike: {
					pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
					lookbehind: true,
					greedy: true,
					inside: {
						content: {
							pattern: /(^~~?)[\s\S]+(?=\1$)/,
							lookbehind: true,
							inside: {}
						},
						punctuation: /~~?/
					}
				},
				"code-snippet": {
					pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
					lookbehind: true,
					greedy: true,
					alias: ["code", "keyword"]
				},
				url: {
					pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
					lookbehind: true,
					greedy: true,
					inside: {
						operator: /^!/,
						content: {
							pattern: /(^\[)[^\]]+(?=\])/,
							lookbehind: true,
							inside: {}
						},
						variable: {
							pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
							lookbehind: true
						},
						url: {
							pattern: /(^\]\()[^\s)]+/,
							lookbehind: true
						},
						string: {
							pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
							lookbehind: true
						}
					}
				}
			});
			[
				"url",
				"bold",
				"italic",
				"strike"
			].forEach(function(token) {
				[
					"url",
					"bold",
					"italic",
					"strike",
					"code-snippet"
				].forEach(function(inside) {
					if (token !== inside) Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
				});
			});
			Prism.hooks.add("after-tokenize", function(env) {
				if (env.language !== "markdown" && env.language !== "md") return;
				function walkTokens(tokens) {
					if (!tokens || typeof tokens === "string") return;
					for (var i = 0, l = tokens.length; i < l; i++) {
						var token = tokens[i];
						if (token.type !== "code") {
							walkTokens(token.content);
							continue;
						}
						var codeLang = token.content[1];
						var codeBlock = token.content[3];
						if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content === "string") {
							var lang = codeLang.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
							lang = (/[a-z][\w-]*/i.exec(lang) || [""])[0].toLowerCase();
							var alias = "language-" + lang;
							if (!codeBlock.alias) codeBlock.alias = [alias];
							else if (typeof codeBlock.alias === "string") codeBlock.alias = [codeBlock.alias, alias];
							else codeBlock.alias.push(alias);
						}
					}
				}
				walkTokens(env.tokens);
			});
			Prism.hooks.add("wrap", function(env) {
				if (env.type !== "code-block") return;
				var codeLang = "";
				for (var i = 0, l = env.classes.length; i < l; i++) {
					var cls = env.classes[i];
					var match = /language-(.+)/.exec(cls);
					if (match) {
						codeLang = match[1];
						break;
					}
				}
				var grammar = Prism.languages[codeLang];
				if (!grammar) {
					if (codeLang && codeLang !== "none" && Prism.plugins.autoloader) {
						var id = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 0x2386f26fc10000);
						env.attributes["id"] = id;
						Prism.plugins.autoloader.loadLanguages(codeLang, function() {
							var ele = document.getElementById(id);
							if (ele) ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
						});
					}
				} else env.content = Prism.highlight(textContent(env.content.value), grammar, codeLang);
			});
			var tagPattern = RegExp(Prism.languages.markup.tag.pattern.source, "gi");
			/**
			* A list of known entity names.
			*
			* This will always be incomplete to save space. The current list is the one used by lowdash's unescape function.
			*
			* @see {@link https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/unescape.js#L2}
			*/
			var KNOWN_ENTITY_NAMES = {
				amp: "&",
				lt: "<",
				gt: ">",
				quot: "\""
			};
			var fromCodePoint = String.fromCodePoint || String.fromCharCode;
			/**
			* Returns the text content of a given HTML source code string.
			*
			* @param {string} html
			* @returns {string}
			*/
			function textContent(html) {
				var text = html.replace(tagPattern, "");
				text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m, code) {
					code = code.toLowerCase();
					if (code[0] === "#") {
						var value;
						if (code[1] === "x") value = parseInt(code.slice(2), 16);
						else value = Number(code.slice(1));
						return fromCodePoint(value);
					} else {
						var known = KNOWN_ENTITY_NAMES[code];
						if (known) return known;
						return m;
					}
				});
				return text;
			}
			Prism.languages.md = Prism.languages.markdown;
		})(Prism);
	}
}));
//#endregion
//#region ../../node_modules/refractor/lang/markup.js
var require_markup = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = markup;
	markup.displayName = "markup";
	markup.aliases = [
		"html",
		"mathml",
		"svg",
		"xml",
		"ssml",
		"atom",
		"rss"
	];
	function markup(Prism) {
		Prism.languages.markup = {
			comment: {
				pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
				greedy: true
			},
			prolog: {
				pattern: /<\?[\s\S]+?\?>/,
				greedy: true
			},
			doctype: {
				pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
				greedy: true,
				inside: {
					"internal-subset": {
						pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
						lookbehind: true,
						greedy: true,
						inside: null
					},
					string: {
						pattern: /"[^"]*"|'[^']*'/,
						greedy: true
					},
					punctuation: /^<!|>$|[[\]]/,
					"doctype-tag": /^DOCTYPE/i,
					name: /[^\s<>'"]+/
				}
			},
			cdata: {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				greedy: true
			},
			tag: {
				pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
				greedy: true,
				inside: {
					tag: {
						pattern: /^<\/?[^\s>\/]+/,
						inside: {
							punctuation: /^<\/?/,
							namespace: /^[^\s>\/:]+:/
						}
					},
					"special-attr": [],
					"attr-value": {
						pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
						inside: { punctuation: [{
							pattern: /^=/,
							alias: "attr-equals"
						}, /"|'/] }
					},
					punctuation: /\/?>/,
					"attr-name": {
						pattern: /[^\s>\/]+/,
						inside: { namespace: /^[^\s>\/:]+:/ }
					}
				}
			},
			entity: [{
				pattern: /&[\da-z]{1,8};/i,
				alias: "named-entity"
			}, /&#x?[\da-f]{1,8};/i]
		};
		Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = Prism.languages.markup["entity"];
		Prism.languages.markup["doctype"].inside["internal-subset"].inside = Prism.languages.markup;
		Prism.hooks.add("wrap", function(env) {
			if (env.type === "entity") env.attributes["title"] = env.content.value.replace(/&amp;/, "&");
		});
		Object.defineProperty(Prism.languages.markup.tag, "addInlined", { 
		/**
		* Adds an inlined language to markup.
		*
		* An example of an inlined language is CSS with `<style>` tags.
		*
		* @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
		* case insensitive.
		* @param {string} lang The language key.
		* @example
		* addInlined('style', 'css');
		*/
value: function addInlined(tagName, lang) {
			var includedCdataInside = {};
			includedCdataInside["language-" + lang] = {
				pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
				lookbehind: true,
				inside: Prism.languages[lang]
			};
			includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
			var inside = { "included-cdata": {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			} };
			inside["language-" + lang] = {
				pattern: /[\s\S]+/,
				inside: Prism.languages[lang]
			};
			var def = {};
			def[tagName] = {
				pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
					return tagName;
				}), "i"),
				lookbehind: true,
				greedy: true,
				inside
			};
			Prism.languages.insertBefore("markup", "cdata", def);
		} });
		Object.defineProperty(Prism.languages.markup.tag, "addAttribute", { 
		/**
		* Adds an pattern to highlight languages embedded in HTML attributes.
		*
		* An example of an inlined language is CSS with `style` attributes.
		*
		* @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
		* case insensitive.
		* @param {string} lang The language key.
		* @example
		* addAttribute('style', 'css');
		*/
value: function(attrName, lang) {
			Prism.languages.markup.tag.inside["special-attr"].push({
				pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
				lookbehind: true,
				inside: {
					"attr-name": /^[^\s=]+/,
					"attr-value": {
						pattern: /=[\s\S]+/,
						inside: {
							value: {
								pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
								lookbehind: true,
								alias: [lang, "language-" + lang],
								inside: Prism.languages[lang]
							},
							punctuation: [{
								pattern: /^=/,
								alias: "attr-equals"
							}, /"|'/]
						}
					}
				}
			});
		} });
		Prism.languages.html = Prism.languages.markup;
		Prism.languages.mathml = Prism.languages.markup;
		Prism.languages.svg = Prism.languages.markup;
		Prism.languages.xml = Prism.languages.extend("markup", {});
		Prism.languages.ssml = Prism.languages.xml;
		Prism.languages.atom = Prism.languages.xml;
		Prism.languages.rss = Prism.languages.xml;
	}
}));
//#endregion
//#region ../../node_modules/refractor/lang/typescript.js
var require_typescript = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = typescript;
	typescript.displayName = "typescript";
	typescript.aliases = ["ts"];
	function typescript(Prism) {
		(function(Prism) {
			Prism.languages.typescript = Prism.languages.extend("javascript", {
				"class-name": {
					pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
					lookbehind: true,
					greedy: true,
					inside: null
				},
				builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
			});
			Prism.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
			delete Prism.languages.typescript["parameter"];
			delete Prism.languages.typescript["literal-property"];
			var typeInside = Prism.languages.extend("typescript", {});
			delete typeInside["class-name"];
			Prism.languages.typescript["class-name"].inside = typeInside;
			Prism.languages.insertBefore("typescript", "function", {
				decorator: {
					pattern: /@[$\w\xA0-\uFFFF]+/,
					inside: {
						at: {
							pattern: /^@/,
							alias: "operator"
						},
						function: /^[\s\S]+/
					}
				},
				"generic-function": {
					pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
					greedy: true,
					inside: {
						function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
						generic: {
							pattern: /<[\s\S]+/,
							alias: "class-name",
							inside: typeInside
						}
					}
				}
			});
			Prism.languages.ts = Prism.languages.typescript;
		})(Prism);
	}
}));
//#endregion
//#region ../../node_modules/refractor/lang/tsx.js
var require_tsx = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var refractorJsx = require_jsx();
	var refractorTypescript = require_typescript();
	module.exports = tsx;
	tsx.displayName = "tsx";
	tsx.aliases = [];
	function tsx(Prism) {
		Prism.register(refractorJsx);
		Prism.register(refractorTypescript);
		(function(Prism) {
			var typescript = Prism.util.clone(Prism.languages.typescript);
			Prism.languages.tsx = Prism.languages.extend("jsx", typescript);
			delete Prism.languages.tsx["parameter"];
			delete Prism.languages.tsx["literal-property"];
			var tag = Prism.languages.tsx.tag;
			tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
			tag.lookbehind = true;
		})(Prism);
	}
}));
//#endregion
//#region ../../node_modules/refractor/lang/yaml.js
var require_yaml = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = yaml;
	yaml.displayName = "yaml";
	yaml.aliases = ["yml"];
	function yaml(Prism) {
		(function(Prism) {
			var anchorOrAlias = /[*&][^\s[\]{},]+/;
			var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
			var properties = "(?:" + tag.source + "(?:[ 	]+" + anchorOrAlias.source + ")?|" + anchorOrAlias.source + "(?:[ 	]+" + tag.source + ")?)";
			var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
				return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
			});
			var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
			/**
			*
			* @param {string} value
			* @param {string} [flags]
			* @returns {RegExp}
			*/
			function createValuePattern(value, flags) {
				flags = (flags || "").replace(/m/g, "") + "m";
				var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
					return properties;
				}).replace(/<<value>>/g, function() {
					return value;
				});
				return RegExp(pattern, flags);
			}
			Prism.languages.yaml = {
				scalar: {
					pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
						return properties;
					})),
					lookbehind: true,
					alias: "string"
				},
				comment: /#.*/,
				key: {
					pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
						return properties;
					}).replace(/<<key>>/g, function() {
						return "(?:" + plainKey + "|" + string + ")";
					})),
					lookbehind: true,
					greedy: true,
					alias: "atrule"
				},
				directive: {
					pattern: /(^[ \t]*)%.+/m,
					lookbehind: true,
					alias: "important"
				},
				datetime: {
					pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
					lookbehind: true,
					alias: "number"
				},
				boolean: {
					pattern: createValuePattern(/false|true/.source, "i"),
					lookbehind: true,
					alias: "important"
				},
				null: {
					pattern: createValuePattern(/null|~/.source, "i"),
					lookbehind: true,
					alias: "important"
				},
				string: {
					pattern: createValuePattern(string),
					lookbehind: true,
					greedy: true
				},
				number: {
					pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
					lookbehind: true
				},
				tag,
				important: anchorOrAlias,
				punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
			};
			Prism.languages.yml = Prism.languages.yaml;
		})(Prism);
	}
}));
//#endregion
//#region ../../node_modules/refractor/node_modules/character-entities-legacy/index.json
var require_character_entities_legacy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		"AElig": "Æ",
		"AMP": "&",
		"Aacute": "Á",
		"Acirc": "Â",
		"Agrave": "À",
		"Aring": "Å",
		"Atilde": "Ã",
		"Auml": "Ä",
		"COPY": "©",
		"Ccedil": "Ç",
		"ETH": "Ð",
		"Eacute": "É",
		"Ecirc": "Ê",
		"Egrave": "È",
		"Euml": "Ë",
		"GT": ">",
		"Iacute": "Í",
		"Icirc": "Î",
		"Igrave": "Ì",
		"Iuml": "Ï",
		"LT": "<",
		"Ntilde": "Ñ",
		"Oacute": "Ó",
		"Ocirc": "Ô",
		"Ograve": "Ò",
		"Oslash": "Ø",
		"Otilde": "Õ",
		"Ouml": "Ö",
		"QUOT": "\"",
		"REG": "®",
		"THORN": "Þ",
		"Uacute": "Ú",
		"Ucirc": "Û",
		"Ugrave": "Ù",
		"Uuml": "Ü",
		"Yacute": "Ý",
		"aacute": "á",
		"acirc": "â",
		"acute": "´",
		"aelig": "æ",
		"agrave": "à",
		"amp": "&",
		"aring": "å",
		"atilde": "ã",
		"auml": "ä",
		"brvbar": "¦",
		"ccedil": "ç",
		"cedil": "¸",
		"cent": "¢",
		"copy": "©",
		"curren": "¤",
		"deg": "°",
		"divide": "÷",
		"eacute": "é",
		"ecirc": "ê",
		"egrave": "è",
		"eth": "ð",
		"euml": "ë",
		"frac12": "½",
		"frac14": "¼",
		"frac34": "¾",
		"gt": ">",
		"iacute": "í",
		"icirc": "î",
		"iexcl": "¡",
		"igrave": "ì",
		"iquest": "¿",
		"iuml": "ï",
		"laquo": "«",
		"lt": "<",
		"macr": "¯",
		"micro": "µ",
		"middot": "·",
		"nbsp": "\xA0",
		"not": "¬",
		"ntilde": "ñ",
		"oacute": "ó",
		"ocirc": "ô",
		"ograve": "ò",
		"ordf": "ª",
		"ordm": "º",
		"oslash": "ø",
		"otilde": "õ",
		"ouml": "ö",
		"para": "¶",
		"plusmn": "±",
		"pound": "£",
		"quot": "\"",
		"raquo": "»",
		"reg": "®",
		"sect": "§",
		"shy": "­",
		"sup1": "¹",
		"sup2": "²",
		"sup3": "³",
		"szlig": "ß",
		"thorn": "þ",
		"times": "×",
		"uacute": "ú",
		"ucirc": "û",
		"ugrave": "ù",
		"uml": "¨",
		"uuml": "ü",
		"yacute": "ý",
		"yen": "¥",
		"yuml": "ÿ"
	};
}));
//#endregion
//#region ../../node_modules/refractor/node_modules/character-reference-invalid/index.json
var require_character_reference_invalid = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = {
		"0": "�",
		"128": "€",
		"130": "‚",
		"131": "ƒ",
		"132": "„",
		"133": "…",
		"134": "†",
		"135": "‡",
		"136": "ˆ",
		"137": "‰",
		"138": "Š",
		"139": "‹",
		"140": "Œ",
		"142": "Ž",
		"145": "‘",
		"146": "’",
		"147": "“",
		"148": "”",
		"149": "•",
		"150": "–",
		"151": "—",
		"152": "˜",
		"153": "™",
		"154": "š",
		"155": "›",
		"156": "œ",
		"158": "ž",
		"159": "Ÿ"
	};
}));
//#endregion
//#region ../../node_modules/refractor/node_modules/is-decimal/index.js
var require_is_decimal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = decimal;
	function decimal(character) {
		var code = typeof character === "string" ? character.charCodeAt(0) : character;
		return code >= 48 && code <= 57;
	}
}));
//#endregion
//#region ../../node_modules/refractor/node_modules/is-hexadecimal/index.js
var require_is_hexadecimal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = hexadecimal;
	function hexadecimal(character) {
		var code = typeof character === "string" ? character.charCodeAt(0) : character;
		return code >= 97 && code <= 102 || code >= 65 && code <= 70 || code >= 48 && code <= 57;
	}
}));
//#endregion
//#region ../../node_modules/refractor/node_modules/is-alphabetical/index.js
var require_is_alphabetical = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = alphabetical;
	function alphabetical(character) {
		var code = typeof character === "string" ? character.charCodeAt(0) : character;
		return code >= 97 && code <= 122 || code >= 65 && code <= 90;
	}
}));
//#endregion
//#region ../../node_modules/refractor/node_modules/is-alphanumerical/index.js
var require_is_alphanumerical = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var alphabetical = require_is_alphabetical();
	var decimal = require_is_decimal();
	module.exports = alphanumerical;
	function alphanumerical(character) {
		return alphabetical(character) || decimal(character);
	}
}));
//#endregion
//#region ../../node_modules/refractor/node_modules/parse-entities/decode-entity.browser.js
var require_decode_entity_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var el;
	var semicolon = 59;
	module.exports = decodeEntity;
	function decodeEntity(characters) {
		var entity = "&" + characters + ";";
		var char;
		el = el || document.createElement("i");
		el.innerHTML = entity;
		char = el.textContent;
		if (char.charCodeAt(char.length - 1) === semicolon && characters !== "semi") return false;
		return char === entity ? false : char;
	}
}));
//#endregion
//#region ../../node_modules/refractor/node_modules/parse-entities/index.js
var require_parse_entities = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var legacy = require_character_entities_legacy();
	var invalid = require_character_reference_invalid();
	var decimal = require_is_decimal();
	var hexadecimal = require_is_hexadecimal();
	var alphanumerical = require_is_alphanumerical();
	var decodeEntity = require_decode_entity_browser();
	module.exports = parseEntities;
	var own = {}.hasOwnProperty;
	var fromCharCode = String.fromCharCode;
	var noop = Function.prototype;
	var defaults = {
		warning: null,
		reference: null,
		text: null,
		warningContext: null,
		referenceContext: null,
		textContext: null,
		position: {},
		additional: null,
		attribute: false,
		nonTerminated: true
	};
	var tab = 9;
	var lineFeed = 10;
	var formFeed = 12;
	var space = 32;
	var ampersand = 38;
	var semicolon = 59;
	var lessThan = 60;
	var equalsTo = 61;
	var numberSign = 35;
	var uppercaseX = 88;
	var lowercaseX = 120;
	var replacementCharacter = 65533;
	var name = "named";
	var hexa = "hexadecimal";
	var deci = "decimal";
	var bases = {};
	bases[hexa] = 16;
	bases[deci] = 10;
	var tests = {};
	tests[name] = alphanumerical;
	tests[deci] = decimal;
	tests[hexa] = hexadecimal;
	var namedNotTerminated = 1;
	var numericNotTerminated = 2;
	var namedEmpty = 3;
	var numericEmpty = 4;
	var namedUnknown = 5;
	var numericDisallowed = 6;
	var numericProhibited = 7;
	var messages = {};
	messages[namedNotTerminated] = "Named character references must be terminated by a semicolon";
	messages[numericNotTerminated] = "Numeric character references must be terminated by a semicolon";
	messages[namedEmpty] = "Named character references cannot be empty";
	messages[numericEmpty] = "Numeric character references cannot be empty";
	messages[namedUnknown] = "Named character references must be known";
	messages[numericDisallowed] = "Numeric character references cannot be disallowed";
	messages[numericProhibited] = "Numeric character references cannot be outside the permissible Unicode range";
	function parseEntities(value, options) {
		var settings = {};
		var option;
		var key;
		if (!options) options = {};
		for (key in defaults) {
			option = options[key];
			settings[key] = option === null || option === void 0 ? defaults[key] : option;
		}
		if (settings.position.indent || settings.position.start) {
			settings.indent = settings.position.indent || [];
			settings.position = settings.position.start;
		}
		return parse(value, settings);
	}
	function parse(value, settings) {
		var additional = settings.additional;
		var nonTerminated = settings.nonTerminated;
		var handleText = settings.text;
		var handleReference = settings.reference;
		var handleWarning = settings.warning;
		var textContext = settings.textContext;
		var referenceContext = settings.referenceContext;
		var warningContext = settings.warningContext;
		var pos = settings.position;
		var indent = settings.indent || [];
		var length = value.length;
		var index = 0;
		var lines = -1;
		var column = pos.column || 1;
		var line = pos.line || 1;
		var queue = "";
		var result = [];
		var entityCharacters;
		var namedEntity;
		var terminated;
		var characters;
		var character;
		var reference;
		var following;
		var warning;
		var reason;
		var output;
		var entity;
		var begin;
		var start;
		var type;
		var test;
		var prev;
		var next;
		var diff;
		var end;
		if (typeof additional === "string") additional = additional.charCodeAt(0);
		prev = now();
		warning = handleWarning ? parseError : noop;
		index--;
		length++;
		while (++index < length) {
			if (character === lineFeed) column = indent[lines] || 1;
			character = value.charCodeAt(index);
			if (character === ampersand) {
				following = value.charCodeAt(index + 1);
				if (following === tab || following === lineFeed || following === formFeed || following === space || following === ampersand || following === lessThan || following !== following || additional && following === additional) {
					queue += fromCharCode(character);
					column++;
					continue;
				}
				start = index + 1;
				begin = start;
				end = start;
				if (following === numberSign) {
					end = ++begin;
					following = value.charCodeAt(end);
					if (following === uppercaseX || following === lowercaseX) {
						type = hexa;
						end = ++begin;
					} else type = deci;
				} else type = name;
				entityCharacters = "";
				entity = "";
				characters = "";
				test = tests[type];
				end--;
				while (++end < length) {
					following = value.charCodeAt(end);
					if (!test(following)) break;
					characters += fromCharCode(following);
					if (type === name && own.call(legacy, characters)) {
						entityCharacters = characters;
						entity = legacy[characters];
					}
				}
				terminated = value.charCodeAt(end) === semicolon;
				if (terminated) {
					end++;
					namedEntity = type === name ? decodeEntity(characters) : false;
					if (namedEntity) {
						entityCharacters = characters;
						entity = namedEntity;
					}
				}
				diff = 1 + end - start;
				if (!terminated && !nonTerminated) {} else if (!characters) {
					if (type !== name) warning(numericEmpty, diff);
				} else if (type === name) {
					if (terminated && !entity) warning(namedUnknown, 1);
					else {
						if (entityCharacters !== characters) {
							end = begin + entityCharacters.length;
							diff = 1 + end - begin;
							terminated = false;
						}
						if (!terminated) {
							reason = entityCharacters ? namedNotTerminated : namedEmpty;
							if (settings.attribute) {
								following = value.charCodeAt(end);
								if (following === equalsTo) {
									warning(reason, diff);
									entity = null;
								} else if (alphanumerical(following)) entity = null;
								else warning(reason, diff);
							} else warning(reason, diff);
						}
					}
					reference = entity;
				} else {
					if (!terminated) warning(numericNotTerminated, diff);
					reference = parseInt(characters, bases[type]);
					if (prohibited(reference)) {
						warning(numericProhibited, diff);
						reference = fromCharCode(replacementCharacter);
					} else if (reference in invalid) {
						warning(numericDisallowed, diff);
						reference = invalid[reference];
					} else {
						output = "";
						if (disallowed(reference)) warning(numericDisallowed, diff);
						if (reference > 65535) {
							reference -= 65536;
							output += fromCharCode(reference >>> 10 | 55296);
							reference = 56320 | reference & 1023;
						}
						reference = output + fromCharCode(reference);
					}
				}
				if (reference) {
					flush();
					prev = now();
					index = end - 1;
					column += end - start + 1;
					result.push(reference);
					next = now();
					next.offset++;
					if (handleReference) handleReference.call(referenceContext, reference, {
						start: prev,
						end: next
					}, value.slice(start - 1, end));
					prev = next;
				} else {
					characters = value.slice(start - 1, end);
					queue += characters;
					column += characters.length;
					index = end - 1;
				}
			} else {
				if (character === 10) {
					line++;
					lines++;
					column = 0;
				}
				if (character === character) {
					queue += fromCharCode(character);
					column++;
				} else flush();
			}
		}
		return result.join("");
		function now() {
			return {
				line,
				column,
				offset: index + (pos.offset || 0)
			};
		}
		function parseError(code, offset) {
			var position = now();
			position.column += offset;
			position.offset += offset;
			handleWarning.call(warningContext, messages[code], position, code);
		}
		function flush() {
			if (queue) {
				result.push(queue);
				if (handleText) handleText.call(textContext, queue, {
					start: prev,
					end: now()
				});
				queue = "";
			}
		}
	}
	function prohibited(code) {
		return code >= 55296 && code <= 57343 || code > 1114111;
	}
	function disallowed(code) {
		return code >= 1 && code <= 8 || code === 11 || code >= 13 && code <= 31 || code >= 127 && code <= 159 || code >= 64976 && code <= 65007 || (code & 65535) === 65535 || (code & 65535) === 65534;
	}
}));
//#endregion
//#region ../../node_modules/refractor/node_modules/prismjs/components/prism-core.js
var require_prism_core = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Prism: Lightweight, robust, elegant syntax highlighting
	*
	* @license MIT <https://opensource.org/licenses/MIT>
	* @author Lea Verou <https://lea.verou.me>
	* @namespace
	* @public
	*/
	var Prism = function(_self) {
		var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
		var uniqueId = 0;
		var plainTextGrammar = {};
		var _ = {
			/**
			* By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
			* current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
			* additional languages or plugins yourself.
			*
			* By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
			*
			* You obviously have to change this value before the automatic highlighting started. To do this, you can add an
			* empty Prism object into the global scope before loading the Prism script like this:
			*
			* ```js
			* window.Prism = window.Prism || {};
			* Prism.manual = true;
			* // add a new <script> to load Prism's script
			* ```
			*
			* @default false
			* @type {boolean}
			* @memberof Prism
			* @public
			*/
			manual: _self.Prism && _self.Prism.manual,
			/**
			* By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
			* `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
			* own worker, you don't want it to do this.
			*
			* By setting this value to `true`, Prism will not add its own listeners to the worker.
			*
			* You obviously have to change this value before Prism executes. To do this, you can add an
			* empty Prism object into the global scope before loading the Prism script like this:
			*
			* ```js
			* window.Prism = window.Prism || {};
			* Prism.disableWorkerMessageHandler = true;
			* // Load Prism's script
			* ```
			*
			* @default false
			* @type {boolean}
			* @memberof Prism
			* @public
			*/
			disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
			/**
			* A namespace for utility methods.
			*
			* All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
			* change or disappear at any time.
			*
			* @namespace
			* @memberof Prism
			*/
			util: {
				encode: function encode(tokens) {
					if (tokens instanceof Token) return new Token(tokens.type, encode(tokens.content), tokens.alias);
					else if (Array.isArray(tokens)) return tokens.map(encode);
					else return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
				},
				/**
				* Returns the name of the type of the given value.
				*
				* @param {any} o
				* @returns {string}
				* @example
				* type(null)      === 'Null'
				* type(undefined) === 'Undefined'
				* type(123)       === 'Number'
				* type('foo')     === 'String'
				* type(true)      === 'Boolean'
				* type([1, 2])    === 'Array'
				* type({})        === 'Object'
				* type(String)    === 'Function'
				* type(/abc+/)    === 'RegExp'
				*/
				type: function(o) {
					return Object.prototype.toString.call(o).slice(8, -1);
				},
				/**
				* Returns a unique number for the given object. Later calls will still return the same number.
				*
				* @param {Object} obj
				* @returns {number}
				*/
				objId: function(obj) {
					if (!obj["__id"]) Object.defineProperty(obj, "__id", { value: ++uniqueId });
					return obj["__id"];
				},
				/**
				* Creates a deep clone of the given object.
				*
				* The main intended use of this function is to clone language definitions.
				*
				* @param {T} o
				* @param {Record<number, any>} [visited]
				* @returns {T}
				* @template T
				*/
				clone: function deepClone(o, visited) {
					visited = visited || {};
					var clone;
					var id;
					switch (_.util.type(o)) {
						case "Object":
							id = _.util.objId(o);
							if (visited[id]) return visited[id];
							clone = {};
							visited[id] = clone;
							for (var key in o) if (o.hasOwnProperty(key)) clone[key] = deepClone(o[key], visited);
							return clone;
						case "Array":
							id = _.util.objId(o);
							if (visited[id]) return visited[id];
							clone = [];
							visited[id] = clone;
							o.forEach(function(v, i) {
								clone[i] = deepClone(v, visited);
							});
							return clone;
						default: return o;
					}
				},
				/**
				* Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
				*
				* If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
				*
				* @param {Element} element
				* @returns {string}
				*/
				getLanguage: function(element) {
					while (element) {
						var m = lang.exec(element.className);
						if (m) return m[1].toLowerCase();
						element = element.parentElement;
					}
					return "none";
				},
				/**
				* Sets the Prism `language-xxxx` class of the given element.
				*
				* @param {Element} element
				* @param {string} language
				* @returns {void}
				*/
				setLanguage: function(element, language) {
					element.className = element.className.replace(RegExp(lang, "gi"), "");
					element.classList.add("language-" + language);
				},
				/**
				* Returns the script element that is currently executing.
				*
				* This does __not__ work for line script element.
				*
				* @returns {HTMLScriptElement | null}
				*/
				currentScript: function() {
					if (typeof document === "undefined") return null;
					if ("currentScript" in document && true) return document.currentScript;
					try {
						throw new Error();
					} catch (err) {
						var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
						if (src) {
							var scripts = document.getElementsByTagName("script");
							for (var i in scripts) if (scripts[i].src == src) return scripts[i];
						}
						return null;
					}
				},
				/**
				* Returns whether a given class is active for `element`.
				*
				* The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
				* if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
				* given class is just the given class with a `no-` prefix.
				*
				* Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
				* closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
				* ancestors have the given class or the negated version of it, then the default activation will be returned.
				*
				* In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
				* version of it, the class is considered active.
				*
				* @param {Element} element
				* @param {string} className
				* @param {boolean} [defaultActivation=false]
				* @returns {boolean}
				*/
				isActive: function(element, className, defaultActivation) {
					var no = "no-" + className;
					while (element) {
						var classList = element.classList;
						if (classList.contains(className)) return true;
						if (classList.contains(no)) return false;
						element = element.parentElement;
					}
					return !!defaultActivation;
				}
			},
			/**
			* This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
			*
			* @namespace
			* @memberof Prism
			* @public
			*/
			languages: {
				/**
				* The grammar for plain, unformatted text.
				*/
				plain: plainTextGrammar,
				plaintext: plainTextGrammar,
				text: plainTextGrammar,
				txt: plainTextGrammar,
				/**
				* Creates a deep copy of the language with the given id and appends the given tokens.
				*
				* If a token in `redef` also appears in the copied language, then the existing token in the copied language
				* will be overwritten at its original position.
				*
				* ## Best practices
				*
				* Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
				* doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
				* understand the language definition because, normally, the order of tokens matters in Prism grammars.
				*
				* Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
				* Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
				*
				* @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
				* @param {Grammar} redef The new tokens to append.
				* @returns {Grammar} The new language created.
				* @public
				* @example
				* Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
				*     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
				*     // at its original position
				*     'comment': { ... },
				*     // CSS doesn't have a 'color' token, so this token will be appended
				*     'color': /\b(?:red|green|blue)\b/
				* });
				*/
				extend: function(id, redef) {
					var lang = _.util.clone(_.languages[id]);
					for (var key in redef) lang[key] = redef[key];
					return lang;
				},
				/**
				* Inserts tokens _before_ another token in a language definition or any other grammar.
				*
				* ## Usage
				*
				* This helper method makes it easy to modify existing languages. For example, the CSS language definition
				* not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
				* in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
				* appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
				* this:
				*
				* ```js
				* Prism.languages.markup.style = {
				*     // token
				* };
				* ```
				*
				* then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
				* before existing tokens. For the CSS example above, you would use it like this:
				*
				* ```js
				* Prism.languages.insertBefore('markup', 'cdata', {
				*     'style': {
				*         // token
				*     }
				* });
				* ```
				*
				* ## Special cases
				*
				* If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
				* will be ignored.
				*
				* This behavior can be used to insert tokens after `before`:
				*
				* ```js
				* Prism.languages.insertBefore('markup', 'comment', {
				*     'comment': Prism.languages.markup.comment,
				*     // tokens after 'comment'
				* });
				* ```
				*
				* ## Limitations
				*
				* The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
				* properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
				* differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
				* deleting properties which is necessary to insert at arbitrary positions.
				*
				* To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
				* Instead, it will create a new object and replace all references to the target object with the new one. This
				* can be done without temporarily deleting properties, so the iteration order is well-defined.
				*
				* However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
				* you hold the target object in a variable, then the value of the variable will not change.
				*
				* ```js
				* var oldMarkup = Prism.languages.markup;
				* var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
				*
				* assert(oldMarkup !== Prism.languages.markup);
				* assert(newMarkup === Prism.languages.markup);
				* ```
				*
				* @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
				* object to be modified.
				* @param {string} before The key to insert before.
				* @param {Grammar} insert An object containing the key-value pairs to be inserted.
				* @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
				* object to be modified.
				*
				* Defaults to `Prism.languages`.
				* @returns {Grammar} The new grammar object.
				* @public
				*/
				insertBefore: function(inside, before, insert, root) {
					root = root || _.languages;
					var grammar = root[inside];
					/** @type {Grammar} */
					var ret = {};
					for (var token in grammar) if (grammar.hasOwnProperty(token)) {
						if (token == before) {
							for (var newToken in insert) if (insert.hasOwnProperty(newToken)) ret[newToken] = insert[newToken];
						}
						if (!insert.hasOwnProperty(token)) ret[token] = grammar[token];
					}
					var old = root[inside];
					root[inside] = ret;
					_.languages.DFS(_.languages, function(key, value) {
						if (value === old && key != inside) this[key] = ret;
					});
					return ret;
				},
				DFS: function DFS(o, callback, type, visited) {
					visited = visited || {};
					var objId = _.util.objId;
					for (var i in o) if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);
						var property = o[i];
						var propertyType = _.util.type(property);
						if (propertyType === "Object" && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === "Array" && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			},
			plugins: {},
			/**
			* This is the most high-level function in Prism’s API.
			* It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
			* each one of them.
			*
			* This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
			*
			* @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
			* @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
			* @memberof Prism
			* @public
			*/
			highlightAll: function(async, callback) {
				_.highlightAllUnder(document, async, callback);
			},
			/**
			* Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
			* {@link Prism.highlightElement} on each one of them.
			*
			* The following hooks will be run:
			* 1. `before-highlightall`
			* 2. `before-all-elements-highlight`
			* 3. All hooks of {@link Prism.highlightElement} for each element.
			*
			* @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
			* @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
			* @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
			* @memberof Prism
			* @public
			*/
			highlightAllUnder: function(container, async, callback) {
				var env = {
					callback,
					container,
					selector: "code[class*=\"language-\"], [class*=\"language-\"] code, code[class*=\"lang-\"], [class*=\"lang-\"] code"
				};
				_.hooks.run("before-highlightall", env);
				env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
				_.hooks.run("before-all-elements-highlight", env);
				for (var i = 0, element; element = env.elements[i++];) _.highlightElement(element, async === true, env.callback);
			},
			/**
			* Highlights the code inside a single element.
			*
			* The following hooks will be run:
			* 1. `before-sanity-check`
			* 2. `before-highlight`
			* 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
			* 4. `before-insert`
			* 5. `after-highlight`
			* 6. `complete`
			*
			* Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
			* the element's language.
			*
			* @param {Element} element The element containing the code.
			* It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
			* @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
			* to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
			* [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
			*
			* Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
			* asynchronous highlighting to work. You can build your own bundle on the
			* [Download page](https://prismjs.com/download.html).
			* @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
			* Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
			* @memberof Prism
			* @public
			*/
			highlightElement: function(element, async, callback) {
				var language = _.util.getLanguage(element);
				var grammar = _.languages[language];
				_.util.setLanguage(element, language);
				var parent = element.parentElement;
				if (parent && parent.nodeName.toLowerCase() === "pre") _.util.setLanguage(parent, language);
				var env = {
					element,
					language,
					grammar,
					code: element.textContent
				};
				function insertHighlightedCode(highlightedCode) {
					env.highlightedCode = highlightedCode;
					_.hooks.run("before-insert", env);
					env.element.innerHTML = env.highlightedCode;
					_.hooks.run("after-highlight", env);
					_.hooks.run("complete", env);
					callback && callback.call(env.element);
				}
				_.hooks.run("before-sanity-check", env);
				parent = env.element.parentElement;
				if (parent && parent.nodeName.toLowerCase() === "pre" && !parent.hasAttribute("tabindex")) parent.setAttribute("tabindex", "0");
				if (!env.code) {
					_.hooks.run("complete", env);
					callback && callback.call(env.element);
					return;
				}
				_.hooks.run("before-highlight", env);
				if (!env.grammar) {
					insertHighlightedCode(_.util.encode(env.code));
					return;
				}
				if (async && _self.Worker) {
					var worker = new Worker(_.filename);
					worker.onmessage = function(evt) {
						insertHighlightedCode(evt.data);
					};
					worker.postMessage(JSON.stringify({
						language: env.language,
						code: env.code,
						immediateClose: true
					}));
				} else insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			},
			/**
			* Low-level function, only use if you know what you’re doing. It accepts a string of text as input
			* and the language definitions to use, and returns a string with the HTML produced.
			*
			* The following hooks will be run:
			* 1. `before-tokenize`
			* 2. `after-tokenize`
			* 3. `wrap`: On each {@link Token}.
			*
			* @param {string} text A string with the code to be highlighted.
			* @param {Grammar} grammar An object containing the tokens to use.
			*
			* Usually a language definition like `Prism.languages.markup`.
			* @param {string} language The name of the language definition passed to `grammar`.
			* @returns {string} The highlighted HTML.
			* @memberof Prism
			* @public
			* @example
			* Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
			*/
			highlight: function(text, grammar, language) {
				var env = {
					code: text,
					grammar,
					language
				};
				_.hooks.run("before-tokenize", env);
				if (!env.grammar) throw new Error("The language \"" + env.language + "\" has no grammar.");
				env.tokens = _.tokenize(env.code, env.grammar);
				_.hooks.run("after-tokenize", env);
				return Token.stringify(_.util.encode(env.tokens), env.language);
			},
			/**
			* This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
			* and the language definitions to use, and returns an array with the tokenized code.
			*
			* When the language definition includes nested tokens, the function is called recursively on each of these tokens.
			*
			* This method could be useful in other contexts as well, as a very crude parser.
			*
			* @param {string} text A string with the code to be highlighted.
			* @param {Grammar} grammar An object containing the tokens to use.
			*
			* Usually a language definition like `Prism.languages.markup`.
			* @returns {TokenStream} An array of strings and tokens, a token stream.
			* @memberof Prism
			* @public
			* @example
			* let code = `var foo = 0;`;
			* let tokens = Prism.tokenize(code, Prism.languages.javascript);
			* tokens.forEach(token => {
			*     if (token instanceof Prism.Token && token.type === 'number') {
			*         console.log(`Found numeric literal: ${token.content}`);
			*     }
			* });
			*/
			tokenize: function(text, grammar) {
				var rest = grammar.rest;
				if (rest) {
					for (var token in rest) grammar[token] = rest[token];
					delete grammar.rest;
				}
				var tokenList = new LinkedList();
				addAfter(tokenList, tokenList.head, text);
				matchGrammar(text, tokenList, grammar, tokenList.head, 0);
				return toArray(tokenList);
			},
			/**
			* @namespace
			* @memberof Prism
			* @public
			*/
			hooks: {
				all: {},
				/**
				* Adds the given callback to the list of callbacks for the given hook.
				*
				* The callback will be invoked when the hook it is registered for is run.
				* Hooks are usually directly run by a highlight function but you can also run hooks yourself.
				*
				* One callback function can be registered to multiple hooks and the same hook multiple times.
				*
				* @param {string} name The name of the hook.
				* @param {HookCallback} callback The callback function which is given environment variables.
				* @public
				*/
				add: function(name, callback) {
					var hooks = _.hooks.all;
					hooks[name] = hooks[name] || [];
					hooks[name].push(callback);
				},
				/**
				* Runs a hook invoking all registered callbacks with the given environment variables.
				*
				* Callbacks will be invoked synchronously and in the order in which they were registered.
				*
				* @param {string} name The name of the hook.
				* @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
				* @public
				*/
				run: function(name, env) {
					var callbacks = _.hooks.all[name];
					if (!callbacks || !callbacks.length) return;
					for (var i = 0, callback; callback = callbacks[i++];) callback(env);
				}
			},
			Token
		};
		_self.Prism = _;
		/**
		* Creates a new token.
		*
		* @param {string} type See {@link Token#type type}
		* @param {string | TokenStream} content See {@link Token#content content}
		* @param {string|string[]} [alias] The alias(es) of the token.
		* @param {string} [matchedStr=""] A copy of the full string this token was created from.
		* @class
		* @global
		* @public
		*/
		function Token(type, content, alias, matchedStr) {
			/**
			* The type of the token.
			*
			* This is usually the key of a pattern in a {@link Grammar}.
			*
			* @type {string}
			* @see GrammarToken
			* @public
			*/
			this.type = type;
			/**
			* The strings or tokens contained by this token.
			*
			* This will be a token stream if the pattern matched also defined an `inside` grammar.
			*
			* @type {string | TokenStream}
			* @public
			*/
			this.content = content;
			/**
			* The alias(es) of the token.
			*
			* @type {string|string[]}
			* @see GrammarToken
			* @public
			*/
			this.alias = alias;
			this.length = (matchedStr || "").length | 0;
		}
		/**
		* A token stream is an array of strings and {@link Token Token} objects.
		*
		* Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
		* them.
		*
		* 1. No adjacent strings.
		* 2. No empty strings.
		*
		*    The only exception here is the token stream that only contains the empty string and nothing else.
		*
		* @typedef {Array<string | Token>} TokenStream
		* @global
		* @public
		*/
		/**
		* Converts the given token or token stream to an HTML representation.
		*
		* The following hooks will be run:
		* 1. `wrap`: On each {@link Token}.
		*
		* @param {string | Token | TokenStream} o The token or token stream to be converted.
		* @param {string} language The name of current language.
		* @returns {string} The HTML representation of the token or token stream.
		* @memberof Token
		* @static
		*/
		Token.stringify = function stringify(o, language) {
			if (typeof o == "string") return o;
			if (Array.isArray(o)) {
				var s = "";
				o.forEach(function(e) {
					s += stringify(e, language);
				});
				return s;
			}
			var env = {
				type: o.type,
				content: stringify(o.content, language),
				tag: "span",
				classes: ["token", o.type],
				attributes: {},
				language
			};
			var aliases = o.alias;
			if (aliases) if (Array.isArray(aliases)) Array.prototype.push.apply(env.classes, aliases);
			else env.classes.push(aliases);
			_.hooks.run("wrap", env);
			var attributes = "";
			for (var name in env.attributes) attributes += " " + name + "=\"" + (env.attributes[name] || "").replace(/"/g, "&quot;") + "\"";
			return "<" + env.tag + " class=\"" + env.classes.join(" ") + "\"" + attributes + ">" + env.content + "</" + env.tag + ">";
		};
		/**
		* @param {RegExp} pattern
		* @param {number} pos
		* @param {string} text
		* @param {boolean} lookbehind
		* @returns {RegExpExecArray | null}
		*/
		function matchPattern(pattern, pos, text, lookbehind) {
			pattern.lastIndex = pos;
			var match = pattern.exec(text);
			if (match && lookbehind && match[1]) {
				var lookbehindLength = match[1].length;
				match.index += lookbehindLength;
				match[0] = match[0].slice(lookbehindLength);
			}
			return match;
		}
		/**
		* @param {string} text
		* @param {LinkedList<string | Token>} tokenList
		* @param {any} grammar
		* @param {LinkedListNode<string | Token>} startNode
		* @param {number} startPos
		* @param {RematchOptions} [rematch]
		* @returns {void}
		* @private
		*
		* @typedef RematchOptions
		* @property {string} cause
		* @property {number} reach
		*/
		function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
			for (var token in grammar) {
				if (!grammar.hasOwnProperty(token) || !grammar[token]) continue;
				var patterns = grammar[token];
				patterns = Array.isArray(patterns) ? patterns : [patterns];
				for (var j = 0; j < patterns.length; ++j) {
					if (rematch && rematch.cause == token + "," + j) return;
					var patternObj = patterns[j];
					var inside = patternObj.inside;
					var lookbehind = !!patternObj.lookbehind;
					var greedy = !!patternObj.greedy;
					var alias = patternObj.alias;
					if (greedy && !patternObj.pattern.global) {
						var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
						patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
					}
					/** @type {RegExp} */
					var pattern = patternObj.pattern || patternObj;
					for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
						if (rematch && pos >= rematch.reach) break;
						var str = currentNode.value;
						if (tokenList.length > text.length) return;
						if (str instanceof Token) continue;
						var removeCount = 1;
						var match;
						if (greedy) {
							match = matchPattern(pattern, pos, text, lookbehind);
							if (!match || match.index >= text.length) break;
							var from = match.index;
							var to = match.index + match[0].length;
							var p = pos;
							p += currentNode.value.length;
							while (from >= p) {
								currentNode = currentNode.next;
								p += currentNode.value.length;
							}
							p -= currentNode.value.length;
							pos = p;
							if (currentNode.value instanceof Token) continue;
							for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
								removeCount++;
								p += k.value.length;
							}
							removeCount--;
							str = text.slice(pos, p);
							match.index -= pos;
						} else {
							match = matchPattern(pattern, 0, str, lookbehind);
							if (!match) continue;
						}
						var from = match.index;
						var matchStr = match[0];
						var before = str.slice(0, from);
						var after = str.slice(from + matchStr.length);
						var reach = pos + str.length;
						if (rematch && reach > rematch.reach) rematch.reach = reach;
						var removeFrom = currentNode.prev;
						if (before) {
							removeFrom = addAfter(tokenList, removeFrom, before);
							pos += before.length;
						}
						removeRange(tokenList, removeFrom, removeCount);
						var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
						currentNode = addAfter(tokenList, removeFrom, wrapped);
						if (after) addAfter(tokenList, currentNode, after);
						if (removeCount > 1) {
							/** @type {RematchOptions} */
							var nestedRematch = {
								cause: token + "," + j,
								reach
							};
							matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
							if (rematch && nestedRematch.reach > rematch.reach) rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
		/**
		* @typedef LinkedListNode
		* @property {T} value
		* @property {LinkedListNode<T> | null} prev The previous node.
		* @property {LinkedListNode<T> | null} next The next node.
		* @template T
		* @private
		*/
		/**
		* @template T
		* @private
		*/
		function LinkedList() {
			/** @type {LinkedListNode<T>} */
			var head = {
				value: null,
				prev: null,
				next: null
			};
			/** @type {LinkedListNode<T>} */
			var tail = {
				value: null,
				prev: head,
				next: null
			};
			head.next = tail;
			/** @type {LinkedListNode<T>} */
			this.head = head;
			/** @type {LinkedListNode<T>} */
			this.tail = tail;
			this.length = 0;
		}
		/**
		* Adds a new node with the given value to the list.
		*
		* @param {LinkedList<T>} list
		* @param {LinkedListNode<T>} node
		* @param {T} value
		* @returns {LinkedListNode<T>} The added node.
		* @template T
		*/
		function addAfter(list, node, value) {
			var next = node.next;
			var newNode = {
				value,
				prev: node,
				next
			};
			node.next = newNode;
			next.prev = newNode;
			list.length++;
			return newNode;
		}
		/**
		* Removes `count` nodes after the given node. The given node will not be removed.
		*
		* @param {LinkedList<T>} list
		* @param {LinkedListNode<T>} node
		* @param {number} count
		* @template T
		*/
		function removeRange(list, node, count) {
			var next = node.next;
			for (var i = 0; i < count && next !== list.tail; i++) next = next.next;
			node.next = next;
			next.prev = node;
			list.length -= i;
		}
		/**
		* @param {LinkedList<T>} list
		* @returns {T[]}
		* @template T
		*/
		function toArray(list) {
			var array = [];
			var node = list.head.next;
			while (node !== list.tail) {
				array.push(node.value);
				node = node.next;
			}
			return array;
		}
		if (!_self.document) {
			if (!_self.addEventListener) return _;
			if (!_.disableWorkerMessageHandler) _self.addEventListener("message", function(evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;
				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) _self.close();
			}, false);
			return _;
		}
		var script = _.util.currentScript();
		if (script) {
			_.filename = script.src;
			if (script.hasAttribute("data-manual")) _.manual = true;
		}
		function highlightAutomaticallyCallback() {
			if (!_.manual) _.highlightAll();
		}
		if (!_.manual) {
			var readyState = document.readyState;
			if (readyState === "loading" || readyState === "interactive" && script && script.defer) document.addEventListener("DOMContentLoaded", highlightAutomaticallyCallback);
			else if (window.requestAnimationFrame) window.requestAnimationFrame(highlightAutomaticallyCallback);
			else window.setTimeout(highlightAutomaticallyCallback, 16);
		}
		return _;
	}(typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope ? self : {});
	if (typeof module !== "undefined" && module.exports) module.exports = Prism;
	if (typeof global !== "undefined") global.Prism = Prism;
}));
/**
* The expansion of a simple `RegExp` literal to support additional properties.
*
* @typedef GrammarToken
* @property {RegExp} pattern The regular expression of the token.
* @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
* behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
* @property {boolean} [greedy=false] Whether the token is greedy.
* @property {string|string[]} [alias] An optional alias or list of aliases.
* @property {Grammar} [inside] The nested grammar of this token.
*
* The `inside` grammar will be used to tokenize the text value of each token of this kind.
*
* This can be used to make nested and even recursive language definitions.
*
* Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
* each another.
* @global
* @public
*/
/**
* @typedef Grammar
* @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
* @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
* @global
* @public
*/
/**
* A function which will invoked after an element was successfully highlighted.
*
* @callback HighlightCallback
* @param {Element} element The element successfully highlighted.
* @returns {void}
* @global
* @public
*/
/**
* @callback HookCallback
* @param {Object<string, any>} env The environment variables of the hook.
* @returns {void}
* @global
* @public
*/
//#endregion
//#region ../../node_modules/refractor/lang/clike.js
var require_clike = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = clike;
	clike.displayName = "clike";
	clike.aliases = [];
	function clike(Prism) {
		Prism.languages.clike = {
			comment: [{
				pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
				lookbehind: true,
				greedy: true
			}, {
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true,
				greedy: true
			}],
			string: {
				pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
				greedy: true
			},
			"class-name": {
				pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
				lookbehind: true,
				inside: { punctuation: /[.\\]/ }
			},
			keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
			boolean: /\b(?:false|true)\b/,
			function: /\b\w+(?=\()/,
			number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
			operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
			punctuation: /[{}[\];(),.:]/
		};
	}
}));
//#endregion
//#region ../../node_modules/refractor/lang/javascript.js
var require_javascript = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = javascript;
	javascript.displayName = "javascript";
	javascript.aliases = ["js"];
	function javascript(Prism) {
		Prism.languages.javascript = Prism.languages.extend("clike", {
			"class-name": [Prism.languages.clike["class-name"], {
				pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
				lookbehind: true
			}],
			keyword: [{
				pattern: /((?:^|\})\s*)catch\b/,
				lookbehind: true
			}, {
				pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
				lookbehind: true
			}],
			function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
			number: {
				pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
				lookbehind: true
			},
			operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
		});
		Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
		Prism.languages.insertBefore("javascript", "keyword", {
			regex: {
				pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
				lookbehind: true,
				greedy: true,
				inside: {
					"regex-source": {
						pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
						lookbehind: true,
						alias: "language-regex",
						inside: Prism.languages.regex
					},
					"regex-delimiter": /^\/|\/$/,
					"regex-flags": /^[a-z]+$/
				}
			},
			"function-variable": {
				pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
				alias: "function"
			},
			parameter: [
				{
					pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
					lookbehind: true,
					inside: Prism.languages.javascript
				},
				{
					pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
					lookbehind: true,
					inside: Prism.languages.javascript
				},
				{
					pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
					lookbehind: true,
					inside: Prism.languages.javascript
				},
				{
					pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
					lookbehind: true,
					inside: Prism.languages.javascript
				}
			],
			constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
		});
		Prism.languages.insertBefore("javascript", "string", {
			hashbang: {
				pattern: /^#!.*/,
				greedy: true,
				alias: "comment"
			},
			"template-string": {
				pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
				greedy: true,
				inside: {
					"template-punctuation": {
						pattern: /^`|`$/,
						alias: "string"
					},
					interpolation: {
						pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
						lookbehind: true,
						inside: {
							"interpolation-punctuation": {
								pattern: /^\$\{|\}$/,
								alias: "punctuation"
							},
							rest: Prism.languages.javascript
						}
					},
					string: /[\s\S]+/
				}
			},
			"string-property": {
				pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
				lookbehind: true,
				greedy: true,
				alias: "property"
			}
		});
		Prism.languages.insertBefore("javascript", "operator", { "literal-property": {
			pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
			lookbehind: true,
			alias: "property"
		} });
		if (Prism.languages.markup) {
			Prism.languages.markup.tag.addInlined("script", "javascript");
			Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
		}
		Prism.languages.js = Prism.languages.javascript;
	}
}));
//#endregion
//#region ../../node_modules/refractor/core.js
var require_core = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	// istanbul ignore next - Don't allow Prism to run on page load in browser or
	var ctx = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof window === "object" ? window : typeof global === "object" ? global : {};
	var restore = capture();
	ctx.Prism = {
		manual: true,
		disableWorkerMessageHandler: true
	};
	var h = require_hastscript();
	var decode = require_parse_entities();
	var Prism = require_prism_core();
	var markup = require_markup();
	var css = require_css();
	var clike = require_clike();
	var js = require_javascript();
	restore();
	var own = {}.hasOwnProperty;
	function Refractor() {}
	Refractor.prototype = Prism;
	var refract = new Refractor();
	module.exports = refract;
	refract.highlight = highlight;
	refract.register = register;
	refract.alias = alias;
	refract.registered = registered;
	refract.listLanguages = listLanguages;
	register(markup);
	register(css);
	register(clike);
	register(js);
	refract.util.encode = encode;
	refract.Token.stringify = stringify;
	function register(grammar) {
		if (typeof grammar !== "function" || !grammar.displayName) throw new Error("Expected `function` for `grammar`, got `" + grammar + "`");
		if (refract.languages[grammar.displayName] === void 0) grammar(refract);
	}
	function alias(name, alias) {
		var languages = refract.languages;
		var map = name;
		var key;
		var list;
		var length;
		var index;
		if (alias) {
			map = {};
			map[name] = alias;
		}
		for (key in map) {
			list = map[key];
			list = typeof list === "string" ? [list] : list;
			length = list.length;
			index = -1;
			while (++index < length) languages[list[index]] = languages[key];
		}
	}
	function highlight(value, name) {
		var sup = Prism.highlight;
		var grammar;
		if (typeof value !== "string") throw new Error("Expected `string` for `value`, got `" + value + "`");
		if (refract.util.type(name) === "Object") {
			grammar = name;
			name = null;
		} else {
			if (typeof name !== "string") throw new Error("Expected `string` for `name`, got `" + name + "`");
			if (own.call(refract.languages, name)) grammar = refract.languages[name];
			else throw new Error("Unknown language: `" + name + "` is not registered");
		}
		return sup.call(this, value, grammar, name);
	}
	function registered(language) {
		if (typeof language !== "string") throw new Error("Expected `string` for `language`, got `" + language + "`");
		return own.call(refract.languages, language);
	}
	function listLanguages() {
		var languages = refract.languages;
		var list = [];
		var language;
		for (language in languages) if (own.call(languages, language) && typeof languages[language] === "object") list.push(language);
		return list;
	}
	function stringify(value, language, parent) {
		var env;
		if (typeof value === "string") return {
			type: "text",
			value
		};
		if (refract.util.type(value) === "Array") return stringifyAll(value, language);
		env = {
			type: value.type,
			content: refract.Token.stringify(value.content, language, parent),
			tag: "span",
			classes: ["token", value.type],
			attributes: {},
			language,
			parent
		};
		if (value.alias) env.classes = env.classes.concat(value.alias);
		refract.hooks.run("wrap", env);
		return h(env.tag + "." + env.classes.join("."), attributes(env.attributes), env.content);
	}
	function stringifyAll(values, language) {
		var result = [];
		var length = values.length;
		var index = -1;
		var value;
		while (++index < length) {
			value = values[index];
			if (value !== "" && value !== null && value !== void 0) result.push(value);
		}
		index = -1;
		length = result.length;
		while (++index < length) {
			value = result[index];
			result[index] = refract.Token.stringify(value, language, result);
		}
		return result;
	}
	function encode(tokens) {
		return tokens;
	}
	function attributes(attrs) {
		var key;
		for (key in attrs) attrs[key] = decode(attrs[key]);
		return attrs;
	}
	function capture() {
		var defined = "Prism" in ctx;
		/* istanbul ignore next */
		var current = defined ? ctx.Prism : void 0;
		return restore;
		function restore() {
			/* istanbul ignore else - Clean leaks after Prism. */
			if (defined) ctx.Prism = current;
			else delete ctx.Prism;
			defined = void 0;
			current = void 0;
		}
	}
}));
//#endregion
export { replace as $, rulesheet as A, init_Tokenizer as B, require_major as C, init_stylis as D, require_toggle_selection as E, init_Parser as F, token as G, peek as H, alloc as I, from as J, charat as K, copy as L, serialize as M, stringify as N, init_Middleware as O, compile as P, match as Q, dealloc as R, require_minor as S, require_diff as T, position as U, next as V, slice as W, indexof as X, hash as Y, init_Utility as Z, init_bundle_esm as _, require_markup as a, RULESET as at, require_prerelease as b, require_json as c, init_tiny_invariant as ct, require_css as d, isJSON as dt, strlen as et, require_bash as f, parse$1 as ft, useLatest as g, init_use_latest_esm as h, init_esm as ht, require_typescript as i, MS as it, init_Serializer as j, middleware as k, require_js_extras as l, invariant as lt, useComposedRef as m, dedent as mt, require_yaml as n, KEYFRAMES as nt, require_markdown as o, WEBKIT as ot, init_use_composed_ref_esm as p, stringify$1 as pt, combine as q, require_tsx as r, MOZ as rt, require_jsx as s, init_Enum as st, require_core as t, DECLARATION as tt, require_graphql as u, init_dist as ut, useResizeObserver as v, require_gt as w, require_patch as x, require_store2 as y, delimit as z };
