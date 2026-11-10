import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./runtime-CLZ2u-Zl.js";import{i as r,r as i}from"./iframe-Cj23tzbu.js";var a,o,s,c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),r(),t(),{within:a,userEvent:o}=__STORYBOOK_MODULE_TEST__,{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Aria-live/aria-live="assertive"`},l=()=>i(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            Hello world
        </div>
        `),l.storyName=`Live region available before content ✅`,l.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).toBeAnnounced(`assertive`)},u=()=>i(`
        <div>
        </div>
        `,`
        <div aria-live="assertive">
            Hello world
        </div>
        `),u.storyName=`Live region unavailable before content ❌`,u.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).not.toBeAnnounced()},d=()=>i(`
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
        `),d.storyName=`Anchestor is hidden ❌`,d.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).not.toBeAnnounced()},f=()=>i(`
        <div aria-hidden="true" aria-live="assertive">
        </div>
        `,`
        <div aria-hidden="true" aria-live="assertive">
            Hello world
        </div>
        `),f.storyName=`Live region is hidden ❌`,f.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).not.toBeAnnounced()},p=()=>i(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `),p.storyName=`Content is hidden ❌`,p.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).not.toBeAnnounced()},m=()=>i(`
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
        `),m.storyName=`Content is partially hidden ⚠️`,m.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello`).not.toBeAnnounced(),await o.click(t),s(`Hello`).toBeAnnounced(`assertive`),s(`world`).not.toBeAnnounced(),s(`Hello world`).not.toBeAnnounced()},h=()=>i(`
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
        `),h.storyName=`Part of content changes ✅`,h.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).toBeAnnounced(`assertive`)},g=[`LiveRegionAvailableBeforeContent`,`LiveRegionUnavailableBeforeContent`,`AnchestorIsHidden`,`LiveRegionIsHidden`,`ContentIsHidden`,`ContentIsPartiallyHidden`,`PartOfContentChanges`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-live="assertive">
        </div>
        \`,
    \`
        <div aria-live="assertive">
            Hello world
        </div>
        \`,
  );
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div>
        </div>
        \`,
    \`
        <div aria-live="assertive">
            Hello world
        </div>
        \`,
  );
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-hidden="true">
            <div aria-live="assertive">
            </div>
        </div>
        \`,
    \`
        <div aria-hidden="true">
            <div aria-live="assertive">
                Hello world
            </div>
        </div>
        \`,
  );
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-hidden="true" aria-live="assertive">
        </div>
        \`,
    \`
        <div aria-hidden="true" aria-live="assertive">
            Hello world
        </div>
        \`,
  );
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-live="assertive">
        </div>
        \`,
    \`
        <div aria-live="assertive">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        \`,
  );
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-live="assertive">
        </div>
        \`,
    \`
        <div aria-live="assertive">
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
        <div aria-live="assertive">
            <span>
                Hello
            </span>
        </div>
        \`,
    \`
        <div aria-live="assertive">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        \`,
  );
}`,...h.parameters?.docs?.source}}}})))()}_();export{d as AnchestorIsHidden,p as ContentIsHidden,m as ContentIsPartiallyHidden,l as LiveRegionAvailableBeforeContent,f as LiveRegionIsHidden,u as LiveRegionUnavailableBeforeContent,h as PartOfContentChanges,g as __namedExportsOrder,c as default};