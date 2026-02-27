import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class EmployeeListPage extends BasePage {
    private readonly btnAdd: Locator;

    constructor(page: Page) {
        super(page); // Call the constructor of BasePage to initialize the page property
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