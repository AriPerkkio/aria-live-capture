var s=Object.defineProperty;var e=(n,o)=>s(n,"name",{value:o,configurable:!0});import{c as t}from"./utils-XaxLrPgB.js";const v={title:"Unsupported/aria-relevant"},i=e(()=>t(`
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
        `),"All");a.storyName="all";i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite" aria-relevant="text">
            First
        </div>
        \`, \`
        <div aria-live="polite" aria-relevant="text">
            First, Second
        </div>
        \`);
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};const c=["Additions","Removals","Text","All"];export{i as Additions,a as All,r as Removals,l as Text,c as __namedExportsOrder,v as default};
