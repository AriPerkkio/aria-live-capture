var m=Object.defineProperty;var l=(n,r)=>m(n,"name",{value:r,configurable:!0});import{w as u,e as t,u as g}from"./index-b851fdf4.js";import{c as p}from"./utils-21f1601d.js";import"./index-722d4584.js";import"./index-ce7257af.js";import"./uniq-6402743e.js";import"./index-b4278562.js";import"./index-c8c96787.js";const A={title:'Role/role="log"'},e=l(()=>p(`
        <div role="log">
        </div>
        `,`
        <div role="log">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:n})=>{const r=u(n).getByRole("button");t("Hello world").not.toBeAnnounced(),g.click(r),t("Hello world").toBeAnnounced("polite")};const o=l(()=>p(`
        <div></div>
        `,`
        <div role="log">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:n})=>{const r=u(n).getByRole("button");t("Hello world").not.toBeAnnounced(),g.click(r),t("Hello world").not.toBeAnnounced()};var i,a,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="log">
        </div>
        \`, \`
        <div role="log">
            Hello world
        </div>
        \`);
}`,...(d=(a=e.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var s,c,v;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div role="log">
            Hello world
        </div>
        \`);
}`,...(v=(c=o.parameters)==null?void 0:c.docs)==null?void 0:v.source}}};const C=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,C as __namedExportsOrder,A as default};
//# sourceMappingURL=RoleLog.stories-605b0af9.js.map
