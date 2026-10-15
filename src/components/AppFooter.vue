<script setup>
const currentYear = new Date().getFullYear();

// اطلاعات طراح
const designer = {
  name: 'علیرضا سیفی',
  email: 'alireza.seifi.dev@gmail.com',
  linkedin: 'https://linkedin.com/in/alireza-seifi-iteng',
  telegram: 'https://t.me/alireza_seifi24'
};

// لینک‌های سریع
const quickLinks = [
  { name: 'خانه', href: '#home' },
  { name: 'منو', href: '#menu' },
  { name: 'پیشنهاد ویژه', href: '#featured' }
];

// سرویس‌ها
const services = [
  { name: 'رزرو میز', href: '#' },
  { name: 'سفارش آنلاین', href: '#' },
  { name: 'برگزاری رویداد', href: '#' },
  { name: 'کیک سفارشی', href: '#' }
];

// تماس
const contact = {
  phone: '۰۲۱-۱۲۳۴۵۶۷۸',
  email: 'info@koalacafe.com',
  address: 'تهران، خیابان ولیعصر، پلاک ۱۲۳'
};

// شبکه‌های اجتماعی
const socials = [
  { name: 'Instagram', url: '#', icon: 'instagram' },
  { name: 'Telegram', url: '#', icon: 'telegram' },
  { name: 'WhatsApp', url: '#', icon: 'whatsapp' }
];
</script>

<template>
  <footer class="footer">
    <div class="container">
      <!-- بخش بالایی -->
      <div class="footer-top">
        <!-- برند -->
        <div class="footer-brand">
          <div class="brand-logo">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" stroke="currentColor" stroke-width="1" fill="none"/>
              <circle cx="20" cy="20" r="15" stroke="currentColor" stroke-width="0.5" fill="none" opacity="0.5"/>
              <text x="20" y="26" text-anchor="middle" font-family="Georgia, serif" font-size="14" font-weight="700" fill="currentColor">K</text>
            </svg>
            <div class="brand-text">
              <span class="brand-main">KOALA</span>
              <span class="brand-sub">CAFE · EST 2020</span>
            </div>
          </div>

          <p class="brand-desc">
            جایی که قهوه، آرامش و طعم لاکچری به هم می‌رسند.
            تجربه‌ای متفاوت از یک کافه واقعی.
          </p>

          <!-- شبکه‌های اجتماعی -->
          <div class="socials">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              class="social-link"
              :aria-label="social.name"
            >
              <svg v-if="social.icon === 'instagram'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>

              <svg v-else-if="social.icon === 'telegram'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M21.5 4.5L2.5 12L8.5 14L10 20L13 15L18.5 19L21.5 4.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M8.5 14L18.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>

              <svg v-else viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M21 12C21 16.9706 16.9706 21 12 21C10.5 21 9.1 20.6 7.9 20L3 21L4.1 16.5C3.4 15.2 3 13.6 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M9 10C9 10 9.5 13 12.5 15C15.5 17 17 16 17 16L16 13.5L14 14.5L12 12.5L13 10.5L10.5 10C9.5 9.5 9 10 9 10Z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- لینک‌های سریع -->
        <div class="footer-column">
          <h3 class="footer-title">دسترسی سریع</h3>
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.name">
              <a :href="link.href">{{ link.name }}</a>
            </li>
          </ul>
        </div>

        <!-- سرویس‌ها -->
        <div class="footer-column">
          <h3 class="footer-title">سرویس‌ها</h3>
          <ul class="footer-links">
            <li v-for="service in services" :key="service.name">
              <a :href="service.href">{{ service.name }}</a>
            </li>
          </ul>
        </div>

        <!-- تماس -->
        <div class="footer-column">
          <h3 class="footer-title">تماس با ما</h3>
          <ul class="footer-contact">
            <li>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M22 16.92V19.92C22 20.48 21.55 20.94 20.99 20.96C6.5 20.5 3.5 17.5 3.04 3.01C3.04 2.45 3.5 2 4.06 2H7.06C7.62 2 8.08 2.46 8.08 3.02C8.08 4.06 8.24 5.08 8.54 6.06C8.7 6.56 8.56 7.12 8.16 7.52L6.56 9.12C7.9 11.54 10.46 14.1 12.88 15.44L14.48 13.84C14.88 13.44 15.44 13.3 15.94 13.46C16.92 13.76 17.94 13.92 18.98 13.92C19.54 13.92 20 14.38 20 14.94V16.92H22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a :href="`tel:${contact.phone}`" dir="ltr">{{ contact.phone }}</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <a :href="`mailto:${contact.email}`" dir="ltr">{{ contact.email }}</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/>
              </svg>
              <span>{{ contact.address }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- ⭐ Credit Designer -->
      <div class="footer-credit">
        <p class="credit-text">
          طراحی و توسعه توسط
          <a
            :href="designer.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="credit-name"
          >
            {{ designer.name }}
          </a>
        </p>

        <div class="credit-links">
          <!-- ایمیل -->
          <a
            :href="`mailto:${designer.email}`"
            class="credit-icon-link"
            aria-label="ایمیل"
            title="ایمیل"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <!-- تلگرام -->
          <a
            :href="designer.telegram"
            target="_blank"
            rel="noopener noreferrer"
            class="credit-icon-link"
            aria-label="تلگرام"
            title="تلگرام"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path d="M21.5 4.5L2.5 12L8.5 14L10 20L13 15L18.5 19L21.5 4.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M8.5 14L18.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </a>

          <!-- لینکدین -->
          <a
            :href="designer.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="credit-icon-link"
            aria-label="لینکدین"
            title="لینکدین"
          >
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <rect x="2" y="9" width="4" height="12" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
              <circle cx="4" cy="4" r="2" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- خط جداکننده -->
      <div class="footer-divider"></div>

      <!-- بخش پایینی -->
      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} تمامی حقوق برای <span class="gold-text">کافه کوالا</span> محفوظ است.
        </p>
        <div class="footer-legal">
          <a href="#">قوانین و مقررات</a>
          <span class="separator">·</span>
          <a href="#">حریم خصوصی</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border);
  padding: 5rem 0 2rem;
  margin-top: 5rem;
  position: relative;
}

/* خط طلایی بالای فوتر */
.footer::before {
  content: '';
  position: absolute;
  top: -1px;
  right: 0;
  width: 120px;
  height: 2px;
  background: var(--gold);
}

/* بخش بالایی */
.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

/* برند */
.footer-brand {
  padding-left: 2rem;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: var(--gold);
}

.brand-logo svg {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
  direction: ltr;
}

.brand-main {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 8px;
  color: var(--cream);
}

.brand-sub {
  font-family: var(--font-body);
  font-size: 0.6rem;
  font-weight: 300;
  letter-spacing: 4px;
  color: var(--gold);
  margin-top: 6px;
  opacity: 0.8;
}

.brand-desc {
  color: var(--gray);
  font-size: 0.85rem;
  line-height: 2;
  margin-bottom: 1.5rem;
  max-width: 350px;
  font-weight: 400;
}

/* شبکه‌های اجتماعی */
.socials {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-strong);
  color: var(--gold);
  transition: all 0.3s ease;
  background: transparent;
}

.social-link svg {
  width: 20px;
  height: 20px;
}

.social-link:hover {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--bg-primary);
  transform: translateY(-3px);
}

/* ستون‌ها */
.footer-column {
  padding-left: 1rem;
}

.footer-title {
  font-family: var(--font-persian);
  font-size: 1rem;
  font-weight: 700;
  color: var(--cream);
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 0.75rem;
}

.footer-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 1px;
  background: var(--gold);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--gray);
  font-size: 0.85rem;
  font-weight: 400;
  position: relative;
  padding-right: 0;
  transition: padding-right 0.3s ease, color 0.3s ease;
}

.footer-links a::before {
  content: '—';
  position: absolute;
  right: -20px;
  color: var(--gold);
  opacity: 0;
  transition: all 0.3s ease;
}

.footer-links a:hover {
  color: var(--gold);
  padding-right: 1rem;
}

.footer-links a:hover::before {
  right: 0;
  opacity: 1;
}

/* تماس */
.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: var(--gray);
  font-size: 0.85rem;
  line-height: 1.7;
}

.footer-contact svg {
  width: 18px;
  height: 18px;
  color: var(--gold);
  flex-shrink: 0;
  margin-top: 3px;
}

.footer-contact a {
  color: var(--gray);
  transition: color 0.3s ease;
}

.footer-contact a:hover {
  color: var(--gold);
}

/* ⭐ Credit Designer */
.footer-credit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 0 1rem;
  text-align: center;
}

.credit-text {
  color: var(--gray);
  font-size: 0.82rem;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.credit-name {
  color: var(--gold);
  font-weight: 700;
  padding: 0 0.35rem;
  position: relative;
  transition: color 0.3s ease;
}

.credit-name::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--gold);
  transform: translateX(-50%);
  transition: width 0.3s ease;
}

.credit-name:hover {
  color: var(--gold-light);
}

.credit-name:hover::after {
  width: 100%;
}

.credit-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.credit-icon-link {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  color: var(--gray);
  transition: all 0.3s ease;
  background: transparent;
}

.credit-icon-link svg {
  width: 16px;
  height: 16px;
}

.credit-icon-link:hover {
  color: var(--gold);
  border-color: var(--gold);
  background: rgba(201, 169, 97, 0.1);
  transform: translateY(-2px);
}

/* خط جداکننده */
.footer-divider {
  height: 1px;
  background: var(--border);
  margin: 2rem 0;
}

/* بخش پایینی */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: var(--gray);
  font-size: 0.8rem;
  font-weight: 400;
}

.gold-text {
  color: var(--gold);
  font-weight: 600;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.8rem;
}

.footer-legal a {
  color: var(--gray);
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: var(--gold);
}

.separator {
  color: var(--gray-dark);
}

/* ریسپانسیو */
@media (max-width: 968px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }

  .footer-brand {
    grid-column: 1 / -1;
    padding-left: 0;
  }

  .footer-column {
    padding-left: 0;
  }
}

@media (max-width: 576px) {
  .footer {
    padding: 3.5rem 0 1.5rem;
  }

  .footer-top {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }

  .brand-desc {
    font-size: 0.8rem;
  }
}
</style>