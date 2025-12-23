const contenedor = document.getElementById("localidades");

function loadCities() {
    cities.forEach(({ region, city }) => {

        const col = document.createElement("div");
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3 weather__col";

        col.innerHTML = `
            <article class="card shadow-sm h-100 place-card">
                <div class="card-body text-center place-card__body">
                    <h5 class="card-title place-card__title">
                        ${city}
                    </h5>
                    <p class="card-text text-muted place-card__region">
                        ${region}
                    </p>
                    <button class="btn btn-primary btn-sm ver-detalle place-card__button">
                        Ver detalle
                    </button>
                </div>
            </article>
        `;

        col.querySelector(".ver-detalle").addEventListener("click", () => {
            localStorage.setItem("ciudadSeleccionada", city);
            window.location.href = "detail.html";
        });

        contenedor.appendChild(col);
    });
}

document.addEventListener("DOMContentLoaded", loadCities);
