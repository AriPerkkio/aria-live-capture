var yl=Object.defineProperty;var n=(e,t)=>yl(e,"name",{value:t,configurable:!0});import{r as ae,R as hr}from"./chunk-S4VUQJ4A-2ba9b22e.js";import"./iframe-99fa5279.js";import"../sb-preview/runtime.js";import"./index-722d4584.js";import"./_commonjs-dynamic-modules-fefbfc1c.js";import"./index-f5288c5e.js";import"./index-ce7257af.js";import"./assert-d7476c31.js";import"./uniq-6402743e.js";function N(e,t){if(Ot(e))for(let r=0;r<e.length&&t(e[r],r,e)!==!1;r++);else e&&N(Object.keys(e),r=>t(e[r],r,e));return e}n(N,"each");function le(e,t){let r=Be(t);if(Se(t)||r){let l=r?"":{};if(e){let i=window.getComputedStyle(e,null);l=r?yr(e,i,t):t.reduce((a,o)=>(a[o]=yr(e,i,o),a),l)}return l}e&&N(fe(t),l=>Tl(e,l,t[l]))}n(le,"style");var ge=n((e,t)=>{let{o:r,u:l,_:i}=e,a=r,o,c=n((s,d)=>{let u=a,f=s,b=d||(l?!l(u,f):u!==f);return(b||i)&&(a=f,o=u),[a,b,o]},"cacheUpdateContextual");return[t?s=>c(t(a,o),s):c,s=>[a,!!s,o]]},"createCache"),nt=n(()=>typeof window<"u","isClient"),jr=nt()&&Node.ELEMENT_NODE,{toString:Sl,hasOwnProperty:Tt}=Object.prototype,Ie=n(e=>e===void 0,"isUndefined"),xt=n(e=>e===null,"isNull"),xl=n(e=>Ie(e)||xt(e)?`${e}`:Sl.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase(),"type"),_e=n(e=>typeof e=="number","isNumber"),Be=n(e=>typeof e=="string","isString"),er=n(e=>typeof e=="boolean","isBoolean"),ye=n(e=>typeof e=="function","isFunction"),Se=n(e=>Array.isArray(e),"isArray"),rt=n(e=>typeof e=="object"&&!Se(e)&&!xt(e),"isObject"),Ot=n(e=>{let t=!!e&&e.length,r=_e(t)&&t>-1&&t%1==0;return Se(e)||!ye(e)&&r?t>0&&rt(e)?t-1 in e:!0:!1},"isArrayLike"),Wt=n(e=>{if(!e||!rt(e)||xl(e)!=="object")return!1;let t,r="constructor",l=e[r],i=l&&l.prototype,a=Tt.call(e,r),o=i&&Tt.call(i,"isPrototypeOf");if(l&&!a&&!o)return!1;for(t in e);return Ie(t)||Tt.call(e,t)},"isPlainObject"),ht=n(e=>{let t=HTMLElement;return e?t?e instanceof t:e.nodeType===jr:!1},"isHTMLElement"),Ct=n(e=>{let t=Element;return e?t?e instanceof t:e.nodeType===jr:!1},"isElement"),tr=n((e,t,r)=>e.indexOf(t,r),"indexOf"),U=n((e,t,r)=>(!r&&!Be(t)&&Ot(t)?Array.prototype.push.apply(e,t):e.push(t),e),"push"),je=n(e=>{let t=Array.from,r=[];return t&&e?t(e):(e instanceof Set?e.forEach(l=>{U(r,l)}):N(e,l=>{U(r,l)}),r)},"from"),rr=n(e=>!!e&&e.length===0,"isEmptyArray"),Ce=n((e,t,r)=>{N(e,l=>l&&l.apply(void 0,t||[])),!r&&(e.length=0)},"runEachAndClear"),Et=n((e,t)=>Object.prototype.hasOwnProperty.call(e,t),"hasOwnProperty"),fe=n(e=>e?Object.keys(e):[],"keys"),Y=n((e,t,r,l,i,a,o)=>{let c=[t,r,l,i,a,o];return(typeof e!="object"||xt(e))&&!ye(e)&&(e={}),N(c,s=>{N(fe(s),d=>{let u=s[d];if(e===u)return!0;let f=Se(u);if(u&&(Wt(u)||f)){let b=e[d],p=b;f&&!Se(b)?p=[]:!f&&!Wt(b)&&(p={}),e[d]=Y(p,u)}else e[d]=u})}),e},"assignDeep"),lr=n(e=>{for(let t in e)return!1;return!0},"isEmptyObject"),qr=n((e,t,r,l)=>{if(Ie(l))return r?r[e]:t;r&&(Be(l)||_e(l))&&(r[e]=l)},"getSetProp"),re=n((e,t,r)=>{if(Ie(r))return e?e.getAttribute(t):null;e&&e.setAttribute(t,r)},"attr"),ce=n((e,t)=>{e&&e.removeAttribute(t)},"removeAttr"),Ve=n((e,t,r,l)=>{if(r){let i=re(e,t)||"",a=new Set(i.split(" "));a[l?"add":"delete"](r);let o=je(a).join(" ").trim();re(e,t,o)}},"attrClass"),Ol=n((e,t,r)=>{let l=re(e,t)||"";return new Set(l.split(" ")).has(r)},"hasAttrClass"),we=n((e,t)=>qr("scrollLeft",0,e,t),"scrollLeft"),Le=n((e,t)=>qr("scrollTop",0,e,t),"scrollTop"),Ut=nt()&&Element.prototype,Xr=n((e,t)=>{let r=[],l=t?Ct(t)?t:null:document;return l?U(r,l.querySelectorAll(e)):r},"find"),Cl=n((e,t)=>{let r=t?Ct(t)?t:null:document;return r?r.querySelector(e):null},"findFirst"),gt=n((e,t)=>Ct(e)?(Ut.matches||Ut.msMatchesSelector).call(e,t):!1,"is"),nr=n(e=>e?je(e.childNodes):[],"contents"),Pe=n(e=>e?e.parentElement:null,"parent"),Ye=n((e,t)=>{if(Ct(e)){let r=Ut.closest;if(r)return r.call(e,t);do{if(gt(e,t))return e;e=Pe(e)}while(e)}return null},"closest"),El=n((e,t,r)=>{let l=e&&Ye(e,t),i=e&&Cl(r,l),a=Ye(i,t)===l;return l&&i?l===e||i===e||a&&Ye(Ye(e,r),t)!==l:!1},"liesBetween"),ir=n((e,t,r)=>{if(r&&e){let l=t,i;Ot(r)?(i=document.createDocumentFragment(),N(r,a=>{a===l&&(l=a.previousSibling),i.appendChild(a)})):i=r,t&&(l?l!==t&&(l=l.nextSibling):l=e.firstChild),e.insertBefore(i,l||null)}},"before"),he=n((e,t)=>{ir(e,null,t)},"appendChildren"),$l=n((e,t)=>{ir(Pe(e),e,t)},"insertBefore"),gr=n((e,t)=>{ir(Pe(e),e&&e.nextSibling,t)},"insertAfter"),Oe=n(e=>{if(Ot(e))N(je(e),t=>Oe(t));else if(e){let t=Pe(e);t&&t.removeChild(e)}},"removeElements"),Fe=n(e=>{let t=document.createElement("div");return e&&re(t,"class",e),t},"createDiv"),Wr=n(e=>{let t=Fe();return t.innerHTML=e.trim(),N(nr(t),r=>Oe(r))},"createDOM"),Jt=n(e=>e.charAt(0).toUpperCase()+e.slice(1),"firstLetterToUpper"),Al=n(()=>Fe().style,"getDummyStyle"),Ll=["-webkit-","-moz-","-o-","-ms-"],Hl=["WebKit","Moz","O","MS","webkit","moz","o","ms"],_t={},Bt={},Pl=n(e=>{let t=Bt[e];if(Et(Bt,e))return t;let r=Jt(e),l=Al();return N(Ll,i=>{let a=i.replace(/-/g,"");return!(t=[e,i+e,a+r,Jt(a)+r].find(o=>l[o]!==void 0))}),Bt[e]=t||""},"cssProperty"),it=n(e=>{if(nt()){let t=_t[e]||window[e];return Et(_t,e)||(N(Hl,r=>(t=t||window[r+Jt(e)],!t)),_t[e]=t),t}},"jsAPI"),Il=it("MutationObserver"),mr=it("IntersectionObserver"),Ze=it("ResizeObserver"),Ur=it("cancelAnimationFrame"),Jr=it("requestAnimationFrame"),mt=nt()&&window.setTimeout,Kt=nt()&&window.clearTimeout,Rl=/[^\x20\t\r\n\f]+/g,Kr=n((e,t,r)=>{let l=e&&e.classList,i,a=0,o=!1;if(l&&t&&Be(t)){let c=t.match(Rl)||[];for(o=c.length>0;i=c[a++];)o=!!r(l,i)&&o}return o},"classListAction"),or=n((e,t)=>{Kr(e,t,(r,l)=>r.remove(l))},"removeClass"),He=n((e,t)=>(Kr(e,t,(r,l)=>r.add(l)),or.bind(0,e,t)),"addClass"),$t=n((e,t,r,l)=>{if(e&&t){let i=!0;return N(r,a=>{let o=l?l(e[a]):e[a],c=l?l(t[a]):t[a];o!==c&&(i=!1)}),i}return!1},"equal"),Yr=n((e,t)=>$t(e,t,["w","h"]),"equalWH"),Zr=n((e,t)=>$t(e,t,["x","y"]),"equalXY"),zl=n((e,t)=>$t(e,t,["t","r","b","l"]),"equalTRBL"),wr=n((e,t,r)=>$t(e,t,["width","height"],r&&(l=>Math.round(l))),"equalBCRWH"),ve=n(()=>{},"noop"),Ke=n(e=>{let t,r=e?mt:Jr,l=e?Kt:Ur;return[i=>{l(t),t=r(i,ye(e)?e():e)},()=>l(t)]},"selfClearTimeout"),ar=n((e,t)=>{let r,l,i,a=ve,{v:o,g:c,p:s}=t||{},d=n(function(p){a(),Kt(r),r=l=void 0,a=ve,e.apply(this,p)},"a2"),u=n(p=>s&&l?s(l,p):p,"mergeParms"),f=n(()=>{a!==ve&&d(u(i)||i)},"flush"),b=n(function(){let p=je(arguments),h=ye(o)?o():o;if(_e(h)&&h>=0){let E=ye(c)?c():c,P=_e(E)&&E>=0,A=h>0?mt:Jr,m=h>0?Kt:Ur,S=u(p)||p,H=d.bind(0,S);a();let I=A(H,h);a=n(()=>m(I),"c2"),P&&!r&&(r=mt(f,E)),l=i=S}else d(p)},"u2");return b.m=f,b},"debounce"),kl={opacity:1,zindex:1},at=n((e,t)=>{let r=t?parseFloat(e):parseInt(e,10);return r===r?r:0},"parseToZeroOrNumber"),Ml=n((e,t)=>!kl[e.toLowerCase()]&&_e(t)?`${t}px`:t,"adaptCSSVal"),yr=n((e,t,r)=>t!=null?t[r]||t.getPropertyValue(r):e.style[r],"getCSSVal"),Tl=n((e,t,r)=>{try{let{style:l}=e;Ie(l[t])?l.setProperty(t,r):l[t]=Ml(t,r)}catch{}},"setCSSVal"),lt=n(e=>le(e,"direction")==="rtl","directionIsRTL"),Sr=n((e,t,r)=>{let l=t?`${t}-`:"",i=r?`-${r}`:"",a=`${l}top${i}`,o=`${l}right${i}`,c=`${l}bottom${i}`,s=`${l}left${i}`,d=le(e,[a,o,c,s]);return{t:at(d[a],!0),r:at(d[o],!0),b:at(d[c],!0),l:at(d[s],!0)}},"topRightBottomLeft"),{round:xr}=Math,sr={w:0,h:0},qe=n(e=>e?{w:e.offsetWidth,h:e.offsetHeight}:sr,"offsetSize"),vt=n(e=>e?{w:e.clientWidth,h:e.clientHeight}:sr,"clientSize"),wt=n(e=>e?{w:e.scrollWidth,h:e.scrollHeight}:sr,"scrollSize"),yt=n(e=>{let t=parseFloat(le(e,"height"))||0,r=parseFloat(le(e,"width"))||0;return{w:r-xr(r),h:t-xr(t)}},"fractionalSize"),Me=n(e=>e.getBoundingClientRect(),"getBoundingClientRect"),st,_l=n(()=>{if(Ie(st)){st=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get(){st=!0}}))}catch{}}return st},"supportPassiveEvents"),Gr=n(e=>e.split(" "),"splitEventNames"),Bl=n((e,t,r,l)=>{N(Gr(t),i=>{e.removeEventListener(i,r,l)})},"off"),ee=n((e,t,r,l)=>{var i;let a=_l(),o=(i=a&&l&&l.S)!=null?i:a,c=l&&l.$||!1,s=l&&l.C||!1,d=[],u=a?{passive:o,capture:c}:c;return N(Gr(t),f=>{let b=s?p=>{e.removeEventListener(f,b,c),r&&r(p)}:r;U(d,Bl.bind(null,e,f,b,c)),e.addEventListener(f,b,u)}),Ce.bind(0,d)},"on"),Qr=n(e=>e.stopPropagation(),"stopPropagation"),el=n(e=>e.preventDefault(),"preventDefault"),Dl={x:0,y:0},Dt=n(e=>{let t=e?Me(e):0;return t?{x:t.left+window.pageYOffset,y:t.top+window.pageXOffset}:Dl},"absoluteCoordinates"),Or=n((e,t)=>{N(Se(t)?t:[t],e)},"manageListener"),cr=n(e=>{let t=new Map,r=n((a,o)=>{if(a){let c=t.get(a);Or(s=>{c&&c[s?"delete":"clear"](s)},o)}else t.forEach(c=>{c.clear()}),t.clear()},"removeEvent"),l=n((a,o)=>{if(Be(a)){let d=t.get(a)||new Set;return t.set(a,d),Or(u=>{ye(u)&&d.add(u)},o),r.bind(0,a,o)}er(o)&&o&&r();let c=fe(a),s=[];return N(c,d=>{let u=a[d];u&&U(s,l(d,u))}),Ce.bind(0,s)},"addEvent"),i=n((a,o)=>{let c=t.get(a);N(je(c),s=>{o&&!rr(o)?s.apply(0,o):s()})},"triggerEvent");return l(e||{}),[l,r,i]},"createEventListenerHub"),Cr=n(e=>JSON.stringify(e,(t,r)=>{if(ye(r))throw new Error;return r}),"opsStringify"),Nl={paddingAbsolute:!1,showNativeOverlaidScrollbars:!1,update:{elementEvents:[["img","load"]],debounce:[0,33],attributes:null,ignoreMutation:null},overflow:{x:"scroll",y:"scroll"},scrollbars:{theme:"os-theme-dark",visibility:"auto",autoHide:"never",autoHideDelay:1300,dragScroll:!0,clickScroll:!1,pointers:["mouse","touch","pen"]}},tl=n((e,t)=>{let r={},l=fe(t).concat(fe(e));return N(l,i=>{let a=e[i],o=t[i];if(rt(a)&&rt(o))Y(r[i]={},tl(a,o)),lr(r[i])&&delete r[i];else if(Et(t,i)&&o!==a){let c=!0;if(Se(a)||Se(o))try{Cr(a)===Cr(o)&&(c=!1)}catch{}c&&(r[i]=o)}}),r},"getOptionsDiff"),rl="os-environment",ll=`${rl}-flexbox-glue`,Vl=`${ll}-max`,nl="os-scrollbar-hidden",Nt="data-overlayscrollbars-initialize",me="data-overlayscrollbars",il=`${me}-overflow-x`,ol=`${me}-overflow-y`,Ge="overflowVisible",Fl="scrollbarHidden",Er="scrollbarPressed",St="updating",ze="data-overlayscrollbars-viewport",Vt="arrange",al="scrollbarHidden",Qe=Ge,Yt="data-overlayscrollbars-padding",jl=Qe,$r="data-overlayscrollbars-content",dr="os-size-observer",ql=`${dr}-appear`,Xl=`${dr}-listener`,Wl="os-trinsic-observer",Ul="os-no-css-vars",Jl="os-theme-none",de="os-scrollbar",Kl=`${de}-rtl`,Yl=`${de}-horizontal`,Zl=`${de}-vertical`,sl=`${de}-track`,ur=`${de}-handle`,Gl=`${de}-visible`,Ql=`${de}-cornerless`,Ar=`${de}-transitionless`,Lr=`${de}-interaction`,Hr=`${de}-unusable`,Pr=`${de}-auto-hidden`,Ir=`${de}-wheel`,en=`${sl}-interactive`,tn=`${ur}-interactive`,cl={},Xe=n(()=>cl,"getPlugins"),rn=n(e=>{let t=[];return N(Se(e)?e:[e],r=>{let l=fe(r);N(l,i=>{U(t,cl[i]=r[i])})}),t},"addPlugin"),ln="__osOptionsValidationPlugin",nn="__osSizeObserverPlugin",pr="__osScrollbarsHidingPlugin",on="__osClickScrollPlugin",Ft,Rr=n((e,t,r,l)=>{he(e,t);let i=vt(t),a=qe(t),o=yt(r);return l&&Oe(t),{x:a.h-i.h+o.h,y:a.w-i.w+o.w}},"getNativeScrollbarSize"),an=n(e=>{let t=!1,r=He(e,nl);try{t=le(e,Pl("scrollbar-width"))==="none"||window.getComputedStyle(e,"::-webkit-scrollbar").getPropertyValue("display")==="none"}catch{}return r(),t},"getNativeScrollbarsHiding"),sn=n((e,t)=>{let r="hidden";le(e,{overflowX:r,overflowY:r,direction:"rtl"}),we(e,0);let l=Dt(e),i=Dt(t);we(e,-999);let a=Dt(t);return{i:l.x===i.x,n:i.x!==a.x}},"getRtlScrollBehavior"),cn=n((e,t)=>{let r=He(e,ll),l=Me(e),i=Me(t),a=wr(i,l,!0),o=He(e,Vl),c=Me(e),s=Me(t),d=wr(s,c,!0);return r(),o(),a&&d},"getFlexboxGlue"),dn=n(()=>{let{body:e}=document,t=Wr(`<div class="${rl}"><div></div></div>`)[0],r=t.firstChild,[l,,i]=cr(),[a,o]=ge({o:Rr(e,t,r),u:Zr},Rr.bind(0,e,t,r,!0)),[c]=o(),s=an(t),d={x:c.x===0,y:c.y===0},u={elements:{host:null,padding:!s,viewport:A=>s&&A===A.ownerDocument.body&&A,content:!1},scrollbars:{slot:!0},cancel:{nativeScrollbarsOverlaid:!1,body:null}},f=Y({},Nl),b=Y.bind(0,{},f),p=Y.bind(0,{},u),h={k:c,A:d,I:s,L:le(t,"zIndex")==="-1",B:sn(t,r),V:cn(t,r),Y:l.bind(0,"z"),j:l.bind(0,"r"),N:p,q:A=>Y(u,A)&&p(),F:b,G:A=>Y(f,A)&&b(),X:Y({},u),U:Y({},f)},E=window.addEventListener,P=ar(A=>i(A?"z":"r"),{v:33,g:99});if(ce(t,"style"),Oe(t),E("resize",P.bind(0,!1)),!s&&(!d.x||!d.y)){let A;E("resize",()=>{let m=Xe()[pr];A=A||m&&m.R(),A&&A(h,a,P.bind(0,!0))})}return h},"createEnvironment"),ue=n(()=>(Ft||(Ft=dn()),Ft),"getEnvironment"),fr=n((e,t)=>ye(t)?t.apply(0,e):t,"resolveInitialization"),un=n((e,t,r,l)=>{let i=Ie(l)?r:l;return fr(e,i)||t.apply(0,e)},"staticInitializationElement"),dl=n((e,t,r,l)=>{let i=Ie(l)?r:l,a=fr(e,i);return!!a&&(ht(a)?a:t.apply(0,e))},"dynamicInitializationElement"),pn=n((e,t,r)=>{let{nativeScrollbarsOverlaid:l,body:i}=r||{},{A:a,I:o}=ue(),{nativeScrollbarsOverlaid:c,body:s}=t,d=l??c,u=Ie(i)?s:i,f=(a.x||a.y)&&d,b=e&&(xt(u)?!o:u);return!!f||!!b},"cancelInitialization"),br=new WeakMap,fn=n((e,t)=>{br.set(e,t)},"addInstance"),bn=n(e=>{br.delete(e)},"removeInstance"),ul=n(e=>br.get(e),"getInstance"),zr=n((e,t)=>e?t.split(".").reduce((r,l)=>r&&Et(r,l)?r[l]:void 0,e):void 0,"getPropByPath"),Zt=n((e,t,r)=>l=>[zr(e,l),r||zr(t,l)!==void 0],"createOptionCheck"),pl=n(e=>{let t=e;return[()=>t,r=>{t=Y({},t,r)}]},"createState"),ct="tabindex",dt=Fe.bind(0,""),jt=n(e=>{he(Pe(e),nr(e)),Oe(e)},"unwrap"),vn=n(e=>{let t=ue(),{N:r,I:l}=t,i=Xe()[pr],a=i&&i.T,{elements:o}=r(),{host:c,padding:s,viewport:d,content:u}=o,f=ht(e),b=f?{}:e,{elements:p}=b,{host:h,padding:E,viewport:P,content:A}=p||{},m=f?e:b.target,S=gt(m,"textarea"),H=m.ownerDocument,I=H.documentElement,B=m===H.body,k=H.defaultView,R=un.bind(0,[m]),j=dl.bind(0,[m]),G=fr.bind(0,[m]),q=R.bind(0,dt,d),z=j.bind(0,dt,u),y=q(P),v=y===m,O=v&&B,g=!v&&z(A),w=!v&&ht(y)&&y===g,$=w&&!!G(u),x=$?q():y,C=$?g:z(),L=O?I:w?x:y,V=S?R(dt,c,h):m,M=O?L:V,_=w?C:g,X=H.activeElement,W=!v&&k.top===k&&X===m,T={W:m,Z:M,J:L,K:!v&&j(dt,s,E),tt:_,nt:!v&&!l&&a&&a(t),ot:O?I:L,st:O?H:L,et:k,ct:H,rt:S,it:B,lt:f,ut:v,dt:w,ft:(te,pe)=>Ol(L,v?me:ze,v?pe:te),_t:(te,pe,oe)=>Ve(L,v?me:ze,v?pe:te,oe)},F=fe(T).reduce((te,pe)=>{let oe=T[pe];return U(te,oe&&!Pe(oe)?oe:!1)},[]),J=n(te=>te?tr(F,te)>-1:null,"elementIsGenerated"),{W:K,Z,K:ne,J:D,tt:Q,nt:ie}=T,se=[()=>{ce(Z,me),ce(Z,Nt),ce(K,Nt),B&&(ce(I,me),ce(I,Nt))}],De=S&&J(Z),Re=S?K:nr([Q,D,ne,Z,K].find(te=>J(te)===!1)),We=O?K:Q||D;return[T,()=>{re(Z,me,v?"viewport":"host"),re(ne,Yt,""),re(Q,$r,""),v||re(D,ze,"");let te=B&&!v?He(Pe(m),nl):ve;if(De&&(gr(K,Z),U(se,()=>{gr(Z,K),Oe(Z)})),he(We,Re),he(Z,ne),he(ne||Z,!v&&D),he(D,Q),U(se,()=>{te(),ce(ne,Yt),ce(Q,$r),ce(D,il),ce(D,ol),ce(D,ze),J(Q)&&jt(Q),J(D)&&jt(D),J(ne)&&jt(ne)}),l&&!v&&(Ve(D,ze,al,!0),U(se,ce.bind(0,D,ze))),ie&&($l(D,ie),U(se,Oe.bind(0,ie))),W){let pe=re(D,ct);re(D,ct,"-1"),D.focus();let oe=n(()=>pe?re(D,ct,pe):ce(D,ct),"revertViewportTabIndex"),Ne=ee(H,"pointerdown keydown",()=>{oe(),Ne()});U(se,[oe,Ne])}else X&&X.focus&&X.focus();Re=0},Ce.bind(0,se)]},"createStructureSetupElements"),hn=n((e,t)=>{let{tt:r}=e,[l]=t;return i=>{let{V:a}=ue(),{ht:o}=l(),{vt:c}=i,s=(r||!a)&&c;return s&&le(r,{height:o?"":"100%"}),{gt:s,wt:s}}},"createTrinsicUpdateSegment"),gn=n((e,t)=>{let[r,l]=t,{Z:i,K:a,J:o,ut:c}=e,[s,d]=ge({u:zl,o:Sr()},Sr.bind(0,i,"padding",""));return(u,f,b)=>{let[p,h]=d(b),{I:E,V:P}=ue(),{bt:A}=r(),{gt:m,wt:S,yt:H}=u,[I,B]=f("paddingAbsolute");(m||h||!P&&S)&&([p,h]=s(b));let k=!c&&(B||H||h);if(k){let R=!I||!a&&!E,j=p.r+p.l,G=p.t+p.b,q={marginRight:R&&!A?-j:0,marginBottom:R?-G:0,marginLeft:R&&A?-j:0,top:R?-p.t:0,right:R?A?-p.r:"auto":0,left:R?A?"auto":-p.l:0,width:R?`calc(100% + ${j}px)`:""},z={paddingTop:R?p.t:0,paddingRight:R?p.r:0,paddingBottom:R?p.b:0,paddingLeft:R?p.l:0};le(a||o,q),le(o,z),l({K:p,St:!R,P:a?z:Y({},q,z)})}return{xt:k}}},"createPaddingUpdateSegment"),{max:Gt}=Math,ke=Gt.bind(0,0),fl="visible",kr="hidden",mn=42,ut={u:Yr,o:{w:0,h:0}},wn={u:Zr,o:{x:kr,y:kr}},yn=n((e,t)=>{let r=window.devicePixelRatio%1!==0?1:0,l={w:ke(e.w-t.w),h:ke(e.h-t.h)};return{w:l.w>r?l.w:0,h:l.h>r?l.h:0}},"getOverflowAmount"),pt=n(e=>e.indexOf(fl)===0,"overflowIsVisible"),Sn=n((e,t)=>{let[r,l]=t,{Z:i,K:a,J:o,nt:c,ut:s,_t:d,it:u,et:f}=e,{k:b,V:p,I:h,A:E}=ue(),P=Xe()[pr],A=!s&&!h&&(E.x||E.y),m=u&&s,[S,H]=ge(ut,yt.bind(0,o)),[I,B]=ge(ut,wt.bind(0,o)),[k,R]=ge(ut),[j,G]=ge(ut),[q]=ge(wn),z=n(($,x)=>{if(le(o,{height:""}),x){let{St:C,K:L}=r(),{$t:V,D:M}=$,_=yt(i),X=vt(i),W=le(o,"boxSizing")==="content-box",T=C||W?L.b+L.t:0,F=!(E.x&&W);le(o,{height:X.h+_.h+(V.x&&F?M.x:0)-T})}},"fixFlexboxGlue"),y=n(($,x)=>{let C=!h&&!$?mn:0,L=n((K,Z,ne)=>{let D=le(o,K),Q=(x?x[K]:D)==="scroll";return[D,Q,Q&&!h?Z?C:ne:0,Z&&!!C]},"getStatePerAxis"),[V,M,_,X]=L("overflowX",E.x,b.x),[W,T,F,J]=L("overflowY",E.y,b.y);return{Ct:{x:V,y:W},$t:{x:M,y:T},D:{x:_,y:F},M:{x:X,y:J}}},"getViewportOverflowState"),v=n(($,x,C,L)=>{let V=n((T,F)=>{let J=pt(T),K=F&&J&&T.replace(`${fl}-`,"")||"";return[F&&!J?T:"",pt(K)?"hidden":K]},"setAxisOverflowStyle"),[M,_]=V(C.x,x.x),[X,W]=V(C.y,x.y);return L.overflowX=_&&X?_:M,L.overflowY=W&&M?W:X,y($,L)},"setViewportOverflowState"),O=n(($,x,C,L)=>{let{D:V,M}=$,{x:_,y:X}=M,{x:W,y:T}=V,{P:F}=r(),J=x?"marginLeft":"marginRight",K=x?"paddingLeft":"paddingRight",Z=F[J],ne=F.marginBottom,D=F[K],Q=F.paddingBottom;L.width=`calc(100% + ${T+-1*Z}px)`,L[J]=-T+Z,L.marginBottom=-W+ne,C&&(L[K]=D+(X?T:0),L.paddingBottom=Q+(_?W:0))},"hideNativeScrollbars"),[g,w]=P?P.H(A,p,o,c,r,y,O):[()=>A,()=>[ve]];return($,x,C)=>{let{gt:L,Ot:V,wt:M,xt:_,vt:X,yt:W}=$,{ht:T,bt:F}=r(),[J,K]=x("showNativeOverlaidScrollbars"),[Z,ne]=x("overflow"),D=J&&E.x&&E.y,Q=!s&&!p&&(L||M||V||K||X),ie=pt(Z.x),se=pt(Z.y),De=ie||se,Re=H(C),We=B(C),te=R(C),pe=G(C),oe;if(K&&h&&d(al,Fl,!D),Q&&(oe=y(D),z(oe,T)),L||_||M||W||K){De&&d(Qe,Ge,!1);let[Ee,$e]=w(D,F,oe),[be,tt]=Re=S(C),[Ae,ml]=We=I(C),zt=vt(o),kt=Ae,Mt=zt;Ee(),(ml||tt||K)&&$e&&!D&&g($e,Ae,be,F)&&(Mt=vt(o),kt=wt(o));let wl={w:ke(Gt(Ae.w,kt.w)+be.w),h:ke(Gt(Ae.h,kt.h)+be.h)},vr={w:ke((m?f.innerWidth:Mt.w+ke(zt.w-Ae.w))+be.w),h:ke((m?f.innerHeight+be.h:Mt.h+ke(zt.h-Ae.h))+be.h)};pe=j(vr),te=k(yn(wl,vr),C)}let[Ne,et]=pe,[Ue,Je]=te,[At,Lt]=We,[Ht,Pt]=Re,xe={x:Ue.w>0,y:Ue.h>0},ot=ie&&se&&(xe.x||xe.y)||ie&&xe.x&&!xe.y||se&&xe.y&&!xe.x;if(_||W||Pt||Lt||et||Je||ne||K||Q){let Ee={marginRight:0,marginBottom:0,marginLeft:0,width:"",overflowY:"",overflowX:""},$e=v(D,xe,Z,Ee),be=g($e,At,Ht,F);s||O($e,F,be,Ee),Q&&z($e,T),s?(re(i,il,Ee.overflowX),re(i,ol,Ee.overflowY)):le(o,Ee)}Ve(i,me,Ge,ot),Ve(a,Yt,jl,ot),s||Ve(o,ze,Qe,De);let[It,Rt]=q(y(D).Ct);return l({Ct:It,zt:{x:Ne.w,y:Ne.h},Tt:{x:Ue.w,y:Ue.h},Et:xe}),{It:Rt,At:et,Lt:Je}}},"createOverflowUpdateSegment"),Mr=n((e,t,r)=>{let l={},i=t||{},a=fe(e).concat(fe(i));return N(a,o=>{let c=e[o],s=i[o];l[o]=!!(r||c||s)}),l},"prepareUpdateHints"),xn=n((e,t)=>{let{W:r,J:l,_t:i,ut:a}=e,{I:o,A:c,V:s}=ue(),d=!o&&(c.x||c.y),u=[hn(e,t),gn(e,t),Sn(e,t)];return(f,b,p)=>{let h=Mr(Y({gt:!1,xt:!1,yt:!1,vt:!1,At:!1,Lt:!1,It:!1,Ot:!1,wt:!1},b),{},p),E=d||!s,P=E&&we(l),A=E&&Le(l);i("",St,!0);let m=h;return N(u,S=>{m=Mr(m,S(m,f,!!p)||{},p)}),we(l,P),Le(l,A),i("",St),a||(we(r,0),Le(r,0)),m}},"createStructureSetupUpdate"),On=n((e,t,r)=>{let l,i=!1,a=n(()=>{i=!0},"destroy"),o=n(c=>{if(r){let s=r.reduce((d,u)=>{if(u){let[f,b]=u,p=b&&f&&(c?c(f):Xr(f,e));p&&p.length&&b&&Be(b)&&U(d,[p,b.trim()],!0)}return d},[]);N(s,d=>N(d[0],u=>{let f=d[1],b=l.get(u)||[];if(e.contains(u)){let p=ee(u,f,h=>{i?(p(),l.delete(u)):t(h)});l.set(u,U(b,p))}else Ce(b),l.delete(u)}))}},"updateElements");return r&&(l=new WeakMap,o()),[a,o]},"createEventContentChange"),Tr=n((e,t,r,l)=>{let i=!1,{Ht:a,Pt:o,Dt:c,Mt:s,Rt:d,kt:u}=l||{},f=ar(()=>{i&&r(!0)},{v:33,g:99}),[b,p]=On(e,f,c),h=a||[],E=o||[],P=h.concat(E),A=n((S,H)=>{let I=d||ve,B=u||ve,k=new Set,R=new Set,j=!1,G=!1;if(N(S,q=>{let{attributeName:z,target:y,type:v,oldValue:O,addedNodes:g,removedNodes:w}=q,$=v==="attributes",x=v==="childList",C=e===y,L=$&&Be(z)?re(y,z):0,V=L!==0&&O!==L,M=tr(E,z)>-1&&V;if(t&&(x||!C)){let _=!$,X=$&&V,W=X&&s&&gt(y,s),T=(W?!I(y,z,O,L):_||X)&&!B(q,!!W,e,l);N(g,F=>k.add(F)),N(w,F=>k.add(F)),G=G||T}!t&&C&&V&&!I(y,z,O,L)&&(R.add(z),j=j||M)}),k.size>0&&p(q=>je(k).reduce((z,y)=>(U(z,Xr(q,y)),gt(y,q)?U(z,y):z),[])),t)return!H&&G&&r(!1),[!1];if(R.size>0||j){let q=[je(R),j];return!H&&r.apply(0,q),q}},"observerCallback"),m=new Il(S=>A(S));return m.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:P,subtree:t,childList:t,characterData:t}),i=!0,[()=>{i&&(b(),m.disconnect(),i=!1)},()=>{if(i){f.m();let S=m.takeRecords();return!rr(S)&&A(S,!0)}}]},"createDOMObserver"),ft=3333333,bt=n(e=>e&&(e.height||e.width),"domRectHasDimensions"),bl=n((e,t,r)=>{let{Bt:l=!1,Vt:i=!1}=r||{},a=Xe()[nn],{B:o}=ue(),c=Wr(`<div class="${dr}"><div class="${Xl}"></div></div>`)[0],s=c.firstChild,d=lt.bind(0,e),[u]=ge({o:void 0,_:!0,u:(h,E)=>!(!h||!bt(h)&&bt(E))}),f=n(h=>{let E=Se(h)&&h.length>0&&rt(h[0]),P=!E&&er(h[0]),A=!1,m=!1,S=!0;if(E){let[H,,I]=u(h.pop().contentRect),B=bt(H),k=bt(I);A=!I||!B,m=!k&&B,S=!A}else P?[,S]=h:m=h===!0;if(l&&S){let H=P?h[0]:lt(c);we(c,H?o.n?-ft:o.i?0:ft:ft),Le(c,ft)}A||t({gt:!P,Yt:P?h:void 0,Vt:!!m})},"onSizeChangedCallbackProxy"),b=[],p=i?f:!1;return[()=>{Ce(b),Oe(c)},()=>{if(Ze){let h=new Ze(f);h.observe(s),U(b,()=>{h.disconnect()})}else if(a){let[h,E]=a.O(s,f,i);p=h,U(b,E)}if(l){let[h]=ge({o:void 0},d);U(b,ee(c,"scroll",E=>{let P=h(),[A,m,S]=P;m&&(or(s,"ltr rtl"),A?He(s,"rtl"):He(s,"ltr"),f([!!A,m,S])),Qr(E)}))}p&&(He(c,ql),U(b,ee(c,"animationstart",p,{C:!!Ze}))),(Ze||a)&&he(e,c)}]},"createSizeObserver"),Cn=n(e=>e.h===0||e.isIntersecting||e.intersectionRatio>0,"isHeightIntrinsic"),En=n((e,t)=>{let r,l=Fe(Wl),i=[],[a]=ge({o:!1}),o=n((s,d)=>{if(s){let u=a(Cn(s)),[,f]=u;if(f)return!d&&t(u),[u]}},"triggerOnTrinsicChangedCallback"),c=n((s,d)=>{if(s&&s.length>0)return o(s.pop(),d)},"intersectionObserverCallback");return[()=>{Ce(i),Oe(l)},()=>{if(mr)r=new mr(s=>c(s),{root:e}),r.observe(l),U(i,()=>{r.disconnect()});else{let s=n(()=>{let f=qe(l);o(f)},"onSizeChanged"),[d,u]=bl(l,s);U(i,d),u(),s()}he(e,l)},()=>{if(r)return c(r.takeRecords(),!0)}]},"createTrinsicObserver"),_r=`[${me}]`,$n=`[${ze}]`,qt=["tabindex"],Br=["wrap","cols","rows"],Xt=["id","class","style","open"],An=n((e,t,r)=>{let l,i,a,{Z:o,J:c,tt:s,rt:d,ut:u,ft:f,_t:b}=e,{V:p}=ue(),[h]=ge({u:Yr,o:{w:0,h:0}},()=>{let v=f(Qe,Ge),O=f(Vt,""),g=O&&we(c),w=O&&Le(c);b(Qe,Ge),b(Vt,""),b("",St,!0);let $=wt(s),x=wt(c),C=yt(c);return b(Qe,Ge,v),b(Vt,"",O),b("",St),we(c,g),Le(c,w),{w:x.w+$.w+C.w,h:x.h+$.h+C.h}}),E=d?Br:Xt.concat(Br),P=ar(r,{v:()=>l,g:()=>i,p(v,O){let[g]=v,[w]=O;return[fe(g).concat(fe(w)).reduce(($,x)=>($[x]=g[x]||w[x],$),{})]}}),A=n(v=>{N(v||qt,O=>{if(tr(qt,O)>-1){let g=re(o,O);Be(g)?re(c,O,g):ce(c,O)}})},"updateViewportAttrsFromHost"),m=n((v,O)=>{let[g,w]=v,$={vt:w};return t({ht:g}),!O&&r($),$},"onTrinsicChanged"),S=n(({gt:v,Yt:O,Vt:g})=>{let w=!v||g?r:P,$=!1;if(O){let[x,C]=O;$=C,t({bt:x})}w({gt:v,yt:$})},"onSizeChanged"),H=n((v,O)=>{let[,g]=h(),w={wt:g};return g&&!O&&(v?r:P)(w),w},"onContentMutation"),I=n((v,O,g)=>{let w={Ot:O};return O?!g&&P(w):u||A(v),w},"onHostMutation"),[B,k,R]=s||!p?En(o,m):[ve,ve,ve],[j,G]=u?[ve,ve]:bl(o,S,{Vt:!0,Bt:!0}),[q,z]=Tr(o,!1,I,{Pt:Xt,Ht:Xt.concat(qt)}),y=u&&Ze&&new Ze(S.bind(0,{gt:!0}));return y&&y.observe(o),A(),[()=>{B(),j(),a&&a[0](),y&&y.disconnect(),q()},()=>{G(),k()},()=>{let v={},O=z(),g=R(),w=a&&a[1]();return O&&Y(v,I.apply(0,U(O,!0))),g&&Y(v,m.apply(0,U(g,!0))),w&&Y(v,H.apply(0,U(w,!0))),v},v=>{let[O]=v("update.ignoreMutation"),[g,w]=v("update.attributes"),[$,x]=v("update.elementEvents"),[C,L]=v("update.debounce"),V=x||w,M=n(_=>ye(O)&&O(_),"ignoreMutationFromOptions");if(V&&(a&&(a[1](),a[0]()),a=Tr(s||c,!0,H,{Ht:E.concat(g||[]),Dt:$,Mt:_r,kt:(_,X)=>{let{target:W,attributeName:T}=_;return(!X&&T&&!u?El(W,_r,$n):!1)||!!Ye(W,`.${de}`)||!!M(_)}})),L)if(P.m(),Se(C)){let _=C[0],X=C[1];l=_e(_)&&_,i=_e(X)&&X}else _e(C)?(l=C,i=!1):(l=!1,i=!1)}]},"createStructureSetupObservers"),Dr={x:0,y:0},Ln=n(e=>({K:{t:0,r:0,b:0,l:0},St:!1,P:{marginRight:0,marginBottom:0,marginLeft:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},zt:Dr,Tt:Dr,Ct:{x:"hidden",y:"hidden"},Et:{x:!1,y:!1},ht:!1,bt:lt(e.Z)}),"createInitialStructureSetupUpdateState"),Hn=n((e,t)=>{let r=Zt(t,{}),[l,i,a]=cr(),[o,c,s]=vn(e),d=pl(Ln(o)),[u,f]=d,b=xn(o,d),p=n((S,H,I)=>{let B=fe(S).some(k=>S[k])||!lr(H)||I;return B&&a("u",[S,H,I]),B},"triggerUpdateEvent"),[h,E,P,A]=An(o,f,S=>p(b(r,S),{},!1)),m=u.bind(0);return m.jt=S=>l("u",S),m.Nt=()=>{let{W:S,J:H}=o,I=we(S),B=Le(S);E(),c(),we(H,I),Le(H,B)},m.qt=o,[(S,H)=>{let I=Zt(t,S,H);return A(I),p(b(I,P(),H),S,!!H)},m,()=>{i(),h(),s()}]},"createStructureSetup"),{round:Nr}=Math,Pn=n(e=>{let{width:t,height:r}=Me(e),{w:l,h:i}=qe(e);return{x:Nr(t)/l||1,y:Nr(r)/i||1}},"getScale"),In=n((e,t,r)=>{let l=t.scrollbars,{button:i,isPrimary:a,pointerType:o}=e,{pointers:c}=l;return i===0&&a&&l[r?"dragScroll":"clickScroll"]&&(c||[]).includes(o)},"continuePointerDown"),Rn=n((e,t)=>ee(e,"mousedown",ee.bind(0,t,"click",Qr,{C:!0,$:!0}),{$:!0}),"createRootClickStopPropagationEvents"),Vr="pointerup pointerleave pointercancel lostpointercapture",zn=n((e,t,r,l,i,a,o)=>{let{B:c}=ue(),{Ft:s,Gt:d,Xt:u}=l,f=`scroll${o?"Left":"Top"}`,b=`client${o?"X":"Y"}`,p=o?"width":"height",h=o?"left":"top",E=o?"w":"h",P=o?"x":"y",A=n((m,S)=>H=>{let{Tt:I}=a(),B=qe(d)[E]-qe(s)[E],k=S*H/B*I[P],R=lt(u)&&o?c.n||c.i?1:-1:1;i[f]=m+k*R},"createRelativeHandleMove");return ee(d,"pointerdown",m=>{let S=Ye(m.target,`.${ur}`)===s,H=S?s:d;if(Ve(t,me,Er,!0),In(m,e,S)){let I=!S&&m.shiftKey,B=n(()=>Me(s),"getHandleRect"),k=n(()=>Me(d),"getTrackRect"),R=n((x,C)=>(x||B())[h]-(C||k())[h],"getHandleOffset"),j=A(i[f]||0,1/Pn(i)[P]),G=m[b],q=B(),z=k(),y=q[p],v=R(q,z)+y/2,O=G-z[h],g=S?0:O-v,w=n(x=>{Ce($),H.releasePointerCapture(x.pointerId)},"releasePointerCapture"),$=[Ve.bind(0,t,me,Er),ee(r,Vr,w),ee(r,"selectstart",x=>el(x),{S:!1}),ee(d,Vr,w),ee(d,"pointermove",x=>{let C=x[b]-G;(S||I)&&j(g+C)})];if(I)j(g);else if(!S){let x=Xe()[on];x&&U($,x.O(j,R,g,y,O))}H.setPointerCapture(m.pointerId)}})},"createInteractiveScrollEvents"),kn=n((e,t)=>(r,l,i,a,o,c)=>{let{Xt:s}=r,[d,u]=Ke(333),f=!!o.scrollBy,b=!0;return Ce.bind(0,[ee(s,"pointerenter",()=>{l(Lr,!0)}),ee(s,"pointerleave pointercancel",()=>{l(Lr)}),ee(s,"wheel",p=>{let{deltaX:h,deltaY:E,deltaMode:P}=p;f&&b&&P===0&&Pe(s)===a&&o.scrollBy({left:h,top:E,behavior:"smooth"}),b=!1,l(Ir,!0),d(()=>{b=!0,l(Ir)}),el(p)},{S:!1,$:!0}),Rn(s,i),zn(e,a,i,r,o,t,c),u])},"createScrollbarsSetupEvents"),{min:Qt,max:Fr,abs:Mn,round:Tn}=Math,vl=n((e,t,r,l)=>{if(l){let c=r?"x":"y",{Tt:s,zt:d}=l,u=d[c],f=s[c];return Fr(0,Qt(1,u/(u+f)))}let i=r?"w":"h",a=qe(e)[i],o=qe(t)[i];return Fr(0,Qt(1,a/o))},"getScrollbarHandleLengthRatio"),_n=n((e,t,r,l,i,a)=>{let{B:o}=ue(),c=a?"x":"y",s=a?"Left":"Top",{Tt:d}=l,u=Tn(d[c]),f=Mn(r[`scroll${s}`]),b=a&&i,p=o.i?f:u-f,h=Qt(1,(b?p:f)/u),E=vl(e,t,a);return 1/E*(1-E)*h},"getScrollbarHandleOffsetRatio"),Bn=n((e,t,r)=>{let{N:l,L:i}=ue(),{scrollbars:a}=l(),{slot:o}=a,{ct:c,W:s,Z:d,J:u,lt:f,ot:b,it:p,ut:h}=t,{scrollbars:E}=f?{}:e,{slot:P}=E||{},A=dl([s,d,u],()=>h&&p?s:d,o,P),m=n((g,w,$)=>{let x=$?He:or;N(g,C=>{x(C.Xt,w)})},"scrollbarStructureAddRemoveClass"),S=n((g,w)=>{N(g,$=>{let[x,C]=w($);le(x,C)})},"scrollbarsHandleStyle"),H=n((g,w,$)=>{S(g,x=>{let{Ft:C,Gt:L}=x;return[C,{[$?"width":"height"]:`${(100*vl(C,L,$,w)).toFixed(3)}%`}]})},"scrollbarStructureRefreshHandleLength"),I=n((g,w,$)=>{let x=$?"X":"Y";S(g,C=>{let{Ft:L,Gt:V,Xt:M}=C,_=_n(L,V,b,w,lt(M),$);return[L,{transform:_===_?`translate${x}(${(100*_).toFixed(3)}%)`:""}]})},"scrollbarStructureRefreshHandleOffset"),B=[],k=[],R=[],j=n((g,w,$)=>{let x=er($),C=x?$:!0,L=x?!$:!0;C&&m(k,g,w),L&&m(R,g,w)},"scrollbarsAddRemoveClass"),G=n(g=>{H(k,g,!0),H(R,g)},"refreshScrollbarsHandleLength"),q=n(g=>{I(k,g,!0),I(R,g)},"refreshScrollbarsHandleOffset"),z=n(g=>{let w=g?Yl:Zl,$=g?k:R,x=rr($)?Ar:"",C=Fe(`${de} ${w} ${x}`),L=Fe(sl),V=Fe(ur),M={Xt:C,Gt:L,Ft:V};return i||He(C,Ul),he(C,L),he(L,V),U($,M),U(B,[Oe.bind(0,C),r(M,j,c,d,b,g)]),M},"generateScrollbarDOM"),y=z.bind(0,!0),v=z.bind(0,!1),O=n(()=>{he(A,k[0].Xt),he(A,R[0].Xt),mt(()=>{j(Ar)},300)},"appendElements");return y(),v(),[{Ut:G,Wt:q,Zt:j,Jt:{Kt:k,Qt:y,tn:S.bind(0,k)},nn:{Kt:R,Qt:v,tn:S.bind(0,R)}},O,Ce.bind(0,B)]},"createScrollbarsSetupElements"),Dn=n((e,t,r,l)=>{let i,a,o,c,s,d=0,u=pl({}),[f]=u,[b,p]=Ke(),[h,E]=Ke(),[P,A]=Ke(100),[m,S]=Ke(100),[H,I]=Ke(()=>d),[B,k,R]=Bn(e,r.qt,kn(t,r)),{Z:j,J:G,ot:q,st:z,ut:y,it:v}=r.qt,{Jt:O,nn:g,Zt:w,Ut:$,Wt:x}=B,{tn:C}=O,{tn:L}=g,V=n(T=>{let{Xt:F}=T,J=y&&!v&&Pe(F)===G&&F;return[J,{transform:J?`translate(${we(q)}px, ${Le(q)}px)`:""}]},"styleScrollbarPosition"),M=n((T,F)=>{if(I(),T)w(Pr);else{let J=n(()=>w(Pr,!0),"hide");d>0&&!F?H(J):J()}},"manageScrollbarsAutoHide"),_=n(()=>{c=a,c&&M(!0)},"onHostMouseEnter"),X=[A,I,S,E,p,R,ee(j,"pointerover",_,{C:!0}),ee(j,"pointerenter",_),ee(j,"pointerleave",()=>{c=!1,a&&M(!1)}),ee(j,"pointermove",()=>{i&&b(()=>{A(),M(!0),m(()=>{i&&M(!1)})})}),ee(z,"scroll",T=>{h(()=>{x(r()),o&&M(!0),P(()=>{o&&!c&&M(!1)})}),l(T),y&&C(V),y&&L(V)})],W=f.bind(0);return W.qt=B,W.Nt=k,[(T,F,J)=>{let{At:K,Lt:Z,It:ne,yt:D}=J,{A:Q}=ue(),ie=Zt(t,T,F),se=r(),{Tt:De,Ct:Re,bt:We}=se,[te,pe]=ie("showNativeOverlaidScrollbars"),[oe,Ne]=ie("scrollbars.theme"),[et,Ue]=ie("scrollbars.visibility"),[Je,At]=ie("scrollbars.autoHide"),[Lt]=ie("scrollbars.autoHideDelay"),[Ht,Pt]=ie("scrollbars.dragScroll"),[xe,ot]=ie("scrollbars.clickScroll"),It=K||Z||D,Rt=ne||Ue,Ee=te&&Q.x&&Q.y,$e=n((be,tt)=>{let Ae=et==="visible"||et==="auto"&&be==="scroll";return w(Gl,Ae,tt),Ae},"setScrollbarVisibility");if(d=Lt,pe&&w(Jl,Ee),Ne&&(w(s),w(oe,!0),s=oe),At&&(i=Je==="move",a=Je==="leave",o=Je!=="never",M(!o,!0)),Pt&&w(tn,Ht),ot&&w(en,xe),Rt){let be=$e(Re.x,!0),tt=$e(Re.y,!1);w(Ql,!(be&&tt))}It&&($(se),x(se),w(Hr,!De.x,!0),w(Hr,!De.y,!1),w(Kl,We&&!v))},W,Ce.bind(0,X)]},"createScrollbarsSetup"),hl=n((e,t,r)=>{ye(e)&&e(t||void 0,r||void 0)},"invokePluginInstance"),Te=n((e,t,r)=>{let{F:l,N:i,Y:a,j:o}=ue(),c=Xe(),s=ht(e),d=s?e:e.target,u=ul(d);if(t&&!u){let f=!1,b=n(y=>{let v=Xe()[ln],O=v&&v.O;return O?O(y,!0):y},"validateOptions"),p=Y({},l(),b(t)),[h,E,P]=cr(r),[A,m,S]=Hn(e,p),[H,I,B]=Dn(e,p,m,y=>P("scroll",[z,y])),k=n((y,v)=>A(y,!!v),"update"),R=k.bind(0,{},!0),j=a(R),G=o(R),q=n(y=>{bn(d),j(),G(),B(),S(),f=!0,P("destroyed",[z,!!y]),E()},"destroy"),z={options(y,v){if(y){let O=v?l():{},g=tl(p,Y(O,b(y)));lr(g)||(Y(p,g),k(g))}return Y({},p)},on:h,off:(y,v)=>{y&&v&&E(y,v)},state(){let{zt:y,Tt:v,Ct:O,Et:g,K:w,St:$,bt:x}=m();return Y({},{overflowEdge:y,overflowAmount:v,overflowStyle:O,hasOverflow:g,padding:w,paddingAbsolute:$,directionRTL:x,destroyed:f})},elements(){let{W:y,Z:v,K:O,J:g,tt:w,ot:$,st:x}=m.qt,{Jt:C,nn:L}=I.qt,V=n(_=>{let{Ft:X,Gt:W,Xt:T}=_;return{scrollbar:T,track:W,handle:X}},"translateScrollbarStructure"),M=n(_=>{let{Kt:X,Qt:W}=_,T=V(X[0]);return Y({},T,{clone:()=>{let F=V(W());return H({},!0,{}),F}})},"translateScrollbarsSetupElement");return Y({},{target:y,host:v,padding:O||g,viewport:g,content:w||g,scrollOffsetElement:$,scrollEventElement:x,scrollbarHorizontal:M(C),scrollbarVertical:M(L)})},update:y=>k({},y),destroy:q.bind(0)};return m.jt((y,v,O)=>{H(v,O,y)}),fn(d,z),N(fe(c),y=>hl(c[y],0,z)),pn(m.qt.it,i().cancel,!s&&e.cancel)?(q(!0),z):(m.Nt(),I.Nt(),P("initialized",[z]),m.jt((y,v,O)=>{let{gt:g,yt:w,vt:$,At:x,Lt:C,It:L,wt:V,Ot:M}=y;P("updated",[z,{updateHints:{sizeChanged:g,directionChanged:w,heightIntrinsicChanged:$,overflowEdgeChanged:x,overflowAmountChanged:C,overflowStyleChanged:L,contentMutation:V,hostMutation:M},changedOptions:v,force:O}])}),z.update(!0),z)}return u},"OverlayScrollbars");Te.plugin=e=>{N(rn(e),t=>hl(t,Te))};Te.valid=e=>{let t=e&&e.elements,r=ye(t)&&t();return Wt(r)&&!!ul(r.target)};Te.env=()=>{let{k:e,A:t,I:r,B:l,V:i,L:a,X:o,U:c,N:s,q:d,F:u,G:f}=ue();return Y({},{scrollbarsSize:e,scrollbarsOverlaid:t,scrollbarsHiding:r,rtlScrollBehavior:l,flexboxGlue:i,cssCustomProperties:a,staticDefaultInitialization:o,staticDefaultOptions:c,getDefaultInitialization:s,setDefaultInitialization:d,getDefaultOptions:u,setDefaultOptions:f})};var Nn=n(()=>{if(typeof window>"u"){let d=n(()=>{},"n2");return[d,d]}let e,t,r=window,l=typeof r.requestIdleCallback=="function",i=r.requestAnimationFrame,a=r.cancelAnimationFrame,o=l?r.requestIdleCallback:i,c=l?r.cancelIdleCallback:a,s=n(()=>{c(e),a(t)},"s2");return[(d,u)=>{s(),e=o(l?()=>{s(),t=i(d)}:d,typeof u=="object"?u:{timeout:2233})},s]},"O2"),Vn=n(e=>{let{options:t,events:r,defer:l}=e||{},[i,a]=ae.useMemo(Nn,[]),o=ae.useRef(null),c=ae.useRef(l),s=ae.useRef(t),d=ae.useRef(r);return ae.useEffect(()=>{c.current=l},[l]),ae.useEffect(()=>{let{current:u}=o;s.current=t,Te.valid(u)&&u.options(t||{},!0)},[t]),ae.useEffect(()=>{let{current:u}=o;d.current=r,Te.valid(u)&&u.on(r||{},!0)},[r]),ae.useEffect(()=>()=>{var u;a(),(u=o.current)==null||u.destroy()},[]),ae.useMemo(()=>[u=>{let f=o.current;if(Te.valid(f))return;let b=c.current,p=s.current||{},h=d.current||{},E=n(()=>o.current=Te(u,p,h),"p2");b?i(E,b):E()},()=>o.current],[])},"S2"),Fn=n((e,t)=>{let{element:r="div",options:l,events:i,defer:a,children:o,...c}=e,s=r,d=ae.useRef(null),u=ae.useRef(null),[f,b]=Vn({options:l,events:i,defer:a});return ae.useEffect(()=>{let{current:p}=d,{current:h}=u;return p&&h&&f({target:p,elements:{viewport:h,content:h}}),()=>{var E;return(E=b())==null?void 0:E.destroy()}},[f,r]),ae.useImperativeHandle(t,()=>({osInstance:b,getElement:()=>d.current}),[]),hr.createElement(s,{"data-overlayscrollbars-initialize":"",ref:d,...c},hr.createElement("div",{ref:u},o))},"F2"),gl=ae.forwardRef(Fn),Qn=gl,ei=gl;export{Qn as OverlayScrollbars,ei as default};
//# sourceMappingURL=OverlayScrollbars-OGE3XJTA-6a36841b.js.map
