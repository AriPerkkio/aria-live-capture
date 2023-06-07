var O=Object.defineProperty;var o=(n,r)=>O(n,"name",{value:r,configurable:!0});import{w as a,e,u as i}from"./index-a1bbf0bb.js";import{c as t}from"./utils-21f1601d.js";import"./index-9d909a03.js";import"./index-722d4584.js";import"./index-ce7257af.js";import"./uniq-6402743e.js";import"./index-b4278562.js";const G={title:'Aria-live/aria-live="assertive"'},s=o(()=>t(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");s.storyName="Live region available before content ✅";s.play=async({canvasElement:n})=>{const r=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),i.click(r),e("Hello world").toBeAnnounced("assertive")};const d=o(()=>t(`
        <div>
        </div>
        `,`
        <div aria-live="assertive">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");d.storyName="Live region unavailable before content ❌";d.play=async({canvasElement:n})=>{const r=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),i.click(r),e("Hello world").not.toBeAnnounced()};const l=o(()=>t(`
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
        `),"AnchestorIsHidden");l.storyName="Anchestor is hidden ❌";l.play=async({canvasElement:n})=>{const r=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),i.click(r),e("Hello world").not.toBeAnnounced()};const v=o(()=>t(`
        <div aria-hidden="true" aria-live="assertive">
        </div>
        `,`
        <div aria-hidden="true" aria-live="assertive">
            Hello world
        </div>
        `),"LiveRegionIsHidden");v.storyName="Live region is hidden ❌";v.play=async({canvasElement:n})=>{const r=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),i.click(r),e("Hello world").not.toBeAnnounced()};const c=o(()=>t(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `),"ContentIsHidden");c.storyName="Content is hidden ❌";c.play=async({canvasElement:n})=>{const r=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),i.click(r),e("Hello world").not.toBeAnnounced()};const u=o(()=>t(`
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
        `),"ContentIsPartiallyHidden");u.storyName="Content is partially hidden ⚠️";u.play=async({canvasElement:n})=>{const r=a(n).getByRole("button");e("Hello").not.toBeAnnounced(),i.click(r),e("Hello").toBeAnnounced("assertive"),e("world").not.toBeAnnounced(),e("Hello world").not.toBeAnnounced()};const p=o(()=>t(`
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
        `),"PartOfContentChanges");p.storyName="Part of content changes ✅";p.play=async({canvasElement:n})=>{const r=a(n).getByRole("button");e("Hello world").not.toBeAnnounced(),i.click(r),e("Hello world").toBeAnnounced("assertive")};var m,g,H;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="assertive">
        </div>
        \`, \`
        <div aria-live="assertive">
            Hello world
        </div>
        \`);
}`,...(H=(g=s.parameters)==null?void 0:g.docs)==null?void 0:H.source}}};var y,w,B;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div>
        </div>
        \`, \`
        <div aria-live="assertive">
            Hello world
        </div>
        \`);
}`,...(B=(w=d.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var A,h,b;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var C,R,f;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true" aria-live="assertive">
        </div>
        \`, \`
        <div aria-hidden="true" aria-live="assertive">
            Hello world
        </div>
        \`);
}`,...(f=(R=v.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};var L,I,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(M=(I=c.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var T,k,N;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(N=(k=u.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};var S,P,x;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(x=(P=p.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const J=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent","AnchestorIsHidden","LiveRegionIsHidden","ContentIsHidden","ContentIsPartiallyHidden","PartOfContentChanges"];export{l as AnchestorIsHidden,c as ContentIsHidden,u as ContentIsPartiallyHidden,s as LiveRegionAvailableBeforeContent,v as LiveRegionIsHidden,d as LiveRegionUnavailableBeforeContent,p as PartOfContentChanges,J as __namedExportsOrder,G as default};
//# sourceMappingURL=AriaLiveAssertive.stories-5d16446a.js.map