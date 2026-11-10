import { a as __toESM, n as __esmMin } from "./runtime-XrdeG17s.js";
import { Ar as init_core_events, Br as init__storybook_global_react, Fr as _storybook_global_react_default, Gr as useEffect, Lt as addons, Ot as init_emotion, Tt as createGlobal, Ut as init_manager_api, kr as core_events_default, w as init_create, xt as Global } from "./runtime-CCGFWiML.js";
import { M as init_dist, N as scope } from "./runtime-DqOdIqaJ.js";
import { _ as init_status_store, b as StorybookError, c as USER_TAG_FILTER, g as createStatusStore, i as init_universal_store, l as init_tags$1, m as UNIVERSAL_STATUS_STORE_OPTIONS, n as useUniversalStore, r as UniversalStore, s as BUILT_IN_FILTERS, t as init_use_universal_store_manager, x as init_storybook_error } from "./runtime-BORMtDTH.js";
import { r as require_memoizerific } from "./runtime-CD3p6Bu2.js";
import { B as init_review_context, F as init_ReviewProvider, H as Layout, J as useLayout, P as ReviewProvider, R as ReviewPersistentLayer, U as init_Layout, V as useReviewContext, X as init_ManagerErrorBoundary, Y as ManagerErrorBoundary, q as init_LayoutProvider, z as init_ReviewPersistentLayer } from "./runtime-DQa1WfwG.js";
import { c as PreviewConnected, d as init_Panel, i as init_Sidebar, l as init_Preview, r as Sidebar, u as Panel } from "./runtime-CxQnUpQE.js";
//#region src/manager-api/modules/layout.ts
var document$1, isPagesViewMode, focusableUIElements;
var init_layout = __esmMin((() => {
	init_core_events();
	init_dist();
	init_create();
	({document: document$1} = scope);
	isPagesViewMode = (viewMode) => viewMode !== void 0 && viewMode !== "story" && viewMode !== "docs" && viewMode !== "review";
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
}));
//#endregion
//#region src/manager-errors.ts
var StatusTypeIdMismatchError;
var init_manager_errors = __esmMin((() => {
	init_storybook_error();
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
//#region src/manager-api/modules/statuses.ts
var computeStatusFilterFn;
var init_statuses = __esmMin((() => {
	init_status();
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
})), import_memoizerific, computeTagsFilterFn;
var init_tags = __esmMin((() => {
	import_memoizerific = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	init_tags$1();
	(0, import_memoizerific.default)(1)((presets) => {
		const presetEntries = Object.entries(presets);
		return {
			included: presetEntries.filter(([, option]) => option.defaultFilterSelection === "include").map(([tag]) => tag),
			excluded: presetEntries.filter(([, option]) => option.defaultFilterSelection === "exclude").map(([tag]) => tag)
		};
	});
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
//#region src/manager/App.tsx
var MainPreview, App;
var init_App = __esmMin((() => {
	init__storybook_global_react();
	init_core_events();
	init_manager_api();
	init_emotion();
	init_ManagerErrorBoundary();
	init_Layout();
	init_LayoutProvider();
	init_ReviewPersistentLayer();
	init_ReviewProvider();
	init_review_context();
	init_Panel();
	init_Preview();
	init_Sidebar();
	MainPreview = () => {
		const { isSummaryVisible } = useReviewContext();
		return isSummaryVisible ? null : /* @__PURE__ */ _storybook_global_react_default.createElement(PreviewConnected, {
			id: "main",
			withLoader: true
		});
	};
	App = ({ managerLayoutState, setManagerLayoutState, pages }) => {
		const { setMobileAboutOpen } = useLayout();
		/**
		* Lets us tell the UI whether or not keyboard shortcuts are enabled, in places where it's not
		* convenient to load the addons singleton to figure it out.
		*/
		const { enableShortcuts = true } = addons.getConfig();
		useEffect(() => {
			document.body.setAttribute("data-shortcuts-enabled", enableShortcuts ? "true" : "false");
		}, [enableShortcuts]);
		/**
		* Detects when our component library has enabled a focus trap. By convention, react-aria sets the
		* document root to `inert` when a focus trap is enabled. We observe that attribute and inform the
		* preview iframe when to respect the focus trap, via a channel event. This is necessary because
		* inert is no longer propagated into iframes as per https://github.com/whatwg/html/issues/7605,
		* and the replacement permission policy is not yet widely available
		* (https://github.com/w3c/webappsec-permissions-policy/issues/273).
		*/
		useEffect(() => {
			const rootElement = document.getElementById("root");
			if (!rootElement) return;
			const observer = new MutationObserver(() => {
				const hasInert = rootElement.hasAttribute("inert");
				addons.getChannel().emit(core_events_default.MANAGER_INERT_ATTRIBUTE_CHANGED, hasInert);
			});
			observer.observe(rootElement, {
				attributes: true,
				attributeFilter: ["inert"]
			});
			return () => observer.disconnect();
		}, []);
		const layout = /* @__PURE__ */ _storybook_global_react_default.createElement(Layout, {
			managerLayoutState,
			setManagerLayoutState,
			slotOverlay: /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewPersistentLayer, null),
			slotMain: /* @__PURE__ */ _storybook_global_react_default.createElement(MainPreview, null),
			slotSidebar: /* @__PURE__ */ _storybook_global_react_default.createElement(Sidebar, { onMenuClick: () => setMobileAboutOpen((state) => !state) }),
			slotPanel: /* @__PURE__ */ _storybook_global_react_default.createElement(Panel, null),
			slotPages: pages.map(({ id, render: Content }) => /* @__PURE__ */ _storybook_global_react_default.createElement(Content, { key: id }))
		});
		return /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Global, { styles: createGlobal }), /* @__PURE__ */ _storybook_global_react_default.createElement(ManagerErrorBoundary, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewProvider, null, layout)));
	};
}));
//#endregion
export { computeStatusFilterFn as a, init_manager_errors as c, isPagesViewMode as d, init_tags as i, focusableUIElements as l, init_App as n, init_statuses as o, computeTagsFilterFn as r, StatusTypeIdMismatchError as s, App as t, init_layout as u };
