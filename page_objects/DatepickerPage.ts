import { expect, Locator, Page } from '@playwright/test';

export class DatepickerPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly datePicker: Locator;
  readonly datePickerDays: Locator;
  readonly datePickerMonths: Locator;
  readonly datePickerYears: Locator;
  readonly datePickerSwitch: Locator;
  readonly calendarField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('h1');
    this.datePicker = page.locator('#datepicker');
    this.datePickerDays = page.locator('.datepicker-days');
    this.datePickerMonths = page.locator('.datepicker-months');
    this.datePickerYears = page.locator('.datepicker-years');
    this.datePickerSwitch = page.locator('.datepicker-switch');
    this.calendarField = page.locator('.form-control');
  }

  async goto() {
    await this.page.goto('https://webdriveruniversity.com/Datepicker/index.html');
    await expect(this.page).toHaveURL(/.*Datepicker\/index.html/);
  }

  async setDate(day, month, year, expectedDate) {
    await this.datePicker.click();
    await this.datePickerSwitch.first().dblclick();
    await this.datePickerYears.isVisible();
    await this.datePickerYears.getByText(year).nth(1).click();
    await this.datePickerMonths.isVisible();
    await this.datePickerMonths.getByText(month).click();
    await this.datePickerDays.isVisible();
    await this.datePickerDays.getByText(day, { exact: true }).first().click();
    await expect(this.calendarField).toHaveValue(expectedDate);
  }
}