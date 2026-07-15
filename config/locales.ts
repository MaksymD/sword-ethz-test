export const locales = {
    de: {
        entryUrl: 'https://www.ethz.ch',
        departementSelectLabel: 'Wählen Sie ein Departement',
        departementOptionValue: 'https://inf.ethz.ch/de/',
        cookieRejectButtonLabel: 'Alle Cookies ablehnen',
        personenMenuLabel: 'Personen',
        departementsstabLinkLabel: 'Departementsstab',
        mehrDetailsLabel: 'Mehr Details',
        emailLabelPrefix: 'E-Mail:',
        phoneLabelPrefix: 'Telefon:',
        breadcrumbs: {
            departementsstab: ['Startseite', 'Personen', 'Administration', 'Departementsstab'],
            personDetail: ['Startseite', 'Personen', 'Personen A-Z', 'Person detail'],
        },
    },
    en: {
        entryUrl: 'https://ethz.ch/en.html',
        departementSelectLabel: 'Select a department',
        departementOptionValue: 'https://inf.ethz.ch/',
        cookieRejectButtonLabel: 'Reject all Cookies',
        personenMenuLabel: 'People',
        departementsstabLinkLabel: 'Department Administration',
        mehrDetailsLabel: 'More details',
        emailLabelPrefix: 'E-Mail:',
        phoneLabelPrefix: 'Phone:',
        breadcrumbs: {
            departementsstab: ['Homepage', 'People', 'Administration', 'Department Administration'],
            personDetail: ['Homepage', 'People', 'People A-Z', 'Person detail'],
        },
    },
} as const;

export type Locale = keyof typeof locales;