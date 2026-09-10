import {Page,Locator} from '@playwright/test';


export class LoginPage{

    readonly page:Page;
    readonly email:Locator;
    readonly password:Locator;
    readonly loginBtn:Locator;
    readonly warningMsg:Locator;

    constructor(page:Page){
        this.page=page;
        this.email=page.locator('#input-email');
        this.password=page.locator('#input-password');
        this.loginBtn=page.locator('input[value="Login"]');
        this.warningMsg=page.locator('.alert.alert-danger.alert-dismissible');
    }

    async navigateToLoginPage(){
        await this.page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    }


    async doLogin(Email:string,Pass:string){
        await this.email.fill(Email);
        await this.password.fill(Pass);
        await this.loginBtn.click();
    }



    async verifyLoginPageUrl(){
        await this.page.waitForURL('https://naveenautomationlabs.com/opencart/index.php?route=account/account');
    }

    
}