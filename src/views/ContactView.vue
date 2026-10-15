<script setup>
import { ref, computed } from 'vue';

// فرم
const form = ref({
  name: '',
  phone: '',
  message: ''
});

const errors = ref({
  name: '',
  phone: '',
  message: ''
});

const touched = ref({
  name: false,
  phone: false,
  message: false
});

const status = ref('idle'); // idle | loading | success | error

// اعتبارسنجی نام
function validateName() {
  const v = form.value.name.trim();
  if (!v) return 'لطفاً نام خود را وارد کنید';
  if (v.length < 3) return 'نام باید حداقل ۳ حرف باشد';
  return '';
}

// اعتبارسنجی تلفن
function validatePhone() {
  const v = form.value.phone.trim();
  if (!v) return 'لطفاً شماره تماس خود را وارد کنید';
  const cleaned = v.replace(/[\s\-()]/g, '');
  if (!/^(\+98|0098|98|0)?9[0-9]{9}$/.test(cleaned)) {
    return 'شماره موبایل معتبر نیست';
  }
  return '';
}

// اعتبارسنجی پیام
function validateMessage() {
  const v = form.value.message.trim();
  if (!v) return 'لطفاً پیام خود را بنویسید';
  if (v.length < 10) return 'پیام باید حداقل ۱۰ حرف باشد';
  return '';
}

// اعتبارسنجی همه
function validateAll() {
  errors.value.name = validateName();
  errors.value.phone = validatePhone();
  errors.value.message = validateMessage();
  return !errors.value.name && !errors.value.phone && !errors.value.message;
}

function onBlur(field) {
  touched.value[field] = true;
  const validators = {
    name: validateName,
    phone: validatePhone,
    message: validateMessage
  };
  if (validators[field]) {
    errors.value[field] = validators[field]();
  }
}

function onInput(field) {
  if (touched.value[field]) {
    const validators = {
      name: validateName,
      phone: validatePhone,
      message: validateMessage
    };
    if (validators[field]) {
      errors.value[field] = validators[field]();
    }
  }
}

// ارسال فرم
function handleSubmit() {
  touched.value = { name: true, phone: true, message: true };

  if (!validateAll()) return;

  status.value = 'loading';

  setTimeout(() => {
    status.value = 'success';
    form.value = { name: '', phone: '', message: '' };
    touched.value = { name: false, phone: false, message: false };
    errors.value = { name: '', phone: '', message: '' };

    setTimeout(() => {
      status.value = 'idle';
    }, 5000);
  }, 1500);
}

// اطلاعات تماس
const contactInfo = [
  {
    icon: 'phone',
    title: 'تلفن',
    value: '۰۲۱-۱۲۳۴۵۶۷۸',
    link: 'tel:+982112345678'
  },
  {
    icon: 'email',
    title: 'ایمیل',
    value: 'info@koalacafe.com',
    link: 'mailto:info@koalacafe.com'
  },
  {
    icon: 'location',
    title: 'آدرس',
    value: 'تهران، خیابان ولیعصر، پلاک ۱۲۳',
    link: null
  }
];

const workingHours = [
  { day: 'شنبه تا چهارشنبه', time: '۸:۰۰ - ۲۳:۰۰' },
  { day: 'پنجشنبه و جمعه', time: '۹:۰۰ - ۲۴:۰۰' }
];
</script>

<template>
  <div class="contact-page">
    <div class="container">
      <!-- هدر -->
      <div class="page-header">
        <span class="section-eyebrow">Contact Us</span>
        <h1 class="page-title">تماس با ما</h1>
        <p class="page-subtitle">
          سوال، پیشنهاد یا انتقادی دارید؟ خوشحال می‌شویم بشنویم
        </p>
      </div>

      <div class="contact-content">
        <!-- ستون راست: فرم -->
        <div class="form-section">
          <h2 class="section-heading">ارسال پیام</h2>
          <div class="heading-divider"></div>

          <form @submit.prevent="handleSubmit" class="contact-form" novalidate>
            <!-- نام -->
            <div :class="['form-field', { 'has-error': touched.name && errors.name }]">
              <label for="name">نام و نام خانوادگی <span class="required">*</span></label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                placeholder="مثلاً: علی رضایی"
                @blur="onBlur('name')"
                @input="onInput('name')"
              />
              <p v-if="touched.name && errors.name" class="error-message">
                {{ errors.name }}
              </p>
            </div>

            <!-- تلفن -->
            <div :class="['form-field', { 'has-error': touched.phone && errors.phone }]">
              <label for="phone">شماره موبایل <span class="required">*</span></label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                dir="ltr"
                @blur="onBlur('phone')"
                @input="onInput('phone')"
              />
              <p v-if="touched.phone && errors.phone" class="error-message">
                {{ errors.phone }}
              </p>
            </div>

            <!-- پیام -->
            <div :class="['form-field', { 'has-error': touched.message && errors.message }]">
              <label for="message">پیام <span class="required">*</span></label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                placeholder="پیام خود را اینجا بنویسید..."
                @blur="onBlur('message')"
                @input="onInput('message')"
              ></textarea>
              <p v-if="touched.message && errors.message" class="error-message">
                {{ errors.message }}
              </p>
            </div>

            <!-- دکمه -->
            <button type="submit" class="btn btn-gold submit-btn" :disabled="status === 'loading'">
              {{ status === 'loading' ? 'در حال ارسال...' : 'ارسال پیام' }}
            </button>

            <!-- پیام موفقیت -->
            <Transition name="fade">
              <div v-if="status === 'success'" class="success-message">
                ✓ پیام شما با موفقیت ارسال شد
              </div>
            </Transition>
          </form>
        </div>

        <!-- ستون چپ: اطلاعات -->
        <div class="info-section">
          <h2 class="section-heading">اطلاعات تماس</h2>
          <div class="heading-divider"></div>

          <!-- کارت‌های تماس -->
          <div class="info-cards">
            <component
              :is="item.link ? 'a' : 'div'"
              v-for="item in contactInfo"
              :key="item.title"
              :href="item.link"
              class="info-card"
            >
              <div class="info-icon">
                <!-- Phone -->
                <svg v-if="item.icon === 'phone'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path d="M22 16.92V19.92C22 20.48 21.55 20.94 20.99 20.96C6.5 20.5 3.5 17.5 3.04 3.01C3.04 2.45 3.5 2 4.06 2H7.06C7.62 2 8.08 2.46 8.08 3.02C8.08 4.06 8.24 5.08 8.54 6.06C8.7 6.56 8.56 7.12 8.16 7.52L6.56 9.12C7.9 11.54 10.46 14.1 12.88 15.44L14.48 13.84C14.88 13.44 15.44 13.3 15.94 13.46C16.92 13.76 17.94 13.92 18.98 13.92C19.54 13.92 20 14.38 20 14.94V16.92H22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <!-- Email -->
                <svg v-else-if="item.icon === 'email'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <!-- Location -->
                <svg v-else viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="1.5"/>
                </svg>
              </div>

              <div class="info-content">
                <h3>{{ item.title }}</h3>
                <p>{{ item.value }}</p>
              </div>
            </component>
          </div>

          <!-- ساعت کاری -->
          <div class="working-hours">
            <h3 class="hours-title">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
                <path d="M12 6V12L16 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              ساعت کاری
            </h3>

            <div v-for="wh in workingHours" :key="wh.day" class="hours-row">
              <span>{{ wh.day }}</span>
              <strong>{{ wh.time }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-page {
  padding-top: 120px;
  padding-bottom: 5rem;
  min-height: 100vh;
  background: var(--bg-primary);
}

/* هدر */
.page-header {
  text-align: center;
  margin-bottom: 4rem;
}

.page-title {
  font-family: var(--font-persian);
  font-size: 3rem;
  font-weight: 800;
  color: var(--cream);
  margin-bottom: 0.75rem;
}

.page-subtitle {
  color: var(--gray);
  font-size: 0.95rem;
  max-width: 500px;
  margin: 0 auto;
}

/* چیدمان */
.contact-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 4rem;
  max-width: 1100px;
  margin: 0 auto;
}

/* عناوین بخش */
.section-heading {
  font-family: var(--font-persian);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--cream);
  margin-bottom: 0.75rem;
}

.heading-divider {
  width: 40px;
  height: 1px;
  background: var(--gold);
  margin-bottom: 2rem;
}

/* فرم */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field label {
  color: var(--cream);
  font-size: 0.9rem;
  font-weight: 600;
}

.required {
  color: var(--gold);
  margin-right: 0.25rem;
}

.form-field input,
.form-field textarea {
  width: 100%;
  padding: 0.95rem 1.15rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 0;
  color: var(--cream);
  font-family: inherit;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.form-field input:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--gold);
  background: var(--bg-hover);
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: var(--gray-dark);
}

.form-field textarea {
  resize: vertical;
  min-height: 120px;
  line-height: 1.8;
}

/* خطا */
.form-field.has-error input,
.form-field.has-error textarea {
  border-color: #d9534f;
}

.error-message {
  color: #d9534f;
  font-size: 0.8rem;
  font-weight: 500;
}

/* دکمه */
.submit-btn {
  align-self: flex-start;
  min-width: 200px;
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* موفقیت */
.success-message {
  padding: 1rem 1.25rem;
  background: rgba(76, 175, 80, 0.15);
  border: 1px solid rgba(76, 175, 80, 0.4);
  color: #4caf50;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* اطلاعات تماس */
.info-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.info-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.25rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  text-decoration: none;
}

.info-card:hover {
  border-color: var(--gold);
  background: var(--bg-hover);
  transform: translateX(-4px);
}

.info-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--gold);
  flex-shrink: 0;
}

.info-icon svg {
  width: 20px;
  height: 20px;
}

.info-content h3 {
  font-family: var(--font-persian);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--gray);
  margin-bottom: 0.25rem;
}

.info-content p {
  color: var(--cream);
  font-size: 0.9rem;
  font-weight: 500;
}

/* ساعت کاری */
.working-hours {
  padding: 1.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
}

.hours-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-persian);
  font-size: 1rem;
  font-weight: 700;
  color: var(--cream);
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

.hours-title svg {
  width: 18px;
  height: 18px;
  color: var(--gold);
}

.hours-row {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  color: var(--gray);
  font-size: 0.85rem;
}

.hours-row strong {
  color: var(--cream);
  font-weight: 600;
}

/* ریسپانسیو */
@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .page-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 576px) {
  .contact-page {
    padding-top: 100px;
  }

  .page-title {
    font-size: 1.8rem;
  }

  .submit-btn {
    align-self: stretch;
  }
  .fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
}
</style>