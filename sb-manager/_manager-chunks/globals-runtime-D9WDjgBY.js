import { a as __toESM, n as __esmMin } from "./globals-runtime-XrdeG17s.js";
import { l as clamp, u as init_dist$10 } from "./globals-runtime-C8r9nrt8.js";
import { ct as require_react, it as require_jsx_runtime } from "./globals-runtime-DpF3al7J.js";
import { n as require_react_dom } from "./globals-runtime-DNgiu6EW.js";
//#region ../node_modules/@radix-ui/react-compose-refs/dist/index.mjs
function setRef(ref, value) {
	if (typeof ref === "function") ref(value);
	else if (ref !== null && ref !== void 0) ref.current = value;
}
function composeRefs(...refs) {
	return (node) => refs.forEach((ref) => setRef(ref, node));
}
function useComposedRefs(...refs) {
	return import_react$11.useCallback(composeRefs(...refs), refs);
}
var import_react$11;
var init_dist$9 = __esmMin((() => {
	import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../node_modules/@radix-ui/react-scroll-area/node_modules/@radix-ui/react-slot/dist/index.mjs
function isSlottable(child) {
	return import_react$10.isValidElement(child) && child.type === Slottable;
}
function mergeProps(slotProps, childProps) {
	const overrideProps = { ...childProps };
	for (const propName in childProps) {
		const slotPropValue = slotProps[propName];
		const childPropValue = childProps[propName];
		if (/^on[A-Z]/.test(propName)) {
			if (slotPropValue && childPropValue) overrideProps[propName] = (...args) => {
				childPropValue(...args);
				slotPropValue(...args);
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
function getElementRef$1(element) {
	let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
	let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.ref;
	getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
	mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
	if (mayWarn) return element.props.ref;
	return element.props.ref || element.ref;
}
var import_react$10, import_jsx_runtime$4, Slot, SlotClone, Slottable;
var init_dist$8 = __esmMin((() => {
	import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$9();
	import_jsx_runtime$4 = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
	Slot = import_react$10.forwardRef((props, forwardedRef) => {
		const { children, ...slotProps } = props;
		const childrenArray = import_react$10.Children.toArray(children);
		const slottable = childrenArray.find(isSlottable);
		if (slottable) {
			const newElement = slottable.props.children;
			const newChildren = childrenArray.map((child) => {
				if (child === slottable) {
					if (import_react$10.Children.count(newElement) > 1) return import_react$10.Children.only(null);
					return import_react$10.isValidElement(newElement) ? newElement.props.children : null;
				} else return child;
			});
			return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(SlotClone, {
				...slotProps,
				ref: forwardedRef,
				children: import_react$10.isValidElement(newElement) ? import_react$10.cloneElement(newElement, void 0, newChildren) : null
			});
		}
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(SlotClone, {
			...slotProps,
			ref: forwardedRef,
			children
		});
	});
	Slot.displayName = "Slot";
	SlotClone = import_react$10.forwardRef((props, forwardedRef) => {
		const { children, ...slotProps } = props;
		if (import_react$10.isValidElement(children)) {
			const childrenRef = getElementRef$1(children);
			return import_react$10.cloneElement(children, {
				...mergeProps(slotProps, children.props),
				ref: forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef
			});
		}
		return import_react$10.Children.count(children) > 1 ? import_react$10.Children.only(null) : null;
	});
	SlotClone.displayName = "SlotClone";
	Slottable = ({ children }) => {
		return /* @__PURE__ */ (0, import_jsx_runtime$4.jsx)(import_jsx_runtime$4.Fragment, { children });
	};
})), import_react$9, import_jsx_runtime$3, Primitive;
var init_dist$7 = __esmMin((() => {
	import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
	require_react_dom();
	init_dist$8();
	import_jsx_runtime$3 = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
	Primitive = [
		"a",
		"button",
		"div",
		"form",
		"h2",
		"h3",
		"img",
		"input",
		"label",
		"li",
		"nav",
		"ol",
		"p",
		"span",
		"svg",
		"ul"
	].reduce((primitive, node) => {
		const Node = import_react$9.forwardRef((props, forwardedRef) => {
			const { asChild, ...primitiveProps } = props;
			const Comp = asChild ? Slot : node;
			if (typeof window !== "undefined") window[Symbol.for("radix-ui")] = true;
			return /* @__PURE__ */ (0, import_jsx_runtime$3.jsx)(Comp, {
				...primitiveProps,
				ref: forwardedRef
			});
		});
		Node.displayName = `Primitive.${node}`;
		return {
			...primitive,
			[node]: Node
		};
	}, {});
}));
//#endregion
//#region ../node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var import_react$8, useLayoutEffect2;
var init_dist$6 = __esmMin((() => {
	import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
	useLayoutEffect2 = Boolean(globalThis?.document) ? import_react$8.useLayoutEffect : () => {};
}));
//#endregion
//#region ../node_modules/@radix-ui/react-presence/dist/index.mjs
function useStateMachine$1(initialState, machine) {
	return import_react$7.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
function usePresence(present) {
	const [node, setNode] = import_react$6.useState();
	const stylesRef = import_react$6.useRef({});
	const prevPresentRef = import_react$6.useRef(present);
	const prevAnimationNameRef = import_react$6.useRef("none");
	const [state, send] = useStateMachine$1(present ? "mounted" : "unmounted", {
		mounted: {
			UNMOUNT: "unmounted",
			ANIMATION_OUT: "unmountSuspended"
		},
		unmountSuspended: {
			MOUNT: "mounted",
			ANIMATION_END: "unmounted"
		},
		unmounted: { MOUNT: "mounted" }
	});
	import_react$6.useEffect(() => {
		const currentAnimationName = getAnimationName(stylesRef.current);
		prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
	}, [state]);
	useLayoutEffect2(() => {
		const styles = stylesRef.current;
		const wasPresent = prevPresentRef.current;
		if (wasPresent !== present) {
			const prevAnimationName = prevAnimationNameRef.current;
			const currentAnimationName = getAnimationName(styles);
			if (present) send("MOUNT");
			else if (currentAnimationName === "none" || styles?.display === "none") send("UNMOUNT");
			else if (wasPresent && prevAnimationName !== currentAnimationName) send("ANIMATION_OUT");
			else send("UNMOUNT");
			prevPresentRef.current = present;
		}
	}, [present, send]);
	useLayoutEffect2(() => {
		if (node) {
			const handleAnimationEnd = (event) => {
				const isCurrentAnimation = getAnimationName(stylesRef.current).includes(event.animationName);
				if (event.target === node && isCurrentAnimation) import_react_dom.flushSync(() => send("ANIMATION_END"));
			};
			const handleAnimationStart = (event) => {
				if (event.target === node) prevAnimationNameRef.current = getAnimationName(stylesRef.current);
			};
			node.addEventListener("animationstart", handleAnimationStart);
			node.addEventListener("animationcancel", handleAnimationEnd);
			node.addEventListener("animationend", handleAnimationEnd);
			return () => {
				node.removeEventListener("animationstart", handleAnimationStart);
				node.removeEventListener("animationcancel", handleAnimationEnd);
				node.removeEventListener("animationend", handleAnimationEnd);
			};
		} else send("ANIMATION_END");
	}, [node, send]);
	return {
		isPresent: ["mounted", "unmountSuspended"].includes(state),
		ref: import_react$6.useCallback((node2) => {
			if (node2) stylesRef.current = getComputedStyle(node2);
			setNode(node2);
		}, [])
	};
}
function getAnimationName(styles) {
	return styles?.animationName || "none";
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
var import_react$6, import_react_dom, import_react$7, Presence;
var init_dist$5 = __esmMin((() => {
	import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	init_dist$9();
	init_dist$6();
	import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
	Presence = (props) => {
		const { present, children } = props;
		const presence = usePresence(present);
		const child = typeof children === "function" ? children({ present: presence.isPresent }) : import_react$6.Children.only(children);
		const ref = useComposedRefs(presence.ref, getElementRef(child));
		return typeof children === "function" || presence.isPresent ? import_react$6.cloneElement(child, { ref }) : null;
	};
	Presence.displayName = "Presence";
}));
//#endregion
//#region ../node_modules/@radix-ui/react-context/dist/index.mjs
function createContextScope(scopeName, createContextScopeDeps = []) {
	let defaultContexts = [];
	function createContext3(rootComponentName, defaultContext) {
		const BaseContext = import_react$5.createContext(defaultContext);
		const index = defaultContexts.length;
		defaultContexts = [...defaultContexts, defaultContext];
		function Provider(props) {
			const { scope, children, ...context } = props;
			const Context = scope?.[scopeName][index] || BaseContext;
			const value = import_react$5.useMemo(() => context, Object.values(context));
			return /* @__PURE__ */ (0, import_jsx_runtime$2.jsx)(Context.Provider, {
				value,
				children
			});
		}
		function useContext2(consumerName, scope) {
			const Context = scope?.[scopeName][index] || BaseContext;
			const context = import_react$5.useContext(Context);
			if (context) return context;
			if (defaultContext !== void 0) return defaultContext;
			throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
		}
		Provider.displayName = rootComponentName + "Provider";
		return [Provider, useContext2];
	}
	const createScope = () => {
		const scopeContexts = defaultContexts.map((defaultContext) => {
			return import_react$5.createContext(defaultContext);
		});
		return function useScope(scope) {
			const contexts = scope?.[scopeName] || scopeContexts;
			return import_react$5.useMemo(() => ({ [`__scope${scopeName}`]: {
				...scope,
				[scopeName]: contexts
			} }), [scope, contexts]);
		};
	};
	createScope.scopeName = scopeName;
	return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
	const baseScope = scopes[0];
	if (scopes.length === 1) return baseScope;
	const createScope = () => {
		const scopeHooks = scopes.map((createScope2) => ({
			useScope: createScope2(),
			scopeName: createScope2.scopeName
		}));
		return function useComposedScopes(overrideScopes) {
			const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
				const currentScope = useScope(overrideScopes)[`__scope${scopeName}`];
				return {
					...nextScopes2,
					...currentScope
				};
			}, {});
			return import_react$5.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
		};
	};
	createScope.scopeName = baseScope.scopeName;
	return createScope;
}
var import_react$5, import_jsx_runtime$2;
var init_dist$4 = __esmMin((() => {
	import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime$2 = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
}));
//#endregion
//#region ../node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
function useCallbackRef(callback) {
	const callbackRef = import_react$4.useRef(callback);
	import_react$4.useEffect(() => {
		callbackRef.current = callback;
	});
	return import_react$4.useMemo(() => (...args) => callbackRef.current?.(...args), []);
}
var import_react$4;
var init_dist$3 = __esmMin((() => {
	import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../node_modules/@radix-ui/react-direction/dist/index.mjs
function useDirection(localDir) {
	const globalDir = import_react$3.useContext(DirectionContext);
	return localDir || globalDir || "ltr";
}
var import_react$3, DirectionContext;
var init_dist$2 = __esmMin((() => {
	import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
	require_jsx_runtime();
	DirectionContext = import_react$3.createContext(void 0);
}));
//#endregion
//#region ../node_modules/@radix-ui/primitive/dist/index.mjs
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
	return function handleEvent(event) {
		originalEventHandler?.(event);
		if (checkForDefaultPrevented === false || !event.defaultPrevented) return ourEventHandler?.(event);
	};
}
var init_dist$1 = __esmMin((() => {}));
//#endregion
//#region ../node_modules/@radix-ui/react-scroll-area/dist/index.mjs
function useStateMachine(initialState, machine) {
	return import_react$2.useReducer((state, event) => {
		return machine[state][event] ?? state;
	}, initialState);
}
function toInt(value) {
	return value ? parseInt(value, 10) : 0;
}
function getThumbRatio(viewportSize, contentSize) {
	const ratio = viewportSize / contentSize;
	return isNaN(ratio) ? 0 : ratio;
}
function getThumbSize(sizes) {
	const ratio = getThumbRatio(sizes.viewport, sizes.content);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
	return Math.max(thumbSize, 18);
}
function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
	const thumbSizePx = getThumbSize(sizes);
	const thumbCenter = thumbSizePx / 2;
	const offset = pointerOffset || thumbCenter;
	const thumbOffsetFromEnd = thumbSizePx - offset;
	const minPointerPos = sizes.scrollbar.paddingStart + offset;
	const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
	const maxScrollPos = sizes.content - sizes.viewport;
	const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
	return linearScale([minPointerPos, maxPointerPos], scrollRange)(pointerPos);
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
	const thumbSizePx = getThumbSize(sizes);
	const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
	const scrollbar = sizes.scrollbar.size - scrollbarPadding;
	const maxScrollPos = sizes.content - sizes.viewport;
	const maxThumbPos = scrollbar - thumbSizePx;
	const scrollWithoutMomentum = clamp(scrollPos, dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0]);
	return linearScale([0, maxScrollPos], [0, maxThumbPos])(scrollWithoutMomentum);
}
function linearScale(input, output) {
	return (value) => {
		if (input[0] === input[1] || output[0] === output[1]) return output[0];
		const ratio = (output[1] - output[0]) / (input[1] - input[0]);
		return output[0] + ratio * (value - input[0]);
	};
}
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
	return scrollPos > 0 && scrollPos < maxScrollPos;
}
function useDebounceCallback(callback, delay) {
	const handleCallback = useCallbackRef(callback);
	const debounceTimerRef = import_react$1.useRef(0);
	import_react$1.useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
	return import_react$1.useCallback(() => {
		window.clearTimeout(debounceTimerRef.current);
		debounceTimerRef.current = window.setTimeout(handleCallback, delay);
	}, [handleCallback, delay]);
}
function useResizeObserver(element, onResize) {
	const handleResize = useCallbackRef(onResize);
	useLayoutEffect2(() => {
		let rAF = 0;
		if (element) {
			const resizeObserver = new ResizeObserver(() => {
				cancelAnimationFrame(rAF);
				rAF = window.requestAnimationFrame(handleResize);
			});
			resizeObserver.observe(element);
			return () => {
				window.cancelAnimationFrame(rAF);
				resizeObserver.unobserve(element);
			};
		}
	}, [element, handleResize]);
}
function getSubtree(options, content) {
	const { asChild, children } = options;
	if (!asChild) return typeof content === "function" ? content(children) : content;
	const firstChild = import_react$1.Children.only(children);
	return import_react$1.cloneElement(firstChild, { children: typeof content === "function" ? content(firstChild.props.children) : content });
}
var import_react$1, import_react$2, import_jsx_runtime, SCROLL_AREA_NAME, createScrollAreaContext, createScrollAreaScope, ScrollAreaProvider, useScrollAreaContext, ScrollArea, VIEWPORT_NAME, ScrollAreaViewport, SCROLLBAR_NAME, ScrollAreaScrollbar, ScrollAreaScrollbarHover, ScrollAreaScrollbarScroll, ScrollAreaScrollbarAuto, ScrollAreaScrollbarVisible, ScrollAreaScrollbarX, ScrollAreaScrollbarY, ScrollbarProvider, useScrollbarContext, ScrollAreaScrollbarImpl, THUMB_NAME, ScrollAreaThumb, ScrollAreaThumbImpl, CORNER_NAME, ScrollAreaCorner, ScrollAreaCornerImpl, addUnlinkedScrollListener, Root, Viewport, Scrollbar, Thumb, Corner;
var init_dist = __esmMin((() => {
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_dist$7();
	init_dist$5();
	init_dist$4();
	init_dist$9();
	init_dist$3();
	init_dist$2();
	init_dist$6();
	init_dist$10();
	init_dist$1();
	import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime(), 1);
	SCROLL_AREA_NAME = "ScrollArea";
	[createScrollAreaContext, createScrollAreaScope] = createContextScope(SCROLL_AREA_NAME);
	[ScrollAreaProvider, useScrollAreaContext] = createScrollAreaContext(SCROLL_AREA_NAME);
	ScrollArea = import_react$1.forwardRef((props, forwardedRef) => {
		const { __scopeScrollArea, type = "hover", dir, scrollHideDelay = 600, ...scrollAreaProps } = props;
		const [scrollArea, setScrollArea] = import_react$1.useState(null);
		const [viewport, setViewport] = import_react$1.useState(null);
		const [content, setContent] = import_react$1.useState(null);
		const [scrollbarX, setScrollbarX] = import_react$1.useState(null);
		const [scrollbarY, setScrollbarY] = import_react$1.useState(null);
		const [cornerWidth, setCornerWidth] = import_react$1.useState(0);
		const [cornerHeight, setCornerHeight] = import_react$1.useState(0);
		const [scrollbarXEnabled, setScrollbarXEnabled] = import_react$1.useState(false);
		const [scrollbarYEnabled, setScrollbarYEnabled] = import_react$1.useState(false);
		const composedRefs = useComposedRefs(forwardedRef, (node) => setScrollArea(node));
		const direction = useDirection(dir);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaProvider, {
			scope: __scopeScrollArea,
			type,
			dir: direction,
			scrollHideDelay,
			scrollArea,
			viewport,
			onViewportChange: setViewport,
			content,
			onContentChange: setContent,
			scrollbarX,
			onScrollbarXChange: setScrollbarX,
			scrollbarXEnabled,
			onScrollbarXEnabledChange: setScrollbarXEnabled,
			scrollbarY,
			onScrollbarYChange: setScrollbarY,
			scrollbarYEnabled,
			onScrollbarYEnabledChange: setScrollbarYEnabled,
			onCornerWidthChange: setCornerWidth,
			onCornerHeightChange: setCornerHeight,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				dir: direction,
				...scrollAreaProps,
				ref: composedRefs,
				style: {
					position: "relative",
					["--radix-scroll-area-corner-width"]: cornerWidth + "px",
					["--radix-scroll-area-corner-height"]: cornerHeight + "px",
					...props.style
				}
			})
		});
	});
	ScrollArea.displayName = SCROLL_AREA_NAME;
	VIEWPORT_NAME = "ScrollAreaViewport";
	ScrollAreaViewport = import_react$1.forwardRef((props, forwardedRef) => {
		const { __scopeScrollArea, children, asChild, nonce, ...viewportProps } = props;
		const context = useScrollAreaContext(VIEWPORT_NAME, __scopeScrollArea);
		const composedRefs = useComposedRefs(forwardedRef, import_react$1.useRef(null), context.onViewportChange);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", {
			dangerouslySetInnerHTML: { __html: `
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
` },
			nonce
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-radix-scroll-area-viewport": "",
			...viewportProps,
			asChild,
			ref: composedRefs,
			style: {
				/**
				* We don't support `visible` because the intention is to have at least one scrollbar
				* if this component is used and `visible` will behave like `auto` in that case
				* https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
				*
				* We don't handle `auto` because the intention is for the native implementation
				* to be hidden if using this component. We just want to ensure the node is scrollable
				* so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
				* the browser from having to work out whether to render native scrollbars or not,
				* we tell it to with the intention of hiding them in CSS.
				*/
				overflowX: context.scrollbarXEnabled ? "scroll" : "hidden",
				overflowY: context.scrollbarYEnabled ? "scroll" : "hidden",
				...props.style
			},
			children: getSubtree({
				asChild,
				children
			}, (children2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-radix-scroll-area-content": "",
				ref: context.onContentChange,
				style: { minWidth: context.scrollbarXEnabled ? "fit-content" : void 0 },
				children: children2
			}))
		})] });
	});
	ScrollAreaViewport.displayName = VIEWPORT_NAME;
	SCROLLBAR_NAME = "ScrollAreaScrollbar";
	ScrollAreaScrollbar = import_react$1.forwardRef((props, forwardedRef) => {
		const { forceMount, ...scrollbarProps } = props;
		const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
		const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
		const isHorizontal = props.orientation === "horizontal";
		import_react$1.useEffect(() => {
			isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
			return () => {
				isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
			};
		}, [
			isHorizontal,
			onScrollbarXEnabledChange,
			onScrollbarYEnabledChange
		]);
		return context.type === "hover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarHover, {
			...scrollbarProps,
			ref: forwardedRef,
			forceMount
		}) : context.type === "scroll" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarScroll, {
			...scrollbarProps,
			ref: forwardedRef,
			forceMount
		}) : context.type === "auto" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
			...scrollbarProps,
			ref: forwardedRef,
			forceMount
		}) : context.type === "always" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
			...scrollbarProps,
			ref: forwardedRef
		}) : null;
	});
	ScrollAreaScrollbar.displayName = SCROLLBAR_NAME;
	ScrollAreaScrollbarHover = import_react$1.forwardRef((props, forwardedRef) => {
		const { forceMount, ...scrollbarProps } = props;
		const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
		const [visible, setVisible] = import_react$1.useState(false);
		import_react$1.useEffect(() => {
			const scrollArea = context.scrollArea;
			let hideTimer = 0;
			if (scrollArea) {
				const handlePointerEnter = () => {
					window.clearTimeout(hideTimer);
					setVisible(true);
				};
				const handlePointerLeave = () => {
					hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
				};
				scrollArea.addEventListener("pointerenter", handlePointerEnter);
				scrollArea.addEventListener("pointerleave", handlePointerLeave);
				return () => {
					window.clearTimeout(hideTimer);
					scrollArea.removeEventListener("pointerenter", handlePointerEnter);
					scrollArea.removeEventListener("pointerleave", handlePointerLeave);
				};
			}
		}, [context.scrollArea, context.scrollHideDelay]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || visible,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarAuto, {
				"data-state": visible ? "visible" : "hidden",
				...scrollbarProps,
				ref: forwardedRef
			})
		});
	});
	ScrollAreaScrollbarScroll = import_react$1.forwardRef((props, forwardedRef) => {
		const { forceMount, ...scrollbarProps } = props;
		const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
		const isHorizontal = props.orientation === "horizontal";
		const debounceScrollEnd = useDebounceCallback(() => send("SCROLL_END"), 100);
		const [state, send] = useStateMachine("hidden", {
			hidden: { SCROLL: "scrolling" },
			scrolling: {
				SCROLL_END: "idle",
				POINTER_ENTER: "interacting"
			},
			interacting: {
				SCROLL: "interacting",
				POINTER_LEAVE: "idle"
			},
			idle: {
				HIDE: "hidden",
				SCROLL: "scrolling",
				POINTER_ENTER: "interacting"
			}
		});
		import_react$1.useEffect(() => {
			if (state === "idle") {
				const hideTimer = window.setTimeout(() => send("HIDE"), context.scrollHideDelay);
				return () => window.clearTimeout(hideTimer);
			}
		}, [
			state,
			context.scrollHideDelay,
			send
		]);
		import_react$1.useEffect(() => {
			const viewport = context.viewport;
			const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
			if (viewport) {
				let prevScrollPos = viewport[scrollDirection];
				const handleScroll = () => {
					const scrollPos = viewport[scrollDirection];
					if (prevScrollPos !== scrollPos) {
						send("SCROLL");
						debounceScrollEnd();
					}
					prevScrollPos = scrollPos;
				};
				viewport.addEventListener("scroll", handleScroll);
				return () => viewport.removeEventListener("scroll", handleScroll);
			}
		}, [
			context.viewport,
			isHorizontal,
			send,
			debounceScrollEnd
		]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || state !== "hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
				"data-state": state === "hidden" ? "hidden" : "visible",
				...scrollbarProps,
				ref: forwardedRef,
				onPointerEnter: composeEventHandlers(props.onPointerEnter, () => send("POINTER_ENTER")),
				onPointerLeave: composeEventHandlers(props.onPointerLeave, () => send("POINTER_LEAVE"))
			})
		});
	});
	ScrollAreaScrollbarAuto = import_react$1.forwardRef((props, forwardedRef) => {
		const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
		const { forceMount, ...scrollbarProps } = props;
		const [visible, setVisible] = import_react$1.useState(false);
		const isHorizontal = props.orientation === "horizontal";
		const handleResize = useDebounceCallback(() => {
			if (context.viewport) {
				const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
				const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
				setVisible(isHorizontal ? isOverflowX : isOverflowY);
			}
		}, 10);
		useResizeObserver(context.viewport, handleResize);
		useResizeObserver(context.content, handleResize);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || visible,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarVisible, {
				"data-state": visible ? "visible" : "hidden",
				...scrollbarProps,
				ref: forwardedRef
			})
		});
	});
	ScrollAreaScrollbarVisible = import_react$1.forwardRef((props, forwardedRef) => {
		const { orientation = "vertical", ...scrollbarProps } = props;
		const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
		const thumbRef = import_react$1.useRef(null);
		const pointerOffsetRef = import_react$1.useRef(0);
		const [sizes, setSizes] = import_react$1.useState({
			content: 0,
			viewport: 0,
			scrollbar: {
				size: 0,
				paddingStart: 0,
				paddingEnd: 0
			}
		});
		const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
		const commonProps = {
			...scrollbarProps,
			sizes,
			onSizesChange: setSizes,
			hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
			onThumbChange: (thumb) => thumbRef.current = thumb,
			onThumbPointerUp: () => pointerOffsetRef.current = 0,
			onThumbPointerDown: (pointerPos) => pointerOffsetRef.current = pointerPos
		};
		function getScrollPosition(pointerPos, dir) {
			return getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, dir);
		}
		if (orientation === "horizontal") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarX, {
			...commonProps,
			ref: forwardedRef,
			onThumbPositionChange: () => {
				if (context.viewport && thumbRef.current) {
					const scrollPos = context.viewport.scrollLeft;
					const offset = getThumbOffsetFromScroll(scrollPos, sizes, context.dir);
					thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
				}
			},
			onWheelScroll: (scrollPos) => {
				if (context.viewport) context.viewport.scrollLeft = scrollPos;
			},
			onDragScroll: (pointerPos) => {
				if (context.viewport) context.viewport.scrollLeft = getScrollPosition(pointerPos, context.dir);
			}
		});
		if (orientation === "vertical") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarY, {
			...commonProps,
			ref: forwardedRef,
			onThumbPositionChange: () => {
				if (context.viewport && thumbRef.current) {
					const scrollPos = context.viewport.scrollTop;
					const offset = getThumbOffsetFromScroll(scrollPos, sizes);
					thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
				}
			},
			onWheelScroll: (scrollPos) => {
				if (context.viewport) context.viewport.scrollTop = scrollPos;
			},
			onDragScroll: (pointerPos) => {
				if (context.viewport) context.viewport.scrollTop = getScrollPosition(pointerPos);
			}
		});
		return null;
	});
	ScrollAreaScrollbarX = import_react$1.forwardRef((props, forwardedRef) => {
		const { sizes, onSizesChange, ...scrollbarProps } = props;
		const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
		const [computedStyle, setComputedStyle] = import_react$1.useState();
		const ref = import_react$1.useRef(null);
		const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarXChange);
		import_react$1.useEffect(() => {
			if (ref.current) setComputedStyle(getComputedStyle(ref.current));
		}, [ref]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
			"data-orientation": "horizontal",
			...scrollbarProps,
			ref: composeRefs,
			sizes,
			style: {
				bottom: 0,
				left: context.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
				right: context.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
				["--radix-scroll-area-thumb-width"]: getThumbSize(sizes) + "px",
				...props.style
			},
			onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
			onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
			onWheelScroll: (event, maxScrollPos) => {
				if (context.viewport) {
					const scrollPos = context.viewport.scrollLeft + event.deltaX;
					props.onWheelScroll(scrollPos);
					if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
				}
			},
			onResize: () => {
				if (ref.current && context.viewport && computedStyle) onSizesChange({
					content: context.viewport.scrollWidth,
					viewport: context.viewport.offsetWidth,
					scrollbar: {
						size: ref.current.clientWidth,
						paddingStart: toInt(computedStyle.paddingLeft),
						paddingEnd: toInt(computedStyle.paddingRight)
					}
				});
			}
		});
	});
	ScrollAreaScrollbarY = import_react$1.forwardRef((props, forwardedRef) => {
		const { sizes, onSizesChange, ...scrollbarProps } = props;
		const context = useScrollAreaContext(SCROLLBAR_NAME, props.__scopeScrollArea);
		const [computedStyle, setComputedStyle] = import_react$1.useState();
		const ref = import_react$1.useRef(null);
		const composeRefs = useComposedRefs(forwardedRef, ref, context.onScrollbarYChange);
		import_react$1.useEffect(() => {
			if (ref.current) setComputedStyle(getComputedStyle(ref.current));
		}, [ref]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaScrollbarImpl, {
			"data-orientation": "vertical",
			...scrollbarProps,
			ref: composeRefs,
			sizes,
			style: {
				top: 0,
				right: context.dir === "ltr" ? 0 : void 0,
				left: context.dir === "rtl" ? 0 : void 0,
				bottom: "var(--radix-scroll-area-corner-height)",
				["--radix-scroll-area-thumb-height"]: getThumbSize(sizes) + "px",
				...props.style
			},
			onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
			onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
			onWheelScroll: (event, maxScrollPos) => {
				if (context.viewport) {
					const scrollPos = context.viewport.scrollTop + event.deltaY;
					props.onWheelScroll(scrollPos);
					if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) event.preventDefault();
				}
			},
			onResize: () => {
				if (ref.current && context.viewport && computedStyle) onSizesChange({
					content: context.viewport.scrollHeight,
					viewport: context.viewport.offsetHeight,
					scrollbar: {
						size: ref.current.clientHeight,
						paddingStart: toInt(computedStyle.paddingTop),
						paddingEnd: toInt(computedStyle.paddingBottom)
					}
				});
			}
		});
	});
	[ScrollbarProvider, useScrollbarContext] = createScrollAreaContext(SCROLLBAR_NAME);
	ScrollAreaScrollbarImpl = import_react$1.forwardRef((props, forwardedRef) => {
		const { __scopeScrollArea, sizes, hasThumb, onThumbChange, onThumbPointerUp, onThumbPointerDown, onThumbPositionChange, onDragScroll, onWheelScroll, onResize, ...scrollbarProps } = props;
		const context = useScrollAreaContext(SCROLLBAR_NAME, __scopeScrollArea);
		const [scrollbar, setScrollbar] = import_react$1.useState(null);
		const composeRefs = useComposedRefs(forwardedRef, (node) => setScrollbar(node));
		const rectRef = import_react$1.useRef(null);
		const prevWebkitUserSelectRef = import_react$1.useRef("");
		const viewport = context.viewport;
		const maxScrollPos = sizes.content - sizes.viewport;
		const handleWheelScroll = useCallbackRef(onWheelScroll);
		const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
		const handleResize = useDebounceCallback(onResize, 10);
		function handleDragScroll(event) {
			if (rectRef.current) {
				const x = event.clientX - rectRef.current.left;
				const y = event.clientY - rectRef.current.top;
				onDragScroll({
					x,
					y
				});
			}
		}
		import_react$1.useEffect(() => {
			const handleWheel = (event) => {
				const element = event.target;
				if (scrollbar?.contains(element)) handleWheelScroll(event, maxScrollPos);
			};
			document.addEventListener("wheel", handleWheel, { passive: false });
			return () => document.removeEventListener("wheel", handleWheel, { passive: false });
		}, [
			viewport,
			scrollbar,
			maxScrollPos,
			handleWheelScroll
		]);
		import_react$1.useEffect(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
		useResizeObserver(scrollbar, handleResize);
		useResizeObserver(context.content, handleResize);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollbarProvider, {
			scope: __scopeScrollArea,
			scrollbar,
			hasThumb,
			onThumbChange: useCallbackRef(onThumbChange),
			onThumbPointerUp: useCallbackRef(onThumbPointerUp),
			onThumbPositionChange: handleThumbPositionChange,
			onThumbPointerDown: useCallbackRef(onThumbPointerDown),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
				...scrollbarProps,
				ref: composeRefs,
				style: {
					position: "absolute",
					...scrollbarProps.style
				},
				onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
					if (event.button === 0) {
						event.target.setPointerCapture(event.pointerId);
						rectRef.current = scrollbar.getBoundingClientRect();
						prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
						document.body.style.webkitUserSelect = "none";
						if (context.viewport) context.viewport.style.scrollBehavior = "auto";
						handleDragScroll(event);
					}
				}),
				onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
				onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
					const element = event.target;
					if (element.hasPointerCapture(event.pointerId)) element.releasePointerCapture(event.pointerId);
					document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
					if (context.viewport) context.viewport.style.scrollBehavior = "";
					rectRef.current = null;
				})
			})
		});
	});
	THUMB_NAME = "ScrollAreaThumb";
	ScrollAreaThumb = import_react$1.forwardRef((props, forwardedRef) => {
		const { forceMount, ...thumbProps } = props;
		const scrollbarContext = useScrollbarContext(THUMB_NAME, props.__scopeScrollArea);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Presence, {
			present: forceMount || scrollbarContext.hasThumb,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaThumbImpl, {
				ref: forwardedRef,
				...thumbProps
			})
		});
	});
	ScrollAreaThumbImpl = import_react$1.forwardRef((props, forwardedRef) => {
		const { __scopeScrollArea, style, ...thumbProps } = props;
		const scrollAreaContext = useScrollAreaContext(THUMB_NAME, __scopeScrollArea);
		const scrollbarContext = useScrollbarContext(THUMB_NAME, __scopeScrollArea);
		const { onThumbPositionChange } = scrollbarContext;
		const composedRef = useComposedRefs(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
		const removeUnlinkedScrollListenerRef = import_react$1.useRef();
		const debounceScrollEnd = useDebounceCallback(() => {
			if (removeUnlinkedScrollListenerRef.current) {
				removeUnlinkedScrollListenerRef.current();
				removeUnlinkedScrollListenerRef.current = void 0;
			}
		}, 100);
		import_react$1.useEffect(() => {
			const viewport = scrollAreaContext.viewport;
			if (viewport) {
				const handleScroll = () => {
					debounceScrollEnd();
					if (!removeUnlinkedScrollListenerRef.current) {
						const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
						removeUnlinkedScrollListenerRef.current = listener;
						onThumbPositionChange();
					}
				};
				onThumbPositionChange();
				viewport.addEventListener("scroll", handleScroll);
				return () => viewport.removeEventListener("scroll", handleScroll);
			}
		}, [
			scrollAreaContext.viewport,
			debounceScrollEnd,
			onThumbPositionChange
		]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			"data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
			...thumbProps,
			ref: composedRef,
			style: {
				width: "var(--radix-scroll-area-thumb-width)",
				height: "var(--radix-scroll-area-thumb-height)",
				...style
			},
			onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
				const thumbRect = event.target.getBoundingClientRect();
				const x = event.clientX - thumbRect.left;
				const y = event.clientY - thumbRect.top;
				scrollbarContext.onThumbPointerDown({
					x,
					y
				});
			}),
			onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
		});
	});
	ScrollAreaThumb.displayName = THUMB_NAME;
	CORNER_NAME = "ScrollAreaCorner";
	ScrollAreaCorner = import_react$1.forwardRef((props, forwardedRef) => {
		const context = useScrollAreaContext(CORNER_NAME, props.__scopeScrollArea);
		const hasBothScrollbarsVisible = Boolean(context.scrollbarX && context.scrollbarY);
		return context.type !== "scroll" && hasBothScrollbarsVisible ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollAreaCornerImpl, {
			...props,
			ref: forwardedRef
		}) : null;
	});
	ScrollAreaCorner.displayName = CORNER_NAME;
	ScrollAreaCornerImpl = import_react$1.forwardRef((props, forwardedRef) => {
		const { __scopeScrollArea, ...cornerProps } = props;
		const context = useScrollAreaContext(CORNER_NAME, __scopeScrollArea);
		const [width, setWidth] = import_react$1.useState(0);
		const [height, setHeight] = import_react$1.useState(0);
		const hasSize = Boolean(width && height);
		useResizeObserver(context.scrollbarX, () => {
			const height2 = context.scrollbarX?.offsetHeight || 0;
			context.onCornerHeightChange(height2);
			setHeight(height2);
		});
		useResizeObserver(context.scrollbarY, () => {
			const width2 = context.scrollbarY?.offsetWidth || 0;
			context.onCornerWidthChange(width2);
			setWidth(width2);
		});
		return hasSize ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Primitive.div, {
			...cornerProps,
			ref: forwardedRef,
			style: {
				width,
				height,
				position: "absolute",
				right: context.dir === "ltr" ? 0 : void 0,
				left: context.dir === "rtl" ? 0 : void 0,
				bottom: 0,
				...props.style
			}
		}) : null;
	});
	addUnlinkedScrollListener = (node, handler = () => {}) => {
		let prevPosition = {
			left: node.scrollLeft,
			top: node.scrollTop
		};
		let rAF = 0;
		(function loop() {
			const position = {
				left: node.scrollLeft,
				top: node.scrollTop
			};
			const isHorizontalScroll = prevPosition.left !== position.left;
			const isVerticalScroll = prevPosition.top !== position.top;
			if (isHorizontalScroll || isVerticalScroll) handler();
			prevPosition = position;
			rAF = window.requestAnimationFrame(loop);
		})();
		return () => window.cancelAnimationFrame(rAF);
	};
	Root = ScrollArea;
	Viewport = ScrollAreaViewport;
	Scrollbar = ScrollAreaScrollbar;
	Thumb = ScrollAreaThumb;
	Corner = ScrollAreaCorner;
}));
//#endregion
//#region ../../scripts/build/utils/use-sync-external-store-shim.ts
var import_react;
var init_use_sync_external_store_shim = __esmMin((() => {
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
export { Scrollbar as a, init_dist as c, Root as i, init_use_sync_external_store_shim as n, Thumb as o, Corner as r, Viewport as s, import_react as t };
