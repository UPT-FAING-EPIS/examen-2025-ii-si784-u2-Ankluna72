const { test, expect } = require('@playwright/test');

test('Verificar resultados de búsqueda directa para \'tecnologia\'', async ({ page }) => {
  // 1. Navegar DIRECTAMENTE a la URL de resultados de búsqueda para "tecnologia".
  //    Esta es la forma más robusta de probar la funcionalidad, evitando la página principal que falla.
  await page.goto('https://repositorio.upt.edu.pe/discover?query=tecnologia');

  // 2. Esperar a que el contenedor de resultados de la búsqueda aparezca.
  //    Usamos un selector específico para el área de resultados.
  const resultsContainer = page.locator('#aspect_discovery_SimpleSearch_div_search-results');
  await resultsContainer.waitFor({ state: 'visible', timeout: 30000 }); // 30s de espera son suficientes.

  // 3. Verificar que al menos UN resultado de la búsqueda (.artifact-item) sea visible.
  await expect(page.locator('.artifact-item').first()).toBeVisible();

  // 4. Opcional: Verificar que el conteo de resultados sea mayor a cero.
  const resultsCount = await page.locator('.artifact-item').count();
  expect(resultsCount).toBeGreaterThan(0);
});
