import{n as e}from"./chunk-BneVvdWh.js";import{i as t,r as n,t as r}from"./iframe-DJCPndM6.js";var i,a,o,s,c,l,u,d,f,p;e((()=>{n(),{within:i,userEvent:a}=__STORYBOOK_MODULE_TEST__,{expect:o}=__STORYBOOK_MODULE_TEST__,s={title:`DOM API Support/Node`},c=()=>{let e;return r(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{let t=document.createElement(`div`);t.textContent=`Hello world`,e.appendChild(t)})},c.storyName=`appendChild`,c.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).toBeAnnounced(`polite`)},l=()=>{let e,t;return r(n=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t=document.createElement(`div`),e.appendChild(t),n.appendChild(e)},()=>{let n=document.createElement(`span`);n.textContent=`Hello world`,e.insertBefore(n,t)})},l.storyName=`insertBefore`,l.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).toBeAnnounced(`polite`)},u=()=>{let e,t;return r(n=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t=document.createElement(`div`),e.appendChild(t),n.appendChild(e)},()=>{let n=document.createElement(`span`);n.textContent=`Hello world`,e.replaceChild(n,t)})},u.storyName=`replaceChild`,u.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).toBeAnnounced(`polite`)},d=()=>{let e,t;return r(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.textContent=`Hello world`,t=document.createElement(`span`),e.appendChild(t)},()=>{t.textContent=`from child`})},d.storyName=`textContent`,d.play=async({canvasElement:e})=>{let n=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),t(2)(async()=>{await a.click(n),o(`Hello world`).not.toBeAnnounced()}),await a.click(n),o(`Hello world`).toBeAnnounced(`polite`)},f=()=>{let e,t;return r(n=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t=document.createTextNode(``),e.appendChild(t),n.appendChild(e)},()=>{t.nodeValue=`Hello world`})},f.storyName=`nodeValue`,f.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).toBeAnnounced(`polite`)},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
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
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p=[`appendChild`,`insertBefore`,`replaceChild`,`textContent`,`nodeValue`]}))();export{p as __namedExportsOrder,c as appendChild,s as default,l as insertBefore,f as nodeValue,u as replaceChild,d as textContent};