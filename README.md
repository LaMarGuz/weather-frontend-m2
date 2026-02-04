# Weather Frontend – App de Clima

Aplicación web de clima desarrollada como proyecto académico, que muestra información climática real en tiempo real para distintas ciudades de Chile.

El proyecto utiliza Programación Orientada a Objetos (POO), JavaScript moderno (ES6+) y consumo de una API externa de clima mediante programación asíncrona.

---

## 📌 Descripción del proyecto

La aplicación presenta un listado de localidades en la vista principal (Home).  
Cada localidad muestra su clima actual y permite acceder a una vista de detalle, donde se despliega:

- Clima actual
- Pronóstico semanal
- Estadísticas de la semana
- Alertas climáticas simples

La navegación entre vistas se realiza mediante almacenamiento en `localStorage`.

---

## 🧱 Estructura del proyecto y clases

### 🔹 `WeatherApp`
Clase principal que controla la lógica de la aplicación.

Responsabilidades:
- Cargar y renderizar las ciudades en la vista Home
- Obtener los datos de clima desde la API
- Renderizar el detalle de una ciudad
- Calcular estadísticas semanales
- Generar alertas climáticas

### 🔹 `ApiClient`
Clase encargada del consumo de la API de clima.

Responsabilidades:
- Realizar peticiones HTTP usando `fetch`
- Manejar asincronía con `async / await`
- Procesar la respuesta JSON

### 🔹 `data.js`
Archivo que contiene únicamente información base de las ciudades:
- Nombre
- Región
- Coordenadas geográficas (latitud y longitud)

No contiene datos climáticos fijos.

---

## 🌍 API de Clima utilizada

La aplicación consume datos reales en tiempo real desde la API pública **Open-Meteo**.

- 🌐 Sitio oficial: https://open-meteo.com
- 📡 Endpoint base: https://api.open-meteo.com/v1/forecast
- 🔑 No requiere API Key
- ⏱️ Datos actualizados automáticamente

Datos utilizados:
- Temperatura actual
- Pronóstico diario (mínima y máxima)
- Códigos de estado del clima

---

## 📊 Estadísticas semanales

A partir del pronóstico semanal obtenido desde la API, la aplicación calcula dinámicamente:

- Temperatura mínima semanal
- Temperatura máxima semanal
- Temperatura promedio
- Cantidad de días soleados, nublados y lluviosos

---

## 🚨 Alertas climáticas

Se implementa una sección de alertas simples, basada en reglas:

- 🔥 **Alerta de calor**: si el promedio semanal supera los 25 °C
- 🌧️ **Semana lluviosa**: si hay 3 o más días con lluvia

Estas alertas se generan automáticamente a partir de los datos de la API.

---

## 🎨 Estilos y maquetación

- Bootstrap 5
- Sass como preprocesador CSS
- Metodología BEM para la organización de clases
- Estilos modulares (_base, _layout, _components, _variables)

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- Sass
- Bootstrap 5
- JavaScript ES6+
- Fetch API
- Programación Orientada a Objetos
- Git y GitHub

---

## 🚀 Ejecución del proyecto

Para que la aplicación funcione correctamente, debe ejecutarse desde un servidor local (por ejemplo, Live Server), ya que utiliza módulos ES6 y consumo de API externa.

---

## 🔗 Repositorio en GitHub

https://github.com/LaMarGuz/weather-frontend-m2