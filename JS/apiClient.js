export default class ApiClient {
    async obtenerClima(lat, lon) {
        const url =
            `https://api.open-meteo.com/v1/forecast` +
            `?latitude=${lat}` +
            `&longitude=${lon}` +
            `&current_weather=true` +
            `&daily=temperature_2m_min,temperature_2m_max,weathercode` +
            `&timezone=auto`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Error al obtener datos del clima");
        }

        return await response.json();
    }
}