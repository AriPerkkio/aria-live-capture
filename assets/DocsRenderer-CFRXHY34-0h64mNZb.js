const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DVO02Qmq.js","assets/index-ChXIIcSS.js","assets/index-D_nqeADo.js","assets/iframe-DV0BqkrA.js","assets/_commonjsHelpers-1BxWT6uA.js","assets/index-TABuaOO4.js","assets/index-B7qynYb3.js"])))=>i.map(i=>d[i]);
var R=Object.defineProperty;var o=(t,r)=>R(t,"name",{value:r,configurable:!0});import{_ as w}from"./iframe-DV0BqkrA.js";import{ap as _,ag as c,aq as f,ar as g,as as x,af as i,at as y}from"./index-D_nqeADo.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-1BxWT6uA.js";import"./index-TABuaOO4.js";import"./index-B7qynYb3.js";var E,h=_;E=h.createRoot,h.hydrateRoot;var u=new Map;function D(){return globalThis.IS_REACT_ACT_ENVIRONMENT}o(D,"getIsReactActEnvironment");var C=o(({callback:t,children:r})=>{let e=c.useRef();return c.useLayoutEffect(()=>{e.current!==t&&(e.current=t,t())},[t]),r},"WithCallback");typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let t=null,r=null;return{promise:new Promise((e,n)=>{t=e,r=n}),resolve:t,reject:r}});var M=o(async(t,r,e)=>{let n=await T(r,e);if(D()){n.render(t);return}let{promise:l,resolve:m}=Promise.withResolvers();return n.render(c.createElement(C,{callback:m},t)),l},"renderElement"),A=o((t,r)=>{let e=u.get(t);e&&(e.unmount(),u.delete(t))},"unmountElement"),T=o(async(t,r)=>{let e=u.get(t);return e||(e=E(t,r),u.set(t,e)),e},"getReactRoot"),I={code:f,a:g,...x},s,N=(s=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){let{showException:e}=this.props;e(r)}render(){let{hasError:r}=this.state,{children:e}=this.props;return r?null:i.createElement(i.Fragment,null,e)}},o(s,"ErrorBoundary"),s),a,q=(a=class{constructor(){this.render=async(r,e,n)=>{let l={...I,...e==null?void 0:e.components},m=y;return new Promise((d,v)=>{w(async()=>{const{MDXProvider:p}=await import("./index-DVO02Qmq.js");return{MDXProvider:p}},__vite__mapDeps([0,1,2,3,4,5,6])).then(({MDXProvider:p})=>M(i.createElement(N,{showException:v,key:Math.random()},i.createElement(p,{components:l},i.createElement(m,{context:r,docsParameter:e}))),n)).then(()=>d())})},this.unmount=r=>{A(r)}}},o(a,"DocsRenderer"),a);export{q as DocsRenderer,I as defaultComponents};
