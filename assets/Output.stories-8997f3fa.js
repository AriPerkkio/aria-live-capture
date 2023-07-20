var g=Object.defineProperty;var a=(t,n)=>g(t,"name",{value:n,configurable:!0});import{w as d,e as r,u as m}from"./index-d7a91f28.js";import{c as v}from"./utils-f8fc7d82.js";import"./index-722d4584.js";import"./index-ce7257af.js";import"./uniq-6402743e.js";import"./browser-8264ef50.js";import"./index-b4278562.js";const R={title:"Elements/<output>"},e=a(()=>v(`
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
//# sourceMappingURL=Output.stories-8997f3fa.js.map
