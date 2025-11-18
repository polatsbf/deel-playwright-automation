export class SportsPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSportsPage() {
    await this.page.goto("https://www.example.com/sports");
  }

  async searchForTeam(teamName) {
    await this.page.getByLabel("Search for a team").fill(teamName);
    await this.page.getByRole("button", { name: "Search" }).click();
  }

  async getTeamDetails() {
    await this.page.getByText("Team details").click();
  }

  async acceptCookiesIfPresent() {
    const btn = this.page.getByRole("button", { name: /accept|agree|ok/i });
    if (await btn.isVisible()) {
      await btn.click();
    }
  }
}