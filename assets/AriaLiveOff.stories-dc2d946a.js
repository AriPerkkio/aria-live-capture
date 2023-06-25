var W=Object.defineProperty;var l=(i,o)=>W(i,"name",{value:o,configurable:!0});import{w as d,e,u as v}from"./index-24220ed1.js";import{c as s}from"./utils-62c5c2e7.js";import"./index-722d4584.js";import"./index-ce7257af.js";import"./uniq-6402743e.js";import"./index-b4278562.js";import"./index-c8c96787.js";const I={title:'Aria-live/aria-live="off"'},n=l(()=>s(`
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
}`,...(A=(B=t.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};const N=["WithTextContent","WrapsLiveRegion","WrappedInLiveRegion","SiblingIsVisible"];export{t as SiblingIsVisible,n as WithTextContent,a as WrappedInLiveRegion,r as WrapsLiveRegion,N as __namedExportsOrder,I as default};
//# sourceMappingURL=AriaLiveOff.stories-dc2d946a.js.map
