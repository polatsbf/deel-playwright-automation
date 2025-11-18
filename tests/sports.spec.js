import { test } from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { SportsPage } from "../pages/SportsPage";

test("User can open a sport page after login", async ({ page }) => {

const basePage = new BasePage(page);
const sportPage = new SportPage(page);

// 1) Login with existing base page flow
await basePage.login();

// 2) Navigate to Sport from header
await sportPage.openFromHeader();

await sportPage.acceptCookiesIfPresent();

// 3) Assert Sport header is visible
await sportPage.assertSportHeaderVisible();

});