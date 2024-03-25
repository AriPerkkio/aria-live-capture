var l=Object.defineProperty;var f=(e,n)=>l(e,"name",{value:n,configurable:!0});import{d as p}from"./index-B7qynYb3.js";const{global:u}=__STORYBOOK_MODULE_GLOBAL__,{simulatePageLoad:O,simulateDOMContentLoaded:_}=__STORYBOOK_MODULE_PREVIEW_API__;var{Node:c}=u,y=f((e,n)=>{let{id:s,component:t}=n;if(typeof t=="string"){let o=t;return Object.keys(e).forEach(r=>{o=o.replace(`{{${r}}}`,e[r])}),o}if(t instanceof HTMLElement){let o=t.cloneNode(!0);return Object.keys(e).forEach(r=>{o.setAttribute(r,typeof e[r]=="string"?e[r]:JSON.stringify(e[r]))}),o}if(typeof t=="function")return t(e,n);throw console.warn(p`
    Storybook's HTML renderer only supports rendering DOM elements and strings.
    Received: ${t}
  `),new Error(`Unable to render story ${s}`)},"render");function M({storyFn:e,kind:n,name:s,showMain:t,showError:o,forceRemount:r},i){let d=e();if(t(),typeof d=="string")i.innerHTML=d,O(i);else if(d instanceof c){if(i.firstChild===d&&r===!1)return;i.innerHTML="",i.appendChild(d),_()}else o({title:`Expecting an HTML snippet or DOM node from the story: "${s}" of "${n}".`,description:p`
        Did you forget to return the HTML snippet from the story?
        Use "() => <your snippet or node>" or when defining the story.
      `})}f(M,"renderToCanvas");var a={renderer:"html"};export{a as parameters,y as render,M as renderToCanvas};
