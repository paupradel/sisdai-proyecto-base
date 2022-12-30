<template>
  <div>
    <PortadaCover
      :esCapitulo="true"
    /> <!-- TODO:pendiente de revisión -->
    
    <div class="contenedor ancho-lectura m-y-10">
      <p class="titulo-pagina">Inicio</p>
    </div>
  </div>
</template>

<script>
import PortadaCover from '@/components/herramientas/PortadaCover.vue';
export default {
  name: 'PaginaInicio',
  components: {
    PortadaCover,
  },
}
</script>
