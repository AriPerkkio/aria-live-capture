var j=Object.defineProperty;var r=(e,n)=>j(e,"name",{value:n,configurable:!0});import{w as t,e as o,u as a}from"./index-PyJjBAvg.js";import{c as l}from"./utils-LNpl-ahl.js";import"./_getTag-B2JUw1-s.js";import"./index-B7qynYb3.js";import"./uniq-Ca-eE_Qr.js";import"./index-CHkBgh-E.js";const Q={title:'Role/role="alert"'},d=r(()=>l(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            Hello world
        </div>
        `),"LiveRegionAvailableBeforeContent");d.storyName="Live region available before content ✅";d.play=async({canvasElement:e})=>{const n=t(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await a.click(n),o("Hello world").toBeAnnounced("assertive")};const i=r(()=>l(`
        <div></div>
        `,`
        <div role="alert">
            Hello world
        </div>
        `),"LiveRegionUnavailableBeforeContent");i.storyName="Live region unavailable before content ✅";i.play=async({canvasElement:e})=>{const n=t(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await a.click(n),o("Hello world").toBeAnnounced("assertive")};const s=r(()=>l(`
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
        `),"AnchestorIsHidden");s.storyName="Anchestor is hidden ❌";s.play=async({canvasElement:e})=>{const n=t(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await a.click(n),o("Hello world").not.toBeAnnounced()};const c=r(()=>l(`
        <div aria-hidden="true" role="alert">
        </div>
        `,`
        <div aria-hidden="true" role="alert">
            Hello world
        </div>
        `),"LiveRegionIsHidden");c.storyName="Live region is hidden ❌";c.play=async({canvasElement:e})=>{const n=t(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await a.click(n),o("Hello world").not.toBeAnnounced()};const u=r(()=>l(`
        <div role="alert">
        </div>
        `,`
        <div role="alert">
            <div aria-hidden="true">
                Hello world
            </div>
        </div>
        `),"ContentIsHidden");u.storyName="Content is hidden ❌";u.play=async({canvasElement:e})=>{const n=t(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await a.click(n),o("Hello world").not.toBeAnnounced()};const v=r(()=>l(`
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
        `),"ContentIsPartiallyHidden");v.storyName="Content is partially hidden ⚠️";v.play=async({canvasElement:e})=>{const n=t(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await a.click(n),o("Hello world").not.toBeAnnounced(),o("Hello").toBeAnnounced("assertive")};const p=r(()=>l(`
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
        `),"PartOfContentChanges");p.storyName="Part of content changes ✅";p.play=async({canvasElement:e})=>{const n=t(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await a.click(n),o("Hello world").toBeAnnounced("assertive")};const g=r(()=>l(`
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
        `),"AriaHiddenChanges");g.storyName="aria-hidden changes ✅";g.play=async({canvasElement:e})=>{const n=t(e).getByRole("button");o("Hello world").not.toBeAnnounced(),await a.click(n),o("Hello world").toBeAnnounced("assertive")};var m,H,w;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="alert">
        </div>
        \`, \`
        <div role="alert">
            Hello world
        </div>
        \`);
}`,...(w=(H=d.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};var y,h,B;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div></div>
        \`, \`
        <div role="alert">
            Hello world
        </div>
        \`);
}`,...(B=(h=i.parameters)==null?void 0:h.docs)==null?void 0:B.source}}};var A,b,C;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(C=(b=s.parameters)==null?void 0:b.docs)==null?void 0:C.source}}};var R,f,L;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-hidden="true" role="alert">
        </div>
        \`, \`
        <div aria-hidden="true" role="alert">
            Hello world
        </div>
        \`);
}`,...(L=(f=c.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var M,T,k;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...(k=(T=u.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var I,N,S;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(S=(N=v.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var P,x,O;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(O=(x=p.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var _,E,U;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(U=(E=g.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};const V=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent","AnchestorIsHidden","LiveRegionIsHidden","ContentIsHidden","ContentIsPartiallyHidden","PartOfContentChanges","AriaHiddenChanges"];export{s as AnchestorIsHidden,g as AriaHiddenChanges,u as ContentIsHidden,v as ContentIsPartiallyHidden,d as LiveRegionAvailableBeforeContent,c as LiveRegionIsHidden,i as LiveRegionUnavailableBeforeContent,p as PartOfContentChanges,V as __namedExportsOrder,Q as default};
