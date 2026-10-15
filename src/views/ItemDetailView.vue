<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getItemById } from '../data/menuData';
import ItemIcon from '../components/ItemIcon.vue';
import { useCartStore } from '../stores/cart';

const route = useRoute();
const router = useRouter();
const cartStore = useCartStore();

// گرفتن آیتم با ID از URL
const item = computed(() => getItemById(route.params.id));

// فرمت قیمت
function formatPrice(price) {
  return price.toLocaleString('fa-IR');
}

// برگشت به صفحه قبل
function goBack() {
  router.back();
}

// افزودن به سبد
function addToCart() {
  if (item.value) {
    cartStore.addItem(item.value);
  }
}
</script>

<template>
  <div class="detail-page">
    <div class="container">
      <!-- اگه آیتم پیدا نشد -->
      <div v-if="!item" class="not-found">
        <h2>آیتم پیدا نشد</h2>
        <button class="btn btn-gold" @click="router.push('/')">
          برگشت به منو
        </button>
      </div>

      <!-- نمایش آیتم -->
      <div v-else class="detail-content">
        <!-- دکمه برگشت -->
        <button class="back-btn" @click="goBack">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          برگشت
        </button>

        <!-- کارت بزرگ -->
        <div class="detail-card">
          <!-- سمت راست: آیکون -->
          <div class="detail-visual">
            <ItemIcon :type="item.icon" :size="140" />
          </div>

          <!-- سمت چپ: اطلاعات -->
          <div class="detail-info">
            <span class="detail-eyebrow">
              {{ item.category === 'espresso' ? 'Espresso Bar' : 
                 item.category === 'signature' ? 'Signature' : 
                 item.category === 'hot' ? 'Hot Drink' : 
                 item.category === 'cold' ? 'Cold Drink' : 
                 item.category === 'breakfast' ? 'Breakfast' : 
                 item.category === 'dessert' ? 'Dessert' : 'Main Course' }}
            </span>

            <h1 class="detail-title">{{ item.name }}</h1>

            <div class="detail-divider"></div>

            <p class="detail-desc">{{ item.description }}</p>

            <!-- تگ‌ها -->
            <div v-if="item.tags && item.tags.length" class="detail-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">
                {{ tag }}
              </span>
            </div>

            <!-- قیمت -->
            <div class="detail-price">
              <span class="price-value">{{ formatPrice(item.price) }}</span>
              <span class="price-currency">تومان</span>
            </div>

            <!-- دکمه‌ها -->
            <div class="detail-buttons">
              <button class="btn btn-gold" @click="addToCart">
                افزودن به سفارش
              </button>
              <button class="btn btn-outline" @click="goBack">
                بازگشت به منو
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-page {
  padding-top: 120px;
  padding-bottom: 5rem;
  min-height: 100vh;
  background: var(--bg-primary);
}

/* کارت اصلی */
.detail-card {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  padding: 4rem 3rem;
  position: relative;
}

/* خط طلایی بالا و پایین کارت */
.detail-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 2px;
  background: var(--gold);
}

.detail-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 2px;
  background: var(--gold);
}

/* ویژوال */
.detail-visual {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  aspect-ratio: 1;
}

/* اطلاعات */
.detail-eyebrow {
  display: inline-block;
  font-family: var(--font-luxury);
  font-size: 0.7rem;
  font-weight: 400;
  color: var(--gold);
  letter-spacing: 6px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  opacity: 0.85;
}

.detail-title {
  font-family: var(--font-persian);
  font-size: 3rem;
  font-weight: 800;
  color: var(--cream);
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.detail-divider {
  width: 60px;
  height: 1px;
  background: var(--gold);
  margin-bottom: 1.5rem;
}

.detail-desc {
  font-size: 1rem;
  color: var(--gray);
  line-height: 2.2;
  margin-bottom: 1.5rem;
}

.detail-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tag {
  padding: 0.3rem 0.9rem;
  color: var(--gold);
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border);
  letter-spacing: 0.5px;
}

/* قیمت */
.detail-price {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin-bottom: 2rem;
}

.price-value {
  font-family: var(--font-persian);
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--gold);
}

.price-currency {
  font-size: 0.9rem;
  color: var(--gray);
}

/* دکمه‌ها */
.detail-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* دکمه برگشت */
.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--gray);
  font-size: 0.85rem;
  font-family: var(--font-persian);
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn svg {
  width: 16px;
  height: 16px;
}

.back-btn:hover {
  color: var(--gold);
  border-color: var(--gold);
}

/* آیتم پیدا نشد */
.not-found {
  text-align: center;
  padding: 5rem 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
}

.not-found h2 {
  font-family: var(--font-persian);
  color: var(--cream);
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

/* ریسپانسیو */
@media (max-width: 968px) {
  .detail-card {
    grid-template-columns: 1fr;
    padding: 2.5rem 1.75rem;
    gap: 2.5rem;
  }

  .detail-title {
    font-size: 2rem;
  }

  .price-value {
    font-size: 1.8rem;
  }
}

@media (max-width: 576px) {
  .detail-page {
    padding-top: 100px;
  }

  .detail-card {
    padding: 2rem 1.25rem;
  }

  .detail-visual {
    padding: 2rem;
  }

  .detail-title {
    font-size: 1.6rem;
  }

  .detail-buttons {
    flex-direction: column;
  }

  .detail-buttons .btn {
    width: 100%;
  }
}
</style>