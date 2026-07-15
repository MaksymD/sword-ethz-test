import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './fixtures/test';
import { STORAGE_STATE_PATH } from './tests/setup/storageState';

export default defineConfig<TestOptions>({
    captureGitInfo: { commit: true },
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    reporter: [
        ['html', { open: 'never' }],
        ['list'],
        ['allure-playwright'],
    ],
    use: {
        trace: 'on-first-retry',
        headless: true,
        screenshot: 'only-on-failure',
    },
    projects: [
        {
            name: 'setup',
            testMatch: `consent.setup.ts`,
        },
        {
            name: 'chromium-de',
            use: { ...devices['Desktop Chrome'], siteLocale: 'de', storageState: STORAGE_STATE_PATH },
            dependencies: ['setup'],
        },
        {
            name: 'chromium-en',
            use: { ...devices['Desktop Chrome'], siteLocale: 'en', storageState: STORAGE_STATE_PATH },
            dependencies: ['setup'],
        },
        {
            name: 'firefox-de',
            use: { ...devices['Desktop Firefox'], siteLocale: 'de', storageState: STORAGE_STATE_PATH },
            dependencies: ['setup'],
        },
        {
            name: 'firefox-en',
            use: { ...devices['Desktop Firefox'], siteLocale: 'en', storageState: STORAGE_STATE_PATH },
            dependencies: ['setup'],
        },
        {
            name: 'webkit-de',
            use: { ...devices['Desktop Safari'], siteLocale: 'de', storageState: STORAGE_STATE_PATH },
            dependencies: ['setup'],
        },
        {
            name: 'webkit-en',
            use: { ...devices['Desktop Safari'], siteLocale: 'en', storageState: STORAGE_STATE_PATH },
            dependencies: ['setup'],
        },
    ],
});