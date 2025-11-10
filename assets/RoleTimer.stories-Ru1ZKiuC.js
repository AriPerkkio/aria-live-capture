var c=Object.defineProperty;var d=(o,t)=>c(o,"name",{value:t,configurable:!0});import{w as s,e,u as a}from"./index-YQA0kDYo.js";import{c as v}from"./utils-XaxLrPgB.js";import"./_commonjsHelpers-BO6-jdEg.js";import"./index-B7qynYb3.js";const y={title:'Role/role="timer"'},r=d(()=>v(`
        <div role="timer">
        </div>
        `,`
        <div role="timer">
            Hello world
        </div>
        `),"WithTextContent");r.storyName="With text content ❌";r.play=async({canvasElement:o})=>{const t=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(t),e("Hello world").not.toBeAnnounced()};const n=d(()=>v(`
        <div role="timer">
            <div role="status">
            </div>
        </div>
        `,`
        <div role="timer">
            <div role="status">
                Hello world
            </div>
        </div>
        `),"WrapsLiveRegion");n.storyName="Wraps live region ✅";n.play=async({canvasElement:o})=>{const t=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(t),e("Hello world").toBeAnnounced("polite")};const i=d(()=>v(`
        <div role="status">
            <div role="timer">
            </div>
        </div>
        `,`
        <div role="status">
            <div role="timer">
                Hello world
            </div>
        </div>
        `),"WrappedInLiveRegion");i.storyName="Wrapped in live region ❌";i.play=async({canvasElement:o})=>{const t=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(t),e("Hello world").not.toBeAnnounced()};const l=d(()=>v(`
        <div role="status">
            <div role="timer">
            </div>
        </div>
        `,`
        <div role="status">
            <div role="timer">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        `),"SiblingIsVisible");l.storyName="Sibling is visible ⚠️";l.play=async({canvasElement:o})=>{const t=s(o).getByRole("button");e("world").not.toBeAnnounced("polite"),await a.click(t),e("world").toBeAnnounced("polite"),e("Hello").not.toBeAnnounced(),e("Hello world").not.toBeAnnounced()};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="timer">
        </div>
        \`, \`
        <div role="timer">
            Hello world
        </div>
        \`);
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="timer">
            <div role="status">
            </div>
        </div>
        \`, \`
        <div role="timer">
            <div role="status">
                Hello world
            </div>
        </div>
        \`);
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
            <div role="timer">
            </div>
        </div>
        \`, \`
        <div role="status">
            <div role="timer">
                Hello world
            </div>
        </div>
        \`);
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
            <div role="timer">
            </div>
        </div>
        \`, \`
        <div role="status">
            <div role="timer">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        \`);
}`,...l.parameters?.docs?.source}}};const H=["WithTextContent","WrapsLiveRegion","WrappedInLiveRegion","SiblingIsVisible"];export{l as SiblingIsVisible,r as WithTextContent,i as WrappedInLiveRegion,n as WrapsLiveRegion,H as __namedExportsOrder,y as default};
