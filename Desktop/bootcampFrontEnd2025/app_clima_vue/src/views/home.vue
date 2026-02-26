<script>
import { ciudades } from "../data";

export default {
    data() {
        return {
            ciudades,
            busqueda: ""
        };
    },
    computed: {
        ciudadesFiltradas() {
            return this.ciudades.filter(c =>
                c.city.toLowerCase().includes(this.busqueda.toLowerCase())
            );
        }
    }
};
</script>

<template>
    <div class="container mt-4">
        <h2 class="text-center mb-4">Clima por ciudad</h2>

        <div class="mb-4">
            <input v-model="busqueda" type="text" class="form-control" placeholder="Buscar ciudad..." />
        </div>

        <div class="row">
            <div v-for="ciudad in ciudadesFiltradas" :key="ciudad.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div class="card shadow-sm h-100 text-center">
                    <div class="card-body">
                        <h5>{{ ciudad.city }}</h5>
                        <p class="text-muted">{{ ciudad.region }}</p>

                        <router-link class="btn btn-primary btn-sm" :to="`/detail/${ciudad.id}`">
                            Ver detalle
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>