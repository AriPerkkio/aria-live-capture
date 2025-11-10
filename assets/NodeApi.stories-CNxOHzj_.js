var u=Object.defineProperty;var r=(e,t)=>u(e,"name",{value:t,configurable:!0});import{w as p,e as n,u as o}from"./index-YQA0kDYo.js";import{a as s,t as h}from"./utils-XaxLrPgB.js";import"./_commonjsHelpers-BO6-jdEg.js";import"./index-B7qynYb3.js";const v={title:"DOM API Support/Node"},a=r(()=>{let e;return s(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{const t=document.createElement("div");t.textContent="Hello world",e.appendChild(t)})},"appendChild");a.storyName="appendChild";a.play=async({canvasElement:e})=>{const t=p(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").toBeAnnounced("polite")};const d=r(()=>{let e,t;return s(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t=document.createElement("div"),e.appendChild(t),l.appendChild(e)},()=>{const l=document.createElement("span");l.textContent="Hello world",e.insertBefore(l,t)})},"insertBefore");d.storyName="insertBefore";d.play=async({canvasElement:e})=>{const t=p(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").toBeAnnounced("polite")};const c=r(()=>{let e,t;return s(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t=document.createElement("div"),e.appendChild(t),l.appendChild(e)},()=>{const l=document.createElement("span");l.textContent="Hello world",e.replaceChild(l,t)})},"replaceChild");c.storyName="replaceChild";c.play=async({canvasElement:e})=>{const t=p(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").toBeAnnounced("polite")};const i=r(()=>{let e,t;return s(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),l.appendChild(e)},()=>{e.textContent="Hello world",t=document.createElement("span"),e.appendChild(t)},()=>{t.textContent="from child"})},"textContent");i.storyName="textContent";i.play=async({canvasElement:e})=>{const t=p(e).getByRole("button");n("Hello world").not.toBeAnnounced(),h(2)(async()=>{await o.click(t),n("Hello world").not.toBeAnnounced()}),await o.click(t),n("Hello world").toBeAnnounced("polite")};const m=r(()=>{let e,t;return s(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t=document.createTextNode(""),e.appendChild(t),l.appendChild(e)},()=>{t.nodeValue="Hello world"})},"nodeValue");m.storyName="nodeValue";m.play=async({canvasElement:e})=>{const t=p(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").not.toBeAnnounced(),await o.click(t),n("Hello world").toBeAnnounced("polite")};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
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
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}};const y=["appendChild","insertBefore","replaceChild","textContent","nodeValue"];export{y as __namedExportsOrder,a as appendChild,v as default,d as insertBefore,m as nodeValue,c as replaceChild,i as textContent};
