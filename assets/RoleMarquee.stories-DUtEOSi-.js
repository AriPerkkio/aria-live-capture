var v=Object.defineProperty;var d=(o,r)=>v(o,"name",{value:r,configurable:!0});import{c as a}from"./iframe-4dnwcpfT.js";import"./preload-helper-CL58OYxb.js";const{within:s,userEvent:u}=__STORYBOOK_MODULE_TEST__,{expect:e}=__STORYBOOK_MODULE_TEST__,g={title:'Role/role="marquee"'},n=d(()=>a(`
        <div role="marquee">
        </div>
        `,`
        <div role="marquee">
            Hello world
        </div>
        `),"WithTextContent");n.storyName="With text content ❌";n.play=async({canvasElement:o})=>{const r=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await u.click(r),e("Hello world").not.toBeAnnounced()};const t=d(()=>a(`
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
        `),"WrapsLiveRegion");t.storyName="Wraps live region ✅";t.play=async({canvasElement:o})=>{const r=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await u.click(r),e("Hello world").toBeAnnounced("polite")};const l=d(()=>a(`
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
        `),"WrappedInLiveRegion");l.storyName="Wrapped in live region ❌";l.play=async({canvasElement:o})=>{const r=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await u.click(r),e("Hello world").not.toBeAnnounced()};const i=d(()=>a(`
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
        `),"SiblingIsVisible");i.storyName="Sibling is visible ⚠️";i.play=async({canvasElement:o})=>{const r=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await u.click(r),e("world").toBeAnnounced("polite"),e("Hello world").not.toBeAnnounced(),e("world").not.toBeAnnounced()};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};const w=["WithTextContent","WrapsLiveRegion","WrappedInLiveRegion","SiblingIsVisible"];export{i as SiblingIsVisible,n as WithTextContent,l as WrappedInLiveRegion,t as WrapsLiveRegion,w as __namedExportsOrder,g as default};
