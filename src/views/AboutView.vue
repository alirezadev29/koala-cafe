<script setup>
const values = [
  {
    icon: 'coffee',
    title: 'قهوه ممتاز',
    desc: 'دانه‌های قهوه از بهترین مزارع جهان، تازه رست شده'
  },
  {
    icon: 'heart',
    title: 'عشق به جزئیات',
    desc: 'هر فنجان با دقت و ظرافت ساخته می‌شود'
  },
  {
    icon: 'leaf',
    title: 'پایداری',
    desc: 'بسته‌بندی دوستدار محیط زیست و مواد طبیعی'
  },
  {
    icon: 'users',
    title: 'جامعه',
    desc: 'جایی برای دور هم جمع شدن و ساختن خاطرات'
  }
];

const stats = [
  { number: '۵+', label: 'سال تجربه' },
  { number: '۵۰K+', label: 'فنجان سرو شده' },
  { number: '۲۰+', label: 'آیتم منو' },
  { number: '۴.۹', label: 'امتیاز مشتریان' }
];
</script>

<template>
  <div class="about-page">
    <div class="container">
      <!-- Hero -->
      <div class="about-hero">
        <span class="section-eyebrow">Our Story</span>
        <h1 class="about-title">
          داستان <span class="gold-text">کافه کوالا</span>
        </h1>
        <p class="about-subtitle">
          از یک رویا تا یک مقصد
        </p>
      </div>

      <!-- داستان -->
      <div class="story-section">
        <div class="story-visual">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="koalaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#3a3a3a" />
                <stop offset="100%" stop-color="#1a1a1a" />
              </linearGradient>
            </defs>
            <ellipse cx="55" cy="60" rx="24" ry="28" fill="url(#koalaGrad)" stroke="#c9a961" stroke-width="1"/>
            <ellipse cx="145" cy="60" rx="24" ry="28" fill="url(#koalaGrad)" stroke="#c9a961" stroke-width="1"/>
            <ellipse cx="55" cy="60" rx="12" ry="16" fill="#0a0a0a" stroke="#c9a961" stroke-width="0.5" opacity="0.7"/>
            <ellipse cx="145" cy="60" rx="12" ry="16" fill="#0a0a0a" stroke="#c9a961" stroke-width="0.5" opacity="0.7"/>
            <ellipse cx="100" cy="115" rx="68" ry="62" fill="url(#koalaGrad)" stroke="#c9a961" stroke-width="1.2"/>
            <ellipse cx="100" cy="125" rx="38" ry="32" fill="#0a0a0a" opacity="0.6"/>
            <ellipse cx="78" cy="108" rx="7" ry="9" fill="#c9a961"/>
            <ellipse cx="122" cy="108" rx="7" ry="9" fill="#c9a961"/>
            <circle cx="80" cy="106" r="2.5" fill="#0a0a0a"/>
            <circle cx="124" cy="106" r="2.5" fill="#0a0a0a"/>
            <ellipse cx="100" cy="138" rx="14" ry="9" fill="#c9a961"/>
            <path d="M100 147 Q92 154 87 150" stroke="#c9a961" stroke-width="1.5" fill="none" stroke-linecap="round"/>
            <path d="M100 147 Q108 154 113 150" stroke="#c9a961" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          </svg>
        </div>

        <div class="story-content">
          <h2 class="story-heading">از ۲۰۲۰ تا امروز</h2>
          <div class="heading-divider"></div>

          <p class="story-text">
            کافه کوالا از یک رویای ساده شروع شد: ساختن جایی که مردم بتوانند
            از شلوغی روزمره فرار کنند و در آرامش یک فنجان قهوه با کیفیت میل کنند.
          </p>

          <p class="story-text">
            از اولین روز، تمرکز ما بر کیفیت بوده. دانه‌های قهوه از بهترین
            مزارع جهان انتخاب می‌شوند، در محل رست می‌شوند و با عشق سرو می‌شوند.
          </p>

          <p class="story-text">
            امروز، پس از ۵ سال، کافه کوالا به یکی از مقاصد محبوب قهوه‌دوستانه
            تبدیل شده. اما هنوز همان ارزش‌های روز اول را داریم: کیفیت، اصالت و مهمان‌نوازی.
          </p>
        </div>
      </div>

      <!-- آمار -->
      <div class="stats-section">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <h3 class="stat-number">{{ stat.number }}</h3>
          <p class="stat-label">{{ stat.label }}</p>
        </div>
      </div>

      <!-- ارزش‌ها -->
      <div class="values-section">
        <h2 class="values-title">
          ارزش‌های <span class="gold-text">ما</span>
        </h2>

        <div class="values-grid">
          <div v-for="value in values" :key="value.title" class="value-card">
            <div class="value-icon">
              <svg v-if="value.icon === 'coffee'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8H20V16C20 19.3137 17.3137 22 14 22H10C6.68629 22 4 19.3137 4 16V8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M20 11H22C23.1046 11 24 11.8954 24 13C24 14.1046 23.1046 15 22 15H20" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M8 3V5M12 2V5M16 3V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>

              <svg v-else-if="value.icon === 'heart'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21L3.5 12.5C2.5 11.5 2 10.5 2 9C2 6 4 4 7 4C9 4 10.5 5 12 7C13.5 5 15 4 17 4C20 4 22 6 22 9C22 10.5 21.5 11.5 20.5 12.5L12 21Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              </svg>

              <svg v-else-if="value.icon === 'leaf'" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3C21 3 14 5 10 11C6 17 6 21 6 21M21 3C21 3 19 12 13 15C7 18 3 18 3 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

              <svg v-else viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="9" cy="8" r="4" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="17" cy="9" r="3" stroke="currentColor" stroke-width="1.5"/>
                <path d="M3 20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M16 14C19.3137 14 22 16.6863 22 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-desc">{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page {
  padding-top: 120px;
  padding-bottom: 5rem;
  min-height: 100vh;
  background: var(--bg-primary);
}

/* Hero */
.about-hero {
  text-align: center;
  margin-bottom: 4rem;
}

.about-title {
  font-family: var(--font-persian);
  font-size: 3.5rem;
  font-weight: 800;
  color: var(--cream);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.about-title .gold-text {
  color: var(--gold);
}

.about-subtitle {
  color: var(--gray);
  font-size: 1.05rem;
}

/* داستان */
.story-section {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 5rem;
  padding: 3rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.story-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  border: 1px solid var(--border-strong);
  aspect-ratio: 1;
  max-width: 320px;
  margin: 0 auto;
}

.story-visual svg {
  width: 100%;
  height: 100%;
}

.story-heading {
  font-family: var(--font-persian);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--cream);
  margin-bottom: 0.75rem;
}

.heading-divider {
  width: 50px;
  height: 1px;
  background: var(--gold);
  margin-bottom: 1.5rem;
}

.story-text {
  color: var(--gray);
  line-height: 2.2;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

/* آمار */
.stats-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
  padding: 3rem;
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  position: relative;
}

.stats-section::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 2px;
  background: var(--gold);
}

.stats-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--gold);
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-family: var(--font-persian);
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--gold);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.stat-label {
  color: var(--gray);
  font-size: 0.85rem;
}

/* ارزش‌ها */
.values-section {
  text-align: center;
}

.values-title {
  font-family: var(--font-persian);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--cream);
  margin-bottom: 3rem;
}

.values-title .gold-text {
  color: var(--gold);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.value-card {
  padding: 2.5rem 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: all 0.4s ease;
}

.value-card:hover {
  border-color: var(--gold);
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.value-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-strong);
  border-radius: 50%;
  margin: 0 auto 1.25rem;
  color: var(--gold);
  transition: all 0.4s ease;
}

.value-card:hover .value-icon {
  background: var(--gold);
  color: var(--bg-primary);
  transform: rotate(-10deg);
}

.value-icon svg {
  width: 26px;
  height: 26px;
}

.value-title {
  font-family: var(--font-persian);
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--cream);
  margin-bottom: 0.5rem;
}

.value-desc {
  color: var(--gray);
  font-size: 0.82rem;
  line-height: 1.9;
}

/* ریسپانسیو */
@media (max-width: 968px) {
  .story-section {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .stats-section {
    grid-template-columns: repeat(2, 1fr);
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .about-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .about-page {
    padding-top: 100px;
  }

  .about-title {
    font-size: 2rem;
  }

  .stats-section {
    grid-template-columns: 1fr;
    padding: 2rem 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>