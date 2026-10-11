<script setup lang="ts">
import logo from '~/assets/images/logo.png'
</script>

<template>
  <!-- 妙法樂苑佛學會 Logo；要換圖時，替換 assets/images/logo.png 即可 -->
  <img :src="logo" alt="" width="56" height="53" class="brand-mark" />
</template>

<style scoped>
.brand-mark {
  /* Logo 原圖是白底，用 multiply 讓白底融入米色頁首 */
  mix-blend-mode: multiply;
  flex: 0 0 auto;
}
</style>
