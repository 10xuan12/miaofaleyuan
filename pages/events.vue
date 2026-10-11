<script setup lang="ts">
import { site } from '~/data/site'
import type { Region } from '~/data/events'

useHead({ title: '法會活動' })

const { upcoming } = useUpcomingEvents()

const regions = computed<Array<'全部' | Region>>(() => {
  const set = new Set(upcoming.value.map((e) => e.region))
  return ['全部', ...set]
})
const active = ref<'全部' | Region>('全部')
const list = computed(() =>
  active.value === '全部' ? upcoming.value : upcoming.value.filter((e) => e.region === active.value)
)
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="wrap">
        <p class="eyebrow">EVENTS</p>
        <h1>法會活動</h1>
        <p>尊貴的熹嘉仁波切親臨台灣傳法。口傳需實體參與方能得到傳承，請提早報名。問題請洽 {{ site.phone }} 或 {{ site.email }}。</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div v-if="regions.length > 2" class="filters" role="group" aria-label="依地區篩選">
          <button
            v-for="r in regions"
            :key="r"
            type="button"
            class="filter"
            :class="{ 'filter--on': active === r }"
            :aria-pressed="active === r"
            @click="active = r"
          >
            {{ r }}
          </button>
        </div>

        <p v-if="!list.length" class="empty">目前沒有即將舉辦的法會，請加入 LINE 群組接收最新消息。</p>

        <article v-for="e in list" :id="e.id" :key="e.id" class="event">
          <div class="event__date">
            <span class="event__month">{{ e.month }}</span>
            <span class="event__day serif">{{ e.shortDate }}</span>
            <span class="event__wd">星期{{ e.weekdays }}</span>
          </div>

          <div class="event__body">
            <span class="tag">{{ e.region }}<template v-if="e.note">・{{ e.note }}</template></span>
            <h2 class="serif event__title">{{ e.title }}</h2>
            <p class="event__summary">{{ e.summary }}</p>
            <dl class="event__meta">
              <div><dt>日期</dt><dd>{{ e.longDate }}</dd></div>
              <div><dt>時間</dt><dd>{{ e.time }}</dd></div>
              <div><dt>地點</dt><dd>{{ e.venue }}<template v-if="e.address"><br />{{ e.address }}</template></dd></div>
              <div v-if="e.organizer"><dt>主辦</dt><dd>{{ e.organizer }}</dd></div>
              <div v-if="e.contact"><dt>聯絡</dt><dd>{{ e.contact }}</dd></div>
            </dl>
          </div>

          <div class="event__actions">
            <a v-if="e.registerUrl" :href="e.registerUrl" class="btn btn--primary btn--block" target="_blank" rel="noopener">立即報名</a>
            <a v-if="e.mapUrl" :href="e.mapUrl" class="btn btn--outline btn--block" target="_blank" rel="noopener">地圖導航</a>
            <a v-if="e.extraLink" :href="e.extraLink.url" class="btn btn--outline btn--block" target="_blank" rel="noopener">{{ e.extraLink.label }}</a>
          </div>
        </article>

        <aside class="weekly">
          <OnlineClassroom />
        </aside>
      </div>
    </section>
  </div>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}
.filter {
  font: inherit;
  min-height: 44px;
  padding: 8px 20px;
  border-radius: 999px;
  border: 1.5px solid #cdbfab;
  background: #fff;
  color: var(--ink);
  cursor: pointer;
}
.filter--on {
  background: var(--maroon);
  border-color: var(--maroon);
  color: #fff;
  font-weight: 700;
}
.empty {
  padding: 32px;
  background: #fff;
  border-radius: var(--radius);
  border: 1px solid var(--line);
}

.event {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px 40px;
  scroll-margin-top: 96px;
}
.event:target {
  border-color: var(--maroon);
  box-shadow: 0 0 0 3px rgba(110, 30, 34, 0.12);
}
.event__date {
  flex: 0 0 140px;
  display: flex;
  flex-direction: column;
}
.event__month {
  color: var(--gold-text);
  font-weight: 700;
  letter-spacing: 1px;
}
.event__day {
  font-size: 44px;
  font-weight: 900;
  color: var(--maroon);
  line-height: 1.15;
}
.event__wd {
  color: var(--muted);
}
.event__body {
  flex: 1 1 420px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.event__title {
  margin: 0;
  font-size: clamp(22px, 3vw, 28px);
}
.event__summary {
  margin: 0;
  color: var(--ink-2);
}
.event__meta {
  margin: 4px 0 0;
  display: grid;
  gap: 6px;
  font-size: 15px;
}
.event__meta div {
  display: flex;
  gap: 14px;
}
.event__meta dt {
  color: var(--muted);
  flex: 0 0 2.5em;
}
.event__meta dd {
  margin: 0;
}
.event__actions {
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
}
.weekly {
  margin-top: 48px;
}
@media (max-width: 720px) {
  .event {
    padding: 24px 20px;
  }
  .event__date {
    flex-basis: 100%;
    flex-direction: row;
    align-items: baseline;
    gap: 10px;
  }
  .event__day {
    font-size: 34px;
  }
  .event__actions {
    flex-basis: 100%;
  }
}
</style>
