

import { expect } from '@playwright/test';

class BasePage {

    constructor(page) {
        this.page = page;
    }


    async goto(path = '') {

        await this.page.goto(`https://klaviaturos.shop${path}`, { waitUntil: 'networkidle' });
    }


    async waitForLoad() {

        await this.page.waitForLoadState('networkidle');
    }

    async expectVisible(locator) {

        await expect(locator).toBeVisible({ timeout: 10000 });
    }


}


export default new BasePage;