var he=Object.defineProperty;var d=(n,l)=>he(n,"name",{value:l,configurable:!0});import{ae as fe,af as v,ag as y,ah as C,a2 as Q,a0 as de,N as ge,ai as be,aj as me,ak as ve,al as P}from"./index-BLqhgWNf.js";import"./iframe-OIne59MD.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-1BxWT6uA.js";import"./index-TABuaOO4.js";import"./index-B7qynYb3.js";var pe=P({"../../node_modules/color-name/index.js"(n,l){l.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}}}),Z=P({"../../node_modules/color-convert/conversions.js"(n,l){var c=pe(),h={};for(let e of Object.keys(c))h[c[e]]=e;var u={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};l.exports=u;for(let e of Object.keys(u)){if(!("channels"in u[e]))throw new Error("missing channels property: "+e);if(!("labels"in u[e]))throw new Error("missing channel labels property: "+e);if(u[e].labels.length!==u[e].channels)throw new Error("channel and label counts mismatch: "+e);let{channels:t,labels:r}=u[e];delete u[e].channels,delete u[e].labels,Object.defineProperty(u[e],"channels",{value:t}),Object.defineProperty(u[e],"labels",{value:r})}u.rgb.hsl=function(e){let t=e[0]/255,r=e[1]/255,a=e[2]/255,o=Math.min(t,r,a),i=Math.max(t,r,a),s=i-o,f,b;i===o?f=0:t===i?f=(r-a)/s:r===i?f=2+(a-t)/s:a===i&&(f=4+(t-r)/s),f=Math.min(f*60,360),f<0&&(f+=360);let m=(o+i)/2;return i===o?b=0:m<=.5?b=s/(i+o):b=s/(2-i-o),[f,b*100,m*100]},u.rgb.hsv=function(e){let t,r,a,o,i,s=e[0]/255,f=e[1]/255,b=e[2]/255,m=Math.max(s,f,b),x=m-Math.min(s,f,b),p=d(function(k){return(m-k)/6/x+1/2},"diffc");return x===0?(o=0,i=0):(i=x/m,t=p(s),r=p(f),a=p(b),s===m?o=a-r:f===m?o=1/3+t-a:b===m&&(o=2/3+r-t),o<0?o+=1:o>1&&(o-=1)),[o*360,i*100,m*100]},u.rgb.hwb=function(e){let t=e[0],r=e[1],a=e[2],o=u.rgb.hsl(e)[0],i=1/255*Math.min(t,Math.min(r,a));return a=1-1/255*Math.max(t,Math.max(r,a)),[o,i*100,a*100]},u.rgb.cmyk=function(e){let t=e[0]/255,r=e[1]/255,a=e[2]/255,o=Math.min(1-t,1-r,1-a),i=(1-t-o)/(1-o)||0,s=(1-r-o)/(1-o)||0,f=(1-a-o)/(1-o)||0;return[i*100,s*100,f*100,o*100]};function g(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}d(g,"comparativeDistance"),u.rgb.keyword=function(e){let t=h[e];if(t)return t;let r=1/0,a;for(let o of Object.keys(c)){let i=c[o],s=g(e,i);s<r&&(r=s,a=o)}return a},u.keyword.rgb=function(e){return c[e]},u.rgb.xyz=function(e){let t=e[0]/255,r=e[1]/255,a=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,a=a>.04045?((a+.055)/1.055)**2.4:a/12.92;let o=t*.4124+r*.3576+a*.1805,i=t*.2126+r*.7152+a*.0722,s=t*.0193+r*.1192+a*.9505;return[o*100,i*100,s*100]},u.rgb.lab=function(e){let t=u.rgb.xyz(e),r=t[0],a=t[1],o=t[2];r/=95.047,a/=100,o/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,a=a>.008856?a**(1/3):7.787*a+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;let i=116*a-16,s=500*(r-a),f=200*(a-o);return[i,s,f]},u.hsl.rgb=function(e){let t=e[0]/360,r=e[1]/100,a=e[2]/100,o,i,s;if(r===0)return s=a*255,[s,s,s];a<.5?o=a*(1+r):o=a+r-a*r;let f=2*a-o,b=[0,0,0];for(let m=0;m<3;m++)i=t+1/3*-(m-1),i<0&&i++,i>1&&i--,6*i<1?s=f+(o-f)*6*i:2*i<1?s=o:3*i<2?s=f+(o-f)*(2/3-i)*6:s=f,b[m]=s*255;return b},u.hsl.hsv=function(e){let t=e[0],r=e[1]/100,a=e[2]/100,o=r,i=Math.max(a,.01);a*=2,r*=a<=1?a:2-a,o*=i<=1?i:2-i;let s=(a+r)/2,f=a===0?2*o/(i+o):2*r/(a+r);return[t,f*100,s*100]},u.hsv.rgb=function(e){let t=e[0]/60,r=e[1]/100,a=e[2]/100,o=Math.floor(t)%6,i=t-Math.floor(t),s=255*a*(1-r),f=255*a*(1-r*i),b=255*a*(1-r*(1-i));switch(a*=255,o){case 0:return[a,b,s];case 1:return[f,a,s];case 2:return[s,a,b];case 3:return[s,f,a];case 4:return[b,s,a];case 5:return[a,s,f]}},u.hsv.hsl=function(e){let t=e[0],r=e[1]/100,a=e[2]/100,o=Math.max(a,.01),i,s;s=(2-r)*a;let f=(2-r)*o;return i=r*o,i/=f<=1?f:2-f,i=i||0,s/=2,[t,i*100,s*100]},u.hwb.rgb=function(e){let t=e[0]/360,r=e[1]/100,a=e[2]/100,o=r+a,i;o>1&&(r/=o,a/=o);let s=Math.floor(6*t),f=1-a;i=6*t-s,s&1&&(i=1-i);let b=r+i*(f-r),m,x,p;switch(s){default:case 6:case 0:m=f,x=b,p=r;break;case 1:m=b,x=f,p=r;break;case 2:m=r,x=f,p=b;break;case 3:m=r,x=b,p=f;break;case 4:m=b,x=r,p=f;break;case 5:m=f,x=r,p=b;break}return[m*255,x*255,p*255]},u.cmyk.rgb=function(e){let t=e[0]/100,r=e[1]/100,a=e[2]/100,o=e[3]/100,i=1-Math.min(1,t*(1-o)+o),s=1-Math.min(1,r*(1-o)+o),f=1-Math.min(1,a*(1-o)+o);return[i*255,s*255,f*255]},u.xyz.rgb=function(e){let t=e[0]/100,r=e[1]/100,a=e[2]/100,o,i,s;return o=t*3.2406+r*-1.5372+a*-.4986,i=t*-.9689+r*1.8758+a*.0415,s=t*.0557+r*-.204+a*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,i=i>.0031308?1.055*i**(1/2.4)-.055:i*12.92,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,o=Math.min(Math.max(0,o),1),i=Math.min(Math.max(0,i),1),s=Math.min(Math.max(0,s),1),[o*255,i*255,s*255]},u.xyz.lab=function(e){let t=e[0],r=e[1],a=e[2];t/=95.047,r/=100,a/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,a=a>.008856?a**(1/3):7.787*a+16/116;let o=116*r-16,i=500*(t-r),s=200*(r-a);return[o,i,s]},u.lab.xyz=function(e){let t=e[0],r=e[1],a=e[2],o,i,s;i=(t+16)/116,o=r/500+i,s=i-a/200;let f=i**3,b=o**3,m=s**3;return i=f>.008856?f:(i-16/116)/7.787,o=b>.008856?b:(o-16/116)/7.787,s=m>.008856?m:(s-16/116)/7.787,o*=95.047,i*=100,s*=108.883,[o,i,s]},u.lab.lch=function(e){let t=e[0],r=e[1],a=e[2],o;o=Math.atan2(a,r)*360/2/Math.PI,o<0&&(o+=360);let i=Math.sqrt(r*r+a*a);return[t,i,o]},u.lch.lab=function(e){let t=e[0],r=e[1],a=e[2]/360*2*Math.PI,o=r*Math.cos(a),i=r*Math.sin(a);return[t,o,i]},u.rgb.ansi16=function(e,t=null){let[r,a,o]=e,i=t===null?u.rgb.hsv(e)[2]:t;if(i=Math.round(i/50),i===0)return 30;let s=30+(Math.round(o/255)<<2|Math.round(a/255)<<1|Math.round(r/255));return i===2&&(s+=60),s},u.hsv.ansi16=function(e){return u.rgb.ansi16(u.hsv.rgb(e),e[2])},u.rgb.ansi256=function(e){let t=e[0],r=e[1],a=e[2];return t===r&&r===a?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(r/255*5)+Math.round(a/255*5)},u.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];let r=(~~(e>50)+1)*.5,a=(t&1)*r*255,o=(t>>1&1)*r*255,i=(t>>2&1)*r*255;return[a,o,i]},u.ansi256.rgb=function(e){if(e>=232){let i=(e-232)*10+8;return[i,i,i]}e-=16;let t,r=Math.floor(e/36)/5*255,a=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[r,a,o]},u.rgb.hex=function(e){let t=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(t.length)+t},u.hex.rgb=function(e){let t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let r=t[0];t[0].length===3&&(r=r.split("").map(f=>f+f).join(""));let a=parseInt(r,16),o=a>>16&255,i=a>>8&255,s=a&255;return[o,i,s]},u.rgb.hcg=function(e){let t=e[0]/255,r=e[1]/255,a=e[2]/255,o=Math.max(Math.max(t,r),a),i=Math.min(Math.min(t,r),a),s=o-i,f,b;return s<1?f=i/(1-s):f=0,s<=0?b=0:o===t?b=(r-a)/s%6:o===r?b=2+(a-t)/s:b=4+(t-r)/s,b/=6,b%=1,[b*360,s*100,f*100]},u.hsl.hcg=function(e){let t=e[1]/100,r=e[2]/100,a=r<.5?2*t*r:2*t*(1-r),o=0;return a<1&&(o=(r-.5*a)/(1-a)),[e[0],a*100,o*100]},u.hsv.hcg=function(e){let t=e[1]/100,r=e[2]/100,a=t*r,o=0;return a<1&&(o=(r-a)/(1-a)),[e[0],a*100,o*100]},u.hcg.rgb=function(e){let t=e[0]/360,r=e[1]/100,a=e[2]/100;if(r===0)return[a*255,a*255,a*255];let o=[0,0,0],i=t%1*6,s=i%1,f=1-s,b=0;switch(Math.floor(i)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=f,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=f,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=f}return b=(1-r)*a,[(r*o[0]+b)*255,(r*o[1]+b)*255,(r*o[2]+b)*255]},u.hcg.hsv=function(e){let t=e[1]/100,r=e[2]/100,a=t+r*(1-t),o=0;return a>0&&(o=t/a),[e[0],o*100,a*100]},u.hcg.hsl=function(e){let t=e[1]/100,r=e[2]/100*(1-t)+.5*t,a=0;return r>0&&r<.5?a=t/(2*r):r>=.5&&r<1&&(a=t/(2*(1-r))),[e[0],a*100,r*100]},u.hcg.hwb=function(e){let t=e[1]/100,r=e[2]/100,a=t+r*(1-t);return[e[0],(a-t)*100,(1-a)*100]},u.hwb.hcg=function(e){let t=e[1]/100,r=1-e[2]/100,a=r-t,o=0;return a<1&&(o=(r-a)/(1-a)),[e[0],a*100,o*100]},u.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]},u.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]},u.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]},u.gray.hsl=function(e){return[0,0,e[0]]},u.gray.hsv=u.gray.hsl,u.gray.hwb=function(e){return[0,100,e[0]]},u.gray.cmyk=function(e){return[0,0,0,e[0]]},u.gray.lab=function(e){return[e[0],0,0]},u.gray.hex=function(e){let t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r},u.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]}}}),ye=P({"../../node_modules/color-convert/route.js"(n,l){var c=Z();function h(){let t={},r=Object.keys(c);for(let a=r.length,o=0;o<a;o++)t[r[o]]={distance:-1,parent:null};return t}d(h,"buildGraph");function u(t){let r=h(),a=[t];for(r[t].distance=0;a.length;){let o=a.pop(),i=Object.keys(c[o]);for(let s=i.length,f=0;f<s;f++){let b=i[f],m=r[b];m.distance===-1&&(m.distance=r[o].distance+1,m.parent=o,a.unshift(b))}}return r}d(u,"deriveBFS");function g(t,r){return function(a){return r(t(a))}}d(g,"link");function e(t,r){let a=[r[t].parent,t],o=c[r[t].parent][t],i=r[t].parent;for(;r[i].parent;)a.unshift(r[i].parent),o=g(c[r[i].parent][i],o),i=r[i].parent;return o.conversion=a,o}d(e,"wrapConversion"),l.exports=function(t){let r=u(t),a={},o=Object.keys(r);for(let i=o.length,s=0;s<i;s++){let f=o[s];r[f].parent!==null&&(a[f]=e(f,r))}return a}}}),xe=P({"../../node_modules/color-convert/index.js"(n,l){var c=Z(),h=ye(),u={},g=Object.keys(c);function e(r){let a=d(function(...o){let i=o[0];return i==null?i:(i.length>1&&(o=i),r(o))},"wrappedFn");return"conversion"in r&&(a.conversion=r.conversion),a}d(e,"wrapRaw");function t(r){let a=d(function(...o){let i=o[0];if(i==null)return i;i.length>1&&(o=i);let s=r(o);if(typeof s=="object")for(let f=s.length,b=0;b<f;b++)s[b]=Math.round(s[b]);return s},"wrappedFn");return"conversion"in r&&(a.conversion=r.conversion),a}d(t,"wrapRounded"),g.forEach(r=>{u[r]={},Object.defineProperty(u[r],"channels",{value:c[r].channels}),Object.defineProperty(u[r],"labels",{value:c[r].labels});let a=h(r);Object.keys(a).forEach(o=>{let i=a[o];u[r][o]=t(i),u[r][o].raw=e(i)})}),l.exports=u}}),E=fe(xe());function $(){return($=Object.assign||function(n){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var h in c)Object.prototype.hasOwnProperty.call(c,h)&&(n[h]=c[h])}return n}).apply(this,arguments)}d($,"u");function G(n,l){if(n==null)return{};var c,h,u={},g=Object.keys(n);for(h=0;h<g.length;h++)l.indexOf(c=g[h])>=0||(u[c]=n[c]);return u}d(G,"c");function B(n){var l=y.useRef(n),c=y.useRef(function(h){l.current&&l.current(h)});return l.current=n,c.current}d(B,"i");var O=d(function(n,l,c){return l===void 0&&(l=0),c===void 0&&(c=1),n>c?c:n<l?l:n},"s"),S=d(function(n){return"touches"in n},"f"),K=d(function(n){return n&&n.ownerDocument.defaultView||self},"v"),W=d(function(n,l,c){var h=n.getBoundingClientRect(),u=S(l)?function(g,e){for(var t=0;t<g.length;t++)if(g[t].identifier===e)return g[t];return g[0]}(l.touches,c):l;return{left:O((u.pageX-(h.left+K(n).pageXOffset))/h.width),top:O((u.pageY-(h.top+K(n).pageYOffset))/h.height)}},"d"),A=d(function(n){!S(n)&&n.preventDefault()},"h"),T=v.memo(function(n){var l=n.onMove,c=n.onKey,h=G(n,["onMove","onKey"]),u=y.useRef(null),g=B(l),e=B(c),t=y.useRef(null),r=y.useRef(!1),a=y.useMemo(function(){var f=d(function(x){A(x),(S(x)?x.touches.length>0:x.buttons>0)&&u.current?g(W(u.current,x,t.current)):m(!1)},"e2"),b=d(function(){return m(!1)},"r2");function m(x){var p=r.current,k=K(u.current),M=x?k.addEventListener:k.removeEventListener;M(p?"touchmove":"mousemove",f),M(p?"touchend":"mouseup",b)}return d(m,"t2"),[function(x){var p=x.nativeEvent,k=u.current;if(k&&(A(p),!function(_,L){return L&&!S(_)}(p,r.current)&&k)){if(S(p)){r.current=!0;var M=p.changedTouches||[];M.length&&(t.current=M[0].identifier)}k.focus(),g(W(k,p,t.current)),m(!0)}},function(x){var p=x.which||x.keyCode;p<37||p>40||(x.preventDefault(),e({left:p===39?.05:p===37?-.05:0,top:p===40?.05:p===38?-.05:0}))},m]},[e,g]),o=a[0],i=a[1],s=a[2];return y.useEffect(function(){return s},[s]),v.createElement("div",$({},h,{onTouchStart:o,onMouseDown:o,className:"react-colorful__interactive",ref:u,onKeyDown:i,tabIndex:0,role:"slider"}))}),j=d(function(n){return n.filter(Boolean).join(" ")},"g"),F=d(function(n){var l=n.color,c=n.left,h=n.top,u=h===void 0?.5:h,g=j(["react-colorful__pointer",n.className]);return v.createElement("div",{className:g,style:{top:100*u+"%",left:100*c+"%"}},v.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:l}}))},"p"),w=d(function(n,l,c){return l===void 0&&(l=0),c===void 0&&(c=Math.pow(10,l)),Math.round(c*n)/c},"b"),we={grad:.9,turn:360,rad:360/(2*Math.PI)},ke=d(function(n){return te(X(n))},"x"),X=d(function(n){return n[0]==="#"&&(n=n.substring(1)),n.length<6?{r:parseInt(n[0]+n[0],16),g:parseInt(n[1]+n[1],16),b:parseInt(n[2]+n[2],16),a:n.length===4?w(parseInt(n[3]+n[3],16)/255,2):1}:{r:parseInt(n.substring(0,2),16),g:parseInt(n.substring(2,4),16),b:parseInt(n.substring(4,6),16),a:n.length===8?w(parseInt(n.substring(6,8),16)/255,2):1}},"C"),_e=d(function(n,l){return l===void 0&&(l="deg"),Number(n)*(we[l]||1)},"E"),Ee=d(function(n){var l=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(n);return l?Me({h:_e(l[1],l[2]),s:Number(l[3]),l:Number(l[4]),a:l[5]===void 0?1:Number(l[5])/(l[6]?100:1)}):{h:0,s:0,v:0,a:1}},"H"),Me=d(function(n){var l=n.s,c=n.l;return{h:n.h,s:(l*=(c<50?c:100-c)/100)>0?2*l/(c+l)*100:0,v:c+l,a:n.a}},"N"),Ce=d(function(n){return Ne(re(n))},"w"),ee=d(function(n){var l=n.s,c=n.v,h=n.a,u=(200-l)*c/100;return{h:w(n.h),s:w(u>0&&u<200?l*c/100/(u<=100?u:200-u)*100:0),l:w(u/2),a:w(h,2)}},"y"),D=d(function(n){var l=ee(n);return"hsl("+l.h+", "+l.s+"%, "+l.l+"%)"},"q"),H=d(function(n){var l=ee(n);return"hsla("+l.h+", "+l.s+"%, "+l.l+"%, "+l.a+")"},"k"),re=d(function(n){var l=n.h,c=n.s,h=n.v,u=n.a;l=l/360*6,c/=100,h/=100;var g=Math.floor(l),e=h*(1-c),t=h*(1-(l-g)*c),r=h*(1-(1-l+g)*c),a=g%6;return{r:w(255*[h,t,e,e,r,h][a]),g:w(255*[r,h,h,t,e,e][a]),b:w(255*[e,e,r,h,h,t][a]),a:w(u,2)}},"I"),$e=d(function(n){var l=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(n);return l?te({r:Number(l[1])/(l[2]?100/255:1),g:Number(l[3])/(l[4]?100/255:1),b:Number(l[5])/(l[6]?100/255:1),a:l[7]===void 0?1:Number(l[7])/(l[8]?100:1)}):{h:0,s:0,v:0,a:1}},"z"),R=d(function(n){var l=n.toString(16);return l.length<2?"0"+l:l},"D"),Ne=d(function(n){var l=n.r,c=n.g,h=n.b,u=n.a,g=u<1?R(w(255*u)):"";return"#"+R(l)+R(c)+R(h)+g},"K"),te=d(function(n){var l=n.r,c=n.g,h=n.b,u=n.a,g=Math.max(l,c,h),e=g-Math.min(l,c,h),t=e?g===l?(c-h)/e:g===c?2+(h-l)/e:4+(l-c)/e:0;return{h:w(60*(t<0?t+6:t)),s:w(g?e/g*100:0),v:w(g/255*100),a:u}},"L"),ne=v.memo(function(n){var l=n.hue,c=n.onChange,h=j(["react-colorful__hue",n.className]);return v.createElement("div",{className:h},v.createElement(T,{onMove:d(function(u){c({h:360*u.left})},"onMove"),onKey:d(function(u){c({h:O(l+360*u.left,0,360)})},"onKey"),"aria-label":"Hue","aria-valuenow":w(l),"aria-valuemax":"360","aria-valuemin":"0"},v.createElement(F,{className:"react-colorful__hue-pointer",left:l/360,color:D({h:l,s:100,v:100,a:1})})))}),ae=v.memo(function(n){var l=n.hsva,c=n.onChange,h={backgroundColor:D({h:l.h,s:100,v:100,a:1})};return v.createElement("div",{className:"react-colorful__saturation",style:h},v.createElement(T,{onMove:d(function(u){c({s:100*u.left,v:100-100*u.top})},"onMove"),onKey:d(function(u){c({s:O(l.s+100*u.left,0,100),v:O(l.v-100*u.top,0,100)})},"onKey"),"aria-label":"Color","aria-valuetext":"Saturation "+w(l.s)+"%, Brightness "+w(l.v)+"%"},v.createElement(F,{className:"react-colorful__saturation-pointer",top:1-l.v/100,left:l.s/100,color:D(l)})))}),oe=d(function(n,l){if(n===l)return!0;for(var c in n)if(n[c]!==l[c])return!1;return!0},"F"),le=d(function(n,l){return n.replace(/\s/g,"")===l.replace(/\s/g,"")},"P"),Oe=d(function(n,l){return n.toLowerCase()===l.toLowerCase()||oe(X(n),X(l))},"X");function ie(n,l,c){var h=B(c),u=y.useState(function(){return n.toHsva(l)}),g=u[0],e=u[1],t=y.useRef({color:l,hsva:g});y.useEffect(function(){if(!n.equal(l,t.current.color)){var a=n.toHsva(l);t.current={hsva:a,color:l},e(a)}},[l,n]),y.useEffect(function(){var a;oe(g,t.current.hsva)||n.equal(a=n.fromHsva(g),t.current.color)||(t.current={hsva:g,color:a},h(a))},[g,n,h]);var r=y.useCallback(function(a){e(function(o){return Object.assign({},o,a)})},[]);return[g,r]}d(ie,"Y");var Se=typeof window<"u"?y.useLayoutEffect:y.useEffect,je=d(function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0},"$"),U=new Map,ue=d(function(n){Se(function(){var l=n.current?n.current.ownerDocument:document;if(l!==void 0&&!U.has(l)){var c=l.createElement("style");c.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,U.set(l,c);var h=je();h&&c.setAttribute("nonce",h),l.head.appendChild(c)}},[])},"Q"),Re=d(function(n){var l=n.className,c=n.colorModel,h=n.color,u=h===void 0?c.defaultColor:h,g=n.onChange,e=G(n,["className","colorModel","color","onChange"]),t=y.useRef(null);ue(t);var r=ie(c,u,g),a=r[0],o=r[1],i=j(["react-colorful",l]);return v.createElement("div",$({},e,{ref:t,className:i}),v.createElement(ae,{hsva:a,onChange:o}),v.createElement(ne,{hue:a.h,onChange:o,className:"react-colorful__last-control"}))},"U"),ze={defaultColor:"000",toHsva:ke,fromHsva:d(function(n){return Ce({h:n.h,s:n.s,v:n.v,a:1})},"fromHsva"),equal:Oe},Ie=d(function(n){return v.createElement(Re,$({},n,{colorModel:ze}))},"Z"),He=d(function(n){var l=n.className,c=n.hsva,h=n.onChange,u={backgroundImage:"linear-gradient(90deg, "+H(Object.assign({},c,{a:0}))+", "+H(Object.assign({},c,{a:1}))+")"},g=j(["react-colorful__alpha",l]),e=w(100*c.a);return v.createElement("div",{className:g},v.createElement("div",{className:"react-colorful__alpha-gradient",style:u}),v.createElement(T,{onMove:d(function(t){h({a:t.left})},"onMove"),onKey:d(function(t){h({a:O(c.a+t.left)})},"onKey"),"aria-label":"Alpha","aria-valuetext":e+"%","aria-valuenow":e,"aria-valuemin":"0","aria-valuemax":"100"},v.createElement(F,{className:"react-colorful__alpha-pointer",left:c.a,color:H(c)})))},"ee"),se=d(function(n){var l=n.className,c=n.colorModel,h=n.color,u=h===void 0?c.defaultColor:h,g=n.onChange,e=G(n,["className","colorModel","color","onChange"]),t=y.useRef(null);ue(t);var r=ie(c,u,g),a=r[0],o=r[1],i=j(["react-colorful",l]);return v.createElement("div",$({},e,{ref:t,className:i}),v.createElement(ae,{hsva:a,onChange:o}),v.createElement(ne,{hue:a.h,onChange:o}),v.createElement(He,{hsva:a,onChange:o,className:"react-colorful__last-control"}))},"re"),qe={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:Ee,fromHsva:H,equal:le},Pe=d(function(n){return v.createElement(se,$({},n,{colorModel:qe}))},"ue"),Le={defaultColor:"rgba(0, 0, 0, 1)",toHsva:$e,fromHsva:d(function(n){var l=re(n);return"rgba("+l.r+", "+l.g+", "+l.b+", "+l.a+")"},"fromHsva"),equal:le},Be=d(function(n){return v.createElement(se,$({},n,{colorModel:Le}))},"He"),Ke=C.div({position:"relative",maxWidth:250,'&[aria-readonly="true"]':{opacity:.5}}),Xe=C(Q)({position:"absolute",zIndex:1,top:4,left:4,"[aria-readonly=true] &":{cursor:"not-allowed"}}),De=C.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),Ve=C(de)(({theme:n})=>({fontFamily:n.typography.fonts.base})),Ge=C.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),Te=C.div(({theme:n,active:l})=>({width:16,height:16,boxShadow:l?`${n.appBorderColor} 0 0 0 1px inset, ${n.textMutedColor}50 0 0 0 4px`:`${n.appBorderColor} 0 0 0 1px inset`,borderRadius:n.appBorderRadius})),Fe=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,Y=d(({value:n,style:l,...c})=>{let h=`linear-gradient(${n}, ${n}), ${Fe}, linear-gradient(#fff, #fff)`;return v.createElement(Te,{...c,style:{...l,backgroundImage:h}})},"Swatch"),We=C(ge.Input)(({theme:n,readOnly:l})=>({width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:n.typography.fonts.base})),Ae=C(be)(({theme:n})=>({position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:n.input.color})),ce=(n=>(n.RGB="rgb",n.HSL="hsl",n.HEX="hex",n))(ce||{}),z=Object.values(ce),Ue=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,Ye=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,Je=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,V=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,Qe=/^\s*#?([0-9a-f]{3})\s*$/i,Ze={hex:Ie,rgb:Be,hsl:Pe},I={hex:"transparent",rgb:"rgba(0, 0, 0, 0)",hsl:"hsla(0, 0%, 0%, 0)"},J=d(n=>{let l=n==null?void 0:n.match(Ue);if(!l)return[0,0,0,1];let[,c,h,u,g=1]=l;return[c,h,u,g].map(Number)},"stringToArgs"),N=d(n=>{if(!n)return;let l=!0;if(Ye.test(n)){let[e,t,r,a]=J(n),[o,i,s]=E.default.rgb.hsl([e,t,r])||[0,0,0];return{valid:l,value:n,keyword:E.default.rgb.keyword([e,t,r]),colorSpace:"rgb",rgb:n,hsl:`hsla(${o}, ${i}%, ${s}%, ${a})`,hex:`#${E.default.rgb.hex([e,t,r]).toLowerCase()}`}}if(Je.test(n)){let[e,t,r,a]=J(n),[o,i,s]=E.default.hsl.rgb([e,t,r])||[0,0,0];return{valid:l,value:n,keyword:E.default.hsl.keyword([e,t,r]),colorSpace:"hsl",rgb:`rgba(${o}, ${i}, ${s}, ${a})`,hsl:n,hex:`#${E.default.hsl.hex([e,t,r]).toLowerCase()}`}}let c=n.replace("#",""),h=E.default.keyword.rgb(c)||E.default.hex.rgb(c),u=E.default.rgb.hsl(h),g=n;if(/[^#a-f0-9]/i.test(n)?g=c:V.test(n)&&(g=`#${c}`),g.startsWith("#"))l=V.test(g);else try{E.default.keyword.hex(g)}catch{l=!1}return{valid:l,value:g,keyword:E.default.rgb.keyword(h),colorSpace:"hex",rgb:`rgba(${h[0]}, ${h[1]}, ${h[2]}, 1)`,hsl:`hsla(${u[0]}, ${u[1]}%, ${u[2]}%, 1)`,hex:g}},"parseValue"),er=d((n,l,c)=>{if(!n||!(l!=null&&l.valid))return I[c];if(c!=="hex")return(l==null?void 0:l[c])||I[c];if(!l.hex.startsWith("#"))try{return`#${E.default.keyword.hex(l.hex)}`}catch{return I.hex}let h=l.hex.match(Qe);if(!h)return V.test(l.hex)?l.hex:I.hex;let[u,g,e]=h[1].split("");return`#${u}${u}${g}${g}${e}${e}`},"getRealValue"),rr=d((n,l)=>{let[c,h]=y.useState(n||""),[u,g]=y.useState(()=>N(c)),[e,t]=y.useState((u==null?void 0:u.colorSpace)||"hex");y.useEffect(()=>{let i=n||"",s=N(i);h(i),g(s),t((s==null?void 0:s.colorSpace)||"hex")},[n]);let r=y.useMemo(()=>er(c,u,e).toLowerCase(),[c,u,e]),a=y.useCallback(i=>{let s=N(i),f=(s==null?void 0:s.value)||i||"";h(f),f===""&&(g(void 0),l(void 0)),s&&(g(s),t(s.colorSpace),l(s.value))},[l]),o=y.useCallback(()=>{let i=z.indexOf(e)+1;i>=z.length&&(i=0),t(z[i]);let s=(u==null?void 0:u[z[i]])||"";h(s),l(s)},[u,e,l]);return{value:c,realValue:r,updateValue:a,color:u,colorSpace:e,cycleColorSpace:o}},"useColorInput"),q=d(n=>n.replace(/\s*/,"").toLowerCase(),"id"),tr=d((n,l,c)=>{let[h,u]=y.useState(l!=null&&l.valid?[l]:[]);y.useEffect(()=>{l===void 0&&u([])},[l]);let g=y.useMemo(()=>(n||[]).map(t=>typeof t=="string"?N(t):t.title?{...N(t.color),keyword:t.title}:N(t.color)).concat(h).filter(Boolean).slice(-27),[n,h]),e=y.useCallback(t=>{t!=null&&t.valid&&(g.some(r=>q(r[c])===q(t[c]))||u(r=>r.concat(t)))},[c,g]);return{presets:g,addPreset:e}},"usePresets"),nr=d(({name:n,value:l,onChange:c,onFocus:h,onBlur:u,presetColors:g,startOpen:e=!1,argType:t})=>{var M;let r=y.useCallback(me(c,200),[c]),{value:a,realValue:o,updateValue:i,color:s,colorSpace:f,cycleColorSpace:b}=rr(l,r),{presets:m,addPreset:x}=tr(g,s,f),p=Ze[f],k=!!((M=t==null?void 0:t.table)!=null&&M.readonly);return v.createElement(Ke,{"aria-readonly":k},v.createElement(Xe,{startOpen:e,trigger:k?[null]:void 0,closeOnOutsideClick:!0,onVisibleChange:d(()=>x(s),"onVisibleChange"),tooltip:v.createElement(De,null,v.createElement(p,{color:o==="transparent"?"#000000":o,onChange:i,onFocus:h,onBlur:u}),m.length>0&&v.createElement(Ge,null,m.map((_,L)=>v.createElement(Q,{key:`${_.value}-${L}`,hasChrome:!1,tooltip:v.createElement(Ve,{note:_.keyword||_.value})},v.createElement(Y,{value:_[f],active:s&&q(_[f])===q(s[f]),onClick:d(()=>i(_.value),"onClick")})))))},v.createElement(Y,{value:o,style:{margin:4}})),v.createElement(We,{id:ve(n),value:a,onChange:d(_=>i(_.target.value),"onChange"),onFocus:d(_=>_.target.select(),"onFocus"),readOnly:k,placeholder:"Choose color..."}),a?v.createElement(Ae,{onClick:b}):null)},"ColorControl"),hr=nr;export{nr as ColorControl,hr as default};