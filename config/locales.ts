export const locales = {
    de: {
        entryUrl: 'https://www.ethz.ch',
    },
    en: {
        entryUrl: 'https://ethz.ch/en.html',
    },
} as const;

export type Locale = keyof typeof locales;