var s=Object.defineProperty;var l=(n,r)=>s(n,"name",{value:r,configurable:!0});import{w as a,e as t,u as i}from"./index-BnDO0qUp.js";import{c as d}from"./utils-XaxLrPgB.js";import"./_commonjsHelpers-BO6-jdEg.js";import"./index-B7qynYb3.js";const m={title:'Role/role="log"'},e=l(()=>d(`
        <div role="log">
        </div>
        `,`
        <div role="log">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:n})=>{const r=a(n).getByRole("button");t("Hello world").not.toBeAnnounced(),await i.click(r),t("Hello world").toBeAnnounced("polite")};const o=l(()=>d(`
        <div></div>
        `,`
        <div role="log">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:n})=>{const r=a(n).getByRole("button");t("Hello world").not.toBeAnnounced(),await i.click(r),t("Hello world").not.toBeAnnounced()};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="log">
        </div>
        \`, \`
        <div role="log">
            Hello world
        </div>
        \`);
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div role="log">
            Hello world
        </div>
        \`);
}`,...o.parameters?.docs?.source}}};const b=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,b as __namedExportsOrder,m as default};
