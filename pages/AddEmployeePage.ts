import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
export class AddEmployeePage extends BasePage {
    private readonly txtFirstName: Locator;
    private readonly txtLastName: Locator;
    private readonly btnSave: Locator;

    constructor(page: Page) {
        super(page); // Call the constructor of BasePage to initialize the page property
        this.txtFirstName = this.page.getByRole('textbox', { name: 'First Name' }).describe("First Name textbox");
        this.txtLastName = this.page.getByRole('textbox', { name: 'Last Name' }).describe("Last Name textbox");
        this.btnSave = this.page.getByRole('button', { name: 'Save' }).describe("Save button");
    }
    async enterFirstName(firstName: string) {
        await this.txtFirstName.fill(firstName);
        console.log(`Filled first name: ${firstName} in ${this.txtFirstName.description()}`);
    }

    async enterLastName(lastName: string) {
        await this.txtLastName.fill(lastName);
        console.log(`Filled last name: ${lastName} in ${this.txtLastName.description()}`);
    }
    async clickSave() {
        await this.btnSave.click();
        console.log(`Clicked on ${this.btnSave.description()}`);
    }

    async addEmployee(firstName: string, lastName: string) {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.clickSave();
    }

}