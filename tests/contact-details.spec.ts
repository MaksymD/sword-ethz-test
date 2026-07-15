import {test} from '../fixtures/test';
import {locales} from '../config/locales';
import {departementsstab, people} from '../testdata/people';
import {EthzHomePage} from '../pages/EthzHomePage';

test.describe('Testfall: Kontakt-Details', () => {
    test('shows correct contact details for Paulina Motyka', async ({page, siteLocale}) => {
        const locale = locales[siteLocale];

        const departmentHome = await test.step('Select D-INFK department', async () => {
            const homePage = new EthzHomePage(page);
            return homePage.selectDepartement(
                locale.departementSelectLabel,
                locale.departementOptionValue,
                locale.cookieRejectButtonLabel,
            );
        });

        const departementsstabPage = await test.step('Open Departementsstab via People menu', async () => {
            return departmentHome.goToDepartementsstab(locale.personenMenuLabel, locale.departementsstabLinkLabel);
        });

        await test.step('Verify staff count and breadcrumb', async () => {
            await departementsstabPage.expectStaffCount(departementsstab.expectedStaffCount);
            await departementsstabPage.breadcrumb.expectPath(locale.breadcrumbs.departementsstab);
        });

        const personDetailPage = await test.step('Open Paulina Motyka detail page', async () => {
            return departementsstabPage.openPersonDetail(people.paulinaMotyka.fullName, locale.mehrDetailsLabel);
        });

        await test.step('Verify email, phone and breadcrumb', async () => {
            await personDetailPage.expectEmail(locale.emailLabelPrefix, people.paulinaMotyka.email);
            await personDetailPage.expectPhone(locale.phoneLabelPrefix, people.paulinaMotyka.phone);
            await personDetailPage.breadcrumb.expectPath(locale.breadcrumbs.personDetail);
        });
    });
});