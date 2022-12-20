<template>
  <div>
    <PortadaCover
      :esCapitulo="true"
    /> <!-- TODO:pendiente de revisión -->
    
    <div class="contenedor ancho-lectura m-y-10">
      <p class="titulo-pagina">Inicio</p>

      <div class="grid">
        <div class="columna-8 columna-16-esc m-y-5">
          <BotonDescarga
            descripcion="Tenetur molestias iusto ducimus cumque eligendi quod, porro quos iste facere ut, eum veritatis debitis voluptate nemo sunt obcaecati."
            :url_descarga="`${cdnArchivosSargazo}/comunidad-involucrada-en-adaptacion-y-mitigacion-de-sargazo-en-mexico-y-otros-paises.zip`"
          />
        </div> 
        <!-- <div class="columna-8 columna-16-esc">
          <h3>boton-info + boton-conacyt</h3>
          <button class="boton-info">Mas Info</button>
          <a class="boton boton-conacyt" href="https://conacyt.mx/" target="_blank">
            <img src="https://conacyt.mx/wp-content/uploads/2021/10/logo_conacyt_con_sintagma_azul_completo.svg" alt="Conacyt" height="28px">
          </a>
        </div> -->
      </div>

      <div class="boton-flotante-simplficado m-y-1" :class="{'a11y-simplificada-ocultar': !tieneVistaSimplificada}">
        <a href="#">
          <b>Descarga</b>
        </a>
      </div>


    </div>
  </div>
</template>

<script>
import PortadaCover from '@/components/herramientas/PortadaCover.vue';
import BotonDescarga from '@/components/herramientas/BotonDescarga.vue';

import { mapGetters } from "vuex";
export default {
  name: 'PaginaInicio',
  components: {
    PortadaCover,
    BotonDescarga,
  },
  computed: {
    ...mapGetters(["cdnArchivosSargazo"]),
    tieneVistaSimplificada() {
      return this.$store.getters.tieneVistaSimplificada;
    },
  },
}
</script>

<style lang="scss" scoped>
.a11y-simplificada-ocultar {
  display: none;
}
</style>