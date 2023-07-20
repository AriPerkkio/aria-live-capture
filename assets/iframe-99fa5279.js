var y=Object.defineProperty;var _=(r,i)=>y(r,"name",{value:i,configurable:!0});import"../sb-preview/runtime.js";_(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}_(c,"getFetchOpts");function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}_(a,"processPreload")},"polyfill")();const R="modulepreload",m=_(function(r){return"/aria-live-capture/"+r},"assetsURL"),u={},o=_(function(i,c,a){if(!c||c.length===0)return i();const e=document.getElementsByTagName("link");return Promise.all(c.map(t=>{if(t=m(t),t in u)return;u[t]=!0;const s=t.endsWith(".css"),d=s?'[rel="stylesheet"]':"";if(!!a)for(let E=e.length-1;E>=0;E--){const O=e[E];if(O.href===t&&(!s||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${d}`))return;const n=document.createElement("link");if(n.rel=s?"stylesheet":R,s||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),s)return new Promise((E,O)=>{n.addEventListener("load",E),n.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i()).catch(t=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=t,window.dispatchEvent(s),!s.defaultPrevented)throw t})},"preload"),{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:A}=__STORYBOOK_MODULE_PREVIEW_API__,l=p({page:"preview"});A.setChannel(l);window.__STORYBOOK_ADDONS_CHANNEL__=l;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=l);const P={"./.storybook/README.stories.mdx":async()=>o(()=>import("./README.stories-c400763b.js"),["assets/README.stories-c400763b.js","assets/chunk-S4VUQJ4A-2ba9b22e.js","assets/index-722d4584.js","assets/_commonjs-dynamic-modules-fefbfc1c.js","assets/index-f5288c5e.js","assets/index-ce7257af.js","assets/assert-d7476c31.js","assets/uniq-6402743e.js","assets/index-46bbedb5.js"]),"./.storybook/stories/AriaLivePolite.stories.ts":async()=>o(()=>import("./AriaLivePolite.stories-74425004.js"),["assets/AriaLivePolite.stories-74425004.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveOff.stories.ts":async()=>o(()=>import("./AriaLiveOff.stories-f863563b.js"),["assets/AriaLiveOff.stories-f863563b.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveAssertive.stories.ts":async()=>o(()=>import("./AriaLiveAssertive.stories-cac9d559.js"),["assets/AriaLiveAssertive.stories-cac9d559.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleTimer.stories.ts":async()=>o(()=>import("./RoleTimer.stories-ccebeddd.js"),["assets/RoleTimer.stories-ccebeddd.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleStatus.stories.ts":async()=>o(()=>import("./RoleStatus.stories-66cad9e5.js"),["assets/RoleStatus.stories-66cad9e5.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleMarquee.stories.ts":async()=>o(()=>import("./RoleMarquee.stories-be3b6a01.js"),["assets/RoleMarquee.stories-be3b6a01.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleLog.stories.ts":async()=>o(()=>import("./RoleLog.stories-8a270227.js"),["assets/RoleLog.stories-8a270227.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleAlert.stories.ts":async()=>o(()=>import("./RoleAlert.stories-38d460b2.js"),["assets/RoleAlert.stories-38d460b2.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/Output.stories.ts":async()=>o(()=>import("./Output.stories-8997f3fa.js"),["assets/Output.stories-8997f3fa.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/ElementApi.stories.ts":async()=>o(()=>import("./ElementApi.stories-6faa4e7d.js"),["assets/ElementApi.stories-6faa4e7d.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/ShadowRoot.stories.ts":async()=>o(()=>import("./ShadowRoot.stories-553706f8.js"),["assets/ShadowRoot.stories-553706f8.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleTimer.stories.ts":async()=>o(()=>import("./RoleTimer.stories-ccebeddd.js"),["assets/RoleTimer.stories-ccebeddd.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleStatus.stories.ts":async()=>o(()=>import("./RoleStatus.stories-66cad9e5.js"),["assets/RoleStatus.stories-66cad9e5.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleMarquee.stories.ts":async()=>o(()=>import("./RoleMarquee.stories-be3b6a01.js"),["assets/RoleMarquee.stories-be3b6a01.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleLog.stories.ts":async()=>o(()=>import("./RoleLog.stories-8a270227.js"),["assets/RoleLog.stories-8a270227.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/RoleAlert.stories.ts":async()=>o(()=>import("./RoleAlert.stories-38d460b2.js"),["assets/RoleAlert.stories-38d460b2.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/Output.stories.ts":async()=>o(()=>import("./Output.stories-8997f3fa.js"),["assets/Output.stories-8997f3fa.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/NodeApi.stories.ts":async()=>o(()=>import("./NodeApi.stories-a7d2341d.js"),["assets/NodeApi.stories-a7d2341d.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/ElementApi.stories.ts":async()=>o(()=>import("./ElementApi.stories-6faa4e7d.js"),["assets/ElementApi.stories-6faa4e7d.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaRelevant.stories.ts":async()=>o(()=>import("./AriaRelevant.stories-cddb73cd.js"),["assets/AriaRelevant.stories-cddb73cd.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLivePolite.stories.ts":async()=>o(()=>import("./AriaLivePolite.stories-74425004.js"),["assets/AriaLivePolite.stories-74425004.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveOff.stories.ts":async()=>o(()=>import("./AriaLiveOff.stories-f863563b.js"),["assets/AriaLiveOff.stories-f863563b.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaLiveAssertive.stories.ts":async()=>o(()=>import("./AriaLiveAssertive.stories-cac9d559.js"),["assets/AriaLiveAssertive.stories-cac9d559.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaBusy.stories.ts":async()=>o(()=>import("./AriaBusy.stories-69c0d153.js"),["assets/AriaBusy.stories-69c0d153.js","assets/utils-f8fc7d82.js"]),"./.storybook/stories/AriaAtomic.stories.ts":async()=>o(()=>import("./AriaAtomic.stories-36bdd596.js"),["assets/AriaAtomic.stories-36bdd596.js","assets/utils-f8fc7d82.js"])};async function L(r){return P[r]()}_(L,"importFn");const{composeConfigs:T,PreviewWeb:v,ClientApi:f}=__STORYBOOK_MODULE_PREVIEW_API__,I=_(async()=>{const r=await Promise.all([o(()=>import("./config-e0bfeef4.js"),["assets/config-e0bfeef4.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/index-f5288c5e.js","assets/assert-d7476c31.js"]),o(()=>import("./preview-248d40a8.js"),[]),o(()=>import("./preview-d71cb188.js"),["assets/preview-d71cb188.js","assets/index-722d4584.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/assert-d7476c31.js","assets/_commonjs-dynamic-modules-fefbfc1c.js"]),o(()=>import("./preview-ab0e2803.js"),["assets/preview-ab0e2803.js","assets/index-d7a91f28.js","assets/index-722d4584.js","assets/index-ce7257af.js","assets/uniq-6402743e.js","assets/browser-8264ef50.js","assets/index-b4278562.js","assets/utils-f8fc7d82.js"])]);return T(r)},"getProjectAnnotations");window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new v;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new f({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:L,getProjectAnnotations:I});export{o as _};
//# sourceMappingURL=iframe-99fa5279.js.map
