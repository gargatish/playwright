import {test ,expect } from "playwright/test";
import loginPage from "../support/POM/login.page";
import testData from "../testData/testData.json"
import compilerPgae from "../support/POM/compiler";
test.describe('Mark all as completed', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/online-java-compiler')
      
    });
  
    test.afterEach(async ({ page }) => {
      
    });
  
test("1.To verify user is able to login successfully ", async ({page})=>{
    const lp =new loginPage(page);
    await lp.navigate_and_login(testData.username,testData.password)
})
test('2.Verify user is able to execute the code and result is published',async({page})=>{
    const comp =new compilerPgae(page);
    await comp.execute('Sum of x+y = 35')

})
//
test("3.To verify user is able to search languages ", async ({page})=>{
    const comp =new compilerPgae(page);
    await comp.searchFunctionality()
})
test('4.To Verify that the user is able to switch from basic to advanced mode',async({page})=>{
    const comp =new compilerPgae(page);
    await comp.advancedCompilerSwitching()
})
test('5.To Verify Full Screen Functionality ',async({page})=>{
    const comp =new compilerPgae(page);
    await comp.fullScreen()
})
})
