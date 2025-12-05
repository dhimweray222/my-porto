// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },

  devtools: { enabled: true },

  app: {
    head: {
      title: 'Dhimas | Software Engineer',
      meta: [
        { name: 'description', content: 'Portfolio of a Software Engineer specializing in modern web technologies.' },
        { name: 'theme-color', content: '#fafafa' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  modules: ['@nuxt/image']
})