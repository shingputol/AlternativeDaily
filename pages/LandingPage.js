import { BasePage } from './base-page.js';

export class LandingPage extends BasePage {
    constructor(page) {
        super(page);
        this.url = 'https://pages.getultraliver.com/uc-ultraliver-sp08/';
    }

    async open() {
        await this.goto(this.url);
        // Wait for the main button to be visible
        await this.waitForElement('#lp-pom-button-1231', 15000);
        return this;
    }

    async clickFixYourLiverNow() {
        console.log('🔍 Looking for "FIX YOUR LIVER NOW" button...');
        
        // Click the button and wait for navigation
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'networkidle', timeout: 30000 }),
            this.clickElement('#lp-pom-button-1231', 'FIX YOUR LIVER NOW')
        ]);
        
        const currentUrl = await this.getCurrentUrl();
        console.log(`✅ Navigated to checkout: ${currentUrl}`);
        return this;
    }
}