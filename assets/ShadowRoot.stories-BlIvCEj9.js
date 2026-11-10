import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./runtime-CLZ2u-Zl.js";import{a as r,i,n as a}from"./iframe-Cj23tzbu.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),t(),{within:o,userEvent:s}=__STORYBOOK_MODULE_TEST__,{expect:c}=__STORYBOOK_MODULE_TEST__,l={title:`DOM API Support/ShadowRoot`},u=()=>{let e,t;return a(t=>{let n=document.createElement(`div`);t.appendChild(n),e=n.attachShadow({mode:`open`})},()=>{t=document.createElement(`div`),t.setAttribute(`aria-live`,`polite`),e.appendChild(t)},()=>{t.textContent=`Hello world`})},u.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await r(2)(async()=>{await s.click(t),c(`Hello world`).not.toBeAnnounced()}),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},d=()=>{let e;return a(t=>{let n=document.createElement(`div`);n.setAttribute(`aria-live`,`polite`),t.appendChild(n);let r=document.createElement(`div`);n.appendChild(r),e=r.attachShadow({mode:`open`})},()=>{let t=document.createElement(`div`);t.textContent=`Hello world`,e.appendChild(t)})},d.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await r(2)(async()=>{await s.click(t),c(`Hello world`).not.toBeAnnounced()}),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},f=()=>{let e,t;return a(n=>{let r=document.createElement(`div`);n.appendChild(r);let i=document.createElement(`div`);r.attachShadow({mode:`open`}).appendChild(i),e=document.createElement(`div`),i.attachShadow({mode:`open`}).appendChild(e);let a=document.createElement(`div`);e.attachShadow({mode:`open`}).appendChild(a),t=a.attachShadow({mode:`open`})},()=>{e.setAttribute(`aria-live`,`polite`)},()=>{let e=document.createElement(`span`);e.textContent=`Hello `;let n=document.createElement(`span`);n.textContent=`world`;let r=document.createElement(`div`);r.appendChild(e),r.appendChild(n),t.appendChild(r)})},f.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await r(3)(async()=>{await s.click(t),c(`Hello world`).not.toBeAnnounced()}),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},p=()=>{let e;return a(t=>{let n=document.createElement(`div`);n.setAttribute(`aria-live`,`polite`),t.appendChild(n);let r=document.createElement(`div`);n.appendChild(r),e=r.attachShadow({mode:`open`})},()=>{let t=document.createElement(`div`);t.textContent=`Hello`;let n=document.createElement(`div`);n.textContent=`world`,e.appendChild(t),e.host.appendChild(n)})},p.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await r(2)(async()=>{await s.click(t),c(`Hello`).not.toBeAnnounced()}),await s.click(t),c(`Hello`).toBeAnnounced(`polite`)},m=()=>{let e,t=document.createElement(`div`);t.textContent=`Hello world`;function n(){e.appendChild(t)}function r(){e.removeChild(t)}return a(t=>{let n=document.createElement(`div`);n.setAttribute(`aria-live`,`polite`),t.appendChild(n);let r=document.createElement(`div`);n.appendChild(r),e=r.attachShadow({mode:`open`})},...Array(50).fill([n,r]).reduce((e,t)=>[...e,...t],[]))},m.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},h=[`LiveRegionInsideShadowDOM`,`LiveRegionWrappingShadowDOM`,`LiveRegionDeeplyInShadowDOM`,`LiveRegionWrappingElementAndShadowDOM`,`VisibilityToggle`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  let shadowRoot: ShadowRoot;
  let element: HTMLElement;

  return createButtonCycle(
    (parent) => {
      const host = document.createElement("div");
      parent.appendChild(host);

      shadowRoot = host.attachShadow({ mode: "open" });
    },
    () => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");

      shadowRoot.appendChild(element);
    },
    () => {
      element.textContent = "Hello world";
    },
  );
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  let shadowRoot: ShadowRoot;

  return createButtonCycle(
    (parent) => {
      const region = document.createElement("div");
      region.setAttribute("aria-live", "polite");
      parent.appendChild(region);

      const host = document.createElement("div");
      region.appendChild(host);

      shadowRoot = host.attachShadow({ mode: "open" });
    },
    () => {
      const element = document.createElement("div");
      element.textContent = "Hello world";

      shadowRoot.appendChild(element);
    },
  );
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  let third: HTMLElement;
  let last: ShadowRoot;

  return createButtonCycle(
    (parent) => {
      const first = document.createElement("div");
      parent.appendChild(first);

      const second = document.createElement("div");
      first.attachShadow({ mode: "open" }).appendChild(second);

      third = document.createElement("div");
      second.attachShadow({ mode: "open" }).appendChild(third);

      const fourth = document.createElement("div");
      third.attachShadow({ mode: "open" }).appendChild(fourth);

      last = fourth.attachShadow({ mode: "open" });
    },
    () => {
      third.setAttribute("aria-live", "polite");
    },
    () => {
      const hello = document.createElement("span");
      hello.textContent = "Hello ";

      const world = document.createElement("span");
      world.textContent = "world";

      const element = document.createElement("div");
      element.appendChild(hello);
      element.appendChild(world);

      last.appendChild(element);
    },
  );
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  let shadowRoot: ShadowRoot;

  return createButtonCycle(
    (parent) => {
      const region = document.createElement("div");
      region.setAttribute("aria-live", "polite");
      parent.appendChild(region);

      const host = document.createElement("div");
      region.appendChild(host);

      shadowRoot = host.attachShadow({ mode: "open" });
    },
    () => {
      const hello = document.createElement("div");
      hello.textContent = "Hello";

      const world = document.createElement("div");
      world.textContent = "world";

      shadowRoot.appendChild(hello);
      shadowRoot.host.appendChild(world);
    },
  );
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  let shadowRoot: ShadowRoot;

  const element = document.createElement("div");
  element.textContent = "Hello world";

  function appendChild() {
    shadowRoot.appendChild(element);
  }
  function removeChild() {
    shadowRoot.removeChild(element);
  }

  return createButtonCycle(
    (parent) => {
      const region = document.createElement("div");
      region.setAttribute("aria-live", "polite");
      parent.appendChild(region);

      const host = document.createElement("div");
      region.appendChild(host);

      shadowRoot = host.attachShadow({ mode: "open" });
    },
    ...Array(50)
      .fill([appendChild, removeChild])
      .reduce((all, methods) => [...all, ...methods], []),
  );
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as LiveRegionDeeplyInShadowDOM,u as LiveRegionInsideShadowDOM,p as LiveRegionWrappingElementAndShadowDOM,d as LiveRegionWrappingShadowDOM,m as VisibilityToggle,h as __namedExportsOrder,l as default};