var c=Object.defineProperty;var u=(t,n)=>c(t,"name",{value:n,configurable:!0});import{c as a}from"./iframe-ujSHn6nD.js";import"./preload-helper-CL58OYxb.js";const{within:l,userEvent:i}=__STORYBOOK_MODULE_TEST__,{expect:r}=__STORYBOOK_MODULE_TEST__,v={title:"Elements/<output>"},e=u(()=>a(`
        <output>
        </output>
        `,`
        <output>
            Hello world
        </output>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:t})=>{const n=l(t).getByRole("button");r("Hello world").not.toBeAnnounced(),await i.click(n),r("Hello world").toBeAnnounced("polite")};const o=u(()=>a(`
        <div>
        </div>
        `,`
        <div>
            <output>
                Hello world
            </output>
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:t})=>{const n=l(t).getByRole("button");r("Hello world").not.toBeAnnounced(),await i.click(n),r("Hello world").not.toBeAnnounced()};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <output>
        </output>
        \`, \`
        <output>
            Hello world
        </output>
        \`);
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div>
        </div>
        \`, \`
        <div>
            <output>
                Hello world
            </output>
        </div>
        \`);
}`,...o.parameters?.docs?.source}}};const g=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,g as __namedExportsOrder,v as default};
