var H=Object.defineProperty;var r=(e,n)=>H(e,"name",{value:n,configurable:!0});import{c as t}from"./iframe-4dnwcpfT.js";import"./preload-helper-CL58OYxb.js";const{within:a,userEvent:l}=__STORYBOOK_MODULE_TEST__,{expect:o}=__STORYBOOK_MODULE_TEST__,B={title:'Role/role="alert"'},d=r(()=>t(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");d.storyName="Live region available before content ✅";d.play=async({canvasElement:e})=>{const n=a(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await l.click(n),o("Hello world").toBeAnnounced("assertive")};const i=r(()=>t(`
        <div></div>
        `,`
        <div role="alert">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");i.storyName="Live region unavailable before content ✅";i.play=async({canvasElement:e})=>{const n=a(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await l.click(n),o("Hello world").toBeAnnounced("assertive")};const s=r(()=>t(`
        <div aria-hidden="true">
            <div role="alert">
            </div>
        </div>
        `,`
        <div aria-hidden="true">
            <div role="alert">
                Hello world
            </div>
        </div>
        `),"AnchestorIsHidden");s.storyName="Anchestor is hidden ❌";s.play=async({canvasElement:e})=>{const n=a(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await l.click(n),o("Hello world").not.toBeAnnounced()};const c=r(()=>t(`
        <div aria-hidden="true" role="alert">
        </div>
        `,`
        <div aria-hidden="true" role="alert">
            Hello world
        </div>
        `),"LiveRegionIsHidden");c.storyName="Live region is hidden ❌";c.play=async({canvasElement:e})=>{const n=a(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await l.click(n),o("Hello world").not.toBeAnnounced()};const u=r(()=>t(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `),"ContentIsHidden");u.storyName="Content is hidden ❌";u.play=async({canvasElement:e})=>{const n=a(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await l.click(n),o("Hello world").not.toBeAnnounced()};const v=r(()=>t(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            <span>
                Hello
            </span>
            <span aria-hidden="true">
                world
            </span>
        </div>
        `),"ContentIsPartiallyHidden");v.storyName="Content is partially hidden ⚠️";v.play=async({canvasElement:e})=>{const n=a(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await l.click(n),o("Hello world").not.toBeAnnounced(),o("Hello").toBeAnnounced("assertive")};const p=r(()=>t(`
        <div role="alert">
            <span>
                Hello
            </span>
        </div>
        `,`
        <div role="alert">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        `),"PartOfContentChanges");p.storyName="Part of content changes ✅";p.play=async({canvasElement:e})=>{const n=a(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await l.click(n),o("Hello world").toBeAnnounced("assertive")};const g=r(()=>t(`
        <div role="alert">
            <span aria-hidden="true">
                Hello world
            </span>
        </div>
        `,`
        <div role="alert">
            <span>
                Hello world
            </span>
        </div>
        `),"AriaHiddenChanges");g.storyName="aria-hidden changes ✅";g.play=async({canvasElement:e})=>{const n=a(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await l.click(n),o("Hello world").toBeAnnounced("assertive")};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
        </div>
        \`, \`
        <div role="alert">
            Hello world
        </div>
        \`);
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div role="alert">
            Hello world
        </div>
        \`);
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true">
            <div role="alert">
            </div>
        </div>
        \`, \`
        <div aria-hidden="true">
            <div role="alert">
                Hello world
            </div>
        </div>
        \`);
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true" role="alert">
        </div>
        \`, \`
        <div aria-hidden="true" role="alert">
            Hello world
        </div>
        \`);
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
        </div>
        \`, \`
        <div role="alert">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        \`);
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
        </div>
        \`, \`
        <div role="alert">
            <span>
                Hello
            </span>
            <span aria-hidden="true">
                world
            </span>
        </div>
        \`);
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
            <span>
                Hello
            </span>
        </div>
        \`, \`
        <div role="alert">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        \`);
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
            <span aria-hidden="true">
                Hello world
            </span>
        </div>
        \`, \`
        <div role="alert">
            <span>
                Hello world
            </span>
        </div>
        \`);
}`,...g.parameters?.docs?.source}}};const h=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent","AnchestorIsHidden","LiveRegionIsHidden","ContentIsHidden","ContentIsPartiallyHidden","PartOfContentChanges","AriaHiddenChanges"];export{s as AnchestorIsHidden,g as AriaHiddenChanges,u as ContentIsHidden,v as ContentIsPartiallyHidden,d as LiveRegionAvailableBeforeContent,c as LiveRegionIsHidden,i as LiveRegionUnavailableBeforeContent,p as PartOfContentChanges,h as __namedExportsOrder,B as default};
