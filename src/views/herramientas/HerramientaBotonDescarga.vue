<template>
  <div class="contenedor ancho-lectura m-y-10">
    <p class="titulo-pagina">BotonDescarga</p>
    <p>
      El componente
      <code
        class="language-html"
        v-text="`<BotonDescarga />`"
      ></code>
      más permite descargar archivos ya sea individuales o comprimidos. Se
      recomienda utilizar una ruta cdn en donde contega almacenado el documento
      evitando cargarlo al proyecto y mejorando la eficiencia del sitio.
    </p>
    <BotonDescarga
      descripcion="Tenetur molestias iusto ducimus cumque eligendi quod, porro quos iste facere ut, eum veritatis debitis voluptate nemo sunt obcaecati."
      :url_descarga="`${cdnPrueba}.zip`"
    />
  </div>
</template>

<script>
import BotonDescarga from '@/components/herramientas/BotonDescarga.vue'

// import { component as VueCodeHighlight } from 'vue-code-highlight';
// import "vue-code-highlight/themes/prism-tomorrow.css";

export default {
  components: {
    BotonDescarga,
    // VueCodeHighlight,
  },
  computed: {
    tieneVistaSimplificada() {
      return this.$store.getters.tieneVistaSimplificada
    },
  },
  data() {
    return {
      cdnPrueba: '/archivo',
    }
  },
}
</script>

<style lang="scss">
.a11y-simplificada-ocultar {
  display: none;
}
</style>
