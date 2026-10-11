<script setup lang="ts">
import { site } from '~/data/site'
</script>

<template>
  <div class="oc">
    <div class="oc__text">
      <p class="eyebrow">ONLINE CLASSROOM</p>
      <h2 class="serif oc__title">妙法樂苑線上教室</h2>
      <p class="oc__desc">仁波切固定時段於線上授課，各地法友皆可隨堂聽聞。目前進行中：{{ site.zoom.current }}。</p>
    </div>
    <div class="card oc__box">
      <div class="oc__line"><span>Zoom 會議 ID</span><strong>{{ site.zoom.id }}</strong></div>
      <div class="oc__line oc__line--last"><span>密碼</span><strong>{{ site.zoom.password }}</strong></div>
      <a :href="site.zoom.url" class="btn btn--primary btn--block" target="_blank" rel="noopener">開啟 Zoom 教室</a>
    </div>
  </div>
</template>

<style scoped>
.oc {
  background: var(--sand);
  border-radius: 24px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
}
.oc__text {
  flex: 1 1 380px;
  min-width: 0;
}
.oc__title {
  margin: 4px 0 8px;
  font-size: clamp(26px, 3.5vw, 34px);
}
.oc__desc {
  margin: 0;
  color: var(--ink-2);
}
.oc__box {
  flex: 1 1 300px;
  min-width: 0;
  gap: 12px;
}
.oc__line {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--line);
}
.oc__line--last {
  border-bottom: 0;
}
.oc__line span {
  color: var(--muted);
}
.oc__line strong {
  font-size: 19px;
  letter-spacing: 1px;
}
@media (max-width: 640px) {
  .oc {
    padding: 28px 20px;
  }
}
</style>
