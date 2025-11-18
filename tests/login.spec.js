import { test } from "@playwright/test";
import { BasePage } from "../pages/BasePage.js";

test("User can log in successfully", async ({ page }) => {
  const basePage = new BasePage(page);

  await basePage.login();
});
