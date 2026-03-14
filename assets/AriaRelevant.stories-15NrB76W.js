import{n as e}from"./iframe-iMBPCvXT.js";var t={title:`Unsupported/aria-relevant`},n=()=>e(`
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
        </ul>
        `,`
        <ul aria-live="polite" aria-relevant="additions">
            <li>First</li>
            <li>Second</li>
        </ul>
        `);n.storyName=`additions`;var r=()=>e(`
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
            <li>Second</li>
        </ul>
        `,`
        <ul aria-live="polite" aria-relevant="removals">
            <li>First</li>
        </ul>
        `);r.storyName=`removals`;var i=()=>e(`
        <div aria-live="polite" aria-relevant="text">
            First
        </div>
        `,`
        <div aria-live="polite" aria-relevant="text">
            First, Second
        </div>
        `);i.storyName=`text`;var a=()=>e(`
        <ul aria-live="polite" aria-relevant="all">
            <li>First</li>
            <li>Second</li>

        </ul>
        `,`
        <ul aria-live="polite" aria-relevant="all">
            <li>First Hello world</li>

            <li>Third</li>
        </ul>
        `);a.storyName=`all`,n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}},r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite" aria-relevant="text">
            First
        </div>
        \`, \`
        <div aria-live="polite" aria-relevant="text">
            First, Second
        </div>
        \`);
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};var o=[`Additions`,`Removals`,`Text`,`All`];export{n as Additions,a as All,r as Removals,i as Text,o as __namedExportsOrder,t as default};