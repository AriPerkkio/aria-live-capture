var W=Object.defineProperty;var d=(o,t)=>W(o,"name",{value:t,configurable:!0});import{w as s,e,u as a}from"./index-BWu6l_32.js";import{c as v}from"./utils-LNpl-ahl.js";import"./_getTag-B2JUw1-s.js";import"./index-B7qynYb3.js";import"./uniq-Ca-eE_Qr.js";import"./index-CHkBgh-E.js";const L={title:'Role/role="timer"'},r=d(()=>v(`
        <div role="timer">
        </div>
        `,`
        <div role="timer">
            Hello world
        </div>
        `),"WithTextContent");r.storyName="With text content ❌";r.play=async({canvasElement:o})=>{const t=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(t),e("Hello world").not.toBeAnnounced()};const n=d(()=>v(`
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
        `),"WrapsLiveRegion");n.storyName="Wraps live region ✅";n.play=async({canvasElement:o})=>{const t=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(t),e("Hello world").toBeAnnounced("polite")};const i=d(()=>v(`
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
        `),"WrappedInLiveRegion");i.storyName="Wrapped in live region ❌";i.play=async({canvasElement:o})=>{const t=s(o).getByRole("button");e("Hello world").not.toBeAnnounced(),await a.click(t),e("Hello world").not.toBeAnnounced()};const l=d(()=>v(`
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
        `),"SiblingIsVisible");l.storyName="Sibling is visible ⚠️";l.play=async({canvasElement:o})=>{const t=s(o).getByRole("button");e("world").not.toBeAnnounced("polite"),await a.click(t),e("world").toBeAnnounced("polite"),e("Hello").not.toBeAnnounced(),e("Hello world").not.toBeAnnounced()};var c,u,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div role="timer">
        </div>
        \`, \`
        <div role="timer">
            Hello world
        </div>
        \`);
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,g,w;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(R=(A=l.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};const N=["WithTextContent","WrapsLiveRegion","WrappedInLiveRegion","SiblingIsVisible"];export{l as SiblingIsVisible,r as WithTextContent,i as WrappedInLiveRegion,n as WrapsLiveRegion,N as __namedExportsOrder,L as default};
