import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : 2, // Reduce to 2 workers for better stability
  
  reporter: [
    ['html'],
    ['line']
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://example.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15000, // Increased for better stability
    ignoreHTTPSErrors: true,
    navigationTimeout: 30000, // Increased for better cross-browser support
    // Enhanced stability settings
    launchOptions: {
      slowMo: 50, // Slow down actions by 50ms for stability
    },
    // Better error handling
    contextOptions: {
      recordVideo: {
        dir: 'test-results/videos',
        size: { width: 1280, height: 720 }
      }
    }
  },
  
  timeout: 120000, // 120 seconds per test for better stability

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    },
    // {
    //   name: 'firefox',
    //   use: { 
    //     ...devices['Desktop Firefox'],
    //     userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
    //   },
    // },
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
      },
    },
  ],

  // webServer disabled for this project since we're testing external URLs
  // webServer: process.env.CI ? undefined : {
  //   command: 'npm run start', 
  //   port: 3000,
  //   reuseExistingServer: !process.env.CI,
  // },
});