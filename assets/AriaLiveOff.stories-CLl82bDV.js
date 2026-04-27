import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,r as n}from"./iframe-DSouU4b9.js";var r,i,a,o,s,c,l,u,d;e((()=>{n(),{within:r,userEvent:i}=__STORYBOOK_MODULE_TEST__,{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Aria-live/aria-live="off"`},s=()=>t(`
        <div aria-live="off">
        </div>
        `,`
        <div aria-live="off">
            Hello world
        </div>
        `),s.storyName=`With text content ❌`,s.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},c=()=>t(`
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
        `),c.storyName=`Wraps live region ✅`,c.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).toBeAnnounced(`polite`)},l=()=>t(`
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
        `),l.storyName=`Wrapped in live region ❌`,l.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},u=()=>t(`
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
        `),u.storyName=`Sibling is visible ⚠️`,u.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`world`).not.toBeAnnounced(),await i.click(t),a(`world`).toBeAnnounced(`polite`),a(`Hello`).not.toBeAnnounced(),a(`Hello world`).not.toBeAnnounced()},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="off">
        </div>
        \`, \`
        <div aria-live="off">
            Hello world
        </div>
        \`);
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}},d=[`WithTextContent`,`WrapsLiveRegion`,`WrappedInLiveRegion`,`SiblingIsVisible`]}))();export{u as SiblingIsVisible,s as WithTextContent,l as WrappedInLiveRegion,c as WrapsLiveRegion,d as __namedExportsOrder,o as default};