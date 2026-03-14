import{r as e,t}from"./iframe-iMBPCvXT.js";var{within:n,userEvent:r}=__STORYBOOK_MODULE_TEST__,{expect:i}=__STORYBOOK_MODULE_TEST__,a={title:`DOM API Support/ShadowRoot`},o=()=>{let e,n;return t(t=>{let n=document.createElement(`div`);t.appendChild(n),e=n.attachShadow({mode:`open`})},()=>{n=document.createElement(`div`),n.setAttribute(`aria-live`,`polite`),e.appendChild(n)},()=>{n.textContent=`Hello world`})};o.play=async({canvasElement:t})=>{let a=n(t).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),e(2)(async()=>{await r.click(a),i(`Hello world`).not.toBeAnnounced()}),await r.click(a),i(`Hello world`).toBeAnnounced(`polite`)};var s=()=>{let e;return t(t=>{let n=document.createElement(`div`);n.setAttribute(`aria-live`,`polite`),t.appendChild(n);let r=document.createElement(`div`);n.appendChild(r),e=r.attachShadow({mode:`open`})},()=>{let t=document.createElement(`div`);t.textContent=`Hello world`,e.appendChild(t)})};s.play=async({canvasElement:t})=>{let a=n(t).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),e(2)(async()=>{await r.click(a),i(`Hello world`).not.toBeAnnounced()}),await r.click(a),i(`Hello world`).toBeAnnounced(`polite`)};var c=()=>{let e,n;return t(t=>{let r=document.createElement(`div`);t.appendChild(r);let i=document.createElement(`div`);r.attachShadow({mode:`open`}).appendChild(i),e=document.createElement(`div`),i.attachShadow({mode:`open`}).appendChild(e);let a=document.createElement(`div`);e.attachShadow({mode:`open`}).appendChild(a),n=a.attachShadow({mode:`open`})},()=>{e.setAttribute(`aria-live`,`polite`)},()=>{let e=document.createElement(`span`);e.textContent=`Hello `;let t=document.createElement(`span`);t.textContent=`world`;let r=document.createElement(`div`);r.appendChild(e),r.appendChild(t),n.appendChild(r)})};c.play=async({canvasElement:t})=>{let a=n(t).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),e(3)(async()=>{await r.click(a),i(`Hello world`).not.toBeAnnounced()}),await r.click(a),i(`Hello world`).toBeAnnounced(`polite`)};var l=()=>{let e;return t(t=>{let n=document.createElement(`div`);n.setAttribute(`aria-live`,`polite`),t.appendChild(n);let r=document.createElement(`div`);n.appendChild(r),e=r.attachShadow({mode:`open`})},()=>{let t=document.createElement(`div`);t.textContent=`Hello`;let n=document.createElement(`div`);n.textContent=`world`,e.appendChild(t),e.host.appendChild(n)})};l.play=async({canvasElement:t})=>{let a=n(t).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),e(2)(async()=>{await r.click(a),i(`Hello`).not.toBeAnnounced()}),await r.click(a),i(`Hello`).toBeAnnounced(`polite`)};var u=()=>{let e,n=document.createElement(`div`);n.textContent=`Hello world`;function r(){e.appendChild(n)}function i(){e.removeChild(n)}return t(t=>{let n=document.createElement(`div`);n.setAttribute(`aria-live`,`polite`),t.appendChild(n);let r=document.createElement(`div`);n.appendChild(r),e=r.attachShadow({mode:`open`})},...Array(50).fill([r,i]).reduce((e,t)=>[...e,...t],[]))};u.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).toBeAnnounced(`polite`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
    const hello = document.createElement('div');
    hello.textContent = 'Hello';
    const world = document.createElement('div');
    world.textContent = 'world';
    shadowRoot.appendChild(hello);
    shadowRoot.host.appendChild(world);
  });
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};var d=[`LiveRegionInsideShadowDOM`,`LiveRegionWrappingShadowDOM`,`LiveRegionDeeplyInShadowDOM`,`LiveRegionWrappingElementAndShadowDOM`,`VisibilityToggle`];export{c as LiveRegionDeeplyInShadowDOM,o as LiveRegionInsideShadowDOM,l as LiveRegionWrappingElementAndShadowDOM,s as LiveRegionWrappingShadowDOM,u as VisibilityToggle,d as __namedExportsOrder,a as default};