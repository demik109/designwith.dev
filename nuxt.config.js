export default {

  target: 'static',

  srcDir: 'src',

  buildDir: 'build',

  head: {
    title: 'designwith.dev',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  tailwindcss: {
    config: {}
  },

  plugins: [
    '~/plugins/bus'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/pwa',
    '@nuxt/content'
  ],

  content: {},

  build: {
  }
}
