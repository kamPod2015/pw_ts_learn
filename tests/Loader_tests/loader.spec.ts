import { test, expect } from '@playwright/test';
import { AjaxLoaderPage } from '../../page_objects/AjaxLoaderPage';

test.describe('Priority1', () => {
  test.only('AjaxLoaderButtondTest', async ({ page }) => {
    const loaderPage = new AjaxLoaderPage(page);

    await loaderPage.goto();
    await expect(page).toHaveTitle(new RegExp("WebDriver | Ajax-Loader"));
    await expect(loaderPage.pageLoader).toBeVisible();
    await loaderPage.clickSubmitButton();
    await expect(loaderPage.modalDialog).toBeVisible();
  });
});