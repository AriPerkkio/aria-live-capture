import { createButtonCycle } from '../utils';

export default {
    title: 'Unsupported/ShadowRoot',
};

export function liveRegionInsideShadowDOM() {
    let shadowRoot: ShadowRoot;
    let element: HTMLElement;

    return createButtonCycle(
        parent => {
            const host = document.createElement('div');
            parent.appendChild(host);

            shadowRoot = host.attachShadow({ mode: 'open' });
        },
        () => {
            element = document.createElement('div');
            element.setAttribute('aria-live', 'polite');

            shadowRoot.appendChild(element);
        },
        () => {
            element.textContent = 'Hello world';
        }
    );
}

export function liveRegionWrappingShadowDOM() {
    let shadowRoot: ShadowRoot;

    return createButtonCycle(
        parent => {
            const region = document.createElement('div');
            region.setAttribute('aria-live', 'polite');
            parent.appendChild(region);

            const host = document.createElement('div');
            region.appendChild(host);

            shadowRoot = host.attachShadow({ mode: 'open' });
        },
        () => {
            const element = document.createElement('div');
            element.textContent = 'Hello world';

            shadowRoot.appendChild(element);
        }
    );
}
