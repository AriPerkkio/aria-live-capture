var a=Object.defineProperty;var r=(e,t)=>a(e,"name",{value:t,configurable:!0});import{a as l}from"./utils-XaxLrPgB.js";const s={title:"Unsupported/aria-busy"},n=r(()=>{let e;return l(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{e.setAttribute("aria-busy","true")},()=>{const t=document.createElement("div");t.textContent="Hello",e.appendChild(t)},()=>{const t=document.createElement("div");t.textContent="world",e.appendChild(t)},()=>{e.setAttribute("aria-busy","false")})},"AriaBusy");n.storyName="true/false";n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    element.setAttribute('aria-busy', 'true');
  }, () => {
    const child = document.createElement('div');
    child.textContent = 'Hello';
    element.appendChild(child);
  }, () => {
    const child = document.createElement('div');
    child.textContent = 'world';
    element.appendChild(child);
  }, () => {
    element.setAttribute('aria-busy', 'false');
  });
}`,...n.parameters?.docs?.source}}};const o=["AriaBusy"];export{n as AriaBusy,o as __namedExportsOrder,s as default};
