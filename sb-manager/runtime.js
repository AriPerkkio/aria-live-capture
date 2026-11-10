import { a as __toESM, n as __esmMin } from "./_manager-chunks/runtime-XrdeG17s.js";
import { $n as StatusPassIcon, $t as types, A as init_router, Ar as init_core_events, At as styled, B as ActionList, Br as init__storybook_global_react, Ct as color, E as Location, Fn as FailedIcon, Fr as _storybook_global_react_default, Gr as useEffect, H as Button, J as Form, Jr as useMemo, Ln as GithubIcon, Lt as addons, Mr as init_channels, Mt as useTheme, Nn as EyeCloseIcon, Nr as Component, On as DocumentIcon, Ot as init_emotion, Pn as EyeIcon, Pr as Fragment, Pt as Consumer, Qn as StatusFailIcon, Qt as shortcutToHumanString, Rt as eventToShortcut, Sn as CloseIcon, Un as LockIcon, Ur as useCallback, Ut as init_manager_api, W as Collapsible, X as Loader, Y as Link, Zr as useState, Zt as shortcutMatchesShortcut, an as useStorybookApi, c as CHANGE_DETECTION_STATUS_TYPE_ID, ct as StorybookLogo, d as init_types, er as StatusWarnIcon, et as ScrollArea, fr as init_icons, ft as TabsView, gn as ChevronSmallDownIcon, gt as TooltipProvider, hr as CHANNEL_WS_DISCONNECT, jr as createBrowserChannel, k as Route, kt as keyframes, l as NON_AGGREGATED_STATUS_TYPE_IDS, mn as CheckIcon, mr as CHANNEL_CREATED, mt as Tooltip, on as useStorybookState, pr as AI_PROMPT_NUDGE, rr as SyncIcon, s as Addon_TypesEnum, sn as AlertIcon$1, sr as UndoIcon, u as REVIEW_STATUS_TYPE_ID, vt as init_components, zn as HeartIcon } from "./_manager-chunks/runtime-CCGFWiML.js";
import { M as init_dist, N as scope } from "./_manager-chunks/runtime-DqOdIqaJ.js";
import { B as init_constants, L as ToolbarManager, M as useCopyButton, R as init_ToolbarManager, f as getAiSetupPrompt, j as init_useCopyButton, p as init_ai_prompts, z as TOOLBAR_ID } from "./_manager-chunks/runtime-BORMtDTH.js";
import { o as curriedTransparentize$1, r as require_memoizerific, s as init_polished_esm } from "./_manager-chunks/runtime-CD3p6Bu2.js";
import { _ as init_menu, n as init_Focus, t as Focus, v as menuTool } from "./_manager-chunks/runtime-DQa1WfwG.js";
import { n as renderStorybookUI, o as init_useLocation, s as useLocationHash, t as init_manager } from "./_manager-chunks/runtime-CxQnUpQE.js";
import { a as init_IconSymbols, c as UpgradeBlock, i as UseSymbol, l as init_UpgradeBlock, o as init_useChecklist, r as init_Sidebar, s as useChecklist } from "./_manager-chunks/runtime-iHnx1eaX.js";
//#region src/manager/manager-stores.ts
var init_manager_stores = __esmMin((() => {
	init_manager_api();
}));
//#endregion
//#region src/manager/utils/tree.ts
function getPath(item, ref) {
	const parent = item.type !== "root" && item.parent ? ref.index[item.parent] : null;
	if (parent) return [...getPath(parent, ref), parent.name];
	return ref.id === "storybook_internal" ? [] : [ref.title || ref.id];
}
/** Whether an entry is a branch: it has at least one child row. */
function isBranch(entry) {
	return "children" in entry && Array.isArray(entry.children) && entry.children.length > 0;
}
function isStoryRow(entry) {
	return !!entry && "storyRowOf" in entry;
}
var import_memoizerific$1, document$2, globalWindow, get, getParent, getParents, getAncestorIds, searchItem, scrollIntoView, getStateType, removeNoiseFromName, isStoryHoistable, hoistSingleStoryComponents, storyRowId, addStoryRows, indexToTree;
var init_tree = __esmMin((() => {
	init_dist();
	import_memoizerific$1 = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	init_Sidebar();
	({document: document$2, window: globalWindow} = scope);
	get = (0, import_memoizerific$1.default)(1e3)((id, dataset) => dataset[id]);
	getParent = (0, import_memoizerific$1.default)(1e3)((id, dataset) => {
		const item = get(id, dataset);
		return item && item.type !== "root" ? get(item.parent, dataset) : void 0;
	});
	getParents = (0, import_memoizerific$1.default)(1e3)((id, dataset) => {
		const parent = getParent(id, dataset);
		return parent ? [parent, ...getParents(parent.id, dataset)] : [];
	});
	getAncestorIds = (0, import_memoizerific$1.default)(1e3)((data, id) => getParents(id, data).map((item) => item.id));
	searchItem = (item, ref) => {
		return {
			...item,
			refId: ref.id,
			path: getPath(item, ref)
		};
	};
	scrollIntoView = (element, center = false) => {
		if (!element) return;
		const { top, bottom } = element.getBoundingClientRect();
		if (!top || !bottom) return;
		if (bottom > (document$2?.querySelector("#sidebar-bottom-wrapper")?.getBoundingClientRect().top || globalWindow.innerHeight || document$2.documentElement.clientHeight)) element.scrollIntoView({ block: center ? "center" : "nearest" });
	};
	getStateType = (isLoading, isAuthRequired, isError, isEmpty) => {
		switch (true) {
			case isAuthRequired: return "auth";
			case isError: return "error";
			case isLoading: return "loading";
			case isEmpty: return "empty";
			default: return "ready";
		}
	};
	removeNoiseFromName = (storyName) => storyName.replaceAll(/(\s|-|_)/gi, "");
	isStoryHoistable = (storyName, componentName) => removeNoiseFromName(storyName) === removeNoiseFromName(componentName);
	hoistSingleStoryComponents = (data) => {
		return Object.values(data).filter((entry) => {
			if (entry.type !== "component") return false;
			const { children = [], name } = entry;
			if (children.length !== 1) return false;
			const onlyChild = data[children[0]];
			if (onlyChild.type === "docs") return true;
			if (onlyChild.type === "story" && onlyChild.subtype === "story") return isStoryHoistable(onlyChild.name, name);
			return false;
		}).reduce((acc, entry) => {
			const { children, parent, name } = entry;
			const [childId] = children;
			if (parent) {
				const parentEntry = acc[parent];
				const siblings = [...parentEntry.children];
				siblings[siblings.indexOf(entry.id)] = childId;
				acc[parent] = {
					...parentEntry,
					children: siblings
				};
			}
			acc[childId] = {
				...data[childId],
				name,
				parent,
				depth: data[childId].depth - 1
			};
			const hoistDescendants = (ids) => {
				for (const id of ids ?? []) {
					const descendant = acc[id];
					if (!descendant) continue;
					acc[id] = {
						...descendant,
						depth: descendant.depth - 1
					};
					hoistDescendants(descendant.children);
				}
			};
			hoistDescendants(data[childId].children);
			delete acc[entry.id];
			return acc;
		}, { ...data });
	};
	storyRowId = (storyId) => `${storyId}--story`;
	addStoryRows = (data) => {
		const result = {};
		let added = false;
		for (const entry of Object.values(data)) {
			if (entry.type !== "story" || entry.subtype !== "story" || !isBranch(entry)) {
				result[entry.id] = entry;
				continue;
			}
			const { children, ...rest } = entry;
			const row = {
				...rest,
				id: storyRowId(entry.id),
				name: "Story",
				parent: entry.id,
				depth: entry.depth + 1,
				storyRowOf: entry.id
			};
			result[entry.id] = {
				...entry,
				children: [row.id, ...children]
			};
			result[row.id] = row;
			added = true;
		}
		return added ? result : data;
	};
	indexToTree = (index) => {
		const tree = [];
		const children = {};
		const processingQueue = [];
		for (const item of Object.values(index)) {
			const entry = {
				...item,
				resolvedChildren: []
			};
			if (item.type === "root" || !item.parent) tree.push(entry);
			else {
				children[item.parent] = children[item.parent] || [];
				children[item.parent].push(entry);
			}
		}
		processingQueue.push(...tree);
		while (processingQueue.length > 0) {
			const current = processingQueue.shift();
			const currentChildren = children[current.id] || [];
			current.resolvedChildren = currentChildren;
			processingQueue.push(...currentChildren);
		}
		return tree;
	};
}));
//#endregion
//#region src/manager/utils/status.tsx
/**
* Compute one merged status value for every ancestor row, in a single bottom-up pass.
*
* For each story leaf, find the most critical status. Then walk up the parent chain and promote
* the status of each ancestor when the leaf status is more critical.
*
* Coverage differs from {@link getGroupDualStatus}: this function reads story leaves only, writes
* to the ancestors of a leaf and never to the leaf's own row, and does include root rows.
*/
function getGroupStatus(index, allStatuses) {
	const result = {};
	for (const item of Object.values(index)) {
		if (item.type !== "story") continue;
		const storyStatuses = allStatuses[item.id];
		if (!storyStatuses) continue;
		const leafStatus = getMostCriticalStatusValue(statusesExcludingReview(Object.values(storyStatuses)).map((s) => s.value));
		let currentItem = item;
		while (currentItem) {
			const pid = "parent" in currentItem ? currentItem.parent : void 0;
			if (!pid) break;
			const existing = result[pid];
			if (!existing || statusPriority.indexOf(leafStatus) > statusPriority.indexOf(existing)) result[pid] = leafStatus;
			currentItem = index[pid];
		}
	}
	return result;
}
/**
* Compute the change-detection status and the test status for every row, in a single bottom-up
* pass. The statuses of a story or docs entry apply to its own row. They also roll up to every
* ancestor of that row.
*
* Review statuses are excluded from both slots. A review status is neither a test result nor a
* change-detection result. `isAggregatedTestStatus` applies the same rule.
*
* Coverage differs from {@link getGroupStatus}: this function reads story and docs leaves, writes
* to the leaf's own row as well as to its ancestors, and never writes to a root row.
*/
function getGroupDualStatus(index, allStatuses) {
	const result = {};
	const promote = (id, status, slot) => {
		if (index[id]?.type === "root") return;
		const entry = result[id] ??= {
			change: { value: "status-value:unknown" },
			test: { value: "status-value:unknown" }
		};
		if (statusPriority.indexOf(status.value) > statusPriority.indexOf(entry[slot].value)) entry[slot] = status;
	};
	for (const item of Object.values(index)) {
		if (item.type !== "story" && item.type !== "docs") continue;
		const ownStatuses = allStatuses[item.id];
		if (!ownStatuses) continue;
		for (const status of Object.values(ownStatuses)) {
			const slot = status.typeId === CHANGE_DETECTION_STATUS_TYPE_ID ? "change" : isAggregatedTestStatus(status) ? "test" : null;
			if (!slot) continue;
			promote(item.id, status, slot);
			let current = item;
			while (current && "parent" in current && current.parent) {
				promote(current.parent, status, slot);
				current = index[current.parent];
			}
		}
	}
	return result;
}
var import_memoizerific, statusPriority, getStatus, shouldShowChangeStatus, isAggregatedTestStatus, getMostCriticalStatusValue, statusesExcludingReview;
var init_status = __esmMin((() => {
	init__storybook_global_react();
	init_types();
	init_icons();
	import_memoizerific = /* @__PURE__ */ __toESM(require_memoizerific(), 1);
	init_polished_esm();
	init_IconSymbols();
	statusPriority = [
		"status-value:unknown",
		"status-value:pending",
		"status-value:success",
		"status-value:affected",
		"status-value:reviewing",
		"status-value:modified",
		"status-value:new",
		"status-value:warning",
		"status-value:error"
	];
	getStatus = (0, import_memoizerific.default)(10)((theme, status) => {
		const defaultIconColor = theme.base === "light" ? curriedTransparentize$1(.3, theme.color.defaultText) : curriedTransparentize$1(.6, theme.color.defaultText);
		return {
			"status-value:unknown": {
				icon: null,
				textColor: null
			},
			"status-value:pending": {
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement(SyncIcon, {
					size: 14,
					color: defaultIconColor
				}),
				textColor: "currentColor"
			},
			"status-value:success": {
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement(StatusPassIcon, { color: theme.color.positive }),
				textColor: "currentColor"
			},
			"status-value:new": {
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement("svg", {
					viewBox: "0 0 14 14",
					width: "14",
					height: "14",
					style: { color: theme.fgColor.accent }
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(UseSymbol, { type: "change-new" })),
				textColor: null
			},
			"status-value:modified": {
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement("svg", {
					viewBox: "0 0 14 14",
					width: "14",
					height: "14",
					style: { color: theme.fgColor.accent }
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(UseSymbol, { type: "change-modified" })),
				textColor: null
			},
			"status-value:affected": {
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement("svg", {
					viewBox: "0 0 14 14",
					width: "14",
					height: "14",
					style: { color: theme.fgColor.accent }
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(UseSymbol, { type: "change-affected" })),
				textColor: null
			},
			"status-value:reviewing": {
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement("svg", {
					viewBox: "0 0 14 14",
					width: "14",
					height: "14",
					style: { color: theme.fgColor.agentic }
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(UseSymbol, { type: "reviewing" })),
				textColor: null
			},
			"status-value:warning": {
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement(StatusWarnIcon, {
					size: 14,
					color: theme.color.warning
				}),
				textColor: theme.fgColor.warning
			},
			"status-value:error": {
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement(StatusFailIcon, { color: theme.color.negative }),
				textColor: theme.fgColor.negative
			}
		}[status];
	});
	shouldShowChangeStatus = (changeStatus, isModifiedFilterActive) => changeStatus !== "status-value:unknown" && changeStatus !== "status-value:affected" && (changeStatus !== "status-value:modified" || isModifiedFilterActive);
	isAggregatedTestStatus = (status) => !NON_AGGREGATED_STATUS_TYPE_IDS.includes(status.typeId);
	getMostCriticalStatusValue = (statusValues) => {
		return statusPriority.findLast((value) => statusValues.includes(value)) || "status-value:unknown";
	};
	statusesExcludingReview = (statuses) => statuses.filter((status) => status.typeId !== REVIEW_STATUS_TYPE_ID);
}));
//#endregion
//#region src/manager/keybinding.ts
var codeToKeyMap, allFalse, matchesModifiers, matchesKeyCode;
var init_keybinding = __esmMin((() => {
	codeToKeyMap = {
		Space: " ",
		Slash: "/",
		ArrowLeft: "ArrowLeft",
		ArrowUp: "ArrowUp",
		ArrowRight: "ArrowRight",
		ArrowDown: "ArrowDown",
		Escape: "Escape",
		Enter: "Enter"
	};
	allFalse = {
		alt: false,
		ctrl: false,
		meta: false,
		shift: false
	};
	matchesModifiers = (modifiers, event) => {
		const { alt, ctrl, meta, shift } = modifiers === false ? allFalse : modifiers;
		if (typeof alt === "boolean" && alt !== event.altKey) return false;
		if (typeof ctrl === "boolean" && ctrl !== event.ctrlKey) return false;
		if (typeof meta === "boolean" && meta !== event.metaKey) return false;
		if (typeof shift === "boolean" && shift !== event.shiftKey) return false;
		return true;
	};
	matchesKeyCode = (code, event) => {
		return event.code ? event.code === code : event.key === codeToKeyMap[code];
	};
}));
//#endregion
//#region src/manager/provider.ts
var Provider;
var init_provider = __esmMin((() => {
	Provider = class {
		getElements(_type) {
			throw new Error("Provider.getElements() is not implemented!");
		}
		handleAPI(_api) {
			throw new Error("Provider.handleAPI() is not implemented!");
		}
		getConfig() {
			console.error("Provider.getConfig() is not implemented!");
			return {};
		}
	};
}));
//#endregion
//#region src/manager/settings/About.tsx
var Container$3, Header$1, Footer$1, Actions$1, StyledLink, AboutScreen;
var init_About = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_icons();
	init_emotion();
	init_UpgradeBlock();
	Container$3 = styled.div({
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		marginTop: 40
	});
	Header$1 = styled.header({
		marginBottom: 32,
		alignItems: "center",
		display: "flex",
		"> svg": {
			height: 48,
			width: "auto",
			marginRight: 8
		}
	});
	Footer$1 = styled.div(({ theme }) => ({
		marginBottom: 24,
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		color: theme.base === "light" ? theme.color.dark : theme.color.lightest,
		fontWeight: theme.typography.weight.regular,
		fontSize: theme.typography.size.s2
	}));
	Actions$1 = styled.div({
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 24,
		marginTop: 24,
		gap: 16
	});
	StyledLink = styled(Link)(({ theme }) => ({
		"&&": {
			fontWeight: theme.typography.weight.bold,
			color: theme.base === "light" ? theme.color.dark : theme.color.light
		},
		"&:hover": { color: theme.base === "light" ? theme.color.darkest : theme.color.lightest }
	}));
	AboutScreen = ({ onNavigateToWhatsNew }) => {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container$3, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Header$1, null, /* @__PURE__ */ _storybook_global_react_default.createElement(StorybookLogo, { alt: "Storybook" })), /* @__PURE__ */ _storybook_global_react_default.createElement(UpgradeBlock, { onNavigateToWhatsNew }), /* @__PURE__ */ _storybook_global_react_default.createElement(Footer$1, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Actions$1, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			ariaLabel: false,
			asChild: true
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("a", { href: "https://github.com/storybookjs/storybook" }, /* @__PURE__ */ _storybook_global_react_default.createElement(GithubIcon, null), "GitHub")), /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			ariaLabel: false,
			asChild: true
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("a", { href: "https://storybook.js.org/docs?ref=ui" }, /* @__PURE__ */ _storybook_global_react_default.createElement(DocumentIcon, { style: {
			display: "inline",
			marginRight: 5
		} }), "Documentation"))), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, "Open source software maintained by", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(StyledLink, { href: "https://www.chromatic.com/" }, "Chromatic"), " and the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(StyledLink, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community"))));
	};
}));
//#endregion
//#region src/manager/settings/AboutPage.tsx
var NotificationClearer, AboutPage;
var init_AboutPage = __esmMin((() => {
	init__storybook_global_react();
	init_manager_api();
	init_About();
	NotificationClearer = class extends Component {
		componentDidMount() {
			const { api, notificationId } = this.props;
			api.clearNotification(notificationId);
		}
		render() {
			const { children } = this.props;
			return children;
		}
	};
	AboutPage = () => {
		const api = useStorybookApi();
		const state = useStorybookState();
		const onNavigateToWhatsNew = useCallback(() => {
			api.changeSettingsTab("whats-new");
		}, [api]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(NotificationClearer, {
			api,
			notificationId: "update"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(AboutScreen, { onNavigateToWhatsNew: state.whatsNewData?.status === "SUCCESS" ? onNavigateToWhatsNew : void 0 }));
	};
}));
//#endregion
//#region src/manager/settings/Checklist/Checklist.tsx
var Sections, Items, SectionSummary, SectionHeading, ItemSummary, ItemHeading, ItemContent, StatusIcon, Checked, Skipped, Actions, ToggleButton, ChecklistCopyButton, Checklist;
var init_Checklist = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_icons();
	init_manager_api();
	init_emotion();
	init_Focus();
	init_useLocation();
	init_useCopyButton();
	Sections = styled.ol(({ theme }) => ({
		listStyle: "none",
		display: "flex",
		flexDirection: "column",
		gap: 20,
		margin: 0,
		padding: 0,
		"& > li": {
			background: theme.background.content,
			border: `1px solid ${theme.base === "dark" ? theme.color.darker : theme.color.border}`,
			borderRadius: 8
		}
	}));
	Items = styled.ol(({ theme }) => ({
		listStyle: "none",
		display: "flex",
		flexDirection: "column",
		margin: 0,
		padding: 0,
		"& > li:not(:last-child)": { boxShadow: `inset 0 -1px 0 ${theme.base === "dark" ? theme.color.darker : theme.color.border}` },
		"& > li:last-child": {
			borderBottomLeftRadius: 7,
			borderBottomRightRadius: 7
		}
	}));
	SectionSummary = styled.div(({ theme, progress, isCollapsed, onClick }) => ({
		position: "relative",
		fontWeight: "bold",
		display: "flex",
		alignItems: "center",
		gap: 10,
		padding: "10px 10px 10px 15px",
		borderBottom: `5px solid ${theme.base === "dark" ? theme.color.darker : theme.color.light}`,
		borderBottomLeftRadius: isCollapsed ? 7 : 0,
		borderBottomRightRadius: isCollapsed ? 7 : 0,
		transition: "border-radius var(--transition-duration, 0.2s)",
		cursor: onClick ? "pointer" : "default",
		"--toggle-button-rotate": isCollapsed ? "0deg" : "180deg",
		"--toggle-button-opacity": 0,
		"&:hover, &:focus-visible": {
			outline: "none",
			"--toggle-button-opacity": 1
		},
		"&::after": {
			pointerEvents: "none",
			position: "absolute",
			top: 0,
			bottom: -5,
			left: 0,
			right: 0,
			content: "\"\"",
			display: "block",
			width: `${progress}%`,
			borderBottom: `5px solid ${theme.color.positive}`,
			borderBottomLeftRadius: "inherit",
			borderBottomRightRadius: progress === 100 ? "inherit" : 0,
			transition: "width var(--transition-duration, 0.2s)"
		}
	}));
	SectionHeading = styled.h2(({ theme }) => ({
		flex: 1,
		margin: 0,
		fontSize: theme.typography.size.s3,
		fontWeight: theme.typography.weight.bold
	}));
	ItemSummary = styled.div(({ theme, isCollapsed, onClick }) => ({
		fontWeight: theme.typography.weight.regular,
		fontSize: theme.typography.size.s2,
		display: "flex",
		alignItems: "center",
		minHeight: 40,
		gap: 10,
		padding: isCollapsed ? "6px 10px 6px 15px" : "10px 10px 10px 15px",
		transition: "padding var(--transition-duration, 0.2s)",
		cursor: onClick ? "pointer" : "default",
		"--toggle-button-rotate": isCollapsed ? "0deg" : "180deg",
		"&:focus-visible": { outline: "none" }
	}));
	ItemHeading = styled.h3(({ theme, skipped }) => ({
		flex: 1,
		margin: 0,
		color: skipped ? theme.textMutedColor : theme.color.defaultText,
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		fontSize: theme.typography.size.s2,
		fontWeight: theme.typography.weight.bold
	}));
	ItemContent = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		gap: 8,
		padding: "0 15px 15px 41px",
		fontSize: theme.typography.size.s2,
		code: {
			fontSize: "0.9em",
			backgroundColor: theme.background.app,
			borderRadius: theme.appBorderRadius,
			padding: "1px 3px"
		},
		img: {
			maxWidth: "100%",
			margin: "15px auto"
		},
		p: {
			margin: 0,
			lineHeight: 1.4
		},
		"ol, ul": {
			paddingLeft: 25,
			listStyleType: "disc",
			"li::marker": { color: theme.color.mediumdark }
		}
	}));
	StatusIcon = styled.div(({ theme }) => ({
		position: "relative",
		flex: "0 0 auto",
		minHeight: 16,
		minWidth: 16,
		margin: 0,
		background: theme.base === "dark" ? theme.color.darkest : theme.background.app,
		borderRadius: 9,
		outline: `1px solid ${theme.base === "dark" ? theme.color.darker : theme.color.border}`,
		outlineOffset: -1
	}));
	Checked = styled(StatusPassIcon)(({ theme, "data-visible": visible }) => ({
		position: "absolute",
		width: "inherit",
		height: "inherit",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		padding: 1,
		borderRadius: "50%",
		background: theme.color.positive,
		color: theme.background.content,
		opacity: visible ? 1 : 0,
		transform: visible ? "scale(1)" : "scale(0.7)",
		transition: "all var(--transition-duration, 0.2s)"
	}));
	Skipped = styled.span(({ theme, visible }) => ({
		display: "flex",
		alignItems: "center",
		color: theme.textMutedColor,
		fontSize: "12px",
		fontWeight: "bold",
		overflow: "hidden",
		padding: visible ? "0 10px" : 0,
		opacity: visible ? 1 : 0,
		width: visible ? "auto" : 0,
		height: visible ? 18 : 16,
		transition: "all var(--transition-duration, 0.2s)"
	}));
	Actions = styled.div({
		alignSelf: "flex-end",
		flexDirection: "row-reverse",
		display: "flex",
		gap: 4
	});
	ToggleButton = styled(Button)({
		opacity: "var(--toggle-button-opacity)",
		transition: "opacity var(--transition-duration, 0.2s)",
		"&:hover, &:focus": { opacity: 1 },
		svg: {
			transform: "rotate(var(--toggle-button-rotate))",
			transition: "transform var(--transition-duration, 0.2s)"
		}
	});
	ChecklistCopyButton = ({ label, copyContent, onClick }) => {
		const { children: copyChildren, buttonProps: copyButtonProps } = useCopyButton({
			children: label,
			onCopy: onClick,
			content: copyContent
		});
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			variant: "solid",
			size: "small",
			...copyButtonProps
		}, copyChildren);
	};
	Checklist = ({ availableItems, accept, skip, reset, forceCollapsed = false }) => {
		const api = useStorybookApi();
		const locationHash = useLocationHash();
		const { itemsById, sectionsById } = useMemo(() => availableItems.reduce((acc, item) => {
			acc.itemsById[item.id] = item;
			const { sectionId: id, sectionTitle: title } = item;
			acc.sectionsById[id] = acc.sectionsById[id] ?? {
				id,
				title,
				itemIds: []
			};
			acc.sectionsById[id].itemIds.push(item.id);
			return acc;
		}, {
			itemsById: {},
			sectionsById: {}
		}), [availableItems]);
		const sections = useMemo(() => Object.values(sectionsById).map(({ id, title, itemIds }) => {
			const items = itemIds.map((id) => itemsById[id]).filter(({ showOnGuidePage }) => showOnGuidePage !== false);
			return {
				id,
				title,
				items,
				progress: items.reduce((acc, item) => item.isOpen ? acc : acc + 1, 0) / items.length * 100
			};
		}), [itemsById, sectionsById]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Sections, null, sections.map(({ id, title, items, progress }) => {
			const collapsed = forceCollapsed || progress === 100 && items.every((item) => item.id !== locationHash);
			return /* @__PURE__ */ _storybook_global_react_default.createElement("li", { key: id }, /* @__PURE__ */ _storybook_global_react_default.createElement(Focus.Proxy, { targetId: `toggle-${id}` }, /* @__PURE__ */ _storybook_global_react_default.createElement(Collapsible, {
				collapsed,
				summary: ({ isCollapsed, toggleCollapsed, toggleProps }) => /* @__PURE__ */ _storybook_global_react_default.createElement(SectionSummary, {
					progress,
					isCollapsed,
					onClick: toggleCollapsed
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(StatusIcon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Checked, { "data-visible": progress === 100 })), /* @__PURE__ */ _storybook_global_react_default.createElement(SectionHeading, null, title), /* @__PURE__ */ _storybook_global_react_default.createElement(Actions, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ToggleButton, {
					ariaLabel: `${isCollapsed ? "Expand" : "Collapse"} ${title}`,
					...toggleProps,
					"data-target-id": `toggle-${id}`,
					variant: "ghost",
					padding: "small"
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(ChevronSmallDownIcon, null))))
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(Items, null, items.map(({ content, isOpen, isAccepted, isDone, isLockedBy, isImmutable, isSkipped, ...item }) => {
				const isChecked = isAccepted || isDone;
				const isCollapsed = item.id !== locationHash;
				const isLocked = !!isLockedBy;
				const itemContent = content?.({ api });
				return /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, { key: item.id }, /* @__PURE__ */ _storybook_global_react_default.createElement(Focus.Target, {
					targetHash: item.id,
					highlightDuration: 2e3,
					outlineOffset: -2
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(Focus.Proxy, {
					targetId: `toggle-${item.id}`,
					outlineOffset: -2
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(Collapsible, {
					collapsed: isCollapsed,
					summary: ({ isCollapsed, toggleCollapsed, toggleProps }) => /* @__PURE__ */ _storybook_global_react_default.createElement(ItemSummary, {
						isCollapsed: isCollapsed || !itemContent,
						onClick: itemContent ? toggleCollapsed : void 0
					}, /* @__PURE__ */ _storybook_global_react_default.createElement(StatusIcon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Checked, { "data-visible": isChecked }), /* @__PURE__ */ _storybook_global_react_default.createElement(Skipped, { visible: isSkipped }, "Skipped")), /* @__PURE__ */ _storybook_global_react_default.createElement(ItemHeading, { skipped: isSkipped }, item.label), /* @__PURE__ */ _storybook_global_react_default.createElement(Actions, null, itemContent && /* @__PURE__ */ _storybook_global_react_default.createElement(ToggleButton, {
						...toggleProps,
						"data-target-id": `toggle-${item.id}`,
						variant: "ghost",
						padding: "small",
						ariaLabel: `${isCollapsed ? "Expand" : "Collapse"} ${item.label}`
					}, /* @__PURE__ */ _storybook_global_react_default.createElement(ChevronSmallDownIcon, null)), isLocked && /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
						variant: "ghost",
						padding: "small",
						ariaLabel: "Locked",
						tooltip: `Complete “${itemsById[isLockedBy].label}” first`,
						disabled: true,
						readOnly: true
					}, /* @__PURE__ */ _storybook_global_react_default.createElement(LockIcon, null)), isOpen && !isLocked && item.action && (item.action.copyContent ? /* @__PURE__ */ _storybook_global_react_default.createElement(ChecklistCopyButton, {
						label: item.action.label,
						copyContent: item.action.copyContent,
						onClick: () => item.action.onClick({
							api,
							accept: () => accept(item.id)
						})
					}) : /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
						ariaLabel: false,
						variant: "solid",
						size: "small",
						onClick: (e) => {
							e.stopPropagation();
							item.action?.onClick({
								api,
								accept: () => accept(item.id)
							});
						}
					}, item.action.label)), isOpen && !isLocked && !item.action && !item.subscribe && /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
						ariaLabel: false,
						variant: "outline",
						size: "small",
						onClick: (e) => {
							e.stopPropagation();
							accept(item.id);
						}
					}, /* @__PURE__ */ _storybook_global_react_default.createElement(CheckIcon, null), "Mark as complete"), isOpen && !isLocked && /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
						ariaLabel: false,
						variant: "ghost",
						size: "small",
						onClick: (e) => {
							e.stopPropagation();
							skip(item.id);
						}
					}, "Skip"), (isAccepted && !isImmutable || isSkipped) && !isLocked && /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
						ariaLabel: "Undo",
						variant: "ghost",
						padding: "small",
						onClick: (e) => {
							e.stopPropagation();
							reset(item.id);
						}
					}, /* @__PURE__ */ _storybook_global_react_default.createElement(UndoIcon, null))))
				}, itemContent && /* @__PURE__ */ _storybook_global_react_default.createElement(ItemContent, null, itemContent)))));
			})))));
		}));
	};
}));
//#endregion
//#region src/manager/settings/Checklist/AiSetupBlock.tsx
var AiCtaCard, AiCtaHeadingRow, AiCtaHeading, AiCtaDescription, AiCtaActions, CopyButton, AiSetupBlock;
var init_AiSetupBlock = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_core_events();
	init_icons();
	init_manager_api();
	init_emotion();
	init_ai_prompts();
	init_useCopyButton();
	init_Checklist();
	AiCtaCard = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		padding: "10px 10px 10px 15px",
		border: `1px solid ${theme.base === "dark" ? theme.color.darker : theme.color.border}`,
		borderRadius: 8,
		background: theme.background.content
	}));
	AiCtaHeadingRow = styled.div({
		display: "flex",
		alignItems: "center",
		gap: 10
	});
	AiCtaHeading = styled.h2(({ theme, $skipped }) => ({
		flex: 1,
		margin: 0,
		color: $skipped ? theme.textMutedColor : theme.color.defaultText,
		fontSize: theme.typography.size.s2,
		fontWeight: theme.typography.weight.bold,
		textWrap: "pretty"
	}));
	AiCtaDescription = styled.p(({ theme }) => ({
		margin: 0,
		color: theme.color.defaultText,
		fontSize: theme.typography.size.s2,
		fontWeight: theme.typography.weight.regular,
		marginTop: 8
	}));
	AiCtaActions = styled.div({
		display: "flex",
		gap: 8,
		justifyContent: "flex-end",
		marginTop: 12
	});
	CopyButton = ({ api }) => {
		const { children: buttonChildren, buttonProps } = useCopyButton({
			children: "Copy prompt",
			childrenOnCopy: /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(CheckIcon, null), " Copied!"),
			content: getAiSetupPrompt(),
			onCopy: () => {
				api.emit(AI_PROMPT_NUDGE, {
					id: "setup",
					origin: "onboarding-guide-page"
				});
			}
		});
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			variant: "solid",
			size: "medium",
			...buttonProps
		}, buttonChildren);
	};
	AiSetupBlock = ({ item, reset, skip }) => {
		const api = useStorybookApi();
		if (!(!item.isDone && !item.isAccepted && !item.isCompleted)) return null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(AiCtaCard, null, /* @__PURE__ */ _storybook_global_react_default.createElement(AiCtaHeadingRow, null, item.isSkipped && /* @__PURE__ */ _storybook_global_react_default.createElement(StatusIcon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Skipped, { visible: true }, "Skipped")), /* @__PURE__ */ _storybook_global_react_default.createElement(AiCtaHeading, { $skipped: item.isSkipped }, "Set up Storybook with AI"), item.isSkipped && /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			ariaLabel: "Undo",
			variant: "ghost",
			padding: "small",
			onClick: () => reset(item.id)
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(UndoIcon, null))), /* @__PURE__ */ _storybook_global_react_default.createElement(Collapsible.Content, { collapsed: item.isSkipped }, /* @__PURE__ */ _storybook_global_react_default.createElement(AiCtaDescription, null, "Run a prompt in your AI agent to analyze your codebase, configure decorators and mocks, write sample stories for your UI components, and verify everything works."), /* @__PURE__ */ _storybook_global_react_default.createElement(AiCtaActions, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			variant: "ghost",
			size: "medium",
			ariaLabel: false,
			onClick: () => skip(item.id)
		}, "Skip"), /* @__PURE__ */ _storybook_global_react_default.createElement(CopyButton, { api }))));
	};
}));
//#endregion
//#region src/manager/settings/GuidePage.tsx
var Container$2, Intro, GuidePage;
var init_GuidePage = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_dist();
	init_emotion();
	init_useChecklist();
	init_Checklist();
	init_AiSetupBlock();
	Container$2 = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		maxWidth: 600,
		margin: "0 auto",
		padding: "48px 20px",
		gap: 32,
		fontSize: theme.typography.size.s2,
		"--transition-duration": "0.2s"
	}));
	Intro = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		gap: 8,
		"& h1": {
			fontSize: theme.typography.size.m3,
			fontWeight: theme.typography.weight.bold,
			margin: 0
		},
		"& > p": { margin: 0 }
	}));
	GuidePage = () => {
		const checklist = useChecklist();
		const aiSetupItem = checklist.availableItems.find((item) => item.id === "aiSetup");
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container$2, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Intro, null, /* @__PURE__ */ _storybook_global_react_default.createElement("h1", null, "Guide"), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Whether you're just getting started or looking for ways to level up, this checklist will help you make the most of your Storybook.")), aiSetupItem && /* @__PURE__ */ _storybook_global_react_default.createElement(AiSetupBlock, {
			item: aiSetupItem,
			reset: checklist.reset,
			skip: checklist.skip
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(Checklist, {
			...checklist,
			forceCollapsed: aiSetupItem?.isOpen
		}), scope.FEATURES?.sidebarOnboardingChecklist !== false && /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, checklist.openItems.length === 0 ? /* @__PURE__ */ _storybook_global_react_default.createElement("center", null, "Your work here is done!") : checklist.widget.disable || checklist.openItems.every((item) => item.isMuted) ? /* @__PURE__ */ _storybook_global_react_default.createElement("center", null, "Want to see this in the sidebar?", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, { onClick: () => checklist.disable(false) }, "Show in sidebar")) : /* @__PURE__ */ _storybook_global_react_default.createElement("center", null, "Don't want to see this in the sidebar?", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, { onClick: () => checklist.mute(checklist.allItems.map(({ id }) => id)) }, "Remove from sidebar"))));
	};
}));
//#endregion
//#region src/manager/settings/SettingsFooter.tsx
var Footer, SettingsFooter;
var init_SettingsFooter = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_emotion();
	Footer = styled.div(({ theme }) => ({
		display: "flex",
		paddingTop: 20,
		marginTop: 20,
		borderTop: `1px solid ${theme.appBorderColor}`,
		fontWeight: theme.typography.weight.bold,
		"& > * + *": { marginLeft: 20 }
	}));
	SettingsFooter = (props) => /* @__PURE__ */ _storybook_global_react_default.createElement(Footer, props, /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
		secondary: true,
		href: "https://storybook.js.org?ref=ui",
		cancel: false,
		target: "_blank"
	}, "Docs"), /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
		secondary: true,
		href: "https://github.com/storybookjs/storybook",
		cancel: false,
		target: "_blank"
	}, "GitHub"), /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
		secondary: true,
		href: "https://storybook.js.org/community?ref=ui#support",
		cancel: false,
		target: "_blank"
	}, "Support"));
}));
//#endregion
//#region src/manager/settings/shortcuts.tsx
function toShortcutState(shortcutKeys) {
	const state = {};
	for (const key of Object.keys(shortcutKeys)) state[key] = {
		shortcut: shortcutKeys[key],
		error: false,
		hardcoded: hardcodedShortcuts.includes(key)
	};
	return state;
}
var Header, HeaderItem, GridHeaderRow, Row, GridWrapper, Description, TextInput, Fade, SuccessIcon, Container$1, shortcutLabels, hardcodedShortcuts, ShortcutsScreen;
var init_shortcuts = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_icons();
	init_manager_api();
	init_emotion();
	init_SettingsFooter();
	Header = styled.header(({ theme }) => ({
		marginBottom: 20,
		fontSize: theme.typography.size.m3,
		fontWeight: theme.typography.weight.bold,
		alignItems: "center",
		display: "flex"
	}));
	HeaderItem = styled.div(({ theme }) => ({ fontWeight: theme.typography.weight.bold }));
	GridHeaderRow = styled.div({
		alignSelf: "flex-end",
		display: "grid",
		margin: "10px 0",
		gridTemplateColumns: "1fr 1fr 12px",
		"& > *:last-of-type": {
			gridColumn: "2 / 2",
			justifySelf: "flex-end",
			gridRow: "1"
		}
	});
	Row = styled.div(({ theme }) => ({
		padding: "6px 0",
		borderTop: `1px solid ${theme.appBorderColor}`,
		display: "grid",
		gridTemplateColumns: "1fr 1fr 0px"
	}));
	GridWrapper = styled.div({
		display: "grid",
		gridTemplateColumns: "1fr",
		gridAutoRows: "minmax(auto, auto)",
		marginBottom: 20
	});
	Description = styled.div({ alignSelf: "center" });
	TextInput = styled(Form.Input)(({ valid, theme }) => valid === "error" ? { animation: `${theme.animation.jiggle} 700ms ease-out` } : {}, {
		display: "flex",
		width: 80,
		flexDirection: "column",
		justifySelf: "flex-end",
		paddingLeft: 4,
		paddingRight: 4,
		textAlign: "center"
	});
	Fade = keyframes`
0%,100% { opacity: 0; }
  50% { opacity: 1; }
`;
	SuccessIcon = styled(CheckIcon)(({ valid, theme }) => valid === "valid" ? {
		color: theme.color.positive,
		animation: `${Fade} 2s ease forwards`
	} : { opacity: 0 }, {
		alignSelf: "center",
		display: "flex",
		marginLeft: 10,
		height: 14,
		width: 14
	});
	Container$1 = styled.div(({ theme }) => ({
		fontSize: theme.typography.size.s2,
		padding: `3rem 20px`,
		maxWidth: 600,
		margin: "0 auto"
	}));
	shortcutLabels = {
		fullScreen: "Go full screen",
		togglePanel: "Toggle addons",
		panelPosition: "Toggle addons orientation",
		toggleNav: "Toggle sidebar",
		toolbar: "Toggle toolbar",
		search: "Focus search",
		focusNav: "Focus sidebar",
		focusIframe: "Focus preview area",
		focusPanel: "Focus addons",
		prevComponent: "Previous component or page",
		nextComponent: "Next component or page",
		prevStory: "Previous story",
		nextStory: "Next story",
		shortcutsPage: "Go to shortcuts page",
		aboutPage: "Go to about page",
		collapseAll: "Collapse all items on sidebar",
		expandAll: "Expand all items on sidebar",
		remount: "Reload story",
		openInEditor: "Open story in editor",
		openInIsolation: "Open story in isolation",
		copyStoryLink: "Copy story link to clipboard",
		goToPreviousLandmark: "Go to previous landmark",
		goToNextLandmark: "Go to next landmark",
		contextMenu: "Open actions menu in sidebar"
	};
	hardcodedShortcuts = ["goToPreviousLandmark", "goToNextLandmark"];
	ShortcutsScreen = class extends Component {
		constructor(props) {
			super(props);
			this.onKeyDown = (e) => {
				const { activeFeature, shortcutKeys } = this.state;
				if (e.key === "Backspace") return this.restoreDefault();
				const shortcut = eventToShortcut(e);
				if (!shortcut) return false;
				const normalizedShortcut = shortcut.map((key) => Array.isArray(key) ? key.at(-1) : key);
				const error = normalizedShortcut.length === 1 && normalizedShortcut[0] === "escape" || !!Object.entries(shortcutKeys).find(([feature, { shortcut: existingShortcut }]) => feature !== activeFeature && existingShortcut && shortcutMatchesShortcut(normalizedShortcut, existingShortcut));
				return this.setState({ shortcutKeys: {
					...shortcutKeys,
					[activeFeature]: {
						shortcut: normalizedShortcut,
						error
					}
				} });
			};
			this.onFocus = (focusedInput) => () => {
				const { shortcutKeys } = this.state;
				this.setState({
					activeFeature: focusedInput,
					shortcutKeys: {
						...shortcutKeys,
						[focusedInput]: {
							shortcut: null,
							error: false
						}
					}
				});
			};
			this.onBlur = async () => {
				const { shortcutKeys, activeFeature } = this.state;
				if (shortcutKeys[activeFeature]) {
					const { shortcut, error } = shortcutKeys[activeFeature];
					if (!shortcut || error) return this.restoreDefault();
					return this.saveShortcut();
				}
				return false;
			};
			this.saveShortcut = async () => {
				const { activeFeature, shortcutKeys } = this.state;
				const { setShortcut } = this.props;
				await setShortcut(activeFeature, shortcutKeys[activeFeature].shortcut);
				this.setState({ successField: activeFeature });
			};
			this.restoreDefaults = async () => {
				const { restoreAllDefaultShortcuts } = this.props;
				const defaultShortcuts = await restoreAllDefaultShortcuts();
				return this.setState({ shortcutKeys: toShortcutState(defaultShortcuts) });
			};
			this.restoreDefault = async () => {
				const { activeFeature, shortcutKeys } = this.state;
				const { restoreDefaultShortcut } = this.props;
				const defaultShortcut = await restoreDefaultShortcut(activeFeature);
				return this.setState({ shortcutKeys: {
					...shortcutKeys,
					...toShortcutState({ [activeFeature]: defaultShortcut })
				} });
			};
			this.displaySuccessMessage = (activeElement) => {
				const { successField, shortcutKeys } = this.state;
				return activeElement === successField && shortcutKeys[activeElement].error === false ? "valid" : void 0;
			};
			this.displayError = (activeElement) => {
				const { activeFeature, shortcutKeys } = this.state;
				return activeElement === activeFeature && shortcutKeys[activeElement].error === true ? "error" : void 0;
			};
			this.renderKeyInput = () => {
				const { shortcutKeys, addonsShortcutLabels } = this.state;
				return Object.entries(shortcutKeys).filter(([feature]) => shortcutLabels[feature] !== void 0 || addonsShortcutLabels && addonsShortcutLabels[feature]).map(([feature, { shortcut, hardcoded }]) => /* @__PURE__ */ _storybook_global_react_default.createElement(Row, { key: feature }, /* @__PURE__ */ _storybook_global_react_default.createElement(Description, null, shortcutLabels[feature] || addonsShortcutLabels[feature]), hardcoded ? /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(TooltipProvider, {
					tooltip: /* @__PURE__ */ _storybook_global_react_default.createElement(Tooltip, { hasChrome: true }, "This shortcut cannot be changed."),
					placement: "right"
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(TextInput, {
					"aria-disabled": true,
					readOnly: true,
					valid: void 0,
					value: shortcut ? shortcutToHumanString(shortcut) : ""
				}))) : /* @__PURE__ */ _storybook_global_react_default.createElement(TextInput, {
					spellCheck: "false",
					valid: this.displayError(feature),
					className: "modalInput",
					onBlur: this.onBlur,
					onFocus: this.onFocus(feature),
					onKeyDown: this.onKeyDown,
					value: shortcut ? shortcutToHumanString(shortcut) : "",
					placeholder: "Type keys",
					readOnly: true
				}), /* @__PURE__ */ _storybook_global_react_default.createElement(SuccessIcon, { valid: this.displaySuccessMessage(feature) })));
			};
			this.renderKeyForm = () => /* @__PURE__ */ _storybook_global_react_default.createElement(GridWrapper, null, /* @__PURE__ */ _storybook_global_react_default.createElement(GridHeaderRow, null, /* @__PURE__ */ _storybook_global_react_default.createElement(HeaderItem, null, "Commands"), /* @__PURE__ */ _storybook_global_react_default.createElement(HeaderItem, null, "Shortcut")), this.renderKeyInput());
			this.state = {
				activeFeature: void 0,
				successField: void 0,
				shortcutKeys: toShortcutState(props.shortcutKeys),
				addonsShortcutLabels: props.addonsShortcutLabels
			};
		}
		render() {
			const layout = this.renderKeyForm();
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Container$1, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Header, null, "Keyboard shortcuts"), layout, /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
				ariaLabel: false,
				variant: "outline",
				size: "small",
				id: "restoreDefaultsHotkeys",
				onClick: this.restoreDefaults
			}, "Restore defaults"), /* @__PURE__ */ _storybook_global_react_default.createElement(SettingsFooter, null));
		}
	};
}));
//#endregion
//#region src/manager/settings/ShortcutsPage.tsx
var ShortcutsPage;
var init_ShortcutsPage = __esmMin((() => {
	init__storybook_global_react();
	init_manager_api();
	init_shortcuts();
	ShortcutsPage = () => /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, null, ({ api: { getShortcutKeys, getAddonsShortcutLabels, setShortcut, restoreDefaultShortcut, restoreAllDefaultShortcuts } }) => /* @__PURE__ */ _storybook_global_react_default.createElement(ShortcutsScreen, {
		shortcutKeys: getShortcutKeys(),
		addonsShortcutLabels: getAddonsShortcutLabels(),
		setShortcut,
		restoreDefaultShortcut,
		restoreAllDefaultShortcuts
	}));
}));
//#endregion
//#region src/manager/settings/whats_new.tsx
var Centered, LoaderWrapper, Message, Container, WhatsNewFooter, Iframe, AlertIcon, WhatsNewLoader, MaxWaitTimeMessaging, PureWhatsNewScreen, MAX_WAIT_TIME, WhatsNewScreen;
var init_whats_new = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_dist();
	init_icons();
	init_manager_api();
	init_emotion();
	init_useCopyButton();
	Centered = styled.div({
		top: "50%",
		position: "absolute",
		transform: "translateY(-50%)",
		width: "100%",
		textAlign: "center"
	});
	LoaderWrapper = styled.div({
		position: "relative",
		height: "32px"
	});
	Message = styled.div(({ theme }) => ({
		paddingTop: "12px",
		color: theme.textMutedColor,
		maxWidth: "295px",
		margin: "0 auto",
		fontSize: `${theme.typography.size.s1}px`,
		lineHeight: `16px`
	}));
	Container = styled.div(({ theme }) => ({
		position: "absolute",
		width: "100%",
		height: 40,
		bottom: 0,
		background: theme.background.bar,
		fontSize: theme.typography.size.s2,
		borderTop: `1px solid ${theme.color.border}`,
		padding: "0 10px 0 15px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between"
	}));
	WhatsNewFooter = ({ isNotificationsEnabled, onToggleNotifications, copyContent }) => {
		const theme = useTheme();
		const { children: copyText, buttonProps: copyButtonProps } = useCopyButton({
			children: "Copy Link",
			content: copyContent
		});
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container, null, /* @__PURE__ */ _storybook_global_react_default.createElement("div", { style: {
			display: "flex",
			alignItems: "center",
			gap: 10
		} }, /* @__PURE__ */ _storybook_global_react_default.createElement(HeartIcon, { color: theme.color.mediumdark }), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, "Share this with your team."), /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			size: "small",
			variant: "ghost",
			...copyButtonProps
		}, copyText)), isNotificationsEnabled ? /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			ariaLabel: false,
			size: "small",
			variant: "ghost",
			onClick: onToggleNotifications
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(EyeCloseIcon, null), "Hide notifications") : /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			ariaLabel: false,
			size: "small",
			variant: "ghost",
			onClick: onToggleNotifications
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(EyeIcon, null), "Show notifications"));
	};
	Iframe = styled.iframe({
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		border: 0,
		margin: 0,
		padding: 0,
		width: "100%",
		height: "calc(100% - 40px)",
		background: "white"
	}, ({ isLoaded }) => ({ visibility: isLoaded ? "visible" : "hidden" }));
	AlertIcon = styled(((props) => /* @__PURE__ */ _storybook_global_react_default.createElement(AlertIcon$1, props)))(({ theme }) => ({
		color: theme.textMutedColor,
		width: 32,
		height: 32,
		margin: "0 auto"
	}));
	WhatsNewLoader = () => /* @__PURE__ */ _storybook_global_react_default.createElement(Centered, null, /* @__PURE__ */ _storybook_global_react_default.createElement(LoaderWrapper, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Loader, null)), /* @__PURE__ */ _storybook_global_react_default.createElement(Message, null, "Loading..."));
	MaxWaitTimeMessaging = () => /* @__PURE__ */ _storybook_global_react_default.createElement(Centered, null, /* @__PURE__ */ _storybook_global_react_default.createElement(AlertIcon, null), /* @__PURE__ */ _storybook_global_react_default.createElement(Message, null, "The page couldn't be loaded. Check your internet connection and try again."));
	PureWhatsNewScreen = ({ didHitMaxWaitTime, isLoaded, onLoad, url, copyContent, onToggleNotifications, isNotificationsEnabled }) => /* @__PURE__ */ _storybook_global_react_default.createElement(Fragment, null, !isLoaded && !didHitMaxWaitTime && /* @__PURE__ */ _storybook_global_react_default.createElement(WhatsNewLoader, null), didHitMaxWaitTime ? /* @__PURE__ */ _storybook_global_react_default.createElement(MaxWaitTimeMessaging, null) : /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Iframe, {
		isLoaded,
		onLoad,
		src: url,
		title: `What's new?`
	}), /* @__PURE__ */ _storybook_global_react_default.createElement(WhatsNewFooter, {
		isNotificationsEnabled,
		onToggleNotifications,
		copyContent
	})));
	MAX_WAIT_TIME = 1e4;
	WhatsNewScreen = () => {
		const api = useStorybookApi();
		const { whatsNewData } = useStorybookState();
		const [isLoaded, setLoaded] = useState(false);
		const [didHitMaxWaitTime, setDidHitMaxWaitTime] = useState(false);
		useEffect(() => {
			const timer = setTimeout(() => !isLoaded && setDidHitMaxWaitTime(true), MAX_WAIT_TIME);
			return () => clearTimeout(timer);
		}, [isLoaded]);
		if (whatsNewData?.status !== "SUCCESS") return null;
		const isNotificationsEnabled = !whatsNewData.disableWhatsNewNotifications;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(PureWhatsNewScreen, {
			didHitMaxWaitTime,
			isLoaded,
			onLoad: () => {
				api.whatsNewHasBeenRead();
				setLoaded(true);
			},
			url: whatsNewData.url,
			isNotificationsEnabled,
			copyContent: whatsNewData.blogUrl ?? whatsNewData.url,
			onToggleNotifications: () => {
				if (isNotificationsEnabled) {
					if (scope.confirm("All update notifications will no longer be shown. Are you sure?")) api.toggleWhatsNewNotifications();
				} else api.toggleWhatsNewNotifications();
			}
		});
	};
}));
//#endregion
//#region src/manager/settings/whats_new_page.tsx
var WhatsNewPage;
var init_whats_new_page = __esmMin((() => {
	init__storybook_global_react();
	init_whats_new();
	WhatsNewPage = () => {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(WhatsNewScreen, null);
	};
}));
//#endregion
//#region src/manager/settings/index.tsx
var document$1, Content, SidebarToggle, RouteWrapper, Pages, SettingsPages, settingsPageAddon;
var init_settings = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_router();
	init_types();
	init_dist();
	init_icons();
	init_manager_api();
	init_emotion();
	init_menu();
	init_keybinding();
	init_AboutPage();
	init_GuidePage();
	init_ShortcutsPage();
	init_whats_new_page();
	({document: document$1} = scope);
	Content = styled(ScrollArea)(({ theme }) => ({ background: theme.background.content }));
	SidebarToggle = styled.div({ "&&:has(*)": {
		order: 0,
		display: "flex",
		alignItems: "center",
		marginLeft: 10,
		marginRight: 6,
		gap: 6
	} });
	RouteWrapper = ({ children, path }) => {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Content, {
			vertical: true,
			horizontal: false
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(Route, { path }, children));
	};
	Pages = ({ changeTab, onClose, enableShortcuts = true, enableWhatsNew }) => {
		_storybook_global_react_default.useEffect(() => {
			const handleEscape = (event) => {
				if (!enableShortcuts || event.repeat) return;
				if (matchesModifiers(false, event) && matchesKeyCode("Escape", event)) {
					event.preventDefault();
					onClose();
				}
			};
			document$1.addEventListener("keydown", handleEscape);
			return () => document$1.removeEventListener("keydown", handleEscape);
		}, [enableShortcuts, onClose]);
		const api = useStorybookApi();
		const toolsExtra = Object.values(api.getElements(Addon_TypesEnum.TOOLEXTRA));
		const tabs = useMemo(() => {
			const tabsToInclude = [{
				id: "about",
				title: "About",
				children: /* @__PURE__ */ _storybook_global_react_default.createElement(RouteWrapper, { path: "about" }, /* @__PURE__ */ _storybook_global_react_default.createElement(AboutPage, { key: "about" }))
			}];
			if (scope.CONFIG_TYPE === "DEVELOPMENT" && scope.FEATURES?.menuOnboardingChecklist !== false) tabsToInclude.push({
				id: "guide",
				title: "Guide",
				children: /* @__PURE__ */ _storybook_global_react_default.createElement(RouteWrapper, { path: "guide" }, /* @__PURE__ */ _storybook_global_react_default.createElement(GuidePage, { key: "guide" }))
			});
			tabsToInclude.push({
				id: "shortcuts",
				title: "Keyboard shortcuts",
				children: /* @__PURE__ */ _storybook_global_react_default.createElement(RouteWrapper, { path: "shortcuts" }, /* @__PURE__ */ _storybook_global_react_default.createElement(ShortcutsPage, { key: "shortcuts" }))
			});
			if (enableWhatsNew) tabsToInclude.push({
				id: "whats-new",
				title: "What's new?",
				children: /* @__PURE__ */ _storybook_global_react_default.createElement(RouteWrapper, { path: "whats-new" }, /* @__PURE__ */ _storybook_global_react_default.createElement(WhatsNewPage, { key: "whats-new" }))
			});
			return tabsToInclude;
		}, [enableWhatsNew]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Location, null, ({ path }) => {
			const selected = tabs.find((tab) => path.includes(`settings/${tab.id}`))?.id;
			return /* @__PURE__ */ _storybook_global_react_default.createElement(TabsView, {
				tabs,
				tools: /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarToggle, null, menuTool.render({})), toolsExtra.map((item) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, { key: item.id }, item.render({}))), /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
					padding: "small",
					variant: "ghost",
					onClick: (e) => {
						e.preventDefault();
						return onClose();
					},
					ariaLabel: "Close settings page"
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(CloseIcon, null))),
				selected,
				onSelectionChange: changeTab
			});
		});
	};
	SettingsPages = () => {
		const api = useStorybookApi();
		const state = useStorybookState();
		const changeTab = (tab) => api.changeSettingsTab(tab);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Pages, {
			enableWhatsNew: state.whatsNewData?.status === "SUCCESS",
			enableShortcuts: state.ui.enableShortcuts,
			changeTab,
			onClose: api.closeSettings
		});
	};
	settingsPageAddon = {
		id: "settings",
		url: "/settings/",
		title: "Settings",
		type: types.experimental_PAGE,
		render: () => /* @__PURE__ */ _storybook_global_react_default.createElement(Route, {
			path: "/settings/",
			startsWith: true
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(SettingsPages, null))
	};
}));
//#endregion
//#region src/manager/runtime.tsx
var WS_DISCONNECTED_NOTIFICATION_ID, channel, ReactProvider, document, rootEl;
//#endregion
__esmMin((() => {
	init__storybook_global_react();
	init_channels();
	init_core_events();
	init_dist();
	init_icons();
	init_manager_api();
	init_emotion();
	init_ToolbarManager();
	init_constants();
	init_manager();
	init_provider();
	WS_DISCONNECTED_NOTIFICATION_ID = "CORE/WS_DISCONNECTED";
	addons.register(TOOLBAR_ID, () => addons.add(TOOLBAR_ID, {
		title: TOOLBAR_ID,
		type: types.TOOL,
		render: () => /* @__PURE__ */ _storybook_global_react_default.createElement(ToolbarManager, null)
	}));
	channel = createBrowserChannel({ page: "manager" });
	addons.setChannel(channel);
	channel.emit(CHANNEL_CREATED);
	ReactProvider = class extends Provider {
		constructor(..._args) {
			super(..._args);
			this.addons = addons;
			this.channel = channel;
			this.wsDisconnected = false;
		}
		getElements(type) {
			return this.addons.getElements(type);
		}
		getConfig() {
			return this.addons.getConfig();
		}
		handleAPI(api) {
			this.addons.loadAddons(api);
			this.channel.on(CHANNEL_WS_DISCONNECT, () => {
				this.wsDisconnected = true;
				api.addNotification({
					id: WS_DISCONNECTED_NOTIFICATION_ID,
					content: {
						headline: "Connection lost",
						subHeadline: "Please restart your Storybook server and reload the page"
					},
					icon: /* @__PURE__ */ _storybook_global_react_default.createElement(FailedIcon, { color: color.negative }),
					link: void 0
				});
			});
		}
	};
	({document} = scope);
	rootEl = document.getElementById("root");
	setTimeout(() => {
		renderStorybookUI(rootEl, new ReactProvider());
	}, 0);
}))();
export { searchItem as C, scrollIntoView as S, init_manager_stores as T, hoistSingleStoryComponents as _, init_keybinding as a, isBranch as b, getGroupDualStatus as c, getStatus as d, init_status as f, getStateType as g, getAncestorIds as h, init_provider as i, getGroupStatus as l, addStoryRows as m, settingsPageAddon as n, matchesKeyCode as o, shouldShowChangeStatus as p, Provider as r, matchesModifiers as s, init_settings as t, getMostCriticalStatusValue as u, indexToTree as v, storyRowId as w, isStoryRow as x, init_tree as y };
