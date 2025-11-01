const { test, expect } = require('@playwright/test');

test('Prueba de CI garantizada para pasar', async () => {
  // Esta prueba es local, no depende de sitios externos y siempre pasará.
  // Su propósito es validar que el flujo de trabajo de CI/CD se ejecuta correctamente.
  expect(true).toBe(true);
});
