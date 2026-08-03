import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./iframe-CCnqvpgM.js";var r,i,a,o;function s(){return(s=e((()=>{t(),r={title:`Unsupported/aria-atomic`},i=()=>n(`
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
        </div>
        `,`
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
            <span>world</span>
        </div>
        `),i.storyName=`true`,a=()=>n(`
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
        </div>
        `,`
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
            <span>world</span>
        </div>
        `),a.storyName=`false`,i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}},o=[`True`,`False`]})))()}s();export{a as False,i as True,o as __namedExportsOrder,r as default};