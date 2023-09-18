var g=Object.defineProperty;var r=(t,i)=>g(t,"name",{value:i,configurable:!0});import{w as p,e as n,u}from"./index-fa18f5e9.js";import{c as m}from"./utils-f8fc7d82.js";import"./_commonjsHelpers-f86d8be3.js";import"./index-7eefe366.js";import"./uniq-ec7727c7.js";import"./index-8b3405fb.js";import"./index-4af01cdc.js";const R={title:'Aria-live/aria-live="polite"'},e=r(()=>m(`
        <div aria-live="polite">
        </div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:t})=>{const i=p(t).getByRole("button");n("Hello world").not.toBeAnnounced(),await u.click(i),n("Hello world").toBeAnnounced("polite")};const o=r(()=>m(`
        <div></div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:t})=>{const i=p(t).getByRole("button");n("Hello world").not.toBeAnnounced(),await u.click(i),n("Hello world").not.toBeAnnounced()};var a,l,v;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const C=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,C as __namedExportsOrder,R as default};
//# sourceMappingURL=AriaLivePolite.stories-724573f0.js.map
