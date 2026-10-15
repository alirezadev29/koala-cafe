<script setup>
defineProps({
  type: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 56
  }
});
</script>

<template>
  <div class="item-icon" :style="{ width: size + 'px', height: size + 'px' }">
    <!-- اسپرسو - فنجان کلاسیک -->
    <svg v-if="type === 'espresso'" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 22H42V40C42 46.6274 36.6274 52 30 52H22C15.3726 52 10 46.6274 10 40V22Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M42 28H48C51.3137 28 54 30.6863 54 34C54 37.3137 51.3137 40 48 40H42" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
      <line x1="6" y1="57" x2="46" y2="57" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M20 14C20 16 22 16.5 22 18.5M30 14C30 16 32 16.5 32 18.5M40 14C40 16 42 16.5 42 18.5" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.4"/>
    </svg>

    <!-- امضا - فنجان با شعاع -->
    <svg v-else-if="type === 'signature'" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 22H46V42C46 48.6274 40.6274 54 34 54H20C13.3726 54 8 48.6274 8 42V22Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M46 28H52C55.3137 28 58 30.6863 58 34C58 37.3137 55.3137 40 52 40H46" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
      <line x1="4" y1="58" x2="50" y2="58" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M27 10L27 20M22 15L32 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
      <circle cx="27" cy="15" r="6" stroke="currentColor" stroke-width="1" opacity="0.4"/>
    </svg>

    <!-- گرم - فنجان با بخار -->
    <svg v-else-if="type === 'hot'" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 22H42V44C42 49.5228 37.5228 54 32 54H24C18.4772 54 14 49.5228 14 44V22Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M42 28H48C51.3137 28 54 30.6863 54 34C54 37.3137 51.3137 40 48 40H42" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
      <line x1="10" y1="58" x2="46" y2="58" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M22 15C22 12 20 12 20 9M32 15C32 12 30 12 30 9M42 15C42 12 40 12 40 9" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.5"/>
    </svg>

    <!-- سرد - لیوان -->
    <svg v-else-if="type === 'cold'" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 12L19 54H45L48 12H16Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
      <line x1="13" y1="12" x2="51" y2="12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="30" y1="4" x2="38" y2="22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.7"/>
      <line x1="22" y1="26" x2="42" y2="26" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
      <line x1="23" y1="36" x2="41" y2="36" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
      <line x1="24" y1="46" x2="40" y2="46" stroke="currentColor" stroke-width="0.8" opacity="0.4"/>
    </svg>

    <!-- صبحانه - بشقاب با تخم مرغ -->
    <svg v-else-if="type === 'breakfast'" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="24" stroke="currentColor" stroke-width="1.2"/>
      <circle cx="32" cy="32" r="16" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
      <ellipse cx="32" cy="32" rx="8" ry="7" stroke="currentColor" stroke-width="1.2"/>
      <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.7"/>
    </svg>

    <!-- دسر - کیک با طبقات -->
    <svg v-else-if="type === 'dessert'" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 34H48V50C48 52.2091 46.2091 54 44 54H20C17.7909 54 16 52.2091 16 50V34Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
      <path d="M20 34C20 27.3726 25.3726 22 32 22C38.6274 22 44 27.3726 44 34" stroke="currentColor" stroke-width="1.2"/>
      <line x1="32" y1="22" x2="32" y2="14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <circle cx="32" cy="12" r="2" fill="currentColor"/>
      <line x1="16" y1="40" x2="48" y2="40" stroke="currentColor" stroke-width="0.8" opacity="0.5"/>
    </svg>

    <!-- غذای اصلی - کارد و چنگال -->
    <svg v-else-if="type === 'main'" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 8V24C20 26.2091 21.7909 28 24 28C26.2091 28 28 26.2091 28 24V8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="24" y1="28" x2="24" y2="56" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="14" y1="8" x2="14" y2="20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <line x1="34" y1="8" x2="34" y2="20" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      <path d="M46 8C42 8 40 12 40 20C40 26 42 30 46 30V56" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

    <!-- پیش‌فرض -->
    <svg v-else viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="20" stroke="currentColor" stroke-width="1.2"/>
      <circle cx="32" cy="32" r="8" stroke="currentColor" stroke-width="1.2"/>
    </svg>
  </div>
</template>

<style scoped>
.item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.item-icon svg {
  width: 100%;
  height: 100%;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>