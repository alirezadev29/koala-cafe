// ============================================
// Koala Cafe - Menu Data
// ============================================

export const categories = [
  { id: 'all', name: 'همه', icon: 'all' },
  { id: 'espresso', name: 'بار اسپرسو', icon: 'espresso' },
  { id: 'signature', name: 'قهوه‌های امضا', icon: 'signature' },
  { id: 'hot', name: 'نوشیدنی گرم', icon: 'hot' },
  { id: 'cold', name: 'نوشیدنی سرد', icon: 'cold' },
  { id: 'breakfast', name: 'صبحانه و برانچ', icon: 'breakfast' },
  { id: 'dessert', name: 'کیک و دسر', icon: 'dessert' },
  { id: 'main', name: 'غذای اصلی', icon: 'main' }
];

export const menuItems = [
  // ========== بار اسپرسو ==========
  {
    id: 1,
    name: 'اسپرسو سینگل',
    description: 'عصاره خالص قهوه، یک شات',
    price: 85000,
    category: 'espresso',
    icon: 'espresso',
    featured: false,
    tags: ['کلاسیک']
  },
  {
    id: 2,
    name: 'اسپرسو دوبل',
    description: 'دو شات اسپرسو غلیظ',
    price: 120000,
    category: 'espresso',
    icon: 'espresso',
    featured: false,
    tags: []
  },
  {
    id: 3,
    name: 'آمریکانو',
    description: 'اسپرسو با آب گرم',
    price: 130000,
    category: 'espresso',
    icon: 'espresso',
    featured: false,
    tags: []
  },
  {
    id: 4,
    name: 'کاپوچینو',
    description: 'اسپرسو با شیر بخارپز و فوم',
    price: 165000,
    category: 'espresso',
    icon: 'espresso',
    featured: true,
    tags: ['محبوب']
  },
  {
    id: 5,
    name: 'لاته',
    description: 'اسپرسو با شیر فراوان',
    price: 175000,
    category: 'espresso',
    icon: 'espresso',
    featured: false,
    tags: []
  },
  {
    id: 6,
    name: 'فلت وایت',
    description: 'اسپرسو با شیر میکروفوم',
    price: 175000,
    category: 'espresso',
    icon: 'espresso',
    featured: false,
    tags: []
  },
  {
    id: 7,
    name: 'کورتادو',
    description: 'اسپرسو با کمی شیر',
    price: 150000,
    category: 'espresso',
    icon: 'espresso',
    featured: false,
    tags: []
  },
  {
    id: 8,
    name: 'ماکیاتو',
    description: 'اسپرسو با یک قطره فوم شیر',
    price: 140000,
    category: 'espresso',
    icon: 'espresso',
    featured: false,
    tags: []
  },

  // ========== قهوه‌های امضا ==========
  {
    id: 9,
    name: 'کافه کوالا',
    description: 'لاته با کارامل نمکی و شکلات بلژیکی',
    price: 285000,
    category: 'signature',
    icon: 'signature',
    featured: true,
    tags: ['امضای کافه', 'ویژه']
  },
  {
    id: 10,
    name: 'کوآلا کول',
    description: 'آیس لاته با وانیل مادگاسکار',
    price: 265000,
    category: 'signature',
    icon: 'signature',
    featured: true,
    tags: ['ویژه']
  },
  {
    id: 11,
    name: 'استرالیانو',
    description: 'فلت وایت با شربت افرا',
    price: 245000,
    category: 'signature',
    icon: 'signature',
    featured: false,
    tags: []
  },
  {
    id: 12,
    name: 'طلای سیاه',
    description: 'اسپرسو با شکلات تلخ ۸۵٪',
    price: 235000,
    category: 'signature',
    icon: 'signature',
    featured: false,
    tags: ['لاکچری']
  },
  {
    id: 13,
    name: 'قهوه هندی',
    description: 'لاته با ماسالا هندی',
    price: 245000,
    category: 'signature',
    icon: 'signature',
    featured: false,
    tags: []
  },
  {
    id: 14,
    name: 'کاپوچینو گل رز',
    description: 'کاپوچینو با شربت گل رز ایرانی',
    price: 265000,
    category: 'signature',
    icon: 'signature',
    featured: false,
    tags: ['ایرانی']
  },

  // ========== نوشیدنی‌های گرم ==========
  {
    id: 15,
    name: 'هات چاکلت بلژیکی',
    description: 'شکلات بلژیکی خالص با شیر',
    price: 210000,
    category: 'hot',
    icon: 'hot',
    featured: true,
    tags: ['محبوب']
  },
  {
    id: 16,
    name: 'هات چاکلت نارگیلی',
    description: 'شکلات با شیر نارگیل',
    price: 225000,
    category: 'hot',
    icon: 'hot',
    featured: false,
    tags: []
  },
  {
    id: 17,
    name: 'چای سیاه با هل',
    description: 'چای سیاه قلم با هل گواتمالا',
    price: 145000,
    category: 'hot',
    icon: 'hot',
    featured: false,
    tags: []
  },
  {
    id: 18,
    name: 'چای سبز ژاپنی',
    description: 'ماچا خالص ژاپنی',
    price: 195000,
    category: 'hot',
    icon: 'hot',
    featured: false,
    tags: ['ژاپنی']
  },
  {
    id: 19,
    name: 'دمنوش بهار نارنج',
    description: 'بهار نارنج طبیعی شیراز',
    price: 165000,
    category: 'hot',
    icon: 'hot',
    featured: false,
    tags: ['ایرانی']
  },
  {
    id: 20,
    name: 'ماسالا چای',
    description: 'چای هندی با ادویه‌های مخصوص',
    price: 195000,
    category: 'hot',
    icon: 'hot',
    featured: false,
    tags: []
  },

  // ========== نوشیدنی‌های سرد ==========
  {
    id: 21,
    name: 'آیس آمریکانو',
    description: 'آمریکانو با یخ',
    price: 175000,
    category: 'cold',
    icon: 'cold',
    featured: false,
    tags: []
  },
  {
    id: 22,
    name: 'آیس لاته',
    description: 'لاته سرد با یخ',
    price: 195000,
    category: 'cold',
    icon: 'cold',
    featured: false,
    tags: []
  },
  {
    id: 23,
    name: 'آیس موکا',
    description: 'لاته با شکلات و یخ',
    price: 215000,
    category: 'cold',
    icon: 'cold',
    featured: false,
    tags: []
  },
  {
    id: 24,
    name: 'فراپه کافه کوالا',
    description: 'قهوه میکس با خامه و شکلات',
    price: 285000,
    category: 'cold',
    icon: 'cold',
    featured: true,
    tags: ['ویژه']
  },
  {
    id: 25,
    name: 'کلد برو',
    description: 'قهوه سرد دم‌کرده ۱۸ ساعته',
    price: 210000,
    category: 'cold',
    icon: 'cold',
    featured: false,
    tags: ['حرفه‌ای']
  },
  {
    id: 26,
    name: 'آیس اسپرسو تونیک',
    description: 'اسپرسو با تونیک و لیمو',
    price: 245000,
    category: 'cold',
    icon: 'cold',
    featured: false,
    tags: []
  },
  {
    id: 27,
    name: 'اسموتی توت‌فرنگی',
    description: 'توت‌فرنگی تازه با ماست',
    price: 235000,
    category: 'cold',
    icon: 'cold',
    featured: false,
    tags: []
  },
  {
    id: 28,
    name: 'لیموناد نعنا',
    description: 'لیمو تازه با نعنا و یخ',
    price: 185000,
    category: 'cold',
    icon: 'cold',
    featured: false,
    tags: []
  },

  // ========== صبحانه و برانچ ==========
  {
    id: 29,
    name: 'املت قارچ و پنیر',
    description: 'املت با قارچ و پنیر چدار',
    price: 355000,
    category: 'breakfast',
    icon: 'breakfast',
    featured: false,
    tags: []
  },
  {
    id: 30,
    name: 'نان تست آووکادو',
    description: 'نان تست با آووکادو و تخم‌مرغ',
    price: 425000,
    category: 'breakfast',
    icon: 'breakfast',
    featured: true,
    tags: ['محبوب']
  },
  {
    id: 31,
    name: 'پنکیک عسل',
    description: 'پنکیک با عسل طبیعی و گردو',
    price: 385000,
    category: 'breakfast',
    icon: 'breakfast',
    featured: false,
    tags: []
  },
  {
    id: 32,
    name: 'وافل بلژیکی',
    description: 'وافل با شکلات و توت‌فرنگی',
    price: 415000,
    category: 'breakfast',
    icon: 'breakfast',
    featured: false,
    tags: []
  },
  {
    id: 33,
    name: 'کروسان کره‌ای',
    description: 'کروسان تازه با کره و مربا',
    price: 285000,
    category: 'breakfast',
    icon: 'breakfast',
    featured: false,
    tags: []
  },
  {
    id: 34,
    name: 'املت ترافل',
    description: 'املت با خامه ترافل سیاه',
    price: 585000,
    category: 'breakfast',
    icon: 'breakfast',
    featured: true,
    tags: ['لاکچری', 'ویژه']
  },

  // ========== کیک و دسر ==========
  {
    id: 35,
    name: 'چیزکیک نیویورکی',
    description: 'چیزکیک کلاسیک با سس توت',
    price: 285000,
    category: 'dessert',
    icon: 'dessert',
    featured: true,
    tags: ['محبوب']
  },
  {
    id: 36,
    name: 'براونی شکلاتی',
    description: 'براونی گرم با بستنی وانیل',
    price: 265000,
    category: 'dessert',
    icon: 'dessert',
    featured: false,
    tags: []
  },
  {
    id: 37,
    name: 'تیرامیسو',
    description: 'دسر ایتالیایی با قهوه',
    price: 325000,
    category: 'dessert',
    icon: 'dessert',
    featured: false,
    tags: ['ایتالیایی']
  },
  {
    id: 38,
    name: 'کیک رد ولوت',
    description: 'کیک قرمز با خامه پنیری',
    price: 285000,
    category: 'dessert',
    icon: 'dessert',
    featured: false,
    tags: []
  },
  {
    id: 39,
    name: 'ماکارون فرانسوی',
    description: '۳ عدد، طعم‌های متنوع',
    price: 245000,
    category: 'dessert',
    icon: 'dessert',
    featured: false,
    tags: ['فرانسوی']
  },
  {
    id: 40,
    name: 'کرم بروله',
    description: 'دسر فرانسوی اصیل',
    price: 315000,
    category: 'dessert',
    icon: 'dessert',
    featured: true,
    tags: ['لاکچری']
  },

  // ========== غذای اصلی ==========
  {
    id: 41,
    name: 'پاستا آلفردو',
    description: 'پاستا با سس خامه و مرغ',
    price: 585000,
    category: 'main',
    icon: 'main',
    featured: false,
    tags: []
  },
  {
    id: 42,
    name: 'پاستا آربیاتا',
    description: 'پاستا با سس گوجه تند',
    price: 525000,
    category: 'main',
    icon: 'main',
    featured: false,
    tags: ['تند']
  },
  {
    id: 43,
    name: 'ساندویچ کلاب',
    description: 'نان تست با مرغ، بیکن و پنیر',
    price: 485000,
    category: 'main',
    icon: 'main',
    featured: false,
    tags: []
  },
  {
    id: 44,
    name: 'برگر دست‌ساز',
    description: 'گوشت آنگوس با پنیر چدار',
    price: 685000,
    category: 'main',
    icon: 'main',
    featured: true,
    tags: ['ویژه', 'محبوب']
  },
  {
    id: 45,
    name: 'سالاد سزار',
    description: 'کاهو با مرغ گریل و پارمزان',
    price: 455000,
    category: 'main',
    icon: 'main',
    featured: false,
    tags: []
  },
  {
    id: 46,
    name: 'سالاد یونانی',
    description: 'فتا با زیتون و خیار',
    price: 425000,
    category: 'main',
    icon: 'main',
    featured: false,
    tags: ['یونانی']
  },
  {
    id: 47,
    name: 'استیک مرغ',
    description: 'سینه مرغ گریل با سبزیجات',
    price: 585000,
    category: 'main',
    icon: 'main',
    featured: false,
    tags: []
  }
];

// ============================================
// توابع کمکی
// ============================================

export function getItemsByCategory(categoryId) {
  if (categoryId === 'all') return menuItems;
  return menuItems.filter((item) => item.category === categoryId);
}

export function getFeaturedItems() {
  return menuItems.filter((item) => item.featured);
}

export function getItemById(id) {
  return menuItems.find((item) => item.id === Number(id));
}

export function formatPrice(price) {
  return price.toLocaleString('fa-IR');
}