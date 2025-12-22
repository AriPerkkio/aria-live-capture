var v=Object.defineProperty;var d=(o,r)=>v(o,"name",{value:r,configurable:!0});import{w as a,e,u as s}from"./index-CxefnIDm.js";import{c as u}from"./utils-XaxLrPgB.js";import"./_commonjsHelpers-BO6-jdEg.js";import"./index-B7qynYb3.js";const q={title:'Role/role="marquee"'},n=d(()=>u(`
        <div role="marquee">
        </div>
        `,`
        <div role="marquee">
            Hello world
        </div>
        `),"WithTextContent");n.storyName="With text content ❌";n.play=async({canvasElement:o})=>{const r=a(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(r),e("Hello world").not.toBeAnnounced()};const t=d(()=>u(`
        <div role="marquee">
            <div role="status">
            </div>
        </div>
        `,`
        <div role="marquee">
            <div role="status">
                Hello world
            </div>
        </div>
        `),"WrapsLiveRegion");t.storyName="Wraps live region ✅";t.play=async({canvasElement:o})=>{const r=a(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(r),e("Hello world").toBeAnnounced("polite")};const i=d(()=>u(`
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        `,`
        <div role="status">
            <div role="marquee">
                Hello world
            </div>
        </div>
        `),"WrappedInLiveRegion");i.storyName="Wrapped in live region ❌";i.play=async({canvasElement:o})=>{const r=a(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(r),e("Hello world").not.toBeAnnounced()};const l=d(()=>u(`
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        `,`
        <div role="status">
            <div role="marquee">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        `),"SiblingIsVisible");l.storyName="Sibling is visible ⚠️";l.play=async({canvasElement:o})=>{const r=a(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(r),e("world").toBeAnnounced("polite"),e("Hello world").not.toBeAnnounced(),e("world").not.toBeAnnounced()};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="marquee">
        </div>
        \`, \`
        <div role="marquee">
            Hello world
        </div>
        \`);
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="marquee">
            <div role="status">
            </div>
        </div>
        \`, \`
        <div role="marquee">
            <div role="status">
                Hello world
            </div>
        </div>
        \`);
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        \`, \`
        <div role="status">
            <div role="marquee">
                Hello world
            </div>
        </div>
        \`);
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        \`, \`
        <div role="status">
            <div role="marquee">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        \`);
}`,...l.parameters?.docs?.source}}};const y=["WithTextContent","WrapsLiveRegion","WrappedInLiveRegion","SiblingIsVisible"];export{l as SiblingIsVisible,n as WithTextContent,i as WrappedInLiveRegion,t as WrapsLiveRegion,y as __namedExportsOrder,q as default};
