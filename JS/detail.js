const ciudadSeleccionada = localStorage.getItem("ciudadSeleccionada");

function cargarDetalle() {
    if (!ciudadSeleccionada) {
        document.getElementById("city-title").textContent = "Ciudad no encontrada";
        return;
    }

    document.getElementById("city-title").textContent = `Clima en ${ciudadSeleccionada}`;

    const climaActual = {
        temperatura: "22°C",
        humedad: "58%",
        viento: "12 km/h",
        estado: "Soleado"
    };

    document.getElementById("clima-actual").innerHTML = `
        <div class="card shadow-sm">
            <div class="card-body text-center">
                <h4 class="mb-3">${climaActual.estado}</h4>
                <p class="mb-1"><strong>Temperatura:</strong> ${climaActual.temperatura}</p>
                <p class="mb-1"><strong>Humedad:</strong> ${climaActual.humedad}</p>
                <p class="mb-1"><strong>Viento:</strong> ${climaActual.viento}</p>
            </div>
        </div>
    `;

    const dias = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

    const pronosticoEl = document.getElementById("pronostico");
    pronosticoEl.innerHTML = ""; 

    dias.forEach(dia => {
        const col = document.createElement("div");
        col.className = "col-6 col-md-3";

        col.innerHTML = `
            <div class="card text-center shadow-sm">
                <div class="card-body">
                    <h6>${dia}</h6>
                    <p class="mb-1">🌤️</p>
                    <p class="text-muted">20°C - 25°C</p>
                </div>
            </div>
        `;

        pronosticoEl.appendChild(col);
    });
}

document.addEventListener("DOMContentLoaded", cargarDetalle);
