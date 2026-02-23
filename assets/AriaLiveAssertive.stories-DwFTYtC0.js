var g=Object.defineProperty;var r=(n,a)=>g(n,"name",{value:a,configurable:!0});import{c as i}from"./iframe-DGKWmdNJ.js";import"./preload-helper-CL58OYxb.js";const{within:o,userEvent:t}=__STORYBOOK_MODULE_TEST__,{expect:e}=__STORYBOOK_MODULE_TEST__,y={title:'Aria-live/aria-live="assertive"'},s=r(()=>i(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");s.storyName="Live region available before content ✅";s.play=async({canvasElement:n})=>{const a=o(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await t.click(a),e("Hello world").toBeAnnounced("assertive")};const d=r(()=>i(`
        <div>
        </div>
        `,`
        <div aria-live="assertive">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");d.storyName="Live region unavailable before content ❌";d.play=async({canvasElement:n})=>{const a=o(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await t.click(a),e("Hello world").not.toBeAnnounced()};const l=r(()=>i(`
        <div aria-hidden="true">
            <div aria-live="assertive">
            </div>
        </div>
        `,`
        <div aria-hidden="true">
            <div aria-live="assertive">
                Hello world
            </div>
        </div>
        `),"AnchestorIsHidden");l.storyName="Anchestor is hidden ❌";l.play=async({canvasElement:n})=>{const a=o(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await t.click(a),e("Hello world").not.toBeAnnounced()};const v=r(()=>i(`
        <div aria-hidden="true" aria-live="assertive">
        </div>
        `,`
        <div aria-hidden="true" aria-live="assertive">
            Hello world
        </div>
        `),"LiveRegionIsHidden");v.storyName="Live region is hidden ❌";v.play=async({canvasElement:n})=>{const a=o(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await t.click(a),e("Hello world").not.toBeAnnounced()};const c=r(()=>i(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `),"ContentIsHidden");c.storyName="Content is hidden ❌";c.play=async({canvasElement:n})=>{const a=o(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await t.click(a),e("Hello world").not.toBeAnnounced()};const u=r(()=>i(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            <span>
                Hello
            </span>
            <span aria-hidden="true">
                world
            </span>
        </div>
        `),"ContentIsPartiallyHidden");u.storyName="Content is partially hidden ⚠️";u.play=async({canvasElement:n})=>{const a=o(n).getByRole("button");e("Hello").not.toBeAnnounced(),await t.click(a),e("Hello").toBeAnnounced("assertive"),e("world").not.toBeAnnounced(),e("Hello world").not.toBeAnnounced()};const p=r(()=>i(`
        <div aria-live="assertive">
            <span>
                Hello
            </span>
        </div>
        `,`
        <div aria-live="assertive">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        `),"PartOfContentChanges");p.storyName="Part of content changes ✅";p.play=async({canvasElement:n})=>{const a=o(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await t.click(a),e("Hello world").toBeAnnounced("assertive")};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="assertive">
        </div>
        \`, \`
        <div aria-live="assertive">
            Hello world
        </div>
        \`);
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div>
        </div>
        \`, \`
        <div aria-live="assertive">
            Hello world
        </div>
        \`);
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true">
            <div aria-live="assertive">
            </div>
        </div>
        \`, \`
        <div aria-hidden="true">
            <div aria-live="assertive">
                Hello world
            </div>
        </div>
        \`);
}`,...l.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true" aria-live="assertive">
        </div>
        \`, \`
        <div aria-hidden="true" aria-live="assertive">
            Hello world
        </div>
        \`);
}`,...v.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="assertive">
        </div>
        \`, \`
        <div aria-live="assertive">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        \`);
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="assertive">
        </div>
        \`, \`
        <div aria-live="assertive">
            <span>
                Hello
            </span>
            <span aria-hidden="true">
                world
            </span>
        </div>
        \`);
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="assertive">
            <span>
                Hello
            </span>
        </div>
        \`, \`
        <div aria-live="assertive">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        \`);
}`,...p.parameters?.docs?.source}}};const B=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent","AnchestorIsHidden","LiveRegionIsHidden","ContentIsHidden","ContentIsPartiallyHidden","PartOfContentChanges"];export{l as AnchestorIsHidden,c as ContentIsHidden,u as ContentIsPartiallyHidden,s as LiveRegionAvailableBeforeContent,v as LiveRegionIsHidden,d as LiveRegionUnavailableBeforeContent,p as PartOfContentChanges,B as __namedExportsOrder,y as default};
