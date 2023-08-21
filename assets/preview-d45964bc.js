var P=Object.defineProperty;var O=(o,t)=>P(o,"name",{value:t,configurable:!0});import{s as g}from"./index-d475d2ea.js";import{M as B}from"./index-4af01cdc.js";import"./_commonjsHelpers-f86d8be3.js";const{addons:Y}=__STORYBOOK_MODULE_PREVIEW_API__,{once:x,logger:K}=__STORYBOOK_MODULE_CLIENT_LOGGER__,{FORCE_REMOUNT:b,STORY_RENDER_PHASE_CHANGED:G,SET_CURRENT_STORY:V,IGNORED_EXCEPTION:$}=__STORYBOOK_MODULE_CORE_EVENTS__;var k=(o=>(o.DONE="done",o.ERROR="error",o.ACTIVE="active",o.WAITING="waiting",o))(k||{}),E={CALL:"storybook/instrumenter/call",SYNC:"storybook/instrumenter/sync",START:"storybook/instrumenter/start",BACK:"storybook/instrumenter/back",GOTO:"storybook/instrumenter/goto",NEXT:"storybook/instrumenter/next",END:"storybook/instrumenter/end"},N={start:!1,back:!1,goto:!1,next:!1,end:!1},A=new Error("This function ran after the play function completed. Did you forget to `await` it?"),C=O(o=>Object.prototype.toString.call(o)==="[object Object]","isObject"),F=O(o=>Object.prototype.toString.call(o)==="[object Module]","isModule"),H=O(o=>{if(!C(o)&&!F(o))return!1;if(o.constructor===void 0)return!0;let t=o.constructor.prototype;return!(!C(t)||Object.prototype.hasOwnProperty.call(t,"isPrototypeOf")===!1)},"isInstrumentable"),z=O(o=>{try{return new o.constructor}catch{return{}}},"construct"),T=O(()=>({renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,ancestors:[],playUntil:void 0,resolvers:{},syncTimeout:void 0}),"getInitialState"),D=O((o,t=!1)=>{let e=(t?o.shadowCalls:o.calls).filter(_=>_.retain);if(!e.length)return;let c=new Map(Array.from(o.callRefsByResult.entries()).filter(([,_])=>_.retain));return{cursor:e.length,calls:e,callRefsByResult:c}},"getRetainedState"),y,W=(y=class{constructor(){this.initialized=!1,this.channel=Y.getChannel(),this.state=g.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};let t=O(({storyId:s,isPlaying:i=!0,isDebugging:n=!1})=>{let a=this.getState(s);this.setState(s,{...T(),...D(a,n),shadowCalls:n?a.shadowCalls:[],chainedCallIds:n?a.chainedCallIds:new Set,playUntil:n?a.playUntil:void 0,isPlaying:i,isDebugging:n}),this.sync(s)},"resetState");this.channel.on(b,t),this.channel.on(G,({storyId:s,newPhase:i})=>{let{isDebugging:n}=this.getState(s);this.setState(s,{renderPhase:i}),i==="preparing"&&n&&t({storyId:s}),i==="playing"&&t({storyId:s,isDebugging:n}),i==="played"&&this.setState(s,{isLocked:!1,isPlaying:!1,isDebugging:!1}),i==="errored"&&this.setState(s,{isLocked:!1,isPlaying:!1})}),this.channel.on(V,()=>{this.initialized?this.cleanup():this.initialized=!0});let e=O(({storyId:s,playUntil:i})=>{this.getState(s).isDebugging||this.setState(s,({calls:a})=>({calls:[],shadowCalls:a.map(l=>({...l,status:"waiting"})),isDebugging:!0}));let n=this.getLog(s);this.setState(s,({shadowCalls:a})=>{var u;if(i||!n.length)return{playUntil:i};let l=a.findIndex(d=>d.id===n[0].callId);return{playUntil:(u=a.slice(0,l).filter(d=>d.interceptable&&!d.ancestors.length).slice(-1)[0])==null?void 0:u.id}}),this.channel.emit(b,{storyId:s,isDebugging:!0})},"start"),c=O(({storyId:s})=>{var a;let i=this.getLog(s).filter(l=>!l.ancestors.length),n=i.reduceRight((l,u,d)=>l>=0||u.status==="waiting"?l:d,-1);e({storyId:s,playUntil:(a=i[n-1])==null?void 0:a.callId})},"back"),_=O(({storyId:s,callId:i})=>{var f;let{calls:n,shadowCalls:a,resolvers:l}=this.getState(s),u=n.find(({id:p})=>p===i),d=a.find(({id:p})=>p===i);if(!u&&d&&Object.values(l).length>0){let p=(f=this.getLog(s).find(S=>S.status==="waiting"))==null?void 0:f.callId;d.id!==p&&this.setState(s,{playUntil:d.id}),Object.values(l).forEach(S=>S())}else e({storyId:s,playUntil:i})},"goto"),r=O(({storyId:s})=>{var n;let{resolvers:i}=this.getState(s);if(Object.values(i).length>0)Object.values(i).forEach(a=>a());else{let a=(n=this.getLog(s).find(l=>l.status==="waiting"))==null?void 0:n.callId;a?e({storyId:s,playUntil:a}):h({storyId:s})}},"next"),h=O(({storyId:s})=>{this.setState(s,{playUntil:void 0,isDebugging:!1}),Object.values(this.getState(s).resolvers).forEach(i=>i())},"end");this.channel.on(E.START,e),this.channel.on(E.BACK,c),this.channel.on(E.GOTO,_),this.channel.on(E.NEXT,r),this.channel.on(E.END,h)}getState(t){return this.state[t]||T()}setState(t,e){let c=this.getState(t),_=typeof e=="function"?e(c):e;this.state={...this.state,[t]:{...c,..._}},g.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}cleanup(){this.state=Object.entries(this.state).reduce((e,[c,_])=>{let r=D(_);return r&&(e[c]=Object.assign(T(),r)),e},{});let t={controlStates:N,logItems:[]};this.channel.emit(E.SYNC,t),g.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}getLog(t){let{calls:e,shadowCalls:c}=this.getState(t),_=[...c];e.forEach((h,s)=>{_[s]=h});let r=new Set;return _.reduceRight((h,s)=>(s.args.forEach(i=>{i!=null&&i.__callId__&&r.add(i.__callId__)}),s.path.forEach(i=>{i.__callId__&&r.add(i.__callId__)}),(s.interceptable||s.exception)&&!r.has(s.id)&&(h.unshift({callId:s.id,status:s.status,ancestors:s.ancestors}),r.add(s.id)),h),[])}instrument(t,e){if(!H(t))return t;let{mutate:c=!1,path:_=[]}=e;return Object.keys(t).reduce((r,h)=>{let s=t[h];return typeof s!="function"?(r[h]=this.instrument(s,{...e,path:_.concat(h)}),r):typeof s.__originalFn__=="function"?(r[h]=s,r):(r[h]=(...i)=>this.track(h,s,i,e),r[h].__originalFn__=s,Object.defineProperty(r[h],"name",{value:h,writable:!1}),Object.keys(s).length>0&&Object.assign(r[h],this.instrument({...s},{...e,path:_.concat(h)})),r)},c?t:z(t))}track(t,e,c,_){var p,S,R,I;let r=((p=c==null?void 0:c[0])==null?void 0:p.__storyId__)||((I=(R=(S=g.__STORYBOOK_PREVIEW__)==null?void 0:S.selectionStore)==null?void 0:R.selection)==null?void 0:I.storyId),{cursor:h,ancestors:s}=this.getState(r);this.setState(r,{cursor:h+1});let i=`${s.slice(-1)[0]||r} [${h}] ${t}`,{path:n=[],intercept:a=!1,retain:l=!1}=_,u=typeof a=="function"?a(t,n):a,d={id:i,cursor:h,storyId:r,ancestors:s,path:n,method:t,args:c,interceptable:u,retain:l},f=(u&&!s.length?this.intercept:this.invoke).call(this,e,d,_);return this.instrument(f,{..._,mutate:!0,path:[{__callId__:d.id}]})}intercept(t,e,c){let{chainedCallIds:_,isDebugging:r,playUntil:h}=this.getState(e.storyId),s=_.has(e.id);return!r||s||h?(h===e.id&&this.setState(e.storyId,{playUntil:void 0}),this.invoke(t,e,c)):new Promise(i=>{this.setState(e.storyId,({resolvers:n})=>({isLocked:!1,resolvers:{...n,[e.id]:i}}))}).then(()=>(this.setState(e.storyId,i=>{let{[e.id]:n,...a}=i.resolvers;return{isLocked:!0,resolvers:a}}),this.invoke(t,e,c)))}invoke(t,e,c){let{callRefsByResult:_,renderPhase:r}=this.getState(e.storyId),h=O(n=>{var a,l;if(_.has(n))return _.get(n);if(n instanceof Array)return n.map(h);if(n instanceof Date)return{__date__:{value:n.toISOString()}};if(n instanceof Error){let{name:u,message:d,stack:f}=n;return{__error__:{name:u,message:d,stack:f}}}if(n instanceof RegExp){let{flags:u,source:d}=n;return{__regexp__:{flags:u,source:d}}}if(n instanceof g.window.HTMLElement){let{prefix:u,localName:d,id:f,classList:p,innerText:S}=n,R=Array.from(p);return{__element__:{prefix:u,localName:d,id:f,classNames:R,innerText:S}}}return typeof n=="function"?{__function__:{name:n.name}}:typeof n=="symbol"?{__symbol__:{description:n.description}}:typeof n=="object"&&((a=n==null?void 0:n.constructor)!=null&&a.name)&&((l=n==null?void 0:n.constructor)==null?void 0:l.name)!=="Object"?{__class__:{name:n.constructor.name}}:Object.prototype.toString.call(n)==="[object Object]"?Object.fromEntries(Object.entries(n).map(([u,d])=>[u,h(d)])):n},"serializeValues"),s={...e,args:e.args.map(h)};e.path.forEach(n=>{n!=null&&n.__callId__&&this.setState(e.storyId,({chainedCallIds:a})=>({chainedCallIds:new Set(Array.from(a).concat(n.__callId__))}))});let i=O(n=>{if(n instanceof Error){let{name:a,message:l,stack:u,callId:d=e.id}=n,f={name:a,message:l,stack:u,callId:d};if(this.update({...s,status:"error",exception:f}),this.setState(e.storyId,p=>({callRefsByResult:new Map([...Array.from(p.callRefsByResult.entries()),[n,{__callId__:e.id,retain:e.retain}]])})),e.ancestors.length)throw Object.prototype.hasOwnProperty.call(n,"callId")||Object.defineProperty(n,"callId",{value:e.id}),n;if(n!==A)throw K.warn(n),$}throw n},"handleException");try{if(r==="played"&&!e.retain)throw A;let n=(c.getArgs?c.getArgs(e,this.getState(e.storyId)):e.args).map(l=>typeof l!="function"||Object.keys(l).length?l:(...u)=>{let{cursor:d,ancestors:f}=this.getState(e.storyId);this.setState(e.storyId,{cursor:0,ancestors:[...f,e.id]});let p=O(()=>this.setState(e.storyId,{cursor:d,ancestors:f}),"restore"),S=!1;try{let R=l(...u);return R instanceof Promise?(S=!0,R.finally(p)):R}finally{S||p()}}),a=t(...n);return a&&["object","function","symbol"].includes(typeof a)&&this.setState(e.storyId,l=>({callRefsByResult:new Map([...Array.from(l.callRefsByResult.entries()),[a,{__callId__:e.id,retain:e.retain}]])})),this.update({...s,status:a instanceof Promise?"active":"done"}),a instanceof Promise?a.then(l=>(this.update({...s,status:"done"}),l),i):a}catch(n){return i(n)}}update(t){this.channel.emit(E.CALL,t),this.setState(t.storyId,({calls:e})=>{let c=e.concat(t).reduce((_,r)=>Object.assign(_,{[r.id]:r}),{});return{calls:Object.values(c).sort((_,r)=>_.id.localeCompare(r.id,void 0,{numeric:!0}))}}),this.sync(t.storyId)}sync(t){let e=O(()=>{var a;let{isLocked:c,isPlaying:_}=this.getState(t),r=this.getLog(t),h=(a=r.filter(({ancestors:l})=>!l.length).find(l=>l.status==="waiting"))==null?void 0:a.callId,s=r.some(l=>l.status==="active");if(c||s||r.length===0){let l={controlStates:N,logItems:r};this.channel.emit(E.SYNC,l);return}let i=r.some(l=>l.status==="done"||l.status==="error"),n={controlStates:{start:i,back:i,goto:!0,next:_,end:_},logItems:r,pausedAt:h};this.channel.emit(E.SYNC,n)},"synchronize");this.setState(t,({syncTimeout:c})=>(clearTimeout(c),{syncTimeout:setTimeout(e,0)}))}},O(y,"Instrumenter"),y);function L(o,t={}){var e,c,_,r;try{let h=!1,s=!1;return(c=(e=g.window.location)==null?void 0:e.search)!=null&&c.includes("instrument=true")?h=!0:(r=(_=g.window.location)==null?void 0:_.search)!=null&&r.includes("instrument=false")&&(s=!0),g.window.parent===g.window&&!h||s?o:(g.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(g.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new W),g.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(o,t))}catch(h){return x.warn(h),o}}O(L,"instrument");const{addons:X}=__STORYBOOK_MODULE_PREVIEW_API__,{FORCE_REMOUNT:J,STORY_RENDER_PHASE_CHANGED:q}=__STORYBOOK_MODULE_CORE_EVENTS__;var j=new B(g),Q=j.fn.bind(j),{action:Z}=L({action:Q},{retain:!0}),M=X.getChannel(),U=new Set,w=[];M.on(J,()=>w.forEach(o=>{var t;return(t=o==null?void 0:o.mockClear)==null?void 0:t.call(o)}));M.on(q,({newPhase:o})=>{o==="loading"&&w.forEach(t=>{var e;return(e=t==null?void 0:t.mockClear)==null?void 0:e.call(t)})});var m=O((o,t,e)=>{if(U.has(t))return t;U.add(t);try{if(Object.prototype.toString.call(t)==="[object Object]"){for(let[c,_]of Object.entries(t))t[c]=m(o,_,c);return t}if(Array.isArray(t))return t.map((c,_)=>m(o,c,`${e}[${_}]`));if(typeof t=="function"&&t.isAction){Object.defineProperty(t,"name",{value:e,writable:!1}),Object.defineProperty(t,"__storyId__",{value:o,writable:!1});let c=Z(t);return w.push(c),c}}catch{}return t},"addSpies"),v=O(({id:o,initialArgs:t})=>m(o,t),"addActionsFromArgTypes"),it=[v],{step:rt}=L({step:(o,t,e)=>t(e)},{intercept:!0}),at={throwPlayFunctionExceptions:!1};export{it as argsEnhancers,at as parameters,rt as runStep};
//# sourceMappingURL=preview-d45964bc.js.map
