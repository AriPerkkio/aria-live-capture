import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t,t as n}from"./runtime-CLZ2u-Zl.js";import{a as r,i,n as a}from"./iframe-Cj23tzbu.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),i(),t(),{within:o,userEvent:s}=__STORYBOOK_MODULE_TEST__,{expect:c}=__STORYBOOK_MODULE_TEST__,l={title:`DOM API Support/Element`},u=()=>{let e;return a(t=>{e=document.createElement(`div`),t.appendChild(e)},()=>{e.setAttribute(`aria-live`,`polite`)},()=>{e.textContent=`Hello world`})},u.storyName=`setAttribute`,u.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await r(2)(async()=>{await s.click(t),c(`Hello world`).not.toBeAnnounced()}),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},d=()=>{let e;return a(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{let t=document.createElement(`span`);t.textContent=`Hello world`,e.insertAdjacentElement(`afterbegin`,t)})},d.storyName=`insertAdjacentElement`,d.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},f=()=>{let e;return a(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.insertAdjacentHTML(`afterbegin`,`<span>Hello world</span>`)})},f.storyName=`insertAdjacentHTML`,f.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},p=()=>{let e;return a(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.insertAdjacentText(`afterbegin`,`Hello world`)})},p.storyName=`insertAdjacentText`,p.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},m=()=>{let e,t;return a(n=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t=document.createElement(`div`),e.appendChild(t),n.appendChild(e)},()=>{let e=document.createElement(`span`);e.textContent=`Hello world`,t.before(e)})},m.storyName=`before`,m.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},h=()=>{let e;return a(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`);let n=document.createElement(`div`);e.append(n),t.appendChild(e)},()=>{let t=document.createElement(`span`);t.textContent=`Hello world`,e.append(t)})},h.storyName=`append`,h.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},g=()=>{let e;return a(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`);let n=document.createElement(`div`);e.append(n),t.appendChild(e)},()=>{let t=document.createElement(`span`);t.textContent=`Hello world`,e.prepend(t)})},g.storyName=`prepend`,g.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).not.toBeAnnounced(),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},_=()=>{let e,t;return a(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.appendChild(document.createElement(`p`)),e.appendChild(document.createElement(`div`))},()=>{t=document.createElement(`span`),t.textContent=`Hello world`,e.replaceChildren(t)})},_.storyName=`replaceChildren`,_.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await r(2)(async()=>{await s.click(t),c(`Hello world`).not.toBeAnnounced()}),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},v=()=>{let e,t;return a(t=>{e=document.createElement(`div`),t.appendChild(e)},()=>{e.setAttribute(`aria-live`,`polite`),e.setAttribute(`aria-hidden`,`true`)},()=>{e.textContent=`Hello world`},()=>{e.removeAttribute(`aria-hidden`)},()=>{t=document.createElement(`span`),t.setAttribute(`aria-hidden`,`true`),t.textContent=`from child`,e.appendChild(t)},()=>{t.removeAttribute(`aria-hidden`)})},v.storyName=`removeAttribute`,v.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello world`).not.toBeAnnounced(),await r(4)(async()=>{await s.click(t),c(`Hello world`).not.toBeAnnounced()}),await s.click(t),c(`Hello world`).toBeAnnounced(`polite`)},y=()=>{let e,t;return a(n=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`);let r=document.createElement(`span`);r.textContent=`Hello`,e.appendChild(r),t=document.createElement(`span`),t.textContent=`world`,e.appendChild(t),n.appendChild(e)},()=>{e.removeChild(t)})},y.storyName=`removeChild`,y.play=async({canvasElement:e})=>{let t=o(e).getByRole(`button`);c(`Hello`).not.toBeAnnounced(),await s.click(t),c(`Hello`).not.toBeAnnounced(),await s.click(t),c(`Hello`).toBeAnnounced(`polite`)},b=[`setAttribute`,`insertAdjacentElement`,`insertAdjacentHTML`,`insertAdjacentText`,`before`,`append`,`prepend`,`replaceChildren`,`removeAttribute`,`removeChild`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      parent.appendChild(element);
    },
    () => {
      element.setAttribute("aria-live", "polite");
    },
    () => {
      element.textContent = "Hello world";
    },
  );
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");
      parent.appendChild(element);
    },
    () => {
      const child = document.createElement("span");
      child.textContent = "Hello world";
      element.insertAdjacentElement("afterbegin", child);
    },
  );
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");
      parent.appendChild(element);
    },
    () => {
      element.insertAdjacentHTML("afterbegin", "<span>Hello world</span>");
    },
  );
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");
      parent.appendChild(element);
    },
    () => {
      element.insertAdjacentText("afterbegin", "Hello world");
    },
  );
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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

      child.before(sibling);
    },
  );
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");

      const child = document.createElement("div");
      element.append(child);

      parent.appendChild(element);
    },
    () => {
      const sibling = document.createElement("span");
      sibling.textContent = "Hello world";

      element.append(sibling);
    },
  );
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");

      const child = document.createElement("div");
      element.append(child);

      parent.appendChild(element);
    },
    () => {
      const sibling = document.createElement("span");
      sibling.textContent = "Hello world";

      element.prepend(sibling);
    },
  );
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let child: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");

      parent.appendChild(element);
    },
    () => {
      element.appendChild(document.createElement("p"));
      element.appendChild(document.createElement("div"));
    },
    () => {
      child = document.createElement("span");
      child.textContent = "Hello world";
      element.replaceChildren(child);
    },
  );
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let child: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      parent.appendChild(element);
    },
    () => {
      element.setAttribute("aria-live", "polite");
      element.setAttribute("aria-hidden", "true");
    },
    () => {
      element.textContent = "Hello world";
    },
    () => {
      element.removeAttribute("aria-hidden");
    },
    () => {
      child = document.createElement("span");
      child.setAttribute("aria-hidden", "true");
      child.textContent = "from child";
      element.appendChild(child);
    },
    () => {
      child.removeAttribute("aria-hidden");
    },
  );
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let sibling: HTMLElement;

  return createButtonCycle(
    (parent) => {
      element = document.createElement("div");
      element.setAttribute("aria-live", "polite");

      const child = document.createElement("span");
      child.textContent = "Hello";
      element.appendChild(child);

      sibling = document.createElement("span");
      sibling.textContent = "world";
      element.appendChild(sibling);

      parent.appendChild(element);
    },
    () => {
      element.removeChild(sibling);
    },
  );
}`,...y.parameters?.docs?.source}}}})))()}x();export{b as __namedExportsOrder,h as append,m as before,l as default,d as insertAdjacentElement,f as insertAdjacentHTML,p as insertAdjacentText,g as prepend,v as removeAttribute,y as removeChild,_ as replaceChildren,u as setAttribute};