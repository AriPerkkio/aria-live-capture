var g=Object.defineProperty;var n=(t,i)=>g(t,"name",{value:i,configurable:!0});import{w as p,e as r,u}from"./index-15ZThCPC.js";import{c as m}from"./utils-0JiZS-09.js";import"./_commonjsHelpers-RFtSs_Ch.js";import"./index-Kg-CViSs.js";import"./uniq-rlwX4jXw.js";import"./_getTag-NtD66v87.js";import"./index-KU_5yyTr.js";import"./index-GzfZrMcW.js";const C={title:'Aria-live/aria-live="polite"'},e=n(()=>m(`
        <div aria-live="polite">
        </div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:t})=>{const i=p(t).getByRole("button");r("Hello world").not.toBeAnnounced(),await u.click(i),r("Hello world").toBeAnnounced("polite")};const o=n(()=>m(`
        <div></div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:t})=>{const i=p(t).getByRole("button");r("Hello world").not.toBeAnnounced(),await u.click(i),r("Hello world").not.toBeAnnounced()};var a,l,v;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite">
        </div>
        \`, \`
        <div aria-live="polite">
            Hello world
        </div>
        \`);
}`,...(v=(l=e.parameters)==null?void 0:l.docs)==null?void 0:v.source}}};var d,s,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div aria-live="polite">
            Hello world
        </div>
        \`);
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const x=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,x as __namedExportsOrder,C as default};
