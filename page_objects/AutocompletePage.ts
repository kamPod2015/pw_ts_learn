import { expect, Locator, Page } from '@playwright/test';

export class AutocompletePage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly foodItemSearch: Locator;
  readonly submitButton: Locator;
  readonly inputAutocompleteList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('h1');
    this.foodItemSearch = page.locator('#myInput');
    this.inputAutocompleteList = page.locator('#myInputautocomplete-list');
    this.submitButton = page.locator('#submit-button');
  }

  async goto() {
    await this.page.goto('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html');
    await expect(this.page).toHaveURL(/.*Autocomplete-TextField\/autocomplete-textfield.html/);
  }

  async partiallySearchForFood(itemPartName: string) {
    await this.foodItemSearch.fill(itemPartName);
    //await expect(this.foodItemSearch).toHaveValue(itemPartName);
    await this.inputAutocompleteList.isVisible();
  }

  async selecFoodFromSuggestionList(fullFoodName: string) {
    await this.inputAutocompleteList.getByText(fullFoodName).click();
    await expect(this.foodItemSearch).toHaveValue(fullFoodName);
  }
}