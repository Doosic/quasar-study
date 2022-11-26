// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head: {
      title: 'Nuxt Dojo',
      meta: [
        { name: 'description', content: 'Everythig about Nuxt 3' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
})



// css: [
//   'vuetify/lib/styles/main.sass',
//   '@mdi/font/css/materialdesignicons.min.css'
// ],
// build: {
// transpile: ['vuetify'],
// },
// vite: {
// define: {
//   'process.env.DEBUG': false,
// },
// },