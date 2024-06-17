var d=Object.defineProperty;var r=(e,t)=>d(e,"name",{value:t,configurable:!0});import{a as s}from"./utils-DoweNrC_.js";const u={title:"Unsupported/aria-busy"},n=r(()=>{let e;return s(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{e.setAttribute("aria-busy","true")},()=>{const t=document.createElement("div");t.textContent="Hello",e.appendChild(t)},()=>{const t=document.createElement("div");t.textContent="world",e.appendChild(t)},()=>{e.setAttribute("aria-busy","false")})},"AriaBusy");n.storyName="true/false";var a,l,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(i=(l=n.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const m=["AriaBusy"];export{n as AriaBusy,m as __namedExportsOrder,u as default};
