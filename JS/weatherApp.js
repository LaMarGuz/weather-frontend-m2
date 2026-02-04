export default class WeatherApp {
    constructor(apiClient, ciudades) {
        this.apiClient = apiClient;
        this.ciudades = ciudades;
    }

    traducirClima(code) {
        if (code === 0) return "soleado";
        if (code <= 3) return "nublado";
        if (code >= 61) return "lluvioso";
        return "nublado";
    }

    async cargarHome(contenedor) {
        contenedor.innerHTML = "<p>Cargando clima...</p>";

        try {
            contenedor.innerHTML = "";

            for (const ciudad of this.ciudades) {
                const data = await this.apiClient.obtenerClima(ciudad.lat, ciudad.lon);
                const temp = data.current_weather.temperature;

                const col = document.createElement("div");
                col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

                col.innerHTML = `
            <article class="card shadow-sm h-100">
                <div class="card-body text-center">
                    <h5>${ciudad.city}</h5>
                    <p class="text-muted">${ciudad.region}</p>
                    <p><strong>${temp}°C</strong></p>
                    <button class="btn btn-primary btn-sm">Ver detalle</button>
                </div>
            </article>
        `;

                col.querySelector("button").addEventListener("click", () => {
                    localStorage.setItem("ciudadSeleccionada", ciudad.id);
                    window.location.href = "detail.html";
                });

                contenedor.appendChild(col);
            }
        } catch (error) {
            contenedor.innerHTML = "<p>Error al cargar el clima</p>";
        }
    }

    calcularEstadisticas(pronostico) {
        const mins = pronostico.map(d => d.min);
        const maxs = pronostico.map(d => d.max);

        const min = Math.min(...mins);
        const max = Math.max(...maxs);
        const promedio = (
            mins.reduce((a, b) => a + b, 0) +
            maxs.reduce((a, b) => a + b, 0)
        ) / (pronostico.length * 2);

        const conteo = { soleado: 0, nublado: 0, lluvioso: 0 };
        pronostico.forEach(d => conteo[d.estado]++);

        return { min, max, promedio: promedio.toFixed(1), conteo };
    }

    calcularAlertas(pronostico) {
        const lluvias = pronostico.filter(d => d.estado === "lluvioso").length;
        const promedio =
            pronostico.reduce((a, d) => a + (d.min + d.max) / 2, 0) / pronostico.length;

        const alertas = [];

        if (promedio > 25) alertas.push("🔥 Alerta de calor");
        if (lluvias >= 3) alertas.push("🌧️ Semana lluviosa");

        return alertas;
    }

    async cargarDetalle(ciudadId) {
        const ciudad = this.ciudades.find(c => c.id === ciudadId);
        if (!ciudad) return;

        const data = await this.apiClient.obtenerClima(ciudad.lat, ciudad.lon);

        document.getElementById("city-title").textContent = `Clima en ${ciudad.city}`;

        document.getElementById("clima-actual").innerHTML = `
        <div class="card shadow-sm text-center">
            <div class="card-body">
                <h4>${data.current_weather.temperature}°C</h4>
            </div>
        </div>
    `;

        const pronostico = data.daily.time.map((fecha, i) => {
            const dia = new Date(fecha).toLocaleDateString("es-CL", {
                weekday: "short"
            });

            return {
                dia: dia.charAt(0).toUpperCase() + dia.slice(1),
                min: data.daily.temperature_2m_min[i],
                max: data.daily.temperature_2m_max[i],
                estado: this.traducirClima(data.daily.weathercode[i])
            };
        });

        const cont = document.getElementById("pronostico");
        cont.innerHTML = "";

        pronostico.forEach(d => {
            cont.innerHTML += `
    <div class="col-6 col-md-3">
        <div class="card text-center shadow-sm">
            <div class="card-body">
                <h6>${d.dia}</h6>
                <p>${d.estado}</p>
                <p>${d.min}°C - ${d.max}°C</p>
            </div>
        </div>
    </div>
    `;
        });

        const stats = this.calcularEstadisticas(pronostico);
        const alertas = this.calcularAlertas(pronostico);

        cont.insertAdjacentHTML(
            "afterend",
            `
        <section class="mt-4">
        <h4>Estadísticas</h4>
        <p>Mín: ${stats.min}°C</p>
        <p>Máx: ${stats.max}°C</p>
        <p>Promedio: ${stats.promedio}°C</p>
        <p>Soleados: ${stats.conteo.soleado}</p>
        <p>Lluviosos: ${stats.conteo.lluvioso}</p>
        <h5>Alertas</h5>
        ${alertas.length ? alertas.join("<br>") : "Sin alertas"}
        </section>
        `
        );
    }
}