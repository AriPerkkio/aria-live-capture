import{n as e}from"./iframe-iMBPCvXT.js";var{within:t,userEvent:n}=__STORYBOOK_MODULE_TEST__,{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Elements/<output>`},a=()=>e(`
        <output>
        </output>
        `,`
        <output>
            Hello world
        </output>
        `);a.storyName=`Live region available before content ✅`,a.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).toBeAnnounced(`polite`)};var o=()=>e(`
        <div>
        </div>
        `,`
        <div>
            <output>
                Hello world
            </output>
        </div>
        `);o.storyName=`Live region unavailable before content ❌`,o.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).not.toBeAnnounced()},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <output>
        </output>
        \`, \`
        <output>
            Hello world
        </output>
        \`);
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}};var s=[`LiveRegionAvailableBeforeContent`,`LiveRegionUnavailableBeforeContent`];export{a as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,s as __namedExportsOrder,i as default};