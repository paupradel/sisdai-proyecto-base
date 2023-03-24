<template>
  <transition name="fade">
    <div
      class="modal"
      :class="overflowYX"
      v-if="esta_abierto"
    >
      <div
        class="modal-fondo-trasero"
        @click="cerrarModal()"
      />
      <div
        class="modal-contenedor"
        :class="tamanio"
      >
        <div class="modal-encabezado">
          <slot name="encabezado" />
          <button
            class="btn-icono icono-cerrar modal-cerrar"
            @click="cerrarModal()"
          ></button>
        </div>
        <div class="modal-cuerpo">
          <slot name="cuerpo" />
        </div>
        <div class="modal-pie">
          <slot name="pie" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalComponente',
  data() {
    return {
      esta_abierto: false,
    }
  },
  props: {
    tamanio: {
      type: String,
      default: 'chico',
    },
  },
  beforeMount() {
    window.addEventListener('keyup', this.onEscapeKeyUp)
  },
  beforeDestroy() {
    window.removeEventListener('keyup', this.onEscapeKeyUp)
  },
  methods: {
    cerrarModal() {
      this.esta_abierto = false
      document.querySelector('body').classList.remove('overflow-hidden')
    },
    abrirModal() {
      this.esta_abierto = true
      document.querySelector('body').classList.add('overflow-hidden')
    },
    onEscapeKeyUp(event) {
      if (event.which === 27) {
        this.cerrarModal()
      }
    },
  },
  computed: {
    overflowYX() {
      if (this.tamanio === 'pantalla-completa') {
        return 'overflow-x-y'
      }
      return ''
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  @include mediaquery('mov') {
    top: inherit;
  }
  &.overflow-x-y {
    top: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  &-fondo-trasero {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &-contenedor {
    background-color: #fff;
    position: relative;
    margin: 120px auto;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 24px;
    z-index: 2;
    @include mediaquery('mov') {
      margin: inherit;
      padding: 24px 24px 40px;
    }
    &.chico {
      width: 462px;
      @include mediaquery('mov') {
        width: 100%;
        border-radius: 20px 20px 0px 0px;
      }
    }
    &.mediano {
      width: 616px;
      @include mediaquery('mov') {
        width: 100%;
        border-radius: 20px 20px 0px 0px;
      }
    }
    &.grande {
      width: 924px;
      @include mediaquery('mov') {
        width: 100%;
        border-radius: 20px 20px 0px 0px;
      }
    }
    &.pantalla-completa {
      width: 100%;
      height: auto;
      margin: 0px;
      border-radius: 0px;
    }
  }
  button.modal-cerrar {
    background: none;
    box-shadow: none;
    border: none;
    padding: 8px;
    color: #000;
    font-weight: 700;
    margin-left: auto;
    font-size: 16px;
    &:hover {
      color: #000;
    }
  }
  &-encabezado {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &-cuerpo {
  }
  &-pie {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
