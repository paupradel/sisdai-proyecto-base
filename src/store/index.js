import Vue from 'vue'
import Vuex from 'vuex'
import sisdaiAccesibilidad from 'sisdai-componentes/src/stores/accesibilidad'

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
      return state.navegacion_gobierno_abierta
    },
    estaNavegacionPrincipalAbierta(state) {
      return state.navegacion_principal_abierta
    },
    estaNavegacionSubmenu1Abierta(state) {
      return state.navegacion_submenu_abierto
    },

    cdnArchivos(state) {
      // Aquí puedes completar la ruta para el cdn. El dominio ddepende del ambiente,
      // pero la ruta a los archivos deberá coincidir en ambos dominios
      return `${state.cdn_archivos_dominio}/`
    },

    versionProyecto(state) {
      return state.version_proyecto
    },
    actualizacionProyecto(state) {
      return state.actualizacion_proyecto
    },
    entornoProyecto(state) {
      return state.entorno_proyecto
    },
  },
  mutations: {
    abrirNavegacionGobierno(state) {
      state.navegacion_gobierno_abierta = true
    },
    cerrarNavegacionGobierno(state) {
      state.navegacion_gobierno_abierta = false
    },
    abrirNavegacionPrincipal(state) {
      state.navegacion_principal_abierta = true
    },
    cerrarNavegacionPrincipal(state) {
      state.navegacion_principal_abierta = false
    },
    abrirNavegacionSubmenu1(state) {
      state.navegacion_submenu_abierto = true
    },
    cerrarNavegacionSubmenu1(state) {
      state.navegacion_submenu_abierto = false
    },
  },
}

export default new Vuex.Store({
  modules: {
    navegacion,
    sisdaiAccesibilidad,
  },
})
