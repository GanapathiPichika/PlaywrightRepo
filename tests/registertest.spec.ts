import {test,expect}  from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';   
import registerData from '../test-data/registerData.json';


registerData.forEach((data)=>{
    test(`Register User - ${data.firstName}`, async ({page}) =>{

    const loginPage=new LoginPage(page);
    const registerPage=new RegisterPage(page);

    await loginPage.navigateToLoginPage();
    await registerPage.navigateToRegisterPage();
    await registerPage.registerUser(data.firstName, data.lastName, data.email, data.telephone, data.password);

});


})




// test('Register User', async ({page}) =>{

//     const loginPage=new LoginPage(page);
//     const registerPage=new RegisterPage(page);

//     await loginPage.navigateToLoginPage();
//     await registerPage.navigateToRegisterPage();
//     await registerPage.registerUser(registerData.firstName, registerData.lastName, registerData.email, registerData.telephone, registerData.password);



// });