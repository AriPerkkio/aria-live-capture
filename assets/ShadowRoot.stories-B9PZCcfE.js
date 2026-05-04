import{n as e}from"./chunk-DnJy8xQt.js";import{i as t,r as n,t as r}from"./iframe-BircjbKM.js";var i,a,o,s,c,l,u,d,f,p;e((()=>{n(),{within:i,userEvent:a}=__STORYBOOK_MODULE_TEST__,{expect:o}=__STORYBOOK_MODULE_TEST__,s={title:`DOM API Support/ShadowRoot`},c=()=>{let e,t;return r(t=>{let n=document.createElement(`div`);t.appendChild(n),e=n.attachShadow({mode:`open`})},()=>{t=document.createElement(`div`),t.setAttribute(`aria-live`,`polite`),e.appendChild(t)},()=>{t.textContent=`Hello world`})},c.play=async({canvasElement:e})=>{let n=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),t(2)(async()=>{await a.click(n),o(`Hello world`).not.toBeAnnounced()}),await a.click(n),o(`Hello world`).toBeAnnounced(`polite`)},l=()=>{let e;return r(t=>{let n=document.createElement(`div`);n.setAttribute(`aria-live`,`polite`),t.appendChild(n);let r=document.createElement(`div`);n.appendChild(r),e=r.attachShadow({mode:`open`})},()=>{let t=document.createElement(`div`);t.textContent=`Hello world`,e.appendChild(t)})},l.play=async({canvasElement:e})=>{let n=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),t(2)(async()=>{await a.click(n),o(`Hello world`).not.toBeAnnounced()}),await a.click(n),o(`Hello world`).toBeAnnounced(`polite`)},u=()=>{let e,t;return r(n=>{let r=document.createElement(`div`);n.appendChild(r);let i=document.createElement(`div`);r.attachShadow({mode:`open`}).appendChild(i),e=document.createElement(`div`),i.attachShadow({mode:`open`}).appendChild(e);let a=document.createElement(`div`);e.attachShadow({mode:`open`}).appendChild(a),t=a.attachShadow({mode:`open`})},()=>{e.setAttribute(`aria-live`,`polite`)},()=>{let e=document.createElement(`span`);e.textContent=`Hello `;let n=document.createElement(`span`);n.textContent=`world`;let r=document.createElement(`div`);r.appendChild(e),r.appendChild(n),t.appendChild(r)})},u.play=async({canvasElement:e})=>{let n=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),t(3)(async()=>{await a.click(n),o(`Hello world`).not.toBeAnnounced()}),await a.click(n),o(`Hello world`).toBeAnnounced(`polite`)},d=()=>{let e;return r(t=>{let n=document.createElement(`div`);n.setAttribute(`aria-live`,`polite`),t.appendChild(n);let r=document.createElement(`div`);n.appendChild(r),e=r.attachShadow({mode:`open`})},()=>{let t=document.createElement(`div`);t.textContent=`Hello`;let n=document.createElement(`div`);n.textContent=`world`,e.appendChild(t),e.host.appendChild(n)})},d.play=async({canvasElement:e})=>{let n=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),t(2)(async()=>{await a.click(n),o(`Hello`).not.toBeAnnounced()}),await a.click(n),o(`Hello`).toBeAnnounced(`polite`)},f=()=>{let e,t=document.createElement(`div`);t.textContent=`Hello world`;function n(){e.appendChild(t)}function i(){e.removeChild(t)}return r(t=>{let n=document.createElement(`div`);n.setAttribute(`aria-live`,`polite`),t.appendChild(n);let r=document.createElement(`div`);n.appendChild(r),e=r.attachShadow({mode:`open`})},...Array(50).fill([n,i]).reduce((e,t)=>[...e,...t],[]))},f.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).toBeAnnounced(`polite`)},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p=[`LiveRegionInsideShadowDOM`,`LiveRegionWrappingShadowDOM`,`LiveRegionDeeplyInShadowDOM`,`LiveRegionWrappingElementAndShadowDOM`,`VisibilityToggle`]}))();export{u as LiveRegionDeeplyInShadowDOM,c as LiveRegionInsideShadowDOM,d as LiveRegionWrappingElementAndShadowDOM,l as LiveRegionWrappingShadowDOM,f as VisibilityToggle,p as __namedExportsOrder,s as default};