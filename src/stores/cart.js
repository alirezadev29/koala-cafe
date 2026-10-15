import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';

const STORAGE_KEY = 'koala-cart';

export const useCartStore = defineStore('cart', () => {
  // ========== State ==========
  
  // خوندن از localStorage در ابتدا
  function loadFromStorage() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('خطا در خواندن سبد:', error);
      return [];
    }
  }

  const items = ref(loadFromStorage());

  // ========== Getters ==========

  const totalItems = computed(() => {
    return items.value.reduce((sum, item) => sum + item.quantity, 0);
  });

  const totalPrice = computed(() => {
    return items.value.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);
  });

  const isEmpty = computed(() => items.value.length === 0);

  // ========== ذخیره خودکار در localStorage ==========
  
  watch(
    items,
    (newValue) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
      } catch (error) {
        console.error('خطا در ذخیره سبد:', error);
      }
    },
    { deep: true }
  );

  // ========== Actions ==========

  function addItem(product) {
    const existing = items.value.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        icon: product.icon,
        quantity: 1
      });
    }
  }

  function removeItem(id) {
    items.value = items.value.filter((item) => item.id !== id);
  }

  function increaseQuantity(id) {
    const item = items.value.find((item) => item.id === id);
    if (item) item.quantity++;
  }

  function decreaseQuantity(id) {
    const item = items.value.find((item) => item.id === id);
    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        removeItem(id);
      }
    }
  }

  function clearCart() {
    items.value = [];
  }

  return {
    items,
    totalItems,
    totalPrice,
    isEmpty,
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  };
});