var C=Object.defineProperty;var i=(e,t)=>C(e,"name",{value:t,configurable:!0});function c(e){return e!=null&&e.nodeType===Node.ELEMENT_NODE}i(c,"isElement");function d(e){return e!=null&&e.nodeType===Node.TEXT_NODE}i(d,"isTextNode");function u(e){const t=document.createElement("div");if(t.innerHTML=L(e),t.childNodes.length>1)return t;const n=t.firstElementChild;return c(n)?n:t}i(u,"htmlToElement");const b=/ {2,}/g,g=/\n+/g,v=/\n {1,}/g,T=/ {1,}\n/g,A=/\n/g;function L(e){return e.replace(b," ").replace(g,`
`).replace(v,`
`).replace(T,`
`).replace(A,"").trim()}i(L,"trimWhitespace");function P(e,t){var n;const s=typeof t=="string";if(t==null||s&&t.length===0){(n=e.parentElement)===null||n===void 0||n.removeChild(e);return}const o=s?u(t):t;return m(e,o)}i(P,"update");function m(e,t){if(I(e,t))return _(e,t);const n=Array.from(t.childNodes).slice(e.childNodes.length),s=[];if(e.childNodes.forEach((o,l)=>{const a=t.childNodes[l];if(!a)return s.push(o);(o.hasChildNodes()||a.hasChildNodes())&&m(o,a),d(o)&&d(a)&&o.textContent!==a.textContent&&(o.textContent=a.textContent)}),s.forEach(e.removeChild.bind(e)),n.forEach(e.appendChild.bind(e)),c(e)){const o=p(e),l=p(t),a=c(t);for(const{key:r,value:h}of l)e.getAttribute(r)!==h&&e.setAttribute(r,h);for(const{key:r}of o)a&&(t.hasAttribute(r)||e.removeAttribute(r))}}i(m,"updateNode");function p(e){return c(e)?e.getAttributeNames().reduce((t,n)=>[...t,{key:n,value:e.getAttribute(n)||""}],[]):[]}i(p,"getAttributes");function I(e,t){return e.nodeType!==t.nodeType?!0:c(e)&&c(t)?e.tagName!==t.tagName:e.textContent!==t.textContent}i(I,"shouldUpdateWholeNode");function _(e,t){c(e)?e.replaceWith(t):d(e)&&d(t)?e.textContent=t.textContent:d(e)&&c(t)?e.parentElement?e.parentElement.replaceChild(t,e):console.warn(`Unexpected case, missing parentElement: ${e}`):console.warn(["Unexpected case:",`isElement(current): ${c(e)}`,`isTextNode(current): ${d(e)}`,`isElement(next): ${c(t)}`,`isTextNode(next): ${d(t)}`].join(" "))}i(_,"updateWholeNode");function y(e,t){const n=document.createElement("button");n.textContent="Mount";const s=document.createElement("div");s.appendChild(n),s.appendChild(u(e));let o=!1;return n.addEventListener("click",()=>{const l=s.lastChild;if(!l)throw new Error("wrapper missing lastChild");P(l,o?e:t),o=!o,N.emit(void 0)}),s}i(y,"createMountToggle");function W(...e){const t=document.createElement("button");t.textContent="Next state";const n=document.createElement("div");n.appendChild(t);function s(){for(const a of n.childNodes)a!==t&&n.removeChild(a)}i(s,"cleanWrapper");const o=e.length;let l=0;return t.addEventListener("click",()=>{l===o?(s(),l=0):(e[l](n),l++),N.emit(void 0)}),n}i(W,"createButtonCycle");const E=class E{constructor(){this.subscribers=[],this.events=[]}on(t){this.subscribers.push(t),this.events.forEach(t)}off(t){this.subscribers=this.subscribers.filter(n=>n!==t)}emit(t){this.subscribers.forEach(n=>n(t)),this.events.push(t)}clear(){this.events=[]}};i(E,"EventBus");let f=E;const N=new f,x=new f;function G(e){return i(function(n){const s=Array(e).fill(null).map(n);if(s.some(o=>o instanceof Promise))return Promise.all(s)},"execute")}i(G,"times");export{x as A,N as S,W as a,y as c,G as t};
