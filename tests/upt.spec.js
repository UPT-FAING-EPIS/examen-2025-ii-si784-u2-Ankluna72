
const { test, expect } = require('@playwright/test');

test('Buscar tesis de tecnologia en el repositorio de la UPT', async ({ page }) => {
  // 1. Navegar a la página del repositorio.
  await page.goto('https://repositorio.upt.edu.pe/');

  // 2. Llenar el campo de búsqueda.
  await page.fill('input[name="query"]', 'tecnologia');

  // 3. Preparar la espera para la próxima página (la de resultados)
  //    y enviar el formulario, todo al mismo tiempo.
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }), // Esperar a que la nueva página cargue completamente
    page.press('input[name="query"]', 'Enter') // Presionar Enter para enviar
  ]);

  // 4. En la nueva página, verificar que existan los resultados.
  const resultsCount = await page.locator('.artifact-item').count();
  expect(resultsCount).toBeGreaterThan(0);
});
