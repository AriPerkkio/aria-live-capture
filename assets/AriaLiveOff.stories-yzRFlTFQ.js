import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./runtime-CLZ2u-Zl.js";import{i as r,r as i}from"./iframe-Cj23tzbu.js";var a,o,s,c,l,u,d,f,p;function m(){return(m=e((()=>{n(),r(),t(),{within:a,userEvent:o}=__STORYBOOK_MODULE_TEST__,{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Aria-live/aria-live="off"`},l=()=>i(`
        <div aria-live="off">
        </div>
        `,`
        <div aria-live="off">
            Hello world
        </div>
        `),l.storyName=`With text content ❌`,l.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).not.toBeAnnounced()},u=()=>i(`
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
        `),u.storyName=`Wraps live region ✅`,u.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).toBeAnnounced(`polite`)},d=()=>i(`
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
        `),d.storyName=`Wrapped in live region ❌`,d.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).not.toBeAnnounced()},f=()=>i(`
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
        `),f.storyName=`Sibling is visible ⚠️`,f.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`world`).not.toBeAnnounced(),await o.click(t),s(`world`).toBeAnnounced(`polite`),s(`Hello`).not.toBeAnnounced(),s(`Hello world`).not.toBeAnnounced()},p=[`WithTextContent`,`WrapsLiveRegion`,`WrappedInLiveRegion`,`SiblingIsVisible`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-live="off">
        </div>
        \`,
    \`
        <div aria-live="off">
            Hello world
        </div>
        \`,
  );
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-live="off">
            <div aria-live="polite">
            </div>
        </div>
        \`,
    \`
        <div aria-live="off">
            <div aria-live="polite">
                Hello world
            </div>
        </div>
        \`,
  );
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        \`,
    \`
        <div aria-live="polite">
            <div aria-live="off">
                Hello world
            </div>
        </div>
        \`,
  );
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        \`,
    \`
        <div aria-live="polite">
            <div aria-live="off">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        \`,
  );
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as SiblingIsVisible,l as WithTextContent,d as WrappedInLiveRegion,u as WrapsLiveRegion,p as __namedExportsOrder,c as default};