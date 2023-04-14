<script setup>
import BotonFlotante from './components/herramientas/BotonFlotante.vue'
import InfoDespliegue from '@/components/herramientas/InfoDespliegue.vue'
import { computed } from 'vue'
import store from '@/store/index.js'

import NavegacionPrincipalBase from './components/navegacion/NavegacionPrincipalBase.vue'

const a11yClass = computed(() => ({
  'a11y-tipografia': store.state.sisdaiAccesibilidad.tipografia_accesible,
  'a11y-simplificada': store.state.sisdaiAccesibilidad.vista_simplificada,
  'a11y-hipervinculos': store.state.sisdaiAccesibilidad.enlaces_subrayados,
}))

function mutarAccesibilidad({ accion }) {
  store.commit(`sisdaiAccesibilidad/${accion}`)
}

function limpiarClasesAccesibles() {
  store.commit('sisdaiAccesibilidad/limpiarClasesAccesibles')
}
</script>

<template>
  <div
    id="app"
    :class="a11yClass"
  >
    <NavegacionGobMx />
    <NavegacionPrincipalBase />
    <MenuAccesibilidad
      @alSeleccionarOpcion="mutarAccesibilidad"
      @restablecer="limpiarClasesAccesibles"
    />
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
