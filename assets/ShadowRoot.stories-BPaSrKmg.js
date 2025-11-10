var E=Object.defineProperty;var c=(t,e)=>E(t,"name",{value:e,configurable:!0});import{w as u,e as d,u as l}from"./index-YQA0kDYo.js";import{a as w,t as C}from"./utils-XaxLrPgB.js";import"./_commonjsHelpers-BO6-jdEg.js";import"./index-B7qynYb3.js";const H={title:"DOM API Support/ShadowRoot"},i=c(()=>{let t,e;return w(n=>{const o=document.createElement("div");n.appendChild(o),t=o.attachShadow({mode:"open"})},()=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{e.textContent="Hello world"})},"LiveRegionInsideShadowDOM");i.play=async({canvasElement:t})=>{const e=u(t).getByRole("button");d("Hello world").not.toBeAnnounced(),C(2)(async()=>{await l.click(e),d("Hello world").not.toBeAnnounced()}),await l.click(e),d("Hello world").toBeAnnounced("polite")};const s=c(()=>{let t;return w(e=>{const n=document.createElement("div");n.setAttribute("aria-live","polite"),e.appendChild(n);const o=document.createElement("div");n.appendChild(o),t=o.attachShadow({mode:"open"})},()=>{const e=document.createElement("div");e.textContent="Hello world",t.appendChild(e)})},"LiveRegionWrappingShadowDOM");s.play=async({canvasElement:t})=>{const e=u(t).getByRole("button");d("Hello world").not.toBeAnnounced(),C(2)(async()=>{await l.click(e),d("Hello world").not.toBeAnnounced()}),await l.click(e),d("Hello world").toBeAnnounced("polite")};const p=c(()=>{let t,e;return w(n=>{const o=document.createElement("div");n.appendChild(o);const a=document.createElement("div");o.attachShadow({mode:"open"}).appendChild(a),t=document.createElement("div"),a.attachShadow({mode:"open"}).appendChild(t);const r=document.createElement("div");t.attachShadow({mode:"open"}).appendChild(r),e=r.attachShadow({mode:"open"})},()=>{t.setAttribute("aria-live","polite")},()=>{const n=document.createElement("span");n.textContent="Hello ";const o=document.createElement("span");o.textContent="world";const a=document.createElement("div");a.appendChild(n),a.appendChild(o),e.appendChild(a)})},"LiveRegionDeeplyInShadowDOM");p.play=async({canvasElement:t})=>{const e=u(t).getByRole("button");d("Hello world").not.toBeAnnounced(),C(3)(async()=>{await l.click(e),d("Hello world").not.toBeAnnounced()}),await l.click(e),d("Hello world").toBeAnnounced("polite")};const m=c(()=>{let t;return w(e=>{const n=document.createElement("div");n.setAttribute("aria-live","polite"),e.appendChild(n);const o=document.createElement("div");n.appendChild(o),t=o.attachShadow({mode:"open"})},()=>{const e=document.createElement("div");e.textContent="Hello";const n=document.createElement("div");n.textContent="world",t.appendChild(e),t.host.appendChild(n)})},"LiveRegionWrappingElementAndShadowDOM");m.play=async({canvasElement:t})=>{const e=u(t).getByRole("button");d("Hello world").not.toBeAnnounced(),C(2)(async()=>{await l.click(e),d("Hello").not.toBeAnnounced()}),await l.click(e),d("Hello").toBeAnnounced("polite")};const h=c(()=>{let t;const e=document.createElement("div");e.textContent="Hello world";function n(){t.appendChild(e)}c(n,"appendChild");function o(){t.removeChild(e)}return c(o,"removeChild"),w(a=>{const r=document.createElement("div");r.setAttribute("aria-live","polite"),a.appendChild(r);const v=document.createElement("div");r.appendChild(v),t=v.attachShadow({mode:"open"})},...Array(50).fill([n,o]).reduce((a,r)=>[...a,...r],[]))},"VisibilityToggle");h.play=async({canvasElement:t})=>{const e=u(t).getByRole("button");d("Hello world").not.toBeAnnounced(),await l.click(e),d("Hello world").not.toBeAnnounced(),await l.click(e),d("Hello world").toBeAnnounced("polite")};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};const B=["LiveRegionInsideShadowDOM","LiveRegionWrappingShadowDOM","LiveRegionDeeplyInShadowDOM","LiveRegionWrappingElementAndShadowDOM","VisibilityToggle"];export{p as LiveRegionDeeplyInShadowDOM,i as LiveRegionInsideShadowDOM,m as LiveRegionWrappingElementAndShadowDOM,s as LiveRegionWrappingShadowDOM,h as VisibilityToggle,B as __namedExportsOrder,H as default};
