import {BasePage} from './BasePage';
import {DepartmentHomePage} from './DepartmentHomePage';
import {CookieBanner} from '../components/CookieBanner';

/** ETH Zürich homepage — entry point of the test */
export class EthzHomePage extends BasePage {

    /** Selects a department from the dropdown and waits for navigation. */
    async selectDepartement(selectLabel: string, optionUrl: string, cookieRejectLabel: string): Promise<DepartmentHomePage> {
        await Promise.all([
            this.page.waitForURL(optionUrl),
            this.page.getByLabel(selectLabel).selectOption(optionUrl),
        ]);
        await new CookieBanner(this.page).dismissIfPresent(cookieRejectLabel);
        return new DepartmentHomePage(this.page);
    }
}