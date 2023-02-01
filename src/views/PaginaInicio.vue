<template>
  <div>
    <div class="contenedor-portada">
      <img class="portada" src="http://placekitten.com/970/980" />
      <div class="degradado-negro-abajo">
        <div class="contenido-abajo">
          <div class="contenedor ancho-fijo">
            <p class="titulo-eni texto-centrado">Título de ENI</p>
          </div>
        </div>
      </div>
    </div>
    <div class="contenedor ancho-lectura m-y-10">
      <p class="titulo-pagina">Inicio</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginaInicio',
  methods: {
    calHeight() {
      const innerheight = window.innerHeight / 100;
      document
        .querySelector(":root")
        .style.setProperty("--vh", `${innerheight.toString()}px`);
    }
  },
  created() {
    this.calHeight();
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.calHeight);
  },
  beforeUnmount() {
    window.addEventListener("scroll", this.onScroll);
    window.addEventListener("resize", this.calHeight);
  }
}
</script>

<style lang="scss">
.contenedor-portada {
  height: calc(100vh - 92px);
  @media (max-width: map-get($breakpoints, 'esc')) {
    height: calc(100 * var(--vh) - 120px);
  }
  #v-escritorio {
    display: none;
    @media (min-width: map-get($breakpoints, 'esc')) {
      display: block;
    }
  }
  #v-movil {
    display: block;
    @media (min-width: map-get($breakpoints, 'esc')) {
      display: none;
    }
  }
}
</style>