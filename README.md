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
- **Simulación de Examen:** Un modo de examen que simula la prueba real con 25 preguntas seleccionadas aleatoriamente con la distribución oficial. La interfaz de una sola página está diseñada para imitar las condiciones del examen real.
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
- `src/components/`: Almacena los componentes reutilizables de React. Se divide en subdirectorios como `quiz/` (para los componentes de las tareas) y `exam/` (para el simulacro de examen).
- `src/lib/`: Incluye la lógica de negocio, los datos (como `questions.ts`), y funciones de utilidad.
- `src/ai/`: Preparado para integrar flujos de Inteligencia Artificial con Genkit.

## Arquitectura de la Aplicación

La aplicación sigue una arquitectura moderna basada en el **App Router de Next.js**, aprovechando los **Server Components** para el renderizado inicial de las páginas y la obtención de datos, y los **Client Components** para la interactividad del lado del cliente.

-   **Componentes de Servidor:** Las páginas principales (`page.tsx`) se renderizan en el servidor, lo que mejora el rendimiento y el SEO. Se encargan de cargar los datos de las preguntas necesarias para cada vista.
-   **Componentes de Cliente:** Componentes como `QuizClient.tsx` (para las tareas) y `ExamClient.tsx` (para el simulacro) gestionan la lógica interactiva directamente en el navegador del usuario.
-   **Datos Locales:** Todas las preguntas y respuestas del test están almacenadas localmente en el archivo `src/lib/questions.ts`. Esto elimina la necesidad de peticiones a una base de datos externa, haciendo la aplicación más rápida y económica.
-   **Estructura de Componentes:** Se utilizan componentes reutilizables de **ShadCN UI** y componentes personalizados y especializados ubicados en `src/components/quiz/` y `src/components/exam/`.

## Flujos de Usuario

1.  **Página de Inicio:**
    -   El usuario llega a la página principal donde se le presentan las 5 tareas del CCSE para practicar.
    -   También tiene acceso a la opción "Simular Examen".

2.  **Realizar un Quiz por Tarea (Modo Práctica):**
    -   El usuario selecciona una tarea y es redirigido a la página del quiz correspondiente (ej. `/quiz/tarea-1`).
    -   El componente `QuizClient` carga las preguntas de esa tarea.
    -   El usuario responde a cada pregunta y recibe **feedback instantáneo** (correcto/incorrecto) antes de pasar a la siguiente.
    -   Al finalizar, es redirigido a la página de resultados (`/quiz/tarea-1/results`), donde ve su puntuación y un resumen de las preguntas falladas.

3.  **Simular Examen Completo (Modo Examen):**
    -   El usuario elige "Simular Examen" y accede a `/quiz/examen-simulado`.
    -   Se carga una selección **aleatoria** de 25 preguntas que representa la estructura del examen real.
    -   A diferencia de los quizzes por tarea, **se presentan todas las preguntas en una sola página** para simular una experiencia de examen real. El usuario responde a las preguntas sin recibir feedback inmediato.
    -   Tras responder, el usuario pulsa el botón "Ver Resultados" y se le muestra su puntuación final en la parte superior, con cada pregunta marcada visualmente como correcta o incorrecta.

4.  **Estudiar en el Banco de Preguntas:**
    -   El usuario accede a `/preguntas`.
    -   Se muestra un listado completo de todas las preguntas del test en formato de acordeón.
    -   El usuario puede expandir cada pregunta para ver las opciones y la respuesta correcta destacada.

## Producción

https://ccse.leinaro.com/

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
