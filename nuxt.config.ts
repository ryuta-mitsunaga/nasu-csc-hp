// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    microcmsApiBase: '',
    microcmsApiKey: '',
  },
  css: ['./app/assets/css/main.css', 'swiper/swiper-bundle.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      title: '（仮称）那須町総合型地域スポーツクラブ',
      meta: [
        { name: 'robots', content: 'noindex, nofollow' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Shippori+Mincho:wght@400;500;600&family=Zen+Maru+Gothic:wght@400;500;700',
        },
        { rel: 'preload', href: '/background.png', as: 'image' },
      ],
    },
    pageTransition: {
      name: 'page-fade',
      mode: 'out-in',
      appear: true,
    },
  },
})
