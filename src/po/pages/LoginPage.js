import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  constructor(page) {
    super(page);
  }

  get email() {
    return this.page.locator("#username");
  }
  get password() {
    return this.page.locator("#password");
  }
  get loginBtn() {
    return this.page.locator('button[name="login"]');
  }

  get errorMessage() {
    return this.page
      .getByRole("alert")
      .or(this.page.locator(".error, .alert-danger"));
  }

  async open() {
    await this.goto('/mano-paskyra/');
    await this.email.waitFor()
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
    
  }
}
