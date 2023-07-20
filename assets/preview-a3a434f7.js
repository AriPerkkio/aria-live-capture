var z=Object.defineProperty;var o=(e,t)=>z(e,"name",{value:t,configurable:!0});import{p as X,e as K,w as M}from"./index-7141abb6.js";import{A as x,S as Q}from"./utils-f8fc7d82.js";import"./index-722d4584.js";import"./index-ce7257af.js";import"./uniq-6402743e.js";import"./index-b4278562.js";import"./index-fd78e4bf.js";function E(e){return e!=null&&e.nodeType===Node.ELEMENT_NODE}o(E,"isElement");function U(e){return e!=null&&e instanceof ShadowRoot}o(U,"isShadowRoot");function J(e){return e!=null&&e.nodeType===Node.DOCUMENT_NODE}o(J,"isDocument");let S={includeShadowDom:!1};function Z(e){S={...S,...e}}o(Z,"configure");function N(){return S}o(N,"getConfig");function R(e,...t){const n=e.closest(...t);if(n||!N().includeShadowDom)return n;const r=e.getRootNode();return U(r)?R(r.host,...t):null}o(R,"closest");function ee(e){return e.parentNode||!N().includeShadowDom?e.parentNode:U(e)?e.host:null}o(ee,"getParentNode");function H(e){return N().includeShadowDom&&E(e)&&e.shadowRoot?H(e.shadowRoot):e.childNodes}o(H,"getChildNodes");function te(e,...t){return N().includeShadowDom?[e,...q([e])].reduce((r,i)=>[...r,...i.querySelectorAll(...t)],[]):Array.from(e.querySelectorAll(...t))}o(te,"querySelectorAll");function q(e,t=[]){if(e.length===0)return t;const n=e.reduce((r,i)=>[...r,...ne(i)],[]);return q(n,[...t,...n])}o(q,"findShadowRoots");function ne(e){const t=e.getRootNode({composed:!0}),n=[];if(!J(t))return n;E(e)&&e.shadowRoot&&n.push(e.shadowRoot);const r=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_DOCUMENT_FRAGMENT,{acceptNode:oe});function i(u){const s=r.nextNode();return!E(s)||!s.shadowRoot?u:i([...u,s.shadowRoot])}return o(i,"collectRoots"),i(n)}o(ne,"findShadowRootsOfNode");function oe(e){return E(e)&&e.shadowRoot?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}o(oe,"acceptNodesWithShadowRoot");const re=["status","log","alert"],B=['[role="status"]','[role="log"]','[role="alert"]','[aria-live="polite"]','[aria-live="assertive"]',"output"].join(", "),ie='[aria-hidden="true"]';function F(e){const t=te(e,B);return E(e)&&C(e)!=="off"&&v(e)?t.concat(e).filter(ce):t}o(F,"getAllLiveRegions");function A(e){if(E(e))return e;const t=ee(e);return t?A(t):null}o(A,"getClosestElement");function se(e){return re.includes(e)||P(e)}o(se,"isLiveRegionAttribute");function v(e){const t=A(e);return t!=null&&R(t,"html")!=null}o(v,"isInDOM");function O(e){const t=A(e);if(!t||t.getAttribute("aria-hidden")==="true"||t.getAttribute("aria-live")==="off")return!0;const n=t.getAttribute("role");return n==="marquee"||n==="timer"?!0:R(t,ie)!=null}o(O,"isHidden");function D(e){return e?R(e,B):null}o(D,"getClosestLiveRegion");function P(e){return e==="polite"||e==="assertive"||e==="off"}o(P,"isPolitenessSetting");function C(e){if(!e||!E(e))return"off";const t=e.getAttribute("aria-live");if(P(t))return t;const n=e.getAttribute("role");if(n==="marquee"||n==="timer")return"off";if(n==="status"||n==="log")return"polite";if(n==="alert")return"assertive";if(e.tagName.toLowerCase()==="output")return"polite";const r=D(e);return C(r===e?D(e.parentElement):r)}o(C,"resolvePolitenessSetting");const ue=/\s+/g;function $(e){const t=e.trim().replace(ue," ");return t.length>0?t:null}o($,"trimWhiteSpace");function _(e){if(!e||O(e))return null;if(e.nodeType===Node.TEXT_NODE)return e.textContent?$(e.textContent):null;const t=H(e);if(t.length===0)return null;const n=Array.from(t).map(_).filter(Boolean).join(" ");return $(n)}o(_,"getTextContent");function ce(e,t,n){return n.indexOf(e)===t}o(ce,"filterUnique");function I(e,t,n){const r=Object.getOwnPropertyDescriptor(e,t);if(!r||!r.set)throw new Error(`Unable to intercept ${String(t)}. No descriptor available.`);const i=r.set;return r.set=o(function(s){const c=i.call(this,s);return n.call(this,s),c},"interceptedSet"),Object.defineProperty(e,t,r),o(function(){r.set=i,Object.defineProperty(e,t,r)},"restore")}o(I,"interceptSetter");function d(e,t,n,r="AFTER"){const i=e[t];if(typeof i!="function")throw new Error(`Expected ${String(t)} to be a function. Received ${typeof i}: ${i}`);if(typeof n!="function")throw new Error(`Expected method to be a function. Received ${typeof n}: ${n}`);function u(...s){r==="BEFORE"&&n.call(this,...s);const c=i.call(this,...s);return r==="AFTER"&&n.call(this,...s),c}return o(u,"interceptedMethod"),e[t]=u,o(function(){e[t]=i},"restore")}o(d,"interceptMethod");const m=new Map;function le(e){Z({includeShadowDom:e.includeShadowDom||!1});const t=o((l,f)=>{const a=$(l);a&&e.onCapture(a,f)},"onCapture");function n(l){if(m.size===0)return;const f=A(l);if(!f)return;const a=D(f);if(a){const w=C(a);if(w!=="off"&&v(a)){const L=m.get(a),T=_(a)||"";if(O(f)){L&&m.set(a,T);return}L!==T&&(t(T,w),m.set(a,T))}}}o(n,"updateAnnouncements");function r(l){if(m.has(l)||O(l))return;const f=C(l);if(f==="off")return;const a=_(l);m.set(l,a),a&&l.getAttribute("role")==="alert"&&t(a,f)}o(r,"addLiveRegion");function i(l){const f=E(l)?l:document;for(const a of F(f))r(a)}o(i,"updateLiveRegions");function u(){n(this)}o(u,"onTextContentChange");function s(){n(this)}o(s,"onNodeValueChange");function c(l){i(l),n(l)}o(c,"onNodeMount");function h(){c(this)}o(h,"onInsertAdjacent");function p(...l){if(!E(this)||!v(this)||!l[0])return;const[f]=l;switch(f){case"role":case"aria-live":{const a=m.has(this),w=se(l[1]);if(a&&!w){m.delete(this);return}if(!a&&w)return i(this);if(a&&w&&C(this)==="assertive")return n(this);break}case"aria-hidden":return i(this),n(this);default:return}}o(p,"onSetAttribute");function g(...l){if(!E(this))return;const[f]=l;f==="aria-hidden"&&(i(this),n(this))}o(g,"onRemoveAttributeAfter");function y(...l){if(m.size===0)return;const[f]=l;if(f==null||!E(f))return n(this);const a=[f,...F(f)];for(const w of a)m.has(w)&&m.delete(w);n(this)}o(y,"onRemoveChild");const Y=[d(DocumentFragment.prototype,"removeChild",y),d(DocumentFragment.prototype,"replaceChildren",c),d(DocumentFragment.prototype,"append",c),d(DocumentFragment.prototype,"prepend",c),d(Element.prototype,"setAttribute",p),d(Element.prototype,"removeAttribute",ae,"BEFORE"),d(Element.prototype,"removeAttribute",g,"AFTER"),d(Element.prototype,"removeChild",y),d(Element.prototype,"replaceChildren",c),d(Element.prototype,"insertAdjacentElement",h),d(Element.prototype,"insertAdjacentHTML",h),d(Element.prototype,"insertAdjacentText",h),d(Element.prototype,"before",c),d(Element.prototype,"append",c),d(Element.prototype,"prepend",c),d(Node.prototype,"appendChild",c),d(Node.prototype,"insertBefore",c),d(Node.prototype,"replaceChild",c),I(Node.prototype,"textContent",u),I(Node.prototype,"nodeValue",s)];return i(document),o(function(){Y.splice(0).forEach(f=>f()),m.clear()},"restore")}o(le,"CaptureAnnouncements");function ae(...e){if(m.size===0||!E(this))return;const[t]=e;this.hasAttribute(t)&&(t==="role"||t==="aria-live")&&m.has(this)&&m.delete(this)}o(ae,"onRemoveAttributeBefore");function fe(...e){const[t,n,r]=e;return X(t,n,{...r,plugins:[{test:u=>{var s;return((s=u==null?void 0:u.constructor)==null?void 0:s.name)&&Ce(u)},serialize:Re}],filterNode:()=>!0})}o(fe,"prettyDOMWithShadowDOM");function j(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}o(j,"escapeHTML$1");function de(e,t,n,r,i,u,s){const c=r+n.indent,h=n.colors;return e.map(p=>{const g=t[p];let y=s(g,n,c,i,u);return typeof g!="string"&&(y.indexOf(`
`)!==-1&&(y=n.spacingOuter+c+y+n.spacingOuter+r),y="{"+y+"}"),n.spacingInner+r+h.prop.open+p+h.prop.close+"="+h.value.open+y+h.value.close}).join("")}o(de,"printProps");const pe=3,me=o((e,t,n,r,i,u)=>e.map(s=>{const c=typeof s=="string"?G(s,t):u(s,t,n,r,i);return c===""&&typeof s=="object"&&s!==null&&s.nodeType!==pe?"":t.spacingOuter+n+c}).join(""),"printChildren"),G=o((e,t)=>{const n=t.colors.content;return n.open+j(e)+n.close},"printText"),he=o((e,t)=>{const n=t.colors.comment;return n.open+"<!--"+j(e)+"-->"+n.close},"printComment"),Ee=o((e,t,n,r,i,u)=>{const s=i.colors.tag,c=r?`${i.spacingOuter+u}  #shadow-root`:"";return s.open+"<"+e+(t&&s.close+t+i.spacingOuter+u+s.open)+(n?">"+c+s.close+n+i.spacingOuter+u+s.open+"</"+e:(t&&!i.min?"":" ")+"/")+">"+s.close},"printElement"),ge=o((e,t)=>{const n=t.colors.tag;return n.open+"<"+e+n.close+" …"+n.open+" />"+n.close},"printElementAsLeaf"),ye=1,W=3,k=8,V=11,we=/^((HTML|SVG)\w*)?Element$/,Ce=o(e=>{const t=e.constructor.name,{nodeType:n,tagName:r}=e,i=typeof r=="string"&&r.includes("-")||typeof e.hasAttribute=="function"&&e.hasAttribute("is");return n===ye&&(we.test(t)||i)||n===W&&t==="Text"||n===k&&t==="Comment"||n===V&&t==="DocumentFragment"},"testNode");function Te(e){return e.nodeType===W}o(Te,"nodeIsText");function Ne(e){return e.nodeType===k}o(Ne,"nodeIsComment");function b(e){return e.nodeType===V}o(b,"nodeIsFragment");function Re(e,t,n,r,i,u){if(Te(e))return G(e.data,t);if(Ne(e))return he(e.data,t);const s=b(e)?"DocumentFragment":e.tagName.toLowerCase();if(++r>t.maxDepth)return ge(s,t);const c=me(Ae(e),t,n+t.indent,r,i,u),h="shadowRoot"in e&&e.shadowRoot!=null;return Ee(s,de(b(e)?[]:Array.from(e.attributes).map(p=>p.name).sort(),b(e)?{}:Array.from(e.attributes).reduce((p,g)=>(p[g.name]=g.value,p),{}),t,n+t.indent,r,i,u),c,h,t,n)}o(Re,"serialize");function Ae(e){const t=e instanceof Element&&e.shadowRoot;return[e,t].filter(Boolean).reduce((i,u)=>[...i,...u.childNodes||u.children],[])}o(Ae,"getChildren");const{addons:be}=__STORYBOOK_MODULE_ADDONS__,{STORY_CHANGED:Se}=__STORYBOOK_MODULE_CORE_EVENTS__;le({onCapture:(e,t)=>x.emit({text:e,level:t}),includeShadowDom:!0});be.getChannel().addListener(Se,()=>{x.clear()});const He=[o(function(t){const n=t(),r=document.createElement("div"),i="source-code-frame",u="story-target-source-code-frame";r.innerHTML=`
            <div style="display: flex; flex-direction: row; align-content: baseline;">
                <div id="${u}" style="flex-basis: 50%;"></div>
                <pre id="${i}" aria-live="off" aria-hidden="true" style="flex-basis: 50%; margin: 0; background-color: #eee; padding: 0.5rem;"></pre>
            </div>
        `.trim();function s(){const h=De(ve,Oe,fe)(n),p=r.querySelector(`#${i}`);if(!p)throw new Error(`Unable to find ${i}`);p.innerHTML=h}o(s,"updateSourceCodeFrame"),Q.on(s),s();const c=r.querySelector(`#${u}`);if(!c)throw new Error(`Unable to find ${u}`);return c.appendChild(n),r},"withSourceCode"),o(function(t){const n=document.createElement("div"),r=document.createElement("a");return r.setAttribute("tabindex","0"),r.setAttribute("href","javascript:void(0)"),r.setAttribute("style","display: inline-block; margin-bottom: 2rem;"),r.textContent="Focus target",n.appendChild(r),n.appendChild(t()),setTimeout(()=>r.focus(),1e3),n},"withFocusTarget"),o(function(t){const n=t(),r=document.createElement("div"),i="announcements-frame",u="story-target-announcement-frame";r.innerHTML=`
            <div style="display: flex; flex-direction: column; align-content: baseline;">
                <div id="${u}" style="flex-basis: 50%;"></div>

                <div aria-live="off" aria-hidden="true" style="flex-basis: 50%; margin-top: 5rem; background-color: #eee; padding: 0 1rem">
                    <h2>Captured announcements</h2>
                    <ul id="${i}" style="padding-left: 0 1rem;"></ul>
                </div>
            </div>
        `.trim(),x.on(({text:c,level:h})=>{const p=document.createElement("li");p.textContent=`${h}: ${c}`;const g=r.querySelector(`#${i}`);if(!g)throw new Error(`Unable to find ${i}`);g.appendChild(p)});const s=r.querySelector(`#${u}`);if(!s)throw new Error(`Unable to find ${u}`);return s.appendChild(n),r},"withAnnouncements")];function ve(e){return e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t])}o(ve,"escapeHTML");function Oe(e){return e.replace(/\n +\n/g,`
`).replace(/(^<div>\n|\n<\/div>$)/g,"").replace(/^ {2}/g,"").replace(/\n {2}/g,`
`).replace(/(>\n)(<\w)/g,`$1
$2`).replace(/( *)<(\w+)((\s|\w|=|"|-)*)\s*\/>/g,`$1<$2 $3>
$1</$2>`).replace(/<(\w+) *\n +((\w|=|"|-)+)\n *>/g,"<$1 $2>").replace(/ +>/g,">")}o(Oe,"formatSourceCode");const De=o((...e)=>e.reduceRight((t,n)=>(...r)=>n(t(...r)),t=>t),"compose");K.extend({toBeAnnounced:o(function(t,n){const r=M(document.body).getByRole("heading",{name:"Captured announcements",hidden:!0}).parentElement;if(!r)return{pass:!1,message:()=>"Unable to find announcements container"};const[i]=M(r).queryAllByText(`${n}: ${t}`),u=i!=null;return u?{pass:u,message:()=>`Expected announcement "${t}" not to be done, but it was.`}:{pass:u,message:()=>`Expected announcement "${t}" to be done, but it was not.`}},"toBeAnnounced")});export{He as decorators};
//# sourceMappingURL=preview-a3a434f7.js.map
