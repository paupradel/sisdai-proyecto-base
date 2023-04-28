const { defineConfig } = require('@vue/cli-service')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const fs = require('fs')

const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0

const now = new Date()

/**
 * Configuración de compilación de vue
 * @see https://cli.vuejs.org/config/
 */
module.exports = defineConfig({
  /**
   * @property {boolean} [productionSourceMap=true] Establecer esto en falso puede acelerar las
   * compilaciones de producción si no necesita source maps para la producción.
   *
   * @see https://cli.vuejs.org/config/#productionsourcemap
   */
  productionSourceMap: true,

  outputDir: 'dist',
  publicPath: process.env.VUE_APP_BASE_ROUTE || '/',
  filenameHashing: process.env.VUE_APP_HASH || false,

  /**
   * @see https://cli.vuejs.org/config/#css-extract
   */
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import 'sisdai-css/src/_variables.scss'; @import 'sisdai-css/src/_mixins.scss';`,
      },
    },
  },

  /**
   * @property {object} [] Si el valor es un Objeto, se fusionará en la configuración final usando
   * webpack-merge.
   *
   * @see https://cli.vuejs.org/config/#configurewebpack
   */
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PACKAGE_VERSION': `"${version}"`,
        'process.env.DATE_DEPLOY': `"${now.toLocaleString('es-MX', {
          timeZone: 'America/Mexico_City',
        })}"`,
        'process.env.ENV_DEPLOY': `"${process.env.NODE_ENV}"`,
      }),
      new CopyPlugin({
        patterns: [{ from: 'src/assets/data/', to: 'data/' }],
      }),
    ],
  },
})
