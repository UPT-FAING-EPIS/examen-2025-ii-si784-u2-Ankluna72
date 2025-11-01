
const { test, expect } = require('@playwright/test');

test('Buscar tesis de tecnologia en el repositorio de la UPT', async ({ page }) => {
  // 1. Navegar a la página del repositorio.
  await page.goto('https://repositorio.upt.edu.pe/');

  // 2. Aceptar el banner de cookies SI APARECE (paso opcional y no bloqueante).
  await page.locator('text=¡Estoy de acuerdo!').click({ timeout: 5000 }).catch(() => {
    console.log('Banner de cookies no encontrado o ya aceptado. Continuando...');
  });

  // 3. Llenar el campo de búsqueda.
  await page.fill('input[name="query"]', 'tecnologia');

  // 4. HACER CLIC en el botón de búsqueda por su TIPO (la forma más robusta).
  //    Buscamos el botón con type="submit" dentro del formulario de búsqueda.
  await page.locator('form[action="/discover"] button[type="submit"]').click();

  // 5. Esperar a que el PRIMER resultado sea visible en la página de resultados.
  await page.locator('.artifact-item').first().waitFor({ state: 'visible' });

  // 6. Verificar que el conteo de resultados sea mayor a cero.
  const resultsCount = await page.locator('.artifact-item').count();
  expect(resultsCount).toBeGreaterThan(0);
});
