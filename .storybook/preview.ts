import { prettyDOM } from '@testing-library/dom';

import { MountToggleEvents } from './utils';

type StoryFn = () => HTMLElement;

export const decorators = [
    function withSourceCode(Story: StoryFn) {
        const html = Story();
        const sourceCodeFrame = document.createElement('div');
        const sourceCodeId = 'source-code-frame';
        const storyTargetId = 'story-target';

        sourceCodeFrame.innerHTML = `
            <div style="display: flex; flex-direction: row; align-content: baseline;">
                <div id="${storyTargetId}" style="flex-basis: 50%;"></div>
                <pre id="${sourceCodeId}" aria-live="off" aria-hidden="true" style="flex-basis: 50%; margin: 0; background-color: #eee; padding: 0.5rem;"></pre>
            </div>
        `.trim();

        function updateSourceCodeFrame() {
            const code = compose(escapeHTML, formatSourceCode, prettyDOM)(html);

            sourceCodeFrame.querySelector(`#${sourceCodeId}`).innerHTML = code;
        }

        MountToggleEvents.on(updateSourceCodeFrame);
        updateSourceCodeFrame();

        sourceCodeFrame.querySelector(`#${storyTargetId}`).appendChild(html);

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
];

function escapeHTML(str) {
    return str.replace(
        /[&<>'"]/g,
        tag =>
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

            // Align attributes to same level as tag when there is only a single attribute
            .replace(/<(\w+)\n +((\w|=|"|-)+)\n +>/g, '<$1 $2>')

            // Remove parent div
            .replace(/(^<div>\n|\n<\/div>$)/g, '')

            // Remove one level of indention
            .replace(/^ {2}/g, '')
            .replace(/\n {2}/g, '\n')

            // Add newline between each root level element
            .replace(/(>\n)(<\w)/g, '$1\n$2')
    );
}

const compose = (...fns) =>
    fns.reduceRight(
        (prevFn, nextFn) => (...args) => nextFn(prevFn(...args)),
        value => value
    );
