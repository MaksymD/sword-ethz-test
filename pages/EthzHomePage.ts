import { BasePage } from './BasePage';
import { DepartmentHomePage } from './DepartmentHomePage';

/** ETH Zürich homepage — entry point of the test */
export class EthzHomePage extends BasePage {

    /** Navigates to the given entry URL. */
    async goto(url: string): Promise<void> {
        await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    }

    /** Selects a department from the dropdown and waits for navigation. */
    async selectDepartement(selectLabel: string, optionUrl: string): Promise<DepartmentHomePage> {
        await Promise.all([
            this.page.waitForURL(optionUrl),
            this.page.getByLabel(selectLabel).selectOption(optionUrl),
        ]);
        return new DepartmentHomePage(this.page);
    }
}