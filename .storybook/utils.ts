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
    const wrapper = document.createElement('div');

    const button = document.createElement('button');
    button.textContent = 'Mount';
    wrapper.appendChild(button);

    const container = document.createElement('div');
    wrapper.appendChild(container);
    container.outerHTML = trimWhitespace(unmountedState);

    let toggled = false;
    button.addEventListener('click', () => {
        const lastChild = wrapper.lastChild as HTMLElement;

        if (toggled) {
            lastChild.outerHTML = trimWhitespace(unmountedState);
        } else {
            lastChild.outerHTML = trimWhitespace(mountedState);
        }
        toggled = !toggled;
        MountToggleEvents.emit();
    });

    return wrapper;
}

function trimWhitespace(text: string) {
    return text.replace(/\s+/g, ' ').replace(/\n+/, '\n').trim();
}

type Subscriber = () => void;
class EventBus {
    subscribers: Subscriber[] = [];

    on(subscriber: Subscriber) {
        this.subscribers.push(subscriber);
    }

    off(subscriber: Subscriber) {
        this.subscribers = this.subscribers.filter(s => s !== subscriber);
    }

    emit() {
        this.subscribers.forEach(subscriber => subscriber());
    }
}

export const MountToggleEvents = new EventBus();
