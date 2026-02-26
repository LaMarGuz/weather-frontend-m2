# Weather Frontend – App de Clima (SPA Vue)

Aplicación web de clima desarrollada como proyecto académico que muestra información climática real en tiempo real para distintas ciudades de Chile.

Esta versión corresponde a una evolución del proyecto original, migrado a una arquitectura SPA utilizando Vue.js.

## 📌 Descripción del proyecto

La aplicación presenta un listado de ciudades en la vista principal (Home).

Cada ciudad permite acceder a una vista de detalle donde se muestra:

- Clima actual en tiempo real
- Pronóstico semanal
- Interpretación del estado del clima

La navegación se realiza dinámicamente sin recargar la página gracias a Vue Router.

## 🔄 Evolución del proyecto

Versión anterior:

- JavaScript modular con POO
- Navegación mediante localStorage
- Renderizado manual del DOM

Versión actual:

- Arquitectura SPA con Vue 3
- Vue Router para navegación
- Componentes reutilizables
- Renderizado reactivo
- Mejor experiencia de usuario

## 🔎 Funcionalidades principales

### ✔ Clima en tiempo real
Los datos se obtienen desde la API Open-Meteo utilizando coordenadas geográficas.

### ✔ Pronóstico semanal
Se muestran temperaturas mínimas y máximas para los próximos días.

### ✔ Navegación SPA
Permite cambiar de vistas sin recargar la página.

### ✔ Búsqueda de ciudades
El usuario puede filtrar ciudades dinámicamente.

## 🧱 Estructura del proyecto
src/
├── views/
│ ├── Home.vue
│ ├── Detail.vue
│ └── About.vue
├── data.js
├── router.js
├── main.js
└── App.vue

## 🌍 API de Clima utilizada

La aplicación consume datos en tiempo real desde:

🌐 https://open-meteo.com  
📡 Endpoint: https://api.open-meteo.com/v1/forecast  
🔑 No requiere API Key  

Datos utilizados:

- Temperatura actual
- Pronóstico diario
- Códigos meteorológicos

## 🎨 Estilos y maquetación

- Bootstrap 5
- Diseño responsivo
- Componentes reutilizables

## 🛠️ Tecnologías utilizadas

- Vue 3
- Vue Router
- JavaScript ES6+
- Bootstrap 5
- Fetch API
- Vite
- Git y GitHub

## 🚀 Ejecución del proyecto

Instalar dependencias:
npm install

Ejecutar servidor de desarrollo:
npm run dev

## 👩‍💻 Autora

Mariel Guzmán  
Proyecto académico — Bootcamp Frontend 2025-2026