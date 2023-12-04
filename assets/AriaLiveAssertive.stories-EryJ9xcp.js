var O=Object.defineProperty;var a=(n,r)=>O(n,"name",{value:r,configurable:!0});import{w as i,e,u as o}from"./index-Ir1JuLXk.js";import{c as t}from"./utils-0JiZS-09.js";import"./_commonjsHelpers-RFtSs_Ch.js";import"./index-Kg-CViSs.js";import"./uniq-rlwX4jXw.js";import"./_getTag-NtD66v87.js";import"./index-A6DoDoRZ.js";import"./index-GzfZrMcW.js";const J={title:'Aria-live/aria-live="assertive"'},s=a(()=>t(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");s.storyName="Live region available before content ✅";s.play=async({canvasElement:n})=>{const r=i(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await o.click(r),e("Hello world").toBeAnnounced("assertive")};const d=a(()=>t(`
        <div>
        </div>
        `,`
        <div aria-live="assertive">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");d.storyName="Live region unavailable before content ❌";d.play=async({canvasElement:n})=>{const r=i(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await o.click(r),e("Hello world").not.toBeAnnounced()};const l=a(()=>t(`
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
        `),"AnchestorIsHidden");l.storyName="Anchestor is hidden ❌";l.play=async({canvasElement:n})=>{const r=i(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await o.click(r),e("Hello world").not.toBeAnnounced()};const v=a(()=>t(`
        <div aria-hidden="true" aria-live="assertive">
        </div>
        `,`
        <div aria-hidden="true" aria-live="assertive">
            Hello world
        </div>
        `),"LiveRegionIsHidden");v.storyName="Live region is hidden ❌";v.play=async({canvasElement:n})=>{const r=i(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await o.click(r),e("Hello world").not.toBeAnnounced()};const c=a(()=>t(`
        <div aria-live="assertive">
        </div>
        `,`
        <div aria-live="assertive">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `),"ContentIsHidden");c.storyName="Content is hidden ❌";c.play=async({canvasElement:n})=>{const r=i(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await o.click(r),e("Hello world").not.toBeAnnounced()};const u=a(()=>t(`
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
        `),"ContentIsPartiallyHidden");u.storyName="Content is partially hidden ⚠️";u.play=async({canvasElement:n})=>{const r=i(n).getByRole("button");e("Hello").not.toBeAnnounced(),await o.click(r),e("Hello").toBeAnnounced("assertive"),e("world").not.toBeAnnounced(),e("Hello world").not.toBeAnnounced()};const p=a(()=>t(`
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
        `),"PartOfContentChanges");p.storyName="Part of content changes ✅";p.play=async({canvasElement:n})=>{const r=i(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await o.click(r),e("Hello world").toBeAnnounced("assertive")};var m,g,H;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="assertive">
        </div>
        \`, \`
        <div aria-live="assertive">
            Hello world
        </div>
        \`);
}`,...(H=(g=s.parameters)==null?void 0:g.docs)==null?void 0:H.source}}};var w,y,B;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div>
        </div>
        \`, \`
        <div aria-live="assertive">
            Hello world
        </div>
        \`);
}`,...(B=(y=d.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var A,h,b;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(x=(P=p.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};const K=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent","AnchestorIsHidden","LiveRegionIsHidden","ContentIsHidden","ContentIsPartiallyHidden","PartOfContentChanges"];export{l as AnchestorIsHidden,c as ContentIsHidden,u as ContentIsPartiallyHidden,s as LiveRegionAvailableBeforeContent,v as LiveRegionIsHidden,d as LiveRegionUnavailableBeforeContent,p as PartOfContentChanges,K as __namedExportsOrder,J as default};
