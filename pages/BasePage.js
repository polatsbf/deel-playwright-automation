export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async login() {
    await this.page.goto("/");

    // await this.page.getByRole("link", { name: "Sign in" }).click();
    // await this.page.getByLabel("Email").fill(process.env.USERNAME);
    // await this.page.getByLabel("Password").fill(process.env.PASSWORD);

    // await this.page.getByRole("button", { name: "Sign in" }).click();
    await this.page.waitForLoadState("networkidle");
  }

  async navigateToPage(pageName) {
    await this.page.getByRole("link", { name: pageName }).click();
  }

}
