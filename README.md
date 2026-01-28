# España Quiz

## Descripción del Proyecto

**España Quiz** es una aplicación interactiva diseñada para ayudar a los usuarios a prepararse para el examen de Conocimientos Constitucionales y Socioculturales de España (CCSE), un requisito para obtener la nacionalidad española. La aplicación ofrece una forma amena y efectiva de estudiar y poner a prueba los conocimientos sobre la cultura, historia, gobierno y sociedad de España.

## Características Principales

- **Quizzes por Tareas:** La aplicación se divide en 5 tareas temáticas, reflejando la estructura del temario oficial del CCSE.
  - Tarea 1: Gobierno, legislación y participación ciudadana.
  - Tarea 2: Derechos y deberes fundamentales.
  - Tarea 3: Geografía física y política de España.
  - Tarea 4: Cultura, historia y sociedad españolas.
  - Tarea 5: Vida cotidiana y trámites administrativos.
- **Simulación de Examen:** Un modo de examen que simula la prueba real con 25 preguntas seleccionadas de las diferentes tareas.
- **Banco de Preguntas:** Una sección para revisar el listado completo de preguntas y sus respuestas correctas, ideal para estudiar.
- **Resultados Detallados:** Al final de cada quiz o simulación, el usuario recibe un resumen de sus resultados, destacando los aciertos y los errores para facilitar el repaso.
- **Diseño Responsivo:** Interfaz adaptable a dispositivos móviles y de escritorio.
- **Espacios Publicitarios:** Marcadores de posición de anuncios integrados para una futura monetización con plataformas como Google AdSense.

## Tecnología Utilizada

Este proyecto está construido con un stack de tecnologías moderno y robusto:

- **Framework:** [Next.js](https://nextjs.org/) (con App Router)
- **Librería UI:** [React](https://react.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [ShadCN UI](https://ui.shadcn.com/)
- **Inteligencia Artificial:** [Genkit](https://firebase.google.com/docs/genkit) (para futuras funcionalidades de IA)

## Estructura del Proyecto

- `src/app/`: Contiene las rutas y páginas principales de la aplicación.
- `src/components/`: Almacena los componentes reutilizables de React, como las tarjetas de preguntas, los banners de anuncios y los elementos de la interfaz de usuario.
- `src/lib/`: Incluye la lógica de negocio, los datos (como `questions.ts`), y funciones de utilidad.
- `src/ai/`: Preparado para integrar flujos de Inteligencia Artificial con Genkit.

## Cómo Empezar

Para ejecutar el proyecto en un entorno de desarrollo local:

1.  **Instalar dependencias:**
    ```bash
    npm install
    ```
2.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

Esto iniciará la aplicación en `http://localhost:9002`.
