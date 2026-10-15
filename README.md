# Koala Cafe — Luxury Digital Menu

منوی دیجیتال لاکچری برای **کافه کوالا** — تجربه‌ای متفاوت از قهوه، دسر و آرامش.

## ✨ ویژگی‌ها

- 🎨 طراحی لاکچری مشکی و طلایی
- 🛒 سبد سفارش با Pinia
- 💾 ذخیره سبد در localStorage
- 🌗 حالت شب/روز (Dark/Light Mode)
- 🔍 جستجو و فیلتر زنده
- 📱 کاملاً ریسپانسیو
- 🎭 انیمیشن‌های نرم
- 🌍 پشتیبانی کامل RTL
- 🚫 صفحه ۴۰۴ سفارشی
- 📞 فرم تماس با اعتبارسنجی

## 🛠 تکنولوژی‌ها

| تکنولوژی | کاربرد |
|---|---|
| **Vue 3** | Composition API |
| **Vite** | Build Tool |
| **Pinia** | State Management |
| **Vue Router** | Routing |
| **CSS3** | Grid, Flexbox, Animations |
| **LocalStorage** | Persist Cart & Theme |

## 📂 ساختار پروژه
src/
├── assets/
│ └── main.css # Design system
├── components/
│ ├── AppHeader.vue # Header + Theme toggle
│ ├── AppFooter.vue # Footer
│ ├── MenuCard.vue # Product card
│ ├── ItemIcon.vue # SVG Icons
│ └── CartToast.vue # Toast notification
├── data/
│ └── menuData.js # Menu items (47 items)
├── router/
│ └── index.js # Routes
├── stores/
│ ├── cart.js # Cart state
│ └── theme.js # Theme state
├── views/
│ ├── HomeView.vue # Main menu page
│ ├── ItemDetailView.vue # Item detail
│ ├── CartView.vue # Cart page
│ ├── ContactView.vue # Contact page
│ ├── AboutView.vue # About page
│ └── NotFoundView.vue # 404 page
├── App.vue
└── main.js

## 📦 نصب و اجرا

```bash
# نصب وابستگی‌ها
npm install

# اجرا در حالت توسعه
npm run dev

# ساخت نسخه نهایی
npm run build

# پیش‌نمایش نسخه نهایی
npm run preview
👨‍💻 طراح و توسعه‌دهنده
علیرضا سیفی (Alireza Seifi)

🔗 LinkedIn: alireza-seifi-iteng

📧 Email: alireza.seifi.dev@gmail.com

💬 Telegram: @alireza_seifi24

📄 لایسنس
این پروژه تحت لایسنس MIT منتشر شده است — استفاده با ذکر منبع آزاد است.
