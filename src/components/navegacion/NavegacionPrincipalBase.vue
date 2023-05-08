<script setup>
import { ref } from 'vue'

const sisdai_nav_ppal = ref('')

function alternarSubmenu() {
  sisdai_nav_ppal.value._setupState.alternarSubmenu()
}
</script>

<template>
  <SisdaiNavegacionPrincipal
    ref="sisdai_nav_ppal"
    :nav-informacion="`Sección: <b>${$route.name}</b>`"
  >
    <ul class="nav-menu">
      <li>
        <router-link
          class="nav-hipervinculo"
          to="/"
          exact
          >Inicio</router-link
        >
      </li>
      <li class="nav-contenedor-submenu">
        <button
          class="nav-boton-submenu"
          @click="alternarSubmenu"
        >
          Submenu
        </button>
        <ul class="nav-submenu">
          <li>
            <button
              class="nav-boton-regresar"
              @click="alternarSubmenu"
            >
              Submenu
            </button>
          </li>
          <li>
            <RouterLink
              class="nav-hipervinculo"
              to="/ejem"
              >Subsección 1</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="nav-hipervinculo"
              to="/ejem"
              >Subsección 2</RouterLink
            >
          </li>
        </ul>
      </li>
      <li>
        <router-link
          class="nav-hipervinculo"
          to="/creditos"
          >Créditos</router-link
        >
      </li>
      <li>
        <router-link
          class="nav-hipervinculo"
          to="/preguntas-frecuentes"
          >Preguntas Frecuentes</router-link
        >
      </li>
    </ul>
  </SisdaiNavegacionPrincipal>
</template>
