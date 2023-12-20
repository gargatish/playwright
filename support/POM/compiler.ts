import { Page ,expect } from "playwright/test"

export default class compilerPgae{
    page:Page
    execute_button = '[class="min-w-max print:hidden"]'
    result_value ='#output > div.ace_scroller > div > div.ace_layer.ace_text-layer > div:nth-child(1)'
    sideBarTrigger_button ='.text-btn-primary'
    search_button ='[class="relative h-full"]'
    dropdown_java_select ='[alt="Java"]'
    advancedCompilerSwitch ='div p .link-secondary'
    advancedMode_Verify ='div h1 span'
    fullscreenButton='[class="svg-inline--fa fa-expand text-lg"]'
    fullScreen_verify = '[class="svg-inline--fa fa-compress text-lg"]'
    constructor(page : Page){
        this.page = page;
        
    }
    //('.ace_layer.ace_text-layer')[1].children[0].innerHTML 

    async execute(value:string){
        var result
        
        await this.page.locator(this.execute_button).click()
        await this.delay(5000);
         [result] = await Promise.all([
            this.page.locator(this.result_value).innerText(),

        ])
        await expect(result).toBe(value);
        console.log(result)
        
    }  
    async sidebarFunctionality(){
        await this.page.locator(this.sideBarTrigger_button).click()
    }
    async searchFunctionality() {
        await Promise.all([
            this.page.locator(this.search_button).nth(1).click(),
            this.page.locator(this.dropdown_java_select).waitFor({ state: 'visible' }),
        ]);
        await expect(this.page.locator(this.dropdown_java_select)).toBeVisible();
    }
    async advancedCompilerSwitching() {
        await this.page.locator(this.advancedCompilerSwitch).nth(1).click();
        await expect(this.page.locator(this.advancedMode_Verify).nth(3)).toContainText('(Advanced IDE)');
    }
    async fullScreen(){
        await this.page.locator(this.fullscreenButton).click()
        await this.page.locator(this.fullscreenButton).isHidden()
        await this.page.locator(this.fullScreen_verify).isVisible();


    }
    async  delay(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
      }
}