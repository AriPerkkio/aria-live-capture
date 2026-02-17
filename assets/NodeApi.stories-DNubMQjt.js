var u=Object.defineProperty;var r=(e,t)=>u(e,"name",{value:t,configurable:!0});import{a as p,t as h}from"./iframe-82Zg_pZv.js";import"./preload-helper-CL58OYxb.js";const{within:s,userEvent:o}=__STORYBOOK_MODULE_TEST__,{expect:n}=__STORYBOOK_MODULE_TEST__,B={title:"DOM API Support/Node"},d=r(()=>{let e;return p(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{const t=document.createElement("div");t.textContent="Hello world",e.appendChild(t)})},"appendChild");d.storyName="appendChild";d.play=async({canvasElement:e})=>{const t=s(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").toBeAnnounced("polite")};const a=r(()=>{let e,t;return p(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t=document.createElement("div"),e.appendChild(t),l.appendChild(e)},()=>{const l=document.createElement("span");l.textContent="Hello world",e.insertBefore(l,t)})},"insertBefore");a.storyName="insertBefore";a.play=async({canvasElement:e})=>{const t=s(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").toBeAnnounced("polite")};const c=r(()=>{let e,t;return p(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t=document.createElement("div"),e.appendChild(t),l.appendChild(e)},()=>{const l=document.createElement("span");l.textContent="Hello world",e.replaceChild(l,t)})},"replaceChild");c.storyName="replaceChild";c.play=async({canvasElement:e})=>{const t=s(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").toBeAnnounced("polite")};const i=r(()=>{let e,t;return p(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),l.appendChild(e)},()=>{e.textContent="Hello world",t=document.createElement("span"),e.appendChild(t)},()=>{t.textContent="from child"})},"textContent");i.storyName="textContent";i.play=async({canvasElement:e})=>{const t=s(e).getByRole("button");n("Hello world").not.toBeAnnounced(),h(2)(async()=>{await o.click(t),n("Hello world").not.toBeAnnounced()}),await o.click(t),n("Hello world").toBeAnnounced("polite")};const m=r(()=>{let e,t;return p(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t=document.createTextNode(""),e.appendChild(t),l.appendChild(e)},()=>{t.nodeValue="Hello world"})},"nodeValue");m.storyName="nodeValue";m.play=async({canvasElement:e})=>{const t=s(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").toBeAnnounced("polite")};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    const child = document.createElement('div');
    child.textContent = 'Hello world';
    element.appendChild(child);
  });
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let child: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    child = document.createElement('div');
    element.appendChild(child);
    parent.appendChild(element);
  }, () => {
    const sibling = document.createElement('span');
    sibling.textContent = 'Hello world';
    element.insertBefore(sibling, child);
  });
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let child: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    child = document.createElement('div');
    element.appendChild(child);
    parent.appendChild(element);
  }, () => {
    const newChild = document.createElement('span');
    newChild.textContent = 'Hello world';
    element.replaceChild(newChild, child);
  });
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let child: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    element.textContent = 'Hello world';
    child = document.createElement('span');
    element.appendChild(child);
  }, () => {
    child.textContent = 'from child';
  });
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let textNode: Node;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    textNode = document.createTextNode('');
    element.appendChild(textNode);
    parent.appendChild(element);
  }, () => {
    textNode.nodeValue = 'Hello world';
  });
}`,...m.parameters?.docs?.source}}};const H=["appendChild","insertBefore","replaceChild","textContent","nodeValue"];export{H as __namedExportsOrder,d as appendChild,B as default,a as insertBefore,m as nodeValue,c as replaceChild,i as textContent};
