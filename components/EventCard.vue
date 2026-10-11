<script setup lang="ts">
import type { EventView } from '~/composables/useEvents'
defineProps<{ event: EventView }>()
</script>

<template>
  <article class="card ev">
    <p class="ev__date serif">{{ event.shortDate }}<span>{{ event.weekdays }}</span></p>
    <h3 class="ev__title">{{ event.title }}</h3>
    <p class="ev__meta">{{ event.venue }}<br />{{ event.time }}</p>
    <span v-if="event.note" class="tag">{{ event.note }}</span>
    <div class="ev__actions">
      <a v-if="event.registerUrl" :href="event.registerUrl" target="_blank" rel="noopener">報名 →</a>
      <NuxtLink :to="`/events#${event.id}`" class="ev__more">詳情</NuxtLink>
    </div>
  </article>
</template>

<style scoped>
.ev__date {
  margin: 0;
  font-size: 34px;
  font-weight: 900;
  color: var(--maroon);
  line-height: 1.2;
}
.ev__date span {
  font-family: var(--sans);
  font-size: 14px;
  font-weight: 500;
  color: var(--muted);
  margin-left: 8px;
}
.ev__title {
  margin: 0;
  font-size: 19px;
}
.ev__meta {
  margin: 0;
  color: var(--muted);
  font-size: 15px;
}
.ev__actions {
  margin-top: auto;
  padding-top: 8px;
  display: flex;
  gap: 20px;
  font-weight: 700;
}
.ev__more {
  color: var(--muted);
}
</style>
