import { test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.linkedin.com/home');
});

test.describe('Demo Test', () => {
    test('Verify Login Error Message', async ({ page }) => {
        const email = `cesar${Math.floor(100 + Math.random() * 9000)}@js.com`;
        await page.waitForSelector('text=Sign in',{state:'visible'});
        await page.locator('text=Sign in').first().click();
        await page.waitForSelector('#username')
        await page.locator('#username').type(email);
        await page.locator('#password').type('testpassword');
        await page.locator('.btn__primary--large >> text="Sign in"').click();
        const errorMessage = await (page.locator('#i18n_en_US >> text="Page not found"').textContent());
        console.log(errorMessage);
        expect(errorMessage).toContain('Page not found');
    });
});
