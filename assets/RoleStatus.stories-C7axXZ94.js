var H=Object.defineProperty;var t=(n,o)=>H(n,"name",{value:o,configurable:!0});import{c as r}from"./iframe-ujSHn6nD.js";import"./preload-helper-CL58OYxb.js";const{within:a,userEvent:s}=__STORYBOOK_MODULE_TEST__,{expect:e}=__STORYBOOK_MODULE_TEST__,B={title:'Role/role="status"'},d=t(()=>r(`
        <div role="status">
        </div>
        `,`
        <div role="status">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");d.storyName="Live region available before content ✅";d.play=async({canvasElement:n})=>{const o=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(o),e("Hello world").toBeAnnounced("polite")};const l=t(()=>r(`
        <div></div>
        `,`
        <div role="status">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");l.storyName="Live region unavailable before content ❌";l.play=async({canvasElement:n})=>{const o=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(o),e("Hello world").not.toBeAnnounced()};const i=t(()=>r(`
        <div aria-hidden="true">
            <div role="status">
            </div>
        </div>
        `,`
        <div aria-hidden="true">
            <div role="status">
                Hello world
            </div>
        </div>
        `),"AnchestorIsHidden");i.storyName="Anchestor is hidden ❌";i.play=async({canvasElement:n})=>{const o=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(o),e("Hello world").not.toBeAnnounced()};const u=t(()=>r(`
        <div aria-hidden="true" role="status">
        </div>
        `,`
        <div aria-hidden="true" role="status">
            Hello world
        </div>
        `),"LiveRegionIsHidden");u.storyName="Live region is hidden ❌";u.play=async({canvasElement:n})=>{const o=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(o),e("Hello world").not.toBeAnnounced()};const c=t(()=>r(`
        <div role="status">
        </div>
        `,`
        <div role="status">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `),"ContentIsHidden");c.storyName="Content is hidden ❌";c.play=async({canvasElement:n})=>{const o=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(o),e("Hello world").not.toBeAnnounced()};const v=t(()=>r(`
        <div role="status">
        </div>
        `,`
        <div role="status">
            <span>
                Hello
            </span>
            <span aria-hidden="true">
                world
            </span>
        </div>
        `),"ContentIsPartiallyHidden");v.storyName="Content is partially hidden ⚠️";v.play=async({canvasElement:n})=>{const o=a(n).getByRole("button");e("Hello").not.toBeAnnounced(),await s.click(o),e("Hello").toBeAnnounced("polite"),e("world").not.toBeAnnounced(),e("Hello world").not.toBeAnnounced()};const p=t(()=>r(`
        <div role="status">
            <span>
                Hello
            </span>
        </div>
        `,`
        <div role="status">
            <span>
                Hello
            </span>
            <span>
                world
            </span>
        </div>
        `),"PartOfContentChanges");p.storyName="Part of content changes ✅";p.play=async({canvasElement:n})=>{const o=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(o),e("Hello world").toBeAnnounced("polite")};const g=t(()=>r(`
        <div role="status">
            <span aria-hidden="true">
                Hello world
            </span>
        </div>
        `,`
        <div role="status">
            <span>
                Hello world
            </span>
        </div>
        `),"AriaHiddenChanges");g.storyName="aria-hidden changes ✅";g.play=async({canvasElement:n})=>{const o=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await s.click(o),e("Hello world").toBeAnnounced("polite")};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
        </div>
        \`, \`
        <div role="status">
            Hello world
        </div>
        \`);
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div role="status">
            Hello world
        </div>
        \`);
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true">
            <div role="status">
            </div>
        </div>
        \`, \`
        <div aria-hidden="true">
            <div role="status">
                Hello world
            </div>
        </div>
        \`);
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true" role="status">
        </div>
        \`, \`
        <div aria-hidden="true" role="status">
            Hello world
        </div>
        \`);
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
        </div>
        \`, \`
        <div role="status">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        \`);
}`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
        </div>
        \`, \`
        <div role="status">
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
        <div role="status">
            <span>
                Hello
            </span>
        </div>
        \`, \`
        <div role="status">
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
        <div role="status">
            <span aria-hidden="true">
                Hello world
            </span>
        </div>
        \`, \`
        <div role="status">
            <span>
                Hello world
            </span>
        </div>
        \`);
}`,...g.parameters?.docs?.source}}};const h=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent","AnchestorIsHidden","LiveRegionIsHidden","ContentIsHidden","ContentIsPartiallyHidden","PartOfContentChanges","AriaHiddenChanges"];export{i as AnchestorIsHidden,g as AriaHiddenChanges,c as ContentIsHidden,v as ContentIsPartiallyHidden,d as LiveRegionAvailableBeforeContent,u as LiveRegionIsHidden,l as LiveRegionUnavailableBeforeContent,p as PartOfContentChanges,h as __namedExportsOrder,B as default};
