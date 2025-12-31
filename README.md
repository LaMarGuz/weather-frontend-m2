# weather-frontend-m2
app de clima

Proyecto frontend desarrollado como parte de una actividad académica, enfocado en la organización de estilos CSS utilizando Sass y metodologías de modularización.

## 📌 Descripción del proyecto
La aplicación muestra un listado de localidades organizadas en cards. Cada card permite acceder a un detalle de la localidad seleccionada, almacenando la información mediante `localStorage`.

El diseño está construido sobre Bootstrap 5 y estilos personalizados compilados desde Sass.

## Modelado de datos

La aplicación trabaja con un arreglo de objetos llamado `lugares`, donde cada elemento representa una ciudad del país.  
Cada ciudad contiene su nombre, región y un arreglo `pronosticoSemanal` con la información climática de los siete días de la semana.

Cada día del pronóstico incluye:
- Temperatura mínima
- Temperatura máxima
- Tipo de clima (soleado, nublado o lluvioso)

Este enfoque permite separar completamente los datos del HTML y manejarlos de forma dinámica desde JavaScript.

## Estadísticas semanales

A partir del pronóstico semanal de cada ciudad, la aplicación calcula dinámicamente:
- Temperatura mínima de la semana
- Temperatura máxima de la semana
- Temperatura promedio semanal
- Cantidad de días por tipo de clima (soleados, nublados y lluviosos)

Además, se genera un resumen textual automático del estado del tiempo semanal.  
Por ejemplo:
- “Semana mayormente soleada”
- “Semana fría con algunas lluvias”
- “Semana mayormente nublada”

El resumen se obtiene comparando la cantidad de días según el tipo de clima utilizando condicionales en JavaScript.

## 🎨 Organización de estilos
Para los estilos se utilizó **Sass** como preprocesador, lo que permite dividir el CSS en archivos más pequeños y mantenibles.

Se aplicó principalmente la metodología **BEM (Block Element Modifier)** para:
- Mejorar la legibilidad del código
- Facilitar el mantenimiento
- Evitar conflictos entre estilos

La estructura Sass separa:
- estilos base
- componentes reutilizables
- layout general

## 🛠️ Tecnologías utilizadas
- HTML5
- CSS3
- Sass
- Bootstrap 5
- JavaScript (ES6)
- Git y GitHub

## 🔗 Repositorio en GitHub
https://github.com/LaMarGuz/weather-frontend-m2
