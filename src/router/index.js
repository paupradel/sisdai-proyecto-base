import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicio from '../views/PaginaInicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: PaginaInicio,
  },
  {
    path: '/acerca-de',
    name: 'AcercaDe',
    component: () => import('../views/PaginaAcercaDe.vue'),
  },
  {
    path: '/creditos',
    name: 'Créditos',
    component: () => import('../views/PaginaCreditos.vue'),
  },
  {
    path: '/creditos/:id',
    name: 'Créditos / Investigador',
    component: () => import('../views/PaginaCreditosDetalle.vue'),
  },
  {
    path: '/preguntas-frecuentes',
    name: 'Preguntas Frecuentes',
    component: () => import('../views/PaginaPreguntasFrecuentes.vue'),
  },
  {
    path: '/herramientas',
    name: 'Herramientas',
    children: [
      {
        path: '/herramientas/intro',
        name: 'Introducción: Herramientas',
        component: () => import('@/views/PaginaHerramientasDetalle.vue'),
      },
      {
        path: '/herramientas/modal',
        name: 'Herramientas: Modal',
        component: () => import('@/views/herramientas/HerramientaModal.vue'),
      },
      {
        path: '/herramientas/boton-descarga',
        name: 'Herramientas: BotonDescarga',
        component: () =>
          import('@/views/herramientas/HerramientaBotonDescarga.vue'),
      },
      {
        path: '/herramientas/leer-mas-menos',
        name: 'Componente: LeerMasMenos',
        component: () =>
          import('@/views/herramientas/HerramientaLeerMasMenos.vue'),
      },
    ],
    component: () => import('../views/PaginaHerramientas.vue'),
  },
  {
    path: '**',
    name: 'pagina-no-encontrada',
    component: () => import('@/views/ErrorPaginaNoEncontrada.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0, behavior: 'smooth' }
  },
})

export default router
