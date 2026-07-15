import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Breadcrumb } from '../components/Breadcrumb';
import { PersonCard } from '../components/PersonCard';
import { PersonDetailPage } from './PersonDetailPage';

/** Departementsstab list page. */
export class DepartementsstabPage extends BasePage {
    readonly breadcrumb: Breadcrumb;

    constructor(page: Page) {
        super(page);
        this.breadcrumb = new Breadcrumb(page);
    }

    /** Counts staff cards */
    async getStaffCount(): Promise<number> {
        return PersonCard.locateAll(this.page).count();
    }

    /** Finds the card by name and clicks through to its detail page. */
    async openPersonDetail(fullName: string, mehrDetailsLabel: string): Promise<PersonDetailPage> {
        const card = PersonCard.locate(this.page, fullName);
        await card.clickMehrDetails(mehrDetailsLabel);
        return new PersonDetailPage(this.page);
    }
}