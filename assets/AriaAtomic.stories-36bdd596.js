var v=Object.defineProperty;var r=(c,d)=>v(c,"name",{value:d,configurable:!0});import{c as p}from"./utils-f8fc7d82.js";const g={title:"Unsupported/aria-atomic"},a=r(()=>p(`
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
        </div>
        `,`
        <div aria-live="polite" aria-atomic="true">
            <span>Hello</span>
            <span>world</span>
        </div>
        `),"True");a.storyName="true";const e=r(()=>p(`
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
        </div>
        `,`
        <div aria-live="polite" aria-atomic="false">
            <span>Hello</span>
            <span>world</span>
        </div>
        `),"False");e.storyName="false";var i,o,n;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
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
}`,...(n=(o=a.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var s,t,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(l=(t=e.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const H=["True","False"];export{e as False,a as True,H as __namedExportsOrder,g as default};
//# sourceMappingURL=AriaAtomic.stories-36bdd596.js.map
