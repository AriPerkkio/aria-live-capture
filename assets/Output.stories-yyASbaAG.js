import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,r as n}from"./iframe-BircjbKM.js";var r,i,a,o,s,c,l;e((()=>{n(),{within:r,userEvent:i}=__STORYBOOK_MODULE_TEST__,{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Elements/<output>`},s=()=>t(`
        <output>
        </output>
        `,`
        <output>
            Hello world
        </output>
        `),s.storyName=`Live region available before content ✅`,s.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).toBeAnnounced(`polite`)},c=()=>t(`
        <div>
        </div>
        `,`
        <div>
            <output>
                Hello world
            </output>
        </div>
        `),c.storyName=`Live region unavailable before content ❌`,c.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <output>
        </output>
        \`, \`
        <output>
            Hello world
        </output>
        \`);
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}},l=[`LiveRegionAvailableBeforeContent`,`LiveRegionUnavailableBeforeContent`]}))();export{s as LiveRegionAvailableBeforeContent,c as LiveRegionUnavailableBeforeContent,l as __namedExportsOrder,o as default};