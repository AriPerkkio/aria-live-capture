var l=Object.defineProperty;var o=(e,r)=>l(e,"name",{value:r,configurable:!0});import{S as p,e as E,a as _}from"./index-Cua5AGJk.js";import"./_getTag-B2JUw1-s.js";const{useEffect:D,addons:S}=__STORYBOOK_MODULE_PREVIEW_API__;function A(e){var s;let r=(s=e==null?void 0:e.parameters.docs)==null?void 0:s.source,a=e==null?void 0:e.parameters.__isArgsStory;return(r==null?void 0:r.type)===p.DYNAMIC?!1:!a||(r==null?void 0:r.code)||(r==null?void 0:r.type)===p.CODE}o(A,"skipSourceRender");var f=o((e,r)=>{var i,g;let a=e(),s=(g=(i=r==null?void 0:r.parameters.docs)==null?void 0:i.source)!=null&&g.excludeDecorators?r.originalStoryFn(r.args,r):a,d;return A(r)||(typeof s=="string"?d=s:s instanceof Element&&(d=s.outerHTML)),D(()=>{let{id:u,unmappedArgs:y}=r;d&&S.getChannel().emit(_,{id:u,args:y,source:d})}),a},"sourceDecorator"),I=[f],O={docs:{story:{inline:!0},source:{type:p.DYNAMIC,language:"html",code:void 0,excludeDecorators:void 0}}},R=[E];export{R as argTypesEnhancers,I as decorators,O as parameters};