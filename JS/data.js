const pronosticos = {
    norteSoleado: [
        { dia: "Lun", min: 18, max: 28, estado: "soleado" },
        { dia: "Mar", min: 17, max: 27, estado: "soleado" },
        { dia: "Mié", min: 18, max: 29, estado: "soleado" },
        { dia: "Jue", min: 17, max: 26, estado: "nublado" },
        { dia: "Vie", min: 18, max: 28, estado: "soleado" },
        { dia: "Sáb", min: 19, max: 30, estado: "soleado" },
        { dia: "Dom", min: 18, max: 27, estado: "soleado" }
    ],

    centroMixto: [
        { dia: "Lun", min: 9, max: 22, estado: "soleado" },
        { dia: "Mar", min: 8, max: 21, estado: "nublado" },
        { dia: "Mié", min: 7, max: 20, estado: "soleado" },
        { dia: "Jue", min: 6, max: 18, estado: "lluvioso" },
        { dia: "Vie", min: 8, max: 21, estado: "soleado" },
        { dia: "Sáb", min: 9, max: 23, estado: "soleado" },
        { dia: "Dom", min: 8, max: 22, estado: "nublado" }
    ],

    surLluvioso: [
        { dia: "Lun", min: 6, max: 14, estado: "lluvioso" },
        { dia: "Mar", min: 5, max: 13, estado: "lluvioso" },
        { dia: "Mié", min: 6, max: 15, estado: "nublado" },
        { dia: "Jue", min: 4, max: 12, estado: "lluvioso" },
        { dia: "Vie", min: 5, max: 13, estado: "lluvioso" },
        { dia: "Sáb", min: 6, max: 14, estado: "nublado" },
        { dia: "Dom", min: 7, max: 15, estado: "nublado" }
    ],

    extremoSurFrio: [
        { dia: "Lun", min: 2, max: 9, estado: "nublado" },
        { dia: "Mar", min: 1, max: 8, estado: "lluvioso" },
        { dia: "Mié", min: 0, max: 7, estado: "nublado" },
        { dia: "Jue", min: 1, max: 8, estado: "lluvioso" },
        { dia: "Vie", min: 2, max: 9, estado: "nublado" },
        { dia: "Sáb", min: 3, max: 10, estado: "nublado" },
        { dia: "Dom", min: 2, max: 9, estado: "lluvioso" }
    ]
};

const lugares = [
    { id: "arica", city: "Arica", region: "Arica y Parinacota", climaActual: { temperatura: 25, humedad: 60, viento: 15, estado: "Soleado" }, pronosticoSemanal: pronosticos.norteSoleado },
    { id: "iquique", city: "Iquique", region: "Tarapacá", climaActual: { temperatura: 23, humedad: 65, viento: 18, estado: "Soleado" }, pronosticoSemanal: pronosticos.norteSoleado },
    { id: "antofagasta", city: "Antofagasta", region: "Antofagasta", climaActual: { temperatura: 22, humedad: 70, viento: 20, estado: "Nublado" }, pronosticoSemanal: pronosticos.norteSoleado },
    { id: "copiapo", city: "Copiapó", region: "Atacama", climaActual: { temperatura: 24, humedad: 40, viento: 12, estado: "Soleado" }, pronosticoSemanal: pronosticos.norteSoleado },
    { id: "la-serena", city: "La Serena", region: "Coquimbo", climaActual: { temperatura: 20, humedad: 75, viento: 18, estado: "Nublado" }, pronosticoSemanal: pronosticos.centroMixto },
    { id: "valparaiso", city: "Valparaíso", region: "Valparaíso", climaActual: { temperatura: 19, humedad: 80, viento: 20, estado: "Nublado" }, pronosticoSemanal: pronosticos.centroMixto },
    { id: "santiago", city: "Santiago", region: "Región Metropolitana", climaActual: { temperatura: 22, humedad: 58, viento: 12, estado: "Soleado" }, pronosticoSemanal: pronosticos.centroMixto },
    { id: "rancagua", city: "Rancagua", region: "O’Higgins", climaActual: { temperatura: 21, humedad: 55, viento: 10, estado: "Soleado" }, pronosticoSemanal: pronosticos.centroMixto },
    { id: "talca", city: "Talca", region: "Maule", climaActual: { temperatura: 20, humedad: 60, viento: 11, estado: "Nublado" }, pronosticoSemanal: pronosticos.centroMixto },
    { id: "chillan", city: "Chillán", region: "Ñuble", climaActual: { temperatura: 18, humedad: 65, viento: 10, estado: "Lluvioso" }, pronosticoSemanal: pronosticos.surLluvioso },
    { id: "concepcion", city: "Concepción", region: "Biobío", climaActual: { temperatura: 17, humedad: 78, viento: 16, estado: "Nublado" }, pronosticoSemanal: pronosticos.surLluvioso },
    { id: "temuco", city: "Temuco", region: "La Araucanía", climaActual: { temperatura: 16, humedad: 80, viento: 14, estado: "Lluvioso" }, pronosticoSemanal: pronosticos.surLluvioso },
    { id: "valdivia", city: "Valdivia", region: "Los Ríos", climaActual: { temperatura: 15, humedad: 85, viento: 15, estado: "Lluvioso" }, pronosticoSemanal: pronosticos.surLluvioso },
    { id: "puerto-montt", city: "Puerto Montt", region: "Los Lagos", climaActual: { temperatura: 14, humedad: 88, viento: 18, estado: "Lluvioso" }, pronosticoSemanal: pronosticos.surLluvioso },
    { id: "coyhaique", city: "Coyhaique", region: "Aysén", climaActual: { temperatura: 12, humedad: 82, viento: 22, estado: "Nublado" }, pronosticoSemanal: pronosticos.extremoSurFrio },
    { id: "punta-arenas", city: "Punta Arenas", region: "Magallanes", climaActual: { temperatura: 10, humedad: 80, viento: 30, estado: "Lluvioso" }, pronosticoSemanal: pronosticos.extremoSurFrio }
];
