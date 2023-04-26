<template>
  <div class="contenedor ancho-lectura m-y-10">
    <p class="titulo-pagina">Modal</p>
    <p>
      La etiqueta
      <code
        class="language-html"
        v-text="`<ModalComponente />`"
      ></code>
      desactiva el contenido y las acciones principales para colocar un
      contenedor encima de estos que requiera toda la atención y acción de la
      persona usuaria. El contenido y la navegación principal se reactivan una
      vez que la persona usuaria acepte, cancele o concluya la tarea que le
      demanda el componente modal.
    </p>
    <p>
      Los elementos básicos de un modal son el <b>contenedor</b>,
      <b>la capa de transparencia</b> y <b>el botón de salir</b>.
    </p>
    <p>
      Para utilizar el componente basta con copiar y pegar el código html a
      continuación y designar una etiqueta que active la función de abrir el
      modal como un botón o elemento clickeable.
    </p>
    <p>
      Es importante colocar la clase
      <code
        class="language-html"
        v-text="`.overflow-hidden`"
      ></code>
      con la propiedad <i>overflow</i> en <i>hidden</i> en la hoja de estilo
      principal de la aplicación o en el App.vue
    </p>
    <modal-componente ref="nombre_modal">
      <template v-slot:encabezado> encabezado </template>
      <template v-slot:cuerpo> cuerpo </template>
      <template v-slot:pie> pie </template>
    </modal-componente>
    <button @click="$refs.nombre_modal.abrirModal()">Abrir Modal</button>

    <!-- <vue-code-highlight language="html">
      <pre
        class="language-html"
        v-text="
          `<modal-componente
    ref=&quot;nombre_modal&quot;>
  <template v-slot:encabezado>
    encabezado
  </template>
  <template v-slot:cuerpo>
    cuerpo
  </template>
  <template v-slot:pie>
    pie
  </template>
</modal-componente>`
        "
      ></pre>
    </vue-code-highlight> -->
    <!-- <vue-code-highlight language="html">
      <pre
        class="language-html"
        v-text="
          `<button type=&quot;button&quot; @click=&quot;$refs.nombre_modal.abrirModal()&quot;>
  Abrir Modal
</button>>`
        "
      ></pre>
    </vue-code-highlight> -->

    <p class="subtitulo-pagina">Parámetros</p>
    <p>
      La siguiente es una lista de propiedades que admite el componente y que se
      tienen que especificar al importar el mismo.
    </p>
    <ul>
      <li>
        <code class="language-html">ref</code><i>(String) </i>Referencia del
        componente para acceder al método abrirModal mediante el evento de
        click.
      </li>
      <li>
        <code class="language-html">tamanio</code><i>(String) </i>Tamaño del
        contenedor del modal: <i>chico, mediano, grande o pantalla-completa</i>.
        Por defecto usa el tamaño chico.
      </li>
    </ul>

    <p class="subtitulo-pagina">Ejemplos</p>
    <p>
      Los elementos a disponer en cada parte del modal pueden variar de acuerdo
      con la función y el contexto de este. Es decir, el modal puede contener
      diferentes componentes tales como carruseles de imágenes, botones de
      acción, campos de texto, opciones de selección, entre otros.
    </p>
    <p>
      Dentro de las etiquetas
      <code
        class="language-html"
        v-text="`<modal-componente><modal-componente/>`"
      ></code>
      se incluyen tres slots de vue (encabezado, cuerpo y pie) para colocar
      contenido html. Se recomienda utilizar el slot de cuerpo para colocar el
      contenido deseado. A continuación se presentan algunos ejemplos con
      contenido.
    </p>
    <modal-componente
      ref="nombre_modal_1"
      tamanio="chico"
    >
      <template v-slot:cuerpo>
        <div class="encabezado-cuerpo">
          <span class="icono-archivo-descargar"></span>
          <p class="titulo-modal">Descargar datos 1</p>
        </div>
        <div class="cuerpo-modal m-t-3">
          <div>
            <p class="subtitulo-modal m-t-0">Selección datos</p>
            <div>
              <input
                id="radio1"
                type="radio"
                name="radioses1"
              />
              <label for="radio1">Todos los datos</label>
            </div>
            <div>
              <input
                id="radio2"
                type="radio"
                name="radioses1"
              />
              <label for="radio2">Mi selección de datos</label>
            </div>
          </div>
          <div>
            <p class="subtitulo-modal">Formato de archivo</p>
            <div>
              <input
                id="radio3"
                type="radio"
                name="radioses2"
              />
              <label for="radio3">.csv (Valores separados por comas)</label>
            </div>
            <div>
              <input
                id="radio4"
                type="radio"
                name="radioses2"
              />
              <label for="radio4">.xls (Archivo de Excel)</label>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:pie>
        <div class="pie-modal m-t-5">
          <button
            type="button"
            class="boton-primario"
          >
            Descargar
          </button>
        </div>
      </template>
    </modal-componente>
    <button
      type="button"
      class="btn-bold m-t-1"
      @click="$refs.nombre_modal_1.abrirModal()"
    >
      Modal Chico
    </button>
    <modal-componente
      ref="nombre_modal_2"
      tamanio="mediano"
    >
      <template v-slot:encabezado>
        <div class="encabezado-cuerpo">
          <span class="icono-archivo-descargar"></span>
          <p class="titulo-modal">Descargar datos 2</p>
        </div>
      </template>
      <template v-slot:cuerpo>
        <div class="cuerpo-modal m-t-3">
          <div>
            <p class="subtitulo-modal m-t-0">Selección datos</p>
            <div>
              <input
                id="radio1"
                type="radio"
                name="radioses1"
              />
              <label for="radio1">Todos los datos</label>
            </div>
            <div>
              <input
                id="radio2"
                type="radio"
                name="radioses1"
              />
              <label for="radio2">Mi selección de datos</label>
            </div>
          </div>
          <div>
            <p class="subtitulo-modal">Formato de archivo</p>
            <div>
              <input
                id="radio3"
                type="radio"
                name="radioses2"
              />
              <label for="radio3">.csv (Valores separados por comas)</label>
            </div>
            <div>
              <input
                id="radio4"
                type="radio"
                name="radioses2"
              />
              <label for="radio4">.xls (Archivo de Excel)</label>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:pie>
        <div class="pie-modal m-t-5">
          <button
            type="button"
            class="boton-primario"
          >
            Descargar
          </button>
        </div>
      </template>
    </modal-componente>
    <button
      type="button"
      class="btn-bold m-t-1"
      @click="$refs.nombre_modal_2.abrirModal()"
    >
      Modal Mediano
    </button>
    <modal-componente
      ref="nombre_modal_3"
      tamanio="grande"
    >
      <template v-slot:encabezado>
        <div class="encabezado-cuerpo">
          <span class="icono-archivo-descargar"></span>
          <p class="titulo-modal">Descargar datos 3</p>
        </div>
      </template>
      <template v-slot:cuerpo>
        <div class="cuerpo-modal m-t-3">
          <div>
            <p class="subtitulo-modal m-t-0">Selección datos</p>
            <div>
              <input
                id="radio1"
                type="radio"
                name="radioses1"
              />
              <label for="radio1">Todos los datos</label>
            </div>
            <div>
              <input
                id="radio2"
                type="radio"
                name="radioses1"
              />
              <label for="radio2">Mi selección de datos</label>
            </div>
          </div>
          <div>
            <p class="subtitulo-modal">Formato de archivo</p>
            <div>
              <input
                id="radio3"
                type="radio"
                name="radioses2"
              />
              <label for="radio3">.csv (Valores separados por comas)</label>
            </div>
            <div>
              <input
                id="radio4"
                type="radio"
                name="radioses2"
              />
              <label for="radio4">.xls (Archivo de Excel)</label>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:pie>
        <div class="pie-modal m-t-5">
          <button
            type="button"
            class="boton-primario"
          >
            Descargar
          </button>
        </div>
      </template>
    </modal-componente>
    <button
      type="button"
      class="btn-bold m-t-1"
      @click="$refs.nombre_modal_3.abrirModal()"
    >
      Modal Grande
    </button>
    <!-- <vue-code-highlight language="html">
      <pre
        class="language-html"
        v-text="
          `<modal-componente 
    ref=&quot;nombre_modal_1&quot;
    tamanio=&quot;chico&quot;>
  <template v-slot:encabezado></template>      
  <template v-slot:cuerpo>
    <div class=&quot;encabezado-cuerpo&quot;>
      <p class=&quot;titulo-modal&quot;>Descargar datos</p>
      <span class=&quot;icono-archivo-descargar&quot;></span>
    </div>
    <div class=&quot;cuerpo-modal m-t-3&quot;>
      <div>
        <p class=&quot;subtitulo-modal m-t-0&quot;>Selección datos</p>
        <div>
          <input id=&quot;radio1&quot; type=&quot;radio&quot; name=&quot;radioses1&quot;>
          <label for=&quot;radio1&quot;>Todos los datos</label>            
        </div>
        <div>
          <input id=&quot;radio2&quot; type=&quot;radio&quot; name=&quot;radioses1&quot;>
          <label for=&quot;radio2&quot;>Mi selección de datos</label>
        </div>
      </div>
      <div>
        <p class=&quot;subtitulo-modal&quot;>Formato de archivo</p>
        <div>
          <input id=&quot;radio3&quot; type=&quot;radio&quot; name=&quot;radioses2&quot;>
          <label for=&quot;radio3&quot;>.csv (Valores separados por comas)</label>            
        </div>
        <div>
          <input id=&quot;radio4&quot; type=&quot;radio&quot; name=&quot;radioses2&quot;>
          <label for=&quot;radio4&quot;>.xls (Archivo de Excel)</label>
        </div>
      </div>
    </div>
  </template>
  <template v-slot:pie>
    <div class=&quot;pie-modal m-t-5&quot;>
      <button type=&quot;button&quot; class=&quot;boton-primario&quot;>Descargar</button>
    </div>
  </template>
</modal-componente>    

<button type=&quot;button&quot; class=&quot;btn-bold&quot; @click=&quot;$refs.nombre_modal_1.abrirModal()&quot;>
  Modal Chico
</button>`
        "
      ></pre>
    </vue-code-highlight> -->
    <p>
      El ancho del modal en versión móvil es del 100% de la pantalla y el alto
      es proporcional al contenido del mismo.
    </p>
    <p class="subtitulo-pagina">Uso</p>
    <p>Utiliza el modal en los siguientes casos:</p>
    <ol>
      <li class="text-bold">
        Entregar información crítica a la persona usuaria
        <ul class="text-regular">
          <li>
            Notifica a la persona usuaria de acciones críticas o posibles
            errores que afecten su flujo de trabajo y que
            <b>requieran atención inmediata</b>, por ejemplo si la persona ha
            olvidado guardar los cambios.
          </li>
          <li>
            En estos casos, no se incluye el botón de cerrar, puesto que la
            persona usuaria tiene que decidir una acción concreta a realizar.
          </li>
          <li>
            El mensaje debe ser claro sobre la situación y las acciones que debe
            realizar la persona usuaria.
          </li>
          <li>
            Ofrece opciones de acción a través botones que le permitan a la
            persona usuaria decidir, por ejemplo un botón de “guardar cambios”,
            “no guardar” y “cancelar”.
          </li>
        </ul>
      </li>
      <li class="text-bold">
        Visualizar imágenes a detalle
        <ul class="text-regular">
          <li>
            Al activar el modal, la imagen debe verse en pantalla completa y su
            tamaño de presentación debe ser más grande que su versión
            predeterminada.
          </li>
          <li>
            No todas las imágenes deben desencadenar un modal, solo aquellas
            imágenes que por sus características requieran una visualización a
            detalle, por ejemplo imágenes de mapas.
          </li>
        </ul>
      </li>
      <li class="text-bold">
        Realizar tareas dentro de un flujo de trabajo
        <ul class="text-regular">
          <li>
            Usa el modal para fragmentar flujos de trabajo complejos en tareas o
            pasos más pequeños. Por ejemplo, actividades como importar o
            exportar archivos.
          </li>
          <li>
            Las tareas a desarrollar en el modal deben tener un inicio y fin
            claros.
          </li>
          <li>
            Al finalizar la tarea o cerrar el modal, la persona usuaria debe
            regresar a la pantalla en la que se encontraba inicialmente.
          </li>
        </ul>
      </li>
    </ol>
    <p>
      Para ejemplificar el caso uso 2 se presentan dos propuestas con contenido
      para un modal de pantalla grande.
    </p>
    <modal-componente
      class="modal-4"
      ref="nombre_modal_4"
      tamanio="pantalla-completa"
    >
      <template v-slot:encabezado></template>
      <template v-slot:cuerpo>
        <div class="cuerpo-modal">
          <div class="carrusel-encabezado">
            <div class="carrusel-info">
              <div class="carrusel-indice">
                <span>2 de 3</span>
              </div>
              <div>
                <p class="nombre-imagen m-0">
                  Grupos de suelos de erosión eólica de acuerdo a WB
                </p>
                <p class="formato-peso-imagen texto-color-2">PNG 8MB</p>
              </div>
            </div>
            <button class="boton-primario boton-chico">
              Descargar
              <span class="icono-archivo-descargar"></span>
            </button>
          </div>
          <div class="carrusel-cuerpo">
            <button class="boton-icono boton-terciario">
              <span class="icono-angulo-izquierdo"></span>
            </button>
            <div class="imagen">
              <img
                class="imagen-prueba"
                src="https://placekitten.com/792/1024"
                alt=""
              />
            </div>
            <button class="boton-icono boton-terciario">
              <span class="icono-angulo-derecho"></span>
            </button>
          </div>
        </div>
      </template>
      <template v-slot:pie></template>
    </modal-componente>
    <button
      type="button"
      class="btn-bold m-t-1"
      @click="$refs.nombre_modal_4.abrirModal()"
    >
      Modal Pantalla Completa 1
    </button>
    <modal-componente
      class="modal-5"
      ref="nombre_modal_5"
      tamanio="pantalla-completa"
    >
      <template v-slot:encabezado>
        <div class="carrusel-encabezado">
          <div class="carrusel-indice">
            <span>2 de 3</span>
          </div>
        </div>
      </template>
      <template v-slot:cuerpo>
        <div class="cuerpo-modal">
          <div class="carrusel-cuerpo">
            <div class="imagen">
              <img
                class="imagen-prueba"
                src="https://placekitten.com/792/1024"
                alt=""
              />
            </div>
          </div>
          <div class="imagen-info">
            <p class="nombre-imagen m-0">
              Grupos de suelos de erosión eólica de acuerdo a WB
            </p>
            <p class="formato-peso-imagen texto-color-2">PNG 8MB</p>
          </div>
        </div>
      </template>
      <template v-slot:pie>
        <button class="boton-primario boton-chico">
          Descargar
          <span class="icono-archivo-descargar"></span>
        </button>
      </template>
    </modal-componente>
    <button
      type="button"
      class="btn-bold m-t-1"
      @click="$refs.nombre_modal_5.abrirModal()"
    >
      Modal Pantalla Completa 2
    </button>
    <div class="titulo-subseccion">Mejores prácticas</div>
    <ul>
      <li>
        Evita el scroll en el modal, si el contenido excede la altura de la
        pantalla es posible que se deba repensar el uso del modal.
      </li>
      <li>
        Utiliza el modal con precaución. El modal es un componente que genera
        una interrupción en la experiencia de usuario, por lo que su uso debe
        ser justificado.
      </li>
    </ul>
    <div class="titulo-subseccion">Salir del modal</div>
    <p>Para salir del modal, la persona usuaria puede:</p>
    <ol>
      <li>
        Dar clic sobre el botón de salir (icono de tache) ubicado en la esquina
        superior derecha de los modales.
      </li>
      <li>Presionar la tecla ESC.</li>
      <li>Dar clic fuera del modal.</li>
    </ol>
    <p class="subtitulo-pagina">Vista simplificada</p>
    <p>
      En la vista simplificada, los modales funcionan de la misma forma como lo
      hacen en la vista predeterminada. Solo el modal para visualizar imágenes a
      detalle no se utiliza, ya que en la vista simplificada no se muestran
      imágenes.
    </p>
  </div>
</template>

<script>
import ModalComponente from '@/components/herramientas/ModalComponente.vue'

// import { component as VueCodeHighlight } from 'vue-code-highlight'
// import 'vue-code-highlight/themes/prism-tomorrow.css'

export default {
  components: {
    ModalComponente,
  },
  computed: {
    tieneVistaSimplificada() {
      return this.$store.getters.tieneVistaSimplificada
    },
  },
}
</script>

<style lang="scss" scoped>
.a11y-simplificada-ocultar {
  display: none;
}
.encabezado-cuerpo {
  display: flex;
  .titulo-modal {
    font-size: 1.5rem;
    font-weight: 500;
    margin: 0px;
  }
  .icono-archivo-descargar {
    margin-right: 8px;
    font-size: 24px;
  }
}
.cuerpo-modal {
  .subtitulo-modal {
    font-weight: 600;
  }
}
.pie-modal {
  margin-left: auto;
  @include mediaquery('mov') {
    width: 100%;
    .boton-primario {
      width: 100%;
      justify-content: center;
    }
  }
}
.modal-4 {
  .cuerpo-modal {
    .carrusel-encabezado {
      padding: 0px 89.5px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .carrusel-info {
        display: flex;
        align-items: flex-start;
        gap: 33px;
        .carrusel-indice {
          background: #f6f6f6;
          border-radius: 20px;
          font-size: 0.875rem;
          padding: 8px;
        }
        .nombre-imagen {
          font-size: 0.875rem;
          font-weight: 500;
        }
        .formato-peso-imagen {
          font-size: 0.875rem;
          font-weight: 400;
          margin-top: 4px;
          margin-bottom: 0px;
        }
      }
      .boton-primario {
        margin-left: auto;
      }
    }
    .carrusel-cuerpo {
      display: flex;
      justify-content: space-between;
      margin-top: 16px;
      .imagen {
        background: #f6f6f6;
        width: 100%;
        height: 100%;
        .imagen-prueba {
          width: 792px;
          display: block;
          margin: 0 auto;
        }
      }
      .boton-terciario {
        padding: 0px 28px;
        margin: 0px;
        .icono-angulo-izquierdo,
        .icono-angulo-derecho {
          font-size: 24px;
          padding: 4px;
        }
      }
    }
  }
}
.modal-5 {
  .carrusel-encabezado {
    .carrusel-indice {
      background: #f6f6f6;
      font-size: 0.875rem;
      border-radius: 20px;
      padding: 8px;
    }
  }
  .cuerpo-modal {
    margin-top: 32px;
    .imagen-info {
      margin-top: 16px;
      .nombre-imagen {
        font-size: 0.875rem;
        font-weight: 500;
      }
      .formato-peso-imagen {
        font-size: 0.875rem;
        font-weight: 400;
        margin-top: 4px;
        margin-bottom: 0px;
      }
    }
  }
  .boton-primario {
    margin: 48px auto 0;
  }
}
.text-bold {
  font-weight: 500;
}
.text-regular {
  font-weight: 400;
}
</style>
