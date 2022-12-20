<template>
  <div id="app" :class="a11yClass">
    <NavegacionGobMx />
    <NavegacionPrincipal />
    <MenuAccesibilidad />
    <router-view/>
    <BotonFlotante
      texto="Descarga"
      enlace="#"
     />
    <InfoDespliegue />
    <PiePaginaConacyt />
    <PiePaginaGobMx />
  </div>
</template>

<script>
import NavegacionGobMx from '@/components/navegacion/NavegacionGobMx.vue'
import NavegacionPrincipal from '@/components/navegacion/NavegacionPrincipal.vue'
import PiePaginaGobMx from './components/piepagina/PiePaginaGobMx.vue'
import PiePaginaConacyt from './components/piepagina/PiePaginaConacyt.vue'
import MenuAccesibilidad from './components/accesibilidad/MenuAccesibilidad.vue'
import BotonFlotante from './components/herramientas/BotonFlotante.vue'
import InfoDespliegue from "@/components/herramientas/InfoDespliegue.vue"

export default {
  components: {
    NavegacionGobMx,
    NavegacionPrincipal,
    PiePaginaGobMx,
    PiePaginaConacyt,
    MenuAccesibilidad,
    BotonFlotante,
    InfoDespliegue
  },
  computed: {
    a11yClass() {
      return {
        'a11y-tipografia': this.$store.getters.tieneTipografiaAccesible,
        'a11y-simplificada': this.$store.getters.tieneVistaSimplificada,
        'a11y-hipervinculos': this.$store.getters.tieneEnlacesSubrayados,
      };
    }
  }
}
</script>

<style lang="scss">
  @import 'node_modules/sisdai-css/src/eni.scss';
</style>
