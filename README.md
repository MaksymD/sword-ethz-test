# ETH — Kontakt-Details E2E Test

Automated E2E test for the "Kontakt-Details" test case (see the assignment PDF), built with Playwright and TypeScript.  
Verifies navigation from the ETH homepage through the D-INFK department site to a staff member's contact details, in both German and English, across multiple browsers.  

**Stack:** TypeScript · Node.js · Playwright · ESLint · Allure Report · GitHub Actions

## Prerequisites

- Node.js 20+.

## Setup

```bash
npm install
npx playwright install
```

## Running tests

```bash
npm test                                    # all configured browser/locale projects
npx playwright test --project=chromium-de   # German locale, Chromium only
npx playwright test --project=chromium-en   # English locale, Chromium only
```

Six browser/locale projects are configured (`chromium-de`, `chromium-en`, `firefox-de`, `firefox-en`, `webkit-de`, `webkit-en`) and all pass individually.  
CI intentionally runs `chromium-de`/`chromium-en`  

## Reporting

```bash
npm run report:playwright:open
npm run report:allure:generate
npm run report:allure:open
```

Playwright's HTML report (`playwright-report/`) is generated automatically after every run;  
Allure results (`allure-results/`) are generated automatically too, but the report itself needs an explicit `generate` step.

## Project structure

```
components/      Reusable UI building blocks (Component Object Model)
pages/           One class per page (Page Object Model)
config/          Locale-dependent data: entry URLs, UI text, breadcrumb paths
testdata/        Locale-independent facts: the person's name, email, phone, expected staff count
fixtures/        Custom `test` with a `siteLocale` option
tests/
  setup/         One-time cookie consent handling, run before the main test project
  *.spec.ts      The test itself
```

## Architecture

**Page Object Model + Component Object Model (hybrid).**  
Each page of the flow has its own Page Object (`EthzHomePage`, `DepartmentHomePage`, `DepartementsstabPage`, `PersonDetailPage`).  
Elements that repeat across pages — the breadcrumb, a staff card, the cookie banner — are extracted into `components/` and composed into the relevant Page Objects.  
UI text and entry URLs vary by locale and live in `config/locales.ts`.