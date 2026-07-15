import { Locator, Page } from '@playwright/test';

/** Staff card on the Departementsstab. */
export class PersonCard {
    static locate(page: Page, fullName: string): PersonCard {
        const root = page.locator('.textimage__wrapper').filter({
            has: page.locator('b', { hasText: fullName }),
        });
        return new PersonCard(root);
    }

    private constructor(private readonly root: Locator) {}

    async clickMehrDetails(label: string): Promise<void> {
        await this.root.getByRole('link', { name: label }).click();
    }
}