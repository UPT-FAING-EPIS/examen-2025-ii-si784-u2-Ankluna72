
const { test, expect } = require('@playwright/test');

test('Buscar tesis de tecnologia en el repositorio de la UPT', async ({ page }) => {
  // 1. Navegar a la página y esperar a que la red esté inactiva (página completamente cargada)
  await page.goto('https://repositorio.upt.edu.pe/', { waitUntil: 'networkidle' });

  // 2. Localizar el campo de búsqueda, llenarlo y presionar Enter (más robusto que hacer clic)
  const searchInput = page.locator('input[name="query"]');
  await searchInput.fill('tecnologia');
  await searchInput.press('Enter');

  // 3. Esperar a que al menos un resultado de la búsqueda sea visible en la página
  await page.waitForSelector('.artifact-item', { timeout: 60000 }); // Aumentamos el timeout por si la búsqueda es lenta

  // 4. Verificar que el número de resultados sea mayor que cero
  const resultsCount = await page.locator('.artifact-item').count();
  expect(resultsCount).toBeGreaterThan(0);
});
