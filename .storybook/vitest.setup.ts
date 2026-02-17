import '@storybook/addon-vitest/internal/setup-file';
import { setProjectAnnotations } from '@storybook/html';
import * as previewAnnotations from './preview';

const globalProjectAnnotations = setProjectAnnotations([previewAnnotations]);
globalThis.globalProjectAnnotations = globalProjectAnnotations;
