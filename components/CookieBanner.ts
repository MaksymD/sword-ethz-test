import {Page} from '@playwright/test';

/** OneTrust consent overlay — renders asynchronously after page load. */
export class CookieBanner {
    constructor(private readonly page: Page) {
    }

    /** Waits briefly for the banner; clicks reject if it appears. */
    async dismissIfPresent(label: string, timeoutMs = 5000): Promise<void> {
        const rejectButton = this.page.getByRole('button', {name: label});
        const appeared = await rejectButton
            .waitFor({state: 'visible', timeout: timeoutMs})
            .then(() => true)
            .catch(() => false);
        if (appeared) {
            await rejectButton.click();
        }
    }
}