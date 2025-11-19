# Deel Playwright Automation Framework

A modern **End-to-End UI automation framework** built with **JavaScript**, **Playwright**, and the **Page Object Model (POM)** design pattern.  
This framework is designed to be clean, modular and CI-friendly

---

## 🚀 Features

- **JavaScript + Playwright Test Runner**
- **Page Object Model (POM)** structure for scalable automation
- **Custom Test Fixtures** for clean dependency injection
- **Parallel test execution** (configurable per-local or CI)
- **Environment variables support** via `.env`
- **HTML reports + Trace Viewer** included out of the box
- **Screenshots on failure**
- **GitHub Actions CI pipeline** for automatic execution
- **Cross-browser testing (Chromium, Firefox, WebKit)** — configurable
- **Headless in CI, headed locally**
- **Clean and extendable project structure**

---

## 📁 Project Structure

```
deel-playwright-automation/
├── .github/workflows         # CI pipeline (playwright.yml)
├── .vscode                   # Debug configuration
├── node_modules
├── pages                     # Page Object Model classes
├── playwright-report         # HTML report output
├── test-results              # Traces, screenshots, errors
├── tests                     # Specs
├── .env                      # Local environment variables
├── .gitignore
├── package.json
├── playwright.config.js
├── test-fixtures.js
```

---

## ⚙️ Tech Stack

- **JavaScript (Node.js)**
- **Playwright Test Runner**
- **Page Object Model**
- **GitHub Actions CI**
- **dotenv** for environment management

---

## 🧪 Running Tests

### 🔥 Install dependencies
```bash
npm install
▶ Run all tests

npx playwright test
▶ Run in headed mode

npx playwright test --headed
▶ Run a specific test file

npx playwright test tests/practice.spec.js
npx playwright test --project=chromium
▶ Run a specific browser/project

🧵 Debugging Tests (VS Code)
Open the project in VS Code
Go to Run & Debug tab
Select Playwright Debug
Click Run ▶
Breakpoints will work and a single headed browser will open.

📸 Reports
🟦 HTML Report
npx playwright show-report

🟪 Trace Viewer
Trace files are saved for failures (or on retry).
npx playwright show-trace test-results/<traceFile.zip>

🌍 Environment Variables
Project loads variables from .env.
Sensitive values are NOT included in this README.

Example fields:

ini
Copy code
BASE_URL=...
USERNAME=...
PASSWORD=...
These are automatically loaded in playwright.config.js.

🔄 GitHub Actions (CI/CD)
A fully working CI pipeline is included in:
.github/workflows/playwright.yml
CI Pipeline Summary
Runs on push and pull_request to main/master

Installs dependencies

Installs Playwright browsers

Executes tests in headless mode

Uploads HTML report as an artifact

This allows fully automated test execution on GitHub.

🧱 Page Object Model (POM)
Page classes live under the pages/ directory.

Example:

export class PracticePage extends BasePage {
  constructor(page) {
    super(page);
  }

  async addElement() {
    await this.page.getByRole("link", { name: "Add/Remove Elements" }).click();
    await this.page.getByRole("button", { name: "Add Element" }).click();
  }
}

🔌 Test Fixtures
test-fixtures.js injects POM classes directly into test context:

test("add element", async ({ practicePage }) => {
  await practicePage.addElement();
});
No more manual object creation inside tests — cleaner and scalable.

✔ Purpose
This framework was created as a ready-to-use E2E Playwright automation setup, ideal for:

Technical interviews

Live coding challenges

Real-world UI automation

Scalable test development

👤 Author
Osman Polat
GitHub: https://github.com/polatsbf
