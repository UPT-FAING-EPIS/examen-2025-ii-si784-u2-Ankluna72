
const { test, expect } = require('@playwright/test');

test('Buscar tesis de tecnologia en el repositorio de la UPT', async ({ page }) => {
  // 1. Navegar a la página del repositorio.
  await page.goto('https://repositorio.upt.edu.pe/');

  // 2. Aceptar el banner de cookies SI APARECE (paso opcional).
  // Se intenta hacer clic con un timeout corto. Si no aparece, se ignora el error y se continúa.
  await page.locator('text=¡Estoy de acuerdo!').click({ timeout: 5000 }).catch(() => {
    console.log('Banner de cookies no encontrado o ya aceptado en 5s. Continuando...');
  });

  // 3. Llenar el campo de búsqueda y presionar Enter.
  await page.fill('input[name="query"]', 'tecnologia');
  await page.press('input[name="query"]', 'Enter');

  // 4. Esperar a que el PRIMER resultado sea visible.
  await page.locator('.artifact-item').first().waitFor({ state: 'visible', timeout: 30000 });

  // 5. Verificar que el conteo de resultados sea mayor a cero.
  const resultsCount = await page.locator('.artifact-item').count();
  expect(resultsCount).toBeGreaterThan(0);
});
