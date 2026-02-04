import ApiClient from "./apiClient.js";
import WeatherApp from "./weatherApp.js";
import { ciudades } from "./data.js";

const app = new WeatherApp(new ApiClient(), ciudades);

document.addEventListener("DOMContentLoaded", async () => {
    const ciudadId = localStorage.getItem("ciudadSeleccionada");
    await app.cargarDetalle(ciudadId);
});