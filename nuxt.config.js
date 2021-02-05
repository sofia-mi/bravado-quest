export default {
  ssr: false,

  head: {
    title: 'bravado-quest',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },

  css: [
    'vue-virtual-scroller/dist/vue-virtual-scroller.css'
  ],

  plugins: [
    {src: '~/plugins/vue-virtual-scroller.js'},
    {src: '~/plugins/text-highlighter.js'},
    {src: '~/plugins/load-worker.js'},
  ],

  components: true,

  buildModules: [],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {},

  build: {
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          test: /\.worker\.js$/,
          loader: 'worker-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
