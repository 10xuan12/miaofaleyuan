<script setup lang="ts">
import rinpochePhoto from '~/assets/images/rinpoche.jpg'

useHead({ title: '熹嘉仁波切' })

// 年表：依原網站「第五世祖古熹嘉仁波切簡介」整理（已修正原文重複與順序）
const timeline = [
  { year: '1983', text: '誕生於南印度的藏人屯墾區，父母從事服飾行業。' },
  { year: '1984', text: '5 月，不到 2 歲即被探訪隊認證為第 4 世熹嘉祖古仁波切（西藏甘孜寺寺主之一）的轉世。' },
  { year: '1988', text: '8 月進入南印度甘丹寺北學院學習，依止堪蘇洛桑曲尼仁波切為根本上師。' },
  { year: '1990', text: '12 月 2 日出家，受沙彌戒。' },
  { year: '2003', text: '3 月 12 日受比丘戒。' },
  { year: '2009', text: '25 歲通過格西學位與噶欽學位，並圓滿南印度下密院密續課程；隨即由達賴喇嘛尊者任命至札什倫布寺擔任經教師。' },
  { year: '2018', text: '開始為台灣、中國、新加坡、香港、加拿大等地法友線上教授佛法。' },
  { year: '2019', text: '2 月 11 日由達賴喇嘛尊者任命為南印度札什倫布寺堪布；同年尊者賜名「妙法樂苑」為仁波切在台灣的弘法中心。' },
  { year: '2019–', text: '弘法足跡遍及美國、加拿大、日本、義大利、英國及台灣，並固定於網路為各地華人信眾授課。' }
]
</script>

<template>
  <div>
    <section class="page-hero">
      <div class="wrap">
        <p class="eyebrow">THE TEACHER</p>
        <h1>第五世 熹嘉祖古仁波切</h1>
        <p>南印度札什倫布寺堪布，格西。妙法樂苑導師。</p>
      </div>
    </section>

    <section class="section">
      <div class="wrap row intro">
        <img :src="rinpochePhoto" alt="第五世熹嘉祖古仁波切" width="480" height="600" class="photo intro__photo" />
        <div class="intro__text">
          <blockquote class="quote serif">
            「擔任堪布一職，責任重大，不勝惶恐！但是，尊者達賴喇嘛和我的上師就是我的保護網。」
          </blockquote>
          <p>
            多年的學習，仁波切深刻體會師、法、友的重要：修道過程中，一定需要師長攝受，以及同參道友的切磋增上。因此仁波切發願為寺院與佛法做出更大貢獻——為希求學法的人開設更多佛法課程與進階課程，使學法者有所依歸，令聖教廣弘。
          </p>
        </div>
      </div>
    </section>

    <section class="section section--tight timeline-sec">
      <div class="wrap">
        <h2 class="section-title">年表</h2>
        <ol class="timeline">
          <li v-for="t in timeline" :key="t.year + t.text">
            <span class="timeline__year serif">{{ t.year }}</span>
            <p>{{ t.text }}</p>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<style scoped>
.intro__photo {
  flex: 1 1 300px;
  min-width: 0;
  max-width: 380px;
}
.intro__text {
  flex: 1 1 520px;
  min-width: 0;
}
.quote {
  margin: 0 0 24px;
  font-size: clamp(20px, 2.6vw, 26px);
  line-height: 1.6;
  color: var(--maroon);
  font-weight: 700;
}
.intro__text p {
  color: var(--ink-2);
}
.timeline-sec {
  padding-bottom: 96px;
}
.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  border-left: 2px solid var(--line);
}
.timeline li {
  position: relative;
  padding: 0 0 28px 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px 24px;
}
.timeline li::before {
  content: '';
  position: absolute;
  left: -7px;
  top: 10px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--maroon);
}
.timeline__year {
  flex: 0 0 90px;
  font-size: 22px;
  font-weight: 900;
  color: var(--maroon);
}
.timeline p {
  flex: 1 1 400px;
  margin: 0;
}
</style>
