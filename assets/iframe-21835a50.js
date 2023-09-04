var y=Object.defineProperty;var _=(r,i)=>y(r,"name",{value:i,configurable:!0});import"../sb-preview/runtime.js";_(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}_(c,"getFetchOpts");function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}_(a,"processPreload")},"polyfill")();const R="modulepreload",m=_(function(r){return"/aria-live-capture/"+r},"assetsURL"),u={},o=_(function(i,c,a){if(!c||c.length===0)return i();const e=document.getElementsByTagName("link");return Promise.all(c.map(t=>{if(t=m(t),t in u)return;u[t]=!0;const s=t.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(!!a)for(let E=e.length-1;E>=0;E--){const O=e[E];if(O.href===t&&(!s||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${d}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":R,s||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),s)return new Promise((E,O)=>{n.addEventListener("load",E),n.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i()).catch(t=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=t,window.dispatchEvent(s),!s.defaultPrevented)throw t})},"preload"),{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,l=p({page:"preview"});A.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const P={"./.storybook/README.stories.mdx":async()=>o(()=>import("./README.stories-4c4c3d3a.js"),["assets/README.stories-4c4c3d3a.js","assets/chunk-S4VUQJ4A-96d74db6.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-d19a9761.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-9507f613.js"]),"./.storybook/stories/AriaLivePolite.stories.ts":async()=>o(()=>import("./AriaLivePolite.stories-0a2c5c39.js"),["assets/AriaLivePolite.stories-0a2c5c39.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveOff.stories.ts":async()=>o(()=>import("./AriaLiveOff.stories-68440054.js"),["assets/AriaLiveOff.stories-68440054.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveAssertive.stories.ts":async()=>o(()=>import("./AriaLiveAssertive.stories-aee2b041.js"),["assets/AriaLiveAssertive.stories-aee2b041.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleTimer.stories.ts":async()=>o(()=>import("./RoleTimer.stories-b8e768c9.js"),["assets/RoleTimer.stories-b8e768c9.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleStatus.stories.ts":async()=>o(()=>import("./RoleStatus.stories-baa2b91e.js"),["assets/RoleStatus.stories-baa2b91e.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleMarquee.stories.ts":async()=>o(()=>import("./RoleMarquee.stories-fa0dd312.js"),["assets/RoleMarquee.stories-fa0dd312.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleLog.stories.ts":async()=>o(()=>import("./RoleLog.stories-b4b612bc.js"),["assets/RoleLog.stories-b4b612bc.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleAlert.stories.ts":async()=>o(()=>import("./RoleAlert.stories-b184be09.js"),["assets/RoleAlert.stories-b184be09.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/Output.stories.ts":async()=>o(()=>import("./Output.stories-6dee68aa.js"),["assets/Output.stories-6dee68aa.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/ElementApi.stories.ts":async()=>o(()=>import("./ElementApi.stories-a1b93632.js"),["assets/ElementApi.stories-a1b93632.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/ShadowRoot.stories.ts":async()=>o(()=>import("./ShadowRoot.stories-3c8977d1.js"),["assets/ShadowRoot.stories-3c8977d1.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleTimer.stories.ts":async()=>o(()=>import("./RoleTimer.stories-b8e768c9.js"),["assets/RoleTimer.stories-b8e768c9.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleStatus.stories.ts":async()=>o(()=>import("./RoleStatus.stories-baa2b91e.js"),["assets/RoleStatus.stories-baa2b91e.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleMarquee.stories.ts":async()=>o(()=>import("./RoleMarquee.stories-fa0dd312.js"),["assets/RoleMarquee.stories-fa0dd312.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleLog.stories.ts":async()=>o(()=>import("./RoleLog.stories-b4b612bc.js"),["assets/RoleLog.stories-b4b612bc.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleAlert.stories.ts":async()=>o(()=>import("./RoleAlert.stories-b184be09.js"),["assets/RoleAlert.stories-b184be09.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/Output.stories.ts":async()=>o(()=>import("./Output.stories-6dee68aa.js"),["assets/Output.stories-6dee68aa.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/NodeApi.stories.ts":async()=>o(()=>import("./NodeApi.stories-9c6d1b70.js"),["assets/NodeApi.stories-9c6d1b70.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/ElementApi.stories.ts":async()=>o(()=>import("./ElementApi.stories-a1b93632.js"),["assets/ElementApi.stories-a1b93632.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaRelevant.stories.ts":async()=>o(()=>import("./AriaRelevant.stories-cddb73cd.js"),["assets/AriaRelevant.stories-cddb73cd.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLivePolite.stories.ts":async()=>o(()=>import("./AriaLivePolite.stories-0a2c5c39.js"),["assets/AriaLivePolite.stories-0a2c5c39.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveOff.stories.ts":async()=>o(()=>import("./AriaLiveOff.stories-68440054.js"),["assets/AriaLiveOff.stories-68440054.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveAssertive.stories.ts":async()=>o(()=>import("./AriaLiveAssertive.stories-aee2b041.js"),["assets/AriaLiveAssertive.stories-aee2b041.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaBusy.stories.ts":async()=>o(()=>import("./AriaBusy.stories-69c0d153.js"),["assets/AriaBusy.stories-69c0d153.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaAtomic.stories.ts":async()=>o(()=>import("./AriaAtomic.stories-36bdd596.js"),["assets/AriaAtomic.stories-36bdd596.js","assets/utils-f8fc7d82.js"])};async function L(r){return P[r]()}_(L,"importFn");const{composeConfigs:T,PreviewWeb:v,ClientApi:f}=__STORYBOOK_MODULE_PREVIEW_API__,I=_(async()=>{const r=await Promise.all([o(()=>import("./config-e9e8abe2.js"),["assets/config-e9e8abe2.js","assets/index-7eefe366.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-d19a9761.js"]),o(()=>import("./preview-c381ee61.js"),[]),o(()=>import("./preview-0813f14d.js"),["assets/preview-0813f14d.js","assets/index-4af01cdc.js","assets/_commonjsHelpers-f86d8be3.js"]),o(()=>import("./preview-fa1913c9.js"),["assets/preview-fa1913c9.js","assets/index-930fb5d9.js","assets/_commonjsHelpers-f86d8be3.js","assets/index-7eefe366.js","assets/uniq-ec7727c7.js","assets/index-8b3405fb.js","assets/index-4af01cdc.js","assets/utils-f8fc7d82.js"])]);return T(r)},"getProjectAnnotations");window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new f({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:L,getProjectAnnotations:I});export{o as _};
//# sourceMappingURL=iframe-21835a50.js.map
