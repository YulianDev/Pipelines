import { test, expect } from '@playwright/test';

test.describe('User Data Form', () => {
  
  test('should submit form and display saved data', async ({ page }) => {
    // Go to the page where the form is located
    await page.goto('http://localhost:4200');

    // Fill out the name and email fields
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john.doe@example.com');

    // Click the "Save" button to submit the form
    await page.click('button[type="submit"]');

    // Verify that the saved data is displayed correctly
    const savedName = await page.locator('p:has-text("Name:")');
    const savedEmail = await page.locator('p:has-text("Email:")');

    await expect(savedName).toContainText('John Doe');
    await expect(savedEmail).toContainText('john.doe@example.com');
  });

});