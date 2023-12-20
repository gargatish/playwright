import { Page, expect } from "playwright/test"

export default class loginPage{
    page:Page
    login_button_navigate ='[class="text-primary flex items-center gap-2 md:text-sm text-[14px]"]'
    email_inputbox ='[id="Email Addressjoe@example.com"]'
    password_inputbox = '[id="login_pwd"]'
    login_button ='[class="btn-primary btn-rounded-md mt-6 text-base"]'
    verifyLogin_success ='#navbar-collapse-basic button'
    constructor(page : Page){
        this.page = page;
        
    }

    async navigate_and_login( email:string , password:string){
        await this.page.locator(this.login_button_navigate).click()
        await this.page.locator(this.email_inputbox).type(email)
        await this.page.locator(this.password_inputbox).type(password)
        await this.page.locator(this.login_button).click()
        await this.delay(3000);
        const successButton = await this.page.locator(this.verifyLogin_success).nth(4);
        await successButton.waitFor();
        await expect(successButton).toContainText('Dashboard')
    }
    async  delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
   
}