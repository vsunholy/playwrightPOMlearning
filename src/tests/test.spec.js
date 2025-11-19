import { test, expect } from "@playwright/test";
import { LoginPage } from "../po/pages/LoginPage";


test.describe("Klaviaturos shop login tests", () => {
 
    const invalidEmail = "haha@gmail.com";
    const invalidPassword = "invalidPass123";

    test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test("Login with valid user", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login("khaha10@gmail.com", "3991vs16da");
    await expect(page).toHaveURL(/\/mano-paskyra/);
  });
  test('Login with invalid user', async ({ page }) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.login(invalidEmail, invalidPassword);
    await expect(loginPage.errorMessage).toBeVisible();
  });
  
});
