import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/home.vue";
import Detail from "./views/detail.vue";
import About from "./views/about.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/detail/:id", component: Detail, props: true },
    { path: "/about", component: About }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});