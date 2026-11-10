import { a as __toESM, n as __esmMin, r as __exportAll } from "./globals-runtime-XrdeG17s.js";
import { ht as init_esm, mt as dedent } from "./globals-runtime-CzGMgLxl.js";
import { $ as once, Q as logger, Y as init_core_events, Z as init_client_logger, c as init_channel_slot, et as Channel, h as NAVIGATE_URL, o as init_channels, s as getChannel } from "./globals-runtime-C5yCOOyb.js";
import { At as init_dist, B as j, Dt as init_emotion_cache_browser_esm, Et as createCache, F as g, H as o, I as init_deepsignal_core_module, L as l, R as g$1, St as ThemeProvider, Tt as withTheme, U as y, V as n, _t as css, bt as keyframes, c as init_import, dt as init_emotion_styled_browser_esm, ft as styled, gt as Global, ht as ClassNames, jt as scope, mt as isPropValid, nt as init_mjs, pt as init_emotion_is_prop_valid_esm, rt as deletedDiff, vt as init_emotion_react_browser_esm, wt as useTheme, xt as CacheProvider, yt as jsx, z as init_signals_core_module } from "./globals-runtime-C8r9nrt8.js";
import { $ as MemoryRouter$1, Q as init_dist$1, X as BrowserRouter, Z as Link$1, ct as require_react, et as Router, nt as useLocation, rt as useNavigate$1 } from "./globals-runtime-DpF3al7J.js";
import { v as $a46cf152bb926da5$export$a9b970dcc4ae71a9, y as $a46cf152bb926da5$export$d10ae4f68404609a } from "./globals-runtime-DeFA2RfN.js";
import { C as init_predicate, D as isPlainObject$2, O as require_memoizerific, T as isEqual, d as nanoid, u as init_index_browser } from "./globals-runtime-DfPn-YQU.js";
import { a as parse, c as curriedOpacify$1, d as rgba, o as curriedDarken$1, r as stringify, s as curriedLighten$1, t as init_main$1, u as init_polished_esm } from "./globals-runtime-Ci5x8rlg.js";
import { _ as unknown, a as init_dist$3, c as minValue, d as optional, f as pipe, g as string, h as safeParse, i as custom, l as number, m as safeInteger, n as array, o as literal, p as record, r as check, s as minLength, u as object, v as variant } from "./globals-runtime-C9CoMQvm.js";
import { _ as init_preview_errors, d as OpenServiceStaticSnapshotInvalidError, f as OpenServiceStaticSnapshotLoadError, g as StatusTypeIdMismatchError$2, l as addons, m as init_manager_errors, p as StatusTypeIdMismatchError$1, r as init_manager_api } from "../globals-runtime.js";
//#region src/shared/universal-store/first-party-store-ids.ts
var FIRST_PARTY_STORE_IDS, isFirstPartyStoreId;
var init_first_party_store_ids = __esmMin((() => {
	FIRST_PARTY_STORE_IDS = /* @__PURE__ */ new Set([
		"storybook/status",
		"storybook/test-provider",
		"storybook/checklist",
		"storybook/test"
	]);
	isFirstPartyStoreId = (id) => FIRST_PARTY_STORE_IDS.has(id);
}));
//#endregion
//#region src/shared/universal-store/instances.ts
var instances;
var init_instances = __esmMin((() => {
	instances = /* @__PURE__ */ new Map();
}));
//#endregion
//#region src/shared/universal-store/index.ts
var CHANNEL_EVENT_PREFIX, ProgressState, UniversalStore;
var init_universal_store = __esmMin((() => {
	init_esm();
	init_first_party_store_ids();
	init_instances();
	CHANNEL_EVENT_PREFIX = "UNIVERSAL_STORE:";
	ProgressState = {
		PENDING: "PENDING",
		RESOLVED: "RESOLVED",
		REJECTED: "REJECTED"
	};
	UniversalStore = class UniversalStore {
		static {
			this.ActorType = {
				LEADER: "LEADER",
				FOLLOWER: "FOLLOWER"
			};
		}
		static {
			this.Environment = {
				SERVER: "SERVER",
				MANAGER: "MANAGER",
				PREVIEW: "PREVIEW",
				UNKNOWN: "UNKNOWN",
				MOCK: "MOCK"
			};
		}
		/** The environment this realm was prepared as, or `undefined` before `__prepare`. */
		static get preparedEnvironment() {
			return UniversalStore.preparation.environment;
		}
		static {
			this.InternalEventType = {
				EXISTING_STATE_REQUEST: "__EXISTING_STATE_REQUEST",
				EXISTING_STATE_RESPONSE: "__EXISTING_STATE_RESPONSE",
				SET_STATE: "__SET_STATE",
				LEADER_CREATED: "__LEADER_CREATED",
				FOLLOWER_CREATED: "__FOLLOWER_CREATED"
			};
		}
		static {
			this.Status = {
				UNPREPARED: "UNPREPARED",
				SYNCING: "SYNCING",
				READY: "READY",
				ERROR: "ERROR"
			};
		}
		static {
			this.isInternalConstructing = false;
		}
		static {
			UniversalStore.setupPreparationPromise();
		}
		static setupPreparationPromise() {
			let resolveRef;
			let rejectRef;
			const promise = new Promise((resolve, reject) => {
				resolveRef = (args) => {
					resolve(args);
				};
				rejectRef = (...args) => {
					reject(args);
				};
			});
			UniversalStore.preparation = {
				resolve: resolveRef,
				reject: rejectRef,
				promise
			};
		}
		/** The actor object representing the store instance with a unique ID and a type */
		get actor() {
			return Object.freeze({
				id: this.actorId,
				type: this.actorType,
				environment: this.environment ?? UniversalStore.Environment.UNKNOWN
			});
		}
		/**
		* The current state of the store, that signals both if the store is prepared by Storybook and
		* also - in the case of a follower - if the state has been synced with the leader's state.
		*/
		get status() {
			if (!this.channel || !this.environment) return UniversalStore.Status.UNPREPARED;
			switch (this.syncing?.state) {
				case ProgressState.PENDING:
				case void 0: return UniversalStore.Status.SYNCING;
				case ProgressState.REJECTED: return UniversalStore.Status.ERROR;
				case ProgressState.RESOLVED:
				default: return UniversalStore.Status.READY;
			}
		}
		/**
		* A promise that resolves when the store is fully ready. A leader will be ready when the store
		* has been prepared by Storybook, which is almost instantly.
		*
		* A follower will be ready when the state has been synced with the leader's state. It waits for
		* as long as that takes.
		*/
		untilReady() {
			const preparation = this.channel && this.environment ? Promise.resolve() : UniversalStore.preparation.promise;
			return Promise.all([preparation, this.syncing?.promise]);
		}
		constructor(options, environmentOverrides) {
			this.debugging = false;
			this.listeners = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set()]]);
			this.getState = () => {
				this.debug("getState", { state: this.state });
				return this.state;
			};
			this.subscribe = (eventTypeOrListener, maybeListener) => {
				const subscribesToAllEvents = typeof eventTypeOrListener === "function";
				const eventType = subscribesToAllEvents ? "*" : eventTypeOrListener;
				const listener = subscribesToAllEvents ? eventTypeOrListener : maybeListener;
				this.debug("subscribe", {
					eventType,
					listener
				});
				if (!listener) throw new TypeError(`Missing first subscribe argument, or second if first is the event type, when subscribing to a UniversalStore with id '${this.id}'`);
				if (!this.listeners.has(eventType)) this.listeners.set(eventType, /* @__PURE__ */ new Set());
				this.listeners.get(eventType).add(listener);
				return () => {
					this.debug("unsubscribe", {
						eventType,
						listener
					});
					if (!this.listeners.has(eventType)) return;
					this.listeners.get(eventType).delete(listener);
					if (this.listeners.get(eventType)?.size === 0) this.listeners.delete(eventType);
				};
			};
			this.send = (event) => {
				this.debug("send", { event });
				if (this.status !== UniversalStore.Status.READY) throw new TypeError(dedent`Cannot send event before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify({
					event,
					id: this.id,
					actor: this.actor,
					environment: this.environment
				}, null, 2)}`);
				this.emitToListeners(event, { actor: this.actor });
				this.emitToChannel(event, { actor: this.actor });
			};
			this.debugging = options.debug ?? false;
			if (!UniversalStore.isInternalConstructing) throw new TypeError("UniversalStore is not constructable - use UniversalStore.create() instead");
			UniversalStore.isInternalConstructing = false;
			this.id = options.id;
			this.actorId = Date.now().toString(36) + Math.random().toString(36).substring(2);
			this.actorType = options.leader ? UniversalStore.ActorType.LEADER : UniversalStore.ActorType.FOLLOWER;
			this.state = options.initialState;
			this.channelEventName = `${CHANNEL_EVENT_PREFIX}${this.id}`;
			this.debug("constructor", {
				options,
				environmentOverrides,
				channelEventName: this.channelEventName
			});
			if (this.actor.type === UniversalStore.ActorType.LEADER) this.syncing = {
				state: ProgressState.RESOLVED,
				promise: Promise.resolve()
			};
			else {
				let syncingResolve;
				const syncingPromise = new Promise((resolve) => {
					syncingResolve = () => {
						if (this.syncing.state !== ProgressState.PENDING) return;
						this.syncing.state = ProgressState.RESOLVED;
						resolve();
					};
				});
				this.syncing = {
					state: ProgressState.PENDING,
					promise: syncingPromise,
					resolve: syncingResolve
				};
			}
			this.getState = this.getState.bind(this);
			this.setState = this.setState.bind(this);
			this.subscribe = this.subscribe.bind(this);
			this.onStateChange = this.onStateChange.bind(this);
			this.send = this.send.bind(this);
			this.emitToChannel = this.emitToChannel.bind(this);
			this.prepareThis = this.prepareThis.bind(this);
			this.emitToListeners = this.emitToListeners.bind(this);
			this.handleChannelEvents = this.handleChannelEvents.bind(this);
			this.debug = this.debug.bind(this);
			this.channel = environmentOverrides?.channel ?? UniversalStore.preparation.channel;
			this.environment = environmentOverrides?.environment ?? UniversalStore.preparation.environment;
			if (this.channel && this.environment) {
				if (!environmentOverrides) UniversalStore.preparation.resolve({
					channel: this.channel,
					environment: this.environment
				});
				this.prepareThis({
					channel: this.channel,
					environment: this.environment
				});
			} else UniversalStore.preparation.promise.then(this.prepareThis);
		}
		/** Creates a new instance of UniversalStore */
		static create(options) {
			if (!options || typeof options?.id !== "string") throw new TypeError("id is required and must be a string, when creating a UniversalStore");
			if (!isFirstPartyStoreId(options.id)) throw new TypeError(`UniversalStore is internal to Storybook and cannot create a store with id "${options.id}"`);
			if (options.debug) console.debug(dedent`[UniversalStore]
        create`, { options });
			const existing = instances.get(options.id);
			if (existing) {
				console.warn(dedent`UniversalStore with id "${options.id}" already exists in this environment, re-using existing.
        You should reuse the existing instance instead of trying to create a new one.`);
				return existing;
			}
			UniversalStore.isInternalConstructing = true;
			const store = new UniversalStore(options);
			instances.set(options.id, store);
			return store;
		}
		/**
		* Used by Storybook to set the channel for all instances of UniversalStore in the given
		* environment.
		*
		* @internal
		*/
		static __prepare(channel, environment) {
			UniversalStore.preparation.channel = channel;
			UniversalStore.preparation.environment = environment;
			UniversalStore.preparation.resolve({
				channel,
				environment
			});
		}
		/**
		* Updates the store's state
		*
		* Either a new state or a state updater function can be passed to the method.
		*/
		setState(updater) {
			const previousState = this.state;
			const newState = typeof updater === "function" ? updater(previousState) : updater;
			this.debug("setState", {
				newState,
				previousState,
				updater
			});
			if (this.status !== UniversalStore.Status.READY) throw new TypeError(dedent`Cannot set state before store is ready. You can get the current status with store.status,
        or await store.readyPromise to wait for the store to be ready before sending events.
        ${JSON.stringify({
				newState,
				id: this.id,
				actor: this.actor,
				environment: this.environment
			}, null, 2)}`);
			this.state = newState;
			const event = {
				type: UniversalStore.InternalEventType.SET_STATE,
				payload: {
					state: newState,
					previousState
				}
			};
			this.emitToChannel(event, { actor: this.actor });
			this.emitToListeners(event, { actor: this.actor });
		}
		/**
		* Subscribes to state changes
		*
		* @returns Unsubscribe function
		*/
		onStateChange(listener) {
			this.debug("onStateChange", { listener });
			return this.subscribe(UniversalStore.InternalEventType.SET_STATE, ({ payload }, eventInfo) => {
				listener(payload.state, payload.previousState, eventInfo);
			});
		}
		emitToChannel(event, eventInfo) {
			this.debug("emitToChannel", {
				event,
				eventInfo,
				channel: !!this.channel
			});
			this.channel?.emit(this.channelEventName, {
				event,
				eventInfo
			});
		}
		prepareThis({ channel, environment }) {
			this.channel = channel;
			this.environment = environment;
			this.debug("prepared", {
				channel: !!channel,
				environment
			});
			this.channel.on(this.channelEventName, this.handleChannelEvents);
			if (this.actor.type === UniversalStore.ActorType.LEADER) this.emitToChannel({ type: UniversalStore.InternalEventType.LEADER_CREATED }, { actor: this.actor });
			else {
				this.emitToChannel({ type: UniversalStore.InternalEventType.FOLLOWER_CREATED }, { actor: this.actor });
				this.emitToChannel({ type: UniversalStore.InternalEventType.EXISTING_STATE_REQUEST }, { actor: this.actor });
			}
		}
		emitToListeners(event, eventInfo) {
			const eventTypeListeners = this.listeners.get(event.type);
			const everythingListeners = this.listeners.get("*");
			this.debug("emitToListeners", {
				event,
				eventInfo,
				eventTypeListeners,
				everythingListeners
			});
			[...eventTypeListeners ?? [], ...everythingListeners ?? []].forEach((listener) => listener(event, eventInfo));
		}
		handleChannelEvents(channelEvent) {
			const { event, eventInfo } = channelEvent;
			if ([eventInfo.actor.id, eventInfo.forwardingActor?.id].includes(this.actor.id)) {
				this.debug("handleChannelEvents: Ignoring event from self", { channelEvent });
				return;
			} else if (this.syncing?.state === ProgressState.PENDING && event.type !== UniversalStore.InternalEventType.EXISTING_STATE_RESPONSE) {
				this.debug("handleChannelEvents: Ignoring event while syncing", { channelEvent });
				return;
			}
			this.debug("handleChannelEvents", { channelEvent });
			if (this.actor.type === UniversalStore.ActorType.LEADER) {
				let shouldForwardEvent = true;
				switch (event.type) {
					case UniversalStore.InternalEventType.EXISTING_STATE_REQUEST:
						shouldForwardEvent = false;
						const responseEvent = {
							type: UniversalStore.InternalEventType.EXISTING_STATE_RESPONSE,
							payload: this.state
						};
						this.debug("handleChannelEvents: responding to existing state request", { responseEvent });
						this.emitToChannel(responseEvent, { actor: this.actor });
						this.emitToListeners(responseEvent, { actor: this.actor });
						break;
					case UniversalStore.InternalEventType.LEADER_CREATED:
						shouldForwardEvent = false;
						this.syncing.state = ProgressState.REJECTED;
						this.debug("handleChannelEvents: erroring due to second leader being created", { event });
						console.error(dedent`Detected multiple UniversalStore leaders created with the same id "${this.id}".
            Only one leader can exists at a time, your stores are now in an invalid state.
            Leaders detected:
            this: ${JSON.stringify(this.actor, null, 2)}
            other: ${JSON.stringify(eventInfo.actor, null, 2)}`);
						break;
				}
				if (shouldForwardEvent) {
					this.debug("handleChannelEvents: forwarding event", { channelEvent });
					this.emitToChannel(event, {
						actor: eventInfo.actor,
						forwardingActor: this.actor
					});
				}
			}
			if (this.actor.type === UniversalStore.ActorType.FOLLOWER) switch (event.type) {
				case UniversalStore.InternalEventType.EXISTING_STATE_RESPONSE:
					this.debug("handleChannelEvents: Setting state from leader's existing state response", { event });
					if (this.syncing?.state !== ProgressState.PENDING) break;
					this.syncing.resolve?.();
					const setStateEvent = {
						type: UniversalStore.InternalEventType.SET_STATE,
						payload: {
							state: event.payload,
							previousState: this.state
						}
					};
					this.state = event.payload;
					this.emitToListeners(setStateEvent, eventInfo);
					break;
			}
			switch (event.type) {
				case UniversalStore.InternalEventType.SET_STATE:
					this.debug("handleChannelEvents: Setting state", { event });
					this.state = event.payload.state;
					break;
			}
			this.emitToListeners(event, { actor: eventInfo.actor });
		}
		debug(message, data) {
			if (this.debugging) console.debug(dedent`[UniversalStore::${this.id}::${this.environment ?? UniversalStore.Environment.UNKNOWN}]
        ${message}`, JSON.stringify({
				data,
				actor: this.actor,
				state: this.state,
				status: this.status
			}, null, 2));
		}
		/**
		* Used to reset the static fields of the UniversalStore class when cleaning up tests
		*
		* @internal
		*/
		static __reset() {
			UniversalStore.preparation.reject(/* @__PURE__ */ new Error("reset"));
			UniversalStore.setupPreparationPromise();
			UniversalStore.isInternalConstructing = false;
		}
	};
}));
//#endregion
//#region src/storybook-error.ts
function parseErrorCode({ code, category }) {
	return `SB_${category}_${String(code).padStart(4, "0")}`;
}
function appendErrorRef(url) {
	if (/^(?!.*storybook\.js\.org)|[?&]ref=error\b/.test(url)) return url;
	try {
		const urlObj = new URL(url);
		urlObj.searchParams.set("ref", "error");
		return urlObj.toString();
	} catch {
		return url;
	}
}
var StorybookError;
var init_storybook_error = __esmMin((() => {
	StorybookError = class StorybookError extends Error {
		get fullErrorCode() {
			return parseErrorCode({
				code: this.code,
				category: this.category
			});
		}
		/** Overrides the default `Error.name` property in the format: SB_<CATEGORY>_<CODE>. */
		get name() {
			const errorName = this._name || this.constructor.name;
			return `${this.fullErrorCode} (${errorName})`;
		}
		set name(name) {
			this._name = name;
		}
		constructor(props) {
			super(StorybookError.getFullMessage(props), props.cause === void 0 ? void 0 : { cause: props.cause });
			this.data = {};
			this.fromStorybook = true;
			this.isHandledError = false;
			this.subErrors = [];
			this.category = props.category;
			this.documentation = props.documentation ?? false;
			this.code = props.code;
			this.isHandledError = props.isHandledError ?? false;
			this.agentFacing = props.agentFacing ?? false;
			this.name = props.name;
			this.subErrors = props.subErrors ?? [];
		}
		/** Generates the error message along with additional documentation link (if applicable). */
		static getFullMessage({ documentation, code, category, message }) {
			let page;
			if (documentation === true) page = `https://storybook.js.org/error/${parseErrorCode({
				code,
				category
			})}?ref=error`;
			else if (typeof documentation === "string") page = appendErrorRef(documentation);
			else if (Array.isArray(documentation)) page = `\n${documentation.map((doc) => `\t- ${appendErrorRef(doc)}`).join("\n")}`;
			return `${message}${page != null ? `\n\nMore info: ${page}\n` : ""}`;
		}
	};
}));
//#endregion
//#region src/shared/utils/local-hosts.ts
var LOOPBACK_HOSTNAMES, matchesHostname;
var init_local_hosts = __esmMin((() => {
	LOOPBACK_HOSTNAMES = [
		"localhost",
		"*.localhost",
		"127.0.0.1"
	];
	matchesHostname = (hostname, patterns) => patterns.some((pattern) => pattern.startsWith("*.") ? hostname.endsWith(pattern.slice(1)) : hostname === pattern);
}));
//#endregion
//#region src/theming/base.ts
var color, background, typography, tokens;
var init_base = __esmMin((() => {
	color = {
		primary: "#FF4785",
		secondary: "#006DEB",
		tertiary: "#FAFBFC",
		ancillary: "#22a699",
		orange: "#FC521F",
		gold: "#FFAE00",
		green: "#66BF3C",
		seafoam: "#37D5D3",
		purple: "#6F2CAC",
		ultraviolet: "#2A0481",
		lightest: "#FFFFFF",
		lighter: "#F6F9FC",
		light: "#EEF2F6",
		mediumlight: "#ECF2F9",
		medium: "#D9E5F2",
		mediumdark: "#737F8C",
		dark: "#5C6570",
		darker: "#454C54",
		darkest: "#2E3338",
		border: "hsl(212 50% 30% / 0.15)",
		positive: "#66BF3C",
		warning: "#E69D00",
		negative: "#FF4400",
		critical: "#FFFFFF",
		defaultText: "#2E3338",
		inverseText: "#FFFFFF",
		positiveText: "#427C27",
		warningText: "#955B1E",
		negativeText: "#C23400"
	};
	background = {
		app: "#F6F9FC",
		bar: color.lightest,
		content: color.lightest,
		preview: color.lightest,
		gridCellSize: 10,
		hoverable: "#DBECFF",
		positive: "#F1FFEB",
		warning: "#FFF9EB",
		negative: "#FFF0EB",
		critical: "#D13800"
	};
	typography = {
		fonts: {
			base: [
				"\"Nunito Sans\"",
				"-apple-system",
				"\".SFNSText-Regular\"",
				"\"San Francisco\"",
				"BlinkMacSystemFont",
				"\"Segoe UI\"",
				"\"Helvetica Neue\"",
				"Helvetica",
				"Arial",
				"sans-serif"
			].join(", "),
			mono: [
				"ui-monospace",
				"Menlo",
				"Monaco",
				"\"Roboto Mono\"",
				"\"Oxygen Mono\"",
				"\"Ubuntu Monospace\"",
				"\"Source Code Pro\"",
				"\"Droid Sans Mono\"",
				"\"Courier New\"",
				"monospace"
			].join(", ")
		},
		weight: {
			regular: 400,
			bold: 700
		},
		size: {
			s1: 12,
			s2: 14,
			s3: 16,
			m1: 20,
			m2: 24,
			m3: 28,
			l1: 32,
			l2: 40,
			l3: 48,
			code: 90
		}
	};
	tokens = {
		light: {
			fgColor: {
				default: color.darkest,
				muted: color.dark,
				accent: color.secondary,
				inverse: color.lightest,
				positive: "#427C27",
				warning: "#7A4100",
				negative: "#C23400",
				critical: "#FFFFFF",
				agentic: "#723aa6"
			},
			bgColor: {
				default: color.lightest,
				muted: background.app,
				positive: "#F1FFEB",
				warning: "#FFF7EB",
				negative: "#FFF0EB",
				critical: "#D13800",
				agentic: "#f5f0fa"
			},
			borderColor: {
				default: color.border,
				muted: "hsl(0 0% 0% / 0.1)",
				inverse: "hsl(0 0% 100% / 0.1)",
				positive: "#BFE7AC",
				warning: "#FFCE85",
				negative: "#FFC3AD",
				critical: "hsl(16 100% 100% / 0)",
				agentic: "#e1d2ef"
			}
		},
		dark: {
			fgColor: {
				default: "#C9CCCF",
				muted: "#95999D",
				accent: "#479DFF",
				inverse: "#1B1C1D",
				positive: "#86CE64",
				warning: "#FFAD33",
				negative: "#FF6933",
				critical: "#FF6933",
				agentic: "#b07fdc"
			},
			bgColor: {
				default: "#222325",
				muted: "#1B1C1D",
				positive: "hsl(101 100% 100% / 0)",
				warning: "hsl(101 100% 100% / 0)",
				negative: "hsl(101 100% 100% / 0)",
				critical: "hsl(101 100% 100% / 0)",
				agentic: "rgba(114,58,166,0.15)"
			},
			borderColor: {
				default: "hsl(0 0% 100% / 0.1)",
				muted: "hsl(0 0% 100% / 0.5)",
				inverse: "hsl(0 0% 0% / 0.1)",
				positive: "hsl(101 52% 64% / 0.15)",
				warning: "hsl(36 100% 64% / 0.15)",
				negative: "hsl(16 100% 64% / 0.15)",
				critical: "#FF6933",
				agentic: "rgba(114,58,166,0.35)"
			}
		}
	};
}));
//#endregion
//#region src/theming/types.ts
var init_types$1 = __esmMin((() => {}));
//#endregion
//#region src/theming/global.ts
var import_memoizerific$1, srOnlyStyles, srOnlyUnsetStyles, createReset, createGlobal;
var init_global = __esmMin((() => {
	import_memoizerific$1 = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	srOnlyStyles = {
		position: "absolute",
		width: 1,
		height: 1,
		padding: 0,
		margin: -1,
		overflow: "hidden",
		whiteSpace: "nowrap",
		clip: "rect(0, 0, 0, 0)",
		clipPath: "inset(50%)",
		border: 0
	};
	srOnlyUnsetStyles = {
		position: "unset",
		width: "unset",
		height: "unset",
		padding: "unset",
		margin: "unset",
		overflow: "unset",
		whiteSpace: "unset",
		clip: "unset",
		clipPath: "unset",
		border: "unset"
	};
	createReset = (0, import_memoizerific$1.default)(1)(({ typography }) => ({
		body: {
			fontFamily: typography.fonts.base,
			fontSize: typography.size.s3,
			margin: 0,
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
			WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
			WebkitOverflowScrolling: "touch"
		},
		"*": { boxSizing: "border-box" },
		"h1, h2, h3, h4, h5, h6": {
			fontWeight: typography.weight.regular,
			margin: 0,
			padding: 0
		},
		"button, input, textarea, select": {
			fontFamily: "inherit",
			fontSize: "inherit",
			boxSizing: "border-box"
		},
		sub: {
			fontSize: "0.8em",
			bottom: "-0.2em"
		},
		sup: {
			fontSize: "0.8em",
			top: "-0.2em"
		},
		"b, strong": { fontWeight: typography.weight.bold },
		hr: {
			border: "none",
			borderTop: "1px solid silver",
			clear: "both",
			marginBottom: "1.25rem"
		},
		code: {
			fontFamily: typography.fonts.mono,
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
			display: "inline-block",
			paddingLeft: 2,
			paddingRight: 2,
			verticalAlign: "baseline",
			color: "inherit"
		},
		pre: {
			fontFamily: typography.fonts.mono,
			WebkitFontSmoothing: "antialiased",
			MozOsxFontSmoothing: "grayscale",
			lineHeight: "18px",
			padding: "11px 1rem",
			whiteSpace: "pre-wrap",
			color: "inherit",
			borderRadius: 3,
			margin: "1rem 0"
		}
	}));
	createGlobal = (0, import_memoizerific$1.default)(1)(({ color, background, typography }) => {
		const resetStyles = createReset({ typography });
		return {
			...resetStyles,
			body: {
				...resetStyles.body,
				position: "fixed",
				width: "100vw",
				height: "100vh",
				overflow: "hidden",
				color: color.defaultText,
				background: background.app
			},
			hr: {
				...resetStyles.hr,
				borderTop: `1px solid ${color.border}`
			},
			".sb-hidden-until-focus": {
				opacity: 0,
				transition: "opacity 150ms ease-out"
			},
			".sb-hidden-until-focus:focus": { opacity: 1 },
			"[data-sb-landmark]": { position: "relative" },
			".sb-sr-only, .sb-hidden-until-focus:not(:focus)": srOnlyStyles,
			"[data-sb-landmark]:focus": { outline: "none" },
			"[data-sb-landmark]:focus::after": {
				outline: `2px solid ${color.primary}`,
				outlineOffset: "-2px"
			},
			"[data-sb-landmark]::after": {
				content: "''",
				position: "absolute",
				inset: 0,
				pointerEvents: "none"
			},
			".react-aria-Popover:focus-visible": { outline: "none" }
		};
	});
}));
//#endregion
//#region src/theming/themes/dark.ts
var theme$1;
var init_dark = __esmMin((() => {
	init_base();
	theme$1 = {
		base: "dark",
		colorPrimary: "#FF4785",
		colorSecondary: "#479DFF",
		appBg: "#1B1C1D",
		appContentBg: "#222325",
		appHoverBg: "#233952",
		appPreviewBg: color.lightest,
		appBorderColor: "hsl(0 0% 100% / 0.1)",
		appBorderRadius: 4,
		fontBase: typography.fonts.base,
		fontCode: typography.fonts.mono,
		textColor: "#C9CCCF",
		textInverseColor: "#1B1C1D",
		textMutedColor: "#95999D",
		barTextColor: "#95999D",
		barHoverColor: "#70B3FF",
		barSelectedColor: "#479DFF",
		barBg: "#222325",
		buttonBg: "#1B1C1D",
		buttonBorder: "hsl(0 0% 100% / 0.1)",
		booleanBg: "#1B1C1D",
		booleanSelectedBg: "#292B2E",
		inputBg: "#1B1C1D",
		inputBorder: "hsl(0 0% 100% / 0.1)",
		inputTextColor: "#C9CCCF",
		inputBorderRadius: 4
	};
}));
//#endregion
//#region src/theming/themes/light.ts
var theme;
var init_light = __esmMin((() => {
	init_base();
	theme = {
		base: "light",
		colorPrimary: color.primary,
		colorSecondary: color.secondary,
		appBg: background.app,
		appContentBg: color.lightest,
		appHoverBg: "#DBECFF",
		appPreviewBg: color.lightest,
		appBorderColor: color.border,
		appBorderRadius: 4,
		fontBase: typography.fonts.base,
		fontCode: typography.fonts.mono,
		textColor: color.darkest,
		textInverseColor: color.lightest,
		textMutedColor: color.dark,
		barTextColor: color.dark,
		barHoverColor: "#005CC7",
		barSelectedColor: "#0063D6",
		barBg: color.lightest,
		buttonBg: background.app,
		buttonBorder: color.medium,
		booleanBg: color.mediumlight,
		booleanSelectedBg: color.lightest,
		inputBg: color.lightest,
		inputBorder: color.border,
		inputTextColor: color.darkest,
		inputBorderRadius: 4
	};
}));
//#endregion
//#region src/theming/utils.ts
var globalWindow, mkColor, isColorString, isValidColorForPolished, applyPolished, colorFactory, lightenColor, darkenColor, getPreferredColorScheme;
var init_utils$1 = __esmMin((() => {
	init_client_logger();
	init_dist();
	init_polished_esm();
	({window: globalWindow} = scope);
	mkColor = (color) => ({ color });
	isColorString = (color) => {
		if (typeof color !== "string") {
			logger.warn(`Color passed to theme object should be a string. Instead ${color}(${typeof color}) was passed.`);
			return false;
		}
		return true;
	};
	isValidColorForPolished = (color) => {
		return !/(gradient|var|calc)/.test(color);
	};
	applyPolished = (type, color) => {
		if (type === "darken") return rgba(`${curriedDarken$1(1, color)}`, .95);
		if (type === "lighten") return rgba(`${curriedLighten$1(1, color)}`, .95);
		return color;
	};
	colorFactory = (type) => (color) => {
		if (!isColorString(color)) return color;
		if (!isValidColorForPolished(color)) return color;
		try {
			return applyPolished(type, color);
		} catch (error) {
			return color;
		}
	};
	lightenColor = colorFactory("lighten");
	darkenColor = colorFactory("darken");
	getPreferredColorScheme = () => {
		if (!globalWindow || !globalWindow.matchMedia) return "light";
		if (globalWindow.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
		return "light";
	};
}));
//#endregion
//#region src/theming/create.ts
var create_exports = /* @__PURE__ */ __exportAll({
	create: () => create$1,
	themes: () => themes
});
var themesBase, preferredColorScheme, themes, create$1;
var init_create = __esmMin((() => {
	init_dark();
	init_light();
	init_utils$1();
	themesBase = {
		light: theme,
		dark: theme$1
	};
	preferredColorScheme = getPreferredColorScheme();
	themes = {
		...themesBase,
		normal: themesBase[preferredColorScheme]
	};
	create$1 = (vars = { base: preferredColorScheme }, rest) => {
		const inherit = {
			...themes[preferredColorScheme],
			...themes[vars.base] || {},
			...vars,
			base: themes[vars.base] ? vars.base : preferredColorScheme
		};
		return {
			...rest,
			...inherit,
			barSelectedColor: vars.barSelectedColor || inherit.colorSecondary
		};
	};
}));
//#endregion
//#region src/theming/animation.ts
var easing, rotate360, glow, float, jiggle, inlineGlow, hoverable, animation;
var init_animation = __esmMin((() => {
	init_emotion_react_browser_esm();
	easing = { rubber: "cubic-bezier(0.175, 0.885, 0.335, 1.05)" };
	rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;
	glow = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: .4; }
`;
	float = keyframes`
  0% { transform: translateY(1px); }
  25% { transform: translateY(0px); }
  50% { transform: translateY(-3px); }
  100% { transform: translateY(1px); }
`;
	jiggle = keyframes`
  0%, 100% { transform:translate3d(0,0,0); }
  12.5%, 62.5% { transform:translate3d(-4px,0,0); }
  37.5%, 87.5% {  transform: translate3d(4px,0,0);  }
`;
	inlineGlow = css`
  animation: ${glow} 1.5s ease-in-out infinite;
  color: transparent;
  cursor: progress;
`;
	hoverable = css`
  transition: all 150ms ease-out;
  transform: translate3d(0, 0, 0);

  &:hover {
    transform: translate3d(0, -2px, 0);
  }

  &:active {
    transform: translate3d(0, 0, 0);
  }
`;
	animation = {
		rotate360,
		glow,
		float,
		jiggle,
		inlineGlow,
		hoverable
	};
}));
//#endregion
//#region src/theming/modules/syntax.ts
var chromeDark, chromeLight, convertColors, create;
var init_syntax = __esmMin((() => {
	init_utils$1();
	chromeDark = {
		BASE_FONT_FAMILY: "Menlo, monospace",
		BASE_FONT_SIZE: "11px",
		BASE_LINE_HEIGHT: 1.2,
		BASE_BACKGROUND_COLOR: "rgb(36, 36, 36)",
		BASE_COLOR: "rgb(213, 213, 213)",
		OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
		OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
		OBJECT_NAME_COLOR: "rgb(227, 110, 236)",
		OBJECT_VALUE_NULL_COLOR: "rgb(127, 127, 127)",
		OBJECT_VALUE_UNDEFINED_COLOR: "rgb(127, 127, 127)",
		OBJECT_VALUE_REGEXP_COLOR: "rgb(233, 63, 59)",
		OBJECT_VALUE_STRING_COLOR: "rgb(233, 63, 59)",
		OBJECT_VALUE_SYMBOL_COLOR: "rgb(233, 63, 59)",
		OBJECT_VALUE_NUMBER_COLOR: "hsl(252, 100%, 75%)",
		OBJECT_VALUE_BOOLEAN_COLOR: "hsl(252, 100%, 75%)",
		OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(85, 106, 242)",
		HTML_TAG_COLOR: "rgb(93, 176, 215)",
		HTML_TAGNAME_COLOR: "rgb(93, 176, 215)",
		HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
		HTML_ATTRIBUTE_NAME_COLOR: "rgb(155, 187, 220)",
		HTML_ATTRIBUTE_VALUE_COLOR: "rgb(242, 151, 102)",
		HTML_COMMENT_COLOR: "rgb(137, 137, 137)",
		HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
		ARROW_COLOR: "rgb(145, 145, 145)",
		ARROW_MARGIN_RIGHT: 3,
		ARROW_FONT_SIZE: 12,
		ARROW_ANIMATION_DURATION: "0",
		TREENODE_FONT_FAMILY: "Menlo, monospace",
		TREENODE_FONT_SIZE: "11px",
		TREENODE_LINE_HEIGHT: 1.2,
		TREENODE_PADDING_LEFT: 12,
		TABLE_BORDER_COLOR: "rgb(85, 85, 85)",
		TABLE_TH_BACKGROUND_COLOR: "rgb(44, 44, 44)",
		TABLE_TH_HOVER_COLOR: "rgb(48, 48, 48)",
		TABLE_SORT_ICON_COLOR: "black",
		TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))",
		TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
	};
	chromeLight = {
		BASE_FONT_FAMILY: "Menlo, monospace",
		BASE_FONT_SIZE: "11px",
		BASE_LINE_HEIGHT: 1.2,
		BASE_BACKGROUND_COLOR: "white",
		BASE_COLOR: "black",
		OBJECT_PREVIEW_ARRAY_MAX_PROPERTIES: 10,
		OBJECT_PREVIEW_OBJECT_MAX_PROPERTIES: 5,
		OBJECT_NAME_COLOR: "rgb(136, 19, 145)",
		OBJECT_VALUE_NULL_COLOR: "rgb(128, 128, 128)",
		OBJECT_VALUE_UNDEFINED_COLOR: "rgb(128, 128, 128)",
		OBJECT_VALUE_REGEXP_COLOR: "rgb(196, 26, 22)",
		OBJECT_VALUE_STRING_COLOR: "rgb(196, 26, 22)",
		OBJECT_VALUE_SYMBOL_COLOR: "rgb(196, 26, 22)",
		OBJECT_VALUE_NUMBER_COLOR: "rgb(28, 0, 207)",
		OBJECT_VALUE_BOOLEAN_COLOR: "rgb(28, 0, 207)",
		OBJECT_VALUE_FUNCTION_PREFIX_COLOR: "rgb(13, 34, 170)",
		HTML_TAG_COLOR: "rgb(168, 148, 166)",
		HTML_TAGNAME_COLOR: "rgb(136, 18, 128)",
		HTML_TAGNAME_TEXT_TRANSFORM: "lowercase",
		HTML_ATTRIBUTE_NAME_COLOR: "rgb(153, 69, 0)",
		HTML_ATTRIBUTE_VALUE_COLOR: "rgb(26, 26, 166)",
		HTML_COMMENT_COLOR: "rgb(35, 110, 37)",
		HTML_DOCTYPE_COLOR: "rgb(192, 192, 192)",
		ARROW_COLOR: "#6e6e6e",
		ARROW_MARGIN_RIGHT: 3,
		ARROW_FONT_SIZE: 12,
		ARROW_ANIMATION_DURATION: "0",
		TREENODE_FONT_FAMILY: "Menlo, monospace",
		TREENODE_FONT_SIZE: "11px",
		TREENODE_LINE_HEIGHT: 1.2,
		TREENODE_PADDING_LEFT: 12,
		TABLE_BORDER_COLOR: "#aaa",
		TABLE_TH_BACKGROUND_COLOR: "#eee",
		TABLE_TH_HOVER_COLOR: "hsla(0, 0%, 90%, 1)",
		TABLE_SORT_ICON_COLOR: "#6e6e6e",
		TABLE_DATA_BACKGROUND_IMAGE: "linear-gradient(to bottom, white, white 50%, rgb(234, 243, 255) 50%, rgb(234, 243, 255))",
		TABLE_DATA_BACKGROUND_SIZE: "128px 32px"
	};
	convertColors = (colors) => Object.entries(colors).reduce((acc, [k, v]) => ({
		...acc,
		[k]: mkColor(v)
	}), {});
	create = ({ colors, mono }) => {
		const colorsObjs = convertColors(colors);
		return {
			token: {
				fontFamily: mono,
				WebkitFontSmoothing: "antialiased",
				"&.tag": colorsObjs.red3,
				"&.comment": {
					...colorsObjs.green1,
					fontStyle: "italic"
				},
				"&.prolog": {
					...colorsObjs.green1,
					fontStyle: "italic"
				},
				"&.doctype": {
					...colorsObjs.green1,
					fontStyle: "italic"
				},
				"&.cdata": {
					...colorsObjs.green1,
					fontStyle: "italic"
				},
				"&.string": colorsObjs.red1,
				"&.url": colorsObjs.cyan1,
				"&.symbol": colorsObjs.cyan1,
				"&.number": colorsObjs.cyan1,
				"&.boolean": colorsObjs.cyan1,
				"&.variable": colorsObjs.cyan1,
				"&.constant": colorsObjs.cyan1,
				"&.inserted": colorsObjs.cyan1,
				"&.atrule": colorsObjs.blue1,
				"&.keyword": colorsObjs.blue1,
				"&.attr-value": colorsObjs.blue1,
				"&.punctuation": colorsObjs.gray1,
				"&.operator": colorsObjs.gray1,
				"&.function": colorsObjs.gray1,
				"&.deleted": colorsObjs.red2,
				"&.important": { fontWeight: "bold" },
				"&.bold": { fontWeight: "bold" },
				"&.italic": { fontStyle: "italic" },
				"&.class-name": colorsObjs.cyan2,
				"&.selector": colorsObjs.red3,
				"&.attr-name": colorsObjs.red4,
				"&.property": colorsObjs.red4,
				"&.regex": colorsObjs.red4,
				"&.entity": colorsObjs.red4,
				"&.directive.tag .tag": {
					background: "#ffff00",
					...colorsObjs.gray1
				}
			},
			"language-json .token.boolean": colorsObjs.blue1,
			"language-json .token.number": colorsObjs.blue1,
			"language-json .token.property": colorsObjs.cyan2,
			namespace: { opacity: .7 }
		};
	};
}));
//#endregion
//#region src/theming/convert.ts
var lightSyntaxColors, darkSyntaxColors, createColors, convert;
var init_convert = __esmMin((() => {
	init_polished_esm();
	init_animation();
	init_base();
	init_create();
	init_syntax();
	init_utils$1();
	lightSyntaxColors = {
		green1: "#008000",
		red1: "#A31515",
		red2: "#9a050f",
		red3: "#800000",
		red4: "#eb0000",
		gray1: "#393A34",
		cyan1: "#008380",
		cyan2: "#007ca0",
		blue1: "#0000ff",
		blue2: "#00009f"
	};
	darkSyntaxColors = {
		green1: "#95999D",
		red1: "#92C379",
		red2: "#9a050f",
		red3: "#A8FF60",
		red4: "#96CBFE",
		gray1: "#EDEDED",
		cyan1: "#C6C5FE",
		cyan2: "#FFFFB6",
		blue1: "#B474DD",
		blue2: "#00009f"
	};
	createColors = (vars) => ({
		primary: vars.colorPrimary,
		secondary: vars.colorSecondary,
		tertiary: color.tertiary,
		ancillary: color.ancillary,
		orange: color.orange,
		gold: color.gold,
		green: color.green,
		seafoam: color.seafoam,
		purple: color.purple,
		ultraviolet: color.ultraviolet,
		lightest: color.lightest,
		lighter: color.lighter,
		light: color.light,
		mediumlight: color.mediumlight,
		medium: color.medium,
		mediumdark: color.mediumdark,
		dark: color.dark,
		darker: color.darker,
		darkest: color.darkest,
		border: color.border,
		positive: color.positive,
		negative: color.negative,
		warning: color.warning,
		critical: color.critical,
		defaultText: vars.textColor || color.darkest,
		inverseText: vars.textInverseColor || color.lightest,
		positiveText: color.positiveText,
		negativeText: color.negativeText,
		warningText: color.warningText
	});
	convert = (inherit = themes[getPreferredColorScheme()]) => {
		const { base, colorPrimary, colorSecondary, appBg, appContentBg, appHoverBg, appPreviewBg, appBorderColor, appBorderRadius, fontBase, fontCode, textColor, textInverseColor, barTextColor, barHoverColor, barSelectedColor, barBg, buttonBg, buttonBorder, booleanBg, booleanSelectedBg, inputBg, inputBorder, inputTextColor, inputBorderRadius, brandTitle, brandUrl, brandImage, brandTarget, gridCellSize, ...rest } = inherit;
		return {
			...rest,
			base,
			...base === "dark" ? tokens.dark : tokens.light,
			color: createColors(inherit),
			background: {
				app: appBg,
				bar: barBg,
				content: appContentBg,
				preview: appPreviewBg,
				gridCellSize: gridCellSize || background.gridCellSize,
				hoverable: appHoverBg,
				positive: background.positive,
				negative: background.negative,
				warning: background.warning,
				critical: background.critical
			},
			typography: {
				fonts: {
					base: fontBase,
					mono: fontCode
				},
				weight: typography.weight,
				size: typography.size
			},
			animation,
			easing,
			input: {
				background: inputBg,
				border: inputBorder,
				borderRadius: inputBorderRadius,
				color: inputTextColor
			},
			button: {
				background: buttonBg || inputBg,
				border: buttonBorder || inputBorder
			},
			boolean: {
				background: booleanBg || inputBorder,
				selectedBackground: booleanSelectedBg || inputBg
			},
			layoutMargin: 10,
			appBorderColor,
			appBorderRadius,
			barTextColor,
			barHoverColor: barHoverColor || colorSecondary,
			barSelectedColor: barSelectedColor || colorSecondary,
			barBg,
			brand: {
				title: brandTitle,
				url: brandUrl,
				image: brandImage || (brandTitle ? null : void 0),
				target: brandTarget
			},
			code: create({
				colors: base === "dark" ? darkSyntaxColors : lightSyntaxColors,
				mono: fontCode
			}),
			addonActionsTheme: {
				...base === "dark" ? chromeDark : chromeLight,
				BASE_FONT_FAMILY: fontCode,
				BASE_FONT_SIZE: typography.size.s2 - 1,
				BASE_LINE_HEIGHT: "18px",
				BASE_BACKGROUND_COLOR: "transparent",
				BASE_COLOR: textColor,
				ARROW_COLOR: curriedOpacify$1(.2, appBorderColor),
				ARROW_MARGIN_RIGHT: 4,
				ARROW_FONT_SIZE: 8,
				TREENODE_FONT_FAMILY: fontCode,
				TREENODE_FONT_SIZE: typography.size.s2 - 1,
				TREENODE_LINE_HEIGHT: "18px",
				TREENODE_PADDING_LEFT: 12
			}
		};
	};
}));
//#endregion
//#region src/theming/ensure.ts
var ensure;
var init_ensure = __esmMin((() => {
	init_client_logger();
	init_mjs();
	init_esm();
	init_convert();
	init_light();
	ensure = (input) => {
		if (!input) return convert(theme);
		const missing = deletedDiff(theme, input);
		if (Object.keys(missing).length) logger.warn(dedent`
          Your theme is missing properties, you should update your theme!

          theme-data missing:
        `, missing);
		return convert(input);
	};
}));
//#endregion
//#region src/theming/emotion.ts
var emotion_exports = /* @__PURE__ */ __exportAll({
	CacheProvider: () => CacheProvider,
	ClassNames: () => ClassNames,
	Global: () => Global,
	ThemeProvider: () => ThemeProvider,
	background: () => background,
	color: () => color,
	convert: () => convert,
	create: () => create$1,
	createCache: () => createCache,
	createGlobal: () => createGlobal,
	createReset: () => createReset,
	css: () => css,
	darken: () => darkenColor,
	ensure: () => ensure,
	getPreferredColorScheme: () => getPreferredColorScheme,
	ignoreSsrWarning: () => ignoreSsrWarning,
	isPropValid: () => isPropValid,
	jsx: () => jsx,
	keyframes: () => keyframes,
	lighten: () => lightenColor,
	srOnlyStyles: () => srOnlyStyles,
	srOnlyUnsetStyles: () => srOnlyUnsetStyles,
	styled: () => styled,
	themes: () => themes,
	tokens: () => tokens,
	typography: () => typography,
	useTheme: () => useTheme,
	withTheme: () => withTheme
});
var ignoreSsrWarning;
var init_emotion = __esmMin((() => {
	init_emotion_styled_browser_esm();
	init_emotion_react_browser_esm();
	init_base();
	init_types$1();
	init_emotion_cache_browser_esm();
	init_emotion_is_prop_valid_esm();
	init_global();
	init_create();
	init_convert();
	init_ensure();
	init_utils$1();
	ignoreSsrWarning = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";
}));
//#endregion
//#region src/shared/open-service/errors.ts
/**
* Formats a schema issue path into the field notation shown in validation errors.
*
* Examples:
* - `['foo']` -> `foo`
* - `['items', 0, 'id']` -> `items[0].id`
*/
function formatIssuePath(path) {
	if (!path?.length) return "";
	return path.map((segment) => {
		const key = typeof segment === "object" && segment !== null && "key" in segment ? segment.key : segment;
		return typeof key === "number" ? `[${key}]` : `.${String(key)}`;
	}).join("").replace(/^\./, "");
}
/**
* Converts schema issues into the newline-separated detail block appended to user-facing errors.
*/
function formatIssues(issues) {
	return issues.map((issue) => {
		const path = formatIssuePath(issue.path);
		return path === "" ? issue.message : `${path}: ${issue.message}`;
	}).join("\n");
}
var init_errors = __esmMin((() => {}));
//#endregion
//#region src/server-errors.ts
var OpenServiceValidationError, OpenServiceMissingServiceError, OpenServiceInternalServiceError, OpenServiceUnimplementedOperationError, OpenServiceInvalidStaticPathError, OpenServiceAsyncSchemaError, OpenServiceLoadedDrainExceededError, OpenServiceMissingChannelError, OpenServiceRemoteCommandDisconnectedError, OpenServiceRemoteCommandUnhandledError, OpenServiceRemoteCommandConfigDriftError, OpenServiceAsyncRecipeError, OpenServiceCyclicStateError, OpenServiceOperationNameCollisionError, StatusTypeIdMismatchError;
var init_server_errors = __esmMin((() => {
	init_errors();
	init_storybook_error();
	OpenServiceValidationError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceValidationError",
				category: "CORE-COMMON",
				code: 5,
				message: `Invalid ${data.phase} for ${data.kind} "${data.serviceId}.${data.name}":\n${formatIssues(data.issues)}`
			});
			this.data = data;
		}
	};
	OpenServiceMissingServiceError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceMissingServiceError",
				category: "CORE-COMMON",
				code: 7,
				message: `No registered service with id "${data.serviceId}" exists in this environment.`
			});
			this.data = data;
		}
	};
	OpenServiceInternalServiceError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceInternalServiceError",
				category: "CORE-COMMON",
				code: 19,
				message: `Service "${data.serviceId}" is internal. Pass { internal: true } to getService() only if you intentionally depend on an unstable OSA surface. Internal services may change without notice.`
			});
			this.data = data;
		}
	};
	OpenServiceUnimplementedOperationError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceUnimplementedOperationError",
				category: "CORE-COMMON",
				code: 8,
				message: `${data.kind[0].toUpperCase()}${data.kind.slice(1)} "${data.serviceId}.${data.name}" is not implemented for this environment.`
			});
			this.data = data;
		}
	};
	OpenServiceInvalidStaticPathError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceInvalidStaticPathError",
				category: "CORE-COMMON",
				code: 10,
				message: `Invalid static path "${data.path}" for query "${data.serviceId}.${data.name}": use a relative path with forward slashes and no ".." segments.`
			});
			this.data = data;
		}
	};
	OpenServiceAsyncSchemaError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceAsyncSchemaError",
				category: "CORE-COMMON",
				code: 9,
				message: `Async schema for ${data.kind} "${data.serviceId}.${data.name}" (${data.phase}): query input and output schemas must validate synchronously.`
			});
			this.data = data;
		}
	};
	OpenServiceLoadedDrainExceededError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceLoadedDrainExceededError",
				category: "CORE-COMMON",
				code: 11,
				message: `Query "${data.serviceId}.${data.name}".loaded(...) did not settle after ${data.iterations} drain iterations. Check for handlers that keep discovering new dependencies after every state change.`
			});
			this.data = data;
		}
	};
	OpenServiceMissingChannelError = class extends StorybookError {
		constructor(data = {}) {
			super({
				name: "OpenServiceMissingChannelError",
				category: "CORE-COMMON",
				code: 13,
				message: data.serviceId ? `Cannot register service "${data.serviceId}": the Storybook addons channel is not installed in this runtime.` : "The Storybook addons channel is not installed in this runtime."
			});
			this.data = data;
		}
	};
	OpenServiceRemoteCommandDisconnectedError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceRemoteCommandDisconnectedError",
				category: "CORE-COMMON",
				code: 14,
				message: `Service "${data.serviceId}" was unregistered before a remote command resolved.`
			});
			this.data = data;
		}
	};
	OpenServiceRemoteCommandUnhandledError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceRemoteCommandUnhandledError",
				category: "CORE-COMMON",
				code: 15,
				message: data.delegated ? `The Storybook this runtime is attached to did not acknowledge remote command "${data.serviceId}.${data.commandName}" in time — it may be busy or unreachable. Retry; note the command may still have executed on that instance.` : `No runtime acknowledged remote command "${data.serviceId}.${data.commandName}"; its handler is not implemented in any connected runtime.`
			});
			this.data = data;
		}
	};
	OpenServiceRemoteCommandConfigDriftError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceRemoteCommandConfigDriftError",
				category: "CORE-COMMON",
				code: 30,
				message: `The Storybook this runtime is attached to reported it has no handler for remote command "${data.serviceId}.${data.commandName}". The two processes are running different configurations (for example a feature flag enabled in one but not the other). Restart the attached Storybook with a configuration matching this process.`
			});
			this.data = data;
		}
	};
	OpenServiceAsyncRecipeError = class extends StorybookError {
		constructor() {
			super({
				name: "OpenServiceAsyncRecipeError",
				category: "CORE-COMMON",
				code: 31,
				message: "setState recipes must be synchronous. A write after an await would change state without authoring a sync entry. Split the command into one setState per synchronous step."
			});
		}
	};
	OpenServiceCyclicStateError = class extends StorybookError {
		constructor() {
			super({
				name: "OpenServiceCyclicStateError",
				category: "CORE-COMMON",
				code: 32,
				message: "Service state must be JSON-serializable, but the value is cyclic or nested more than 256 levels deep. Store an id and look the value up in a query instead of a reference."
			});
		}
	};
	OpenServiceOperationNameCollisionError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceOperationNameCollisionError",
				category: "CORE-COMMON",
				code: 16,
				message: `Service "${data.serviceId}" cannot register "${data.operationName}" as both a query and a command.`
			});
			this.data = data;
		}
	};
	StatusTypeIdMismatchError = class extends StorybookError {
		constructor(data) {
			super({
				name: "StatusTypeIdMismatchError",
				category: "CORE-SERVER",
				code: 16,
				message: `Status has typeId "${data.status.typeId}" but was added to store with typeId "${data.typeId}". Full status: ${JSON.stringify(data.status, null, 2)}`
			});
			this.data = data;
		}
	};
}));
//#endregion
//#region src/shared/status-store/index.ts
function countStatusesByValue(allStatuses) {
	const counts = {};
	for (const statusByTypeId of Object.values(allStatuses)) for (const status of Object.values(statusByTypeId)) counts[status.value] = (counts[status.value] ?? 0) + 1;
	return counts;
}
function createStatusStore({ universalStatusStore, useUniversalStore, environment }) {
	const fullStatusStore = {
		getAll() {
			return universalStatusStore.getState();
		},
		set(statuses) {
			universalStatusStore.setState((state) => {
				const newState = { ...state };
				for (const status of statuses) {
					const { storyId, typeId } = status;
					newState[storyId] = {
						...newState[storyId] ?? {},
						[typeId]: status
					};
				}
				return newState;
			});
		},
		onAllStatusChange(listener) {
			return universalStatusStore.onStateChange((state, prevState) => {
				listener(state, prevState);
			});
		},
		onSelect(listener) {
			return universalStatusStore.subscribe(StatusStoreEventType.SELECT, (event) => {
				listener(event.payload);
			});
		},
		selectStatuses: (statuses) => {
			universalStatusStore.send({
				type: StatusStoreEventType.SELECT,
				payload: statuses
			});
		},
		unset(storyIds) {
			if (!storyIds) {
				universalStatusStore.setState({});
				return;
			}
			universalStatusStore.setState((state) => {
				const newState = { ...state };
				for (const storyId of storyIds) delete newState[storyId];
				return newState;
			});
		},
		typeId: void 0
	};
	const getStatusStoreByTypeId = (typeId) => ({
		getAll: fullStatusStore.getAll,
		set(statuses) {
			universalStatusStore.setState((state) => {
				const newState = { ...state };
				for (const status of statuses) {
					const { storyId } = status;
					if (status.typeId !== typeId) switch (environment) {
						case "server": throw new StatusTypeIdMismatchError({
							status,
							typeId
						});
						case "manager": throw new StatusTypeIdMismatchError$1({
							status,
							typeId
						});
						default: throw new StatusTypeIdMismatchError$2({
							status,
							typeId
						});
					}
					newState[storyId] = {
						...newState[storyId] ?? {},
						[typeId]: status
					};
				}
				return newState;
			});
		},
		onAllStatusChange: fullStatusStore.onAllStatusChange,
		onSelect(listener) {
			return universalStatusStore.subscribe(StatusStoreEventType.SELECT, (event) => {
				if (event.payload.some((status) => status.typeId === typeId)) listener(event.payload);
			});
		},
		unset(storyIds) {
			universalStatusStore.setState((state) => {
				const newState = { ...state };
				for (const storyId in newState) if (newState[storyId]?.[typeId] && (!storyIds || storyIds?.includes(storyId))) {
					const { [typeId]: omittedStatus, ...storyStatusesWithoutTypeId } = newState[storyId];
					newState[storyId] = storyStatusesWithoutTypeId;
				}
				return newState;
			});
		},
		typeId
	});
	if (!useUniversalStore) return {
		getStatusStoreByTypeId,
		fullStatusStore,
		universalStatusStore
	};
	return {
		getStatusStoreByTypeId,
		fullStatusStore,
		universalStatusStore,
		useStatusStore: (selector) => useUniversalStore(universalStatusStore, selector)[0]
	};
}
var STATUS_VALUE_PREFIX, STATUS_VALUES, toStatusValue, statusValueShortName, CHANGE_DETECTION_STATUS_TYPE_ID, REVIEW_STATUS_TYPE_ID, NON_AGGREGATED_STATUS_TYPE_IDS, UNIVERSAL_STATUS_STORE_OPTIONS, StatusStoreEventType;
var init_status_store = __esmMin((() => {
	init_manager_errors();
	init_preview_errors();
	init_server_errors();
	STATUS_VALUE_PREFIX = "status-value:";
	STATUS_VALUES = [
		"status-value:pending",
		"status-value:success",
		"status-value:new",
		"status-value:modified",
		"status-value:affected",
		"status-value:reviewing",
		"status-value:warning",
		"status-value:error",
		"status-value:unknown"
	];
	toStatusValue = (shortName) => {
		if (shortName === "related") return "status-value:affected";
		const candidate = `${STATUS_VALUE_PREFIX}${shortName}`;
		return STATUS_VALUES.includes(candidate) ? candidate : void 0;
	};
	statusValueShortName = (value) => {
		if (value === "status-value:affected") return "related";
		return value.slice(13);
	};
	CHANGE_DETECTION_STATUS_TYPE_ID = "storybook/change-detection";
	REVIEW_STATUS_TYPE_ID = "storybook/review";
	NON_AGGREGATED_STATUS_TYPE_IDS = [CHANGE_DETECTION_STATUS_TYPE_ID, REVIEW_STATUS_TYPE_ID];
	UNIVERSAL_STATUS_STORE_OPTIONS = {
		id: "storybook/status",
		leader: true,
		initialState: {}
	};
	StatusStoreEventType = { SELECT: "select" };
}));
//#endregion
//#region src/shared/review/events.ts
var REVIEW_NAMESPACE, REVIEW_EVENTS;
var init_events = __esmMin((() => {
	REVIEW_NAMESPACE = "storybook/review";
	REVIEW_EVENTS = { PAGEVIEW: `${REVIEW_NAMESPACE}/pageview` };
}));
//#endregion
//#region src/shared/constants/tags.ts
var Tag, BUILT_IN_FILTERS, USER_TAG_FILTER;
var init_tags = __esmMin((() => {
	Tag = {
		/** Indicates that autodocs should be generated for this component */
		AUTODOCS: "autodocs",
		/** MDX documentation attached to a component's stories file */
		ATTACHED_MDX: "attached-mdx",
		/** Standalone MDX documentation not attached to stories */
		UNATTACHED_MDX: "unattached-mdx",
		/** Story has a play function */
		PLAY_FN: "play-fn",
		/** Story has a test function */
		TEST_FN: "test-fn",
		/** Development environment tag */
		DEV: "dev",
		/** Test environment tag */
		TEST: "test",
		/** Manifest generation tag */
		MANIFEST: "manifest"
	};
	BUILT_IN_FILTERS = {
		_docs: (entry, excluded) => excluded ? entry.type !== "docs" : entry.type === "docs",
		_play: (entry, excluded) => excluded ? entry.type !== "story" || !entry.tags?.includes(Tag.PLAY_FN) : entry.type === "story" && !!entry.tags?.includes(Tag.PLAY_FN),
		_test: (entry, excluded) => excluded ? entry.type !== "story" || entry.subtype !== "test" : entry.type === "story" && entry.subtype === "test"
	};
	USER_TAG_FILTER = (tag) => (entry, excluded) => excluded ? !entry.tags?.includes(tag) : !!entry.tags?.includes(tag);
}));
//#endregion
//#region src/shared/open-service/plain-object.ts
function isReservedKey(key) {
	return FORBIDDEN_KEYS.has(key) || key.startsWith("$");
}
function hasOwn(obj, key) {
	return Object.prototype.hasOwnProperty.call(obj, key);
}
function isPlainObject$1(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
/**
* Deep-copies a JSON-shaped value, giving every path its own object.
*
* Used for every value on its way into service state: a definition's `initialState`, an object
* assigned inside a `setState` recipe, and the value carried by a recorded op.
*
* Not `structuredClone`. That keeps a reference shared between two keys as one object, so a write
* through one key would also change the other on the writing runtime, while peers, who only ever
* receive JSON, would see one path change. Rebuilding key by key removes the alias on both sides.
* It also accepts proxies and drops the prototype-pollution keys in {@link FORBIDDEN_KEYS} and
* deepsignal's `$`-prefixed accessor keys. A cyclic value throws {@link OpenServiceCyclicStateError},
* since it could never be serialized for peers; the check is a depth limit, which costs nothing per
* node. An `undefined` property is dropped, as JSON drops it, so the author and peers agree on which
* keys exist.
*
* Only own enumerable string keys are copied. Class instances, `Map`, `Set`, and `Date` become plain
* objects, which matches the JSON-serializable contract service state already has.
*/
function clonePlain(value, depth = 0) {
	if (value === null || typeof value !== "object") return value;
	if (depth > MAX_DEPTH) throw new OpenServiceCyclicStateError();
	if (Array.isArray(value)) return value.map((entry) => clonePlain(entry, depth + 1));
	const copy = {};
	for (const key of Object.keys(value)) {
		const entry = value[key];
		if (isReservedKey(key) || entry === void 0) continue;
		copy[key] = clonePlain(entry, depth + 1);
	}
	return copy;
}
var FORBIDDEN_KEYS, MAX_DEPTH;
var init_plain_object = __esmMin((() => {
	init_server_errors();
	FORBIDDEN_KEYS = /* @__PURE__ */ new Set([
		"__proto__",
		"constructor",
		"prototype"
	]);
	MAX_DEPTH = 256;
}));
//#endregion
//#region src/shared/open-service/service-channel.ts
function decodeSegment(encoded) {
	return encoded.replaceAll("~1", "/").replaceAll("~0", "~");
}
/** RFC 6901 JSON Pointer: `~0` encodes `~`, `~1` encodes `/`; no segments is the root pointer `''`. */
function encodePointer(segments) {
	return segments.map((segment) => `/${segment.replaceAll("~", "~0").replaceAll("/", "~1")}`).join("");
}
/** Inverse of {@link encodePointer}. `pointer` must be empty or start with `/`. */
function decodePointer(pointer) {
	if (pointer === "") return [];
	return pointer.slice(1).split("/").map(decodeSegment);
}
function isRfc6901Pointer(pointer) {
	if (!pointer.startsWith("/")) return false;
	return pointer.slice(1).split("/").every((encoded) => {
		return RFC_6901_ENCODED_SEGMENT.test(encoded) && !isReservedKey(decodeSegment(encoded));
	});
}
/** Canonical log key and warning label: `seq:runtimeId:counter`. */
function entryStampKey(stamp) {
	return `${stamp.seq}:${stamp.runtimeId}:${stamp.counter}`;
}
/**
* Unique id for one service registration.
*
* It is the loop guard that drops a runtime's own `services:sync-request`. `nanoid` is used (over
* `Math.random`) so collisions cannot silently break that determinism.
*/
function generateRuntimeId() {
	return nanoid();
}
/** Unique id for one remote-command invocation. Replies correlate on this, not on `runtimeId`. */
function generateCallId() {
	return nanoid();
}
var SERVICE_SYNC_REQUEST, SERVICE_SYNC_REPLY, SERVICE_ENTRY, SERVICE_COMMAND_INVOKE, SERVICE_COMMAND_ACK, SERVICE_COMMAND_RESULT, SERVICE_COMMAND_ERROR, SERVICE_COMMAND_UNHANDLED, stateSnapshotSchema, nonNegativeSafeInteger, positiveSafeInteger, RFC_6901_ENCODED_SEGMENT, jsonPointerSchema, jsonPatchOperationSchema, entryStampSchema, entrySchema, frontierSchema, syncRequestSchema, syncReplySchema, commandInvokeSchema, commandAckSchema, commandUnhandledSchema, commandResultSchema, commandErrorSchema;
var init_service_channel = __esmMin((() => {
	init_index_browser();
	init_dist$3();
	init_plain_object();
	SERVICE_SYNC_REQUEST = "services:sync-request";
	SERVICE_SYNC_REPLY = "services:sync-reply";
	SERVICE_ENTRY = "services:entry";
	SERVICE_COMMAND_INVOKE = "services:command-invoke";
	SERVICE_COMMAND_ACK = "services:command-ack";
	SERVICE_COMMAND_RESULT = "services:command-result";
	SERVICE_COMMAND_ERROR = "services:command-error";
	SERVICE_COMMAND_UNHANDLED = "services:command-unhandled";
	stateSnapshotSchema = custom(isPlainObject$1);
	nonNegativeSafeInteger = pipe(number(), safeInteger(), minValue(0));
	positiveSafeInteger = pipe(number(), safeInteger(), minValue(1));
	RFC_6901_ENCODED_SEGMENT = /^(?:[^~]|~[01])*$/;
	jsonPointerSchema = pipe(string(), check(isRfc6901Pointer));
	jsonPatchOperationSchema = variant("op", [
		object({
			op: literal("add"),
			path: jsonPointerSchema,
			value: unknown()
		}),
		object({
			op: literal("replace"),
			path: jsonPointerSchema,
			value: unknown()
		}),
		object({
			op: literal("remove"),
			path: jsonPointerSchema
		})
	]);
	entryStampSchema = object({
		seq: positiveSafeInteger,
		runtimeId: string(),
		counter: positiveSafeInteger
	});
	entrySchema = object({
		serviceId: string(),
		stamp: entryStampSchema,
		command: string(),
		patch: pipe(array(jsonPatchOperationSchema), minLength(1))
	});
	frontierSchema = object({
		vector: record(string(), nonNegativeSafeInteger),
		clock: nonNegativeSafeInteger
	});
	syncRequestSchema = object({
		serviceId: string(),
		runtimeId: string(),
		frontier: frontierSchema
	});
	syncReplySchema = object({
		serviceId: string(),
		runtimeId: string(),
		frontier: frontierSchema,
		state: stateSnapshotSchema
	});
	commandInvokeSchema = object({
		serviceId: string(),
		commandName: string(),
		input: optional(unknown()),
		callId: string(),
		runtimeId: string()
	});
	commandAckSchema = object({
		serviceId: string(),
		callId: string(),
		runtimeId: string()
	});
	commandUnhandledSchema = object({
		serviceId: string(),
		callId: string()
	});
	commandResultSchema = object({
		serviceId: string(),
		callId: string(),
		result: optional(unknown()),
		runtimeId: string()
	});
	commandErrorSchema = object({
		serviceId: string(),
		callId: string(),
		error: custom((value) => typeof value === "object" && value !== null && !Array.isArray(value)),
		runtimeId: string()
	});
}));
//#endregion
//#region src/shared/open-service/patch-recorder.ts
function peekProp(obj, key) {
	return g(obj, key);
}
function isPrimitive(value) {
	return value === null || typeof value !== "object";
}
function ownValue(inner, name) {
	const existed = hasOwn(inner, name);
	return {
		existed,
		firstValue: existed ? clonePlain(peekProp(inner, name)) : void 0
	};
}
function readPath(root, segments) {
	let current = root;
	for (const segment of segments) {
		if (current === null || typeof current !== "object") return {
			found: false,
			value: void 0
		};
		if (!hasOwn(current, segment)) return {
			found: false,
			value: void 0
		};
		current = peekProp(current, segment);
	}
	return {
		found: true,
		value: current
	};
}
/**
* Runs `mutate` against `state` through a recording proxy and passes the resulting RFC 6902 ops to
* `author`.
*
* `author` runs even when the recipe throws, with the paths written before the throw, and the
* throw then propagates. A recipe that changes nothing does not call `author`. A call made inside
* another recipe on the same state writes into that recipe's draft, so its writes join that entry.
*/
function recordPatch(state, mutate, author) {
	const activeDraft = activeDrafts.get(state);
	if (activeDraft) {
		const nested = mutate(activeDraft);
		if (isThenable(nested)) {
			Promise.resolve(nested).catch(() => {});
			throw new OpenServiceAsyncRecipeError();
		}
		return;
	}
	const root = state;
	const touches = /* @__PURE__ */ new Map();
	const order = [];
	const wrapperByTarget = /* @__PURE__ */ new WeakMap();
	const targetByWrapper = /* @__PURE__ */ new WeakMap();
	const revokes = [];
	const preRecipeValue = (segments) => {
		const { found, value } = readPath(root, segments);
		if (!found) return {
			existed: false,
			firstValue: void 0
		};
		const snapshot = clonePlain(value);
		const prefix = encodePointer(segments);
		for (const pointer of order.toReversed()) {
			if (!pointer.startsWith(`${prefix}/`)) continue;
			const descendant = touches.get(pointer);
			let parent = snapshot;
			const relative = descendant.segments.slice(segments.length);
			for (const segment of relative.slice(0, -1)) parent = parent !== null && typeof parent === "object" ? parent[segment] : void 0;
			if (parent === null || typeof parent !== "object") continue;
			const key = relative[relative.length - 1];
			if (descendant.existed) parent[key] = clonePlain(descendant.firstValue);
			else delete parent[key];
		}
		return {
			existed: true,
			firstValue: snapshot
		};
	};
	const note = (segments, capture) => {
		const pointer = encodePointer(segments);
		if (touches.has(pointer)) return;
		const prefix = `${pointer}/`;
		const subsumesEarlierTouch = order.some((recorded) => recorded.startsWith(prefix));
		touches.set(pointer, {
			segments,
			...subsumesEarlierTouch ? preRecipeValue(segments) : capture()
		});
		order.push(pointer);
	};
	const noteArray = (arrayRoot) => {
		note(arrayRoot.path, () => ({
			existed: true,
			firstValue: clonePlain(arrayRoot.target)
		}));
	};
	const storedValue = (value) => {
		if (value === null || typeof value !== "object") return value;
		return clonePlain(targetByWrapper.get(value) ?? value);
	};
	const isUnchangedAssignment = (inner, name, value) => {
		if (!hasOwn(inner, name)) return false;
		if (Object.is(peekProp(inner, name), value)) return true;
		if (value !== null && typeof value === "object") {
			const target = targetByWrapper.get(value);
			return target !== void 0 && Object.is(Reflect.get(inner, name), target);
		}
		return false;
	};
	const wrap = (target, path, arrayRoot) => {
		const cached = wrapperByTarget.get(target);
		if (cached) return cached;
		const effectiveArrayRoot = arrayRoot ?? (Array.isArray(target) ? {
			path,
			target
		} : null);
		const { proxy, revoke } = Proxy.revocable(target, {
			get(inner, key) {
				if (typeof key === "symbol") return Reflect.get(inner, key);
				if (FORBIDDEN_KEYS.has(key) || key.startsWith("$")) return;
				const value = Reflect.get(inner, key);
				if (typeof value === "function") return value;
				if (value !== null && typeof value === "object") return wrap(value, path.concat(String(key)), effectiveArrayRoot);
				return value;
			},
			set(inner, key, value) {
				if (typeof key === "symbol") return Reflect.set(inner, key, value);
				const name = String(key);
				if (FORBIDDEN_KEYS.has(name)) return true;
				if (name.startsWith("$")) {
					const plain = name.slice(1);
					if (FORBIDDEN_KEYS.has(plain)) return true;
					note(path.concat(plain), () => ownValue(inner, plain));
					return Reflect.set(inner, key, value);
				}
				if (isUnchangedAssignment(inner, name, value)) return true;
				if (effectiveArrayRoot) {
					noteArray(effectiveArrayRoot);
					return Reflect.set(inner, name, storedValue(value));
				}
				const segments = path.concat(name);
				if (value === void 0) {
					if (hasOwn(inner, name)) {
						note(segments, () => ownValue(inner, name));
						return Reflect.deleteProperty(inner, name);
					}
					return true;
				}
				note(segments, () => ownValue(inner, name));
				return Reflect.set(inner, name, storedValue(value));
			},
			deleteProperty(inner, key) {
				if (typeof key === "symbol") return Reflect.deleteProperty(inner, key);
				const name = String(key);
				if (FORBIDDEN_KEYS.has(name)) return true;
				if (name.startsWith("$")) return Reflect.deleteProperty(inner, key);
				if (!hasOwn(inner, name)) return true;
				if (effectiveArrayRoot) {
					noteArray(effectiveArrayRoot);
					return Reflect.deleteProperty(inner, name);
				}
				note(path.concat(name), () => ownValue(inner, name));
				return Reflect.deleteProperty(inner, name);
			}
		});
		revokes.push(revoke);
		wrapperByTarget.set(target, proxy);
		targetByWrapper.set(proxy, target);
		return proxy;
	};
	const flush = () => {
		const touched = new Set(order);
		const ops = [];
		const inverse = [];
		for (const pointer of order) {
			const touch = touches.get(pointer);
			if (touch.segments.some((_, index) => {
				if (index === 0) return false;
				return touched.has(encodePointer(touch.segments.slice(0, index)));
			})) continue;
			const { found, value } = readPath(root, touch.segments);
			if (!found) {
				if (touch.existed) {
					ops.push({
						op: "remove",
						path: pointer
					});
					inverse.push({
						op: "add",
						path: pointer,
						value: touch.firstValue
					});
				}
				continue;
			}
			if (isPrimitive(value) && Object.is(value, touch.firstValue)) continue;
			ops.push({
				op: touch.existed ? "replace" : "add",
				path: pointer,
				value: clonePlain(value)
			});
			inverse.push(touch.existed ? {
				op: "replace",
				path: pointer,
				value: touch.firstValue
			} : {
				op: "remove",
				path: pointer
			});
		}
		return {
			ops,
			inverse
		};
	};
	n(() => {
		o(() => {
			const draft = wrap(state, [], null);
			activeDrafts.set(state, draft);
			try {
				const result = mutate(draft);
				if (isThenable(result)) {
					Promise.resolve(result).catch(() => {});
					throw new OpenServiceAsyncRecipeError();
				}
			} finally {
				activeDrafts.delete(state);
				for (const revoke of revokes) revoke();
				const recorded = flush();
				if (recorded.ops.length > 0) author(recorded);
			}
		});
	});
}
function isThenable(value) {
	return value !== null && typeof value === "object" && typeof value.then === "function";
}
var activeDrafts;
var init_patch_recorder = __esmMin((() => {
	init_signals_core_module();
	init_deepsignal_core_module();
	init_server_errors();
	init_plain_object();
	init_service_channel();
	activeDrafts = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region src/shared/open-service/query-state.ts
/**
* Expands a `(data, lifecycle)` pair into the full {@link QueryState} surfaced to subscribers.
*
* The single source of truth for the derived booleans, shared by the runtime's subscription
* emissions and `useServiceQuery`'s first-render seed so they can never drift apart. The booleans
* intentionally follow our `load` vocabulary: `isLoading` is "any load in flight" (TanStack's
* `isFetching`) and `isInitialLoading` is "the first load with nothing to show yet".
*
* Unlike TanStack Query, a subscription here can attach to a query whose `data` is already cached in
* service state (e.g. revisiting an already-extracted component): its per-subscription lifecycle
* still starts `pending`/`loading`, but `data` is present from the first emission. `isInitialLoading`
* therefore also requires `data === undefined`, so consumers gate a "nothing yet" skeleton on it
* without flashing it over already-available data while a background (re)load runs.
*/
function buildQueryState(data, lifecycle) {
	const isPending = lifecycle.status === "pending";
	const isLoading = lifecycle.loadStatus === "loading";
	return {
		data,
		error: lifecycle.error,
		status: lifecycle.status,
		loadStatus: lifecycle.loadStatus,
		isPending,
		isSuccess: lifecycle.status === "success",
		isError: lifecycle.status === "error",
		isLoading,
		isInitialLoading: isPending && isLoading && data === void 0,
		isRefreshing: isLoading && !isPending
	};
}
/** Coerces an unknown thrown value into an `Error` for the `error` field of a {@link QueryState}. */
function toError(value) {
	return value instanceof Error ? value : new Error(String(value));
}
function seedQueryState(query, input, selector) {
	try {
		const output = query.get(input);
		return buildQueryState(selector ? selector(output) : output, {
			status: "pending",
			error: void 0,
			loadStatus: "loading"
		});
	} catch (error) {
		return buildQueryState(void 0, {
			status: "error",
			error: toError(error),
			loadStatus: "idle"
		});
	}
}
var init_query_state = __esmMin((() => {}));
//#endregion
//#region src/shared/open-service/service-validation.ts
/**
* Re-throws asynchronous subscription failures on the microtask queue so they are not silently
* swallowed by promise chains started from reactive listeners.
*/
function rethrowAsync(error) {
	queueMicrotask(() => {
		throw error;
	});
}
/**
* Validates a value with a Standard Schema and returns the parsed output value.
*
* Any schema issues are wrapped in `OpenServiceValidationError`, which standardizes the operation
* metadata while preserving the schema's own expectation text for the actionable details.
*/
async function validateSchema(schema, value, meta) {
	const validationResult = await schema["~standard"].validate(value);
	if (validationResult.issues) throw new OpenServiceValidationError({
		...meta,
		issues: validationResult.issues
	});
	return validationResult.value;
}
/**
* Synchronous variant of `validateSchema` used on the sync query call path.
*
* Query input and output schemas must produce sync validation results so the public `query(input)`
* function can return a value immediately. If a schema accidentally returns a Promise, the runtime
* surfaces a dedicated error instead of silently switching to async behavior.
*/
function validateSchemaSync(schema, value, meta) {
	const validationResult = schema["~standard"].validate(value);
	if (validationResult instanceof Promise) throw new OpenServiceAsyncSchemaError({
		kind: meta.kind,
		serviceId: meta.serviceId,
		name: meta.name,
		phase: meta.phase
	});
	if (validationResult.issues) throw new OpenServiceValidationError({
		...meta,
		issues: validationResult.issues
	});
	return validationResult.value;
}
var init_service_validation = __esmMin((() => {
	init_server_errors();
}));
//#endregion
//#region src/shared/open-service/query-runtime.ts
/**
* Returns a deterministic JSON encoding so the same logical input always produces the same key.
*
* Object keys are sorted recursively so `{a:1, b:2}` and `{b:2, a:1}` hash identically. Inputs are
* expected to be JSON-safe; non-serializable values like `Date`, `Map`, or functions fall back to
* `JSON.stringify`'s defaults and may produce ambiguous keys.
*/
function stableHash(value) {
	const encode = (raw) => {
		if (raw === void 0) return { __t: "undefined" };
		if (raw === null || typeof raw !== "object") return raw;
		if (Array.isArray(raw)) return raw.map(encode);
		const sorted = {};
		for (const k of Object.keys(raw).sort()) sorted[k] = encode(raw[k]);
		return {
			__t: "object",
			value: sorted
		};
	};
	return JSON.stringify(encode(value));
}
/**
* Scopes a load key to one runtime instance for {@link inFlightLoads}.
*
* The unscoped {@link makeLoadKey} stays the identity used for cycle detection and settled-key
* bookkeeping, which are per-load-graph rather than per-runtime.
*/
function makeInFlightKey(loadScopeId, loadKey) {
	return `${loadScopeId}::${loadKey}`;
}
function makeLoadKey(serviceId, queryName, validatedInput) {
	return `${serviceId}::${queryName}::${stableHash(validatedInput)}`;
}
/**
* Surfaces the first rejected settlement as the thrown error, aggregating the rest under `cause`.
*
* Drainers use `Promise.allSettled` so one rejected dependency does not prevent siblings from
* finishing their work; this helper preserves all rejections without losing the primary one.
*/
function surfaceRejections(settlements) {
	const rejections = settlements.filter((s) => s.status === "rejected");
	if (rejections.length === 0) return;
	const [first, ...rest] = rejections.map((r) => r.reason);
	if (rest.length > 0) {
		if (first instanceof Error) {
			if (Reflect.get(first, "cause") === void 0) try {
				Reflect.set(first, "cause", { aggregated: rest });
			} catch {}
		}
	}
	throw first;
}
/**
* Drains a collector of pending load promises until no new entries appear.
*
* Each iteration snapshots the current entries, clears the collector, awaits them with
* `Promise.allSettled`, marks their keys as settled (for caller bookkeeping), then loops if the
* settled loads' bodies surfaced more entries. Caps at `MAX_DRAIN_ITERATIONS` to avoid hanging on
* pathological oscillation.
*/
async function drainCollector(collector, settledKeys, serviceId, queryName) {
	let iterations = 0;
	while (collector.size > 0) {
		if (iterations++ > MAX_DRAIN_ITERATIONS) throw new OpenServiceLoadedDrainExceededError({
			serviceId,
			name: queryName,
			iterations: MAX_DRAIN_ITERATIONS
		});
		const pending = [...collector];
		collector.clear();
		const settlements = await Promise.allSettled(pending.map((entry) => entry.promise));
		if (settledKeys) for (const entry of pending) settledKeys.add(entry.key);
		surfaceRejections(settlements);
	}
}
/**
* Detaches a value from the reactive deep-signal proxy into a plain snapshot.
*
* Used for `selector` results on the subscription path: a selector can return a live proxy slice,
* which we strip so consumers get plain, comparable data (and reads inside the `computed` register
* only the fields the selector actually touched). Primitives pass through untouched.
*
* `structuredClone` cannot clone a `Proxy`, so this uses a JSON round-trip. That is sufficient
* because open-service state is required to be JSON-serializable (the same constraint the
* static-build pipeline relies on). For plain (already-detached) values such as the whole-state
* snapshot, the runtime uses `structuredClone` directly instead.
*/
function detachSnapshot(value) {
	if (value === null || typeof value !== "object") return value;
	return JSON.parse(JSON.stringify(value));
}
/**
* Validates query input synchronously, falling through to the dedicated async-schema error if a
* schema returns a Promise.
*/
function validateQueryInput(refs, queryName, queryDef, input) {
	return validateSchemaSync(queryDef.input, input, {
		kind: "query",
		serviceId: refs.serviceId,
		name: queryName,
		phase: "input"
	});
}
function validateQueryOutput(refs, queryName, queryDef, output) {
	return validateSchemaSync(queryDef.output, output, {
		kind: "query",
		serviceId: refs.serviceId,
		name: queryName,
		phase: "output"
	});
}
/**
* Runs the query handler synchronously and returns its raw result (no output validation).
*
* The `selfQueries` parameter lets the caller swap in load-aware wrappers when running inside a
* load body or a `.loaded()` discovery pass; ordinary handler calls pass the default queries.
*/
function runHandlerSync(refs, queryName, queryDef, validatedInput, selfQueries, getService) {
	if (!queryDef.handler) throw new OpenServiceUnimplementedOperationError({
		kind: "query",
		serviceId: refs.serviceId,
		name: queryName
	});
	const handlerCtx = {
		self: {
			get state() {
				return refs.state;
			},
			queries: selfQueries
		},
		getService
	};
	return queryDef.handler(validatedInput, handlerCtx);
}
/**
* Builds the shared synchronous `get(input)` for a query: validate input → fire the load per the
* caller's policy → run the handler against `selfQueries` → validate output.
*
* The three query surfaces — the default consumer query ({@link createDefaultQuery}), the reactive
* subscription-load wrappers ({@link buildReactiveLoadQueries}), and the awaited load-body wrappers
* ({@link buildLoadWrappedQueries}) — differ only in (a) which `self.queries` map the handler sees
* and (b) how a load-backed read fires its `load`. Everything else (the validate → run → validate
* skeleton, the zero-arg input resolution) is identical, so each surface passes its own `selfQueries`
* map and `fireLoad` policy and shares this body.
*
* `fireLoad` is invoked only for queries that declare a `load`; queries without one skip it. Pass
* `selfQueries` by reference even when it is the same map being populated by the caller — `get`
* closes over the reference, which is fully built by the time any handler runs.
*/
function createQueryGet(refs, queryName, queryDef, selfQueries, fireLoad) {
	return function get(input) {
		const validatedInput = validateQueryInput(refs, queryName, queryDef, arguments.length === 0 ? void 0 : input);
		if (queryDef.load) fireLoad?.(validatedInput);
		return validateQueryOutput(refs, queryName, queryDef, runHandlerSync(refs, queryName, queryDef, validatedInput, selfQueries, refs.registryApi.getService));
	};
}
/**
* Triggers a `load` if one is not already in flight for the same key, or returns the existing
* promise so concurrent callers share the work.
*
* Returns the in-flight promise (whether newly created or reused). The body runs through
* {@link runLoadBody} and its promise is registered into {@link inFlightLoads} **before** that
* body starts; see the "register before run" comment below for why.
*
* ### Ancestor chain
*
* The parent caller passes its own ancestor chain (the load keys it is currently nested
* inside). This function extends that chain with the dependency's own key before kicking off the
* body, so any transitive read of an ancestor — e.g. `a.load` calls `b.load` which calls `a.load`
* again — short-circuits via cycle detection in {@link createDefaultQuery} and
* {@link buildLoadWrappedQueries}, rather than deadlocking on its own ancestor's promise.
*
* ### Cycle example
*
* Service exposes queries `a` and `b`; `a.load` reads `b`, `b.load` reads `a`.
*
* 1. `a.loaded()` → `triggerLoad(a, parentChain={})` → body runs with chain `{a}`.
* 2. `a.load` body calls `ctx.self.queries.b.get(...)` → wrapper calls
*    `triggerLoad(b, parentChain={a})` → body runs with chain `{a, b}`.
* 3. `b.load` body calls `ctx.self.queries.a.get(...)` → wrapper calls
*    `triggerLoad(a, parentChain={a, b})`. `a` is already in flight, so the existing promise is
*    reused. But the wrapper sees `aKey ∈ ancestorChain` and **skips** adding it to b's local
*    collector — `b` does not wait on `a`'s promise.
* 4. Both load bodies progress past their sync reads, await their commands, settle.
*/
function triggerLoad(refs, queryName, queryDef, validatedInput, loadKey, parentAncestorChain) {
	const inFlightKey = makeInFlightKey(refs.loadScopeId, loadKey);
	const existing = inFlightLoads.get(inFlightKey);
	if (existing) return existing;
	const extendedChain = new Set(parentAncestorChain);
	extendedChain.add(loadKey);
	const promise = Promise.resolve().then(() => runLoadBody(refs, queryName, queryDef, validatedInput, extendedChain)).finally(() => {
		if (inFlightLoads.get(inFlightKey) === promise) inFlightLoads.delete(inFlightKey);
	});
	inFlightLoads.set(inFlightKey, promise);
	return promise;
}
/**
* Executes one `load` invocation with its own local collector and a wrapped `self`.
*
* Each `load` invocation gets its **own** collector and its **own** map of wrapped queries. This
* matters because the wrappers close over the collector and ancestor chain that belong to this
* particular load — a different load running concurrently for a different key has a different
* collector and a different chain, so the same `defaultQuery` cannot serve both.
*
* The wrapper around `self.queries` registers transitively triggered loads into the local
* collector. After the user's load body resolves, we still await that collector via
* {@link drainCollector} so the returned promise only resolves once every dependency the load
* body touched has also settled. That is what gives `.loaded()` its transitive guarantee through
* async load bodies: an outer caller awaiting this load promise is, by construction, also
* waiting for all descendant loads triggered by self.queries reads.
*
* Cross-service `ctx.getService(id).queries.*` calls are intentionally **not** wrapped — that
* would require recursively wrapping the registry's runtime services and would entangle load
* scoping across service boundaries. Authors must use `.loaded()` explicitly when they need a
* cross-service dependency awaited from inside a load body.
*/
async function runLoadBody(refs, queryName, queryDef, validatedInput, ancestorChain) {
	if (!queryDef.load) return;
	const collector = /* @__PURE__ */ new Set();
	const loadCtx = {
		self: {
			get state() {
				return refs.state;
			},
			queries: buildLoadWrappedQueries(refs, ancestorChain, collector),
			commands: refs.getLoadCommands()
		},
		getService: refs.registryApi.getService
	};
	await Promise.resolve(queryDef.load(validatedInput, loadCtx));
	await drainCollector(collector, void 0, refs.serviceId, queryName);
}
function warnLoadReplacedByOwnWrite(serviceId, queryName) {
	if (globalThis.CONFIG_TYPE === "PRODUCTION") return;
	once.warn(`The load of query "${serviceId}.${queryName}" re-ran because of its own write, and dropped the later writes of the first run. Move the check that reads this state from the load into the command, and let the load just call the command.`);
}
/**
* Runs a query's `load` as the body of a subscription's reactive effect.
*
* Unlike {@link runLoadBody}, this is invoked synchronously inside an `effect()`, so the external
* signals the load reads in its synchronous prefix are tracked — when they later change, the effect
* re-runs and the load re-fires, turning it into a reactive async resource. Loads are therefore an
* idempotent warming step (the documented guideline, now a hard contract); one-shot side effects
* belong in a command.
*
* Writes go through gated commands: once a newer run started (deps changed again), `gate` drops this
* run's later writes, so a slow stale load cannot clobber the newer result. Sibling reads use the
* default queries — their loads fire-and-forget — so transitive dependencies stay warm without the
* `.loaded()` drain, which is only meaningful for awaited pulls.
*/
async function runReactiveLoad(refs, queryName, queryDef, validatedInput, gate) {
	if (!queryDef.load) return;
	const loadCtx = {
		self: {
			get state() {
				return refs.state;
			},
			queries: refs.reactiveLoadQueries,
			commands: refs.buildGatedCommands(gate)
		},
		getService: refs.registryApi.getService
	};
	await Promise.resolve(queryDef.load(validatedInput, loadCtx));
}
/**
* Builds the `ctx.self.queries` map used inside a *reactive subscription load* body.
*
* `.get()` here fires the dependency's `load` fire-and-forget (deduped via {@link inFlightLoads}),
* scoped to the reactive-load context only, so a plain consumer `.get()` stays a pure read. There is no drain: a subscription
* does not await its dependencies, it re-fires reactively when their tracked state changes.
*/
function buildReactiveLoadQueries(refs) {
	const wrappedQueries = {};
	for (const [name, queryDef] of refs.queryDefinitions) {
		const defaultQuery = refs.defaultQueries[name];
		wrappedQueries[name] = {
			get: createQueryGet(refs, name, queryDef, wrappedQueries, (validatedInput) => {
				const loadKey = makeLoadKey(refs.serviceId, name, validatedInput);
				triggerLoad(refs, name, queryDef, validatedInput, loadKey, EMPTY_SET).catch(rethrowAsync);
			}),
			loaded: defaultQuery.loaded,
			subscribe: defaultQuery.subscribe
		};
	}
	return wrappedQueries;
}
/**
* Builds the wrapped `self.queries` map exposed inside one load body.
*
* The returned map shadows the runtime's default query map. Each wrapped call still validates
* input, fires the dependency's `load` via {@link triggerLoad}, and runs the same sync handler —
* but it also **registers the dependency's load promise into the load-local collector** so
* `runLoadBody`'s drain can await it before returning. The wrappers therefore turn an ordinary
* sync read of a dependency into "fire load + remember it for the outer drain to wait on."
*
* ### Why one map per load invocation?
*
* Two separate `load` calls (different keys, possibly different services) have different
* `ancestorChain` sets and different `collector` instances. Each wrapped function closes over
* those values, so the maps cannot be reused — they are recreated cheaply per invocation. Inside
* a single load body, all nested handler reads share **this same** wrapped map (the closure
* captures `wrappedQueries` from this scope), so transitive dependency reads continue to register
* against the same collector.
*
* ### Cycle detection
*
* If the dependency's load key is already on this load's ancestor chain, we still call
* `triggerLoad` (it returns the in-flight promise) but we **skip** adding it to the collector.
* Adding it would deadlock: the outer load's drain would wait on its own ancestor's promise,
* which is itself waiting on this load. See {@link triggerLoad}'s walkthrough for a concrete
* `a → b → a` example.
*
* ### `.loaded()` and `.subscribe` on the wrapped queries
*
* `.loaded()` on a wrapped query forwards the **current** ancestor chain so a load body author
* can write `await ctx.self.queries.foo.loaded(input)` and trust that the resulting drain
* inherits the right cycle-protection set. `.subscribe` is passed through unchanged because
* subscriptions are never part of a load drain — they have their own lifecycle.
*/
function buildLoadWrappedQueries(refs, ancestorChain, collector) {
	const wrappedQueries = {};
	for (const [name, queryDef] of refs.queryDefinitions) {
		const defaultQuery = refs.defaultQueries[name];
		wrappedQueries[name] = {
			get: createQueryGet(refs, name, queryDef, wrappedQueries, (validatedInput) => {
				const loadKey = makeLoadKey(refs.serviceId, name, validatedInput);
				const promise = triggerLoad(refs, name, queryDef, validatedInput, loadKey, ancestorChain);
				if (!ancestorChain.has(loadKey)) collector.add({
					key: loadKey,
					promise
				});
			}),
			loaded(input) {
				return runLoaded(refs, name, queryDef, arguments.length === 0 ? void 0 : input, ancestorChain);
			},
			subscribe: defaultQuery.subscribe
		};
	}
	return wrappedQueries;
}
/**
* Implements `query.loaded(input)`.
*
* Returns a promise that resolves to the validated handler output once this query's `load` and
* every dependency the handler transitively reads has settled.
*
* ### Algorithm
*
* 1. **Setup** — validate input, build the session (`ancestorChain` extended with this load key,
*    an empty `collector`, an empty `settledKeys`). The ancestor chain inherits from
*    `parentAncestorChain` when this is called from inside a wrapped query (so the inner
*    `.loaded()` shares cycle protection with the outer load body).
*
* 2. **Fire own load** — if this query has a `load` hook, push its in-flight promise into
*    `session.collector`. Skip if the key is already on the parent's ancestor chain (we are
*    inside that load already; we cannot deadlock on ourselves).
*
* 3. **Drain + discover loop**, up to {@link MAX_DRAIN_ITERATIONS} times:
*    - Inner loop: while `session.collector` has entries, snapshot them, clear, await with
*      `Promise.allSettled`, mark their keys in `session.settledKeys`, surface rejections.
*    - Run the handler synchronously under `activeHandlerLoadSession = session` (a discovery
*      pass). Sync reads of dependencies inside the handler go through {@link createDefaultQuery}
*      and register any non-settled, non-ancestor load into `session.collector`.
*    - If the handler threw, swallow (state might still be partial; a later iteration may fix it).
*    - If the handler added nothing to the collector, we have converged — exit the loop.
*
* 4. **Return** — run the handler one final time under the same session (so dependency reads
*    respect `settledKeys` and do not refire loads) and return the validated output. This is the
*    value the caller sees. If state is still incomplete at this point the handler may throw, and
*    that throw propagates.
*
* ### Worked example: `bar.loaded(input)` where `bar.handler` reads `foo`
*
* Assume `bar` has no `load` of its own; `foo` does.
*
* - **Setup**: session = `{ ancestorChain: {barKey}, collector: ∅, settledKeys: ∅ }`. No own load
*   to fire (`bar.load` is undefined).
* - **Iteration 1**:
*   - Inner drain: collector is empty, skip.
*   - Discovery pass: handler runs, reads `ctx.self.queries.foo.get(...)`. The default `foo` query
*     sees `activeHandlerLoadSession === session`, sees that `fooKey` is neither in
*     `ancestorChain` nor in `settledKeys`, and fires + registers foo's load into
*     `session.collector`. The handler returns (possibly with stale state).
*   - `hasMoreWork = true` (collector now has one entry).
* - **Iteration 2**:
*   - Inner drain: `await Promise.allSettled([fooPromise])`, mark `fooKey` settled, surface any
*     rejection.
*   - Discovery pass: handler runs again. The default `foo` query is now in `settledKeys`, so
*     it fires nothing and the collector stays empty.
*   - `hasMoreWork = false`; exit.
* - **Final**: run handler once more (state is now populated by foo's load), validate, return.
*
* The same machinery handles deeper chains — every settled load may have populated state that
* causes the handler to read **more** queries on the next iteration. The loop keeps draining
* until the read set stabilizes.
*/
async function runLoaded(refs, queryName, queryDef, rawInput, parentAncestorChain = EMPTY_SET) {
	const validatedInput = validateQueryInput(refs, queryName, queryDef, rawInput);
	const loadKey = makeLoadKey(refs.serviceId, queryName, validatedInput);
	const ancestorChain = new Set(parentAncestorChain);
	ancestorChain.add(loadKey);
	const session = {
		ancestorChain,
		collector: /* @__PURE__ */ new Set(),
		settledKeys: /* @__PURE__ */ new Set()
	};
	if (queryDef.load && !parentAncestorChain.has(loadKey)) {
		const promise = triggerLoad(refs, queryName, queryDef, validatedInput, loadKey, parentAncestorChain);
		session.collector.add({
			key: loadKey,
			promise
		});
	}
	let iterations = 0;
	let hasMoreWork = true;
	while (hasMoreWork) {
		if (iterations++ > MAX_DRAIN_ITERATIONS) throw new OpenServiceLoadedDrainExceededError({
			serviceId: refs.serviceId,
			name: queryName,
			iterations: MAX_DRAIN_ITERATIONS
		});
		while (session.collector.size > 0) {
			const pending = [...session.collector];
			session.collector.clear();
			const settlements = await Promise.allSettled(pending.map((entry) => entry.promise));
			for (const entry of pending) session.settledKeys.add(entry.key);
			surfaceRejections(settlements);
		}
		const previousSession = activeHandlerLoadSession;
		activeHandlerLoadSession = session;
		try {
			runHandlerSync(refs, queryName, queryDef, validatedInput, refs.defaultQueries, refs.registryApi.getService);
		} catch {} finally {
			activeHandlerLoadSession = previousSession;
		}
		hasMoreWork = session.collector.size > 0;
	}
	const previousSession = activeHandlerLoadSession;
	activeHandlerLoadSession = session;
	try {
		return validateQueryOutput(refs, queryName, queryDef, runHandlerSync(refs, queryName, queryDef, validatedInput, refs.defaultQueries, refs.registryApi.getService));
	} finally {
		activeHandlerLoadSession = previousSession;
	}
}
/**
* Creates the default query object exposed on the service runtime as `service.queries.foo`.
*
* The returned object is what consumers use directly **and** what handlers see in
* `ctx.self.queries.foo` (load bodies see a different, wrapped version — see
* {@link buildLoadWrappedQueries}). Its surface:
*
* - **`get(input)`** validates input synchronously, runs the handler against current state, and
*   returns the validated result. It does **not** fire this query's `load` for an ordinary consumer
*   read. The one exception is dependency tracking: when a `.get()` runs inside a `.loaded()`
*   discovery pass (`activeHandlerLoadSession` set), it fires + registers the load into the session
*   collector so the outer drain awaits it (skipping cycles and already-settled keys). Reactive
*   subscription loads warm dependencies through {@link buildReactiveLoadQueries} instead.
* - **`loaded(input)`** drives the full `.loaded()` drain.
* - **`subscribe(...)`** sets up a reactive subscription (this is what fires the reactive `load`).
*/
function createDefaultQuery(refs, queryName, queryDef) {
	const resolveInput = (input, argsLength) => argsLength === 0 ? void 0 : input;
	const get = createQueryGet(refs, queryName, queryDef, refs.defaultQueries, (validatedInput) => {
		const session = activeHandlerLoadSession;
		if (!session) return;
		const loadKey = makeLoadKey(refs.serviceId, queryName, validatedInput);
		if (!session.ancestorChain.has(loadKey) && !session.settledKeys.has(loadKey)) {
			const promise = triggerLoad(refs, queryName, queryDef, validatedInput, loadKey, session.ancestorChain);
			session.collector.add({
				key: loadKey,
				promise
			});
		}
	});
	const subscribe = ((...args) => {
		if (args.length === 1 && typeof args[0] === "function") return subscribeToQuery(refs, queryName, queryDef, void 0, void 0, args[0]);
		if (args.length === 2 && typeof args[0] === "function" && typeof args[1] === "function") return subscribeToQuery(refs, queryName, queryDef, void 0, args[0], args[1]);
		const [input, selectorOrCallback, maybeCallback] = args;
		return subscribeToQuery(refs, queryName, queryDef, input, maybeCallback ? selectorOrCallback : void 0, maybeCallback ?? selectorOrCallback);
	});
	return {
		get,
		loaded(input) {
			return runLoaded(refs, queryName, queryDef, resolveInput(input, arguments.length));
		},
		subscribe
	};
}
/**
* Subscribes to a query by running its handler inside a deep-signal-aware `computed()` and
* notifying through an `effect()`. The callback receives a {@link QueryState} combining the current
* `data` (the synchronous handler result, or the selected slice) with the per-subscription `load`
* lifecycle (`status` / `loadStatus` / `error`).
*
* The first emission is **synchronous**: `subscribe()` invokes the callback once with the current
* {@link QueryState} before it returns the unsubscribe handle. The runtime kicks `load` off in the
* background but does not wait for it — subscribers see the current state immediately (a load-backed
* query already reads `loading`, since the reactive-load effect runs synchronously here) and
* follow-up emissions as the load settles (or re-fires) and tracked state changes.
*
* Three layers keep emissions precise:
*
* 1. **Fine-grained reads** — the handler (and the optional `selector`) read through the deep-signal
*    proxy, so the computed only re-runs when the exact fields it touched change. A write to an
*    unrelated key or field never re-runs the handler.
* 2. **Lifecycle signal** — a separate per-subscription signal carries `status`/`loadStatus`/`error`,
*    updated by the reactive-load effect. The emit effect reads both it and the data computed, so a
*    status change (e.g. a background re-load) fires the callback even when the selected slice is
*    unchanged.
* 3. **Object dedup** — the whole emitted `QueryState` is compared with the previously emitted one via
*    `isEqual`; a re-run that produces a deeply-equal state (e.g. a load rewriting an equal payload
*    with no status change) does not fire the callback.
*
* Error sources all surface as `status: 'error'` (keeping the last successful `data`): input
* validation failure, a synchronous handler / output-validation throw, and a `load` rejection.
*/
function subscribeToQuery(refs, queryName, queryDef, rawInput, selector, callback) {
	let active = true;
	let validatedInput;
	try {
		validatedInput = validateQueryInput(refs, queryName, queryDef, rawInput);
	} catch (error) {
		callback(buildQueryState(void 0, {
			status: "error",
			error: toError(error),
			loadStatus: "idle"
		}));
		return () => {
			active = false;
		};
	}
	const lifecycle = y({
		status: queryDef.load ? "pending" : "success",
		error: void 0,
		loadStatus: "idle"
	});
	let loadTeardown;
	if (queryDef.load) {
		let epoch = 0;
		loadTeardown = j(() => {
			const myEpoch = ++epoch;
			const isCurrent = () => myEpoch === epoch;
			let replacedByOwnWrite = false;
			const gate = (write) => {
				if (!isCurrent()) {
					if (replacedByOwnWrite) warnLoadReplacedByOwnWrite(refs.serviceId, queryName);
					return;
				}
				try {
					write();
				} finally {
					replacedByOwnWrite = !isCurrent();
				}
			};
			const previous = o(() => lifecycle.value);
			lifecycle.value = {
				status: previous.status,
				error: previous.error,
				loadStatus: "loading"
			};
			runReactiveLoad(refs, queryName, queryDef, validatedInput, gate).then(() => {
				if (!isCurrent()) return;
				lifecycle.value = {
					status: "success",
					error: void 0,
					loadStatus: "idle"
				};
			}, (error) => {
				if (!isCurrent()) return;
				lifecycle.value = {
					status: "error",
					error: toError(error),
					loadStatus: "idle"
				};
			});
		});
	}
	const comp = g$1(() => {
		const output = runHandlerSync(refs, queryName, queryDef, validatedInput, refs.defaultQueries, refs.registryApi.getService);
		if (selector) {
			const validated = o(() => validateQueryOutput(refs, queryName, queryDef, output));
			const selected = selector(output);
			if (selected !== null && typeof selected === "object") JSON.stringify(selected);
			return detachSnapshot(selector(validated));
		}
		return detachSnapshot(validateQueryOutput(refs, queryName, queryDef, output));
	});
	let hasEmitted = false;
	let lastEmitted;
	let lastData;
	const teardown = j(() => {
		const life = lifecycle.value;
		let data;
		let status = life.status;
		let error = life.error;
		try {
			data = comp.value;
			lastData = data;
		} catch (handlerError) {
			data = lastData;
			status = "error";
			error = toError(handlerError);
		}
		if (!active) return;
		const state = buildQueryState(data, {
			status,
			error,
			loadStatus: life.loadStatus
		});
		if (hasEmitted && isEqual(state, lastEmitted)) return;
		hasEmitted = true;
		lastEmitted = state;
		callback(state);
	});
	return () => {
		active = false;
		teardown();
		loadTeardown?.();
	};
}
/** Builds the runtime query map for one service runtime. */
function buildQueries(refs) {
	const result = {};
	for (const [name, queryDef] of refs.queryDefinitions) result[name] = createDefaultQuery(refs, name, queryDef);
	return result;
}
var MAX_DRAIN_ITERATIONS, inFlightLoads, nextLoadScopeSequence, nextLoadScopeId, activeHandlerLoadSession, EMPTY_SET;
var init_query_runtime = __esmMin((() => {
	init_client_logger();
	init_signals_core_module();
	init_predicate();
	init_server_errors();
	init_query_state();
	init_service_validation();
	MAX_DRAIN_ITERATIONS = 32;
	inFlightLoads = /* @__PURE__ */ new Map();
	nextLoadScopeSequence = 0;
	nextLoadScopeId = () => String(nextLoadScopeSequence += 1);
	EMPTY_SET = /* @__PURE__ */ new Set();
}));
//#endregion
//#region src/shared/open-service/json-patch.ts
function parentAt(root, segments) {
	let current = root;
	for (let index = 0; index < segments.length - 1; index += 1) {
		const segment = segments[index];
		if (isReservedKey(segment) || !isPlainObject$1(current) || !hasOwn(current, segment)) return;
		current = current[segment];
	}
	if (!isPlainObject$1(current)) return;
	return {
		parent: current,
		key: segments[segments.length - 1]
	};
}
/**
* Apply an RFC 6902 document onto `target` in place.
*
* `add` and `replace` both upsert. `remove` of a missing key calls `onMissingRemove` and continues.
* Incoming values are cloned. On success, `inverse` is reverse apply order. A missing parent, reserved
* key, or invalid pointer rolls back every op already applied in this call and returns
* `{ ok: false, path }` for that pointer. Any other throw also rolls back and reports
* `{ ok: false, path }` for the op that threw.
*/
function applyJsonPatch(target, patch, onMissingRemove) {
	const undo = [];
	const inverse = [];
	let currentPath = "";
	try {
		for (const operation of patch) {
			currentPath = operation.path;
			applyOne(target, operation, undo, inverse, onMissingRemove);
		}
		return {
			ok: true,
			inverse: inverse.toReversed()
		};
	} catch (error) {
		for (const revert of undo.toReversed()) revert();
		if (error instanceof MissingParentError) return {
			ok: false,
			path: error.path
		};
		return {
			ok: false,
			path: currentPath
		};
	}
}
function applyOne(target, operation, undo, inverse, onMissingRemove) {
	if (!isRfc6901Pointer(operation.path)) throw new MissingParentError(operation.path);
	const location = parentAt(target, decodePointer(operation.path));
	if (!location || isReservedKey(location.key)) throw new MissingParentError(operation.path);
	const { parent, key } = location;
	switch (operation.op) {
		case "add":
		case "replace": {
			const existed = hasOwn(parent, key);
			const previous = existed ? clonePlain(parent[key]) : void 0;
			parent[key] = clonePlain(operation.value);
			undo.push(() => {
				if (existed) parent[key] = previous;
				else delete parent[key];
			});
			if (existed) inverse.push({
				op: "replace",
				path: operation.path,
				value: previous
			});
			else inverse.push({
				op: "remove",
				path: operation.path
			});
			return;
		}
		case "remove": {
			if (!hasOwn(parent, key)) {
				onMissingRemove(operation.path);
				return;
			}
			const previous = clonePlain(parent[key]);
			delete parent[key];
			undo.push(() => {
				parent[key] = previous;
			});
			inverse.push({
				op: "add",
				path: operation.path,
				value: previous
			});
			return;
		}
		default:
	}
}
var MissingParentError;
var init_json_patch = __esmMin((() => {
	init_plain_object();
	init_service_channel();
	MissingParentError = class extends Error {
		constructor(path) {
			super(`Missing parent for JSON Patch path ${path}`);
			this.name = "MissingParentError";
			this.path = path;
		}
	};
}));
//#endregion
//#region src/shared/open-service/service-sync.ts
function vectorCounter(vector, runtimeId) {
	return vector[runtimeId] ?? 0;
}
function isEmptyVector(vector) {
	for (const value of Object.values(vector)) if (value > 0) return false;
	return true;
}
/**
* Returns whether `left` dominates `right`.
*
* Every counter in `left` is at least the matching counter in `right`, and at least one is
* greater. An empty `right` is dominated by any non-empty `left`, so a fresh joiner hears from
* every peer that has writes. Two empty vectors do not dominate each other.
*/
function vectorDominates(left, right) {
	if (isEmptyVector(right)) return !isEmptyVector(left);
	const keys = /* @__PURE__ */ new Set([...Object.keys(left), ...Object.keys(right)]);
	let greater = false;
	for (const key of keys) {
		const leftCount = vectorCounter(left, key);
		const rightCount = vectorCounter(right, key);
		if (leftCount < rightCount) return false;
		if (leftCount > rightCount) greater = true;
	}
	return greater;
}
function vectorsEqual(left, right) {
	const keys = /* @__PURE__ */ new Set([...Object.keys(left), ...Object.keys(right)]);
	for (const key of keys) if (vectorCounter(left, key) !== vectorCounter(right, key)) return false;
	return true;
}
function vectorsConcurrent(left, right) {
	return !vectorDominates(left, right) && !vectorDominates(right, left) && !vectorsEqual(left, right);
}
function formatFrontier(frontier) {
	const body = Object.keys(frontier.vector).sort().map((key) => `${key}:${frontier.vector[key]}`).join(",");
	return `{clock:${frontier.clock} vector:{${body}}}`;
}
/**
* Canonical entry order: ascending `seq`, then ascending `runtimeId` with plain string comparison.
*
* "Later in the log", "greater stamp", and "wins the path" coincide.
*/
function compareStamps(left, right) {
	if (left.seq !== right.seq) return left.seq < right.seq ? -1 : 1;
	if (left.runtimeId !== right.runtimeId) return left.runtimeId < right.runtimeId ? -1 : 1;
	return 0;
}
/**
* Applies `source` onto `target` in place while preserving object identity for unchanged branches.
*
* Open-service runtimes expose their state through deep-signal proxies. Replacing the whole state
* object for every incoming snapshot would invalidate all subscriptions, even when only one nested
* field changed. This helper instead walks both objects and mutates `target` only where values
* differ:
*
* - Recurses into plain objects so nested deep-signal subscriptions stay attached.
* - Replaces arrays wholesale, matching the sync contract that arrays are values rather than maps.
* - Assigns primitives only when changed to avoid spurious signal invalidation.
* - Copies `source` through `clonePlain` first, like every other value on its way into state, so
*   untrusted channel payloads and static files cannot pollute prototypes or write deepsignal's
*   `$` accessors, and state never shares an object with the payload.
*
* The `preserveMissingKeys` mode selects the source contract:
*
* - `false` means `source` is a full peer snapshot. Keys missing from `source` are deleted from
*   `target`, allowing deletions to propagate through cross-peer sync.
* - `true` means `source` is a partial static snapshot. Keys missing from `source` are left alone
*   so snapshots for one static query input do not erase state populated by other inputs.
*/
function applyStatePatch(target, source, options) {
	mergeInto(target, clonePlain(source), options.preserveMissingKeys);
}
function mergeInto(target, source, preserveMissingKeys) {
	if (!preserveMissingKeys) {
		for (const key of Object.keys(target)) if (!hasOwn(source, key)) delete target[key];
	}
	for (const key of Object.keys(source)) {
		const sourceValue = source[key];
		const targetValue = target[key];
		if (isPlainObject$1(sourceValue) && isPlainObject$1(targetValue)) mergeInto(targetValue, sourceValue, preserveMissingKeys);
		else if (targetValue !== sourceValue) target[key] = sourceValue;
	}
}
/**
* Builds a {@link Reconciler} bound to one runtime's state.
*
* `setState` is the runtime's `applyLocal` adapted to a plain record, so placing and installing never
* author an entry. `serviceId` names the service in warnings. `window` bounds the Log.
*/
function createReconciler(options) {
	const { serviceId, setState } = options;
	const logWindow = {
		maxAgeMs: options.window?.maxAgeMs ?? 15e3,
		maxEntries: options.window?.maxEntries ?? 256
	};
	let clock = 0;
	let snapshotSeq = 0;
	const vector = /* @__PURE__ */ new Map();
	const log = [];
	const logKeys = /* @__PURE__ */ new Set();
	const dropped = /* @__PURE__ */ new Set();
	let floor;
	const vectorRecord = () => Object.fromEntries(vector);
	const vectorOf = (runtimeId) => vector.get(runtimeId) ?? 0;
	const hasStamp = (stamp) => logKeys.has(entryStampKey(stamp));
	const silentMissingRemove = () => void 0;
	const patchPaths = (patch) => patch.map((operation) => operation.path).join(",");
	const undoEntry = (current, entry) => {
		const result = applyJsonPatch(current, entry.inverse, silentMissingRemove);
		if (!result.ok) logger.warn(`Open-service sync: undo failed. service=${serviceId} stamp=${entryStampKey(entry.stamp)} path=${result.path} command=${entry.command}`);
	};
	const redoEntry = (current, entry) => {
		const result = applyJsonPatch(current, entry.patch, silentMissingRemove);
		entry.inverse = result.ok ? result.inverse : [];
		if (!result.ok) logger.warn(`Open-service sync: replay failed. service=${serviceId} stamp=${entryStampKey(entry.stamp)} path=${result.path} command=${entry.command}`);
	};
	const undoToIndex = (current, index) => {
		const undone = [];
		for (let cursor = log.length - 1; cursor >= index; cursor -= 1) {
			const entry = log[cursor];
			undoEntry(current, entry);
			undone.push(entry);
		}
		return undone;
	};
	const redoUndone = (current, undone) => {
		for (let cursor = undone.length - 1; cursor >= 0; cursor -= 1) redoEntry(current, undone[cursor]);
	};
	const insertIndexFor = (stamp) => {
		let index = 0;
		while (index < log.length && compareStamps(log[index].stamp, stamp) < 0) index += 1;
		return index;
	};
	const tryAdvanceVector = (stamp) => {
		if (stamp.counter !== vectorOf(stamp.runtimeId) + 1) return;
		const counters = /* @__PURE__ */ new Set();
		for (const entry of log) if (entry.stamp.runtimeId === stamp.runtimeId) counters.add(entry.stamp.counter);
		let next = stamp.counter;
		while (counters.has(next + 1)) next += 1;
		vector.set(stamp.runtimeId, next);
	};
	const evict = (now) => {
		const minKeepIndex = Math.max(0, log.length - logWindow.maxEntries);
		const kept = [];
		for (let index = 0; index < log.length; index += 1) {
			const entry = log[index];
			const amongNewest = index >= minKeepIndex;
			const young = now - entry.appliedAt < logWindow.maxAgeMs;
			if (amongNewest || young) kept.push(entry);
			else {
				logKeys.delete(entryStampKey(entry.stamp));
				if (floor === void 0 || compareStamps(entry.stamp, floor) > 0) floor = entry.stamp;
			}
		}
		if (kept.length === log.length) return;
		log.length = 0;
		log.push(...kept);
	};
	const remember = (entry) => {
		logKeys.add(entryStampKey(entry.stamp));
		tryAdvanceVector(entry.stamp);
		evict(entry.appliedAt);
	};
	const appendOrInsert = (entry, index) => {
		if (index === log.length) log.push(entry);
		else log.splice(index, 0, entry);
		remember(entry);
	};
	const advanceClock = (seq) => {
		if (seq > clock) clock = seq;
	};
	return {
		get clock() {
			return clock;
		},
		get vector() {
			return vectorRecord();
		},
		get frontier() {
			return {
				vector: vectorRecord(),
				clock
			};
		},
		get log() {
			return log.map(({ stamp, command, patch }) => ({
				stamp,
				command,
				patch
			}));
		},
		has(stamp) {
			return hasStamp(stamp);
		},
		advanceLocal(runtimeId, authored) {
			const stamp = {
				seq: clock + 1,
				runtimeId,
				counter: vectorOf(runtimeId) + 1
			};
			advanceClock(stamp.seq);
			const now = Date.now();
			const entry = {
				stamp,
				command: authored.command,
				patch: [...authored.patch],
				inverse: [...authored.inverse],
				appliedAt: now
			};
			appendOrInsert(entry, log.length);
			return stamp;
		},
		tryInstall(frontier, state) {
			advanceClock(frontier.clock);
			const localVector = vectorRecord();
			if (!vectorDominates(frontier.vector, localVector)) return vectorsConcurrent(frontier.vector, localVector) ? "concurrent" : "not-ahead";
			snapshotSeq = frontier.clock;
			const remaining = [];
			for (const entry of log) {
				if (entry.stamp.counter <= vectorCounter(frontier.vector, entry.stamp.runtimeId)) continue;
				if (entry.stamp.seq <= frontier.clock) {
					logger.warn(`Open-service sync: uncovered entry at or below the reply clock dropped on install. service=${serviceId} stamp=${entryStampKey(entry.stamp)} clock=${frontier.clock} paths=${patchPaths(entry.patch)} command=${entry.command}`);
					continue;
				}
				remaining.push(entry);
			}
			setState((current) => {
				applyStatePatch(current, state, { preserveMissingKeys: false });
				logKeys.clear();
				dropped.clear();
				log.length = 0;
				floor = void 0;
				vector.clear();
				for (const [runtimeId, counter] of Object.entries(frontier.vector)) if (counter > 0) vector.set(runtimeId, counter);
				for (const entry of remaining) {
					const replayed = { ...entry };
					redoEntry(current, replayed);
					log.push(replayed);
					remember(replayed);
				}
			});
			return "installed";
		},
		tryPlaceEntry(incoming) {
			const { stamp, command, patch } = incoming;
			const key = entryStampKey(stamp);
			advanceClock(stamp.seq);
			if (hasStamp(stamp) || dropped.has(key) || stamp.counter <= vectorOf(stamp.runtimeId)) return "duplicate";
			if (stamp.seq <= snapshotSeq || floor && compareStamps(stamp, floor) <= 0) {
				const floorLabel = floor ? `,${entryStampKey(floor)}` : "";
				logger.warn(`Open-service sync: entry beyond the log window. service=${serviceId} stamps=${key}${floorLabel} paths=${patchPaths(patch)} command=${command}`);
				dropped.add(key);
				return "beyond-window";
			}
			const gap = stamp.counter > vectorOf(stamp.runtimeId) + 1;
			const index = insertIndexFor(stamp);
			const now = Date.now();
			let failedPath;
			setState((current) => {
				let inverse = [];
				const undone = index === log.length ? [] : undoToIndex(current, index);
				const result = applyJsonPatch(current, patch, (path) => {
					logger.debug(`Open-service sync: remove of missing key. service=${serviceId} stamp=${key} path=${path} command=${command}`);
				});
				if (result.ok) inverse = result.inverse;
				else failedPath = result.path;
				redoUndone(current, undone);
				appendOrInsert({
					stamp,
					command,
					patch: [...patch],
					inverse,
					appliedAt: now
				}, index);
			});
			if (failedPath !== void 0) logger.warn(`Open-service sync: entry did not apply, kept as a no-op. service=${serviceId} stamp=${key} path=${failedPath} command=${command}`);
			if (gap) logger.warn(`Open-service sync: gap in writer counters. service=${serviceId} stamps=${key} paths=${patchPaths(patch)} command=${command}`);
			return gap ? "gap" : failedPath !== void 0 ? "unapplied" : "accepted";
		}
	};
}
var init_service_sync = __esmMin((() => {
	init_client_logger();
	init_json_patch();
	init_plain_object();
	init_service_channel();
}));
//#endregion
//#region src/shared/open-service/service-runtime.ts
/**
* Resolves which serialized static-state file should back a query input.
*
* The returned value is a logical slash-separated store key scoped under the service id, not a raw
* filesystem path.
*/
function normalizeStaticStoragePath(serviceId, name, rawPath) {
	const segments = rawPath.replaceAll("\\", "/").split("/").filter((segment) => segment.length > 0 && segment !== ".");
	if (segments.length === 0 || segments.some((segment) => segment === "..")) throw new OpenServiceInvalidStaticPathError({
		serviceId,
		name,
		path: rawPath
	});
	return segments.join("/");
}
function resolveStaticPath(serviceId, name, queryDef, input) {
	return `${serviceId}/${normalizeStaticStoragePath(serviceId, name, queryDef.staticPath(input))}`;
}
/**
* Builds the runtime command map from the declarative command definitions.
*
* Each runtime command validates raw caller input, invokes the handler with parsed values, and
* validates the resolved output before returning it to the caller.
*/
function buildCommands(serviceId, commands, createCommandCtx) {
	return Object.fromEntries(Object.entries(commands).map(([name, def]) => {
		return [name, async (input) => {
			if (!def.handler) throw new OpenServiceUnimplementedOperationError({
				kind: "command",
				serviceId,
				name
			});
			const validatedInput = await validateSchema(def.input, input, {
				kind: "command",
				serviceId,
				name,
				phase: "input"
			});
			const output = await def.handler(validatedInput, createCommandCtx(name));
			return validateSchema(def.output, output, {
				kind: "command",
				serviceId,
				name,
				phase: "output"
			});
		}];
	}));
}
/**
* When a browser static loader is active, queries with `staticPath` fetch prebuilt JSON instead of
* running their authored `load` hook (which typically invokes server-only commands).
*/
function buildQueryDefinitionsWithStaticLoader(serviceId, queries, staticLoader, applyLocal) {
	return new Map(Object.entries(queries).map(([name, queryDef]) => {
		if (!queryDef.staticPath) return [name, queryDef];
		const { staticPath } = queryDef;
		return [name, {
			...queryDef,
			load: async (input) => {
				const snapshot = await staticLoader(resolveStaticPath(serviceId, name, { staticPath }, input), {
					serviceId,
					queryName: name,
					input
				});
				applyLocal((state) => {
					applyStatePatch(state, snapshot, { preserveMissingKeys: true });
				});
			}
		}];
	}));
}
/**
* Creates the full runtime backing for a service definition.
*
* Callers must supply the registry API that query and command contexts should expose.
*/
function createServiceRuntime(def, runtimeOptions, initialState = def.initialState) {
	const rawState = clonePlain(initialState);
	const state = l(rawState);
	const getStateSnapshot = () => structuredClone(rawState);
	const { registryApi, staticLoader } = runtimeOptions;
	let author = () => {};
	const applyLocal = (mutate) => {
		n(() => {
			mutate(state);
		});
	};
	const writeState = (command, mutate) => {
		recordPatch(state, mutate, (recorded) => author({
			command,
			...recorded
		}));
	};
	const defaultQueries = {};
	const reactiveLoadQueries = {};
	const createCommandSelf = (setState, commandsForSelf) => ({
		get state() {
			return state;
		},
		setState,
		queries: defaultQueries,
		get commands() {
			return commandsForSelf();
		}
	});
	const commands = buildCommands(def.id, def.commands, (commandName) => ({
		self: createCommandSelf((mutate) => writeState(commandName, mutate), () => commands),
		getService: registryApi.getService
	}));
	let loadCommands = commands;
	const remoteCommandNames = /* @__PURE__ */ new Set();
	const queryDefinitions = staticLoader ? buildQueryDefinitionsWithStaticLoader(def.id, def.queries, staticLoader, applyLocal) : new Map(Object.entries(def.queries));
	const buildGatedCommands = (gate) => {
		const gated = buildCommands(def.id, def.commands, (commandName) => ({
			self: createCommandSelf((mutate) => gate(() => writeState(commandName, mutate)), () => gated),
			getService: registryApi.getService
		}));
		if (remoteCommandNames.size === 0) return gated;
		return Object.fromEntries(Object.keys(def.commands).map((name) => [name, remoteCommandNames.has(name) ? loadCommands[name] : gated[name]]));
	};
	const loadScopeId = nextLoadScopeId();
	const refs = {
		serviceId: def.id,
		loadScopeId,
		state,
		registryApi,
		queryDefinitions,
		defaultQueries,
		reactiveLoadQueries,
		getLoadCommands: () => loadCommands,
		buildGatedCommands
	};
	const builtQueries = buildQueries(refs);
	for (const [name, query] of Object.entries(builtQueries)) defaultQueries[name] = query;
	for (const [name, query] of Object.entries(buildReactiveLoadQueries(refs))) reactiveLoadQueries[name] = query;
	const queries = defaultQueries;
	const queryCtx = {
		self: {
			get state() {
				return state;
			},
			queries: defaultQueries
		},
		getService: registryApi.getService
	};
	const loadCtxForStatic = {
		self: {
			get state() {
				return state;
			},
			queries: defaultQueries,
			commands
		},
		getService: registryApi.getService
	};
	/**
	* Runs one query's `load` body against this runtime instance, drained to completion.
	*
	* Used by the static build pipeline to populate state for a single input without holding the
	* load in the in-flight registry afterwards.
	*/
	const runLoadOnce = async (queryName, validatedInput) => {
		const queryDef = queryDefinitions.get(queryName);
		if (!queryDef || !queryDef.load) return;
		const loadKey = makeLoadKey(def.id, queryName, validatedInput);
		const ancestorChain = /* @__PURE__ */ new Set([loadKey]);
		const inFlightKey = makeInFlightKey(loadScopeId, loadKey);
		const promise = Promise.resolve().then(() => runLoadBody(refs, queryName, queryDef, validatedInput, ancestorChain)).finally(() => {
			if (inFlightLoads.get(inFlightKey) === promise) inFlightLoads.delete(inFlightKey);
		});
		inFlightLoads.set(inFlightKey, promise);
		await promise;
	};
	const attachChannelCommands = (channelCommands, implementedCommandNames) => {
		loadCommands = channelCommands;
		remoteCommandNames.clear();
		for (const name of Object.keys(def.commands)) if (!implementedCommandNames.has(name)) remoteCommandNames.add(name);
	};
	return {
		getStateSnapshot,
		applyLocal,
		attachEntryAuthor: (next) => {
			author = next;
		},
		queryCtx,
		loadCtxForStatic,
		commands,
		queries,
		runLoadOnce,
		attachChannelCommands
	};
}
var init_service_runtime = __esmMin((() => {
	init_signals_core_module();
	init_deepsignal_core_module();
	init_server_errors();
	init_patch_recorder();
	init_plain_object();
	init_query_runtime();
	init_service_sync();
	init_service_validation();
}));
//#endregion
//#region src/shared/open-service/service-error-serialization.ts
function isPlainObject(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isSerializedError(value) {
	return isPlainObject(value) && value[ERROR_MARKER] === true;
}
/**
* Reduces any value to one a channel transport can clone.
*
* Functions, symbols, and `undefined` are dropped (structuredClone throws on functions/symbols);
* `bigint` is stringified; plain objects and arrays are walked; `Error`s become {@link SerializedError}.
*/
function toTransportSafe(value) {
	if (value instanceof Error) return serializeError(value);
	if (Array.isArray(value)) return value.map((entry) => toTransportSafe(entry));
	if (isPlainObject(value)) {
		const result = {};
		for (const [key, entry] of Object.entries(value)) result[key] = toTransportSafe(entry);
		return result;
	}
	if (value === null) return null;
	const kind = typeof value;
	if (kind === "string" || kind === "number" || kind === "boolean") return value;
	if (kind === "bigint") return value.toString();
}
/**
* Converts a thrown value into a transport-safe {@link SerializedError}.
*
* Non-`Error` throws (a string, an object, …) are wrapped in a synthetic error whose message is the
* stringified value, so the requester always receives a real `Error` to reject with.
*/
function serializeError(value) {
	if (!(value instanceof Error)) return {
		[ERROR_MARKER]: true,
		name: "Error",
		message: String(value)
	};
	const properties = {};
	for (const key of Object.keys(value)) if (!RESERVED_KEYS.has(key)) properties[key] = toTransportSafe(value[key]);
	return {
		[ERROR_MARKER]: true,
		name: value.name,
		message: value.message,
		...value.stack !== void 0 ? { stack: value.stack } : {},
		...value.cause !== void 0 ? { cause: toTransportSafe(value.cause) } : {},
		...Object.keys(properties).length > 0 ? { properties } : {}
	};
}
/** Inverse of {@link toTransportSafe}: rebuilds nested errors while passing other values through. */
function fromTransportSafe(value) {
	if (isSerializedError(value)) return deserializeError(value);
	if (Array.isArray(value)) return value.map((entry) => fromTransportSafe(entry));
	if (isPlainObject(value)) {
		const result = {};
		for (const [key, entry] of Object.entries(value)) result[key] = fromTransportSafe(entry);
		return result;
	}
	return value;
}
/**
* Rebuilds an `Error` from a {@link SerializedError}, restoring its `name`, `stack`, `cause` chain,
* and any extra fields (so a Storybook error arrives with `code`/`fromStorybook` intact).
*
* The result is a plain `Error`, not the original subclass — reconstructing arbitrary classes across
* a realm boundary is neither possible nor needed; callers branch on the restored fields instead.
*/
function deserializeError(serialized) {
	const error = new Error(serialized.message);
	error.name = serialized.name;
	if (serialized.stack !== void 0) error.stack = serialized.stack;
	if ("cause" in serialized) error.cause = fromTransportSafe(serialized.cause);
	if (serialized.properties) for (const [key, value] of Object.entries(serialized.properties)) error[key] = fromTransportSafe(value);
	return error;
}
var ERROR_MARKER, RESERVED_KEYS;
var init_service_error_serialization = __esmMin((() => {
	ERROR_MARKER = "__openServiceError__";
	RESERVED_KEYS = /* @__PURE__ */ new Set([
		ERROR_MARKER,
		"name",
		"message",
		"stack",
		"cause"
	]);
}));
//#endregion
//#region src/shared/open-service/service-transport.ts
/**
* Builds the receiver for the entries a runtime's `setState` recipes author.
*
* Each entry is stamped BEFORE it is emitted, so the copy that bounces back carries a stamp this
* runtime has already seen and is dropped as a duplicate.
*/
function createEntryAuthor(context) {
	const { serviceId, ownRuntimeId, reconciler, channel } = context;
	return ({ command, ops, inverse }) => {
		const stamp = reconciler.advanceLocal(ownRuntimeId, {
			command,
			patch: ops,
			inverse
		});
		channel.emit(SERVICE_ENTRY, {
			serviceId,
			stamp,
			command,
			patch: ops
		});
	};
}
/**
* Attaches the channel listeners that keep one runtime in sync with its peers, and returns a teardown.
*
* Wires three handlers and emits a bootstrap `services:sync-request` so a freshly-registered runtime
* catches up to state authored before it joined:
* - sync-request → reply `{ frontier, state }` only when our vector dominates the requester's;
* - sync-reply → install only if dominating (and, on a relay hub, forward the original payload);
* - entry → place by the five-case rule (and, on a relay hub, forward when logged or dropped as
*   beyond-window for the first time).
*
* A hub forwards the original payload object so unknown fields survive the hop. Leaves keep
* `relay: false`. The request policy (one outstanding, {@link SYNC_REQUEST_SILENCE_MS} of silence,
* one queued repair) is in the README's Bootstrap and repair section.
*/
function connectRuntimeToChannel(context) {
	const { serviceId, ownRuntimeId, reconciler, getSnapshot, channel, relay } = context;
	let requestOutstanding = false;
	let withinReplyWindow = false;
	let repairQueued = false;
	let silenceTimer;
	let forwardedReplyKey;
	const clearSilenceTimer = () => {
		if (silenceTimer !== void 0) {
			clearTimeout(silenceTimer);
			silenceTimer = void 0;
		}
	};
	const emitSyncRequest = () => {
		if (requestOutstanding) {
			repairQueued = true;
			return;
		}
		requestOutstanding = true;
		withinReplyWindow = true;
		repairQueued = false;
		channel.emit(SERVICE_SYNC_REQUEST, {
			serviceId,
			runtimeId: ownRuntimeId,
			frontier: reconciler.frontier
		});
		clearSilenceTimer();
		silenceTimer = setTimeout(() => {
			silenceTimer = void 0;
			withinReplyWindow = false;
			settleOutstandingRequest();
		}, SYNC_REQUEST_SILENCE_MS);
		silenceTimer.unref?.();
	};
	const settleOutstandingRequest = () => {
		const queued = repairQueued;
		requestOutstanding = false;
		if (queued) emitSyncRequest();
	};
	const onSyncRequest = (payload) => {
		const request = safeParse(syncRequestSchema, payload);
		if (!request.success || request.output.serviceId !== serviceId || request.output.runtimeId === ownRuntimeId) return;
		if (!vectorDominates(reconciler.vector, request.output.frontier.vector)) return;
		channel.emit(SERVICE_SYNC_REPLY, {
			serviceId,
			runtimeId: ownRuntimeId,
			frontier: reconciler.frontier,
			state: getSnapshot()
		});
	};
	const onSyncReply = (payload) => {
		const snapshot = safeParse(syncReplySchema, payload);
		if (!snapshot.success || snapshot.output.serviceId !== serviceId || snapshot.output.runtimeId === ownRuntimeId) return;
		const replyKey = `${snapshot.output.runtimeId}:${formatFrontier(snapshot.output.frontier)}`;
		if (replyKey === forwardedReplyKey) return;
		let outcome;
		try {
			outcome = reconciler.tryInstall(snapshot.output.frontier, snapshot.output.state);
		} finally {
			const settled = outcome ?? "installed";
			if (settled === "concurrent" && withinReplyWindow) {
				logger.warn(`Open-service sync: concurrent snapshot reply dropped. service=${serviceId} local=${formatFrontier(reconciler.frontier)} reply=${formatFrontier(snapshot.output.frontier)}`);
				repairQueued = true;
			}
			settleOutstandingRequest();
			if (settled === "installed" && relay) {
				forwardedReplyKey = replyKey;
				channel.emit(SERVICE_SYNC_REPLY, payload);
			}
		}
	};
	const onEntry = (payload) => {
		const parsed = safeParse(entrySchema, payload);
		if (!parsed.success || parsed.output.serviceId !== serviceId) return;
		let outcome;
		try {
			outcome = reconciler.tryPlaceEntry(parsed.output);
		} finally {
			const placed = outcome ?? (reconciler.has(parsed.output.stamp) ? "unapplied" : void 0);
			const logged = placed === "accepted" || placed === "gap" || placed === "unapplied";
			const needsRepair = placed === "gap" || placed === "beyond-window" || placed === "unapplied";
			if ((logged || placed === "beyond-window") && relay) channel.emit(SERVICE_ENTRY, payload);
			if (needsRepair) emitSyncRequest();
		}
	};
	channel.on(SERVICE_SYNC_REQUEST, onSyncRequest);
	channel.on(SERVICE_SYNC_REPLY, onSyncReply);
	channel.on(SERVICE_ENTRY, onEntry);
	emitSyncRequest();
	return () => {
		channel.off(SERVICE_SYNC_REQUEST, onSyncRequest);
		channel.off(SERVICE_SYNC_REPLY, onSyncReply);
		channel.off(SERVICE_ENTRY, onEntry);
		repairQueued = false;
		requestOutstanding = false;
		withinReplyWindow = false;
		clearSilenceTimer();
	};
}
/**
* Wires the remote-command-execution protocol for one service runtime, returning the command map
* callers should use plus a teardown.
*
* ## Why this exists
*
* A command handler can be supplied at registration in only *some* runtimes — the canonical case is
* a server-only handler that needs Node APIs or server context. Runtimes without a local handler
* still expose the command (so `useServiceCommand`, tests, and other services can call it), but they
* cannot run it themselves; they must ask a peer that can.
*
* ## Protocol
*
* - **Requester** (no local handler): the returned command emits `services:command-invoke` with a
*   unique `callId` and returns a promise. The promise resolves with the first
*   `services:command-result` for that `callId`, or rejects with the (deserialized) error from the
*   first `services:command-error`.
* - **Responder** (has a local handler): on a matching `services:command-invoke` it emits
*   `services:command-ack` immediately, runs the command locally on a deferred macrotask — so an
*   async channel flushes the ack before any handler work starts (each `setState` write is
*   broadcast by the entry author, so peers converge as usual) — then emits
*   `services:command-result` or `services:command-error`.
* - **Non-implementer**: a non-delegated runtime that hosts the service but not the invoked
*   command's handler replies `services:command-unhandled` instead of staying silent. Only a
*   delegated requester acts on that reply (rejecting with config-drift guidance, since the
*   Storybook it attached to is the only runtime that sees its invokes); other requesters ignore
*   it, because one peer's report cannot speak for the others.
*
* Both roles coexist on one runtime: it responds for the commands it implements and requests the
* ones it does not. A runtime never requests a command it implements (it runs that locally), so it
* never answers its own invoke echo.
*
* ## Multiple implementers
*
* If several peers implement the same command they will each run it and reply. The requester keeps
* only the first reply per `callId` and ignores the rest. Running a command in more than one runtime
* is therefore possible by construction; it is constrained by usage conventions and documentation
* rather than enforced here.
*
* ## Topology
*
* Replies travel back over the same channel the invoke went out on. A request reaches every peer on
* the requester's transports; the manager is connected to both the dev server and the preview, so it
* can invoke a command implemented in either. Command events are *not* relayed across a hub's other
* transports, so a preview cannot directly invoke a server-only command (and vice versa) — route such
* calls through the manager or implement the command on a directly-connected peer.
*
* ## Delegated mode
*
* A delegated runtime (one attached to an already-running Storybook) owns no dispatch at all: it
* requests *every* command over the channel and answers no invoke, because the runtime it attached
* to is the implementer. Local handlers stay registered and inspectable but never run, so a service
* author writes the same definition either way.
*/
function connectCommandTransport(context) {
	const { serviceId, ownRuntimeId, channel, localCommands, implementedCommandNames, commandNames, delegated } = context;
	const dispatchesLocally = (commandName) => !delegated && implementedCommandNames.has(commandName);
	const pending = /* @__PURE__ */ new Map();
	const settle = (callId, apply) => {
		const entry = pending.get(callId);
		if (!entry) return;
		pending.delete(callId);
		clearTimeout(entry.noAckTimer);
		apply(entry);
	};
	const onInvoke = (payload) => {
		const parsed = safeParse(commandInvokeSchema, payload);
		if (!parsed.success || parsed.output.serviceId !== serviceId) return;
		const invoke = parsed.output;
		if (!dispatchesLocally(invoke.commandName)) {
			if (!delegated && invoke.runtimeId !== ownRuntimeId) channel.emit(SERVICE_COMMAND_UNHANDLED, {
				serviceId,
				callId: invoke.callId
			});
			return;
		}
		channel.emit(SERVICE_COMMAND_ACK, {
			serviceId,
			callId: invoke.callId,
			runtimeId: ownRuntimeId
		});
		setTimeout(() => {
			Promise.resolve().then(() => localCommands[invoke.commandName](invoke.input)).then((result) => {
				channel.emit(SERVICE_COMMAND_RESULT, {
					serviceId,
					callId: invoke.callId,
					result,
					runtimeId: ownRuntimeId
				});
			}, (error) => {
				channel.emit(SERVICE_COMMAND_ERROR, {
					serviceId,
					callId: invoke.callId,
					error: serializeError(error),
					runtimeId: ownRuntimeId
				});
			});
		}, 0);
	};
	const onResult = (payload) => {
		const result = safeParse(commandResultSchema, payload);
		if (!result.success || result.output.serviceId !== serviceId) return;
		settle(result.output.callId, (entry) => entry.resolve(result.output.result));
	};
	const onError = (payload) => {
		const failure = safeParse(commandErrorSchema, payload);
		if (!failure.success || failure.output.serviceId !== serviceId) return;
		settle(failure.output.callId, (entry) => entry.reject(deserializeError(failure.output.error)));
	};
	const onAck = (payload) => {
		const ack = safeParse(commandAckSchema, payload);
		if (!ack.success || ack.output.serviceId !== serviceId) return;
		const entry = pending.get(ack.output.callId);
		if (!entry) return;
		clearTimeout(entry.noAckTimer);
	};
	const onUnhandled = (payload) => {
		const report = safeParse(commandUnhandledSchema, payload);
		if (!report.success || report.output.serviceId !== serviceId || !delegated) return;
		settle(report.output.callId, (entry) => entry.reject(new OpenServiceRemoteCommandConfigDriftError({
			serviceId,
			commandName: entry.commandName
		})));
	};
	channel.on(SERVICE_COMMAND_INVOKE, onInvoke);
	channel.on(SERVICE_COMMAND_RESULT, onResult);
	channel.on(SERVICE_COMMAND_ERROR, onError);
	channel.on(SERVICE_COMMAND_ACK, onAck);
	channel.on(SERVICE_COMMAND_UNHANDLED, onUnhandled);
	const requestRemote = (commandName, input) => {
		const callId = generateCallId();
		return new Promise((resolve, reject) => {
			const noAckTimer = setTimeout(() => {
				settle(callId, (entry) => entry.reject(new OpenServiceRemoteCommandUnhandledError({
					serviceId,
					commandName: entry.commandName,
					delegated
				})));
			}, 300);
			pending.set(callId, {
				commandName,
				resolve,
				reject,
				noAckTimer
			});
			channel.emit(SERVICE_COMMAND_INVOKE, {
				serviceId,
				commandName,
				input,
				callId,
				runtimeId: ownRuntimeId
			});
		});
	};
	const commands = {};
	for (const name of commandNames) commands[name] = dispatchesLocally(name) ? localCommands[name] : (input) => requestRemote(name, input);
	return {
		commands,
		disconnect: () => {
			channel.off(SERVICE_COMMAND_INVOKE, onInvoke);
			channel.off(SERVICE_COMMAND_RESULT, onResult);
			channel.off(SERVICE_COMMAND_ERROR, onError);
			channel.off(SERVICE_COMMAND_ACK, onAck);
			channel.off(SERVICE_COMMAND_UNHANDLED, onUnhandled);
			for (const [, entry] of pending) {
				clearTimeout(entry.noAckTimer);
				entry.reject(new OpenServiceRemoteCommandDisconnectedError({ serviceId }));
			}
			pending.clear();
		}
	};
}
/**
* Reports invokes for service ids this realm does not register at all.
*
* The per-service transport can only speak for services it hosts, but the common config-drift
* shape — a feature flag gating a whole service — leaves the invoke with no listener at all. One
* realm-global listener closes that gap: a non-delegated realm replies `services:command-unhandled`
* for any invoke whose service id it has never registered, so a delegated caller learns the drift
* positively instead of waiting out the ack window. Delegated realms answer nothing, a realm never
* reports its own invokes (they are only ever for services it registers), and an id that was
* registered before (mid-HMR re-registration) is not reported — staying silent degrades to the
* retryable timeout error, while a false report would hand out restart guidance for a transient.
*/
function connectUnknownServiceReporter(context) {
	const { channel, isServiceRegistered, isDelegated } = context;
	const onInvoke = (payload) => {
		const parsed = safeParse(commandInvokeSchema, payload);
		if (!parsed.success || isDelegated() || isServiceRegistered(parsed.output.serviceId)) return;
		channel.emit(SERVICE_COMMAND_UNHANDLED, {
			serviceId: parsed.output.serviceId,
			callId: parsed.output.callId
		});
	};
	channel.on(SERVICE_COMMAND_INVOKE, onInvoke);
	return () => {
		channel.off(SERVICE_COMMAND_INVOKE, onInvoke);
	};
}
/**
* Wires one service runtime to the channel end to end and returns the command map callers expose plus
* a single teardown.
*
* This is the one entry point `registerService` uses, so the three transport halves — entry
* authoring, the remote-command protocol, and the sync-request + entry listeners — are always
* assembled together against the same `channel` and can never drift into using different channels.
* The channel-routed command map is also installed on the runtime so load bodies invoke
* peer-implemented commands remotely instead of throwing locally.
*/
function connectServiceToChannel(context) {
	const { serviceId, ownRuntimeId, reconciler, getSnapshot, channel, relay, commands, implementedCommandNames, commandNames, delegated, runtime } = context;
	runtime.attachEntryAuthor(createEntryAuthor({
		serviceId,
		ownRuntimeId,
		reconciler,
		channel
	}));
	const commandTransport = connectCommandTransport({
		serviceId,
		ownRuntimeId,
		channel,
		localCommands: commands,
		implementedCommandNames,
		commandNames,
		delegated
	});
	const disconnectSync = connectRuntimeToChannel({
		serviceId,
		ownRuntimeId,
		reconciler,
		getSnapshot,
		channel,
		relay
	});
	runtime.attachChannelCommands(commandTransport.commands, delegated ? /* @__PURE__ */ new Set() : implementedCommandNames);
	return {
		commands: commandTransport.commands,
		disconnect: () => {
			disconnectSync();
			commandTransport.disconnect();
		}
	};
}
var SYNC_REQUEST_SILENCE_MS;
var init_service_transport = __esmMin((() => {
	init_dist$3();
	init_client_logger();
	init_server_errors();
	init_service_channel();
	init_service_error_serialization();
	init_service_sync();
	SYNC_REQUEST_SILENCE_MS = 1e3;
}));
//#endregion
//#region src/shared/open-service/service-registry.ts
/**
* Returns the realm-global inventory backing service registration and delegated mode.
*
* Lazily created so importing the module does not eagerly mutate global state. Anchoring it on a
* `globalThis` symbol keeps the service map and the delegated-mode flag shared even when this file is
* reached through different import paths.
*/
function getInventory() {
	const registryGlobal = globalThis;
	registryGlobal[REGISTRY_SYMBOL] ??= {
		entries: /* @__PURE__ */ new Map(),
		delegatedMode: false,
		everRegisteredIds: /* @__PURE__ */ new Set()
	};
	return registryGlobal[REGISTRY_SYMBOL];
}
function getRegistry() {
	return getInventory().entries;
}
/** Whether this runtime delegates command dispatch to the Storybook it is attached to. */
function isDelegatedMode() {
	return getInventory().delegatedMode;
}
function ensureUnknownServiceReporter(channel) {
	const inventory = getInventory();
	if (inventory.unknownServiceReporter?.channel === channel) return;
	inventory.unknownServiceReporter?.disconnect();
	inventory.unknownServiceReporter = {
		channel,
		disconnect: connectUnknownServiceReporter({
			channel,
			isServiceRegistered: (serviceId) => inventory.everRegisteredIds.has(serviceId),
			isDelegated: () => inventory.delegatedMode
		})
	};
}
function assertUniqueOperationNames(definition) {
	const duplicateName = Object.keys(definition.queries).find((name) => Object.hasOwn(definition.commands, name));
	if (duplicateName) throw new OpenServiceOperationNameCollisionError({
		serviceId: definition.id,
		operationName: duplicateName
	});
}
/**
* Converts one service definition into the serializable descriptor returned by registry metadata APIs.
*
* Descriptors expose schemas and descriptions but not runtime handlers, so callers can inspect a
* service's contract without gaining access to executable behavior. `staticPath: true` is surfaced so
* manager code can choose between live runtime queries and prebuilt JSON snapshots.
*/
function describeDefinition(definition) {
	return {
		id: definition.id,
		description: definition.description,
		queries: Object.fromEntries(Object.entries(definition.queries).filter(([, query]) => !query.internal).map(([name, query]) => [name, {
			name,
			description: query.description,
			input: query.input,
			output: query.output,
			...query.staticPath ? { staticPath: true } : {}
		}])),
		commands: Object.fromEntries(Object.entries(definition.commands).filter(([, command]) => !command.internal).map(([name, command]) => [name, {
			name,
			description: command.description,
			input: command.input,
			output: command.output
		}]))
	};
}
/** Derives the lightweight summary returned by `listServices()` from a full descriptor. */
function summarizeDescriptor(descriptor) {
	return {
		id: descriptor.id,
		description: descriptor.description,
		queryNames: Object.keys(descriptor.queries),
		commandNames: Object.keys(descriptor.commands)
	};
}
/**
* Applies optional registration overrides to an authored definition.
*
* Query registration may supply dependency-aware `staticInputs` (used by server static builds);
* command registration may override the `handler`. Anything not overridden is forwarded unchanged so
* every runtime shares the same contract.
*/
function applyRegistration(definition, registration) {
	if (!registration) return definition;
	return {
		...definition,
		queries: Object.fromEntries(Object.entries(definition.queries).map(([name, query]) => {
			const override = registration.queries?.[name];
			return [name, override && "staticInputs" in override ? {
				...query,
				staticInputs: override.staticInputs
			} : query];
		})),
		commands: Object.fromEntries(Object.entries(definition.commands).map(([name, command]) => {
			const override = registration.commands?.[name];
			return [name, override && "handler" in override ? {
				...command,
				handler: override.handler
			} : command];
		}))
	};
}
/**
* Registers one service definition in the realm-global registry and returns its runtime surface.
*
* Registration resolves any registration-time overrides, builds the runtime that query and command
* callers use, installs the entry author that emits a `services:entry` for each `setState` write, and
* joins the cross-peer sync protocol as a hub or leaf (`relay`). Each runtime must install the addons
* channel at its entry boundary before calling this (builders, manager boot, server `services`
* preset, or Node import bootstrap). Registration is idempotent by id: a repeated registration
* returns the existing runtime.
*/
function registerService$1(definition, registration, { relay = false, staticLoader, window } = {}) {
	assertUniqueOperationNames(definition);
	const registry = getRegistry();
	const existingEntry = registry.get(definition.id);
	if (existingEntry) return existingEntry.instance;
	const ownRuntimeId = generateRuntimeId();
	const resolvedDefinition = applyRegistration(definition, registration);
	const runtime = createServiceRuntime(resolvedDefinition, {
		registryApi: serviceRegistryApi,
		staticLoader
	});
	const reconciler = createReconciler({
		serviceId: definition.id,
		setState: (mutate) => runtime.applyLocal((state) => mutate(state)),
		window
	});
	const getSnapshot = () => runtime.getStateSnapshot();
	const descriptor = describeDefinition(resolvedDefinition);
	const channel = getChannel();
	if (!channel) throw new OpenServiceMissingChannelError({ serviceId: definition.id });
	getInventory().everRegisteredIds.add(definition.id);
	ensureUnknownServiceReporter(channel);
	const implementedCommandNames = new Set(Object.entries(resolvedDefinition.commands).filter(([, command]) => typeof command.handler === "function").map(([name]) => name));
	const { commands, disconnect } = connectServiceToChannel({
		serviceId: definition.id,
		ownRuntimeId,
		reconciler,
		getSnapshot,
		channel,
		relay: isDelegatedMode() ? false : relay,
		commands: runtime.commands,
		implementedCommandNames,
		commandNames: Object.keys(resolvedDefinition.commands),
		delegated: isDelegatedMode(),
		runtime
	});
	const instance = {
		queries: runtime.queries,
		commands,
		...serviceRegistryApi
	};
	registry.set(definition.id, {
		definition: resolvedDefinition,
		instance,
		descriptor,
		summary: summarizeDescriptor(descriptor),
		disconnect
	});
	return instance;
}
/** Returns one summary entry per registered service — the lowest-cost discovery endpoint. */
async function listServices() {
	return Array.from(getRegistry().values()).filter(({ definition }) => !definition.internal).map(({ summary }) => summary);
}
/** Returns the schema-backed descriptor for one registered service. */
async function describeService(serviceId) {
	const entry = getRegistry().get(serviceId);
	if (!entry) throw new OpenServiceMissingServiceError({ serviceId });
	return entry.descriptor;
}
/**
* Resolves a registered runtime service by id from the current realm.
*
* Query and command contexts delegate cross-service calls through this lookup so one service can reuse
* another's runtime contract. Synchronous because callers need it inside sync query handlers.
*
* Services with `internal: true` require `{ internal: true }` — otherwise this throws
* {@link OpenServiceInternalServiceError}. Do not depend on internal OSA from public adapters;
* prefer public toolsets (`defineToolset`) instead.
*/
function getService$1(serviceId, options) {
	const entry = getRegistry().get(serviceId);
	if (!entry) throw new OpenServiceMissingServiceError({ serviceId });
	if (entry.definition.internal && !options?.internal) throw new OpenServiceInternalServiceError({ serviceId });
	return entry.instance;
}
var REGISTRY_SYMBOL, serviceRegistryApi;
var init_service_registry = __esmMin((() => {
	init_channel_slot();
	init_server_errors();
	init_service_channel();
	init_service_runtime();
	init_service_sync();
	init_service_transport();
	REGISTRY_SYMBOL = Symbol.for("storybook.open-service.registry");
	serviceRegistryApi = {
		listServices,
		describeService,
		getService: getService$1
	};
}));
//#endregion
//#region src/shared/open-service/static-fetch.ts
function shouldUseBrowserStaticLoader() {
	return globalThis.CONFIG_TYPE === "PRODUCTION";
}
/**
* Returns a fetch-based loader for static build output, or `undefined` in development.
*
* Snapshot paths are logical keys such as `core/docgen/foo.json`, resolved relative to the
* document (`./services/...`), so the manager and preview iframes share the same base wherever
* the build is deployed.
*/
function createBrowserStaticLoader() {
	if (!shouldUseBrowserStaticLoader()) return;
	return async (logicalPath, context) => {
		const url = `${STATIC_SERVICES_PREFIX}${logicalPath}`;
		let res;
		try {
			res = await fetch(url);
		} catch (cause) {
			throw new OpenServiceStaticSnapshotLoadError({
				...context,
				logicalPath,
				url,
				cause
			});
		}
		if (!res.ok) {
			const cause = {
				status: res.status,
				statusText: res.statusText
			};
			throw new OpenServiceStaticSnapshotLoadError({
				...context,
				logicalPath,
				url,
				cause,
				status: res.status,
				statusText: res.statusText
			});
		}
		let snapshot;
		try {
			snapshot = await res.json();
		} catch (cause) {
			throw new OpenServiceStaticSnapshotLoadError({
				...context,
				logicalPath,
				url,
				cause
			});
		}
		if (snapshot && typeof snapshot === "object" && !Array.isArray(snapshot)) return snapshot;
		throw new OpenServiceStaticSnapshotInvalidError({
			...context,
			logicalPath,
			url,
			received: snapshot
		});
	};
}
var STATIC_SERVICES_PREFIX;
var init_static_fetch = __esmMin((() => {
	init_manager_errors();
	STATIC_SERVICES_PREFIX = "./services/";
})), isReviewSummaryPath, isReviewCollectionStoryRoute, isReviewManagerRoute;
var init_routes = __esmMin((() => {
	isReviewSummaryPath = (path) => path === "/review/" || path === "/review";
	isReviewCollectionStoryRoute = (path, customQueryParams) => !!path && path.startsWith("/story/") && customQueryParams?.["collection"] !== void 0;
	isReviewManagerRoute = (path, customQueryParams) => !!path && (isReviewSummaryPath(path) || path.startsWith("/review/") || isReviewCollectionStoryRoute(path, customQueryParams));
}));
//#endregion
//#region src/router/utils.ts
var import_memoizerific, splitPathRegex, parsePath, DEEPLY_EQUAL, deepDiff, VALIDATION_REGEXP, NUMBER_REGEXP, HEX_REGEXP, COLOR_REGEXP, validateArgs, encodeSpecialValues, decodeKnownQueryChar, knownQueryChar, buildArgsParam, queryFromString, queryFromLocation, stringifyQuery, getMatch;
var init_utils = __esmMin((() => {
	init_client_logger();
	init_predicate();
	import_memoizerific = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	init_main$1();
	init_esm();
	init_routes();
	splitPathRegex = /\/([^/]+)\/(?:(.*)_)?([^/]+)?/;
	parsePath = (0, import_memoizerific.default)(1e3)((path) => {
		const result = {
			viewMode: void 0,
			storyId: void 0,
			refId: void 0
		};
		if (path) {
			const [, viewMode, refId, storyId] = path.toLowerCase().match(splitPathRegex) || [];
			if (viewMode) Object.assign(result, {
				viewMode,
				storyId,
				refId
			});
			else if (isReviewSummaryPath(path)) result.viewMode = "review";
		}
		return result;
	});
	DEEPLY_EQUAL = Symbol("Deeply equal");
	deepDiff = (value, update) => {
		if (typeof value !== typeof update) return update;
		if (isEqual(value, update)) return DEEPLY_EQUAL;
		if (Array.isArray(value) && Array.isArray(update)) {
			const res = update.reduce((acc, upd, index) => {
				const diff = deepDiff(value[index], upd);
				if (diff !== DEEPLY_EQUAL) acc[index] = diff;
				return acc;
			}, new Array(update.length));
			if (update.length >= value.length) return res;
			return res.concat(new Array(value.length - update.length).fill(void 0));
		}
		if (isPlainObject$2(value) && isPlainObject$2(update)) return Object.keys({
			...value,
			...update
		}).reduce((acc, key) => {
			const diff = deepDiff(value?.[key], update?.[key]);
			return diff === DEEPLY_EQUAL ? acc : Object.assign(acc, { [key]: diff });
		}, {});
		return update;
	};
	VALIDATION_REGEXP = /^[a-zA-Z0-9 _-]*$/;
	NUMBER_REGEXP = /^-?[0-9]+(\.[0-9]+)?$/;
	HEX_REGEXP = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i;
	COLOR_REGEXP = /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i;
	validateArgs = (key = "", value) => {
		if (key === null) return false;
		if (key === "" || !VALIDATION_REGEXP.test(key)) return false;
		if (value === null || value === void 0) return true;
		if (value instanceof Date) return true;
		if (typeof value === "number" || typeof value === "boolean") return true;
		if (typeof value === "string") return VALIDATION_REGEXP.test(value) || NUMBER_REGEXP.test(value) || HEX_REGEXP.test(value) || COLOR_REGEXP.test(value);
		if (Array.isArray(value)) return value.every((v) => validateArgs(key, v));
		if (isPlainObject$2(value)) return Object.entries(value).every(([k, v]) => validateArgs(k, v));
		return false;
	};
	encodeSpecialValues = (value) => {
		if (value === void 0) return "!undefined";
		if (value === null) return "!null";
		if (typeof value === "string") {
			if (HEX_REGEXP.test(value)) return `!hex(${value.slice(1)})`;
			if (COLOR_REGEXP.test(value)) return `!${value.replace(/[\s%]/g, "")}`;
			return value;
		}
		if (typeof value === "boolean") return `!${value}`;
		if (value instanceof Date) return `!date(${value.toISOString()})`;
		if (Array.isArray(value)) return value.map(encodeSpecialValues);
		if (isPlainObject$2(value)) return Object.entries(value).reduce((acc, [key, val]) => Object.assign(acc, { [key]: encodeSpecialValues(val) }), {});
		return value;
	};
	decodeKnownQueryChar = (chr) => {
		switch (chr) {
			case "%20": return "+";
			case "%5B": return "[";
			case "%5D": return "]";
			case "%2C": return ",";
			case "%3A": return ":";
		}
		return chr;
	};
	knownQueryChar = /%[0-9A-F]{2}/g;
	buildArgsParam = (initialArgs, args) => {
		const update = deepDiff(initialArgs, args);
		if (!update || update === DEEPLY_EQUAL) return "";
		const object = Object.entries(update).reduce((acc, [key, value]) => {
			if (validateArgs(key, value)) return Object.assign(acc, { [key]: value });
			once.warn(dedent`
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/writing-stories/args?ref=error#setting-args-through-the-url
    `);
			return acc;
		}, {});
		return stringify(encodeSpecialValues(object), {
			delimiter: ";",
			nesting: true,
			nestingSyntax: "js"
		}).replace(knownQueryChar, decodeKnownQueryChar).split(";").map((part) => part.replace("=", ":")).join(";");
	};
	queryFromString = (0, import_memoizerific.default)(1e3)((s) => s !== void 0 ? parse(s) : {});
	queryFromLocation = (location) => {
		return queryFromString(location?.search ? location.search.slice(1) : "");
	};
	stringifyQuery = (query) => {
		const queryStr = stringify(query);
		return queryStr ? "?" + queryStr : "";
	};
	getMatch = (0, import_memoizerific.default)(1e3)((current, target, startsWith = true) => {
		if (startsWith) {
			if (typeof target !== "string") throw new Error("startsWith only works with string targets");
			if (current && current.startsWith(target)) return { path: current };
			return null;
		}
		const currentIsTarget = typeof target === "string" && current === target;
		const matchTarget = current && target && current.match(target);
		if (currentIsTarget || matchTarget) return { path: current };
		return null;
	});
}));
//#endregion
//#region src/router/router.tsx
function Match({ children, path: targetPath, startsWith = false }) {
	return /* @__PURE__ */ import_react$4.default.createElement(Location, null, ({ path: urlPath, ...rest }) => children({
		match: getMatch(urlPath, targetPath, startsWith),
		...rest
	}));
}
function Route(input) {
	const { children, ...rest } = input;
	if (rest.startsWith === void 0) rest.startsWith = false;
	const matchProps = rest;
	return /* @__PURE__ */ import_react$4.default.createElement(Match, matchProps, ({ match }) => match ? children : null);
}
var import_react$4, document, getBase, useNavigate, Link, Location, LocationProvider, BaseLocationProvider, MemoryRouter;
var init_router$1 = __esmMin((() => {
	import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist();
	init_dist$1();
	init_core_events();
	init_manager_api();
	init_utils();
	({document} = scope);
	getBase = () => `${document.location.pathname}?`;
	useNavigate = () => {
		const navigate = useNavigate$1();
		return (0, import_react$4.useCallback)((to, { plain, ...options } = {}) => {
			if (typeof to === "string" && to.startsWith("#")) return navigate(`${document.location.search}${to === "#" ? "" : to}`, options);
			if (typeof to === "string") {
				const target = plain ? to : `?path=${to}`;
				const [search, hash] = target.split("#");
				if (search === document.location.search && hash) {
					addons.getChannel().emit(NAVIGATE_URL, `#${hash}`);
					return;
				}
				return navigate(target, options);
			}
			if (typeof to === "number") return navigate(to);
		}, []);
	};
	Link = ({ to, children, ...rest }) => /* @__PURE__ */ import_react$4.default.createElement(Link$1, {
		to: `${getBase()}path=${to}`,
		...rest
	}, children);
	Link.displayName = "QueryLink";
	Location = ({ children }) => {
		const location = useLocation();
		const { path = "", singleStory } = queryFromLocation(location);
		const { viewMode, storyId, refId } = parsePath(path);
		return /* @__PURE__ */ import_react$4.default.createElement(import_react$4.default.Fragment, null, children({
			path: path || "/",
			location,
			viewMode,
			storyId,
			refId,
			singleStory: singleStory === "true"
		}));
	};
	Location.displayName = "QueryLocation";
	Match.displayName = "QueryMatch";
	Route.displayName = "Route";
	LocationProvider = (...args) => BrowserRouter(...args);
	BaseLocationProvider = (...args) => Router(...args);
	MemoryRouter = (...args) => MemoryRouter$1(...args);
}));
//#endregion
//#region src/router/types.ts
var init_types = __esmMin((() => {}));
//#endregion
//#region src/router/index.ts
var router_exports = /* @__PURE__ */ __exportAll({
	BaseLocationProvider: () => BaseLocationProvider,
	DEEPLY_EQUAL: () => DEEPLY_EQUAL,
	Link: () => Link,
	Location: () => Location,
	LocationProvider: () => LocationProvider,
	Match: () => Match,
	MemoryRouter: () => MemoryRouter,
	Route: () => Route,
	buildArgsParam: () => buildArgsParam,
	deepDiff: () => deepDiff,
	getMatch: () => getMatch,
	parsePath: () => parsePath,
	queryFromLocation: () => queryFromLocation,
	stringifyQuery: () => stringifyQuery,
	useNavigate: () => useNavigate
});
var init_router = __esmMin((() => {
	init_utils();
	init_router$1();
	init_types();
}));
//#endregion
//#region src/shared/universal-store/use-universal-store-manager.ts
var import_react$3, useUniversalStore;
var init_use_universal_store_manager = __esmMin((() => {
	import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_predicate();
	useUniversalStore = (universalStore, selector) => {
		const snapshotRef = import_react$3.useRef(selector ? selector(universalStore.getState()) : universalStore.getState());
		const subscribe = import_react$3.useCallback((listener) => universalStore.onStateChange((state, previousState) => {
			const selectedState = selector ? selector(state) : state;
			if (!isEqual(selectedState, selector ? selector(previousState) : previousState)) {
				snapshotRef.current = selectedState;
				listener();
			}
		}), [universalStore, selector]);
		const getSnapshot = import_react$3.useCallback(() => {
			const currentState = universalStore.getState();
			const selectedState = selector ? selector(currentState) : currentState;
			if (isEqual(selectedState, snapshotRef.current)) return snapshotRef.current;
			snapshotRef.current = selectedState;
			return snapshotRef.current;
		}, [universalStore, selector]);
		return [import_react$3.useSyncExternalStore(subscribe, getSnapshot), universalStore.setState];
	};
}));
//#endregion
//#region src/shared/universal-store/mock.ts
var MockUniversalStore;
var init_mock = __esmMin((() => {
	init_channels();
	init_esm();
	init_universal_store();
	MockUniversalStore = class MockUniversalStore extends UniversalStore {
		constructor(options, testUtils) {
			UniversalStore.isInternalConstructing = true;
			super({
				...options,
				leader: true
			}, {
				channel: new Channel({}),
				environment: UniversalStore.Environment.MOCK
			});
			UniversalStore.isInternalConstructing = false;
			if (typeof testUtils?.fn !== "function") return;
			this.testUtils = testUtils;
			this.getState = testUtils.fn(this.getState);
			this.setState = testUtils.fn(this.setState);
			this.subscribe = testUtils.fn(this.subscribe);
			this.onStateChange = testUtils.fn(this.onStateChange);
			this.send = testUtils.fn(this.send);
		}
		/** Create a mock universal store. This is just an alias for the constructor */
		static create(options, testUtils) {
			return new MockUniversalStore(options, testUtils);
		}
		unsubscribeAll() {
			if (!this.testUtils) throw new Error(dedent`Cannot call unsubscribeAll on a store that does not have testUtils.
        Please provide testUtils as the second argument when creating the store.`);
			const callReturnedUnsubscribeFn = (result) => {
				try {
					result.value();
				} catch (e) {}
			};
			this.subscribe.mock?.results.forEach(callReturnedUnsubscribeFn);
			this.onStateChange.mock?.results.forEach(callReturnedUnsubscribeFn);
		}
	};
}));
//#endregion
//#region src/shared/test-provider-store/index.ts
function createTestProviderStore({ universalTestProviderStore, useUniversalStore }) {
	const baseStore = {
		settingsChanged: () => {
			universalTestProviderStore.untilReady().then(() => {
				universalTestProviderStore.send({ type: "settings-changed" });
			});
		},
		onRunAll: (listener) => universalTestProviderStore.subscribe("run-all", listener),
		onClearAll: (listener) => universalTestProviderStore.subscribe("clear-all", listener)
	};
	const fullTestProviderStore = {
		...baseStore,
		getFullState: universalTestProviderStore.getState,
		setFullState: universalTestProviderStore.setState,
		onSettingsChanged: (listener) => universalTestProviderStore.subscribe("settings-changed", listener),
		runAll: async () => {
			await universalTestProviderStore.untilReady();
			universalTestProviderStore.send({ type: "run-all" });
		},
		clearAll: async () => {
			await universalTestProviderStore.untilReady();
			universalTestProviderStore.send({ type: "clear-all" });
		}
	};
	const getTestProviderStoreById = (testProviderId) => {
		const getStateForTestProvider = () => universalTestProviderStore.getState()[testProviderId] ?? "test-provider-state:pending";
		const setStateForTestProvider = (state) => {
			universalTestProviderStore.untilReady().then(() => {
				universalTestProviderStore.setState((currentState) => ({
					...currentState,
					[testProviderId]: state
				}));
			});
		};
		return {
			...baseStore,
			testProviderId,
			getState: getStateForTestProvider,
			setState: setStateForTestProvider,
			runWithState: async (callback) => {
				setStateForTestProvider("test-provider-state:running");
				try {
					await callback();
					setStateForTestProvider("test-provider-state:succeeded");
				} catch (error) {
					setStateForTestProvider("test-provider-state:crashed");
				}
			}
		};
	};
	if (useUniversalStore) return {
		getTestProviderStoreById,
		fullTestProviderStore,
		universalTestProviderStore,
		useTestProviderStore: (selector) => useUniversalStore(universalTestProviderStore, selector)[0]
	};
	return {
		getTestProviderStoreById,
		fullTestProviderStore,
		universalTestProviderStore
	};
}
var UNIVERSAL_TEST_PROVIDER_STORE_OPTIONS;
var init_test_provider_store = __esmMin((() => {
	UNIVERSAL_TEST_PROVIDER_STORE_OPTIONS = {
		id: "storybook/test-provider",
		leader: true,
		initialState: {}
	};
}));
//#endregion
//#region src/shared/checklist-store/checklistData.state.ts
var initialState;
var init_checklistData_state = __esmMin((() => {
	initialState = {
		items: {
			accessibilityTests: { status: "open" },
			aiSetup: { status: "open" },
			autodocs: { status: "open" },
			ciTests: { status: "open" },
			controls: { status: "open" },
			coverage: { status: "open" },
			guidedTour: { status: "open" },
			installA11y: { status: "open" },
			installChromatic: { status: "open" },
			installDocs: { status: "open" },
			installVitest: { status: "open" },
			mdxDocs: { status: "open" },
			moreComponents: { status: "open" },
			moreStories: { status: "open" },
			onboardingSurvey: { status: "open" },
			organizeStories: { status: "open" },
			renderComponent: { status: "open" },
			runTests: { status: "open" },
			publishStorybook: { status: "open" },
			shareStorybook: { status: "open" },
			viewports: { status: "open" },
			visualTests: { status: "open" },
			whatsNewStorybook10: { status: "open" },
			writeInteractions: { status: "open" }
		},
		widget: {}
	};
}));
//#endregion
//#region src/shared/checklist-store/index.ts
var UNIVERSAL_CHECKLIST_STORE_OPTIONS, createChecklistStore;
var init_checklist_store = __esmMin((() => {
	init_checklistData_state();
	UNIVERSAL_CHECKLIST_STORE_OPTIONS = {
		id: "storybook/checklist",
		initialState
	};
	createChecklistStore = (universalChecklistStore) => ({
		getValue: (id) => universalChecklistStore.getState().items[id] ?? {
			status: "open",
			mutedAt: void 0
		},
		accept: (id) => {
			universalChecklistStore.setState((state) => ({
				...state,
				items: {
					...state.items,
					[id]: {
						...state.items[id],
						status: "accepted"
					}
				}
			}));
		},
		done: (id) => {
			universalChecklistStore.setState((state) => ({
				...state,
				items: {
					...state.items,
					[id]: {
						...state.items[id],
						status: "done"
					}
				}
			}));
		},
		skip: (id) => {
			universalChecklistStore.setState((state) => ({
				...state,
				items: {
					...state.items,
					[id]: {
						...state.items[id],
						status: "skipped"
					}
				}
			}));
		},
		reset: (id) => {
			universalChecklistStore.setState((state) => ({
				...state,
				items: {
					...state.items,
					[id]: {
						...state.items[id],
						status: "open"
					}
				}
			}));
		},
		mute: (itemIds) => {
			universalChecklistStore.setState((state) => ({
				...state,
				items: itemIds.reduce((acc, id) => ({
					...acc,
					[id]: {
						...state.items[id],
						mutedAt: Date.now()
					}
				}), state.items)
			}));
		},
		disable: (value) => {
			universalChecklistStore.setState((state) => ({
				...state,
				widget: {
					...state.widget,
					disable: value
				},
				items: Object.entries(state.items).reduce((acc, [id, value]) => ({
					...acc,
					[id]: {
						...value,
						mutedAt: void 0
					}
				}), state.items)
			}));
		}
	});
}));
//#endregion
//#region src/shared/open-service/use-service-command.ts
/**
* Returns a stable reference to the named service command.
*
* @param service - A service instance from `registerService`.
* @param commandName - The name of the command to invoke.
*
* @example
* ```tsx
* const assignField = useServiceCommand(service, 'assignRecordField');
*
* return (
*   <button onClick={() => assignField({ entryId: 'a', fieldKey: 'x', fieldValue: 'y' })}>
*     Update
*   </button>
* );
* ```
*/
function useServiceCommand(service, commandName) {
	return import_react$2.useMemo(() => service.commands[commandName], [service, commandName]);
}
var import_react$2;
var init_use_service_command = __esmMin((() => {
	import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region src/shared/open-service/use-service-query.ts
function useServiceQuery(query, input, selector) {
	const subscriptionKeyRef = import_react$1.useRef(null);
	const snapshotRef = import_react$1.useRef(void 0);
	if (subscriptionKeyRef.current === null || subscriptionKeyRef.current.query !== query || !isEqual(subscriptionKeyRef.current.input, input) || subscriptionKeyRef.current.selector !== selector) {
		subscriptionKeyRef.current = {
			query,
			input,
			selector
		};
		snapshotRef.current = selector ? seedQueryState(query, input, selector) : seedQueryState(query, input);
	}
	const subscriptionKey = subscriptionKeyRef.current;
	const subscribe = import_react$1.useCallback((listener) => {
		const { query: q, input: i, selector: s } = subscriptionKey;
		const onQueryState = (queryState) => {
			snapshotRef.current = queryState;
			listener();
		};
		return s ? q.subscribe(i, s, onQueryState) : q.subscribe(i, onQueryState);
	}, [subscriptionKey]);
	const getSnapshot = import_react$1.useCallback(() => {
		return snapshotRef.current;
	}, []);
	return import_react$1.useSyncExternalStore(subscribe, getSnapshot);
}
var import_react$1;
var init_use_service_query = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_predicate();
	init_query_state();
}));
//#endregion
//#region src/shared/open-service/manager.ts
/**
* Registers a service in the manager and returns its runtime surface.
*
* The manager is a relay hub: it bridges the dev server and the preview iframes. The channel is read
* via `getChannel()` from `storybook/internal/channels`, which the manager runtime installs before any
* `addons.register` callback runs, so no manual channel setup is needed.
*/
function registerService(definition, registration) {
	return registerService$1(definition, registration, {
		relay: true,
		staticLoader: createBrowserStaticLoader()
	});
}
var getService;
var init_manager = __esmMin((() => {
	init_service_registry();
	init_static_fetch();
	init_use_service_command();
	init_use_service_query();
	getService = getService$1;
}));
//#endregion
//#region src/shared/useCopyButton.ts
function useCopyButton({ children = "Copy", childrenOnCopy = "Copied!", content, onCopy, ariaLabel = false, ariaLabelOnCopy = false, duration = 3e3 }) {
	const [copied, setCopied] = (0, import_react.useState)(false);
	const timerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => () => {
		if (timerRef.current) clearTimeout(timerRef.current);
	}, []);
	const handleClick = (0, import_react.useCallback)((e) => {
		if (timerRef.current) clearTimeout(timerRef.current);
		const announcement = typeof ariaLabelOnCopy === "string" ? ariaLabelOnCopy : "Copied to clipboard";
		navigator.clipboard?.writeText(content).then(() => {
			onCopy?.(e);
			setCopied(true);
			$a46cf152bb926da5$export$a9b970dcc4ae71a9(announcement, "polite");
			timerRef.current = setTimeout(() => {
				setCopied(false);
				$a46cf152bb926da5$export$d10ae4f68404609a("polite");
				timerRef.current = null;
			}, duration);
		});
	}, [
		content,
		onCopy,
		ariaLabelOnCopy,
		duration
	]);
	return {
		children: copied ? childrenOnCopy : children,
		buttonProps: (0, import_react.useMemo)(() => ({
			onClick: handleClick,
			ariaLabel: copied ? ariaLabelOnCopy : ariaLabel
		}), [
			handleClick,
			copied,
			ariaLabelOnCopy,
			ariaLabel
		])
	};
}
var import_react;
var init_useCopyButton = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_import();
}));
//#endregion
export { typography as $, init_tags as A, init_status_store as B, init_utils as C, BUILT_IN_FILTERS as D, isReviewManagerRoute as E, NON_AGGREGATED_STATUS_TYPE_IDS as F, init_emotion as G, toStatusValue as H, REVIEW_STATUS_TYPE_ID as I, init_create as J, create$1 as K, UNIVERSAL_STATUS_STORE_OPTIONS as L, REVIEW_NAMESPACE as M, init_events as N, Tag as O, CHANGE_DETECTION_STATUS_TYPE_ID as P, init_base as Q, countStatusesByValue as R, buildArgsParam as S, init_routes as T, emotion_exports as U, statusValueShortName as V, ignoreSsrWarning as W, lightenColor as X, init_utils$1 as Y, color as Z, init_mock as _, registerService as a, UniversalStore as at, init_router as b, init_use_service_command as c, createChecklistStore as d, LOOPBACK_HOSTNAMES as et, init_checklist_store as f, MockUniversalStore as g, init_test_provider_store as h, init_manager as i, init_storybook_error as it, REVIEW_EVENTS as j, USER_TAG_FILTER as k, useServiceCommand as l, createTestProviderStore as m, useCopyButton as n, matchesHostname as nt, init_use_service_query as o, init_universal_store as ot, UNIVERSAL_TEST_PROVIDER_STORE_OPTIONS as p, create_exports as q, getService as r, StorybookError as rt, useServiceQuery as s, init_useCopyButton as t, init_local_hosts as tt, UNIVERSAL_CHECKLIST_STORE_OPTIONS as u, init_use_universal_store_manager as v, queryFromLocation as w, router_exports as x, useUniversalStore as y, createStatusStore as z };
