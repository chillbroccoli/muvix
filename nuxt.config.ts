// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Movix',
      meta: [{ name: 'description', content: 'Place for movies and tv shows' }],
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
