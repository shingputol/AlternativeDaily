import { BasePage } from './base-page.js';

export class CheckoutPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async selectBottles(quantity) {
        console.log(`🔍 Looking for ${quantity} bottles option...`);
        
        let selector;
        switch (quantity) {
            case 1:
            case 2:
                selector = 'text=2 BOTTLES';
                break;
            case 3:
                selector = 'text=3 BOTTLES';
                break;
            case 6:
                selector = 'text=6 BOTTLES';
                break;
            default:
                throw new Error(`Unsupported bottle quantity: ${quantity}`);
        }

        await this.clickElement(selector, `${quantity} bottles`);
        console.log(`✅ Selected ${quantity} bottles`);
        return this;
    }

    async selectPurchaseType(type) {
        console.log(`🔍 Looking for ${type} purchase option...`);
        
        let selector;
        if (type === 'recurring' || type === 'subscribe') {
            selector = 'text=Subscribe & Save';
        } else {
            selector = 'text=One-time Purchase';
        }

        await this.clickElement(selector, `${type} purchase`);
        console.log(`✅ Selected ${type} purchase`);
        return this;
    }

    async clickBuyNow() {
        console.log('🔍 Looking for BUY NOW button...');
        
        // Try to find BUY NOW button with different selectors
        const selectors = [
            'text=BUY NOW',
            'button:has-text("BUY NOW")',
            '.lp-pom-button:has-text("BUY")'
        ];
        
        for (const selector of selectors) {
            try {
                await this.page.waitForSelector(selector, { timeout: 5000 });
                console.log(`🔘 Found BUY NOW button with selector: ${selector}`);
                
                // Click and wait for navigation
                await Promise.all([
                    this.page.waitForNavigation({ waitUntil: 'networkidle', timeout: 30000 }),
                    this.clickElement(selector, 'BUY NOW')
                ]);
                
                console.log('🔘 Clicked BUY NOW button');
                return this;
            } catch (error) {
                console.log(`🔄 Selector ${selector} failed, trying next...`);
                continue;
            }
        }
        
        throw new Error('BUY NOW button not found with any selector');
    }


}