import{n as e}from"./chunk-BneVvdWh.js";import{n as t,r as n}from"./iframe-4IlqENPq.js";var r,i,a,o,s,c;e((()=>{n(),r={title:`Unsupported/aria-relevant`},i=()=>t(`
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
        </ul>
        `,`
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
            <li>Second</li>
        </ul>
        `),i.storyName=`additions`,a=()=>t(`
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
            <li>Second</li>
        </ul>
        `,`
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
        </ul>
        `),a.storyName=`removals`,o=()=>t(`
        <div aria-live="polite" aria-relevant="text">
            First
        </div>
        `,`
        <div aria-live="polite" aria-relevant="text">
            First, Second
        </div>
        `),o.storyName=`text`,s=()=>t(`
        <ul aria-live="polite" aria-relevant="all">
            <li>First</li>
            <li>Second</li>

        </ul>
        `,`
        <ul aria-live="polite" aria-relevant="all">
            <li>First Hello world</li>

            <li>Third</li>
        </ul>
        `),s.storyName=`all`,i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite" aria-relevant="text">
            First
        </div>
        \`, \`
        <div aria-live="polite" aria-relevant="text">
            First, Second
        </div>
        \`);
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}},c=[`Additions`,`Removals`,`Text`,`All`]}))();export{i as Additions,s as All,a as Removals,o as Text,c as __namedExportsOrder,r as default};