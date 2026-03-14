import{r as e,t}from"./iframe-iMBPCvXT.js";var{within:n,userEvent:r}=__STORYBOOK_MODULE_TEST__,{expect:i}=__STORYBOOK_MODULE_TEST__,a={title:`DOM API Support/Element`},o=()=>{let e;return t(t=>{e=document.createElement(`div`),t.appendChild(e)},()=>{e.setAttribute(`aria-live`,`polite`)},()=>{e.textContent=`Hello world`})};o.storyName=`setAttribute`,o.play=async({canvasElement:t})=>{let a=n(t).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await e(2)(async()=>{await r.click(a),i(`Hello world`).not.toBeAnnounced()}),await r.click(a),i(`Hello world`).toBeAnnounced(`polite`)};var s=()=>{let e;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{let t=document.createElement(`span`);t.textContent=`Hello world`,e.insertAdjacentElement(`afterbegin`,t)})};s.storyName=`insertAdjacentElement`,s.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).toBeAnnounced(`polite`)};var c=()=>{let e;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.insertAdjacentHTML(`afterbegin`,`<span>Hello world</span>`)})};c.storyName=`insertAdjacentHTML`,c.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).toBeAnnounced(`polite`)};var l=()=>{let e;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.insertAdjacentText(`afterbegin`,`Hello world`)})};l.storyName=`insertAdjacentText`,l.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).toBeAnnounced(`polite`)};var u=()=>{let e,n;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),n=document.createElement(`div`),e.appendChild(n),t.appendChild(e)},()=>{let e=document.createElement(`span`);e.textContent=`Hello world`,n.before(e)})};u.storyName=`before`,u.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).toBeAnnounced(`polite`)};var d=()=>{let e;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`);let n=document.createElement(`div`);e.append(n),t.appendChild(e)},()=>{let t=document.createElement(`span`);t.textContent=`Hello world`,e.append(t)})};d.storyName=`append`,d.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).toBeAnnounced(`polite`)};var f=()=>{let e;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`);let n=document.createElement(`div`);e.append(n),t.appendChild(e)},()=>{let t=document.createElement(`span`);t.textContent=`Hello world`,e.prepend(t)})};f.storyName=`prepend`,f.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).not.toBeAnnounced(),await r.click(t),i(`Hello world`).toBeAnnounced(`polite`)};var p=()=>{let e,n;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`),t.appendChild(e)},()=>{e.appendChild(document.createElement(`p`)),e.appendChild(document.createElement(`div`))},()=>{n=document.createElement(`span`),n.textContent=`Hello world`,e.replaceChildren(n)})};p.storyName=`replaceChildren`,p.play=async({canvasElement:t})=>{let a=n(t).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),e(2)(async()=>{await r.click(a),i(`Hello world`).not.toBeAnnounced()}),await r.click(a),i(`Hello world`).toBeAnnounced(`polite`)};var m=()=>{let e,n;return t(t=>{e=document.createElement(`div`),t.appendChild(e)},()=>{e.setAttribute(`aria-live`,`polite`),e.setAttribute(`aria-hidden`,`true`)},()=>{e.textContent=`Hello world`},()=>{e.removeAttribute(`aria-hidden`)},()=>{n=document.createElement(`span`),n.setAttribute(`aria-hidden`,`true`),n.textContent=`from child`,e.appendChild(n)},()=>{n.removeAttribute(`aria-hidden`)})};m.storyName=`removeAttribute`,m.play=async({canvasElement:t})=>{let a=n(t).getByRole(`button`);i(`Hello world`).not.toBeAnnounced(),e(4)(async()=>{await r.click(a),i(`Hello world`).not.toBeAnnounced()}),await r.click(a),i(`Hello world`).toBeAnnounced(`polite`)};var h=()=>{let e,n;return t(t=>{e=document.createElement(`div`),e.setAttribute(`aria-live`,`polite`);let r=document.createElement(`span`);r.textContent=`Hello`,e.appendChild(r),n=document.createElement(`span`),n.textContent=`world`,e.appendChild(n),t.appendChild(e)},()=>{e.removeChild(n)})};h.storyName=`removeChild`,h.play=async({canvasElement:e})=>{let t=n(e).getByRole(`button`);i(`Hello`).not.toBeAnnounced(),await r.click(t),i(`Hello`).not.toBeAnnounced(),await r.click(t),i(`Hello`).toBeAnnounced(`polite`)},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    parent.appendChild(element);
  }, () => {
    element.setAttribute('aria-live', 'polite');
  }, () => {
    element.textContent = 'Hello world';
  });
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
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
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    element.insertAdjacentHTML('afterbegin', '<span>Hello world</span>');
  });
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    element.insertAdjacentText('afterbegin', 'Hello world');
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
    const sibling = document.createElement('span');
    sibling.textContent = 'Hello world';
    child.before(sibling);
  });
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`() => {
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
}`,...h.parameters?.docs?.source}}};var g=[`setAttribute`,`insertAdjacentElement`,`insertAdjacentHTML`,`insertAdjacentText`,`before`,`append`,`prepend`,`replaceChildren`,`removeAttribute`,`removeChild`];export{g as __namedExportsOrder,d as append,u as before,a as default,s as insertAdjacentElement,c as insertAdjacentHTML,l as insertAdjacentText,f as prepend,m as removeAttribute,h as removeChild,p as replaceChildren,o as setAttribute};