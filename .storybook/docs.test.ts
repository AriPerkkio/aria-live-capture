import type { Browser } from "playwright";
import { chromium } from "playwright";
import { afterAll, beforeAll, test } from "vitest";

let browser: Browser;
beforeAll(async () => {
  browser = await chromium.launch({ headless: true, channel: "chrome" });
});
afterAll(async () => {
  await browser?.close();
});

// Check that production build of Storybook docs opens fine.
// Mostly to check that upgrades of Storybook don't break anything.
test("docs seem ok", async () => {
  const page = await browser.newPage();
  page.on("console", (msg) => console.log(msg.text()));

  await page.goto("http://localhost:8080");

  // Readme should be visible
  page.getByRole("heading", { level: 1, name: "aria-live-capture" });
  page.getByRole("heading", { level: 2, name: "Installation" });
  page.getByRole("heading", { level: 2, name: "Usage" });
  page.getByRole("heading", { level: 3, name: "onCapture" });
  page.getByRole("heading", { level: 3, name: "includeShadowDom" });
  page.getByRole("heading", { level: 3, name: "cleanup" });

  // Check one page
  await page.getByRole("button", { name: 'aria-live="polite"' }).click();
  page.getByRole("heading", {
    level: 2,
    name: "Captured announcements",
  });
  page.getByText("polite: Hello world");
});
