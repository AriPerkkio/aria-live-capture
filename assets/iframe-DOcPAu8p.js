function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/README-C2FAlInv.js","assets/index-DKCz43Q0.js","assets/_getTag-B2JUw1-s.js","assets/index-Cua5AGJk.js","assets/uniq-Ca-eE_Qr.js","assets/index-B7qynYb3.js","assets/index-BYpz-ApV.js","assets/AriaAtomic.stories-fkb0kVw3.js","assets/utils-LNpl-ahl.js","assets/AriaBusy.stories-C5mzn-sh.js","assets/AriaLiveAssertive.stories-DGnkpWRb.js","assets/index-BWu6l_32.js","assets/index-CHkBgh-E.js","assets/AriaLiveOff.stories-CSnSfzNR.js","assets/AriaLivePolite.stories-BD8Y2MsH.js","assets/AriaRelevant.stories-CBHTdvc0.js","assets/ElementApi.stories-DO4hXTpZ.js","assets/NodeApi.stories-DgHCuA6u.js","assets/Output.stories-DfPasHFS.js","assets/RoleAlert.stories-xtujQunf.js","assets/RoleLog.stories-C3BrS3Ja.js","assets/RoleMarquee.stories-Dj4Yvo5L.js","assets/RoleStatus.stories-BfW7W2rn.js","assets/RoleTimer.stories-Kh1geeLS.js","assets/ShadowRoot.stories-CpBAzcIy.js","assets/entry-preview-B5nCmBaF.js","assets/entry-preview-docs-DaVIWAGV.js","assets/preview-Q4dF3Znt.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
var p=Object.defineProperty;var n=(s,c)=>p(s,"name",{value:c,configurable:!0});import"../sb-preview/runtime.js";n(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}n(a,"getFetchOpts");function l(o){if(o.ep)return;o.ep=!0;const e=a(o);fetch(o.href,e)}n(l,"processPreload")},"polyfill")();const A="modulepreload",v=n(function(s){return"/aria-live-capture/"+s},"assetsURL"),m={},t=n(function(c,a,l){let o=Promise.resolve();if(a&&a.length>0){const e=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),y=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.all(a.map(i=>{if(i=v(i),i in m)return;m[i]=!0;const E=i.endsWith(".css"),R=E?'[rel="stylesheet"]':"";if(!!l)for(let u=e.length-1;u>=0;u--){const O=e[u];if(O.href===i&&(!E||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${R}`))return;const _=document.createElement("link");if(_.rel=E?"stylesheet":A,E||(_.as="script",_.crossOrigin=""),_.href=i,y&&_.setAttribute("nonce",y),document.head.appendChild(_),E)return new Promise((u,O)=>{_.addEventListener("load",u),_.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>c()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},"preload"),{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,d=L({page:"preview"});P.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const f={"./.storybook/README.mdx":async()=>t(()=>import("./README-C2FAlInv.js"),__vite__mapDeps([0,1,2,3,4,5,6])),"./.storybook/stories/AriaAtomic.stories.ts":async()=>t(()=>import("./AriaAtomic.stories-fkb0kVw3.js"),__vite__mapDeps([7,8])),"./.storybook/stories/AriaBusy.stories.ts":async()=>t(()=>import("./AriaBusy.stories-C5mzn-sh.js"),__vite__mapDeps([9,8])),"./.storybook/stories/AriaLiveAssertive.stories.ts":async()=>t(()=>import("./AriaLiveAssertive.stories-DGnkpWRb.js"),__vite__mapDeps([10,11,2,5,4,12,8])),"./.storybook/stories/AriaLiveAssertive.stories.ts":async()=>t(()=>import("./AriaLiveAssertive.stories-DGnkpWRb.js"),__vite__mapDeps([10,11,2,5,4,12,8])),"./.storybook/stories/AriaLiveOff.stories.ts":async()=>t(()=>import("./AriaLiveOff.stories-CSnSfzNR.js"),__vite__mapDeps([13,11,2,5,4,12,8])),"./.storybook/stories/AriaLiveOff.stories.ts":async()=>t(()=>import("./AriaLiveOff.stories-CSnSfzNR.js"),__vite__mapDeps([13,11,2,5,4,12,8])),"./.storybook/stories/AriaLivePolite.stories.ts":async()=>t(()=>import("./AriaLivePolite.stories-BD8Y2MsH.js"),__vite__mapDeps([14,11,2,5,4,12,8])),"./.storybook/stories/AriaLivePolite.stories.ts":async()=>t(()=>import("./AriaLivePolite.stories-BD8Y2MsH.js"),__vite__mapDeps([14,11,2,5,4,12,8])),"./.storybook/stories/AriaRelevant.stories.ts":async()=>t(()=>import("./AriaRelevant.stories-CBHTdvc0.js"),__vite__mapDeps([15,8])),"./.storybook/stories/ElementApi.stories.ts":async()=>t(()=>import("./ElementApi.stories-DO4hXTpZ.js"),__vite__mapDeps([16,11,2,5,4,12,8])),"./.storybook/stories/ElementApi.stories.ts":async()=>t(()=>import("./ElementApi.stories-DO4hXTpZ.js"),__vite__mapDeps([16,11,2,5,4,12,8])),"./.storybook/stories/NodeApi.stories.ts":async()=>t(()=>import("./NodeApi.stories-DgHCuA6u.js"),__vite__mapDeps([17,11,2,5,4,12,8])),"./.storybook/stories/Output.stories.ts":async()=>t(()=>import("./Output.stories-DfPasHFS.js"),__vite__mapDeps([18,11,2,5,4,12,8])),"./.storybook/stories/Output.stories.ts":async()=>t(()=>import("./Output.stories-DfPasHFS.js"),__vite__mapDeps([18,11,2,5,4,12,8])),"./.storybook/stories/RoleAlert.stories.ts":async()=>t(()=>import("./RoleAlert.stories-xtujQunf.js"),__vite__mapDeps([19,11,2,5,4,12,8])),"./.storybook/stories/RoleAlert.stories.ts":async()=>t(()=>import("./RoleAlert.stories-xtujQunf.js"),__vite__mapDeps([19,11,2,5,4,12,8])),"./.storybook/stories/RoleLog.stories.ts":async()=>t(()=>import("./RoleLog.stories-C3BrS3Ja.js"),__vite__mapDeps([20,11,2,5,4,12,8])),"./.storybook/stories/RoleLog.stories.ts":async()=>t(()=>import("./RoleLog.stories-C3BrS3Ja.js"),__vite__mapDeps([20,11,2,5,4,12,8])),"./.storybook/stories/RoleMarquee.stories.ts":async()=>t(()=>import("./RoleMarquee.stories-Dj4Yvo5L.js"),__vite__mapDeps([21,11,2,5,4,12,8])),"./.storybook/stories/RoleMarquee.stories.ts":async()=>t(()=>import("./RoleMarquee.stories-Dj4Yvo5L.js"),__vite__mapDeps([21,11,2,5,4,12,8])),"./.storybook/stories/RoleStatus.stories.ts":async()=>t(()=>import("./RoleStatus.stories-BfW7W2rn.js"),__vite__mapDeps([22,11,2,5,4,12,8])),"./.storybook/stories/RoleStatus.stories.ts":async()=>t(()=>import("./RoleStatus.stories-BfW7W2rn.js"),__vite__mapDeps([22,11,2,5,4,12,8])),"./.storybook/stories/RoleTimer.stories.ts":async()=>t(()=>import("./RoleTimer.stories-Kh1geeLS.js"),__vite__mapDeps([23,11,2,5,4,12,8])),"./.storybook/stories/RoleTimer.stories.ts":async()=>t(()=>import("./RoleTimer.stories-Kh1geeLS.js"),__vite__mapDeps([23,11,2,5,4,12,8])),"./.storybook/stories/ShadowRoot.stories.ts":async()=>t(()=>import("./ShadowRoot.stories-CpBAzcIy.js"),__vite__mapDeps([24,11,2,5,4,12,8]))};async function T(s){return f[s]()}n(T,"importFn");const{composeConfigs:I,PreviewWeb:D,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,V=n(async()=>{const s=await Promise.all([t(()=>import("./entry-preview-B5nCmBaF.js"),__vite__mapDeps([25,5])),t(()=>import("./entry-preview-docs-DaVIWAGV.js"),__vite__mapDeps([26,3,2])),t(()=>import("./preview-BL2GVeFr.js"),[]),t(()=>import("./preview-9jSzveMU.js"),[]),t(()=>import("./preview-Q4dF3Znt.js"),__vite__mapDeps([27,11,2,5,4,12,8]))]);return I(s)},"getProjectAnnotations");window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new D(T,V);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
