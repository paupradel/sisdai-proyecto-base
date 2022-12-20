<template>
  <menu-lateral-composicion-fija>
    <template v-slot:menu>
      <menu-lateral :elementos="elementos"></menu-lateral>
    </template>
    <template v-slot:vista>
      <div class="contenedor">
        <div class="flex">
          <div class="columna-16 m-y-10">
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

      <div class="contenedor ancho-lectura m-y-10">
        <p class="titulo-pagina">LeerMasMenos</p>
        <p>
          El componente
          <code class="language-html" v-text="`<LeerMasMenos />`"></code> más
          visualiza una mínima parte del contenido y ofrece la posibilidad de
          desplegarlo si la persona usuaria así lo decide.
        </p>
        <p>
          Una de las ventajas de este botón es la oportunidad de ahorrar espacio
          en el diseño de la interfaz, así como apoyar la jerarquía de los
          contenidos.
        </p>
        <vue-code-highlight language="html">
          <pre class="language-html"
          v-text="`<template>
  <div>
    <LeerMasMenos>
      <template v-slot&quot;texto-corto>
        <p>
          ...
        </p>
      </template>
      <template v-slot&quot;texto-largo>
        <p>
          ...
        </p>
      </template>
    </LeerMasMenos>
  </div>
</template>`"></pre>
        </vue-code-highlight>

        <p class="titulo-seccion">Parámetros</p>
        <p>
          La siguiente es una lista de propiedades que admite el componente y
          que se tienen que especificar al importar el mismo.
        </p>
        <div class="titulo-subseccion">Opcionales</div>
        <p>
          Estos parámetros cuentan con un valor default al importar el
          componente, por lo tanto la persona usuaria tendrá más libertad de
          customizar el componente al modificarlos.
        </p>
        <ul>
          <li><code class="language-html">alto_max</code><i>(String) </i>Alto del slot de texto-largo cuando está abierto. Por defecto usa 370px.</li>
        </ul>

        <p class="titulo-seccion">Ejemplos de uso</p>
        <p>
          Cuando se requiere mostrar un texto de introducción pero es muy
          extenso, el componente
          <code class="language-html" v-text="`<LeerMasMenos />`"></code>
          construirá un contenedor del ancho total con un botón para Leer Más o
          Leer Menos texto
        </p>
        <p>
          Utiliza el botón de Leer más si en el diseño se cumplen estas dos
          condiciones:
        </p>
        <ol>
          <li>El texto es largo, es decir, cuenta con más de 100 palabras.</li>
          <li>
            El texto es meramente informativo o circunstancial y no es
            indispensable para que la persona usuaria interactúe con el sitio.
          </li>
        </ol>
        <br />
        <hr />
        <LeerMasMenos
          alto_max="370px">
          <template v-slot:texto-corto>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto quia eligendi 
              soluta quos eaque aliquam officia quo neque unde reiciendis assumenda maiores magnam 
              quidem ex dignissimos laborum quibusdam sapiente.
            </p>
          </template>
          <template v-slot:texto-largo>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eligendi? 
              Dolores, nobis! Odit atque veniam cumque porro tempore odio, fuga pariatur nulla 
              natus veritatis <small>sint temporibus error</small> <strong>ducimus ut explicabo?</strong>
              <span :class="{'a11y-simplificada-ocultar': tieneVistaSimplificada}"> 🤓</span>
            </p>
          </template>
        </LeerMasMenos>

        <vue-code-highlight language="html">
          <pre class="language-html"
          v-text="`<template>
  <div>
    <LeerMasMenos
          alto_max=&quot;370px&quot;>
      <template v-slot&quot;texto-corto>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, iusto quia eligendi 
          soluta quos eaque aliquam officia quo neque unde reiciendis assumenda maiores magnam 
          quidem ex dignissimos laborum quibusdam sapiente.
        </p>
      </template>
      <template v-slot&quot;texto-largo>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, eligendi? 
          Dolores, nobis! Odit atque veniam cumque porro tempore odio, fuga pariatur nulla 
          natus veritatis <small>sint temporibus error</small> <strong>ducimus ut explicabo?</strong>
          <span :class=&quot;{ 'a11y-simplificada-ocultar': tieneVistaSimplificada }&quot;> 🤓</span>
        </p>
      </template>
    </LeerMasMenos>
  </div>
</template>`"></pre>
        </vue-code-highlight>

        <div v-highlight>
          <pre class="language-javascript"><code>&lt;script>
    export default {
        name: 'LeerMasMenos',
        props: {
          alto_max: {
            type: String,
            default: '370px'
          }
        },
        data() { 
          return {
            abierto: false,
            max_height: '0px'
          }
        },
        computed: {
          tieneVistaSimplificada() {
            return this.$store.getters.tieneVistaSimplificada;
          },
          computedMaxHeight() {
            return this.max_height;
          },
          styleObject() {
            if(this.tieneVistaSimplificada) {
              return {'max-height': this.alto_max}
            }
            return {'max-height': this.computedMaxHeight};
          }
        },
        methods: {
          alternarMaxHeight() {
            this.abierto === false
              ? this.max_height = this.alto_max : this.max_height = '0px';
            this.abierto = !this.abierto;
          }
        }
    }
&lt;/script></code></pre>        
        </div>

        <div v-highlight>
          <pre class="language-css"><code>&lt;style scoped lang="scss">
  .sisdai-leer-mas-menos {
    .texto-corto {
      * {
        margin-bottom: 0;
      }
    }
    .texto-largo {
      max-height: 0;
      overflow: hidden;
      transition: all .33s ease-in-out;
    }
    .btn-leer-mas-menos {
      margin-top: 16px;
    }
  }
&lt;/style></code></pre>
        </div>
      </div>
      
    </template>
  </menu-lateral-composicion-fija>
</template>

<script>
import HerramientaTarjeta from "@/components/herramientas/HerramientaTarjeta";
import MenuLateral from "@/components/herramientas/MenuLateral";
import MenuLateralComposicionFija from "@/components/herramientas/MenuLateralComposicionFija";
import LeerMasMenos from '@/components/herramientas/LeerMasMenos.vue';

import { component as VueCodeHighlight } from 'vue-code-highlight';
import "vue-code-highlight/themes/prism-tomorrow.css";

export default {
  components: {
    HerramientaTarjeta,
    MenuLateral,
    MenuLateralComposicionFija,
    LeerMasMenos,
    VueCodeHighlight,
  },
  computed: {
    tieneVistaSimplificada() {
      return this.$store.getters.tieneVistaSimplificada;
    },
  },
  data() {
    return {
      elementos: {
        'routerlinks': [
          {
            id: 'intro',
            titulo: 'Introduccion',
            url: '/intro',
            clase: 'menu-routerlink router-link-exact-active',
            icono: ''
          },
          {
            id: 'visdona',
            titulo: 'Donas',
            url: '/donas',
            clase: 'menu-routerlink',
            icono: ''
          },
          {
            id: 'vis',
            titulo: 'Otra vis',
            url: '/vis',
            clase: 'menu-routerlink',
            icono: ''
          },
          {
            id: 'lineas',
            titulo: 'Lineas',
            url: '/lineas',
            clase: 'menu-routerlink',
            icono: ''
          },
          {
            id: 'barras',
            titulo: 'Barras',
            url: '/barras',
            clase: 'menu-routerlink',
            icono: ''
          },
          {
            id: 'cajas',
            titulo: 'Cajas y bigotes',
            url: '/cajas',
            clase: 'menu-routerlink',
            icono: ''
          },
          {
            id: 'area',
            titulo: 'Area',
            url: '/area',
            clase: 'menu-routerlink',
            icono: ''
          }
        ],
        'links': [
          {
            id: 'github',
            titulo: 'Ir a Github',
            url: 'https://github.com/salsa-community/sisdai-graficas',
            clase: 'menu-github',
            icono: 'icono-social-github',
            target: '_blank'
          }
        ]
      },
    }
  }
}
</script>

<style lang="scss">
.a11y-simplificada-ocultar {
  display: none;
}
:root { 
  --menu-lateral-fondo: #DED5FF;
  --submenu-lateral-fondo: #D0CCFF;
  --menu-lateral-accion: #0101FC;
}
.menu-routerlink {
  background: transparent;
  color: var(--tipografia-color-3, #333);
  font-weight: 400;
  text-decoration: none;
  @media (hover: hover){
    &:hover {
      background: var(--submenu-lateral-fondo);
      color: var(--menu-lateral-accion, #00f);
    }
  }
  &.router-link-exact-active {
    background: #F6F6F6;
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