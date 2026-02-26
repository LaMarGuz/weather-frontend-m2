<script>
import { ciudades } from "../data";

export default {
    props: ["id"],
    data() {
        return {
            ciudad: null,
            climaActual: null,
            pronostico: [],
            cargando: true
        };
    },

    async created() {
        this.ciudad = ciudades.find(c => c.id === this.id);
        await this.obtenerClima();
    },

    methods: {
        async obtenerClima() {
            try {
                const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.ciudad.lat}&longitude=${this.ciudad.lon}&current_weather=true&daily=temperature_2m_min,temperature_2m_max,weathercode&timezone=auto`;

                const res = await fetch(url);
                const data = await res.json();

                this.climaActual = data.current_weather;

                this.pronostico = data.daily.time.map((fecha, i) => {
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

            } catch (e) {
                alert("Error al cargar el clima");
            } finally {
                this.cargando = false;
            }
        },

        traducirClima(code) {
            if (code === 0) return "Soleado";
            if ([1, 2, 3].includes(code)) return "Nublado";
            if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "Lluvioso";
            return "Variable";
        }
    }
};
</script>

<template>
    <div v-if="cargando" class="text-center">
        <p>Cargando clima...</p>
    </div>

    <div v-else-if="ciudad">
        <h2 class="text-center mb-4">
            Clima en {{ ciudad.city }}
        </h2>

        <!-- clima actual -->
        <div class="card text-center shadow-sm mb-4">
            <div class="card-body">
                <h4>{{ traducirClima(climaActual.weathercode) }}</h4>
                <p><strong>Temperatura:</strong> {{ climaActual.temperature }}°C</p>
                <p><strong>Viento:</strong> {{ climaActual.windspeed }} km/h</p>
            </div>
        </div>

        <!-- pronóstico -->
        <div class="row">
            <div v-for="dia in pronostico" :key="dia.dia" class="col-6 col-md-3 mb-3">
                <div class="card text-center shadow-sm">
                    <div class="card-body">
                        <h6>{{ dia.dia }}</h6>
                        <p>{{ dia.estado }}</p>
                        <p>{{ dia.min }}°C - {{ dia.max }}°C</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>