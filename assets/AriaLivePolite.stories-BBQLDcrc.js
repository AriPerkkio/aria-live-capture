var c=Object.defineProperty;var r=(n,t)=>c(n,"name",{value:t,configurable:!0});import{c as a}from"./iframe-4dnwcpfT.js";import"./preload-helper-CL58OYxb.js";const{within:l,userEvent:v}=__STORYBOOK_MODULE_TEST__,{expect:i}=__STORYBOOK_MODULE_TEST__,p={title:'Aria-live/aria-live="polite"'},e=r(()=>a(`
        <div aria-live="polite">
        </div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:n})=>{const t=l(n).getByRole("button");i("Hello world").not.toBeAnnounced(),await v.click(t),i("Hello world").toBeAnnounced("polite")};const o=r(()=>a(`
        <div></div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:n})=>{const t=l(n).getByRole("button");i("Hello world").not.toBeAnnounced(),await v.click(t),i("Hello world").not.toBeAnnounced()};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite">
        </div>
        \`, \`
        <div aria-live="polite">
            Hello world
        </div>
        \`);
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div aria-live="polite">
            Hello world
        </div>
        \`);
}`,...o.parameters?.docs?.source}}};const g=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,g as __namedExportsOrder,p as default};
