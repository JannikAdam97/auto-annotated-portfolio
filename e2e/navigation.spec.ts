import { test, expect } from '@playwright/test';

// Basic navigation flow covering critical pages
// Ensures image paths resolve to avoid regression in Windows-style paths

test('home page renders and navigates to about with visible image', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Cloudbuds');
    await page.getByRole('link', { name: 'Mehr erfahren' }).click();
    await expect(page).toHaveURL(/about/);
    await expect(page.getByRole('img', { name: 'Picture of Jannik Adam' })).toBeVisible();
});
