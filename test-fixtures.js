// test-fixtures.js
import { test as base } from "@playwright/test";
import { PracticePage } from "./pages/PracticePage.js";

export const test = base.extend({
  practicePage: async ({ page }, use) => {
    await use(new PracticePage(page));
  },
});

export const expect = base.expect;
