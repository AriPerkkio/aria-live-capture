import { a as __toESM, n as __esmMin } from "./runtime-XrdeG17s.js";
import { $ as ProgressSpinner, $t as types, A as init_router, Ar as init_core_events$1, At as styled, B as ActionList, Bn as InfoIcon, Br as init__storybook_global_react, Bt as experimental_useStatusStore, Cr as STORIES_COLLAPSE_ALL, D as LocationProvider, Dt as ensure, E as Location, F as init_client, Fr as _storybook_global_react_default, Ft as Provider, Gr as useEffect, Hn as ListUnorderedIcon, Jr as useMemo, M as ProviderDoesNotExtendBaseProviderError, N as init_manager_errors, On as DocumentIcon, Ot as init_emotion, P as createRoot, Pt as Consumer, St as ThemeProvider, Tn as CommandIcon, Ur as useCallback, Ut as init_manager_api, Xn as ShareAltIcon, Zr as useState, a as STORY_PREPARED, an as useStorybookApi, d as init_types, en as useChannel, fr as init_icons, j as useNavigate, mn as CheckIcon, o as init_core_events, on as useStorybookState, s as Addon_TypesEnum, vt as init_components } from "./runtime-CCGFWiML.js";
import { M as init_dist, N as scope } from "./runtime-DqOdIqaJ.js";
import { R as init_index_module, z as q } from "./runtime-ByZHak7A.js";
import { r as require_memoizerific } from "./runtime-CD3p6Bu2.js";
import { A as fullScreenTool, C as init_zoom, D as defaultWrappers, E as init_Shortcut, G as init_NotificationList, K as LayoutProvider, M as AddonPanel, N as init_Panel$1, O as init_Wrappers, S as init_Preview$1, T as Shortcut, W as NotificationList, _ as init_menu, b as init_addons, d as init_share, f as isolationModeTool, g as openInEditorTool, h as init_open_in_editor, j as init_Toolbar, k as filterToolsSide, m as remountTool, p as init_remount, q as init_LayoutProvider, v as menuTool, w as zoomTool, x as Preview, y as addonsTool } from "./runtime-DQa1WfwG.js";
import { l as focusableUIElements, n as init_App, t as App, u as init_layout } from "./runtime-Bis0saf2.js";
import { zn as $6b88d4883d4c7fe3$export$4cc632584fd87fae } from "./runtime-Bg3R07cf.js";
import { j as init_useLandmark$2 } from "./runtime-DVA-jH96.js";
import { n as Sidebar$1, o as init_useChecklist, r as init_Sidebar$1, s as useChecklist } from "./runtime-iHnx1eaX.js";
import { i as init_provider, n as settingsPageAddon, r as Provider$1, t as init_settings } from "../runtime.js";
//#region src/manager/constants.ts
var MEDIA_DESKTOP_BREAKPOINT;
var init_constants = __esmMin((() => {
	MEDIA_DESKTOP_BREAKPOINT = `@media (min-width: 600px)`;
}));
//#endregion
//#region src/manager/hooks/useMedia.tsx
function useMediaQuery(query) {
	const getMatches = (queryMatch) => {
		if (typeof window !== "undefined") return window.matchMedia(queryMatch).matches;
		return false;
	};
	const [matches, setMatches] = useState(getMatches(query));
	function handleChange() {
		setMatches(getMatches(query));
	}
	useEffect(() => {
		const matchMedia = window.matchMedia(query);
		handleChange();
		matchMedia.addEventListener("change", handleChange);
		return () => {
			matchMedia.removeEventListener("change", handleChange);
		};
	}, [query]);
	return matches;
}
var init_useMedia = __esmMin((() => {
	init__storybook_global_react();
}));
//#endregion
//#region src/manager/container/Notifications.tsx
var mapper$1, Notifications;
var init_Notifications = __esmMin((() => {
	init__storybook_global_react();
	init_manager_api();
	init_NotificationList();
	mapper$1 = ({ state, api }) => {
		return {
			notifications: state.notifications,
			clearNotification: api.clearNotification
		};
	};
	Notifications = (props) => /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: mapper$1 }, (fromState) => /* @__PURE__ */ _storybook_global_react_default.createElement(NotificationList, {
		...props,
		...fromState
	}));
}));
//#endregion
//#region src/manager/hooks/useLandmark.ts
function useLandmark(props, ref) {
	const { landmarkProps } = $6b88d4883d4c7fe3$export$4cc632584fd87fae(props, ref);
	return { landmarkProps: {
		...landmarkProps,
		"data-sb-landmark": true
	} };
}
var init_useLandmark = __esmMin((() => {
	init_useLandmark$2();
}));
//#endregion
//#region src/manager/container/Panel.tsx
var Panel;
var init_Panel = __esmMin((() => {
	init__storybook_global_react();
	init_types();
	init_manager_api();
	init_core_events();
	init_layout();
	init_Panel$1();
	Panel = (props) => {
		const api = useStorybookApi();
		const state = useStorybookState();
		const [story, setStory] = useState(api.getCurrentStoryData());
		useChannel({ [STORY_PREPARED]: () => {
			setStory(api.getCurrentStoryData());
		} }, []);
		const { parameters, type } = story ?? {};
		const panelActions = useMemo(() => ({
			onSelect: (panel) => api.setSelectedPanel(panel),
			toggleVisibility: async () => {
				const wasPanelShown = api.getIsPanelShown();
				api.togglePanel();
				if (wasPanelShown) {
					if (await api.focusOnUIElement(focusableUIElements.showAddonPanel) === false) document.body.focus();
				}
			},
			togglePosition: () => api.togglePanelPosition()
		}), [api]);
		const panels = useMemo(() => {
			const allPanels = api.getElements(Addon_TypesEnum.PANEL);
			if (!allPanels) return allPanels;
			if (story && type !== "story") return allPanels;
			const filteredPanels = {};
			Object.entries(allPanels).forEach(([id, p]) => {
				const { paramKey } = p;
				if (paramKey && parameters && parameters[paramKey] && parameters[paramKey].disable) return;
				if (p.disabled === true || typeof p.disabled === "function" && p.disabled(parameters)) return;
				filteredPanels[id] = p;
			});
			return filteredPanels;
		}, [api, story]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(AddonPanel, {
			panels,
			selectedPanel: api.getSelectedPanel(),
			panelPosition: state.layout.panelPosition,
			actions: panelActions,
			shortcuts: api.getShortcutKeys(),
			...props
		});
	};
}));
//#endregion
//#region src/manager/container/Preview.tsx
var import_memoizerific, defaultTools, defaultToolsExtra, memoizedTools, memoizedExtra, memoizedWrapper, splitTitleAddExtraSpace, getDescription, mapper, PreviewConnected;
var init_Preview = __esmMin((() => {
	init__storybook_global_react();
	init_types();
	import_memoizerific = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	init_manager_api();
	init_Preview$1();
	init_Toolbar();
	init_Wrappers();
	init_addons();
	init_menu();
	init_open_in_editor();
	init_remount();
	init_share();
	init_zoom();
	defaultTools = [menuTool, remountTool];
	defaultToolsExtra = [
		isolationModeTool,
		zoomTool,
		addonsTool,
		fullScreenTool,
		openInEditorTool
	];
	memoizedTools = (0, import_memoizerific.default)(1)((_, toolElements, filterProps) => filterToolsSide([...defaultTools, ...Object.values(toolElements)], ...filterProps));
	memoizedExtra = (0, import_memoizerific.default)(1)((_, extraElements, filterProps) => filterToolsSide([...defaultToolsExtra, ...Object.values(extraElements)], ...filterProps));
	memoizedWrapper = (0, import_memoizerific.default)(1)((_, previewElements) => [...defaultWrappers, ...Object.values(previewElements)]);
	splitTitleAddExtraSpace = (input) => input.split("/").join(" / ").replace(/\s\s/, " ");
	getDescription = (item) => {
		if (item?.type === "story" || item?.type === "docs") {
			const { title, name } = item;
			return title && name ? splitTitleAddExtraSpace(`${title} - ${name} ⋅ Storybook`) : "Storybook";
		}
		return item?.name ? `${item.name} ⋅ Storybook` : "Storybook";
	};
	mapper = ({ api, state }) => {
		const { layout, location, customQueryParams, storyId, refs, viewMode, path, refId } = state;
		const entry = api.getData(storyId, refId);
		const wrapperList = Object.values(api.getElements(Addon_TypesEnum.PREVIEW));
		const toolsList = Object.values(api.getElements(Addon_TypesEnum.TOOL));
		const toolsExtraList = Object.values(api.getElements(Addon_TypesEnum.TOOLEXTRA));
		const tools = memoizedTools(toolsList.length, api.getElements(Addon_TypesEnum.TOOL), [
			entry,
			viewMode,
			location,
			path
		]);
		const toolsExtra = memoizedExtra(toolsExtraList.length, api.getElements(Addon_TypesEnum.TOOLEXTRA), [
			entry,
			viewMode,
			location,
			path
		]);
		return {
			api,
			entry,
			options: layout,
			description: getDescription(entry),
			viewMode,
			refs,
			storyId,
			baseUrl: "iframe.html",
			path,
			queryParams: customQueryParams,
			tools,
			toolsExtra,
			wrappers: memoizedWrapper(wrapperList.length, api.getElements(Addon_TypesEnum.PREVIEW))
		};
	};
	PreviewConnected = _storybook_global_react_default.memo(function PreviewConnected(props) {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: mapper }, (fromState) => /* @__PURE__ */ _storybook_global_react_default.createElement(Preview, {
			...props,
			...fromState
		}));
	});
}));
//#endregion
//#region src/manager/hooks/useLocation.ts
var LocationMonitor, useLocationHash;
var init_useLocation = __esmMin((() => {
	init__storybook_global_react();
	LocationMonitor = {
		_currentHref: globalThis.window?.location.href ?? "",
		_intervalId: null,
		_listeners: /* @__PURE__ */ new Set(),
		start() {
			if (this._intervalId === null) this._intervalId = setInterval(() => {
				const newLocation = globalThis.window.location;
				if (newLocation.href !== this._currentHref) {
					this._currentHref = newLocation.href;
					this._listeners.forEach((listener) => listener(newLocation));
				}
			}, 100);
		},
		stop() {
			if (this._intervalId !== null) {
				clearInterval(this._intervalId);
				this._intervalId = null;
			}
		},
		subscribe(...listeners) {
			listeners.forEach((listener) => this._listeners.add(listener));
			this.start();
			return () => {
				listeners.forEach((listener) => this._listeners.delete(listener));
				if (this._listeners.size === 0) this.stop();
			};
		}
	};
	useLocationHash = () => {
		const [hash, setHash] = useState(globalThis.window?.location.hash ?? "");
		useEffect(() => LocationMonitor.subscribe((location) => setHash(location.hash)), []);
		return hash.slice(1);
	};
}));
//#endregion
//#region src/manager/container/Menu.tsx
var ProgressCircle, useMenu;
var init_Menu = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_core_events$1();
	init_dist();
	init_icons();
	init_emotion();
	init_Shortcut();
	init_useChecklist();
	ProgressCircle = styled(ProgressSpinner)(({ theme }) => ({ color: theme.color.secondary }));
	useMenu = ({ api, showToolbar, isPanelShown, isNavShown, enableShortcuts }) => {
		const shortcutKeys = api.getShortcutKeys();
		const { progress } = useChecklist();
		const about = useMemo(() => ({
			id: "about",
			title: "About your Storybook",
			onClick: () => api.changeSettingsTab("about"),
			href: "./?path=/settings/about",
			internal: true,
			closeOnClick: true,
			icon: /* @__PURE__ */ _storybook_global_react_default.createElement(InfoIcon, null)
		}), [api]);
		const guide = useMemo(() => ({
			id: "guide",
			title: "Onboarding guide",
			onClick: () => api.changeSettingsTab("guide"),
			href: "./?path=/settings/guide",
			internal: true,
			closeOnClick: true,
			icon: /* @__PURE__ */ _storybook_global_react_default.createElement(ListUnorderedIcon, null),
			right: progress < 100 && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
				as: "div",
				readOnly: true,
				padding: "none",
				ariaLabel: `${progress}% completed`
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ProgressCircle, {
				percentage: progress,
				running: false,
				size: 16,
				width: 1.5
			}), progress, "%")
		}), [api, progress]);
		const shortcuts = useMemo(() => ({
			id: "shortcuts",
			title: "Keyboard shortcuts",
			onClick: () => api.changeSettingsTab("shortcuts"),
			href: "./?path=/settings/shortcuts",
			internal: true,
			closeOnClick: true,
			right: enableShortcuts ? /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: shortcutKeys.shortcutsPage }) : null,
			icon: /* @__PURE__ */ _storybook_global_react_default.createElement(CommandIcon, null)
		}), [
			api,
			enableShortcuts,
			shortcutKeys.shortcutsPage
		]);
		const sidebarToggle = useMemo(() => ({
			id: "S",
			title: "Show sidebar",
			onClick: () => api.toggleNav(),
			closeOnClick: true,
			active: isNavShown,
			right: enableShortcuts ? /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: shortcutKeys.toggleNav }) : null,
			icon: isNavShown ? /* @__PURE__ */ _storybook_global_react_default.createElement(CheckIcon, null) : void 0
		}), [
			api,
			enableShortcuts,
			shortcutKeys,
			isNavShown
		]);
		const toolbarToogle = useMemo(() => ({
			id: "T",
			title: "Show toolbar",
			onClick: () => api.toggleToolbar(),
			active: showToolbar,
			right: enableShortcuts ? /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: shortcutKeys.toolbar }) : null,
			icon: showToolbar ? /* @__PURE__ */ _storybook_global_react_default.createElement(CheckIcon, null) : void 0
		}), [
			api,
			enableShortcuts,
			shortcutKeys,
			showToolbar
		]);
		const addonsToggle = useMemo(() => ({
			id: "A",
			title: "Show addons panel",
			onClick: () => api.togglePanel(),
			active: isPanelShown,
			right: enableShortcuts ? /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: shortcutKeys.togglePanel }) : null,
			icon: isPanelShown ? /* @__PURE__ */ _storybook_global_react_default.createElement(CheckIcon, null) : void 0
		}), [
			api,
			enableShortcuts,
			shortcutKeys,
			isPanelShown
		]);
		const up = useMemo(() => ({
			id: "up",
			title: "Previous component or page",
			onClick: () => api.jumpToSubtree(-1),
			right: enableShortcuts ? /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: shortcutKeys.prevComponent }) : null
		}), [
			api,
			enableShortcuts,
			shortcutKeys
		]);
		const down = useMemo(() => ({
			id: "down",
			title: "Next component or page",
			onClick: () => api.jumpToSubtree(1),
			right: enableShortcuts ? /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: shortcutKeys.nextComponent }) : null
		}), [
			api,
			enableShortcuts,
			shortcutKeys
		]);
		const prev = useMemo(() => ({
			id: "prev",
			title: "Previous story",
			onClick: () => api.jumpToStory(-1),
			right: enableShortcuts ? /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: shortcutKeys.prevStory }) : null
		}), [
			api,
			enableShortcuts,
			shortcutKeys
		]);
		const next = useMemo(() => ({
			id: "next",
			title: "Next story",
			onClick: () => api.jumpToStory(1),
			right: enableShortcuts ? /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: shortcutKeys.nextStory }) : null
		}), [
			api,
			enableShortcuts,
			shortcutKeys
		]);
		const collapse = useMemo(() => ({
			id: "collapse",
			title: "Collapse all",
			onClick: () => api.emit(STORIES_COLLAPSE_ALL),
			right: enableShortcuts ? /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: shortcutKeys.collapseAll }) : null
		}), [
			api,
			enableShortcuts,
			shortcutKeys
		]);
		const documentation = useMemo(() => {
			return {
				id: "documentation",
				title: "Documentation",
				closeOnClick: true,
				href: api.getDocsUrl({
					versioned: true,
					renderer: true
				}),
				right: /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ShareAltIcon, null)),
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement(DocumentIcon, null)
			};
		}, [api]);
		const getAddonsShortcuts = useCallback(() => {
			const addonsShortcuts = api.getAddonsShortcuts();
			const keys = shortcutKeys;
			return Object.entries(addonsShortcuts).filter(([_, { showInMenu }]) => showInMenu).map(([actionName, { label, action }]) => ({
				id: actionName,
				title: label,
				onClick: () => action(),
				right: enableShortcuts && keys[actionName] ? /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: keys[actionName] }) : null
			}));
		}, [
			api,
			enableShortcuts,
			shortcutKeys
		]);
		return useMemo(() => [
			[
				about,
				...scope.CONFIG_TYPE === "DEVELOPMENT" && scope.FEATURES?.menuOnboardingChecklist !== false ? [guide] : [],
				...enableShortcuts ? [shortcuts] : []
			],
			[
				sidebarToggle,
				toolbarToogle,
				addonsToggle,
				up,
				down,
				prev,
				next,
				collapse
			],
			getAddonsShortcuts(),
			[documentation]
		], [
			about,
			guide,
			documentation,
			shortcuts,
			sidebarToggle,
			toolbarToogle,
			addonsToggle,
			up,
			down,
			prev,
			next,
			collapse,
			getAddonsShortcuts,
			enableShortcuts
		]);
	};
}));
//#endregion
//#region src/manager/container/Sidebar.tsx
var Sidebar;
var init_Sidebar = __esmMin((() => {
	init__storybook_global_react();
	init_manager_api();
	init_Sidebar$1();
	init_Menu();
	Sidebar = _storybook_global_react_default.memo(function Sideber({ onMenuClick }) {
		const mapper = ({ state, api }) => {
			const { ui: { name, url, enableShortcuts }, viewMode, storyId, refId, location, layout: { showToolbar }, internal_index, filteredIndex: index, indexError, previewInitialized, refs } = state;
			const whatsNewNotificationsEnabled = state.whatsNewData?.status === "SUCCESS" && !state.disableWhatsNewNotifications;
			return {
				api,
				title: name,
				url,
				indexJson: internal_index,
				index,
				indexError,
				previewInitialized,
				refs,
				storyId,
				refId,
				anchor: location?.hash ? location.hash.slice(1) : void 0,
				viewMode,
				showToolbar,
				isPanelShown: api.getIsPanelShown(),
				isNavShown: api.getIsNavShown(),
				menuHighlighted: whatsNewNotificationsEnabled && api.isWhatsNewUnread(),
				enableShortcuts
			};
		};
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: mapper }, ({ api, showToolbar, isPanelShown, isNavShown, enableShortcuts, ...state }) => {
			const menu = useMenu({
				api,
				showToolbar,
				isPanelShown,
				isNavShown,
				enableShortcuts
			});
			const allStatuses = experimental_useStatusStore();
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Sidebar$1, {
				...state,
				menu,
				onMenuClick,
				allStatuses,
				enableShortcuts
			});
		});
	});
}));
//#endregion
//#region src/manager/index.tsx
function renderStorybookUI(domNode, provider) {
	if (!(provider instanceof Provider$1)) throw new ProviderDoesNotExtendBaseProviderError();
	createRoot(domNode).render(/* @__PURE__ */ _storybook_global_react_default.createElement(Root, {
		key: "root",
		provider
	}));
}
var Root, Main;
var init_manager = __esmMin((() => {
	init__storybook_global_react();
	init_client();
	init_manager_errors();
	init_router();
	init_dist();
	init_index_module();
	init_manager_api();
	init_emotion();
	init_App();
	init_LayoutProvider();
	init_provider();
	init_settings();
	ThemeProvider.displayName = "ThemeProvider";
	q.displayName = "HelmetProvider";
	Root = ({ provider }) => /* @__PURE__ */ _storybook_global_react_default.createElement(q, { key: "helmet.Provider" }, /* @__PURE__ */ _storybook_global_react_default.createElement(LocationProvider, { key: "location.provider" }, /* @__PURE__ */ _storybook_global_react_default.createElement(Main, { provider })));
	Main = ({ provider }) => {
		const navigate = useNavigate();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Location, { key: "location.consumer" }, (locationData) => /* @__PURE__ */ _storybook_global_react_default.createElement(Provider, {
			key: "manager",
			provider,
			...locationData,
			navigate,
			docsOptions: scope?.DOCS_OPTIONS || {}
		}, (combo) => {
			const { state, api } = combo;
			const setManagerLayoutState = useCallback((sizes) => {
				api.setSizes(sizes);
			}, [api]);
			const pages = useMemo(() => [settingsPageAddon, ...Object.values(api.getElements(types.experimental_PAGE))], [Object.keys(api.getElements(types.experimental_PAGE)).join()]);
			return /* @__PURE__ */ _storybook_global_react_default.createElement(ThemeProvider, {
				key: "theme.provider",
				theme: ensure(state.theme)
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(LayoutProvider, null, /* @__PURE__ */ _storybook_global_react_default.createElement(App, {
				key: "app",
				pages,
				managerLayoutState: {
					...state.layout,
					viewMode: state.viewMode
				},
				setManagerLayoutState
			})));
		}));
	};
}));
//#endregion
export { useMediaQuery as _, LocationMonitor as a, PreviewConnected as c, init_Panel as d, init_useLandmark as f, init_useMedia as g, init_Notifications as h, init_Sidebar as i, init_Preview as l, Notifications as m, renderStorybookUI as n, init_useLocation as o, useLandmark as p, Sidebar as r, useLocationHash as s, init_manager as t, Panel as u, MEDIA_DESKTOP_BREAKPOINT as v, init_constants as y };
