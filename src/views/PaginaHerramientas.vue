<template>
  <menu-lateral-composicion-fija>
    <template v-slot:menu>
      <menu-lateral :elementos="elementos"></menu-lateral>
    </template>
    <template v-slot:vista>
      <router-view />
    </template>
  </menu-lateral-composicion-fija>
</template>

<script>
import MenuLateral from '@/components/herramientas/MenuLateral'
import MenuLateralComposicionFija from '@/components/herramientas/MenuLateralComposicionFija'

export default {
  components: {
    MenuLateral,
    MenuLateralComposicionFija,
  },
  beforeMount() {
    if (this.$route.meta.indice) {
      this.indice = this.$route.meta.indice
    } else {
      this.indice = []
    }
  },
  watch: {
    $route(to) {
      if (to.meta.indice) {
        this.indice = to.meta.indice
      } else {
        this.indice = []
      }
    },
  },
  data() {
    return {
      elementos: {
        routerlinks: [
          {
            id: 'intro',
            titulo: 'Introduccion',
            url: '/herramientas/intro',
            clase: 'menu-routerlink router-link-exact-active',
            icono: '',
          },
          {
            id: 'sisdai_leer_mas_menos',
            titulo: 'LeerMasMenos',
            url: '/herramientas/leer-mas-menos',
            clase: 'menu-routerlink',
            icono: '',
          },
          {
            id: 'boton_descarga',
            titulo: 'BotonDescarga',
            url: '/herramientas/boton-descarga',
            clase: 'menu-routerlink',
            icono: '',
          },
          {
            id: 'sisdai_modal',
            titulo: 'Modal',
            url: '/herramientas/modal',
            clase: 'menu-routerlink',
            icono: '',
          },
          {
            id: 'visdona',
            titulo: 'Donas',
            url: '/donas',
            clase: 'menu-routerlink',
            icono: '',
          },
          {
            id: 'vis',
            titulo: 'Otra vis',
            url: '/vis',
            clase: 'menu-routerlink',
            icono: '',
          },
          {
            id: 'lineas',
            titulo: 'Lineas',
            url: '/lineas',
            clase: 'menu-routerlink',
            icono: '',
          },
          {
            id: 'barras',
            titulo: 'Barras',
            url: '/barras',
            clase: 'menu-routerlink',
            icono: '',
          },
          {
            id: 'cajas',
            titulo: 'Cajas y bigotes',
            url: '/cajas',
            clase: 'menu-routerlink',
            icono: '',
          },
          {
            id: 'area',
            titulo: 'Area',
            url: '/area',
            clase: 'menu-routerlink',
            icono: '',
          },
        ],
        links: [
          {
            id: 'github',
            titulo: 'Ir a Github',
            url: 'https://github.com/salsa-community/sisdai-graficas',
            clase: 'menu-github',
            icono: 'icono-social-github',
            target: '_blank',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
:root {
  --menu-lateral-fondo: #ded5ff;
  --submenu-lateral-fondo: #d0ccff;
  --menu-lateral-accion: #0101fc;
}
.menu-routerlink {
  background: transparent;
  color: var(--tipografia-color-3, #333);
  font-weight: 400;
  text-decoration: none;
  @media (hover: hover) {
    &:hover {
      background: var(--submenu-lateral-fondo);
      color: var(--menu-lateral-accion, #00f);
    }
  }
  &.router-link-exact-active {
    background: #f6f6f6;
    box-shadow: inset 8px 0 0 var(--menu-lateral-accion, #00f);
    color: var(--menu-lateral-accion, #00f);
  }
}
.menu-github {
  background: transparent;
  color: var(--tipografia-color-3, #333);
  font-weight: 400;
  font-size: 14px;
  text-decoration: none;
  span {
    display: block;
    margin: 0 8px;
    &::before {
      font-size: 60px;
    }
  }
  &:focus,
  &:active,
  &:hover {
    color: var(--menu-lateral-accion, #00f);
    box-shadow: none;
  }
}
</style>
