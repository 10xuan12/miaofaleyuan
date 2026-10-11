<script setup lang="ts">
import { site } from '~/data/site'
import { studyPath, classics, studyUrl } from '~/data/courses'
import rinpochePhoto from '~/assets/images/rinpoche.jpg'

useHead({ title: '' })

const { upcoming } = useUpcomingEvents()
const next = computed(() => upcoming.value[0])
const rest = computed(() => upcoming.value.slice(1, 5))
</script>

<template>
  <div>
    <!-- 首屏 -->
    <section class="hero">
      <div class="wrap row hero__inner">
        <div class="hero__text">
          <p class="hero__tibetan">{{ site.tibetan }}</p>
          <h1 class="serif hero__title">善說之法<br />喜樂之園</h1>
          <p class="hero__lead">
            妙法樂苑由達賴喇嘛尊者於 2019 年賜名，是熹嘉仁波切在台灣的弘法佛學中心。依格魯派傳承，從攝類學、心類學到宗義與地道，次第引導聞、思、修。
          </p>
          <div class="hero__cta">
            <NuxtLink to="/events" class="btn btn--gold">查看近期法會</NuxtLink>
            <a href="#online" class="btn btn--ghost-light">進入線上教室</a>
          </div>
        </div>

        <article v-if="next" class="next">
          <p class="eyebrow">下一場法會</p>
          <h2 class="serif next__title">{{ next.title }}</h2>
          <p class="next__summary">{{ next.summary }}</p>
          <dl class="next__meta">
            <div><dt>日期</dt><dd>{{ next.longDate }}</dd></div>
            <div><dt>時間</dt><dd>{{ next.time }}</dd></div>
            <div><dt>地點</dt><dd>{{ next.venue }}</dd></div>
          </dl>
          <a v-if="next.registerUrl" :href="next.registerUrl" class="btn btn--primary btn--block" target="_blank" rel="noopener">立即報名</a>
        </article>
      </div>
    </section>

    <!-- 近期法會 -->
    <section v-if="rest.length" class="section" aria-labelledby="up-title">
      <div class="wrap">
        <div class="head-row">
          <div>
            <p class="eyebrow">UPCOMING</p>
            <h2 id="up-title" class="section-title">近期法會</h2>
          </div>
          <NuxtLink to="/events" class="more">完整行事曆 →</NuxtLink>
        </div>
        <div class="grid">
          <EventCard v-for="e in rest" :key="e.id" :event="e" />
        </div>
      </div>
    </section>

    <!-- 線上教室 -->
    <section id="online" class="section section--tight">
      <div class="wrap">
        <OnlineClassroom />
      </div>
    </section>

    <!-- 依次第修學 -->
    <section class="section" aria-labelledby="path-title">
      <div class="wrap">
        <p class="eyebrow">STUDY PATH</p>
        <h2 id="path-title" class="section-title" style="margin-bottom: 8px">依次第修學</h2>
        <p class="lead">不知從哪裡開始？依寺院傳統的學習順序，從 01 開始讀。所有講記皆免費開放。</p>
        <ol class="steps">
          <li v-for="c in studyPath" :key="c.path">
            <NuxtLink :to="`/learn#${c.no}`" class="card step">
              <span class="step__no serif">{{ c.no }}</span>
              <strong class="step__title">{{ c.title }}</strong>
              <span class="step__desc">{{ c.desc }}</span>
            </NuxtLink>
          </li>
        </ol>
        <div class="classics">
          <span class="classics__label">經典閱讀</span>
          <a v-for="c in classics" :key="c.path" :href="studyUrl(c.path)" class="chip" target="_blank" rel="noopener">{{ c.title.replace(/[《》]/g, '').replace('講記', '') }}</a>
        </div>
      </div>
    </section>

    <!-- 仁波切 -->
    <section class="teacher">
      <div class="wrap row section">
        <img :src="rinpochePhoto" alt="第五世熹嘉祖古仁波切" width="480" height="600" class="photo teacher__photo" loading="lazy" />
        <div class="teacher__text">
          <p class="eyebrow">THE TEACHER</p>
          <h2 class="section-title" style="margin-bottom: 0">第五世 熹嘉祖古仁波切</h2>
          <p class="teacher__bio">
            1983 年生於南印度藏人屯墾區，自幼於甘丹寺北學院學習。2009 年取得格西學位，2019 年由達賴喇嘛尊者任命為南印度札什倫布寺堪布。弘法足跡遍及台灣、美國、加拿大、日本與歐洲，並固定於網路為各地華人法友授課。
          </p>
          <dl class="milestones">
            <div><dt class="serif">2009</dt><dd>取得格西學位</dd></div>
            <div><dt class="serif">2018</dt><dd>開始線上弘法</dd></div>
            <div><dt class="serif">2019</dt><dd>任札什倫布寺堪布</dd></div>
          </dl>
          <NuxtLink to="/rinpoche" class="more">完整簡介 →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 護持＋追蹤 -->
    <section class="section">
      <div class="wrap support-row">
        <div class="support-card">
          <h2 class="serif">護持弘法</h2>
          <p>樂苑所有法義文字、音檔皆免費開放。您的隨喜將用於道場弘法、網站維護與法義整理。因緣未具足時，持續聞法、分享正法，亦是護持。</p>
          <NuxtLink to="/support" class="btn btn--gold">了解護持方式</NuxtLink>
        </div>
        <div class="follow-card">
          <h2 class="serif">追蹤法訊</h2>
          <p>加入群組，第一時間收到法會與課程通知。</p>
          <div class="follow-grid">
            <a v-for="s in site.social" :key="s.url" :href="s.url" target="_blank" rel="noopener" class="follow-link">{{ s.label }}</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background: var(--maroon);
  color: #fff8ec;
}
.hero__inner {
  padding-top: 80px;
  padding-bottom: 88px;
  gap: 56px;
}
.hero__text {
  flex: 1 1 500px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.hero__tibetan {
  margin: 0;
  font-size: 22px;
  color: var(--gold);
  letter-spacing: 2px;
}
.hero__title {
  margin: 0;
  font-weight: 900;
  font-size: clamp(44px, 7vw, 64px);
  line-height: 1.2;
  letter-spacing: 4px;
}
.hero__lead {
  margin: 0;
  font-size: 18px;
  color: var(--on-maroon);
  max-width: 560px;
}
.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
}

.next {
  flex: 1 1 360px;
  min-width: 0;
  background: var(--paper);
  color: var(--ink);
  border-radius: 20px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.next__title {
  margin: 0;
  font-size: 28px;
}
.next__summary {
  margin: 0;
  color: var(--muted);
}
.next__meta {
  margin: 0;
  border-top: 1px solid var(--line);
  padding-top: 14px;
  display: grid;
  gap: 4px;
  font-size: 15px;
}
.next__meta div {
  display: flex;
  gap: 12px;
}
.next__meta dt {
  font-weight: 700;
  flex: 0 0 auto;
}
.next__meta dd {
  margin: 0;
}

.head-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 12px;
}
.more {
  font-weight: 700;
}

.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 16px;
}
.step {
  height: 100%;
  text-decoration: none;
  color: var(--ink);
  transition: border-color 0.15s ease, transform 0.15s ease;
}
.step:hover {
  border-color: var(--maroon);
  transform: translateY(-2px);
  color: var(--ink);
}
.step__no {
  font-size: 28px;
  font-weight: 900;
  color: var(--gold-num);
}
.step__title {
  font-size: 19px;
}
.step__desc {
  color: var(--muted);
  font-size: 15px;
}
.classics {
  margin-top: 28px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}
.classics__label {
  font-weight: 700;
  color: var(--muted);
  margin-right: 6px;
}

.teacher {
  background: #fff;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.teacher__photo {
  flex: 1 1 320px;
  min-width: 0;
  max-width: 420px;
}
.teacher__text {
  flex: 1 1 520px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.teacher__bio {
  margin: 0;
  color: var(--ink-2);
}
.milestones {
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
}
.milestones div {
  background: var(--bg);
  border-radius: 12px;
  padding: 14px 16px;
}
.milestones dt {
  font-size: 26px;
  font-weight: 900;
  color: var(--maroon);
}
.milestones dd {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
}

.support-row {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}
.support-card,
.follow-card {
  border-radius: 24px;
  padding: 44px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
}
.support-card h2,
.follow-card h2 {
  margin: 0;
  font-size: 30px;
}
.support-card p,
.follow-card p {
  margin: 0;
}
.support-card {
  flex: 1 1 520px;
  background: var(--maroon);
  color: #fff8ec;
}
.support-card p {
  color: var(--on-maroon);
}
.follow-card {
  flex: 1 1 340px;
  background: var(--sand);
}
.follow-card p {
  color: var(--ink-2);
}
.follow-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
}
.follow-link {
  background: #fff;
  color: var(--ink);
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  padding: 14px;
  border-radius: 12px;
}
.follow-link:hover {
  color: var(--maroon);
}
@media (max-width: 640px) {
  .support-card,
  .follow-card,
  .next {
    padding: 28px 22px;
  }
  .milestones dt {
    font-size: 22px;
  }
}
</style>
