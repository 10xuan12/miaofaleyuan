<script setup lang="ts">
import { site } from '~/data/site'

const { upcoming } = useUpcomingEvents()
const banner = computed(() => upcoming.value.slice(0, 3))

const nav = [
  { to: '/', label: '首頁' },
  { to: '/rinpoche', label: '熹嘉仁波切' },
  { to: '/events', label: '法會活動' },
  { to: '/learn', label: '修學園地' },
  { to: '/teachings', label: '授課資料' },
  { to: '/#online', label: '線上教室' },
  { to: '/support', label: '護持弘法' }
]

const menuOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (menuOpen.value = false))
</script>

<template>
  <div class="site">
    <a class="skip" href="#main">跳到主要內容</a>

    <div v-if="banner.length" class="announce">
      <div class="wrap announce__inner">
        <span class="announce__label">近期法會</span>
        <span class="announce__list">
          <span v-for="(e, i) in banner" :key="e.id" class="announce__item">
            {{ e.shortDate }} {{ e.title }}<span v-if="i < banner.length - 1" class="announce__sep">　・　</span>
          </span>
        </span>
        <NuxtLink to="/events" class="announce__more">看全部</NuxtLink>
      </div>
    </div>

    <header class="header">
      <div class="wrap header__inner">
        <NuxtLink to="/" class="brand" aria-label="妙法樂苑 首頁">
          <BrandMark />
          <span class="brand__text">
            <span class="brand__name">妙法樂苑</span>
            <span class="brand__sub">{{ site.tibetan }} ・ 熹嘉仁波切台灣弘法中心</span>
          </span>
        </NuxtLink>

        <button
          type="button"
          class="menu-btn"
          :aria-expanded="menuOpen"
          aria-controls="main-nav"
          aria-label="開啟選單"
          @click="menuOpen = !menuOpen"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path v-if="!menuOpen" d="M4 7h16M4 12h16M4 17h16" />
            <path v-else d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <nav id="main-nav" class="nav" :class="{ 'nav--open': menuOpen }" aria-label="主選單">
          <!-- 錨點連結（/#online）不算「目前頁面」，否則在首頁會跟「首頁」同時被標示 -->
          <NuxtLink v-for="n in nav" :key="n.to" v-slot="{ href, navigate, isExactActive }" :to="n.to" custom>
            <a
              :href="href"
              class="nav__link"
              :class="{ 'nav__link--active': isExactActive && !n.to.includes('#') }"
              :aria-current="isExactActive && !n.to.includes('#') ? 'page' : undefined"
              @click="navigate"
            >{{ n.label }}</a>
          </NuxtLink>
          <NuxtLink to="/events" class="btn btn--primary nav__cta">法會報名</NuxtLink>
        </nav>
      </div>
    </header>

    <main id="main">
      <slot />
    </main>

    <footer class="footer">
      <div class="wrap footer__inner">
        <div class="footer__brand">
          <strong class="serif">{{ site.org }}</strong>
          <span class="footer__tibetan">{{ site.tibetan }}</span>
          <span class="footer__muted">祝願正法久住，利益有情。</span>
        </div>
        <address class="footer__contact">
          <span>{{ site.address }}</span>
          <a :href="`tel:${site.phoneTel}`">{{ site.phone }}</a>
          <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        </address>
        <nav class="footer__nav" aria-label="頁尾選單">
          <NuxtLink to="/events">法會活動</NuxtLink>
          <NuxtLink to="/learn">修學園地</NuxtLink>
          <NuxtLink to="/teachings">授課資料</NuxtLink>
          <NuxtLink to="/support">護持弘法</NuxtLink>
          <a :href="site.officialSite" target="_blank" rel="noopener">佛學會官網</a>
        </nav>
      </div>
      <p class="footer__copy">© {{ new Date().getFullYear() }} {{ site.org }}</p>
    </footer>
  </div>
</template>

<style scoped>
.skip {
  position: absolute;
  left: -9999px;
}
.skip:focus {
  left: 16px;
  top: 16px;
  z-index: 100;
  background: #fff;
  padding: 8px 16px;
  border-radius: 8px;
}

.announce {
  background: var(--maroon-dark);
  color: var(--on-maroon);
  font-size: 14px;
}
.announce__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 16px;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
}
.announce__label {
  color: var(--gold);
  font-weight: 700;
}
.announce__more {
  color: var(--on-maroon);
}
/* 手機版公告列只顯示最近 1 場 */
@media (max-width: 640px) {
  .announce__item:not(:first-child),
  .announce__sep {
    display: none;
  }
}

.header {
  background: var(--bg);
  border-bottom: 1px solid var(--line);
  position: sticky;
  top: 0;
  z-index: 50;
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  min-height: 76px;
  flex-wrap: wrap;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--ink);
}
.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}
.brand__name {
  font-family: var(--serif);
  font-weight: 900;
  font-size: 22px;
  letter-spacing: 2px;
}
.brand__sub {
  font-size: 12px;
  color: var(--muted);
}

.nav {
  display: flex;
  align-items: center;
  gap: 4px 22px;
  font-weight: 500;
}
.nav__link {
  text-decoration: none;
  color: var(--ink);
  padding: 10px 0;
  border-bottom: 2px solid transparent;
}
.nav__link:hover {
  color: var(--maroon);
}
.nav__link--active {
  color: var(--maroon);
  border-bottom-color: var(--maroon);
  font-weight: 700;
}
.nav__cta {
  min-height: 42px;
  padding: 8px 20px;
}

.menu-btn {
  display: none;
  background: none;
  border: 0;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  color: var(--ink);
  cursor: pointer;
}

@media (max-width: 1100px) {
  .brand__sub {
    display: none;
  }
  .menu-btn {
    display: inline-flex;
  }
  .nav {
    display: none;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    padding: 8px 0 16px;
  }
  .nav--open {
    display: flex;
  }
  .nav__link {
    padding: 12px 4px;
    border-bottom: 1px solid var(--line);
  }
  .nav__link--active {
    border-bottom-color: var(--line);
  }
  .nav__cta {
    margin-top: 12px;
  }
}

.footer {
  background: var(--footer);
  color: #e9dfd2;
}
.footer a {
  color: #e9dfd2;
}
.footer a:hover {
  color: #fff;
}
.footer__inner {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between;
  padding-top: 56px;
  padding-bottom: 32px;
  font-size: 15px;
}
.footer__brand,
.footer__contact,
.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.footer__brand {
  flex: 1 1 280px;
}
.footer__brand strong {
  font-size: 22px;
  color: #fff8ec;
}
.footer__tibetan {
  color: var(--gold);
}
.footer__muted {
  color: #c9bcad;
}
.footer__contact {
  flex: 1 1 300px;
  font-style: normal;
}
.footer__nav {
  flex: 0 1 160px;
}
.footer__copy {
  margin: 0;
  text-align: center;
  padding: 16px 24px 28px;
  color: #a8998a;
  font-size: 13px;
  border-top: 1px solid #3e2a2a;
}
</style>
