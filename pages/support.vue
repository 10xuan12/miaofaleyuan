<script setup lang="ts">
import { site } from '~/data/site'

useHead({ title: '護持弘法' })

const copied = ref(false)
async function copyAccount() {
  try {
    await navigator.clipboard.writeText(site.bank.account.replace(/-/g, ''))
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {}
}
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="wrap">
        <p class="eyebrow">SUPPORT</p>
        <h1>護持弘法</h1>
        <p>佛法無價，弘法有賴十方善信共同護持。</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap support">
        <div class="support__text">
          <p>妙法樂苑所有法義文字、音檔及相關資料，皆免費提供大眾閱覽與學習。</p>
          <p>若您願意隨喜護持熹嘉仁波切弘法事業，您的發心將用於道場弘法、網站維護、法義整理及相關公益支出。願此善行，廣植福田，利益一切有情。</p>
          <p>若您目前因緣未具足，歡迎持續聞法、學法、分享正法，亦是護持弘法。</p>
          <p class="verse serif">一念善心，皆為護持正法；<br />一分發心，皆為利益有情。</p>
        </div>

        <aside class="card support__box">
          <h2 class="serif">護持方式</h2>
          <dl class="bank">
            <dt>銀行</dt>
            <dd>{{ site.bank.name }}（{{ site.bank.code }}）</dd>
            <dt>分行</dt>
            <dd>{{ site.bank.branch }}</dd>
            <dt>帳號</dt>
            <dd class="bank__account">
              <span>{{ site.bank.account }}</span>
              <button type="button" class="bank__copy" @click="copyAccount">{{ copied ? '已複製' : '複製' }}</button>
            </dd>
            <dt>戶名</dt>
            <dd>{{ site.bank.holder }}</dd>
          </dl>
          <p>如需護持或有任何疑問，請與我們聯絡：</p>
          <a :href="`tel:${site.phoneTel}`" class="btn btn--primary btn--block">致電 {{ site.phone }}</a>
          <a :href="`mailto:${site.email}`" class="btn btn--outline btn--block">寫信給我們</a>
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.support {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-start;
}
.support__text {
  flex: 1 1 520px;
  min-width: 0;
  font-size: 17px;
  color: var(--ink-2);
}
.verse {
  margin-top: 32px;
  font-size: 22px;
  color: var(--maroon);
  font-weight: 700;
  line-height: 1.8;
}
.support__box {
  flex: 1 1 320px;
  gap: 12px;
  padding: 32px;
}
.support__box h2 {
  margin: 0;
  font-size: 24px;
}
.support__box p {
  margin: 0;
}
.bank {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px 16px;
  margin: 0;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 16px 18px;
}
.bank dt {
  color: var(--muted);
}
.bank dd {
  margin: 0;
  color: var(--ink);
  font-weight: 500;
  min-width: 0;
  overflow-wrap: anywhere;
}
.bank__account {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
.bank__account span {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--maroon);
  font-variant-numeric: tabular-nums;
}
.bank__copy {
  font: inherit;
  font-size: 13px;
  padding: 2px 10px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: #fff;
  color: var(--gold-text);
  cursor: pointer;
}
</style>
