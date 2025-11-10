var d=Object.defineProperty;var r=(t,i)=>d(t,"name",{value:i,configurable:!0});import{w as a,e as n,u as l}from"./index-YQA0kDYo.js";import{c as v}from"./utils-XaxLrPgB.js";import"./_commonjsHelpers-BO6-jdEg.js";import"./index-B7qynYb3.js";const g={title:'Aria-live/aria-live="polite"'},e=r(()=>v(`
        <div aria-live="polite">
        </div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:t})=>{const i=a(t).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(i),n("Hello world").toBeAnnounced("polite")};const o=r(()=>v(`
        <div></div>
        `,`
        <div aria-live="polite">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:t})=>{const i=a(t).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(i),n("Hello world").not.toBeAnnounced()};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite">
        </div>
        \`, \`
        <div aria-live="polite">
            Hello world
        </div>
        \`);
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div aria-live="polite">
            Hello world
        </div>
        \`);
}`,...o.parameters?.docs?.source}}};const b=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,b as __namedExportsOrder,g as default};
