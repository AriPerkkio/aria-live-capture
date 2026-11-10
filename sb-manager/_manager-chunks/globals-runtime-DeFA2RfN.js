import { a as __toESM, n as __esmMin } from "./globals-runtime-XrdeG17s.js";
import { g as $a747a10fe70a57da$export$c17fa47878dc55b6, m as $b27c684a33948c64$export$2f817fcdc4b89ae0, p as init_dist } from "./globals-runtime-C8r9nrt8.js";
import { J as $240e9101ba2842f5$export$7d15b64cf5a3a4c4, at as init_flags, ct as require_react, ot as $6a20a7989e6c817a$export$98658e8c59125e6a, q as init_number } from "./globals-runtime-DpF3al7J.js";
import { $ as $b7115c395c64f7b5$export$4debdb1a3f0fa79e, A as $901761b40e390936$export$2bb74740c4e19def, At as init_isFocusable, Bt as init_DOMFunctions, C as $8b2399d051d06d4c$export$831c820ad60f9d12, Ct as $2add3ce32c6007eb$export$e1865c3bedcd822b, D as init_keyboard, Dt as init_useLayoutEffect, E as $bb39c0fc1c19b34c$export$c57958e35f31ed73, Et as $c4867b2f328c2698$export$e5c5a5f917a5871c, F as init_VisuallyHidden, Ft as $23f2114a1b82827e$export$4282f70798064fe0, Gt as $d447af545b77c9f1$export$f531f92e2a15358f, H as $48a7d519b337145d$export$4eaf04e54aa8eed6, Ht as $d447af545b77c9f1$export$af51f0f06c0f328a, I as $e8ac3c3f5d4bae7f$export$d6875122194c7b44, It as $23f2114a1b82827e$export$b4f377a2b6254582, J as init_useResizeObserver, Kt as init_domHelpers, L as init_useLabels, Lt as $23f2114a1b82827e$export$cd4e5573fbe2b576, M as $2b2d34ff061957fb$export$2b85b721e524d74b, Mt as init_focusWithoutScrolling, N as init_getNonce, Nt as $654b97e09f2a30c1$export$4d0f8be8b12a7ef6, O as $3578607fe3d4b096$export$cfa2225e87938781, Ot as $3b8b240c1bf84ab9$export$4c063cf1350e6fed, P as $ea3928288112382f$export$439d29a4e110a164, Pt as init_ShadowTreeWalker, Rt as $23f2114a1b82827e$export$da7af4355d792141, S as $8b2399d051d06d4c$export$447a38995de2c711, St as $2add3ce32c6007eb$export$a11b0059900ceec8, T as $bb39c0fc1c19b34c$export$16792effe837dba3, Tt as init_platform, U as init_useGlobalListeners, Ut as $d447af545b77c9f1$export$b204af158042fbac, Vt as $d447af545b77c9f1$export$37a5fde709c1db82, Wt as $d447af545b77c9f1$export$f21a1ffae260145a, X as init_useEffectEvent, Y as $fe16bffc7a557bf0$export$7f54fc3180508a52, _ as init_scrollIntoView, _t as $b5c62b033c25b96d$export$60278871457622de, at as $4064df0d6f9620e1$export$c9058316764c140e, b as $600b3cf69ae46262$export$90fc3a17d93f704c, bt as $2add3ce32c6007eb$export$78551043582a6a98, ct as init_useId, dt as $081cb5757e08788e$export$24490316f764c430, et as init_useSyncRef, ft as init_runAfterTransition, g as $51a3e22a5186a962$export$c826860796309d1b, gt as $b5c62b033c25b96d$export$29bf1b5f2c56cf63, h as $51a3e22a5186a962$export$53a0910f038337bd, ht as init_openLink, it as init_mergeProps, j as init_isScrollable, jt as $1969ac565cfec8d0$export$de79e2c695e052f3, k as init_getScrollParent, kt as $3b8b240c1bf84ab9$export$bebd5a1431fec25d, lt as $a4e76a5424781910$export$e08e3b67e392101e, m as init_useUpdateLayoutEffect, mt as $caaf0dd3060ed57c$export$9a302a45f65d0572, nt as init_useObjectRef, ot as init_mergeRefs, p as $a475cdc2445827b5$export$72ef708ab07251f1, pt as $caaf0dd3060ed57c$export$95185d699e05d4d7, q as $970072cf4b13fde3$export$683480f191c0e3ea, rt as $bbaa08b3cd72f041$export$9d1611c77c2fe928, st as $390e54f620492c70$export$f680877a34711e37, tt as $03e8ab2d84d7657a$export$4338b53315abf666, ut as init_chain, v as $121970af65029459$export$f8aeda7b10753fa1, vt as init_isVirtualEvent, w as init_constants, wt as $2add3ce32c6007eb$export$fedb369cb70207f1, x as init_useEvent, xt as $2add3ce32c6007eb$export$9ac100e40613ea10, y as init_useDescription, yt as $2add3ce32c6007eb$export$6446a186d09e379e, zt as $23f2114a1b82827e$export$e58f029f0fbfdb29 } from "./globals-runtime-Ch22TZ8K.js";
import { n as require_react_dom } from "./globals-runtime-DNgiu6EW.js";
import { n as init_use_sync_external_store_shim, t as import_react$35 } from "./globals-runtime-D9WDjgBY.js";
//#region ../../node_modules/react-aria/dist/private/interactions/utils.mjs
function $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent) {
	let event = nativeEvent;
	event.nativeEvent = nativeEvent;
	event.isDefaultPrevented = () => event.defaultPrevented;
	event.isPropagationStopped = () => event.cancelBubble;
	event.persist = () => {};
	return event;
}
function $a92dc41f639950be$export$c2b7abe5d61ec696(event, target) {
	Object.defineProperty(event, "target", { value: target });
	Object.defineProperty(event, "currentTarget", { value: target });
}
function $a92dc41f639950be$export$715c682d09d639cc(onBlur) {
	let stateRef = (0, import_react$34.useRef)({
		isFocused: false,
		observer: null
	});
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		const state = stateRef.current;
		return () => {
			if (state.observer) {
				state.observer.disconnect();
				state.observer = null;
			}
		};
	}, []);
	return (0, import_react$34.useCallback)((e) => {
		let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
			stateRef.current.isFocused = true;
			let target = eventTarget;
			let onBlurHandler = (e) => {
				stateRef.current.isFocused = false;
				if (target.disabled) {
					let event = $a92dc41f639950be$export$525bc4921d56d4a(e);
					onBlur?.(event);
				}
				if (stateRef.current.observer) {
					stateRef.current.observer.disconnect();
					stateRef.current.observer = null;
				}
			};
			target.addEventListener("focusout", onBlurHandler, { once: true });
			stateRef.current.observer = new MutationObserver(() => {
				if (stateRef.current.isFocused && target.disabled) {
					stateRef.current.observer?.disconnect();
					let relatedTargetEl = target === $23f2114a1b82827e$export$cd4e5573fbe2b576() ? null : $23f2114a1b82827e$export$cd4e5573fbe2b576();
					target.dispatchEvent(new FocusEvent("blur", { relatedTarget: relatedTargetEl }));
					target.dispatchEvent(new FocusEvent("focusout", {
						bubbles: true,
						relatedTarget: relatedTargetEl
					}));
				}
			});
			stateRef.current.observer.observe(target, {
				attributes: true,
				attributeFilter: ["disabled"]
			});
		}
	}, [onBlur]);
}
function $a92dc41f639950be$export$cabe61c495ee3649(target) {
	while (target && !$3b8b240c1bf84ab9$export$4c063cf1350e6fed(target, { skipVisibilityCheck: true })) target = target.parentElement;
	let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$f21a1ffae260145a(target).document);
	if (!activeElement || activeElement === target) return;
	let targetRoot = target?.getRootNode();
	let root = targetRoot != null && $d447af545b77c9f1$export$af51f0f06c0f328a(targetRoot) ? targetRoot : $d447af545b77c9f1$export$f21a1ffae260145a(target);
	let isFocusMovingToTarget = (focusTarget) => focusTarget === target || focusTarget != null && $23f2114a1b82827e$export$4282f70798064fe0(target, focusTarget);
	let isBlurFromActiveElement = (eventTarget) => eventTarget === activeElement || activeElement != null && eventTarget != null && $23f2114a1b82827e$export$4282f70798064fe0(activeElement, eventTarget);
	$a92dc41f639950be$export$fda7da73ab5d4c48 = true;
	let isRefocusing = false;
	let onBlur = (e) => {
		if (isBlurFromActiveElement($23f2114a1b82827e$export$e58f029f0fbfdb29(e)) || isRefocusing) e.stopImmediatePropagation();
	};
	let onFocusOut = (e) => {
		if (isBlurFromActiveElement($23f2114a1b82827e$export$e58f029f0fbfdb29(e)) || isRefocusing) {
			e.stopImmediatePropagation();
			if (!target && !isRefocusing) {
				isRefocusing = true;
				$1969ac565cfec8d0$export$de79e2c695e052f3(activeElement);
				cleanup();
			}
		}
	};
	let onFocus = (e) => {
		if (isFocusMovingToTarget($23f2114a1b82827e$export$e58f029f0fbfdb29(e)) || isRefocusing) e.stopImmediatePropagation();
	};
	let onFocusIn = (e) => {
		if (isFocusMovingToTarget($23f2114a1b82827e$export$e58f029f0fbfdb29(e)) || isRefocusing) {
			e.stopImmediatePropagation();
			if (!isRefocusing) {
				isRefocusing = true;
				$1969ac565cfec8d0$export$de79e2c695e052f3(activeElement);
				cleanup();
			}
		}
	};
	root.addEventListener("blur", onBlur, true);
	root.addEventListener("focusout", onFocusOut, true);
	root.addEventListener("focusin", onFocusIn, true);
	root.addEventListener("focus", onFocus, true);
	let cleanup = () => {
		cancelAnimationFrame(raf);
		root.removeEventListener("blur", onBlur, true);
		root.removeEventListener("focusout", onFocusOut, true);
		root.removeEventListener("focusin", onFocusIn, true);
		root.removeEventListener("focus", onFocus, true);
		$a92dc41f639950be$export$fda7da73ab5d4c48 = false;
		isRefocusing = false;
	};
	let raf = requestAnimationFrame(cleanup);
	return cleanup;
}
var import_react$34, $a92dc41f639950be$export$fda7da73ab5d4c48;
var init_utils$2 = __esmMin((() => {
	init_focusWithoutScrolling();
	init_DOMFunctions();
	init_domHelpers();
	init_isFocusable();
	init_useLayoutEffect();
	import_react$34 = /* @__PURE__ */ __toESM(require_react(), 1);
	$a92dc41f639950be$export$fda7da73ab5d4c48 = false;
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/ssr/SSRProvider.mjs
function $c7eafbbe1ea5834e$var$useCounter(isDisabled = false) {
	let ctx = (0, import_react$33.useContext)($c7eafbbe1ea5834e$var$SSRContext);
	let ref = (0, import_react$33.useRef)(null);
	if (ref.current === null && !isDisabled) {
		let currentOwner = import_react$33.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
		if (currentOwner) {
			let prevComponentValue = $c7eafbbe1ea5834e$var$componentIds.get(currentOwner);
			if (prevComponentValue == null) $c7eafbbe1ea5834e$var$componentIds.set(currentOwner, {
				id: ctx.current,
				state: currentOwner.memoizedState
			});
			else if (currentOwner.memoizedState !== prevComponentValue.state) {
				ctx.current = prevComponentValue.id;
				$c7eafbbe1ea5834e$var$componentIds.delete(currentOwner);
			}
		}
		ref.current = ++ctx.current;
	}
	return ref.current;
}
function $c7eafbbe1ea5834e$var$useLegacySSRSafeId(defaultId) {
	let ctx = (0, import_react$33.useContext)($c7eafbbe1ea5834e$var$SSRContext);
	let counter = $c7eafbbe1ea5834e$var$useCounter(!!defaultId);
	let prefix = `react-aria${ctx.prefix}`;
	return defaultId || `${prefix}-${counter}`;
}
function $c7eafbbe1ea5834e$var$useModernSSRSafeId(defaultId) {
	let id = import_react$33.useId();
	let [didSSR] = (0, import_react$33.useState)($c7eafbbe1ea5834e$export$535bd6ca7f90a273());
	let prefix = didSSR || false ? "react-aria" : `react-aria${$c7eafbbe1ea5834e$var$defaultContext.prefix}`;
	return defaultId || `${prefix}-${id}`;
}
function $c7eafbbe1ea5834e$var$getSnapshot() {
	return false;
}
function $c7eafbbe1ea5834e$var$getServerSnapshot() {
	return true;
}
function $c7eafbbe1ea5834e$var$subscribe(onStoreChange) {
	return () => {};
}
function $c7eafbbe1ea5834e$export$535bd6ca7f90a273() {
	if (typeof import_react$33.useSyncExternalStore === "function") return import_react$33.useSyncExternalStore($c7eafbbe1ea5834e$var$subscribe, $c7eafbbe1ea5834e$var$getSnapshot, $c7eafbbe1ea5834e$var$getServerSnapshot);
	return (0, import_react$33.useContext)($c7eafbbe1ea5834e$var$IsSSRContext);
}
var import_react$33, $c7eafbbe1ea5834e$var$defaultContext, $c7eafbbe1ea5834e$var$SSRContext, $c7eafbbe1ea5834e$var$IsSSRContext, $c7eafbbe1ea5834e$var$componentIds, $c7eafbbe1ea5834e$export$619500959fc48b26;
var init_SSRProvider = __esmMin((() => {
	import_react$33 = /* @__PURE__ */ __toESM(require_react(), 1);
	$c7eafbbe1ea5834e$var$defaultContext = {
		prefix: String(Math.round(Math.random() * 1e10)),
		current: 0
	};
	$c7eafbbe1ea5834e$var$SSRContext = /*#__PURE__*/ import_react$33.createContext($c7eafbbe1ea5834e$var$defaultContext);
	$c7eafbbe1ea5834e$var$IsSSRContext = /*#__PURE__*/ import_react$33.createContext(false);
	Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
	$c7eafbbe1ea5834e$var$componentIds = /* @__PURE__ */ new WeakMap();
	$c7eafbbe1ea5834e$export$619500959fc48b26 = typeof import_react$33.useId === "function" ? $c7eafbbe1ea5834e$var$useModernSSRSafeId : $c7eafbbe1ea5834e$var$useLegacySSRSafeId;
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
function $8f5a2122b0992be3$var$triggerChangeHandlers(modality, e) {
	for (let handler of $8f5a2122b0992be3$export$901e90a13c50a14e) handler(modality, e);
}
/**
* Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus
* styles visible.
*/ function $8f5a2122b0992be3$var$isValidKey(e) {
	return !(e.metaKey || !$2add3ce32c6007eb$export$9ac100e40613ea10() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $8f5a2122b0992be3$var$handleKeyboardEvent(e) {
	$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
	if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening && $8f5a2122b0992be3$var$isValidKey(e)) {
		$8f5a2122b0992be3$var$currentModality = "keyboard";
		$8f5a2122b0992be3$var$currentPointerType = "keyboard";
		$8f5a2122b0992be3$var$triggerChangeHandlers("keyboard", e);
	}
}
function $8f5a2122b0992be3$var$handlePointerEvent(e) {
	$8f5a2122b0992be3$var$currentModality = "pointer";
	$8f5a2122b0992be3$var$currentPointerType = "pointerType" in e ? e.pointerType : "mouse";
	if (e.type === "mousedown" || e.type === "pointerdown") {
		$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
		$8f5a2122b0992be3$var$triggerChangeHandlers("pointer", e);
	}
}
function $8f5a2122b0992be3$var$handleClickEvent(e) {
	if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening && $b5c62b033c25b96d$export$60278871457622de(e)) {
		$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
		$8f5a2122b0992be3$var$currentModality = "virtual";
		$8f5a2122b0992be3$var$currentPointerType = "virtual";
	}
}
function $8f5a2122b0992be3$var$handleFocusEvent(e) {
	if ($a92dc41f639950be$export$fda7da73ab5d4c48) return;
	let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
	let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(target);
	let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(target);
	if (target === ownerWindow) {
		$8f5a2122b0992be3$var$hasBlurredWindowRecently = true;
		return;
	}
	if (target === ownerDocument || !e.isTrusted) return;
	if (!$8f5a2122b0992be3$var$hasEventBeforeFocus && !$8f5a2122b0992be3$var$hasBlurredWindowRecently) {
		$8f5a2122b0992be3$var$currentModality = "virtual";
		$8f5a2122b0992be3$var$currentPointerType = "virtual";
		$8f5a2122b0992be3$var$triggerChangeHandlers("virtual", e);
	}
	$8f5a2122b0992be3$var$hasEventBeforeFocus = false;
	$8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
}
function $8f5a2122b0992be3$var$handleWindowBlur() {
	if ($a92dc41f639950be$export$fda7da73ab5d4c48) return;
	$8f5a2122b0992be3$var$hasEventBeforeFocus = false;
	$8f5a2122b0992be3$var$hasBlurredWindowRecently = true;
}
/**
* Setup global event listeners to control when keyboard focus style should be visible.
*/ function $8f5a2122b0992be3$var$setupGlobalFocusEvents(element) {
	if (typeof window === "undefined" || typeof document === "undefined") return;
	const windowObject = $d447af545b77c9f1$export$f21a1ffae260145a(element);
	const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
	if ($8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject)) return;
	let focus = windowObject.HTMLElement.prototype.focus;
	Reflect.defineProperty(windowObject.HTMLElement.prototype, "focus", {
		configurable: true,
		writable: true,
		value: function() {
			$8f5a2122b0992be3$var$hasEventBeforeFocus = true;
			focus.apply(this, arguments);
		}
	});
	documentObject.addEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
	documentObject.addEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
	documentObject.addEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
	windowObject.addEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
	windowObject.addEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
	if (typeof PointerEvent !== "undefined") {
		documentObject.addEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
		documentObject.addEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
		documentObject.addEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
	}
	windowObject.addEventListener("beforeunload", () => {
		$8f5a2122b0992be3$var$tearDownWindowFocusTracking(element);
	}, { once: true });
	$8f5a2122b0992be3$export$d90243b58daecda7.set(windowObject, { focus });
}
function $8f5a2122b0992be3$export$2f1888112f558a7d(element) {
	const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
	let loadListener;
	if (documentObject.readyState !== "loading") $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
	else {
		loadListener = () => {
			$8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
		};
		documentObject.addEventListener("DOMContentLoaded", loadListener);
	}
	return () => $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element, loadListener);
}
function $8f5a2122b0992be3$export$b9b3dfddab17db27() {
	return $8f5a2122b0992be3$var$currentModality !== "pointer";
}
function $8f5a2122b0992be3$export$630ff653c5ada6a9() {
	return $8f5a2122b0992be3$var$currentModality;
}
/**
* If this is attached to text input component, return if the event is a focus event (Tab/Escape
* keys pressed) so that focus visible style can be properly set.
*/ function $8f5a2122b0992be3$var$isKeyboardFocusEvent(isTextInput, modality, e) {
	let eventTarget = e ? $23f2114a1b82827e$export$e58f029f0fbfdb29(e) : void 0;
	let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
	let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(eventTarget);
	const IHTMLInputElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLInputElement : HTMLInputElement;
	const IHTMLTextAreaElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLTextAreaElement : HTMLTextAreaElement;
	const IHTMLElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLElement : HTMLElement;
	const IKeyboardEvent = typeof ownerWindow !== "undefined" ? ownerWindow.KeyboardEvent : KeyboardEvent;
	let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
	isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !$8f5a2122b0992be3$var$nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
	return !(isTextInput && modality === "keyboard" && e instanceof IKeyboardEvent && !$8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $8f5a2122b0992be3$export$ec71b4b83ac08ec3(fn, deps, opts) {
	$8f5a2122b0992be3$var$setupGlobalFocusEvents();
	(0, import_react$32.useEffect)(() => {
		if (opts?.enabled === false) return;
		let handler = (modality, e) => {
			if (!$8f5a2122b0992be3$var$isKeyboardFocusEvent(!!opts?.isTextInput, modality, e)) return;
			fn($8f5a2122b0992be3$export$b9b3dfddab17db27());
		};
		$8f5a2122b0992be3$export$901e90a13c50a14e.add(handler);
		return () => {
			$8f5a2122b0992be3$export$901e90a13c50a14e.delete(handler);
		};
	}, deps);
}
var import_react$32, $8f5a2122b0992be3$var$currentModality, $8f5a2122b0992be3$var$currentPointerType, $8f5a2122b0992be3$export$901e90a13c50a14e, $8f5a2122b0992be3$export$d90243b58daecda7, $8f5a2122b0992be3$var$hasEventBeforeFocus, $8f5a2122b0992be3$var$hasBlurredWindowRecently, $8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS, $8f5a2122b0992be3$var$tearDownWindowFocusTracking, $8f5a2122b0992be3$var$nonTextInputTypes;
var init_useFocusVisible = __esmMin((() => {
	init_DOMFunctions();
	init_domHelpers();
	init_utils$2();
	init_platform();
	init_isVirtualEvent();
	init_openLink();
	import_react$32 = /* @__PURE__ */ __toESM(require_react(), 1);
	$8f5a2122b0992be3$var$currentModality = null;
	$8f5a2122b0992be3$export$901e90a13c50a14e = /* @__PURE__ */ new Set();
	$8f5a2122b0992be3$export$d90243b58daecda7 = /* @__PURE__ */ new Map();
	$8f5a2122b0992be3$var$hasEventBeforeFocus = false;
	$8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
	$8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS = {
		Tab: true,
		Escape: true
	};
	$8f5a2122b0992be3$var$tearDownWindowFocusTracking = (element, loadListener) => {
		const windowObject = $d447af545b77c9f1$export$f21a1ffae260145a(element);
		const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
		if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
		if (!$8f5a2122b0992be3$export$d90243b58daecda7.has(windowObject)) return;
		Reflect.defineProperty(windowObject.HTMLElement.prototype, "focus", {
			configurable: true,
			writable: true,
			value: $8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject).focus
		});
		documentObject.removeEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
		documentObject.removeEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
		documentObject.removeEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
		windowObject.removeEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
		windowObject.removeEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
		if (typeof PointerEvent !== "undefined") {
			documentObject.removeEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
			documentObject.removeEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
			documentObject.removeEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
		}
		$8f5a2122b0992be3$export$d90243b58daecda7.delete(windowObject);
	};
	if (typeof document !== "undefined") $8f5a2122b0992be3$export$2f1888112f558a7d();
	$8f5a2122b0992be3$var$nonTextInputTypes = /* @__PURE__ */ new Set([
		"checkbox",
		"radio",
		"range",
		"color",
		"file",
		"image",
		"button",
		"submit",
		"reset"
	]);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/focusSafely.mjs
function $f192c2f16961cbe0$export$80f3e147d781571c(element) {
	if (!element.isConnected) return;
	const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(element);
	if ($8f5a2122b0992be3$export$630ff653c5ada6a9() === "virtual") {
		let lastFocusedElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
		$081cb5757e08788e$export$24490316f764c430(() => {
			const activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
			if ((activeElement === lastFocusedElement || activeElement === ownerDocument.body) && element.isConnected) $1969ac565cfec8d0$export$de79e2c695e052f3(element);
		});
	} else $1969ac565cfec8d0$export$de79e2c695e052f3(element);
}
var init_focusSafely = __esmMin((() => {
	init_focusWithoutScrolling();
	init_DOMFunctions();
	init_useFocusVisible();
	init_domHelpers();
	init_runAfterTransition();
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/focus/FocusScope.mjs
function $535772f9d2c1f38d$export$20e40289641fbbb6(props) {
	let { children, contain, restoreFocus, autoFocus } = props;
	let startRef = (0, import_react$31.useRef)(null);
	let endRef = (0, import_react$31.useRef)(null);
	let scopeRef = (0, import_react$31.useRef)([]);
	let { parentNode } = (0, import_react$31.useContext)($535772f9d2c1f38d$var$FocusContext) || {};
	let node = (0, import_react$31.useMemo)(() => new $535772f9d2c1f38d$var$TreeNode({ scopeRef }), [scopeRef]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let parent = parentNode || $535772f9d2c1f38d$export$d06fae2ee68b101e.root;
		if ($535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef) && $535772f9d2c1f38d$var$activeScope && !$535772f9d2c1f38d$var$isAncestorScope($535772f9d2c1f38d$var$activeScope, parent.scopeRef)) {
			let activeNode = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode($535772f9d2c1f38d$var$activeScope);
			if (activeNode) parent = activeNode;
		}
		parent.addChild(node);
		$535772f9d2c1f38d$export$d06fae2ee68b101e.addNode(node);
	}, [node, parentNode]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let node = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef);
		if (node) node.contain = !!contain;
	}, [contain]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let node = startRef.current?.nextSibling;
		let nodes = [];
		let stopPropagation = (e) => e.stopPropagation();
		while (node && node !== endRef.current) {
			nodes.push(node);
			node.addEventListener($535772f9d2c1f38d$var$RESTORE_FOCUS_EVENT, stopPropagation);
			node = node.nextSibling;
		}
		scopeRef.current = nodes;
		return () => {
			for (let node of nodes) node.removeEventListener($535772f9d2c1f38d$var$RESTORE_FOCUS_EVENT, stopPropagation);
		};
	}, [children]);
	$535772f9d2c1f38d$var$useActiveScopeTracker(scopeRef, restoreFocus, contain);
	$535772f9d2c1f38d$var$useFocusContainment(scopeRef, contain);
	$535772f9d2c1f38d$var$useRestoreFocus(scopeRef, restoreFocus, contain);
	$535772f9d2c1f38d$var$useAutoFocus(scopeRef, autoFocus);
	(0, import_react$31.useEffect)(() => {
		const activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0));
		let scope = null;
		if ($535772f9d2c1f38d$var$isElementInScope(activeElement, scopeRef.current)) {
			for (let node of $535772f9d2c1f38d$export$d06fae2ee68b101e.traverse()) if (node.scopeRef && $535772f9d2c1f38d$var$isElementInScope(activeElement, node.scopeRef.current)) scope = node;
			if (scope === $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef)) $535772f9d2c1f38d$var$activeScope = scope.scopeRef;
		}
	}, [scopeRef]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		return () => {
			let parentScope = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef)?.parent?.scopeRef ?? null;
			if ((scopeRef === $535772f9d2c1f38d$var$activeScope || $535772f9d2c1f38d$var$isAncestorScope(scopeRef, $535772f9d2c1f38d$var$activeScope)) && (!parentScope || $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(parentScope))) $535772f9d2c1f38d$var$activeScope = parentScope;
			$535772f9d2c1f38d$export$d06fae2ee68b101e.removeTreeNode(scopeRef);
		};
	}, [scopeRef]);
	let focusManager = (0, import_react$31.useMemo)(() => $535772f9d2c1f38d$var$createFocusManagerForScope(scopeRef), []);
	let value = (0, import_react$31.useMemo)(() => ({
		focusManager,
		parentNode: node
	}), [node, focusManager]);
	return /*#__PURE__*/ import_react$31.createElement($535772f9d2c1f38d$var$FocusContext.Provider, { value }, /*#__PURE__*/ import_react$31.createElement("span", {
		"data-focus-scope-start": true,
		hidden: true,
		ref: startRef
	}), children, /*#__PURE__*/ import_react$31.createElement("span", {
		"data-focus-scope-end": true,
		hidden: true,
		ref: endRef
	}));
}
function $535772f9d2c1f38d$export$10c5169755ce7bd7() {
	return (0, import_react$31.useContext)($535772f9d2c1f38d$var$FocusContext)?.focusManager;
}
function $535772f9d2c1f38d$var$createFocusManagerForScope(scopeRef) {
	return {
		focusNext(opts = {}) {
			let scope = scopeRef.current;
			let { from, tabbable, wrap, accept } = opts;
			let node = from || $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scope[0] ?? void 0));
			let sentinel = scope[0].previousElementSibling;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa($535772f9d2c1f38d$var$getScopeRoot(scope), {
				tabbable,
				accept
			}, scope);
			walker.currentNode = $535772f9d2c1f38d$var$isElementInScope(node, scope) ? node : sentinel;
			let nextNode = walker.nextNode();
			if (!nextNode && wrap) {
				walker.currentNode = sentinel;
				nextNode = walker.nextNode();
			}
			if (nextNode) $535772f9d2c1f38d$var$focusElement(nextNode, true);
			return nextNode;
		},
		focusPrevious(opts = {}) {
			let scope = scopeRef.current;
			let { from, tabbable, wrap, accept } = opts;
			let node = from || $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scope[0] ?? void 0));
			let sentinel = scope[scope.length - 1].nextElementSibling;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa($535772f9d2c1f38d$var$getScopeRoot(scope), {
				tabbable,
				accept
			}, scope);
			walker.currentNode = $535772f9d2c1f38d$var$isElementInScope(node, scope) ? node : sentinel;
			let previousNode = walker.previousNode();
			if (!previousNode && wrap) {
				walker.currentNode = sentinel;
				previousNode = walker.previousNode();
			}
			if (previousNode) $535772f9d2c1f38d$var$focusElement(previousNode, true);
			return previousNode;
		},
		focusFirst(opts = {}) {
			let scope = scopeRef.current;
			let { tabbable, accept } = opts;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa($535772f9d2c1f38d$var$getScopeRoot(scope), {
				tabbable,
				accept
			}, scope);
			walker.currentNode = scope[0].previousElementSibling;
			let nextNode = walker.nextNode();
			if (nextNode) $535772f9d2c1f38d$var$focusElement(nextNode, true);
			return nextNode;
		},
		focusLast(opts = {}) {
			let scope = scopeRef.current;
			let { tabbable, accept } = opts;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa($535772f9d2c1f38d$var$getScopeRoot(scope), {
				tabbable,
				accept
			}, scope);
			walker.currentNode = scope[scope.length - 1].nextElementSibling;
			let previousNode = walker.previousNode();
			if (previousNode) $535772f9d2c1f38d$var$focusElement(previousNode, true);
			return previousNode;
		}
	};
}
function $535772f9d2c1f38d$var$getScopeRoot(scope) {
	return scope[0].parentElement;
}
function $535772f9d2c1f38d$var$shouldContainFocus(scopeRef) {
	let scope = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode($535772f9d2c1f38d$var$activeScope);
	while (scope && scope.scopeRef !== scopeRef) {
		if (scope.contain) return false;
		scope = scope.parent;
	}
	return true;
}
function $535772f9d2c1f38d$var$getRadiosInGroup(element) {
	if (!element.form) return Array.from($d447af545b77c9f1$export$b204af158042fbac(element).querySelectorAll(`input[type="radio"][name="${CSS.escape(element.name)}"]`)).filter((radio) => !radio.form);
	const radioList = element.form.elements.namedItem(element.name);
	let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(element);
	if (radioList instanceof ownerWindow.RadioNodeList) return Array.from(radioList).filter((el) => el instanceof ownerWindow.HTMLInputElement);
	if (radioList instanceof ownerWindow.HTMLInputElement) return [radioList];
	return [];
}
function $535772f9d2c1f38d$var$isTabbableRadio(element) {
	if (element.checked) return true;
	const radios = $535772f9d2c1f38d$var$getRadiosInGroup(element);
	return radios.length > 0 && !radios.some((radio) => radio.checked);
}
function $535772f9d2c1f38d$var$useFocusContainment(scopeRef, contain) {
	let focusedNode = (0, import_react$31.useRef)(void 0);
	let raf = (0, import_react$31.useRef)(void 0);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let scope = scopeRef.current;
		if (!contain) {
			if (raf.current) {
				cancelAnimationFrame(raf.current);
				raf.current = void 0;
			}
			return;
		}
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scope ? scope[0] : void 0);
		let onKeyDown = (e) => {
			if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$535772f9d2c1f38d$var$shouldContainFocus(scopeRef) || e.isComposing) return;
			let focusedElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
			let scope = scopeRef.current;
			if (!scope || !$535772f9d2c1f38d$var$isElementInScope(focusedElement, scope)) return;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa($535772f9d2c1f38d$var$getScopeRoot(scope), { tabbable: true }, scope);
			if (!focusedElement) return;
			walker.currentNode = focusedElement;
			let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
			if (!nextElement) {
				walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
				nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
			}
			e.preventDefault();
			if (nextElement) {
				$535772f9d2c1f38d$var$focusElement(nextElement, true);
				if (nextElement instanceof $d447af545b77c9f1$export$f21a1ffae260145a(nextElement).HTMLInputElement) nextElement.select();
			}
		};
		let onFocus = (e) => {
			if ((!$535772f9d2c1f38d$var$activeScope || $535772f9d2c1f38d$var$isAncestorScope($535772f9d2c1f38d$var$activeScope, scopeRef)) && $535772f9d2c1f38d$var$isElementInScope($23f2114a1b82827e$export$e58f029f0fbfdb29(e), scopeRef.current)) {
				$535772f9d2c1f38d$var$activeScope = scopeRef;
				focusedNode.current = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
			} else if ($535772f9d2c1f38d$var$shouldContainFocus(scopeRef) && !$535772f9d2c1f38d$var$isElementInChildScope($23f2114a1b82827e$export$e58f029f0fbfdb29(e), scopeRef)) {
				if (focusedNode.current) $535772f9d2c1f38d$var$focusElement(focusedNode.current);
				else if ($535772f9d2c1f38d$var$activeScope && $535772f9d2c1f38d$var$activeScope.current) $535772f9d2c1f38d$var$focusFirstInScope($535772f9d2c1f38d$var$activeScope.current);
			} else if ($535772f9d2c1f38d$var$shouldContainFocus(scopeRef)) focusedNode.current = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		};
		let onBlur = (e) => {
			if (raf.current) cancelAnimationFrame(raf.current);
			raf.current = requestAnimationFrame(() => {
				let modality = $8f5a2122b0992be3$export$630ff653c5ada6a9();
				let shouldSkipFocusRestore = (modality === "virtual" || modality === null) && $2add3ce32c6007eb$export$a11b0059900ceec8() && $2add3ce32c6007eb$export$6446a186d09e379e();
				let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
				if (!shouldSkipFocusRestore && activeElement && $535772f9d2c1f38d$var$shouldContainFocus(scopeRef) && !$535772f9d2c1f38d$var$isElementInChildScope(activeElement, scopeRef)) {
					$535772f9d2c1f38d$var$activeScope = scopeRef;
					let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
					if (target && target.isConnected) {
						focusedNode.current = target;
						$535772f9d2c1f38d$var$focusElement(focusedNode.current);
					} else if ($535772f9d2c1f38d$var$activeScope.current) $535772f9d2c1f38d$var$focusFirstInScope($535772f9d2c1f38d$var$activeScope.current);
				}
			});
		};
		ownerDocument.addEventListener("keydown", onKeyDown, false);
		ownerDocument.addEventListener("focusin", onFocus, false);
		scope?.forEach((element) => element.addEventListener("focusin", onFocus, false));
		scope?.forEach((element) => element.addEventListener("focusout", onBlur, false));
		return () => {
			ownerDocument.removeEventListener("keydown", onKeyDown, false);
			ownerDocument.removeEventListener("focusin", onFocus, false);
			scope?.forEach((element) => element.removeEventListener("focusin", onFocus, false));
			scope?.forEach((element) => element.removeEventListener("focusout", onBlur, false));
		};
	}, [scopeRef, contain]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		return () => {
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, [raf]);
}
function $535772f9d2c1f38d$var$isElementInAnyScope(element) {
	return $535772f9d2c1f38d$var$isElementInChildScope(element);
}
function $535772f9d2c1f38d$var$isElementInScope(element, scope) {
	if (!element) return false;
	if (!scope) return false;
	return scope.some((node) => $23f2114a1b82827e$export$4282f70798064fe0(node, element));
}
function $535772f9d2c1f38d$var$isElementInChildScope(element, scope = null) {
	if (element instanceof Element && element.closest("[data-react-aria-top-layer]")) return true;
	for (let { scopeRef: s } of $535772f9d2c1f38d$export$d06fae2ee68b101e.traverse($535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scope))) if (s && $535772f9d2c1f38d$var$isElementInScope(element, s.current)) return true;
	return false;
}
function $535772f9d2c1f38d$export$1258395f99bf9cbf(element) {
	return $535772f9d2c1f38d$var$isElementInChildScope(element, $535772f9d2c1f38d$var$activeScope);
}
function $535772f9d2c1f38d$var$isAncestorScope(ancestor, scope) {
	let parent = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scope)?.parent;
	while (parent) {
		if (parent.scopeRef === ancestor) return true;
		parent = parent.parent;
	}
	return false;
}
function $535772f9d2c1f38d$var$focusElement(element, scroll = false) {
	if (element != null && !scroll) try {
		$f192c2f16961cbe0$export$80f3e147d781571c(element);
	} catch {}
	else if (element != null) try {
		element.focus();
	} catch {}
}
function $535772f9d2c1f38d$var$getFirstInScope(scope, tabbable = true) {
	let sentinel = scope[0].previousElementSibling;
	let scopeRoot = $535772f9d2c1f38d$var$getScopeRoot(scope);
	let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(scopeRoot, { tabbable }, scope);
	walker.currentNode = sentinel;
	let nextNode = walker.nextNode();
	if (tabbable && !nextNode) {
		scopeRoot = $535772f9d2c1f38d$var$getScopeRoot(scope);
		walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(scopeRoot, { tabbable: false }, scope);
		walker.currentNode = sentinel;
		nextNode = walker.nextNode();
	}
	return nextNode;
}
function $535772f9d2c1f38d$var$focusFirstInScope(scope, tabbable = true) {
	$535772f9d2c1f38d$var$focusElement($535772f9d2c1f38d$var$getFirstInScope(scope, tabbable));
}
function $535772f9d2c1f38d$var$useAutoFocus(scopeRef, autoFocus) {
	const autoFocusRef = import_react$31.useRef(autoFocus);
	(0, import_react$31.useEffect)(() => {
		if (autoFocusRef.current) {
			$535772f9d2c1f38d$var$activeScope = scopeRef;
			if (!$535772f9d2c1f38d$var$isElementInScope($23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0)), $535772f9d2c1f38d$var$activeScope.current) && scopeRef.current) $535772f9d2c1f38d$var$focusFirstInScope(scopeRef.current);
		}
		autoFocusRef.current = false;
	}, [scopeRef]);
}
function $535772f9d2c1f38d$var$useActiveScopeTracker(scopeRef, restore, contain) {
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (restore || contain) return;
		let scope = scopeRef.current;
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scope ? scope[0] : void 0);
		let onFocus = (e) => {
			let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
			if ($535772f9d2c1f38d$var$isElementInScope(target, scopeRef.current)) $535772f9d2c1f38d$var$activeScope = scopeRef;
			else if (!$535772f9d2c1f38d$var$isElementInAnyScope(target)) $535772f9d2c1f38d$var$activeScope = null;
		};
		ownerDocument.addEventListener("focusin", onFocus, false);
		scope?.forEach((element) => element.addEventListener("focusin", onFocus, false));
		return () => {
			ownerDocument.removeEventListener("focusin", onFocus, false);
			scope?.forEach((element) => element.removeEventListener("focusin", onFocus, false));
		};
	}, [
		scopeRef,
		restore,
		contain
	]);
}
function $535772f9d2c1f38d$var$shouldRestoreFocus(scopeRef) {
	let scope = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode($535772f9d2c1f38d$var$activeScope);
	while (scope && scope.scopeRef !== scopeRef) {
		if (scope.nodeToRestore) return false;
		scope = scope.parent;
	}
	return scope?.scopeRef === scopeRef;
}
function $535772f9d2c1f38d$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
	const nodeToRestoreRef = (0, import_react$31.useRef)(typeof document !== "undefined" ? $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0)) : null);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let scope = scopeRef.current;
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scope ? scope[0] : void 0);
		if (!restoreFocus || contain) return;
		let onFocus = () => {
			if ((!$535772f9d2c1f38d$var$activeScope || $535772f9d2c1f38d$var$isAncestorScope($535772f9d2c1f38d$var$activeScope, scopeRef)) && $535772f9d2c1f38d$var$isElementInScope($23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument), scopeRef.current)) $535772f9d2c1f38d$var$activeScope = scopeRef;
		};
		ownerDocument.addEventListener("focusin", onFocus, false);
		scope?.forEach((element) => element.addEventListener("focusin", onFocus, false));
		return () => {
			ownerDocument.removeEventListener("focusin", onFocus, false);
			scope?.forEach((element) => element.removeEventListener("focusin", onFocus, false));
		};
	}, [scopeRef, contain]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0);
		if (!restoreFocus) return;
		let onKeyDown = (e) => {
			if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$535772f9d2c1f38d$var$shouldContainFocus(scopeRef) || e.isComposing) return;
			let focusedElement = ownerDocument.activeElement;
			if (!$535772f9d2c1f38d$var$isElementInChildScope(focusedElement, scopeRef) || !$535772f9d2c1f38d$var$shouldRestoreFocus(scopeRef)) return;
			let treeNode = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef);
			if (!treeNode) return;
			let nodeToRestore = treeNode.nodeToRestore;
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(ownerDocument.body, { tabbable: true });
			walker.currentNode = focusedElement;
			let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
			if (!nodeToRestore || !nodeToRestore.isConnected || nodeToRestore === ownerDocument.body) {
				nodeToRestore = void 0;
				treeNode.nodeToRestore = void 0;
			}
			if ((!nextElement || !$535772f9d2c1f38d$var$isElementInChildScope(nextElement, scopeRef)) && nodeToRestore) {
				walker.currentNode = nodeToRestore;
				do
					nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
				while ($535772f9d2c1f38d$var$isElementInChildScope(nextElement, scopeRef));
				e.preventDefault();
				e.stopPropagation();
				if (nextElement) $535772f9d2c1f38d$var$focusElement(nextElement, true);
				else if (!$535772f9d2c1f38d$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
				else $535772f9d2c1f38d$var$focusElement(nodeToRestore, true);
			}
		};
		if (!contain) ownerDocument.addEventListener("keydown", onKeyDown, true);
		return () => {
			if (!contain) ownerDocument.removeEventListener("keydown", onKeyDown, true);
		};
	}, [
		scopeRef,
		restoreFocus,
		contain
	]);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(scopeRef.current ? scopeRef.current[0] : void 0);
		if (!restoreFocus) return;
		let treeNode = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef);
		if (!treeNode) return;
		treeNode.nodeToRestore = nodeToRestoreRef.current ?? void 0;
		return () => {
			let treeNode = $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(scopeRef);
			if (!treeNode) return;
			let nodeToRestore = treeNode.nodeToRestore;
			let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
			if (restoreFocus && nodeToRestore && (activeElement && $535772f9d2c1f38d$var$isElementInChildScope(activeElement, scopeRef) || activeElement === ownerDocument.body && $535772f9d2c1f38d$var$shouldRestoreFocus(scopeRef))) {
				let clonedTree = $535772f9d2c1f38d$export$d06fae2ee68b101e.clone();
				requestAnimationFrame(() => {
					if (ownerDocument.activeElement === ownerDocument.body) {
						let treeNode = clonedTree.getTreeNode(scopeRef);
						while (treeNode) {
							if (treeNode.nodeToRestore && treeNode.nodeToRestore.isConnected) {
								$535772f9d2c1f38d$var$restoreFocusToElement(treeNode.nodeToRestore);
								return;
							}
							treeNode = treeNode.parent;
						}
						treeNode = clonedTree.getTreeNode(scopeRef);
						while (treeNode) {
							if (treeNode.scopeRef && treeNode.scopeRef.current && $535772f9d2c1f38d$export$d06fae2ee68b101e.getTreeNode(treeNode.scopeRef)) {
								let node = $535772f9d2c1f38d$var$getFirstInScope(treeNode.scopeRef.current, true);
								if (node) {
									$535772f9d2c1f38d$var$restoreFocusToElement(node);
									return;
								}
							}
							treeNode = treeNode.parent;
						}
					}
				});
			}
		};
	}, [scopeRef, restoreFocus]);
}
function $535772f9d2c1f38d$var$restoreFocusToElement(node) {
	if (node.dispatchEvent(new CustomEvent($535772f9d2c1f38d$var$RESTORE_FOCUS_EVENT, {
		bubbles: true,
		cancelable: true
	}))) $535772f9d2c1f38d$var$focusElement(node);
}
function $535772f9d2c1f38d$export$2d6ec8fc375ceafa(root, opts, scope) {
	let filter = opts?.tabbable ? $3b8b240c1bf84ab9$export$bebd5a1431fec25d : $3b8b240c1bf84ab9$export$4c063cf1350e6fed;
	let doc = $d447af545b77c9f1$export$b204af158042fbac(root?.nodeType === Node.ELEMENT_NODE ? root : null);
	let walker = $654b97e09f2a30c1$export$4d0f8be8b12a7ef6(doc, root || doc, NodeFilter.SHOW_ELEMENT, { acceptNode(node) {
		if ($23f2114a1b82827e$export$4282f70798064fe0(opts?.from, node)) return NodeFilter.FILTER_REJECT;
		if (opts?.tabbable && node.tagName === "INPUT" && node.getAttribute("type") === "radio") {
			if (!$535772f9d2c1f38d$var$isTabbableRadio(node)) return NodeFilter.FILTER_REJECT;
			if (walker.currentNode.tagName === "INPUT" && walker.currentNode.type === "radio" && walker.currentNode.name === node.name) return NodeFilter.FILTER_REJECT;
		}
		if (filter(node) && (!scope || $535772f9d2c1f38d$var$isElementInScope(node, scope)) && (!opts?.accept || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
		return NodeFilter.FILTER_SKIP;
	} });
	if (opts?.from) walker.currentNode = opts.from;
	return walker;
}
function $535772f9d2c1f38d$export$c5251b9e124bf29(ref, defaultOptions = {}) {
	return {
		focusNext(opts = {}) {
			let root = ref.current;
			if (!root) return null;
			let { from, tabbable = defaultOptions.tabbable, wrap = defaultOptions.wrap, accept = defaultOptions.accept } = opts;
			let node = from || $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(root));
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(root, {
				tabbable,
				accept
			});
			if ($23f2114a1b82827e$export$4282f70798064fe0(root, node)) walker.currentNode = node;
			let nextNode = walker.nextNode();
			if (!nextNode && wrap) {
				walker.currentNode = root;
				nextNode = walker.nextNode();
			}
			if (nextNode) $535772f9d2c1f38d$var$focusElement(nextNode, true);
			return nextNode;
		},
		focusPrevious(opts = defaultOptions) {
			let root = ref.current;
			if (!root) return null;
			let { from, tabbable = defaultOptions.tabbable, wrap = defaultOptions.wrap, accept = defaultOptions.accept } = opts;
			let node = from || $23f2114a1b82827e$export$cd4e5573fbe2b576($d447af545b77c9f1$export$b204af158042fbac(root));
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(root, {
				tabbable,
				accept
			});
			if ($23f2114a1b82827e$export$4282f70798064fe0(root, node)) walker.currentNode = node;
			else {
				let next = $535772f9d2c1f38d$var$last(walker);
				if (next) $535772f9d2c1f38d$var$focusElement(next, true);
				return next ?? null;
			}
			let previousNode = walker.previousNode();
			if (!previousNode && wrap) {
				walker.currentNode = root;
				let lastNode = $535772f9d2c1f38d$var$last(walker);
				if (!lastNode) return null;
				previousNode = lastNode;
			}
			if (previousNode) $535772f9d2c1f38d$var$focusElement(previousNode, true);
			return previousNode ?? null;
		},
		focusFirst(opts = defaultOptions) {
			let root = ref.current;
			if (!root) return null;
			let { tabbable = defaultOptions.tabbable, accept = defaultOptions.accept } = opts;
			let nextNode = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(root, {
				tabbable,
				accept
			}).nextNode();
			if (nextNode) $535772f9d2c1f38d$var$focusElement(nextNode, true);
			return nextNode;
		},
		focusLast(opts = defaultOptions) {
			let root = ref.current;
			if (!root) return null;
			let { tabbable = defaultOptions.tabbable, accept = defaultOptions.accept } = opts;
			let next = $535772f9d2c1f38d$var$last($535772f9d2c1f38d$export$2d6ec8fc375ceafa(root, {
				tabbable,
				accept
			}));
			if (next) $535772f9d2c1f38d$var$focusElement(next, true);
			return next ?? null;
		}
	};
}
function $535772f9d2c1f38d$var$last(walker) {
	let next = void 0;
	let last;
	do {
		last = walker.lastChild();
		if (last) next = last;
	} while (last);
	return next;
}
var import_react$31, $535772f9d2c1f38d$var$FocusContext, $535772f9d2c1f38d$var$RESTORE_FOCUS_EVENT, $535772f9d2c1f38d$var$activeScope, $535772f9d2c1f38d$var$Tree, $535772f9d2c1f38d$var$TreeNode, $535772f9d2c1f38d$export$d06fae2ee68b101e;
var init_FocusScope = __esmMin((() => {
	init_ShadowTreeWalker();
	init_focusSafely();
	init_DOMFunctions();
	init_useFocusVisible();
	init_domHelpers();
	init_platform();
	init_isFocusable();
	init_useLayoutEffect();
	import_react$31 = /* @__PURE__ */ __toESM(require_react(), 1);
	$535772f9d2c1f38d$var$FocusContext = /*#__PURE__*/ import_react$31.createContext(null);
	$535772f9d2c1f38d$var$RESTORE_FOCUS_EVENT = "react-aria-focus-scope-restore";
	$535772f9d2c1f38d$var$activeScope = null;
	$535772f9d2c1f38d$var$Tree = class $535772f9d2c1f38d$var$Tree {
		constructor() {
			this.fastMap = /* @__PURE__ */ new Map();
			this.root = new $535772f9d2c1f38d$var$TreeNode({ scopeRef: null });
			this.fastMap.set(null, this.root);
		}
		get size() {
			return this.fastMap.size;
		}
		getTreeNode(data) {
			return this.fastMap.get(data);
		}
		addTreeNode(scopeRef, parent, nodeToRestore) {
			let parentNode = this.fastMap.get(parent ?? null);
			if (!parentNode) return;
			let node = new $535772f9d2c1f38d$var$TreeNode({ scopeRef });
			parentNode.addChild(node);
			node.parent = parentNode;
			this.fastMap.set(scopeRef, node);
			if (nodeToRestore) node.nodeToRestore = nodeToRestore;
		}
		addNode(node) {
			this.fastMap.set(node.scopeRef, node);
		}
		removeTreeNode(scopeRef) {
			if (scopeRef === null) return;
			let node = this.fastMap.get(scopeRef);
			if (!node) return;
			let parentNode = node.parent;
			for (let current of this.traverse()) if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $535772f9d2c1f38d$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
			let children = node.children;
			if (parentNode) {
				parentNode.removeChild(node);
				if (children.size > 0) children.forEach((child) => parentNode && parentNode.addChild(child));
			}
			this.fastMap.delete(node.scopeRef);
		}
		*traverse(node = this.root) {
			if (node.scopeRef != null) yield node;
			if (node.children.size > 0) for (let child of node.children) yield* this.traverse(child);
		}
		clone() {
			let newTree = new $535772f9d2c1f38d$var$Tree();
			for (let node of this.traverse()) newTree.addTreeNode(node.scopeRef, node.parent?.scopeRef ?? null, node.nodeToRestore);
			return newTree;
		}
	};
	$535772f9d2c1f38d$var$TreeNode = class {
		constructor(props) {
			this.children = /* @__PURE__ */ new Set();
			this.contain = false;
			this.scopeRef = props.scopeRef;
		}
		addChild(node) {
			this.children.add(node);
			node.parent = this;
		}
		removeChild(node) {
			this.children.delete(node);
			node.parent = void 0;
		}
	};
	$535772f9d2c1f38d$export$d06fae2ee68b101e = new $535772f9d2c1f38d$var$Tree();
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/useFocus.mjs
function $1e74c67db218ce67$export$f8168d8dd8fd66e6(props) {
	let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
	const onBlur = (0, import_react$30.useCallback)((e) => {
		if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === e.currentTarget) {
			if (onBlurProp) onBlurProp(e);
			if (onFocusChange) onFocusChange(false);
			return true;
		}
	}, [onBlurProp, onFocusChange]);
	const onSyntheticFocus = $a92dc41f639950be$export$715c682d09d639cc(onBlur);
	const onFocus = (0, import_react$30.useCallback)((e) => {
		let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
		const activeElement = ownerDocument ? $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument) : $23f2114a1b82827e$export$cd4e5573fbe2b576();
		if (eventTarget === e.currentTarget && eventTarget === activeElement) {
			if (onFocusProp) onFocusProp(e);
			if (onFocusChange) onFocusChange(true);
			onSyntheticFocus(e);
		}
	}, [
		onFocusChange,
		onFocusProp,
		onSyntheticFocus
	]);
	return { focusProps: {
		onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : void 0,
		onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : void 0
	} };
}
var import_react$30;
var init_useFocus = __esmMin((() => {
	init_DOMFunctions();
	init_domHelpers();
	init_utils$2();
	import_react$30 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/createEventHandler.mjs
function $8dba16319206abb6$export$48d1ea6320830260(handler) {
	if (!handler) return void 0;
	return (e) => {
		let shouldStopPropagation = true;
		handler({
			...e,
			preventDefault() {
				e.preventDefault();
			},
			isDefaultPrevented() {
				return e.isDefaultPrevented();
			},
			stopPropagation() {
				shouldStopPropagation = true;
			},
			continuePropagation() {
				shouldStopPropagation = false;
				if (typeof e.continuePropagation === "function") e.continuePropagation();
			},
			isPropagationStopped() {
				return shouldStopPropagation;
			}
		});
		if (shouldStopPropagation && !(typeof e.isPropagationStopped === "function" && e.isPropagationStopped())) e.stopPropagation();
	};
}
var init_createEventHandler = __esmMin((() => {}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/createKeyboardShortcutHandler.mjs
function $cbf729ad7eb217b0$export$9932402e211e7315(parsed) {
	let set = /* @__PURE__ */ new Set();
	if (parsed.alt) set.add("Alt");
	if (parsed.shift) set.add("Shift");
	if (parsed.ctrl) set.add("Control");
	if (parsed.meta) set.add("Meta");
	if (parsed.mod) set.add($2add3ce32c6007eb$export$9ac100e40613ea10() ? "Meta" : "Control");
	return set;
}
function $cbf729ad7eb217b0$export$bf26c410e1f8fe6d(e) {
	let set = /* @__PURE__ */ new Set();
	if (e.altKey) set.add("Alt");
	if (e.ctrlKey) set.add("Control");
	if (e.metaKey) set.add("Meta");
	if (e.shiftKey) set.add("Shift");
	return set;
}
function $cbf729ad7eb217b0$var$sortedModifierTokens(set) {
	return $cbf729ad7eb217b0$var$CANONICAL_MODIFIER_ORDER.filter((name) => set.has(name));
}
function $cbf729ad7eb217b0$export$d636f01a2eaffd51(spec) {
	let parts = spec.split("+").reduce((prev, part) => {
		let lower = part.toLowerCase();
		if ($cbf729ad7eb217b0$var$MODIFIER_NAMES.has(lower)) {
			if (lower === "shift") prev.shift = true;
			else if (lower === "alt") prev.alt = true;
			else if (lower === "control") prev.ctrl = true;
			else if (lower === "meta") prev.meta = true;
			else if (lower === "mod") prev.mod = true;
		} else prev.key = part;
		return prev;
	}, {
		shift: false,
		alt: false,
		ctrl: false,
		meta: false,
		mod: false,
		key: ""
	});
	if (parts.key === "") throw new Error(`Invalid keyboard shortcut: "${spec}". Must include exactly one non-modifier key (e.g. "a", "Enter", "ArrowDown"). Combine any of Shift, Alt, Ctrl, Meta, and Mod.`);
	return parts;
}
function $cbf729ad7eb217b0$var$normalizeEventKey(key) {
	return key.toLowerCase();
}
/** Canonical key segment (lowercase); aliases like `down` → `arrowdown`. */ function $cbf729ad7eb217b0$var$canonicalKeyFromSpecKey(specKey) {
	let k = $cbf729ad7eb217b0$var$normalizeEventKey(specKey);
	let aliased = $cbf729ad7eb217b0$var$KEY_ALIASES[k];
	return aliased != null ? aliased : k;
}
function $cbf729ad7eb217b0$export$6cfa2ace150c84a5(parsed) {
	let mods = $cbf729ad7eb217b0$var$sortedModifierTokens($cbf729ad7eb217b0$export$9932402e211e7315(parsed));
	let key = $cbf729ad7eb217b0$var$canonicalKeyFromSpecKey(parsed.key);
	return mods.length > 0 ? `${mods.join("+")}+${key}` : key;
}
function $cbf729ad7eb217b0$export$786304bda41dd69f(e) {
	let mods = $cbf729ad7eb217b0$var$sortedModifierTokens($cbf729ad7eb217b0$export$bf26c410e1f8fe6d(e));
	let key = $cbf729ad7eb217b0$var$normalizeEventKey(e.key);
	return (mods.length > 0 ? `${mods.join("+")}+` : "") + key;
}
function $cbf729ad7eb217b0$export$2fd1fc8039383ae1(bindings) {
	let map = /* @__PURE__ */ new Map();
	for (let [spec, action] of Object.entries(bindings)) {
		let parsed = $cbf729ad7eb217b0$export$d636f01a2eaffd51(spec);
		map.set($cbf729ad7eb217b0$export$6cfa2ace150c84a5(parsed), action);
	}
	return (e) => {
		let canonical = $cbf729ad7eb217b0$export$786304bda41dd69f(e);
		let action = map.get(canonical);
		let result = action?.(e);
		if (result === void 0 && action !== void 0) result = {
			shouldContinuePropagation: false,
			shouldPreventDefault: true
		};
		else if (typeof result === "boolean") result = {
			shouldContinuePropagation: !result,
			shouldPreventDefault: result
		};
		if (result?.shouldPreventDefault) e.preventDefault();
		if (!action || result?.shouldContinuePropagation) e.continuePropagation();
	};
}
var $cbf729ad7eb217b0$var$MODIFIER_NAMES, $cbf729ad7eb217b0$var$CANONICAL_MODIFIER_ORDER, $cbf729ad7eb217b0$var$KEY_ALIASES;
var init_createKeyboardShortcutHandler = __esmMin((() => {
	init_platform();
	$cbf729ad7eb217b0$var$MODIFIER_NAMES = /* @__PURE__ */ new Set([
		"shift",
		"alt",
		"control",
		"meta",
		"mod"
	]);
	$cbf729ad7eb217b0$var$CANONICAL_MODIFIER_ORDER = [
		"Alt",
		"Control",
		"Meta",
		"Shift"
	];
	$cbf729ad7eb217b0$var$KEY_ALIASES = {
		space: " ",
		esc: "escape",
		del: "delete",
		ins: "insert",
		left: "arrowleft",
		right: "arrowright",
		up: "arrowup",
		down: "arrowdown",
		pageup: "pageup",
		pagedown: "pagedown"
	};
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/useKeyboard.mjs
function $8296dad1a4c5e0dc$export$8f71654801c2f7cd(props) {
	let { shortcuts, allowRepeats = false, allowComposing = false } = props;
	let onKeyDown;
	let onKeyUp;
	if (shortcuts) {
		let shortcutHandler = $cbf729ad7eb217b0$export$2fd1fc8039383ae1(shortcuts);
		let shortcutOnKeyDown = $8dba16319206abb6$export$48d1ea6320830260((e) => {
			if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
				e.continuePropagation();
				return;
			}
			if (e.nativeEvent?.repeat && !allowRepeats || e.nativeEvent?.isComposing && !allowComposing) {
				e.continuePropagation();
				return;
			}
			shortcutHandler(e);
		});
		let shortcutOnKeyUp = $8dba16319206abb6$export$48d1ea6320830260((e) => {
			if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
				e.continuePropagation();
				return;
			}
			if (e.nativeEvent?.repeat && !allowRepeats || e.nativeEvent?.isComposing && !allowComposing) {
				e.continuePropagation();
				return;
			}
			e.continuePropagation();
		});
		onKeyDown = props.onKeyDown ? $a4e76a5424781910$export$e08e3b67e392101e(props.onKeyDown, shortcutOnKeyDown) : shortcutOnKeyDown;
		onKeyUp = props.onKeyUp ? $a4e76a5424781910$export$e08e3b67e392101e(props.onKeyUp, shortcutOnKeyUp) : shortcutOnKeyUp;
	} else {
		onKeyDown = $8dba16319206abb6$export$48d1ea6320830260(props.onKeyDown);
		onKeyUp = $8dba16319206abb6$export$48d1ea6320830260(props.onKeyUp);
	}
	return { keyboardProps: props.isDisabled ? {} : {
		onKeyDown,
		onKeyUp
	} };
}
var init_useKeyboard = __esmMin((() => {
	init_chain();
	init_createEventHandler();
	init_createKeyboardShortcutHandler();
	init_DOMFunctions();
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/useFocusable.mjs
function $d1116acdf220c2da$var$useFocusableContext(ref) {
	let context = (0, import_react$29.useContext)($d1116acdf220c2da$export$f9762fab77588ecb) || {};
	$b7115c395c64f7b5$export$4debdb1a3f0fa79e(context, ref);
	let { ref: _, ...otherProps } = context;
	return otherProps;
}
function $d1116acdf220c2da$export$4c014de7c8940b4c(props, domRef) {
	let { focusProps } = $1e74c67db218ce67$export$f8168d8dd8fd66e6(props);
	let { keyboardProps } = $8296dad1a4c5e0dc$export$8f71654801c2f7cd(props);
	let interactions = $bbaa08b3cd72f041$export$9d1611c77c2fe928(focusProps, keyboardProps);
	let domProps = $d1116acdf220c2da$var$useFocusableContext(domRef);
	let interactionProps = props.isDisabled ? {} : domProps;
	let autoFocusRef = (0, import_react$29.useRef)(props.autoFocus);
	(0, import_react$29.useEffect)(() => {
		if (autoFocusRef.current && domRef.current) $f192c2f16961cbe0$export$80f3e147d781571c(domRef.current);
		autoFocusRef.current = false;
	}, [domRef]);
	let tabIndex = props.excludeFromTabOrder ? -1 : 0;
	if (props.isDisabled) tabIndex = void 0;
	return { focusableProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928({
		...interactions,
		tabIndex
	}, interactionProps) };
}
var import_react$29, $d1116acdf220c2da$export$f9762fab77588ecb, $d1116acdf220c2da$export$13f3202a3e5ddd5, $d1116acdf220c2da$export$35a3bebf7ef2d934;
var init_useFocusable = __esmMin((() => {
	init_focusSafely();
	init_mergeProps();
	init_mergeRefs();
	init_useFocus();
	init_useKeyboard();
	init_useObjectRef();
	init_useSyncRef();
	import_react$29 = /* @__PURE__ */ __toESM(require_react(), 1);
	$d1116acdf220c2da$export$f9762fab77588ecb = /*#__PURE__*/ import_react$29.createContext(null);
	$d1116acdf220c2da$export$13f3202a3e5ddd5 = /*#__PURE__*/ import_react$29.forwardRef(function FocusableProvider(props, ref) {
		let { children, ...otherProps } = props;
		let objRef = $03e8ab2d84d7657a$export$4338b53315abf666(ref);
		let context = {
			...otherProps,
			ref: objRef
		};
		return /*#__PURE__*/ import_react$29.createElement($d1116acdf220c2da$export$f9762fab77588ecb.Provider, { value: context }, children);
	});
	$d1116acdf220c2da$export$35a3bebf7ef2d934 = /*#__PURE__*/ (0, import_react$29.forwardRef)(({ children, ...props }, ref) => {
		ref = $03e8ab2d84d7657a$export$4338b53315abf666(ref);
		let { focusableProps } = $d1116acdf220c2da$export$4c014de7c8940b4c(props, ref);
		let child = import_react$29.Children.only(children);
		(0, import_react$29.useEffect)(() => {}, [ref, props.isDisabled]);
		let childRef = parseInt("18.3.1", 10) < 19 ? child.ref : child.props.ref;
		return /*#__PURE__*/ import_react$29.cloneElement(child, {
			...$bbaa08b3cd72f041$export$9d1611c77c2fe928(focusableProps, child.props),
			ref: $4064df0d6f9620e1$export$c9058316764c140e(childRef, ref)
		});
	});
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/calculatePosition.mjs
function $954926fb6168ae2a$var$getContainerDimensions(containerNode, visualViewport) {
	let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
	let scroll = {};
	let isPinchZoomedIn = (visualViewport?.scale ?? 1) > 1;
	if (containerNode.tagName === "BODY" || containerNode.tagName === "HTML") {
		let documentElement = document.documentElement;
		totalWidth = documentElement.clientWidth;
		totalHeight = documentElement.clientHeight;
		width = visualViewport?.width ?? totalWidth;
		height = visualViewport?.height ?? totalHeight;
		scroll.top = documentElement.scrollTop || containerNode.scrollTop;
		scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
		if (visualViewport) {
			top = Math.max(0, visualViewport.pageTop - (scroll.top ?? 0));
			left = Math.max(0, visualViewport.pageLeft - (scroll.left ?? 0));
		}
	} else {
		({width: width, height: height, top: top, left: left} = $954926fb6168ae2a$var$getOffset(containerNode, false));
		scroll.top = containerNode.scrollTop;
		scroll.left = containerNode.scrollLeft;
		totalWidth = width;
		totalHeight = height;
	}
	if ($2add3ce32c6007eb$export$78551043582a6a98() && (containerNode.tagName === "BODY" || containerNode.tagName === "HTML") && isPinchZoomedIn) {
		scroll.top = 0;
		scroll.left = 0;
		top = visualViewport?.pageTop ?? 0;
		left = visualViewport?.pageLeft ?? 0;
	}
	return {
		width,
		height,
		totalWidth,
		totalHeight,
		scroll,
		top,
		left
	};
}
function $954926fb6168ae2a$var$getScroll(node) {
	return {
		top: node.scrollTop,
		left: node.scrollLeft,
		width: node.scrollWidth,
		height: node.scrollHeight
	};
}
function $954926fb6168ae2a$var$getDelta(axis, offset, size, boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary) {
	let containerScroll = containerDimensions.scroll[axis] ?? 0;
	let boundarySize = boundaryDimensions[$954926fb6168ae2a$var$AXIS_SIZE[axis]];
	let boundaryStartEdge = containerOffsetWithBoundary[axis] + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + padding;
	let boundaryEndEdge = containerOffsetWithBoundary[axis] + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + boundarySize - padding;
	let startEdgeOffset = offset - containerScroll + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + containerOffsetWithBoundary[axis] - boundaryDimensions[$954926fb6168ae2a$var$AXIS[axis]];
	let endEdgeOffset = offset - containerScroll + size + boundaryDimensions.scroll[$954926fb6168ae2a$var$AXIS[axis]] + containerOffsetWithBoundary[axis] - boundaryDimensions[$954926fb6168ae2a$var$AXIS[axis]];
	if (startEdgeOffset < boundaryStartEdge) return boundaryStartEdge - startEdgeOffset;
	else if (endEdgeOffset > boundaryEndEdge) return Math.max(boundaryEndEdge - endEdgeOffset, boundaryStartEdge - startEdgeOffset);
	else return 0;
}
function $954926fb6168ae2a$var$getMargins(node) {
	let style = window.getComputedStyle(node);
	return {
		top: parseInt(style.marginTop, 10) || 0,
		bottom: parseInt(style.marginBottom, 10) || 0,
		left: parseInt(style.marginLeft, 10) || 0,
		right: parseInt(style.marginRight, 10) || 0
	};
}
function $954926fb6168ae2a$var$parsePlacement(input) {
	if ($954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input]) return $954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input];
	let [placement, crossPlacement] = input.split(" ");
	let axis = $954926fb6168ae2a$var$AXIS[placement] || "right";
	let crossAxis = $954926fb6168ae2a$var$CROSS_AXIS[axis];
	if (!$954926fb6168ae2a$var$AXIS[crossPlacement]) crossPlacement = "center";
	let size = $954926fb6168ae2a$var$AXIS_SIZE[axis];
	let crossSize = $954926fb6168ae2a$var$AXIS_SIZE[crossAxis];
	$954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input] = {
		placement,
		crossPlacement,
		axis,
		crossAxis,
		size,
		crossSize
	};
	return $954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE[input];
}
function $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions) {
	let { placement, crossPlacement, axis, crossAxis, size, crossSize } = placementInfo;
	let position = {};
	position[crossAxis] = childOffset[crossAxis] ?? 0;
	if (crossPlacement === "center") position[crossAxis] += ((childOffset[crossSize] ?? 0) - (overlaySize[crossSize] ?? 0)) / 2;
	else if (crossPlacement !== crossAxis) position[crossAxis] += (childOffset[crossSize] ?? 0) - (overlaySize[crossSize] ?? 0);
	position[crossAxis] += crossOffset;
	const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
	const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
	position[crossAxis] = $240e9101ba2842f5$export$7d15b64cf5a3a4c4(position[crossAxis], minPosition, maxPosition);
	if (placement === axis) {
		let containerHeight = isContainerPositioned ? containerDimensions[size] : containerDimensions[$954926fb6168ae2a$var$TOTAL_SIZE[size]];
		position[$954926fb6168ae2a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
	} else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
	return position;
}
function $954926fb6168ae2a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlayHeight, heightGrowthDirection, containerDimensions, isContainerDescendentOfBoundary, visualViewport) {
	let overlayTop = (position.top != null ? position.top : containerDimensions[$954926fb6168ae2a$var$TOTAL_SIZE.height] - (position.bottom ?? 0) - overlayHeight) - (containerDimensions.scroll.top ?? 0);
	let boundaryToContainerTransformOffset = isContainerDescendentOfBoundary ? containerOffsetWithBoundary.top : 0;
	let boundingRect = {
		top: Math.max(boundaryDimensions.top + boundaryToContainerTransformOffset, (visualViewport?.offsetTop ?? boundaryDimensions.top) + boundaryToContainerTransformOffset),
		bottom: Math.min(boundaryDimensions.top + boundaryDimensions.height + boundaryToContainerTransformOffset, (visualViewport?.offsetTop ?? 0) + (visualViewport?.height ?? 0))
	};
	return heightGrowthDirection !== "top" ? Math.max(0, boundingRect.bottom - overlayTop - ((margins.top ?? 0) + (margins.bottom ?? 0) + padding)) : Math.max(0, overlayTop + overlayHeight - boundingRect.top - ((margins.top ?? 0) + (margins.bottom ?? 0) + padding));
}
function $954926fb6168ae2a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo, containerDimensions, isContainerDescendentOfBoundary) {
	let { placement, axis, size } = placementInfo;
	if (placement === axis) return Math.max(0, childOffset[axis] - (containerDimensions.scroll[axis] ?? 0) - (boundaryDimensions[axis] + (isContainerDescendentOfBoundary ? containerOffsetWithBoundary[axis] : 0)) - (margins[axis] ?? 0) - margins[$954926fb6168ae2a$var$FLIPPED_DIRECTION[axis]] - padding);
	return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + (isContainerDescendentOfBoundary ? containerOffsetWithBoundary[axis] : 0) - childOffset[axis] - childOffset[size] + (containerDimensions.scroll[axis] ?? 0) - (margins[axis] ?? 0) - margins[$954926fb6168ae2a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $954926fb6168ae2a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset, isContainerDescendentOfBoundary, visualViewport) {
	let placementInfo = $954926fb6168ae2a$var$parsePlacement(placementInput);
	let { size, crossAxis, crossSize, placement, crossPlacement } = placementInfo;
	let position = $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
	let normalizedOffset = offset;
	let space = $954926fb6168ae2a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo, containerDimensions, isContainerDescendentOfBoundary);
	if (flip && overlaySize[size] > space) {
		let flippedPlacementInfo = $954926fb6168ae2a$var$parsePlacement(`${$954926fb6168ae2a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
		let flippedPosition = $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
		if ($954926fb6168ae2a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo, containerDimensions, isContainerDescendentOfBoundary) > space) {
			placementInfo = flippedPlacementInfo;
			position = flippedPosition;
			normalizedOffset = offset;
		}
	}
	let heightGrowthDirection = "bottom";
	if (placementInfo.axis === "top") {
		if (placementInfo.placement === "top") heightGrowthDirection = "top";
		else if (placementInfo.placement === "bottom") heightGrowthDirection = "bottom";
	} else if (placementInfo.crossAxis === "top") {
		if (placementInfo.crossPlacement === "top") heightGrowthDirection = "bottom";
		else if (placementInfo.crossPlacement === "bottom") heightGrowthDirection = "top";
	}
	let delta = $954926fb6168ae2a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
	position[crossAxis] += delta;
	let maxHeight = $954926fb6168ae2a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlaySize.height, heightGrowthDirection, containerDimensions, isContainerDescendentOfBoundary, visualViewport);
	if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
	overlaySize.height = Math.min(overlaySize.height, maxHeight);
	position = $954926fb6168ae2a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset, containerDimensions);
	delta = $954926fb6168ae2a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
	position[crossAxis] += delta;
	let arrowPosition = {};
	let origin = childOffset[crossAxis] - position[crossAxis] - margins[$954926fb6168ae2a$var$AXIS[crossAxis]];
	let preferredArrowPosition = origin + .5 * childOffset[crossSize];
	const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
	const overlayMargin = $954926fb6168ae2a$var$AXIS[crossAxis] === "left" ? (margins.left ?? 0) + (margins.right ?? 0) : (margins.top ?? 0) + (margins.bottom ?? 0);
	const arrowMaxPosition = overlaySize[crossSize] - overlayMargin - arrowSize / 2 - arrowBoundaryOffset;
	arrowPosition[crossAxis] = $240e9101ba2842f5$export$7d15b64cf5a3a4c4($240e9101ba2842f5$export$7d15b64cf5a3a4c4(preferredArrowPosition, childOffset[crossAxis] + arrowSize / 2 - (position[crossAxis] + margins[$954926fb6168ae2a$var$AXIS[crossAxis]]), childOffset[crossAxis] + childOffset[crossSize] - arrowSize / 2 - (position[crossAxis] + margins[$954926fb6168ae2a$var$AXIS[crossAxis]])), arrowMinPosition, arrowMaxPosition);
	({placement: placement, crossPlacement: crossPlacement} = placementInfo);
	if (arrowSize) origin = arrowPosition[crossAxis];
	else if (crossPlacement === "right") origin += childOffset[crossSize];
	else if (crossPlacement === "center") origin += childOffset[crossSize] / 2;
	let crossOrigin = placement === "left" || placement === "top" ? overlaySize[size] : 0;
	let triggerAnchorPoint = {
		x: placement === "top" || placement === "bottom" ? origin : crossOrigin,
		y: placement === "left" || placement === "right" ? origin : crossOrigin
	};
	return {
		position,
		maxHeight,
		arrowOffsetLeft: arrowPosition.left,
		arrowOffsetTop: arrowPosition.top,
		placement,
		triggerAnchorPoint
	};
}
function $954926fb6168ae2a$export$b3ceb0cbf1056d98(opts) {
	let { placement, targetNode, overlayNode, scrollNode, padding, shouldFlip, boundaryElement, offset, crossOffset, maxHeight, arrowSize = 0, arrowBoundaryOffset = 0, targetRect } = opts;
	let visualViewport = $954926fb6168ae2a$var$getVisualViewport();
	let container = overlayNode instanceof HTMLElement ? $954926fb6168ae2a$var$getContainingBlock(overlayNode) : document.documentElement;
	let isViewportContainer = container === document.documentElement;
	const containerPositionStyle = window.getComputedStyle(container).position;
	let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== "static";
	let childOffset = isViewportContainer ? $954926fb6168ae2a$var$getOffset(targetNode, false, targetRect) : $954926fb6168ae2a$var$getPosition(targetNode, container, false, targetRect);
	if (!isViewportContainer) {
		let { marginTop, marginLeft } = window.getComputedStyle(targetNode);
		childOffset.top += parseInt(marginTop, 10) || 0;
		childOffset.left += parseInt(marginLeft, 10) || 0;
	}
	let overlaySize = $954926fb6168ae2a$var$getOffset(overlayNode, true);
	let margins = $954926fb6168ae2a$var$getMargins(overlayNode);
	overlaySize.width += (margins.left ?? 0) + (margins.right ?? 0);
	overlaySize.height += (margins.top ?? 0) + (margins.bottom ?? 0);
	let scrollSize = $954926fb6168ae2a$var$getScroll(scrollNode);
	let boundaryDimensions = $954926fb6168ae2a$var$getContainerDimensions(boundaryElement, visualViewport);
	let containerDimensions = $954926fb6168ae2a$var$getContainerDimensions(container, visualViewport);
	let containerOffsetWithBoundary;
	if ((boundaryElement.tagName === "BODY" || boundaryElement.tagName === "HTML") && !isViewportContainer) {
		let containerRect = $954926fb6168ae2a$export$4b834cebd9e5cebe(container, false);
		containerOffsetWithBoundary = {
			top: -(containerRect.top - boundaryDimensions.top),
			left: -(containerRect.left - boundaryDimensions.left),
			width: 0,
			height: 0
		};
	} else if ((boundaryElement.tagName === "BODY" || boundaryElement.tagName === "HTML") && isViewportContainer) containerOffsetWithBoundary = {
		top: 0,
		left: 0,
		width: 0,
		height: 0
	};
	else containerOffsetWithBoundary = $954926fb6168ae2a$var$getPosition(boundaryElement, container, false);
	let isContainerDescendentOfBoundary = $23f2114a1b82827e$export$4282f70798064fe0(boundaryElement, container);
	return $954926fb6168ae2a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset, isContainerDescendentOfBoundary, visualViewport);
}
function $954926fb6168ae2a$export$4b834cebd9e5cebe(node, ignoreScale) {
	let { top, left, width, height } = node.getBoundingClientRect();
	if (ignoreScale && node instanceof node.ownerDocument.defaultView.HTMLElement) {
		width = node.offsetWidth;
		height = node.offsetHeight;
	}
	return {
		top,
		left,
		width,
		height
	};
}
function $954926fb6168ae2a$var$getOffset(node, ignoreScale, overrideRect) {
	let { top, left, width, height } = overrideRect || $954926fb6168ae2a$export$4b834cebd9e5cebe(node, ignoreScale);
	let { scrollTop, scrollLeft, clientTop, clientLeft } = document.documentElement;
	return {
		top: top + scrollTop - clientTop,
		left: left + scrollLeft - clientLeft,
		width,
		height
	};
}
function $954926fb6168ae2a$var$getPosition(node, parent, ignoreScale, overrideRect) {
	let style = window.getComputedStyle(node);
	let offset;
	if (style.position === "fixed") offset = overrideRect || $954926fb6168ae2a$export$4b834cebd9e5cebe(node, ignoreScale);
	else {
		offset = $954926fb6168ae2a$var$getOffset(node, ignoreScale, overrideRect);
		let parentOffset = $954926fb6168ae2a$var$getOffset(parent, ignoreScale);
		let parentStyle = window.getComputedStyle(parent);
		parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
		parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
		offset.top -= parentOffset.top;
		offset.left -= parentOffset.left;
	}
	offset.top -= parseInt(style.marginTop, 10) || 0;
	offset.left -= parseInt(style.marginLeft, 10) || 0;
	return offset;
}
function $954926fb6168ae2a$var$getContainingBlock(node) {
	let offsetParent = node.offsetParent;
	if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === "static" && !$954926fb6168ae2a$var$isContainingBlock(offsetParent)) offsetParent = document.documentElement;
	if (offsetParent == null) {
		offsetParent = node.parentElement;
		while (offsetParent && !$954926fb6168ae2a$var$isContainingBlock(offsetParent)) offsetParent = offsetParent.parentElement;
	}
	return offsetParent || document.documentElement;
}
function $954926fb6168ae2a$var$isContainingBlock(node) {
	let style = window.getComputedStyle(node);
	return style.transform !== "none" || /transform|perspective/.test(style.willChange) || style.filter !== "none" || style.contain === "paint" || "backdropFilter" in style && style.backdropFilter !== "none" || "WebkitBackdropFilter" in style && style.WebkitBackdropFilter !== "none";
}
var $954926fb6168ae2a$var$AXIS, $954926fb6168ae2a$var$FLIPPED_DIRECTION, $954926fb6168ae2a$var$CROSS_AXIS, $954926fb6168ae2a$var$AXIS_SIZE, $954926fb6168ae2a$var$TOTAL_SIZE, $954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE, $954926fb6168ae2a$var$getVisualViewport;
var init_calculatePosition = __esmMin((() => {
	init_platform();
	init_DOMFunctions();
	init_number();
	$954926fb6168ae2a$var$AXIS = {
		top: "top",
		bottom: "top",
		left: "left",
		right: "left"
	};
	$954926fb6168ae2a$var$FLIPPED_DIRECTION = {
		top: "bottom",
		bottom: "top",
		left: "right",
		right: "left"
	};
	$954926fb6168ae2a$var$CROSS_AXIS = {
		top: "left",
		left: "top"
	};
	$954926fb6168ae2a$var$AXIS_SIZE = {
		top: "height",
		left: "width"
	};
	$954926fb6168ae2a$var$TOTAL_SIZE = {
		width: "totalWidth",
		height: "totalHeight"
	};
	$954926fb6168ae2a$var$PARSED_PLACEMENT_CACHE = {};
	$954926fb6168ae2a$var$getVisualViewport = () => typeof document !== "undefined" ? window.visualViewport : null;
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/useCloseOnScroll.mjs
function $22e2f5f6490788e8$export$18fc8428861184da(opts) {
	let { triggerRef, isOpen, onClose } = opts;
	(0, import_react$28.useEffect)(() => {
		if (!isOpen || onClose === null) return;
		let onScroll = (e) => {
			let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
			if (!triggerRef.current || target instanceof Node && !$23f2114a1b82827e$export$4282f70798064fe0(target, triggerRef.current)) return;
			if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement) return;
			let onCloseHandler = onClose || $22e2f5f6490788e8$export$f6211563215e3b37.get(triggerRef.current);
			if (onCloseHandler) onCloseHandler();
		};
		return $d447af545b77c9f1$export$f531f92e2a15358f($23f2114a1b82827e$export$da7af4355d792141(triggerRef.current), "scroll", onScroll, true);
	}, [
		isOpen,
		onClose,
		triggerRef
	]);
}
var import_react$28, $22e2f5f6490788e8$export$f6211563215e3b37;
var init_useCloseOnScroll = __esmMin((() => {
	init_domHelpers();
	init_DOMFunctions();
	import_react$28 = /* @__PURE__ */ __toESM(require_react(), 1);
	$22e2f5f6490788e8$export$f6211563215e3b37 = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/i18n/utils.mjs
function $d805ff57cab8bee2$export$702d680b21cbd764(localeString) {
	if (Intl.Locale) {
		let locale = new Intl.Locale(localeString).maximize();
		let textInfo = typeof locale.getTextInfo === "function" ? locale.getTextInfo() : locale.textInfo;
		if (textInfo) return textInfo.direction === "rtl";
		if (locale.script) return $d805ff57cab8bee2$var$RTL_SCRIPTS.has(locale.script);
	}
	let lang = localeString.split("-")[0];
	return $d805ff57cab8bee2$var$RTL_LANGS.has(lang);
}
var $d805ff57cab8bee2$var$RTL_SCRIPTS, $d805ff57cab8bee2$var$RTL_LANGS;
var init_utils$1 = __esmMin((() => {
	$d805ff57cab8bee2$var$RTL_SCRIPTS = /* @__PURE__ */ new Set([
		"Arab",
		"Syrc",
		"Samr",
		"Mand",
		"Thaa",
		"Mend",
		"Nkoo",
		"Adlm",
		"Rohg",
		"Hebr"
	]);
	$d805ff57cab8bee2$var$RTL_LANGS = /* @__PURE__ */ new Set([
		"ae",
		"ar",
		"arc",
		"bcc",
		"bqi",
		"ckb",
		"dv",
		"fa",
		"glk",
		"he",
		"ku",
		"mzn",
		"nqo",
		"pnb",
		"ps",
		"sd",
		"ug",
		"ur",
		"yi"
	]);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/i18n/useDefaultLocale.mjs
function $520a025cdb0d710d$export$f09106e7c6677ec5() {
	let locale = typeof window !== "undefined" && window[$520a025cdb0d710d$var$localeSymbol] || typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
	try {
		Intl.DateTimeFormat.supportedLocalesOf([locale]);
	} catch {
		locale = "en-US";
	}
	return {
		locale,
		direction: $d805ff57cab8bee2$export$702d680b21cbd764(locale) ? "rtl" : "ltr"
	};
}
function $520a025cdb0d710d$var$updateLocale() {
	$520a025cdb0d710d$var$currentLocale = $520a025cdb0d710d$export$f09106e7c6677ec5();
	for (let listener of $520a025cdb0d710d$var$listeners) listener($520a025cdb0d710d$var$currentLocale);
}
function $520a025cdb0d710d$export$188ec29ebc2bdc3a() {
	let isSSR = $c7eafbbe1ea5834e$export$535bd6ca7f90a273();
	let [defaultLocale, setDefaultLocale] = (0, import_react$27.useState)($520a025cdb0d710d$var$currentLocale);
	(0, import_react$27.useEffect)(() => {
		if ($520a025cdb0d710d$var$listeners.size === 0) window.addEventListener("languagechange", $520a025cdb0d710d$var$updateLocale);
		$520a025cdb0d710d$var$listeners.add(setDefaultLocale);
		return () => {
			$520a025cdb0d710d$var$listeners.delete(setDefaultLocale);
			if ($520a025cdb0d710d$var$listeners.size === 0) window.removeEventListener("languagechange", $520a025cdb0d710d$var$updateLocale);
		};
	}, []);
	if (isSSR) return {
		locale: typeof window !== "undefined" && window[$520a025cdb0d710d$var$localeSymbol] || "en-US",
		direction: "ltr"
	};
	return defaultLocale;
}
var import_react$27, $520a025cdb0d710d$var$localeSymbol, $520a025cdb0d710d$var$currentLocale, $520a025cdb0d710d$var$listeners;
var init_useDefaultLocale = __esmMin((() => {
	init_utils$1();
	init_SSRProvider();
	import_react$27 = /* @__PURE__ */ __toESM(require_react(), 1);
	$520a025cdb0d710d$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
	$520a025cdb0d710d$var$currentLocale = $520a025cdb0d710d$export$f09106e7c6677ec5();
	$520a025cdb0d710d$var$listeners = /* @__PURE__ */ new Set();
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/i18n/I18nProvider.mjs
function $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7() {
	let defaultLocale = $520a025cdb0d710d$export$188ec29ebc2bdc3a();
	return (0, import_react$26.useContext)($2eb8e6d23f3d0cb0$var$I18nContext) || defaultLocale;
}
var import_react$26, $2eb8e6d23f3d0cb0$var$I18nContext;
var init_I18nProvider = __esmMin((() => {
	init_useDefaultLocale();
	import_react$26 = /* @__PURE__ */ __toESM(require_react(), 1);
	$2eb8e6d23f3d0cb0$var$I18nContext = /*#__PURE__*/ import_react$26.createContext(null);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/useOverlayPosition.mjs
function $b3526bc71400be8d$export$d39e1813b3bdd0e1(props) {
	let { direction } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
	let { arrowSize, targetRef, overlayRef, arrowRef, scrollRef = overlayRef, placement = "bottom", containerPadding = 12, shouldFlip = true, boundaryElement = typeof document !== "undefined" ? document.body : null, offset = 0, crossOffset = 0, shouldUpdatePosition = true, isOpen = true, onClose, maxHeight, arrowBoundaryOffset = 0, getTargetRect } = props;
	let [position, setPosition] = (0, import_react$25.useState)(null);
	let deps = [
		shouldUpdatePosition,
		placement,
		overlayRef.current,
		targetRef.current,
		arrowRef?.current,
		scrollRef.current,
		containerPadding,
		shouldFlip,
		boundaryElement,
		offset,
		crossOffset,
		isOpen,
		direction,
		maxHeight,
		arrowBoundaryOffset,
		arrowSize
	];
	let lastScale = (0, import_react$25.useRef)($b3526bc71400be8d$var$visualViewport?.scale);
	(0, import_react$25.useEffect)(() => {
		if (isOpen) lastScale.current = $b3526bc71400be8d$var$visualViewport?.scale;
	}, [isOpen]);
	let updatePosition = (0, import_react$25.useCallback)(() => {
		if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !boundaryElement) return;
		if ($b3526bc71400be8d$var$visualViewport?.scale !== lastScale.current) return;
		let anchor = null;
		if (scrollRef.current && $23f2114a1b82827e$export$b4f377a2b6254582(scrollRef.current)) {
			let anchorRect = $23f2114a1b82827e$export$cd4e5573fbe2b576()?.getBoundingClientRect();
			let scrollRect = scrollRef.current.getBoundingClientRect();
			anchor = {
				type: "top",
				offset: (anchorRect?.top ?? 0) - scrollRect.top
			};
			if (anchor.offset > scrollRect.height / 2) {
				anchor.type = "bottom";
				anchor.offset = (anchorRect?.bottom ?? 0) - scrollRect.bottom;
			}
		}
		let overlay = overlayRef.current;
		if (!maxHeight && overlayRef.current) {
			overlay.style.top = "0px";
			overlay.style.bottom = "";
			overlay.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px";
		}
		let position = $954926fb6168ae2a$export$b3ceb0cbf1056d98({
			placement: $b3526bc71400be8d$var$translateRTL(placement, direction),
			overlayNode: overlayRef.current,
			targetNode: targetRef.current,
			scrollNode: scrollRef.current || overlayRef.current,
			padding: containerPadding,
			shouldFlip,
			boundaryElement,
			offset,
			crossOffset,
			maxHeight,
			arrowSize: arrowSize ?? (arrowRef?.current ? $954926fb6168ae2a$export$4b834cebd9e5cebe(arrowRef.current, true).width : 0),
			arrowBoundaryOffset,
			targetRect: getTargetRect?.(targetRef.current)
		});
		if (!position.position) return;
		overlay.style.top = "";
		overlay.style.bottom = "";
		overlay.style.left = "";
		overlay.style.right = "";
		Object.keys(position.position).forEach((key) => overlay.style[key] = position.position[key] + "px");
		overlay.style.maxHeight = position.maxHeight != null ? position.maxHeight + "px" : "";
		let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
		if (anchor && activeElement && scrollRef.current) {
			let anchorRect = activeElement.getBoundingClientRect();
			let scrollRect = scrollRef.current.getBoundingClientRect();
			let newOffset = anchorRect[anchor.type] - scrollRect[anchor.type];
			scrollRef.current.scrollTop += newOffset - anchor.offset;
		}
		setPosition(position);
	}, deps);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(updatePosition, deps);
	$b3526bc71400be8d$var$useResize(updatePosition);
	$970072cf4b13fde3$export$683480f191c0e3ea({
		ref: overlayRef,
		onResize: updatePosition
	});
	$970072cf4b13fde3$export$683480f191c0e3ea({
		ref: targetRef,
		onResize: updatePosition
	});
	let isResizing = (0, import_react$25.useRef)(false);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		let timeout;
		let onResize = () => {
			isResizing.current = true;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				isResizing.current = false;
			}, 500);
			updatePosition();
		};
		let onScroll = () => {
			if (isResizing.current) onResize();
		};
		$b3526bc71400be8d$var$visualViewport?.addEventListener("resize", onResize);
		$b3526bc71400be8d$var$visualViewport?.addEventListener("scroll", onScroll);
		let cleanup = $d447af545b77c9f1$export$f531f92e2a15358f($23f2114a1b82827e$export$da7af4355d792141(window), "scroll", onScroll);
		return () => {
			$b3526bc71400be8d$var$visualViewport?.removeEventListener("resize", onResize);
			$b3526bc71400be8d$var$visualViewport?.removeEventListener("scroll", onScroll);
			cleanup();
		};
	}, [updatePosition]);
	let close = (0, import_react$25.useCallback)(() => {
		if (!isResizing.current) onClose?.();
	}, [onClose, isResizing]);
	$22e2f5f6490788e8$export$18fc8428861184da({
		triggerRef: targetRef,
		isOpen,
		onClose: onClose && close
	});
	return {
		overlayProps: { style: {
			position: position ? "absolute" : "fixed",
			top: !position ? 0 : void 0,
			left: !position ? 0 : void 0,
			zIndex: 1e5,
			...position?.position,
			maxHeight: position?.maxHeight ?? "100vh"
		} },
		placement: position?.placement ?? null,
		triggerAnchorPoint: position?.triggerAnchorPoint ?? null,
		arrowProps: {
			"aria-hidden": "true",
			role: "presentation",
			style: {
				left: position?.arrowOffsetLeft,
				top: position?.arrowOffsetTop
			}
		},
		updatePosition
	};
}
function $b3526bc71400be8d$var$useResize(onResize) {
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		window.addEventListener("resize", onResize, false);
		return () => {
			window.removeEventListener("resize", onResize, false);
		};
	}, [onResize]);
}
function $b3526bc71400be8d$var$translateRTL(position, direction) {
	if (direction === "rtl") return position.replace("start", "right").replace("end", "left");
	return position.replace("start", "left").replace("end", "right");
}
var import_react$25, $b3526bc71400be8d$var$visualViewport;
var init_useOverlayPosition = __esmMin((() => {
	init_domHelpers();
	init_calculatePosition();
	init_DOMFunctions();
	init_useCloseOnScroll();
	init_useLayoutEffect();
	init_I18nProvider();
	init_useResizeObserver();
	import_react$25 = /* @__PURE__ */ __toESM(require_react(), 1);
	$b3526bc71400be8d$var$visualViewport = typeof document !== "undefined" ? window.visualViewport : null;
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/PortalProvider.mjs
function $72abaeab4d80592f$export$78efe591171d7d45(props) {
	let { getContainer } = props;
	let { getContainer: ctxGetContainer } = $72abaeab4d80592f$export$9fc1347d4195ccb3();
	return /*#__PURE__*/ import_react$24.createElement($72abaeab4d80592f$export$60d741e20e0aa309.Provider, { value: { getContainer: getContainer === null ? void 0 : getContainer ?? ctxGetContainer } }, props.children);
}
function $72abaeab4d80592f$export$9fc1347d4195ccb3() {
	return (0, import_react$24.useContext)($72abaeab4d80592f$export$60d741e20e0aa309) ?? {};
}
var import_react$24, $72abaeab4d80592f$export$60d741e20e0aa309;
var init_PortalProvider = __esmMin((() => {
	import_react$24 = /* @__PURE__ */ __toESM(require_react(), 1);
	$72abaeab4d80592f$export$60d741e20e0aa309 = /*#__PURE__*/ (0, import_react$24.createContext)({});
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/useModal.mjs
function $c07df45195231803$export$178405afcd8c5eb(props) {
	let { children } = props;
	let parent = (0, import_react$23.useContext)($c07df45195231803$var$Context);
	let [modalCount, setModalCount] = (0, import_react$23.useState)(0);
	let context = (0, import_react$23.useMemo)(() => ({
		parent,
		modalCount,
		addModal() {
			setModalCount((count) => count + 1);
			if (parent) parent.addModal();
		},
		removeModal() {
			setModalCount((count) => count - 1);
			if (parent) parent.removeModal();
		}
	}), [parent, modalCount]);
	return /*#__PURE__*/ import_react$23.createElement($c07df45195231803$var$Context.Provider, { value: context }, children);
}
function $c07df45195231803$export$d9aaed4c3ece1bc0() {
	let context = (0, import_react$23.useContext)($c07df45195231803$var$Context);
	return { modalProviderProps: { "aria-hidden": context && context.modalCount > 0 ? true : void 0 } };
}
/**
* Creates a root node that will be aria-hidden if there are other modals open.
*/ function $c07df45195231803$var$OverlayContainerDOM(props) {
	let { modalProviderProps } = $c07df45195231803$export$d9aaed4c3ece1bc0();
	return /*#__PURE__*/ import_react$23.createElement("div", {
		"data-overlay-container": true,
		...props,
		...modalProviderProps
	});
}
function $c07df45195231803$export$bf688221f59024e5(props) {
	return /*#__PURE__*/ import_react$23.createElement($c07df45195231803$export$178405afcd8c5eb, null, /*#__PURE__*/ import_react$23.createElement($c07df45195231803$var$OverlayContainerDOM, props));
}
function $c07df45195231803$export$b47c3594eab58386(props) {
	let isSSR = $c7eafbbe1ea5834e$export$535bd6ca7f90a273();
	let { portalContainer = isSSR ? null : document.body, ...rest } = props;
	let { getContainer } = $72abaeab4d80592f$export$9fc1347d4195ccb3();
	if (!props.portalContainer && getContainer) portalContainer = getContainer();
	import_react$23.useEffect(() => {
		if (portalContainer?.closest("[data-overlay-container]")) throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
	}, [portalContainer]);
	if (!portalContainer) return null;
	let contents = /*#__PURE__*/ import_react$23.createElement($c07df45195231803$export$bf688221f59024e5, rest);
	return /*#__PURE__*/ import_react_dom$4.createPortal(contents, portalContainer);
}
var import_react$23, import_react_dom$4, $c07df45195231803$var$Context;
var init_useModal = __esmMin((() => {
	init_SSRProvider();
	init_PortalProvider();
	import_react$23 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom$4 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	$c07df45195231803$var$Context = /*#__PURE__*/ import_react$23.createContext(null);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/useHover.mjs
function $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents() {
	$e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = true;
	setTimeout(() => {
		$e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
	}, 500);
}
function $e969f22b6713ca4a$var$handleGlobalPointerEvent(e) {
	if (e.pointerType === "touch") $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $e969f22b6713ca4a$var$setupGlobalTouchEvents() {
	let ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(null);
	if (typeof ownerDocument === "undefined") return;
	if ($e969f22b6713ca4a$var$hoverCount === 0) {
		if (typeof PointerEvent !== "undefined") ownerDocument.addEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
	}
	$e969f22b6713ca4a$var$hoverCount++;
	return () => {
		$e969f22b6713ca4a$var$hoverCount--;
		if ($e969f22b6713ca4a$var$hoverCount > 0) return;
		if (typeof PointerEvent !== "undefined") ownerDocument.removeEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
	};
}
function $e969f22b6713ca4a$export$ae780daf29e6d456(props) {
	let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
	let [isHovered, setHovered] = (0, import_react$22.useState)(false);
	let state = (0, import_react$22.useRef)({
		isHovered: false,
		ignoreEmulatedMouseEvents: false,
		pointerType: "",
		target: null
	}).current;
	(0, import_react$22.useEffect)($e969f22b6713ca4a$var$setupGlobalTouchEvents, []);
	let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
	let { hoverProps, triggerHoverEnd } = (0, import_react$22.useMemo)(() => {
		let triggerHoverStart = (event, pointerType) => {
			state.pointerType = pointerType;
			if (isDisabled || pointerType === "touch" || state.isHovered || !$23f2114a1b82827e$export$4282f70798064fe0(event.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(event))) return;
			state.isHovered = true;
			let target = event.currentTarget;
			state.target = target;
			addGlobalListener($d447af545b77c9f1$export$b204af158042fbac($23f2114a1b82827e$export$e58f029f0fbfdb29(event)), "pointerover", (e) => {
				if (state.isHovered && state.target && !$23f2114a1b82827e$export$4282f70798064fe0(state.target, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) triggerHoverEnd(e, e.pointerType);
			}, { capture: true });
			if (onHoverStart) onHoverStart({
				type: "hoverstart",
				target,
				pointerType
			});
			if (onHoverChange) onHoverChange(true);
			setHovered(true);
		};
		let triggerHoverEnd = (event, pointerType) => {
			let target = state.target;
			state.pointerType = "";
			state.target = null;
			if (pointerType === "touch" || !state.isHovered || !target) return;
			state.isHovered = false;
			removeAllGlobalListeners();
			if (onHoverEnd) onHoverEnd({
				type: "hoverend",
				target,
				pointerType
			});
			if (onHoverChange) onHoverChange(false);
			setHovered(false);
		};
		let hoverProps = {};
		if (typeof PointerEvent !== "undefined") {
			hoverProps.onPointerEnter = (e) => {
				if ($e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
				triggerHoverStart(e, e.pointerType);
			};
			hoverProps.onPointerLeave = (e) => {
				if (!isDisabled && $23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) triggerHoverEnd(e, e.pointerType);
			};
		}
		return {
			hoverProps,
			triggerHoverEnd
		};
	}, [
		onHoverStart,
		onHoverChange,
		onHoverEnd,
		isDisabled,
		state,
		addGlobalListener,
		removeAllGlobalListeners
	]);
	(0, import_react$22.useEffect)(() => {
		if (isDisabled) triggerHoverEnd({ currentTarget: state.target }, state.pointerType);
	}, [isDisabled]);
	return {
		hoverProps,
		isHovered
	};
}
var import_react$22, $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents, $e969f22b6713ca4a$var$hoverCount;
var init_useHover = __esmMin((() => {
	init_DOMFunctions();
	init_domHelpers();
	init_useGlobalListeners();
	import_react$22 = /* @__PURE__ */ __toESM(require_react(), 1);
	$e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
	$e969f22b6713ca4a$var$hoverCount = 0;
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/ar-AE.mjs
var $e5024b484f7c3e21$exports;
var init_ar_AE = __esmMin((() => {
	$e5024b484f7c3e21$exports = {};
	$e5024b484f7c3e21$exports = { "dismiss": `\u{62A}\u{62C}\u{627}\u{647}\u{644}` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/bg-BG.mjs
var $0c4209a7da92851c$exports;
var init_bg_BG = __esmMin((() => {
	$0c4209a7da92851c$exports = {};
	$0c4209a7da92851c$exports = { "dismiss": `\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/cs-CZ.mjs
var $75fa0397632d287b$exports;
var init_cs_CZ = __esmMin((() => {
	$75fa0397632d287b$exports = {};
	$75fa0397632d287b$exports = { "dismiss": `Odstranit` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/da-DK.mjs
var $3fc6e6880cad247e$exports;
var init_da_DK = __esmMin((() => {
	$3fc6e6880cad247e$exports = {};
	$3fc6e6880cad247e$exports = { "dismiss": `Luk` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/de-DE.mjs
var $5f637eb0c91d0f64$exports;
var init_de_DE = __esmMin((() => {
	$5f637eb0c91d0f64$exports = {};
	$5f637eb0c91d0f64$exports = { "dismiss": `Schlie\xdfen` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/el-GR.mjs
var $5a0b3a154dcf111b$exports;
var init_el_GR = __esmMin((() => {
	$5a0b3a154dcf111b$exports = {};
	$5a0b3a154dcf111b$exports = { "dismiss": `\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/en-US.mjs
var $ea518f18e6f13288$exports;
var init_en_US = __esmMin((() => {
	$ea518f18e6f13288$exports = {};
	$ea518f18e6f13288$exports = { "dismiss": `Dismiss` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/es-ES.mjs
var $3bf3cb0ce48a8078$exports;
var init_es_ES = __esmMin((() => {
	$3bf3cb0ce48a8078$exports = {};
	$3bf3cb0ce48a8078$exports = { "dismiss": `Descartar` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/et-EE.mjs
var $a416146243e75233$exports;
var init_et_EE = __esmMin((() => {
	$a416146243e75233$exports = {};
	$a416146243e75233$exports = { "dismiss": `L\xf5peta` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/fi-FI.mjs
var $2872659e6c428111$exports;
var init_fi_FI = __esmMin((() => {
	$2872659e6c428111$exports = {};
	$2872659e6c428111$exports = { "dismiss": `Hylk\xe4\xe4` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/fr-FR.mjs
var $657a7a1f03941145$exports;
var init_fr_FR = __esmMin((() => {
	$657a7a1f03941145$exports = {};
	$657a7a1f03941145$exports = { "dismiss": `Rejeter` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/he-IL.mjs
var $9f18aee5ddbe5e0f$exports;
var init_he_IL = __esmMin((() => {
	$9f18aee5ddbe5e0f$exports = {};
	$9f18aee5ddbe5e0f$exports = { "dismiss": `\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/hr-HR.mjs
var $e2e63adb0c1f3db6$exports;
var init_hr_HR = __esmMin((() => {
	$e2e63adb0c1f3db6$exports = {};
	$e2e63adb0c1f3db6$exports = { "dismiss": `Odbaci` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/hu-HU.mjs
var $46fbd53e8bc70315$exports;
var init_hu_HU = __esmMin((() => {
	$46fbd53e8bc70315$exports = {};
	$46fbd53e8bc70315$exports = { "dismiss": `Elutas\xedt\xe1s` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/it-IT.mjs
var $47234f3018c55486$exports;
var init_it_IT = __esmMin((() => {
	$47234f3018c55486$exports = {};
	$47234f3018c55486$exports = { "dismiss": `Ignora` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/ja-JP.mjs
var $0dfacfad01736641$exports;
var init_ja_JP = __esmMin((() => {
	$0dfacfad01736641$exports = {};
	$0dfacfad01736641$exports = { "dismiss": `\u{9589}\u{3058}\u{308B}` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/ko-KR.mjs
var $a9056b50f6fbb1ef$exports;
var init_ko_KR = __esmMin((() => {
	$a9056b50f6fbb1ef$exports = {};
	$a9056b50f6fbb1ef$exports = { "dismiss": `\u{BB34}\u{C2DC}` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/lt-LT.mjs
var $217b78056fce917f$exports;
var init_lt_LT = __esmMin((() => {
	$217b78056fce917f$exports = {};
	$217b78056fce917f$exports = { "dismiss": `Atmesti` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/lv-LV.mjs
var $c32f8c2b8956f20a$exports;
var init_lv_LV = __esmMin((() => {
	$c32f8c2b8956f20a$exports = {};
	$c32f8c2b8956f20a$exports = { "dismiss": `Ner\u{101}d\u{12B}t` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/nb-NO.mjs
var $f65392426e2dae6a$exports;
var init_nb_NO = __esmMin((() => {
	$f65392426e2dae6a$exports = {};
	$f65392426e2dae6a$exports = { "dismiss": `Lukk` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/nl-NL.mjs
var $1d0fa5f3cc68e5b0$exports;
var init_nl_NL = __esmMin((() => {
	$1d0fa5f3cc68e5b0$exports = {};
	$1d0fa5f3cc68e5b0$exports = { "dismiss": `Negeren` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/pl-PL.mjs
var $ff8aa6518e51f809$exports;
var init_pl_PL = __esmMin((() => {
	$ff8aa6518e51f809$exports = {};
	$ff8aa6518e51f809$exports = { "dismiss": `Zignoruj` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/pt-BR.mjs
var $fe3a4eb3eebfb0a2$exports;
var init_pt_BR = __esmMin((() => {
	$fe3a4eb3eebfb0a2$exports = {};
	$fe3a4eb3eebfb0a2$exports = { "dismiss": `Descartar` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/pt-PT.mjs
var $f692c6bcabd26695$exports;
var init_pt_PT = __esmMin((() => {
	$f692c6bcabd26695$exports = {};
	$f692c6bcabd26695$exports = { "dismiss": `Dispensar` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/ro-RO.mjs
var $627fbb16c92fb654$exports;
var init_ro_RO = __esmMin((() => {
	$627fbb16c92fb654$exports = {};
	$627fbb16c92fb654$exports = { "dismiss": `Revocare` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/ru-RU.mjs
var $2c9c1dfc72c7bac2$exports;
var init_ru_RU = __esmMin((() => {
	$2c9c1dfc72c7bac2$exports = {};
	$2c9c1dfc72c7bac2$exports = { "dismiss": `\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/sk-SK.mjs
var $7e7ece760f897013$exports;
var init_sk_SK = __esmMin((() => {
	$7e7ece760f897013$exports = {};
	$7e7ece760f897013$exports = { "dismiss": `Zru\u{161}i\u{165}` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/sl-SI.mjs
var $1e894e47be1bf217$exports;
var init_sl_SI = __esmMin((() => {
	$1e894e47be1bf217$exports = {};
	$1e894e47be1bf217$exports = { "dismiss": `Opusti` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/sr-SP.mjs
var $f4ce49adf6ef095f$exports;
var init_sr_SP = __esmMin((() => {
	$f4ce49adf6ef095f$exports = {};
	$f4ce49adf6ef095f$exports = { "dismiss": `Odbaci` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/sv-SE.mjs
var $7c9dc206185355b5$exports;
var init_sv_SE = __esmMin((() => {
	$7c9dc206185355b5$exports = {};
	$7c9dc206185355b5$exports = { "dismiss": `Avvisa` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/tr-TR.mjs
var $c288097c5ef4ae98$exports;
var init_tr_TR = __esmMin((() => {
	$c288097c5ef4ae98$exports = {};
	$c288097c5ef4ae98$exports = { "dismiss": `Kapat` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/uk-UA.mjs
var $d5863f94ad4c3f07$exports;
var init_uk_UA = __esmMin((() => {
	$d5863f94ad4c3f07$exports = {};
	$d5863f94ad4c3f07$exports = { "dismiss": `\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/zh-CN.mjs
var $34a6eb7890264192$exports;
var init_zh_CN = __esmMin((() => {
	$34a6eb7890264192$exports = {};
	$34a6eb7890264192$exports = { "dismiss": `\u{53D6}\u{6D88}` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/intl/overlays/zh-TW.mjs
var $79ae244e9d286cb7$exports;
var init_zh_TW = __esmMin((() => {
	$79ae244e9d286cb7$exports = {};
	$79ae244e9d286cb7$exports = { "dismiss": `\u{95DC}\u{9589}` };
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/intlStrings.mjs
var $8ad4f9eb0c0f6434$exports;
var init_intlStrings = __esmMin((() => {
	init_ar_AE();
	init_bg_BG();
	init_cs_CZ();
	init_da_DK();
	init_de_DE();
	init_el_GR();
	init_en_US();
	init_es_ES();
	init_et_EE();
	init_fi_FI();
	init_fr_FR();
	init_he_IL();
	init_hr_HR();
	init_hu_HU();
	init_it_IT();
	init_ja_JP();
	init_ko_KR();
	init_lt_LT();
	init_lv_LV();
	init_nb_NO();
	init_nl_NL();
	init_pl_PL();
	init_pt_BR();
	init_pt_PT();
	init_ro_RO();
	init_ru_RU();
	init_sk_SK();
	init_sl_SI();
	init_sr_SP();
	init_sv_SE();
	init_tr_TR();
	init_uk_UA();
	init_zh_CN();
	init_zh_TW();
	$8ad4f9eb0c0f6434$exports = {};
	$8ad4f9eb0c0f6434$exports = {
		"ar-AE": $e5024b484f7c3e21$exports,
		"bg-BG": $0c4209a7da92851c$exports,
		"cs-CZ": $75fa0397632d287b$exports,
		"da-DK": $3fc6e6880cad247e$exports,
		"de-DE": $5f637eb0c91d0f64$exports,
		"el-GR": $5a0b3a154dcf111b$exports,
		"en-US": $ea518f18e6f13288$exports,
		"es-ES": $3bf3cb0ce48a8078$exports,
		"et-EE": $a416146243e75233$exports,
		"fi-FI": $2872659e6c428111$exports,
		"fr-FR": $657a7a1f03941145$exports,
		"he-IL": $9f18aee5ddbe5e0f$exports,
		"hr-HR": $e2e63adb0c1f3db6$exports,
		"hu-HU": $46fbd53e8bc70315$exports,
		"it-IT": $47234f3018c55486$exports,
		"ja-JP": $0dfacfad01736641$exports,
		"ko-KR": $a9056b50f6fbb1ef$exports,
		"lt-LT": $217b78056fce917f$exports,
		"lv-LV": $c32f8c2b8956f20a$exports,
		"nb-NO": $f65392426e2dae6a$exports,
		"nl-NL": $1d0fa5f3cc68e5b0$exports,
		"pl-PL": $ff8aa6518e51f809$exports,
		"pt-BR": $fe3a4eb3eebfb0a2$exports,
		"pt-PT": $f692c6bcabd26695$exports,
		"ro-RO": $627fbb16c92fb654$exports,
		"ru-RU": $2c9c1dfc72c7bac2$exports,
		"sk-SK": $7e7ece760f897013$exports,
		"sl-SI": $1e894e47be1bf217$exports,
		"sr-SP": $f4ce49adf6ef095f$exports,
		"sv-SE": $7c9dc206185355b5$exports,
		"tr-TR": $c288097c5ef4ae98$exports,
		"uk-UA": $d5863f94ad4c3f07$exports,
		"zh-CN": $34a6eb7890264192$exports,
		"zh-TW": $79ae244e9d286cb7$exports
	};
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/i18n/useLocalizedStringFormatter.mjs
function $cf2482eff2eeeec2$var$getCachedDictionary(strings) {
	let dictionary = $cf2482eff2eeeec2$var$cache.get(strings);
	if (!dictionary) {
		dictionary = new $a747a10fe70a57da$export$c17fa47878dc55b6(strings);
		$cf2482eff2eeeec2$var$cache.set(strings, dictionary);
	}
	return dictionary;
}
function $cf2482eff2eeeec2$export$87b761675e8eaa10(strings, packageName) {
	return packageName && $a747a10fe70a57da$export$c17fa47878dc55b6.getGlobalDictionaryForPackage(packageName) || $cf2482eff2eeeec2$var$getCachedDictionary(strings);
}
function $cf2482eff2eeeec2$export$f12b703ca79dfbb1(strings, packageName) {
	let { locale } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
	let dictionary = $cf2482eff2eeeec2$export$87b761675e8eaa10(strings, packageName);
	return (0, import_react$21.useMemo)(() => new $b27c684a33948c64$export$2f817fcdc4b89ae0(locale, dictionary), [locale, dictionary]);
}
var import_react$21, $cf2482eff2eeeec2$var$cache;
var init_useLocalizedStringFormatter = __esmMin((() => {
	init_I18nProvider();
	init_dist();
	import_react$21 = /* @__PURE__ */ __toESM(require_react(), 1);
	$cf2482eff2eeeec2$var$cache = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
function $2c9edc598a03d523$export$420e68273165f4ec(props) {
	let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
	let state = (0, import_react$20.useRef)({ isFocusWithin: false });
	let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
	let onBlur = (0, import_react$20.useCallback)((e) => {
		if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
		if (state.current.isFocusWithin && !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, e.relatedTarget)) {
			state.current.isFocusWithin = false;
			removeAllGlobalListeners();
			if (onBlurWithin) onBlurWithin(e);
			if (onFocusWithinChange) onFocusWithinChange(false);
		}
	}, [
		onBlurWithin,
		onFocusWithinChange,
		state,
		removeAllGlobalListeners
	]);
	let onSyntheticFocus = $a92dc41f639950be$export$715c682d09d639cc(onBlur);
	let onFocus = (0, import_react$20.useCallback)((e) => {
		if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
		let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(eventTarget);
		const activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(ownerDocument);
		if (!state.current.isFocusWithin && activeElement === eventTarget) {
			if (onFocusWithin) onFocusWithin(e);
			if (onFocusWithinChange) onFocusWithinChange(true);
			state.current.isFocusWithin = true;
			onSyntheticFocus(e);
			let currentTarget = e.currentTarget;
			addGlobalListener(ownerDocument, "focus", (e) => {
				let eventTarget = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
				if (state.current.isFocusWithin && !$23f2114a1b82827e$export$4282f70798064fe0(currentTarget, eventTarget)) {
					let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", { relatedTarget: eventTarget });
					$a92dc41f639950be$export$c2b7abe5d61ec696(nativeEvent, currentTarget);
					let event = $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent);
					onBlur(event);
				}
			}, { capture: true });
		}
	}, [
		onFocusWithin,
		onFocusWithinChange,
		onSyntheticFocus,
		addGlobalListener,
		onBlur
	]);
	if (isDisabled) return { focusWithinProps: {
		onFocus: void 0,
		onBlur: void 0
	} };
	return { focusWithinProps: {
		onFocus,
		onBlur
	} };
}
var import_react$20;
var init_useFocusWithin = __esmMin((() => {
	init_utils$2();
	init_DOMFunctions();
	init_domHelpers();
	init_useGlobalListeners();
	import_react$20 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/DismissButton.mjs
function $parcel$interopDefault(a) {
	return a && a.__esModule ? a.default : a;
}
function $081058010ef8962e$export$2317d149ed6f78c4(props) {
	let { onDismiss, ...otherProps } = props;
	let labels = $e8ac3c3f5d4bae7f$export$d6875122194c7b44(otherProps, $cf2482eff2eeeec2$export$f12b703ca79dfbb1($parcel$interopDefault($8ad4f9eb0c0f6434$exports), "@react-aria/overlays").format("dismiss"));
	let onClick = () => {
		if (onDismiss) onDismiss();
	};
	return /*#__PURE__*/ import_react$19.createElement($ea3928288112382f$export$439d29a4e110a164, null, /*#__PURE__*/ import_react$19.createElement("button", {
		...labels,
		tabIndex: -1,
		onClick,
		style: {
			width: 1,
			height: 1
		}
	}));
}
var import_react$19;
var init_DismissButton = __esmMin((() => {
	init_intlStrings();
	init_useLabels();
	init_useLocalizedStringFormatter();
	init_VisuallyHidden();
	import_react$19 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/context.mjs
var import_react$18, $24f9a20f226ad820$export$5165eccb35aaadb5;
var init_context = __esmMin((() => {
	import_react$18 = /* @__PURE__ */ __toESM(require_react(), 1);
	$24f9a20f226ad820$export$5165eccb35aaadb5 = import_react$18.createContext({ register: () => {} });
	$24f9a20f226ad820$export$5165eccb35aaadb5.displayName = "PressResponderContext";
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/PressResponder.mjs
function $0d47b37c475c5231$export$cf75428e0b9ed1ea({ children }) {
	let context = (0, import_react$17.useMemo)(() => ({ register: () => {} }), []);
	return /*#__PURE__*/ import_react$17.createElement($24f9a20f226ad820$export$5165eccb35aaadb5.Provider, { value: context }, children);
}
var import_react$17, $0d47b37c475c5231$export$3351871ee4b288b8;
var init_PressResponder = __esmMin((() => {
	init_mergeProps();
	init_context();
	init_useObjectRef();
	init_useSyncRef();
	import_react$17 = /* @__PURE__ */ __toESM(require_react(), 1);
	$0d47b37c475c5231$export$3351871ee4b288b8 = /*#__PURE__*/ import_react$17.forwardRef(({ children, ...props }, ref) => {
		let isRegistered = (0, import_react$17.useRef)(false);
		let prevContext = (0, import_react$17.useContext)($24f9a20f226ad820$export$5165eccb35aaadb5);
		let context = $bbaa08b3cd72f041$export$9d1611c77c2fe928(prevContext || {}, {
			...props,
			register() {
				isRegistered.current = true;
				if (prevContext) prevContext.register();
			}
		});
		context.ref = $03e8ab2d84d7657a$export$4338b53315abf666(ref || prevContext?.ref);
		$b7115c395c64f7b5$export$4debdb1a3f0fa79e(prevContext, context.ref);
		(0, import_react$17.useEffect)(() => {
			if (!isRegistered.current) isRegistered.current = true;
		}, []);
		return /*#__PURE__*/ import_react$17.createElement($24f9a20f226ad820$export$5165eccb35aaadb5.Provider, { value: context }, children);
	});
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/Overlay.mjs
function $d7a937236970dc7f$export$c6fdb837b070b4ff(props) {
	let isSSR = $c7eafbbe1ea5834e$export$535bd6ca7f90a273();
	let { portalContainer = isSSR ? null : document.body, isExiting } = props;
	let [contain, setContain] = (0, import_react$16.useState)(false);
	let contextValue = (0, import_react$16.useMemo)(() => ({
		contain,
		setContain
	}), [contain, setContain]);
	let { getContainer } = $72abaeab4d80592f$export$9fc1347d4195ccb3();
	if (!props.portalContainer && getContainer) portalContainer = getContainer();
	if (!portalContainer) return null;
	let contents = props.children;
	if (!props.disableFocusManagement) contents = /*#__PURE__*/ import_react$16.createElement($535772f9d2c1f38d$export$20e40289641fbbb6, {
		restoreFocus: true,
		contain: (props.shouldContainFocus || contain) && !isExiting
	}, contents);
	contents = /*#__PURE__*/ import_react$16.createElement($d7a937236970dc7f$export$a2200b96afd16271.Provider, { value: contextValue }, /*#__PURE__*/ import_react$16.createElement($0d47b37c475c5231$export$cf75428e0b9ed1ea, null, /*#__PURE__*/ import_react$16.createElement($d1116acdf220c2da$export$f9762fab77588ecb.Provider, { value: null }, contents)));
	return /*#__PURE__*/ import_react_dom$3.createPortal(contents, portalContainer);
}
function $d7a937236970dc7f$export$14c98a7594375490() {
	let setContain = (0, import_react$16.useContext)($d7a937236970dc7f$export$a2200b96afd16271)?.setContain;
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		setContain?.(true);
	}, [setContain]);
}
var import_react$16, import_react_dom$3, $d7a937236970dc7f$export$a2200b96afd16271;
var init_Overlay = __esmMin((() => {
	init_PressResponder();
	init_useFocusable();
	init_FocusScope();
	init_SSRProvider();
	init_useLayoutEffect();
	init_PortalProvider();
	import_react$16 = /* @__PURE__ */ __toESM(require_react(), 1);
	import_react_dom$3 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	$d7a937236970dc7f$export$a2200b96afd16271 = /*#__PURE__*/ import_react$16.createContext(null);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/ariaHideOutside.mjs
function $58196c8d6a1f38fc$var$isAlwaysVisibleNode(node) {
	return node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer !== void 0;
}
function $58196c8d6a1f38fc$export$1c3ebcada18427bf(targets, options) {
	let windowObj = $d447af545b77c9f1$export$f21a1ffae260145a(targets?.[0]);
	let opts = options instanceof windowObj.Element ? { root: options } : options;
	let root = opts?.root ?? document.body;
	let shouldUseInert = opts?.shouldUseInert && $58196c8d6a1f38fc$var$supportsInert;
	let visibleNodes = new Set(targets);
	let hiddenNodes = /* @__PURE__ */ new Set();
	let getHidden = (element) => {
		return shouldUseInert && element instanceof windowObj.HTMLElement ? element.inert : element.getAttribute("aria-hidden") === "true";
	};
	let setHidden = (element, hidden) => {
		if (shouldUseInert && element instanceof windowObj.HTMLElement) element.inert = hidden;
		else if (hidden) element.setAttribute("aria-hidden", "true");
		else {
			element.removeAttribute("aria-hidden");
			if (element instanceof windowObj.HTMLElement) element.inert = false;
		}
	};
	let shadowRootsToWatch = /* @__PURE__ */ new Set();
	if ($6a20a7989e6c817a$export$98658e8c59125e6a()) {
		let boundary = root.getRootNode();
		for (let target of targets) {
			let current = target.getRootNode();
			while ($d447af545b77c9f1$export$af51f0f06c0f328a(current) && current !== boundary) {
				shadowRootsToWatch.add(current);
				current = current.host.getRootNode();
			}
		}
	}
	let walk = (root) => {
		for (let element of root.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) visibleNodes.add(element);
		let acceptNode = (node) => {
			if (hiddenNodes.has(node) || visibleNodes.has(node) || node.parentElement && hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
			for (let target of visibleNodes) if ($23f2114a1b82827e$export$4282f70798064fe0(node, target)) return NodeFilter.FILTER_SKIP;
			return NodeFilter.FILTER_ACCEPT;
		};
		let walker = $654b97e09f2a30c1$export$4d0f8be8b12a7ef6($d447af545b77c9f1$export$b204af158042fbac(root), root, NodeFilter.SHOW_ELEMENT, { acceptNode });
		let acceptRoot = acceptNode(root);
		if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root);
		if (acceptRoot !== NodeFilter.FILTER_REJECT) {
			let node = walker.nextNode();
			while (node != null) {
				hide(node);
				node = walker.nextNode();
			}
		}
	};
	let hide = (node) => {
		let refCount = $58196c8d6a1f38fc$var$refCountMap.get(node) ?? 0;
		if (getHidden(node) && refCount === 0) return;
		if (refCount === 0) setHidden(node, true);
		hiddenNodes.add(node);
		$58196c8d6a1f38fc$var$refCountMap.set(node, refCount + 1);
	};
	if ($58196c8d6a1f38fc$var$observerStack.length) $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1].disconnect();
	walk(root);
	let observer = new MutationObserver((changes) => {
		for (let change of changes) {
			if (change.type !== "childList") continue;
			if (change.target.isConnected && ![...visibleNodes, ...hiddenNodes].some((node) => $23f2114a1b82827e$export$4282f70798064fe0(node, change.target))) {
				for (let node of change.addedNodes) if ((node instanceof HTMLElement || node instanceof SVGElement) && $58196c8d6a1f38fc$var$isAlwaysVisibleNode(node)) visibleNodes.add(node);
				else if (node instanceof Element) walk(node);
			}
			if ($6a20a7989e6c817a$export$98658e8c59125e6a()) {
				for (let shadowRoot of shadowRootsToWatch) if (!shadowRoot.isConnected) {
					observer.disconnect();
					break;
				}
			}
		}
	});
	observer.observe(root, {
		childList: true,
		subtree: true
	});
	let shadowObservers = /* @__PURE__ */ new Set();
	if ($6a20a7989e6c817a$export$98658e8c59125e6a()) for (let shadowRoot of shadowRootsToWatch) {
		let shadowObserver = new MutationObserver((changes) => {
			for (let change of changes) {
				if (change.type !== "childList") continue;
				if (change.target.isConnected && ![...visibleNodes, ...hiddenNodes].some((node) => $23f2114a1b82827e$export$4282f70798064fe0(node, change.target))) {
					for (let node of change.addedNodes) if ((node instanceof HTMLElement || node instanceof SVGElement) && $58196c8d6a1f38fc$var$isAlwaysVisibleNode(node)) visibleNodes.add(node);
					else if (node instanceof Element) walk(node);
				}
				if ($6a20a7989e6c817a$export$98658e8c59125e6a()) {
					for (let shadowRoot of shadowRootsToWatch) if (!shadowRoot.isConnected) {
						observer.disconnect();
						break;
					}
				}
			}
		});
		shadowObserver.observe(shadowRoot, {
			childList: true,
			subtree: true
		});
		shadowObservers.add(shadowObserver);
	}
	let observerWrapper = {
		visibleNodes,
		hiddenNodes,
		observe() {
			observer.observe(root, {
				childList: true,
				subtree: true
			});
		},
		disconnect() {
			observer.disconnect();
		}
	};
	$58196c8d6a1f38fc$var$observerStack.push(observerWrapper);
	return () => {
		observer.disconnect();
		if ($6a20a7989e6c817a$export$98658e8c59125e6a()) for (let shadowObserver of shadowObservers) shadowObserver.disconnect();
		for (let node of hiddenNodes) {
			let count = $58196c8d6a1f38fc$var$refCountMap.get(node);
			if (count == null) continue;
			if (count === 1) {
				setHidden(node, false);
				$58196c8d6a1f38fc$var$refCountMap.delete(node);
			} else $58196c8d6a1f38fc$var$refCountMap.set(node, count - 1);
		}
		if (observerWrapper === $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1]) {
			$58196c8d6a1f38fc$var$observerStack.pop();
			if ($58196c8d6a1f38fc$var$observerStack.length) $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1].observe();
		} else $58196c8d6a1f38fc$var$observerStack.splice($58196c8d6a1f38fc$var$observerStack.indexOf(observerWrapper), 1);
	};
}
function $58196c8d6a1f38fc$export$1020fa7f77e17884(element) {
	let observer = $58196c8d6a1f38fc$var$observerStack[$58196c8d6a1f38fc$var$observerStack.length - 1];
	if (observer && !observer.visibleNodes.has(element)) {
		observer.visibleNodes.add(element);
		return () => {
			observer.visibleNodes.delete(element);
		};
	}
}
var $58196c8d6a1f38fc$var$supportsInert, $58196c8d6a1f38fc$var$refCountMap, $58196c8d6a1f38fc$var$observerStack;
var init_ariaHideOutside = __esmMin((() => {
	init_ShadowTreeWalker();
	init_domHelpers();
	init_DOMFunctions();
	init_flags();
	$58196c8d6a1f38fc$var$supportsInert = typeof HTMLElement !== "undefined" && "inert" in HTMLElement.prototype;
	$58196c8d6a1f38fc$var$refCountMap = /* @__PURE__ */ new WeakMap();
	$58196c8d6a1f38fc$var$observerStack = [];
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/useInteractOutside.mjs
function $e260d131964da0f9$export$872b660ac5a1ff98(props) {
	let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
	let stateRef = (0, import_react$15.useRef)({
		isPointerDown: false,
		ignoreEmulatedMouseEvents: false
	});
	let onPointerDown = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
		if (onInteractOutside && $e260d131964da0f9$var$isValidEvent(e, ref)) {
			if (onInteractOutsideStart) onInteractOutsideStart(e);
			stateRef.current.isPointerDown = true;
		}
	});
	let triggerInteractOutside = $fe16bffc7a557bf0$export$7f54fc3180508a52((e) => {
		if (onInteractOutside) onInteractOutside(e);
	});
	(0, import_react$15.useEffect)(() => {
		let state = stateRef.current;
		if (isDisabled) return;
		const element = ref.current;
		const documentObject = $d447af545b77c9f1$export$b204af158042fbac(element);
		if (typeof PointerEvent !== "undefined") {
			let onClick = (e) => {
				if (state.isPointerDown && $e260d131964da0f9$var$isValidEvent(e, ref)) triggerInteractOutside(e);
				state.isPointerDown = false;
			};
			documentObject.addEventListener("pointerdown", onPointerDown, true);
			documentObject.addEventListener("click", onClick, true);
			return () => {
				documentObject.removeEventListener("pointerdown", onPointerDown, true);
				documentObject.removeEventListener("click", onClick, true);
			};
		}
	}, [ref, isDisabled]);
}
function $e260d131964da0f9$var$isValidEvent(event, ref) {
	if (event.button > 0) return false;
	let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(event);
	if (target) {
		const ownerDocument = target.ownerDocument;
		if (!ownerDocument || !$23f2114a1b82827e$export$4282f70798064fe0(ownerDocument.documentElement, target)) return false;
		if (target.closest("[data-react-aria-top-layer]")) return false;
	}
	if (!ref.current) return false;
	return !event.composedPath().includes(ref.current);
}
var import_react$15;
var init_useInteractOutside = __esmMin((() => {
	init_DOMFunctions();
	init_domHelpers();
	init_useEffectEvent();
	import_react$15 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/useOverlay.mjs
function $77844860df94ba23$export$ea8f71083e90600f(props, ref) {
	let { onClose, shouldCloseOnBlur, isOpen, isDismissable = false, isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside } = props;
	let lastVisibleOverlay = (0, import_react$14.useRef)(void 0);
	(0, import_react$14.useEffect)(() => {
		if (isOpen && !$77844860df94ba23$var$visibleOverlays.includes(ref)) {
			$77844860df94ba23$var$visibleOverlays.push(ref);
			return () => {
				let index = $77844860df94ba23$var$visibleOverlays.indexOf(ref);
				if (index >= 0) $77844860df94ba23$var$visibleOverlays.splice(index, 1);
			};
		}
	}, [isOpen, ref]);
	let onHide = () => {
		if ($77844860df94ba23$var$visibleOverlays[$77844860df94ba23$var$visibleOverlays.length - 1] === ref && onClose) onClose();
	};
	let onInteractOutsideStart = (e) => {
		const topMostOverlay = $77844860df94ba23$var$visibleOverlays[$77844860df94ba23$var$visibleOverlays.length - 1];
		lastVisibleOverlay.current = topMostOverlay;
		if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside($23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
			if (topMostOverlay === ref) e.stopPropagation();
		}
	};
	let onInteractOutside = (e) => {
		if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside($23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
			if ($77844860df94ba23$var$visibleOverlays[$77844860df94ba23$var$visibleOverlays.length - 1] === ref) e.stopPropagation();
			if (lastVisibleOverlay.current === ref) onHide();
		}
		lastVisibleOverlay.current = void 0;
	};
	let { keyboardProps } = $8296dad1a4c5e0dc$export$8f71654801c2f7cd({ shortcuts: { Escape: () => {
		if (!isKeyboardDismissDisabled) {
			onHide();
			return;
		}
		return false;
	} } });
	$e260d131964da0f9$export$872b660ac5a1ff98({
		ref,
		onInteractOutside: isDismissable && isOpen ? onInteractOutside : void 0,
		onInteractOutsideStart
	});
	let { focusWithinProps } = $2c9edc598a03d523$export$420e68273165f4ec({
		isDisabled: !shouldCloseOnBlur,
		onBlurWithin: (e) => {
			if (!e.relatedTarget || $535772f9d2c1f38d$export$1258395f99bf9cbf(e.relatedTarget)) return;
			if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose?.();
		}
	});
	return {
		overlayProps: {
			...keyboardProps,
			...focusWithinProps
		},
		underlayProps: {}
	};
}
var import_react$14, $77844860df94ba23$var$visibleOverlays;
var init_useOverlay = __esmMin((() => {
	init_DOMFunctions();
	init_FocusScope();
	init_useFocusWithin();
	init_useInteractOutside();
	init_useKeyboard();
	import_react$14 = /* @__PURE__ */ __toESM(require_react(), 1);
	$77844860df94ba23$var$visibleOverlays = [];
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/usePreventScroll.mjs
function $0644e3663365bfe5$export$ee0f7cc6afcd1c18(options = {}) {
	let { isDisabled } = options;
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (isDisabled) return;
		$0644e3663365bfe5$var$preventScrollCount++;
		if ($0644e3663365bfe5$var$preventScrollCount === 1) if ($2add3ce32c6007eb$export$fedb369cb70207f1() && $2add3ce32c6007eb$export$78551043582a6a98()) $0644e3663365bfe5$var$restore = $0644e3663365bfe5$var$preventScrollMobileWebKit();
		else $0644e3663365bfe5$var$restore = $0644e3663365bfe5$var$preventScrollStandard();
		return () => {
			$0644e3663365bfe5$var$preventScrollCount--;
			if ($0644e3663365bfe5$var$preventScrollCount === 0) $0644e3663365bfe5$var$restore();
		};
	}, [isDisabled]);
}
function $0644e3663365bfe5$var$preventScrollStandard() {
	let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
	return $a4e76a5424781910$export$e08e3b67e392101e(scrollbarWidth > 0 && ("scrollbarGutter" in document.documentElement.style ? $d447af545b77c9f1$export$37a5fde709c1db82(document.documentElement, "scrollbar-gutter", "stable") : $d447af545b77c9f1$export$37a5fde709c1db82(document.documentElement, "padding-right", `${scrollbarWidth}px`)), $d447af545b77c9f1$export$37a5fde709c1db82(document.documentElement, "overflow", "hidden"));
}
function $0644e3663365bfe5$var$preventScrollMobileWebKit() {
	let restoreOverflow = $d447af545b77c9f1$export$37a5fde709c1db82(document.documentElement, "overflow", "hidden");
	let scrollable;
	let allowTouchMove = false;
	let onTouchStart = (e) => {
		let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		scrollable = $901761b40e390936$export$2bb74740c4e19def(target) ? target : $3578607fe3d4b096$export$cfa2225e87938781(target, true);
		allowTouchMove = false;
		let selection = target.ownerDocument.defaultView.getSelection();
		if (selection && !selection.isCollapsed && selection.containsNode(target, true)) allowTouchMove = true;
		if (e.composedPath().some((el) => el instanceof HTMLInputElement && el.type === "range")) allowTouchMove = true;
		if ("selectionStart" in target && "selectionEnd" in target && target.selectionStart < target.selectionEnd && target.ownerDocument.activeElement === target) allowTouchMove = true;
	};
	let style = document.createElement("style");
	let nonce = $2b2d34ff061957fb$export$2b85b721e524d74b();
	if (nonce) style.nonce = nonce;
	style.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim();
	document.head.prepend(style);
	let onTouchMove = (e) => {
		if (e.touches.length === 2 || allowTouchMove) return;
		if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
			e.preventDefault();
			return;
		}
		if (scrollable.scrollHeight === scrollable.clientHeight && scrollable.scrollWidth === scrollable.clientWidth) e.preventDefault();
	};
	let onBlur = (e) => {
		let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		let relatedTarget = e.relatedTarget;
		if (relatedTarget && $bb39c0fc1c19b34c$export$c57958e35f31ed73(relatedTarget)) {
			relatedTarget.focus({ preventScroll: true });
			$0644e3663365bfe5$var$scrollIntoViewWhenReady(relatedTarget, $bb39c0fc1c19b34c$export$c57958e35f31ed73(target));
		} else if (!relatedTarget) (target.parentElement?.closest("[tabindex]"))?.focus({ preventScroll: true });
	};
	let focus = HTMLElement.prototype.focus;
	Reflect.defineProperty(HTMLElement.prototype, "focus", {
		configurable: true,
		writable: true,
		value: function(opts) {
			let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
			let wasKeyboardVisible = activeElement != null && $bb39c0fc1c19b34c$export$c57958e35f31ed73(activeElement);
			focus.call(this, {
				...opts,
				preventScroll: true
			});
			if (!opts || !opts.preventScroll) $0644e3663365bfe5$var$scrollIntoViewWhenReady(this, wasKeyboardVisible);
		}
	});
	let removeEvents = $a4e76a5424781910$export$e08e3b67e392101e($d447af545b77c9f1$export$f531f92e2a15358f(document, "touchstart", onTouchStart, {
		passive: false,
		capture: true
	}), $d447af545b77c9f1$export$f531f92e2a15358f(document, "touchmove", onTouchMove, {
		passive: false,
		capture: true
	}), $d447af545b77c9f1$export$f531f92e2a15358f(document, "blur", onBlur, true));
	return () => {
		restoreOverflow();
		removeEvents();
		style.remove();
		Reflect.defineProperty(HTMLElement.prototype, "focus", {
			configurable: true,
			writable: true,
			value: focus
		});
	};
}
function $0644e3663365bfe5$var$scrollIntoViewWhenReady(target, wasKeyboardVisible) {
	if (wasKeyboardVisible || !$0644e3663365bfe5$var$visualViewport) $0644e3663365bfe5$var$scrollIntoView(target);
	else $0644e3663365bfe5$var$visualViewport.addEventListener("resize", () => $0644e3663365bfe5$var$scrollIntoView(target), { once: true });
}
function $0644e3663365bfe5$var$scrollIntoView(target) {
	let root = document.scrollingElement || document.documentElement;
	let nextTarget = target;
	while (nextTarget && nextTarget !== root) {
		let scrollable = $3578607fe3d4b096$export$cfa2225e87938781(nextTarget);
		if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== nextTarget) {
			let scrollableRect = scrollable.getBoundingClientRect();
			let targetRect = nextTarget.getBoundingClientRect();
			if (targetRect.top < scrollableRect.top || targetRect.bottom > scrollableRect.top + nextTarget.clientHeight) {
				let bottom = scrollableRect.bottom;
				if ($0644e3663365bfe5$var$visualViewport) bottom = Math.min(bottom, $0644e3663365bfe5$var$visualViewport.offsetTop + $0644e3663365bfe5$var$visualViewport.height);
				let adjustment = targetRect.top - scrollableRect.top - ((bottom - scrollableRect.top) / 2 - targetRect.height / 2);
				scrollable.scrollTo({
					top: Math.max(0, Math.min(scrollable.scrollHeight - scrollable.clientHeight, scrollable.scrollTop + adjustment)),
					behavior: "smooth"
				});
			}
		}
		nextTarget = scrollable.parentElement;
	}
}
var $0644e3663365bfe5$var$visualViewport, $0644e3663365bfe5$var$preventScrollCount, $0644e3663365bfe5$var$restore;
var init_usePreventScroll = __esmMin((() => {
	init_domHelpers();
	init_chain();
	init_DOMFunctions();
	init_getNonce();
	init_getScrollParent();
	init_platform();
	init_isScrollable();
	init_useLayoutEffect();
	init_keyboard();
	$0644e3663365bfe5$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
	$0644e3663365bfe5$var$preventScrollCount = 0;
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/useModalOverlay.mjs
function $5698867baeb53f4e$export$dbc0f175b25fb0fb(props, state, ref) {
	let { overlayProps, underlayProps } = $77844860df94ba23$export$ea8f71083e90600f({
		...props,
		isOpen: state.isOpen,
		onClose: state.close
	}, ref);
	$0644e3663365bfe5$export$ee0f7cc6afcd1c18({ isDisabled: !state.isOpen });
	$d7a937236970dc7f$export$14c98a7594375490();
	(0, import_react$13.useEffect)(() => {
		if (state.isOpen && ref.current) return $58196c8d6a1f38fc$export$1c3ebcada18427bf([ref.current], { shouldUseInert: true });
	}, [state.isOpen, ref]);
	return {
		modalProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(overlayProps),
		underlayProps
	};
}
var import_react$13;
var init_useModalOverlay = __esmMin((() => {
	init_ariaHideOutside();
	init_useOverlay();
	init_mergeProps();
	init_Overlay();
	init_usePreventScroll();
	import_react$13 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/useOverlayTrigger.mjs
function $f282e36c29c025e8$export$f9d5c8beee7d008d(props, state, ref) {
	let { type } = props;
	let { isOpen } = state;
	(0, import_react$12.useEffect)(() => {
		if (ref && ref.current) $22e2f5f6490788e8$export$f6211563215e3b37.set(ref.current, state.close);
	});
	let ariaHasPopup = void 0;
	if (type === "menu") ariaHasPopup = true;
	else if (type === "listbox") ariaHasPopup = "listbox";
	let overlayId = $390e54f620492c70$export$f680877a34711e37();
	return {
		triggerProps: {
			"aria-haspopup": ariaHasPopup,
			"aria-expanded": isOpen,
			"aria-controls": isOpen ? overlayId : void 0,
			onPress: state.toggle
		},
		overlayProps: { id: overlayId }
	};
}
var import_react$12;
var init_useOverlayTrigger = __esmMin((() => {
	init_useCloseOnScroll();
	init_useId();
	import_react$12 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/overlays/usePopover.mjs
function $f8a024fbad3a5a2e$export$542a6fd13ac93354(props, state) {
	let { triggerRef, popoverRef, groupRef, isNonModal, isKeyboardDismissDisabled, shouldCloseOnInteractOutside, ...otherProps } = props;
	let isSubmenu = otherProps["trigger"] === "SubmenuTrigger";
	let { overlayProps, underlayProps } = $77844860df94ba23$export$ea8f71083e90600f({
		isOpen: state.isOpen,
		onClose: state.close,
		shouldCloseOnBlur: true,
		isDismissable: !isNonModal || isSubmenu,
		isKeyboardDismissDisabled,
		shouldCloseOnInteractOutside
	}, groupRef ?? popoverRef);
	let { overlayProps: positionProps, arrowProps, placement, triggerAnchorPoint: origin } = $b3526bc71400be8d$export$d39e1813b3bdd0e1({
		...otherProps,
		targetRef: triggerRef,
		overlayRef: popoverRef,
		isOpen: state.isOpen,
		onClose: isNonModal && !isSubmenu ? state.close : null,
		getTargetRect: otherProps.getTargetRect ?? (state.point ? () => new DOMRect(state.point.x, state.point.y, 0, 0) : void 0)
	});
	$0644e3663365bfe5$export$ee0f7cc6afcd1c18({ isDisabled: isNonModal || !state.isOpen });
	(0, import_react$11.useEffect)(() => {
		if (state.isOpen && popoverRef.current) if (isNonModal) return $58196c8d6a1f38fc$export$1020fa7f77e17884(groupRef?.current ?? popoverRef.current);
		else return $58196c8d6a1f38fc$export$1c3ebcada18427bf([groupRef?.current ?? popoverRef.current], { shouldUseInert: true });
	}, [
		isNonModal,
		state.isOpen,
		popoverRef,
		groupRef
	]);
	let { focusWithinProps } = $2c9edc598a03d523$export$420e68273165f4ec(props);
	return {
		popoverProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(overlayProps, positionProps, focusWithinProps),
		arrowProps,
		underlayProps,
		placement,
		triggerAnchorPoint: origin
	};
}
var import_react$11;
var init_usePopover = __esmMin((() => {
	init_ariaHideOutside();
	init_useOverlayPosition();
	init_useFocusWithin();
	init_mergeProps();
	init_useOverlay();
	init_usePreventScroll();
	import_react$11 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/collections/Hidden.mjs
function $d7f64c32b702fe2c$export$8dc98ba7eadeaa56(props) {
	if ((0, import_react$10.useContext)($d7f64c32b702fe2c$export$94b6d0abf7d33e8c)) return /*#__PURE__*/ import_react$10.createElement(import_react$10.Fragment, null, props.children);
	let children = /*#__PURE__*/ import_react$10.createElement($d7f64c32b702fe2c$export$94b6d0abf7d33e8c.Provider, { value: true }, props.children);
	return /*#__PURE__*/ import_react$10.createElement("template", null, children);
}
function $d7f64c32b702fe2c$export$86427a43e3e48ebb(fn) {
	let Wrapper = (props, ref) => {
		if ((0, import_react$10.useContext)($d7f64c32b702fe2c$export$94b6d0abf7d33e8c)) return null;
		return fn(props, ref);
	};
	Wrapper.displayName = fn.displayName || fn.name;
	return (0, import_react$10.forwardRef)(Wrapper);
}
function $d7f64c32b702fe2c$export$b5d7cc18bb8d2b59() {
	return (0, import_react$10.useContext)($d7f64c32b702fe2c$export$94b6d0abf7d33e8c);
}
var import_react$10, $d7f64c32b702fe2c$export$94b6d0abf7d33e8c;
var init_Hidden = __esmMin((() => {
	import_react$10 = /* @__PURE__ */ __toESM(require_react(), 1);
	if (typeof HTMLTemplateElement !== "undefined") {
		Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
			configurable: true,
			enumerable: true,
			get: function() {
				return this.content.firstChild;
			}
		});
		Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
			configurable: true,
			enumerable: true,
			value: function(node) {
				return this.content.appendChild(node);
			}
		});
		Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
			configurable: true,
			enumerable: true,
			value: function(node) {
				return this.content.removeChild(node);
			}
		});
		Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
			configurable: true,
			enumerable: true,
			value: function(node, child) {
				return this.content.insertBefore(node, child);
			}
		});
	}
	$d7f64c32b702fe2c$export$94b6d0abf7d33e8c = /*#__PURE__*/ (0, import_react$10.createContext)(false);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/textSelection.mjs
function $cbf007e418543821$export$16a4697467175487(target) {
	if ($2add3ce32c6007eb$export$fedb369cb70207f1() && $2add3ce32c6007eb$export$78551043582a6a98()) {
		if ($cbf007e418543821$var$state === "default") {
			const documentObject = $d447af545b77c9f1$export$b204af158042fbac(target);
			$cbf007e418543821$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
			documentObject.documentElement.style.webkitUserSelect = "none";
		}
		$cbf007e418543821$var$state = "disabled";
	} else if (target instanceof HTMLElement || target instanceof SVGElement) {
		let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
		$cbf007e418543821$var$modifiedElementMap.set(target, target.style[property]);
		target.style[property] = "none";
	}
}
function $cbf007e418543821$export$b0d6fa1ab32e3295(target) {
	if ($2add3ce32c6007eb$export$fedb369cb70207f1() && $2add3ce32c6007eb$export$78551043582a6a98()) {
		if ($cbf007e418543821$var$state !== "disabled") return;
		$cbf007e418543821$var$state = "restoring";
		setTimeout(() => {
			$081cb5757e08788e$export$24490316f764c430(() => {
				if ($cbf007e418543821$var$state === "restoring") {
					const documentObject = $d447af545b77c9f1$export$b204af158042fbac(target);
					if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $cbf007e418543821$var$savedUserSelect || "";
					$cbf007e418543821$var$savedUserSelect = "";
					$cbf007e418543821$var$state = "default";
				}
			});
		}, 300);
	} else if (target instanceof HTMLElement || target instanceof SVGElement) {
		if (target && $cbf007e418543821$var$modifiedElementMap.has(target)) {
			let targetOldUserSelect = $cbf007e418543821$var$modifiedElementMap.get(target);
			let property = "userSelect" in target.style ? "userSelect" : "webkitUserSelect";
			if (target.style[property] === "none") target.style[property] = targetOldUserSelect;
			if (target.getAttribute("style") === "") target.removeAttribute("style");
			$cbf007e418543821$var$modifiedElementMap.delete(target);
		}
	}
}
var $cbf007e418543821$var$state, $cbf007e418543821$var$savedUserSelect, $cbf007e418543821$var$modifiedElementMap;
var init_textSelection = __esmMin((() => {
	init_domHelpers();
	init_platform();
	init_runAfterTransition();
	$cbf007e418543821$var$state = "default";
	$cbf007e418543821$var$savedUserSelect = "";
	$cbf007e418543821$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/usePress.mjs
function $d27d541f9569d26d$var$usePressResponderContext(props) {
	let context = (0, import_react$9.useContext)($24f9a20f226ad820$export$5165eccb35aaadb5);
	if (context) {
		let { register, ref, ...contextProps } = context;
		props = $bbaa08b3cd72f041$export$9d1611c77c2fe928(contextProps, props);
		register();
	}
	$b7115c395c64f7b5$export$4debdb1a3f0fa79e(context, props.ref);
	return props;
}
function $d27d541f9569d26d$export$45712eceda6fad21(props) {
	let { onPress, onPressChange, onPressStart, onPressEnd, onPressUp, onClick, isDisabled, isPressed: isPressedProp, preventFocusOnPress, shouldCancelOnPointerExit, allowTextSelectionOnPress, ref: domRef, ...domProps } = $d27d541f9569d26d$var$usePressResponderContext(props);
	let [isPressed, setPressed] = (0, import_react$9.useState)(false);
	let ref = (0, import_react$9.useRef)({
		isPressed: false,
		ignoreEmulatedMouseEvents: false,
		didFirePressStart: false,
		isTriggeringEvent: false,
		activePointerId: null,
		target: null,
		isOverTarget: false,
		pointerType: null,
		disposables: []
	});
	let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
	let triggerPressStart = (0, import_react$9.useCallback)((originalEvent, pointerType) => {
		let state = ref.current;
		if (isDisabled || state.didFirePressStart) return false;
		let shouldStopPropagation = true;
		state.isTriggeringEvent = true;
		if (onPressStart) {
			let event = new $d27d541f9569d26d$var$PressEvent("pressstart", pointerType, originalEvent);
			onPressStart(event);
			shouldStopPropagation = event.shouldStopPropagation;
		}
		if (onPressChange) onPressChange(true);
		state.isTriggeringEvent = false;
		state.didFirePressStart = true;
		setPressed(true);
		return shouldStopPropagation;
	}, [
		isDisabled,
		onPressStart,
		onPressChange
	]);
	let triggerPressEnd = (0, import_react$9.useCallback)((originalEvent, pointerType, wasPressed = true) => {
		let state = ref.current;
		if (!state.didFirePressStart) return false;
		state.didFirePressStart = false;
		state.isTriggeringEvent = true;
		let shouldStopPropagation = true;
		if (onPressEnd) {
			let event = new $d27d541f9569d26d$var$PressEvent("pressend", pointerType, originalEvent);
			onPressEnd(event);
			shouldStopPropagation = event.shouldStopPropagation;
		}
		if (onPressChange) onPressChange(false);
		setPressed(false);
		if (onPress && wasPressed && !isDisabled) {
			let event = new $d27d541f9569d26d$var$PressEvent("press", pointerType, originalEvent);
			onPress(event);
			shouldStopPropagation &&= event.shouldStopPropagation;
		}
		state.isTriggeringEvent = false;
		return shouldStopPropagation;
	}, [
		isDisabled,
		onPressEnd,
		onPressChange,
		onPress
	]);
	let triggerPressEndEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(triggerPressEnd);
	let triggerPressUpEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52((0, import_react$9.useCallback)((originalEvent, pointerType) => {
		let state = ref.current;
		if (isDisabled) return false;
		if (onPressUp) {
			state.isTriggeringEvent = true;
			let event = new $d27d541f9569d26d$var$PressEvent("pressup", pointerType, originalEvent);
			onPressUp(event);
			state.isTriggeringEvent = false;
			return event.shouldStopPropagation;
		}
		return true;
	}, [isDisabled, onPressUp]));
	let cancel = (0, import_react$9.useCallback)((e) => {
		let state = ref.current;
		if (state.isPressed && state.target) {
			if (state.didFirePressStart && state.pointerType != null) triggerPressEnd($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType, false);
			state.isPressed = false;
			state.isOverTarget = false;
			state.activePointerId = null;
			state.pointerType = null;
			removeAllGlobalListeners();
			if (!allowTextSelectionOnPress) $cbf007e418543821$export$b0d6fa1ab32e3295(state.target);
			for (let dispose of state.disposables) dispose();
			state.disposables = [];
		}
	}, [
		allowTextSelectionOnPress,
		removeAllGlobalListeners,
		triggerPressEnd
	]);
	let cancelEvent = $fe16bffc7a557bf0$export$7f54fc3180508a52(cancel);
	(0, import_react$9.useEffect)(() => {
		if (isDisabled && ref.current.isPressed) cancelEvent({
			currentTarget: ref.current.target,
			shiftKey: false,
			ctrlKey: false,
			metaKey: false,
			altKey: false
		});
	}, [isDisabled]);
	let cancelOnPointerExit = (0, import_react$9.useCallback)((e) => {
		if (shouldCancelOnPointerExit) cancel(e);
	}, [shouldCancelOnPointerExit, cancel]);
	let triggerClick = (0, import_react$9.useCallback)((e) => {
		if (isDisabled) return;
		onClick?.(e);
	}, [isDisabled, onClick]);
	let triggerSyntheticClick = (0, import_react$9.useCallback)((e, target) => {
		if (isDisabled) return;
		if (onClick) {
			let event = new MouseEvent("click", e);
			$a92dc41f639950be$export$c2b7abe5d61ec696(event, target);
			onClick($a92dc41f639950be$export$525bc4921d56d4a(event));
		}
	}, [isDisabled, onClick]);
	let pressProps = (0, import_react$9.useMemo)(() => {
		let state = ref.current;
		let pressProps = {
			onKeyDown(e) {
				if ($d27d541f9569d26d$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && $23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) {
					if ($d27d541f9569d26d$var$shouldPreventDefaultKeyboard($23f2114a1b82827e$export$e58f029f0fbfdb29(e), e.key)) e.preventDefault();
					let shouldStopPropagation = true;
					if (!state.isPressed && !e.repeat) {
						state.target = e.currentTarget;
						state.isPressed = true;
						state.pointerType = "keyboard";
						shouldStopPropagation = triggerPressStart(e, "keyboard");
					}
					let originalTarget = e.currentTarget;
					let pressUp = (e) => {
						if ($d27d541f9569d26d$var$isValidKeyboardEvent(e, originalTarget) && !e.repeat && $23f2114a1b82827e$export$4282f70798064fe0(originalTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) && state.target) triggerPressUpEvent($d27d541f9569d26d$var$createEvent(state.target, e), "keyboard");
					};
					addGlobalListener($d447af545b77c9f1$export$b204af158042fbac(e.currentTarget), "keyup", $a4e76a5424781910$export$e08e3b67e392101e(pressUp, onKeyUp), true);
					if (shouldStopPropagation) e.stopPropagation();
					if (e.metaKey && $2add3ce32c6007eb$export$9ac100e40613ea10()) state.metaKeyEvents?.set(e.key, e.nativeEvent);
				} else if (e.key === "Meta") state.metaKeyEvents = /* @__PURE__ */ new Map();
			},
			onClick(e) {
				if (e && !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
				if (e && e.button === 0 && !state.isTriggeringEvent && !$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening) {
					let shouldStopPropagation = true;
					if (isDisabled) e.preventDefault();
					if (!state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || $b5c62b033c25b96d$export$60278871457622de(e.nativeEvent))) {
						let stopPressStart = triggerPressStart(e, "virtual");
						let stopPressUp = triggerPressUpEvent(e, "virtual");
						let stopPressEnd = triggerPressEndEvent(e, "virtual");
						triggerClick(e);
						shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
					} else if (state.isPressed && state.pointerType !== "keyboard") {
						let pointerType = state.pointerType || e.nativeEvent.pointerType || "virtual";
						let stopPressUp = triggerPressUpEvent($d27d541f9569d26d$var$createEvent(e.currentTarget, e), pointerType);
						let stopPressEnd = triggerPressEndEvent($d27d541f9569d26d$var$createEvent(e.currentTarget, e), pointerType, true);
						shouldStopPropagation = stopPressUp && stopPressEnd;
						state.isOverTarget = false;
						triggerClick(e);
						cancelEvent(e);
					}
					state.ignoreEmulatedMouseEvents = false;
					if (shouldStopPropagation) e.stopPropagation();
				}
			}
		};
		let onKeyUp = (e) => {
			if (state.isPressed && state.target && $d27d541f9569d26d$var$isValidKeyboardEvent(e, state.target)) {
				if ($d27d541f9569d26d$var$shouldPreventDefaultKeyboard($23f2114a1b82827e$export$e58f029f0fbfdb29(e), e.key)) e.preventDefault();
				let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
				let wasPressed = $23f2114a1b82827e$export$4282f70798064fe0(state.target, target);
				triggerPressEndEvent($d27d541f9569d26d$var$createEvent(state.target, e), "keyboard", wasPressed);
				if (wasPressed) triggerSyntheticClick(e, state.target);
				removeAllGlobalListeners();
				if (e.key !== "Enter" && $d27d541f9569d26d$var$isHTMLAnchorLink(state.target) && $23f2114a1b82827e$export$4282f70798064fe0(state.target, target) && !e[$d27d541f9569d26d$var$LINK_CLICKED]) {
					e[$d27d541f9569d26d$var$LINK_CLICKED] = true;
					$caaf0dd3060ed57c$export$95185d699e05d4d7(state.target, e, false);
				}
				state.isPressed = false;
				state.metaKeyEvents?.delete(e.key);
			} else if (e.key === "Meta" && state.metaKeyEvents?.size) {
				let events = state.metaKeyEvents;
				state.metaKeyEvents = void 0;
				for (let event of events.values()) state.target?.dispatchEvent(new KeyboardEvent("keyup", event));
			}
		};
		if (typeof PointerEvent !== "undefined") {
			pressProps.onPointerDown = (e) => {
				if (e.button !== 0 || !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
				if ($b5c62b033c25b96d$export$29bf1b5f2c56cf63(e.nativeEvent)) {
					state.pointerType = "virtual";
					return;
				}
				state.pointerType = e.pointerType;
				let shouldStopPropagation = true;
				if (!state.isPressed) {
					state.isPressed = true;
					state.isOverTarget = true;
					state.activePointerId = e.pointerId;
					state.target = e.currentTarget;
					if (!allowTextSelectionOnPress) $cbf007e418543821$export$16a4697467175487(state.target);
					shouldStopPropagation = triggerPressStart(e, state.pointerType);
					let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
					if ("releasePointerCapture" in target) if ("hasPointerCapture" in target) {
						if (target.hasPointerCapture(e.pointerId)) target.releasePointerCapture(e.pointerId);
					} else target.releasePointerCapture(e.pointerId);
					addGlobalListener($d447af545b77c9f1$export$b204af158042fbac(e.currentTarget), "pointerup", onPointerUp, false);
					addGlobalListener($d447af545b77c9f1$export$b204af158042fbac(e.currentTarget), "pointercancel", onPointerCancel, false);
				}
				if (shouldStopPropagation) e.stopPropagation();
			};
			pressProps.onMouseDown = (e) => {
				if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
				if (e.button === 0) {
					if (preventFocusOnPress) {
						let dispose = $a92dc41f639950be$export$cabe61c495ee3649(e.target);
						if (dispose) state.disposables.push(dispose);
					}
					e.stopPropagation();
				}
			};
			pressProps.onPointerUp = (e) => {
				if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) || state.pointerType === "virtual") return;
				if (e.button === 0 && !state.isPressed) triggerPressUpEvent(e, state.pointerType || e.pointerType);
			};
			pressProps.onPointerEnter = (e) => {
				if (e.pointerId === state.activePointerId && state.target && !state.isOverTarget && state.pointerType != null) {
					state.isOverTarget = true;
					triggerPressStart($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType);
				}
			};
			pressProps.onPointerLeave = (e) => {
				if (e.pointerId === state.activePointerId && state.target && state.isOverTarget && state.pointerType != null) {
					state.isOverTarget = false;
					triggerPressEndEvent($d27d541f9569d26d$var$createEvent(state.target, e), state.pointerType, false);
					cancelOnPointerExit(e);
				}
			};
			let onPointerUp = (e) => {
				if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
					if ($23f2114a1b82827e$export$4282f70798064fe0(state.target, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) && state.pointerType != null) {
						let clicked = false;
						let timeout = setTimeout(() => {
							if (state.isPressed && state.target instanceof HTMLElement) if (clicked) cancelEvent(e);
							else {
								$1969ac565cfec8d0$export$de79e2c695e052f3(state.target);
								state.target.click();
							}
						}, 80);
						addGlobalListener(e.currentTarget, "click", () => clicked = true, true);
						state.disposables.push(() => clearTimeout(timeout));
					} else cancelEvent(e);
					state.isOverTarget = false;
				}
			};
			let onPointerCancel = (e) => {
				cancelEvent(e);
			};
			pressProps.onDragStart = (e) => {
				if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
				cancelEvent(e);
			};
		}
		return pressProps;
	}, [
		addGlobalListener,
		isDisabled,
		preventFocusOnPress,
		removeAllGlobalListeners,
		allowTextSelectionOnPress,
		cancelOnPointerExit,
		triggerPressStart,
		triggerClick,
		triggerSyntheticClick
	]);
	(0, import_react$9.useEffect)(() => {
		if (!domRef || false) return;
		const ownerDocument = $d447af545b77c9f1$export$b204af158042fbac(domRef.current);
		if (!ownerDocument || !ownerDocument.head || ownerDocument.getElementById($d27d541f9569d26d$var$STYLE_ID)) return;
		const style = ownerDocument.createElement("style");
		style.id = $d27d541f9569d26d$var$STYLE_ID;
		let nonce = $2b2d34ff061957fb$export$2b85b721e524d74b(ownerDocument);
		if (nonce) style.nonce = nonce;
		style.textContent = `
@layer {
  [${$d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim();
		ownerDocument.head.prepend(style);
	}, [domRef]);
	(0, import_react$9.useEffect)(() => {
		let state = ref.current;
		return () => {
			if (!allowTextSelectionOnPress) $cbf007e418543821$export$b0d6fa1ab32e3295(state.target ?? void 0);
			for (let dispose of state.disposables) dispose();
			state.disposables = [];
		};
	}, [allowTextSelectionOnPress]);
	return {
		isPressed: isPressedProp || isPressed,
		pressProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(domProps, pressProps, { [$d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE]: true })
	};
}
function $d27d541f9569d26d$var$isHTMLAnchorLink(target) {
	return target.tagName === "A" && target.hasAttribute("href");
}
function $d27d541f9569d26d$var$isValidKeyboardEvent(event, currentTarget) {
	const { key, code } = event;
	const element = currentTarget;
	const role = element.getAttribute("role");
	return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof $d447af545b77c9f1$export$f21a1ffae260145a(element).HTMLInputElement && !$d27d541f9569d26d$var$isValidInputKey(element, key) || element instanceof $d447af545b77c9f1$export$f21a1ffae260145a(element).HTMLTextAreaElement || element.isContentEditable) && !((role === "link" || !role && $d27d541f9569d26d$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $d27d541f9569d26d$var$createEvent(target, e) {
	let clientX = e.clientX;
	let clientY = e.clientY;
	return {
		currentTarget: target,
		shiftKey: e.shiftKey,
		ctrlKey: e.ctrlKey,
		metaKey: e.metaKey,
		altKey: e.altKey,
		clientX,
		clientY,
		key: e.key
	};
}
function $d27d541f9569d26d$var$shouldPreventDefaultUp(target) {
	if (target instanceof HTMLInputElement) return false;
	if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
	if ($d27d541f9569d26d$var$isHTMLAnchorLink(target)) return false;
	return true;
}
function $d27d541f9569d26d$var$shouldPreventDefaultKeyboard(target, key) {
	if ($2add3ce32c6007eb$export$9ac100e40613ea10() && key === "Enter") return false;
	if (target instanceof HTMLInputElement) {
		if (key === "Enter" && (target.type === "checkbox" || target.type === "radio")) return false;
		return !$d27d541f9569d26d$var$isValidInputKey(target, key);
	}
	return $d27d541f9569d26d$var$shouldPreventDefaultUp(target);
}
function $d27d541f9569d26d$var$isValidInputKey(target, key) {
	return target.type === "checkbox" || target.type === "radio" ? key === " " : $d27d541f9569d26d$var$nonTextInputTypes.has(target.type);
}
var import_react$9, $d27d541f9569d26d$var$PressEvent, $d27d541f9569d26d$var$LINK_CLICKED, $d27d541f9569d26d$var$STYLE_ID, $d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE, $d27d541f9569d26d$var$nonTextInputTypes;
var init_usePress = __esmMin((() => {
	init_chain();
	init_utils$2();
	init_textSelection();
	init_focusWithoutScrolling();
	init_DOMFunctions();
	init_getNonce();
	init_domHelpers();
	init_platform();
	init_isVirtualEvent();
	init_mergeProps();
	init_openLink();
	init_context();
	init_useEffectEvent();
	init_useGlobalListeners();
	init_useSyncRef();
	require_react_dom();
	import_react$9 = /* @__PURE__ */ __toESM(require_react(), 1);
	$d27d541f9569d26d$var$PressEvent = class {
		#shouldStopPropagation;
		constructor(type, pointerType, originalEvent, state) {
			this.#shouldStopPropagation = true;
			const rect = (state?.target ?? originalEvent.currentTarget)?.getBoundingClientRect();
			let x, y = 0;
			let clientX, clientY = null;
			if (originalEvent.clientX != null && originalEvent.clientY != null) {
				clientX = originalEvent.clientX;
				clientY = originalEvent.clientY;
			}
			if (rect) if (clientX != null && clientY != null) {
				x = clientX - rect.left;
				y = clientY - rect.top;
			} else {
				x = rect.width / 2;
				y = rect.height / 2;
			}
			this.type = type;
			this.pointerType = pointerType;
			this.target = originalEvent.currentTarget;
			this.shiftKey = originalEvent.shiftKey;
			this.metaKey = originalEvent.metaKey;
			this.ctrlKey = originalEvent.ctrlKey;
			this.altKey = originalEvent.altKey;
			this.x = x;
			this.y = y;
			this.key = originalEvent.key;
		}
		continuePropagation() {
			this.#shouldStopPropagation = false;
		}
		get shouldStopPropagation() {
			return this.#shouldStopPropagation;
		}
	};
	$d27d541f9569d26d$var$LINK_CLICKED = Symbol("linkClicked");
	$d27d541f9569d26d$var$STYLE_ID = "react-aria-pressable-style";
	$d27d541f9569d26d$var$PRESSABLE_ATTRIBUTE = "data-react-aria-pressable";
	$d27d541f9569d26d$var$nonTextInputTypes = /* @__PURE__ */ new Set([
		"checkbox",
		"radio",
		"range",
		"color",
		"file",
		"image",
		"button",
		"submit",
		"reset"
	]);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/Pressable.mjs
var import_react$8, $15e7830bf6471d45$export$27c701ed9e449e99;
var init_Pressable = __esmMin((() => {
	init_mergeProps();
	init_mergeRefs();
	init_usePress();
	init_useFocusable();
	init_useObjectRef();
	import_react$8 = /* @__PURE__ */ __toESM(require_react(), 1);
	$15e7830bf6471d45$export$27c701ed9e449e99 = /*#__PURE__*/ import_react$8.forwardRef(({ children, ...props }, ref) => {
		ref = $03e8ab2d84d7657a$export$4338b53315abf666(ref);
		let { pressProps } = $d27d541f9569d26d$export$45712eceda6fad21({
			...props,
			ref
		});
		let { focusableProps } = $d1116acdf220c2da$export$4c014de7c8940b4c(props, ref);
		let child = import_react$8.Children.only(children);
		(0, import_react$8.useEffect)(() => {}, [ref, props.isDisabled]);
		let childRef = parseInt("18.3.1", 10) < 19 ? child.ref : child.props.ref;
		return /*#__PURE__*/ import_react$8.cloneElement(child, {
			...$bbaa08b3cd72f041$export$9d1611c77c2fe928(pressProps, focusableProps, child.props),
			ref: $4064df0d6f9620e1$export$c9058316764c140e(childRef, ref)
		});
	});
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/live-announcer/LiveAnnouncer.mjs
function $a46cf152bb926da5$export$a9b970dcc4ae71a9(message, assertiveness = "assertive", timeout = $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY) {
	if (!$a46cf152bb926da5$var$liveAnnouncer) {
		$a46cf152bb926da5$var$liveAnnouncer = new $a46cf152bb926da5$var$LiveAnnouncer();
		if (!(typeof IS_REACT_ACT_ENVIRONMENT === "boolean" ? IS_REACT_ACT_ENVIRONMENT : typeof jest !== "undefined")) setTimeout(() => {
			if ($a46cf152bb926da5$var$liveAnnouncer?.isAttached()) $a46cf152bb926da5$var$liveAnnouncer?.announce(message, assertiveness, timeout);
		}, 100);
		else $a46cf152bb926da5$var$liveAnnouncer.announce(message, assertiveness, timeout);
	} else $a46cf152bb926da5$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
function $a46cf152bb926da5$export$d10ae4f68404609a(assertiveness) {
	if ($a46cf152bb926da5$var$liveAnnouncer) $a46cf152bb926da5$var$liveAnnouncer.clear(assertiveness);
}
var $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY, $a46cf152bb926da5$var$liveAnnouncer, $a46cf152bb926da5$var$LiveAnnouncer;
var init_LiveAnnouncer = __esmMin((() => {
	$a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY = 7e3;
	$a46cf152bb926da5$var$liveAnnouncer = null;
	$a46cf152bb926da5$var$LiveAnnouncer = class {
		constructor() {
			this.node = null;
			this.assertiveLog = null;
			this.politeLog = null;
			if (typeof document !== "undefined") {
				this.node = document.createElement("div");
				this.node.dataset.liveAnnouncer = "true";
				Object.assign(this.node.style, {
					border: 0,
					clip: "rect(0 0 0 0)",
					clipPath: "inset(50%)",
					height: "1px",
					margin: "-1px",
					overflow: "hidden",
					padding: 0,
					position: "absolute",
					width: "1px",
					whiteSpace: "nowrap"
				});
				this.assertiveLog = this.createLog("assertive");
				this.node.appendChild(this.assertiveLog);
				this.politeLog = this.createLog("polite");
				this.node.appendChild(this.politeLog);
				document.body.prepend(this.node);
			}
		}
		isAttached() {
			return this.node?.isConnected;
		}
		createLog(ariaLive) {
			let node = document.createElement("div");
			node.setAttribute("role", "log");
			node.setAttribute("aria-live", ariaLive);
			node.setAttribute("aria-relevant", "additions");
			return node;
		}
		destroy() {
			if (!this.node) return;
			document.body.removeChild(this.node);
			this.node = null;
		}
		announce(message, assertiveness = "assertive", timeout = $a46cf152bb926da5$var$LIVEREGION_TIMEOUT_DELAY) {
			if (!this.node) return;
			let node = document.createElement("div");
			if (typeof message === "object") {
				node.setAttribute("role", "img");
				node.setAttribute("aria-labelledby", message["aria-labelledby"]);
			} else node.textContent = message;
			if (assertiveness === "assertive") this.assertiveLog?.appendChild(node);
			else this.politeLog?.appendChild(node);
			if (message !== "") setTimeout(() => {
				node.remove();
			}, timeout);
		}
		clear(assertiveness) {
			if (!this.node) return;
			if ((!assertiveness || assertiveness === "assertive") && this.assertiveLog) this.assertiveLog.innerHTML = "";
			if ((!assertiveness || assertiveness === "polite") && this.politeLog) this.politeLog.innerHTML = "";
		}
	};
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/focus/useFocusRing.mjs
function $0c4a58759813079a$export$4e328f61c538687f(props = {}) {
	let { autoFocus = false, isTextInput, within } = props;
	let state = (0, import_react$7.useRef)({
		isFocused: false,
		isFocusVisible: autoFocus || $8f5a2122b0992be3$export$b9b3dfddab17db27()
	});
	let [isFocused, setFocused] = (0, import_react$7.useState)(false);
	let [isFocusVisibleState, setFocusVisible] = (0, import_react$7.useState)(() => state.current.isFocused && state.current.isFocusVisible);
	let updateState = (0, import_react$7.useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
	let onFocusChange = (0, import_react$7.useCallback)((isFocused) => {
		state.current.isFocused = isFocused;
		state.current.isFocusVisible = $8f5a2122b0992be3$export$b9b3dfddab17db27();
		setFocused(isFocused);
		updateState();
	}, [updateState]);
	$8f5a2122b0992be3$export$ec71b4b83ac08ec3((isFocusVisible) => {
		state.current.isFocusVisible = isFocusVisible;
		updateState();
	}, [isTextInput, isFocused], {
		enabled: isFocused,
		isTextInput
	});
	let { focusProps } = $1e74c67db218ce67$export$f8168d8dd8fd66e6({
		isDisabled: within,
		onFocusChange
	});
	let { focusWithinProps } = $2c9edc598a03d523$export$420e68273165f4ec({
		isDisabled: !within,
		onFocusWithinChange: onFocusChange
	});
	return {
		isFocused,
		isFocusVisible: isFocusVisibleState,
		focusProps: within ? focusWithinProps : focusProps
	};
}
var import_react$7;
var init_useFocusRing = __esmMin((() => {
	init_useFocusVisible();
	init_useFocus();
	init_useFocusWithin();
	import_react$7 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/collections/BaseCollection.mjs
function $6f0c29017aeec335$var$filterChildren(collection, newCollection, firstChildKey, filterFn) {
	if (firstChildKey == null) return [null, null];
	let firstNode = null;
	let lastNode = null;
	let currentNode = collection.getItem(firstChildKey);
	while (currentNode != null) {
		let newNode = currentNode.filter(collection, newCollection, filterFn);
		if (newNode != null) {
			newNode.nextKey = null;
			if (lastNode) {
				newNode.prevKey = lastNode.key;
				lastNode.nextKey = newNode.key;
			}
			if (firstNode == null) firstNode = newNode;
			newCollection.addNode(newNode);
			lastNode = newNode;
		}
		currentNode = currentNode.nextKey != null ? collection.getItem(currentNode.nextKey) : null;
	}
	if (lastNode && lastNode.type === "separator") {
		let prevKey = lastNode.prevKey;
		newCollection.removeNode(lastNode.key);
		if (prevKey != null) {
			lastNode = newCollection.getItem(prevKey);
			lastNode.nextKey = null;
		} else lastNode = null;
	}
	return [firstNode?.key ?? null, lastNode?.key ?? null];
}
var $6f0c29017aeec335$export$d68d59712b04d9d1, $6f0c29017aeec335$export$b1918e978f1ee46f, $6f0c29017aeec335$export$8258a0665a675899, $6f0c29017aeec335$export$408d25a4e12db025;
var init_BaseCollection = __esmMin((() => {
	$6f0c29017aeec335$export$d68d59712b04d9d1 = class {
		constructor(key) {
			this.value = null;
			this.level = 0;
			this.hasChildNodes = false;
			this.rendered = null;
			this.textValue = "";
			this["aria-label"] = void 0;
			this.index = 0;
			this.parentKey = null;
			this.prevKey = null;
			this.nextKey = null;
			this.firstChildKey = null;
			this.lastChildKey = null;
			this.props = {};
			this.colSpan = null;
			this.colIndex = null;
			this.type = this.constructor.type;
			this.key = key;
		}
		get childNodes() {
			throw new Error("childNodes is not supported");
		}
		clone() {
			let node = new this.constructor(this.key);
			node.value = this.value;
			node.level = this.level;
			node.hasChildNodes = this.hasChildNodes;
			node.rendered = this.rendered;
			node.textValue = this.textValue;
			node["aria-label"] = this["aria-label"];
			node.index = this.index;
			node.parentKey = this.parentKey;
			node.prevKey = this.prevKey;
			node.nextKey = this.nextKey;
			node.firstChildKey = this.firstChildKey;
			node.lastChildKey = this.lastChildKey;
			node.props = this.props;
			node.render = this.render;
			node.colSpan = this.colSpan;
			node.colIndex = this.colIndex;
			return node;
		}
		filter(collection, newCollection, filterFn) {
			let clone = this.clone();
			newCollection.addDescendants(clone, collection);
			return clone;
		}
	};
	$6f0c29017aeec335$export$b1918e978f1ee46f = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
		filter(collection, newCollection, filterFn) {
			let [firstKey, lastKey] = $6f0c29017aeec335$var$filterChildren(collection, newCollection, this.firstChildKey, filterFn);
			let newNode = this.clone();
			newNode.firstChildKey = firstKey;
			newNode.lastChildKey = lastKey;
			return newNode;
		}
	};
	(class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
		static {
			this.type = "header";
		}
	});
	$6f0c29017aeec335$export$8258a0665a675899 = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
		static {
			this.type = "loader";
		}
	};
	(class extends $6f0c29017aeec335$export$b1918e978f1ee46f {
		static {
			this.type = "item";
		}
		filter(collection, newCollection, filterFn) {
			if (filterFn(this.textValue, this)) {
				let clone = this.clone();
				newCollection.addDescendants(clone, collection);
				return clone;
			}
			return null;
		}
	});
	(class extends $6f0c29017aeec335$export$b1918e978f1ee46f {
		static {
			this.type = "section";
		}
		filter(collection, newCollection, filterFn) {
			let filteredSection = super.filter(collection, newCollection, filterFn);
			if (filteredSection) {
				if (filteredSection.lastChildKey !== null) {
					let lastChild = collection.getItem(filteredSection.lastChildKey);
					if (lastChild && lastChild.type !== "header") return filteredSection;
				}
			}
			return null;
		}
	});
	$6f0c29017aeec335$export$408d25a4e12db025 = class {
		get size() {
			return this.itemCount;
		}
		getKeys() {
			return this.keyMap.keys();
		}
		*[Symbol.iterator]() {
			let node = this.firstKey != null ? this.keyMap.get(this.firstKey) : void 0;
			while (node) {
				yield node;
				node = node.nextKey != null ? this.keyMap.get(node.nextKey) : void 0;
			}
		}
		getChildren(key) {
			let keyMap = this.keyMap;
			return { *[Symbol.iterator]() {
				let parent = keyMap.get(key);
				let node = parent?.firstChildKey != null ? keyMap.get(parent.firstChildKey) : null;
				while (node) {
					yield node;
					node = node.nextKey != null ? keyMap.get(node.nextKey) : void 0;
				}
			} };
		}
		getKeyBefore(key) {
			let node = this.keyMap.get(key);
			if (!node) return null;
			if (node.prevKey != null) {
				node = this.keyMap.get(node.prevKey);
				while (node && node.type !== "item" && node.lastChildKey != null) node = this.keyMap.get(node.lastChildKey);
				return node?.key ?? null;
			}
			return node.parentKey;
		}
		getKeyAfter(key) {
			let node = this.keyMap.get(key);
			if (!node) return null;
			if (node.type !== "item" && node.firstChildKey != null) return node.firstChildKey;
			while (node) {
				if (node.nextKey != null) return node.nextKey;
				if (node.parentKey != null) node = this.keyMap.get(node.parentKey);
				else return null;
			}
			return null;
		}
		getFirstKey() {
			return this.firstKey;
		}
		getLastKey() {
			let node = this.lastKey != null ? this.keyMap.get(this.lastKey) : null;
			while (node?.lastChildKey != null) node = this.keyMap.get(node.lastChildKey);
			return node?.key ?? null;
		}
		getItem(key) {
			return this.keyMap.get(key) ?? null;
		}
		at() {
			throw new Error("Not implemented");
		}
		clone() {
			let Constructor = this.constructor;
			let collection = new Constructor();
			collection.keyMap = new Map(this.keyMap);
			collection.firstKey = this.firstKey;
			collection.lastKey = this.lastKey;
			collection.itemCount = this.itemCount;
			return collection;
		}
		addNode(node) {
			if (this.frozen) throw new Error("Cannot add a node to a frozen collection");
			if (node.type === "item" && this.keyMap.get(node.key) == null) this.itemCount++;
			this.keyMap.set(node.key, node);
		}
		addDescendants(node, oldCollection) {
			this.addNode(node);
			let children = oldCollection.getChildren(node.key);
			for (let child of children) this.addDescendants(child, oldCollection);
		}
		removeNode(key) {
			if (this.frozen) throw new Error("Cannot remove a node to a frozen collection");
			let node = this.keyMap.get(key);
			if (node != null && node.type === "item") this.itemCount--;
			this.keyMap.delete(key);
		}
		commit(firstKey, lastKey, isSSR = false) {
			if (this.frozen) throw new Error("Cannot commit a frozen collection");
			this.firstKey = firstKey;
			this.lastKey = lastKey;
			this.frozen = !isSSR;
		}
		filter(filterFn) {
			let newCollection = new this.constructor();
			let [firstKey, lastKey] = $6f0c29017aeec335$var$filterChildren(this, newCollection, this.firstKey, filterFn);
			newCollection?.commit(firstKey, lastKey);
			return newCollection;
		}
		constructor() {
			this.keyMap = /* @__PURE__ */ new Map();
			this.firstKey = null;
			this.lastKey = null;
			this.frozen = false;
			this.itemCount = 0;
		}
	};
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/collections/Document.mjs
var $96ead35620b8fd36$export$410b0c854570d131, $96ead35620b8fd36$export$dc064fe9e59310fd, $96ead35620b8fd36$export$b34a105447964f9f;
var init_Document = __esmMin((() => {
	$96ead35620b8fd36$export$410b0c854570d131 = class {
		constructor(ownerDocument) {
			this._firstChild = null;
			this._lastChild = null;
			this._previousSibling = null;
			this._nextSibling = null;
			this._parentNode = null;
			this._minInvalidChildIndex = null;
			this.ownerDocument = ownerDocument;
		}
		*[Symbol.iterator]() {
			let node = this.firstChild;
			while (node) {
				yield node;
				node = node.nextSibling;
			}
		}
		get firstChild() {
			return this._firstChild;
		}
		set firstChild(firstChild) {
			this._firstChild = firstChild;
			this.ownerDocument.markDirty(this);
		}
		get lastChild() {
			return this._lastChild;
		}
		set lastChild(lastChild) {
			this._lastChild = lastChild;
			this.ownerDocument.markDirty(this);
		}
		get previousSibling() {
			return this._previousSibling;
		}
		set previousSibling(previousSibling) {
			this._previousSibling = previousSibling;
			this.ownerDocument.markDirty(this);
		}
		get nextSibling() {
			return this._nextSibling;
		}
		set nextSibling(nextSibling) {
			this._nextSibling = nextSibling;
			this.ownerDocument.markDirty(this);
		}
		get parentNode() {
			return this._parentNode;
		}
		set parentNode(parentNode) {
			this._parentNode = parentNode;
			this.ownerDocument.markDirty(this);
		}
		get isConnected() {
			return this.parentNode?.isConnected || false;
		}
		invalidateChildIndices(child) {
			if (this._minInvalidChildIndex == null || !this._minInvalidChildIndex.isConnected || child.index < this._minInvalidChildIndex.index) {
				this._minInvalidChildIndex = child;
				this.ownerDocument.markDirty(this);
			}
		}
		updateChildIndices() {
			let node = this._minInvalidChildIndex;
			while (node) {
				node.index = node.previousSibling ? node.previousSibling.index + 1 : 0;
				node = node.nextSibling;
			}
			this._minInvalidChildIndex = null;
		}
		appendChild(child) {
			if (child.parentNode) child.parentNode.removeChild(child);
			if (this.firstChild == null) this.firstChild = child;
			if (this.lastChild) {
				this.lastChild.nextSibling = child;
				child.index = this.lastChild.index + 1;
				child.previousSibling = this.lastChild;
			} else {
				child.previousSibling = null;
				child.index = 0;
			}
			child.parentNode = this;
			child.nextSibling = null;
			this.lastChild = child;
			this.ownerDocument.markDirty(this);
			if (this.isConnected) this.ownerDocument.queueUpdate();
		}
		insertBefore(newNode, referenceNode) {
			if (referenceNode == null) return this.appendChild(newNode);
			if (newNode.parentNode) newNode.parentNode.removeChild(newNode);
			newNode.nextSibling = referenceNode;
			newNode.previousSibling = referenceNode.previousSibling;
			newNode.index = referenceNode.index - 1;
			if (this.firstChild === referenceNode) this.firstChild = newNode;
			else if (referenceNode.previousSibling) referenceNode.previousSibling.nextSibling = newNode;
			referenceNode.previousSibling = newNode;
			newNode.parentNode = referenceNode.parentNode;
			this.invalidateChildIndices(newNode);
			if (this.isConnected) this.ownerDocument.queueUpdate();
		}
		removeChild(child) {
			if (child.parentNode !== this) return;
			if (this._minInvalidChildIndex === child) this._minInvalidChildIndex = null;
			if (child.nextSibling) {
				this.invalidateChildIndices(child.nextSibling);
				child.nextSibling.previousSibling = child.previousSibling;
			}
			if (child.previousSibling) child.previousSibling.nextSibling = child.nextSibling;
			if (this.firstChild === child) this.firstChild = child.nextSibling;
			if (this.lastChild === child) this.lastChild = child.previousSibling;
			child.parentNode = null;
			child.nextSibling = null;
			child.previousSibling = null;
			child.index = 0;
			this.ownerDocument.markDirty(child);
			if (this.isConnected) this.ownerDocument.queueUpdate();
		}
		addEventListener() {}
		removeEventListener() {}
		get previousVisibleSibling() {
			let node = this.previousSibling;
			while (node && node.isHidden) node = node.previousSibling;
			return node;
		}
		get nextVisibleSibling() {
			let node = this.nextSibling;
			while (node && node.isHidden) node = node.nextSibling;
			return node;
		}
		get firstVisibleChild() {
			let node = this.firstChild;
			while (node && node.isHidden) node = node.nextSibling;
			return node;
		}
		get lastVisibleChild() {
			let node = this.lastChild;
			while (node && node.isHidden) node = node.previousSibling;
			return node;
		}
	};
	$96ead35620b8fd36$export$dc064fe9e59310fd = class $96ead35620b8fd36$export$dc064fe9e59310fd extends $96ead35620b8fd36$export$410b0c854570d131 {
		constructor(type, ownerDocument) {
			super(ownerDocument), this.nodeType = 8, this.isMutated = true, this._index = 0, this.isHidden = false;
			this.node = null;
		}
		get index() {
			return this._index;
		}
		set index(index) {
			this._index = index;
			this.ownerDocument.markDirty(this);
		}
		get level() {
			if (this.parentNode instanceof $96ead35620b8fd36$export$dc064fe9e59310fd) return this.parentNode.level + (this.parentNode.node?.type === "item" ? 1 : 0);
			return 0;
		}
		/**
		* Lazily gets a mutable instance of a Node. If the node has already
		* been cloned during this update cycle, it just returns the existing one.
		*/ getMutableNode() {
			if (this.node == null) return null;
			if (!this.isMutated) {
				this.node = this.node.clone();
				this.isMutated = true;
			}
			this.ownerDocument.markDirty(this);
			return this.node;
		}
		updateNode() {
			let nextSibling = this.nextVisibleSibling;
			let node = this.getMutableNode();
			if (node == null) return;
			node.index = this.index;
			node.level = this.level;
			node.parentKey = this.parentNode instanceof $96ead35620b8fd36$export$dc064fe9e59310fd ? this.parentNode.node?.key ?? null : null;
			node.prevKey = this.previousVisibleSibling?.node?.key ?? null;
			node.nextKey = nextSibling?.node?.key ?? null;
			node.hasChildNodes = !!this.firstChild;
			node.firstChildKey = this.firstVisibleChild?.node?.key ?? null;
			node.lastChildKey = this.lastVisibleChild?.node?.key ?? null;
			if ((node.colSpan != null || node.colIndex != null) && nextSibling) {
				let nextColIndex = (node.colIndex ?? node.index) + (node.colSpan ?? 1);
				if (nextSibling.node != null && nextColIndex !== nextSibling.node.colIndex) {
					let siblingNode = nextSibling.getMutableNode();
					siblingNode.colIndex = nextColIndex;
				}
			}
		}
		setProps(obj, ref, CollectionNodeClass, rendered, render) {
			let node;
			let { value: value1, textValue, id, ...props } = obj;
			if (this.node == null) {
				node = new CollectionNodeClass(id ?? `react-aria-${++this.ownerDocument.nodeId}`);
				this.node = node;
			} else node = this.getMutableNode();
			props.ref = ref;
			node.props = props;
			node.rendered = rendered;
			node.render = render;
			node.value = value1;
			if (obj["aria-label"]) node["aria-label"] = obj["aria-label"];
			node.textValue = textValue || (typeof props.children === "string" ? props.children : "") || obj["aria-label"] || "";
			if (id != null && id !== node.key) throw new Error("Cannot change the id of an item");
			if (props.colSpan != null) node.colSpan = props.colSpan;
			if (this.isConnected) this.ownerDocument.queueUpdate();
		}
		get style() {
			let element = this;
			return {
				get display() {
					return element.isHidden ? "none" : "";
				},
				set display(value) {
					let isHidden = value === "none";
					if (element.isHidden !== isHidden) {
						if (element.parentNode?.firstVisibleChild === element || element.parentNode?.lastVisibleChild === element) element.ownerDocument.markDirty(element.parentNode);
						let prev = element.previousVisibleSibling;
						let next = element.nextVisibleSibling;
						if (prev) element.ownerDocument.markDirty(prev);
						if (next) element.ownerDocument.markDirty(next);
						element.isHidden = isHidden;
						element.ownerDocument.markDirty(element);
					}
				}
			};
		}
		hasAttribute() {}
		setAttribute() {}
		setAttributeNS() {}
		removeAttribute() {}
	};
	$96ead35620b8fd36$export$b34a105447964f9f = class extends $96ead35620b8fd36$export$410b0c854570d131 {
		constructor(collection) {
			super(null), this.nodeType = 11, this.ownerDocument = this, this.dirtyNodes = /* @__PURE__ */ new Set(), this.isSSR = false, this.nodeId = 0, this.nodesByProps = /* @__PURE__ */ new WeakMap(), this.nextCollection = null, this.subscriptions = /* @__PURE__ */ new Set(), this.queuedRender = false, this.inSubscription = false;
			this.collection = collection;
			this.nextCollection = collection;
		}
		get isConnected() {
			return true;
		}
		createElement(type) {
			return new $96ead35620b8fd36$export$dc064fe9e59310fd(type, this);
		}
		getMutableCollection() {
			if (!this.nextCollection) this.nextCollection = this.collection.clone();
			return this.nextCollection;
		}
		markDirty(node) {
			this.dirtyNodes.add(node);
		}
		addNode(element) {
			if (element.isHidden || element.node == null) return;
			let collection = this.getMutableCollection();
			if (!collection.getItem(element.node.key)) for (let child of element) this.addNode(child);
			collection.addNode(element.node);
		}
		removeNode(node) {
			for (let child of node) this.removeNode(child);
			if (node.node) this.getMutableCollection().removeNode(node.node.key);
		}
		/** Finalizes the collection update, updating all nodes and freezing the collection. */ getCollection() {
			if (this.inSubscription) return this.collection;
			this.queuedRender = false;
			this.updateCollection();
			return this.collection;
		}
		updateCollection() {
			for (let element of this.dirtyNodes) if (element instanceof $96ead35620b8fd36$export$dc064fe9e59310fd && (!element.isConnected || element.isHidden)) this.removeNode(element);
			else element.updateChildIndices();
			for (let element of this.dirtyNodes) if (element instanceof $96ead35620b8fd36$export$dc064fe9e59310fd) {
				if (element.isConnected && !element.isHidden) {
					element.updateNode();
					this.addNode(element);
				}
				if (element.node) this.dirtyNodes.delete(element);
				element.isMutated = false;
			} else this.dirtyNodes.delete(element);
			if (this.nextCollection) {
				this.nextCollection.commit(this.firstVisibleChild?.node?.key ?? null, this.lastVisibleChild?.node?.key ?? null, this.isSSR);
				if (!this.isSSR) {
					this.collection = this.nextCollection;
					this.nextCollection = null;
				}
			}
		}
		queueUpdate() {
			if (this.dirtyNodes.size === 0 || this.queuedRender) return;
			this.queuedRender = true;
			this.inSubscription = true;
			if (!this.isSSR) this.collection = this.collection.clone();
			for (let fn of this.subscriptions) fn();
			this.inSubscription = false;
		}
		subscribe(fn) {
			this.subscriptions.add(fn);
			if (this.queuedRender) fn();
			return () => this.subscriptions.delete(fn);
		}
		resetAfterSSR() {
			if (this.isSSR) {
				this.isSSR = false;
				this.firstChild = null;
				this.lastChild = null;
				this.nodeId = 0;
			}
		}
	};
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/collections/useCachedChildren.mjs
function $a80bd3e9349588e7$export$727c8fc270210f13(props) {
	let { children, items, idScope, addIdAndValue, dependencies = [] } = props;
	let childrenString = (0, import_react$6.useMemo)(() => void 0, [children]);
	let cache = (0, import_react$6.useMemo)(() => /* @__PURE__ */ new WeakMap(), [...dependencies, childrenString]);
	return (0, import_react$6.useMemo)(() => {
		if (items && typeof children === "function") {
			let res = [];
			for (let item of items) {
				let cacheKey = $a80bd3e9349588e7$var$isWeakKey(item) ? item : null;
				let rendered = cacheKey ? cache.get(cacheKey) : null;
				if (!rendered) {
					rendered = children(item);
					let id = rendered.props.id ?? item?.key ?? item?.id;
					if (idScope != null && rendered.props.id == null && id != null) id = idScope + ":" + id;
					let key = id ?? res.length;
					rendered = (0, import_react$6.cloneElement)(rendered, addIdAndValue ? {
						key,
						id,
						value: item
					} : { key });
					if (cacheKey) cache.set(cacheKey, rendered);
				}
				res.push(rendered);
			}
			return res;
		} else if (typeof children !== "function") return children;
	}, [
		children,
		items,
		cache,
		idScope,
		addIdAndValue
	]);
}
function $a80bd3e9349588e7$var$isWeakKey(value) {
	switch (typeof value) {
		case "object": return value != null;
		case "function":
		case "symbol": return true;
		default: return false;
	}
}
var import_react$6;
var init_useCachedChildren = __esmMin((() => {
	import_react$6 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/collections/CollectionBuilder.mjs
function $42ceafc619f9c3ba$export$bf788dd355e3a401(props) {
	if ((0, import_react$5.useContext)($42ceafc619f9c3ba$var$CollectionDocumentContext)) return props.content;
	let { collection, document } = $42ceafc619f9c3ba$var$useCollectionDocument(props.createCollection);
	return /*#__PURE__*/ import_react$5.createElement(import_react$5.Fragment, null, /*#__PURE__*/ import_react$5.createElement($d7f64c32b702fe2c$export$8dc98ba7eadeaa56, null, /*#__PURE__*/ import_react$5.createElement($42ceafc619f9c3ba$var$CollectionDocumentContext.Provider, { value: document }, props.content)), /*#__PURE__*/ import_react$5.createElement($42ceafc619f9c3ba$var$CollectionInner, {
		render: props.children,
		collection
	}));
}
function $42ceafc619f9c3ba$var$CollectionInner({ collection, render }) {
	return render(collection);
}
function $42ceafc619f9c3ba$var$useSyncExternalStoreFallback(subscribe, getSnapshot, getServerSnapshot) {
	let isSSR = $c7eafbbe1ea5834e$export$535bd6ca7f90a273();
	let isSSRRef = (0, import_react$5.useRef)(isSSR);
	isSSRRef.current = isSSR;
	return (0, import_react$35.useSyncExternalStore)(subscribe, (0, import_react$5.useCallback)(() => {
		return isSSRRef.current ? getServerSnapshot() : getSnapshot();
	}, [getSnapshot, getServerSnapshot]));
}
function $42ceafc619f9c3ba$var$useCollectionDocument(createCollection) {
	let [document] = (0, import_react$5.useState)(() => new $96ead35620b8fd36$export$b34a105447964f9f(createCollection?.() || new $6f0c29017aeec335$export$408d25a4e12db025()));
	let subscribe = (0, import_react$5.useCallback)((fn) => document.subscribe(fn), [document]);
	let getSnapshot = (0, import_react$5.useCallback)(() => {
		let collection = document.getCollection();
		if (document.isSSR) document.resetAfterSSR();
		return collection;
	}, [document]);
	let getServerSnapshot = (0, import_react$5.useCallback)(() => {
		document.isSSR = true;
		return document.getCollection();
	}, [document]);
	return {
		collection: $42ceafc619f9c3ba$var$useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot),
		document
	};
}
function $42ceafc619f9c3ba$var$createCollectionNodeClass(type) {
	let NodeClass = class extends $6f0c29017aeec335$export$d68d59712b04d9d1 {
		static {
			this.type = type;
		}
	};
	return NodeClass;
}
function $42ceafc619f9c3ba$var$useSSRCollectionNode(CollectionNodeClass, props, ref, rendered, children, render) {
	if (typeof CollectionNodeClass === "string") CollectionNodeClass = $42ceafc619f9c3ba$var$createCollectionNodeClass(CollectionNodeClass);
	let itemRef = (0, import_react$5.useCallback)((element) => {
		element?.setProps(props, ref, CollectionNodeClass, rendered, render);
	}, [
		props,
		ref,
		rendered,
		render,
		CollectionNodeClass
	]);
	let parentNode = (0, import_react$5.useContext)($42ceafc619f9c3ba$var$SSRContext);
	if (parentNode) {
		let element = parentNode.ownerDocument.nodesByProps.get(props);
		if (!element) {
			element = parentNode.ownerDocument.createElement(CollectionNodeClass.type);
			element.setProps(props, ref, CollectionNodeClass, rendered, render);
			parentNode.appendChild(element);
			parentNode.ownerDocument.updateCollection();
			parentNode.ownerDocument.nodesByProps.set(props, element);
		}
		return children ? /*#__PURE__*/ import_react$5.createElement($42ceafc619f9c3ba$var$SSRContext.Provider, { value: element }, children) : null;
	}
	return /*#__PURE__*/ import_react$5.createElement(CollectionNodeClass.type, { ref: itemRef }, children);
}
function $42ceafc619f9c3ba$export$18af5c7a9e9b3664(CollectionNodeClass, render) {
	let Component = ({ node }) => render(node.props, node.props.ref, node);
	let Result = (0, import_react$5.forwardRef)((props, ref) => {
		let focusableProps = (0, import_react$5.useContext)($d1116acdf220c2da$export$f9762fab77588ecb);
		if (!(0, import_react$5.useContext)($42ceafc619f9c3ba$var$ShallowRenderContext)) {
			if (render.length >= 3) throw new Error(render.name + " cannot be rendered outside a collection.");
			return render(props, ref);
		}
		return $42ceafc619f9c3ba$var$useSSRCollectionNode(CollectionNodeClass, props, ref, "children" in props ? props.children : null, null, (node) => /*#__PURE__*/ import_react$5.createElement($d1116acdf220c2da$export$f9762fab77588ecb.Provider, { value: focusableProps }, /*#__PURE__*/ import_react$5.createElement(Component, { node })));
	});
	Result.displayName = render.name;
	return Result;
}
function $42ceafc619f9c3ba$var$useCollectionChildren(options) {
	return $a80bd3e9349588e7$export$727c8fc270210f13({
		...options,
		addIdAndValue: true
	});
}
function $42ceafc619f9c3ba$export$fb8073518f34e6ec(props) {
	let ctx = (0, import_react$5.useContext)($42ceafc619f9c3ba$var$CollectionContext);
	let dependencies = (ctx?.dependencies || []).concat(props.dependencies);
	let idScope = props.idScope ?? ctx?.idScope;
	let children = $42ceafc619f9c3ba$var$useCollectionChildren({
		...props,
		idScope,
		dependencies
	});
	if ((0, import_react$5.useContext)($42ceafc619f9c3ba$var$CollectionDocumentContext)) children = /*#__PURE__*/ import_react$5.createElement($42ceafc619f9c3ba$var$CollectionRoot, null, children);
	ctx = (0, import_react$5.useMemo)(() => ({
		dependencies,
		idScope
	}), [idScope, ...dependencies]);
	return /*#__PURE__*/ import_react$5.createElement($42ceafc619f9c3ba$var$CollectionContext.Provider, { value: ctx }, children);
}
function $42ceafc619f9c3ba$var$CollectionRoot({ children }) {
	let doc = (0, import_react$5.useContext)($42ceafc619f9c3ba$var$CollectionDocumentContext);
	let wrappedChildren = (0, import_react$5.useMemo)(() => /*#__PURE__*/ import_react$5.createElement($42ceafc619f9c3ba$var$CollectionDocumentContext.Provider, { value: null }, /*#__PURE__*/ import_react$5.createElement($42ceafc619f9c3ba$var$ShallowRenderContext.Provider, { value: true }, children)), [children]);
	return $c7eafbbe1ea5834e$export$535bd6ca7f90a273() ? /*#__PURE__*/ import_react$5.createElement($42ceafc619f9c3ba$var$SSRContext.Provider, { value: doc }, wrappedChildren) : /*#__PURE__*/ (0, import_react_dom$1.createPortal)(wrappedChildren, doc);
}
var import_react_dom$1, import_react$5, $42ceafc619f9c3ba$var$ShallowRenderContext, $42ceafc619f9c3ba$var$CollectionDocumentContext, $42ceafc619f9c3ba$var$useSyncExternalStore, $42ceafc619f9c3ba$var$SSRContext, $42ceafc619f9c3ba$var$CollectionContext;
var init_CollectionBuilder = __esmMin((() => {
	init_BaseCollection();
	init_Document();
	init_useCachedChildren();
	init_useFocusable();
	init_Hidden();
	init_SSRProvider();
	import_react_dom$1 = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	import_react$5 = /* @__PURE__ */ __toESM(require_react(), 1);
	init_use_sync_external_store_shim();
	$42ceafc619f9c3ba$var$ShallowRenderContext = /*#__PURE__*/ (0, import_react$5.createContext)(false);
	$42ceafc619f9c3ba$var$CollectionDocumentContext = /*#__PURE__*/ (0, import_react$5.createContext)(null);
	$42ceafc619f9c3ba$var$useSyncExternalStore = typeof import_react$5.useSyncExternalStore === "function" ? import_react$5.useSyncExternalStore : $42ceafc619f9c3ba$var$useSyncExternalStoreFallback;
	$42ceafc619f9c3ba$var$SSRContext = /*#__PURE__*/ (0, import_react$5.createContext)(null);
	$42ceafc619f9c3ba$var$CollectionContext = /*#__PURE__*/ (0, import_react$5.createContext)(null);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/focus/virtualFocus.mjs
function $b72f3f7b3b5f42c6$export$76e4e37e5339496d(to) {
	let from = $b72f3f7b3b5f42c6$export$759df0d867455a91($d447af545b77c9f1$export$b204af158042fbac(to));
	if (from !== to) {
		if (from) $b72f3f7b3b5f42c6$export$6c5dc7e81d2cc29a(from, to);
		if (to) $b72f3f7b3b5f42c6$export$2b35b76d2e30e129(to, from);
	}
}
function $b72f3f7b3b5f42c6$export$6c5dc7e81d2cc29a(from, to) {
	from.dispatchEvent(new FocusEvent("blur", { relatedTarget: to }));
	from.dispatchEvent(new FocusEvent("focusout", {
		bubbles: true,
		relatedTarget: to
	}));
}
function $b72f3f7b3b5f42c6$export$2b35b76d2e30e129(to, from) {
	to.dispatchEvent(new FocusEvent("focus", { relatedTarget: from }));
	to.dispatchEvent(new FocusEvent("focusin", {
		bubbles: true,
		relatedTarget: from
	}));
}
function $b72f3f7b3b5f42c6$export$759df0d867455a91(document) {
	let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576(document);
	let activeDescendant = activeElement?.getAttribute("aria-activedescendant");
	if (activeDescendant) return document.getElementById(activeDescendant) || activeElement;
	return activeElement;
}
var init_virtualFocus = __esmMin((() => {
	init_DOMFunctions();
	init_domHelpers();
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/interactions/useLongPress.mjs
function $7b01448eaad0fe7c$export$c24ed0104d07eab9(props) {
	let { isDisabled, pointerType, onLongPressStart, onLongPressEnd, onLongPress, threshold = $7b01448eaad0fe7c$var$DEFAULT_THRESHOLD, accessibilityDescription } = props;
	const timeRef = (0, import_react$4.useRef)(void 0);
	let { addGlobalListener, removeAllGlobalListeners } = $48a7d519b337145d$export$4eaf04e54aa8eed6();
	let isAcceptedPointerType = (e) => pointerType ? e.pointerType === pointerType : e.pointerType === "mouse" || e.pointerType === "touch";
	let { pressProps } = $d27d541f9569d26d$export$45712eceda6fad21({
		isDisabled,
		onPressStart(e) {
			e.continuePropagation();
			if (isAcceptedPointerType(e)) {
				if (onLongPressStart) onLongPressStart({
					...e,
					type: "longpressstart"
				});
				timeRef.current = setTimeout(() => {
					e.target.dispatchEvent(new PointerEvent("pointercancel", { bubbles: true }));
					addGlobalListener(e.target, "click", (e) => e.preventDefault(), { once: true });
					if ($d447af545b77c9f1$export$b204af158042fbac(e.target).activeElement !== e.target) $1969ac565cfec8d0$export$de79e2c695e052f3(e.target);
					if (onLongPress) onLongPress({
						...e,
						type: "longpress"
					});
					timeRef.current = void 0;
				}, threshold);
				if (e.pointerType === "touch") addGlobalListener(e.target, "contextmenu", (e) => e.preventDefault(), { once: true });
				let ownerWindow = $d447af545b77c9f1$export$f21a1ffae260145a(e.target);
				addGlobalListener(ownerWindow, "pointerup", () => {
					setTimeout(() => {
						removeAllGlobalListeners();
					}, 100);
				}, { once: true });
			}
		},
		onPressEnd(e) {
			if (timeRef.current) clearTimeout(timeRef.current);
			if (onLongPressEnd && isAcceptedPointerType(e)) onLongPressEnd({
				...e,
				type: "longpressend"
			});
		}
	});
	return { longPressProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(pressProps, $121970af65029459$export$f8aeda7b10753fa1(onLongPress && !isDisabled ? accessibilityDescription : void 0)) };
}
var import_react$4, $7b01448eaad0fe7c$var$DEFAULT_THRESHOLD;
var init_useLongPress = __esmMin((() => {
	init_focusWithoutScrolling();
	init_domHelpers();
	init_mergeProps();
	init_useDescription();
	init_useGlobalListeners();
	init_usePress();
	import_react$4 = /* @__PURE__ */ __toESM(require_react(), 1);
	$7b01448eaad0fe7c$var$DEFAULT_THRESHOLD = 500;
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/selection/utils.mjs
function $22bbea12c2567021$export$d3e3bd3e26688c04(e) {
	return $2add3ce32c6007eb$export$e1865c3bedcd822b() ? e.altKey : e.ctrlKey;
}
function $22bbea12c2567021$export$c3d8340acf92597f(collectionRef, key) {
	let selector = `[data-key="${CSS.escape(String(key))}"]`;
	let collection = collectionRef.current?.dataset.collection;
	if (collection) selector = `[data-collection="${CSS.escape(collection)}"]${selector}`;
	return collectionRef.current?.querySelector(selector);
}
function $22bbea12c2567021$export$881eb0d9f3605d9d(collection) {
	let id = $390e54f620492c70$export$f680877a34711e37();
	$22bbea12c2567021$var$collectionMap.set(collection, id);
	return id;
}
function $22bbea12c2567021$export$6aeb1680a0ae8741(collection) {
	return $22bbea12c2567021$var$collectionMap.get(collection);
}
var $22bbea12c2567021$var$collectionMap;
var init_utils = __esmMin((() => {
	init_platform();
	init_useId();
	$22bbea12c2567021$var$collectionMap = /* @__PURE__ */ new WeakMap();
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/selection/useTypeSelect.mjs
function $f5a4a9a3486154da$export$e32c88dfddc6e1d8(options) {
	let { keyboardDelegate, selectionManager, onTypeSelect } = options;
	let state = (0, import_react$3.useRef)({
		search: "",
		timeout: void 0
	});
	let onKeyDownCapture = (e) => {
		if (state.current.search.length > 0 && e.key === " ") {
			e.preventDefault();
			if (!("continuePropagation" in e) || "continuePropagation" in e && !e.isPropagationStopped()) e.stopPropagation();
			state.current.search += " ";
			if (keyboardDelegate.getKeyForSearch != null) {
				let key = keyboardDelegate.getKeyForSearch(state.current.search, selectionManager.focusedKey);
				if (key == null) key = keyboardDelegate.getKeyForSearch(state.current.search);
				if (key != null) {
					selectionManager.setFocusedKey(key);
					if (onTypeSelect) onTypeSelect(key);
				}
			}
			clearTimeout(state.current.timeout);
			state.current.timeout = setTimeout(() => {
				state.current.search = "";
			}, $f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
		}
	};
	let onKeyDown = (e) => {
		let character = $f5a4a9a3486154da$var$getStringForKey(e.key);
		if (!character || e.ctrlKey || e.metaKey || e.altKey || !$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) || state.current.search.length === 0 && character === " ") return;
		state.current.search += character;
		if (keyboardDelegate.getKeyForSearch != null) {
			let key = keyboardDelegate.getKeyForSearch(state.current.search, selectionManager.focusedKey);
			if (key == null) key = keyboardDelegate.getKeyForSearch(state.current.search);
			if (key != null) {
				selectionManager.setFocusedKey(key);
				if (onTypeSelect) onTypeSelect(key);
				e.preventDefault();
				if (!("continuePropagation" in e)) e.stopPropagation();
			} else {
				state.current.search = "";
				clearTimeout(state.current.timeout);
				state.current.timeout = void 0;
				return;
			}
		}
		clearTimeout(state.current.timeout);
		state.current.timeout = setTimeout(() => {
			state.current.search = "";
		}, $f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
	};
	(0, import_react$3.useEffect)(() => {
		let timeout = state.current.timeout;
		return () => {
			clearTimeout(timeout);
		};
	}, [state]);
	return { typeSelectProps: {
		onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDownCapture : void 0,
		onKeyDown: keyboardDelegate.getKeyForSearch ? onKeyDown : void 0
	} };
}
function $f5a4a9a3486154da$var$getStringForKey(key) {
	if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
	return "";
}
var import_react$3, $f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS;
var init_useTypeSelect = __esmMin((() => {
	init_DOMFunctions();
	import_react$3 = /* @__PURE__ */ __toESM(require_react(), 1);
	$f5a4a9a3486154da$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1e3;
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/selection/useSelectableCollection.mjs
function $d667c2af82d35a98$export$d6daf82dcd84e87c(options) {
	let { selectionManager: manager, keyboardDelegate: delegate, ref, autoFocus = false, shouldFocusWrap = false, disallowEmptySelection = false, disallowSelectAll = false, escapeKeyBehavior = "clearSelection", selectOnFocus = manager.selectionBehavior === "replace", disallowTypeAhead = false, shouldUseVirtualFocus, allowsTabNavigation = false, scrollRef = ref, linkBehavior = "action", UNSTABLE_focusOnEntry } = options;
	let { direction } = $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7();
	let router = $caaf0dd3060ed57c$export$9a302a45f65d0572();
	const navigateToKey = (e, key, childFocus) => {
		if (key != null) {
			if (manager.isLink(key) && linkBehavior === "selection" && selectOnFocus && !$22bbea12c2567021$export$d3e3bd3e26688c04(e)) {
				(0, import_react_dom.flushSync)(() => {
					manager.setFocusedKey(key, childFocus);
				});
				let item = $22bbea12c2567021$export$c3d8340acf92597f(ref, key);
				let itemProps = manager.getItemProps(key);
				if (item) {
					router.open(item, e, itemProps.href, itemProps.routerOptions);
					return;
				}
				return false;
			}
			manager.setFocusedKey(key, childFocus);
			if (manager.isLink(key) && linkBehavior === "override") return false;
			if (e.shiftKey && manager.selectionMode === "multiple") {
				manager.extendSelection(key);
				return;
			} else if (selectOnFocus && !$22bbea12c2567021$export$d3e3bd3e26688c04(e)) {
				manager.replaceSelection(key);
				return;
			}
		}
		return false;
	};
	let arrowDown = (e) => {
		if (delegate.getKeyBelow) {
			let nextKey = manager.focusedKey != null ? delegate.getKeyBelow?.(manager.focusedKey) : delegate.getFirstKey?.();
			if (nextKey == null && shouldFocusWrap) nextKey = delegate.getFirstKey?.(manager.focusedKey);
			if (nextKey != null) {
				navigateToKey(e, nextKey);
				return;
			}
		}
		return false;
	};
	let arrowUp = (e) => {
		if (delegate.getKeyAbove) {
			let nextKey = manager.focusedKey != null ? delegate.getKeyAbove?.(manager.focusedKey) : delegate.getLastKey?.();
			if (nextKey == null && shouldFocusWrap) nextKey = delegate.getLastKey?.(manager.focusedKey);
			if (nextKey != null) {
				navigateToKey(e, nextKey);
				return;
			}
		}
		return false;
	};
	let home = (e) => {
		if (delegate.getFirstKey) {
			if (manager.focusedKey === null && e.shiftKey) return false;
			let firstKey = delegate.getFirstKey(manager.focusedKey, $bb39c0fc1c19b34c$export$16792effe837dba3(e));
			manager.setFocusedKey(firstKey);
			if (firstKey != null) {
				if ($bb39c0fc1c19b34c$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === "multiple") {
					manager.extendSelection(firstKey);
					return;
				} else if (selectOnFocus) {
					manager.replaceSelection(firstKey);
					return;
				}
			}
		}
		return false;
	};
	let arrowLeft = (e) => {
		if (delegate.getKeyLeftOf) {
			let nextKey = manager.focusedKey != null ? delegate.getKeyLeftOf?.(manager.focusedKey) : delegate.getFirstKey?.();
			if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? delegate.getFirstKey?.(manager.focusedKey) : delegate.getLastKey?.(manager.focusedKey);
			if (nextKey != null) {
				navigateToKey(e, nextKey, direction === "rtl" ? "first" : "last");
				return;
			}
		}
		return false;
	};
	let arrowRight = (e) => {
		if (delegate.getKeyRightOf) {
			let nextKey = manager.focusedKey != null ? delegate.getKeyRightOf?.(manager.focusedKey) : delegate.getFirstKey?.();
			if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? delegate.getLastKey?.(manager.focusedKey) : delegate.getFirstKey?.(manager.focusedKey);
			if (nextKey != null) {
				navigateToKey(e, nextKey, direction === "rtl" ? "last" : "first");
				return;
			}
		}
		return false;
	};
	let end = (e) => {
		if (delegate.getLastKey) {
			if (manager.focusedKey === null && e.shiftKey) return false;
			let lastKey = delegate.getLastKey(manager.focusedKey, $bb39c0fc1c19b34c$export$16792effe837dba3(e));
			manager.setFocusedKey(lastKey);
			if (lastKey != null) {
				if ($bb39c0fc1c19b34c$export$16792effe837dba3(e) && e.shiftKey && manager.selectionMode === "multiple") {
					manager.extendSelection(lastKey);
					return;
				} else if (selectOnFocus) {
					manager.replaceSelection(lastKey);
					return;
				}
			}
		}
		return false;
	};
	let pageDown = (e) => {
		if (delegate.getKeyPageBelow && manager.focusedKey != null) {
			let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
			if (nextKey != null) return navigateToKey(e, nextKey);
		}
		return false;
	};
	let pageUp = (e) => {
		if (delegate.getKeyPageAbove && manager.focusedKey != null) {
			let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
			if (nextKey != null) return navigateToKey(e, nextKey);
		}
		return false;
	};
	let aHandler = () => {
		if (manager.selectionMode === "multiple" && disallowSelectAll !== true) {
			manager.selectAll();
			return;
		}
		return false;
	};
	let escape = () => {
		if (escapeKeyBehavior === "clearSelection" && !disallowEmptySelection && manager.selectedKeys.size !== 0) {
			manager.clearSelection();
			return;
		}
		return false;
	};
	let tab = () => {
		if (!allowsTabNavigation && ref.current) {
			let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(ref.current, { tabbable: true });
			let next = void 0;
			let last;
			do {
				last = walker.lastChild();
				if (last) next = last;
			} while (last);
			let activeElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
			if (next && (!$23f2114a1b82827e$export$b4f377a2b6254582(next) || activeElement && !$3b8b240c1bf84ab9$export$bebd5a1431fec25d(activeElement))) $1969ac565cfec8d0$export$de79e2c695e052f3(next);
		}
		return {
			shouldContinuePropagation: true,
			shouldPreventDefault: false
		};
	};
	let shiftTab = () => {
		if (!allowsTabNavigation && ref.current) ref.current.focus();
		return {
			shouldContinuePropagation: true,
			shouldPreventDefault: false
		};
	};
	let withShiftSel = (key, callback) => {
		return {
			[$2add3ce32c6007eb$export$9ac100e40613ea10() ? key + "+Shift+Alt" : key + "+Shift+Control"]: callback,
			[key + "+Shift"]: callback,
			[$2add3ce32c6007eb$export$9ac100e40613ea10() ? key + "+Alt" : key + "+Control"]: callback,
			[key]: callback
		};
	};
	let { keyboardProps: repeatKeyboardProps } = $8296dad1a4c5e0dc$export$8f71654801c2f7cd({
		shortcuts: {
			...withShiftSel("ArrowDown", arrowDown),
			...withShiftSel("ArrowUp", arrowUp),
			...withShiftSel("ArrowLeft", arrowLeft),
			...withShiftSel("ArrowRight", arrowRight),
			...withShiftSel("PageDown", pageDown),
			...withShiftSel("PageUp", pageUp)
		},
		allowRepeats: true
	});
	let { keyboardProps } = $8296dad1a4c5e0dc$export$8f71654801c2f7cd({ shortcuts: {
		...withShiftSel("Home", home),
		...withShiftSel("End", end),
		"Mod+A": aHandler,
		Escape: escape,
		Tab: tab,
		"Tab+Shift": shiftTab
	} });
	let scrollPos = (0, import_react$2.useRef)({
		top: 0,
		left: 0
	});
	$600b3cf69ae46262$export$90fc3a17d93f704c(scrollRef, "scroll", () => {
		scrollPos.current = {
			top: scrollRef.current?.scrollTop ?? 0,
			left: scrollRef.current?.scrollLeft ?? 0
		};
	});
	let onFocus = (e) => {
		if (manager.isFocused) {
			if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) manager.setFocused(false);
			return;
		}
		if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, $23f2114a1b82827e$export$e58f029f0fbfdb29(e))) return;
		let modality = $8f5a2122b0992be3$export$630ff653c5ada6a9();
		manager.setFocused(true);
		let navigateToKey = (key) => {
			if (key != null) {
				manager.setFocusedKey(key);
				if (selectOnFocus && !manager.isSelected(key)) manager.replaceSelection(key);
			}
		};
		if (UNSTABLE_focusOnEntry && (modality === "keyboard" || modality === "virtual")) navigateToKey(UNSTABLE_focusOnEntry === "first" ? delegate.getFirstKey?.() : delegate.getLastKey?.());
		else if (manager.focusedKey == null) {
			let relatedTarget = e.relatedTarget;
			if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToKey(manager.lastSelectedKey ?? delegate.getLastKey?.());
			else navigateToKey(manager.firstSelectedKey ?? delegate.getFirstKey?.());
		} else if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollPos.current.top;
			scrollRef.current.scrollLeft = scrollPos.current.left;
		}
		if (manager.focusedKey != null && scrollRef.current) {
			let element = $22bbea12c2567021$export$c3d8340acf92597f(ref, manager.focusedKey);
			if (element instanceof HTMLElement) {
				if (!$23f2114a1b82827e$export$b4f377a2b6254582(element) && !shouldUseVirtualFocus) $1969ac565cfec8d0$export$de79e2c695e052f3(element);
				if (modality === "keyboard" || UNSTABLE_focusOnEntry && modality === "virtual") $51a3e22a5186a962$export$c826860796309d1b(element, { containingElement: ref.current });
			}
		}
	};
	let onBlur = (e) => {
		if (!$23f2114a1b82827e$export$4282f70798064fe0(e.currentTarget, e.relatedTarget)) manager.setFocused(false);
	};
	let shouldVirtualFocusFirst = (0, import_react$2.useRef)(false);
	$600b3cf69ae46262$export$90fc3a17d93f704c(ref, $8b2399d051d06d4c$export$831c820ad60f9d12, !shouldUseVirtualFocus ? void 0 : (e) => {
		let { detail } = e;
		e.stopPropagation();
		manager.setFocused(true);
		if (detail?.focusStrategy === "first") shouldVirtualFocusFirst.current = true;
	});
	let firstKey = delegate.getFirstKey?.() ?? null;
	$a475cdc2445827b5$export$72ef708ab07251f1(() => {
		if (shouldVirtualFocusFirst.current) if (firstKey == null) {
			let previousActiveElement = $23f2114a1b82827e$export$cd4e5573fbe2b576();
			$b72f3f7b3b5f42c6$export$76e4e37e5339496d(ref.current);
			$b72f3f7b3b5f42c6$export$2b35b76d2e30e129(previousActiveElement, null);
			if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
		} else {
			manager.setFocusedKey(firstKey);
			shouldVirtualFocusFirst.current = false;
		}
	}, [firstKey, manager.collection.size]);
	$a475cdc2445827b5$export$72ef708ab07251f1(() => {
		if (manager.collection.size > 0) shouldVirtualFocusFirst.current = false;
	}, [manager.focusedKey]);
	$600b3cf69ae46262$export$90fc3a17d93f704c(ref, $8b2399d051d06d4c$export$447a38995de2c711, !shouldUseVirtualFocus ? void 0 : (e) => {
		e.stopPropagation();
		manager.setFocused(false);
		if (e.detail?.clearFocusKey) manager.setFocusedKey(null);
	});
	const autoFocusRef = (0, import_react$2.useRef)(autoFocus);
	const didAutoFocusRef = (0, import_react$2.useRef)(false);
	(0, import_react$2.useEffect)(() => {
		if (autoFocusRef.current) {
			let focusedKey = null;
			if (autoFocus === "first") focusedKey = delegate.getFirstKey?.() ?? null;
			if (autoFocus === "last") focusedKey = delegate.getLastKey?.() ?? null;
			let selectedKeys = manager.selectedKeys;
			if (selectedKeys.size) {
				for (let key of selectedKeys) if (manager.canSelectItem(key)) {
					focusedKey = key;
					break;
				}
			}
			manager.setFocused(true);
			manager.setFocusedKey(focusedKey);
			if (focusedKey != null && selectOnFocus && !selectedKeys.size && manager.canSelectItem(focusedKey)) manager.replaceSelection(focusedKey);
			if (focusedKey == null && !shouldUseVirtualFocus && ref.current) $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
			if (manager.collection.size > 0) {
				autoFocusRef.current = false;
				didAutoFocusRef.current = true;
			}
		}
	});
	let lastFocusedKey = (0, import_react$2.useRef)(manager.focusedKey);
	let raf = (0, import_react$2.useRef)(null);
	(0, import_react$2.useEffect)(() => {
		if (manager.isFocused && manager.focusedKey != null && (manager.focusedKey !== lastFocusedKey.current || didAutoFocusRef.current) && scrollRef.current && ref.current) {
			let modality = $8f5a2122b0992be3$export$630ff653c5ada6a9();
			let element = $22bbea12c2567021$export$c3d8340acf92597f(ref, manager.focusedKey);
			if (!(element instanceof HTMLElement)) return;
			if (modality === "keyboard" || didAutoFocusRef.current) {
				if (raf.current) cancelAnimationFrame(raf.current);
				raf.current = requestAnimationFrame(() => {
					if (scrollRef.current) {
						$51a3e22a5186a962$export$53a0910f038337bd(scrollRef.current, element);
						if (modality !== "virtual") $51a3e22a5186a962$export$c826860796309d1b(element, { containingElement: ref.current });
					}
				});
			}
		}
		if (!shouldUseVirtualFocus && manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null && ref.current) $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
		lastFocusedKey.current = manager.focusedKey;
		didAutoFocusRef.current = false;
	});
	(0, import_react$2.useEffect)(() => {
		return () => {
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, []);
	$600b3cf69ae46262$export$90fc3a17d93f704c(ref, "react-aria-focus-scope-restore", (e) => {
		e.preventDefault();
		manager.setFocused(true);
	});
	let handlers = {
		...$bbaa08b3cd72f041$export$9d1611c77c2fe928(keyboardProps, repeatKeyboardProps),
		onFocus,
		onBlur,
		onMouseDown(e) {
			if (scrollRef.current === $23f2114a1b82827e$export$e58f029f0fbfdb29(e)) e.preventDefault();
		}
	};
	let { typeSelectProps } = $f5a4a9a3486154da$export$e32c88dfddc6e1d8({
		keyboardDelegate: delegate,
		selectionManager: manager
	});
	if (!disallowTypeAhead) handlers = $bbaa08b3cd72f041$export$9d1611c77c2fe928(typeSelectProps, handlers);
	let tabIndex = void 0;
	if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
	let collectionId = $22bbea12c2567021$export$881eb0d9f3605d9d(manager.collection);
	return { collectionProps: $bbaa08b3cd72f041$export$9d1611c77c2fe928(handlers, {
		tabIndex,
		"data-collection": collectionId
	}) };
}
var import_react_dom, import_react$2;
var init_useSelectableCollection = __esmMin((() => {
	init_constants();
	init_virtualFocus();
	init_focusSafely();
	init_focusWithoutScrolling();
	init_DOMFunctions();
	init_FocusScope();
	init_useFocusVisible();
	init_utils();
	init_keyboard();
	init_platform();
	init_isFocusable();
	init_mergeProps();
	init_scrollIntoView();
	init_useEvent();
	init_useKeyboard();
	init_I18nProvider();
	init_openLink();
	init_useTypeSelect();
	init_useUpdateLayoutEffect();
	import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
	import_react$2 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/selection/useSelectableItem.mjs
function $f6ba6936bfd098a0$export$ecf600387e221c37(options) {
	let { id, selectionManager: manager, key, ref, shouldSelectOnPressUp, shouldUseVirtualFocus, focus, isDisabled, onAction, allowsDifferentPressOrigin, linkBehavior = "action" } = options;
	let router = $caaf0dd3060ed57c$export$9a302a45f65d0572();
	id = $390e54f620492c70$export$f680877a34711e37(id);
	let onSelect = (e) => {
		if (e.pointerType === "keyboard" && $22bbea12c2567021$export$d3e3bd3e26688c04(e)) manager.toggleSelection(key);
		else {
			if (manager.selectionMode === "none") return;
			if (manager.isLink(key)) {
				if (linkBehavior === "selection" && ref.current) {
					let itemProps = manager.getItemProps(key);
					router.open(ref.current, e, itemProps.href, itemProps.routerOptions);
					manager.setSelectedKeys(manager.selectedKeys);
					return;
				} else if (linkBehavior === "override" || linkBehavior === "none") return;
			}
			if (manager.selectionMode === "single") if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
			else manager.replaceSelection(key);
			else if (e && e.shiftKey) manager.extendSelection(key);
			else if (manager.selectionBehavior === "toggle" || e && ($bb39c0fc1c19b34c$export$16792effe837dba3(e) || e.pointerType === "touch" || e.pointerType === "virtual")) manager.toggleSelection(key);
			else manager.replaceSelection(key);
		}
	};
	(0, import_react$1.useEffect)(() => {
		if (key === manager.focusedKey && manager.isFocused) if (!shouldUseVirtualFocus) {
			if (focus) focus();
			else if ($23f2114a1b82827e$export$cd4e5573fbe2b576() !== ref.current && ref.current) $f192c2f16961cbe0$export$80f3e147d781571c(ref.current);
		} else $b72f3f7b3b5f42c6$export$76e4e37e5339496d(ref.current);
	}, [
		ref,
		key,
		manager.focusedKey,
		manager.childFocusStrategy,
		manager.isFocused,
		shouldUseVirtualFocus
	]);
	isDisabled = isDisabled || manager.isDisabled(key);
	let itemProps = {};
	if (!shouldUseVirtualFocus && !isDisabled) itemProps = {
		tabIndex: key === manager.focusedKey ? 0 : -1,
		onFocus(e) {
			if ($23f2114a1b82827e$export$e58f029f0fbfdb29(e) === ref.current) manager.setFocusedKey(key);
		}
	};
	else if (isDisabled) itemProps.onMouseDown = (e) => {
		e.preventDefault();
	};
	(0, import_react$1.useEffect)(() => {
		if (isDisabled && manager.focusedKey === key) manager.setFocusedKey(null);
	}, [
		manager,
		isDisabled,
		key
	]);
	let isLinkOverride = manager.isLink(key) && linkBehavior === "override";
	let isActionOverride = onAction && options["UNSTABLE_itemBehavior"] === "action";
	let hasLinkAction = manager.isLink(key) && linkBehavior !== "selection" && linkBehavior !== "none";
	let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride && !isActionOverride;
	let allowsActions = (onAction || hasLinkAction) && !isDisabled;
	let hasPrimaryAction = allowsActions && (manager.selectionBehavior === "replace" ? !allowsSelection : !allowsSelection || manager.isEmpty);
	let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === "replace";
	let hasAction = hasPrimaryAction || hasSecondaryAction;
	let modality = (0, import_react$1.useRef)(null);
	let longPressEnabled = hasAction && allowsSelection;
	let longPressEnabledOnPressStart = (0, import_react$1.useRef)(false);
	let hadPrimaryActionOnPressStart = (0, import_react$1.useRef)(false);
	let collectionItemProps = manager.getItemProps(key);
	let performAction = (e) => {
		if (onAction) {
			onAction();
			ref.current?.dispatchEvent(new CustomEvent("react-aria-item-action", { bubbles: true }));
		}
		if (hasLinkAction && ref.current) router.open(ref.current, e, collectionItemProps.href, collectionItemProps.routerOptions);
	};
	let itemPressProps = { ref };
	if (shouldSelectOnPressUp) {
		itemPressProps.onPressStart = (e) => {
			modality.current = e.pointerType;
			longPressEnabledOnPressStart.current = longPressEnabled;
			if (e.pointerType === "keyboard" && (!hasAction || $f6ba6936bfd098a0$var$isSelectionKey(e.key))) onSelect(e);
		};
		if (!allowsDifferentPressOrigin) itemPressProps.onPress = (e) => {
			if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== "mouse") {
				if (e.pointerType === "keyboard" && !$f6ba6936bfd098a0$var$isActionKey(e.key)) return;
				performAction(e);
			} else if (e.pointerType !== "keyboard" && allowsSelection) onSelect(e);
		};
		else {
			itemPressProps.onPressUp = hasPrimaryAction ? void 0 : (e) => {
				if (e.pointerType === "mouse" && allowsSelection) onSelect(e);
			};
			itemPressProps.onPress = hasPrimaryAction ? performAction : (e) => {
				if (e.pointerType !== "keyboard" && e.pointerType !== "mouse" && allowsSelection) onSelect(e);
			};
		}
	} else {
		itemPressProps.onPressStart = (e) => {
			modality.current = e.pointerType;
			longPressEnabledOnPressStart.current = longPressEnabled;
			hadPrimaryActionOnPressStart.current = hasPrimaryAction;
			if (allowsSelection && (e.pointerType === "mouse" && !hasPrimaryAction || e.pointerType === "keyboard" && (!allowsActions || $f6ba6936bfd098a0$var$isSelectionKey(e.key)))) onSelect(e);
		};
		itemPressProps.onPress = (e) => {
			if (e.pointerType === "touch" || e.pointerType === "pen" || e.pointerType === "virtual" || e.pointerType === "keyboard" && hasAction && $f6ba6936bfd098a0$var$isActionKey(e.key) || e.pointerType === "mouse" && hadPrimaryActionOnPressStart.current) {
				if (hasAction) performAction(e);
				else if (allowsSelection) onSelect(e);
			}
		};
	}
	let collectionId = $22bbea12c2567021$export$6aeb1680a0ae8741(manager.collection);
	itemProps["data-collection"] = collectionId;
	itemProps["data-key"] = key;
	itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
	if (shouldUseVirtualFocus) itemPressProps = $bbaa08b3cd72f041$export$9d1611c77c2fe928(itemPressProps, {
		onPressStart(e) {
			if (e.pointerType !== "touch") {
				manager.setFocused(true);
				manager.setFocusedKey(key);
			}
		},
		onPress(e) {
			if (e.pointerType === "touch") {
				manager.setFocused(true);
				manager.setFocusedKey(key);
			}
		}
	});
	if (collectionItemProps) {
		for (let key of [
			"onPressStart",
			"onPressEnd",
			"onPressChange",
			"onPress",
			"onPressUp",
			"onClick"
		]) if (collectionItemProps[key]) itemPressProps[key] = $a4e76a5424781910$export$e08e3b67e392101e(itemPressProps[key], collectionItemProps[key]);
	}
	let { pressProps, isPressed } = $d27d541f9569d26d$export$45712eceda6fad21(itemPressProps);
	let onDoubleClick = hasSecondaryAction ? (e) => {
		if (modality.current === "mouse") {
			e.stopPropagation();
			e.preventDefault();
			performAction(e);
		}
	} : void 0;
	let { longPressProps } = $7b01448eaad0fe7c$export$c24ed0104d07eab9({
		isDisabled: !longPressEnabled,
		onLongPress(e) {
			if (e.pointerType === "touch") {
				onSelect(e);
				manager.setSelectionBehavior("toggle");
			}
		}
	});
	let onDragStartCapture = (e) => {
		if (modality.current === "touch" && longPressEnabledOnPressStart.current) e.preventDefault();
	};
	let onClick = linkBehavior !== "none" && manager.isLink(key) ? (e) => {
		if (!$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening) e.preventDefault();
	} : void 0;
	let mergedItemProps = $bbaa08b3cd72f041$export$9d1611c77c2fe928(itemProps, allowsSelection || hasPrimaryAction || shouldUseVirtualFocus && !isDisabled ? pressProps : {}, longPressEnabled ? longPressProps : {}, {
		onDoubleClick,
		onDragStartCapture,
		onClick,
		id
	}, shouldUseVirtualFocus ? { onMouseDown: (e) => e.preventDefault() } : void 0);
	let isChildInteraction = (target) => {
		let el = target;
		while (el && el !== ref.current) {
			let elCollection = el.getAttribute("data-collection");
			if (elCollection != null) return elCollection !== collectionId;
			el = el.parentElement;
		}
		return $3b8b240c1bf84ab9$export$bebd5a1431fec25d(target);
	};
	let baseOnPointerDown = mergedItemProps.onPointerDown;
	mergedItemProps.onPointerDown = (e) => {
		let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		if (target && target !== ref.current && isChildInteraction(target)) {
			e.stopPropagation();
			return;
		}
		baseOnPointerDown?.(e);
	};
	let baseOnMouseDown = mergedItemProps.onMouseDown;
	mergedItemProps.onMouseDown = (e) => {
		let target = $23f2114a1b82827e$export$e58f029f0fbfdb29(e);
		if (target && target !== ref.current && isChildInteraction(target)) {
			e.stopPropagation();
			return;
		}
		baseOnMouseDown?.(e);
	};
	return {
		itemProps: mergedItemProps,
		isPressed,
		isSelected: manager.isSelected(key),
		isFocused: manager.isFocused && manager.focusedKey === key,
		isDisabled,
		allowsSelection,
		hasAction
	};
}
function $f6ba6936bfd098a0$var$isActionKey(key) {
	return key === "Enter";
}
function $f6ba6936bfd098a0$var$isSelectionKey(key) {
	return key === " ";
}
var import_react$1;
var init_useSelectableItem = __esmMin((() => {
	init_chain();
	init_focusSafely();
	init_DOMFunctions();
	init_utils();
	init_keyboard();
	init_isFocusable();
	init_mergeProps();
	init_virtualFocus();
	init_openLink();
	init_usePress();
	init_useId();
	init_useLongPress();
	import_react$1 = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
//#region ../../node_modules/react-aria/dist/private/focus/useHasTabbableChild.mjs
function $bf14c9739fda2eb3$export$eac1895992b9f3d6(ref, options) {
	let isDisabled = options?.isDisabled;
	let [hasTabbableChild, setHasTabbableChild] = (0, import_react.useState)(false);
	$c4867b2f328c2698$export$e5c5a5f917a5871c(() => {
		if (ref?.current && !isDisabled) {
			let update = () => {
				if (ref.current) {
					let walker = $535772f9d2c1f38d$export$2d6ec8fc375ceafa(ref.current, { tabbable: true });
					setHasTabbableChild(!!walker.nextNode());
				}
			};
			update();
			let observer = new MutationObserver(update);
			observer.observe(ref.current, {
				subtree: true,
				childList: true,
				attributes: true,
				attributeFilter: ["tabIndex", "disabled"]
			});
			return () => {
				observer.disconnect();
			};
		}
	});
	return isDisabled ? false : hasTabbableChild;
}
var import_react;
var init_useHasTabbableChild = __esmMin((() => {
	init_FocusScope();
	init_useLayoutEffect();
	import_react = /* @__PURE__ */ __toESM(require_react(), 1);
}));
//#endregion
export { init_useOverlayPosition as $, $5698867baeb53f4e$export$dbc0f175b25fb0fb as A, $0d47b37c475c5231$export$3351871ee4b288b8 as B, $d7f64c32b702fe2c$export$86427a43e3e48ebb as C, init_usePopover as D, $f8a024fbad3a5a2e$export$542a6fd13ac93354 as E, init_useInteractOutside as F, init_useFocusWithin as G, $081058010ef8962e$export$2317d149ed6f78c4 as H, $58196c8d6a1f38fc$export$1c3ebcada18427bf as I, $c07df45195231803$export$b47c3594eab58386 as J, $e969f22b6713ca4a$export$ae780daf29e6d456 as K, init_ariaHideOutside as L, $77844860df94ba23$export$ea8f71083e90600f as M, init_useOverlay as N, $f282e36c29c025e8$export$f9d5c8beee7d008d as O, $e260d131964da0f9$export$872b660ac5a1ff98 as P, $b3526bc71400be8d$export$d39e1813b3bdd0e1 as Q, $d7a937236970dc7f$export$c6fdb837b070b4ff as R, init_Pressable as S, init_Hidden as T, init_DismissButton as U, init_PressResponder as V, $2c9edc598a03d523$export$420e68273165f4ec as W, $72abaeab4d80592f$export$78efe591171d7d45 as X, init_useModal as Y, init_PortalProvider as Z, init_useFocusRing as _, $d667c2af82d35a98$export$d6daf82dcd84e87c as a, init_useFocusable as at, init_LiveAnnouncer as b, $42ceafc619f9c3ba$export$bf788dd355e3a401 as c, $535772f9d2c1f38d$export$c5251b9e124bf29 as ct, $a80bd3e9349588e7$export$727c8fc270210f13 as d, init_focusSafely as dt, $2eb8e6d23f3d0cb0$export$43bb16f9c6d9e3f7 as et, init_useCachedChildren as f, $8f5a2122b0992be3$export$630ff653c5ada6a9 as ft, $0c4a58759813079a$export$4e328f61c538687f as g, init_SSRProvider as gt, init_BaseCollection as h, $c7eafbbe1ea5834e$export$619500959fc48b26 as ht, init_useSelectableItem as i, $d1116acdf220c2da$export$4c014de7c8940b4c as it, init_useModalOverlay as j, init_useOverlayTrigger as k, $42ceafc619f9c3ba$export$fb8073518f34e6ec as l, init_FocusScope as lt, $6f0c29017aeec335$export$d68d59712b04d9d1 as m, init_useFocusVisible as mt, init_useHasTabbableChild as n, $d1116acdf220c2da$export$13f3202a3e5ddd5 as nt, init_useSelectableCollection as o, $535772f9d2c1f38d$export$10c5169755ce7bd7 as ot, $6f0c29017aeec335$export$8258a0665a675899 as p, $8f5a2122b0992be3$export$b9b3dfddab17db27 as pt, init_useHover as q, $f6ba6936bfd098a0$export$ecf600387e221c37 as r, $d1116acdf220c2da$export$35a3bebf7ef2d934 as rt, $42ceafc619f9c3ba$export$18af5c7a9e9b3664 as s, $535772f9d2c1f38d$export$20e40289641fbbb6 as st, $bf14c9739fda2eb3$export$eac1895992b9f3d6 as t, init_I18nProvider as tt, init_CollectionBuilder as u, $f192c2f16961cbe0$export$80f3e147d781571c as ut, $a46cf152bb926da5$export$a9b970dcc4ae71a9 as v, $d7f64c32b702fe2c$export$b5d7cc18bb8d2b59 as w, $15e7830bf6471d45$export$27c701ed9e449e99 as x, $a46cf152bb926da5$export$d10ae4f68404609a as y, init_Overlay as z };
