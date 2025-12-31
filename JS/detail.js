const ciudadSeleccionada = localStorage.getItem("ciudadSeleccionada");

function obtenerLugar(nombre) {
    return lugares.find(l => l.city === nombre);
}

function calcularEstadisticas(pronostico) {
    const temperaturasMin = pronostico.map(d => d.min);
    const temperaturasMax = pronostico.map(d => d.max);

    const min = Math.min(...temperaturasMin);
    const max = Math.max(...temperaturasMax);
    const promedio = (
        temperaturasMin.reduce((a, b) => a + b, 0) +
        temperaturasMax.reduce((a, b) => a + b, 0)
    ) / (pronostico.length * 2);

    const conteo = { soleado: 0, nublado: 0, lluvioso: 0 };
    pronostico.forEach(d => conteo[d.estado]++);

    let resumen = "Semana variable";
    if (conteo.soleado > conteo.nublado && conteo.soleado > conteo.lluvioso) {
        resumen = "Semana mayormente soleada";
    } else if (conteo.lluvioso > conteo.soleado) {
        resumen = "Semana lluviosa";
    }

    return { min, max, promedio: promedio.toFixed(1), conteo, resumen };
}

function cargarDetalle() {
    const lugar = obtenerLugar(ciudadSeleccionada);

    if (!lugar) {
        document.getElementById("city-title").textContent = "Ciudad no encontrada";
        return;
    }

    document.getElementById("city-title").textContent = `Clima en ${lugar.city}`;

    document.getElementById("clima-actual").innerHTML = `
        <div class="card shadow-sm">
            <div class="card-body text-center">
            <h4>${lugar.climaActual.estado}</h4>
            <p><strong>Temperatura:</strong> ${lugar.climaActual.temperatura}°C</p>
            <p><strong>Humedad:</strong> ${lugar.climaActual.humedad}%</p>
            <p><strong>Viento:</strong> ${lugar.climaActual.viento} km/h</p>
            </div>
        </div>
    `;

    const pronosticoEl = document.getElementById("pronostico");
    pronosticoEl.innerHTML = "";

    lugar.pronosticoSemanal.forEach(dia => {
        pronosticoEl.innerHTML += `
        <div class="col-6 col-md-3">
            <div class="card text-center shadow-sm">
                <div class="card-body">
                    <h6>${dia.dia}</h6>
                    <p>${dia.estado}</p>
                    <p>${dia.min}°C - ${dia.max}°C</p>
                </div>
            </div>
        </div>
    `;
    });

    const stats = calcularEstadisticas(lugar.pronosticoSemanal);

    pronosticoEl.insertAdjacentHTML("afterend", `
        <section class="mt-4">
            <h4>Estadísticas de la semana</h4>
            <p>Temperatura mínima: ${stats.min}°C</p>
            <p>Temperatura máxima: ${stats.max}°C</p>
            <p>Promedio semanal: ${stats.promedio}°C</p>
            <p>Días soleados: ${stats.conteo.soleado}</p>
            <p>Días nublados: ${stats.conteo.nublado}</p>
            <p>Días lluviosos: ${stats.conteo.lluvioso}</p>
            <strong>${stats.resumen}</strong>
        </section>
    `);
}

document.addEventListener("DOMContentLoaded", cargarDetalle);
