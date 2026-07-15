import { Page } from '@playwright/test';

/** Top nav of the D-INFK site — "Personen" is a flyout button. */
export class MainNav {
    constructor(private readonly page: Page) {}

    /** Opens the People flyout menu. */
    async openPeopleMenu(buttonLabel: string): Promise<void> {
        await this.page.getByRole('button', { name: buttonLabel }).click();
    }

    /** Clicks the Departementsstab link inside the already-open flyout. */
    async goToDepartementsstab(linkLabel: string): Promise<void> {
        await this.page.getByRole('link', { name: linkLabel }).click();
    }
}