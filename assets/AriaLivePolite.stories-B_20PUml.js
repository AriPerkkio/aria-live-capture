import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./runtime-CLZ2u-Zl.js";import{i as r,r as i}from"./iframe-Cj23tzbu.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),r(),t(),{within:a,userEvent:o}=__STORYBOOK_MODULE_TEST__,{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Aria-live/aria-live="polite"`},l=()=>i(`
        <div aria-live="polite">
        </div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `),l.storyName=`Live region available before content ✅`,l.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).toBeAnnounced(`polite`)},u=()=>i(`
        <div></div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `),u.storyName=`Live region unavailable before content ❌`,u.play=async({canvasElement:e})=>{let t=a(e).getByRole(`button`);s(`Hello world`).not.toBeAnnounced(),await o.click(t),s(`Hello world`).not.toBeAnnounced()},d=[`LiveRegionAvailableBeforeContent`,`LiveRegionUnavailableBeforeContent`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(
    \`
        <div aria-live="polite">
        </div>
        \`,
    \`
        <div aria-live="polite">
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
        <div aria-live="polite">
            Hello world
        </div>
        \`,
  );
}`,...u.parameters?.docs?.source}}}})))()}f();export{l as LiveRegionAvailableBeforeContent,u as LiveRegionUnavailableBeforeContent,d as __namedExportsOrder,c as default};