var xe=Object.defineProperty;var l=(e,t)=>xe(e,"name",{value:t,configurable:!0});import{R as f,r as m,n as $,f as ie,T as _e,F as Ee,I as we,g as ye}from"./chunk-HLWAVYOI-q-eHGACU.js";import{g as le}from"./_commonjsHelpers-RFtSs_Ch.js";import{r as Ce}from"./index-KU_5yyTr.js";import{_ as $e,i as G}from"./_getTag-NtD66v87.js";import{i as ke}from"./index-T3d25x_o.js";import"./iframe-EXrcRwRd.js";import"../sb-preview/runtime.js";import"./uniq-rlwX4jXw.js";import"./index-Kg-CViSs.js";function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}l(N,"u");function K(e,t){if(e==null)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(a[r]=e[r]);return a}l(K,"c");function F(e){var t=m.useRef(e),r=m.useRef(function(n){t.current&&t.current(n)});return t.current=e,r.current}l(F,"i");var M=l(function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=1),e>r?r:e<t?t:e},"s"),O=l(function(e){return"touches"in e},"f"),D=l(function(e){return e&&e.ownerDocument.defaultView||self},"v"),Q=l(function(e,t,r){var n=e.getBoundingClientRect(),a=O(t)?function(i,u){for(var o=0;o<i.length;o++)if(i[o].identifier===u)return i[o];return i[0]}(t.touches,r):t;return{left:M((a.pageX-(n.left+D(e).pageXOffset))/n.width),top:M((a.pageY-(n.top+D(e).pageYOffset))/n.height)}},"d"),Z=l(function(e){!O(e)&&e.preventDefault()},"h"),U=f.memo(function(e){var t=e.onMove,r=e.onKey,n=K(e,["onMove","onKey"]),a=m.useRef(null),i=F(t),u=F(r),o=m.useRef(null),s=m.useRef(!1),c=m.useMemo(function(){var w=l(function(b){Z(b),(O(b)?b.touches.length>0:b.buttons>0)&&a.current?i(Q(a.current,b,o.current)):y(!1)},"e"),I=l(function(){return y(!1)},"r");function y(b){var g=s.current,_=D(a.current),k=b?_.addEventListener:_.removeEventListener;k(g?"touchmove":"mousemove",w),k(g?"touchend":"mouseup",I)}return l(y,"t"),[function(b){var g=b.nativeEvent,_=a.current;if(_&&(Z(g),!function(W,R){return R&&!O(W)}(g,s.current)&&_)){if(O(g)){s.current=!0;var k=g.changedTouches||[];k.length&&(o.current=k[0].identifier)}_.focus(),i(Q(_,g,o.current)),y(!0)}},function(b){var g=b.which||b.keyCode;g<37||g>40||(b.preventDefault(),u({left:g===39?.05:g===37?-.05:0,top:g===40?.05:g===38?-.05:0}))},y]},[u,i]),v=c[0],h=c[1],d=c[2];return m.useEffect(function(){return d},[d]),f.createElement("div",N({},n,{onTouchStart:v,onMouseDown:v,className:"react-colorful__interactive",ref:a,onKeyDown:h,tabIndex:0,role:"slider"}))}),H=l(function(e){return e.filter(Boolean).join(" ")},"g"),Y=l(function(e){var t=e.color,r=e.left,n=e.top,a=n===void 0?.5:n,i=H(["react-colorful__pointer",e.className]);return f.createElement("div",{className:i,style:{top:100*a+"%",left:100*r+"%"}},f.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},"p"),x=l(function(e,t,r){return t===void 0&&(t=0),r===void 0&&(r=Math.pow(10,t)),Math.round(r*e)/r},"b"),Ne={grad:.9,turn:360,rad:360/(2*Math.PI)},Ie=l(function(e){return ce(V(e))},"x"),V=l(function(e){return e[0]==="#"&&(e=e.substring(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:e.length===4?x(parseInt(e[3]+e[3],16)/255,2):1}:{r:parseInt(e.substring(0,2),16),g:parseInt(e.substring(2,4),16),b:parseInt(e.substring(4,6),16),a:e.length===8?x(parseInt(e.substring(6,8),16)/255,2):1}},"C"),Se=l(function(e,t){return t===void 0&&(t="deg"),Number(e)*(Ne[t]||1)},"E"),Me=l(function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?Re({h:Se(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},"H"),Re=l(function(e){var t=e.s,r=e.l;return{h:e.h,s:(t*=(r<50?r:100-r)/100)>0?2*t/(r+t)*100:0,v:r+t,a:e.a}},"N"),Te=l(function(e){return He(se(e))},"w"),ue=l(function(e){var t=e.s,r=e.v,n=e.a,a=(200-t)*r/100;return{h:x(e.h),s:x(a>0&&a<200?t*r/100/(a<=100?a:200-a)*100:0),l:x(a/2),a:x(n,2)}},"y"),A=l(function(e){var t=ue(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},"q"),j=l(function(e){var t=ue(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},"k"),se=l(function(e){var t=e.h,r=e.s,n=e.v,a=e.a;t=t/360*6,r/=100,n/=100;var i=Math.floor(t),u=n*(1-r),o=n*(1-(t-i)*r),s=n*(1-(1-t+i)*r),c=i%6;return{r:x(255*[n,o,u,u,s,n][c]),g:x(255*[s,n,n,o,u,u][c]),b:x(255*[u,u,s,n,n,o][c]),a:x(a,2)}},"I"),Oe=l(function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?ce({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},"z"),L=l(function(e){var t=e.toString(16);return t.length<2?"0"+t:t},"D"),He=l(function(e){var t=e.r,r=e.g,n=e.b,a=e.a,i=a<1?L(x(255*a)):"";return"#"+L(t)+L(r)+L(n)+i},"K"),ce=l(function(e){var t=e.r,r=e.g,n=e.b,a=e.a,i=Math.max(t,r,n),u=i-Math.min(t,r,n),o=u?i===t?(r-n)/u:i===r?2+(n-t)/u:4+(t-r)/u:0;return{h:x(60*(o<0?o+6:o)),s:x(i?u/i*100:0),v:x(i/255*100),a}},"L"),fe=f.memo(function(e){var t=e.hue,r=e.onChange,n=H(["react-colorful__hue",e.className]);return f.createElement("div",{className:n},f.createElement(U,{onMove:function(a){r({h:360*a.left})},onKey:function(a){r({h:M(t+360*a.left,0,360)})},"aria-label":"Hue","aria-valuenow":x(t),"aria-valuemax":"360","aria-valuemin":"0"},f.createElement(Y,{className:"react-colorful__hue-pointer",left:t/360,color:A({h:t,s:100,v:100,a:1})})))}),de=f.memo(function(e){var t=e.hsva,r=e.onChange,n={backgroundColor:A({h:t.h,s:100,v:100,a:1})};return f.createElement("div",{className:"react-colorful__saturation",style:n},f.createElement(U,{onMove:function(a){r({s:100*a.left,v:100-100*a.top})},onKey:function(a){r({s:M(t.s+100*a.left,0,100),v:M(t.v-100*a.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+x(t.s)+"%, Brightness "+x(t.v)+"%"},f.createElement(Y,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:A(t)})))}),he=l(function(e,t){if(e===t)return!0;for(var r in e)if(e[r]!==t[r])return!1;return!0},"F"),ge=l(function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")},"P"),Le=l(function(e,t){return e.toLowerCase()===t.toLowerCase()||he(V(e),V(t))},"X");function me(e,t,r){var n=F(r),a=m.useState(function(){return e.toHsva(t)}),i=a[0],u=a[1],o=m.useRef({color:t,hsva:i});m.useEffect(function(){if(!e.equal(t,o.current.color)){var c=e.toHsva(t);o.current={hsva:c,color:t},u(c)}},[t,e]),m.useEffect(function(){var c;he(i,o.current.hsva)||e.equal(c=e.fromHsva(i),o.current.color)||(o.current={hsva:i,color:c},n(c))},[i,e,n]);var s=m.useCallback(function(c){u(function(v){return Object.assign({},v,c)})},[]);return[i,s]}l(me,"Y");var Pe=typeof window<"u"?m.useLayoutEffect:m.useEffect,ze=l(function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},"$"),ee=new Map,ve=l(function(e){Pe(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!ee.has(t)){var r=t.createElement("style");r.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,ee.set(t,r);var n=ze();n&&r.setAttribute("nonce",n),t.head.appendChild(r)}},[])},"Q"),je=l(function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,i=e.onChange,u=K(e,["className","colorModel","color","onChange"]),o=m.useRef(null);ve(o);var s=me(r,a,i),c=s[0],v=s[1],h=H(["react-colorful",t]);return f.createElement("div",N({},u,{ref:o,className:h}),f.createElement(de,{hsva:c,onChange:v}),f.createElement(fe,{hue:c.h,onChange:v,className:"react-colorful__last-control"}))},"U"),Be={defaultColor:"000",toHsva:Ie,fromHsva:function(e){return Te({h:e.h,s:e.s,v:e.v,a:1})},equal:Le},We=l(function(e){return f.createElement(je,N({},e,{colorModel:Be}))},"Z"),Xe=l(function(e){var t=e.className,r=e.hsva,n=e.onChange,a={backgroundImage:"linear-gradient(90deg, "+j(Object.assign({},r,{a:0}))+", "+j(Object.assign({},r,{a:1}))+")"},i=H(["react-colorful__alpha",t]),u=x(100*r.a);return f.createElement("div",{className:i},f.createElement("div",{className:"react-colorful__alpha-gradient",style:a}),f.createElement(U,{onMove:function(o){n({a:o.left})},onKey:function(o){n({a:M(r.a+o.left)})},"aria-label":"Alpha","aria-valuetext":u+"%","aria-valuenow":u,"aria-valuemin":"0","aria-valuemax":"100"},f.createElement(Y,{className:"react-colorful__alpha-pointer",left:r.a,color:j(r)})))},"ee"),pe=l(function(e){var t=e.className,r=e.colorModel,n=e.color,a=n===void 0?r.defaultColor:n,i=e.onChange,u=K(e,["className","colorModel","color","onChange"]),o=m.useRef(null);ve(o);var s=me(r,a,i),c=s[0],v=s[1],h=H(["react-colorful",t]);return f.createElement("div",N({},u,{ref:o,className:h}),f.createElement(de,{hsva:c,onChange:v}),f.createElement(fe,{hue:c.h,onChange:v}),f.createElement(Xe,{hsva:c,onChange:v,className:"react-colorful__last-control"}))},"re"),Fe={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Me,fromHsva:j,equal:ge},De=l(function(e){return f.createElement(pe,N({},e,{colorModel:Fe}))},"ue"),Ve={defaultColor:"rgba(0, 0, 0, 1)",toHsva:Oe,fromHsva:function(e){var t=se(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:ge},Ae=l(function(e){return f.createElement(pe,N({},e,{colorModel:Ve}))},"He"),qe=Ce();const E=le(qe);var Ge=$e,Ke=l(function(){return Ge.Date.now()},"now$1"),Ue=Ke,Ye=/\s/;function Je(e){for(var t=e.length;t--&&Ye.test(e.charAt(t)););return t}l(Je,"trimmedEndIndex$1");var Qe=Je,Ze=Qe,et=/^\s+/;function tt(e){return e&&e.slice(0,Ze(e)+1).replace(et,"")}l(tt,"baseTrim$1");var rt=tt,nt=rt,te=G,at=ke,re=NaN,ot=/^[-+]0x[0-9a-f]+$/i,it=/^0b[01]+$/i,lt=/^0o[0-7]+$/i,ut=parseInt;function st(e){if(typeof e=="number")return e;if(at(e))return re;if(te(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=te(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=nt(e);var r=it.test(e);return r||lt.test(e)?ut(e.slice(2),r?2:8):ot.test(e)?re:+e}l(st,"toNumber$1");var ct=st,ft=G,X=Ue,ne=ct,dt="Expected a function",ht=Math.max,gt=Math.min;function mt(e,t,r){var n,a,i,u,o,s,c=0,v=!1,h=!1,d=!0;if(typeof e!="function")throw new TypeError(dt);t=ne(t)||0,ft(r)&&(v=!!r.leading,h="maxWait"in r,i=h?ht(ne(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d);function w(p){var C=n,T=a;return n=a=void 0,c=p,u=e.apply(T,C),u}l(w,"invokeFunc");function I(p){return c=p,o=setTimeout(g,t),v?w(p):u}l(I,"leadingEdge");function y(p){var C=p-s,T=p-c,J=t-C;return h?gt(J,i-T):J}l(y,"remainingWait");function b(p){var C=p-s,T=p-c;return s===void 0||C>=t||C<0||h&&T>=i}l(b,"shouldInvoke");function g(){var p=X();if(b(p))return _(p);o=setTimeout(g,y(p))}l(g,"timerExpired");function _(p){return o=void 0,d&&n?w(p):(n=a=void 0,u)}l(_,"trailingEdge");function k(){o!==void 0&&clearTimeout(o),c=0,n=s=a=o=void 0}l(k,"cancel");function W(){return o===void 0?u:_(X())}l(W,"flush");function R(){var p=X(),C=b(p);if(n=arguments,a=this,s=p,C){if(o===void 0)return I(s);if(h)return clearTimeout(o),o=setTimeout(g,t),w(s)}return o===void 0&&(o=setTimeout(g,t)),u}return l(R,"debounced"),R.cancel=k,R.flush=W,R}l(mt,"debounce$1");var vt=mt,pt=vt,bt=G,xt="Expected a function";function _t(e,t,r){var n=!0,a=!0;if(typeof e!="function")throw new TypeError(xt);return bt(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),pt(e,t,{leading:n,maxWait:t,trailing:a})}l(_t,"throttle");var Et=_t;const wt=le(Et);var yt=$.div({position:"relative",maxWidth:250}),Ct=$(ie)({position:"absolute",zIndex:1,top:4,left:4}),$t=$.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),kt=$(_e)(({theme:e})=>({fontFamily:e.typography.fonts.base})),Nt=$.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),It=$.div(({theme:e,active:t})=>({width:16,height:16,boxShadow:t?`${e.appBorderColor} 0 0 0 1px inset, ${e.textMutedColor}50 0 0 0 4px`:`${e.appBorderColor} 0 0 0 1px inset`,borderRadius:e.appBorderRadius})),St=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,ae=l(({value:e,active:t,onClick:r,style:n,...a})=>{let i=`linear-gradient(${e}, ${e}), ${St}, linear-gradient(#fff, #fff)`;return f.createElement(It,{...a,active:t,onClick:r,style:{...n,backgroundImage:i}})},"Swatch"),Mt=$(Ee.Input)(({theme:e})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:e.typography.fonts.base})),Rt=$(we)(({theme:e})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:e.input.color})),be=(e=>(e.RGB="rgb",e.HSL="hsl",e.HEX="hex",e))(be||{}),P=Object.values(be),Tt=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Ot=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Ht=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,q=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Lt=/^\s*#?([0-9a-f]{3})\s*$/i,Pt={hex:We,rgb:Ae,hsl:De},z={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},oe=l(e=>{let t=e==null?void 0:e.match(Tt);if(!t)return[0,0,0,1];let[,r,n,a,i=1]=t;return[r,n,a,i].map(Number)},"stringToArgs"),S=l(e=>{if(!e)return;let t=!0;if(Ot.test(e)){let[u,o,s,c]=oe(e),[v,h,d]=E.rgb.hsl([u,o,s])||[0,0,0];return{valid:t,value:e,keyword:E.rgb.keyword([u,o,s]),colorSpace:"rgb",rgb:e,hsl:`hsla(${v}, ${h}%, ${d}%, ${c})`,hex:`#${E.rgb.hex([u,o,s]).toLowerCase()}`}}if(Ht.test(e)){let[u,o,s,c]=oe(e),[v,h,d]=E.hsl.rgb([u,o,s])||[0,0,0];return{valid:t,value:e,keyword:E.hsl.keyword([u,o,s]),colorSpace:"hsl",rgb:`rgba(${v}, ${h}, ${d}, ${c})`,hsl:e,hex:`#${E.hsl.hex([u,o,s]).toLowerCase()}`}}let r=e.replace("#",""),n=E.keyword.rgb(r)||E.hex.rgb(r),a=E.rgb.hsl(n),i=e;if(/[^#a-f0-9]/i.test(e)?i=r:q.test(e)&&(i=`#${r}`),i.startsWith("#"))t=q.test(i);else try{E.keyword.hex(i)}catch{t=!1}return{valid:t,value:i,keyword:E.rgb.keyword(n),colorSpace:"hex",rgb:`rgba(${n[0]}, ${n[1]}, ${n[2]}, 1)`,hsl:`hsla(${a[0]}, ${a[1]}%, ${a[2]}%, 1)`,hex:i}},"parseValue"),zt=l((e,t,r)=>{if(!e||!(t!=null&&t.valid))return z[r];if(r!=="hex")return(t==null?void 0:t[r])||z[r];if(!t.hex.startsWith("#"))try{return`#${E.keyword.hex(t.hex)}`}catch{return z.hex}let n=t.hex.match(Lt);if(!n)return q.test(t.hex)?t.hex:z.hex;let[a,i,u]=n[1].split("");return`#${a}${a}${i}${i}${u}${u}`},"getRealValue"),jt=l((e,t)=>{let[r,n]=m.useState(e||""),[a,i]=m.useState(()=>S(r)),[u,o]=m.useState((a==null?void 0:a.colorSpace)||"hex");m.useEffect(()=>{let h=e||"",d=S(h);n(h),i(d),o((d==null?void 0:d.colorSpace)||"hex")},[e]);let s=m.useMemo(()=>zt(r,a,u).toLowerCase(),[r,a,u]),c=m.useCallback(h=>{let d=S(h),w=(d==null?void 0:d.value)||h||"";n(w),w===""&&(i(void 0),t(void 0)),d&&(i(d),o(d.colorSpace),t(d.value))},[t]),v=m.useCallback(()=>{let h=P.indexOf(u)+1;h>=P.length&&(h=0),o(P[h]);let d=(a==null?void 0:a[P[h]])||"";n(d),t(d)},[a,u,t]);return{value:r,realValue:s,updateValue:c,color:a,colorSpace:u,cycleColorSpace:v}},"useColorInput"),B=l(e=>e.replace(/\s*/,"").toLowerCase(),"id"),Bt=l((e,t,r)=>{let[n,a]=m.useState(t!=null&&t.valid?[t]:[]);m.useEffect(()=>{t===void 0&&a([])},[t]);let i=m.useMemo(()=>(e||[]).map(o=>typeof o=="string"?S(o):o.title?{...S(o.color),keyword:o.title}:S(o.color)).concat(n).filter(Boolean).slice(-27),[e,n]),u=m.useCallback(o=>{o!=null&&o.valid&&(i.some(s=>B(s[r])===B(o[r]))||a(s=>s.concat(o)))},[r,i]);return{presets:i,addPreset:u}},"usePresets"),Wt=l(({name:e,value:t,onChange:r,onFocus:n,onBlur:a,presetColors:i,startOpen:u=!1})=>{let o=m.useCallback(wt(r,200),[r]),{value:s,realValue:c,updateValue:v,color:h,colorSpace:d,cycleColorSpace:w}=jt(t,o),{presets:I,addPreset:y}=Bt(i,h,d),b=Pt[d];return f.createElement(yt,null,f.createElement(Ct,{startOpen:u,closeOnOutsideClick:!0,onVisibleChange:()=>y(h),tooltip:f.createElement($t,null,f.createElement(b,{color:c==="transparent"?"#000000":c,onChange:v,onFocus:n,onBlur:a}),I.length>0&&f.createElement(Nt,null,I.map((g,_)=>f.createElement(ie,{key:`${g.value}-${_}`,hasChrome:!1,tooltip:f.createElement(kt,{note:g.keyword||g.value})},f.createElement(ae,{value:g[d],active:h&&B(g[d])===B(h[d]),onClick:()=>v(g.value)})))))},f.createElement(ae,{value:c,style:{margin:4}})),f.createElement(Mt,{id:ye(e),value:s,onChange:g=>v(g.target.value),onFocus:g=>g.target.select(),placeholder:"Choose color..."}),s?f.createElement(Rt,{icon:"markup",onClick:w}):null)},"ColorControl"),Jt=Wt;export{Wt as ColorControl,Jt as default};