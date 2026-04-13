import{n as e}from"./chunk-BneVvdWh.js";import{a as t,i as n}from"./utils-_-ogr3gM.js";var r,i,a,o,s,c,l,u,d;e((()=>{t(),{within:r,userEvent:i}=__STORYBOOK_MODULE_TEST__,{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Role/role="marquee"`},s=()=>n(`
        <div role="marquee">
        </div>
        `,`
        <div role="marquee">
            Hello world
        </div>
        `),s.storyName=`With text content ❌`,s.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},c=()=>n(`
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
        `),c.storyName=`Wraps live region ✅`,c.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).toBeAnnounced(`polite`)},l=()=>n(`
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
        `),l.storyName=`Wrapped in live region ❌`,l.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},u=()=>n(`
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
        `),u.storyName=`Sibling is visible ⚠️`,u.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`world`).toBeAnnounced(`polite`),a(`Hello world`).not.toBeAnnounced(),a(`world`).not.toBeAnnounced()},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="marquee">
        </div>
        \`, \`
        <div role="marquee">
            Hello world
        </div>
        \`);
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}},d=[`WithTextContent`,`WrapsLiveRegion`,`WrappedInLiveRegion`,`SiblingIsVisible`]}))();export{u as SiblingIsVisible,s as WithTextContent,l as WrappedInLiveRegion,c as WrapsLiveRegion,d as __namedExportsOrder,o as default};