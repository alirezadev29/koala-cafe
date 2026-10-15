<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '../stores/cart';
import { useThemeStore } from '../stores/theme';

const router = useRouter();
const cartStore = useCartStore();
const themeStore = useThemeStore();

const isMenuOpen = ref(false);

const navLinks = [
  { name: 'خانه', to: '/' },
  { name: 'منو', to: '/' },
  { name: 'درباره ما', to: '/about' },
  { name: 'تماس', to: '/contact' }
];

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function goToCart() {
  router.push('/cart');
}
</script>

<template>
  <header class="header">
    <div class="container header-content">
      <!-- لوگو -->
      <RouterLink to="/" class="logo" @click="closeMenu">
        <svg class="logo-icon" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="19" stroke="currentColor" stroke-width="1" fill="none"/>
          <circle cx="20" cy="20" r="15" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.5"/>
          <text x="20" y="26" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="700" fill="currentColor">K</text>
        </svg>

        <div class="logo-text">
          <span class="logo-main">KOALA</span>
          <span class="logo-sub">CAFE · EST 2020</span>
        </div>
      </RouterLink>

      <!-- منوی دسکتاپ -->
      <nav class="nav-desktop">
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.to"
          class="nav-link"
        >
          {{ link.name }}
        </RouterLink>
      </nav>

      <!-- اکشن‌ها -->
      <div class="header-actions">
        <!-- دکمه تغییر تم -->
        <button
          class="theme-btn"
          @click="themeStore.toggleTheme()"
          :aria-label="themeStore.theme === 'dark' ? 'حالت روشن' : 'حالت تاریک'"
          :title="themeStore.theme === 'dark' ? 'حالت روشن' : 'حالت تاریک'"
        >
          <!-- آیکون خورشید (وقتی در حالت تاریک هستیم) -->
          <svg v-if="themeStore.theme === 'dark'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
            <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M6.34 17.66L4.93 19.07M19.07 4.93L17.66 6.34" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>

          <!-- آیکون ماه (وقتی در حالت روشن هستیم) -->
          <svg v-else viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- دکمه سبد خرید -->
        <button class="cart-btn" @click="goToCart" aria-label="سبد خرید">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M3 3H5L7 15H19L21 7H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="9" cy="20" r="1.5" fill="currentColor"/>
            <circle cx="18" cy="20" r="1.5" fill="currentColor"/>
          </svg>
          <span v-if="cartStore.totalItems > 0" class="cart-badge">
            {{ cartStore.totalItems }}
          </span>
        </button>

        <!-- دکمه رزرو -->
        <a href="tel:+989123456789" class="btn btn-gold header-cta">
          رزرو میز
        </a>

        <!-- همبرگر -->
        <button class="hamburger" @click="toggleMenu" aria-label="منو">
          <span :class="['bar', { open: isMenuOpen }]"></span>
          <span :class="['bar', { open: isMenuOpen }]"></span>
          <span :class="['bar', { open: isMenuOpen }]"></span>
        </button>
      </div>
    </div>

    <!-- منوی موبایل -->
    <nav :class="['nav-mobile', { open: isMenuOpen }]">
      <RouterLink
        v-for="link in navLinks"
        :key="link.name"
        :to="link.to"
        class="mobile-link"
        @click="closeMenu"
      >
        {{ link.name }}
      </RouterLink>
      <a href="tel:+989123456789" class="btn btn-gold mobile-cta">
        رزرو میز
      </a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.25rem 0;
  background: rgba(10, 10, 10, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
  z-index: 1000;
  transition: all 0.4s ease;
}

/* در تم روشن، پس‌زمینه هدر روشن‌تر */
[data-theme="light"] .header {
  background: rgba(250, 246, 240, 0.9);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* لوگو */
.logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: var(--gold);
}

.logo-icon {
  width: 44px;
  height: 44px;
  transition: transform 0.4s ease;
}

.logo:hover .logo-icon {
  transform: rotate(-10deg);
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
  direction: ltr;
}

.logo-main {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 8px;
  color: var(--cream);
}

.logo-sub {
  font-family: var(--font-body);
  font-size: 0.6rem;
  font-weight: 300;
  letter-spacing: 4px;
  color: var(--gold);
  margin-top: 6px;
  opacity: 0.8;
}

/* منوی دسکتاپ */
.nav-desktop {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--cream);
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 6px;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--gold);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--gold);
}

.nav-link:hover::after {
  width: 100%;
}

/* اکشن‌ها */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* دکمه تغییر تم */
.theme-btn {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-strong);
  border-radius: 50%;
  color: var(--gold);
  transition: all 0.3s ease;
  background: transparent;
  cursor: pointer;
}

.theme-btn svg {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
}

.theme-btn:hover {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--bg-primary);
  transform: rotate(15deg);
}

/* دکمه سبد */
.cart-btn {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-strong);
  border-radius: 50%;
  color: var(--gold);
  transition: all 0.3s ease;
  background: transparent;
  cursor: pointer;
}

.cart-btn svg {
  width: 20px;
  height: 20px;
}

.cart-btn:hover {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--bg-primary);
}

.cart-badge {
  position: absolute;
  top: -6px;
  right: -6px;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  background: var(--gold);
  color: var(--bg-primary);
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Vazirmatn', sans-serif;
}

.header-cta {
  padding: 0.7rem 1.5rem;
  font-size: 0.7rem;
  letter-spacing: 3px;
}

/* همبرگر */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 6px;
  width: 28px;
  padding: 5px 0;
  background: transparent;
  border: none;
  cursor: pointer;
}

.bar {
  width: 100%;
  height: 1px;
  background: var(--gold);
  transition: all 0.3s ease;
}

.bar.open:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.bar.open:nth-child(2) {
  opacity: 0;
}

.bar.open:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* منوی موبایل */
.nav-mobile {
  display: none;
  position: fixed;
  top: 74px;
  right: -100%;
  width: 300px;
  height: calc(100vh - 74px);
  background: var(--bg-secondary);
  flex-direction: column;
  padding: 3rem 2rem;
  gap: 1.5rem;
  border-left: 1px solid var(--border);
  transition: right 0.4s ease;
}

.nav-mobile.open {
  right: 0;
}

.mobile-link {
  font-size: 1rem;
  font-weight: 400;
  color: var(--cream);
  letter-spacing: 1px;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border);
  transition: color 0.3s ease;
}

.mobile-link:hover {
  color: var(--gold);
}

.mobile-cta {
  margin-top: 1rem;
  width: 100%;
}

/* ریسپانسیو */
@media (max-width: 900px) {
  .nav-desktop,
  .header-cta {
    display: none;
  }

  .hamburger {
    display: flex;
  }

  .nav-mobile {
    display: flex;
  }
}
</style>