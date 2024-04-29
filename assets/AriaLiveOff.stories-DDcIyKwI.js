var W=Object.defineProperty;var l=(i,o)=>W(i,"name",{value:o,configurable:!0});import{w as d,e,u as v}from"./index-PyJjBAvg.js";import{c as s}from"./utils-LNpl-ahl.js";import"./_getTag-B2JUw1-s.js";import"./index-B7qynYb3.js";import"./uniq-Ca-eE_Qr.js";import"./index-CHkBgh-E.js";const k={title:'Aria-live/aria-live="off"'},n=l(()=>s(`
        <div aria-live="off">
        </div>
        `,`
        <div aria-live="off">
            Hello world
        </div>
        `),"WithTextContent");n.storyName="With text content ❌";n.play=async({canvasElement:i})=>{const o=d(i).getByRole("button");e("Hello world").not.toBeAnnounced(),await v.click(o),e("Hello world").not.toBeAnnounced()};const r=l(()=>s(`
        <div aria-live="off">
            <div aria-live="polite">
            </div>
        </div>
        `,`
        <div aria-live="off">
            <div aria-live="polite">
                Hello world
            </div>
        </div>
        `),"WrapsLiveRegion");r.storyName="Wraps live region ✅";r.play=async({canvasElement:i})=>{const o=d(i).getByRole("button");e("Hello world").not.toBeAnnounced(),await v.click(o),e("Hello world").toBeAnnounced("polite")};const a=l(()=>s(`
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        `,`
        <div aria-live="polite">
            <div aria-live="off">
                Hello world
            </div>
        </div>
        `),"WrappedInLiveRegion");a.storyName="Wrapped in live region ❌";a.play=async({canvasElement:i})=>{const o=d(i).getByRole("button");e("Hello world").not.toBeAnnounced(),await v.click(o),e("Hello world").not.toBeAnnounced()};const t=l(()=>s(`
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        `,`
        <div aria-live="polite">
            <div aria-live="off">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        `),"SiblingIsVisible");t.storyName="Sibling is visible ⚠️";t.play=async({canvasElement:i})=>{const o=d(i).getByRole("button");e("world").not.toBeAnnounced(),await v.click(o),e("world").toBeAnnounced("polite"),e("Hello").not.toBeAnnounced(),e("Hello world").not.toBeAnnounced()};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="off">
        </div>
        \`, \`
        <div aria-live="off">
            Hello world
        </div>
        \`);
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,m,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="off">
            <div aria-live="polite">
            </div>
        </div>
        \`, \`
        <div aria-live="off">
            <div aria-live="polite">
                Hello world
            </div>
        </div>
        \`);
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var w,y,H;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        \`, \`
        <div aria-live="polite">
            <div aria-live="off">
                Hello world
            </div>
        </div>
        \`);
}`,...(H=(y=a.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var b,B,A;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div aria-live="polite">
            <div aria-live="off">
            </div>
        </div>
        \`, \`
        <div aria-live="polite">
            <div aria-live="off">
                Hello
            </div>
            <div>
                world
            </div>
        </div>
        \`);
}`,...(A=(B=t.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const I=["WithTextContent","WrapsLiveRegion","WrappedInLiveRegion","SiblingIsVisible"];export{t as SiblingIsVisible,n as WithTextContent,a as WrappedInLiveRegion,r as WrapsLiveRegion,I as __namedExportsOrder,k as default};
