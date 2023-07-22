import { Browser, chromium } from 'playwright';
import { afterAll, beforeAll, test } from 'vitest';

let browser: Browser;
beforeAll(async () => {
    browser = await chromium.launch({ headless: true });
});
afterAll(async () => {
    browser?.close();
});

// Check that production build of Storybook docs opens fine.
// Mostly to check that upgrades of Storybook don't break anything.
test('docs seem ok', async () => {
    const page = await browser.newPage();
    page.on('console', msg => console.log(msg.text()));

    await page.goto('http://localhost:8080');

    // Readme should be visible
    await page.getByRole('heading', { level: 1, name: 'aria-live-capture' });
    await page.getByRole('heading', { level: 2, name: 'Installation' });
    await page.getByRole('heading', { level: 2, name: 'Usage' });
    await page.getByRole('heading', { level: 3, name: 'onCapture' });
    await page.getByRole('heading', { level: 3, name: 'includeShadowDom' });
    await page.getByRole('heading', { level: 3, name: 'cleanup' });

    // Check one page
    await page.getByRole('button', { name: 'aria-live="polite"' }).click();
    await page.getByRole('heading', {
        level: 2,
        name: 'Captured announcements',
    });
    await page.getByText('polite: Hello world');
});
