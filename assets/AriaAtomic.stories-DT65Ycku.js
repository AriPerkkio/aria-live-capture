import{n as e}from"./iframe-iMBPCvXT.js";var t={title:`Unsupported/aria-atomic`},n=()=>e(`
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
        </div>
        `,`
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
            <span>world</span>
        </div>
        `);n.storyName=`true`;var r=()=>e(`
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
        </div>
        `,`
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
            <span>world</span>
        </div>
        `);r.storyName=`false`,n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};var i=[`True`,`False`];export{r as False,n as True,i as __namedExportsOrder,t as default};