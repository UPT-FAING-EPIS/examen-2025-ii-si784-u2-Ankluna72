
const { test, expect } = require('@playwright/test');

test('Buscar tesis de tecnologia en el repositorio de la UPT', async ({ page }) => {
  // 1. Navegar a la página del repositorio.
  await page.goto('https://repositorio.upt.edu.pe/');

  // 2. Llenar el campo de búsqueda y presionar Enter.
  await page.fill('input[name="query"]', 'tecnologia');
  await page.press('input[name="query"]', 'Enter');

  // 3. ESPERAR a que el PRIMER resultado sea visible en la página.
  //    Esta es la forma más robusta de asegurar que la búsqueda fue exitosa.
  //    Le damos hasta 30 segundos para que aparezca.
  await page.locator('.artifact-item').first().waitFor({ state: 'visible', timeout: 30000 });

  // 4. Ahora que sabemos que hay resultados, verificar que el conteo sea mayor a cero.
  const resultsCount = await page.locator('.artifact-item').count();
  expect(resultsCount).toBeGreaterThan(0);
});
