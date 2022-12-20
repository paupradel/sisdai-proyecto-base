<template>
  <div class="acerca-de">
    <div class="contenedor ancho-fijo m-y-8">
      <h4 class="texto-peso-semibold">Acerca de SIS-DAI</h4>
      <div class="grid">
        <div class="columna-10-esc">
          <p>
            Para fortalecer el acceso a los beneficios del desarrollo
            tecnológico y la innovación, el Conacyt pone a disposición de la
            sociedad mexicana el Sistema de Diseño y Accesibilidad para la
            Investigación.
          </p>
          <p>
            Construido interdisciplinariamente, contempla criterios de
            accesibilidad digital, buenas prácticas de código, y fundamentos de
            usabilidad, experiencia de usuario y visualización de datos.
          </p>
          <p>
            SIS-DAI está disponible a través de una licencia de código abierto
            para su uso, compartición y replicabilidad. Es un sistema modular en
            constante crecimiento y evolución, ya que a través de la experiencia
            de las personas usuarias y creadoras del mismo, busca mejorar para
            cumplir altos estándares de calidad desde diferentes perspectivas.
          </p>
        </div>
      </div>
    </div>

    <div class="contenedor-fondo-claro-1">
      <div class="contenedor ancho-fijo">
        <div class="grid">
          <div class="columna-9-esc borde-r m-t-8 m-b-8-esc">
            <p class="notas texto-color-2">
              La Coordinación de Repositorios, Investigación y Prospectiva (CRIP)
              del Conacyt, a través de la Dirección de Análisis de Datos y
              Sistemas de Información Geográfica, <b class="texto-color-3">1)</b> establece, coordina y
              administra el proceso de innovación y de mejora continua en materia
              de tecnologías de información y comunicaciones para el desarrollo e
              implementación de los Ecosistemas Nacionales Informáticos, <b class="texto-color-3">2)</b>
              proporciona herramientas de análisis, visualización de datos y, <b class="texto-color-3">3)</b>
              sistemas de información geográfica; es por ello que, en colaboración
              con distintas áreas del Consejo, grupos de trabajo y Centros
              Públicos de Investigación, se articulan los siguientes proyectos:
            </p>
            <p class="texto-color-3"><b>1)</b> ENI</p>
            <p class="notas texto-color-2">
              Los Ecosistemas Nacionales Informáticos son espacios colaborativos y
              de acceso abierto que contribuyen al conocimiento local y regional
              para atender los problemas prioritarios de México al almacenar,
              procesar, analizar y difundir información humanística, científica y
              tecnológica; con la finalidad de maximizar la incidencia a favor del
              cuidado ambiental y las personas más pobres.
            </p>
            <p class="texto-color-3"><b>2)</b> SISDAI</p>
            <p class="notas texto-color-2">
              Este Sistema de Diseño y Accesibilidad para la Investigación
              potencia el impacto social de proyectos de investigación al promover
              la autonomía e independencia tecnológica con el uso de componentes
              de software libre.
            </p>
            <p class="texto-color-3"><b>3)</b> GEMA</p>
            <p class="notas texto-color-2">
              Este Gestor de Mapas permite integrar información estructurada de
              humanidades, ciencias y tecnologías a través de una infraestructura
              de conocimiento geoespacial con estándares abiertos.
            </p>
          </div>
          <div class="columna-6-esc m-t-8-esc m-b-8">
            <p class="notas texto-color-2">
              Profesionales que han colaborado en estos 3 proyectos: Aime Ali
              Guinto Hernandez, Alejandro Alain Flores Avila, Alfredo Estrada
              Ramírez, Aliza Brzezinski Rittner, Alonso Azaid Cortes Solis, Andres
              Izquierdo Benavides, Andres Martinez Gonzalez, Cesar Adrian Rovelo
              Basteris, Daniela Lizzet Alvarado Bolaños, Eric Omar Torres Velasco,
              Francisco Campuzano Beltran, Jesus Daniel Gomez Hernandez, Larissa
              Ivette Loza Cueto, Luis Octavio Diaz Neri, Maria Erandi Flores
              Romero, Mariana Vallejo Velazquez, Michelle De La Rosa Gonzalez,
              Miguel Angel Martinez Gonzalez, Monica Alexandra Canto Perez, Nadia
              Libertad Neri Vera, Obet Guillermo Plaza Cruz, Patricia Muñoz Lopez,
              Paulina Pradel Soto, Rocio Arias Puga, Rosa Del Carmen Carro Lopez,
              Tania Gabriela Torales Romero.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'PaginaAcercaDe',
}
</script>

<style lang="scss" scoped>
.acerca-de {
  .texto-peso-semibold {
    font-weight: 600;
  }
  .contenedor-fondo-claro-1 {
    background-color:#FAF8F8;
    .borde-r {
      border-right: 1px solid #CCCCCC; 
      padding-right: 16px;
      @include mediaquery('mov') {
        border: none;
        padding-right: inherit;
      }
    }
  }
}
</style>