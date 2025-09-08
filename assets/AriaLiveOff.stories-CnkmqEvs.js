var c=Object.defineProperty;var l=(i,o)=>c(i,"name",{value:o,configurable:!0});import{w as d,e,u as v}from"./index-BaxticXy.js";import{c as s}from"./utils-XaxLrPgB.js";import"./_commonjsHelpers-BO6-jdEg.js";import"./index-B7qynYb3.js";const w={title:'Aria-live/aria-live="off"'},n=l(()=>s(`
        <div aria-live="off">
        </div>
        `,`
        <div aria-live="off">
            Hello world
        </div>
        `),"WithTextContent");n.storyName="With text content ❌";n.play=async({canvasElement:i})=>{const o=d(i).getByRole("button");e("Hello world").not.toBeAnnounced(),await v.click(o),e("Hello world").not.toBeAnnounced()};const r=l(()=>s(`
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
        `),"WrapsLiveRegion");r.storyName="Wraps live region ✅";r.play=async({canvasElement:i})=>{const o=d(i).getByRole("button");e("Hello world").not.toBeAnnounced(),await v.click(o),e("Hello world").toBeAnnounced("polite")};const a=l(()=>s(`
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
        `),"WrappedInLiveRegion");a.storyName="Wrapped in live region ❌";a.play=async({canvasElement:i})=>{const o=d(i).getByRole("button");e("Hello world").not.toBeAnnounced(),await v.click(o),e("Hello world").not.toBeAnnounced()};const t=l(()=>s(`
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
        `),"SiblingIsVisible");t.storyName="Sibling is visible ⚠️";t.play=async({canvasElement:i})=>{const o=d(i).getByRole("button");e("world").not.toBeAnnounced(),await v.click(o),e("world").toBeAnnounced("polite"),e("Hello").not.toBeAnnounced(),e("Hello world").not.toBeAnnounced()};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};const y=["WithTextContent","WrapsLiveRegion","WrappedInLiveRegion","SiblingIsVisible"];export{t as SiblingIsVisible,n as WithTextContent,a as WrappedInLiveRegion,r as WrapsLiveRegion,y as __namedExportsOrder,w as default};
