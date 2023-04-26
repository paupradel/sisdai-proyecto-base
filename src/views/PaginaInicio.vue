<script setup>
import { onBeforeUnmount, onMounted } from 'vue'

function calHeight() {
  const innerheight = window.innerHeight / 100
  document
    .querySelector(':root')
    .style.setProperty('--vh', `${innerheight.toString()}px`)
}

calHeight()

onMounted(() => {
  window.addEventListener('resize', calHeight)
})

onBeforeUnmount(() => {
  window.addEventListener('resize', calHeight)
})
</script>

<template>
  <div>
    <div
      class="contenedor-portada"
      style="height: 90vh"
    >
      <img
        class="portada"
        src="http://placekitten.com/970/980"
      />
      <div class="degradado-negro-abajo">
        <div class="contenido-abajo">
          <div class="contenedor ancho-lectura">
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
