import { a as __toESM, n as __esmMin, r as __exportAll } from "./_manager-chunks/globals-runtime-XrdeG17s.js";
import { C as require_major, S as require_minor, T as require_diff, b as require_prerelease, ft as parse, ht as init_esm, mt as dedent, pt as stringify, ut as init_dist, w as require_gt, x as require_patch, y as require_store2 } from "./_manager-chunks/globals-runtime-CzGMgLxl.js";
import { A as init_tags$1, B as init_status_store, D as BUILT_IN_FILTERS, E as isReviewManagerRoute, G as init_emotion, H as toStatusValue, J as init_create, K as create, L as UNIVERSAL_STATUS_STORE_OPTIONS, O as Tag, R as countStatusesByValue, S as buildArgsParam, T as init_routes, U as emotion_exports, V as statusValueShortName, _ as init_mock, a as registerService, at as UniversalStore, b as init_router, d as createChecklistStore, f as init_checklist_store, g as MockUniversalStore, h as init_test_provider_store, i as init_manager, it as init_storybook_error, k as USER_TAG_FILTER, l as useServiceCommand, m as createTestProviderStore, ot as init_universal_store, p as UNIVERSAL_TEST_PROVIDER_STORE_OPTIONS, q as create_exports, r as getService, rt as StorybookError, s as useServiceQuery, u as UNIVERSAL_CHECKLIST_STORE_OPTIONS, v as init_use_universal_store_manager, w as queryFromLocation, x as router_exports, y as useUniversalStore, z as createStatusStore } from "./_manager-chunks/globals-runtime-D04kIJv5.js";
import { A as SET_WHATS_NEW_CACHE, B as STORY_MISSING, C as SELECT_STORY, D as SET_GLOBALS, E as SET_FILTER, F as STORIES_COLLAPSE_ALL, G as UPDATE_GLOBALS, H as STORY_SPECIFIED, I as STORIES_EXPAND_ALL, J as core_events_exports, K as UPDATE_QUERY_PARAMS, L as STORY_ARGS_UPDATED, M as SHARED_STATE_SET, N as SIDEBAR_FILTER_CHANGED, O as SET_INDEX, P as SIDEBAR_OPEN_CONTEXT_MENU, Q as logger, R as STORY_CHANGED, S as RESULT_WHATS_NEW_DATA, T as SET_CURRENT_STORY, U as TELEMETRY_ERROR, V as STORY_PREPARED, W as TOGGLE_WHATS_NEW_NOTIFICATIONS, X as client_logger_exports, Y as init_core_events, Z as init_client_logger, _ as OPEN_IN_EDITOR_RESPONSE, a as channels_exports, b as REQUEST_WHATS_NEW_DATA, c as init_channel_slot, d as CURRENT_STORY_WAS_SET, f as DOCS_PREPARED, g as OPEN_IN_EDITOR_REQUEST, h as NAVIGATE_URL, i as mockChannel, j as SHARED_STATE_CHANGED, k as SET_STORIES, l as setChannel, m as GLOBALS_UPDATED, n as init_components, o as init_channels, p as FORCE_REMOUNT, q as UPDATE_STORY_ARGS, r as init_mock_channel, s as getChannel, t as components_exports, u as CONFIG_ERROR, v as PRELOAD_ENTRIES, w as SET_CONFIG, x as RESET_STORY_ARGS, y as PREVIEW_KEYDOWN, z as STORY_INDEX_INVALIDATED } from "./_manager-chunks/globals-runtime-C5yCOOyb.js";
import { At as init_dist$1, M as require_copy_to_clipboard, Z as FailedIcon, et as dist_exports, jt as scope, s as require_browser_dtector_umd_min, tt as init_dist$2 } from "./_manager-chunks/globals-runtime-C8r9nrt8.js";
import { ct as require_react, it as require_jsx_runtime } from "./_manager-chunks/globals-runtime-DpF3al7J.js";
import { B as FocusScope_exports, V as init_FocusScope } from "./_manager-chunks/globals-runtime-DUdJ_lLr.js";
import { n as require_react_dom } from "./_manager-chunks/globals-runtime-DNgiu6EW.js";
import { t as require_client } from "./_manager-chunks/globals-runtime-D23RyaMd.js";
import { C as init_predicate, O as require_memoizerific, S as mergeWith, T as isEqual, a as init_array, b as omit, c as countBy, f as dequal, g as toMerged, i as throttle, m as init_object, n as init_function, p as init_dist$3, s as partition, v as pick } from "./_manager-chunks/globals-runtime-DfPn-YQU.js";
import { r as stringify$1, t as init_main } from "./_manager-chunks/globals-runtime-Ci5x8rlg.js";
import { n as types_exports, r as Addon_TypesEnum, t as init_types } from "./_manager-chunks/globals-runtime-1EHOIU1u.js";
import { i as toId, r as sanitize, t as init_csf } from "./_manager-chunks/globals-runtime-CuYKAGmS.js";
//#region src/preview-errors.ts
var InvalidChannelPageError, StatusTypeIdMismatchError$1;
var init_preview_errors = __esmMin((() => {
	init_storybook_error();
	InvalidChannelPageError = class extends StorybookError {
		constructor(data) {
			super({
				name: "InvalidChannelPageError",
				category: "PREVIEW_CHANNELS",
				code: 1,
				message: `The postMessage channel transport needs "config.page" to be "manager" or "preview", but received "${data.page}".`
			});
			this.data = data;
		}
	};
	StatusTypeIdMismatchError$1 = class extends StorybookError {
		constructor(data) {
			super({
				name: "StatusTypeIdMismatchError",
				category: "PREVIEW_API",
				code: 16,
				message: `Status has typeId "${data.status.typeId}" but was added to store with typeId "${data.typeId}". Full status: ${JSON.stringify(data.status, null, 2)}`
			});
			this.data = data;
		}
	};
}));
//#endregion
//#region src/manager/globals/globals.ts
var globalsNameReferenceMap, globalPackages;
var init_globals$1 = __esmMin((() => {
	globalsNameReferenceMap = {
		react: "__REACT__",
		"react/jsx-runtime": "__REACT_JSX_RUNTIME__",
		"react/jsx-dev-runtime": "__REACT_JSX_DEV_RUNTIME__",
		"react-dom": "__REACT_DOM__",
		"react-dom/client": "__REACT_DOM_CLIENT__",
		"react-aria/FocusScope": "__REACT_ARIA_FOCUS_SCOPE__",
		"@storybook/icons": "__STORYBOOK_ICONS__",
		"storybook/manager-api": "__STORYBOOK_API__",
		"storybook/theming": "__STORYBOOK_THEMING__",
		"storybook/theming/emotion": "__STORYBOOK_THEMING__",
		"storybook/theming/create": "__STORYBOOK_THEMING_CREATE__",
		"storybook/internal/channels": "__STORYBOOK_CHANNELS__",
		"storybook/internal/client-logger": "__STORYBOOK_CLIENT_LOGGER__",
		"storybook/internal/components": "__STORYBOOK_COMPONENTS__",
		"storybook/internal/core-events": "__STORYBOOK_CORE_EVENTS__",
		"storybook/internal/manager-errors": "__STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__",
		"storybook/internal/router": "__STORYBOOK_ROUTER__",
		"storybook/internal/types": "__STORYBOOK_TYPES__"
	};
	globalPackages = Object.keys(globalsNameReferenceMap);
}));
//#endregion
//#region src/manager-api/context.ts
var import_react$5, createContext;
var init_context = __esmMin((() => {
	import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
	createContext = ({ api, state }) => (0, import_react$5.createContext)({
		api,
		state
	});
}));
//#endregion
//#region src/manager-api/lib/merge.ts
var merge_default, noArrayMerge;
var init_merge = __esmMin((() => {
	init_client_logger();
	init_object();
	init_predicate();
	merge_default = (a, ...b) => {
		let target = {};
		target = mergeWith({}, a, (objValue, srcValue) => {
			if (Array.isArray(srcValue) && Array.isArray(objValue)) {
				srcValue.forEach((s) => {
					if (!objValue.find((o) => o === s || isEqual(o, s))) objValue.push(s);
				});
				return objValue;
			}
			if (Array.isArray(objValue)) {
				logger.log(["the types mismatch, picking", objValue]);
				return objValue;
			}
		});
		for (const obj of b) target = mergeWith(target, obj, (objValue, srcValue) => {
			if (Array.isArray(srcValue) && Array.isArray(objValue)) {
				srcValue.forEach((s) => {
					if (!objValue.find((o) => o === s || isEqual(o, s))) objValue.push(s);
				});
				return objValue;
			}
			if (Array.isArray(objValue)) {
				logger.log(["the types mismatch, picking", objValue]);
				return objValue;
			}
		});
		return target;
	};
	noArrayMerge = (a, ...b) => {
		let target = {};
		target = mergeWith({}, a, (objValue, srcValue) => {
			if (Array.isArray(srcValue)) return srcValue;
		});
		for (const obj of b) target = mergeWith(target, obj, (objValue, srcValue) => {
			if (Array.isArray(srcValue)) return srcValue;
		});
		return target;
	};
}));
//#endregion
//#region src/manager-api/initial-state.ts
var main;
var init_initial_state = __esmMin((() => {
	init_merge();
	main = (...additions) => additions.reduce((acc, item) => merge_default(acc, item), {});
}));
//#endregion
//#region src/manager-errors.ts
var manager_errors_exports = /* @__PURE__ */ __exportAll({
	Category: () => Category,
	OpenServiceStaticSnapshotInvalidError: () => OpenServiceStaticSnapshotInvalidError,
	OpenServiceStaticSnapshotLoadError: () => OpenServiceStaticSnapshotLoadError,
	ProviderDoesNotExtendBaseProviderError: () => ProviderDoesNotExtendBaseProviderError,
	StatusTypeIdMismatchError: () => StatusTypeIdMismatchError,
	UncaughtManagerError: () => UncaughtManagerError
});
var Category, ProviderDoesNotExtendBaseProviderError, UncaughtManagerError, StatusTypeIdMismatchError, OpenServiceStaticSnapshotLoadError, OpenServiceStaticSnapshotInvalidError;
var init_manager_errors = __esmMin((() => {
	init_storybook_error();
	Category = /* @__PURE__ */ function(Category) {
		Category["MANAGER_UNCAUGHT"] = "MANAGER_UNCAUGHT";
		Category["MANAGER_UI"] = "MANAGER_UI";
		Category["MANAGER_API"] = "MANAGER_API";
		Category["MANAGER_CLIENT_LOGGER"] = "MANAGER_CLIENT-LOGGER";
		Category["MANAGER_CHANNELS"] = "MANAGER_CHANNELS";
		Category["MANAGER_CORE_EVENTS"] = "MANAGER_CORE-EVENTS";
		Category["MANAGER_ROUTER"] = "MANAGER_ROUTER";
		Category["MANAGER_THEMING"] = "MANAGER_THEMING";
		Category["MANAGER_OPEN_SERVICE"] = "MANAGER_OPEN-SERVICE";
		return Category;
	}({});
	ProviderDoesNotExtendBaseProviderError = class extends StorybookError {
		constructor() {
			super({
				name: "ProviderDoesNotExtendBaseProviderError",
				category: "MANAGER_UI",
				code: 1,
				message: `The Provider passed into Storybook's UI is not extended from the base Provider. Please check your Provider implementation.`
			});
		}
	};
	UncaughtManagerError = class extends StorybookError {
		constructor(data) {
			super({
				name: "UncaughtManagerError",
				category: "MANAGER_UNCAUGHT",
				code: 1,
				message: data.error.message
			});
			this.data = data;
			this.stack = data.error.stack;
		}
	};
	StatusTypeIdMismatchError = class extends StorybookError {
		constructor(data) {
			super({
				name: "StatusTypeIdMismatchError",
				category: "MANAGER_API",
				code: 1,
				message: `Status has typeId "${data.status.typeId}" but was added to store with typeId "${data.typeId}". Full status: ${JSON.stringify(data.status, null, 2)}`
			});
			this.data = data;
		}
	};
	OpenServiceStaticSnapshotLoadError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceStaticSnapshotLoadError",
				category: "MANAGER_OPEN-SERVICE",
				code: 1,
				message: `Failed to load open-service static snapshot "${data.logicalPath}" from "${data.url}" for "${data.serviceId}.${data.queryName}".`,
				cause: data.cause
			});
			this.data = data;
		}
	};
	OpenServiceStaticSnapshotInvalidError = class extends StorybookError {
		constructor(data) {
			super({
				name: "OpenServiceStaticSnapshotInvalidError",
				category: "MANAGER_OPEN-SERVICE",
				code: 2,
				message: `Open-service static snapshot "${data.logicalPath}" from "${data.url}" for "${data.serviceId}.${data.queryName}" must be a plain object.`
			});
			this.data = data;
		}
	};
}));
//#endregion
//#region src/manager-api/lib/addons.ts
function getAddonsStore() {
	if (!globalThis[KEY]) globalThis[KEY] = new AddonStore();
	return globalThis[KEY];
}
var AddonStore, KEY, addons;
var init_addons$1 = __esmMin((() => {
	init_client_logger();
	init_core_events();
	init_types();
	init_channel_slot();
	init_mock_channel();
	AddonStore = class {
		constructor() {
			this.loaders = {};
			this.elements = {};
			this.config = {};
			this.getChannel = () => {
				if (this.channel) return this.channel;
				const installed = getChannel();
				if (installed) {
					this.channel = installed;
					this.resolve();
					return this.channel;
				}
				return mockChannel();
			};
			this.ready = () => this.promise;
			this.hasChannel = () => !!this.channel || !!getChannel();
			this.setChannel = (channel) => {
				this.channel = channel;
				setChannel(channel);
				this.resolve();
			};
			this.setConfig = (value) => {
				Object.assign(this.config, value);
				if (this.hasChannel()) this.getChannel().emit(SET_CONFIG, this.config);
				else this.ready().then((channel) => {
					channel.emit(SET_CONFIG, this.config);
				});
			};
			this.getConfig = () => this.config;
			this.register = (id, callback) => {
				if (this.loaders[id]) logger.warn(`${id} was loaded twice, this could have bad side-effects`);
				this.loaders[id] = callback;
			};
			this.loadAddons = (api) => {
				Object.values(this.loaders).forEach((value) => value(api));
			};
			this.promise = new Promise((res) => {
				this.resolve = () => res(this.getChannel());
			});
		}
		getElements(type) {
			if (!this.elements[type]) this.elements[type] = {};
			return this.elements[type];
		}
		/**
		* Adds an addon to the addon store.
		*
		* @param {string} id - The id of the addon.
		* @param {Addon_Type} addon - The addon to add.
		* @returns {void}
		*/
		add(id, addon) {
			const { type } = addon;
			const collection = this.getElements(type);
			collection[id] = {
				...addon,
				id
			};
		}
		experimental_getRegisteredAddons(type) {
			return type ? Object.keys(this.getElements(type)) : Object.keys(this.loaders);
		}
	};
	KEY = "__STORYBOOK_ADDONS_MANAGER";
	addons = getAddonsStore();
}));
//#endregion
//#region src/manager-api/modules/addons.ts
var addons_exports = /* @__PURE__ */ __exportAll({
	ensurePanel: () => ensurePanel,
	init: () => init$13
});
function ensurePanel(panels, selectedPanel, currentPanel) {
	const keys = Object.keys(panels ?? {});
	if (keys.indexOf(selectedPanel) >= 0) return selectedPanel;
	if (keys.length) return keys[0];
	return currentPanel;
}
var init$13;
var init_addons = __esmMin((() => {
	init_client_logger();
	init$13 = ({ provider, store, fullAPI }) => {
		const api = {
			getElements: (type) => provider.getElements(type),
			clearStatuses: () => {
				const testProviders = api.getElements("test-provider");
				Object.values(testProviders).forEach((testProvider) => {
					try {
						testProvider.clear?.();
					} catch (e) {
						try {
							logger.warn(`Failed to clear test provider "${testProvider.id}":`, e);
						} catch {}
					}
				});
			},
			getSelectedPanel: () => {
				const { selectedPanel } = store.getState();
				return ensurePanel(api.getElements("panel"), selectedPanel, selectedPanel);
			},
			setSelectedPanel: (panelName) => {
				store.setState({ selectedPanel: panelName }, { persistence: "session" });
			},
			setAddonState(addonId, newStateOrMerger, options) {
				const merger = typeof newStateOrMerger === "function" ? newStateOrMerger : () => newStateOrMerger;
				return store.setState((s) => ({
					...s,
					addons: {
						...s.addons,
						[addonId]: merger(s.addons[addonId])
					}
				}), options).then(() => api.getAddonState(addonId));
			},
			getAddonState: (addonId) => {
				return store.getState().addons[addonId] || globalThis?.STORYBOOK_ADDON_STATE[addonId];
			}
		};
		return {
			api,
			state: {
				selectedPanel: ensurePanel(api.getElements("panel"), store.getState().selectedPanel),
				addons: {}
			}
		};
	};
}));
//#endregion
//#region src/manager-api/modules/channel.ts
var channel_exports = /* @__PURE__ */ __exportAll({ init: () => init$12 });
var init$12;
var init_channel = __esmMin((() => {
	init$12 = ({ provider }) => {
		return {
			api: {
				getChannel: () => provider.channel,
				on: (type, handler) => {
					provider.channel?.on(type, handler);
					return () => provider.channel?.off(type, handler);
				},
				off: (type, handler) => provider.channel?.off(type, handler),
				once: (type, handler) => provider.channel?.once(type, handler),
				emit: (type, data, ...args) => {
					if (data?.options?.target && data.options.target !== "storybook-preview-iframe" && !data.options.target.startsWith("storybook-ref-")) data.options.target = data.options.target !== "storybook_internal" ? `storybook-ref-${data.options.target}` : "storybook-preview-iframe";
					provider.channel?.emit(type, data, ...args);
				}
			},
			state: {}
		};
	};
}));
//#endregion
//#region src/preview-api/modules/preview-web/render/animation-utils.ts
function isTestEnvironment() {
	try {
		return !!globalThis.__vitest_browser__ || !!globalThis.window?.navigator?.userAgent?.match(/StorybookTestRunner/);
	} catch {
		return false;
	}
}
var init_animation_utils = __esmMin((() => {}));
//#endregion
//#region src/manager-api/lib/intersect.ts
var intersect_default;
var init_intersect = __esmMin((() => {
	intersect_default = (a, b) => {
		if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) return [];
		return a.reduce((acc, aValue) => {
			if (b.includes(aValue)) acc.push(aValue);
			return acc;
		}, []);
	};
}));
//#endregion
//#region src/manager-api/lib/stories.ts
var import_memoizerific$2, TITLE_PATH_SEPARATOR, transformStoryIndexV3toV4, transformStoryIndexV4toV5, transformStoryIndexToStoriesHash, addPreparedStories, getComponentLookupList, getStoriesLookupList;
var init_stories$1 = __esmMin((() => {
	init_csf();
	init_array();
	import_memoizerific$2 = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	init_esm();
	init_tags$1();
	init_intersect();
	TITLE_PATH_SEPARATOR = /\s*\/\s*/;
	transformStoryIndexV3toV4 = (index) => {
		const countByTitle = countBy(Object.values(index.stories), (item) => item.title);
		return {
			v: 4,
			entries: Object.values(index.stories).reduce((acc, entry) => {
				let type = "story";
				if (entry.parameters?.docsOnly || entry.name === "Page" && countByTitle[entry.title] === 1) type = "docs";
				acc[entry.id] = {
					type,
					...type === "docs" && {
						tags: ["stories-mdx"],
						storiesImports: []
					},
					...entry
				};
				delete acc[entry.id].story;
				delete acc[entry.id].kind;
				return acc;
			}, {})
		};
	};
	transformStoryIndexV4toV5 = (index) => {
		return {
			v: 5,
			entries: Object.values(index.entries).reduce((acc, entry) => {
				acc[entry.id] = {
					...entry,
					tags: entry.tags ? [
						Tag.DEV,
						Tag.TEST,
						...entry.tags
					] : [Tag.DEV]
				};
				return acc;
			}, {})
		};
	};
	transformStoryIndexToStoriesHash = (input, { provider, docsOptions, filters, allStatuses, statusFilterKey }) => {
		if (!input.v) throw new Error("Composition: Missing stories.json version");
		if (input.v < 3) throw new Error(`Unsupported story index version: v${input.v}. Storybook 11 requires index version 3 or later.`);
		let index = input;
		index = index.v === 3 ? transformStoryIndexV3toV4(index) : index;
		index = index.v === 4 ? transformStoryIndexV4toV5(index) : index;
		index = index;
		const indexEntries = Object.values(index.entries);
		const filterFunctions = Object.values(filters);
		const statusFilterFn = statusFilterKey ? filters[statusFilterKey] : void 0;
		const entryValues = indexEntries.filter((entry) => {
			const statuses = allStatuses[entry.id] ?? {};
			if (statusFilterFn && !statusFilterFn({
				...entry,
				statuses
			})) {
				if (!indexEntries.filter((item) => "parent" in item && item.parent === entry.id).some((child) => statusFilterFn({
					...child,
					statuses: allStatuses[child.id] ?? {}
				}))) return false;
			}
			if (Object.values(statuses).some(({ value }) => value === "status-value:error")) return true;
			if (filterFunctions.every((fn) => fn({
				...entry,
				statuses
			}))) return true;
			return indexEntries.filter((item) => "parent" in item && item.parent === entry.id).some((child) => filterFunctions.every((fn) => fn({
				...child,
				statuses
			})));
		});
		const { sidebar = {} } = provider.getConfig();
		const { showRoots, collapsedRoots = [], renderAriaLabel, renderLabel } = sidebar;
		const setShowRoots = typeof showRoots !== "undefined";
		const includedIds = new Set(entryValues.map((entry) => entry.id));
		const entriesById = /* @__PURE__ */ new Map();
		const titleNodes = /* @__PURE__ */ new Map();
		const testIdsByStoryId = /* @__PURE__ */ new Map();
		indexEntries.forEach((item) => {
			if (docsOptions.docsMode && item.type !== "docs") return;
			entriesById.set(item.id, item);
			if ("parent" in item && item.parent) {
				testIdsByStoryId.set(item.parent, [...testIdsByStoryId.get(item.parent) ?? [], item.id]);
				return;
			}
			const { title } = item;
			const groups = title.trim().split(TITLE_PATH_SEPARATOR);
			const root = (!setShowRoots || showRoots) && groups.length > 1 ? [groups.shift()] : [];
			const names = [...root, ...groups];
			const paths = names.reduce((list, name, idx) => {
				const parent = idx > 0 && list[idx - 1];
				const id = sanitize(parent ? `${parent}-${name}` : name);
				if (name.trim() === "") throw new Error(dedent`Invalid title ${title} ending in slash.`);
				if (parent === id) throw new Error(dedent`
          Invalid part '${name}', leading to id === parentId ('${id}'), inside title '${title}'

          Did you create a path that uses the separator char accidentally, such as 'Vue <docs/>' where '/' is a separator char? See https://github.com/storybookjs/storybook/issues/6128
          `);
				list.push(id);
				return list;
			}, []);
			paths.forEach((id, idx) => {
				const node = titleNodes.get(id) ?? {
					id,
					name: "",
					parent: paths[idx - 1],
					depth: idx,
					isRoot: false,
					children: []
				};
				titleNodes.set(id, node);
				node.name = names[idx];
				node.isRoot ||= root.length > 0 && idx === 0;
				const childId = paths[idx + 1] ?? item.id;
				if (!node.children.includes(childId)) node.children.push(childId);
			});
		});
		const typeOf = (node) => {
			if (node.isRoot) return "root";
			if (node.children.some((id) => titleNodes.has(id))) return "group";
			if (node.children.some((id) => entriesById.get(id).type === "story")) return "component";
			return node.children.length === 1 ? "docs" : "group";
		};
		const isIncluded = (id) => {
			const node = titleNodes.get(id);
			return node ? node.children.some(isIncluded) : includedIds.has(id);
		};
		const hashIdOf = (id) => {
			const node = titleNodes.get(id);
			return node && typeOf(node) === "docs" ? node.children[0] : id;
		};
		const storiesHash = {};
		const addLeaf = (id, parent, depth) => {
			const item = entriesById.get(id);
			storiesHash[id] = {
				tags: [],
				...item,
				depth,
				parent,
				renderAriaLabel,
				renderLabel,
				prepared: !!item.parameters
			};
			const testIds = (testIdsByStoryId.get(id) ?? []).filter((testId) => includedIds.has(testId));
			if (testIds.length) {
				storiesHash[id].children = testIds;
				testIds.forEach((testId) => addLeaf(testId, id, depth + 1));
			}
		};
		const addNode = (node) => {
			const type = typeOf(node);
			if (type === "docs") {
				addLeaf(node.children[0], node.parent, node.depth);
				storiesHash[node.children[0]].name = node.name;
				return;
			}
			const includedChildren = node.children.filter(isIncluded);
			const children = includedChildren.map(hashIdOf);
			const entry = {
				type,
				id: node.id,
				name: node.name,
				depth: node.depth,
				tags: [],
				renderAriaLabel,
				renderLabel,
				children,
				...type === "root" ? { startCollapsed: collapsedRoots.includes(node.id) } : { parent: node.parent }
			};
			storiesHash[node.id] = entry;
			includedChildren.forEach((childId) => {
				const child = titleNodes.get(childId);
				if (child) addNode(child);
				else addLeaf(childId, node.id, node.depth + 1);
			});
			entry.tags = children.flatMap((id) => {
				const child = storiesHash[id];
				return child.type === "story" && "children" in child && child.children ? [id, ...child.children] : [id];
			}).map((id) => storiesHash[id].tags).reduce(intersect_default);
			if (entry.type === "component") entry.importPath = storiesHash[children[0]].importPath;
		};
		const topLevelNodes = [...titleNodes.values()].filter((node) => node.depth === 0 && isIncluded(node.id));
		topLevelNodes.filter((node) => !node.isRoot).forEach(addNode);
		topLevelNodes.filter((node) => node.isRoot).forEach(addNode);
		return storiesHash;
	};
	addPreparedStories = (newHash, oldHash) => {
		if (!oldHash) return newHash;
		return Object.fromEntries(Object.entries(newHash).map(([id, newEntry]) => {
			const oldEntry = oldHash[id];
			if (newEntry.type === "story" && oldEntry?.type === "story" && oldEntry.prepared) {
				if ("children" in oldEntry) delete oldEntry.children;
				return [id, {
					...oldEntry,
					...newEntry,
					prepared: true
				}];
			}
			return [id, newEntry];
		}));
	};
	getComponentLookupList = (0, import_memoizerific$2.default)(1)((hash) => {
		return Object.entries(hash).reduce((acc, i) => {
			const value = i[1];
			if (value.type === "component") acc.push([...value.children]);
			else if (value.type === "docs" && (!value.parent || hash[value.parent].type !== "component")) acc.push([value.id]);
			return acc;
		}, []);
	});
	getStoriesLookupList = (0, import_memoizerific$2.default)(1)((hash) => {
		return Object.keys(hash).filter((k) => ["story", "docs"].includes(hash[k].type));
	});
}));
//#endregion
//#region src/manager-api/modules/refs.ts
var refs_exports = /* @__PURE__ */ __exportAll({
	getSourceType: () => getSourceType,
	init: () => init$11
});
async function handleRequest(request) {
	if (!request) return {};
	try {
		const response = await request;
		if (response === false || response === true) throw new Error("Unexpected boolean response");
		if (!response.ok) {
			if (response.status === 401) try {
				const json = await response.json();
				if (json.loginUrl) return { loginUrl: json.loginUrl };
			} catch {}
			throw new Error(`Unexpected response not OK: ${response.statusText}`);
		}
		const json = await response.json();
		if (json.entries || json.stories) return { storyIndex: json };
		return json;
	} catch (err) {
		return { indexError: err };
	}
}
var location, fetch$1, getSourceType, addRefIds, applyRefStoryUpdates, parseUrl, getRedirectedRefUrl, init$11;
var init_refs = __esmMin((() => {
	init_dist$1();
	init_esm();
	init_stories$1();
	({location, fetch: fetch$1} = scope);
	getSourceType = (source, refId) => {
		const { origin: localOrigin, pathname: localPathname } = location;
		const { origin: sourceOrigin, pathname: sourcePathname } = new URL(source);
		const localFull = `${localOrigin + localPathname}`.replace(/\/[^\/]*$/, "");
		const sourceFull = `${sourceOrigin + sourcePathname}`.replace(/\/[^\/]*$/, "");
		if (localFull === sourceFull) return ["local", sourceFull];
		if (refId || source) return ["external", sourceFull];
		return [null, null];
	};
	addRefIds = (input, ref) => {
		return Object.entries(input).reduce((acc, [id, item]) => {
			return {
				...acc,
				[id]: {
					...item,
					refId: ref.id
				}
			};
		}, {});
	};
	applyRefStoryUpdates = (index, storyUpdates) => {
		if (!storyUpdates) return index;
		Object.entries(storyUpdates).forEach(([id, update]) => {
			const entry = index[id];
			if (entry && (entry.type === "story" || entry.type === "docs")) index[id] = {
				...entry,
				...update
			};
		});
		return index;
	};
	parseUrl = (url) => {
		const credentialsRegex = /https?:\/\/(.+:.+)@/;
		let cleanUrl = url;
		let authorization;
		const [, credentials] = url.match(credentialsRegex) || [];
		if (credentials) {
			cleanUrl = url.replace(`${credentials}@`, "");
			authorization = btoa(`${credentials}`);
		}
		return {
			url: cleanUrl,
			authorization
		};
	};
	getRedirectedRefUrl = (refUrl, indexResponseUrl) => {
		if (!indexResponseUrl) return refUrl;
		const served = new URL(indexResponseUrl);
		if (served.origin === new URL(refUrl, location.href).origin || !served.pathname.endsWith("/index.json")) return refUrl;
		return served.origin + served.pathname.slice(0, -11);
	};
	init$11 = ({ store, provider, singleStory, docsOptions = {} }, { runCheck = true } = {}) => {
		const api = {
			findRef: (source) => {
				const refs = api.getRefs();
				return Object.values(refs).find(({ url }) => url.match(source));
			},
			changeRefVersion: async (id, url) => {
				const { versions, title } = api.getRefs()[id];
				const ref = {
					id,
					url,
					versions,
					title,
					index: {},
					filteredIndex: {},
					expanded: true
				};
				await api.setRef(id, {
					...ref,
					type: "unknown"
				}, false);
				await api.checkRef(ref);
			},
			changeRefState: (id, previewInitialized) => {
				const { [id]: ref, ...updated } = api.getRefs();
				updated[id] = {
					...ref,
					previewInitialized
				};
				store.setState({ refs: updated });
			},
			checkRef: async (ref) => {
				const { id, url, version, type } = ref;
				const isPublic = type === "server-checked";
				const loadedData = {};
				const query = version ? `?version=${version}` : "";
				const credentials = isPublic ? "omit" : "include";
				const urlParseResult = parseUrl(url);
				const headers = { Accept: "application/json" };
				if (urlParseResult.authorization) Object.assign(headers, { Authorization: `Basic ${urlParseResult.authorization}` });
				const [indexRequest, storiesRequest] = ["index.json", "stories.json"].map((file) => fetch$1(`${urlParseResult.url}/${file}${query}`, {
					headers,
					credentials
				}));
				const [indexResult, storiesResult] = await Promise.all([handleRequest(indexRequest), handleRequest(storiesRequest)]);
				const refUrl = scope.CONFIG_TYPE === "DEVELOPMENT" && indexResult.storyIndex ? getRedirectedRefUrl(urlParseResult.url, (await indexRequest).url) : urlParseResult.url;
				if (!indexResult.indexError || !storiesResult.indexError) {
					const metadata = await handleRequest(fetch$1(`${urlParseResult.url}/metadata.json${query}`, {
						headers,
						credentials,
						cache: "no-cache"
					}).catch(() => false));
					Object.assign(loadedData, {
						...indexResult.indexError ? storiesResult : indexResult,
						...!metadata.indexError && metadata
					});
				} else if (!isPublic) loadedData.indexError = { message: dedent`
            Error: Loading of ref failed
              at fetch (lib/api/src/modules/refs.ts)

            URL: ${urlParseResult.url}

            We weren't able to load the above URL,
            it's possible a CORS error happened.

            Please check your dev-tools network tab.
          ` };
				const versions = ref.versions && Object.keys(ref.versions).length ? ref.versions : loadedData.versions;
				await api.setRef(id, {
					id,
					url: refUrl,
					...loadedData,
					...versions ? { versions } : {},
					type: !loadedData.storyIndex ? "auto-inject" : "lazy"
				});
			},
			getRefs: () => {
				const { refs = {} } = store.getState();
				return refs;
			},
			setRef: async (id, { storyIndex, ...rest }, ready = false) => {
				if (singleStory) return;
				let internal_index;
				let index;
				let filteredIndex;
				const { filters } = store.getState();
				const ref = api.getRefs()[id];
				if (storyIndex) {
					internal_index = storyIndex;
					filteredIndex = transformStoryIndexToStoriesHash(storyIndex, {
						provider,
						docsOptions,
						filters,
						allStatuses: {}
					});
					index = transformStoryIndexToStoriesHash(storyIndex, {
						provider,
						docsOptions,
						filters: {},
						allStatuses: {}
					});
				}
				if (index) {
					index = addRefIds(index, ref);
					index = applyRefStoryUpdates(index, ref?.storyUpdates);
				}
				if (filteredIndex) {
					filteredIndex = addRefIds(filteredIndex, ref);
					filteredIndex = applyRefStoryUpdates(filteredIndex, ref?.storyUpdates);
				}
				await api.updateRef(id, {
					...ref,
					...rest,
					index,
					filteredIndex,
					internal_index
				});
			},
			updateRef: async (id, data) => {
				const { [id]: ref, ...updated } = api.getRefs();
				updated[id] = {
					...ref,
					...data
				};
				const ordered = Object.keys(initialState).reduce((obj, key) => {
					obj[key] = updated[key];
					return obj;
				}, {});
				await store.setState({ refs: ordered });
			}
		};
		const refs = !singleStory && scope.REFS || {};
		const initialState = refs;
		if (runCheck) new Promise(async (resolve) => {
			for (const ref of Object.values(refs)) await api.checkRef({
				...ref,
				stories: {}
			});
			resolve(void 0);
		});
		return {
			api,
			state: { refs: initialState }
		};
	};
}));
//#endregion
//#region src/manager-api/lib/events.ts
var getEventMetadata;
var init_events = __esmMin((() => {
	init_client_logger();
	init_refs();
	getEventMetadata = (context, fullAPI) => {
		const { source, refId, type } = context;
		const [sourceType, sourceLocation] = getSourceType(source, refId);
		let ref;
		if (refId || sourceType === "external") ref = refId && fullAPI.getRefs()[refId] ? fullAPI.getRefs()[refId] : fullAPI.findRef(sourceLocation);
		const meta = {
			source,
			sourceType,
			sourceLocation,
			refId,
			ref,
			type
		};
		switch (true) {
			case typeof refId === "string":
			case sourceType === "local":
			case sourceType === "external": return meta;
			default:
				logger.warn(`Received a ${type} frame that was not configured as a ref`);
				return null;
		}
	};
}));
//#endregion
//#region src/manager-api/modules/globals.ts
var globals_exports = /* @__PURE__ */ __exportAll({ init: () => init$10 });
var init$10;
var init_globals = __esmMin((() => {
	init_client_logger();
	init_core_events();
	init_dist$3();
	init_events();
	init$10 = ({ store, fullAPI, provider }) => {
		const api = {
			getGlobals() {
				return store.getState().globals;
			},
			getUserGlobals() {
				return store.getState().userGlobals;
			},
			getStoryGlobals() {
				return store.getState().storyGlobals;
			},
			getGlobalTypes() {
				return store.getState().globalTypes;
			},
			updateGlobals(newGlobals) {
				provider.channel?.emit(UPDATE_GLOBALS, {
					globals: newGlobals,
					options: { target: "storybook-preview-iframe" }
				});
			}
		};
		const state = {
			globals: {},
			userGlobals: {},
			storyGlobals: {},
			globalTypes: {}
		};
		const updateGlobals = ({ globals, storyGlobals, userGlobals }) => {
			const { globals: currentGlobals, userGlobals: currentUserGlobals, storyGlobals: currentStoryGlobals } = store.getState();
			if (!dequal(globals, currentGlobals)) store.setState({ globals });
			if (!dequal(userGlobals, currentUserGlobals)) store.setState({ userGlobals });
			if (!dequal(storyGlobals, currentStoryGlobals)) store.setState({ storyGlobals });
		};
		provider.channel?.on(GLOBALS_UPDATED, function handleGlobalsUpdated({ globals, storyGlobals, userGlobals }) {
			const { ref } = getEventMetadata(this, fullAPI);
			if (!ref) updateGlobals({
				globals,
				storyGlobals,
				userGlobals
			});
			else logger.warn("received a GLOBALS_UPDATED from a non-local ref. This is not currently supported.");
		});
		provider.channel?.on(SET_GLOBALS, function handleSetGlobals({ globals, globalTypes }) {
			const { ref } = getEventMetadata(this, fullAPI);
			const currentUserGlobals = store.getState()?.userGlobals;
			if (!ref) store.setState({
				globals,
				userGlobals: globals,
				globalTypes
			});
			else if (Object.keys(globals).length > 0) logger.warn("received globals from a non-local ref. This is not currently supported.");
			if (currentUserGlobals && Object.keys(currentUserGlobals).length !== 0 && !dequal(globals, currentUserGlobals)) api.updateGlobals(currentUserGlobals);
		});
		return {
			api,
			state
		};
	};
}));
//#endregion
//#region src/manager-api/modules/layout.ts
var layout_exports = /* @__PURE__ */ __exportAll({
	ActiveTabs: () => ActiveTabs$1,
	DEFAULT_BOTTOM_PANEL_HEIGHT: () => 300,
	DEFAULT_NAV_SIZE: () => 300,
	DEFAULT_RIGHT_PANEL_WIDTH: () => 400,
	focusableUIElements: () => focusableUIElements,
	getDefaultLayoutState: () => getDefaultLayoutState,
	init: () => init$9,
	isDesktopViewport: () => isDesktopViewport,
	isPagesViewMode: () => isPagesViewMode
}), document$2, isFunction, ActiveTabs$1, isPagesViewMode, getDefaultLayoutState, focusableUIElements, getIsNavShown, getIsPanelShown, getIsFullscreen, getRecentVisibleSizes, applyLayoutOptions, applyUiOptions, isDesktopViewport, init$9;
var init_layout = __esmMin((() => {
	init_core_events();
	init_dist$1();
	init_object();
	init_predicate();
	init_create();
	init_routes();
	init_merge();
	({document: document$2} = scope);
	isFunction = (val) => typeof val === "function";
	ActiveTabs$1 = {
		SIDEBAR: "sidebar",
		CANVAS: "canvas",
		ADDONS: "addons"
	};
	isPagesViewMode = (viewMode) => viewMode !== void 0 && viewMode !== "story" && viewMode !== "docs" && viewMode !== "review";
	getDefaultLayoutState = () => {
		return {
			ui: { enableShortcuts: true },
			layout: {
				initialActive: ActiveTabs$1.CANVAS,
				navSize: 300,
				bottomPanelHeight: 300,
				rightPanelWidth: 400,
				recentVisibleSizes: {
					navSize: 300,
					bottomPanelHeight: 300,
					rightPanelWidth: 400
				},
				panelPosition: "bottom",
				showNav: true,
				showPanel: true,
				showToolbar: true,
				showMobileNavigation: false
			},
			layoutCustomisations: {
				showPanel: void 0,
				showSidebar: void 0,
				showToolbar: void 0
			},
			selectedPanel: void 0,
			theme: create()
		};
	};
	focusableUIElements = {
		addonPanel: "storybook-panel-region",
		previewRegion: "storybook-preview-region",
		storySearchField: "storybook-explorer-searchfield",
		storyListMenu: "storybook-explorer-menu",
		storyPanelRoot: "storybook-panel-root",
		showAddonPanel: "storybook-show-addon-panel",
		sidebarRegion: "storybook-sidebar-region",
		showSidebar: "storybook-show-sidebar"
	};
	getIsNavShown = (state) => {
		return state.layout.navSize > 0;
	};
	getIsPanelShown = (state) => {
		const { bottomPanelHeight, rightPanelWidth, panelPosition } = state.layout;
		return panelPosition === "bottom" && bottomPanelHeight > 0 || panelPosition === "right" && rightPanelWidth > 0;
	};
	getIsFullscreen = (state) => {
		return !getIsNavShown(state) && !getIsPanelShown(state);
	};
	getRecentVisibleSizes = (layoutState) => {
		return {
			navSize: layoutState.navSize > 0 ? layoutState.navSize : layoutState.recentVisibleSizes.navSize,
			bottomPanelHeight: layoutState.bottomPanelHeight > 0 ? layoutState.bottomPanelHeight : layoutState.recentVisibleSizes.bottomPanelHeight,
			rightPanelWidth: layoutState.rightPanelWidth > 0 ? layoutState.rightPanelWidth : layoutState.recentVisibleSizes.rightPanelWidth
		};
	};
	applyLayoutOptions = (layoutState, options, singleStory) => {
		const { showPanel, showNav } = options ?? {};
		const layoutKeys = Object.keys(layoutState);
		const nextLayoutState = toMerged(layoutState, pick(options ?? {}, layoutKeys));
		if (showNav === false || singleStory) {
			nextLayoutState.recentVisibleSizes = getRecentVisibleSizes(nextLayoutState);
			nextLayoutState.navSize = 0;
		} else if (showNav === true) nextLayoutState.navSize = nextLayoutState.recentVisibleSizes.navSize;
		if (showPanel === false) {
			nextLayoutState.recentVisibleSizes = getRecentVisibleSizes(nextLayoutState);
			nextLayoutState.bottomPanelHeight = 0;
			nextLayoutState.rightPanelWidth = 0;
		} else if (showPanel === true) {
			nextLayoutState.bottomPanelHeight = nextLayoutState.recentVisibleSizes.bottomPanelHeight;
			nextLayoutState.rightPanelWidth = nextLayoutState.recentVisibleSizes.rightPanelWidth;
		}
		return nextLayoutState;
	};
	applyUiOptions = (uiState, options) => {
		const uiKeys = Object.keys(uiState);
		return toMerged(uiState, pick(options ?? {}, uiKeys));
	};
	isDesktopViewport = () => scope.matchMedia?.("(min-width: 600px)")?.matches ?? true;
	init$9 = ({ store, provider, singleStory }) => {
		const api = {
			toggleFullscreen(nextState) {
				return store.setState((state) => {
					const isFullscreen = getIsFullscreen(state);
					const shouldFullscreen = typeof nextState === "boolean" ? nextState : !isFullscreen;
					if (shouldFullscreen === isFullscreen) return { layout: state.layout };
					return shouldFullscreen ? { layout: {
						...state.layout,
						navSize: 0,
						bottomPanelHeight: 0,
						rightPanelWidth: 0,
						recentVisibleSizes: getRecentVisibleSizes(state.layout)
					} } : { layout: {
						...state.layout,
						navSize: state.singleStory ? 0 : state.layout.recentVisibleSizes.navSize,
						bottomPanelHeight: state.layout.recentVisibleSizes.bottomPanelHeight,
						rightPanelWidth: state.layout.recentVisibleSizes.rightPanelWidth
					} };
				}, { persistence: "session" });
			},
			togglePanel(nextState) {
				return store.setState((state) => {
					const isPanelShown = getIsPanelShown(state);
					const shouldShowPanel = typeof nextState === "boolean" ? nextState : !isPanelShown;
					if (shouldShowPanel === isPanelShown) return { layout: state.layout };
					return shouldShowPanel ? { layout: {
						...state.layout,
						bottomPanelHeight: state.layout.recentVisibleSizes.bottomPanelHeight,
						rightPanelWidth: state.layout.recentVisibleSizes.rightPanelWidth
					} } : { layout: {
						...state.layout,
						bottomPanelHeight: 0,
						rightPanelWidth: 0,
						recentVisibleSizes: getRecentVisibleSizes(state.layout)
					} };
				}, { persistence: "session" });
			},
			togglePanelPosition(position) {
				return store.setState((state) => {
					const nextPosition = position || (state.layout.panelPosition === "right" ? "bottom" : "right");
					return { layout: {
						...state.layout,
						panelPosition: nextPosition,
						bottomPanelHeight: state.layout.recentVisibleSizes.bottomPanelHeight,
						rightPanelWidth: state.layout.recentVisibleSizes.rightPanelWidth
					} };
				}, { persistence: "permanent" });
			},
			toggleNav(nextState) {
				if (!isDesktopViewport()) return store.setState((state) => ({ layout: {
					...state.layout,
					showMobileNavigation: typeof nextState === "boolean" ? nextState : !state.layout.showMobileNavigation
				} }));
				return store.setState((state) => {
					if (state.singleStory) return { layout: state.layout };
					const isNavShown = getIsNavShown(state);
					const shouldShowNav = typeof nextState === "boolean" ? nextState : !isNavShown;
					if (shouldShowNav === isNavShown) return { layout: state.layout };
					return shouldShowNav ? { layout: {
						...state.layout,
						navSize: state.layout.recentVisibleSizes.navSize
					} } : { layout: {
						...state.layout,
						navSize: 0,
						recentVisibleSizes: getRecentVisibleSizes(state.layout)
					} };
				}, { persistence: "session" });
			},
			setMobileNavigation(show) {
				return store.setState((state) => ({ layout: {
					...state.layout,
					showMobileNavigation: show
				} }));
			},
			toggleToolbar(toggled) {
				return store.setState((state) => {
					const value = typeof toggled !== "undefined" ? toggled : !state.layout.showToolbar;
					return { layout: {
						...state.layout,
						showToolbar: value
					} };
				}, { persistence: "session" });
			},
			setSizes({ navSize, bottomPanelHeight, rightPanelWidth }) {
				return store.setState((state) => {
					const nextLayoutState = {
						...state.layout,
						navSize: navSize ?? state.layout.navSize,
						bottomPanelHeight: bottomPanelHeight ?? state.layout.bottomPanelHeight,
						rightPanelWidth: rightPanelWidth ?? state.layout.rightPanelWidth
					};
					return { layout: {
						...nextLayoutState,
						recentVisibleSizes: getRecentVisibleSizes(nextLayoutState)
					} };
				}, { persistence: "session" });
			},
			/**
			* Attempts to focus (and select) an element identified by its ID. It is the responsibility of
			* the callee to ensure that the element is present in the DOM and that no focus trap is
			* available. When polling is enabled, this API polls and attempts to perform the focus for a
			* set duration (max 500ms), so that race conditions can be avoided with the current API
			* design.
			*
			* @param elementId The id of the element to focus.
			* @param options When a boolean, treated as the `select` option for backwards compatibility.
			*   When an object, may contain `select` and `poll` options.
			* @returns Whether the element was successfully focused. Returns a Promise when polling.
			*/
			focusOnUIElement(elementId, options) {
				const { forceFocus = false, select = false, poll = true, signal } = typeof options === "boolean" ? { select: options } : options ?? {};
				if (!elementId) return false;
				const attemptFocus = () => {
					const element = document$2.getElementById(elementId);
					if (!element) return false;
					element.focus();
					if (element !== document$2.activeElement && forceFocus && element.getAttribute("tabindex") === null) {
						element.setAttribute("tabindex", "-1");
						element.focus();
						if (element === document$2.activeElement) element.addEventListener("blur", () => element.removeAttribute("tabindex"), { once: true });
						else element.removeAttribute("tabindex");
					}
					if (element !== document$2.activeElement && element.id !== document$2.activeElement?.id) return false;
					if (select) element.select?.();
					return true;
				};
				if (attemptFocus()) return true;
				if (!poll || signal?.aborted) return false;
				return new Promise((resolve) => {
					const startTime = Date.now();
					const maxDuration = 500;
					const pollInterval = 50;
					const stop = (success) => {
						clearInterval(intervalId);
						resolve(success);
					};
					const intervalId = setInterval(() => {
						const elapsed = Date.now() - startTime;
						if (attemptFocus()) {
							stop(true);
							return;
						}
						if (elapsed >= maxDuration) stop(false);
					}, pollInterval);
					signal?.addEventListener("abort", () => stop(false), { once: true });
				});
			},
			getInitialOptions() {
				const userConfig = provider.getConfig();
				const defaultLayoutState = getDefaultLayoutState();
				const { theme, selectedPanel, layoutCustomisations } = userConfig;
				return {
					...defaultLayoutState,
					layout: applyLayoutOptions(defaultLayoutState.layout, userConfig.layout, !!singleStory),
					layoutCustomisations: {
						...defaultLayoutState.layoutCustomisations,
						...layoutCustomisations ?? {}
					},
					ui: applyUiOptions(defaultLayoutState.ui, userConfig.ui),
					selectedPanel: selectedPanel || defaultLayoutState.selectedPanel,
					theme: theme || defaultLayoutState.theme
				};
			},
			getIsFullscreen() {
				return getIsFullscreen(store.getState());
			},
			getIsPanelShown() {
				return getIsPanelShown(store.getState());
			},
			getIsNavShown() {
				return getIsNavShown(store.getState());
			},
			getNavAvailability() {
				const state = store.getState();
				if (isReviewManagerRoute(state.path, state.customQueryParams)) return "unavailable";
				return getIsNavShown(state) ? "shown" : "hidden";
			},
			getShowToolbarWithCustomisations(showToolbar) {
				const state = store.getState();
				if (isFunction(state.layoutCustomisations.showToolbar)) return state.layoutCustomisations.showToolbar(state, showToolbar) ?? showToolbar;
				return showToolbar;
			},
			getShowPanelWithCustomisations(showPanel) {
				const state = store.getState();
				if (isFunction(state.layoutCustomisations.showPanel)) return state.layoutCustomisations.showPanel(state, showPanel) ?? showPanel;
				return showPanel;
			},
			getNavSizeWithCustomisations(navSize) {
				const state = store.getState();
				if (isFunction(state.layoutCustomisations.showSidebar)) {
					const shouldShowNav = state.layoutCustomisations.showSidebar(state, navSize !== 0);
					if (navSize === 0 && shouldShowNav === true) return state.layout.recentVisibleSizes.navSize;
					else if (navSize !== 0 && shouldShowNav === false) return 0;
				}
				return navSize;
			},
			setOptions: (options) => {
				const { layout, ui, selectedPanel, theme } = store.getState();
				if (!options) return;
				const updatedLayout = applyLayoutOptions(layout, options.layout, !!singleStory);
				const updatedUi = applyUiOptions(ui, options.ui);
				const updatedTheme = {
					...theme,
					...options.theme
				};
				const modification = {};
				if (!isEqual(ui, updatedUi)) modification.ui = updatedUi;
				if (!isEqual(layout, updatedLayout)) modification.layout = updatedLayout;
				if (options.selectedPanel && !isEqual(selectedPanel, options.selectedPanel)) modification.selectedPanel = options.selectedPanel;
				if (Object.keys(modification).length) store.setState(modification, { persistence: "permanent" });
				if (!isEqual(theme, updatedTheme)) store.setState({ theme: updatedTheme });
			}
		};
		const persisted = pick(store.getState(), ["layout", "selectedPanel"]);
		if (persisted.layout) persisted.layout = {
			...persisted.layout,
			showMobileNavigation: false
		};
		provider.channel?.on(SET_CONFIG, () => {
			api.setOptions(merge_default(api.getInitialOptions(), persisted));
		});
		return {
			api,
			state: merge_default(api.getInitialOptions(), persisted)
		};
	};
}));
//#endregion
//#region src/manager-api/modules/notifications.ts
var notifications_exports = /* @__PURE__ */ __exportAll({ init: () => init$8 });
var init$8;
var init_notifications = __esmMin((() => {
	init_array();
	init$8 = ({ store }) => {
		return {
			api: {
				addNotification: (newNotification) => {
					store.setState(({ notifications }) => {
						const [existing, others] = partition(notifications, (n) => n.id === newNotification.id);
						existing.forEach((notification) => {
							if (notification.onClear) notification.onClear({
								dismissed: false,
								timeout: false
							});
						});
						return { notifications: [...others, newNotification] };
					});
				},
				clearNotification: (notificationId) => {
					store.setState(({ notifications }) => {
						const [matching, others] = partition(notifications, (n) => n.id === notificationId);
						matching.forEach((notification) => {
							if (notification.onClear) notification.onClear({
								dismissed: false,
								timeout: false
							});
						});
						return { notifications: others };
					});
				}
			},
			state: { notifications: [] }
		};
	};
}));
//#endregion
//#region src/manager-api/modules/open-in-editor.tsx
var open_in_editor_exports = /* @__PURE__ */ __exportAll({ init: () => init$7 });
var import_react$4, init$7;
var init_open_in_editor = __esmMin((() => {
	import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_core_events();
	init_dist$2();
	init$7 = ({ provider, fullAPI }) => {
		return {
			api: { openInEditor(payload) {
				return new Promise((resolve) => {
					const { file, line, column } = payload;
					const handler = (res) => {
						if (res.file === file && res.line === line && res.column === column) {
							provider.channel?.off(OPEN_IN_EDITOR_RESPONSE, handler);
							resolve(res);
						}
					};
					provider.channel?.on(OPEN_IN_EDITOR_RESPONSE, handler);
					provider.channel?.emit(OPEN_IN_EDITOR_REQUEST, payload);
				});
			} },
			state: { notifications: [] },
			init: async () => {
				const { color } = await import("./_manager-chunks/globals-runtime-D04kIJv5.js").then((n) => (n.G(), n.U));
				provider.channel?.on(OPEN_IN_EDITOR_RESPONSE, (payload) => {
					if (payload.error !== null) fullAPI.addNotification({
						id: "open-in-editor-error",
						content: {
							headline: "Failed to open in editor",
							subHeadline: payload.error || "Check the Storybook process on the command line for more details."
						},
						icon: /* @__PURE__ */ import_react$4.default.createElement(FailedIcon, { color: color.negative }),
						duration: 8e3
					});
				});
			}
		};
	};
}));
//#endregion
//#region src/manager-api/modules/provider.ts
var provider_exports = /* @__PURE__ */ __exportAll({ init: () => init$6 });
var init$6;
var init_provider = __esmMin((() => {
	init$6 = ({ provider }) => {
		return {
			api: provider.renderPreview ? { renderPreview: provider.renderPreview } : {},
			state: {}
		};
	};
}));
//#endregion
//#region src/manager-api/modules/settings.ts
var settings_exports = /* @__PURE__ */ __exportAll({ init: () => init$5 });
var init$5;
var init_settings = __esmMin((() => {
	init$5 = ({ store, navigate, fullAPI }) => {
		const isSettingsScreenActive = () => {
			const { path } = fullAPI.getUrlState();
			return !!(path || "").match(/^\/settings/);
		};
		return {
			state: { settings: { lastTrackedStoryId: null } },
			api: {
				closeSettings: () => {
					const { settings: { lastTrackedStoryId } } = store.getState();
					if (lastTrackedStoryId) fullAPI.selectStory(lastTrackedStoryId);
					else fullAPI.selectFirstStory();
				},
				changeSettingsTab: (path) => {
					navigate(`/settings/${path}`);
				},
				isSettingsScreenActive,
				retrieveSelection() {
					const { settings } = store.getState();
					return settings.lastTrackedStoryId;
				},
				storeSelection: async () => {
					const { storyId, settings } = store.getState();
					await store.setState({ settings: {
						...settings,
						lastTrackedStoryId: storyId
					} });
				}
			}
		};
	};
}));
//#endregion
//#region src/manager-api/lib/platform.ts
var navigator$1, isMacLike$1;
var init_platform = __esmMin((() => {
	init_dist$1();
	({navigator: navigator$1} = scope);
	isMacLike$1 = () => navigator$1 && navigator$1.platform ? !!navigator$1.platform.match(/(Mac|iPhone|iPod|iPad)/i) : false;
}));
//#endregion
//#region src/manager-api/lib/shortcut.ts
var controlOrMetaSymbol, controlOrMetaKey$1, optionOrAltSymbol, isShortcutTaken, eventToShortcut, shortcutMatchesShortcut, eventMatchesShortcut, keyToSymbol, shortcutToHumanString, shortcutToAriaKeyshortcuts;
var init_shortcut = __esmMin((() => {
	init_platform();
	controlOrMetaSymbol = () => isMacLike$1() ? "⌘" : "ctrl";
	controlOrMetaKey$1 = () => isMacLike$1() ? "meta" : "control";
	optionOrAltSymbol = () => isMacLike$1() ? "⌥" : "alt";
	isShortcutTaken = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
	eventToShortcut = (e) => {
		if ([
			"Meta",
			"Alt",
			"Control",
			"Shift",
			"Tab"
		].includes(e.key)) return null;
		const keys = [];
		if (e.altKey) keys.push("alt");
		if (e.ctrlKey) keys.push("control");
		if (e.metaKey) keys.push("meta");
		if (e.shiftKey) keys.push("shift");
		const codeUpper = e.code?.toUpperCase();
		const codeChar = codeUpper ? codeUpper.startsWith("KEY") && codeUpper.length === 4 ? codeUpper.replace("KEY", "") : codeUpper.startsWith("DIGIT") ? codeUpper.replace("DIGIT", "") : {
			MINUS: "-",
			EQUAL: "=",
			BRACKETLEFT: "[",
			BRACKETRIGHT: "]",
			BACKSLASH: "\\",
			SEMICOLON: ";",
			QUOTE: "'",
			BACKQUOTE: "`",
			COMMA: ",",
			PERIOD: ".",
			SLASH: "/"
		}[codeUpper] : void 0;
		if (e.key && e.key.length === 1 && e.key !== " ") {
			const key = e.key.toUpperCase();
			const code = codeChar;
			if (code && code.length === 1 && code !== key) keys.push([key, code]);
			else keys.push(key);
		} else if (e.key === "Dead" && codeChar) keys.push(codeChar);
		if (e.key === " ") keys.push("space");
		if (e.key === "Escape") keys.push("escape");
		if (e.key === "ArrowRight") keys.push("ArrowRight");
		if (e.key === "ArrowDown") keys.push("ArrowDown");
		if (e.key === "ArrowUp") keys.push("ArrowUp");
		if (e.key === "ArrowLeft") keys.push("ArrowLeft");
		return keys.length > 0 ? keys : null;
	};
	shortcutMatchesShortcut = (inputShortcut, shortcut) => {
		if (!inputShortcut || !shortcut) return false;
		if (inputShortcut.join("").startsWith("shift/")) inputShortcut.shift();
		if (inputShortcut.length !== shortcut.length) return false;
		return !inputShortcut.find((input, i) => Array.isArray(input) ? !input.includes(shortcut[i]) : input !== shortcut[i]);
	};
	eventMatchesShortcut = (e, shortcut) => {
		return shortcutMatchesShortcut(eventToShortcut(e), shortcut);
	};
	keyToSymbol = (key) => {
		if (key === "alt") return optionOrAltSymbol();
		if (key === "control") return "⌃";
		if (key === "meta") return "⌘";
		if (key === "shift") return "⇧​";
		if (key === "Enter" || key === "Backspace" || key === "Esc") return "";
		if (key === " ") return "SPACE";
		if (key === "ArrowUp") return "↑";
		if (key === "ArrowDown") return "↓";
		if (key === "ArrowLeft") return "←";
		if (key === "ArrowRight") return "→";
		return key?.toUpperCase();
	};
	shortcutToHumanString = (shortcut) => {
		return shortcut.map(keyToSymbol).join(" ");
	};
	shortcutToAriaKeyshortcuts = (shortcut) => {
		return shortcut.map((shortcut) => {
			if (shortcut === "+") return "plus";
			if (shortcut === " ") return "space";
			return shortcut;
		}).join("+");
	};
}));
//#endregion
//#region src/manager-api/modules/shortcuts.ts
var shortcuts_exports = /* @__PURE__ */ __exportAll({
	controlOrMetaKey: () => controlOrMetaKey,
	defaultShortcuts: () => defaultShortcuts,
	init: () => init$4,
	isMacLike: () => isMacLike,
	keys: () => keys
});
function wasFocusInElement(element) {
	return document$1.activeElement && element?.contains(document$1.activeElement);
}
function keys(o) {
	return Object.keys(o);
}
function shouldSkipShortcut(event) {
	const target = event.target;
	if (/input|textarea/i.test(target.tagName) || target.getAttribute("contenteditable") !== null) return true;
	if (target.closest("dialog[open]")) return true;
	return false;
}
var import_copy_to_clipboard, navigator, document$1, isMacLike, controlOrMetaKey, defaultShortcuts, addonsShortcuts, init$4;
var init_shortcuts = __esmMin((() => {
	init_core_events();
	init_dist$1();
	import_copy_to_clipboard = /* @__PURE__ */ __toESM(require_copy_to_clipboard(), 1);
	init_client_logger();
	init_shortcut();
	init_layout();
	({navigator, document: document$1} = scope);
	isMacLike = () => navigator && navigator.platform ? !!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) : false;
	controlOrMetaKey = () => isMacLike() ? "meta" : "control";
	defaultShortcuts = Object.freeze({
		fullScreen: ["alt", "F"],
		togglePanel: ["alt", "A"],
		panelPosition: ["alt", "D"],
		toggleNav: ["alt", "S"],
		toolbar: ["alt", "T"],
		search: [controlOrMetaKey(), "K"],
		focusNav: ["1"],
		focusIframe: ["2"],
		focusPanel: ["3"],
		prevComponent: ["alt", "ArrowUp"],
		nextComponent: ["alt", "ArrowDown"],
		prevStory: ["alt", "ArrowLeft"],
		nextStory: ["alt", "ArrowRight"],
		shortcutsPage: [
			controlOrMetaKey(),
			"shift",
			","
		],
		aboutPage: [controlOrMetaKey(), ","],
		collapseAll: [
			controlOrMetaKey(),
			"shift",
			"ArrowUp"
		],
		expandAll: [
			controlOrMetaKey(),
			"shift",
			"ArrowDown"
		],
		remount: ["alt", "R"],
		openInEditor: [
			"alt",
			"shift",
			"E"
		],
		openInIsolation: [
			"alt",
			"shift",
			"I"
		],
		copyStoryLink: [
			"alt",
			"shift",
			"L"
		],
		goToPreviousLandmark: ["shift", "F6"],
		goToNextLandmark: ["F6"],
		contextMenu: [
			controlOrMetaKey(),
			"shift",
			"U"
		]
	});
	addonsShortcuts = {};
	init$4 = ({ store, fullAPI, provider }) => {
		let pendingFocus;
		const focusFromShortcut = (elementId, { onUnavailable, ...options } = {}) => {
			pendingFocus?.abort();
			const controller = new AbortController();
			pendingFocus = controller;
			Promise.resolve(fullAPI.focusOnUIElement(elementId, {
				...options,
				poll: true,
				signal: controller.signal
			})).then((success) => {
				if (!success && !controller.signal.aborted) onUnavailable?.();
			});
		};
		const api = {
			getShortcutKeys() {
				return store.getState().shortcuts;
			},
			getDefaultShortcuts() {
				return {
					...defaultShortcuts,
					...api.getAddonsShortcutDefaults()
				};
			},
			getAddonsShortcuts() {
				return addonsShortcuts;
			},
			getAddonsShortcutLabels() {
				const labels = {};
				Object.entries(api.getAddonsShortcuts()).forEach(([actionName, { label }]) => {
					labels[actionName] = label;
				});
				return labels;
			},
			getAddonsShortcutDefaults() {
				const defaults = {};
				Object.entries(api.getAddonsShortcuts()).forEach(([actionName, { defaultShortcut }]) => {
					defaults[actionName] = defaultShortcut;
				});
				return defaults;
			},
			async setShortcuts(update) {
				const { shortcuts } = await store.setState((state) => ({ shortcuts: typeof update === "function" ? update(state.shortcuts) : update }), { persistence: "permanent" });
				return shortcuts;
			},
			async restoreAllDefaultShortcuts() {
				return api.setShortcuts(api.getDefaultShortcuts());
			},
			async setShortcut(action, value) {
				await api.setShortcuts((shortcuts) => ({
					...shortcuts,
					[action]: value
				}));
				return value;
			},
			async setAddonShortcut(addon, shortcut) {
				await api.setShortcuts((shortcuts) => ({
					...shortcuts,
					[`${addon}-${shortcut.actionName}`]: shortcut.defaultShortcut
				}));
				addonsShortcuts[`${addon}-${shortcut.actionName}`] = shortcut;
				return shortcut;
			},
			async restoreDefaultShortcut(action) {
				const defaultShortcut = api.getDefaultShortcuts()[action];
				return api.setShortcut(action, defaultShortcut);
			},
			handleKeydownEvent(event) {
				if (!store.getState().ui.enableShortcuts) return;
				const shortcut = eventToShortcut(event);
				const shortcuts = api.getShortcutKeys();
				const matchedFeature = keys(shortcuts).find((feature) => {
					if (!shortcutMatchesShortcut(shortcut, shortcuts[feature])) return false;
					if (fullAPI.getNavAvailability() === "unavailable" && [
						"focusNav",
						"search",
						"toggleNav"
					].includes(feature)) return false;
					if (!(feature in defaultShortcuts)) return feature in addonsShortcuts;
					return true;
				});
				if (matchedFeature) api.handleShortcutFeature(matchedFeature, event);
				return matchedFeature;
			},
			handleShortcutFeature(feature, event) {
				const { ui: { enableShortcuts }, storyId, refId, viewMode } = store.getState();
				if (!enableShortcuts) return;
				const isSidebarShortcutBlocked = fullAPI.getNavAvailability() === "unavailable";
				const isSidebarShortcutFeature = [
					"focusNav",
					"search",
					"toggleNav"
				].includes(feature);
				if (isSidebarShortcutBlocked && isSidebarShortcutFeature) return;
				if (event?.preventDefault) event.preventDefault();
				switch (feature) {
					case "goToNextLandmark":
					case "goToPreviousLandmark": break;
					case "focusNav":
						if (fullAPI.getIsFullscreen()) fullAPI.toggleFullscreen(false);
						if (!fullAPI.getIsNavShown()) fullAPI.toggleNav(true);
						focusFromShortcut(focusableUIElements.sidebarRegion, { forceFocus: true });
						break;
					case "search":
						if (fullAPI.getIsFullscreen()) fullAPI.toggleFullscreen(false);
						if (!fullAPI.getIsNavShown()) fullAPI.toggleNav(true);
						setTimeout(() => {
							focusFromShortcut(focusableUIElements.storySearchField, { select: true });
						}, 0);
						break;
					case "focusIframe":
						focusFromShortcut(focusableUIElements.previewRegion, { forceFocus: true });
						break;
					case "focusPanel":
						if (fullAPI.getIsFullscreen()) fullAPI.toggleFullscreen(false);
						if (!fullAPI.getIsPanelShown()) fullAPI.togglePanel(true);
						focusFromShortcut(focusableUIElements.addonPanel, { forceFocus: true });
						break;
					case "nextStory":
						fullAPI.jumpToStory(1);
						break;
					case "prevStory":
						fullAPI.jumpToStory(-1);
						break;
					case "nextComponent":
						fullAPI.jumpToSubtree(1);
						break;
					case "prevComponent":
						fullAPI.jumpToSubtree(-1);
						break;
					case "fullScreen":
						fullAPI.toggleFullscreen();
						break;
					case "togglePanel": {
						const wasPanelShown = fullAPI.getIsPanelShown();
						const panelElement = document$1.getElementById(focusableUIElements.addonPanel);
						fullAPI.togglePanel();
						if (wasPanelShown && wasFocusInElement(panelElement)) focusFromShortcut(focusableUIElements.showAddonPanel, { onUnavailable: () => document$1.body.focus() });
						if (!wasPanelShown) focusFromShortcut(focusableUIElements.addonPanel, { forceFocus: true });
						break;
					}
					case "toggleNav": {
						const isDesktop = isDesktopViewport();
						const wasNavShown = fullAPI.getIsNavShown();
						const sidebarElement = document$1.getElementById(focusableUIElements.sidebarRegion);
						fullAPI.toggleNav();
						if (isDesktop) {
							if (wasNavShown && wasFocusInElement(sidebarElement)) focusFromShortcut(focusableUIElements.showSidebar, { onUnavailable: () => document$1.body.focus() });
							if (!wasNavShown) focusFromShortcut(focusableUIElements.sidebarRegion, { forceFocus: true });
						}
						break;
					}
					case "toolbar":
						fullAPI.toggleToolbar();
						break;
					case "panelPosition":
						if (fullAPI.getIsFullscreen()) fullAPI.toggleFullscreen(false);
						if (!fullAPI.getIsPanelShown()) fullAPI.togglePanel(true);
						fullAPI.togglePanelPosition();
						break;
					case "aboutPage":
						fullAPI.navigate("/settings/about");
						break;
					case "shortcutsPage":
						fullAPI.navigate("/settings/shortcuts");
						break;
					case "collapseAll":
						fullAPI.emit(STORIES_COLLAPSE_ALL);
						break;
					case "expandAll":
						fullAPI.emit(STORIES_EXPAND_ALL);
						break;
					case "contextMenu":
						fullAPI.emit(SIDEBAR_OPEN_CONTEXT_MENU);
						break;
					case "remount":
						fullAPI.emit(FORCE_REMOUNT, { storyId });
						break;
					case "openInEditor":
						if (scope.CONFIG_TYPE === "DEVELOPMENT") fullAPI.openInEditor({ file: fullAPI.getCurrentStoryData().importPath });
						break;
					case "openInIsolation":
						if (storyId && viewMode === "story") {
							const { previewHref } = fullAPI.getStoryHrefs(storyId, { refId });
							window.open(previewHref, "_blank", "noopener,noreferrer");
						}
						break;
					case "copyStoryLink":
						if (storyId) {
							const { managerHref } = fullAPI.getStoryHrefs(storyId, { refId });
							(0, import_copy_to_clipboard.default)(managerHref);
						}
						break;
					default:
						if (feature in addonsShortcuts) addonsShortcuts[feature].action();
						else logger.warn(`api.handleShortcutFeature called with unknown feature: ${feature}.`);
						break;
				}
			}
		};
		const { shortcuts: persistedShortcuts = defaultShortcuts } = store.getState();
		const state = { shortcuts: keys(defaultShortcuts).reduce((acc, key) => ({
			...acc,
			[key]: persistedShortcuts[key] || defaultShortcuts[key]
		}), defaultShortcuts) };
		const initModule = () => {
			document$1.addEventListener("keydown", (event) => {
				if (!shouldSkipShortcut(event)) {
					const matched = api.handleKeydownEvent(event);
					if (matched && matched !== "goToNextLandmark" && matched !== "goToPreviousLandmark") event.stopPropagation();
				}
			}, { capture: true });
			window.addEventListener("keydown", (event) => {
				if (event.key === "Escape" && !event.defaultPrevented && !shouldSkipShortcut(event) && store.getState().ui.enableShortcuts && fullAPI.getIsFullscreen()) {
					event.preventDefault();
					fullAPI.toggleFullscreen(false);
				}
			});
			provider.channel?.on(PREVIEW_KEYDOWN, (data) => {
				api.handleKeydownEvent(data.event);
				if (data.event.key === "Escape" && store.getState().ui.enableShortcuts && fullAPI.getIsFullscreen()) fullAPI.toggleFullscreen(false);
				if (data.event.key === "F6") {
					const { key, altKey, ctrlKey, metaKey, shiftKey } = data.event;
					document$1.getElementById(focusableUIElements.previewRegion)?.dispatchEvent(new KeyboardEvent("keydown", {
						key,
						altKey,
						ctrlKey,
						metaKey,
						shiftKey,
						cancelable: true
					}));
				}
			});
		};
		return {
			api,
			state,
			init: initModule
		};
	};
}));
//#endregion
//#region src/manager-api/lib/url.ts
var buildNavigationUrl;
var init_url$1 = __esmMin((() => {
	buildNavigationUrl = (path, queryParams = {}) => {
		return [path, ...Object.entries(queryParams).filter(([k, v]) => k !== "path" && v !== null && v !== void 0).sort(([a], [b]) => a < b ? -1 : 1).map(([k, v]) => `${k}=${v}`)].join("&");
	};
}));
//#endregion
//#region src/manager-api/stores/status.ts
var statusStore, fullStatusStore, getStatusStoreByTypeId, useStatusStore, universalStatusStore;
var init_status = __esmMin((() => {
	init_status_store();
	init_universal_store();
	init_use_universal_store_manager();
	statusStore = createStatusStore({
		universalStatusStore: UniversalStore.create({
			...UNIVERSAL_STATUS_STORE_OPTIONS,
			leader: globalThis.CONFIG_TYPE === "PRODUCTION"
		}),
		useUniversalStore,
		environment: "manager"
	});
	({fullStatusStore, getStatusStoreByTypeId, useStatusStore, universalStatusStore} = statusStore);
}));
//#endregion
//#region src/manager-api/lib/filter-param.ts
var parseFilterParam;
var init_filter_param = __esmMin((() => {
	parseFilterParam = (param, transform) => {
		if (!param) return {
			included: [],
			excluded: []
		};
		const included = [];
		const excluded = [];
		param.split(";").forEach((raw) => {
			if (!raw) return;
			const isExcluded = raw.startsWith("!");
			const value = transform(isExcluded ? raw.slice(1) : raw);
			if (value == null) return;
			if (isExcluded) excluded.push(value);
			else included.push(value);
		});
		return {
			included,
			excluded
		};
	};
}));
//#endregion
//#region src/manager-api/modules/statuses.ts
var parseStatusesParam, serializeStatusesParam, computeStatusFilterFn;
var init_statuses = __esmMin((() => {
	init_status_store();
	init_filter_param();
	init_status();
	parseStatusesParam = (statusesParam) => parseFilterParam(statusesParam, toStatusValue);
	serializeStatusesParam = (included, excluded) => {
		if (!included.length && !excluded.length) return;
		const serializedIncluded = included.map((v) => statusValueShortName(v)).sort();
		const serializedExcluded = excluded.map((v) => `!${statusValueShortName(v)}`).sort();
		return [...serializedIncluded, ...serializedExcluded].join(";");
	};
	computeStatusFilterFn = (includedStatusFilters, excludedStatusFilters) => {
		return (entry) => {
			if (!includedStatusFilters.length && !excludedStatusFilters.length) return true;
			const storyStatuses = (fullStatusStore.getAll() ?? {})[entry.id];
			const storyStatusValues = storyStatuses ? Object.values(storyStatuses).map((s) => s.value) : [];
			const passesInclude = !includedStatusFilters.length || includedStatusFilters.some((v) => storyStatusValues.includes(v));
			const passesExclude = !excludedStatusFilters.length || excludedStatusFilters.every((v) => !storyStatusValues.includes(v));
			return passesInclude && passesExclude;
		};
	};
}));
//#endregion
//#region src/manager-api/modules/tags.ts
var import_memoizerific$1, BUILT_IN_URL_TAG_MAP, parseTagsParam, serializeTagsParam, getDefaultTagsFromPreset, computeStaticFilterFn, computeTagsFilterFn;
var init_tags = __esmMin((() => {
	import_memoizerific$1 = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	init_filter_param();
	init_tags$1();
	BUILT_IN_URL_TAG_MAP = {
		$docs: "_docs",
		$play: "_play",
		$test: "_test"
	};
	parseTagsParam = (tagsParam) => parseFilterParam(tagsParam, (raw) => BUILT_IN_URL_TAG_MAP[raw] ?? raw);
	serializeTagsParam = (included, excluded) => {
		if (!included.length && !excluded.length) return "";
		const reverseBuiltInUrlTagMap = Object.fromEntries(Object.entries(BUILT_IN_URL_TAG_MAP).map(([urlTag, internalTag]) => [internalTag, urlTag]));
		const serializedIncluded = included.map((tag) => reverseBuiltInUrlTagMap[tag] ?? tag).sort();
		const serializedExcluded = excluded.map((tag) => `!${reverseBuiltInUrlTagMap[tag] ?? tag}`).sort();
		return [...serializedIncluded, ...serializedExcluded].join(";");
	};
	getDefaultTagsFromPreset = (0, import_memoizerific$1.default)(1)((presets) => {
		const presetEntries = Object.entries(presets);
		return {
			included: presetEntries.filter(([, option]) => option.defaultFilterSelection === "include").map(([tag]) => tag),
			excluded: presetEntries.filter(([, option]) => option.defaultFilterSelection === "exclude").map(([tag]) => tag)
		};
	});
	computeStaticFilterFn = (tagPresets) => {
		const staticExcludeTags = Object.entries(tagPresets).reduce((acc, [tag, option]) => {
			if (option.hideFromSidebar) acc[tag] = true;
			return acc;
		}, {});
		return (item) => {
			const tags = item.tags ?? [];
			const isCsfAutodocsEntry = item.type === "docs" && !tags.includes(Tag.ATTACHED_MDX) && !tags.includes(Tag.UNATTACHED_MDX);
			return (tags.includes(Tag.DEV) || isCsfAutodocsEntry) && tags.filter((tag) => staticExcludeTags[tag]).length === 0;
		};
	};
	computeTagsFilterFn = (includedTagFilters, excludedTagFilters) => {
		const computeFilterFunctions = (set) => {
			return Object.values(set.reduce((acc, tag) => {
				if (Object.hasOwn(BUILT_IN_FILTERS, tag)) acc["built-in"].push(BUILT_IN_FILTERS[tag]);
				else acc.user.push(USER_TAG_FILTER(tag));
				return acc;
			}, {
				"built-in": [],
				user: []
			})).filter((group) => group.length > 0);
		};
		return (item) => {
			const included = computeFilterFunctions(includedTagFilters);
			const excluded = computeFilterFunctions(excludedTagFilters);
			return (!included.length || included.every((group) => group.some((filterFn) => filterFn(item, false)))) && (!excluded.length || excluded.every((group) => group.every((filterFn) => filterFn(item, true))));
		};
	};
}));
//#endregion
//#region src/manager-api/modules/stories.ts
var stories_exports = /* @__PURE__ */ __exportAll({ init: () => init$3 });
function removeRemovedOptions(options) {
	if (!options || typeof options === "string") return options;
	const result = { ...options };
	removedOptions.forEach((option) => {
		if (option in result) delete result[option];
	});
	return result;
}
var normalizeSelectStoryPayload, fetch, STORY_INDEX_PATH, TAGS_FILTER, STATIC_FILTER, STATUS_FILTER, STATUS_CHANGE_REBUILD_THROTTLE, BUILT_IN_TAG_IDS, removedOptions, FILTER_KEYS, init$3;
var init_stories = __esmMin((() => {
	init_client_logger();
	init_core_events();
	init_csf();
	init_router();
	init_routes();
	init_dist$1();
	init_function();
	init_tags$1();
	init_status_store();
	init_events();
	init_stories$1();
	init_url$1();
	init_status();
	init_statuses();
	init_tags();
	normalizeSelectStoryPayload = (payload) => {
		if ("storyId" in payload) return payload;
		const { viewMode, scrollTo } = payload;
		return {
			title: "title" in payload && payload.title || ("kind" in payload ? payload.kind : void 0),
			name: "name" in payload && payload.name || ("story" in payload ? payload.story : void 0),
			viewMode,
			scrollTo
		};
	};
	({fetch} = scope);
	STORY_INDEX_PATH = "./index.json";
	TAGS_FILTER = "tags-filter";
	STATIC_FILTER = "static-filter";
	STATUS_FILTER = "status-filter";
	STATUS_CHANGE_REBUILD_THROTTLE = 500;
	BUILT_IN_TAG_IDS = new Set(Object.keys(BUILT_IN_FILTERS));
	removedOptions = [
		"enableShortcuts",
		"theme",
		"showRoots"
	];
	FILTER_KEYS = {
		tag: {
			included: "includedTagFilters",
			excluded: "excludedTagFilters"
		},
		status: {
			included: "includedStatusFilters",
			excluded: "excludedStatusFilters"
		}
	};
	init$3 = ({ fullAPI, store, navigate, provider, state: { location } = {}, storyId: initialStoryId, viewMode: initialViewMode, docsOptions = {} }) => {
		const navigateWithQueryParams = (path, options) => {
			const { customQueryParams } = store.getState();
			navigate(buildNavigationUrl(path, customQueryParams ?? {}), options);
		};
		const persistFilters = (inputPatch) => {
			return store.setState(inputPatch, {
				persistence: "url",
				serialize: (s) => {
					const tagsValue = serializeTagsParam(s.includedTagFilters, s.excludedTagFilters);
					const statusesValue = serializeStatusesParam(s.includedStatusFilters, s.excludedStatusFilters);
					return {
						tags: tagsValue ?? null,
						statuses: statusesValue ?? null
					};
				}
			});
		};
		let urlFilterTelemetryEmitted = false;
		const addFilters = async (type, items, excluded) => {
			const { included, excluded: excludedKey } = FILTER_KEYS[type];
			const state = store.getState();
			const newIncluded = new Set(state[included]);
			const newExcluded = new Set(state[excludedKey]);
			for (const item of items) {
				const [target, other] = excluded ? [newExcluded, newIncluded] : [newIncluded, newExcluded];
				other.delete(item);
				target.add(item);
			}
			await persistFilters({
				[included]: Array.from(newIncluded),
				[excludedKey]: Array.from(newExcluded)
			});
		};
		const removeFilters = async (type, items) => {
			const { included, excluded } = FILTER_KEYS[type];
			const state = store.getState();
			const itemSet = new Set(items);
			await persistFilters({
				[included]: state[included].filter((v) => !itemSet.has(v)),
				[excluded]: state[excluded].filter((v) => !itemSet.has(v))
			});
		};
		const emitFilterTelemetry = (trigger, changed) => {
			const state = store.getState();
			const includedTags = (state.includedTagFilters ?? []).filter((id) => BUILT_IN_TAG_IDS.has(id));
			const excludedTags = (state.excludedTagFilters ?? []).filter((id) => BUILT_IN_TAG_IDS.has(id));
			const includedStatuses = state.includedStatusFilters ?? [];
			const excludedStatuses = state.excludedStatusFilters ?? [];
			const storyCounts = {};
			const entries = state.internal_index ? Object.values(state.internal_index.entries) : [];
			for (const tagId of /* @__PURE__ */ new Set([...includedTags, ...excludedTags])) {
				const filterDef = BUILT_IN_FILTERS[tagId];
				storyCounts[tagId] = entries.filter((entry) => filterDef(entry)).length;
			}
			if (includedStatuses.length > 0 || excludedStatuses.length > 0) {
				const statusCounts = countStatusesByValue(fullStatusStore.getAll());
				for (const statusValue of /* @__PURE__ */ new Set([...includedStatuses, ...excludedStatuses])) if (statusCounts[statusValue] !== void 0) storyCounts[statusValue] = statusCounts[statusValue];
			}
			provider.channel?.emit(SIDEBAR_FILTER_CHANGED, {
				trigger,
				changed,
				activeTagFilters: {
					included: includedTags,
					excluded: excludedTags
				},
				activeStatusFilters: {
					included: includedStatuses,
					excluded: excludedStatuses
				},
				storyCounts
			});
		};
		const api = {
			storyId: toId,
			getData: (storyId, refId) => {
				const result = api.resolveStory(storyId, refId);
				if (result?.type === "story" || result?.type === "docs") return result;
			},
			isPrepared: (storyId, refId) => {
				const data = api.getData(storyId, refId);
				if (!data) return false;
				return data.type === "story" ? data.prepared : true;
			},
			resolveStory: (storyId, refId) => {
				const { refs, index } = store.getState();
				if (refId && !refs[refId]) return;
				if (refId) return refs?.[refId]?.index?.[storyId] ?? void 0;
				return index ? index[storyId] : void 0;
			},
			getCurrentStoryData: () => {
				const { storyId, refId } = store.getState();
				return api.getData(storyId, refId);
			},
			getIndex: () => {
				const { internal_index } = store.getState();
				return internal_index;
			},
			getParameters: (storyIdOrCombo, parameterName) => {
				const { storyId, refId } = typeof storyIdOrCombo === "string" ? {
					storyId: storyIdOrCombo,
					refId: void 0
				} : storyIdOrCombo;
				const data = api.getData(storyId, refId);
				if (["story", "docs"].includes(data?.type)) {
					const { parameters } = data;
					if (parameters) return parameterName ? parameters[parameterName] : parameters;
				}
				return null;
			},
			getCurrentParameter: (parameterName) => {
				const { storyId, refId } = store.getState();
				return api.getParameters({
					storyId,
					refId
				}, parameterName) || void 0;
			},
			jumpToSubtree: (direction) => {
				const { filteredIndex, storyId, refs, refId } = store.getState();
				if (!api.getData(storyId, refId)) return;
				const hash = refId ? refs[refId].filteredIndex || {} : filteredIndex;
				if (!hash) return;
				const result = api.findSiblingStoryId(storyId, hash, direction, true);
				if (result) api.selectStory(result, void 0, { ref: refId });
			},
			jumpToStory: (direction) => {
				const { filteredIndex, storyId, refs, refId } = store.getState();
				const story = api.getData(storyId, refId);
				if (!story) return;
				const hash = story.refId ? refs[story.refId].filteredIndex : filteredIndex;
				if (!hash) return;
				const result = api.findSiblingStoryId(storyId, hash, direction, false);
				if (result) api.selectStory(result, void 0, { ref: refId });
			},
			selectFirstStory: () => {
				const state = store.getState();
				const { filteredIndex } = state;
				if (filteredIndex) {
					const firstStory = Object.keys(filteredIndex).find((id) => filteredIndex[id].type === "story");
					if (firstStory) api.selectStory(firstStory);
					return;
				}
				const { index } = state;
				if (!index) return;
				const firstStory = Object.keys(index).find((id) => index[id].type === "story");
				if (firstStory) {
					api.selectStory(firstStory);
					return;
				}
				navigateWithQueryParams("/");
			},
			selectStory: (titleOrId = void 0, name = void 0, options = {}) => {
				const { ref, scrollTo } = options;
				const { storyId, index, filteredIndex, refs, settings } = store.getState();
				const gotoStory = (entry) => {
					if (entry?.type === "docs" || entry?.type === "story") {
						store.setState({ settings: {
							...settings,
							lastTrackedStoryId: entry.id
						} });
						navigateWithQueryParams(`/${entry.type}/${entry.refId ? `${entry.refId}_${entry.id}` : entry.id}${scrollTo ? `#${scrollTo}` : ""}`);
						return true;
					}
					return false;
				};
				const kindSlug = storyId?.split("--", 2)[0];
				const hash = ref ? refs[ref].index : index;
				const filteredHash = ref ? refs[ref].filteredIndex : filteredIndex;
				if (!hash || !filteredHash) return;
				if (!name) {
					const entry = titleOrId ? hash[titleOrId] || hash[sanitize(titleOrId)] || Object.values(hash).find((e) => e.type === "docs" && sanitize(e.title) === sanitize(titleOrId)) : hash[kindSlug];
					if (!entry) throw new Error(`Unknown id or title: '${titleOrId}'`);
					if (!gotoStory(entry)) gotoStory(api.findLeafEntry(filteredHash, entry.id));
				} else if (!titleOrId) gotoStory(hash[toId(kindSlug, name)]);
				else {
					const id = ref ? `${ref}_${toId(titleOrId, name)}` : toId(titleOrId, name);
					if (hash[id]) gotoStory(hash[id]);
					else {
						const entry = hash[sanitize(titleOrId)];
						if (entry?.type === "component") {
							const foundId = entry.children.find((childId) => hash[childId].name === name);
							gotoStory(foundId ? hash[foundId] : void 0);
						}
					}
				}
			},
			findLeafEntry(index, storyId) {
				const entry = index[storyId];
				if (!entry) return;
				if (entry.type === "docs" || entry.type === "story") return entry;
				const childStoryId = entry.children.find((childId) => index[childId]);
				return childStoryId ? api.findLeafEntry(index, childStoryId) : void 0;
			},
			findLeafStoryId(index, storyId) {
				return api.findLeafEntry(index, storyId)?.id;
			},
			findAllLeafStoryIds(entryId) {
				const { index } = store.getState();
				if (!index) return [];
				const findChildEntriesRecursively = (currentEntryId, results = []) => {
					const node = index[currentEntryId];
					if (!node) return results;
					if (node.type === "story") results.push(node.id);
					if ("children" in node) node.children?.forEach((childId) => findChildEntriesRecursively(childId, results));
					return results;
				};
				return findChildEntriesRecursively(entryId, []);
			},
			findSiblingStoryId(storyId, index, direction, toSiblingGroup) {
				if (toSiblingGroup) {
					const lookupList = getComponentLookupList(index);
					const position = lookupList.findIndex((i) => i.includes(storyId));
					if (position === lookupList.length - 1 && direction > 0) return;
					if (position === 0 && direction < 0) return;
					if (lookupList[position + direction]) return lookupList[position + direction][0];
					return;
				}
				const lookupList = getStoriesLookupList(index);
				const position = lookupList.indexOf(storyId);
				if (position === lookupList.length - 1 && direction > 0) return;
				if (position === 0 && direction < 0) return;
				return lookupList[position + direction];
			},
			updateStoryArgs: (story, updatedArgs) => {
				const { id: storyId, refId } = story;
				provider.channel?.emit(UPDATE_STORY_ARGS, {
					storyId,
					updatedArgs,
					options: { target: refId }
				});
			},
			resetStoryArgs: (story, argNames) => {
				const { id: storyId, refId } = story;
				provider.channel?.emit(RESET_STORY_ARGS, {
					storyId,
					argNames,
					options: { target: refId }
				});
			},
			fetchIndex: async () => {
				try {
					const result = await fetch(STORY_INDEX_PATH);
					if (result.status !== 200) throw new Error(await result.text());
					const storyIndex = await result.json();
					await api.setIndex(storyIndex);
				} catch (err) {
					await store.setState({ indexError: err });
				}
			},
			setIndex: async (input) => {
				const { filteredIndex: oldFilteredHash, index: oldHash, filters } = store.getState();
				const allStatuses = fullStatusStore.getAll();
				const newFilteredHash = transformStoryIndexToStoriesHash(input, {
					provider,
					docsOptions,
					filters,
					allStatuses,
					statusFilterKey: STATUS_FILTER
				});
				const newHash = transformStoryIndexToStoriesHash(input, {
					provider,
					docsOptions,
					filters: {},
					allStatuses
				});
				await store.setState({
					internal_index: input,
					filteredIndex: addPreparedStories(newFilteredHash, oldFilteredHash),
					index: addPreparedStories(newHash, oldHash),
					indexError: void 0
				});
			},
			updateStory: async (storyId, update, ref) => {
				if (!ref) {
					const { index, filteredIndex } = store.getState();
					if (index && index[storyId]) index[storyId] = {
						...index[storyId],
						...update
					};
					if (filteredIndex && filteredIndex[storyId]) filteredIndex[storyId] = {
						...filteredIndex[storyId],
						...update
					};
					if (index || filteredIndex) await store.setState({
						index,
						filteredIndex
					});
				} else {
					const { id: refId, index, filteredIndex } = ref;
					const storyUpdates = {
						...ref.storyUpdates,
						[storyId]: {
							...ref.storyUpdates?.[storyId],
							...update
						}
					};
					if (index && index[storyId]) index[storyId] = {
						...index[storyId],
						...update
					};
					if (filteredIndex && filteredIndex[storyId]) filteredIndex[storyId] = {
						...filteredIndex[storyId],
						...update
					};
					await fullAPI.updateRef(refId, {
						index,
						filteredIndex,
						storyUpdates
					});
				}
			},
			updateDocs: async (docsId, update, ref) => {
				if (!ref) {
					const { index, filteredIndex } = store.getState();
					if (index) index[docsId] = {
						...index[docsId],
						...update
					};
					if (filteredIndex) filteredIndex[docsId] = {
						...filteredIndex[docsId],
						...update
					};
					if (index || filteredIndex) await store.setState({
						index,
						filteredIndex
					});
				} else {
					const { id: refId, index, filteredIndex } = ref;
					const storyUpdates = {
						...ref.storyUpdates,
						[docsId]: {
							...ref.storyUpdates?.[docsId],
							...update
						}
					};
					if (index && index[docsId]) index[docsId] = {
						...index[docsId],
						...update
					};
					if (filteredIndex && filteredIndex[docsId]) filteredIndex[docsId] = {
						...filteredIndex[docsId],
						...update
					};
					await fullAPI.updateRef(refId, {
						index,
						filteredIndex,
						storyUpdates
					});
				}
			},
			setPreviewInitialized: async (ref) => {
				if (!ref) store.setState({ previewInitialized: true });
				else fullAPI.updateRef(ref.id, { previewInitialized: true });
			},
			setFilter: async (id, filterFunction) => {
				await api.setFilters({ [id]: filterFunction });
			},
			setFilters: async (filters) => {
				await store.setState((state) => ({ filters: {
					...state.filters,
					...filters
				} }));
				if (!await applyCurrentFilters()) return;
				for (const id of Object.keys(filters)) provider.channel?.emit(SET_FILTER, { id });
			},
			resetTagFilters: async () => {
				await persistFilters((s) => ({
					includedTagFilters: s.defaultIncludedTagFilters,
					excludedTagFilters: s.defaultExcludedTagFilters
				}));
				await recomputeTagsFilter();
			},
			setAllTagFilters: async (included, excluded) => {
				await persistFilters({
					includedTagFilters: included,
					excludedTagFilters: excluded
				});
				await recomputeTagsFilter();
			},
			addTagFilters: async (tags, excluded) => {
				await addFilters("tag", tags, excluded);
				await recomputeTagsFilter();
				if (tags.length === 1 && BUILT_IN_TAG_IDS.has(tags[0])) emitFilterTelemetry("interaction", {
					filterType: "tag",
					filterId: tags[0],
					action: excluded ? "exclude" : "include"
				});
			},
			removeTagFilters: async (tags) => {
				await removeFilters("tag", tags);
				await recomputeTagsFilter();
				if (tags.length === 1 && BUILT_IN_TAG_IDS.has(tags[0])) emitFilterTelemetry("interaction", {
					filterType: "tag",
					filterId: tags[0],
					action: "remove"
				});
			},
			resetStatusFilters: async () => {
				await persistFilters({
					includedStatusFilters: [],
					excludedStatusFilters: []
				});
				await recomputeStatusFilter();
			},
			setAllStatusFilters: async (included, excluded) => {
				const prevState = store.getState();
				const prevIncluded = new Set(prevState.includedStatusFilters ?? []);
				const prevExcluded = new Set(prevState.excludedStatusFilters ?? []);
				const nextIncluded = new Set(included);
				const nextExcluded = new Set(excluded);
				await persistFilters({
					includedStatusFilters: included,
					excludedStatusFilters: excluded
				});
				await recomputeStatusFilter();
				const changedIds = /* @__PURE__ */ new Set([
					...prevIncluded,
					...prevExcluded,
					...nextIncluded,
					...nextExcluded
				]);
				for (const id of changedIds) {
					const wasIncluded = prevIncluded.has(id);
					const wasExcluded = prevExcluded.has(id);
					const isIncluded = nextIncluded.has(id);
					const isExcluded = nextExcluded.has(id);
					if (wasIncluded === isIncluded && wasExcluded === isExcluded) continue;
					let action;
					if (isIncluded) action = "include";
					else if (isExcluded) action = "exclude";
					else action = "remove";
					emitFilterTelemetry("interaction", {
						filterType: "status",
						filterId: id,
						action
					});
				}
			},
			addStatusFilters: async (statuses, excluded) => {
				await addFilters("status", statuses, excluded);
				await recomputeStatusFilter();
				if (statuses.length === 1) emitFilterTelemetry("interaction", {
					filterType: "status",
					filterId: statuses[0],
					action: excluded ? "exclude" : "include"
				});
			},
			removeStatusFilters: async (statuses) => {
				await removeFilters("status", statuses);
				await recomputeStatusFilter();
				if (statuses.length === 1) emitFilterTelemetry("interaction", {
					filterType: "status",
					filterId: statuses[0],
					action: "remove"
				});
			}
		};
		const applyCurrentFilters = async () => {
			const { internal_index: index } = store.getState();
			if (!index) return false;
			await api.setIndex(index);
			const refs = await fullAPI.getRefs();
			for (const [refId, { internal_index, ...ref }] of Object.entries(refs)) await fullAPI.setRef(refId, {
				...ref,
				storyIndex: internal_index
			}, true);
			return true;
		};
		let statusFilterRebuildQueued = false;
		let statusFilterRebuildInFlight = false;
		const flushStatusFilterRebuild = async () => {
			if (statusFilterRebuildInFlight) return;
			statusFilterRebuildInFlight = true;
			try {
				while (statusFilterRebuildQueued) {
					statusFilterRebuildQueued = false;
					try {
						await applyCurrentFilters();
					} catch (error) {
						logger.warn("Failed to rebuild story index after status change:", error);
					}
				}
			} finally {
				statusFilterRebuildInFlight = false;
				if (statusFilterRebuildQueued) flushStatusFilterRebuild();
			}
		};
		const requestStatusFilterRebuild = () => {
			statusFilterRebuildQueued = true;
			flushStatusFilterRebuild();
		};
		const recomputeTagsFilter = () => {
			const { includedTagFilters, excludedTagFilters } = store.getState();
			return api.setFilters({ [TAGS_FILTER]: computeTagsFilterFn(includedTagFilters, excludedTagFilters) });
		};
		const recomputeStatusFilter = () => {
			const { includedStatusFilters, excludedStatusFilters } = store.getState();
			return api.setFilters({ [STATUS_FILTER]: computeStatusFilterFn(includedStatusFilters ?? [], excludedStatusFilters ?? []) });
		};
		provider.channel?.on(STORY_SPECIFIED, function handler({ storyId, viewMode }) {
			const { sourceType } = getEventMetadata(this, fullAPI);
			if (sourceType === "local") {
				const state = store.getState();
				const isCanvasRoute = !isReviewManagerRoute(state.path, state.customQueryParams) && (state.path === "/" || state.viewMode === "story" || state.viewMode === "docs");
				const stateHasSelection = state.viewMode && state.storyId;
				const stateSelectionDifferent = state.viewMode !== viewMode || state.storyId !== storyId;
				const { type } = state.index?.[state.storyId] || {};
				const isLeaf = type === "story" || type === "docs";
				/**
				* When storybook starts, we want to navigate to the first story. But there are a few
				* exceptions:
				*
				* - If the current storyId and viewMode are already set/correct AND the url section is a
				*   leaf-type.
				* - If the user has navigated away already.
				* - If the user started storybook with a specific page-URL like "/settings/about"
				*/
				if (isCanvasRoute) {
					const { filteredIndex } = state;
					if (filteredIndex && !stateHasSelection) {
						if (!(filteredIndex[storyId]?.type === "story")) {
							const firstFiltered = filteredIndex ? Object.keys(filteredIndex).find((id) => {
								const entry = filteredIndex[id];
								return entry.type === "story" || entry.type === "docs";
							}) : void 0;
							if (firstFiltered) navigateWithQueryParams(`/${viewMode}/${firstFiltered}`);
							return;
						}
					}
					if (stateHasSelection && stateSelectionDifferent && isLeaf) provider.channel?.emit(SET_CURRENT_STORY, {
						storyId: state.storyId,
						viewMode: state.viewMode
					});
					else if (stateSelectionDifferent) navigateWithQueryParams(`/${viewMode}/${storyId}`);
				}
			}
		});
		provider.channel?.on(CURRENT_STORY_WAS_SET, function handler() {
			const { ref } = getEventMetadata(this, fullAPI);
			api.setPreviewInitialized(ref);
		});
		provider.channel?.on(STORY_CHANGED, function handler() {
			const { sourceType } = getEventMetadata(this, fullAPI);
			if (sourceType === "local") {
				const options = api.getCurrentParameter("options");
				if (options) fullAPI.setOptions(removeRemovedOptions(options));
			}
		});
		provider.channel?.on(STORY_PREPARED, function handler({ id, ...update }) {
			const { ref, sourceType } = getEventMetadata(this, fullAPI);
			api.updateStory(id, {
				...update,
				prepared: true
			}, ref);
			if (!ref) {
				if (!store.getState().hasCalledSetOptions) {
					const { options } = update.parameters;
					fullAPI.setOptions(removeRemovedOptions(options));
					store.setState({ hasCalledSetOptions: true });
				}
			}
			if (sourceType === "local") {
				const { storyId, index, refId } = store.getState();
				if (!index) return;
				const toBePreloaded = Array.from(/* @__PURE__ */ new Set([api.findSiblingStoryId(storyId, index, 1, true), api.findSiblingStoryId(storyId, index, -1, true)])).filter(Boolean);
				provider.channel?.emit(PRELOAD_ENTRIES, {
					ids: toBePreloaded,
					options: { target: refId }
				});
			}
		});
		provider.channel?.on(DOCS_PREPARED, function handler({ id, ...update }) {
			const { ref } = getEventMetadata(this, fullAPI);
			api.updateStory(id, {
				...update,
				prepared: true
			}, ref);
		});
		provider.channel?.on(SET_INDEX, function handler(index) {
			const { ref } = getEventMetadata(this, fullAPI);
			if (!ref) {
				api.setIndex(index);
				const options = api.getCurrentParameter("options");
				fullAPI.setOptions(removeRemovedOptions(options));
			} else fullAPI.setRef(ref.id, {
				...ref,
				storyIndex: index
			}, true);
		});
		provider.channel?.on(SELECT_STORY, function handler(rawPayload) {
			const { ref } = getEventMetadata(this, fullAPI);
			const payload = normalizeSelectStoryPayload(rawPayload);
			if ("storyId" in payload) {
				const { storyId, viewMode, scrollTo } = payload;
				fullAPI.selectStory(storyId, void 0, {
					viewMode,
					scrollTo,
					ref: ref?.id
				});
			} else if (payload.title || payload.name) {
				const { title, name, viewMode, scrollTo } = payload;
				fullAPI.selectStory(title, name, {
					viewMode,
					scrollTo,
					ref: ref?.id
				});
			} else logger.warn("Received a SELECT_STORY event without storyId, title or name; ignoring it.");
		});
		provider.channel?.on(STORY_ARGS_UPDATED, function handleStoryArgsUpdated({ storyId, args }) {
			const { ref } = getEventMetadata(this, fullAPI);
			api.updateStory(storyId, { args }, ref);
		});
		provider.channel?.on(CONFIG_ERROR, function handleConfigError(err) {
			const { ref } = getEventMetadata(this, fullAPI);
			api.setPreviewInitialized(ref);
		});
		provider.channel?.on(STORY_MISSING, function handleConfigError(err) {
			const { ref } = getEventMetadata(this, fullAPI);
			api.setPreviewInitialized(ref);
		});
		provider.channel?.on(SET_CONFIG, async () => {
			const { includedTagFilters, excludedTagFilters, includedStatusFilters, excludedStatusFilters, tagPresets } = store.getState();
			await api.setFilters({
				[STATIC_FILTER]: computeStaticFilterFn(tagPresets),
				[TAGS_FILTER]: computeTagsFilterFn(includedTagFilters, excludedTagFilters),
				[STATUS_FILTER]: computeStatusFilterFn(includedStatusFilters, excludedStatusFilters)
			});
		});
		fullStatusStore.onAllStatusChange(throttle(requestStatusFilterRebuild, STATUS_CHANGE_REBUILD_THROTTLE, { edges: ["leading", "trailing"] }));
		const tagPresets = scope.TAGS_OPTIONS || {};
		const defaultTags = getDefaultTagsFromPreset(tagPresets);
		const { tags, statuses } = queryFromLocation(location ?? { search: "" });
		const parsedTags = parseTagsParam(tags);
		const hasTagsParam = tags !== void 0;
		const initialIncluded = hasTagsParam ? parsedTags.included : defaultTags.included;
		const initialExcluded = hasTagsParam ? parsedTags.excluded : defaultTags.excluded;
		const parsedStatuses = parseStatusesParam(statuses);
		const initialIncludedStatuses = parsedStatuses.included;
		const initialExcludedStatuses = parsedStatuses.excluded;
		return {
			api,
			state: {
				storyId: initialStoryId,
				viewMode: initialViewMode,
				hasCalledSetOptions: false,
				previewInitialized: false,
				filters: {
					[STATIC_FILTER]: computeStaticFilterFn(tagPresets),
					[TAGS_FILTER]: computeTagsFilterFn(initialIncluded, initialExcluded),
					[STATUS_FILTER]: computeStatusFilterFn(initialIncludedStatuses, initialExcludedStatuses)
				},
				tagPresets,
				defaultIncludedTagFilters: defaultTags.included,
				defaultExcludedTagFilters: defaultTags.excluded,
				includedTagFilters: initialIncluded,
				excludedTagFilters: initialExcluded,
				includedStatusFilters: initialIncludedStatuses,
				excludedStatusFilters: initialExcludedStatuses
			},
			init: async () => {
				provider.channel?.on(STORY_INDEX_INVALIDATED, () => api.fetchIndex());
				await api.fetchIndex();
				if (urlFilterTelemetryEmitted) return;
				urlFilterTelemetryEmitted = true;
				const hasBuiltInTagFilters = initialIncluded.some((id) => BUILT_IN_TAG_IDS.has(id)) || initialExcluded.some((id) => BUILT_IN_TAG_IDS.has(id));
				const hasStatusFilters = initialIncludedStatuses.length > 0 || initialExcludedStatuses.length > 0;
				if (hasBuiltInTagFilters || hasStatusFilters) emitFilterTelemetry("url");
			}
		};
	};
}));
//#endregion
//#region src/manager-api/modules/url.ts
var url_exports = /* @__PURE__ */ __exportAll({
	getCustomQueryParams: () => getCustomQueryParams,
	init: () => init$2
});
var parseBoolean, parseSerializedParam, mergeSerializedParams, resolveIframeUrl, LAYOUT_QUERY_PARAM_KEYS, getCustomQueryParams, prevParams, initialUrlSupport, init$2;
var init_url = __esmMin((() => {
	init_core_events();
	init_router();
	init_dist$1();
	init_dist$3();
	init_object();
	init_main();
	init_merge();
	init_url$1();
	init_layout();
	parseBoolean = (value) => {
		if (value === "true" || value === "1") return true;
		if (value === "false" || value === "0") return false;
	};
	parseSerializedParam = (param) => Object.fromEntries(param.split(";").map((pair) => pair.split(":")).filter(([key, value]) => key && value !== void 0).map(([key, value]) => [key, encodeURIComponent(value)]));
	mergeSerializedParams = (params, extraParams) => {
		const pairs = parseSerializedParam(params);
		const extra = parseSerializedParam(extraParams);
		return Object.entries({
			...pairs,
			...extra
		}).map(([key, value]) => `${key}:${value}`).join(";");
	};
	resolveIframeUrl = (baseUrl, { absolute }) => {
		const resolved = new URL("iframe.html", baseUrl);
		return absolute ? resolved.href : `${resolved.pathname}${resolved.search}${resolved.hash}`;
	};
	LAYOUT_QUERY_PARAM_KEYS = [
		"full",
		"panel",
		"nav",
		"shortcuts",
		"addonPanel",
		"tabs",
		"path"
	];
	getCustomQueryParams = (location) => omit(queryFromLocation(location), LAYOUT_QUERY_PARAM_KEYS);
	initialUrlSupport = ({ state: { location, path, viewMode, storyId: storyIdFromUrl }, singleStory }) => {
		const { full, panel, nav, shortcuts, addonPanel } = queryFromLocation(location);
		let navSize;
		let bottomPanelHeight;
		let rightPanelWidth;
		if (parseBoolean(full) === true) {
			navSize = 0;
			bottomPanelHeight = 0;
			rightPanelWidth = 0;
		} else if (parseBoolean(full) === false) {
			navSize = 300;
			bottomPanelHeight = 300;
			rightPanelWidth = 400;
		}
		if (!singleStory) {
			if (parseBoolean(nav) === true) navSize = 300;
			if (parseBoolean(nav) === false) navSize = 0;
		}
		if (parseBoolean(panel) === false) {
			bottomPanelHeight = 0;
			rightPanelWidth = 0;
		}
		const layout = {
			navSize,
			bottomPanelHeight,
			rightPanelWidth,
			panelPosition: ["right", "bottom"].includes(panel) ? panel : void 0
		};
		const ui = { enableShortcuts: parseBoolean(shortcuts) };
		const selectedPanel = addonPanel || void 0;
		const storyId = storyIdFromUrl;
		const otherParams = getCustomQueryParams(location);
		const customQueryParams = dequal(prevParams, otherParams) ? prevParams : otherParams;
		prevParams = customQueryParams;
		return {
			viewMode,
			layout,
			ui,
			selectedPanel,
			location,
			path,
			customQueryParams,
			storyId
		};
	};
	init$2 = (moduleArgs) => {
		const { store, navigate, provider, fullAPI } = moduleArgs;
		const navigateTo = (path, queryParams = {}, options = {}) => {
			return navigate(buildNavigationUrl(path, queryParams), options);
		};
		const api = {
			getStoryHrefs(storyId, options = {}) {
				const { id: currentStoryId, refId: currentRefId } = fullAPI.getCurrentStoryData() ?? {};
				const isCurrentStory = storyId === currentStoryId && options.refId === currentRefId;
				const { customQueryParams, location, refs } = store.getState();
				const { base, inheritArgs = isCurrentStory, inheritGlobals = true, queryParams = {}, refId, viewMode = "story", embed = false, freeze = false } = options;
				if (refId && !refs[refId]) throw new Error(`Invalid refId: ${refId}`);
				const pathname = location.pathname || "/";
				const originAddress = scope.window.location.origin + pathname;
				const networkAddress = scope.STORYBOOK_NETWORK_ADDRESS ?? originAddress;
				const managerBase = base === "origin" ? originAddress : base === "network" ? networkAddress : pathname;
				const previewBaseUrl = base ? managerBase : scope.document?.baseURI || originAddress;
				const previewBase = refId ? refs[refId].url + "/iframe.html" : resolveIframeUrl(previewBaseUrl, { absolute: Boolean(base) });
				const refParam = refId ? `&refId=${encodeURIComponent(refId)}` : "";
				const { args = "", globals = "", ...otherParams } = queryParams;
				let argsParam = inheritArgs ? mergeSerializedParams(customQueryParams?.args ?? "", args) : args;
				let globalsParam = inheritGlobals ? mergeSerializedParams(customQueryParams?.globals ?? "", globals) : globals;
				const managerQueryParams = omit(otherParams, ["embed", "freeze"]);
				const previewQueryParams = omit(otherParams, [
					"id",
					"viewMode",
					"embed",
					"freeze"
				]);
				let customManagerParams = stringify$1(managerQueryParams, {
					nesting: true,
					nestingSyntax: "js"
				});
				let customPreviewParams = stringify$1(previewQueryParams, {
					nesting: true,
					nestingSyntax: "js"
				});
				argsParam = argsParam && `&args=${argsParam}`;
				globalsParam = globalsParam && `&globals=${globalsParam}`;
				customManagerParams = customManagerParams && `&${customManagerParams}`;
				customPreviewParams = customPreviewParams && `&${customPreviewParams}`;
				const embedParam = embed ? "&embed=true" : "";
				const freezeParam = freeze ? "&freeze=finished" : "";
				return {
					managerHref: `${managerBase}?path=/${viewMode}/${refId ? `${refId}_` : ""}${storyId}${argsParam}${globalsParam}${customManagerParams}`,
					previewHref: `${previewBase}?id=${storyId}&viewMode=${viewMode}${refParam}${argsParam}${refId ? "" : globalsParam}${customPreviewParams}${embedParam}${freezeParam}`
				};
			},
			getQueryParam(key) {
				const { customQueryParams } = store.getState();
				return customQueryParams ? customQueryParams[key] : void 0;
			},
			getUrlState() {
				const { location, path, customQueryParams, storyId, url, viewMode } = store.getState();
				return {
					path,
					hash: location?.hash ?? "",
					queryParams: customQueryParams,
					storyId,
					url,
					viewMode
				};
			},
			setQueryParams(input) {
				const { customQueryParams } = store.getState();
				const update = { ...customQueryParams };
				for (const [key, value] of Object.entries(input)) if (value === null || value === void 0) delete update[key];
				else update[key] = value;
				if (!dequal(customQueryParams, update)) {
					store.setState({ customQueryParams: update });
					provider.channel?.emit(UPDATE_QUERY_PARAMS, update);
				}
			},
			applyQueryParams(input, options) {
				const { path, hash = "", queryParams } = api.getUrlState();
				navigateTo(`${path}${hash}`, {
					...queryParams,
					...input
				}, options);
				api.setQueryParams(input);
			},
			navigateUrl(url, options) {
				navigate(url, {
					plain: true,
					...options
				});
			}
		};
		/**
		* Sets `args` parameter in URL, omitting any args that have their initial value or cannot be
		* unserialized safely.
		*/
		const updateArgsParam = () => {
			const { path, hash = "", queryParams, viewMode } = api.getUrlState();
			if (viewMode !== "story") return;
			const currentStory = fullAPI.getCurrentStoryData();
			if (currentStory?.type !== "story") return;
			const { args, initialArgs } = currentStory;
			const argsString = buildArgsParam(initialArgs, args);
			navigateTo(`${path}${hash}`, {
				...queryParams,
				args: argsString || null
			}, { replace: true });
			api.setQueryParams({ args: argsString || null });
		};
		provider.channel?.on(SET_CURRENT_STORY, () => updateArgsParam());
		let handleOrId;
		provider.channel?.on(STORY_ARGS_UPDATED, () => {
			if ("requestIdleCallback" in scope.window) {
				if (handleOrId) scope.window.cancelIdleCallback(handleOrId);
				handleOrId = scope.window.requestIdleCallback(updateArgsParam, { timeout: 1e3 });
			} else {
				if (handleOrId) clearTimeout(handleOrId);
				setTimeout(updateArgsParam, 100);
			}
		});
		provider.channel?.on(GLOBALS_UPDATED, ({ userGlobals, initialGlobals }) => {
			const { path, hash = "", queryParams } = api.getUrlState();
			const globalsString = buildArgsParam(initialGlobals, merge_default(initialGlobals, userGlobals));
			navigateTo(`${path}${hash}`, {
				...queryParams,
				globals: globalsString || null
			}, { replace: true });
			api.setQueryParams({ globals: globalsString || null });
		});
		provider.channel?.on(NAVIGATE_URL, (url, options) => {
			api.navigateUrl(url, options);
		});
		return {
			api,
			state: initialUrlSupport(moduleArgs),
			init: () => {
				store.registerPersistenceHandler("url", (_patch, serialize) => {
					if (serialize) {
						const params = serialize(store.getState());
						api.applyQueryParams(params, { replace: true });
					}
				});
			}
		};
	};
}));
//#endregion
//#region src/manager-api/version.ts
var version;
var init_version = __esmMin((() => {
	version = "11.0.0-beta.1";
}));
//#endregion
//#region src/manager-api/modules/versions.ts
var versions_exports = /* @__PURE__ */ __exportAll({ init: () => init$1 });
var import_memoizerific, import_diff, import_gt, import_major, import_minor, import_patch, import_prerelease, VERSIONCHECK, getVersionCheckData, normalizeRendererName, init$1;
var init_versions = __esmMin((() => {
	init_dist$1();
	import_memoizerific = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	import_diff = /* @__PURE__ */ __toESM(require_diff(), 1);
	import_gt = /* @__PURE__ */ __toESM(require_gt(), 1);
	import_major = /* @__PURE__ */ __toESM(require_major(), 1);
	import_minor = /* @__PURE__ */ __toESM(require_minor(), 1);
	import_patch = /* @__PURE__ */ __toESM(require_patch(), 1);
	import_prerelease = /* @__PURE__ */ __toESM(require_prerelease(), 1);
	init_version();
	({VERSIONCHECK} = scope);
	getVersionCheckData = (0, import_memoizerific.default)(1)(() => {
		try {
			return { ...JSON.parse(VERSIONCHECK).data || {} };
		} catch (e) {
			return {};
		}
	});
	normalizeRendererName = (renderer) => {
		if (renderer.includes("vue")) return "vue";
		return renderer;
	};
	init$1 = ({ store }) => {
		const { dismissedVersionNotification } = store.getState();
		const state = {
			versions: {
				current: { version },
				...getVersionCheckData()
			},
			dismissedVersionNotification
		};
		const api = {
			getCurrentVersion: () => {
				const { versions: { current } } = store.getState();
				return current;
			},
			getLatestVersion: () => {
				const { versions: { latest, next, current } } = store.getState();
				if (current && (0, import_prerelease.default)(current.version) && next) return latest && (0, import_gt.default)(latest.version, next.version) ? latest : next;
				return latest;
			},
			getDocsUrl: ({ asset, subpath = asset, versioned, renderer, ref = "ui" }) => {
				const { versions } = store.getState();
				const latestVersion = versions.latest?.version;
				const currentVersion = versions.current?.version;
				const activeVersion = currentVersion?.startsWith("0.0.0") && latestVersion || currentVersion;
				let url = `https://storybook.js.org/${asset ? "docs-assets" : "docs"}/`;
				if (asset && activeVersion) url += `${(0, import_major.default)(activeVersion)}.${(0, import_minor.default)(activeVersion)}/`;
				else if (versioned && activeVersion && latestVersion) {
					const versionDiff = (0, import_diff.default)(latestVersion, activeVersion);
					if (!(versionDiff === "patch" || versionDiff === null)) url += `${(0, import_major.default)(activeVersion)}.${(0, import_minor.default)(activeVersion)}/`;
				}
				const [cleanedSubpath, hash] = subpath?.split("#") || [];
				if (cleanedSubpath) url += asset ? cleanedSubpath : `${cleanedSubpath}/`;
				if (renderer && typeof scope.STORYBOOK_RENDERER !== "undefined") {
					const rendererName = scope.STORYBOOK_RENDERER;
					if (rendererName) url += `?renderer=${normalizeRendererName(rendererName)}`;
				}
				if (ref) url += `${url.includes("?") ? "&" : "?"}ref=${ref}`;
				if (hash) url += `#${hash}`;
				return url;
			},
			versionUpdateAvailable: () => {
				const latest = api.getLatestVersion();
				const current = api.getCurrentVersion();
				if (latest) {
					if (!latest.version) return true;
					if (!current.version) return true;
					const actualCurrent = !!(0, import_prerelease.default)(current.version) ? `${(0, import_major.default)(current.version)}.${(0, import_minor.default)(current.version)}.${(0, import_patch.default)(current.version)}` : current.version;
					const releaseDiff = (0, import_diff.default)(actualCurrent, latest.version);
					return (0, import_gt.default)(latest.version, actualCurrent) && releaseDiff !== "patch" && !releaseDiff.includes("pre");
				}
				return false;
			}
		};
		const initModule = async () => {
			const { versions = {} } = store.getState();
			const { latest, next } = getVersionCheckData();
			await store.setState({ versions: {
				...versions,
				latest,
				next
			} });
		};
		return {
			init: initModule,
			state,
			api
		};
	};
}));
//#endregion
//#region src/manager-api/modules/whatsnew.tsx
var whatsnew_exports = /* @__PURE__ */ __exportAll({ init: () => init });
var import_react$3, WHATS_NEW_NOTIFICATION_ID, StorybookIcon, init;
var init_whatsnew = __esmMin((() => {
	import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_core_events();
	init_dist$1();
	WHATS_NEW_NOTIFICATION_ID = "whats-new";
	StorybookIcon = ({ color = "currentColor", size = 14 }) => {
		return /* @__PURE__ */ import_react$3.default.createElement("svg", {
			width: size,
			height: size,
			viewBox: "0 0 14 14",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, /* @__PURE__ */ import_react$3.default.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M2.042.616a.704.704 0 00-.66.729L1.816 12.9c.014.367.306.66.672.677l9.395.422h.032a.704.704 0 00.704-.703V.704c0-.015 0-.03-.002-.044a.704.704 0 00-.746-.659l-.773.049.057 1.615a.105.105 0 01-.17.086l-.52-.41-.617.468a.105.105 0 01-.168-.088L9.746.134 2.042.616zm8.003 4.747c-.247.192-2.092.324-2.092.05.04-1.045-.429-1.091-.689-1.091-.247 0-.662.075-.662.634 0 .57.607.893 1.32 1.27 1.014.538 2.24 1.188 2.24 2.823 0 1.568-1.273 2.433-2.898 2.433-1.676 0-3.141-.678-2.976-3.03.065-.275 2.197-.21 2.197 0-.026.971.195 1.256.753 1.256.43 0 .624-.236.624-.634 0-.602-.633-.958-1.361-1.367-.987-.554-2.148-1.205-2.148-2.7 0-1.494 1.027-2.489 2.86-2.489 1.832 0 2.832.98 2.832 2.845z",
			fill: color
		}));
	};
	init = ({ fullAPI, store, provider }) => {
		const state = { whatsNewData: void 0 };
		function setWhatsNewState(newState) {
			store.setState({ whatsNewData: newState });
			state.whatsNewData = newState;
		}
		const api = {
			isWhatsNewUnread() {
				return state.whatsNewData?.status === "SUCCESS" && !state.whatsNewData.postIsRead;
			},
			whatsNewHasBeenRead() {
				if (state.whatsNewData?.status === "SUCCESS") {
					setWhatsNewCache({ lastReadPost: state.whatsNewData.url });
					setWhatsNewState({
						...state.whatsNewData,
						postIsRead: true
					});
					fullAPI.clearNotification(WHATS_NEW_NOTIFICATION_ID);
				}
			},
			toggleWhatsNewNotifications() {
				if (state.whatsNewData?.status === "SUCCESS") {
					setWhatsNewState({
						...state.whatsNewData,
						disableWhatsNewNotifications: !state.whatsNewData.disableWhatsNewNotifications
					});
					provider.channel?.emit(TOGGLE_WHATS_NEW_NOTIFICATIONS, { disableWhatsNewNotifications: state.whatsNewData.disableWhatsNewNotifications });
				}
			}
		};
		function getLatestWhatsNewPost() {
			provider.channel?.emit(REQUEST_WHATS_NEW_DATA);
			return new Promise((resolve) => provider.channel?.once(RESULT_WHATS_NEW_DATA, ({ data }) => resolve(data)));
		}
		function setWhatsNewCache(cache) {
			provider.channel?.emit(SET_WHATS_NEW_CACHE, cache);
		}
		const initModule = async () => {
			if (scope.CONFIG_TYPE !== "DEVELOPMENT") return;
			const whatsNewData = await getLatestWhatsNewPost();
			setWhatsNewState(whatsNewData);
			const urlState = fullAPI.getUrlState();
			const isOnboardingView = urlState?.path === "/onboarding" || urlState.queryParams?.onboarding === "true";
			const isReviewView = urlState?.path === "/review/" || urlState?.path === "/review" || urlState?.path?.startsWith("/review/");
			if (!isOnboardingView && !isReviewView && whatsNewData.status === "SUCCESS" && !whatsNewData.disableWhatsNewNotifications && whatsNewData.showNotification) fullAPI.addNotification({
				id: WHATS_NEW_NOTIFICATION_ID,
				link: "/settings/whats-new",
				content: {
					headline: whatsNewData.title,
					subHeadline: "Learn what's new in Storybook"
				},
				icon: /* @__PURE__ */ import_react$3.default.createElement(StorybookIcon, null),
				onClear({ dismissed }) {
					if (dismissed) setWhatsNewCache({ lastDismissedPost: whatsNewData.url });
				}
			});
		};
		return {
			init: initModule,
			state,
			api
		};
	};
}));
//#endregion
//#region src/manager-api/lib/store-setup.ts
var store_setup_default;
var init_store_setup = __esmMin((() => {
	init_dist();
	store_setup_default = (_) => {
		_.fn("set", function(key, data) {
			return _.set(this._area, this._in(key), stringify(data, { maxDepth: 50 }));
		});
		_.fn("get", function(key, alt) {
			const value = _.get(this._area, this._in(key));
			return value !== null ? parse(value) : alt || value;
		});
	};
}));
//#endregion
//#region src/manager-api/store.ts
function get(storage) {
	return storage.get("@storybook/manager/store") || {};
}
function set(storage, value) {
	return storage.set(STORAGE_KEY, value);
}
function update(storage, patch) {
	return set(storage, {
		...get(storage),
		...patch
	});
}
var import_store2, STORAGE_KEY, Store;
var init_store = __esmMin((() => {
	import_store2 = /* @__PURE__ */ __toESM(require_store2(), 1);
	init_store_setup();
	store_setup_default(import_store2.default._);
	STORAGE_KEY = "@storybook/manager/store";
	Store = class {
		constructor({ allowPersistence, setState, getState }) {
			this.persistenceHandlers = /* @__PURE__ */ new Map();
			this.upstreamPersistence = allowPersistence ?? true;
			this.upstreamSetState = setState;
			this.upstreamGetState = getState;
		}
		registerPersistenceHandler(key, handler) {
			this.persistenceHandlers.set(key, handler);
		}
		getInitialState(base) {
			const persisted = get(import_store2.default.local);
			const { includedTagFilters: _included, excludedTagFilters: _excluded, ...local } = persisted;
			if ("includedTagFilters" in persisted || "excludedTagFilters" in persisted) set(import_store2.default.local, local);
			const session = get(import_store2.default.session);
			return {
				...base,
				...local,
				...session
			};
		}
		getState() {
			return this.upstreamGetState();
		}
		async setState(inputPatch, cbOrOptions, inputOptions) {
			let callback;
			let options;
			if (typeof cbOrOptions === "function") {
				callback = cbOrOptions;
				options = inputOptions;
			} else options = cbOrOptions;
			const { persistence = "none" } = options || {};
			let patch = {};
			let delta = {};
			if (typeof inputPatch === "function") patch = (state) => {
				delta = inputPatch(state);
				return delta;
			};
			else {
				patch = inputPatch;
				delta = patch;
			}
			const newState = await new Promise((resolve) => {
				this.upstreamSetState(patch, () => {
					resolve(this.getState());
				});
			});
			if (persistence !== "none" && this.upstreamPersistence) if (persistence === "url") {
				const handler = this.persistenceHandlers.get("url");
				if (handler) await handler(delta, options?.serialize);
			} else await update(persistence === "session" ? import_store2.default.session : import_store2.default.local, delta);
			if (callback) callback(newState);
			return newState;
		}
	};
}));
//#endregion
//#region src/manager-api/lib/request-response.ts
var RequestResponseError, experimental_requestResponse;
var init_request_response = __esmMin((() => {
	RequestResponseError = class extends Error {
		constructor(message, payload) {
			super(message);
			this.payload = void 0;
			this.payload = payload;
		}
	};
	experimental_requestResponse = (channel, requestEvent, responseEvent, payload, timeout = 5e3) => {
		let timeoutId;
		return new Promise((resolve, reject) => {
			const request = {
				id: Math.random().toString(16).slice(2),
				payload
			};
			const responseHandler = (response) => {
				if (response.id !== request.id) return;
				clearTimeout(timeoutId);
				channel.off(responseEvent, responseHandler);
				if (response.success) resolve(response.payload);
				else reject(new RequestResponseError(response.error, response.payload));
			};
			channel.emit(requestEvent, request);
			channel.on(responseEvent, responseHandler);
			timeoutId = setTimeout(() => {
				channel.off(responseEvent, responseHandler);
				reject(new RequestResponseError("Timed out waiting for response"));
			}, timeout);
		});
	};
}));
//#endregion
//#region src/manager-api/root.tsx
function ManagerConsumer({ filter = defaultFilter, children }) {
	const managerContext = (0, import_react$2.useContext)(ManagerContext);
	const renderer = (0, import_react$2.useRef)(children);
	const filterer = (0, import_react$2.useRef)(filter);
	if (typeof renderer.current !== "function") return /* @__PURE__ */ import_react$2.default.createElement(import_react$2.Fragment, null, renderer.current);
	const comboData = filterer.current(managerContext);
	return (0, import_react$2.useMemo)(() => {
		const Child = renderer.current;
		return /* @__PURE__ */ import_react$2.default.createElement(Child, comboData);
	}, (0, import_react$2.useMemo)(() => {
		return [...Object.entries(comboData).reduce((acc, keyval) => acc.concat(keyval), [])];
	}, [managerContext.state]));
}
function useStorybookState() {
	const { state } = (0, import_react$2.useContext)(ManagerContext);
	return state;
}
function useStorybookApi() {
	const { api } = (0, import_react$2.useContext)(ManagerContext);
	return api;
}
function orDefault(fromStore, defaultState) {
	if (typeof fromStore === "undefined") return defaultState;
	return fromStore;
}
function useStoryPrepared(storyId) {
	return useStorybookApi().isPrepared(storyId);
}
function useParameter(parameterKey, defaultValue) {
	const api = useStorybookApi();
	const [parameter, setParameter] = (0, import_react$2.useState)(api.getCurrentParameter(parameterKey));
	const handleParameterChange = (0, import_react$2.useCallback)(() => {
		const newParameter = api.getCurrentParameter(parameterKey);
		setParameter(newParameter);
	}, [api, parameterKey]);
	useChannel({
		[STORY_PREPARED]: handleParameterChange,
		[DOCS_PREPARED]: handleParameterChange
	}, [handleParameterChange]);
	return orDefault(parameter, defaultValue);
}
function useSharedState(stateId, defaultState) {
	const api = useStorybookApi();
	const state = orDefault(api.getAddonState(stateId) || STORYBOOK_ADDON_STATE[stateId], STORYBOOK_ADDON_STATE[stateId] ? STORYBOOK_ADDON_STATE[stateId] : defaultState);
	let quicksync = false;
	if (state === defaultState && defaultState !== void 0) {
		STORYBOOK_ADDON_STATE[stateId] = defaultState;
		quicksync = true;
	}
	(0, import_react$2.useEffect)(() => {
		if (quicksync) api.setAddonState(stateId, defaultState);
	}, [quicksync]);
	const setState = (0, import_react$2.useCallback)(async (s, options) => {
		await api.setAddonState(stateId, s, options);
		const result = api.getAddonState(stateId);
		STORYBOOK_ADDON_STATE[stateId] = result;
		return result;
	}, [api, stateId]);
	const allListeners = (0, import_react$2.useMemo)(() => {
		const stateChangeHandlers = {
			[`${SHARED_STATE_CHANGED}-client-${stateId}`]: setState,
			[`${SHARED_STATE_SET}-client-${stateId}`]: setState
		};
		const stateInitializationHandlers = {
			[SET_STORIES]: async () => {
				const currentState = api.getAddonState(stateId);
				if (currentState) {
					STORYBOOK_ADDON_STATE[stateId] = currentState;
					api.emit(`${SHARED_STATE_SET}-manager-${stateId}`, currentState);
				} else if (STORYBOOK_ADDON_STATE[stateId]) {
					await setState(STORYBOOK_ADDON_STATE[stateId]);
					api.emit(`${SHARED_STATE_SET}-manager-${stateId}`, STORYBOOK_ADDON_STATE[stateId]);
				} else if (defaultState !== void 0) {
					await setState(defaultState);
					STORYBOOK_ADDON_STATE[stateId] = defaultState;
					api.emit(`${SHARED_STATE_SET}-manager-${stateId}`, defaultState);
				}
			},
			[STORY_CHANGED]: () => {
				const currentState = api.getAddonState(stateId);
				if (currentState !== void 0) api.emit(`${SHARED_STATE_SET}-manager-${stateId}`, currentState);
			}
		};
		return {
			...stateChangeHandlers,
			...stateInitializationHandlers
		};
	}, [stateId]);
	const emit = useChannel(allListeners);
	return [state, (0, import_react$2.useCallback)(async (newStateOrMerger, options) => {
		await setState(newStateOrMerger, options);
		const result = api.getAddonState(stateId);
		emit(`${SHARED_STATE_CHANGED}-manager-${stateId}`, result);
	}, [
		api,
		emit,
		setState,
		stateId
	])];
}
function useAddonState(addonId, defaultState) {
	return useSharedState(addonId, defaultState);
}
function useArgs() {
	const { getCurrentStoryData, updateStoryArgs, resetStoryArgs } = useStorybookApi();
	const data = getCurrentStoryData();
	const args = data?.type === "story" ? data.args : {};
	const initialArgs = data?.type === "story" ? data.initialArgs : {};
	return [
		args,
		(0, import_react$2.useCallback)((newArgs) => updateStoryArgs(data, newArgs), [data, updateStoryArgs]),
		(0, import_react$2.useCallback)((argNames) => resetStoryArgs(data, argNames), [data, resetStoryArgs]),
		initialArgs
	];
}
function useGlobals() {
	const api = useStorybookApi();
	return [
		api.getGlobals(),
		api.updateGlobals,
		api.getStoryGlobals(),
		api.getUserGlobals()
	];
}
function useGlobalTypes() {
	return useStorybookApi().getGlobalTypes();
}
function useCurrentStory() {
	const { getCurrentStoryData } = useStorybookApi();
	return getCurrentStoryData();
}
function useArgTypes() {
	const current = useCurrentStory();
	return current?.type === "story" && current.argTypes || {};
}
var import_react$2, ActiveTabs, ManagerContext, combineParameters, ManagerProvider, EffectOnMount, defaultFilter, useChannel, STORYBOOK_ADDON_STATE, typesX;
var init_root = __esmMin((() => {
	import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_core_events();
	init_predicate();
	init_context();
	init_initial_state();
	init_addons$1();
	init_merge();
	init_addons();
	init_channel();
	init_globals();
	init_layout();
	init_notifications();
	init_open_in_editor();
	init_provider();
	init_refs();
	init_settings();
	init_shortcuts();
	init_stories();
	init_url();
	init_versions();
	init_whatsnew();
	init_store();
	init_request_response();
	init_platform();
	init_shortcut();
	({ActiveTabs} = layout_exports);
	ManagerContext = createContext({
		api: void 0,
		state: main({})
	});
	combineParameters = (...parameterSets) => noArrayMerge({}, ...parameterSets);
	ManagerProvider = class extends import_react$2.Component {
		static {
			this.displayName = "Manager";
		}
		constructor(props) {
			super(props);
			this.api = {};
			this.mounted = false;
			this.initModules = () => {
				this.modules.forEach((module) => {
					if ("init" in module) module.init();
				});
			};
			const { location, path, refId, viewMode = props.docsOptions.docsMode ? "docs" : props.viewMode, singleStory, storyId, docsOptions, navigate } = props;
			const store = new Store({
				getState: () => this.state,
				setState: (stateChange, callback) => {
					if (!this.mounted) {
						const patch = typeof stateChange === "function" ? stateChange(this.state) : stateChange;
						this.state = {
							...this.state,
							...patch
						};
						callback?.(this.state);
						return this.state;
					}
					this.setState(stateChange, () => callback(this.state));
					return this.state;
				}
			});
			const routeData = {
				location,
				path,
				viewMode,
				singleStory,
				storyId,
				refId
			};
			const optionsData = { docsOptions };
			this.state = store.getInitialState(main({
				...routeData,
				...optionsData
			}));
			const apiData = {
				navigate,
				store,
				provider: props.provider
			};
			this.modules = [
				provider_exports,
				channel_exports,
				addons_exports,
				layout_exports,
				notifications_exports,
				settings_exports,
				shortcuts_exports,
				stories_exports,
				refs_exports,
				globals_exports,
				url_exports,
				versions_exports,
				whatsnew_exports,
				open_in_editor_exports
			].map((m) => m.init({
				...routeData,
				...optionsData,
				...apiData,
				state: this.state,
				fullAPI: this.api
			}));
			const state = main(this.state, ...this.modules.map((m) => m.state));
			const api = Object.assign(this.api, { navigate }, ...this.modules.map((m) => m.api));
			this.state = state;
			this.api = api;
			props.provider.handleAPI(this.api);
		}
		componentDidMount() {
			this.mounted = true;
		}
		static getDerivedStateFromProps(props, state) {
			const locationSearchChanged = state.location?.search !== props.location?.search;
			const locationHashChanged = state.location?.hash !== props.location?.hash;
			if (state.path !== props.path || locationSearchChanged || locationHashChanged) return {
				...state,
				location: props.location,
				path: props.path,
				refId: props.refId,
				viewMode: props.viewMode,
				storyId: props.storyId,
				customQueryParams: getCustomQueryParams(props.location)
			};
			return null;
		}
		shouldComponentUpdate(nextProps, nextState) {
			const prevProps = this.props;
			const prevState = this.state;
			return prevProps.path !== nextProps.path || !isEqual(prevState, nextState);
		}
		render() {
			const { children } = this.props;
			const value = {
				state: this.state,
				api: this.api
			};
			return /* @__PURE__ */ import_react$2.default.createElement(EffectOnMount, { effect: this.initModules }, /* @__PURE__ */ import_react$2.default.createElement(ManagerContext.Provider, { value }, /* @__PURE__ */ import_react$2.default.createElement(ManagerConsumer, null, children)));
		}
	};
	EffectOnMount = ({ children, effect }) => {
		import_react$2.useEffect(effect, []);
		return children;
	};
	defaultFilter = (c) => c;
	useChannel = (eventMap, deps = []) => {
		const api = useStorybookApi();
		(0, import_react$2.useEffect)(() => {
			Object.entries(eventMap).forEach(([type, listener]) => api.on(type, listener));
			return () => {
				Object.entries(eventMap).forEach(([type, listener]) => api.off(type, listener));
			};
		}, deps);
		return api.emit;
	};
	globalThis.STORYBOOK_ADDON_STATE = {};
	({STORYBOOK_ADDON_STATE} = globalThis);
	typesX = Addon_TypesEnum;
}));
//#endregion
//#region src/manager-api/stores/test-provider.ts
var testProviderStore, fullTestProviderStore, getTestProviderStoreById, useTestProviderStore, universalTestProviderStore;
var init_test_provider = __esmMin((() => {
	init_test_provider_store();
	init_universal_store();
	init_use_universal_store_manager();
	testProviderStore = createTestProviderStore({
		universalTestProviderStore: UniversalStore.create({
			...UNIVERSAL_TEST_PROVIDER_STORE_OPTIONS,
			leader: globalThis.CONFIG_TYPE === "PRODUCTION"
		}),
		useUniversalStore
	});
	({fullTestProviderStore, getTestProviderStoreById, useTestProviderStore, universalTestProviderStore} = testProviderStore);
}));
//#endregion
//#region src/manager-api/stores/checklist.ts
var universalChecklistStore, checklistStore;
var init_checklist = __esmMin((() => {
	init_checklist_store();
	init_universal_store();
	universalChecklistStore = UniversalStore.create({
		...UNIVERSAL_CHECKLIST_STORE_OPTIONS,
		leader: globalThis.CONFIG_TYPE === "PRODUCTION"
	});
	checklistStore = createChecklistStore(universalChecklistStore);
}));
//#endregion
//#region src/manager-api/index.ts
var manager_api_exports = /* @__PURE__ */ __exportAll({
	ActiveTabs: () => ActiveTabs,
	Consumer: () => ManagerConsumer,
	ManagerContext: () => ManagerContext,
	Provider: () => ManagerProvider,
	RequestResponseError: () => RequestResponseError,
	Tag: () => Tag,
	addons: () => addons,
	combineParameters: () => combineParameters,
	controlOrMetaKey: () => controlOrMetaKey$1,
	controlOrMetaSymbol: () => controlOrMetaSymbol,
	eventMatchesShortcut: () => eventMatchesShortcut,
	eventToShortcut: () => eventToShortcut,
	experimental_MockUniversalStore: () => MockUniversalStore,
	experimental_getStatusStore: () => getStatusStoreByTypeId,
	experimental_getTestProviderStore: () => getTestProviderStoreById,
	experimental_requestResponse: () => experimental_requestResponse,
	experimental_useStatusStore: () => useStatusStore,
	experimental_useTestProviderStore: () => useTestProviderStore,
	getService: () => getService,
	internal_UniversalStore: () => UniversalStore,
	internal_checklistStore: () => checklistStore,
	internal_fullStatusStore: () => fullStatusStore,
	internal_fullTestProviderStore: () => fullTestProviderStore,
	internal_universalChecklistStore: () => universalChecklistStore,
	internal_universalStatusStore: () => universalStatusStore,
	internal_universalTestProviderStore: () => universalTestProviderStore,
	internal_useUniversalStore: () => useUniversalStore,
	isMacLike: () => isMacLike$1,
	isShortcutTaken: () => isShortcutTaken,
	keyToSymbol: () => keyToSymbol,
	merge: () => merge_default,
	optionOrAltSymbol: () => optionOrAltSymbol,
	registerService: () => registerService,
	shortcutMatchesShortcut: () => shortcutMatchesShortcut,
	shortcutToAriaKeyshortcuts: () => shortcutToAriaKeyshortcuts,
	shortcutToHumanString: () => shortcutToHumanString,
	types: () => typesX,
	useAddonState: () => useAddonState,
	useArgTypes: () => useArgTypes,
	useArgs: () => useArgs,
	useChannel: () => useChannel,
	useGlobalTypes: () => useGlobalTypes,
	useGlobals: () => useGlobals,
	useParameter: () => useParameter,
	useServiceCommand: () => useServiceCommand,
	useServiceQuery: () => useServiceQuery,
	useSharedState: () => useSharedState,
	useStoryPrepared: () => useStoryPrepared,
	useStorybookApi: () => useStorybookApi,
	useStorybookState: () => useStorybookState
});
var init_manager_api = __esmMin((() => {
	init_root();
	init_universal_store();
	init_use_universal_store_manager();
	init_mock();
	init_status();
	init_test_provider();
	init_checklist();
	init_tags$1();
	init_manager();
}));
//#endregion
//#region src/manager/hooks/useMedia.tsx
function useMediaQuery(query) {
	const getMatches = (queryMatch) => {
		if (typeof window !== "undefined") return window.matchMedia(queryMatch).matches;
		return false;
	};
	const [matches, setMatches] = (0, import_react$1.useState)(getMatches(query));
	function handleChange() {
		setMatches(getMatches(query));
	}
	(0, import_react$1.useEffect)(() => {
		const matchMedia = window.matchMedia(query);
		handleChange();
		matchMedia.addEventListener("change", handleChange);
		return () => {
			matchMedia.removeEventListener("change", handleChange);
		};
	}, [query]);
	return matches;
}
var import_react$1;
var init_useMedia = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region src/manager/globals/runtime.ts
var import_react, import_react_dom, import_client, import_jsx_runtime, globalsNameValueMap;
var init_runtime = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_FocusScope();
	import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	import_client = /* @__PURE__ */ __toESM(require_client(), 1);
	import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
	init_channels();
	init_client_logger();
	init_components();
	init_core_events();
	init_manager_errors();
	init_router();
	init_types();
	init_dist$2();
	init_manager_api();
	init_emotion();
	init_create();
	globalsNameValueMap = {
		react: import_react,
		"react/jsx-runtime": import_jsx_runtime,
		"react/jsx-dev-runtime": {
			Fragment: import_jsx_runtime.Fragment,
			jsxDEV: import_jsx_runtime.jsx
		},
		"react-dom": import_react_dom,
		"react-dom/client": import_client,
		"react-aria/FocusScope": FocusScope_exports,
		"@storybook/icons": dist_exports,
		"storybook/manager-api": manager_api_exports,
		"storybook/theming": emotion_exports,
		"storybook/theming/emotion": emotion_exports,
		"storybook/theming/create": create_exports,
		"storybook/internal/channels": channels_exports,
		"storybook/internal/client-logger": client_logger_exports,
		"storybook/internal/components": components_exports,
		"storybook/internal/core-events": core_events_exports,
		"storybook/internal/manager-errors": manager_errors_exports,
		"storybook/internal/router": router_exports,
		"storybook/internal/types": types_exports
	};
}));
//#endregion
//#region src/manager/utils/prepareForTelemetry.ts
function getBrowserInfo() {
	if (!browserInfo) browserInfo = new import_browser_dtector_umd_min.default(scope.navigator?.userAgent).getBrowserInfo();
	return browserInfo;
}
function prepareForTelemetry(originalError) {
	let error = originalError;
	if (originalError.target === scope || originalError.currentTarget === scope || originalError.srcElement === scope) {
		error = new Error(originalError.message);
		error.name = originalError.name || error.name;
	}
	if (!originalError.fromStorybook) error = new UncaughtManagerError({ error });
	error.browserInfo = getBrowserInfo();
	return error;
}
var import_browser_dtector_umd_min, browserInfo, errorMessages, shouldSkipError;
var init_prepareForTelemetry = __esmMin((() => {
	init_manager_errors();
	init_dist$1();
	import_browser_dtector_umd_min = /* @__PURE__ */ __toESM(require_browser_dtector_umd_min(), 1);
	errorMessages = [
		"ResizeObserver loop completed with undelivered notifications.",
		"ResizeObserver loop limit exceeded",
		"Script error.",
		"React is running in production mode"
	];
	shouldSkipError = (error) => errorMessages.includes(error?.message);
}));
//#endregion
//#region src/manager/globals-runtime.ts
var queuedErrors;
//#endregion
__esmMin((() => {
	init_channels();
	init_core_events();
	init_globals$1();
	init_runtime();
	init_prepareForTelemetry();
	globalPackages.forEach((key) => {
		globalThis[globalsNameReferenceMap[key]] = globalsNameValueMap[key];
	});
	queuedErrors = [];
	globalThis.sendTelemetryError = (error) => {
		if (shouldSkipError(error)) return;
		const channel = getChannel();
		const preparedError = prepareForTelemetry(error);
		if (!channel) {
			queuedErrors.push(preparedError);
			return;
		}
		while (queuedErrors.length > 0) {
			const queuedError = queuedErrors.shift();
			channel.emit(TELEMETRY_ERROR, queuedError);
		}
		channel.emit(TELEMETRY_ERROR, preparedError);
	};
	globalThis.addEventListener("error", (args) => {
		const error = args.error || args;
		globalThis.sendTelemetryError(error);
	});
	globalThis.addEventListener("unhandledrejection", ({ reason }) => {
		globalThis.sendTelemetryError(reason);
	});
}))();
export { init_preview_errors as _, shortcutToAriaKeyshortcuts as a, isTestEnvironment as c, OpenServiceStaticSnapshotInvalidError as d, OpenServiceStaticSnapshotLoadError as f, StatusTypeIdMismatchError$1 as g, InvalidChannelPageError as h, init_shortcut as i, addons as l, init_manager_errors as m, useMediaQuery as n, shortcutToHumanString as o, StatusTypeIdMismatchError as p, init_manager_api as r, init_animation_utils as s, init_useMedia as t, init_addons$1 as u };
