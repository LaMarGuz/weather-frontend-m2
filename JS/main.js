const contenedor = document.getElementById("localidades");

function loadCities() {
    cities.forEach(({ region, city }) => {

        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

        col.innerHTML = `
            <div class="card shadow-sm h-100">
                <div class="card-body text-center">
                    <h5 class="card-title">${city}</h5>
                    <p class="card-text text-muted">${region}</p>
                    <button class="btn btn-primary btn-sm ver-detalle">Ver detalle</button>
                </div>
            </div>
        `;

        col.querySelector(".ver-detalle").addEventListener("click", () => {
            localStorage.setItem("ciudadSeleccionada", city);
            window.location.href = "detail.html";
        });

        contenedor.appendChild(col);
    });
}

document.addEventListener("DOMContentLoaded", loadCities);