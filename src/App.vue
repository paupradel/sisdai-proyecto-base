<script setup>
import store from '@/store'
import { ref } from 'vue'

import NavegacionPrincipalBase from './components/navegacion/NavegacionPrincipalBase.vue'

const infoDespliegue = {
  version_proyecto: process.env.PACKAGE_VERSION,
  actualizacion_proyecto: process.env.DATE_DEPLOY,
  entorno_proyecto: process.env.ENV_DEPLOY,
}

// Agregando nueva opcion al menú de accesbilidad
const clasesAccesibles = ref([])

function eliminarClase(claseCss) {
  clasesAccesibles.value = clasesAccesibles.value.filter(
    clase => clase !== claseCss
  )
}

// eslint-disable-next-line
function agregarClases({ accion, claseCss }) {
  if (!clasesAccesibles.value.includes(claseCss)) {
    clasesAccesibles.value.push(claseCss)
  } else {
    eliminarClase(claseCss)
  }
}

const incrementarTamanioTipo = {
  accion: 'incrementarTamanioTipografia',
  claseCss: 'a11y-tamanio',
  icono: 'icono-estrella',
  titulo: 'Incrementar tamanio tipografia',
}
const reducirTamanioTipo = {
  accion: 'reducirTamanioTipografia',
  claseCss: 'a11y-tamanio',
  icono: 'icono-estrella',
  titulo: 'Reducir tamanio tipografia',
}
</script>

<template>
  <div
    id="app"
    :class="store.getters['accesibilidad/clasesAccesibles']"
  >
    <SisdaiNavegacionGobMx />
    <NavegacionPrincipalBase />
    <SisdaiMenuAccesibilidad
      :objetoStore="store"
      :agregarOpciones="[incrementarTamanioTipo, reducirTamanioTipo]"
      @alSeleccionarOpcion="agregarClases"
      @restablecer="clasesAccesibles = []"
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
