var g=Object.defineProperty;var a=(t,n)=>g(t,"name",{value:n,configurable:!0});import{w as d,e as r,u as v}from"./index-BWu6l_32.js";import{c as m}from"./utils-LNpl-ahl.js";import"./_getTag-B2JUw1-s.js";import"./index-B7qynYb3.js";import"./uniq-Ca-eE_Qr.js";import"./index-CHkBgh-E.js";const L={title:"Elements/<output>"},e=a(()=>m(`
        <output>
        </output>
        `,`
        <output>
            Hello world
        </output>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:t})=>{const n=d(t).getByRole("button");r("Hello world").not.toBeAnnounced(),await v.click(n),r("Hello world").toBeAnnounced("polite")};const o=a(()=>m(`
        <div>
        </div>
        `,`
        <div>
            <output>
                Hello world
            </output>
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:t})=>{const n=d(t).getByRole("button");r("Hello world").not.toBeAnnounced(),await v.click(n),r("Hello world").not.toBeAnnounced()};var u,l,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <output>
        </output>
        \`, \`
        <output>
            Hello world
        </output>
        \`);
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var s,c,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <div>
        </div>
        \`, \`
        <div>
            <output>
                Hello world
            </output>
        </div>
        \`);
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const R=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,R as __namedExportsOrder,L as default};
