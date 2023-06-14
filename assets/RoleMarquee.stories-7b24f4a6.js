var R=Object.defineProperty;var d=(o,r)=>R(o,"name",{value:r,configurable:!0});import{w as a,e,u as s}from"./index-b851fdf4.js";import{c as u}from"./utils-21f1601d.js";import"./index-722d4584.js";import"./index-ce7257af.js";import"./uniq-6402743e.js";import"./index-b4278562.js";import"./index-c8c96787.js";const L={title:'Role/role="marquee"'},n=d(()=>u(`
        <div role="marquee">
        </div>
        `,`
        <div role="marquee">
            Hello world
        </div>
        `),"WithTextContent");n.storyName="With text content ❌";n.play=async({canvasElement:o})=>{const r=a(o).getByRole("button");e("Hello world").not.toBeAnnounced(),s.click(r),e("Hello world").not.toBeAnnounced()};const t=d(()=>u(`
        <div role="marquee">
            <div role="status">
            </div>
        </div>
        `,`
        <div role="marquee">
            <div role="status">
                Hello world
            </div>
        </div>
        `),"WrapsLiveRegion");t.storyName="Wraps live region ✅";t.play=async({canvasElement:o})=>{const r=a(o).getByRole("button");e("Hello world").not.toBeAnnounced(),s.click(r),e("Hello world").toBeAnnounced("polite")};const i=d(()=>u(`
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        `,`
        <div role="status">
            <div role="marquee">
                Hello world
            </div>
        </div>
        `),"WrappedInLiveRegion");i.storyName="Wrapped in live region ❌";i.play=async({canvasElement:o})=>{const r=a(o).getByRole("button");e("Hello world").not.toBeAnnounced(),s.click(r),e("Hello world").not.toBeAnnounced()};const l=d(()=>u(`
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        `,`
        <div role="status">
            <div role="marquee">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        `),"SiblingIsVisible");l.storyName="Sibling is visible ⚠️";l.play=async({canvasElement:o})=>{const r=a(o).getByRole("button");e("Hello world").not.toBeAnnounced(),s.click(r),e("world").toBeAnnounced("polite"),e("Hello world").not.toBeAnnounced(),e("world").not.toBeAnnounced()};var v,c,m;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="marquee">
        </div>
        \`, \`
        <div role="marquee">
            Hello world
        </div>
        \`);
}`,...(m=(c=n.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,w;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="marquee">
            <div role="status">
            </div>
        </div>
        \`, \`
        <div role="marquee">
            <div role="status">
                Hello world
            </div>
        </div>
        \`);
}`,...(w=(g=t.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var q,y,H;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        \`, \`
        <div role="status">
            <div role="marquee">
                Hello world
            </div>
        </div>
        \`);
}`,...(H=(y=i.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var b,B,A;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
            <div role="marquee">
            </div>
        </div>
        \`, \`
        <div role="status">
            <div role="marquee">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        \`);
}`,...(A=(B=l.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const N=["WithTextContent","WrapsLiveRegion","WrappedInLiveRegion","SiblingIsVisible"];export{l as SiblingIsVisible,n as WithTextContent,i as WrappedInLiveRegion,t as WrapsLiveRegion,N as __namedExportsOrder,L as default};
//# sourceMappingURL=RoleMarquee.stories-7b24f4a6.js.map
