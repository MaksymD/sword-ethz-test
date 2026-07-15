import { Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { MainNav } from '../components/MainNav';
import { DepartementsstabPage } from './DepartementsstabPage';

/** Department (D-INFK) homepage. */
export class DepartmentHomePage extends BasePage {
    readonly nav: MainNav;

    constructor(page: Page) {
        super(page);
        this.nav = new MainNav(page);
    }

    /** Opens the People flyout menu and navigates to the Departementsstab page. */
    async goToDepartementsstab(
        personenMenuLabel: string,
        departementsstabLinkLabel: string,
    ): Promise<DepartementsstabPage> {
        await this.nav.openPeopleMenu(personenMenuLabel);
        await this.nav.goToDepartementsstab(departementsstabLinkLabel);
        return new DepartementsstabPage(this.page);
    }
}