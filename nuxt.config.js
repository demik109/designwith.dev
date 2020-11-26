export default {

  target: 'static',
  srcDir: 'src',
  buildDir: 'build',
  components: true,
  
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
    config: {
      theme: {},
      variants: {},
      plugins: [],
      purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
          '~/components/**/*.vue',
          '~/layouts/**/*.vue',
          '~/pages/**/*.vue',
          '~/plugins/**/*.js',
          'nuxt.config.js'
        ]
      }
    }
  },

  plugins: [
    '~/plugins/bus'
  ],

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
