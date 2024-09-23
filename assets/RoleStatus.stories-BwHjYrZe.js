var j=Object.defineProperty;var t=(n,o)=>j(n,"name",{value:o,configurable:!0});import{w as r,e,u as a}from"./index-DT-QJkXL.js";import{c as s}from"./utils-DoweNrC_.js";import"./_commonjsHelpers-1BxWT6uA.js";import"./index-B7qynYb3.js";import"./uniq-DZEWJdOL.js";import"./index-gbGkGNUf.js";const Q={title:'Role/role="status"'},d=t(()=>s(`
        <div role="status">
        </div>
        `,`
        <div role="status">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");d.storyName="Live region available before content ✅";d.play=async({canvasElement:n})=>{const o=r(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(o),e("Hello world").toBeAnnounced("polite")};const l=t(()=>s(`
        <div></div>
        `,`
        <div role="status">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");l.storyName="Live region unavailable before content ❌";l.play=async({canvasElement:n})=>{const o=r(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(o),e("Hello world").not.toBeAnnounced()};const i=t(()=>s(`
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
        `),"AnchestorIsHidden");i.storyName="Anchestor is hidden ❌";i.play=async({canvasElement:n})=>{const o=r(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(o),e("Hello world").not.toBeAnnounced()};const u=t(()=>s(`
        <div aria-hidden="true" role="status">
        </div>
        `,`
        <div aria-hidden="true" role="status">
            Hello world
        </div>
        `),"LiveRegionIsHidden");u.storyName="Live region is hidden ❌";u.play=async({canvasElement:n})=>{const o=r(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(o),e("Hello world").not.toBeAnnounced()};const c=t(()=>s(`
        <div role="status">
        </div>
        `,`
        <div role="status">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `),"ContentIsHidden");c.storyName="Content is hidden ❌";c.play=async({canvasElement:n})=>{const o=r(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(o),e("Hello world").not.toBeAnnounced()};const v=t(()=>s(`
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
        `),"ContentIsPartiallyHidden");v.storyName="Content is partially hidden ⚠️";v.play=async({canvasElement:n})=>{const o=r(n).getByRole("button");e("Hello").not.toBeAnnounced(),await a.click(o),e("Hello").toBeAnnounced("polite"),e("world").not.toBeAnnounced(),e("Hello world").not.toBeAnnounced()};const p=t(()=>s(`
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
        `),"PartOfContentChanges");p.storyName="Part of content changes ✅";p.play=async({canvasElement:n})=>{const o=r(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(o),e("Hello world").toBeAnnounced("polite")};const g=t(()=>s(`
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
        `),"AriaHiddenChanges");g.storyName="aria-hidden changes ✅";g.play=async({canvasElement:n})=>{const o=r(n).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(o),e("Hello world").toBeAnnounced("polite")};var m,H,w;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
        </div>
        \`, \`
        <div role="status">
            Hello world
        </div>
        \`);
}`,...(w=(H=d.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var y,B,h;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div role="status">
            Hello world
        </div>
        \`);
}`,...(h=(B=l.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var A,b,C;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(C=(b=i.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var R,f,L;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true" role="status">
        </div>
        \`, \`
        <div aria-hidden="true" role="status">
            Hello world
        </div>
        \`);
}`,...(L=(f=u.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var M,S,T;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var k,I,N;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(N=(I=v.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var P,x,O;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(O=(x=p.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var _,E,U;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(U=(E=g.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const V=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent","AnchestorIsHidden","LiveRegionIsHidden","ContentIsHidden","ContentIsPartiallyHidden","PartOfContentChanges","AriaHiddenChanges"];export{i as AnchestorIsHidden,g as AriaHiddenChanges,c as ContentIsHidden,v as ContentIsPartiallyHidden,d as LiveRegionAvailableBeforeContent,u as LiveRegionIsHidden,l as LiveRegionUnavailableBeforeContent,p as PartOfContentChanges,V as __namedExportsOrder,Q as default};
