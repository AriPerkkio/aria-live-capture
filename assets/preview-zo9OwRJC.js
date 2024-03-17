function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DocsRenderer-K4EAMTCU-jlqakG-N.js","assets/iframe-8xqNUCkW.js","assets/index-dKaXzWJ5.js","assets/_getTag-xF9ELAxU.js","assets/uniq-SFcGWYPh.js","assets/_defineProperty-rS7CuEv5.js","assets/index-_xcJnWSP.js","assets/index-lx1OeGKE.js","assets/index-Kg-CViSs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./iframe-8xqNUCkW.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-jlqakG-N.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
