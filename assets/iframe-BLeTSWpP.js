const __vite__fileDeps=["assets/README-C70hLatN.js","assets/index-DjxJJo5U.js","assets/_getTag-Acb5evve.js","assets/index-CHNDjauk.js","assets/uniq-DsvjDUDl.js","assets/index-B7qynYb3.js","assets/index-BFqcoKCE.js","assets/AriaAtomic.stories-DayNl9IY.js","assets/utils-DoweNrC_.js","assets/AriaBusy.stories-CUT2zy5x.js","assets/AriaLiveAssertive.stories-OnWZ3uEX.js","assets/index-_-Zk3nG-.js","assets/index-BwmlLsNp.js","assets/AriaLiveOff.stories-A49LVWyE.js","assets/AriaLivePolite.stories-C7jKdXUm.js","assets/AriaRelevant.stories-rOh3IlzN.js","assets/ElementApi.stories-CgN_HPjW.js","assets/NodeApi.stories-coV6Lu-A.js","assets/Output.stories-Jpm_4RLi.js","assets/RoleAlert.stories-CSZkC12l.js","assets/RoleLog.stories-DRLxBou4.js","assets/RoleMarquee.stories-Ckj-S1a4.js","assets/RoleStatus.stories-PdAMdYaZ.js","assets/RoleTimer.stories-BvdiUYia.js","assets/ShadowRoot.stories-DKitDA6V.js","assets/entry-preview-B5nCmBaF.js","assets/entry-preview-docs-DaoEaaXJ.js","assets/preview-DijjcmUm.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var p=Object.defineProperty;var t=(i,_)=>p(i,"name",{value:_,configurable:!0});import"../sb-preview/runtime.js";t(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}t(a,"getFetchOpts");function l(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}t(l,"processPreload")},"polyfill")();const A="modulepreload",L=t(function(i){return"/aria-live-capture/"+i},"assetsURL"),R={},o=t(function(_,a,l){let e=Promise.resolve();if(a&&a.length>0){const s=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),y=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.all(a.map(n=>{if(n=L(n),n in R)return;R[n]=!0;const E=n.endsWith(".css"),m=E?'[rel="stylesheet"]':"";if(!!l)for(let u=s.length-1;u>=0;u--){const O=s[u];if(O.href===n&&(!E||O.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${m}`))return;const c=document.createElement("link");if(c.rel=E?"stylesheet":A,E||(c.as="script",c.crossOrigin=""),c.href=n,y&&c.setAttribute("nonce",y),document.head.appendChild(c),E)return new Promise((u,O)=>{c.addEventListener("load",u),c.addEventListener("error",()=>O(new Error(`Unable to preload CSS for ${n}`)))})}))}return e.then(()=>_()).catch(s=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s})},"preload"),{createBrowserChannel:v}=__STORYBOOK_MODULE_CHANNELS__,{addons:f}=__STORYBOOK_MODULE_PREVIEW_API__,d=v({page:"preview"});f.setChannel(d);window.__STORYBOOK_ADDONS_CHANNEL__=d;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=d);const P={"./.storybook/README.mdx":t(async()=>o(()=>import("./README-C70hLatN.js"),__vite__mapDeps([0,1,2,3,4,5,6])),"./.storybook/README.mdx"),"./.storybook/stories/AriaAtomic.stories.ts":t(async()=>o(()=>import("./AriaAtomic.stories-DayNl9IY.js"),__vite__mapDeps([7,8])),"./.storybook/stories/AriaAtomic.stories.ts"),"./.storybook/stories/AriaBusy.stories.ts":t(async()=>o(()=>import("./AriaBusy.stories-CUT2zy5x.js"),__vite__mapDeps([9,8])),"./.storybook/stories/AriaBusy.stories.ts"),"./.storybook/stories/AriaLiveAssertive.stories.ts":t(async()=>o(()=>import("./AriaLiveAssertive.stories-OnWZ3uEX.js"),__vite__mapDeps([10,11,2,5,4,12,8])),"./.storybook/stories/AriaLiveAssertive.stories.ts"),"./.storybook/stories/AriaLiveAssertive.stories.ts":t(async()=>o(()=>import("./AriaLiveAssertive.stories-OnWZ3uEX.js"),__vite__mapDeps([10,11,2,5,4,12,8])),"./.storybook/stories/AriaLiveAssertive.stories.ts"),"./.storybook/stories/AriaLiveOff.stories.ts":t(async()=>o(()=>import("./AriaLiveOff.stories-A49LVWyE.js"),__vite__mapDeps([13,11,2,5,4,12,8])),"./.storybook/stories/AriaLiveOff.stories.ts"),"./.storybook/stories/AriaLiveOff.stories.ts":t(async()=>o(()=>import("./AriaLiveOff.stories-A49LVWyE.js"),__vite__mapDeps([13,11,2,5,4,12,8])),"./.storybook/stories/AriaLiveOff.stories.ts"),"./.storybook/stories/AriaLivePolite.stories.ts":t(async()=>o(()=>import("./AriaLivePolite.stories-C7jKdXUm.js"),__vite__mapDeps([14,11,2,5,4,12,8])),"./.storybook/stories/AriaLivePolite.stories.ts"),"./.storybook/stories/AriaLivePolite.stories.ts":t(async()=>o(()=>import("./AriaLivePolite.stories-C7jKdXUm.js"),__vite__mapDeps([14,11,2,5,4,12,8])),"./.storybook/stories/AriaLivePolite.stories.ts"),"./.storybook/stories/AriaRelevant.stories.ts":t(async()=>o(()=>import("./AriaRelevant.stories-rOh3IlzN.js"),__vite__mapDeps([15,8])),"./.storybook/stories/AriaRelevant.stories.ts"),"./.storybook/stories/ElementApi.stories.ts":t(async()=>o(()=>import("./ElementApi.stories-CgN_HPjW.js"),__vite__mapDeps([16,11,2,5,4,12,8])),"./.storybook/stories/ElementApi.stories.ts"),"./.storybook/stories/ElementApi.stories.ts":t(async()=>o(()=>import("./ElementApi.stories-CgN_HPjW.js"),__vite__mapDeps([16,11,2,5,4,12,8])),"./.storybook/stories/ElementApi.stories.ts"),"./.storybook/stories/NodeApi.stories.ts":t(async()=>o(()=>import("./NodeApi.stories-coV6Lu-A.js"),__vite__mapDeps([17,11,2,5,4,12,8])),"./.storybook/stories/NodeApi.stories.ts"),"./.storybook/stories/Output.stories.ts":t(async()=>o(()=>import("./Output.stories-Jpm_4RLi.js"),__vite__mapDeps([18,11,2,5,4,12,8])),"./.storybook/stories/Output.stories.ts"),"./.storybook/stories/Output.stories.ts":t(async()=>o(()=>import("./Output.stories-Jpm_4RLi.js"),__vite__mapDeps([18,11,2,5,4,12,8])),"./.storybook/stories/Output.stories.ts"),"./.storybook/stories/RoleAlert.stories.ts":t(async()=>o(()=>import("./RoleAlert.stories-CSZkC12l.js"),__vite__mapDeps([19,11,2,5,4,12,8])),"./.storybook/stories/RoleAlert.stories.ts"),"./.storybook/stories/RoleAlert.stories.ts":t(async()=>o(()=>import("./RoleAlert.stories-CSZkC12l.js"),__vite__mapDeps([19,11,2,5,4,12,8])),"./.storybook/stories/RoleAlert.stories.ts"),"./.storybook/stories/RoleLog.stories.ts":t(async()=>o(()=>import("./RoleLog.stories-DRLxBou4.js"),__vite__mapDeps([20,11,2,5,4,12,8])),"./.storybook/stories/RoleLog.stories.ts"),"./.storybook/stories/RoleLog.stories.ts":t(async()=>o(()=>import("./RoleLog.stories-DRLxBou4.js"),__vite__mapDeps([20,11,2,5,4,12,8])),"./.storybook/stories/RoleLog.stories.ts"),"./.storybook/stories/RoleMarquee.stories.ts":t(async()=>o(()=>import("./RoleMarquee.stories-Ckj-S1a4.js"),__vite__mapDeps([21,11,2,5,4,12,8])),"./.storybook/stories/RoleMarquee.stories.ts"),"./.storybook/stories/RoleMarquee.stories.ts":t(async()=>o(()=>import("./RoleMarquee.stories-Ckj-S1a4.js"),__vite__mapDeps([21,11,2,5,4,12,8])),"./.storybook/stories/RoleMarquee.stories.ts"),"./.storybook/stories/RoleStatus.stories.ts":t(async()=>o(()=>import("./RoleStatus.stories-PdAMdYaZ.js"),__vite__mapDeps([22,11,2,5,4,12,8])),"./.storybook/stories/RoleStatus.stories.ts"),"./.storybook/stories/RoleStatus.stories.ts":t(async()=>o(()=>import("./RoleStatus.stories-PdAMdYaZ.js"),__vite__mapDeps([22,11,2,5,4,12,8])),"./.storybook/stories/RoleStatus.stories.ts"),"./.storybook/stories/RoleTimer.stories.ts":t(async()=>o(()=>import("./RoleTimer.stories-BvdiUYia.js"),__vite__mapDeps([23,11,2,5,4,12,8])),"./.storybook/stories/RoleTimer.stories.ts"),"./.storybook/stories/RoleTimer.stories.ts":t(async()=>o(()=>import("./RoleTimer.stories-BvdiUYia.js"),__vite__mapDeps([23,11,2,5,4,12,8])),"./.storybook/stories/RoleTimer.stories.ts"),"./.storybook/stories/ShadowRoot.stories.ts":t(async()=>o(()=>import("./ShadowRoot.stories-DKitDA6V.js"),__vite__mapDeps([24,11,2,5,4,12,8])),"./.storybook/stories/ShadowRoot.stories.ts")};async function T(i){return P[i]()}t(T,"importFn");const{composeConfigs:I,PreviewWeb:D,ClientApi:w}=__STORYBOOK_MODULE_PREVIEW_API__,V=t(async(i=[])=>{const _=await Promise.all([i.at(0)??o(()=>import("./entry-preview-B5nCmBaF.js"),__vite__mapDeps([25,5])),i.at(1)??o(()=>import("./entry-preview-docs-DaoEaaXJ.js"),__vite__mapDeps([26,3,2])),i.at(2)??o(()=>import("./preview-Bg1cl33n.js"),[]),i.at(3)??o(()=>import("./preview-CKzfkBrW.js"),[]),i.at(4)??o(()=>import("./preview-DijjcmUm.js"),__vite__mapDeps([27,11,2,5,4,12,8]))]);return I(_)},"getProjectAnnotations");window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new D(T,V);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{o as _};
