import { expect, Locator, Page } from '@playwright/test';

export class DatepickerPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly expectedLanguagesDropdown: Locator;
    readonly programmingToolsDropDown: Locator;
    readonly programmingExtrasDropDown: Locator;
    readonly checkboxOptions: Locator;
    readonly colorsRadioButton: Locator;
  
    constructor(page: Page) {
      this.page = page;
      this.pageTitle = page.locator('h1');
      this.expectedLanguagesDropdown = page.locator('#dropdowm-menu-1');
      this.programmingToolsDropDown = page.locator('#dropdowm-menu-2');
      this.programmingExtrasDropDown = page.locator('#dropdowm-menu-3');
      this.checkboxOptions = page.locator('#checkboxes');
      this.colorsRadioButton = page.locator('#radio-buttons');
    }
  
    async goto() {
      await this.page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
      //await expect(this.page).toHaveURL(/.*Dropdown-Checkboxes-RadioButtons\/index.html);
    }

    async setLanguage(expectedLanguages: string) {
        await this.expectedLanguagesDropdown.selectOption(expectedLanguages.toLowerCase());
        await expect(this.expectedLanguagesDropdown).toHaveValue(expectedLanguages.toLowerCase());
    }

    async setProgrammingTool(expectedTool: string) {
      await this.programmingToolsDropDown.selectOption(expectedTool.toLowerCase());
      await expect(this.programmingToolsDropDown).toHaveValue(expectedTool.toLowerCase());
    }

    async setProgrammingExtras(programmingExtras: string) {
      await this.programmingExtrasDropDown.selectOption(programmingExtras.toLowerCase());
      await expect(this.programmingExtrasDropDown).toHaveValue(programmingExtras.toLowerCase());
    }

    async setCheckbox(expectedOption: string) {
      await this.checkboxOptions.getByLabel(expectedOption).check();
      await expect(this.checkboxOptions.getByLabel(expectedOption)).toBeChecked();
    }

    async unsetCheckbox(expectedOption: string) {
      await this.checkboxOptions.getByLabel(expectedOption).uncheck();
      await expect(this.checkboxOptions.getByLabel(expectedOption)).not.toBeChecked();
    }

    async setRadioButton(expectedOption: string) {
      await this.colorsRadioButton.locator(`input[value=${expectedOption.toLowerCase()}]`).check();
    }
  }