import { Page } from '@playwright/test';

/** Top nav of the D-INFK site — "Personen"/"People" is a flyout button. */
export class MainNav {
    constructor(private readonly page: Page) {}

    async openPeopleMenu(buttonLabel: string): Promise<void> {
        await this.page.getByRole('button', { name: buttonLabel }).click();
    }

    async goToDepartementsstab(linkLabel: string): Promise<void> {
        await this.page.getByRole('link', { name: linkLabel }).click();
    }
}