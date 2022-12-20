<template>
  <div class="portada-cover">
    <div class="cover" :class="{'tieneImagen': !tieneVideo, 'a11y-simplificada-ocultar': tieneVistaSimplificada}">
      <video v-if="tieneVideo" 
        class="video" autoplay muted loop 
        poster="@/assets/video/flores_v2.jpg">
        <!-- Cambiar source en caso de ser video -->
        <source src="@/assets/video/flores_v2.mp4" type="video/mp4">
      </video>
      <div class="cover-gradient">
        <p v-if="esCapitulo" class="cover-title titulo-capitulo">{{ titulo_capitulo }}</p>
        <p v-else class="cover-title titulo-eni">{{ titulo_eni }}</p>
        <p v-if="esCapitulo" class="cover-subtitle subtitulo-capitulo">{{ subtitulo_capitulo }}</p>
      </div>
    </div>

    <div class="contenedor ancho-lectura m-y-10" :class="{'a11y-simplificada-block': !tieneVistaSimplificada}">
      <p v-if="esCapitulo" class="cover-title titulo-capitulo">{{ titulo_capitulo }}</p>
      <p v-else class="cover-title titulo-eni">{{ titulo_eni }}</p>
      <p v-if="esCapitulo" class="cover-subtitle subtitulo-capitulo">{{ subtitulo_capitulo }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortadaCover',
  props: {
    esCapitulo: {
      type: Boolean,
      default: true
    },
    tieneVideo: {
      type: Boolean,
      default: false
    },
    titulo_eni: {
      type: String,
      default: "Título de un Ecosistema Nacional Informático"
    },
    titulo_capitulo: {
      type: String,
      default: "Título de capítulo o subcapítulo perteneciente a un ENI"
    },
    subtitulo_capitulo: {
      type: String,
      default: "Un capítulo del Ecosistema Nacional Informático de PRONACE"
    }
  },
  computed: {
    tieneVistaSimplificada() {
      return this.$store.getters.tieneVistaSimplificada;
    },
  }
}
</script>

<style lang="scss" scoped>
.portada-cover {
  .a11y-simplificada-block {
    display: none;
  }
  .cover {    
    background: #223;
    background-size: cover;
    background-position: center top;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    text-align: center;
    &.tieneImagen {
      background: #223;
      background-image: url("https://picsum.photos/1600/1000");
      // background-image: url(@/assets/img/inicio/h264prueba1.gif); // GIF o JPG
      background-size: cover;
      background-position: center top;
      height: 100vh;
      width: 100%;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      text-align: center;
      @include mediaquery('mov') {
        background-image: url("https://picsum.photos/800/800");
        // background-image: url(@/assets/img/inicio/movilprueba.gif); // GIF o JPG
      }
    }
    &.a11y-simplificada-ocultar {
      display: none;
    }
    .video {
      position: absolute;
      left: 0;
      top: 92px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      &.hidden{
        display: none;
      }
    }
    .cover-gradient {
      background: linear-gradient( rgba(0,0,0,.0), rgba(0,0,0,1));
      box-sizing: border-box;
      padding: 80px 24px;
      flex: 1;
      position: relative;
      z-index: 2;
      @include mediaquery('mov') {
        padding: 16px 24px;
      }
      .cover-title {
        color: var(--tipografia-color-1);
        font-weight: 500;
        max-width: 1156px;
        margin-top: 200px;
        margin-bottom: 8px;
        margin-left: auto;
        margin-right: auto;
      }
      .cover-subtitle {
        color: var(--tipografia-color-1);
        font-weight: 400;
        max-width: 500px;
        margin: 8px auto;
      }
    }
  }
}
</style>