import{n as e}from"./chunk-DnJy8xQt.js";import{n as t,r as n}from"./iframe-DSouU4b9.js";var r,i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),{within:r,userEvent:i}=__STORYBOOK_MODULE_TEST__,{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Role/role="alert"`},s=()=>t(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            Hello world
        </div>
        `),s.storyName=`Live region available before content ✅`,s.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).toBeAnnounced(`assertive`)},c=()=>t(`
        <div></div>
        `,`
        <div role="alert">
            Hello world
        </div>
        `),c.storyName=`Live region unavailable before content ✅`,c.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).toBeAnnounced(`assertive`)},l=()=>t(`
        <div aria-hidden="true">
            <div role="alert">
            </div>
        </div>
        `,`
        <div aria-hidden="true">
            <div role="alert">
                Hello world
            </div>
        </div>
        `),l.storyName=`Anchestor is hidden ❌`,l.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},u=()=>t(`
        <div aria-hidden="true" role="alert">
        </div>
        `,`
        <div aria-hidden="true" role="alert">
            Hello world
        </div>
        `),u.storyName=`Live region is hidden ❌`,u.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},d=()=>t(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `),d.storyName=`Content is hidden ❌`,d.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},f=()=>t(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            <span>
                Hello
            </span>
            <span aria-hidden="true">
                world
            </span>
        </div>
        `),f.storyName=`Content is partially hidden ⚠️`,f.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced(),a(`Hello`).toBeAnnounced(`assertive`)},p=()=>t(`
        <div role="alert">
            <span>
                Hello
            </span>
        </div>
        `,`
        <div role="alert">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        `),p.storyName=`Part of content changes ✅`,p.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).toBeAnnounced(`assertive`)},m=()=>t(`
        <div role="alert">
            <span aria-hidden="true">
                Hello world
            </span>
        </div>
        `,`
        <div role="alert">
            <span>
                Hello world
            </span>
        </div>
        `),m.storyName=`aria-hidden changes ✅`,m.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).toBeAnnounced(`assertive`)},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
        </div>
        \`, \`
        <div role="alert">
            Hello world
        </div>
        \`);
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div role="alert">
            Hello world
        </div>
        \`);
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true">
            <div role="alert">
            </div>
        </div>
        \`, \`
        <div aria-hidden="true">
            <div role="alert">
                Hello world
            </div>
        </div>
        \`);
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true" role="alert">
        </div>
        \`, \`
        <div aria-hidden="true" role="alert">
            Hello world
        </div>
        \`);
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
        </div>
        \`, \`
        <div role="alert">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        \`);
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
        </div>
        \`, \`
        <div role="alert">
            <span>
                Hello
            </span>
            <span aria-hidden="true">
                world
            </span>
        </div>
        \`);
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
            <span>
                Hello
            </span>
        </div>
        \`, \`
        <div role="alert">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        \`);
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
            <span aria-hidden="true">
                Hello world
            </span>
        </div>
        \`, \`
        <div role="alert">
            <span>
                Hello world
            </span>
        </div>
        \`);
}`,...m.parameters?.docs?.source}}},h=[`LiveRegionAvailableBeforeContent`,`LiveRegionUnavailableBeforeContent`,`AnchestorIsHidden`,`LiveRegionIsHidden`,`ContentIsHidden`,`ContentIsPartiallyHidden`,`PartOfContentChanges`,`AriaHiddenChanges`]}))();export{l as AnchestorIsHidden,m as AriaHiddenChanges,d as ContentIsHidden,f as ContentIsPartiallyHidden,s as LiveRegionAvailableBeforeContent,u as LiveRegionIsHidden,c as LiveRegionUnavailableBeforeContent,p as PartOfContentChanges,h as __namedExportsOrder,o as default};