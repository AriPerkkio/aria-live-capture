import { n as __esmMin } from "./runtime-XrdeG17s.js";
import { Br as init__storybook_global_react, Gr as useEffect, Jr as useMemo, Ur as useCallback, Ut as init_manager_api, Xr as useRef, an as useStorybookApi, nn as useGlobals, rn as useParameter } from "./runtime-CCGFWiML.js";
//#region src/viewport/constants.ts
var ADDON_ID, PARAM_KEY, RESPONSIVE_VIEWPORT_VALUE;
var init_constants = __esmMin((() => {
	ADDON_ID = "storybook/viewport";
	PARAM_KEY = "viewport";
	`${ADDON_ID}`;
	`${ADDON_ID}`;
	RESPONSIVE_VIEWPORT_VALUE = "100pct-100pct";
}));
//#endregion
//#region src/viewport/defaults.ts
var MINIMAL_VIEWPORTS;
var init_defaults = __esmMin((() => {
	MINIMAL_VIEWPORTS = {
		mobile1: {
			name: "Small mobile",
			styles: {
				height: "568px",
				width: "320px"
			},
			type: "mobile"
		},
		mobile2: {
			name: "Large mobile",
			styles: {
				height: "896px",
				width: "414px"
			},
			type: "mobile"
		},
		tablet: {
			name: "Tablet",
			styles: {
				height: "1112px",
				width: "834px"
			},
			type: "tablet"
		},
		desktop: {
			name: "Desktop",
			styles: {
				height: "1024px",
				width: "1280px"
			},
			type: "desktop"
		}
	};
})), URL_VALUE_PATTERN, normalizeGlobal$1, resolveViewport;
var init_resolveViewport = __esmMin((() => {
	init_constants();
	URL_VALUE_PATTERN = /^([0-9]{1,4})([a-z]{0,4})-([0-9]{1,4})([a-z]{0,4})$/;
	normalizeGlobal$1 = (value, defaultIsRotated) => typeof value === "string" ? {
		value,
		isRotated: defaultIsRotated
	} : {
		value: value?.value,
		isRotated: value?.isRotated ?? defaultIsRotated
	};
	resolveViewport = ({ globals, storyGlobals, userGlobals, options, lastSelectedOption, disable = false, viewMode }) => {
		if (viewMode !== "story") return {
			name: "Responsive",
			type: "desktop",
			width: "100%",
			height: "100%",
			value: RESPONSIVE_VIEWPORT_VALUE,
			option: void 0,
			isCustom: false,
			isDefault: true,
			isLocked: true,
			isRotated: false
		};
		const global = normalizeGlobal$1(globals?.[PARAM_KEY]);
		const userGlobal = normalizeGlobal$1(userGlobals?.[PARAM_KEY]);
		const storyGlobal = normalizeGlobal$1(storyGlobals?.[PARAM_KEY]);
		const storyHasViewport = PARAM_KEY in storyGlobals;
		const primaryGlobal = storyHasViewport ? storyGlobal : userGlobal;
		const secondaryGlobal = storyHasViewport ? userGlobal : storyGlobal;
		const value = primaryGlobal?.value ?? secondaryGlobal?.value ?? global?.value;
		const isRotated = primaryGlobal?.isRotated ?? secondaryGlobal?.isRotated ?? global?.isRotated ?? false;
		const keys = Object.keys(options);
		const isLocked = disable || "viewport" in storyGlobals || !keys.length;
		const [match, vx, ux, vy, uy] = value?.match(URL_VALUE_PATTERN) || [];
		if (match) {
			const x = ux && ux !== "px" ? vx : Math.max(Number(vx), 40);
			const y = uy && uy !== "px" ? vy : Math.max(Number(vy), 40);
			const width = `${x}${ux === "pct" ? "%" : ux || "px"}`;
			const height = `${y}${uy === "pct" ? "%" : uy || "px"}`;
			const selection = lastSelectedOption ? options[lastSelectedOption] : void 0;
			return {
				name: selection?.name ?? "Custom",
				type: selection?.type ?? "other",
				width: isRotated ? height : width,
				height: isRotated ? width : height,
				value: match,
				option: void 0,
				isCustom: true,
				isDefault: false,
				isLocked,
				isRotated
			};
		}
		if (value && keys.length) {
			const { name, styles, type = "other" } = options[value] ?? options[keys[0]];
			return {
				name,
				type,
				width: isRotated ? styles.height : styles.width,
				height: isRotated ? styles.width : styles.height,
				value,
				option: value,
				isCustom: false,
				isDefault: false,
				isLocked,
				isRotated
			};
		}
		return {
			name: "Responsive",
			type: "desktop",
			width: "100%",
			height: "100%",
			value: RESPONSIVE_VIEWPORT_VALUE,
			option: void 0,
			isCustom: false,
			isDefault: true,
			isLocked,
			isRotated: false
		};
	};
}));
//#endregion
//#region src/viewport/useViewport.ts
var cycle, normalizeGlobal, useViewport;
var init_useViewport = __esmMin((() => {
	init__storybook_global_react();
	init_manager_api();
	init_constants();
	init_defaults();
	init_resolveViewport();
	cycle = (viewports, current, direction = 1) => {
		const keys = Object.keys(viewports);
		const nextIndex = (current ? keys.indexOf(current) : -1) + direction;
		return nextIndex < 0 ? keys[keys.length - 1] : nextIndex >= keys.length ? keys[0] : keys[nextIndex];
	};
	normalizeGlobal = (value, defaultIsRotated) => typeof value === "string" ? {
		value,
		isRotated: defaultIsRotated
	} : {
		value: value?.value,
		isRotated: value?.isRotated ?? defaultIsRotated
	};
	useViewport = () => {
		const api = useStorybookApi();
		const { viewMode } = api.getUrlState();
		const lastSelectedOption = useRef();
		const parameter = useParameter(PARAM_KEY);
		const [globals, updateGlobals, storyGlobals, userGlobals] = useGlobals();
		const { options = MINIMAL_VIEWPORTS, disable = false } = parameter || {};
		const { name, type, width, height, value, option, isCustom, isDefault, isLocked, isRotated } = resolveViewport({
			globals,
			storyGlobals,
			userGlobals,
			options,
			lastSelectedOption: lastSelectedOption.current,
			disable,
			viewMode
		});
		const update = useCallback((input) => updateGlobals({ [PARAM_KEY]: normalizeGlobal(input, false) }), [updateGlobals]);
		const resize = useCallback((width, height) => {
			const w = width.replace(/px$/, "").replace(/%$/, "pct");
			const h = height.replace(/px$/, "").replace(/%$/, "pct");
			const value = isRotated ? `${h}-${w}` : `${w}-${h}`;
			update({
				value,
				isRotated
			});
		}, [update, isRotated]);
		useEffect(() => {
			if (!parameter) return;
			if (option) if (Object.hasOwn(options, option)) lastSelectedOption.current = option;
			else {
				lastSelectedOption.current = void 0;
				if (!("viewport" in storyGlobals)) update({
					value: void 0,
					isRotated: false
				});
			}
		}, [
			parameter,
			storyGlobals,
			options,
			option,
			update
		]);
		useEffect(() => {
			api.setAddonShortcut(ADDON_ID, {
				label: "Next viewport",
				defaultShortcut: ["alt", "V"],
				actionName: "next",
				action: () => update({
					value: cycle(options, lastSelectedOption.current),
					isRotated
				})
			});
			api.setAddonShortcut(ADDON_ID, {
				label: "Previous viewport",
				defaultShortcut: [
					"alt",
					"shift",
					"V"
				],
				actionName: "previous",
				action: () => update({
					value: cycle(options, lastSelectedOption.current, -1),
					isRotated
				})
			});
			api.setAddonShortcut(ADDON_ID, {
				label: "Reset viewport",
				defaultShortcut: [
					"alt",
					"control",
					"V"
				],
				actionName: "reset",
				action: () => update({
					value: void 0,
					isRotated: false
				})
			});
		}, [
			api,
			update,
			options,
			isRotated
		]);
		return useMemo(() => ({
			name,
			type,
			width,
			height,
			value,
			option,
			isCustom,
			isDefault,
			isLocked,
			isRotated,
			options,
			lastSelectedOption: lastSelectedOption.current,
			resize,
			reset: () => update({
				value: void 0,
				isRotated: false
			}),
			rotate: () => update({
				value,
				isRotated: !isRotated
			}),
			select: (value) => update({
				value,
				isRotated
			})
		}), [
			name,
			type,
			width,
			height,
			value,
			option,
			isCustom,
			isDefault,
			isRotated,
			isLocked,
			options,
			resize,
			update
		]);
	};
}));
//#endregion
export { init_constants as a, RESPONSIVE_VIEWPORT_VALUE as i, useViewport as n, init_resolveViewport as r, init_useViewport as t };
