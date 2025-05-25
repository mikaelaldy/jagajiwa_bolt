import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const routes = [
  { path: '/', name: 'landing-page' },
  { path: '/assessment', name: 'assessment-page' },
  { path: '/chatbot', name: 'chatbot-page' },
  { path: '/mood-tracker', name: 'mood-tracker-page' },
  { path: '/emergency', name: 'emergency-page' },
];

const baseUrl = 'http://localhost:5173'; // Default Vite dev server URL
const screenshotDir = 'screenshots';

// Create screenshot directory if it doesn't exist
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir);
}

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }, // Desktop size
  });

  for (const route of routes) {
    const page = await context.newPage();
    const url = `${baseUrl}${route.path}`;
    console.log(`Navigating to ${url}`);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 }); // Wait for network to be idle
      // Add a small delay to ensure all dynamic content is loaded
      await page.waitForTimeout(2000);
      const screenshotPath = path.join(screenshotDir, `${route.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Screenshot saved to ${screenshotPath}`);
    } catch (error) {
      console.error(`Failed to take screenshot for ${url}:`, error);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('All screenshots taken.');
})(); 