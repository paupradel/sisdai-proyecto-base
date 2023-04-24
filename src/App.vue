<script setup>
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

const infoDespliegue = {
  version_proyecto: process.env.PACKAGE_VERSION,
  actualizacion_proyecto: process.env.DATE_DEPLOY,
  entorno_proyecto: process.env.ENV_DEPLOY,
}
</script>

<template>
  <div
    id="app"
    :class="a11yClass"
  >
    <SisdaiNavegacionGobMx />
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
    <SisdaiInfoDeDespliegue
      :versionProyecto="infoDespliegue.version_proyecto"
      :entornoProyecto="infoDespliegue.entorno_proyecto"
      :actualizacionProyecto="infoDespliegue.actualizacion_proyecto"
    />
    <SisdaiPiePaginaConacyt />
    <SisdaiPiePaginaGobMx />
  </div>
</template>

<style lang="scss">
@import 'node_modules/sisdai-css/src/eni.scss';

.overflow-hidden {
  overflow: hidden;
}
</style>
