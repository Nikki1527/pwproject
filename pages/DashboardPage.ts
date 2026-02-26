import { Page, Locator } from '@playwright/test';
export class DashboardPage {
    private page: Page;
    readonly dashboardHeader: Locator;
    readonly lnkPIM:Locator;

    constructor(page: Page) {
        this.page = page;
        this.dashboardHeader = this.page.getByRole('heading', { name: 'Dashboard' }).describe("Dashboard page header");
        this.lnkPIM = this.page.getByRole('link', { name: 'PIM' }).describe("PIM link");
    }

    async navigateToEmployeeList() {
        await this.lnkPIM.click();
        console.log(`Clicked on ${this.lnkPIM.description()}`);
    }

}