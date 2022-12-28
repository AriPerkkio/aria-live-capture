import { addons } from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';

import CaptureAnnouncements from '../src';
import prettyDOMWithShadowDOM from './pretty-dom-with-shadow-dom';
import { AnnouncementEvents, SourceCodeUpdateEvents } from './utils';

type StoryFn = () => HTMLElement;

CaptureAnnouncements({
    onCapture: (text, level) => AnnouncementEvents.emit({ text, level }),
    includeShadowDom: true,
});

addons.getChannel().addListener(STORY_CHANGED, () => {
    // Reset captures after a story changes
    AnnouncementEvents.clear();
});

export const decorators = [
    function withSourceCode(Story: StoryFn) {
        const html = Story();
        const sourceCodeFrame = document.createElement('div');
        const sourceCodeId = 'source-code-frame';
        const storyTargetId = 'story-target-source-code-frame';

        sourceCodeFrame.innerHTML = `
            <div style="display: flex; flex-direction: row; align-content: baseline;">
                <div id="${storyTargetId}" style="flex-basis: 50%;"></div>
                <pre id="${sourceCodeId}" aria-live="off" aria-hidden="true" style="flex-basis: 50%; margin: 0; background-color: #eee; padding: 0.5rem;"></pre>
            </div>
        `.trim();

        function updateSourceCodeFrame() {
            const code = compose(
                escapeHTML,
                formatSourceCode,
                prettyDOMWithShadowDOM
            )(html);

            const frame = sourceCodeFrame.querySelector(`#${sourceCodeId}`);
            if (!frame) throw new Error(`Unable to find ${sourceCodeId}`);
            frame.innerHTML = code;
        }

        SourceCodeUpdateEvents.on(updateSourceCodeFrame);
        updateSourceCodeFrame();

        const storyTarget = sourceCodeFrame.querySelector(`#${storyTargetId}`);
        if (!storyTarget) throw new Error(`Unable to find ${storyTargetId}`);
        storyTarget.appendChild(html);

        return sourceCodeFrame;
    },

    function withFocusTarget(Story: StoryFn) {
        const wrapper = document.createElement('div');
        const focusTarget = document.createElement('a');
        focusTarget.setAttribute('tabindex', '0');
        focusTarget.setAttribute('href', 'javascript:void(0)');
        focusTarget.setAttribute(
            'style',
            'display: inline-block; margin-bottom: 2rem;'
        );
        focusTarget.textContent = 'Focus target';

        wrapper.appendChild(focusTarget);
        wrapper.appendChild(Story());

        setTimeout(() => focusTarget.focus(), 1000);

        return wrapper;
    },

    function withAnnouncements(Story: StoryFn) {
        const html = Story();
        const announcementsFrame = document.createElement('div');
        const announcementsId = 'announcements-frame';
        const storyTargetId = 'story-target-announcement-frame';

        announcementsFrame.innerHTML = `
            <div style="display: flex; flex-direction: column; align-content: baseline;">
                <div id="${storyTargetId}" style="flex-basis: 50%;"></div>

                <div aria-live="off" aria-hidden="true" style="flex-basis: 50%; margin-top: 5rem; background-color: #eee; padding: 0 1rem">
                    <h2>Captured announcements</h2>
                    <ul id="${announcementsId}" style="padding-left: 0 1rem;"></ul>
                </div>
            </div>
        `.trim();

        AnnouncementEvents.on(({ text, level }) => {
            const li = document.createElement('li');
            li.textContent = `${level}: ${text}`;

            const list = announcementsFrame.querySelector(
                `#${announcementsId}`
            );
            if (!list) throw new Error(`Unable to find ${announcementsId}`);
            list.appendChild(li);
        });

        const storyTarget = announcementsFrame.querySelector(
            `#${storyTargetId}`
        );
        if (!storyTarget) throw new Error(`Unable to find ${storyTargetId}`);
        storyTarget.appendChild(html);

        return announcementsFrame;
    },
];

function escapeHTML(str: string) {
    return str.replace(
        /[&<>'"]/g,
        tag =>
            // @ts-expect-error -- umm...
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;',
            }[tag])
    );
}

function formatSourceCode(str: string) {
    return (
        str
            // Remove double line breaks
            .replace(/\n +\n/g, '\n')

            // Remove parent div
            .replace(/(^<div>\n|\n<\/div>$)/g, '')

            // Remove one level of indention
            .replace(/^ {2}/g, '')
            .replace(/\n {2}/g, '\n')

            // Add newline between each root level element
            .replace(/(>\n)(<\w)/g, '$1\n$2')

            // Replace self-ending tags with starting and ending tags
            .replace(/( *)<(\w+)((\s|\w|=|"|-)*)\s*\/>/g, '$1<$2 $3>\n$1</$2>')

            // Align attributes to same level as tag when there is only a single attribute
            .replace(/<(\w+) *\n +((\w|=|"|-)+)\n *>/g, '<$1 $2>')

            // Remove spaces before end tag
            .replace(/ +>/g, '>')
    );
}

const compose = (...fns: any[]) =>
    fns.reduceRight(
        (prevFn, nextFn) =>
            (...args: any[]) =>
                nextFn(prevFn(...args)),
        (value: any) => value
    );

    );
