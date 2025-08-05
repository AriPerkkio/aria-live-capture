var a=Object.defineProperty;var i=(n,t)=>a(n,"name",{value:t,configurable:!0});import{j as e,b as r,c as s}from"./index-CzOvav2o.js";import{useMDXComponents as d}from"./index-CH2FnpyR.js";import"./iframe-COIQpftB.js";import"./_commonjsHelpers-apMbue5Q.js";import"./index-CzSXKZeB.js";import"./index-B7qynYb3.js";const l=`# aria-live-capture

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
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Aria Live Capture"}),`
`,e.jsx(s,{children:l})]})}i(o,"_createMdxContent");function A(n={}){const{wrapper:t}={...d(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}i(A,"MDXContent");export{A as default};
