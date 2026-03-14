import{r as e,t}from"./iframe-iMBPCvXT.js";var{within:n,userEvent:r}=__STORYBOOK_MODULE_TEST__,{expect:i}=__STORYBOOK_MODULE_TEST__,a={title:`DOM API Support/Node`},o=()=>{let e;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{let t=document.createElement(`div`);t.textContent=`Hello world`,e.appendChild(t)})};o.storyName=`appendChild`,o.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).toBeAnnounced(`polite`)};var s=()=>{let e,n;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),n=document.createElement(`div`),e.appendChild(n),t.appendChild(e)},()=>{let t=document.createElement(`span`);t.textContent=`Hello world`,e.insertBefore(t,n)})};s.storyName=`insertBefore`,s.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).toBeAnnounced(`polite`)};var c=()=>{let e,n;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),n=document.createElement(`div`),e.appendChild(n),t.appendChild(e)},()=>{let t=document.createElement(`span`);t.textContent=`Hello world`,e.replaceChild(t,n)})};c.storyName=`replaceChild`,c.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).toBeAnnounced(`polite`)};var l=()=>{let e,n;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.textContent=`Hello world`,n=document.createElement(`span`),e.appendChild(n)},()=>{n.textContent=`from child`})};l.storyName=`textContent`,l.play=async({canvasElement:t})=>{let a=n(t).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),e(2)(async()=>{await r.click(a),i(`Hello world`).not.toBeAnnounced()}),await r.click(a),i(`Hello world`).toBeAnnounced(`polite`)};var u=()=>{let e,n;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),n=document.createTextNode(``),e.appendChild(n),t.appendChild(e)},()=>{n.nodeValue=`Hello world`})};u.storyName=`nodeValue`,u.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).toBeAnnounced(`polite`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}};var d=[`appendChild`,`insertBefore`,`replaceChild`,`textContent`,`nodeValue`];export{d as __namedExportsOrder,o as appendChild,a as default,s as insertBefore,u as nodeValue,c as replaceChild,l as textContent};