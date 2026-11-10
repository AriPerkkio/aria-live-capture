import { a as __toESM, n as __esmMin, r as __exportAll } from "./globals-runtime-XrdeG17s.js";
import { _ as init_bundle_esm, ct as init_tiny_invariant, dt as isJSON, ft as parse, ht as init_esm, lt as invariant, mt as dedent, pt as stringify, ut as init_dist, v as useResizeObserver } from "./globals-runtime-CzGMgLxl.js";
import { $ as typography, G as init_emotion, W as ignoreSsrWarning, X as lightenColor, Z as color, at as UniversalStore, et as LOOPBACK_HOSTNAMES, n as useCopyButton, nt as matchesHostname, ot as init_universal_store, t as init_useCopyButton, tt as init_local_hosts } from "./globals-runtime-D04kIJv5.js";
import { $ as RefreshIcon, At as init_dist$1, G as init_dist$3, J as ChevronSmallRightIcon, K as ChevronRightIcon, Q as LightningOffIcon, W as Slot, X as CrossIcon, Y as CloseIcon, bt as keyframes, d as init_import$1, f as init_import, ft as styled, jt as scope, mt as isPropValid, q as ChevronSmallLeftIcon, tt as init_dist$2, wt as useTheme } from "./globals-runtime-C8r9nrt8.js";
import { A as init_Item, B as useTransitionState, C as bash_default, D as init_useTabListState, E as init_create_element, G as $f11fb0bcf1b2687a$export$61c6a8c84e605fb6, I as index, L as init_react_textarea_autosize_browser_esm, O as $caeb030f09a278a1$export$4ba071daf4e486, R as init_esm$1, S as init_css, T as createElement$1, V as init_useOverlayTriggerState$1, _ as init_js_extras, a as init_typescript, b as init_graphql, c as tsx_default, ct as require_react, d as init_markdown, f as markdown_default, g as json_default, h as init_json, i as yaml_default, j as $05678f3aee5e7d1a$export$6d08773d2e66f8f2, l as init_markup, m as jsx_default, n as init_prism_light, o as typescript_default, p as init_jsx, r as init_yaml, s as init_tsx, t as SyntaxHighlighter$2, u as markup_default, v as js_extras_default, w as init_bash, x as css_default, y as graphql_default } from "./globals-runtime-DpF3al7J.js";
import { a as $1b6fa05bad3d7740$export$fdf4756d5b8ef90a, r as $7d951241dadd72e4$export$fae0121b5afe572d, rt as $bbaa08b3cd72f041$export$9d1611c77c2fe928, s as $afa781ff67c1cd08$export$fa142eb1681c520, st as $390e54f620492c70$export$f680877a34711e37, t as $83428e53deb13caf$export$773e389e644c5874, tt as $03e8ab2d84d7657a$export$4338b53315abf666 } from "./globals-runtime-Ch22TZ8K.js";
import { A as $5698867baeb53f4e$export$dbc0f175b25fb0fb, I as $58196c8d6a1f38fc$export$1c3ebcada18427bf, M as $77844860df94ba23$export$ea8f71083e90600f, P as $e260d131964da0f9$export$872b660ac5a1ff98, Q as $b3526bc71400be8d$export$d39e1813b3bdd0e1, R as $d7a937236970dc7f$export$c6fdb837b070b4ff, X as $72abaeab4d80592f$export$78efe591171d7d45, rt as $d1116acdf220c2da$export$35a3bebf7ef2d934, st as $535772f9d2c1f38d$export$20e40289641fbbb6, x as $15e7830bf6471d45$export$27c701ed9e449e99 } from "./globals-runtime-DeFA2RfN.js";
import { D as init_useId$1, E as init_Overlay$1, F as init_useObjectRef$1, N as init_useOverlayPosition$1, O as init_PortalProvider$1, R as init_mergeProps$1, T as init_useModalOverlay$1, V as init_FocusScope$1, n as init_useToolbar$1, t as init_useTabList$1, w as init_useOverlay$1, y as init_useInteractOutside$1 } from "./globals-runtime-DUdJ_lLr.js";
import { n as require_react_dom } from "./globals-runtime-DNgiu6EW.js";
import { O as require_memoizerific } from "./globals-runtime-DfPn-YQU.js";
import { d as rgba, l as curriedTransparentize$1, o as curriedDarken$1, s as curriedLighten$1, u as init_polished_esm } from "./globals-runtime-Ci5x8rlg.js";
import { S as $05a50f7d78b03ad9$export$8c610744efcf8a1d, _ as init_Heading, a as $b4f18e3395fe64d7$export$e51a686c67fdaa2d, b as init_Tooltip$1, c as init_Dialog, d as $542a13ca2fa5b484$export$5b6b19405a83ff9d, h as $efe09c6d1c304b50$export$5f1af8db9871e1d6, i as $b4f18e3395fe64d7$export$b2539bed5023c21c, l as $f2ff30fde7b014be$export$2e1e1122cf0cba88, m as init_Text, n as $b4f18e3395fe64d7$export$3d96ec278d3efce4, p as init_Pressable$1, r as $b4f18e3395fe64d7$export$3e41faf802a29e71, s as init_Popover$1, t as init_Tabs, v as $2ec61d1d4f780267$export$a8a3e93435678ff9, w as init_Focusable, x as $05a50f7d78b03ad9$export$28c660c63b792dea } from "./globals-runtime-BGpkQjNy.js";
import { a as Scrollbar, c as init_dist$4, i as Root$2, o as Thumb, r as Corner, s as Viewport } from "./globals-runtime-D9WDjgBY.js";
import { _ as init_preview_errors, a as shortcutToAriaKeyshortcuts, c as isTestEnvironment, h as InvalidChannelPageError, n as useMediaQuery, o as shortcutToHumanString, r as init_manager_api, s as init_animation_utils, t as init_useMedia } from "../globals-runtime.js";
//#region src/channels/main.ts
var isMulti, generateRandomId, Channel;
var init_main = __esmMin((() => {
	isMulti = (args) => {
		return args.transports !== void 0;
	};
	generateRandomId = () => {
		return Math.random().toString(16).slice(2);
	};
	Channel = class {
		constructor(input = {}) {
			this.sender = generateRandomId();
			this.events = {};
			this.data = {};
			this.transports = [];
			this.isAsync = input.async || false;
			if (isMulti(input)) {
				this.transports = input.transports || [];
				this.transports.forEach((t) => {
					t.setHandler((event) => this.handleEvent(event));
				});
			} else this.transports = input.transport ? [input.transport] : [];
			this.transports.forEach((t) => {
				t.setHandler((event) => this.handleEvent(event));
			});
		}
		get hasTransport() {
			return this.transports.length > 0;
		}
		addListener(eventName, listener) {
			this.events[eventName] = this.events[eventName] || [];
			this.events[eventName].push(listener);
		}
		emit(eventName, ...args) {
			const event = {
				type: eventName,
				args,
				from: this.sender
			};
			let options = {};
			if (args.length >= 1 && args[0] && args[0].options) options = args[0].options;
			const handler = () => {
				this.transports.forEach((t) => {
					t.send(event, options);
				});
				this.handleEvent(event);
			};
			if (this.isAsync) setImmediate(handler);
			else handler();
		}
		last(eventName) {
			return this.data[eventName];
		}
		eventNames() {
			return Object.keys(this.events);
		}
		listenerCount(eventName) {
			const listeners = this.listeners(eventName);
			return listeners ? listeners.length : 0;
		}
		listeners(eventName) {
			return this.events[eventName] || void 0;
		}
		once(eventName, listener) {
			const onceListener = this.onceListener(eventName, listener);
			this.addListener(eventName, onceListener);
		}
		removeAllListeners(eventName) {
			if (!eventName) this.events = {};
			else if (this.events[eventName]) delete this.events[eventName];
		}
		removeListener(eventName, listener) {
			const listeners = this.listeners(eventName);
			if (listeners) this.events[eventName] = listeners.filter((l) => l !== listener);
		}
		on(eventName, listener) {
			this.addListener(eventName, listener);
		}
		off(eventName, listener) {
			this.removeListener(eventName, listener);
		}
		/**
		* Deliver an event to local listeners without sending it to this channel's transports.
		*/
		receive(event) {
			this.handleEvent(event);
		}
		handleEvent(event) {
			const listeners = this.listeners(event.type);
			if (listeners && listeners.length) listeners.forEach((fn) => {
				fn.apply(event, event.args);
			});
			this.data[event.type] = event.args;
		}
		onceListener(eventName, listener) {
			const onceListener = (...args) => {
				this.removeListener(eventName, onceListener);
				return listener(...args);
			};
			return onceListener;
		}
	};
}));
//#endregion
//#region src/client-logger/index.ts
var client_logger_exports = /* @__PURE__ */ __exportAll({
	deprecate: () => deprecate,
	logger: () => logger,
	once: () => once,
	pretty: () => pretty
});
var LOGLEVEL, levels, currentLogLevelNumber, logger, logged, once, deprecate, pretty;
var init_client_logger = __esmMin((() => {
	init_dist$1();
	({LOGLEVEL} = scope);
	levels = {
		trace: 1,
		debug: 2,
		info: 3,
		warn: 4,
		error: 5,
		silent: 10
	};
	currentLogLevelNumber = levels[LOGLEVEL] || levels.info;
	logger = {
		trace: (message, ...rest) => {
			if (currentLogLevelNumber <= levels.trace) console.trace(message, ...rest);
		},
		debug: (message, ...rest) => {
			if (currentLogLevelNumber <= levels.debug) console.debug(message, ...rest);
		},
		info: (message, ...rest) => {
			if (currentLogLevelNumber <= levels.info) console.info(message, ...rest);
		},
		warn: (message, ...rest) => {
			if (currentLogLevelNumber <= levels.warn) console.warn(message, ...rest);
		},
		error: (message, ...rest) => {
			if (currentLogLevelNumber <= levels.error) console.error(message, ...rest);
		},
		log: (message, ...rest) => {
			if (currentLogLevelNumber < levels.silent) console.log(message, ...rest);
		}
	};
	logged = /* @__PURE__ */ new Set();
	once = (type) => (message, ...rest) => {
		if (logged.has(message)) return;
		logged.add(message);
		return logger[type](message, ...rest);
	};
	once.clear = () => logged.clear();
	once.trace = once("trace");
	once.debug = once("debug");
	once.info = once("info");
	once.warn = once("warn");
	once.error = once("error");
	once.log = once("log");
	deprecate = once("warn");
	pretty = (type) => (...args) => {
		const argArray = [];
		if (args.length) {
			const startTagRe = /<span\s+style=(['"])([^'"]*)\1\s*>/gi;
			const endTagRe = /<\/span>/gi;
			let reResultArray;
			argArray.push(args[0].replace(startTagRe, "%c").replace(endTagRe, "%c"));
			while (reResultArray = startTagRe.exec(args[0])) {
				argArray.push(reResultArray[2]);
				argArray.push("");
			}
			for (let j = 1; j < args.length; j++) argArray.push(args[j]);
		}
		logger[type].apply(logger, argArray);
	};
	pretty.trace = pretty("trace");
	pretty.debug = pretty("debug");
	pretty.info = pretty("info");
	pretty.warn = pretty("warn");
	pretty.error = pretty("error");
}));
//#endregion
//#region src/core-events/data/argtypes-info.ts
var init_argtypes_info = __esmMin((() => {}));
//#endregion
//#region src/core-events/data/request-response.ts
var init_request_response = __esmMin((() => {}));
//#endregion
//#region src/core-events/data/save-story.ts
var init_save_story = __esmMin((() => {}));
//#endregion
//#region src/core-events/data/whats-new.ts
var init_whats_new = __esmMin((() => {}));
//#endregion
//#region src/core-events/data/phases.ts
var init_phases = __esmMin((() => {}));
//#endregion
//#region src/core-events/data/open-in-editor.ts
var init_open_in_editor = __esmMin((() => {}));
//#endregion
//#region src/core-events/index.ts
var core_events_exports = /* @__PURE__ */ __exportAll({
	AI_PROMPT_NUDGE: () => AI_PROMPT_NUDGE,
	AI_SETUP_ANALYTICS_REQUEST: () => AI_SETUP_ANALYTICS_REQUEST,
	AI_SETUP_ANALYTICS_RESPONSE: () => AI_SETUP_ANALYTICS_RESPONSE,
	ARGTYPES_INFO_REQUEST: () => ARGTYPES_INFO_REQUEST,
	ARGTYPES_INFO_RESPONSE: () => ARGTYPES_INFO_RESPONSE,
	CHANNEL_CREATED: () => CHANNEL_CREATED,
	CHANNEL_WS_DISCONNECT: () => CHANNEL_WS_DISCONNECT,
	CONFIG_ERROR: () => CONFIG_ERROR,
	CURRENT_STORY_WAS_SET: () => CURRENT_STORY_WAS_SET,
	DOCS_PREPARED: () => DOCS_PREPARED,
	DOCS_RENDERED: () => DOCS_RENDERED,
	FORCE_REMOUNT: () => FORCE_REMOUNT,
	FORCE_RE_RENDER: () => FORCE_RE_RENDER,
	GHOST_STORIES_REQUEST: () => GHOST_STORIES_REQUEST,
	GHOST_STORIES_RESPONSE: () => GHOST_STORIES_RESPONSE,
	GLOBALS_UPDATED: () => GLOBALS_UPDATED,
	MANAGER_INERT_ATTRIBUTE_CHANGED: () => MANAGER_INERT_ATTRIBUTE_CHANGED,
	NAVIGATE_URL: () => NAVIGATE_URL,
	OPEN_IN_EDITOR_REQUEST: () => OPEN_IN_EDITOR_REQUEST,
	OPEN_IN_EDITOR_RESPONSE: () => OPEN_IN_EDITOR_RESPONSE,
	PLAY_FUNCTION_THREW_EXCEPTION: () => PLAY_FUNCTION_THREW_EXCEPTION,
	PRELOAD_ENTRIES: () => PRELOAD_ENTRIES,
	PREVIEW_BUILDER_PROGRESS: () => PREVIEW_BUILDER_PROGRESS,
	PREVIEW_INITIALIZED: () => PREVIEW_INITIALIZED,
	PREVIEW_KEYDOWN: () => PREVIEW_KEYDOWN,
	REGISTER_SUBSCRIPTION: () => REGISTER_SUBSCRIPTION,
	REQUEST_WHATS_NEW_DATA: () => REQUEST_WHATS_NEW_DATA,
	RESET_STORY_ARGS: () => RESET_STORY_ARGS,
	RESULT_WHATS_NEW_DATA: () => RESULT_WHATS_NEW_DATA,
	SAVE_STORY_REQUEST: () => SAVE_STORY_REQUEST,
	SAVE_STORY_RESPONSE: () => SAVE_STORY_RESPONSE,
	SELECT_STORY: () => SELECT_STORY,
	SET_CONFIG: () => SET_CONFIG,
	SET_CURRENT_STORY: () => SET_CURRENT_STORY,
	SET_FILTER: () => SET_FILTER,
	SET_GLOBALS: () => SET_GLOBALS,
	SET_INDEX: () => SET_INDEX,
	SET_STORIES: () => SET_STORIES,
	SET_WHATS_NEW_CACHE: () => SET_WHATS_NEW_CACHE,
	SHARED_STATE_CHANGED: () => SHARED_STATE_CHANGED,
	SHARED_STATE_SET: () => SHARED_STATE_SET,
	SHARE_ISOLATE_MODE: () => SHARE_ISOLATE_MODE,
	SIDEBAR_FILTER_CHANGED: () => SIDEBAR_FILTER_CHANGED,
	SIDEBAR_OPEN_CONTEXT_MENU: () => SIDEBAR_OPEN_CONTEXT_MENU,
	STORIES_COLLAPSE_ALL: () => STORIES_COLLAPSE_ALL,
	STORIES_EXPAND_ALL: () => STORIES_EXPAND_ALL,
	STORY_ARGS_UPDATED: () => STORY_ARGS_UPDATED,
	STORY_CHANGED: () => STORY_CHANGED,
	STORY_ERRORED: () => STORY_ERRORED,
	STORY_FINISHED: () => STORY_FINISHED,
	STORY_HOT_UPDATED: () => STORY_HOT_UPDATED,
	STORY_INDEX_INVALIDATED: () => STORY_INDEX_INVALIDATED,
	STORY_MISSING: () => STORY_MISSING,
	STORY_PREPARED: () => STORY_PREPARED,
	STORY_RENDERED: () => STORY_RENDERED,
	STORY_RENDER_PHASE_CHANGED: () => STORY_RENDER_PHASE_CHANGED,
	STORY_SPECIFIED: () => STORY_SPECIFIED,
	STORY_THREW_EXCEPTION: () => STORY_THREW_EXCEPTION,
	STORY_UNCHANGED: () => STORY_UNCHANGED,
	TELEMETRY_ERROR: () => TELEMETRY_ERROR,
	TOGGLE_WHATS_NEW_NOTIFICATIONS: () => TOGGLE_WHATS_NEW_NOTIFICATIONS,
	UNHANDLED_ERRORS_WHILE_PLAYING: () => UNHANDLED_ERRORS_WHILE_PLAYING,
	UPDATE_GLOBALS: () => UPDATE_GLOBALS,
	UPDATE_QUERY_PARAMS: () => UPDATE_QUERY_PARAMS,
	UPDATE_STORY_ARGS: () => UPDATE_STORY_ARGS,
	default: () => events
});
var events, CHANNEL_WS_DISCONNECT, CHANNEL_CREATED, CONFIG_ERROR, CURRENT_STORY_WAS_SET, DOCS_PREPARED, DOCS_RENDERED, FORCE_RE_RENDER, FORCE_REMOUNT, GLOBALS_UPDATED, NAVIGATE_URL, PLAY_FUNCTION_THREW_EXCEPTION, UNHANDLED_ERRORS_WHILE_PLAYING, PRELOAD_ENTRIES, PREVIEW_INITIALIZED, PREVIEW_BUILDER_PROGRESS, PREVIEW_KEYDOWN, REGISTER_SUBSCRIPTION, RESET_STORY_ARGS, SELECT_STORY, SET_CONFIG, SET_CURRENT_STORY, SET_FILTER, SET_GLOBALS, SET_INDEX, SET_STORIES, SHARED_STATE_CHANGED, SHARED_STATE_SET, STORIES_COLLAPSE_ALL, STORIES_EXPAND_ALL, SIDEBAR_OPEN_CONTEXT_MENU, STORY_ARGS_UPDATED, STORY_CHANGED, STORY_ERRORED, STORY_INDEX_INVALIDATED, STORY_MISSING, STORY_PREPARED, STORY_RENDER_PHASE_CHANGED, STORY_RENDERED, STORY_FINISHED, STORY_SPECIFIED, STORY_THREW_EXCEPTION, STORY_UNCHANGED, STORY_HOT_UPDATED, UPDATE_GLOBALS, UPDATE_QUERY_PARAMS, UPDATE_STORY_ARGS, REQUEST_WHATS_NEW_DATA, RESULT_WHATS_NEW_DATA, SET_WHATS_NEW_CACHE, TOGGLE_WHATS_NEW_NOTIFICATIONS, TELEMETRY_ERROR, SAVE_STORY_REQUEST, SAVE_STORY_RESPONSE, ARGTYPES_INFO_REQUEST, ARGTYPES_INFO_RESPONSE, GHOST_STORIES_REQUEST, GHOST_STORIES_RESPONSE, AI_SETUP_ANALYTICS_RESPONSE, AI_SETUP_ANALYTICS_REQUEST, OPEN_IN_EDITOR_REQUEST, OPEN_IN_EDITOR_RESPONSE, MANAGER_INERT_ATTRIBUTE_CHANGED, SHARE_ISOLATE_MODE, AI_PROMPT_NUDGE, SIDEBAR_FILTER_CHANGED;
var init_core_events = __esmMin((() => {
	init_argtypes_info();
	init_request_response();
	init_save_story();
	init_whats_new();
	init_phases();
	init_open_in_editor();
	events = /* @__PURE__ */ function(events) {
		events["CHANNEL_WS_DISCONNECT"] = "channelWSDisconnect";
		events["CHANNEL_CREATED"] = "channelCreated";
		events["CONFIG_ERROR"] = "configError";
		events["STORY_INDEX_INVALIDATED"] = "storyIndexInvalidated";
		events["STORY_SPECIFIED"] = "storySpecified";
		events["SET_CONFIG"] = "setConfig";
		events["SET_STORIES"] = "setStories";
		events["SET_INDEX"] = "setIndex";
		events["SET_CURRENT_STORY"] = "setCurrentStory";
		events["CURRENT_STORY_WAS_SET"] = "currentStoryWasSet";
		events["FORCE_RE_RENDER"] = "forceReRender";
		events["FORCE_REMOUNT"] = "forceRemount";
		events["PRELOAD_ENTRIES"] = "preloadStories";
		events["STORY_PREPARED"] = "storyPrepared";
		events["DOCS_PREPARED"] = "docsPrepared";
		events["STORY_CHANGED"] = "storyChanged";
		events["STORY_UNCHANGED"] = "storyUnchanged";
		events["STORY_RENDERED"] = "storyRendered";
		events["STORY_FINISHED"] = "storyFinished";
		events["STORY_MISSING"] = "storyMissing";
		events["STORY_ERRORED"] = "storyErrored";
		events["STORY_THREW_EXCEPTION"] = "storyThrewException";
		events["STORY_RENDER_PHASE_CHANGED"] = "storyRenderPhaseChanged";
		events["STORY_HOT_UPDATED"] = "storyHotUpdated";
		events["PLAY_FUNCTION_THREW_EXCEPTION"] = "playFunctionThrewException";
		events["UNHANDLED_ERRORS_WHILE_PLAYING"] = "unhandledErrorsWhilePlaying";
		events["UPDATE_STORY_ARGS"] = "updateStoryArgs";
		events["STORY_ARGS_UPDATED"] = "storyArgsUpdated";
		events["RESET_STORY_ARGS"] = "resetStoryArgs";
		events["SET_FILTER"] = "setFilter";
		events["SET_GLOBALS"] = "setGlobals";
		events["UPDATE_GLOBALS"] = "updateGlobals";
		events["GLOBALS_UPDATED"] = "globalsUpdated";
		events["REGISTER_SUBSCRIPTION"] = "registerSubscription";
		events["PREVIEW_INITIALIZED"] = "previewInitialized";
		events["PREVIEW_KEYDOWN"] = "previewKeydown";
		events["PREVIEW_BUILDER_PROGRESS"] = "preview_builder_progress";
		events["SELECT_STORY"] = "selectStory";
		events["STORIES_COLLAPSE_ALL"] = "storiesCollapseAll";
		events["STORIES_EXPAND_ALL"] = "storiesExpandAll";
		events["SIDEBAR_OPEN_CONTEXT_MENU"] = "sidebarOpenContextMenu";
		events["DOCS_RENDERED"] = "docsRendered";
		events["SHARED_STATE_CHANGED"] = "sharedStateChanged";
		events["SHARED_STATE_SET"] = "sharedStateSet";
		events["NAVIGATE_URL"] = "navigateUrl";
		events["UPDATE_QUERY_PARAMS"] = "updateQueryParams";
		events["REQUEST_WHATS_NEW_DATA"] = "requestWhatsNewData";
		events["RESULT_WHATS_NEW_DATA"] = "resultWhatsNewData";
		events["SET_WHATS_NEW_CACHE"] = "setWhatsNewCache";
		events["TOGGLE_WHATS_NEW_NOTIFICATIONS"] = "toggleWhatsNewNotifications";
		events["TELEMETRY_ERROR"] = "telemetryError";
		events["SAVE_STORY_REQUEST"] = "saveStoryRequest";
		events["SAVE_STORY_RESPONSE"] = "saveStoryResponse";
		events["ARGTYPES_INFO_REQUEST"] = "argtypesInfoRequest";
		events["ARGTYPES_INFO_RESPONSE"] = "argtypesInfoResponse";
		events["GHOST_STORIES_REQUEST"] = "ghostStoriesRequest";
		events["GHOST_STORIES_RESPONSE"] = "ghostStoriesResponse";
		events["AI_SETUP_ANALYTICS_RESPONSE"] = "aiSetupAnalyticsResponse";
		events["AI_SETUP_ANALYTICS_REQUEST"] = "aiSetupAnalyticsRequest";
		events["OPEN_IN_EDITOR_REQUEST"] = "openInEditorRequest";
		events["OPEN_IN_EDITOR_RESPONSE"] = "openInEditorResponse";
		events["MANAGER_INERT_ATTRIBUTE_CHANGED"] = "managerInertAttributeChanged";
		events["SHARE_ISOLATE_MODE"] = "shareIsolateMode";
		events["AI_PROMPT_NUDGE"] = "aiPromptNudge";
		events["SIDEBAR_FILTER_CHANGED"] = "sidebarFilterChanged";
		return events;
	}(events || {});
	({CHANNEL_WS_DISCONNECT, CHANNEL_CREATED, CONFIG_ERROR, CURRENT_STORY_WAS_SET, DOCS_PREPARED, DOCS_RENDERED, FORCE_RE_RENDER, FORCE_REMOUNT, GLOBALS_UPDATED, NAVIGATE_URL, PLAY_FUNCTION_THREW_EXCEPTION, UNHANDLED_ERRORS_WHILE_PLAYING, PRELOAD_ENTRIES, PREVIEW_INITIALIZED, PREVIEW_BUILDER_PROGRESS, PREVIEW_KEYDOWN, REGISTER_SUBSCRIPTION, RESET_STORY_ARGS, SELECT_STORY, SET_CONFIG, SET_CURRENT_STORY, SET_FILTER, SET_GLOBALS, SET_INDEX, SET_STORIES, SHARED_STATE_CHANGED, SHARED_STATE_SET, STORIES_COLLAPSE_ALL, STORIES_EXPAND_ALL, SIDEBAR_OPEN_CONTEXT_MENU, STORY_ARGS_UPDATED, STORY_CHANGED, STORY_ERRORED, STORY_INDEX_INVALIDATED, STORY_MISSING, STORY_PREPARED, STORY_RENDER_PHASE_CHANGED, STORY_RENDERED, STORY_FINISHED, STORY_SPECIFIED, STORY_THREW_EXCEPTION, STORY_UNCHANGED, STORY_HOT_UPDATED, UPDATE_GLOBALS, UPDATE_QUERY_PARAMS, UPDATE_STORY_ARGS, REQUEST_WHATS_NEW_DATA, RESULT_WHATS_NEW_DATA, SET_WHATS_NEW_CACHE, TOGGLE_WHATS_NEW_NOTIFICATIONS, TELEMETRY_ERROR, SAVE_STORY_REQUEST, SAVE_STORY_RESPONSE, ARGTYPES_INFO_REQUEST, ARGTYPES_INFO_RESPONSE, GHOST_STORIES_REQUEST, GHOST_STORIES_RESPONSE, AI_SETUP_ANALYTICS_RESPONSE, AI_SETUP_ANALYTICS_REQUEST, OPEN_IN_EDITOR_REQUEST, OPEN_IN_EDITOR_RESPONSE, MANAGER_INERT_ATTRIBUTE_CHANGED, SHARE_ISOLATE_MODE, AI_PROMPT_NUDGE, SIDEBAR_FILTER_CHANGED} = events);
}));
//#endregion
//#region src/channels/postmessage/getEventSourceUrl.ts
var pickFrameByRefId, getEventSourceUrl;
var init_getEventSourceUrl = __esmMin((() => {
	init_client_logger();
	pickFrameByRefId = (candidates, refId) => {
		if (candidates.length === 1) return candidates[0];
		if (candidates.length === 0 || !refId) return;
		return candidates.find((el) => (el.getAttribute("src") ?? "").includes(`refId=${encodeURIComponent(refId)}`));
	};
	getEventSourceUrl = (event, refId) => {
		const candidates = Array.from(document.querySelectorAll("iframe[data-is-storybook]")).filter((element) => {
			try {
				return element.contentWindow?.location.origin === event.source.location.origin && element.contentWindow?.location.pathname === event.source.location.pathname;
			} catch {}
			try {
				return element.contentWindow === event.source;
			} catch {}
			const src = element.getAttribute("src");
			let origin;
			try {
				if (!src) return false;
				({origin} = new URL(src, document.location.toString()));
			} catch {
				return false;
			}
			return origin === event.origin;
		});
		const src = pickFrameByRefId(candidates, refId)?.getAttribute("src");
		if (src) {
			const { protocol, host, pathname } = new URL(src, document.location.toString());
			return `${protocol}//${host}${pathname}`;
		}
		if (candidates.length > 1) logger.error("found multiple candidates for event source");
		return null;
	};
}));
//#endregion
//#region src/channels/postmessage/index.ts
var document$3, location, KEY, CHANNEL_OPTIONS$1, defaultEventOptions, getReferrerOrigin, isOnInitialBlankDocument, getOriginValidator, PostMessageTransport;
var init_postmessage = __esmMin((() => {
	init_client_logger();
	init_core_events();
	init_dist();
	init_tiny_invariant();
	init_preview_errors();
	init_local_hosts();
	init_getEventSourceUrl();
	({document: document$3, location} = globalThis);
	KEY = "storybook-channel";
	CHANNEL_OPTIONS$1 = globalThis.CHANNEL_OPTIONS || {};
	defaultEventOptions = { maxDepth: 25 };
	getReferrerOrigin = () => {
		try {
			const origin = document$3?.referrer && new URL(document$3.referrer).origin;
			return origin && origin !== "null" ? origin : null;
		} catch {
			return null;
		}
	};
	isOnInitialBlankDocument = (frame) => {
		try {
			return frame.location.href === "about:blank";
		} catch {
			return false;
		}
	};
	getOriginValidator = () => {
		const own = location?.origin;
		if (globalThis.CONFIG_TYPE !== "DEVELOPMENT" || !own || own === "null") return null;
		return (origin) => {
			if (origin === own) return true;
			try {
				return matchesHostname(new URL(origin).hostname, LOOPBACK_HOSTNAMES);
			} catch {
				return false;
			}
		};
	};
	PostMessageTransport = class {
		constructor(config) {
			this.config = config;
			this.connected = false;
			this.rejectedOrigins = /* @__PURE__ */ new Set();
			this.buffer = [];
			this.originValidator = getOriginValidator();
			this.insecureIframeMessaging = globalThis.INSECURE_IFRAME_MESSAGING === true;
			this.pinsTargetOrigin = globalThis.CONFIG_TYPE === "DEVELOPMENT" && !this.insecureIframeMessaging;
			if (typeof globalThis.addEventListener === "function") globalThis.addEventListener("message", this.handleEvent.bind(this), false);
			if (config.page !== "manager" && config.page !== "preview") throw new InvalidChannelPageError({ page: config.page });
		}
		setHandler(handler) {
			this.handler = (...args) => {
				handler.apply(this, args);
				if (!this.connected && this.getLocalFrame().length) {
					this.flush();
					this.connected = true;
				}
			};
		}
		/**
		* Sends `event` to the associated window. If the window does not yet exist the event will be
		* stored in a buffer and sent when the window exists.
		*
		* @param event
		*/
		send(event, options) {
			const { target, allowRegExp, allowSymbol, allowDate, allowError, allowUndefined, maxDepth, space } = options || {};
			const eventOptions = Object.fromEntries(Object.entries({
				allowRegExp,
				allowSymbol,
				allowDate,
				allowError,
				allowUndefined,
				maxDepth,
				space
			}).filter(([k, v]) => typeof v !== "undefined"));
			const stringifyOptions = {
				...defaultEventOptions,
				...CHANNEL_OPTIONS$1,
				...eventOptions
			};
			const frames = this.getFrames(target);
			const query = new URLSearchParams(location?.search || "");
			const data = stringify({
				key: KEY,
				event,
				refId: query.get("refId")
			}, stringifyOptions);
			if (!frames.length) return new Promise((resolve, reject) => {
				this.buffer.push({
					event,
					resolve,
					reject
				});
			});
			if (this.buffer.length) this.flush();
			frames.forEach(({ contentWindow, targetOrigin }) => {
				if (this.config.page === "manager" && isOnInitialBlankDocument(contentWindow)) return;
				try {
					contentWindow.postMessage(data, this.pinsTargetOrigin ? targetOrigin : "*");
				} catch (e) {
					logger.error("sending over postmessage fail");
				}
			});
			return Promise.resolve(null);
		}
		flush() {
			const { buffer } = this;
			this.buffer = [];
			buffer.forEach((item) => {
				this.send(item.event).then(item.resolve).catch(item.reject);
			});
		}
		getFrames(target) {
			if (this.config.page === "manager") {
				const list = Array.from(document$3.querySelectorAll("iframe[data-is-storybook][data-is-loaded]")).flatMap((e) => {
					try {
						if (!!e.contentWindow && e.dataset.isStorybook !== void 0 && e.id === target) return [{
							contentWindow: e.contentWindow,
							targetOrigin: this.getIframeTargetOrigin(e)
						}];
						return [];
					} catch (er) {
						return [];
					}
				});
				return list?.length ? list : this.getCurrentFrames();
			}
			if (globalThis.parent && globalThis.parent !== globalThis.self) return [{
				contentWindow: globalThis.parent,
				targetOrigin: this.getManagerTargetOrigin()
			}];
			return [];
		}
		getCurrentFrames() {
			if (this.config.page === "manager") return Array.from(document$3.querySelectorAll("[data-is-storybook=\"true\"]")).flatMap((e) => e.contentWindow ? [{
				contentWindow: e.contentWindow,
				targetOrigin: this.getIframeTargetOrigin(e)
			}] : []);
			if (globalThis.parent) return [{
				contentWindow: globalThis.parent,
				targetOrigin: this.getManagerTargetOrigin()
			}];
			return [];
		}
		getIframeTargetOrigin(element) {
			const src = element.getAttribute("src");
			if (src) try {
				const { origin } = new URL(src, document$3.location.toString());
				if (origin !== "null") return origin;
			} catch {}
			return location?.origin && location.origin !== "null" ? location.origin : "*";
		}
		getManagerTargetOrigin() {
			const referrerOrigin = getReferrerOrigin();
			if (this.originValidator) return referrerOrigin !== null && this.originValidator(referrerOrigin) ? referrerOrigin : location.origin;
			return referrerOrigin ?? "*";
		}
		getLocalFrame() {
			if (this.config.page === "manager") return Array.from(document$3.querySelectorAll("#storybook-preview-iframe")).flatMap((e) => e.contentWindow ? [e.contentWindow] : []);
			if (globalThis.parent) return [globalThis.parent];
			return [];
		}
		isAllowedSender(rawEvent) {
			if (this.insecureIframeMessaging) return true;
			if (this.config.page === "manager") return this.isAllowedToContactManager(rawEvent);
			else if (this.config.page === "preview") return this.isAllowedToContactPreview(rawEvent);
			return false;
		}
		isAllowedToContactPreview(rawEvent) {
			if (!this.originValidator) return true;
			if (this.originValidator(rawEvent.origin)) return true;
			this.warnOnceAboutRejectedSender(rawEvent, `Ignored Storybook channel message from unexpected origin "${rawEvent.origin}". While it runs in dev mode, this preview only accepts messages from local hosts and its own origin. To accept messages from any origin, set "security.insecureIframeMessaging" to true in the main config of the Storybook serving this preview.`);
			return false;
		}
		isAllowedToContactManager(rawEvent) {
			const senderFrame = rawEvent.source ? Array.from(document$3.querySelectorAll("iframe")).find((frame) => frame.contentWindow === rawEvent.source) : void 0;
			if (senderFrame?.hasAttribute("data-is-storybook")) {
				if (!this.pinsTargetOrigin) return true;
				const expectedOrigin = this.getIframeTargetOrigin(senderFrame);
				if (expectedOrigin === "*" || expectedOrigin === rawEvent.origin) return true;
				this.warnOnceAboutRejectedSender(rawEvent, `Ignored Storybook channel message from a registered preview iframe that is on origin "${rawEvent.origin}" instead of "${expectedOrigin}". While it runs in dev mode, the manager only accepts channel messages from the origin each preview iframe was given, so a page the iframe navigated to cannot send them. To accept messages from any origin, set "security.insecureIframeMessaging" to true.`);
				return false;
			}
			if (!senderFrame?.hasAttribute("data-is-storybook-thumbnail")) this.warnOnceAboutRejectedSender(rawEvent, `Ignored Storybook channel message from a window that is not a registered preview iframe (origin "${rawEvent.origin}"). The manager only accepts channel messages from its own preview and composed Storybook iframes, never from a page that embeds it. To accept messages from any window, set "security.insecureIframeMessaging" to true.`);
			return false;
		}
		warnOnceAboutRejectedSender(rawEvent, message) {
			if ((typeof rawEvent.data === "string" ? rawEvent.data.includes("storybook-channel") : rawEvent.data?.key === "storybook-channel") && !this.rejectedOrigins.has(rawEvent.origin)) {
				this.rejectedOrigins.add(rawEvent.origin);
				logger.warn(message);
			}
		}
		handleEvent(rawEvent) {
			try {
				if (!this.isAllowedSender(rawEvent)) return;
				const { data } = rawEvent;
				const { key, event, refId } = typeof data === "string" && isJSON(data) ? parse(data, CHANNEL_OPTIONS$1) : data;
				if (key === "storybook-channel") {
					const pageString = this.config.page === "manager" ? `<span style="color: #37D5D3; background: black"> manager </span>` : `<span style="color: #1EA7FD; background: black"> preview </span>`;
					const eventString = Object.values(core_events_exports).includes(event.type) ? `<span style="color: #FF4785">${event.type}</span>` : `<span style="color: #FFAE00">${event.type}</span>`;
					if (refId) event.refId = refId;
					event.source = this.config.page === "preview" ? rawEvent.origin : getEventSourceUrl(rawEvent, refId);
					if (!event.source) {
						pretty.error(`${pageString} received ${eventString} but was unable to determine the source of the event`);
						return;
					}
					const message = `${pageString} received ${eventString} (${data.length})`;
					pretty.debug(location.origin !== event.source ? message : `${message} <span style="color: gray">(on ${location.origin} from ${event.source})</span>`, ...event.args);
					invariant(this.handler, "ChannelHandler should be set");
					if (this.config.page === "manager" && this.buffer.length) this.flush();
					this.handler(event);
				}
			} catch (error) {
				logger.error(error);
			}
		}
	};
}));
//#endregion
//#region src/channels/websocket/index.ts
var HEARTBEAT_INTERVAL, SERVER_CHANNEL_PATH, CHANNEL_OPTIONS, WebsocketTransport;
var init_websocket = __esmMin((() => {
	init_core_events();
	init_dist();
	init_tiny_invariant();
	HEARTBEAT_INTERVAL = 15e3;
	SERVER_CHANNEL_PATH = "/storybook-server-channel";
	CHANNEL_OPTIONS = globalThis.CHANNEL_OPTIONS || {};
	WebsocketTransport = class {
		constructor({ url, onError, page, createSocket }) {
			this.buffer = [];
			this.isReady = false;
			this.isClosed = false;
			this.socket = createSocket ? createSocket(url) : new WebSocket(url);
			this.socket.onopen = () => {
				this.isReady = true;
				this.flush();
			};
			this.socket.onmessage = ({ data }) => {
				const event = typeof data === "string" && isJSON(data) ? parse(data) : data;
				invariant(this.handler, "WebsocketTransport handler should be set");
				if (event.type === "ping") {
					this.send({ type: "pong" });
					return;
				}
				this.handler(event);
			};
			this.socket.onerror = (e) => {
				if (onError) onError(e);
			};
			this.socket.onclose = (ev) => {
				invariant(this.handler, "WebsocketTransport handler should be set");
				this.handler({
					type: CHANNEL_WS_DISCONNECT,
					args: [{
						reason: ev.reason,
						code: ev.code
					}],
					from: page || "preview"
				});
				this.isClosed = true;
			};
		}
		setHandler(handler) {
			this.handler = handler;
		}
		send(event) {
			if (!this.isClosed) if (!this.isReady) this.sendLater(event);
			else this.sendNow(event);
		}
		sendLater(event) {
			this.buffer.push(event);
		}
		sendNow(event) {
			const data = stringify(event, {
				maxDepth: 15,
				...CHANNEL_OPTIONS
			});
			this.socket.send(data);
		}
		flush() {
			const { buffer } = this;
			this.buffer = [];
			buffer.forEach((event) => this.send(event));
		}
	};
}));
//#endregion
//#region src/channels/channel-slot.ts
function syncGlobalSlot(next) {
	globalThis.__STORYBOOK_ADDONS_CHANNEL__ = next;
}
/**
* Returns the installed addons channel, or `null` before one exists.
*
* The global slot wins over the module cache so duplicate copies of this module (e.g. dev-server
* preset code and `.storybook` service registration loading different bundles) still observe
* `setChannel` from whichever copy installed the live websocket channel.
*/
function getChannel() {
	const fromGlobal = globalThis.__STORYBOOK_ADDONS_CHANNEL__;
	if (fromGlobal) channel = fromGlobal;
	return channel ?? null;
}
/**
* Returns the installed addons channel.
*
* Callers assume each runtime has installed a channel at its entry boundary (builder iframe setup,
* manager boot, server `services` preset, or Node module bootstrap). Prefer this over nullable
* `getChannel()` when the channel must exist.
*/
function requireChannel() {
	const installed = getChannel();
	if (!installed) throw new Error("Storybook addons channel is not installed in this runtime. Install it via setChannel() or addons.setChannel() at the runtime entry point before registering services or emitting events.");
	return installed;
}
/** Installs (or replaces) the shared addons channel. Pass `null` to clear. */
function setChannel(next) {
	channel = next ?? void 0;
	syncGlobalSlot(channel);
}
/** Clears the shared channel slot. Alias for `setChannel(null)`. */
function clearChannel() {
	setChannel(null);
}
/** Installs a noop in-process channel — used by server presets and unit tests. */
function installNoopChannel() {
	setChannel(new Channel({}));
}
/**
* Installs a noop channel when none is present yet.
*
* Prefer explicit `setChannel` / `installNoopChannel` at runtime entry points. This helper remains for
* tests and tooling that need an in-process channel without a mock transport.
*/
function ensureChannel() {
	if (!getChannel()) installNoopChannel();
}
var channel;
var init_channel_slot = __esmMin((() => {
	init_main();
	if (typeof window === "undefined") ensureChannel();
}));
//#endregion
//#region src/channels/index.ts
var channels_exports = /* @__PURE__ */ __exportAll({
	Channel: () => Channel,
	HEARTBEAT_INTERVAL: () => HEARTBEAT_INTERVAL,
	PostMessageTransport: () => PostMessageTransport,
	SERVER_CHANNEL_PATH: () => SERVER_CHANNEL_PATH,
	WebsocketTransport: () => WebsocketTransport,
	clearChannel: () => clearChannel,
	createBrowserChannel: () => createBrowserChannel,
	default: () => channels_default,
	ensureChannel: () => ensureChannel,
	getChannel: () => getChannel,
	installNoopChannel: () => installNoopChannel,
	requireChannel: () => requireChannel,
	setChannel: () => setChannel
});
/**
* Creates a new browser channel instance.
*
* @param {Options} options - The options object.
* @param {Page} options.page - Page identifier.
* @param {ChannelTransport[]} [options.extraTransports=[]] - An optional array of extra channel
*   transports. Default is `[]`
* @returns {Channel} - The new channel instance.
*/
function createBrowserChannel({ page, extraTransports = [] }) {
	const transports = [new PostMessageTransport({ page }), ...extraTransports];
	if (globalThis.CONFIG_TYPE === "DEVELOPMENT") {
		const protocol = window.location.protocol === "http:" ? "ws" : "wss";
		const { hostname, port } = window.location;
		const { wsToken, wsPath = SERVER_CHANNEL_PATH } = globalThis.CHANNEL_OPTIONS || {};
		const channelUrl = `${protocol}://${hostname}:${port}${wsPath}?token=${wsToken}&page=${page}`;
		transports.push(new WebsocketTransport({
			url: channelUrl,
			onError: () => {},
			page
		}));
	}
	const channel = new Channel({ transports });
	UniversalStore.__prepare(channel, page === "manager" ? UniversalStore.Environment.MANAGER : UniversalStore.Environment.PREVIEW);
	return channel;
}
var channels_default;
var init_channels = __esmMin((() => {
	init_universal_store();
	init_main();
	init_postmessage();
	init_websocket();
	init_main();
	init_channel_slot();
	channels_default = Channel;
}));
//#endregion
//#region src/components/components/typography/DocumentFormatting.tsx
var nameSpaceClassNames;
var init_DocumentFormatting = __esmMin((() => {
	nameSpaceClassNames = ({ ...props }, key) => {
		const classes = [props.class, props.className];
		delete props.class;
		props.className = [
			"sbdocs",
			`sbdocs-${key}`,
			...classes
		].filter(Boolean).join(" ");
		return props;
	};
}));
//#endregion
//#region src/components/components/typography/lib/common.tsx
var headerCommon, codeCommon, withReset, withMargin;
var init_common = __esmMin((() => {
	headerCommon = ({ theme }) => ({
		margin: "20px 0 8px",
		padding: 0,
		cursor: "text",
		position: "relative",
		color: theme.color.defaultText,
		"&:first-of-type": {
			marginTop: 0,
			paddingTop: 0
		},
		"&:hover a.anchor": { textDecoration: "none" },
		"& tt, & code": { fontSize: "inherit" }
	});
	codeCommon = ({ theme }) => ({
		lineHeight: 1,
		margin: "0 2px",
		padding: "3px 5px",
		whiteSpace: "nowrap",
		borderRadius: 3,
		fontSize: theme.typography.size.s2 - 1,
		border: theme.base === "light" ? "1px solid hsl(0 0 0 / 0.05)" : "1px solid hsl(0 0 100 / 0.05)",
		color: theme.color.defaultText,
		backgroundColor: theme.base === "light" ? "hsl(0 0 0 / 0.01)" : "hsl(0 0 100 / 0.02)"
	});
	withReset = ({ theme }) => ({
		fontFamily: theme.typography.fonts.base,
		fontSize: theme.typography.size.s3,
		margin: 0,
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
		WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
		WebkitOverflowScrolling: "touch"
	});
	withMargin = { margin: "16px 0" };
}));
//#endregion
//#region src/components/components/typography/ResetWrapper.tsx
var ResetWrapper;
var init_ResetWrapper = __esmMin((() => {
	init_emotion();
	init_common();
	ResetWrapper = styled.div(withReset);
}));
//#endregion
//#region src/components/components/typography/elements/Link.tsx
var import_react$55, Link$1;
var init_Link = __esmMin((() => {
	import_react$55 = /* @__PURE__ */ __toESM(require_react(), 1);
	Link$1 = ({ href: input = "", ...props }) => {
		const href = /^\//.test(input) ? `./?path=${input}` : input;
		const target = /^#.*/.test(input) ? "_self" : "_top";
		return /* @__PURE__ */ import_react$55.default.createElement("a", {
			href,
			target,
			...props
		});
	};
}));
//#endregion
//#region src/components/components/typography/elements/A.tsx
var A$1;
var init_A = __esmMin((() => {
	init_emotion();
	init_common();
	init_Link();
	A$1 = styled(Link$1)(({ theme }) => ({
		...withReset({ theme }),
		fontSize: "inherit",
		lineHeight: "24px",
		color: theme.color.secondary,
		textDecoration: "underline",
		textDecorationThickness: "0.03125rem",
		textUnderlineOffset: "0.11em",
		"&.absent": { color: "#cc0000" },
		"&.anchor": {
			display: "block",
			paddingLeft: 30,
			marginLeft: -30,
			cursor: "pointer",
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			textDecoration: "none"
		},
		"&.anchor:hover, &.anchor:focus": { textDecoration: "underline" },
		"& code": {
			color: "inherit",
			textDecoration: "underline",
			textDecorationThickness: "0.03125rem",
			paddingLeft: 0,
			paddingRight: 0,
			"&::before": {
				content: "\"\\00a0\"",
				fontSize: "0.5em"
			},
			"&::after": {
				content: "\"\\00a0\"",
				fontSize: "0.5em"
			}
		}
	}));
}));
//#endregion
//#region src/components/components/typography/elements/Blockquote.tsx
var Blockquote;
var init_Blockquote = __esmMin((() => {
	init_emotion();
	init_common();
	Blockquote = styled.blockquote(({ theme }) => ({
		...withReset({ theme }),
		...withMargin,
		borderLeft: `4px solid ${theme.color.medium}`,
		padding: "0 15px",
		color: theme.color.dark,
		"& > :first-of-type": { marginTop: 0 },
		"& > :last-child": { marginBottom: 0 }
	}));
}));
//#endregion
//#region src/components/components/syntaxhighlighter/lazy-syntaxhighlighter.tsx
var import_react$54, languages, Comp, LazySyntaxHighlighter, LazySyntaxHighlighterWithFormatter, SyntaxHighlighter$1;
var init_lazy_syntaxhighlighter = __esmMin((() => {
	import_react$54 = /* @__PURE__ */ __toESM(require_react(), 1);
	languages = [];
	Comp = null;
	LazySyntaxHighlighter = (0, import_react$54.lazy)(async () => {
		const { SyntaxHighlighter } = await Promise.resolve().then(() => (init_syntaxhighlighter(), syntaxhighlighter_exports));
		if (languages.length > 0) {
			languages.forEach((args) => {
				SyntaxHighlighter.registerLanguage(...args);
			});
			languages = [];
		}
		if (Comp === null) Comp = SyntaxHighlighter;
		return { default: (props) => /* @__PURE__ */ import_react$54.default.createElement(SyntaxHighlighter, props) };
	});
	LazySyntaxHighlighterWithFormatter = (0, import_react$54.lazy)(async () => {
		const [{ SyntaxHighlighter }, { formatter }] = await Promise.all([Promise.resolve().then(() => (init_syntaxhighlighter(), syntaxhighlighter_exports)), Promise.resolve().then(() => (init_formatter(), formatter_exports))]);
		if (languages.length > 0) {
			languages.forEach((args) => {
				SyntaxHighlighter.registerLanguage(...args);
			});
			languages = [];
		}
		if (Comp === null) Comp = SyntaxHighlighter;
		return { default: (props) => /* @__PURE__ */ import_react$54.default.createElement(SyntaxHighlighter, {
			...props,
			formatter
		}) };
	});
	SyntaxHighlighter$1 = (props) => /* @__PURE__ */ import_react$54.default.createElement(import_react$54.Suspense, { fallback: /* @__PURE__ */ import_react$54.default.createElement("div", null) }, props.format !== false ? /* @__PURE__ */ import_react$54.default.createElement(LazySyntaxHighlighterWithFormatter, props) : /* @__PURE__ */ import_react$54.default.createElement(LazySyntaxHighlighter, props));
	SyntaxHighlighter$1.registerLanguage = (...args) => {
		if (Comp !== null) {
			Comp.registerLanguage(...args);
			return;
		}
		languages.push(args);
	};
}));
//#endregion
//#region src/components/components/typography/lib/isReactChildString.tsx
var isReactChildString;
var init_isReactChildString = __esmMin((() => {
	isReactChildString = (child) => typeof child === "string";
}));
//#endregion
//#region src/components/components/typography/elements/Code.tsx
var import_react$53, isInlineCodeRegex, DefaultCodeBlock, StyledSyntaxHighlighter, Code$2;
var init_Code = __esmMin((() => {
	import_react$53 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	init_lazy_syntaxhighlighter();
	init_common();
	init_isReactChildString();
	isInlineCodeRegex = /[\n\r]/g;
	DefaultCodeBlock = styled.code(({ theme }) => ({
		fontFamily: theme.typography.fonts.mono,
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
		display: "inline-block",
		paddingLeft: 2,
		paddingRight: 2,
		verticalAlign: "baseline",
		color: "inherit",
		...codeCommon({ theme })
	}));
	StyledSyntaxHighlighter = styled(SyntaxHighlighter$1)(({ theme }) => ({
		fontFamily: theme.typography.fonts.mono,
		fontSize: `${theme.typography.size.s2 - 1}px`,
		lineHeight: "19px",
		margin: "25px 0 40px",
		borderRadius: theme.appBorderRadius,
		boxShadow: theme.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
		"pre.prismjs": {
			padding: 20,
			background: "inherit"
		}
	}));
	Code$2 = ({ className, children, ...props }) => {
		const language = (className || "").match(/lang-(\S+)/);
		const childrenArray = import_react$53.Children.toArray(children);
		if (!childrenArray.filter(isReactChildString).some((child) => child.match(isInlineCodeRegex))) return /* @__PURE__ */ import_react$53.default.createElement(DefaultCodeBlock, {
			...props,
			className
		}, childrenArray);
		return /* @__PURE__ */ import_react$53.default.createElement(StyledSyntaxHighlighter, {
			bordered: true,
			copyable: true,
			language: language?.[1] ?? "text",
			format: false,
			...props
		}, children);
	};
}));
//#endregion
//#region src/components/components/typography/elements/DL.tsx
var DL;
var init_DL = __esmMin((() => {
	init_emotion();
	init_common();
	DL = styled.dl(({ theme }) => ({
		...withReset({ theme }),
		...withMargin,
		padding: 0,
		"& dt": {
			fontSize: "14px",
			fontWeight: "bold",
			fontStyle: "italic",
			padding: 0,
			margin: "16px 0 4px"
		},
		"& dt:first-of-type": { padding: 0 },
		"& dt > :first-of-type": { marginTop: 0 },
		"& dt > :last-child": { marginBottom: 0 },
		"& dd": {
			margin: "0 0 16px",
			padding: "0 15px"
		},
		"& dd > :first-of-type": { marginTop: 0 },
		"& dd > :last-child": { marginBottom: 0 }
	}));
}));
//#endregion
//#region src/components/components/typography/elements/Div.tsx
var Div$1;
var init_Div = __esmMin((() => {
	init_emotion();
	init_common();
	Div$1 = styled.div(withReset);
}));
//#endregion
//#region src/components/components/typography/elements/H1.tsx
var H1;
var init_H1 = __esmMin((() => {
	init_emotion();
	init_common();
	H1 = styled.h1(({ theme }) => ({
		...withReset({ theme }),
		...headerCommon({ theme }),
		fontSize: `${theme.typography.size.l1}px`,
		fontWeight: theme.typography.weight.bold
	}));
}));
//#endregion
//#region src/components/components/typography/elements/H2.tsx
var H2;
var init_H2 = __esmMin((() => {
	init_emotion();
	init_common();
	H2 = styled.h2(({ theme }) => ({
		...withReset({ theme }),
		...headerCommon({ theme }),
		fontSize: `${theme.typography.size.m2}px`,
		paddingBottom: 4,
		borderBottom: `1px solid ${theme.appBorderColor}`
	}));
}));
//#endregion
//#region src/components/components/typography/elements/H3.tsx
var H3;
var init_H3 = __esmMin((() => {
	init_emotion();
	init_common();
	H3 = styled.h3(({ theme }) => ({
		...withReset({ theme }),
		...headerCommon({ theme }),
		fontSize: `${theme.typography.size.m1}px`
	}));
}));
//#endregion
//#region src/components/components/typography/elements/H4.tsx
var H4;
var init_H4 = __esmMin((() => {
	init_emotion();
	init_common();
	H4 = styled.h4(({ theme }) => ({
		...withReset({ theme }),
		...headerCommon({ theme }),
		fontSize: `${theme.typography.size.s3}px`
	}));
}));
//#endregion
//#region src/components/components/typography/elements/H5.tsx
var H5;
var init_H5 = __esmMin((() => {
	init_emotion();
	init_common();
	H5 = styled.h5(({ theme }) => ({
		...withReset({ theme }),
		...headerCommon({ theme }),
		fontSize: `${theme.typography.size.s2}px`
	}));
}));
//#endregion
//#region src/components/components/typography/elements/H6.tsx
var H6;
var init_H6 = __esmMin((() => {
	init_emotion();
	init_common();
	H6 = styled.h6(({ theme }) => ({
		...withReset({ theme }),
		...headerCommon({ theme }),
		fontSize: `${theme.typography.size.s2}px`,
		color: theme.color.dark
	}));
}));
//#endregion
//#region src/components/components/typography/elements/HR.tsx
var HR;
var init_HR = __esmMin((() => {
	init_emotion();
	HR = styled.hr(({ theme }) => ({
		border: "0 none",
		borderTop: `1px solid ${theme.appBorderColor}`,
		height: 4,
		padding: 0
	}));
}));
//#endregion
//#region src/components/components/typography/elements/Img.tsx
var Img;
var init_Img = __esmMin((() => {
	init_emotion();
	Img = styled.img({ maxWidth: "100%" });
}));
//#endregion
//#region src/components/components/typography/elements/LI.tsx
var LI;
var init_LI = __esmMin((() => {
	init_emotion();
	init_common();
	LI = styled.li(({ theme }) => ({
		...withReset({ theme }),
		fontSize: theme.typography.size.s2,
		color: theme.color.defaultText,
		lineHeight: "24px",
		"& + li": { marginTop: ".25em" },
		"& ul, & ol": {
			marginTop: ".25em",
			marginBottom: 0
		},
		"& code": codeCommon({ theme })
	}));
}));
//#endregion
//#region src/components/components/typography/elements/OL.tsx
var listCommon$1, OL;
var init_OL = __esmMin((() => {
	init_emotion();
	init_common();
	listCommon$1 = {
		paddingLeft: 30,
		"& :first-of-type": { marginTop: 0 },
		"& :last-child": { marginBottom: 0 }
	};
	OL = styled.ol(({ theme }) => ({
		...withReset({ theme }),
		...withMargin,
		...listCommon$1,
		listStyle: "decimal"
	}));
}));
//#endregion
//#region src/components/components/typography/elements/P.tsx
var P;
var init_P = __esmMin((() => {
	init_emotion();
	init_common();
	P = styled.p(({ theme }) => ({
		...withReset({ theme }),
		...withMargin,
		fontSize: theme.typography.size.s2,
		lineHeight: "24px",
		color: theme.color.defaultText,
		"& code": codeCommon({ theme })
	}));
}));
//#endregion
//#region src/components/components/typography/elements/Pre.tsx
var Pre$1;
var init_Pre = __esmMin((() => {
	init_emotion();
	init_common();
	Pre$1 = styled.pre(({ theme }) => ({
		...withReset({ theme }),
		...withMargin,
		fontFamily: theme.typography.fonts.mono,
		WebkitFontSmoothing: "antialiased",
		MozOsxFontSmoothing: "grayscale",
		lineHeight: "18px",
		padding: "11px 1rem",
		whiteSpace: "pre-wrap",
		color: "inherit",
		borderRadius: 3,
		margin: "1rem 0",
		"&:not(.prismjs)": {
			background: "transparent",
			border: "none",
			borderRadius: 0,
			padding: 0,
			margin: 0
		},
		"& pre, &.prismjs": {
			padding: 15,
			margin: 0,
			whiteSpace: "pre-wrap",
			color: "inherit",
			fontSize: "13px",
			lineHeight: "19px",
			code: {
				color: "inherit",
				fontSize: "inherit"
			}
		},
		"& code": { whiteSpace: "pre" },
		"& code, & tt": { border: "none" }
	}));
}));
//#endregion
//#region src/components/components/typography/elements/Span.tsx
var Span;
var init_Span = __esmMin((() => {
	init_emotion();
	init_common();
	Span = styled.span(({ theme }) => ({
		...withReset({ theme }),
		"&.frame": {
			display: "block",
			overflow: "hidden",
			"& > span": {
				border: `1px solid ${theme.color.medium}`,
				display: "block",
				float: "left",
				overflow: "hidden",
				margin: "13px 0 0",
				padding: 7,
				width: "auto"
			},
			"& span img": {
				display: "block",
				float: "left"
			},
			"& span span": {
				clear: "both",
				color: theme.color.darkest,
				display: "block",
				padding: "5px 0 0"
			}
		},
		"&.align-center": {
			display: "block",
			overflow: "hidden",
			clear: "both",
			"& > span": {
				display: "block",
				overflow: "hidden",
				margin: "13px auto 0",
				textAlign: "center"
			},
			"& span img": {
				margin: "0 auto",
				textAlign: "center"
			}
		},
		"&.align-right": {
			display: "block",
			overflow: "hidden",
			clear: "both",
			"& > span": {
				display: "block",
				overflow: "hidden",
				margin: "13px 0 0",
				textAlign: "right"
			},
			"& span img": {
				margin: 0,
				textAlign: "right"
			}
		},
		"&.float-left": {
			display: "block",
			marginRight: 13,
			overflow: "hidden",
			float: "left",
			"& span": { margin: "13px 0 0" }
		},
		"&.float-right": {
			display: "block",
			marginLeft: 13,
			overflow: "hidden",
			float: "right",
			"& > span": {
				display: "block",
				overflow: "hidden",
				margin: "13px auto 0",
				textAlign: "right"
			}
		}
	}));
}));
//#endregion
//#region src/components/components/typography/elements/TT.tsx
var TT;
var init_TT = __esmMin((() => {
	init_emotion();
	init_common();
	TT = styled.title(codeCommon);
}));
//#endregion
//#region src/components/components/typography/elements/Table.tsx
var Table;
var init_Table = __esmMin((() => {
	init_emotion();
	init_common();
	Table = styled.table(({ theme }) => ({
		...withReset({ theme }),
		...withMargin,
		fontSize: theme.typography.size.s2,
		lineHeight: "24px",
		padding: 0,
		borderCollapse: "collapse",
		"& tr": {
			borderTop: `1px solid ${theme.appBorderColor}`,
			backgroundColor: theme.appContentBg,
			margin: 0,
			padding: 0
		},
		"& tr:nth-of-type(2n)": { backgroundColor: theme.base === "dark" ? theme.color.darker : theme.color.lighter },
		"& tr th": {
			fontWeight: "bold",
			color: theme.color.defaultText,
			border: `1px solid ${theme.appBorderColor}`,
			margin: 0,
			padding: "6px 13px"
		},
		"& tr td": {
			border: `1px solid ${theme.appBorderColor}`,
			color: theme.color.defaultText,
			margin: 0,
			padding: "6px 13px"
		},
		"& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 },
		"& tr th :last-child, & tr td :last-child": { marginBottom: 0 }
	}));
}));
//#endregion
//#region src/components/components/typography/elements/UL.tsx
var listCommon, UL;
var init_UL = __esmMin((() => {
	init_emotion();
	init_common();
	listCommon = {
		paddingLeft: 30,
		"& :first-of-type": { marginTop: 0 },
		"& :last-child": { marginBottom: 0 }
	};
	UL = styled.ul(({ theme }) => ({
		...withReset({ theme }),
		...withMargin,
		...listCommon,
		listStyle: "disc"
	}));
}));
//#endregion
//#region src/components/components/typography/components.tsx
var import_react$52, components$1;
var init_components$1 = __esmMin((() => {
	import_react$52 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_DocumentFormatting();
	init_ResetWrapper();
	init_A();
	init_Blockquote();
	init_Code();
	init_DL();
	init_Div();
	init_H1();
	init_H2();
	init_H3();
	init_H4();
	init_H5();
	init_H6();
	init_HR();
	init_Img();
	init_LI();
	init_OL();
	init_P();
	init_Pre();
	init_Span();
	init_TT();
	init_Table();
	init_UL();
	components$1 = {
		h1: (props) => /* @__PURE__ */ import_react$52.default.createElement(H1, nameSpaceClassNames(props, "h1")),
		h2: (props) => /* @__PURE__ */ import_react$52.default.createElement(H2, nameSpaceClassNames(props, "h2")),
		h3: (props) => /* @__PURE__ */ import_react$52.default.createElement(H3, nameSpaceClassNames(props, "h3")),
		h4: (props) => /* @__PURE__ */ import_react$52.default.createElement(H4, nameSpaceClassNames(props, "h4")),
		h5: (props) => /* @__PURE__ */ import_react$52.default.createElement(H5, nameSpaceClassNames(props, "h5")),
		h6: (props) => /* @__PURE__ */ import_react$52.default.createElement(H6, nameSpaceClassNames(props, "h6")),
		pre: (props) => /* @__PURE__ */ import_react$52.default.createElement(Pre$1, nameSpaceClassNames(props, "pre")),
		a: (props) => /* @__PURE__ */ import_react$52.default.createElement(A$1, nameSpaceClassNames(props, "a")),
		hr: (props) => /* @__PURE__ */ import_react$52.default.createElement(HR, nameSpaceClassNames(props, "hr")),
		dl: (props) => /* @__PURE__ */ import_react$52.default.createElement(DL, nameSpaceClassNames(props, "dl")),
		blockquote: (props) => /* @__PURE__ */ import_react$52.default.createElement(Blockquote, nameSpaceClassNames(props, "blockquote")),
		table: (props) => /* @__PURE__ */ import_react$52.default.createElement(Table, nameSpaceClassNames(props, "table")),
		img: (props) => /* @__PURE__ */ import_react$52.default.createElement(Img, nameSpaceClassNames(props, "img")),
		div: (props) => /* @__PURE__ */ import_react$52.default.createElement(Div$1, nameSpaceClassNames(props, "div")),
		span: (props) => /* @__PURE__ */ import_react$52.default.createElement(Span, nameSpaceClassNames(props, "span")),
		li: (props) => /* @__PURE__ */ import_react$52.default.createElement(LI, nameSpaceClassNames(props, "li")),
		ul: (props) => /* @__PURE__ */ import_react$52.default.createElement(UL, nameSpaceClassNames(props, "ul")),
		ol: (props) => /* @__PURE__ */ import_react$52.default.createElement(OL, nameSpaceClassNames(props, "ol")),
		p: (props) => /* @__PURE__ */ import_react$52.default.createElement(P, nameSpaceClassNames(props, "p")),
		code: (props) => /* @__PURE__ */ import_react$52.default.createElement(Code$2, nameSpaceClassNames(props, "code")),
		tt: (props) => /* @__PURE__ */ import_react$52.default.createElement(TT, nameSpaceClassNames(props, "tt")),
		resetwrapper: (props) => /* @__PURE__ */ import_react$52.default.createElement(ResetWrapper, nameSpaceClassNames(props, "resetwrapper"))
	};
}));
//#endregion
//#region src/components/components/Badge/Badge.tsx
var import_react$51, BadgeWrapper, Badge;
var init_Badge = __esmMin((() => {
	import_react$51 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_polished_esm();
	init_emotion();
	BadgeWrapper = styled.div(({ theme, compact }) => ({
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: theme.typography.size.s1,
		fontWeight: theme.typography.weight.bold,
		lineHeight: "12px",
		minWidth: 20,
		borderRadius: 20,
		padding: compact ? "4px 7px" : "4px 10px"
	}), { svg: {
		height: 12,
		width: 12,
		marginRight: 4,
		marginTop: -2,
		path: { fill: "currentColor" }
	} }, ({ theme, status }) => {
		switch (status) {
			case "critical": return {
				color: theme.fgColor.critical,
				background: theme.bgColor.critical,
				boxShadow: `inset 0 0 0 1px ${theme.borderColor.critical}`
			};
			case "negative": return {
				color: theme.fgColor.negative,
				background: theme.bgColor.negative,
				boxShadow: `inset 0 0 0 1px ${theme.borderColor.negative}`
			};
			case "warning": return {
				color: theme.fgColor.warning,
				background: theme.bgColor.warning,
				boxShadow: `inset 0 0 0 1px ${theme.borderColor.warning}`
			};
			case "neutral": return {
				color: theme.fgColor.muted,
				background: theme.base === "dark" ? theme.barBg : theme.background.app,
				boxShadow: `inset 0 0 0 1px ${curriedTransparentize$1(.8, theme.textMutedColor)}`
			};
			case "positive": return {
				color: theme.fgColor.positive,
				background: theme.bgColor.positive,
				boxShadow: `inset 0 0 0 1px ${theme.borderColor.positive}`
			};
			case "active": return {
				color: theme.base === "light" ? curriedDarken$1(.1, theme.color.secondary) : theme.color.secondary,
				background: theme.background.hoverable,
				boxShadow: `inset 0 0 0 1px ${curriedTransparentize$1(.9, theme.color.secondary)}`
			};
			default: return {};
		}
	});
	Badge = ({ ...props }) => {
		return /* @__PURE__ */ import_react$51.default.createElement(BadgeWrapper, props);
	};
}));
//#endregion
//#region src/components/components/typography/link/link.tsx
var import_react$50, LEFT_BUTTON, isPlainLeftClick, cancelled, LinkInner, A, Link;
var init_link = __esmMin((() => {
	import_react$50 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$2();
	init_polished_esm();
	init_emotion();
	LEFT_BUTTON = 0;
	isPlainLeftClick = (e) => e.button === LEFT_BUTTON && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey;
	cancelled = (e, cb) => {
		if (isPlainLeftClick(e)) {
			e.preventDefault();
			cb(e);
		}
	};
	LinkInner = styled.span(({ withArrow }) => withArrow ? { "> svg:last-of-type": {
		height: "0.7em",
		width: "0.7em",
		marginRight: 0,
		marginLeft: "0.25em",
		bottom: "auto",
		verticalAlign: "inherit"
	} } : {}, ({ containsIcon }) => containsIcon ? { svg: {
		height: "1em",
		width: "1em",
		verticalAlign: "middle",
		position: "relative",
		bottom: 0,
		marginRight: 0
	} } : {});
	A = styled.a(({ theme }) => ({
		display: "inline-block",
		transition: "all 150ms ease-out",
		textDecoration: "none",
		color: theme.color.secondary,
		"&:hover, &:focus": {
			cursor: "pointer",
			color: curriedDarken$1(.07, theme.color.secondary),
			"svg path:not([fill])": { fill: curriedDarken$1(.07, theme.color.secondary) }
		},
		"&:active": {
			color: curriedDarken$1(.1, theme.color.secondary),
			"svg path:not([fill])": { fill: curriedDarken$1(.1, theme.color.secondary) }
		},
		"&:focus-visible": {
			outline: `2px solid ${theme.color.secondary}`,
			outlineOffset: 2,
			borderRadius: theme.input.borderRadius,
			zIndex: "1"
		},
		svg: {
			display: "inline-block",
			height: "1em",
			width: "1em",
			verticalAlign: "text-top",
			position: "relative",
			bottom: "-0.125em",
			marginRight: "0.4em",
			"& path": { fill: theme.color.secondary }
		}
	}), ({ theme, secondary, tertiary }) => {
		let colors;
		if (secondary) colors = [
			theme.textMutedColor,
			theme.color.secondary,
			theme.color.secondary
		];
		if (tertiary) colors = [
			theme.color.dark,
			theme.color.secondary,
			theme.color.secondary
		];
		return colors ? {
			color: colors[0],
			"svg path:not([fill])": { fill: colors[0] },
			"&:hover": {
				color: colors[1],
				"svg path:not([fill])": { fill: colors[1] }
			},
			"&:active": {
				color: colors[2],
				"svg path:not([fill])": { fill: colors[2] }
			}
		} : {};
	}, ({ nochrome }) => nochrome ? {
		color: "inherit",
		"&:hover, &:active": {
			color: "inherit",
			textDecoration: "underline"
		}
	} : {}, ({ theme, inverse }) => inverse ? {
		color: theme.color.lightest,
		":not([fill])": { fill: theme.color.lightest },
		"&:hover": {
			color: theme.color.lighter,
			"svg path:not([fill])": { fill: theme.color.lighter }
		},
		"&:active": {
			color: theme.color.light,
			"svg path:not([fill])": { fill: theme.color.light }
		}
	} : {}, ({ href, theme }) => !href ? {
		border: 0,
		borderRadius: theme.input.borderRadius,
		background: "none",
		padding: 0,
		fontSize: "inherit",
		lineHeight: "inherit"
	} : {});
	Link = (0, import_react$50.forwardRef)(({ cancel = true, children, onClick = void 0, withArrow = false, containsIcon = false, className = void 0, href, ...rest }, ref) => {
		return /* @__PURE__ */ import_react$50.default.createElement(A, {
			as: href ? "a" : "button",
			href,
			...rest,
			ref,
			onClick: onClick && cancel ? (e) => cancelled(e, onClick) : onClick,
			className
		}, /* @__PURE__ */ import_react$50.default.createElement(LinkInner, {
			withArrow,
			containsIcon
		}, children, withArrow && /* @__PURE__ */ import_react$50.default.createElement(ChevronRightIcon, null)));
	});
	Link.displayName = "Link";
}));
//#endregion
//#region src/components/components/typography/DocumentWrapper.tsx
var DocumentWrapper;
var init_DocumentWrapper = __esmMin((() => {
	init_emotion();
	DocumentWrapper = styled.div(({ theme }) => ({
		fontSize: `${theme.typography.size.s2}px`,
		lineHeight: "1.6",
		h1: {
			fontSize: `${theme.typography.size.l1}px`,
			fontWeight: theme.typography.weight.bold
		},
		h2: {
			fontSize: `${theme.typography.size.m2}px`,
			borderBottom: `1px solid ${theme.appBorderColor}`
		},
		h3: { fontSize: `${theme.typography.size.m1}px` },
		h4: { fontSize: `${theme.typography.size.s3}px` },
		h5: { fontSize: `${theme.typography.size.s2}px` },
		h6: {
			fontSize: `${theme.typography.size.s2}px`,
			color: theme.color.dark
		},
		"pre:not(.prismjs)": {
			background: "transparent",
			border: "none",
			borderRadius: 0,
			padding: 0,
			margin: 0
		},
		"pre pre, pre.prismjs": {
			padding: 15,
			margin: 0,
			whiteSpace: "pre-wrap",
			color: "inherit",
			fontSize: "13px",
			lineHeight: "19px"
		},
		"pre pre code, pre.prismjs code": {
			color: "inherit",
			fontSize: "inherit"
		},
		"pre code": {
			margin: 0,
			padding: 0,
			whiteSpace: "pre",
			border: "none",
			background: "transparent"
		},
		"pre code, pre tt": {
			backgroundColor: "transparent",
			border: "none"
		},
		"body > *:first-of-type": { marginTop: "0 !important" },
		"body > *:last-child": { marginBottom: "0 !important" },
		a: {
			color: theme.color.secondary,
			textDecoration: "underline",
			textDecorationThickness: "0.03125rem",
			textUnderlineOffset: "0.11em",
			"& code": {
				color: "inherit",
				textDecoration: "underline",
				textDecorationThickness: "0.03125rem",
				paddingLeft: 0,
				paddingRight: 0,
				"&::before": {
					content: "\"\\00a0\"",
					fontSize: "0.5em"
				},
				"&::after": {
					content: "\"\\00a0\"",
					fontSize: "0.5em"
				}
			}
		},
		"a.absent": { color: "#cc0000" },
		"a.anchor": {
			display: "block",
			paddingLeft: 30,
			marginLeft: -30,
			cursor: "pointer",
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			textDecoration: "none"
		},
		"&.anchor:hover, &.anchor:focus": { textDecoration: "underline" },
		"h1, h2, h3, h4, h5, h6": {
			margin: "20px 0 10px",
			padding: 0,
			cursor: "text",
			position: "relative",
			"&:first-of-type": {
				marginTop: 0,
				paddingTop: 0
			},
			"&:hover a.anchor": { textDecoration: "none" },
			"& tt, & code": { fontSize: "inherit" }
		},
		"h1:first-of-type + h2": {
			marginTop: 0,
			paddingTop: 0
		},
		"p, blockquote, ul, ol, dl, li, table, pre": { margin: "15px 0" },
		hr: {
			border: "0 none",
			borderTop: `1px solid ${theme.appBorderColor}`,
			height: 4,
			padding: 0
		},
		"body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": {
			marginTop: 0,
			paddingTop: 0
		},
		"body > h1:first-of-type + h2": {
			marginTop: 0,
			paddingTop: 0
		},
		"a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": {
			marginTop: 0,
			paddingTop: 0
		},
		"h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": { marginTop: 0 },
		"li p.first": { display: "inline-block" },
		"ul, ol": {
			paddingLeft: 30,
			"& :first-of-type": { marginTop: 0 },
			"& :last-child": { marginBottom: 0 }
		},
		dl: { padding: 0 },
		"dl dt": {
			fontSize: "14px",
			fontWeight: "bold",
			fontStyle: "italic",
			margin: "0 0 15px",
			padding: "0 15px",
			"&:first-of-type": { padding: 0 },
			"& > :first-of-type": { marginTop: 0 },
			"& > :last-child": { marginBottom: 0 }
		},
		blockquote: {
			borderLeft: `4px solid ${theme.color.medium}`,
			padding: "0 15px",
			color: theme.color.dark,
			"& > :first-of-type": { marginTop: 0 },
			"& > :last-child": { marginBottom: 0 }
		},
		table: {
			padding: 0,
			borderCollapse: "collapse",
			"& tr": {
				borderTop: `1px solid ${theme.appBorderColor}`,
				backgroundColor: "white",
				margin: 0,
				padding: 0,
				"& th": {
					fontWeight: "bold",
					border: `1px solid ${theme.appBorderColor}`,
					textAlign: "left",
					margin: 0,
					padding: "6px 13px"
				},
				"& td": {
					border: `1px solid ${theme.appBorderColor}`,
					textAlign: "left",
					margin: 0,
					padding: "6px 13px"
				},
				"&:nth-of-type(2n)": { backgroundColor: theme.color.lighter },
				"& th :first-of-type, & td :first-of-type": { marginTop: 0 },
				"& th :last-child, & td :last-child": { marginBottom: 0 }
			}
		},
		img: { maxWidth: "100%" },
		"span.frame": {
			display: "block",
			overflow: "hidden",
			"& > span": {
				border: `1px solid ${theme.color.medium}`,
				display: "block",
				float: "left",
				overflow: "hidden",
				margin: "13px 0 0",
				padding: 7,
				width: "auto"
			},
			"& span img": {
				display: "block",
				float: "left"
			},
			"& span span": {
				clear: "both",
				color: theme.color.darkest,
				display: "block",
				padding: "5px 0 0"
			}
		},
		"span.align-center": {
			display: "block",
			overflow: "hidden",
			clear: "both",
			"& > span": {
				display: "block",
				overflow: "hidden",
				margin: "13px auto 0",
				textAlign: "center"
			},
			"& span img": {
				margin: "0 auto",
				textAlign: "center"
			}
		},
		"span.align-right": {
			display: "block",
			overflow: "hidden",
			clear: "both",
			"& > span": {
				display: "block",
				overflow: "hidden",
				margin: "13px 0 0",
				textAlign: "right"
			},
			"& span img": {
				margin: 0,
				textAlign: "right"
			}
		},
		"span.float-left": {
			display: "block",
			marginRight: 13,
			overflow: "hidden",
			float: "left",
			"& span": { margin: "13px 0 0" }
		},
		"span.float-right": {
			display: "block",
			marginLeft: 13,
			overflow: "hidden",
			float: "right",
			"& > span": {
				display: "block",
				overflow: "hidden",
				margin: "13px auto 0",
				textAlign: "right"
			}
		},
		"code, tt": {
			margin: "0 2px",
			padding: "0 5px",
			whiteSpace: "nowrap",
			border: `1px solid ${theme.color.mediumlight}`,
			backgroundColor: theme.color.lighter,
			borderRadius: 3,
			color: theme.base === "dark" ? theme.color.darkest : theme.color.dark
		}
	}));
}));
//#endregion
//#region src/components/components/syntaxhighlighter/clipboard.ts
async function copyUsingClipboardAPI(text) {
	try {
		await globalWindow.top?.navigator.clipboard.writeText(text);
	} catch {
		await globalWindow.navigator.clipboard.writeText(text);
	}
}
async function copyUsingWorkAround(text) {
	const tmp = document$2.createElement("TEXTAREA");
	const focus = document$2.activeElement;
	tmp.value = text;
	document$2.body.appendChild(tmp);
	tmp.select();
	document$2.execCommand("copy");
	document$2.body.removeChild(tmp);
	focus.focus();
}
function createCopyToClipboardFunction() {
	return globalWindow.navigator?.clipboard ? copyUsingClipboardAPI : copyUsingWorkAround;
}
var document$2, globalWindow;
var init_clipboard = __esmMin((() => {
	init_dist$1();
	({document: document$2, window: globalWindow} = scope);
}));
//#endregion
//#region src/components/components/ActionBar/ActionBar.tsx
var import_react$49, Container$5, ActionButton, ActionBar;
var init_ActionBar = __esmMin((() => {
	import_react$49 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	Container$5 = styled.div(({ theme, $flexLayout = false }) => [{ background: theme.background.content }, $flexLayout ? {
		display: "inline-flex",
		marginInlineStart: "auto",
		alignSelf: "flex-end"
	} : {
		position: "absolute",
		bottom: 0,
		right: 0,
		maxWidth: "100%",
		display: "flex",
		zIndex: 1
	}]);
	ActionButton = styled.button(({ theme }) => ({
		margin: 0,
		border: "0 none",
		padding: "4px 10px",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		color: theme.color.defaultText,
		background: theme.background.content,
		fontSize: 12,
		lineHeight: "16px",
		fontFamily: theme.typography.fonts.base,
		fontWeight: theme.typography.weight.bold,
		borderTop: `1px solid ${theme.appBorderColor}`,
		borderLeft: `1px solid ${theme.appBorderColor}`,
		marginLeft: -1,
		borderRadius: `4px 0 0 0`,
		"&:not(:last-child)": { borderRight: `1px solid ${theme.appBorderColor}` },
		"& + *": {
			borderLeft: `1px solid ${theme.appBorderColor}`,
			borderRadius: 0
		},
		"&:focus": {
			boxShadow: `${theme.color.secondary} 0 -3px 0 0 inset`,
			outline: "0 none",
			"@media (forced-colors: active)": {
				outline: "2px solid ButtonBorder",
				outlineOffset: "2px"
			}
		}
	}), ({ disabled }) => disabled && {
		cursor: "not-allowed",
		opacity: .5
	});
	ActionButton.displayName = "ActionButton";
	ActionBar = ({ actionItems, flexLayout = false, ...props }) => {
		return /* @__PURE__ */ import_react$49.default.createElement(Container$5, {
			...props,
			$flexLayout: flexLayout
		}, actionItems.map(({ title, ariaLabel, className, onClick, disabled }, index) => /* @__PURE__ */ import_react$49.default.createElement(ActionButton, {
			key: index,
			"aria-label": ariaLabel,
			className,
			onClick,
			disabled: !!disabled
		}, title)));
	};
}));
//#endregion
//#region src/channels/mock-channel.ts
/** In-process channel with no transport — the default for unit tests and manager story mocks. */
function mockChannel() {
	return new Channel({ transport: {
		setHandler: () => {},
		send: () => {}
	} });
}
var init_mock_channel = __esmMin((() => {
	init_main();
}));
//#endregion
//#region src/components/components/tooltip/TooltipNote.tsx
var import_react$48, DEFAULT_MAX_WIDTH, Note, TooltipNote;
var init_TooltipNote = __esmMin((() => {
	import_react$48 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	DEFAULT_MAX_WIDTH = 260;
	Note = styled.div(({ theme }) => ({
		padding: "4px 6px",
		display: "flex",
		gap: "6px",
		lineHeight: "16px",
		fontSize: 10,
		fontFamily: theme.typography.fonts.base,
		fontWeight: theme.typography.weight.bold,
		color: theme.color.lightest,
		boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
		borderRadius: 4,
		pointerEvents: "none",
		zIndex: -1,
		background: theme.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)",
		"& code": {
			padding: "0 3px",
			borderRadius: "2px",
			background: "rgba(255, 255, 255, 0.10)"
		}
	}), ({ maxWidth }) => ({ maxWidth }));
	TooltipNote = ({ note, maxWidth = DEFAULT_MAX_WIDTH, shortcut, ...props }) => {
		return /* @__PURE__ */ import_react$48.default.createElement(Note, {
			maxWidth,
			...props
		}, note && /* @__PURE__ */ import_react$48.default.createElement("span", null, note), shortcut && /* @__PURE__ */ import_react$48.default.createElement("code", null, shortcut));
	};
})), import_react$47, import_memoizerific$2, convertToReactAriaPlacement, Trigger;
var init_overlayHelpers = __esmMin((() => {
	import_react$47 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_memoizerific$2 = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	init_emotion();
	convertToReactAriaPlacement = (0, import_memoizerific$2.default)(1e3)((p) => {
		if (p === "left-end") return "left bottom";
		if (p === "right-end") return "right bottom";
		if (p === "left-start") return "left top";
		if (p === "right-start") return "right top";
		return p.replace("-", " ");
	});
	styled.div({
		width: 500,
		height: 500,
		paddingTop: 100,
		overflowY: "scroll",
		background: "#eee",
		position: "relative"
	});
	Trigger = (0, import_react$47.forwardRef)((props, ref) => /* @__PURE__ */ import_react$47.default.createElement("button", {
		...props,
		ref,
		style: {
			width: 120,
			height: 50,
			margin: 10
		}
	}));
	Trigger.displayName = "Trigger";
}));
//#endregion
//#region src/components/components/tooltip/TooltipProvider.tsx
var import_react$46, import_react_dom, TooltipProvider;
var init_TooltipProvider = __esmMin((() => {
	import_react$46 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	init_Focusable();
	init_Tooltip$1();
	init_overlayHelpers();
	TooltipProvider = ({ triggerOnFocusOnly = false, disabled = false, placement: placementProp = "top", offset = 8, tooltip, children, defaultVisible, delayShow = 400, delayHide = 200, visible, onVisibleChange, ...props }) => {
		const placement = convertToReactAriaPlacement(placementProp);
		const child = import_react$46.Children.only(children);
		const [isOpen, setIsOpen] = (0, import_react$46.useState)(defaultVisible ?? false);
		const onOpenChange = (0, import_react$46.useCallback)((isOpen) => {
			setIsOpen(isOpen);
			onVisibleChange?.(isOpen);
		}, [onVisibleChange]);
		const isTooltipShown = visible ?? isOpen;
		(0, import_react$46.useEffect)(() => {
			if (!isTooltipShown) return;
			const onPointerDown = () => onOpenChange(false);
			document.addEventListener("pointerdown", onPointerDown, true);
			return () => document.removeEventListener("pointerdown", onPointerDown, true);
		}, [isTooltipShown, onOpenChange]);
		(0, import_react$46.useEffect)(() => {
			if (disabled && isTooltipShown) onOpenChange(false);
		}, [
			disabled,
			isTooltipShown,
			onOpenChange
		]);
		const triggerRef = (0, import_react$46.useRef)(null);
		(0, import_react$46.useEffect)(() => {
			const el = triggerRef.current;
			if (!isTooltipShown || !el) return;
			const closeWhenBoxless = () => {
				const rect = el.getBoundingClientRect();
				if (rect.width === 0 && rect.height === 0) (0, import_react_dom.flushSync)(() => onOpenChange(false));
			};
			closeWhenBoxless();
			const resizeObserver = new ResizeObserver(closeWhenBoxless);
			resizeObserver.observe(el);
			return () => resizeObserver.disconnect();
		}, [isTooltipShown, onOpenChange]);
		const childRef = parseInt("18.3.1", 10) < 19 ? child.ref : child.props.ref;
		const setTriggerRef = (node) => {
			triggerRef.current = node;
			if (typeof childRef === "function") childRef(node);
			else if (childRef && typeof childRef === "object") childRef.current = node;
		};
		return /* @__PURE__ */ import_react$46.default.createElement($05a50f7d78b03ad9$export$8c610744efcf8a1d, {
			delay: delayShow,
			closeDelay: delayHide,
			isDisabled: disabled,
			isOpen: visible ?? isOpen,
			onOpenChange,
			trigger: triggerOnFocusOnly ? "focus" : void 0,
			...props
		}, /* @__PURE__ */ import_react$46.default.createElement($d1116acdf220c2da$export$35a3bebf7ef2d934, null, import_react$46.cloneElement(child, { ref: setTriggerRef })), isTooltipShown ? /* @__PURE__ */ import_react$46.default.createElement($05a50f7d78b03ad9$export$28c660c63b792dea, {
			"data-testid": "tooltip",
			placement,
			offset,
			onOpenChange,
			style: { outline: "none" },
			...props
		}, tooltip) : /* @__PURE__ */ import_react$46.default.createElement(import_react$46.default.Fragment, null));
	};
}));
//#endregion
//#region src/components/components/Button/helpers/InteractiveTooltipWrapper.tsx
var import_react$45, InteractiveTooltipWrapper;
var init_InteractiveTooltipWrapper = __esmMin((() => {
	import_react$45 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_manager_api();
	init_TooltipNote();
	init_TooltipProvider();
	InteractiveTooltipWrapper = ({ children, disableAllTooltips, shortcut, tooltip, tooltipPlacement = "top" }) => {
		const shortcutLabel = (0, import_react$45.useMemo)(() => {
			if (!shortcut) return;
			if (!(document?.body?.getAttribute("data-shortcuts-enabled") !== "false")) return;
			return shortcutToHumanString(shortcut);
		}, [shortcut]);
		return tooltip || shortcutLabel ? /* @__PURE__ */ import_react$45.default.createElement(TooltipProvider, {
			placement: tooltipPlacement,
			tooltip: /* @__PURE__ */ import_react$45.default.createElement(TooltipNote, {
				note: tooltip,
				shortcut: shortcutLabel
			}),
			disabled: disableAllTooltips
		}, import_react$45.cloneElement(children, { "aria-describedby": null })) : /* @__PURE__ */ import_react$45.default.createElement(import_react$45.default.Fragment, null, children);
	};
	InteractiveTooltipWrapper.displayName = "InteractiveTooltipWrapper";
}));
//#endregion
//#region src/components/components/Button/helpers/useAriaDescription.tsx
/**
* Provides a way to create an accessible description for an element. Returns a hidden element that
* contains the description and attributes to pass to the described element.
*
* @param description The description to provide for the element.
* @returns
*/
function useAriaDescription(description = "") {
	const describedbyId = description.toLowerCase().trim().replace(/\s+/g, "-");
	return {
		ariaDescriptionAttrs: { "aria-describedby": description ? describedbyId : void 0 },
		AriaDescription: () => description ? /* @__PURE__ */ import_react$44.default.createElement("span", {
			id: describedbyId,
			hidden: true
		}, description) : null
	};
}
var import_react$44;
var init_useAriaDescription = __esmMin((() => {
	import_react$44 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region src/components/components/Button/Button.tsx
var import_react$43, Button, StyledButton$2;
var init_Button = __esmMin((() => {
	import_react$43 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$3();
	init_polished_esm();
	init_manager_api();
	init_emotion();
	init_InteractiveTooltipWrapper();
	init_useAriaDescription();
	Button = (0, import_react$43.forwardRef)(({ as = "button", asChild = false, animation = "none", size = "small", appearance = "default", variant = "outline", padding = "medium", disabled = false, readOnly = false, onClick, ariaLabel, ariaDescription = void 0, tooltip = void 0, tooltipPlacement = "top", shortcut = void 0, disableAllTooltips = false, ...props }, ref) => {
		const Comp = asChild ? Slot : as;
		const { ariaDescriptionAttrs, AriaDescription } = useAriaDescription(ariaDescription);
		const shortcutAttribute = (0, import_react$43.useMemo)(() => {
			return shortcut ? shortcutToAriaKeyshortcuts(shortcut) : void 0;
		}, [shortcut]);
		const [isAnimating, setIsAnimating] = (0, import_react$43.useState)(false);
		const handleClick = (event) => {
			if (onClick) onClick(event);
			if (animation === "none") return;
			setIsAnimating(true);
		};
		(0, import_react$43.useEffect)(() => {
			if (!isAnimating) return;
			const timer = setTimeout(() => setIsAnimating(false), 1e3);
			return () => clearTimeout(timer);
		}, [isAnimating]);
		const finalTooltip = tooltip || (ariaLabel !== false ? ariaLabel : void 0);
		return /* @__PURE__ */ import_react$43.default.createElement(import_react$43.default.Fragment, null, /* @__PURE__ */ import_react$43.default.createElement(InteractiveTooltipWrapper, {
			disableAllTooltips,
			shortcut,
			tooltip: finalTooltip,
			tooltipPlacement
		}, /* @__PURE__ */ import_react$43.default.createElement(StyledButton$2, {
			as: Comp,
			ref,
			appearance,
			variant,
			size,
			padding,
			$disabled: disabled || readOnly,
			"aria-disabled": disabled || readOnly ? "true" : void 0,
			readOnly,
			animating: isAnimating,
			animation,
			onClick: disabled || readOnly ? void 0 : handleClick,
			"aria-label": !readOnly && ariaLabel !== false ? ariaLabel : void 0,
			"aria-keyshortcuts": readOnly ? void 0 : shortcutAttribute,
			...readOnly ? {} : ariaDescriptionAttrs,
			...props
		})), /* @__PURE__ */ import_react$43.default.createElement(AriaDescription, null));
	});
	Button.displayName = "Button";
	StyledButton$2 = styled("button", { shouldForwardProp: (prop) => isPropValid(prop) })(({ theme, appearance, variant, size, $disabled, readOnly, animating, animation = "none", padding }) => {
		const colors = appearance === "agentic" ? {
			foreground: theme.fgColor.agentic,
			background: theme.bgColor.agentic,
			outline: theme.borderColor.agentic
		} : {
			foreground: theme.color.secondary,
			background: theme.button.background,
			outline: theme.button.border
		};
		return {
			border: 0,
			cursor: readOnly ? "inherit" : $disabled ? "not-allowed" : "pointer",
			display: "inline-flex",
			gap: "6px",
			alignItems: "center",
			justifyContent: "center",
			overflow: "hidden",
			padding: (() => {
				if (padding === "none") return 0;
				if (padding === "small" && size === "small") return "0 7px";
				if (padding === "small" && size === "medium") return "0 9px";
				if (size === "small") return "0 10px";
				if (size === "medium") return "0 12px";
				return 0;
			})(),
			height: size === "small" ? "28px" : "32px",
			position: "relative",
			textAlign: "center",
			textDecoration: "none",
			transitionProperty: "background, box-shadow",
			transitionDuration: "150ms",
			transitionTimingFunction: "ease-out",
			verticalAlign: "top",
			whiteSpace: "nowrap",
			userSelect: "none",
			opacity: $disabled && !readOnly ? .5 : 1,
			margin: 0,
			fontSize: `${theme.typography.size.s1}px`,
			fontWeight: theme.typography.weight.bold,
			lineHeight: "1",
			background: (() => {
				if (variant === "solid") return theme.base === "light" ? colors.foreground : curriedDarken$1(.18, colors.foreground);
				if (variant === "outline") return colors.background;
				return "transparent";
			})(),
			color: (() => {
				if (variant === "solid") return theme.color.lightest;
				if (variant === "outline") return appearance === "agentic" ? theme.fgColor.agentic : theme.input.color;
				if (variant === "ghost") return theme.textMutedColor;
				return theme.input.color;
			})(),
			boxShadow: variant === "outline" ? `${colors.outline} 0 0 0 1px inset` : "none",
			borderRadius: theme.input.borderRadius,
			flexShrink: 0,
			...!readOnly && {
				"&:hover": {
					color: variant === "ghost" ? colors.foreground : void 0,
					background: (() => {
						let bgColor = colors.foreground;
						if (variant === "solid") bgColor = theme.base === "light" ? curriedLighten$1(.1, colors.foreground) : curriedDarken$1(.3, colors.foreground);
						if (variant === "outline") bgColor = colors.background;
						if (variant === "ghost") return curriedTransparentize$1(.86, colors.foreground);
						return theme.base === "light" ? curriedDarken$1(.02, bgColor) : curriedLighten$1(.03, bgColor);
					})()
				},
				"&:active": {
					color: variant === "ghost" ? colors.foreground : void 0,
					background: (() => {
						let bgColor = colors.foreground;
						if (variant === "solid") bgColor = colors.foreground;
						if (variant === "outline") bgColor = colors.background;
						if (variant === "ghost") return appearance === "agentic" ? theme.bgColor.agentic : theme.background.hoverable;
						return theme.base === "light" ? curriedDarken$1(.02, bgColor) : curriedLighten$1(.03, bgColor);
					})()
				},
				"&:focus-visible": {
					outline: `2px solid ${rgba(colors.foreground, 1)}`,
					outlineOffset: 2,
					zIndex: "1"
				},
				".sb-bar &:focus-visible, .sb-list &:focus-visible": { outlineOffset: 0 }
			},
			"> svg": {
				flex: "0 0 auto",
				animation: animating && animation !== "none" ? `${theme.animation[animation]} 1000ms ease-out` : ""
			}
		};
	});
}));
//#endregion
//#region src/components/components/ToggleButton/ToggleButton.tsx
var import_react$42, ToggleButton, StyledToggle;
var init_ToggleButton = __esmMin((() => {
	import_react$42 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_polished_esm();
	init_emotion();
	init_Button();
	ToggleButton = (0, import_react$42.forwardRef)(({ pressed, ...props }, ref) => {
		return /* @__PURE__ */ import_react$42.default.createElement(StyledToggle, {
			role: "switch",
			"aria-checked": pressed,
			ref,
			pressed,
			...props
		});
	});
	ToggleButton.displayName = "ToggleButton";
	StyledToggle = styled(Button)(({ theme, variant = "outline", pressed }) => ({ ...pressed ? {
		...variant === "solid" ? { background: theme.base === "lighten" ? curriedDarken$1(.1, theme.color.secondary) : curriedDarken$1(.2, theme.color.secondary) } : {},
		...variant === "outline" ? {
			background: curriedTransparentize$1(.94, theme.barSelectedColor),
			boxShadow: `${theme.barSelectedColor} 0 0 0 1px inset`,
			color: theme.barSelectedColor
		} : {},
		...variant === "ghost" ? {
			background: curriedTransparentize$1(.93, theme.barSelectedColor),
			color: theme.base === "light" ? curriedDarken$1(.1, theme.color.secondary) : theme.color.secondary
		} : {}
	} : {} }));
}));
//#endregion
//#region src/components/components/ActionList/ActionList.tsx
var import_react$41, StyledButton$1, collapsedItem, expandedItem, ActionListItem, ActionListHoverItem, ActionListButton, ActionListToggle, ActionListAction, ActionListLink, ActionListText, ActionListIcon, ActionList;
var init_ActionList = __esmMin((() => {
	import_react$41 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_polished_esm();
	init_emotion();
	init_Button();
	init_ToggleButton();
	StyledButton$1 = styled(Button)(({ size }) => ({
		gap: size === "small" ? 6 : 8,
		"&:focus-visible": { outlineOffset: -2 }
	}));
	collapsedItem = {
		opacity: 0,
		blockSize: 0,
		minHeight: 0
	};
	expandedItem = {
		opacity: 1,
		blockSize: "auto",
		contentVisibility: "visible"
	};
	ActionListItem = styled.li(({ active, theme }) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		flex: "0 0 auto",
		overflow: "hidden",
		minHeight: 32,
		gap: 4,
		fontSize: theme.typography.size.s1,
		fontWeight: active ? theme.typography.weight.bold : theme.typography.weight.regular,
		color: active ? "var(--listbox-item-active-color)" : theme.color.defaultText,
		"--listbox-item-active-color": theme.base === "light" ? curriedDarken$1(.1, theme.color.secondary) : theme.color.secondary,
		"--listbox-item-muted-color": active ? "var(--listbox-item-active-color)" : theme.color.mediumdark,
		"&[aria-disabled=\"true\"]": {
			opacity: .5,
			cursor: "not-allowed"
		},
		"&[aria-selected=\"true\"]": {
			color: "var(--listbox-item-active-color)",
			fontWeight: theme.typography.weight.bold,
			"--listbox-item-muted-color": "var(--listbox-item-active-color)"
		},
		"&:not(:hover, :has(:focus-visible)) :not(input) + input": {
			position: "absolute",
			opacity: 0
		},
		"&[role=\"option\"]": {
			cursor: "pointer",
			borderRadius: theme.input.borderRadius,
			outlineOffset: -2,
			padding: "0 9px",
			gap: 8,
			"&:hover": { background: curriedTransparentize$1(.86, theme.color.secondary) },
			"&:focus-visible": { outline: `2px solid ${theme.color.secondary}` }
		},
		"@supports (interpolate-size: allow-keywords)": {
			interpolateSize: "allow-keywords",
			transitionBehavior: "allow-discrete",
			transitionDuration: "var(--transition-duration, 0.2s)",
			transitionProperty: "opacity, block-size, min-height, content-visibility"
		},
		"@media (prefers-reduced-motion: reduce)": { transition: "none" }
	}), ({ transitionStatus }) => {
		switch (transitionStatus) {
			case "preEnter":
			case "exiting":
			case "exited": return {
				...collapsedItem,
				contentVisibility: "hidden"
			};
			case "entering": return {
				...expandedItem,
				"@starting-style": collapsedItem
			};
			default: return expandedItem;
		}
	});
	ActionListHoverItem = styled(ActionListItem)(({ targetId }) => ({
		gap: 0,
		[`& [data-target-id="${targetId}"]`]: {
			inlineSize: "auto",
			marginLeft: 4,
			opacity: 1,
			"@supports (interpolate-size: allow-keywords)": {
				interpolateSize: "allow-keywords",
				transitionProperty: "inline-size, margin-left, opacity, padding-inline",
				transitionDuration: "var(--transition-duration, 0.2s)"
			}
		},
		[`&:not(:hover, :has(:focus-visible)) [data-target-id="${targetId}"]`]: {
			inlineSize: 0,
			marginLeft: 0,
			opacity: 0,
			paddingInline: 0
		}
	}));
	ActionListButton = (0, import_react$41.forwardRef)(function ActionListButton({ padding = "small", size = "medium", variant = "ghost", ...props }, ref) {
		return /* @__PURE__ */ import_react$41.default.createElement(StyledButton$1, {
			...props,
			variant,
			padding,
			size,
			ref
		});
	});
	ActionListToggle = (0, import_react$41.forwardRef)(function ActionListToggle({ padding = "small", size = "medium", variant = "ghost", ...props }, ref) {
		return /* @__PURE__ */ import_react$41.default.createElement(ToggleButton, {
			...props,
			variant,
			padding,
			size,
			ref
		});
	});
	ActionListAction = styled(ActionListButton)(({ theme }) => ({
		height: "auto",
		minHeight: 32,
		flex: "0 1 100%",
		textAlign: "start",
		justifyContent: "space-between",
		fontWeight: "inherit",
		color: "inherit",
		"&:hover": { color: "inherit" },
		"& input:enabled:focus-visible": { outline: "none" },
		"&:has(input:focus-visible)": {
			outline: `2px solid ${theme.color.secondary}`,
			outlineOffset: -2
		}
	}));
	ActionListLink = (props) => /* @__PURE__ */ import_react$41.default.createElement(ActionListAction, {
		as: "a",
		...props
	});
	ActionListText = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		flexGrow: 1,
		minWidth: 0,
		padding: "8px 0",
		lineHeight: "16px",
		"& > *": {
			margin: 0,
			whiteSpace: "normal"
		},
		"& > span": {
			overflow: "hidden",
			textOverflow: "ellipsis",
			whiteSpace: "nowrap"
		},
		"& small": {
			fontSize: "inherit",
			color: theme.textMutedColor
		},
		"&:first-child": { paddingLeft: 8 },
		"&:last-child": { paddingRight: 8 },
		"button > &:first-child, [role=\"option\"] > &:first-child": { paddingLeft: 0 },
		"button > &:last-child, [role=\"option\"] > &:last-child": { paddingRight: 0 }
	}));
	ActionListIcon = styled.div({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flex: "0 0 14px",
		width: 14,
		height: 14,
		color: "var(--listbox-item-muted-color)"
	});
	ActionList = Object.assign(styled.ul(({ theme, onClick }) => ({
		listStyle: "none",
		margin: 0,
		padding: 4,
		cursor: onClick ? "pointer" : "default",
		"& + *": { borderTop: `1px solid ${theme.appBorderColor}` }
	})), {
		Item: ActionListItem,
		HoverItem: ActionListHoverItem,
		Button: ActionListButton,
		Toggle: ActionListToggle,
		Action: ActionListAction,
		Link: ActionListLink,
		Text: ActionListText,
		Icon: ActionListIcon
	});
}));
//#endregion
//#region src/components/components/Collapsible/Collapsible.tsx
var import_react$40, CollapsibleContent, Collapsible, useSessionState, useCollapsible;
var init_Collapsible = __esmMin((() => {
	import_react$40 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_useId$1();
	init_emotion();
	CollapsibleContent = styled.div(({ collapsed = false }) => ({
		blockSize: collapsed ? 0 : "auto",
		contentVisibility: collapsed ? "hidden" : "visible",
		transform: collapsed ? "translateY(-10px)" : "translateY(0)",
		opacity: collapsed ? 0 : 1,
		overflow: "hidden",
		"@supports (interpolate-size: allow-keywords)": {
			interpolateSize: "allow-keywords",
			transition: "all var(--transition-duration, 0.2s)",
			transitionBehavior: "allow-discrete"
		},
		"@media (prefers-reduced-motion: reduce)": { transition: "none" }
	}));
	Collapsible = Object.assign(function Collapsible({ children, summary, collapsed, disabled, initialCollapsed, storageKey, state: providedState, ...props }) {
		const internalState = useCollapsible({
			collapsed,
			disabled,
			initialCollapsed,
			storageKey
		});
		const state = providedState || internalState;
		return /* @__PURE__ */ import_react$40.default.createElement(import_react$40.default.Fragment, null, typeof summary === "function" ? summary(state) : summary, /* @__PURE__ */ import_react$40.default.createElement(CollapsibleContent, {
			...props,
			id: state.contentId,
			collapsed: state.isCollapsed,
			"aria-hidden": state.isCollapsed
		}, typeof children === "function" ? children(state) : children));
	}, { Content: CollapsibleContent });
	useSessionState = (key, initialValue) => {
		const [value, setValue] = (0, import_react$40.useState)(() => {
			try {
				return JSON.parse(sessionStorage.getItem(key)) ?? initialValue;
			} catch {
				return initialValue;
			}
		});
		(0, import_react$40.useEffect)(() => {
			try {
				if (key) sessionStorage.setItem(key, JSON.stringify(value));
			} catch {}
		}, [key, value]);
		return [value, setValue];
	};
	useCollapsible = ({ collapsed, disabled, initialCollapsed = collapsed, storageKey }) => {
		const [isCollapsed, setCollapsed] = useSessionState(storageKey && `useCollapsible:${storageKey}`, !!initialCollapsed);
		(0, import_react$40.useEffect)(() => {
			if (collapsed !== void 0) setCollapsed(collapsed);
		}, [collapsed, setCollapsed]);
		const toggleCollapsed = (0, import_react$40.useCallback)((event) => {
			event?.stopPropagation();
			if (!disabled) setCollapsed((value) => !value);
		}, [disabled, setCollapsed]);
		const contentId = $390e54f620492c70$export$f680877a34711e37();
		return {
			contentId,
			isCollapsed,
			isDisabled: !!disabled,
			setCollapsed,
			toggleCollapsed,
			toggleProps: {
				disabled,
				onClick: toggleCollapsed,
				"aria-controls": contentId,
				"aria-expanded": !isCollapsed
			}
		};
	};
}));
//#endregion
//#region src/components/components/Card/Card.tsx
var import_react$39, resolveThemeColor, getColor, getBorderColor, getBackgroundColor, getOpaqueBackground, getSpinColors, pulse, spin, hueCycle, CardContent, CardOutline, Card;
var init_Card = __esmMin((() => {
	import_react$39 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	resolveThemeColor = (colors, key) => key && key in colors ? colors[key] : void 0;
	getColor = (theme, color) => resolveThemeColor(theme.fgColor, color) ?? resolveThemeColor(theme.color, color);
	getBorderColor = (theme, color, outlineColor) => resolveThemeColor(theme.borderColor, color) ?? resolveThemeColor(theme.color, outlineColor);
	getBackgroundColor = (theme, color) => resolveThemeColor(theme.bgColor, color) ?? theme.background.content;
	getOpaqueBackground = (theme, color) => {
		const bg = getBackgroundColor(theme, color);
		return `linear-gradient(${bg}, ${bg}), ${theme.background.content}`;
	};
	getSpinColors = (theme, outlineColor) => {
		if (outlineColor === "negative") return ["#FC521F", "#FFAE00"];
		if (outlineColor === "agentic") return theme.base === "dark" ? ["rgba(114,58,166,0.65)", "rgba(157,98,214,0.6)"] : ["#b6a7ff", "#d8aeff"];
		return ["#029CFD", "#37D5D3"];
	};
	pulse = keyframes({ "50%": { opacity: .5 } });
	spin = keyframes({
		"0%": { transform: "rotate(0deg)" },
		"10%": { transform: "rotate(20deg)" },
		"40%": { transform: "rotate(170deg)" },
		"50%": { transform: "rotate(180deg)" },
		"60%": { transform: "rotate(190deg)" },
		"90%": { transform: "rotate(340deg)" },
		"100%": { transform: "rotate(360deg)" }
	});
	hueCycle = keyframes({
		from: { filter: "hue-rotate(0deg)" },
		to: { filter: "hue-rotate(360deg)" }
	});
	CardContent = styled.div(({ color, theme }) => ({
		color: getColor(theme, color),
		borderRadius: theme.appBorderRadius,
		background: getOpaqueBackground(theme, color),
		position: "relative"
	}));
	CardOutline = styled.div(({ animation = "none", animationPaused = false, color, outlineColor = color, theme }) => {
		const [spinStart, spinEnd] = getSpinColors(theme, outlineColor);
		const playState = animationPaused ? "paused" : "running";
		return {
			position: "relative",
			width: "100%",
			padding: 1,
			overflow: "hidden",
			backgroundColor: getBackgroundColor(theme, color),
			borderRadius: theme.appBorderRadius + 1,
			boxShadow: `inset 0 0 0 1px ${animation === "none" && getBorderColor(theme, color, outlineColor) || theme.appBorderColor}, var(--card-box-shadow, transparent 0 0)`,
			transition: "box-shadow 1s",
			"@supports (interpolate-size: allow-keywords)": {
				interpolateSize: "allow-keywords",
				transition: "all var(--transition-duration, 0.2s), box-shadow 1s",
				transitionBehavior: "allow-discrete"
			},
			"@media (prefers-reduced-motion: reduce)": { transition: "box-shadow 1s" },
			"&:before": {
				content: "\"\"",
				display: animation === "none" ? "none" : "block",
				position: "absolute",
				left: 0,
				top: 0,
				width: "100%",
				height: "100%",
				opacity: 1,
				...animation === "rainbow" && {
					backgroundImage: "linear-gradient(to top right, rgb(255, 157, 0), rgb(0, 172, 0))",
					animation: `${hueCycle} 5s ease-in-out ${playState}`,
					"@media (prefers-reduced-motion: reduce)": { animation: `${pulse} 2.5s ease-in-out 2 ${playState}` }
				},
				...animation === "spin" && {
					left: "50%",
					top: "50%",
					marginLeft: "calc(max(100vw, 100vh) * -0.5)",
					marginTop: "calc(max(100vw, 100vh) * -0.5)",
					height: "max(100vw, 100vh)",
					width: "max(100vw, 100vh)",
					animation: `${spin} 5s linear infinite ${playState}`,
					backgroundImage: `conic-gradient(transparent 90deg, ${spinStart} 150deg, ${spinEnd} 210deg, transparent 270deg)`,
					"@media (prefers-reduced-motion: reduce)": {
						left: 0,
						top: 0,
						marginLeft: 0,
						marginTop: 0,
						height: "100%",
						width: "100%",
						animation: `${pulse} 2.5s ease-in-out infinite ${playState}`,
						backgroundImage: `linear-gradient(to top right, ${spinStart}, ${spinEnd})`
					}
				}
			}
		};
	});
	Card = Object.assign((0, import_react$39.forwardRef)(function Card({ outlineAnimation = "none", outlineAnimationPaused = false, color, outlineColor, outlineAttrs = {}, ...props }, ref) {
		return /* @__PURE__ */ import_react$39.default.createElement(CardOutline, {
			animation: outlineAnimation,
			animationPaused: outlineAnimationPaused,
			color,
			outlineColor,
			ref,
			...outlineAttrs
		}, /* @__PURE__ */ import_react$39.default.createElement(CardContent, {
			color,
			...props
		}));
	}), {
		Content: CardContent,
		Outline: CardOutline
	});
}));
//#endregion
//#region src/components/components/Modal/Modal.styled.tsx
var Modal_styled_exports = /* @__PURE__ */ __exportAll({
	Actions: () => Actions,
	Close: () => Close,
	Col: () => Col,
	Container: () => Container$3,
	Content: () => Content$1,
	Description: () => Description$1,
	Error: () => Error$1,
	ErrorWrapper: () => ErrorWrapper,
	Header: () => Header,
	Overlay: () => Overlay,
	Row: () => Row,
	Title: () => Title$2
});
var import_react$38, fadeIn, fadeOut, expand, zoomIn, zoomOut, slideFromBottom, slideToBottom, Overlay, Container$3, Close, Content$1, Row, Col, Header, Title$2, Description$1, Actions, ErrorWrapper, Error$1;
var init_Modal_styled = __esmMin((() => {
	import_react$38 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$2();
	init_Heading();
	init_Text();
	init_emotion();
	init_Button();
	init_Modal();
	fadeIn = keyframes({
		from: { opacity: 0 },
		to: { opacity: 1 }
	});
	fadeOut = keyframes({
		from: { opacity: 1 },
		to: { opacity: 0 }
	});
	expand = keyframes({
		from: { maxHeight: 0 },
		to: {}
	});
	zoomIn = keyframes({
		from: {
			opacity: 0,
			transform: "translate(-50%, -50%) scale(0.9)"
		},
		to: {
			opacity: 1,
			transform: "translate(-50%, -50%) scale(1)"
		}
	});
	zoomOut = keyframes({
		from: {
			opacity: 1,
			transform: "translate(-50%, -50%) scale(1)"
		},
		to: {
			opacity: 0,
			transform: "translate(-50%, -50%) scale(0.9)"
		}
	});
	slideFromBottom = keyframes({
		from: {
			opacity: 0,
			maxHeight: "0px"
		},
		to: {
			opacity: 1,
			maxHeight: "80dvh"
		}
	});
	slideToBottom = keyframes({
		from: {
			opacity: 1,
			maxHeight: "80dvh"
		},
		to: {
			opacity: 0,
			maxHeight: "0px"
		}
	});
	Overlay = styled.div(({ $status, $transitionDuration }) => ({
		backdropFilter: "blur(24px)",
		background: "rgba(0, 0, 0, 0.4)",
		position: "absolute",
		inset: 0,
		width: "100%",
		height: "100%",
		zIndex: 1e5,
		"@media (prefers-reduced-motion: no-preference)": {
			animation: $status === "exiting" || $status === "preExit" ? `${fadeOut} ${$transitionDuration}ms` : `${fadeIn} ${$transitionDuration}ms`,
			animationFillMode: "forwards"
		}
	}));
	Container$3 = styled.div(({ theme }) => ({
		backgroundColor: theme.background.bar,
		borderRadius: 6,
		boxShadow: "0px 4px 67px 0px #00000040",
		position: "absolute",
		overflow: "auto",
		zIndex: 1e5,
		"&:focus-visible": { outline: "none" }
	}), ({ theme, width, height, $variant, $status, $transitionDuration }) => $variant === "dialog" ? {
		top: "50%",
		left: "50%",
		width: width ?? 740,
		height: height ?? "auto",
		maxWidth: "calc(100% - 40px)",
		maxHeight: "85vh",
		"@media (prefers-reduced-motion: no-preference)": {
			willChange: "transform, opacity",
			animationTimingFunction: "cubic-bezier(0.32, 0.72, 0, 1)",
			animation: $status === "exiting" || $status === "preExit" ? `${zoomOut} ${$transitionDuration}ms` : `${zoomIn} ${$transitionDuration}ms`,
			animationFillMode: "forwards !important"
		},
		"@media (prefers-reduced-motion: reduce)": { transform: "translate(-50%, -50%) scale(1)" }
	} : {
		position: "fixed",
		bottom: "0",
		left: "0",
		right: "0",
		borderRadius: "10px 10px 0 0",
		overflow: "hidden",
		width: width ?? "100%",
		height: height ?? "80%",
		maxWidth: "100%",
		background: theme.background.content,
		"@supports (interpolate-size: allow-keywords)": { interpolateSize: "allow-keywords" },
		"@media (prefers-reduced-motion: no-preference)": {
			animationTimingFunction: "cubic-bezier(.9,.16,.77,.64)",
			animation: $status === "exiting" || $status === "preExit" ? `${slideToBottom} ${$transitionDuration}ms` : `${slideFromBottom} ${$transitionDuration}ms`,
			animationFillMode: "forwards !important"
		}
	});
	Close = ({ asChild, children, onClick, ...props }) => {
		const { close } = (0, import_react$38.useContext)(ModalContext);
		if (asChild && import_react$38.isValidElement(children)) {
			const handleClick = (event) => {
				onClick?.(event);
				children.props.onClick?.(event);
				close?.();
			};
			return import_react$38.cloneElement(children, {
				...props,
				onClick: handleClick
			});
		}
		return /* @__PURE__ */ import_react$38.default.createElement(Button, {
			type: "button",
			padding: "small",
			ariaLabel: "Close modal",
			variant: "ghost",
			shortcut: ["Escape"],
			onClick: close
		}, /* @__PURE__ */ import_react$38.default.createElement(CrossIcon, null));
	};
	Content$1 = styled.div({
		display: "flex",
		flexDirection: "column",
		margin: 16,
		gap: 16
	});
	Row = styled.div({
		display: "flex",
		justifyContent: "space-between",
		gap: 16
	});
	Col = styled.div({
		display: "flex",
		flexDirection: "column",
		gap: 4
	});
	Header = ({ hasClose = true, onClose, ...props }) => /* @__PURE__ */ import_react$38.default.createElement(Row, null, /* @__PURE__ */ import_react$38.default.createElement(Col, props), hasClose && /* @__PURE__ */ import_react$38.default.createElement(Close, { onClick: onClose }));
	Title$2 = styled((props) => /* @__PURE__ */ import_react$38.default.createElement($2ec61d1d4f780267$export$a8a3e93435678ff9, {
		level: 2,
		...props
	}))(({ theme }) => ({
		margin: 0,
		fontSize: theme.typography.size.s3,
		fontWeight: theme.typography.weight.bold
	}));
	Description$1 = styled($efe09c6d1c304b50$export$5f1af8db9871e1d6)(({ theme }) => ({
		position: "relative",
		zIndex: 1,
		margin: 0,
		fontSize: theme.typography.size.s2
	}));
	Actions = styled.div({
		display: "flex",
		flexDirection: "row-reverse",
		gap: 8
	});
	ErrorWrapper = styled.div(({ theme }) => ({
		maxHeight: 100,
		overflow: "auto",
		"@media (prefers-reduced-motion: no-preference)": { animation: `${expand} 300ms, ${fadeIn} 300ms` },
		backgroundColor: theme.background.critical,
		color: theme.color.lightest,
		fontSize: theme.typography.size.s2,
		"& > div": {
			position: "relative",
			padding: "8px 16px"
		}
	}));
	Error$1 = ({ children, ...props }) => /* @__PURE__ */ import_react$38.default.createElement(ErrorWrapper, props, /* @__PURE__ */ import_react$38.default.createElement("div", null, children));
}));
//#endregion
//#region src/components/components/Modal/Modal.tsx
function BaseModal({ container, portalSelector, children, width, height, ariaLabel, dismissOnClickOutside = true, dismissOnEscape = true, className, open, onOpenChange, defaultOpen, transitionDuration = 200, variant = "dialog", ...props }) {
	const overlayRef = (0, import_react$37.useRef)(null);
	const [{ status, isMounted }, toggle] = useTransitionState({
		timeout: useMediaQuery("(prefers-reduced-motion: reduce)") ? 0 : transitionDuration,
		mountOnEnter: true,
		unmountOnExit: true
	});
	const state = $f11fb0bcf1b2687a$export$61c6a8c84e605fb6({
		isOpen: open || isMounted,
		defaultOpen,
		onOpenChange: (isOpen) => {
			toggle(isOpen);
			onOpenChange?.(isOpen);
		}
	});
	const close = () => {
		state.close();
	};
	const { modalProps, underlayProps } = $5698867baeb53f4e$export$dbc0f175b25fb0fb({
		isDismissable: dismissOnClickOutside,
		isKeyboardDismissDisabled: true
	}, state, overlayRef);
	(0, import_react$37.useEffect)(() => {
		const shouldBeOpen = open ?? defaultOpen ?? false;
		if (shouldBeOpen && !isMounted) toggle(true);
		else if (!shouldBeOpen && isMounted) toggle(false);
	}, [
		open,
		defaultOpen,
		isMounted,
		toggle
	]);
	(0, import_react$37.useEffect)(() => {
		if (isMounted && (open || defaultOpen)) onOpenChange?.(true);
	}, [isMounted]);
	(0, import_react$37.useLayoutEffect)(() => {
		if (isMounted && (open || defaultOpen) && overlayRef.current) return $58196c8d6a1f38fc$export$1c3ebcada18427bf([overlayRef.current], { shouldUseInert: true });
	}, [
		isMounted,
		open,
		defaultOpen,
		overlayRef
	]);
	if (!isMounted || status === "exited" || status === "unmounted") return null;
	const finalModalProps = $bbaa08b3cd72f041$export$9d1611c77c2fe928(modalProps, { onKeyDown: (e) => {
		if (e.key !== "Escape") modalProps.onKeyDown?.(e);
		else {
			e.stopPropagation();
			if (dismissOnEscape) close();
		}
	} });
	const containerElement = container ?? (portalSelector ? document.querySelector(portalSelector) : void 0);
	return /* @__PURE__ */ import_react$37.default.createElement($d7a937236970dc7f$export$c6fdb837b070b4ff, {
		disableFocusManagement: true,
		portalContainer: containerElement || void 0
	}, /* @__PURE__ */ import_react$37.default.createElement($535772f9d2c1f38d$export$20e40289641fbbb6, {
		restoreFocus: true,
		contain: true,
		autoFocus: true
	}, /* @__PURE__ */ import_react$37.default.createElement(Overlay, {
		$status: status,
		$transitionDuration: transitionDuration,
		...underlayProps
	}), /* @__PURE__ */ import_react$37.default.createElement("div", {
		role: "dialog",
		"aria-label": ariaLabel,
		ref: overlayRef,
		...finalModalProps
	}, /* @__PURE__ */ import_react$37.default.createElement(ModalContext.Provider, { value: { close } }, /* @__PURE__ */ import_react$37.default.createElement("div", { tabIndex: -1 }, /* @__PURE__ */ import_react$37.default.createElement(Container$3, {
		$variant: variant,
		$status: status,
		$transitionDuration: transitionDuration,
		className,
		width,
		height,
		...props
	}, children))))));
}
var import_react$37, ModalContext, Modal, ModalDecorator;
var init_Modal = __esmMin((() => {
	import_react$37 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_FocusScope$1();
	init_Overlay$1();
	init_PortalProvider$1();
	init_useModalOverlay$1();
	init_import();
	init_mergeProps$1();
	init_import$1();
	init_esm$1();
	init_useMedia();
	init_Modal_styled();
	ModalContext = (0, import_react$37.createContext)({});
	Modal = Object.assign(BaseModal, Modal_styled_exports);
	ModalDecorator = (Story, { args }) => {
		const [container, setContainer] = (0, import_react$37.useState)(null);
		if (args.container || args.portalSelector) return /* @__PURE__ */ import_react$37.default.createElement(Story, { args });
		return /* @__PURE__ */ import_react$37.default.createElement(import_react$37.default.Fragment, null, /* @__PURE__ */ import_react$37.default.createElement($72abaeab4d80592f$export$78efe591171d7d45, { getContainer: () => container }, /* @__PURE__ */ import_react$37.default.createElement(Story, { args })), /* @__PURE__ */ import_react$37.default.createElement("div", {
			ref: (element) => setContainer(element ?? null),
			style: {
				width: "100%",
				height: "100%",
				minHeight: "600px",
				transform: "translateZ(0)"
			}
		}));
	};
}));
//#endregion
//#region src/components/components/spaced/Spaced.tsx
var import_react$36, toNumber, Container$2, Spaced;
var init_Spaced = __esmMin((() => {
	import_react$36 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	toNumber = (input) => typeof input === "number" ? input : Number(input);
	Container$2 = styled.div(({ theme, col, row = 1 }) => col ? {
		display: "inline-block",
		verticalAlign: "inherit",
		"& > *": {
			marginLeft: col * theme.layoutMargin,
			verticalAlign: "inherit"
		},
		[`& > *:first-child${ignoreSsrWarning}`]: { marginLeft: 0 }
	} : {
		"& > *": { marginTop: row * theme.layoutMargin },
		[`& > *:first-child${ignoreSsrWarning}`]: { marginTop: 0 }
	}, ({ theme, outer, col, row }) => {
		switch (true) {
			case !!(outer && col): return {
				marginLeft: outer * theme.layoutMargin,
				marginRight: outer * theme.layoutMargin
			};
			case !!(outer && row): return {
				marginTop: outer * theme.layoutMargin,
				marginBottom: outer * theme.layoutMargin
			};
			default: return {};
		}
	});
	Spaced = ({ col, row, outer, children, ...rest }) => {
		const outerAmount = toNumber(typeof outer === "number" || !outer ? outer : col || row);
		return /* @__PURE__ */ import_react$36.default.createElement(Container$2, {
			col,
			row,
			outer: outerAmount,
			...rest
		}, children);
	};
}));
//#endregion
//#region src/components/components/placeholder/placeholder.tsx
var import_react$35, Title$1, Desc, Message, Placeholder;
var init_placeholder = __esmMin((() => {
	import_react$35 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	Title$1 = styled.div(({ theme }) => ({ fontWeight: theme.typography.weight.bold }));
	Desc = styled.div();
	Message = styled.div(({ theme }) => ({
		padding: 30,
		textAlign: "center",
		color: theme.color.defaultText,
		fontSize: theme.typography.size.s2 - 1
	}));
	Placeholder = ({ children, ...props }) => {
		const [title, desc] = import_react$35.Children.toArray(children);
		return /* @__PURE__ */ import_react$35.default.createElement(Message, props, /* @__PURE__ */ import_react$35.default.createElement(Title$1, null, title), desc && /* @__PURE__ */ import_react$35.default.createElement(Desc, null, desc));
	};
}));
//#endregion
//#region src/components/components/ScrollArea/ScrollArea.tsx
var import_react$34, ScrollAreaRoot, ScrollAreaViewport, ScrollAreaScrollbar, ScrollAreaThumb, ScrollArea;
var init_ScrollArea = __esmMin((() => {
	import_react$34 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$4();
	init_emotion();
	ScrollAreaRoot = styled(Root$2)(({ scrollbarsize, offset }) => ({
		width: "100%",
		height: "100%",
		overflow: "hidden",
		"--scrollbar-size": `${scrollbarsize + offset}px`,
		"--radix-scroll-area-thumb-width": `${scrollbarsize}px`
	}));
	ScrollAreaViewport = styled(Viewport)(({ focusable, theme }) => ({
		width: "100%",
		height: "100%",
		"&:focus": focusable ? {
			outline: `2px solid ${theme.color.secondary}`,
			outlineOffset: -2
		} : {}
	}));
	ScrollAreaScrollbar = styled(Scrollbar)(({ offset, horizontal, vertical }) => ({
		display: "flex",
		userSelect: "none",
		touchAction: "none",
		background: "transparent",
		transition: "all 0.2s ease-out",
		borderRadius: "var(--scrollbar-size)",
		zIndex: 1,
		"&[data-orientation=\"vertical\"]": {
			width: "var(--scrollbar-size)",
			paddingRight: offset,
			marginTop: offset,
			marginBottom: horizontal === "true" && vertical === "true" ? 0 : offset
		},
		"&[data-orientation=\"horizontal\"]": {
			flexDirection: "column",
			height: "var(--scrollbar-size)",
			paddingBottom: offset,
			marginLeft: offset,
			marginRight: horizontal === "true" && vertical === "true" ? 0 : offset
		}
	}));
	ScrollAreaThumb = styled(Thumb)(({ theme }) => ({
		flex: 1,
		background: theme.textMutedColor,
		opacity: .5,
		borderRadius: `var(--scrollbar-size)`,
		position: "relative",
		transition: "opacity 0.2s ease-out",
		zIndex: 1,
		"&:hover": { opacity: .8 },
		"::before": {
			content: "\"\"",
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50%,-50%)",
			width: "100%",
			height: "100%"
		}
	}));
	ScrollArea = (0, import_react$34.forwardRef)(({ children, horizontal = false, vertical = false, offset = 2, scrollbarSize = 6, scrollPadding = 0, className, focusable = false }, ref) => /* @__PURE__ */ import_react$34.default.createElement(ScrollAreaRoot, {
		scrollbarsize: scrollbarSize,
		offset,
		className
	}, /* @__PURE__ */ import_react$34.default.createElement(ScrollAreaViewport, {
		ref,
		style: { scrollPadding },
		tabIndex: focusable ? 0 : void 0,
		focusable
	}, children), horizontal && /* @__PURE__ */ import_react$34.default.createElement(ScrollAreaScrollbar, {
		orientation: "horizontal",
		offset,
		horizontal: horizontal.toString(),
		vertical: vertical.toString()
	}, /* @__PURE__ */ import_react$34.default.createElement(ScrollAreaThumb, null)), vertical && /* @__PURE__ */ import_react$34.default.createElement(ScrollAreaScrollbar, {
		orientation: "vertical",
		offset,
		horizontal: horizontal.toString(),
		vertical: vertical.toString()
	}, /* @__PURE__ */ import_react$34.default.createElement(ScrollAreaThumb, null)), horizontal && vertical && /* @__PURE__ */ import_react$34.default.createElement(Corner, null)));
	ScrollArea.displayName = "ScrollArea";
}));
//#endregion
//#region src/components/components/Zoom/ZoomElement.tsx
function ZoomElement({ centered, scale, children }) {
	const componentWrapperRef = (0, import_react$33.useRef)(null);
	const [elementHeight, setElementHeight] = (0, import_react$33.useState)(0);
	const onResize = (0, import_react$33.useCallback)(({ height }) => {
		if (height) setElementHeight(height / scale);
	}, [scale]);
	(0, import_react$33.useEffect)(() => {
		if (componentWrapperRef.current) setElementHeight(componentWrapperRef.current.getBoundingClientRect().height);
	}, [scale]);
	useResizeObserver({
		ref: componentWrapperRef,
		onResize
	});
	return /* @__PURE__ */ import_react$33.default.createElement(ZoomElementWrapper, {
		centered,
		scale,
		elementHeight
	}, /* @__PURE__ */ import_react$33.default.createElement("div", {
		ref: componentWrapperRef,
		className: "innerZoomElementWrapper"
	}, children));
}
var import_react$33, ZoomElementWrapper;
var init_ZoomElement = __esmMin((() => {
	import_react$33 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	init_bundle_esm();
	ZoomElementWrapper = styled.div(({ centered = false, scale = 1, elementHeight }) => ({
		height: elementHeight || "auto",
		transformOrigin: centered ? "center top" : "left top",
		transform: `scale(${1 / scale})`
	}));
}));
//#endregion
//#region src/components/components/Zoom/ZoomIFrame.tsx
var import_react$32, ZoomIFrame;
var init_ZoomIFrame = __esmMin((() => {
	import_react$32 = /* @__PURE__ */ __toESM(require_react(), 1);
	ZoomIFrame = class extends import_react$32.Component {
		constructor(..._args) {
			super(..._args);
			this.iframe = null;
		}
		componentDidMount() {
			const { iFrameRef } = this.props;
			this.iframe = iFrameRef.current;
		}
		shouldComponentUpdate(nextProps) {
			const { scale, active } = this.props;
			if (scale !== nextProps.scale) this.setIframeInnerZoom(nextProps.scale);
			if (active !== nextProps.active) this.iframe.setAttribute("data-is-storybook", nextProps.active ? "true" : "false");
			return nextProps.children.props.src !== this.props.children.props.src;
		}
		setIframeInnerZoom(scale) {
			try {
				Object.assign(this.iframe.contentDocument.body.style, {
					width: `${1 / scale * 100}%`,
					height: `${1 / scale * 100}%`,
					transform: `scale(${scale})`,
					transformOrigin: "top left"
				});
			} catch (e) {
				this.setIframeZoom(scale);
			}
		}
		setIframeZoom(scale) {
			Object.assign(this.iframe.style, {
				width: `${1 / scale * 100}%`,
				height: `${1 / scale * 100}%`,
				transform: `scale(${scale})`,
				transformOrigin: "top left"
			});
		}
		render() {
			const { children } = this.props;
			return /* @__PURE__ */ import_react$32.default.createElement(import_react$32.default.Fragment, null, children);
		}
	};
}));
//#endregion
//#region src/components/components/Zoom/Zoom.tsx
var Zoom;
var init_Zoom = __esmMin((() => {
	init_ZoomElement();
	init_ZoomIFrame();
	Zoom = {
		Element: ZoomElement,
		IFrame: ZoomIFrame
	};
}));
//#endregion
//#region src/components/components/ErrorFormatter/ErrorFormatter.tsx
var import_react$31, document$1, ErrorName, ErrorImportant, ErrorDetail, firstLineRegex, linesRegexChromium, linesRegexFirefox, linesRegexSafari, ErrorFormatter;
var init_ErrorFormatter = __esmMin((() => {
	import_react$31 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$1();
	init_emotion();
	({document: document$1} = scope);
	ErrorName = styled.strong(({ theme }) => ({ color: theme.color.orange }));
	ErrorImportant = styled.strong(({ theme }) => ({
		color: theme.color.ancillary,
		textDecoration: "underline"
	}));
	ErrorDetail = styled.em(({ theme }) => ({ color: theme.textMutedColor }));
	firstLineRegex = /(Error): (.*)\n/;
	linesRegexChromium = /at (?:(.*) )?\(?(.+)\)?/;
	linesRegexFirefox = /([^@]+)?(?:\/<)?@(.+)?/;
	linesRegexSafari = /([^@]+)?@(.+)?/;
	ErrorFormatter = ({ error }) => {
		if (!error) return /* @__PURE__ */ import_react$31.default.createElement(import_react$31.Fragment, null, "This error has no stack or message");
		if (!error.stack) return /* @__PURE__ */ import_react$31.default.createElement(import_react$31.Fragment, null, error.message || "This error has no stack or message");
		let input = error.stack.toString();
		if (input && error.message && !input.includes(error.message)) input = `Error: ${error.message}\n\n${input}`;
		const match = input.match(firstLineRegex);
		if (!match) return /* @__PURE__ */ import_react$31.default.createElement(import_react$31.Fragment, null, input);
		const [, type, name] = match;
		const [, ...lines] = input.split(/\n/).slice(1).map((line) => {
			const result = line.match(linesRegexChromium) || line.match(linesRegexFirefox) || line.match(linesRegexSafari);
			if (result) return {
				name: (result[1] || "").replace("/<", ""),
				location: result[2].replace(document$1.location.origin, "")
			};
			return null;
		}).filter(Boolean);
		return /* @__PURE__ */ import_react$31.default.createElement(import_react$31.Fragment, null, /* @__PURE__ */ import_react$31.default.createElement("span", null, type), ": ", /* @__PURE__ */ import_react$31.default.createElement(ErrorName, null, name), /* @__PURE__ */ import_react$31.default.createElement("br", null), lines.map((l, i) => l?.name ? /* @__PURE__ */ import_react$31.default.createElement(import_react$31.Fragment, { key: i }, "  ", "at ", /* @__PURE__ */ import_react$31.default.createElement(ErrorImportant, null, l.name), " (", /* @__PURE__ */ import_react$31.default.createElement(ErrorDetail, null, l.location), ")", /* @__PURE__ */ import_react$31.default.createElement("br", null)) : /* @__PURE__ */ import_react$31.default.createElement(import_react$31.Fragment, { key: i }, "  ", "at ", /* @__PURE__ */ import_react$31.default.createElement(ErrorDetail, null, l?.location), /* @__PURE__ */ import_react$31.default.createElement("br", null))));
	};
}));
//#endregion
//#region src/components/components/Form/Checkbox.tsx
var import_react$30, Input$2, Checkbox;
var init_Checkbox = __esmMin((() => {
	import_react$30 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	Input$2 = styled.input(({ theme }) => ({
		appearance: "none",
		backgroundColor: theme.input.background,
		border: `1px solid ${theme.base === "dark" ? "hsl(0 0 100 / 0.4)" : "hsl(0 0 0 / 0.44)"}`,
		borderRadius: 2,
		display: "grid",
		flexShrink: 0,
		height: 14,
		margin: 0,
		placeContent: "center",
		transition: "background-color 0.1s",
		width: 14,
		"&:enabled": { cursor: "pointer" },
		"&:disabled": {
			backgroundColor: "transparent",
			borderColor: theme.input.border
		},
		"&:disabled:checked, &:disabled:indeterminate": { backgroundColor: theme.base === "dark" ? color.dark : theme.color.mediumdark },
		"&:checked, &:indeterminate": {
			border: "none",
			backgroundColor: color.secondary
		},
		"&:checked::before": {
			content: "\"\"",
			width: 14,
			height: 14,
			background: `no-repeat center url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14'%3E%3Cpath fill='none' stroke='%23fff' stroke-width='2' d='m3 7 2.5 2.5L11 4'/%3E%3C/svg%3E")`
		},
		"&:indeterminate::before": {
			content: "\"\"",
			width: 8,
			height: 2,
			background: "white"
		},
		"&:enabled:focus-visible": {
			outline: `2px solid ${theme.color.secondary}`,
			outlineOffset: 2
		}
	}));
	Checkbox = (props) => {
		return /* @__PURE__ */ import_react$30.default.createElement(Input$2, {
			...props,
			type: "checkbox"
		});
	};
}));
//#endregion
//#region src/components/components/Form/Field.tsx
var import_react$29, Wrapper$5, Label, Field;
var init_Field = __esmMin((() => {
	import_react$29 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	Wrapper$5 = styled.label(({ theme }) => ({
		display: "flex",
		borderBottom: `1px solid ${theme.appBorderColor}`,
		margin: "0 15px",
		padding: "8px 0",
		"&:last-child": { marginBottom: "3rem" }
	}));
	Label = styled.span(({ theme }) => ({
		minWidth: 100,
		fontWeight: theme.typography.weight.bold,
		marginRight: 15,
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		lineHeight: "16px"
	}));
	Field = ({ label, children, ...props }) => /* @__PURE__ */ import_react$29.default.createElement(Wrapper$5, props, label ? /* @__PURE__ */ import_react$29.default.createElement(Label, null, /* @__PURE__ */ import_react$29.default.createElement("span", null, label)) : null, children);
}));
//#endregion
//#region src/components/components/Form/styles.ts
var sizes, alignment, validation, styleResets, styles;
var init_styles = __esmMin((() => {
	sizes = (({ size }) => {
		switch (size) {
			case "100%": return { width: "100%" };
			case "flex": return { flex: 1 };
			default: return { display: "inline" };
		}
	});
	alignment = (({ align }) => {
		switch (align) {
			case "end": return { textAlign: "right" };
			case "center": return { textAlign: "center" };
			default: return { textAlign: "left" };
		}
	});
	validation = (({ valid, theme }) => {
		switch (valid) {
			case "valid": return { boxShadow: `${theme.color.positive} 0 0 0 1px inset !important` };
			case "error": return { boxShadow: `${theme.color.negative} 0 0 0 1px inset !important` };
			case "warn": return { boxShadow: `${theme.color.warning} 0 0 0 1px inset` };
			case void 0:
			default: return {};
		}
	});
	styleResets = {
		appearance: "none",
		border: "0 none",
		boxSizing: "inherit",
		display: "block",
		margin: " 0",
		background: "transparent",
		padding: 0,
		fontSize: "inherit",
		position: "relative"
	};
	styles = (({ theme }) => ({
		...styleResets,
		transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
		color: theme.input.color || "inherit",
		background: theme.input.background,
		boxShadow: `${theme.input.border} 0 0 0 1px inset`,
		borderRadius: theme.input.borderRadius,
		fontSize: theme.typography.size.s2 - 1,
		lineHeight: "20px",
		padding: "6px 10px",
		boxSizing: "border-box",
		height: 32,
		"&[type=\"file\"]": { height: "auto" },
		"&:focus": {
			boxShadow: `${theme.color.secondary} 0 0 0 1px inset`,
			outline: "none",
			"@media (forced-colors: active)": { outline: "1px solid highlight" }
		},
		"&[disabled], &[aria-disabled=\"true\"]": {
			background: theme.base === "light" ? theme.color.lighter : "transparent",
			cursor: "not-allowed"
		},
		"&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${theme.color.lightest} inset` },
		"&::placeholder": {
			color: theme.textMutedColor,
			opacity: 1
		}
	}));
}));
//#endregion
//#region src/components/components/Form/Input.tsx
var import_react$27, import_react$28, Wrapper$4, Mask, Input$1;
var init_Input = __esmMin((() => {
	import_react$27 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react$28 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_useId$1();
	init_emotion();
	init_styles();
	Wrapper$4 = styled.div({
		position: "relative",
		width: "100%"
	});
	Mask = styled.div(({ theme }) => ({
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		display: "flex",
		alignItems: "center",
		pointerEvents: "none",
		overflow: "hidden",
		color: theme.textMutedColor,
		"span:first-of-type": { opacity: 0 }
	}), (props) => {
		const { fontSize, lineHeight, padding } = styles(props);
		return {
			fontSize,
			lineHeight,
			padding
		};
	});
	Input$1 = Object.assign(styled((0, import_react$28.forwardRef)(function Input({ size, valid, align, value, suffix, ...props }, ref) {
		const suffixId = $390e54f620492c70$export$f680877a34711e37();
		return /* @__PURE__ */ import_react$27.default.createElement(Wrapper$4, null, /* @__PURE__ */ import_react$27.default.createElement("input", {
			...props,
			value,
			ref,
			"aria-describedby": suffix ? suffixId : void 0
		}), suffix && /* @__PURE__ */ import_react$27.default.createElement(Mask, { "aria-hidden": true }, /* @__PURE__ */ import_react$27.default.createElement("span", null, value), /* @__PURE__ */ import_react$27.default.createElement("span", { id: suffixId }, suffix)));
	}))(styles, sizes, alignment, validation, {
		minHeight: 32,
		width: "100%"
	}), { displayName: "Input" });
}));
//#endregion
//#region src/components/components/Form/Radio.tsx
var import_react$26, Input, Radio;
var init_Radio = __esmMin((() => {
	import_react$26 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	Input = styled.input(({ theme }) => ({
		appearance: "none",
		backgroundColor: theme.input.background,
		border: `1px solid ${theme.base === "dark" ? "hsl(0 0 100 / 0.4)" : "hsl(0 0 0 / 0.44)"}`,
		borderRadius: 8,
		display: "grid",
		flexShrink: 0,
		height: 16,
		margin: -1,
		placeContent: "center",
		transition: "background-color 0.1s",
		width: 16,
		"&:enabled": { cursor: "pointer" },
		"&:disabled": {
			backgroundColor: "transparent",
			borderColor: theme.input.border
		},
		"&:disabled:checked": {
			backgroundColor: theme.base === "dark" ? color.dark : theme.color.mediumdark,
			borderColor: theme.base === "dark" ? color.dark : theme.color.mediumdark
		},
		"&:checked": {
			backgroundColor: color.secondary,
			borderColor: color.secondary,
			boxShadow: `inset 0 0 0 2px ${theme.input.background}`
		},
		"&:enabled:focus-visible": {
			outline: `2px solid ${theme.color.secondary}`,
			outlineOffset: 2
		}
	}));
	Radio = (props) => {
		return /* @__PURE__ */ import_react$26.default.createElement(Input, {
			...props,
			type: "radio"
		});
	};
}));
//#endregion
//#region src/components/components/Form/Select.tsx
var import_react$25, BaseSelect, Select$1;
var init_Select$1 = __esmMin((() => {
	import_react$25 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	init_animation_utils();
	init_styles();
	BaseSelect = styled.select(sizes, ({ theme }) => ({
		appearance: "none",
		background: `calc(100% - 12px) center no-repeat url("data:image/svg+xml,%3Csvg width='8' height='4' viewBox='0 0 8 4' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.30303 0.196815C1.13566 0.0294472 0.864304 0.0294472 0.696937 0.196815C0.529569 0.364182 0.529569 0.635539 0.696937 0.802906L3.69694 3.80291C3.8643 3.97027 4.13566 3.97027 4.30303 3.80291L7.30303 0.802906C7.4704 0.635539 7.4704 0.364182 7.30303 0.196815C7.13566 0.0294473 6.8643 0.0294473 6.69694 0.196815L3.99998 2.89377L1.30303 0.196815Z' fill='%2373828C'/%3E%3C/svg%3E%0A")`,
		backgroundSize: 10,
		paddingBlock: 6,
		paddingInlineStart: 10,
		paddingInlineEnd: 30,
		"@supports (appearance: base-select)": {
			appearance: "base-select",
			background: theme.input.background,
			padding: "6px 10px"
		},
		"&:dir(rtl)": { backgroundPositionX: "left 12px" },
		transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
		color: theme.input.color || "inherit",
		boxShadow: `${theme.input.border} 0 0 0 1px inset`,
		borderRadius: theme.input.borderRadius,
		fontSize: theme.typography.size.s2 - 1,
		lineHeight: "20px",
		boxSizing: "border-box",
		border: "none",
		cursor: "pointer",
		"& > button": {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			width: "100%",
			gap: 8,
			"& > svg": {
				width: 14,
				height: 14,
				color: theme.textMutedColor
			}
		},
		"&:has(option:not([hidden]):checked)": { color: theme.color.defaultText },
		"&:focus-visible, &:focus-within": {
			outline: "none",
			boxShadow: `${theme.color.secondary} 0 0 0 1px inset`
		},
		"&::picker-icon": { display: "none" },
		"&::picker(select)": {
			appearance: "base-select",
			border: `1px solid ${theme.input.border}`,
			padding: 4,
			marginTop: 4,
			background: theme.base === "light" ? lightenColor(theme.background.app) : theme.background.app,
			filter: `
      drop-shadow(0 5px 5px rgba(0,0,0,0.05))
      drop-shadow(0 0 3px rgba(0,0,0,0.1))
    `,
			borderRadius: theme.appBorderRadius + 2,
			fontSize: theme.typography.size.s1,
			cursor: "default",
			transition: "opacity 100ms ease-in-out, transform 100ms ease-in-out",
			transformOrigin: "top",
			transform: "translateY(0)",
			opacity: 1,
			"@starting-style": {
				transform: "translateY(-0.25rem) scale(0.95)",
				opacity: 0
			}
		},
		"& optgroup label": {
			display: "block",
			padding: "3px 6px"
		},
		"& option": {
			lineHeight: "18px",
			padding: "7px 10px",
			borderRadius: 4,
			outline: "none",
			cursor: "pointer",
			color: theme.color.defaultText,
			"&::checkmark": { display: "none" },
			"&:hover, &:focus-visible": { backgroundColor: theme.background.hoverable },
			"&:checked": {
				color: theme.color.secondary,
				fontWeight: theme.typography.weight.bold
			},
			"&:disabled": {
				backgroundColor: "transparent",
				cursor: "default",
				color: theme.color.defaultText
			}
		}
	}));
	Select$1 = ({ children, ...props }) => {
		return /* @__PURE__ */ import_react$25.default.createElement(BaseSelect, props, !isTestEnvironment() && /* @__PURE__ */ import_react$25.default.createElement("button", null, /* @__PURE__ */ import_react$25.default.createElement("selectedcontent", null), /* @__PURE__ */ import_react$25.default.createElement("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true"
		}, /* @__PURE__ */ import_react$25.default.createElement("path", { d: "m6 9 6 6 6-6" }))), /* @__PURE__ */ import_react$25.default.createElement("optgroup", null, children));
	};
}));
//#endregion
//#region src/components/components/Form/Textarea.tsx
var import_react$24, Textarea;
var init_Textarea = __esmMin((() => {
	import_react$24 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_react_textarea_autosize_browser_esm();
	init_emotion();
	init_styles();
	Textarea = Object.assign(styled((0, import_react$24.forwardRef)(function Textarea({ size, valid, align, ...props }, ref) {
		return /* @__PURE__ */ import_react$24.default.createElement(index, {
			...props,
			ref
		});
	}))(styles, sizes, alignment, validation, ({ height = 400 }) => ({
		overflow: "visible",
		maxHeight: height
	})), { displayName: "Textarea" });
}));
//#endregion
//#region src/components/components/Form/Form.tsx
var Form;
var init_Form = __esmMin((() => {
	init_emotion();
	init_Button();
	init_Checkbox();
	init_Field();
	init_Input();
	init_Radio();
	init_Select$1();
	init_Textarea();
	Form = Object.assign(styled.form({
		boxSizing: "border-box",
		width: "100%"
	}), {
		Field,
		Input: Input$1,
		Select: Select$1,
		Textarea,
		Button,
		Checkbox,
		Radio
	});
}));
//#endregion
//#region src/components/components/Popover/Popover.tsx
var import_react$23, Wrapper$3, Padded, AbsoluteButton, Popover;
var init_Popover = __esmMin((() => {
	import_react$23 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$2();
	init_emotion();
	init_Button();
	init_ScrollArea();
	Wrapper$3 = styled.div(({ theme, hasCloseButton, padding, scrollable }) => ({
		display: "inline-grid",
		gridTemplateRows: "minmax(0, 1fr)",
		verticalAlign: "top",
		position: "relative",
		minHeight: hasCloseButton ? 36 : void 0,
		zIndex: 2147483647,
		colorScheme: theme.base,
		padding: scrollable ? 0 : padding,
		maxHeight: "inherit",
		maxWidth: "calc(100vw - 24px)",
		boxSizing: "border-box"
	}), ({ theme, hasChrome }) => hasChrome ? {
		filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
		borderRadius: theme.appBorderRadius + 2,
		fontFamily: theme.typography.fonts.base,
		fontSize: theme.typography.size.s1
	} : {}, ({ theme, bgColor }) => bgColor === "default" && {
		background: theme.base === "light" ? lightenColor(theme.background.app) : theme.background.app,
		color: theme.color.defaultText
	}, ({ theme, bgColor }) => bgColor === "inverse" && {
		background: theme.base === "light" ? theme.color.darkest : theme.color.lightest,
		color: theme.color.inverseText
	}, ({ theme, bgColor }) => (bgColor === "positive" || bgColor === "negative" || bgColor === "warning") && {
		background: theme.background[bgColor],
		color: theme.color[`${bgColor}Text`]
	});
	Padded = styled.div(({ padding }) => ({ padding }));
	AbsoluteButton = styled(Button)({
		position: "absolute",
		top: 4,
		right: 4
	});
	Popover = (0, import_react$23.forwardRef)(({ children, color = "default", hasChrome = true, hideLabel = "Close", onHide, padding = 8, scrollable = true, ...props }, ref) => {
		return /* @__PURE__ */ import_react$23.default.createElement(Wrapper$3, {
			bgColor: color,
			hasChrome,
			hasCloseButton: !!onHide,
			padding,
			scrollable,
			ref,
			...props
		}, scrollable ? /* @__PURE__ */ import_react$23.default.createElement(ScrollArea, {
			vertical: true,
			horizontal: true
		}, /* @__PURE__ */ import_react$23.default.createElement(Padded, { padding }, children)) : children, onHide && /* @__PURE__ */ import_react$23.default.createElement(AbsoluteButton, {
			ariaLabel: hideLabel,
			onClick: onHide,
			padding: "small",
			variant: "ghost",
			size: "small"
		}, /* @__PURE__ */ import_react$23.default.createElement(CloseIcon, null)));
	});
	Popover.displayName = "Popover";
}));
//#endregion
//#region src/components/components/Select/SelectOption.tsx
var import_react$22, SelectOption;
var init_SelectOption = __esmMin((() => {
	import_react$22 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_components();
	SelectOption = ({ id, title, description, icon, aside, children, isSelected, isActive, onClick, onFocus, onKeyDown, shouldLookDisabled = false, ...props }) => {
		return /* @__PURE__ */ import_react$22.default.createElement(ActionList.Item, {
			...props,
			id,
			role: "option",
			tabIndex: isActive ? 0 : -1,
			"aria-selected": isSelected,
			"aria-disabled": shouldLookDisabled ? true : void 0,
			onClick,
			onFocus,
			onKeyDown
		}, children ?? /* @__PURE__ */ import_react$22.default.createElement(import_react$22.default.Fragment, null, icon && /* @__PURE__ */ import_react$22.default.createElement(ActionList.Icon, null, icon), /* @__PURE__ */ import_react$22.default.createElement(ActionList.Text, null, /* @__PURE__ */ import_react$22.default.createElement("p", null, title), description && /* @__PURE__ */ import_react$22.default.createElement("small", null, description)), aside));
	};
	SelectOption.displayName = "SelectOption";
}));
//#endregion
//#region src/components/components/Select/helpers.tsx
function isLiteralValue(value) {
	return value === void 0 || value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "symbol";
}
function optionToInternal(option) {
	return {
		...option,
		type: "option",
		value: externalToValue(option.value)
	};
}
function optionOrResetToInternal(option) {
	if ("type" in option && option.type === "reset") return option;
	return optionToInternal(option);
}
function valueToExternal(value) {
	if (value === UNDEFINED_VALUE) return;
	return value;
}
function externalToValue(value) {
	if (value === void 0) return UNDEFINED_VALUE;
	return value;
}
var UNDEFINED_VALUE, Listbox;
var init_helpers = __esmMin((() => {
	init_emotion();
	UNDEFINED_VALUE = Symbol.for("undefined");
	Listbox = styled("ul")({
		minWidth: 180,
		height: "100%",
		borderRadius: 6,
		overflow: "hidden auto",
		listStyle: "none",
		margin: 0,
		padding: 4
	});
}));
//#endregion
//#region src/components/components/Select/Select.tsx
function valueToId(parentId, { value }) {
	return `${parentId}-opt-${String(value) ?? "sb-reset"}`;
}
function setSelectedFromDefault(options, defaultOptions) {
	if (defaultOptions === void 0) return [];
	if (isLiteralValue(defaultOptions)) return options.filter((opt) => opt.value === defaultOptions).map(optionToInternal);
	return options.filter((opt) => defaultOptions.some((def) => opt.value === def)).map(optionToInternal);
}
var import_react$21, SelectedOptionCount, StyledButton, Underlay, MinimalistPopover, Select;
var init_Select = __esmMin((() => {
	import_react$21 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$2();
	init_useInteractOutside$1();
	init_useOverlay$1();
	init_useOverlayPosition$1();
	init_Overlay$1();
	init_import();
	init_useObjectRef$1();
	init_useOverlayTriggerState$1();
	init_polished_esm();
	init_emotion();
	init_Button();
	init_Form();
	init_Popover();
	init_SelectOption();
	init_helpers();
	SelectedOptionCount = styled.span(({ theme }) => ({
		appearance: "none",
		color: theme.textMutedColor,
		fontSize: 12
	}));
	StyledButton = styled(Button)(({ $isOpen: isOpen, $hasSelection: hasSelection, theme }) => isOpen || hasSelection ? {
		boxShadow: "none",
		background: curriedTransparentize$1(.93, theme.barSelectedColor),
		color: theme.base === "light" ? curriedDarken$1(.1, theme.color.secondary) : theme.color.secondary
	} : {});
	Underlay = styled.div({
		position: "fixed",
		inset: 0,
		zIndex: 1e3
	});
	MinimalistPopover = ({ children, handleClose, triggerRef }) => {
		const popoverRef = import_react$21.useRef(null);
		$e260d131964da0f9$export$872b660ac5a1ff98({
			ref: popoverRef,
			onInteractOutside: handleClose
		});
		(0, import_react$21.useEffect)(() => {
			if (popoverRef.current) return $58196c8d6a1f38fc$export$1c3ebcada18427bf([popoverRef.current], { shouldUseInert: true });
		}, []);
		const { overlayProps: positionProps } = $b3526bc71400be8d$export$d39e1813b3bdd0e1({
			targetRef: triggerRef,
			overlayRef: popoverRef,
			placement: "bottom start",
			offset: 8,
			maxHeight: 504,
			isOpen: true
		});
		const { overlayProps, underlayProps } = $77844860df94ba23$export$ea8f71083e90600f({
			isOpen: true,
			onClose: handleClose,
			isDismissable: true,
			shouldCloseOnBlur: false,
			isKeyboardDismissDisabled: true
		}, popoverRef);
		const theme = useTheme();
		positionProps.style = {
			...positionProps.style,
			overflow: "hidden auto",
			scrollbarColor: `${theme.barTextColor} transparent`,
			scrollbarWidth: "thin"
		};
		return /* @__PURE__ */ import_react$21.default.createElement($d7a937236970dc7f$export$c6fdb837b070b4ff, {
			disableFocusManagement: true,
			...overlayProps
		}, /* @__PURE__ */ import_react$21.default.createElement(Underlay, underlayProps), /* @__PURE__ */ import_react$21.default.createElement(Popover, {
			hasChrome: true,
			ref: popoverRef,
			padding: 0,
			scrollable: false,
			...positionProps
		}, children));
	};
	Select = (0, import_react$21.forwardRef)(({ children, icon, disabled = false, options: calleeOptions, defaultOptions, multiSelect = false, onReset, padding = "small", resetLabel, onSelect, onDeselect, onChange, tooltip, ariaLabel, showSelectedOptionTitle = true, ...props }, ref) => {
		const [isOpen, setIsOpen] = (0, import_react$21.useState)(props.defaultOpen || false);
		const [shouldRefocusTrigger, setShouldRefocusTrigger] = (0, import_react$21.useState)(false);
		const triggerRef = $03e8ab2d84d7657a$export$4338b53315abf666(ref);
		const id = (0, import_react$21.useMemo)(() => {
			return "select-" + Math.random().toString(36).substring(2, 15);
		}, []);
		const listboxId = `${id}-listbox`;
		const listboxRef = (0, import_react$21.useRef)(null);
		const otState = $f11fb0bcf1b2687a$export$61c6a8c84e605fb6({
			isOpen: isOpen && !disabled,
			onOpenChange: setIsOpen
		});
		const handleClose = (0, import_react$21.useCallback)(() => {
			setIsOpen(false);
			setShouldRefocusTrigger(true);
		}, []);
		(0, import_react$21.useEffect)(() => {
			if (!otState.isOpen && shouldRefocusTrigger) {
				if (triggerRef.current?.ownerDocument?.defaultView) triggerRef.current.focus();
				setShouldRefocusTrigger(false);
			}
		}, [
			otState.isOpen,
			shouldRefocusTrigger,
			triggerRef
		]);
		const [selectedOptions, setSelectedOptions] = (0, import_react$21.useState)(setSelectedFromDefault(calleeOptions, defaultOptions));
		const handleSelectOption = (0, import_react$21.useCallback)((option) => {
			if (option.type === "reset") {
				onChange?.([]);
				onReset?.();
				setSelectedOptions([]);
			} else if (multiSelect) setSelectedOptions((previous) => {
				let newSelected = [];
				if (previous?.some((opt) => opt.value === option.value)) {
					onDeselect?.(valueToExternal(option.value));
					newSelected = previous?.filter((opt) => opt.value !== option.value) ?? [];
				} else {
					onSelect?.(valueToExternal(option.value));
					newSelected = [...previous ?? [], option];
				}
				onChange?.(newSelected.map((opt) => valueToExternal(opt.value)));
				return newSelected;
			});
			else setSelectedOptions((current) => {
				if (current.every((opt) => opt.value !== option.value)) {
					onSelect?.(valueToExternal(option.value));
					onChange?.([valueToExternal(option.value)]);
					return [option];
				}
				return current;
			});
		}, [
			multiSelect,
			onChange,
			onSelect,
			onDeselect,
			onReset
		]);
		const resetOption = (0, import_react$21.useMemo)(() => onReset ? {
			type: "reset",
			value: void 0,
			title: resetLabel ?? "Reset selection",
			icon: /* @__PURE__ */ import_react$21.default.createElement(RefreshIcon, null),
			description: void 0,
			children: void 0
		} : void 0, [onReset, resetLabel]);
		const options = (0, import_react$21.useMemo)(() => resetOption ? [resetOption, ...calleeOptions] : calleeOptions, [calleeOptions, resetOption]);
		(0, import_react$21.useEffect)(() => {
			if (defaultOptions) setSelectedOptions(setSelectedFromDefault(calleeOptions, defaultOptions));
		}, [defaultOptions, calleeOptions]);
		const [activeOption, setActiveOptionState] = (0, import_react$21.useState)(void 0);
		const setActiveOption = (0, import_react$21.useCallback)((option, changeSelection = true) => {
			setActiveOptionState(optionOrResetToInternal(option));
			if (!multiSelect && changeSelection) handleSelectOption(optionOrResetToInternal(option));
		}, [multiSelect, handleSelectOption]);
		const moveActiveOptionDown = (0, import_react$21.useCallback)((step = 1) => {
			if (!isOpen || !activeOption) {
				setActiveOption(options[step === 1 ? 0 : Math.min(step, options.length - 1)]);
				return;
			}
			const currentIndex = options.findIndex((option) => activeOption.type === "reset" ? "type" in option && option.type === "reset" : externalToValue(option.value) === activeOption.value);
			const nextIndex = currentIndex + step;
			let newActiveOption;
			if (nextIndex >= options.length && currentIndex === options.length - 1) newActiveOption = options[0];
			else newActiveOption = options[Math.min(options.length - 1, nextIndex)];
			setActiveOption(newActiveOption);
		}, [
			isOpen,
			activeOption,
			setActiveOption,
			options
		]);
		const moveActiveOptionUp = (0, import_react$21.useCallback)((step = 1) => {
			if (!isOpen || !activeOption) {
				setActiveOption(options[Math.max(0, options.length - step)]);
				return;
			}
			const currentIndex = options.findIndex((option) => activeOption.type === "reset" ? "type" in option && option.type === "reset" : externalToValue(option.value) === activeOption.value);
			const nextIndex = currentIndex - step;
			let newActiveOption;
			if (nextIndex < 0 && currentIndex === 0) newActiveOption = options[options.length - 1];
			else newActiveOption = options[Math.max(0, nextIndex)];
			setActiveOption(newActiveOption);
		}, [
			isOpen,
			activeOption,
			setActiveOption,
			options
		]);
		const handleButtonKeyDown = (0, import_react$21.useCallback)((e) => {
			const openAt = (index) => {
				e.preventDefault();
				setActiveOption(options[index]);
				setIsOpen(true);
			};
			const indexOfFirstSelected = options.findIndex((option) => selectedOptions.some((sel) => sel.value === externalToValue(option.value)));
			const hasSelection = indexOfFirstSelected !== -1;
			const listStart = resetOption && !hasSelection ? 1 : 0;
			const listEnd = options.length - 1;
			if (e.key === "Enter" || e.key === " ") openAt(hasSelection ? Math.min(indexOfFirstSelected, listEnd) : listStart);
			else if (e.key === "ArrowDown") openAt(hasSelection ? Math.min(indexOfFirstSelected + 1, listEnd) : listStart);
			else if (e.key === "ArrowUp") openAt(hasSelection ? Math.max(indexOfFirstSelected - 1, listStart) : listEnd);
			else if (e.key === "Home") openAt(listStart);
			else if (e.key === "End") openAt(listEnd);
			else if (e.key === "PageDown") openAt(Math.min((hasSelection ? indexOfFirstSelected : listStart) + 5, listEnd));
			else if (e.key === "PageUp") openAt(Math.max(0, (hasSelection ? indexOfFirstSelected : listEnd) - 5));
		}, [
			options,
			resetOption,
			setActiveOption,
			selectedOptions
		]);
		const handleListboxKeyDown = (0, import_react$21.useCallback)((e) => {
			if (e.key !== "Tab") e.preventDefault();
			else handleClose();
			if (e.key === "Escape") {
				handleClose();
				e.stopPropagation();
			} else if (e.key === "ArrowDown") moveActiveOptionDown();
			else if (e.key === "ArrowUp") moveActiveOptionUp();
			else if (e.key === "Home") setActiveOption(options[0]);
			else if (e.key === "End") setActiveOption(options[options.length - 1]);
			else if (e.key === "PageDown") moveActiveOptionDown(5);
			else if (e.key === "PageUp") moveActiveOptionUp(5);
		}, [
			handleClose,
			moveActiveOptionDown,
			moveActiveOptionUp,
			options,
			setActiveOption
		]);
		(0, import_react$21.useEffect)(() => {
			if (isOpen && activeOption) {
				const optionElement = document.getElementById(valueToId(id, activeOption));
				if (optionElement) {
					optionElement.scrollIntoView({ block: "nearest" });
					optionElement.focus();
				}
			} else if (isOpen) listboxRef.current?.focus();
		}, [
			isOpen,
			activeOption,
			id
		]);
		const finalAriaLabel = (0, import_react$21.useMemo)(() => {
			if (selectedOptions.length === 1) return `${ariaLabel} ${selectedOptions[0].title}`;
			if (selectedOptions.length) return `${ariaLabel}, ${selectedOptions.length} values selected`;
			return ariaLabel;
		}, [ariaLabel, selectedOptions]);
		return /* @__PURE__ */ import_react$21.default.createElement(import_react$21.default.Fragment, null, /* @__PURE__ */ import_react$21.default.createElement(StyledButton, {
			...props,
			variant: "ghost",
			ariaLabel: finalAriaLabel,
			tooltip: tooltip ?? ariaLabel,
			disableAllTooltips: isOpen,
			id,
			ref: triggerRef,
			padding,
			$isOpen: isOpen,
			$hasSelection: !!selectedOptions.length,
			"aria-disabled": disabled,
			disabled,
			onClick: () => {
				if (isOpen) handleClose();
				else setIsOpen(true);
			},
			tabIndex: isOpen ? -1 : 0,
			onKeyDown: handleButtonKeyDown,
			role: "button",
			"aria-controls": isOpen ? listboxId : void 0,
			"aria-expanded": isOpen,
			"aria-haspopup": "listbox"
		}, !multiSelect && /* @__PURE__ */ import_react$21.default.createElement(import_react$21.default.Fragment, null, icon, showSelectedOptionTitle && selectedOptions[0]?.title || children), multiSelect && /* @__PURE__ */ import_react$21.default.createElement(import_react$21.default.Fragment, null, icon, children, !!selectedOptions.length && /* @__PURE__ */ import_react$21.default.createElement(SelectedOptionCount, { "aria-label": `${selectedOptions.length} ${selectedOptions.length > 1 ? "items" : "item"} selected` }, selectedOptions?.length))), otState.isOpen && /* @__PURE__ */ import_react$21.default.createElement(MinimalistPopover, {
			handleClose,
			triggerRef
		}, /* @__PURE__ */ import_react$21.default.createElement(Listbox, {
			"aria-label": ariaLabel,
			role: "listbox",
			id: listboxId,
			ref: listboxRef,
			"aria-multiselectable": multiSelect,
			onKeyDown: handleListboxKeyDown,
			tabIndex: isOpen ? 0 : -1
		}, options.map((opt) => ({
			option: optionOrResetToInternal(opt),
			externalOption: opt
		})).map(({ externalOption, option }) => {
			const isSelected = selectedOptions?.some((sel) => sel.value === option.value) && option !== resetOption;
			const isReset = option === resetOption;
			return /* @__PURE__ */ import_react$21.default.createElement(SelectOption, {
				key: option.value === void 0 ? "sb-reset" : String(option.value),
				title: option.title,
				description: option.description,
				aside: option.aside,
				icon: !isReset && multiSelect ? /* @__PURE__ */ import_react$21.default.createElement(Form.Checkbox, {
					checked: isSelected,
					hidden: true,
					role: "presentation"
				}) : option.icon,
				id: valueToId(id, option),
				isActive: isOpen && activeOption?.value === option.value,
				isSelected,
				onClick: () => {
					handleSelectOption(option);
					if (!multiSelect) handleClose();
				},
				onFocus: () => setActiveOption(externalOption, false),
				shouldLookDisabled: isReset && selectedOptions.length === 0 && multiSelect,
				onKeyDown: (e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						handleSelectOption(option);
						if (!multiSelect) handleClose();
					} else if (e.key === "Tab") {
						if (!multiSelect) handleSelectOption(option);
						handleClose();
					}
				}
			}, option.children);
		}))));
	});
	Select.displayName = "Select";
}));
//#endregion
//#region src/components/components/Popover/PopoverProvider.tsx
var import_react$20, PopoverProvider;
var init_PopoverProvider = __esmMin((() => {
	import_react$20 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_Pressable$1();
	init_Dialog();
	init_Popover$1();
	init_overlayHelpers();
	init_Popover();
	PopoverProvider = ({ ariaLabel, placement: placementProp = "bottom-start", hasChrome = true, hasCloseButton = false, closeLabel, offset = 8, padding, scrollable = true, popover, children, defaultVisible, visible, onVisibleChange, ...props }) => {
		const placement = convertToReactAriaPlacement(placementProp);
		const [isOpen, setIsOpen] = (0, import_react$20.useState)(defaultVisible ?? false);
		const onOpenChange = (0, import_react$20.useCallback)((isOpen) => {
			setIsOpen(isOpen);
			onVisibleChange?.(isOpen);
		}, [onVisibleChange]);
		const onHide = (0, import_react$20.useCallback)(() => onOpenChange(false), [onOpenChange]);
		return /* @__PURE__ */ import_react$20.default.createElement($f2ff30fde7b014be$export$2e1e1122cf0cba88, {
			defaultOpen: defaultVisible,
			isOpen: visible ?? isOpen,
			onOpenChange,
			...props
		}, /* @__PURE__ */ import_react$20.default.createElement($15e7830bf6471d45$export$27c701ed9e449e99, null, (0, import_react$20.cloneElement)(children, { "aria-haspopup": "dialog" })), /* @__PURE__ */ import_react$20.default.createElement($542a13ca2fa5b484$export$5b6b19405a83ff9d, {
			"aria-label": ariaLabel,
			placement,
			offset,
			style: { outline: "none" }
		}, /* @__PURE__ */ import_react$20.default.createElement(Popover, {
			hasChrome,
			hideLabel: closeLabel,
			onHide: hasCloseButton ? onHide : void 0,
			padding,
			scrollable
		}, typeof popover === "function" ? popover({ onHide }) : popover)));
	};
}));
//#endregion
//#region src/components/components/tooltip/Tooltip.tsx
var import_react$19, Tooltip;
var init_Tooltip = __esmMin((() => {
	import_react$19 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_Popover();
	Tooltip = (0, import_react$19.forwardRef)((props, ref) => {
		return /* @__PURE__ */ import_react$19.default.createElement(Popover, {
			ref,
			...props
		});
	});
	Tooltip.displayName = "Tooltip";
}));
//#endregion
//#region src/components/components/Bar/Separator.tsx
var import_react$18, Separator, interleaveSeparators;
var init_Separator = __esmMin((() => {
	import_react$18 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	Separator = styled.span(({ theme }) => ({
		display: "inline-block",
		width: 1,
		height: 20,
		background: theme.appBorderColor,
		marginLeft: 2,
		marginRight: 2
	}), ({ force }) => force ? {} : { "& + &": { display: "none" } });
	Separator.displayName = "Separator";
	interleaveSeparators = (list) => list.reduce((acc, item, index) => item ? /* @__PURE__ */ import_react$18.default.createElement(import_react$18.Fragment, { key: item.id || item.key || `f-${index}` }, acc, index > 0 ? /* @__PURE__ */ import_react$18.default.createElement(Separator, { key: `s-${index}` }) : null, item.render() || item) : acc, null);
}));
//#endregion
//#region src/components/components/Bar/Bar.tsx
var import_react$17, StyledBar, HeightPreserver, Bar;
var init_Bar = __esmMin((() => {
	import_react$17 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	StyledBar = styled.div(({ backgroundColor, border = false, innerStyle = {}, scrollable, theme }) => ({
		color: theme.barTextColor,
		width: "100%",
		minHeight: 40,
		flexShrink: 0,
		scrollbarColor: `${theme.barTextColor} ${backgroundColor || theme.barBg}`,
		scrollbarWidth: "thin",
		overflow: scrollable ? "auto" : "hidden",
		overflowY: "hidden",
		display: "flex",
		alignItems: "center",
		gap: scrollable ? 0 : 6,
		paddingInline: scrollable ? 0 : 6,
		...border ? { boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset` } : {},
		background: backgroundColor || theme.barBg,
		...innerStyle
	}));
	HeightPreserver = styled.div(({ innerStyle }) => ({
		minHeight: 40,
		display: "flex",
		alignItems: "center",
		width: "100%",
		gap: 6,
		paddingInline: 6,
		...innerStyle
	}));
	Bar = (0, import_react$17.forwardRef)(({ scrollable = true, children, innerStyle, ...rest }, ref) => {
		return /* @__PURE__ */ import_react$17.default.createElement(StyledBar, {
			...rest,
			ref,
			innerStyle: scrollable ? void 0 : innerStyle,
			scrollable
		}, scrollable ? /* @__PURE__ */ import_react$17.default.createElement(HeightPreserver, { innerStyle }, children) : children);
	});
	Bar.displayName = "Bar";
}));
//#endregion
//#region src/components/components/Tabs/EmptyTabContent.tsx
var import_react$16, Wrapper$2, Content, Title, Footer, Description, EmptyTabContent;
var init_EmptyTabContent = __esmMin((() => {
	import_react$16 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	Wrapper$2 = styled.div(({ theme }) => ({
		height: "100%",
		display: "flex",
		padding: 30,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		gap: 15,
		background: theme.background.content
	}));
	Content = styled.div({
		display: "flex",
		flexDirection: "column",
		gap: 4,
		maxWidth: 415
	});
	Title = styled.div(({ theme }) => ({
		fontWeight: theme.typography.weight.bold,
		fontSize: theme.typography.size.s2 - 1,
		textAlign: "center",
		color: theme.color.defaultText
	}));
	Footer = styled.div(({ theme }) => ({ fontSize: theme.typography.size.s2 - 1 }));
	Description = styled.div(({ theme }) => ({
		fontWeight: theme.typography.weight.regular,
		fontSize: theme.typography.size.s2 - 1,
		textAlign: "center",
		color: theme.textMutedColor
	}));
	EmptyTabContent = ({ title, description, footer }) => {
		return /* @__PURE__ */ import_react$16.default.createElement(Wrapper$2, null, /* @__PURE__ */ import_react$16.default.createElement(Content, null, /* @__PURE__ */ import_react$16.default.createElement(Title, null, title), description && /* @__PURE__ */ import_react$16.default.createElement(Description, null, description)), footer && /* @__PURE__ */ import_react$16.default.createElement(Footer, null, footer));
	};
}));
//#endregion
//#region src/components/components/addon-panel/addon-panel.tsx
var import_react$15, usePrevious, useUpdate, Div, AddonPanel;
var init_addon_panel = __esmMin((() => {
	import_react$15 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	init_ScrollArea();
	usePrevious = (value) => {
		const ref = (0, import_react$15.useRef)();
		(0, import_react$15.useEffect)(() => {
			ref.current = value;
		}, [value]);
		return ref.current;
	};
	useUpdate = (update, value) => {
		const previousValue = usePrevious(value);
		return update ? value : previousValue;
	};
	Div = styled.div(({ theme }) => ({
		fontSize: theme.typography.size.s2 - 1,
		height: "100%"
	}));
	AddonPanel = ({ active, children, hasScrollbar = true, hasHorizontalScrollbar = false }) => {
		return /* @__PURE__ */ import_react$15.default.createElement(Div, { hidden: !active }, hasScrollbar || hasHorizontalScrollbar ? /* @__PURE__ */ import_react$15.default.createElement(ScrollArea, {
			vertical: hasScrollbar,
			horizontal: hasHorizontalScrollbar
		}, useUpdate(active, children)) : useUpdate(active, children));
	};
}));
//#endregion
//#region src/components/components/Toolbar/Toolbar.tsx
var import_react$14, AbstractToolbar, Toolbar;
var init_Toolbar = __esmMin((() => {
	import_react$14 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_useToolbar$1();
	init_Bar();
	AbstractToolbar = ({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, ...rest }) => {
		const ref = (0, import_react$14.useRef)(null);
		const { toolbarProps } = $afa781ff67c1cd08$export$fa142eb1681c520({
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledby,
			orientation: "horizontal"
		}, ref);
		return /* @__PURE__ */ import_react$14.default.createElement("div", {
			ref,
			...toolbarProps,
			...rest
		});
	};
	Toolbar = ({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, ...rest }) => {
		const ref = (0, import_react$14.useRef)(null);
		const { toolbarProps } = $afa781ff67c1cd08$export$fa142eb1681c520({
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledby,
			orientation: "horizontal"
		}, ref);
		return /* @__PURE__ */ import_react$14.default.createElement(Bar, {
			ref,
			...toolbarProps,
			...rest
		});
	};
}));
//#endregion
//#region src/components/components/Tabs/TabList.tsx
var import_react$13, StyledTabButton, TabListContainer, ScrollContainer$1, StyledTabList$1, SCROLL_BUTTON_WIDTH$1, ScrollButtonContainer$1, ScrollButton$1, TabButton, TabList;
var init_TabList = __esmMin((() => {
	import_react$13 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$2();
	init_useTabList$1();
	init_emotion();
	init_Button();
	StyledTabButton = styled.button({
		whiteSpace: "normal",
		display: "inline-flex",
		overflow: "hidden",
		verticalAlign: "top",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		textDecoration: "none",
		scrollSnapAlign: "start",
		"&:empty": { display: "none" },
		"&[hidden]": { display: "none" }
	}, ({ theme }) => ({
		padding: "0 15px",
		transition: "color 0.2s linear, border-bottom-color 0.2s linear",
		height: 40,
		lineHeight: "12px",
		cursor: "pointer",
		background: "transparent",
		border: "0 solid transparent",
		borderTop: "3px solid transparent",
		borderBottom: "3px solid transparent",
		fontWeight: "bold",
		fontSize: 13,
		"&:focus-visible": {
			outline: "0 none",
			boxShadow: `inset 0 0 0 2px ${theme.barSelectedColor}`
		}
	}), ({ isSelected, theme }) => isSelected ? {
		color: theme.barSelectedColor,
		borderBottomColor: theme.barSelectedColor
	} : {
		color: theme.barTextColor,
		borderBottomColor: "transparent",
		"&:hover": { color: theme.barHoverColor }
	});
	TabListContainer = styled.div({
		display: "flex",
		alignItems: "center",
		flexShrink: 0,
		position: "relative",
		overflow: "hidden"
	});
	ScrollContainer$1 = styled.div({
		display: "flex",
		overflowX: "auto",
		scrollbarWidth: "none",
		msOverflowStyle: "none",
		WebkitScrollbar: "none",
		scrollSnapType: "x mandatory",
		flex: 1,
		"&::-webkit-scrollbar": { display: "none" }
	});
	StyledTabList$1 = styled.div({
		display: "flex",
		flexShrink: 0
	});
	SCROLL_BUTTON_WIDTH$1 = 28;
	ScrollButtonContainer$1 = styled.div(({ $showStartBorder, $showEndBorder, theme }) => ({
		flexShrink: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: 6,
		boxShadow: $showStartBorder ? `inset 1px 0 0 ${theme.appBorderColor}` : $showEndBorder ? `inset -1px 0 0 ${theme.appBorderColor}` : "none"
	}));
	ScrollButton$1 = styled(Button)({
		flexShrink: 0,
		paddingInline: 0,
		width: 16
	});
	TabButton = ({ item, state }) => {
		const { rendered } = item;
		const tabRef = import_react$13.useRef(null);
		const { tabProps, isDisabled, isPressed, isSelected } = $1b6fa05bad3d7740$export$fdf4756d5b8ef90a(item, state, tabRef);
		return /* @__PURE__ */ import_react$13.default.createElement(StyledTabButton, {
			...tabProps,
			isDisabled,
			isPressed,
			isSelected,
			className: `tabbutton ${isSelected ? "tabbutton-active" : ""}`,
			ref: tabRef
		}, rendered);
	};
	TabList = ({ state, ...rest }) => {
		const containerRef = (0, import_react$13.useRef)(null);
		const scrollContainerRef = (0, import_react$13.useRef)(null);
		const tabListRef = (0, import_react$13.useRef)(null);
		const { tabListProps } = $83428e53deb13caf$export$773e389e644c5874({ orientation: "horizontal" }, state, tabListRef);
		const [showScrollButtons, setShowScrollButtons] = (0, import_react$13.useState)(false);
		const [canScrollLeft, setCanScrollLeft] = (0, import_react$13.useState)(false);
		const [canScrollRight, setCanScrollRight] = (0, import_react$13.useState)(false);
		const updateScrollState = (0, import_react$13.useCallback)(() => {
			const scrollContainer = scrollContainerRef.current;
			const container = containerRef.current;
			if (!scrollContainer || !container) return;
			const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
			const needsScrolling = scrollWidth > container.clientWidth - (showScrollButtons ? SCROLL_BUTTON_WIDTH$1 * 2 : 0);
			setShowScrollButtons(needsScrolling);
			if (needsScrolling) {
				setCanScrollLeft(scrollLeft > 0);
				setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
			} else {
				setCanScrollLeft(false);
				setCanScrollRight(false);
			}
		}, [showScrollButtons]);
		const throttledUpdateScrollState = (0, import_react$13.useCallback)(() => {
			updateScrollState();
		}, [updateScrollState]);
		(0, import_react$13.useEffect)(() => {
			const scrollContainer = scrollContainerRef.current;
			if (!scrollContainer || typeof window === "undefined") return;
			scrollContainer.addEventListener("scroll", throttledUpdateScrollState, { passive: true });
			let resizeObserver = null;
			if (typeof ResizeObserver !== "undefined") {
				resizeObserver = new ResizeObserver(throttledUpdateScrollState);
				resizeObserver.observe(scrollContainer);
			}
			const timeoutId = setTimeout(throttledUpdateScrollState, 0);
			return () => {
				clearTimeout(timeoutId);
				scrollContainer.removeEventListener("scroll", throttledUpdateScrollState);
				if (resizeObserver) resizeObserver.disconnect();
			};
		}, [throttledUpdateScrollState]);
		const scroll = (0, import_react$13.useCallback)((direction) => {
			const scrollContainer = scrollContainerRef.current;
			const container = containerRef.current;
			if (!scrollContainer || !container || typeof window === "undefined") return;
			const availableWidth = container.clientWidth - SCROLL_BUTTON_WIDTH$1 * 2;
			const scrollDistance = direction === "backward" ? -availableWidth : availableWidth;
			if (typeof scrollContainer.scrollBy === "function") scrollContainer.scrollBy({
				left: scrollDistance,
				behavior: "smooth"
			});
			else scrollContainer.scrollLeft += scrollDistance;
		}, []);
		const scrollBackward = (0, import_react$13.useCallback)(() => scroll("backward"), [scroll]);
		const scrollForward = (0, import_react$13.useCallback)(() => scroll("forward"), [scroll]);
		return /* @__PURE__ */ import_react$13.default.createElement(TabListContainer, {
			...rest,
			ref: containerRef,
			"data-show-scroll-buttons": showScrollButtons
		}, showScrollButtons && /* @__PURE__ */ import_react$13.default.createElement(ScrollButtonContainer$1, { $showEndBorder: canScrollLeft }, /* @__PURE__ */ import_react$13.default.createElement(ScrollButton$1, {
			variant: "ghost",
			padding: "small",
			size: "small",
			ariaLabel: "Scroll backward",
			disabled: !canScrollLeft,
			onClick: scrollBackward,
			tabIndex: -1
		}, /* @__PURE__ */ import_react$13.default.createElement(ChevronSmallLeftIcon, null))), /* @__PURE__ */ import_react$13.default.createElement(ScrollContainer$1, { ref: scrollContainerRef }, /* @__PURE__ */ import_react$13.default.createElement(StyledTabList$1, {
			ref: tabListRef,
			...tabListProps
		}, [...state.collection].map((item) => /* @__PURE__ */ import_react$13.default.createElement(TabButton, {
			key: item.key,
			item,
			state
		})))), showScrollButtons && /* @__PURE__ */ import_react$13.default.createElement(ScrollButtonContainer$1, { $showStartBorder: canScrollRight }, /* @__PURE__ */ import_react$13.default.createElement(ScrollButton$1, {
			variant: "ghost",
			padding: "small",
			size: "small",
			ariaLabel: "Scroll forward",
			disabled: !canScrollRight,
			onClick: scrollForward,
			tabIndex: -1
		}, /* @__PURE__ */ import_react$13.default.createElement(ChevronSmallRightIcon, null))));
	};
}));
//#endregion
//#region src/components/components/Tabs/TabPanel.tsx
var import_react$12, Panel, TabPanel;
var init_TabPanel = __esmMin((() => {
	import_react$12 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_useTabList$1();
	init_emotion();
	init_ScrollArea();
	Panel = styled.div({
		overflowY: "hidden",
		height: "100%"
	});
	TabPanel = ({ hasScrollbar = true, renderAllChildren = false, state }) => {
		const ref = (0, import_react$12.useRef)(null);
		const typedState = state;
		const { tabPanelProps } = $7d951241dadd72e4$export$fae0121b5afe572d(typedState.selectedItem ?? {}, typedState, ref);
		return (renderAllChildren ? [...typedState.collection] : [typedState.selectedItem]).filter((item) => !!item).map((item) => {
			const isSelected = typedState.selectedKey === item.key;
			return /* @__PURE__ */ import_react$12.default.createElement(Panel, {
				key: item.key,
				ref: isSelected ? ref : void 0,
				...isSelected ? tabPanelProps : {},
				id: isSelected ? `${tabPanelProps.id}`.replace(/null$/, `${item.key}`) : void 0,
				hidden: isSelected ? void 0 : true
			}, hasScrollbar ? /* @__PURE__ */ import_react$12.default.createElement(ScrollArea, { vertical: true }, item.props.children) : item.props.children);
		});
	};
}));
//#endregion
//#region src/components/components/Tabs/TabsView.tsx
var import_react$11, useTabsState, Container$1, FlexTabPanel, FlexTabList, TabsView;
var init_TabsView = __esmMin((() => {
	import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_Item();
	init_useTabListState();
	init_emotion();
	init_Bar();
	init_EmptyTabContent();
	init_TabList();
	init_TabPanel();
	useTabsState = ({ defaultSelected, onSelectionChange, selected, tabs }) => {
		return $caeb030f09a278a1$export$4ba071daf4e486({
			children: tabs.map(({ children: Children, id, "aria-label": ariaLabel, title: Title }) => /* @__PURE__ */ import_react$11.default.createElement($05678f3aee5e7d1a$export$6d08773d2e66f8f2, {
				key: id,
				"aria-label": ariaLabel,
				title: typeof Title === "function" ? /* @__PURE__ */ import_react$11.default.createElement(Title, null) : Title
			}, typeof Children === "function" ? /* @__PURE__ */ import_react$11.default.createElement(Children, null) : Children)),
			disabledKeys: tabs.filter(({ isDisabled }) => isDisabled).map(({ id }) => id),
			defaultSelectedKey: defaultSelected,
			onSelectionChange: (key) => onSelectionChange?.(`${key}`),
			selectedKey: selected
		});
	};
	Container$1 = styled.div({
		display: "flex",
		flexDirection: "column",
		height: "100%"
	});
	FlexTabPanel = styled(TabPanel)(() => ({ flex: 1 }));
	FlexTabList = styled(TabList)(({ $simulatedGap }) => ({
		flex: "1 1 0%",
		"&[data-show-scroll-buttons=\"true\"]": { marginInlineEnd: $simulatedGap }
	}));
	TabsView = ({ backgroundColor, barInnerStyle, defaultSelected, emptyState, onSelectionChange, panelProps = {}, selected, showToolsWhenEmpty, tabs, tools, ...props }) => {
		const state = useTabsState({
			defaultSelected,
			onSelectionChange,
			selected,
			tabs
		});
		const EmptyContent = emptyState ?? /* @__PURE__ */ import_react$11.default.createElement(EmptyTabContent, { title: "Nothing found" });
		const hasContent = tabs.length > 0;
		if (!showToolsWhenEmpty && !hasContent) return EmptyContent;
		return /* @__PURE__ */ import_react$11.default.createElement(Container$1, props, /* @__PURE__ */ import_react$11.default.createElement(Bar, {
			scrollable: false,
			border: true,
			backgroundColor,
			innerStyle: {
				display: "flex",
				justifyContent: "space-between",
				paddingInlineStart: 0,
				paddingInlineEnd: 10,
				"> *:not(:last-child)": { order: 2 },
				"> *": { flexShrink: 0 },
				...barInnerStyle,
				gap: 0
			}
		}, tools, hasContent ? /* @__PURE__ */ import_react$11.default.createElement(FlexTabList, {
			state,
			$simulatedGap: barInnerStyle?.gap ?? 6
		}) : /* @__PURE__ */ import_react$11.default.createElement("div", null)), hasContent ? /* @__PURE__ */ import_react$11.default.createElement(FlexTabPanel, {
			state,
			...panelProps
		}) : EmptyContent);
	};
}));
//#endregion
//#region src/components/components/Tabs/StatelessTabList.tsx
var import_react$10, Root$1, ScrollContainer, StyledTabList, SCROLL_BUTTON_WIDTH, ScrollButtonContainer, ScrollButton, StatelessTabList;
var init_StatelessTabList = __esmMin((() => {
	import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$2();
	init_Tabs();
	init_emotion();
	init_Button();
	Root$1 = styled.div({
		display: "flex",
		alignItems: "center",
		flexShrink: 0,
		position: "relative",
		overflow: "hidden"
	});
	ScrollContainer = styled.div({
		display: "flex",
		overflowX: "auto",
		scrollbarWidth: "none",
		msOverflowStyle: "none",
		WebkitScrollbar: "none",
		scrollSnapType: "x mandatory",
		flex: 1,
		"&::-webkit-scrollbar": { display: "none" }
	});
	StyledTabList = styled($b4f18e3395fe64d7$export$e51a686c67fdaa2d)({
		display: "flex",
		flexShrink: 0
	});
	SCROLL_BUTTON_WIDTH = 28;
	ScrollButtonContainer = styled.div(({ $showStartBorder, $showEndBorder, theme }) => ({
		flexShrink: 0,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: 6,
		boxShadow: $showStartBorder ? `inset 1px 0 0 ${theme.appBorderColor}` : $showEndBorder ? `inset -1px 0 0 ${theme.appBorderColor}` : "none"
	}));
	ScrollButton = styled(Button)({
		flexShrink: 0,
		paddingInline: 0,
		width: 16
	});
	StatelessTabList = ({ children, ...rest }) => {
		const containerRef = (0, import_react$10.useRef)(null);
		const scrollContainerRef = (0, import_react$10.useRef)(null);
		const [showScrollButtons, setShowScrollButtons] = (0, import_react$10.useState)(false);
		const [canScrollLeft, setCanScrollLeft] = (0, import_react$10.useState)(false);
		const [canScrollRight, setCanScrollRight] = (0, import_react$10.useState)(false);
		const updateScrollState = (0, import_react$10.useCallback)(() => {
			const scrollContainer = scrollContainerRef.current;
			const container = containerRef.current;
			if (!scrollContainer || !container) return;
			const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
			const needsScrolling = scrollWidth > container.clientWidth - (showScrollButtons ? SCROLL_BUTTON_WIDTH * 2 : 0);
			setShowScrollButtons(needsScrolling);
			if (needsScrolling) {
				setCanScrollLeft(scrollLeft > 0);
				setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
			} else {
				setCanScrollLeft(false);
				setCanScrollRight(false);
			}
		}, [showScrollButtons]);
		const throttledUpdateScrollState = (0, import_react$10.useCallback)(() => {
			updateScrollState();
		}, [updateScrollState]);
		(0, import_react$10.useEffect)(() => {
			const scrollContainer = scrollContainerRef.current;
			if (!scrollContainer || typeof window === "undefined") return;
			scrollContainer.addEventListener("scroll", throttledUpdateScrollState, { passive: true });
			let resizeObserver = null;
			if (typeof ResizeObserver !== "undefined") {
				resizeObserver = new ResizeObserver(throttledUpdateScrollState);
				resizeObserver.observe(scrollContainer);
			}
			const timeoutId = setTimeout(throttledUpdateScrollState, 0);
			return () => {
				clearTimeout(timeoutId);
				scrollContainer.removeEventListener("scroll", throttledUpdateScrollState);
				if (resizeObserver) resizeObserver.disconnect();
			};
		}, [throttledUpdateScrollState]);
		const scroll = (0, import_react$10.useCallback)((direction) => {
			const scrollContainer = scrollContainerRef.current;
			const container = containerRef.current;
			if (!scrollContainer || !container || typeof window === "undefined") return;
			const availableWidth = container.clientWidth - SCROLL_BUTTON_WIDTH * 2;
			const scrollDistance = direction === "backward" ? -availableWidth : availableWidth;
			if (typeof scrollContainer.scrollBy === "function") scrollContainer.scrollBy({
				left: scrollDistance,
				behavior: "smooth"
			});
			else scrollContainer.scrollLeft += scrollDistance;
		}, []);
		const scrollBackward = (0, import_react$10.useCallback)(() => scroll("backward"), [scroll]);
		const scrollForward = (0, import_react$10.useCallback)(() => scroll("forward"), [scroll]);
		return /* @__PURE__ */ import_react$10.default.createElement(Root$1, {
			ref: containerRef,
			className: `tablist ${showScrollButtons ? "tablist-has-scroll" : ""}`
		}, showScrollButtons && /* @__PURE__ */ import_react$10.default.createElement(ScrollButtonContainer, { $showEndBorder: canScrollLeft }, /* @__PURE__ */ import_react$10.default.createElement(ScrollButton, {
			variant: "ghost",
			padding: "small",
			size: "small",
			ariaLabel: "Scroll backward",
			disabled: !canScrollLeft,
			onClick: scrollBackward,
			tabIndex: -1
		}, /* @__PURE__ */ import_react$10.default.createElement(ChevronSmallLeftIcon, null))), /* @__PURE__ */ import_react$10.default.createElement(ScrollContainer, { ref: scrollContainerRef }, /* @__PURE__ */ import_react$10.default.createElement(StyledTabList, rest, children)), showScrollButtons && /* @__PURE__ */ import_react$10.default.createElement(ScrollButtonContainer, { $showStartBorder: canScrollRight }, /* @__PURE__ */ import_react$10.default.createElement(ScrollButton, {
			variant: "ghost",
			padding: "small",
			size: "small",
			ariaLabel: "Scroll forward",
			disabled: !canScrollRight,
			onClick: scrollForward,
			tabIndex: -1
		}, /* @__PURE__ */ import_react$10.default.createElement(ChevronSmallRightIcon, null))));
	};
}));
//#endregion
//#region src/components/components/Tabs/StatelessTabPanel.tsx
var import_react$9, Root, StatelessTabPanel;
var init_StatelessTabPanel = __esmMin((() => {
	import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_Tabs();
	init_emotion();
	init_ScrollArea();
	Root = styled($b4f18e3395fe64d7$export$3d96ec278d3efce4)({
		overflowY: "hidden",
		height: "100%",
		display: "block",
		["&[inert=\"true\"]"]: { display: "none" }
	});
	StatelessTabPanel = ({ children, hasScrollbar = true, name, ...rest }) => {
		return /* @__PURE__ */ import_react$9.default.createElement(Root, {
			...rest,
			shouldForceMount: true,
			id: name
		}, hasScrollbar ? /* @__PURE__ */ import_react$9.default.createElement(ScrollArea, { vertical: true }, children) : children);
	};
}));
//#endregion
//#region src/components/components/Tabs/StatelessTabsView.tsx
var import_react$8, Container, StatelessTabsView;
var init_StatelessTabsView = __esmMin((() => {
	import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_Tabs();
	init_emotion();
	init_Bar();
	init_EmptyTabContent();
	Container = styled($b4f18e3395fe64d7$export$b2539bed5023c21c)(({ $simulatedGap }) => ({
		display: "flex",
		flexDirection: "column",
		height: "100%",
		".tablist": { flex: "1 1 100%" },
		".tablist.tablist-has-scroll": { marginInlineEnd: $simulatedGap },
		"& > :not(:first-child)": { flex: 1 }
	}));
	StatelessTabsView = ({ backgroundColor, barInnerStyle, children, defaultSelected, emptyState, onSelectionChange, selected, showToolsWhenEmpty, tools, ...props }) => {
		const EmptyContent = emptyState ?? /* @__PURE__ */ import_react$8.default.createElement(EmptyTabContent, { title: "Nothing found" });
		const [tabListChild, ...tabPanelChildren] = import_react$8.Children.toArray(children);
		const hasContent = tabPanelChildren && tabPanelChildren.length > 0;
		if (!showToolsWhenEmpty && !hasContent) return EmptyContent;
		return /* @__PURE__ */ import_react$8.default.createElement(Container, {
			...props,
			$simulatedGap: barInnerStyle?.gap ?? 6,
			defaultSelectedKey: defaultSelected,
			onSelectionChange: (k) => onSelectionChange?.(k ? `${k}` : ""),
			selectedKey: selected
		}, /* @__PURE__ */ import_react$8.default.createElement(Bar, {
			scrollable: false,
			border: true,
			backgroundColor,
			innerStyle: {
				display: "flex",
				justifyContent: "space-between",
				paddingInlineStart: 0,
				paddingInlineEnd: 10,
				"> *:not(:last-child)": { order: 2 },
				"> *": { flexShrink: 0 },
				...barInnerStyle,
				gap: 0
			}
		}, tools, hasContent ? tabListChild : /* @__PURE__ */ import_react$8.default.createElement("div", null)), hasContent ? tabPanelChildren : EmptyContent);
	};
}));
//#endregion
//#region src/components/components/Tabs/StatelessTab.tsx
var import_react$7, StyledTab, StatelessTab;
var init_StatelessTab = __esmMin((() => {
	import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_Tabs();
	init_emotion();
	StyledTab = styled($b4f18e3395fe64d7$export$3e41faf802a29e71)(({ theme }) => ({
		whiteSpace: "normal",
		display: "inline-flex",
		overflow: "hidden",
		verticalAlign: "top",
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		textDecoration: "none",
		scrollSnapAlign: "start",
		"&:empty": { display: "none" },
		"&[hidden]": { display: "none" },
		padding: "0 15px",
		transition: "color 0.2s linear, border-bottom-color 0.2s linear",
		height: 40,
		lineHeight: "12px",
		cursor: "pointer",
		background: "transparent",
		border: "0 solid transparent",
		borderTop: "3px solid transparent",
		borderBottom: "3px solid transparent",
		fontWeight: "bold",
		fontSize: 13,
		"&:focus-visible": {
			outline: "0 none",
			boxShadow: `inset 0 0 0 2px ${theme.barSelectedColor}`
		},
		color: theme.barTextColor,
		borderBottomColor: "transparent",
		"&:hover": { color: theme.barHoverColor },
		"&[data-selected]": {
			color: theme.barSelectedColor,
			borderBottomColor: theme.barSelectedColor
		}
	}));
	StatelessTab = ({ name, ...props }) => {
		return /* @__PURE__ */ import_react$7.default.createElement(StyledTab, {
			id: name,
			...props
		});
	};
}));
//#endregion
//#region src/components/brand/StorybookLogo.tsx
var import_react$6, StorybookLogo;
var init_StorybookLogo = __esmMin((() => {
	import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
	StorybookLogo = ({ alt, ...props }) => /* @__PURE__ */ import_react$6.default.createElement("svg", {
		width: "200px",
		height: "40px",
		viewBox: "0 0 200 40",
		...props,
		role: "img"
	}, alt ? /* @__PURE__ */ import_react$6.default.createElement("title", null, alt) : null, /* @__PURE__ */ import_react$6.default.createElement("defs", null, /* @__PURE__ */ import_react$6.default.createElement("path", {
		d: "M1.2 36.9L0 3.9c0-1.1.8-2 1.9-2.1l28-1.8a2 2 0 0 1 2.2 1.9 2 2 0 0 1 0 .1v36a2 2 0 0 1-2 2 2 2 0 0 1-.1 0L3.2 38.8a2 2 0 0 1-2-2z",
		id: "a"
	})), /* @__PURE__ */ import_react$6.default.createElement("g", {
		fill: "none",
		fillRule: "evenodd"
	}, /* @__PURE__ */ import_react$6.default.createElement("path", {
		d: "M53.3 31.7c-1.7 0-3.4-.3-5-.7-1.5-.5-2.8-1.1-3.9-2l1.6-3.5c2.2 1.5 4.6 2.3 7.3 2.3 1.5 0 2.5-.2 3.3-.7.7-.5 1.1-1 1.1-1.9 0-.7-.3-1.3-1-1.7s-2-.8-3.7-1.2c-2-.4-3.6-.9-4.8-1.5-1.1-.5-2-1.2-2.6-2-.5-1-.8-2-.8-3.2 0-1.4.4-2.6 1.2-3.6.7-1.1 1.8-2 3.2-2.6 1.3-.6 2.9-.9 4.7-.9 1.6 0 3.1.3 4.6.7 1.5.5 2.7 1.1 3.5 2l-1.6 3.5c-2-1.5-4.2-2.3-6.5-2.3-1.3 0-2.3.2-3 .8-.8.5-1.2 1.1-1.2 2 0 .5.2 1 .5 1.3.2.3.7.6 1.4.9l2.9.8c2.9.6 5 1.4 6.2 2.4a5 5 0 0 1 2 4.2 6 6 0 0 1-2.5 5c-1.7 1.2-4 1.9-7 1.9zm21-3.6l1.4-.1-.2 3.5-1.9.1c-2.4 0-4.1-.5-5.2-1.5-1.1-1-1.6-2.7-1.6-4.8v-6h-3v-3.6h3V11h4.8v4.6h4v3.6h-4v6c0 1.8.9 2.8 2.6 2.8zm11.1 3.5c-1.6 0-3-.3-4.3-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.3-1 1.7 0 3.2.3 4.4 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.4 1zm0-3.6c2.4 0 3.6-1.6 3.6-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.6-1c-2.3 0-3.5 1.4-3.5 4.4 0 3 1.2 4.6 3.5 4.6zm21.7-8.8l-2.7.3c-1.3.2-2.3.5-2.8 1.2-.6.6-.9 1.4-.9 2.5v8.2H96V15.7h4.6v2.6c.8-1.8 2.5-2.8 5-3h1.3l.3 4zm14-3.5h4.8L116.4 37h-4.9l3-6.6-6.4-14.8h5l4 10 4-10zm16-.4c1.4 0 2.6.3 3.6 1 1 .6 1.9 1.6 2.5 2.8.6 1.2.9 2.7.9 4.3 0 1.6-.3 3-1 4.3a6.9 6.9 0 0 1-2.4 2.9c-1 .7-2.2 1-3.6 1-1 0-2-.2-3-.7-.8-.4-1.5-1-2-1.9v2.4h-4.7V8.8h4.8v9c.5-.8 1.2-1.4 2-1.9.9-.4 1.8-.6 3-.6zM135.7 28c1.1 0 2-.4 2.6-1.2.6-.8 1-2 1-3.4 0-1.5-.4-2.5-1-3.3s-1.5-1.1-2.6-1.1-2 .3-2.6 1.1c-.6.8-1 2-1 3.3 0 1.5.4 2.6 1 3.4.6.8 1.5 1.2 2.6 1.2zm18.9 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.3 1a7 7 0 0 1 3 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm18 3.6c-1.7 0-3.2-.3-4.4-1a7 7 0 0 1-3-2.8c-.6-1.3-1-2.7-1-4.4 0-1.6.4-3 1-4.3a7 7 0 0 1 3-2.8c1.2-.7 2.7-1 4.4-1 1.6 0 3 .3 4.4 1a7 7 0 0 1 2.9 2.8c.6 1.2 1 2.7 1 4.3 0 1.7-.4 3.1-1 4.4a7 7 0 0 1-3 2.8c-1.2.7-2.7 1-4.3 1zm0-3.6c2.3 0 3.5-1.6 3.5-4.6 0-1.5-.3-2.6-1-3.4a3.2 3.2 0 0 0-2.5-1c-2.4 0-3.6 1.4-3.6 4.4 0 3 1.2 4.6 3.6 4.6zm27.4 3.4h-6l-6-7v7h-4.8V8.8h4.9v13.6l5.8-6.7h5.7l-6.6 7.5 7 8.2z",
		fill: "currentColor"
	}), /* @__PURE__ */ import_react$6.default.createElement("mask", {
		id: "b",
		fill: "#fff"
	}, /* @__PURE__ */ import_react$6.default.createElement("use", { xlinkHref: "#a" })), /* @__PURE__ */ import_react$6.default.createElement("use", {
		fill: "#FF4785",
		fillRule: "nonzero",
		xlinkHref: "#a"
	}), /* @__PURE__ */ import_react$6.default.createElement("path", {
		d: "M23.7 5L24 .2l3.9-.3.1 4.8a.3.3 0 0 1-.5.2L26 3.8l-1.7 1.4a.3.3 0 0 1-.5-.3zm-5 10c0 .9 5.3.5 6 0 0-5.4-2.8-8.2-8-8.2-5.3 0-8.2 2.8-8.2 7.1 0 7.4 10 7.6 10 11.6 0 1.2-.5 1.9-1.8 1.9-1.6 0-2.2-.9-2.1-3.6 0-.6-6.1-.8-6.3 0-.5 6.7 3.7 8.6 8.5 8.6 4.6 0 8.3-2.5 8.3-7 0-7.9-10.2-7.7-10.2-11.6 0-1.6 1.2-1.8 2-1.8.6 0 2 0 1.9 3z",
		fill: "#FFF",
		fillRule: "nonzero",
		mask: "url(#b)"
	})));
}));
//#endregion
//#region src/components/brand/StorybookIcon.tsx
var import_react$5, StorybookIcon;
var init_StorybookIcon = __esmMin((() => {
	import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
	StorybookIcon = (props) => /* @__PURE__ */ import_react$5.default.createElement("svg", {
		viewBox: "0 0 64 64",
		...props
	}, /* @__PURE__ */ import_react$5.default.createElement("title", null, "Storybook icon"), /* @__PURE__ */ import_react$5.default.createElement("g", {
		id: "Artboard",
		stroke: "none",
		strokeWidth: "1",
		fill: "none",
		fillRule: "evenodd"
	}, /* @__PURE__ */ import_react$5.default.createElement("path", {
		d: "M8.04798541,58.7875918 L6.07908839,6.32540407 C6.01406344,4.5927838 7.34257463,3.12440831 9.07303814,3.01625434 L53.6958037,0.227331489 C55.457209,0.117243658 56.974354,1.45590096 57.0844418,3.21730626 C57.0885895,3.28366922 57.0906648,3.35014546 57.0906648,3.41663791 L57.0906648,60.5834697 C57.0906648,62.3483119 55.6599776,63.7789992 53.8951354,63.7789992 C53.847325,63.7789992 53.7995207,63.7779262 53.7517585,63.775781 L11.0978899,61.8600599 C9.43669044,61.7854501 8.11034889,60.4492961 8.04798541,58.7875918 Z",
		id: "path-1",
		fill: "#FF4785",
		fillRule: "nonzero"
	}), /* @__PURE__ */ import_react$5.default.createElement("path", {
		d: "M35.9095005,24.1768792 C35.9095005,25.420127 44.2838488,24.8242707 45.4080313,23.9509748 C45.4080313,15.4847538 40.8652557,11.0358878 32.5466666,11.0358878 C24.2280775,11.0358878 19.5673077,15.553972 19.5673077,22.3311017 C19.5673077,34.1346028 35.4965208,34.3605071 35.4965208,40.7987804 C35.4965208,42.606015 34.6115646,43.6790606 32.6646607,43.6790606 C30.127786,43.6790606 29.1248356,42.3834613 29.2428298,37.9783269 C29.2428298,37.0226907 19.5673077,36.7247626 19.2723223,37.9783269 C18.5211693,48.6535354 25.1720308,51.7326752 32.7826549,51.7326752 C40.1572906,51.7326752 45.939005,47.8018145 45.939005,40.6858282 C45.939005,28.035186 29.7738035,28.3740425 29.7738035,22.1051974 C29.7738035,19.5637737 31.6617103,19.2249173 32.7826549,19.2249173 C33.9625966,19.2249173 36.0864917,19.4328883 35.9095005,24.1768792 Z",
		id: "path9_fill-path",
		fill: "#FFFFFF",
		fillRule: "nonzero"
	}), /* @__PURE__ */ import_react$5.default.createElement("path", {
		d: "M44.0461638,0.830433986 L50.1874092,0.446606143 L50.443532,7.7810017 C50.4527198,8.04410717 50.2468789,8.26484453 49.9837734,8.27403237 C49.871115,8.27796649 49.7607078,8.24184808 49.6721567,8.17209069 L47.3089847,6.3104681 L44.5110468,8.43287463 C44.3012992,8.591981 44.0022839,8.55092814 43.8431776,8.34118051 C43.7762017,8.25288717 43.742082,8.14401677 43.7466857,8.03329059 L44.0461638,0.830433986 Z",
		id: "Path",
		fill: "#FFFFFF"
	})));
}));
//#endregion
//#region src/components/components/shared/animation.ts
var rotate360;
var init_animation = __esmMin((() => {
	init_emotion();
	rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
}));
//#endregion
//#region src/components/components/Loader/Loader.tsx
var import_react$4, LoaderWrapper, ProgressWrapper, ProgressTrack, ProgressBar, ProgressMessage, ErrorIcon, ellipsis, Ellipsis, Loader;
var init_Loader = __esmMin((() => {
	import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$2();
	init_polished_esm();
	init_emotion();
	init_animation();
	LoaderWrapper = styled.div(({ size = 32 }) => ({
		borderRadius: "50%",
		cursor: "progress",
		display: "inline-block",
		overflow: "hidden",
		position: "absolute",
		transition: "all 200ms ease-out",
		verticalAlign: "top",
		top: "50%",
		left: "50%",
		marginTop: -(size / 2),
		marginLeft: -(size / 2),
		height: size,
		width: size,
		zIndex: 4,
		borderWidth: 2,
		borderStyle: "solid",
		borderColor: "rgba(97, 97, 97, 0.29)",
		borderTopColor: "rgb(100,100,100)",
		animation: `${rotate360} 0.7s linear infinite`,
		mixBlendMode: "difference"
	}));
	ProgressWrapper = styled.div({
		position: "absolute",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%"
	});
	ProgressTrack = styled.div(({ theme }) => ({
		position: "relative",
		width: "80%",
		marginBottom: "0.75rem",
		maxWidth: 300,
		height: 5,
		borderRadius: 5,
		background: curriedTransparentize$1(.8, theme.color.secondary),
		overflow: "hidden",
		cursor: "progress"
	}));
	ProgressBar = styled.div(({ theme }) => ({
		position: "absolute",
		top: 0,
		left: 0,
		height: "100%",
		background: theme.color.secondary
	}));
	ProgressMessage = styled.div(({ theme }) => ({
		minHeight: "2em",
		fontSize: `${theme.typography.size.s1}px`,
		color: theme.textMutedColor
	}));
	ErrorIcon = styled(LightningOffIcon)(({ theme }) => ({
		width: 20,
		height: 20,
		marginBottom: "0.5rem",
		color: theme.textMutedColor
	}));
	ellipsis = keyframes`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`;
	Ellipsis = styled.span({ "&::after": {
		content: "'...'",
		animation: `${ellipsis} 1s linear infinite`,
		animationDelay: "1s",
		display: "inline-block",
		width: "1em",
		height: "auto"
	} });
	Loader = ({ progress, error, size, ...props }) => {
		if (error) return /* @__PURE__ */ import_react$4.default.createElement(ProgressWrapper, {
			"aria-label": error.toString(),
			"aria-live": "polite",
			role: "status",
			...props
		}, /* @__PURE__ */ import_react$4.default.createElement(ErrorIcon, null), /* @__PURE__ */ import_react$4.default.createElement(ProgressMessage, null, error.message));
		if (progress) {
			const { value, modules } = progress;
			let { message } = progress;
			if (modules) message += ` ${modules.complete} / ${modules.total} modules`;
			return /* @__PURE__ */ import_react$4.default.createElement(ProgressWrapper, {
				"aria-label": "Content is loading...",
				"aria-live": "polite",
				"aria-valuemin": 0,
				"aria-valuemax": 100,
				"aria-valuenow": value * 100,
				"aria-valuetext": message,
				role: "progressbar",
				...props
			}, /* @__PURE__ */ import_react$4.default.createElement(ProgressTrack, null, /* @__PURE__ */ import_react$4.default.createElement(ProgressBar, { style: { width: `${value * 100}%` } })), /* @__PURE__ */ import_react$4.default.createElement(ProgressMessage, null, message, value < 1 && /* @__PURE__ */ import_react$4.default.createElement(Ellipsis, { key: message })));
		}
		return /* @__PURE__ */ import_react$4.default.createElement(LoaderWrapper, {
			"aria-label": "Content is loading...",
			"aria-live": "polite",
			role: "status",
			size,
			...props
		});
	};
}));
//#endregion
//#region src/components/components/ProgressSpinner/ProgressSpinner.tsx
var import_react$3, XMLNS, rotate, Wrapper$1, Circle, ProgressSpinner;
var init_ProgressSpinner = __esmMin((() => {
	import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	XMLNS = "http://www.w3.org/2000/svg";
	rotate = keyframes({
		"0%": { transform: "rotate(0deg)" },
		"100%": { transform: "rotate(360deg)" }
	});
	Wrapper$1 = styled.div(({ size }) => ({
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		position: "relative",
		minWidth: size,
		minHeight: size
	}));
	Circle = styled.svg(({ size, width }) => ({
		position: "absolute",
		width: `${size}px!important`,
		height: `${size}px!important`,
		transform: "rotate(-90deg)",
		circle: {
			r: (size - Math.ceil(width)) / 2,
			cx: size / 2,
			cy: size / 2,
			opacity: .15,
			fill: "transparent",
			stroke: "currentColor",
			strokeWidth: width,
			strokeLinecap: "round",
			strokeDasharray: Math.PI * (size - Math.ceil(width))
		}
	}), ({ progress }) => progress && { circle: { opacity: .75 } }, ({ spinner }) => spinner && {
		animation: `${rotate} 1s linear infinite`,
		circle: { opacity: .25 }
	});
	ProgressSpinner = ({ percentage = void 0, running = true, size = 24, width = 1.5, children = null, ...props }) => typeof percentage === "number" ? /* @__PURE__ */ import_react$3.default.createElement(Wrapper$1, {
		size,
		...props
	}, children, /* @__PURE__ */ import_react$3.default.createElement(Circle, {
		size,
		width,
		xmlns: XMLNS
	}, /* @__PURE__ */ import_react$3.default.createElement("circle", null)), running && /* @__PURE__ */ import_react$3.default.createElement(Circle, {
		size,
		width,
		xmlns: XMLNS,
		spinner: true
	}, /* @__PURE__ */ import_react$3.default.createElement("circle", { strokeDashoffset: Math.PI * (size - Math.ceil(width)) * (1 - percentage / 100) })), /* @__PURE__ */ import_react$3.default.createElement(Circle, {
		size,
		width,
		xmlns: XMLNS,
		progress: true
	}, /* @__PURE__ */ import_react$3.default.createElement("circle", { strokeDashoffset: Math.PI * (size - Math.ceil(width)) * (1 - percentage / 100) }))) : /* @__PURE__ */ import_react$3.default.createElement(Wrapper$1, {
		size,
		...props
	}, children);
}));
//#endregion
//#region src/components/components/utils/getStoryHref.ts
function parseQuery(queryString) {
	const query = {};
	const pairs = queryString.split("&");
	for (let i = 0; i < pairs.length; i++) {
		const pair = pairs[i].split("=");
		query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
	}
	return query;
}
var getStoryHref;
var init_getStoryHref = __esmMin((() => {
	init_client_logger();
	getStoryHref = (baseUrl, storyId, additionalParams = {}) => {
		deprecate("getStoryHref is deprecated and will be removed in Storybook 11, use the api.getStoryHrefs method instead");
		const [url, paramsStr] = baseUrl.split("?");
		const params = paramsStr ? {
			...parseQuery(paramsStr),
			...additionalParams,
			id: storyId
		} : {
			...additionalParams,
			id: storyId
		};
		return `${url}?${Object.entries(params).map((item) => `${item[0]}=${item[1]}`).join("&")}`;
	};
}));
//#endregion
//#region src/components/components/clipboard/ClipboardCode.tsx
var import_react$2, Code$1, ClipboardCode;
var init_ClipboardCode = __esmMin((() => {
	import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_emotion();
	Code$1 = styled.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${color.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${typography.fonts.mono};
  font-size: ${typography.size.s2 - 1}px;
`;
	ClipboardCode = ({ code, ...props }) => /* @__PURE__ */ import_react$2.default.createElement(Code$1, {
		id: "clipboard-code",
		...props
	}, code);
}));
//#endregion
//#region src/components/index.ts
var components_exports = /* @__PURE__ */ __exportAll({
	A: () => A$1,
	AbstractToolbar: () => AbstractToolbar,
	ActionBar: () => ActionBar,
	ActionList: () => ActionList,
	AddonPanel: () => AddonPanel,
	Badge: () => Badge,
	Bar: () => Bar,
	Blockquote: () => Blockquote,
	Button: () => Button,
	Card: () => Card,
	ClipboardCode: () => ClipboardCode,
	Code: () => Code$2,
	Collapsible: () => Collapsible,
	DL: () => DL,
	Div: () => Div$1,
	DocumentWrapper: () => DocumentWrapper,
	EmptyTabContent: () => EmptyTabContent,
	ErrorFormatter: () => ErrorFormatter,
	Form: () => Form,
	H1: () => H1,
	H2: () => H2,
	H3: () => H3,
	H4: () => H4,
	H5: () => H5,
	H6: () => H6,
	HR: () => HR,
	Img: () => Img,
	LI: () => LI,
	Link: () => Link,
	Loader: () => Loader,
	Modal: () => Modal,
	ModalDecorator: () => ModalDecorator,
	OL: () => OL,
	P: () => P,
	Placeholder: () => Placeholder,
	Popover: () => Popover,
	PopoverProvider: () => PopoverProvider,
	Pre: () => Pre$1,
	ProgressSpinner: () => ProgressSpinner,
	ResetWrapper: () => ResetWrapper,
	ScrollArea: () => ScrollArea,
	Select: () => Select,
	Separator: () => Separator,
	Spaced: () => Spaced,
	Span: () => Span,
	StatelessTab: () => StatelessTab,
	StatelessTabList: () => StatelessTabList,
	StatelessTabPanel: () => StatelessTabPanel,
	StatelessTabsView: () => StatelessTabsView,
	StorybookIcon: () => StorybookIcon,
	StorybookLogo: () => StorybookLogo,
	SyntaxHighlighter: () => SyntaxHighlighter$1,
	TT: () => TT,
	TabList: () => TabList,
	TabPanel: () => TabPanel,
	Table: () => Table,
	TabsView: () => TabsView,
	ToggleButton: () => ToggleButton,
	Toolbar: () => Toolbar,
	Tooltip: () => Tooltip,
	TooltipNote: () => TooltipNote,
	TooltipProvider: () => TooltipProvider,
	UL: () => UL,
	Zoom: () => Zoom,
	codeCommon: () => codeCommon,
	components: () => components,
	convertToReactAriaPlacement: () => convertToReactAriaPlacement,
	createCopyToClipboardFunction: () => createCopyToClipboardFunction,
	getStoryHref: () => getStoryHref,
	interleaveSeparators: () => interleaveSeparators,
	nameSpaceClassNames: () => nameSpaceClassNames,
	resetComponents: () => resetComponents,
	useCopyButton: () => useCopyButton,
	useTabsState: () => useTabsState,
	withReset: () => withReset
});
var import_react$1, components, resetComponents;
var init_components = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_components$1();
	init_A();
	init_Blockquote();
	init_Code();
	init_Div();
	init_DL();
	init_H1();
	init_H2();
	init_H3();
	init_H4();
	init_H5();
	init_H6();
	init_HR();
	init_Img();
	init_LI();
	init_OL();
	init_P();
	init_Pre();
	init_Span();
	init_Table();
	init_TT();
	init_UL();
	init_Badge();
	init_link();
	init_DocumentWrapper();
	init_lazy_syntaxhighlighter();
	init_clipboard();
	init_ActionBar();
	init_ActionList();
	init_Collapsible();
	init_Card();
	init_Modal();
	init_Spaced();
	init_placeholder();
	init_ScrollArea();
	init_Zoom();
	init_ErrorFormatter();
	init_Button();
	init_ToggleButton();
	init_Select();
	init_Form();
	init_overlayHelpers();
	init_Popover();
	init_PopoverProvider();
	init_Tooltip();
	init_TooltipNote();
	init_TooltipProvider();
	init_Separator();
	init_Bar();
	init_EmptyTabContent();
	init_addon_panel();
	init_Toolbar();
	init_TabList();
	init_TabPanel();
	init_TabsView();
	init_StatelessTabList();
	init_StatelessTabPanel();
	init_StatelessTabsView();
	init_StatelessTab();
	init_StorybookLogo();
	init_StorybookIcon();
	init_Loader();
	init_ProgressSpinner();
	init_getStoryHref();
	init_DocumentFormatting();
	init_ResetWrapper();
	init_common();
	init_ClipboardCode();
	init_useCopyButton();
	components = components$1;
	resetComponents = {};
	Object.keys(components$1).forEach((key) => {
		resetComponents[key] = (0, import_react$1.forwardRef)((props, ref) => (0, import_react$1.createElement)(key, {
			...props,
			ref
		}));
	});
}));
//#endregion
//#region src/components/components/syntaxhighlighter/formatter.ts
var formatter_exports = /* @__PURE__ */ __exportAll({ formatter: () => formatter });
var import_memoizerific$1, formatter;
var init_formatter = __esmMin((() => {
	import_memoizerific$1 = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	init_esm();
	formatter = (0, import_memoizerific$1.default)(2)(async (type, source) => {
		if (type === false) return source;
		return dedent(source);
	});
}));
//#endregion
//#region src/components/components/syntaxhighlighter/syntaxhighlighter.tsx
var syntaxhighlighter_exports = /* @__PURE__ */ __exportAll({
	SyntaxHighlighter: () => SyntaxHighlighter,
	default: () => SyntaxHighlighter,
	supportedLanguages: () => supportedLanguages
});
var import_react, import_memoizerific, ReactSyntaxHighlighter, supportedLanguages, themedSyntax, Wrapper, UnstyledScroller, Scroller, Pre, Code, processLineNumber, defaultRenderer, wrapRenderer, SyntaxHighlighter;
var init_syntaxhighlighter = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	import_memoizerific = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	init_create_element();
	init_bash();
	init_css();
	init_graphql();
	init_js_extras();
	init_json();
	init_jsx();
	init_markdown();
	init_markup();
	init_tsx();
	init_typescript();
	init_yaml();
	init_prism_light();
	init_emotion();
	init_ActionBar();
	init_ScrollArea();
	init_useCopyButton();
	ReactSyntaxHighlighter = SyntaxHighlighter$2;
	supportedLanguages = {
		jsextra: js_extras_default,
		jsx: jsx_default,
		json: json_default,
		yml: yaml_default,
		md: markdown_default,
		bash: bash_default,
		css: css_default,
		html: markup_default,
		tsx: tsx_default,
		typescript: typescript_default,
		graphql: graphql_default
	};
	Object.entries(supportedLanguages).forEach(([key, val]) => {
		ReactSyntaxHighlighter.registerLanguage(key, val);
	});
	themedSyntax = (0, import_memoizerific.default)(2)((theme) => Object.entries(theme.code || {}).reduce((acc, [key, val]) => ({
		...acc,
		[`* .${key}`]: val
	}), {}));
	Wrapper = styled.div(({ theme }) => ({
		position: "relative",
		display: "flex",
		flexWrap: "wrap",
		overflow: "hidden",
		color: theme.color.defaultText,
		colorScheme: theme.base
	}), ({ theme, bordered }) => bordered ? {
		border: `1px solid ${theme.appBorderColor}`,
		borderRadius: theme.borderRadius,
		background: theme.background.content
	} : {}, ({ showLineNumbers }) => showLineNumbers ? { ".react-syntax-highlighter-line-number::before": { content: "attr(data-line-number)" } } : {});
	UnstyledScroller = ({ children, className }) => /* @__PURE__ */ import_react.default.createElement(ScrollArea, {
		horizontal: true,
		vertical: true,
		focusable: true,
		className
	}, children);
	Scroller = styled(UnstyledScroller)({
		flex: 1,
		flexShrink: 0,
		flexBasis: "fit-content",
		maxWidth: "100%"
	}, ({ theme }) => themedSyntax(theme));
	Pre = styled.pre(({ theme, padded }) => ({
		display: "flex",
		justifyContent: "flex-start",
		margin: 0,
		padding: padded ? theme.layoutMargin : 0
	}));
	Code = styled.div(({ theme }) => ({
		flex: 1,
		paddingLeft: 2,
		paddingRight: theme.layoutMargin,
		opacity: 1,
		fontFamily: theme.typography.fonts.mono
	}));
	processLineNumber = (row) => {
		const children = [...row.children];
		const lineNumberNode = children[0];
		const lineNumber = lineNumberNode.children[0].value;
		children[0] = {
			...lineNumberNode,
			children: [],
			properties: {
				...lineNumberNode.properties,
				"data-line-number": lineNumber,
				style: {
					...lineNumberNode.properties.style,
					userSelect: "auto"
				}
			}
		};
		return {
			...row,
			children
		};
	};
	defaultRenderer = ({ rows, stylesheet, useInlineStyles }) => {
		return rows.map((node, i) => {
			return createElement$1({
				node: processLineNumber(node),
				stylesheet,
				useInlineStyles,
				key: `code-segement${i}`
			});
		});
	};
	wrapRenderer = (renderer, showLineNumbers) => {
		if (!showLineNumbers) return renderer;
		if (renderer) return ({ rows, ...rest }) => renderer({
			rows: rows.map((row) => processLineNumber(row)),
			...rest
		});
		return defaultRenderer;
	};
	SyntaxHighlighter = ({ children, language = "jsx", copyable = false, bordered = false, padded = false, format = true, formatter = void 0, className = void 0, showLineNumbers = false, ...rest }) => {
		if (typeof children !== "string" || !children.trim()) return null;
		const [highlightableCode, setHighlightableCode] = (0, import_react.useState)("");
		(0, import_react.useEffect)(() => {
			if (formatter) formatter(format, children).then(setHighlightableCode);
			else setHighlightableCode(children.trim());
		}, [
			children,
			format,
			formatter
		]);
		const { children: copyChildren, buttonProps: copyButtonProps } = useCopyButton({ content: highlightableCode });
		const renderer = wrapRenderer(rest.renderer, showLineNumbers);
		return /* @__PURE__ */ import_react.default.createElement(Wrapper, {
			bordered,
			padded,
			showLineNumbers,
			className
		}, /* @__PURE__ */ import_react.default.createElement(Scroller, null, /* @__PURE__ */ import_react.default.createElement(ReactSyntaxHighlighter, {
			padded: padded || bordered,
			language,
			showLineNumbers,
			showInlineLineNumbers: showLineNumbers,
			useInlineStyles: false,
			PreTag: Pre,
			CodeTag: Code,
			lineNumberContainerStyle: {},
			...rest,
			renderer
		}, highlightableCode)), copyable ? /* @__PURE__ */ import_react.default.createElement(ActionBar, {
			actionItems: [{
				title: copyChildren,
				onClick: copyButtonProps.onClick
			}],
			flexLayout: true
		}) : null);
	};
	SyntaxHighlighter.registerLanguage = (...args) => ReactSyntaxHighlighter.registerLanguage(...args);
}));
//#endregion
export { once as $, SET_WHATS_NEW_CACHE as A, STORY_MISSING as B, SELECT_STORY as C, SET_GLOBALS as D, SET_FILTER as E, STORIES_COLLAPSE_ALL as F, UPDATE_GLOBALS as G, STORY_SPECIFIED as H, STORIES_EXPAND_ALL as I, core_events_exports as J, UPDATE_QUERY_PARAMS as K, STORY_ARGS_UPDATED as L, SHARED_STATE_SET as M, SIDEBAR_FILTER_CHANGED as N, SET_INDEX as O, SIDEBAR_OPEN_CONTEXT_MENU as P, logger as Q, STORY_CHANGED as R, RESULT_WHATS_NEW_DATA as S, SET_CURRENT_STORY as T, TELEMETRY_ERROR as U, STORY_PREPARED as V, TOGGLE_WHATS_NEW_NOTIFICATIONS as W, client_logger_exports as X, init_core_events as Y, init_client_logger as Z, OPEN_IN_EDITOR_RESPONSE as _, channels_exports as a, REQUEST_WHATS_NEW_DATA as b, init_channel_slot as c, CURRENT_STORY_WAS_SET as d, Channel as et, DOCS_PREPARED as f, OPEN_IN_EDITOR_REQUEST as g, NAVIGATE_URL as h, mockChannel as i, SHARED_STATE_CHANGED as j, SET_STORIES as k, setChannel as l, GLOBALS_UPDATED as m, init_components as n, init_channels as o, FORCE_REMOUNT as p, UPDATE_STORY_ARGS as q, init_mock_channel as r, getChannel as s, components_exports as t, init_main as tt, CONFIG_ERROR as u, PRELOAD_ENTRIES as v, SET_CONFIG as w, RESET_STORY_ARGS as x, PREVIEW_KEYDOWN as y, STORY_INDEX_INVALIDATED as z };
