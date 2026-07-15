import { Locator, Page } from '@playwright/test';

/** Staff card on the Departementsstab. */
export class PersonCard {

    /** Locates all staff cards on the page (used for counting). */
    static locateAll(page: Page): Locator {
        return page.locator('.textimage__wrapper').filter({ has: page.locator('b') });
    }

    /** Locates the card belonging to the given full name. */
    static locate(page: Page, fullName: string): PersonCard {
        const root = PersonCard.locateAll(page).filter({
            has: page.locator('b', { hasText: fullName }),
        });
        return new PersonCard(root);
    }

    private constructor(private readonly root: Locator) {}

    /** Clicks the "Mehr Details" link within this card. */
    async clickMehrDetails(label: string): Promise<void> {
        await this.root.getByRole('link', { name: label }).click();
    }
}