import { test as setup } from '@playwright/test';
import { locales } from '../../config/locales';
import { STORAGE_STATE_PATH } from './storageState';

/** Rejects the cookie banner once and persists the resulting state. */
setup('accept cookie consent', async ({ page, context }) => {
    await page.goto(locales.de.entryUrl, { waitUntil: 'domcontentloaded' });
    await page.getByRole('button', { name: locales.de.cookieRejectButtonLabel }).click();
    await context.storageState({ path: STORAGE_STATE_PATH });
});