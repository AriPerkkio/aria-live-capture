var g=Object.defineProperty;var a=(t,n)=>g(t,"name",{value:n,configurable:!0});import{w as d,e as r,u as m}from"./index-1914e1ea.js";import{c as v}from"./utils-f8fc7d82.js";import"./index-052b959b.js";import"./index-b3c9b8ba.js";import"./uniq-817fe036.js";import"./index-a063825c.js";import"./index-4207b8b5.js";const R={title:"Elements/<output>"},e=a(()=>v(`
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
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const C=["LiveRegionAvailableBeforeContent","LiveRegionUnavailableBeforeContent"];export{e as LiveRegionAvailableBeforeContent,o as LiveRegionUnavailableBeforeContent,C as __namedExportsOrder,R as default};
//# sourceMappingURL=Output.stories-9e9f14fd.js.map
