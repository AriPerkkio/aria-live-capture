import { a as __toESM, n as __esmMin, t as __commonJSMin } from "./runtime-XrdeG17s.js";
import { Br as init__storybook_global_react, Fr as _storybook_global_react_default, Gr as useEffect, Ir as cloneElement, Jr as useMemo, Nr as Component, Rr as createElement, Ur as useCallback, Vr as isValidElement, Xr as useRef, Yr as useReducer, Zr as useState, _ as init__storybook_global_react_dom, h as createPortal, m as _storybook_global_react_dom_default, v as unmountComponentAtNode, y as unstable_renderSubtreeIntoContainer } from "./runtime-CCGFWiML.js";
import { d as init_dist$1, j as require_browser, l as require_cjs, u as equal$1 } from "./runtime-DqOdIqaJ.js";
import { n as init_popper, r as require_prop_types, t as Popper } from "./runtime-CP0ch2aS.js";
import { t as require_react_fast_compare } from "./runtime-CcUJTTJx.js";
import { a as require_scroll, i as require_scrollparent, o as init_dist$2, s as treeChanges$1, u as require_shallowequal } from "./runtime-B9T0K19t.js";
import { n as src_default, t as init_dist$3 } from "./runtime-CD3p6Bu2.js";
//#region ../../node_modules/react-helmet-async/lib/index.module.js
function a() {
	return a = Object.assign || function(t) {
		for (var e = 1; e < arguments.length; e++) {
			var r = arguments[e];
			for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
		}
		return t;
	}, a.apply(this, arguments);
}
function s(t, e) {
	t.prototype = Object.create(e.prototype), t.prototype.constructor = t, c(t, e);
}
function c(t, e) {
	return c = Object.setPrototypeOf || function(t, e) {
		return t.__proto__ = e, t;
	}, c(t, e);
}
function u(t, e) {
	if (null == t) return {};
	var r, n, i = {}, o = Object.keys(t);
	for (n = 0; n < o.length; n++) e.indexOf(r = o[n]) >= 0 || (i[r] = t[r]);
	return i;
}
var import_prop_types$1, import_react_fast_compare, import_browser, import_shallowequal, l, p, f, d, h, m, y, T, g, b, v, A, C, O, S, E, I, P, w, x, L, j, M, k, H, N, R, D, U, q, Y, B, K, _, z, F, G, W;
var init_index_module = __esmMin((() => {
	init__storybook_global_react();
	import_prop_types$1 = /* @__PURE__ */ __toESM(require_prop_types());
	import_react_fast_compare = /* @__PURE__ */ __toESM(require_react_fast_compare());
	import_browser = /* @__PURE__ */ __toESM(require_browser());
	import_shallowequal = /* @__PURE__ */ __toESM(require_shallowequal());
	l = {
		BASE: "base",
		BODY: "body",
		HEAD: "head",
		HTML: "html",
		LINK: "link",
		META: "meta",
		NOSCRIPT: "noscript",
		SCRIPT: "script",
		STYLE: "style",
		TITLE: "title",
		FRAGMENT: "Symbol(react.fragment)"
	};
	p = { rel: [
		"amphtml",
		"canonical",
		"alternate"
	] };
	f = { type: ["application/ld+json"] };
	d = {
		charset: "",
		name: ["robots", "description"],
		property: [
			"og:type",
			"og:title",
			"og:url",
			"og:image",
			"og:image:alt",
			"og:description",
			"twitter:url",
			"twitter:title",
			"twitter:description",
			"twitter:image",
			"twitter:image:alt",
			"twitter:card",
			"twitter:site"
		]
	};
	h = Object.keys(l).map(function(t) {
		return l[t];
	});
	m = {
		accesskey: "accessKey",
		charset: "charSet",
		class: "className",
		contenteditable: "contentEditable",
		contextmenu: "contextMenu",
		"http-equiv": "httpEquiv",
		itemprop: "itemProp",
		tabindex: "tabIndex"
	};
	y = Object.keys(m).reduce(function(t, e) {
		return t[m[e]] = e, t;
	}, {});
	T = function(t, e) {
		for (var r = t.length - 1; r >= 0; r -= 1) {
			var n = t[r];
			if (Object.prototype.hasOwnProperty.call(n, e)) return n[e];
		}
		return null;
	};
	g = function(t) {
		var e = T(t, l.TITLE), r = T(t, "titleTemplate");
		if (Array.isArray(e) && (e = e.join("")), r && e) return r.replace(/%s/g, function() {
			return e;
		});
		var n = T(t, "defaultTitle");
		return e || n || void 0;
	};
	b = function(t) {
		return T(t, "onChangeClientState") || function() {};
	};
	v = function(t, e) {
		return e.filter(function(e) {
			return void 0 !== e[t];
		}).map(function(e) {
			return e[t];
		}).reduce(function(t, e) {
			return a({}, t, e);
		}, {});
	};
	A = function(t, e) {
		return e.filter(function(t) {
			return void 0 !== t[l.BASE];
		}).map(function(t) {
			return t[l.BASE];
		}).reverse().reduce(function(e, r) {
			if (!e.length) for (var n = Object.keys(r), i = 0; i < n.length; i += 1) {
				var o = n[i].toLowerCase();
				if (-1 !== t.indexOf(o) && r[o]) return e.concat(r);
			}
			return e;
		}, []);
	};
	C = function(t, e, r) {
		var n = {};
		return r.filter(function(e) {
			return !!Array.isArray(e[t]) || (void 0 !== e[t] && console && "function" == typeof console.warn && console.warn("Helmet: " + t + " should be of type \"Array\". Instead found type \"" + typeof e[t] + "\""), !1);
		}).map(function(e) {
			return e[t];
		}).reverse().reduce(function(t, r) {
			var i = {};
			r.filter(function(t) {
				for (var r, o = Object.keys(t), a = 0; a < o.length; a += 1) {
					var s = o[a], c = s.toLowerCase();
					-1 === e.indexOf(c) || "rel" === r && "canonical" === t[r].toLowerCase() || "rel" === c && "stylesheet" === t[c].toLowerCase() || (r = c), -1 === e.indexOf(s) || "innerHTML" !== s && "cssText" !== s && "itemprop" !== s || (r = s);
				}
				if (!r || !t[r]) return !1;
				var u = t[r].toLowerCase();
				return n[r] || (n[r] = {}), i[r] || (i[r] = {}), !n[r][u] && (i[r][u] = !0, !0);
			}).reverse().forEach(function(e) {
				return t.push(e);
			});
			for (var o = Object.keys(i), s = 0; s < o.length; s += 1) {
				var c = o[s];
				n[c] = a({}, n[c], i[c]);
			}
			return t;
		}, []).reverse();
	};
	O = function(t, e) {
		if (Array.isArray(t) && t.length) {
			for (var r = 0; r < t.length; r += 1) if (t[r][e]) return !0;
		}
		return !1;
	};
	S = function(t) {
		return Array.isArray(t) ? t.join("") : t;
	};
	E = function(t, e) {
		return Array.isArray(t) ? t.reduce(function(t, r) {
			return function(t, e) {
				for (var r = Object.keys(t), n = 0; n < r.length; n += 1) if (e[r[n]] && e[r[n]].includes(t[r[n]])) return !0;
				return !1;
			}(r, e) ? t.priority.push(r) : t.default.push(r), t;
		}, {
			priority: [],
			default: []
		}) : { default: t };
	};
	I = function(t, e) {
		var r;
		return a({}, t, ((r = {})[e] = void 0, r));
	};
	P = [
		l.NOSCRIPT,
		l.SCRIPT,
		l.STYLE
	];
	w = function(t, e) {
		return void 0 === e && (e = !0), !1 === e ? String(t) : String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
	};
	x = function(t) {
		return Object.keys(t).reduce(function(e, r) {
			var n = void 0 !== t[r] ? r + "=\"" + t[r] + "\"" : "" + r;
			return e ? e + " " + n : n;
		}, "");
	};
	L = function(t, e) {
		return void 0 === e && (e = {}), Object.keys(t).reduce(function(e, r) {
			return e[m[r] || r] = t[r], e;
		}, e);
	};
	j = function(e, r) {
		return r.map(function(r, n) {
			var i, o = ((i = { key: n })["data-rh"] = !0, i);
			return Object.keys(r).forEach(function(t) {
				var e = m[t] || t;
				"innerHTML" === e || "cssText" === e ? o.dangerouslySetInnerHTML = { __html: r.innerHTML || r.cssText } : o[e] = r[t];
			}), _storybook_global_react_default.createElement(e, o);
		});
	};
	M = function(e, r, n) {
		switch (e) {
			case l.TITLE: return {
				toComponent: function() {
					return n = r.titleAttributes, (i = { key: e = r.title })["data-rh"] = !0, o = L(n, i), [_storybook_global_react_default.createElement(l.TITLE, o, e)];
					var e, n, i, o;
				},
				toString: function() {
					return function(t, e, r, n) {
						var i = x(r), o = S(e);
						return i ? "<" + t + " data-rh=\"true\" " + i + ">" + w(o, n) + "</" + t + ">" : "<" + t + " data-rh=\"true\">" + w(o, n) + "</" + t + ">";
					}(e, r.title, r.titleAttributes, n);
				}
			};
			case "bodyAttributes":
			case "htmlAttributes": return {
				toComponent: function() {
					return L(r);
				},
				toString: function() {
					return x(r);
				}
			};
			default: return {
				toComponent: function() {
					return j(e, r);
				},
				toString: function() {
					return function(t, e, r) {
						return e.reduce(function(e, n) {
							var i = Object.keys(n).filter(function(t) {
								return !("innerHTML" === t || "cssText" === t);
							}).reduce(function(t, e) {
								var i = void 0 === n[e] ? e : e + "=\"" + w(n[e], r) + "\"";
								return t ? t + " " + i : i;
							}, ""), o = n.innerHTML || n.cssText || "", a = -1 === P.indexOf(t);
							return e + "<" + t + " data-rh=\"true\" " + i + (a ? "/>" : ">" + o + "</" + t + ">");
						}, "");
					}(e, r, n);
				}
			};
		}
	};
	k = function(t) {
		var e = t.baseTag, r = t.bodyAttributes, n = t.encode, i = t.htmlAttributes, o = t.noscriptTags, a = t.styleTags, s = t.title, c = void 0 === s ? "" : s, u = t.titleAttributes, h = t.linkTags, m = t.metaTags, y = t.scriptTags, T = {
			toComponent: function() {},
			toString: function() {
				return "";
			}
		};
		if (t.prioritizeSeoTags) {
			var g = function(t) {
				var e = t.linkTags, r = t.scriptTags, n = t.encode, i = E(t.metaTags, d), o = E(e, p), a = E(r, f);
				return {
					priorityMethods: {
						toComponent: function() {
							return [].concat(j(l.META, i.priority), j(l.LINK, o.priority), j(l.SCRIPT, a.priority));
						},
						toString: function() {
							return M(l.META, i.priority, n) + " " + M(l.LINK, o.priority, n) + " " + M(l.SCRIPT, a.priority, n);
						}
					},
					metaTags: i.default,
					linkTags: o.default,
					scriptTags: a.default
				};
			}(t);
			T = g.priorityMethods, h = g.linkTags, m = g.metaTags, y = g.scriptTags;
		}
		return {
			priority: T,
			base: M(l.BASE, e, n),
			bodyAttributes: M("bodyAttributes", r, n),
			htmlAttributes: M("htmlAttributes", i, n),
			link: M(l.LINK, h, n),
			meta: M(l.META, m, n),
			noscript: M(l.NOSCRIPT, o, n),
			script: M(l.SCRIPT, y, n),
			style: M(l.STYLE, a, n),
			title: M(l.TITLE, {
				title: c,
				titleAttributes: u
			}, n)
		};
	};
	H = [];
	N = function(t, e) {
		var r = this;
		void 0 === e && (e = "undefined" != typeof document), this.instances = [], this.value = {
			setHelmet: function(t) {
				r.context.helmet = t;
			},
			helmetInstances: {
				get: function() {
					return r.canUseDOM ? H : r.instances;
				},
				add: function(t) {
					(r.canUseDOM ? H : r.instances).push(t);
				},
				remove: function(t) {
					var e = (r.canUseDOM ? H : r.instances).indexOf(t);
					(r.canUseDOM ? H : r.instances).splice(e, 1);
				}
			}
		}, this.context = t, this.canUseDOM = e, e || (t.helmet = k({
			baseTag: [],
			bodyAttributes: {},
			encodeSpecialCharacters: !0,
			htmlAttributes: {},
			linkTags: [],
			metaTags: [],
			noscriptTags: [],
			scriptTags: [],
			styleTags: [],
			title: "",
			titleAttributes: {}
		}));
	};
	R = _storybook_global_react_default.createContext({});
	D = import_prop_types$1.default.shape({
		setHelmet: import_prop_types$1.default.func,
		helmetInstances: import_prop_types$1.default.shape({
			get: import_prop_types$1.default.func,
			add: import_prop_types$1.default.func,
			remove: import_prop_types$1.default.func
		})
	});
	U = "undefined" != typeof document;
	q = /*#__PURE__*/ function(e) {
		function r(t) {
			var n;
			return (n = e.call(this, t) || this).helmetData = new N(n.props.context, r.canUseDOM), n;
		}
		return s(r, e), r.prototype.render = function() {
			/*#__PURE__*/ return _storybook_global_react_default.createElement(R.Provider, { value: this.helmetData.value }, this.props.children);
		}, r;
	}(Component);
	q.canUseDOM = U, q.propTypes = {
		context: import_prop_types$1.default.shape({ helmet: import_prop_types$1.default.shape() }),
		children: import_prop_types$1.default.node.isRequired
	}, q.defaultProps = { context: {} }, q.displayName = "HelmetProvider";
	Y = function(t, e) {
		var r, n = document.head || document.querySelector(l.HEAD), i = n.querySelectorAll(t + "[data-rh]"), o = [].slice.call(i), a = [];
		return e && e.length && e.forEach(function(e) {
			var n = document.createElement(t);
			for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && ("innerHTML" === i ? n.innerHTML = e.innerHTML : "cssText" === i ? n.styleSheet ? n.styleSheet.cssText = e.cssText : n.appendChild(document.createTextNode(e.cssText)) : n.setAttribute(i, void 0 === e[i] ? "" : e[i]));
			n.setAttribute("data-rh", "true"), o.some(function(t, e) {
				return r = e, n.isEqualNode(t);
			}) ? o.splice(r, 1) : a.push(n);
		}), o.forEach(function(t) {
			return t.parentNode.removeChild(t);
		}), a.forEach(function(t) {
			return n.appendChild(t);
		}), {
			oldTags: o,
			newTags: a
		};
	};
	B = function(t, e) {
		var r = document.getElementsByTagName(t)[0];
		if (r) {
			for (var n = r.getAttribute("data-rh"), i = n ? n.split(",") : [], o = [].concat(i), a = Object.keys(e), s = 0; s < a.length; s += 1) {
				var c = a[s], u = e[c] || "";
				r.getAttribute(c) !== u && r.setAttribute(c, u), -1 === i.indexOf(c) && i.push(c);
				var l = o.indexOf(c);
				-1 !== l && o.splice(l, 1);
			}
			for (var p = o.length - 1; p >= 0; p -= 1) r.removeAttribute(o[p]);
			i.length === o.length ? r.removeAttribute("data-rh") : r.getAttribute("data-rh") !== a.join(",") && r.setAttribute("data-rh", a.join(","));
		}
	};
	K = function(t, e) {
		var r = t.baseTag, n = t.htmlAttributes, i = t.linkTags, o = t.metaTags, a = t.noscriptTags, s = t.onChangeClientState, c = t.scriptTags, u = t.styleTags, p = t.title, f = t.titleAttributes;
		B(l.BODY, t.bodyAttributes), B(l.HTML, n), function(t, e) {
			void 0 !== t && document.title !== t && (document.title = S(t)), B(l.TITLE, e);
		}(p, f);
		var d = {
			baseTag: Y(l.BASE, r),
			linkTags: Y(l.LINK, i),
			metaTags: Y(l.META, o),
			noscriptTags: Y(l.NOSCRIPT, a),
			scriptTags: Y(l.SCRIPT, c),
			styleTags: Y(l.STYLE, u)
		}, h = {}, m = {};
		Object.keys(d).forEach(function(t) {
			var e = d[t], r = e.newTags, n = e.oldTags;
			r.length && (h[t] = r), n.length && (m[t] = d[t].oldTags);
		}), e && e(), s(t, h, m);
	};
	_ = null;
	z = /*#__PURE__*/ function(t) {
		function e() {
			for (var e, r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
			return (e = t.call.apply(t, [this].concat(n)) || this).rendered = !1, e;
		}
		s(e, t);
		var r = e.prototype;
		return r.shouldComponentUpdate = function(t) {
			return !(0, import_shallowequal.default)(t, this.props);
		}, r.componentDidUpdate = function() {
			this.emitChange();
		}, r.componentWillUnmount = function() {
			this.props.context.helmetInstances.remove(this), this.emitChange();
		}, r.emitChange = function() {
			var t, e, r = this.props.context, n = r.setHelmet, i = null, o = (t = r.helmetInstances.get().map(function(t) {
				var e = a({}, t.props);
				return delete e.context, e;
			}), {
				baseTag: A(["href"], t),
				bodyAttributes: v("bodyAttributes", t),
				defer: T(t, "defer"),
				encode: T(t, "encodeSpecialCharacters"),
				htmlAttributes: v("htmlAttributes", t),
				linkTags: C(l.LINK, ["rel", "href"], t),
				metaTags: C(l.META, [
					"name",
					"charset",
					"http-equiv",
					"property",
					"itemprop"
				], t),
				noscriptTags: C(l.NOSCRIPT, ["innerHTML"], t),
				onChangeClientState: b(t),
				scriptTags: C(l.SCRIPT, ["src", "innerHTML"], t),
				styleTags: C(l.STYLE, ["cssText"], t),
				title: g(t),
				titleAttributes: v("titleAttributes", t),
				prioritizeSeoTags: O(t, "prioritizeSeoTags")
			});
			q.canUseDOM ? (e = o, _ && cancelAnimationFrame(_), e.defer ? _ = requestAnimationFrame(function() {
				K(e, function() {
					_ = null;
				});
			}) : (K(e), _ = null)) : k && (i = k(o)), n(i);
		}, r.init = function() {
			this.rendered || (this.rendered = !0, this.props.context.helmetInstances.add(this), this.emitChange());
		}, r.render = function() {
			return this.init(), null;
		}, e;
	}(Component);
	z.propTypes = { context: D.isRequired }, z.displayName = "HelmetDispatcher";
	F = ["children"];
	G = ["children"];
	W = /*#__PURE__*/ function(e) {
		function r() {
			return e.apply(this, arguments) || this;
		}
		s(r, e);
		var o = r.prototype;
		return o.shouldComponentUpdate = function(t) {
			return !(0, import_react_fast_compare.default)(I(this.props, "helmetData"), I(t, "helmetData"));
		}, o.mapNestedChildrenToProps = function(t, e) {
			if (!e) return null;
			switch (t.type) {
				case l.SCRIPT:
				case l.NOSCRIPT: return { innerHTML: e };
				case l.STYLE: return { cssText: e };
				default: throw new Error("<" + t.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
			}
		}, o.flattenArrayTypeChildren = function(t) {
			var e, r = t.child, n = t.arrayTypeChildren;
			return a({}, n, ((e = {})[r.type] = [].concat(n[r.type] || [], [a({}, t.newChildProps, this.mapNestedChildrenToProps(r, t.nestedChildren))]), e));
		}, o.mapObjectTypeChildren = function(t) {
			var e, r, n = t.child, i = t.newProps, o = t.newChildProps, s = t.nestedChildren;
			switch (n.type) {
				case l.TITLE: return a({}, i, ((e = {})[n.type] = s, e.titleAttributes = a({}, o), e));
				case l.BODY: return a({}, i, { bodyAttributes: a({}, o) });
				case l.HTML: return a({}, i, { htmlAttributes: a({}, o) });
				default: return a({}, i, ((r = {})[n.type] = a({}, o), r));
			}
		}, o.mapArrayTypeChildrenToProps = function(t, e) {
			var r = a({}, e);
			return Object.keys(t).forEach(function(e) {
				var n;
				r = a({}, r, ((n = {})[e] = t[e], n));
			}), r;
		}, o.warnOnInvalidChildren = function(t, e) {
			return (0, import_browser.default)(h.some(function(e) {
				return t.type === e;
			}), "function" == typeof t.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + h.join(", ") + " are allowed. Helmet does not support rendering <" + t.type + "> elements. Refer to our API for more information."), (0, import_browser.default)(!e || "string" == typeof e || Array.isArray(e) && !e.some(function(t) {
				return "string" != typeof t;
			}), "Helmet expects a string as a child of <" + t.type + ">. Did you forget to wrap your children in braces? ( <" + t.type + ">{``}</" + t.type + "> ) Refer to our API for more information."), !0;
		}, o.mapChildrenToProps = function(e, r) {
			var n = this, i = {};
			return _storybook_global_react_default.Children.forEach(e, function(t) {
				if (t && t.props) {
					var e = t.props, o = e.children, a = u(e, F), s = Object.keys(a).reduce(function(t, e) {
						return t[y[e] || e] = a[e], t;
					}, {}), c = t.type;
					switch ("symbol" == typeof c ? c = c.toString() : n.warnOnInvalidChildren(t, o), c) {
						case l.FRAGMENT:
							r = n.mapChildrenToProps(o, r);
							break;
						case l.LINK:
						case l.META:
						case l.NOSCRIPT:
						case l.SCRIPT:
						case l.STYLE:
							i = n.flattenArrayTypeChildren({
								child: t,
								arrayTypeChildren: i,
								newChildProps: s,
								nestedChildren: o
							});
							break;
						default: r = n.mapObjectTypeChildren({
							child: t,
							newProps: r,
							newChildProps: s,
							nestedChildren: o
						});
					}
				}
			}), this.mapArrayTypeChildrenToProps(i, r);
		}, o.render = function() {
			var e = this.props, r = e.children, n = u(e, G), i = a({}, n), o = n.helmetData;
			return r && (i = this.mapChildrenToProps(r, i)), !o || o instanceof N || (o = new N(o.context, o.instances)), o ? /*#__PURE__*/ _storybook_global_react_default.createElement(z, a({}, i, {
				context: o.value,
				helmetData: void 0
			})) : /*#__PURE__*/ _storybook_global_react_default.createElement(R.Consumer, null, function(e) {
				/*#__PURE__*/ return _storybook_global_react_default.createElement(z, a({}, i, { context: e }));
			});
		}, r;
	}(Component);
	W.propTypes = {
		base: import_prop_types$1.default.object,
		bodyAttributes: import_prop_types$1.default.object,
		children: import_prop_types$1.default.oneOfType([import_prop_types$1.default.arrayOf(import_prop_types$1.default.node), import_prop_types$1.default.node]),
		defaultTitle: import_prop_types$1.default.string,
		defer: import_prop_types$1.default.bool,
		encodeSpecialCharacters: import_prop_types$1.default.bool,
		htmlAttributes: import_prop_types$1.default.object,
		link: import_prop_types$1.default.arrayOf(import_prop_types$1.default.object),
		meta: import_prop_types$1.default.arrayOf(import_prop_types$1.default.object),
		noscript: import_prop_types$1.default.arrayOf(import_prop_types$1.default.object),
		onChangeClientState: import_prop_types$1.default.func,
		script: import_prop_types$1.default.arrayOf(import_prop_types$1.default.object),
		style: import_prop_types$1.default.arrayOf(import_prop_types$1.default.object),
		title: import_prop_types$1.default.string,
		titleAttributes: import_prop_types$1.default.object,
		titleTemplate: import_prop_types$1.default.string,
		prioritizeSeoTags: import_prop_types$1.default.bool,
		helmetData: import_prop_types$1.default.object
	}, W.defaultProps = {
		defer: !0,
		encodeSpecialCharacters: !0,
		prioritizeSeoTags: !1
	}, W.displayName = "Helmet";
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/flags/flags.mjs
function $6a20a7989e6c817a$export$98658e8c59125e6a() {
	return $6a20a7989e6c817a$var$_shadowDOM;
}
var $6a20a7989e6c817a$var$_shadowDOM;
var init_flags$1 = __esmMin((() => {
	$6a20a7989e6c817a$var$_shadowDOM = false;
}));
//#endregion
//#region ../../node_modules/react-stately/dist/exports/private/flags/flags.mjs
var init_flags = __esmMin((() => {
	init_flags$1();
})), STATUS$2, getState, startOrEnd, getEndStatus, getTimeout, nextTick;
var init_utils$1 = __esmMin((() => {
	STATUS$2 = [
		"preEnter",
		"entering",
		"entered",
		"preExit",
		"exiting",
		"exited",
		"unmounted"
	];
	getState = (status) => ({
		_s: status,
		status: STATUS$2[status],
		isEnter: status < 3,
		isMounted: status !== 6,
		isResolved: status === 2 || status > 4
	});
	startOrEnd = (unmounted) => unmounted ? 6 : 5;
	getEndStatus = (status, unmountOnExit) => {
		switch (status) {
			case 1:
			case 0: return 2;
			case 4:
			case 3: return startOrEnd(unmountOnExit);
		}
	};
	getTimeout = (timeout) => typeof timeout === "object" ? [timeout.enter, timeout.exit] : [timeout, timeout];
	nextTick = (transitState, status) => setTimeout(() => {
		isNaN(document.body.offsetTop) || transitState(status + 1);
	}, 0);
}));
//#endregion
//#region ../../node_modules/react-transition-state/dist/esm/hooks/useTransitionState.mjs
var updateState$1, useTransitionState;
var init_useTransitionState = __esmMin((() => {
	init__storybook_global_react();
	init_utils$1();
	updateState$1 = (status, setState, latestState, timeoutId, onChange) => {
		clearTimeout(timeoutId.current);
		const state = getState(status);
		setState(state);
		latestState.current = state;
		onChange && onChange({ current: state });
	};
	useTransitionState = ({ enter = true, exit = true, preEnter, preExit, timeout, initialEntered, mountOnEnter, unmountOnExit, onStateChange: onChange } = {}) => {
		const [state, setState] = useState(() => getState(initialEntered ? 2 : startOrEnd(mountOnEnter)));
		const latestState = useRef(state);
		const timeoutId = useRef();
		const [enterTimeout, exitTimeout] = getTimeout(timeout);
		const endTransition = useCallback(() => {
			const status = getEndStatus(latestState.current._s, unmountOnExit);
			status && updateState$1(status, setState, latestState, timeoutId, onChange);
		}, [onChange, unmountOnExit]);
		return [
			state,
			useCallback((toEnter) => {
				const transitState = (status) => {
					updateState$1(status, setState, latestState, timeoutId, onChange);
					switch (status) {
						case 1:
							if (enterTimeout >= 0) timeoutId.current = setTimeout(endTransition, enterTimeout);
							break;
						case 4:
							if (exitTimeout >= 0) timeoutId.current = setTimeout(endTransition, exitTimeout);
							break;
						case 0:
						case 3:
							timeoutId.current = nextTick(transitState, status);
							break;
					}
				};
				const enterStage = latestState.current.isEnter;
				if (typeof toEnter !== "boolean") toEnter = !enterStage;
				if (toEnter) !enterStage && transitState(enter ? preEnter ? 0 : 1 : 2);
				else enterStage && transitState(exit ? preExit ? 3 : 4 : startOrEnd(unmountOnExit));
			}, [
				endTransition,
				onChange,
				enter,
				exit,
				preEnter,
				preExit,
				enterTimeout,
				exitTimeout,
				unmountOnExit
			]),
			endTransition
		];
	};
}));
//#endregion
//#region ../../node_modules/react-transition-state/dist/esm/hooks/useTransitionMap.mjs
var updateState, useTransitionMap;
var init_useTransitionMap = __esmMin((() => {
	init__storybook_global_react();
	init_utils$1();
	updateState = (key, status, setStateMap, latestStateMap, timeoutId, onChange) => {
		clearTimeout(timeoutId);
		const state = getState(status);
		const stateMap = new Map(latestStateMap.current);
		stateMap.set(key, state);
		setStateMap(stateMap);
		latestStateMap.current = stateMap;
		onChange && onChange({
			key,
			current: state
		});
	};
	useTransitionMap = ({ allowMultiple, enter = true, exit = true, preEnter, preExit, timeout, initialEntered, mountOnEnter, unmountOnExit, onStateChange: onChange } = {}) => {
		const [stateMap, setStateMap] = useState(/* @__PURE__ */ new Map());
		const latestStateMap = useRef(stateMap);
		const configMap = useRef(/* @__PURE__ */ new Map());
		const [enterTimeout, exitTimeout] = getTimeout(timeout);
		const setItem = useCallback((key, config) => {
			const { initialEntered: _initialEntered = initialEntered } = config || {};
			const status = _initialEntered ? 2 : startOrEnd(mountOnEnter);
			updateState(key, status, setStateMap, latestStateMap);
			configMap.current.set(key, {});
		}, [initialEntered, mountOnEnter]);
		const deleteItem = useCallback((key) => {
			const newStateMap = new Map(latestStateMap.current);
			if (newStateMap.delete(key)) {
				setStateMap(newStateMap);
				latestStateMap.current = newStateMap;
				configMap.current.delete(key);
				return true;
			}
			return false;
		}, []);
		const endTransition = useCallback((key) => {
			const stateObj = latestStateMap.current.get(key);
			if (!stateObj) return;
			const { timeoutId } = configMap.current.get(key);
			const status = getEndStatus(stateObj._s, unmountOnExit);
			status && updateState(key, status, setStateMap, latestStateMap, timeoutId, onChange);
		}, [onChange, unmountOnExit]);
		const toggle = useCallback((key, toEnter) => {
			const stateObj = latestStateMap.current.get(key);
			if (!stateObj) return;
			const config = configMap.current.get(key);
			const transitState = (status) => {
				updateState(key, status, setStateMap, latestStateMap, config.timeoutId, onChange);
				switch (status) {
					case 1:
						if (enterTimeout >= 0) config.timeoutId = setTimeout(() => endTransition(key), enterTimeout);
						break;
					case 4:
						if (exitTimeout >= 0) config.timeoutId = setTimeout(() => endTransition(key), exitTimeout);
						break;
					case 0:
					case 3:
						config.timeoutId = nextTick(transitState, status);
						break;
				}
			};
			const enterStage = stateObj.isEnter;
			if (typeof toEnter !== "boolean") toEnter = !enterStage;
			if (toEnter) {
				if (!enterStage) {
					transitState(enter ? preEnter ? 0 : 1 : 2);
					!allowMultiple && latestStateMap.current.forEach((_, _key) => _key !== key && toggle(_key, false));
				}
			} else if (enterStage) transitState(exit ? preExit ? 3 : 4 : startOrEnd(unmountOnExit));
		}, [
			onChange,
			endTransition,
			allowMultiple,
			enter,
			exit,
			preEnter,
			preExit,
			enterTimeout,
			exitTimeout,
			unmountOnExit
		]);
		return {
			stateMap,
			toggle,
			toggleAll: useCallback((toEnter) => {
				if (!allowMultiple && toEnter !== false) return;
				for (const key of latestStateMap.current.keys()) toggle(key, toEnter);
			}, [allowMultiple, toggle]),
			endTransition,
			setItem,
			deleteItem
		};
	};
}));
//#endregion
//#region ../../node_modules/react-transition-state/dist/esm/index.mjs
var init_esm$3 = __esmMin((() => {
	init_useTransitionState();
	init_useTransitionMap();
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/utils/number.mjs
/**
* Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest
* valid step.
*/ function $240e9101ba2842f5$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
	return Math.min(Math.max(value, min), max);
}
var init_number$1 = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/react-stately/dist/exports/private/utils/number.mjs
var init_number = __esmMin((() => {
	init_number$1();
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/utils/useControlledState.mjs
function $3e6197669829fe11$export$40bfa8c7b0832715(value, defaultValue, onChange) {
	let [stateValue, setStateValue] = useState(value || defaultValue);
	let valueRef = useRef(stateValue);
	let isControlledRef = useRef(value !== void 0);
	let isControlled = value !== void 0;
	useEffect(() => {
		isControlledRef.current;
		isControlledRef.current = isControlled;
	}, [isControlled]);
	let currentValue = isControlled ? value : stateValue;
	$3e6197669829fe11$var$useEarlyEffect(() => {
		valueRef.current = currentValue;
	});
	let [, forceUpdate] = useReducer(() => ({}), {});
	return [currentValue, useCallback((value, ...args) => {
		let newValue = typeof value === "function" ? value(valueRef.current) : value;
		if (!Object.is(valueRef.current, newValue)) {
			valueRef.current = newValue;
			setStateValue(newValue);
			forceUpdate();
			onChange?.(newValue, ...args);
		}
	}, [onChange])];
}
var $3e6197669829fe11$var$useEarlyEffect;
var init_useControlledState$1 = __esmMin((() => {
	init__storybook_global_react();
	$3e6197669829fe11$var$useEarlyEffect = typeof document !== "undefined" ? _storybook_global_react_default["useInsertionEffect"] ?? _storybook_global_react_default.useLayoutEffect : () => {};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/overlays/useOverlayTriggerState.mjs
function $f11fb0bcf1b2687a$export$61c6a8c84e605fb6(props) {
	let [isOpen, setOpen] = $3e6197669829fe11$export$40bfa8c7b0832715(props.isOpen, props.defaultOpen || false, props.onOpenChange);
	let [point, setPoint] = useState(null);
	return {
		isOpen,
		setOpen,
		open: useCallback(() => {
			setOpen(true);
		}, [setOpen]),
		close: useCallback(() => {
			setOpen(false);
		}, [setOpen]),
		toggle: useCallback(() => {
			setOpen(!isOpen);
		}, [setOpen, isOpen]),
		point,
		setPoint
	};
}
var init_useOverlayTriggerState = __esmMin((() => {
	init_useControlledState$1();
	init__storybook_global_react();
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/tooltip/useTooltipTriggerState.mjs
function $3834487504f4fc00$export$4d40659c25ecb50b(props = {}) {
	let { delay = $3834487504f4fc00$var$TOOLTIP_DELAY, closeDelay = $3834487504f4fc00$var$TOOLTIP_COOLDOWN } = props;
	let { isOpen, open, close } = $f11fb0bcf1b2687a$export$61c6a8c84e605fb6(props);
	let [shouldSkipAnimation, setIsInstant] = useState(false);
	let id = useMemo(() => `${++$3834487504f4fc00$var$tooltipId}`, []);
	let closeTimeout = useRef(null);
	let closeCallback = useRef(close);
	let ensureTooltipEntry = () => {
		$3834487504f4fc00$var$tooltips[id] = hideTooltip;
	};
	let closeOpenTooltips = () => {
		for (let hideTooltipId in $3834487504f4fc00$var$tooltips) if (hideTooltipId !== id) {
			$3834487504f4fc00$var$tooltips[hideTooltipId](true, true);
			delete $3834487504f4fc00$var$tooltips[hideTooltipId];
		}
	};
	let showTooltip = (instant) => {
		if (closeTimeout.current) clearTimeout(closeTimeout.current);
		closeTimeout.current = null;
		closeOpenTooltips();
		ensureTooltipEntry();
		setIsInstant(!!instant);
		$3834487504f4fc00$var$globalWarmedUp = true;
		open();
		if ($3834487504f4fc00$var$globalWarmUpTimeout) {
			clearTimeout($3834487504f4fc00$var$globalWarmUpTimeout);
			$3834487504f4fc00$var$globalWarmUpTimeout = null;
		}
		if ($3834487504f4fc00$var$globalCooldownTimeout) {
			clearTimeout($3834487504f4fc00$var$globalCooldownTimeout);
			$3834487504f4fc00$var$globalCooldownTimeout = null;
		}
	};
	let hideTooltip = (immediate, instant) => {
		setIsInstant(!!instant);
		if (immediate || closeDelay <= 0) {
			if (closeTimeout.current) clearTimeout(closeTimeout.current);
			closeTimeout.current = null;
			closeCallback.current();
		} else if (!closeTimeout.current) closeTimeout.current = setTimeout(() => {
			closeTimeout.current = null;
			closeCallback.current();
		}, closeDelay);
		if ($3834487504f4fc00$var$globalWarmUpTimeout) {
			clearTimeout($3834487504f4fc00$var$globalWarmUpTimeout);
			$3834487504f4fc00$var$globalWarmUpTimeout = null;
		}
		if ($3834487504f4fc00$var$globalWarmedUp) {
			if ($3834487504f4fc00$var$globalCooldownTimeout) clearTimeout($3834487504f4fc00$var$globalCooldownTimeout);
			$3834487504f4fc00$var$globalCooldownTimeout = setTimeout(() => {
				delete $3834487504f4fc00$var$tooltips[id];
				$3834487504f4fc00$var$globalCooldownTimeout = null;
				$3834487504f4fc00$var$globalWarmedUp = false;
			}, Math.max($3834487504f4fc00$var$TOOLTIP_COOLDOWN, closeDelay));
		}
	};
	let warmupTooltip = () => {
		closeOpenTooltips();
		ensureTooltipEntry();
		if (!isOpen && !$3834487504f4fc00$var$globalWarmedUp) {
			if ($3834487504f4fc00$var$globalWarmUpTimeout) clearTimeout($3834487504f4fc00$var$globalWarmUpTimeout);
			$3834487504f4fc00$var$globalWarmUpTimeout = setTimeout(() => {
				$3834487504f4fc00$var$globalWarmUpTimeout = null;
				$3834487504f4fc00$var$globalWarmedUp = true;
				showTooltip(false);
			}, delay);
		} else if (!isOpen) showTooltip(true);
	};
	useEffect(() => {
		closeCallback.current = close;
	}, [close]);
	useEffect(() => {
		return () => {
			if (closeTimeout.current) clearTimeout(closeTimeout.current);
			if ($3834487504f4fc00$var$tooltips[id]) delete $3834487504f4fc00$var$tooltips[id];
		};
	}, [id]);
	return {
		isOpen,
		shouldSkipAnimation,
		open: (immediate) => {
			if (!immediate && delay > 0 && !closeTimeout.current) warmupTooltip();
			else showTooltip($3834487504f4fc00$var$globalWarmedUp);
		},
		close: hideTooltip
	};
}
var $3834487504f4fc00$var$TOOLTIP_DELAY, $3834487504f4fc00$var$TOOLTIP_COOLDOWN, $3834487504f4fc00$var$tooltips, $3834487504f4fc00$var$tooltipId, $3834487504f4fc00$var$globalWarmedUp, $3834487504f4fc00$var$globalWarmUpTimeout, $3834487504f4fc00$var$globalCooldownTimeout;
var init_useTooltipTriggerState$1 = __esmMin((() => {
	init_useOverlayTriggerState();
	init__storybook_global_react();
	$3834487504f4fc00$var$TOOLTIP_DELAY = 1500;
	$3834487504f4fc00$var$TOOLTIP_COOLDOWN = 500;
	$3834487504f4fc00$var$tooltips = {};
	$3834487504f4fc00$var$tooltipId = 0;
	$3834487504f4fc00$var$globalWarmedUp = false;
	$3834487504f4fc00$var$globalWarmUpTimeout = null;
	$3834487504f4fc00$var$globalCooldownTimeout = null;
}));
//#endregion
//#region ../../node_modules/react-stately/dist/exports/useTooltipTriggerState.mjs
var init_useTooltipTriggerState = __esmMin((() => {
	init_useTooltipTriggerState$1();
}));
//#endregion
//#region ../../node_modules/react-innertext/index.js
var require_react_innertext = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var hasProps = function(jsx) {
		return Object.prototype.hasOwnProperty.call(jsx, "props");
	};
	var reduceJsxToString = function(previous, current) {
		return previous + innerText(current);
	};
	var innerText = function(jsx) {
		if (jsx === null || typeof jsx === "boolean" || typeof jsx === "undefined") return "";
		if (typeof jsx === "number") return jsx.toString();
		if (typeof jsx === "string") return jsx;
		if (Array.isArray(jsx)) return jsx.reduce(reduceJsxToString, "");
		if (hasProps(jsx) && Object.prototype.hasOwnProperty.call(jsx.props, "children")) return innerText(jsx.props.children);
		return "";
	};
	innerText.default = innerText;
	module.exports = innerText;
}));
//#endregion
//#region ../../node_modules/react-floater/node_modules/is-lite/esm/types.js
var init_types$1 = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/react-floater/node_modules/is-lite/esm/index.js
function getObjectType$1(value) {
	var objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
	if (/HTML\w+Element/.test(objectTypeName)) return "HTMLElement";
	if (isObjectType(objectTypeName)) return objectTypeName;
}
function isObjectOfType(type) {
	return function(value) {
		return getObjectType$1(value) === type;
	};
}
function isObjectType(name) {
	return objectTypes.includes(name);
}
function isOfType$1(type) {
	return function(value) {
		return typeof value === type;
	};
}
function isPrimitiveType(name) {
	return primitiveTypes.includes(name);
}
function is(value) {
	if (value === null) return "null";
	switch (typeof value) {
		case "bigint": return "bigint";
		case "boolean": return "boolean";
		case "number": return "number";
		case "string": return "string";
		case "symbol": return "symbol";
		case "undefined": return "undefined";
		default:
	}
	if (is.array(value)) return "Array";
	if (is.plainFunction(value)) return "Function";
	var tagType = getObjectType$1(value);
	/* istanbul ignore else */
	if (tagType) return tagType;
	/* istanbul ignore next */
	return "Object";
}
var DOM_PROPERTIES_TO_CHECK, objectTypes, primitiveTypes;
var init_esm$2 = __esmMin((() => {
	init_types$1();
	DOM_PROPERTIES_TO_CHECK = [
		"innerHTML",
		"ownerDocument",
		"style",
		"attributes",
		"nodeValue"
	];
	objectTypes = [
		"Array",
		"ArrayBuffer",
		"AsyncFunction",
		"AsyncGenerator",
		"AsyncGeneratorFunction",
		"Date",
		"Error",
		"Function",
		"Generator",
		"GeneratorFunction",
		"HTMLElement",
		"Map",
		"Object",
		"Promise",
		"RegExp",
		"Set",
		"WeakMap",
		"WeakSet"
	];
	primitiveTypes = [
		"bigint",
		"boolean",
		"null",
		"number",
		"string",
		"symbol",
		"undefined"
	];
	is.array = Array.isArray;
	is.arrayOf = function(target, predicate) {
		if (!is.array(target) && !is.function(predicate)) return false;
		return target.every(function(d) {
			return predicate(d);
		});
	};
	is.asyncGeneratorFunction = function(value) {
		return getObjectType$1(value) === "AsyncGeneratorFunction";
	};
	is.asyncFunction = isObjectOfType("AsyncFunction");
	is.bigint = isOfType$1("bigint");
	is.boolean = function(value) {
		return value === true || value === false;
	};
	is.date = isObjectOfType("Date");
	is.defined = function(value) {
		return !is.undefined(value);
	};
	is.domElement = function(value) {
		return is.object(value) && !is.plainObject(value) && value.nodeType === 1 && is.string(value.nodeName) && DOM_PROPERTIES_TO_CHECK.every(function(property) {
			return property in value;
		});
	};
	is.empty = function(value) {
		return is.string(value) && value.length === 0 || is.array(value) && value.length === 0 || is.object(value) && !is.map(value) && !is.set(value) && Object.keys(value).length === 0 || is.set(value) && value.size === 0 || is.map(value) && value.size === 0;
	};
	is.error = isObjectOfType("Error");
	is.function = isOfType$1("function");
	is.generator = function(value) {
		return is.iterable(value) && is.function(value.next) && is.function(value.throw);
	};
	is.generatorFunction = isObjectOfType("GeneratorFunction");
	is.instanceOf = function(instance, class_) {
		if (!instance || !class_) return false;
		return Object.getPrototypeOf(instance) === class_.prototype;
	};
	is.iterable = function(value) {
		return !is.nullOrUndefined(value) && is.function(value[Symbol.iterator]);
	};
	is.map = isObjectOfType("Map");
	is.nan = function(value) {
		return Number.isNaN(value);
	};
	is.null = function(value) {
		return value === null;
	};
	is.nullOrUndefined = function(value) {
		return is.null(value) || is.undefined(value);
	};
	is.number = function(value) {
		return isOfType$1("number")(value) && !is.nan(value);
	};
	is.numericString = function(value) {
		return is.string(value) && value.length > 0 && !Number.isNaN(Number(value));
	};
	is.object = function(value) {
		return !is.nullOrUndefined(value) && (is.function(value) || typeof value === "object");
	};
	is.oneOf = function(target, value) {
		if (!is.array(target)) return false;
		return target.indexOf(value) > -1;
	};
	is.plainFunction = isObjectOfType("Function");
	is.plainObject = function(value) {
		if (getObjectType$1(value) !== "Object") return false;
		var prototype = Object.getPrototypeOf(value);
		return prototype === null || prototype === Object.getPrototypeOf({});
	};
	is.primitive = function(value) {
		return is.null(value) || isPrimitiveType(typeof value);
	};
	is.promise = isObjectOfType("Promise");
	is.propertyOf = function(target, key, predicate) {
		if (!is.object(target) || !key) return false;
		var value = target[key];
		if (is.function(predicate)) return predicate(value);
		return is.defined(value);
	};
	is.regexp = isObjectOfType("RegExp");
	is.set = isObjectOfType("Set");
	is.string = isOfType$1("string");
	is.symbol = isOfType$1("symbol");
	is.undefined = isOfType$1("undefined");
	is.weakMap = isObjectOfType("WeakMap");
	is.weakSet = isObjectOfType("WeakSet");
}));
//#endregion
//#region ../../node_modules/react-floater/node_modules/@gilbarbara/deep-equal/esm/helpers.js
function isOfType(type) {
	return function(value) {
		return typeof value === type;
	};
}
var isFunction, isNull, isRegex, isObject, isUndefined;
var init_helpers$1 = __esmMin((() => {
	isFunction = isOfType("function");
	isNull = function(value) {
		return value === null;
	};
	isRegex = function(value) {
		return Object.prototype.toString.call(value).slice(8, -1) === "RegExp";
	};
	isObject = function(value) {
		return !isUndefined(value) && !isNull(value) && (isFunction(value) || typeof value === "object");
	};
	isUndefined = isOfType("undefined");
}));
//#endregion
//#region ../../node_modules/react-floater/node_modules/@gilbarbara/deep-equal/esm/index.js
function equalArray(left, right) {
	var length = left.length;
	if (length !== right.length) return false;
	for (var index = length; index-- !== 0;) if (!equal(left[index], right[index])) return false;
	return true;
}
function equalArrayBuffer(left, right) {
	if (left.byteLength !== right.byteLength) return false;
	var view1 = new DataView(left.buffer);
	var view2 = new DataView(right.buffer);
	var index = left.byteLength;
	while (index--) if (view1.getUint8(index) !== view2.getUint8(index)) return false;
	return true;
}
function equalMap(left, right) {
	var e_1, _a, e_2, _b;
	if (left.size !== right.size) return false;
	try {
		for (var _c = __values(left.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
			var index = _d.value;
			if (!right.has(index[0])) return false;
		}
	} catch (e_1_1) {
		e_1 = { error: e_1_1 };
	} finally {
		try {
			if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
		} finally {
			if (e_1) throw e_1.error;
		}
	}
	try {
		for (var _e = __values(left.entries()), _f = _e.next(); !_f.done; _f = _e.next()) {
			var index = _f.value;
			if (!equal(index[1], right.get(index[0]))) return false;
		}
	} catch (e_2_1) {
		e_2 = { error: e_2_1 };
	} finally {
		try {
			if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
		} finally {
			if (e_2) throw e_2.error;
		}
	}
	return true;
}
function equalSet(left, right) {
	var e_3, _a;
	if (left.size !== right.size) return false;
	try {
		for (var _b = __values(left.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
			var index = _c.value;
			if (!right.has(index[0])) return false;
		}
	} catch (e_3_1) {
		e_3 = { error: e_3_1 };
	} finally {
		try {
			if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
		} finally {
			if (e_3) throw e_3.error;
		}
	}
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
		var leftKeys = Object.keys(left);
		var rightKeys = Object.keys(right);
		if (leftKeys.length !== rightKeys.length) return false;
		for (var index = leftKeys.length; index-- !== 0;) if (!Object.prototype.hasOwnProperty.call(right, leftKeys[index])) return false;
		for (var index = leftKeys.length; index-- !== 0;) {
			var key = leftKeys[index];
			if (key === "_owner" && left.$$typeof) continue;
			if (!equal(left[key], right[key])) return false;
		}
		return true;
	}
	if (Number.isNaN(left) && Number.isNaN(right)) return true;
	return left === right;
}
var __values;
var init_esm$1 = __esmMin((() => {
	init_helpers$1();
	__values = function(o) {
		var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
		if (m) return m.call(o);
		if (o && typeof o.length === "number") return { next: function() {
			if (o && i >= o.length) o = void 0;
			return {
				value: o && o[i++],
				done: !o
			};
		} };
		throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
	};
}));
//#endregion
//#region ../../node_modules/react-floater/node_modules/tree-changes/esm/helpers.js
function canHaveLength() {
	var arguments_ = [];
	for (var _i = 0; _i < arguments.length; _i++) arguments_[_i] = arguments[_i];
	return arguments_.every(function(d) {
		return is.string(d) || is.array(d) || is.plainObject(d);
	});
}
function checkEquality(left, right, value) {
	if (!isSameType(left, right)) return false;
	if ([left, right].every(is.array)) return !left.some(hasValue(value)) && right.some(hasValue(value));
	/* istanbul ignore else */
	if ([left, right].every(is.plainObject)) return !Object.entries(left).some(hasEntry(value)) && Object.entries(right).some(hasEntry(value));
	return right === value;
}
function compareNumbers(previousData, data, options) {
	var actual = options.actual, key = options.key, previous = options.previous, type = options.type;
	var left = nested(previousData, key);
	var right = nested(data, key);
	var changed = [left, right].every(is.number) && (type === "increased" ? left < right : left > right);
	if (!is.undefined(actual)) changed = changed && right === actual;
	if (!is.undefined(previous)) changed = changed && left === previous;
	return changed;
}
function compareValues(previousData, data, options) {
	var key = options.key, type = options.type, value = options.value;
	var left = nested(previousData, key);
	var right = nested(data, key);
	var primary = type === "added" ? left : right;
	var secondary = type === "added" ? right : left;
	if (!is.nullOrUndefined(value)) {
		if (is.defined(primary)) {
			if (is.array(primary) || is.plainObject(primary)) return checkEquality(primary, secondary, value);
		} else return equal(secondary, value);
		return false;
	}
	if ([left, right].every(is.array)) return !secondary.every(isEqualPredicate(primary));
	if ([left, right].every(is.plainObject)) return hasExtraKeys(Object.keys(primary), Object.keys(secondary));
	return ![left, right].every(function(d) {
		return is.primitive(d) && is.defined(d);
	}) && (type === "added" ? !is.defined(left) && is.defined(right) : is.defined(left) && !is.defined(right));
}
function getIterables(previousData, data, _a) {
	var key = (_a === void 0 ? {} : _a).key;
	var left = nested(previousData, key);
	var right = nested(data, key);
	if (!isSameType(left, right)) throw new TypeError("Inputs have different types");
	if (!canHaveLength(left, right)) throw new TypeError("Inputs don't have length");
	if ([left, right].every(is.plainObject)) {
		left = Object.keys(left);
		right = Object.keys(right);
	}
	return [left, right];
}
function hasEntry(input) {
	return function(_a) {
		var key = _a[0], value = _a[1];
		if (is.array(input)) return equal(input, value) || input.some(function(d) {
			return equal(d, value) || is.array(value) && isEqualPredicate(value)(d);
		});
		/* istanbul ignore else */
		if (is.plainObject(input) && input[key]) return !!input[key] && equal(input[key], value);
		return equal(input, value);
	};
}
function hasExtraKeys(left, right) {
	return right.some(function(d) {
		return !left.includes(d);
	});
}
function hasValue(input) {
	return function(value) {
		if (is.array(input)) return input.some(function(d) {
			return equal(d, value) || is.array(value) && isEqualPredicate(value)(d);
		});
		return equal(input, value);
	};
}
function includesOrEqualsTo(previousValue, value) {
	return is.array(previousValue) ? previousValue.some(function(d) {
		return equal(d, value);
	}) : equal(previousValue, value);
}
function isEqualPredicate(data) {
	return function(value) {
		return data.some(function(d) {
			return equal(d, value);
		});
	};
}
function isSameType() {
	var arguments_ = [];
	for (var _i = 0; _i < arguments.length; _i++) arguments_[_i] = arguments[_i];
	return arguments_.every(is.array) || arguments_.every(is.number) || arguments_.every(is.plainObject) || arguments_.every(is.string);
}
function nested(data, property) {
	/* istanbul ignore else */
	if (is.plainObject(data) || is.array(data)) {
		/* istanbul ignore else */
		if (is.string(property)) return property.split(".").reduce(function(acc, d) {
			return acc && acc[d];
		}, data);
		/* istanbul ignore else */
		if (is.number(property)) return data[property];
		return data;
	}
	return data;
}
var init_helpers = __esmMin((() => {
	init_esm$1();
	init_esm$2();
}));
//#endregion
//#region ../../node_modules/react-floater/node_modules/tree-changes/esm/types.js
var init_types = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/react-floater/node_modules/tree-changes/esm/index.js
function treeChanges(previousData, data) {
	if ([previousData, data].some(is.nullOrUndefined)) throw new Error("Missing required parameters");
	if (![previousData, data].every(function(d) {
		return is.plainObject(d) || is.array(d);
	})) throw new Error("Expected plain objects or array");
	var added = function(key, value) {
		try {
			return compareValues(previousData, data, {
				key,
				type: "added",
				value
			});
		} catch (_a) {
			/* istanbul ignore next */
			return false;
		}
	};
	var changed = function(key, actual, previous) {
		try {
			var left = nested(previousData, key);
			var right = nested(data, key);
			var hasActual = is.defined(actual);
			var hasPrevious = is.defined(previous);
			if (hasActual || hasPrevious) {
				var leftComparator = hasPrevious ? includesOrEqualsTo(previous, left) : !includesOrEqualsTo(actual, left);
				var rightComparator = includesOrEqualsTo(actual, right);
				return leftComparator && rightComparator;
			}
			if ([left, right].every(is.array) || [left, right].every(is.plainObject)) return !equal(left, right);
			return left !== right;
		} catch (_a) {
			/* istanbul ignore next */
			return false;
		}
	};
	var changedFrom = function(key, previous, actual) {
		if (!is.defined(key)) return false;
		try {
			var left = nested(previousData, key);
			var right = nested(data, key);
			var hasActual = is.defined(actual);
			return includesOrEqualsTo(previous, left) && (hasActual ? includesOrEqualsTo(actual, right) : !hasActual);
		} catch (_a) {
			/* istanbul ignore next */
			return false;
		}
	};
	/**
	* @deprecated
	* Use "changed" instead
	*/
	var changedTo = function(key, actual) {
		if (!is.defined(key)) return false;
		return changed(key, actual);
	};
	var decreased = function(key, actual, previous) {
		if (!is.defined(key)) return false;
		try {
			return compareNumbers(previousData, data, {
				key,
				actual,
				previous,
				type: "decreased"
			});
		} catch (_a) {
			/* istanbul ignore next */
			return false;
		}
	};
	var emptied = function(key) {
		try {
			var _a = getIterables(previousData, data, { key }), left = _a[0], right = _a[1];
			return !!left.length && !right.length;
		} catch (_b) {
			/* istanbul ignore next */
			return false;
		}
	};
	var filled = function(key) {
		try {
			var _a = getIterables(previousData, data, { key }), left = _a[0], right = _a[1];
			return !left.length && !!right.length;
		} catch (_b) {
			/* istanbul ignore next */
			return false;
		}
	};
	var increased = function(key, actual, previous) {
		if (!is.defined(key)) return false;
		try {
			return compareNumbers(previousData, data, {
				key,
				actual,
				previous,
				type: "increased"
			});
		} catch (_a) {
			/* istanbul ignore next */
			return false;
		}
	};
	var removed = function(key, value) {
		try {
			return compareValues(previousData, data, {
				key,
				type: "removed",
				value
			});
		} catch (_a) {
			/* istanbul ignore next */
			return false;
		}
	};
	return {
		added,
		changed,
		changedFrom,
		changedTo,
		decreased,
		emptied,
		filled,
		increased,
		removed
	};
}
var init_esm = __esmMin((() => {
	init_esm$1();
	init_esm$2();
	init_helpers();
	init_types();
}));
//#endregion
//#region ../../node_modules/react-floater/es/index.js
function ownKeys(e, r) {
	var t = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var o = Object.getOwnPropertySymbols(e);
		r && (o = o.filter(function(r) {
			return Object.getOwnPropertyDescriptor(e, r).enumerable;
		})), t.push.apply(t, o);
	}
	return t;
}
function _objectSpread2(e) {
	for (var r = 1; r < arguments.length; r++) {
		var t = null != arguments[r] ? arguments[r] : {};
		r % 2 ? ownKeys(Object(t), !0).forEach(function(r) {
			_defineProperty(e, r, t[r]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r) {
			Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
		});
	}
	return e;
}
function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
	for (var i = 0; i < props.length; i++) {
		var descriptor = props[i];
		descriptor.enumerable = descriptor.enumerable || false;
		descriptor.configurable = true;
		if ("value" in descriptor) descriptor.writable = true;
		Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	}
}
function _createClass(Constructor, protoProps, staticProps) {
	if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	if (staticProps) _defineProperties(Constructor, staticProps);
	Object.defineProperty(Constructor, "prototype", { writable: false });
	return Constructor;
}
function _defineProperty(obj, key, value) {
	key = _toPropertyKey(key);
	if (key in obj) Object.defineProperty(obj, key, {
		value,
		enumerable: true,
		configurable: true,
		writable: true
	});
	else obj[key] = value;
	return obj;
}
function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
	subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: {
		value: subClass,
		writable: true,
		configurable: true
	} });
	Object.defineProperty(subClass, "prototype", { writable: false });
	if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
	_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
		return o.__proto__ || Object.getPrototypeOf(o);
	};
	return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
	_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
		o.__proto__ = p;
		return o;
	};
	return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
	if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	if (Reflect.construct.sham) return false;
	if (typeof Proxy === "function") return true;
	try {
		Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
		return true;
	} catch (e) {
		return false;
	}
}
function _objectWithoutPropertiesLoose(source, excluded) {
	if (source == null) return {};
	var target = {};
	var sourceKeys = Object.keys(source);
	var key, i;
	for (i = 0; i < sourceKeys.length; i++) {
		key = sourceKeys[i];
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}
function _objectWithoutProperties(source, excluded) {
	if (source == null) return {};
	var target = _objectWithoutPropertiesLoose(source, excluded);
	var key, i;
	if (Object.getOwnPropertySymbols) {
		var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
		for (i = 0; i < sourceSymbolKeys.length; i++) {
			key = sourceSymbolKeys[i];
			if (excluded.indexOf(key) >= 0) continue;
			if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
			target[key] = source[key];
		}
	}
	return target;
}
function _assertThisInitialized(self) {
	if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	return self;
}
function _possibleConstructorReturn(self, call) {
	if (call && (typeof call === "object" || typeof call === "function")) return call;
	else if (call !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
	return _assertThisInitialized(self);
}
function _createSuper(Derived) {
	var hasNativeReflectConstruct = _isNativeReflectConstruct();
	return function _createSuperInternal() {
		var Super = _getPrototypeOf(Derived), result;
		if (hasNativeReflectConstruct) {
			var NewTarget = _getPrototypeOf(this).constructor;
			result = Reflect.construct(Super, arguments, NewTarget);
		} else result = Super.apply(this, arguments);
		return _possibleConstructorReturn(this, result);
	};
}
function _toPrimitive(input, hint) {
	if (typeof input !== "object" || input === null) return input;
	var prim = input[Symbol.toPrimitive];
	if (prim !== void 0) {
		var res = prim.call(input, hint || "default");
		if (typeof res !== "object") return res;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
	var key = _toPrimitive(arg, "string");
	return typeof key === "symbol" ? key : String(key);
}
function propIsRequired(condition, props, propName, componentName) {
	if (typeof condition === "boolean") return condition;
	if (typeof condition === "function") return condition(props, propName, componentName);
	if (Boolean(condition) === true) return Boolean(condition);
	return false;
}
function propExists(props, propName) {
	return Object.hasOwnProperty.call(props, propName);
}
function missingPropError(props, propName, componentName, message) {
	if (message) return new Error(message);
	return new Error("Required ".concat(props[propName], " `").concat(propName, "` was not specified in `").concat(componentName, "`."));
}
function guardAgainstInvalidArgTypes(typeValidator, message) {
	if (typeof typeValidator !== "function") throw new TypeError(VALIDATOR_ARG_ERROR_MESSAGE);
	if (Boolean(message) && typeof message !== "string") throw new TypeError(MESSAGE_ARG_ERROR_MESSAGE);
}
function isRequiredIf(typeValidator, condition, message) {
	guardAgainstInvalidArgTypes(typeValidator, message);
	return function(props, propName, componentName) {
		for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) rest[_key - 3] = arguments[_key];
		if (propIsRequired(condition, props, propName, componentName)) {
			if (propExists(props, propName)) return typeValidator.apply(void 0, [
				props,
				propName,
				componentName
			].concat(rest));
			return missingPropError(props, propName, componentName, message);
		}
		return typeValidator.apply(void 0, [
			props,
			propName,
			componentName
		].concat(rest));
	};
}
function canUseDOM$1() {
	return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function isMobile() {
	return "ontouchstart" in window && /Mobi/.test(navigator.userAgent);
}
/**
* Log method calls if debug is enabled
*
* @private
* @param {Object}       arg
* @param {string}       arg.title    - The title the logger was called from
* @param {Object|Array} [arg.data]   - The data to be logged
* @param {boolean}      [arg.warn]  - If true, the message will be a warning
* @param {boolean}      [arg.debug] - Nothing will be logged unless debug is true
*/ function log$1(_ref) {
	var title = _ref.title, data = _ref.data, _ref$warn = _ref.warn, warn = _ref$warn === void 0 ? false : _ref$warn, _ref$debug = _ref.debug, debug = _ref$debug === void 0 ? false : _ref$debug;
	var logFn = warn ? console.warn || console.error : console.log;
	if (debug && title && data) {
		console.groupCollapsed("%creact-floater: ".concat(title), "color: #9b00ff; font-weight: bold; font-size: 12px;");
		if (Array.isArray(data)) data.forEach(function(d) {
			if (is.plainObject(d) && d.key) logFn.apply(console, [d.key, d.value]);
			else logFn.apply(console, [d]);
		});
		else logFn.apply(console, [data]);
		console.groupEnd();
	}
}
function on(element, event, cb) {
	var capture = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
	element.addEventListener(event, cb, capture);
}
function off(element, event, cb) {
	var capture = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
	element.removeEventListener(event, cb, capture);
}
function once(element, event, cb) {
	var capture = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
	var _nextCB = function nextCB(e) {
		cb(e);
		off(element, event, _nextCB);
	};
	on(element, event, _nextCB, capture);
}
function noop() {}
function FloaterCloseBtn(_ref) {
	var handleClick = _ref.handleClick, styles = _ref.styles;
	var color = styles.color, height = styles.height, width = styles.width, style = _objectWithoutProperties(styles, _excluded$1);
	return /*#__PURE__*/ _storybook_global_react_default.createElement("button", {
		"aria-label": "close",
		onClick: handleClick,
		style,
		type: "button"
	}, /*#__PURE__*/ _storybook_global_react_default.createElement("svg", {
		width: "".concat(width, "px"),
		height: "".concat(height, "px"),
		viewBox: "0 0 18 18",
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg",
		preserveAspectRatio: "xMidYMid"
	}, /*#__PURE__*/ _storybook_global_react_default.createElement("g", null, /*#__PURE__*/ _storybook_global_react_default.createElement("path", {
		d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
		fill: color
	}))));
}
function FloaterContainer(_ref) {
	var content = _ref.content, footer = _ref.footer, handleClick = _ref.handleClick, open = _ref.open, positionWrapper = _ref.positionWrapper, showCloseButton = _ref.showCloseButton, title = _ref.title, styles = _ref.styles;
	var output = { content: /*#__PURE__*/ _storybook_global_react_default.isValidElement(content) ? content : /*#__PURE__*/ _storybook_global_react_default.createElement("div", {
		className: "__floater__content",
		style: styles.content
	}, content) };
	if (title) output.title = /*#__PURE__*/ _storybook_global_react_default.isValidElement(title) ? title : /*#__PURE__*/ _storybook_global_react_default.createElement("div", {
		className: "__floater__title",
		style: styles.title
	}, title);
	if (footer) output.footer = /*#__PURE__*/ _storybook_global_react_default.isValidElement(footer) ? footer : /*#__PURE__*/ _storybook_global_react_default.createElement("div", {
		className: "__floater__footer",
		style: styles.footer
	}, footer);
	if ((showCloseButton || positionWrapper) && !is["boolean"](open)) output.close = /*#__PURE__*/ _storybook_global_react_default.createElement(FloaterCloseBtn, {
		styles: styles.close,
		handleClick
	});
	return /*#__PURE__*/ _storybook_global_react_default.createElement("div", {
		className: "__floater__container",
		style: styles.container
	}, output.close, output.title, output.content, output.footer);
}
function getStyles$1(styles) {
	var options = (0, import_cjs$2.default)(defaultOptions$1, styles.options || {});
	return {
		wrapper: {
			cursor: "help",
			display: "inline-flex",
			flexDirection: "column",
			zIndex: options.zIndex
		},
		wrapperPosition: {
			left: -1e3,
			position: "absolute",
			top: -1e3,
			visibility: "hidden"
		},
		floater: {
			display: "inline-block",
			filter: "drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))",
			maxWidth: 300,
			opacity: 0,
			position: "relative",
			transition: "opacity 0.3s",
			visibility: "hidden",
			zIndex: options.zIndex
		},
		floaterOpening: {
			opacity: 1,
			visibility: "visible"
		},
		floaterWithAnimation: {
			opacity: 1,
			transition: "opacity 0.3s, transform 0.2s",
			visibility: "visible"
		},
		floaterWithComponent: { maxWidth: "100%" },
		floaterClosing: {
			opacity: 0,
			visibility: "visible"
		},
		floaterCentered: {
			left: "50%",
			position: "fixed",
			top: "50%",
			transform: "translate(-50%, -50%)"
		},
		container: {
			backgroundColor: "#fff",
			color: "#666",
			minHeight: 60,
			minWidth: 200,
			padding: 20,
			position: "relative",
			zIndex: 10
		},
		title: {
			borderBottom: "1px solid #555",
			color: "#555",
			fontSize: 18,
			marginBottom: 5,
			paddingBottom: 6,
			paddingRight: 18
		},
		content: { fontSize: 15 },
		close: {
			backgroundColor: "transparent",
			border: 0,
			borderRadius: 0,
			color: "#555",
			fontSize: 0,
			height: 15,
			outline: "none",
			padding: 10,
			position: "absolute",
			right: 0,
			top: 0,
			width: 15,
			WebkitAppearance: "none"
		},
		footer: {
			borderTop: "1px solid #ccc",
			fontSize: 13,
			marginTop: 10,
			paddingTop: 5
		},
		arrow: {
			color: "#fff",
			display: "inline-flex",
			length: 16,
			margin: 8,
			position: "absolute",
			spread: 32
		},
		options
	};
}
var import_prop_types, import_cjs$2, DEFAULTS, VALIDATOR_ARG_ERROR_MESSAGE, MESSAGE_ARG_ERROR_MESSAGE, STATUS$1, isReact16$1, ReactFloaterPortal, FloaterArrow, _excluded$1, Floater, ReactFloaterWrapper, defaultOptions$1, _excluded, POSITIONING_PROPS, ReactFloater;
var init_es = __esmMin((() => {
	init__storybook_global_react();
	import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
	init_popper();
	import_cjs$2 = /* @__PURE__ */ __toESM(require_cjs());
	init_esm$2();
	init_esm();
	init__storybook_global_react_dom();
	DEFAULTS = {
		flip: { padding: 20 },
		preventOverflow: { padding: 10 }
	};
	VALIDATOR_ARG_ERROR_MESSAGE = "The typeValidator argument must be a function with the signature function(props, propName, componentName).";
	MESSAGE_ARG_ERROR_MESSAGE = "The error message is optional, but must be a string if provided.";
	STATUS$1 = {
		INIT: "init",
		IDLE: "idle",
		OPENING: "opening",
		OPEN: "open",
		CLOSING: "closing",
		ERROR: "error"
	};
	isReact16$1 = _storybook_global_react_dom_default.createPortal !== void 0;
	ReactFloaterPortal = /*#__PURE__*/ function(_React$Component) {
		_inherits(ReactFloaterPortal, _React$Component);
		var _super = _createSuper(ReactFloaterPortal);
		function ReactFloaterPortal() {
			_classCallCheck(this, ReactFloaterPortal);
			return _super.apply(this, arguments);
		}
		_createClass(ReactFloaterPortal, [
			{
				key: "componentDidMount",
				value: function componentDidMount() {
					if (!canUseDOM$1()) return;
					if (!this.node) this.appendNode();
					if (!isReact16$1) this.renderPortal();
				}
			},
			{
				key: "componentDidUpdate",
				value: function componentDidUpdate() {
					if (!canUseDOM$1()) return;
					if (!isReact16$1) this.renderPortal();
				}
			},
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount() {
					if (!canUseDOM$1() || !this.node) return;
					if (!isReact16$1) _storybook_global_react_dom_default.unmountComponentAtNode(this.node);
					if (this.node && this.node.parentNode === document.body) {
						document.body.removeChild(this.node);
						this.node = void 0;
					}
				}
			},
			{
				key: "appendNode",
				value: function appendNode() {
					var _this$props = this.props, id = _this$props.id, zIndex = _this$props.zIndex;
					if (!this.node) {
						this.node = document.createElement("div");
						/* istanbul ignore else */ if (id) this.node.id = id;
						if (zIndex) this.node.style.zIndex = zIndex;
						document.body.appendChild(this.node);
					}
				}
			},
			{
				key: "renderPortal",
				value: function renderPortal() {
					if (!canUseDOM$1()) return null;
					var _this$props2 = this.props, children = _this$props2.children, setRef = _this$props2.setRef;
					if (!this.node) this.appendNode();
					/* istanbul ignore else */ if (isReact16$1) return /*#__PURE__*/ _storybook_global_react_dom_default.createPortal(children, this.node);
					setRef(_storybook_global_react_dom_default.unstable_renderSubtreeIntoContainer(this, children.length > 1 ? /*#__PURE__*/ _storybook_global_react_default.createElement("div", null, children) : children[0], this.node));
					return null;
				}
			},
			{
				key: "renderReact16",
				value: function renderReact16() {
					var _this$props3 = this.props, hasChildren = _this$props3.hasChildren, placement = _this$props3.placement, target = _this$props3.target;
					if (!hasChildren) {
						if (target || placement === "center") return this.renderPortal();
						return null;
					}
					return this.renderPortal();
				}
			},
			{
				key: "render",
				value: function render() {
					if (!isReact16$1) return null;
					return this.renderReact16();
				}
			}
		]);
		return ReactFloaterPortal;
	}(_storybook_global_react_default.Component);
	_defineProperty(ReactFloaterPortal, "propTypes", {
		children: import_prop_types.default.oneOfType([import_prop_types.default.element, import_prop_types.default.array]),
		hasChildren: import_prop_types.default.bool,
		id: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
		placement: import_prop_types.default.string,
		setRef: import_prop_types.default.func.isRequired,
		target: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.string]),
		zIndex: import_prop_types.default.number
	});
	FloaterArrow = /*#__PURE__*/ function(_React$Component) {
		_inherits(FloaterArrow, _React$Component);
		var _super = _createSuper(FloaterArrow);
		function FloaterArrow() {
			_classCallCheck(this, FloaterArrow);
			return _super.apply(this, arguments);
		}
		_createClass(FloaterArrow, [{
			key: "parentStyle",
			get: function get() {
				var _this$props = this.props, placement = _this$props.placement;
				var length = _this$props.styles.arrow.length;
				var arrow = {
					pointerEvents: "none",
					position: "absolute",
					width: "100%"
				};
				/* istanbul ignore else */ if (placement.startsWith("top")) {
					arrow.bottom = 0;
					arrow.left = 0;
					arrow.right = 0;
					arrow.height = length;
				} else if (placement.startsWith("bottom")) {
					arrow.left = 0;
					arrow.right = 0;
					arrow.top = 0;
					arrow.height = length;
				} else if (placement.startsWith("left")) {
					arrow.right = 0;
					arrow.top = 0;
					arrow.bottom = 0;
				} else if (placement.startsWith("right")) {
					arrow.left = 0;
					arrow.top = 0;
				}
				return arrow;
			}
		}, {
			key: "render",
			value: function render() {
				var _this$props2 = this.props, placement = _this$props2.placement, setArrowRef = _this$props2.setArrowRef;
				var _styles$arrow = _this$props2.styles.arrow, color = _styles$arrow.color, display = _styles$arrow.display, length = _styles$arrow.length, margin = _styles$arrow.margin, position = _styles$arrow.position, spread = _styles$arrow.spread;
				var arrowStyles = {
					display,
					position
				};
				var points;
				var x = spread;
				var y = length;
				/* istanbul ignore else */ if (placement.startsWith("top")) {
					points = "0,0 ".concat(x / 2, ",").concat(y, " ").concat(x, ",0");
					arrowStyles.bottom = 0;
					arrowStyles.marginLeft = margin;
					arrowStyles.marginRight = margin;
				} else if (placement.startsWith("bottom")) {
					points = "".concat(x, ",").concat(y, " ").concat(x / 2, ",0 0,").concat(y);
					arrowStyles.top = 0;
					arrowStyles.marginLeft = margin;
					arrowStyles.marginRight = margin;
				} else if (placement.startsWith("left")) {
					y = spread;
					x = length;
					points = "0,0 ".concat(x, ",").concat(y / 2, " 0,").concat(y);
					arrowStyles.right = 0;
					arrowStyles.marginTop = margin;
					arrowStyles.marginBottom = margin;
				} else if (placement.startsWith("right")) {
					y = spread;
					x = length;
					points = "".concat(x, ",").concat(y, " ").concat(x, ",0 0,").concat(y / 2);
					arrowStyles.left = 0;
					arrowStyles.marginTop = margin;
					arrowStyles.marginBottom = margin;
				}
				return /*#__PURE__*/ _storybook_global_react_default.createElement("div", {
					className: "__floater__arrow",
					style: this.parentStyle
				}, /*#__PURE__*/ _storybook_global_react_default.createElement("span", {
					ref: setArrowRef,
					style: arrowStyles
				}, /*#__PURE__*/ _storybook_global_react_default.createElement("svg", {
					width: x,
					height: y,
					version: "1.1",
					xmlns: "http://www.w3.org/2000/svg"
				}, /*#__PURE__*/ _storybook_global_react_default.createElement("polygon", {
					points,
					fill: color
				}))));
			}
		}]);
		return FloaterArrow;
	}(_storybook_global_react_default.Component);
	_defineProperty(FloaterArrow, "propTypes", {
		placement: import_prop_types.default.string.isRequired,
		setArrowRef: import_prop_types.default.func.isRequired,
		styles: import_prop_types.default.object.isRequired
	});
	_excluded$1 = [
		"color",
		"height",
		"width"
	];
	FloaterCloseBtn.propTypes = {
		handleClick: import_prop_types.default.func.isRequired,
		styles: import_prop_types.default.object.isRequired
	};
	FloaterContainer.propTypes = {
		content: import_prop_types.default.node.isRequired,
		footer: import_prop_types.default.node,
		handleClick: import_prop_types.default.func.isRequired,
		open: import_prop_types.default.bool,
		positionWrapper: import_prop_types.default.bool.isRequired,
		showCloseButton: import_prop_types.default.bool.isRequired,
		styles: import_prop_types.default.object.isRequired,
		title: import_prop_types.default.node
	};
	Floater = /*#__PURE__*/ function(_React$Component) {
		_inherits(Floater, _React$Component);
		var _super = _createSuper(Floater);
		function Floater() {
			_classCallCheck(this, Floater);
			return _super.apply(this, arguments);
		}
		_createClass(Floater, [{
			key: "style",
			get: function get() {
				var _this$props = this.props, disableAnimation = _this$props.disableAnimation, component = _this$props.component, placement = _this$props.placement, hideArrow = _this$props.hideArrow, status = _this$props.status, styles = _this$props.styles;
				var length = styles.arrow.length, floater = styles.floater, floaterCentered = styles.floaterCentered, floaterClosing = styles.floaterClosing, floaterOpening = styles.floaterOpening, floaterWithAnimation = styles.floaterWithAnimation, floaterWithComponent = styles.floaterWithComponent;
				var element = {};
				if (!hideArrow) {
					if (placement.startsWith("top")) element.padding = "0 0 ".concat(length, "px");
					else if (placement.startsWith("bottom")) element.padding = "".concat(length, "px 0 0");
					else if (placement.startsWith("left")) element.padding = "0 ".concat(length, "px 0 0");
					else if (placement.startsWith("right")) element.padding = "0 0 0 ".concat(length, "px");
				}
				if ([STATUS$1.OPENING, STATUS$1.OPEN].indexOf(status) !== -1) element = _objectSpread2(_objectSpread2({}, element), floaterOpening);
				if (status === STATUS$1.CLOSING) element = _objectSpread2(_objectSpread2({}, element), floaterClosing);
				if (status === STATUS$1.OPEN && !disableAnimation) element = _objectSpread2(_objectSpread2({}, element), floaterWithAnimation);
				if (placement === "center") element = _objectSpread2(_objectSpread2({}, element), floaterCentered);
				if (component) element = _objectSpread2(_objectSpread2({}, element), floaterWithComponent);
				return _objectSpread2(_objectSpread2({}, floater), element);
			}
		}, {
			key: "render",
			value: function render() {
				var _this$props2 = this.props, component = _this$props2.component, closeFn = _this$props2.handleClick, hideArrow = _this$props2.hideArrow, setFloaterRef = _this$props2.setFloaterRef, status = _this$props2.status;
				var output = {};
				var classes = ["__floater"];
				if (component) if (/*#__PURE__*/ _storybook_global_react_default.isValidElement(component)) output.content = /*#__PURE__*/ _storybook_global_react_default.cloneElement(component, { closeFn });
				else output.content = component({ closeFn });
				else output.content = /*#__PURE__*/ _storybook_global_react_default.createElement(FloaterContainer, this.props);
				if (status === STATUS$1.OPEN) classes.push("__floater__open");
				if (!hideArrow) output.arrow = /*#__PURE__*/ _storybook_global_react_default.createElement(FloaterArrow, this.props);
				return /*#__PURE__*/ _storybook_global_react_default.createElement("div", {
					ref: setFloaterRef,
					className: classes.join(" "),
					style: this.style
				}, /*#__PURE__*/ _storybook_global_react_default.createElement("div", { className: "__floater__body" }, output.content, output.arrow));
			}
		}]);
		return Floater;
	}(_storybook_global_react_default.Component);
	_defineProperty(Floater, "propTypes", {
		component: import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.element]),
		content: import_prop_types.default.node,
		disableAnimation: import_prop_types.default.bool.isRequired,
		footer: import_prop_types.default.node,
		handleClick: import_prop_types.default.func.isRequired,
		hideArrow: import_prop_types.default.bool.isRequired,
		open: import_prop_types.default.bool,
		placement: import_prop_types.default.string.isRequired,
		positionWrapper: import_prop_types.default.bool.isRequired,
		setArrowRef: import_prop_types.default.func.isRequired,
		setFloaterRef: import_prop_types.default.func.isRequired,
		showCloseButton: import_prop_types.default.bool,
		status: import_prop_types.default.string.isRequired,
		styles: import_prop_types.default.object.isRequired,
		title: import_prop_types.default.node
	});
	ReactFloaterWrapper = /*#__PURE__*/ function(_React$Component) {
		_inherits(ReactFloaterWrapper, _React$Component);
		var _super = _createSuper(ReactFloaterWrapper);
		function ReactFloaterWrapper() {
			_classCallCheck(this, ReactFloaterWrapper);
			return _super.apply(this, arguments);
		}
		_createClass(ReactFloaterWrapper, [{
			key: "render",
			value: function render() {
				var _this$props = this.props, children = _this$props.children, handleClick = _this$props.handleClick, handleMouseEnter = _this$props.handleMouseEnter, handleMouseLeave = _this$props.handleMouseLeave, setChildRef = _this$props.setChildRef, setWrapperRef = _this$props.setWrapperRef, style = _this$props.style, styles = _this$props.styles;
				var element;
				/* istanbul ignore else */ if (children) if (_storybook_global_react_default.Children.count(children) === 1) if (!/*#__PURE__*/ _storybook_global_react_default.isValidElement(children)) element = /*#__PURE__*/ _storybook_global_react_default.createElement("span", null, children);
				else {
					var refProp = is["function"](children.type) ? "innerRef" : "ref";
					element = /*#__PURE__*/ _storybook_global_react_default.cloneElement(_storybook_global_react_default.Children.only(children), _defineProperty({}, refProp, setChildRef));
				}
				else element = children;
				if (!element) return null;
				return /*#__PURE__*/ _storybook_global_react_default.createElement("span", {
					ref: setWrapperRef,
					style: _objectSpread2(_objectSpread2({}, styles), style),
					onClick: handleClick,
					onMouseEnter: handleMouseEnter,
					onMouseLeave: handleMouseLeave
				}, element);
			}
		}]);
		return ReactFloaterWrapper;
	}(_storybook_global_react_default.Component);
	_defineProperty(ReactFloaterWrapper, "propTypes", {
		children: import_prop_types.default.node,
		handleClick: import_prop_types.default.func.isRequired,
		handleMouseEnter: import_prop_types.default.func.isRequired,
		handleMouseLeave: import_prop_types.default.func.isRequired,
		setChildRef: import_prop_types.default.func.isRequired,
		setWrapperRef: import_prop_types.default.func.isRequired,
		style: import_prop_types.default.object,
		styles: import_prop_types.default.object.isRequired
	});
	defaultOptions$1 = { zIndex: 100 };
	_excluded = [
		"arrow",
		"flip",
		"offset"
	];
	POSITIONING_PROPS = [
		"position",
		"top",
		"right",
		"bottom",
		"left"
	];
	ReactFloater = /*#__PURE__*/ function(_React$Component) {
		_inherits(ReactFloater, _React$Component);
		var _super = _createSuper(ReactFloater);
		function ReactFloater(props) {
			var _this;
			_classCallCheck(this, ReactFloater);
			_this = _super.call(this, props);
			/* istanbul ignore else */ _defineProperty(_assertThisInitialized(_this), "setArrowRef", function(ref) {
				_this.arrowRef = ref;
			});
			_defineProperty(_assertThisInitialized(_this), "setChildRef", function(ref) {
				_this.childRef = ref;
			});
			_defineProperty(_assertThisInitialized(_this), "setFloaterRef", function(ref) {
				_this.floaterRef = ref;
			});
			_defineProperty(_assertThisInitialized(_this), "setWrapperRef", function(ref) {
				_this.wrapperRef = ref;
			});
			_defineProperty(_assertThisInitialized(_this), "handleTransitionEnd", function() {
				var status = _this.state.status;
				var callback = _this.props.callback;
				/* istanbul ignore else */ if (_this.wrapperPopper) _this.wrapperPopper.instance.update();
				_this.setState({ status: status === STATUS$1.OPENING ? STATUS$1.OPEN : STATUS$1.IDLE }, function() {
					var newStatus = _this.state.status;
					callback(newStatus === STATUS$1.OPEN ? "open" : "close", _this.props);
				});
			});
			_defineProperty(_assertThisInitialized(_this), "handleClick", function() {
				var _this$props = _this.props, event = _this$props.event, open = _this$props.open;
				if (is["boolean"](open)) return;
				var _this$state = _this.state, positionWrapper = _this$state.positionWrapper, status = _this$state.status;
				/* istanbul ignore else */ if (_this.event === "click" || _this.event === "hover" && positionWrapper) {
					log$1({
						title: "click",
						data: [{
							event,
							status: status === STATUS$1.OPEN ? "closing" : "opening"
						}],
						debug: _this.debug
					});
					_this.toggle();
				}
			});
			_defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function() {
				var _this$props2 = _this.props, event = _this$props2.event, open = _this$props2.open;
				if (is["boolean"](open) || isMobile()) return;
				var status = _this.state.status;
				/* istanbul ignore else */ if (_this.event === "hover" && status === STATUS$1.IDLE) {
					log$1({
						title: "mouseEnter",
						data: [{
							key: "originalEvent",
							value: event
						}],
						debug: _this.debug
					});
					clearTimeout(_this.eventDelayTimeout);
					_this.toggle();
				}
			});
			_defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function() {
				var _this$props3 = _this.props, event = _this$props3.event, eventDelay = _this$props3.eventDelay, open = _this$props3.open;
				if (is["boolean"](open) || isMobile()) return;
				var _this$state2 = _this.state, status = _this$state2.status, positionWrapper = _this$state2.positionWrapper;
				/* istanbul ignore else */ if (_this.event === "hover") {
					log$1({
						title: "mouseLeave",
						data: [{
							key: "originalEvent",
							value: event
						}],
						debug: _this.debug
					});
					if (!eventDelay) _this.toggle(STATUS$1.IDLE);
					else if ([STATUS$1.OPENING, STATUS$1.OPEN].indexOf(status) !== -1 && !positionWrapper && !_this.eventDelayTimeout) _this.eventDelayTimeout = setTimeout(function() {
						delete _this.eventDelayTimeout;
						_this.toggle();
					}, eventDelay * 1e3);
				}
			});
			_this.state = {
				currentPlacement: props.placement,
				needsUpdate: false,
				positionWrapper: props.wrapperOptions.position && !!props.target,
				status: STATUS$1.INIT,
				statusWrapper: STATUS$1.INIT
			};
			_this._isMounted = false;
			_this.hasMounted = false;
			if (canUseDOM$1()) window.addEventListener("load", function() {
				if (_this.popper) _this.popper.instance.update();
				if (_this.wrapperPopper) _this.wrapperPopper.instance.update();
			});
			return _this;
		}
		_createClass(ReactFloater, [
			{
				key: "componentDidMount",
				value: function componentDidMount() {
					if (!canUseDOM$1()) return;
					var positionWrapper = this.state.positionWrapper;
					var _this$props5 = this.props, children = _this$props5.children, open = _this$props5.open, target = _this$props5.target;
					this._isMounted = true;
					log$1({
						title: "init",
						data: {
							hasChildren: !!children,
							hasTarget: !!target,
							isControlled: is["boolean"](open),
							positionWrapper,
							target: this.target,
							floater: this.floaterRef
						},
						debug: this.debug
					});
					if (!this.hasMounted) {
						this.initPopper();
						this.hasMounted = true;
					}
					if (!children && target && !is["boolean"](open));
				}
			},
			{
				key: "componentDidUpdate",
				value: function componentDidUpdate(prevProps, prevState) {
					if (!canUseDOM$1()) return;
					var _this$props6 = this.props, autoOpen = _this$props6.autoOpen, open = _this$props6.open, target = _this$props6.target, wrapperOptions = _this$props6.wrapperOptions;
					var _treeChanges = treeChanges(prevState, this.state), changedFrom = _treeChanges.changedFrom, changed = _treeChanges.changed;
					if (prevProps.open !== open) {
						var forceStatus;
						if (is["boolean"](open)) forceStatus = open ? STATUS$1.OPENING : STATUS$1.CLOSING;
						this.toggle(forceStatus);
					}
					if (prevProps.wrapperOptions.position !== wrapperOptions.position || prevProps.target !== target) this.changeWrapperPosition(this.props);
					if (changed("status", STATUS$1.IDLE) && open) this.toggle(STATUS$1.OPEN);
					else if (changedFrom("status", STATUS$1.INIT, STATUS$1.IDLE) && autoOpen) this.toggle(STATUS$1.OPEN);
					if (this.popper && changed("status", STATUS$1.OPENING)) this.popper.instance.update();
					if (this.floaterRef && (changed("status", STATUS$1.OPENING) || changed("status", STATUS$1.CLOSING))) once(this.floaterRef, "transitionend", this.handleTransitionEnd);
					if (changed("needsUpdate", true)) this.rebuildPopper();
				}
			},
			{
				key: "componentWillUnmount",
				value: function componentWillUnmount() {
					if (!canUseDOM$1()) return;
					this._isMounted = false;
					if (this.popper) this.popper.instance.destroy();
					if (this.wrapperPopper) this.wrapperPopper.instance.destroy();
				}
			},
			{
				key: "initPopper",
				value: function initPopper() {
					var _this2 = this;
					var target = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.target;
					var positionWrapper = this.state.positionWrapper;
					var _this$props7 = this.props, disableFlip = _this$props7.disableFlip, getPopper = _this$props7.getPopper, hideArrow = _this$props7.hideArrow, offset = _this$props7.offset, placement = _this$props7.placement, wrapperOptions = _this$props7.wrapperOptions;
					var flipBehavior = placement === "top" || placement === "bottom" ? "flip" : [
						"right",
						"bottom-end",
						"top-end",
						"left",
						"top-start",
						"bottom-start"
					];
					/* istanbul ignore else */ if (placement === "center") this.setState({ status: STATUS$1.IDLE });
					else if (target && this.floaterRef) {
						var _this$options = this.options, arrow = _this$options.arrow, flip = _this$options.flip, offsetOptions = _this$options.offset, rest = _objectWithoutProperties(_this$options, _excluded);
						new Popper(target, this.floaterRef, {
							placement,
							modifiers: _objectSpread2({
								arrow: _objectSpread2({
									enabled: !hideArrow,
									element: this.arrowRef
								}, arrow),
								flip: _objectSpread2({
									enabled: !disableFlip,
									behavior: flipBehavior
								}, flip),
								offset: _objectSpread2({ offset: "0, ".concat(offset, "px") }, offsetOptions)
							}, rest),
							onCreate: function onCreate(data) {
								var _this2$floaterRef;
								_this2.popper = data;
								if (!((_this2$floaterRef = _this2.floaterRef) !== null && _this2$floaterRef !== void 0 && _this2$floaterRef.isConnected)) {
									_this2.setState({ needsUpdate: true });
									return;
								}
								getPopper(data, "floater");
								if (_this2._isMounted) _this2.setState({
									currentPlacement: data.placement,
									status: STATUS$1.IDLE
								});
								if (placement !== data.placement) setTimeout(function() {
									data.instance.update();
								}, 1);
							},
							onUpdate: function onUpdate(data) {
								_this2.popper = data;
								var currentPlacement = _this2.state.currentPlacement;
								if (_this2._isMounted && data.placement !== currentPlacement) _this2.setState({ currentPlacement: data.placement });
							}
						});
					}
					if (positionWrapper) {
						var wrapperOffset = !is.undefined(wrapperOptions.offset) ? wrapperOptions.offset : 0;
						new Popper(this.target, this.wrapperRef, {
							placement: wrapperOptions.placement || placement,
							modifiers: {
								arrow: { enabled: false },
								offset: { offset: "0, ".concat(wrapperOffset, "px") },
								flip: { enabled: false }
							},
							onCreate: function onCreate(data) {
								_this2.wrapperPopper = data;
								if (_this2._isMounted) _this2.setState({ statusWrapper: STATUS$1.IDLE });
								getPopper(data, "wrapper");
								if (placement !== data.placement) setTimeout(function() {
									data.instance.update();
								}, 1);
							}
						});
					}
				}
			},
			{
				key: "rebuildPopper",
				value: function rebuildPopper() {
					var _this3 = this;
					this.floaterRefInterval = setInterval(function() {
						var _this3$floaterRef;
						if ((_this3$floaterRef = _this3.floaterRef) !== null && _this3$floaterRef !== void 0 && _this3$floaterRef.isConnected) {
							clearInterval(_this3.floaterRefInterval);
							_this3.setState({ needsUpdate: false });
							_this3.initPopper();
						}
					}, 50);
				}
			},
			{
				key: "changeWrapperPosition",
				value: function changeWrapperPosition(_ref) {
					var target = _ref.target, wrapperOptions = _ref.wrapperOptions;
					this.setState({ positionWrapper: wrapperOptions.position && !!target });
				}
			},
			{
				key: "toggle",
				value: function toggle(forceStatus) {
					var nextStatus = this.state.status === STATUS$1.OPEN ? STATUS$1.CLOSING : STATUS$1.OPENING;
					if (!is.undefined(forceStatus)) nextStatus = forceStatus;
					this.setState({ status: nextStatus });
				}
			},
			{
				key: "debug",
				get: function get() {
					return this.props.debug || canUseDOM$1() && "ReactFloaterDebug" in window && !!window.ReactFloaterDebug;
				}
			},
			{
				key: "event",
				get: function get() {
					var _this$props8 = this.props, disableHoverToClick = _this$props8.disableHoverToClick, event = _this$props8.event;
					if (event === "hover" && isMobile() && !disableHoverToClick) return "click";
					return event;
				}
			},
			{
				key: "options",
				get: function get() {
					var options = this.props.options;
					return (0, import_cjs$2.default)(DEFAULTS, options || {});
				}
			},
			{
				key: "styles",
				get: function get() {
					var _this4 = this;
					var _this$state3 = this.state, status = _this$state3.status, positionWrapper = _this$state3.positionWrapper, statusWrapper = _this$state3.statusWrapper;
					var styles = this.props.styles;
					var nextStyles = (0, import_cjs$2.default)(getStyles$1(styles), styles);
					if (positionWrapper) {
						var wrapperStyles;
						if (!([STATUS$1.IDLE].indexOf(status) !== -1) || !([STATUS$1.IDLE].indexOf(statusWrapper) !== -1)) wrapperStyles = nextStyles.wrapperPosition;
						else wrapperStyles = this.wrapperPopper.styles;
						nextStyles.wrapper = _objectSpread2(_objectSpread2({}, nextStyles.wrapper), wrapperStyles);
					}
					/* istanbul ignore else */ if (this.target) {
						var targetStyles = window.getComputedStyle(this.target);
						/* istanbul ignore else */ if (this.wrapperStyles) nextStyles.wrapper = _objectSpread2(_objectSpread2({}, nextStyles.wrapper), this.wrapperStyles);
						else if (!(["relative", "static"].indexOf(targetStyles.position) !== -1)) {
							this.wrapperStyles = {};
							if (!positionWrapper) {
								POSITIONING_PROPS.forEach(function(d) {
									_this4.wrapperStyles[d] = targetStyles[d];
								});
								nextStyles.wrapper = _objectSpread2(_objectSpread2({}, nextStyles.wrapper), this.wrapperStyles);
								this.target.style.position = "relative";
								this.target.style.top = "auto";
								this.target.style.right = "auto";
								this.target.style.bottom = "auto";
								this.target.style.left = "auto";
							}
						}
					}
					return nextStyles;
				}
			},
			{
				key: "target",
				get: function get() {
					if (!canUseDOM$1()) return null;
					var target = this.props.target;
					if (target) {
						if (is.domElement(target)) return target;
						return document.querySelector(target);
					}
					return this.childRef || this.wrapperRef;
				}
			},
			{
				key: "render",
				value: function render() {
					var _this$state4 = this.state, currentPlacement = _this$state4.currentPlacement, positionWrapper = _this$state4.positionWrapper, status = _this$state4.status;
					var _this$props9 = this.props, children = _this$props9.children, component = _this$props9.component, content = _this$props9.content, disableAnimation = _this$props9.disableAnimation, footer = _this$props9.footer, hideArrow = _this$props9.hideArrow, id = _this$props9.id, open = _this$props9.open, showCloseButton = _this$props9.showCloseButton, style = _this$props9.style, target = _this$props9.target, title = _this$props9.title;
					var wrapper = /*#__PURE__*/ _storybook_global_react_default.createElement(ReactFloaterWrapper, {
						handleClick: this.handleClick,
						handleMouseEnter: this.handleMouseEnter,
						handleMouseLeave: this.handleMouseLeave,
						setChildRef: this.setChildRef,
						setWrapperRef: this.setWrapperRef,
						style,
						styles: this.styles.wrapper
					}, children);
					var output = {};
					if (positionWrapper) output.wrapperInPortal = wrapper;
					else output.wrapperAsChildren = wrapper;
					return /*#__PURE__*/ _storybook_global_react_default.createElement("span", null, /*#__PURE__*/ _storybook_global_react_default.createElement(ReactFloaterPortal, {
						hasChildren: !!children,
						id,
						placement: currentPlacement,
						setRef: this.setFloaterRef,
						target,
						zIndex: this.styles.options.zIndex
					}, /*#__PURE__*/ _storybook_global_react_default.createElement(Floater, {
						component,
						content,
						disableAnimation,
						footer,
						handleClick: this.handleClick,
						hideArrow: hideArrow || currentPlacement === "center",
						open,
						placement: currentPlacement,
						positionWrapper,
						setArrowRef: this.setArrowRef,
						setFloaterRef: this.setFloaterRef,
						showCloseButton,
						status,
						styles: this.styles,
						title
					}), output.wrapperInPortal), output.wrapperAsChildren);
				}
			}
		]);
		return ReactFloater;
	}(_storybook_global_react_default.Component);
	_defineProperty(ReactFloater, "propTypes", {
		autoOpen: import_prop_types.default.bool,
		callback: import_prop_types.default.func,
		children: import_prop_types.default.node,
		component: isRequiredIf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.element]), function(props) {
			return !props.content;
		}),
		content: isRequiredIf(import_prop_types.default.node, function(props) {
			return !props.component;
		}),
		debug: import_prop_types.default.bool,
		disableAnimation: import_prop_types.default.bool,
		disableFlip: import_prop_types.default.bool,
		disableHoverToClick: import_prop_types.default.bool,
		event: import_prop_types.default.oneOf(["hover", "click"]),
		eventDelay: import_prop_types.default.number,
		footer: import_prop_types.default.node,
		getPopper: import_prop_types.default.func,
		hideArrow: import_prop_types.default.bool,
		id: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
		offset: import_prop_types.default.number,
		open: import_prop_types.default.bool,
		options: import_prop_types.default.object,
		placement: import_prop_types.default.oneOf([
			"top",
			"top-start",
			"top-end",
			"bottom",
			"bottom-start",
			"bottom-end",
			"left",
			"left-start",
			"left-end",
			"right",
			"right-start",
			"right-end",
			"auto",
			"center"
		]),
		showCloseButton: import_prop_types.default.bool,
		style: import_prop_types.default.object,
		styles: import_prop_types.default.object,
		target: import_prop_types.default.oneOfType([import_prop_types.default.object, import_prop_types.default.string]),
		title: import_prop_types.default.node,
		wrapperOptions: import_prop_types.default.shape({
			offset: import_prop_types.default.number,
			placement: import_prop_types.default.oneOf([
				"top",
				"top-start",
				"top-end",
				"bottom",
				"bottom-start",
				"bottom-end",
				"left",
				"left-start",
				"left-end",
				"right",
				"right-start",
				"right-end",
				"auto"
			]),
			position: import_prop_types.default.bool
		})
	});
	_defineProperty(ReactFloater, "defaultProps", {
		autoOpen: false,
		callback: noop,
		debug: false,
		disableAnimation: false,
		disableFlip: false,
		disableHoverToClick: false,
		event: "click",
		eventDelay: .4,
		getPopper: noop,
		hideArrow: false,
		offset: 15,
		placement: "bottom",
		showCloseButton: false,
		styles: {},
		target: null,
		wrapperOptions: { position: false }
	});
}));
//#endregion
//#region ../../node_modules/react-joyride/dist/index.mjs
function canUseDOM() {
	var _a;
	return !!(typeof window !== "undefined" && ((_a = window.document) == null ? void 0 : _a.createElement));
}
function getClientRect(element) {
	if (!element) return null;
	return element.getBoundingClientRect();
}
function getDocumentHeight(median = false) {
	const { body, documentElement } = document;
	if (!body || !documentElement) return 0;
	if (median) {
		const heights = [
			body.scrollHeight,
			body.offsetHeight,
			documentElement.clientHeight,
			documentElement.scrollHeight,
			documentElement.offsetHeight
		].sort((a, b) => a - b);
		const middle = Math.floor(heights.length / 2);
		if (heights.length % 2 === 0) return (heights[middle - 1] + heights[middle]) / 2;
		return heights[middle];
	}
	return Math.max(body.scrollHeight, body.offsetHeight, documentElement.clientHeight, documentElement.scrollHeight, documentElement.offsetHeight);
}
function getElement(element) {
	if (typeof element === "string") try {
		return document.querySelector(element);
	} catch (error) {
		return null;
	}
	return element;
}
function getStyleComputedProperty(el) {
	if (!el || el.nodeType !== 1) return null;
	return getComputedStyle(el);
}
function getScrollParent(element, skipFix, forListener) {
	if (!element) return scrollDocument();
	const parent = (0, import_scrollparent.default)(element);
	if (parent) {
		if (parent.isSameNode(scrollDocument())) {
			if (forListener) return document;
			return scrollDocument();
		}
		if (!(parent.scrollHeight > parent.offsetHeight) && !skipFix) {
			parent.style.overflow = "initial";
			return scrollDocument();
		}
	}
	return parent;
}
function hasCustomScrollParent(element, skipFix) {
	if (!element) return false;
	const parent = getScrollParent(element, skipFix);
	return parent ? !parent.isSameNode(scrollDocument()) : false;
}
function hasCustomOffsetParent(element) {
	return element.offsetParent !== document.body;
}
function hasPosition(el, type = "fixed") {
	if (!el || !(el instanceof HTMLElement)) return false;
	const { nodeName } = el;
	const styles = getStyleComputedProperty(el);
	if (nodeName === "BODY" || nodeName === "HTML") return false;
	if (styles && styles.position === type) return true;
	if (!el.parentNode) return false;
	return hasPosition(el.parentNode, type);
}
function isElementVisible(element) {
	var _a;
	if (!element) return false;
	let parentElement = element;
	while (parentElement) {
		if (parentElement === document.body) break;
		if (parentElement instanceof HTMLElement) {
			const { display, visibility } = getComputedStyle(parentElement);
			if (display === "none" || visibility === "hidden") return false;
		}
		parentElement = (_a = parentElement.parentElement) != null ? _a : null;
	}
	return true;
}
function getElementPosition(element, offset, skipFix) {
	var _a, _b, _c;
	const elementRect = getClientRect(element);
	const parent = getScrollParent(element, skipFix);
	const hasScrollParent = hasCustomScrollParent(element, skipFix);
	const isFixedTarget = hasPosition(element);
	let parentTop = 0;
	let top = (_a = elementRect == null ? void 0 : elementRect.top) != null ? _a : 0;
	if (hasScrollParent && isFixedTarget) top = ((_b = element == null ? void 0 : element.offsetTop) != null ? _b : 0) - ((_c = parent == null ? void 0 : parent.scrollTop) != null ? _c : 0);
	else if (parent instanceof HTMLElement) {
		parentTop = parent.scrollTop;
		if (!hasScrollParent && !hasPosition(element)) top += parentTop;
		if (!parent.isSameNode(scrollDocument())) top += scrollDocument().scrollTop;
	}
	return Math.floor(top - offset);
}
function getScrollTo(element, offset, skipFix) {
	var _a;
	if (!element) return 0;
	const { offsetTop = 0, scrollTop = 0 } = (_a = (0, import_scrollparent.default)(element)) != null ? _a : {};
	let top = element.getBoundingClientRect().top + scrollTop;
	if (!!offsetTop && (hasCustomScrollParent(element, skipFix) || hasCustomOffsetParent(element))) top -= offsetTop;
	const output = Math.floor(top - offset);
	return output < 0 ? 0 : output;
}
function scrollDocument() {
	var _a;
	return (_a = document.scrollingElement) != null ? _a : document.documentElement;
}
function scrollTo(value, options) {
	const { duration, element } = options;
	return new Promise((resolve, reject) => {
		const { scrollTop } = element;
		const limit = value > scrollTop ? value - scrollTop : scrollTop - value;
		import_scroll.default.top(element, value, { duration: limit < 100 ? 50 : duration }, (error) => {
			if (error && error.message !== "Element already at target scroll position") return reject(error);
			return resolve();
		});
	});
}
function getBrowser(userAgent = navigator.userAgent) {
	let browser = userAgent;
	if (typeof window === "undefined") browser = "node";
	else if (document.documentMode) browser = "ie";
	else if (/Edge/.test(userAgent)) browser = "edge";
	else if (Boolean(window.opera) || userAgent.includes(" OPR/")) browser = "opera";
	else if (typeof window.InstallTrigger !== "undefined") browser = "firefox";
	else if (window.chrome) browser = "chrome";
	else if (/(Version\/([\d._]+).*Safari|CriOS|FxiOS| Mobile\/)/.test(userAgent)) browser = "safari";
	return browser;
}
function getObjectType(value) {
	return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
}
function getReactNodeText(input, options = {}) {
	const { defaultValue, step, steps } = options;
	let text = (0, import_react_innertext.default)(input);
	if (!text) if (isValidElement(input) && !Object.values(input.props).length && getObjectType(input.type) === "function") text = getReactNodeText(input.type({}), options);
	else text = (0, import_react_innertext.default)(defaultValue);
	else if ((text.includes("{step}") || text.includes("{steps}")) && step && steps) text = text.replace("{step}", step.toString()).replace("{steps}", steps.toString());
	return text;
}
function hasValidKeys(object, keys) {
	if (!src_default.plainObject(object) || !src_default.array(keys)) return false;
	return Object.keys(object).every((d) => keys.includes(d));
}
function hexToRGB(hex) {
	const properHex = hex.replace(/^#?([\da-f])([\da-f])([\da-f])$/i, (_m, r, g, b) => r + r + g + g + b + b);
	const result = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(properHex);
	return result ? [
		parseInt(result[1], 16),
		parseInt(result[2], 16),
		parseInt(result[3], 16)
	] : [];
}
function hideBeacon(step) {
	return step.disableBeacon || step.placement === "center";
}
function isLegacy() {
	return ![
		"chrome",
		"safari",
		"firefox",
		"opera"
	].includes(getBrowser());
}
function log({ data, debug = false, title, warn = false }) {
	const logFn = warn ? console.warn || console.error : console.log;
	if (debug) if (title && data) {
		console.groupCollapsed(`%creact-joyride: ${title}`, "color: #ff0044; font-weight: bold; font-size: 12px;");
		if (Array.isArray(data)) data.forEach((d) => {
			if (src_default.plainObject(d) && d.key) logFn.apply(console, [d.key, d.value]);
			else logFn.apply(console, [d]);
		});
		else logFn.apply(console, [data]);
		console.groupEnd();
	} else console.error("Missing title or data props");
}
function objectKeys(input) {
	return Object.keys(input);
}
function omit(input, ...filter) {
	if (!src_default.plainObject(input)) throw new TypeError("Expected an object");
	const output = {};
	for (const key in input) if ({}.hasOwnProperty.call(input, key)) {
		if (!filter.includes(key)) output[key] = input[key];
	}
	return output;
}
function pick(input, ...filter) {
	if (!src_default.plainObject(input)) throw new TypeError("Expected an object");
	if (!filter.length) return input;
	const output = {};
	for (const key in input) if ({}.hasOwnProperty.call(input, key)) {
		if (filter.includes(key)) output[key] = input[key];
	}
	return output;
}
function replaceLocaleContent(input, step, steps) {
	const replacer = (text) => text.replace("{step}", String(step)).replace("{steps}", String(steps));
	if (getObjectType(input) === "string") return replacer(input);
	if (!isValidElement(input)) return input;
	const { children } = input.props;
	if (getObjectType(children) === "string" && children.includes("{step}")) return cloneElement(input, { children: replacer(children) });
	if (Array.isArray(children)) return cloneElement(input, { children: children.map((child) => {
		if (typeof child === "string") return replacer(child);
		return replaceLocaleContent(child, step, steps);
	}) });
	if (getObjectType(input.type) === "function" && !Object.values(input.props).length) return replaceLocaleContent(input.type({}), step, steps);
	return input;
}
function shouldScroll(options) {
	const { isFirstStep, lifecycle, previousLifecycle, scrollToFirstStep, step, target } = options;
	return !step.disableScrolling && (!isFirstStep || scrollToFirstStep || lifecycle === LIFECYCLE.TOOLTIP) && step.placement !== "center" && (!step.isFixed || !hasPosition(target)) && previousLifecycle !== lifecycle && [LIFECYCLE.BEACON, LIFECYCLE.TOOLTIP].includes(lifecycle);
}
function getStyles(props, step) {
	var _a, _b, _c, _d, _e;
	const { floaterProps, styles } = props;
	const mergedFloaterProps = (0, import_cjs$1.default)((_a = step.floaterProps) != null ? _a : {}, floaterProps != null ? floaterProps : {});
	const mergedStyles = (0, import_cjs$1.default)(styles != null ? styles : {}, (_b = step.styles) != null ? _b : {});
	const options = (0, import_cjs$1.default)(defaultOptions, mergedStyles.options || {});
	const hideBeacon2 = step.placement === "center" || step.disableBeacon;
	let { width } = options;
	if (window.innerWidth > 480) width = 380;
	if ("width" in options) width = typeof options.width === "number" && window.innerWidth < options.width ? window.innerWidth - 30 : options.width;
	const overlay = {
		bottom: 0,
		left: 0,
		overflow: "hidden",
		position: "absolute",
		right: 0,
		top: 0,
		zIndex: options.zIndex
	};
	return (0, import_cjs$1.default)({
		beacon: {
			...buttonBase,
			display: hideBeacon2 ? "none" : "inline-block",
			height: options.beaconSize,
			position: "relative",
			width: options.beaconSize,
			zIndex: options.zIndex
		},
		beaconInner: {
			animation: "joyride-beacon-inner 1.2s infinite ease-in-out",
			backgroundColor: options.primaryColor,
			borderRadius: "50%",
			display: "block",
			height: "50%",
			left: "50%",
			opacity: .7,
			position: "absolute",
			top: "50%",
			transform: "translate(-50%, -50%)",
			width: "50%"
		},
		beaconOuter: {
			animation: "joyride-beacon-outer 1.2s infinite ease-in-out",
			backgroundColor: `rgba(${hexToRGB(options.primaryColor).join(",")}, 0.2)`,
			border: `2px solid ${options.primaryColor}`,
			borderRadius: "50%",
			boxSizing: "border-box",
			display: "block",
			height: "100%",
			left: 0,
			opacity: .9,
			position: "absolute",
			top: 0,
			transformOrigin: "center",
			width: "100%"
		},
		tooltip: {
			backgroundColor: options.backgroundColor,
			borderRadius: 5,
			boxSizing: "border-box",
			color: options.textColor,
			fontSize: 16,
			maxWidth: "100%",
			padding: 15,
			position: "relative",
			width
		},
		tooltipContainer: {
			lineHeight: 1.4,
			textAlign: "center"
		},
		tooltipTitle: {
			fontSize: 18,
			margin: 0
		},
		tooltipContent: { padding: "20px 10px" },
		tooltipFooter: {
			alignItems: "center",
			display: "flex",
			justifyContent: "flex-end",
			marginTop: 15
		},
		tooltipFooterSpacer: { flex: 1 },
		buttonNext: {
			...buttonBase,
			backgroundColor: options.primaryColor,
			borderRadius: 4,
			color: "#fff"
		},
		buttonBack: {
			...buttonBase,
			color: options.primaryColor,
			marginLeft: "auto",
			marginRight: 5
		},
		buttonClose: {
			...buttonBase,
			color: options.textColor,
			height: 14,
			padding: 15,
			position: "absolute",
			right: 0,
			top: 0,
			width: 14
		},
		buttonSkip: {
			...buttonBase,
			color: options.textColor,
			fontSize: 14
		},
		overlay: {
			...overlay,
			backgroundColor: options.overlayColor,
			mixBlendMode: "hard-light"
		},
		overlayLegacy: { ...overlay },
		overlayLegacyCenter: {
			...overlay,
			backgroundColor: options.overlayColor
		},
		spotlight: {
			...spotlight,
			backgroundColor: "gray"
		},
		spotlightLegacy: {
			...spotlight,
			boxShadow: `0 0 0 9999px ${options.overlayColor}, ${options.spotlightShadow}`
		},
		floaterStyles: {
			arrow: { color: (_e = (_d = (_c = mergedFloaterProps == null ? void 0 : mergedFloaterProps.styles) == null ? void 0 : _c.arrow) == null ? void 0 : _d.color) != null ? _e : options.arrowColor },
			options: { zIndex: options.zIndex + 100 }
		},
		options
	}, mergedStyles);
}
function getTourProps(props) {
	return pick(props, "beaconComponent", "disableCloseOnEsc", "disableOverlay", "disableOverlayClose", "disableScrolling", "disableScrollParentFix", "floaterProps", "hideBackButton", "hideCloseButton", "locale", "showProgress", "showSkipButton", "spotlightClicks", "spotlightPadding", "styles", "tooltipComponent");
}
function getMergedStep(props, currentStep) {
	var _a, _b, _c, _d, _e, _f;
	const step = currentStep != null ? currentStep : {};
	const mergedStep = import_cjs.default.all([
		defaultStep,
		getTourProps(props),
		step
	], { isMergeableObject: src_default.plainObject });
	const mergedStyles = getStyles(props, mergedStep);
	const scrollParent2 = hasCustomScrollParent(getElement(mergedStep.target), mergedStep.disableScrollParentFix);
	const floaterProps = import_cjs.default.all([
		defaultFloaterProps,
		(_a = props.floaterProps) != null ? _a : {},
		(_b = mergedStep.floaterProps) != null ? _b : {}
	]);
	floaterProps.offset = mergedStep.offset;
	floaterProps.styles = (0, import_cjs.default)((_c = floaterProps.styles) != null ? _c : {}, mergedStyles.floaterStyles);
	floaterProps.offset += (_e = (_d = props.spotlightPadding) != null ? _d : mergedStep.spotlightPadding) != null ? _e : 0;
	if (mergedStep.placementBeacon && floaterProps.wrapperOptions) floaterProps.wrapperOptions.placement = mergedStep.placementBeacon;
	if (scrollParent2 && floaterProps.options.preventOverflow) floaterProps.options.preventOverflow.boundariesElement = "window";
	return {
		...mergedStep,
		locale: import_cjs.default.all([
			defaultLocale,
			(_f = props.locale) != null ? _f : {},
			mergedStep.locale || {}
		]),
		floaterProps,
		styles: omit(mergedStyles, "floaterStyles")
	};
}
function validateStep(step, debug = false) {
	if (!src_default.plainObject(step)) {
		log({
			title: "validateStep",
			data: "step must be an object",
			warn: true,
			debug
		});
		return false;
	}
	if (!step.target) {
		log({
			title: "validateStep",
			data: "target is missing from the step",
			warn: true,
			debug
		});
		return false;
	}
	return true;
}
function validateSteps(steps, debug = false) {
	if (!src_default.array(steps)) {
		log({
			title: "validateSteps",
			data: "steps must be an array",
			warn: true,
			debug
		});
		return false;
	}
	return steps.every((d) => validateStep(d, debug));
}
function createStore(options) {
	return new Store(options);
}
function JoyrideSpotlight({ styles }) {
	return /* @__PURE__ */ createElement("div", {
		key: "JoyrideSpotlight",
		className: "react-joyride__spotlight",
		"data-test-id": "spotlight",
		style: styles
	});
}
function JoyrideTooltipCloseButton({ styles, ...props }) {
	const { color, height, width, ...style } = styles;
	return /* @__PURE__ */ _storybook_global_react_default.createElement("button", {
		style,
		type: "button",
		...props
	}, /* @__PURE__ */ _storybook_global_react_default.createElement("svg", {
		height: typeof height === "number" ? `${height}px` : height,
		preserveAspectRatio: "xMidYMid",
		version: "1.1",
		viewBox: "0 0 18 18",
		width: typeof width === "number" ? `${width}px` : width,
		xmlns: "http://www.w3.org/2000/svg"
	}, /* @__PURE__ */ _storybook_global_react_default.createElement("g", null, /* @__PURE__ */ _storybook_global_react_default.createElement("path", {
		d: "M8.13911129,9.00268191 L0.171521827,17.0258467 C-0.0498027049,17.248715 -0.0498027049,17.6098394 0.171521827,17.8327545 C0.28204354,17.9443526 0.427188206,17.9998706 0.572051765,17.9998706 C0.71714958,17.9998706 0.862013139,17.9443526 0.972581703,17.8327545 L9.0000937,9.74924618 L17.0276057,17.8327545 C17.1384085,17.9443526 17.2832721,17.9998706 17.4281356,17.9998706 C17.5729992,17.9998706 17.718097,17.9443526 17.8286656,17.8327545 C18.0499901,17.6098862 18.0499901,17.2487618 17.8286656,17.0258467 L9.86135722,9.00268191 L17.8340066,0.973848225 C18.0553311,0.750979934 18.0553311,0.389855532 17.8340066,0.16694039 C17.6126821,-0.0556467968 17.254037,-0.0556467968 17.0329467,0.16694039 L9.00042166,8.25611765 L0.967006424,0.167268345 C0.745681892,-0.0553188426 0.387317931,-0.0553188426 0.165993399,0.167268345 C-0.0553311331,0.390136635 -0.0553311331,0.751261038 0.165993399,0.974176179 L8.13920499,9.00268191 L8.13911129,9.00268191 Z",
		fill: color
	}))));
}
function JoyrideTooltipContainer(props) {
	const { backProps, closeProps, index, isLastStep, primaryProps, skipProps, step, tooltipProps } = props;
	const { content, hideBackButton, hideCloseButton, hideFooter, showSkipButton, styles, title } = step;
	const output = {};
	output.primary = /* @__PURE__ */ createElement("button", {
		"data-test-id": "button-primary",
		style: styles.buttonNext,
		type: "button",
		...primaryProps
	});
	if (showSkipButton && !isLastStep) output.skip = /* @__PURE__ */ createElement("button", {
		"aria-live": "off",
		"data-test-id": "button-skip",
		style: styles.buttonSkip,
		type: "button",
		...skipProps
	});
	if (!hideBackButton && index > 0) output.back = /* @__PURE__ */ createElement("button", {
		"data-test-id": "button-back",
		style: styles.buttonBack,
		type: "button",
		...backProps
	});
	output.close = !hideCloseButton && /* @__PURE__ */ createElement(CloseButton_default, {
		"data-test-id": "button-close",
		styles: styles.buttonClose,
		...closeProps
	});
	return /* @__PURE__ */ createElement("div", {
		key: "JoyrideTooltip",
		"aria-label": getReactNodeText(title != null ? title : content),
		className: "react-joyride__tooltip",
		style: styles.tooltip,
		...tooltipProps
	}, /* @__PURE__ */ createElement("div", { style: styles.tooltipContainer }, title && /* @__PURE__ */ createElement("h1", {
		"aria-label": getReactNodeText(title),
		style: styles.tooltipTitle
	}, title), /* @__PURE__ */ createElement("div", { style: styles.tooltipContent }, content)), !hideFooter && /* @__PURE__ */ createElement("div", { style: styles.tooltipFooter }, /* @__PURE__ */ createElement("div", { style: styles.tooltipFooterSpacer }, output.skip), output.back, output.primary), output.close);
}
var import_scroll, import_scrollparent, import_react_innertext, import_cjs, import_cjs$1, __defProp, __defNormalProp, __publicField, ACTIONS, EVENTS, LIFECYCLE, STATUS, isReact16, defaultFloaterProps, defaultLocale, defaultStep, defaultProps, defaultOptions, buttonBase, spotlight, defaultState, validKeys, Store, Spotlight_default, JoyrideOverlay, JoyridePortal, Scope, JoyrideBeacon, CloseButton_default, Container_default, JoyrideTooltip, JoyrideStep, Joyride, components_default;
var init_dist = __esmMin((() => {
	init__storybook_global_react();
	init_dist$1();
	init_dist$3();
	init_dist$2();
	import_scroll = /* @__PURE__ */ __toESM(require_scroll(), 1);
	import_scrollparent = /* @__PURE__ */ __toESM(require_scrollparent(), 1);
	init__storybook_global_react_dom();
	import_react_innertext = /* @__PURE__ */ __toESM(require_react_innertext(), 1);
	import_cjs = /* @__PURE__ */ __toESM(require_cjs(), 1);
	import_cjs$1 = /* @__PURE__ */ __toESM(require_cjs(), 1);
	init_es();
	__defProp = Object.defineProperty;
	__defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
		enumerable: true,
		configurable: true,
		writable: true,
		value
	}) : obj[key] = value;
	__publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
	ACTIONS = {
		INIT: "init",
		START: "start",
		STOP: "stop",
		RESET: "reset",
		PREV: "prev",
		NEXT: "next",
		GO: "go",
		CLOSE: "close",
		SKIP: "skip",
		UPDATE: "update"
	};
	EVENTS = {
		TOUR_START: "tour:start",
		STEP_BEFORE: "step:before",
		BEACON: "beacon",
		TOOLTIP: "tooltip",
		STEP_AFTER: "step:after",
		TOUR_END: "tour:end",
		TOUR_STATUS: "tour:status",
		TARGET_NOT_FOUND: "error:target_not_found",
		ERROR: "error"
	};
	LIFECYCLE = {
		INIT: "init",
		READY: "ready",
		BEACON: "beacon",
		TOOLTIP: "tooltip",
		COMPLETE: "complete",
		ERROR: "error"
	};
	STATUS = {
		IDLE: "idle",
		READY: "ready",
		WAITING: "waiting",
		RUNNING: "running",
		PAUSED: "paused",
		SKIPPED: "skipped",
		FINISHED: "finished",
		ERROR: "error"
	};
	isReact16 = createPortal !== void 0;
	defaultFloaterProps = {
		options: { preventOverflow: { boundariesElement: "scrollParent" } },
		wrapperOptions: {
			offset: -18,
			position: true
		}
	};
	defaultLocale = {
		back: "Back",
		close: "Close",
		last: "Last",
		next: "Next",
		nextLabelWithProgress: "Next (Step {step} of {steps})",
		open: "Open the dialog",
		skip: "Skip"
	};
	defaultStep = {
		event: "click",
		placement: "bottom",
		offset: 10,
		disableBeacon: false,
		disableCloseOnEsc: false,
		disableOverlay: false,
		disableOverlayClose: false,
		disableScrollParentFix: false,
		disableScrolling: false,
		hideBackButton: false,
		hideCloseButton: false,
		hideFooter: false,
		isFixed: false,
		locale: defaultLocale,
		showProgress: false,
		showSkipButton: false,
		spotlightClicks: false,
		spotlightPadding: 10
	};
	defaultProps = {
		continuous: false,
		debug: false,
		disableCloseOnEsc: false,
		disableOverlay: false,
		disableOverlayClose: false,
		disableScrolling: false,
		disableScrollParentFix: false,
		getHelpers: void 0,
		hideBackButton: false,
		run: true,
		scrollOffset: 20,
		scrollDuration: 300,
		scrollToFirstStep: false,
		showSkipButton: false,
		showProgress: false,
		spotlightClicks: false,
		spotlightPadding: 10,
		steps: []
	};
	defaultOptions = {
		arrowColor: "#fff",
		backgroundColor: "#fff",
		beaconSize: 36,
		overlayColor: "rgba(0, 0, 0, 0.5)",
		primaryColor: "#f04",
		spotlightShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
		textColor: "#333",
		width: 380,
		zIndex: 100
	};
	buttonBase = {
		backgroundColor: "transparent",
		border: 0,
		borderRadius: 0,
		color: "#555",
		cursor: "pointer",
		fontSize: 16,
		lineHeight: 1,
		padding: 8,
		WebkitAppearance: "none"
	};
	spotlight = {
		borderRadius: 4,
		position: "absolute"
	};
	defaultState = {
		action: "init",
		controlled: false,
		index: 0,
		lifecycle: LIFECYCLE.INIT,
		origin: null,
		size: 0,
		status: STATUS.IDLE
	};
	validKeys = objectKeys(omit(defaultState, "controlled", "size"));
	Store = class {
		constructor(options) {
			__publicField(this, "beaconPopper");
			__publicField(this, "tooltipPopper");
			__publicField(this, "data", /* @__PURE__ */ new Map());
			__publicField(this, "listener");
			__publicField(this, "store", /* @__PURE__ */ new Map());
			__publicField(this, "addListener", (listener) => {
				this.listener = listener;
			});
			__publicField(this, "setSteps", (steps) => {
				const { size, status } = this.getState();
				const state = {
					size: steps.length,
					status
				};
				this.data.set("steps", steps);
				if (status === STATUS.WAITING && !size && steps.length) state.status = STATUS.RUNNING;
				this.setState(state);
			});
			__publicField(this, "getPopper", (name) => {
				if (name === "beacon") return this.beaconPopper;
				return this.tooltipPopper;
			});
			__publicField(this, "setPopper", (name, popper) => {
				if (name === "beacon") this.beaconPopper = popper;
				else this.tooltipPopper = popper;
			});
			__publicField(this, "cleanupPoppers", () => {
				this.beaconPopper = null;
				this.tooltipPopper = null;
			});
			__publicField(this, "close", (origin = null) => {
				const { index, status } = this.getState();
				if (status !== STATUS.RUNNING) return;
				this.setState({ ...this.getNextState({
					action: ACTIONS.CLOSE,
					index: index + 1,
					origin
				}) });
			});
			__publicField(this, "go", (nextIndex) => {
				const { controlled, status } = this.getState();
				if (controlled || status !== STATUS.RUNNING) return;
				const step = this.getSteps()[nextIndex];
				this.setState({
					...this.getNextState({
						action: ACTIONS.GO,
						index: nextIndex
					}),
					status: step ? status : STATUS.FINISHED
				});
			});
			__publicField(this, "info", () => this.getState());
			__publicField(this, "next", () => {
				const { index, status } = this.getState();
				if (status !== STATUS.RUNNING) return;
				this.setState(this.getNextState({
					action: ACTIONS.NEXT,
					index: index + 1
				}));
			});
			__publicField(this, "open", () => {
				const { status } = this.getState();
				if (status !== STATUS.RUNNING) return;
				this.setState({ ...this.getNextState({
					action: ACTIONS.UPDATE,
					lifecycle: LIFECYCLE.TOOLTIP
				}) });
			});
			__publicField(this, "prev", () => {
				const { index, status } = this.getState();
				if (status !== STATUS.RUNNING) return;
				this.setState({ ...this.getNextState({
					action: ACTIONS.PREV,
					index: index - 1
				}) });
			});
			__publicField(this, "reset", (restart = false) => {
				const { controlled } = this.getState();
				if (controlled) return;
				this.setState({
					...this.getNextState({
						action: ACTIONS.RESET,
						index: 0
					}),
					status: restart ? STATUS.RUNNING : STATUS.READY
				});
			});
			__publicField(this, "skip", () => {
				const { status } = this.getState();
				if (status !== STATUS.RUNNING) return;
				this.setState({
					action: ACTIONS.SKIP,
					lifecycle: LIFECYCLE.INIT,
					status: STATUS.SKIPPED
				});
			});
			__publicField(this, "start", (nextIndex) => {
				const { index, size } = this.getState();
				this.setState({
					...this.getNextState({
						action: ACTIONS.START,
						index: src_default.number(nextIndex) ? nextIndex : index
					}, true),
					status: size ? STATUS.RUNNING : STATUS.WAITING
				});
			});
			__publicField(this, "stop", (advance = false) => {
				const { index, status } = this.getState();
				if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) return;
				this.setState({
					...this.getNextState({
						action: ACTIONS.STOP,
						index: index + (advance ? 1 : 0)
					}),
					status: STATUS.PAUSED
				});
			});
			__publicField(this, "update", (state) => {
				var _a, _b;
				if (!hasValidKeys(state, validKeys)) throw new Error(`State is not valid. Valid keys: ${validKeys.join(", ")}`);
				this.setState({ ...this.getNextState({
					...this.getState(),
					...state,
					action: (_a = state.action) != null ? _a : ACTIONS.UPDATE,
					origin: (_b = state.origin) != null ? _b : null
				}, true) });
			});
			const { continuous = false, stepIndex, steps = [] } = options != null ? options : {};
			this.setState({
				action: ACTIONS.INIT,
				controlled: src_default.number(stepIndex),
				continuous,
				index: src_default.number(stepIndex) ? stepIndex : 0,
				lifecycle: LIFECYCLE.INIT,
				origin: null,
				status: steps.length ? STATUS.READY : STATUS.IDLE
			}, true);
			this.beaconPopper = null;
			this.tooltipPopper = null;
			this.listener = null;
			this.setSteps(steps);
		}
		getState() {
			if (!this.store.size) return { ...defaultState };
			return {
				action: this.store.get("action") || "",
				controlled: this.store.get("controlled") || false,
				index: parseInt(this.store.get("index"), 10),
				lifecycle: this.store.get("lifecycle") || "",
				origin: this.store.get("origin") || null,
				size: this.store.get("size") || 0,
				status: this.store.get("status") || ""
			};
		}
		getNextState(state, force = false) {
			var _a, _b, _c, _d, _e;
			const { action, controlled, index, size, status } = this.getState();
			const newIndex = src_default.number(state.index) ? state.index : index;
			const nextIndex = controlled && !force ? index : Math.min(Math.max(newIndex, 0), size);
			return {
				action: (_a = state.action) != null ? _a : action,
				controlled,
				index: nextIndex,
				lifecycle: (_b = state.lifecycle) != null ? _b : LIFECYCLE.INIT,
				origin: (_c = state.origin) != null ? _c : null,
				size: (_d = state.size) != null ? _d : size,
				status: nextIndex === size ? STATUS.FINISHED : (_e = state.status) != null ? _e : status
			};
		}
		getSteps() {
			const steps = this.data.get("steps");
			return Array.isArray(steps) ? steps : [];
		}
		hasUpdatedState(oldState) {
			return JSON.stringify(oldState) !== JSON.stringify(this.getState());
		}
		setState(nextState, initial = false) {
			const state = this.getState();
			const { action, index, lifecycle, origin = null, size, status } = {
				...state,
				...nextState
			};
			this.store.set("action", action);
			this.store.set("index", index);
			this.store.set("lifecycle", lifecycle);
			this.store.set("origin", origin);
			this.store.set("size", size);
			this.store.set("status", status);
			if (initial) {
				this.store.set("controlled", nextState.controlled);
				this.store.set("continuous", nextState.continuous);
			}
			if (this.listener && this.hasUpdatedState(state)) this.listener(this.getState());
		}
		getHelpers() {
			return {
				close: this.close,
				go: this.go,
				info: this.info,
				next: this.next,
				open: this.open,
				prev: this.prev,
				reset: this.reset,
				skip: this.skip
			};
		}
	};
	Spotlight_default = JoyrideSpotlight;
	JoyrideOverlay = class extends Component {
		constructor() {
			super(...arguments);
			__publicField(this, "isActive", false);
			__publicField(this, "resizeTimeout");
			__publicField(this, "scrollTimeout");
			__publicField(this, "scrollParent");
			__publicField(this, "state", {
				isScrolling: false,
				mouseOverSpotlight: false,
				showSpotlight: true
			});
			__publicField(this, "hideSpotlight", () => {
				const { continuous, disableOverlay, lifecycle } = this.props;
				const hiddenLifecycles = [
					LIFECYCLE.INIT,
					LIFECYCLE.BEACON,
					LIFECYCLE.COMPLETE,
					LIFECYCLE.ERROR
				];
				return disableOverlay || (continuous ? hiddenLifecycles.includes(lifecycle) : lifecycle !== LIFECYCLE.TOOLTIP);
			});
			__publicField(this, "handleMouseMove", (event) => {
				const { mouseOverSpotlight } = this.state;
				const { height, left, position, top, width } = this.spotlightStyles;
				const offsetY = position === "fixed" ? event.clientY : event.pageY;
				const offsetX = position === "fixed" ? event.clientX : event.pageX;
				const inSpotlightHeight = offsetY >= top && offsetY <= top + height;
				const inSpotlight = offsetX >= left && offsetX <= left + width && inSpotlightHeight;
				if (inSpotlight !== mouseOverSpotlight) this.updateState({ mouseOverSpotlight: inSpotlight });
			});
			__publicField(this, "handleScroll", () => {
				const { target } = this.props;
				const element = getElement(target);
				if (this.scrollParent !== document) {
					const { isScrolling } = this.state;
					if (!isScrolling) this.updateState({
						isScrolling: true,
						showSpotlight: false
					});
					clearTimeout(this.scrollTimeout);
					this.scrollTimeout = window.setTimeout(() => {
						this.updateState({
							isScrolling: false,
							showSpotlight: true
						});
					}, 50);
				} else if (hasPosition(element, "sticky")) this.updateState({});
			});
			__publicField(this, "handleResize", () => {
				clearTimeout(this.resizeTimeout);
				this.resizeTimeout = window.setTimeout(() => {
					if (!this.isActive) return;
					this.forceUpdate();
				}, 100);
			});
		}
		componentDidMount() {
			const { debug, disableScrolling, disableScrollParentFix = false, target } = this.props;
			const element = getElement(target);
			this.scrollParent = getScrollParent(element != null ? element : document.body, disableScrollParentFix, true);
			this.isActive = true;
			window.addEventListener("resize", this.handleResize);
		}
		componentDidUpdate(previousProps) {
			var _a;
			const { disableScrollParentFix, lifecycle, spotlightClicks, target } = this.props;
			const { changed } = treeChanges$1(previousProps, this.props);
			if (changed("target") || changed("disableScrollParentFix")) {
				const element = getElement(target);
				this.scrollParent = getScrollParent(element != null ? element : document.body, disableScrollParentFix, true);
			}
			if (changed("lifecycle", LIFECYCLE.TOOLTIP)) {
				(_a = this.scrollParent) == null || _a.addEventListener("scroll", this.handleScroll, { passive: true });
				setTimeout(() => {
					const { isScrolling } = this.state;
					if (!isScrolling) this.updateState({ showSpotlight: true });
				}, 100);
			}
			if (changed("spotlightClicks") || changed("disableOverlay") || changed("lifecycle")) {
				if (spotlightClicks && lifecycle === LIFECYCLE.TOOLTIP) window.addEventListener("mousemove", this.handleMouseMove, false);
				else if (lifecycle !== LIFECYCLE.TOOLTIP) window.removeEventListener("mousemove", this.handleMouseMove);
			}
		}
		componentWillUnmount() {
			var _a;
			this.isActive = false;
			window.removeEventListener("mousemove", this.handleMouseMove);
			window.removeEventListener("resize", this.handleResize);
			clearTimeout(this.resizeTimeout);
			clearTimeout(this.scrollTimeout);
			(_a = this.scrollParent) == null || _a.removeEventListener("scroll", this.handleScroll);
		}
		get overlayStyles() {
			const { mouseOverSpotlight } = this.state;
			const { disableOverlayClose, placement, styles } = this.props;
			let baseStyles = styles.overlay;
			if (isLegacy()) baseStyles = placement === "center" ? styles.overlayLegacyCenter : styles.overlayLegacy;
			return {
				cursor: disableOverlayClose ? "default" : "pointer",
				height: getDocumentHeight(),
				pointerEvents: mouseOverSpotlight ? "none" : "auto",
				...baseStyles
			};
		}
		get spotlightStyles() {
			var _a, _b, _c;
			const { showSpotlight } = this.state;
			const { disableScrollParentFix = false, spotlightClicks, spotlightPadding = 0, styles, target } = this.props;
			const element = getElement(target);
			const elementRect = getClientRect(element);
			const isFixedTarget = hasPosition(element);
			const top = getElementPosition(element, spotlightPadding, disableScrollParentFix);
			return {
				...isLegacy() ? styles.spotlightLegacy : styles.spotlight,
				height: Math.round(((_a = elementRect == null ? void 0 : elementRect.height) != null ? _a : 0) + spotlightPadding * 2),
				left: Math.round(((_b = elementRect == null ? void 0 : elementRect.left) != null ? _b : 0) - spotlightPadding),
				opacity: showSpotlight ? 1 : 0,
				pointerEvents: spotlightClicks ? "none" : "auto",
				position: isFixedTarget ? "fixed" : "absolute",
				top,
				transition: "opacity 0.2s",
				width: Math.round(((_c = elementRect == null ? void 0 : elementRect.width) != null ? _c : 0) + spotlightPadding * 2)
			};
		}
		updateState(state) {
			if (!this.isActive) return;
			this.setState((previousState) => ({
				...previousState,
				...state
			}));
		}
		render() {
			const { showSpotlight } = this.state;
			const { onClickOverlay, placement } = this.props;
			const { hideSpotlight, overlayStyles, spotlightStyles } = this;
			if (hideSpotlight()) return null;
			let spotlight2 = placement !== "center" && showSpotlight && /* @__PURE__ */ createElement(Spotlight_default, { styles: spotlightStyles });
			if (getBrowser() === "safari") {
				const { mixBlendMode, zIndex, ...safariOverlay } = overlayStyles;
				spotlight2 = /* @__PURE__ */ createElement("div", { style: { ...safariOverlay } }, spotlight2);
				delete overlayStyles.backgroundColor;
			}
			return /* @__PURE__ */ createElement("div", {
				className: "react-joyride__overlay",
				"data-test-id": "overlay",
				onClick: onClickOverlay,
				role: "presentation",
				style: overlayStyles
			}, spotlight2);
		}
	};
	JoyridePortal = class extends Component {
		constructor() {
			super(...arguments);
			__publicField(this, "node", null);
		}
		componentDidMount() {
			const { id } = this.props;
			if (!canUseDOM()) return;
			this.node = document.createElement("div");
			this.node.id = id;
			document.body.appendChild(this.node);
			if (!isReact16) this.renderReact15();
		}
		componentDidUpdate() {
			if (!canUseDOM()) return;
			if (!isReact16) this.renderReact15();
		}
		componentWillUnmount() {
			if (!canUseDOM() || !this.node) return;
			if (!isReact16) unmountComponentAtNode(this.node);
			if (this.node.parentNode === document.body) {
				document.body.removeChild(this.node);
				this.node = null;
			}
		}
		renderReact15() {
			if (!canUseDOM()) return;
			const { children } = this.props;
			if (this.node) unstable_renderSubtreeIntoContainer(this, children, this.node);
		}
		renderReact16() {
			if (!canUseDOM() || !isReact16) return null;
			const { children } = this.props;
			if (!this.node) return null;
			return createPortal(children, this.node);
		}
		render() {
			if (!isReact16) return null;
			return this.renderReact16();
		}
	};
	Scope = class {
		constructor(element, options) {
			__publicField(this, "element");
			__publicField(this, "options");
			__publicField(this, "canBeTabbed", (element) => {
				const { tabIndex } = element;
				if (tabIndex === null || tabIndex < 0) return false;
				return this.canHaveFocus(element);
			});
			__publicField(this, "canHaveFocus", (element) => {
				const validTabNodes = /input|select|textarea|button|object/;
				const nodeName = element.nodeName.toLowerCase();
				return (validTabNodes.test(nodeName) && !element.getAttribute("disabled") || nodeName === "a" && !!element.getAttribute("href")) && this.isVisible(element);
			});
			__publicField(this, "findValidTabElements", () => [].slice.call(this.element.querySelectorAll("*"), 0).filter(this.canBeTabbed));
			__publicField(this, "handleKeyDown", (event) => {
				const { code = "Tab" } = this.options;
				if (event.code === code) this.interceptTab(event);
			});
			__publicField(this, "interceptTab", (event) => {
				event.preventDefault();
				const elements = this.findValidTabElements();
				const { shiftKey } = event;
				if (!elements.length) return;
				let x = document.activeElement ? elements.indexOf(document.activeElement) : 0;
				if (x === -1 || !shiftKey && x + 1 === elements.length) x = 0;
				else if (shiftKey && x === 0) x = elements.length - 1;
				else x += shiftKey ? -1 : 1;
				elements[x].focus();
			});
			__publicField(this, "isHidden", (element) => {
				const noSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
				const style = window.getComputedStyle(element);
				if (noSize && !element.innerHTML) return true;
				return noSize && style.getPropertyValue("overflow") !== "visible" || style.getPropertyValue("display") === "none";
			});
			__publicField(this, "isVisible", (element) => {
				let parentElement = element;
				while (parentElement) if (parentElement instanceof HTMLElement) {
					if (parentElement === document.body) break;
					if (this.isHidden(parentElement)) return false;
					parentElement = parentElement.parentNode;
				}
				return true;
			});
			__publicField(this, "removeScope", () => {
				window.removeEventListener("keydown", this.handleKeyDown);
			});
			__publicField(this, "checkFocus", (target) => {
				if (document.activeElement !== target) {
					target.focus();
					window.requestAnimationFrame(() => this.checkFocus(target));
				}
			});
			__publicField(this, "setFocus", () => {
				const { selector } = this.options;
				if (!selector) return;
				const target = this.element.querySelector(selector);
				if (target) window.requestAnimationFrame(() => this.checkFocus(target));
			});
			if (!(element instanceof HTMLElement)) throw new TypeError("Invalid parameter: element must be an HTMLElement");
			this.element = element;
			this.options = options;
			window.addEventListener("keydown", this.handleKeyDown, false);
			this.setFocus();
		}
	};
	JoyrideBeacon = class extends Component {
		constructor(props) {
			super(props);
			__publicField(this, "beacon", null);
			__publicField(this, "setBeaconRef", (c) => {
				this.beacon = c;
			});
			if (props.beaconComponent) return;
			const head = document.head || document.getElementsByTagName("head")[0];
			const style = document.createElement("style");
			style.id = "joyride-beacon-animation";
			if (props.nonce) style.setAttribute("nonce", props.nonce);
			style.appendChild(document.createTextNode(`
        @keyframes joyride-beacon-inner {
          20% {
            opacity: 0.9;
          }
        
          90% {
            opacity: 0.7;
          }
        }
        
        @keyframes joyride-beacon-outer {
          0% {
            transform: scale(1);
          }
        
          45% {
            opacity: 0.7;
            transform: scale(0.75);
          }
        
          100% {
            opacity: 0.9;
            transform: scale(1);
          }
        }
      `));
			head.appendChild(style);
		}
		componentDidMount() {
			const { shouldFocus } = this.props;
			setTimeout(() => {
				if (src_default.domElement(this.beacon) && shouldFocus) this.beacon.focus();
			}, 0);
		}
		componentWillUnmount() {
			const style = document.getElementById("joyride-beacon-animation");
			if (style == null ? void 0 : style.parentNode) style.parentNode.removeChild(style);
		}
		render() {
			const { beaconComponent, continuous, index, isLastStep, locale, onClickOrHover, size, step, styles } = this.props;
			const title = getReactNodeText(locale.open);
			const sharedProps = {
				"aria-label": title,
				onClick: onClickOrHover,
				onMouseEnter: onClickOrHover,
				ref: this.setBeaconRef,
				title
			};
			let component;
			if (beaconComponent) component = /* @__PURE__ */ createElement(beaconComponent, {
				continuous,
				index,
				isLastStep,
				size,
				step,
				...sharedProps
			});
			else component = /* @__PURE__ */ createElement("button", {
				key: "JoyrideBeacon",
				className: "react-joyride__beacon",
				"data-test-id": "button-beacon",
				style: styles.beacon,
				type: "button",
				...sharedProps
			}, /* @__PURE__ */ createElement("span", { style: styles.beaconInner }), /* @__PURE__ */ createElement("span", { style: styles.beaconOuter }));
			return component;
		}
	};
	CloseButton_default = JoyrideTooltipCloseButton;
	Container_default = JoyrideTooltipContainer;
	JoyrideTooltip = class extends Component {
		constructor() {
			super(...arguments);
			__publicField(this, "handleClickBack", (event) => {
				event.preventDefault();
				const { helpers } = this.props;
				helpers.prev();
			});
			__publicField(this, "handleClickClose", (event) => {
				event.preventDefault();
				const { helpers } = this.props;
				helpers.close("button_close");
			});
			__publicField(this, "handleClickPrimary", (event) => {
				event.preventDefault();
				const { continuous, helpers } = this.props;
				if (!continuous) {
					helpers.close("button_primary");
					return;
				}
				helpers.next();
			});
			__publicField(this, "handleClickSkip", (event) => {
				event.preventDefault();
				const { helpers } = this.props;
				helpers.skip();
			});
			__publicField(this, "getElementsProps", () => {
				const { continuous, index, isLastStep, setTooltipRef, size, step } = this.props;
				const { back, close, last, next, nextLabelWithProgress, skip } = step.locale;
				const backText = getReactNodeText(back);
				const closeText = getReactNodeText(close);
				const lastText = getReactNodeText(last);
				const nextText = getReactNodeText(next);
				const skipText = getReactNodeText(skip);
				let primary = close;
				let primaryText = closeText;
				if (continuous) {
					primary = next;
					primaryText = nextText;
					if (step.showProgress && !isLastStep) {
						const labelWithProgress = getReactNodeText(nextLabelWithProgress, {
							step: index + 1,
							steps: size
						});
						primary = replaceLocaleContent(nextLabelWithProgress, index + 1, size);
						primaryText = labelWithProgress;
					}
					if (isLastStep) {
						primary = last;
						primaryText = lastText;
					}
				}
				return {
					backProps: {
						"aria-label": backText,
						children: back,
						"data-action": "back",
						onClick: this.handleClickBack,
						role: "button",
						title: backText
					},
					closeProps: {
						"aria-label": closeText,
						children: close,
						"data-action": "close",
						onClick: this.handleClickClose,
						role: "button",
						title: closeText
					},
					primaryProps: {
						"aria-label": primaryText,
						children: primary,
						"data-action": "primary",
						onClick: this.handleClickPrimary,
						role: "button",
						title: primaryText
					},
					skipProps: {
						"aria-label": skipText,
						children: skip,
						"data-action": "skip",
						onClick: this.handleClickSkip,
						role: "button",
						title: skipText
					},
					tooltipProps: {
						"aria-modal": true,
						ref: setTooltipRef,
						role: "alertdialog"
					}
				};
			});
		}
		render() {
			const { continuous, index, isLastStep, setTooltipRef, size, step } = this.props;
			const { beaconComponent, tooltipComponent, ...cleanStep } = step;
			let component;
			if (tooltipComponent) component = /* @__PURE__ */ createElement(tooltipComponent, {
				...this.getElementsProps(),
				continuous,
				index,
				isLastStep,
				size,
				step: cleanStep,
				setTooltipRef
			});
			else component = /* @__PURE__ */ createElement(Container_default, {
				...this.getElementsProps(),
				continuous,
				index,
				isLastStep,
				size,
				step
			});
			return component;
		}
	};
	JoyrideStep = class extends Component {
		constructor() {
			super(...arguments);
			__publicField(this, "scope", null);
			__publicField(this, "tooltip", null);
			/**
			* Beacon click/hover event listener
			*/
			__publicField(this, "handleClickHoverBeacon", (event) => {
				const { step, store } = this.props;
				if (event.type === "mouseenter" && step.event !== "hover") return;
				store.update({ lifecycle: LIFECYCLE.TOOLTIP });
			});
			__publicField(this, "setTooltipRef", (element) => {
				this.tooltip = element;
			});
			__publicField(this, "setPopper", (popper, type) => {
				var _a;
				const { action, lifecycle, step, store } = this.props;
				if (type === "wrapper") store.setPopper("beacon", popper);
				else store.setPopper("tooltip", popper);
				if (store.getPopper("beacon") && (store.getPopper("tooltip") || step.placement === "center") && lifecycle === LIFECYCLE.INIT) store.update({
					action,
					lifecycle: LIFECYCLE.READY
				});
				if ((_a = step.floaterProps) == null ? void 0 : _a.getPopper) step.floaterProps.getPopper(popper, type);
			});
			__publicField(this, "renderTooltip", (renderProps) => {
				const { continuous, helpers, index, size, step } = this.props;
				return /* @__PURE__ */ createElement(JoyrideTooltip, {
					continuous,
					helpers,
					index,
					isLastStep: index + 1 === size,
					setTooltipRef: this.setTooltipRef,
					size,
					step,
					...renderProps
				});
			});
		}
		componentDidMount() {
			const { debug, index } = this.props;
			log({
				title: `step:${index}`,
				data: [{
					key: "props",
					value: this.props
				}],
				debug
			});
		}
		componentDidUpdate(previousProps) {
			var _a;
			const { action, callback, continuous, controlled, debug, helpers, index, lifecycle, shouldScroll: shouldScroll2, status, step, store } = this.props;
			const { changed, changedFrom } = treeChanges$1(previousProps, this.props);
			const state = helpers.info();
			const skipBeacon = continuous && action !== ACTIONS.CLOSE && (index > 0 || action === ACTIONS.PREV);
			const hasStoreChanged = changed("action") || changed("index") || changed("lifecycle") || changed("status");
			const isInitial = changedFrom("lifecycle", [LIFECYCLE.TOOLTIP, LIFECYCLE.INIT], LIFECYCLE.INIT);
			const isAfterAction = changed("action", [
				ACTIONS.NEXT,
				ACTIONS.PREV,
				ACTIONS.SKIP,
				ACTIONS.CLOSE
			]);
			const isControlled = controlled && index === previousProps.index;
			if (isAfterAction && (isInitial || isControlled)) callback({
				...state,
				index: previousProps.index,
				lifecycle: LIFECYCLE.COMPLETE,
				step: previousProps.step,
				type: EVENTS.STEP_AFTER
			});
			if (step.placement === "center" && status === STATUS.RUNNING && changed("index") && action !== ACTIONS.START && lifecycle === LIFECYCLE.INIT) store.update({ lifecycle: LIFECYCLE.READY });
			if (hasStoreChanged) {
				const element = getElement(step.target);
				const elementExists = !!element;
				if (elementExists && isElementVisible(element)) {
					if (changedFrom("status", STATUS.READY, STATUS.RUNNING) || changedFrom("lifecycle", LIFECYCLE.INIT, LIFECYCLE.READY)) callback({
						...state,
						step,
						type: EVENTS.STEP_BEFORE
					});
				} else {
					console.warn(elementExists ? "Target not visible" : "Target not mounted", step);
					callback({
						...state,
						type: EVENTS.TARGET_NOT_FOUND,
						step
					});
					if (!controlled) store.update({ index: index + (action === ACTIONS.PREV ? -1 : 1) });
				}
			}
			if (changedFrom("lifecycle", LIFECYCLE.INIT, LIFECYCLE.READY)) store.update({ lifecycle: hideBeacon(step) || skipBeacon ? LIFECYCLE.TOOLTIP : LIFECYCLE.BEACON });
			if (changed("index")) log({
				title: `step:${lifecycle}`,
				data: [{
					key: "props",
					value: this.props
				}],
				debug
			});
			if (changed("lifecycle", LIFECYCLE.BEACON)) callback({
				...state,
				step,
				type: EVENTS.BEACON
			});
			if (changed("lifecycle", LIFECYCLE.TOOLTIP)) {
				callback({
					...state,
					step,
					type: EVENTS.TOOLTIP
				});
				if (shouldScroll2 && this.tooltip) {
					this.scope = new Scope(this.tooltip, { selector: "[data-action=primary]" });
					this.scope.setFocus();
				}
			}
			if (changedFrom("lifecycle", [LIFECYCLE.TOOLTIP, LIFECYCLE.INIT], LIFECYCLE.INIT)) {
				(_a = this.scope) == null || _a.removeScope();
				store.cleanupPoppers();
			}
		}
		componentWillUnmount() {
			var _a;
			(_a = this.scope) == null || _a.removeScope();
		}
		get open() {
			const { lifecycle, step } = this.props;
			return hideBeacon(step) || lifecycle === LIFECYCLE.TOOLTIP;
		}
		render() {
			const { continuous, debug, index, nonce, shouldScroll: shouldScroll2, size, step } = this.props;
			const target = getElement(step.target);
			if (!validateStep(step) || !src_default.domElement(target)) return null;
			return /* @__PURE__ */ createElement("div", {
				key: `JoyrideStep-${index}`,
				className: "react-joyride__step"
			}, /* @__PURE__ */ createElement(ReactFloater, {
				...step.floaterProps,
				component: this.renderTooltip,
				debug,
				getPopper: this.setPopper,
				id: `react-joyride-step-${index}`,
				open: this.open,
				placement: step.placement,
				target: step.target
			}, /* @__PURE__ */ createElement(JoyrideBeacon, {
				beaconComponent: step.beaconComponent,
				continuous,
				index,
				isLastStep: index + 1 === size,
				locale: step.locale,
				nonce,
				onClickOrHover: this.handleClickHoverBeacon,
				shouldFocus: shouldScroll2,
				size,
				step,
				styles: step.styles
			})));
		}
	};
	Joyride = class extends Component {
		constructor(props) {
			super(props);
			__publicField(this, "helpers");
			__publicField(this, "store");
			/**
			* Trigger the callback.
			*/
			__publicField(this, "callback", (data) => {
				const { callback } = this.props;
				if (src_default.function(callback)) callback(data);
			});
			/**
			* Keydown event listener
			*/
			__publicField(this, "handleKeyboard", (event) => {
				const { index, lifecycle } = this.state;
				const { steps } = this.props;
				const step = steps[index];
				if (lifecycle === LIFECYCLE.TOOLTIP) {
					if (event.code === "Escape" && step && !step.disableCloseOnEsc) this.store.close("keyboard");
				}
			});
			__publicField(this, "handleClickOverlay", () => {
				const { index } = this.state;
				const { steps } = this.props;
				if (!getMergedStep(this.props, steps[index]).disableOverlayClose) this.helpers.close("overlay");
			});
			/**
			* Sync the store with the component's state
			*/
			__publicField(this, "syncState", (state) => {
				this.setState(state);
			});
			const { debug, getHelpers, run = true, stepIndex } = props;
			this.store = createStore({
				...props,
				controlled: run && src_default.number(stepIndex)
			});
			this.helpers = this.store.getHelpers();
			const { addListener } = this.store;
			log({
				title: "init",
				data: [{
					key: "props",
					value: this.props
				}, {
					key: "state",
					value: this.state
				}],
				debug
			});
			addListener(this.syncState);
			if (getHelpers) getHelpers(this.helpers);
			this.state = this.store.getState();
		}
		componentDidMount() {
			if (!canUseDOM()) return;
			const { debug, disableCloseOnEsc, run, steps } = this.props;
			const { start } = this.store;
			if (validateSteps(steps, debug) && run) start();
			if (!disableCloseOnEsc) document.body.addEventListener("keydown", this.handleKeyboard, { passive: true });
		}
		componentDidUpdate(previousProps, previousState) {
			if (!canUseDOM()) return;
			const { action, controlled, index, status } = this.state;
			const { debug, run, stepIndex, steps } = this.props;
			const { stepIndex: previousStepIndex, steps: previousSteps } = previousProps;
			const { reset, setSteps, start, stop, update } = this.store;
			const { changed: changedProps } = treeChanges$1(previousProps, this.props);
			const { changed, changedFrom } = treeChanges$1(previousState, this.state);
			const step = getMergedStep(this.props, steps[index]);
			const stepsChanged = !equal$1(previousSteps, steps);
			const stepIndexChanged = src_default.number(stepIndex) && changedProps("stepIndex");
			const target = getElement(step.target);
			if (stepsChanged) if (validateSteps(steps, debug)) setSteps(steps);
			else console.warn("Steps are not valid", steps);
			if (changedProps("run")) if (run) start(stepIndex);
			else stop();
			if (stepIndexChanged) {
				let nextAction = src_default.number(previousStepIndex) && previousStepIndex < stepIndex ? ACTIONS.NEXT : ACTIONS.PREV;
				if (action === ACTIONS.STOP) nextAction = ACTIONS.START;
				if (![STATUS.FINISHED, STATUS.SKIPPED].includes(status)) update({
					action: action === ACTIONS.CLOSE ? ACTIONS.CLOSE : nextAction,
					index: stepIndex,
					lifecycle: LIFECYCLE.INIT
				});
			}
			if (!controlled && status === STATUS.RUNNING && index === 0 && !target) {
				this.store.update({ index: index + 1 });
				this.callback({
					...this.state,
					type: EVENTS.TARGET_NOT_FOUND,
					step
				});
			}
			const callbackData = {
				...this.state,
				index,
				step
			};
			if (changed("action", [
				ACTIONS.NEXT,
				ACTIONS.PREV,
				ACTIONS.SKIP,
				ACTIONS.CLOSE
			]) && changed("status", STATUS.PAUSED)) {
				const previousStep = getMergedStep(this.props, steps[previousState.index]);
				this.callback({
					...callbackData,
					index: previousState.index,
					lifecycle: LIFECYCLE.COMPLETE,
					step: previousStep,
					type: EVENTS.STEP_AFTER
				});
			}
			if (changed("status", [STATUS.FINISHED, STATUS.SKIPPED])) {
				const previousStep = getMergedStep(this.props, steps[previousState.index]);
				if (!controlled) this.callback({
					...callbackData,
					index: previousState.index,
					lifecycle: LIFECYCLE.COMPLETE,
					step: previousStep,
					type: EVENTS.STEP_AFTER
				});
				this.callback({
					...callbackData,
					type: EVENTS.TOUR_END,
					step: previousStep,
					index: previousState.index
				});
				reset();
			} else if (changedFrom("status", [STATUS.IDLE, STATUS.READY], STATUS.RUNNING)) this.callback({
				...callbackData,
				type: EVENTS.TOUR_START
			});
			else if (changed("status") || changed("action", ACTIONS.RESET)) this.callback({
				...callbackData,
				type: EVENTS.TOUR_STATUS
			});
			this.scrollToStep(previousState);
		}
		componentWillUnmount() {
			const { disableCloseOnEsc } = this.props;
			if (!disableCloseOnEsc) document.body.removeEventListener("keydown", this.handleKeyboard);
		}
		scrollToStep(previousState) {
			const { index, lifecycle, status } = this.state;
			const { debug, disableScrollParentFix = false, scrollDuration, scrollOffset = 20, scrollToFirstStep = false, steps } = this.props;
			const step = getMergedStep(this.props, steps[index]);
			const target = getElement(step.target);
			const shouldScrollToStep = shouldScroll({
				isFirstStep: index === 0,
				lifecycle,
				previousLifecycle: previousState.lifecycle,
				scrollToFirstStep,
				step,
				target
			});
			if (status === STATUS.RUNNING && shouldScrollToStep) {
				const hasCustomScroll = hasCustomScrollParent(target, disableScrollParentFix);
				const scrollParent2 = getScrollParent(target, disableScrollParentFix);
				let scrollY = Math.floor(getScrollTo(target, scrollOffset, disableScrollParentFix)) || 0;
				log({
					title: "scrollToStep",
					data: [
						{
							key: "index",
							value: index
						},
						{
							key: "lifecycle",
							value: lifecycle
						},
						{
							key: "status",
							value: status
						}
					],
					debug
				});
				const beaconPopper = this.store.getPopper("beacon");
				const tooltipPopper = this.store.getPopper("tooltip");
				if (lifecycle === LIFECYCLE.BEACON && beaconPopper) {
					const { offsets, placement } = beaconPopper;
					if (!["bottom"].includes(placement) && !hasCustomScroll) scrollY = Math.floor(offsets.popper.top - scrollOffset);
				} else if (lifecycle === LIFECYCLE.TOOLTIP && tooltipPopper) {
					const { flipped, offsets, placement } = tooltipPopper;
					if ([
						"top",
						"right",
						"left"
					].includes(placement) && !flipped && !hasCustomScroll) scrollY = Math.floor(offsets.popper.top - scrollOffset);
					else scrollY -= step.spotlightPadding;
				}
				scrollY = scrollY >= 0 ? scrollY : 0;
				if (status === STATUS.RUNNING) scrollTo(scrollY, {
					element: scrollParent2,
					duration: scrollDuration
				}).then(() => {
					setTimeout(() => {
						var _a;
						(_a = this.store.getPopper("tooltip")) == null || _a.instance.update();
					}, 10);
				});
			}
		}
		render() {
			if (!canUseDOM()) return null;
			const { index, lifecycle, status } = this.state;
			const { continuous = false, debug = false, nonce, scrollToFirstStep = false, steps } = this.props;
			const isRunning = status === STATUS.RUNNING;
			const content = {};
			if (isRunning && steps[index]) {
				const step = getMergedStep(this.props, steps[index]);
				content.step = /* @__PURE__ */ createElement(JoyrideStep, {
					...this.state,
					callback: this.callback,
					continuous,
					debug,
					helpers: this.helpers,
					nonce,
					shouldScroll: !step.disableScrolling && (index !== 0 || scrollToFirstStep),
					step,
					store: this.store
				});
				content.overlay = /* @__PURE__ */ createElement(JoyridePortal, { id: "react-joyride-portal" }, /* @__PURE__ */ createElement(JoyrideOverlay, {
					...step,
					continuous,
					debug,
					lifecycle,
					onClickOverlay: this.handleClickOverlay
				}));
			}
			return /* @__PURE__ */ createElement("div", { className: "react-joyride" }, content.step, content.overlay);
		}
	};
	__publicField(Joyride, "defaultProps", defaultProps);
	components_default = Joyride;
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/collections/getChildNodes.mjs
function $cd5ea4b915021f1d$export$1005530eda016c13(node, collection) {
	if (typeof collection.getChildren === "function") return collection.getChildren(node.key);
	return node.childNodes;
}
function $cd5ea4b915021f1d$export$fbdeaa6a76694f71(iterable) {
	return $cd5ea4b915021f1d$export$5f3398f8733f90e2(iterable, 0);
}
function $cd5ea4b915021f1d$export$5f3398f8733f90e2(iterable, index) {
	if (index < 0) return void 0;
	let i = 0;
	for (let item of iterable) {
		if (i === index) return item;
		i++;
	}
}
function $cd5ea4b915021f1d$export$8c434b3a7a4dad6(collection, a, b) {
	if (a.parentKey === b.parentKey) return a.index - b.index;
	let aAncestors = [...$cd5ea4b915021f1d$var$getAncestors(collection, a), a];
	let bAncestors = [...$cd5ea4b915021f1d$var$getAncestors(collection, b), b];
	let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i) => a !== bAncestors[i]);
	if (firstNonMatchingAncestor !== -1) {
		a = aAncestors[firstNonMatchingAncestor];
		b = bAncestors[firstNonMatchingAncestor];
		return a.index - b.index;
	}
	if (aAncestors.findIndex((node) => node === b) >= 0) return 1;
	else if (bAncestors.findIndex((node) => node === a) >= 0) return -1;
	return -1;
}
function $cd5ea4b915021f1d$var$getAncestors(collection, node) {
	let parents = [];
	let currNode = node;
	while (currNode?.parentKey != null) {
		currNode = collection.getItem(currNode.parentKey);
		if (currNode) parents.unshift(currNode);
	}
	return parents;
}
var init_getChildNodes = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/selection/Selection.mjs
var $8b2540e09867b15e$export$52baac22726c72bf;
var init_Selection = __esmMin((() => {
	$8b2540e09867b15e$export$52baac22726c72bf = class $8b2540e09867b15e$export$52baac22726c72bf extends Set {
		constructor(keys, anchorKey, currentKey) {
			super(keys);
			if (keys instanceof $8b2540e09867b15e$export$52baac22726c72bf) {
				this.anchorKey = anchorKey ?? keys.anchorKey;
				this.currentKey = currentKey ?? keys.currentKey;
			} else {
				this.anchorKey = anchorKey ?? null;
				this.currentKey = currentKey ?? null;
			}
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/selection/useMultipleSelectionState.mjs
function $60f19cefd567a3e4$var$equalSets(setA, setB) {
	if (setA.size !== setB.size) return false;
	for (let item of setA) if (!setB.has(item)) return false;
	return true;
}
function $60f19cefd567a3e4$export$253fe78d46329472(props) {
	let { selectionMode = "none", disallowEmptySelection = false, allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = "toggle", disabledBehavior = "all" } = props;
	let isFocusedRef = useRef(false);
	let [, setFocused] = useState(false);
	let focusedKeyRef = useRef(null);
	let childFocusStrategyRef = useRef(null);
	let [, setFocusedKey] = useState(null);
	let [selectedKeys, setSelectedKeys] = $3e6197669829fe11$export$40bfa8c7b0832715(useMemo(() => $60f19cefd567a3e4$var$convertSelection(props.selectedKeys), [props.selectedKeys]), useMemo(() => $60f19cefd567a3e4$var$convertSelection(props.defaultSelectedKeys, new $8b2540e09867b15e$export$52baac22726c72bf()), [props.defaultSelectedKeys]), props.onSelectionChange);
	let disabledKeysProp = useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [props.disabledKeys]);
	let [selectionBehavior, setSelectionBehavior] = useState(selectionBehaviorProp);
	if (selectionBehaviorProp === "replace" && selectionBehavior === "toggle" && typeof selectedKeys === "object" && selectedKeys.size === 0) setSelectionBehavior("replace");
	let lastSelectionBehavior = useRef(selectionBehaviorProp);
	useEffect(() => {
		if (selectionBehaviorProp !== lastSelectionBehavior.current) {
			setSelectionBehavior(selectionBehaviorProp);
			lastSelectionBehavior.current = selectionBehaviorProp;
		}
	}, [selectionBehaviorProp]);
	return {
		selectionMode,
		disallowEmptySelection,
		selectionBehavior,
		setSelectionBehavior,
		get isFocused() {
			return isFocusedRef.current;
		},
		setFocused(f) {
			isFocusedRef.current = f;
			setFocused(f);
		},
		get focusedKey() {
			return focusedKeyRef.current;
		},
		get childFocusStrategy() {
			return childFocusStrategyRef.current;
		},
		setFocusedKey(k, childFocusStrategy = "first") {
			focusedKeyRef.current = k;
			childFocusStrategyRef.current = childFocusStrategy;
			setFocusedKey(k);
		},
		selectedKeys,
		setSelectedKeys(keys) {
			if (allowDuplicateSelectionEvents || !$60f19cefd567a3e4$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
		},
		disabledKeys: disabledKeysProp,
		disabledBehavior
	};
}
function $60f19cefd567a3e4$var$convertSelection(selection, defaultValue) {
	if (!selection) return defaultValue;
	return selection === "all" ? "all" : new $8b2540e09867b15e$export$52baac22726c72bf(selection);
}
var init_useMultipleSelectionState = __esmMin((() => {
	init_Selection();
	init_useControlledState$1();
	init__storybook_global_react();
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/selection/SelectionManager.mjs
var $4a07ac835f260f78$export$6c8a5aaad13c9852;
var init_SelectionManager = __esmMin((() => {
	init_getChildNodes();
	init_Selection();
	$4a07ac835f260f78$export$6c8a5aaad13c9852 = class $4a07ac835f260f78$export$6c8a5aaad13c9852 {
		constructor(collection, state, options) {
			this.collection = collection;
			this.state = state;
			this.allowsCellSelection = options?.allowsCellSelection ?? false;
			this._isSelectAll = null;
			this.layoutDelegate = options?.layoutDelegate || null;
			this.fullCollection = options?.fullCollection || null;
		}
		/**
		* The type of selection that is allowed in the collection.
		*/ get selectionMode() {
			return this.state.selectionMode;
		}
		/**
		* Whether the collection allows empty selection.
		*/ get disallowEmptySelection() {
			return this.state.disallowEmptySelection;
		}
		/**
		* The selection behavior for the collection.
		*/ get selectionBehavior() {
			return this.state.selectionBehavior;
		}
		/**
		* Sets the selection behavior for the collection.
		*/ setSelectionBehavior(selectionBehavior) {
			this.state.setSelectionBehavior(selectionBehavior);
		}
		/**
		* Whether the collection is currently focused.
		*/ get isFocused() {
			return this.state.isFocused;
		}
		/**
		* Sets whether the collection is focused.
		*/ setFocused(isFocused) {
			this.state.setFocused(isFocused);
		}
		/**
		* The current focused key in the collection.
		*/ get focusedKey() {
			return this.state.focusedKey;
		}
		/** Whether the first or last child of the focused key should receive focus. */ get childFocusStrategy() {
			return this.state.childFocusStrategy;
		}
		/**
		* Sets the focused key.
		*/ setFocusedKey(key, childFocusStrategy) {
			if (key == null || this.collection.getItem(key)) this.state.setFocusedKey(key, childFocusStrategy);
		}
		/**
		* The currently selected keys in the collection.
		*/ get selectedKeys() {
			return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
		}
		/**
		* The raw selection value for the collection.
		* Either 'all' for select all, or a set of keys.
		*/ get rawSelection() {
			return this.state.selectedKeys;
		}
		/**
		* Returns whether a key is selected.
		*/ isSelected(key) {
			if (this.state.selectionMode === "none") return false;
			let mappedKey = this.getKey(key);
			if (mappedKey == null) return false;
			return this.state.selectedKeys === "all" ? this.canSelectItem(mappedKey) : this.state.selectedKeys.has(mappedKey);
		}
		/**
		* Whether the selection is empty.
		*/ get isEmpty() {
			return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
		}
		/**
		* Whether all items in the collection are selected.
		*/ get isSelectAll() {
			if (this.isEmpty) return false;
			if (this.state.selectedKeys === "all") return true;
			if (this._isSelectAll != null) return this._isSelectAll;
			let allKeys = this.getSelectAllKeys();
			let selectedKeys = this.state.selectedKeys;
			this._isSelectAll = allKeys.every((k) => selectedKeys.has(k));
			return this._isSelectAll;
		}
		get firstSelectedKey() {
			let first = null;
			for (let key of this.state.selectedKeys) {
				let item = this.collection.getItem(key);
				if (!first || item && $cd5ea4b915021f1d$export$8c434b3a7a4dad6(this.collection, item, first) < 0) first = item;
			}
			return first?.key ?? null;
		}
		get lastSelectedKey() {
			let last = null;
			for (let key of this.state.selectedKeys) {
				let item = this.collection.getItem(key);
				if (!last || item && $cd5ea4b915021f1d$export$8c434b3a7a4dad6(this.collection, item, last) > 0) last = item;
			}
			return last?.key ?? null;
		}
		get disabledKeys() {
			return this.state.disabledKeys;
		}
		get disabledBehavior() {
			return this.state.disabledBehavior;
		}
		/**
		* Extends the selection to the given key.
		*/ extendSelection(toKey) {
			if (this.selectionMode === "none") return;
			if (this.selectionMode === "single") {
				this.replaceSelection(toKey);
				return;
			}
			let mappedToKey = this.getKey(toKey);
			if (mappedToKey == null) return;
			let selection;
			if (this.state.selectedKeys === "all") selection = new $8b2540e09867b15e$export$52baac22726c72bf([mappedToKey], mappedToKey, mappedToKey);
			else {
				let selectedKeys = this.state.selectedKeys;
				let anchorKey = selectedKeys.anchorKey ?? mappedToKey;
				selection = new $8b2540e09867b15e$export$52baac22726c72bf(selectedKeys, anchorKey, mappedToKey);
				for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey ?? mappedToKey)) selection.delete(key);
				for (let key of this.getKeyRange(mappedToKey, anchorKey)) if (this.canSelectItem(key)) selection.add(key);
			}
			this.state.setSelectedKeys(selection);
		}
		getKeyRange(from, to) {
			let fromItem = this.collection.getItem(from);
			let toItem = this.collection.getItem(to);
			if (fromItem && toItem) {
				if ($cd5ea4b915021f1d$export$8c434b3a7a4dad6(this.collection, fromItem, toItem) <= 0) return this.getKeyRangeInternal(from, to);
				return this.getKeyRangeInternal(to, from);
			}
			return [];
		}
		getKeyRangeInternal(from, to) {
			if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(from, to);
			let keys = [];
			let key = from;
			while (key != null) {
				let item = this.collection.getItem(key);
				if (item && (item.type === "item" || item.type === "cell" && this.allowsCellSelection)) keys.push(key);
				if (key === to) return keys;
				key = this.collection.getKeyAfter(key);
			}
			return [];
		}
		getKey(key) {
			let item = this.collection.getItem(key);
			if (!item) return key;
			if (item.type === "cell" && this.allowsCellSelection) return key;
			while (item && item.type !== "item" && item.parentKey != null) item = this.collection.getItem(item.parentKey);
			if (!item || item.type !== "item") return null;
			return item.key;
		}
		/**
		* Toggles whether the given key is selected.
		*/ toggleSelection(key) {
			if (this.selectionMode === "none") return;
			if (this.selectionMode === "single" && !this.isSelected(key)) {
				this.replaceSelection(key);
				return;
			}
			let mappedKey = this.getKey(key);
			if (mappedKey == null) return;
			let keys = new $8b2540e09867b15e$export$52baac22726c72bf(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
			if (keys.has(mappedKey)) keys.delete(mappedKey);
			else if (this.canSelectItem(mappedKey)) {
				keys.add(mappedKey);
				keys.anchorKey = mappedKey;
				keys.currentKey = mappedKey;
			}
			if (this.disallowEmptySelection && keys.size === 0) return;
			this.state.setSelectedKeys(keys);
		}
		/**
		* Replaces the selection with only the given key.
		*/ replaceSelection(key) {
			if (this.selectionMode === "none") return;
			let mappedKey = this.getKey(key);
			if (mappedKey == null) return;
			let selection = this.canSelectItem(mappedKey) ? new $8b2540e09867b15e$export$52baac22726c72bf([mappedKey], mappedKey, mappedKey) : new $8b2540e09867b15e$export$52baac22726c72bf();
			this.state.setSelectedKeys(selection);
		}
		/**
		* Replaces the selection with the given keys.
		*/ setSelectedKeys(keys) {
			if (this.selectionMode === "none") return;
			let selection = new $8b2540e09867b15e$export$52baac22726c72bf();
			for (let key of keys) {
				let mappedKey = this.getKey(key);
				if (mappedKey != null) {
					selection.add(mappedKey);
					if (this.selectionMode === "single") break;
				}
			}
			this.state.setSelectedKeys(selection);
		}
		getSelectAllKeys() {
			let collection = this.fullCollection ?? this.collection;
			let keys = [];
			let addKeys = (key) => {
				while (key != null) {
					if (this.canSelectItemIn(key, collection)) {
						let item = collection.getItem(key);
						if (item?.type === "item") keys.push(key);
						if (item?.hasChildNodes && (this.allowsCellSelection || item.type !== "item")) addKeys($cd5ea4b915021f1d$export$fbdeaa6a76694f71($cd5ea4b915021f1d$export$1005530eda016c13(item, collection))?.key ?? null);
					}
					key = collection.getKeyAfter(key);
				}
			};
			addKeys(collection.getFirstKey());
			return keys;
		}
		/**
		* Selects all items in the collection.
		*/ selectAll() {
			if (!this.isSelectAll && this.selectionMode === "multiple") this.state.setSelectedKeys("all");
		}
		/**
		* Removes all keys from the selection.
		*/ clearSelection() {
			if (!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new $8b2540e09867b15e$export$52baac22726c72bf());
		}
		/**
		* Toggles between select all and an empty selection.
		*/ toggleSelectAll() {
			if (this.isSelectAll) this.clearSelection();
			else this.selectAll();
		}
		select(key, e) {
			if (this.selectionMode === "none") return;
			if (this.selectionMode === "single") if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
			else this.replaceSelection(key);
			else if (this.selectionBehavior === "toggle" || e && (e.pointerType === "touch" || e.pointerType === "virtual")) this.toggleSelection(key);
			else this.replaceSelection(key);
		}
		/**
		* Returns whether the current selection is equal to the given selection.
		*/ isSelectionEqual(selection) {
			if (selection === this.state.selectedKeys) return true;
			let selectedKeys = this.selectedKeys;
			if (selection.size !== selectedKeys.size) return false;
			for (let key of selection) if (!selectedKeys.has(key)) return false;
			for (let key of selectedKeys) if (!selection.has(key)) return false;
			return true;
		}
		canSelectItem(key) {
			return this.canSelectItemIn(key, this.collection);
		}
		canSelectItemIn(key, collection) {
			if (this.state.selectionMode === "none" || this.state.disabledKeys.has(key)) return false;
			let item = collection.getItem(key);
			if (!item || item?.props?.isDisabled || item.type === "cell" && !this.allowsCellSelection) return false;
			return true;
		}
		isDisabled(key) {
			let item = this.collection.getItem(key);
			return this.state.disabledBehavior === "all" && (this.state.disabledKeys.has(key) || !!item?.props?.isDisabled) && item?.props?.disabledBehavior !== "selection";
		}
		isLink(key) {
			return !!this.collection.getItem(key)?.props?.href;
		}
		getItemProps(key) {
			return this.collection.getItem(key)?.props;
		}
		withCollection(collection) {
			return new $4a07ac835f260f78$export$6c8a5aaad13c9852(collection, this.state, {
				allowsCellSelection: this.allowsCellSelection,
				layoutDelegate: this.layoutDelegate || void 0,
				fullCollection: this.fullCollection ?? this.collection
			});
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/collections/CollectionBuilder.mjs
function $bda7a7e55e1ff206$var$iterable(iterator) {
	let cache = [];
	let iterable = null;
	return { *[Symbol.iterator]() {
		for (let item of cache) yield item;
		if (!iterable) iterable = iterator();
		for (let item of iterable) {
			cache.push(item);
			yield item;
		}
	} };
}
function $bda7a7e55e1ff206$var$compose(outer, inner) {
	if (outer && inner) return (element) => outer(inner(element));
	if (outer) return outer;
	if (inner) return inner;
}
function $bda7a7e55e1ff206$var$capitalize(str) {
	return str[0].toUpperCase() + str.slice(1);
}
var $bda7a7e55e1ff206$export$bf788dd355e3a401;
var init_CollectionBuilder = __esmMin((() => {
	init__storybook_global_react();
	$bda7a7e55e1ff206$export$bf788dd355e3a401 = class {
		build(props, context) {
			this.context = context;
			return $bda7a7e55e1ff206$var$iterable(() => this.iterateCollection(props));
		}
		*iterateCollection(props) {
			let { children, items } = props;
			if (_storybook_global_react_default.isValidElement(children) && children.type === _storybook_global_react_default.Fragment) yield* this.iterateCollection({
				children: children.props.children,
				items
			});
			else if (typeof children === "function") {
				if (!items) throw new Error("props.children was a function but props.items is missing");
				let index = 0;
				for (let item of items) {
					yield* this.getFullNode({
						value: item,
						index
					}, { renderer: children });
					index++;
				}
			} else {
				let items = [];
				_storybook_global_react_default.Children.forEach(children, (child) => {
					if (child) items.push(child);
				});
				let index = 0;
				for (let item of items) {
					let nodes = this.getFullNode({
						element: item,
						index
					}, {});
					for (let node of nodes) {
						index++;
						yield node;
					}
				}
			}
		}
		getKey(item, partialNode, state, parentKey) {
			if (item.key != null) return item.key;
			if (partialNode.type === "cell" && partialNode.key != null) return `${parentKey}${partialNode.key}`;
			let v = partialNode.value;
			if (v != null) {
				let key = v.key ?? v.id;
				if (key == null) throw new Error("No key found for item");
				return key;
			}
			return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
		}
		getChildState(state, partialNode) {
			return { renderer: partialNode.renderer || state.renderer };
		}
		*getFullNode(partialNode, state, parentKey, parentNode) {
			if (_storybook_global_react_default.isValidElement(partialNode.element) && partialNode.element.type === _storybook_global_react_default.Fragment) {
				let children = [];
				_storybook_global_react_default.Children.forEach(partialNode.element.props.children, (child) => {
					children.push(child);
				});
				let index = partialNode.index ?? 0;
				for (const child of children) yield* this.getFullNode({
					element: child,
					index: index++
				}, state, parentKey, parentNode);
				return;
			}
			let element = partialNode.element;
			if (!element && partialNode.value && state && state.renderer) {
				let cached = this.cache.get(partialNode.value);
				if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
					cached.index = partialNode.index;
					cached.parentKey = parentNode ? parentNode.key : null;
					yield cached;
					return;
				}
				element = state.renderer(partialNode.value);
			}
			if (_storybook_global_react_default.isValidElement(element)) {
				let type = element.type;
				if (typeof type !== "function" && typeof type.getCollectionNode !== "function") {
					let name = element.type;
					throw new Error(`Unknown element <${name}> in collection.`);
				}
				let childNodes = type.getCollectionNode(element.props, this.context);
				let index = partialNode.index ?? 0;
				let result = childNodes.next();
				while (!result.done && result.value) {
					let childNode = result.value;
					partialNode.index = index;
					let nodeKey = childNode.key ?? null;
					if (nodeKey == null) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
					let children = [...this.getFullNode({
						...childNode,
						key: nodeKey,
						index,
						wrapper: $bda7a7e55e1ff206$var$compose(partialNode.wrapper, childNode.wrapper)
					}, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode)];
					for (let node of children) {
						node.value = childNode.value ?? partialNode.value ?? null;
						if (node.value) this.cache.set(node.value, node);
						if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$bda7a7e55e1ff206$var$capitalize(node.type)}> in <${$bda7a7e55e1ff206$var$capitalize(parentNode?.type ?? "unknown parent type")}>. Only <${$bda7a7e55e1ff206$var$capitalize(partialNode.type)}> is supported.`);
						index++;
						yield node;
					}
					result = childNodes.next(children);
				}
				return;
			}
			if (partialNode.key == null || partialNode.type == null) return;
			let builder = this;
			let node = {
				type: partialNode.type,
				props: partialNode.props,
				key: partialNode.key,
				parentKey: parentNode ? parentNode.key : null,
				value: partialNode.value ?? null,
				level: (parentNode?.level ?? 0) + (parentNode?.type === "item" ? 1 : 0),
				index: partialNode.index,
				rendered: partialNode.rendered,
				textValue: partialNode.textValue ?? "",
				"aria-label": partialNode["aria-label"],
				wrapper: partialNode.wrapper,
				shouldInvalidate: partialNode.shouldInvalidate,
				hasChildNodes: partialNode.hasChildNodes || false,
				childNodes: $bda7a7e55e1ff206$var$iterable(function* () {
					if (!partialNode.hasChildNodes || !partialNode.childNodes) return;
					let index = 0;
					for (let child of partialNode.childNodes()) {
						if (child.key != null) child.key = `${node.key}${child.key}`;
						let nodes = builder.getFullNode({
							...child,
							index
						}, builder.getChildState(state, child), node.key, node);
						for (let node of nodes) {
							index++;
							yield node;
						}
					}
				})
			};
			yield node;
		}
		constructor() {
			this.cache = /* @__PURE__ */ new WeakMap();
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/collections/useCollection.mjs
function $d03379b88399b8c5$export$6cd28814d92fa9c9(props, factory, context) {
	let builder = useMemo(() => new $bda7a7e55e1ff206$export$bf788dd355e3a401(), []);
	let { children, items, collection } = props;
	return useMemo(() => {
		if (collection) return collection;
		return factory(builder.build({
			children,
			items
		}, context));
	}, [
		builder,
		children,
		items,
		collection,
		context,
		factory
	]);
}
var init_useCollection = __esmMin((() => {
	init_CollectionBuilder();
	init__storybook_global_react();
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/tree/TreeCollection.mjs
var $df1fcc684d3b021a$export$863faf230ee2118a;
var init_TreeCollection = __esmMin((() => {
	$df1fcc684d3b021a$export$863faf230ee2118a = class {
		constructor(nodes, { expandedKeys } = {}) {
			this.keyMap = /* @__PURE__ */ new Map();
			this.firstKey = null;
			this.lastKey = null;
			this.iterable = nodes;
			expandedKeys = expandedKeys || /* @__PURE__ */ new Set();
			let visit = (node) => {
				this.keyMap.set(node.key, node);
				if (node.childNodes && (node.type === "section" || expandedKeys.has(node.key))) for (let child of node.childNodes) visit(child);
			};
			for (let node of nodes) visit(node);
			let last = null;
			let index = 0;
			for (let [key, node] of this.keyMap) {
				if (last) {
					last.nextKey = key;
					node.prevKey = last.key;
				} else {
					this.firstKey = key;
					node.prevKey = void 0;
				}
				if (node.type === "item") node.index = index++;
				last = node;
				last.nextKey = void 0;
			}
			this.lastKey = last?.key ?? null;
		}
		*[Symbol.iterator]() {
			yield* this.iterable;
		}
		get size() {
			return this.keyMap.size;
		}
		getKeys() {
			return this.keyMap.keys();
		}
		getKeyBefore(key) {
			let node = this.keyMap.get(key);
			return node ? node.prevKey ?? null : null;
		}
		getKeyAfter(key) {
			let node = this.keyMap.get(key);
			return node ? node.nextKey ?? null : null;
		}
		getFirstKey() {
			return this.firstKey;
		}
		getLastKey() {
			return this.lastKey;
		}
		getItem(key) {
			return this.keyMap.get(key) ?? null;
		}
		at(idx) {
			const keys = [...this.getKeys()];
			return this.getItem(keys[idx]);
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/tree/useTreeState.mjs
function $6b915bde6cd300dd$export$728d6ba534403756(props) {
	let { onExpandedChange } = props;
	let [expandedKeys, setExpandedKeys] = $3e6197669829fe11$export$40bfa8c7b0832715(props.expandedKeys ? new Set(props.expandedKeys) : void 0, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : /* @__PURE__ */ new Set(), onExpandedChange);
	let selectionState = $60f19cefd567a3e4$export$253fe78d46329472(props);
	let disabledKeys = useMemo(() => props.disabledKeys ? new Set(props.disabledKeys) : /* @__PURE__ */ new Set(), [props.disabledKeys]);
	let tree = $d03379b88399b8c5$export$6cd28814d92fa9c9(props, useCallback((nodes) => new $df1fcc684d3b021a$export$863faf230ee2118a(nodes, { expandedKeys }), [expandedKeys]), null);
	useEffect(() => {
		if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
	}, [tree, selectionState.focusedKey]);
	let onToggle = (key) => {
		setExpandedKeys($6b915bde6cd300dd$var$toggleKey(expandedKeys, key));
	};
	return {
		collection: tree,
		expandedKeys,
		disabledKeys,
		toggleKey: onToggle,
		setExpandedKeys,
		selectionManager: new $4a07ac835f260f78$export$6c8a5aaad13c9852(tree, selectionState)
	};
}
function $6b915bde6cd300dd$var$toggleKey(set, key) {
	let res = new Set(set);
	if (res.has(key)) res.delete(key);
	else res.add(key);
	return res;
}
var init_useTreeState$1 = __esmMin((() => {
	init_SelectionManager();
	init_TreeCollection();
	init_useCollection();
	init_useControlledState$1();
	init_useMultipleSelectionState();
	init__storybook_global_react();
}));
//#endregion
//#region ../../node_modules/react-stately/dist/exports/useTreeState.mjs
var init_useTreeState = __esmMin((() => {
	init_useTreeState$1();
}));
//#endregion
//#region ../../node_modules/react-stately/dist/exports/useControlledState.mjs
var init_useControlledState = __esmMin((() => {
	init_useControlledState$1();
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/virtualizer/Point.mjs
var $b88f793813fc795e$export$baf26146a414f24a;
var init_Point = __esmMin((() => {
	$b88f793813fc795e$export$baf26146a414f24a = class $b88f793813fc795e$export$baf26146a414f24a {
		constructor(x = 0, y = 0) {
			this.x = x;
			this.y = y;
		}
		/**
		* Returns a copy of this point.
		*/ copy() {
			return new $b88f793813fc795e$export$baf26146a414f24a(this.x, this.y);
		}
		/**
		* Checks if two points are equal.
		*/ equals(point) {
			return this.x === point.x && this.y === point.y;
		}
		/**
		* Returns true if this point is the origin.
		*/ isOrigin() {
			return this.x === 0 && this.y === 0;
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/virtualizer/Rect.mjs
var $af827553fd3cf456$export$c79fc6492f3af13d;
var init_Rect = __esmMin((() => {
	init_Point();
	$af827553fd3cf456$export$c79fc6492f3af13d = class $af827553fd3cf456$export$c79fc6492f3af13d {
		constructor(x = 0, y = 0, width = 0, height = 0) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}
		/**
		* The maximum x-coordinate in the rectangle.
		*/ get maxX() {
			return this.x + this.width;
		}
		/**
		* The maximum y-coordinate in the rectangle.
		*/ get maxY() {
			return this.y + this.height;
		}
		/**
		* The area of the rectangle.
		*/ get area() {
			return this.width * this.height;
		}
		/**
		* The top left corner of the rectangle.
		*/ get topLeft() {
			return new $b88f793813fc795e$export$baf26146a414f24a(this.x, this.y);
		}
		/**
		* The top right corner of the rectangle.
		*/ get topRight() {
			return new $b88f793813fc795e$export$baf26146a414f24a(this.maxX, this.y);
		}
		/**
		* The bottom left corner of the rectangle.
		*/ get bottomLeft() {
			return new $b88f793813fc795e$export$baf26146a414f24a(this.x, this.maxY);
		}
		/**
		* The bottom right corner of the rectangle.
		*/ get bottomRight() {
			return new $b88f793813fc795e$export$baf26146a414f24a(this.maxX, this.maxY);
		}
		/**
		* Returns whether this rectangle intersects another rectangle.
		*
		* @param rect - The rectangle to check.
		*/ intersects(rect) {
			return this.area > 0 && rect.area > 0 && this.x <= rect.x + rect.width && rect.x <= this.x + this.width && this.y <= rect.y + rect.height && rect.y <= this.y + this.height;
		}
		/**
		* Returns whether this rectangle fully contains another rectangle.
		*
		* @param rect - The rectangle to check.
		*/ containsRect(rect) {
			return this.x <= rect.x && this.y <= rect.y && this.maxX >= rect.maxX && this.maxY >= rect.maxY;
		}
		/**
		* Returns whether the rectangle contains the given point.
		*
		* @param point - The point to check.
		*/ containsPoint(point) {
			return this.x <= point.x && this.y <= point.y && this.maxX >= point.x && this.maxY >= point.y;
		}
		/**
		* Returns the first corner of this rectangle (from top to bottom, left to right)
		* that is contained in the given rectangle, or null of the rectangles do not intersect.
		*
		* @param rect - The rectangle to check.
		*/ getCornerInRect(rect) {
			for (let key of [
				"topLeft",
				"topRight",
				"bottomLeft",
				"bottomRight"
			]) if (rect.containsPoint(this[key])) return key;
			return null;
		}
		equals(rect) {
			return rect.x === this.x && rect.y === this.y && rect.width === this.width && rect.height === this.height;
		}
		pointEquals(point) {
			return this.x === point.x && this.y === point.y;
		}
		sizeEquals(size) {
			return this.width === size.width && this.height === size.height;
		}
		/**
		* Returns the union of this Rect and another.
		*/ union(other) {
			let x = Math.min(this.x, other.x);
			let y = Math.min(this.y, other.y);
			let width = Math.max(this.maxX, other.maxX) - x;
			let height = Math.max(this.maxY, other.maxY) - y;
			return new $af827553fd3cf456$export$c79fc6492f3af13d(x, y, width, height);
		}
		/**
		* Returns the intersection of this Rect with another.
		* If the rectangles do not intersect, an all zero Rect is returned.
		*/ intersection(other) {
			if (!this.intersects(other)) return new $af827553fd3cf456$export$c79fc6492f3af13d(0, 0, 0, 0);
			let x = Math.max(this.x, other.x);
			let y = Math.max(this.y, other.y);
			return new $af827553fd3cf456$export$c79fc6492f3af13d(x, y, Math.min(this.maxX, other.maxX) - x, Math.min(this.maxY, other.maxY) - y);
		}
		/**
		* Returns a copy of this rectangle.
		*/ copy() {
			return new $af827553fd3cf456$export$c79fc6492f3af13d(this.x, this.y, this.width, this.height);
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/virtualizer/Size.mjs
var $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec;
var init_Size = __esmMin((() => {
	$cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec = class $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec {
		constructor(width = 0, height = 0) {
			this.width = Math.max(width, 0);
			this.height = Math.max(height, 0);
		}
		/**
		* Returns a copy of this size.
		*/ copy() {
			return new $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec(this.width, this.height);
		}
		/**
		* Returns whether this size is equal to another one.
		*/ equals(other) {
			return this.width === other.width && this.height === other.height;
		}
		/**
		* The total area of the Size.
		*/ get area() {
			return this.width * this.height;
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/virtualizer/ReusableView.mjs
var $6bbafa22c92cc056$var$KEY, $6bbafa22c92cc056$export$1a5223887c560441, $6bbafa22c92cc056$export$e21886a4eef6b29a, $6bbafa22c92cc056$export$7a41b6f219e61634;
var init_ReusableView = __esmMin((() => {
	$6bbafa22c92cc056$var$KEY = 0;
	$6bbafa22c92cc056$export$1a5223887c560441 = class {
		constructor(virtualizer, viewType) {
			this.virtualizer = virtualizer;
			this.key = ++$6bbafa22c92cc056$var$KEY;
			this.viewType = viewType;
			this.children = /* @__PURE__ */ new Set();
			this.reusableViews = /* @__PURE__ */ new Map();
			this.layoutInfo = null;
			this.content = null;
			this.rendered = null;
		}
		/**
		* Prepares the view for reuse. Called just before the view is removed from the DOM.
		*/ prepareForReuse() {
			this.content = null;
			this.rendered = null;
			this.layoutInfo = null;
		}
		getReusableView(reuseType) {
			let reusable = this.reusableViews.get(reuseType);
			return reusable && reusable.length > 0 ? reusable.shift() : new $6bbafa22c92cc056$export$7a41b6f219e61634(this.virtualizer, this, reuseType);
		}
		reuseChild(child) {
			child.prepareForReuse();
			let reusable = this.reusableViews.get(child.viewType);
			if (!reusable) {
				reusable = [];
				this.reusableViews.set(child.viewType, reusable);
			}
			reusable.push(child);
		}
	};
	$6bbafa22c92cc056$export$e21886a4eef6b29a = class extends $6bbafa22c92cc056$export$1a5223887c560441 {
		constructor(virtualizer) {
			super(virtualizer, "root");
		}
	};
	$6bbafa22c92cc056$export$7a41b6f219e61634 = class extends $6bbafa22c92cc056$export$1a5223887c560441 {
		constructor(virtualizer, parent, viewType) {
			super(virtualizer, viewType);
			this.parent = parent;
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/virtualizer/utils.mjs
/** Returns whether two sets are equal. */ function $5225cf049274675d$export$a8d0d0c8d1c5df64(a, b) {
	if (a === b) return true;
	if (a.size !== b.size) return false;
	for (let key of a) if (!b.has(key)) return false;
	return true;
}
var init_utils = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/virtualizer/OverscanManager.mjs
var $f64c7bdbe8bdc6dc$export$4455ee6afb38dcbb;
var init_OverscanManager = __esmMin((() => {
	init_Point();
	init_Rect();
	$f64c7bdbe8bdc6dc$export$4455ee6afb38dcbb = class {
		setVisibleRect(rect) {
			let time = performance.now() - this.startTime;
			if (time < 500) {
				if (rect.x !== this.visibleRect.x && time > 0) this.velocity.x = (rect.x - this.visibleRect.x) / time;
				if (rect.y !== this.visibleRect.y && time > 0) this.velocity.y = (rect.y - this.visibleRect.y) / time;
			}
			this.startTime = performance.now();
			this.visibleRect = rect;
		}
		getOverscannedRect() {
			let overscanned = this.visibleRect.copy();
			let overscanY = this.visibleRect.height / 3;
			overscanned.height += overscanY;
			if (this.velocity.y < 0) overscanned.y -= overscanY;
			let overscanX = this.visibleRect.width / 3;
			overscanned.width += overscanX;
			if (this.velocity.x < 0) overscanned.x -= overscanX;
			return overscanned;
		}
		constructor() {
			this.startTime = 0;
			this.velocity = new $b88f793813fc795e$export$baf26146a414f24a(0, 0);
			this.visibleRect = new $af827553fd3cf456$export$c79fc6492f3af13d();
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/virtualizer/ScrollAnchor.mjs
function $78014f4785404d8e$var$dimensionForAxis(axis) {
	return axis === "x" ? "width" : "height";
}
function $78014f4785404d8e$export$413719533c5919c9(anchor, axis, getLayoutInfo, visibleRect, contentSize) {
	let finalInfo = getLayoutInfo(anchor.key);
	if (!finalInfo) return null;
	let adjustment = finalInfo.rect[anchor.corner][axis] - visibleRect[axis] - anchor.offset;
	if (adjustment === 0) return null;
	let target = visibleRect[axis] + adjustment;
	let dimension = $78014f4785404d8e$var$dimensionForAxis(axis);
	let max = Math.max(0, contentSize[dimension] - visibleRect[dimension]);
	let clamped = Math.max(0, Math.min(max, target));
	return clamped !== visibleRect[axis] ? clamped : null;
}
function $78014f4785404d8e$export$69fb4c6de5f339b7(edge, axis, visibleRect, visibleLayoutInfos, isAnchorable = () => true) {
	let dimension = $78014f4785404d8e$var$dimensionForAxis(axis);
	let best = null;
	for (let [key, layoutInfo] of visibleLayoutInfos) {
		if (!layoutInfo || !isAnchorable(layoutInfo)) continue;
		let overlap = layoutInfo.rect.intersection(visibleRect)[dimension];
		if (layoutInfo.rect.area > 0 && overlap >= $78014f4785404d8e$var$MIN_ANCHOR_OVERLAP) {
			let corner = layoutInfo.rect.getCornerInRect(visibleRect) ?? "topLeft";
			let offset = layoutInfo.rect[corner][axis] - visibleRect[axis];
			if (!best || (edge === "end" ? offset < best.offset : offset > best.offset)) best = {
				key,
				corner,
				offset
			};
		}
	}
	return best;
}
function $78014f4785404d8e$export$c74597e403428eac(edge, axis, contentSize, previousVisibleRect) {
	if (edge === "start") return 0;
	let dimension = $78014f4785404d8e$var$dimensionForAxis(axis);
	return Math.max(0, contentSize[dimension] - previousVisibleRect[dimension]);
}
function $78014f4785404d8e$export$f644bffd4937530e(visibleRect, contentSize, edge, axis, threshold) {
	if (edge === "start") return visibleRect[axis] <= threshold;
	let dimension = $78014f4785404d8e$var$dimensionForAxis(axis);
	return contentSize[dimension] - (visibleRect[axis] + visibleRect[dimension]) <= threshold;
}
function $78014f4785404d8e$export$dcb80b718ca193d7(edge, axis, anchor, wasNearAnchorEdge, isScrolling, itemSizeChanged, contentSizeDelta, getLayoutInfo, previousVisibleRect, contentSize) {
	let withTarget = (target) => axis === "x" ? new $af827553fd3cf456$export$c79fc6492f3af13d(target, previousVisibleRect.y, previousVisibleRect.width, previousVisibleRect.height) : new $af827553fd3cf456$export$c79fc6492f3af13d(previousVisibleRect.x, target, previousVisibleRect.width, previousVisibleRect.height);
	if (anchor) {
		let target = $78014f4785404d8e$export$413719533c5919c9(anchor, axis, getLayoutInfo, previousVisibleRect, contentSize);
		if (target != null) return withTarget(target);
	}
	if (wasNearAnchorEdge && !isScrolling && (!itemSizeChanged || contentSizeDelta > 0)) {
		let target = withTarget($78014f4785404d8e$export$c74597e403428eac(edge, axis, contentSize, previousVisibleRect));
		return target.equals(previousVisibleRect) ? null : target;
	}
	return null;
}
var $78014f4785404d8e$var$MIN_ANCHOR_OVERLAP, $78014f4785404d8e$export$8ce0fdedc36cb6b;
var init_ScrollAnchor = __esmMin((() => {
	init_Rect();
	$78014f4785404d8e$var$MIN_ANCHOR_OVERLAP = 4;
	$78014f4785404d8e$export$8ce0fdedc36cb6b = class {
		/** Resets all tracked state, e.g. when the virtualizer's layout instance changes. */ reset() {
			this.hasSnappedToEdge = false;
			this.hadEstimatedVisibleItems = false;
			this.wasNearAnchorEdge = false;
		}
		/**
		* Captures the anchor from pre-layout view positions.
		*/ captureBeforeLayout(anchorInfo, preLayoutInfos, visibleRect) {
			if (!anchorInfo) return null;
			return $78014f4785404d8e$export$69fb4c6de5f339b7(anchorInfo.edge, anchorInfo.axis, visibleRect, preLayoutInfos, anchorInfo.isAnchorable);
		}
		/**
		* Runs the full post-layout decision: updates the tracked state for the next pass, and
		* returns the resolved scroll target, or null if nothing should change.
		*/ resolveAfterLayout(options) {
			let { anchorInfo, anchor, postLayoutInfos, previousVisibleRect, previousContentSize, contentSize, itemSizeChanged, isScrolling, getLayoutInfo } = options;
			if (!anchorInfo) return null;
			let wasSettlingLastPass = this.hadEstimatedVisibleItems;
			let wasNearAnchorEdgeLastPass = this.wasNearAnchorEdge;
			let hasEstimated = false;
			for (let layoutInfo of postLayoutInfos.values()) if (layoutInfo.estimatedSize) {
				hasEstimated = true;
				break;
			}
			this.hadEstimatedVisibleItems = hasEstimated;
			if (!wasSettlingLastPass) this.wasNearAnchorEdge = $78014f4785404d8e$export$f644bffd4937530e(previousVisibleRect, previousContentSize, anchorInfo.edge, anchorInfo.axis, anchorInfo.threshold);
			if (previousVisibleRect.area === 0) return null;
			let dimension = anchorInfo.axis === "x" ? "width" : "height";
			let contentSizeDelta = contentSize[dimension] - previousContentSize[dimension];
			let isFirstAnchoredLayout = !this.hasSnappedToEdge;
			this.hasSnappedToEdge = true;
			if (!(isFirstAnchoredLayout || contentSizeDelta !== 0 || itemSizeChanged)) return null;
			let wasNearAnchorEdge = isFirstAnchoredLayout || wasSettlingLastPass && wasNearAnchorEdgeLastPass || $78014f4785404d8e$export$f644bffd4937530e(previousVisibleRect, previousContentSize, anchorInfo.edge, anchorInfo.axis, anchorInfo.threshold);
			if (!wasSettlingLastPass) this.wasNearAnchorEdge = wasNearAnchorEdge;
			let effectiveAnchor = isFirstAnchoredLayout || wasSettlingLastPass && wasNearAnchorEdgeLastPass ? null : anchor;
			return $78014f4785404d8e$export$dcb80b718ca193d7(anchorInfo.edge, anchorInfo.axis, effectiveAnchor, wasNearAnchorEdge, isScrolling, itemSizeChanged, contentSizeDelta, getLayoutInfo, previousVisibleRect, contentSize);
		}
		constructor() {
			this.hasSnappedToEdge = false;
			this.hadEstimatedVisibleItems = false;
			this.wasNearAnchorEdge = false;
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/virtualizer/Virtualizer.mjs
var $4537523c0f2a47dc$export$89be5a243e59c4b2;
var init_Virtualizer = __esmMin((() => {
	init_ReusableView();
	init_utils();
	init_OverscanManager();
	init_Rect();
	init_ScrollAnchor();
	init_Size();
	$4537523c0f2a47dc$export$89be5a243e59c4b2 = class {
		constructor(options) {
			this.delegate = options.delegate;
			this.collection = options.collection;
			this.layout = options.layout;
			this.contentSize = new $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec();
			this.visibleRect = new $af827553fd3cf456$export$c79fc6492f3af13d();
			this.size = new $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec();
			this.persistedKeys = /* @__PURE__ */ new Set();
			this._visibleViews = /* @__PURE__ */ new Map();
			this._renderedContent = /* @__PURE__ */ new WeakMap();
			this._rootView = new $6bbafa22c92cc056$export$e21886a4eef6b29a(this);
			this._isScrolling = false;
			this._invalidationContext = {};
			this._overscanManager = new $f64c7bdbe8bdc6dc$export$4455ee6afb38dcbb();
			this._scrollAnchor = new $78014f4785404d8e$export$8ce0fdedc36cb6b();
		}
		/** Returns whether the given key, or an ancestor, is persisted. */ isPersistedKey(key) {
			if (this.persistedKeys.has(key)) return true;
			for (let k of this.persistedKeys) while (k != null) {
				let layoutInfo = this.layout.getLayoutInfo(k);
				if (!layoutInfo || layoutInfo.parentKey == null) break;
				k = layoutInfo.parentKey;
				if (k === key) return true;
			}
			return false;
		}
		getParentView(layoutInfo) {
			return layoutInfo.parentKey != null ? this._visibleViews.get(layoutInfo.parentKey) : this._rootView;
		}
		getReusableView(layoutInfo) {
			let view = this.getParentView(layoutInfo).getReusableView(layoutInfo.type);
			view.layoutInfo = layoutInfo;
			this._renderView(view);
			return view;
		}
		_renderView(reusableView) {
			if (reusableView.layoutInfo) {
				let { type, key, content } = reusableView.layoutInfo;
				reusableView.content = content || this.collection.getItem(key);
				reusableView.rendered = this._renderContent(type, reusableView.content);
			}
		}
		_renderContent(type, content) {
			let cached = content != null ? this._renderedContent.get(content) : null;
			if (cached != null) return cached;
			let rendered = this.delegate.renderView(type, content);
			if (content) this._renderedContent.set(content, rendered);
			return rendered;
		}
		/**
		* Returns the key for the item view currently at the given point.
		*/ keyAtPoint(point) {
			let rect = new $af827553fd3cf456$export$c79fc6492f3af13d(point.x, point.y, 1, 1);
			let layoutInfos = rect.area === 0 ? [] : this.layout.getVisibleLayoutInfos(rect);
			for (let layoutInfo of layoutInfos) if (layoutInfo.rect.intersects(rect)) return layoutInfo.key;
			return null;
		}
		relayout(context = {}) {
			let anchorInfo = this.layout.UNSTABLE_getScrollAnchorInfo?.(context.layoutOptions) ?? null;
			let anchor = null;
			if (anchorInfo) {
				let preLayoutInfos = [];
				for (let [key, view] of this._visibleViews) {
					let layoutInfo = this.layout.getLayoutInfo(key) ?? view.layoutInfo;
					if (layoutInfo) preLayoutInfos.push([key, layoutInfo]);
				}
				anchor = this._scrollAnchor.captureBeforeLayout(anchorInfo, preLayoutInfos, this.visibleRect);
			}
			let previousContentSize = this.contentSize;
			let previousVisibleRect = this.visibleRect;
			this.layout.update(context);
			let rawContentSize = this.layout.getContentSize();
			this.contentSize = new $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec(rawContentSize.width, rawContentSize.height);
			let target = this._scrollAnchor.resolveAfterLayout({
				anchorInfo,
				anchor,
				postLayoutInfos: anchorInfo ? this.getVisibleLayoutInfos() : /* @__PURE__ */ new Map(),
				previousVisibleRect,
				previousContentSize,
				contentSize: this.contentSize,
				itemSizeChanged: context.itemSizeChanged ?? false,
				isScrolling: this._isScrolling,
				getLayoutInfo: (key) => this.layout.getLayoutInfo(key)
			});
			if (target) {
				this.delegate.setVisibleRect(target);
				return;
			}
			let visibleRect = this.visibleRect;
			let contentOffsetX = context.contentChanged ? 0 : visibleRect.x;
			let contentOffsetY = context.contentChanged ? 0 : visibleRect.y;
			contentOffsetX = Math.max(0, Math.min(this.contentSize.width - visibleRect.width, contentOffsetX));
			contentOffsetY = Math.max(0, Math.min(this.contentSize.height - visibleRect.height, contentOffsetY));
			if (contentOffsetX !== visibleRect.x || contentOffsetY !== visibleRect.y) {
				let rect = new $af827553fd3cf456$export$c79fc6492f3af13d(contentOffsetX, contentOffsetY, visibleRect.width, visibleRect.height);
				this.delegate.setVisibleRect(rect);
			} else this.updateSubviews();
		}
		getVisibleLayoutInfos() {
			let rect;
			rect = this._overscanManager.getOverscannedRect();
			let layoutInfos = this.layout.getVisibleLayoutInfos(rect);
			let map = /* @__PURE__ */ new Map();
			for (let layoutInfo of layoutInfos) map.set(layoutInfo.key, layoutInfo);
			return map;
		}
		updateSubviews() {
			let visibleLayoutInfos = this.getVisibleLayoutInfos();
			let removed = /* @__PURE__ */ new Set();
			for (let [key, view] of this._visibleViews) {
				let layoutInfo = visibleLayoutInfos.get(key);
				if (!layoutInfo || view.parent !== this.getParentView(layoutInfo)) {
					this._visibleViews.delete(key);
					view.parent.reuseChild(view);
					removed.add(view);
				}
			}
			for (let [key, layoutInfo] of visibleLayoutInfos) {
				let view = this._visibleViews.get(key);
				if (!view) {
					view = this.getReusableView(layoutInfo);
					view.parent.children.add(view);
					this._visibleViews.set(key, view);
					removed.delete(view);
				} else {
					view.layoutInfo = layoutInfo;
					let item = this.collection.getItem(layoutInfo.key);
					if (view.content !== item) {
						if (view.content != null) this._renderedContent.delete(view.content);
						this._renderView(view);
					}
				}
			}
			for (let view of removed) {
				view.parent.children.delete(view);
				view.parent.reusableViews.clear();
			}
			if (!this._isScrolling) for (let key of visibleLayoutInfos.keys()) {
				let view = this._visibleViews.get(key);
				view.parent.children.delete(view);
				view.parent.children.add(view);
			}
		}
		/** Performs layout and updates visible views as needed. */ render(opts) {
			let mutableThis = this;
			let needsLayout = false;
			let offsetChanged = false;
			let sizeChanged = false;
			let widthChanged = false;
			let heightChanged = false;
			let itemSizeChanged = false;
			let layoutOptionsChanged = false;
			let needsUpdate = false;
			if (opts.collection !== this.collection) {
				mutableThis.collection = opts.collection;
				needsLayout = true;
			}
			if (opts.layout !== this.layout || this.layout.virtualizer !== this) {
				if (this.layout) this.layout.virtualizer = null;
				opts.layout.virtualizer = this;
				mutableThis.layout = opts.layout;
				this._scrollAnchor.reset();
				needsLayout = true;
			}
			if (opts.persistedKeys && !$5225cf049274675d$export$a8d0d0c8d1c5df64(opts.persistedKeys, this.persistedKeys)) {
				mutableThis.persistedKeys = opts.persistedKeys;
				needsUpdate = true;
			}
			if (!this.visibleRect.equals(opts.visibleRect) || !this.size.equals(opts.size)) {
				this._overscanManager.setVisibleRect(opts.visibleRect);
				let oldRect = new $af827553fd3cf456$export$c79fc6492f3af13d(this.visibleRect.x, this.visibleRect.y, this.size.width, this.size.height);
				let newRect = new $af827553fd3cf456$export$c79fc6492f3af13d(opts.visibleRect.x, opts.visibleRect.y, opts.size.width, opts.size.height);
				if (this.layout.shouldInvalidate(newRect, oldRect)) {
					offsetChanged = !opts.visibleRect.pointEquals(this.visibleRect);
					sizeChanged = !this.size.equals(opts.size);
					widthChanged = this.size.width !== opts.size.width;
					heightChanged = this.size.height !== opts.size.height;
					needsLayout = true;
				} else needsUpdate = true;
				mutableThis.visibleRect = opts.visibleRect;
				mutableThis.size = opts.size;
			}
			if (opts.invalidationContext !== this._invalidationContext) {
				if (opts.invalidationContext) {
					sizeChanged ||= opts.invalidationContext.sizeChanged || false;
					widthChanged ||= opts.invalidationContext.widthChanged || false;
					heightChanged ||= opts.invalidationContext.heightChanged || false;
					offsetChanged ||= opts.invalidationContext.offsetChanged || false;
					itemSizeChanged ||= opts.invalidationContext.itemSizeChanged || false;
					layoutOptionsChanged ||= opts.invalidationContext.layoutOptions != null && this._invalidationContext.layoutOptions != null && opts.invalidationContext.layoutOptions !== this._invalidationContext.layoutOptions && this.layout.shouldInvalidateLayoutOptions(opts.invalidationContext.layoutOptions, this._invalidationContext.layoutOptions);
					needsLayout ||= itemSizeChanged || sizeChanged || offsetChanged || layoutOptionsChanged;
				}
				this._invalidationContext = opts.invalidationContext;
			}
			if (opts.isScrolling !== this._isScrolling) {
				this._isScrolling = opts.isScrolling;
				if (!opts.isScrolling) needsUpdate = true;
			}
			if (needsLayout) this.relayout({
				offsetChanged,
				sizeChanged,
				widthChanged,
				heightChanged,
				itemSizeChanged,
				layoutOptionsChanged,
				layoutOptions: this._invalidationContext.layoutOptions
			});
			else if (needsUpdate) this.updateSubviews();
			return Array.from(this._rootView.children);
		}
		getVisibleView(key) {
			return this._visibleViews.get(key);
		}
		invalidate(context) {
			this.delegate.invalidate(context);
		}
		updateItemSize(key, size) {
			if (!this.layout.updateItemSize) return;
			if (this.layout.updateItemSize(key, size)) this.invalidate({ itemSizeChanged: true });
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/virtualizer/useVirtualizerState.mjs
function $51e619e0f141c3ec$export$1505db82fe357e65(opts) {
	let [visibleRect, setVisibleRect] = useState(new $af827553fd3cf456$export$c79fc6492f3af13d(0, 0, 0, 0));
	let [size, setSize] = useState(new $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec());
	let [isScrolling, setScrolling] = useState(false);
	let [invalidationContext, setInvalidationContext] = useState({});
	let visibleRectChanged = useRef(false);
	let [virtualizer] = useState(() => new $4537523c0f2a47dc$export$89be5a243e59c4b2({
		collection: opts.collection,
		layout: opts.layout,
		delegate: {
			setVisibleRect(rect) {
				setVisibleRect(rect);
				visibleRectChanged.current = true;
			},
			renderView: opts.renderView,
			invalidate: setInvalidationContext
		}
	}));
	$51e619e0f141c3ec$export$e5c5a5f917a5871c(() => {
		if (visibleRectChanged.current) {
			visibleRectChanged.current = false;
			opts.onVisibleRectChange(visibleRect);
		}
	});
	let mergedInvalidationContext = useMemo(() => {
		if (opts.layoutOptions != null) return {
			...invalidationContext,
			layoutOptions: opts.layoutOptions
		};
		return invalidationContext;
	}, [invalidationContext, opts.layoutOptions]);
	let visibleViews = virtualizer.render({
		layout: opts.layout,
		collection: opts.collection,
		persistedKeys: opts.persistedKeys,
		layoutOptions: opts.layoutOptions,
		visibleRect,
		size: opts.allowsWindowScrolling ? size : visibleRect,
		invalidationContext: mergedInvalidationContext,
		isScrolling
	});
	let contentSize = virtualizer.contentSize;
	let startScrolling = useCallback(() => {
		setScrolling(true);
	}, []);
	let endScrolling = useCallback(() => {
		setScrolling(false);
	}, []);
	return useMemo(() => ({
		virtualizer,
		visibleViews,
		setVisibleRect,
		size,
		setSize,
		contentSize,
		isScrolling,
		startScrolling,
		endScrolling
	}), [
		virtualizer,
		visibleViews,
		setVisibleRect,
		size,
		setSize,
		contentSize,
		isScrolling,
		startScrolling,
		endScrolling
	]);
}
var $51e619e0f141c3ec$export$e5c5a5f917a5871c;
var init_useVirtualizerState$1 = __esmMin((() => {
	init_Rect();
	init_Size();
	init_Virtualizer();
	init__storybook_global_react();
	$51e619e0f141c3ec$export$e5c5a5f917a5871c = typeof document !== "undefined" ? _storybook_global_react_default.useLayoutEffect : () => {};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/virtualizer/Layout.mjs
var $85410e0c3cc54f1d$export$c84671f46d6a1ca;
var init_Layout = __esmMin((() => {
	$85410e0c3cc54f1d$export$c84671f46d6a1ca = class {
		/**
		* Returns whether the layout should invalidate in response to
		* visible rectangle changes. By default, it only invalidates
		* when the virtualizer's size changes. Return true always
		* to make the layout invalidate while scrolling (e.g. sticky headers).
		*/ shouldInvalidate(newRect, oldRect) {
			return newRect.width !== oldRect.width || newRect.height !== oldRect.height;
		}
		/**
		* Returns whether the layout should invalidate when the layout options change.
		* By default it invalidates when the object identity changes. Override this
		* method to optimize layout updates based on specific option changes.
		*/ shouldInvalidateLayoutOptions(newOptions, oldOptions) {
			return newOptions !== oldOptions;
		}
		/**
		* This method allows the layout to perform any pre-computation
		* it needs to in order to prepare LayoutInfos for retrieval.
		* Called by the virtualizer before `getVisibleLayoutInfos`
		* or `getLayoutInfo` are called.
		*/ update(invalidationContext) {}
		/** @private */ getItemRect(key) {
			return this.getLayoutInfo(key)?.rect ?? null;
		}
		/** @private */ getVisibleRect() {
			return this.virtualizer.visibleRect;
		}
		constructor() {
			/** The Virtualizer the layout is currently attached to. */ this.virtualizer = null;
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/private/virtualizer/LayoutInfo.mjs
var $eb6255cbf080eb7d$export$7e0eeb9da702a085;
var init_LayoutInfo = __esmMin((() => {
	$eb6255cbf080eb7d$export$7e0eeb9da702a085 = class $eb6255cbf080eb7d$export$7e0eeb9da702a085 {
		/**
		* @param type The type of element represented by this LayoutInfo. Should match the `type` of the
		*   corresponding collection node.
		* @param key A unique key for this LayoutInfo. Should match the `key` of the corresponding
		*   collection node.
		* @param rect The rectangle describing the size and position of this element.
		*/ constructor(type, key, rect) {
			this.type = type;
			this.key = key;
			this.parentKey = null;
			this.content = null;
			this.rect = rect;
			this.estimatedSize = false;
			this.isSticky = false;
			this.opacity = 1;
			this.transform = null;
			this.zIndex = 0;
			this.allowOverflow = false;
		}
		/**
		* Returns a copy of the LayoutInfo.
		*/ copy() {
			let res = new $eb6255cbf080eb7d$export$7e0eeb9da702a085(this.type, this.key, this.rect.copy());
			res.estimatedSize = this.estimatedSize;
			res.opacity = this.opacity;
			res.transform = this.transform;
			res.parentKey = this.parentKey;
			res.content = this.content;
			res.isSticky = this.isSticky;
			res.zIndex = this.zIndex;
			res.allowOverflow = this.allowOverflow;
			return res;
		}
	};
}));
//#endregion
//#region ../../node_modules/react-stately/dist/exports/useVirtualizerState.mjs
var init_useVirtualizerState = __esmMin((() => {
	init_useVirtualizerState$1();
	init_Layout();
	init_LayoutInfo();
	init_Point();
	init_Rect();
	init_Size();
}));
//#endregion
export { init_useTransitionMap as A, init_useTooltipTriggerState$1 as C, $240e9101ba2842f5$export$7d15b64cf5a3a4c4 as D, init_number as E, $6a20a7989e6c817a$export$98658e8c59125e6a as F, init_flags$1 as I, W as L, init_useTransitionState as M, useTransitionState as N, init_number$1 as O, init_flags as P, init_index_module as R, $3834487504f4fc00$export$4d40659c25ecb50b as S, init_useControlledState$1 as T, init_useTreeState$1 as _, init_Layout as a, init_dist as b, $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec as c, init_Rect as d, $b88f793813fc795e$export$baf26146a414f24a as f, $6b915bde6cd300dd$export$728d6ba534403756 as g, init_useTreeState as h, $85410e0c3cc54f1d$export$c84671f46d6a1ca as i, useTransitionMap as j, init_esm$3 as k, init_Size as l, init_useControlledState as m, $eb6255cbf080eb7d$export$7e0eeb9da702a085 as n, $51e619e0f141c3ec$export$1505db82fe357e65 as o, init_Point as p, init_LayoutInfo as r, init_useVirtualizerState$1 as s, init_useVirtualizerState as t, $af827553fd3cf456$export$c79fc6492f3af13d as u, ACTIONS as v, $3e6197669829fe11$export$40bfa8c7b0832715 as w, init_useTooltipTriggerState as x, components_default as y, q as z };
