
const { test, expect } = require('@playwright/test');

test('Buscar tesis de tecnologia en el repositorio de la UPT', async ({ page }) => {
  // 1. Navegar a la página del repositorio.
  await page.goto('https://repositorio.upt.edu.pe/');

  // 2. Aceptar el banner de cookies para poder interactuar con la página.
  //    Este era el paso que faltaba y bloqueaba toda la ejecución.
  await page.locator('text=¡Estoy de acuerdo!').click();

  // 3. Llenar el campo de búsqueda y presionar Enter.
  await page.fill('input[name="query"]', 'tecnologia');
  await page.press('input[name="query"]', 'Enter');

  // 4. Esperar a que el PRIMER resultado sea visible.
  await page.locator('.artifact-item').first().waitFor({ state: 'visible', timeout: 30000 });

  // 5. Verificar que el conteo de resultados sea mayor a cero.
  const resultsCount = await page.locator('.artifact-item').count();
  expect(resultsCount).toBeGreaterThan(0);
});
