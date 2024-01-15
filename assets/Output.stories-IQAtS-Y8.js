var g=Object.defineProperty;var a=(t,n)=>g(t,"name",{value:n,configurable:!0});import{w as d,e as r,u as m}from"./index-8bPMSs_H.js";import{c as v}from"./utils-0JiZS-09.js";import"./_commonjsHelpers-RFtSs_Ch.js";import"./index-Kg-CViSs.js";import"./uniq-rlwX4jXw.js";import"./_getTag-NtD66v87.js";import"./index-A6DoDoRZ.js";import"./index-GzfZrMcW.js";const C={title:"Elements/<output>"},e=a(()=>v(`
        <output>
        </output>
        `,`
        <output>
            Hello world
        </output>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:t})=>{const n=d(t).getByRole("button");r("Hello world").not.toBeAnnounced(),await m.click(n),r("Hello world").toBeAnnounced("polite")};const o=a(()=>v(`
        <div>
        </div>
        `,`
        <div>
            <output>
                Hello world
            </output>
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:t})=>{const n=d(t).getByRole("button");r("Hello world").not.toBeAnnounced(),await m.click(n),r("Hello world").not.toBeAnnounced()};var u,l,i;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <output>
        </output>
        \`, \`
        <output>
            Hello world
        </output>
        \`);
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var s,p,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const x=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,x as __namedExportsOrder,C as default};
