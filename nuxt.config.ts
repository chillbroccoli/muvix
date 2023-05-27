// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Muvix',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content: 'Discover and Explore Movies and TV Shows',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image-edge',
    '@vueuse/nuxt',
  ],
  devtools: {
    enabled: true,
  },
  tailwindcss: {
    cssPath: './assets/css/tailwind.css',
    configPath: 'tailwind.config',
  },
  pinia: {
    autoImports: ['defineStore'],
  },
});
