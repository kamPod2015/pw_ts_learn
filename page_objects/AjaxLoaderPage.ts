import { expect, Locator, Page } from '@playwright/test';

export class AjaxLoaderPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly pageLoader: Locator;
  readonly submitButton: Locator;
  readonly modalDialog: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('h1');
    this.pageLoader = page.locator('#loader');
    this.submitButton = page.locator('#button1');
    this.modalDialog = page.locator('#myModalClick');
  }

  async goto() {
    await this.page.goto('https://webdriveruniversity.com/Ajax-Loader/index.html');
    await expect(this.page).toHaveURL(/.*Ajax-Loader\/index.html/);
  }

  async clickSubmitButton() {
    await this.submitButton.click();
  }
}