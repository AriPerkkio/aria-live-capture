import { i as __require, n as __esmMin, t as __commonJSMin } from "./globals-runtime-XrdeG17s.js";
import { t as require_react_is } from "./globals-runtime-BDpKY2kD.js";
import { t as require_immutable } from "./globals-runtime-C9CoMQvm.js";
//#region ../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var reactIs = require_react_is();
	/**
	* Copyright 2015, Yahoo! Inc.
	* Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
	*/
	var REACT_STATICS = {
		childContextTypes: true,
		contextType: true,
		contextTypes: true,
		defaultProps: true,
		displayName: true,
		getDefaultProps: true,
		getDerivedStateFromError: true,
		getDerivedStateFromProps: true,
		mixins: true,
		propTypes: true,
		type: true
	};
	var KNOWN_STATICS = {
		name: true,
		length: true,
		prototype: true,
		caller: true,
		callee: true,
		arguments: true,
		arity: true
	};
	var FORWARD_REF_STATICS = {
		"$$typeof": true,
		render: true,
		defaultProps: true,
		displayName: true,
		propTypes: true
	};
	var MEMO_STATICS = {
		"$$typeof": true,
		compare: true,
		defaultProps: true,
		displayName: true,
		propTypes: true,
		type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
	function getStatics(component) {
		if (reactIs.isMemo(component)) return MEMO_STATICS;
		return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
	}
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
		if (typeof sourceComponent !== "string") {
			if (objectPrototype) {
				var inheritedComponent = getPrototypeOf(sourceComponent);
				if (inheritedComponent && inheritedComponent !== objectPrototype) hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
			}
			var keys = getOwnPropertyNames(sourceComponent);
			if (getOwnPropertySymbols) keys = keys.concat(getOwnPropertySymbols(sourceComponent));
			var targetStatics = getStatics(targetComponent);
			var sourceStatics = getStatics(sourceComponent);
			for (var i = 0; i < keys.length; ++i) {
				var key = keys[i];
				if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
					var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
					try {
						defineProperty(targetComponent, key, descriptor);
					} catch (e) {}
				}
			}
		}
		return targetComponent;
	}
	module.exports = hoistNonReactStatics;
}));
//#endregion
//#region ../../node_modules/memoizerific/memoizerific.js
var require_memoizerific = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(f) {
		if (typeof exports === "object" && typeof module !== "undefined") module.exports = f();
		else if (typeof define === "function" && define.amd) define([], f);
		else {
			var g;
			if (typeof window !== "undefined") g = window;
			else if (typeof global !== "undefined") g = global;
			else if (typeof self !== "undefined") g = self;
			else g = this;
			g.memoizerific = f();
		}
	})(function() {
		return (function e(t, n, r) {
			function s(o, u) {
				if (!n[o]) {
					if (!t[o]) {
						var a = typeof __require == "function" && __require;
						if (!u && a) return a(o, !0);
						if (i) return i(o, !0);
						var f = /* @__PURE__ */ new Error("Cannot find module '" + o + "'");
						throw f.code = "MODULE_NOT_FOUND", f;
					}
					var l = n[o] = { exports: {} };
					t[o][0].call(l.exports, function(e) {
						var n = t[o][1][e];
						return s(n ? n : e);
					}, l, l.exports, e, t, n, r);
				}
				return n[o].exports;
			}
			var i = typeof __require == "function" && __require;
			for (var o = 0; o < r.length; o++) s(r[o]);
			return s;
		})({
			1: [function(_dereq_, module$1, exports$1) {
				module$1.exports = function(forceSimilar) {
					if (typeof Map !== "function" || forceSimilar) return new (_dereq_("./similar"))();
					else return /* @__PURE__ */ new Map();
				};
			}, { "./similar": 2 }],
			2: [function(_dereq_, module$2, exports$2) {
				function Similar() {
					this.list = [];
					this.lastItem = void 0;
					this.size = 0;
					return this;
				}
				Similar.prototype.get = function(key) {
					var index;
					if (this.lastItem && this.isEqual(this.lastItem.key, key)) return this.lastItem.val;
					index = this.indexOf(key);
					if (index >= 0) {
						this.lastItem = this.list[index];
						return this.list[index].val;
					}
				};
				Similar.prototype.set = function(key, val) {
					var index;
					if (this.lastItem && this.isEqual(this.lastItem.key, key)) {
						this.lastItem.val = val;
						return this;
					}
					index = this.indexOf(key);
					if (index >= 0) {
						this.lastItem = this.list[index];
						this.list[index].val = val;
						return this;
					}
					this.lastItem = {
						key,
						val
					};
					this.list.push(this.lastItem);
					this.size++;
					return this;
				};
				Similar.prototype.delete = function(key) {
					var index;
					if (this.lastItem && this.isEqual(this.lastItem.key, key)) this.lastItem = void 0;
					index = this.indexOf(key);
					if (index >= 0) {
						this.size--;
						return this.list.splice(index, 1)[0];
					}
				};
				Similar.prototype.has = function(key) {
					var index;
					if (this.lastItem && this.isEqual(this.lastItem.key, key)) return true;
					index = this.indexOf(key);
					if (index >= 0) {
						this.lastItem = this.list[index];
						return true;
					}
					return false;
				};
				Similar.prototype.forEach = function(callback, thisArg) {
					var i;
					for (i = 0; i < this.size; i++) callback.call(thisArg || this, this.list[i].val, this.list[i].key, this);
				};
				Similar.prototype.indexOf = function(key) {
					var i;
					for (i = 0; i < this.size; i++) if (this.isEqual(this.list[i].key, key)) return i;
					return -1;
				};
				Similar.prototype.isEqual = function(val1, val2) {
					return val1 === val2 || val1 !== val1 && val2 !== val2;
				};
				module$2.exports = Similar;
			}, {}],
			3: [function(_dereq_, module$3, exports$3) {
				var MapOrSimilar = _dereq_("map-or-similar");
				module$3.exports = function(limit) {
					var cache = new MapOrSimilar(false), lru = [];
					return function(fn) {
						var memoizerific = function() {
							var currentCache = cache, newMap, fnResult, argsLengthMinusOne = arguments.length - 1, lruPath = Array(argsLengthMinusOne + 1), isMemoized = true, i;
							if ((memoizerific.numArgs || memoizerific.numArgs === 0) && memoizerific.numArgs !== argsLengthMinusOne + 1) throw new Error("Memoizerific functions should always be called with the same number of arguments");
							for (i = 0; i < argsLengthMinusOne; i++) {
								lruPath[i] = {
									cacheItem: currentCache,
									arg: arguments[i]
								};
								if (currentCache.has(arguments[i])) {
									currentCache = currentCache.get(arguments[i]);
									continue;
								}
								isMemoized = false;
								newMap = new MapOrSimilar(false);
								currentCache.set(arguments[i], newMap);
								currentCache = newMap;
							}
							if (isMemoized) if (currentCache.has(arguments[argsLengthMinusOne])) fnResult = currentCache.get(arguments[argsLengthMinusOne]);
							else isMemoized = false;
							if (!isMemoized) {
								fnResult = fn.apply(null, arguments);
								currentCache.set(arguments[argsLengthMinusOne], fnResult);
							}
							if (limit > 0) {
								lruPath[argsLengthMinusOne] = {
									cacheItem: currentCache,
									arg: arguments[argsLengthMinusOne]
								};
								if (isMemoized) moveToMostRecentLru(lru, lruPath);
								else lru.push(lruPath);
								if (lru.length > limit) removeCachedResult(lru.shift());
							}
							memoizerific.wasMemoized = isMemoized;
							memoizerific.numArgs = argsLengthMinusOne + 1;
							return fnResult;
						};
						memoizerific.limit = limit;
						memoizerific.wasMemoized = false;
						memoizerific.cache = cache;
						memoizerific.lru = lru;
						return memoizerific;
					};
				};
				function moveToMostRecentLru(lru, lruPath) {
					var lruLen = lru.length, lruPathLen = lruPath.length, isMatch, i, ii;
					for (i = 0; i < lruLen; i++) {
						isMatch = true;
						for (ii = 0; ii < lruPathLen; ii++) if (!isEqual(lru[i][ii].arg, lruPath[ii].arg)) {
							isMatch = false;
							break;
						}
						if (isMatch) break;
					}
					lru.push(lru.splice(i, 1)[0]);
				}
				function removeCachedResult(removedLru) {
					var removedLruLen = removedLru.length, currentLru = removedLru[removedLruLen - 1], tmp, i;
					currentLru.cacheItem.delete(currentLru.arg);
					for (i = removedLruLen - 2; i >= 0; i--) {
						currentLru = removedLru[i];
						tmp = currentLru.cacheItem.get(currentLru.arg);
						if (!tmp || !tmp.size) currentLru.cacheItem.delete(currentLru.arg);
						else break;
					}
				}
				function isEqual(val1, val2) {
					return val1 === val2 || val1 !== val1 && val2 !== val2;
				}
			}, { "map-or-similar": 1 }]
		}, {}, [3])(3);
	});
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/isPrimitive.mjs
/**
* Checks whether a value is a JavaScript primitive.
* JavaScript primitives include null, undefined, strings, numbers, booleans, symbols, and bigints.
*
* @param value The value to check.
* @returns Returns true if `value` is a primitive, false otherwise.
*
* @example
* isPrimitive(null); // true
* isPrimitive(undefined); // true
* isPrimitive('123'); // true
* isPrimitive(false); // true
* isPrimitive(true); // true
* isPrimitive(Symbol('a')); // true
* isPrimitive(123n); // true
* isPrimitive({}); // false
* isPrimitive(new Date()); // false
* isPrimitive(new Map()); // false
* isPrimitive(new Set()); // false
* isPrimitive([1, 2, 3]); // false
*/
function isPrimitive(value) {
	return value == null || typeof value !== "object" && typeof value !== "function";
}
var init_isPrimitive = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/isTypedArray.mjs
/**
* Checks if a value is a TypedArray.
* @param x The value to check.
* @returns Returns true if `x` is a TypedArray, false otherwise.
*
* @example
* const arr = new Uint8Array([1, 2, 3]);
* isTypedArray(arr); // true
*
* const regularArray = [1, 2, 3];
* isTypedArray(regularArray); // false
*
* const buffer = new ArrayBuffer(16);
* isTypedArray(buffer); // false
*/
function isTypedArray(x) {
	return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
var init_isTypedArray = __esmMin((() => {}));
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
var regexpTag, stringTag, numberTag, booleanTag, argumentsTag, symbolTag, dateTag, mapTag, setTag, arrayTag, functionTag, arrayBufferTag, objectTag, errorTag, dataViewTag, uint8ArrayTag, uint8ClampedArrayTag, uint16ArrayTag, uint32ArrayTag, bigUint64ArrayTag, int8ArrayTag, int16ArrayTag, int32ArrayTag, bigInt64ArrayTag, float32ArrayTag, float64ArrayTag;
var init_tags = __esmMin((() => {
	regexpTag = "[object RegExp]";
	stringTag = "[object String]";
	numberTag = "[object Number]";
	booleanTag = "[object Boolean]";
	argumentsTag = "[object Arguments]";
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
function noop() {}
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
	return isEqualWith(a, b, noop);
}
var init_isEqual = __esmMin((() => {
	init_noop();
	init_isEqualWith();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/predicate/index.mjs
var init_predicate = __esmMin((() => {
	init_isPlainObject();
	init_isEqual();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/object/clone.mjs
/**
* Creates a shallow clone of the given object.
*
* @template T - The type of the object.
* @param obj - The object to clone.
* @returns A shallow clone of the given object.
*
* @example
* // Clone a primitive value
* const num = 29;
* const clonedNum = clone(num);
* console.log(clonedNum); // 29
* console.log(clonedNum === num); // true
*
* @example
* // Clone an array
* const arr = [1, 2, 3];
* const clonedArr = clone(arr);
* console.log(clonedArr); // [1, 2, 3]
* console.log(clonedArr === arr); // false
*
* @example
* // Clone an object
* const obj = { a: 1, b: 'es-toolkit', c: [1, 2, 3] };
* const clonedObj = clone(obj);
* console.log(clonedObj); // { a: 1, b: 'es-toolkit', c: [1, 2, 3] }
* console.log(clonedObj === obj); // false
*/
function clone(obj) {
	if (isPrimitive(obj)) return obj;
	if (Array.isArray(obj) || isTypedArray(obj) || obj instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && obj instanceof SharedArrayBuffer) return obj.slice(0);
	const prototype = Object.getPrototypeOf(obj);
	if (prototype == null) return Object.assign(Object.create(prototype), obj);
	const Constructor = prototype.constructor;
	if (obj instanceof Date || obj instanceof Map || obj instanceof Set) return new Constructor(obj);
	if (obj instanceof RegExp) {
		const newRegExp = new Constructor(obj);
		newRegExp.lastIndex = obj.lastIndex;
		return newRegExp;
	}
	if (obj instanceof DataView) return new Constructor(obj.buffer.slice(0));
	if (obj instanceof Error) {
		let newError;
		if (obj instanceof AggregateError) newError = new Constructor(obj.errors, obj.message, { cause: obj.cause });
		else newError = new Constructor(obj.message, { cause: obj.cause });
		newError.stack = obj.stack;
		Object.assign(newError, obj);
		return newError;
	}
	if (typeof File !== "undefined" && obj instanceof File) return new Constructor([obj], obj.name, {
		type: obj.type,
		lastModified: obj.lastModified
	});
	if (typeof obj === "object") return Object.assign(Object.create(prototype), obj);
	return obj;
}
var init_clone = __esmMin((() => {
	init_isPrimitive();
	init_isTypedArray();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/object/cloneDeepWith.mjs
function cloneDeepWithImpl(valueToClone, keyToClone, objectToClone, stack = /* @__PURE__ */ new Map(), cloneValue = void 0) {
	const cloned = cloneValue?.(valueToClone, keyToClone, objectToClone, stack);
	if (cloned !== void 0) return cloned;
	if (isPrimitive(valueToClone)) return valueToClone;
	if (stack.has(valueToClone)) return stack.get(valueToClone);
	if (Array.isArray(valueToClone)) {
		const result = new Array(valueToClone.length);
		stack.set(valueToClone, result);
		for (let i = 0; i < valueToClone.length; i++) result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
		if (Object.hasOwn(valueToClone, "index")) result.index = valueToClone.index;
		if (Object.hasOwn(valueToClone, "input")) result.input = valueToClone.input;
		return result;
	}
	if (valueToClone instanceof Date) return new Date(valueToClone.getTime());
	if (valueToClone instanceof RegExp) {
		const result = new RegExp(valueToClone.source, valueToClone.flags);
		result.lastIndex = valueToClone.lastIndex;
		return result;
	}
	if (valueToClone instanceof Map) {
		const result = /* @__PURE__ */ new Map();
		stack.set(valueToClone, result);
		for (const [key, value] of valueToClone) result.set(key, cloneDeepWithImpl(value, key, objectToClone, stack, cloneValue));
		return result;
	}
	if (valueToClone instanceof Set) {
		const result = /* @__PURE__ */ new Set();
		stack.set(valueToClone, result);
		for (const value of valueToClone) result.add(cloneDeepWithImpl(value, void 0, objectToClone, stack, cloneValue));
		return result;
	}
	if (isBuffer(valueToClone)) return valueToClone.subarray();
	if (isTypedArray(valueToClone)) {
		const result = new (Object.getPrototypeOf(valueToClone)).constructor(valueToClone.length);
		stack.set(valueToClone, result);
		for (let i = 0; i < valueToClone.length; i++) result[i] = cloneDeepWithImpl(valueToClone[i], i, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && valueToClone instanceof SharedArrayBuffer) return valueToClone.slice(0);
	if (valueToClone instanceof DataView) {
		const result = new DataView(valueToClone.buffer.slice(0), valueToClone.byteOffset, valueToClone.byteLength);
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof File !== "undefined" && valueToClone instanceof File) {
		const result = new File([valueToClone], valueToClone.name, { type: valueToClone.type });
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof Blob !== "undefined" && valueToClone instanceof Blob) {
		const result = new Blob([valueToClone], { type: valueToClone.type });
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Error) {
		const result = structuredClone(valueToClone);
		stack.set(valueToClone, result);
		result.message = valueToClone.message;
		result.name = valueToClone.name;
		result.stack = valueToClone.stack;
		result.cause = valueToClone.cause;
		result.constructor = valueToClone.constructor;
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Boolean) {
		const result = new Boolean(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof Number) {
		const result = new Number(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (valueToClone instanceof String) {
		const result = new String(valueToClone.valueOf());
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	if (typeof valueToClone === "object" && isCloneableObject(valueToClone)) {
		const result = Object.create(Object.getPrototypeOf(valueToClone));
		stack.set(valueToClone, result);
		copyProperties(result, valueToClone, objectToClone, stack, cloneValue);
		return result;
	}
	return valueToClone;
}
function copyProperties(target, source, objectToClone = target, stack, cloneValue) {
	const keys = [...Object.keys(source), ...getSymbols(source)];
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		const descriptor = Object.getOwnPropertyDescriptor(target, key);
		if (descriptor == null || descriptor.writable) target[key] = cloneDeepWithImpl(source[key], key, objectToClone, stack, cloneValue);
	}
}
function isCloneableObject(object) {
	switch (getTag(object)) {
		case argumentsTag:
		case arrayTag:
		case arrayBufferTag:
		case dataViewTag:
		case booleanTag:
		case dateTag:
		case float32ArrayTag:
		case float64ArrayTag:
		case int8ArrayTag:
		case int16ArrayTag:
		case int32ArrayTag:
		case mapTag:
		case numberTag:
		case objectTag:
		case regexpTag:
		case setTag:
		case stringTag:
		case symbolTag:
		case uint8ArrayTag:
		case uint8ClampedArrayTag:
		case uint16ArrayTag:
		case uint32ArrayTag: return true;
		default: return false;
	}
}
var init_cloneDeepWith = __esmMin((() => {
	init_isPrimitive();
	init_isTypedArray();
	init_getSymbols();
	init_getTag();
	init_tags();
	init_isBuffer();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/object/cloneDeep.mjs
/**
* Creates a deep clone of the given object.
*
* @template T - The type of the object.
* @param obj - The object to clone.
* @returns A deep clone of the given object.
*
* @example
* // Clone a primitive value
* const num = 29;
* const clonedNum = cloneDeep(num);
* console.log(clonedNum); // 29
* console.log(clonedNum === num); // true
*
* @example
* // Clone an array
* const arr = [1, 2, 3];
* const clonedArr = cloneDeep(arr);
* console.log(clonedArr); // [1, 2, 3]
* console.log(clonedArr === arr); // false
*
* @example
* // Clone an array with nested objects
* const arr = [1, { a: 1 }, [1, 2, 3]];
* const clonedArr = cloneDeep(arr);
* arr[1].a = 2;
* console.log(arr); // [1, { a: 2 }, [1, 2, 3]]
* console.log(clonedArr); // [1, { a: 1 }, [1, 2, 3]]
* console.log(clonedArr === arr); // false
*
* @example
* // Clone an object
* const obj = { a: 1, b: 'es-toolkit', c: [1, 2, 3] };
* const clonedObj = cloneDeep(obj);
* console.log(clonedObj); // { a: 1, b: 'es-toolkit', c: [1, 2, 3] }
* console.log(clonedObj === obj); // false
*
* @example
* // Clone an object with nested objects
* const obj = { a: 1, b: { c: 1 } };
* const clonedObj = cloneDeep(obj);
* obj.b.c = 2;
* console.log(obj); // { a: 1, b: { c: 2 } }
* console.log(clonedObj); // { a: 1, b: { c: 1 } }
* console.log(clonedObj === obj); // false
*/
function cloneDeep(obj) {
	return cloneDeepWithImpl(obj, void 0, obj, /* @__PURE__ */ new Map(), void 0);
}
var init_cloneDeep = __esmMin((() => {
	init_cloneDeepWith();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/_internal/isMergeableValue.mjs
/**
* Checks if a value can be deeply merged into, i.e. it is a plain object or an array.
*
* This function is used in `merge`, `mergeWith`, and `toMerged` to decide whether
* the source value should be merged into the existing target value recursively,
* preserving the target's structure, instead of replacing it.
*
* @param value - The value to check.
* @returns `true` if the value is a plain object or an array, otherwise `false`.
*/
function isMergeableValue(value) {
	return isPlainObject(value) || Array.isArray(value);
}
var init_isMergeableValue = __esmMin((() => {
	init_isPlainObject();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/_internal/isUnsafeProperty.mjs
/**
* Checks if a property key is unsafe to access or copy directly.
*
* This function is used in functions like `get`, `unset`, and `merge` to prevent
* prototype pollution attacks by identifying `__proto__`, which modifies the object's
* prototype chain. `constructor` and `prototype` stay accessible here because lodash
* keeps reads of them unrestricted; write paths use `isUnsafeToWriteProperty` instead,
* which also blocks those keys.
*
* @param key - The property key to check
* @returns `true` if the property is unsafe to access directly, `false` otherwise
* @internal
*/
function isUnsafeProperty(key) {
	return key === "__proto__";
}
var init_isUnsafeProperty = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/object/mergeWith.mjs
/**
* Merges the properties of the source object into the target object.
*
* You can provide a custom `merge` function to control how properties are merged. It should return the value to be set in the target object.
*
* If it returns `undefined`, a default deep merge will be applied for arrays and objects:
*
* - If a property in the source object is an array or an object and the corresponding property in the target object is also an array or object, they will be merged.
* - If a property in the source object is undefined, it will not overwrite a defined property in the target object.
*
* Note that this function mutates the target object.
*
* @param target - The target object into which the source object properties will be merged. This object is modified in place.
* @param source - The source object whose properties will be merged into the target object.
* @param merge - A custom merge function that defines how properties should be combined. It receives the following arguments:
*   - `targetValue`: The current value of the property in the target object.
*   - `sourceValue`: The value of the property in the source object.
*   - `key`: The key of the property being merged.
*   - `target`: The target object.
*   - `source`: The source object.
*
* @returns The updated target object with properties from the source object merged in.
*
* @template T - Type of the target object.
* @template S - Type of the source object.
*
* @example
* const target = { a: 1, b: 2 };
* const source = { b: 3, c: 4 };
*
* mergeWith(target, source, (targetValue, sourceValue) => {
*   if (typeof targetValue === 'number' && typeof sourceValue === 'number') {
*     return targetValue + sourceValue;
*   }
* });
* // Returns { a: 1, b: 5, c: 4 }
* @example
* const target = { a: [1], b: [2] };
* const source = { a: [3], b: [4] };
*
* const result = mergeWith(target, source, (objValue, srcValue) => {
*   if (Array.isArray(objValue)) {
*     return objValue.concat(srcValue);
*   }
* });
*
* expect(result).toEqual({ a: [1, 3], b: [2, 4] });
*/
function mergeWith(target, source, merge) {
	const sourceKeys = Object.keys(source);
	for (let i = 0; i < sourceKeys.length; i++) {
		const key = sourceKeys[i];
		if (isUnsafeProperty(key)) continue;
		const sourceValue = source[key];
		const targetValue = target[key];
		const merged = merge(targetValue, sourceValue, key, target, source);
		if (merged !== void 0) target[key] = merged;
		else if (isMergeableValue(sourceValue) && isMergeableValue(targetValue)) target[key] = mergeWith(targetValue, sourceValue, merge);
		else if (Array.isArray(sourceValue)) target[key] = mergeWith([], sourceValue, merge);
		else if (isPlainObject(sourceValue)) target[key] = mergeWith({}, sourceValue, merge);
		else if (targetValue === void 0 || sourceValue !== void 0) target[key] = sourceValue;
	}
	return target;
}
var init_mergeWith = __esmMin((() => {
	init_isPlainObject();
	init_isMergeableValue();
	init_isUnsafeProperty();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/object/omit.mjs
/**
* Creates a new object with specified keys omitted.
*
* This function takes an object and an array of keys, and returns a new object that
* excludes the properties corresponding to the specified keys.
*
* @template T - The type of object.
* @template K - The type of keys in object.
* @param obj - The object to omit keys from.
* @param keys - An array of keys to be omitted from the object.
* @returns A new object with the specified keys omitted.
*
* @example
* const obj = { a: 1, b: 2, c: 3 };
* const result = omit(obj, ['b', 'c']);
* // result will be { a: 1 }
*/
function omit(obj, keys) {
	const result = { ...obj };
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		delete result[key];
	}
	return result;
}
var init_omit = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/object/pick.mjs
/**
* Creates a new object composed of the picked object properties.
*
* This function takes an object and an array of keys, and returns a new object that
* includes only the properties corresponding to the specified keys.
*
* @template T - The type of object.
* @template K - The type of keys in object.
* @param obj - The object to pick keys from.
* @param keys - An array of keys to be picked from the object.
* @returns A new object with the specified keys picked.
*
* @example
* const obj = { a: 1, b: 2, c: 3 };
* const result = pick(obj, ['a', 'c']);
* // result will be { a: 1, c: 3 }
*/
function pick(obj, keys) {
	const result = {};
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (Object.hasOwn(obj, key)) result[key] = obj[key];
	}
	return result;
}
var init_pick = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/object/toMerged.mjs
/**
* Merges the properties of the source object into a deep clone of the target object.
* Unlike `merge`, This function does not modify the original target object.
*
* This function performs a deep merge, meaning nested objects and arrays are merged recursively.
*
* - If a property in the source object is an array or object and the corresponding property in the target object is also an array or object, they will be merged.
* - If a property in the source object is undefined, it will not overwrite a defined property in the target object.
*
* Note that this function does not mutate the target object.
*
* @param target - The target object to be cloned and merged into. This object is not modified directly.
* @param source - The source object whose properties will be merged into the cloned target object.
* @returns A new object with properties from the source object merged into a deep clone of the target object.
*
* @template T - Type of the target object.
* @template S - Type of the source object.
*
* @example
* const target = { a: 1, b: { x: 1, y: 2 } };
* const source = { b: { y: 3, z: 4 }, c: 5 };
*
* const result = toMerged(target, source);
* console.log(result);
* // Output: { a: 1, b: { x: 1, y: 3, z: 4 }, c: 5 }
*
* @example
* const target = { a: [1, 2], b: { x: 1 } };
* const source = { a: [3], b: { y: 2 } };
*
* const result = toMerged(target, source);
* console.log(result);
* // Output: { a: [3, 2], b: { x: 1, y: 2 } }
*
* @example
* const target = { a: null };
* const source = { a: [1, 2, 3] };
*
* const result = toMerged(target, source);
* console.log(result);
* // Output: { a: [1, 2, 3] }
*/
function toMerged(target, source) {
	return mergeWith(cloneDeep(target), source, function mergeRecursively(targetValue, sourceValue) {
		if (isMergeableValue(sourceValue) && isMergeableValue(targetValue)) return mergeWith(clone(targetValue), sourceValue, mergeRecursively);
		else if (Array.isArray(sourceValue)) return mergeWith([], sourceValue, mergeRecursively);
		else if (isPlainObject(sourceValue)) return mergeWith({}, sourceValue, mergeRecursively);
	});
}
var init_toMerged = __esmMin((() => {
	init_clone();
	init_cloneDeep();
	init_isPlainObject();
	init_isMergeableValue();
	init_mergeWith();
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/object/index.mjs
var init_object = __esmMin((() => {
	init_mergeWith();
	init_omit();
	init_pick();
	init_toMerged();
}));
//#endregion
//#region ../../node_modules/dequal/dist/index.mjs
function find(iter, tar, key) {
	for (key of iter.keys()) if (dequal(key, tar)) return key;
}
function dequal(foo, bar) {
	var ctor, len, tmp;
	if (foo === bar) return true;
	if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
		if (ctor === Date) return foo.getTime() === bar.getTime();
		if (ctor === RegExp) return foo.toString() === bar.toString();
		if (ctor === Array) {
			if ((len = foo.length) === bar.length) while (len-- && dequal(foo[len], bar[len]));
			return len === -1;
		}
		if (ctor === Set) {
			if (foo.size !== bar.size) return false;
			for (len of foo) {
				tmp = len;
				if (tmp && typeof tmp === "object") {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!bar.has(tmp)) return false;
			}
			return true;
		}
		if (ctor === Map) {
			if (foo.size !== bar.size) return false;
			for (len of foo) {
				tmp = len[0];
				if (tmp && typeof tmp === "object") {
					tmp = find(bar, tmp);
					if (!tmp) return false;
				}
				if (!dequal(len[1], bar.get(tmp))) return false;
			}
			return true;
		}
		if (ctor === ArrayBuffer) {
			foo = new Uint8Array(foo);
			bar = new Uint8Array(bar);
		} else if (ctor === DataView) {
			if ((len = foo.byteLength) === bar.byteLength) while (len-- && foo.getInt8(len) === bar.getInt8(len));
			return len === -1;
		}
		if (ArrayBuffer.isView(foo)) {
			if ((len = foo.byteLength) === bar.byteLength) while (len-- && foo[len] === bar[len]);
			return len === -1;
		}
		if (!ctor || typeof foo === "object") {
			len = 0;
			for (ctor in foo) {
				if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
				if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
			}
			return Object.keys(bar).length === len;
		}
	}
	return foo !== foo && bar !== bar;
}
var has;
var init_dist = __esmMin((() => {
	has = Object.prototype.hasOwnProperty;
}));
//#endregion
//#region ../../node_modules/nanoid/index.browser.js
var nanoid;
var init_index_browser = __esmMin((() => {
	nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
		byte &= 63;
		if (byte < 36) id += byte.toString(36);
		else if (byte < 62) id += (byte - 26).toString(36).toUpperCase();
		else if (byte > 62) id += "-";
		else id += "_";
		return id;
	}, "");
}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/array/countBy.mjs
/**
* Count the occurrences of each item in an array
* based on a transformation function.
*
* This function takes an array and a transformation function
* that converts each item in the array to a key. It then
* counts the occurrences of each transformed item and returns
* an object with the transformed items as keys and the counts
* as values.
*
* @template T - The type of the items in the input array.
* @template K - The type of keys.
* @param arr - The input array to count occurrences.
* @param mapper - The transformation function that maps each item, its index, and the array to a key.
* @returns An object containing the transformed items as keys and the
* counts as values.
*
* @example
* const array = ['a', 'b', 'c', 'a', 'b', 'a'];
* const result = countBy(array, x => x);
* // result will be { a: 3, b: 2, c: 1 }
*
* @example
* const array = [1, 2, 3, 4, 5];
* const result = countBy(array, item => item % 2 === 0 ? 'even' : 'odd');
* // result will be { odd: 3, even: 2 }
*
* @example
* // Using index parameter
* const array = ['a', 'b', 'c', 'd'];
* const result = countBy(array, (item, index) => index < 2 ? 'first' : 'rest');
* // result will be { first: 2, rest: 2 }
*/
function countBy(arr, mapper) {
	const result = {};
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		const key = mapper(item, i, arr);
		result[key] = (result[key] ?? 0) + 1;
	}
	return result;
}
var init_countBy = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/array/partition.mjs
function partition(arr, isInTruthy) {
	const truthy = [];
	const falsy = [];
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i];
		if (isInTruthy(item, i, arr)) truthy.push(item);
		else falsy.push(item);
	}
	return [truthy, falsy];
}
var init_partition = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/es-toolkit/dist/array/index.mjs
var init_array = __esmMin((() => {
	init_countBy();
	init_partition();
}));
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
function debounce(func, debounceMs, { signal, edges } = {}) {
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
	const debounced = debounce(function(...args) {
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
	init_throttle();
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/util/schema.js
var require_schema = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Schema;
	var proto = Schema.prototype;
	proto.space = null;
	proto.normal = {};
	proto.property = {};
	function Schema(property, normal, space) {
		this.property = property;
		this.normal = normal;
		if (space) this.space = space;
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/util/merge.js
var require_merge = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var xtend = require_immutable();
	var Schema = require_schema();
	module.exports = merge;
	function merge(definitions) {
		var length = definitions.length;
		var property = [];
		var normal = [];
		var index = -1;
		var info;
		var space;
		while (++index < length) {
			info = definitions[index];
			property.push(info.property);
			normal.push(info.normal);
			space = info.space;
		}
		return new Schema(xtend.apply(null, property), xtend.apply(null, normal), space);
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/normalize.js
var require_normalize = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = normalize;
	function normalize(value) {
		return value.toLowerCase();
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/util/info.js
var require_info = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Info;
	var proto = Info.prototype;
	proto.space = null;
	proto.attribute = null;
	proto.property = null;
	proto.boolean = false;
	proto.booleanish = false;
	proto.overloadedBoolean = false;
	proto.number = false;
	proto.commaSeparated = false;
	proto.spaceSeparated = false;
	proto.commaOrSpaceSeparated = false;
	proto.mustUseProperty = false;
	proto.defined = false;
	function Info(property, attribute) {
		this.property = property;
		this.attribute = attribute;
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/util/types.js
var require_types = /* @__PURE__ */ __commonJSMin(((exports) => {
	var powers = 0;
	exports.boolean = increment();
	exports.booleanish = increment();
	exports.overloadedBoolean = increment();
	exports.number = increment();
	exports.spaceSeparated = increment();
	exports.commaSeparated = increment();
	exports.commaOrSpaceSeparated = increment();
	function increment() {
		return Math.pow(2, ++powers);
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/util/defined-info.js
var require_defined_info = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var Info = require_info();
	var types = require_types();
	module.exports = DefinedInfo;
	DefinedInfo.prototype = new Info();
	DefinedInfo.prototype.defined = true;
	var checks = [
		"boolean",
		"booleanish",
		"overloadedBoolean",
		"number",
		"commaSeparated",
		"spaceSeparated",
		"commaOrSpaceSeparated"
	];
	var checksLength = checks.length;
	function DefinedInfo(property, attribute, mask, space) {
		var index = -1;
		var check;
		mark(this, "space", space);
		Info.call(this, property, attribute);
		while (++index < checksLength) {
			check = checks[index];
			mark(this, check, (mask & types[check]) === types[check]);
		}
	}
	function mark(values, key, value) {
		if (value) values[key] = value;
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/util/create.js
var require_create = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var normalize = require_normalize();
	var Schema = require_schema();
	var DefinedInfo = require_defined_info();
	module.exports = create;
	function create(definition) {
		var space = definition.space;
		var mustUseProperty = definition.mustUseProperty || [];
		var attributes = definition.attributes || {};
		var props = definition.properties;
		var transform = definition.transform;
		var property = {};
		var normal = {};
		var prop;
		var info;
		for (prop in props) {
			info = new DefinedInfo(prop, transform(attributes, prop), props[prop], space);
			if (mustUseProperty.indexOf(prop) !== -1) info.mustUseProperty = true;
			property[prop] = info;
			normal[normalize(prop)] = prop;
			normal[normalize(info.attribute)] = prop;
		}
		return new Schema(property, normal, space);
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/xlink.js
var require_xlink = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_create()({
		space: "xlink",
		transform: xlinkTransform,
		properties: {
			xLinkActuate: null,
			xLinkArcRole: null,
			xLinkHref: null,
			xLinkRole: null,
			xLinkShow: null,
			xLinkTitle: null,
			xLinkType: null
		}
	});
	function xlinkTransform(_, prop) {
		return "xlink:" + prop.slice(5).toLowerCase();
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/xml.js
var require_xml = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_create()({
		space: "xml",
		transform: xmlTransform,
		properties: {
			xmlLang: null,
			xmlBase: null,
			xmlSpace: null
		}
	});
	function xmlTransform(_, prop) {
		return "xml:" + prop.slice(3).toLowerCase();
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/util/case-sensitive-transform.js
var require_case_sensitive_transform = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = caseSensitiveTransform;
	function caseSensitiveTransform(attributes, attribute) {
		return attribute in attributes ? attributes[attribute] : attribute;
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/util/case-insensitive-transform.js
var require_case_insensitive_transform = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var caseSensitiveTransform = require_case_sensitive_transform();
	module.exports = caseInsensitiveTransform;
	function caseInsensitiveTransform(attributes, property) {
		return caseSensitiveTransform(attributes, property.toLowerCase());
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/xmlns.js
var require_xmlns = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_create()({
		space: "xmlns",
		attributes: { xmlnsxlink: "xmlns:xlink" },
		transform: require_case_insensitive_transform(),
		properties: {
			xmlns: null,
			xmlnsXLink: null
		}
	});
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/aria.js
var require_aria = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var types = require_types();
	var create = require_create();
	var booleanish = types.booleanish;
	var number = types.number;
	var spaceSeparated = types.spaceSeparated;
	module.exports = create({
		transform: ariaTransform,
		properties: {
			ariaActiveDescendant: null,
			ariaAtomic: booleanish,
			ariaAutoComplete: null,
			ariaBusy: booleanish,
			ariaChecked: booleanish,
			ariaColCount: number,
			ariaColIndex: number,
			ariaColSpan: number,
			ariaControls: spaceSeparated,
			ariaCurrent: null,
			ariaDescribedBy: spaceSeparated,
			ariaDetails: null,
			ariaDisabled: booleanish,
			ariaDropEffect: spaceSeparated,
			ariaErrorMessage: null,
			ariaExpanded: booleanish,
			ariaFlowTo: spaceSeparated,
			ariaGrabbed: booleanish,
			ariaHasPopup: null,
			ariaHidden: booleanish,
			ariaInvalid: null,
			ariaKeyShortcuts: null,
			ariaLabel: null,
			ariaLabelledBy: spaceSeparated,
			ariaLevel: number,
			ariaLive: null,
			ariaModal: booleanish,
			ariaMultiLine: booleanish,
			ariaMultiSelectable: booleanish,
			ariaOrientation: null,
			ariaOwns: spaceSeparated,
			ariaPlaceholder: null,
			ariaPosInSet: number,
			ariaPressed: booleanish,
			ariaReadOnly: booleanish,
			ariaRelevant: null,
			ariaRequired: booleanish,
			ariaRoleDescription: spaceSeparated,
			ariaRowCount: number,
			ariaRowIndex: number,
			ariaRowSpan: number,
			ariaSelected: booleanish,
			ariaSetSize: number,
			ariaSort: null,
			ariaValueMax: number,
			ariaValueMin: number,
			ariaValueNow: number,
			ariaValueText: null,
			role: null
		}
	});
	function ariaTransform(_, prop) {
		return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/lib/html.js
var require_html$2 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var types = require_types();
	var create = require_create();
	var caseInsensitiveTransform = require_case_insensitive_transform();
	var boolean = types.boolean;
	var overloadedBoolean = types.overloadedBoolean;
	var booleanish = types.booleanish;
	var number = types.number;
	var spaceSeparated = types.spaceSeparated;
	var commaSeparated = types.commaSeparated;
	module.exports = create({
		space: "html",
		attributes: {
			acceptcharset: "accept-charset",
			classname: "class",
			htmlfor: "for",
			httpequiv: "http-equiv"
		},
		transform: caseInsensitiveTransform,
		mustUseProperty: [
			"checked",
			"multiple",
			"muted",
			"selected"
		],
		properties: {
			abbr: null,
			accept: commaSeparated,
			acceptCharset: spaceSeparated,
			accessKey: spaceSeparated,
			action: null,
			allow: null,
			allowFullScreen: boolean,
			allowPaymentRequest: boolean,
			allowUserMedia: boolean,
			alt: null,
			as: null,
			async: boolean,
			autoCapitalize: null,
			autoComplete: spaceSeparated,
			autoFocus: boolean,
			autoPlay: boolean,
			capture: boolean,
			charSet: null,
			checked: boolean,
			cite: null,
			className: spaceSeparated,
			cols: number,
			colSpan: null,
			content: null,
			contentEditable: booleanish,
			controls: boolean,
			controlsList: spaceSeparated,
			coords: number | commaSeparated,
			crossOrigin: null,
			data: null,
			dateTime: null,
			decoding: null,
			default: boolean,
			defer: boolean,
			dir: null,
			dirName: null,
			disabled: boolean,
			download: overloadedBoolean,
			draggable: booleanish,
			encType: null,
			enterKeyHint: null,
			form: null,
			formAction: null,
			formEncType: null,
			formMethod: null,
			formNoValidate: boolean,
			formTarget: null,
			headers: spaceSeparated,
			height: number,
			hidden: boolean,
			high: number,
			href: null,
			hrefLang: null,
			htmlFor: spaceSeparated,
			httpEquiv: spaceSeparated,
			id: null,
			imageSizes: null,
			imageSrcSet: commaSeparated,
			inputMode: null,
			integrity: null,
			is: null,
			isMap: boolean,
			itemId: null,
			itemProp: spaceSeparated,
			itemRef: spaceSeparated,
			itemScope: boolean,
			itemType: spaceSeparated,
			kind: null,
			label: null,
			lang: null,
			language: null,
			list: null,
			loading: null,
			loop: boolean,
			low: number,
			manifest: null,
			max: null,
			maxLength: number,
			media: null,
			method: null,
			min: null,
			minLength: number,
			multiple: boolean,
			muted: boolean,
			name: null,
			nonce: null,
			noModule: boolean,
			noValidate: boolean,
			onAbort: null,
			onAfterPrint: null,
			onAuxClick: null,
			onBeforePrint: null,
			onBeforeUnload: null,
			onBlur: null,
			onCancel: null,
			onCanPlay: null,
			onCanPlayThrough: null,
			onChange: null,
			onClick: null,
			onClose: null,
			onContextMenu: null,
			onCopy: null,
			onCueChange: null,
			onCut: null,
			onDblClick: null,
			onDrag: null,
			onDragEnd: null,
			onDragEnter: null,
			onDragExit: null,
			onDragLeave: null,
			onDragOver: null,
			onDragStart: null,
			onDrop: null,
			onDurationChange: null,
			onEmptied: null,
			onEnded: null,
			onError: null,
			onFocus: null,
			onFormData: null,
			onHashChange: null,
			onInput: null,
			onInvalid: null,
			onKeyDown: null,
			onKeyPress: null,
			onKeyUp: null,
			onLanguageChange: null,
			onLoad: null,
			onLoadedData: null,
			onLoadedMetadata: null,
			onLoadEnd: null,
			onLoadStart: null,
			onMessage: null,
			onMessageError: null,
			onMouseDown: null,
			onMouseEnter: null,
			onMouseLeave: null,
			onMouseMove: null,
			onMouseOut: null,
			onMouseOver: null,
			onMouseUp: null,
			onOffline: null,
			onOnline: null,
			onPageHide: null,
			onPageShow: null,
			onPaste: null,
			onPause: null,
			onPlay: null,
			onPlaying: null,
			onPopState: null,
			onProgress: null,
			onRateChange: null,
			onRejectionHandled: null,
			onReset: null,
			onResize: null,
			onScroll: null,
			onSecurityPolicyViolation: null,
			onSeeked: null,
			onSeeking: null,
			onSelect: null,
			onSlotChange: null,
			onStalled: null,
			onStorage: null,
			onSubmit: null,
			onSuspend: null,
			onTimeUpdate: null,
			onToggle: null,
			onUnhandledRejection: null,
			onUnload: null,
			onVolumeChange: null,
			onWaiting: null,
			onWheel: null,
			open: boolean,
			optimum: number,
			pattern: null,
			ping: spaceSeparated,
			placeholder: null,
			playsInline: boolean,
			poster: null,
			preload: null,
			readOnly: boolean,
			referrerPolicy: null,
			rel: spaceSeparated,
			required: boolean,
			reversed: boolean,
			rows: number,
			rowSpan: number,
			sandbox: spaceSeparated,
			scope: null,
			scoped: boolean,
			seamless: boolean,
			selected: boolean,
			shape: null,
			size: number,
			sizes: null,
			slot: null,
			span: number,
			spellCheck: booleanish,
			src: null,
			srcDoc: null,
			srcLang: null,
			srcSet: commaSeparated,
			start: number,
			step: null,
			style: null,
			tabIndex: number,
			target: null,
			title: null,
			translate: null,
			type: null,
			typeMustMatch: boolean,
			useMap: null,
			value: booleanish,
			width: number,
			wrap: null,
			align: null,
			aLink: null,
			archive: spaceSeparated,
			axis: null,
			background: null,
			bgColor: null,
			border: number,
			borderColor: null,
			bottomMargin: number,
			cellPadding: null,
			cellSpacing: null,
			char: null,
			charOff: null,
			classId: null,
			clear: null,
			code: null,
			codeBase: null,
			codeType: null,
			color: null,
			compact: boolean,
			declare: boolean,
			event: null,
			face: null,
			frame: null,
			frameBorder: null,
			hSpace: number,
			leftMargin: number,
			link: null,
			longDesc: null,
			lowSrc: null,
			marginHeight: number,
			marginWidth: number,
			noResize: boolean,
			noHref: boolean,
			noShade: boolean,
			noWrap: boolean,
			object: null,
			profile: null,
			prompt: null,
			rev: null,
			rightMargin: number,
			rules: null,
			scheme: null,
			scrolling: booleanish,
			standby: null,
			summary: null,
			text: null,
			topMargin: number,
			valueType: null,
			version: null,
			vAlign: null,
			vLink: null,
			vSpace: number,
			allowTransparency: null,
			autoCorrect: null,
			autoSave: null,
			disablePictureInPicture: boolean,
			disableRemotePlayback: boolean,
			prefix: null,
			property: null,
			results: number,
			security: null,
			unselectable: null
		}
	});
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/html.js
var require_html$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var merge = require_merge();
	var xlink = require_xlink();
	module.exports = merge([
		require_xml(),
		xlink,
		require_xmlns(),
		require_aria(),
		require_html$2()
	]);
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/property-information/find.js
var require_find = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var normalize = require_normalize();
	var DefinedInfo = require_defined_info();
	var Info = require_info();
	var data = "data";
	module.exports = find;
	var valid = /^data[-\w.:]+$/i;
	var dash = /-[a-z]/g;
	var cap = /[A-Z]/g;
	function find(schema, value) {
		var normal = normalize(value);
		var prop = value;
		var Type = Info;
		if (normal in schema.normal) return schema.property[schema.normal[normal]];
		if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
			if (value.charAt(4) === "-") prop = datasetToProperty(value);
			else value = datasetToAttribute(value);
			Type = DefinedInfo;
		}
		return new Type(prop, value);
	}
	function datasetToProperty(attribute) {
		var value = attribute.slice(5).replace(dash, camelcase);
		return data + value.charAt(0).toUpperCase() + value.slice(1);
	}
	function datasetToAttribute(property) {
		var value = property.slice(4);
		if (dash.test(value)) return property;
		value = value.replace(cap, kebab);
		if (value.charAt(0) !== "-") value = "-" + value;
		return data + value;
	}
	function kebab($0) {
		return "-" + $0.toLowerCase();
	}
	function camelcase($0) {
		return $0.charAt(1).toUpperCase();
	}
}));
//#endregion
//#region ../../node_modules/hast-util-parse-selector/index.js
var require_hast_util_parse_selector = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = parse;
	var search = /[#.]/g;
	function parse(selector, defaultTagName) {
		var value = selector || "";
		var name = defaultTagName || "div";
		var props = {};
		var start = 0;
		var subvalue;
		var previous;
		var match;
		while (start < value.length) {
			search.lastIndex = start;
			match = search.exec(value);
			subvalue = value.slice(start, match ? match.index : value.length);
			if (subvalue) {
				if (!previous) name = subvalue;
				else if (previous === "#") props.id = subvalue;
				else if (props.className) props.className.push(subvalue);
				else props.className = [subvalue];
				start += subvalue.length;
			}
			if (match) {
				previous = match[0];
				start++;
			}
		}
		return {
			type: "element",
			tagName: name,
			properties: props,
			children: []
		};
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/space-separated-tokens/index.js
var require_space_separated_tokens = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.parse = parse;
	exports.stringify = stringify;
	var empty = "";
	var space = " ";
	var whiteSpace = /[ \t\n\r\f]+/g;
	function parse(value) {
		var input = String(value || empty).trim();
		return input === empty ? [] : input.split(whiteSpace);
	}
	function stringify(values) {
		return values.join(space).trim();
	}
}));
//#endregion
//#region ../../node_modules/hastscript/node_modules/comma-separated-tokens/index.js
var require_comma_separated_tokens = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.parse = parse;
	exports.stringify = stringify;
	var comma = ",";
	var space = " ";
	var empty = "";
	function parse(value) {
		var values = [];
		var input = String(value || empty);
		var index = input.indexOf(comma);
		var lastIndex = 0;
		var end = false;
		var val;
		while (!end) {
			if (index === -1) {
				index = input.length;
				end = true;
			}
			val = input.slice(lastIndex, index).trim();
			if (val || !end) values.push(val);
			lastIndex = index + 1;
			index = input.indexOf(comma, lastIndex);
		}
		return values;
	}
	function stringify(values, options) {
		var settings = options || {};
		var left = settings.padLeft === false ? empty : space;
		var right = settings.padRight ? space : empty;
		if (values[values.length - 1] === empty) values = values.concat(empty);
		return values.join(right + comma + left).trim();
	}
}));
//#endregion
//#region ../../node_modules/hastscript/factory.js
var require_factory = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var find = require_find();
	var normalize = require_normalize();
	var parseSelector = require_hast_util_parse_selector();
	var spaces = require_space_separated_tokens().parse;
	var commas = require_comma_separated_tokens().parse;
	module.exports = factory;
	var own = {}.hasOwnProperty;
	function factory(schema, defaultTagName, caseSensitive) {
		var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null;
		return h;
		function h(selector, properties) {
			var node = parseSelector(selector, defaultTagName);
			var children = Array.prototype.slice.call(arguments, 2);
			var name = node.tagName.toLowerCase();
			var property;
			node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name;
			if (properties && isChildren(properties, node)) {
				children.unshift(properties);
				properties = null;
			}
			if (properties) for (property in properties) addProperty(node.properties, property, properties[property]);
			addChild(node.children, children);
			if (node.tagName === "template") {
				node.content = {
					type: "root",
					children: node.children
				};
				node.children = [];
			}
			return node;
		}
		function addProperty(properties, key, value) {
			var info;
			var property;
			var result;
			if (value === null || value === void 0 || value !== value) return;
			info = find(schema, key);
			property = info.property;
			result = value;
			if (typeof result === "string") {
				if (info.spaceSeparated) result = spaces(result);
				else if (info.commaSeparated) result = commas(result);
				else if (info.commaOrSpaceSeparated) result = spaces(commas(result).join(" "));
			}
			if (property === "style" && typeof value !== "string") result = style(result);
			if (property === "className" && properties.className) result = properties.className.concat(result);
			properties[property] = parsePrimitives(info, property, result);
		}
	}
	function isChildren(value, node) {
		return typeof value === "string" || "length" in value || isNode(node.tagName, value);
	}
	function isNode(tagName, value) {
		var type = value.type;
		if (tagName === "input" || !type || typeof type !== "string") return false;
		if (typeof value.children === "object" && "length" in value.children) return true;
		type = type.toLowerCase();
		if (tagName === "button") return type !== "menu" && type !== "submit" && type !== "reset" && type !== "button";
		return "value" in value;
	}
	function addChild(nodes, value) {
		var index;
		var length;
		if (typeof value === "string" || typeof value === "number") {
			nodes.push({
				type: "text",
				value: String(value)
			});
			return;
		}
		if (typeof value === "object" && "length" in value) {
			index = -1;
			length = value.length;
			while (++index < length) addChild(nodes, value[index]);
			return;
		}
		if (typeof value !== "object" || !("type" in value)) throw new Error("Expected node, nodes, or string, got `" + value + "`");
		nodes.push(value);
	}
	function parsePrimitives(info, name, value) {
		var index;
		var length;
		var result;
		if (typeof value !== "object" || !("length" in value)) return parsePrimitive(info, name, value);
		length = value.length;
		index = -1;
		result = [];
		while (++index < length) result[index] = parsePrimitive(info, name, value[index]);
		return result;
	}
	function parsePrimitive(info, name, value) {
		var result = value;
		if (info.number || info.positiveNumber) {
			if (!isNaN(result) && result !== "") result = Number(result);
		} else if (info.boolean || info.overloadedBoolean) {
			if (typeof result === "string" && (result === "" || normalize(value) === normalize(name))) result = true;
		}
		return result;
	}
	function style(value) {
		var result = [];
		var key;
		for (key in value) result.push([key, value[key]].join(": "));
		return result.join("; ");
	}
	function createAdjustMap(values) {
		var length = values.length;
		var index = -1;
		var result = {};
		var value;
		while (++index < length) {
			value = values[index];
			result[value.toLowerCase()] = value;
		}
		return result;
	}
}));
//#endregion
//#region ../../node_modules/hastscript/html.js
var require_html = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var schema = require_html$1();
	var html = require_factory()(schema, "div");
	html.displayName = "html";
	module.exports = html;
}));
//#endregion
//#region ../../node_modules/hastscript/index.js
var require_hastscript = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_html();
}));
//#endregion
export { init_predicate as C, isPlainObject as D, init_isPlainObject as E, require_memoizerific as O, mergeWith as S, isEqual as T, init_pick as _, init_array as a, omit as b, countBy as c, nanoid as d, dequal as f, toMerged as g, init_toMerged as h, throttle as i, require_hoist_non_react_statics_cjs as k, init_countBy as l, init_object as m, init_function as n, init_partition as o, init_dist as p, init_throttle as r, partition as s, require_hastscript as t, init_index_browser as u, pick as v, init_isEqual as w, init_mergeWith as x, init_omit as y };
