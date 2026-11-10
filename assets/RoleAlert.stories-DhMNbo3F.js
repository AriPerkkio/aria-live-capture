import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./runtime-CLZ2u-Zl.js";import{i as r,r as i}from"./iframe-Cj23tzbu.js";var a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),r(),t(),{within:a,userEvent:o}=__STORYBOOK_MODULE_TEST__,{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Role/role="alert"`},l=()=>i(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            Hello world
        </div>
        `),l.storyName=`Live region available before content ✅`,l.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).toBeAnnounced(`assertive`)},u=()=>i(`
        <div></div>
        `,`
        <div role="alert">
            Hello world
        </div>
        `),u.storyName=`Live region unavailable before content ✅`,u.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).toBeAnnounced(`assertive`)},d=()=>i(`
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
        `),d.storyName=`Anchestor is hidden ❌`,d.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).not.toBeAnnounced()},f=()=>i(`
        <div aria-hidden="true" role="alert">
        </div>
        `,`
        <div aria-hidden="true" role="alert">
            Hello world
        </div>
        `),f.storyName=`Live region is hidden ❌`,f.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).not.toBeAnnounced()},p=()=>i(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `),p.storyName=`Content is hidden ❌`,p.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).not.toBeAnnounced()},m=()=>i(`
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
        `),m.storyName=`Content is partially hidden ⚠️`,m.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).not.toBeAnnounced(),s(`Hello`).toBeAnnounced(`assertive`)},h=()=>i(`
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
        `),h.storyName=`Part of content changes ✅`,h.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).toBeAnnounced(`assertive`)},g=()=>i(`
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
        `),g.storyName=`aria-hidden changes ✅`,g.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).toBeAnnounced(`assertive`)},_=[`LiveRegionAvailableBeforeContent`,`LiveRegionUnavailableBeforeContent`,`AnchestorIsHidden`,`LiveRegionIsHidden`,`ContentIsHidden`,`ContentIsPartiallyHidden`,`PartOfContentChanges`,`AriaHiddenChanges`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div role="alert">
        </div>
        \`,
    \`
        <div role="alert">
            Hello world
        </div>
        \`,
  );
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div></div>
        \`,
    \`
        <div role="alert">
            Hello world
        </div>
        \`,
  );
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-hidden="true">
            <div role="alert">
            </div>
        </div>
        \`,
    \`
        <div aria-hidden="true">
            <div role="alert">
                Hello world
            </div>
        </div>
        \`,
  );
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-hidden="true" role="alert">
        </div>
        \`,
    \`
        <div aria-hidden="true" role="alert">
            Hello world
        </div>
        \`,
  );
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div role="alert">
        </div>
        \`,
    \`
        <div role="alert">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        \`,
  );
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div role="alert">
        </div>
        \`,
    \`
        <div role="alert">
            <span>
                Hello
            </span>
            <span aria-hidden="true">
                world
            </span>
        </div>
        \`,
  );
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div role="alert">
            <span>
                Hello
            </span>
        </div>
        \`,
    \`
        <div role="alert">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        \`,
  );
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div role="alert">
            <span aria-hidden="true">
                Hello world
            </span>
        </div>
        \`,
    \`
        <div role="alert">
            <span>
                Hello world
            </span>
        </div>
        \`,
  );
}`,...g.parameters?.docs?.source}}}})))()}v();export{d as AnchestorIsHidden,g as AriaHiddenChanges,p as ContentIsHidden,m as ContentIsPartiallyHidden,l as LiveRegionAvailableBeforeContent,f as LiveRegionIsHidden,u as LiveRegionUnavailableBeforeContent,h as PartOfContentChanges,_ as __namedExportsOrder,c as default};