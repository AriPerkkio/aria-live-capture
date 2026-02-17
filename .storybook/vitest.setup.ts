import '@storybook/addon-vitest/internal/setup-file';
import { setProjectAnnotations } from '@storybook/html';
import * as previewAnnotations from './preview';

const globalProjectAnnotations = setProjectAnnotations([previewAnnotations]);

declare global {
    var globalProjectAnnotations: typeof globalProjectAnnotations;
}

globalThis.globalProjectAnnotations = globalProjectAnnotations;
