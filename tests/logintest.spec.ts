import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import loginData from '../test-data/loginData.json';

test('Login Page Test Valid', async ({page}) =>{

    const loginPage=new LoginPage(page);
    await loginPage.navigateToLoginPage();

    //await loginPage.doLogin('rohitkumar12@gmail.com','1234567');
    await loginPage.doLogin(loginData.valid_User.email,loginData.valid_User.password
    );
    //await loginPage.verifyLoginPageUrl();

    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');

});


test('Login Page Test Invalid', async ({page}) =>{

    const loginPage=new LoginPage(page);
    await loginPage.navigateToLoginPage();

    await loginPage.doLogin(loginData.Invalid_User.email,loginData.Invalid_User.password
    );

    await expect(loginPage.warningMsg).toBeVisible();


});