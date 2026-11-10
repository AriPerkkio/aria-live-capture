import { n as __esmMin, r as __exportAll } from "./globals-runtime-XrdeG17s.js";
import { B as init_status_store, F as NON_AGGREGATED_STATUS_TYPE_IDS, I as REVIEW_STATUS_TYPE_ID, M as REVIEW_NAMESPACE, N as init_events, P as CHANGE_DETECTION_STATUS_TYPE_ID, j as REVIEW_EVENTS } from "./globals-runtime-D04kIJv5.js";
//#region src/types/modules/csf.ts
var init_csf = __esmMin((() => {}));
//#endregion
//#region src/types/modules/addons.ts
var Addon_TypesEnum;
var init_addons = __esmMin((() => {
	Addon_TypesEnum = /* @__PURE__ */ function(Addon_TypesEnum) {
		/** This adds panels to the addons side panel. */
		Addon_TypesEnum["PANEL"] = "panel";
		/** This adds items in the toolbar above the canvas - on the left side. */
		Addon_TypesEnum["TOOL"] = "tool";
		/** This adds items in the toolbar above the canvas - on the right side. */
		Addon_TypesEnum["TOOLEXTRA"] = "toolextra";
		/**
		* This adds wrapper components around the canvas/iframe component storybook renders.
		*
		* @unstable this API is not stable yet, and is likely to change in 8.0.
		*/
		Addon_TypesEnum["PREVIEW"] = "preview";
		/**
		* This adds pages that render instead of the canvas.
		*
		* @unstable
		*/
		Addon_TypesEnum["experimental_PAGE"] = "page";
		/** This adds items to the Testing Module in the sidebar. */
		Addon_TypesEnum["experimental_TEST_PROVIDER"] = "test-provider";
		return Addon_TypesEnum;
	}({});
}));
//#endregion
//#region src/types/modules/story.ts
var init_story = __esmMin((() => {}));
//#endregion
//#region src/types/modules/core-common.ts
var init_core_common = __esmMin((() => {}));
//#endregion
//#region src/types/modules/builder.ts
var init_builder = __esmMin((() => {}));
//#endregion
//#region src/types/modules/api.ts
var init_api = __esmMin((() => {}));
//#endregion
//#region src/types/modules/docs.ts
var init_docs = __esmMin((() => {}));
//#endregion
//#region src/types/modules/api-stories.ts
var init_api_stories = __esmMin((() => {}));
//#endregion
//#region src/types/modules/indexer.ts
var init_indexer = __esmMin((() => {}));
//#endregion
//#region src/types/modules/composedStory.ts
var init_composedStory = __esmMin((() => {}));
//#endregion
//#region src/types/modules/channelApi.ts
var init_channelApi = __esmMin((() => {}));
//#endregion
//#region src/types/modules/frameworks.ts
var SupportedFramework;
var init_frameworks = __esmMin((() => {
	SupportedFramework = /* @__PURE__ */ function(SupportedFramework) {
		SupportedFramework["ANGULAR"] = "angular";
		SupportedFramework["ANGULAR_VITE"] = "angular-vite";
		SupportedFramework["EMBER"] = "ember";
		SupportedFramework["HTML_VITE"] = "html-vite";
		SupportedFramework["NEXTJS"] = "nextjs";
		SupportedFramework["NEXTJS_VITE"] = "nextjs-vite";
		SupportedFramework["PREACT_VITE"] = "preact-vite";
		SupportedFramework["REACT_NATIVE_WEB_VITE"] = "react-native-web-vite";
		SupportedFramework["REACT_VITE"] = "react-vite";
		SupportedFramework["REACT_WEBPACK5"] = "react-webpack5";
		SupportedFramework["SERVER_WEBPACK5"] = "server-webpack5";
		SupportedFramework["SVELTE_VITE"] = "svelte-vite";
		SupportedFramework["SVELTEKIT"] = "sveltekit";
		SupportedFramework["TANSTACK_REACT"] = "tanstack-react";
		SupportedFramework["VUE3_VITE"] = "vue3-vite";
		SupportedFramework["WEB_COMPONENTS_VITE"] = "web-components-vite";
		SupportedFramework["ASTRO"] = "astro";
		SupportedFramework["HTML_RSBUILD"] = "html-rsbuild";
		SupportedFramework["NUXT"] = "nuxt";
		SupportedFramework["QWIK"] = "qwik";
		SupportedFramework["REACT_RSBUILD"] = "react-rsbuild";
		SupportedFramework["SOLID"] = "solid";
		SupportedFramework["VUE3_RSBUILD"] = "vue3-rsbuild";
		SupportedFramework["WEB_COMPONENTS_RSBUILD"] = "web-components-rsbuild";
		return SupportedFramework;
	}({});
}));
//#endregion
//#region src/types/modules/renderers.ts
var SupportedRenderer;
var init_renderers = __esmMin((() => {
	SupportedRenderer = /* @__PURE__ */ function(SupportedRenderer) {
		SupportedRenderer["REACT"] = "react";
		SupportedRenderer["REACT_NATIVE"] = "react-native";
		SupportedRenderer["VUE3"] = "vue3";
		SupportedRenderer["ANGULAR"] = "angular";
		SupportedRenderer["EMBER"] = "ember";
		SupportedRenderer["PREACT"] = "preact";
		SupportedRenderer["SVELTE"] = "svelte";
		SupportedRenderer["QWIK"] = "qwik";
		SupportedRenderer["HTML"] = "html";
		SupportedRenderer["WEB_COMPONENTS"] = "web-components";
		SupportedRenderer["SERVER"] = "server";
		SupportedRenderer["SOLID"] = "solid";
		SupportedRenderer["NUXT"] = "nuxt";
		SupportedRenderer["ASTRO"] = "astro";
		return SupportedRenderer;
	}({});
}));
//#endregion
//#region src/types/modules/status.ts
var init_status = __esmMin((() => {
	init_status_store();
}));
//#endregion
//#region src/types/modules/review.ts
var init_review = __esmMin((() => {
	init_events();
}));
//#endregion
//#region src/types/modules/test-provider.ts
var init_test_provider = __esmMin((() => {}));
//#endregion
//#region src/types/modules/universal-store.ts
var init_universal_store = __esmMin((() => {}));
//#endregion
//#region src/types/modules/webpack.ts
var CoreWebpackCompiler;
var init_webpack = __esmMin((() => {
	CoreWebpackCompiler = /* @__PURE__ */ function(CoreWebpackCompiler) {
		CoreWebpackCompiler["Babel"] = "babel";
		CoreWebpackCompiler["SWC"] = "swc";
		return CoreWebpackCompiler;
	}({});
}));
//#endregion
//#region src/types/modules/builders.ts
var SupportedBuilder;
var init_builders = __esmMin((() => {
	SupportedBuilder = /* @__PURE__ */ function(SupportedBuilder) {
		SupportedBuilder["WEBPACK5"] = "webpack5";
		SupportedBuilder["VITE"] = "vite";
		SupportedBuilder["RSBUILD"] = "rsbuild";
		return SupportedBuilder;
	}({});
}));
//#endregion
//#region src/types/modules/features.ts
var Feature;
var init_features = __esmMin((() => {
	Feature = /* @__PURE__ */ function(Feature) {
		Feature["DOCS"] = "docs";
		Feature["TEST"] = "test";
		Feature["ONBOARDING"] = "onboarding";
		Feature["A11Y"] = "a11y";
		Feature["AI"] = "ai";
		return Feature;
	}({});
}));
//#endregion
//#region src/types/modules/languages.ts
var SupportedLanguage;
var init_languages = __esmMin((() => {
	SupportedLanguage = /* @__PURE__ */ function(SupportedLanguage) {
		SupportedLanguage["JAVASCRIPT"] = "javascript";
		SupportedLanguage["TYPESCRIPT"] = "typescript";
		return SupportedLanguage;
	}({});
}));
//#endregion
//#region src/types/index.ts
var types_exports = /* @__PURE__ */ __exportAll({
	Addon_TypesEnum: () => Addon_TypesEnum,
	CHANGE_DETECTION_STATUS_TYPE_ID: () => CHANGE_DETECTION_STATUS_TYPE_ID,
	CoreWebpackCompiler: () => CoreWebpackCompiler,
	Feature: () => Feature,
	NON_AGGREGATED_STATUS_TYPE_IDS: () => NON_AGGREGATED_STATUS_TYPE_IDS,
	REVIEW_EVENTS: () => REVIEW_EVENTS,
	REVIEW_NAMESPACE: () => REVIEW_NAMESPACE,
	REVIEW_STATUS_TYPE_ID: () => REVIEW_STATUS_TYPE_ID,
	SupportedBuilder: () => SupportedBuilder,
	SupportedFramework: () => SupportedFramework,
	SupportedLanguage: () => SupportedLanguage,
	SupportedRenderer: () => SupportedRenderer
});
var init_types = __esmMin((() => {
	init_csf();
	init_addons();
	init_story();
	init_core_common();
	init_builder();
	init_api();
	init_docs();
	init_api_stories();
	init_indexer();
	init_composedStory();
	init_channelApi();
	init_frameworks();
	init_renderers();
	init_status();
	init_review();
	init_test_provider();
	init_universal_store();
	init_webpack();
	init_builders();
	init_features();
	init_languages();
}));
//#endregion
export { init_addons as i, types_exports as n, Addon_TypesEnum as r, init_types as t };
