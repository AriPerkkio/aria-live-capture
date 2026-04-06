import{n as e}from"./chunk-BneVvdWh.js";import{i as t,r as n,t as r}from"./iframe-4IlqENPq.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{n(),{within:i,userEvent:a}=__STORYBOOK_MODULE_TEST__,{expect:o}=__STORYBOOK_MODULE_TEST__,s={title:`DOM API Support/Element`},c=()=>{let e;return r(t=>{e=document.createElement(`div`),t.appendChild(e)},()=>{e.setAttribute(`aria-live`,`polite`)},()=>{e.textContent=`Hello world`})},c.storyName=`setAttribute`,c.play=async({canvasElement:e})=>{let n=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await t(2)(async()=>{await a.click(n),o(`Hello world`).not.toBeAnnounced()}),await a.click(n),o(`Hello world`).toBeAnnounced(`polite`)},l=()=>{let e;return r(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{let t=document.createElement(`span`);t.textContent=`Hello world`,e.insertAdjacentElement(`afterbegin`,t)})},l.storyName=`insertAdjacentElement`,l.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).toBeAnnounced(`polite`)},u=()=>{let e;return r(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.insertAdjacentHTML(`afterbegin`,`<span>Hello world</span>`)})},u.storyName=`insertAdjacentHTML`,u.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).toBeAnnounced(`polite`)},d=()=>{let e;return r(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.insertAdjacentText(`afterbegin`,`Hello world`)})},d.storyName=`insertAdjacentText`,d.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).toBeAnnounced(`polite`)},f=()=>{let e,t;return r(n=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t=document.createElement(`div`),e.appendChild(t),n.appendChild(e)},()=>{let e=document.createElement(`span`);e.textContent=`Hello world`,t.before(e)})},f.storyName=`before`,f.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).toBeAnnounced(`polite`)},p=()=>{let e;return r(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`);let n=document.createElement(`div`);e.append(n),t.appendChild(e)},()=>{let t=document.createElement(`span`);t.textContent=`Hello world`,e.append(t)})},p.storyName=`append`,p.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).toBeAnnounced(`polite`)},m=()=>{let e;return r(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`);let n=document.createElement(`div`);e.append(n),t.appendChild(e)},()=>{let t=document.createElement(`span`);t.textContent=`Hello world`,e.prepend(t)})},m.storyName=`prepend`,m.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).not.toBeAnnounced(),await a.click(t),o(`Hello world`).toBeAnnounced(`polite`)},h=()=>{let e,t;return r(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.appendChild(document.createElement(`p`)),e.appendChild(document.createElement(`div`))},()=>{t=document.createElement(`span`),t.textContent=`Hello world`,e.replaceChildren(t)})},h.storyName=`replaceChildren`,h.play=async({canvasElement:e})=>{let n=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),t(2)(async()=>{await a.click(n),o(`Hello world`).not.toBeAnnounced()}),await a.click(n),o(`Hello world`).toBeAnnounced(`polite`)},g=()=>{let e,t;return r(t=>{e=document.createElement(`div`),t.appendChild(e)},()=>{e.setAttribute(`aria-live`,`polite`),e.setAttribute(`aria-hidden`,`true`)},()=>{e.textContent=`Hello world`},()=>{e.removeAttribute(`aria-hidden`)},()=>{t=document.createElement(`span`),t.setAttribute(`aria-hidden`,`true`),t.textContent=`from child`,e.appendChild(t)},()=>{t.removeAttribute(`aria-hidden`)})},g.storyName=`removeAttribute`,g.play=async({canvasElement:e})=>{let n=i(e).getByRole(`button`);o(`Hello world`).not.toBeAnnounced(),t(4)(async()=>{await a.click(n),o(`Hello world`).not.toBeAnnounced()}),await a.click(n),o(`Hello world`).toBeAnnounced(`polite`)},_=()=>{let e,t;return r(n=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`);let r=document.createElement(`span`);r.textContent=`Hello`,e.appendChild(r),t=document.createElement(`span`),t.textContent=`world`,e.appendChild(t),n.appendChild(e)},()=>{e.removeChild(t)})},_.storyName=`removeChild`,_.play=async({canvasElement:e})=>{let t=i(e).getByRole(`button`);o(`Hello`).not.toBeAnnounced(),await a.click(t),o(`Hello`).not.toBeAnnounced(),await a.click(t),o(`Hello`).toBeAnnounced(`polite`)},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    parent.appendChild(element);
  }, () => {
    element.setAttribute('aria-live', 'polite');
  }, () => {
    element.textContent = 'Hello world';
  });
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    element.insertAdjacentHTML('afterbegin', '<span>Hello world</span>');
  });
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    element.insertAdjacentText('afterbegin', 'Hello world');
  });
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
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
}`,..._.parameters?.docs?.source}}},v=[`setAttribute`,`insertAdjacentElement`,`insertAdjacentHTML`,`insertAdjacentText`,`before`,`append`,`prepend`,`replaceChildren`,`removeAttribute`,`removeChild`]}))();export{v as __namedExportsOrder,p as append,f as before,s as default,l as insertAdjacentElement,u as insertAdjacentHTML,d as insertAdjacentText,m as prepend,g as removeAttribute,_ as removeChild,h as replaceChildren,c as setAttribute};