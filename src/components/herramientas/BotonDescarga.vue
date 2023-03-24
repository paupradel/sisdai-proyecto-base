<template>
  <div id="btn_descarga">
    <a
      class="boton-descarga"
      :class="{ 'text-none-decoration': !tieneVistaSimplificada }"
      :href="url_descarga"
      :download="`${url_descarga}.zip`"
    >
      <p class="titulo">{{ titulo }}</p>
      <div class="descripcion">
        <p class="texto">{{ descripcion }}</p>
        <span class="icono-archivo-descargar"></span>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'BotonDescarga',
  props: {
    url_descarga: {
      type: String,
      default: '#',
    },
    titulo: {
      type: String,
      default: 'Archivo de descarga',
    },
    descripcion: {
      type: String,
      default:
        'Tenetur molestias iusto ducimus cumque eligendi quod, porro quos iste facere ut, eum veritatis debitis voluptate nemo sunt obcaecati.',
    },
  },
  computed: {
    tieneVistaSimplificada() {
      return this.$store.getters.tieneVistaSimplificada
    },
  },
}
</script>

<style lang="scss" scoped>
#btn_descarga {
  .boton-descarga {
    &.text-none-decoration {
      text-decoration: none;
    }
  }
}
</style>
