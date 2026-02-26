<template>
  <nav class="navbar navbar-dark bg-primary navbar-expand">
    <div class="container">
      <span class="navbar-brand">Clima Chile</span>

      <div>
        <router-link to="/" class="btn btn-light btn-sm me-2">Inicio</router-link>
        <router-link to="/about" class="btn btn-light btn-sm">Acerca de</router-link>
      </div>
    </div>
  </nav>

  <div class="container mt-4">
    <router-view />
  </div>
</template>