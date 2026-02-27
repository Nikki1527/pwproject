import { Page, Locator, expect } from '@playwright/test';
export class DashboardPage {
    private page: Page;
    private readonly dashboardHeader: Locator;
    private readonly lnkPIM:Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardHeader = this.page.getByRole('heading', { name: 'Dashboard' }).describe("Dashboard page header");
        this.lnkPIM = this.page.getByRole('link', { name: 'PIM' }).describe("PIM link");
    }

    async verifyDashboardPageExists() {
        await this.dashboardHeader.waitFor({ state: 'visible', timeout: 5000 });
        await expect(this.dashboardHeader).toBeVisible();
        console.log(`Verified that we are on the ${this.dashboardHeader.description()}`);
    }

    async navigateToEmployeeList() {
        await this.lnkPIM.click();
        console.log(`Clicked on ${this.lnkPIM.description()}`);
    }

}