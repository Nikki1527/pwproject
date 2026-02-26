import { Page, Locator } from '@playwright/test';
export class AddEmployeePage {
    private page: Page;
    readonly txtFirstName: Locator;
    readonly txtLastName: Locator;
    readonly btnSave: Locator;
    constructor(page: Page) {
        this.page = page;
        this.txtFirstName = this.page.getByRole('textbox', { name: 'First Name' }).describe("First Name textbox");
        this.txtLastName = this.page.getByRole('textbox', { name: 'Last Name' }).describe("Last Name textbox");
        this.btnSave = this.page.getByRole('button', { name: 'Save' }).describe("Save button");
    }

    async addEmployee(firstName: string, lastName: string) {
        await this.txtFirstName.fill(firstName);
        console.log(`Filled first name: ${firstName} in ${this.txtFirstName.description()}`);
        await this.txtLastName.fill(lastName);
        console.log(`Filled last name: ${lastName} in ${this.txtLastName.description()}`);
        await this.btnSave.click();
        console.log(`Clicked on ${this.btnSave.description()}`);
    }

}