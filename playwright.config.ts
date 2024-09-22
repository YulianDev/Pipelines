import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright-e2e',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry',
  },
});
