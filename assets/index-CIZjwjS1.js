var a=Object.defineProperty;var o=(n,t)=>a(n,"name",{value:t,configurable:!0});import{ae as e}from"./index-DOAbLfAa.js";const c={},u=e.createContext(c);function s(n){const t=e.useContext(u);return e.useMemo(function(){return typeof n=="function"?n(t):{...t,...n}},[t,n])}o(s,"useMDXComponents");function r(n){let t;return n.disableParentContext?t=typeof n.components=="function"?n.components(c):n.components||c:t=s(n.components),e.createElement(u.Provider,{value:t},n.children)}o(r,"MDXProvider");export{r as M,s as u};