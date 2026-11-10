import { a as __toESM, n as __esmMin } from "./runtime-XrdeG17s.js";
import { $ as ProgressSpinner, $n as StatusPassIcon, An as EllipsisIcon, Ar as init_core_events, At as styled, B as ActionList, Br as init__storybook_global_react, Bt as experimental_useStatusStore, Cn as CogIcon, Cr as STORIES_COLLAPSE_ALL, Ct as color, Dn as DeleteIcon, En as CopyIcon, Et as css, Fr as _storybook_global_react_default, Gr as useEffect, Gt as internal_checklistStore, H as Button, Hn as ListUnorderedIcon, Hr as memo, I as init_client_logger, In as FilterIcon, J as Form, Jr as useMemo, Kn as PlayAllHollowIcon, Kt as internal_fullTestProviderStore, L as logger, Lr as createContext, Mt as useTheme, Nn as EyeCloseIcon, Nt as withTheme, On as DocumentIcon, Ot as init_emotion, Pr as Fragment, Pt as Consumer, Q as PopoverProvider, Qr as useSyncExternalStore, Qt as shortcutToHumanString, R as once, Rn as GlobeIcon, Sn as CloseIcon, Sr as SIDEBAR_OPEN_CONTEXT_MENU, U as Card, Un as LockIcon, Ur as useCallback, Ut as init_manager_api, V as Badge, Vn as LightningIcon, Vt as experimental_useTestProviderStore, W as Collapsible$1, Wn as MarkupIcon, Wr as useContext, Wt as internal_UniversalStore, Xn as ShareAltIcon, Xr as useRef, Y as Link, Yn as SearchIcon, Yr as useReducer, Yt as internal_useUniversalStore, Zr as useState, _r as PRELOAD_ENTRIES, an as useStorybookApi, bn as CircleHollowIcon, bt as useTabsState, ct as StorybookLogo, d as init_types$1, dn as BookIcon, dt as TabPanel, fr as init_icons, hn as ChevronDownIcon, ht as TooltipNote, ir as TimeIcon, jn as ExpandAltIcon, kn as EditorIcon, kt as keyframes, ln as BatchAcceptIcon, lr as WandIcon, mn as CheckIcon, nr as SweepIcon, on as useStorybookState, or as TrashIcon, pt as ToggleButton, q as ErrorFormatter, qn as PlayHollowIcon, qr as useLayoutEffect, qt as internal_universalChecklistStore, rr as SyncIcon, rt as Spaced, s as Addon_TypesEnum, sn as AlertIcon, sr as UndoIcon, tt as Select, u as REVIEW_STATUS_TYPE_ID, un as BeakerIcon, ut as TabList, vt as init_components, wn as CollapseIcon$1, wr as STORIES_EXPAND_ALL, xn as CloseAltIcon, yn as ChevronSmallUpIcon, yr as PREVIEW_INITIALIZED, zr as forwardRef } from "./runtime-CCGFWiML.js";
import { M as init_dist, N as scope, f as init_function, h as debounce, m as throttle, n as Downshift, r as init_downshift_esm, t as require_fuse } from "./runtime-DqOdIqaJ.js";
import { M as useCopyButton, _ as init_status_store, a as getActiveFilterCount, c as USER_TAG_FILTER, d as init_checklistData, h as countStatusesByValue, j as init_useCopyButton, l as init_tags, o as init_story_index_filters, s as BUILT_IN_FILTERS, u as checklistData, v as statusValueDescription, y as statusValueShortName } from "./runtime-BORMtDTH.js";
import { t as require_store2 } from "./runtime-B9T0K19t.js";
import { c as $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec, i as $85410e0c3cc54f1d$export$c84671f46d6a1ca, j as useTransitionMap, k as init_esm, n as $eb6255cbf080eb7d$export$7e0eeb9da702a085, u as $af827553fd3cf456$export$c79fc6492f3af13d } from "./runtime-ByZHak7A.js";
import { a as curriedLighten$1, i as curriedDarken$1, o as curriedTransparentize$1, s as init_polished_esm } from "./runtime-CD3p6Bu2.js";
import { B as init_review_context, E as init_Shortcut, G as init_NotificationList, I as collectReviewStoryIds, J as useLayout, L as init_review_status, T as Shortcut, V as useReviewContext, W as NotificationList, a as TextFlip, c as init_Particles, l as Optional, o as init_TextFlip, q as init_LayoutProvider, s as Particles, u as init_Optional } from "./runtime-DQa1WfwG.js";
import { a as computeStatusFilterFn, d as isPagesViewMode, i as init_tags$1, l as focusableUIElements, o as init_statuses, r as computeTagsFilterFn, u as init_layout } from "./runtime-Bis0saf2.js";
import { f as init_useLandmark, p as useLandmark, v as MEDIA_DESKTOP_BREAKPOINT, y as init_constants } from "./runtime-CxQnUpQE.js";
import { a as init_Tree$1, c as $89d060d8eb451127$export$7fbedc92909ed28e, f as init_Collection, n as init_Virtualizer, o as $89d060d8eb451127$export$4b687e3f663d618c, r as $143fb904d86051ce$export$89be5a243e59c4b2, s as $89d060d8eb451127$export$53d36ab85dc89436, t as init_Button, u as $7705c033048f6da7$export$353f5b6fc5456de1 } from "./runtime-DcQnpubp.js";
import { C as $42ceafc619f9c3ba$export$fb8073518f34e6ec } from "./runtime-CR3830HU.js";
import { C as searchItem, S as scrollIntoView, T as init_manager_stores, _ as hoistSingleStoryComponents, a as init_keybinding, b as isBranch, c as getGroupDualStatus, d as getStatus, f as init_status, g as getStateType, h as getAncestorIds$1, l as getGroupStatus, m as addStoryRows, o as matchesKeyCode, p as shouldShowChangeStatus, s as matchesModifiers, u as getMostCriticalStatusValue, v as indexToTree, w as storyRowId, x as isStoryRow, y as init_tree } from "../runtime.js";
//#region src/manager/components/upgrade/UpgradeBlock.tsx
var UpgradeSnippet, UpgradeBlock, Container$2, Code;
var init_UpgradeBlock = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_icons();
	init_manager_api();
	init_emotion();
	init_useCopyButton();
	init_constants();
	UpgradeSnippet = ({ command }) => {
		const { children, buttonProps } = useCopyButton({
			children: /* @__PURE__ */ _storybook_global_react_default.createElement(CopyIcon, null),
			childrenOnCopy: /* @__PURE__ */ _storybook_global_react_default.createElement(CheckIcon, null),
			content: command,
			ariaLabel: "Copy command",
			ariaLabelOnCopy: "Command copied"
		});
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Code, null, command, /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			variant: "ghost",
			padding: "small",
			size: "small",
			...buttonProps
		}, children));
	};
	UpgradeBlock = ({ onNavigateToWhatsNew }) => {
		const api = useStorybookApi();
		const tabsState = useTabsState({
			defaultSelected: "npm",
			tabs: [
				{
					id: "npm",
					title: "npm",
					children: /* @__PURE__ */ _storybook_global_react_default.createElement(UpgradeSnippet, { command: "npx storybook@latest upgrade" })
				},
				{
					id: "yarn",
					title: "yarn",
					children: /* @__PURE__ */ _storybook_global_react_default.createElement(UpgradeSnippet, { command: "yarn dlx storybook@latest upgrade" })
				},
				{
					id: "pnpm",
					title: "pnpm",
					children: /* @__PURE__ */ _storybook_global_react_default.createElement(UpgradeSnippet, { command: "pnpm --allow-build=esbuild dlx storybook@latest upgrade" })
				}
			]
		});
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container$2, null, /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "You are on Storybook ", api.getCurrentVersion().version), /* @__PURE__ */ _storybook_global_react_default.createElement("p", null, "Run the following script to check for updates and upgrade to the latest version."), /* @__PURE__ */ _storybook_global_react_default.createElement(TabList, { state: tabsState }), /* @__PURE__ */ _storybook_global_react_default.createElement(TabPanel, {
			state: tabsState,
			hasScrollbar: false
		}), onNavigateToWhatsNew && /* @__PURE__ */ _storybook_global_react_default.createElement(Link, { onClick: onNavigateToWhatsNew }, "See what's new in Storybook"));
	};
	Container$2 = styled.div(({ theme }) => ({
		border: "1px solid",
		borderRadius: 5,
		padding: 20,
		marginTop: 0,
		borderColor: theme.appBorderColor,
		fontSize: theme.typography.size.s2,
		width: "100%",
		[MEDIA_DESKTOP_BREAKPOINT]: { maxWidth: 400 }
	}));
	Code = styled.pre(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 8,
		background: theme.base === "light" ? "rgba(0, 0, 0, 0.05)" : theme.appBorderColor,
		fontSize: theme.typography.size.s2 - 1,
		margin: "4px 0 16px"
	}));
}));
//#endregion
//#region src/manager/components/sidebar/useChecklist.ts
var subscriptions, useStoryIndex, checkAvailable, checkSkipped, getAncestorIds, checkLockedBy, useChecklist;
var init_useChecklist = __esmMin((() => {
	init__storybook_global_react();
	init_core_events();
	init_manager_stores();
	init_function();
	init_manager_api();
	init_checklistData();
	subscriptions = /* @__PURE__ */ new Map();
	useStoryIndex = () => {
		const state = useStorybookState();
		const [index, setIndex] = useState(() => state.index);
		const updateIndex = useMemo(() => throttle(setIndex, 500), []);
		useEffect(() => updateIndex(state.index), [state.index, updateIndex]);
		useEffect(() => () => updateIndex.cancel?.(), [updateIndex]);
		return index;
	};
	checkAvailable = (item, itemsById, context) => {
		if (item.available && !item.available(context)) return false;
		for (const afterId of item.after ?? []) if (itemsById[afterId] && !checkAvailable(itemsById[afterId], itemsById, context)) return false;
		return true;
	};
	checkSkipped = (item, itemsById, state) => {
		if (state[item.id].status === "skipped") return true;
		for (const afterId of item.after ?? []) if (itemsById[afterId] && checkSkipped(itemsById[afterId], itemsById, state)) return true;
		return false;
	};
	getAncestorIds = (item, itemsById) => {
		if (!item.after || item.after.length === 0) return [];
		return item.after.flatMap((afterId) => {
			const afterItem = itemsById[afterId];
			return afterItem ? [...getAncestorIds(afterItem, itemsById), afterId] : [];
		});
	};
	checkLockedBy = (item, itemsById, state) => getAncestorIds(item, itemsById).find((id) => state[id].status !== "accepted" && state[id].status !== "done");
	useChecklist = () => {
		const api = useStorybookApi();
		const index = useStoryIndex();
		const [checklistState] = internal_useUniversalStore(internal_universalChecklistStore);
		const { loaded, items, widget } = checklistState;
		const { status } = internal_universalChecklistStore;
		const [initialized, setInitialized] = useState(false);
		const [ready, setReady] = useState(false);
		const debounceReady = useMemo(() => debounce(() => setReady(true), 500), []);
		const itemsById = useMemo(() => {
			return Object.fromEntries(checklistData.sections.flatMap(({ items, id: sectionId, title: sectionTitle }, sectionIndex) => items.map(({ id, ...item }, itemIndex) => {
				return [id, {
					id,
					itemIndex,
					sectionId,
					sectionIndex,
					sectionTitle,
					...item
				}];
			})));
		}, []);
		const allItems = useMemo(() => {
			return Object.values(itemsById).map((item) => {
				const { status, mutedAt } = items[item.id];
				const isOpen = status === "open";
				const isAccepted = status === "accepted";
				const isDone = status === "done";
				const isCompleted = isAccepted || isDone;
				const isSkipped = !isCompleted && checkSkipped(item, itemsById, items);
				const isMuted = !!mutedAt || !!widget.disable;
				const isAvailable = isCompleted ? item.afterCompletion !== "unavailable" : checkAvailable(item, itemsById, {
					api,
					index,
					item,
					storeState: checklistState
				});
				const isLockedBy = checkLockedBy(item, itemsById, items);
				const isImmutable = isCompleted && item.afterCompletion === "immutable";
				const isReady = isOpen && isAvailable && !isMuted && !isLockedBy;
				return {
					...item,
					isAvailable,
					isOpen,
					isLockedBy,
					isImmutable,
					isReady,
					isCompleted,
					isAccepted,
					isDone,
					isSkipped,
					isMuted
				};
			});
		}, [
			itemsById,
			items,
			widget,
			api,
			index,
			checklistState
		]);
		const itemCollections = useMemo(() => {
			const availableItems = allItems.filter((item) => item.isAvailable);
			const openItems = availableItems.filter((item) => item.isOpen);
			const readyItems = openItems.filter((item) => item.isReady);
			return {
				availableItems,
				openItems,
				readyItems,
				nextItems: Object.values(readyItems.reduce((acc, item) => {
					acc[item.sectionId] ??= [];
					acc[item.sectionId].push({
						...item,
						itemIndex: acc[item.sectionId].length
					});
					return acc;
				}, {})).flat().sort((a, b) => a.itemIndex - b.itemIndex).slice(0, 3).sort((a, b) => a.sectionIndex - b.sectionIndex),
				progress: availableItems.length ? Math.round((availableItems.length - openItems.length) / availableItems.length * 100) : 100
			};
		}, [allItems]);
		useEffect(() => {
			if (!loaded || status !== internal_UniversalStore.Status.READY) return;
			for (const item of allItems) {
				if (!item.subscribe) continue;
				const subscribed = subscriptions.has(item.id);
				if (item.isOpen && item.isAvailable && !subscribed) subscriptions.set(item.id, item.subscribe({
					api,
					item,
					accept: () => internal_checklistStore.accept(item.id),
					done: () => internal_checklistStore.done(item.id),
					skip: () => internal_checklistStore.skip(item.id)
				}));
				else if (subscribed && !(item.isOpen && item.isAvailable)) {
					const unsubscribe = subscriptions.get(item.id);
					subscriptions.delete(item.id);
					if (typeof unsubscribe === "function") unsubscribe();
				}
			}
		}, [
			api,
			loaded,
			status,
			allItems
		]);
		useEffect(() => {
			const initialize = () => setInitialized(true);
			const timeout = setTimeout(initialize, 1e3);
			api.once(PREVIEW_INITIALIZED, initialize);
			return () => {
				clearTimeout(timeout);
				api.off(PREVIEW_INITIALIZED, initialize);
			};
		}, [api]);
		useEffect(() => {
			if (initialized && items && status === internal_UniversalStore.Status.READY) debounceReady();
		}, [
			initialized,
			items,
			status,
			debounceReady
		]);
		return {
			ready,
			allItems,
			...itemCollections,
			...internal_checklistStore,
			...checklistState
		};
	};
}));
//#endregion
//#region src/manager/components/sidebar/ChecklistWidget.tsx
var fadeScaleIn, expand, useTransitionArray, CollapsibleWithMargin, HoverCard$1, CollapseToggle$1, ProgressCircle, Checked, ItemLabel, title, OpenGuideButton, CopyButton, ChecklistWidget;
var init_ChecklistWidget = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_icons();
	init_esm();
	init_manager_api();
	init_emotion();
	init_useCopyButton();
	init_Optional();
	init_Particles();
	init_TextFlip();
	init_useChecklist();
	fadeScaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
	expand = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`;
	useTransitionArray = (array, subset, options) => {
		const keyFnRef = useRef(options.keyFn);
		const { setItem, toggle, stateMap } = useTransitionMap({
			allowMultiple: true,
			mountOnEnter: true,
			unmountOnExit: true,
			...options
		});
		const knownKeys = useRef(/* @__PURE__ */ new Set());
		useEffect(() => {
			const keyFn = keyFnRef.current;
			array.forEach((task) => {
				const key = keyFn(task);
				if (!knownKeys.current.has(key)) {
					knownKeys.current.add(key);
					setItem(key);
				}
			});
		}, [array, setItem]);
		useEffect(() => {
			const keyFn = keyFnRef.current;
			array.forEach((task) => toggle(keyFn(task), subset.map(keyFn).includes(keyFn(task))));
		}, [
			array,
			subset,
			toggle
		]);
		return Array.from(stateMap).map(([key, value]) => [array.find((item) => keyFnRef.current(item) === key), value]);
	};
	CollapsibleWithMargin = styled(Collapsible$1)(({ collapsed }) => ({ marginTop: collapsed ? 0 : 16 }));
	HoverCard$1 = styled(Card)({ "&:hover #checklist-module-collapse-toggle": { opacity: 1 } });
	CollapseToggle$1 = styled(ActionList.Button)({
		opacity: 0,
		transition: "opacity var(--transition-duration, 0.2s)",
		"&:focus, &:hover": { opacity: 1 }
	});
	ProgressCircle = styled(ProgressSpinner)(({ theme }) => ({ color: theme.color.secondary }));
	Checked = styled(StatusPassIcon)(({ theme }) => ({
		padding: 1,
		borderRadius: "50%",
		background: theme.color.positive,
		color: theme.background.content,
		animation: `${fadeScaleIn} 500ms forwards`
	}));
	ItemLabel = styled.span(({ theme, isCompleted, isSkipped }) => ({
		position: "relative",
		margin: "0 -2px",
		padding: "0 2px",
		color: isSkipped ? theme.color.mediumdark : isCompleted ? theme.base === "dark" ? theme.color.positive : theme.color.positiveText : theme.color.defaultText,
		transition: "color 500ms"
	}), ({ theme, isSkipped }) => isSkipped && {
		alignSelf: "flex-start",
		"&:after": {
			content: "\"\"",
			position: "absolute",
			top: "50%",
			left: 0,
			width: "100%",
			height: 1,
			background: theme.color.mediumdark,
			animation: `${expand} 500ms forwards`,
			transformOrigin: "left"
		}
	});
	title = (progress) => {
		switch (true) {
			case progress < 50: return "Get started";
			case progress < 75: return "Level up";
			default: return "Become an expert";
		}
	};
	OpenGuideButton = ({ children, afterClick }) => {
		const api = useStorybookApi();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
			ariaLabel: "Open onboarding guide",
			onClick: (e) => {
				e.stopPropagation();
				api.navigate("/settings/guide");
				afterClick?.();
			}
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ListUnorderedIcon, null)), children);
	};
	CopyButton = ({ label, copyContent, onClick, ...props }) => {
		const { children: copyChildren, buttonProps: copyButtonProps } = useCopyButton({
			children: label,
			childrenOnCopy: /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(CheckIcon, null), " Copied!"),
			onCopy: onClick,
			content: copyContent
		});
		return /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
			...props,
			...copyButtonProps
		}, copyChildren);
	};
	ChecklistWidget = () => {
		const api = useStorybookApi();
		const { loaded, ready, allItems, nextItems, progress, accept, mute, items } = useChecklist();
		const [renderItems, setRenderItems] = useState(nextItems);
		const [animated, setAnimated] = useState(false);
		useEffect(() => {
			if (ready) {
				const timeout = setTimeout(setAnimated, 500, true);
				return () => clearTimeout(timeout);
			}
		}, [ready]);
		useEffect(() => {
			if (!animated) {
				setRenderItems(nextItems);
				return;
			}
			setRenderItems((current) => {
				let animateOut = false;
				const prevItems = current.map((item) => {
					const { status } = items[item.id];
					const isAccepted = status === "accepted";
					const isDone = status === "done";
					const isSkipped = status === "skipped";
					animateOut = animateOut || isAccepted || isDone || isSkipped;
					return {
						...item,
						isCompleted: isAccepted || isDone,
						isAccepted,
						isDone,
						isSkipped
					};
				});
				return animateOut ? prevItems : nextItems;
			});
			const timeout = setTimeout(setRenderItems, 2e3, nextItems);
			return () => clearTimeout(timeout);
		}, [
			animated,
			nextItems,
			items
		]);
		const hasItems = renderItems.length > 0;
		const isShown = hasItems && loaded;
		const transitionItems = useTransitionArray(allItems, renderItems, {
			keyFn: (item) => item.id,
			timeout: animated ? 300 : 0
		});
		if (!api.getIsNavShown()) return null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(CollapsibleWithMargin, { collapsed: !isShown }, /* @__PURE__ */ _storybook_global_react_default.createElement(HoverCard$1, {
			id: "storybook-checklist-widget",
			outlineAnimation: "rainbow",
			outlineAnimationPaused: !animated || !isShown
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(Collapsible$1, {
			storageKey: "checklist-widget",
			initialCollapsed: !hasItems,
			disabled: !hasItems,
			summary: ({ isCollapsed, toggleCollapsed, toggleProps }) => /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, {
				as: "div",
				onClick: toggleCollapsed
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, { as: "div" }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, {
				as: "div",
				style: { flexShrink: 1 }
			}, loaded && /* @__PURE__ */ _storybook_global_react_default.createElement(Optional, {
				content: /* @__PURE__ */ _storybook_global_react_default.createElement(OpenGuideButton, null, /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, title(progress))),
				fallback: /* @__PURE__ */ _storybook_global_react_default.createElement(OpenGuideButton, null)
			})), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, { as: "div" }, /* @__PURE__ */ _storybook_global_react_default.createElement(CollapseToggle$1, {
				...toggleProps,
				id: "checklist-module-collapse-toggle",
				ariaLabel: `${isCollapsed ? "Expand" : "Collapse"} onboarding guide`
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ChevronSmallUpIcon, { style: {
				transform: isCollapsed ? "rotate(180deg)" : "none",
				transition: "transform 250ms",
				willChange: "auto"
			} })), loaded && /* @__PURE__ */ _storybook_global_react_default.createElement(PopoverProvider, {
				ariaLabel: "Onboarding guide menu",
				padding: 0,
				popover: ({ onHide }) => /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, null, /* @__PURE__ */ _storybook_global_react_default.createElement(OpenGuideButton, { afterClick: onHide }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, "Open full guide"))), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
					ariaLabel: false,
					onClick: (e) => {
						e.stopPropagation();
						mute(allItems.map(({ id }) => id));
						onHide();
					}
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(EyeCloseIcon, null)), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, "Remove from sidebar"))))
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
				ariaLabel: `${progress}% completed`,
				onClick: (e) => e.stopPropagation()
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ProgressCircle, {
				percentage: progress,
				running: false,
				size: 16,
				width: 1.5
			}), /* @__PURE__ */ _storybook_global_react_default.createElement(TextFlip, {
				text: `${progress}%`,
				placeholder: "00%"
			}))))))
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, null, transitionItems.map(([item, { status, isMounted }]) => isMounted && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.HoverItem, {
			key: item.id,
			targetId: item.id,
			transitionStatus: status
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
			ariaLabel: `Open onboarding guide for ${item.label}`,
			onClick: () => api.navigate(`/settings/guide#${item.id}`)
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, item.isCompleted && animated ? /* @__PURE__ */ _storybook_global_react_default.createElement(Particles, {
			anchor: Checked,
			key: item.id
		}) : item.icon ? /* @__PURE__ */ _storybook_global_react_default.createElement(item.icon, null) : /* @__PURE__ */ _storybook_global_react_default.createElement(CircleHollowIcon, null)), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ItemLabel, {
			isCompleted: item.isCompleted,
			isSkipped: item.isSkipped
		}, item.label))), item.action && (item.action.copyContent ? /* @__PURE__ */ _storybook_global_react_default.createElement(CopyButton, {
			"data-target-id": item.id,
			label: item.action.label,
			copyContent: item.action.copyContent,
			onClick: (e) => {
				e.stopPropagation();
				item.action?.onClick({
					api,
					accept: () => accept(item.id)
				});
			}
		}) : /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
			"data-target-id": item.id,
			ariaLabel: false,
			onClick: (e) => {
				e.stopPropagation();
				item.action?.onClick({
					api,
					accept: () => accept(item.id)
				});
			}
		}, item.action.label))))))));
	};
}));
//#endregion
//#region src/manager/components/sidebar/Loader.tsx
var LOADER_SEQUENCE, Loadingitem, Contained, Loader;
var init_Loader = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	LOADER_SEQUENCE = [
		0,
		0,
		1,
		1,
		2,
		3,
		3,
		3,
		1,
		1,
		1,
		2,
		2,
		2,
		3
	];
	Loadingitem = styled.div({
		cursor: "progress",
		fontSize: 13,
		height: "16px",
		marginTop: 4,
		marginBottom: 4,
		alignItems: "center",
		overflow: "hidden"
	}, ({ depth = 0 }) => ({
		marginLeft: depth * 15,
		maxWidth: 85 - depth * 5
	}), ({ theme }) => theme.animation.inlineGlow, ({ theme }) => ({ background: theme.appBorderColor }));
	Contained = styled.div({
		display: "flex",
		flexDirection: "column",
		paddingLeft: 20,
		paddingRight: 20
	});
	Loader = ({ size }) => {
		const repeats = Math.ceil(size / LOADER_SEQUENCE.length);
		const sequence = Array.from(Array(repeats)).fill(LOADER_SEQUENCE).flat().slice(0, size);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Fragment, null, sequence.map((depth, index) => /* @__PURE__ */ _storybook_global_react_default.createElement(Loadingitem, {
			depth,
			key: index
		})));
	};
}));
//#endregion
//#region src/manager/components/sidebar/NoResults.tsx
var NoResults;
var init_NoResults = __esmMin((() => {
	init_emotion();
	NoResults = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		textWrap: "balance",
		gap: 4,
		padding: "20px 0",
		lineHeight: `18px`,
		fontSize: `${theme.typography.size.s2}px`,
		color: theme.color.defaultText,
		small: {
			color: theme.textMutedColor,
			fontSize: `${theme.typography.size.s1}px`
		},
		button: {
			marginTop: 8,
			alignSelf: "center"
		}
	}));
}));
//#endregion
//#region src/manager/components/sidebar/RefBlocks.tsx
var globalWindow$1, TextStyle, Text, ErrorDisplay, AuthBlock, ErrorBlock, FlexSpaced, WideSpaced, EmptyBlock, LoaderBlock;
var init_RefBlocks = __esmMin((() => {
	init__storybook_global_react();
	init_client_logger();
	init_components();
	init_dist();
	init_icons();
	init_manager_api();
	init_emotion();
	init_LayoutProvider();
	init_Loader();
	init_NoResults();
	({window: globalWindow$1} = scope);
	TextStyle = styled.div(({ theme }) => ({
		fontSize: theme.typography.size.s2,
		lineHeight: "20px",
		margin: 0
	}));
	Text = styled.div(({ theme }) => ({
		fontSize: theme.typography.size.s2,
		lineHeight: "20px",
		margin: 0,
		code: { fontSize: theme.typography.size.s1 },
		ul: {
			paddingLeft: 20,
			marginTop: 8,
			marginBottom: 8
		}
	}));
	ErrorDisplay = styled.pre(({ theme }) => ({
		borderRadius: 8,
		maxWidth: 640,
		color: theme.color.dark
	}));
	AuthBlock = ({ loginUrl, id }) => {
		const [isAuthAttempted, setAuthAttempted] = useState(false);
		const refresh = useCallback(() => {
			globalWindow$1.document.location.reload();
		}, []);
		const open = useCallback((e) => {
			e.preventDefault();
			const childWindow = globalWindow$1.open(loginUrl, `storybook_auth_${id}`, "resizable,scrollbars");
			const timer = setInterval(() => {
				if (!childWindow) {
					logger.error("unable to access loginUrl window");
					clearInterval(timer);
				} else if (childWindow.closed) {
					clearInterval(timer);
					setAuthAttempted(true);
				}
			}, 1e3);
		}, []);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Contained, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Spaced, null, isAuthAttempted ? /* @__PURE__ */ _storybook_global_react_default.createElement(Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Text, null, "Authentication on ", /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, loginUrl), " concluded. Refresh the page to fetch this Storybook."), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			ariaLabel: false,
			size: "small",
			variant: "outline",
			onClick: refresh
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(SyncIcon, null), "Refresh now"))) : /* @__PURE__ */ _storybook_global_react_default.createElement(Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Text, null, "Sign in to browse this Storybook."), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			ariaLabel: false,
			size: "small",
			variant: "outline",
			onClick: open
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(LockIcon, null), "Sign in")))));
	};
	ErrorBlock = ({ error }) => {
		const { isMobile } = useLayout();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Contained, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Spaced, null, /* @__PURE__ */ _storybook_global_react_default.createElement(TextStyle, null, "Oh no! Something went wrong loading this Storybook.", /* @__PURE__ */ _storybook_global_react_default.createElement("br", null), /* @__PURE__ */ _storybook_global_react_default.createElement(PopoverProvider, {
			ariaLabel: "Error details",
			hasCloseButton: true,
			offset: isMobile ? 0 : 8,
			placement: isMobile ? "bottom-end" : "bottom-start",
			popover: /* @__PURE__ */ _storybook_global_react_default.createElement(ErrorDisplay, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ErrorFormatter, { error }))
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(Link, null, "View error ", /* @__PURE__ */ _storybook_global_react_default.createElement(ChevronDownIcon, null))), " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
			href: "https://storybook.js.org/docs?ref=ui",
			cancel: false,
			target: "_blank"
		}, "View docs"))));
	};
	FlexSpaced = styled(Spaced)({ display: "flex" });
	WideSpaced = styled(Spaced)({ flex: 1 });
	EmptyBlock = ({ isMain, hasEntries, activeFilterCount }) => {
		const api = useStorybookApi();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Contained, null, /* @__PURE__ */ _storybook_global_react_default.createElement(FlexSpaced, { col: 1 }, /* @__PURE__ */ _storybook_global_react_default.createElement(WideSpaced, null, hasEntries ? /* @__PURE__ */ _storybook_global_react_default.createElement(NoResults, null, /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "No stories found"), activeFilterCount > 0 ? /* @__PURE__ */ _storybook_global_react_default.createElement("small", null, "Your selected filters did not match any stories.") : /* @__PURE__ */ _storybook_global_react_default.createElement("small", null, "Try adding some stories!"), activeFilterCount > 0 ? /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			ariaLabel: false,
			size: "small",
			variant: "outline",
			onClick: async () => {
				await api.setAllTagFilters([], []);
				await api.resetStatusFilters();
			}
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(SweepIcon, null), "Clear filters") : null) : isMain ? /* @__PURE__ */ _storybook_global_react_default.createElement(Text, null, "Oh no! Your Storybook is empty. This can happen when:", /* @__PURE__ */ _storybook_global_react_default.createElement("ul", null, /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "Your", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
			href: "https://storybook.js.org/docs/api/main-config/main-config-stories?ref=ui",
			cancel: false,
			target: "_blank"
		}, "stories glob configuration"), " ", "does not match any files.", " "), /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, "You have", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link, {
			href: "https://storybook.js.org/docs/writing-stories?ref=ui",
			cancel: false,
			target: "_blank"
		}, "no stories defined"), " ", "in your story files.", " "))) : /* @__PURE__ */ _storybook_global_react_default.createElement(Text, null, "This composed Storybook is empty. Perhaps no stories match your selected filters."))));
	};
	LoaderBlock = ({ isMain }) => /* @__PURE__ */ _storybook_global_react_default.createElement(Contained, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Loader, { size: isMain ? 17 : 5 }));
}));
//#endregion
//#region src/manager/components/sidebar/RefIndicator.tsx
var document$3, globalWindow, IndicatorPlacement, IndicatorClickTarget, MessageTitle, StyledMessage, Message, MessageWrapper, SubtleSelect, RefIndicator, ReadyMessage, SourceCodeMessage, LoginRequiredMessage, ReadDocsMessage, ErrorOccurredMessage, LoadingMessage, PerformanceDegradedMessage;
var init_RefIndicator = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_dist();
	init_icons();
	init_manager_api();
	init_emotion();
	init_LayoutProvider();
	({document: document$3, window: globalWindow} = scope);
	IndicatorPlacement = styled.div(({ theme }) => ({
		height: 16,
		display: "flex",
		alignItems: "center",
		"& > * + *": { marginLeft: theme.layoutMargin }
	}));
	IndicatorClickTarget = styled(Button)(({ theme }) => ({
		color: theme.textMutedColor,
		svg: {
			height: 14,
			width: 14,
			padding: 2,
			transition: "all 150ms ease-out",
			color: "inherit"
		}
	}));
	MessageTitle = styled.span(({ theme }) => ({ fontWeight: theme.typography.weight.bold }));
	StyledMessage = styled.a(({ theme }) => ({
		textDecoration: "none",
		lineHeight: "16px",
		padding: 15,
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
		color: theme.color.defaultText,
		"&:not(:last-child)": { borderBottom: `1px solid ${theme.appBorderColor}` },
		"&:hover": {
			background: theme.background.hoverable,
			color: theme.color.defaultText
		},
		"&:link, &:active, &:focus": { color: theme.color.defaultText },
		"&:focus-visible": {
			background: theme.background.hoverable,
			borderRadius: 8,
			boxShadow: `inset 0 0 0 2px ${theme.color.secondary}`,
			outline: "none"
		},
		"& > *": { flex: 1 },
		"& > svg": {
			marginTop: 3,
			width: 16,
			height: 16,
			marginRight: 10,
			flex: "unset"
		}
	}));
	Message = ({ href, blank = true, children, onClick }) => {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(StyledMessage, {
			href,
			target: blank ? "_blank" : void 0,
			onClick
		}, children);
	};
	MessageWrapper = styled.div(({ isMobile }) => ({
		width: isMobile ? "calc(100vw - 20px)" : 280,
		boxSizing: "border-box",
		borderRadius: 8,
		overflow: "hidden"
	}), ({ theme }) => ({ color: theme.color.dark }));
	SubtleSelect = styled(Select)(({ theme }) => ({
		background: "transparent",
		color: theme.color.defaultText,
		fontSize: theme.typography.size.s1,
		fontWeight: theme.typography.weight.regular
	}));
	RefIndicator = _storybook_global_react_default.memo(forwardRef(({ state, ...ref }, forwardedRef) => {
		const api = useStorybookApi();
		const { isMobile } = useLayout();
		const list = useMemo(() => Object.values(ref.index || {}), [ref.index]);
		const componentCount = useMemo(() => list.filter((v) => v.type === "component").length, [list]);
		const leafCount = useMemo(() => list.filter((v) => v.type === "docs" || v.type === "story").length, [list]);
		const currentVersion = useMemo(() => {
			if (ref.versions) return Object.entries(ref.versions).find(([, v]) => v === ref.url)?.[0];
		}, [ref.versions, ref.url]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(IndicatorPlacement, { ref: forwardedRef }, /* @__PURE__ */ _storybook_global_react_default.createElement(PopoverProvider, {
			ariaLabel: "Composed Storybook status",
			placement: isMobile ? "bottom" : "bottom-start",
			padding: 0,
			popover: () => /* @__PURE__ */ _storybook_global_react_default.createElement(MessageWrapper, { isMobile }, /* @__PURE__ */ _storybook_global_react_default.createElement(Spaced, { row: 0 }, state === "loading" && /* @__PURE__ */ _storybook_global_react_default.createElement(LoadingMessage, { url: ref.url }), (state === "error" || state === "empty") && /* @__PURE__ */ _storybook_global_react_default.createElement(ErrorOccurredMessage, { url: ref.url }), state === "ready" && /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ReadyMessage, {
				url: ref.url,
				componentCount,
				leafCount
			}), ref.sourceUrl && /* @__PURE__ */ _storybook_global_react_default.createElement(SourceCodeMessage, { url: ref.sourceUrl })), state === "auth" && /* @__PURE__ */ _storybook_global_react_default.createElement(LoginRequiredMessage, ref), ref.type === "auto-inject" && state !== "error" && /* @__PURE__ */ _storybook_global_react_default.createElement(PerformanceDegradedMessage, null), state !== "loading" && /* @__PURE__ */ _storybook_global_react_default.createElement(ReadDocsMessage, null)))
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(IndicatorClickTarget, {
			variant: "ghost",
			padding: "small",
			size: "small",
			"data-action": "toggle-indicator",
			ariaLabel: "Extra actions"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(GlobeIcon, null))), ref.versions && Object.keys(ref.versions).length ? /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SubtleSelect, {
			padding: "small",
			size: "small",
			ariaLabel: "Version",
			tooltip: "Choose version",
			defaultOptions: currentVersion,
			onSelect: (item) => {
				const href = ref.versions?.[item];
				if (href) api.changeRefVersion(ref.id, href);
			},
			options: Object.entries(ref.versions).map(([id, href]) => ({
				value: id,
				title: id,
				href
			}))
		}, "version")) : null);
	}));
	ReadyMessage = ({ url, componentCount, leafCount }) => {
		const theme = useTheme();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Message, { href: url.replace(/\/?$/, "/index.html") }, /* @__PURE__ */ _storybook_global_react_default.createElement(GlobeIcon, { color: theme.color.secondary }), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, /* @__PURE__ */ _storybook_global_react_default.createElement(MessageTitle, null, "View external Storybook"), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, "Explore ", componentCount, " components and ", leafCount, " stories in a new browser tab.")));
	};
	SourceCodeMessage = ({ url }) => {
		const theme = useTheme();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Message, { href: url }, /* @__PURE__ */ _storybook_global_react_default.createElement(MarkupIcon, { color: theme.color.secondary }), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, /* @__PURE__ */ _storybook_global_react_default.createElement(MessageTitle, null, "View source code")));
	};
	LoginRequiredMessage = ({ loginUrl, id }) => {
		const theme = useTheme();
		const open = useCallback((e) => {
			e.preventDefault();
			const childWindow = globalWindow.open(loginUrl, `storybook_auth_${id}`, "resizable,scrollbars");
			const timer = setInterval(() => {
				if (!childWindow) clearInterval(timer);
				else if (childWindow.closed) {
					clearInterval(timer);
					document$3.location.reload();
				}
			}, 1e3);
		}, [id, loginUrl]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Message, {
			onClick: open,
			blank: false
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(LockIcon, { color: theme.color.gold }), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, /* @__PURE__ */ _storybook_global_react_default.createElement(MessageTitle, null, "Log in required"), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, "You need to authenticate to view this Storybook's components.")));
	};
	ReadDocsMessage = () => {
		const theme = useTheme();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Message, { href: "https://storybook.js.org/docs/sharing/storybook-composition?ref=ui" }, /* @__PURE__ */ _storybook_global_react_default.createElement(DocumentIcon, { color: theme.color.green }), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, /* @__PURE__ */ _storybook_global_react_default.createElement(MessageTitle, null, "Read Composition docs"), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, "Learn how to combine multiple Storybooks into one.")));
	};
	ErrorOccurredMessage = ({ url }) => {
		const theme = useTheme();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Message, { href: url.replace(/\/?$/, "/index.html") }, /* @__PURE__ */ _storybook_global_react_default.createElement(AlertIcon, { color: theme.color.negative }), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, /* @__PURE__ */ _storybook_global_react_default.createElement(MessageTitle, null, "Something went wrong"), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, "This external Storybook didn't load. Debug it in a new tab now.")));
	};
	LoadingMessage = ({ url }) => {
		const theme = useTheme();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Message, { href: url.replace(/\/?$/, "/index.html") }, /* @__PURE__ */ _storybook_global_react_default.createElement(TimeIcon, { color: theme.color.secondary }), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, /* @__PURE__ */ _storybook_global_react_default.createElement(MessageTitle, null, "Please wait"), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, "This Storybook is loading.")));
	};
	PerformanceDegradedMessage = () => {
		const theme = useTheme();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Message, { href: "https://storybook.js.org/docs/sharing/storybook-composition?ref=ui" }, /* @__PURE__ */ _storybook_global_react_default.createElement(LightningIcon, { color: theme.color.gold }), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, /* @__PURE__ */ _storybook_global_react_default.createElement(MessageTitle, null, "Reduce lag"), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, "Learn how to speed up Composition performance.")));
	};
}));
//#endregion
//#region src/manager/components/sidebar/IconSymbols.tsx
var Svg, GROUP_ID, COMPONENT_ID, DOCUMENT_ID, STORY_ID, TEST_ID, NEW_ID, MODIFIED_ID, AFFECTED_ID, REVIEWING_ID, IconSymbols, UseSymbol;
var init_IconSymbols = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	Svg = styled.svg`
  position: absolute;
  width: 0;
  height: 0;
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
`;
	GROUP_ID = "icon--group";
	COMPONENT_ID = "icon--component";
	DOCUMENT_ID = "icon--document";
	STORY_ID = "icon--story";
	TEST_ID = "icon--test";
	NEW_ID = "icon--change-new";
	MODIFIED_ID = "icon--change-modified";
	AFFECTED_ID = "icon--change-affected";
	REVIEWING_ID = "icon--reviewing";
	IconSymbols = () => {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Svg, { "data-chromatic": "ignore" }, /* @__PURE__ */ _storybook_global_react_default.createElement("symbol", { id: GROUP_ID }, /* @__PURE__ */ _storybook_global_react_default.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z",
			fill: "currentColor"
		})), /* @__PURE__ */ _storybook_global_react_default.createElement("symbol", { id: COMPONENT_ID }, /* @__PURE__ */ _storybook_global_react_default.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
			fill: "currentColor"
		})), /* @__PURE__ */ _storybook_global_react_default.createElement("symbol", { id: DOCUMENT_ID }, /* @__PURE__ */ _storybook_global_react_default.createElement("path", {
			d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
			fill: "currentColor"
		}), /* @__PURE__ */ _storybook_global_react_default.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
			fill: "currentColor"
		})), /* @__PURE__ */ _storybook_global_react_default.createElement("symbol", { id: STORY_ID }, /* @__PURE__ */ _storybook_global_react_default.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
			fill: "currentColor"
		})), /* @__PURE__ */ _storybook_global_react_default.createElement("symbol", { id: TEST_ID }, /* @__PURE__ */ _storybook_global_react_default.createElement("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M4.5 2h.75v3.866l-3.034 5.26A1.25 1.25 0 003.299 13H10.7a1.25 1.25 0 001.083-1.875L8.75 5.866V2h.75a.5.5 0 100-1h-5a.5.5 0 000 1zm1.75 4V2h1.5v4.134l.067.116L8.827 8H5.173l1.01-1.75.067-.116V6zM4.597 9l-1.515 2.625A.25.25 0 003.3 12H10.7a.25.25 0 00.217-.375L9.404 9H4.597z",
			fill: "currentColor"
		})), /* @__PURE__ */ _storybook_global_react_default.createElement("symbol", { id: NEW_ID }, /* @__PURE__ */ _storybook_global_react_default.createElement("rect", {
			x: "6",
			y: "3.5",
			width: "2",
			height: "7",
			rx: "1",
			fill: "currentColor"
		}), /* @__PURE__ */ _storybook_global_react_default.createElement("rect", {
			x: "3.5",
			y: "6",
			width: "7",
			height: "2",
			rx: "1",
			fill: "currentColor"
		})), /* @__PURE__ */ _storybook_global_react_default.createElement("symbol", { id: MODIFIED_ID }, /* @__PURE__ */ _storybook_global_react_default.createElement("circle", {
			cx: "7",
			cy: "7",
			r: "3",
			fill: "currentColor"
		})), /* @__PURE__ */ _storybook_global_react_default.createElement("symbol", { id: AFFECTED_ID }, /* @__PURE__ */ _storybook_global_react_default.createElement("circle", {
			cx: "7",
			cy: "7",
			r: "3",
			fill: "currentColor"
		})), /* @__PURE__ */ _storybook_global_react_default.createElement("symbol", { id: REVIEWING_ID }, /* @__PURE__ */ _storybook_global_react_default.createElement("path", {
			d: "M7.052 3.004c.01 0 .02 0 .03.002.004 0 .01.003.015.004a.493.493 0 01.051.013l.043.015a.497.497 0 01.089.049l.03.023c.015.012.029.023.042.036.012.012.023.026.035.04l.023.03c.01.015.019.03.027.047.008.014.016.028.022.043.006.014.01.028.015.043.005.017.01.034.013.051l.005.017.03.182A3.5 3.5 0 0010.4 6.476l.182.03c.005 0 .01.003.016.004a.494.494 0 01.051.013l.043.015a.503.503 0 01.089.049l.03.023c.015.012.029.023.042.036.012.012.023.026.035.04l.023.03c.01.015.019.03.027.047.008.014.016.028.022.043l.014.04.014.054.005.017c.002.01 0 .019.001.028.002.018.004.036.004.054 0 .018-.002.035-.004.053v.03l-.006.015a.479.479 0 01-.013.051l-.015.043a.507.507 0 01-.049.089l-.023.03-.035.042-.042.035-.03.023a.503.503 0 01-.046.027c-.014.008-.028.016-.043.022-.014.006-.028.01-.043.015a.491.491 0 01-.051.013l-.016.005-.182.03A3.5 3.5 0 007.522 10.4l-.03.182c0 .005-.004.01-.005.016a.491.491 0 01-.013.051l-.015.043a.503.503 0 01-.049.089l-.023.03-.035.042-.041.035-.03.023a.507.507 0 01-.047.027c-.014.008-.028.016-.043.022-.014.006-.028.01-.043.015a.479.479 0 01-.051.013l-.016.005c-.01.002-.02 0-.03.001-.017.002-.034.004-.052.004-.018 0-.036-.002-.054-.004h-.028c-.006-.002-.011-.005-.017-.006a.503.503 0 01-.051-.013l-.043-.015a.505.505 0 01-.089-.049l-.03-.023c-.015-.012-.029-.023-.041-.035-.013-.013-.024-.027-.036-.042l-.023-.03a.503.503 0 01-.027-.046c-.008-.014-.016-.028-.022-.043-.006-.014-.01-.028-.015-.043a.494.494 0 01-.013-.051l-.004-.016-.03-.182a3.5 3.5 0 00-2.877-2.877l-.182-.03c-.006 0-.011-.004-.017-.005a.493.493 0 01-.051-.013l-.043-.015a.492.492 0 01-.089-.049l-.03-.023c-.015-.012-.029-.023-.041-.035-.013-.013-.024-.027-.036-.041l-.023-.03a.497.497 0 01-.027-.047c-.008-.014-.016-.028-.022-.043-.006-.013-.01-.028-.015-.043a.493.493 0 01-.013-.051l-.004-.016c-.002-.01-.001-.02-.002-.03C3.002 7.035 3 7.018 3 7c0-.018.002-.036.004-.054 0-.009 0-.019.002-.028 0-.006.003-.011.004-.017l.015-.054.013-.04a.498.498 0 01.049-.089l.023-.03.026-.032.02-.02.03-.025.03-.023a.498.498 0 01.047-.027c.014-.008.028-.016.043-.022.014-.006.028-.01.043-.015A.493.493 0 013.4 6.51l.017-.004.182-.03a3.5 3.5 0 002.877-2.877l.03-.182c0-.006.003-.011.004-.017a.493.493 0 01.013-.051l.015-.043a.498.498 0 01.049-.089l.023-.03.026-.032.02-.02.03-.025.03-.023a.498.498 0 01.047-.027c.014-.008.028-.016.043-.022.014-.006.028-.01.043-.015A.493.493 0 016.9 3.01l.017-.004c.01-.002.019-.001.028-.002C6.963 3.002 6.981 3 7 3c.018 0 .035.002.053.004z",
			fill: "currentColor"
		})));
	};
	UseSymbol = ({ type }) => {
		if (type === "group") return /* @__PURE__ */ _storybook_global_react_default.createElement("use", { xlinkHref: `#${GROUP_ID}` });
		if (type === "component") return /* @__PURE__ */ _storybook_global_react_default.createElement("use", { xlinkHref: `#${COMPONENT_ID}` });
		if (type === "docs") return /* @__PURE__ */ _storybook_global_react_default.createElement("use", { xlinkHref: `#${DOCUMENT_ID}` });
		if (type === "story") return /* @__PURE__ */ _storybook_global_react_default.createElement("use", { xlinkHref: `#${STORY_ID}` });
		if (type === "test") return /* @__PURE__ */ _storybook_global_react_default.createElement("use", { xlinkHref: `#${TEST_ID}` });
		if (type === "change-new") return /* @__PURE__ */ _storybook_global_react_default.createElement("use", { xlinkHref: `#${NEW_ID}` });
		if (type === "reviewing") return /* @__PURE__ */ _storybook_global_react_default.createElement("use", { xlinkHref: `#${REVIEWING_ID}` });
		if (type === "change-modified") return /* @__PURE__ */ _storybook_global_react_default.createElement("use", { xlinkHref: `#${MODIFIED_ID}` });
		if (type === "change-affected") return /* @__PURE__ */ _storybook_global_react_default.createElement("use", { xlinkHref: `#${AFFECTED_ID}` });
		return null;
	};
}));
//#endregion
//#region src/manager/components/sidebar/ContextMenuButton.tsx
var StyledButton$1, ContextMenuButton;
var init_ContextMenuButton = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_polished_esm();
	init_emotion();
	StyledButton$1 = styled(Button)(({ theme }) => ({
		transition: "none",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		width: 28,
		height: 28,
		"&:hover": {
			color: theme.color.secondary,
			background: theme.base === "dark" ? curriedDarken$1(.3, theme.color.secondary) : curriedLighten$1(.4, theme.color.secondary)
		},
		"[data-selected=\"true\"] &": {
			background: theme.base === "dark" ? curriedDarken$1(.18, theme.color.secondary) : theme.color.secondary,
			boxShadow: `0 0 5px 5px ${theme.base === "dark" ? curriedDarken$1(.18, theme.color.secondary) : theme.color.secondary}`,
			"&:hover": { background: theme.base === "dark" ? curriedDarken$1(.1, theme.color.secondary) : theme.color.secondary }
		},
		"&:focus": {
			color: theme.color.secondary,
			borderColor: theme.color.secondary,
			outlineOffset: -2,
			"&:not(:focus-visible)": { borderColor: "transparent" }
		},
		"&:focus-visible": { outlineOffset: -2 }
	}));
	ContextMenuButton = forwardRef((props, ref) => {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(StyledButton$1, {
			variant: "ghost",
			padding: "small",
			...props,
			ref
		});
	});
	ContextMenuButton.displayName = "ContextMenuButton";
}));
//#endregion
//#region src/manager/components/sidebar/Menu.tsx
var buttonStyleAdditions, Container$1, SidebarButton, SidebarToggleButton, MenuButtonGroup, SidebarMenuList, SidebarMenu;
var init_Menu = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_icons();
	init_polished_esm();
	init_manager_api();
	init_emotion();
	init_LayoutProvider();
	buttonStyleAdditions = ({ highlighted, isMobile, theme }) => css`
  position: relative;
  overflow: visible;
  margin-top: 0;
  z-index: 1;
  ${isMobile && `
    width: 36px;
    height: 36px;
  `}
  ${highlighted && `
    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 6px;
      right: 6px;
      width: 5px;
      height: 5px;
      z-index: 2;
      border-radius: 50%;
      background: ${theme.background.app};
      border: 1px solid ${theme.background.app};
      box-shadow: 0 0 0 2px ${theme.background.app};
    }
    &:after {
      background: ${theme.color.positive};
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0 0 0 2px ${theme.background.app};
    }
    &:hover:after,
    &:focus-visible:after {
      box-shadow: 0 0 0 2px ${curriedTransparentize$1(.88, theme.color.secondary)};
    }
  `}
`;
	Container$1 = styled.div({ minWidth: 250 });
	SidebarButton = styled(Button)(buttonStyleAdditions);
	SidebarToggleButton = styled(ToggleButton)(buttonStyleAdditions);
	MenuButtonGroup = styled.div({
		display: "flex",
		gap: 6
	});
	SidebarMenuList = ({ menu, onHide }) => {
		const hasIcons = menu.some((links) => links.some((link) => !("content" in link) && (link.icon || link.input)));
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container$1, null, menu.filter((links) => links.length).flatMap((links) => /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, { key: links.map((link) => link.id).join("_") }, links.map((link) => {
			if ("content" in link) return /* @__PURE__ */ _storybook_global_react_default.createElement("li", { key: link.id }, link.content);
			const linkContent = /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, hasIcons && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, link.icon || link.input), (link.title || link.center) && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, link.title, link.center && /* @__PURE__ */ _storybook_global_react_default.createElement("small", null, link.center)), link.right);
			return /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, {
				key: link.id,
				active: link.active
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
				asChild: !!link.href,
				ariaLabel: false,
				id: `list-item-${link.id}`,
				disabled: link.disabled,
				autoFocus: link.autoFocus,
				onClick: (e) => {
					if (link.disabled) {
						e.preventDefault();
						return;
					}
					if (link.href && link.internal) e.preventDefault();
					link.onClick?.(e, {
						id: link.id,
						active: link.active,
						disabled: link.disabled,
						title: link.title,
						href: link.href
					});
					if (link.closeOnClick) onHide();
				}
			}, link.href ? /* @__PURE__ */ _storybook_global_react_default.createElement("a", {
				href: link.href,
				target: link.internal ? void 0 : "_blank",
				rel: link.internal ? "canonical" : "noreferrer"
			}, linkContent) : linkContent));
		}))));
	};
	SidebarMenu = ({ menu, isHighlighted, onClick }) => {
		const [isTooltipVisible, setIsTooltipVisible] = useState(false);
		const { isMobile } = useLayout();
		const api = useStorybookApi();
		if (isMobile) return /* @__PURE__ */ _storybook_global_react_default.createElement(MenuButtonGroup, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarButton, {
			padding: "small",
			variant: "ghost",
			ariaLabel: "About Storybook",
			highlighted: !!isHighlighted,
			onClick: (e) => {
				onClick?.(e);
				e.preventDefault();
			},
			isMobile: true,
			asChild: true
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("a", {
			href: "./?path=/settings/about",
			rel: "canonical"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(CogIcon, null))), /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarButton, {
			padding: "small",
			variant: "ghost",
			ariaLabel: "Close menu",
			highlighted: false,
			onClick: () => api.setMobileNavigation(false),
			isMobile: true
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(CloseIcon, null)));
		return /* @__PURE__ */ _storybook_global_react_default.createElement(PopoverProvider, {
			ariaLabel: "Storybook menu",
			placement: "bottom-start",
			padding: 0,
			popover: ({ onHide }) => /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarMenuList, {
				onHide,
				menu
			}),
			onVisibleChange: setIsTooltipVisible
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarToggleButton, {
			ariaLabel: "Settings",
			pressed: isTooltipVisible,
			highlighted: !!isHighlighted,
			padding: "small",
			variant: "ghost",
			size: "medium",
			isMobile: false
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(CogIcon, null)));
	};
}));
//#endregion
//#region src/manager/components/sidebar/TypeIcon.tsx
var TypeIcon, TypeIconWithSymbol;
var init_TypeIcon = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	init_IconSymbols();
	TypeIcon = styled.svg(({ theme, type }) => ({
		width: 14,
		height: 14,
		flex: "0 0 auto",
		color: (() => {
			if (type === "group") return theme.base === "dark" ? theme.color.primary : theme.color.ultraviolet;
			if (type === "component") return theme.color.secondary;
			if (type === "docs") return theme.base === "dark" ? theme.color.gold : "#ff8300";
			if (type === "story") return theme.color.seafoam;
			if (type === "test") return theme.color.green;
			return "currentColor";
		})()
	}));
	TypeIconWithSymbol = _storybook_global_react_default.memo(function TypeIconWithSymbol({ item }) {
		if (item.type === "root") return null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(TypeIcon, {
			viewBox: "0 0 14 14",
			width: "14",
			height: "14",
			type: item.subtype ?? item.type
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(UseSymbol, { type: item.subtype ?? item.type }));
	});
}));
//#endregion
//#region src/manager/components/sidebar/ContextMenu.tsx
function getGoToLabel(context) {
	if (context.type === "docs") return "Go to page";
	if (context.type === "story") {
		if (context.subtype === "test") return "Go to test";
		return "Go to story";
	}
	return null;
}
function hasContextMenu(context, hasProviderMenuEntries = false) {
	if (globalThis.CONFIG_TYPE !== "DEVELOPMENT") return false;
	if (context.refId || isStoryRow(context)) return false;
	return "importPath" in context && Boolean(context.importPath) || context.type === "story" || context.type === "docs" || context.type === "root" || hasProviderMenuEntries && (context.type === "group" || context.type === "component");
}
/**
* Whether a registered test provider contributes menu entries for this entry. Used to gate the
* ⋯ button on group and component rows (root rows always get the button for expand/collapse).
* Providers receive the full `API_HashEntry` context, including root entries.
*
* @param hasTestProviders Whether any test provider addon is registered at all.
*/
function hasProviderMenuEntriesFor(api, context, hasTestProviders) {
	if (!hasTestProviders || isStoryRow(context)) return false;
	return generateTestProviderLinks(api.getElements(Addon_TypesEnum.experimental_TEST_PROVIDER), context).length > 0;
}
function generateTestProviderLinks(registeredTestProviders, context) {
	return Object.entries(registeredTestProviders).map(([testProviderId, state]) => {
		if (!state) return null;
		const content = state.sidebarContextMenu?.({ context });
		if (!content) return null;
		return {
			id: testProviderId,
			content
		};
	}).filter(Boolean);
}
var ContextMenu, ContextMenuContent;
var init_ContextMenu = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_types$1();
	init_icons();
	init_manager_api();
	init_useCopyButton();
	init_tree();
	init_Shortcut();
	init_ContextMenuButton();
	init_Menu();
	init_TypeIcon();
	ContextMenu = memo(({ context, isOpen, setIsOpen, onSelectStoryId, api, openedBy, hasProviderMenuEntries = false, shortcutKeys, isFullyExpanded, onExpandCollapseAll }) => {
		const { children: copyText, buttonProps: copyButtonProps } = useCopyButton({
			children: "Copy story name",
			content: context && "exportName" in context ? context.exportName ?? "" : ""
		});
		const topLinks = useMemo(() => {
			const defaultLinks = [];
			if (openedBy === "keyboard") {
				const goToLabel = getGoToLabel(context);
				if (goToLabel) defaultLinks.push({
					id: "go-to-item",
					title: goToLabel,
					icon: /* @__PURE__ */ _storybook_global_react_default.createElement(TypeIconWithSymbol, { item: context }),
					onClick: (e) => {
						e.preventDefault();
						onSelectStoryId(context.id);
						setIsOpen(false);
					}
				});
			}
			if (context && "importPath" in context && context.importPath) defaultLinks.push({
				id: "open-in-editor",
				title: "Open in editor",
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement(EditorIcon, null),
				right: shortcutKeys?.openInEditor ? /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: shortcutKeys.openInEditor }) : null,
				onClick: (e) => {
					if (context.importPath) {
						e.preventDefault();
						api.openInEditor({ file: context.importPath });
					}
				}
			});
			if (context.type === "story") defaultLinks.push({
				id: "copy-story-name",
				title: copyText,
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement(CopyIcon, null),
				onClick: (e) => {
					e.preventDefault();
					copyButtonProps.onClick(e);
				}
			});
			if (context.type === "root" && onExpandCollapseAll !== void 0) defaultLinks.push({
				id: isFullyExpanded ? "collapse-all" : "expand-all",
				title: isFullyExpanded ? "Collapse all" : "Expand all",
				icon: isFullyExpanded ? /* @__PURE__ */ _storybook_global_react_default.createElement(CollapseIcon$1, null) : /* @__PURE__ */ _storybook_global_react_default.createElement(ExpandAltIcon, null),
				onClick: () => {
					onExpandCollapseAll();
					setIsOpen(false);
				}
			});
			if (openedBy === "keyboard" && defaultLinks[0]) defaultLinks[0].autoFocus = true;
			return defaultLinks;
		}, [
			api,
			onSelectStoryId,
			context,
			copyText,
			copyButtonProps,
			openedBy,
			setIsOpen,
			shortcutKeys,
			isFullyExpanded,
			onExpandCollapseAll
		]);
		const handleOpen = useCallback((event) => {
			event.stopPropagation();
			setIsOpen(true);
		}, [setIsOpen]);
		if (globalThis.CONFIG_TYPE !== "DEVELOPMENT") return null;
		if (!(!context.refId && (topLinks.length > 0 || hasProviderMenuEntries))) return null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(PopoverProvider, {
			ariaLabel: "Context menu",
			placement: "bottom-end",
			defaultVisible: false,
			visible: isOpen,
			onVisibleChange: setIsOpen,
			popover: ({ onHide }) => /* @__PURE__ */ _storybook_global_react_default.createElement(ContextMenuContent, {
				context,
				links: topLinks,
				onHide
			}),
			hasChrome: true,
			padding: 0
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ContextMenuButton, {
			"data-displayed": isOpen ? "on" : "off",
			"data-testid": "context-menu",
			ariaLabel: "Open context menu",
			type: "button",
			onClick: handleOpen,
			shortcut: shortcutKeys?.contextMenu,
			tooltipPlacement: "bottom-end",
			disableAllTooltips: isOpen
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(EllipsisIcon, null)));
	});
	ContextMenu.displayName = "ContextMenu";
	ContextMenuContent = ({ context, links, onHide }) => {
		const providerLinks = generateTestProviderLinks(useStorybookApi().getElements(Addon_TypesEnum.experimental_TEST_PROVIDER), context);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarMenuList, {
			menu: [links, providerLinks],
			onHide
		});
	};
}));
//#endregion
//#region src/manager/components/sidebar/CollapseIcon.tsx
var CollapseIconWrapper, CollapseIcon;
var init_CollapseIcon = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	CollapseIconWrapper = styled.div(({ isExpanded }) => ({
		width: 14,
		height: 14,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		transform: isExpanded ? "rotateZ(90deg)" : "none",
		transition: "transform .1s ease-out"
	}));
	CollapseIcon = (props) => /* @__PURE__ */ _storybook_global_react_default.createElement(CollapseIconWrapper, props, /* @__PURE__ */ _storybook_global_react_default.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "8",
		height: "8",
		fill: "none"
	}, /* @__PURE__ */ _storybook_global_react_default.createElement("path", {
		fill: "currentColor",
		fillRule: "evenodd",
		clipRule: "evenodd",
		d: "M1.896 7.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L5.043 4 1.896 7.146Z"
	})));
}));
//#endregion
//#region src/manager/components/sidebar/treeGeometry.ts
/** Walk the expanded tree and record the geometry of every visible row. */
function flattenRows(tree, expanded) {
	const ids = [];
	const sectionStartIds = /* @__PURE__ */ new Set();
	const offsets = [];
	const depths = [];
	const indexById = /* @__PURE__ */ new Map();
	const subtreeBottoms = /* @__PURE__ */ new Map();
	let y = 0;
	let prevLevel1 = true;
	const walk = (entries, level) => {
		for (const entry of entries) {
			const isLevel1 = level === 1;
			const hasGap = isLevel1 && ids.length > 0 && !prevLevel1;
			if (hasGap) sectionStartIds.add(entry.id);
			indexById.set(entry.id, ids.length);
			ids.push(entry.id);
			depths.push(level - 1);
			offsets.push(y + (hasGap ? 14 : 0));
			y += 28 + (hasGap ? 14 : 0);
			prevLevel1 = isLevel1;
			if (entry.resolvedChildren?.length && expanded.has(entry.id)) walk(entry.resolvedChildren, level + 1);
			subtreeBottoms.set(entry.id, y);
		}
	};
	walk(tree, 1);
	return {
		ids,
		sectionStartIds,
		offsets,
		depths,
		indexById,
		subtreeBottoms
	};
}
/**
* Index of the first row whose bottom edge is below `y`. Returns `ids.length` when `y` is past the
* last row. Rows are ordered by offset, so a binary search keeps this independent of tree size.
*/
function findFirstRowBelow({ ids, offsets }, y) {
	let low = 0;
	let high = ids.length - 1;
	let found = ids.length;
	while (low <= high) {
		const mid = low + high >> 1;
		if ((mid + 1 < ids.length ? offsets[mid + 1] : offsets[mid] + 28) <= y) low = mid + 1;
		else {
			found = mid;
			high = mid - 1;
		}
	}
	return found;
}
/**
* How far a tree has scrolled past the top of the scroll area, in px. The value is negative while
* the tree still starts below that edge, and it grows as the tree scrolls up.
*/
function scrollTopWithin(scroller, tree) {
	return scroller.getBoundingClientRect().top - tree.getBoundingClientRect().top;
}
/** Distance from the top of the scroll content to the top of a tree, in px. */
function treeTopWithin(scroller, tree) {
	return scroller.scrollTop - scrollTopWithin(scroller, tree);
}
var init_treeGeometry = __esmMin((() => {}));
//#endregion
//#region src/manager/components/sidebar/TreeIndentLines.tsx
/**
* Distance in px from the tree's left edge to an indent level's line, just left of the icons. The
* rows, their sticky copies, and the sticky shadow's mask all derive from this.
*/
function indentLineX(level) {
	return level * 20 - 7;
}
/**
* The indent lines of one row, levels 1 to `level`. Each row and each sticky copy carries its
* own, so the lines scroll and stick on the compositor with the row that owns them. The host row
* colors them on hover and keyboard focus through `[data-indent-line]`, and `selectionLevel`
* marks the one line this row shares with the selected story's siblings.
*/
function IndentLines({ level, selectionLevel = 0 }) {
	return /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, Array.from({ length: level }, (_, index) => /* @__PURE__ */ _storybook_global_react_default.createElement(IndentLine, {
		key: index,
		"data-indent-line": true,
		"data-selection-line": index + 1 === selectionLevel || void 0,
		"aria-hidden": "true",
		style: { left: indentLineX(index + 1) }
	})));
}
/** The level of the selection line this row carries, or 0. */
function useSelectionLineLevel(itemId) {
	const store = useContext(SelectionLineStoreContext);
	return useSyncExternalStore(store.subscribe, () => {
		const state = store.getState();
		return state && state.rowIds.has(itemId) ? state.level : 0;
	});
}
var INDENT_LINE_OPACITY_VAR, IndentLine, createSelectionLineStore, SelectionLineStoreContext;
var init_TreeIndentLines = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	init_treeGeometry();
	INDENT_LINE_OPACITY_VAR = "--indent-line-opacity";
	IndentLine = styled.span(({ theme }) => ({
		position: "absolute",
		top: 0,
		bottom: 0,
		width: 1,
		pointerEvents: "none",
		backgroundColor: theme.appBorderColor,
		opacity: `var(${INDENT_LINE_OPACITY_VAR}, 0)`,
		transition: "opacity 150ms ease",
		"&[data-selection-line]": { opacity: 1 }
	}));
	createSelectionLineStore = () => {
		let state = null;
		const listeners = /* @__PURE__ */ new Set();
		return {
			getState: () => state,
			setState: (next) => {
				state = next;
				listeners.forEach((listener) => listener());
			},
			subscribe: (listener) => {
				listeners.add(listener);
				return () => listeners.delete(listener);
			}
		};
	};
	SelectionLineStoreContext = createContext(createSelectionLineStore());
}));
//#endregion
//#region src/manager/components/sidebar/ContextMenuStore.tsx
var createContextMenuStore, ContextMenuStoreContext;
var init_ContextMenuStore = __esmMin((() => {
	init__storybook_global_react();
	createContextMenuStore = () => {
		let state = null;
		const listeners = /* @__PURE__ */ new Set();
		return {
			getState: () => state,
			setState: (next) => {
				state = next;
				listeners.forEach((listener) => listener());
			},
			subscribe: (listener) => {
				listeners.add(listener);
				return () => listeners.delete(listener);
			}
		};
	};
	ContextMenuStoreContext = createContext(createContextMenuStore());
}));
//#endregion
//#region src/manager/components/sidebar/StatusStore.tsx
/** The statuses this row shows. */
function useRowStatus(itemId) {
	const store = useContext(StatusStoreContext);
	return useSyncExternalStore(store.subscribe, () => store.getRowStatus(itemId));
}
var NO_STATUS, createStatusStore, StatusStoreContext;
var init_StatusStore = __esmMin((() => {
	init__storybook_global_react();
	NO_STATUS = {
		change: "status-value:unknown",
		test: "status-value:unknown"
	};
	createStatusStore = (initial = {}) => {
		let state = initial;
		const listeners = /* @__PURE__ */ new Set();
		return {
			getRowStatus: (itemId) => state[itemId] ?? NO_STATUS,
			setState: (next) => {
				const merged = {};
				for (const [itemId, value] of Object.entries(next)) {
					const previous = state[itemId];
					merged[itemId] = previous && previous.change === value.change && previous.test === value.test ? previous : value;
				}
				state = merged;
				listeners.forEach((listener) => listener());
			},
			subscribe: (listener) => {
				listeners.add(listener);
				return () => listeners.delete(listener);
			}
		};
	};
	StatusStoreContext = createContext(createStatusStore());
}));
//#endregion
//#region src/manager/components/sidebar/treeRowStyles.ts
var iconSwap, truncatedLabel;
var init_treeRowStyles = __esmMin((() => {
	iconSwap = (activeSelectors) => ({
		".static-only": {
			display: "flex",
			alignContent: "center",
			alignItems: "center"
		},
		".hover-only": { display: "none" },
		[activeSelectors.map((selector) => `${selector} .static-only`).join(", ")]: { display: "none" },
		[activeSelectors.map((selector) => `${selector} .hover-only`).join(", ")]: {
			display: "flex",
			alignContent: "center",
			alignItems: "center"
		}
	});
	truncatedLabel = {
		flex: "1 1 auto",
		minWidth: 0,
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap"
	};
}));
//#endregion
//#region src/manager/components/sidebar/TreeNode.tsx
/**
* Reports this row's focus up to the tree for as long as it holds it. The sticky copies and the
* context-menu shortcut render outside the react-aria tree, so they cannot read its focus state;
* react-aria hands each row its own `isFocused` and `isFocusVisible`, and only the rows whose
* focus changes re-render.
*/
function RowFocusReporter({ itemId, isFocused, isFocusVisible, onRowFocus }) {
	useEffect(() => {
		if (!isFocused || !onRowFocus) return;
		onRowFocus(itemId, isFocusVisible);
		return () => onRowFocus(itemId, null);
	}, [
		isFocused,
		isFocusVisible,
		itemId,
		onRowFocus
	]);
	return null;
}
var StyledTreeItem, StyledContent, StyledLabel, MenuTriggerContainer, ExpandToggleButton, StatusIconContainer, StatusBadge, getStatusLabel, STATUS_ANNOUNCEMENTS, TreeNode;
var init_TreeNode = __esmMin((() => {
	init__storybook_global_react();
	init_polished_esm();
	init_Button();
	init_Tree$1();
	init_manager_api();
	init_emotion();
	init_status();
	init_tree();
	init_ContextMenu();
	init_CollapseIcon();
	init_TreeIndentLines();
	init_ContextMenuStore();
	init_StatusStore();
	init_TypeIcon();
	init_treeRowStyles();
	init_treeGeometry();
	StyledTreeItem = styled($89d060d8eb451127$export$53d36ab85dc89436)(({ $level, theme, $textColor, $startsSection, $isRoot }) => ({
		position: "relative",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex-start",
		background: "transparent",
		minHeight: 28,
		overflow: "hidden",
		cursor: "pointer",
		paddingInlineStart: `calc(${$level} * 20px)`,
		paddingBlockStart: $startsSection ? 14 : 0,
		"&::before": {
			content: "\"\"",
			position: "absolute",
			left: 0,
			right: 0,
			bottom: 0,
			top: $startsSection ? 14 : 0,
			borderRadius: 4,
			pointerEvents: "none"
		},
		fontSize: theme.typography.size.s2,
		color: $textColor ?? ($isRoot ? theme.textMutedColor : theme.color.defaultText),
		"&:hover, &[data-focus-visible]": {
			color: $textColor ?? theme.barHoverColor,
			outline: "none",
			svg: { color: "currentColor" }
		},
		"&:hover [data-indent-line], &[data-focus-visible] [data-indent-line]": { backgroundColor: curriedTransparentize$1(.52, theme.color.secondary) },
		"&:hover::before, &[data-focus-visible]::before": { background: theme.background.hoverable },
		"&[data-selected=\"true\"]": {
			color: theme.color.lightest,
			fontWeight: theme.typography.weight.bold,
			svg: { color: theme.color.lightest }
		},
		"&[data-selected=\"true\"]::before": { background: theme.base === "dark" ? curriedDarken$1(.18, theme.color.secondary) : theme.color.secondary },
		"&:focus-visible": {
			outline: "none",
			anchorName: "--focused-treenode",
			zIndex: 1
		},
		"&:focus-visible::before": { boxShadow: `inset 0 0 0 2px ${theme.color.secondary}, inset 0 0 0 4px ${theme.background.app}` },
		"& [data-displayed=\"off\"]": { display: "none" },
		"&:hover [data-displayed=\"off\"], &[data-focus-visible] [data-displayed=\"off\"], &:has(:focus-visible) [data-displayed=\"off\"]": { display: "inline-flex" },
		"& span:has([data-displayed=\"on\"]) + *": { display: "none" },
		"&:hover span:has([data-displayed=\"off\"]) + *, &[data-focus-visible] span:has([data-displayed=\"off\"]) + *, &:has(:focus-visible) span:has([data-displayed=\"off\"]) + *": { display: "none" },
		...iconSwap(["&:hover", "&:focus-visible"])
	}));
	StyledContent = styled.div({
		display: "flex",
		minWidth: 28,
		minHeight: 28,
		padding: 2,
		paddingInlineStart: 7,
		justifyContent: "center",
		alignItems: "center",
		flex: "1 0 0",
		position: "relative"
	});
	StyledLabel = styled.span(({ theme }) => ({
		...truncatedLabel,
		marginInlineStart: 6,
		fontSize: theme.typography.size.s2
	}));
	MenuTriggerContainer = styled.span({ margin: -2 });
	ExpandToggleButton = styled($7705c033048f6da7$export$353f5b6fc5456de1)({
		all: "unset",
		display: "flex",
		alignItems: "center",
		cursor: "pointer"
	});
	StatusIconContainer = styled.span({
		transition: "none",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		minWidth: 24,
		height: 24,
		gap: 4,
		padding: 5,
		zIndex: 1
	});
	StatusBadge = styled.span({
		display: "inline-flex",
		alignItems: "center"
	});
	getStatusLabel = (status) => status.split(":")[1].replace(/^./, (char) => char.toUpperCase());
	STATUS_ANNOUNCEMENTS = {
		"status-value:success": "Tests passing",
		"status-value:error": "Tests failing",
		"status-value:warning": "Tests passing with warnings",
		"status-value:pending": "Test status pending",
		"status-value:unknown": "Test status unknown",
		"status-value:new": "Has new stories",
		"status-value:modified": "Has modified stories",
		"status-value:affected": "Affected by other changes",
		"status-value:reviewing": "Included in the active review"
	};
	TreeNode = _storybook_global_react_default.memo(function TreeNode({ item, refId, labelContext, isExpanded, startsSection = false, api, onSelectStoryId, openContextMenu, closeContextMenu, hasTestProviders = false, shortcutKeys, onRowFocus, isFullyExpanded, onExpandCollapseAll, children }) {
		const theme = useTheme();
		const rowStatus = useRowStatus(item.id);
		const selectionLineLevel = useSelectionLineLevel(item.id);
		const menuStore = useContext(ContextMenuStoreContext);
		const openedBy = useSyncExternalStore(menuStore.subscribe, () => {
			const menu = menuStore.getState();
			return menu?.itemId === item.id ? menu.openedBy : void 0;
		});
		const isContextMenuOpen = openedBy !== void 0;
		const stopRowPress = useCallback((event) => event.stopPropagation(), []);
		const dismissedByPointerRef = useRef(false);
		useEffect(() => {
			if (!isContextMenuOpen) return;
			const doc = globalThis.document;
			const onPointerDown = () => dismissedByPointerRef.current = true;
			const onKeyDown = () => dismissedByPointerRef.current = false;
			doc.addEventListener("pointerdown", onPointerDown, true);
			doc.addEventListener("keydown", onKeyDown, true);
			return () => {
				doc.removeEventListener("pointerdown", onPointerDown, true);
				doc.removeEventListener("keydown", onKeyDown, true);
			};
		}, [isContextMenuOpen]);
		const handleContextMenuOpenChange = useCallback((open) => {
			if (open) {
				openContextMenu?.(item.id);
				return;
			}
			closeContextMenu?.();
			if (!dismissedByPointerRef.current) return;
			const doc = globalThis.document;
			const row = doc.querySelector(`[data-item-id="${CSS.escape(item.id)}"]`);
			const cancel = () => {
				doc.removeEventListener("focusin", onFocusIn, true);
				clearTimeout(timer);
			};
			let blurring = false;
			const onFocusIn = (event) => {
				if (event.target instanceof HTMLElement && row?.contains(event.target)) {
					if (blurring) {
						cancel();
						return;
					}
					blurring = true;
					try {
						event.target.blur();
					} finally {
						blurring = false;
					}
					return;
				}
				cancel();
			};
			doc.addEventListener("focusin", onFocusIn, true);
			const timer = setTimeout(cancel, 500);
		}, [
			openContextMenu,
			closeContextMenu,
			item.id
		]);
		const { changeStatus, changeStatusIcon, testStatus, testStatusIcon, statusTextColor } = useMemo(() => {
			const { icon: changeStatusIcon, textColor: changeTextColor } = getStatus(theme, rowStatus.change);
			const { icon: testStatusIcon, textColor: testTextColor } = getStatus(theme, rowStatus.test);
			return {
				changeStatus: rowStatus.change,
				changeStatusIcon,
				testStatus: rowStatus.test,
				testStatusIcon,
				statusTextColor: testTextColor ?? changeTextColor
			};
		}, [rowStatus, theme]);
		const itemIsBranch = isBranch(item);
		const nodeType = "subtype" in item && item.subtype === "test" ? "test" : item.type === "docs" ? "document" : item.type;
		const hasProviderMenuEntries = useMemo(() => hasProviderMenuEntriesFor(api, item, hasTestProviders), [
			api,
			item,
			hasTestProviders
		]);
		const renderContextMenu = useMemo(() => hasContextMenu(item, hasProviderMenuEntries), [item, hasProviderMenuEntries]);
		const ariaLabel = useMemo(() => {
			let label = item.renderAriaLabel?.(item, api, labelContext) || item.name;
			if (testStatus !== "status-value:unknown") label += `. ${STATUS_ANNOUNCEMENTS[testStatus]}`;
			if (changeStatus !== "status-value:unknown") label += `. ${STATUS_ANNOUNCEMENTS[changeStatus]}`;
			if (renderContextMenu && shortcutKeys?.contextMenu) {
				const shortcut = shortcutToHumanString(shortcutKeys.contextMenu);
				label += `. Press ${shortcut} for more actions`;
			}
			return label;
		}, [
			item,
			api,
			labelContext,
			renderContextMenu,
			changeStatus,
			testStatus,
			shortcutKeys
		]);
		const leadingIcon = useMemo(() => {
			if (item.type === "root") return /* @__PURE__ */ _storybook_global_react_default.createElement(ExpandToggleButton, {
				slot: "chevron",
				"aria-label": isExpanded ? "Collapse" : "Expand"
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(CollapseIcon, { isExpanded }));
			if (itemIsBranch) return /* @__PURE__ */ _storybook_global_react_default.createElement(ExpandToggleButton, {
				slot: "chevron",
				"aria-label": isExpanded ? "Collapse" : "Expand"
			}, /* @__PURE__ */ _storybook_global_react_default.createElement("span", { className: "hover-only" }, /* @__PURE__ */ _storybook_global_react_default.createElement(CollapseIcon, { isExpanded })), /* @__PURE__ */ _storybook_global_react_default.createElement("span", { className: "static-only" }, /* @__PURE__ */ _storybook_global_react_default.createElement(TypeIconWithSymbol, { item })));
			return /* @__PURE__ */ _storybook_global_react_default.createElement(TypeIconWithSymbol, { item });
		}, [
			item,
			itemIsBranch,
			isExpanded
		]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(StyledTreeItem, {
			$level: item.depth,
			$textColor: statusTextColor,
			$startsSection: startsSection,
			$isRoot: item.type === "root",
			textValue: item.name,
			"aria-label": ariaLabel,
			id: item.id,
			key: item.id,
			className: item.type === "root" ? "sidebar-subheading" : "sidebar-item",
			"data-item-id": item.id,
			"data-ref-id": refId,
			"data-nodetype": nodeType
		}, /* @__PURE__ */ _storybook_global_react_default.createElement($89d060d8eb451127$export$4b687e3f663d618c, null, ({ isFocused, isFocusVisible }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(RowFocusReporter, {
			itemId: item.id,
			isFocused,
			isFocusVisible,
			onRowFocus
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(IndentLines, {
			level: item.depth,
			selectionLevel: selectionLineLevel
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(StyledContent, null, leadingIcon, /* @__PURE__ */ _storybook_global_react_default.createElement(StyledLabel, null, item.renderLabel?.(item, api, labelContext) || item.name), renderContextMenu && /* @__PURE__ */ _storybook_global_react_default.createElement(MenuTriggerContainer, {
			onPointerDown: stopRowPress,
			onMouseDown: stopRowPress,
			onTouchStart: stopRowPress
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ContextMenu, {
			context: item,
			isOpen: isContextMenuOpen,
			setIsOpen: handleContextMenuOpenChange,
			onSelectStoryId,
			api,
			openedBy,
			hasProviderMenuEntries,
			shortcutKeys,
			isFullyExpanded,
			onExpandCollapseAll
		})), (changeStatusIcon || testStatusIcon) && /* @__PURE__ */ _storybook_global_react_default.createElement(StatusIconContainer, {
			role: "status",
			"aria-live": "off"
		}, changeStatusIcon && /* @__PURE__ */ _storybook_global_react_default.createElement(StatusBadge, {
			role: "img",
			"aria-label": `Change status: ${getStatusLabel(changeStatus)}`,
			"data-testid": "tree-change-status-button"
		}, changeStatusIcon), testStatusIcon && /* @__PURE__ */ _storybook_global_react_default.createElement(StatusBadge, {
			role: "img",
			"aria-label": `Test status: ${getStatusLabel(testStatus)}`,
			"data-testid": "tree-status-button"
		}, testStatusIcon))))), children);
	});
}));
//#endregion
//#region src/manager/components/sidebar/SidebarScrollArea.tsx
/** Wraps the tree blocks in the sidebar's one scroll area and shares it with them. */
function SidebarScrollArea({ children, ...props }) {
	const scrollerRef = useRef(null);
	const isPointerOver = useRef(false);
	const isFocusWithin = useRef(false);
	const hideTimer = useRef(void 0);
	const fadeFrame = useRef(void 0);
	const thumbAlpha = useRef(0);
	const fadeThumbTo = useCallback((target) => {
		if (fadeFrame.current !== void 0) cancelAnimationFrame(fadeFrame.current);
		const from = thumbAlpha.current;
		if (from === target) return;
		const start = performance.now();
		const step = () => {
			const scroller = scrollerRef.current;
			if (!scroller) return;
			const progress = Math.min(1, (performance.now() - start) / SCROLLBAR_FADE_DURATION);
			const eased = progress * (2 - progress);
			thumbAlpha.current = from + (target - from) * eased;
			scroller.style.setProperty("--scrollbar-thumb-alpha", String(thumbAlpha.current));
			if (progress < 1) fadeFrame.current = requestAnimationFrame(step);
		};
		step();
	}, []);
	const updateScrollbar = useCallback(() => {
		clearTimeout(hideTimer.current);
		if (isPointerOver.current || isFocusWithin.current) fadeThumbTo(SCROLLBAR_THUMB_ALPHA);
		else hideTimer.current = setTimeout(() => fadeThumbTo(0), SCROLLBAR_HIDE_DELAY);
	}, [fadeThumbTo]);
	useEffect(() => () => {
		clearTimeout(hideTimer.current);
		if (fadeFrame.current !== void 0) cancelAnimationFrame(fadeFrame.current);
	}, []);
	return /* @__PURE__ */ _storybook_global_react_default.createElement(Frame, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Scroller, {
		ref: scrollerRef,
		"data-testid": "sidebar-scroll-area",
		onPointerEnter: () => {
			isPointerOver.current = true;
			updateScrollbar();
		},
		onPointerLeave: () => {
			isPointerOver.current = false;
			updateScrollbar();
		},
		onFocus: () => {
			isFocusWithin.current = true;
			updateScrollbar();
		},
		onBlur: (event) => {
			isFocusWithin.current = event.currentTarget.contains(event.relatedTarget);
			updateScrollbar();
		},
		...props
	}, /* @__PURE__ */ _storybook_global_react_default.createElement(ScrollAreaContext.Provider, { value: scrollerRef }, children)));
}
var ScrollAreaContext, Scroller, Frame, SCROLLBAR_HIDE_DELAY, SCROLLBAR_FADE_DURATION, SCROLLBAR_THUMB_ALPHA;
var init_SidebarScrollArea = __esmMin((() => {
	init__storybook_global_react();
	init_polished_esm();
	init_emotion();
	init_constants();
	ScrollAreaContext = createContext(null);
	Scroller = styled.div(({ theme }) => ({
		flex: "1 1 auto",
		minHeight: 0,
		overflowY: "auto",
		overflowX: "hidden",
		paddingBottom: "var(--sidebar-bottom-height, 0px)",
		"--scrollbar-thumb": `color-mix(in srgb, ${theme.textMutedColor} calc(var(--scrollbar-thumb-alpha, 0) * 100%), transparent)`,
		"@supports not selector(::-webkit-scrollbar)": {
			scrollbarWidth: "thin",
			scrollbarColor: "var(--scrollbar-thumb) transparent"
		},
		"&::-webkit-scrollbar": {
			width: 6,
			background: "transparent"
		},
		"&::-webkit-scrollbar-thumb": {
			borderRadius: 6,
			backgroundColor: "var(--scrollbar-thumb)"
		},
		"&::-webkit-scrollbar-thumb:hover": { backgroundColor: curriedTransparentize$1(.2, theme.textMutedColor) }
	}));
	Frame = styled.div(({ theme }) => ({
		position: "relative",
		flex: "1 1 auto",
		minHeight: 0,
		display: "flex",
		flexDirection: "column",
		"--sticky-row-background": theme.background.content,
		[MEDIA_DESKTOP_BREAKPOINT]: { "--sticky-row-background": theme.background.app },
		"&::after": {
			content: "\"\"",
			position: "absolute",
			left: 0,
			right: 0,
			bottom: 0,
			height: 16,
			pointerEvents: "none",
			background: "linear-gradient(to top, var(--sticky-row-background), transparent)"
		}
	}));
	SCROLLBAR_HIDE_DELAY = 200;
	SCROLLBAR_FADE_DURATION = 200;
	SCROLLBAR_THUMB_ALPHA = .5;
}));
//#endregion
//#region src/manager/components/sidebar/TreeRowLayout.ts
var EMPTY_ROWS, TreeRowLayout;
var init_TreeRowLayout = __esmMin((() => {
	init_Virtualizer();
	init_treeGeometry();
	EMPTY_ROWS = flattenRows([], /* @__PURE__ */ new Set());
	TreeRowLayout = class extends $85410e0c3cc54f1d$export$c84671f46d6a1ca {
		constructor(..._args) {
			super(..._args);
			this.rows = EMPTY_ROWS;
			this.cache = /* @__PURE__ */ new Map();
			this.cachedWidth = 0;
		}
		/**
		* Also set directly during render, so even the very first layout build uses the real geometry;
		* `layoutOptions` carries the same object to invalidate the virtualizer on change.
		*/
		setRows(rows) {
			if (this.rows !== rows) {
				this.rows = rows;
				this.cache.clear();
			}
		}
		update(invalidationContext) {
			if (invalidationContext.layoutOptions?.rows) this.setRows(invalidationContext.layoutOptions.rows);
			const width = this.virtualizer?.visibleRect.width ?? 0;
			if (width !== this.cachedWidth) {
				this.cachedWidth = width;
				this.cache.clear();
			}
		}
		shouldInvalidateLayoutOptions(newOptions, oldOptions) {
			return newOptions.rows !== oldOptions.rows;
		}
		layoutInfoAt(index) {
			const { ids, offsets, sectionStartIds } = this.rows;
			const id = ids[index];
			let info = this.cache.get(id);
			if (!info) {
				const gap = sectionStartIds.has(id) ? 14 : 0;
				info = new $eb6255cbf080eb7d$export$7e0eeb9da702a085("item", id, new $af827553fd3cf456$export$c79fc6492f3af13d(0, offsets[index] - gap, this.cachedWidth, 28 + gap));
				this.cache.set(id, info);
			}
			return info;
		}
		getVisibleLayoutInfos(rect) {
			const { ids, offsets, indexById } = this.rows;
			const infos = [];
			const first = findFirstRowBelow(this.rows, rect.y);
			let last = first;
			for (; last < ids.length && offsets[last] - 14 < rect.maxY; last += 1) infos.push(this.layoutInfoAt(last));
			for (const key of this.virtualizer?.persistedKeys ?? []) {
				const index = indexById.get(String(key));
				if (index !== void 0 && (index < first || index >= last)) infos.push(this.layoutInfoAt(index));
			}
			return infos;
		}
		getLayoutInfo(key) {
			const index = this.rows.indexById.get(String(key));
			return index === void 0 ? null : this.layoutInfoAt(index);
		}
		getContentSize() {
			const { ids, offsets } = this.rows;
			const height = ids.length > 0 ? offsets[ids.length - 1] + 28 : 0;
			return new $cc8e610d5d6e3fe4$export$cb6da89c6af1a8ec(this.cachedWidth, height);
		}
	};
}));
//#endregion
//#region src/manager/components/sidebar/TreeStickyRows.tsx
/**
* Computes the IDs of TreeNodes that need to be made into sticky rows, given a scroll offset.
*
* Finds the first TreeNode below the current scroll offset, then finds all of its ancestors.
*
* The function performs further filtering to handle edge cases during transitions in the
* sticky tree. There's a gap between the moment a new TreeNode branch scrolls to the bottom
* of the sticky tree and to the top of scroll area. We need to move the sticky rows' content
* out of the way as that new branch scrolls up so it doesn't disappear, but not all at the
* same time so the tree's vertical position doesn't jump around.
*
* It's okay to find this function hard to understand. It is.
*/
function getStickyRowIds(rows, data, scrollTop) {
	const { ids, offsets, depths, indexById, subtreeBottoms } = rows;
	const topIndex = findFirstRowBelow(rows, scrollTop);
	if (topIndex >= ids.length) return [];
	const slotTop = (depth) => scrollTop + depth * 28;
	const candidates = [...getAncestorIds$1(data, ids[topIndex])].map((id) => indexById.get(id)).filter((index) => index !== void 0);
	for (let index = topIndex; index < ids.length && offsets[index] < slotTop(depths[index]); index++) candidates.push(index);
	const byDepth = [];
	for (const index of candidates) {
		const top = slotTop(depths[index]);
		if (offsets[index] < top && (subtreeBottoms.get(ids[index]) ?? 0) > top + 28) byDepth[depths[index]] = ids[index];
	}
	const sticky = [];
	for (let depth = 0; depth < byDepth.length && byDepth[depth] !== void 0; depth++) sticky.push(byDepth[depth]);
	return sticky;
}
function StickyRowItem({ id, slot, data, api, labelContext, rowsRef, accentId, selectionLine, onCollapse, openContextMenu, hasTestProviders, scrollIntoSlot, focusRealRow }) {
	const theme = useTheme();
	const rowStatus = useRowStatus(id);
	const entry = data[id];
	const rowIndex = rowsRef.current?.indexById.get(id);
	if (!entry || rowIndex === void 0) return null;
	const level = rowsRef.current.depths[rowIndex];
	const { icon: changeStatusIcon } = getStatus(theme, rowStatus.change);
	const { icon: testStatusIcon } = getStatus(theme, rowStatus.test);
	const hasStatus = Boolean(changeStatusIcon || testStatusIcon);
	return /* @__PURE__ */ _storybook_global_react_default.createElement(StickyRow, {
		$level: level,
		$isRoot: entry.type === "root",
		"data-sticky-item-id": id,
		"data-accent": id === accentId || void 0,
		type: "button",
		tabIndex: -1,
		onClick: () => {
			scrollIntoSlot(id, slot);
			focusRealRow(id);
		}
	}, /* @__PURE__ */ _storybook_global_react_default.createElement(IndentLines, {
		level,
		selectionLevel: selectionLine?.rowIds.has(id) ? selectionLine.level : 0
	}), /* @__PURE__ */ _storybook_global_react_default.createElement(StickyRowIcon, {
		"data-testid": "sticky-collapse",
		onClick: (event) => {
			event.stopPropagation();
			onCollapse(id);
			scrollIntoSlot(id, slot);
			focusRealRow(id);
		}
	}, entry.type === "root" ? /* @__PURE__ */ _storybook_global_react_default.createElement(CollapseIcon, { isExpanded: true }) : /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("span", { className: "hover-only" }, /* @__PURE__ */ _storybook_global_react_default.createElement(CollapseIcon, { isExpanded: true })), /* @__PURE__ */ _storybook_global_react_default.createElement("span", { className: "static-only" }, /* @__PURE__ */ _storybook_global_react_default.createElement(TypeIconWithSymbol, { item: entry })))), /* @__PURE__ */ _storybook_global_react_default.createElement(StickyLabel, null, entry.renderLabel?.(entry, api, labelContext) || entry.name), openContextMenu && hasContextMenu(entry, hasProviderMenuEntriesFor(api, entry, hasTestProviders)) && /* @__PURE__ */ _storybook_global_react_default.createElement(StickyMenuButton, {
		role: "button",
		"data-sticky-menu": true,
		"data-testid": "sticky-context-menu",
		"aria-label": "Open context menu",
		onClick: (e) => {
			e.stopPropagation();
			scrollIntoSlot(id, slot);
			requestAnimationFrame(() => openContextMenu(id, "pointer"));
		}
	}, /* @__PURE__ */ _storybook_global_react_default.createElement(EllipsisIcon, null)), hasStatus && /* @__PURE__ */ _storybook_global_react_default.createElement(StickyStatusContainer, { "data-sticky-status": true }, changeStatusIcon, testStatusIcon));
}
/**
* The ancestors of the top row, kept in view above the tree.
*
* The rows render as an overlay rather than with `position: sticky`, which cannot apply to the
* absolutely positioned rows of a virtualized list. They are a pointer affordance only: the real
* rows carry the tree semantics, so the overlay stays out of the tab order and out of the
* accessibility tree.
*/
function TreeStickyRows({ ids, data, api, labelContext, scrollerRef, wrapperRef, rowsRef, accentId, selectionLine, onCollapse, openContextMenu, hasTestProviders }) {
	if (ids.length === 0) return null;
	const scrollIntoSlot = (id, slot) => {
		const scroller = scrollerRef?.current;
		const wrapper = wrapperRef.current;
		const rows = rowsRef.current;
		const index = rows?.indexById.get(id);
		if (!scroller || !wrapper || !rows || index === void 0) return;
		scroller.scrollTop = treeTopWithin(scroller, wrapper) + rows.offsets[index] - slot * 28;
	};
	const focusRealRow = (id, attempt = 0) => {
		const row = wrapperRef.current?.querySelector(`[data-item-id="${CSS.escape(id)}"]`);
		if (row) row.focus({ preventScroll: true });
		else if (attempt < 10) requestAnimationFrame(() => focusRealRow(id, attempt + 1));
	};
	return /* @__PURE__ */ _storybook_global_react_default.createElement(StickyAnchor, { "aria-hidden": "true" }, /* @__PURE__ */ _storybook_global_react_default.createElement(StickyStack, { "data-testid": "sticky-overlay" }, ids.map((id, slot) => /* @__PURE__ */ _storybook_global_react_default.createElement(StickyRowItem, {
		key: id,
		id,
		slot,
		data,
		api,
		labelContext,
		rowsRef,
		accentId,
		selectionLine,
		onCollapse,
		openContextMenu,
		hasTestProviders,
		scrollIntoSlot,
		focusRealRow
	}))));
}
var StickyAnchor, StickyStack, StickyRow, StickyMenuButton, StickyStatusContainer, StickyRowIcon, StickyLabel;
var init_TreeStickyRows = __esmMin((() => {
	init__storybook_global_react();
	init_polished_esm();
	init_emotion();
	init_icons();
	init_tree();
	init_status();
	init_CollapseIcon();
	init_ContextMenu();
	init_StatusStore();
	init_treeGeometry();
	init_TreeIndentLines();
	init_treeRowStyles();
	init_TypeIcon();
	StickyAnchor = styled.div({
		position: "sticky",
		top: 0,
		height: 0,
		zIndex: 3
	});
	StickyStack = styled.div({
		position: "absolute",
		top: 0,
		left: 0,
		right: 0
	});
	StickyRow = styled.button(({ $level, $isRoot, theme }) => ({
		position: "relative",
		display: "flex",
		alignItems: "center",
		width: "100%",
		height: 28,
		overflow: "hidden",
		border: 0,
		margin: 0,
		paddingBlock: 0,
		paddingInlineEnd: 8,
		paddingInlineStart: `calc(${$level} * 20px + 7px)`,
		gap: 6,
		cursor: "pointer",
		textAlign: "left",
		font: "inherit",
		fontSize: theme.typography.size.s2,
		color: $isRoot ? theme.textMutedColor : theme.color.defaultText,
		backgroundColor: "var(--sticky-row-background)",
		"&::before": {
			content: "\"\"",
			position: "absolute",
			inset: 0,
			borderRadius: 4,
			pointerEvents: "none"
		},
		"&:hover": {
			color: theme.barHoverColor,
			svg: { color: "currentColor" }
		},
		"&:hover::before": { background: theme.background.hoverable },
		"& svg": { flexShrink: 0 },
		"&:hover [data-indent-line], &[data-accent=\"true\"] [data-indent-line]": { backgroundColor: curriedTransparentize$1(.52, theme.color.secondary) },
		...iconSwap(["&:hover"]),
		"&:hover [data-sticky-menu]": { display: "flex" },
		"&:hover [data-sticky-menu] ~ [data-sticky-status]": { display: "none" }
	}));
	StickyMenuButton = styled.span(({ theme }) => ({
		display: "none",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
		width: 28,
		height: 28,
		borderRadius: 4,
		padding: 0,
		color: "inherit",
		background: "transparent",
		cursor: "pointer",
		position: "relative",
		"&:hover": {
			color: theme.color.secondary,
			background: theme.base === "dark" ? curriedDarken$1(.3, theme.color.secondary) : curriedLighten$1(.4, theme.color.secondary)
		},
		"&:focus-visible": {
			outline: `2px solid ${theme.color.secondary}`,
			outlineOffset: -2
		},
		svg: {
			width: 14,
			height: 14
		}
	}));
	StickyStatusContainer = styled.span({
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		minWidth: 24,
		height: 24,
		gap: 4,
		padding: 5,
		flexShrink: 0,
		zIndex: 1
	});
	StickyRowIcon = styled.span({
		position: "relative",
		display: "flex",
		alignItems: "center"
	});
	StickyLabel = styled.span(({ theme }) => ({
		...truncatedLabel,
		position: "relative",
		fontSize: theme.typography.size.s2
	}));
}));
//#endregion
//#region src/manager/components/sidebar/useExpanded.ts
var initializeExpanded, useExpanded;
var init_useExpanded = __esmMin((() => {
	init__storybook_global_react();
	init_core_events();
	init_manager_api();
	init_tree();
	initializeExpanded = ({ data, initialExpanded, selectedStoryId }) => {
		const selectedStory = selectedStoryId && data[selectedStoryId];
		const candidates = [];
		if (selectedStory && "children" in selectedStory && selectedStory.children?.length) candidates.push(selectedStoryId);
		return /* @__PURE__ */ new Set([...candidates, ...initialExpanded]);
	};
	useExpanded = ({ data, selectedStoryId }) => {
		const api = useStorybookApi();
		const initialExpanded = useMemo(() => new Set(Object.entries(data).filter(([, item]) => item.type === "root" && !item.startCollapsed).map(([key]) => key)), [data]);
		const [expanded, setExpanded] = useReducer((state, { ids, append, value }) => {
			if (append) {
				if (value) {
					if (ids.every((id) => state.has(id))) return state;
					return /* @__PURE__ */ new Set([...state, ...ids]);
				}
				const remaining = [...state].filter((id) => !ids.includes(id));
				return remaining.length === state.size ? state : new Set(remaining);
			}
			if (ids.length === state.size && ids.every((id) => state.has(id))) return state;
			return new Set(ids);
		}, {
			data,
			initialExpanded,
			selectedStoryId
		}, initializeExpanded);
		useEffect(() => {
			if (selectedStoryId) setExpanded({
				ids: getAncestorIds$1(data, selectedStoryId),
				append: true,
				value: true
			});
		}, [data, selectedStoryId]);
		const seenRootsRef = useRef(null);
		seenRootsRef.current ??= new Set(initialExpanded);
		useEffect(() => {
			const seenRoots = seenRootsRef.current;
			const newRoots = [...initialExpanded].filter((id) => !seenRoots.has(id));
			if (newRoots.length === 0) return;
			newRoots.forEach((id) => seenRoots.add(id));
			setExpanded({
				ids: newRoots,
				append: true,
				value: true
			});
		}, [initialExpanded]);
		const collapseAll = useCallback(() => {
			setExpanded({ ids: [...initialExpanded] });
		}, [initialExpanded]);
		const expandAll = useCallback(() => {
			setExpanded({ ids: Object.entries(data).filter(([, value]) => "children" in value).map(([key]) => key) });
		}, [data]);
		useEffect(() => {
			api.on(STORIES_COLLAPSE_ALL, collapseAll);
			api.on(STORIES_EXPAND_ALL, expandAll);
			return () => {
				api.off(STORIES_COLLAPSE_ALL, collapseAll);
				api.off(STORIES_EXPAND_ALL, expandAll);
			};
		}, [
			api,
			collapseAll,
			expandAll
		]);
		return [expanded, setExpanded];
	};
}));
//#endregion
//#region src/manager/components/sidebar/Tree.tsx
/** Returns all branch (non-leaf) descendant ids of a root, for bulk expand/collapse. */
function getBranchDescendants(data, rootId) {
	const entry = data[rootId];
	if (!entry || !("children" in entry)) return [];
	const result = [];
	const stack = [...entry.children ?? []];
	while (stack.length) {
		const id = stack.pop();
		const child = data[id];
		if (!child) continue;
		if ("children" in child && child.children?.length) {
			result.push(id);
			stack.push(...child.children);
		}
	}
	return result;
}
function renderNode({ expanded, sectionStartIds, openContextMenu, closeContextMenu, hasTestProviders, onRowFocus, collectionDependencies, hoistedDataRef, expandUnder, collapseUnder, ...props }) {
	const renderNodeLevel = (item) => {
		let isFullyExpanded;
		let onExpandCollapseAll;
		if (item.type === "root") {
			const branches = getBranchDescendants(hoistedDataRef.current, item.id);
			if (branches.length > 0) {
				isFullyExpanded = branches.every((id) => expanded.has(id));
				const targetExpand = !isFullyExpanded;
				const rootId = item.id;
				onExpandCollapseAll = () => {
					if (targetExpand) expandUnder(rootId);
					else collapseUnder(rootId);
				};
			}
		}
		return /* @__PURE__ */ _storybook_global_react_default.createElement(TreeNode, {
			...props,
			key: item.id,
			item,
			isExpanded: expanded.has(item.id),
			startsSection: sectionStartIds.has(item.id),
			openContextMenu,
			closeContextMenu,
			hasTestProviders,
			onRowFocus,
			isFullyExpanded,
			onExpandCollapseAll
		}, item.resolvedChildren && /* @__PURE__ */ _storybook_global_react_default.createElement($42ceafc619f9c3ba$export$fb8073518f34e6ec, {
			items: item.resolvedChildren,
			dependencies: collectionDependencies
		}, renderNodeLevel));
	};
	return renderNodeLevel;
}
var StyledAriaTree, TreeWrapper, supportsAnchorPositioning, FocusTooltipNote, Tree, EMPTY_KEYS;
var init_Tree = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_core_events();
	init_Collection();
	init_Tree$1();
	init_Virtualizer();
	init_tree();
	init_TreeNode();
	init_types$1();
	init_manager_api();
	init_emotion();
	init_status();
	init_LayoutProvider();
	init_ContextMenu();
	init_ContextMenuStore();
	init_SidebarScrollArea();
	init_StatusStore();
	init_treeGeometry();
	init_TreeIndentLines();
	init_TreeRowLayout();
	init_TreeStickyRows();
	init_useExpanded();
	StyledAriaTree = styled($89d060d8eb451127$export$7fbedc92909ed28e)({
		listStyle: "none",
		padding: 0,
		margin: 0,
		outline: "none"
	});
	TreeWrapper = styled.div({
		position: "relative",
		isolation: "isolate",
		"&:hover, &:has(:focus-visible)": { [INDENT_LINE_OPACITY_VAR]: 1 }
	});
	supportsAnchorPositioning = typeof CSS !== "undefined" && !!CSS.supports?.("anchor-name: --sb-probe") && !!CSS.supports?.("position-visibility: anchors-visible");
	FocusTooltipNote = styled(TooltipNote)({
		marginBlockStart: 8,
		marginInlineEnd: -4,
		position: "fixed",
		zIndex: 2,
		positionAnchor: "--focused-treenode",
		positionArea: "span-x-start y-end",
		positionVisibility: "anchors-visible"
	});
	Tree = _storybook_global_react_default.memo(function Tree({ allStatuses, includedStatusFilters, refId, data, selectedStoryId, onSelectStoryId: onSelectStoryIdProp }) {
		const containerRef = useRef(null);
		const treeWrapperRef = useRef(null);
		const scrollerRef = useContext(ScrollAreaContext);
		const api = useStorybookApi();
		const { isMobile } = useLayout();
		const labelContext = useMemo(() => ({
			isMobile,
			location: "sidebar"
		}), [isMobile]);
		const isModifiedFilterActive = (includedStatusFilters ?? []).includes("status-value:modified");
		const hasTestProviders = Object.keys(api.getElements(Addon_TypesEnum.experimental_TEST_PROVIDER)).length > 0;
		const onSelectStoryIdRef = useRef(onSelectStoryIdProp);
		onSelectStoryIdRef.current = onSelectStoryIdProp;
		const onSelectStoryId = useCallback((id) => onSelectStoryIdRef.current(id), []);
		const [rowFocus, setRowFocus] = useState(null);
		const focusedItemId = rowFocus?.id ?? null;
		const focusedItemIdRef = useRef(null);
		focusedItemIdRef.current = focusedItemId;
		const keyboardFocusedItemId = rowFocus?.keyboard ? rowFocus.id : null;
		const reportRowFocus = useCallback((itemId, keyboard) => {
			setRowFocus((current) => {
				if (keyboard === null) return current?.id === itemId ? null : current;
				return current?.id === itemId && current.keyboard === keyboard ? current : {
					id: itemId,
					keyboard
				};
			});
		}, []);
		const hoistedData = useMemo(() => addStoryRows(hoistSingleStoryComponents(data)), [data]);
		const selectedRowId = useMemo(() => {
			if (!selectedStoryId) return null;
			const rowId = storyRowId(selectedStoryId);
			return isStoryRow(hoistedData[rowId]) ? rowId : selectedStoryId;
		}, [hoistedData, selectedStoryId]);
		const tree = useMemo(() => indexToTree(hoistedData), [hoistedData]);
		const [expanded, setExpanded] = useExpanded({
			data: hoistedData,
			selectedStoryId: selectedRowId
		});
		const groupDualStatus = useMemo(() => getGroupDualStatus(hoistedData, allStatuses ?? {}), [hoistedData, allStatuses]);
		const rowStatuses = useMemo(() => {
			const result = {};
			for (const [itemId, { change, test }] of Object.entries(groupDualStatus)) result[itemId] = {
				change: shouldShowChangeStatus(change.value, isModifiedFilterActive) ? change.value : "status-value:unknown",
				test: test.value
			};
			return result;
		}, [groupDualStatus, isModifiedFilterActive]);
		const statusStoreRef = useRef(null);
		statusStoreRef.current ??= createStatusStore(rowStatuses);
		useLayoutEffect(() => {
			statusStoreRef.current.setState(rowStatuses);
		}, [rowStatuses]);
		const shortcutKeys = api.getShortcutKeys();
		const contextMenuShortcut = useMemo(() => shortcutKeys?.contextMenu ? shortcutToHumanString(shortcutKeys.contextMenu) : void 0, [shortcutKeys]);
		const focusedItemShortcutLabel = useMemo(() => {
			if (!supportsAnchorPositioning || !keyboardFocusedItemId || !contextMenuShortcut) return null;
			const item = hoistedData[keyboardFocusedItemId];
			if (!item) return null;
			if (!hasContextMenu(item, hasProviderMenuEntriesFor(api, item, hasTestProviders))) return null;
			const itemStatus = groupDualStatus?.[keyboardFocusedItemId];
			const changeStatus = itemStatus?.change.value ?? "status-value:unknown";
			const testStatus = itemStatus?.test.value ?? "status-value:unknown";
			return changeStatus !== "status-value:unknown" || testStatus !== "status-value:unknown" ? "Status and actions" : "Actions";
		}, [
			keyboardFocusedItemId,
			contextMenuShortcut,
			hoistedData,
			groupDualStatus,
			hasTestProviders,
			api
		]);
		const selectedKeys = useMemo(() => selectedRowId ? /* @__PURE__ */ new Set([selectedRowId]) : EMPTY_KEYS, [selectedRowId]);
		const selectedParentId = useMemo(() => {
			const entry = selectedRowId ? hoistedData[selectedRowId] : void 0;
			return !entry || entry.type === "root" ? null : entry.parent ?? null;
		}, [selectedRowId, hoistedData]);
		const handleExpandedChange = useCallback((keys) => {
			setExpanded({ ids: Array.from(keys).map(String) });
		}, [setExpanded]);
		const isActivatingRef = useRef(false);
		const lastInputModalityRef = useRef("pointer");
		const isDoubleClickActionRef = useRef(false);
		useEffect(() => {
			const container = containerRef.current;
			if (!container) return;
			let lowerFlag = null;
			const onInputStart = (event) => {
				lastInputModalityRef.current = event.type === "pointerdown" ? "pointer" : "keyboard";
				isDoubleClickActionRef.current = false;
				if (event.type === "pointerdown" || event.key === " ") {
					isActivatingRef.current = true;
					if (lowerFlag !== null) clearTimeout(lowerFlag);
					lowerFlag = setTimeout(() => {
						lowerFlag = null;
						isActivatingRef.current = false;
					}, 0);
				}
			};
			const onClick = () => {
				isDoubleClickActionRef.current = false;
			};
			const onDoubleClick = () => {
				isDoubleClickActionRef.current = true;
			};
			container.addEventListener("pointerdown", onInputStart, { capture: true });
			container.addEventListener("keydown", onInputStart, { capture: true });
			container.addEventListener("click", onClick, { capture: true });
			container.addEventListener("dblclick", onDoubleClick, { capture: true });
			return () => {
				container.removeEventListener("pointerdown", onInputStart, { capture: true });
				container.removeEventListener("keydown", onInputStart, { capture: true });
				container.removeEventListener("click", onClick, { capture: true });
				container.removeEventListener("dblclick", onDoubleClick, { capture: true });
				if (lowerFlag !== null) clearTimeout(lowerFlag);
			};
		}, []);
		const expandedRef = useRef(expanded);
		expandedRef.current = expanded;
		const hoistedDataRef = useRef(hoistedData);
		hoistedDataRef.current = hoistedData;
		const setExpandedRef = useRef(setExpanded);
		setExpandedRef.current = setExpanded;
		const selectedStoryIdRef = useRef(selectedStoryId);
		selectedStoryIdRef.current = selectedStoryId;
		const activateRow = useCallback((itemId) => {
			const item = hoistedDataRef.current[itemId];
			if (item && isBranch(item)) setExpanded({
				ids: [itemId],
				append: true,
				value: !expandedRef.current.has(itemId)
			});
			else {
				onSelectStoryId(isStoryRow(item) ? item.storyRowOf : itemId);
				if (isMobile) api.setMobileNavigation(false);
			}
		}, [
			api,
			isMobile,
			onSelectStoryId,
			setExpanded
		]);
		const handleSelectionChange = useCallback((keys) => {
			if (keys === "all") return;
			if (!isActivatingRef.current) return;
			const selectedKey = Array.from(keys)[0];
			if (typeof selectedKey === "string") activateRow(selectedKey);
		}, [activateRow]);
		const handleAction = useCallback((key) => {
			if (isDoubleClickActionRef.current) {
				isDoubleClickActionRef.current = false;
				return;
			}
			activateRow(String(key));
		}, [activateRow]);
		const contextMenuStoreRef = useRef(null);
		contextMenuStoreRef.current ??= createContextMenuStore();
		const openContextMenu = useCallback((itemId, openedBy) => {
			contextMenuStoreRef.current.setState({
				itemId,
				openedBy: openedBy ?? lastInputModalityRef.current
			});
		}, []);
		const closeContextMenu = useCallback(() => contextMenuStoreRef.current.setState(null), []);
		const expandUnder = useCallback((rootId) => {
			const branches = getBranchDescendants(hoistedDataRef.current, rootId);
			setExpandedRef.current({
				ids: branches,
				append: true,
				value: true
			});
		}, []);
		const collapseUnder = useCallback((rootId) => {
			const branches = getBranchDescendants(hoistedDataRef.current, rootId);
			setExpandedRef.current({
				ids: branches,
				append: true,
				value: false
			});
		}, []);
		const rows = useMemo(() => flattenRows(tree, expanded), [tree, expanded]);
		const rowsRef = useRef(rows);
		rowsRef.current = rows;
		const [stickyIds, setStickyIds] = useState([]);
		const stickyIdsRef = useRef([]);
		const hoveredRowRef = useRef(null);
		const selectionLine = useMemo(() => {
			const { ids, offsets, depths, indexById, subtreeBottoms } = rows;
			const parentIndex = selectedParentId === null ? void 0 : indexById.get(selectedParentId);
			if (parentIndex === void 0) return null;
			const firstChildIndex = parentIndex + 1;
			if (depths[firstChildIndex] !== depths[parentIndex] + 1) return null;
			const bottom = subtreeBottoms.get(selectedParentId) ?? 0;
			const rowIds = /* @__PURE__ */ new Set();
			for (let index = firstChildIndex; index < ids.length && offsets[index] < bottom; index += 1) rowIds.add(ids[index]);
			return {
				level: depths[firstChildIndex],
				rowIds
			};
		}, [rows, selectedParentId]);
		const selectionLineStoreRef = useRef(null);
		selectionLineStoreRef.current ??= createSelectionLineStore();
		useEffect(() => {
			selectionLineStoreRef.current.setState(selectionLine);
		}, [selectionLine]);
		useEffect(() => {
			const scroller = scrollerRef?.current;
			const wrapper = treeWrapperRef.current;
			if (!scroller || !wrapper) return;
			let frame = null;
			const update = () => {
				frame = null;
				const stickyRowIds = getStickyRowIds(rowsRef.current, hoistedDataRef.current, scrollTopWithin(scroller, wrapper));
				stickyIdsRef.current = stickyRowIds;
				setStickyIds((current) => current.length === stickyRowIds.length && current.every((id, index) => id === stickyRowIds[index]) ? current : stickyRowIds);
			};
			const scheduleUpdate = () => {
				frame ??= requestAnimationFrame(update);
			};
			update();
			scroller.addEventListener("scroll", scheduleUpdate, { passive: true });
			const resizeObserver = new ResizeObserver(scheduleUpdate);
			resizeObserver.observe(scroller);
			const observeChildren = () => {
				for (const child of scroller.children) resizeObserver.observe(child);
			};
			observeChildren();
			const mutationObserver = new MutationObserver(() => {
				observeChildren();
				scheduleUpdate();
			});
			mutationObserver.observe(scroller, { childList: true });
			return () => {
				scroller.removeEventListener("scroll", scheduleUpdate);
				resizeObserver.disconnect();
				mutationObserver.disconnect();
				if (frame !== null) cancelAnimationFrame(frame);
			};
		}, [rows, scrollerRef]);
		useEffect(() => {
			const wrapper = treeWrapperRef.current;
			if (!wrapper) return;
			let preloadedId = null;
			const setHovered = (next) => {
				const previous = hoveredRowRef.current;
				if (previous?.id === next?.id && previous?.sticky === next?.sticky) return;
				hoveredRowRef.current = next;
				const item = next && !next.sticky ? hoistedDataRef.current[next.id] : void 0;
				if (item && next.id !== preloadedId && isBranch(item)) {
					preloadedId = next.id;
					api.emit(PRELOAD_ENTRIES, {
						ids: [item.children[0]],
						options: { target: refId }
					});
				}
			};
			const onOver = (event) => {
				const target = event.target;
				const sticky = target?.closest?.("[data-sticky-item-id]");
				if (sticky) {
					setHovered({
						id: sticky.getAttribute("data-sticky-item-id"),
						sticky: true
					});
					return;
				}
				const row = target?.closest?.("[data-item-id]");
				setHovered(row ? {
					id: row.getAttribute("data-item-id"),
					sticky: false
				} : null);
			};
			const onLeave = () => setHovered(null);
			wrapper.addEventListener("mouseover", onOver, { passive: true });
			wrapper.addEventListener("mouseleave", onLeave);
			return () => {
				wrapper.removeEventListener("mouseover", onOver);
				wrapper.removeEventListener("mouseleave", onLeave);
			};
		}, [api, refId]);
		const scrollRowIntoView = useCallback((itemId, block) => {
			const scroller = scrollerRef?.current;
			const wrapper = treeWrapperRef.current;
			if (!scroller || !wrapper) return false;
			const { offsets, indexById } = rowsRef.current;
			const index = indexById.get(itemId);
			if (index === void 0) return false;
			const offset = treeTopWithin(scroller, wrapper) + offsets[index];
			const stack = getAncestorIds$1(hoistedDataRef.current, itemId).length * 28;
			const bottomInset = parseFloat(getComputedStyle(scroller).paddingBottom) || 0;
			const viewTop = scroller.scrollTop + stack;
			const viewBottom = scroller.scrollTop + scroller.clientHeight - bottomInset - 28;
			if (block === "center" || block === "center-if-hidden" && (offset < viewTop || offset > viewBottom)) {
				scroller.scrollTop = offset - Math.max((scroller.clientHeight - bottomInset - 28) / 2, stack);
				return true;
			}
			if (block === "nearest") {
				if (offset < viewTop) scroller.scrollTop = offset - stack;
				else if (offset > viewBottom) scroller.scrollTop = offset + 28 + bottomInset - scroller.clientHeight;
			}
			return true;
		}, [scrollerRef]);
		useEffect(() => {
			if (focusedItemId && lastInputModalityRef.current === "keyboard") scrollRowIntoView(focusedItemId, "nearest");
		}, [focusedItemId, scrollRowIntoView]);
		useEffect(() => {
			let frame = null;
			const handler = () => {
				const focusInAnyTree = !!document.activeElement?.closest("[data-item-id]");
				const itemId = focusedItemIdRef.current ?? (focusInAnyTree ? null : selectedStoryIdRef.current);
				if (!itemId) return;
				const openWhenVisible = () => {
					const scroller = containerRef.current;
					const rowRect = (scroller?.querySelector(`[data-item-id="${CSS.escape(itemId)}"]`))?.getBoundingClientRect();
					const scrollerRect = scroller?.getBoundingClientRect();
					if (rowRect && scrollerRect && rowRect.top >= scrollerRect.top && rowRect.bottom <= scrollerRect.bottom) {
						openContextMenu(itemId, "keyboard");
						return;
					}
					scrollRowIntoView(itemId, "center");
					frame = requestAnimationFrame(() => {
						frame = null;
						openContextMenu(itemId, "keyboard");
					});
				};
				const folded = getAncestorIds$1(hoistedDataRef.current, itemId).filter((id) => !expandedRef.current.has(id));
				if (folded.length === 0) {
					openWhenVisible();
					return;
				}
				setExpanded({
					ids: folded,
					value: true,
					append: true
				});
				frame = requestAnimationFrame(() => {
					frame = null;
					openWhenVisible();
				});
			};
			api.on(SIDEBAR_OPEN_CONTEXT_MENU, handler);
			return () => {
				api.off(SIDEBAR_OPEN_CONTEXT_MENU, handler);
				if (frame !== null) cancelAnimationFrame(frame);
			};
		}, [
			api,
			openContextMenu,
			scrollRowIntoView,
			setExpanded
		]);
		const lastScrolledIdRef = useRef(null);
		useEffect(() => {
			if (!selectedRowId || lastScrolledIdRef.current === selectedRowId) return;
			if (scrollRowIntoView(selectedRowId, "center-if-hidden")) lastScrolledIdRef.current = selectedRowId;
		}, [
			selectedRowId,
			expanded,
			scrollRowIntoView
		]);
		const needsInitialCenterRef = useRef(selectedRowId != null);
		useEffect(() => {
			if (!needsInitialCenterRef.current || !selectedRowId) return;
			if (scrollRowIntoView(selectedRowId, "center")) {
				needsInitialCenterRef.current = false;
				lastScrolledIdRef.current = selectedRowId;
			}
		}, [
			selectedRowId,
			expanded,
			scrollRowIntoView
		]);
		const collectionDependencies = useMemo(() => [expanded, hasTestProviders], [expanded, hasTestProviders]);
		const nodeRenderer = useMemo(() => renderNode({
			api,
			refId,
			onSelectStoryId,
			expanded,
			sectionStartIds: rows.sectionStartIds,
			labelContext,
			shortcutKeys,
			openContextMenu,
			closeContextMenu,
			hasTestProviders,
			onRowFocus: reportRowFocus,
			collectionDependencies,
			hoistedDataRef,
			expandUnder,
			collapseUnder
		}), [
			api,
			refId,
			onSelectStoryId,
			expanded,
			rows.sectionStartIds,
			labelContext,
			shortcutKeys,
			openContextMenu,
			closeContextMenu,
			hasTestProviders,
			reportRowFocus,
			collectionDependencies,
			expandUnder,
			collapseUnder
		]);
		const treeLayout = useMemo(() => new TreeRowLayout(), []);
		treeLayout.setRows(rows);
		const treeLayoutOptions = useMemo(() => ({ rows }), [rows]);
		const collapseStickyRow = useCallback((itemId) => setExpanded({
			ids: [itemId],
			append: true,
			value: false
		}), [setExpanded]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(StatusStoreContext.Provider, { value: statusStoreRef.current }, /* @__PURE__ */ _storybook_global_react_default.createElement(ContextMenuStoreContext.Provider, { value: contextMenuStoreRef.current }, /* @__PURE__ */ _storybook_global_react_default.createElement(SelectionLineStoreContext.Provider, { value: selectionLineStoreRef.current }, /* @__PURE__ */ _storybook_global_react_default.createElement(TreeWrapper, { ref: treeWrapperRef }, /* @__PURE__ */ _storybook_global_react_default.createElement(TreeStickyRows, {
			ids: stickyIds,
			data: hoistedData,
			api,
			labelContext,
			scrollerRef,
			wrapperRef: treeWrapperRef,
			rowsRef,
			accentId: keyboardFocusedItemId,
			selectionLine,
			onCollapse: collapseStickyRow,
			openContextMenu,
			hasTestProviders
		}), /* @__PURE__ */ _storybook_global_react_default.createElement($143fb904d86051ce$export$89be5a243e59c4b2, {
			layout: treeLayout,
			layoutOptions: treeLayoutOptions
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(StyledAriaTree, {
			ref: containerRef,
			"aria-label": "Stories",
			selectionMode: "single",
			selectionBehavior: "replace",
			disallowEmptySelection: true,
			escapeKeyBehavior: "none",
			expandedKeys: expanded,
			onExpandedChange: handleExpandedChange,
			selectedKeys,
			onSelectionChange: handleSelectionChange,
			onAction: handleAction
		}, /* @__PURE__ */ _storybook_global_react_default.createElement($42ceafc619f9c3ba$export$fb8073518f34e6ec, {
			items: tree,
			dependencies: collectionDependencies
		}, nodeRenderer)))), focusedItemShortcutLabel && /* @__PURE__ */ _storybook_global_react_default.createElement(FocusTooltipNote, {
			note: focusedItemShortcutLabel,
			shortcut: contextMenuShortcut
		}))));
	});
	EMPTY_KEYS = /* @__PURE__ */ new Set();
}));
//#endregion
//#region src/manager/components/sidebar/Refs.tsx
var Wrapper$2, RefHead, RefTitle, CollapseButton, RefBookIcon, Ref;
var init_Refs = __esmMin((() => {
	init__storybook_global_react();
	init_icons();
	init_manager_api();
	init_emotion();
	init_story_index_filters();
	init_tree();
	init_RefBlocks();
	init_RefIndicator();
	init_Sidebar();
	init_Tree();
	init_CollapseIcon();
	init_treeRowStyles();
	Wrapper$2 = styled.div({
		display: "flex",
		flexDirection: "column",
		position: "relative"
	});
	RefHead = styled.div(({ theme }) => ({
		position: "relative",
		display: "flex",
		alignItems: "center",
		background: "transparent",
		minHeight: 28,
		borderRadius: 4,
		width: "100%",
		marginTop: 28,
		color: theme.color.defaultText,
		"&:hover, &:has(button:focus-visible)": {
			background: theme.background.hoverable,
			color: theme.barHoverColor
		},
		...iconSwap(["&:hover", "&:has(button:focus-visible)"])
	}));
	RefTitle = styled.span(({ theme }) => ({
		...truncatedLabel,
		fontSize: theme.typography.size.s2
	}));
	CollapseButton = styled.button(({ theme }) => ({
		all: "unset",
		display: "flex",
		alignItems: "center",
		flex: "1 1 auto",
		minHeight: 28,
		paddingInlineStart: 7,
		gap: 6,
		cursor: "pointer",
		overflow: "hidden",
		borderRadius: 4,
		boxSizing: "border-box",
		"&:focus-visible": {
			outline: "none",
			boxShadow: `0 0 0 2px ${theme.background.app}, 0 0 0 4px ${theme.color.secondary}`
		}
	}));
	RefBookIcon = styled(BookIcon)({
		width: 14,
		height: 14,
		flex: "0 0 auto",
		color: "currentColor"
	});
	Ref = _storybook_global_react_default.memo(function Ref(props) {
		const api = useStorybookApi();
		const storybookState = useStorybookState();
		const { filteredIndex: index, id: refId, title = refId, isLoading: isLoadingMain, hasEntries, selectedStoryId, loginUrl, type, expanded = true, indexError, previewInitialized, allStatuses } = props;
		const length = useMemo(() => index ? Object.keys(index).length : 0, [index]);
		const indicatorRef = useRef(null);
		const isMain = refId === DEFAULT_REF_ID;
		const isLoading = isLoadingMain || type === "auto-inject" && !previewInitialized || type === "server-checked" || type === "unknown";
		const isError = !!indexError;
		const isEmpty = !isLoading && length === 0;
		const isAuthRequired = !!loginUrl && length === 0;
		const activeFilterCount = getActiveFilterCount(storybookState);
		const state = getStateType(isLoading, isAuthRequired, isError, isEmpty);
		const [isExpanded, setExpanded] = useState(expanded);
		useEffect(() => {
			if (index && selectedStoryId && index[selectedStoryId]) setExpanded(true);
		}, [index, selectedStoryId]);
		const handleClick = useCallback(() => setExpanded((value) => !value), []);
		const onSelectStoryId = useCallback((storyId) => api.selectStory(storyId, void 0, { ref: isMain ? void 0 : refId }), [
			api,
			isMain,
			refId
		]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, isMain || /* @__PURE__ */ _storybook_global_react_default.createElement(RefHead, null, /* @__PURE__ */ _storybook_global_react_default.createElement(CollapseButton, {
			"data-action": "collapse-ref",
			onClick: handleClick,
			"aria-label": `${isExpanded ? "Hide" : "Show"} ${title} stories`,
			"aria-expanded": isExpanded
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("span", { className: "static-only" }, /* @__PURE__ */ _storybook_global_react_default.createElement(RefBookIcon, null)), /* @__PURE__ */ _storybook_global_react_default.createElement("span", { className: "hover-only" }, /* @__PURE__ */ _storybook_global_react_default.createElement(CollapseIcon, { isExpanded })), /* @__PURE__ */ _storybook_global_react_default.createElement(RefTitle, { title }, title)), /* @__PURE__ */ _storybook_global_react_default.createElement(RefIndicator, {
			...props,
			state,
			ref: indicatorRef
		})), isExpanded && /* @__PURE__ */ _storybook_global_react_default.createElement(Wrapper$2, { "data-title": title }, state === "auth" && /* @__PURE__ */ _storybook_global_react_default.createElement(AuthBlock, {
			id: refId,
			loginUrl
		}), state === "error" && /* @__PURE__ */ _storybook_global_react_default.createElement(ErrorBlock, { error: indexError }), state === "loading" && /* @__PURE__ */ _storybook_global_react_default.createElement(LoaderBlock, { isMain }), state === "empty" && /* @__PURE__ */ _storybook_global_react_default.createElement(EmptyBlock, {
			isMain,
			hasEntries,
			activeFilterCount
		}), state === "ready" && index && /* @__PURE__ */ _storybook_global_react_default.createElement(Tree, {
			allStatuses,
			includedStatusFilters: storybookState.includedStatusFilters,
			refId,
			data: index,
			selectedStoryId,
			onSelectStoryId
		})));
	});
}));
//#endregion
//#region src/manager/components/sidebar/Explorer.tsx
var Explorer;
var init_Explorer = __esmMin((() => {
	init__storybook_global_react();
	init_useLandmark();
	init_Refs();
	init_SidebarScrollArea();
	Explorer = _storybook_global_react_default.memo(function Explorer({ hasEntries, isLoading, isBrowsing, isHidden, dataset, selected, ...restProps }) {
		const containerRef = useRef(null);
		const { landmarkProps } = useLandmark({
			"aria-labelledby": "storybook-explorer-tree-heading",
			role: "navigation"
		}, containerRef);
		return /* @__PURE__ */ _storybook_global_react_default.createElement("nav", {
			hidden: isHidden || void 0,
			"aria-hidden": isHidden || void 0,
			className: isBrowsing ? void 0 : "sb-sr-only",
			ref: containerRef,
			id: "storybook-explorer-tree",
			style: {
				flex: "1 1 auto",
				minHeight: 0,
				display: "flex",
				flexDirection: "column"
			},
			...landmarkProps,
			...restProps
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("h2", {
			id: "storybook-explorer-tree-heading",
			className: "sb-sr-only"
		}, "Stories"), /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarScrollArea, null, dataset.entries.map(([refId, ref]) => /* @__PURE__ */ _storybook_global_react_default.createElement(Ref, {
			...ref,
			key: refId,
			isLoading,
			hasEntries,
			selectedStoryId: selected && selected.refId === ref.id ? selected.storyId : null
		}))));
	});
}));
//#endregion
//#region src/manager/components/sidebar/FilterPanelLink.tsx
var MutedText, StatusIcon, createFilterLink;
var init_FilterPanelLink = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_icons();
	init_emotion();
	MutedText = styled.span(({ theme }) => ({ color: theme.textMutedColor }));
	StatusIcon = styled.span({
		display: "contents",
		"> svg": { transform: "scale(1.3)" }
	});
	createFilterLink = ({ id, type, title, tooltip, count, icon, isIncluded, isExcluded, onCheckboxChange, onInvert }) => {
		const isChecked = isIncluded || isExcluded;
		const toggleLabel = `${type} filter: ${isExcluded ? `exclude ${title}` : title}`;
		const toggleTooltip = tooltip ?? `${isChecked ? "Remove" : "Add"} ${type} filter: ${title}`;
		const invertButtonLabel = `${isExcluded ? "Include" : "Exclude"} ${type}: ${title}`;
		return {
			id: `filter-${type}-${id}`,
			content: /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.HoverItem, { targetId: `filter-${type}-${id}` }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
				as: "label",
				ariaLabel: false,
				tabIndex: -1,
				tooltip: toggleTooltip
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, isExcluded ? /* @__PURE__ */ _storybook_global_react_default.createElement(DeleteIcon, null) : isIncluded ? null : icon, /* @__PURE__ */ _storybook_global_react_default.createElement(Form.Checkbox, {
				checked: isChecked,
				onChange: onCheckboxChange,
				"data-tag": title,
				"aria-label": toggleLabel
			})), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, title, isExcluded && /* @__PURE__ */ _storybook_global_react_default.createElement(MutedText, null, " (excluded)"))), isExcluded ? /* @__PURE__ */ _storybook_global_react_default.createElement("s", null, count) : /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, count)), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
				"data-target-id": `filter-${type}-${id}`,
				ariaLabel: invertButtonLabel,
				onClick: onInvert
			}, /* @__PURE__ */ _storybook_global_react_default.createElement("span", { style: { minWidth: 45 } }, isExcluded ? "Include" : "Exclude")))
		};
	};
}));
//#endregion
//#region src/manager/components/sidebar/FilterPanel.utils.ts
var BUILT_IN_TAGS, STATUS_DISPLAY_ORDER, areFiltersEqual, getFilterFunction;
var init_FilterPanel_utils = __esmMin((() => {
	init_tags();
	init_status_store();
	BUILT_IN_TAGS = /* @__PURE__ */ new Set([
		"dev",
		"test",
		"autodocs",
		"attached-mdx",
		"unattached-mdx",
		"play-fn",
		"test-fn",
		"manifest"
	]);
	STATUS_DISPLAY_ORDER = [
		"status-value:new",
		"status-value:modified",
		"status-value:affected",
		"status-value:reviewing"
	];
	areFiltersEqual = (left, right) => left.length === right.length && (/* @__PURE__ */ new Set([...left, ...right])).size === left.length;
	getFilterFunction = (tag) => {
		if (Object.hasOwn(BUILT_IN_FILTERS, tag)) return BUILT_IN_FILTERS[tag];
		else return USER_TAG_FILTER(tag);
	};
}));
//#endregion
//#region src/manager/components/sidebar/useFilterData.tsx
function useTagFilterEntries(indexJson) {
	const tagOptions = scope.TAGS_OPTIONS;
	return useMemo(() => {
		const entries = Object.values(indexJson.entries);
		const userTagsCounts = entries.reduce((acc, entry) => {
			entry.tags?.forEach((tag) => {
				if (!BUILT_IN_TAGS.has(tag) && !tagOptions?.[tag]?.hideFromFilterPanel) acc[tag] = (acc[tag] || 0) + 1;
			});
			return acc;
		}, {});
		const tagEntries = Object.entries(userTagsCounts).map(([tag, count]) => ({
			id: tag,
			type: "tag",
			title: tag,
			count,
			icon: null
		}));
		const getBuiltInCount = (filterFn) => entries.filter((entry) => filterFn?.(entry)).length;
		return {
			builtInEntries: BUILT_IN_FILTER_DEFS.map((def) => ({
				id: def.id,
				type: "built-in",
				title: def.title,
				icon: def.icon,
				count: getBuiltInCount(getFilterFunction(def.tag))
			})),
			tagEntries
		};
	}, [indexJson.entries, tagOptions]);
}
function useStatusFilterEntries(allStatuses) {
	return useMemo(() => {
		const counts = countStatusesByValue(allStatuses);
		return STATUS_DISPLAY_ORDER.map((statusValue) => ({
			statusValue,
			shortName: statusValueShortName(statusValue),
			description: statusValueDescription(statusValue),
			count: counts[statusValue] ?? 0
		})).filter((entry) => entry.statusValue !== "status-value:reviewing" || entry.count > 0);
	}, [allStatuses]);
}
var BUILT_IN_FILTER_DEFS;
var init_useFilterData = __esmMin((() => {
	init__storybook_global_react();
	init_dist();
	init_icons();
	init_emotion();
	init_FilterPanel_utils();
	BUILT_IN_FILTER_DEFS = [
		{
			id: "_docs",
			title: "Documentation",
			icon: /* @__PURE__ */ _storybook_global_react_default.createElement(DocumentIcon, { color: color.gold }),
			tag: "_docs"
		},
		{
			id: "_play",
			title: "Play",
			icon: /* @__PURE__ */ _storybook_global_react_default.createElement(PlayHollowIcon, { color: color.seafoam }),
			tag: "_play"
		},
		{
			id: "_test",
			title: "Testing",
			icon: /* @__PURE__ */ _storybook_global_react_default.createElement(BeakerIcon, { color: color.green }),
			tag: "_test"
		}
	];
}));
//#endregion
//#region src/manager/components/sidebar/FilterPanel.tsx
var Wrapper$1, FilterPanel;
var init_FilterPanel = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_icons();
	init_emotion();
	init_status();
	init_FilterPanelLink();
	init_FilterPanel_utils();
	init_useFilterData();
	Wrapper$1 = styled.div({
		minWidth: 240,
		maxWidth: 300,
		maxHeight: 504,
		overflow: "hidden",
		overflowY: "auto",
		scrollbarWidth: "thin"
	});
	FilterPanel = ({ api, indexJson, defaultIncludedFilters, defaultExcludedFilters, includedFilters, excludedFilters, allStatuses, includedStatusFilters, excludedStatusFilters }) => {
		const theme = useTheme();
		const { builtInEntries, tagEntries } = useTagFilterEntries(indexJson);
		const statusEntries = useStatusFilterEntries(allStatuses);
		const toTagFilterItem = useCallback((entry) => {
			if (entry.count === 0 && entry.type === "built-in") return null;
			const isIncluded = includedFilters.includes(entry.id);
			const isExcluded = excludedFilters.includes(entry.id);
			const isChecked = isIncluded || isExcluded;
			return {
				id: entry.id,
				type: entry.type,
				title: entry.title,
				count: entry.count,
				icon: entry.icon,
				isIncluded,
				isExcluded,
				onCheckboxChange: () => {
					if (isChecked) api.removeTagFilters([entry.id]);
					else api.addTagFilters([entry.id], false);
				},
				onInvert: () => api.addTagFilters([entry.id], !isExcluded)
			};
		}, [
			api,
			includedFilters,
			excludedFilters
		]);
		const toStatusFilterItem = useCallback((entry) => {
			const isRelated = entry.statusValue === "status-value:affected";
			const shortName = isRelated ? "related" : entry.shortName;
			const isIncluded = includedStatusFilters.includes(entry.statusValue);
			const isExcluded = excludedStatusFilters.includes(entry.statusValue);
			const isChecked = isIncluded || isExcluded;
			const { icon: statusIconEl } = getStatus(theme, entry.statusValue);
			const icon = isRelated ? /* @__PURE__ */ _storybook_global_react_default.createElement("span", { "aria-hidden": "true" }) : statusIconEl ? /* @__PURE__ */ _storybook_global_react_default.createElement(StatusIcon, null, statusIconEl) : null;
			return {
				id: shortName,
				type: "status",
				title: shortName.charAt(0).toUpperCase() + shortName.slice(1),
				tooltip: entry.description,
				count: entry.count,
				icon,
				isIncluded,
				isExcluded,
				onCheckboxChange: () => {
					if (isChecked) api.removeStatusFilters([entry.statusValue]);
					else api.addStatusFilters([entry.statusValue], false);
				},
				onInvert: () => api.addStatusFilters([entry.statusValue], !isExcluded)
			};
		}, [
			api,
			includedStatusFilters,
			excludedStatusFilters,
			theme
		]);
		const builtInItems = useMemo(() => builtInEntries.sort((a, b) => a.id.localeCompare(b.id)).map(toTagFilterItem).filter((f) => f !== null), [builtInEntries, toTagFilterItem]);
		const tagItems = useMemo(() => tagEntries.sort((a, b) => a.id.localeCompare(b.id)).map(toTagFilterItem).filter((f) => f !== null), [tagEntries, toTagFilterItem]);
		const statusItems = useMemo(() => statusEntries.map(toStatusFilterItem), [statusEntries, toStatusFilterItem]);
		const changeDetectionStatusItems = useMemo(() => statusItems.filter((item) => item.id !== "reviewing"), [statusItems]);
		const reviewingStatusItems = useMemo(() => statusItems.filter((item) => item.id === "reviewing"), [statusItems]);
		const filterIds = useMemo(() => [...builtInEntries.map((e) => e.id), ...tagEntries.map((e) => e.id)], [builtInEntries, tagEntries]);
		const setAllFilters = useCallback((selected) => api.setAllTagFilters(selected ? filterIds : [], []), [api, filterIds]);
		const isDefaultSelection = areFiltersEqual(includedFilters, defaultIncludedFilters) && areFiltersEqual(excludedFilters, defaultExcludedFilters);
		const hasDefaultSelection = defaultIncludedFilters.length > 0 || defaultExcludedFilters.length > 0;
		const isNothingSelectedYet = includedFilters.length === 0 && excludedFilters.length === 0 && includedStatusFilters.length === 0 && excludedStatusFilters.length === 0;
		const hasItems = builtInItems.length > 0 || tagItems.length > 0;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Wrapper$1, null, hasItems && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, { as: "div" }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, { as: "div" }, isNothingSelectedYet ? /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
			ariaLabel: false,
			id: "select-all",
			key: "select-all",
			onClick: () => setAllFilters(true)
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(BatchAcceptIcon, null), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, "Select all")) : /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
			ariaLabel: false,
			id: "deselect-all",
			key: "deselect-all",
			onClick: async () => {
				await setAllFilters(false);
				await api.resetStatusFilters();
			}
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(SweepIcon, null), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, "Clear filters")), hasDefaultSelection && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
			id: "reset-filters",
			key: "reset-filters",
			onClick: () => api.resetTagFilters(),
			ariaLabel: "Reset filters",
			tooltip: "Reset to default selection",
			disabled: isDefaultSelection
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(UndoIcon, null)))), reviewingStatusItems.length > 0 && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, null, reviewingStatusItems.map((item) => {
			const link = createFilterLink(item);
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Fragment, { key: link.id }, link.content);
		})), builtInItems.length > 0 && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, null, builtInItems.map((item) => {
			const link = createFilterLink(item);
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Fragment, { key: link.id }, link.content);
		})), changeDetectionStatusItems.length > 0 && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, null, changeDetectionStatusItems.map((item) => {
			const link = createFilterLink(item);
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Fragment, { key: link.id }, link.content);
		})), tagItems.length > 0 && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, null, tagItems.map((item) => {
			const link = createFilterLink(item);
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Fragment, { key: link.id }, link.content);
		})), tagItems.length === 0 && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, { as: "div" }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, { as: "div" }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Link, {
			ariaLabel: false,
			href: api.getDocsUrl({ subpath: "writing-stories/tags#custom-tags" }),
			target: "_blank"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(DocumentIcon, null)), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, "Learn how to add tags")), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ShareAltIcon, null))))));
	};
}));
//#endregion
//#region src/manager/components/sidebar/Filter.tsx
var StyledButton, TagSelected, filterMapper, FilterInner, Filter;
var init_Filter = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_icons();
	init_manager_api();
	init_emotion();
	init_story_index_filters();
	init_FilterPanel();
	StyledButton = styled(Button)(({ $isHighlighted, theme }) => ({
		"&:focus-visible": { outlineOffset: 4 },
		...$isHighlighted && {
			background: theme.background.hoverable,
			color: theme.color.secondary
		}
	}));
	TagSelected = styled(Badge)(({ theme }) => ({
		position: "absolute",
		top: 7,
		right: 7,
		transform: "translate(50%, -50%)",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		padding: 3,
		height: 6,
		minWidth: 6,
		lineHeight: "px",
		boxShadow: `${theme.barSelectedColor} 0 0 0 1px inset`,
		fontSize: theme.typography.size.s1 - 1,
		background: theme.barSelectedColor,
		color: theme.color.inverseText
	}));
	filterMapper = ({ api, state }) => ({
		api,
		indexJson: state.internal_index,
		activeFilterCount: getActiveFilterCount(state),
		defaultIncludedFilters: state.defaultIncludedTagFilters,
		defaultExcludedFilters: state.defaultExcludedTagFilters,
		includedFilters: state.includedTagFilters,
		excludedFilters: state.excludedTagFilters,
		includedStatusFilters: state.includedStatusFilters ?? [],
		excludedStatusFilters: state.excludedStatusFilters ?? []
	});
	FilterInner = ({ api, indexJson, activeFilterCount, defaultIncludedFilters, defaultExcludedFilters, includedFilters, excludedFilters, includedStatusFilters, excludedStatusFilters }) => {
		const [expanded, setExpanded] = useState(false);
		const allStatuses = experimental_useStatusStore();
		const handleToggleExpand = useCallback((event) => {
			event.preventDefault();
			setExpanded(!expanded);
		}, [expanded]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(PopoverProvider, {
			ariaLabel: "Tag filters",
			placement: "bottom",
			onVisibleChange: setExpanded,
			offset: 8,
			padding: 0,
			popover: () => /* @__PURE__ */ _storybook_global_react_default.createElement(FilterPanel, {
				api,
				indexJson,
				defaultIncludedFilters,
				defaultExcludedFilters,
				includedFilters,
				excludedFilters,
				allStatuses,
				includedStatusFilters,
				excludedStatusFilters
			})
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(StyledButton, {
			key: "tags",
			ariaLabel: activeFilterCount ? `${activeFilterCount} active tag ${activeFilterCount !== 1 ? "filters" : "filter"}` : "Tag filters",
			ariaDescription: "Filter the items shown in a sidebar based on the tags applied to them.",
			variant: "ghost",
			padding: "small",
			$isHighlighted: activeFilterCount > 0,
			onClick: handleToggleExpand
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(FilterIcon, null), activeFilterCount > 0 && /* @__PURE__ */ _storybook_global_react_default.createElement(TagSelected, null)));
	};
	Filter = () => /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: filterMapper }, ({ api, indexJson, activeFilterCount, defaultIncludedFilters, defaultExcludedFilters, includedFilters, excludedFilters, includedStatusFilters, excludedStatusFilters }) => indexJson ? /* @__PURE__ */ _storybook_global_react_default.createElement(FilterInner, {
		api,
		indexJson,
		activeFilterCount,
		defaultIncludedFilters,
		defaultExcludedFilters,
		includedFilters,
		excludedFilters,
		includedStatusFilters,
		excludedStatusFilters
	}) : null);
}));
//#endregion
//#region src/manager/components/sidebar/Brand.tsx
var StorybookLogoStyled, Img, LogoLink, Brand;
var init_Brand = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_emotion();
	StorybookLogoStyled = styled(StorybookLogo)(({ theme }) => ({
		width: "auto",
		height: "22px !important",
		display: "block",
		color: theme.base === "light" ? theme.color.defaultText : theme.color.lightest
	}));
	Img = styled.img({
		display: "block",
		maxWidth: "150px !important",
		maxHeight: "100px"
	});
	LogoLink = styled.a(({ theme }) => ({
		display: "inline-flex",
		alignItems: "center",
		height: "100%",
		margin: "-3px -4px",
		padding: "2px 3px",
		border: "1px solid transparent",
		borderRadius: 3,
		color: "inherit",
		textDecoration: "none",
		"&:focus-visible": {
			outline: `2px solid ${theme.color.secondary}`,
			outlineOffset: 2
		}
	}));
	Brand = withTheme(({ theme }) => {
		const { title = "Storybook", url = "./", image, target } = theme.brand;
		const targetValue = target || (url === "./" ? "" : "_blank");
		if (image === null) {
			if (title === null) return null;
			if (!url) return /* @__PURE__ */ _storybook_global_react_default.createElement("div", { dangerouslySetInnerHTML: { __html: title } });
			return /* @__PURE__ */ _storybook_global_react_default.createElement(LogoLink, {
				href: url,
				target: targetValue,
				dangerouslySetInnerHTML: { __html: title }
			});
		}
		const logo = image ? /* @__PURE__ */ _storybook_global_react_default.createElement(Img, {
			src: image,
			alt: title
		}) : /* @__PURE__ */ _storybook_global_react_default.createElement(StorybookLogoStyled, { alt: title });
		if (url) return /* @__PURE__ */ _storybook_global_react_default.createElement(LogoLink, {
			title,
			href: url,
			target: targetValue
		}, logo);
		return /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, logo);
	});
}));
//#endregion
//#region src/manager/components/sidebar/Heading.tsx
var BrandArea, HeadingWrapper, SkipToCanvasLink, Heading;
var init_Heading = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_emotion();
	init_Brand();
	init_Menu();
	BrandArea = styled.div(({ theme }) => ({
		fontSize: theme.typography.size.s2,
		fontWeight: theme.typography.weight.bold,
		color: theme.color.defaultText,
		marginRight: 20,
		display: "flex",
		width: "100%",
		alignItems: "center",
		minHeight: 22,
		"& > * > *": { maxWidth: "100%" },
		"& > *": {
			maxWidth: "100%",
			height: "auto",
			display: "block",
			flex: "1 1 auto"
		}
	}));
	HeadingWrapper = styled.div({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		position: "relative",
		minHeight: 42,
		paddingLeft: 8
	});
	SkipToCanvasLink = styled(Button)(({ theme }) => ({
		display: "none",
		"@media (min-width: 600px)": {
			display: "block",
			position: "absolute",
			fontSize: theme.typography.size.s1,
			border: 0,
			width: 1,
			height: 1,
			padding: 0,
			margin: -1,
			overflow: "hidden",
			clip: "rect(0, 0, 0, 0)",
			whiteSpace: "nowrap",
			wordWrap: "normal",
			opacity: 0,
			transition: "opacity 150ms ease-out",
			"&:focus": {
				width: "100%",
				height: "inherit",
				padding: "10px 15px",
				margin: 0,
				clip: "unset",
				overflow: "unset",
				opacity: 1,
				zIndex: 3
			}
		}
	}));
	Heading = ({ menuHighlighted = false, menu, skipLinkHref, isLoading, onMenuClick, ...props }) => {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(HeadingWrapper, props, skipLinkHref && /* @__PURE__ */ _storybook_global_react_default.createElement(SkipToCanvasLink, {
			ariaLabel: false,
			asChild: true
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("a", {
			href: skipLinkHref,
			tabIndex: 0
		}, "Skip to content")), /* @__PURE__ */ _storybook_global_react_default.createElement(BrandArea, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Brand, null)), /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarMenu, {
			menu,
			isHighlighted: menuHighlighted,
			onClick: onMenuClick
		}));
	};
}));
//#endregion
//#region src/manager/components/sidebar/ReviewWidget.tsx
var HEADING_ID, Region, HeaderContent, HeaderTitle, AgenticIcon, DismissButton, DismissIcon, useActiveReviewStoryCount, useActiveReviewTitle, ReviewWidget;
var init_ReviewWidget = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_icons();
	init_manager_api();
	init_emotion();
	init_useLandmark();
	init_review_context();
	init_review_status();
	HEADING_ID = "storybook-review-widget-heading";
	Region = styled.section({ width: "100%" });
	HeaderContent = styled(ActionList.Text)({
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		gap: 6,
		paddingRight: 24
	});
	HeaderTitle = styled.h2(({ theme }) => ({
		margin: 0,
		color: theme.color.defaultText,
		fontWeight: theme.typography.weight.bold,
		fontSize: theme.typography.size.s1,
		lineHeight: `${theme.typography.size.s3}px`
	}));
	AgenticIcon = styled(WandIcon)(({ theme }) => ({ color: theme.fgColor.agentic }));
	DismissButton = styled(ActionList.Button)({
		position: "absolute",
		top: 4,
		right: 4,
		zIndex: 1
	});
	DismissIcon = styled(CloseAltIcon)({ padding: 1 });
	useActiveReviewStoryCount = () => {
		const { review } = useReviewContext();
		return useMemo(() => review ? collectReviewStoryIds(review).size : 0, [review]);
	};
	useActiveReviewTitle = () => {
		const { review } = useReviewContext();
		return review?.title ?? null;
	};
	ReviewWidget = () => {
		const api = useStorybookApi();
		const { openSummary, dismiss } = useReviewContext();
		const storyCount = useActiveReviewStoryCount();
		const reviewTitle = useActiveReviewTitle();
		const regionRef = useRef(null);
		const { landmarkProps } = useLandmark({
			role: "region",
			"aria-labelledby": HEADING_ID
		}, regionRef);
		if (!api.getIsNavShown()) return null;
		if (storyCount === 0) return null;
		const onOpen = () => {
			openSummary();
		};
		const onDismiss = (event) => {
			event.stopPropagation();
			dismiss();
		};
		const storyLabel = storyCount === 1 ? "story" : "stories";
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Region, {
			ref: regionRef,
			...landmarkProps
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(Card, {
			color: "agentic",
			outlineAnimation: "spin",
			id: "storybook-review-widget"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, { as: "div" }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, { as: "div" }, /* @__PURE__ */ _storybook_global_react_default.createElement(HeaderContent, null, /* @__PURE__ */ _storybook_global_react_default.createElement(AgenticIcon, { "aria-hidden": true }), /* @__PURE__ */ _storybook_global_react_default.createElement(HeaderTitle, { id: HEADING_ID }, "Quick review")))), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, { as: "div" }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, { as: "div" }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
			ariaLabel: reviewTitle ? `Review ${storyCount} ${storyLabel}: ${reviewTitle}` : `Review ${storyCount} ${storyLabel}`,
			disableAllTooltips: true,
			appearance: "agentic",
			onClick: onOpen
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Review ", storyCount, " ", storyLabel), reviewTitle ? /* @__PURE__ */ _storybook_global_react_default.createElement("small", null, reviewTitle) : null)))), /* @__PURE__ */ _storybook_global_react_default.createElement(DismissButton, {
			appearance: "agentic",
			ariaLabel: "Dismiss review",
			onClick: onDismiss
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(DismissIcon, null))));
	};
}));
//#endregion
//#region src/manager/components/sidebar/types.ts
function isExpandType(x) {
	return !!(x && x.showAll);
}
function isSearchResult(x) {
	return !!(x && x.item);
}
var init_types = __esmMin((() => {}));
//#endregion
//#region src/manager/components/sidebar/Search.tsx
var import_fuse, document$2, DEFAULT_MAX_SEARCH_RESULTS, options, SearchBar, ScreenReaderLabel, SearchField, IconWrapper$1, Input, FocusKey, FocusKeyCmd, Actions, FocusContainer, Search;
var init_Search = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_types$1();
	init_dist();
	init_icons();
	init_downshift_esm();
	import_fuse = /* @__PURE__ */ __toESM(require_fuse(), 1);
	init_manager_api();
	init_emotion();
	init_useLandmark();
	init_status();
	init_tree();
	init_LayoutProvider();
	init_Sidebar();
	init_types();
	({document: document$2} = scope);
	DEFAULT_MAX_SEARCH_RESULTS = 50;
	options = {
		shouldSort: true,
		tokenize: true,
		findAllMatches: true,
		includeScore: true,
		includeMatches: true,
		threshold: .2,
		location: 0,
		distance: 100,
		maxPatternLength: 32,
		minMatchCharLength: 1,
		keys: [
			{
				name: "name",
				weight: .6
			},
			{
				name: "path",
				weight: .3
			},
			{
				name: "anchors.title",
				weight: .1
			}
		]
	};
	SearchBar = styled.div({
		display: "flex",
		flexDirection: "row"
	});
	ScreenReaderLabel = styled.label({
		position: "absolute",
		left: -1e4,
		top: "auto",
		width: 1,
		height: 1,
		overflow: "hidden"
	});
	SearchField = styled.div(({ theme, isMobile }) => ({
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		padding: isMobile ? 4 : 2,
		flexGrow: 1,
		height: isMobile ? 36 : 32,
		width: "100%",
		boxShadow: `${theme.button.border} 0 0 0 1px inset`,
		borderRadius: theme.appBorderRadius + 2,
		"&:has(input:focus), &:has(input:active)": {
			background: theme.background.app,
			outline: `2px solid ${theme.color.secondary}`,
			outlineOffset: 2
		}
	}));
	IconWrapper$1 = styled.div(({ theme, onClick }) => ({
		cursor: onClick ? "pointer" : "default",
		flex: "0 0 28px",
		height: "100%",
		pointerEvents: onClick ? "auto" : "none",
		color: theme.textMutedColor,
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	}));
	Input = styled.input(({ theme, isMobile }) => ({
		appearance: "none",
		height: 28,
		width: "100%",
		padding: 0,
		border: 0,
		background: "transparent",
		fontSize: isMobile ? "16px" : `${theme.typography.size.s1 + 1}px`,
		fontFamily: "inherit",
		transition: "all 150ms",
		color: theme.color.defaultText,
		outline: 0,
		"&::placeholder": {
			color: theme.textMutedColor,
			opacity: 1
		},
		"&:valid ~ code, &:focus ~ code": { display: "none" },
		"&:invalid ~ svg": { display: "none" },
		"&:valid ~ svg": { display: "block" },
		"&::-ms-clear": { display: "none" },
		"&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": { display: "none" }
	}));
	FocusKey = styled.code(({ theme }) => ({
		margin: 5,
		marginTop: 6,
		height: 16,
		fontFamily: theme.typography.fonts.base,
		lineHeight: "16px",
		textAlign: "center",
		fontSize: "11px",
		color: theme.base === "light" ? theme.color.dark : theme.textMutedColor,
		userSelect: "none",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		gap: 4,
		flexShrink: 0
	}));
	FocusKeyCmd = styled.span({ fontSize: "14px" });
	Actions = styled.div({
		display: "flex",
		alignItems: "center",
		gap: 2
	});
	FocusContainer = styled.div({
		outline: 0,
		flex: "1 1 auto",
		minHeight: 0,
		display: "flex",
		flexDirection: "column"
	});
	Search = _storybook_global_react_default.memo(function Search({ children, dataset, enableShortcuts = true, getLastViewed, initialQuery = "", searchFieldContent, belowSearchContent }) {
		const api = useStorybookApi();
		const inputRef = useRef(null);
		const menuRef = useRef(null);
		const [inputPlaceholder, setPlaceholder] = useState("Find components");
		const [allComponents, showAllComponents] = useState(false);
		const searchShortcut = api ? shortcutToHumanString(api.getShortcutKeys().search) : "/";
		const makeFuse = useCallback(() => {
			const list = [];
			for (const [refId, { index, allStatuses }] of dataset.entries) {
				if (!index) continue;
				const groupStatus = getGroupStatus(index || {}, allStatuses ?? {});
				const datasetValues = Object.values(index);
				for (const datasetValue of datasetValues) {
					const storyStatuses = allStatuses?.[datasetValue.id];
					const ownStatusValues = Object.values(storyStatuses ?? {}).filter((status) => status.typeId !== REVIEW_STATUS_TYPE_ID).map((status) => status.value);
					const status = (ownStatusValues.length ? getMostCriticalStatusValue(ownStatusValues) : null) ?? groupStatus[datasetValue.id] ?? null;
					if (datasetValue.type !== "docs" || !globalThis?.FEATURES?.experimentalSearchDocsHeadings) {
						list.push({
							...searchItem(datasetValue, dataset.hash[refId]),
							status
						});
						continue;
					}
					const { anchors, ...baseSearchItem } = searchItem(datasetValue, dataset.hash[refId]);
					list.push({
						...baseSearchItem,
						status
					});
					anchors?.forEach((anchor) => {
						const namePostfix = baseSearchItem.path?.[0] === anchor.title ? "" : ` / ${anchor.title}`;
						list.push({
							...baseSearchItem,
							anchors: [anchor],
							id: `${datasetValue.id}#${anchor.id}`,
							name: `${datasetValue.name}${namePostfix}`,
							status
						});
					});
				}
			}
			return new import_fuse.default(list, options);
		}, [dataset]);
		const getResults = useCallback((input) => {
			const fuse = makeFuse();
			if (!input) return [];
			let results = [];
			const resultIds = /* @__PURE__ */ new Set();
			const distinctResults = fuse.search(input).filter(({ item }) => {
				if (!(item.type === "component" || item.type === "docs" || item.type === "story") || resultIds.has(item.parent)) return false;
				resultIds.add(item.id);
				return true;
			});
			if (distinctResults.length) {
				results = distinctResults.slice(0, allComponents ? 1e3 : DEFAULT_MAX_SEARCH_RESULTS);
				if (distinctResults.length > DEFAULT_MAX_SEARCH_RESULTS && !allComponents) results.push({
					showAll: () => showAllComponents(true),
					totalCount: distinctResults.length,
					moreCount: distinctResults.length - DEFAULT_MAX_SEARCH_RESULTS
				});
			}
			return results;
		}, [allComponents, makeFuse]);
		const onSelect = useCallback((selectedItem) => {
			if (!selectedItem) return;
			if (isSearchResult(selectedItem)) {
				const { id: rawId, refId } = selectedItem.item;
				const [storyId, anchor] = rawId.split("#");
				api?.selectStory(storyId, void 0, {
					ref: refId !== "storybook_internal" && refId,
					scrollTo: anchor
				});
				inputRef.current.blur();
				showAllComponents(false);
				return;
			}
			if (isExpandType(selectedItem)) selectedItem.showAll();
		}, [api]);
		const onInputValueChange = useCallback((inputValue, stateAndHelpers) => {
			showAllComponents(false);
		}, []);
		const stateReducer = useCallback((state, changes) => {
			switch (changes.type) {
				case Downshift.stateChangeTypes.blurInput: return {
					...changes,
					inputValue: state.inputValue,
					isOpen: !!state.inputValue && !state.selectedItem
				};
				case Downshift.stateChangeTypes.mouseUp: return state;
				case Downshift.stateChangeTypes.keyDownEscape:
					if (state.inputValue) return {
						...changes,
						inputValue: "",
						isOpen: true,
						selectedItem: null
					};
					return {
						...changes,
						isOpen: false,
						selectedItem: null
					};
				case Downshift.stateChangeTypes.clickItem:
				case Downshift.stateChangeTypes.keyDownEnter:
					if (isSearchResult(changes.selectedItem)) return {
						...changes,
						inputValue: state.inputValue
					};
					if (isExpandType(changes.selectedItem)) return state;
					return changes;
				default: return changes;
			}
		}, []);
		const { isMobile } = useLayout();
		const searchLandmarkRef = useRef(null);
		const { landmarkProps } = useLandmark({ role: "search" }, searchLandmarkRef);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Downshift, {
			initialInputValue: initialQuery,
			stateReducer,
			itemToString: (result) => result?.item?.name || "",
			scrollIntoView: (e) => scrollIntoView(e),
			onSelect,
			onInputValueChange
		}, ({ isOpen, openMenu, closeMenu, inputValue, getInputProps, getItemProps, getLabelProps, getMenuProps, getRootProps, highlightedIndex, reset }) => {
			const input = inputValue ? inputValue.trim() : "";
			let results = input ? getResults(input) : [];
			const lastViewed = !input && getLastViewed();
			if (lastViewed && lastViewed.length) results = lastViewed.reduce((acc, { storyId, refId, anchor }) => {
				const data = dataset.hash[refId];
				if (data && data.index && data.index[storyId]) {
					const story = data.index[storyId];
					const item = story.type === "story" ? data.index[story.parent] : story;
					const entryId = anchor ? `${item.id}#${anchor}` : item.id;
					if (!acc.some((res) => res.item.refId === refId && res.item.id === entryId)) {
						const baseItem = searchItem(item, dataset.hash[refId]);
						let resultItem = baseItem;
						if (anchor && item.type === "docs") {
							const matchingAnchor = item.anchors?.find((a) => a.id === anchor);
							if (matchingAnchor) {
								const namePostfix = baseItem.path?.[0] === matchingAnchor.title ? "" : ` / ${matchingAnchor.title}`;
								resultItem = {
									...baseItem,
									id: entryId,
									name: `${item.name}${namePostfix}`
								};
							}
						}
						acc.push({
							item: resultItem,
							matches: [],
							score: 0
						});
					}
				}
				return acc;
			}, []);
			const inputId = "storybook-explorer-searchfield";
			const inputProps = getInputProps({
				id: inputId,
				ref: inputRef,
				required: true,
				type: "search",
				placeholder: inputPlaceholder,
				onFocus: () => {
					openMenu();
					setPlaceholder("Type to find...");
				},
				onBlur: () => setPlaceholder("Find components"),
				onKeyDown: (e) => {
					if (e.key !== "Escape") return;
					e.stopPropagation();
					if (inputValue.length === 0) menuRef.current?.focus();
				}
			});
			const labelProps = getLabelProps({ htmlFor: inputId });
			return /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ScreenReaderLabel, labelProps, "Search for components"), /* @__PURE__ */ _storybook_global_react_default.createElement(SearchBar, {
				ref: searchLandmarkRef,
				...landmarkProps
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(SearchField, {
				...getRootProps({ refKey: "" }, { suppressRefError: true }),
				isMobile,
				className: "search-field"
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(IconWrapper$1, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SearchIcon, null)), /* @__PURE__ */ _storybook_global_react_default.createElement(Input, {
				...inputProps,
				isMobile
			}), !isMobile && enableShortcuts && !isOpen && /* @__PURE__ */ _storybook_global_react_default.createElement(FocusKey, null, searchShortcut === "⌘ K" ? /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(FocusKeyCmd, null, "⌘"), "K") : searchShortcut), /* @__PURE__ */ _storybook_global_react_default.createElement(Actions, null, input && /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
				padding: "small",
				variant: "ghost",
				ariaLabel: "Clear search",
				onClick: () => {
					reset({ inputValue: "" });
					closeMenu();
					inputRef.current?.focus();
				}
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(CloseIcon, null)), searchFieldContent))), !isOpen && belowSearchContent, /* @__PURE__ */ _storybook_global_react_default.createElement(FocusContainer, {
				tabIndex: -1,
				id: "storybook-explorer-menu",
				ref: menuRef
			}, children({
				query: input,
				results,
				isNavVisible: !isOpen && document$2.activeElement !== inputRef.current,
				isNavReachable: !isOpen || input.length === 0,
				isSearchResultRendered: isOpen,
				closeMenu,
				getMenuProps,
				getItemProps,
				highlightedIndex
			})));
		});
	});
}));
//#endregion
//#region src/manager/components/sidebar/SearchResults.tsx
var document$1, StatusLabel, ResultsList, ResultRow, IconWrapper, ResultRowContent, Mark, MoreWrapper, RecentlyOpenedTitle, Highlight, Title, Path, Result, SearchResults;
var init_SearchResults = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_core_events();
	init_dist();
	init_icons();
	init_polished_esm();
	init_manager_api();
	init_emotion();
	init_keybinding();
	init_status();
	init_NoResults();
	init_TypeIcon();
	init_types();
	({document: document$1} = scope);
	StatusLabel = styled.div(({ theme, status }) => ({
		color: getStatus(theme, status).textColor ?? void 0,
		margin: 3
	}));
	ResultsList = styled.ol({
		listStyle: "none",
		margin: 0,
		padding: 0
	});
	ResultRow = styled.li(({ theme, isHighlighted }) => ({
		width: "100%",
		border: "none",
		cursor: "pointer",
		display: "flex",
		alignItems: "start",
		justifyContent: "space-between",
		textAlign: "left",
		color: "inherit",
		fontSize: `${theme.typography.size.s2}px`,
		background: isHighlighted ? theme.background.hoverable : "transparent",
		minHeight: 28,
		borderRadius: 4,
		gap: 6,
		paddingTop: 7,
		paddingBottom: 7,
		paddingLeft: 8,
		paddingRight: 8,
		"&:hover, &:focus": {
			background: curriedTransparentize$1(.93, theme.color.secondary),
			outline: "none"
		}
	}));
	IconWrapper = styled.div({ marginTop: 2 });
	ResultRowContent = styled.div({
		flex: 1,
		display: "flex",
		flexDirection: "column"
	});
	Mark = styled.mark(({ theme }) => ({
		background: "transparent",
		color: theme.color.secondary,
		"@media (forced-colors: active)": {
			color: "HighlightText",
			background: "Highlight"
		}
	}));
	MoreWrapper = styled.div({ marginTop: 8 });
	RecentlyOpenedTitle = styled.div(({ theme }) => ({
		display: "flex",
		justifyContent: "space-between",
		fontSize: `${theme.typography.size.s1 - 1}px`,
		fontWeight: theme.typography.weight.bold,
		minHeight: 28,
		letterSpacing: "0.16em",
		textTransform: "uppercase",
		color: theme.textMutedColor,
		marginBottom: 4,
		alignItems: "center",
		".search-result-recentlyOpened-clear": { visibility: "hidden" },
		"&:hover": { ".search-result-recentlyOpened-clear": { visibility: "visible" } }
	}));
	Highlight = _storybook_global_react_default.memo(function Highlight({ children, match }) {
		if (!match) return children;
		const { value, indices } = match;
		const { nodes: result } = indices.reduce(({ cursor, nodes }, [start, end], index, { length }) => {
			nodes.push(/* @__PURE__ */ _storybook_global_react_default.createElement("span", { key: `${index}-1` }, value.slice(cursor, start)));
			nodes.push(/* @__PURE__ */ _storybook_global_react_default.createElement(Mark, { key: `${index}-2` }, value.slice(start, end + 1)));
			if (index === length - 1) nodes.push(/* @__PURE__ */ _storybook_global_react_default.createElement("span", { key: `${index}-3` }, value.slice(end + 1)));
			return {
				cursor: end + 1,
				nodes
			};
		}, {
			cursor: 0,
			nodes: []
		});
		return /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, result);
	});
	Title = styled.div({
		display: "grid",
		justifyContent: "start",
		gridAutoColumns: "auto",
		gridAutoFlow: "column",
		"& > span": {
			display: "block",
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		}
	});
	Path = styled.div(({ theme }) => ({
		display: "grid",
		justifyContent: "start",
		gridAutoColumns: "auto",
		gridAutoFlow: "column",
		fontSize: `${theme.typography.size.s1 - 1}px`,
		"& > span": {
			display: "block",
			whiteSpace: "nowrap",
			overflow: "hidden",
			textOverflow: "ellipsis"
		},
		"& > span + span": { "&:before": {
			content: "' / '",
			whiteSpace: "pre"
		} }
	}));
	Result = _storybook_global_react_default.memo(function Result({ item, matches, onClick, ...props }) {
		const theme = useTheme();
		const click = useCallback((event) => {
			event.preventDefault();
			onClick?.(event);
		}, [onClick]);
		const api = useStorybookApi();
		useEffect(() => {
			if (api && props.isHighlighted && item.type === "component") api.emit(PRELOAD_ENTRIES, { ids: [item.children[0]] }, { options: { target: item.refId } });
		}, [
			api,
			props.isHighlighted,
			item
		]);
		const nameMatch = matches.find((match) => match.key === "name");
		const pathMatches = matches.filter((match) => match.key === "path");
		const icon = item.status ? getStatus(theme, item.status).icon : null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(ResultRow, {
			...props,
			onClick: click
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(IconWrapper, null, /* @__PURE__ */ _storybook_global_react_default.createElement(TypeIconWithSymbol, { item })), /* @__PURE__ */ _storybook_global_react_default.createElement(ResultRowContent, { className: "search-result-item--label" }, /* @__PURE__ */ _storybook_global_react_default.createElement(Title, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Highlight, { match: nameMatch }, item.name)), /* @__PURE__ */ _storybook_global_react_default.createElement(Path, null, item.path.map((group, index) => /* @__PURE__ */ _storybook_global_react_default.createElement("span", { key: index }, /* @__PURE__ */ _storybook_global_react_default.createElement(Highlight, { match: pathMatches.find((match) => match.arrayIndex === index) }, group))))), item.status ? /* @__PURE__ */ _storybook_global_react_default.createElement(StatusLabel, { status: item.status }, icon) : null);
	});
	SearchResults = _storybook_global_react_default.memo(function SearchResults({ query, results, closeMenu, getMenuProps, getItemProps, highlightedIndex, isLoading = false, enableShortcuts = true, clearLastViewed }) {
		const api = useStorybookApi();
		useEffect(() => {
			const handleEscape = (event) => {
				if (!enableShortcuts || isLoading || event.repeat) return;
				if (matchesModifiers(false, event) && matchesKeyCode("Escape", event)) {
					if (event.target?.id === "storybook-explorer-searchfield") return;
					event.preventDefault();
					closeMenu();
				}
			};
			document$1.addEventListener("keydown", handleEscape);
			return () => document$1.removeEventListener("keydown", handleEscape);
		}, [
			closeMenu,
			enableShortcuts,
			isLoading
		]);
		const mouseOverHandler = useCallback((event) => {
			if (!api) return;
			const currentTarget = event.currentTarget;
			const storyId = currentTarget.getAttribute("data-id");
			const refId = currentTarget.getAttribute("data-refid");
			const item = api.resolveStory(storyId, refId === "storybook_internal" ? void 0 : refId);
			if (item?.type === "component") api.emit(PRELOAD_ENTRIES, {
				ids: [item.isLeaf ? item.id : item.children[0]],
				options: { target: refId }
			});
		}, []);
		const handleClearLastViewed = () => {
			clearLastViewed();
			closeMenu();
		};
		return /* @__PURE__ */ _storybook_global_react_default.createElement(ResultsList, {
			...getMenuProps(),
			key: "results-list"
		}, results.length > 0 && !query && /* @__PURE__ */ _storybook_global_react_default.createElement(RecentlyOpenedTitle, { className: "search-result-recentlyOpened" }, "Recently opened", /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			padding: "small",
			variant: "ghost",
			className: "search-result-recentlyOpened-clear",
			onClick: handleClearLastViewed,
			ariaLabel: "Clear recently opened items"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(TrashIcon, null))), results.length === 0 && query && /* @__PURE__ */ _storybook_global_react_default.createElement("li", null, /* @__PURE__ */ _storybook_global_react_default.createElement(NoResults, null, /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "No components found"), /* @__PURE__ */ _storybook_global_react_default.createElement("small", null, "Find components by name or path."))), results.map((result, index) => {
			if (isExpandType(result)) {
				const { key, ...rest } = {
					...results,
					...getItemProps({
						key: index,
						index,
						item: result
					})
				};
				return /* @__PURE__ */ _storybook_global_react_default.createElement(MoreWrapper, { key: "search-result-expand" }, /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
					ariaLabel: false,
					key,
					...rest,
					size: "small"
				}, "Show ", result.moreCount, " more results"));
			}
			const { item } = result;
			const key = `${item.refId}::${item.id}`;
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Result, {
				...result,
				...getItemProps({
					key,
					index,
					item: result
				}),
				isHighlighted: highlightedIndex === index,
				key,
				"data-id": result.item.id,
				"data-refid": result.item.refId,
				onMouseOver: mouseOverHandler,
				className: "search-result-item"
			});
		}));
	});
}));
//#endregion
//#region src/manager/components/sidebar/ShowChangesButton.tsx
var Wrapper, StyledCTA, StyledIcon, NEW, MOD, ShowChangesButton;
var init_ShowChangesButton = __esmMin((() => {
	init__storybook_global_react();
	init_components();
	init_icons();
	init_manager_api();
	init_emotion();
	init_statuses();
	init_tags$1();
	init_IconSymbols();
	init_ReviewWidget();
	Wrapper = styled.div({
		display: "flex",
		alignItems: "center",
		gap: 4,
		marginTop: -8
	});
	StyledCTA = styled(ToggleButton)({
		flex: 1,
		justifyContent: "flex-start"
	});
	StyledIcon = styled.svg(({ theme }) => ({ color: theme.fgColor.accent }));
	NEW = "status-value:new";
	MOD = "status-value:modified";
	ShowChangesButton = () => {
		const api = useStorybookApi();
		const { internal_index: index, includedStatusFilters: rawIncludedStatusFilters, excludedStatusFilters: rawExcludedStatusFilters, includedTagFilters: rawIncludedTagFilters, excludedTagFilters: rawExcludedTagFilters } = useStorybookState();
		const allStatuses = experimental_useStatusStore();
		const activeReviewStoryCount = useActiveReviewStoryCount();
		const { newCount, modifiedCount } = useMemo(() => {
			if (!index) return {
				newCount: 0,
				modifiedCount: 0
			};
			const includedStatusFilters = rawIncludedStatusFilters ?? [];
			const excludedStatusFilters = rawExcludedStatusFilters ?? [];
			const includedTagFilters = rawIncludedTagFilters ?? [];
			const excludedTagFilters = rawExcludedTagFilters ?? [];
			const contextualIncludedStatuses = includedStatusFilters.filter((s) => s !== NEW && s !== MOD);
			const contextualExcludedStatuses = excludedStatusFilters.filter((s) => s !== NEW && s !== MOD);
			const tagFilterFn = computeTagsFilterFn(includedTagFilters, excludedTagFilters);
			const statusFilterFn = computeStatusFilterFn(contextualIncludedStatuses, contextualExcludedStatuses);
			let next = 0;
			let modified = 0;
			const entries = index.entries ?? {};
			for (const [storyId, statusesByType] of Object.entries(allStatuses)) {
				const entry = entries[storyId];
				if (!entry) continue;
				const entryWithStatuses = {
					...entry,
					statuses: statusesByType
				};
				if (!tagFilterFn(entryWithStatuses) || !statusFilterFn(entryWithStatuses)) continue;
				const statuses = Object.values(statusesByType);
				if (statuses.some(({ value }) => value === NEW)) next += 1;
				if (statuses.some(({ value }) => value === MOD)) modified += 1;
			}
			return {
				newCount: next,
				modifiedCount: modified
			};
		}, [
			index,
			allStatuses,
			rawIncludedStatusFilters,
			rawExcludedStatusFilters,
			rawIncludedTagFilters,
			rawExcludedTagFilters
		]);
		const includedStatusFilters = rawIncludedStatusFilters ?? [];
		const excludedStatusFilters = rawExcludedStatusFilters ?? [];
		const isActive = includedStatusFilters.includes(NEW) && includedStatusFilters.includes(MOD);
		if (activeReviewStoryCount > 0) return null;
		if (newCount === 0 && modifiedCount === 0) return null;
		const clearFilters = () => {
			const nextIncluded = includedStatusFilters.filter((s) => s !== NEW && s !== MOD);
			const nextExcluded = excludedStatusFilters.filter((s) => s !== NEW && s !== MOD);
			api.setAllStatusFilters(nextIncluded, nextExcluded);
		};
		const onClick = () => {
			if (isActive) clearFilters();
			else {
				const nextIncluded = Array.from(/* @__PURE__ */ new Set([
					...includedStatusFilters,
					NEW,
					MOD
				]));
				const nextExcluded = excludedStatusFilters.filter((s) => s !== NEW && s !== MOD);
				api.setAllStatusFilters(nextIncluded, nextExcluded);
			}
		};
		const onClearClick = (e) => {
			e.stopPropagation();
			clearFilters();
		};
		const label = `${isActive ? "Showing" : "Show"} ${newCount > 0 && modifiedCount > 0 ? "new and modified" : newCount > 0 ? "new" : "modified"} stories`;
		const ariaLabel = `${label} since last commit`;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Wrapper, null, /* @__PURE__ */ _storybook_global_react_default.createElement(StyledCTA, {
			variant: "ghost",
			padding: "small",
			pressed: isActive,
			ariaLabel,
			onClick
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(StyledIcon, {
			viewBox: "0 0 14 14",
			width: "14",
			height: "14",
			"aria-hidden": true
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(UseSymbol, { type: "change-modified" })), label), isActive && /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			variant: "ghost",
			padding: "small",
			size: "small",
			onClick: onClearClick,
			ariaLabel: "Clear"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(UndoIcon, null)));
	};
}));
//#endregion
//#region src/manager/components/sidebar/useDynamicFavicon.ts
var STATUSES, initialIcon, getFaviconUrl, useDynamicFavicon;
var init_useDynamicFavicon = __esmMin((() => {
	init__storybook_global_react();
	STATUSES = [
		"active",
		"critical",
		"negative",
		"positive",
		"warning"
	];
	getFaviconUrl = (initialHref = "./favicon.svg", status) => {
		initialIcon ??= initialHref;
		const href = initialIcon + (status && STATUSES.includes(status) ? `?status=${status}` : "");
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => resolve({
				href,
				status
			});
			img.onerror = () => resolve({
				href: initialIcon,
				status
			});
			img.src = href;
		});
	};
	useDynamicFavicon = (status) => {
		const links = useRef(document.head.querySelectorAll("link[rel*='icon']"));
		useEffect(() => {
			let isMounted = true;
			const [element, ...others] = links.current;
			if (element && !others.length) {
				getFaviconUrl(element.href, status).then((result) => {
					if (isMounted && result.status === status && element.dataset.status !== status) {
						element.href = result.href;
						if (result.status) element.dataset.status = result.status;
						else delete element.dataset.status;
					}
				}, () => {
					if (isMounted) element.href = initialIcon;
				});
				return () => {
					isMounted = false;
					element.href = initialIcon;
				};
			}
		}, [status]);
	};
}));
//#endregion
//#region src/manager/components/sidebar/TestingWidget.tsx
var DEFAULT_HEIGHT, HoverCard, Collapsible, Content$1, Bar, Action, Filters, CollapseToggle, RunButton, StatusButton, TestProvider, TestingWidget;
var init_TestingWidget = __esmMin((() => {
	init__storybook_global_react();
	init_client_logger();
	init_components();
	init_icons();
	init_manager_stores();
	init_emotion();
	init_useLandmark();
	init_Optional();
	init_useDynamicFavicon();
	DEFAULT_HEIGHT = 500;
	HoverCard = styled(Card)({
		display: "flex",
		flexDirection: "column-reverse",
		"&:hover #testing-module-collapse-toggle": { opacity: 1 }
	});
	Collapsible = styled.div(({ theme }) => ({
		overflow: "hidden",
		boxShadow: `inset 0 -1px 0 ${theme.appBorderColor}`
	}));
	Content$1 = styled.div({
		display: "flex",
		flexDirection: "column"
	});
	Bar = styled.div(({ onClick }) => ({
		display: "flex",
		width: "100%",
		cursor: onClick ? "pointer" : "default",
		userSelect: "none",
		alignItems: "center",
		justifyContent: "space-between",
		overflow: "hidden",
		padding: 4,
		gap: 4
	}));
	Action = styled.div({
		display: "flex",
		flexBasis: "100%",
		containerType: "inline-size"
	});
	Filters = styled.div({
		display: "flex",
		justifyContent: "flex-end",
		gap: 4
	});
	CollapseToggle = styled(ActionList.Button)({
		opacity: 0,
		transition: "opacity 250ms",
		"&:focus, &:hover": { opacity: 1 }
	});
	RunButton = ({ children, isRunning, onRunAll, ...props }) => /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
		ariaLabel: isRunning ? "Running..." : "Run tests",
		tooltip: isRunning ? "Running tests..." : "Start all tests",
		disabled: isRunning,
		onClick: (e) => {
			e.stopPropagation();
			onRunAll();
		},
		...props
	}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(PlayAllHollowIcon, null)), children);
	StatusButton = styled(ActionList.Toggle)({
		minWidth: 28,
		outlineOffset: -2
	}, ({ pressed, status, theme }) => !pressed && (theme.base === "light" ? {
		background: {
			negative: theme.background.negative,
			warning: theme.background.warning
		}[status],
		color: {
			negative: theme.color.negativeText,
			warning: theme.color.warningText
		}[status]
	} : {
		background: {
			negative: `${theme.color.negative}22`,
			warning: `${theme.color.warning}22`
		}[status],
		color: {
			negative: theme.color.negative,
			warning: theme.color.warning
		}[status]
	}));
	TestProvider = styled.div(({ theme }) => ({
		padding: 4,
		"&:not(:last-child)": { boxShadow: `inset 0 -1px 0 ${theme.appBorderColor}` }
	}));
	TestingWidget = ({ registeredTestProviders, testProviderStates, hasStatuses, clearStatuses, onRunAll, errorCount, errorsActive, setErrorsActive, warningCount, warningsActive, setWarningsActive, successCount }) => {
		const timeoutRef = useRef(null);
		const contentRef = useRef(null);
		const [maxHeight, setMaxHeight] = useState(DEFAULT_HEIGHT);
		const [isCollapsed, setCollapsed] = useState(true);
		const [isChangingCollapse, setChangingCollapse] = useState(false);
		const [isUpdated, setIsUpdated] = useState(false);
		const settingsUpdatedTimeoutRef = useRef();
		useEffect(() => {
			const unsubscribe = internal_fullTestProviderStore.onSettingsChanged(() => {
				setIsUpdated(true);
				clearTimeout(settingsUpdatedTimeoutRef.current);
				settingsUpdatedTimeoutRef.current = setTimeout(() => {
					setIsUpdated(false);
				}, 1e3);
			});
			return () => {
				unsubscribe();
				clearTimeout(settingsUpdatedTimeoutRef.current);
			};
		}, []);
		useEffect(() => {
			if (contentRef.current) {
				setMaxHeight(contentRef.current?.getBoundingClientRect().height || DEFAULT_HEIGHT);
				const resizeObserver = new ResizeObserver(() => {
					requestAnimationFrame(() => {
						if (contentRef.current && !isCollapsed) {
							const height = contentRef.current?.getBoundingClientRect().height || DEFAULT_HEIGHT;
							setMaxHeight(height);
						}
					});
				});
				resizeObserver.observe(contentRef.current);
				return () => resizeObserver.disconnect();
			}
		}, [isCollapsed]);
		const toggleCollapsed = useCallback((event, value) => {
			event?.stopPropagation();
			setChangingCollapse(true);
			setCollapsed((s) => value ?? !s);
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(() => {
				setChangingCollapse(false);
			}, 250);
		}, []);
		const isRunning = Object.values(testProviderStates).some((testProviderState) => testProviderState === "test-provider-state:running");
		const isCrashed = Object.values(testProviderStates).some((testProviderState) => testProviderState === "test-provider-state:crashed");
		const hasTestProviders = Object.values(registeredTestProviders).length > 0;
		const wasCrashedRef = useRef(false);
		useEffect(() => {
			if (isCrashed && !wasCrashedRef.current) toggleCollapsed(void 0, false);
			wasCrashedRef.current = isCrashed;
		}, [isCrashed, toggleCollapsed]);
		useDynamicFavicon(isCrashed ? "critical" : errorCount > 0 ? "negative" : warningCount > 0 ? "warning" : isRunning ? "active" : successCount > 0 ? "positive" : void 0);
		const cardRef = useRef(null);
		const { landmarkProps } = useLandmark({
			"aria-labelledby": "storybook-testing-widget-heading",
			role: "region"
		}, cardRef);
		if (!hasTestProviders && !errorCount && !warningCount) return null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(HoverCard, {
			id: "storybook-testing-module",
			"data-updated": isUpdated,
			outlineAnimation: isRunning ? "spin" : "none",
			outlineColor: isCrashed || isRunning && errorCount > 0 ? "negative" : isUpdated ? "positive" : void 0,
			ref: cardRef,
			outlineAttrs: landmarkProps
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("h2", {
			id: "storybook-testing-widget-heading",
			className: "sb-sr-only"
		}, "Component tests"), /* @__PURE__ */ _storybook_global_react_default.createElement(Bar, hasTestProviders ? { onClick: (e) => toggleCollapsed(e) } : {}, /* @__PURE__ */ _storybook_global_react_default.createElement(Action, null, hasTestProviders && /* @__PURE__ */ _storybook_global_react_default.createElement(Optional, {
			content: /* @__PURE__ */ _storybook_global_react_default.createElement(RunButton, {
				isRunning,
				onRunAll
			}, isRunning ? "Running..." : "Run tests"),
			fallback: /* @__PURE__ */ _storybook_global_react_default.createElement(RunButton, {
				isRunning,
				onRunAll
			})
		})), /* @__PURE__ */ _storybook_global_react_default.createElement(Filters, null, hasTestProviders && /* @__PURE__ */ _storybook_global_react_default.createElement(CollapseToggle, {
			onClick: (e) => toggleCollapsed(e),
			id: "testing-module-collapse-toggle",
			ariaLabel: isCollapsed ? "Expand testing module" : "Collapse testing module"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ChevronSmallUpIcon, { style: {
			transform: isCollapsed ? "none" : "rotate(180deg)",
			transition: "transform 250ms"
		} })), errorCount > 0 && /* @__PURE__ */ _storybook_global_react_default.createElement(StatusButton, {
			id: "errors-found-filter",
			size: "medium",
			variant: "ghost",
			padding: errorCount < 10 ? "medium" : "small",
			status: "negative",
			pressed: errorsActive,
			onClick: (e) => {
				e.stopPropagation();
				setErrorsActive(!errorsActive);
			},
			ariaLabel: `Filter main navigation to show ${errorCount} tests with errors`,
			tooltip: errorsActive ? "Clear test error filter" : `Filter sidebar to show ${errorCount} tests with errors`
		}, errorCount < 1e3 ? errorCount : "999+"), warningCount > 0 && /* @__PURE__ */ _storybook_global_react_default.createElement(StatusButton, {
			id: "warnings-found-filter",
			size: "medium",
			variant: "ghost",
			padding: warningCount < 10 ? "medium" : "small",
			status: "warning",
			pressed: warningsActive,
			onClick: (e) => {
				e.stopPropagation();
				setWarningsActive(!warningsActive);
			},
			ariaLabel: `Filter main navigation to show ${warningCount} tests with warnings`,
			tooltip: warningsActive ? "Clear test warning filter" : `Filter sidebar to show ${warningCount} tests with warnings`
		}, warningCount < 1e3 ? warningCount : "999+"), hasStatuses && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
			id: "clear-statuses",
			onClick: (e) => {
				e.stopPropagation();
				clearStatuses();
			},
			disabled: isRunning,
			ariaLabel: isRunning ? "Can't clear statuses while tests are running" : "Clear all statuses"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(SweepIcon, null)))), hasTestProviders && /* @__PURE__ */ _storybook_global_react_default.createElement(Collapsible, {
			"data-testid": "collapse",
			...isCollapsed && { inert: "" },
			style: {
				transition: isChangingCollapse ? "max-height 250ms" : "max-height 0ms",
				display: hasTestProviders ? "block" : "none",
				maxHeight: isCollapsed ? 0 : maxHeight
			}
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(Content$1, { ref: contentRef }, Object.values(registeredTestProviders).map((registeredTestProvider) => {
			const { render: Render, id } = registeredTestProvider;
			if (!Render) {
				once.warn(`No render function found for test provider with id '${id}', skipping...`);
				return null;
			}
			return /* @__PURE__ */ _storybook_global_react_default.createElement(TestProvider, {
				key: id,
				"data-module-id": id
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(Render, null));
		}))));
	};
}));
//#endregion
//#region src/manager/components/sidebar/SidebarBottom.tsx
var SIDEBAR_BOTTOM_WRAPPER_ID, SIDEBAR_BOTTOM_HEIGHT_VAR, filterNone, filterWarn, filterError, filterBoth, getFilter, Content, SidebarBottomBase, SidebarBottom;
var init_SidebarBottom = __esmMin((() => {
	init__storybook_global_react();
	init_types$1();
	init_manager_stores();
	init_manager_api();
	init_emotion();
	init_NotificationList();
	init_TestingWidget();
	SIDEBAR_BOTTOM_WRAPPER_ID = "sidebar-bottom-wrapper";
	SIDEBAR_BOTTOM_HEIGHT_VAR = "--sidebar-bottom-height";
	filterNone = () => true;
	filterWarn = ({ statuses = {} }) => Object.values(statuses).some(({ value }) => value === "status-value:warning");
	filterError = ({ statuses = {} }) => Object.values(statuses).some(({ value }) => value === "status-value:error");
	filterBoth = ({ statuses = {} }) => Object.values(statuses).some(({ value }) => ["status-value:warning", "status-value:error"].includes(value));
	getFilter = (warningsActive = false, errorsActive = false) => {
		if (warningsActive && errorsActive) return filterBoth;
		if (warningsActive) return filterWarn;
		if (errorsActive) return filterError;
		return filterNone;
	};
	Content = styled.div(({ theme }) => ({
		position: "absolute",
		zIndex: 1,
		bottom: 0,
		left: 0,
		right: 0,
		padding: 12,
		display: "flex",
		flexDirection: "column",
		gap: 12,
		color: theme.color.defaultText,
		fontSize: theme.typography.size.s1,
		"&:empty": { display: "none" },
		"--card-box-shadow": `0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${theme.background.app}`,
		"--sb-sidebar-bottom-card-background": theme.background.content,
		"--sb-sidebar-bottom-card-border": `1px solid ${theme.appBorderColor}`,
		"--sb-sidebar-bottom-card-border-radius": `${theme.appBorderRadius + 1}px`,
		"--sb-sidebar-bottom-card-box-shadow": `0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${theme.background.app}`
	}));
	SidebarBottomBase = ({ api, notifications = [], errorCount, warningCount, successCount, hasStatuses, isDevelopment, testProviderStates, registeredTestProviders, onRunAll }) => {
		const wrapperRef = useRef(null);
		const [warningsActive, setWarningsActive] = useState(false);
		const [errorsActive, setErrorsActive] = useState(false);
		useEffect(() => {
			const wrapper = wrapperRef.current;
			const container = wrapper?.parentElement;
			if (!wrapper || !container) return;
			const resizeObserver = new ResizeObserver(() => {
				container.style.setProperty(SIDEBAR_BOTTOM_HEIGHT_VAR, `${wrapper.scrollHeight}px`);
			});
			resizeObserver.observe(wrapper);
			return () => {
				resizeObserver.disconnect();
				container.style.removeProperty(SIDEBAR_BOTTOM_HEIGHT_VAR);
			};
		}, []);
		useEffect(() => {
			const filter = getFilter(warningCount > 0 && warningsActive, errorCount > 0 && errorsActive);
			api.setFilters({ "sidebar-bottom-filter": filter });
		}, [
			api,
			warningCount,
			errorCount,
			warningsActive,
			errorsActive
		]);
		if (!warningCount && !errorCount && Object.values(registeredTestProviders).length === 0 && notifications.length === 0) return null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Content, {
			id: SIDEBAR_BOTTOM_WRAPPER_ID,
			ref: wrapperRef
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(NotificationList, {
			notifications,
			clearNotification: api.clearNotification
		}), isDevelopment && /* @__PURE__ */ _storybook_global_react_default.createElement(TestingWidget, {
			registeredTestProviders,
			testProviderStates,
			onRunAll: () => {
				onRunAll();
				setErrorsActive(false);
				setWarningsActive(false);
			},
			hasStatuses,
			clearStatuses: () => {
				api.clearStatuses();
				setErrorsActive(false);
				setWarningsActive(false);
			},
			errorCount,
			errorsActive,
			setErrorsActive,
			warningCount,
			warningsActive,
			setWarningsActive,
			successCount
		}));
	};
	SidebarBottom = ({ isDevelopment }) => {
		const api = useStorybookApi();
		const registeredTestProviders = api.getElements(Addon_TypesEnum.experimental_TEST_PROVIDER);
		const { notifications } = useStorybookState();
		const { hasStatuses, errorCount, warningCount, successCount } = experimental_useStatusStore((statuses) => {
			return Object.values(statuses).reduce((result, storyStatuses) => {
				Object.values(storyStatuses).forEach((status) => {
					result.hasStatuses = true;
					if (status.value === "status-value:error") result.errorCount += 1;
					if (status.value === "status-value:warning") result.warningCount += 1;
					if (status.value === "status-value:success") result.successCount += 1;
				});
				return result;
			}, {
				errorCount: 0,
				warningCount: 0,
				successCount: 0,
				hasStatuses: false
			});
		});
		const testProviderStates = experimental_useTestProviderStore();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarBottomBase, {
			api,
			notifications,
			hasStatuses,
			errorCount,
			warningCount,
			successCount,
			isDevelopment,
			testProviderStates,
			registeredTestProviders,
			onRunAll: internal_fullTestProviderStore.runAll
		});
	};
}));
//#endregion
//#region src/manager/components/sidebar/useLastViewed.ts
var import_store2, save, useLastViewed;
var init_useLastViewed = __esmMin((() => {
	init__storybook_global_react();
	init_function();
	import_store2 = /* @__PURE__ */ __toESM(require_store2(), 1);
	save = debounce((value) => import_store2.default.set("lastViewedStoryIds", value), 1e3);
	useLastViewed = (selection) => {
		const lastViewedRef = useRef(useMemo(() => {
			const items = import_store2.default.get("lastViewedStoryIds");
			if (!items || !Array.isArray(items)) return [];
			if (!items.some((item) => typeof item === "object" && item.storyId && item.refId)) return [];
			return items;
		}, []));
		const updateLastViewed = useCallback((story) => {
			const items = lastViewedRef.current;
			const index = items.findIndex(({ storyId, refId, anchor }) => storyId === story.storyId && refId === story.refId && anchor === story.anchor);
			if (index === 0) return;
			if (index === -1) lastViewedRef.current = [story, ...items];
			else lastViewedRef.current = [
				story,
				...items.slice(0, index),
				...items.slice(index + 1)
			];
			save(lastViewedRef.current);
		}, [lastViewedRef]);
		useEffect(() => {
			if (selection) updateLastViewed(selection);
		}, [selection]);
		return {
			getLastViewed: useCallback(() => lastViewedRef.current, [lastViewedRef]),
			clearLastViewed: useCallback(() => {
				lastViewedRef.current = lastViewedRef.current.slice(0, 1);
				save(lastViewedRef.current);
			}, [lastViewedRef])
		};
	};
}));
//#endregion
//#region src/manager/components/sidebar/Sidebar.tsx
var DEFAULT_REF_ID, SearchResultsContainer, Container, Stack, useCombination, Sidebar;
var init_Sidebar = __esmMin((() => {
	init__storybook_global_react();
	init_dist();
	init_manager_api();
	init_emotion();
	init_layout();
	init_constants();
	init_useLandmark();
	init_LayoutProvider();
	init_ChecklistWidget();
	init_Explorer();
	init_Filter();
	init_Heading();
	init_IconSymbols();
	init_ReviewWidget();
	init_Search();
	init_SearchResults();
	init_ShowChangesButton();
	init_SidebarBottom();
	init_useLastViewed();
	DEFAULT_REF_ID = "storybook_internal";
	SearchResultsContainer = styled.div({
		overflowY: "auto",
		flex: "1 1 auto",
		minHeight: 0,
		paddingBottom: "var(--sidebar-bottom-height, 0px)"
	});
	Container = styled.header(({ theme }) => ({
		position: "absolute",
		zIndex: 1,
		left: 0,
		top: 0,
		bottom: 0,
		right: 0,
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		background: theme.background.content,
		[MEDIA_DESKTOP_BREAKPOINT]: { background: theme.background.app }
	}));
	Stack = styled.div({
		display: "flex",
		flexDirection: "column",
		gap: 16,
		padding: "16px 12px 20px 12px",
		flex: "1 1 auto",
		minHeight: 0
	});
	useCombination = (index, indexError, previewInitialized, allStatuses, refs) => {
		const hash = useMemo(() => ({
			[DEFAULT_REF_ID]: {
				index,
				filteredIndex: index,
				indexError,
				previewInitialized,
				allStatuses,
				title: null,
				id: DEFAULT_REF_ID,
				url: "iframe.html"
			},
			...refs
		}), [
			refs,
			index,
			indexError,
			previewInitialized,
			allStatuses
		]);
		return useMemo(() => ({
			hash,
			entries: Object.entries(hash)
		}), [hash]);
	};
	Sidebar = _storybook_global_react_default.memo(function Sidebar({ storyId = null, refId = DEFAULT_REF_ID, anchor, index, indexJson, indexError, allStatuses, previewInitialized, menu, menuHighlighted = false, enableShortcuts = true, isDevelopment = scope.CONFIG_TYPE === "DEVELOPMENT", refs = {}, onMenuClick }) {
		const selected = useMemo(() => storyId ? {
			storyId,
			refId,
			anchor
		} : null, [
			storyId,
			refId,
			anchor
		]);
		const dataset = useCombination(index, indexError, previewInitialized, allStatuses, refs);
		const isLoading = !index && !indexError;
		const hasEntries = Object.keys(indexJson?.entries ?? {}).length > 0;
		const lastViewedProps = useLastViewed(selected);
		const { isMobile } = useLayout();
		const { viewMode } = useStorybookApi().getUrlState();
		const headerRef = useRef(null);
		const { landmarkProps } = useLandmark({
			"aria-labelledby": "global-site-h1",
			role: "banner"
		}, headerRef);
		const skipLinkHref = isPagesViewMode(viewMode) ? "#main-content-wrapper" : "#storybook-preview-wrapper";
		const showReviewWidget = useActiveReviewStoryCount() > 0;
		const showOnboardingChecklist = !isLoading && scope.CONFIG_TYPE === "DEVELOPMENT" && scope.FEATURES?.sidebarOnboardingChecklist !== false && !showReviewWidget;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container, {
			className: "container sidebar-container",
			id: focusableUIElements.sidebarRegion,
			ref: headerRef,
			...landmarkProps
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("h1", {
			id: "global-site-h1",
			className: "sb-sr-only"
		}, "Storybook"), /* @__PURE__ */ _storybook_global_react_default.createElement(IconSymbols, null), /* @__PURE__ */ _storybook_global_react_default.createElement(Stack, null, /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, /* @__PURE__ */ _storybook_global_react_default.createElement(Heading, {
			className: "sidebar-header",
			menuHighlighted,
			menu,
			skipLinkHref,
			isLoading,
			onMenuClick
		}), !showOnboardingChecklist ? null : /* @__PURE__ */ _storybook_global_react_default.createElement(ChecklistWidget, null)), !isLoading && showReviewWidget ? /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewWidget, null) : null, /* @__PURE__ */ _storybook_global_react_default.createElement(Search, {
			dataset,
			enableShortcuts,
			searchFieldContent: /* @__PURE__ */ _storybook_global_react_default.createElement(Filter, null),
			belowSearchContent: /* @__PURE__ */ _storybook_global_react_default.createElement(ShowChangesButton, null),
			...lastViewedProps
		}, ({ query, results, isNavVisible, isNavReachable, isSearchResultRendered, closeMenu, getMenuProps, getItemProps, highlightedIndex }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Explorer, {
			dataset,
			selected,
			isLoading,
			isBrowsing: isNavVisible,
			isHidden: !isNavReachable,
			hasEntries
		}), isSearchResultRendered && /* @__PURE__ */ _storybook_global_react_default.createElement(SearchResultsContainer, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SearchResults, {
			query,
			results,
			closeMenu,
			getMenuProps,
			getItemProps,
			highlightedIndex,
			enableShortcuts,
			isLoading,
			clearLastViewed: lastViewedProps.clearLastViewed
		}))))), isMobile || isLoading ? null : /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarBottom, { isDevelopment }));
	});
}));
//#endregion
export { init_IconSymbols as a, UpgradeBlock as c, UseSymbol as i, init_UpgradeBlock as l, Sidebar as n, init_useChecklist as o, init_Sidebar as r, useChecklist as s, DEFAULT_REF_ID as t };
