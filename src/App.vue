<script setup>
import NavegacionGobMx from '@/components/navegacion/NavegacionGobMx.vue'
import NavegacionPrincipal from '@/components/navegacion/NavegacionPrincipal.vue'
import PiePaginaGobMx from './components/piepagina/PiePaginaGobMx.vue'
import PiePaginaConacyt from './components/piepagina/PiePaginaConacyt.vue'
import BotonFlotante from './components/herramientas/BotonFlotante.vue'
import InfoDespliegue from '@/components/herramientas/InfoDespliegue.vue'
import { computed } from 'vue'
import store from '@/store/index.js'

import SisdaiMenuAccesibilidad from 'sisdai-componentes/src/components/menu-accesibilidad'

const a11yClass = computed(() => ({
  'a11y-tipografia': store.state.sisdaiAccesibilidad.tipografia_accesible,
  'a11y-simplificada': store.state.sisdaiAccesibilidad.vista_simplificada,
  'a11y-hipervinculos': store.state.sisdaiAccesibilidad.enlaces_subrayados,
}))
</script>

<template>
  <div
    id="app"
    :class="a11yClass"
  >
    <NavegacionGobMx />
    <NavegacionPrincipal />
    <!-- <MenuAccesibilidad /> -->
    <SisdaiMenuAccesibilidad
      @alSeleccionarOpcion="
        accion => store.commit(`sisdaiAccesibilidad/${accion}`)
      "
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
