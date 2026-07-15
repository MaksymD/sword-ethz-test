import { Locator, Page, expect } from '@playwright/test';

/** Breadcrumb nav — aria-label stays "Breadcrumb" in both DE and EN. */
export class Breadcrumb {
    private readonly items: Locator;

    constructor(page: Page) {
        this.items = page.getByRole('navigation', { name: 'Breadcrumb' }).locator('li a');
    }
    async expectPath(expected: readonly string[]): Promise<void> {
        await expect(this.items).toHaveText([...expected]);
    }
}