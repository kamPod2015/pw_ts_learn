import { test, expect } from '@playwright/test';
import { DatepickerPage } from '../../page_objects/DatepickerPage';

test.describe('Priority2', () => {
  test('SalectDateDatepickerTest', async ({ page }) => {    
    const datepickerPage = new DatepickerPage(page);
    const expectedDay = "2";
    const expectedMonth = "Aug";
    const expectedYear = "2020";
    const expectedDate = "08-02-2020";

    await datepickerPage.goto();
    await expect(page).toHaveTitle(new RegExp("WebDriver | Datepicker"));
    await datepickerPage.setDate(expectedDay, expectedMonth, expectedYear, expectedDate);
  });
});