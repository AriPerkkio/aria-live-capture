import{n as e}from"./iframe-iMBPCvXT.js";var{within:t,userEvent:n}=__STORYBOOK_MODULE_TEST__,{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Aria-live/aria-live="polite"`},a=()=>e(`
        <div aria-live="polite">
        </div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `);a.storyName=`Live region available before content ✅`,a.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).toBeAnnounced(`polite`)};var o=()=>e(`
        <div></div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `);o.storyName=`Live region unavailable before content ❌`,o.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).not.toBeAnnounced()},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite">
        </div>
        \`, \`
        <div aria-live="polite">
            Hello world
        </div>
        \`);
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div aria-live="polite">
            Hello world
        </div>
        \`);
}`,...o.parameters?.docs?.source}}};var s=[`LiveRegionAvailableBeforeContent`,`LiveRegionUnavailableBeforeContent`];export{a as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,s as __namedExportsOrder,i as default};