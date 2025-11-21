// tests/practice.spec.js
import { BasePage } from "../pages/BasePage.js";
import { test, expect } from "../test-fixtures.js";

test("has title", async ({ practicePage }) => {
  await practicePage.page.goto("https://playwright.dev/");

  await expect(practicePage.page).toHaveTitle(/Playwright/);
});
