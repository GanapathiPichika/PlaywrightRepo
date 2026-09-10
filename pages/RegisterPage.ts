import {Page,Locator} from '@playwright/test';

export class RegisterPage{

    readonly page:Page;
    readonly registerLink:Locator;
    readonly firstName:Locator;
    readonly lastName:Locator;
    readonly email:Locator;
    readonly telephone:Locator;
    readonly password:Locator;
    readonly confirmPassword:Locator;
    readonly privacyPolicyCheckbox:Locator;
    readonly continueBtn:Locator;


    constructor(page:Page){
        this.page=page;
        this.registerLink=page.locator('#column-right >div>a:nth-child(2)');
        this.firstName=page.locator('#input-firstname');
        this.lastName=page.locator('#input-lastname');
        this.email=page.locator('#input-email');
        this.telephone=page.locator('#input-telephone');
        this.password=page.locator('#input-password');
        this.confirmPassword=page.locator('#input-confirm');
        this.privacyPolicyCheckbox=page.locator('input[type="checkbox"]');
        this.continueBtn=page.locator('input[value="Continue"]');
    }

    async navigateToRegisterPage(){
        await this.registerLink.click();
    }


    async registerUser(firstName:string,lastName:string,email:string,telephone:string,password:string){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.email.fill(email);
        await this.telephone.fill(telephone);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.privacyPolicyCheckbox.check();
        await this.continueBtn.click();
    }


}