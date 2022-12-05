import { test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.browserstack.com/');
});

test.describe('Demo Test', () => {

    test('Verify Login Error Message', async ({ page }) => {
        const email = `example${Math.floor(100 + Math.random() * 9000)}@example.com`;
        await page.waitForSelector('text=Sign in',{state:'visible'});
        await page.locator('text=Sign in').first().click();
        await page.waitForSelector('#user_email_login')
        await page.locator('#user_email_login').type(email);
        await page.locator('#user_password').type('examplepassword');
        await page.locator('#user_submit').click();
        const errorMessage = await (page.locator("//input[@id='user_password']/../div[@class='error-msg']").textContent());
        console.log("[Browserstack] Login Error Message: " + errorMessage?.trim());
        expect(errorMessage).toContain('Invalid password');
    });
});
