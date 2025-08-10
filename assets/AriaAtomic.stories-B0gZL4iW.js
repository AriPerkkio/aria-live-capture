var s=Object.defineProperty;var r=(o,n)=>s(o,"name",{value:n,configurable:!0});import{c as i}from"./utils-XaxLrPgB.js";const p={title:"Unsupported/aria-atomic"},a=r(()=>i(`
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
        </div>
        `,`
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
            <span>world</span>
        </div>
        `),"True");a.storyName="true";const e=r(()=>i(`
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
        </div>
        `,`
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
            <span>world</span>
        </div>
        `),"False");e.storyName="false";a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
        </div>
        \`, \`
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
            <span>world</span>
        </div>
        \`);
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
        </div>
        \`, \`
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
            <span>world</span>
        </div>
        \`);
}`,...e.parameters?.docs?.source}}};const c=["True","False"];export{e as False,a as True,c as __namedExportsOrder,p as default};
