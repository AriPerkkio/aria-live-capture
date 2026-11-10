import { n as __esmMin, t as __commonJSMin } from "./runtime-XrdeG17s.js";
import { d as init_dist$1, u as equal } from "./runtime-DqOdIqaJ.js";
import { n as src_default, t as init_dist$2 } from "./runtime-CD3p6Bu2.js";
//#region ../../node_modules/shallowequal/index.js
var require_shallowequal = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
		var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
		if (ret !== void 0) return !!ret;
		if (objA === objB) return true;
		if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) return false;
		var keysA = Object.keys(objA);
		var keysB = Object.keys(objB);
		if (keysA.length !== keysB.length) return false;
		var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
		for (var idx = 0; idx < keysA.length; idx++) {
			var key = keysA[idx];
			if (!bHasOwnProperty(key)) return false;
			var valueA = objA[key];
			var valueB = objB[key];
			ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
			if (ret === false || ret === void 0 && valueA !== valueB) return false;
		}
		return true;
	};
}));
//#endregion
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
//#region ../../node_modules/tree-changes/dist/index.mjs
function canHaveLength(...arguments_) {
	return arguments_.every((d) => src_default.string(d) || src_default.array(d) || src_default.plainObject(d));
}
function checkEquality(left, right, value) {
	if (!isSameType(left, right)) return false;
	if ([left, right].every(src_default.array)) return !left.some(hasValue(value)) && right.some(hasValue(value));
	if ([left, right].every(src_default.plainObject)) return !Object.entries(left).some(hasEntry(value)) && Object.entries(right).some(hasEntry(value));
	return right === value;
}
function compareNumbers(previousData, data, options) {
	const { actual, key, previous, type } = options;
	const left = nested(previousData, key);
	const right = nested(data, key);
	let changed = [left, right].every(src_default.number) && (type === "increased" ? left < right : left > right);
	if (!src_default.undefined(actual)) changed = changed && right === actual;
	if (!src_default.undefined(previous)) changed = changed && left === previous;
	return changed;
}
function compareValues(previousData, data, options) {
	const { key, type, value } = options;
	const left = nested(previousData, key);
	const right = nested(data, key);
	const primary = type === "added" ? left : right;
	const secondary = type === "added" ? right : left;
	if (!src_default.nullOrUndefined(value)) {
		if (src_default.defined(primary)) {
			if (src_default.array(primary) || src_default.plainObject(primary)) return checkEquality(primary, secondary, value);
		} else return equal(secondary, value);
		return false;
	}
	if ([left, right].every(src_default.array)) return !secondary.every(isEqualPredicate(primary));
	if ([left, right].every(src_default.plainObject)) return hasExtraKeys(Object.keys(primary), Object.keys(secondary));
	return ![left, right].every((d) => src_default.primitive(d) && src_default.defined(d)) && (type === "added" ? !src_default.defined(left) && src_default.defined(right) : src_default.defined(left) && !src_default.defined(right));
}
function getIterables(previousData, data, { key } = {}) {
	let left = nested(previousData, key);
	let right = nested(data, key);
	if (!isSameType(left, right)) throw new TypeError("Inputs have different types");
	if (!canHaveLength(left, right)) throw new TypeError("Inputs don't have length");
	if ([left, right].every(src_default.plainObject)) {
		left = Object.keys(left);
		right = Object.keys(right);
	}
	return [left, right];
}
function hasEntry(input) {
	return ([key, value]) => {
		if (src_default.array(input)) return equal(input, value) || input.some((d) => equal(d, value) || src_default.array(value) && isEqualPredicate(value)(d));
		if (src_default.plainObject(input) && input[key]) return !!input[key] && equal(input[key], value);
		return equal(input, value);
	};
}
function hasExtraKeys(left, right) {
	return right.some((d) => !left.includes(d));
}
function hasValue(input) {
	return (value) => {
		if (src_default.array(input)) return input.some((d) => equal(d, value) || src_default.array(value) && isEqualPredicate(value)(d));
		return equal(input, value);
	};
}
function includesOrEqualsTo(previousValue, value) {
	return src_default.array(previousValue) ? previousValue.some((d) => equal(d, value)) : equal(previousValue, value);
}
function isEqualPredicate(data) {
	return (value) => data.some((d) => equal(d, value));
}
function isSameType(...arguments_) {
	return arguments_.every(src_default.array) || arguments_.every(src_default.number) || arguments_.every(src_default.plainObject) || arguments_.every(src_default.string);
}
function nested(data, property) {
	if (src_default.plainObject(data) || src_default.array(data)) {
		if (src_default.string(property)) return property.split(".").reduce((acc, d) => acc && acc[d], data);
		if (src_default.number(property)) return data[property];
		return data;
	}
	return data;
}
function treeChanges(previousData, data) {
	if ([previousData, data].some(src_default.nullOrUndefined)) throw new Error("Missing required parameters");
	if (![previousData, data].every((d) => src_default.plainObject(d) || src_default.array(d))) throw new Error("Expected plain objects or array");
	const added = (key, value) => {
		try {
			return compareValues(previousData, data, {
				key,
				type: "added",
				value
			});
		} catch {
			return false;
		}
	};
	const changed = (key, actual, previous) => {
		try {
			const left = nested(previousData, key);
			const right = nested(data, key);
			const hasActual = src_default.defined(actual);
			const hasPrevious = src_default.defined(previous);
			if (hasActual || hasPrevious) {
				const leftComparator = hasPrevious ? includesOrEqualsTo(previous, left) : !includesOrEqualsTo(actual, left);
				const rightComparator = includesOrEqualsTo(actual, right);
				return leftComparator && rightComparator;
			}
			if ([left, right].every(src_default.array) || [left, right].every(src_default.plainObject)) return !equal(left, right);
			return left !== right;
		} catch {
			return false;
		}
	};
	const changedFrom = (key, previous, actual) => {
		if (!src_default.defined(key)) return false;
		try {
			const left = nested(previousData, key);
			const right = nested(data, key);
			const hasActual = src_default.defined(actual);
			return includesOrEqualsTo(previous, left) && (hasActual ? includesOrEqualsTo(actual, right) : !hasActual);
		} catch {
			return false;
		}
	};
	const decreased = (key, actual, previous) => {
		if (!src_default.defined(key)) return false;
		try {
			return compareNumbers(previousData, data, {
				key,
				actual,
				previous,
				type: "decreased"
			});
		} catch {
			return false;
		}
	};
	const emptied = (key) => {
		try {
			const [left, right] = getIterables(previousData, data, { key });
			return !!left.length && !right.length;
		} catch {
			return false;
		}
	};
	const filled = (key) => {
		try {
			const [left, right] = getIterables(previousData, data, { key });
			return !left.length && !!right.length;
		} catch {
			return false;
		}
	};
	const increased = (key, actual, previous) => {
		if (!src_default.defined(key)) return false;
		try {
			return compareNumbers(previousData, data, {
				key,
				actual,
				previous,
				type: "increased"
			});
		} catch {
			return false;
		}
	};
	const removed = (key, value) => {
		try {
			return compareValues(previousData, data, {
				key,
				type: "removed",
				value
			});
		} catch {
			return false;
		}
	};
	return {
		added,
		changed,
		changedFrom,
		decreased,
		emptied,
		filled,
		increased,
		removed
	};
}
var init_dist = __esmMin((() => {
	init_dist$1();
	init_dist$2();
}));
//#endregion
//#region ../../node_modules/scroll/index.js
var require_scroll = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var E_NOSCROLL = /* @__PURE__ */ new Error("Element already at target scroll position");
	var E_CANCELLED = /* @__PURE__ */ new Error("Scroll cancelled");
	var min = Math.min;
	var ms = Date.now;
	module.exports = {
		left: make("scrollLeft"),
		top: make("scrollTop")
	};
	function make(prop) {
		return function scroll(el, to, opts, cb) {
			opts = opts || {};
			if (typeof opts == "function") cb = opts, opts = {};
			if (typeof cb != "function") cb = noop;
			var start = ms();
			var from = el[prop];
			var ease = opts.ease || inOutSine;
			var duration = !isNaN(opts.duration) ? +opts.duration : 350;
			var cancelled = false;
			return from === to ? cb(E_NOSCROLL, el[prop]) : requestAnimationFrame(animate), cancel;
			function cancel() {
				cancelled = true;
			}
			function animate(timestamp) {
				if (cancelled) return cb(E_CANCELLED, el[prop]);
				var time = min(1, (ms() - start) / duration);
				el[prop] = ease(time) * (to - from) + from;
				time < 1 ? requestAnimationFrame(animate) : requestAnimationFrame(function() {
					cb(null, el[prop]);
				});
			}
		};
	}
	function inOutSine(n) {
		return .5 * (1 - Math.cos(Math.PI * n));
	}
	function noop() {}
}));
//#endregion
//#region ../../node_modules/scrollparent/scrollparent.js
var require_scrollparent = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(root, factory) {
		if (typeof define === "function" && define.amd) define([], factory);
		else if (typeof module === "object" && module.exports) module.exports = factory();
		else root.Scrollparent = factory();
	})(exports, function() {
		function isScrolling(node) {
			var overflow = getComputedStyle(node, null).getPropertyValue("overflow");
			return overflow.indexOf("scroll") > -1 || overflow.indexOf("auto") > -1;
		}
		function scrollParent(node) {
			if (!(node instanceof HTMLElement || node instanceof SVGElement)) return;
			var current = node.parentNode;
			while (current.parentNode) {
				if (isScrolling(current)) return current;
				current = current.parentNode;
			}
			return document.scrollingElement || document.documentElement;
		}
		return scrollParent;
	});
}));
//#endregion
//#region ../../node_modules/tslib/tslib.es6.mjs
var __assign;
var init_tslib_es6 = __esmMin((() => {
	__assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
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
export { require_scroll as a, dedent as c, require_scrollparent as i, init_esm as l, __assign as n, init_dist as o, init_tslib_es6 as r, treeChanges as s, require_store2 as t, require_shallowequal as u };
