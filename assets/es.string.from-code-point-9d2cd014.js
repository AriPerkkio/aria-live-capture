var C=Object.defineProperty;var a=(o,t)=>C(o,"name",{value:t,configurable:!0});import{_ as f,a7 as g}from"./index-2c0b9941.js";var s=f,v=g,i=String.fromCharCode,d=String.fromCodePoint,x=!!d&&d.length!=1;s({target:"String",stat:!0,forced:x},{fromCodePoint:a(function(t){for(var e=[],m=arguments.length,n=0,r;m>n;){if(r=+arguments[n++],v(r,1114111)!==r)throw RangeError(r+" is not a valid code point");e.push(r<65536?i(r):i(((r-=65536)>>10)+55296,r%1024+56320))}return e.join("")},"fromCodePoint")});
//# sourceMappingURL=es.string.from-code-point-9d2cd014.js.map
