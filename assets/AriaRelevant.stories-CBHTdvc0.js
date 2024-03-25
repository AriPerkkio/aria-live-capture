var A=Object.defineProperty;var e=(x,T)=>A(x,"name",{value:T,configurable:!0});import{c as t}from"./utils-LNpl-ahl.js";const N={title:"Unsupported/aria-relevant"},i=e(()=>t(`
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
        </ul>
        `,`
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
            <li>Second</li>
        </ul>
        `),"Additions");i.storyName="additions";const r=e(()=>t(`
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
            <li>Second</li>
        </ul>
        `,`
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
        </ul>
        `),"Removals");r.storyName="removals";const l=e(()=>t(`
        <div aria-live="polite" aria-relevant="text">
            First
        </div>
        `,`
        <div aria-live="polite" aria-relevant="text">
            First, Second
        </div>
        `),"Text");l.storyName="text";const a=e(()=>t(`
        <ul aria-live="polite" aria-relevant="all">
            <li>First</li>
            <li>Second</li>

        </ul>
        `,`
        <ul aria-live="polite" aria-relevant="all">
            <li>First Hello world</li>

            <li>Third</li>
        </ul>
        `),"All");a.storyName="all";var n,o,s;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
        </ul>
        \`, \`
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
            <li>Second</li>
        </ul>
        \`);
}`,...(s=(o=i.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var u,d,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
            <li>Second</li>
        </ul>
        \`, \`
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
        </ul>
        \`);
}`,...(v=(d=r.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var c,p,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite" aria-relevant="text">
            First
        </div>
        \`, \`
        <div aria-live="polite" aria-relevant="text">
            First, Second
        </div>
        \`);
}`,...(m=(p=l.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var F,g,S;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <ul aria-live="polite" aria-relevant="all">
            <li>First</li>
            <li>Second</li>

        </ul>
        \`, \`
        <ul aria-live="polite" aria-relevant="all">
            <li>First Hello world</li>

            <li>Third</li>
        </ul>
        \`);
}`,...(S=(g=a.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const R=["Additions","Removals","Text","All"];export{i as Additions,a as All,r as Removals,l as Text,R as __namedExportsOrder,N as default};
