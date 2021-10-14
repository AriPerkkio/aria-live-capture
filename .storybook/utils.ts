import { createElement, update } from './virtual-dom';

const STATUS_TO_ICON = {
    PASS: '\u00A0✅',
    FAIL: '\u00A0❌',
    PARTIAL: '\u00A0⚠️',
};

export function addStoryName(
    fn: () => any,
    status: keyof typeof STATUS_TO_ICON
) {
    const camelCaseAsSentence = fn.name.replace(/([A-Z])/g, ' $1');

    // @ts-ignore
    fn.storyName = camelCaseAsSentence + STATUS_TO_ICON[status];

    return fn;
}

export function createMountToggle(
    unmountedState: string,
    mountedState: string
) {
    const button = document.createElement('button');
    button.textContent = 'Mount';

    const wrapper = document.createElement('div');
    wrapper.appendChild(button);
    wrapper.appendChild(createElement(unmountedState));

    let toggled = false;
    button.addEventListener('click', () => {
        const lastChild = wrapper.lastChild;

        update(
            lastChild,
            createElement(toggled ? unmountedState : mountedState)
        );

        toggled = !toggled;
        MountToggleEvents.emit();
    });

    return wrapper;
}

type Subscriber<T> = (event: T) => void;
class EventBus<EventType = undefined> {
    subscribers: Subscriber<EventType>[] = [];

    on(subscriber: Subscriber<EventType>) {
        this.subscribers.push(subscriber);
    }

    off(subscriber: Subscriber<EventType>) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }

    emit(event?: EventType) {
        this.subscribers.forEach(subscriber => subscriber(event));
    }
}

export const MountToggleEvents = new EventBus();

export const AnnouncementEvents = new EventBus<{
    text: string;
    level: string;
}>();
