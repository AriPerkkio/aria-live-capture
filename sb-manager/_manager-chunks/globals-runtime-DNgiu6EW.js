import { t as __commonJSMin } from "./globals-runtime-XrdeG17s.js";
import { n as require_react_dom_production_min } from "./globals-runtime-D23RyaMd.js";
//#region ../../node_modules/react-dom/node_modules/scheduler/cjs/scheduler.production.min.js
/**
* @license React
* scheduler.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_scheduler_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	function f(a, b) {
		var c = a.length;
		a.push(b);
		a: for (; 0 < c;) {
			var d = c - 1 >>> 1, e = a[d];
			if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
			else break a;
		}
	}
	function h(a) {
		return 0 === a.length ? null : a[0];
	}
	function k(a) {
		if (0 === a.length) return null;
		var b = a[0], c = a.pop();
		if (c !== b) {
			a[0] = c;
			a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
				var m = 2 * (d + 1) - 1, C = a[m], n = m + 1, x = a[n];
				if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);
				else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;
				else break a;
			}
		}
		return b;
	}
	function g(a, b) {
		var c = a.sortIndex - b.sortIndex;
		return 0 !== c ? c : a.id - b.id;
	}
	if ("object" === typeof performance && "function" === typeof performance.now) {
		var l = performance;
		exports.unstable_now = function() {
			return l.now();
		};
	} else {
		var p = Date, q = p.now();
		exports.unstable_now = function() {
			return p.now() - q;
		};
	}
	var r = [];
	var t = [];
	var u = 1;
	var v = null;
	var y = 3;
	var z = !1;
	var A = !1;
	var B = !1;
	var D = "function" === typeof setTimeout ? setTimeout : null;
	var E = "function" === typeof clearTimeout ? clearTimeout : null;
	var F = "undefined" !== typeof setImmediate ? setImmediate : null;
	"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
	function G(a) {
		for (var b = h(t); null !== b;) {
			if (null === b.callback) k(t);
			else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);
			else break;
			b = h(t);
		}
	}
	function H(a) {
		B = !1;
		G(a);
		if (!A) if (null !== h(r)) A = !0, I(J);
		else {
			var b = h(t);
			null !== b && K(H, b.startTime - a);
		}
	}
	function J(a, b) {
		A = !1;
		B && (B = !1, E(L), L = -1);
		z = !0;
		var c = y;
		try {
			G(b);
			for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
				var d = v.callback;
				if ("function" === typeof d) {
					v.callback = null;
					y = v.priorityLevel;
					var e = d(v.expirationTime <= b);
					b = exports.unstable_now();
					"function" === typeof e ? v.callback = e : v === h(r) && k(r);
					G(b);
				} else k(r);
				v = h(r);
			}
			if (null !== v) var w = !0;
			else {
				var m = h(t);
				null !== m && K(H, m.startTime - b);
				w = !1;
			}
			return w;
		} finally {
			v = null, y = c, z = !1;
		}
	}
	var N = !1;
	var O = null;
	var L = -1;
	var P = 5;
	var Q = -1;
	function M() {
		return exports.unstable_now() - Q < P ? !1 : !0;
	}
	function R() {
		if (null !== O) {
			var a = exports.unstable_now();
			Q = a;
			var b = !0;
			try {
				b = O(!0, a);
			} finally {
				b ? S() : (N = !1, O = null);
			}
		} else N = !1;
	}
	var S;
	if ("function" === typeof F) S = function() {
		F(R);
	};
	else if ("undefined" !== typeof MessageChannel) {
		var T = new MessageChannel(), U = T.port2;
		T.port1.onmessage = R;
		S = function() {
			U.postMessage(null);
		};
	} else S = function() {
		D(R, 0);
	};
	function I(a) {
		O = a;
		N || (N = !0, S());
	}
	function K(a, b) {
		L = D(function() {
			a(exports.unstable_now());
		}, b);
	}
	exports.unstable_IdlePriority = 5;
	exports.unstable_ImmediatePriority = 1;
	exports.unstable_LowPriority = 4;
	exports.unstable_NormalPriority = 3;
	exports.unstable_Profiling = null;
	exports.unstable_UserBlockingPriority = 2;
	exports.unstable_cancelCallback = function(a) {
		a.callback = null;
	};
	exports.unstable_continueExecution = function() {
		A || z || (A = !0, I(J));
	};
	exports.unstable_forceFrameRate = function(a) {
		0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1e3 / a) : 5;
	};
	exports.unstable_getCurrentPriorityLevel = function() {
		return y;
	};
	exports.unstable_getFirstCallbackNode = function() {
		return h(r);
	};
	exports.unstable_next = function(a) {
		switch (y) {
			case 1:
			case 2:
			case 3:
				var b = 3;
				break;
			default: b = y;
		}
		var c = y;
		y = b;
		try {
			return a();
		} finally {
			y = c;
		}
	};
	exports.unstable_pauseExecution = function() {};
	exports.unstable_requestPaint = function() {};
	exports.unstable_runWithPriority = function(a, b) {
		switch (a) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5: break;
			default: a = 3;
		}
		var c = y;
		y = a;
		try {
			return b();
		} finally {
			y = c;
		}
	};
	exports.unstable_scheduleCallback = function(a, b, c) {
		var d = exports.unstable_now();
		"object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
		switch (a) {
			case 1:
				var e = -1;
				break;
			case 2:
				e = 250;
				break;
			case 5:
				e = 1073741823;
				break;
			case 4:
				e = 1e4;
				break;
			default: e = 5e3;
		}
		e = c + e;
		a = {
			id: u++,
			callback: b,
			priorityLevel: a,
			startTime: c,
			expirationTime: e,
			sortIndex: -1
		};
		c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
		return a;
	};
	exports.unstable_shouldYield = M;
	exports.unstable_wrapCallback = function(a) {
		var b = y;
		return function() {
			var c = y;
			y = b;
			try {
				return a.apply(this, arguments);
			} finally {
				y = c;
			}
		};
	};
}));
//#endregion
//#region ../../node_modules/react-dom/node_modules/scheduler/index.js
var require_scheduler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_scheduler_production_min();
}));
//#endregion
//#region ../../node_modules/react-dom/index.js
var require_react_dom = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function checkDCE() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") return;
		try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
		} catch (err) {
			console.error(err);
		}
	}
	checkDCE();
	module.exports = require_react_dom_production_min();
}));
//#endregion
//#region ../../node_modules/react-is/cjs/react-is.production.min.js
/** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_production_min = /* @__PURE__ */ __commonJSMin(((exports) => {
	var b = "function" === typeof Symbol && Symbol.for;
	var c = b ? Symbol.for("react.element") : 60103;
	var d = b ? Symbol.for("react.portal") : 60106;
	var e = b ? Symbol.for("react.fragment") : 60107;
	var f = b ? Symbol.for("react.strict_mode") : 60108;
	var g = b ? Symbol.for("react.profiler") : 60114;
	var h = b ? Symbol.for("react.provider") : 60109;
	var k = b ? Symbol.for("react.context") : 60110;
	var l = b ? Symbol.for("react.async_mode") : 60111;
	var m = b ? Symbol.for("react.concurrent_mode") : 60111;
	var n = b ? Symbol.for("react.forward_ref") : 60112;
	var p = b ? Symbol.for("react.suspense") : 60113;
	var q = b ? Symbol.for("react.suspense_list") : 60120;
	var r = b ? Symbol.for("react.memo") : 60115;
	var t = b ? Symbol.for("react.lazy") : 60116;
	var v = b ? Symbol.for("react.block") : 60121;
	var w = b ? Symbol.for("react.fundamental") : 60117;
	var x = b ? Symbol.for("react.responder") : 60118;
	var y = b ? Symbol.for("react.scope") : 60119;
	function z(a) {
		if ("object" === typeof a && null !== a) {
			var u = a.$$typeof;
			switch (u) {
				case c: switch (a = a.type, a) {
					case l:
					case m:
					case e:
					case g:
					case f:
					case p: return a;
					default: switch (a = a && a.$$typeof, a) {
						case k:
						case n:
						case t:
						case r:
						case h: return a;
						default: return u;
					}
				}
				case d: return u;
			}
		}
	}
	function A(a) {
		return z(a) === m;
	}
	exports.AsyncMode = l;
	exports.ConcurrentMode = m;
	exports.ContextConsumer = k;
	exports.ContextProvider = h;
	exports.Element = c;
	exports.ForwardRef = n;
	exports.Fragment = e;
	exports.Lazy = t;
	exports.Memo = r;
	exports.Portal = d;
	exports.Profiler = g;
	exports.StrictMode = f;
	exports.Suspense = p;
	exports.isAsyncMode = function(a) {
		return A(a) || z(a) === l;
	};
	exports.isConcurrentMode = A;
	exports.isContextConsumer = function(a) {
		return z(a) === k;
	};
	exports.isContextProvider = function(a) {
		return z(a) === h;
	};
	exports.isElement = function(a) {
		return "object" === typeof a && null !== a && a.$$typeof === c;
	};
	exports.isForwardRef = function(a) {
		return z(a) === n;
	};
	exports.isFragment = function(a) {
		return z(a) === e;
	};
	exports.isLazy = function(a) {
		return z(a) === t;
	};
	exports.isMemo = function(a) {
		return z(a) === r;
	};
	exports.isPortal = function(a) {
		return z(a) === d;
	};
	exports.isProfiler = function(a) {
		return z(a) === g;
	};
	exports.isStrictMode = function(a) {
		return z(a) === f;
	};
	exports.isSuspense = function(a) {
		return z(a) === p;
	};
	exports.isValidElementType = function(a) {
		return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
	};
	exports.typeOf = z;
}));
//#endregion
export { require_react_dom as n, require_scheduler as r, require_react_is_production_min as t };
