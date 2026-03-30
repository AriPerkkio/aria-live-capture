import{n as e}from"./chunk-BneVvdWh.js";import{n as t,r as n}from"./iframe-DJCPndM6.js";var r,i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),{within:r,userEvent:i}=__STORYBOOK_MODULE_TEST__,{expect:a}=__STORYBOOK_MODULE_TEST__,o={title:`Aria-live/aria-live="assertive"`},s=()=>t(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            Hello world
        </div>
        `),s.storyName=`Live region available before content ✅`,s.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).toBeAnnounced(`assertive`)},c=()=>t(`
        <div>
        </div>
        `,`
        <div aria-live="assertive">
            Hello world
        </div>
        `),c.storyName=`Live region unavailable before content ❌`,c.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},l=()=>t(`
        <div aria-hidden="true">
            <div aria-live="assertive">
            </div>
        </div>
        `,`
        <div aria-hidden="true">
            <div aria-live="assertive">
                Hello world
            </div>
        </div>
        `),l.storyName=`Anchestor is hidden ❌`,l.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},u=()=>t(`
        <div aria-hidden="true" aria-live="assertive">
        </div>
        `,`
        <div aria-hidden="true" aria-live="assertive">
            Hello world
        </div>
        `),u.storyName=`Live region is hidden ❌`,u.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},d=()=>t(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `),d.storyName=`Content is hidden ❌`,d.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).not.toBeAnnounced()},f=()=>t(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            <span>
                Hello
            </span>
            <span aria-hidden="true">
                world
            </span>
        </div>
        `),f.storyName=`Content is partially hidden ⚠️`,f.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello`).not.toBeAnnounced(),await i.click(t),a(`Hello`).toBeAnnounced(`assertive`),a(`world`).not.toBeAnnounced(),a(`Hello world`).not.toBeAnnounced()},p=()=>t(`
        <div aria-live="assertive">
            <span>
                Hello
            </span>
        </div>
        `,`
        <div aria-live="assertive">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        `),p.storyName=`Part of content changes ✅`,p.play=async({canvasElement:e})=>{let t=r(e).getByRole(`button`);a(`Hello world`).not.toBeAnnounced(),await i.click(t),a(`Hello world`).toBeAnnounced(`assertive`)},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="assertive">
        </div>
        \`, \`
        <div aria-live="assertive">
            Hello world
        </div>
        \`);
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div>
        </div>
        \`, \`
        <div aria-live="assertive">
            Hello world
        </div>
        \`);
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true">
            <div aria-live="assertive">
            </div>
        </div>
        \`, \`
        <div aria-hidden="true">
            <div aria-live="assertive">
                Hello world
            </div>
        </div>
        \`);
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true" aria-live="assertive">
        </div>
        \`, \`
        <div aria-hidden="true" aria-live="assertive">
            Hello world
        </div>
        \`);
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="assertive">
        </div>
        \`, \`
        <div aria-live="assertive">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        \`);
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="assertive">
        </div>
        \`, \`
        <div aria-live="assertive">
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
        <div aria-live="assertive">
            <span>
                Hello
            </span>
        </div>
        \`, \`
        <div aria-live="assertive">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        \`);
}`,...p.parameters?.docs?.source}}},m=[`LiveRegionAvailableBeforeContent`,`LiveRegionUnavailableBeforeContent`,`AnchestorIsHidden`,`LiveRegionIsHidden`,`ContentIsHidden`,`ContentIsPartiallyHidden`,`PartOfContentChanges`]}))();export{l as AnchestorIsHidden,d as ContentIsHidden,f as ContentIsPartiallyHidden,s as LiveRegionAvailableBeforeContent,u as LiveRegionIsHidden,c as LiveRegionUnavailableBeforeContent,p as PartOfContentChanges,m as __namedExportsOrder,o as default};