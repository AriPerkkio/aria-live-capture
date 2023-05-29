import { htmlToElement, update } from 'virtual-dom-nodes';

export function createMountToggle(
    unmountedState: string,
    mountedState: string
) {
    const button = document.createElement('button');
    button.textContent = 'Mount';

    const wrapper = document.createElement('div');
    wrapper.appendChild(button);
    wrapper.appendChild(htmlToElement(unmountedState));

    let toggled = false;
    button.addEventListener('click', () => {
        const lastChild = wrapper.lastChild;
        if (!lastChild) throw new Error('wrapper missing lastChild');

        update(lastChild, toggled ? unmountedState : mountedState);

        toggled = !toggled;
        SourceCodeUpdateEvents.emit(undefined);
    });

    return wrapper;
}

export function createButtonCycle(
    ...onClicks: ((wrapper: HTMLElement) => void)[]
) {
    const button = document.createElement('button');
    button.textContent = 'Next state';

    const wrapper = document.createElement('div');
    wrapper.appendChild(button);

    function cleanWrapper() {
        for (const child of wrapper.childNodes) {
            if (child !== button) {
                wrapper.removeChild(child);
            }
        }
    }

    const maxIndex = onClicks.length;
    let index = 0;

    button.addEventListener('click', () => {
        if (index === maxIndex) {
            cleanWrapper();
            index = 0;
        } else {
            onClicks[index](wrapper);
            index++;
        }

        SourceCodeUpdateEvents.emit(undefined);
    });

    return wrapper;
}

type Subscriber<T> = (event: T) => void;
class EventBus<EventType = undefined> {
    subscribers: Subscriber<EventType>[] = [];
    events: EventType[] = [];

    on(subscriber: Subscriber<EventType>) {
        this.subscribers.push(subscriber);
        this.events.forEach(subscriber);
    }

    off(subscriber: Subscriber<EventType>) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }

    emit(event: EventType) {
        this.subscribers.forEach(subscriber => subscriber(event));
        this.events.push(event);
    }

    clear() {
        this.events = [];
    }
}

export const SourceCodeUpdateEvents = new EventBus();

export const AnnouncementEvents = new EventBus<{
    text: string;
    level: string;
}>();

export function times(count: number) {
    return function execute(method: () => unknown): void {
        Array(count).fill(null).forEach(method);
    };
}
