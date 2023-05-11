import Vue from 'vue'
import Vuex from 'vuex'
import { accesibilidad } from 'sisdai-componentes/src/stores'

Vue.use(Vuex)

accesibilidad.state.cambio_tipografia = false
accesibilidad.state.tamanio_fuente = 16

accesibilidad.getters.clasesAccesibles = state => ({
  'a11y-tipografia': state.tipografia_accesible,
  'a11y-simplificada': state.vista_simplificada,
  'a11y-hipervinculos': state.enlaces_subrayados,
  'a11y-tamanio': state.cambio_tipografia,
  'a11y-zoom': state.cambio_zoom,
})

accesibilidad.mutations.incrementarTamanioTipografia = function (state) {
  state.cambio_tipografia = true
  if (state.tamanio_fuente > 47) {
    state.tamanio_fuente = 48
  } else {
    state.tamanio_fuente++
  }
  let tamanio_arriba = `${state.tamanio_fuente}px`
  document.documentElement.style.setProperty(
    '--tipografia-tamanio',
    tamanio_arriba
  )
  console.log(state.tamanio_fuente + 'px')
}
accesibilidad.mutations.reducirTamanioTipografia = function (state) {
  state.cambio_tipografia = true
  if (state.tamanio_fuente < 2) {
    state.tamanio_fuente = 1
  } else {
    state.tamanio_fuente--
  }
  let tamanio_abajo = `${state.tamanio_fuente}px`
  document.documentElement.style.setProperty(
    '--tipografia-tamanio',
    tamanio_abajo
  )
}
accesibilidad.mutations.restablecer = function (state) {
  state.tipografia_accesible = false
  state.vista_simplificada = false
  state.enlaces_subrayados = false
  state.cambio_tipografia = false
  document.documentElement.style.setProperty('--tipografia-tamanio', '16')
  document.documentElement.style.scale = 1
}

accesibilidad.state.zoom = 1
accesibilidad.state.cambio_zoom = false

accesibilidad.mutations.incrementarZoom = function (state) {
  state.cambio_zoom = true
  state.zoom += 0.1
  document.documentElement.style.scale = state.zoom
  // document.documentElement.style.zoom = state.zoom
  // document.documentElement.style.MozTransform = `scale(${state.zoom})`
  // document.documentElement.style.WebkitTransform = `scale(${state.zoom})`
  console.log(parseInt(state.zoom * 100) + '%')
  console.log(state.tamanio_fuente + 'px')
}

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    accesibilidad,
  },
})
