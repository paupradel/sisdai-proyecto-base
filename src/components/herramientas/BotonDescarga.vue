<template>
  <div id="btn_descarga">
    <a class="boton-descarga"
      :href="url_descarga"
      download="comunidad-involucrada-en-adaptacion-y-mitigacion-de-sargazo-en-mexico-y-otros-paises.zip"
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
      default: '#'
    },
    titulo: {
      type: String,
      default: 'Archivo de descarga'
    },
    descripcion: {
      type: String,
      default: 'Tenetur molestias iusto ducimus cumque eligendi quod, porro quos iste facere ut, eum veritatis debitis voluptate nemo sunt obcaecati.'
    }
  },
}
</script>

<style lang="scss" scoped>
#btn_descarga {
  .boton-descarga {
    text-decoration: none;
  }
}
</style>