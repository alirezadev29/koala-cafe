<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goHome() {
  router.push('/');
}
</script>

<template>
  <div class="not-found-page">
    <div class="container">
      <div class="content">
        <!-- عدد ۴۰۴ -->
        <div class="error-number">
          <span class="digit">۴</span>
          <span class="cup">☕</span>
          <span class="digit">۴</span>
        </div>

        <!-- متن -->
        <span class="section-eyebrow">Page Not Found</span>
        <h1 class="error-title">صفحه‌ای که می‌خواستی پیدا نشد</h1>
        <p class="error-desc">
          به نظر می‌رسه این صفحه وجود نداره یا حذف شده.
          ولی نگران نباش — می‌تونی برگردی به منو و از قهوه‌های ما لذت ببری.
        </p>

        <!-- دکمه‌ها -->
        <div class="error-buttons">
          <button class="btn btn-gold" @click="goHome">
            بازگشت به خانه
          </button>
          <button class="btn btn-outline" @click="router.back()">
            صفحه قبل
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.not-found-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 2rem 5rem;
  background: var(--bg-primary);
  position: relative;
  overflow: hidden;
}

.not-found-page::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle,
    rgba(201, 169, 97, 0.08) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 600px;
}

/* عدد ۴۰۴ */
.error-number {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
}

.digit {
  font-family: var(--font-persian);
  font-size: 8rem;
  font-weight: 800;
  color: var(--gold);
  line-height: 1;
  text-shadow: 0 20px 60px rgba(201, 169, 97, 0.3);
  animation: float 4s ease-in-out infinite;
}

.digit:last-child {
  animation-delay: 1s;
}

.cup {
  font-size: 5rem;
  animation: float 4s ease-in-out infinite;
  animation-delay: 0.5s;
  filter: drop-shadow(0 10px 30px rgba(201, 169, 97, 0.4));
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* متن */
.section-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  font-family: var(--font-luxury);
  font-size: 0.7rem;
  font-weight: 400;
  color: var(--gold);
  letter-spacing: 8px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  opacity: 0.85;
}

.section-eyebrow::before,
.section-eyebrow::after {
  content: '';
  display: block;
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold), transparent);
}

.error-title {
  font-family: var(--font-persian);
  font-size: 2rem;
  font-weight: 800;
  color: var(--cream);
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.error-desc {
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 2;
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* دکمه‌ها */
.error-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* ریسپانسیو */
@media (max-width: 576px) {
  .digit {
    font-size: 5rem;
  }

  .cup {
    font-size: 3rem;
  }

  .error-number {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .error-title {
    font-size: 1.4rem;
  }

  .error-desc {
    font-size: 0.85rem;
  }

  .error-buttons {
    flex-direction: column;
  }

  .error-buttons .btn {
    width: 100%;
  }
}
</style>