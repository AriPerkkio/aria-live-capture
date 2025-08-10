var H=Object.defineProperty;var r=(e,t)=>H(e,"name",{value:t,configurable:!0});import{w as a,e as n,u as l}from"./index-DzH2OIry.js";import{a as i,t as w}from"./utils-XaxLrPgB.js";import"./_commonjsHelpers-BO6-jdEg.js";import"./index-B7qynYb3.js";const T={title:"DOM API Support/Element"},c=r(()=>{let e;return i(t=>{e=document.createElement("div"),t.appendChild(e)},()=>{e.setAttribute("aria-live","polite")},()=>{e.textContent="Hello world"})},"setAttribute");c.storyName="setAttribute";c.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await w(2)(async()=>{await l.click(t),n("Hello world").not.toBeAnnounced()}),await l.click(t),n("Hello world").toBeAnnounced("polite")};const d=r(()=>{let e;return i(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{const t=document.createElement("span");t.textContent="Hello world",e.insertAdjacentElement("afterbegin",t)})},"insertAdjacentElement");d.storyName="insertAdjacentElement";d.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const m=r(()=>{let e;return i(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{e.insertAdjacentHTML("afterbegin","<span>Hello world</span>")})},"insertAdjacentHTML");m.storyName="insertAdjacentHTML";m.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const s=r(()=>{let e;return i(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{e.insertAdjacentText("afterbegin","Hello world")})},"insertAdjacentText");s.storyName="insertAdjacentText";s.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const p=r(()=>{let e,t;return i(o=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t=document.createElement("div"),e.appendChild(t),o.appendChild(e)},()=>{const o=document.createElement("span");o.textContent="Hello world",t.before(o)})},"before");p.storyName="before";p.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const u=r(()=>{let e;return i(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite");const o=document.createElement("div");e.append(o),t.appendChild(e)},()=>{const t=document.createElement("span");t.textContent="Hello world",e.append(t)})},"append");u.storyName="append";u.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const h=r(()=>{let e;return i(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite");const o=document.createElement("div");e.append(o),t.appendChild(e)},()=>{const t=document.createElement("span");t.textContent="Hello world",e.prepend(t)})},"prepend");h.storyName="prepend";h.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const b=r(()=>{let e,t;return i(o=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),o.appendChild(e)},()=>{e.appendChild(document.createElement("p")),e.appendChild(document.createElement("div"))},()=>{t=document.createElement("span"),t.textContent="Hello world",e.replaceChildren(t)})},"replaceChildren");b.storyName="replaceChildren";b.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),w(2)(async()=>{await l.click(t),n("Hello world").not.toBeAnnounced()}),await l.click(t),n("Hello world").toBeAnnounced("polite")};const A=r(()=>{let e,t;return i(o=>{e=document.createElement("div"),o.appendChild(e)},()=>{e.setAttribute("aria-live","polite"),e.setAttribute("aria-hidden","true")},()=>{e.textContent="Hello world"},()=>{e.removeAttribute("aria-hidden")},()=>{t=document.createElement("span"),t.setAttribute("aria-hidden","true"),t.textContent="from child",e.appendChild(t)},()=>{t.removeAttribute("aria-hidden")})},"removeAttribute");A.storyName="removeAttribute";A.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),w(4)(async()=>{await l.click(t),n("Hello world").not.toBeAnnounced()}),await l.click(t),n("Hello world").toBeAnnounced("polite")};const C=r(()=>{let e,t;return i(o=>{e=document.createElement("div"),e.setAttribute("aria-live","polite");const E=document.createElement("span");E.textContent="Hello",e.appendChild(E),t=document.createElement("span"),t.textContent="world",e.appendChild(t),o.appendChild(e)},()=>{e.removeChild(t)})},"removeChild");C.storyName="removeChild";C.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello").not.toBeAnnounced(),await l.click(t),n("Hello").not.toBeAnnounced(),await l.click(t),n("Hello").toBeAnnounced("polite")};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    parent.appendChild(element);
  }, () => {
    element.setAttribute('aria-live', 'polite');
  }, () => {
    element.textContent = 'Hello world';
  });
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    const child = document.createElement('span');
    child.textContent = 'Hello world';
    element.insertAdjacentElement('afterbegin', child);
  });
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    element.insertAdjacentHTML('afterbegin', '<span>Hello world</span>');
  });
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    element.insertAdjacentText('afterbegin', 'Hello world');
  });
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
    child.before(sibling);
  });
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    const child = document.createElement('div');
    element.append(child);
    parent.appendChild(element);
  }, () => {
    const sibling = document.createElement('span');
    sibling.textContent = 'Hello world';
    element.append(sibling);
  });
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    const child = document.createElement('div');
    element.append(child);
    parent.appendChild(element);
  }, () => {
    const sibling = document.createElement('span');
    sibling.textContent = 'Hello world';
    element.prepend(sibling);
  });
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let child: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    element.appendChild(document.createElement('p'));
    element.appendChild(document.createElement('div'));
  }, () => {
    child = document.createElement('span');
    child.textContent = 'Hello world';
    element.replaceChildren(child);
  });
}`,...b.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let child: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    parent.appendChild(element);
  }, () => {
    element.setAttribute('aria-live', 'polite');
    element.setAttribute('aria-hidden', 'true');
  }, () => {
    element.textContent = 'Hello world';
  }, () => {
    element.removeAttribute('aria-hidden');
  }, () => {
    child = document.createElement('span');
    child.setAttribute('aria-hidden', 'true');
    child.textContent = 'from child';
    element.appendChild(child);
  }, () => {
    child.removeAttribute('aria-hidden');
  });
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  let sibling: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    const child = document.createElement('span');
    child.textContent = 'Hello';
    element.appendChild(child);
    sibling = document.createElement('span');
    sibling.textContent = 'world';
    element.appendChild(sibling);
    parent.appendChild(element);
  }, () => {
    element.removeChild(sibling);
  });
}`,...C.parameters?.docs?.source}}};const k=["setAttribute","insertAdjacentElement","insertAdjacentHTML","insertAdjacentText","before","append","prepend","replaceChildren","removeAttribute","removeChild"];export{k as __namedExportsOrder,u as append,p as before,T as default,d as insertAdjacentElement,m as insertAdjacentHTML,s as insertAdjacentText,h as prepend,A as removeAttribute,C as removeChild,b as replaceChildren,c as setAttribute};
