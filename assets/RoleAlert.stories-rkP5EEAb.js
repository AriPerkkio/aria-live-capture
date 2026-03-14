import{n as e}from"./iframe-iMBPCvXT.js";var{within:t,userEvent:n}=__STORYBOOK_MODULE_TEST__,{expect:r}=__STORYBOOK_MODULE_TEST__,i={title:`Role/role="alert"`},a=()=>e(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            Hello world
        </div>
        `);a.storyName=`Live region available before content ✅`,a.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).toBeAnnounced(`assertive`)};var o=()=>e(`
        <div></div>
        `,`
        <div role="alert">
            Hello world
        </div>
        `);o.storyName=`Live region unavailable before content ✅`,o.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).toBeAnnounced(`assertive`)};var s=()=>e(`
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
        `);s.storyName=`Anchestor is hidden ❌`,s.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).not.toBeAnnounced()};var c=()=>e(`
        <div aria-hidden="true" role="alert">
        </div>
        `,`
        <div aria-hidden="true" role="alert">
            Hello world
        </div>
        `);c.storyName=`Live region is hidden ❌`,c.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).not.toBeAnnounced()};var l=()=>e(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `);l.storyName=`Content is hidden ❌`,l.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).not.toBeAnnounced()};var u=()=>e(`
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
        `);u.storyName=`Content is partially hidden ⚠️`,u.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).not.toBeAnnounced(),r(`Hello`).toBeAnnounced(`assertive`)};var d=()=>e(`
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
        `);d.storyName=`Part of content changes ✅`,d.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).toBeAnnounced(`assertive`)};var f=()=>e(`
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
        `);f.storyName=`aria-hidden changes ✅`,f.play=async({canvasElement:e})=>{let i=t(e).getByRole(`button`);r(`Hello world`).not.toBeAnnounced(),await n.click(i),r(`Hello world`).toBeAnnounced(`assertive`)},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
        </div>
        \`, \`
        <div role="alert">
            Hello world
        </div>
        \`);
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div role="alert">
            Hello world
        </div>
        \`);
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true" role="alert">
        </div>
        \`, \`
        <div aria-hidden="true" role="alert">
            Hello world
        </div>
        \`);
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}};var p=[`LiveRegionAvailableBeforeContent`,`LiveRegionUnavailableBeforeContent`,`AnchestorIsHidden`,`LiveRegionIsHidden`,`ContentIsHidden`,`ContentIsPartiallyHidden`,`PartOfContentChanges`,`AriaHiddenChanges`];export{s as AnchestorIsHidden,f as AriaHiddenChanges,l as ContentIsHidden,u as ContentIsPartiallyHidden,a as LiveRegionAvailableBeforeContent,c as LiveRegionIsHidden,o as LiveRegionUnavailableBeforeContent,d as PartOfContentChanges,p as __namedExportsOrder,i as default};