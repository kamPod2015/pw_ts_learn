import { test, expect } from '@playwright/test';
import { DatepickerPage } from '../../page_objects/DropCheckRadioPage';

test.describe('Priority1', () => {
  test('DropdownMenuValues', async ({ page }) => {
    const multiPage = new DatepickerPage(page);
    const expectedLanguages: string[] = [ "JAVA", "C#", "Python", "SQL" ];
    const programmingTools: string[] = [ "Eclipse", "Maven", "TestNG", "JUnit" ];
    const programmingExtras: string[] = [ "HTML", "CSS", "JavaScript", "JQuery" ];

    await multiPage.goto();
    await expect(page).toHaveTitle(new RegExp("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)"));
    
    await multiPage.setLanguage(expectedLanguages[1]);
    await multiPage.setLanguage(expectedLanguages[2]);
    await multiPage.setLanguage(expectedLanguages[3]);
    await multiPage.setLanguage(expectedLanguages[0]);

    for (let i = 0; i < programmingTools.length; i++)
    {
      await multiPage.setProgrammingTool(programmingTools[i]);
        //await page.locator("#dropdowm-menu-2").selectOption((programmingTools[i]).toLowerCase());   
    }

    for (let i = 0; i < programmingExtras.length; i++)
    {
      await multiPage.setProgrammingExtras(programmingExtras[i]);
       // await page.locator("#dropdowm-menu-3").selectOption((programmingExtras[i]).toLowerCase());
       // await expect(page.locator("#dropdowm-menu-3")).toContainText(programmingExtras[i]);            
    }
  });
});

test.describe('Priority2', () => {
  test('CheckboxesMenuValues', async ({ page }) => {
    const multiPage = new DatepickerPage(page);
    const website = "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html";

    await multiPage.goto();
    await expect(page).toHaveTitle(new RegExp("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)"));
    
    await multiPage.setCheckbox("Option 1");
    await page.getByText("Option 1").isChecked();
    await multiPage.setCheckbox("Option 2");
    await page.getByText("Option 2").isChecked();
    await multiPage.setCheckbox("Option 3");
    await page.getByText("Option 3").isChecked();
    await multiPage.setCheckbox("Option 4");
    await page.getByText("Option 4").isChecked();
    await multiPage.unsetCheckbox("Option 4");
    await page.getByText("Option 2").uncheck();
    await multiPage.unsetCheckbox("Option 2");
    await page.getByText("Option 2").uncheck();
  });
});

test.describe('Priority3', () => {
  test('RadioButtonsMenuValues', async ({ page }) => {
    const multiPage: DatepickerPage = new DatepickerPage(page);
    var website = "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html";
    const expectedColors: string[] = [ "Green", "Blue", "Yellow", "Orange", "Purple" ];

    await multiPage.goto();
    await expect(page).toHaveTitle(new RegExp("WebDriver | Dropdown Menu(s) | Checkboxe(s) | Radio Button(s)"));
    for (let i = 0; i < expectedColors.length; i++)
    {
      await multiPage.setRadioButton(expectedColors[i]);
      //expect(await page.getByLabel(expectedColors[i]).isChecked()).toBeTruthy()      
      //await this.colorsRadioButton.locator(`input[value=${expectedOption.toLowerCase()}]`).check();     
    }
  });
});