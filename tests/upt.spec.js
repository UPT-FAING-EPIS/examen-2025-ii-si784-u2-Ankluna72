
const { test, expect } = require('@playwright/test');

test('Buscar tesis de tecnologia en el repositorio de la UPT', async ({ page }) => {
  await page.goto('https://repositorio.upt.edu.pe/');

  await page.fill('input[name="query"]', 'tecnologia');

  await page.click('button[type="submit"]');

  await page.waitForSelector('.artifact-item');

  const results = await page.$$('.artifact-item');
  expect(results.length).toBeGreaterThan(0);
});
