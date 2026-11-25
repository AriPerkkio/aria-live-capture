import { n as __esmMin } from "./runtime-XrdeG17s.js";
import { c as dedent, l as init_esm } from "./runtime-CL-qtHt_.js";
//#region src/docs-tools/shared.ts
var ADDON_ID;
var init_shared = __esmMin((() => {
	ADDON_ID = "storybook/docs";
	`${ADDON_ID}`;
	`${ADDON_ID}`;
}));
//#endregion
//#region src/csf/csf-utils.ts
var sanitize, TITLE_PATH_SEPARATOR, titleToPath;
var init_csf_utils = __esmMin((() => {
	init_esm();
	sanitize = (string) => {
		return string.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "-").replace(/-+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
	};
	TITLE_PATH_SEPARATOR = /\s*\/\s*/;
	titleToPath = (title) => title.trim().split(TITLE_PATH_SEPARATOR).reduce((paths, name) => {
		const parent = paths.at(-1)?.id;
		const id = sanitize(parent ? `${parent}-${name}` : name);
		if (name.trim() === "") throw new Error(dedent`Invalid title ${title} ending in slash.`);
		if (parent === id) throw new Error(dedent`
          Invalid part '${name}', leading to id === parentId ('${id}'), inside title '${title}'

          Did you create a path that uses the separator char accidentally, such as 'Vue <docs/>' where '/' is a separator char? See https://github.com/storybookjs/storybook/issues/6128
          `);
		paths.push({
			name,
			id
		});
		return paths;
	}, []);
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
export { init_shared as a, ADDON_ID as i, init_csf_utils as n, titleToPath as r, init_csf as t };
