// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-Hant' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '妙法樂苑是熹嘉仁波切在台灣的弘法佛學中心，提供法會活動、線上課程與依次第修學的講記。'
        },
        { name: 'theme-color', content: '#6E1E22' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@700;900&family=Noto+Sans+TC:wght@400;500;700&display=swap'
        }
      ]
    }
  },
  // 全站預先產生靜態 HTML（nuxt generate），可部署到 Vercel / Cloudflare Pages / GitHub Pages
  nitro: {
    prerender: { routes: ['/', '/events', '/rinpoche', '/learn', '/teachings', '/support'] }
  }
})
