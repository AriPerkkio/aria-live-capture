import { n as __esmMin } from "./globals-runtime-XrdeG17s.js";
//#region src/csf/csf-utils.ts
var sanitize, sanitizeSafe, toId;
var init_csf_utils = __esmMin((() => {
	sanitize = (string) => {
		return string.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
	};
	sanitizeSafe = (string, part) => {
		const sanitized = sanitize(string);
		if (sanitized === "") throw new Error(`Invalid ${part} '${string}', must include alphanumeric characters`);
		return sanitized;
	};
	toId = (kind, name) => `${sanitizeSafe(kind, "kind")}${name ? `--${sanitizeSafe(name, "name")}` : ""}`;
}));
//#endregion
//#region src/csf/SBType.ts
var init_SBType = __esmMin((() => {}));
//#endregion
//#region src/csf/story.ts
var init_story = __esmMin((() => {
	init_SBType();
}));
//#endregion
//#region src/csf/core-annotations.ts
var init_core_annotations = __esmMin((() => {}));
//#endregion
//#region src/csf/csf-factories.ts
var init_csf_factories = __esmMin((() => {}));
//#endregion
//#region src/csf/index.ts
var init_csf = __esmMin((() => {
	init_csf_utils();
	init_story();
	init_csf_factories();
	init_core_annotations();
}));
//#endregion
export { toId as i, init_csf_utils as n, sanitize as r, init_csf as t };
