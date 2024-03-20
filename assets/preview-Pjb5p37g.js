function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/DocsRenderer-K4EAMTCU-ljU6WxCv.js","assets/iframe-KxiP6bwf.js","assets/index-pB151kww.js","assets/_getTag-j4S1vZ1b.js","assets/index-hE5SaiR8.js","assets/uniq-xVmxHuSc.js","assets/index-Kg-CViSs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as s}from"./iframe-KxiP6bwf.js";import"../sb-preview/runtime.js";const{global:_}=__STORYBOOK_MODULE_GLOBAL__;var a=Object.entries(_.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await s(()=>import("./DocsRenderer-K4EAMTCU-ljU6WxCv.js"),__vite__mapDeps([0,1,2,3,4,5,6]));return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>a[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
