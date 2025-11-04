/*
  Simple BasePage implementation for Playwright tests.
  Provides basic helper methods used by page objects.
*/

export class BasePage {
  constructor(page) {
    if (!page) throw new Error('BasePage requires a Playwright page object');
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    console.log(`Navigated to: ${url}`);
  }

  async getCurrentUrl() {
    return this.page.url();
  }

  async waitForTimeout(milliseconds) {
    await this.page.waitForTimeout(milliseconds);
  }

  async waitForElement(selector, timeout = 10000) {
    await this.page.waitForSelector(selector, { state: 'visible', timeout });
    return this.page.locator(selector).first();
  }

  async clickElement(selector, description = '') {
    await this.page.click(selector);
    console.log(`🔘 Clicked: ${description || selector}`);
    await this.page.waitForTimeout(500); // Brief wait after click
  }

  async fillInput(selector, value) {
    await this.page.fill(selector, value);
    console.log(`📝 Filled ${selector} with value`);
  }

  async getElementText(selector) {
    return (await this.page.textContent(selector))?.trim() ?? '';
  }

  async isElementVisible(selector, timeout = 5000) {
    try {
      await this.page.waitForSelector(selector, { state: 'visible', timeout });
      return true;
    } catch {
      return false;
    }
  }

}