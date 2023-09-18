var g=Object.defineProperty;var o=(e,n)=>g(e,"name",{value:n,configurable:!0});import{r as m,M as h,e as f}from"./chunk-S4VUQJ4A-525d22c5.js";import{u as R}from"./index-3b3a1118.js";import"./iframe-fd1bcba9.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-d19a9761.js";import"./index-7eefe366.js";import"./uniq-ec7727c7.js";const A=`# aria-live-capture

<a href="https://www.npmjs.com/package/aria-live-capture">
    <img alt="version" src="https://img.shields.io/npm/v/aria-live-capture" />
</a>

[Installation](#installation) | [Usage](#usage) | [Announcement detection examples](#announcement-detection-examples) | [Support](#support)

> Capture announcements of [ARIA live regions](https://www.w3.org/TR/wai-aria-1.2/#dfn-live-region).

\`aria-live-capture\` is an utility tool for inspecting announcements of ARIA live regions.
When developing an application which utilizes ARIA live announcements it is often frustrating to toggle screen readers and other assistive technologies constantly on/off during development.
This tool aims to help developers easily see announcements without having to use actual screen readers.
However final assertion should always be made with the actual target assistive technology.

For online demo see [Storybook playground](https://ariperkkio.github.io/aria-live-capture).

For validating ARIA live regions in tests see [\`extend-to-be-announced\`](https://github.com/AriPerkkio/extend-to-be-announced).

For Storybook integration see [\`storybook-addon-aria-live\`](https://github.com/AriPerkkio/storybook-addon-aria-live).

Read more about inspiration from [Building testing tools for ARIA live regions](https://loihdefactor.com/en/2022/04/29/building-testing-tools-for-aria-live-regions).

## Installation

\`aria-live-capture\` should be included in development dependencies.

\`\`\`bash
npm install --save-dev aria-live-capture
\`\`\`

## Usage

Import \`CaptureAnnouncements\` from entrypoint.

\`\`\`ts
import CaptureAnnouncements from 'aria-live-capture';
\`\`\`

### onCapture

Pass \`onCapture\` callback to handle announcements.

| Callback argument |   type   | value                            |
| :---------------: | :------: | -------------------------------- |
|   announcement    | \`string\` | Text content of the announcement |
| politenessSetting | \`string\` | \`polite\\|assertive\`              |

<!-- prettier-ignore -->
\`\`\`ts
CaptureAnnouncements({
    onCapture: (announcement, politenessSetting) => {
        console.log(\`"\${announcement}" was announced with politeness setting "\${politenessSetting}"\`);
    },
});
\`\`\`

\`\`\`
"Loading" was announced with politeness setting "polite"
"Failed to load user details" was announced with politeness setting "assertive"
\`\`\`

### includeShadowDom

Pass an optional boolean \`includeShadowDom\` option to include tracking of live regions in Shadow DOM.
Default value is \`false\`.

\`\`\`ts
CaptureAnnouncements({
    includeShadowDom: true,
});
\`\`\`

### cleanup

The \`CaptureAnnouncements\` method returns \`cleanup\` function for clearing DOM interceptors.

\`\`\`ts
const cleanup = CaptureAnnouncements(options);

cleanup();
\`\`\`

## Announcement detection examples

[Test online](https://ariperkkio.github.io/aria-live-capture)&nbsp;&nbsp;<a href="https://ariperkkio.github.io/aria-live-capture" target="_blank"><img src="https://raw.githubusercontent.com/storybooks/brand/master/badge/badge-storybook.svg" /></a>

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div role="status"></div>
Render#2 | <div role="status">Loading</div>
PASS ✅  | "Loading" is announced
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div aria-live="polite"></div>
Render#2 | <div aria-live="polite">Loading</div>
PASS ✅  | "Loading" is announced
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div role="log"></div>
Render#2 | <div role="log">Loading</div>
PASS ✅  | "Loading" is announced
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <output></output>
Render#2 | <output>Loading</output>
PASS ✅  | "Loading" is announced
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div role="status">Loading</div>
FAIL ❌  | "Loading" is not announced
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div></div>
Render#2 | <div role="status">Loading</div>
FAIL ❌  | "Loading" is not announced
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div></div>
Render#2 | <div aria-live="polite">Loading</div>
FAIL ❌  | "Loading" is not announced
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div role="alert">Error</div>
PASS ✅  | "Error" is announced
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div aria-live="assertive">Error</div>
FAIL ❌  | "Error" is not announced
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div></div>
Render#2 | <div role="alert">Error</div>
PASS ✅  | "Error" is announced
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div role="status">
         |     <div aria-hidden="true">Loading</div>
         | </div>
         |
Render#2 | <div role="status">
         |     <div aria-hidden="false">Loading</div>
         | </div>
         |
PASS ✅  | "Loading" is announced
\`\`\`

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div role="status" aria-hidden="true">Loading</div>
Render#2 | <div role="status" aria-hidden="false">Loading</div>
FAIL ❌  | "Loading" is not announced
\`\`\`

With option \`{ includeShadowDom: true }\`:

<!-- prettier-ignore -->
\`\`\`html
Render#1 | <div role="status">
         |     #shadow-root
         |     <div></div>
         | </div>
         |
Render#2 | <div role="status">
         |     #shadow-root
         |     <div>Loading</div>
         | </div>
         |
PASS ✅  | "Loading" is announced
\`\`\`

## Support

|     Feature     | Status |
| :-------------: | :----: |
|     \`role\`      |   ✅   |
|   \`aria-live\`   |   ✅   |
|  \`aria-atomic\`  | ❌ 👷  |
|   \`aria-busy\`   |   ❌   |
| \`aria-relevant\` |   ❌   |
`;var c={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=m,S=Symbol.for("react.element"),b=Symbol.for("react.fragment"),L=Object.prototype.hasOwnProperty,y=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function v(e,n,l){var t,r={},d=null,u=null;l!==void 0&&(d=""+l),n.key!==void 0&&(d=""+n.key),n.ref!==void 0&&(u=n.ref);for(t in n)L.call(n,t)&&!_.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)r[t]===void 0&&(r[t]=n[t]);return{$$typeof:S,type:e,key:d,ref:u,props:r,_owner:y.current}}o(v,"q");s.Fragment=b;s.jsx=v;s.jsxs=v;c.exports=s;var i=c.exports;function p(e){return i.jsxs(i.Fragment,{children:[i.jsx(h,{title:"Aria Live Capture"}),`
`,i.jsx(f,{children:A})]})}o(p,"_createMdxContent");function k(e={}){const{wrapper:n}=Object.assign({},R(),e.components);return n?i.jsx(n,{...e,children:i.jsx(p,{...e})}):p()}o(k,"MDXContent");const x=o(()=>{throw new Error("Docs-only story")},"__page");x.parameters={docsOnly:!0};const a={title:"Aria Live Capture",tags:["stories-mdx"],includeStories:["__page"]};a.parameters=a.parameters||{};a.parameters.docs={...a.parameters.docs||{},page:k};const T=["__page"];export{T as __namedExportsOrder,x as __page,a as default};
//# sourceMappingURL=README.stories-474fca4f.js.map
