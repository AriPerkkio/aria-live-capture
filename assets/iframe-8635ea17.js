var y=Object.defineProperty;var _=(r,i)=>y(r,"name",{value:i,configurable:!0});import"../sb-preview/runtime.js";_(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}_(c,"getFetchOpts");function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}_(a,"processPreload")},"polyfill")();const R="modulepreload",m=_(function(r){return"/aria-live-capture/"+r},"assetsURL"),u={},o=_(function(i,c,a){if(!c||c.length===0)return i();const e=document.getElementsByTagName("link");return Promise.all(c.map(t=>{if(t=m(t),t in u)return;u[t]=!0;const s=t.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(!!a)for(let E=e.length-1;E>=0;E--){const O=e[E];if(O.href===t&&(!s||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${d}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":R,s||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),s)return new Promise((E,O)=>{n.addEventListener("load",E),n.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i()).catch(t=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=t,window.dispatchEvent(s),!s.defaultPrevented)throw t})},"preload"),{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,l=p({page:"preview"});A.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const P={"./.storybook/README.stories.mdx":async()=>o(()=>import("./README.stories-dfc19017.js"),["assets/README.stories-dfc19017.js","assets/chunk-S4VUQJ4A-f5c37add.js","assets/index-052b959b.js","assets/index-ef669bac.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-6065da62.js"]),"./.storybook/stories/AriaLivePolite.stories.ts":async()=>o(()=>import("./AriaLivePolite.stories-660076e1.js"),["assets/AriaLivePolite.stories-660076e1.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveOff.stories.ts":async()=>o(()=>import("./AriaLiveOff.stories-bdad9237.js"),["assets/AriaLiveOff.stories-bdad9237.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveAssertive.stories.ts":async()=>o(()=>import("./AriaLiveAssertive.stories-4d5941b1.js"),["assets/AriaLiveAssertive.stories-4d5941b1.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleTimer.stories.ts":async()=>o(()=>import("./RoleTimer.stories-2ee7d386.js"),["assets/RoleTimer.stories-2ee7d386.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleStatus.stories.ts":async()=>o(()=>import("./RoleStatus.stories-1a7383e4.js"),["assets/RoleStatus.stories-1a7383e4.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleMarquee.stories.ts":async()=>o(()=>import("./RoleMarquee.stories-ac05e2c8.js"),["assets/RoleMarquee.stories-ac05e2c8.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleLog.stories.ts":async()=>o(()=>import("./RoleLog.stories-24e769e3.js"),["assets/RoleLog.stories-24e769e3.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleAlert.stories.ts":async()=>o(()=>import("./RoleAlert.stories-42579078.js"),["assets/RoleAlert.stories-42579078.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/Output.stories.ts":async()=>o(()=>import("./Output.stories-9e9f14fd.js"),["assets/Output.stories-9e9f14fd.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/ElementApi.stories.ts":async()=>o(()=>import("./ElementApi.stories-f3e995e2.js"),["assets/ElementApi.stories-f3e995e2.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/ShadowRoot.stories.ts":async()=>o(()=>import("./ShadowRoot.stories-3cc944bd.js"),["assets/ShadowRoot.stories-3cc944bd.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleTimer.stories.ts":async()=>o(()=>import("./RoleTimer.stories-2ee7d386.js"),["assets/RoleTimer.stories-2ee7d386.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleStatus.stories.ts":async()=>o(()=>import("./RoleStatus.stories-1a7383e4.js"),["assets/RoleStatus.stories-1a7383e4.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleMarquee.stories.ts":async()=>o(()=>import("./RoleMarquee.stories-ac05e2c8.js"),["assets/RoleMarquee.stories-ac05e2c8.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleLog.stories.ts":async()=>o(()=>import("./RoleLog.stories-24e769e3.js"),["assets/RoleLog.stories-24e769e3.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleAlert.stories.ts":async()=>o(()=>import("./RoleAlert.stories-42579078.js"),["assets/RoleAlert.stories-42579078.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/Output.stories.ts":async()=>o(()=>import("./Output.stories-9e9f14fd.js"),["assets/Output.stories-9e9f14fd.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/NodeApi.stories.ts":async()=>o(()=>import("./NodeApi.stories-0f059263.js"),["assets/NodeApi.stories-0f059263.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/ElementApi.stories.ts":async()=>o(()=>import("./ElementApi.stories-f3e995e2.js"),["assets/ElementApi.stories-f3e995e2.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaRelevant.stories.ts":async()=>o(()=>import("./AriaRelevant.stories-cddb73cd.js"),["assets/AriaRelevant.stories-cddb73cd.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLivePolite.stories.ts":async()=>o(()=>import("./AriaLivePolite.stories-660076e1.js"),["assets/AriaLivePolite.stories-660076e1.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveOff.stories.ts":async()=>o(()=>import("./AriaLiveOff.stories-bdad9237.js"),["assets/AriaLiveOff.stories-bdad9237.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveAssertive.stories.ts":async()=>o(()=>import("./AriaLiveAssertive.stories-4d5941b1.js"),["assets/AriaLiveAssertive.stories-4d5941b1.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaBusy.stories.ts":async()=>o(()=>import("./AriaBusy.stories-69c0d153.js"),["assets/AriaBusy.stories-69c0d153.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaAtomic.stories.ts":async()=>o(()=>import("./AriaAtomic.stories-36bdd596.js"),["assets/AriaAtomic.stories-36bdd596.js","assets/utils-f8fc7d82.js"])};async function L(r){return P[r]()}_(L,"importFn");const{composeConfigs:T,PreviewWeb:v,ClientApi:f}=__STORYBOOK_MODULE_PREVIEW_API__,I=_(async()=>{const r=await Promise.all([o(()=>import("./config-df11e274.js"),["assets/config-df11e274.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/index-ef669bac.js"]),o(()=>import("./preview-408e6010.js"),[]),o(()=>import("./preview-3533a315.js"),["assets/preview-3533a315.js","assets/index-052b959b.js","assets/index-4207b8b5.js"]),o(()=>import("./preview-e4c179ad.js"),["assets/preview-e4c179ad.js","assets/index-1914e1ea.js","assets/index-052b959b.js","assets/index-b3c9b8ba.js","assets/uniq-817fe036.js","assets/index-a063825c.js","assets/index-4207b8b5.js","assets/utils-f8fc7d82.js"])]);return T(r)},"getProjectAnnotations");window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new f({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:L,getProjectAnnotations:I});export{o as _};
//# sourceMappingURL=iframe-8635ea17.js.map
