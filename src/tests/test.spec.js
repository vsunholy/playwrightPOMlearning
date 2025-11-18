import { test, expect } from '@playwright/test';


test.describe('My First Test Suite', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/');

    });

    test('My First Test Case', async ({ page }) => {
       
        const title = await page.title();
        expect(title).toBe('Automation Exercise');
    });
});