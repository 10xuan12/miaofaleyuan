<script setup lang="ts">
const base = useRuntimeConfig().app.baseURL

useHead({
  titleTemplate: (t) => (t ? `${t}｜妙法樂苑` : '妙法樂苑 ལེགས་བཤད་དགའ་ཚལ།｜熹嘉仁波切台灣弘法中心'),
  link: [
    { rel: 'icon', type: 'image/png', href: `${base}favicon.png` },
    { rel: 'apple-touch-icon', href: `${base}favicon.png` }
  ]
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
