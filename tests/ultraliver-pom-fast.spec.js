import { test, expect } from '@playwright/test';
import { LandingPage } from '../pages/LandingPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test.describe('UltraLiver Simple Purchase Flow', () => {
  
  // Simple test configurations
  const testCombinations = [
    { bottles: 1, purchaseType: 'one-time', description: '1 bottle + One-time purchase' },
    { bottles: 1, purchaseType: 'subscribe', description: '1 bottle + Subscribe & Save' },
    { bottles: 3, purchaseType: 'one-time', description: '3 bottles + One-time purchase' },
    { bottles: 3, purchaseType: 'subscribe', description: '3 bottles + Subscribe & Save' },
    { bottles: 6, purchaseType: 'one-time', description: '6 bottles + One-time purchase' },
    { bottles: 6, purchaseType: 'subscribe', description: '6 bottles + Subscribe & Save' }
  ];

  test.beforeEach(async ({ page }) => {
    // Simple setup - just set viewport
    await page.setViewportSize({ width: 1280, height: 720 });
  });
  // Simple tests for each combination
  testCombinations.forEach((config, index) => {
    test(`${config.description}`, async ({ page }) => {
      test.setTimeout(90000); // 90 seconds
      
      // Simple delay to avoid rate limiting
      await page.waitForTimeout(index * 1000);
      
      const landingPage = new LandingPage(page);
      const checkoutPage = new CheckoutPage(page);

      console.log(`🚀 Testing: ${config.description}`);
      
      // 1. Go to landing page
      await landingPage.open();
      console.log('✅ Opened landing page');
      
      // 2. Navigate to checkout
      await landingPage.clickFixYourLiverNow();
      console.log('✅ Clicked Fix Your Liver Now button');
      
      // 3. Select bottles
      await checkoutPage.selectBottles(config.bottles);
      console.log(`✅ Selected ${config.bottles} bottles`);
      
      // 4. Select purchase type
      await checkoutPage.selectPurchaseType(config.purchaseType);
      console.log(`✅ Selected ${config.purchaseType} purchase`);
      
      // 5. Click Buy Now
      await checkoutPage.clickBuyNow();
      console.log('✅ Clicked Buy Now');
      
      // 6. Verify we're on the right page
      const currentUrl = await page.url();
      console.log(`🌐 Final URL: ${currentUrl}`);
      
      // Simple validation - should contain getultraliver.com
      expect(currentUrl).toContain('getultraliver.com');
      
      console.log(`✅ Test completed: ${config.description}`);
    });
  });

  // Simple navigation test
  test('Basic Navigation Test', async ({ page }) => {
    test.setTimeout(60000);
    
    const landingPage = new LandingPage(page);
    const checkoutPage = new CheckoutPage(page);

    console.log('🚀 Testing basic navigation');

    // Test navigation
    await landingPage.open();
    const landingUrl = await landingPage.getCurrentUrl();
    expect(landingUrl).toContain('uc-ultraliver-sp08');
    console.log('✅ Landing page loaded correctly');

    // Navigate to checkout
    await landingPage.clickFixYourLiverNow();
    const checkoutUrl = await checkoutPage.getCurrentUrl();
    expect(checkoutUrl).toContain('combo-salescheckout-page');
    console.log('✅ Checkout page loaded correctly');

    console.log('✅ Navigation test completed successfully');
  });
});