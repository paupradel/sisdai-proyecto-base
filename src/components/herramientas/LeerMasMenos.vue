<template>
  <div class="sisdai-leer-mas-menos">
    <div class="texto-corto">
      <slot name="texto-corto" />
    </div>
    <div class="texto-largo" :style="styleObject">
      <slot name="texto-largo" />
    </div>
    <button class="boton-primario boton-chico btn-leer-mas-menos"
      v-if="!tieneVistaSimplificada"
      @click="alternarMaxHeight">
      {{ abierto ? "Leer menos": "Leer más" }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'LeerMasMenos',
  props: {
    alto_max: {
      type: String,
      default: '370px'
    }
  },
  data() { 
    return {
      abierto: false,
      max_height: '0px'
    }
  },
  computed: {
    tieneVistaSimplificada() {
      return this.$store.getters.tieneVistaSimplificada;
    },
    computedMaxHeight() {
      return this.max_height;
    },
    styleObject() {
      if(this.tieneVistaSimplificada) {
        return {'max-height': this.alto_max}
      }
      return {'max-height': this.computedMaxHeight};
    }
  },
  methods: {
    alternarMaxHeight() {
      this.abierto === false
        ? this.max_height = this.alto_max : this.max_height = '0px';
      this.abierto = !this.abierto;
    }
  }
}
</script>

<style scoped lang="scss">
.sisdai-leer-mas-menos {
  .texto-corto {
    * {
      margin-bottom: 0;
    }
  }
  .texto-largo {
    max-height: 0;
    overflow: hidden;
    transition: all .33s ease-in-out;
  }
  .btn-leer-mas-menos {
    margin-top: 16px;
  }
}
</style>
