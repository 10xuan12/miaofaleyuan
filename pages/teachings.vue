<script setup lang="ts">
import { site } from '~/data/site'

useHead({ title: '授課資料' })

const folderUrl = `https://drive.google.com/drive/folders/${site.teachings.folderId}`
// Google 雲端硬碟官方的資料夾嵌入檢視（僅限公開分享的資料夾）
const embedUrl = `https://drive.google.com/embeddedfolderview?id=${site.teachings.folderId}#list`
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="wrap">
        <p class="eyebrow">TEACHINGS</p>
        <h1>授課資料</h1>
        <p>熹嘉仁波切歷次授課的檔案，統一存放於 Google 雲端硬碟，免費提供大眾聞思學習。</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap layout">
        <div class="main">
          <div class="head-row">
            <h2 class="serif folder-title">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
              {{ site.teachings.title }}
            </h2>
            <a :href="folderUrl" class="btn btn--primary" target="_blank" rel="noopener">在 Google 雲端硬碟開啟</a>
          </div>

          <div class="embed">
            <iframe
              :src="embedUrl"
              :title="`${site.teachings.title} 檔案清單`"
              loading="lazy"
            />
          </div>
          <p class="hint">看不到清單？請直接點上方「在 Google 雲端硬碟開啟」。</p>
        </div>

        <aside class="side">
          <div class="side__box">
            <h2 class="serif">怎麼使用</h2>
            <ol>
              <li>點資料夾或檔案名稱即可開啟。</li>
              <li>手機上建議安裝「Google 雲端硬碟」App，播放與閱讀較順暢。</li>
              <li>不需要 Google 帳號也能檢視。</li>
            </ol>
          </div>
          <div class="side__box side__box--light">
            <h2 class="serif">搭配學習</h2>
            <p>依次第閱讀講記，或參加每週線上課程。</p>
            <NuxtLink to="/learn" class="side__link">修學園地 →</NuxtLink>
            <NuxtLink to="/#online" class="side__link">線上教室 →</NuxtLink>
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
.head-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}
.folder-title {
  margin: 0;
  font-size: clamp(22px, 3vw, 28px);
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--maroon);
}
.embed {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
}
.embed iframe {
  display: block;
  width: 100%;
  height: 560px;
  border: 0;
}
.hint {
  margin: 12px 0 0;
  color: var(--muted);
  font-size: 14px;
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
.side__box ol {
  margin: 0;
  padding-left: 1.2em;
  display: flex;
  flex-direction: column;
  gap: 6px;
  color: var(--on-maroon);
}
.side__box--light {
  background: var(--sand);
  color: var(--ink);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.side__box--light h2 {
  margin-bottom: 4px;
}
.side__box--light p {
  margin: 0;
  color: var(--ink-2);
}
.side__link {
  font-weight: 700;
}
@media (max-width: 640px) {
  .embed iframe {
    height: 460px;
  }
}
</style>
