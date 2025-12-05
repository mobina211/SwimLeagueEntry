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
          <span class="text-sm text-emerald-300 font-medium">پرداخت امن • رمزگذاری شده</span>
        </div>
      </div>

      <!-- Progress indicator -->
      <div class="mb-10">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm text-emerald-300 font-medium">مرحله ۵ از ۵</span>
          <span class="text-sm text-cyan-200">۱۰۰٪ تکمیل شده</span>
        </div>
        <div class="h-2 bg-white/10 rounded-full overflow-hidden">
          <div class="h-full bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500 rounded-full w-full"></div>
        </div>
      </div>

      <!-- Main payment card -->
      <div
        class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        <!-- Registration summary -->
        <div class="p-6 md:p-8 border-b border-white/10">
          <div class="flex items-start space-x-4 space-x-reverse mb-6">
            <div
              class="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 flex items-center justify-center">
              <span class="text-3xl">🏊</span>
            </div>
            <div class="flex-1">
              <h2 class="text-xl font-bold text-white mb-2">خلاصه ثبت‌نام</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="space-y-3">
                  <div class="flex items-center">
                    <div
                      class="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center ml-3">
                      <span class="text-sm">👤</span>
                    </div>
                    <div>
                      <p class="text-sm text-cyan-200">نام شناگر</p>
                      <p class="font-bold text-white">{{ reg.user?.name || '---' }}</p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div
                      class="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center ml-3">
                      <span class="text-sm">🎂</span>
                    </div>
                    <div>
                      <p class="text-sm text-cyan-200">سن</p>
                      <p class="font-bold text-white">{{ reg.user?.age || '---' }} سال</p>
                    </div>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center">
                    <div
                      class="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 flex items-center justify-center ml-3">
                      <span class="text-sm">{{ getMajorIcon(reg.user?.major) }}</span>
                    </div>
                    <div>
                      <p class="text-sm text-cyan-200">رشته انتخابی</p>
                      <p class="font-bold text-white">{{ displayMajor }}</p>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div
                      class="w-8 h-8 rounded-lg bg-gradient-to-r from-emerald-500/20 to-green-500/20 flex items-center justify-center ml-3">
                      <span class="text-sm">🏆</span>
                    </div>
                    <div>
                      <p class="text-sm text-cyan-200">مسابقه</p>
                      <p class="font-bold text-white">{{ reg.selected?.raceName || '---' }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Fee box -->
          <div class="mt-6 p-4 rounded-2xl"
            :class="fee > 0 ? 'bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-400/30' : 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-400/30'">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm text-cyan-200">هزینه ثبت‌نام</p>
                <p class="text-2xl font-black text-white">{{ feeText }}</p>
              </div>
              <div class="text-4xl">
                {{ fee > 0 ? '💰' : '🎁' }}
              </div>
            </div>
            <div v-if="fee > 0" class="mt-3 text-sm text-emerald-300 flex items-center">
              <span class="ml-2">ℹ️</span>
              <span>این مبلغ غیرقابل استرداد می‌باشد</span>
            </div>
            <div v-else class="mt-3 text-sm text-cyan-300 flex items-center">
              <span class="ml-2">🎉</span>
              <span>ثبت‌نام در این مسابقه رایگان می‌باشد</span>
            </div>
          </div>
        </div>

        <!-- Payment instructions -->
        <div class="p-6 md:p-8">
          <!-- Bank card section -->
          <div class="mb-10">
            <h3 class="text-xl font-bold text-white mb-6 flex items-center">
              <span class="ml-3 text-2xl">💳</span>
              پرداخت از طریق درگاه بانکی
            </h3>

            <!-- Bank card design -->
            <div class="relative overflow-hidden rounded-2xl">
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
                  <div class="flex items-center">
                    <div class="w-12 h-8 rounded bg-white/20 ml-3"></div>
                    <span class="text-white text-sm font-medium">Debit Card</span>
                  </div>
                  <div class="text-3xl">🏦</div>
                </div>

                <div class="mb-8">
                  <div class="text-white/80 text-sm mb-2">شماره کارت مقصد</div>
                  <div class="text-3xl font-mono font-bold text-white tracking-widest dir-ltr">
                    ۶۱۰۴ - ۳۳۷۰ - XXXX - XXXX
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div>
                    <div class="text-white/80 text-sm mb-1">بانک</div>
                    <div class="text-xl font-bold text-white">بانک ملی ایران</div>
                  </div>
                  <div>
                    <div class="text-white/80 text-sm mb-1">تاریخ انقضا</div>
                    <div class="text-xl font-bold text-white">XX/XX</div>
                  </div>
                  <div
                    class="w-16 h-12 rounded-lg bg-gradient-to-r from-white/20 to-white/10 flex items-center justify-center">
                    <div class="text-white text-xs">CVV</div>
                  </div>
                </div>
              </div>

              <!-- Security badge -->
              <div
                class="absolute top-4 left-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                🔒 امن
              </div>
            </div>

            <!-- Payment steps -->
            <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <div
                  class="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-3">
                  <span class="text-xl">1️⃣</span>
                </div>
                <h4 class="font-bold text-white mb-2">انتقال مبلغ</h4>
                <p class="text-sm text-cyan-200/80">مبلغ را به کارت فوق واریز کنید</p>
              </div>
              <div class="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <div
                  class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <span class="text-xl">2️⃣</span>
                </div>
                <h4 class="font-bold text-white mb-2">ثبت رسید</h4>
                <p class="text-sm text-cyan-200/80">عکس رسید بانکی را آپلود کنید</p>
              </div>
              <div class="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10">
                <div
                  class="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 flex items-center justify-center mx-auto mb-3">
                  <span class="text-xl">3️⃣</span>
                </div>
                <h4 class="font-bold text-white mb-2">تکمیل ثبت‌نام</h4>
                <p class="text-sm text-cyan-200/80">در انتظار تأیید نهایی</p>
              </div>
            </div>
          </div>

          <!-- Receipt upload section -->
          <div class="mb-10">
            <div class="flex items-start justify-between mb-6">
              <div class="flex items-center space-x-3 space-x-reverse">
                <div
                  class="w-14 h-14 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 flex items-center justify-center">
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
                    حداکثر حجم: ۵ مگابایت • فرمت‌های مجاز: JPG, PNG
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
                  <span>رسید پرداخت بانکی</span>
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
                <div class="w-6 h-2 rounded-full bg-white/30"></div>
                <div class="w-10 h-2 rounded-full bg-emerald-500"></div>
              </div>
              <p class="text-sm mt-3">مرحله ۵ از ۵ • پرداخت و تکمیل</p>
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
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { SHEET_ENDPOINT } from "../config";

const router = useRouter();
const reg = JSON.parse(sessionStorage.getItem("registration-step") || "{}");
const uploads = JSON.parse(sessionStorage.getItem("uploads") || "{}");
const preview = ref(uploads.receipt || null);
const error = ref("");
const processing = ref(false);

const fee = computed(() => reg.selected && reg.selected.fee ? reg.selected.fee : 0);
const feeText = computed(() => fee.value ? `${fee.value.toLocaleString('fa-IR')} تومان` : "رایگان / بدون هزینه");

const displayMajor = computed(() => {
  const majors = {
    parvane: "پروانه",
    sine: "سینه",
    posht: "پشت",
    ghorbaqe: "غورباغه",
    all: "تمامی رشته‌ها"
  };
  return majors[reg.user?.major] || reg.user?.major || '---';
});

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
  if (file.size > 5 * 1024 * 1024) {
    error.value = "حجم فایل باید کمتر از ۵ مگابایت باشد";
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
  const uploads = JSON.parse(sessionStorage.getItem("uploads") || "{}");
  if (!uploads.receipt) {
    error.value = "لطفاً عکس رسید بانکی را آپلود کنید";
    return;
  }

  processing.value = true;
  error.value = "";

  // ساخت payload نهایی
  const userBase = JSON.parse(sessionStorage.getItem("user-full") || "{}");
  const finalPayload = {
    timestamp: new Date().toISOString(),
    personal: userBase,
    registration: reg.selected,
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
    // ذخیره پاسخ سرور 
    sessionStorage.setItem("submission-response", txt || "ok");
    sessionStorage.setItem("registration-complete", "true");
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