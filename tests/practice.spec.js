// tests/practice.spec.js
import { BasePage } from "../pages/BasePage.js";
import { test, expect } from "../test-fixtures.js";

test("add element", async ({ practicePage }) => {
  await practicePage.login();
  await practicePage.navigateToPage("Add/Remove Elements");
  await practicePage.clickAddElement(3);

  await expect(practicePage.deleteButtons).toHaveCount(2);
});
