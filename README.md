# AlternativeDaily - UltraLiver Automation 🎭

A robust Playwright automation framework for testing UltraLiver supplement purchase flows across different bottle quantities and subscription types.

## 🎯 Project Overview

This repository contains automated testing for AlternativeDaily's UltraLiver product purchase flows, ensuring quality assurance across:
- **Landing page navigation** 
- **Product selection** (1, 3, 6 bottles)
- **Purchase types** (One-time vs Subscribe & Save)
- **Checkout redirects** with correct item codes
- **Cross-browser compatibility**



**Flow:** Landing Page → Click "FIX YOUR LIVER NOW" → Checkout Page → Test All Combinations → Validate Redirect URLs



**All 6 Combinations:**## 🎯 What it Tests## 🚀 Features

1. 2 bottles + One-time purchase → `SULTL035`

2. 2 bottles + Subscribe & Save → `SRULTL029`  

3. 3 bottles + One-time purchase → `SULTL007`

4. 3 bottles + Subscribe & Save → `SRULTL005`**Flow:** Landing Page → Click "FIX YOUR LIVER NOW" → Checkout Page → Test All Combinations → Validate Redirect URLs- **Multi-URL Support**: Test the same purchase flows across different landing pages

5. 6 bottles + One-time purchase → `SULTL008`

6. 6 bottles + Subscribe & Save → `SRULTL006`- **Purchase Type Flexibility**: Handle both one-time and recurring purchases



## 📁 Project Structure**All 6 Combinations:**- **Quantity Variations**: Test different product quantities (1, 3, 6 bottles)



```1. 2 bottles + One-time purchase → `SULTL035`- **Docker Integration**: Containerized test execution for consistency

├── pages/

│   ├── BasePage.js                 # Base page functionality 2. 2 bottles + Subscribe & Save → `SRULTL029`  - **Page Object Model**: Maintainable and reusable page objects

│   ├── LandingPage.js             # Landing page actions

│   └── CheckoutPage.js            # Checkout page actions3. 3 bottles + One-time purchase → `SULTL007`- **Parameterized Tests**: Data-driven testing with flexible configurations

├── data/

│   └── testConfigurations.js      # Test data and combinations4. 3 bottles + Subscribe & Save → `SRULTL005`- **Comprehensive Reporting**: HTML reports, Allure integration, and custom logging

├── tests/

│   ├── ultraliver-fast.spec.js    # Direct approach (simple & fast)5. 6 bottles + One-time purchase → `SULTL008`- **Error Handling**: Robust error handling and retry mechanisms

│   └── ultraliver-pom-fast.spec.js # POM approach (maintainable)

├── screenshots/                    # Test screenshots (auto-generated)6. 6 bottles + Subscribe & Save → `SRULTL006`

├── playwright-report/              # Test reports (auto-generated)

├── test-results/                   # Test results (auto-generated)## 📁 Project Structure

├── docker-compose.yml              # Docker configuration

├── Dockerfile                      # Docker image setup## 📁 Project Structure

├── playwright.config.js            # Playwright configuration

└── package.json                    # Dependencies```

```

```Playwright+docker/

## 🚀 Quick Start

├── tests/├── data/

### Option 1: Run Locally

```powershell│   └── ultraliver-fast.spec.js     # Main test file with all 6 combinations│   ├── test-configurations.js    # URL and purchase combinations

# Install dependencies

npm install├── screenshots/                    # Test screenshots (auto-generated)│   └── test-data.js             # Customer and payment test data



# Run all tests (headless)├── playwright-report/              # Test reports (auto-generated)├── pages/

npm test

├── test-results/                   # Test results (auto-generated)│   ├── base-page.js             # Base page object with common functionality

# Run with browser visible

npx playwright test --headed├── docker-compose.yml              # Docker configuration│   ├── landing-page.js          # Landing page interactions



# Run POM tests├── Dockerfile                      # Docker image setup│   └── checkout-page.js         # Checkout process handling

npx playwright test ultraliver-pom-fast.spec.js --headed

├── playwright.config.js            # Playwright configuration├── tests/

# Run fast tests  

npx playwright test ultraliver-fast.spec.js --headed└── package.json                    # Dependencies│   ├── purchase-flow.spec.js    # Main parameterized tests

```

```│   ├── comprehensive.spec.js    # Additional test scenarios

### Option 2: Run with Docker 🐳

```powershell│   └── test-helpers.js          # Test utilities and fixtures

# Quick Demo (if Docker installed)

.\demo-docker.ps1## 🚀 Quick Start├── utils/



# Manual Docker Commands│   ├── logger.js                # Winston logging configuration

docker-compose build                              # Build container

docker-compose run --rm playwright npm test      # Run all tests### Option 1: Run Locally│   ├── test-utils.js            # General utility functions

docker-compose up -d report-server               # Start report server

# Then visit: http://localhost:9323```powershell│   └── test-runner.js           # Test execution management



# Cleanup# Install dependencies├── logs/                        # Test execution logs

docker-compose down

```npm install├── screenshots/                 # Failure screenshots



## 📊 Test Results├── docker-compose.yml           # Docker services configuration



Each test will show:# Run all tests (headless)├── Dockerfile                   # Container definition

- ✅ Navigation success (Landing → Checkout)  

- ✅ Option selection (bottles + purchase type)npm test├── playwright.config.js         # Playwright configuration

- 🌐 Final redirect URL with item code

- 🎯 Validation results (PERFECT/SUCCESS)└── package.json                 # Dependencies and scripts



## 🐳 Docker Integration Demo# Run with browser visible```



### **Why Docker?**npx playwright test --headed

- **Isolation:** Tests run in consistent environment

- **CI/CD Ready:** Perfect for automated pipelines  ## 🛠️ Setup

- **No Local Setup:** No need to install Node.js/Playwright on host

- **Scalable:** Easy to run on any machine or cloud# Run specific test



### **Demo Commands:**npx playwright test ultraliver-fast.spec.js --headed1. **Clone and navigate to project**:

```powershell

# Full integration demo```   ```bash

.\demo-docker.ps1

   cd "d:\automation\Playwright+docker"

# Individual steps

docker-compose build                    # Build Playwright container### Option 2: Run with Docker   ```

docker-compose run --rm playwright npm test  # Run tests in container

docker-compose up -d report-server     # Serve results web UI```powershell

```

# Build and run with Docker2. **Install dependencies**:

### **What You'll See:**

1. **Container Build** - Playwright environment setupdocker-compose up --build   ```bash

2. **Test Execution** - All 6 combinations + POM tests pass

3. **Web Reports** - Interactive HTML reports at localhost:9323   npm install

4. **Volume Mounting** - Results saved to host directories

# Run tests in container   ```

## 🔧 Configuration

docker-compose run playwright npm test

**Test URLs:**

- Landing: `https://pages.getultraliver.com/uc-ultraliver-sp08/````3. **Install Playwright browsers**:

- Checkout: Auto-navigated via "FIX YOUR LIVER NOW" button

   ```bash

**Expected Item Codes:**

- One-time purchases: `SULTL###` format## 📊 Test Results   npx playwright install

- Recurring (Subscribe & Save): `SRULTL###` format

   ```

## 🏗️ Architecture Approaches

Each test will show:

### **1. Direct Approach** (`ultraliver-fast.spec.js`)

- ✅ Simple and fast execution- ✅ Navigation success (Landing → Checkout)  4. **Configure environment**:

- ✅ All logic in test file

- ✅ Quick to understand and modify- ✅ Option selection (bottles + purchase type)   ```bash

- 📈 Best for: Rapid prototyping, simple scenarios

- 🌐 Final redirect URL with item code   copy .env.example .env

### **2. Page Object Model** (`ultraliver-pom-fast.spec.js`) 

- ✅ Maintainable and scalable- 🎯 Validation results (PERFECT/SUCCESS)   ```

- ✅ Reusable page methods

- ✅ Business-focused test code   Edit `.env` with your actual landing page URLs.

- ✅ Centralized element selectors

- 📈 Best for: Large test suites, team collaboration## 🔧 Configuration



## 📸 Screenshots## 🐳 Docker Usage



Screenshots are automatically saved in `/screenshots/`:**Test URLs:**

- Before each purchase attempt

- Final redirect page with URL validation- Landing: `https://pages.getultraliver.com/uc-ultraliver-sp08/`### Build and run tests in Docker:



## 🎯 Success Criteria- Checkout: Auto-navigated via "FIX YOUR LIVER NOW" button```bash



✅ **All tests pass when:**# Build the Docker image

- Navigation from landing to checkout works

- All bottle options (2, 3, 6) are selectable  **Expected Item Codes:**npm run docker:build

- Both purchase types (one-time, recurring) work

- BUY NOW button redirects to correct URLs- One-time purchases: `SULTL###` format

- Final URLs contain expected item codes

- Recurring (Subscribe & Save): `SRULTL###` format# Run tests in Docker

## 🐛 Troubleshooting

npm run docker:test

### **Local Issues:**

1. **Timeout errors** → Tests are optimized for speed (5-10 seconds each)## 📸 Screenshots

2. **Navigation fails** → Check if landing page URL is accessible

3. **Wrong item codes** → Verify expected codes in test files# Start services



### **Docker Issues:**Screenshots are automatically saved in `/screenshots/`:npm run docker:up

1. **Build fails** → Run `docker system prune -f` and rebuild

2. **Port conflicts** → Change port in docker-compose.yml- Before each purchase attempt

3. **Volume issues** → Ensure Docker has access to project directory

- Final redirect page with URL validation# Stop services

### **Logs Location:**

- Console output during test executionnpm run docker:down

- Playwright reports in `/playwright-report/`

- Screenshots in `/screenshots/`## 🎯 Success Criteria```

- Docker logs: `docker-compose logs`



## 🏷️ Version Info

✅ **All tests pass when:**### View test reports:

- **Playwright:** v1.40.0

- **Node.js:** ES Modules- Navigation from landing to checkout works```bash

- **Browser:** Chromium (headless/headed)

- **Test Framework:** Playwright Test Runner- All bottle options (2, 3, 6) are selectable  # Start report server (accessible at http://localhost:9323)

- **Container:** mcr.microsoft.com/playwright:v1.40.0-focal

- Both purchase types (one-time, recurring) workdocker-compose up report-server

## 🚀 CI/CD Integration

- BUY NOW button redirects to correct URLs```

This Docker setup is ready for:

- **GitHub Actions** - Final URLs contain expected item codes

- **Jenkins**

- **Azure DevOps**## 🧪 Running Tests

- **Any CI/CD platform with Docker support**

## 🐛 Troubleshooting

Simply use: `docker-compose run --rm playwright npm test` in your pipeline!
### Local execution:

**Common Issues:**```bash

1. **Timeout errors** → Tests are optimized for speed (5-10 seconds each)# Run all tests

2. **Navigation fails** → Check if landing page URL is accessiblenpm test

3. **Wrong item codes** → Verify expected codes in test file

# Run with UI mode

**Logs Location:**npm run test:ui

- Console output during test execution

- Playwright reports in `/playwright-report/`# Run in headed mode

- Screenshots in `/screenshots/`npm run test:headed



## 🏷️ Version Info# Debug mode

npm run test:debug

- **Playwright:** v1.40.0

- **Node.js:** ES Modules# Generate and view report

- **Browser:** Chromium (headless/headed)npm run report

- **Test Framework:** Playwright Test Runner```

### Specific test suites:
```bash
# Run only purchase flow tests
npx playwright test purchase-flow.spec.js

# Run smoke tests
npx playwright test comprehensive.spec.js --grep "Smoke Tests"

# Run one-time purchase tests only
npx playwright test --grep "One-Time Purchase Tests"
```

## 📊 Configuration

### Adding New Landing URLs

Edit `data/test-configurations.js`:

```javascript
export const testUrls = [
  {
    id: 'your-landing-page',
    url: 'https://your-actual-landing-page.com',
    name: 'Your Landing Page Name',
    expectedElements: ['purchase-buttons', 'quantity-selectors']
  }
  // Add more URLs...
];
```

### Customizing Purchase Options

The framework automatically tests all combinations of:
- **Purchase Types**: One-time vs Recurring
- **Quantities**: 1, 3, or 6 bottles  
- **URLs**: All configured landing pages

### Page Element Selectors

Update selectors in `pages/landing-page.js` to match your page structure:

```javascript
this.selectors = {
  oneTimePurchaseButton: '[data-purchase-type="one-time"], .one-time-btn',
  recurringPurchaseButton: '[data-purchase-type="recurring"], .subscription-btn',
  quantity1Button: '[data-quantity="1"], .qty-1-btn',
  // Add your specific selectors...
};
```

## 🎯 Key Features

### 1. **Intelligent Element Detection**
The framework tries multiple selector patterns to find elements:
- Data attributes (`data-purchase-type`, `data-quantity`)
- CSS classes (`.one-time-purchase`, `.qty-3`)
- IDs (`#recurring-btn`, `#quantity-select`)

### 2. **Flexible Purchase Flow**
```javascript
// Automatically handles any combination
await landingPage.selectPurchaseType('recurring');
await landingPage.selectQuantity(3);
await landingPage.addToCart();
```

### 3. **Comprehensive Validation**
- Order summary verification
- Price validation
- Purchase type confirmation
- Quantity verification

### 4. **Error Recovery**
- Automatic retries
- Screenshot on failure
- Detailed error logging
- Graceful degradation

## 📈 Reporting

### HTML Reports
Generated automatically in `playwright-report/`

### Allure Reports  
```bash
# Generate Allure report
npx allure generate allure-results --clean
npx allure open allure-report
```

### Custom Logging
Logs are written to `logs/` directory with different levels:
- `error.log` - Errors only
- `combined.log` - All log levels

## 🔧 Customization

### Adding New Test Scenarios

1. **Add customer data** in `data/test-data.js`
2. **Create test scenario** in `tests/` directory
3. **Use existing page objects** for interactions

### Example Custom Test:
```javascript
test('Custom purchase scenario', async ({ page }) => {
  const landingPage = new LandingPage(page);
  const checkoutPage = new CheckoutPage(page);
  
  await landingPage.navigateTo('YOUR_URL_HERE');
  await landingPage.selectPurchaseType('recurring');
  await landingPage.selectQuantity(6);
  await landingPage.addToCart();
  await landingPage.proceedToCheckout();
  
  const orderSummary = await checkoutPage.verifyOrderSummary({
    purchaseType: 'recurring',
    quantity: 6
  });
  
  expect(orderSummary.isValid).toBeTruthy();
});
```

## 🚨 Troubleshooting

### Common Issues:

1. **Elements not found**: Update selectors in page objects
2. **Timeout errors**: Increase timeouts in `playwright.config.js`
3. **Docker issues**: Ensure Docker is running and ports are available
4. **Test failures**: Check logs in `logs/` and screenshots in `screenshots/`

### Debug Mode:
```bash
# Run single test with debugging
npx playwright test --debug --grep "specific test name"
```

## 🤝 Contributing

1. Follow the Page Object Model pattern
2. Add comprehensive logging
3. Include error handling
4. Write parameterized tests for reusability
5. Update documentation

## 📝 License

MIT License - see LICENSE file for details.

---

**Ready to automate!** 🎉 

Update the URLs in `data/test-configurations.js` with your actual landing pages and run:
```bash
npm run docker:test
```