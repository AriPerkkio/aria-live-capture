var m=Object.defineProperty;var l=(n,r)=>m(n,"name",{value:r,configurable:!0});import{w as u,e as t,u as g}from"./index-DhTzn6qG.js";import{c as p}from"./utils-DoweNrC_.js";import"./_commonjsHelpers-1BxWT6uA.js";import"./index-B7qynYb3.js";const H={title:'Role/role="log"'},e=l(()=>p(`
        <div role="log">
        </div>
        `,`
        <div role="log">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:n})=>{const r=u(n).getByRole("button");t("Hello world").not.toBeAnnounced(),await g.click(r),t("Hello world").toBeAnnounced("polite")};const o=l(()=>p(`
        <div></div>
        `,`
        <div role="log">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:n})=>{const r=u(n).getByRole("button");t("Hello world").not.toBeAnnounced(),await g.click(r),t("Hello world").not.toBeAnnounced()};var a,i,d;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="log">
        </div>
        \`, \`
        <div role="log">
            Hello world
        </div>
        \`);
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var s,c,v;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div role="log">
            Hello world
        </div>
        \`);
}`,...(v=(c=o.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};const R=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,R as __namedExportsOrder,H as default};
