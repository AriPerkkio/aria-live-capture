var k=Object.defineProperty;var r=(e,t)=>k(e,"name",{value:t,configurable:!0});import{w as p,e as n,u as o}from"./index-b851fdf4.js";import{a as s,t as T}from"./utils-21f1601d.js";import"./index-722d4584.js";import"./index-ce7257af.js";import"./uniq-6402743e.js";import"./index-b4278562.js";import"./index-c8c96787.js";const I={title:"DOM API Support/Node"},d=r(()=>{let e;return s(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{const t=document.createElement("div");t.textContent="Hello world",e.appendChild(t)})},"appendChild");d.storyName="appendChild";d.play=({canvasElement:e})=>{const t=p(e).getByRole("button");n("Hello world").not.toBeAnnounced(),o.click(t),n("Hello world").not.toBeAnnounced(),o.click(t),n("Hello world").toBeAnnounced("polite")};const c=r(()=>{let e,t;return s(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t=document.createElement("div"),e.appendChild(t),l.appendChild(e)},()=>{const l=document.createElement("span");l.textContent="Hello world",e.insertBefore(l,t)})},"insertBefore");c.storyName="insertBefore";c.play=({canvasElement:e})=>{const t=p(e).getByRole("button");n("Hello world").not.toBeAnnounced(),o.click(t),n("Hello world").not.toBeAnnounced(),o.click(t),n("Hello world").toBeAnnounced("polite")};const a=r(()=>{let e,t;return s(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t=document.createElement("div"),e.appendChild(t),l.appendChild(e)},()=>{const l=document.createElement("span");l.textContent="Hello world",e.replaceChild(l,t)})},"replaceChild");a.storyName="replaceChild";a.play=({canvasElement:e})=>{const t=p(e).getByRole("button");n("Hello world").not.toBeAnnounced(),o.click(t),n("Hello world").not.toBeAnnounced(),o.click(t),n("Hello world").toBeAnnounced("polite")};const i=r(()=>{let e,t;return s(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),l.appendChild(e)},()=>{e.textContent="Hello world",t=document.createElement("span"),e.appendChild(t)},()=>{t.textContent="from child"})},"textContent");i.storyName="textContent";i.play=({canvasElement:e})=>{const t=p(e).getByRole("button");n("Hello world").not.toBeAnnounced(),T(2)(()=>{o.click(t),n("Hello world").not.toBeAnnounced()}),o.click(t),n("Hello world").toBeAnnounced("polite")};const m=r(()=>{let e,t;return s(l=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t=document.createTextNode(""),e.appendChild(t),l.appendChild(e)},()=>{t.nodeValue="Hello world"})},"nodeValue");m.storyName="nodeValue";m.play=({canvasElement:e})=>{const t=p(e).getByRole("button");n("Hello world").not.toBeAnnounced(),o.click(t),n("Hello world").not.toBeAnnounced(),o.click(t),n("Hello world").toBeAnnounced("polite")};var u,h,C;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
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
}`,...(C=(h=d.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var H,E,w;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
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
}`,...(w=(E=c.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var B,v,A;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(A=(v=a.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var b,x,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var N,g,f;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
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
}`,...(f=(g=m.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const P=["appendChild","insertBefore","replaceChild","textContent","nodeValue"];export{P as __namedExportsOrder,d as appendChild,I as default,c as insertBefore,m as nodeValue,a as replaceChild,i as textContent};
//# sourceMappingURL=NodeApi.stories-bb0d4409.js.map
