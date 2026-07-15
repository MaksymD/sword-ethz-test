import { Page } from '@playwright/test';

/** Shared constructor contract for all page objects. */
export abstract class BasePage {
    constructor(protected readonly page: Page) {}
}