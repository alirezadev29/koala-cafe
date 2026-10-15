<script setup>
import { useRouter } from 'vue-router';
import { useCartStore } from '../stores/cart';
import ItemIcon from '../components/ItemIcon.vue';

const router = useRouter();
const cartStore = useCartStore();

function formatPrice(price) {
  return price.toLocaleString('fa-IR');
}

function goBack() {
  router.back();
}

function goToMenu() {
  router.push('/');
}
</script>

<template>
  <div class="cart-page">
    <div class="container">
      <!-- هدر صفحه -->
      <div class="page-header">
        <button class="back-btn" @click="goBack">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          برگشت
        </button>

        <span class="section-eyebrow">Shopping Cart</span>
        <h1 class="page-title">سبد سفارش</h1>
      </div>

      <!-- سبد خالیه -->
      <div v-if="cartStore.isEmpty" class="empty-cart">
        <svg class="empty-icon" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path d="M8 8H14L18 40H50L56 16H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="24" cy="54" r="3" fill="currentColor"/>
          <circle cx="48" cy="54" r="3" fill="currentColor"/>
        </svg>
        <h2>سبد سفارش خالیه</h2>
        <p>هنوز هیچ آیتمی اضافه نکردی</p>
        <button class="btn btn-gold" @click="goToMenu">
          مشاهده منو
        </button>
      </div>

      <!-- سبد پر -->
      <div v-else class="cart-content">
        <!-- لیست آیتم‌ها -->
        <div class="cart-items">
          <TransitionGroup name="cart-item">
            <div
              v-for="item in cartStore.items"
              :key="item.id"
              class="cart-item"
            >
              <!-- آیکون -->
              <div class="item-visual">
                <ItemIcon :type="item.icon" :size="40" />
              </div>

              <!-- اطلاعات -->
              <div class="item-info">
                <h3 class="item-name">{{ item.name }}</h3>
                <span class="item-price">
                  {{ formatPrice(item.price) }} تومان
                </span>
              </div>

              <!-- کنترل تعداد -->
              <div class="item-controls">
                <button
                  class="qty-btn"
                  @click="cartStore.decreaseQuantity(item.id)"
                  aria-label="کاهش"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>

                <span class="qty-value">{{ item.quantity }}</span>

                <button
                  class="qty-btn"
                  @click="cartStore.increaseQuantity(item.id)"
                  aria-label="افزایش"
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
              </div>

              <!-- جمع هر آیتم -->
              <div class="item-total">
                <span class="total-value">
                  {{ formatPrice(item.price * item.quantity) }}
                </span>
                <span class="total-currency">تومان</span>
              </div>

              <!-- دکمه حذف -->
              <button
                class="remove-btn"
                @click="cartStore.removeItem(item.id)"
                aria-label="حذف"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path d="M3 6H5H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  <path d="M19 6L18 20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20L5 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </TransitionGroup>
        </div>

        <!-- خلاصه سفارش -->
        <aside class="cart-summary">
          <h2 class="summary-title">خلاصه سفارش</h2>

          <div class="summary-row">
            <span>تعداد آیتم‌ها</span>
            <strong>{{ cartStore.totalItems }}</strong>
          </div>

          <div class="summary-row">
            <span>جمع کل</span>
            <strong>{{ formatPrice(cartStore.totalPrice) }} تومان</strong>
          </div>

          <div class="summary-divider"></div>

          <div class="summary-total">
            <span>مبلغ قابل پرداخت</span>
            <div>
              <span class="grand-total">{{ formatPrice(cartStore.totalPrice) }}</span>
              <span class="currency">تومان</span>
            </div>
          </div>

          <button class="btn btn-gold checkout-btn">
            ثبت سفارش
          </button>

          <button class="btn btn-outline clear-btn" @click="cartStore.clearCart()">
            خالی کردن سبد
          </button>
        </aside>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-page {
  padding-top: 120px;
  padding-bottom: 5rem;
  min-height: 100vh;
  background: var(--bg-primary);
}

/* هدر صفحه */
.page-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}

.back-btn {
  position: absolute;
  top: 0;
  right: 0;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
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

.page-title {
  font-family: var(--font-persian);
  font-size: 3rem;
  font-weight: 800;
  color: var(--cream);
  margin-top: 0.5rem;
}

/* سبد خالی */
.empty-cart {
  text-align: center;
  padding: 6rem 2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  position: relative;
}

.empty-cart::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 2px;
  background: var(--gold);
}

.empty-cart::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 2px;
  background: var(--gold);
}

.empty-icon {
  width: 80px;
  height: 80px;
  color: var(--gold);
  opacity: 0.4;
  margin: 0 auto 2rem;
  display: block;
}

.empty-cart h2 {
  font-family: var(--font-persian);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--cream);
  margin-bottom: 0.5rem;
}

.empty-cart p {
  color: var(--gray);
  margin-bottom: 2rem;
}

/* محتوا */
.cart-content {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 2rem;
  align-items: start;
}

/* آیتم‌ها */
.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cart-item {
  display: grid;
  grid-template-columns: 80px 1fr auto 140px 48px;
  gap: 1.5rem;
  align-items: center;
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}

.cart-item:hover {
  border-color: var(--gold);
  background: var(--bg-hover);
}

.item-visual {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  color: var(--gold);
}

.item-info {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.item-name {
  font-family: var(--font-persian);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--cream);
}

.item-price {
  font-size: 0.85rem;
  color: var(--gray);
}

/* کنترل تعداد */
.item-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid var(--border-strong);
  padding: 0.25rem;
}

.qty-btn {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--gold);
  cursor: pointer;
  transition: all 0.3s ease;
}

.qty-btn svg {
  width: 14px;
  height: 14px;
}

.qty-btn:hover {
  background: var(--gold);
  color: var(--bg-primary);
}

.qty-value {
  min-width: 32px;
  text-align: center;
  font-family: var(--font-persian);
  font-size: 1rem;
  font-weight: 700;
  color: var(--cream);
}

/* جمع هر آیتم */
.item-total {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  justify-content: flex-end;
}

.total-value {
  font-family: var(--font-persian);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--gold);
}

.total-currency {
  font-size: 0.7rem;
  color: var(--gray);
}

/* دکمه حذف */
.remove-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--gray);
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-btn svg {
  width: 16px;
  height: 16px;
}

.remove-btn:hover {
  border-color: #d9534f;
  color: #d9534f;
  background: rgba(217, 83, 79, 0.1);
}

/* خلاصه سفارش */
.cart-summary {
  background: var(--bg-card);
  border: 1px solid var(--border-strong);
  padding: 2rem;
  position: sticky;
  top: 100px;
}

.summary-title {
  font-family: var(--font-persian);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--cream);
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  color: var(--gray);
  font-size: 0.9rem;
}

.summary-row strong {
  color: var(--cream);
  font-weight: 600;
}

.summary-divider {
  height: 1px;
  background: var(--border);
  margin: 1rem 0;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0 1.5rem;
  color: var(--cream);
}

.summary-total > span {
  font-weight: 600;
}

.grand-total {
  font-family: var(--font-persian);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--gold);
}

.currency {
  font-size: 0.75rem;
  color: var(--gray);
  margin-right: 0.35rem;
}

.checkout-btn {
  width: 100%;
  margin-bottom: 0.75rem;
}

.clear-btn {
  width: 100%;
  padding: 0.75rem 1.5rem;
  font-size: 0.75rem;
}

/* ============================================
   انیمیشن‌های TransitionGroup
   ============================================ */

/* ورود و خروج آیتم‌ها */
.cart-item-enter-active,
.cart-item-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.cart-item-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.cart-item-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* آیتم‌های باقیمانده نرم جابه‌جا می‌شن */
.cart-item-move {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* آیتمی که داره حذف می‌شه، از جریان خارج می‌شه */
.cart-item-leave-active {
  position: absolute;
  width: 100%;
}

/* ریسپانسیو */
@media (max-width: 968px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-summary {
    position: static;
  }

  .page-title {
    font-size: 2rem;
  }

  .back-btn {
    position: static;
    margin-bottom: 1rem;
  }
}

@media (max-width: 576px) {
  .cart-page {
    padding-top: 100px;
  }

  .cart-item {
    grid-template-columns: 60px 1fr 40px;
    gap: 1rem;
    padding: 1rem;
  }

  .item-visual {
    width: 60px;
    height: 60px;
  }

  .item-total {
    grid-column: 1 / -1;
    justify-content: flex-start;
    padding-top: 0.5rem;
    border-top: 1px dashed var(--border);
  }

  .item-controls {
    grid-row: 2;
    grid-column: 2;
  }
}
</style>