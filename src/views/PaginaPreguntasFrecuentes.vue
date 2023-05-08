<script setup>
import informacion from '@/assets/data/preguntas-frecuentes-ejemplo.json'

const preguntas = informacion
</script>

<template>
  <div class="contenedor ancho-lectura m-y-10">
    <h1>Preguntas Frecuentes</h1>
    <div
      class="p-y-1"
      v-for="(pregunta, index) in preguntas"
      :key="`pregunta-${index}`"
    >
      <p class="parrafo-texto-alto">{{ index + 1 }}. {{ pregunta.pregunta }}</p>
      <p
        class="parrafo-general"
        v-for="(respuesta, index) in pregunta.respuesta"
        :key="`respuesta-${index}`"
      >
        {{ respuesta }}
      </p>
    </div>
  </div>
</template>
