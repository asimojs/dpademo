import { test, expect } from '@playwright/test';
import { testResultsPanel } from './common';

test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:3000/homer_simpson.html');
});

test.describe('Search Page', () => {

    test('has title', async ({ page }) => {
        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Dynamic Page Application/);
    });

    test('navigates to the results page', async ({ page }) => {
        await testResultsPanel(page);
    });
});





