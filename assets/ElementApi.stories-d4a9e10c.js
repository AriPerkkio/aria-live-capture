var X=Object.defineProperty;var r=(e,t)=>X(e,"name",{value:t,configurable:!0});import{w as a,e as n,u as l}from"./index-985c2435.js";import{a as i,t as w}from"./utils-f8fc7d82.js";import"./index-052b959b.js";import"./index-b3c9b8ba.js";import"./uniq-817fe036.js";import"./browser-e6b47446.js";import"./index-ec781a94.js";const re={title:"DOM API Support/Element"},c=r(()=>{let e;return i(t=>{e=document.createElement("div"),t.appendChild(e)},()=>{e.setAttribute("aria-live","polite")},()=>{e.textContent="Hello world"})},"setAttribute");c.storyName="setAttribute";c.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await w(2)(async()=>{await l.click(t),n("Hello world").not.toBeAnnounced()}),await l.click(t),n("Hello world").toBeAnnounced("polite")};const d=r(()=>{let e;return i(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{const t=document.createElement("span");t.textContent="Hello world",e.insertAdjacentElement("afterbegin",t)})},"insertAdjacentElement");d.storyName="insertAdjacentElement";d.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const m=r(()=>{let e;return i(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{e.insertAdjacentHTML("afterbegin","<span>Hello world</span>")})},"insertAdjacentHTML");m.storyName="insertAdjacentHTML";m.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const s=r(()=>{let e;return i(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t.appendChild(e)},()=>{e.insertAdjacentText("afterbegin","Hello world")})},"insertAdjacentText");s.storyName="insertAdjacentText";s.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const p=r(()=>{let e,t;return i(o=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),t=document.createElement("div"),e.appendChild(t),o.appendChild(e)},()=>{const o=document.createElement("span");o.textContent="Hello world",t.before(o)})},"before");p.storyName="before";p.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const u=r(()=>{let e;return i(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite");const o=document.createElement("div");e.append(o),t.appendChild(e)},()=>{const t=document.createElement("span");t.textContent="Hello world",e.append(t)})},"append");u.storyName="append";u.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const h=r(()=>{let e;return i(t=>{e=document.createElement("div"),e.setAttribute("aria-live","polite");const o=document.createElement("div");e.append(o),t.appendChild(e)},()=>{const t=document.createElement("span");t.textContent="Hello world",e.prepend(t)})},"prepend");h.storyName="prepend";h.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").not.toBeAnnounced(),await l.click(t),n("Hello world").toBeAnnounced("polite")};const b=r(()=>{let e,t;return i(o=>{e=document.createElement("div"),e.setAttribute("aria-live","polite"),o.appendChild(e)},()=>{e.appendChild(document.createElement("p")),e.appendChild(document.createElement("div"))},()=>{t=document.createElement("span"),t.textContent="Hello world",e.replaceChildren(t)})},"replaceChildren");b.storyName="replaceChildren";b.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),w(2)(async()=>{await l.click(t),n("Hello world").not.toBeAnnounced()}),await l.click(t),n("Hello world").toBeAnnounced("polite")};const A=r(()=>{let e,t;return i(o=>{e=document.createElement("div"),o.appendChild(e)},()=>{e.setAttribute("aria-live","polite"),e.setAttribute("aria-hidden","true")},()=>{e.textContent="Hello world"},()=>{e.removeAttribute("aria-hidden")},()=>{t=document.createElement("span"),t.setAttribute("aria-hidden","true"),t.textContent="from child",e.appendChild(t)},()=>{t.removeAttribute("aria-hidden")})},"removeAttribute");A.storyName="removeAttribute";A.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello world").not.toBeAnnounced(),w(4)(async()=>{await l.click(t),n("Hello world").not.toBeAnnounced()}),await l.click(t),n("Hello world").toBeAnnounced("polite")};const C=r(()=>{let e,t;return i(o=>{e=document.createElement("div"),e.setAttribute("aria-live","polite");const E=document.createElement("span");E.textContent="Hello",e.appendChild(E),t=document.createElement("span"),t.textContent="world",e.appendChild(t),o.appendChild(e)},()=>{e.removeChild(t)})},"removeChild");C.storyName="removeChild";C.play=async({canvasElement:e})=>{const t=a(e).getByRole("button");n("Hello").not.toBeAnnounced(),await l.click(t),n("Hello").not.toBeAnnounced(),await l.click(t),n("Hello").toBeAnnounced("polite")};var H,v,y;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    parent.appendChild(element);
  }, () => {
    element.setAttribute('aria-live', 'polite');
  }, () => {
    element.textContent = 'Hello world';
  });
}`,...(y=(v=c.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var B,g,x;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var T,k,M;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    element.insertAdjacentHTML('afterbegin', '<span>Hello world</span>');
  });
}`,...(M=(k=m.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var L,f,j;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  let element: HTMLElement;
  return createButtonCycle(parent => {
    element = document.createElement('div');
    element.setAttribute('aria-live', 'polite');
    parent.appendChild(element);
  }, () => {
    element.insertAdjacentText('afterbegin', 'Hello world');
  });
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var S,N,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var _,O,D;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(D=(O=u.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var I,P,q;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
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
}`,...(q=(P=h.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var z,F,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(G=(F=b.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`() => {
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
}`,...(Q=(K=A.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,W;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(W=(V=C.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const ae=["setAttribute","insertAdjacentElement","insertAdjacentHTML","insertAdjacentText","before","append","prepend","replaceChildren","removeAttribute","removeChild"];export{ae as __namedExportsOrder,u as append,p as before,re as default,d as insertAdjacentElement,m as insertAdjacentHTML,s as insertAdjacentText,h as prepend,A as removeAttribute,C as removeChild,b as replaceChildren,c as setAttribute};
//# sourceMappingURL=ElementApi.stories-d4a9e10c.js.map
