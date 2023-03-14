import { test, expect } from '@playwright/test';
import { ContactUsPage } from '../../page_objects/ContactUsPage';

test.describe('Priority1', () => {
  test('FillAndClearContactForm', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    const firstName = "Jan";
    const lastName = "Kowalski";
    const email = "jan.kowalski@test.com";
    const comment = "Testowy komentarz Jana Kowalskiego !@#$%^&*()kropka.";

    await contactUsPage.goto();
    await expect(page).toHaveTitle(new RegExp("WebDriver | Contact Us"));
    await contactUsPage.fillFirstName(firstName);
    await contactUsPage.fillLastName(lastName);
    await contactUsPage.fillEmailAddress(email);
    await contactUsPage.fillComment(comment);
    await contactUsPage.resetForm();
  });
});

test.describe('Priority2', () => {
  test('FillPartiallyAndTryToSendContactForm', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    const firstName = "Jan";
    const lastName = "Kowalski";
    const email = "jan.kowalski@test.com";
    const errorMsg = "Error: all fields are required";

    await contactUsPage.goto();
    await expect(page).toHaveTitle(new RegExp("WebDriver | Contact Us"));
    await contactUsPage.fillFirstName(firstName);
    await contactUsPage.fillLastName(lastName);
    await contactUsPage.fillEmailAddress(email);
    await contactUsPage.sendForm();
    await expect(page).toHaveURL(/.*contact_us.php/);
    await expect(page.getByText(errorMsg)).toContainText(errorMsg);
  });
});

test.describe('Priority2', () => {
  test('FillInvalidEmailAndTryToSendContactForm', async ({ page }) => {    
    const contactUsPage = new ContactUsPage(page);
    const firstName = "Jan";
    const lastName = "Kowalski";
    const email = "jan.kowalskitest.com";
    const comment = "Testowy komentarz Jana Kowalskiego !@#$%^&*()kropka.";
    const errorMsg = "Error: Invalid email address";

    await contactUsPage.goto();
    await expect(page).toHaveTitle(new RegExp("WebDriver | Contact Us"));
    await contactUsPage.fillFirstName(firstName);
    await contactUsPage.fillLastName(lastName);
    await contactUsPage.fillEmailAddress(email);
    await contactUsPage.fillComment(comment);
    await contactUsPage.sendForm();
    await expect(page).toHaveURL(/.*contact_us.php/);
    await expect(page.getByText(errorMsg)).toContainText(errorMsg);
  });
});

test.describe('Priority3', () => {
  test('FillProperlyAndSendContactForm', async ({ page }) => {
    const contactUsPage = new ContactUsPage(page);
    const firstName = "Jan";
    const lastName = "Kowalski";
    const email = "jan.kowalski@test.com";
    const comment = "Testowy komentarz Jana Kowalskiego !@#$%^&*()kropka.";
    const successMsg = "Thank You for your Message!";

    await contactUsPage.goto();
    await expect(page).toHaveTitle(new RegExp("WebDriver | Contact Us"));
    await contactUsPage.fillFirstName(firstName);
    await contactUsPage.fillLastName(lastName);
    await contactUsPage.fillEmailAddress(email);
    await contactUsPage.fillComment(comment);
    await contactUsPage.sendForm();
    await expect(page).toHaveURL(/.*contact-form-thank-you.html/);
    await expect(page.locator("h1")).toContainText(successMsg);
  });
});