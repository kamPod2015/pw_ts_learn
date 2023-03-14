import { expect, Locator, Page } from '@playwright/test';

export class ContactUsPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly firstNameTextField: Locator;
  readonly lastNameTextField: Locator;
  readonly emailAddressTextField: Locator;
  readonly commentsTextField: Locator;
  readonly resetButton: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('h2');
    this.firstNameTextField = page.locator("[name='first_name']");
    this.lastNameTextField = page.locator("[name='last_name']");
    this.emailAddressTextField = page.locator("[name='email']");
    this.commentsTextField = page.locator("[name='message']");
    this.resetButton = page.locator("[type='reset']");
    this.submitButton = page.locator("[type='submit']");
  }

  async goto() {
    await this.page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');
    await expect(this.page).toHaveURL(/.*contactus.html/);
  }

  async fillFirstName(firstName: string) {
    await this.firstNameTextField.fill(firstName);
    await expect(this.firstNameTextField).toHaveValue(firstName);
  }

  async fillLastName(lastName: string) {
    await this.lastNameTextField.fill(lastName);
    await expect(this.lastNameTextField).toHaveValue(lastName);
  }

  async fillEmailAddress(email: string) {
    await this.emailAddressTextField.fill(email);
    await expect(this.emailAddressTextField).toHaveValue(email);
  }

  async fillComment(comment: string) {
    await this.commentsTextField.fill(comment);
    await expect(this.commentsTextField).toHaveValue(comment);
  }  

  async sendForm() {
    await this.submitButton.click();
  }

  async resetForm() {
    await this.resetButton.click();
    expect (this.firstNameTextField).toBeEmpty();
    expect (this.lastNameTextField).toBeEmpty();
    expect (this.emailAddressTextField).toBeEmpty();
    expect (this.commentsTextField).toBeEmpty();
    await expect(this.page).toHaveURL(/.*contactus.html/);
  }
}