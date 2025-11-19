import { expect } from "@playwright/test";

export class BasePage {
  constructor(page) {
    this.page = page;
    this.baseUrl = process.env.BASE_URL || "https://klaviaturos.shop";
  }

  async goto(path = "") {
    await this.page.goto(`${this.baseUrl}${path}`, {
      waitUntil: "networkidle",
    });
  }

}
