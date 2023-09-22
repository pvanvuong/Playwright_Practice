import { Locator, Page, expect } from "@playwright/test";
import { BaseTest } from "./BaseTest";

export class PageHome extends BaseTest{
    readonly searchButton: Locator
    readonly registerButton: Locator
    navigationButton(button: string){
        return "//ul[@class='navbar-nav horizontal']//span[@class='title'][normalize-space()='" + button + "']";
    }
    constructor(page: Page){
        super(page);
        this.searchButton = page.locator("//button[text()='Search']");
        this.registerButton = page.locator("//span[normalize-space()='Register']");
    }
    
    async verifySearchButtonSearchIsDisplayed(){
        await this.searchButton.isVisible();
    }

    async login(){
        await this.page.locator(this.navigationButton("My account")).click();
    }

    async register(){
        await this.page.locator(this.navigationButton("My account")).hover();
        await this.registerButton.click();
    }
}