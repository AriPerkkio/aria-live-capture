var O=Object.defineProperty;var c=(t,e)=>O(t,"name",{value:e,configurable:!0});import{w as u,e as d,u as a}from"./index-a1bbf0bb.js";import{a as w,t as C}from"./utils-21f1601d.js";import"./index-9d909a03.js";import"./index-722d4584.js";import"./index-ce7257af.js";import"./uniq-6402743e.js";import"./index-b4278562.js";const z={title:"DOM API Support/ShadowRoot"},i=c(()=>{let t,e;return w(n=>{const o=document.createElement("div");n.appendChild(o),t=o.attachShadow({mode:"open"})},()=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{e.textContent="Hello world"})},"LiveRegionInsideShadowDOM");i.play=async({canvasElement:t})=>{const e=u(t).getByRole("button");d("Hello world").not.toBeAnnounced(),C(2)(()=>{a.click(e),d("Hello world").not.toBeAnnounced()}),a.click(e),d("Hello world").toBeAnnounced("polite")};const s=c(()=>{let t;return w(e=>{const n=document.createElement("div");n.setAttribute("aria-live","polite"),e.appendChild(n);const o=document.createElement("div");n.appendChild(o),t=o.attachShadow({mode:"open"})},()=>{const e=document.createElement("div");e.textContent="Hello world",t.appendChild(e)})},"LiveRegionWrappingShadowDOM");s.play=async({canvasElement:t})=>{const e=u(t).getByRole("button");d("Hello world").not.toBeAnnounced(),C(2)(()=>{a.click(e),d("Hello world").not.toBeAnnounced()}),a.click(e),d("Hello world").toBeAnnounced("polite")};const p=c(()=>{let t,e;return w(n=>{const o=document.createElement("div");n.appendChild(o);const l=document.createElement("div");o.attachShadow({mode:"open"}).appendChild(l),t=document.createElement("div"),l.attachShadow({mode:"open"}).appendChild(t);const r=document.createElement("div");t.attachShadow({mode:"open"}).appendChild(r),e=r.attachShadow({mode:"open"})},()=>{t.setAttribute("aria-live","polite")},()=>{const n=document.createElement("span");n.textContent="Hello ";const o=document.createElement("span");o.textContent="world";const l=document.createElement("div");l.appendChild(n),l.appendChild(o),e.appendChild(l)})},"LiveRegionDeeplyInShadowDOM");p.play=async({canvasElement:t})=>{const e=u(t).getByRole("button");d("Hello world").not.toBeAnnounced(),C(3)(()=>{a.click(e),d("Hello world").not.toBeAnnounced()}),a.click(e),d("Hello world").toBeAnnounced("polite")};const m=c(()=>{let t;return w(e=>{const n=document.createElement("div");n.setAttribute("aria-live","polite"),e.appendChild(n);const o=document.createElement("div");n.appendChild(o),t=o.attachShadow({mode:"open"})},()=>{const e=document.createElement("div");e.textContent="Hello";const n=document.createElement("div");n.textContent="world",t.appendChild(e),t.host.appendChild(n)})},"LiveRegionWrappingElementAndShadowDOM");m.play=async({canvasElement:t})=>{const e=u(t).getByRole("button");d("Hello world").not.toBeAnnounced(),C(2)(()=>{a.click(e),d("Hello").not.toBeAnnounced()}),a.click(e),d("Hello").toBeAnnounced("polite")};const h=c(()=>{let t;const e=document.createElement("div");e.textContent="Hello world";function n(){t.appendChild(e)}c(n,"appendChild");function o(){t.removeChild(e)}return c(o,"removeChild"),w(l=>{const r=document.createElement("div");r.setAttribute("aria-live","polite"),l.appendChild(r);const v=document.createElement("div");r.appendChild(v),t=v.attachShadow({mode:"open"})},...Array(50).fill([n,o]).reduce((l,r)=>[...l,...r],[]))},"VisibilityToggle");h.play=async({canvasElement:t})=>{const e=u(t).getByRole("button");d("Hello world").not.toBeAnnounced(),a.click(e),d("Hello world").not.toBeAnnounced(),a.click(e),d("Hello world").toBeAnnounced("polite")};var E,g,R;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  let shadowRoot: ShadowRoot;
  let element: HTMLElement;
  return createButtonCycle(parent => {
    const host = document.createElement('div');
    parent.appendChild(host);
    shadowRoot = host.attachShadow({
      mode: 'open'
    });
  }, () => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    shadowRoot.appendChild(element);
  }, () => {
    element.textContent = 'Hello world';
  });
}`,...(R=(g=i.parameters)==null?void 0:g.docs)==null?void 0:R.source}}};var S,A,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  let shadowRoot: ShadowRoot;
  return createButtonCycle(parent => {
    const region = document.createElement('div');
    region.setAttribute('aria-live', 'polite');
    parent.appendChild(region);
    const host = document.createElement('div');
    region.appendChild(host);
    shadowRoot = host.attachShadow({
      mode: 'open'
    });
  }, () => {
    const element = document.createElement('div');
    element.textContent = 'Hello world';
    shadowRoot.appendChild(element);
  });
}`,...(y=(A=s.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var H,B,b;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  let third: HTMLElement;
  let last: ShadowRoot;
  return createButtonCycle(parent => {
    const first = document.createElement('div');
    parent.appendChild(first);
    const second = document.createElement('div');
    first.attachShadow({
      mode: 'open'
    }).appendChild(second);
    third = document.createElement('div');
    second.attachShadow({
      mode: 'open'
    }).appendChild(third);
    const fourth = document.createElement('div');
    third.attachShadow({
      mode: 'open'
    }).appendChild(fourth);
    last = fourth.attachShadow({
      mode: 'open'
    });
  }, () => {
    third.setAttribute('aria-live', 'polite');
  }, () => {
    const hello = document.createElement('span');
    hello.textContent = 'Hello ';
    const world = document.createElement('span');
    world.textContent = 'world';
    const element = document.createElement('div');
    element.appendChild(hello);
    element.appendChild(world);
    last.appendChild(element);
  });
}`,...(b=(B=p.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var f,x,D;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  let shadowRoot: ShadowRoot;
  return createButtonCycle(parent => {
    const region = document.createElement('div');
    region.setAttribute('aria-live', 'polite');
    parent.appendChild(region);
    const host = document.createElement('div');
    region.appendChild(host);
    shadowRoot = host.attachShadow({
      mode: 'open'
    });
  }, () => {
    const hello = document.createElement('div');
    hello.textContent = 'Hello';
    const world = document.createElement('div');
    world.textContent = 'world';
    shadowRoot.appendChild(hello);
    shadowRoot.host.appendChild(world);
  });
}`,...(D=(x=m.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var M,k,L;h.parameters={...h.parameters,docs:{...(M=h.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  let shadowRoot: ShadowRoot;
  const element = document.createElement('div');
  element.textContent = 'Hello world';
  function appendChild() {
    shadowRoot.appendChild(element);
  }
  function removeChild() {
    shadowRoot.removeChild(element);
  }
  return createButtonCycle(parent => {
    const region = document.createElement('div');
    region.setAttribute('aria-live', 'polite');
    parent.appendChild(region);
    const host = document.createElement('div');
    region.appendChild(host);
    shadowRoot = host.attachShadow({
      mode: 'open'
    });
  }, ...Array(50).fill([appendChild, removeChild]).reduce((all, methods) => [...all, ...methods], []));
}`,...(L=(k=h.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};const F=["LiveRegionInsideShadowDOM","LiveRegionWrappingShadowDOM","LiveRegionDeeplyInShadowDOM","LiveRegionWrappingElementAndShadowDOM","VisibilityToggle"];export{p as LiveRegionDeeplyInShadowDOM,i as LiveRegionInsideShadowDOM,m as LiveRegionWrappingElementAndShadowDOM,s as LiveRegionWrappingShadowDOM,h as VisibilityToggle,F as __namedExportsOrder,z as default};
//# sourceMappingURL=ShadowRoot.stories-45837718.js.map