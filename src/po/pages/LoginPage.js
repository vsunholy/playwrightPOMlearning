import { BasePage } from "../BasePage";

class LoginPage extends BasePage {

    constructor(page) {
        super(page);

    }
    get emailInput() {

        return this.page.locator('//input[#id="username"]');

    }

    get passwordInput() {

        return this.page.locator('//input[#id="password"]');

    }

    get loginButton() {

        return this.page.locator('//button[name="login"]');

    }
    async goto() {

        await super.goto('/account/login');

    }

    async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForURL(/\/account|\/challenge/, { timeout: 15000 });
  }
}

export default  new LoginPage;