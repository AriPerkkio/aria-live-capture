import { a as __toESM, n as __esmMin, t as __commonJSMin } from "./runtime-XrdeG17s.js";
import { Br as init__storybook_global_react, Fr as _storybook_global_react_default, Gr as useEffect, Ir as cloneElement, Jr as useMemo, Nr as Component, Ur as useCallback, Xr as useRef, Yr as useReducer, qr as useLayoutEffect } from "./runtime-CCGFWiML.js";
import { r as require_prop_types } from "./runtime-CP0ch2aS.js";
import { n as __assign, r as init_tslib_es6 } from "./runtime-B9T0K19t.js";
import { A as init_LiveAnnouncer } from "./runtime-DVA-jH96.js";
//#region ../../node_modules/@storybook/global/dist/index.mjs
var scope;
var init_dist$3 = __esmMin((() => {
	scope = (() => {
		let win;
		if (typeof window !== "undefined") win = window;
		else if (typeof globalThis !== "undefined") win = globalThis;
		else if (typeof global !== "undefined") win = global;
		else if (typeof self !== "undefined") win = self;
		else win = {};
		return win;
	})();
}));
//#endregion
//#region ../../node_modules/invariant/browser.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Use invariant() to assert state which your program assumes to be true.
	*
	* Provide sprintf-style format (only %s is supported) and arguments
	* to provide information about what broke and what you were
	* expecting.
	*
	* The invariant message will be stripped in production, but the invariant
	* will remain to ensure logic does not differ in production.
	*/
	var invariant = function(condition, format, a, b, c, d, e, f) {
		if (!condition) {
			var error;
			if (format === void 0) error = /* @__PURE__ */ new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
			else {
				var args = [
					a,
					b,
					c,
					d,
					e,
					f
				];
				var argIndex = 0;
				error = new Error(format.replace(/%s/g, function() {
					return args[argIndex++];
				}));
				error.name = "Invariant Violation";
			}
			error.framesToPop = 1;
			throw error;
		}
	};
	module.exports = invariant;
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
var init_extends = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
	if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var init_assertThisInitialized = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
	return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
		return t.__proto__ = e, t;
	}, _setPrototypeOf(t, e);
}
var init_setPrototypeOf = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
	t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
var init_inheritsLoose = __esmMin((() => {
	init_setPrototypeOf();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
	return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
		return t.__proto__ || Object.getPrototypeOf(t);
	}, _getPrototypeOf(t);
}
var init_getPrototypeOf = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(t) {
	try {
		return -1 !== Function.toString.call(t).indexOf("[native code]");
	} catch (n) {
		return "function" == typeof t;
	}
}
var init_isNativeFunction = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
	try {
		var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	} catch (t) {}
	return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
		return !!t;
	})();
}
var init_isNativeReflectConstruct = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(t, e, r) {
	if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
	var o = [null];
	o.push.apply(o, e);
	var p = new (t.bind.apply(t, o))();
	return r && _setPrototypeOf(p, r.prototype), p;
}
var init_construct = __esmMin((() => {
	init_isNativeReflectConstruct();
	init_setPrototypeOf();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(t) {
	var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
	return _wrapNativeSuper = function _wrapNativeSuper(t) {
		if (null === t || !_isNativeFunction(t)) return t;
		if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
		if (void 0 !== r) {
			if (r.has(t)) return r.get(t);
			r.set(t, Wrapper);
		}
		function Wrapper() {
			return _construct(t, arguments, _getPrototypeOf(this).constructor);
		}
		return Wrapper.prototype = Object.create(t.prototype, { constructor: {
			value: Wrapper,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), _setPrototypeOf(Wrapper, t);
	}, _wrapNativeSuper(t);
}
var init_wrapNativeSuper = __esmMin((() => {
	init_getPrototypeOf();
	init_setPrototypeOf();
	init_isNativeFunction();
	init_construct();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/_internal/getSymbols.mjs
function getSymbols(object) {
	return Object.getOwnPropertySymbols(object).filter((symbol) => Object.prototype.propertyIsEnumerable.call(object, symbol));
}
var init_getSymbols = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/_internal/getTag.mjs
/**
* Gets the `toStringTag` of `value`.
*
* @private
* @param {T} value The value to query.
* @returns {string} Returns the `Object.prototype.toString.call` result.
*/
function getTag(value) {
	if (value == null) return value === void 0 ? "[object Undefined]" : "[object Null]";
	return Object.prototype.toString.call(value);
}
var init_getTag = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/_internal/tags.mjs
var regexpTag, stringTag, numberTag, booleanTag, symbolTag, dateTag, mapTag, setTag, arrayTag, functionTag, arrayBufferTag, objectTag, errorTag, dataViewTag, uint8ArrayTag, uint8ClampedArrayTag, uint16ArrayTag, uint32ArrayTag, bigUint64ArrayTag, int8ArrayTag, int16ArrayTag, int32ArrayTag, bigInt64ArrayTag, float32ArrayTag, float64ArrayTag;
var init_tags = __esmMin((() => {
	regexpTag = "[object RegExp]";
	stringTag = "[object String]";
	numberTag = "[object Number]";
	booleanTag = "[object Boolean]";
	symbolTag = "[object Symbol]";
	dateTag = "[object Date]";
	mapTag = "[object Map]";
	setTag = "[object Set]";
	arrayTag = "[object Array]";
	functionTag = "[object Function]";
	arrayBufferTag = "[object ArrayBuffer]";
	objectTag = "[object Object]";
	errorTag = "[object Error]";
	dataViewTag = "[object DataView]";
	uint8ArrayTag = "[object Uint8Array]";
	uint8ClampedArrayTag = "[object Uint8ClampedArray]";
	uint16ArrayTag = "[object Uint16Array]";
	uint32ArrayTag = "[object Uint32Array]";
	bigUint64ArrayTag = "[object BigUint64Array]";
	int8ArrayTag = "[object Int8Array]";
	int16ArrayTag = "[object Int16Array]";
	int32ArrayTag = "[object Int32Array]";
	bigInt64ArrayTag = "[object BigInt64Array]";
	float32ArrayTag = "[object Float32Array]";
	float64ArrayTag = "[object Float64Array]";
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/_internal/globalThis.mjs
var globalThis_;
var init_globalThis = __esmMin((() => {
	globalThis_ = typeof globalThis === "object" && globalThis || typeof window === "object" && window || typeof self === "object" && self || typeof global === "object" && global || (function() {
		return this;
	})();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/isBuffer.mjs
/**
* Checks if the given value is a Buffer instance.
*
* This function tests whether the provided value is an instance of Buffer.
* It returns `true` if the value is a Buffer, and `false` otherwise.
*
* This function can also serve as a type predicate in TypeScript, narrowing the type of the argument to `Buffer`.
*
* @param x - The value to check if it is a Buffer.
* @returns Returns `true` if `x` is a Buffer, else `false`.
*
* @example
* const buffer = Buffer.from("test");
* console.log(isBuffer(buffer)); // true
*
* const notBuffer = "not a buffer";
* console.log(isBuffer(notBuffer)); // false
*/
function isBuffer(x) {
	return typeof globalThis_.Buffer !== "undefined" && globalThis_.Buffer.isBuffer(x);
}
var init_isBuffer = __esmMin((() => {
	init_globalThis();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/isPlainObject.mjs
/**
* Checks if a given value is a plain object.
*
* @param value - The value to check.
* @returns True if the value is a plain object, otherwise false.
*
* @example
* ```typescript
* // ✅👇 True
*
* isPlainObject({ });                       // ✅
* isPlainObject({ key: 'value' });          // ✅
* isPlainObject({ key: new Date() });       // ✅
* isPlainObject(new Object());              // ✅
* isPlainObject(Object.create(null));       // ✅
* isPlainObject({ nested: { key: true} });  // ✅
* isPlainObject(new Proxy({}, {}));         // ✅
* isPlainObject({ [Symbol('tag')]: 'A' });  // ✅
*
* // ✅👇 (cross-realms, node context, workers, ...)
* const runInNewContext = await import('node:vm').then(
*     (mod) => mod.runInNewContext
* );
* isPlainObject(runInNewContext('({})'));   // ✅
*
* // ❌👇 False
*
* class Test { };
* isPlainObject(new Test())           // ❌
* isPlainObject(10);                  // ❌
* isPlainObject(null);                // ❌
* isPlainObject('hello');             // ❌
* isPlainObject([]);                  // ❌
* isPlainObject(new Date());          // ❌
* isPlainObject(new Uint8Array([1])); // ❌
* isPlainObject(Buffer.from('ABC'));  // ❌
* isPlainObject(Promise.resolve({})); // ❌
* isPlainObject(Object.create({}));   // ❌
* isPlainObject(new (class Cls {}));  // ❌
* isPlainObject(globalThis);          // ❌,
* ```
*/
function isPlainObject(value) {
	if (!value || typeof value !== "object") return false;
	const proto = Object.getPrototypeOf(value);
	if (!(proto === null || proto === Object.prototype || Object.getPrototypeOf(proto) === null)) return false;
	return Object.prototype.toString.call(value) === "[object Object]";
}
var init_isPlainObject = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/compat/util/eq.mjs
/**
* Performs a `SameValueZero` comparison between two values to determine if they are equivalent.
*
* @param value The value to compare.
* @param other The other value to compare.
* @returns Returns `true` if the values are equivalent, else `false`.
*
* @example
* eq(1, 1); // true
* eq(0, -0); // true
* eq(NaN, NaN); // true
* eq('a', Object('a')); // false
*/
function eq(value, other) {
	return value === other || Number.isNaN(value) && Number.isNaN(other);
}
var init_eq = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/isEqualWith.mjs
/**
* Compares two values for equality using a custom comparison function.
*
* The custom function allows for fine-tuned control over the comparison process. If it returns a boolean, that result determines the equality. If it returns undefined, the function falls back to the default equality comparison.
*
* This function also uses the custom equality function to compare values inside objects,
* arrays, maps, sets, and other complex structures, ensuring a deep comparison.
*
* This approach provides flexibility in handling complex comparisons while maintaining efficient default behavior for simpler cases.
*
* The custom comparison function can take up to six parameters:
* - `x`: The value from the first object `a`.
* - `y`: The value from the second object `b`.
* - `property`: The property key used to get `x` and `y`.
* - `xParent`: The parent of the first value `x`.
* - `yParent`: The parent of the second value `y`.
* - `stack`: An internal stack (Map) to handle circular references.
*
* @param a - The first value to compare.
* @param b - The second value to compare.
* @param areValuesEqual - A function to customize the comparison.
*   If it returns a boolean, that result will be used. If it returns undefined,
*   the default equality comparison will be used.
* @returns `true` if the values are equal according to the customizer, otherwise `false`.
*
* @example
* const customizer = (a, b) => {
*   if (typeof a === 'string' && typeof b === 'string') {
*     return a.toLowerCase() === b.toLowerCase();
*   }
* };
* isEqualWith('Hello', 'hello', customizer); // true
* isEqualWith({ a: 'Hello' }, { a: 'hello' }, customizer); // true
* isEqualWith([1, 2, 3], [1, 2, 3], customizer); // true
*/
function isEqualWith(a, b, areValuesEqual) {
	return isEqualWithImpl(a, b, void 0, void 0, void 0, void 0, areValuesEqual);
}
function isEqualWithImpl(a, b, property, aParent, bParent, stack, areValuesEqual) {
	const result = areValuesEqual(a, b, property, aParent, bParent, stack);
	if (result !== void 0) return result;
	if (typeof a === typeof b) switch (typeof a) {
		case "bigint":
		case "string":
		case "boolean":
		case "symbol":
		case "undefined": return a === b;
		case "number": return a === b || Object.is(a, b);
		case "function": return a === b;
		case "object": return areObjectsEqual(a, b, stack, areValuesEqual);
	}
	return areObjectsEqual(a, b, stack, areValuesEqual);
}
function areObjectsEqual(a, b, stack, areValuesEqual) {
	if (Object.is(a, b)) return true;
	let aTag = getTag(a);
	let bTag = getTag(b);
	if (aTag === "[object Arguments]") aTag = objectTag;
	if (bTag === "[object Arguments]") bTag = objectTag;
	if (aTag !== bTag) return false;
	switch (aTag) {
		case stringTag: return a.toString() === b.toString();
		case numberTag: return eq(a.valueOf(), b.valueOf());
		case booleanTag:
		case dateTag:
		case symbolTag: return Object.is(a.valueOf(), b.valueOf());
		case regexpTag: return a.source === b.source && a.flags === b.flags;
		case functionTag: return a === b;
	}
	stack = stack ?? /* @__PURE__ */ new Map();
	const aStack = stack.get(a);
	const bStack = stack.get(b);
	if (aStack != null && bStack != null) return aStack === b;
	stack.set(a, b);
	stack.set(b, a);
	try {
		switch (aTag) {
			case mapTag:
				if (a.size !== b.size) return false;
				for (const [key, value] of a.entries()) if (!b.has(key) || !isEqualWithImpl(value, b.get(key), key, a, b, stack, areValuesEqual)) return false;
				return true;
			case setTag: {
				if (a.size !== b.size) return false;
				const aValues = Array.from(a.values());
				const bValues = Array.from(b.values());
				for (let i = 0; i < aValues.length; i++) {
					const aValue = aValues[i];
					const index = bValues.findIndex((bValue) => {
						return isEqualWithImpl(aValue, bValue, void 0, a, b, stack, areValuesEqual);
					});
					if (index === -1) return false;
					bValues.splice(index, 1);
				}
				return true;
			}
			case arrayTag:
			case uint8ArrayTag:
			case uint8ClampedArrayTag:
			case uint16ArrayTag:
			case uint32ArrayTag:
			case bigUint64ArrayTag:
			case int8ArrayTag:
			case int16ArrayTag:
			case int32ArrayTag:
			case bigInt64ArrayTag:
			case float32ArrayTag:
			case float64ArrayTag:
				if (isBuffer(a) !== isBuffer(b)) return false;
				if (a.length !== b.length) return false;
				for (let i = 0; i < a.length; i++) if (!isEqualWithImpl(a[i], b[i], i, a, b, stack, areValuesEqual)) return false;
				return true;
			case arrayBufferTag:
				if (a.byteLength !== b.byteLength) return false;
				return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack, areValuesEqual);
			case dataViewTag:
				if (a.byteLength !== b.byteLength || a.byteOffset !== b.byteOffset) return false;
				return areObjectsEqual(new Uint8Array(a), new Uint8Array(b), stack, areValuesEqual);
			case errorTag: return a.name === b.name && a.message === b.message;
			case objectTag: {
				if (!(areObjectsEqual(a.constructor, b.constructor, stack, areValuesEqual) || isPlainObject(a) && isPlainObject(b))) return false;
				const aKeys = [...Object.keys(a), ...getSymbols(a)];
				const bKeys = [...Object.keys(b), ...getSymbols(b)];
				if (aKeys.length !== bKeys.length) return false;
				for (let i = 0; i < aKeys.length; i++) {
					const propKey = aKeys[i];
					const aProp = a[propKey];
					if (!Object.hasOwn(b, propKey)) return false;
					const bProp = b[propKey];
					if (!isEqualWithImpl(aProp, bProp, propKey, a, b, stack, areValuesEqual)) return false;
				}
				return true;
			}
			default: return false;
		}
	} finally {
		stack.delete(a);
		stack.delete(b);
	}
}
var init_isEqualWith = __esmMin((() => {
	init_getSymbols();
	init_getTag();
	init_tags();
	init_isBuffer();
	init_isPlainObject();
	init_eq();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/function/noop.mjs
/**
* A no-operation function that does nothing.
* This can be used as a placeholder or default function.
*
* @example
* noop(); // Does nothing
*
* @returns This function does not return anything.
*/
function noop$1() {}
var init_noop = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/isEqual.mjs
/**
* Checks if two values are equal, including support for `Date`, `RegExp`, and deep object comparison.
*
* @param a - The first value to compare.
* @param b - The second value to compare.
* @returns `true` if the values are equal, otherwise `false`.
*
* @example
* isEqual(1, 1); // true
* isEqual({ a: 1 }, { a: 1 }); // true
* isEqual(/abc/g, /abc/g); // true
* isEqual(new Date('2020-01-01'), new Date('2020-01-01')); // true
* isEqual([1, 2, 3], [1, 2, 3]); // true
*/
function isEqual(a, b) {
	return isEqualWith(a, b, noop$1);
}
var init_isEqual = __esmMin((() => {
	init_noop();
	init_isEqualWith();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/index.mjs
var init_predicate = __esmMin((() => {
	init_isEqual();
}));
//#endregion
//#region ../../node_modules/@react-aria/live-announcer/dist/import.mjs
var init_import = __esmMin((() => {
	init_LiveAnnouncer();
}));
//#endregion
//#region ../../node_modules/clsx/dist/clsx.mjs
function r$1(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r$1(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r$1(e)) && (n && (n += " "), n += t);
	return n;
}
var init_clsx = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/function/debounce.mjs
/**
* Creates a debounced function that delays invoking the provided function until after `debounceMs` milliseconds
* have elapsed since the last time the debounced function was invoked. The debounced function also has a `cancel`
* method to cancel any pending execution.
*
* @template F - The type of function.
* @param func - The function to debounce.
* @param debounceMs - The number of milliseconds to delay.
* @param options - The options object
* @param options.signal - An optional AbortSignal to cancel the debounced function.
* @param options.edges - An optional array specifying whether the function should be invoked on the leading edge, trailing edge, or both.
* @returns A new debounced function with a `cancel` method.
*
* @example
* const debouncedFunction = debounce(() => {
*   console.log('Function executed');
* }, 1000);
*
* // Will log 'Function executed' after 1 second if not called again in that time
* debouncedFunction();
*
* // Will not log anything as the previous call is canceled
* debouncedFunction.cancel();
*
* // With AbortSignal
* const controller = new AbortController();
* const signal = controller.signal;
* const debouncedWithSignal = debounce(() => {
*  console.log('Function executed');
* }, 1000, { signal });
*
* debouncedWithSignal();
*
* // Will cancel the debounced function call
* controller.abort();
*/
function debounce$1(func, debounceMs, { signal, edges } = {}) {
	let pendingThis = void 0;
	let pendingArgs = null;
	const leading = edges != null && edges.includes("leading");
	const trailing = edges == null || edges.includes("trailing");
	const invoke = () => {
		if (pendingArgs !== null) {
			func.apply(pendingThis, pendingArgs);
			pendingThis = void 0;
			pendingArgs = null;
		}
	};
	const onTimerEnd = () => {
		if (trailing) invoke();
		cancel();
	};
	let timeoutId = null;
	const schedule = () => {
		if (timeoutId != null) clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			timeoutId = null;
			onTimerEnd();
		}, debounceMs);
	};
	const cancelTimer = () => {
		if (timeoutId !== null) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
	};
	const cancel = () => {
		cancelTimer();
		pendingThis = void 0;
		pendingArgs = null;
	};
	const flush = () => {
		invoke();
	};
	const debounced = function(...args) {
		if (signal?.aborted) return;
		pendingThis = this;
		pendingArgs = args;
		const isFirstCall = timeoutId == null;
		schedule();
		if (leading && isFirstCall) invoke();
	};
	debounced.schedule = schedule;
	debounced.cancel = cancel;
	debounced.flush = flush;
	signal?.addEventListener("abort", cancel, { once: true });
	return debounced;
}
var init_debounce = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/function/throttle.mjs
/**
* Creates a throttled function that only invokes the provided function at most once
* per every `throttleMs` milliseconds. Subsequent calls to the throttled function
* within the wait time will not trigger the execution of the original function.
*
* @template F - The type of function.
* @param func - The function to throttle.
* @param throttleMs - The number of milliseconds to throttle executions to.
* @returns A new throttled function that accepts the same parameters as the original function.
*
* @example
* const throttledFunction = throttle(() => {
*   console.log('Function executed');
* }, 1000);
*
* // Will log 'Function executed' immediately
* throttledFunction();
*
* // Will not log anything as it is within the throttle time
* throttledFunction();
*
* // After 1 second
* setTimeout(() => {
*   throttledFunction(); // Will log 'Function executed'
* }, 1000);
*/
function throttle(func, throttleMs, { signal, edges = ["leading", "trailing"] } = {}) {
	let pendingAt = null;
	const debounced = debounce$1(function(...args) {
		pendingAt = Date.now();
		func.apply(this, args);
	}, throttleMs, {
		signal,
		edges
	});
	const throttled = function(...args) {
		if (pendingAt == null) pendingAt = Date.now();
		if (Date.now() - pendingAt >= throttleMs) {
			pendingAt = Date.now();
			func.apply(this, args);
			debounced.cancel();
			debounced.schedule();
			return;
		}
		debounced.apply(this, args);
	};
	throttled.cancel = debounced.cancel;
	throttled.flush = debounced.flush;
	return throttled;
}
var init_throttle = __esmMin((() => {
	init_debounce();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/function/index.mjs
var init_function = __esmMin((() => {
	init_debounce();
	init_throttle();
}));
//#endregion
//#region ../../node_modules/@gilbarbara/deep-equal/dist/index.mjs
function isOfType(type) {
	return (value) => typeof value === type;
}
function equalArray(left, right) {
	const { length } = left;
	if (length !== right.length) return false;
	for (let index = length; index-- !== 0;) if (!equal(left[index], right[index])) return false;
	return true;
}
function equalArrayBuffer(left, right) {
	if (left.byteLength !== right.byteLength) return false;
	const view1 = new DataView(left.buffer);
	const view2 = new DataView(right.buffer);
	let index = left.byteLength;
	while (index--) if (view1.getUint8(index) !== view2.getUint8(index)) return false;
	return true;
}
function equalMap(left, right) {
	if (left.size !== right.size) return false;
	for (const index of left.entries()) if (!right.has(index[0])) return false;
	for (const index of left.entries()) if (!equal(index[1], right.get(index[0]))) return false;
	return true;
}
function equalSet(left, right) {
	if (left.size !== right.size) return false;
	for (const index of left.entries()) if (!right.has(index[0])) return false;
	return true;
}
function equal(left, right) {
	if (left === right) return true;
	if (left && isObject(left) && right && isObject(right)) {
		if (left.constructor !== right.constructor) return false;
		if (Array.isArray(left) && Array.isArray(right)) return equalArray(left, right);
		if (left instanceof Map && right instanceof Map) return equalMap(left, right);
		if (left instanceof Set && right instanceof Set) return equalSet(left, right);
		if (ArrayBuffer.isView(left) && ArrayBuffer.isView(right)) return equalArrayBuffer(left, right);
		if (isRegex(left) && isRegex(right)) return left.source === right.source && left.flags === right.flags;
		if (left.valueOf !== Object.prototype.valueOf) return left.valueOf() === right.valueOf();
		if (left.toString !== Object.prototype.toString) return left.toString() === right.toString();
		const leftKeys = Object.keys(left);
		const rightKeys = Object.keys(right);
		if (leftKeys.length !== rightKeys.length) return false;
		for (let index = leftKeys.length; index-- !== 0;) if (!Object.prototype.hasOwnProperty.call(right, leftKeys[index])) return false;
		for (let index = leftKeys.length; index-- !== 0;) {
			const key = leftKeys[index];
			if (key === "_owner" && left.$$typeof) continue;
			if (!equal(left[key], right[key])) return false;
		}
		return true;
	}
	if (Number.isNaN(left) && Number.isNaN(right)) return true;
	return left === right;
}
var isFunction, isNull, isRegex, isObject, isUndefined;
var init_dist$2 = __esmMin((() => {
	isFunction = isOfType("function");
	isNull = (value) => {
		return value === null;
	};
	isRegex = (value) => {
		return Object.prototype.toString.call(value).slice(8, -1) === "RegExp";
	};
	isObject = (value) => {
		return !isUndefined(value) && !isNull(value) && (isFunction(value) || typeof value === "object");
	};
	isUndefined = isOfType("undefined");
}));
//#endregion
//#region ../../node_modules/deepmerge/dist/cjs.js
var require_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var isMergeableObject = function isMergeableObject(value) {
		return isNonNullObject(value) && !isSpecial(value);
	};
	function isNonNullObject(value) {
		return !!value && typeof value === "object";
	}
	function isSpecial(value) {
		var stringValue = Object.prototype.toString.call(value);
		return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
	}
	var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for ? Symbol.for("react.element") : 60103;
	function isReactElement(value) {
		return value.$$typeof === REACT_ELEMENT_TYPE;
	}
	function emptyTarget(val) {
		return Array.isArray(val) ? [] : {};
	}
	function cloneUnlessOtherwiseSpecified(value, options) {
		return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
	}
	function defaultArrayMerge(target, source, options) {
		return target.concat(source).map(function(element) {
			return cloneUnlessOtherwiseSpecified(element, options);
		});
	}
	function getMergeFunction(key, options) {
		if (!options.customMerge) return deepmerge;
		var customMerge = options.customMerge(key);
		return typeof customMerge === "function" ? customMerge : deepmerge;
	}
	function getEnumerableOwnPropertySymbols(target) {
		return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol);
		}) : [];
	}
	function getKeys(target) {
		return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
	}
	function propertyIsOnObject(object, property) {
		try {
			return property in object;
		} catch (_) {
			return false;
		}
	}
	function propertyIsUnsafe(target, key) {
		return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
	}
	function mergeObject(target, source, options) {
		var destination = {};
		if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
		getKeys(source).forEach(function(key) {
			if (propertyIsUnsafe(target, key)) return;
			if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
			else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		});
		return destination;
	}
	function deepmerge(target, source, options) {
		options = options || {};
		options.arrayMerge = options.arrayMerge || defaultArrayMerge;
		options.isMergeableObject = options.isMergeableObject || isMergeableObject;
		options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
		var sourceIsArray = Array.isArray(source);
		if (!(sourceIsArray === Array.isArray(target))) return cloneUnlessOtherwiseSpecified(source, options);
		else if (sourceIsArray) return options.arrayMerge(target, source, options);
		else return mergeObject(target, source, options);
	}
	deepmerge.all = function deepmergeAll(array, options) {
		if (!Array.isArray(array)) throw new Error("first argument should be an array");
		return array.reduce(function(prev, next) {
			return deepmerge(prev, next, options);
		}, {});
	};
	module.exports = deepmerge;
}));
//#endregion
//#region ../../node_modules/@internationalized/string/dist/private/LocalizedStringDictionary.mjs
function $a747a10fe70a57da$var$getStringsForLocale(locale, strings, defaultLocale = "en-US") {
	if (strings[locale]) return strings[locale];
	let language = $a747a10fe70a57da$var$getLanguage(locale);
	let script = $a747a10fe70a57da$var$getScript(locale);
	if (script && strings[`${language}-${script}`]) return strings[`${language}-${script}`];
	if (strings[language]) return strings[language];
	for (let key in strings) if (key.startsWith(language + "-")) return strings[key];
	return strings[defaultLocale];
}
function $a747a10fe70a57da$var$getLanguage(locale) {
	if (Intl.Locale) return new Intl.Locale(locale).language;
	return locale.split("-")[0];
}
function $a747a10fe70a57da$var$getScript(locale) {
	if (Intl.Locale) return new Intl.Locale(locale).script;
}
var $a747a10fe70a57da$var$localeSymbol, $a747a10fe70a57da$var$stringsSymbol, $a747a10fe70a57da$var$cachedGlobalStrings, $a747a10fe70a57da$export$c17fa47878dc55b6;
var init_LocalizedStringDictionary = __esmMin((() => {
	$a747a10fe70a57da$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
	$a747a10fe70a57da$var$stringsSymbol = Symbol.for("react-aria.i18n.strings");
	$a747a10fe70a57da$var$cachedGlobalStrings = void 0;
	$a747a10fe70a57da$export$c17fa47878dc55b6 = class $a747a10fe70a57da$export$c17fa47878dc55b6 {
		constructor(messages, defaultLocale = "en-US") {
			this.strings = Object.fromEntries(Object.entries(messages).filter(([, v]) => v));
			this.defaultLocale = defaultLocale;
		}
		/** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
			let string = this.getStringsForLocale(locale)[key];
			if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
			return string;
		}
		/** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
			let strings = this.strings[locale];
			if (!strings) {
				strings = $a747a10fe70a57da$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
				this.strings[locale] = strings;
			}
			return strings;
		}
		static getGlobalDictionaryForPackage(packageName) {
			if (typeof window === "undefined") return null;
			let locale = window[$a747a10fe70a57da$var$localeSymbol];
			if ($a747a10fe70a57da$var$cachedGlobalStrings === void 0) {
				let globalStrings = window[$a747a10fe70a57da$var$stringsSymbol];
				if (!globalStrings) return null;
				$a747a10fe70a57da$var$cachedGlobalStrings = {};
				for (let pkg in globalStrings) $a747a10fe70a57da$var$cachedGlobalStrings[pkg] = new $a747a10fe70a57da$export$c17fa47878dc55b6({ [locale]: globalStrings[pkg] }, locale);
			}
			let dictionary = $a747a10fe70a57da$var$cachedGlobalStrings?.[packageName];
			if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
			return dictionary;
		}
	};
}));
//#endregion
//#region ../../node_modules/@internationalized/string/dist/private/LocalizedStringFormatter.mjs
var $b27c684a33948c64$var$pluralRulesCache, $b27c684a33948c64$var$numberFormatCache, $b27c684a33948c64$export$2f817fcdc4b89ae0;
var init_LocalizedStringFormatter = __esmMin((() => {
	$b27c684a33948c64$var$pluralRulesCache = /* @__PURE__ */ new Map();
	$b27c684a33948c64$var$numberFormatCache = /* @__PURE__ */ new Map();
	$b27c684a33948c64$export$2f817fcdc4b89ae0 = class {
		constructor(locale, strings) {
			this.locale = locale;
			this.strings = strings;
		}
		/** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
			let message = this.strings.getStringForLocale(key, this.locale);
			return typeof message === "function" ? message(variables, this) : message;
		}
		plural(count, options, type = "cardinal") {
			let opt = options["=" + count];
			if (opt) return typeof opt === "function" ? opt() : opt;
			let key = this.locale + ":" + type;
			let pluralRules = $b27c684a33948c64$var$pluralRulesCache.get(key);
			if (!pluralRules) {
				pluralRules = new Intl.PluralRules(this.locale, { type });
				$b27c684a33948c64$var$pluralRulesCache.set(key, pluralRules);
			}
			opt = options[pluralRules.select(count)] || options.other;
			return typeof opt === "function" ? opt() : opt;
		}
		number(value) {
			let numberFormat = $b27c684a33948c64$var$numberFormatCache.get(this.locale);
			if (!numberFormat) {
				numberFormat = new Intl.NumberFormat(this.locale);
				$b27c684a33948c64$var$numberFormatCache.set(this.locale, numberFormat);
			}
			return numberFormat.format(value);
		}
		select(options, value) {
			let opt = options[value] || options.other;
			return typeof opt === "function" ? opt() : opt;
		}
	};
}));
//#endregion
//#region ../../node_modules/@internationalized/string/dist/index.mjs
var init_dist$1 = __esmMin((() => {
	init_LocalizedStringDictionary();
	init_LocalizedStringFormatter();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
var init_objectWithoutPropertiesLoose = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js
/**
* @license React
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {}));
//#endregion
//#region ../../node_modules/downshift/node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_production_min();
}));
//#endregion
//#region ../../node_modules/compute-scroll-into-view/dist/index.js
var t, e, n, o, l, r;
var init_dist = __esmMin((() => {
	t = (t) => "object" == typeof t && null != t && 1 === t.nodeType;
	e = (t, e) => (!e || "hidden" !== t) && "visible" !== t && "clip" !== t;
	n = (t, n) => {
		if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
			const o = getComputedStyle(t, null);
			return e(o.overflowY, n) || e(o.overflowX, n) || ((t) => {
				const e = ((t) => {
					if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
					try {
						return t.ownerDocument.defaultView.frameElement;
					} catch (t) {
						return null;
					}
				})(t);
				return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
			})(t);
		}
		return !1;
	};
	o = (t, e, n, o, l, r, i, s) => r < t && i > e || r > t && i < e ? 0 : r <= t && s <= n || i >= e && s >= n ? r - t - o : i > e && s < n || r < t && s > n ? i - e + l : 0;
	l = (t) => {
		const e = t.parentElement;
		return null == e ? t.getRootNode().host || null : e;
	};
	r = (e, r) => {
		var i, s, d, h;
		if ("undefined" == typeof document) return [];
		const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r, p = "function" == typeof a ? a : (t) => t !== a;
		if (!t(e)) throw new TypeError("Invalid target");
		const m = document.scrollingElement || document.documentElement, w = [];
		let W = e;
		for (; t(W) && p(W);) {
			if (W = l(W), W === m) {
				w.push(W);
				break;
			}
			null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
		}
		const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t) => {
			const e = window.getComputedStyle(t);
			return {
				top: parseFloat(e.scrollMarginTop) || 0,
				right: parseFloat(e.scrollMarginRight) || 0,
				bottom: parseFloat(e.scrollMarginBottom) || 0,
				left: parseFloat(e.scrollMarginLeft) || 0
			};
		})(e);
		let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
		const L = [];
		for (let t = 0; t < w.length; t++) {
			const e = w[t], { height: l, width: r, top: i, right: s, bottom: d, left: h } = e.getBoundingClientRect();
			if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && (e === m && !n(e) || x >= i && I <= d && R >= h && C <= s)) return L;
			const a = getComputedStyle(e), g = parseInt(a.borderLeftWidth, 10), p = parseInt(a.borderTopWidth, 10), W = parseInt(a.borderRightWidth, 10), T = parseInt(a.borderBottomWidth, 10);
			let B = 0, F = 0;
			const V = "offsetWidth" in e ? e.offsetWidth - e.clientWidth - g - W : 0, S = "offsetHeight" in e ? e.offsetHeight - e.clientHeight - p - T : 0, X = "offsetWidth" in e ? 0 === e.offsetWidth ? 0 : r / e.offsetWidth : 0, Y = "offsetHeight" in e ? 0 === e.offsetHeight ? 0 : l / e.offsetHeight : 0;
			if (m === e) B = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o(M, M + H, H, p, T, M + k, M + k + v, v) : k - H / 2, F = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o(y, y + b, b, g, W, y + D, y + D + E, E), B = Math.max(0, B + M), F = Math.max(0, F + y);
			else {
				B = "start" === f ? k - i - p : "end" === f ? k - d + T + S : "nearest" === f ? o(i, d, l, p, T + S, k, k + v, v) : k - (i + l / 2) + S / 2, F = "start" === u ? D - h - g : "center" === u ? D - (h + r / 2) + V / 2 : "end" === u ? D - s + W + V : o(h, s, r, g, W + V, D, D + E, E);
				const { scrollLeft: t, scrollTop: n } = e;
				B = 0 === Y ? 0 : Math.max(0, Math.min(n + B / Y, e.scrollHeight - l / Y + S)), F = 0 === X ? 0 : Math.max(0, Math.min(t + F / X, e.scrollWidth - r / X + V)), k += n - B, D += t - F;
			}
			L.push({
				el: e,
				top: B,
				left: F
			});
		}
		return L;
	};
}));
//#endregion
//#region ../../node_modules/downshift/dist/downshift.esm.js
/**
* Accepts a parameter and returns it if it's a function
* or a noop function if it's not. This allows us to
* accept a callback, but not worry about it if it's not
* passed.
* @param {Function} cb the callback
* @return {Function} a function
*/
function cbToCb(cb) {
	return typeof cb === "function" ? cb : noop;
}
function noop() {}
/**
* Scroll node into view if necessary
* @param {HTMLElement} node the element that should scroll into view
* @param {HTMLElement} menuNode the menu element of the component
*/
function scrollIntoView(node, menuNode) {
	if (!node) return;
	r(node, {
		boundary: menuNode,
		block: "nearest",
		scrollMode: "if-needed"
	}).forEach(function(_ref) {
		var el = _ref.el, top = _ref.top, left = _ref.left;
		el.scrollTop = top;
		el.scrollLeft = left;
	});
}
/**
* @param {HTMLElement} parent the parent node
* @param {HTMLElement} child the child node
* @param {Window} environment The window context where downshift renders.
* @return {Boolean} whether the parent is the child or the child is in the parent
*/
function isOrContainsNode(parent, child, environment) {
	return parent === child || child instanceof environment.Node && parent.contains && parent.contains(child);
}
/**
* Simple debounce implementation. Will call the given
* function once after the time given has passed since
* it was last called.
* @param {Function} fn the function to call after the time
* @param {Number} time the time to wait
* @return {Function} the debounced function
*/
function debounce(fn, time) {
	var timeoutId;
	function cancel() {
		if (timeoutId) clearTimeout(timeoutId);
	}
	function wrapper() {
		for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
		cancel();
		timeoutId = setTimeout(function() {
			timeoutId = null;
			fn.apply(void 0, args);
		}, time);
	}
	wrapper.cancel = cancel;
	return wrapper;
}
/**
* This is intended to be used to compose event handlers.
* They are executed in order until one of them sets
* `event.preventDownshiftDefault = true`.
* @param {...Function} fns the event handler functions
* @return {Function} the event handler to add to an element
*/
function callAllEventHandlers() {
	for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) fns[_key2] = arguments[_key2];
	return function(event) {
		for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
		return fns.some(function(fn) {
			if (fn) fn.apply(void 0, [event].concat(args));
			return event.preventDownshiftDefault || event.hasOwnProperty("nativeEvent") && event.nativeEvent.preventDownshiftDefault;
		});
	};
}
function handleRefs() {
	for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) refs[_key4] = arguments[_key4];
	return function(node) {
		refs.forEach(function(ref) {
			if (typeof ref === "function") ref(node);
			else if (ref) ref.current = node;
		});
	};
}
/**
* This generates a unique ID for an instance of Downshift
* @return {String} the unique ID
*/
function generateId() {
	return String(idCounter++);
}
/**
* Default implementation for status message. Only added when menu is open.
* Will specify if there are results in the list, and if so, how many,
* and what keys are relevant.
*
* @param {Object} param the downshift state and other relevant properties
* @return {String} the a11y status message
*/
function getA11yStatusMessage(_ref2) {
	var isOpen = _ref2.isOpen, resultCount = _ref2.resultCount, previousResultCount = _ref2.previousResultCount;
	if (!isOpen) return "";
	if (!resultCount) return "No results are available.";
	if (resultCount !== previousResultCount) return resultCount + " result" + (resultCount === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select.";
	return "";
}
/**
* Takes an argument and if it's an array, returns the first item in the array
* otherwise returns the argument
* @param {*} arg the maybe-array
* @param {*} defaultValue the value if arg is falsey not defined
* @return {*} the arg or it's first item
*/
function unwrapArray(arg, defaultValue) {
	arg = Array.isArray(arg) ? arg[0] : arg;
	if (!arg && defaultValue) return defaultValue;
	else return arg;
}
/**
* @param {Object} element (P)react element
* @return {Boolean} whether it's a DOM element
*/
function isDOMElement(element) {
	return typeof element.type === "string";
}
/**
* @param {Object} element (P)react element
* @return {Object} the props
*/
function getElementProps(element) {
	return element.props;
}
/**
* @param {Object} state the state object
* @return {Object} state that is relevant to downshift
*/
function pickState(state) {
	if (state === void 0) state = {};
	var result = {};
	stateKeys.forEach(function(k) {
		if (state.hasOwnProperty(k)) result[k] = state[k];
	});
	return result;
}
/**
* This will perform a shallow merge of the given state object
* with the state coming from props
* (for the controlled component scenario)
* This is used in state updater functions so they're referencing
* the right state regardless of where it comes from.
*
* @param {Object} state The state of the component/hook.
* @param {Object} props The props that may contain controlled values.
* @returns {Object} The merged controlled state.
*/
function getState(state, props) {
	if (!state || !props) return state;
	return Object.keys(state).reduce(function(prevState, key) {
		prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
		return prevState;
	}, {});
}
/**
* This determines whether a prop is a "controlled prop" meaning it is
* state which is controlled by the outside of this component rather
* than within this component.
*
* @param {Object} props The props that may contain controlled values.
* @param {String} key the key to check
* @return {Boolean} whether it is a controlled controlled prop
*/
function isControlledProp(props, key) {
	return props[key] !== void 0;
}
/**
* Normalizes the 'key' property of a KeyboardEvent in IE/Edge
* @param {Object} event a keyboardEvent object
* @return {String} keyboard key
*/
function normalizeArrowKey(event) {
	var key = event.key, keyCode = event.keyCode;
	/* istanbul ignore next (ie) */
	if (keyCode >= 37 && keyCode <= 40 && key.indexOf("Arrow") !== 0) return "Arrow" + key;
	return key;
}
/**
* Returns the next non-disabled highlightedIndex value.
*
* @param {number} start The current highlightedIndex.
* @param {number} offset The offset from the current highlightedIndex to start searching.
* @param {unknown[]} items The items array.
* @param {(item: unknown, index: number) => boolean} isItemDisabled Function that tells if an item is disabled or not.
* @param {boolean?} circular If the search reaches the end, if it can search again starting from the other end.
* @returns {number} The next highlightedIndex.
*/
function getHighlightedIndex(start, offset, items, isItemDisabled, circular) {
	if (circular === void 0) circular = false;
	var count = items.length;
	if (count === 0) return -1;
	var itemsLastIndex = count - 1;
	if (typeof start !== "number" || start < 0 || start > itemsLastIndex) start = offset > 0 ? -1 : itemsLastIndex + 1;
	var current = start + offset;
	if (current < 0) current = circular ? itemsLastIndex : 0;
	else if (current > itemsLastIndex) current = circular ? 0 : itemsLastIndex;
	var highlightedIndex = getNonDisabledIndex(current, offset < 0, items, isItemDisabled, circular);
	if (highlightedIndex === -1) return start >= count ? -1 : start;
	return highlightedIndex;
}
/**
* Returns the next non-disabled highlightedIndex value.
*
* @param {number} start The current highlightedIndex.
* @param {boolean} backwards If true, it will search backwards from the start.
* @param {unknown[]} items The items array.
* @param {(item: unknown, index: number) => boolean} isItemDisabled Function that tells if an item is disabled or not.
* @param {boolean} circular If the search reaches the end, if it can search again starting from the other end.
* @returns {number} The next non-disabled index.
*/
function getNonDisabledIndex(start, backwards, items, isItemDisabled, circular) {
	if (circular === void 0) circular = false;
	var count = items.length;
	if (backwards) {
		for (var index = start; index >= 0; index--) if (!isItemDisabled(items[index], index)) return index;
	} else for (var _index = start; _index < count; _index++) if (!isItemDisabled(items[_index], _index)) return _index;
	if (circular) return getNonDisabledIndex(backwards ? count - 1 : 0, backwards, items, isItemDisabled);
	return -1;
}
/**
* Checks if event target is within the downshift elements.
*
* @param {EventTarget} target Target to check.
* @param {HTMLElement[]} downshiftElements The elements that form downshift (list, toggle button etc).
* @param {Window} environment The window context where downshift renders.
* @param {boolean} checkActiveElement Whether to also check activeElement.
*
* @returns {boolean} Whether or not the target is within downshift elements.
*/
function targetWithinDownshift(target, downshiftElements, environment, checkActiveElement) {
	if (checkActiveElement === void 0) checkActiveElement = true;
	return environment && downshiftElements.some(function(contextNode) {
		return contextNode && (isOrContainsNode(contextNode, target, environment) || checkActiveElement && isOrContainsNode(contextNode, environment.document.activeElement, environment));
	});
}
/**
* Get the status node or create it if it does not already exist.
* @param {Object} documentProp document passed by the user.
* @return {HTMLElement} the status node.
*/
function getStatusDiv(documentProp) {
	var statusDiv = documentProp.getElementById("a11y-status-message");
	if (statusDiv) return statusDiv;
	statusDiv = documentProp.createElement("div");
	statusDiv.setAttribute("id", "a11y-status-message");
	statusDiv.setAttribute("role", "status");
	statusDiv.setAttribute("aria-live", "polite");
	statusDiv.setAttribute("aria-relevant", "additions text");
	Object.assign(statusDiv.style, {
		border: "0",
		clip: "rect(0 0 0 0)",
		height: "1px",
		margin: "-1px",
		overflow: "hidden",
		padding: "0",
		position: "absolute",
		width: "1px"
	});
	documentProp.body.appendChild(statusDiv);
	return statusDiv;
}
/**
* @param {String} status the status message
* @param {Object} documentProp document passed by the user.
*/
function setStatus(status, documentProp) {
	if (!status || !documentProp) return;
	var div = getStatusDiv(documentProp);
	div.textContent = status;
	cleanupStatus(documentProp);
}
/**
* Removes the status element from the DOM
* @param {Document} documentProp 
*/
function cleanupStatusDiv(documentProp) {
	var statusDiv = documentProp == null ? void 0 : documentProp.getElementById("a11y-status-message");
	if (statusDiv) statusDiv.remove();
}
function callOnChangeProps(action, state, newState) {
	var props = action.props, type = action.type;
	var changes = {};
	Object.keys(state).forEach(function(key) {
		invokeOnChangeHandler(key, action, state, newState);
		if (newState[key] !== state[key]) changes[key] = newState[key];
	});
	if (props.onStateChange && Object.keys(changes).length) props.onStateChange(_extends({ type }, changes));
}
function invokeOnChangeHandler(key, action, state, newState) {
	var props = action.props, type = action.type;
	var handler = "on" + capitalizeString(key) + "Change";
	if (props[handler] && newState[key] !== void 0 && newState[key] !== state[key]) props[handler](_extends({ type }, newState));
}
/**
* Default state reducer that returns the changes.
*
* @param {Object} s state.
* @param {Object} a action with changes.
* @returns {Object} changes.
*/
function stateReducer(s, a) {
	return a.changes;
}
function getItemAndIndex(itemProp, indexProp, items, errorMessage) {
	var item, index;
	if (itemProp === void 0) {
		if (indexProp === void 0) throw new Error(errorMessage);
		item = items[indexProp];
		index = indexProp;
	} else {
		index = indexProp === void 0 ? items.indexOf(itemProp) : indexProp;
		item = itemProp;
	}
	return [item, index];
}
function isAcceptedCharacterKey(key) {
	return /^\S{1}$/.test(key);
}
function capitalizeString(string) {
	return "" + string.slice(0, 1).toUpperCase() + string.slice(1);
}
function useLatestRef(val) {
	var ref = useRef(val);
	ref.current = val;
	return ref;
}
/**
* Computes the controlled state using a the previous state, props,
* two reducers, one from downshift and an optional one from the user.
* Also calls the onChange handlers for state values that have changed.
*
* @param {Function} reducer Reducer function from downshift.
* @param {Object} props The hook props, also passed to createInitialState.
* @param {Function} createInitialState Function that returns the initial state.
* @param {Function} isStateEqual Function that checks if a previous state is equal to the next.
* @returns {Array} An array with the state and an action dispatcher.
*/
function useEnhancedReducer(reducer, props, createInitialState, isStateEqual) {
	var prevStateRef = useRef();
	var actionRef = useRef();
	var _useReducer = useReducer(useCallback(function(state, action) {
		actionRef.current = action;
		state = getState(state, action.props);
		var changes = reducer(state, action);
		return action.props.stateReducer(state, _extends({}, action, { changes }));
	}, [reducer]), props, createInitialState), state = _useReducer[0], dispatch = _useReducer[1];
	var propsRef = useLatestRef(props);
	var dispatchWithProps = useCallback(function(action) {
		return dispatch(_extends({ props: propsRef.current }, action));
	}, [propsRef]);
	var action = actionRef.current;
	useEffect(function() {
		var prevState = getState(prevStateRef.current, action == null ? void 0 : action.props);
		if (action && prevStateRef.current && !isStateEqual(prevState, state)) callOnChangeProps(action, prevState, state);
		prevStateRef.current = state;
	}, [
		state,
		action,
		isStateEqual
	]);
	return [state, dispatchWithProps];
}
/**
* Wraps the useEnhancedReducer and applies the controlled prop values before
* returning the new state.
*
* @param {Function} reducer Reducer function from downshift.
* @param {Object} props The hook props, also passed to createInitialState.
* @param {Function} createInitialState Function that returns the initial state.
* @param {Function} isStateEqual Function that checks if a previous state is equal to the next.
* @returns {Array} An array with the state and an action dispatcher.
*/
function useControlledReducer$1(reducer, props, createInitialState, isStateEqual) {
	var _useEnhancedReducer = useEnhancedReducer(reducer, props, createInitialState, isStateEqual), state = _useEnhancedReducer[0], dispatch = _useEnhancedReducer[1];
	return [getState(state, props), dispatch];
}
function getDefaultValue$1(props, propKey, defaultStateValues) {
	if (defaultStateValues === void 0) defaultStateValues = dropdownDefaultStateValues;
	var defaultValue = props["default" + capitalizeString(propKey)];
	if (defaultValue !== void 0) return defaultValue;
	return defaultStateValues[propKey];
}
function getInitialValue$1(props, propKey, defaultStateValues) {
	if (defaultStateValues === void 0) defaultStateValues = dropdownDefaultStateValues;
	var value = props[propKey];
	if (value !== void 0) return value;
	var initialValue = props["initial" + capitalizeString(propKey)];
	if (initialValue !== void 0) return initialValue;
	return getDefaultValue$1(props, propKey, defaultStateValues);
}
function getInitialState$2(props) {
	var selectedItem = getInitialValue$1(props, "selectedItem");
	var isOpen = getInitialValue$1(props, "isOpen");
	var highlightedIndex = getInitialHighlightedIndex(props);
	var inputValue = getInitialValue$1(props, "inputValue");
	return {
		highlightedIndex: highlightedIndex < 0 && selectedItem && isOpen ? props.items.findIndex(function(item) {
			return props.itemToKey(item) === props.itemToKey(selectedItem);
		}) : highlightedIndex,
		isOpen,
		selectedItem,
		inputValue
	};
}
function getHighlightedIndexOnOpen(props, state, offset) {
	var items = props.items, initialHighlightedIndex = props.initialHighlightedIndex, defaultHighlightedIndex = props.defaultHighlightedIndex, isItemDisabled = props.isItemDisabled, itemToKey = props.itemToKey;
	var selectedItem = state.selectedItem, highlightedIndex = state.highlightedIndex;
	if (items.length === 0) return -1;
	if (initialHighlightedIndex !== void 0 && highlightedIndex === initialHighlightedIndex && !isItemDisabled(items[initialHighlightedIndex], initialHighlightedIndex)) return initialHighlightedIndex;
	if (defaultHighlightedIndex !== void 0 && !isItemDisabled(items[defaultHighlightedIndex], defaultHighlightedIndex)) return defaultHighlightedIndex;
	if (selectedItem) return items.findIndex(function(item) {
		return itemToKey(selectedItem) === itemToKey(item);
	});
	if (offset < 0 && !isItemDisabled(items[items.length - 1], items.length - 1)) return items.length - 1;
	if (offset > 0 && !isItemDisabled(items[0], 0)) return 0;
	return -1;
}
/**
* Tracks mouse and touch events, such as mouseDown, touchMove and touchEnd.
*
* @param {Window} environment The environment to add the event listeners to, for instance window.
* @param {() => void} handleBlur The function that is called if mouseDown or touchEnd occured outside the downshiftElements.
* @param {Array<{current: HTMLElement}>} downshiftElementsRefs The refs for the elements that should not trigger a blur action from mouseDown or touchEnd.
* @returns {{isMouseDown: boolean, isTouchMove: boolean, isTouchEnd: boolean}} The mouse and touch events information, if any of are happening.
*/
function useMouseAndTouchTracker(environment, handleBlur, downshiftElementsRefs) {
	var mouseAndTouchTrackersRef = useRef({
		isMouseDown: false,
		isTouchMove: false,
		isTouchEnd: false
	});
	useEffect(function() {
		if (!environment) return noop;
		var downshiftElements = downshiftElementsRefs.map(function(ref) {
			return ref.current;
		});
		function onMouseDown() {
			mouseAndTouchTrackersRef.current.isTouchEnd = false;
			mouseAndTouchTrackersRef.current.isMouseDown = true;
		}
		function onMouseUp(event) {
			mouseAndTouchTrackersRef.current.isMouseDown = false;
			if (!targetWithinDownshift(event.target, downshiftElements, environment)) handleBlur();
		}
		function onTouchStart() {
			mouseAndTouchTrackersRef.current.isTouchEnd = false;
			mouseAndTouchTrackersRef.current.isTouchMove = false;
		}
		function onTouchMove() {
			mouseAndTouchTrackersRef.current.isTouchMove = true;
		}
		function onTouchEnd(event) {
			mouseAndTouchTrackersRef.current.isTouchEnd = true;
			if (!mouseAndTouchTrackersRef.current.isTouchMove && !targetWithinDownshift(event.target, downshiftElements, environment, false)) handleBlur();
		}
		environment.addEventListener("mousedown", onMouseDown);
		environment.addEventListener("mouseup", onMouseUp);
		environment.addEventListener("touchstart", onTouchStart);
		environment.addEventListener("touchmove", onTouchMove);
		environment.addEventListener("touchend", onTouchEnd);
		return function cleanup() {
			environment.removeEventListener("mousedown", onMouseDown);
			environment.removeEventListener("mouseup", onMouseUp);
			environment.removeEventListener("touchstart", onTouchStart);
			environment.removeEventListener("touchmove", onTouchMove);
			environment.removeEventListener("touchend", onTouchEnd);
		};
	}, [
		downshiftElementsRefs,
		environment,
		handleBlur
	]);
	return mouseAndTouchTrackersRef.current;
}
/**
* Adds an a11y aria live status message if getA11yStatusMessage is passed.
* @param {(options: Object) => string} getA11yStatusMessage The function that builds the status message.
* @param {Object} options The options to be passed to getA11yStatusMessage if called.
* @param {Array<unknown>} dependencyArray The dependency array that triggers the status message setter via useEffect.
* @param {{document: Document}} environment The environment object containing the document.
*/
function useA11yMessageStatus(getA11yStatusMessage, options, dependencyArray, environment) {
	if (environment === void 0) environment = {};
	var document = environment.document;
	var isInitialMount = useIsInitialMount();
	useEffect(function() {
		if (!getA11yStatusMessage || isInitialMount || !document) return;
		updateA11yStatus(getA11yStatusMessage(options), document);
	}, dependencyArray);
	useEffect(function() {
		return function() {
			updateA11yStatus.cancel();
			cleanupStatusDiv(document);
		};
	}, [document]);
}
function useScrollIntoView(_ref3) {
	var highlightedIndex = _ref3.highlightedIndex, isOpen = _ref3.isOpen, itemRefs = _ref3.itemRefs, getItemNodeFromIndex = _ref3.getItemNodeFromIndex, menuElement = _ref3.menuElement, scrollIntoViewProp = _ref3.scrollIntoView;
	var shouldScrollRef = useRef(true);
	useIsomorphicLayoutEffect(function() {
		if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) return;
		if (shouldScrollRef.current === false) shouldScrollRef.current = true;
		else scrollIntoViewProp(getItemNodeFromIndex(highlightedIndex), menuElement);
	}, [highlightedIndex]);
	return shouldScrollRef;
}
/**
* Handles selection on Enter / Alt + ArrowUp. Closes the menu and resets the highlighted index, unless there is a highlighted.
* In that case, selects the item and resets to defaults for open state and highlighted idex.
* @param {Object} props The useCombobox props.
* @param {number} highlightedIndex The index from the state.
* @param {boolean} inputValue Also return the input value for state.
* @returns The changes for the state.
*/
function getChangesOnSelection(props, highlightedIndex, inputValue) {
	var _props$items;
	if (inputValue === void 0) inputValue = true;
	return _extends({
		isOpen: false,
		highlightedIndex: -1
	}, ((_props$items = props.items) == null ? void 0 : _props$items.length) && highlightedIndex >= 0 && _extends({
		selectedItem: props.items[highlightedIndex],
		isOpen: getDefaultValue$1(props, "isOpen"),
		highlightedIndex: getDefaultValue$1(props, "highlightedIndex")
	}, inputValue && { inputValue: props.itemToString(props.items[highlightedIndex]) }));
}
/**
* Check if a state is equal for dropdowns, by comparing isOpen, inputValue, highlightedIndex and selected item.
* Used by useSelect and useCombobox.
*
* @param {Object} prevState
* @param {Object} newState
* @returns {boolean} Wheather the states are deeply equal.
*/
function isDropdownsStateEqual(prevState, newState) {
	return prevState.isOpen === newState.isOpen && prevState.inputValue === newState.inputValue && prevState.highlightedIndex === newState.highlightedIndex && prevState.selectedItem === newState.selectedItem;
}
/**
* Tracks if it's the first render.
*/
function useIsInitialMount() {
	var isInitialMountRef = _storybook_global_react_default.useRef(true);
	_storybook_global_react_default.useEffect(function() {
		isInitialMountRef.current = false;
		return function() {
			isInitialMountRef.current = true;
		};
	}, []);
	return isInitialMountRef.current;
}
/**
* Returns the new highlightedIndex based on the defaultHighlightedIndex prop, if it's not disabled.
*
* @param {Object} props Props from useCombobox or useSelect.
* @returns {number} The highlighted index.
*/
function getDefaultHighlightedIndex(props) {
	var highlightedIndex = getDefaultValue$1(props, "highlightedIndex");
	if (highlightedIndex > -1 && props.isItemDisabled(props.items[highlightedIndex], highlightedIndex)) return -1;
	return highlightedIndex;
}
/**
* Returns the new highlightedIndex based on the initialHighlightedIndex prop, if not disabled.
*
* @param {Object} props Props from useCombobox or useSelect.
* @returns {number} The highlighted index.
*/
function getInitialHighlightedIndex(props) {
	var highlightedIndex = getInitialValue$1(props, "highlightedIndex");
	if (highlightedIndex > -1 && props.isItemDisabled(props.items[highlightedIndex], highlightedIndex)) return -1;
	return highlightedIndex;
}
function downshiftCommonReducer(state, action, stateChangeTypes) {
	var type = action.type, props = action.props;
	var changes;
	switch (type) {
		case stateChangeTypes.ItemMouseMove:
			changes = { highlightedIndex: action.disabled ? -1 : action.index };
			break;
		case stateChangeTypes.MenuMouseLeave:
			changes = { highlightedIndex: -1 };
			break;
		case stateChangeTypes.ToggleButtonClick:
		case stateChangeTypes.FunctionToggleMenu:
			changes = {
				isOpen: !state.isOpen,
				highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
			};
			break;
		case stateChangeTypes.FunctionOpenMenu:
			changes = {
				isOpen: true,
				highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
			};
			break;
		case stateChangeTypes.FunctionCloseMenu:
			changes = { isOpen: false };
			break;
		case stateChangeTypes.FunctionSetHighlightedIndex:
			changes = { highlightedIndex: props.isItemDisabled(props.items[action.highlightedIndex], action.highlightedIndex) ? -1 : action.highlightedIndex };
			break;
		case stateChangeTypes.FunctionSetInputValue:
			changes = { inputValue: action.inputValue };
			break;
		case stateChangeTypes.FunctionReset:
			changes = {
				highlightedIndex: getDefaultHighlightedIndex(props),
				isOpen: getDefaultValue$1(props, "isOpen"),
				selectedItem: getDefaultValue$1(props, "selectedItem"),
				inputValue: getDefaultValue$1(props, "inputValue")
			};
			break;
		default: throw new Error("Reducer called without proper action type.");
	}
	return _extends({}, state, changes);
}
function getItemIndexByCharacterKey(_a) {
	var keysSoFar = _a.keysSoFar, highlightedIndex = _a.highlightedIndex, items = _a.items, itemToString = _a.itemToString, isItemDisabled = _a.isItemDisabled;
	var lowerCasedKeysSoFar = keysSoFar.toLowerCase();
	for (var index = 0; index < items.length; index++) {
		var offsetIndex = (index + highlightedIndex + (keysSoFar.length < 2 ? 1 : 0)) % items.length;
		var item = items[offsetIndex];
		if (item !== void 0 && itemToString(item).toLowerCase().startsWith(lowerCasedKeysSoFar) && !isItemDisabled(item, offsetIndex)) return offsetIndex;
	}
	return highlightedIndex;
}
function downshiftSelectReducer(state, action) {
	var _props$items;
	var type = action.type, props = action.props, altKey = action.altKey;
	var changes;
	switch (type) {
		case ItemClick$1:
			changes = {
				isOpen: getDefaultValue$1(props, "isOpen"),
				highlightedIndex: getDefaultHighlightedIndex(props),
				selectedItem: props.items[action.index]
			};
			break;
		case ToggleButtonKeyDownCharacter:
			var lowercasedKey = action.key;
			var inputValue = "" + state.inputValue + lowercasedKey;
			changes = {
				inputValue,
				highlightedIndex: getItemIndexByCharacterKey({
					keysSoFar: inputValue,
					highlightedIndex: !state.isOpen && state.selectedItem ? props.items.findIndex(function(item) {
						return props.itemToKey(item) === props.itemToKey(state.selectedItem);
					}) : state.highlightedIndex,
					items: props.items,
					itemToString: props.itemToString,
					isItemDisabled: props.isItemDisabled
				}),
				isOpen: true
			};
			break;
		case ToggleButtonKeyDownArrowDown:
			changes = {
				highlightedIndex: state.isOpen ? getHighlightedIndex(state.highlightedIndex, 1, props.items, props.isItemDisabled) : altKey && state.selectedItem == null ? -1 : getHighlightedIndexOnOpen(props, state, 1),
				isOpen: true
			};
			break;
		case ToggleButtonKeyDownArrowUp:
			if (state.isOpen && altKey) changes = getChangesOnSelection(props, state.highlightedIndex, false);
			else changes = {
				highlightedIndex: state.isOpen ? getHighlightedIndex(state.highlightedIndex, -1, props.items, props.isItemDisabled) : getHighlightedIndexOnOpen(props, state, -1),
				isOpen: true
			};
			break;
		case ToggleButtonKeyDownEnter:
		case ToggleButtonKeyDownSpaceButton:
			changes = getChangesOnSelection(props, state.highlightedIndex, false);
			break;
		case ToggleButtonKeyDownHome:
			changes = {
				highlightedIndex: getNonDisabledIndex(0, false, props.items, props.isItemDisabled),
				isOpen: true
			};
			break;
		case ToggleButtonKeyDownEnd:
			changes = {
				highlightedIndex: getNonDisabledIndex(props.items.length - 1, true, props.items, props.isItemDisabled),
				isOpen: true
			};
			break;
		case ToggleButtonKeyDownPageUp:
			changes = { highlightedIndex: getHighlightedIndex(state.highlightedIndex, -10, props.items, props.isItemDisabled) };
			break;
		case ToggleButtonKeyDownPageDown:
			changes = { highlightedIndex: getHighlightedIndex(state.highlightedIndex, 10, props.items, props.isItemDisabled) };
			break;
		case ToggleButtonKeyDownEscape:
			changes = {
				isOpen: false,
				highlightedIndex: -1
			};
			break;
		case ToggleButtonBlur:
			changes = _extends({
				isOpen: false,
				highlightedIndex: -1
			}, state.highlightedIndex >= 0 && ((_props$items = props.items) == null ? void 0 : _props$items.length) && { selectedItem: props.items[state.highlightedIndex] });
			break;
		case FunctionSelectItem$1:
			changes = { selectedItem: action.selectedItem };
			break;
		default: return downshiftCommonReducer(state, action, stateChangeTypes$2);
	}
	return _extends({}, state, changes);
}
function useSelect(userProps) {
	if (userProps === void 0) userProps = {};
	validatePropTypes$2(userProps, useSelect);
	var props = _extends({}, defaultProps$2, userProps);
	var scrollIntoView = props.scrollIntoView, environment = props.environment, getA11yStatusMessage = props.getA11yStatusMessage;
	var _useControlledReducer = useControlledReducer$1(downshiftSelectReducer, props, getInitialState$2, isDropdownsStateEqual), state = _useControlledReducer[0], dispatch = _useControlledReducer[1];
	var isOpen = state.isOpen, highlightedIndex = state.highlightedIndex, selectedItem = state.selectedItem, inputValue = state.inputValue;
	var toggleButtonRef = useRef(null);
	var menuRef = useRef(null);
	var itemRefs = useRef({});
	var clearTimeoutRef = useRef(null);
	var elementIds = useElementIds(props);
	var latest = useLatestRef({
		state,
		props
	});
	var getItemNodeFromIndex = useCallback(function(index) {
		return itemRefs.current[elementIds.getItemId(index)];
	}, [elementIds]);
	useA11yMessageStatus(getA11yStatusMessage, state, [
		isOpen,
		highlightedIndex,
		selectedItem,
		inputValue
	], environment);
	var shouldScrollRef = useScrollIntoView({
		menuElement: menuRef.current,
		highlightedIndex,
		isOpen,
		itemRefs,
		scrollIntoView,
		getItemNodeFromIndex
	});
	useEffect(function() {
		clearTimeoutRef.current = debounce(function(outerDispatch) {
			outerDispatch({
				type: FunctionSetInputValue$1,
				inputValue: ""
			});
		}, 500);
		return function() {
			clearTimeoutRef.current.cancel();
		};
	}, []);
	useEffect(function() {
		if (!inputValue) return;
		clearTimeoutRef.current(dispatch);
	}, [dispatch, inputValue]);
	useControlPropsValidator({
		props,
		state
	});
	useEffect(function() {
		if (getInitialValue$1(props, "isOpen") && toggleButtonRef.current) toggleButtonRef.current.focus();
	}, []);
	var mouseAndTouchTrackers = useMouseAndTouchTracker(environment, useCallback(function handleBlur() {
		if (latest.current.state.isOpen) dispatch({ type: ToggleButtonBlur });
	}, [dispatch, latest]), useMemo(function() {
		return [menuRef, toggleButtonRef];
	}, [menuRef.current, toggleButtonRef.current]));
	var setGetterPropCallInfo = useGetterPropsCalledChecker("getMenuProps", "getToggleButtonProps");
	useEffect(function() {
		if (!isOpen) itemRefs.current = {};
	}, [isOpen]);
	var toggleButtonKeyDownHandlers = useMemo(function() {
		return {
			ArrowDown: function ArrowDown(event) {
				event.preventDefault();
				dispatch({
					type: ToggleButtonKeyDownArrowDown,
					altKey: event.altKey
				});
			},
			ArrowUp: function ArrowUp(event) {
				event.preventDefault();
				dispatch({
					type: ToggleButtonKeyDownArrowUp,
					altKey: event.altKey
				});
			},
			Home: function Home(event) {
				event.preventDefault();
				dispatch({ type: ToggleButtonKeyDownHome });
			},
			End: function End(event) {
				event.preventDefault();
				dispatch({ type: ToggleButtonKeyDownEnd });
			},
			Escape: function Escape() {
				if (latest.current.state.isOpen) dispatch({ type: ToggleButtonKeyDownEscape });
			},
			Enter: function Enter(event) {
				event.preventDefault();
				dispatch({ type: latest.current.state.isOpen ? ToggleButtonKeyDownEnter : ToggleButtonClick$1 });
			},
			PageUp: function PageUp(event) {
				if (latest.current.state.isOpen) {
					event.preventDefault();
					dispatch({ type: ToggleButtonKeyDownPageUp });
				}
			},
			PageDown: function PageDown(event) {
				if (latest.current.state.isOpen) {
					event.preventDefault();
					dispatch({ type: ToggleButtonKeyDownPageDown });
				}
			},
			" ": function _(event) {
				event.preventDefault();
				var currentState = latest.current.state;
				if (!currentState.isOpen) {
					dispatch({ type: ToggleButtonClick$1 });
					return;
				}
				if (currentState.inputValue) dispatch({
					type: ToggleButtonKeyDownCharacter,
					key: " "
				});
				else dispatch({ type: ToggleButtonKeyDownSpaceButton });
			}
		};
	}, [dispatch, latest]);
	var toggleMenu = useCallback(function() {
		dispatch({ type: FunctionToggleMenu$1 });
	}, [dispatch]);
	var closeMenu = useCallback(function() {
		dispatch({ type: FunctionCloseMenu$1 });
	}, [dispatch]);
	var openMenu = useCallback(function() {
		dispatch({ type: FunctionOpenMenu$1 });
	}, [dispatch]);
	var setHighlightedIndex = useCallback(function(newHighlightedIndex) {
		dispatch({
			type: FunctionSetHighlightedIndex$1,
			highlightedIndex: newHighlightedIndex
		});
	}, [dispatch]);
	var selectItem = useCallback(function(newSelectedItem) {
		dispatch({
			type: FunctionSelectItem$1,
			selectedItem: newSelectedItem
		});
	}, [dispatch]);
	var reset = useCallback(function() {
		dispatch({ type: FunctionReset$2 });
	}, [dispatch]);
	var setInputValue = useCallback(function(newInputValue) {
		dispatch({
			type: FunctionSetInputValue$1,
			inputValue: newInputValue
		});
	}, [dispatch]);
	var getLabelProps = useCallback(function(_temp) {
		var _ref = _temp === void 0 ? {} : _temp, onClick = _ref.onClick, labelProps = _objectWithoutPropertiesLoose(_ref, _excluded$2);
		return _extends({
			id: elementIds.labelId,
			htmlFor: elementIds.toggleButtonId,
			onClick: callAllEventHandlers(onClick, function labelHandleClick() {
				var _toggleButtonRef$curr;
				(_toggleButtonRef$curr = toggleButtonRef.current) == null || _toggleButtonRef$curr.focus();
			})
		}, labelProps);
	}, [elementIds]);
	var getMenuProps = useCallback(function(_temp2, _temp3) {
		var _extends2;
		var _ref2 = _temp2 === void 0 ? {} : _temp2, onMouseLeave = _ref2.onMouseLeave, _ref2$refKey = _ref2.refKey, refKey = _ref2$refKey === void 0 ? "ref" : _ref2$refKey, ref = _ref2.ref, rest = _objectWithoutPropertiesLoose(_ref2, _excluded2$2);
		var _ref3$suppressRefErro = (_temp3 === void 0 ? {} : _temp3).suppressRefError, suppressRefError = _ref3$suppressRefErro === void 0 ? false : _ref3$suppressRefErro;
		var menuHandleMouseLeave = function menuHandleMouseLeave() {
			dispatch({ type: MenuMouseLeave$1 });
		};
		setGetterPropCallInfo("getMenuProps", suppressRefError, refKey, menuRef);
		return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function(menuNode) {
			menuRef.current = menuNode;
		}), _extends2.id = elementIds.menuId, _extends2.role = "listbox", _extends2["aria-labelledby"] = rest && rest["aria-label"] ? void 0 : "" + elementIds.labelId, _extends2.onMouseLeave = callAllEventHandlers(onMouseLeave, menuHandleMouseLeave), _extends2), rest);
	}, [
		dispatch,
		setGetterPropCallInfo,
		elementIds
	]);
	return {
		getToggleButtonProps: useCallback(function(_temp4, _temp5) {
			var _extends3;
			var _ref4 = _temp4 === void 0 ? {} : _temp4, onBlur = _ref4.onBlur, onClick = _ref4.onClick;
			_ref4.onPress;
			var onKeyDown = _ref4.onKeyDown, _ref4$refKey = _ref4.refKey, refKey = _ref4$refKey === void 0 ? "ref" : _ref4$refKey, ref = _ref4.ref, rest = _objectWithoutPropertiesLoose(_ref4, _excluded3$1);
			var _ref5$suppressRefErro = (_temp5 === void 0 ? {} : _temp5).suppressRefError, suppressRefError = _ref5$suppressRefErro === void 0 ? false : _ref5$suppressRefErro;
			var latestState = latest.current.state;
			var toggleButtonHandleClick = function toggleButtonHandleClick() {
				dispatch({ type: ToggleButtonClick$1 });
			};
			var toggleButtonHandleBlur = function toggleButtonHandleBlur() {
				if (latestState.isOpen && !mouseAndTouchTrackers.isMouseDown) dispatch({ type: ToggleButtonBlur });
			};
			var toggleButtonHandleKeyDown = function toggleButtonHandleKeyDown(event) {
				var key = normalizeArrowKey(event);
				if (key && toggleButtonKeyDownHandlers[key]) toggleButtonKeyDownHandlers[key](event);
				else if (isAcceptedCharacterKey(key)) dispatch({
					type: ToggleButtonKeyDownCharacter,
					key
				});
			};
			var toggleProps = _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function(toggleButtonNode) {
				toggleButtonRef.current = toggleButtonNode;
			}), _extends3["aria-activedescendant"] = latestState.isOpen && latestState.highlightedIndex > -1 ? elementIds.getItemId(latestState.highlightedIndex) : "", _extends3["aria-controls"] = elementIds.menuId, _extends3["aria-expanded"] = latest.current.state.isOpen, _extends3["aria-haspopup"] = "listbox", _extends3["aria-labelledby"] = rest && rest["aria-label"] ? void 0 : "" + elementIds.labelId, _extends3.id = elementIds.toggleButtonId, _extends3.role = "combobox", _extends3.tabIndex = 0, _extends3.onBlur = callAllEventHandlers(onBlur, toggleButtonHandleBlur), _extends3), rest);
			if (!rest.disabled) {
				toggleProps.onClick = callAllEventHandlers(onClick, toggleButtonHandleClick);
				toggleProps.onKeyDown = callAllEventHandlers(onKeyDown, toggleButtonHandleKeyDown);
			}
			setGetterPropCallInfo("getToggleButtonProps", suppressRefError, refKey, toggleButtonRef);
			return toggleProps;
		}, [
			dispatch,
			elementIds,
			latest,
			mouseAndTouchTrackers,
			setGetterPropCallInfo,
			toggleButtonKeyDownHandlers
		]),
		getLabelProps,
		getMenuProps,
		getItemProps: useCallback(function(_temp6) {
			var _extends4;
			var _ref6 = _temp6 === void 0 ? {} : _temp6, itemProp = _ref6.item, indexProp = _ref6.index, onMouseMove = _ref6.onMouseMove, onClick = _ref6.onClick, onMouseDown = _ref6.onMouseDown;
			_ref6.onPress;
			var _ref6$refKey = _ref6.refKey, refKey = _ref6$refKey === void 0 ? "ref" : _ref6$refKey, disabledProp = _ref6.disabled, ref = _ref6.ref, rest = _objectWithoutPropertiesLoose(_ref6, _excluded4$1);
			if (disabledProp !== void 0) console.warn("Passing \"disabled\" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useSelect.");
			var _latest$current = latest.current, latestState = _latest$current.state, latestProps = _latest$current.props;
			var _getItemAndIndex = getItemAndIndex(itemProp, indexProp, latestProps.items, "Pass either item or index to getItemProps!"), item = _getItemAndIndex[0], index = _getItemAndIndex[1];
			var disabled = latestProps.isItemDisabled(item, index);
			var itemHandleMouseMove = function itemHandleMouseMove() {
				if (mouseAndTouchTrackers.isTouchEnd || index === latestState.highlightedIndex) return;
				shouldScrollRef.current = false;
				dispatch({
					type: ItemMouseMove$1,
					index,
					disabled
				});
			};
			var itemHandleClick = function itemHandleClick() {
				dispatch({
					type: ItemClick$1,
					index
				});
			};
			var itemHandleMouseDown = function itemHandleMouseDown(e) {
				return e.preventDefault();
			};
			var itemProps = _extends((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function(itemNode) {
				if (itemNode) itemRefs.current[elementIds.getItemId(index)] = itemNode;
			}), _extends4["aria-disabled"] = disabled, _extends4["aria-selected"] = item === latestState.selectedItem, _extends4.id = elementIds.getItemId(index), _extends4.role = "option", _extends4), rest);
			if (!disabled) itemProps.onClick = callAllEventHandlers(onClick, itemHandleClick);
			itemProps.onMouseMove = callAllEventHandlers(onMouseMove, itemHandleMouseMove);
			itemProps.onMouseDown = callAllEventHandlers(onMouseDown, itemHandleMouseDown);
			return itemProps;
		}, [
			latest,
			elementIds,
			mouseAndTouchTrackers,
			shouldScrollRef,
			dispatch
		]),
		toggleMenu,
		openMenu,
		closeMenu,
		setHighlightedIndex,
		selectItem,
		reset,
		setInputValue,
		highlightedIndex,
		isOpen,
		selectedItem,
		inputValue
	};
}
function getInitialState$1(props) {
	var initialState = getInitialState$2(props);
	var selectedItem = initialState.selectedItem;
	var inputValue = initialState.inputValue;
	if (inputValue === "" && selectedItem && props.defaultInputValue === void 0 && props.initialInputValue === void 0 && props.inputValue === void 0) inputValue = props.itemToString(selectedItem);
	return _extends({}, initialState, { inputValue });
}
/**
* The useCombobox version of useControlledReducer, which also
* checks if the controlled prop selectedItem changed between
* renders. If so, it will also update inputValue with its
* string equivalent. It uses the common useEnhancedReducer to
* compute the rest of the state.
*
* @param {Function} reducer Reducer function from downshift.
* @param {Object} props The hook props, also passed to createInitialState.
* @param {Function} createInitialState Function that returns the initial state.
* @param {Function} isStateEqual Function that checks if a previous state is equal to the next.
* @returns {Array} An array with the state and an action dispatcher.
*/
function useControlledReducer(reducer, props, createInitialState, isStateEqual) {
	var previousSelectedItemRef = useRef();
	var _useEnhancedReducer = useEnhancedReducer(reducer, props, createInitialState, isStateEqual), state = _useEnhancedReducer[0], dispatch = _useEnhancedReducer[1];
	var isInitialMount = useIsInitialMount();
	useEffect(function() {
		if (!isControlledProp(props, "selectedItem")) return;
		if (!isInitialMount) {
			if (props.itemToKey(props.selectedItem) !== props.itemToKey(previousSelectedItemRef.current)) dispatch({
				type: ControlledPropUpdatedSelectedItem,
				inputValue: props.itemToString(props.selectedItem)
			});
		}
		previousSelectedItemRef.current = state.selectedItem === previousSelectedItemRef.current ? props.selectedItem : state.selectedItem;
	}, [state.selectedItem, props.selectedItem]);
	return [getState(state, props), dispatch];
}
function downshiftUseComboboxReducer(state, action) {
	var _props$items;
	var type = action.type, props = action.props, altKey = action.altKey;
	var changes;
	switch (type) {
		case ItemClick:
			changes = {
				isOpen: getDefaultValue$1(props, "isOpen"),
				highlightedIndex: getDefaultHighlightedIndex(props),
				selectedItem: props.items[action.index],
				inputValue: props.itemToString(props.items[action.index])
			};
			break;
		case InputKeyDownArrowDown:
			if (state.isOpen) changes = { highlightedIndex: getHighlightedIndex(state.highlightedIndex, 1, props.items, props.isItemDisabled, true) };
			else changes = {
				highlightedIndex: altKey && state.selectedItem == null ? -1 : getHighlightedIndexOnOpen(props, state, 1),
				isOpen: props.items.length >= 0
			};
			break;
		case InputKeyDownArrowUp:
			if (state.isOpen) if (altKey) changes = getChangesOnSelection(props, state.highlightedIndex);
			else changes = { highlightedIndex: getHighlightedIndex(state.highlightedIndex, -1, props.items, props.isItemDisabled, true) };
			else changes = {
				highlightedIndex: getHighlightedIndexOnOpen(props, state, -1),
				isOpen: props.items.length >= 0
			};
			break;
		case InputKeyDownEnter:
			changes = getChangesOnSelection(props, state.highlightedIndex);
			break;
		case InputKeyDownEscape:
			changes = _extends({
				isOpen: false,
				highlightedIndex: -1
			}, !state.isOpen && {
				selectedItem: null,
				inputValue: ""
			});
			break;
		case InputKeyDownPageUp:
			changes = { highlightedIndex: getHighlightedIndex(state.highlightedIndex, -10, props.items, props.isItemDisabled, true) };
			break;
		case InputKeyDownPageDown:
			changes = { highlightedIndex: getHighlightedIndex(state.highlightedIndex, 10, props.items, props.isItemDisabled, true) };
			break;
		case InputKeyDownHome:
			changes = { highlightedIndex: getNonDisabledIndex(0, false, props.items, props.isItemDisabled) };
			break;
		case InputKeyDownEnd:
			changes = { highlightedIndex: getNonDisabledIndex(props.items.length - 1, true, props.items, props.isItemDisabled) };
			break;
		case InputBlur:
			changes = _extends({
				isOpen: false,
				highlightedIndex: -1
			}, state.highlightedIndex >= 0 && ((_props$items = props.items) == null ? void 0 : _props$items.length) && action.selectItem && {
				selectedItem: props.items[state.highlightedIndex],
				inputValue: props.itemToString(props.items[state.highlightedIndex])
			});
			break;
		case InputChange:
			changes = {
				isOpen: true,
				highlightedIndex: getDefaultHighlightedIndex(props),
				inputValue: action.inputValue
			};
			break;
		case InputClick:
			changes = {
				isOpen: !state.isOpen,
				highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
			};
			break;
		case FunctionSelectItem:
			changes = {
				selectedItem: action.selectedItem,
				inputValue: props.itemToString(action.selectedItem)
			};
			break;
		case ControlledPropUpdatedSelectedItem:
			changes = { inputValue: action.inputValue };
			break;
		default: return downshiftCommonReducer(state, action, stateChangeTypes$1);
	}
	return _extends({}, state, changes);
}
function useCombobox(userProps) {
	if (userProps === void 0) userProps = {};
	validatePropTypes$1(userProps, useCombobox);
	var props = _extends({}, defaultProps$1, userProps);
	var items = props.items, scrollIntoView = props.scrollIntoView, environment = props.environment, getA11yStatusMessage = props.getA11yStatusMessage;
	var _useControlledReducer = useControlledReducer(downshiftUseComboboxReducer, props, getInitialState$1, isDropdownsStateEqual), state = _useControlledReducer[0], dispatch = _useControlledReducer[1];
	var isOpen = state.isOpen, highlightedIndex = state.highlightedIndex, selectedItem = state.selectedItem, inputValue = state.inputValue;
	var menuRef = useRef(null);
	var itemRefs = useRef({});
	var inputRef = useRef(null);
	var toggleButtonRef = useRef(null);
	var isInitialMount = useIsInitialMount();
	var elementIds = useElementIds(props);
	var previousResultCountRef = useRef();
	var latest = useLatestRef({
		state,
		props
	});
	var getItemNodeFromIndex = useCallback(function(index) {
		return itemRefs.current[elementIds.getItemId(index)];
	}, [elementIds]);
	useA11yMessageStatus(getA11yStatusMessage, state, [
		isOpen,
		highlightedIndex,
		selectedItem,
		inputValue
	], environment);
	var shouldScrollRef = useScrollIntoView({
		menuElement: menuRef.current,
		highlightedIndex,
		isOpen,
		itemRefs,
		scrollIntoView,
		getItemNodeFromIndex
	});
	useControlPropsValidator({
		props,
		state
	});
	useEffect(function() {
		if (getInitialValue$1(props, "isOpen") && inputRef.current) inputRef.current.focus();
	}, []);
	useEffect(function() {
		if (!isInitialMount) previousResultCountRef.current = items.length;
	});
	var mouseAndTouchTrackers = useMouseAndTouchTracker(environment, useCallback(function handleBlur() {
		if (latest.current.state.isOpen) dispatch({
			type: InputBlur,
			selectItem: false
		});
	}, [dispatch, latest]), useMemo(function() {
		return [
			menuRef,
			toggleButtonRef,
			inputRef
		];
	}, [
		menuRef.current,
		toggleButtonRef.current,
		inputRef.current
	]));
	var setGetterPropCallInfo = useGetterPropsCalledChecker("getInputProps", "getMenuProps");
	useEffect(function() {
		if (!isOpen) itemRefs.current = {};
	}, [isOpen]);
	useEffect(function() {
		var _inputRef$current;
		if (!isOpen || !(environment != null && environment.document) || !(inputRef != null && (_inputRef$current = inputRef.current) != null && _inputRef$current.focus)) return;
		if (environment.document.activeElement !== inputRef.current) inputRef.current.focus();
	}, [isOpen, environment]);
	var inputKeyDownHandlers = useMemo(function() {
		return {
			ArrowDown: function ArrowDown(event) {
				event.preventDefault();
				dispatch({
					type: InputKeyDownArrowDown,
					altKey: event.altKey
				});
			},
			ArrowUp: function ArrowUp(event) {
				event.preventDefault();
				dispatch({
					type: InputKeyDownArrowUp,
					altKey: event.altKey
				});
			},
			Home: function Home(event) {
				if (!latest.current.state.isOpen) return;
				event.preventDefault();
				dispatch({ type: InputKeyDownHome });
			},
			End: function End(event) {
				if (!latest.current.state.isOpen) return;
				event.preventDefault();
				dispatch({ type: InputKeyDownEnd });
			},
			Escape: function Escape(event) {
				var latestState = latest.current.state;
				if (latestState.isOpen || latestState.inputValue || latestState.selectedItem || latestState.highlightedIndex > -1) {
					event.preventDefault();
					dispatch({ type: InputKeyDownEscape });
				}
			},
			Enter: function Enter(event) {
				if (!latest.current.state.isOpen || event.which === 229) return;
				event.preventDefault();
				dispatch({ type: InputKeyDownEnter });
			},
			PageUp: function PageUp(event) {
				if (latest.current.state.isOpen) {
					event.preventDefault();
					dispatch({ type: InputKeyDownPageUp });
				}
			},
			PageDown: function PageDown(event) {
				if (latest.current.state.isOpen) {
					event.preventDefault();
					dispatch({ type: InputKeyDownPageDown });
				}
			}
		};
	}, [dispatch, latest]);
	var getLabelProps = useCallback(function(labelProps) {
		return _extends({
			id: elementIds.labelId,
			htmlFor: elementIds.inputId
		}, labelProps);
	}, [elementIds]);
	var getMenuProps = useCallback(function(_temp, _temp2) {
		var _extends2;
		var _ref = _temp === void 0 ? {} : _temp, onMouseLeave = _ref.onMouseLeave, _ref$refKey = _ref.refKey, refKey = _ref$refKey === void 0 ? "ref" : _ref$refKey, ref = _ref.ref, rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);
		var _ref2$suppressRefErro = (_temp2 === void 0 ? {} : _temp2).suppressRefError;
		setGetterPropCallInfo("getMenuProps", _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro, refKey, menuRef);
		return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function(menuNode) {
			menuRef.current = menuNode;
		}), _extends2.id = elementIds.menuId, _extends2.role = "listbox", _extends2["aria-labelledby"] = rest && rest["aria-label"] ? void 0 : "" + elementIds.labelId, _extends2.onMouseLeave = callAllEventHandlers(onMouseLeave, function() {
			dispatch({ type: MenuMouseLeave });
		}), _extends2), rest);
	}, [
		dispatch,
		setGetterPropCallInfo,
		elementIds
	]);
	var getItemProps = useCallback(function(_temp3) {
		var _extends3, _ref4;
		var _ref3 = _temp3 === void 0 ? {} : _temp3, itemProp = _ref3.item, indexProp = _ref3.index, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, ref = _ref3.ref, onMouseMove = _ref3.onMouseMove, onMouseDown = _ref3.onMouseDown, onClick = _ref3.onClick;
		_ref3.onPress;
		var disabledProp = _ref3.disabled, rest = _objectWithoutPropertiesLoose(_ref3, _excluded2$1);
		if (disabledProp !== void 0) console.warn("Passing \"disabled\" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled prop from useCombobox.");
		var _latest$current = latest.current, latestProps = _latest$current.props, latestState = _latest$current.state;
		var _getItemAndIndex = getItemAndIndex(itemProp, indexProp, latestProps.items, "Pass either item or index to getItemProps!"), item = _getItemAndIndex[0], index = _getItemAndIndex[1];
		var disabled = latestProps.isItemDisabled(item, index);
		var onSelectKey = "onClick";
		var customClickHandler = onClick;
		return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function(itemNode) {
			if (itemNode) itemRefs.current[elementIds.getItemId(index)] = itemNode;
		}), _extends3["aria-disabled"] = disabled, _extends3["aria-selected"] = index === latestState.highlightedIndex, _extends3.id = elementIds.getItemId(index), _extends3.role = "option", _extends3), !disabled && (_ref4 = {}, _ref4[onSelectKey] = callAllEventHandlers(customClickHandler, function itemHandleClick() {
			dispatch({
				type: ItemClick,
				index
			});
		}), _ref4), {
			onMouseMove: callAllEventHandlers(onMouseMove, function itemHandleMouseMove() {
				if (mouseAndTouchTrackers.isTouchEnd || index === latestState.highlightedIndex) return;
				shouldScrollRef.current = false;
				dispatch({
					type: ItemMouseMove,
					index,
					disabled
				});
			}),
			onMouseDown: callAllEventHandlers(onMouseDown, function itemHandleMouseDown(e) {
				return e.preventDefault();
			})
		}, rest);
	}, [
		dispatch,
		elementIds,
		latest,
		mouseAndTouchTrackers,
		shouldScrollRef
	]);
	var getToggleButtonProps = useCallback(function(_temp4) {
		var _extends4;
		var _ref5 = _temp4 === void 0 ? {} : _temp4, onClick = _ref5.onClick;
		_ref5.onPress;
		var _ref5$refKey = _ref5.refKey, refKey = _ref5$refKey === void 0 ? "ref" : _ref5$refKey, ref = _ref5.ref, rest = _objectWithoutPropertiesLoose(_ref5, _excluded3);
		var latestState = latest.current.state;
		return _extends((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function(toggleButtonNode) {
			toggleButtonRef.current = toggleButtonNode;
		}), _extends4["aria-controls"] = elementIds.menuId, _extends4["aria-expanded"] = latestState.isOpen, _extends4.id = elementIds.toggleButtonId, _extends4.tabIndex = -1, _extends4), !rest.disabled && _extends({}, { onClick: callAllEventHandlers(onClick, function toggleButtonHandleClick() {
			dispatch({ type: ToggleButtonClick });
		}) }), rest);
	}, [
		dispatch,
		latest,
		elementIds
	]);
	var getInputProps = useCallback(function(_temp5, _temp6) {
		var _extends5;
		var _ref6 = _temp5 === void 0 ? {} : _temp5, onKeyDown = _ref6.onKeyDown, onChange = _ref6.onChange, onInput = _ref6.onInput, onBlur = _ref6.onBlur;
		_ref6.onChangeText;
		var onClick = _ref6.onClick, _ref6$refKey = _ref6.refKey, refKey = _ref6$refKey === void 0 ? "ref" : _ref6$refKey, ref = _ref6.ref, rest = _objectWithoutPropertiesLoose(_ref6, _excluded4);
		var _ref7$suppressRefErro = (_temp6 === void 0 ? {} : _temp6).suppressRefError;
		setGetterPropCallInfo("getInputProps", _ref7$suppressRefErro === void 0 ? false : _ref7$suppressRefErro, refKey, inputRef);
		var latestState = latest.current.state;
		var inputHandleKeyDown = function inputHandleKeyDown(event) {
			var key = normalizeArrowKey(event);
			if (key && inputKeyDownHandlers[key]) inputKeyDownHandlers[key](event);
		};
		var inputHandleChange = function inputHandleChange(event) {
			dispatch({
				type: InputChange,
				inputValue: event.target.value
			});
		};
		var inputHandleBlur = function inputHandleBlur(event) {
			/* istanbul ignore else */
			if (environment != null && environment.document && latestState.isOpen && !mouseAndTouchTrackers.isMouseDown) dispatch({
				type: InputBlur,
				selectItem: !(event.relatedTarget === null && environment.document.activeElement !== environment.document.body)
			});
		};
		var inputHandleClick = function inputHandleClick() {
			dispatch({ type: InputClick });
		};
		/* istanbul ignore next (preact) */
		var onChangeKey = "onChange";
		var eventHandlers = {};
		if (!rest.disabled) {
			var _eventHandlers;
			eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, inputHandleBlur), _eventHandlers.onClick = callAllEventHandlers(onClick, inputHandleClick), _eventHandlers);
		}
		return _extends((_extends5 = {}, _extends5[refKey] = handleRefs(ref, function(inputNode) {
			inputRef.current = inputNode;
		}), _extends5["aria-activedescendant"] = latestState.isOpen && latestState.highlightedIndex > -1 ? elementIds.getItemId(latestState.highlightedIndex) : "", _extends5["aria-autocomplete"] = "list", _extends5["aria-controls"] = elementIds.menuId, _extends5["aria-expanded"] = latestState.isOpen, _extends5["aria-labelledby"] = rest && rest["aria-label"] ? void 0 : elementIds.labelId, _extends5.autoComplete = "off", _extends5.id = elementIds.inputId, _extends5.role = "combobox", _extends5.value = latestState.inputValue, _extends5), eventHandlers, rest);
	}, [
		dispatch,
		elementIds,
		environment,
		inputKeyDownHandlers,
		latest,
		mouseAndTouchTrackers,
		setGetterPropCallInfo
	]);
	var toggleMenu = useCallback(function() {
		dispatch({ type: FunctionToggleMenu });
	}, [dispatch]);
	var closeMenu = useCallback(function() {
		dispatch({ type: FunctionCloseMenu });
	}, [dispatch]);
	var openMenu = useCallback(function() {
		dispatch({ type: FunctionOpenMenu });
	}, [dispatch]);
	var setHighlightedIndex = useCallback(function(newHighlightedIndex) {
		dispatch({
			type: FunctionSetHighlightedIndex,
			highlightedIndex: newHighlightedIndex
		});
	}, [dispatch]);
	var selectItem = useCallback(function(newSelectedItem) {
		dispatch({
			type: FunctionSelectItem,
			selectedItem: newSelectedItem
		});
	}, [dispatch]);
	return {
		getItemProps,
		getLabelProps,
		getMenuProps,
		getInputProps,
		getToggleButtonProps,
		toggleMenu,
		openMenu,
		closeMenu,
		setHighlightedIndex,
		setInputValue: useCallback(function(newInputValue) {
			dispatch({
				type: FunctionSetInputValue,
				inputValue: newInputValue
			});
		}, [dispatch]),
		selectItem,
		reset: useCallback(function() {
			dispatch({ type: FunctionReset$1 });
		}, [dispatch]),
		highlightedIndex,
		isOpen,
		selectedItem,
		inputValue
	};
}
/**
* Returns the initial value for a state key in the following order:
* 1. controlled prop, 2. initial prop, 3. default prop, 4. default
* value from Downshift.
*
* @param {Object} props Props passed to the hook.
* @param {string} propKey Props key to generate the value for.
* @returns {any} The initial value for that prop.
*/
function getInitialValue(props, propKey) {
	return getInitialValue$1(props, propKey, defaultStateValues);
}
/**
* Returns the default value for a state key in the following order:
* 1. controlled prop, 2. default prop, 3. default value from Downshift.
*
* @param {Object} props Props passed to the hook.
* @param {string} propKey Props key to generate the value for.
* @returns {any} The initial value for that prop.
*/
function getDefaultValue(props, propKey) {
	return getDefaultValue$1(props, propKey, defaultStateValues);
}
/**
* Gets the initial state based on the provided props. It uses initial, default
* and controlled props related to state in order to compute the initial value.
*
* @param {Object} props Props passed to the hook.
* @returns {Object} The initial state.
*/
function getInitialState(props) {
	return {
		activeIndex: getInitialValue(props, "activeIndex"),
		selectedItems: getInitialValue(props, "selectedItems")
	};
}
/**
* Returns true if dropdown keydown operation is permitted. Should not be
* allowed on keydown with modifier keys (ctrl, alt, shift, meta), on
* input element with text content that is either highlighted or selection
* cursor is not at the starting position.
*
* @param {KeyboardEvent} event The event from keydown.
* @returns {boolean} Whether the operation is allowed.
*/
function isKeyDownOperationPermitted(event) {
	if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) return false;
	var element = event.target;
	if (element instanceof HTMLInputElement && element.value !== "" && (element.selectionStart !== 0 || element.selectionEnd !== 0)) return false;
	return true;
}
/**
* Check if a state is equal for taglist, by comparing active index and selected items.
* Used by useSelect and useCombobox.
*
* @param {Object} prevState
* @param {Object} newState
* @returns {boolean} Wheather the states are deeply equal.
*/
function isStateEqual(prevState, newState) {
	return prevState.selectedItems === newState.selectedItems && prevState.activeIndex === newState.activeIndex;
}
function downshiftMultipleSelectionReducer(state, action) {
	var type = action.type, index = action.index, props = action.props, selectedItem = action.selectedItem;
	var activeIndex = state.activeIndex, selectedItems = state.selectedItems;
	var changes;
	switch (type) {
		case SelectedItemClick:
			changes = { activeIndex: index };
			break;
		case SelectedItemKeyDownNavigationPrevious:
			changes = { activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1 };
			break;
		case SelectedItemKeyDownNavigationNext:
			changes = { activeIndex: activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1 };
			break;
		case SelectedItemKeyDownBackspace:
		case SelectedItemKeyDownDelete:
			if (activeIndex < 0) break;
			var newActiveIndex = activeIndex;
			if (selectedItems.length === 1) newActiveIndex = -1;
			else if (activeIndex === selectedItems.length - 1) newActiveIndex = selectedItems.length - 2;
			changes = _extends({ selectedItems: [].concat(selectedItems.slice(0, activeIndex), selectedItems.slice(activeIndex + 1)) }, { activeIndex: newActiveIndex });
			break;
		case DropdownKeyDownNavigationPrevious:
			changes = { activeIndex: selectedItems.length - 1 };
			break;
		case DropdownKeyDownBackspace:
			changes = { selectedItems: selectedItems.slice(0, selectedItems.length - 1) };
			break;
		case FunctionAddSelectedItem:
			changes = { selectedItems: [].concat(selectedItems, [selectedItem]) };
			break;
		case DropdownClick:
			changes = { activeIndex: -1 };
			break;
		case FunctionRemoveSelectedItem:
			var _newActiveIndex = activeIndex;
			var selectedItemIndex = selectedItems.findIndex(function(item) {
				return props.itemToKey(item) === props.itemToKey(selectedItem);
			});
			if (selectedItemIndex < 0) break;
			if (selectedItems.length === 1) _newActiveIndex = -1;
			else if (selectedItemIndex === selectedItems.length - 1) _newActiveIndex = selectedItems.length - 2;
			changes = {
				selectedItems: [].concat(selectedItems.slice(0, selectedItemIndex), selectedItems.slice(selectedItemIndex + 1)),
				activeIndex: _newActiveIndex
			};
			break;
		case FunctionSetSelectedItems:
			changes = { selectedItems: action.selectedItems };
			break;
		case FunctionSetActiveIndex:
			changes = { activeIndex: action.activeIndex };
			break;
		case FunctionReset:
			changes = {
				activeIndex: getDefaultValue(props, "activeIndex"),
				selectedItems: getDefaultValue(props, "selectedItems")
			};
			break;
		default: throw new Error("Reducer called without proper action type.");
	}
	return _extends({}, state, changes);
}
function useMultipleSelection(userProps) {
	if (userProps === void 0) userProps = {};
	validatePropTypes(userProps, useMultipleSelection);
	var props = _extends({}, defaultProps, userProps);
	var getA11yStatusMessage = props.getA11yStatusMessage, environment = props.environment, keyNavigationNext = props.keyNavigationNext, keyNavigationPrevious = props.keyNavigationPrevious;
	var _useControlledReducer = useControlledReducer$1(downshiftMultipleSelectionReducer, props, getInitialState, isStateEqual), state = _useControlledReducer[0], dispatch = _useControlledReducer[1];
	var activeIndex = state.activeIndex, selectedItems = state.selectedItems;
	var isInitialMount = useIsInitialMount();
	var dropdownRef = useRef(null);
	var selectedItemRefs = useRef();
	selectedItemRefs.current = [];
	var latest = useLatestRef({
		state,
		props
	});
	useA11yMessageStatus(getA11yStatusMessage, state, [activeIndex, selectedItems], environment);
	useEffect(function() {
		if (isInitialMount) return;
		if (activeIndex === -1 && dropdownRef.current) dropdownRef.current.focus();
		else if (selectedItemRefs.current[activeIndex]) selectedItemRefs.current[activeIndex].focus();
	}, [activeIndex]);
	useControlPropsValidator({
		props,
		state
	});
	var setGetterPropCallInfo = useGetterPropsCalledChecker("getDropdownProps");
	var selectedItemKeyDownHandlers = useMemo(function() {
		var _ref;
		return _ref = {}, _ref[keyNavigationPrevious] = function() {
			dispatch({ type: SelectedItemKeyDownNavigationPrevious });
		}, _ref[keyNavigationNext] = function() {
			dispatch({ type: SelectedItemKeyDownNavigationNext });
		}, _ref.Delete = function Delete() {
			dispatch({ type: SelectedItemKeyDownDelete });
		}, _ref.Backspace = function Backspace() {
			dispatch({ type: SelectedItemKeyDownBackspace });
		}, _ref;
	}, [
		dispatch,
		keyNavigationNext,
		keyNavigationPrevious
	]);
	var dropdownKeyDownHandlers = useMemo(function() {
		var _ref2;
		return _ref2 = {}, _ref2[keyNavigationPrevious] = function(event) {
			if (isKeyDownOperationPermitted(event)) dispatch({ type: DropdownKeyDownNavigationPrevious });
		}, _ref2.Backspace = function Backspace(event) {
			if (isKeyDownOperationPermitted(event)) dispatch({ type: DropdownKeyDownBackspace });
		}, _ref2;
	}, [dispatch, keyNavigationPrevious]);
	return {
		getSelectedItemProps: useCallback(function(_temp) {
			var _extends2;
			var _ref3 = _temp === void 0 ? {} : _temp, _ref3$refKey = _ref3.refKey, refKey = _ref3$refKey === void 0 ? "ref" : _ref3$refKey, ref = _ref3.ref, onClick = _ref3.onClick, onKeyDown = _ref3.onKeyDown, selectedItemProp = _ref3.selectedItem, indexProp = _ref3.index, rest = _objectWithoutPropertiesLoose(_ref3, _excluded);
			var latestState = latest.current.state;
			var index = getItemAndIndex(selectedItemProp, indexProp, latestState.selectedItems, "Pass either item or index to getSelectedItemProps!")[1];
			var isFocusable = index > -1 && index === latestState.activeIndex;
			return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function(selectedItemNode) {
				if (selectedItemNode) selectedItemRefs.current.push(selectedItemNode);
			}), _extends2.tabIndex = isFocusable ? 0 : -1, _extends2.onClick = callAllEventHandlers(onClick, function selectedItemHandleClick() {
				dispatch({
					type: SelectedItemClick,
					index
				});
			}), _extends2.onKeyDown = callAllEventHandlers(onKeyDown, function selectedItemHandleKeyDown(event) {
				var key = normalizeArrowKey(event);
				if (key && selectedItemKeyDownHandlers[key]) selectedItemKeyDownHandlers[key](event);
			}), _extends2), rest);
		}, [
			dispatch,
			latest,
			selectedItemKeyDownHandlers
		]),
		getDropdownProps: useCallback(function(_temp2, _temp3) {
			var _extends3;
			var _ref4 = _temp2 === void 0 ? {} : _temp2, _ref4$refKey = _ref4.refKey, refKey = _ref4$refKey === void 0 ? "ref" : _ref4$refKey, ref = _ref4.ref, onKeyDown = _ref4.onKeyDown, onClick = _ref4.onClick, _ref4$preventKeyActio = _ref4.preventKeyAction, preventKeyAction = _ref4$preventKeyActio === void 0 ? false : _ref4$preventKeyActio, rest = _objectWithoutPropertiesLoose(_ref4, _excluded2);
			var _ref5$suppressRefErro = (_temp3 === void 0 ? {} : _temp3).suppressRefError;
			setGetterPropCallInfo("getDropdownProps", _ref5$suppressRefErro === void 0 ? false : _ref5$suppressRefErro, refKey, dropdownRef);
			return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function(dropdownNode) {
				if (dropdownNode) dropdownRef.current = dropdownNode;
			}), _extends3), !preventKeyAction && {
				onKeyDown: callAllEventHandlers(onKeyDown, function dropdownHandleKeyDown(event) {
					var key = normalizeArrowKey(event);
					if (key && dropdownKeyDownHandlers[key]) dropdownKeyDownHandlers[key](event);
				}),
				onClick: callAllEventHandlers(onClick, function dropdownHandleClick() {
					dispatch({ type: DropdownClick });
				})
			}, rest);
		}, [
			dispatch,
			dropdownKeyDownHandlers,
			setGetterPropCallInfo
		]),
		addSelectedItem: useCallback(function(selectedItem) {
			dispatch({
				type: FunctionAddSelectedItem,
				selectedItem
			});
		}, [dispatch]),
		removeSelectedItem: useCallback(function(selectedItem) {
			dispatch({
				type: FunctionRemoveSelectedItem,
				selectedItem
			});
		}, [dispatch]),
		setSelectedItems: useCallback(function(newSelectedItems) {
			dispatch({
				type: FunctionSetSelectedItems,
				selectedItems: newSelectedItems
			});
		}, [dispatch]),
		setActiveIndex: useCallback(function(newActiveIndex) {
			dispatch({
				type: FunctionSetActiveIndex,
				activeIndex: newActiveIndex
			});
		}, [dispatch]),
		reset: useCallback(function() {
			dispatch({ type: FunctionReset });
		}, [dispatch]),
		selectedItems,
		activeIndex
	};
}
var import_prop_types, idCounter, stateKeys, cleanupStatus, unknown, mouseUp, itemMouseEnter, keyDownArrowUp, keyDownArrowDown, keyDownEscape, keyDownEnter, keyDownHome, keyDownEnd, clickItem, blurInput, changeInput, keyDownSpaceButton, clickButton, blurButton, controlledPropUpdatedSelectedItem, touchEnd, stateChangeTypes$3, _excluded$3, _excluded2$3, _excluded3$2, _excluded4$2, _excluded5, Downshift, dropdownDefaultStateValues, updateA11yStatus, useIsomorphicLayoutEffect, useElementIds, defaultProps$3, useGetterPropsCalledChecker, useControlPropsValidator, commonPropTypes, commonDropdownPropTypes, defaultProps$2, validatePropTypes$2, ToggleButtonClick$1, ToggleButtonKeyDownArrowDown, ToggleButtonKeyDownArrowUp, ToggleButtonKeyDownCharacter, ToggleButtonKeyDownEscape, ToggleButtonKeyDownHome, ToggleButtonKeyDownEnd, ToggleButtonKeyDownEnter, ToggleButtonKeyDownSpaceButton, ToggleButtonKeyDownPageUp, ToggleButtonKeyDownPageDown, ToggleButtonBlur, MenuMouseLeave$1, ItemMouseMove$1, ItemClick$1, FunctionToggleMenu$1, FunctionOpenMenu$1, FunctionCloseMenu$1, FunctionSetHighlightedIndex$1, FunctionSelectItem$1, FunctionSetInputValue$1, FunctionReset$2, stateChangeTypes$2, _excluded$2, _excluded2$2, _excluded3$1, _excluded4$1, InputKeyDownArrowDown, InputKeyDownArrowUp, InputKeyDownEscape, InputKeyDownHome, InputKeyDownEnd, InputKeyDownPageUp, InputKeyDownPageDown, InputKeyDownEnter, InputChange, InputBlur, InputClick, MenuMouseLeave, ItemMouseMove, ItemClick, ToggleButtonClick, FunctionToggleMenu, FunctionOpenMenu, FunctionCloseMenu, FunctionSetHighlightedIndex, FunctionSelectItem, FunctionSetInputValue, FunctionReset$1, ControlledPropUpdatedSelectedItem, stateChangeTypes$1, validatePropTypes$1, defaultProps$1, _excluded$1, _excluded2$1, _excluded3, _excluded4, defaultStateValues, defaultProps, validatePropTypes, SelectedItemClick, SelectedItemKeyDownDelete, SelectedItemKeyDownBackspace, SelectedItemKeyDownNavigationNext, SelectedItemKeyDownNavigationPrevious, DropdownKeyDownNavigationPrevious, DropdownKeyDownBackspace, DropdownClick, FunctionAddSelectedItem, FunctionRemoveSelectedItem, FunctionSetSelectedItems, FunctionSetActiveIndex, FunctionReset, stateChangeTypes, _excluded, _excluded2;
var init_downshift_esm = __esmMin((() => {
	init_objectWithoutPropertiesLoose();
	init_extends();
	init_inheritsLoose();
	import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
	init__storybook_global_react();
	require_react_is();
	init_dist();
	init_tslib_es6();
	idCounter = 0;
	stateKeys = [
		"highlightedIndex",
		"inputValue",
		"isOpen",
		"selectedItem",
		"type"
	];
	cleanupStatus = debounce(function(documentProp) {
		getStatusDiv(documentProp).textContent = "";
	}, 500);
	unknown = 0;
	mouseUp = 1;
	itemMouseEnter = 2;
	keyDownArrowUp = 3;
	keyDownArrowDown = 4;
	keyDownEscape = 5;
	keyDownEnter = 6;
	keyDownHome = 7;
	keyDownEnd = 8;
	clickItem = 9;
	blurInput = 10;
	changeInput = 11;
	keyDownSpaceButton = 12;
	clickButton = 13;
	blurButton = 14;
	controlledPropUpdatedSelectedItem = 15;
	touchEnd = 16;
	stateChangeTypes$3 = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		blurButton,
		blurInput,
		changeInput,
		clickButton,
		clickItem,
		controlledPropUpdatedSelectedItem,
		itemMouseEnter,
		keyDownArrowDown,
		keyDownArrowUp,
		keyDownEnd,
		keyDownEnter,
		keyDownEscape,
		keyDownHome,
		keyDownSpaceButton,
		mouseUp,
		touchEnd,
		unknown
	});
	_excluded$3 = ["refKey", "ref"];
	_excluded2$3 = [
		"onClick",
		"onPress",
		"onKeyDown",
		"onKeyUp",
		"onBlur"
	];
	_excluded3$2 = [
		"onKeyDown",
		"onBlur",
		"onChange",
		"onInput",
		"onChangeText"
	];
	_excluded4$2 = ["refKey", "ref"];
	_excluded5 = [
		"onMouseMove",
		"onMouseDown",
		"onClick",
		"onPress",
		"index",
		"item"
	];
	Downshift = /*#__PURE__*/ function() {
		var Downshift = /*#__PURE__*/ function(_Component) {
			function Downshift(_props) {
				var _this = _Component.call(this, _props) || this;
				_this.id = _this.props.id || "downshift-" + generateId();
				_this.menuId = _this.props.menuId || _this.id + "-menu";
				_this.labelId = _this.props.labelId || _this.id + "-label";
				_this.inputId = _this.props.inputId || _this.id + "-input";
				_this.getItemId = _this.props.getItemId || function(index) {
					return _this.id + "-item-" + index;
				};
				_this.items = [];
				_this.itemCount = null;
				_this.previousResultCount = 0;
				_this.timeoutIds = [];
				/**
				* @param {Function} fn the function to call after the time
				* @param {Number} time the time to wait
				*/
				_this.internalSetTimeout = function(fn, time) {
					var id = setTimeout(function() {
						_this.timeoutIds = _this.timeoutIds.filter(function(i) {
							return i !== id;
						});
						fn();
					}, time);
					_this.timeoutIds.push(id);
				};
				_this.setItemCount = function(count) {
					_this.itemCount = count;
				};
				_this.unsetItemCount = function() {
					_this.itemCount = null;
				};
				_this.isItemDisabled = function(_item, index) {
					var currentElementNode = _this.getItemNodeFromIndex(index);
					return currentElementNode && currentElementNode.hasAttribute("disabled");
				};
				_this.setHighlightedIndex = function(highlightedIndex, otherStateToSet) {
					if (highlightedIndex === void 0) highlightedIndex = _this.props.defaultHighlightedIndex;
					if (otherStateToSet === void 0) otherStateToSet = {};
					otherStateToSet = pickState(otherStateToSet);
					_this.internalSetState(_extends({ highlightedIndex }, otherStateToSet));
				};
				_this.clearSelection = function(cb) {
					_this.internalSetState({
						selectedItem: null,
						inputValue: "",
						highlightedIndex: _this.props.defaultHighlightedIndex,
						isOpen: _this.props.defaultIsOpen
					}, cb);
				};
				_this.selectItem = function(item, otherStateToSet, cb) {
					otherStateToSet = pickState(otherStateToSet);
					_this.internalSetState(_extends({
						isOpen: _this.props.defaultIsOpen,
						highlightedIndex: _this.props.defaultHighlightedIndex,
						selectedItem: item,
						inputValue: _this.props.itemToString(item)
					}, otherStateToSet), cb);
				};
				_this.selectItemAtIndex = function(itemIndex, otherStateToSet, cb) {
					var item = _this.items[itemIndex];
					if (item == null) return;
					_this.selectItem(item, otherStateToSet, cb);
				};
				_this.selectHighlightedItem = function(otherStateToSet, cb) {
					return _this.selectItemAtIndex(_this.getState().highlightedIndex, otherStateToSet, cb);
				};
				_this.internalSetState = function(stateToSet, cb) {
					var isItemSelected, onChangeArg;
					var onStateChangeArg = {};
					var isStateToSetFunction = typeof stateToSet === "function";
					if (!isStateToSetFunction && stateToSet.hasOwnProperty("inputValue")) _this.props.onInputValueChange(stateToSet.inputValue, _extends({}, _this.getStateAndHelpers(), stateToSet));
					return _this.setState(function(state) {
						var _newStateToSet;
						state = _this.getState(state);
						var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet;
						newStateToSet = _this.props.stateReducer(state, newStateToSet);
						isItemSelected = newStateToSet.hasOwnProperty("selectedItem");
						var nextState = {};
						if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) onChangeArg = newStateToSet.selectedItem;
						(_newStateToSet = newStateToSet).type || (_newStateToSet.type = unknown);
						Object.keys(newStateToSet).forEach(function(key) {
							if (state[key] !== newStateToSet[key]) onStateChangeArg[key] = newStateToSet[key];
							if (key === "type") return;
							newStateToSet[key];
							if (!isControlledProp(_this.props, key)) nextState[key] = newStateToSet[key];
						});
						if (isStateToSetFunction && newStateToSet.hasOwnProperty("inputValue")) _this.props.onInputValueChange(newStateToSet.inputValue, _extends({}, _this.getStateAndHelpers(), newStateToSet));
						return nextState;
					}, function() {
						cbToCb(cb)();
						if (Object.keys(onStateChangeArg).length > 1) _this.props.onStateChange(onStateChangeArg, _this.getStateAndHelpers());
						if (isItemSelected) _this.props.onSelect(stateToSet.selectedItem, _this.getStateAndHelpers());
						if (onChangeArg !== void 0) _this.props.onChange(onChangeArg, _this.getStateAndHelpers());
						_this.props.onUserAction(onStateChangeArg, _this.getStateAndHelpers());
					});
				};
				_this.rootRef = function(node) {
					return _this._rootNode = node;
				};
				_this.getRootProps = function(_temp, _temp2) {
					var _extends2;
					var _ref = _temp === void 0 ? {} : _temp, _ref$refKey = _ref.refKey, refKey = _ref$refKey === void 0 ? "ref" : _ref$refKey, ref = _ref.ref, rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);
					var _ref2$suppressRefErro = (_temp2 === void 0 ? {} : _temp2).suppressRefError, suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;
					_this.getRootProps.called = true;
					_this.getRootProps.refKey = refKey;
					_this.getRootProps.suppressRefError = suppressRefError;
					var isOpen = _this.getState().isOpen;
					return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, _this.rootRef), _extends2.role = "combobox", _extends2["aria-expanded"] = isOpen, _extends2["aria-haspopup"] = "listbox", _extends2["aria-owns"] = isOpen ? _this.menuId : void 0, _extends2["aria-labelledby"] = _this.labelId, _extends2), rest);
				};
				_this.keyDownHandlers = {
					ArrowDown: function ArrowDown(event) {
						var _this2 = this;
						event.preventDefault();
						if (this.getState().isOpen) {
							var amount = event.shiftKey ? 5 : 1;
							this.moveHighlightedIndex(amount, { type: keyDownArrowDown });
						} else this.internalSetState({
							isOpen: true,
							type: keyDownArrowDown
						}, function() {
							var itemCount = _this2.getItemCount();
							if (itemCount > 0) {
								var highlightedIndex = _this2.getState().highlightedIndex;
								var nextHighlightedIndex = getHighlightedIndex(highlightedIndex, 1, { length: itemCount }, _this2.isItemDisabled, true);
								_this2.setHighlightedIndex(nextHighlightedIndex, { type: keyDownArrowDown });
							}
						});
					},
					ArrowUp: function ArrowUp(event) {
						var _this3 = this;
						event.preventDefault();
						if (this.getState().isOpen) {
							var amount = event.shiftKey ? -5 : -1;
							this.moveHighlightedIndex(amount, { type: keyDownArrowUp });
						} else this.internalSetState({
							isOpen: true,
							type: keyDownArrowUp
						}, function() {
							var itemCount = _this3.getItemCount();
							if (itemCount > 0) {
								var highlightedIndex = _this3.getState().highlightedIndex;
								var nextHighlightedIndex = getHighlightedIndex(highlightedIndex, -1, { length: itemCount }, _this3.isItemDisabled, true);
								_this3.setHighlightedIndex(nextHighlightedIndex, { type: keyDownArrowUp });
							}
						});
					},
					Enter: function Enter(event) {
						if (event.which === 229) return;
						var _this$getState2 = this.getState(), isOpen = _this$getState2.isOpen, highlightedIndex = _this$getState2.highlightedIndex;
						if (isOpen && highlightedIndex != null) {
							event.preventDefault();
							var item = this.items[highlightedIndex];
							var itemNode = this.getItemNodeFromIndex(highlightedIndex);
							if (item == null || itemNode && itemNode.hasAttribute("disabled")) return;
							this.selectHighlightedItem({ type: keyDownEnter });
						}
					},
					Escape: function Escape(event) {
						event.preventDefault();
						this.reset(_extends({ type: keyDownEscape }, !this.state.isOpen && {
							selectedItem: null,
							inputValue: ""
						}));
					}
				};
				_this.buttonKeyDownHandlers = _extends({}, _this.keyDownHandlers, { " ": function _(event) {
					event.preventDefault();
					this.toggleMenu({ type: keyDownSpaceButton });
				} });
				_this.inputKeyDownHandlers = _extends({}, _this.keyDownHandlers, {
					Home: function Home(event) {
						var isOpen = this.getState().isOpen;
						if (!isOpen) return;
						event.preventDefault();
						var itemCount = this.getItemCount();
						if (itemCount <= 0 || !isOpen) return;
						var newHighlightedIndex = getNonDisabledIndex(0, false, { length: itemCount }, this.isItemDisabled);
						this.setHighlightedIndex(newHighlightedIndex, { type: keyDownHome });
					},
					End: function End(event) {
						var isOpen = this.getState().isOpen;
						if (!isOpen) return;
						event.preventDefault();
						var itemCount = this.getItemCount();
						if (itemCount <= 0 || !isOpen) return;
						var newHighlightedIndex = getNonDisabledIndex(itemCount - 1, true, { length: itemCount }, this.isItemDisabled);
						this.setHighlightedIndex(newHighlightedIndex, { type: keyDownEnd });
					}
				});
				_this.getToggleButtonProps = function(_temp3) {
					var _ref3 = _temp3 === void 0 ? {} : _temp3, onClick = _ref3.onClick;
					_ref3.onPress;
					var onKeyDown = _ref3.onKeyDown, onKeyUp = _ref3.onKeyUp, onBlur = _ref3.onBlur, rest = _objectWithoutPropertiesLoose(_ref3, _excluded2$3);
					var isOpen = _this.getState().isOpen;
					var enabledEventHandlers = {
						onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
						onKeyDown: callAllEventHandlers(onKeyDown, _this.buttonHandleKeyDown),
						onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
						onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur)
					};
					var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
					return _extends({
						type: "button",
						role: "button",
						"aria-label": isOpen ? "close menu" : "open menu",
						"aria-haspopup": true,
						"data-toggle": true
					}, eventHandlers, rest);
				};
				_this.buttonHandleKeyUp = function(event) {
					event.preventDefault();
				};
				_this.buttonHandleKeyDown = function(event) {
					var key = normalizeArrowKey(event);
					if (_this.buttonKeyDownHandlers[key]) _this.buttonKeyDownHandlers[key].call(_this, event);
				};
				_this.buttonHandleClick = function(event) {
					event.preventDefault();
					/* istanbul ignore if (can't reasonably test this) */
					if (_this.props.environment) {
						var _this$props$environme = _this.props.environment.document, body = _this$props$environme.body, activeElement = _this$props$environme.activeElement;
						if (body && body === activeElement) event.target.focus();
					}
					_this.internalSetTimeout(function() {
						return _this.toggleMenu({ type: clickButton });
					});
				};
				_this.buttonHandleBlur = function(event) {
					var blurTarget = event.target;
					_this.internalSetTimeout(function() {
						if (_this.isMouseDown || !_this.props.environment) return;
						var activeElement = _this.props.environment.document.activeElement;
						if ((activeElement == null || activeElement.id !== _this.inputId) && activeElement !== blurTarget) _this.reset({ type: blurButton });
					});
				};
				_this.getLabelProps = function(props) {
					return _extends({
						htmlFor: _this.inputId,
						id: _this.labelId
					}, props);
				};
				_this.getInputProps = function(_temp4) {
					var _ref4 = _temp4 === void 0 ? {} : _temp4, onKeyDown = _ref4.onKeyDown, onBlur = _ref4.onBlur, onChange = _ref4.onChange, onInput = _ref4.onInput;
					_ref4.onChangeText;
					var rest = _objectWithoutPropertiesLoose(_ref4, _excluded3$2);
					var onChangeKey;
					var eventHandlers = {};
					onChangeKey = "onChange";
					var _this$getState6 = _this.getState(), inputValue = _this$getState6.inputValue, isOpen = _this$getState6.isOpen, highlightedIndex = _this$getState6.highlightedIndex;
					if (!rest.disabled) {
						var _eventHandlers;
						eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, _this.inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, _this.inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, _this.inputHandleBlur), _eventHandlers);
					}
					return _extends({
						"aria-autocomplete": "list",
						"aria-activedescendant": isOpen && typeof highlightedIndex === "number" && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : void 0,
						"aria-controls": isOpen ? _this.menuId : void 0,
						"aria-labelledby": rest && rest["aria-label"] ? void 0 : _this.labelId,
						autoComplete: "off",
						value: inputValue,
						id: _this.inputId
					}, eventHandlers, rest);
				};
				_this.inputHandleKeyDown = function(event) {
					var key = normalizeArrowKey(event);
					if (key && _this.inputKeyDownHandlers[key]) _this.inputKeyDownHandlers[key].call(_this, event);
				};
				_this.inputHandleChange = function(event) {
					_this.internalSetState({
						type: changeInput,
						isOpen: true,
						inputValue: event.target.value,
						highlightedIndex: _this.props.defaultHighlightedIndex
					});
				};
				_this.inputHandleBlur = function() {
					_this.internalSetTimeout(function() {
						var _activeElement$datase;
						if (_this.isMouseDown || !_this.props.environment) return;
						var activeElement = _this.props.environment.document.activeElement;
						if (!((activeElement == null || (_activeElement$datase = activeElement.dataset) == null ? void 0 : _activeElement$datase.toggle) && _this._rootNode && _this._rootNode.contains(activeElement))) _this.reset({ type: blurInput });
					});
				};
				_this.menuRef = function(node) {
					_this._menuNode = node;
				};
				_this.getMenuProps = function(_temp5, _temp6) {
					var _extends3;
					var _ref5 = _temp5 === void 0 ? {} : _temp5, _ref5$refKey = _ref5.refKey, refKey = _ref5$refKey === void 0 ? "ref" : _ref5$refKey, ref = _ref5.ref, props = _objectWithoutPropertiesLoose(_ref5, _excluded4$2);
					var _ref6$suppressRefErro = (_temp6 === void 0 ? {} : _temp6).suppressRefError, suppressRefError = _ref6$suppressRefErro === void 0 ? false : _ref6$suppressRefErro;
					_this.getMenuProps.called = true;
					_this.getMenuProps.refKey = refKey;
					_this.getMenuProps.suppressRefError = suppressRefError;
					return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, _this.menuRef), _extends3.role = "listbox", _extends3["aria-labelledby"] = props && props["aria-label"] ? void 0 : _this.labelId, _extends3.id = _this.menuId, _extends3), props);
				};
				_this.getItemProps = function(_temp7) {
					var _enabledEventHandlers;
					var _ref7 = _temp7 === void 0 ? {} : _temp7, onMouseMove = _ref7.onMouseMove, onMouseDown = _ref7.onMouseDown, onClick = _ref7.onClick;
					_ref7.onPress;
					var index = _ref7.index, _ref7$item = _ref7.item, item = _ref7$item === void 0 ? void 0 : _ref7$item, rest = _objectWithoutPropertiesLoose(_ref7, _excluded5);
					if (index === void 0) {
						_this.items.push(item);
						index = _this.items.indexOf(item);
					} else _this.items[index] = item;
					var onSelectKey = "onClick";
					var customClickHandler = onClick;
					var enabledEventHandlers = (_enabledEventHandlers = {
						onMouseMove: callAllEventHandlers(onMouseMove, function() {
							if (index === _this.getState().highlightedIndex) return;
							_this.setHighlightedIndex(index, { type: itemMouseEnter });
							_this.avoidScrolling = true;
							_this.internalSetTimeout(function() {
								return _this.avoidScrolling = false;
							}, 250);
						}),
						onMouseDown: callAllEventHandlers(onMouseDown, function(event) {
							event.preventDefault();
						})
					}, _enabledEventHandlers[onSelectKey] = callAllEventHandlers(customClickHandler, function() {
						_this.selectItemAtIndex(index, { type: clickItem });
					}), _enabledEventHandlers);
					var eventHandlers = rest.disabled ? { onMouseDown: enabledEventHandlers.onMouseDown } : enabledEventHandlers;
					return _extends({
						id: _this.getItemId(index),
						role: "option",
						"aria-selected": _this.getState().highlightedIndex === index
					}, eventHandlers, rest);
				};
				_this.clearItems = function() {
					_this.items = [];
				};
				_this.reset = function(otherStateToSet, cb) {
					if (otherStateToSet === void 0) otherStateToSet = {};
					otherStateToSet = pickState(otherStateToSet);
					_this.internalSetState(function(_ref8) {
						var selectedItem = _ref8.selectedItem;
						return _extends({
							isOpen: _this.props.defaultIsOpen,
							highlightedIndex: _this.props.defaultHighlightedIndex,
							inputValue: _this.props.itemToString(selectedItem)
						}, otherStateToSet);
					}, cb);
				};
				_this.toggleMenu = function(otherStateToSet, cb) {
					if (otherStateToSet === void 0) otherStateToSet = {};
					otherStateToSet = pickState(otherStateToSet);
					_this.internalSetState(function(_ref9) {
						var isOpen = _ref9.isOpen;
						return _extends({ isOpen: !isOpen }, isOpen && { highlightedIndex: _this.props.defaultHighlightedIndex }, otherStateToSet);
					}, function() {
						var _this$getState7 = _this.getState(), isOpen = _this$getState7.isOpen, highlightedIndex = _this$getState7.highlightedIndex;
						if (isOpen) {
							if (_this.getItemCount() > 0 && typeof highlightedIndex === "number") _this.setHighlightedIndex(highlightedIndex, otherStateToSet);
						}
						cbToCb(cb)();
					});
				};
				_this.openMenu = function(cb) {
					_this.internalSetState({ isOpen: true }, cb);
				};
				_this.closeMenu = function(cb) {
					_this.internalSetState({ isOpen: false }, cb);
				};
				_this.updateStatus = debounce(function() {
					var _this$props;
					if (!((_this$props = _this.props) != null && (_this$props = _this$props.environment) != null && _this$props.document)) return;
					var state = _this.getState();
					var item = _this.items[state.highlightedIndex];
					var resultCount = _this.getItemCount();
					var status = _this.props.getA11yStatusMessage(_extends({
						itemToString: _this.props.itemToString,
						previousResultCount: _this.previousResultCount,
						resultCount,
						highlightedItem: item
					}, state));
					_this.previousResultCount = resultCount;
					setStatus(status, _this.props.environment.document);
				}, 200);
				var _this$props2 = _this.props, defaultHighlightedIndex = _this$props2.defaultHighlightedIndex, _this$props2$initialH = _this$props2.initialHighlightedIndex, _highlightedIndex = _this$props2$initialH === void 0 ? defaultHighlightedIndex : _this$props2$initialH, defaultIsOpen = _this$props2.defaultIsOpen, _this$props2$initialI = _this$props2.initialIsOpen, _isOpen = _this$props2$initialI === void 0 ? defaultIsOpen : _this$props2$initialI, _this$props2$initialI2 = _this$props2.initialInputValue, _inputValue = _this$props2$initialI2 === void 0 ? "" : _this$props2$initialI2, _this$props2$initialS = _this$props2.initialSelectedItem, _selectedItem = _this$props2$initialS === void 0 ? null : _this$props2$initialS;
				var _state = _this.getState({
					highlightedIndex: _highlightedIndex,
					isOpen: _isOpen,
					inputValue: _inputValue,
					selectedItem: _selectedItem
				});
				if (_state.selectedItem != null && _this.props.initialInputValue === void 0) _state.inputValue = _this.props.itemToString(_state.selectedItem);
				_this.state = _state;
				return _this;
			}
			_inheritsLoose(Downshift, _Component);
			var _proto = Downshift.prototype;
			/**
			* Clear all running timeouts
			*/
			_proto.internalClearTimeouts = function internalClearTimeouts() {
				this.timeoutIds.forEach(function(id) {
					clearTimeout(id);
				});
				this.timeoutIds = [];
			};
			_proto.getState = function getState$1(stateToMerge) {
				if (stateToMerge === void 0) stateToMerge = this.state;
				return getState(stateToMerge, this.props);
			};
			_proto.getItemCount = function getItemCount() {
				var itemCount = this.items.length;
				if (this.itemCount != null) itemCount = this.itemCount;
				else if (this.props.itemCount !== void 0) itemCount = this.props.itemCount;
				return itemCount;
			};
			_proto.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
				return this.props.environment ? this.props.environment.document.getElementById(this.getItemId(index)) : null;
			};
			_proto.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
				var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
				this.props.scrollIntoView(node, this._menuNode);
			};
			_proto.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
				var itemCount = this.getItemCount();
				var highlightedIndex = this.getState().highlightedIndex;
				if (itemCount > 0) {
					var nextHighlightedIndex = getHighlightedIndex(highlightedIndex, amount, { length: itemCount }, this.isItemDisabled, true);
					this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
				}
			};
			_proto.getStateAndHelpers = function getStateAndHelpers() {
				var _this$getState9 = this.getState(), highlightedIndex = _this$getState9.highlightedIndex, inputValue = _this$getState9.inputValue, selectedItem = _this$getState9.selectedItem, isOpen = _this$getState9.isOpen;
				var itemToString = this.props.itemToString;
				var id = this.id;
				var getRootProps = this.getRootProps, getToggleButtonProps = this.getToggleButtonProps, getLabelProps = this.getLabelProps, getMenuProps = this.getMenuProps, getInputProps = this.getInputProps, getItemProps = this.getItemProps, openMenu = this.openMenu, closeMenu = this.closeMenu, toggleMenu = this.toggleMenu, selectItem = this.selectItem, selectItemAtIndex = this.selectItemAtIndex, selectHighlightedItem = this.selectHighlightedItem, setHighlightedIndex = this.setHighlightedIndex, clearSelection = this.clearSelection, clearItems = this.clearItems;
				return {
					getRootProps,
					getToggleButtonProps,
					getLabelProps,
					getMenuProps,
					getInputProps,
					getItemProps,
					reset: this.reset,
					openMenu,
					closeMenu,
					toggleMenu,
					selectItem,
					selectItemAtIndex,
					selectHighlightedItem,
					setHighlightedIndex,
					clearSelection,
					clearItems,
					setItemCount: this.setItemCount,
					unsetItemCount: this.unsetItemCount,
					setState: this.internalSetState,
					itemToString,
					id,
					highlightedIndex,
					inputValue,
					isOpen,
					selectedItem
				};
			};
			_proto.componentDidMount = function componentDidMount() {
				var _this4 = this;
				/* istanbul ignore if (react-native or SSR) */
				if (!this.props.environment) this.cleanup = function() {
					_this4.internalClearTimeouts();
				};
				else {
					var onMouseDown = function onMouseDown() {
						_this4.isMouseDown = true;
					};
					var onMouseUp = function onMouseUp(event) {
						_this4.isMouseDown = false;
						if (!targetWithinDownshift(event.target, [_this4._rootNode, _this4._menuNode], _this4.props.environment) && _this4.getState().isOpen) _this4.reset({ type: mouseUp }, function() {
							return _this4.props.onOuterClick(_this4.getStateAndHelpers());
						});
					};
					var onTouchStart = function onTouchStart() {
						_this4.isTouchMove = false;
					};
					var onTouchMove = function onTouchMove() {
						_this4.isTouchMove = true;
					};
					var onTouchEnd = function onTouchEnd(event) {
						var contextWithinDownshift = targetWithinDownshift(event.target, [_this4._rootNode, _this4._menuNode], _this4.props.environment, false);
						if (!_this4.isTouchMove && !contextWithinDownshift && _this4.getState().isOpen) _this4.reset({ type: touchEnd }, function() {
							return _this4.props.onOuterClick(_this4.getStateAndHelpers());
						});
					};
					var environment = this.props.environment;
					environment.addEventListener("mousedown", onMouseDown);
					environment.addEventListener("mouseup", onMouseUp);
					environment.addEventListener("touchstart", onTouchStart);
					environment.addEventListener("touchmove", onTouchMove);
					environment.addEventListener("touchend", onTouchEnd);
					this.cleanup = function() {
						_this4.internalClearTimeouts();
						_this4.updateStatus.cancel();
						environment.removeEventListener("mousedown", onMouseDown);
						environment.removeEventListener("mouseup", onMouseUp);
						environment.removeEventListener("touchstart", onTouchStart);
						environment.removeEventListener("touchmove", onTouchMove);
						environment.removeEventListener("touchend", onTouchEnd);
					};
				}
			};
			_proto.shouldScroll = function shouldScroll(prevState, prevProps) {
				var currentHighlightedIndex = (this.props.highlightedIndex === void 0 ? this.getState() : this.props).highlightedIndex;
				var prevHighlightedIndex = (prevProps.highlightedIndex === void 0 ? prevState : prevProps).highlightedIndex;
				return currentHighlightedIndex && this.getState().isOpen && !prevState.isOpen || currentHighlightedIndex !== prevHighlightedIndex;
			};
			_proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
				if (isControlledProp(this.props, "selectedItem") && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) this.internalSetState({
					type: controlledPropUpdatedSelectedItem,
					inputValue: this.props.itemToString(this.props.selectedItem)
				});
				if (!this.avoidScrolling && this.shouldScroll(prevState, prevProps)) this.scrollHighlightedItemIntoView();
				this.updateStatus();
			};
			_proto.componentWillUnmount = function componentWillUnmount() {
				this.cleanup();
			};
			_proto.render = function render() {
				var children = unwrapArray(this.props.children, noop);
				this.clearItems();
				this.getRootProps.called = false;
				this.getRootProps.refKey = void 0;
				this.getRootProps.suppressRefError = void 0;
				this.getMenuProps.called = false;
				this.getMenuProps.refKey = void 0;
				this.getMenuProps.suppressRefError = void 0;
				this.getLabelProps.called = false;
				this.getInputProps.called = false;
				var element = unwrapArray(children(this.getStateAndHelpers()));
				if (!element) return null;
				if (this.getRootProps.called || this.props.suppressRefError) return element;
				else if (isDOMElement(element)) return /*#__PURE__*/ cloneElement(element, this.getRootProps(getElementProps(element)));
			};
			return Downshift;
		}(Component);
		Downshift.defaultProps = {
			defaultHighlightedIndex: null,
			defaultIsOpen: false,
			getA11yStatusMessage,
			itemToString: function itemToString(i) {
				if (i == null) return "";
				return String(i);
			},
			onStateChange: noop,
			onInputValueChange: noop,
			onUserAction: noop,
			onChange: noop,
			onSelect: noop,
			onOuterClick: noop,
			selectedItemChanged: function selectedItemChanged(prevItem, item) {
				return prevItem !== item;
			},
			environment: typeof window === "undefined" || false ? void 0 : window,
			stateReducer: function stateReducer(state, stateToSet) {
				return stateToSet;
			},
			suppressRefError: false,
			scrollIntoView
		};
		Downshift.stateChangeTypes = stateChangeTypes$3;
		return Downshift;
	}();
	dropdownDefaultStateValues = {
		highlightedIndex: -1,
		isOpen: false,
		selectedItem: null,
		inputValue: ""
	};
	updateA11yStatus = debounce(function(status, document) {
		setStatus(status, document);
	}, 200);
	useIsomorphicLayoutEffect = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined" ? useLayoutEffect : useEffect;
	useElementIds = "useId" in _storybook_global_react_default ? function useElementIds(_ref) {
		var id = _ref.id, labelId = _ref.labelId, menuId = _ref.menuId, getItemId = _ref.getItemId, toggleButtonId = _ref.toggleButtonId, inputId = _ref.inputId;
		var reactId = "downshift-" + _storybook_global_react_default.useId();
		if (!id) id = reactId;
		return useRef({
			labelId: labelId || id + "-label",
			menuId: menuId || id + "-menu",
			getItemId: getItemId || function(index) {
				return id + "-item-" + index;
			},
			toggleButtonId: toggleButtonId || id + "-toggle-button",
			inputId: inputId || id + "-input"
		}).current;
	} : function useElementIds(_ref2) {
		var _ref2$id = _ref2.id, id = _ref2$id === void 0 ? "downshift-" + generateId() : _ref2$id, labelId = _ref2.labelId, menuId = _ref2.menuId, getItemId = _ref2.getItemId, toggleButtonId = _ref2.toggleButtonId, inputId = _ref2.inputId;
		return useRef({
			labelId: labelId || id + "-label",
			menuId: menuId || id + "-menu",
			getItemId: getItemId || function(index) {
				return id + "-item-" + index;
			},
			toggleButtonId: toggleButtonId || id + "-toggle-button",
			inputId: inputId || id + "-input"
		}).current;
	};
	defaultProps$3 = {
		itemToString: function itemToString(item) {
			return item ? String(item) : "";
		},
		itemToKey: function itemToKey(item) {
			return item;
		},
		stateReducer,
		scrollIntoView,
		environment: typeof window === "undefined" || false ? void 0 : window
	};
	useGetterPropsCalledChecker = function useGetterPropsCalledChecker() {
		return noop;
	};
	useControlPropsValidator = noop;
	commonPropTypes = {
		environment: import_prop_types.default.shape({
			addEventListener: import_prop_types.default.func.isRequired,
			removeEventListener: import_prop_types.default.func.isRequired,
			document: import_prop_types.default.shape({
				createElement: import_prop_types.default.func.isRequired,
				getElementById: import_prop_types.default.func.isRequired,
				activeElement: import_prop_types.default.any.isRequired,
				body: import_prop_types.default.any.isRequired
			}).isRequired,
			Node: import_prop_types.default.func.isRequired
		}),
		itemToString: import_prop_types.default.func,
		itemToKey: import_prop_types.default.func,
		stateReducer: import_prop_types.default.func
	};
	commonDropdownPropTypes = _extends({}, commonPropTypes, {
		getA11yStatusMessage: import_prop_types.default.func,
		highlightedIndex: import_prop_types.default.number,
		defaultHighlightedIndex: import_prop_types.default.number,
		initialHighlightedIndex: import_prop_types.default.number,
		isOpen: import_prop_types.default.bool,
		defaultIsOpen: import_prop_types.default.bool,
		initialIsOpen: import_prop_types.default.bool,
		selectedItem: import_prop_types.default.any,
		initialSelectedItem: import_prop_types.default.any,
		defaultSelectedItem: import_prop_types.default.any,
		id: import_prop_types.default.string,
		labelId: import_prop_types.default.string,
		menuId: import_prop_types.default.string,
		getItemId: import_prop_types.default.func,
		toggleButtonId: import_prop_types.default.string,
		onSelectedItemChange: import_prop_types.default.func,
		onHighlightedIndexChange: import_prop_types.default.func,
		onStateChange: import_prop_types.default.func,
		onIsOpenChange: import_prop_types.default.func,
		scrollIntoView: import_prop_types.default.func
	});
	__assign(__assign({}, commonDropdownPropTypes), {
		items: import_prop_types.default.array.isRequired,
		isItemDisabled: import_prop_types.default.func
	});
	defaultProps$2 = __assign(__assign({}, defaultProps$3), { isItemDisabled: function() {
		return false;
	} });
	validatePropTypes$2 = noop;
	ToggleButtonClick$1 = 0;
	ToggleButtonKeyDownArrowDown = 1;
	ToggleButtonKeyDownArrowUp = 2;
	ToggleButtonKeyDownCharacter = 3;
	ToggleButtonKeyDownEscape = 4;
	ToggleButtonKeyDownHome = 5;
	ToggleButtonKeyDownEnd = 6;
	ToggleButtonKeyDownEnter = 7;
	ToggleButtonKeyDownSpaceButton = 8;
	ToggleButtonKeyDownPageUp = 9;
	ToggleButtonKeyDownPageDown = 10;
	ToggleButtonBlur = 11;
	MenuMouseLeave$1 = 12;
	ItemMouseMove$1 = 13;
	ItemClick$1 = 14;
	FunctionToggleMenu$1 = 15;
	FunctionOpenMenu$1 = 16;
	FunctionCloseMenu$1 = 17;
	FunctionSetHighlightedIndex$1 = 18;
	FunctionSelectItem$1 = 19;
	FunctionSetInputValue$1 = 20;
	FunctionReset$2 = 21;
	stateChangeTypes$2 = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		FunctionCloseMenu: FunctionCloseMenu$1,
		FunctionOpenMenu: FunctionOpenMenu$1,
		FunctionReset: FunctionReset$2,
		FunctionSelectItem: FunctionSelectItem$1,
		FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
		FunctionSetInputValue: FunctionSetInputValue$1,
		FunctionToggleMenu: FunctionToggleMenu$1,
		ItemClick: ItemClick$1,
		ItemMouseMove: ItemMouseMove$1,
		MenuMouseLeave: MenuMouseLeave$1,
		ToggleButtonBlur,
		ToggleButtonClick: ToggleButtonClick$1,
		ToggleButtonKeyDownArrowDown,
		ToggleButtonKeyDownArrowUp,
		ToggleButtonKeyDownCharacter,
		ToggleButtonKeyDownEnd,
		ToggleButtonKeyDownEnter,
		ToggleButtonKeyDownEscape,
		ToggleButtonKeyDownHome,
		ToggleButtonKeyDownPageDown,
		ToggleButtonKeyDownPageUp,
		ToggleButtonKeyDownSpaceButton
	});
	_excluded$2 = ["onClick"];
	_excluded2$2 = [
		"onMouseLeave",
		"refKey",
		"ref"
	];
	_excluded3$1 = [
		"onBlur",
		"onClick",
		"onPress",
		"onKeyDown",
		"refKey",
		"ref"
	];
	_excluded4$1 = [
		"item",
		"index",
		"onMouseMove",
		"onClick",
		"onMouseDown",
		"onPress",
		"refKey",
		"disabled",
		"ref"
	];
	useSelect.stateChangeTypes = stateChangeTypes$2;
	InputKeyDownArrowDown = 0;
	InputKeyDownArrowUp = 1;
	InputKeyDownEscape = 2;
	InputKeyDownHome = 3;
	InputKeyDownEnd = 4;
	InputKeyDownPageUp = 5;
	InputKeyDownPageDown = 6;
	InputKeyDownEnter = 7;
	InputChange = 8;
	InputBlur = 9;
	InputClick = 10;
	MenuMouseLeave = 11;
	ItemMouseMove = 12;
	ItemClick = 13;
	ToggleButtonClick = 14;
	FunctionToggleMenu = 15;
	FunctionOpenMenu = 16;
	FunctionCloseMenu = 17;
	FunctionSetHighlightedIndex = 18;
	FunctionSelectItem = 19;
	FunctionSetInputValue = 20;
	FunctionReset$1 = 21;
	ControlledPropUpdatedSelectedItem = 22;
	stateChangeTypes$1 = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		ControlledPropUpdatedSelectedItem,
		FunctionCloseMenu,
		FunctionOpenMenu,
		FunctionReset: FunctionReset$1,
		FunctionSelectItem,
		FunctionSetHighlightedIndex,
		FunctionSetInputValue,
		FunctionToggleMenu,
		InputBlur,
		InputChange,
		InputClick,
		InputKeyDownArrowDown,
		InputKeyDownArrowUp,
		InputKeyDownEnd,
		InputKeyDownEnter,
		InputKeyDownEscape,
		InputKeyDownHome,
		InputKeyDownPageDown,
		InputKeyDownPageUp,
		ItemClick,
		ItemMouseMove,
		MenuMouseLeave,
		ToggleButtonClick
	});
	_extends({}, commonDropdownPropTypes, {
		items: import_prop_types.default.array.isRequired,
		isItemDisabled: import_prop_types.default.func,
		inputValue: import_prop_types.default.string,
		defaultInputValue: import_prop_types.default.string,
		initialInputValue: import_prop_types.default.string,
		inputId: import_prop_types.default.string,
		onInputValueChange: import_prop_types.default.func
	});
	validatePropTypes$1 = noop;
	defaultProps$1 = _extends({}, defaultProps$3, { isItemDisabled: function isItemDisabled() {
		return false;
	} });
	_excluded$1 = [
		"onMouseLeave",
		"refKey",
		"ref"
	];
	_excluded2$1 = [
		"item",
		"index",
		"refKey",
		"ref",
		"onMouseMove",
		"onMouseDown",
		"onClick",
		"onPress",
		"disabled"
	];
	_excluded3 = [
		"onClick",
		"onPress",
		"refKey",
		"ref"
	];
	_excluded4 = [
		"onKeyDown",
		"onChange",
		"onInput",
		"onBlur",
		"onChangeText",
		"onClick",
		"refKey",
		"ref"
	];
	useCombobox.stateChangeTypes = stateChangeTypes$1;
	defaultStateValues = {
		activeIndex: -1,
		selectedItems: []
	};
	commonPropTypes.stateReducer, commonPropTypes.itemToKey, commonPropTypes.environment, import_prop_types.default.array, import_prop_types.default.array, import_prop_types.default.array, import_prop_types.default.func, import_prop_types.default.number, import_prop_types.default.number, import_prop_types.default.number, import_prop_types.default.func, import_prop_types.default.func, import_prop_types.default.string, import_prop_types.default.string;
	defaultProps = {
		itemToKey: defaultProps$3.itemToKey,
		stateReducer: defaultProps$3.stateReducer,
		environment: defaultProps$3.environment,
		keyNavigationNext: "ArrowRight",
		keyNavigationPrevious: "ArrowLeft"
	};
	validatePropTypes = noop;
	SelectedItemClick = 0;
	SelectedItemKeyDownDelete = 1;
	SelectedItemKeyDownBackspace = 2;
	SelectedItemKeyDownNavigationNext = 3;
	SelectedItemKeyDownNavigationPrevious = 4;
	DropdownKeyDownNavigationPrevious = 5;
	DropdownKeyDownBackspace = 6;
	DropdownClick = 7;
	FunctionAddSelectedItem = 8;
	FunctionRemoveSelectedItem = 9;
	FunctionSetSelectedItems = 10;
	FunctionSetActiveIndex = 11;
	FunctionReset = 12;
	stateChangeTypes = /*#__PURE__*/ Object.freeze({
		__proto__: null,
		DropdownClick,
		DropdownKeyDownBackspace,
		DropdownKeyDownNavigationPrevious,
		FunctionAddSelectedItem,
		FunctionRemoveSelectedItem,
		FunctionReset,
		FunctionSetActiveIndex,
		FunctionSetSelectedItems,
		SelectedItemClick,
		SelectedItemKeyDownBackspace,
		SelectedItemKeyDownDelete,
		SelectedItemKeyDownNavigationNext,
		SelectedItemKeyDownNavigationPrevious
	});
	_excluded = [
		"refKey",
		"ref",
		"onClick",
		"onKeyDown",
		"selectedItem",
		"index"
	];
	_excluded2 = [
		"refKey",
		"ref",
		"onKeyDown",
		"onClick",
		"preventKeyAction"
	];
	useMultipleSelection.stateChangeTypes = stateChangeTypes;
}));
//#endregion
//#region ../../node_modules/fuse.js/dist/fuse.js
var require_fuse = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/*!
	* Fuse.js v3.6.1 - Lightweight fuzzy-search (http://fusejs.io)
	* 
	* Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
	* All Rights Reserved. Apache Software License 2.0
	* 
	* http://www.apache.org/licenses/LICENSE-2.0
	*/
	(function(e, t) {
		"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Fuse", [], t) : "object" == typeof exports ? exports.Fuse = t() : e.Fuse = t();
	})(exports, function() {
		return function(e) {
			var t = {};
			function r(n) {
				if (t[n]) return t[n].exports;
				var o = t[n] = {
					i: n,
					l: !1,
					exports: {}
				};
				return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
			}
			return r.m = e, r.c = t, r.d = function(e, t, n) {
				r.o(e, t) || Object.defineProperty(e, t, {
					enumerable: !0,
					get: n
				});
			}, r.r = function(e) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
			}, r.t = function(e, t) {
				if (1 & t && (e = r(e)), 8 & t) return e;
				if (4 & t && "object" == typeof e && e && e.__esModule) return e;
				var n = Object.create(null);
				if (r.r(n), Object.defineProperty(n, "default", {
					enumerable: !0,
					value: e
				}), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function(t) {
					return e[t];
				}.bind(null, o));
				return n;
			}, r.n = function(e) {
				var t = e && e.__esModule ? function() {
					return e.default;
				} : function() {
					return e;
				};
				return r.d(t, "a", t), t;
			}, r.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t);
			}, r.p = "", r(r.s = 0);
		}([
			function(e, t, r) {
				function n(e) {
					return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e;
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
					})(e);
				}
				function o(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
					}
				}
				var i = r(1), a = r(7), s = a.get, c = (a.deepValue, a.isArray);
				e.exports = function() {
					function e(t, r) {
						var n = r.location, o = void 0 === n ? 0 : n, i = r.distance, a = void 0 === i ? 100 : i, c = r.threshold, h = void 0 === c ? .6 : c, l = r.maxPatternLength, u = void 0 === l ? 32 : l, f = r.caseSensitive, v = void 0 !== f && f, p = r.tokenSeparator, d = void 0 === p ? / +/g : p, g = r.findAllMatches, y = void 0 !== g && g, m = r.minMatchCharLength, k = void 0 === m ? 1 : m, b = r.id, S = void 0 === b ? null : b, x = r.keys, M = void 0 === x ? [] : x, _ = r.shouldSort, w = void 0 === _ || _, L = r.getFn, A = void 0 === L ? s : L, O = r.sortFn, C = void 0 === O ? function(e, t) {
							return e.score - t.score;
						} : O, j = r.tokenize, P = void 0 !== j && j, I = r.matchAllTokens, F = void 0 !== I && I, T = r.includeMatches, N = void 0 !== T && T, z = r.includeScore, E = void 0 !== z && z, W = r.verbose, K = void 0 !== W && W;
						(function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
						})(this, e), this.options = {
							location: o,
							distance: a,
							threshold: h,
							maxPatternLength: u,
							isCaseSensitive: v,
							tokenSeparator: d,
							findAllMatches: y,
							minMatchCharLength: k,
							id: S,
							keys: M,
							includeMatches: N,
							includeScore: E,
							shouldSort: w,
							getFn: A,
							sortFn: C,
							verbose: K,
							tokenize: P,
							matchAllTokens: F
						}, this.setCollection(t), this._processKeys(M);
					}
					var t, r, a;
					return t = e, (r = [
						{
							key: "setCollection",
							value: function(e) {
								return this.list = e, e;
							}
						},
						{
							key: "_processKeys",
							value: function(e) {
								if (this._keyWeights = {}, this._keyNames = [], e.length && "string" == typeof e[0]) for (var t = 0, r = e.length; t < r; t += 1) {
									var n = e[t];
									this._keyWeights[n] = 1, this._keyNames.push(n);
								}
								else {
									for (var o = null, i = null, a = 0, s = 0, c = e.length; s < c; s += 1) {
										var h = e[s];
										if (!h.hasOwnProperty("name")) throw new Error("Missing \"name\" property in key object");
										var l = h.name;
										if (this._keyNames.push(l), !h.hasOwnProperty("weight")) throw new Error("Missing \"weight\" property in key object");
										var u = h.weight;
										if (u < 0 || u > 1) throw new Error("\"weight\" property in key must bein the range of [0, 1)");
										i = null == i ? u : Math.max(i, u), o = null == o ? u : Math.min(o, u), this._keyWeights[l] = u, a += u;
									}
									if (a > 1) throw new Error("Total of weights cannot exceed 1");
								}
							}
						},
						{
							key: "search",
							value: function(e) {
								var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: !1 };
								this._log("---------\nSearch pattern: \"".concat(e, "\""));
								var r = this._prepareSearchers(e), n = r.tokenSearchers, o = r.fullSearcher, i = this._search(n, o);
								return this._computeScore(i), this.options.shouldSort && this._sort(i), t.limit && "number" == typeof t.limit && (i = i.slice(0, t.limit)), this._format(i);
							}
						},
						{
							key: "_prepareSearchers",
							value: function() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = [];
								if (this.options.tokenize) for (var r = e.split(this.options.tokenSeparator), n = 0, o = r.length; n < o; n += 1) t.push(new i(r[n], this.options));
								return {
									tokenSearchers: t,
									fullSearcher: new i(e, this.options)
								};
							}
						},
						{
							key: "_search",
							value: function() {
								var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 ? arguments[1] : void 0, r = this.list, n = {}, o = [];
								if ("string" == typeof r[0]) {
									for (var i = 0, a = r.length; i < a; i += 1) this._analyze({
										key: "",
										value: r[i],
										record: i,
										index: i
									}, {
										resultMap: n,
										results: o,
										tokenSearchers: e,
										fullSearcher: t
									});
									return o;
								}
								for (var s = 0, c = r.length; s < c; s += 1) for (var h = r[s], l = 0, u = this._keyNames.length; l < u; l += 1) {
									var f = this._keyNames[l];
									this._analyze({
										key: f,
										value: this.options.getFn(h, f),
										record: h,
										index: s
									}, {
										resultMap: n,
										results: o,
										tokenSearchers: e,
										fullSearcher: t
									});
								}
								return o;
							}
						},
						{
							key: "_analyze",
							value: function(e, t) {
								var r = this, n = e.key, o = e.arrayIndex, i = void 0 === o ? -1 : o, a = e.value, s = e.record, h = e.index, l = t.tokenSearchers, u = void 0 === l ? [] : l, f = t.fullSearcher, v = t.resultMap, p = void 0 === v ? {} : v, d = t.results, g = void 0 === d ? [] : d;
								(function e(t, o, i, a) {
									if (null != o) {
										if ("string" == typeof o) {
											var s = !1, h = -1, l = 0;
											r._log("\nKey: ".concat("" === n ? "--" : n));
											var v = f.search(o);
											if (r._log("Full text: \"".concat(o, "\", score: ").concat(v.score)), r.options.tokenize) {
												for (var d = o.split(r.options.tokenSeparator), y = d.length, m = [], k = 0, b = u.length; k < b; k += 1) {
													var S = u[k];
													r._log("\nPattern: \"".concat(S.pattern, "\""));
													for (var x = !1, M = 0; M < y; M += 1) {
														var _ = d[M], w = S.search(_), L = {};
														w.isMatch ? (L[_] = w.score, s = !0, x = !0, m.push(w.score)) : (L[_] = 1, r.options.matchAllTokens || m.push(1)), r._log("Token: \"".concat(_, "\", score: ").concat(L[_]));
													}
													x && (l += 1);
												}
												h = m[0];
												for (var A = m.length, O = 1; O < A; O += 1) h += m[O];
												h /= A, r._log("Token score average:", h);
											}
											var C = v.score;
											h > -1 && (C = (C + h) / 2), r._log("Score average:", C);
											var j = !r.options.tokenize || !r.options.matchAllTokens || l >= u.length;
											if (r._log("\nCheck Matches: ".concat(j)), (s || v.isMatch) && j) {
												var P = {
													key: n,
													arrayIndex: t,
													value: o,
													score: C
												};
												r.options.includeMatches && (P.matchedIndices = v.matchedIndices);
												var I = p[a];
												I ? I.output.push(P) : (p[a] = {
													item: i,
													output: [P]
												}, g.push(p[a]));
											}
										} else if (c(o)) for (var F = 0, T = o.length; F < T; F += 1) e(F, o[F], i, a);
									}
								})(i, a, s, h);
							}
						},
						{
							key: "_computeScore",
							value: function(e) {
								this._log("\n\nComputing score:\n");
								for (var t = this._keyWeights, r = !!Object.keys(t).length, n = 0, o = e.length; n < o; n += 1) {
									for (var i = e[n], a = i.output, s = a.length, c = 1, h = 0; h < s; h += 1) {
										var l = a[h], u = l.key, f = r ? t[u] : 1, v = 0 === l.score && t && t[u] > 0 ? Number.EPSILON : l.score;
										c *= Math.pow(v, f);
									}
									i.score = c, this._log(i);
								}
							}
						},
						{
							key: "_sort",
							value: function(e) {
								this._log("\n\nSorting...."), e.sort(this.options.sortFn);
							}
						},
						{
							key: "_format",
							value: function(e) {
								var t = [];
								if (this.options.verbose) {
									var r = [];
									this._log("\n\nOutput:\n\n", JSON.stringify(e, function(e, t) {
										if ("object" === n(t) && null !== t) {
											if (-1 !== r.indexOf(t)) return;
											r.push(t);
										}
										return t;
									}, 2)), r = null;
								}
								var o = [];
								this.options.includeMatches && o.push(function(e, t) {
									var r = e.output;
									t.matches = [];
									for (var n = 0, o = r.length; n < o; n += 1) {
										var i = r[n];
										if (0 !== i.matchedIndices.length) {
											var a = {
												indices: i.matchedIndices,
												value: i.value
											};
											i.key && (a.key = i.key), i.hasOwnProperty("arrayIndex") && i.arrayIndex > -1 && (a.arrayIndex = i.arrayIndex), t.matches.push(a);
										}
									}
								}), this.options.includeScore && o.push(function(e, t) {
									t.score = e.score;
								});
								for (var i = 0, a = e.length; i < a; i += 1) {
									var s = e[i];
									if (this.options.id && (s.item = this.options.getFn(s.item, this.options.id)[0]), o.length) {
										for (var c = { item: s.item }, h = 0, l = o.length; h < l; h += 1) o[h](s, c);
										t.push(c);
									} else t.push(s.item);
								}
								return t;
							}
						},
						{
							key: "_log",
							value: function() {
								var e;
								this.options.verbose && (e = console).log.apply(e, arguments);
							}
						}
					]) && o(t.prototype, r), a && o(t, a), e;
				}();
			},
			function(e, t, r) {
				function n(e, t) {
					for (var r = 0; r < t.length; r++) {
						var n = t[r];
						n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
					}
				}
				var o = r(2), i = r(3), a = r(6);
				e.exports = function() {
					function e(t, r) {
						var n = r.location, o = void 0 === n ? 0 : n, i = r.distance, s = void 0 === i ? 100 : i, c = r.threshold, h = void 0 === c ? .6 : c, l = r.maxPatternLength, u = void 0 === l ? 32 : l, f = r.isCaseSensitive, v = void 0 !== f && f, p = r.tokenSeparator, d = void 0 === p ? / +/g : p, g = r.findAllMatches, y = void 0 !== g && g, m = r.minMatchCharLength, k = void 0 === m ? 1 : m, b = r.includeMatches, S = void 0 !== b && b;
						(function(e, t) {
							if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
						})(this, e), this.options = {
							location: o,
							distance: s,
							threshold: h,
							maxPatternLength: u,
							isCaseSensitive: v,
							tokenSeparator: d,
							findAllMatches: y,
							includeMatches: S,
							minMatchCharLength: k
						}, this.pattern = v ? t : t.toLowerCase(), this.pattern.length <= u && (this.patternAlphabet = a(this.pattern));
					}
					var t, r, s;
					return t = e, (r = [{
						key: "search",
						value: function(e) {
							var t = this.options, r = t.isCaseSensitive, n = t.includeMatches;
							if (r || (e = e.toLowerCase()), this.pattern === e) {
								var a = {
									isMatch: !0,
									score: 0
								};
								return n && (a.matchedIndices = [[0, e.length - 1]]), a;
							}
							var s = this.options, c = s.maxPatternLength, h = s.tokenSeparator;
							if (this.pattern.length > c) return o(e, this.pattern, h);
							var l = this.options, u = l.location, f = l.distance, v = l.threshold, p = l.findAllMatches, d = l.minMatchCharLength;
							return i(e, this.pattern, this.patternAlphabet, {
								location: u,
								distance: f,
								threshold: v,
								findAllMatches: p,
								minMatchCharLength: d,
								includeMatches: n
							});
						}
					}]) && n(t.prototype, r), s && n(t, s), e;
				}();
			},
			function(e, t) {
				var r = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
				e.exports = function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g, o = new RegExp(t.replace(r, "\\$&").replace(n, "|")), i = e.match(o), a = !!i, s = [];
					if (a) for (var c = 0, h = i.length; c < h; c += 1) {
						var l = i[c];
						s.push([e.indexOf(l), l.length - 1]);
					}
					return {
						score: a ? .5 : 1,
						isMatch: a,
						matchedIndices: s
					};
				};
			},
			function(e, t, r) {
				var n = r(4), o = r(5);
				e.exports = function(e, t, r, i) {
					for (var a = i.location, s = void 0 === a ? 0 : a, c = i.distance, h = void 0 === c ? 100 : c, l = i.threshold, u = void 0 === l ? .6 : l, f = i.findAllMatches, v = void 0 !== f && f, p = i.minMatchCharLength, d = void 0 === p ? 1 : p, g = i.includeMatches, y = void 0 !== g && g, m = s, k = e.length, b = u, S = e.indexOf(t, m), x = t.length, M = [], _ = 0; _ < k; _ += 1) M[_] = 0;
					if (-1 !== S) {
						var w = n(t, {
							errors: 0,
							currentLocation: S,
							expectedLocation: m,
							distance: h
						});
						if (b = Math.min(w, b), -1 !== (S = e.lastIndexOf(t, m + x))) {
							var L = n(t, {
								errors: 0,
								currentLocation: S,
								expectedLocation: m,
								distance: h
							});
							b = Math.min(L, b);
						}
					}
					S = -1;
					for (var A = [], O = 1, C = x + k, j = 1 << (x <= 31 ? x - 1 : 30), P = 0; P < x; P += 1) {
						for (var I = 0, F = C; I < F;) n(t, {
							errors: P,
							currentLocation: m + F,
							expectedLocation: m,
							distance: h
						}) <= b ? I = F : C = F, F = Math.floor((C - I) / 2 + I);
						C = F;
						var T = Math.max(1, m - F + 1), N = v ? k : Math.min(m + F, k) + x, z = Array(N + 2);
						z[N + 1] = (1 << P) - 1;
						for (var E = N; E >= T; E -= 1) {
							var W = E - 1, K = r[e.charAt(W)];
							if (K && (M[W] = 1), z[E] = (z[E + 1] << 1 | 1) & K, 0 !== P && (z[E] |= (A[E + 1] | A[E]) << 1 | 1 | A[E + 1]), z[E] & j && (O = n(t, {
								errors: P,
								currentLocation: W,
								expectedLocation: m,
								distance: h
							})) <= b) {
								if (b = O, (S = W) <= m) break;
								T = Math.max(1, 2 * m - S);
							}
						}
						if (n(t, {
							errors: P + 1,
							currentLocation: m,
							expectedLocation: m,
							distance: h
						}) > b) break;
						A = z;
					}
					var $ = {
						isMatch: S >= 0,
						score: 0 === O ? .001 : O
					};
					return y && ($.matchedIndices = o(M, d)), $;
				};
			},
			function(e, t) {
				e.exports = function(e, t) {
					var r = t.errors, n = void 0 === r ? 0 : r, o = t.currentLocation, i = void 0 === o ? 0 : o, a = t.expectedLocation, s = void 0 === a ? 0 : a, c = t.distance, h = void 0 === c ? 100 : c, l = n / e.length, u = Math.abs(s - i);
					return h ? l + u / h : u ? 1 : l;
				};
			},
			function(e, t) {
				e.exports = function() {
					for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = [], n = -1, o = -1, i = 0, a = e.length; i < a; i += 1) {
						var s = e[i];
						s && -1 === n ? n = i : s || -1 === n || ((o = i - 1) - n + 1 >= t && r.push([n, o]), n = -1);
					}
					return e[i - 1] && i - n >= t && r.push([n, i - 1]), r;
				};
			},
			function(e, t) {
				e.exports = function(e) {
					for (var t = {}, r = e.length, n = 0; n < r; n += 1) t[e.charAt(n)] = 0;
					for (var o = 0; o < r; o += 1) t[e.charAt(o)] |= 1 << r - o - 1;
					return t;
				};
			},
			function(e, t) {
				var r = function(e) {
					return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
				}, n = function(e) {
					return null == e ? "" : function(e) {
						if ("string" == typeof e) return e;
						var t = e + "";
						return "0" == t && 1 / e == -Infinity ? "-0" : t;
					}(e);
				}, o = function(e) {
					return "string" == typeof e;
				}, i = function(e) {
					return "number" == typeof e;
				};
				e.exports = {
					get: function(e, t) {
						var a = [];
						return function e(t, s) {
							if (s) {
								var c = s.indexOf("."), h = s, l = null;
								-1 !== c && (h = s.slice(0, c), l = s.slice(c + 1));
								var u = t[h];
								if (null != u) if (l || !o(u) && !i(u)) if (r(u)) for (var f = 0, v = u.length; f < v; f += 1) e(u[f], l);
								else l && e(u, l);
								else a.push(n(u));
							} else a.push(t);
						}(e, t), a;
					},
					isArray: r,
					isString: o,
					isNum: i,
					toString: n
				};
			}
		]);
	});
}));
//#endregion
export { init_extends as A, _wrapNativeSuper as C, _assertThisInitialized as D, init_inheritsLoose as E, init_dist$3 as M, scope as N, init_assertThisInitialized as O, isEqual as S, _inheritsLoose as T, clsx as _, $b27c684a33948c64$export$2f817fcdc4b89ae0 as a, init_predicate as b, init_LocalizedStringDictionary as c, init_dist$2 as d, init_function as f, init_debounce as g, debounce$1 as h, init_dist$1 as i, require_browser as j, _extends as k, require_cjs as l, throttle as m, Downshift as n, init_LocalizedStringFormatter as o, init_throttle as p, init_downshift_esm as r, $a747a10fe70a57da$export$c17fa47878dc55b6 as s, require_fuse as t, equal as u, init_clsx as v, init_wrapNativeSuper as w, init_isEqual as x, init_import as y };
