import { test, expect } from '@playwright/test';
import { AutocompletePage } from '../../page_objects/AutocompletePage';

test.describe('Priority1', () => {
  test('AutocompleteTextFieldTest', async ({ page }) => {
    const foodPage = new AutocompletePage(page);
    const foodName = "mil";
    const fullFoodName = "Milkshake";

    await foodPage.goto();
    await expect(page).toHaveTitle(new RegExp("WebDriver | Contact Us"));
    
    await foodPage.partiallySearchForFood(foodName);
    await foodPage.selecFoodFromSuggestionList(fullFoodName);
    //await expect(page.locator("#myInput")).toHaveValue(expectedProduct); ?????
  });
});