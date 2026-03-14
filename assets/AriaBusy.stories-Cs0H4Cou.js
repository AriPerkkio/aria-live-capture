import{t as e}from"./iframe-iMBPCvXT.js";var t={title:`Unsupported/aria-busy`},n=()=>{let t;return e(e=>{t=document.createElement(`div`),t.setAttribute(`aria-live`,`polite`),e.appendChild(t)},()=>{t.setAttribute(`aria-busy`,`true`)},()=>{let e=document.createElement(`div`);e.textContent=`Hello`,t.appendChild(e)},()=>{let e=document.createElement(`div`);e.textContent=`world`,t.appendChild(e)},()=>{t.setAttribute(`aria-busy`,`false`)})};n.storyName=`true/false`,n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};var r=[`AriaBusy`];export{n as AriaBusy,r as __namedExportsOrder,t as default};