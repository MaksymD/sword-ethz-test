import { test as base } from '@playwright/test';
import { locales, Locale } from '../config/locales';

export type TestOptions = {
    siteLocale: Locale;
};

/** Test extended with `siteLocale`; `page` auto-navigates to the matching entry URL. */
export const test = base.extend<TestOptions>({
    siteLocale: ['de', { option: true }],
    page: async ({ page, siteLocale }, use) => {
        await page.addLocatorHandler(
            page.getByRole('button', { name: locales[siteLocale].cookieRejectButtonLabel }),
            async (locator) => {
                await locator.click();
            },
        );
        await page.goto(locales[siteLocale].entryUrl, { waitUntil: 'domcontentloaded' });
        await use(page);
    },
});

export { expect } from '@playwright/test';