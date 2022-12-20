import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const navegacion = {
  namespaced: false,
  state: {
    navegacion_gobierno_abierta: false,
    navegacion_principal_abierta: false,
    navegacion_submenu_abierto: false,

    cdn_archivos_dominio: process.env.VUE_APP_CDN_ARCHIVOS,

    version_proyecto: process.env.PACKAGE_VERSION,
    actualizacion_proyecto: process.env.DATE_DEPLOY,
    entorno_proyecto: process.env.ENV_DEPLOY,
  },
  getters: {
    estaNavegacionGobiernoAbierta(state) {
      return state.navegacion_gobierno_abierta;
    },
    estaNavegacionPrincipalAbierta(state) {
      return state.navegacion_principal_abierta;
    },
    estaNavegacionSubmenu1Abierta(state) {
      return state.navegacion_submenu_abierto;
    },

    cdnArchivosSargazo(state) {
      return `${state.cdn_archivos_dominio}/enis/energia/sargazo`;
    },

    versionProyecto(state) {
      return state.version_proyecto;
    },
    actualizacionProyecto(state) {
      return state.actualizacion_proyecto;
    },
    entornoProyecto(state) {
      return state.entorno_proyecto;
    },
  },
  mutations: {
    abrirNavegacionGobierno(state) {
      state.navegacion_gobierno_abierta = true;
    },
    cerrarNavegacionGobierno(state) {
      state.navegacion_gobierno_abierta = false;
    },
    abrirNavegacionPrincipal(state) {
      state.navegacion_principal_abierta = true;
    },
    cerrarNavegacionPrincipal(state) {
      state.navegacion_principal_abierta = false;
    },
    abrirNavegacionSubmenu1(state) {
      state.navegacion_submenu_abierto = true;
    },
    cerrarNavegacionSubmenu1(state) {
      state.navegacion_submenu_abierto = false;
    },
  }
}
const accesibilidad = {
  namespaced: false,
  state: {
    menu_accesibilidad_abierto: false,
    tipografia_accesible: false,
    vista_simplificada: false,
    enlaces_subrayados: false,
  },
  getters: {
    esteMenuAccesibilidadAbierto(state) {
      return state.menu_accesibilidad_abierto;
    },
    tieneTipografiaAccesible(state) {
      return state.tipografia_accesible;
    },
    tieneVistaSimplificada(state) {
      return state.vista_simplificada;
    },
    tieneEnlacesSubrayados(state) {
      return state.enlaces_subrayados;
    }
  },
  mutations: {
    alternarMenuAccesibilidad(state) {
      state.menu_accesibilidad_abierto = !state.menu_accesibilidad_abierto;
    },
    alternarTipografiaAccesible(state) {
      state.tipografia_accesible = !state.tipografia_accesible;
    },
    alternarVistaSimplificada(state) {
      state.vista_simplificada = !state.vista_simplificada;
    },
    alternarEnlacesSubrayados(state) {
      state.enlaces_subrayados = !state.enlaces_subrayados;
    },
    limpiarClasesAccesibles(state) {
      state.tipografia_accesible = false;
      state.vista_simplificada = false;
      state.enlaces_subrayados = false;
    }
  }
}

export default new Vuex.Store({
  modules: {
    navegacion,
    accesibilidad
  }
})
