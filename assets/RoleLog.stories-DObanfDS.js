var d=Object.defineProperty;var l=(n,t)=>d(n,"name",{value:t,configurable:!0});import{c as a}from"./iframe-82Zg_pZv.js";import"./preload-helper-CL58OYxb.js";const{within:i,userEvent:c}=__STORYBOOK_MODULE_TEST__,{expect:r}=__STORYBOOK_MODULE_TEST__,u={title:'Role/role="log"'},e=l(()=>a(`
        <div role="log">
        </div>
        `,`
        <div role="log">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:n})=>{const t=i(n).getByRole("button");r("Hello world").not.toBeAnnounced(),await c.click(t),r("Hello world").toBeAnnounced("polite")};const o=l(()=>a(`
        <div></div>
        `,`
        <div role="log">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:n})=>{const t=i(n).getByRole("button");r("Hello world").not.toBeAnnounced(),await c.click(t),r("Hello world").not.toBeAnnounced()};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};const p=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,p as __namedExportsOrder,u as default};
