import { test, expect } from '@playwright/test';
// import { LoginPage } from "../pages/LoginPage";
// import { DashboardPage } from '../pages/DashboardPage';
// import { EmployeeListPage } from '../pages/EmployeeListPage';
// import { AddEmployeePage } from '../pages/AddEmployeePage';
import { LoginPage, DashboardPage, EmployeeListPage, AddEmployeePage } from '../pages';

test('Add Employee Tests', async ({ page }) => {
    let loginPage: LoginPage;
    let dashboardPage: DashboardPage;
    let employeeListPage: EmployeeListPage;
    let addEmployeePage: AddEmployeePage;

    // Initialize page objects
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    employeeListPage = new EmployeeListPage(page);
    addEmployeePage = new AddEmployeePage(page);

    // Navigate to login page and perform login
    await page.goto('https://vibetestq-osondemand.orangehrm.com/auth/login');
    await loginPage.login('nagesh', 'Nagesh@123');
    // Navigate to Employee List
    await dashboardPage.navigateToEmployeeList();
    // Click on Add button to go to Add Employee page
    await employeeListPage.navigateToAddEmployee();
    // Fill in employee details and save
    await addEmployeePage.addEmployee('John', 'Doe');


});