<script setup>
import { ref, computed } from 'vue';
import { menuItems, categories, getFeaturedItems } from '../data/menuData';
import MenuCard from '../components/MenuCard.vue';

const selectedCategory = ref('all');
const searchQuery = ref('');

const featuredItems = computed(() => getFeaturedItems().slice(0, 3));
// برای انیمیشن کارت‌ها
const animationKey = ref(0);

const filteredItems = computed(() => {
  let items = menuItems;

  if (selectedCategory.value !== 'all') {
    items = items.filter((item) => item.category === selectedCategory.value);
  }

  if (searchQuery.value.trim()) {
    const query = searchQuery.value.trim().toLowerCase();
    items = items.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  }

  return items;
});

function handleAddToCart(item) {
  console.log('افزودن به سبد:', item.name);
}
</script>

<template>
  <div class="home">
    <!-- ============ Hero Section ============ -->
    <section class="hero">
      <div class="container hero-content">
        <div class="hero-text">
          <span class="hero-eyebrow">Koala Cafe · Since 2020</span>

          <h1 class="hero-title">
            کافه
            <span class="gold-text">کوالا</span>
          </h1>

          <div class="hero-divider"></div>

          <p class="hero-desc">
            جایی که قهوه، آرامش و طعم لاکچری به هم می‌رسند.
            منوی اختصاصی ما را کشف کنید.
          </p>

          <div class="hero-buttons">
            <a href="#menu" class="btn btn-gold">مشاهده منو</a>
            <a href="tel:+989123456789" class="btn btn-outline">رزرو میز</a>
          </div>
        </div>

        <div class="hero-visual">
          <div class="hero-frame">
            <svg class="hero-koala" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="koalaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#3a3a3a" />
                  <stop offset="100%" stop-color="#1a1a1a" />
                </linearGradient>
              </defs>

              <!-- گوش‌ها -->
              <ellipse cx="55" cy="60" rx="24" ry="28" fill="url(#koalaGrad)" stroke="#c9a961" stroke-width="1"/>
              <ellipse cx="145" cy="60" rx="24" ry="28" fill="url(#koalaGrad)" stroke="#c9a961" stroke-width="1"/>
              <ellipse cx="55" cy="60" rx="12" ry="16" fill="#0a0a0a" stroke="#c9a961" stroke-width="0.5" opacity="0.7"/>
              <ellipse cx="145" cy="60" rx="12" ry="16" fill="#0a0a0a" stroke="#c9a961" stroke-width="0.5" opacity="0.7"/>

              <!-- سر -->
              <ellipse cx="100" cy="115" rx="68" ry="62" fill="url(#koalaGrad)" stroke="#c9a961" stroke-width="1.2"/>

              <!-- صورت روشن -->
              <ellipse cx="100" cy="125" rx="38" ry="32" fill="#0a0a0a" opacity="0.6"/>

              <!-- چشم‌ها -->
              <ellipse cx="78" cy="108" rx="7" ry="9" fill="#c9a961"/>
              <ellipse cx="122" cy="108" rx="7" ry="9" fill="#c9a961"/>
              <circle cx="80" cy="106" r="2.5" fill="#0a0a0a"/>
              <circle cx="124" cy="106" r="2.5" fill="#0a0a0a"/>

              <!-- بینی -->
              <ellipse cx="100" cy="138" rx="14" ry="9" fill="#c9a961"/>

              <!-- دهان -->
              <path d="M100 147 Q92 154 87 150" stroke="#c9a961" stroke-width="1.5" fill="none" stroke-linecap="round"/>
              <path d="M100 147 Q108 154 113 150" stroke="#c9a961" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ Featured Section ============ -->
    <section class="section featured-section">
      <div class="container">
        <span class="section-eyebrow">Signature Selection</span>
        <h2 class="section-title">
          پیشنهادهای <span class="gold-text">ویژه</span>
        </h2>
        <p class="section-subtitle">
          انتخاب‌های خاص سرآشپز برای شما
        </p>

        <div class="featured-grid">
          <MenuCard
            v-for="item in featuredItems"
            :key="item.id"
            :item="item"
            @add-to-cart="handleAddToCart"
          />
        </div>
      </div>
    </section>

    <!-- ============ Menu Section ============ -->
    <section id="menu" class="section menu-section">
      <div class="container">
        <span class="section-eyebrow">Our Menu</span>
        <h2 class="section-title">
          منوی <span class="gold-text">کافه</span>
        </h2>
        <p class="section-subtitle">
          همه چیزهایی که در کافه کوالا می‌توانید میل کنید
        </p>

        <!-- Search -->
        <div class="search-wrapper">
          <svg class="search-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.2" />
            <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="جستجو در منو..."
          />
        </div>

        <!-- Categories -->
        <div class="categories">
          <button
            v-for="cat in categories"
            :key="cat.id"
            :class="['category-btn', { active: selectedCategory === cat.id }]"
            @click="selectedCategory = cat.id"
          >
            {{ cat.name }}
          </button>
        </div>

        <!-- Items Grid -->
        <div v-if="filteredItems.length" class="menu-grid">
          <div
            v-for="(item, index) in filteredItems"
            :key="`${item.id}-${animationKey}`"
            class="card-wrapper"
            :style="{ animationDelay: `${index * 50}ms` }"
          >
            <MenuCard
              :item="item"
              @add-to-cart="handleAddToCart"
            />
          </div>
        </div>

        <!-- No Results -->
        <div v-else class="no-results">
          <svg class="no-results-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
            <circle cx="28" cy="28" r="18" stroke="currentColor" stroke-width="1.2"/>
            <path d="M42 42L54 54" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
          <p>چیزی پیدا نشد</p>
          <button class="btn btn-outline" @click="searchQuery = ''; selectedCategory = 'all'">
            پاک کردن فیلترها
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  padding-top: 90px;
}

/* ============================================
   HERO SECTION
   ============================================ */
.hero {
  padding: 5rem 0 7rem;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--border-subtle);
}

.hero::before {
  content: '';
  position: absolute;
  top: 50%;
  right: -15%;
  width: 700px;
  height: 700px;
  background: radial-gradient(
    circle,
    rgba(201, 169, 97, 0.08) 0%,
    transparent 70%
  );
  transform: translateY(-50%);
  pointer-events: none;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 5rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

/* متن Hero */
.hero-eyebrow {
  display: inline-block;
  font-family: var(--font-luxury);
  font-size: 0.72rem;
  font-weight: 400;
  color: var(--gold);
  letter-spacing: 8px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  opacity: 0.85;
}

.hero-title {
  font-family: var(--font-persian);
  font-size: 5rem;
  font-weight: 800;
  line-height: 1.15;
  color: var(--cream);
  margin-bottom: 2rem;
  letter-spacing: -1px;
}

.hero-title .gold-text {
  font-family: var(--font-persian);
  font-weight: 800;
  color: var(--gold);
  letter-spacing: 0;
}

.hero-divider {
  width: 60px;
  height: 1px;
  background: var(--gold);
  margin-bottom: 2rem;
  opacity: 0.6;
}

.hero-desc {
  font-size: 1rem;
  color: var(--gray);
  line-height: 2.2;
  margin-bottom: 3rem;
  max-width: 480px;
  font-weight: 400;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* ویژوال Hero */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-frame {
  width: 340px;
  height: 340px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  animation: float 5s ease-in-out infinite;
}

.hero-frame::before {
  content: '';
  position: absolute;
  inset: -20px;
  border: 1px solid rgba(201, 169, 97, 0.3);
  border-radius: 50%;
  animation: pulse-ring 3s ease-out infinite;
}

.hero-frame::after {
  content: '';
  position: absolute;
  inset: 12px;
  border: 1px solid rgba(201, 169, 97, 0.5);
  border-radius: 50%;
}

.hero-koala {
  width: 220px;
  height: 220px;
  filter: drop-shadow(0 20px 40px rgba(201, 169, 97, 0.2));
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(1.15);
    opacity: 0;
  }
}

/* ============================================
   FEATURED SECTION
   ============================================ */
.featured-section {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-subtle);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* ============================================
   MENU SECTION
   ============================================ */
.menu-section {
  background: var(--bg-primary);
}

/* Search */
.search-wrapper {
  position: relative;
  max-width: 500px;
  margin: 0 auto 4rem;
}

.search-icon {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  color: var(--gold);
  pointer-events: none;
  opacity: 0.7;
}

.search-wrapper input {
  width: 100%;
  padding: 1rem 4rem 1rem 1.5rem;
  border: 1px solid var(--border-strong);
  background: transparent;
  border-radius: 0;
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 400;
  color: var(--cream);
  transition: all 0.4s ease;
}

.search-wrapper input:focus {
  outline: none;
  border-color: var(--gold);
  background: var(--bg-card);
}

.search-wrapper input::placeholder {
  color: var(--gray-dark);
  font-weight: 400;
}

/* ============================================
   Categories - نوار افقی با خطوط جداکننده
   ============================================ */
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 4rem;
  border-top: 1px solid var(--border-strong);
  border-bottom: 1px solid var(--border-strong);
  background: var(--bg-secondary);
}

.category-btn {
  padding: 1.1rem 1.75rem;
  background: transparent;
  color: var(--gray);
  border: none;
  border-left: 1px solid var(--border-subtle);
  border-radius: 0;
  font-size: 0.88rem;
  font-weight: 500;
  font-family: var(--font-persian);
  letter-spacing: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.category-btn:last-child {
  border-left: none;
}

.category-btn::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gold);
  transition: width 0.4s ease;
}

.category-btn:hover {
  color: var(--cream);
  background: var(--bg-card);
}

.category-btn.active {
  color: var(--gold);
  background: var(--bg-card);
}

.category-btn.active::after {
  width: 100%;
}

/* ============================================
   Menu Grid
   ============================================ */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 5rem 2rem;
  border: 1px dashed var(--border-strong);
  background: var(--bg-card);
}

.no-results-icon {
  width: 60px;
  height: 60px;
  color: var(--gold);
  opacity: 0.4;
  margin: 0 auto 1.5rem;
  display: block;
}

.no-results p {
  font-size: 1rem;
  color: var(--gray);
  margin-bottom: 2rem;
  font-weight: 500;
}

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 968px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 4rem;
  }

  .hero-title {
    font-size: 3.5rem;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-divider {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-frame {
    width: 260px;
    height: 260px;
  }

  .hero-koala {
    width: 170px;
    height: 170px;
  }

  .featured-grid,
  .menu-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .home {
    padding-top: 80px;
  }

  .hero {
    padding: 3rem 0 4rem;
  }

  .hero-eyebrow {
    font-size: 0.62rem;
    letter-spacing: 5px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-desc {
    font-size: 0.9rem;
  }

  .hero-frame {
    width: 200px;
    height: 200px;
  }

  .hero-koala {
    width: 130px;
    height: 130px;
  }

  .featured-grid,
  .menu-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .hero-buttons {
    flex-direction: column;
    width: 100%;
  }

  .hero-buttons .btn {
    width: 100%;
  }

  /* Categories در موبایل — اسکرول افقی */
  .categories {
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .categories::-webkit-scrollbar {
    display: none;
  }

  .category-btn {
    padding: 1rem 1.25rem;
    font-size: 0.8rem;
    white-space: nowrap;
    flex-shrink: 0;
  }
  /* انیمیشن ورود کارت‌ها */
.card-wrapper {
  animation: cardEnter 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

@keyframes cardEnter {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
}
</style>