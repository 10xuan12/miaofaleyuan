<script setup lang="ts">
import { studyPath, classics, practices, studyUrl } from '~/data/courses'

useHead({ title: '修學園地' })

// 從首頁點「01」等卡片過來時，自動展開對應的論典
const route = useRoute()
const openNo = ref<string | null>(null)
onMounted(() => {
  openNo.value = route.hash ? route.hash.slice(1) : null
})
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="wrap">
        <p class="eyebrow">STUDY</p>
        <h1>修學園地</h1>
        <p>依寺院傳統的學習順序整理。初學者建議從 01《攝類學》開始；點書名展開章節，再點章節閱讀講記。所有講記皆免費開放。</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap layout">
        <div class="main">
          <h2 class="section-title">依修學次第</h2>
          <details
            v-for="c in studyPath"
            :id="c.no"
            :key="c.path"
            class="acc"
            :open="openNo === c.no || undefined"
          >
            <summary class="acc__sum">
              <span class="acc__no serif">{{ c.no }}</span>
              <span class="acc__title">{{ c.title }}</span>
              <span class="acc__desc">{{ c.desc }}</span>
              <svg class="acc__chev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
            </summary>
            <div class="acc__body">
              <a :href="studyUrl(c.path)" class="acc__main" target="_blank" rel="noopener">閱讀{{ c.title }}總覽 →</a>
              <div v-for="g in c.groups" :key="g.label" class="acc__group">
                <a v-if="g.path" :href="studyUrl(g.path)" class="acc__glabel" target="_blank" rel="noopener">{{ g.label }}</a>
                <strong v-else class="acc__glabel">{{ g.label }}</strong>
                <ul v-if="g.topics.length" class="topics">
                  <li v-for="t in g.topics" :key="t.path">
                    <a :href="studyUrl(t.path)" target="_blank" rel="noopener">{{ t.label }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </details>

          <h2 class="section-title" style="margin-top: 56px">經典閱讀</h2>
          <ul class="classic-list">
            <li v-for="c in classics" :key="c.path" class="card">
              <a :href="studyUrl(c.path)" target="_blank" rel="noopener" class="classic__title">{{ c.title }}</a>
              <span v-if="c.desc" class="classic__desc">{{ c.desc }}</span>
              <span v-for="g in c.groups" :key="g.label" class="classic__sub">
                <a v-for="t in g.topics" :key="t.path" :href="studyUrl(t.path)" target="_blank" rel="noopener">{{ t.label }}</a>
              </span>
            </li>
          </ul>
        </div>

        <aside class="side">
          <NuxtLink to="/teachings" class="side__box side__box--cta">
            <span class="eyebrow">TEACHINGS</span>
            <strong class="serif">仁波切授課資料</strong>
            <span>歷次授課檔案，存放於雲端硬碟 →</span>
          </NuxtLink>
          <div class="side__box">
            <h2 class="serif">聞思修持</h2>
            <ul>
              <li v-for="p in practices" :key="p.path">
                <a :href="studyUrl(p.path)" target="_blank" rel="noopener">{{ p.label }}</a>
              </li>
            </ul>
          </div>
          <div class="side__box side__box--light">
            <h2 class="serif">聞・思・修</h2>
            <p><strong>聞</strong>　聆聽正法，閱讀文字與音檔。</p>
            <p><strong>思</strong>　思惟法義，建立正知正見。</p>
            <p><strong>修</strong>　依教奉行，落實於日常生活。</p>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
}
.main {
  flex: 999 1 600px;
  min-width: 0;
}
.side {
  flex: 1 1 260px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.acc {
  border-top: 1px solid #cdbfab;
  scroll-margin-top: 96px;
}
.acc:last-of-type {
  border-bottom: 1px solid #cdbfab;
}
.acc__sum {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 14px;
  padding: 20px 4px;
  min-height: 48px;
}
.acc__sum::-webkit-details-marker {
  display: none;
}
.acc__no {
  font-size: 22px;
  font-weight: 900;
  color: var(--gold-num);
}
.acc__title {
  font-size: 19px;
  font-weight: 700;
}
.acc__desc {
  color: var(--muted);
  font-size: 15px;
  flex: 1 1 auto;
}
.acc__chev {
  margin-left: auto;
  transition: transform 0.2s ease;
}
.acc[open] .acc__chev {
  transform: rotate(180deg);
}
.acc__body {
  padding: 0 4px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.acc__main {
  font-weight: 700;
}
.acc__group {
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  align-items: baseline;
}
.acc__glabel {
  font-weight: 700;
  flex: 0 0 auto;
  min-width: 6em;
}
.topics {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 16px;
}

.classic-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
}
.classic__title {
  font-weight: 700;
  font-size: 17px;
}
.classic__desc {
  color: var(--muted);
  font-size: 14px;
}
.classic__sub {
  display: flex;
  gap: 16px;
  font-size: 15px;
}

.side__box {
  background: var(--maroon);
  color: #fff8ec;
  border-radius: 20px;
  padding: 28px;
}
.side__box h2 {
  margin: 0 0 12px;
  font-size: 22px;
}
.side__box ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.side__box a {
  color: #fff8ec;
}
.side__box--light {
  background: var(--sand);
  color: var(--ink);
}
.side__box--cta {
  background: #fff;
  color: var(--ink);
  border: 1.5px solid var(--maroon);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.side__box--cta strong {
  font-size: 22px;
  color: var(--maroon);
}
.side__box--cta span:last-child {
  color: var(--muted);
}
.side__box--cta:hover {
  background: var(--paper);
  color: var(--ink);
}
.side__box--light p {
  margin: 0 0 6px;
}
@media (prefers-reduced-motion: reduce) {
  .acc__chev {
    transition: none;
  }
}
</style>
