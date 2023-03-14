# README, HELP
rozszerzenie md - markdown

## Commands
- check NodeJS version  
`node -v`

- new project with Playwright  
`npm init playwright@latest`

- record tests for given site  
`npx playwright codegen https://`

- run tests without browser GUI  
`npx playwright test`

- run tests with browser GUI  
`npx playwright test --headed`

- view report  
`npx playwright show-report`

- cancelling Node process  
`hit twice Ctrl + C`

## Playwright snippets
import:  
`import { test, expect } from '@playwright/test';`

test:  
`test('test description', async ({ page }) => {
});`

describe:  
`test.describe('Group description', () => {

 });`

running given test:  
`test.only`

- trace.playwrigth.dev - test klatka po klatce; retain-on-failure

## Visual Studio Code
- Preview: for README.md  
- Autosave: in File -> Auto Save  
- Timeline: file context menu -> Open Timeline  
- Formatting: editor -> context menu -> Format Document  
- Searching: editor -> CTRL + F  
- Accept hint in editor: Enter  
- Comment/Uncomment: Ctrl + /  
- Duplicate line: Alt + Shift  
- Use more than one terminal: + button in TERMINAL
-inline parameters for VSCode `pwdebug=1`



//await page.pause();
// npx playwright codegen https://webdriveruniversity.com/Contact-Us/contactus.html

// npx playwright test
// npx playwright test --headed

// Zakładamy repo na  githubie
// Ściągamy niezbędne rzeczy, zakładamy projekt i instalujemy Cypressa
// Automatyzujemy stronę Contact US  
// Uzupełniamy wszystkie dane, i resetujemy - weryfikujemy czy wyczyściło poprawnie
// Wprowadzamy cześć danych i próbujemy wysłać - sprawdzamy komunikat błędu
// Wprowadzamy błędny email i sprawdzamy komunikat
// Wprowadzamy wszystkie dane i sprawdzamy komunikat
// Automatyzujemy stronę Datepicker - wpisujemy date i sprawdzamy czy została wybrana poprawna
// Automatyzujemy stronę Dropdown Menu(s), Checkboxe(s) & Radio Button(s)
// Wybieramy wszystkie możliwe opcje z dropdownow i sprawdzamy ich wartości czy są poprawne
// Zaznaczamy wszystkie checkboxy a następnie odznaczamy 2 i 4 - sprawdzamy czy  zostały odznaczone i zaznaczone poprawnie
// Klikamy wszystkie Radio buttony po każdym kliknięciu sprawdzamy czy zaznaczył się ten który chcieliśmy
// Automatyzujemy stronę Autocomplete TextField - wpisujemy 3 pierwsze znaki i wybieramy 2 element z listy podpowiadanej np. ('chi')

// Automatyzujemy stronę Ajax-Loader - czekamy aż strona się załaduje(bez statycznych waitow) i klikamy guzik