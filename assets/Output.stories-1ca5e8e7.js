var g=Object.defineProperty;var u=(t,n)=>g(t,"name",{value:n,configurable:!0});import{w as d,e as r,u as m}from"./index-a1bbf0bb.js";import{c as v}from"./utils-21f1601d.js";import"./index-9d909a03.js";import"./index-722d4584.js";import"./index-ce7257af.js";import"./uniq-6402743e.js";import"./index-b4278562.js";const R={title:"Elements/<output>"},e=u(()=>v(`
        <output>
        </output>
        `,`
        <output>
            Hello world
        </output>
        `),"LiveRegionAvailableBeforeContent");e.storyName="Live region available before content ✅";e.play=async({canvasElement:t})=>{const n=d(t).getByRole("button");r("Hello world").not.toBeAnnounced(),m.click(n),r("Hello world").toBeAnnounced("polite")};const o=u(()=>v(`
        <div>
        </div>
        `,`
        <div>
            <output>
                Hello world
            </output>
        </div>
        `),"LiveRegionUnavailableBeforeContent");o.storyName="Live region unavailable before content ❌";o.play=async({canvasElement:t})=>{const n=d(t).getByRole("button");r("Hello world").not.toBeAnnounced(),m.click(n),r("Hello world").not.toBeAnnounced()};var l,a,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  return createMountToggle(\`
        <output>
        </output>
        \`, \`
        <output>
            Hello world
        </output>
        \`);
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,c,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
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
//# sourceMappingURL=Output.stories-1ca5e8e7.js.map
