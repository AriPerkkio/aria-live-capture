import { a as __toESM, n as __esmMin } from "./globals-runtime-XrdeG17s.js";
import { D as init_useTabListState, G as $f11fb0bcf1b2687a$export$61c6a8c84e605fb6, H as init_useTooltipTriggerState, N as init_useMenuTriggerState, O as $caeb030f09a278a1$export$4ba071daf4e486, P as $e3403870bfb691da$export$79fefeb1c2091ac3, U as $3834487504f4fc00$export$4d40659c25ecb50b, V as init_useOverlayTriggerState, ct as require_react } from "./globals-runtime-DpF3al7J.js";
import { B as $8c383cffc84c9982$export$1c4b08e0eca38426, Et as $c4867b2f328c2698$export$e5c5a5f917a5871c, G as $fcc7165e876206c6$export$6d3443f2c48bfc20, It as $23f2114a1b82827e$export$b4f377a2b6254582, R as $85908aa8a35f0fac$export$a6da6c504e4bba8b, W as $fcc7165e876206c6$export$45fda7c47f93fd48, Z as $8e9d2fae0ecb9001$export$457c3d6518dd4c6f, a as $1b6fa05bad3d7740$export$fdf4756d5b8ef90a, at as $4064df0d6f9620e1$export$c9058316764c140e, d as $b24d1bc31a0f941d$export$a9d04c5684123369, l as $0407362eaf54473e$export$ccaea96c28e8b9e7, q as $970072cf4b13fde3$export$683480f191c0e3ea, r as $7d951241dadd72e4$export$fae0121b5afe572d, rt as $bbaa08b3cd72f041$export$9d1611c77c2fe928, st as $390e54f620492c70$export$f680877a34711e37, t as $83428e53deb13caf$export$773e389e644c5874, tt as $03e8ab2d84d7657a$export$4338b53315abf666 } from "./globals-runtime-Ch22TZ8K.js";
import { B as $0d47b37c475c5231$export$3351871ee4b288b8, C as $d7f64c32b702fe2c$export$86427a43e3e48ebb, E as $f8a024fbad3a5a2e$export$542a6fd13ac93354, H as $081058010ef8962e$export$2317d149ed6f78c4, J as $c07df45195231803$export$b47c3594eab58386, K as $e969f22b6713ca4a$export$ae780daf29e6d456, O as $f282e36c29c025e8$export$f9d5c8beee7d008d, Q as $b3526bc71400be8d$export$d39e1813b3bdd0e1, R as $d7a937236970dc7f$export$c6fdb837b070b4ff, c as $42ceafc619f9c3ba$export$bf788dd355e3a401, d as $a80bd3e9349588e7$export$727c8fc270210f13, et as $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7, ft as $8f5a2122b0992be3$export$630ff653c5ada6a9, g as $0c4a58759813079a$export$4e328f61c538687f, l as $42ceafc619f9c3ba$export$fb8073518f34e6ec, m as $6f0c29017aeec335$export$d68d59712b04d9d1, nt as $d1116acdf220c2da$export$13f3202a3e5ddd5, p as $6f0c29017aeec335$export$8258a0665a675899, s as $42ceafc619f9c3ba$export$18af5c7a9e9b3664, ut as $f192c2f16961cbe0$export$80f3e147d781571c, w as $d7f64c32b702fe2c$export$b5d7cc18bb8d2b59 } from "./globals-runtime-DeFA2RfN.js";
import { A as init_animation$1, C as init_useOverlayTrigger$1, D as init_useId$1, E as init_Overlay$1, F as init_useObjectRef$1, I as init_useLayoutEffect$1, L as init_mergeRefs$1, M as init_useFocusable$1, N as init_useOverlayPosition$1, P as init_filterDOMProps$1, R as init_mergeProps$1, a as init_inertValue$1, b as init_Hidden$1, c as init_useCachedChildren$1, d as init_I18nProvider$1, f as init_DOMFunctions$1, g as init_useFocusRing$1, h as init_useHover$1, i as init_useLoadMoreSentinel$1, j as init_useModal$1, k as init_useTooltipTrigger$1, l as init_CollectionBuilder$1, m as init_focusSafely$1, o as init_Collection$1, p as init_useFocusVisible$1, r as init_PressResponder$1, s as init_BaseCollection$1, t as init_useTabList$1, u as init_useResizeObserver$1, v as init_Pressable$1, x as init_usePopover$1, z as init_Focusable$1 } from "./globals-runtime-DUdJ_lLr.js";
import { n as require_react_dom } from "./globals-runtime-DNgiu6EW.js";
//#region ../../node_modules/react-aria-components/dist/exports/Focusable.mjs
var init_Focusable = __esmMin((() => {
	init_Focusable$1();
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/private/utils.mjs
function $7230ffa83bc0c2cf$export$2881499e37b75b9a({ values, children }) {
	for (let [Context, value] of values) children = /*#__PURE__*/ import_react$11.createElement(Context.Provider, { value }, children);
	return children;
}
function $7230ffa83bc0c2cf$export$4d86445c2cf5e3(props) {
	let { className, style, children, defaultClassName, defaultChildren, defaultStyle, values, render } = props;
	return (0, import_react$11.useMemo)(() => {
		let computedClassName;
		let computedStyle;
		let computedChildren;
		if (typeof className === "function") computedClassName = className({
			...values,
			defaultClassName
		});
		else computedClassName = className;
		if (typeof style === "function") computedStyle = style({
			...values,
			defaultStyle: defaultStyle || {}
		});
		else computedStyle = style;
		if (typeof children === "function") computedChildren = children({
			...values,
			defaultChildren
		});
		else if (children == null) computedChildren = defaultChildren;
		else computedChildren = children;
		return {
			className: computedClassName ?? defaultClassName,
			style: computedStyle || defaultStyle ? {
				...defaultStyle,
				...computedStyle
			} : void 0,
			children: computedChildren ?? defaultChildren,
			"data-rac": "",
			render: render ? (props) => render(props, values) : void 0
		};
	}, [
		className,
		style,
		children,
		defaultClassName,
		defaultChildren,
		defaultStyle,
		values,
		render
	]);
}
function $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, slot) {
	let ctx = (0, import_react$11.useContext)(context);
	if (slot === null) return null;
	if (ctx && typeof ctx === "object" && "slots" in ctx && ctx.slots) {
		let slotKey = slot || $7230ffa83bc0c2cf$export$c62b8e45d58ddad9;
		if (!ctx.slots[slotKey]) {
			let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p) => `"${p}"`));
			let errorMessage = slot ? `Invalid slot "${slot}".` : "A slot prop is required.";
			throw new Error(`${errorMessage} Valid slot names are ${availableSlots}.`);
		}
		return ctx.slots[slotKey];
	}
	return ctx;
}
function $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, context) {
	let { ref: contextRef, ...contextProps } = $7230ffa83bc0c2cf$export$fabf2dc03a41866e(context, props.slot) || {};
	let mergedRef = $03e8ab2d84d7657a$export$4338b53315abf666((0, import_react$11.useMemo)(() => $4064df0d6f9620e1$export$c9058316764c140e(ref, contextRef), [ref, contextRef]));
	let mergedProps = $bbaa08b3cd72f041$export$9d1611c77c2fe928(contextProps, props);
	if ("style" in contextProps && contextProps.style && "style" in props && props.style) if (typeof contextProps.style === "function" || typeof props.style === "function") mergedProps.style = (renderProps) => {
		let contextStyle = typeof contextProps.style === "function" ? contextProps.style(renderProps) : contextProps.style;
		let defaultStyle = {
			...renderProps.defaultStyle,
			...contextStyle
		};
		let style = typeof props.style === "function" ? props.style({
			...renderProps,
			defaultStyle
		}) : props.style;
		return {
			...defaultStyle,
			...style
		};
	};
	else mergedProps.style = {
		...contextProps.style,
		...props.style
	};
	return [mergedProps, mergedRef];
}
function $7230ffa83bc0c2cf$var$DOMElement(ElementType, props, forwardedRef) {
	let { render, ...otherProps } = props;
	let elementRef = (0, import_react$11.useRef)(null);
	let ref = (0, import_react$11.useMemo)(() => $4064df0d6f9620e1$export$c9058316764c140e(forwardedRef, elementRef), [forwardedRef, elementRef]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {}, [ElementType, render]);
	let domProps = {
		...otherProps,
		ref
	};
	if (render) return render(domProps, void 0);
	return /*#__PURE__*/ import_react$11.createElement(ElementType, domProps);
}
var import_react$11, $7230ffa83bc0c2cf$export$c62b8e45d58ddad9, $7230ffa83bc0c2cf$var$domComponentCache, $7230ffa83bc0c2cf$export$df3a06d6289f983e;
var init_utils = __esmMin((() => {
	init_mergeProps$1();
	init_mergeRefs$1();
	import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_useLayoutEffect$1();
	init_useObjectRef$1();
	$7230ffa83bc0c2cf$export$c62b8e45d58ddad9 = Symbol("default");
	$7230ffa83bc0c2cf$var$domComponentCache = {};
	$7230ffa83bc0c2cf$export$df3a06d6289f983e = new Proxy({}, { get(target, elementType) {
		if (typeof elementType !== "string") return void 0;
		let res = $7230ffa83bc0c2cf$var$domComponentCache[elementType];
		if (!res) {
			res = /*#__PURE__*/ (0, import_react$11.forwardRef)($7230ffa83bc0c2cf$var$DOMElement.bind(null, elementType));
			$7230ffa83bc0c2cf$var$domComponentCache[elementType] = res;
		}
		return res;
	} });
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/private/OverlayArrow.mjs
var import_react$10, $4fcfe18fac72dabd$export$2de4954e8ae13b9f;
var init_OverlayArrow = __esmMin((() => {
	import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
	$4fcfe18fac72dabd$export$2de4954e8ae13b9f = /*#__PURE__*/ (0, import_react$10.createContext)({ placement: "bottom" });
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/private/Tooltip.mjs
function $05a50f7d78b03ad9$export$8c610744efcf8a1d(props) {
	let state = $3834487504f4fc00$export$4d40659c25ecb50b(props);
	let ref = (0, import_react$9.useRef)(null);
	let { triggerProps, tooltipProps } = $85908aa8a35f0fac$export$a6da6c504e4bba8b(props, state, ref);
	return /*#__PURE__*/ import_react$9.createElement($7230ffa83bc0c2cf$export$2881499e37b75b9a, { values: [[$05a50f7d78b03ad9$export$7a7623236eec67fa, state], [$05a50f7d78b03ad9$export$39ae08fa83328b12, {
		...tooltipProps,
		triggerRef: ref
	}]] }, /*#__PURE__*/ import_react$9.createElement($d1116acdf220c2da$export$13f3202a3e5ddd5, {
		...triggerProps,
		ref
	}, props.children));
}
function $05a50f7d78b03ad9$var$TooltipInner(props) {
	let state = (0, import_react$9.useContext)($05a50f7d78b03ad9$export$7a7623236eec67fa);
	let arrowRef = (0, import_react$9.useRef)(null);
	let { overlayProps, arrowProps, placement, triggerAnchorPoint } = $b3526bc71400be8d$export$d39e1813b3bdd0e1({
		placement: props.placement || "top",
		targetRef: props.triggerRef,
		overlayRef: props.tooltipRef,
		arrowRef,
		offset: props.offset,
		crossOffset: props.crossOffset,
		isOpen: state.isOpen,
		arrowBoundaryOffset: props.arrowBoundaryOffset,
		shouldFlip: props.shouldFlip,
		containerPadding: props.containerPadding,
		onClose: () => state.close(true)
	});
	let enterAnimation = $fcc7165e876206c6$export$6d3443f2c48bfc20(props.tooltipRef, !!placement);
	let isEntering = props.isEntering || !state.shouldSkipAnimation && enterAnimation || false;
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		defaultClassName: "react-aria-Tooltip",
		values: {
			placement,
			isEntering,
			isExiting: props.isExiting,
			state
		}
	});
	props = $bbaa08b3cd72f041$export$9d1611c77c2fe928(props, overlayProps);
	let { tooltipProps } = $8c383cffc84c9982$export$1c4b08e0eca38426(props, state);
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true });
	return /*#__PURE__*/ import_react$9.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.div, {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, renderProps, tooltipProps),
		ref: props.tooltipRef,
		style: {
			...overlayProps.style,
			"--trigger-anchor-point": triggerAnchorPoint ? `${triggerAnchorPoint.x}px ${triggerAnchorPoint.y}px` : void 0,
			...renderProps.style
		},
		"data-placement": placement ?? void 0,
		"data-entering": isEntering || void 0,
		"data-exiting": props.isExiting || void 0
	}, /*#__PURE__*/ import_react$9.createElement($4fcfe18fac72dabd$export$2de4954e8ae13b9f.Provider, { value: {
		...arrowProps,
		placement,
		ref: arrowRef
	} }, renderProps.children));
}
var import_react$9, $05a50f7d78b03ad9$export$7a7623236eec67fa, $05a50f7d78b03ad9$export$39ae08fa83328b12, $05a50f7d78b03ad9$export$28c660c63b792dea;
var init_Tooltip$1 = __esmMin((() => {
	init_utils();
	init_OverlayArrow();
	init_useOverlayPosition$1();
	init_filterDOMProps$1();
	init_useFocusable$1();
	init_mergeProps$1();
	init_useModal$1();
	import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_useTooltipTriggerState();
	init_animation$1();
	init_useTooltipTrigger$1();
	$05a50f7d78b03ad9$export$7a7623236eec67fa = /*#__PURE__*/ (0, import_react$9.createContext)(null);
	$05a50f7d78b03ad9$export$39ae08fa83328b12 = /*#__PURE__*/ (0, import_react$9.createContext)(null);
	$05a50f7d78b03ad9$export$28c660c63b792dea = /*#__PURE__*/ (0, import_react$9.forwardRef)(function Tooltip({ UNSTABLE_portalContainer, ...props }, ref) {
		[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $05a50f7d78b03ad9$export$39ae08fa83328b12);
		let contextState = (0, import_react$9.useContext)($05a50f7d78b03ad9$export$7a7623236eec67fa);
		let localState = $3834487504f4fc00$export$4d40659c25ecb50b(props);
		let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
		let exitAnimation = $fcc7165e876206c6$export$45fda7c47f93fd48(ref, state.isOpen);
		let isExiting = props.isExiting || !state.shouldSkipAnimation && exitAnimation || false;
		if (!state.isOpen && !isExiting) return null;
		return /*#__PURE__*/ import_react$9.createElement($c07df45195231803$export$b47c3594eab58386, { portalContainer: UNSTABLE_portalContainer }, /*#__PURE__*/ import_react$9.createElement($05a50f7d78b03ad9$var$TooltipInner, {
			...props,
			tooltipRef: ref,
			isExiting
		}));
	});
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/exports/Tooltip.mjs
var init_Tooltip = __esmMin((() => {
	init_Tooltip$1();
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/private/Heading.mjs
var import_react$8, $2ec61d1d4f780267$export$d688439359537581, $2ec61d1d4f780267$export$a8a3e93435678ff9;
var init_Heading$1 = __esmMin((() => {
	init_utils();
	import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
	$2ec61d1d4f780267$export$d688439359537581 = /*#__PURE__*/ (0, import_react$8.createContext)({});
	$2ec61d1d4f780267$export$a8a3e93435678ff9 = /*#__PURE__*/ (0, import_react$8.forwardRef)(function Heading(props, ref) {
		[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $2ec61d1d4f780267$export$d688439359537581);
		let { children, level = 3, className, ...domProps } = props;
		let Element = $7230ffa83bc0c2cf$export$df3a06d6289f983e[`h${level}`];
		return /*#__PURE__*/ import_react$8.createElement(Element, {
			...domProps,
			ref,
			className: className ?? "react-aria-Heading"
		}, children);
	});
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/exports/Heading.mjs
var init_Heading = __esmMin((() => {
	init_Heading$1();
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/private/Text.mjs
var import_react$7, $efe09c6d1c304b50$export$9afb8bc826b033ea, $efe09c6d1c304b50$export$5f1af8db9871e1d6;
var init_Text$1 = __esmMin((() => {
	init_utils();
	init_Hidden$1();
	import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
	$efe09c6d1c304b50$export$9afb8bc826b033ea = /*#__PURE__*/ (0, import_react$7.createContext)({});
	$efe09c6d1c304b50$export$5f1af8db9871e1d6 = /*#__PURE__*/ $d7f64c32b702fe2c$export$86427a43e3e48ebb(function Text(props, ref) {
		[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $efe09c6d1c304b50$export$9afb8bc826b033ea);
		let { elementType = "span", ...domProps } = props;
		let ElementType = $7230ffa83bc0c2cf$export$df3a06d6289f983e[elementType];
		return /*#__PURE__*/ import_react$7.createElement(ElementType, {
			className: "react-aria-Text",
			...domProps,
			ref
		});
	});
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/exports/Text.mjs
var init_Text = __esmMin((() => {
	init_Text$1();
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/exports/Pressable.mjs
var init_Pressable = __esmMin((() => {
	init_Pressable$1();
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/private/Popover.mjs
function $542a13ca2fa5b484$var$PopoverInner({ state, isExiting, UNSTABLE_portalContainer, clearContexts, ...props }) {
	let arrowRef = (0, import_react$6.useRef)(null);
	let containerRef = (0, import_react$6.useRef)(null);
	let groupCtx = (0, import_react$6.useContext)($542a13ca2fa5b484$var$PopoverGroupContext);
	let isSubPopover = groupCtx && props.trigger === "SubmenuTrigger";
	let { popoverProps, underlayProps, arrowProps, placement, triggerAnchorPoint } = $f8a024fbad3a5a2e$export$542a6fd13ac93354({
		...props,
		offset: props.offset ?? 8,
		arrowRef,
		groupRef: isSubPopover ? groupCtx : containerRef
	}, state);
	let ref = props.popoverRef;
	let enterAnimation = $fcc7165e876206c6$export$6d3443f2c48bfc20(ref, !!placement);
	let isEntering = props.isEntering || !props.shouldSkipAnimation && enterAnimation || false;
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		defaultClassName: "react-aria-Popover",
		values: {
			trigger: props.trigger || null,
			placement,
			isEntering,
			isExiting
		}
	});
	let shouldBeDialog = !props.isNonModal || props.trigger === "SubmenuTrigger" || props.trigger === "PreviewTrigger";
	let [isDialog, setDialog] = (0, import_react$6.useState)(props.trigger === "PreviewTrigger");
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (ref.current) setDialog(shouldBeDialog && !ref.current.querySelector("[role=dialog]"));
	}, [ref, shouldBeDialog]);
	(0, import_react$6.useEffect)(() => {
		if (isDialog && props.trigger !== "PreviewTrigger" && (props.trigger !== "SubmenuTrigger" || $8f5a2122b0992be3$export$630ff653c5ada6a9() !== "pointer") && ref.current && !$23f2114a1b82827e$export$b4f377a2b6254582(ref.current)) $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
	}, [
		isDialog,
		ref,
		props.trigger
	]);
	let children = (0, import_react$6.useMemo)(() => {
		let children = renderProps.children;
		if (clearContexts) for (let Context of clearContexts) children = /*#__PURE__*/ import_react$6.createElement(Context.Provider, { value: null }, children);
		return children;
	}, [renderProps.children, clearContexts]);
	let [triggerWidth, setTriggerWidth] = (0, import_react$6.useState)(null);
	let onResize = (0, import_react$6.useCallback)(() => {
		if (props.triggerRef.current) setTriggerWidth(props.triggerRef.current.getBoundingClientRect().width + "px");
	}, [props.triggerRef]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(onResize, [onResize]);
	$970072cf4b13fde3$export$683480f191c0e3ea({
		ref: renderProps.style?.["--trigger-width"] ? void 0 : props.triggerRef,
		onResize
	});
	let style = {
		...popoverProps.style,
		"--trigger-anchor-point": triggerAnchorPoint ? `${triggerAnchorPoint.x}px ${triggerAnchorPoint.y}px` : void 0,
		...renderProps.style,
		"--trigger-width": renderProps.style?.["--trigger-width"] || triggerWidth
	};
	let overlay = /*#__PURE__*/ import_react$6.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.div, {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928($8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true }), popoverProps),
		...renderProps,
		id: isDialog ? props.id : void 0,
		role: isDialog ? "dialog" : void 0,
		tabIndex: isDialog ? -1 : void 0,
		"aria-label": props["aria-label"],
		"aria-labelledby": props["aria-labelledby"],
		ref,
		slot: props.slot || void 0,
		style,
		dir: props.dir,
		"data-trigger": props.trigger,
		"data-placement": placement,
		"data-entering": isEntering || void 0,
		"data-exiting": isExiting || void 0
	}, !props.isNonModal && /*#__PURE__*/ import_react$6.createElement($081058010ef8962e$export$2317d149ed6f78c4, { onDismiss: state.close }), /*#__PURE__*/ import_react$6.createElement($4fcfe18fac72dabd$export$2de4954e8ae13b9f.Provider, { value: {
		...arrowProps,
		placement,
		ref: arrowRef
	} }, children), /*#__PURE__*/ import_react$6.createElement($081058010ef8962e$export$2317d149ed6f78c4, { onDismiss: state.close }));
	if (!isSubPopover) return /*#__PURE__*/ import_react$6.createElement($d7a937236970dc7f$export$c6fdb837b070b4ff, {
		...props,
		shouldContainFocus: isDialog && props.trigger !== "PreviewTrigger",
		isExiting,
		portalContainer: UNSTABLE_portalContainer
	}, !props.isNonModal && state.isOpen && /*#__PURE__*/ import_react$6.createElement("div", {
		"data-testid": "underlay",
		...underlayProps,
		style: {
			position: "fixed",
			inset: 0
		}
	}), /*#__PURE__*/ import_react$6.createElement("div", {
		ref: containerRef,
		style: { display: "contents" }
	}, /*#__PURE__*/ import_react$6.createElement($542a13ca2fa5b484$var$PopoverGroupContext.Provider, { value: containerRef }, overlay)));
	return /*#__PURE__*/ import_react$6.createElement($d7a937236970dc7f$export$c6fdb837b070b4ff, {
		...props,
		shouldContainFocus: isDialog && props.trigger !== "PreviewTrigger",
		isExiting,
		portalContainer: UNSTABLE_portalContainer ?? groupCtx?.current ?? void 0
	}, overlay);
}
var import_react$6, $542a13ca2fa5b484$export$9b9a0cd73afb7ca4, $542a13ca2fa5b484$var$PopoverGroupContext, $542a13ca2fa5b484$export$5b6b19405a83ff9d;
var init_Popover$1 = __esmMin((() => {
	init_utils();
	init_OverlayArrow();
	init_Dialog$1();
	init_usePopover$1();
	init_Overlay$1();
	init_filterDOMProps$1();
	init_focusSafely$1();
	init_useFocusVisible$1();
	init_DOMFunctions$1();
	init_mergeProps$1();
	init_useOverlayTriggerState();
	import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_animation$1();
	init_Hidden$1();
	init_useLayoutEffect$1();
	init_I18nProvider$1();
	init_useResizeObserver$1();
	$542a13ca2fa5b484$export$9b9a0cd73afb7ca4 = /*#__PURE__*/ (0, import_react$6.createContext)(null);
	$542a13ca2fa5b484$var$PopoverGroupContext = /*#__PURE__*/ (0, import_react$6.createContext)(null);
	$542a13ca2fa5b484$export$5b6b19405a83ff9d = /*#__PURE__*/ (0, import_react$6.forwardRef)(function Popover(props, ref) {
		[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $542a13ca2fa5b484$export$9b9a0cd73afb7ca4);
		let contextState = (0, import_react$6.useContext)($f2ff30fde7b014be$export$d2f961adcb0afbe);
		let localState = $f11fb0bcf1b2687a$export$61c6a8c84e605fb6(props);
		let state = props.isOpen != null || props.defaultOpen != null || !contextState ? localState : contextState;
		let exitAnimation = $fcc7165e876206c6$export$45fda7c47f93fd48(ref, state.isOpen);
		let isExiting = props.isExiting || !props.shouldSkipAnimation && exitAnimation || false;
		let isHidden = $d7f64c32b702fe2c$export$b5d7cc18bb8d2b59();
		let { direction } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
		if (isHidden) {
			let children = props.children;
			if (typeof children === "function") children = children({
				trigger: props.trigger || null,
				placement: "bottom",
				isEntering: false,
				isExiting: false,
				defaultChildren: null
			});
			return /*#__PURE__*/ import_react$6.createElement(import_react$6.Fragment, null, children);
		}
		if (state && !state.isOpen && !isExiting) return null;
		return /*#__PURE__*/ import_react$6.createElement($542a13ca2fa5b484$var$PopoverInner, {
			...props,
			triggerRef: props.triggerRef,
			state,
			popoverRef: ref,
			isExiting,
			dir: direction
		});
	});
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/private/Collection.mjs
function $263ab7fc0f95ccdb$var$useCollectionRender(collection, parent, renderDropIndicator) {
	return $a80bd3e9349588e7$export$727c8fc270210f13({
		items: parent ? collection.getChildren(parent.key) : collection,
		dependencies: [renderDropIndicator],
		children(node) {
			if (node.type === "content") return /*#__PURE__*/ import_react$5.createElement(import_react$5.Fragment, null);
			let rendered = node.render(node);
			if (!renderDropIndicator || node.type !== "item") return rendered;
			return /*#__PURE__*/ import_react$5.createElement(import_react$5.Fragment, null, renderDropIndicator({
				type: "item",
				key: node.key,
				dropPosition: "before"
			}), rendered, $263ab7fc0f95ccdb$export$2dbbd341daed716d(collection, node, renderDropIndicator));
		}
	});
}
function $263ab7fc0f95ccdb$export$2dbbd341daed716d(collection, node, renderDropIndicator) {
	let key = node.key;
	let keyAfter = collection.getKeyAfter(key);
	let nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
	while (nextItemInFlattenedCollection != null && nextItemInFlattenedCollection.type !== "item") {
		keyAfter = collection.getKeyAfter(nextItemInFlattenedCollection.key);
		nextItemInFlattenedCollection = keyAfter != null ? collection.getItem(keyAfter) : null;
	}
	let nextItemInSameLevel = node.nextKey != null ? collection.getItem(node.nextKey) : null;
	while (nextItemInSameLevel != null && nextItemInSameLevel.type !== "item") nextItemInSameLevel = nextItemInSameLevel.nextKey != null ? collection.getItem(nextItemInSameLevel.nextKey) : null;
	let afterIndicators = [];
	if (nextItemInSameLevel == null) {
		let current = node;
		while (current?.type === "item" && (!nextItemInFlattenedCollection || current.parentKey !== nextItemInFlattenedCollection.parentKey && nextItemInFlattenedCollection.level < current.level)) {
			let indicator = renderDropIndicator({
				type: "item",
				key: current.key,
				dropPosition: "after"
			});
			if (/*#__PURE__*/ (0, import_react$5.isValidElement)(indicator)) afterIndicators.push(/*#__PURE__*/ (0, import_react$5.cloneElement)(indicator, { key: `${current.key}-after` }));
			current = current.parentKey != null ? collection.getItem(current.parentKey) : null;
		}
	}
	return afterIndicators;
}
function $263ab7fc0f95ccdb$export$90e00781bc59d8f9(focusedKey) {
	return (0, import_react$5.useMemo)(() => focusedKey != null ? /* @__PURE__ */ new Set([focusedKey]) : null, [focusedKey]);
}
var import_react$5, $263ab7fc0f95ccdb$export$a164736487e3f0ae, $263ab7fc0f95ccdb$export$4feb769f8ddf26c5;
var init_Collection = __esmMin((() => {
	import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_useCachedChildren$1();
	$263ab7fc0f95ccdb$export$a164736487e3f0ae = {
		CollectionRoot({ collection, renderDropIndicator }) {
			return $263ab7fc0f95ccdb$var$useCollectionRender(collection, null, renderDropIndicator);
		},
		CollectionBranch({ collection, parent, renderDropIndicator }) {
			return $263ab7fc0f95ccdb$var$useCollectionRender(collection, parent, renderDropIndicator);
		}
	};
	$263ab7fc0f95ccdb$export$4feb769f8ddf26c5 = /*#__PURE__*/ (0, import_react$5.createContext)($263ab7fc0f95ccdb$export$a164736487e3f0ae);
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/private/SharedElementTransition.mjs
function $792f28e438b9ad5f$export$758399f318e6385a(props) {
	let ref = (0, import_react$4.useRef)({});
	return /*#__PURE__*/ import_react$4.createElement($792f28e438b9ad5f$var$SharedElementContext.Provider, { value: ref }, props.children);
}
var import_react$4, $792f28e438b9ad5f$var$SharedElementContext;
var init_SharedElementTransition = __esmMin((() => {
	require_react_dom();
	import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
	$792f28e438b9ad5f$var$SharedElementContext = /*#__PURE__*/ (0, import_react$4.createContext)(null);
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/private/SelectionIndicator.mjs
var import_react$3, $91fe5e721c7f36c1$export$c9549807523555e0;
var init_SelectionIndicator = __esmMin((() => {
	import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
	$91fe5e721c7f36c1$export$c9549807523555e0 = /*#__PURE__*/ (0, import_react$3.createContext)({ isSelected: false });
})), import_react$2, $49319ee1285aa241$export$24aad8519b95b41b, $49319ee1285aa241$export$795aec4671cbae19;
var init_Menu = __esmMin((() => {
	init_utils();
	init_BaseCollection$1();
	init_CollectionBuilder$1();
	init_filterDOMProps$1();
	init_inertValue$1();
	init_useLoadMoreSentinel$1();
	init_mergeProps$1();
	import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
	$49319ee1285aa241$export$24aad8519b95b41b = /*#__PURE__*/ (0, import_react$2.createContext)(null);
	$49319ee1285aa241$export$795aec4671cbae19 = /*#__PURE__*/ (0, import_react$2.createContext)(null);
	(class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
		static {
			this.type = "submenutrigger";
		}
		filter(collection, newCollection, filterFn) {
			let triggerNode = collection.getItem(this.firstChildKey);
			if (triggerNode && filterFn(triggerNode.textValue, this)) {
				let clone = this.clone();
				newCollection.addDescendants(clone, collection);
				return clone;
			}
			return null;
		}
	});
	$42ceafc619f9c3ba$export$18af5c7a9e9b3664($6f0c29017aeec335$export$8258a0665a675899, function MenuLoadingIndicator(props, ref, item) {
		let state = (0, import_react$2.useContext)($49319ee1285aa241$export$24aad8519b95b41b);
		let { isLoading, onLoadMore, scrollOffset, ...otherProps } = props;
		let sentinelRef = (0, import_react$2.useRef)(null);
		$0407362eaf54473e$export$ccaea96c28e8b9e7((0, import_react$2.useMemo)(() => ({
			onLoadMore,
			collection: state?.collection,
			sentinelRef,
			scrollOffset
		}), [
			onLoadMore,
			scrollOffset,
			state?.collection
		]), sentinelRef);
		let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
			...otherProps,
			id: void 0,
			children: item.rendered,
			defaultClassName: "react-aria-MenuLoadingIndicator",
			values: void 0
		});
		return /*#__PURE__*/ import_react$2.createElement(import_react$2.Fragment, null, /*#__PURE__*/ import_react$2.createElement("div", {
			style: {
				position: "relative",
				width: 0,
				height: 0
			},
			inert: $b24d1bc31a0f941d$export$a9d04c5684123369(true)
		}, /*#__PURE__*/ import_react$2.createElement("div", {
			"data-testid": "loadMoreSentinel",
			ref: sentinelRef,
			style: {
				position: "absolute",
				height: 1,
				width: 1
			}
		})), isLoading && renderProps.children && /*#__PURE__*/ import_react$2.createElement(import_react$2.Fragment, null, /*#__PURE__*/ import_react$2.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.div, {
			...$bbaa08b3cd72f041$export$9d1611c77c2fe928($8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true }), { tabIndex: -1 }),
			...renderProps,
			role: "menuitem",
			ref
		}, renderProps.children)));
	});
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/private/Dialog.mjs
function $f2ff30fde7b014be$export$2e1e1122cf0cba88(props) {
	let state = $e3403870bfb691da$export$79fefeb1c2091ac3(props);
	let buttonRef = (0, import_react$1.useRef)(null);
	let { triggerProps, overlayProps } = $f282e36c29c025e8$export$f9d5c8beee7d008d({ type: "dialog" }, state, buttonRef);
	triggerProps.id = $390e54f620492c70$export$f680877a34711e37();
	overlayProps["aria-labelledby"] = triggerProps.id;
	if ($d7f64c32b702fe2c$export$b5d7cc18bb8d2b59()) return null;
	return /*#__PURE__*/ import_react$1.createElement($7230ffa83bc0c2cf$export$2881499e37b75b9a, { values: [
		[$f2ff30fde7b014be$export$d2f961adcb0afbe, state],
		[$49319ee1285aa241$export$795aec4671cbae19, state],
		[$f2ff30fde7b014be$export$8b93a07348a7730c, overlayProps],
		[$542a13ca2fa5b484$export$9b9a0cd73afb7ca4, {
			trigger: "DialogTrigger",
			triggerRef: buttonRef,
			id: overlayProps.id,
			"aria-labelledby": overlayProps["aria-labelledby"]
		}]
	] }, /*#__PURE__*/ import_react$1.createElement($0d47b37c475c5231$export$3351871ee4b288b8, {
		...triggerProps,
		ref: buttonRef,
		isPressed: state.isOpen
	}, props.children));
}
var import_react$1, $f2ff30fde7b014be$export$8b93a07348a7730c, $f2ff30fde7b014be$export$d2f961adcb0afbe;
var init_Dialog$1 = __esmMin((() => {
	init_utils();
	init_Popover$1();
	init_Menu();
	init_PressResponder$1();
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_useId$1();
	init_Hidden$1();
	init_useMenuTriggerState();
	init_useOverlayTrigger$1();
	$f2ff30fde7b014be$export$8b93a07348a7730c = /*#__PURE__*/ (0, import_react$1.createContext)(null);
	$f2ff30fde7b014be$export$d2f961adcb0afbe = /*#__PURE__*/ (0, import_react$1.createContext)(null);
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/exports/Dialog.mjs
var init_Dialog = __esmMin((() => {
	init_Dialog$1();
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/exports/Popover.mjs
var init_Popover = __esmMin((() => {
	init_Popover$1();
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/private/Tabs.mjs
function $b4f18e3395fe64d7$var$TabsInner({ props, tabsRef: ref, collection }) {
	let { orientation = "horizontal" } = props;
	let state = $caeb030f09a278a1$export$4ba071daf4e486({
		...props,
		collection,
		children: void 0
	});
	let { focusProps, isFocused, isFocusVisible } = $0c4a58759813079a$export$4e328f61c538687f({ within: true });
	let values = (0, import_react.useMemo)(() => ({
		orientation,
		isFocusWithin: isFocused,
		isFocusVisible
	}), [
		orientation,
		isFocused,
		isFocusVisible
	]);
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		defaultClassName: "react-aria-Tabs",
		values
	});
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true });
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.div, {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, renderProps, focusProps),
		ref,
		slot: props.slot || void 0,
		"data-focused": isFocused || void 0,
		"data-orientation": orientation,
		"data-focus-visible": isFocusVisible || void 0,
		"data-disabled": state.isDisabled || void 0
	}, /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$2881499e37b75b9a, { values: [[$b4f18e3395fe64d7$export$cfa7aa87c26e7d1f, props], [$b4f18e3395fe64d7$export$364712098d2aa57c, state]] }, renderProps.children));
}
function $b4f18e3395fe64d7$var$TabListInner({ props, forwardedRef: ref }) {
	let state = (0, import_react.useContext)($b4f18e3395fe64d7$export$364712098d2aa57c);
	let { CollectionRoot } = (0, import_react.useContext)($263ab7fc0f95ccdb$export$4feb769f8ddf26c5);
	let { orientation = "horizontal", keyboardActivation = "automatic" } = $7230ffa83bc0c2cf$export$fabf2dc03a41866e($b4f18e3395fe64d7$export$cfa7aa87c26e7d1f);
	let objectRef = $03e8ab2d84d7657a$export$4338b53315abf666(ref);
	let { tabListProps } = $83428e53deb13caf$export$773e389e644c5874({
		...props,
		orientation,
		keyboardActivation
	}, state, objectRef);
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		children: null,
		defaultClassName: "react-aria-TabList",
		values: {
			orientation,
			state
		}
	});
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true });
	delete DOMProps.id;
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.div, {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, renderProps, tabListProps),
		ref: objectRef,
		"data-orientation": orientation || void 0
	}, /*#__PURE__*/ import_react.createElement($792f28e438b9ad5f$export$758399f318e6385a, null, /*#__PURE__*/ import_react.createElement(CollectionRoot, {
		collection: state.collection,
		persistedKeys: $263ab7fc0f95ccdb$export$90e00781bc59d8f9(state.selectionManager.focusedKey)
	})));
}
function $b4f18e3395fe64d7$var$TabPanelInner(props) {
	let state = (0, import_react.useContext)($b4f18e3395fe64d7$export$364712098d2aa57c);
	let { id, tabPanelRef: ref, isInitiallySelected, isExiting, ...otherProps } = props;
	let { tabPanelProps } = $7d951241dadd72e4$export$fae0121b5afe572d(props, state, ref);
	let { focusProps, isFocused, isFocusVisible } = $0c4a58759813079a$export$4e328f61c538687f();
	let isSelected = state.selectedKey === props.id;
	let isEntering = $fcc7165e876206c6$export$6d3443f2c48bfc20(ref) && !isInitiallySelected;
	let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
		...props,
		defaultClassName: "react-aria-TabPanel",
		values: {
			isFocused,
			isFocusVisible,
			isInert: $b24d1bc31a0f941d$export$a9d04c5684123369(!isSelected),
			isEntering,
			isExiting,
			state
		}
	});
	let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(otherProps, { global: true });
	delete DOMProps.id;
	let domProps = isSelected ? $bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, tabPanelProps, focusProps, renderProps) : $bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, renderProps);
	return /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$df3a06d6289f983e.div, {
		...domProps,
		ref,
		"data-focused": isFocused || void 0,
		"data-focus-visible": isFocusVisible || void 0,
		inert: $b24d1bc31a0f941d$export$a9d04c5684123369(!isSelected || props.inert),
		"data-inert": !isSelected ? "true" : void 0,
		"data-entering": isEntering || void 0,
		"data-exiting": isExiting || void 0
	}, /*#__PURE__*/ import_react.createElement($7230ffa83bc0c2cf$export$2881499e37b75b9a, { values: [[$b4f18e3395fe64d7$export$cfa7aa87c26e7d1f, null], [$b4f18e3395fe64d7$export$364712098d2aa57c, null]] }, /*#__PURE__*/ import_react.createElement($263ab7fc0f95ccdb$export$4feb769f8ddf26c5.Provider, { value: $263ab7fc0f95ccdb$export$a164736487e3f0ae }, renderProps.children)));
}
var import_react, $b4f18e3395fe64d7$export$cfa7aa87c26e7d1f, $b4f18e3395fe64d7$export$364712098d2aa57c, $b4f18e3395fe64d7$export$b2539bed5023c21c, $b4f18e3395fe64d7$export$e51a686c67fdaa2d, $b4f18e3395fe64d7$var$TabItemNode, $b4f18e3395fe64d7$export$3e41faf802a29e71, $b4f18e3395fe64d7$export$3d96ec278d3efce4;
var init_Tabs$1 = __esmMin((() => {
	init_utils();
	init_Collection();
	init_SelectionIndicator();
	init_SharedElementTransition();
	init_useTabList$1();
	init_Collection$1();
	init_CollectionBuilder$1();
	init_BaseCollection$1();
	init_Hidden$1();
	init_filterDOMProps$1();
	init_inertValue$1();
	init_mergeProps$1();
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
	init_useTabListState();
	init_animation$1();
	init_useFocusRing$1();
	init_useHover$1();
	init_useObjectRef$1();
	$b4f18e3395fe64d7$export$cfa7aa87c26e7d1f = /*#__PURE__*/ (0, import_react.createContext)(null);
	$b4f18e3395fe64d7$export$364712098d2aa57c = /*#__PURE__*/ (0, import_react.createContext)(null);
	$b4f18e3395fe64d7$export$b2539bed5023c21c = /*#__PURE__*/ (0, import_react.forwardRef)(function Tabs(props, ref) {
		[props, ref] = $7230ffa83bc0c2cf$export$29f1550f4b0d4415(props, ref, $b4f18e3395fe64d7$export$cfa7aa87c26e7d1f);
		let { children, orientation = "horizontal" } = props;
		children = (0, import_react.useMemo)(() => typeof children === "function" ? children({
			orientation,
			defaultChildren: null
		}) : children, [children, orientation]);
		return /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$export$bf788dd355e3a401, { content: children }, (collection) => /*#__PURE__*/ import_react.createElement($b4f18e3395fe64d7$var$TabsInner, {
			props,
			collection,
			tabsRef: ref
		}));
	});
	$b4f18e3395fe64d7$export$e51a686c67fdaa2d = /*#__PURE__*/ (0, import_react.forwardRef)(function TabList(props, ref) {
		return (0, import_react.useContext)($b4f18e3395fe64d7$export$364712098d2aa57c) ? /*#__PURE__*/ import_react.createElement($b4f18e3395fe64d7$var$TabListInner, {
			props,
			forwardedRef: ref
		}) : /*#__PURE__*/ import_react.createElement($42ceafc619f9c3ba$export$fb8073518f34e6ec, props);
	});
	$b4f18e3395fe64d7$var$TabItemNode = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
		static {
			this.type = "item";
		}
	};
	$b4f18e3395fe64d7$export$3e41faf802a29e71 = /*#__PURE__*/ $42ceafc619f9c3ba$export$18af5c7a9e9b3664($b4f18e3395fe64d7$var$TabItemNode, (props, forwardedRef, item) => {
		let state = (0, import_react.useContext)($b4f18e3395fe64d7$export$364712098d2aa57c);
		let ref = $03e8ab2d84d7657a$export$4338b53315abf666(forwardedRef);
		let { tabProps, isSelected, isDisabled, isPressed } = $1b6fa05bad3d7740$export$fdf4756d5b8ef90a({
			key: item.key,
			...props
		}, state, ref);
		let { focusProps, isFocused, isFocusVisible } = $0c4a58759813079a$export$4e328f61c538687f();
		let { hoverProps, isHovered } = $e969f22b6713ca4a$export$ae780daf29e6d456({
			isDisabled,
			onHoverStart: props.onHoverStart,
			onHoverEnd: props.onHoverEnd,
			onHoverChange: props.onHoverChange
		});
		let renderProps = $7230ffa83bc0c2cf$export$4d86445c2cf5e3({
			...props,
			id: void 0,
			children: item.rendered,
			defaultClassName: "react-aria-Tab",
			values: {
				isSelected,
				isDisabled,
				isFocused,
				isFocusVisible,
				isPressed,
				isHovered
			}
		});
		let ElementType = item.props.href ? $7230ffa83bc0c2cf$export$df3a06d6289f983e.a : $7230ffa83bc0c2cf$export$df3a06d6289f983e.div;
		let DOMProps = $8e9d2fae0ecb9001$export$457c3d6518dd4c6f(props, { global: true });
		delete DOMProps.id;
		delete DOMProps.onClick;
		return /*#__PURE__*/ import_react.createElement(ElementType, {
			...$bbaa08b3cd72f041$export$9d1611c77c2fe928(DOMProps, renderProps, tabProps, focusProps, hoverProps),
			ref,
			"data-selected": isSelected || void 0,
			"data-disabled": isDisabled || void 0,
			"data-focused": isFocused || void 0,
			"data-focus-visible": isFocusVisible || void 0,
			"data-pressed": isPressed || void 0,
			"data-hovered": isHovered || void 0
		}, /*#__PURE__*/ import_react.createElement($91fe5e721c7f36c1$export$c9549807523555e0.Provider, { value: { isSelected } }, renderProps.children));
	});
	$b4f18e3395fe64d7$export$3d96ec278d3efce4 = /*#__PURE__*/ $d7f64c32b702fe2c$export$86427a43e3e48ebb(function TabPanel(props, forwardedRef) {
		const state = (0, import_react.useContext)($b4f18e3395fe64d7$export$364712098d2aa57c);
		let ref = $03e8ab2d84d7657a$export$4338b53315abf666(forwardedRef);
		let isSelected = state.selectedKey === props.id;
		let [isInitiallySelected, setInitiallySelected] = (0, import_react.useState)(state.selectedKey != null ? isSelected : null);
		if (isInitiallySelected == null && state.selectedKey != null) setInitiallySelected(isSelected);
		else if (!isSelected && isInitiallySelected) setInitiallySelected(false);
		let isExiting = $fcc7165e876206c6$export$45fda7c47f93fd48(ref, isSelected);
		if (!isSelected && !props.shouldForceMount && !isExiting) return null;
		return /*#__PURE__*/ import_react.createElement($b4f18e3395fe64d7$var$TabPanelInner, {
			...props,
			tabPanelRef: ref,
			isInitiallySelected: isInitiallySelected || false,
			isExiting
		});
	});
}));
//#endregion
//#region ../../node_modules/react-aria-components/dist/exports/Tabs.mjs
var init_Tabs = __esmMin((() => {
	init_Tabs$1();
}));
//#endregion
export { init_Tooltip$1 as C, $05a50f7d78b03ad9$export$8c610744efcf8a1d as S, init_Heading as _, $b4f18e3395fe64d7$export$e51a686c67fdaa2d as a, init_Tooltip as b, init_Dialog as c, $542a13ca2fa5b484$export$5b6b19405a83ff9d as d, init_Popover$1 as f, init_Text$1 as g, $efe09c6d1c304b50$export$5f1af8db9871e1d6 as h, $b4f18e3395fe64d7$export$b2539bed5023c21c as i, $f2ff30fde7b014be$export$2e1e1122cf0cba88 as l, init_Text as m, $b4f18e3395fe64d7$export$3d96ec278d3efce4 as n, init_Tabs$1 as o, init_Pressable as p, $b4f18e3395fe64d7$export$3e41faf802a29e71 as r, init_Popover as s, init_Tabs as t, init_Dialog$1 as u, $2ec61d1d4f780267$export$a8a3e93435678ff9 as v, init_Focusable as w, $05a50f7d78b03ad9$export$28c660c63b792dea as x, init_Heading$1 as y };
