var m=Object.defineProperty;var i=(r,e)=>m(r,"name",{value:e,configurable:!0});import{_ as u,Y as g,u as x,aA as h,b as $,a1 as j,D,aB as w,aC as S,a5 as y,K as I,J as E,as as N}from"./index-81df3826.js";import{a0 as P}from"./index-681e4b07-1e2f5149.js";var _=u,A=x.findIndex,L=g,v="findIndex",p=!0;v in[]&&Array(1)[v](function(){p=!1});_({target:"Array",proto:!0,forced:p},{findIndex:i(function(e){return A(this,e,arguments.length>1?arguments[1]:void 0)},"findIndex")});L(v);var M=u,F=P,R=g;M({target:"Array",proto:!0},{fill:F});R("fill");var T=Object.is||i(function(e,t){return e===t?e!==0||1/e===1/t:e!=e&&t!=t},"is"),U=h,q=$,C=j,c=T,d=D,G=w,K=S;U("search",function(r,e,t){return[i(function(a){var s=C(this),o=a==null?void 0:G(a,r);return o?o.call(a,s):new RegExp(a)[r](d(s))},"search"),function(n){var a=q(this),s=d(n),o=t(e,a,s);if(o.done)return o.value;var l=a.lastIndex;c(l,0)||(a.lastIndex=0);var f=K(a,s);return c(a.lastIndex,l)||(a.lastIndex=l),f===null?-1:f.index}]});var b=y,V=i(function(r){return r!==void 0&&(b(r,"value")||b(r,"writable"))},"isDataDescriptor$1"),W=u,B=I,J=$,X=V,Y=E,k=N;function O(r,e){var t=arguments.length<3?r:arguments[2],n,a;if(J(r)===t)return r[e];if(n=Y.f(r,e),n)return X(n)?n.value:n.get===void 0?void 0:n.get.call(t);if(B(a=k(r)))return O(a,e,t)}i(O,"get");W({target:"Reflect",stat:!0},{get:O});var z=I,H=Math.floor,Q=Number.isInteger||i(function(e){return!z(e)&&isFinite(e)&&H(e)===e},"isInteger"),Z=u,ee=Q;Z({target:"Number",stat:!0},{isInteger:ee});export{Q as i};
//# sourceMappingURL=es.number.is-integer-2395c509.js.map
