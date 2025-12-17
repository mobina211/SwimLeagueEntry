<template>
  <div class="min-h-screen flex items-center justify-center p-4 md:p-6 overflow-hidden relative">
    <!-- Background water effect with payment theme -->
    <div class="absolute inset-0 overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-sky-900">
      <!-- Water waves -->
      <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>

      <!-- Floating money/bank elements -->
      <div v-for="i in 8" :key="'money-' + i" :class="`absolute animate-float-slow text-3xl opacity-10`" :style="`
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 2}s;
          animation-duration: ${Math.random() * 20 + 20}s;
          transform: rotate(${Math.random() * 30 - 15}deg);
        `">
        {{ ['💳', '💰', '💸', '🏦', '💎', '🏅', '💵', '💴'][i % 8] }}
      </div>

      <!-- Security pattern -->
      <div class="absolute inset-0 opacity-5">
        <div v-for="i in 20" :key="'secure-' + i" class="absolute text-2xl" :style="`
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
          `">
          🔒
        </div>
      </div>

      <!-- Animated success check -->
      <div class="absolute top-1/4 right-1/4 animate-pulse-slow opacity-20">
        <div class="w-32 h-32 rounded-full border-8 border-green-500/30 flex items-center justify-center">
          <span class="text-6xl">✅</span>
        </div>
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-4xl mx-auto">
      <!-- Header section -->
      <div class="text-center mb-10 md:mb-12">
        <!-- Animated payment icon -->
        <div class="relative inline-block mb-6">
          <div
            class="w-24 h-24 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl animate-pulse-slow">
            <span class="text-5xl">💰</span>
          </div>
          <div
            class="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center animate-bounce">
            <span class="text-lg">🔒</span>
          </div>
          <div
            class="absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center animate-ping-slow">
            <span class="text-sm">✓</span>
          </div>
        </div>

        <h1 class="text-4xl md:text-5xl font-black mb-4">
          <span class="bg-gradient-to-r from-emerald-300 via-green-400 to-cyan-400 bg-clip-text text-transparent">
            پرداخت و تکمیل ثبت‌نام
          </span>
        </h1>

        <p class="text-cyan-100/80 text-lg mb-2">آخرین مرحله ثبت‌نام در مسابقات شنا</p>
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-2"></span>
          <span class="text-sm text-emerald-300 font-medium">پرداخت امن</span>
        </div>
      </div>

      <!-- Main payment card -->
      <div
        class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        <!-- Registration summary -->
        <div class="p-6 md:p-8 border-b border-white/10">
          <div class="flex items-start mb-6">
            <div class="flex-1">
              <h2 class="text-xl font-bold text-white mb-4">خلاصه ثبت‌نام</h2>

              <!-- User basic info -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div class="space-y-3">
                  <div class="flex items-center">
                    <div
                      class="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center ml-3">
                      <span class="text-sm">👤</span>
                    </div>
                    <div>
                      <p class="text-sm text-cyan-200">نام شناگر</p>
                      <p class="font-bold text-white">{{ userData?.name || '---' }}</p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div
                      class="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center ml-3">
                      <span class="text-sm">🎂</span>
                    </div>
                    <div>
                      <p class="text-sm text-cyan-200">سن</p>
                      <p class="font-bold text-white">{{ userData?.age || '---' }} سال</p>
                    </div>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <div
                      class="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 flex items-center justify-center ml-3">
                      <span class="text-sm">{{ getMajorIcon(selectedMajors[0]) }}</span>
                    </div>
                    <div>
                      <p class="text-sm text-cyan-200">رشته‌های انتخابی</p>
                      <p class="font-bold text-white">{{ displayMajor }}</p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div
                      class="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20 flex items-center justify-center ml-3">
                      <span class="text-sm">📅</span>
                    </div>
                    <div>
                      <p class="text-sm text-cyan-200">تاریخ مسابقه</p>
                      <p class="font-bold text-white">{{ competitionDate }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Total fee box -->
          <div
            class="mt-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30">
            <div class="flex flex-col md:flex-row items-center justify-between">
              <div class="mb-4 md:mb-0">
                <p class="text-sm text-cyan-200">هزینه کل ثبت‌نام</p>
                <div class="flex items-center space-x-4 space-x-reverse">
                  <p class="text-3xl font-black text-white">{{ totalFee.toLocaleString('fa-IR') }} تومان</p>
                  <div v-if="hasDiscount"
                    class="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20">
                    <span class="text-yellow-300 text-sm font-medium">تخفیف ۲۰٪</span>
                  </div>
                </div>
              </div>

              <div class="text-center md:text-right">
                <div class="flex items-center justify-center md:justify-end mb-2">
                  <span class="text-cyan-200 text-sm ml-2">تعداد رشته‌ها:</span>
                  <span class="font-bold text-white text-lg">{{ selectedMajors.length }} رشته</span>
                </div>
              </div>
            </div>

            <!-- Fee breakdown -->
            <div class="mt-4 pt-4 border-t border-emerald-400/20">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="text-center p-2 rounded-lg bg-white/5">
                  <p class="text-xs text-cyan-300">تعداد رشته‌ها</p>
                  <p class="font-bold text-white">{{ selectedMajors.length }} رشته</p>
                </div>
                <div class="text-center p-2 rounded-lg bg-white/5">
                  <p class="text-xs text-cyan-300">مبلغ کل</p>
                  <p class="font-bold text-white">{{ totalFee.toLocaleString('fa-IR') }} تومان</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment instructions -->
        <div class="p-6 md:p-8">
          <!-- Competition details -->
          <div class="mb-8">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center">
              <span class="ml-3 text-2xl">🏊</span>
              اطلاعات مسابقه
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-xl">
                <div class="flex items-center mb-2">
                  <span class="text-2xl ml-2">📅</span>
                  <div>
                    <p class="text-sm text-cyan-200">تاریخ برگزاری</p>
                    <p class="font-bold text-white">{{ competitionDate }}</p>
                    <p class="text-xs text-cyan-300">{{ competitionDay }}</p>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-xl">
                <div class="flex items-center mb-2">
                  <span class="text-2xl ml-2">⏰</span>
                  <div>
                    <p class="text-sm text-cyan-200">ساعت برگزاری</p>
                    <p class="font-bold text-white">{{ competitionTime }}</p>
                    <p class="text-xs text-cyan-300">{{ userData?.age < 12 ? 'صبح' : 'بعدازظهر' }}</p>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-xl">
                <div class="flex items-center mb-2">
                  <span class="text-2xl ml-2">📏</span>
                  <div>
                    <p class="text-sm text-cyan-200">متراژ مسابقه</p>
                    <p class="font-bold text-white" style="white-space: pre-line">{{ competitionDistance }} متر</p>
                    <p class="text-xs text-cyan-300">استخر شهید رئیسی</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Payment steps -->
          <div class="my-8 gap-4">
            <div class="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10border border-white/10">
              <div
                class="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-3">
                <span class="text-xl">🔒</span>
              </div>
              <h4 class="font-bold text-white mb-2">توضیحات</h4>
              <p class="text-sm text-cyan-200/80">لطفاً مبلغ موردنظر را به شماره کارت اعلام‌شده واریز کرده و تصویر رسید
                یا فیش واریزی را در همین بخش بارگذاری کنید.
                پس از بررسی و تأیید پرداخت، دسترسی شما به خدمات فعال خواهد شد.
              </p>
            </div>
          </div>

          <!-- Bank card section -->
          <div class="mb-10">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center">
              <span class="ml-3 text-2xl">💳</span>
              پرداخت از طریق درگاه بانکی
            </h3>

            <!-- Bank card design -->
            <div class="relative overflow-hidden rounded-2xl mb-8">
              <!-- Card background -->
              <div class="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 opacity-90"></div>

              <!-- Card pattern -->
              <div class="absolute inset-0 opacity-20">
                <div class="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 -translate-y-16 translate-x-16">
                </div>
                <div class="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white/10 -translate-x-24 translate-y-24">
                </div>
              </div>

              <!-- Card content -->
              <div class="relative z-10 p-8">
                <div class="flex items-center justify-between mb-8">
                  <div class="flex items-center"></div>
                </div>

                <div class="mb-8">
                  <div class="text-white/80 text-sm mb-2 flex items-center justify-between">
                    <span>شماره کارت مقصد</span>
                    <button @click="copyCardNumber"
                      class="text-xs bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-lg transition-colors duration-300 flex items-center gap-1">
                      <span>📋</span>
                      کپی شماره کارت
                    </button>
                  </div>
                  <div @click="copyCardNumber" class="cursor-pointer group">
                    <div
                      class="text-3xl font-mono font-bold text-white tracking-widest dir-ltr transition-all duration-300 group-hover:text-cyan-200">
                      6104 - 3376 - 0405 - 5028
                    </div>
                    <div class="text-white/60 text-sm mt-2">به نام: بهزاد چشفر</div>

                    <!-- Tooltip -->
                    <div
                      class="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      برای کپی کردن کلیک کنید
                      <div
                        class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800">
                      </div>
                    </div>
                  </div>

                  <!-- Copy success message -->
                  <div v-if="showCopySuccess" class="mt-3 text-green-300 text-sm flex items-center animate-fade-in">
                    <span class="ml-1">✅</span>
                    شماره کارت با موفقیت کپی شد: <span class="font-mono mr-2">6104337604055028</span>
                  </div>
                </div>
              </div>

              <!-- Security badge -->
              <div
                class="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                🔒 امن
              </div>

              <!-- Amount badge -->
              <div
                class="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                مبلغ: {{ totalFee.toLocaleString('fa-IR') }}
              </div>
            </div>
          </div>

          <!-- Receipt upload section -->
          <div class="mb-10">
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center space-x-3 space-x-reverse">
                <div
                  class="w-14 h-14 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 flex items-center justify-center mx-4">
                  <span class="text-2xl">🧾</span>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-1">آپلود تصویر رسید بانکی</h3>
                  <p class="text-cyan-200/70 text-sm">عکس واضح از رسید پرداخت خود را آپلود کنید</p>
                </div>
              </div>
              <div v-if="preview" class="flex items-center space-x-2 space-x-reverse">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-sm text-green-400 font-medium">آپلود شده</span>
              </div>
            </div>

            <!-- Upload area -->
            <div @click="$refs.receiptInput.click()" :class="[
              'relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500/10 group',
              preview ? 'border-green-500/50 bg-green-500/5' : 'border-white/20'
            ]">
              <!-- Hidden file input -->
              <input ref="receiptInput" type="file" accept="image/*,.pdf" @change="onReceipt" class="hidden" />

              <!-- Upload content -->
              <div class="space-y-4">
                <div class="text-6xl mb-4">
                  <span v-if="preview">✅</span>
                  <span v-else class="group-hover:scale-110 transition-transform">📤</span>
                </div>

                <div>
                  <p class="text-white font-medium mb-2" v-if="!preview">
                    برای آپلود رسید بانکی کلیک کنید
                  </p>
                  <p class="text-white font-medium mb-2" v-else>
                    رسید بانکی با موفقیت آپلود شد
                  </p>
                  <p class="text-cyan-200/70 text-sm">
                    حداکثر حجم: ۱ مگابایت • فرمت‌های مجاز: JPG, PNG
                  </p>
                  <p class="text-cyan-300/70 text-xs mt-2">
                    مبلغ قابل پرداخت: {{ totalFee.toLocaleString('fa-IR') }} تومان
                  </p>
                </div>

                <div v-if="!preview"
                  class="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border border-yellow-400/50 group-hover:from-yellow-500/40 group-hover:to-orange-500/40">
                  <span class="ml-2 text-xl">📷</span>
                  <span class="text-yellow-300 font-bold">انتخاب تصویر رسید</span>
                </div>
                <div v-else
                  class="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-400/50">
                  <span class="ml-2 text-xl">✅</span>
                  <span class="text-green-300 font-bold">آپلود موفق</span>
                </div>
              </div>
            </div>

            <!-- Preview section -->
            <div v-if="preview" class="mt-6">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-semibold text-cyan-300">پیش‌نمایش رسید</h4>
                <button @click="removeReceipt"
                  class="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center">
                  <span class="ml-1">🗑️</span>
                  حذف
                </button>
              </div>
              <div class="relative rounded-xl overflow-hidden border border-white/10 bg-black/20 p-4">
                <img :src="preview" class="max-h-56 mx-auto rounded-lg shadow-lg" />
                <div
                  class="absolute bottom-3 left-3 text-xs bg-black/70 text-white px-3 py-2 rounded-lg flex items-center">
                  <span class="ml-2">🧾</span>
                  <span>رسید پرداخت بانکی - {{ totalFee.toLocaleString('fa-IR') }} تومان</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Security notice -->
          <div class="mb-6 p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-400/30">
            <div class="flex items-start">
              <div class="ml-4 text-2xl">🔒</div>
              <div>
                <h4 class="font-bold text-white mb-2">اطلاعات امنیتی</h4>
                <p class="text-cyan-200/80 text-sm">
                  تمامی اطلاعات پرداخت شما به صورت رمزگذاری شده ذخیره می‌شود.
                  این صفحه تحت پروتکل امن HTTPS محافظت می‌شود.
                </p>
              </div>
            </div>
          </div>

          <!-- Error message -->
          <div v-if="error" class="mb-6 animate-shake p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
            <div class="flex items-center text-red-300">
              <span class="ml-2 text-xl">⚠️</span>
              <p class="font-medium">{{ error }}</p>
            </div>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="p-6 md:p-8 border-t border-white/10">
          <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
            <button @click="back"
              class="group px-8 py-4 rounded-xl border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
              <span class="ml-3 transform group-hover:-translate-x-1 transition-transform duration-300 text-xl">←</span>
              بازگشت به آپلود مدارک
            </button>

            <div class="text-center text-cyan-200/70">
              <div class="flex items-center space-x-2 space-x-reverse">
                <div class="w-6 h-2 rounded-full bg-white/30"></div>
                <div class="w-6 h-2 rounded-full bg-white/30"></div>
                <div class="w-6 h-2 rounded-full bg-white/30"></div>
                <div class="w-10 h-2 rounded-full bg-emerald-500 mx-2"></div>
              </div>
              <p class="text-sm mt-3">مرحله ۴ از ۴ • پرداخت و تکمیل</p>
            </div>

            <button @click="finalize" :disabled="!preview || processing" :class="[
              'group px-10 py-4 rounded-xl text-white font-bold shadow-lg transition-all duration-500 flex items-center justify-center w-full sm:w-auto text-lg min-w-[200px]',
              preview && !processing
                ? 'bg-gradient-to-r from-emerald-500 to-green-600 hover:shadow-emerald-500/30 hover:-translate-y-1'
                : processing
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-600 cursor-wait'
                  : 'bg-gradient-to-r from-gray-600 to-gray-700 cursor-not-allowed opacity-70'
            ]">
              <span v-if="processing" class="flex items-center">
                <svg class="animate-spin ml-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                </svg>
                در حال ارسال...
              </span>
              <span v-else class="flex items-center">
                تکمیل ثبت‌نام نهایی
                <span class="mr-3 text-2xl transform group-hover:scale-110 transition-transform duration-300">🚀</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { SHEET_ENDPOINT } from "../config";

const router = useRouter();

// Load data from localStorage
const userData = ref({});
const selectedMajors = ref([]);
const registrationData = ref({});

const preview = ref(null);
const error = ref("");
const processing = ref(false);

// Load data from localStorage on component mount
onMounted(() => {
  try {
    // Load user data
    const storedUser = JSON.parse(sessionStorage.getItem("user-full") || "{}");
    userData.value = storedUser;

    // Load selected majors (could be single or array)
    if (storedUser.majors) {
      selectedMajors.value = Array.isArray(storedUser.majors) ? storedUser.majors : [storedUser.majors];
    } else if (storedUser.major) {
      selectedMajors.value = [storedUser.major];
    }

    // Load registration data
    const storedReg = JSON.parse(sessionStorage.getItem("registration-step") || "{}");
    registrationData.value = storedReg;

    // Load uploaded receipt if exists
    const uploads = JSON.parse(sessionStorage.getItem("uploads") || "{}");
    if (uploads.receipt) {
      preview.value = uploads.receipt;
    }

  } catch (err) {
    error.value = "خطا در بارگذاری اطلاعات. لطفاً از ابتدا شروع کنید.";
    console.error("Error loading data:", err);
  }
});

// در قسمت setup کامپوننت
const showCopySuccess = ref(false);

// تابع کپی کردن شماره کارت
function copyCardNumber() {
  const cardNumber = '6104337604055028'; // شماره کارت بدون خط تیره

  navigator.clipboard.writeText(cardNumber)
    .then(() => {
      showCopySuccess.value = true;
      setTimeout(() => {
        showCopySuccess.value = false;
      }, 3000); // پیام به مدت 3 ثانیه نمایش داده می‌شود
    })
    .catch(err => {
      console.error('خطا در کپی کردن شماره کارت:', err);
      // روش fallback برای مرورگرهای قدیمی
      const textArea = document.createElement('textarea');
      textArea.value = cardNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      showCopySuccess.value = true;
      setTimeout(() => {
        showCopySuccess.value = false;
      }, 3000);
    });
}

// Computed properties
const perMajorFee = computed(() => {
  return userData.value.registrationDetails?.perMajorFee || 350000;
});

const hasDiscount = computed(() => {
  return false;
});

const totalFee = computed(() => {
  return 250000;
});

const displayMajor = computed(() => {
  return selectedMajors.value.map(major => getMajorTitle(major)).join(' و ');
});

// Competition date based on age
const competitionDate = computed(() => {
  return userData.value.age < 13 ? '۴ دی ۱۴۰۴' : '۵ دی ۱۴۰۴';
});

const competitionDay = computed(() => {
  return userData.value.age < 13 ? 'پنجشنبه' : 'جمعه';
});

// Competition time based on age
const competitionTime = computed(() => {
  if (userData.value.age <= 12 && userData.value.age >= 10) {
    return 'ساعت ۸:۰۰ تا ۱۰:۰۰ صبح'
  }
  else if (userData.value.age <= 9 && userData.value.age >= 6) {
    return 'ساعت ۱۱:۰۰ تا ۱۴:۰۰ صبح'
  }
  return 'ساعت ۸:۰۰ تا ۱۴:۰۰ صبح';
});

// Competition distance based on age
const competitionDistance = computed(() => {
  if (userData.value.age < 9) {
    return '۲۵';
  }
  else if (userData.value.age < 13) {
    return '۵۰';
  }
  else {
    return 'پروانه و پشت ۵۰\nسینه و غورباقه ۱۰۰';
  }
});


// Helper functions
function getMajorIcon(major) {
  const icons = {
    parvane: "🦋",
    sine: "🏊‍♂️",
    posht: "🔙",
    ghorbaqe: "🐸",
    all: "🌟"
  };
  return icons[major] || "🏊";
}

function getMajorTitle(major) {
  const titles = {
    parvane: "پروانه",
    sine: "سینه",
    posht: "پشت",
    ghorbaqe: "قورباغه",
    all: "همه رشته‌ها"
  };
  return titles[major] || major;
}

function getMajorDescriptionShort(major) {
  const descriptions = {
    parvane: "Butterfly Stroke",
    sine: "Breaststroke",
    posht: "Backstroke",
    ghorbaqe: "Breaststroke",
    all: "All Styles"
  };
  return descriptions[major] || "";
}

function getMajorBadgeClass(major) {
  const classes = {
    parvane: 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20',
    sine: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20',
    posht: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20',
    ghorbaqe: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20',
    all: 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20'
  };
  return classes[major] || 'bg-gray-700/30';
}

// File handling
function readFile(file) {
  return new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = rej;
    fr.readAsDataURL(file);
  });
}

async function onReceipt(e) {
  const file = e.target.files[0];
  if (!file) return;

  // Check file size (5MB max)
  if (file.size > 1 * 1024 * 1024) {
    error.value = "حجم فایل باید کمتر از ۱ مگابایت باشد";
    return;
  }

  // Check file type
  const validTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  if (!validTypes.includes(file.type)) {
    error.value = "فرمت فایل باید JPG یا PNG باشد";
    return;
  }

  error.value = "";
  try {
    preview.value = await readFile(file);
    const store = JSON.parse(sessionStorage.getItem("uploads") || "{}");
    store.receipt = preview.value;
    sessionStorage.setItem("uploads", JSON.stringify(store));
  } catch (err) {
    error.value = "خطا در خواندن فایل. لطفاً دوباره تلاش کنید";
  }
}

function removeReceipt() {
  preview.value = null;
  const store = JSON.parse(sessionStorage.getItem("uploads") || "{}");
  delete store.receipt;
  sessionStorage.setItem("uploads", JSON.stringify(store));
  error.value = "";
}

function back() {
  router.push("/upload");
}


async function finalize() {
  // بررسی و تولید کد رهگیری
  let trackingCode = sessionStorage.getItem("tracking-code");
  if (!trackingCode) {
    const nationalCode = userData.value.nationalCode || 'UNKNOWN';
    let hash = 0;
    const inputString = nationalCode + Date.now().toString();
    for (let i = 0; i < inputString.length; i++) {
      hash = (hash << 5) - hash + inputString.charCodeAt(i);
      hash |= 0;
    }
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    trackingCode = 'SWIM-';
    for (let i = 0; i < 8; i++) {
      trackingCode += chars[Math.abs((hash >> (i * 4)) % chars.length)];
    }

    sessionStorage.setItem("tracking-code", trackingCode);
    localStorage.setItem('tracking-code-' + nationalCode, trackingCode);
  }

  const uploads = JSON.parse(sessionStorage.getItem("uploads") || "{}");
  if (!uploads.receipt) {
    error.value = "لطفاً عکس رسید بانکی را آپلود کنید";
    return;
  }

  processing.value = true;
  error.value = "";

  const finalPayload = {
    timestamp: new Date().toISOString(),
    trackingCode: trackingCode,
    personal: userData.value,
    registration: {
      majors: selectedMajors.value,
      majorTitles: selectedMajors.value.map(getMajorTitle),
      totalFee: totalFee.value,
      perMajorFee: perMajorFee.value,
      hasDiscount: hasDiscount.value,
      competitionDate: competitionDate.value,
      competitionTime: competitionTime.value,
      competitionDistance: competitionDistance.value,
      competitionDay: competitionDay.value,
      registrationDate: new Date().toLocaleDateString('fa-IR')
    },
    uploads: uploads
  };

  try {
    const res = await fetch(SHEET_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(finalPayload)
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const txt = await res.text();
    let serverResponse;
    try {
      serverResponse = JSON.parse(txt);
    } catch {
      serverResponse = { ok: true };
    }

    if (!serverResponse.ok) {
      error.value = serverResponse.error || "خطا در ثبت نام. لطفاً دوباره تلاش کنید";
      return;
    }

    // ثبت موفق
    sessionStorage.setItem("submission-response", txt);
    sessionStorage.setItem("registration-complete", "true");
    sessionStorage.setItem("final-registration", JSON.stringify(finalPayload));
    router.push("/done");

  } catch (err) {
    error.value = "خطا در ارسال اطلاعات. لطفاً دوباره تلاش کنید: " + String(err);
  } finally {
    processing.value = false;
  }
}

</script>

<style>
/* Custom animations */
@keyframes float-slow {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }

  10% {
    opacity: 0.1;
  }

  90% {
    opacity: 0.1;
  }

  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes pulse-slow {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.2;
  }

  50% {
    transform: scale(1.05);
    opacity: 0.3;
  }
}

@keyframes ping-slow {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

@keyframes shake {

  0%,
  100% {
    transform: translateX(0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-5px);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translateX(5px);
  }
}

.animate-float-slow {
  animation: float-slow linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(6, 78, 120, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #10b981, #059669);
  border-radius: 4px;
}

/* RTL support for numbers */
.dir-ltr {
  direction: ltr;
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .payment-steps {
    grid-template-columns: 1fr;
  }

  .card-content {
    padding: 1.5rem;
  }
}

/* Loading spinner */
@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
