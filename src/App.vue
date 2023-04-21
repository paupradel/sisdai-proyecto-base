<script setup>
import InfoDespliegue from '@/components/herramientas/InfoDespliegue.vue'
import { computed } from 'vue'
import store from '@/store/index.js'

import NavegacionPrincipalBase from './components/navegacion/NavegacionPrincipalBase.vue'
import SisdaiMenuAccesibilidad from 'sisdai-componentes/src/componentes/menu-accesibilidad/SisdaiMenuAccesibilidad'
import SisdaiBotonFlotante from 'sisdai-componentes/src/componentes/boton-flotante/SisdaiBotonFlotante'

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
    <NavegacionPrincipalBase />
    <SisdaiMenuAccesibilidad
      @alSeleccionarOpcion="mutarAccesibilidad"
      @restablecer="limpiarClasesAccesibles"
    />
    <router-view />
    <SisdaiBotonFlotante
      :enlaces="[
        {
          clasesCss: 'icono-resaltado',
          icono: 'icono-documento icono-3',
        },
      ]"
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
