var W=Object.defineProperty;var d=(o,r)=>W(o,"name",{value:r,configurable:!0});import{w as s,e,u as a}from"./index-b851fdf4.js";import{c as v}from"./utils-21f1601d.js";import"./index-722d4584.js";import"./index-ce7257af.js";import"./uniq-6402743e.js";import"./index-b4278562.js";import"./index-c8c96787.js";const N={title:'Role/role="timer"'},t=d(()=>v(`
        <div role="timer">
        </div>
        `,`
        <div role="timer">
            Hello world
        </div>
        `),"WithTextContent");t.storyName="With text content ❌";t.play=async({canvasElement:o})=>{const r=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),a.click(r),e("Hello world").not.toBeAnnounced()};const n=d(()=>v(`
        <div role="timer">
            <div role="status">
            </div>
        </div>
        `,`
        <div role="timer">
            <div role="status">
                Hello world
            </div>
        </div>
        `),"WrapsLiveRegion");n.storyName="Wraps live region ✅";n.play=async({canvasElement:o})=>{const r=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),a.click(r),e("Hello world").toBeAnnounced("polite")};const i=d(()=>v(`
        <div role="status">
            <div role="timer">
            </div>
        </div>
        `,`
        <div role="status">
            <div role="timer">
                Hello world
            </div>
        </div>
        `),"WrappedInLiveRegion");i.storyName="Wrapped in live region ❌";i.play=async({canvasElement:o})=>{const r=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),a.click(r),e("Hello world").not.toBeAnnounced()};const l=d(()=>v(`
        <div role="status">
            <div role="timer">
            </div>
        </div>
        `,`
        <div role="status">
            <div role="timer">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        `),"SiblingIsVisible");l.storyName="Sibling is visible ⚠️";l.play=async({canvasElement:o})=>{const r=s(o).getByRole("button");e("world").not.toBeAnnounced("polite"),a.click(r),e("world").toBeAnnounced("polite"),e("Hello").not.toBeAnnounced(),e("Hello world").not.toBeAnnounced()};var c,u,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="timer">
        </div>
        \`, \`
        <div role="timer">
            Hello world
        </div>
        \`);
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="timer">
            <div role="status">
            </div>
        </div>
        \`, \`
        <div role="timer">
            <div role="status">
                Hello world
            </div>
        </div>
        \`);
}`,...(w=(g=n.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var y,H,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
            <div role="timer">
            </div>
        </div>
        \`, \`
        <div role="status">
            <div role="timer">
                Hello world
            </div>
        </div>
        \`);
}`,...(b=(H=i.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var B,A,R;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="status">
            <div role="timer">
            </div>
        </div>
        \`, \`
        <div role="status">
            <div role="timer">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        \`);
}`,...(R=(A=l.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const f=["WithTextContent","WrapsLiveRegion","WrappedInLiveRegion","SiblingIsVisible"];export{l as SiblingIsVisible,t as WithTextContent,i as WrappedInLiveRegion,n as WrapsLiveRegion,f as __namedExportsOrder,N as default};
//# sourceMappingURL=RoleTimer.stories-54e13e41.js.map
