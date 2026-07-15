import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { Breadcrumb } from '../components/Breadcrumb';

/** Person detail page — contact info. */
export class PersonDetailPage extends BasePage {
    readonly breadcrumb: Breadcrumb;
    private readonly container: Locator;

    constructor(page: Page) {
        super(page);
        this.breadcrumb = new Breadcrumb(page);
        this.container = page.locator('#personDetailApp');
    }

    /** Asserts the visible email matches the expected value. */
    async expectEmail(prefix: string, email: string): Promise<void> {
        await expect(this.container).toContainText(this.flexibleWhitespace(`${prefix} ${email}`));
    }

    /** Asserts the visible phone number matches the expected value. */
    async expectPhone(prefix: string, phone: string): Promise<void> {
        await expect(this.container).toContainText(this.flexibleWhitespace(`${prefix} ${phone}`));
    }

    /** Builds a regex that matches regardless of regular space vs &nbsp; in the source markup. */
    private flexibleWhitespace(text: string): RegExp {
        const escaped = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        return new RegExp(escaped.replace(/ /g, '\\s+'));
    }
}