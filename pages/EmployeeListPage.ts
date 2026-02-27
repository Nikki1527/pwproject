import { Page, Locator } from '@playwright/test';
export class EmployeeListPage {
    private page: Page;
    private readonly btnAdd: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnAdd = this.page.getByRole('button', { name: 'Add' }).describe("Add button");
    }

    async clickAddButton() {
        await this.btnAdd.click();
        console.log(`Clicked on ${this.btnAdd.description()}`);
    }

    async navigateToAddEmployee() {
        await this.clickAddButton();
    }

}