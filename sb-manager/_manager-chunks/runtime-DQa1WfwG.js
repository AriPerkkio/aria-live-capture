import { n as __esmMin } from "./runtime-XrdeG17s.js";
import { $t as types, A as init_router, Ar as init_core_events, At as styled, B as ActionList, Br as init__storybook_global_react, Bt as experimental_useStatusStore, C as init_FocusScope, Ct as color, En as CopyIcon, F as init_client, Fr as _storybook_global_react_default, G as DocumentWrapper, Gn as MenuIcon, Gr as useEffect, H as Button, Hr as memo, Ht as getService, I as init_client_logger, J as Form, Jn as PopOutIcon, Jr as useMemo, K as EmptyTabContent, Kr as useImperativeHandle, L as logger, Ln as GithubIcon, Lr as createContext, Lt as addons, Mn as ExpandIcon, Mt as useTheme, Nr as Component, O as Match, On as DocumentIcon, Ot as init_emotion, P as createRoot, Pr as Fragment, Pt as Consumer, Q as PopoverProvider, Qt as shortcutToHumanString, S as FocusScope, Sn as CloseIcon, St as ThemeProvider, T as Link, U as Card, Ur as useCallback, Ut as init_manager_api, V as Badge, W as Collapsible, Wr as useContext, X as Loader, Xn as ShareAltIcon, Xr as useRef, Xt as merge, Y as Link$1, Yr as useReducer, Z as Modal, Zn as SidebarAltIcon, Zr as useState, _ as init__storybook_global_react_dom, _n as ChevronSmallLeftIcon, _t as Zoom$1, an as useStorybookApi, ar as TransferIcon, at as StatelessTabList, b as TooltipNote, br as SET_CURRENT_STORY, c as CHANGE_DETECTION_STATUS_TYPE_ID, cn as ArrowLeftIcon, cr as UnfoldIcon, d as init_types, et as ScrollArea, f as TooltipProvider, fn as BottomBarIcon, fr as init_icons, gn as ChevronSmallDownIcon, gr as FORCE_REMOUNT, h as createPortal, in as useServiceQuery, it as StatelessTab, j as useNavigate, jt as themes, kn as EditorIcon, kt as keyframes$1, lr as WandIcon, mn as CheckIcon, nt as Separator, on as useStorybookState, ot as StatelessTabPanel, p as init_TooltipProvider, pn as BottomBarToggleIcon, pt as ToggleButton, qr as useLayoutEffect, rr as SyncIcon, s as Addon_TypesEnum, sr as UndoIcon, st as StatelessTabsView, tr as StorybookIcon, tt as Select, u as REVIEW_STATUS_TYPE_ID, ur as ZoomIcon, vn as ChevronSmallRightIcon, vr as PREVIEW_BUILDER_PROGRESS, vt as init_components$1, wt as convert, x as init_TooltipNote, xn as CloseAltIcon, xr as SHARE_ISOLATE_MODE, xt as Global, yt as useCopyButton, z as AbstractToolbar, zr as forwardRef, zt as experimental_getStatusStore } from "./runtime-CCGFWiML.js";
import { M as init_dist, N as scope } from "./runtime-DqOdIqaJ.js";
import { C as hasFixedViewportDimensions, D as init_review, E as parseIframeResizeMessage, F as isReviewCollectionStoryRoute, I as isReviewSummaryPath, N as REVIEW_COLLECTION_QUERY_PARAM, O as REVIEW_EVENTS, P as init_routes, S as IFRAME_RESIZE_REQUEST_CONTEXT, T as init_iframe_resize, k as REVIEW_NAMESPACE, w as iframeResizeDimensionsEqual } from "./runtime-BORMtDTH.js";
import { L as W, N as useTransitionState, R as init_index_module, b as init_dist$1, k as init_esm, v as ACTIONS, y as components_default } from "./runtime-ByZHak7A.js";
import { a as curriedLighten$1, i as curriedDarken$1, o as curriedTransparentize$1, s as init_polished_esm } from "./runtime-CD3p6Bu2.js";
import { d as isPagesViewMode, l as focusableUIElements, u as init_layout } from "./runtime-Bis0saf2.js";
import { _ as useMediaQuery, f as init_useLandmark, g as init_useMedia, h as init_Notifications, m as Notifications, o as init_useLocation, p as useLandmark, s as useLocationHash, v as MEDIA_DESKTOP_BREAKPOINT, y as init_constants$1 } from "./runtime-CxQnUpQE.js";
import { Xn as $390e54f620492c70$export$f680877a34711e37 } from "./runtime-Bg3R07cf.js";
import { M as init_useId$1 } from "./runtime-DVA-jH96.js";
import { c as UpgradeBlock, l as init_UpgradeBlock } from "./runtime-iHnx1eaX.js";
import { n as useViewport, t as init_useViewport } from "./runtime-DPNAwVu5.js";
import { t as init_esm$1 } from "./runtime-CXJOeYet.js";
//#region src/manager/components/error-boundary/ManagerErrorBoundary.tsx
var Container$6, Content$1, Info, Heading, SubHeading, ErrorWrapper, CollapseToggle, ErrorMessage, ErrorStack, ErrorFallback, ManagerErrorBoundary;
var init_ManagerErrorBoundary = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_icons();
	init_polished_esm();
	init_emotion();
	Container$6 = styled.div(({ theme }) => ({
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "100vw",
		height: "100vh",
		backgroundColor: theme.background.app,
		color: theme.color.defaultText,
		fontFamily: theme.typography.fonts.base
	}));
	Content$1 = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		width: "80%",
		height: "80%",
		padding: 20,
		gap: 20,
		backgroundColor: theme.background.content,
		borderRadius: theme.appBorderRadius,
		border: `1px solid ${theme.color.negative}`,
		boxShadow: "0 0 64px rgba(0, 0, 0, 0.1)",
		overflow: "auto"
	}));
	Info = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		alignItems: "start",
		gap: 15
	}));
	Heading = styled.h1(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		margin: 0,
		gap: 10,
		fontSize: theme.typography.size.s2,
		fontWeight: theme.typography.weight.bold,
		color: theme.color.defaultText
	}));
	SubHeading = styled.p(({ theme }) => ({
		fontSize: theme.typography.size.s2,
		color: theme.textMutedColor,
		margin: 0,
		lineHeight: 1.4,
		textWrap: "balance"
	}));
	ErrorWrapper = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column-reverse",
		width: "100%",
		flex: "0 0 auto",
		border: `1px solid ${theme.appBorderColor}`,
		borderRadius: theme.appBorderRadius,
		pre: { borderRadius: 0 }
	}));
	CollapseToggle = styled.div(({ theme }) => ({
		flex: "0 0 auto",
		display: "flex",
		alignItems: "center",
		gap: 10,
		height: 40,
		width: "100%",
		padding: "0 10px",
		cursor: "pointer",
		fontSize: theme.typography.size.s2,
		fontWeight: theme.typography.weight.bold,
		color: theme.color.defaultText,
		userSelect: "none",
		"&:hover": { backgroundColor: theme.base === "light" ? "rgba(0, 0, 0, 0.02)" : "rgba(255, 255, 255, 0.03)" },
		svg: { color: theme.textMutedColor }
	}));
	ErrorMessage = styled.pre(({ theme }) => ({
		order: 1,
		padding: "11px 15px",
		margin: 0,
		fontSize: theme.typography.size.s1,
		color: theme.color.negativeText,
		backgroundColor: curriedTransparentize$1(theme.base === "light" ? .95 : .9, theme.color.negative),
		borderBottom: `1px solid ${theme.appBorderColor}`,
		whiteSpace: "pre-wrap",
		wordBreak: "break-word",
		fontFamily: theme.typography.fonts.mono,
		lineHeight: "18px"
	}));
	ErrorStack = styled.pre(({ theme }) => ({
		padding: 15,
		margin: 0,
		fontSize: theme.typography.size.s1,
		color: theme.textMutedColor,
		borderBottom: `1px solid ${theme.appBorderColor}`,
		borderRadius: 0,
		whiteSpace: "pre-wrap",
		wordBreak: "break-word",
		fontFamily: theme.typography.fonts.mono
	}));
	ErrorFallback = ({ error, errorInfo }) => {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container$6, { "data-testid": "manager-error-boundary" }, /* @__PURE__ */ _storybook_global_react_default.createElement(Content$1, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Info, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Heading, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Badge, { status: "negative" }, "Error"), /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, "Something went wrong")), /* @__PURE__ */ _storybook_global_react_default.createElement(SubHeading, null, "The Storybook Manager UI encountered an error. This is usually caused by custom addon code or configuration. Please check your browser console for more details. Try clearing browser storage if the issue persists."), /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			ariaLabel: false,
			asChild: true,
			size: "medium"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("a", { href: window.location.origin + window.location.pathname.replace("iframe.html", "") }, /* @__PURE__ */ _storybook_global_react_default.createElement(SyncIcon, { size: 14 }), "Reload Storybook"))), /* @__PURE__ */ _storybook_global_react_default.createElement(ErrorWrapper, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ErrorMessage, null, error.message || "Unknown error"), /* @__PURE__ */ _storybook_global_react_default.createElement(Collapsible, {
			collapsed: true,
			summary: ({ isCollapsed, toggleCollapsed }) => /* @__PURE__ */ _storybook_global_react_default.createElement(CollapseToggle, { onClick: toggleCollapsed }, /* @__PURE__ */ _storybook_global_react_default.createElement(UnfoldIcon, null), isCollapsed ? "Expand error" : "Collapse error")
		}, (error.stack || errorInfo?.componentStack) && /* @__PURE__ */ _storybook_global_react_default.createElement(ErrorStack, null, error.stack, errorInfo?.componentStack && `\n\nComponent Stack:${errorInfo.componentStack}`)))));
	};
	ManagerErrorBoundary = class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				hasError: false,
				error: null,
				errorInfo: null
			};
		}
		static getDerivedStateFromError(error) {
			return {
				hasError: true,
				error
			};
		}
		componentDidCatch(error, errorInfo) {
			console.error("Storybook Manager UI Error:", error);
			console.error("Component Stack:", errorInfo.componentStack);
			this.setState({ errorInfo });
			if (typeof globalThis.sendTelemetryError === "function") globalThis.sendTelemetryError(error);
		}
		render() {
			const { hasError, error, errorInfo } = this.state;
			const { children } = this.props;
			if (hasError && error) return /* @__PURE__ */ _storybook_global_react_default.createElement(ErrorFallback, {
				error,
				errorInfo
			});
			return children;
		}
	};
}));
//#endregion
//#region src/manager/components/layout/LayoutProvider.tsx
var LayoutContext, LayoutProvider, useLayout;
var init_LayoutProvider = __esmMin((() => {
	init__storybook_global_react();
	init_constants$1();
	init_useMedia();
	LayoutContext = createContext({
		isMobileAboutOpen: false,
		setMobileAboutOpen: () => {},
		isMobilePanelOpen: false,
		setMobilePanelOpen: () => {},
		isDesktop: false,
		isMobile: false
	});
	LayoutProvider = ({ children, forceDesktop }) => {
		const [isMobileAboutOpen, setMobileAboutOpen] = useState(false);
		const [isMobilePanelOpen, setMobilePanelOpen] = useState(false);
		const isDesktop = forceDesktop ?? useMediaQuery(`(min-width: 600px)`);
		const isMobile = !isDesktop;
		const contextValue = useMemo(() => ({
			isMobileAboutOpen,
			setMobileAboutOpen,
			isMobilePanelOpen,
			setMobilePanelOpen,
			isDesktop,
			isMobile
		}), [
			isMobileAboutOpen,
			isMobilePanelOpen,
			isDesktop,
			isMobile
		]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(LayoutContext.Provider, { value: contextValue }, children);
	};
	useLayout = () => useContext(LayoutContext);
})), slideIn$1, grow, Notification, NotificationWithInteractiveStates, NotificationButton, NotificationLink, NotificationIconWrapper, NotificationTextWrapper, Headline, SubHeadline, ItemContent, DismissButtonWrapper, DismissNotificationItem, NotificationItem;
var init_NotificationItem = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_router();
	init_icons();
	init_polished_esm();
	init_emotion();
	init_constants$1();
	slideIn$1 = keyframes$1({
		"0%": {
			opacity: 0,
			transform: "translateY(30px)"
		},
		"100%": {
			opacity: 1,
			transform: "translateY(0)"
		}
	});
	grow = keyframes$1({
		"0%": { width: "0%" },
		"100%": { width: "100%" }
	});
	Notification = styled.div(({ theme }) => ({
		position: "relative",
		display: "flex",
		border: `1px solid ${theme.appBorderColor}`,
		padding: "12px 6px 12px 12px",
		borderRadius: theme.appBorderRadius + 1,
		alignItems: "center",
		animation: `${slideIn$1} 500ms`,
		background: theme.base === "light" ? "hsla(203, 50%, 20%, .97)" : "hsla(203, 30%, 95%, .97)",
		boxShadow: `0 2px 5px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.1)`,
		color: theme.color.inverseText,
		textDecoration: "none",
		overflow: "hidden",
		[MEDIA_DESKTOP_BREAKPOINT]: { boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${theme.background.app}` }
	}), ({ duration, theme }) => duration && { "&::after": {
		content: "\"\"",
		display: "block",
		position: "absolute",
		bottom: 0,
		left: 0,
		height: 3,
		background: theme.color.secondary,
		animation: `${grow} ${duration}ms linear forwards reverse`
	} });
	NotificationWithInteractiveStates = styled(Notification)({
		cursor: "pointer",
		border: "none",
		outline: "none",
		textAlign: "left",
		transition: "all 150ms ease-out",
		transform: "translate3d(0, 0, 0)",
		"&:hover": {
			transform: "translate3d(0, -3px, 0)",
			boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
		},
		"&:active": {
			transform: "translate3d(0, 0, 0)",
			boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
		},
		"&:focus": { boxShadow: "rgba(2,156,253,1) 0 0 0 1px inset, 0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)" }
	});
	NotificationButton = NotificationWithInteractiveStates.withComponent("div");
	NotificationLink = NotificationWithInteractiveStates.withComponent(Link);
	NotificationIconWrapper = styled.div({
		display: "flex",
		marginRight: 10,
		alignItems: "center",
		svg: {
			width: 16,
			height: 16
		}
	});
	NotificationTextWrapper = styled.div(({ theme }) => ({
		width: "100%",
		display: "flex",
		flexDirection: "column",
		color: theme.color.inverseText
	}));
	Headline = styled.div(({ theme }) => ({
		height: "100%",
		alignItems: "center",
		whiteSpace: "balance",
		overflow: "hidden",
		textOverflow: "ellipsis",
		fontSize: theme.typography.size.s1,
		lineHeight: "16px",
		fontWeight: theme.typography.weight.bold
	}));
	SubHeadline = styled.div(({ theme }) => ({
		color: curriedTransparentize$1(.25, theme.color.inverseText),
		fontSize: theme.typography.size.s1 - 1,
		lineHeight: "14px",
		marginTop: 2,
		whiteSpace: "balance"
	}));
	ItemContent = ({ icon, content: { headline, subHeadline } }) => /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, !icon || /* @__PURE__ */ _storybook_global_react_default.createElement(NotificationIconWrapper, null, icon), /* @__PURE__ */ _storybook_global_react_default.createElement(NotificationTextWrapper, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Headline, { title: headline }, headline), subHeadline && /* @__PURE__ */ _storybook_global_react_default.createElement(SubHeadline, null, subHeadline)));
	DismissButtonWrapper = styled(Button)(({ theme }) => ({
		width: 28,
		alignSelf: "center",
		marginTop: 0,
		color: theme.base === "light" ? "rgba(255,255,255,0.7)" : " #999999"
	}));
	DismissNotificationItem = ({ onDismiss }) => /* @__PURE__ */ _storybook_global_react_default.createElement(DismissButtonWrapper, {
		padding: "small",
		variant: "ghost",
		ariaLabel: "Dismiss notification",
		onClick: (e) => {
			e.preventDefault();
			e.stopPropagation();
			onDismiss();
		}
	}, /* @__PURE__ */ _storybook_global_react_default.createElement(CloseAltIcon, { size: 12 }));
	styled.div({ height: 48 });
	NotificationItem = ({ notification: { content, duration, link, onClear, onClick, id, icon }, onDismissNotification, zIndex }) => {
		const onTimeout = useCallback(() => {
			onDismissNotification(id);
			if (onClear) onClear({
				dismissed: false,
				timeout: true
			});
		}, [
			id,
			onDismissNotification,
			onClear
		]);
		const timer = useRef(null);
		useEffect(() => {
			if (!duration) return;
			timer.current = setTimeout(onTimeout, duration);
			return () => clearTimeout(timer.current);
		}, [duration, onTimeout]);
		const onDismiss = useCallback(() => {
			clearTimeout(timer.current);
			onDismissNotification(id);
			if (onClear) onClear({
				dismissed: true,
				timeout: false
			});
		}, [
			id,
			onDismissNotification,
			onClear
		]);
		if (link) return /* @__PURE__ */ _storybook_global_react_default.createElement(NotificationLink, {
			to: link,
			duration,
			style: { zIndex }
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ItemContent, {
			icon,
			content
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(DismissNotificationItem, { onDismiss }));
		if (onClick) return /* @__PURE__ */ _storybook_global_react_default.createElement(NotificationButton, {
			duration,
			onClick: () => onClick({ onDismiss }),
			style: { zIndex }
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ItemContent, {
			icon,
			content
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(DismissNotificationItem, { onDismiss }));
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Notification, {
			duration,
			style: { zIndex }
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ItemContent, {
			icon,
			content
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(DismissNotificationItem, { onDismiss }));
	};
}));
//#endregion
//#region src/manager/components/notifications/NotificationList.tsx
var NotificationList, List;
var init_NotificationList = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	init_LayoutProvider();
	init_NotificationItem();
	NotificationList = ({ notifications, clearNotification }) => {
		const { isMobile } = useLayout();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(List, { isMobile }, notifications && notifications.map((notification, index) => /* @__PURE__ */ _storybook_global_react_default.createElement(NotificationItem, {
			key: notification.id,
			onDismissNotification: (id) => clearNotification(id),
			notification,
			zIndex: notifications.length - index
		})));
	};
	List = styled.div({
		zIndex: 200,
		"> * + *": { marginTop: 12 },
		"&:empty": { display: "none" }
	}, ({ isMobile }) => isMobile && {
		position: "fixed",
		bottom: 40,
		margin: 20
	});
}));
//#endregion
//#region src/manager/components/mobile/navigation/MobileAddonsDrawer.tsx
var MobileAddonsDrawer;
var init_MobileAddonsDrawer = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_constants$1();
	MobileAddonsDrawer = ({ children, id, isOpen, onOpenChange }) => {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Modal, {
			ariaLabel: "Addon panel",
			transitionDuration: 300,
			variant: "bottom-drawer",
			height: "42dvh",
			id,
			open: isOpen,
			onOpenChange
		}, children);
	};
}));
//#endregion
//#region src/manager/components/mobile/about/MobileAbout.tsx
var MobileAbout, slideFromRight, slideToRight, Container$5, InnerArea, LinkList, BottomText, CloseButton;
var init_MobileAbout = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_icons();
	init_FocusScope();
	init_esm();
	init_emotion();
	init_constants$1();
	init_LayoutProvider();
	init_UpgradeBlock();
	MobileAbout = () => {
		const { isMobileAboutOpen, setMobileAboutOpen } = useLayout();
		const aboutRef = useRef(null);
		const [state, toggle] = useTransitionState({
			timeout: 300,
			mountOnEnter: true,
			unmountOnExit: true
		});
		useEffect(() => {
			toggle(isMobileAboutOpen);
		}, [isMobileAboutOpen, toggle]);
		if (!state.isMounted) return null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container$5, {
			ref: aboutRef,
			$status: state.status,
			$transitionDuration: 300
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(FocusScope, {
			contain: true,
			restoreFocus: true,
			autoFocus: true
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ScrollArea, {
			vertical: true,
			offset: 3,
			scrollbarSize: 6
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(InnerArea, null, /* @__PURE__ */ _storybook_global_react_default.createElement(CloseButton, {
			onClick: () => setMobileAboutOpen(false),
			ariaLabel: "Close about section",
			tooltip: "Close about section",
			variant: "ghost"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ArrowLeftIcon, null), "Back"), /* @__PURE__ */ _storybook_global_react_default.createElement(LinkList, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Link, {
			ariaLabel: false,
			href: "https://github.com/storybookjs/storybook",
			target: "_blank",
			rel: "noopener noreferrer"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(GithubIcon, null)), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, "GitHub")), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ShareAltIcon, null)))), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Link, {
			ariaLabel: false,
			href: "https://storybook.js.org/docs/get-started/install?ref=ui",
			target: "_blank",
			rel: "noopener noreferrer"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(StorybookIcon, null)), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, "Documentation")), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Icon, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ShareAltIcon, null))))), /* @__PURE__ */ _storybook_global_react_default.createElement(UpgradeBlock, null), /* @__PURE__ */ _storybook_global_react_default.createElement(BottomText, null, "Open source software maintained by", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link$1, {
			href: "https://chromatic.com",
			target: "_blank",
			rel: "noopener noreferrer"
		}, "Chromatic"), " ", "and the", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Link$1, {
			href: "https://github.com/storybookjs/storybook/graphs/contributors",
			target: "_blank",
			rel: "noopener noreferrer"
		}, "Storybook Community"))))));
	};
	slideFromRight = keyframes$1({
		from: {
			opacity: 0,
			transform: "translate(20px, 0)"
		},
		to: {
			opacity: 1,
			transform: "translate(0, 0)"
		}
	});
	slideToRight = keyframes$1({
		from: {
			opacity: 1,
			transform: "translate(0, 0)"
		},
		to: {
			opacity: 0,
			transform: "translate(20px, 0)"
		}
	});
	Container$5 = styled.div(({ theme, $status, $transitionDuration }) => ({
		position: "absolute",
		width: "100%",
		height: "100%",
		borderRadius: "10px 10px 0 0",
		top: 0,
		left: 0,
		zIndex: 11,
		overflow: "auto",
		color: theme.color.defaultText,
		background: theme.background.content,
		animation: $status === "exiting" ? `${slideToRight} ${$transitionDuration}ms` : `${slideFromRight} ${$transitionDuration}ms`
	}));
	InnerArea = styled.div({
		display: "flex",
		flexDirection: "column",
		gap: 20,
		padding: "25px 12px 20px"
	});
	LinkList = styled(ActionList)({ padding: 0 });
	BottomText = styled.div(({ theme }) => ({
		fontSize: theme.typography.size.s2 - 1,
		marginTop: 30
	}));
	CloseButton = styled(Button)({ alignSelf: "start" });
}));
//#endregion
//#region src/manager/components/mobile/navigation/MobileMenuDrawer.tsx
var MobileMenuDrawer;
var init_MobileMenuDrawer = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_constants$1();
	init_LayoutProvider();
	init_MobileAbout();
	MobileMenuDrawer = ({ children, id, isOpen, onOpenChange }) => {
		const { setMobileAboutOpen } = useLayout();
		useEffect(() => {
			if (!isOpen) {
				const timeout = setTimeout(setMobileAboutOpen, 300, false);
				return () => clearTimeout(timeout);
			}
		}, [isOpen, setMobileAboutOpen]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Modal, {
			ariaLabel: "Menu",
			transitionDuration: 300,
			variant: "bottom-drawer",
			height: "90dvh",
			id,
			open: isOpen,
			onOpenChange
		}, children, /* @__PURE__ */ _storybook_global_react_default.createElement(MobileAbout, null));
	};
}));
//#endregion
//#region src/manager/components/mobile/navigation/MobileNavigation.tsx
function combineIndexes(rootIndex, refs) {
	const combinedIndex = { ...rootIndex || {} };
	Object.values(refs).forEach((ref) => {
		if (ref.index) Object.assign(combinedIndex, ref.index);
	});
	return combinedIndex;
}
var useFullStoryName, MobileBottomBarContent, MobileNavigation, Container$4, MobileBottomBar, BottomBarButton, Text$1;
var init_MobileNavigation = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_icons();
	init_useId$1();
	init_manager_api();
	init_emotion();
	init_useLandmark();
	init_LayoutProvider();
	init_MobileAddonsDrawer();
	init_MobileMenuDrawer();
	useFullStoryName = () => {
		const { index, refs } = useStorybookState();
		const api = useStorybookApi();
		const currentStory = api.getCurrentStoryData();
		const combinedIndex = useMemo(() => combineIndexes(index, refs || {}), [index, refs]);
		if (!currentStory) return {
			fullStoryAriaLabel: "",
			fullStoryName: ""
		};
		const labelContext = {
			isMobile: true,
			location: "bottom-bar"
		};
		const storyLabel = currentStory.renderLabel?.(currentStory, api, labelContext);
		let fullStoryName = typeof storyLabel === "string" ? storyLabel : currentStory.name;
		const storyAriaLabel = currentStory.renderAriaLabel?.(currentStory, api, labelContext);
		let fullStoryAriaLabel = typeof storyAriaLabel === "string" ? storyAriaLabel : fullStoryName;
		let node = combinedIndex[currentStory.id];
		while (node && "parent" in node && node.parent && combinedIndex[node.parent]) {
			node = combinedIndex[node.parent];
			const parentLabel = node.renderLabel?.(node, api, labelContext);
			const parentName = typeof parentLabel === "string" ? parentLabel : node.name;
			const parentAriaOutput = node.renderAriaLabel?.(node, api, labelContext);
			const parentAriaLabel = typeof parentAriaOutput === "string" ? parentAriaOutput : parentName;
			if (fullStoryName.length < 24) fullStoryName = `${parentName}/${fullStoryName}`;
			fullStoryAriaLabel = `${parentAriaLabel}/${fullStoryAriaLabel}`;
		}
		return {
			fullStoryAriaLabel,
			fullStoryName
		};
	};
	MobileBottomBarContent = ({ fullStoryAriaLabel, fullStoryName, isMobileMenuOpen, setMobileMenuOpen, isMobilePanelOpen, setMobilePanelOpen, showMenu, showPanel, navShortcut }) => {
		const headingId = $390e54f620492c70$export$f680877a34711e37();
		const sectionRef = useRef(null);
		const { landmarkProps } = useLandmark({
			"aria-labelledby": headingId,
			role: "banner"
		}, sectionRef);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(MobileBottomBar, {
			className: "sb-bar",
			...landmarkProps,
			ref: sectionRef
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("h2", {
			id: headingId,
			className: "sb-sr-only"
		}, "Navigation controls"), showMenu && /* @__PURE__ */ _storybook_global_react_default.createElement(BottomBarButton, {
			padding: "small",
			variant: "ghost",
			onClick: () => setMobileMenuOpen(!isMobileMenuOpen),
			ariaLabel: "Open navigation menu",
			"aria-expanded": isMobileMenuOpen,
			"aria-controls": isMobileMenuOpen ? "storybook-mobile-menu" : void 0,
			shortcut: navShortcut
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(MenuIcon, null), /* @__PURE__ */ _storybook_global_react_default.createElement(Text$1, null, fullStoryName)), /* @__PURE__ */ _storybook_global_react_default.createElement("span", {
			className: "sb-sr-only",
			"aria-current": "page"
		}, "Current page: ", fullStoryAriaLabel), showPanel && /* @__PURE__ */ _storybook_global_react_default.createElement(BottomBarButton, {
			padding: "small",
			variant: "ghost",
			onClick: () => setMobilePanelOpen(true),
			ariaLabel: "Open addon panel",
			"aria-expanded": isMobilePanelOpen,
			"aria-controls": isMobilePanelOpen ? "storybook-mobile-addon-panel" : void 0
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(BottomBarToggleIcon, null)));
	};
	MobileNavigation = ({ menu, panel, showMenu = true, showPanel, ...props }) => {
		const { isMobilePanelOpen, setMobilePanelOpen } = useLayout();
		const { fullStoryAriaLabel, fullStoryName } = useFullStoryName();
		const api = useStorybookApi();
		const { layout, ui } = useStorybookState();
		const isMobileMenuOpen = layout.showMobileNavigation;
		const setMobileMenuOpen = useCallback((open) => api.setMobileNavigation(open), [api]);
		const apiRef = useRef(api);
		apiRef.current = api;
		useEffect(() => () => apiRef.current.setMobileNavigation(false), []);
		const navShortcut = ui.enableShortcuts ?? true ? api.getShortcutKeys().toggleNav : void 0;
		useLayoutEffect(() => {
			if (!showMenu) setMobileMenuOpen(false);
		}, [showMenu, setMobileMenuOpen]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container$4, props, showMenu && /* @__PURE__ */ _storybook_global_react_default.createElement(MobileMenuDrawer, {
			id: "storybook-mobile-menu",
			isOpen: isMobileMenuOpen,
			onOpenChange: setMobileMenuOpen
		}, menu), /* @__PURE__ */ _storybook_global_react_default.createElement(MobileAddonsDrawer, {
			id: "storybook-mobile-addon-panel",
			isOpen: isMobilePanelOpen,
			onOpenChange: setMobilePanelOpen
		}, panel), !isMobilePanelOpen && (showMenu || showPanel) && /* @__PURE__ */ _storybook_global_react_default.createElement(MobileBottomBarContent, {
			fullStoryAriaLabel,
			fullStoryName,
			isMobileMenuOpen,
			setMobileMenuOpen,
			isMobilePanelOpen,
			setMobilePanelOpen,
			showMenu,
			showPanel,
			navShortcut
		}));
	};
	Container$4 = styled.section(({ theme }) => ({
		bottom: 0,
		left: 0,
		width: "100%",
		zIndex: 10,
		background: theme.barBg,
		borderTop: `1px solid ${theme.appBorderColor}`
	}));
	MobileBottomBar = styled.header({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: 40,
		padding: "0 6px",
		"& > *:first-child": {
			maxWidth: "calc(100% - 40px)",
			"& > button": { maxWidth: "100%" },
			"& > button p": { textOverflow: "ellipsis" }
		}
	});
	BottomBarButton = styled(Button)({
		WebkitLineClamp: 1,
		flexShrink: 1,
		p: { textOverflow: "ellipsis" }
	});
	Text$1 = styled.p({
		display: "-webkit-box",
		WebkitLineClamp: 1,
		WebkitBoxOrient: "vertical",
		overflow: "hidden"
	});
}));
//#endregion
//#region src/manager/components/layout/MainAreaContainer.tsx
var PagesInnerContainer, PagesContainer, MainInnerContainer, MainAreaContainer;
var init_MainAreaContainer = __esmMin((() => {
	init__storybook_global_react();
	init_router();
	init_emotion();
	init_constants$1();
	init_useLandmark();
	PagesInnerContainer = styled.main(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		flex: 1,
		minHeight: 0,
		backgroundColor: theme.appContentBg,
		zIndex: 1,
		[MEDIA_DESKTOP_BREAKPOINT]: {
			gridRowStart: "sidebar-start",
			gridRowEnd: "-1",
			gridColumnStart: "sidebar-end",
			gridColumnEnd: "-1"
		}
	}));
	PagesContainer = _storybook_global_react_default.memo(function PagesContainer(props) {
		const { children } = props;
		const mainRef = useRef(null);
		const { landmarkProps } = useLandmark({
			"aria-labelledby": "main-content-heading",
			role: "main"
		}, mainRef);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(PagesInnerContainer, {
			id: "main-content-wrapper",
			ref: mainRef,
			...landmarkProps
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("h2", {
			id: "main-content-heading",
			className: "sb-sr-only"
		}, "Main content"), children);
	});
	MainInnerContainer = styled.div(({ theme, shown }) => ({
		flex: 1,
		position: "relative",
		backgroundColor: theme.appContentBg,
		display: shown ? "grid" : "none",
		overflow: "auto",
		[MEDIA_DESKTOP_BREAKPOINT]: {
			flex: "auto",
			gridArea: "content"
		}
	}));
	MainAreaContainer = _storybook_global_react_default.memo(function MainAreaContainer({ showPages, slotMain, slotPages }) {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, showPages ? /* @__PURE__ */ _storybook_global_react_default.createElement(PagesContainer, null, slotPages) : /* @__PURE__ */ _storybook_global_react_default.createElement(Match, {
			path: /(^\/story|docs|onboarding\/|^\/$)/,
			startsWith: false
		}, ({ match }) => /* @__PURE__ */ _storybook_global_react_default.createElement(MainInnerContainer, { shown: !!match }, slotMain)));
	});
}));
//#endregion
//#region src/manager/components/layout/Drag.tsx
var oppositePosition, Drag, DragHandle$1;
var init_Drag = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	init_TooltipNote();
	init_TooltipProvider();
	oppositePosition = {
		left: "right",
		right: "left",
		top: "bottom",
		bottom: "top"
	};
	Drag = forwardRef(function Drag(props, ref) {
		const { overlapping, position, "aria-label": ariaLabel, "aria-valuenow": ariaValueNow, "aria-valuemax": ariaValueMax, ...rest } = props;
		const orientation = position === "left" || position === "right" ? "vertical" : "horizontal";
		const tooltipNote = orientation === "vertical" ? "← → to resize" : "↑ ↓ to resize";
		return /* @__PURE__ */ _storybook_global_react_default.createElement(TooltipProvider, {
			triggerOnFocusOnly: true,
			placement: oppositePosition[position],
			tooltip: /* @__PURE__ */ _storybook_global_react_default.createElement(TooltipNote, { note: tooltipNote })
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(DragHandle$1, {
			ref,
			$orientation: orientation,
			$overlapping: overlapping,
			$position: position,
			role: "separator",
			tabIndex: 0,
			"aria-orientation": orientation,
			"aria-label": ariaLabel,
			"aria-valuenow": ariaValueNow,
			"aria-valuemin": 0,
			"aria-valuemax": ariaValueMax,
			...rest
		}));
	});
	DragHandle$1 = styled.div(({ theme }) => ({
		position: "absolute",
		opacity: 0,
		transition: "opacity 0.2s ease-in-out",
		zIndex: 100,
		"&:after": {
			content: "\"\"",
			display: "block",
			backgroundColor: theme.color.secondary
		},
		"&:hover": { opacity: 1 }
	}), ({ theme, $orientation = "vertical" }) => ({ "&:focus-visible": {
		opacity: 1,
		outline: "2px solid transparent",
		...$orientation === "horizontal" ? { height: 7 } : { width: 7 },
		boxShadow: `inset 0 0 0 4px ${theme.color.secondary}`,
		"@media (forced-colors: active)": { outline: "2px solid Highlight" }
	} }), ({ $orientation = "vertical", $overlapping = true, $position = "left" }) => $orientation === "vertical" ? {
		width: $overlapping ? $position === "left" ? 10 : 13 : 7,
		height: "100%",
		top: 0,
		right: $position === "left" ? -7 : void 0,
		left: $position === "right" ? -7 : void 0,
		"&:after": {
			width: 1,
			height: "100%",
			marginLeft: $position === "left" ? 3 : 6
		},
		"&:hover": { cursor: "col-resize" }
	} : {
		width: "100%",
		height: $overlapping ? 13 : 7,
		top: $position === "bottom" ? -7 : void 0,
		bottom: $position === "top" ? -7 : void 0,
		left: 0,
		"&:after": {
			width: "100%",
			height: 1,
			marginTop: 6
		},
		"&:hover": { cursor: "row-resize" }
	});
}));
//#endregion
//#region src/manager/components/layout/PanelContainer.tsx
var Container$3, PanelSlot, PanelContainer;
var init_PanelContainer = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	init_Drag();
	Container$3 = styled.div(({ theme, position }) => ({
		gridArea: "panel",
		position: "relative",
		backgroundColor: theme.appContentBg,
		borderTop: position === "bottom" ? `1px solid ${theme.appBorderColor}` : void 0,
		borderLeft: position === "right" ? `1px solid ${theme.appBorderColor}` : void 0
	}));
	PanelSlot = styled.div({ height: "100%" });
	PanelContainer = _storybook_global_react_default.memo(function PanelContainer(props) {
		const { children, bottomPanelHeight, rightPanelWidth, panelMaxSize, panelResizerRef, position } = props;
		const shouldHidePanelContent = position === "bottom" ? bottomPanelHeight === 0 : rightPanelWidth === 0;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container$3, { position }, /* @__PURE__ */ _storybook_global_react_default.createElement(Drag, {
			ref: panelResizerRef,
			position,
			overlapping: position === "bottom" ? !!bottomPanelHeight : !!rightPanelWidth,
			"aria-label": "Addon panel resize handle",
			"aria-valuenow": position === "bottom" ? bottomPanelHeight : rightPanelWidth,
			"aria-valuemax": panelMaxSize
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(PanelSlot, {
			hidden: shouldHidePanelContent ? true : void 0,
			"aria-hidden": shouldHidePanelContent ? true : void 0
		}, children));
	});
}));
//#endregion
//#region src/manager/components/layout/SidebarContainer.tsx
var Container$2, SidebarSlot, SidebarContainer;
var init_SidebarContainer = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	init_Drag();
	Container$2 = styled.div(({ theme }) => ({
		backgroundColor: theme.appBg,
		gridArea: "sidebar",
		position: "relative",
		borderRight: `1px solid ${theme.appBorderColor}`
	}));
	SidebarSlot = styled.div({ height: "100%" });
	SidebarContainer = _storybook_global_react_default.memo(function SidebarContainer(props) {
		const { children, navSize, sidebarMaxWidth, sidebarResizerRef } = props;
		const shouldHideSidebarContent = navSize === 0;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container$2, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarSlot, {
			hidden: shouldHideSidebarContent ? true : void 0,
			"aria-hidden": shouldHideSidebarContent ? true : void 0
		}, children), /* @__PURE__ */ _storybook_global_react_default.createElement(Drag, {
			ref: sidebarResizerRef,
			position: "left",
			"aria-label": "Sidebar resize handle",
			"aria-valuenow": navSize,
			"aria-valuemax": sidebarMaxWidth
		}));
	});
}));
//#endregion
//#region src/manager/components/layout/useDragging.ts
/** Clamps a value between min and max. */
function clamp(value, min, max) {
	return Math.min(Math.max(value, min), max);
}
/** Interpolates a value between min and max based on the relativeValue. */
function interpolate(relativeValue, min, max) {
	return min + (max - min) * relativeValue;
}
/**
* Computes the maximum width for the sidebar, accounting for the content minimum and the panel's
* estimated horizontal footprint. When the panel is at the bottom its minimum enforced width is
* reserved so the browser never squashes it below `MINIMUM_HORIZONTAL_PANEL_WIDTH_PX`.
*/
function computeSidebarMaxWidth(panelPosition, rightPanelWidth, showPanel) {
	if (typeof window === "undefined") return 0;
	const panelWidth = !showPanel ? 0 : panelPosition === "right" ? rightPanelWidth : 360;
	return Math.max(window.innerWidth - 100 - panelWidth, 0);
}
/**
* Computes the maximum size for the panel:
*
* - Bottom panel: `innerHeight` minus the toolbar so it cannot push the toolbar off-screen.
* - Right panel: `innerWidth` minus the content minimum and the sidebar.
*/
function computePanelMaxSize(panelPosition, navSize) {
	if (typeof window === "undefined") return 0;
	if (panelPosition === "bottom") return Math.max(window.innerHeight - 40, 0);
	return Math.max(window.innerWidth - 100 - navSize, 0);
}
/**
* Given the current layout state, a size key, a max size, and the key pressed, returns the next
* layout state with the resized panel/sidebar. All sidebar/panel-specific logic lives in the
* callers; this function is fully parameterised.
*
* @param sizeKey - The layout state key to resize.
* @param maxSize - The effective maximum size for the region.
* @param increaseKey - The key that grows the region.
* @param decreaseKey - The key that shrinks the region.
*/
function applyResizeKeyboard(state, sizeKey, key, step, minSize, maxSize, increaseKey, decreaseKey) {
	const currentSize = state[sizeKey];
	switch (key) {
		case increaseKey: return {
			...state,
			[sizeKey]: clamp(currentSize + step, minSize, maxSize)
		};
		case decreaseKey:
			const effectivelyComputed = clamp(currentSize - step, 0, maxSize);
			return {
				...state,
				[sizeKey]: effectivelyComputed < minSize ? 0 : effectivelyComputed
			};
		case "Home": return {
			...state,
			[sizeKey]: 0
		};
		case "End": return {
			...state,
			[sizeKey]: maxSize
		};
		default: return state;
	}
}
function useDragging({ setState, showPanel, isDesktop, navSize, rightPanelWidth, panelPosition }) {
	const panelResizerRef = useRef(null);
	const sidebarResizerRef = useRef(null);
	const sidebarMaxWidth = computeSidebarMaxWidth(panelPosition, rightPanelWidth, showPanel);
	const panelMaxSize = computePanelMaxSize(panelPosition, navSize);
	useEffect(() => {
		const panelResizer = panelResizerRef.current;
		const sidebarResizer = sidebarResizerRef.current;
		let draggedElement = null;
		const onDragStart = (e) => {
			e.preventDefault();
			if (e.currentTarget === panelResizer) draggedElement = panelResizer;
			else if (e.currentTarget === sidebarResizer) draggedElement = sidebarResizer;
			setState((state) => ({
				...state,
				isDragging: true,
				dragCursor: draggedElement === panelResizer && state.panelPosition === "bottom" ? "row-resize" : "col-resize"
			}));
			window.addEventListener("mousemove", onDrag);
			window.addEventListener("mouseup", onDragEnd);
		};
		const onDragEnd = () => {
			setState((state) => {
				if (draggedElement === sidebarResizer) {
					if (state.navSize < 240 && state.navSize > 0) return {
						...state,
						isDragging: false,
						navSize: 240
					};
				}
				if (draggedElement === panelResizer) {
					if (state.panelPosition === "right" && state.rightPanelWidth < 270 && state.rightPanelWidth > 0) return {
						...state,
						isDragging: false,
						rightPanelWidth: 270
					};
					else if (state.panelPosition === "bottom" && state.bottomPanelHeight < 40 && state.bottomPanelHeight > 0) return {
						...state,
						isDragging: false,
						bottomPanelHeight: 40
					};
				}
				return {
					...state,
					isDragging: false
				};
			});
			window.removeEventListener("mousemove", onDrag);
			window.removeEventListener("mouseup", onDragEnd);
			draggedElement = null;
		};
		const onDrag = (e) => {
			if (e.buttons === 0) {
				onDragEnd();
				return;
			}
			setState((state) => {
				if (draggedElement === sidebarResizer) {
					const sidebarDragX = e.clientX;
					if (sidebarDragX === state.navSize) return state;
					if (sidebarDragX <= SNAP_THRESHOLD_PX) return {
						...state,
						navSize: 0
					};
					if (sidebarDragX <= 240) return {
						...state,
						navSize: interpolate(STIFFNESS, sidebarDragX, 240)
					};
					return {
						...state,
						navSize: clamp(sidebarDragX, 0, computeSidebarMaxWidth(state.panelPosition, state.rightPanelWidth, showPanel))
					};
				}
				if (draggedElement === panelResizer) {
					const sizeAxisState = state.panelPosition === "bottom" ? "bottomPanelHeight" : "rightPanelWidth";
					const panelDragSize = state.panelPosition === "bottom" ? e.view.innerHeight - e.clientY : e.view.innerWidth - e.clientX;
					const minimumSize = state.panelPosition === "bottom" ? 40 : 270;
					if (panelDragSize === state[sizeAxisState]) return state;
					if (panelDragSize <= SNAP_THRESHOLD_PX) return {
						...state,
						[sizeAxisState]: 0
					};
					if (panelDragSize <= minimumSize) return {
						...state,
						[sizeAxisState]: interpolate(STIFFNESS, panelDragSize, minimumSize)
					};
					return {
						...state,
						[sizeAxisState]: clamp(panelDragSize, 0, computePanelMaxSize(state.panelPosition, state.navSize))
					};
				}
				return state;
			});
		};
		const onSidebarKeyDown = (e) => {
			if (!RESIZE_KEYS.includes(e.key)) return;
			e.preventDefault();
			const step = e.shiftKey ? KEYBOARD_STEP_PX * KEYBOARD_SHIFT_MULTIPLIER : KEYBOARD_STEP_PX;
			setState((state) => applyResizeKeyboard(state, "navSize", e.key, step, 240, computeSidebarMaxWidth(state.panelPosition, state.rightPanelWidth, showPanel), "ArrowRight", "ArrowLeft"));
		};
		const onPanelKeyDown = (e) => {
			if (!RESIZE_KEYS.includes(e.key)) return;
			e.preventDefault();
			const step = e.shiftKey ? KEYBOARD_STEP_PX * KEYBOARD_SHIFT_MULTIPLIER : KEYBOARD_STEP_PX;
			setState((state) => applyResizeKeyboard(state, state.panelPosition === "bottom" ? "bottomPanelHeight" : "rightPanelWidth", e.key, step, state.panelPosition === "bottom" ? 40 : 270, computePanelMaxSize(state.panelPosition, state.navSize), state.panelPosition === "bottom" ? "ArrowUp" : "ArrowLeft", state.panelPosition === "bottom" ? "ArrowDown" : "ArrowRight"));
		};
		panelResizer?.addEventListener("mousedown", onDragStart);
		sidebarResizer?.addEventListener("mousedown", onDragStart);
		panelResizer?.addEventListener("keydown", onPanelKeyDown);
		sidebarResizer?.addEventListener("keydown", onSidebarKeyDown);
		return () => {
			panelResizer?.removeEventListener("mousedown", onDragStart);
			sidebarResizer?.removeEventListener("mousedown", onDragStart);
			panelResizer?.removeEventListener("keydown", onPanelKeyDown);
			sidebarResizer?.removeEventListener("keydown", onSidebarKeyDown);
		};
	}, [
		showPanel,
		isDesktop,
		setState
	]);
	return {
		panelResizerRef,
		sidebarResizerRef,
		sidebarMaxWidth,
		panelMaxSize
	};
}
var SNAP_THRESHOLD_PX, STIFFNESS, KEYBOARD_STEP_PX, KEYBOARD_SHIFT_MULTIPLIER, RESIZE_KEYS;
var init_useDragging = __esmMin((() => {
	init__storybook_global_react();
	init_constants$1();
	SNAP_THRESHOLD_PX = 30;
	STIFFNESS = .9;
	KEYBOARD_STEP_PX = 10;
	KEYBOARD_SHIFT_MULTIPLIER = 5;
	RESIZE_KEYS = [
		"ArrowLeft",
		"ArrowRight",
		"ArrowUp",
		"ArrowDown",
		"Home",
		"End"
	];
}));
//#endregion
//#region src/manager/components/layout/useLandmarkIndicator.ts
function findLandmarkElement(element) {
	let currentElement = element instanceof Element ? element : null;
	let landmarkElement = null;
	while (currentElement) {
		if (currentElement instanceof HTMLElement && currentElement.hasAttribute("data-sb-landmark")) {
			landmarkElement = currentElement;
			break;
		}
		currentElement = currentElement.parentElement;
	}
	return landmarkElement;
}
function useRegionFocusAnimation() {
	const theme = useTheme();
	const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
	const currentAnimationRef = useRef(null);
	const animateLandmark = (elementToAnimate) => {
		if (!elementToAnimate) return;
		if (currentAnimationRef.current) {
			currentAnimationRef.current.cancel();
			currentAnimationRef.current = null;
		}
		if (!reducedMotion) {
			const animation = elementToAnimate.animate([{ border: `2px solid ${theme.color.primary}` }, { border: `2px solid transparent` }], {
				duration: 1500,
				pseudoElement: "::after"
			});
			currentAnimationRef.current = animation;
			animation.onfinish = () => {
				currentAnimationRef.current = null;
			};
		}
	};
	return animateLandmark;
}
function useLandmarkIndicator() {
	const animateLandmark = useRegionFocusAnimation();
	useEffect(() => {
		let armedUntil = 0;
		const handleKeyDown = (e) => {
			if (e.key === "F6") armedUntil = Date.now() + 250;
		};
		const handleFocusIn = (e) => {
			if (Date.now() > armedUntil) return;
			armedUntil = 0;
			const landmarkElement = findLandmarkElement(e.target);
			if (landmarkElement) animateLandmark(landmarkElement);
		};
		document.addEventListener("keydown", handleKeyDown, { capture: true });
		document.addEventListener("focusin", handleFocusIn, { capture: true });
		return () => {
			document.removeEventListener("keydown", handleKeyDown, { capture: true });
			document.removeEventListener("focusin", handleFocusIn, { capture: true });
		};
	}, [animateLandmark]);
}
var init_useLandmarkIndicator = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	init_useMedia();
}));
//#endregion
//#region src/manager/components/layout/Layout.tsx
var layoutStateIsEqual, useLayoutSyncingState, OrderedMobileNavigation, Layout, ContentOverlayCell, DragShield, LayoutContainer;
var init_Layout = __esmMin((() => {
	init__storybook_global_react();
	init_manager_api();
	init_emotion();
	init_layout();
	init_constants$1();
	init_Notifications();
	init_MobileNavigation();
	init_LayoutProvider();
	init_MainAreaContainer();
	init_PanelContainer();
	init_SidebarContainer();
	init_useDragging();
	init_useLandmarkIndicator();
	layoutStateIsEqual = (state, other) => state.navSize === other.navSize && state.bottomPanelHeight === other.bottomPanelHeight && state.rightPanelWidth === other.rightPanelWidth && state.panelPosition === other.panelPosition;
	useLayoutSyncingState = ({ api, managerLayoutState, setManagerLayoutState, isDesktop }) => {
		const prevManagerLayoutStateRef = _storybook_global_react_default.useRef(managerLayoutState);
		const [internalDraggingSizeState, setInternalDraggingSizeState] = useState({
			...managerLayoutState,
			isDragging: false,
			dragCursor: "col-resize"
		});
		/** Sync FROM managerLayoutState to internalDraggingState if user is not dragging */
		useEffect(() => {
			if (internalDraggingSizeState.isDragging || layoutStateIsEqual(managerLayoutState, prevManagerLayoutStateRef.current)) return;
			prevManagerLayoutStateRef.current = managerLayoutState;
			setInternalDraggingSizeState((state) => ({
				...state,
				...managerLayoutState
			}));
		}, [
			internalDraggingSizeState.isDragging,
			managerLayoutState,
			setInternalDraggingSizeState
		]);
		/** Sync size changes TO managerLayoutState when drag is done */
		useLayoutEffect(() => {
			if (internalDraggingSizeState.isDragging || layoutStateIsEqual(managerLayoutState, internalDraggingSizeState)) return;
			const nextState = {
				navSize: internalDraggingSizeState.navSize,
				bottomPanelHeight: internalDraggingSizeState.bottomPanelHeight,
				rightPanelWidth: internalDraggingSizeState.rightPanelWidth
			};
			prevManagerLayoutStateRef.current = {
				...prevManagerLayoutStateRef.current,
				...nextState
			};
			setManagerLayoutState(nextState);
		}, [internalDraggingSizeState, setManagerLayoutState]);
		const isPagesShown = isPagesViewMode(managerLayoutState.viewMode);
		const isPanelShown = managerLayoutState.viewMode === "story";
		const { navSize, rightPanelWidth, bottomPanelHeight } = internalDraggingSizeState.isDragging ? internalDraggingSizeState : managerLayoutState;
		const customisedNavSize = api.getNavSizeWithCustomisations?.(navSize) ?? navSize;
		const customisedShowPanel = api.getShowPanelWithCustomisations?.(isPanelShown) ?? isPanelShown;
		const { panelResizerRef, sidebarResizerRef, sidebarMaxWidth, panelMaxSize } = useDragging({
			setState: setInternalDraggingSizeState,
			isDesktop,
			navSize: customisedNavSize,
			showPanel: customisedShowPanel,
			rightPanelWidth,
			panelPosition: managerLayoutState.panelPosition
		});
		return {
			navSize: customisedNavSize,
			rightPanelWidth,
			bottomPanelHeight,
			panelPosition: managerLayoutState.panelPosition,
			panelResizerRef,
			sidebarResizerRef,
			sidebarMaxWidth,
			panelMaxSize,
			showPages: isPagesShown,
			showPanel: customisedShowPanel,
			isDragging: internalDraggingSizeState.isDragging,
			dragCursor: internalDraggingSizeState.dragCursor
		};
	};
	OrderedMobileNavigation = styled(MobileNavigation)({ order: 1 });
	Layout = ({ managerLayoutState, setManagerLayoutState, ...slots }) => {
		const { isDesktop, isMobile } = useLayout();
		const api = useStorybookApi();
		useStorybookState();
		const showSidebar = api.getNavAvailability() === "shown";
		const { navSize, rightPanelWidth, bottomPanelHeight, panelPosition, panelResizerRef, sidebarResizerRef, sidebarMaxWidth, panelMaxSize, showPages, showPanel, isDragging, dragCursor } = useLayoutSyncingState({
			api,
			managerLayoutState,
			setManagerLayoutState,
			isDesktop
		});
		useLandmarkIndicator();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(LayoutContainer, {
			panelPosition: managerLayoutState.panelPosition,
			showPanel,
			showSidebar,
			style: {
				"--nav-width": `${navSize}px`,
				"--right-panel-width": `${rightPanelWidth}px`,
				"--bottom-panel-height": `${bottomPanelHeight}px`
			}
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, isDesktop && showSidebar && /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarContainer, {
			navSize,
			sidebarMaxWidth,
			sidebarResizerRef
		}, slots.slotSidebar), isMobile && !showPages && /* @__PURE__ */ _storybook_global_react_default.createElement(OrderedMobileNavigation, {
			menu: slots.slotSidebar,
			panel: slots.slotPanel,
			showMenu: showSidebar,
			showPanel
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(MainAreaContainer, {
			showPages,
			slotMain: slots.slotMain,
			slotPages: slots.slotPages
		}), slots.slotOverlay && /* @__PURE__ */ _storybook_global_react_default.createElement(ContentOverlayCell, null, slots.slotOverlay), isDesktop && showPanel && /* @__PURE__ */ _storybook_global_react_default.createElement(PanelContainer, {
			bottomPanelHeight,
			rightPanelWidth,
			panelMaxSize,
			panelResizerRef,
			position: panelPosition
		}, slots.slotPanel), isMobile && !showPages && /* @__PURE__ */ _storybook_global_react_default.createElement(Notifications, null)), isDragging && /* @__PURE__ */ _storybook_global_react_default.createElement(DragShield, { style: { cursor: dragCursor } }));
	};
	ContentOverlayCell = styled.div({
		position: "absolute",
		inset: 0,
		pointerEvents: "none",
		zIndex: 2,
		[MEDIA_DESKTOP_BREAKPOINT]: {
			position: "relative",
			inset: "auto",
			gridArea: "content"
		}
	});
	DragShield = styled.div({
		position: "fixed",
		inset: 0,
		zIndex: 10
	});
	LayoutContainer = styled.div(({ theme, panelPosition, showPanel, showSidebar }) => ({
		position: "relative",
		width: "100%",
		height: ["100vh", "100dvh"],
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
		colorScheme: theme.base,
		[MEDIA_DESKTOP_BREAKPOINT]: {
			display: "grid",
			gap: 0,
			gridTemplateColumns: showSidebar ? `minmax(0, var(--nav-width)) minmax(100px, 1fr) minmax(0, var(--right-panel-width))` : `minmax(100px, 1fr) minmax(0, var(--right-panel-width))`,
			gridTemplateRows: `1fr minmax(0, var(--bottom-panel-height))`,
			gridTemplateAreas: (() => {
				if (!showSidebar && !showPanel) return `"content content"
                "content content"`;
				if (!showSidebar && showPanel) {
					if (panelPosition === "right") return `"content panel"
                  "content panel"`;
					return `"content content"
                "panel   panel"`;
				}
				if (!showPanel) return `"sidebar content content"
                "sidebar content content"`;
				if (panelPosition === "right") return `"sidebar content panel"
                "sidebar content panel"`;
				return `"sidebar content content"
              "sidebar panel   panel"`;
			})()
		}
	}));
})), REVIEW_CHANGES_URL, REVIEW_MODE_SESSION_KEY, PRE_REVIEW_RETURN_KEY, AUTO_ENTERED_SESSION_KEY, autoEnteredLatchValue, VISITED_REVIEW_CREATED_AT_KEY, NOTIFIED_REVIEW_CREATED_AT_KEY, REVIEW_AVAILABLE_NOTIFICATION_ID, reviewAvailableNotificationId;
var init_constants = __esmMin((() => {
	init_review();
	`${REVIEW_NAMESPACE}`;
	REVIEW_CHANGES_URL = "/review/";
	REVIEW_MODE_SESSION_KEY = `${REVIEW_NAMESPACE}/review-mode`;
	PRE_REVIEW_RETURN_KEY = `${REVIEW_NAMESPACE}/pre-review-return`;
	AUTO_ENTERED_SESSION_KEY = `${REVIEW_NAMESPACE}/auto-entered`;
	autoEnteredLatchValue = (createdAt) => String(createdAt ?? "unknown");
	VISITED_REVIEW_CREATED_AT_KEY = `${REVIEW_NAMESPACE}/visited-created-at`;
	NOTIFIED_REVIEW_CREATED_AT_KEY = `${REVIEW_NAMESPACE}/notified-created-at`;
	REVIEW_AVAILABLE_NOTIFICATION_ID = `${REVIEW_NAMESPACE}/review-available`;
	reviewAvailableNotificationId = (createdAt) => `${REVIEW_AVAILABLE_NOTIFICATION_ID}/${createdAt}`;
}));
//#endregion
//#region src/manager/components/review/review-context.ts
var noop, emptyReviewContextValue, ReviewContext, useReviewContext;
var init_review_context = __esmMin((() => {
	init__storybook_global_react();
	noop = () => {};
	emptyReviewContextValue = {
		review: null,
		pendingReview: null,
		storyInfo: {},
		flattenedEntries: [],
		newlyAddedStoryIds: /* @__PURE__ */ new Set(),
		activeEntry: null,
		activeIndex: -1,
		isSummaryVisible: false,
		banner: null,
		isInReviewMode: false,
		openSummary: noop,
		openEntry: noop,
		leaveReview: noop,
		dismiss: noop
	};
	ReviewContext = createContext(emptyReviewContextValue);
	useReviewContext = () => useContext(ReviewContext);
}));
//#endregion
//#region src/manager/components/review/session-store.ts
var sessionStore;
var init_session_store = __esmMin((() => {
	sessionStore = {
		read(key) {
			try {
				return sessionStorage.getItem(key);
			} catch {
				return null;
			}
		},
		write(key, value) {
			try {
				sessionStorage.setItem(key, value);
			} catch {}
		},
		remove(key) {
			try {
				sessionStorage.removeItem(key);
			} catch {}
		}
	};
}));
//#endregion
//#region src/manager/components/review/components/CopyButton.tsx
function CopyButton({ children, childrenOnCopy, content, onCopy, ariaLabel, ariaLabelOnCopy, duration, ...buttonProps }) {
	const { children: buttonChildren, buttonProps: copyButtonProps } = useCopyButton({
		children,
		childrenOnCopy,
		content,
		onCopy,
		ariaLabel,
		ariaLabelOnCopy,
		duration
	});
	return /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
		...buttonProps,
		...copyButtonProps
	}, buttonChildren);
}
var init_CopyButton = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
}));
//#endregion
//#region src/manager/components/review/components/AttentionBanner.tsx
var STALE_REFRESH_PROMPT, Region, Bar, PopoverContent, Title$1, Message, Prompt, AttentionBanner;
var init_AttentionBanner = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_emotion();
	init_icons();
	init_useLandmark();
	init_CopyButton();
	STALE_REFRESH_PROMPT = "Generate a fresh review including my latest changes using the review-create tool.";
	Region = styled.div({ flexShrink: 0 });
	Bar = styled.div(({ theme }) => ({
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		gap: 8,
		flexShrink: 0,
		padding: "4px 16px",
		background: theme.background.hoverable,
		color: theme.color.defaultText,
		borderBottom: `1px solid ${theme.appBorderColor}`,
		fontSize: theme.typography.size.s2,
		minHeight: 40
	}));
	PopoverContent = styled.div({
		padding: 15,
		width: 280,
		boxSizing: "border-box"
	});
	Title$1 = styled.div(({ theme }) => ({ fontWeight: theme.typography.weight.bold }));
	Message = styled.div(({ theme }) => ({
		color: theme.color.defaultText,
		lineHeight: "18px",
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		gap: 8
	}));
	Prompt = styled.p(({ theme }) => ({
		margin: 0,
		fontFamily: theme.typography.fonts.mono,
		fontSize: theme.typography.size.s1 - 1,
		padding: "6px 10px",
		background: theme.background.app,
		boxShadow: `inset 0 0 0 1px ${theme.appBorderColor}`,
		borderRadius: theme.appBorderRadius
	}));
	AttentionBanner = (props) => {
		const { kind } = props;
		const regionRef = useRef(null);
		const { landmarkProps } = useLandmark({
			role: "region",
			"aria-label": "Review status"
		}, regionRef);
		if (kind === "pending-update") {
			const { onAccept } = props;
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Region, {
				ref: regionRef,
				...landmarkProps
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(Bar, {
				role: "status",
				"aria-live": "polite"
			}, /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, "A new review is available."), /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
				ariaLabel: false,
				variant: "solid",
				padding: "small",
				onClick: onAccept
			}, "Update")));
		}
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Region, {
			ref: regionRef,
			...landmarkProps
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(Bar, {
			role: "status",
			"aria-live": "polite"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, "Code changes detected. This review may be stale.", " ", /* @__PURE__ */ _storybook_global_react_default.createElement(PopoverProvider, {
			ariaLabel: "Prompt to refresh stale review",
			placement: "bottom",
			padding: 0,
			popover: /* @__PURE__ */ _storybook_global_react_default.createElement(PopoverContent, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Message, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Title$1, null, "Prompt for your agent to refresh this review:"), /* @__PURE__ */ _storybook_global_react_default.createElement(Prompt, null, STALE_REFRESH_PROMPT), /* @__PURE__ */ _storybook_global_react_default.createElement(CopyButton, {
				appearance: "agentic",
				padding: "small",
				ariaLabel: "Copy prompt to refresh this review",
				ariaLabelOnCopy: "Prompt copied to clipboard",
				content: STALE_REFRESH_PROMPT,
				childrenOnCopy: /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(CheckIcon, null), " Copy prompt")
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(CopyIcon, null), "Copy prompt")))
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(Link$1, null, /* @__PURE__ */ _storybook_global_react_default.createElement("strong", null, "Ask your agent to refresh it."))))));
	};
}));
//#endregion
//#region src/manager/components/review/review-types.ts
var fallbackStoryInfo;
var init_review_types = __esmMin((() => {
	fallbackStoryInfo = (storyId) => {
		const separator = storyId.indexOf("--");
		if (separator === -1) return {
			title: storyId,
			name: "Story"
		};
		return {
			title: storyId.slice(0, separator),
			name: storyId.slice(separator + 2) || "Story"
		};
	};
}));
//#endregion
//#region src/manager/components/review/components/previewScheduler.ts
function startTask(task) {
	task.state = "started";
	activePreviewLoads += 1;
	task.deadline = setTimeout(() => releaseTask(task), PREVIEW_SETTLE_TIMEOUT_MS);
	task.start();
}
function startQueuedPreviews() {
	while (activePreviewLoads < MAX_CONCURRENT_PREVIEWS && previewQueue.length > 0) startTask(previewQueue.shift());
}
function releaseTask(task) {
	if (task.state === "released") return;
	if (task.state === "started") {
		clearTimeout(task.deadline);
		activePreviewLoads -= 1;
	} else previewQueue.splice(previewQueue.indexOf(task), 1);
	task.state = "released";
	startQueuedPreviews();
}
/**
* Queue a preview boot. `start` runs (synchronously or later) once a concurrency slot frees up. The
* slot is held until `release()` or the settle deadline, whichever comes first.
*/
function enqueuePreview(start) {
	const task = {
		start,
		state: "queued"
	};
	previewQueue.push(task);
	startQueuedPreviews();
	return {
		forceStart: () => {
			if (task.state !== "queued") return;
			previewQueue.splice(previewQueue.indexOf(task), 1);
			startTask(task);
		},
		release: () => releaseTask(task)
	};
}
var MAX_CONCURRENT_PREVIEWS, PREVIEW_SETTLE_TIMEOUT_MS, activePreviewLoads, previewQueue;
var init_previewScheduler = __esmMin((() => {
	MAX_CONCURRENT_PREVIEWS = 3;
	PREVIEW_SETTLE_TIMEOUT_MS = 1500;
	activePreviewLoads = 0;
	previewQueue = [];
}));
//#endregion
//#region src/manager/components/review/components/previewThumbnailState.ts
var initialThumbnailState, isThumbnailLoading, thumbnailReducer;
var init_previewThumbnailState = __esmMin((() => {
	init_iframe_resize();
	initialThumbnailState = {
		phase: "idle",
		src: void 0,
		dimensions: null,
		bootId: 0
	};
	isThumbnailLoading = ({ phase }) => phase === "queued" || phase === "booting" || phase === "measured";
	thumbnailReducer = (state, event) => {
		switch (event.type) {
			case "enqueued": return {
				...state,
				phase: "queued",
				dimensions: null
			};
			case "started":
				if (state.phase !== "queued") return state;
				return {
					...state,
					phase: "booting",
					src: event.src,
					bootId: state.bootId + 1
				};
			case "resized":
				if (state.phase === "booting" || state.phase === "measured") {
					const unchanged = iframeResizeDimensionsEqual(state.dimensions, event.dimensions);
					if (state.phase === "measured" && unchanged) return state;
					return {
						...state,
						phase: "measured",
						dimensions: unchanged ? state.dimensions : event.dimensions
					};
				}
				if (state.phase === "settled") return iframeResizeDimensionsEqual(state.dimensions, event.dimensions) ? state : {
					...state,
					dimensions: event.dimensions
				};
				return state;
			case "settled":
				if (state.phase === "booting" || state.phase === "measured") return {
					...state,
					phase: "settled"
				};
				return state;
			case "evicted":
				if (state.phase === "idle") return state;
				return {
					...initialThumbnailState,
					bootId: state.bootId
				};
		}
	};
}));
//#endregion
//#region src/manager/components/review/components/usePreviewThumbnail.ts
var PREVIEW_SCALE_SETTLE_FALLBACK_MS, PREVIEW_MOUNT_ROOT_MARGIN, PREVIEW_EVICT_ROOT_MARGIN, getScrollRoot, usePreviewThumbnail;
var init_usePreviewThumbnail = __esmMin((() => {
	init__storybook_global_react();
	init_iframe_resize();
	init_previewScheduler();
	init_previewThumbnailState();
	PREVIEW_SCALE_SETTLE_FALLBACK_MS = PREVIEW_SETTLE_TIMEOUT_MS * 3;
	PREVIEW_MOUNT_ROOT_MARGIN = "50% 0px";
	PREVIEW_EVICT_ROOT_MARGIN = "150% 0px";
	getScrollRoot = (element) => {
		const radixViewport = element.closest("[data-radix-scroll-area-viewport]");
		if (radixViewport) return radixViewport;
		let current = element.parentElement;
		while (current) {
			const { overflowY } = window.getComputedStyle(current);
			if (overflowY === "auto" || overflowY === "scroll") return current;
			current = current.parentElement;
		}
		return null;
	};
	usePreviewThumbnail = ({ storyId, getPreviewHref, summaryHidden = false }) => {
		const cellRef = useRef(null);
		const iframeRef = useRef(null);
		const [isInView, setIsInView] = useState(false);
		const [state, dispatch] = useReducer(thumbnailReducer, initialThumbnailState);
		const handleRef = useRef(null);
		const settleRafRef = useRef({
			raf1: 0,
			raf2: 0
		});
		const { src, bootId } = state;
		useEffect(() => {
			const host = cellRef.current;
			if (!host || summaryHidden) return;
			const scrollRoot = getScrollRoot(host);
			const root = scrollRoot && scrollRoot.clientHeight > 0 ? scrollRoot : null;
			const mountObserver = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) setIsInView(true);
			}, {
				root,
				rootMargin: PREVIEW_MOUNT_ROOT_MARGIN
			});
			const evictObserver = new IntersectionObserver(([entry]) => {
				if (!entry.isIntersecting) setIsInView(false);
			}, {
				root,
				rootMargin: PREVIEW_EVICT_ROOT_MARGIN
			});
			mountObserver.observe(host);
			evictObserver.observe(host);
			return () => {
				mountObserver.disconnect();
				evictObserver.disconnect();
			};
		}, [summaryHidden]);
		useEffect(() => {
			if (!isInView) dispatch({ type: "evicted" });
		}, [isInView]);
		useEffect(() => {
			if (!isInView) return;
			const previewHref = getPreviewHref(storyId);
			dispatch({ type: "enqueued" });
			const handle = enqueuePreview(() => {
				dispatch({
					type: "started",
					src: previewHref
				});
			});
			handleRef.current = handle;
			return () => {
				handle.release();
				handleRef.current = null;
			};
		}, [
			isInView,
			storyId,
			getPreviewHref
		]);
		useEffect(() => {
			if (!src) return;
			const timer = setTimeout(() => dispatch({ type: "settled" }), PREVIEW_SCALE_SETTLE_FALLBACK_MS);
			return () => clearTimeout(timer);
		}, [bootId, src]);
		const handleResize = useCallback((dimensions) => {
			dispatch({
				type: "resized",
				dimensions
			});
			cancelAnimationFrame(settleRafRef.current.raf1);
			cancelAnimationFrame(settleRafRef.current.raf2);
			settleRafRef.current.raf1 = requestAnimationFrame(() => {
				settleRafRef.current.raf2 = requestAnimationFrame(() => {
					dispatch({ type: "settled" });
				});
			});
		}, []);
		useEffect(() => {
			const rafs = settleRafRef.current;
			return () => {
				cancelAnimationFrame(rafs.raf1);
				cancelAnimationFrame(rafs.raf2);
			};
		}, []);
		useLayoutEffect(() => {
			if (!src) return;
			const iframe = iframeRef.current;
			if (!iframe) return;
			const onMessage = (event) => {
				if (event.source === null || event.source !== iframe.contentWindow) return;
				const dimensions = parseIframeResizeMessage(event.data);
				if (dimensions) handleResize(dimensions);
			};
			window.addEventListener("message", onMessage);
			const requestRemeasure = () => {
				try {
					iframe.contentWindow?.postMessage(JSON.stringify({ context: IFRAME_RESIZE_REQUEST_CONTEXT }), "*");
				} catch {}
			};
			requestRemeasure();
			iframe.addEventListener("load", requestRemeasure);
			return () => {
				window.removeEventListener("message", onMessage);
				iframe.removeEventListener("load", requestRemeasure);
			};
		}, [src, handleResize]);
		const finishCurrent = useCallback(() => {
			handleRef.current?.release();
		}, []);
		const forceStartCurrent = useCallback(() => {
			handleRef.current?.forceStart();
		}, []);
		return {
			cellRef,
			iframeRef,
			src,
			isPreviewLoading: isThumbnailLoading(state),
			rememberedDimensions: state.dimensions,
			forceStartCurrent,
			finishCurrent
		};
	};
}));
//#endregion
//#region src/manager/components/review/components/CollectionGrid.tsx
var band, GridContainer, Grid, Cell, FrameShell, DEFAULT_CONTENT_WIDTH, THUMBNAIL_BOOTSTRAP_SCALE, getPreviewFrameLayout, Frame, Preview$1, PreviewLoading, ActionBar, Label, LabelComponent, LabelSeparator, LabelStory, NewBadge, ReviewAllCell, ReviewAllShell, ReviewAllFrame, deriveStoryInfo, StoryPreviewCell, CollectionGrid;
var init_CollectionGrid = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_emotion();
	init_iframe_resize();
	init_review_types();
	init_usePreviewThumbnail();
	band = (cols) => {
		const cap = cols * 2;
		return {
			gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
			[`&:not([data-show-all]):has(> [data-cell]:nth-child(${cap + 1})) > [data-cell]:nth-child(n + ${cap})`]: { display: "none" },
			[`&:not([data-show-all]):has(> [data-cell]:nth-child(${cap + 1})) > [data-review-all]`]: { display: "flex" }
		};
	};
	GridContainer = styled.div({
		containerType: "inline-size",
		containerName: "review-grid"
	});
	Grid = styled.div({
		display: "grid",
		alignItems: "stretch",
		gap: 12,
		padding: 12,
		gridTemplateColumns: "minmax(0, 1fr)",
		"@container review-grid (max-width: 629.98px)": band(1),
		"@container review-grid (min-width: 630px) and (max-width: 844.98px)": band(2),
		"@container review-grid (min-width: 845px) and (max-width: 1259.98px)": band(3),
		"@container review-grid (min-width: 1260px)": band(4)
	});
	Cell = styled.div({
		display: "flex",
		flexDirection: "column",
		minWidth: 0,
		overflow: "hidden"
	});
	FrameShell = styled.div({
		width: "100%",
		minWidth: 0,
		maxWidth: "100%",
		aspectRatio: "3 / 2",
		position: "relative"
	});
	DEFAULT_CONTENT_WIDTH = 300;
	THUMBNAIL_BOOTSTRAP_SCALE = .5;
	getPreviewFrameLayout = (dimensions) => {
		if (!dimensions) return {
			style: { "--scale": THUMBNAIL_BOOTSTRAP_SCALE },
			viewportFill: false
		};
		if (hasFixedViewportDimensions(dimensions.viewport)) return {
			style: {
				"--vp-w": dimensions.viewport.width,
				"--vp-h": dimensions.viewport.height
			},
			viewportFill: true
		};
		return {
			style: { "--content-w": dimensions.width },
			viewportFill: false
		};
	};
	Frame = styled.a(({ theme }) => ({
		position: "absolute",
		inset: 0,
		display: "block",
		boxSizing: "border-box",
		containerType: "inline-size",
		containerName: "preview-frame",
		"--content-w": DEFAULT_CONTENT_WIDTH,
		"--fit-w": "calc(100cqw / (var(--content-w) * 1px))",
		"--fit": "min(1, var(--fit-w))",
		"--scale": "max(0.5, min(1, round(down, var(--fit), 0.25)))",
		"--vp-scale": "calc(100cqw / (var(--vp-w) * 1px))",
		borderRadius: 6,
		overflow: "hidden",
		background: theme.background.app,
		border: `1px solid ${theme.appBorderColor}`,
		transition: "border-color 120ms ease",
		textDecoration: "none",
		outline: "none",
		"& [data-preview-scale]": {
			position: "absolute",
			top: 0,
			left: 0,
			transformOrigin: "top left"
		},
		"&[data-viewport-fill] [data-preview-scale]": {
			width: "calc(var(--vp-w) * 1px)",
			height: "calc(var(--vp-h) * 1px)",
			transform: "scale(var(--vp-scale))"
		},
		"&:not([data-viewport-fill]) [data-preview-scale]": {
			width: "calc(100% / var(--scale))",
			height: "calc(100% / var(--scale))",
			transform: "scale(var(--scale))"
		},
		"&[href]:hover": { borderColor: theme.color.secondary },
		"&:focus-visible": {
			outline: `${theme.barSelectedColor} solid 2px`,
			outlineOffset: -2
		}
	}));
	Preview$1 = styled.iframe(({ theme }) => ({
		display: "block",
		width: "100%",
		height: "100%",
		background: theme.background.preview,
		border: 0,
		pointerEvents: "none"
	}));
	PreviewLoading = styled.div(({ theme }) => ({
		position: "absolute",
		inset: 0,
		zIndex: 1,
		display: "grid",
		placeItems: "center",
		background: theme.background.app,
		pointerEvents: "none"
	}));
	ActionBar = styled.div({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 8,
		minHeight: 36,
		marginTop: "auto"
	});
	Label = styled.div({
		display: "flex",
		alignItems: "center",
		gap: 4,
		flex: 1,
		minWidth: 0,
		marginLeft: 10,
		overflow: "hidden"
	});
	LabelComponent = styled.span({
		fontWeight: 700,
		whiteSpace: "nowrap",
		flexShrink: 0,
		maxWidth: "60%",
		overflow: "hidden",
		textOverflow: "ellipsis"
	});
	LabelSeparator = styled.span(({ theme }) => ({
		color: theme.textMutedColor,
		flexShrink: 0
	}));
	LabelStory = styled.span({
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
		marginRight: 4
	});
	NewBadge = styled(Badge)({ flexShrink: 0 });
	ReviewAllCell = styled(Cell)({ display: "none" });
	ReviewAllShell = styled.div({
		width: "100%",
		minWidth: 0,
		maxWidth: "100%",
		aspectRatio: "3 / 2",
		minHeight: 50
	});
	ReviewAllFrame = styled.div(({ theme }) => ({
		display: "grid",
		placeItems: "center",
		width: "100%",
		height: "100%",
		boxSizing: "border-box",
		borderRadius: 6,
		background: theme.background.app,
		border: `1px dashed ${theme.appBorderColor}`
	}));
	deriveStoryInfo = (info) => ({
		component: info.title.split("/").pop() ?? info.title,
		name: info.name
	});
	StoryPreviewCell = ({ storyId, href, info, getPreviewHref, summaryHidden = false }) => {
		const { cellRef, iframeRef, src, isPreviewLoading, rememberedDimensions, forceStartCurrent, finishCurrent } = usePreviewThumbnail({
			storyId,
			getPreviewHref,
			summaryHidden
		});
		const { component, name } = deriveStoryInfo(info);
		const readableTitle = `${component} – ${name}`;
		const { style: frameStyle, viewportFill } = getPreviewFrameLayout(rememberedDimensions);
		const preview = src ? /* @__PURE__ */ _storybook_global_react_default.createElement("div", { "data-preview-scale": true }, /* @__PURE__ */ _storybook_global_react_default.createElement(Preview$1, {
			ref: iframeRef,
			"data-is-storybook-thumbnail": true,
			title: readableTitle,
			src,
			"data-content-width": rememberedDimensions?.width,
			"data-content-height": rememberedDimensions?.height,
			tabIndex: -1,
			scrolling: "no",
			onLoad: finishCurrent,
			onError: finishCurrent
		})) : null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Cell, {
			ref: cellRef,
			role: "listitem",
			"data-cell": true,
			"data-testid": "review-collection-grid-cell"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(FrameShell, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Frame, {
			as: href ? "a" : "div",
			...href ? { href } : {},
			"data-testid": "review-collection-grid-frame",
			"data-viewport-fill": viewportFill || void 0,
			style: frameStyle,
			"aria-label": href ? `Review story ${readableTitle}` : void 0,
			onMouseEnter: forceStartCurrent,
			onFocus: forceStartCurrent
		}, isPreviewLoading ? /* @__PURE__ */ _storybook_global_react_default.createElement(PreviewLoading, { "data-testid": "review-preview-loading" }, /* @__PURE__ */ _storybook_global_react_default.createElement(Loader, null)) : null, preview)), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionBar, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Label, null, /* @__PURE__ */ _storybook_global_react_default.createElement(LabelComponent, null, component), /* @__PURE__ */ _storybook_global_react_default.createElement(LabelSeparator, null, "/"), /* @__PURE__ */ _storybook_global_react_default.createElement(LabelStory, null, name), info.changeStatus === "new" || info.isNewlyAdded ? /* @__PURE__ */ _storybook_global_react_default.createElement(NewBadge, {
			status: "positive",
			compact: true
		}, "New") : null)));
	};
	CollectionGrid = ({ storyIds, getStoryHref, getStoryPreviewHref, showAll = false, onShowAll, storyInfo, summaryHidden = false }) => /* @__PURE__ */ _storybook_global_react_default.createElement(GridContainer, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Grid, {
		role: "list",
		"data-show-all": showAll || void 0,
		"data-testid": "review-collection-grid"
	}, storyIds.map((storyId, storyIndex) => {
		const info = storyInfo[storyId] ?? fallbackStoryInfo(storyId);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(StoryPreviewCell, {
			key: storyId,
			storyId,
			href: getStoryHref?.(storyId, storyIndex),
			info,
			getPreviewHref: getStoryPreviewHref,
			summaryHidden
		});
	}), /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewAllCell, {
		role: "presentation",
		"data-review-all": true
	}, /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewAllShell, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewAllFrame, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
		ariaLabel: false,
		size: "medium",
		onClick: () => onShowAll?.()
	}, "Review all ", storyIds.length))), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionBar, { "aria-hidden": "true" }))));
}));
//#endregion
//#region src/manager/components/review/components/Markdown.tsx
var createInlinePattern, parseInline, Markdown;
var init_Markdown = __esmMin((() => {
	init__storybook_global_react();
	createInlinePattern = () => /(\*\*([\s\S]+?)\*\*|\*([\s\S]+?)\*|_([\s\S]+?)_|`([\s\S]+?)`)/g;
	parseInline = (text) => {
		const nodes = [];
		const pattern = createInlinePattern();
		let lastIndex = 0;
		let key = 0;
		let match;
		while ((match = pattern.exec(text)) !== null) {
			if (match.index > lastIndex) nodes.push(text.slice(lastIndex, match.index));
			const [token, , bold, italicStar, italicUnderscore, code] = match;
			if (bold !== void 0) nodes.push(/* @__PURE__ */ _storybook_global_react_default.createElement("strong", { key: key++ }, parseInline(bold)));
			else if (italicStar !== void 0) nodes.push(/* @__PURE__ */ _storybook_global_react_default.createElement("em", { key: key++ }, parseInline(italicStar)));
			else if (italicUnderscore !== void 0) nodes.push(/* @__PURE__ */ _storybook_global_react_default.createElement("em", { key: key++ }, parseInline(italicUnderscore)));
			else if (code !== void 0) nodes.push(/* @__PURE__ */ _storybook_global_react_default.createElement("code", { key: key++ }, code));
			lastIndex = match.index + token.length;
		}
		if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
		return nodes;
	};
	Markdown = ({ children }) => {
		const paragraphs = children.split(/\n{2,}/).filter((paragraph) => paragraph.trim() !== "");
		return /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, paragraphs.map((paragraph, index) => /* @__PURE__ */ _storybook_global_react_default.createElement("p", { key: index }, parseInline(paragraph))));
	};
}));
//#endregion
//#region src/manager/components/review/components/ReviewHeader.tsx
var Root$1, TopRow, Main$1, Leading, TextBlock, Title, Subtitle, Actions, SecondRow, ReviewHeader;
var init_ReviewHeader = __esmMin((() => {
	init__storybook_global_react();
	init_useId$1();
	init_emotion();
	init_useLandmark();
	Root$1 = styled.header(({ theme, $variant }) => ({
		containerType: "inline-size",
		containerName: "review-header",
		display: "flex",
		flexDirection: "column",
		flexShrink: 0,
		width: "100%",
		background: $variant === "toolbar" ? theme.barBg : theme.background.content,
		color: theme.color.defaultText,
		...$variant === "page" ? { borderBottom: `1px solid ${theme.appBorderColor}` } : {}
	}));
	TopRow = styled.div(({ $variant }) => ({
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		padding: $variant === "toolbar" ? "16px 16px 8px 16px" : "16px",
		minHeight: 40
	}));
	Main$1 = styled.div({
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		flex: "1 1 auto",
		minWidth: 0
	});
	Leading = styled.div({
		display: "flex",
		alignItems: "center",
		alignSelf: "flex-start",
		flexShrink: 0
	});
	TextBlock = styled.div({
		display: "flex",
		flexDirection: "column",
		flexGrow: 1,
		minWidth: 0
	});
	Title = styled.h1(({ theme }) => ({
		margin: "2px 0",
		minWidth: 0,
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		fontSize: theme.typography.size.m1,
		fontWeight: theme.typography.weight.bold,
		lineHeight: "24px"
	}));
	Subtitle = styled.div(({ theme }) => ({
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		gap: 8,
		color: theme.textMutedColor,
		fontSize: theme.typography.size.s2,
		lineHeight: "20px"
	}));
	Actions = styled.div({
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		justifyContent: "flex-end",
		gap: 6,
		flex: "0 1 auto",
		marginLeft: "auto"
	});
	SecondRow = styled.div({
		display: "flex",
		alignItems: "center",
		gap: 8,
		padding: "0 16px 2px 16px",
		minHeight: 39
	});
	ReviewHeader = ({ leading, title, subtitle, actions, secondRow, variant = "page" }) => {
		const titleId = $390e54f620492c70$export$f680877a34711e37();
		const regionRef = useRef(null);
		const { landmarkProps } = useLandmark({
			"aria-labelledby": titleId,
			role: "banner"
		}, regionRef);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Root$1, {
			$variant: variant,
			ref: regionRef,
			...landmarkProps
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(TopRow, { $variant: variant }, /* @__PURE__ */ _storybook_global_react_default.createElement(Main$1, null, leading ? /* @__PURE__ */ _storybook_global_react_default.createElement(Leading, null, leading) : null, /* @__PURE__ */ _storybook_global_react_default.createElement(TextBlock, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Title, { id: titleId }, title), subtitle ? /* @__PURE__ */ _storybook_global_react_default.createElement(Subtitle, null, subtitle) : null)), actions ? /* @__PURE__ */ _storybook_global_react_default.createElement(Actions, null, actions) : null), secondRow ? /* @__PURE__ */ _storybook_global_react_default.createElement(SecondRow, null, secondRow) : null);
	};
})), prettifyComponentId, buildReviewChangesSummaryHref, buildSummaryBackHref, REVIEW_SUMMARY_BACK_ATTR, buildReviewStoryTarget, buildReviewStoryHref, parseReviewStoryHref, isReviewReturnSearch, parseStoryIdFromPath, parseCollectionIndex, resolveActiveNavEntry, resolveNavIndex;
var init_review_navigation = __esmMin((() => {
	init_routes();
	init_constants();
	prettifyComponentId = (componentId) => componentId.split(/[-/]/).filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
	buildReviewChangesSummaryHref = () => `?path=${REVIEW_CHANGES_URL}`;
	buildSummaryBackHref = (returnSearch) => returnSearch || "/";
	REVIEW_SUMMARY_BACK_ATTR = "data-review-summary-back";
	buildReviewStoryTarget = (entry) => `/story/${entry.storyId}&${REVIEW_COLLECTION_QUERY_PARAM}=${entry.collectionIndex}`;
	buildReviewStoryHref = (entry) => `?path=${buildReviewStoryTarget(entry)}`;
	parseReviewStoryHref = (href) => {
		if (!href.startsWith("?path=/story/")) return null;
		const query = href.startsWith("?") ? href.slice(1) : href;
		const params = new URLSearchParams(query);
		const path = params.get("path");
		if (!path?.startsWith("/story/")) return null;
		const storyId = path.slice(7);
		const collectionIndex = parseCollectionIndex(params.get("collection") ?? void 0);
		if (!storyId || collectionIndex === void 0) return null;
		return {
			storyId,
			collectionIndex
		};
	};
	isReviewReturnSearch = (search) => {
		const normalized = search.startsWith("?") ? search.slice(1) : search;
		const params = new URLSearchParams(normalized);
		const path = params.get("path") ?? "";
		if (isReviewSummaryPath(path) || path.startsWith("/review/")) return true;
		return path.startsWith("/story/") && params.has("collection");
	};
	parseStoryIdFromPath = (path) => {
		if (!path.startsWith("/story/")) return null;
		return path.slice(7) || null;
	};
	parseCollectionIndex = (value) => {
		if (value === void 0) return;
		if (!/^\d+$/.test(value)) return;
		const parsed = Number(value);
		return Number.isInteger(parsed) ? parsed : void 0;
	};
	resolveActiveNavEntry = (entries, storyId, collectionIndex) => {
		if (entries.length === 0) return null;
		if (collectionIndex !== void 0) {
			const exact = entries.find((entry) => entry.storyId === storyId && entry.collectionIndex === collectionIndex);
			if (exact) return exact;
		}
		return entries.find((entry) => entry.storyId === storyId) ?? null;
	};
	resolveNavIndex = (entries, active) => entries.findIndex((entry) => entry.storyId === active.storyId && entry.collectionIndex === active.collectionIndex);
}));
//#endregion
//#region src/manager/components/review/screens/SummaryScreen.tsx
var MarkdownWrapper, Page, Empty, ListScroll, Main, SummaryCard, SummaryLandmark, SummaryContent, SummaryHeading, CardHead, CardTitle, CardControls, CardCount, ToggleChevronIcon, CardRationale, Footer, EmptyMessage, CollectionLandmark, FooterLandmark, pluralize, formatCreatedAgo, SummaryScreen;
var init_SummaryScreen = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_emotion();
	init_icons();
	init_useLandmark();
	init_AttentionBanner();
	init_CollectionGrid();
	init_CopyButton();
	init_Markdown();
	init_ReviewHeader();
	init_review_navigation();
	MarkdownWrapper = styled(DocumentWrapper)(({ theme }) => ({
		color: theme.color.defaultText,
		p: { margin: 0 },
		"p + p": { marginTop: 10 },
		code: {
			color: "inherit",
			verticalAlign: "text-bottom",
			fontSize: "0.85em",
			margin: 0,
			padding: "0 4px",
			background: "transparent",
			border: "none",
			boxShadow: `inset 0 0 0 1px ${theme.appBorderColor}`,
			borderRadius: theme.appBorderRadius
		}
	}));
	Page = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		height: "100dvh",
		minHeight: 0,
		overflow: "hidden",
		background: theme.background.app,
		color: theme.color.defaultText,
		fontFamily: theme.typography.fonts.base,
		fontSize: theme.typography.size.s2
	}));
	Empty = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		gap: 16,
		alignItems: "center",
		justifyContent: "center",
		height: "100dvh",
		color: theme.color.defaultText,
		"& > div": {
			display: "flex",
			alignItems: "center",
			gap: 8
		}
	}));
	ListScroll = styled.div({
		flex: 1,
		minHeight: 0
	});
	Main = styled.main({
		display: "flex",
		flexDirection: "column",
		gap: 12,
		padding: 12,
		"& > *": { flexShrink: 0 }
	});
	SummaryCard = styled(Card)({
		display: "flex",
		alignItems: "flex-start",
		padding: "9px 12px",
		gap: 10,
		svg: {
			flexShrink: 0,
			marginTop: 4
		}
	});
	SummaryLandmark = ({ children }) => {
		const asideRef = useRef(null);
		const { landmarkProps } = useLandmark({
			role: "complementary",
			"aria-label": "Summary"
		}, asideRef);
		return /* @__PURE__ */ _storybook_global_react_default.createElement("aside", {
			ref: asideRef,
			...landmarkProps
		}, children);
	};
	SummaryContent = styled(MarkdownWrapper)({
		flex: 1,
		minWidth: 0,
		"& > p:first-of-type": { display: "inline" }
	});
	SummaryHeading = styled.h2(({ theme }) => ({ "&&": {
		display: "inline",
		margin: 0,
		padding: 0,
		fontSize: "inherit",
		fontWeight: theme.typography.weight.bold,
		lineHeight: "inherit",
		color: "inherit",
		border: "none"
	} }));
	CardHead = styled.div({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		gap: 8,
		padding: "6px 10px 6px 12px",
		minHeight: 40,
		cursor: "pointer"
	});
	CardTitle = styled.h2(({ theme }) => ({
		minWidth: 0,
		margin: 0,
		overflow: "hidden",
		textOverflow: "ellipsis",
		whiteSpace: "nowrap",
		fontSize: "inherit",
		fontWeight: theme.typography.weight.bold,
		lineHeight: "20px",
		color: theme.color.defaultText
	}));
	CardControls = styled.div({
		display: "flex",
		alignItems: "center",
		justifyContent: "flex-end",
		gap: 6,
		flexShrink: 0
	});
	CardCount = styled.span(({ theme }) => ({
		minWidth: 28,
		fontFamily: theme.typography.fonts.mono,
		fontSize: theme.typography.size.s2 - 1,
		lineHeight: "20px",
		textAlign: "center",
		color: theme.textMutedColor
	}));
	ToggleChevronIcon = styled(ChevronSmallDownIcon)({ transition: "transform 160ms ease" });
	CardRationale = styled(MarkdownWrapper)(({ theme }) => ({
		color: theme.textMutedColor,
		margin: "0 12px"
	}));
	Footer = styled.footer(({ theme }) => ({
		color: theme.textMutedColor,
		padding: "10px 22px 42px",
		fontSize: theme.typography.size.s2,
		textAlign: "center",
		textWrap: "balance"
	}));
	EmptyMessage = styled.p(({ theme }) => ({
		margin: 0,
		color: theme.textMutedColor,
		padding: "10px 10px 30px",
		fontSize: theme.typography.size.s2,
		textAlign: "center",
		textWrap: "balance"
	}));
	CollectionLandmark = ({ titleId, children }) => {
		const regionRef = useRef(null);
		const { landmarkProps } = useLandmark({
			role: "region",
			"aria-labelledby": titleId
		}, regionRef);
		return /* @__PURE__ */ _storybook_global_react_default.createElement("section", {
			ref: regionRef,
			...landmarkProps
		}, children);
	};
	FooterLandmark = ({ children }) => {
		const footerRef = useRef(null);
		const { landmarkProps } = useLandmark({
			role: "contentinfo",
			"aria-label": "About this review"
		}, footerRef);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Footer, {
			ref: footerRef,
			...landmarkProps
		}, children);
	};
	pluralize = (count, singular, plural = `${singular}s`) => `${count} ${count === 1 ? singular : plural}`;
	formatCreatedAgo = (createdAt, nowMs) => {
		const elapsedMs = Math.max(0, nowMs - createdAt);
		if (elapsedMs < 6e4) return "just now";
		const elapsedMinutes = Math.floor(elapsedMs / 6e4);
		if (elapsedMinutes < 60) return `${elapsedMinutes}m ago`;
		return `${Math.floor(elapsedMinutes / 60)}h ago`;
	};
	SummaryScreen = ({ state, storyInfo = {}, getStoryPreviewHref, banner = null, summaryHidden = false, onDismiss, returnSearch = null }) => {
		const [expandedCollections, setExpandedCollections] = useState(() => /* @__PURE__ */ new Set());
		const [showAllCollections, setShowAllCollections] = useState(() => /* @__PURE__ */ new Set());
		const [showNewOnly, setShowNewOnly] = useState(false);
		const [nowMs, setNowMs] = useState(() => Date.now());
		useEffect(() => {
			const intervalId = window.setInterval(() => {
				setNowMs(Date.now());
			}, 1e4);
			return () => window.clearInterval(intervalId);
		}, []);
		useLayoutEffect(() => {
			if (!state) {
				setExpandedCollections(/* @__PURE__ */ new Set());
				setShowAllCollections(/* @__PURE__ */ new Set());
				return;
			}
			setExpandedCollections(new Set(state.collections.map((_, index) => index)));
			setShowAllCollections(/* @__PURE__ */ new Set());
		}, [state?.createdAt]);
		const newStoryCount = useMemo(() => new Set((state?.collections ?? []).flatMap((c) => c.storyIds).filter((id) => storyInfo[id]?.isNewlyAdded)).size, [state, storyInfo]);
		const visibleCollections = useMemo(() => (state?.collections ?? []).map((collection, index) => {
			return {
				collection,
				index,
				storyIds: showNewOnly ? collection.storyIds.filter((id) => storyInfo[id]?.isNewlyAdded) : collection.storyIds
			};
		}).filter((entry) => entry.storyIds.length > 0), [
			state?.collections,
			showNewOnly,
			storyInfo
		]);
		if (!state) return /* @__PURE__ */ _storybook_global_react_default.createElement(Empty, null, /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, "Waiting for the agent to display a review…"), /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, /* @__PURE__ */ _storybook_global_react_default.createElement(CopyButton, {
			appearance: "agentic",
			padding: "small",
			ariaLabel: "Copy prompt to refresh this review",
			ariaLabelOnCopy: "Prompt copied to clipboard",
			content: "Generate a Storybook review including my latest changes using the review-create tool.",
			childrenOnCopy: /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(CheckIcon, null), " Copy prompt")
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(CopyIcon, null), "Copy prompt"), /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			padding: "small",
			onClick: onDismiss,
			ariaLabel: "Close review screen"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(CloseIcon, null), "Close")));
		const storyCount = new Set(state.collections.flatMap((collection) => collection.storyIds)).size;
		const createdAgo = state.createdAt ? formatCreatedAgo(state.createdAt, nowMs) : null;
		const toggleCollection = (index) => {
			setExpandedCollections((previous) => {
				const next = new Set(previous);
				if (next.has(index)) next.delete(index);
				else next.add(index);
				return next;
			});
		};
		const markCollectionShowAll = (index) => {
			setShowAllCollections((previous) => previous.has(index) ? previous : new Set(previous).add(index));
		};
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Page, null, banner && /* @__PURE__ */ _storybook_global_react_default.createElement(AttentionBanner, banner), /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewHeader, {
			leading: /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
				variant: "ghost",
				size: "small",
				padding: "small",
				ariaLabel: "Exit review",
				asChild: true
			}, /* @__PURE__ */ _storybook_global_react_default.createElement("a", {
				href: buildSummaryBackHref(returnSearch),
				[REVIEW_SUMMARY_BACK_ATTR]: ""
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ChevronSmallLeftIcon, null), /* @__PURE__ */ _storybook_global_react_default.createElement(StorybookIcon, null))),
			title: state.title,
			subtitle: /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, "Showing ", pluralize(storyCount, "story", "stories"), " for quick review"), createdAgo ? /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, "•"), /* @__PURE__ */ _storybook_global_react_default.createElement("span", null, createdAgo)) : null),
			actions: newStoryCount > 0 ? /* @__PURE__ */ _storybook_global_react_default.createElement(ToggleButton, {
				variant: "ghost",
				size: "small",
				padding: "small",
				ariaLabel: false,
				tooltip: "Toggle filtering of new stories",
				pressed: showNewOnly,
				onClick: () => setShowNewOnly((v) => !v)
			}, newStoryCount, " new") : null
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(ListScroll, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ScrollArea, { vertical: true }, /* @__PURE__ */ _storybook_global_react_default.createElement(Main, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SummaryLandmark, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SummaryCard, { color: "agentic" }, /* @__PURE__ */ _storybook_global_react_default.createElement(WandIcon, null), /* @__PURE__ */ _storybook_global_react_default.createElement(SummaryContent, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SummaryHeading, null, "Summary:"), " ", /* @__PURE__ */ _storybook_global_react_default.createElement(Markdown, null, state.description)))), visibleCollections.length === 0 ? /* @__PURE__ */ _storybook_global_react_default.createElement(EmptyMessage, null, showNewOnly ? "No new stories found." : "No collections found.") : visibleCollections.map(({ collection, index, storyIds }) => {
			const isExpanded = expandedCollections.has(index);
			const titleId = `review-collection-title-${index}`;
			return /* @__PURE__ */ _storybook_global_react_default.createElement(CollectionLandmark, {
				key: `${collection.title}-${index}`,
				titleId
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(Card, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Collapsible, {
				collapsed: !isExpanded,
				summary: /* @__PURE__ */ _storybook_global_react_default.createElement(CardHead, { onClick: () => toggleCollection(index) }, /* @__PURE__ */ _storybook_global_react_default.createElement(CardTitle, { id: titleId }, collection.title), /* @__PURE__ */ _storybook_global_react_default.createElement(CardControls, null, /* @__PURE__ */ _storybook_global_react_default.createElement(CardCount, { "aria-label": pluralize(storyIds.length, "story", "stories") }, storyIds.length), /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
					variant: "ghost",
					size: "small",
					padding: "small",
					ariaLabel: isExpanded ? `Collapse collection ${collection.title}` : `Expand collection ${collection.title}`,
					"aria-expanded": isExpanded,
					onClick: (event) => {
						event.stopPropagation();
						toggleCollection(index);
					}
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(ToggleChevronIcon, { style: { transform: `rotate(${isExpanded ? -180 : 0}deg)` } }))))
			}, collection.rationale ? /* @__PURE__ */ _storybook_global_react_default.createElement(CardRationale, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Markdown, null, collection.rationale)) : null, /* @__PURE__ */ _storybook_global_react_default.createElement(CollectionGrid, {
				storyIds,
				showAll: showAllCollections.has(index),
				onShowAll: () => markCollectionShowAll(index),
				storyInfo,
				getStoryHref: (storyId) => buildReviewStoryHref({
					collectionIndex: index,
					storyId
				}),
				getStoryPreviewHref,
				summaryHidden
			}))));
		})), /* @__PURE__ */ _storybook_global_react_default.createElement(FooterLandmark, null, "This review shows the ", pluralize(storyCount, "story", "stories"), " most relevant for you to spot-check right now. Because this is AI-curated, results may be inaccurate or incomplete."))));
	};
}));
//#endregion
//#region src/manager/components/review/screens/ReviewSummaryHost.tsx
var SummaryHost, ReviewSummaryHost;
var init_ReviewSummaryHost = __esmMin((() => {
	init__storybook_global_react();
	init_manager_api();
	init_emotion();
	init_constants();
	init_review_context();
	init_session_store();
	init_SummaryScreen();
	SummaryHost = styled.div(({ $visible }) => ({
		position: "absolute",
		inset: 0,
		display: "flex",
		flexDirection: "column",
		overflow: "hidden",
		visibility: $visible ? "visible" : "hidden",
		pointerEvents: $visible ? "auto" : "none"
	}));
	ReviewSummaryHost = () => {
		const api = useStorybookApi();
		const { review, storyInfo, banner, isInReviewMode, isSummaryVisible, dismiss } = useReviewContext();
		const getStoryPreviewHref = useCallback((storyId) => api.getStoryHrefs(storyId, {
			embed: true,
			freeze: true
		}).previewHref, [api]);
		if (!isSummaryVisible && !isInReviewMode) return null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(SummaryHost, {
			ref: (node) => {
				if (node) node.inert = !isSummaryVisible;
			},
			$visible: isSummaryVisible,
			"aria-hidden": !isSummaryVisible ? true : void 0,
			"data-review-summary": isSummaryVisible ? "visible" : "hidden"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(SummaryScreen, {
			state: review,
			storyInfo,
			getStoryPreviewHref,
			banner,
			summaryHidden: !isSummaryVisible,
			onDismiss: dismiss,
			returnSearch: sessionStore.read(PRE_REVIEW_RETURN_KEY)
		}));
	};
}));
//#endregion
//#region src/manager/components/review/useReviewNavigationInterceptor.ts
var isReviewStoryHref, isReviewSummaryHref, useReviewNavigationInterceptor;
var init_useReviewNavigationInterceptor = __esmMin((() => {
	init__storybook_global_react();
	init_review_context();
	init_review_navigation();
	isReviewStoryHref = (href) => href.startsWith("?path=/story/") && href.includes(`collection=`);
	isReviewSummaryHref = (href) => href === buildReviewChangesSummaryHref();
	useReviewNavigationInterceptor = () => {
		const { openSummary, openEntry, leaveReview } = useReviewContext();
		useEffect(() => {
			const onClick = (event) => {
				if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
				const { target } = event;
				const anchor = target instanceof Element ? target.closest("a") : null;
				const href = anchor?.getAttribute("href");
				if (!href) return;
				if (anchor?.hasAttribute("data-review-summary-back")) {
					event.preventDefault();
					leaveReview();
					return;
				}
				if (!isReviewStoryHref(href) && !isReviewSummaryHref(href)) return;
				event.preventDefault();
				if (isReviewSummaryHref(href)) {
					openSummary();
					return;
				}
				const entry = parseReviewStoryHref(href);
				if (!entry) return;
				openEntry(entry);
			};
			document.addEventListener("click", onClick);
			return () => document.removeEventListener("click", onClick);
		}, [
			openSummary,
			openEntry,
			leaveReview
		]);
	};
}));
//#endregion
//#region src/manager/components/review/review-notification.ts
var isUnseen, readVisitedCreatedAt, isSupersededByVisit, readNotifiedCreatedAt, isOnReviewRoute, shouldSkipArrivalNotification, pickReviewToNotify, shouldAutoAcceptOnRoute, clearReviewNotifications, acceptReviewNotification, clearReviewNotificationsOnDismiss, claimNotificationSlot, readCollectionIndex;
var init_review_notification = __esmMin((() => {
	init_constants();
	init_review_navigation();
	init_session_store();
	isUnseen = (createdAt) => createdAt !== void 0 && sessionStore.read(VISITED_REVIEW_CREATED_AT_KEY) !== String(createdAt);
	readVisitedCreatedAt = () => {
		const raw = sessionStore.read(VISITED_REVIEW_CREATED_AT_KEY);
		if (raw === null) return;
		const visited = Number(raw);
		return Number.isFinite(visited) ? visited : void 0;
	};
	isSupersededByVisit = (createdAt) => {
		const visited = readVisitedCreatedAt();
		return createdAt !== void 0 && visited !== void 0 && visited > createdAt;
	};
	readNotifiedCreatedAt = () => {
		const raw = sessionStore.read(NOTIFIED_REVIEW_CREATED_AT_KEY);
		if (raw === null) return;
		const notified = Number(raw);
		return Number.isFinite(notified) ? notified : void 0;
	};
	isOnReviewRoute = (path, collectionIndex) => isReviewSummaryPath(path) || path.startsWith("/story/") && collectionIndex !== void 0;
	shouldSkipArrivalNotification = (path, collectionIndex, review, displayed, deferred) => {
		if (!isOnReviewRoute(path, collectionIndex)) return false;
		if (deferred?.createdAt !== void 0 && deferred.createdAt === review.createdAt) return true;
		return displayed?.createdAt !== void 0 && displayed.createdAt === review.createdAt;
	};
	pickReviewToNotify = (displayed, deferred) => {
		if (deferred?.createdAt !== void 0 && isUnseen(deferred.createdAt)) return deferred;
		if (displayed?.createdAt !== void 0 && isUnseen(displayed.createdAt) && !isSupersededByVisit(displayed.createdAt)) return displayed;
		return null;
	};
	shouldAutoAcceptOnRoute = (path, collectionIndex, candidate, displayed, deferred) => {
		const createdAt = candidate.createdAt;
		if (createdAt === void 0 || !isUnseen(createdAt) || displayed?.createdAt !== createdAt) return false;
		if (!isOnReviewRoute(path, collectionIndex)) return false;
		if (deferred?.createdAt !== void 0 && deferred.createdAt !== displayed.createdAt) return false;
		return true;
	};
	clearReviewNotifications = (api, ...createdAts) => {
		for (const createdAt of new Set(createdAts.filter((value) => value !== void 0 && value !== null))) api.clearNotification(reviewAvailableNotificationId(createdAt));
		api.clearNotification(REVIEW_AVAILABLE_NOTIFICATION_ID);
	};
	acceptReviewNotification = (api, createdAt) => {
		if (createdAt === void 0) return;
		clearReviewNotifications(api, createdAt);
		sessionStore.write(VISITED_REVIEW_CREATED_AT_KEY, String(createdAt));
		sessionStore.write(NOTIFIED_REVIEW_CREATED_AT_KEY, String(createdAt));
	};
	clearReviewNotificationsOnDismiss = (api, displayed, deferred) => {
		clearReviewNotifications(api, displayed?.createdAt, deferred?.createdAt, readNotifiedCreatedAt());
		sessionStore.remove(VISITED_REVIEW_CREATED_AT_KEY);
		sessionStore.remove(NOTIFIED_REVIEW_CREATED_AT_KEY);
	};
	claimNotificationSlot = (api, createdAt, ...extraCreatedAts) => {
		if (!isUnseen(createdAt) || readNotifiedCreatedAt() === createdAt) return false;
		clearReviewNotifications(api, readNotifiedCreatedAt(), ...extraCreatedAts);
		sessionStore.write(NOTIFIED_REVIEW_CREATED_AT_KEY, String(createdAt));
		return true;
	};
	readCollectionIndex = (queryParams) => parseCollectionIndex(queryParams?.[REVIEW_COLLECTION_QUERY_PARAM]);
}));
//#endregion
//#region src/manager/components/review/components/ReviewNotification.tsx
var ReviewNotification;
var init_ReviewNotification = __esmMin((() => {
	init__storybook_global_react();
	init_icons();
	init_manager_api();
	init_constants();
	init_review_context();
	init_review_notification();
	ReviewNotification = () => {
		const api = useStorybookApi();
		const { path, customQueryParams } = useStorybookState();
		const { review: displayed, pendingReview: deferred, banner, openSummary } = useReviewContext();
		const collectionIndex = readCollectionIndex(customQueryParams);
		const deferredRef = useRef(deferred);
		deferredRef.current = deferred;
		const bannerRef = useRef(banner);
		bannerRef.current = banner;
		const handleNotificationClick = useCallback((createdAt) => {
			const pendingReview = deferredRef.current;
			const currentBanner = bannerRef.current;
			if (pendingReview?.createdAt === createdAt && currentBanner?.kind === "pending-update") {
				currentBanner.onAccept();
				return;
			}
			acceptReviewNotification(api, createdAt);
			openSummary();
		}, [api, openSummary]);
		useLayoutEffect(() => {
			const review = pickReviewToNotify(displayed, deferred);
			if (!review) return;
			if (shouldAutoAcceptOnRoute(path, collectionIndex, review, displayed, deferred)) {
				acceptReviewNotification(api, review.createdAt);
				return;
			}
			if (shouldSkipArrivalNotification(path, collectionIndex, review, displayed, deferred)) return;
			const createdAt = review.createdAt;
			if (createdAt === void 0 || !claimNotificationSlot(api, createdAt, displayed?.createdAt, deferred?.createdAt)) return;
			api.addNotification({
				id: reviewAvailableNotificationId(createdAt),
				content: {
					headline: "New review available",
					subHeadline: review.title ?? "Open the curated review to spot-check your changes"
				},
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement(WandIcon, null),
				onClick: ({ onDismiss }) => {
					handleNotificationClick(createdAt);
					onDismiss();
				}
			});
		}, [
			api,
			collectionIndex,
			handleNotificationClick,
			displayed,
			deferred,
			path
		]);
		return null;
	};
}));
//#endregion
//#region src/manager/components/review/components/ReviewPersistentLayer.tsx
var ReviewPersistentLayer;
var init_ReviewPersistentLayer = __esmMin((() => {
	init__storybook_global_react();
	init_ReviewSummaryHost();
	init_useReviewNavigationInterceptor();
	init_ReviewNotification();
	ReviewPersistentLayer = () => {
		useReviewNavigationInterceptor();
		return /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewNotification, null), /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewSummaryHost, null));
	};
}));
//#endregion
//#region src/manager/components/review/review-status.ts
var REVIEWING_STATUS_VALUE, collectReviewStoryIds, createReviewStatus, applyReviewStatuses, clearReviewStatuses;
var init_review_status = __esmMin((() => {
	init_types();
	REVIEWING_STATUS_VALUE = "status-value:reviewing";
	collectReviewStoryIds = (review) => {
		const storyIds = /* @__PURE__ */ new Set();
		for (const collection of review.collections) for (const storyId of collection.storyIds) storyIds.add(storyId);
		return storyIds;
	};
	createReviewStatus = (storyId) => ({
		storyId,
		typeId: REVIEW_STATUS_TYPE_ID,
		value: REVIEWING_STATUS_VALUE,
		title: "",
		description: "",
		sidebarContextMenu: false
	});
	applyReviewStatuses = (statusStore, storyIds) => {
		statusStore.unset();
		if (storyIds.size > 0) statusStore.set([...storyIds].map(createReviewStatus));
	};
	clearReviewStatuses = (statusStore) => {
		statusStore.unset();
	};
}));
//#endregion
//#region src/manager/components/review/review-mode.ts
var FILTERS_SNAPSHOT_SESSION_KEY, stripReviewingStatusFilter, readJson, enterReviewMode, exitReviewMode;
var init_review_mode = __esmMin((() => {
	init_review();
	init_review_status();
	init_session_store();
	FILTERS_SNAPSHOT_SESSION_KEY = `${REVIEW_NAMESPACE}/filters-snapshot`;
	stripReviewingStatusFilter = (filters) => ({
		...filters,
		includedStatusFilters: filters.includedStatusFilters.filter((value) => value !== REVIEWING_STATUS_VALUE),
		excludedStatusFilters: filters.excludedStatusFilters.filter((value) => value !== REVIEWING_STATUS_VALUE)
	});
	readJson = (key) => {
		const raw = sessionStore.read(key);
		if (raw === null) return null;
		try {
			return JSON.parse(raw);
		} catch {
			return null;
		}
	};
	enterReviewMode = async (api, filters, mode) => {
		if (mode.isActive()) return;
		sessionStore.write(FILTERS_SNAPSHOT_SESSION_KEY, JSON.stringify(stripReviewingStatusFilter(filters)));
		mode.setActive(true);
		try {
			await api.setAllTagFilters([], []);
			await api.setAllStatusFilters([REVIEWING_STATUS_VALUE], []);
		} catch (error) {
			mode.setActive(false);
			sessionStore.remove(FILTERS_SNAPSHOT_SESSION_KEY);
			throw error;
		}
	};
	exitReviewMode = async (api, mode) => {
		const filters = readJson(FILTERS_SNAPSHOT_SESSION_KEY);
		if (filters) {
			const restored = stripReviewingStatusFilter(filters);
			await api.setAllTagFilters(restored.includedTagFilters, restored.excludedTagFilters);
			await api.setAllStatusFilters(restored.includedStatusFilters, restored.excludedStatusFilters);
		} else await api.removeStatusFilters([REVIEWING_STATUS_VALUE]);
		sessionStore.remove(FILTERS_SNAPSHOT_SESSION_KEY);
		mode.setActive(false);
	};
}));
//#endregion
//#region src/manager/components/review/review-actions.ts
var navigateToReviewEntry, navigateToReviewSummary, navigateOutOfReview, dismissReview, acceptPendingReview;
var init_review_actions = __esmMin((() => {
	init_client_logger();
	init_manager_api();
	init_constants();
	init_review_mode();
	init_review_navigation();
	init_review_notification();
	init_session_store();
	navigateToReviewEntry = (api, navigate, entry, filters, mode) => {
		enterReviewMode(api, filters, mode);
		api.setQueryParams({ [REVIEW_COLLECTION_QUERY_PARAM]: String(entry.collectionIndex) });
		navigate(buildReviewStoryTarget(entry));
	};
	navigateToReviewSummary = (api, navigate, filters, mode) => {
		enterReviewMode(api, filters, mode);
		api.setQueryParams({ [REVIEW_COLLECTION_QUERY_PARAM]: null });
		navigate(REVIEW_CHANGES_URL);
	};
	navigateOutOfReview = async (api, navigate, returnSearch, mode, { visitCreatedAt, onExitingChange } = {}) => {
		api.setQueryParams({ [REVIEW_COLLECTION_QUERY_PARAM]: null });
		onExitingChange?.(true);
		try {
			await exitReviewMode(api, mode);
			if (visitCreatedAt !== void 0) acceptReviewNotification(api, visitCreatedAt);
			if (returnSearch && !isReviewReturnSearch(returnSearch)) {
				navigate(returnSearch.startsWith("?") ? returnSearch : `?${returnSearch}`, { plain: true });
				return;
			}
			api.selectFirstStory();
		} finally {
			onExitingChange?.(false);
		}
	};
	dismissReview = async () => {
		try {
			await getService("core/review", { internal: true }).commands.dismissReview(void 0);
		} catch (error) {
			logger.error("Failed to dismiss review", error);
		}
	};
	acceptPendingReview = async (api, navigate, filters, mode, pending) => {
		if (!pending) return;
		try {
			await getService("core/review", { internal: true }).commands.acceptPending(void 0);
		} catch (error) {
			logger.error("Failed to accept pending review", error);
			return;
		}
		acceptReviewNotification(api, pending.createdAt);
		sessionStore.write(AUTO_ENTERED_SESSION_KEY, autoEnteredLatchValue(pending.createdAt));
		enterReviewMode(api, filters, mode);
		navigate(buildReviewChangesSummaryHref(), { plain: true });
	};
}));
//#endregion
//#region src/manager/components/review/review-story-info.ts
var getStoryChangeStatus, buildNewlyAddedStoryIds, resolveStoryTitleAndName, buildStoryInfo;
var init_review_story_info = __esmMin((() => {
	init_types();
	init_review_types();
	getStoryChangeStatus = (allStatuses, storyId) => {
		const changeValue = Object.values(allStatuses[storyId] ?? {}).find((status) => status.typeId === CHANGE_DETECTION_STATUS_TYPE_ID)?.value;
		if (changeValue === "status-value:new") return "new";
		if (changeValue === "status-value:modified") return "modified";
	};
	buildNewlyAddedStoryIds = (state, allStatuses) => {
		const ids = /* @__PURE__ */ new Set();
		const isChangeDetectedNew = (storyId) => Object.values(allStatuses[storyId] ?? {}).some((status) => status.value === "status-value:new");
		for (const collection of state.collections) for (const storyId of collection.storyIds) if (isChangeDetectedNew(storyId)) ids.add(storyId);
		return ids;
	};
	resolveStoryTitleAndName = (storyId, internalIndex, index, api) => {
		const fromInternal = internalIndex?.entries[storyId];
		if (fromInternal?.type === "story" && fromInternal.title) return {
			title: fromInternal.title,
			name: fromInternal.name
		};
		const direct = index?.[storyId];
		const entry = direct?.type === "story" ? direct : index ? api.findLeafEntry(index, storyId) : void 0;
		if (entry?.type === "story" && entry.title) return {
			title: entry.title,
			name: entry.name
		};
		return fallbackStoryInfo(storyId);
	};
	buildStoryInfo = (state, index, internalIndex, api, allStatuses, newlyAddedStoryIds) => {
		const info = {};
		for (const collection of state.collections) for (const storyId of collection.storyIds) {
			if (storyId in info) continue;
			info[storyId] = {
				...resolveStoryTitleAndName(storyId, internalIndex, index, api),
				isNewlyAdded: newlyAddedStoryIds.has(storyId) || void 0,
				changeStatus: getStoryChangeStatus(allStatuses, storyId)
			};
		}
		return info;
	};
}));
//#endregion
//#region src/manager/components/review/useReviewFiltersRef.ts
var useReviewFiltersRef;
var init_useReviewFiltersRef = __esmMin((() => {
	init__storybook_global_react();
	init_manager_api();
	useReviewFiltersRef = () => {
		const { includedStatusFilters, excludedStatusFilters, includedTagFilters, excludedTagFilters } = useStorybookState();
		const filtersRef = useRef({
			includedStatusFilters: [],
			excludedStatusFilters: [],
			includedTagFilters: [],
			excludedTagFilters: []
		});
		filtersRef.current = {
			includedStatusFilters: includedStatusFilters ?? [],
			excludedStatusFilters: excludedStatusFilters ?? [],
			includedTagFilters: includedTagFilters ?? [],
			excludedTagFilters: excludedTagFilters ?? []
		};
		return filtersRef;
	};
}));
//#endregion
//#region src/manager/components/review/components/ReviewProvider.tsx
var reviewStatusStore, EMPTY_ENTRIES, ReviewProvider;
var init_ReviewProvider = __esmMin((() => {
	init__storybook_global_react();
	init_router();
	init_types();
	init_manager_api();
	init_constants();
	init_review_actions();
	init_review_context();
	init_review_mode();
	init_review_navigation();
	init_review_notification();
	init_review_status();
	init_review_story_info();
	init_session_store();
	init_useReviewFiltersRef();
	reviewStatusStore = experimental_getStatusStore(REVIEW_STATUS_TYPE_ID);
	EMPTY_ENTRIES = [];
	ReviewProvider = ({ children }) => {
		const api = useStorybookApi();
		const navigate = useNavigate();
		const { index, internal_index, path, viewMode, customQueryParams, location } = useStorybookState();
		const reviewService = getService("core/review", { internal: true });
		const { data: currentData } = useServiceQuery(reviewService.queries.current);
		const { data: pendingData } = useServiceQuery(reviewService.queries.pending);
		const { data: entriesData } = useServiceQuery(reviewService.queries.flattenedEntries);
		const { data: bannerKind } = useServiceQuery(reviewService.queries.bannerKind);
		const review = currentData ?? null;
		const pendingReview = pendingData ?? null;
		const flattenedEntries = entriesData ?? EMPTY_ENTRIES;
		const [isInReviewMode, setIsInReviewMode] = useState(() => sessionStore.read(REVIEW_MODE_SESSION_KEY) === "1");
		const isInReviewModeRef = useRef(isInReviewMode);
		const mode = useMemo(() => ({
			isActive: () => isInReviewModeRef.current,
			setActive: (active) => {
				isInReviewModeRef.current = active;
				if (active) sessionStore.write(REVIEW_MODE_SESSION_KEY, "1");
				else sessionStore.remove(REVIEW_MODE_SESSION_KEY);
				setIsInReviewMode(active);
			}
		}), []);
		const isExitingRef = useRef(false);
		const setExiting = useCallback((exiting) => {
			isExitingRef.current = exiting;
		}, []);
		const lastPageviewKeyRef = useRef(null);
		const lastProjectedRef = useRef({
			current: null,
			pending: null
		});
		const collectionParam = customQueryParams?.[REVIEW_COLLECTION_QUERY_PARAM];
		const filtersRef = useReviewFiltersRef();
		const isSummaryVisible = isReviewSummaryPath(path);
		const isSummaryVisibleRef = useRef(isSummaryVisible);
		isSummaryVisibleRef.current = isSummaryVisible;
		useEffect(() => {
			if (currentData === void 0) return;
			const previous = lastProjectedRef.current;
			lastProjectedRef.current = {
				current: currentData,
				pending: pendingData ?? null
			};
			if (currentData === null) {
				if (previous.current === null && previous.pending === null) return;
				clearReviewStatuses(reviewStatusStore);
				sessionStore.remove(AUTO_ENTERED_SESSION_KEY);
				clearReviewNotificationsOnDismiss(api, previous.current, previous.pending);
				if (isInReviewModeRef.current || isSummaryVisibleRef.current) navigateOutOfReview(api, navigate, sessionStore.read(PRE_REVIEW_RETURN_KEY), mode, { onExitingChange: setExiting });
				return;
			}
		}, [
			api,
			navigate,
			mode,
			setExiting,
			currentData,
			pendingData
		]);
		useEffect(() => {
			if (!review) return;
			applyReviewStatuses(reviewStatusStore, collectReviewStoryIds(review));
		}, [review]);
		const allStatuses = experimental_useStatusStore();
		const newlyAddedStoryIds = useMemo(() => review ? buildNewlyAddedStoryIds(review, allStatuses) : /* @__PURE__ */ new Set(), [allStatuses, review]);
		const storyInfo = useMemo(() => review ? buildStoryInfo(review, index, internal_index, api, allStatuses, newlyAddedStoryIds) : {}, [
			allStatuses,
			api,
			index,
			internal_index,
			newlyAddedStoryIds,
			review
		]);
		const collectionIndex = parseCollectionIndex(collectionParam);
		const storyIdFromPath = parseStoryIdFromPath(path);
		const activeEntry = review && storyIdFromPath ? resolveActiveNavEntry(flattenedEntries, storyIdFromPath, collectionIndex) : null;
		const activeIndex = activeEntry ? resolveNavIndex(flattenedEntries, activeEntry) : -1;
		const openSummary = useCallback(() => {
			navigateToReviewSummary(api, navigate, filtersRef.current, mode);
		}, [
			api,
			navigate,
			filtersRef,
			mode
		]);
		const openEntry = useCallback((entry) => {
			navigateToReviewEntry(api, navigate, entry, filtersRef.current, mode);
		}, [
			api,
			navigate,
			filtersRef,
			mode
		]);
		const reviewCreatedAt = review?.createdAt;
		const leaveReview = useCallback(() => {
			navigateOutOfReview(api, navigate, sessionStore.read(PRE_REVIEW_RETURN_KEY), mode, {
				visitCreatedAt: reviewCreatedAt,
				onExitingChange: setExiting
			});
		}, [
			api,
			navigate,
			mode,
			reviewCreatedAt,
			setExiting
		]);
		const hasReview = review !== null;
		const dismiss = useCallback(() => {
			if (!hasReview) {
				navigateOutOfReview(api, navigate, sessionStore.read(PRE_REVIEW_RETURN_KEY), mode, { onExitingChange: setExiting });
				return;
			}
			dismissReview();
		}, [
			api,
			navigate,
			mode,
			hasReview,
			setExiting
		]);
		const onAcceptPendingUpdate = useCallback(() => {
			acceptPendingReview(api, navigate, filtersRef.current, mode, pendingReview);
		}, [
			api,
			navigate,
			filtersRef,
			mode,
			pendingReview
		]);
		const banner = useMemo(() => bannerKind === "pending-update" ? {
			kind: "pending-update",
			onAccept: onAcceptPendingUpdate
		} : bannerKind === "stale" ? { kind: "stale" } : null, [bannerKind, onAcceptPendingUpdate]);
		useEffect(() => {
			if (!review) {
				lastPageviewKeyRef.current = null;
				return;
			}
			let page = null;
			let key = null;
			if (isSummaryVisible) {
				page = "summary";
				key = "summary";
			} else if (isInReviewMode && activeEntry) {
				page = "detail";
				key = `detail:${activeEntry.storyId}`;
			}
			if (!page || key === lastPageviewKeyRef.current) return;
			lastPageviewKeyRef.current = key;
			api.emit(REVIEW_EVENTS.PAGEVIEW, {
				page,
				reviewCreatedAt: review.createdAt
			});
		}, [
			review,
			isSummaryVisible,
			isInReviewMode,
			activeEntry,
			api
		]);
		useEffect(() => {
			if (!review || !isSummaryVisible || mode.isActive()) return;
			if (isExitingRef.current) return;
			const latch = autoEnteredLatchValue(review.createdAt);
			if (sessionStore.read(AUTO_ENTERED_SESSION_KEY) === latch) return;
			sessionStore.write(AUTO_ENTERED_SESSION_KEY, latch);
			enterReviewMode(api, filtersRef.current, mode);
		}, [
			review,
			isSummaryVisible,
			api,
			filtersRef,
			mode
		]);
		useEffect(() => {
			if (isInReviewMode) return;
			if (viewMode !== "story" && viewMode !== "docs") return;
			const search = location?.search;
			if (search && !isReviewReturnSearch(search)) sessionStore.write(PRE_REVIEW_RETURN_KEY, search);
		}, [
			isInReviewMode,
			viewMode,
			location?.search
		]);
		const value = useMemo(() => ({
			review,
			pendingReview,
			storyInfo,
			flattenedEntries,
			newlyAddedStoryIds,
			activeEntry,
			activeIndex,
			isSummaryVisible,
			banner,
			isInReviewMode,
			openSummary,
			openEntry,
			leaveReview,
			dismiss
		}), [
			review,
			pendingReview,
			storyInfo,
			flattenedEntries,
			newlyAddedStoryIds,
			activeEntry,
			activeIndex,
			isSummaryVisible,
			banner,
			isInReviewMode,
			openSummary,
			openEntry,
			leaveReview,
			dismiss
		]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewContext.Provider, { value }, children);
	};
}));
//#endregion
//#region src/manager/components/panel/Panel.tsx
function renderChild(RenderProp) {
	return /* @__PURE__ */ _storybook_global_react_default.createElement(RenderProp, { active: true });
}
var TabErrorBoundary, Aside, PreRenderAddons, AddonPanel, ActionsWrapper;
var init_Panel = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_icons();
	init_emotion();
	init_layout();
	init_useLandmark();
	init_LayoutProvider();
	TabErrorBoundary = class extends Component {
		constructor(props) {
			super(props);
			this.state = { hasError: false };
		}
		static getDerivedStateFromError() {
			return { hasError: true };
		}
		componentDidCatch(error, info) {
			console.error("Error rendering addon panel");
			console.error(error);
			console.error(info.componentStack);
		}
		render() {
			const { hasError } = this.state;
			if (hasError) return /* @__PURE__ */ _storybook_global_react_default.createElement(EmptyTabContent, {
				title: "This addon has errors",
				description: "Check your browser logs and addon code to pinpoint what went wrong. This issue was not caused by Storybook."
			});
			const { children } = this.props;
			return children;
		}
	};
	Aside = styled.aside({
		height: "100%",
		display: "flex",
		flexDirection: "column"
	});
	PreRenderAddons = ({ panels }) => {
		return Object.entries(panels).map(([k, v]) => /* @__PURE__ */ _storybook_global_react_default.createElement(StatelessTabPanel, {
			key: k,
			name: k,
			hasScrollbar: false
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(TabErrorBoundary, { key: k }, renderChild(v.render))));
	};
	AddonPanel = _storybook_global_react_default.memo(({ panels, shortcuts, actions, selectedPanel = null, panelPosition = "right" }) => {
		const { isDesktop, setMobilePanelOpen } = useLayout();
		const emptyState = /* @__PURE__ */ _storybook_global_react_default.createElement(EmptyTabContent, {
			title: "Storybook add-ons",
			description: /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, "Integrate your tools with Storybook to connect workflows and unlock advanced features."),
			footer: /* @__PURE__ */ _storybook_global_react_default.createElement(Link$1, {
				href: "https://storybook.js.org/addons?ref=ui",
				target: "_blank",
				withArrow: true
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(DocumentIcon, null), " Explore integrations catalog")
		});
		const tools = useMemo(() => /* @__PURE__ */ _storybook_global_react_default.createElement(ActionsWrapper, null, isDesktop ? /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			key: "position",
			padding: "small",
			variant: "ghost",
			onClick: actions.togglePosition,
			ariaLabel: panelPosition === "bottom" ? "Move addon panel to right" : "Move addon panel to bottom",
			ariaDescription: "Changes the location of the addon panel to the bottom or right of the screen, but does not have any effect on its content.",
			shortcut: shortcuts.panelPosition
		}, panelPosition === "bottom" ? /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarAltIcon, null) : /* @__PURE__ */ _storybook_global_react_default.createElement(BottomBarIcon, null)), /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			key: "visibility",
			padding: "small",
			variant: "ghost",
			onClick: actions.toggleVisibility,
			ariaLabel: "Hide addon panel",
			shortcut: shortcuts.togglePanel
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(CloseIcon, null))) : /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			padding: "small",
			variant: "ghost",
			onClick: () => setMobilePanelOpen(false),
			ariaLabel: "Close addon panel"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(CloseIcon, null))), [
			actions,
			isDesktop,
			panelPosition,
			setMobilePanelOpen,
			shortcuts
		]);
		const asideRef = useRef(null);
		const { landmarkProps } = useLandmark({
			"aria-labelledby": "storybook-panel-heading",
			role: "region"
		}, asideRef);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Aside, {
			ref: asideRef,
			id: focusableUIElements.addonPanel,
			...landmarkProps
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("h2", {
			id: "storybook-panel-heading",
			className: "sb-sr-only"
		}, "Addon panel"), /* @__PURE__ */ _storybook_global_react_default.createElement(StatelessTabsView, {
			id: focusableUIElements.storyPanelRoot,
			showToolsWhenEmpty: true,
			emptyState,
			selected: selectedPanel ?? void 0,
			onSelectionChange: (id) => actions.onSelect(id),
			tools
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(StatelessTabList, { "aria-label": "Available addons" }, Object.entries(panels).map(([k, v]) => /* @__PURE__ */ _storybook_global_react_default.createElement(StatelessTab, {
			key: k,
			name: k
		}, typeof v.title === "function" ? /* @__PURE__ */ _storybook_global_react_default.createElement(v.title, null) : v.title))), Object.keys(panels).length ? /* @__PURE__ */ _storybook_global_react_default.createElement(PreRenderAddons, { panels }) : null));
	});
	AddonPanel.displayName = "AddonPanel";
	ActionsWrapper = styled.div({
		display: "flex",
		alignItems: "center",
		gap: 6
	});
}));
//#endregion
//#region src/manager/components/review/components/ReviewCollectionPicker.tsx
var derivePickerLabel, ReviewCollectionPicker;
var init_ReviewCollectionPicker = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_review_context();
	init_review_navigation();
	derivePickerLabel = (storyId, info) => {
		if (info) return {
			component: info.title.split("/").pop() ?? info.title,
			story: info.name
		};
		const [componentId, ...rest] = storyId.split("--");
		return {
			component: prettifyComponentId(componentId),
			story: prettifyComponentId(rest.join("--")) || "Story"
		};
	};
	ReviewCollectionPicker = ({ entries, activeEntry, storyInfo, children }) => {
		const { openEntry } = useReviewContext();
		const options = entries.map((entry, index) => {
			const { component, story } = derivePickerLabel(entry.storyId, storyInfo[entry.storyId]);
			return {
				value: index,
				title: component,
				description: story
			};
		});
		const activeValue = resolveNavIndex(entries, activeEntry);
		const [nextStory, setNextStory] = _storybook_global_react_default.useState(void 0);
		useEffect(() => {
			if (nextStory) openEntry(nextStory);
		}, [nextStory, openEntry]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Select, {
			ariaLabel: "Select story",
			size: "small",
			padding: "small",
			options,
			defaultOptions: activeValue >= 0 ? activeValue : void 0,
			showSelectedOptionTitle: false,
			onSelect: (value) => {
				const entry = typeof value === "number" ? entries[value] : void 0;
				setNextStory(entry);
			}
		}, children);
	};
}));
//#endregion
//#region src/manager/components/review/components/ReviewToolbarHeader.tsx
var Root, HeaderWrap, ProgressBar, ProgressFill, SubtitleStrong, SubtitleSeparator, SubtitleText, Counter, NavButton, componentName, ReviewToolbarHeader;
var init_ReviewToolbarHeader = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_emotion();
	init_icons();
	init_review_navigation();
	init_review_context();
	init_AttentionBanner();
	init_ReviewCollectionPicker();
	init_ReviewHeader();
	Root = styled.div(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		flexShrink: 0,
		width: "100%",
		background: theme.background.content,
		zIndex: 4
	}));
	HeaderWrap = styled.div({
		position: "relative",
		flexShrink: 0
	});
	ProgressBar = styled.div(({ theme }) => ({
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 1,
		width: "100%",
		height: 3,
		overflow: "hidden",
		background: theme.background.app
	}));
	ProgressFill = styled.div(({ theme }) => ({
		position: "absolute",
		insetBlock: 0,
		left: 0,
		background: theme.color.secondary,
		transition: "width 200ms ease"
	}));
	SubtitleStrong = styled.span(({ theme }) => ({
		fontWeight: 700,
		color: theme.color.defaultText
	}));
	SubtitleSeparator = styled.span(({ theme }) => ({ color: theme.color.defaultText }));
	SubtitleText = styled.span(({ theme }) => ({ color: theme.color.defaultText }));
	Counter = styled.span(({ theme }) => ({
		fontVariantNumeric: "tabular-nums",
		fontFamily: theme.typography.fonts.mono,
		fontWeight: theme.typography.weight.regular
	}));
	NavButton = ({ entry, ariaLabel, icon }) => entry ? /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
		variant: "ghost",
		size: "small",
		padding: "small",
		ariaLabel,
		asChild: true
	}, /* @__PURE__ */ _storybook_global_react_default.createElement("a", { href: buildReviewStoryHref(entry) }, icon)) : /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
		variant: "ghost",
		size: "small",
		padding: "small",
		ariaLabel,
		disabled: true
	}, icon);
	componentName = (componentTitle) => componentTitle.split("/").map((part) => part.trim()).filter(Boolean).pop() ?? componentTitle;
	ReviewToolbarHeader = () => {
		const { review, banner, storyInfo, flattenedEntries, newlyAddedStoryIds, activeEntry, activeIndex } = useReviewContext();
		if (!review || !activeEntry || activeIndex < 0) return null;
		const collectionTitle = review.collections[activeEntry.collectionIndex]?.title ?? "Review";
		const totalStories = flattenedEntries.length;
		const hasPrevious = activeIndex > 0;
		const hasNext = activeIndex < totalStories - 1;
		const previousEntry = hasPrevious ? flattenedEntries[activeIndex - 1] : null;
		const nextEntry = hasNext ? flattenedEntries[activeIndex + 1] : null;
		const progress = totalStories > 1 ? activeIndex / (totalStories - 1) : 0;
		const currentStoryInfo = storyInfo[activeEntry.storyId];
		const isNewlyAdded = newlyAddedStoryIds.has(activeEntry.storyId);
		const metadataSubtitle = currentStoryInfo?.title && currentStoryInfo.name ? /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SubtitleStrong, null, componentName(currentStoryInfo.title)), /* @__PURE__ */ _storybook_global_react_default.createElement(SubtitleSeparator, null, "/"), /* @__PURE__ */ _storybook_global_react_default.createElement(SubtitleText, null, currentStoryInfo.name)) : null;
		const subtitle = metadataSubtitle || isNewlyAdded ? /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, metadataSubtitle, isNewlyAdded ? /* @__PURE__ */ _storybook_global_react_default.createElement(Badge, { status: "positive" }, "New") : null) : void 0;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Root, { "data-testid": "review-toolbar-header" }, banner && /* @__PURE__ */ _storybook_global_react_default.createElement(AttentionBanner, banner), /* @__PURE__ */ _storybook_global_react_default.createElement(HeaderWrap, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ProgressBar, {
			role: "progressbar",
			"aria-label": "Review progress",
			"aria-valuenow": activeIndex + 1,
			"aria-valuemin": 1,
			"aria-valuemax": totalStories,
			"data-testid": "review-progress"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ProgressFill, {
			"data-testid": "review-progress-fill",
			style: { width: `${progress * 100}%` }
		})), /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewHeader, {
			variant: "toolbar",
			leading: /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
				variant: "ghost",
				size: "small",
				padding: "small",
				ariaLabel: "Back to review",
				asChild: true
			}, /* @__PURE__ */ _storybook_global_react_default.createElement("a", { href: buildReviewChangesSummaryHref() }, /* @__PURE__ */ _storybook_global_react_default.createElement(ChevronSmallLeftIcon, null), /* @__PURE__ */ _storybook_global_react_default.createElement(WandIcon, null))),
			title: collectionTitle,
			subtitle,
			actions: /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewCollectionPicker, {
				entries: flattenedEntries,
				activeEntry,
				storyInfo
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(Counter, null, activeIndex + 1, "/", totalStories)), /* @__PURE__ */ _storybook_global_react_default.createElement(NavButton, {
				entry: previousEntry,
				ariaLabel: "Previous story",
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement(ChevronSmallLeftIcon, null)
			}), /* @__PURE__ */ _storybook_global_react_default.createElement(NavButton, {
				entry: nextEntry,
				ariaLabel: "Next story",
				icon: /* @__PURE__ */ _storybook_global_react_default.createElement(ChevronSmallRightIcon, null)
			}))
		})));
	};
}));
//#endregion
//#region src/manager/components/preview/Iframe.tsx
function IFrame(props) {
	const { active, id, title, src, allowFullScreen, scale, ...rest } = props;
	const iFrameRef = _storybook_global_react_default.useRef(null);
	return /* @__PURE__ */ _storybook_global_react_default.createElement(Zoom$1.IFrame, {
		scale,
		active,
		iFrameRef
	}, /* @__PURE__ */ _storybook_global_react_default.createElement(StyledIframe, {
		"data-is-storybook": active ? "true" : "false",
		onLoad: (e) => e.currentTarget.setAttribute("data-is-loaded", "true"),
		id,
		title,
		src,
		allow: "clipboard-write;",
		allowFullScreen,
		ref: iFrameRef,
		...rest
	}));
}
var StyledIframe;
var init_Iframe = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_emotion();
	StyledIframe = styled.iframe(({ theme }) => ({
		backgroundColor: theme.background.preview,
		display: "block",
		boxSizing: "content-box",
		height: "100%",
		width: "100%",
		border: "none",
		transition: "background-position 0s, visibility 0s",
		backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
		margin: `auto`
	}));
}));
//#endregion
//#region src/manager/components/preview/NumericInput.tsx
var Wrapper$3, NumericInput;
var init_NumericInput = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_useId$1();
	init_emotion();
	Wrapper$3 = styled.div(({ after, before, theme }) => ({
		position: "relative",
		display: "flex",
		alignItems: "center",
		width: "100%",
		height: 32,
		paddingInline: 9,
		fontSize: theme.typography.size.s1,
		color: theme.textMutedColor,
		background: theme.input.background,
		boxShadow: `${theme.input.border} 0 0 0 1px inset`,
		borderRadius: theme.input.borderRadius,
		svg: { display: "block" },
		input: {
			width: "100%",
			height: "100%",
			minHeight: "100%",
			flex: "1 1 auto",
			paddingInline: 0,
			fontSize: "inherit",
			background: "transparent",
			border: "none",
			boxShadow: "none",
			color: theme.input.color,
			"&:focus, &:focus-visible": {
				boxShadow: "none",
				outline: "none"
			}
		},
		"input:disabled": { background: "transparent" },
		"input + div": {
			paddingInline: 0,
			fontSize: "inherit"
		},
		"&:has(input:focus-visible)": {
			outline: `2px solid ${theme.color.secondary}`,
			outlineOffset: -2
		},
		"&:has(input:disabled)": {
			background: theme.base === "light" ? theme.color.lighter : theme.input.background,
			cursor: "not-allowed"
		},
		...after && { paddingRight: 2 },
		...before && { paddingLeft: 2 }
	}));
	NumericInput = forwardRef(function NumericInput({ label, before, after, value, setValue, minValue = -Infinity, maxValue = Infinity, step = 1, unit: fixedUnit, baseUnit = fixedUnit, className, style, ...props }, forwardedRef) {
		const baseUnitRegex = useMemo(() => baseUnit && new RegExp(`${baseUnit}$`), [baseUnit]);
		const inputId = $390e54f620492c70$export$f680877a34711e37();
		const inputRef = useRef(null);
		const [inputValue, setInputValue] = useState(baseUnitRegex ? value.replace(baseUnitRegex, "") : value);
		const id = props.id || inputId;
		useImperativeHandle(forwardedRef, () => inputRef.current);
		const parseValue = useCallback((value) => {
			const [, inputValue, unit = fixedUnit || baseUnit || ""] = value.match(/(-?\d+(?:\.\d+)?)(\%|[a-z]{1,4})?$/) || [];
			return {
				number: Math.max(minValue, Math.min(parseFloat(inputValue), maxValue)),
				unit
			};
		}, [
			minValue,
			maxValue,
			fixedUnit,
			baseUnit
		]);
		const updateValue = useCallback((value) => {
			const { number, unit } = parseValue(value);
			if (Number.isNaN(number)) setInputValue(value);
			else {
				setInputValue(`${number}${unit === baseUnit ? "" : unit}`);
				setValue(`${number}${unit}`);
			}
		}, [
			parseValue,
			setValue,
			baseUnit
		]);
		const onChange = useCallback((e) => updateValue(e.target.value), [updateValue]);
		const setInputSelection = useCallback(() => {
			requestAnimationFrame(() => {
				const input = inputRef.current;
				const index = input?.value.search(/[^-\d.]/) ?? -1;
				if (input && index >= 0) input.setSelectionRange(index, index);
			});
		}, []);
		const updateInputValue = useCallback(() => setInputValue(baseUnitRegex ? value.replace(baseUnitRegex, "") : value), [value, baseUnitRegex]);
		useEffect(() => {
			if (inputRef.current !== document.activeElement) updateInputValue();
		}, [updateInputValue]);
		useEffect(() => {
			const handleKeyDown = (e) => {
				if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
				e.preventDefault();
				const { number, unit } = parseValue(inputValue);
				if (!Number.isNaN(number)) {
					const delta = e.shiftKey ? step * 10 : step;
					updateValue(`${e.key === "ArrowUp" ? number + delta : number - delta}${unit}`);
					setInputSelection();
				}
			};
			const input = inputRef.current;
			if (input) {
				input.addEventListener("keydown", handleKeyDown);
				return () => input.removeEventListener("keydown", handleKeyDown);
			}
		}, [
			inputValue,
			parseValue,
			setInputSelection,
			step,
			updateValue
		]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Wrapper$3, {
			after,
			before,
			className,
			style
		}, before && /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, before), label && /* @__PURE__ */ _storybook_global_react_default.createElement("label", {
			htmlFor: id,
			className: "sb-sr-only"
		}, label), /* @__PURE__ */ _storybook_global_react_default.createElement(Form.Input, {
			...props,
			id,
			ref: inputRef,
			value: inputValue,
			suffix: fixedUnit ? fixedUnit : inputValue && baseUnit,
			onChange,
			onFocus: setInputSelection,
			onBlur: updateInputValue
		}), after && /* @__PURE__ */ _storybook_global_react_default.createElement("div", null, after));
	});
}));
//#endregion
//#region src/manager/components/preview/Viewport.tsx
var ViewportWrapper, ViewportControls, ViewportDimensions, FrameWrapper, DragHandle, ScrollEdge, SizeInput, Viewport;
var init_Viewport = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_icons();
	init_emotion();
	init_useViewport();
	init_Iframe();
	init_NumericInput();
	ViewportWrapper = styled.div(({ active, isDefault, theme }) => ({
		gridArea: "1 / 1",
		alignSelf: "start",
		justifySelf: "start",
		display: active ? "inline-flex" : "none",
		flexDirection: "column",
		gap: 6,
		width: "100%",
		height: "100%",
		paddingTop: isDefault ? 0 : 6,
		paddingBottom: isDefault ? 0 : 40,
		paddingInline: isDefault ? 0 : 40,
		"&:has([data-size-input=\"width\"]:focus-visible)": { "[data-dragging]": {
			borderRightColor: theme.color.secondary,
			boxShadow: `4px 0 5px -2px ${theme.background.hoverable}`
		} },
		"&:has([data-size-input=\"height\"]:focus-visible)": { "[data-dragging]": {
			borderBottomColor: theme.color.secondary,
			boxShadow: `0 4px 5px -2px ${theme.background.hoverable}`
		} }
	}));
	ViewportControls = styled.div({
		display: "flex",
		gap: 6
	});
	ViewportDimensions = styled.div({
		display: "flex",
		gap: 2
	});
	FrameWrapper = styled.div(({ isDefault, "data-dragging": dragging, theme }) => ({
		position: "relative",
		minWidth: 40,
		minHeight: 40,
		boxSizing: "content-box",
		border: `1px solid ${theme.button.border}`,
		borderWidth: isDefault ? 0 : 1,
		borderRadius: isDefault ? 0 : 4,
		transition: "border-color 0.2s, box-shadow 0.2s",
		"&:has([data-side=\"right\"]:hover), &[data-dragging=\"right\"]": {
			borderRightColor: theme.color.secondary,
			boxShadow: `4px 0 5px -2px ${theme.background.hoverable}`,
			"[data-side=\"right\"]::after": { opacity: 1 }
		},
		"&:has([data-side=\"bottom\"]:hover), &[data-dragging=\"bottom\"]": {
			borderBottomColor: theme.color.secondary,
			boxShadow: `0 4px 5px -2px ${theme.background.hoverable}`,
			"[data-side=\"bottom\"]::after": { opacity: 1 }
		},
		"&:has([data-side=\"both\"]:hover), &[data-dragging=\"both\"]": {
			boxShadow: `3px 3px 5px -2px ${theme.background.hoverable}`,
			"&::after, [data-side]::after": { opacity: 1 }
		},
		"&::after": {
			content: "\"\"",
			display: "block",
			position: "absolute",
			pointerEvents: "none",
			bottom: 1,
			right: 1,
			width: 12,
			height: 12,
			opacity: 0,
			transition: "opacity 0.2s",
			background: `linear-gradient(to top left,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0) calc(25% - 1px),
      ${theme.color.secondary} 25%,
      rgba(0,0,0,0) calc(25% + 1px),
      rgba(0,0,0,0) calc(45% - 1px),
      ${theme.color.secondary} 45%,
      rgba(0,0,0,0) calc(45% + 1px),
      rgba(0,0,0,0) 100%)`
		},
		iframe: { pointerEvents: dragging === "none" ? "auto" : "none" }
	}));
	DragHandle = styled.div({ display: "none" }, ({ theme, isDefault }) => !isDefault && {
		display: "block",
		position: "absolute",
		fontSize: 10,
		"&[data-side=\"both\"]": {
			right: -12,
			bottom: -12,
			width: 25,
			height: 25,
			cursor: "nwse-resize"
		},
		"&[data-side=\"bottom\"]": {
			left: 0,
			right: 13,
			bottom: -12,
			height: 20,
			cursor: "row-resize",
			"&::after": {
				content: "attr(data-value)",
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				borderRadius: 4,
				backgroundColor: theme.background.hoverable,
				padding: "2px 4px",
				opacity: 0,
				transition: "opacity 0.2s"
			}
		},
		"&[data-side=\"right\"]": {
			top: 0,
			right: -12,
			bottom: 13,
			width: 20,
			cursor: "col-resize",
			"&::after": {
				content: "attr(data-value)",
				position: "absolute",
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				borderRadius: 4,
				backgroundColor: theme.background.hoverable,
				padding: "2px 4px",
				opacity: 0,
				transition: "opacity 0.2s"
			}
		}
	});
	ScrollEdge = styled.div({
		position: "absolute",
		pointerEvents: "none",
		width: 0,
		height: 0,
		"&[data-edge=\"right\"]": {
			right: -40,
			height: "100%"
		},
		"&[data-edge=\"bottom\"]": {
			bottom: -40,
			width: "100%"
		},
		"&[data-edge=\"both\"]": {
			right: -40,
			bottom: -40
		}
	});
	SizeInput = styled(NumericInput)({
		width: 85,
		height: 28,
		minHeight: 28
	});
	Viewport = ({ active, id, src, scale }) => {
		const { width, height, isCustom, isDefault, lastSelectedOption, resize, rotate, select } = useViewport();
		const [dragging, setDragging] = useState("none");
		const targetRef = useRef(null);
		const dragRefX = useRef(null);
		const dragRefY = useRef(null);
		const dragRefXY = useRef(null);
		const dragSide = useRef("none");
		const dragStart = useRef();
		const dragScrollTarget = useRef(null);
		useEffect(() => {
			const onDrag = (e) => {
				if (!targetRef.current || !dragStart.current) return;
				if (dragRefX.current && (dragSide.current === "both" || dragSide.current === "right")) {
					const newWidth = Math.max(40, dragStart.current[0] + e.clientX);
					targetRef.current.style.width = `${newWidth}px`;
					dragRefX.current.dataset.value = `${Math.round(newWidth / scale)}`;
				}
				if (dragRefY.current && (dragSide.current === "both" || dragSide.current === "bottom")) {
					const newHeight = Math.max(40, dragStart.current[1] + e.clientY);
					targetRef.current.style.height = `${newHeight}px`;
					dragRefY.current.dataset.value = `${Math.round(newHeight / scale)}`;
				}
				if (dragScrollTarget.current) dragScrollTarget.current.scrollIntoView({
					block: "center",
					inline: "center"
				});
			};
			const onEnd = () => {
				window.removeEventListener("mouseup", onEnd);
				window.removeEventListener("mousemove", onDrag);
				setDragging("none");
				dragStart.current = void 0;
				if (targetRef.current) {
					const { clientWidth, clientHeight, dataset } = targetRef.current;
					const scale = Number(dataset.scale) || 1;
					resize(`${Math.round(clientWidth / scale)}px`, `${Math.round(clientHeight / scale)}px`);
				}
			};
			const onStart = (e) => {
				e.preventDefault();
				window.addEventListener("mouseup", onEnd);
				window.addEventListener("mousemove", onDrag);
				dragSide.current = e.currentTarget.dataset.side;
				dragStart.current = [(targetRef.current?.clientWidth ?? 0) - e.clientX, (targetRef.current?.clientHeight ?? 0) - e.clientY];
				dragScrollTarget.current = targetRef.current?.querySelector(`[data-edge="${dragSide.current}"]`);
				setDragging(dragSide.current);
			};
			const handles = [
				dragRefX.current,
				dragRefY.current,
				dragRefXY.current
			];
			handles.forEach((el) => el?.addEventListener("mousedown", onStart));
			return () => handles.forEach((el) => el?.removeEventListener("mousedown", onStart));
		}, [resize, scale]);
		const dimensions = useMemo(() => {
			const [, nx = "", ux = "px"] = width.match(/^(\d+(?:\.\d+)?)(\%|[a-z]{1,4})?$/) || [];
			const [, ny = "", uy = "px"] = height.match(/^(\d+(?:\.\d+)?)(\%|[a-z]{1,4})?$/) || [];
			return {
				frame: {
					width: `calc(${width} * ${scale})`,
					height: `calc(${height} * ${scale})`
				},
				display: {
					width: `${nx || width}${ux === "px" ? "" : ux}`,
					height: `${ny || height}${uy === "px" ? "" : uy}`
				},
				locked: {
					width: !nx || !ny,
					height: !nx || !ny
				}
			};
		}, [
			width,
			height,
			scale
		]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(ViewportWrapper, {
			key: id,
			active,
			isDefault
		}, !isDefault && /* @__PURE__ */ _storybook_global_react_default.createElement(ViewportControls, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ViewportDimensions, null, /* @__PURE__ */ _storybook_global_react_default.createElement(SizeInput, {
			"aria-label": "Viewport width",
			"data-size-input": "width",
			label: "Viewport width",
			before: /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
				ariaLabel: false,
				size: "small",
				readOnly: true,
				"aria-hidden": true
			}, "W"),
			value: width,
			minValue: 0,
			setValue: (value) => resize(value, height),
			disabled: dimensions.locked.width
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
			key: "viewport-rotate",
			size: "small",
			padding: "small",
			ariaLabel: "Rotate viewport",
			onClick: rotate
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(TransferIcon, null)), /* @__PURE__ */ _storybook_global_react_default.createElement(SizeInput, {
			"aria-label": "Viewport height",
			"data-size-input": "height",
			label: "Viewport height",
			before: /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
				ariaLabel: false,
				size: "small",
				readOnly: true,
				"aria-hidden": true
			}, "H"),
			value: height,
			minValue: 0,
			setValue: (value) => resize(width, value),
			disabled: dimensions.locked.height
		}), isCustom && lastSelectedOption && /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
			key: "viewport-restore",
			size: "small",
			padding: "small",
			ariaLabel: "Restore viewport",
			onClick: () => select(lastSelectedOption)
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(UndoIcon, null)))), /* @__PURE__ */ _storybook_global_react_default.createElement(FrameWrapper, {
			isDefault,
			"data-dragging": dragging,
			"data-scale": scale,
			style: isDefault ? {
				height: "100%",
				width: "100%"
			} : dimensions.frame,
			ref: targetRef
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("div", { style: {
			height: `${1 / scale * 100}%`,
			width: `${1 / scale * 100}%`,
			transform: scale !== 1 ? `scale(${scale})` : "none",
			transformOrigin: "top left"
		} }, /* @__PURE__ */ _storybook_global_react_default.createElement(IFrame, {
			allowFullScreen: true,
			active,
			key: id,
			id,
			title: id,
			src,
			scale: 1
		}), !isDefault && /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ScrollEdge, { "data-edge": "right" }), /* @__PURE__ */ _storybook_global_react_default.createElement(ScrollEdge, { "data-edge": "bottom" }), /* @__PURE__ */ _storybook_global_react_default.createElement(ScrollEdge, { "data-edge": "both" }))), !dimensions.locked.width && /* @__PURE__ */ _storybook_global_react_default.createElement(DragHandle, {
			ref: dragRefX,
			isDefault,
			"data-side": "right",
			"data-value": dimensions.display.width
		}), !dimensions.locked.height && /* @__PURE__ */ _storybook_global_react_default.createElement(DragHandle, {
			ref: dragRefY,
			isDefault,
			"data-side": "bottom",
			"data-value": dimensions.display.height
		}), !dimensions.locked.width && !dimensions.locked.height && /* @__PURE__ */ _storybook_global_react_default.createElement(DragHandle, {
			ref: dragRefXY,
			isDefault,
			"data-side": "both"
		})));
	};
}));
//#endregion
//#region src/manager/components/preview/FramesRenderer.tsx
var getActive, SkipToSidebarLink, whenSidebarIsVisible, styles, FramesRenderer;
var init_FramesRenderer = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_manager_api();
	init_emotion();
	init_Viewport();
	getActive = (refId, refs) => {
		if (refId && refs[refId]) return `storybook-ref-${refId}`;
		return "storybook-preview-iframe";
	};
	SkipToSidebarLink = styled(Button)(({ theme }) => ({
		display: "none",
		"@media (min-width: 600px)": {
			position: "absolute",
			display: "block",
			top: 10,
			right: 15,
			padding: "10px 15px",
			fontSize: theme.typography.size.s1,
			transform: "translateY(-100px)",
			"&:focus": {
				transform: "translateY(0)",
				zIndex: 1
			}
		}
	}));
	whenSidebarIsVisible = ({ api, state }) => ({
		isFullscreen: api.getIsFullscreen(),
		isNavShown: api.getNavAvailability() === "shown",
		selectedStoryId: state.storyId
	});
	styles = {
		"#root [data-is-storybook=\"false\"]": { display: "none" },
		"#root [data-is-storybook=\"true\"]": { display: "block" }
	};
	FramesRenderer = ({ api, refs, scale, viewMode = "story", refId, queryParams = {}, storyId = "*" }) => {
		const version = refs[refId]?.version;
		const active = getActive(refId, refs);
		const { current: frames } = useRef({});
		const refsToLoad = Object.values(refs).filter((ref) => {
			return ref.type === "auto-inject" || ref.id === refId;
		}, {});
		if (!frames["storybook-preview-iframe"]) frames["storybook-preview-iframe"] = api.getStoryHrefs(storyId, {
			queryParams: {
				...queryParams,
				...version && { version }
			},
			refId: void 0,
			viewMode
		}).previewHref;
		refsToLoad.forEach((ref) => {
			const id = `storybook-ref-${ref.id}`;
			if (!frames[id]?.startsWith(`${ref.url.replace(/\/?$/, "/")}iframe.html`)) frames[id] = api.getStoryHrefs(storyId, {
				queryParams: {
					...queryParams,
					...version && { version }
				},
				refId: ref.id,
				viewMode
			}).previewHref;
		});
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Global, { styles }), /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: whenSidebarIsVisible }, ({ isFullscreen, isNavShown, selectedStoryId }) => {
			if (isFullscreen || !isNavShown || !selectedStoryId) return null;
			return /* @__PURE__ */ _storybook_global_react_default.createElement(SkipToSidebarLink, {
				ariaLabel: false,
				asChild: true
			}, /* @__PURE__ */ _storybook_global_react_default.createElement("a", {
				href: `#${selectedStoryId}`,
				tabIndex: 0
			}, "Skip to sidebar"));
		}), Object.entries(frames).map(([id, src]) => /* @__PURE__ */ _storybook_global_react_default.createElement(Viewport, {
			key: id,
			id,
			src,
			active: id === active,
			scale
		})));
	};
}));
//#endregion
//#region src/manager/components/preview/Toolbar.tsx
function toolbarItemHasBeenExcluded(item, entry) {
	const parameters = entry?.type === "story" && entry?.prepared ? entry?.parameters : {};
	const toolbarItemsFromStoryParameters = "toolbar" in parameters ? parameters.toolbar : void 0;
	const { toolbar: toolbarItemsFromAddonsConfig } = addons.getConfig();
	const toolbarItems = merge(toolbarItemsFromAddonsConfig || {}, toolbarItemsFromStoryParameters || {});
	return toolbarItems ? !!toolbarItems[item?.id]?.hidden : false;
}
function filterToolsSide(tools, entry, viewMode, location, path) {
	const filter = (item) => item && (!item.match || item.match({
		storyId: entry?.id,
		refId: entry?.refId,
		viewMode,
		location,
		path
	})) && !toolbarItemHasBeenExcluded(item, entry);
	return tools.filter(filter);
}
var fullScreenMapper, fullScreenTool, ToolbarComp, Tools, StyledSection, StyledToolbar, ToolGroup;
var init_Toolbar = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_types();
	init_icons();
	init_manager_api();
	init_emotion();
	init_useLandmark();
	init_LayoutProvider();
	fullScreenMapper = ({ api, state }) => {
		return {
			toggle: api.toggleFullscreen,
			isFullscreen: api.getIsFullscreen(),
			shortcut: api.getShortcutKeys().fullScreen,
			hasPanel: Object.keys(api.getElements(Addon_TypesEnum.PANEL)).length > 0,
			singleStory: state.singleStory,
			isNavUnavailable: api.getNavAvailability() === "unavailable"
		};
	};
	fullScreenTool = {
		title: "fullscreen",
		id: "fullscreen",
		type: types.TOOL,
		match: (p) => ["story", "docs"].includes(p.viewMode),
		render: () => {
			const { isMobile } = useLayout();
			if (isMobile) return null;
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: fullScreenMapper }, ({ toggle, isFullscreen, shortcut, hasPanel, singleStory, isNavUnavailable }) => !isNavUnavailable && (!singleStory || singleStory && hasPanel) && /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
				key: "full",
				padding: "small",
				variant: "ghost",
				onClick: () => toggle(),
				ariaLabel: isFullscreen ? "Exit full screen" : "Enter full screen",
				shortcut
			}, isFullscreen ? /* @__PURE__ */ _storybook_global_react_default.createElement(CloseIcon, null) : /* @__PURE__ */ _storybook_global_react_default.createElement(ExpandIcon, null)));
		}
	};
	ToolbarComp = _storybook_global_react_default.memo(function ToolbarComp({ isShown, tools, toolsExtra }) {
		const sectionRef = useRef(null);
		const { landmarkProps } = useLandmark({
			"aria-labelledby": "sb-preview-toolbar-title",
			role: "region"
		}, sectionRef);
		return isShown && (tools.length > 0 || toolsExtra.length > 0) ? /* @__PURE__ */ _storybook_global_react_default.createElement(StyledSection, {
			className: "sb-bar",
			key: "toolbar",
			"data-testid": "sb-preview-toolbar",
			ref: sectionRef,
			...landmarkProps
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("h2", {
			id: "sb-preview-toolbar-title",
			className: "sb-sr-only"
		}, "Toolbar"), /* @__PURE__ */ _storybook_global_react_default.createElement(StyledToolbar, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Tools, {
			key: "left",
			list: tools
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(Tools, {
			key: "right",
			list: toolsExtra
		}))) : null;
	});
	Tools = _storybook_global_react_default.memo(function Tools({ list }) {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(ToolGroup, null, list.filter(Boolean).map(({ render: Render, id, ...t }, index) => /* @__PURE__ */ _storybook_global_react_default.createElement(Render, { key: id || t.key || `f-${index}` })));
	});
	StyledSection = styled.section(({ theme }) => ({
		position: "relative",
		display: "flex",
		alignItems: "center",
		color: theme.barTextColor,
		width: "100%",
		flexShrink: 0,
		overflowX: "auto",
		overflowY: "hidden",
		boxShadow: `${theme.appBorderColor}  0 -1px 0 0 inset`,
		background: theme.barBg,
		scrollbarColor: `${theme.barTextColor} ${theme.barBg}`,
		scrollbarWidth: "thin",
		zIndex: 4
	}));
	StyledToolbar = styled(AbstractToolbar)({
		flex: 1,
		display: "flex",
		justifyContent: "space-between",
		flexWrap: "nowrap",
		flexShrink: 0,
		height: 40,
		marginInline: 10,
		gap: 30
	});
	ToolGroup = styled.div({
		display: "flex",
		whiteSpace: "nowrap",
		flexBasis: "auto",
		gap: 6,
		alignItems: "center"
	});
})), PreviewContainer, FrameWrap, CanvasWrap, IframeWrapper, LoaderWrapper;
var init_components = __esmMin((() => {
	init_router();
	init_emotion();
	PreviewContainer = styled.div({
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%",
		overflow: "hidden"
	});
	FrameWrap = styled.main(({ theme }) => ({
		overflow: "auto",
		width: "100%",
		zIndex: 3,
		background: theme.background.app,
		flex: 1
	}));
	CanvasWrap = styled.div({
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
		justifyItems: "center",
		overflow: "auto",
		display: "grid",
		gridTemplateColumns: "100%",
		gridTemplateRows: "100%",
		position: "relative",
		width: "100%",
		height: "100%"
	});
	styled(Link)({
		color: "inherit",
		textDecoration: "inherit",
		display: "inline-block"
	});
	styled.span({ "@media (max-width: 599px)": { display: "none" } });
	IframeWrapper = styled.div(({ theme }) => ({
		alignContent: "center",
		alignItems: "center",
		justifyContent: "center",
		justifyItems: "center",
		overflow: "auto",
		display: "grid",
		gridTemplateColumns: "100%",
		gridTemplateRows: "100%",
		position: "relative",
		width: "100%",
		height: "100%"
	}));
	LoaderWrapper = styled.div(({ theme }) => ({
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		background: theme.background.preview,
		zIndex: 1
	}));
}));
//#endregion
//#region src/manager/components/preview/Wrappers.tsx
var ApplyWrappers, defaultWrappers;
var init_Wrappers = __esmMin((() => {
	init__storybook_global_react();
	init_types();
	init_components();
	ApplyWrappers = ({ wrappers, id, storyId, children }) => {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Fragment, null, wrappers.reduceRight((acc, wrapper, index) => /* @__PURE__ */ _storybook_global_react_default.createElement(wrapper.render, {
			index,
			children: acc,
			id,
			storyId
		}), children));
	};
	defaultWrappers = [{
		id: "iframe-wrapper",
		type: Addon_TypesEnum.PREVIEW,
		render: (p) => /* @__PURE__ */ _storybook_global_react_default.createElement(IframeWrapper, { id: "storybook-preview-wrapper" }, p.children)
	}];
}));
//#endregion
//#region src/manager/components/Shortcut.tsx
var Wrapper$2, Key, Shortcut;
var init_Shortcut = __esmMin((() => {
	init__storybook_global_react();
	init_manager_api();
	init_emotion();
	Wrapper$2 = styled.span(({ theme }) => ({
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		height: 16,
		fontSize: "11px",
		fontWeight: theme.typography.weight.regular,
		background: theme.base === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
		color: theme.base === "light" ? theme.color.dark : theme.textMutedColor,
		borderRadius: 2,
		userSelect: "none",
		pointerEvents: "none",
		padding: "0 4px"
	}));
	Key = styled.kbd(({ theme }) => ({
		padding: 0,
		fontFamily: theme.typography.fonts.base,
		verticalAlign: "middle",
		"& + &": { marginLeft: 6 }
	}));
	Shortcut = ({ keys }) => /* @__PURE__ */ _storybook_global_react_default.createElement(Wrapper$2, null, (keys ?? []).map((key) => /* @__PURE__ */ _storybook_global_react_default.createElement(Key, { key }, shortcutToHumanString([key]))));
}));
//#endregion
//#region src/manager/components/preview/tools/zoom.tsx
var ZOOM_LEVELS, INITIAL_ZOOM_LEVEL, ZoomButton, ZoomResetButton, Context, ZoomInput, ZoomConsumer, ZoomProvider, Zoom, ZoomWrapper, zoomTool;
var init_zoom = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_icons();
	init_manager_api();
	init_emotion();
	init_Shortcut();
	init_NumericInput();
	ZOOM_LEVELS = [
		.25,
		.5,
		.75,
		.9,
		1,
		1.1,
		1.25,
		1.5,
		2,
		3,
		4,
		8
	];
	INITIAL_ZOOM_LEVEL = 1;
	ZoomButton = styled(ToggleButton)({ minWidth: 48 });
	ZoomResetButton = styled(ActionList.Button)(({ $isInitialValue }) => ({ visibility: $isInitialValue ? "hidden" : void 0 }));
	Context = createContext({
		value: INITIAL_ZOOM_LEVEL,
		set: (v) => {}
	});
	ZoomInput = styled(NumericInput)({ input: { width: 100 } });
	ZoomConsumer = Context.Consumer;
	ZoomProvider = class extends Component {
		constructor(..._args) {
			super(..._args);
			this.state = { value: INITIAL_ZOOM_LEVEL };
			this.set = (value) => this.setState({ value });
		}
		render() {
			const { children, shouldScale } = this.props;
			const { set } = this;
			const { value } = this.state;
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Context.Provider, { value: {
				value: shouldScale ? value : INITIAL_ZOOM_LEVEL,
				set
			} }, children);
		}
	};
	Zoom = memo(function Zoom({ value, zoomIn, zoomOut, zoomTo, zoomBy }) {
		const inputRef = useRef(null);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(PopoverProvider, {
			ariaLabel: "Zoom controls",
			padding: "none",
			onVisibleChange: (isVisible) => {
				if (isVisible) requestAnimationFrame(() => inputRef.current?.select());
			},
			popover: /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ZoomInput, {
				"aria-label": "Zoom percentage",
				ref: inputRef,
				unit: "%",
				before: /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Button, {
					ariaLabel: false,
					size: "small",
					padding: "small",
					readOnly: true,
					"aria-hidden": true
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(ZoomIcon, null)),
				after: /* @__PURE__ */ _storybook_global_react_default.createElement(ZoomResetButton, {
					size: "small",
					padding: "small",
					$isInitialValue: value === INITIAL_ZOOM_LEVEL,
					onClick: () => zoomTo(INITIAL_ZOOM_LEVEL),
					ariaLabel: "Reset zoom",
					"aria-hidden": value === INITIAL_ZOOM_LEVEL
				}, /* @__PURE__ */ _storybook_global_react_default.createElement(UndoIcon, null)),
				value: `${Math.round(value * 100)}%`,
				minValue: 1,
				maxValue: 800,
				setValue: (value) => {
					const zoomLevel = parseInt(value, 10) / 100;
					if (!Number.isNaN(zoomLevel)) zoomTo(zoomLevel);
				}
			}))), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
				onClick: zoomIn,
				ariaLabel: "Zoom in",
				disabled: value >= ZOOM_LEVELS.at(-1)
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, "Zoom in"), /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: ["alt", "+"] }))), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, null, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
				onClick: zoomOut,
				ariaLabel: "Zoom out",
				disabled: value <= ZOOM_LEVELS.at(0)
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, "Zoom out"), /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: ["alt", "-"] }))), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, { active: value === .5 }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
				onClick: () => zoomTo(.5),
				ariaLabel: "Zoom to 50%"
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, "50%"))), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, { active: value === 1 }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
				onClick: () => zoomTo(1),
				ariaLabel: "Zoom to 100%"
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Text, null, "100%"), /* @__PURE__ */ _storybook_global_react_default.createElement(Shortcut, { keys: ["alt", "0"] }))), /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Item, { active: value === 2 }, /* @__PURE__ */ _storybook_global_react_default.createElement(ActionList.Action, {
				onClick: () => zoomTo(2),
				ariaLabel: "Zoom to 200%"
			}, "200%"))))
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(ZoomButton, {
			padding: "small",
			variant: "ghost",
			ariaLabel: "Change zoom level",
			pressed: value !== INITIAL_ZOOM_LEVEL,
			onKeyDown: (e) => {
				if (e.key === "ArrowDown") {
					zoomBy(e.getModifierState("Shift") ? -.1 : -.01);
					e.preventDefault();
				} else if (e.key === "ArrowUp") {
					zoomBy(e.getModifierState("Shift") ? .1 : .01);
					e.preventDefault();
				} else if (e.key === "PageDown") {
					zoomOut();
					e.preventDefault();
				} else if (e.key === "PageUp") {
					zoomIn();
					e.preventDefault();
				} else if (e.key === "Home") {
					zoomTo(ZOOM_LEVELS[ZOOM_LEVELS.length - 1]);
					e.preventDefault();
				} else if (e.key === "End") {
					zoomTo(ZOOM_LEVELS[0]);
					e.preventDefault();
				}
			},
			onWheel: (e) => {
				if (e.deltaY < 0) zoomIn();
				else if (e.deltaY > 0) zoomOut();
				e.preventDefault();
			}
		}, Math.round(value * 100), "%"));
	});
	ZoomWrapper = memo(function ZoomWrapper({ set, value }) {
		const api = useStorybookApi();
		const zoomIn = useCallback(() => {
			const higherZoomLevel = ZOOM_LEVELS.find((level) => level > value);
			if (higherZoomLevel) set(higherZoomLevel);
		}, [set, value]);
		const zoomOut = useCallback(() => {
			const lowerZoomLevel = ZOOM_LEVELS.findLast((level) => level < value);
			if (lowerZoomLevel) set(lowerZoomLevel);
		}, [set, value]);
		const zoomBy = useCallback((delta) => {
			const min = ZOOM_LEVELS[0];
			const max = ZOOM_LEVELS[ZOOM_LEVELS.length - 1];
			set(Math.max(min, Math.min(max, value + delta)));
		}, [set, value]);
		const zoomTo = useCallback((value) => {
			set(value);
		}, [set]);
		useEffect(() => {
			api.setAddonShortcut("zoom", {
				label: "Zoom to 100%",
				defaultShortcut: ["alt", "0"],
				actionName: "zoomReset",
				action: () => zoomTo(1)
			});
			api.setAddonShortcut("zoom", {
				label: "Zoom in",
				defaultShortcut: ["alt", "="],
				actionName: "zoomIn",
				action: zoomIn
			});
			api.setAddonShortcut("zoom", {
				label: "Zoom in",
				defaultShortcut: ["alt", "+"],
				actionName: "zoomPlus",
				action: zoomIn
			});
			api.setAddonShortcut("zoom", {
				label: "Zoom out",
				defaultShortcut: ["alt", "-"],
				actionName: "zoomOut",
				action: zoomOut
			});
		}, [
			api,
			zoomIn,
			zoomOut,
			zoomTo
		]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Zoom, {
			key: "zoom",
			value,
			zoomIn,
			zoomOut,
			zoomTo,
			zoomBy
		});
	});
	zoomTool = {
		title: "zoom",
		id: "zoom",
		type: types.TOOL,
		match: ({ viewMode }) => viewMode === "story",
		render: () => /* @__PURE__ */ _storybook_global_react_default.createElement(ZoomConsumer, null, (zoomContext) => /* @__PURE__ */ _storybook_global_react_default.createElement(ZoomWrapper, zoomContext))
	};
}));
//#endregion
//#region src/manager/components/preview/Preview.tsx
var canvasMapper, Preview, Canvas;
var init_Preview = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_core_events();
	init_dist();
	init_index_module();
	init_manager_api();
	init_layout();
	init_useLandmark();
	init_routes();
	init_ReviewToolbarHeader();
	init_FramesRenderer();
	init_Toolbar();
	init_Wrappers();
	init_zoom();
	init_components();
	canvasMapper = ({ state, api }) => ({
		api,
		storyId: state.storyId,
		refId: state.refId,
		viewMode: state.viewMode,
		customCanvas: api.renderPreview,
		queryParams: state.customQueryParams,
		getElements: api.getElements,
		entry: api.getData(state.storyId, state.refId),
		previewInitialized: state.previewInitialized,
		refs: state.refs
	});
	Preview = _storybook_global_react_default.memo(function Preview(props) {
		const { api, id: previewId, options, viewMode, storyId, entry = void 0, description, baseUrl, withLoader = true, tools, toolsExtra, wrappers, path, queryParams } = props;
		const shouldScale = viewMode === "story";
		const { showToolbar } = options;
		const customisedShowToolbar = api.getShowToolbarWithCustomisations(showToolbar);
		const isReviewCollectionStory = isReviewCollectionStoryRoute(path, queryParams);
		const previousStoryId = useRef(storyId);
		useEffect(() => {
			if (entry && viewMode) {
				if (storyId === previousStoryId.current) return;
				previousStoryId.current = storyId;
				if (viewMode.match(/docs|story/)) {
					const { refId, id } = entry;
					api.emit(SET_CURRENT_STORY, {
						storyId: id,
						viewMode,
						options: { target: refId }
					});
				}
			}
		}, [
			entry,
			viewMode,
			storyId,
			api
		]);
		const mainRef = useRef(null);
		const { landmarkProps } = useLandmark({
			"aria-labelledby": "main-preview-heading",
			role: "main"
		}, mainRef);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Fragment, null, previewId === "main" && /* @__PURE__ */ _storybook_global_react_default.createElement(W, { key: "description" }, /* @__PURE__ */ _storybook_global_react_default.createElement("title", null, description)), /* @__PURE__ */ _storybook_global_react_default.createElement(ZoomProvider, { shouldScale }, /* @__PURE__ */ _storybook_global_react_default.createElement(PreviewContainer, null, customisedShowToolbar && isReviewCollectionStory ? /* @__PURE__ */ _storybook_global_react_default.createElement(ReviewToolbarHeader, null) : null, /* @__PURE__ */ _storybook_global_react_default.createElement(ToolbarComp, {
			key: "tools",
			isShown: customisedShowToolbar,
			tools,
			toolsExtra
		}), /* @__PURE__ */ _storybook_global_react_default.createElement(FrameWrap, {
			ref: mainRef,
			id: focusableUIElements.previewRegion,
			...landmarkProps
		}, /* @__PURE__ */ _storybook_global_react_default.createElement("h2", {
			id: "main-preview-heading",
			className: "sb-sr-only"
		}, "Main preview area"), /* @__PURE__ */ _storybook_global_react_default.createElement(CanvasWrap, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Canvas, {
			withLoader,
			baseUrl,
			wrappers
		}))))));
	});
	Canvas = ({ baseUrl, withLoader, wrappers }) => {
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: canvasMapper }, ({ api, entry, refs, customCanvas, storyId, refId, viewMode, queryParams, previewInitialized }) => {
			const id = "canvas";
			const [progress, setProgress] = useState(void 0);
			useEffect(() => {
				if (scope.CONFIG_TYPE === "DEVELOPMENT") try {
					addons.getChannel().on(PREVIEW_BUILDER_PROGRESS, (options) => {
						setProgress(options);
					});
				} catch {}
			}, []);
			const refLoading = !!refs[refId] && !refs[refId].previewInitialized;
			const isBuilding = !(progress?.value === 1 || progress === void 0);
			const rootLoading = !refId && (!previewInitialized || isBuilding);
			const isLoading = entry ? refLoading || rootLoading : rootLoading;
			return /* @__PURE__ */ _storybook_global_react_default.createElement(ZoomConsumer, null, ({ value: scale }) => {
				return /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, withLoader && isLoading && /* @__PURE__ */ _storybook_global_react_default.createElement(LoaderWrapper, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Loader, {
					id: "preview-loader",
					role: "progressbar",
					progress
				})), /* @__PURE__ */ _storybook_global_react_default.createElement(ApplyWrappers, {
					id,
					storyId,
					viewMode,
					wrappers
				}, customCanvas ? customCanvas(storyId, viewMode, id, baseUrl, scale, queryParams) : /* @__PURE__ */ _storybook_global_react_default.createElement(FramesRenderer, {
					api,
					refs,
					scale,
					entry,
					viewMode,
					refId,
					queryParams,
					storyId
				})));
			});
		});
	};
}));
//#endregion
//#region src/manager/components/preview/tools/addons.tsx
var SHOW_ADDON_PANEL_BUTTON_ID, menuMapper$2, addonsTool;
var init_addons = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_icons();
	init_manager_api();
	init_layout();
	SHOW_ADDON_PANEL_BUTTON_ID = "storybook-show-addon-panel";
	menuMapper$2 = ({ api, state }) => ({
		isVisible: api.getIsPanelShown(),
		singleStory: state.singleStory,
		panelPosition: state.layout.panelPosition,
		showPanel: async (forceFocus) => {
			api.togglePanel(true);
			api.focusOnUIElement(focusableUIElements.addonPanel, {
				forceFocus,
				poll: true
			});
		}
	});
	addonsTool = {
		title: "addons",
		id: "addons",
		type: types.TOOL,
		match: ({ viewMode }) => viewMode === "story",
		render: () => {
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: menuMapper$2 }, ({ isVisible, showPanel, singleStory, panelPosition }) => !singleStory && !isVisible && /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
				padding: "small",
				variant: "ghost",
				ariaLabel: "Show addon panel",
				id: SHOW_ADDON_PANEL_BUTTON_ID,
				key: "addons",
				onClick: () => showPanel(false),
				onKeyDown: (e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						showPanel(true);
					}
				}
			}, panelPosition === "bottom" ? /* @__PURE__ */ _storybook_global_react_default.createElement(BottomBarIcon, null) : /* @__PURE__ */ _storybook_global_react_default.createElement(SidebarAltIcon, null))));
		}
	};
}));
//#endregion
//#region src/manager/components/preview/tools/menu.tsx
var menuMapper$1, menuTool;
var init_menu = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_icons();
	init_manager_api();
	init_layout();
	menuMapper$1 = ({ api, state }) => ({
		navAvailability: api.getNavAvailability(),
		singleStory: state.singleStory,
		showSidebar: async (forceFocus) => {
			api.toggleNav(true);
			api.focusOnUIElement(focusableUIElements.sidebarRegion, {
				forceFocus,
				poll: true
			});
		}
	});
	menuTool = {
		title: "menu",
		id: "menu",
		type: types.TOOL,
		match: ({ viewMode }) => ["story", "docs"].includes(viewMode),
		render: () => {
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: menuMapper$1 }, ({ navAvailability, showSidebar, singleStory }) => !singleStory && navAvailability === "hidden" && /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
				padding: "small",
				variant: "ghost",
				ariaLabel: "Show sidebar",
				id: focusableUIElements.showSidebar,
				key: "menu",
				onClick: () => showSidebar(false),
				onKeyDown: (e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						showSidebar(true);
					}
				}
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(MenuIcon, null)), /* @__PURE__ */ _storybook_global_react_default.createElement(Separator, null)));
		}
	};
}));
//#endregion
//#region src/manager/components/preview/tools/open-in-editor.tsx
var mapper$1, openInEditorTool;
var init_open_in_editor = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_dist();
	init_icons();
	init_manager_api();
	mapper$1 = ({ state, api }) => {
		const { storyId, refId } = state;
		const entry = api.getData(storyId, refId);
		return {
			storyId,
			isCompositionStory: !!refId,
			importPath: entry?.importPath
		};
	};
	openInEditorTool = {
		title: "open-in-editor",
		id: "open-in-editor",
		type: types.TOOL,
		match: ({ viewMode }) => scope.CONFIG_TYPE === "DEVELOPMENT" && (viewMode === "story" || viewMode === "docs"),
		render: () => /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: mapper$1 }, ({ importPath, isCompositionStory }) => {
			const api = useStorybookApi();
			if (isCompositionStory || !importPath) return null;
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
				key: "open-in-editor",
				onClick: () => api.openInEditor({ file: importPath }),
				ariaLabel: "Open in editor",
				padding: "small",
				variant: "ghost"
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(EditorIcon, null));
		})
	};
}));
//#endregion
//#region src/manager/components/preview/tools/remount.tsx
var StyledAnimatedButton, menuMapper, remountTool;
var init_remount = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_core_events();
	init_icons();
	init_manager_api();
	init_emotion();
	StyledAnimatedButton = styled(Button)(({ theme, animating, disabled }) => ({
		opacity: disabled ? .5 : 1,
		svg: { animation: animating ? `${theme.animation.rotate360} 1000ms ease-out` : void 0 }
	}));
	menuMapper = ({ api, state }) => {
		const { storyId } = state;
		return {
			storyId,
			remount: () => api.emit(FORCE_REMOUNT, { storyId: state.storyId }),
			api
		};
	};
	remountTool = {
		title: "remount",
		id: "remount",
		type: types.TOOL,
		match: ({ viewMode }) => viewMode === "story",
		render: () => /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: menuMapper }, ({ remount, storyId, api }) => {
			const [isAnimating, setIsAnimating] = useState(false);
			const remountComponent = () => {
				if (!storyId) return;
				remount();
			};
			useEffect(() => {
				const handler = () => setIsAnimating(true);
				api.on(FORCE_REMOUNT, handler);
				return () => api.off?.(FORCE_REMOUNT, handler);
			}, [api]);
			return /* @__PURE__ */ _storybook_global_react_default.createElement(StyledAnimatedButton, {
				key: "remount",
				padding: "small",
				variant: "ghost",
				ariaLabel: "Reload story",
				onClick: remountComponent,
				onAnimationEnd: () => setIsAnimating(false),
				animating: isAnimating,
				disabled: !storyId
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(SyncIcon, null));
		})
	};
}));
//#endregion
//#region src/manager/components/preview/tools/share.tsx
var mapper, isolationModeTool;
var init_share = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_esm$1();
	init_core_events();
	init_icons();
	init_manager_api();
	init_emotion();
	mapper = ({ api, state }) => {
		const { storyId, refId } = state;
		return {
			api,
			refId,
			storyId
		};
	};
	styled.div(() => ({
		display: "flex",
		flexDirection: "column",
		padding: 8,
		width: 300,
		maxWidth: 300,
		gap: 8
	}));
	styled.div(() => ({
		display: "flex",
		alignItems: "center"
	}));
	styled.input(({ theme }) => ({
		width: "100%",
		border: `1px solid ${theme.appBorderColor}`,
		borderRadius: 4,
		padding: "6px 8px",
		fontSize: theme.typography.size.s1,
		color: theme.color.defaultText,
		backgroundColor: theme.background.app,
		outline: "none",
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
		"&:focus": { borderColor: theme.color.secondary }
	}));
	styled.div(() => ({
		width: 64,
		height: 64,
		marginRight: 12,
		backgroundColor: "white",
		padding: 2
	}));
	styled.div(() => ({}));
	styled.div(({ theme }) => ({
		fontWeight: theme.typography.weight.bold,
		fontSize: theme.typography.size.s1,
		marginBottom: 4
	}));
	styled.div(({ theme }) => ({
		fontSize: theme.typography.size.s1,
		color: theme.textMutedColor
	}));
	isolationModeTool = {
		title: "isolation mode",
		id: "isolationMode",
		type: types.TOOLEXTRA,
		match: ({ viewMode }) => viewMode === "story",
		render: () => /* @__PURE__ */ _storybook_global_react_default.createElement(Consumer, { filter: mapper }, ({ api, storyId, refId }) => {
			if (!storyId) return null;
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
				padding: "small",
				variant: "ghost",
				ariaLabel: "Open in isolation mode",
				tooltip: "Open in isolation mode",
				onClick: () => {
					const originHrefs = api.getStoryHrefs(storyId, {
						base: "origin",
						refId,
						inheritArgs: true
					});
					window.open(originHrefs.previewHref, "_blank", "noopener,noreferrer");
					api.emit(SHARE_ISOLATE_MODE, originHrefs.previewHref);
				}
			}, /* @__PURE__ */ _storybook_global_react_default.createElement(PopOutIcon, null));
		})
	};
}));
//#endregion
//#region src/manager/components/Optional/Optional.tsx
var Wrapper$1, Content, Optional;
var init_Optional = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	Wrapper$1 = styled.div({
		display: "inline-grid",
		gridTemplateColumns: "max-content",
		overflow: "hidden"
	});
	Content = styled.div(({ isHidden }) => ({
		display: "inline-block",
		gridArea: "1/1",
		opacity: isHidden === null ? 0 : 1,
		visibility: isHidden ? "hidden" : "visible"
	}));
	Optional = ({ content, fallback }) => {
		const contentRef = useRef(null);
		const wrapperRef = useRef(null);
		const [hidden, setHidden] = useState(null);
		const contentWidth = useRef(contentRef.current?.offsetWidth ?? 0);
		const wrapperWidth = useRef(wrapperRef.current?.offsetWidth ?? 0);
		useEffect(() => {
			if (contentRef.current && wrapperRef.current) {
				const resizeObserver = new ResizeObserver(() => {
					wrapperWidth.current = wrapperRef.current?.offsetWidth || wrapperWidth.current;
					contentWidth.current = contentRef.current?.offsetWidth || contentWidth.current;
					setHidden(contentWidth.current > wrapperWidth.current);
				});
				resizeObserver.observe(wrapperRef.current);
				return () => resizeObserver.disconnect();
			}
		}, []);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Wrapper$1, { ref: wrapperRef }, /* @__PURE__ */ _storybook_global_react_default.createElement(Content, {
			isHidden: hidden,
			ref: contentRef
		}, content), fallback && /* @__PURE__ */ _storybook_global_react_default.createElement(Content, { isHidden: !hidden }, fallback));
	};
}));
//#endregion
//#region src/manager/components/Particles/Particles.tsx
var Shape, Donut, L, Slice, Square, Triangle, T, Z, fadeToTransparent, disperse, slideDown, Container$1, NUM_OF_PARTICLES, JITTER, random, sortRandomly, Particles;
var init_Particles = __esmMin((() => {
	init__storybook_global_react();
	init__storybook_global_react_dom();
	init_emotion();
	Shape = styled.svg(({ color }) => ({
		fill: color,
		position: "absolute",
		inset: "0",
		margin: "auto",
		width: "12px",
		height: "12px",
		pointerEvents: "none"
	}));
	Donut = (props) => /* @__PURE__ */ _storybook_global_react_default.createElement(Shape, {
		viewBox: "0 0 90 90",
		xmlns: "http://www.w3.org/2000/svg",
		color: "red",
		...props
	}, /* @__PURE__ */ _storybook_global_react_default.createElement("path", { d: "M45 0c24.853 0 45 20.147 45 45S69.853 90 45 90 0 69.853 0 45 20.147 0 45 0zm.5 27C35.283 27 27 35.283 27 45.5S35.283 64 45.5 64 64 55.717 64 45.5 55.717 27 45.5 27z" }));
	L = (props) => /* @__PURE__ */ _storybook_global_react_default.createElement(Shape, {
		viewBox: "0 0 55 89",
		xmlns: "http://www.w3.org/2000/svg",
		color: "#66BF3C",
		...props
	}, /* @__PURE__ */ _storybook_global_react_default.createElement("path", { d: "M55 3v83a3 3 0 01-3 3H3a3 3 0 01-3-3V64a3 3 0 013-3h21a3 3 0 003-3V3a3 3 0 013-3h22a3 3 0 013 3z" }));
	Slice = (props) => /* @__PURE__ */ _storybook_global_react_default.createElement(Shape, {
		viewBox: "0 0 92 92",
		xmlns: "http://www.w3.org/2000/svg",
		color: "#FF4785",
		...props
	}, /* @__PURE__ */ _storybook_global_react_default.createElement("path", { d: "M92 89V3c0-3-2.056-3-3-3C39.294 0 0 39.294 0 89c0 0 0 3 3 3h86a3 3 0 003-3z" }));
	Square = ({ style, ...props }) => /* @__PURE__ */ _storybook_global_react_default.createElement(Shape, {
		viewBox: "0 0 90 90",
		xmlns: "http://www.w3.org/2000/svg",
		color: "#1EA7FD",
		...props,
		style: {
			borderRadius: 5,
			...style
		}
	}, /* @__PURE__ */ _storybook_global_react_default.createElement("path", { d: "M0 0h90v90H0z" }));
	Triangle = (props) => /* @__PURE__ */ _storybook_global_react_default.createElement(Shape, {
		viewBox: "0 0 96 88",
		xmlns: "http://www.w3.org/2000/svg",
		color: "#FFAE00",
		...props
	}, /* @__PURE__ */ _storybook_global_react_default.createElement("path", { d: "M50.63 1.785l44.928 81.77A3 3 0 0192.928 88H3.072a3 3 0 01-2.629-4.445l44.929-81.77a3 3 0 015.258 0z" }));
	T = (props) => /* @__PURE__ */ _storybook_global_react_default.createElement(Shape, {
		viewBox: "0 0 92 62",
		xmlns: "http://www.w3.org/2000/svg",
		color: "#FC521F",
		...props
	}, /* @__PURE__ */ _storybook_global_react_default.createElement("path", { d: "M63 3v25a3 3 0 003 3h23a3 3 0 013 3v25a3 3 0 01-3 3H3a3 3 0 01-3-3V34a3 3 0 013-3h24a3 3 0 003-3V3a3 3 0 013-3h27a3 3 0 013 3z" }));
	Z = (props) => /* @__PURE__ */ _storybook_global_react_default.createElement(Shape, {
		viewBox: "0 0 56 90",
		xmlns: "http://www.w3.org/2000/svg",
		color: "#6F2CAC",
		...props
	}, /* @__PURE__ */ _storybook_global_react_default.createElement("path", { d: "M28 3v25a3 3 0 003 3h22a3 3 0 013 3v53a3 3 0 01-3 3H31a3 3 0 01-3-3V62a3 3 0 00-3-3H3a3 3 0 01-3-3V3a3 3 0 013-3h22a3 3 0 013 3z" }));
	fadeToTransparent = keyframes$1`
  to {
    opacity: 0;
  }
`;
	disperse = keyframes$1`
  to {
    transform: translate(
      calc(cos(var(--angle)) * var(--distance)),
      calc(sin(var(--angle)) * var(--distance))
    ) rotate(var(--rotation));
  }
`;
	slideDown = keyframes$1`
  to {
    transform: translateY(50px);
  }
`;
	Container$1 = styled.div({
		position: "absolute",
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 10,
		"--particle-curve": "cubic-bezier(0.2, 0.56, 0, 1)",
		animation: `${slideDown} 1000ms forwards cubic-bezier(0.587, -0.381, 0.583, 0.599)`,
		animationDelay: "150ms",
		zIndex: 999,
		svg: {
			width: 15,
			height: 15,
			animation: `${fadeToTransparent} var(--fade-duration) forwards, ${disperse} 1000ms forwards var(--particle-curve)`
		}
	});
	NUM_OF_PARTICLES = 8;
	JITTER = 15;
	random = (min, max) => Math.random() * (max - min) + min;
	sortRandomly = (array) => array.sort(() => Math.random() - .5);
	Particles = memo(function Particles({ anchor: Anchor }) {
		const anchorRef = useRef(null);
		const [left, setLeft] = useState(0);
		const [top, setTop] = useState(0);
		const shapes = sortRandomly([
			Donut,
			L,
			Slice,
			Square,
			Triangle,
			T,
			Z
		]);
		const colors = sortRandomly([
			"#FF0000",
			"#FF4787",
			"#66BF3C",
			"#1EA7FD",
			"#FC521F",
			"#6F2CAC",
			"#FFAE00"
		]);
		useLayoutEffect(() => {
			const rect = anchorRef.current?.getBoundingClientRect();
			if (rect) {
				setLeft(rect.left + rect.width / 2);
				setTop(rect.top + rect.height / 2);
			}
		}, []);
		return /* @__PURE__ */ _storybook_global_react_default.createElement("div", { ref: anchorRef }, /* @__PURE__ */ _storybook_global_react_default.createElement(Anchor, null), createPortal(/* @__PURE__ */ _storybook_global_react_default.createElement(Container$1, { style: {
			top: top + "px",
			left: left + "px"
		} }, shapes.map((Particle, index) => {
			const angle = 360 / NUM_OF_PARTICLES * index + random(-15, JITTER);
			const distance = random(50, 80);
			const rotation = random(-360, 360);
			const style = {
				"--angle": angle + "deg",
				"--distance": distance + "px",
				"--rotation": rotation + "deg",
				"--fade-duration": "1200ms"
			};
			return /* @__PURE__ */ _storybook_global_react_default.createElement(Particle, {
				key: Particle.name,
				style,
				color: colors[index]
			});
		})), document.getElementById("root") ?? document.body));
	});
}));
//#endregion
//#region src/manager/components/TextFlip.tsx
function numericCompare(a, b) {
	const na = Number(a);
	const nb = Number(b);
	return Number.isNaN(na) || Number.isNaN(nb) ? a.localeCompare(b, void 0, { numeric: true }) > 0 : na > nb;
}
var slideIn, slideOut, Container, Placeholder, Text, TextFlip;
var init_TextFlip = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	slideIn = keyframes$1({ from: {
		transform: "translateY(var(--slide-in-from))",
		opacity: 0
	} });
	slideOut = keyframes$1({ to: {
		transform: "translateY(var(--slide-out-to))",
		opacity: 0
	} });
	Container = styled.div({
		display: "inline-grid",
		gridTemplateColumns: "1fr",
		justifyContent: "center",
		alignItems: "center"
	});
	Placeholder = styled.div({
		gridArea: "1 / 1",
		userSelect: "none",
		visibility: "hidden"
	});
	Text = styled.span(({ duration, isExiting, isEntering, reverse }) => {
		let animation;
		if (isExiting) animation = `${slideOut} ${duration}ms forwards`;
		else if (isEntering) animation = `${slideIn} ${duration}ms forwards`;
		return {
			gridArea: "1 / 1",
			animation,
			pointerEvents: isExiting ? "none" : "auto",
			userSelect: isExiting ? "none" : "text",
			"--slide-in-from": reverse ? "-100%" : "100%",
			"--slide-out-to": reverse ? "100%" : "-100%",
			"@media (prefers-reduced-motion: reduce)": {
				animation: "none",
				opacity: isExiting ? 0 : 1,
				transform: "translateY(0)"
			}
		};
	});
	TextFlip = ({ text, duration = 250, placeholder, ...props }) => {
		const textRef = useRef(text);
		const [staleValue, setStaleValue] = useState(text);
		const isAnimating = text !== staleValue;
		const reverse = isAnimating && numericCompare(staleValue, text);
		textRef.current = text;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(Container, props, isAnimating && /* @__PURE__ */ _storybook_global_react_default.createElement(Text, {
			"aria-hidden": true,
			duration,
			reverse,
			isExiting: true,
			onAnimationEnd: () => setStaleValue(textRef.current)
		}, staleValue), /* @__PURE__ */ _storybook_global_react_default.createElement(Text, {
			duration,
			reverse,
			isEntering: isAnimating
		}, text), placeholder && /* @__PURE__ */ _storybook_global_react_default.createElement(Placeholder, { "aria-hidden": true }, placeholder));
	};
}));
//#endregion
//#region src/manager/components/TourGuide/HighlightElement.tsx
/**
* Highlights a DOM element on the page by creating a visual overlay. The overlay automatically
* updates its position when the element moves or scrolls, and can optionally display a pulsating
* animation effect.
*
* @param props - Component props
* @param props.targetSelector - CSS selector string to identify the element to highlight
* @param props.pulsating - Optional flag to enable a pulsating animation effect
* @returns Returns null (it doesn't render in place, it appends to the body)
* @todo Use createPortal to render the overlay in the body and avoid manually setting styles
*/
function HighlightElement({ targetSelector, pulsating = false }) {
	useEffect(() => {
		const element = document.querySelector(targetSelector);
		if (!element || !element.parentElement) return;
		const overlay = document.body.appendChild(createOverlay(element));
		if (pulsating) {
			if (!document.getElementById(HIGHLIGHT_KEYFRAMES_ID)) {
				const style = document.createElement("style");
				style.id = HIGHLIGHT_KEYFRAMES_ID;
				style.innerHTML = keyframes;
				document.head.appendChild(style);
			}
			overlay.style.animation = "sb-highlight-pulsate 3s infinite";
			overlay.style.transformOrigin = "center";
			overlay.style.animationTimingFunction = "ease-in-out";
		} else overlay.style.boxShadow = "rgba(2,156,253,1) 0 0 2px 1px";
		let scrollTimeout = null;
		const handleScroll = () => {
			if (overlay.parentElement) overlay.remove();
			if (scrollTimeout !== null) clearTimeout(scrollTimeout);
			scrollTimeout = window.setTimeout(() => {
				if (!element) return;
				updateOverlayStyles(element, overlay);
				overlay.style.opacity = "0";
				document.body.appendChild(overlay);
				requestAnimationFrame(() => overlay.style.opacity = "1");
			}, 150);
		};
		const resizeObserver = new ResizeObserver(() => overlay.parentElement && updateOverlayStyles(element, overlay));
		resizeObserver.observe(window.document.body);
		resizeObserver.observe(element);
		const scrollContainers = findScrollableAncestors(element);
		scrollContainers.forEach((el) => el.addEventListener("scroll", handleScroll, { passive: true }));
		scrollContainers.filter((el) => el !== window).forEach((el) => resizeObserver.observe(el));
		return () => {
			if (scrollTimeout !== null) clearTimeout(scrollTimeout);
			if (overlay.parentElement) overlay.remove();
			scrollContainers.forEach((el) => el.removeEventListener("scroll", handleScroll));
			resizeObserver.disconnect();
		};
	}, [targetSelector, pulsating]);
	return null;
}
var HIGHLIGHT_KEYFRAMES_ID, keyframes, createOverlay, updateOverlayStyles, findScrollableAncestors;
var init_HighlightElement = __esmMin((() => {
	init__storybook_global_react();
	HIGHLIGHT_KEYFRAMES_ID = "storybook-highlight-element-keyframes";
	keyframes = `
  @keyframes sb-highlight-pulsate {
    0% {
      box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0.7), 0 0 0 0 rgba(2, 156, 253, 0.4);
    }
    50% {
      box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 20px rgba(2, 156, 253, 0), 0 0 0 40px rgba(2, 156, 253, 0);
    }
    100% {
      box-shadow: rgba(2,156,253,1) 0 0 2px 1px, 0 0 0 0 rgba(2, 156, 253, 0), 0 0 0 0 rgba(2, 156, 253, 0);
    }
  }
`;
	createOverlay = (element) => {
		const overlay = document.createElement("div");
		overlay.id = "storybook-highlight-element";
		overlay.style.position = "fixed";
		overlay.style.pointerEvents = "none";
		overlay.style.zIndex = "2147483647";
		overlay.style.transition = "opacity 0.2s ease-in-out";
		requestAnimationFrame(() => {
			updateOverlayStyles(element, overlay);
			element.scrollIntoView({
				behavior: "smooth",
				block: "center"
			});
		});
		return overlay;
	};
	updateOverlayStyles = (element, overlay) => {
		const rect = element.getBoundingClientRect();
		const computedStyle = window.getComputedStyle(element);
		overlay.style.top = `${rect.top}px`;
		overlay.style.left = `${rect.left}px`;
		overlay.style.width = `${rect.width}px`;
		overlay.style.height = `${rect.height}px`;
		overlay.style.borderRadius = computedStyle.borderRadius;
	};
	findScrollableAncestors = (element) => {
		const scrollableAncestors = [window];
		let parent = element.parentElement;
		while (parent) {
			const style = window.getComputedStyle(parent);
			if (style.overflow === "auto" || style.overflow === "scroll" || style.overflowX === "auto" || style.overflowX === "scroll" || style.overflowY === "auto" || style.overflowY === "scroll") scrollableAncestors.push(parent);
			parent = parent.parentElement;
		}
		return scrollableAncestors;
	};
}));
//#endregion
//#region src/manager/components/TourGuide/TourTooltip.tsx
var ONBOARDING_ARROW_STYLE_ID, TooltipBody, Wrapper, TooltipHeader, TooltipTitle, TooltipContent, TooltipFooter, Count, NextButton, TourTooltip;
var init_TourTooltip = __esmMin((() => {
	init__storybook_global_react();
	init_components$1();
	init_icons();
	init_polished_esm();
	init_emotion();
	ONBOARDING_ARROW_STYLE_ID = "storybook-onboarding-arrow-style";
	TooltipBody = styled.div`
  padding: 15px;
  border-radius: 5px;
`;
	Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
	TooltipHeader = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  margin: -5px -5px 5px 0;
`;
	TooltipTitle = styled.div`
  line-height: 18px;
  font-weight: 700;
  font-size: 14px;
  margin: 5px 5px 5px 0;
`;
	TooltipContent = styled.p`
  font-size: 14px;
  line-height: 18px;
  text-align: start;
  text-wrap: balance;
  margin: 0;
  margin-top: 5px;
`;
	TooltipFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;
	Count = styled.span`
  font-size: 13px;
`;
	NextButton = styled(Button)(({ theme }) => ({
		background: theme.color.lightest,
		border: "none",
		boxShadow: "none",
		color: theme.base === "light" ? theme.color.secondary : curriedDarken$1(.18, theme.color.secondary),
		"&:hover, &:focus": {
			background: curriedTransparentize$1(.1, theme.color.lightest),
			color: theme.base === "light" ? curriedLighten$1(.1, theme.color.secondary) : curriedDarken$1(.3, theme.color.secondary)
		}
	}));
	TourTooltip = ({ index, size, step, closeProps, primaryProps, tooltipProps }) => {
		useEffect(() => {
			const style = document.createElement("style");
			style.id = ONBOARDING_ARROW_STYLE_ID;
			style.innerHTML = `
      .__floater__arrow { container-type: size; }
      .__floater__arrow span { background: ${color.secondary}; }
      .__floater__arrow span::before, .__floater__arrow span::after {
        content: '';
        display: block;
        width: 2px;
        height: 2px;
        background: ${color.secondary};
        box-shadow: 0 0 0 2px ${color.secondary};
        border-radius: 3px;
        flex: 0 0 2px;
      }
      @container (min-height: 1px) {
        .__floater__arrow span { flex-direction: column; }
      }
    `;
			document.head.appendChild(style);
			return () => document.getElementById(ONBOARDING_ARROW_STYLE_ID)?.remove();
		}, []);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(TooltipBody, {
			...tooltipProps,
			style: step.styles?.tooltip
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(Wrapper, null, /* @__PURE__ */ _storybook_global_react_default.createElement(TooltipHeader, null, step.title && /* @__PURE__ */ _storybook_global_react_default.createElement(TooltipTitle, null, step.title), /* @__PURE__ */ _storybook_global_react_default.createElement(Button, {
			...closeProps,
			onClick: closeProps.onClick,
			variant: "solid",
			padding: "small",
			ariaLabel: "Close"
		}, /* @__PURE__ */ _storybook_global_react_default.createElement(CloseAltIcon, null))), /* @__PURE__ */ _storybook_global_react_default.createElement(TooltipContent, null, step.content)), /* @__PURE__ */ _storybook_global_react_default.createElement(TooltipFooter, { id: "buttonNext" }, /* @__PURE__ */ _storybook_global_react_default.createElement(Count, null, index + 1, " of ", size), !step.hideNextButton && /* @__PURE__ */ _storybook_global_react_default.createElement(NextButton, {
			ariaLabel: false,
			...primaryProps
		}, index + 1 === size ? "Done" : "Next")));
	};
}));
//#endregion
//#region src/manager/components/TourGuide/TourGuide.tsx
var keepTooltipInViewport, TourGuide, root;
var init_TourGuide = __esmMin((() => {
	init__storybook_global_react();
	init_client();
	init_polished_esm();
	init_dist$1();
	init_emotion();
	init_HighlightElement();
	init_TourTooltip();
	keepTooltipInViewport = {
		enabled: true,
		order: 350,
		fn: (data) => {
			const padding = 8;
			const { popper } = data.offsets;
			const parent = data.instance.popper.offsetParent;
			const parentTop = parent ? parent.getBoundingClientRect().top : 0;
			const bottomOverflow = parentTop + popper.top + popper.height - (window.innerHeight - padding);
			if (bottomOverflow > 0) popper.top -= bottomOverflow;
			const topOverflow = padding - (parentTop + popper.top);
			if (topOverflow > 0) popper.top += topOverflow;
			return data;
		}
	};
	TourGuide = ({ step, steps, onNext, onComplete, onDismiss }) => {
		const [stepIndex, setStepIndex] = useState(step ? null : 0);
		const theme = useTheme();
		const resizeObserverRef = useRef(void 0);
		useEffect(() => () => resizeObserverRef.current?.disconnect(), []);
		const followTooltipSize = useCallback((popper, origin) => {
			if (origin !== "floater") return;
			resizeObserverRef.current?.disconnect();
			resizeObserverRef.current = new ResizeObserver(() => popper.instance.update());
			resizeObserverRef.current.observe(popper.instance.popper);
		}, []);
		const timeoutRef = useRef(void 0);
		const updateStepIndex = useCallback((index) => {
			clearTimeout(timeoutRef.current);
			setStepIndex((current) => {
				if (index === -1) return null;
				if (current === null || current === index) return index;
				timeoutRef.current = setTimeout(setStepIndex, 300, index);
				return null;
			});
		}, []);
		useEffect(() => step ? updateStepIndex(steps.findIndex(({ key }) => key === step)) : void 0, [
			step,
			steps,
			updateStepIndex
		]);
		const mappedSteps = useMemo(() => {
			return steps.map((step, index) => {
				const next = () => updateStepIndex(index + 1);
				return {
					disableBeacon: true,
					disableOverlay: true,
					spotlightClicks: true,
					offset: 0,
					disableScrollParentFix: true,
					...step,
					content: /* @__PURE__ */ _storybook_global_react_default.createElement(_storybook_global_react_default.Fragment, null, step.content, step.highlight && /* @__PURE__ */ _storybook_global_react_default.createElement(HighlightElement, {
						targetSelector: step.highlight,
						pulsating: true
					})),
					onNext: step.onNext ? () => step.onNext?.({ next }) : onNext && (() => onNext?.({ next }))
				};
			});
		}, [
			steps,
			onNext,
			updateStepIndex
		]);
		const callback = useCallback((data) => {
			if (data.action === ACTIONS.NEXT && data.lifecycle === "complete") if (data.index === data.size - 1) onComplete?.();
			else if (data.step?.onNext) data.step.onNext();
			else updateStepIndex(data.index + 1);
			if (data.action === ACTIONS.CLOSE) onDismiss?.();
		}, [
			onComplete,
			onDismiss,
			updateStepIndex
		]);
		if (stepIndex === null) return null;
		return /* @__PURE__ */ _storybook_global_react_default.createElement(components_default, {
			continuous: true,
			steps: mappedSteps,
			stepIndex,
			spotlightPadding: 0,
			disableCloseOnEsc: true,
			disableOverlayClose: true,
			disableScrolling: true,
			callback,
			tooltipComponent: TourTooltip,
			floaterProps: {
				getPopper: followTooltipSize,
				disableAnimation: true,
				options: { keepInViewport: keepTooltipInViewport },
				styles: {
					arrow: {
						length: 20,
						spread: 2
					},
					floater: { filter: theme.base === "light" ? "drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))" : "drop-shadow(#fff5 0px 0px 0.5px) drop-shadow(#fff5 0px 0px 0.5px)" }
				}
			},
			styles: {
				overlay: {
					mixBlendMode: "unset",
					backgroundColor: steps[stepIndex]?.target === "body" ? "rgba(27, 28, 29, 0.2)" : "none"
				},
				spotlight: {
					backgroundColor: "none",
					border: `solid 2px ${theme.base === "light" ? theme.color.secondary : curriedDarken$1(.18, theme.color.secondary)}`,
					boxShadow: "0px 0px 0px 9999px rgba(27, 28, 29, 0.2)"
				},
				tooltip: {
					width: 280,
					color: theme.color.lightest,
					background: theme.base === "light" ? theme.color.secondary : curriedDarken$1(.18, theme.color.secondary)
				},
				options: {
					zIndex: 9998,
					primaryColor: theme.base === "light" ? theme.color.secondary : curriedDarken$1(.18, theme.color.secondary),
					arrowColor: theme.base === "light" ? theme.color.secondary : curriedDarken$1(.18, theme.color.secondary)
				}
			}
		});
	};
	root = null;
	TourGuide.render = (props) => {
		let container = document.getElementById("storybook-tour");
		if (!container) {
			container = document.createElement("div");
			container.id = "storybook-tour";
			document.body.appendChild(container);
		}
		root = root ?? createRoot(container);
		root.render(props ? /* @__PURE__ */ _storybook_global_react_default.createElement(ThemeProvider, { theme: convert(themes.light) }, /* @__PURE__ */ _storybook_global_react_default.createElement(TourGuide, {
			...props,
			onComplete: () => {
				props.onComplete?.();
				root?.render(null);
				root = null;
			},
			onDismiss: () => {
				props.onDismiss?.();
				root?.render(null);
				root = null;
			}
		})) : null);
	};
}));
//#endregion
//#region src/manager/components/Focus/Focus.tsx
var FocusOutline, FocusProxy, FocusRing, FocusTarget, Focus;
var init_Focus = __esmMin((() => {
	init__storybook_global_react();
	init_emotion();
	init_useLocation();
	FocusOutline = styled.div(({ theme, active = false, outlineOffset = 0 }) => ({
		width: "100%",
		borderRadius: "inherit",
		transition: "outline-color var(--transition-duration, 0.2s)",
		outline: `2px solid ${active ? theme.color.secondary : "transparent"}`,
		outlineOffset
	}));
	FocusProxy = styled(FocusOutline)(({ theme, targetId }) => ({ [`&:has([data-target-id="${targetId}"]:focus-visible)`]: { outlineColor: theme.color.secondary } }));
	FocusRing = ({ active = false, highlightDuration, nodeRef, ...props }) => {
		const [visible, setVisible] = useState(active);
		useEffect(() => {
			if (highlightDuration) {
				setVisible(active);
				const timeout = setTimeout(setVisible, highlightDuration, false);
				return () => clearTimeout(timeout);
			}
		}, [active, highlightDuration]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(FocusOutline, {
			...props,
			active: highlightDuration ? visible : active,
			ref: nodeRef
		});
	};
	FocusTarget = ({ targetHash, highlightDuration, ...props }) => {
		const nodeRef = useRef(null);
		const locationHash = useLocationHash();
		const [active, setActive] = useState(locationHash === targetHash);
		useEffect(() => {
			const timeouts = [];
			setActive(false);
			if (locationHash === targetHash) {
				timeouts.push(setTimeout(() => {
					setActive(true);
					nodeRef.current?.focus({ preventScroll: true });
					nodeRef.current?.scrollIntoView({
						behavior: "smooth",
						block: "center"
					});
				}, 0));
				if (highlightDuration) timeouts.push(setTimeout(setActive, highlightDuration, false));
			}
			return () => timeouts.forEach(clearTimeout);
		}, [
			locationHash,
			targetHash,
			highlightDuration
		]);
		return /* @__PURE__ */ _storybook_global_react_default.createElement(FocusRing, {
			...props,
			active,
			nodeRef,
			tabIndex: -1
		});
	};
	Focus = {
		Outline: FocusOutline,
		Proxy: FocusProxy,
		Ring: FocusRing,
		Target: FocusTarget
	};
}));
//#endregion
export { fullScreenTool as A, init_review_context as B, init_zoom as C, defaultWrappers as D, init_Shortcut as E, init_ReviewProvider as F, init_NotificationList as G, Layout as H, collectReviewStoryIds as I, useLayout as J, LayoutProvider as K, init_review_status as L, AddonPanel as M, init_Panel as N, init_Wrappers as O, ReviewProvider as P, ReviewPersistentLayer as R, init_Preview as S, Shortcut as T, init_Layout as U, useReviewContext as V, NotificationList as W, init_ManagerErrorBoundary as X, ManagerErrorBoundary as Y, init_menu as _, TextFlip as a, init_addons as b, init_Particles as c, init_share as d, isolationModeTool as f, openInEditorTool as g, init_open_in_editor as h, init_TourGuide as i, init_Toolbar as j, filterToolsSide as k, Optional as l, remountTool as m, init_Focus as n, init_TextFlip as o, init_remount as p, init_LayoutProvider as q, TourGuide as r, Particles as s, Focus as t, init_Optional as u, menuTool as v, zoomTool as w, Preview as x, addonsTool as y, init_ReviewPersistentLayer as z };
