import { test as setup } from '@playwright/test';
import { locales } from '../../config/locales';
import { CookieBanner } from '../../components/CookieBanner';
import { STORAGE_STATE_PATH } from './storageState';

/** Rejects the cookie banner once it persists on the pages. */
setup('dismiss cookie consent', async ({ page, context }) => {
    const cookieBanner = new CookieBanner(page);
    await page.goto(locales.de.entryUrl, { waitUntil: 'domcontentloaded' });
    await cookieBanner.dismissIfPresent(locales.de.cookieRejectButtonLabel);
    await page.goto(locales.de.departementOptionValue, { waitUntil: 'domcontentloaded' });
    await cookieBanner.dismissIfPresent(locales.de.cookieRejectButtonLabel);
    await context.storageState({ path: STORAGE_STATE_PATH });
});