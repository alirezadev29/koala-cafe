<script setup>
import { useRouter } from 'vue-router';
import ItemIcon from './ItemIcon.vue';
import { useCartStore } from '../stores/cart';

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

const router = useRouter();
const cartStore = useCartStore();

function formatPrice(price) {
  return price.toLocaleString('fa-IR');
}

function addToCart() {
  cartStore.addItem(props.item);
}

function goToDetail() {
  router.push({ name: 'item-detail', params: { id: props.item.id } });
}
</script>

<template>
  <article class="menu-card" @click="goToDetail">
    <span class="card-number">
      {{ String(item.id).padStart(2, '0') }}
    </span>

    <span v-if="item.featured" class="featured-badge">ویژه</span>

    <div class="card-header">
      <div class="card-icon-wrapper">
        <ItemIcon :type="item.icon" :size="36" class="card-icon" />
      </div>
      <div class="card-header-text">
        <h3 class="card-title">{{ item.name }}</h3>
        <div class="card-subtitle-line"></div>
      </div>
    </div>

    <p class="card-desc">{{ item.description }}</p>

    <div v-if="item.tags && item.tags.length" class="card-tags">
      <span v-for="tag in item.tags" :key="tag" class="tag">
        {{ tag }}
      </span>
    </div>

    <div class="card-footer">
      <div class="card-price">
        <span class="price-value">{{ formatPrice(item.price) }}</span>
        <span class="price-currency">تومان</span>
      </div>

      <button
        class="add-btn"
        @click.stop="addToCart"
        aria-label="افزودن به سفارش"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </article>
</template>

<style scoped>
.menu-card {
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  border-radius: 0;
  padding: 2rem 1.75rem 1.5rem;
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 320px;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);

}

.menu-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 2px;
  background: var(--gold);
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-card:hover::before {
  width: 100%;
}

.menu-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background: var(--gold);
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.menu-card:hover::after {
  width: 100%;
}

.menu-card:hover {
  background: var(--bg-hover);
  border-color: var(--gold);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
  
}

.card-number {
  position: absolute;
  top: 1rem;
  left: 1.25rem;
  font-family: 'Vazirmatn', 'Tahoma', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--gray-dark);
  letter-spacing: 1px;
}

.featured-badge {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.35rem 0.85rem;
  background: var(--gold);
  color: var(--bg-primary);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.card-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px dashed var(--border);
}

.card-icon-wrapper {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--gold);
  border-radius: 50%;
  padding: 10px;
  flex-shrink: 0;
  transition: all 0.5s ease;
  background: var(--bg-secondary);
}

.menu-card:hover .card-icon-wrapper {
  background: var(--gold);
  transform: rotate(-8deg);
}

.menu-card:hover .card-icon {
  color: var(--bg-primary);
}

.card-icon {
  color: var(--gold);
  transition: color 0.4s ease;
}

.card-header-text {
  flex: 1;
  padding-top: 0.25rem;
}

.card-title {
  font-family: var(--font-persian);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--cream);
  line-height: 1.4;
  margin-bottom: 0.5rem;
}

.card-subtitle-line {
  width: 30px;
  height: 1px;
  background: var(--gold);
  opacity: 0.5;
  transition: width 0.4s ease;
}

.menu-card:hover .card-subtitle-line {
  width: 50px;
}

.card-desc {
  font-size: 0.82rem;
  color: var(--gray);
  line-height: 2;
  font-weight: 400;
  margin-bottom: 1.25rem;
  flex-grow: 1;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-bottom: 1.25rem;
}

.tag {
  padding: 0.2rem 0.7rem;
  background: transparent;
  color: var(--gold);
  font-size: 0.68rem;
  font-weight: 500;
  border: 1px solid var(--border);
  letter-spacing: 0.5px;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-strong);
}

.card-price {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
}

.price-value {
  font-family: 'Vazirmatn', 'Tahoma', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--gold);
  letter-spacing: 0.5px;
  direction: rtl;
  display: inline-block;
}

.price-currency {
  font-size: 0.7rem;
  color: var(--gray);
  font-weight: 400;
  letter-spacing: 1px;
  font-family: var(--font-persian);
}

.add-btn {
  width: 42px;
  height: 42px;
  border: 1px solid var(--border-strong);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  background: var(--bg-secondary);
}

.add-btn svg {
  width: 16px;
  height: 16px;
}

.add-btn:hover {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--bg-primary);
  transform: rotate(90deg);
}
</style>