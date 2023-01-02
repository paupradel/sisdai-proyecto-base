<template>
  <div class="contenedor m-y-10">
    <div class="flex">
      <div class="columna-16">
        <h1>Herramientas (temporal)</h1>
        <p>Esto lo queremos hacer biblioteca externa en algun momento de la vida.</p>
      </div>
      <div class="columna-8">
        <HerramientaTarjeta />
      </div>
      <div class="columna-8">
        <HerramientaTarjeta />
      </div>
    </div>
  </div>
</template>

<script>
import HerramientaTarjeta from "@/components/herramientas/HerramientaTarjeta";
export default {
  components: {
    HerramientaTarjeta,
  },
}
</script>