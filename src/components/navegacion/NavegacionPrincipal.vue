<template>
  <nav class="navegacion navegacion-conacyt navegacion-pegada">
    <div class="nav-contenedor-identidad">
      <a href="https://conacyt.mx/" target="_blank" class="nav-hiperviculo-logo">
        <img class="nav-logo" width="130" height="38" src="@/assets/img/conacyt-azul.svg" alt="Conacyt.">
      </a>
      <button @click="toggleMenu" class="nav-boton-menu" :class="{ 'abierto': estaNavegacionPrincipalAbierta }">
        <span class="nav-icono-menu"></span>
      </button>
      <div class="nav-informacion">
        Sección: <b>{{ $route.name }}</b>
      </div>
    </div>
    <div class="nav-menu-contedor" :class="{ 'abierto': estaNavegacionPrincipalAbierta }">
      <div class="nav-menu-principal">
        <ul class="nav-menu">
          <li><router-link class="nav-hipervinculo" to="/">Inicio</router-link></li>
          <li class="nav-contenedor-submenu">
            <button class="nav-boton-submenu" @click="toggleSubmenu">Submenu</button>
            <ul class="nav-submenu" :class="{ 'abierto': estaNavegacionSubmenu1Abierta }">
              <li><button class="nav-boton-regresar" @click="toggleSubmenu">Submenu</button></li>
              <li><RouterLink class="nav-hipervinculo" to="/ejem">Subsección 1</RouterLink></li>
              <li><RouterLink class="nav-hipervinculo" to="/ejem">Subsección 2</RouterLink></li>
            </ul>
          </li>
          <li><router-link class="nav-hipervinculo" to="/creditos">Créditos</router-link></li>
          <li><router-link class="nav-hipervinculo" to="/preguntas-frecuentes">Preguntas Frecuentes</router-link></li>
          <li><router-link class="nav-hipervinculo" to="/herramientas/intro">Herramientas</router-link></li>
          <li><router-link class="nav-hipervinculo" to="/ayuda">Ayuda</router-link></li>
          <li><router-link class="nav-hipervinculo" to="/acerca-de">Acerca de</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavegacionGobMx',
    computed: {
      estaNavegacionPrincipalAbierta() {
        return this.$store.getters.estaNavegacionPrincipalAbierta;
      },
      estaNavegacionSubmenu1Abierta() {
        return this.$store.getters.estaNavegacionSubmenu1Abierta;
      },
    },
    methods: {
      toggleMenu() {
        if (this.$store.getters.estaNavegacionPrincipalAbierta) {
          this.$store.commit('cerrarNavegacionPrincipal');
        } else {
          if (this.$store.getters.estaNavegacionGobiernoAbierta) {
            this.$store.commit('cerrarNavegacionGobierno');
          }
          if (this.$store.getters.estaNavegacionSubmenu1Abierta) {
            this.$store.commit('cerrarNavegacionSubmenu1');
          }
          this.$store.commit('abrirNavegacionPrincipal');
        }
      },
      toggleSubmenu() {
        if (this.$store.getters.estaNavegacionSubmenu1Abierta) {
          this.$store.commit('cerrarNavegacionSubmenu1');
          this.$store.commit('abrirNavegacionPrincipal');
        } else {
          this.$store.commit('cerrarNavegacionPrincipal');
          this.$store.commit('abrirNavegacionSubmenu1');
        }
      }
    },
  };
</script>
