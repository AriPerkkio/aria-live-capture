import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./runtime-CLZ2u-Zl.js";import{a as r,i,n as a}from"./iframe-Cj23tzbu.js";var o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),t(),{within:o,userEvent:s}=__STORYBOOK_MODULE_TEST__,{expect:c}=__STORYBOOK_MODULE_TEST__,l={title:`DOM API Support/Node`},u=()=>{let e;return a(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{let t=document.createElement(`div`);t.textContent=`Hello world`,e.appendChild(t)})},u.storyName=`appendChild`,u.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},d=()=>{let e,t;return a(n=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t=document.createElement(`div`),e.appendChild(t),n.appendChild(e)},()=>{let n=document.createElement(`span`);n.textContent=`Hello world`,e.insertBefore(n,t)})},d.storyName=`insertBefore`,d.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},f=()=>{let e,t;return a(n=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t=document.createElement(`div`),e.appendChild(t),n.appendChild(e)},()=>{let n=document.createElement(`span`);n.textContent=`Hello world`,e.replaceChild(n,t)})},f.storyName=`replaceChild`,f.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},p=()=>{let e,t;return a(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.textContent=`Hello world`,t=document.createElement(`span`),e.appendChild(t)},()=>{t.textContent=`from child`})},p.storyName=`textContent`,p.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await r(2)(async()=>{await s.click(t),c(`Hello world`).not.toBeAnnounced()}),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},m=()=>{let e,t;return a(n=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t=document.createTextNode(``),e.appendChild(t),n.appendChild(e)},()=>{t.nodeValue=`Hello world`})},m.storyName=`nodeValue`,m.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},h=[`appendChild`,`insertBefore`,`replaceChild`,`textContent`,`nodeValue`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");
      parent.appendChild(element);
    },
    () => {
      const child = document.createElement("div");
      child.textContent = "Hello world";

      element.appendChild(child);
    },
  );
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let child: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");

      child = document.createElement("div");
      element.appendChild(child);

      parent.appendChild(element);
    },
    () => {
      const sibling = document.createElement("span");
      sibling.textContent = "Hello world";

      element.insertBefore(sibling, child);
    },
  );
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let child: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");

      child = document.createElement("div");
      element.appendChild(child);

      parent.appendChild(element);
    },
    () => {
      const newChild = document.createElement("span");
      newChild.textContent = "Hello world";

      element.replaceChild(newChild, child);
    },
  );
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let child: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");

      parent.appendChild(element);
    },
    () => {
      element.textContent = "Hello world";

      child = document.createElement("span");
      element.appendChild(child);
    },
    () => {
      child.textContent = "from child";
    },
  );
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let textNode: Node;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");

      textNode = document.createTextNode("");
      element.appendChild(textNode);

      parent.appendChild(element);
    },
    () => {
      textNode.nodeValue = "Hello world";
    },
  );
}`,...m.parameters?.docs?.source}}}})))()}g();export{h as __namedExportsOrder,u as appendChild,l as default,d as insertBefore,m as nodeValue,f as replaceChild,p as textContent};