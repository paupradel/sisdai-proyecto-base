<script setup>
import NavegacionGobMx from '@/components/navegacion/NavegacionGobMx.vue'
import NavegacionPrincipal from '@/components/navegacion/NavegacionPrincipal.vue'
import PiePaginaGobMx from './components/piepagina/PiePaginaGobMx.vue'
import PiePaginaConacyt from './components/piepagina/PiePaginaConacyt.vue'
import MenuAccesibilidad from './components/accesibilidad/MenuAccesibilidad.vue'
import BotonFlotante from './components/herramientas/BotonFlotante.vue'
import InfoDespliegue from '@/components/herramientas/InfoDespliegue.vue'
import { computed } from 'vue'
import store from '@/store/index.js'

const a11yClass = computed(() => ({
  'a11y-tipografia': store.getters.tieneTipografiaAtkinson,
  'a11y-simplificada': store.getters.tieneVistaSimplificada,
  'a11y-hipervinculos': store.getters.tieneEnlacesSubrayados,
}))
</script>

<template>
  <div
    id="app"
    :class="a11yClass"
  >
    <NavegacionGobMx />
    <NavegacionPrincipal />
    <MenuAccesibilidad />
    <router-view />
    <BotonFlotante
      texto="Descarga"
      enlace="#"
    />
    <InfoDespliegue />
    <PiePaginaConacyt />
    <PiePaginaGobMx />
  </div>
</template>

<style lang="scss">
@import 'node_modules/sisdai-css/src/eni.scss';

.overflow-hidden {
  overflow: hidden;
}
</style>
