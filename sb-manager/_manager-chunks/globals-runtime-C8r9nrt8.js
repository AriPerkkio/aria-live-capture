import { a as __toESM, n as __esmMin, r as __exportAll, t as __commonJSMin } from "./globals-runtime-XrdeG17s.js";
import { $ as replace, A as rulesheet, D as init_stylis, E as require_toggle_selection, G as token, H as peek, I as alloc, J as from, K as charat, L as copy, M as serialize, N as stringify, P as compile, Q as match, R as dealloc, U as position, V as next, W as slice, X as indexof, Y as hash, at as RULESET, et as strlen, it as MS, k as middleware, nt as KEYFRAMES, ot as WEBKIT, q as combine, rt as MOZ, tt as DECLARATION, z as delimit } from "./globals-runtime-CzGMgLxl.js";
import { V as init_useOverlayTriggerState, ct as require_react } from "./globals-runtime-DpF3al7J.js";
import { S as init_ariaHideOutside, _ as init_LiveAnnouncer } from "./globals-runtime-DUdJ_lLr.js";
import { k as require_hoist_non_react_statics_cjs } from "./globals-runtime-DfPn-YQU.js";
//#region ../../node_modules/@storybook/global/dist/index.mjs
var scope;
var init_dist$5 = __esmMin((() => {
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
//#region ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends$1() {
	return _extends$1 = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends$1.apply(null, arguments);
}
var init_extends = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@emotion/sheet/dist/emotion-sheet.esm.js
function sheetForTag(tag) {
	if (tag.sheet) return tag.sheet;
	/* istanbul ignore next */
	for (var i = 0; i < document.styleSheets.length; i++) if (document.styleSheets[i].ownerNode === tag) return document.styleSheets[i];
}
function createStyleElement(options) {
	var tag = document.createElement("style");
	tag.setAttribute("data-emotion", options.key);
	if (options.nonce !== void 0) tag.setAttribute("nonce", options.nonce);
	tag.appendChild(document.createTextNode(""));
	tag.setAttribute("data-s", "");
	return tag;
}
var StyleSheet;
var init_emotion_sheet_esm = __esmMin((() => {
	StyleSheet = /*#__PURE__*/ function() {
		function StyleSheet(options) {
			var _this = this;
			this._insertTag = function(tag) {
				var before;
				if (_this.tags.length === 0) if (_this.insertionPoint) before = _this.insertionPoint.nextSibling;
				else if (_this.prepend) before = _this.container.firstChild;
				else before = _this.before;
				else before = _this.tags[_this.tags.length - 1].nextSibling;
				_this.container.insertBefore(tag, before);
				_this.tags.push(tag);
			};
			this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
			this.tags = [];
			this.ctr = 0;
			this.nonce = options.nonce;
			this.key = options.key;
			this.container = options.container;
			this.prepend = options.prepend;
			this.insertionPoint = options.insertionPoint;
			this.before = null;
		}
		var _proto = StyleSheet.prototype;
		_proto.hydrate = function hydrate(nodes) {
			nodes.forEach(this._insertTag);
		};
		_proto.insert = function insert(rule) {
			if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) this._insertTag(createStyleElement(this));
			var tag = this.tags[this.tags.length - 1];
			if (this.isSpeedy) {
				var sheet = sheetForTag(tag);
				try {
					sheet.insertRule(rule, sheet.cssRules.length);
				} catch (e) {}
			} else tag.appendChild(document.createTextNode(rule));
			this.ctr++;
		};
		_proto.flush = function flush() {
			this.tags.forEach(function(tag) {
				var _tag$parentNode;
				return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
			});
			this.tags = [];
			this.ctr = 0;
		};
		return StyleSheet;
	}();
}));
//#endregion
//#region ../../node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize;
var init_emotion_weak_memoize_esm = __esmMin((() => {
	weakMemoize = function weakMemoize(func) {
		var cache = /* @__PURE__ */ new WeakMap();
		return function(arg) {
			if (cache.has(arg)) return cache.get(arg);
			var ret = func(arg);
			cache.set(arg, ret);
			return ret;
		};
	};
}));
//#endregion
//#region ../../node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
	var cache = Object.create(null);
	return function(arg) {
		if (cache[arg] === void 0) cache[arg] = fn(arg);
		return cache[arg];
	};
}
var init_emotion_memoize_esm = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
function prefix(value, length) {
	switch (hash(value, length)) {
		case 5103: return WEBKIT + "print-" + value + value;
		case 5737:
		case 4201:
		case 3177:
		case 3433:
		case 1641:
		case 4457:
		case 2921:
		case 5572:
		case 6356:
		case 5844:
		case 3191:
		case 6645:
		case 3005:
		case 6391:
		case 5879:
		case 5623:
		case 6135:
		case 4599:
		case 4855:
		case 4215:
		case 6389:
		case 5109:
		case 5365:
		case 5621:
		case 3829: return WEBKIT + value + value;
		case 5349:
		case 4246:
		case 4810:
		case 6968:
		case 2756: return WEBKIT + value + MOZ + value + MS + value + value;
		case 6828:
		case 4268: return WEBKIT + value + MS + value + value;
		case 6165: return WEBKIT + value + MS + "flex-" + value + value;
		case 5187: return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
		case 5443: return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
		case 4675: return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
		case 5548: return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
		case 5292: return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
		case 6060: return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
		case 4554: return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
		case 6187: return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
		case 5495:
		case 3959: return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
		case 4968: return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
		case 4095:
		case 3583:
		case 4068:
		case 2532: return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
		case 8116:
		case 7059:
		case 5753:
		case 5535:
		case 5445:
		case 5701:
		case 4933:
		case 4677:
		case 5533:
		case 5789:
		case 5021:
		case 4765:
			if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
				case 109: if (charat(value, length + 4) !== 45) break;
				case 102: return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length + 3) == 108 ? "$3" : "$2-$3")) + value;
				case 115: return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length) + value : value;
			}
			break;
		case 4949: if (charat(value, length + 1) !== 115) break;
		case 6444:
			switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
				case 107: return replace(value, ":", ":" + WEBKIT) + value;
				case 101: return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
			}
			break;
		case 5936:
			switch (charat(value, length + 11)) {
				case 114: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
				case 108: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
				case 45: return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
			}
			return WEBKIT + value + MS + value + value;
	}
	return value;
}
var identifierWithPointTracking, toRules, getRules, fixedElements, compat, removeLabel, defaultStylisPlugins, createCache;
var init_emotion_cache_browser_esm = __esmMin((() => {
	init_emotion_sheet_esm();
	init_stylis();
	identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
		var previous = 0;
		var character = 0;
		while (true) {
			previous = character;
			character = peek();
			if (previous === 38 && character === 12) points[index] = 1;
			if (token(character)) break;
			next();
		}
		return slice(begin, position);
	};
	toRules = function toRules(parsed, points) {
		var index = -1;
		var character = 44;
		do
			switch (token(character)) {
				case 0:
					if (character === 38 && peek() === 12) points[index] = 1;
					parsed[index] += identifierWithPointTracking(position - 1, points, index);
					break;
				case 2:
					parsed[index] += delimit(character);
					break;
				case 4: if (character === 44) {
					parsed[++index] = peek() === 58 ? "&\f" : "";
					points[index] = parsed[index].length;
					break;
				}
				default: parsed[index] += from(character);
			}
		while (character = next());
		return parsed;
	};
	getRules = function getRules(value, points) {
		return dealloc(toRules(alloc(value), points));
	};
	fixedElements = /* #__PURE__ */ new WeakMap();
	compat = function compat(element) {
		if (element.type !== "rule" || !element.parent || element.length < 1) return;
		var value = element.value;
		var parent = element.parent;
		var isImplicitRule = element.column === parent.column && element.line === parent.line;
		while (parent.type !== "rule") {
			parent = parent.parent;
			if (!parent) return;
		}
		if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) return;
		if (isImplicitRule) return;
		fixedElements.set(element, true);
		var points = [];
		var rules = getRules(value, points);
		var parentRules = parent.props;
		for (var i = 0, k = 0; i < rules.length; i++) for (var j = 0; j < parentRules.length; j++, k++) element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
	};
	removeLabel = function removeLabel(element) {
		if (element.type === "decl") {
			var value = element.value;
			if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
				element["return"] = "";
				element.value = "";
			}
		}
	};
	defaultStylisPlugins = [function prefixer(element, index, children, callback) {
		if (element.length > -1) {
			if (!element["return"]) switch (element.type) {
				case DECLARATION:
					element["return"] = prefix(element.value, element.length);
					break;
				case KEYFRAMES: return serialize([copy(element, { value: replace(element.value, "@", "@" + WEBKIT) })], callback);
				case RULESET: if (element.length) return combine(element.props, function(value) {
					switch (match(value, /(::plac\w+|:read-\w+)/)) {
						case ":read-only":
						case ":read-write": return serialize([copy(element, { props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")] })], callback);
						case "::placeholder": return serialize([
							copy(element, { props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")] }),
							copy(element, { props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")] }),
							copy(element, { props: [replace(value, /:(plac\w+)/, MS + "input-$1")] })
						], callback);
					}
					return "";
				});
			}
		}
	}];
	createCache = function createCache(options) {
		var key = options.key;
		if (key === "css") {
			var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
			Array.prototype.forEach.call(ssrStyles, function(node) {
				if (node.getAttribute("data-emotion").indexOf(" ") === -1) return;
				document.head.appendChild(node);
				node.setAttribute("data-s", "");
			});
		}
		var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
		var inserted = {};
		var container;
		var nodesToHydrate = [];
		container = options.container || document.head;
		Array.prototype.forEach.call(document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function(node) {
			var attrib = node.getAttribute("data-emotion").split(" ");
			for (var i = 1; i < attrib.length; i++) inserted[attrib[i]] = true;
			nodesToHydrate.push(node);
		});
		var _insert;
		var omnipresentPlugins = [compat, removeLabel];
		var currentSheet;
		var finalizingPlugins = [stringify, rulesheet(function(rule) {
			currentSheet.insert(rule);
		})];
		var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
		var stylis = function stylis(styles) {
			return serialize(compile(styles), serializer);
		};
		_insert = function insert(selector, serialized, sheet, shouldCache) {
			currentSheet = sheet;
			stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
			if (shouldCache) cache.inserted[serialized.name] = true;
		};
		var cache = {
			key,
			sheet: new StyleSheet({
				key,
				container,
				nonce: options.nonce,
				speedy: options.speedy,
				prepend: options.prepend,
				insertionPoint: options.insertionPoint
			}),
			nonce: options.nonce,
			inserted,
			registered: {},
			insert: _insert
		};
		cache.sheet.hydrate(nodesToHydrate);
		return cache;
	};
}));
//#endregion
//#region ../../node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js
var import_hoist_non_react_statics_cjs$1, hoistNonReactStatics;
var init_emotion_react__isolated_hnrs_browser_esm = __esmMin((() => {
	import_hoist_non_react_statics_cjs$1 = /* @__PURE__ */ __toESM(require_hoist_non_react_statics_cjs());
	hoistNonReactStatics = (function(targetComponent, sourceComponent) {
		return (0, import_hoist_non_react_statics_cjs$1.default)(targetComponent, sourceComponent);
	});
}));
//#endregion
//#region ../../node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
function getRegisteredStyles(registered, registeredStyles, classNames) {
	var rawClassName = "";
	classNames.split(" ").forEach(function(className) {
		if (registered[className] !== void 0) registeredStyles.push(registered[className] + ";");
		else if (className) rawClassName += className + " ";
	});
	return rawClassName;
}
var registerStyles, insertStyles;
var init_emotion_utils_browser_esm = __esmMin((() => {
	registerStyles = function registerStyles(cache, serialized, isStringTag) {
		var className = cache.key + "-" + serialized.name;
		if ((isStringTag === false || false) && cache.registered[className] === void 0) cache.registered[className] = serialized.styles;
	};
	insertStyles = function insertStyles(cache, serialized, isStringTag) {
		registerStyles(cache, serialized, isStringTag);
		var className = cache.key + "-" + serialized.name;
		if (cache.inserted[serialized.name] === void 0) {
			var current = serialized;
			do {
				cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
				current = current.next;
			} while (current !== void 0);
		}
	};
}));
//#endregion
//#region ../../node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
	var h = 0;
	var k, i = 0, len = str.length;
	for (; len >= 4; ++i, len -= 4) {
		k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
		k = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
		k ^= k >>> 24;
		h = (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	}
	switch (len) {
		case 3: h ^= (str.charCodeAt(i + 2) & 255) << 16;
		case 2: h ^= (str.charCodeAt(i + 1) & 255) << 8;
		case 1:
			h ^= str.charCodeAt(i) & 255;
			h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	}
	h ^= h >>> 13;
	h = (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
	return ((h ^ h >>> 15) >>> 0).toString(36);
}
var init_emotion_hash_esm = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys;
var init_emotion_unitless_esm = __esmMin((() => {
	unitlessKeys = {
		animationIterationCount: 1,
		aspectRatio: 1,
		borderImageOutset: 1,
		borderImageSlice: 1,
		borderImageWidth: 1,
		boxFlex: 1,
		boxFlexGroup: 1,
		boxOrdinalGroup: 1,
		columnCount: 1,
		columns: 1,
		flex: 1,
		flexGrow: 1,
		flexPositive: 1,
		flexShrink: 1,
		flexNegative: 1,
		flexOrder: 1,
		gridRow: 1,
		gridRowEnd: 1,
		gridRowSpan: 1,
		gridRowStart: 1,
		gridColumn: 1,
		gridColumnEnd: 1,
		gridColumnSpan: 1,
		gridColumnStart: 1,
		msGridRow: 1,
		msGridRowSpan: 1,
		msGridColumn: 1,
		msGridColumnSpan: 1,
		fontWeight: 1,
		lineHeight: 1,
		opacity: 1,
		order: 1,
		orphans: 1,
		scale: 1,
		tabSize: 1,
		widows: 1,
		zIndex: 1,
		zoom: 1,
		WebkitLineClamp: 1,
		fillOpacity: 1,
		floodOpacity: 1,
		stopOpacity: 1,
		strokeDasharray: 1,
		strokeDashoffset: 1,
		strokeMiterlimit: 1,
		strokeOpacity: 1,
		strokeWidth: 1
	};
}));
//#endregion
//#region ../../node_modules/@emotion/serialize/dist/emotion-serialize.esm.js
function handleInterpolation(mergedProps, registered, interpolation) {
	if (interpolation == null) return "";
	var componentSelector = interpolation;
	if (componentSelector.__emotion_styles !== void 0) return componentSelector;
	switch (typeof interpolation) {
		case "boolean": return "";
		case "object":
			var keyframes = interpolation;
			if (keyframes.anim === 1) {
				cursor = {
					name: keyframes.name,
					styles: keyframes.styles,
					next: cursor
				};
				return keyframes.name;
			}
			var serializedStyles = interpolation;
			if (serializedStyles.styles !== void 0) {
				var next = serializedStyles.next;
				if (next !== void 0) while (next !== void 0) {
					cursor = {
						name: next.name,
						styles: next.styles,
						next: cursor
					};
					next = next.next;
				}
				return serializedStyles.styles + ";";
			}
			return createStringFromObject(mergedProps, registered, interpolation);
		case "function":
			if (mergedProps !== void 0) {
				var previousCursor = cursor;
				var result = interpolation(mergedProps);
				cursor = previousCursor;
				return handleInterpolation(mergedProps, registered, result);
			}
			break;
	}
	var asString = interpolation;
	if (registered == null) return asString;
	var cached = registered[asString];
	return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
	var string = "";
	if (Array.isArray(obj)) for (var i = 0; i < obj.length; i++) string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
	else for (var key in obj) {
		var value = obj[key];
		if (typeof value !== "object") {
			var asString = value;
			if (registered != null && registered[asString] !== void 0) string += key + "{" + registered[asString] + "}";
			else if (isProcessableValue(asString)) string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
		} else {
			if (key === "NO_COMPONENT_SELECTOR" && isDevelopment$2) throw new Error(noComponentSelectorMessage);
			if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
				for (var _i = 0; _i < value.length; _i++) if (isProcessableValue(value[_i])) string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
			} else {
				var interpolated = handleInterpolation(mergedProps, registered, value);
				switch (key) {
					case "animation":
					case "animationName":
						string += processStyleName(key) + ":" + interpolated + ";";
						break;
					default: string += key + "{" + interpolated + "}";
				}
			}
		}
	}
	return string;
}
function serializeStyles(args, registered, mergedProps) {
	if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) return args[0];
	var stringMode = true;
	var styles = "";
	cursor = void 0;
	var strings = args[0];
	if (strings == null || strings.raw === void 0) {
		stringMode = false;
		styles += handleInterpolation(mergedProps, registered, strings);
	} else styles += strings[0];
	for (var i = 1; i < args.length; i++) {
		styles += handleInterpolation(mergedProps, registered, args[i]);
		if (stringMode) styles += strings[i];
	}
	labelPattern.lastIndex = 0;
	var identifierName = "";
	var match;
	while ((match = labelPattern.exec(styles)) !== null) identifierName += "-" + match[1];
	return {
		name: murmur2(styles) + identifierName,
		styles,
		next: cursor
	};
}
var isDevelopment$2, hyphenateRegex, animationRegex, isCustomProperty, isProcessableValue, processStyleName, processStyleValue, noComponentSelectorMessage, labelPattern, cursor;
var init_emotion_serialize_esm = __esmMin((() => {
	init_emotion_hash_esm();
	init_emotion_unitless_esm();
	init_emotion_memoize_esm();
	isDevelopment$2 = false;
	hyphenateRegex = /[A-Z]|^ms/g;
	animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
	isCustomProperty = function isCustomProperty(property) {
		return property.charCodeAt(1) === 45;
	};
	isProcessableValue = function isProcessableValue(value) {
		return value != null && typeof value !== "boolean";
	};
	processStyleName = /* #__PURE__ */ memoize(function(styleName) {
		return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
	});
	processStyleValue = function processStyleValue(key, value) {
		switch (key) {
			case "animation":
			case "animationName": if (typeof value === "string") return value.replace(animationRegex, function(match, p1, p2) {
				cursor = {
					name: p1,
					styles: p2,
					next: cursor
				};
				return p1;
			});
		}
		if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) return value + "px";
		return value;
	};
	noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
	labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
}));
//#endregion
//#region ../../node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var import_react$8, syncFallback, useInsertionEffect, useInsertionEffectAlwaysWithSyncFallback, useInsertionEffectWithLayoutFallback;
var init_emotion_use_insertion_effect_with_fallbacks_browser_esm = __esmMin((() => {
	import_react$8 = /* @__PURE__ */ __toESM(require_react());
	syncFallback = function syncFallback(create) {
		return create();
	};
	useInsertionEffect = import_react$8.useInsertionEffect ? import_react$8.useInsertionEffect : false;
	useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
	useInsertionEffectWithLayoutFallback = useInsertionEffect || import_react$8.useLayoutEffect;
}));
//#endregion
//#region ../../node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
function withTheme(Component) {
	var componentName = Component.displayName || Component.name || "Component";
	var WithTheme = /*#__PURE__*/ import_react$6.forwardRef(function render(props, ref) {
		var theme = import_react$6.useContext(ThemeContext);
		return /*#__PURE__*/ import_react$6.createElement(Component, _extends$1({
			theme,
			ref
		}, props));
	});
	WithTheme.displayName = "WithTheme(" + componentName + ")";
	return hoistNonReactStatics(WithTheme, Component);
}
var import_react$6, import_react$7, EmotionCacheContext, CacheProvider, withEmotionCache, ThemeContext, useTheme, getTheme, createCacheWithTheme, ThemeProvider, hasOwn, typePropName, createEmotionProps, Insertion$2, Emotion$1;
var init_emotion_element_f0de968e_browser_esm = __esmMin((() => {
	import_react$6 = /* @__PURE__ */ __toESM(require_react());
	import_react$7 = /* @__PURE__ */ __toESM(require_react());
	init_emotion_cache_browser_esm();
	init_extends();
	init_emotion_weak_memoize_esm();
	init_emotion_react__isolated_hnrs_browser_esm();
	init_emotion_utils_browser_esm();
	init_emotion_serialize_esm();
	init_emotion_use_insertion_effect_with_fallbacks_browser_esm();
	EmotionCacheContext = /* #__PURE__ */ import_react$6.createContext(typeof HTMLElement !== "undefined" ? /* #__PURE__ */ createCache({ key: "css" }) : null);
	CacheProvider = EmotionCacheContext.Provider;
	withEmotionCache = function withEmotionCache(func) {
		return /*#__PURE__*/ (0, import_react$7.forwardRef)(function(props, ref) {
			return func(props, (0, import_react$7.useContext)(EmotionCacheContext), ref);
		});
	};
	ThemeContext = /* #__PURE__ */ import_react$6.createContext({});
	useTheme = function useTheme() {
		return import_react$6.useContext(ThemeContext);
	};
	getTheme = function getTheme(outerTheme, theme) {
		if (typeof theme === "function") return theme(outerTheme);
		return _extends$1({}, outerTheme, theme);
	};
	createCacheWithTheme = /* #__PURE__ */ weakMemoize(function(outerTheme) {
		return weakMemoize(function(theme) {
			return getTheme(outerTheme, theme);
		});
	});
	ThemeProvider = function ThemeProvider(props) {
		var theme = import_react$6.useContext(ThemeContext);
		if (props.theme !== theme) theme = createCacheWithTheme(theme)(props.theme);
		return /*#__PURE__*/ import_react$6.createElement(ThemeContext.Provider, { value: theme }, props.children);
	};
	hasOwn = {}.hasOwnProperty;
	typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
	createEmotionProps = function createEmotionProps(type, props) {
		var newProps = {};
		for (var _key in props) if (hasOwn.call(props, _key)) newProps[_key] = props[_key];
		newProps[typePropName] = type;
		return newProps;
	};
	Insertion$2 = function Insertion(_ref) {
		var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
		registerStyles(cache, serialized, isStringTag);
		useInsertionEffectAlwaysWithSyncFallback(function() {
			return insertStyles(cache, serialized, isStringTag);
		});
		return null;
	};
	Emotion$1 = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
		var cssProp = props.css;
		if (typeof cssProp === "string" && cache.registered[cssProp] !== void 0) cssProp = cache.registered[cssProp];
		var WrappedComponent = props[typePropName];
		var registeredStyles = [cssProp];
		var className = "";
		if (typeof props.className === "string") className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
		else if (props.className != null) className = props.className + " ";
		var serialized = serializeStyles(registeredStyles, void 0, import_react$6.useContext(ThemeContext));
		className += cache.key + "-" + serialized.name;
		var newProps = {};
		for (var _key2 in props) if (hasOwn.call(props, _key2) && _key2 !== "css" && _key2 !== typePropName && true) newProps[_key2] = props[_key2];
		newProps.className = className;
		if (ref) newProps.ref = ref;
		return /*#__PURE__*/ import_react$6.createElement(import_react$6.Fragment, null, /*#__PURE__*/ import_react$6.createElement(Insertion$2, {
			cache,
			serialized,
			isStringTag: typeof WrappedComponent === "string"
		}), /*#__PURE__*/ import_react$6.createElement(WrappedComponent, newProps));
	});
}));
//#endregion
//#region ../../node_modules/@emotion/react/dist/emotion-react.browser.esm.js
function css() {
	for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
	return serializeStyles(args);
}
function keyframes() {
	var insertable = css.apply(void 0, arguments);
	var name = "animation-" + insertable.name;
	return {
		name,
		styles: "@keyframes " + name + "{" + insertable.styles + "}",
		anim: 1,
		toString: function toString() {
			return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
		}
	};
}
function merge(registered, css, className) {
	var registeredStyles = [];
	var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
	if (registeredStyles.length < 2) return className;
	return rawClassName + css(registeredStyles);
}
var import_react$5, jsx, Global, classnames, Insertion$1, ClassNames;
var init_emotion_react_browser_esm = __esmMin((() => {
	init_emotion_element_f0de968e_browser_esm();
	import_react$5 = /* @__PURE__ */ __toESM(require_react());
	init_emotion_utils_browser_esm();
	init_emotion_use_insertion_effect_with_fallbacks_browser_esm();
	init_emotion_serialize_esm();
	require_hoist_non_react_statics_cjs();
	jsx = function jsx(type, props) {
		var args = arguments;
		if (props == null || !hasOwn.call(props, "css")) return import_react$5.createElement.apply(void 0, args);
		var argsLength = args.length;
		var createElementArgArray = new Array(argsLength);
		createElementArgArray[0] = Emotion$1;
		createElementArgArray[1] = createEmotionProps(type, props);
		for (var i = 2; i < argsLength; i++) createElementArgArray[i] = args[i];
		return import_react$5.createElement.apply(null, createElementArgArray);
	};
	(function(_jsx) {
		var JSX;
		JSX || (JSX = _jsx.JSX || (_jsx.JSX = {}));
	})(jsx || (jsx = {}));
	Global = /* #__PURE__ */ withEmotionCache(function(props, cache) {
		var styles = props.styles;
		var serialized = serializeStyles([styles], void 0, import_react$5.useContext(ThemeContext));
		var sheetRef = import_react$5.useRef();
		useInsertionEffectWithLayoutFallback(function() {
			var key = cache.key + "-global";
			var sheet = new cache.sheet.constructor({
				key,
				nonce: cache.sheet.nonce,
				container: cache.sheet.container,
				speedy: cache.sheet.isSpeedy
			});
			var rehydrating = false;
			var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");
			if (cache.sheet.tags.length) sheet.before = cache.sheet.tags[0];
			if (node !== null) {
				rehydrating = true;
				node.setAttribute("data-emotion", key);
				sheet.hydrate([node]);
			}
			sheetRef.current = [sheet, rehydrating];
			return function() {
				sheet.flush();
			};
		}, [cache]);
		useInsertionEffectWithLayoutFallback(function() {
			var sheetRefCurrent = sheetRef.current;
			var sheet = sheetRefCurrent[0];
			if (sheetRefCurrent[1]) {
				sheetRefCurrent[1] = false;
				return;
			}
			if (serialized.next !== void 0) insertStyles(cache, serialized.next, true);
			if (sheet.tags.length) {
				sheet.before = sheet.tags[sheet.tags.length - 1].nextElementSibling;
				sheet.flush();
			}
			cache.insert("", serialized, sheet, false);
		}, [cache, serialized.name]);
		return null;
	});
	classnames = function classnames(args) {
		var len = args.length;
		var i = 0;
		var cls = "";
		for (; i < len; i++) {
			var arg = args[i];
			if (arg == null) continue;
			var toAdd = void 0;
			switch (typeof arg) {
				case "boolean": break;
				case "object":
					if (Array.isArray(arg)) toAdd = classnames(arg);
					else {
						toAdd = "";
						for (var k in arg) if (arg[k] && k) {
							toAdd && (toAdd += " ");
							toAdd += k;
						}
					}
					break;
				default: toAdd = arg;
			}
			if (toAdd) {
				cls && (cls += " ");
				cls += toAdd;
			}
		}
		return cls;
	};
	Insertion$1 = function Insertion(_ref) {
		var cache = _ref.cache, serializedArr = _ref.serializedArr;
		useInsertionEffectAlwaysWithSyncFallback(function() {
			for (var i = 0; i < serializedArr.length; i++) insertStyles(cache, serializedArr[i], false);
		});
		return null;
	};
	ClassNames = /* #__PURE__ */ withEmotionCache(function(props, cache) {
		var serializedArr = [];
		var css = function css() {
			for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) args[_key] = arguments[_key];
			var serialized = serializeStyles(args, cache.registered);
			serializedArr.push(serialized);
			registerStyles(cache, serialized, false);
			return cache.key + "-" + serialized.name;
		};
		var content = {
			css,
			cx: function cx() {
				for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) args[_key2] = arguments[_key2];
				return merge(cache.registered, css, classnames(args));
			},
			theme: import_react$5.useContext(ThemeContext)
		};
		var ele = props.children(content);
		return /*#__PURE__*/ import_react$5.createElement(import_react$5.Fragment, null, /*#__PURE__*/ import_react$5.createElement(Insertion$1, {
			cache,
			serializedArr
		}), ele);
	});
}));
//#endregion
//#region ../../node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex, isPropValid;
var init_emotion_is_prop_valid_esm = __esmMin((() => {
	init_emotion_memoize_esm();
	reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
	isPropValid = /* #__PURE__ */ memoize(function(prop) {
		return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
	});
}));
//#endregion
//#region ../../node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
var import_react$4, isDevelopment, testOmitPropsOnStringTag, testOmitPropsOnComponent, getDefaultShouldForwardProp, composeShouldForwardProps, Insertion, createStyled;
var init_emotion_styled_base_browser_esm = __esmMin((() => {
	init_extends();
	init_emotion_react_browser_esm();
	init_emotion_serialize_esm();
	init_emotion_use_insertion_effect_with_fallbacks_browser_esm();
	init_emotion_utils_browser_esm();
	import_react$4 = /* @__PURE__ */ __toESM(require_react());
	init_emotion_is_prop_valid_esm();
	isDevelopment = false;
	testOmitPropsOnStringTag = isPropValid;
	testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
		return key !== "theme";
	};
	getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
		return typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
	};
	composeShouldForwardProps = function composeShouldForwardProps(tag, options, isReal) {
		var shouldForwardProp;
		if (options) {
			var optionsShouldForwardProp = options.shouldForwardProp;
			shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
				return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
			} : optionsShouldForwardProp;
		}
		if (typeof shouldForwardProp !== "function" && isReal) shouldForwardProp = tag.__emotion_forwardProp;
		return shouldForwardProp;
	};
	Insertion = function Insertion(_ref) {
		var cache = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
		registerStyles(cache, serialized, isStringTag);
		useInsertionEffectAlwaysWithSyncFallback(function() {
			return insertStyles(cache, serialized, isStringTag);
		});
		return null;
	};
	createStyled = function createStyled(tag, options) {
		var isReal = tag.__emotion_real === tag;
		var baseTag = isReal && tag.__emotion_base || tag;
		var identifierName;
		var targetClassName;
		if (options !== void 0) {
			identifierName = options.label;
			targetClassName = options.target;
		}
		var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
		var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
		var shouldUseAs = !defaultShouldForwardProp("as");
		return function() {
			var args = arguments;
			var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
			if (identifierName !== void 0) styles.push("label:" + identifierName + ";");
			if (args[0] == null || args[0].raw === void 0) styles.push.apply(styles, args);
			else {
				var templateStringsArr = args[0];
				styles.push(templateStringsArr[0]);
				var len = args.length;
				var i = 1;
				for (; i < len; i++) styles.push(args[i], templateStringsArr[i]);
			}
			var Styled = withEmotionCache(function(props, cache, ref) {
				var FinalTag = shouldUseAs && props.as || baseTag;
				var className = "";
				var classInterpolations = [];
				var mergedProps = props;
				if (props.theme == null) {
					mergedProps = {};
					for (var key in props) mergedProps[key] = props[key];
					mergedProps.theme = import_react$4.useContext(ThemeContext);
				}
				if (typeof props.className === "string") className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
				else if (props.className != null) className = props.className + " ";
				var serialized = serializeStyles(styles.concat(classInterpolations), cache.registered, mergedProps);
				className += cache.key + "-" + serialized.name;
				if (targetClassName !== void 0) className += " " + targetClassName;
				var finalShouldForwardProp = shouldUseAs && shouldForwardProp === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
				var newProps = {};
				for (var _key in props) {
					if (shouldUseAs && _key === "as") continue;
					if (finalShouldForwardProp(_key)) newProps[_key] = props[_key];
				}
				newProps.className = className;
				if (ref) newProps.ref = ref;
				return /*#__PURE__*/ import_react$4.createElement(import_react$4.Fragment, null, /*#__PURE__*/ import_react$4.createElement(Insertion, {
					cache,
					serialized,
					isStringTag: typeof FinalTag === "string"
				}), /*#__PURE__*/ import_react$4.createElement(FinalTag, newProps));
			});
			Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
			Styled.defaultProps = tag.defaultProps;
			Styled.__emotion_real = Styled;
			Styled.__emotion_base = baseTag;
			Styled.__emotion_styles = styles;
			Styled.__emotion_forwardProp = shouldForwardProp;
			Object.defineProperty(Styled, "toString", { value: function value() {
				if (targetClassName === void 0 && isDevelopment) return "NO_COMPONENT_SELECTOR";
				return "." + targetClassName;
			} });
			Styled.withComponent = function(nextTag, nextOptions) {
				return createStyled(nextTag, _extends$1({}, options, nextOptions, { shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true) })).apply(void 0, styles);
			};
			return Styled;
		};
	};
})), tags, styled;
var init_emotion_styled_browser_esm = __esmMin((() => {
	init_emotion_styled_base_browser_esm();
	init_emotion_use_insertion_effect_with_fallbacks_browser_esm();
	require_react();
	tags = [
		"a",
		"abbr",
		"address",
		"area",
		"article",
		"aside",
		"audio",
		"b",
		"base",
		"bdi",
		"bdo",
		"big",
		"blockquote",
		"body",
		"br",
		"button",
		"canvas",
		"caption",
		"cite",
		"code",
		"col",
		"colgroup",
		"data",
		"datalist",
		"dd",
		"del",
		"details",
		"dfn",
		"dialog",
		"div",
		"dl",
		"dt",
		"em",
		"embed",
		"fieldset",
		"figcaption",
		"figure",
		"footer",
		"form",
		"h1",
		"h2",
		"h3",
		"h4",
		"h5",
		"h6",
		"head",
		"header",
		"hgroup",
		"hr",
		"html",
		"i",
		"iframe",
		"img",
		"input",
		"ins",
		"kbd",
		"keygen",
		"label",
		"legend",
		"li",
		"link",
		"main",
		"map",
		"mark",
		"marquee",
		"menu",
		"menuitem",
		"meta",
		"meter",
		"nav",
		"noscript",
		"object",
		"ol",
		"optgroup",
		"option",
		"output",
		"p",
		"param",
		"picture",
		"pre",
		"progress",
		"q",
		"rp",
		"rt",
		"ruby",
		"s",
		"samp",
		"script",
		"section",
		"select",
		"small",
		"source",
		"span",
		"strong",
		"style",
		"sub",
		"summary",
		"sup",
		"table",
		"tbody",
		"td",
		"textarea",
		"tfoot",
		"th",
		"thead",
		"time",
		"title",
		"tr",
		"track",
		"u",
		"ul",
		"var",
		"video",
		"wbr",
		"circle",
		"clipPath",
		"defs",
		"ellipse",
		"foreignObject",
		"g",
		"image",
		"line",
		"linearGradient",
		"mask",
		"path",
		"pattern",
		"polygon",
		"polyline",
		"radialGradient",
		"rect",
		"stop",
		"svg",
		"text",
		"tspan"
	];
	styled = createStyled.bind(null);
	tags.forEach(function(tagName) {
		styled[tagName] = styled(tagName);
	});
}));
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
//#region ../../node_modules/deep-object-diff/mjs/utils.js
var isEmpty, isObject, hasOwnProperty, makeObjectWithoutPrototype;
var init_utils = __esmMin((() => {
	isEmpty = (o) => Object.keys(o).length === 0;
	isObject = (o) => o != null && typeof o === "object";
	hasOwnProperty = (o, ...args) => Object.prototype.hasOwnProperty.call(o, ...args);
	makeObjectWithoutPrototype = () => Object.create(null);
}));
//#endregion
//#region ../../node_modules/deep-object-diff/mjs/deleted.js
var deletedDiff;
var init_deleted = __esmMin((() => {
	init_utils();
	deletedDiff = (lhs, rhs) => {
		if (lhs === rhs || !isObject(lhs) || !isObject(rhs)) return {};
		return Object.keys(lhs).reduce((acc, key) => {
			if (hasOwnProperty(rhs, key)) {
				const difference = deletedDiff(lhs[key], rhs[key]);
				if (isObject(difference) && isEmpty(difference)) return acc;
				acc[key] = difference;
				return acc;
			}
			acc[key] = void 0;
			return acc;
		}, makeObjectWithoutPrototype());
	};
}));
//#endregion
//#region ../../node_modules/deep-object-diff/mjs/index.js
var init_mjs = __esmMin((() => {
	init_deleted();
}));
//#endregion
//#region ../../node_modules/@storybook/icons/dist/index.js
var dist_exports = /* @__PURE__ */ __exportAll({
	AccessibilityAltIcon: () => AccessibilityAltIcon,
	AccessibilityIcon: () => AccessibilityIcon,
	AccessibilityIgnoredIcon: () => AccessibilityIgnoredIcon,
	AddIcon: () => AddIcon,
	AdminIcon: () => AdminIcon,
	AlertAltIcon: () => AlertAltIcon,
	AlertIcon: () => AlertIcon,
	AlignLeftIcon: () => AlignLeftIcon,
	AlignRightIcon: () => AlignRightIcon,
	AppleIcon: () => AppleIcon,
	ArrowBottomLeftIcon: () => ArrowBottomLeftIcon,
	ArrowBottomRightIcon: () => ArrowBottomRightIcon,
	ArrowDownIcon: () => ArrowDownIcon,
	ArrowLeftIcon: () => ArrowLeftIcon,
	ArrowRightIcon: () => ArrowRightIcon,
	ArrowSolidDownIcon: () => ArrowSolidDownIcon,
	ArrowSolidLeftIcon: () => ArrowSolidLeftIcon,
	ArrowSolidRightIcon: () => ArrowSolidRightIcon,
	ArrowSolidUpIcon: () => ArrowSolidUpIcon,
	ArrowTopLeftIcon: () => ArrowTopLeftIcon,
	ArrowTopRightIcon: () => ArrowTopRightIcon,
	ArrowUpIcon: () => ArrowUpIcon,
	AzureDevOpsIcon: () => AzureDevOpsIcon,
	BackIcon: () => BackIcon,
	BasketIcon: () => BasketIcon,
	BatchAcceptIcon: () => BatchAcceptIcon,
	BatchDenyIcon: () => BatchDenyIcon,
	BeakerIcon: () => BeakerIcon,
	BellIcon: () => BellIcon,
	BitbucketIcon: () => BitbucketIcon,
	BoldIcon: () => BoldIcon,
	BookIcon: () => BookIcon,
	BookmarkHollowIcon: () => BookmarkHollowIcon,
	BookmarkIcon: () => BookmarkIcon,
	BottomBarIcon: () => BottomBarIcon,
	BottomBarToggleIcon: () => BottomBarToggleIcon,
	BoxIcon: () => BoxIcon,
	BranchIcon: () => BranchIcon,
	BrowserIcon: () => BrowserIcon,
	BugIcon: () => BugIcon,
	ButtonIcon: () => ButtonIcon,
	CPUIcon: () => CPUIcon,
	CalendarIcon: () => CalendarIcon,
	CameraIcon: () => CameraIcon,
	CameraStabilizeIcon: () => CameraStabilizeIcon,
	CategoryIcon: () => CategoryIcon,
	CertificateIcon: () => CertificateIcon,
	ChangedIcon: () => ChangedIcon,
	ChatIcon: () => ChatIcon,
	CheckIcon: () => CheckIcon,
	ChecklistIcon: () => ChecklistIcon,
	ChevronDownIcon: () => ChevronDownIcon,
	ChevronLeftIcon: () => ChevronLeftIcon,
	ChevronRightIcon: () => ChevronRightIcon,
	ChevronSmallDownIcon: () => ChevronSmallDownIcon,
	ChevronSmallLeftIcon: () => ChevronSmallLeftIcon,
	ChevronSmallRightIcon: () => ChevronSmallRightIcon,
	ChevronSmallUpIcon: () => ChevronSmallUpIcon,
	ChevronUpIcon: () => ChevronUpIcon,
	ChromaticIcon: () => ChromaticIcon,
	ChromeIcon: () => ChromeIcon,
	CircleHollowIcon: () => CircleHollowIcon,
	CircleIcon: () => CircleIcon,
	ClearIcon: () => ClearIcon,
	CloseAltIcon: () => CloseAltIcon,
	CloseIcon: () => CloseIcon,
	CloudHollowIcon: () => CloudHollowIcon,
	CloudIcon: () => CloudIcon,
	CogIcon: () => CogIcon,
	CollapseIcon: () => CollapseIcon,
	CommandIcon: () => CommandIcon,
	CommentAddIcon: () => CommentAddIcon,
	CommentIcon: () => CommentIcon,
	CommentsIcon: () => CommentsIcon,
	CommitIcon: () => CommitIcon,
	CompassIcon: () => CompassIcon,
	ComponentDrivenIcon: () => ComponentDrivenIcon,
	ComponentIcon: () => ComponentIcon,
	ContrastIcon: () => ContrastIcon,
	ContrastIgnoredIcon: () => ContrastIgnoredIcon,
	ControlsIcon: () => ControlsIcon,
	CopyIcon: () => CopyIcon,
	CreditIcon: () => CreditIcon,
	CrossIcon: () => CrossIcon,
	DashboardIcon: () => DashboardIcon,
	DatabaseIcon: () => DatabaseIcon,
	DeleteIcon: () => DeleteIcon,
	DiamondIcon: () => DiamondIcon,
	DirectionIcon: () => DirectionIcon,
	DiscordIcon: () => DiscordIcon,
	DocChartIcon: () => DocChartIcon,
	DocListIcon: () => DocListIcon,
	DocumentIcon: () => DocumentIcon,
	DownloadIcon: () => DownloadIcon,
	DragIcon: () => DragIcon,
	EditIcon: () => EditIcon,
	EditorIcon: () => EditorIcon,
	EllipsisIcon: () => EllipsisIcon,
	EmailIcon: () => EmailIcon,
	ExpandAltIcon: () => ExpandAltIcon,
	ExpandIcon: () => ExpandIcon,
	EyeCloseIcon: () => EyeCloseIcon,
	EyeIcon: () => EyeIcon,
	FaceHappyIcon: () => FaceHappyIcon,
	FaceNeutralIcon: () => FaceNeutralIcon,
	FaceSadIcon: () => FaceSadIcon,
	FacebookIcon: () => FacebookIcon,
	FailedIcon: () => FailedIcon,
	FastForwardIcon: () => FastForwardIcon,
	FigmaIcon: () => FigmaIcon,
	FilesIcon: () => FilesIcon,
	FilterIcon: () => FilterIcon,
	FlagIcon: () => FlagIcon,
	FolderIcon: () => FolderIcon,
	FormIcon: () => FormIcon,
	GDriveIcon: () => GDriveIcon,
	GiftIcon: () => GiftIcon,
	GithubIcon: () => GithubIcon,
	GitlabIcon: () => GitlabIcon,
	GlobeIcon: () => GlobeIcon,
	GoogleIcon: () => GoogleIcon,
	GraphBarIcon: () => GraphBarIcon,
	GraphLineIcon: () => GraphLineIcon,
	GraphqlIcon: () => GraphqlIcon,
	GridAltIcon: () => GridAltIcon,
	GridIcon: () => GridIcon,
	GrowIcon: () => GrowIcon,
	HeartHollowIcon: () => HeartHollowIcon,
	HeartIcon: () => HeartIcon,
	HomeIcon: () => HomeIcon,
	HourglassIcon: () => HourglassIcon,
	InfoIcon: () => InfoIcon,
	ItalicIcon: () => ItalicIcon,
	JumpToIcon: () => JumpToIcon,
	KeyIcon: () => KeyIcon,
	LightningIcon: () => LightningIcon,
	LightningOffIcon: () => LightningOffIcon,
	LinkBrokenIcon: () => LinkBrokenIcon,
	LinkIcon: () => LinkIcon,
	LinkedinIcon: () => LinkedinIcon,
	LinuxIcon: () => LinuxIcon,
	ListOrderedIcon: () => ListOrderedIcon,
	ListUnorderedIcon: () => ListUnorderedIcon,
	LocationIcon: () => LocationIcon,
	LockIcon: () => LockIcon,
	MarkdownIcon: () => MarkdownIcon,
	MarkupIcon: () => MarkupIcon,
	MediumIcon: () => MediumIcon,
	MemoryIcon: () => MemoryIcon,
	MenuIcon: () => MenuIcon,
	MergeIcon: () => MergeIcon,
	MirrorIcon: () => MirrorIcon,
	MobileIcon: () => MobileIcon,
	MoonIcon: () => MoonIcon,
	NutIcon: () => NutIcon,
	OutboxIcon: () => OutboxIcon,
	OutlineIcon: () => OutlineIcon,
	PaintBrushAltIcon: () => PaintBrushAltIcon,
	PaintBrushIcon: () => PaintBrushIcon,
	PaperClipIcon: () => PaperClipIcon,
	ParagraphIcon: () => ParagraphIcon,
	PassedIcon: () => PassedIcon,
	PhoneIcon: () => PhoneIcon,
	PhotoDragIcon: () => PhotoDragIcon,
	PhotoIcon: () => PhotoIcon,
	PhotoStabilizeIcon: () => PhotoStabilizeIcon,
	PinAltIcon: () => PinAltIcon,
	PinIcon: () => PinIcon,
	PlayAllHollowIcon: () => PlayAllHollowIcon,
	PlayBackIcon: () => PlayBackIcon,
	PlayHollowIcon: () => PlayHollowIcon,
	PlayIcon: () => PlayIcon,
	PlayNextIcon: () => PlayNextIcon,
	PlusIcon: () => PlusIcon,
	PointerDefaultIcon: () => PointerDefaultIcon,
	PointerHandIcon: () => PointerHandIcon,
	PopOutIcon: () => PopOutIcon,
	PowerIcon: () => PowerIcon,
	PrintIcon: () => PrintIcon,
	ProceedIcon: () => ProceedIcon,
	ProfileIcon: () => ProfileIcon,
	PullRequestIcon: () => PullRequestIcon,
	QuestionIcon: () => QuestionIcon,
	RSSIcon: () => RSSIcon,
	RedirectIcon: () => RedirectIcon,
	ReduxIcon: () => ReduxIcon,
	RefreshIcon: () => RefreshIcon,
	ReplyIcon: () => ReplyIcon,
	RepoIcon: () => RepoIcon,
	RequestChangeIcon: () => RequestChangeIcon,
	RewindIcon: () => RewindIcon,
	RulerIcon: () => RulerIcon,
	SaveIcon: () => SaveIcon,
	SearchIcon: () => SearchIcon,
	ShareAltIcon: () => ShareAltIcon,
	ShareIcon: () => ShareIcon,
	ShieldIcon: () => ShieldIcon,
	SideBySideIcon: () => SideBySideIcon,
	SidebarAltIcon: () => SidebarAltIcon,
	SidebarAltToggleIcon: () => SidebarAltToggleIcon,
	SidebarIcon: () => SidebarIcon,
	SidebarToggleIcon: () => SidebarToggleIcon,
	SortDownIcon: () => SortDownIcon,
	SortUpIcon: () => SortUpIcon,
	SpeakerIcon: () => SpeakerIcon,
	StackedIcon: () => StackedIcon,
	StarHollowIcon: () => StarHollowIcon,
	StarIcon: () => StarIcon,
	StatusFailIcon: () => StatusFailIcon,
	StatusIcon: () => StatusIcon,
	StatusNewIcon: () => StatusNewIcon,
	StatusPassIcon: () => StatusPassIcon,
	StatusWarnIcon: () => StatusWarnIcon,
	StickerIcon: () => StickerIcon,
	StopAltHollowIcon: () => StopAltHollowIcon,
	StopAltIcon: () => StopAltIcon,
	StopIcon: () => StopIcon,
	StorybookIcon: () => StorybookIcon,
	StructureIcon: () => StructureIcon,
	SubtractIcon: () => SubtractIcon,
	SunIcon: () => SunIcon,
	SupportIcon: () => SupportIcon,
	SweepIcon: () => SweepIcon,
	SwitchAltIcon: () => SwitchAltIcon,
	SyncIcon: () => SyncIcon,
	TabletIcon: () => TabletIcon,
	ThumbsUpIcon: () => ThumbsUpIcon,
	TimeIcon: () => TimeIcon,
	TimerIcon: () => TimerIcon,
	TransferIcon: () => TransferIcon,
	TrashIcon: () => TrashIcon,
	TwitterIcon: () => TwitterIcon,
	TypeIcon: () => TypeIcon,
	UbuntuIcon: () => UbuntuIcon,
	UndoIcon: () => UndoIcon,
	UnfoldIcon: () => UnfoldIcon,
	UnlockIcon: () => UnlockIcon,
	UnpinIcon: () => UnpinIcon,
	UploadIcon: () => UploadIcon,
	UserAddIcon: () => UserAddIcon,
	UserAltIcon: () => UserAltIcon,
	UserIcon: () => UserIcon,
	UsersIcon: () => UsersIcon,
	VSCodeIcon: () => VSCodeIcon,
	VerifiedIcon: () => VerifiedIcon,
	VideoIcon: () => VideoIcon,
	WandIcon: () => WandIcon,
	WatchIcon: () => WatchIcon,
	WindowsIcon: () => WindowsIcon,
	WrenchIcon: () => WrenchIcon,
	XIcon: () => XIcon,
	YoutubeIcon: () => YoutubeIcon,
	ZoomIcon: () => ZoomIcon,
	ZoomOutIcon: () => ZoomOutIcon,
	ZoomResetIcon: () => ZoomResetIcon,
	iconList: () => iconList
});
var import_react$2, iconList, PhotoIcon, ComponentIcon, GridIcon, OutlineIcon, PhotoDragIcon, PhotoStabilizeIcon, CameraStabilizeIcon, GridAltIcon, SearchIcon, ZoomIcon, ZoomOutIcon, ZoomResetIcon, EyeIcon, EyeCloseIcon, LightningIcon, LightningOffIcon, MirrorIcon, GrowIcon, ContrastIcon, SwitchAltIcon, ContrastIgnoredIcon, PaintBrushIcon, PaintBrushAltIcon, RulerIcon, CameraIcon, VideoIcon, SpeakerIcon, PlayIcon, PlayBackIcon, PlayNextIcon, RewindIcon, FastForwardIcon, StopAltIcon, SunIcon, MoonIcon, StopAltHollowIcon, PlayHollowIcon, PlayAllHollowIcon, StopIcon, SideBySideIcon, StackedIcon, BookIcon, DocumentIcon, CopyIcon, FilesIcon, CategoryIcon, FolderIcon, PrintIcon, GraphLineIcon, CalendarIcon, GraphBarIcon, AlignLeftIcon, AlignRightIcon, FilterIcon, DocChartIcon, DocListIcon, DragIcon, MenuIcon, MarkupIcon, BoldIcon, ItalicIcon, PaperClipIcon, ListOrderedIcon, ListUnorderedIcon, ChecklistIcon, ParagraphIcon, MarkdownIcon, RepoIcon, CommitIcon, BranchIcon, PullRequestIcon, MergeIcon, AppleIcon, LinuxIcon, UbuntuIcon, WindowsIcon, ChromeIcon, StorybookIcon, AzureDevOpsIcon, BitbucketIcon, ChromaticIcon, ComponentDrivenIcon, DiscordIcon, FacebookIcon, FigmaIcon, GDriveIcon, GithubIcon, GitlabIcon, GoogleIcon, GraphqlIcon, MediumIcon, ReduxIcon, TwitterIcon, YoutubeIcon, VSCodeIcon, LinkedinIcon, XIcon, BrowserIcon, TabletIcon, MobileIcon, WatchIcon, SidebarIcon, SidebarAltIcon, SidebarAltToggleIcon, SidebarToggleIcon, BottomBarIcon, BottomBarToggleIcon, CPUIcon, DatabaseIcon, MemoryIcon, StructureIcon, BoxIcon, PowerIcon, EditIcon, CogIcon, NutIcon, WrenchIcon, EllipsisIcon, WandIcon, SweepIcon, CheckIcon, FormIcon, BatchDenyIcon, BatchAcceptIcon, ControlsIcon, PlusIcon, CloseAltIcon, CrossIcon, TrashIcon, PinAltIcon, UnpinIcon, AddIcon, SubtractIcon, CloseIcon, DeleteIcon, PassedIcon, ChangedIcon, FailedIcon, ClearIcon, CommentIcon, CommentAddIcon, RequestChangeIcon, CommentsIcon, ChatIcon, LockIcon, UnlockIcon, KeyIcon, OutboxIcon, CreditIcon, ButtonIcon, TypeIcon, PointerDefaultIcon, PointerHandIcon, CommandIcon, SaveIcon, SortDownIcon, SortUpIcon, BugIcon, EditorIcon, InfoIcon, QuestionIcon, SupportIcon, AlertIcon, AlertAltIcon, EmailIcon, PhoneIcon, LinkIcon, LinkBrokenIcon, BellIcon, RSSIcon, ShareAltIcon, ShareIcon, JumpToIcon, CircleHollowIcon, CircleIcon, BookmarkHollowIcon, BookmarkIcon, DiamondIcon, HeartHollowIcon, HeartIcon, StarHollowIcon, StarIcon, CertificateIcon, VerifiedIcon, ThumbsUpIcon, ShieldIcon, BasketIcon, BeakerIcon, HourglassIcon, FlagIcon, CloudHollowIcon, CloudIcon, StickerIcon, StatusFailIcon, StatusIcon, StatusWarnIcon, StatusPassIcon, GiftIcon, StatusNewIcon, PopOutIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronSmallUpIcon, ChevronSmallDownIcon, ChevronSmallLeftIcon, ChevronSmallRightIcon, ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, ArrowTopLeftIcon, ArrowTopRightIcon, ArrowBottomLeftIcon, ArrowBottomRightIcon, ArrowSolidUpIcon, ArrowSolidDownIcon, ArrowSolidLeftIcon, ArrowSolidRightIcon, ExpandAltIcon, CollapseIcon, ExpandIcon, UnfoldIcon, TransferIcon, RedirectIcon, UndoIcon, ReplyIcon, SyncIcon, UploadIcon, DownloadIcon, BackIcon, ProceedIcon, RefreshIcon, GlobeIcon, CompassIcon, LocationIcon, PinIcon, TimeIcon, DashboardIcon, TimerIcon, HomeIcon, AdminIcon, DirectionIcon, UserIcon, UserAltIcon, UserAddIcon, UsersIcon, ProfileIcon, FaceHappyIcon, FaceNeutralIcon, FaceSadIcon, AccessibilityIcon, AccessibilityAltIcon, AccessibilityIgnoredIcon;
var init_dist$4 = __esmMin((() => {
	import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
	iconList = [
		{
			name: "Images",
			icons: [
				"PhotoIcon",
				"ComponentIcon",
				"GridIcon",
				"OutlineIcon",
				"PhotoDragIcon",
				"PhotoStabilizeIcon",
				"CameraStabilizeIcon",
				"GridAltIcon",
				"SearchIcon",
				"ZoomIcon",
				"ZoomOutIcon",
				"ZoomResetIcon",
				"EyeIcon",
				"EyeCloseIcon",
				"LightningIcon",
				"LightningOffIcon",
				"MirrorIcon",
				"GrowIcon",
				"ContrastIcon",
				"SwitchAltIcon",
				"ContrastIgnoredIcon",
				"PaintBrushIcon",
				"PaintBrushAltIcon",
				"RulerIcon",
				"CameraIcon",
				"VideoIcon",
				"SpeakerIcon",
				"PlayIcon",
				"PlayBackIcon",
				"PlayNextIcon",
				"RewindIcon",
				"FastForwardIcon",
				"StopAltIcon",
				"SunIcon",
				"MoonIcon",
				"StopAltHollowIcon",
				"PlayHollowIcon",
				"PlayAllHollowIcon",
				"StopIcon",
				"SideBySideIcon",
				"StackedIcon"
			]
		},
		{
			name: "Documents",
			icons: [
				"BookIcon",
				"DocumentIcon",
				"CopyIcon",
				"FilesIcon",
				"CategoryIcon",
				"FolderIcon",
				"PrintIcon",
				"GraphLineIcon",
				"CalendarIcon",
				"GraphBarIcon",
				"AlignLeftIcon",
				"AlignRightIcon",
				"FilterIcon",
				"DocChartIcon",
				"DocListIcon",
				"DragIcon",
				"MenuIcon"
			]
		},
		{
			name: "Editing",
			icons: [
				"MarkupIcon",
				"BoldIcon",
				"ItalicIcon",
				"PaperClipIcon",
				"ListOrderedIcon",
				"ListUnorderedIcon",
				"ChecklistIcon",
				"ParagraphIcon",
				"MarkdownIcon"
			]
		},
		{
			name: "Git",
			icons: [
				"RepoIcon",
				"CommitIcon",
				"BranchIcon",
				"PullRequestIcon",
				"MergeIcon"
			]
		},
		{
			name: "OS",
			icons: [
				"AppleIcon",
				"LinuxIcon",
				"UbuntuIcon",
				"WindowsIcon",
				"ChromeIcon"
			]
		},
		{
			name: "Logos",
			icons: [
				"StorybookIcon",
				"AzureDevOpsIcon",
				"BitbucketIcon",
				"ChromaticIcon",
				"ComponentDrivenIcon",
				"DiscordIcon",
				"FacebookIcon",
				"FigmaIcon",
				"GDriveIcon",
				"GithubIcon",
				"GitlabIcon",
				"GoogleIcon",
				"GraphqlIcon",
				"MediumIcon",
				"ReduxIcon",
				"TwitterIcon",
				"YoutubeIcon",
				"VSCodeIcon",
				"LinkedinIcon",
				"XIcon"
			]
		},
		{
			name: "Devices",
			icons: [
				"BrowserIcon",
				"TabletIcon",
				"MobileIcon",
				"WatchIcon",
				"SidebarIcon",
				"SidebarAltIcon",
				"SidebarAltToggleIcon",
				"SidebarToggleIcon",
				"BottomBarIcon",
				"BottomBarToggleIcon",
				"CPUIcon",
				"DatabaseIcon",
				"MemoryIcon",
				"StructureIcon",
				"BoxIcon",
				"PowerIcon"
			]
		},
		{
			name: "CRUD",
			icons: [
				"EditIcon",
				"CogIcon",
				"NutIcon",
				"WrenchIcon",
				"EllipsisIcon",
				"WandIcon",
				"SweepIcon",
				"CheckIcon",
				"FormIcon",
				"BatchDenyIcon",
				"BatchAcceptIcon",
				"ControlsIcon",
				"PlusIcon",
				"CloseAltIcon",
				"CrossIcon",
				"TrashIcon",
				"PinAltIcon",
				"UnpinIcon",
				"AddIcon",
				"SubtractIcon",
				"CloseIcon",
				"DeleteIcon",
				"PassedIcon",
				"ChangedIcon",
				"FailedIcon",
				"ClearIcon",
				"CommentIcon",
				"CommentAddIcon",
				"RequestChangeIcon",
				"CommentsIcon",
				"ChatIcon",
				"LockIcon",
				"UnlockIcon",
				"KeyIcon",
				"OutboxIcon",
				"CreditIcon",
				"ButtonIcon",
				"TypeIcon",
				"PointerDefaultIcon",
				"PointerHandIcon",
				"CommandIcon",
				"SaveIcon",
				"SortDownIcon",
				"SortUpIcon",
				"BugIcon",
				"EditorIcon"
			]
		},
		{
			name: "Communicate",
			icons: [
				"InfoIcon",
				"QuestionIcon",
				"SupportIcon",
				"AlertIcon",
				"AlertAltIcon",
				"EmailIcon",
				"PhoneIcon",
				"LinkIcon",
				"LinkBrokenIcon",
				"BellIcon",
				"RSSIcon",
				"ShareAltIcon",
				"ShareIcon",
				"JumpToIcon",
				"CircleHollowIcon",
				"CircleIcon",
				"BookmarkHollowIcon",
				"BookmarkIcon",
				"DiamondIcon",
				"HeartHollowIcon",
				"HeartIcon",
				"StarHollowIcon",
				"StarIcon",
				"CertificateIcon",
				"VerifiedIcon",
				"ThumbsUpIcon",
				"ShieldIcon",
				"BasketIcon",
				"BeakerIcon",
				"HourglassIcon",
				"FlagIcon",
				"CloudHollowIcon",
				"CloudIcon",
				"StickerIcon",
				"StatusFailIcon",
				"StatusIcon",
				"StatusWarnIcon",
				"StatusPassIcon",
				"GiftIcon",
				"StatusNewIcon",
				"PopOutIcon"
			]
		},
		{
			name: "Wayfinding",
			icons: [
				"ChevronUpIcon",
				"ChevronDownIcon",
				"ChevronLeftIcon",
				"ChevronRightIcon",
				"ChevronSmallUpIcon",
				"ChevronSmallDownIcon",
				"ChevronSmallLeftIcon",
				"ChevronSmallRightIcon",
				"ArrowUpIcon",
				"ArrowDownIcon",
				"ArrowLeftIcon",
				"ArrowRightIcon",
				"ArrowTopLeftIcon",
				"ArrowTopRightIcon",
				"ArrowBottomLeftIcon",
				"ArrowBottomRightIcon",
				"ArrowSolidUpIcon",
				"ArrowSolidDownIcon",
				"ArrowSolidLeftIcon",
				"ArrowSolidRightIcon",
				"ExpandAltIcon",
				"CollapseIcon",
				"ExpandIcon",
				"UnfoldIcon",
				"TransferIcon",
				"RedirectIcon",
				"UndoIcon",
				"ReplyIcon",
				"SyncIcon",
				"UploadIcon",
				"DownloadIcon",
				"BackIcon",
				"ProceedIcon",
				"RefreshIcon",
				"GlobeIcon",
				"CompassIcon",
				"LocationIcon",
				"PinIcon",
				"TimeIcon",
				"DashboardIcon",
				"TimerIcon",
				"HomeIcon",
				"AdminIcon",
				"DirectionIcon"
			]
		},
		{
			name: "People",
			icons: [
				"UserIcon",
				"UserAltIcon",
				"UserAddIcon",
				"UsersIcon",
				"ProfileIcon",
				"FaceHappyIcon",
				"FaceNeutralIcon",
				"FaceSadIcon",
				"AccessibilityIcon",
				"AccessibilityAltIcon",
				"AccessibilityIgnoredIcon"
			]
		}
	];
	PhotoIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6.25 4.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13 1.504v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5zM2 9.297V2.004h10v5.293L9.854 5.15a.5.5 0 00-.708 0L6.5 7.797 5.354 6.65a.5.5 0 00-.708 0L2 9.297zM9.5 6.21l2.5 2.5v3.293H2V10.71l3-3 3.146 3.146a.5.5 0 00.708-.707L7.207 8.504 9.5 6.21z",
			fill: color
		}));
	});
	ComponentIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
			fill: color
		}));
	});
	GridIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 1.504a.5.5 0 01.5-.5H6a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H1.5a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5h3.5v3.5H2zM7.5 1.504a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5zM1.5 7.504a.5.5 0 00-.5.5v4.5a.5.5 0 00.5.5H6a.5.5 0 00.5-.5v-4.5a.5.5 0 00-.5-.5H1.5zm.5 1v3.5h3.5v-3.5H2zM7.5 8.004a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5z",
			fill: color
		}));
	});
	OutlineIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2 2.004v2H1v-2.5a.5.5 0 01.5-.5H4v1H2zM1 9.004v-4h1v4H1zM1 10.004v2.5a.5.5 0 00.5.5H4v-1H2v-2H1zM10 13.004h2.5a.5.5 0 00.5-.5v-2.5h-1v2h-2v1zM12 4.004h1v-2.5a.5.5 0 00-.5-.5H10v1h2v2zM9 12.004v1H5v-1h4zM9 1.004v1H5v-1h4zM13 9.004h-1v-4h1v4zM7 8.004a1 1 0 100-2 1 1 0 000 2z",
			fill: color
		}));
	});
	PhotoDragIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M8.25 3.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7.003v-6.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v2.5h1v-2h2v6.5a.5.5 0 00.5.5H10v2H8v1h2.5a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-3.5zm-10-6v5.794L5.646 5.15a.5.5 0 01.708 0L7.5 6.297l2.646-2.647a.5.5 0 01.708 0L13 5.797V1.004H4zm9 6.208l-2.5-2.5-2.293 2.293L9.354 8.15a.5.5 0 11-.708.707L6 6.211l-2 2v1.793h9V7.21z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M0 10.004v-3h1v3H0zM0 13.504v-2.5h1v2h2v1H.5a.5.5 0 01-.5-.5zM7 14.004H4v-1h3v1z",
			fill: color
		}));
	});
	PhotoStabilizeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6 4a1.25 1.25 0 110 2.5A1.25 1.25 0 016 4zm0 .5A.75.75 0 106 6a.75.75 0 000-1.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11.5 2a.5.5 0 01.5.5v9a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h9zM7.207 9l.647.646a.5.5 0 01-.708.707L5 8.207l-2 2V11h8V8.207l-1.5-1.5L7.207 9zM3 8.793l1.646-1.647.079-.064a.5.5 0 01.629.064L6.5 8.293l2.646-2.647.079-.064a.5.5 0 01.629.064L11 6.793V3H3v5.793z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M0 3.5v-1A2.5 2.5 0 012.5 0h1a.5.5 0 010 1h-1A1.5 1.5 0 001 2.5v1a.5.5 0 01-1 0zM10.5 0h1A2.5 2.5 0 0114 2.5v1a.5.5 0 01-1 0v-1A1.5 1.5 0 0011.5 1h-1a.5.5 0 010-1zM0 10.5v1A2.5 2.5 0 002.5 14h1a.5.5 0 000-1h-1A1.5 1.5 0 011 11.5v-1a.5.5 0 00-1 0zM10.5 14h1a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1a1.5 1.5 0 01-1.5 1.5h-1a.5.5 0 000 1z",
			fill: color
		}));
	});
	CameraStabilizeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", {
			clipPath: "url(#prefix__clip0_2484_400)",
			fill: color
		}, /* @__PURE__ */ import_react$2.createElement("path", { d: "M2.5 1A1.5 1.5 0 001 2.5v1a.5.5 0 01-1 0v-1A2.5 2.5 0 012.5 0h1a.5.5 0 010 1h-1zM8 7a1 1 0 11-2 0 1 1 0 012 0z" }), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M5.852 2.223A.5.5 0 016.268 2h1.464a.5.5 0 01.416.223L9.333 4H11.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h2.167l1.185-1.777zM9 7a2 2 0 11-4 0 2 2 0 014 0z"
		}), /* @__PURE__ */ import_react$2.createElement("path", { d: "M11.5 1A1.5 1.5 0 0113 2.5v1a.5.5 0 001 0v-1A2.5 2.5 0 0011.5 0h-1a.5.5 0 000 1h1zM2.5 13A1.5 1.5 0 011 11.5v-1a.5.5 0 00-1 0v1A2.5 2.5 0 002.5 14h1a.5.5 0 000-1h-1zM11.5 13a1.5 1.5 0 001.5-1.5v-1a.5.5 0 011 0v1a2.5 2.5 0 01-2.5 2.5h-1a.5.5 0 010-1h1z" })), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_2484_400" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	GridAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4 3V1h1v2H4zM4 6v2h1V6H4zM4 11v2h1v-2H4zM9 11v2h1v-2H9zM9 8V6h1v2H9zM9 1v2h1V1H9zM13 5h-2V4h2v1zM11 10h2V9h-2v1zM3 10H1V9h2v1zM1 5h2V4H1v1zM8 5H6V4h2v1zM6 10h2V9H6v1zM4 4h1v1H4V4zM10 4H9v1h1V4zM9 9h1v1H9V9zM5 9H4v1h1V9z",
			fill: color
		}));
	});
	SearchIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
			fill: color
		}));
	});
	ZoomIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M6 3.5a.5.5 0 01.5.5v1.5H8a.5.5 0 010 1H6.5V8a.5.5 0 01-1 0V6.5H4a.5.5 0 010-1h1.5V4a.5.5 0 01.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
			fill: color
		}));
	});
	ZoomOutIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4 5.5a.5.5 0 000 1h4a.5.5 0 000-1H4z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6 11.5c1.35 0 2.587-.487 3.544-1.294a.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 106 11.5zm0-1a4.5 4.5 0 100-9 4.5 4.5 0 000 9z",
			fill: color
		}));
	});
	ZoomResetIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.5 2.837V1.5a.5.5 0 00-1 0V4a.5.5 0 00.5.5h2.5a.5.5 0 000-1H2.258a4.5 4.5 0 11-.496 4.016.5.5 0 10-.942.337 5.502 5.502 0 008.724 2.353.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 101.5 2.837z",
			fill: color
		}));
	});
	EyeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7l-.21.293C13.669 7.465 10.739 11.5 7 11.5S.332 7.465.21 7.293L0 7l.21-.293C.331 6.536 3.261 2.5 7 2.5s6.668 4.036 6.79 4.207L14 7zM2.896 5.302A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5c1.518 0 2.958-.83 4.104-1.802A12.72 12.72 0 0012.755 7c-.297-.37-.875-1.04-1.65-1.698C9.957 4.33 8.517 3.5 7 3.5c-1.519 0-2.958.83-4.104 1.802z",
			fill: color
		}));
	});
	EyeCloseIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11zM11.104 8.698c-.177.15-.362.298-.553.439l.714.714a13.25 13.25 0 002.526-2.558L14 7l-.21-.293C13.669 6.536 10.739 2.5 7 2.5c-.89 0-1.735.229-2.506.58l.764.763A4.859 4.859 0 017 3.5c1.518 0 2.958.83 4.104 1.802A12.724 12.724 0 0112.755 7a12.72 12.72 0 01-1.65 1.698zM.21 6.707c.069-.096 1.03-1.42 2.525-2.558l.714.714c-.191.141-.376.288-.553.439A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5a4.86 4.86 0 001.742-.344l.764.764c-.772.351-1.616.58-2.506.58C3.262 11.5.332 7.465.21 7.293L0 7l.21-.293z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4.5 7c0-.322.061-.63.172-.914l3.242 3.242A2.5 2.5 0 014.5 7zM9.328 7.914L6.086 4.672a2.5 2.5 0 013.241 3.241z",
			fill: color
		}));
	});
	LightningIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2.522 6.6a.566.566 0 00-.176.544.534.534 0 00.382.41l2.781.721-1.493 5.013a.563.563 0 00.216.627.496.496 0 00.63-.06l6.637-6.453a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L2.522 6.6zm7.72.63l-3.067-.804L9.02 2.29 3.814 6.803l2.95.764-1.277 4.285 4.754-4.622zM4.51 13.435l.037.011-.037-.011z",
			fill: color
		}));
	});
	LightningOffIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M10.139 8.725l1.36-1.323a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L5.464 4.05l.708.71 2.848-2.47-1.64 3.677.697.697 2.164.567-.81.787.708.708zM2.523 6.6a.566.566 0 00-.177.544.534.534 0 00.382.41l2.782.721-1.494 5.013a.563.563 0 00.217.627.496.496 0 00.629-.06l3.843-3.736-.708-.707-2.51 2.44 1.137-3.814-.685-.685-2.125-.55.844-.731-.71-.71L2.524 6.6zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z",
			fill: color
		}));
	});
	MirrorIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5h10v-10l-10 10z",
			fill: color
		}));
	});
	GrowIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.5 1.004a.5.5 0 100 1H12v10.5a.5.5 0 001 0v-10.5a1 1 0 00-1-1H1.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1 3.504a.5.5 0 01.5-.5H10a1 1 0 011 1v8.5a.5.5 0 01-1 0v-8.5H1.5a.5.5 0 01-.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1.5 5.004a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7zm.5 1v6h6v-6H2z",
			fill: color
		}));
	});
	ContrastIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm-1 0v6.5a.499.499 0 00.497.5H10v2H1v-9h2zm1-1h6.5a.499.499 0 01.5.5v6.5h2v-9H4v2zm6 7V7.71l-2.293 2.293H10zm0-3.707V4.71l-5.293 5.293h1.586L10 6.297zm-.707-2.293H7.707L4 7.71v1.586l5.293-5.293z",
			fill: color
		}));
	});
	SwitchAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3 3.004v-2.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H11v2.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5H3zm1 0v-2h9v9h-2v-6.5a.5.5 0 00-.5-.5H4zm6 8v2H1v-9h2v6.5a.5.5 0 00.5.5H10zm0-1H4v-6h6v6z",
			fill: color
		}));
	});
	ContrastIgnoredIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", {
			clipPath: "url(#prefix__clip0_2359_559)",
			fillRule: "evenodd",
			clipRule: "evenodd",
			fill: color
		}, /* @__PURE__ */ import_react$2.createElement("path", { d: "M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h7.176a4.526 4.526 0 01-.916-1H1v-9h2v6.5a.499.499 0 00.497.5h2.531a4.548 4.548 0 01-.001-1h-1.32l2.16-2.16c.274-.374.603-.703.977-.977L10 4.711v1.316a4.552 4.552 0 011 0V3.504a.48.48 0 00-.038-.191.5.5 0 00-.462-.31H4v-2h9v5.755c.378.253.715.561 1 .913V.504a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm5.293 0H7.707L4 7.71v1.586l5.293-5.293z" }), /* @__PURE__ */ import_react$2.createElement("path", { d: "M14 10.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-5.5 0A.5.5 0 019 10h3a.5.5 0 010 1H9a.5.5 0 01-.5-.5z" })), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_2359_559" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	PaintBrushIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11.854.146a.5.5 0 00-.708 0L2.983 8.31a2.24 2.24 0 00-1.074.6C.677 10.14.24 11.902.085 12.997 0 13.6 0 14 0 14s.4 0 1.002-.085c1.095-.155 2.857-.592 4.089-1.824a2.24 2.24 0 00.6-1.074l8.163-8.163a.5.5 0 000-.708l-2-2zM5.6 9.692l.942-.942L5.25 7.457l-.942.943A2.242 2.242 0 015.6 9.692zm1.649-1.65L12.793 2.5 11.5 1.207 5.957 6.75 7.25 8.043zM4.384 9.617a1.25 1.25 0 010 1.768c-.767.766-1.832 1.185-2.78 1.403-.17.04-.335.072-.49.098.027-.154.06-.318.099-.49.219-.947.637-2.012 1.403-2.779a1.25 1.25 0 011.768 0z",
			fill: color
		}));
	});
	PaintBrushAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M10.027.271a.752.752 0 01.947 0l.057.052 2.646 2.647.052.056a.752.752 0 010 .948l-.052.056-4.47 4.47 1.147 1.146.293-.293a.5.5 0 01.707 0l2.293 2.293a.5.5 0 010 .707l-1.293 1.293-.078.065a.502.502 0 01-.55 0l-.08-.065-2.292-2.293a.5.5 0 010-.707l.293-.293L8.324 9.03a.75.75 0 010-1.06l4.47-4.47L10.5 1.207l-.647.646.086.086a1.5 1.5 0 010 2.122L4.5 9.5l-.177.183C2.592 11.53 4 12.03 4 13a1 1 0 01-2 0c0-1 1.464-1.537 0-3l.003-.004-.063-.057-.879-.879a1.5 1.5 0 01-.103-2.006l.103-.115L6.94 1.061a1.5 1.5 0 012.121 0l.086.085.823-.823.057-.052zM10.415 11L12 12.586l.585-.586-1.585-1.586-.586.586zM8.354 1.768a.5.5 0 00-.629-.064l-.078.064L2.32 7.094c.782.138 2.263-.097 3.52-.349l3.393-3.392.063-.078a.501.501 0 000-.55l-.063-.079-.879-.878z",
			fill: color
		}));
	});
	RulerIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.5 1.004a.5.5 0 01.5.5v.5h10v-.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-.5H2v.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1.5 6a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-11zM2 7v5h10V7h-1v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H7.5v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H4v2.5a.5.5 0 01-1 0V7H2z",
			fill: color
		}));
	});
	CameraIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M10 7a3 3 0 11-6 0 3 3 0 016 0zM9 7a2 2 0 11-4 0 2 2 0 014 0z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2.5 1a.5.5 0 00-.5.5v.504H.5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H6V1.5a.5.5 0 00-.5-.5h-3zM1 3.004v8h12v-8H1z",
			fill: color
		}));
	});
	VideoIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2.5 10a.5.5 0 100-1 .5.5 0 000 1z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M0 4a2 2 0 012-2h6a2 2 0 012 2v.5l3.189-2.391A.5.5 0 0114 2.5v9a.5.5 0 01-.804.397L10 9.5v.5a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm9 0v1.5a.5.5 0 00.8.4L13 3.5v7L9.8 8.1a.5.5 0 00-.8.4V10a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1z",
			fill: color
		}));
	});
	SpeakerIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 4.5v5a.5.5 0 00.5.5H4l3.17 2.775a.5.5 0 00.83-.377V1.602a.5.5 0 00-.83-.376L4 4H1.5a.5.5 0 00-.5.5zM4 9V5H2v4h2zm.998.545A.504.504 0 005 9.5v-5c0-.015 0-.03-.002-.044L7 2.704v8.592L4.998 9.545z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M10.15 1.752a.5.5 0 00-.3.954 4.502 4.502 0 010 8.588.5.5 0 00.3.954 5.502 5.502 0 000-10.496z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M10.25 3.969a.5.5 0 00-.5.865 2.499 2.499 0 010 4.332.5.5 0 10.5.866 3.499 3.499 0 000-6.063z",
			fill: color
		}));
	});
	PlayIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M12.813 7.425l-9.05 5.603A.5.5 0 013 12.603V1.398a.5.5 0 01.763-.425l9.05 5.602a.5.5 0 010 .85z",
			fill: color
		}));
	});
	PlayBackIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.24 12.035L3.697 7.427A.494.494 0 013.5 7.2v4.05a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0V6.8a.494.494 0 01.198-.227l7.541-4.608A.5.5 0 0112 2.39v9.217a.5.5 0 01-.76.427z",
			fill: color
		}));
	});
	PlayNextIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2.76 12.035l7.542-4.608A.495.495 0 0010.5 7.2v4.05a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0V6.8a.495.495 0 00-.198-.227L2.76 1.965A.5.5 0 002 2.39v9.217a.5.5 0 00.76.427z",
			fill: color
		}));
	});
	RewindIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M9 2.42v2.315l4.228-2.736a.5.5 0 01.772.42v9.162a.5.5 0 01-.772.42L9 9.263v2.317a.5.5 0 01-.772.42L1.5 7.647v3.603a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0v3.603L8.228 2A.5.5 0 019 2.42z",
			fill: color
		}));
	});
	FastForwardIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5 2.42v2.315L.772 1.999a.5.5 0 00-.772.42v9.162a.5.5 0 00.772.42L5 9.263v2.317a.5.5 0 00.772.42L12.5 7.647v3.603a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0v3.603L5.772 2A.5.5 0 005 2.42z",
			fill: color
		}));
	});
	StopAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z",
			fill: color
		}));
	});
	SunIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", {
			clipPath: "url(#prefix__clip0_1107_3492)",
			fill: color
		}, /* @__PURE__ */ import_react$2.createElement("path", { d: "M7.5.5a.5.5 0 00-1 0V2a.5.5 0 001 0V.5z" }), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 10a3 3 0 100-6 3 3 0 000 6zm0-1a2 2 0 100-4 2 2 0 000 4z"
		}), /* @__PURE__ */ import_react$2.createElement("path", { d: "M7 11.5a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V12a.5.5 0 01.5-.5zM11.5 7a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H12a.5.5 0 01-.5-.5zM.5 6.5a.5.5 0 000 1H2a.5.5 0 000-1H.5zM3.818 10.182a.5.5 0 010 .707l-1.06 1.06a.5.5 0 11-.708-.706l1.06-1.06a.5.5 0 01.708 0zM11.95 2.757a.5.5 0 10-.707-.707l-1.061 1.061a.5.5 0 10.707.707l1.06-1.06zM10.182 10.182a.5.5 0 01.707 0l1.06 1.06a.5.5 0 11-.706.708l-1.061-1.06a.5.5 0 010-.708zM2.757 2.05a.5.5 0 10-.707.707l1.06 1.061a.5.5 0 00.708-.707l-1.06-1.06z" })), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_1107_3492" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	MoonIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", { clipPath: "url(#prefix__clip0_1107_3493)" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7.78.044A6.968 6.968 0 003.5.94a6.999 6.999 0 107 12.122 6.97 6.97 0 002.87-3.16c.098-.213-.144-.417-.359-.322a4.976 4.976 0 01-2.01.42A5 5 0 018.542.645C8.747.53 8.73.214 8.5.164a7.042 7.042 0 00-.72-.12zm-1.268.975a6 6 0 004.98 9.96 6 6 0 11-4.98-9.96z",
			fill: color
		})), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_1107_3493" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	StopAltHollowIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2.2 2.204v9.6h9.6v-9.6H2.2zm-.7-1.2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11z",
			fill: color
		}));
	});
	PlayHollowIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4.2 10.88L10.668 7 4.2 3.12v7.76zM3 2.414v9.174a.8.8 0 001.212.686l7.645-4.587a.8.8 0 000-1.372L4.212 1.727A.8.8 0 003 2.413z",
			fill: color
		}));
	});
	PlayAllHollowIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M5.2 10.88L11.668 7 5.2 3.12v7.76zM4 2.414v9.174a.8.8 0 001.212.686l7.645-4.587a.8.8 0 000-1.372L5.212 1.727A.8.8 0 004 2.413zM1.5 1.6a.6.6 0 01.6.6v9.6a.6.6 0 11-1.2 0V2.2a.6.6 0 01.6-.6z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M.963 1.932a.6.6 0 01.805-.268l1 .5a.6.6 0 01-.536 1.073l-1-.5a.6.6 0 01-.269-.805zM3.037 11.132a.6.6 0 01-.269.805l-1 .5a.6.6 0 01-.536-1.073l1-.5a.6.6 0 01.805.268z",
			fill: color
		}));
	});
	StopIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4.5 4a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
			fill: color
		}));
	});
	SideBySideIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5v-10h5v10H2z",
			fill: color
		}));
	});
	StackedIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.5 1.004a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11zm-10.5 1h10v5H2v-5z",
			fill: color
		}));
	});
	BookIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13 2a2 2 0 00-2-2H1.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5H11a2 2 0 002-2V2zM3 13h8a1 1 0 001-1V2a1 1 0 00-1-1H7v6.004a.5.5 0 01-.856.352l-.002-.002L5.5 6.71l-.645.647A.5.5 0 014 7.009V1H3v12zM5 1v4.793l.146-.146a.5.5 0 01.743.039l.111.11V1H5z",
			fill: color
		}));
	});
	DocumentIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
			fill: color
		}));
	});
	CopyIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11.746.07A.5.5 0 0011.5.003h-6a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2.5h4.5a.5.5 0 00.5-.5v-8a.498.498 0 00-.15-.357L11.857.154a.506.506 0 00-.11-.085zM9 10.003h4v-7h-1.5a.5.5 0 01-.5-.5v-1.5H6v2h.5a.5.5 0 01.357.15L8.85 5.147c.093.09.15.217.15.357v4.5zm-8-6v9h7v-7H6.5a.5.5 0 01-.5-.5v-1.5H1z",
			fill: color
		}));
	});
	FilesIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M6.5 11a.5.5 0 010 1h-4a.5.5 0 010-1h4zM4.5 5a.5.5 0 01.5.5V7h1.5a.5.5 0 010 1H5v1.5a.5.5 0 01-1 0V8H2.5a.5.5 0 010-1H4V5.5a.5.5 0 01.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11.5.004a.5.5 0 01.357.15l1.993 1.993a.5.5 0 01.15.358v8a.5.5 0 01-.5.5H9v2.499a.5.5 0 01-.5.5h-8a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5H5v-2.5a.5.5 0 01.5-.5h6zm-10.5 13h7v-7l-2-2H1v9zm5-10h.5a.5.5 0 01.357.15L8.85 5.146a.5.5 0 01.15.358v4.5h4v-7l-2-2H6v2z",
			fill: color
		}));
	});
	CategoryIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3 1.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM2 3.504a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 5.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-7zM2 12V6h10v6H2z",
			fill: color
		}));
	});
	FolderIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z",
			fill: color
		}));
	});
	PrintIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4.5 8.004a.5.5 0 100 1h5a.5.5 0 000-1h-5zM4.5 10.004a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2 1.504a.5.5 0 01.5-.5h8a.498.498 0 01.357.15l.993.993c.093.09.15.217.15.357v1.5h1.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H12v2.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5H2v-2.5zm11 7.5h-1v-2.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v2.5H1v-4h12v4zm-2-6v1H3v-2h7v.5a.5.5 0 00.5.5h.5zm-8 9h8v-5H3v5z",
			fill: color
		}));
	});
	GraphLineIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5.146 6.15a.5.5 0 01.708 0L7 7.297 9.146 5.15a.5.5 0 01.708 0l1 1a.5.5 0 01-.708.707L9.5 6.211 7.354 8.357a.5.5 0 01-.708 0L5.5 7.211 3.854 8.857a.5.5 0 11-.708-.707l2-2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1.5 1.004a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11zm.5 1v10h10v-10H2z",
			fill: color
		}));
	});
	CalendarIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.5 0a.5.5 0 01.5.5V1h6V.5a.5.5 0 011 0V1h1.5a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H3V.5a.5.5 0 01.5-.5zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 4v2.3h3V4H9zM5.5 6.3h3V4h-3v2.3z",
			fill: color
		}));
	});
	GraphBarIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M12 2.5a.5.5 0 00-1 0v10a.5.5 0 001 0v-10zM9 4.5a.5.5 0 00-1 0v8a.5.5 0 001 0v-8zM5.5 7a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zM3 10.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2z",
			fill: color
		}));
	});
	AlignLeftIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M13 2a.5.5 0 010 1H1a.5.5 0 010-1h12zM10 5a.5.5 0 010 1H1a.5.5 0 010-1h9zM11.5 8.5A.5.5 0 0011 8H1a.5.5 0 000 1h10a.5.5 0 00.5-.5zM7.5 11a.5.5 0 010 1H1a.5.5 0 010-1h6.5z",
			fill: color
		}));
	});
	AlignRightIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM4 5a.5.5 0 000 1h9a.5.5 0 000-1H4zM2.5 8.5A.5.5 0 013 8h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1H13a.5.5 0 000-1H6.5z",
			fill: color
		}));
	});
	FilterIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM3 5a.5.5 0 000 1h8a.5.5 0 000-1H3zM4.5 8.5A.5.5 0 015 8h4a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
			fill: color
		}));
	});
	DocChartIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 6.3h3V4H9v2.3zm-3.5 0h3V4h-3v2.3z",
			fill: color
		}));
	});
	DocListIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.5 6.5A.5.5 0 014 6h6a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM4 9a.5.5 0 000 1h6a.5.5 0 000-1H4z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v8h10V4H2z",
			fill: color
		}));
	});
	DragIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M13 4a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 9.5A.5.5 0 0013 9H1a.5.5 0 000 1h12a.5.5 0 00.5-.5z",
			fill: color
		}));
	});
	MenuIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M13 3.5a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 10a.5.5 0 00-.5-.5H1a.5.5 0 000 1h12a.5.5 0 00.5-.5zM13 6.5a.5.5 0 010 1H1a.5.5 0 010-1h12z",
			fill: color
		}));
	});
	MarkupIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M8.982 1.632a.5.5 0 00-.964-.263l-3 11a.5.5 0 10.964.263l3-11zM3.32 3.616a.5.5 0 01.064.704L1.151 7l2.233 2.68a.5.5 0 11-.768.64l-2.5-3a.5.5 0 010-.64l2.5-3a.5.5 0 01.704-.064zM10.68 3.616a.5.5 0 00-.064.704L12.849 7l-2.233 2.68a.5.5 0 00.768.64l2.5-3a.5.5 0 000-.64l-2.5-3a.5.5 0 00-.704-.064z",
			fill: color
		}));
	});
	BoldIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3 2v1.5h1v7H3V12h5a3 3 0 001.791-5.407A2.75 2.75 0 008 2.011V2H3zm5 5.5H5.5v3H8a1.5 1.5 0 100-3zm-.25-4H5.5V6h2.25a1.25 1.25 0 100-2.5z",
			fill: color
		}));
	});
	ItalicIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2z",
			fill: color
		}));
	});
	PaperClipIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M10.553 2.268a1.5 1.5 0 00-2.12 0L2.774 7.925a2.5 2.5 0 003.536 3.535l3.535-3.535a.5.5 0 11.707.707l-3.535 3.536-.002.002a3.5 3.5 0 01-4.959-4.941l.011-.011L7.725 1.56l.007-.008a2.5 2.5 0 013.53 3.541l-.002.002-5.656 5.657-.003.003a1.5 1.5 0 01-2.119-2.124l3.536-3.536a.5.5 0 11.707.707L4.189 9.34a.5.5 0 00.707.707l5.657-5.657a1.5 1.5 0 000-2.121z",
			fill: color
		}));
	});
	ListOrderedIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5 2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2.5 2H1v1h1v3h1V2.5a.5.5 0 00-.5-.5zM3 8.5v1a.5.5 0 01-1 0V9h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5zM2 10.5a.5.5 0 00-1 0V12h2v-1H2v-.5z",
			fill: color
		}));
	});
	ListUnorderedIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2.75 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5.5 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2 12.25a.75.75 0 100-1.5.75.75 0 000 1.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM2 7.75a.75.75 0 100-1.5.75.75 0 000 1.5z",
			fill: color
		}));
	});
	ChecklistIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2a.5.5 0 01.5-.5h2zM2 12h1v-1H2v1z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M12.5 11a.5.5 0 110 1h-7a.5.5 0 010-1h7zM3.146 5.646a.5.5 0 11.708.707L3.207 7l.647.646a.5.5 0 11-.708.707L2.5 7.707l-.646.646a.5.5 0 01-.708-.707L1.793 7l-.647-.647a.5.5 0 11.708-.707l.646.647.646-.647zM12.5 6.5a.5.5 0 010 1h-7a.5.5 0 010-1h7zM4.146 1.146a.5.5 0 11.708.707l-2 2-.079.065a.498.498 0 01-.629-.065l-1-1a.5.5 0 11.708-.707l.646.647 1.646-1.647zM12.5 2a.5.5 0 010 1h-7a.5.5 0 010-1h7z",
			fill: color
		}));
	});
	ParagraphIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M6 7a3 3 0 110-6h5.5a.5.5 0 010 1H10v10.5a.5.5 0 01-1 0V2H7v10.5a.5.5 0 01-1 0V7z",
			fill: color
		}));
	});
	MarkdownIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2 4.5h1.5L5 6.375 6.5 4.5H8v5H6.5V7L5 8.875 3.5 7v2.5H2v-5zM9.75 4.5h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M.5 2a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5zM1 3v8h12V3H1z",
			fill: color
		}));
	});
	RepoIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 5a.5.5 0 100-1 .5.5 0 000 1zM5 6.5a.5.5 0 11-1 0 .5.5 0 011 0z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11 0a2 2 0 012 2v10a2 2 0 01-2 2H1.5a.5.5 0 01-.5-.5V.5a.5.5 0 01.5-.5H11zm0 1H3v12h8a1 1 0 001-1V2a1 1 0 00-1-1z",
			fill: color
		}));
	});
	CommitIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.031 7.5a4 4 0 007.938 0H13.5a.5.5 0 000-1h-2.53a4 4 0 00-7.94 0H.501a.5.5 0 000 1h2.531zM7 10a3 3 0 100-6 3 3 0 000 6z",
			fill: color
		}));
	});
	BranchIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6 2.5a1.5 1.5 0 01-1 1.415v4.053C5.554 7.4 6.367 7 7.5 7c.89 0 1.453-.252 1.812-.557.218-.184.374-.4.482-.62a1.5 1.5 0 111.026.143c-.155.423-.425.87-.86 1.24C9.394 7.685 8.59 8 7.5 8c-1.037 0-1.637.42-1.994.917a2.81 2.81 0 00-.472 1.18A1.5 1.5 0 114 10.086v-6.17A1.5 1.5 0 116 2.5zm-2 9a.5.5 0 111 0 .5.5 0 01-1 0zm1-9a.5.5 0 11-1 0 .5.5 0 011 0zm6 2a.5.5 0 11-1 0 .5.5 0 011 0z",
			fill: color
		}));
	});
	PullRequestIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M8.354 1.354L7.707 2H8.5A2.5 2.5 0 0111 4.5v5.585a1.5 1.5 0 11-1 0V4.5A1.5 1.5 0 008.5 3h-.793l.647.646a.5.5 0 11-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708zM11 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM4 3.915a1.5 1.5 0 10-1 0v6.17a1.5 1.5 0 101 0v-6.17zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zm0-8a.5.5 0 100-1 .5.5 0 000 1z",
			fill: color
		}));
	});
	MergeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4.108 3.872A1.5 1.5 0 103 3.915v6.17a1.5 1.5 0 101 0V6.41c.263.41.573.77.926 1.083 1.108.98 2.579 1.433 4.156 1.5A1.5 1.5 0 109.09 7.99c-1.405-.065-2.62-.468-3.5-1.248-.723-.64-1.262-1.569-1.481-2.871zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zM4 2.5a.5.5 0 11-1 0 .5.5 0 011 0zm7 6a.5.5 0 11-1 0 .5.5 0 011 0z",
			fill: color
		}));
	});
	AppleIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.03 8.103a3.044 3.044 0 01-.202-1.744 2.697 2.697 0 011.4-1.935c-.749-1.18-1.967-1.363-2.35-1.403-.835-.086-2.01.56-2.648.57h-.016c-.639-.01-1.814-.656-2.649-.57-.415.044-1.741.319-2.541 1.593-.281.447-.498 1.018-.586 1.744a6.361 6.361 0 00-.044.85c.005.305.028.604.07.895.09.62.259 1.207.477 1.744.242.595.543 1.13.865 1.585.712 1.008 1.517 1.59 1.971 1.6.934.021 1.746-.61 2.416-.594.006.002.014.003.02.002h.017c.007 0 .014 0 .021-.002.67-.017 1.481.615 2.416.595.453-.011 1.26-.593 1.971-1.6a7.95 7.95 0 00.97-1.856c-.697-.217-1.27-.762-1.578-1.474zm-2.168-5.97c.717-.848.69-2.07.624-2.125-.065-.055-1.25.163-1.985.984-.735.82-.69 2.071-.624 2.125.064.055 1.268-.135 1.985-.984z",
			fill: color
		}));
	});
	LinuxIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 0a3 3 0 013 3v1.24c.129.132.25.27.362.415.113.111.283.247.515.433l.194.155c.325.261.711.582 1.095.966.765.765 1.545 1.806 1.823 3.186a.501.501 0 01-.338.581 3.395 3.395 0 01-1.338.134 2.886 2.886 0 01-1.049-.304 5.535 5.535 0 01-.17.519 2 2 0 11-2.892 2.55A5.507 5.507 0 017 13c-.439 0-.838-.044-1.201-.125a2 2 0 11-2.892-2.55 5.553 5.553 0 01-.171-.519c-.349.182-.714.27-1.05.304A3.395 3.395 0 01.35 9.977a.497.497 0 01-.338-.582c.278-1.38 1.058-2.42 1.823-3.186.384-.384.77-.705 1.095-.966l.194-.155c.232-.186.402-.322.515-.433.112-.145.233-.283.362-.414V3a3 3 0 013-3zm1.003 11.895a2 2 0 012.141-1.89c.246-.618.356-1.322.356-2.005 0-.514-.101-1.07-.301-1.599l-.027-.017a6.387 6.387 0 00-.857-.42 6.715 6.715 0 00-1.013-.315l-.852.638a.75.75 0 01-.9 0l-.852-.638a6.716 6.716 0 00-1.693.634 4.342 4.342 0 00-.177.101l-.027.017A4.6 4.6 0 003.501 8c0 .683.109 1.387.355 2.005a2 2 0 012.142 1.89c.295.067.627.105 1.002.105s.707-.038 1.003-.105zM5 12a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zM6.1 4.3a1.5 1.5 0 011.8 0l.267.2L7 5.375 5.833 4.5l.267-.2zM8.5 2a.5.5 0 01.5.5V3a.5.5 0 01-1 0v-.5a.5.5 0 01.5-.5zM6 2.5a.5.5 0 00-1 0V3a.5.5 0 001 0v-.5z",
			fill: color
		}));
	});
	UbuntuIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", {
			clipPath: "url(#prefix__clip0_1107_3497)",
			fill: color
		}, /* @__PURE__ */ import_react$2.createElement("path", { d: "M12.261 2.067c0 1.142-.89 2.068-1.988 2.068-1.099 0-1.99-.926-1.99-2.068C8.283.926 9.174 0 10.273 0c1.098 0 1.989.926 1.989 2.067zM3.978 6.6c0 1.142-.89 2.068-1.989 2.068C.891 8.668 0 7.742 0 6.601c0-1.142.89-2.068 1.989-2.068 1.099 0 1.989.926 1.989 2.068zM6.475 11.921A4.761 4.761 0 014.539 11a4.993 4.993 0 01-1.367-1.696 2.765 2.765 0 01-1.701.217 6.725 6.725 0 001.844 2.635 6.379 6.379 0 004.23 1.577 3.033 3.033 0 01-.582-1.728 4.767 4.767 0 01-.488-.083zM11.813 11.933c0 1.141-.89 2.067-1.989 2.067-1.098 0-1.989-.926-1.989-2.067 0-1.142.891-2.068 1.99-2.068 1.098 0 1.989.926 1.989 2.068zM12.592 11.173a6.926 6.926 0 001.402-3.913 6.964 6.964 0 00-1.076-4.023A2.952 2.952 0 0111.8 4.6c.398.78.592 1.656.564 2.539a5.213 5.213 0 01-.724 2.495c.466.396.8.935.952 1.54zM1.987 3.631c-.05 0-.101.002-.151.004C3.073 1.365 5.504.024 8.005.23a3.07 3.07 0 00-.603 1.676 4.707 4.707 0 00-2.206.596 4.919 4.919 0 00-1.7 1.576 2.79 2.79 0 00-1.509-.447z" })), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_1107_3497" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	WindowsIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M6.5 1H1v5.5h5.5V1zM13 1H7.5v5.5H13V1zM7.5 7.5H13V13H7.5V7.5zM6.5 7.5H1V13h5.5V7.5z",
			fill: color
		}));
	});
	ChromeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", { clipPath: "url(#prefix__clip0_1107_3496)" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13.023 3.431a.115.115 0 01-.099.174H7.296A3.408 3.408 0 003.7 6.148a.115.115 0 01-.21.028l-1.97-3.413a.115.115 0 01.01-.129A6.97 6.97 0 017 0a6.995 6.995 0 016.023 3.431zM7 9.615A2.619 2.619 0 014.384 7 2.62 2.62 0 017 4.383 2.619 2.619 0 019.616 7 2.619 2.619 0 017 9.615zm1.034.71a.115.115 0 00-.121-.041 3.4 3.4 0 01-.913.124 3.426 3.426 0 01-3.091-1.973L1.098 3.567a.115.115 0 00-.2.001 7.004 7.004 0 005.058 10.354l.017.001c.04 0 .078-.021.099-.057l1.971-3.414a.115.115 0 00-.009-.128zm1.43-5.954h3.947c.047 0 .09.028.107.072.32.815.481 1.675.481 2.557a6.957 6.957 0 01-2.024 4.923A6.957 6.957 0 017.08 14h-.001a.115.115 0 01-.1-.172L9.794 8.95A3.384 3.384 0 0010.408 7c0-.921-.364-1.785-1.024-2.433a.115.115 0 01.08-.196z",
			fill: color
		})), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_1107_3496" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	StorybookIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2.042.616a.704.704 0 00-.66.729L1.816 12.9c.014.367.306.66.672.677l9.395.422h.032a.704.704 0 00.704-.703V.704c0-.015 0-.03-.002-.044a.704.704 0 00-.746-.659l-.773.049.057 1.615a.105.105 0 01-.17.086l-.52-.41-.617.468a.105.105 0 01-.168-.088L9.746.134 2.042.616zm8.003 4.747c-.247.192-2.092.324-2.092.05.04-1.045-.429-1.091-.689-1.091-.247 0-.662.075-.662.634 0 .57.607.893 1.32 1.27 1.014.538 2.24 1.188 2.24 2.823 0 1.568-1.273 2.433-2.898 2.433-1.676 0-3.141-.678-2.976-3.03.065-.275 2.197-.21 2.197 0-.026.971.195 1.256.753 1.256.43 0 .624-.236.624-.634 0-.602-.633-.958-1.361-1.367-.987-.554-2.148-1.205-2.148-2.7 0-1.494 1.027-2.489 2.86-2.489 1.832 0 2.832.98 2.832 2.845z",
			fill: color
		}));
	});
	AzureDevOpsIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", { clipPath: "url(#prefix__clip0_1107_3503)" }, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M0 5.176l1.31-1.73 4.902-1.994V.014l4.299 3.144-8.78 1.706v4.8L0 9.162V5.176zm14-2.595v8.548l-3.355 2.857-5.425-1.783v1.783L1.73 9.661l8.784 1.047v-7.55L14 2.581z",
			fill: color
		})), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_1107_3503" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	BitbucketIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 1.522a.411.411 0 00-.412.476l1.746 10.597a.56.56 0 00.547.466h8.373a.411.411 0 00.412-.345l1.017-6.248h-3.87L8.35 9.18H5.677l-.724-3.781h7.904L13.412 2A.411.411 0 0013 1.524L1 1.522z",
			fill: color
		}));
	});
	ChromaticIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M0 7a7 7 0 1014 0A7 7 0 000 7zm5.215-3.869a1.967 1.967 0 013.747.834v1.283l-3.346-1.93a2.486 2.486 0 00-.401-.187zm3.484 2.58l-3.346-1.93a1.968 1.968 0 00-2.685.72 1.954 1.954 0 00.09 2.106 2.45 2.45 0 01.362-.254l1.514-.873a.27.27 0 01.268 0l2.1 1.21 1.697-.978zm-.323 4.972L6.86 9.81a.268.268 0 01-.134-.231V7.155l-1.698-.98v3.86a1.968 1.968 0 003.747.835 2.488 2.488 0 01-.4-.187zm.268-.464a1.967 1.967 0 002.685-.719 1.952 1.952 0 00-.09-2.106c-.112.094-.233.18-.361.253L7.53 9.577l1.113.642zm-4.106.257a1.974 1.974 0 01-1.87-.975A1.95 1.95 0 012.47 8.01c.136-.507.461-.93.916-1.193L4.5 6.175v3.86c0 .148.013.295.039.44zM11.329 4.5a1.973 1.973 0 00-1.87-.976c.025.145.039.292.039.44v1.747a.268.268 0 01-.135.232l-2.1 1.211v1.96l3.346-1.931a1.966 1.966 0 00.72-2.683z",
			fill: color
		}));
	});
	ComponentDrivenIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M10.847 2.181L8.867.201a.685.685 0 00-.97 0l-4.81 4.81a.685.685 0 000 .969l2.466 2.465-2.405 2.404a.685.685 0 000 .97l1.98 1.98a.685.685 0 00.97 0l4.81-4.81a.685.685 0 000-.969L8.441 5.555l2.405-2.404a.685.685 0 000-.97z",
			fill: color
		}));
	});
	DiscordIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.852 2.885c-.893-.41-1.85-.712-2.85-.884a.043.043 0 00-.046.021c-.123.22-.26.505-.355.73a10.658 10.658 0 00-3.2 0 7.377 7.377 0 00-.36-.73.045.045 0 00-.046-.021c-1 .172-1.957.474-2.85.884a.04.04 0 00-.019.016C.311 5.612-.186 8.257.058 10.869a.048.048 0 00.018.033 11.608 11.608 0 003.496 1.767.045.045 0 00.049-.016c.27-.368.51-.755.715-1.163a.044.044 0 00-.024-.062 7.661 7.661 0 01-1.092-.52.045.045 0 01-.005-.075c.074-.055.147-.112.217-.17a.043.043 0 01.046-.006c2.29 1.046 4.771 1.046 7.035 0a.043.043 0 01.046.006c.07.057.144.115.218.17a.045.045 0 01-.004.075 7.186 7.186 0 01-1.093.52.045.045 0 00-.024.062c.21.407.45.795.715 1.162.011.016.03.023.05.017a11.57 11.57 0 003.5-1.767.045.045 0 00.019-.032c.292-3.02-.49-5.643-2.07-7.969a.036.036 0 00-.018-.016zM4.678 9.279c-.69 0-1.258-.634-1.258-1.411 0-.778.558-1.411 1.258-1.411.707 0 1.27.639 1.259 1.41 0 .778-.558 1.412-1.259 1.412zm4.652 0c-.69 0-1.258-.634-1.258-1.411 0-.778.557-1.411 1.258-1.411.707 0 1.27.639 1.258 1.41 0 .778-.551 1.412-1.258 1.412z",
			fill: color
		}));
	});
	FacebookIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7.399 14H5.06V7H3.5V4.588l1.56-.001-.002-1.421C5.058 1.197 5.533 0 7.6 0h1.721v2.413H8.246c-.805 0-.844.337-.844.966l-.003 1.208h1.934l-.228 2.412L7.401 7l-.002 7z",
			fill: color
		}));
	});
	FigmaIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M9.2 0H4.803A2.603 2.603 0 003.41 4.802a2.603 2.603 0 000 4.396 2.602 2.602 0 103.998 2.199v-2.51a2.603 2.603 0 103.187-4.085A2.604 2.604 0 009.2 0zM7.407 7a1.793 1.793 0 103.586 0 1.793 1.793 0 00-3.586 0zm-.81 2.603H4.803a1.793 1.793 0 101.794 1.794V9.603zM4.803 4.397h1.794V.81H4.803a1.793 1.793 0 000 3.587zm0 .81a1.793 1.793 0 000 3.586h1.794V5.207H4.803zm4.397-.81H7.407V.81H9.2a1.794 1.794 0 010 3.587z",
			fill: color
		}));
	});
	GDriveIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M6.37 8.768l-2.042 3.537h6.755l2.042-3.537H6.37zm6.177-1.003l-3.505-6.07H4.96l3.504 6.07h4.084zM4.378 2.7L.875 8.77l2.042 3.536L6.42 6.236 4.378 2.7z",
			fill: color
		}));
	});
	GithubIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 0C3.132 0 0 3.132 0 7a6.996 6.996 0 004.786 6.641c.35.062.482-.149.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.823-.079-.2-.42-.822-.717-.988-.246-.132-.596-.455-.01-.464.552-.009.946.508 1.077.717.63 1.06 1.636.762 2.039.578.061-.455.245-.761.446-.936-1.558-.175-3.185-.779-3.185-3.457 0-.76.271-1.39.717-1.88-.07-.176-.314-.893.07-1.856 0 0 .587-.183 1.925.718a6.495 6.495 0 011.75-.236c.595 0 1.19.078 1.75.236 1.34-.91 1.926-.718 1.926-.718.385.963.14 1.68.07 1.855.446.49.717 1.111.717 1.881 0 2.687-1.636 3.282-3.194 3.457.254.218.473.638.473 1.295 0 .936-.009 1.688-.009 1.925 0 .184.131.402.481.332A7.012 7.012 0 0014 7c0-3.868-3.133-7-7-7z",
			fill: color
		}));
	});
	GitlabIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1.068 5.583l1.487-4.557a.256.256 0 01.487 0L4.53 5.583H1.068L7 13.15 4.53 5.583h4.941l-2.47 7.565 5.931-7.565H9.471l1.488-4.557a.256.256 0 01.486 0l1.488 4.557.75 2.3a.508.508 0 01-.185.568L7 13.148v.001H7L.503 8.452a.508.508 0 01-.186-.57l.75-2.299z",
			fill: color
		}));
	});
	GoogleIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M10.925 1.094H7.262c-1.643 0-3.189 1.244-3.189 2.685 0 1.473 1.12 2.661 2.791 2.661.116 0 .23-.002.34-.01a1.49 1.49 0 00-.186.684c0 .41.22.741.498 1.012-.21 0-.413.006-.635.006-2.034 0-3.6 1.296-3.6 2.64 0 1.323 1.717 2.15 3.75 2.15 2.32 0 3.6-1.315 3.6-2.639 0-1.06-.313-1.696-1.28-2.38-.331-.235-.965-.805-.965-1.14 0-.392.112-.586.703-1.047.606-.474 1.035-1.14 1.035-1.914 0-.92-.41-1.819-1.18-2.115h1.161l.82-.593zm-1.335 8.96c.03.124.045.25.045.378 0 1.07-.688 1.905-2.665 1.905-1.406 0-2.421-.89-2.421-1.96 0-1.047 1.259-1.92 2.665-1.904.328.004.634.057.911.146.764.531 1.311.832 1.465 1.436zM7.34 6.068c-.944-.028-1.841-1.055-2.005-2.295-.162-1.24.47-2.188 1.415-2.16.943.029 1.84 1.023 2.003 2.262.163 1.24-.47 2.222-1.414 2.193z",
			fill: color
		}));
	});
	GraphqlIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7.873 11.608a1.167 1.167 0 00-1.707-.027L3.46 10.018l.01-.04h7.072l.022.076-2.69 1.554zM6.166 2.42l.031.03-3.535 6.124a1.265 1.265 0 00-.043-.012V5.438a1.166 1.166 0 00.84-1.456L6.167 2.42zm4.387 1.562a1.165 1.165 0 00.84 1.456v3.124l-.043.012-3.536-6.123a1.2 1.2 0 00.033-.032l2.706 1.563zM3.473 9.42a1.168 1.168 0 00-.327-.568L6.68 2.73a1.17 1.17 0 00.652 0l3.536 6.123a1.169 1.169 0 00-.327.567H3.473zm8.79-.736a1.169 1.169 0 00-.311-.124V5.44a1.17 1.17 0 10-1.122-1.942L8.13 1.938a1.168 1.168 0 00-1.122-1.5 1.17 1.17 0 00-1.121 1.5l-2.702 1.56a1.168 1.168 0 00-1.86.22 1.17 1.17 0 00.739 1.722v3.12a1.168 1.168 0 00-.74 1.721 1.17 1.17 0 001.861.221l2.701 1.56a1.169 1.169 0 102.233-.035l2.687-1.552a1.168 1.168 0 101.457-1.791z",
			fill: color
		}));
	});
	MediumIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M0 0v14h14V0H0zm11.63 3.317l-.75.72a.22.22 0 00-.083.212v-.001 5.289a.22.22 0 00.083.21l.733.72v.159H7.925v-.158l.76-.738c.074-.074.074-.096.074-.21V5.244l-2.112 5.364h-.285l-2.46-5.364V8.84a.494.494 0 00.136.413h.001l.988 1.198v.158H2.226v-.158l.988-1.198a.477.477 0 00.126-.416v.003-4.157a.363.363 0 00-.118-.307l-.878-1.058v-.158h2.727l2.107 4.622L9.031 3.16h2.6v.158z",
			fill: color
		}));
	});
	ReduxIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4.06 9.689c.016.49.423.88.912.88h.032a.911.911 0 00.88-.945.916.916 0 00-.912-.88h-.033c-.033 0-.08 0-.113.016-.669-1.108-.946-2.314-.848-3.618.065-.978.391-1.825.961-2.526.473-.603 1.386-.896 2.005-.913 1.728-.032 2.461 2.119 2.51 2.983.212.049.57.163.815.244C10.073 2.29 8.444.92 6.88.92c-1.467 0-2.82 1.06-3.357 2.625-.75 2.086-.261 4.09.651 5.671a.74.74 0 00-.114.473zm8.279-2.298c-1.239-1.45-3.064-2.249-5.15-2.249h-.261a.896.896 0 00-.798-.489h-.033A.912.912 0 006.13 6.48h.031a.919.919 0 00.8-.554h.293c1.239 0 2.412.358 3.472 1.059.814.538 1.401 1.238 1.727 2.086.277.684.261 1.353-.033 1.923-.456.864-1.222 1.337-2.232 1.337a4.16 4.16 0 01-1.597-.343 9.58 9.58 0 01-.734.587c.7.326 1.418.505 2.102.505 1.565 0 2.722-.863 3.162-1.727.473-.946.44-2.575-.782-3.961zm-7.433 5.51a4.005 4.005 0 01-.977.113c-1.206 0-2.298-.505-2.836-1.32C.376 10.603.13 8.289 2.494 6.577c.05.261.147.62.212.832-.31.228-.798.685-1.108 1.303-.44.864-.391 1.729.13 2.527.359.537.93.864 1.663.962.896.114 1.793-.05 2.657-.505 1.271-.669 2.119-1.467 2.672-2.56a.944.944 0 01-.26-.603.913.913 0 01.88-.945h.033a.915.915 0 01.098 1.825c-.897 1.842-2.478 3.08-4.565 3.488z",
			fill: color
		}));
	});
	TwitterIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 2.547a5.632 5.632 0 01-1.65.464 2.946 2.946 0 001.263-1.63 5.67 5.67 0 01-1.823.715 2.837 2.837 0 00-2.097-.93c-1.586 0-2.872 1.319-2.872 2.946 0 .23.025.456.074.67C4.508 4.66 2.392 3.488.975 1.706c-.247.435-.389.941-.389 1.481 0 1.022.507 1.923 1.278 2.452a2.806 2.806 0 01-1.3-.368l-.001.037c0 1.427.99 2.617 2.303 2.888a2.82 2.82 0 01-1.297.05c.366 1.17 1.427 2.022 2.683 2.045A5.671 5.671 0 010 11.51a7.985 7.985 0 004.403 1.323c5.283 0 8.172-4.488 8.172-8.38 0-.128-.003-.255-.009-.38A5.926 5.926 0 0014 2.546z",
			fill: color
		}));
	});
	YoutubeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13.99 8.172c.005-.281.007-.672.007-1.172 0-.5-.002-.89-.007-1.172a14.952 14.952 0 00-.066-1.066 9.638 9.638 0 00-.169-1.153c-.083-.38-.264-.7-.542-.96a1.667 1.667 0 00-.972-.454C11.084 2.065 9.337 2 6.999 2s-4.085.065-5.241.195a1.65 1.65 0 00-.969.453c-.276.26-.455.58-.539.961a8.648 8.648 0 00-.176 1.153c-.039.43-.061.785-.066 1.066C.002 6.11 0 6.5 0 7c0 .5.002.89.008 1.172.005.281.027.637.066 1.067.04.43.095.813.168 1.152.084.38.265.7.543.96.279.261.603.412.973.453 1.156.13 2.902.196 5.24.196 2.34 0 4.087-.065 5.243-.196a1.65 1.65 0 00.967-.453c.276-.26.456-.58.54-.96.077-.339.136-.722.175-1.152.04-.43.062-.786.067-1.067zM9.762 6.578A.45.45 0 019.997 7a.45.45 0 01-.235.422l-3.998 2.5a.442.442 0 01-.266.078.538.538 0 01-.242-.063.465.465 0 01-.258-.437v-5c0-.197.086-.343.258-.437a.471.471 0 01.508.016l3.998 2.5z",
			fill: color
		}));
	});
	VSCodeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M10.243.04a.87.87 0 01.38.087l2.881 1.386a.874.874 0 01.496.79V11.713a.875.875 0 01-.496.775l-2.882 1.386a.872.872 0 01-.994-.17L4.11 8.674l-2.404 1.823a.583.583 0 01-.744-.034l-.771-.7a.583.583 0 010-.862L2.274 7 .19 5.1a.583.583 0 010-.862l.772-.701a.583.583 0 01.744-.033L4.11 5.327 9.628.296a.871.871 0 01.615-.255zm.259 3.784L6.315 7l4.187 3.176V3.824z",
			fill: color
		}));
	});
	LinkedinIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11.667 13H2.333A1.333 1.333 0 011 11.667V2.333C1 1.597 1.597 1 2.333 1h9.334C12.403 1 13 1.597 13 2.333v9.334c0 .736-.597 1.333-1.333 1.333zm-2.114-1.667h1.78V7.675c0-1.548-.877-2.296-2.102-2.296-1.226 0-1.742.955-1.742.955v-.778H5.773v5.777h1.716V8.3c0-.812.374-1.296 1.09-1.296.658 0 .974.465.974 1.296v3.033zm-6.886-7.6c0 .589.474 1.066 1.058 1.066.585 0 1.058-.477 1.058-1.066 0-.589-.473-1.066-1.058-1.066-.584 0-1.058.477-1.058 1.066zm1.962 7.6h-1.79V5.556h1.79v5.777z",
			fill: color
		}));
	});
	XIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.02.446h2.137L8.49 5.816l5.51 7.28H9.67L6.298 8.683l-3.88 4.413H.282l5.004-5.735L0 .446h4.442l3.064 4.048L11.02.446zm-.759 11.357h1.18L3.796 1.655H2.502l7.759 10.148z",
			fill: color
		}));
	});
	BrowserIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-8h12v8H1zm1-9.5a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0z",
			fill: color
		}));
	});
	TabletIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.5.004a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5h-7zm0 1h7a.5.5 0 01.5.5v9.5H3v-9.5a.5.5 0 01.5-.5zm2.5 11a.5.5 0 000 1h2a.5.5 0 000-1H6z",
			fill: color
		}));
	});
	MobileIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3 1.504a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-11zm1 10.5v-10h6v10H4z",
			fill: color
		}));
	});
	WatchIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4 .504a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm5.5 2.5h-5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zm-5-1a1.5 1.5 0 00-1.5 1.5v7a1.5 1.5 0 001.5 1.5h5a1.5 1.5 0 001.5-1.5v-7a1.5 1.5 0 00-1.5-1.5h-5zm2.5 2a.5.5 0 01.5.5v2h1a.5.5 0 110 1H7a.5.5 0 01-.5-.5v-2.5a.5.5 0 01.5-.5zm-2.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
			fill: color
		}));
	});
	SidebarIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5zM3 6.004a.5.5 0 100 1h1a.5.5 0 000-1H3zM2.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h3v10H2zm4-10h6v10H6v-10z",
			fill: color
		}));
	});
	SidebarAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M9.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM10 6.004a.5.5 0 100 1h1a.5.5 0 000-1h-1zM9.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h6v10H2zm7-10h3v10H9v-10z",
			fill: color
		}));
	});
	SidebarAltToggleIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.5 4.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM11 6.004a.5.5 0 010 1h-1a.5.5 0 010-1h1zM11.5 8.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm7.5-1h3v-10H9v10zm-1 0H2v-10h6v4.5H5.207l.65-.65a.5.5 0 10-.707-.708L3.646 6.65a.5.5 0 000 .707l1.497 1.497a.5.5 0 10.707-.708l-.643-.642H8v4.5z",
			fill: color
		}));
	});
	SidebarToggleIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5zM2 6.004a.5.5 0 100 1h1a.5.5 0 000-1H2zM1.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-10h3v10H1zm4 0v-4.5h2.793l-.643.642a.5.5 0 10.707.708l1.497-1.497a.5.5 0 000-.707L7.85 5.146a.5.5 0 10-.707.708l.65.65H5v-4.5h6v10H5z",
			fill: color
		}));
	});
	BottomBarIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM6.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM9 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 6.5v-6h10v6H2zm10 1v3H2v-3h10z",
			fill: color
		}));
	});
	BottomBarToggleIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM6 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM9.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 12.504v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5zm1-.5v-3h10v3H2zm4.5-4H2v-6h10v6H7.5V5.21l.646.646a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0l-1.5 1.5a.5.5 0 10.708.707l.646-.646v2.793z",
			fill: color
		}));
	});
	CPUIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M5 5.504a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3zm1 2.5v-2h2v2H6z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M5.5.004a.5.5 0 01.5.5v1.5h2v-1.5a.5.5 0 011 0v1.5h2.5a.5.5 0 01.5.5v2.5h1.5a.5.5 0 010 1H12v2h1.5a.5.5 0 010 1H12v2.5a.5.5 0 01-.5.5H9v1.5a.5.5 0 01-1 0v-1.5H6v1.5a.5.5 0 01-1 0v-1.5H2.5a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 010-1H2v-2H.5a.5.5 0 010-1H2v-2.5a.5.5 0 01.5-.5H5v-1.5a.5.5 0 01.5-.5zm5.5 3H3v8h8v-8z",
			fill: color
		}));
	});
	DatabaseIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12 3c0-1.105-2.239-2-5-2s-5 .895-5 2v8c0 .426.26.752.544.977.29.228.68.413 1.116.558.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.436-.145.825-.33 1.116-.558.285-.225.544-.551.544-.977V3zm-1.03 0a.787.787 0 00-.05-.052c-.13-.123-.373-.28-.756-.434C9.404 2.21 8.286 2 7 2c-1.286 0-2.404.21-3.164.514-.383.153-.625.31-.756.434A.756.756 0 003.03 3a.756.756 0 00.05.052c.13.123.373.28.756.434C4.596 3.79 5.714 4 7 4c1.286 0 2.404-.21 3.164-.514.383-.153.625-.31.756-.434A.787.787 0 0010.97 3zM11 5.75V4.2c-.912.486-2.364.8-4 .8-1.636 0-3.088-.314-4-.8v1.55l.002.008a.147.147 0 00.016.033.618.618 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.62.62 0 00.146-.15.149.149 0 00.015-.033A.03.03 0 0011 5.75zM3 7.013c.2.103.423.193.66.272.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.237-.079.46-.17.66-.272V8.5l-.002.008a.149.149 0 01-.015.033.62.62 0 01-.146.15c-.165.13-.435.27-.813.395-.751.25-1.82.414-3.024.414s-2.273-.163-3.024-.414c-.378-.126-.648-.265-.813-.395a.618.618 0 01-.145-.15.147.147 0 01-.016-.033A.027.027 0 013 8.5V7.013zm0 2.75V11l.002.008a.147.147 0 00.016.033.617.617 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 00.146-.15.148.148 0 00.015-.033L11 11V9.763c-.2.103-.423.193-.66.272-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465A4.767 4.767 0 013 9.763z",
			fill: color
		}));
	});
	MemoryIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5 3a.5.5 0 00-1 0v3a.5.5 0 001 0V3zM7 2.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V3a.5.5 0 01.5-.5zM10 4.504a.5.5 0 10-1 0V6a.5.5 0 001 0V4.504z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12 3.54l-.001-.002a.499.499 0 00-.145-.388l-3-3a.499.499 0 00-.388-.145L8.464.004H2.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V3.54zM3 1.004h5.293L11 3.71v5.293H3v-8zm0 9v3h8v-3H3z",
			fill: color
		}));
	});
	StructureIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M8.164 3.446a1.5 1.5 0 10-2.328 0L1.81 10.032A1.503 1.503 0 000 11.5a1.5 1.5 0 002.915.5h8.17a1.5 1.5 0 101.104-1.968L8.164 3.446zm-1.475.522a1.506 1.506 0 00.622 0l4.025 6.586a1.495 1.495 0 00-.25.446H2.914a1.497 1.497 0 00-.25-.446l4.024-6.586z",
			fill: color
		}));
	});
	BoxIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7.21.046l6.485 2.994A.5.5 0 0114 3.51v6.977a.495.495 0 01-.23.432.481.481 0 01-.071.038L7.23 13.944a.499.499 0 01-.46 0L.3 10.958a.498.498 0 01-.3-.47V3.511a.497.497 0 01.308-.473L6.78.051a.499.499 0 01.43-.005zM1 4.282v5.898l5.5 2.538V6.82L1 4.282zm6.5 8.436L13 10.18V4.282L7.5 6.82v5.898zM12.307 3.5L7 5.95 1.693 3.5 7 1.05l5.307 2.45z",
			fill: color
		}));
	});
	PowerIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.5.5a.5.5 0 00-1 0v6a.5.5 0 001 0v-6z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4.273 2.808a.5.5 0 00-.546-.837 6 6 0 106.546 0 .5.5 0 00-.546.837 5 5 0 11-5.454 0z",
			fill: color
		}));
	});
	EditIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13.854 2.146l-2-2a.5.5 0 00-.708 0l-1.5 1.5-8.995 8.995a.499.499 0 00-.143.268L.012 13.39a.495.495 0 00.135.463.5.5 0 00.462.134l2.482-.496a.495.495 0 00.267-.143l8.995-8.995 1.5-1.5a.5.5 0 000-.708zM12 3.293l.793-.793L11.5 1.207 10.707 2 12 3.293zm-2-.586L1.707 11 3 12.293 11.293 4 10 2.707zM1.137 12.863l.17-.849.679.679-.849.17z",
			fill: color
		}));
	});
	CogIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5.586 5.586A2 2 0 018.862 7.73a.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 10-.365-.93 2 2 0 01-2.145-3.277z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M.939 6.527c.127.128.19.297.185.464a.635.635 0 01-.185.465L0 8.395a7.099 7.099 0 001.067 2.572h1.32c.182 0 .345.076.46.197a.635.635 0 01.198.46v1.317A7.097 7.097 0 005.602 14l.94-.94a.634.634 0 01.45-.186H7.021c.163 0 .326.061.45.186l.939.938a7.098 7.098 0 002.547-1.057V11.61c0-.181.075-.344.197-.46a.634.634 0 01.46-.197h1.33c.507-.76.871-1.622 1.056-2.55l-.946-.946a.635.635 0 01-.186-.465.635.635 0 01.186-.464l.943-.944a7.099 7.099 0 00-1.044-2.522h-1.34a.635.635 0 01-.46-.197.635.635 0 01-.196-.46V1.057A7.096 7.096 0 008.413.002l-.942.942a.634.634 0 01-.45.186H6.992a.634.634 0 01-.45-.186L5.598 0a7.097 7.097 0 00-2.553 1.058v1.33c0 .182-.076.345-.197.46a.635.635 0 01-.46.198h-1.33A7.098 7.098 0 00.003 5.591l.936.936zm.707 1.636c.324-.324.482-.752.479-1.172a1.634 1.634 0 00-.48-1.171l-.538-.539c.126-.433.299-.847.513-1.235h.768c.459 0 .873-.19 1.167-.49.3-.295.49-.708.49-1.167v-.77c.39-.215.807-.388 1.243-.515l.547.547c.32.32.742.48 1.157.48l.015-.001h.014c.415 0 .836-.158 1.157-.479l.545-.544c.433.126.846.299 1.234.512v.784c0 .46.19.874.49 1.168.294.3.708.49 1.167.49h.776c.209.382.378.788.502 1.213l-.545.546a1.635 1.635 0 00-.48 1.17c-.003.421.155.849.48 1.173l.549.55c-.126.434-.3.85-.513 1.239h-.77c-.458 0-.872.19-1.166.49-.3.294-.49.708-.49 1.167v.77a6.09 6.09 0 01-1.238.514l-.54-.54a1.636 1.636 0 00-1.158-.48H6.992c-.415 0-.837.159-1.157.48l-.543.543a6.091 6.091 0 01-1.247-.516v-.756c0-.459-.19-.873-.49-1.167-.294-.3-.708-.49-1.167-.49h-.761a6.094 6.094 0 01-.523-1.262l.542-.542z",
			fill: color
		}));
	});
	NutIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5.585 8.414a2 2 0 113.277-.683.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 00-.365-.93 2 2 0 01-2.146-.449z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6.5.289a1 1 0 011 0l5.062 2.922a1 1 0 01.5.866v5.846a1 1 0 01-.5.866L7.5 13.71a1 1 0 01-1 0L1.437 10.79a1 1 0 01-.5-.866V4.077a1 1 0 01.5-.866L6.5.29zm.5.866l5.062 2.922v5.846L7 12.845 1.937 9.923V4.077L7 1.155z",
			fill: color
		}));
	});
	WrenchIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M10.5 1c.441 0 .564.521.252.833l-.806.807a.51.51 0 000 .72l.694.694a.51.51 0 00.72 0l.807-.806c.312-.312.833-.19.833.252a2.5 2.5 0 01-3.414 2.328l-6.879 6.88a1 1 0 01-1.414-1.415l6.88-6.88A2.5 2.5 0 0110.5 1zM2 12.5a.5.5 0 100-1 .5.5 0 000 1z",
			fill: color
		}));
	});
	EllipsisIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
			fill: color
		}));
	});
	WandIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5.903.112a.107.107 0 01.194 0l.233.505.552.066c.091.01.128.123.06.185l-.408.377.109.546a.107.107 0 01-.158.114L6 1.633l-.486.272a.107.107 0 01-.157-.114l.108-.546-.408-.377a.107.107 0 01.06-.185L5.67.617l.233-.505zM2.194.224a.214.214 0 00-.389 0l-.466 1.01-1.104.13a.214.214 0 00-.12.371l.816.755-.217 1.091a.214.214 0 00.315.23L2 3.266l.971.543c.16.09.35-.05.315-.229l-.217-1.09.817-.756a.214.214 0 00-.12-.37L2.66 1.234 2.194.224zM12.194 8.224a.214.214 0 00-.389 0l-.466 1.01-1.104.13a.214.214 0 00-.12.371l.816.755-.217 1.091a.214.214 0 00.315.23l.97-.544.971.543c.16.09.35-.05.315-.229l-.217-1.09.817-.756a.214.214 0 00-.12-.37l-1.105-.131-.466-1.01z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M.147 11.857a.5.5 0 010-.707l11-11a.5.5 0 01.706 0l2 2a.5.5 0 010 .708l-11 11a.5.5 0 01-.706 0l-2-2zm2.353.94l-1.293-1.293 6.758-6.758L9.258 6.04 2.5 12.797zm7.465-7.465l2.828-2.828L11.5 1.211 8.672 4.039l1.293 1.293z",
			fill: color
		}));
	});
	SweepIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M9.621 3.914l.379.379 3.146-3.147a.5.5 0 01.708.708L10.707 5l.379.379a3 3 0 010 4.242l-.707.707-.005.005-.008.008-.012.013-1.733 1.732a3 3 0 01-4.242 0L.146 7.854a.5.5 0 01.708-.707.915.915 0 001.292 0L4.64 4.654a.52.52 0 01.007-.008l.733-.732a3 3 0 014.242 0zm-4.26 1.432l.139-.139 3.146 3.147a.5.5 0 10.708-.707L6.212 4.505a2 2 0 012.702.116l.731.731.001.002h.002l.73.732a2 2 0 010 2.828l-.706.707-.012.013a.503.503 0 00-.014.013l-1.732 1.732a2 2 0 01-2.828 0L3.354 9.647a2.489 2.489 0 001.414-.708l1.086-1.085a.5.5 0 10-.708-.707L4.061 8.232a1.5 1.5 0 01-2.01.102c.294-.088.57-.248.803-.48l2.5-2.5a.475.475 0 00.007-.008z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2 5.004a1 1 0 11-2 0 1 1 0 012 0zM4 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
			fill: color
		}));
	});
	CheckIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z",
			fill: color
		}));
	});
	FormIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V6.393a.5.5 0 00-1 0v5.61H2v-10h7.5a.5.5 0 000-1H2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M6.354 9.857l7.5-7.5a.5.5 0 00-.708-.707L6 8.797 3.854 6.65a.5.5 0 10-.708.707l2.5 2.5a.5.5 0 00.708 0z",
			fill: color
		}));
	});
	BatchDenyIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM8.854 2.646a.5.5 0 010 .708L5.207 7l3.647 3.646a.5.5 0 01-.708.708L4.5 7.707.854 11.354a.5.5 0 01-.708-.708L3.793 7 .146 3.354a.5.5 0 11.708-.708L4.5 6.293l3.646-3.647a.5.5 0 01.708 0zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
			fill: color
		}));
	});
	BatchAcceptIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM9.3 2.6a.5.5 0 01.1.7l-5.995 7.993a.505.505 0 01-.37.206.5.5 0 01-.395-.152L.146 8.854a.5.5 0 11.708-.708l2.092 2.093L8.6 2.7a.5.5 0 01.7-.1zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
			fill: color
		}));
	});
	ControlsIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M10.5 1a.5.5 0 01.5.5V2h1.5a.5.5 0 010 1H11v.5a.5.5 0 01-1 0V3H1.5a.5.5 0 010-1H10v-.5a.5.5 0 01.5-.5zM1.5 11a.5.5 0 000 1H10v.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H11v-.5a.5.5 0 00-1 0v.5H1.5zM1 7a.5.5 0 01.5-.5H3V6a.5.5 0 011 0v.5h8.5a.5.5 0 010 1H4V8a.5.5 0 01-1 0v-.5H1.5A.5.5 0 011 7z",
			fill: color
		}));
	});
	PlusIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7 1a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 017 1z",
			fill: color
		}));
	});
	CloseAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2.03.97A.75.75 0 00.97 2.03L5.94 7 .97 11.97a.75.75 0 101.06 1.06L7 8.06l4.97 4.97a.75.75 0 101.06-1.06L8.06 7l4.97-4.97A.75.75 0 0011.97.97L7 5.94 2.03.97z",
			fill: color
		}));
	});
	CrossIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.146 2.146a.5.5 0 11.707.707L7.708 7l4.147 4.146a.5.5 0 11-.707.707L7 7.708l-4.146 4.147a.5.5 0 01-.707-.708L6.293 7 2.147 2.853a.5.5 0 11.707-.707L7 6.293l4.146-4.147z",
			fill: color
		}));
	});
	TrashIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5.5 4.5A.5.5 0 016 5v5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5zM9 5a.5.5 0 00-1 0v5a.5.5 0 001 0V5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4.5.5A.5.5 0 015 0h4a.5.5 0 01.5.5V2h3a.5.5 0 010 1H12v8a2 2 0 01-2 2H4a2 2 0 01-2-2V3h-.5a.5.5 0 010-1h3V.5zM3 3v8a1 1 0 001 1h6a1 1 0 001-1V3H3zm2.5-2h3v1h-3V1z",
			fill: color
		}));
	});
	PinAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", { clipPath: "url(#prefix__clip0_1107_3502)" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5 5H3.657A4 4 0 00.828 6.17l-.474.475a.5.5 0 000 .707l2.793 2.793-3 3a.5.5 0 00.707.708l3-3 2.792 2.792a.5.5 0 00.708 0l.474-.475A4 4 0 009 10.343V9l2-2a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM11 5.585l-3 3v1.757a3 3 0 01-.879 2.121L7 12.586 1.414 7l.122-.122A3 3 0 013.656 6h1.758l3-3-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586z",
			fill: color
		})), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_1107_3502" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	UnpinIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", {
			clipPath: "url(#prefix__clip0_1107_3501)",
			fill: color
		}, /* @__PURE__ */ import_react$2.createElement("path", { d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5.707 4.293 6.414 5l2-2-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586l-2 2 .707.707L11 7a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM.828 6.171a4 4 0 012.758-1.17l1 .999h-.93a3 3 0 00-2.12.878L1.414 7 7 12.586l.121-.122A3 3 0 008 10.343v-.929l1 1a4 4 0 01-1.172 2.757l-.474.475a.5.5 0 01-.708 0l-2.792-2.792-3 3a.5.5 0 01-.708-.708l3-3L.355 7.353a.5.5 0 010-.707l.474-.475zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z" })), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_1107_3501" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	AddIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
			fill: color
		}));
	});
	SubtractIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
			fill: color
		}));
	});
	CloseIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M9.854 4.146a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
			fill: color
		}));
	});
	DeleteIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0a6 6 0 01-9.874 4.582l8.456-8.456A5.976 5.976 0 0113 7zM2.418 10.874l8.456-8.456a6 6 0 00-8.456 8.456z",
			fill: color
		}));
	});
	PassedIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 14A7 7 0 107 0a7 7 0 000 14zm3.854-9.354a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
			fill: color
		}));
	});
	ChangedIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 14A7 7 0 107 0a7 7 0 000 14zM3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z",
			fill: color
		}));
	});
	FailedIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 14A7 7 0 107 0a7 7 0 000 14zm2.854-9.854a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
			fill: color
		}));
	});
	ClearIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M5 2h7a2 2 0 012 2v6a2 2 0 01-2 2H5a1.994 1.994 0 01-1.414-.586l-3-3a2 2 0 010-2.828l3-3A1.994 1.994 0 015 2zm1.146 3.146a.5.5 0 01.708 0L8 6.293l1.146-1.147a.5.5 0 11.708.708L8.707 7l1.147 1.146a.5.5 0 01-.708.708L8 7.707 6.854 8.854a.5.5 0 11-.708-.708L7.293 7 6.146 5.854a.5.5 0 010-.708z",
			fill: color
		}));
	});
	CommentIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.5 5.004a.5.5 0 100 1h7a.5.5 0 000-1h-7zM3 8.504a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.5 12.004H5.707l-1.853 1.854a.5.5 0 01-.351.146h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zm-10.5-1v-8h10v8H2z",
			fill: color
		}));
	});
	CommentAddIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.5 5.004a.5.5 0 10-1 0v1.5H5a.5.5 0 100 1h1.5v1.5a.5.5 0 001 0v-1.5H9a.5.5 0 000-1H7.5v-1.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
			fill: color
		}));
	});
	RequestChangeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M9.854 6.65a.5.5 0 010 .707l-2 2a.5.5 0 11-.708-.707l1.15-1.15-3.796.004a.5.5 0 010-1L8.29 6.5 7.145 5.357a.5.5 0 11.708-.707l2 2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
			fill: color
		}));
	});
	CommentsIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M8.5 7.004a.5.5 0 000-1h-5a.5.5 0 100 1h5zM9 8.504a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5a.5.5 0 01.5.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12 11.504v-1.5h1.5a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v1.5H.5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5H2v1.5a.499.499 0 00.497.5h.006a.498.498 0 00.35-.146l1.854-1.854H11.5a.5.5 0 00.5-.5zm-9-8.5v-1h10v7h-1v-5.5a.5.5 0 00-.5-.5H3zm-2 8v-7h10v7H1z",
			fill: color
		}));
	});
	ChatIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 2a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6.986a.444.444 0 01-.124.103l-3.219 1.84A.43.43 0 013 13.569V12a2 2 0 01-2-2V2zm3.42 4.78a.921.921 0 110-1.843.921.921 0 010 1.842zm1.658-.922a.921.921 0 101.843 0 .921.921 0 00-1.843 0zm2.58 0a.921.921 0 101.842 0 .921.921 0 00-1.843 0z",
			fill: color
		}));
	});
	LockIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M8 8.004a1 1 0 01-.5.866v1.634a.5.5 0 01-1 0V8.87A1 1 0 118 8.004z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3 4.004a4 4 0 118 0v1h1.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3v-1zm7 1v-1a3 3 0 10-6 0v1h6zm2 1H2v7h10v-7z",
			fill: color
		}));
	});
	UnlockIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", {
			clipPath: "url(#prefix__clip0_1107_3614)",
			fill: color
		}, /* @__PURE__ */ import_react$2.createElement("path", { d: "M6.5 8.87a1 1 0 111 0v1.634a.5.5 0 01-1 0V8.87z" }), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 1a3 3 0 00-3 3v1.004h8.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3V4a4 4 0 017.755-1.381.5.5 0 01-.939.345A3.001 3.001 0 007 1zM2 6.004h10v7H2v-7z"
		})), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_1107_3614" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	KeyIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11 4a1 1 0 11-2 0 1 1 0 012 0z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7.5 8.532V9.5a.5.5 0 01-.5.5H5.5v1.5a.5.5 0 01-.5.5H3.5v1.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.155-.362l5.11-5.11A4.5 4.5 0 117.5 8.532zM6 4.5a3.5 3.5 0 111.5 2.873c-.29-.203-1-.373-1 .481V9H5a.5.5 0 00-.5.5V11H3a.5.5 0 00-.5.5V13H1v-1.293l5.193-5.193a.552.552 0 00.099-.613A3.473 3.473 0 016 4.5z",
			fill: color
		}));
	});
	OutboxIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.354.15a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.707L6.5 1.711v6.793a.5.5 0 001 0V1.71l1.146 1.146a.5.5 0 10.708-.707l-2-2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2 7.504a.5.5 0 10-1 0v5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-5a.5.5 0 00-1 0v4.5H2v-4.5z",
			fill: color
		}));
	});
	CreditIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2.5 8.004a.5.5 0 100 1h3a.5.5 0 000-1h-3z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M0 11.504a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v9zm1-8.5v1h12v-1H1zm0 8h12v-5H1v5z",
			fill: color
		}));
	});
	ButtonIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1 3.004a1 1 0 00-1 1v5a1 1 0 001 1h3.5a.5.5 0 100-1H1v-5h12v5h-1a.5.5 0 000 1h1a1 1 0 001-1v-5a1 1 0 00-1-1H1z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M6.45 7.006a.498.498 0 01.31.07L10.225 9.1a.5.5 0 01-.002.873l-1.074.621.75 1.3a.75.75 0 01-1.3.75l-.75-1.3-1.074.62a.497.497 0 01-.663-.135.498.498 0 01-.095-.3L6 7.515a.497.497 0 01.45-.509z",
			fill: color
		}));
	});
	TypeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4 1.504a.5.5 0 01.5-.5h5a.5.5 0 110 1h-2v10h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-10h-2a.5.5 0 01-.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M0 4.504a.5.5 0 01.5-.5h4a.5.5 0 110 1H1v4h3.5a.5.5 0 110 1h-4a.5.5 0 01-.5-.5v-5zM9.5 4.004a.5.5 0 100 1H13v4H9.5a.5.5 0 100 1h4a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-4z",
			fill: color
		}));
	});
	PointerDefaultIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M5.943 12.457a.27.27 0 00.248-.149L7.77 9.151l2.54 2.54a.257.257 0 00.188.073c.082 0 .158-.03.21-.077l.788-.79a.27.27 0 000-.392L8.891 7.9l3.416-1.708a.29.29 0 00.117-.106.222.222 0 00.033-.134.332.332 0 00-.053-.161.174.174 0 00-.092-.072l-.02-.007-10.377-4.15a.274.274 0 00-.355.354l4.15 10.372a.275.275 0 00.233.169zm-.036 1l-.02-.002c-.462-.03-.912-.31-1.106-.796L.632 2.287A1.274 1.274 0 012.286.633l10.358 4.143c.516.182.782.657.81 1.114a1.25 1.25 0 01-.7 1.197L10.58 8.174l1.624 1.624a1.27 1.27 0 010 1.807l-.8.801-.008.007c-.491.46-1.298.48-1.792-.014l-1.56-1.56-.957 1.916a1.27 1.27 0 01-1.142.702h-.037z",
			fill: color
		}));
	});
	PointerHandIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11.87 6.008a.505.505 0 00-.003-.028v-.002c-.026-.27-.225-.48-.467-.498a.5.5 0 00-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47V5.17a.6.6 0 00-.002-.05c-.023-.268-.223-.49-.468-.5a.5.5 0 00-.52.5v1.65a.486.486 0 01-.47.47.48.48 0 01-.47-.47V4.62a.602.602 0 00-.002-.05v-.002c-.023-.266-.224-.48-.468-.498a.5.5 0 00-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 01-.47-.47V1.8c0-.017 0-.034-.002-.05-.022-.268-.214-.49-.468-.5a.5.5 0 00-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47l.001-.1c.001-.053.002-.104 0-.155a.775.775 0 00-.06-.315.65.65 0 00-.16-.22 29.67 29.67 0 01-.21-.189c-.2-.182-.4-.365-.617-.532l-.003-.003A6.366 6.366 0 003.06 7l-.01-.007c-.433-.331-.621-.243-.69-.193-.26.14-.29.5-.13.74l1.73 2.6v.01h-.016l-.035.023.05-.023s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.039-.591.036-1.189.032-1.783l-.002-.507v-.032zm.969 2.376c-.057 1.285-.254 2.667-1.082 3.72-.88 1.118-2.283 1.646-4.227 1.646-1.574 0-2.714-.87-3.406-1.623a6.958 6.958 0 01-1.046-1.504l-.006-.012-1.674-2.516a1.593 1.593 0 01-.25-1.107 1.44 1.44 0 01.69-1.041c.195-.124.485-.232.856-.186.357.044.681.219.976.446.137.106.272.22.4.331V1.75A1.5 1.5 0 015.63.25c.93.036 1.431.856 1.431 1.55v1.335a1.5 1.5 0 01.53-.063h.017c.512.04.915.326 1.153.71a1.5 1.5 0 01.74-.161c.659.025 1.115.458 1.316.964a1.493 1.493 0 01.644-.103h.017c.856.067 1.393.814 1.393 1.558l.002.48c.004.596.007 1.237-.033 1.864z",
			fill: color
		}));
	});
	CommandIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.5 6A2.5 2.5 0 116 3.5V5h2V3.5A2.5 2.5 0 1110.5 6H9v2h1.5A2.5 2.5 0 118 10.5V9H6v1.5A2.5 2.5 0 113.5 8H5V6H3.5zM2 3.5a1.5 1.5 0 113 0V5H3.5A1.5 1.5 0 012 3.5zM6 6v2h2V6H6zm3-1h1.5A1.5 1.5 0 109 3.5V5zM3.5 9H5v1.5A1.5 1.5 0 113.5 9zM9 9v1.5A1.5 1.5 0 1010.5 9H9z",
			fill: color
		}));
	});
	SaveIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M8.896 1c.2 0 .39.08.53.22l3.354 3.353c.14.14.22.332.22.53V11a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h5.896zM3 2a1 1 0 00-1 1v8a1 1 0 001 1h1V8.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5V12h1a1 1 0 001-1V5.207L8.793 2H5v2h3.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5V2H3zm2 10h4V9H5v3z",
			fill: color
		}));
	});
	SortDownIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4.5 2a.5.5 0 01.5.5v8.293l2.146-2.147a.5.5 0 11.708.708L4.86 12.346l-.007.008a.499.499 0 01-.351.146h-.006a.5.5 0 01-.35-.146l-3-3a.5.5 0 11.707-.708L4 10.793V2.5a.5.5 0 01.5-.5zM7 2.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM7 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM10.5 8a.5.5 0 000 1h2a.5.5 0 000-1h-2zM8 11.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z",
			fill: color
		}));
	});
	SortUpIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4.308 1.538a.496.496 0 00-.162.108l-3 3a.5.5 0 10.708.707L4 3.207V11.5a.5.5 0 001 0V3.207l2.146 2.147a.5.5 0 10.708-.708l-3-3a.5.5 0 00-.546-.108zM8 2.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM10.5 5a.5.5 0 000 1h2a.5.5 0 000-1h-2zM13 8.5a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5a.5.5 0 01.5.5zM7 11.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
			fill: color
		}));
	});
	BugIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11 0a.5.5 0 010 1 2 2 0 00-1.987 1.78C9.618 3.33 10 4.12 10 5a3 3 0 003-3 .5.5 0 011 0 4.002 4.002 0 01-3 3.874V7h2.5a.5.5 0 010 1H11v.626c1.725.444 3 2.01 3 3.874a.5.5 0 01-1 0 3 3 0 00-2.055-2.846 4 4 0 01-7.891 0A3 3 0 001 12.5a.5.5 0 01-1 0 4.002 4.002 0 013-3.874V8H.5a.5.5 0 010-1H3V5.874A4.002 4.002 0 010 2a.5.5 0 011 0 3 3 0 003 3c0-.88.382-1.67.986-2.22A1.999 1.999 0 003 1a.5.5 0 010-1c1.384 0 2.545.938 2.892 2.213a2.99 2.99 0 012.215 0A2.999 2.999 0 0111 0zM4 9a3 3 0 002.5 2.958V6H4v3zm3.5 2.958A3 3 0 0010 9V6H7.5v5.958zM7 3a2 2 0 00-2 2h4a2 2 0 00-2-2z",
			fill: color
		}));
	});
	EditorIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.536 5.314a.5.5 0 01.928.372l-2 5a.5.5 0 01-.928-.371l2-5zM3.646 6.146a.5.5 0 01.708.708L3.207 8l1.147 1.146a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 01-.063-.63l.063-.078 1.5-1.5zM9.646 6.146a.5.5 0 01.707 0l1.5 1.5.065.079a.497.497 0 01-.064.629l-1.5 1.5a.5.5 0 01-.708-.708L10.793 8 9.646 6.854a.5.5 0 010-.708z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13.5 1.004a.5.5 0 01.5.5v11l-.01.1a.501.501 0 01-.39.39l-.1.01H.5l-.1-.01a.501.501 0 01-.39-.39l-.01-.1v-11a.5.5 0 01.5-.5h13zm-12.5 11h12v-8H1v8zm.5-10a.5.5 0 100 1 .5.5 0 000-1zm2 0a.5.5 0 100 1 .5.5 0 000-1zm2 0a.5.5 0 100 1 .5.5 0 000-1z",
			fill: color
		}));
	});
	InfoIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 13A6 6 0 107 1a6 6 0 000 12zm0 1A7 7 0 107 0a7 7 0 000 14z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 5.5a.5.5 0 01.5.5v4.5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.75 3.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
			fill: color
		}));
	});
	QuestionIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5.25 5.25A1.75 1.75 0 117 7a.5.5 0 00-.5.5V9a.5.5 0 001 0V7.955A2.75 2.75 0 104.25 5.25a.5.5 0 001 0zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
			fill: color
		}));
	});
	SupportIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-3.524 4.89A5.972 5.972 0 017 13a5.972 5.972 0 01-3.477-1.11l1.445-1.444C5.564 10.798 6.258 11 7 11s1.436-.202 2.032-.554l1.444 1.445zm-.03-2.858l1.445 1.444A5.972 5.972 0 0013 7c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C10.798 5.564 11 6.258 11 7s-.202 1.436-.554 2.032zM9.032 3.554l1.444-1.445A5.972 5.972 0 007 1c-1.296 0-2.496.41-3.477 1.11l1.445 1.444A3.981 3.981 0 017 3c.742 0 1.436.202 2.032.554zM3.554 4.968L2.109 3.523A5.973 5.973 0 001 7c0 1.296.41 2.496 1.11 3.476l1.444-1.444A3.981 3.981 0 013 7c0-.742.202-1.436.554-2.032zM10 7a3 3 0 11-6 0 3 3 0 016 0z",
			fill: color
		}));
	});
	AlertIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7 4.5a.5.5 0 01.5.5v3.5a.5.5 0 11-1 0V5a.5.5 0 01.5-.5zM7.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7.206 1.045a.498.498 0 01.23.209l6.494 10.992a.5.5 0 01-.438.754H.508a.497.497 0 01-.506-.452.498.498 0 01.072-.31l6.49-10.984a.497.497 0 01.642-.21zM7 2.483L1.376 12h11.248L7 2.483z",
			fill: color
		}));
	});
	AlertAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM6.5 8a.5.5 0 001 0V4a.5.5 0 00-1 0v4zm-.25 2.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z",
			fill: color
		}));
	});
	EmailIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M0 2.504a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-9zm1 1.012v7.488h12V3.519L7.313 7.894a.496.496 0 01-.526.062.497.497 0 01-.1-.062L1 3.516zm11.03-.512H1.974L7 6.874l5.03-3.87z",
			fill: color
		}));
	});
	PhoneIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7.76 8.134l-.05.05a.2.2 0 01-.28.03 6.76 6.76 0 01-1.63-1.65.21.21 0 01.04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 00-.51.13A3.23 3.23 0 00.9 3.424c-.13 1.1.26 2.37 1.17 3.78a16.679 16.679 0 004.55 4.6 6.57 6.57 0 003.53 1.32 3.2 3.2 0 002.85-1.66c.14-.24.24-.64-.07-1.18a7.803 7.803 0 00-1.73-1.81c-.64-.5-1.52-1.11-2.13-1.11a.97.97 0 00-.34.06c-.472.164-.74.458-.947.685l-.023.025zm4.32 2.678a6.801 6.801 0 00-1.482-1.54l-.007-.005-.006-.005a8.418 8.418 0 00-.957-.662 2.7 2.7 0 00-.4-.193.683.683 0 00-.157-.043l-.004.002-.009.003c-.224.078-.343.202-.56.44l-.014.016-.046.045a1.2 1.2 0 01-1.602.149A7.76 7.76 0 014.98 7.134l-.013-.019-.013-.02a1.21 1.21 0 01.195-1.522l.06-.06.026-.024c.219-.19.345-.312.422-.533l.003-.01v-.008a.518.518 0 00-.032-.142c-.06-.178-.203-.453-.502-.872l-.005-.008-.005-.007A10.18 10.18 0 004.013 2.59l-.005-.005c-.31-.314-.543-.5-.716-.605-.147-.088-.214-.096-.222-.097h-.016l-.006.003-.01.006a2.23 2.23 0 00-1.145 1.656c-.09.776.175 1.806 1.014 3.108a15.68 15.68 0 004.274 4.32l.022.014.022.016a5.57 5.57 0 002.964 1.117 2.2 2.2 0 001.935-1.141l.006-.012.004-.007a.182.182 0 00-.007-.038.574.574 0 00-.047-.114z",
			fill: color
		}));
	});
	LinkIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.841 2.159a2.25 2.25 0 00-3.182 0l-2.5 2.5a2.25 2.25 0 000 3.182.5.5 0 01-.707.707 3.25 3.25 0 010-4.596l2.5-2.5a3.25 3.25 0 014.596 4.596l-2.063 2.063a4.27 4.27 0 00-.094-1.32l1.45-1.45a2.25 2.25 0 000-3.182z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.61 7.21c-.1-.434-.132-.88-.095-1.321L1.452 7.952a3.25 3.25 0 104.596 4.596l2.5-2.5a3.25 3.25 0 000-4.596.5.5 0 00-.707.707 2.25 2.25 0 010 3.182l-2.5 2.5A2.25 2.25 0 112.159 8.66l1.45-1.45z",
			fill: color
		}));
	});
	LinkBrokenIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.452 7.952l1.305-1.305.708.707-1.306 1.305a2.25 2.25 0 103.182 3.182l1.306-1.305.707.707-1.306 1.305a3.25 3.25 0 01-4.596-4.596zM12.548 6.048l-1.305 1.306-.707-.708 1.305-1.305a2.25 2.25 0 10-3.182-3.182L7.354 3.464l-.708-.707 1.306-1.305a3.25 3.25 0 014.596 4.596zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.707-.707l-11-11z",
			fill: color
		}));
	});
	BellIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7.994 1.11a1 1 0 10-1.988 0A4.502 4.502 0 002.5 5.5v3.882l-.943 1.885a.497.497 0 00-.053.295.5.5 0 00.506.438h3.575a1.5 1.5 0 102.83 0h3.575a.5.5 0 00.453-.733L11.5 9.382V5.5a4.502 4.502 0 00-3.506-4.39zM2.81 11h8.382l-.5-1H3.31l-.5 1zM10.5 9V5.5a3.5 3.5 0 10-7 0V9h7zm-4 3.5a.5.5 0 111 0 .5.5 0 01-1 0z",
			fill: color
		}));
	});
	RSSIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.5.5A.5.5 0 012 0c6.627 0 12 5.373 12 12a.5.5 0 01-1 0C13 5.925 8.075 1 2 1a.5.5 0 01-.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.5 4.5A.5.5 0 012 4a8 8 0 018 8 .5.5 0 01-1 0 7 7 0 00-7-7 .5.5 0 01-.5-.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M5 11a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 11-2 0 1 1 0 012 0z",
			fill: color
		}));
	});
	ShareAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z",
			fill: color
		}));
	});
	ShareIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M6.646.15a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.707L7.5 1.711v6.793a.5.5 0 01-1 0V1.71L5.354 2.857a.5.5 0 11-.708-.707l2-2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2 4.004a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H9.5a.5.5 0 100 1H12v7H2v-7h2.5a.5.5 0 000-1H2z",
			fill: color
		}));
	});
	JumpToIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M13.854 6.646a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L12.293 7.5H5.5a.5.5 0 010-1h6.793l-1.147-1.146a.5.5 0 01.708-.708l2 2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M10 2a1 1 0 00-1-1H2a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V9.5a.5.5 0 00-1 0V12H2V2h7v2.5a.5.5 0 001 0V2z",
			fill: color
		}));
	});
	CircleHollowIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 13A6 6 0 107 1a6 6 0 000 12zm0 1A7 7 0 107 0a7 7 0 000 14z",
			fill: color
		}));
	});
	CircleIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0z",
			fill: color
		}));
	});
	BookmarkHollowIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
			fill: color
		}));
	});
	BookmarkIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 15",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5z",
			fill: color
		}));
	});
	DiamondIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", { clipPath: "url(#prefix__clip0_1449_588)" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M8.414 1.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4zm.707-.707a3 3 0 00-4.242 0l-4 4a3 3 0 000 4.242l4 4a3 3 0 004.242 0l4-4a3 3 0 000-4.242l-4-4z",
			fill: color
		})), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_1449_588" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	HeartHollowIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584zM1.2 3.526c.128-.333.304-.598.52-.806.218-.212.497-.389.849-.522m-1.37 1.328A3.324 3.324 0 001 4.708c0 .225.032.452.101.686.082.265.183.513.307.737.135.246.294.484.479.716.188.237.386.454.59.652l.001.002 4.514 4.355 4.519-4.344c.2-.193.398-.41.585-.648l.003-.003c.184-.23.345-.472.486-.726l.004-.007c.131-.23.232-.474.31-.732v-.002c.068-.224.101-.45.101-.686 0-.457-.07-.849-.195-1.185a2.177 2.177 0 00-.515-.802l.007-.012-.008.009a2.383 2.383 0 00-.85-.518l-.003-.001C11.1 2.072 10.692 2 10.203 2c-.21 0-.406.03-.597.09h-.001c-.22.07-.443.167-.663.289l-.007.003c-.22.12-.434.262-.647.426-.226.174-.42.341-.588.505l-.684.672-.7-.656a9.967 9.967 0 00-.615-.527 4.82 4.82 0 00-.635-.422l-.01-.005a3.289 3.289 0 00-.656-.281l-.008-.003A2.014 2.014 0 003.785 2c-.481 0-.881.071-1.217.198",
			fill: color
		}));
	});
	HeartIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584z",
			fill: color
		}));
	});
	StarHollowIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6.319.783a.75.75 0 011.362 0l1.63 3.535 3.867.458a.75.75 0 01.42 1.296L10.74 8.715l.76 3.819a.75.75 0 01-1.103.8L7 11.434l-3.398 1.902a.75.75 0 01-1.101-.801l.758-3.819L.401 6.072a.75.75 0 01.42-1.296l3.867-.458L6.318.783zm.68.91l-1.461 3.17a.75.75 0 01-.593.431l-3.467.412 2.563 2.37a.75.75 0 01.226.697l-.68 3.424 3.046-1.705a.75.75 0 01.733 0l3.047 1.705-.68-3.424a.75.75 0 01.226-.697l2.563-2.37-3.467-.412a.75.75 0 01-.593-.43L7 1.694z",
			fill: color
		}));
	});
	StarIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.68.783a.75.75 0 00-1.361 0l-1.63 3.535-3.867.458A.75.75 0 00.4 6.072l2.858 2.643-.758 3.819a.75.75 0 001.101.8L7 11.434l3.397 1.902a.75.75 0 001.102-.801l-.759-3.819L13.6 6.072a.75.75 0 00-.421-1.296l-3.866-.458L7.68.783z",
			fill: color
		}));
	});
	CertificateIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M10 7.854a4.5 4.5 0 10-6 0V13a.5.5 0 00.497.5h.006c.127 0 .254-.05.35-.146L7 11.207l2.146 2.147A.5.5 0 0010 13V7.854zM7 8a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-.354 2.146a.5.5 0 01.708 0L9 11.793v-3.26C8.398 8.831 7.718 9 7 9a4.481 4.481 0 01-2-.468v3.26l1.646-1.646z",
			fill: color
		}));
	});
	VerifiedIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6.565 13.123a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97c.25.473.83.661 1.31.426l.987-.482zm4.289-8.477a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
			fill: color
		}));
	});
	ThumbsUpIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.493 5.493 0 01-1.3-.16c-.42-.1-.91-.25-1.47-.45a5.056 5.056 0 00-.95-.27H2.88a.84.84 0 01-.62-.26.84.84 0 01-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 01.62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 01.62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7.15.31.23.73.23 1.27a3 3 0 01-.32 1.31h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98a2.05 2.05 0 01-.4 1.51 1.9 1.9 0 01-.57 1.5zm.473-5.33a.965.965 0 00.027-.25.742.742 0 00-.227-.513.683.683 0 00-.523-.227H7.927l.73-1.45a2 2 0 00.213-.867c0-.444-.068-.695-.127-.822a.53.53 0 00-.245-.244 1.296 1.296 0 00-.539-.116.989.989 0 00-.141.28 9.544 9.544 0 00-.174.755c-.069.387-.213.779-.484 1.077l-.009.01-.009.01c-.195.202-.41.46-.67.798l-.003.004c-.235.3-.44.555-.613.753-.151.173-.343.381-.54.516l-.255.176H5v4.133l.018.003c.384.07.76.176 1.122.318.532.189.98.325 1.352.413l.007.002a4.5 4.5 0 001.063.131h.878c.429 0 .683-.115.871-.285a.9.9 0 00.262-.702l-.028-.377.229-.3a1.05 1.05 0 00.205-.774l-.044-.333.165-.292a.969.969 0 00.13-.487.457.457 0 00-.019-.154l-.152-.458.263-.404a1.08 1.08 0 00.152-.325zM3.5 10.8a.5.5 0 100-1 .5.5 0 000 1z",
			fill: color
		}));
	});
	ShieldIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11.765 2.076A.5.5 0 0112 2.5v6.009a.497.497 0 01-.17.366L7.337 12.87a.497.497 0 01-.674 0L2.17 8.875l-.009-.007a.498.498 0 01-.16-.358L2 8.5v-6a.5.5 0 01.235-.424l.018-.011c.016-.01.037-.024.065-.04.056-.032.136-.077.24-.128a6.97 6.97 0 01.909-.371C4.265 1.26 5.443 1 7 1s2.735.26 3.533.526c.399.133.702.267.91.37a4.263 4.263 0 01.304.169l.018.01zM3 2.793v5.482l1.068.95 6.588-6.588a6.752 6.752 0 00-.44-.163C9.517 2.24 8.444 2 7 2c-1.443 0-2.515.24-3.217.474-.351.117-.61.233-.778.317L3 2.793zm4 9.038l-2.183-1.94L11 3.706v4.568l-4 3.556z",
			fill: color
		}));
	});
	BasketIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M10.354 2.854a.5.5 0 10-.708-.708l-3 3a.5.5 0 10.708.708l3-3z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2.09 6H4.5a.5.5 0 000-1H1.795a.75.75 0 00-.74.873l.813 4.874A1.5 1.5 0 003.348 12h7.305a1.5 1.5 0 001.48-1.253l.812-4.874a.75.75 0 00-.74-.873H10a.5.5 0 000 1h1.91l-.764 4.582a.5.5 0 01-.493.418H3.347a.5.5 0 01-.493-.418L2.09 6z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4.5 7a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 7.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zM6.5 9.5v-2a.5.5 0 011 0v2a.5.5 0 01-1 0z",
			fill: color
		}));
	});
	BeakerIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4.5 2h.75v3.866l-3.034 5.26A1.25 1.25 0 003.299 13H10.7a1.25 1.25 0 001.083-1.875L8.75 5.866V2h.75a.5.5 0 100-1h-5a.5.5 0 000 1zm1.75 0h1.5v4.134L8.827 8H5.173L6.25 6.134V2zM4.597 9l-1.515 2.625A.25.25 0 003.3 12H10.7a.25.25 0 00.217-.375L9.404 9H4.597z",
			fill: color
		}));
	});
	HourglassIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.5 10.5a.5.5 0 11-1 0 .5.5 0 011 0z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.5 1a.5.5 0 00-.5.5c0 1.063.137 1.892.678 2.974.346.692.858 1.489 1.598 2.526-.89 1.247-1.455 2.152-1.798 2.956-.377.886-.477 1.631-.478 2.537v.007a.5.5 0 00.5.5h7c.017 0 .034 0 .051-.003A.5.5 0 0011 12.5v-.007c0-.906-.1-1.65-.478-2.537-.343-.804-.909-1.709-1.798-2.956.74-1.037 1.252-1.834 1.598-2.526C10.863 3.392 11 2.563 11 1.5a.5.5 0 00-.5-.5h-7zm6.487 11a4.675 4.675 0 00-.385-1.652c-.277-.648-.735-1.407-1.499-2.494-.216.294-.448.606-.696.937a.497.497 0 01-.195.162.5.5 0 01-.619-.162c-.248-.331-.48-.643-.696-.937-.764 1.087-1.222 1.846-1.499 2.494A4.675 4.675 0 004.013 12h5.974zM6.304 6.716c.212.293.443.609.696.948a90.058 90.058 0 00.709-.965c.48-.664.86-1.218 1.163-1.699H5.128a32.672 32.672 0 001.176 1.716zM4.559 4h4.882c.364-.735.505-1.312.546-2H4.013c.04.688.182 1.265.546 2z",
			fill: color
		}));
	});
	FlagIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11.5 1h-9a.5.5 0 00-.5.5v11a.5.5 0 001 0V8h8.5a.5.5 0 00.354-.854L9.207 4.5l2.647-2.646A.499.499 0 0011.5 1zM8.146 4.146L10.293 2H3v5h7.293L8.146 4.854a.5.5 0 010-.708z",
			fill: color
		}));
	});
	CloudHollowIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M10 7V6a3 3 0 00-5.91-.736l-.17.676-.692.075A2.5 2.5 0 003.5 11h3c.063 0 .125-.002.187-.007l.076-.005.076.006c.053.004.106.006.161.006h4a2 2 0 100-4h-1zM3.12 5.02A3.5 3.5 0 003.5 12h3c.087 0 .174-.003.26-.01.079.007.16.01.24.01h4a3 3 0 100-6 4 4 0 00-7.88-.98z",
			fill: color
		}));
	});
	CloudIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7 2a4 4 0 014 4 3 3 0 110 6H7c-.08 0-.161-.003-.24-.01-.086.007-.173.01-.26.01h-3a3.5 3.5 0 01-.38-6.98A4.002 4.002 0 017 2z",
			fill: color
		}));
	});
	StickerIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11 7a4 4 0 11-8 0 4 4 0 018 0zm-1 0a3 3 0 11-6 0 3 3 0 016 0z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4.268 13.18c.25.472.83.66 1.31.425l.987-.482a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97zm5.096-1.44l-.511.963-.979-.478a1.99 1.99 0 00-1.748 0l-.979.478-.51-.962a1.991 1.991 0 00-1.415-1.028l-1.073-.188.152-1.079a1.991 1.991 0 00-.54-1.663L1.004 7l.757-.783a1.991 1.991 0 00.54-1.663L2.15 3.475l1.073-.188A1.991 1.991 0 004.636 2.26l.511-.962.979.478a1.99 1.99 0 001.748 0l.979-.478.51.962c.288.543.81.922 1.415 1.028l1.073.188-.152 1.079a1.99 1.99 0 00.54 1.663l.757.783-.757.783a1.99 1.99 0 00-.54 1.663l.152 1.079-1.073.188a1.991 1.991 0 00-1.414 1.028z",
			fill: color
		}));
	});
	StatusFailIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M9.147 4.146a.5.5 0 11.707.707L7.707 7l2.147 2.146a.5.5 0 11-.707.707L7 7.707 4.854 9.853a.5.5 0 01-.707-.707L6.293 7 4.147 4.853a.5.5 0 11.707-.707L7 6.293l2.147-2.147z",
			fill: color
		}));
	});
	StatusIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("circle", {
			cx: 7,
			cy: 7,
			r: 3,
			fill: color
		}));
	});
	StatusWarnIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7.206 3.044a.498.498 0 01.23.212l3.492 5.985a.494.494 0 01.006.507.497.497 0 01-.443.252H3.51a.499.499 0 01-.437-.76l3.492-5.984a.497.497 0 01.642-.212zM7 4.492L4.37 9h5.26L7 4.492z",
			fill: color
		}));
	});
	StatusPassIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M10.854 4.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L5.5 8.793l4.646-4.647a.5.5 0 01.708 0z",
			fill: color
		}));
	});
	GiftIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M9 0a2.5 2.5 0 011.997 4H12.5A1.5 1.5 0 0114 5.5v1c0 .653-.418 1.206-1 1.412V11.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 011 11.5V7.912c-.582-.206-1-.76-1-1.412v-1A1.5 1.5 0 011.5 4h1.883A2.234 2.234 0 013 2.75c0-.6.208-1.142.597-1.535.39-.394.93-.607 1.533-.607.637 0 1.197.349 1.602.843A2.498 2.498 0 019 0zM7.5 12h4a.5.5 0 00.5-.5V8H7.5v4zM2 11.5a.5.5 0 00.5.5h4V8H2v3.5zM7.5 7h5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-5v2zm-6-2a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h5V5h-5zm3.63-3.392c-.363 0-.639.125-.822.31-.184.187-.308.466-.308.832C4 3.44 4.56 4 5.25 4H6.5v-.25c0-.648-.197-1.203-.477-1.585-.283-.388-.616-.557-.893-.557zM9 1a1.5 1.5 0 00-1.5 1.5V4H9a1.5 1.5 0 100-3z",
			fill: color
		}));
	});
	StatusNewIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.052 3.004c.01 0 .02 0 .03.002.004 0 .01.003.015.004a.493.493 0 01.051.013l.043.015a.497.497 0 01.089.049l.03.023c.015.012.029.023.042.036.012.012.023.026.035.04l.023.03c.01.015.019.03.027.047.008.014.016.028.022.043.006.014.01.028.015.043.005.017.01.034.013.051l.005.017.03.182A3.5 3.5 0 0010.4 6.476l.182.03c.005 0 .01.003.016.004a.494.494 0 01.051.013l.043.015a.503.503 0 01.089.049l.03.023c.015.012.029.023.042.036.012.012.023.026.035.04l.023.03c.01.015.019.03.027.047.008.014.016.028.022.043l.014.04.014.054.005.017c.002.01 0 .019.001.028.002.018.004.036.004.054 0 .018-.002.035-.004.053v.03l-.006.015a.479.479 0 01-.013.051l-.015.043a.507.507 0 01-.049.089l-.023.03-.035.042-.042.035-.03.023a.503.503 0 01-.046.027c-.014.008-.028.016-.043.022-.014.006-.028.01-.043.015a.491.491 0 01-.051.013l-.016.005-.182.03A3.5 3.5 0 007.522 10.4l-.03.182c0 .005-.004.01-.005.016a.491.491 0 01-.013.051l-.015.043a.503.503 0 01-.049.089l-.023.03-.035.042-.041.035-.03.023a.507.507 0 01-.047.027c-.014.008-.028.016-.043.022-.014.006-.028.01-.043.015a.479.479 0 01-.051.013l-.016.005c-.01.002-.02 0-.03.001-.017.002-.034.004-.052.004-.018 0-.036-.002-.054-.004h-.028c-.006-.002-.011-.005-.017-.006a.503.503 0 01-.051-.013l-.043-.015a.505.505 0 01-.089-.049l-.03-.023c-.015-.012-.029-.023-.041-.035-.013-.013-.024-.027-.036-.042l-.023-.03a.503.503 0 01-.027-.046c-.008-.014-.016-.028-.022-.043-.006-.014-.01-.028-.015-.043a.494.494 0 01-.013-.051l-.004-.016-.03-.182a3.5 3.5 0 00-2.877-2.877l-.182-.03c-.006 0-.011-.004-.017-.005a.493.493 0 01-.051-.013l-.043-.015a.492.492 0 01-.089-.049l-.03-.023c-.015-.012-.029-.023-.041-.035-.013-.013-.024-.027-.036-.041l-.023-.03a.497.497 0 01-.027-.047c-.008-.014-.016-.028-.022-.043-.006-.013-.01-.028-.015-.043a.493.493 0 01-.013-.051l-.004-.016c-.002-.01-.001-.02-.002-.03C3.002 7.035 3 7.018 3 7c0-.018.002-.036.004-.054 0-.009 0-.019.002-.028 0-.006.003-.011.004-.017l.015-.054.013-.04a.498.498 0 01.049-.089l.023-.03.026-.032.02-.02.03-.025.03-.023a.498.498 0 01.047-.027c.014-.008.028-.016.043-.022.014-.006.028-.01.043-.015A.493.493 0 013.4 6.51l.017-.004.182-.03a3.5 3.5 0 002.877-2.877l.03-.182c0-.006.003-.011.004-.017a.493.493 0 01.013-.051l.015-.043a.498.498 0 01.049-.089l.023-.03.026-.032.02-.02.03-.025.03-.023a.498.498 0 01.047-.027c.014-.008.028-.016.043-.022.014-.006.028-.01.043-.015A.493.493 0 016.9 3.01l.017-.004c.01-.002.019-.001.028-.002C6.963 3.002 6.981 3 7 3c.018 0 .035.002.053.004z",
			fill: color
		}));
	});
	PopOutIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", {
			clipPath: "url(#prefix__clip0_3002_502)",
			fill: color
		}, /* @__PURE__ */ import_react$2.createElement("path", { d: "M10.5 12a.5.5 0 01.5.5v.504a1 1 0 01-1 1H8.5a.5.5 0 010-1H10V12.5a.5.5 0 01.5-.5zM.498 11a.5.5 0 01.5.5v1.502H2.5a.5.5 0 110 1H.998a1 1 0 01-1-1V11.5a.5.5 0 01.5-.5zM6.5 13a.5.5 0 010 1h-2a.5.5 0 010-1h2zM10.501 3.004h.006a.495.495 0 01.232.063c.04.022.08.049.115.083a.497.497 0 01.077.104.493.493 0 01.06.151l.003.038c.003.02.006.04.006.06V6.5a.5.5 0 01-1 0V4.71L6.857 7.855a.5.5 0 11-.707-.708l3.144-3.144L7.499 4a.5.5 0 01.002-1l3 .004z" }), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M13.6.014a.5.5 0 01.4.49v10l-.01.1a.501.501 0 01-.39.39l-.1.01h-10a.5.5 0 01-.49-.4l-.01-.1v-10a.5.5 0 01.5-.5h10l.1.01zM4 10.004h9v-9H4v9z"
		}), /* @__PURE__ */ import_react$2.createElement("path", { d: "M.5 7a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2A.5.5 0 01.5 7zM1.5 3.002a.5.5 0 010 1H.998L1 5.499a.5.5 0 01-1 .002l-.002-1.498a1 1 0 011-1.001H1.5z" })), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_3002_502" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	ChevronUpIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.354 3.896l5.5 5.5a.5.5 0 01-.708.708L7 4.957l-5.146 5.147a.5.5 0 01-.708-.708l5.5-5.5a.5.5 0 01.708 0z",
			fill: color
		}));
	});
	ChevronDownIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z",
			fill: color
		}));
	});
	ChevronLeftIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M2.76 7.096a.498.498 0 00.136.258l5.5 5.5a.5.5 0 00.707-.708L3.958 7l5.147-5.146a.5.5 0 10-.708-.708l-5.5 5.5a.5.5 0 00-.137.45z",
			fill: color
		}));
	});
	ChevronRightIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
			fill: color
		}));
	});
	ChevronSmallUpIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.854 9.104a.5.5 0 11-.708-.708l3.5-3.5a.5.5 0 01.708 0l3.5 3.5a.5.5 0 01-.708.708L7 5.957 3.854 9.104z",
			fill: color
		}));
	});
	ChevronSmallDownIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.854 4.896a.5.5 0 10-.708.708l3.5 3.5a.5.5 0 00.708 0l3.5-3.5a.5.5 0 00-.708-.708L7 8.043 3.854 4.896z",
			fill: color
		}));
	});
	ChevronSmallLeftIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M9.104 10.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 11.708.708L5.957 7l3.147 3.146z",
			fill: color
		}));
	});
	ChevronSmallRightIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4.896 10.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 10-.708.708L8.043 7l-3.147 3.146z",
			fill: color
		}));
	});
	ArrowUpIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.854 4.646l-4.5-4.5a.5.5 0 00-.708 0l-4.5 4.5a.5.5 0 10.708.708L6.5 1.707V13.5a.5.5 0 001 0V1.707l3.646 3.647a.5.5 0 00.708-.708z",
			fill: color
		}));
	});
	ArrowDownIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.5.5a.5.5 0 00-1 0v11.793L2.854 8.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.351.146h.006c.127 0 .254-.05.35-.146l4.5-4.5a.5.5 0 00-.707-.708L7.5 12.293V.5z",
			fill: color
		}));
	});
	ArrowLeftIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5.354 2.146a.5.5 0 010 .708L1.707 6.5H13.5a.5.5 0 010 1H1.707l3.647 3.646a.5.5 0 01-.708.708l-4.5-4.5a.5.5 0 010-.708l4.5-4.5a.5.5 0 01.708 0z",
			fill: color
		}));
	});
	ArrowRightIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M8.646 2.146a.5.5 0 01.708 0l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708L12.293 7.5H.5a.5.5 0 010-1h11.793L8.646 2.854a.5.5 0 010-.708z",
			fill: color
		}));
	});
	ArrowTopLeftIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.904 8.768V2.404a.5.5 0 01.5-.5h6.364a.5.5 0 110 1H3.61l8.339 8.339a.5.5 0 01-.707.707l-8.34-8.34v5.158a.5.5 0 01-1 0z",
			fill: color
		}));
	});
	ArrowTopRightIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M12.096 8.768V2.404a.5.5 0 00-.5-.5H5.232a.5.5 0 100 1h5.157L2.05 11.243a.5.5 0 10.707.707l8.34-8.34v5.158a.5.5 0 101 0z",
			fill: color
		}));
	});
	ArrowBottomLeftIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.904 5.232v6.364a.5.5 0 00.5.5h6.364a.5.5 0 000-1H3.61l8.339-8.339a.5.5 0 00-.707-.707l-8.34 8.34V5.231a.5.5 0 00-1 0z",
			fill: color
		}));
	});
	ArrowBottomRightIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M12.096 5.232v6.364a.5.5 0 01-.5.5H5.232a.5.5 0 010-1h5.157L2.05 2.757a.5.5 0 01.707-.707l8.34 8.34V5.231a.5.5 0 111 0z",
			fill: color
		}));
	});
	ArrowSolidUpIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6.772 3.59c.126-.12.33-.12.456 0l5.677 5.387c.203.193.06.523-.228.523H1.323c-.287 0-.431-.33-.228-.523L6.772 3.59z",
			fill: color
		}));
	});
	ArrowSolidDownIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7.228 10.41a.335.335 0 01-.456 0L1.095 5.023c-.203-.193-.06-.523.228-.523h11.354c.287 0 .431.33.228.523L7.228 10.41z",
			fill: color
		}));
	});
	ArrowSolidLeftIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.712 7.212a.3.3 0 010-.424l5.276-5.276a.3.3 0 01.512.212v10.552a.3.3 0 01-.512.212L3.712 7.212z",
			fill: color
		}));
	});
	ArrowSolidRightIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M10.288 7.212a.3.3 0 000-.424L5.012 1.512a.3.3 0 00-.512.212v10.552a.3.3 0 00.512.212l5.276-5.276z",
			fill: color
		}));
	});
	ExpandAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z",
			fill: color
		}));
	});
	CollapseIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.354.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7 3.793 3.354.146zM6.646 9.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L7 10.207l-3.646 3.647a.5.5 0 01-.708-.708l4-4z",
			fill: color
		}));
	});
	ExpandIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.5 1h2a.5.5 0 010 1h-.793l3.147 3.146a.5.5 0 11-.708.708L2 2.707V3.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-.793L8.854 5.854a.5.5 0 11-.708-.708L11.293 2H10.5a.5.5 0 01-.5-.5zM12.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.793L8.146 8.854a.5.5 0 11.708-.708L12 11.293V10.5a.5.5 0 01.5-.5zM2 11.293V10.5a.5.5 0 00-1 0v2a.5.5 0 00.5.5h2a.5.5 0 000-1h-.793l3.147-3.146a.5.5 0 10-.708-.708L2 11.293z",
			fill: color
		}));
	});
	UnfoldIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M6.646.147l-1.5 1.5a.5.5 0 10.708.707l.646-.647V5a.5.5 0 001 0V1.707l.646.647a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.309 4.038a.498.498 0 00-.16.106l-.005.005a.498.498 0 00.002.705L3.293 7 1.146 9.146A.498.498 0 001.5 10h3a.5.5 0 000-1H2.707l1.5-1.5h5.586l2.353 2.354a.5.5 0 00.708-.708L10.707 7l2.146-2.146.11-.545-.107.542A.499.499 0 0013 4.503v-.006a.5.5 0 00-.144-.348l-.005-.005A.498.498 0 0012.5 4h-3a.5.5 0 000 1h1.793l-1.5 1.5H4.207L2.707 5H4.5a.5.5 0 000-1h-3a.498.498 0 00-.191.038z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7 8.5a.5.5 0 01.5.5v3.293l.646-.647a.5.5 0 01.708.708l-1.5 1.5a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708l.646.647V9a.5.5 0 01.5-.5zM9 9.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z",
			fill: color
		}));
	});
	TransferIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M10.646 2.646a.5.5 0 01.708 0l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708-.708L11.293 5H1.5a.5.5 0 010-1h9.793l-.647-.646a.5.5 0 010-.708zM3.354 8.354L2.707 9H12.5a.5.5 0 010 1H2.707l.647.646a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708z",
			fill: color
		}));
	});
	RedirectIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.5 1a.5.5 0 01.5.5V10a2 2 0 004 0V4a3 3 0 016 0v7.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L11 11.793V4a2 2 0 10-4 0v6.002a3 3 0 01-6 0V1.5a.5.5 0 01.5-.5z",
			fill: color
		}));
	});
	UndoIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.146 3.854a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L2.707 3h6.295A4 4 0 019 11H3a.5.5 0 010-1h6a3 3 0 100-6H2.707l1.147 1.146a.5.5 0 11-.708.708l-2-2z",
			fill: color
		}));
	});
	ReplyIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4.354 2.146a.5.5 0 010 .708L1.707 5.5H9.5A4.5 4.5 0 0114 10v1.5a.5.5 0 01-1 0V10a3.5 3.5 0 00-3.5-3.5H1.707l2.647 2.646a.5.5 0 11-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0z",
			fill: color
		}));
	});
	SyncIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z",
			fill: color
		}));
	});
	UploadIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M8.646 5.854L7.5 4.707V10.5a.5.5 0 01-1 0V4.707L5.354 5.854a.5.5 0 11-.708-.708l2-2a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.708z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
			fill: color
		}));
	});
	DownloadIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5.354 8.146L6.5 9.293V3.5a.5.5 0 011 0v5.793l1.146-1.147a.5.5 0 11.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm1 0a6 6 0 1112 0A6 6 0 011 7z",
			fill: color
		}));
	});
	BackIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M5.854 5.354L4.707 6.5H10.5a.5.5 0 010 1H4.707l1.147 1.146a.5.5 0 11-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 11.708.708z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 0a7 7 0 110 14A7 7 0 017 0zm0 1a6 6 0 110 12A6 6 0 017 1z",
			fill: color
		}));
	});
	ProceedIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.5 6.5h5.793L8.146 5.354a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 11-.708-.708L9.293 7.5H3.5a.5.5 0 010-1z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 14A7 7 0 117 0a7 7 0 010 14zm0-1A6 6 0 117 1a6 6 0 010 12z",
			fill: color
		}));
	});
	RefreshIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.092.5H7a6.5 6.5 0 106.41 7.583.5.5 0 10-.986-.166A5.495 5.495 0 017 12.5a5.5 5.5 0 010-11h.006a5.5 5.5 0 014.894 3H10a.5.5 0 000 1h3a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v1.535A6.495 6.495 0 007.092.5z",
			fill: color
		}));
	});
	GlobeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 100 7a7 7 0 0014 0zm-6.535 5.738c-.233.23-.389.262-.465.262-.076 0-.232-.032-.465-.262-.238-.234-.497-.623-.737-1.182-.434-1.012-.738-2.433-.79-4.056h3.984c-.052 1.623-.356 3.043-.79 4.056-.24.56-.5.948-.737 1.182zM8.992 6.5H5.008c.052-1.623.356-3.044.79-4.056.24-.56.5-.948.737-1.182C6.768 1.032 6.924 1 7 1c.076 0 .232.032.465.262.238.234.497.623.737 1.182.434 1.012.738 2.433.79 4.056zm1 1c-.065 2.176-.558 4.078-1.282 5.253A6.005 6.005 0 0012.98 7.5H9.992zm2.987-1H9.992c-.065-2.176-.558-4.078-1.282-5.253A6.005 6.005 0 0112.98 6.5zm-8.971 0c.065-2.176.558-4.078 1.282-5.253A6.005 6.005 0 001.02 6.5h2.988zm-2.987 1a6.005 6.005 0 004.27 5.253C4.565 11.578 4.072 9.676 4.007 7.5H1.02z",
			fill: color
		}));
	});
	CompassIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M10.087 3.397L5.95 5.793a.374.374 0 00-.109.095.377.377 0 00-.036.052l-2.407 4.147a.374.374 0 00-.004.384c.104.179.334.24.513.136l4.142-2.404a.373.373 0 00.148-.143l2.406-4.146a.373.373 0 00-.037-.443.373.373 0 00-.478-.074zM4.75 9.25l2.847-1.652-1.195-1.195L4.75 9.25z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
			fill: color
		}));
	});
	LocationIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm6.5 3.5v2.48A6.001 6.001 0 011.02 7.5H3.5a.5.5 0 000-1H1.02A6.001 6.001 0 016.5 1.02V3.5a.5.5 0 001 0V1.02a6.001 6.001 0 015.48 5.48H10.5a.5.5 0 000 1h2.48a6.002 6.002 0 01-5.48 5.48V10.5a.5.5 0 00-1 0z",
			fill: color
		}));
	});
	PinIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M9 5a2 2 0 11-4 0 2 2 0 014 0zM8 5a1 1 0 11-2 0 1 1 0 012 0z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M12 5A5 5 0 002 5c0 2.633 2.273 6.154 4.65 8.643.192.2.508.2.7 0C9.726 11.153 12 7.633 12 5zM7 1a4 4 0 014 4c0 1.062-.471 2.42-1.303 3.88-.729 1.282-1.69 2.562-2.697 3.67-1.008-1.108-1.968-2.388-2.697-3.67C3.47 7.42 3 6.063 3 5a4 4 0 014-4z",
			fill: color
		}));
	});
	TimeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7 2a.5.5 0 01.5.5v4H10a.5.5 0 010 1H7a.5.5 0 01-.5-.5V2.5A.5.5 0 017 2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
			fill: color
		}));
	});
	DashboardIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M9.79 4.093a.5.5 0 01.117.698L7.91 7.586a1 1 0 11-.814-.581l1.997-2.796a.5.5 0 01.698-.116z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2.069 12.968a7 7 0 119.863 0A12.962 12.962 0 007 12c-1.746 0-3.41.344-4.931.968zm9.582-1.177a6 6 0 10-9.301 0A13.98 13.98 0 017 11c1.629 0 3.194.279 4.65.791z",
			fill: color
		}));
	});
	TimerIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.5 4.5a.5.5 0 00-1 0v2.634a1 1 0 101 0V4.5z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M5.5.5A.5.5 0 016 0h2a.5.5 0 010 1h-.5v1.02a5.973 5.973 0 013.374 1.398l.772-.772a.5.5 0 01.708.708l-.772.772A6 6 0 116.5 2.02V1H6a.5.5 0 01-.5-.5zM7 3a5 5 0 100 10A5 5 0 007 3z",
			fill: color
		}));
	});
	HomeIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7.354 1.146l5.5 5.5a.5.5 0 01-.708.708L12 7.207V12.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V9H6v3.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V7.207l-.146.147a.5.5 0 11-.708-.708l1-1 4.5-4.5a.5.5 0 01.708 0zM3 6.207V12h2V8.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V12h2V6.207l-4-4-4 4z",
			fill: color
		}));
	});
	AdminIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1.213 4.094a.5.5 0 01.056-.034l5.484-2.995a.498.498 0 01.494 0L12.73 4.06a.507.507 0 01.266.389.498.498 0 01-.507.555H1.51a.5.5 0 01-.297-.91zm2.246-.09h7.082L7 2.07 3.459 4.004z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM11 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM5.75 5.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM8.75 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM1.5 12.504a.5.5 0 01.5-.5h10a.5.5 0 010 1H2a.5.5 0 01-.5-.5z",
			fill: color
		}));
	});
	DirectionIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", { clipPath: "url(#prefix__clip0_1107_3594)" }, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M11.451.537l.01 12.922L7.61 8.946a1.078 1.078 0 00-.731-.374L.965 8.087 11.45.537z",
			stroke: color,
			strokeWidth: 1.077
		})), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_1107_3594" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
	UserIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM2.671 11.155c.696-1.006 2.602-1.816 3.194-1.91.226-.036.232-.658.232-.658s-.665-.658-.81-1.544c-.39 0-.63-.94-.241-1.272a2.578 2.578 0 00-.012-.13c-.066-.607-.28-2.606 1.965-2.606 2.246 0 2.031 2 1.966 2.606l-.012.13c.39.331.149 1.272-.24 1.272-.146.886-.81 1.544-.81 1.544s.004.622.23.658c.593.094 2.5.904 3.195 1.91a6 6 0 10-8.657 0z",
			fill: color
		}));
	});
	UserAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7.275 13.16a11.388 11.388 0 005.175-1.232v-.25c0-1.566-3.237-2.994-4.104-3.132-.27-.043-.276-.783-.276-.783s.791-.783.964-1.836c.463 0 .75-1.119.286-1.513C9.34 4 9.916 1.16 6.997 1.16c-2.92 0-2.343 2.84-2.324 3.254-.463.394-.177 1.513.287 1.513.172 1.053.963 1.836.963 1.836s-.006.74-.275.783c-.858.136-4.036 1.536-4.103 3.082a11.388 11.388 0 005.73 1.532z",
			fill: color
		}));
	});
	UserAddIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M1.183 11.906a10.645 10.645 0 01-1.181-.589c.062-1.439 3.02-2.74 3.818-2.868.25-.04.256-.728.256-.728s-.736-.729-.896-1.709c-.432 0-.698-1.041-.267-1.408A2.853 2.853 0 002.9 4.46c-.072-.672-.31-2.884 2.175-2.884 2.486 0 2.248 2.212 2.176 2.884-.007.062-.012.112-.014.144.432.367.165 1.408-.266 1.408-.16.98-.896 1.709-.896 1.709s.005.688.256.728c.807.129 3.82 1.457 3.82 2.915v.233a10.598 10.598 0 01-4.816 1.146c-1.441 0-2.838-.282-4.152-.837zM11.5 2.16a.5.5 0 01.5.5v1.5h1.5a.5.5 0 010 1H12v1.5a.5.5 0 01-1 0v-1.5H9.5a.5.5 0 110-1H11v-1.5a.5.5 0 01.5-.5z",
			fill: color
		}));
	});
	UsersIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M9.21 11.623a10.586 10.586 0 01-4.031.787A10.585 10.585 0 010 11.07c.06-1.354 2.933-2.578 3.708-2.697.243-.038.249-.685.249-.685s-.715-.685-.87-1.607c-.42 0-.679-.979-.26-1.323a2.589 2.589 0 00-.013-.136c-.07-.632-.3-2.712 2.113-2.712 2.414 0 2.183 2.08 2.113 2.712-.007.059-.012.105-.013.136.419.344.16 1.323-.259 1.323-.156.922-.87 1.607-.87 1.607s.005.647.248.685c.784.12 3.71 1.37 3.71 2.74v.22c-.212.103-.427.2-.646.29z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M8.81 8.417a9.643 9.643 0 00-.736-.398c.61-.42 1.396-.71 1.7-.757.167-.026.171-.471.171-.471s-.491-.471-.598-1.104c-.288 0-.466-.674-.178-.91-.001-.022-.005-.053-.01-.094-.048-.434-.206-1.864 1.453-1.864 1.66 0 1.5 1.43 1.453 1.864l-.01.094c.289.236.11.91-.178.91-.107.633-.598 1.104-.598 1.104s.004.445.171.47c.539.084 2.55.942 2.55 1.884v.628a10.604 10.604 0 01-3.302.553 2.974 2.974 0 00-.576-.879c-.375-.408-.853-.754-1.312-1.03z",
			fill: color
		}));
	});
	ProfileIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M9.106 7.354c-.627.265-1.295.4-1.983.4a5.062 5.062 0 01-2.547-.681c.03-.688 1.443-1.31 1.824-1.37.12-.02.122-.348.122-.348s-.351-.348-.428-.816c-.206 0-.333-.498-.127-.673 0-.016-.003-.04-.007-.07C5.926 3.477 5.812 2.42 7 2.42c1.187 0 1.073 1.057 1.039 1.378l-.007.069c.207.175.08.673-.127.673-.076.468-.428.816-.428.816s.003.329.122.348c.386.06 1.825.696 1.825 1.392v.111c-.104.053-.21.102-.318.148zM3.75 11.25A.25.25 0 014 11h6a.25.25 0 110 .5H4a.25.25 0 01-.25-.25zM4 9a.25.25 0 000 .5h6a.25.25 0 100-.5H4z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1 .5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V.5zM2 13V1h10v12H2z",
			fill: color
		}));
	});
	FaceHappyIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.968 8.75a.5.5 0 00-.866.5A4.498 4.498 0 007 11.5c1.666 0 3.12-.906 3.898-2.25a.5.5 0 10-.866-.5A3.498 3.498 0 017 10.5a3.498 3.498 0 01-3.032-1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
			fill: color
		}));
	});
	FaceNeutralIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M4.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
			fill: color
		}));
	});
	FaceSadIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.968 10.25a.5.5 0 01-.866-.5A4.498 4.498 0 017 7.5c1.666 0 3.12.906 3.898 2.25a.5.5 0 11-.866.5A3.498 3.498 0 007 8.5a3.498 3.498 0 00-3.032 1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
			fill: color
		}));
	});
	AccessibilityIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			d: "M7 4.5a1 1 0 100-2 1 1 0 000 2z",
			fill: color
		}), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
			fill: color
		}));
	});
	AccessibilityAltIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M7 14A7 7 0 107 0a7 7 0 000 14zM8 3.5a1 1 0 11-2 0 1 1 0 012 0zM3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
			fill: color
		}));
	});
	AccessibilityIgnoredIcon = /* @__PURE__ */ import_react$2.forwardRef(({ color = "currentColor", size = 14, ...props }, forwardedRef) => {
		return /* @__PURE__ */ import_react$2.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg",
			ref: forwardedRef,
			...props
		}, /* @__PURE__ */ import_react$2.createElement("g", {
			clipPath: "url(#prefix__clip0_2359_558)",
			fill: color
		}, /* @__PURE__ */ import_react$2.createElement("path", { d: "M7.636 13.972a7 7 0 116.335-6.335c-.28-.34-.609-.637-.976-.883a6 6 0 10-6.24 6.241c.245.367.542.696.881.977z" }), /* @__PURE__ */ import_react$2.createElement("path", { d: "M7.511 7.136a4.489 4.489 0 00-1.478 3.915l-.086.173a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01.316-.948l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243c0 .105.004.21.011.316z" }), /* @__PURE__ */ import_react$2.createElement("path", { d: "M8 3.5a1 1 0 11-2 0 1 1 0 012 0z" }), /* @__PURE__ */ import_react$2.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M14 10.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-5.5 0A.5.5 0 019 10h3a.5.5 0 010 1H9a.5.5 0 01-.5-.5z"
		})), /* @__PURE__ */ import_react$2.createElement("defs", null, /* @__PURE__ */ import_react$2.createElement("clipPath", { id: "prefix__clip0_2359_558" }, /* @__PURE__ */ import_react$2.createElement("path", {
			fill: "#fff",
			d: "M0 0h14v14H0z"
		}))));
	});
}));
//#endregion
//#region ../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function setRef(ref, value) {
	if (typeof ref === "function") return ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
function composeRefs(...refs) {
	return (node) => {
		let hasCleanup = false;
		const cleanups = refs.map((ref) => {
			const cleanup = setRef(ref, node);
			if (!hasCleanup && typeof cleanup == "function") hasCleanup = true;
			return cleanup;
		});
		if (hasCleanup) return () => {
			for (let i = 0; i < cleanups.length; i++) {
				const cleanup = cleanups[i];
				if (typeof cleanup == "function") cleanup();
				else setRef(refs[i], null);
			}
		};
	};
}
function useComposedRefs(...refs) {
	return import_react$1.useCallback(composeRefs(...refs), refs);
}
var import_react$1;
var init_dist$3 = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/@radix-ui/react-slot/dist/index.mjs
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
	const Slot2 = import_react.forwardRef((props, forwardedRef) => {
		let { children, ...slotProps } = props;
		let slottableElement = null;
		let hasSlottable = false;
		const newChildren = [];
		if (isLazyComponent(children) && typeof use === "function") children = use(children._payload);
		import_react.Children.forEach(children, (maybeSlottable) => {
			if (isSlottable(maybeSlottable)) {
				hasSlottable = true;
				const slottable = maybeSlottable;
				let child = "child" in slottable.props ? slottable.props.child : slottable.props.children;
				if (isLazyComponent(child) && typeof use === "function") child = use(child._payload);
				slottableElement = getSlottableElementFromSlottable(slottable, child);
				newChildren.push(slottableElement?.props?.children);
			} else newChildren.push(maybeSlottable);
		});
		if (slottableElement) slottableElement = import_react.cloneElement(slottableElement, void 0, newChildren);
		else if (!hasSlottable && import_react.Children.count(children) === 1 && import_react.isValidElement(children)) slottableElement = children;
		const slottableElementRef = slottableElement ? getElementRef(slottableElement) : void 0;
		const composedRef = useComposedRefs(forwardedRef, slottableElementRef);
		if (!slottableElement) {
			if (children || children === 0) throw new Error(hasSlottable ? createSlottableError(ownerName) : createSlotError(ownerName));
			return children;
		}
		const mergedProps = mergeProps(slotProps, slottableElement.props ?? {});
		if (slottableElement.type !== import_react.Fragment) mergedProps.ref = forwardedRef ? composedRef : slottableElementRef;
		return import_react.cloneElement(slottableElement, mergedProps);
	});
	Slot2.displayName = `${ownerName}.Slot`;
	return Slot2;
}
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				const result = childPropValue(...args);
				slotPropValue(...args);
				return result;
			};
			else if (slotPropValue) overrideProps[propName] = slotPropValue;
		} else if (propName === "style") overrideProps[propName] = {
			...slotPropValue,
			...childPropValue
		};
		else if (propName === "className") overrideProps[propName] = [slotPropValue, childPropValue].filter(Boolean).join(" ");
	}
	return {
		...slotProps,
		...overrideProps
	};
}
function getElementRef(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
function isSlottable(child) {
	return import_react.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function isLazyComponent(element) {
	return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
function isPromiseLike(value) {
	return typeof value === "object" && value !== null && "then" in value;
}
var import_react, Slot, SLOTTABLE_IDENTIFIER, getSlottableElementFromSlottable, REACT_LAZY_TYPE, createSlotError, createSlottableError, use;
var init_dist$2 = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$3();
	Slot = /* @__PURE__ */ createSlot("Slot");
	SLOTTABLE_IDENTIFIER = Symbol.for("radix.slottable");
	getSlottableElementFromSlottable = (slottable, child) => {
		if ("child" in slottable.props) {
			const child2 = slottable.props.child;
			if (!import_react.isValidElement(child2)) return null;
			return import_react.cloneElement(child2, void 0, slottable.props.children(child2.props.children));
		}
		return import_react.isValidElement(child) ? child : null;
	};
	REACT_LAZY_TYPE = Symbol.for("react.lazy");
	createSlotError = (ownerName) => {
		return `${ownerName} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`;
	};
	createSlottableError = (ownerName) => {
		return `${ownerName} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`;
	};
	use = import_react[" use ".trim().toString()];
}));
//#endregion
//#region ../../node_modules/@preact/signals-core/dist/signals-core.module.js
function t() {
	if (!(s$1 > 1)) {
		var i, t = !1;
		(function() {
			var i = c$1;
			c$1 = void 0;
			while (void 0 !== i) {
				if (i.S.v === i.v) i.S.i = i.i;
				i = i.o;
			}
		})();
		while (void 0 !== h) {
			var n = h;
			h = void 0;
			v$1++;
			while (void 0 !== n) {
				var r = n.u;
				n.u = void 0;
				n.f &= -3;
				if (!(8 & n.f) && w$1(n)) try {
					n.c();
				} catch (n) {
					if (!t) {
						i = n;
						t = !0;
					}
				}
				n = r;
			}
		}
		v$1 = 0;
		s$1--;
		if (t) throw i;
	} else s$1--;
}
function n$1(i) {
	if (s$1 > 0) return i();
	e = ++u$1;
	s$1++;
	try {
		return i();
	} finally {
		t();
	}
}
function o$1(i) {
	var t = r$1;
	r$1 = void 0;
	try {
		return i();
	} finally {
		r$1 = t;
	}
}
function a$1(i) {
	if (void 0 !== r$1) {
		var t = i.n;
		if (void 0 === t || t.t !== r$1) {
			t = {
				i: 0,
				S: i,
				p: r$1.s,
				n: void 0,
				t: r$1,
				e: void 0,
				x: void 0,
				r: t
			};
			if (void 0 !== r$1.s) r$1.s.n = t;
			r$1.s = t;
			i.n = t;
			if (32 & r$1.f) i.S(t);
			return t;
		} else if (-1 === t.i) {
			t.i = 0;
			if (void 0 !== t.n) {
				t.n.p = t.p;
				if (void 0 !== t.p) t.p.n = t.n;
				t.p = r$1.s;
				t.n = void 0;
				r$1.s.n = t;
				r$1.s = t;
			}
			return t;
		}
	}
}
function l$1(i, t) {
	this.v = i;
	this.i = 0;
	this.n = void 0;
	this.t = void 0;
	this.l = 0;
	this.W = null == t ? void 0 : t.watched;
	this.Z = null == t ? void 0 : t.unwatched;
	this.name = null == t ? void 0 : t.name;
}
function y$1(i, t) {
	return new l$1(i, t);
}
function w$1(i) {
	for (var t = i.s; void 0 !== t; t = t.n) if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
	return !1;
}
function _(i) {
	for (var t = i.s; void 0 !== t; t = t.n) {
		var n = t.S.n;
		if (void 0 !== n) t.r = n;
		t.S.n = t;
		t.i = -1;
		if (void 0 === t.n) {
			i.s = t;
			break;
		}
	}
}
function b$1(i) {
	var t = i.s, n = void 0;
	while (void 0 !== t) {
		var r = t.p;
		if (-1 === t.i) {
			t.S.U(t);
			if (void 0 !== r) r.n = t.n;
			if (void 0 !== t.n) t.n.p = r;
		} else n = t;
		t.S.n = t.r;
		if (void 0 !== t.r) t.r = void 0;
		t = r;
	}
	i.s = n;
}
function p$1(i, t) {
	l$1.call(this, void 0);
	this.x = i;
	this.s = void 0;
	this.g = d$1 - 1;
	this.f = 4;
	this.W = null == t ? void 0 : t.watched;
	this.Z = null == t ? void 0 : t.unwatched;
	this.name = null == t ? void 0 : t.name;
}
function g$1(i, t) {
	return new p$1(i, t);
}
function S(i) {
	var n = i.m;
	i.m = void 0;
	if ("function" == typeof n) {
		s$1++;
		var o = r$1;
		r$1 = void 0;
		try {
			n();
		} catch (t) {
			i.f &= -2;
			i.f |= 8;
			m$1(i);
			throw t;
		} finally {
			r$1 = o;
			t();
		}
	}
}
function m$1(i) {
	for (var t = i.s; void 0 !== t; t = t.n) t.S.U(t);
	i.x = void 0;
	i.s = void 0;
	S(i);
}
function x(i) {
	if (r$1 !== this) throw new Error("Out-of-order effect");
	b$1(this);
	r$1 = i;
	this.f &= -2;
	if (8 & this.f) m$1(this);
	t();
}
function E(i, t) {
	this.x = i;
	this.m = void 0;
	this.s = void 0;
	this.u = void 0;
	this.f = 32;
	this.name = null == t ? void 0 : t.name;
	if (f$1) f$1.push(this);
}
function j(i, t) {
	var n = new E(i, t);
	try {
		n.c();
	} catch (i) {
		n.d();
		throw i;
	}
	var r = n.d.bind(n);
	r[Symbol.dispose] = r;
	return r;
}
var i$1, r$1, f$1, h, s$1, v$1, u$1, e, c$1, d$1;
var init_signals_core_module = __esmMin((() => {
	i$1 = Symbol.for("preact-signals");
	r$1 = void 0;
	h = void 0;
	s$1 = 0;
	v$1 = 0;
	u$1 = 0;
	e = 0;
	c$1 = void 0;
	d$1 = 0;
	l$1.prototype.brand = i$1;
	l$1.prototype.h = function() {
		return !0;
	};
	l$1.prototype.S = function(i) {
		var t = this, n = this.t;
		if (n !== i && void 0 === i.e) {
			i.x = n;
			this.t = i;
			if (void 0 !== n) n.e = i;
			else o$1(function() {
				var i;
				null == (i = t.W) || i.call(t);
			});
		}
	};
	l$1.prototype.U = function(i) {
		var t = this;
		if (void 0 !== this.t) {
			var n = i.e, r = i.x;
			if (void 0 !== n) {
				n.x = r;
				i.e = void 0;
			}
			if (void 0 !== r) {
				r.e = n;
				i.x = void 0;
			}
			if (i === this.t) {
				this.t = r;
				if (void 0 === r) o$1(function() {
					var i;
					null == (i = t.Z) || i.call(t);
				});
			}
		}
	};
	l$1.prototype.subscribe = function(i) {
		var t = this;
		return j(function() {
			var n = t.value, o = r$1;
			r$1 = void 0;
			try {
				i(n);
			} finally {
				r$1 = o;
			}
		}, { name: "sub" });
	};
	l$1.prototype.valueOf = function() {
		return this.value;
	};
	l$1.prototype.toString = function() {
		return this.value + "";
	};
	l$1.prototype.toJSON = function() {
		return this.value;
	};
	l$1.prototype.peek = function() {
		var i = this;
		return o$1(function() {
			return i.value;
		});
	};
	Object.defineProperty(l$1.prototype, "value", {
		get: function() {
			var i = a$1(this);
			if (void 0 !== i) i.i = this.i;
			return this.v;
		},
		set: function(i) {
			if (i !== this.v) {
				if (v$1 > 100) throw new Error("Cycle detected");
				(function(i) {
					if (0 !== s$1 && 0 === v$1) {
						if (i.l !== e) {
							i.l = e;
							c$1 = {
								S: i,
								v: i.v,
								i: i.i,
								o: c$1
							};
						}
					}
				})(this);
				this.v = i;
				this.i++;
				d$1++;
				s$1++;
				try {
					for (var n = this.t; void 0 !== n; n = n.x) n.t.N();
				} finally {
					t();
				}
			}
		}
	});
	p$1.prototype = new l$1();
	p$1.prototype.h = function() {
		this.f &= -3;
		if (1 & this.f) return !1;
		if (32 == (36 & this.f)) return !0;
		this.f &= -5;
		if (this.g === d$1) return !0;
		this.g = d$1;
		this.f |= 1;
		if (this.i > 0 && !w$1(this)) {
			this.f &= -2;
			return !0;
		}
		var i = r$1;
		try {
			_(this);
			r$1 = this;
			var t = this.x();
			if (16 & this.f || this.v !== t || 0 === this.i) {
				this.v = t;
				this.f &= -17;
				this.i++;
			}
		} catch (i) {
			this.v = i;
			this.f |= 16;
			this.i++;
		}
		r$1 = i;
		b$1(this);
		this.f &= -2;
		return !0;
	};
	p$1.prototype.S = function(i) {
		if (void 0 === this.t) {
			this.f |= 36;
			for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t);
		}
		l$1.prototype.S.call(this, i);
	};
	p$1.prototype.U = function(i) {
		if (void 0 !== this.t) {
			l$1.prototype.U.call(this, i);
			if (void 0 === this.t) {
				this.f &= -33;
				for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t);
			}
		}
	};
	p$1.prototype.N = function() {
		if (!(2 & this.f)) {
			this.f |= 6;
			for (var i = this.t; void 0 !== i; i = i.x) i.t.N();
		}
	};
	Object.defineProperty(p$1.prototype, "value", { get: function() {
		if (1 & this.f) throw new Error("Cycle detected");
		var i = a$1(this);
		this.h();
		if (void 0 !== i) i.i = this.i;
		if (16 & this.f) throw this.v;
		return this.v;
	} });
	E.prototype.c = function() {
		var i = this.S();
		try {
			if (8 & this.f) return;
			if (void 0 === this.x) return;
			var t = this.x();
			if ("function" == typeof t) this.m = t;
		} finally {
			i();
		}
	};
	E.prototype.S = function() {
		if (1 & this.f) throw new Error("Cycle detected");
		this.f |= 1;
		this.f &= -9;
		S(this);
		_(this);
		s$1++;
		var i = r$1;
		r$1 = this;
		return x.bind(this, i);
	};
	E.prototype.N = function() {
		if (!(2 & this.f)) {
			this.f |= 2;
			this.u = h;
			h = this;
		}
	};
	E.prototype.d = function() {
		this.f |= 8;
		if (!(1 & this.f)) m$1(this);
	};
	E.prototype.dispose = function() {
		this.d();
	};
}));
//#endregion
//#region ../../node_modules/deepsignal/core/dist/deepsignal-core.module.js
var n, a, o, s, u, f, c, i, l, g, p, v, y, w, d, b, m, R;
var init_deepsignal_core_module = __esmMin((() => {
	init_signals_core_module();
	n = /* @__PURE__ */ new WeakMap();
	a = /* @__PURE__ */ new WeakMap();
	o = /* @__PURE__ */ new WeakMap();
	s = /* @__PURE__ */ new WeakSet();
	u = /* @__PURE__ */ new WeakMap();
	f = /^\$/;
	c = Object.getOwnPropertyDescriptor;
	i = !1;
	l = function(e) {
		if (!R(e)) throw new Error("This object can't be observed.");
		return a.has(e) || a.set(e, p(e, w)), a.get(e);
	};
	g = function(e, t) {
		i = !0;
		var r = e[t];
		try {
			i = !1;
		} catch (e) {}
		return r;
	};
	p = function(e, t) {
		var r = new Proxy(e, t);
		return s.add(r), r;
	};
	v = function() {
		throw new Error("Don't mutate the signals directly.");
	};
	y = function(e) {
		return function(s, u, l) {
			var g;
			if (i) return Reflect.get(s, u, l);
			var h = e || "$" === u[0];
			if (!e && h && Array.isArray(s)) {
				if ("$" === u) return o.has(s) || o.set(s, p(s, d)), o.get(s);
				h = "$length" === u;
			}
			n.has(l) || n.set(l, /* @__PURE__ */ new Map());
			var v = n.get(l), y = h ? u.replace(f, "") : u;
			if (v.has(y) || "function" != typeof (null == (g = c(s, y)) ? void 0 : g.get)) {
				var m = Reflect.get(s, y, l);
				if (h && "function" == typeof m) return;
				if ("symbol" == typeof y && b.has(y)) return m;
				v.has(y) || (R(m) && (a.has(m) || a.set(m, p(m, w)), m = a.get(m)), v.set(y, y$1(m)));
			} else v.set(y, g$1(function() {
				return Reflect.get(s, y, l);
			}));
			return h ? v.get(y) : v.get(y).value;
		};
	};
	w = {
		get: y(!1),
		set: function(r, o, s, i) {
			var l;
			if ("function" == typeof (null == (l = c(r, o)) ? void 0 : l.set)) return Reflect.set(r, o, s, i);
			n.has(i) || n.set(i, /* @__PURE__ */ new Map());
			var g = n.get(i);
			if ("$" === o[0]) {
				s instanceof l$1 || v();
				var h = o.replace(f, "");
				return g.set(h, s), Reflect.set(r, h, s.peek(), i);
			}
			var y = s;
			R(s) && (a.has(s) || a.set(s, p(s, w)), y = a.get(s));
			var d = !(o in r), b = Reflect.set(r, o, s, i);
			return g.has(o) ? g.get(o).value = y : g.set(o, y$1(y)), d && u.has(r) && u.get(r).value++, Array.isArray(r) && g.has("length") && (g.get("length").value = r.length), b;
		},
		deleteProperty: function(e, t) {
			"$" === t[0] && v();
			var r = n.get(a.get(e)), o = Reflect.deleteProperty(e, t);
			return r && r.has(t) && (r.get(t).value = void 0), u.has(e) && u.get(e).value++, o;
		},
		ownKeys: function(e) {
			return u.has(e) || u.set(e, y$1(0)), u._ = u.get(e).value, Reflect.ownKeys(e);
		}
	};
	d = {
		get: y(!0),
		set: v,
		deleteProperty: v
	};
	b = new Set(Object.getOwnPropertyNames(Symbol).map(function(e) {
		return Symbol[e];
	}).filter(function(e) {
		return "symbol" == typeof e;
	}));
	m = /* @__PURE__ */ new Set([Object, Array]);
	R = function(e) {
		return "object" == typeof e && null !== e && m.has(e.constructor) && !s.has(e);
	};
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
//#region ../../node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var deselectCurrent = require_toggle_selection();
	var clipboardToIE11Formatting = {
		"text/plain": "Text",
		"text/html": "Url",
		"default": "Text"
	};
	var defaultMessage = "Copy to clipboard: #{key}, Enter";
	function format(message) {
		var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
		return message.replace(/#{\s*key\s*}/g, copyKey);
	}
	function copy(text, options) {
		var debug, message, reselectPrevious, range, selection, mark, success = false;
		if (!options) options = {};
		debug = options.debug || false;
		try {
			reselectPrevious = deselectCurrent();
			range = document.createRange();
			selection = document.getSelection();
			mark = document.createElement("span");
			mark.textContent = text;
			mark.ariaHidden = "true";
			mark.style.all = "unset";
			mark.style.position = "fixed";
			mark.style.top = 0;
			mark.style.clip = "rect(0, 0, 0, 0)";
			mark.style.whiteSpace = "pre";
			mark.style.webkitUserSelect = "text";
			mark.style.MozUserSelect = "text";
			mark.style.msUserSelect = "text";
			mark.style.userSelect = "text";
			mark.addEventListener("copy", function(e) {
				e.stopPropagation();
				if (options.format) {
					e.preventDefault();
					if (typeof e.clipboardData === "undefined") {
						debug && console.warn("unable to use e.clipboardData");
						debug && console.warn("trying IE specific stuff");
						window.clipboardData.clearData();
						var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
						window.clipboardData.setData(format, text);
					} else {
						e.clipboardData.clearData();
						e.clipboardData.setData(options.format, text);
					}
				}
				if (options.onCopy) {
					e.preventDefault();
					options.onCopy(e.clipboardData);
				}
			});
			document.body.appendChild(mark);
			range.selectNodeContents(mark);
			selection.addRange(range);
			if (!document.execCommand("copy")) throw new Error("copy command was unsuccessful");
			success = true;
		} catch (err) {
			debug && console.error("unable to copy using execCommand: ", err);
			debug && console.warn("trying IE specific stuff");
			try {
				window.clipboardData.setData(options.format || "text", text);
				options.onCopy && options.onCopy(window.clipboardData);
				success = true;
			} catch (err) {
				debug && console.error("unable to copy using clipboardData: ", err);
				debug && console.error("falling back to prompt");
				message = format("message" in options ? options.message : defaultMessage);
				window.prompt(message, text);
			}
		} finally {
			if (selection) if (typeof selection.removeRange == "function") selection.removeRange(range);
			else selection.removeAllRanges();
			if (mark) document.body.removeChild(mark);
			reselectPrevious();
		}
		return success;
	}
	module.exports = copy;
}));
//#endregion
//#region ../../node_modules/@remix-run/router/dist/router.js
/**
* @remix-run/router v1.8.0
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function _extends() {
	_extends = Object.assign ? Object.assign.bind() : function(target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
		}
		return target;
	};
	return _extends.apply(this, arguments);
}
/**
* Memory history stores the current location in memory. It is designed for use
* in stateful non-browser environments like tests and React Native.
*/
function createMemoryHistory(options) {
	if (options === void 0) options = {};
	let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
	let entries;
	entries = initialEntries.map((entry, index) => createMemoryLocation(entry, typeof entry === "string" ? null : entry.state, index === 0 ? "default" : void 0));
	let index = clampIndex(initialIndex == null ? entries.length - 1 : initialIndex);
	let action = Action.Pop;
	let listener = null;
	function clampIndex(n) {
		return Math.min(Math.max(n, 0), entries.length - 1);
	}
	function getCurrentLocation() {
		return entries[index];
	}
	function createMemoryLocation(to, state, key) {
		if (state === void 0) state = null;
		let location = createLocation(entries ? getCurrentLocation().pathname : "/", to, state, key);
		warning(location.pathname.charAt(0) === "/", "relative pathnames are not supported in memory history: " + JSON.stringify(to));
		return location;
	}
	function createHref(to) {
		return typeof to === "string" ? to : createPath(to);
	}
	return {
		get index() {
			return index;
		},
		get action() {
			return action;
		},
		get location() {
			return getCurrentLocation();
		},
		createHref,
		createURL(to) {
			return new URL(createHref(to), "http://localhost");
		},
		encodeLocation(to) {
			let path = typeof to === "string" ? parsePath(to) : to;
			return {
				pathname: path.pathname || "",
				search: path.search || "",
				hash: path.hash || ""
			};
		},
		push(to, state) {
			action = Action.Push;
			let nextLocation = createMemoryLocation(to, state);
			index += 1;
			entries.splice(index, entries.length, nextLocation);
			if (v5Compat && listener) listener({
				action,
				location: nextLocation,
				delta: 1
			});
		},
		replace(to, state) {
			action = Action.Replace;
			let nextLocation = createMemoryLocation(to, state);
			entries[index] = nextLocation;
			if (v5Compat && listener) listener({
				action,
				location: nextLocation,
				delta: 0
			});
		},
		go(delta) {
			action = Action.Pop;
			let nextIndex = clampIndex(index + delta);
			let nextLocation = entries[nextIndex];
			index = nextIndex;
			if (listener) listener({
				action,
				location: nextLocation,
				delta
			});
		},
		listen(fn) {
			listener = fn;
			return () => {
				listener = null;
			};
		}
	};
}
/**
* Browser history stores the location in regular URLs. This is the standard for
* most web apps, but it requires some configuration on the server to ensure you
* serve the same app at multiple URLs.
*
* @see https://github.com/remix-run/history/tree/main/docs/api-reference.md#createbrowserhistory
*/
function createBrowserHistory(options) {
	if (options === void 0) options = {};
	function createBrowserLocation(window, globalHistory) {
		let { pathname, search, hash } = window.location;
		return createLocation("", {
			pathname,
			search,
			hash
		}, globalHistory.state && globalHistory.state.usr || null, globalHistory.state && globalHistory.state.key || "default");
	}
	function createBrowserHref(window, to) {
		return typeof to === "string" ? to : createPath(to);
	}
	return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant(value, message) {
	if (value === false || value === null || typeof value === "undefined") throw new Error(message);
}
function warning(cond, message) {
	if (!cond) {
		if (typeof console !== "undefined") console.warn(message);
		try {
			throw new Error(message);
		} catch (e) {}
	}
}
function createKey() {
	return Math.random().toString(36).substr(2, 8);
}
/**
* For browser-based histories, we combine the state and key into an object
*/
function getHistoryState(location, index) {
	return {
		usr: location.state,
		key: location.key,
		idx: index
	};
}
/**
* Creates a Location object with a unique key from the given Path
*/
function createLocation(current, to, state, key) {
	if (state === void 0) state = null;
	return _extends({
		pathname: typeof current === "string" ? current : current.pathname,
		search: "",
		hash: ""
	}, typeof to === "string" ? parsePath(to) : to, {
		state,
		key: to && to.key || key || createKey()
	});
}
/**
* Creates a string URL path from the given pathname, search, and hash components.
*/
function createPath(_ref) {
	let { pathname = "/", search = "", hash = "" } = _ref;
	if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
	if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
	return pathname;
}
/**
* Parses a string URL path into its separate pathname, search, and hash components.
*/
function parsePath(path) {
	let parsedPath = {};
	if (path) {
		let hashIndex = path.indexOf("#");
		if (hashIndex >= 0) {
			parsedPath.hash = path.substr(hashIndex);
			path = path.substr(0, hashIndex);
		}
		let searchIndex = path.indexOf("?");
		if (searchIndex >= 0) {
			parsedPath.search = path.substr(searchIndex);
			path = path.substr(0, searchIndex);
		}
		if (path) parsedPath.pathname = path;
	}
	return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
	if (options === void 0) options = {};
	let { window = document.defaultView, v5Compat = false } = options;
	let globalHistory = window.history;
	let action = Action.Pop;
	let listener = null;
	let index = getIndex();
	if (index == null) {
		index = 0;
		globalHistory.replaceState(_extends({}, globalHistory.state, { idx: index }), "");
	}
	function getIndex() {
		return (globalHistory.state || { idx: null }).idx;
	}
	function handlePop() {
		action = Action.Pop;
		let nextIndex = getIndex();
		let delta = nextIndex == null ? null : nextIndex - index;
		index = nextIndex;
		if (listener) listener({
			action,
			location: history.location,
			delta
		});
	}
	function push(to, state) {
		action = Action.Push;
		let location = createLocation(history.location, to, state);
		if (validateLocation) validateLocation(location, to);
		index = getIndex() + 1;
		let historyState = getHistoryState(location, index);
		let url = history.createHref(location);
		try {
			globalHistory.pushState(historyState, "", url);
		} catch (error) {
			if (error instanceof DOMException && error.name === "DataCloneError") throw error;
			window.location.assign(url);
		}
		if (v5Compat && listener) listener({
			action,
			location: history.location,
			delta: 1
		});
	}
	function replace(to, state) {
		action = Action.Replace;
		let location = createLocation(history.location, to, state);
		if (validateLocation) validateLocation(location, to);
		index = getIndex();
		let historyState = getHistoryState(location, index);
		let url = history.createHref(location);
		globalHistory.replaceState(historyState, "", url);
		if (v5Compat && listener) listener({
			action,
			location: history.location,
			delta: 0
		});
	}
	function createURL(to) {
		let base = window.location.origin !== "null" ? window.location.origin : window.location.href;
		let href = typeof to === "string" ? to : createPath(to);
		invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
		return new URL(href, base);
	}
	let history = {
		get action() {
			return action;
		},
		get location() {
			return getLocation(window, globalHistory);
		},
		listen(fn) {
			if (listener) throw new Error("A history only accepts one active listener");
			window.addEventListener(PopStateEventType, handlePop);
			listener = fn;
			return () => {
				window.removeEventListener(PopStateEventType, handlePop);
				listener = null;
			};
		},
		createHref(to) {
			return createHref(window, to);
		},
		createURL,
		encodeLocation(to) {
			let url = createURL(to);
			return {
				pathname: url.pathname,
				search: url.search,
				hash: url.hash
			};
		},
		push,
		replace,
		go(n) {
			return globalHistory.go(n);
		}
	};
	return history;
}
/**
* @private
*/
function stripBasename(pathname, basename) {
	if (basename === "/") return pathname;
	if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) return null;
	let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
	let nextChar = pathname.charAt(startIndex);
	if (nextChar && nextChar !== "/") return null;
	return pathname.slice(startIndex) || "/";
}
/**
* Returns a resolved path object relative to the given pathname.
*
* @see https://reactrouter.com/utils/resolve-path
*/
function resolvePath(to, fromPathname) {
	if (fromPathname === void 0) fromPathname = "/";
	let { pathname: toPathname, search = "", hash = "" } = typeof to === "string" ? parsePath(to) : to;
	return {
		pathname: toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname,
		search: normalizeSearch(search),
		hash: normalizeHash(hash)
	};
}
function resolvePathname(relativePath, fromPathname) {
	let segments = fromPathname.replace(/\/+$/, "").split("/");
	relativePath.split("/").forEach((segment) => {
		if (segment === "..") {
			if (segments.length > 1) segments.pop();
		} else if (segment !== ".") segments.push(segment);
	});
	return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
	return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + "a string in <Link to=\"...\"> and the router will parse it for you.";
}
/**
* @private
*
* When processing relative navigation we want to ignore ancestor routes that
* do not contribute to the path, such that index/pathless layout routes don't
* interfere.
*
* For example, when moving a route element into an index route and/or a
* pathless layout route, relative link behavior contained within should stay
* the same.  Both of the following examples should link back to the root:
*
*   <Route path="/">
*     <Route path="accounts" element={<Link to=".."}>
*   </Route>
*
*   <Route path="/">
*     <Route path="accounts">
*       <Route element={<AccountsLayout />}>       // <-- Does not contribute
*         <Route index element={<Link to=".."} />  // <-- Does not contribute
*       </Route
*     </Route>
*   </Route>
*/
function getPathContributingMatches(matches) {
	return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
/**
* @private
*/
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
	if (isPathRelative === void 0) isPathRelative = false;
	let to;
	if (typeof toArg === "string") to = parsePath(toArg);
	else {
		to = _extends({}, toArg);
		invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
		invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
		invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
	}
	let isEmptyPath = toArg === "" || to.pathname === "";
	let toPathname = isEmptyPath ? "/" : to.pathname;
	let from;
	if (isPathRelative || toPathname == null) from = locationPathname;
	else {
		let routePathnameIndex = routePathnames.length - 1;
		if (toPathname.startsWith("..")) {
			let toSegments = toPathname.split("/");
			while (toSegments[0] === "..") {
				toSegments.shift();
				routePathnameIndex -= 1;
			}
			to.pathname = toSegments.join("/");
		}
		from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
	}
	let path = resolvePath(to, from);
	let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
	let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
	if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) path.pathname += "/";
	return path;
}
var Action, PopStateEventType, ResultType, joinPaths, normalizeSearch, normalizeHash, AbortedDeferredError, validMutationMethodsArr, validRequestMethodsArr;
var init_router = __esmMin((() => {
	(function(Action) {
		/**
		* A POP indicates a change to an arbitrary index in the history stack, such
		* as a back or forward navigation. It does not describe the direction of the
		* navigation, only that the current index changed.
		*
		* Note: This is the default action for newly created history objects.
		*/
		Action["Pop"] = "POP";
		/**
		* A PUSH indicates a new entry being added to the history stack, such as when
		* a link is clicked and a new page loads. When this happens, all subsequent
		* entries in the stack are lost.
		*/
		Action["Push"] = "PUSH";
		/**
		* A REPLACE indicates the entry at the current index in the history stack
		* being replaced by a new one.
		*/
		Action["Replace"] = "REPLACE";
	})(Action || (Action = {}));
	PopStateEventType = "popstate";
	(function(ResultType) {
		ResultType["data"] = "data";
		ResultType["deferred"] = "deferred";
		ResultType["redirect"] = "redirect";
		ResultType["error"] = "error";
	})(ResultType || (ResultType = {}));
	joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
	normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
	normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
	AbortedDeferredError = class extends Error {};
	validMutationMethodsArr = [
		"post",
		"put",
		"patch",
		"delete"
	];
	new Set(validMutationMethodsArr);
	validRequestMethodsArr = ["get", ...validMutationMethodsArr];
	new Set(validRequestMethodsArr);
}));
//#endregion
//#region ../../node_modules/clsx/dist/clsx.mjs
function r(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
var init_clsx = __esmMin((() => {}));
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
//#region ../../node_modules/@react-aria/overlays/dist/import.mjs
var init_import$2 = __esmMin((() => {
	init_ariaHideOutside();
}));
//#endregion
//#region ../../node_modules/@react-stately/overlays/dist/import.mjs
var init_import$1 = __esmMin((() => {
	init_useOverlayTriggerState();
}));
//#endregion
//#region ../../node_modules/@radix-ui/number/dist/index.mjs
function clamp(value, [min, max]) {
	return Math.min(max, Math.max(min, value));
}
var init_dist = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@react-aria/live-announcer/dist/import.mjs
var init_import = __esmMin((() => {
	init_LiveAnnouncer();
}));
//#endregion
//#region ../../node_modules/browser-dtector/browser-dtector.umd.min.js
var require_browser_dtector_umd_min = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/*!
	* @module browser-dtector
	* @description A Javascript library to detect browser, version and platform
	* @version 3.4.0
	* @link https://github.com/sibiraj-s/browser-dtector.git
	* @licence MIT License, https://opensource.org/licenses/MIT
	*/
	(function(e, o) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define(o) : (e = "undefined" != typeof globalThis ? globalThis : e || self).BrowserDetector = o();
	})(exports, (function() {
		"use strict";
		function e(e, o) {
			for (var r = 0; r < o.length; r++) {
				var n = o[r];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, (i = n.key, t = void 0, "symbol" == typeof (t = function(e, o) {
					if ("object" != typeof e || null === e) return e;
					var r = e[Symbol.toPrimitive];
					if (void 0 !== r) {
						var n = r.call(e, o || "default");
						if ("object" != typeof n) return n;
						throw new TypeError("@@toPrimitive must return a primitive value.");
					}
					return ("string" === o ? String : Number)(e);
				}(i, "string")) ? t : String(t)), n);
			}
			var i, t;
		}
		var o = {
			chrome: "Google Chrome",
			brave: "Brave",
			crios: "Google Chrome",
			edge: "Microsoft Edge",
			edg: "Microsoft Edge",
			edgios: "Microsoft Edge",
			fennec: "Mozilla Firefox",
			jsdom: "JsDOM",
			mozilla: "Mozilla Firefox",
			fxios: "Mozilla Firefox",
			msie: "Microsoft Internet Explorer",
			opera: "Opera",
			opios: "Opera",
			opr: "Opera",
			opt: "Opera",
			rv: "Microsoft Internet Explorer",
			safari: "Safari",
			samsungbrowser: "Samsung Browser",
			electron: "Electron"
		}, r = {
			android: "Android",
			androidTablet: "Android Tablet",
			cros: "Chrome OS",
			fennec: "Android Tablet",
			ipad: "IPad",
			iphone: "IPhone",
			jsdom: "JsDOM",
			linux: "Linux",
			mac: "Macintosh",
			tablet: "Android Tablet",
			win: "Windows",
			"windows phone": "Windows Phone",
			xbox: "Microsoft Xbox"
		}, n = function(e) {
			var o = new RegExp("^-?\\d+(?:.\\d{0,".concat(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, "})?")), r = Number(e).toString().match(o);
			return r ? r[0] : null;
		}, i = function() {
			return "undefined" != typeof window ? window.navigator : null;
		};
		return function() {
			function t(e) {
				var o;
				(function(e, o) {
					if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
				})(this, t), this.userAgent = e || (null === (o = i()) || void 0 === o ? void 0 : o.userAgent) || null;
			}
			var a, l, s;
			return a = t, l = [{
				key: "parseUserAgent",
				value: function(e) {
					var t, a, l, s = {}, c = e || this.userAgent || "", d = c.toLowerCase().replace(/\s\s+/g, " "), u = /(edge)\/([\w.]+)/.exec(d) || /(edg)[/]([\w.]+)/.exec(d) || /(opr)[/]([\w.]+)/.exec(d) || /(opt)[/]([\w.]+)/.exec(d) || /(fxios)[/]([\w.]+)/.exec(d) || /(edgios)[/]([\w.]+)/.exec(d) || /(jsdom)[/]([\w.]+)/.exec(d) || /(samsungbrowser)[/]([\w.]+)/.exec(d) || /(electron)[/]([\w.]+)/.exec(d) || /(chrome)[/]([\w.]+)/.exec(d) || /(crios)[/]([\w.]+)/.exec(d) || /(opios)[/]([\w.]+)/.exec(d) || /(version)(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+).*(version)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(applewebkit)[/]([\w.]+).*(safari)[/]([\w.]+)/.exec(d) || /(webkit)[/]([\w.]+)/.exec(d) || /(opera)(?:.*version|)[/]([\w.]+)/.exec(d) || /(msie) ([\w.]+)/.exec(d) || /(fennec)[/]([\w.]+)/.exec(d) || d.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(d) || d.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d) || [], f = /(ipad)/.exec(d) || /(ipod)/.exec(d) || /(iphone)/.exec(d) || /(jsdom)/.exec(d) || /(windows phone)/.exec(d) || /(xbox)/.exec(d) || /(win)/.exec(d) || /(tablet)/.exec(d) || /(android)/.test(d) && !1 === /(mobile)/.test(d) && ["androidTablet"] || /(android)/.exec(d) || /(mac)/.exec(d) || /(linux)/.exec(d) || /(cros)/.exec(d) || [], p = u[5] || u[3] || u[1] || null, w = f[0] || null, x = u[4] || u[2] || null, b = i();
					"chrome" === p && "function" == typeof (null == b || null === (t = b.brave) || void 0 === t ? void 0 : t.isBrave) && (p = "brave"), p && (s[p] = !0), w && (s[w] = !0);
					var v = Boolean(s.tablet || s.android || s.androidTablet), m = Boolean(s.ipad || s.tablet || s.androidTablet), g = Boolean(s.android || s.androidTablet || s.tablet || s.ipad || s.ipod || s.iphone || s["windows phone"]), h = Boolean(s.cros || s.mac || s.linux || s.win), y = Boolean(s.brave || s.chrome || s.crios || s.opr || s.safari || s.edg || s.electron), A = Boolean(s.msie || s.rv);
					return {
						name: null !== (a = o[p]) && void 0 !== a ? a : null,
						platform: null !== (l = r[w]) && void 0 !== l ? l : null,
						userAgent: c,
						version: x,
						shortVersion: x ? n(parseFloat(x), 2) : null,
						isAndroid: v,
						isTablet: m,
						isMobile: g,
						isDesktop: h,
						isWebkit: y,
						isIE: A
					};
				}
			}, {
				key: "getBrowserInfo",
				value: function() {
					var e = this.parseUserAgent();
					return {
						name: e.name,
						platform: e.platform,
						userAgent: e.userAgent,
						version: e.version,
						shortVersion: e.shortVersion
					};
				}
			}], s = [{
				key: "VERSION",
				get: function() {
					return "3.4.0";
				}
			}], l && e(a.prototype, l), s && e(a, s), Object.defineProperty(a, "prototype", { writable: !1 }), t;
		}();
	}));
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}
var init_typeof = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}
var init_toPrimitive = __esmMin((() => {
	init_typeof();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}
var init_toPropertyKey = __esmMin((() => {
	init_typeof();
	init_toPrimitive();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}
var init_defineProperty = __esmMin((() => {
	init_toPropertyKey();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
	if (null == e) return {};
	var o, r, i = _objectWithoutPropertiesLoose(e, t);
	if (Object.getOwnPropertySymbols) {
		var n = Object.getOwnPropertySymbols(e);
		for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
	}
	return i;
}
var init_objectWithoutProperties = __esmMin((() => {
	init_objectWithoutPropertiesLoose();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(r, a) {
	(null == a || a > r.length) && (a = r.length);
	for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
	return n;
}
var init_arrayLikeToArray = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(r) {
	if (Array.isArray(r)) return _arrayLikeToArray(r);
}
var init_arrayWithoutHoles = __esmMin((() => {
	init_arrayLikeToArray();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(r) {
	if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
var init_iterableToArray = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(r, a) {
	if (r) {
		if ("string" == typeof r) return _arrayLikeToArray(r, a);
		var t = {}.toString.call(r).slice(8, -1);
		return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
	}
}
var init_unsupportedIterableToArray = __esmMin((() => {
	init_arrayLikeToArray();
}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
	throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var init_nonIterableSpread = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(r) {
	return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
var init_toConsumableArray = __esmMin((() => {
	init_arrayWithoutHoles();
	init_iterableToArray();
	init_unsupportedIterableToArray();
	init_nonIterableSpread();
}));
//#endregion
export { RefreshIcon as $, resolveTo as A, init_dist$5 as At, j as B, createMemoryHistory as C, init_emotion_element_f0de968e_browser_esm as Ct, invariant as D, init_emotion_cache_browser_esm as Dt, init_router as E, createCache as Et, g as F, init_dist$2 as G, o$1 as H, init_deepsignal_core_module as I, ChevronSmallRightIcon as J, ChevronRightIcon as K, l as L, require_copy_to_clipboard as M, _objectWithoutPropertiesLoose as N, joinPaths as O, _extends$1 as Ot, init_objectWithoutPropertiesLoose as P, LightningOffIcon as Q, g$1 as R, createBrowserHistory as S, ThemeProvider as St, getPathContributingMatches as T, withTheme as Tt, y$1 as U, n$1 as V, Slot as W, CrossIcon as X, CloseIcon as Y, FailedIcon as Z, init_LocalizedStringDictionary as _, css as _t, _defineProperty as a, _wrapNativeSuper as at, AbortedDeferredError as b, keyframes as bt, init_import as c, init_inheritsLoose as ct, init_import$1 as d, init_emotion_styled_browser_esm as dt, dist_exports as et, init_import$2 as f, styled as ft, $a747a10fe70a57da$export$c17fa47878dc55b6 as g, Global as gt, init_LocalizedStringFormatter as h, ClassNames as ht, init_objectWithoutProperties as i, init_deleted as it, stripBasename as j, scope as jt, parsePath as k, init_extends as kt, clamp as l, _assertThisInitialized as lt, $b27c684a33948c64$export$2f817fcdc4b89ae0 as m, isPropValid as mt, init_toConsumableArray as n, init_mjs as nt, init_defineProperty as o, init_wrapNativeSuper as ot, init_dist$1 as p, init_emotion_is_prop_valid_esm as pt, ChevronSmallLeftIcon as q, _objectWithoutProperties as r, deletedDiff as rt, require_browser_dtector_umd_min as s, _inheritsLoose as st, _toConsumableArray as t, init_dist$4 as tt, init_dist as u, init_assertThisInitialized as ut, clsx as v, init_emotion_react_browser_esm as vt, createPath as w, useTheme as wt, Action as x, CacheProvider as xt, init_clsx as y, jsx as yt, init_signals_core_module as z };
