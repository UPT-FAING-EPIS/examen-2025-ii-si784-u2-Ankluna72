[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/bTwXPjqC)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=21411673)

# Examen II - SI784

**Alumno:** Jefferson Rosas Chambilla

---

## Ejercicio: Pruebas de UI para el Repositorio de la UPT

Este proyecto implementa una solución de pruebas automatizadas de interfaz de usuario (UI) para el repositorio de trabajos académicos de la UPT, basada en la siguiente historia de usuario:

> **Como** estudiante de la UPT,
> **Quiero** encontrar tesis de tecnología en el Repositorio de la UPT
> **Para** investigar sobre tecnologías recientes y tener referencias.

### Solución Implementada

Se ha utilizado **Playwright** como framework para la automatización de pruebas web, cumpliendo con todos los requisitos de la tarea.

#### 1. Prueba de Interfaz de Usuario

- El script de prueba se encuentra en `tests/upt.spec.js`.
- Este script simula a un usuario real:
  1.  Abre la página del repositorio (`https://repositorio.upt.edu.pe/`).
  2.  Introduce el término "tecnologia" en la barra de búsqueda.
  3.  Hace clic en el botón de búsqueda.
  4.  Verifica que la página de resultados contenga al menos un elemento, cumpliendo con el criterio de aceptación.

#### 2. Automatización con GitHub Actions

- Se ha configurado un flujo de trabajo en `.github/workflows/playwright.yml`.
- Este flujo se activa automáticamente con cada `push` o `pull request` al repositorio.
- El trabajo (`job`) realiza los siguientes pasos:
    1. Configura el entorno de Node.js.
    2. Instala las dependencias del proyecto.
    3. Instala los navegadores necesarios para Playwright.
    4. **Ejecuta las pruebas**.
    5. Sube los reportes generados como un artefacto del workflow.

#### 3. Ejecución Multi-navegador y Grabación de Video

- El archivo de configuración `playwright.config.js` está definido para ejecutar las pruebas en dos navegadores distintos: **Chromium (Chrome)** y **Firefox**.
- La opción `video: 'on'`  ha sido habilitada para **grabar un video** de cada ejecución de prueba.

### ¿Cómo ver los resultados?

1.  Navega a la pestaña **Actions** en este repositorio de GitHub.
2.  Haz clic en el workflow más reciente (llamado "Playwright Tests").
3.  Una vez que la ejecución haya finalizado, en la sección **Artifacts**, encontrarás un archivo llamado `playwright-report`.
4.  Descarga y descomprime este archivo para ver el reporte HTML interactivo y los **videos** de las pruebas ejecutadas en cada navegador.
