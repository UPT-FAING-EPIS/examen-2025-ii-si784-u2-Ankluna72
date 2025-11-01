const { test, expect } = require('@playwright/test');

test('Buscar tesis de tecnologia en el repositorio de la UPT', async ({ page }) => {
  // 1. Navegar a la página del repositorio.
  await page.goto('https://repositorio.upt.edu.pe/');

  // 2. Aceptar el banner de cookies SI APARECE (opcional, no bloqueante).
  await page.locator('text=¡Estoy de acuerdo!').click({ timeout: 5000 }).catch(() => {
    console.log('Banner de cookies no encontrado o ya aceptado. Continuando...');
  });

  // 3. ESPERAR a que el formulario de búsqueda sea visible (la clave).
  const searchForm = page.locator('form[action="/discover"]');
  await searchForm.waitFor({ state: 'visible', timeout: 60000 }); // Espera hasta 1 min solo para el form.

  // 4. Llenar el campo de búsqueda (dentro del formulario ya visible).
  await searchForm.locator('input[name="query"]').fill('tecnologia');

  // 5. HACER CLIC en el botón de búsqueda (dentro del formulario ya visible).
  await searchForm.locator('button[type="submit"]').click();

  // 6. Esperar a que los resultados de la búsqueda aparezcan.
  const resultsContainer = page.locator('#aspect_discovery_SimpleSearch_div_search-results');
  await resultsContainer.waitFor({ state: 'visible', timeout: 60000 });

  // 7. Verificar que el conteo de resultados sea mayor a cero.
  const resultsCount = await page.locator('.artifact-item').count();
  expect(resultsCount).toBeGreaterThan(0);
});
