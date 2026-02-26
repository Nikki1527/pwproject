import { Page, Locator } from '@playwright/test';

/**
 * LoginPage - encapsulates all interactions on the Login page.
 */
export class LoginPage {
    private page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        // Locators 
        this.usernameInput = this.page.getByRole('textbox', { name: 'Username' }).describe("Username input field");
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' }).describe("Password input field");
        this.loginButton = this.page.getByRole('button', { name: 'Login' }).describe("Login button");
    }

    // Actions
    async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        console.log(`Filled username: ${username} in ${this.usernameInput.description()}`);
        await this.passwordInput.fill(password);
        console.log(`Filled password: ${password} in ${this.passwordInput.description()}`);
        await this.loginButton.click();
        console.log(`Clicked on ${this.loginButton.description()}`);
    }
}
