var c=Object.defineProperty;var l=(i,o)=>c(i,"name",{value:o,configurable:!0});import{c as d}from"./iframe-ujSHn6nD.js";import"./preload-helper-CL58OYxb.js";const{within:v,userEvent:s}=__STORYBOOK_MODULE_TEST__,{expect:e}=__STORYBOOK_MODULE_TEST__,g={title:'Aria-live/aria-live="off"'},n=l(()=>d(`
        <div aria-live="off">
        </div>
        `,`
        <div aria-live="off">
            Hello world
        </div>
        `),"WithTextContent");n.storyName="With text content ❌";n.play=async({canvasElement:i})=>{const o=v(i).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(o),e("Hello world").not.toBeAnnounced()};const r=l(()=>d(`
        <div aria-live="off">
            <div aria-live="polite">
            </div>
        </div>
        `,`
        <div aria-live="off">
            <div aria-live="polite">
                Hello world
            </div>
        </div>
        `),"WrapsLiveRegion");r.storyName="Wraps live region ✅";r.play=async({canvasElement:i})=>{const o=v(i).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(o),e("Hello world").toBeAnnounced("polite")};const a=l(()=>d(`
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        `,`
        <div aria-live="polite">
            <div aria-live="off">
                Hello world
            </div>
        </div>
        `),"WrappedInLiveRegion");a.storyName="Wrapped in live region ❌";a.play=async({canvasElement:i})=>{const o=v(i).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(o),e("Hello world").not.toBeAnnounced()};const t=l(()=>d(`
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        `,`
        <div aria-live="polite">
            <div aria-live="off">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        `),"SiblingIsVisible");t.storyName="Sibling is visible ⚠️";t.play=async({canvasElement:i})=>{const o=v(i).getByRole("button");e("world").not.toBeAnnounced(),await s.click(o),e("world").toBeAnnounced("polite"),e("Hello").not.toBeAnnounced(),e("Hello world").not.toBeAnnounced()};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="off">
        </div>
        \`, \`
        <div aria-live="off">
            Hello world
        </div>
        \`);
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="off">
            <div aria-live="polite">
            </div>
        </div>
        \`, \`
        <div aria-live="off">
            <div aria-live="polite">
                Hello world
            </div>
        </div>
        \`);
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        \`, \`
        <div aria-live="polite">
            <div aria-live="off">
                Hello world
            </div>
        </div>
        \`);
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        \`, \`
        <div aria-live="polite">
            <div aria-live="off">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        \`);
}`,...t.parameters?.docs?.source}}};const m=["WithTextContent","WrapsLiveRegion","WrappedInLiveRegion","SiblingIsVisible"];export{t as SiblingIsVisible,n as WithTextContent,a as WrappedInLiveRegion,r as WrapsLiveRegion,m as __namedExportsOrder,g as default};
