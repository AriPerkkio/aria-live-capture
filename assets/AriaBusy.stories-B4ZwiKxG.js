import{n as e}from"./chunk-DnJy8xQt.js";import{r as t,t as n}from"./iframe-BircjbKM.js";var r,i,a;e((()=>{t(),r={title:`Unsupported/aria-busy`},i=()=>{let e;return n(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.setAttribute(`aria-busy`,`true`)},()=>{let t=document.createElement(`div`);t.textContent=`Hello`,e.appendChild(t)},()=>{let t=document.createElement(`div`);t.textContent=`world`,e.appendChild(t)},()=>{e.setAttribute(`aria-busy`,`false`)})},i.storyName=`true/false`,i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
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
}`,...i.parameters?.docs?.source}}},a=[`AriaBusy`]}))();export{i as AriaBusy,a as __namedExportsOrder,r as default};