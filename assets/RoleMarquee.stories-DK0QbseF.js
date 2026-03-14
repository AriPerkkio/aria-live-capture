import{n as e}from"./iframe-iMBPCvXT.js";var{within:t,userEvent:n}=__STORYBOOK_MODULE_TEST__,{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Role/role="marquee"`},a=()=>e(`
        <div role="marquee">
        </div>
        `,`
        <div role="marquee">
            Hello world
        </div>
        `);a.storyName=`With text content ❌`,a.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).not.toBeAnnounced()};var o=()=>e(`
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
        `);o.storyName=`Wraps live region ✅`,o.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).toBeAnnounced(`polite`)};var s=()=>e(`
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
        `);s.storyName=`Wrapped in live region ❌`,s.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).not.toBeAnnounced()};var c=()=>e(`
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
        `);c.storyName=`Sibling is visible ⚠️`,c.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`world`).toBeAnnounced(`polite`),r(`Hello world`).not.toBeAnnounced(),r(`world`).not.toBeAnnounced()},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="marquee">
        </div>
        \`, \`
        <div role="marquee">
            Hello world
        </div>
        \`);
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}};var l=[`WithTextContent`,`WrapsLiveRegion`,`WrappedInLiveRegion`,`SiblingIsVisible`];export{c as SiblingIsVisible,a as WithTextContent,s as WrappedInLiveRegion,o as WrapsLiveRegion,l as __namedExportsOrder,i as default};