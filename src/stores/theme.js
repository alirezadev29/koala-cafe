import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

const STORAGE_KEY = 'koala-theme';

export const useThemeStore = defineStore('theme', () => {
  // تعیین تم اولیه
  function getInitialTheme() {
    // 1. از localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') return saved;

    // 2. از ترجیح سیستم کاربر
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches
    ) {
      return 'light';
    }

    // 3. پیش‌فرض: dark
    return 'dark';
  }

  const theme = ref(getInitialTheme());

  // اعمال تم روی HTML
  function applyTheme(value) {
    document.documentElement.setAttribute('data-theme', value);
  }

  // رصد تغییرات و ذخیره
  watch(
    theme,
    (newTheme) => {
      applyTheme(newTheme);
      localStorage.setItem(STORAGE_KEY, newTheme);
    },
    { immediate: true }
  );

  // تغییر تم
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  }

  return {
    theme,
    toggleTheme
  };
});