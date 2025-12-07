<template>
  <div class="min-h-screen flex items-center justify-center p-4 md:p-6 overflow-hidden relative">
    <!-- Background water effect with document theme -->
    <div class="absolute inset-0 overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-sky-900">
      <!-- Water waves -->
      <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>

      <!-- Floating documents animation -->
      <div v-for="i in 5" :key="'doc-' + i" :class="`absolute animate-float-slow text-4xl opacity-10`" :style="`
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 2}s;
          animation-duration: ${Math.random() * 15 + 15}s;
          transform: rotate(${Math.random() * 30 - 15}deg);
        `">
        📄
      </div>
      <!-- Seal/stamp effect -->
      <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-8 border-red-500/10 opacity-20"></div>
      <div class="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border-8 border-blue-500/10 opacity-20"></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-4xl mx-auto">
      <!-- Header section -->
      <div class="text-center mb-10 md:mb-12">
        <!-- Animated document icon -->
        <div class="relative inline-block mb-6">
          <div
            class="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-2xl rotate-12 animate-pulse-slow">
            <span class="text-4xl">📋</span>
          </div>
          <div
            class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center animate-bounce">
            <span class="text-sm">📷</span>
          </div>
        </div>

        <h1 class="text-4xl md:text-5xl font-black mb-4">
          <span class="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            بارگذاری مدارک
          </span>
        </h1>

        <p class="text-cyan-100/80 text-lg mb-2">لطفاً مدارک لازم را با کیفیت مناسب آپلود کنید</p>
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-2"></span>
          <span class="text-sm text-green-300 font-medium">فرمت‌های قابل قبول: JPG, PNG, PDF</span>
        </div>
      </div>

      <!-- Main form card -->
      <div
        class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        <!-- Form header -->
        <div class="p-6 md:p-8 border-b border-white/10">
          <div class="flex items-center space-x-4 space-x-reverse">
            <div
              class="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-4">
              <span class="text-2xl">👤</span>
            </div>
            <div>
              <h2 class="text-xl font-bold text-white">اطلاعات ثبت‌نام</h2>
              <p class="text-cyan-200/80 text-sm">
                {{ stored.user?.name || 'شناگر' }} •
                {{ stored.selected?.raceName || 'مسابقه' }} •
                {{ stored.selected?.categoryLabel || 'رده سنی' }}
              </p>
            </div>
          </div>
        </div>

        <!-- Requirements checklist -->
        <div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-6">
          <h4 class="text-lg font-bold text-white mb-4 flex items-center">
            <span class="ml-2">📋</span>
            شرایط و نکات مهم
          </h4>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="text-green-400 ml-3 mt-1">✅</span>
              <span class="text-cyan-100/90">تصاویر باید واضح و خوانا باشند</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-400 ml-3 mt-1">✅</span>
              <span class="text-cyan-100/90">اعتبار بیمه ورزشی باید حداقل تا تاریخ مسابقات باشد</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-400 ml-3 mt-1">✅</span>
              <span class="text-cyan-100/90">شناسنامه باید صفحه اول با مشخصات کامل باشد</span>
            </li>
            <li class="flex items-start">
              <span class="text-red-400 ml-3 mt-1">⚠️</span>
              <span class="text-cyan-100/90">ارسال مدارک جعلی منجر به محرومیت دائمی می‌شود</span>
            </li>
          </ul>
        </div>

        <!-- Upload sections -->
        <div class="p-6 md:p-8 space-y-10">
          <!-- Insurance upload -->
          <div class="group">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3 space-x-reverse">
                <div
                  class="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 flex items-center justify-center mx-4">
                  <span class="text-2xl">🏥</span>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-1">تصویر بیمه ورزشی</h3>
                  <p class="text-cyan-200/70 text-sm">بیمه معتبر ورزشی با اعتبار حداقل ۶ ماه</p>
                </div>
              </div>
              <div v-if="previews.insurance" class="flex items-center space-x-2 space-x-reverse">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-sm text-green-400 font-medium">آپلود شده</span>
              </div>
            </div>

            <!-- Upload area -->
            <div @click="$refs.insuranceInput.click()" :class="[
              'relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10',
              previews.insurance ? 'border-green-500/50 bg-green-500/5' : 'border-white/20'
            ]">
              <!-- Hidden file input -->
              <input ref="insuranceInput" type="file" accept="image/*,.pdf" @change="onFile($event, 'insurance')"
                class="hidden" />

              <!-- Upload content -->
              <div class="space-y-4">
                <div class="text-5xl mb-4">
                  <span v-if="previews.insurance">✅</span>
                  <span v-else>📄</span>
                </div>

                <div>
                  <p class="text-white font-medium mb-2" v-if="!previews.insurance">
                    برای آپلود کلیک کنید یا فایل را اینجا رها کنید
                  </p>
                  <p class="text-white font-medium mb-2" v-else>
                    تصویر بیمه با موفقیت آپلود شد
                  </p>
                  <p class="text-cyan-200/70 text-sm">
                    حداکثر حجم: ۵ مگابایت • فرمت‌های مجاز: JPG, PNG, PDF
                  </p>
                </div>

                <div v-if="!previews.insurance"
                  class="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
                  <span class="ml-2">📤</span>
                  <span class="text-cyan-300 font-medium">انتخاب فایل</span>
                </div>
                <div v-else
                  class="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
                  <span class="ml-2">✅</span>
                  <span class="text-green-300 font-medium">آپلود موفق</span>
                </div>
              </div>

              <!-- Upload progress indicator (optional) -->
              <div v-if="uploading === 'insurance'" class="absolute bottom-4 left-4 right-4">
                <div class="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse"
                    style="width: 80%"></div>
                </div>
              </div>
            </div>

            <!-- Preview section -->
            <div v-if="previews.insurance" class="mt-6">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-semibold text-cyan-300">پیش‌نمایش</h4>
                <button @click="removeFile('insurance')"
                  class="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center">
                  <span class="ml-1">🗑️</span>
                  حذف
                </button>
              </div>
              <div class="relative rounded-xl overflow-hidden border border-white/10 bg-black/20 p-4">
                <img :src="previews.insurance" class="max-h-48 mx-auto rounded-lg shadow-lg" />
                <div class="absolute bottom-2 left-2 text-xs bg-black/50 text-white px-2 py-1 rounded">
                  📄 بیمه ورزشی
                </div>
              </div>
            </div>
          </div>

          <!-- ID Card upload -->
          <div class="group">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center space-x-3 space-x-reverse">
                <div
                  class="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 flex items-center justify-center mx-4">
                  <span class="text-2xl">🪪</span>
                </div>
                <div>
                  <h3 class="text-lg font-bold text-white mb-1">عکس شناسنامه</h3>
                  <p class="text-cyan-200/70 text-sm">صفحه اول شناسنامه با وضوح بالا</p>
                </div>
              </div>
              <div v-if="previews.idcard" class="flex items-center space-x-2 space-x-reverse">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-sm text-green-400 font-medium">آپلود شده</span>
              </div>
            </div>

            <!-- Upload area -->
            <div @click="$refs.idcardInput.click()" :class="[
              'relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10',
              previews.idcard ? 'border-green-500/50 bg-green-500/5' : 'border-white/20'
            ]">
              <!-- Hidden file input -->
              <input ref="idcardInput" type="file" accept="image/*" @change="onFile($event, 'idcard')" class="hidden" />

              <!-- Upload content -->
              <div class="space-y-4">
                <div class="text-5xl mb-4">
                  <span v-if="previews.idcard">✅</span>
                  <span v-else>📸</span>
                </div>

                <div>
                  <p class="text-white font-medium mb-2" v-if="!previews.idcard">
                    برای آپلود کلیک کنید یا فایل را اینجا رها کنید
                  </p>
                  <p class="text-white font-medium mb-2" v-else>
                    تصویر شناسنامه با موفقیت آپلود شد
                  </p>
                  <p class="text-cyan-200/70 text-sm">
                    حداکثر حجم: ۵ مگابایت
                  </p>
                </div>

                <div v-if="!previews.idcard"
                  class="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
                  <span class="ml-2">📤</span>
                  <span class="text-cyan-300 font-medium">انتخاب فایل</span>
                </div>
                <div v-else
                  class="inline-flex items-center px-4 py-2 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30">
                  <span class="ml-2">✅</span>
                  <span class="text-green-300 font-medium">آپلود موفق</span>
                </div>
              </div>

              <!-- Upload progress indicator -->
              <div v-if="uploading === 'idcard'" class="absolute bottom-4 left-4 right-4">
                <div class="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse"
                    style="width: 80%"></div>
                </div>
              </div>
            </div>

            <!-- Preview section -->
            <div v-if="previews.idcard" class="mt-6">
              <div class="flex items-center justify-between mb-3">
                <h4 class="text-sm font-semibold text-cyan-300">پیش‌نمایش</h4>
                <button @click="removeFile('idcard')"
                  class="text-sm text-red-400 hover:text-red-300 transition-colors flex items-center">
                  <span class="ml-1">🗑️</span>
                  حذف
                </button>
              </div>
              <div class="relative rounded-xl overflow-hidden border border-white/10 bg-black/20 p-4">
                <img :src="previews.idcard" class="max-h-48 mx-auto rounded-lg shadow-lg" />
                <div class="absolute bottom-2 left-2 text-xs bg-black/50 text-white px-2 py-1 rounded">
                  🪪 صفحه اول شناسنامه
                </div>
              </div>
            </div>
          </div>

          <!-- Error message -->
          <div v-if="error" class="animate-shake p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
            <div class="flex items-center text-red-300">
              <span class="ml-2 text-xl">⛔</span>
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
              بازگشت به مسابقات
            </button>

            <div class="text-center text-cyan-200/70">
              <div class="flex items-center space-x-2 space-x-reverse">
                <div class="w-6 h-2 rounded-full bg-white/30"></div>
                <div class="w-6 h-2 rounded-full bg-white/30"></div>
                <div class="w-10 h-2 rounded-full bg-cyan-500"></div>
                <div class="w-6 h-2 rounded-full bg-white/30 mx-2"></div>
              </div>
              <p class="text-sm mt-3">مرحله ۳ از ۴ • بارگذاری مدارک</p>
            </div>

            <button @click="next" :disabled="!previews.insurance || !previews.idcard" :class="[
              'group px-10 py-4 rounded-xl text-white font-bold shadow-lg transition-all duration-500 flex items-center justify-center w-full sm:w-auto text-lg',
              previews.insurance && previews.idcard
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/30 hover:-translate-y-1'
                : 'bg-gradient-to-r from-gray-600 to-gray-700 cursor-not-allowed opacity-70'
            ]">
              ادامه به مرحله پرداخت
              <span
                class="mr-3 text-2xl transform group-hover:translate-x-2 transition-transform duration-300">💰</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const previews = reactive({
  insurance: null,
  idcard: null
});
const uploading = ref(null);
const stored = JSON.parse(sessionStorage.getItem("registration-step") || "{}");
const error = ref("");

// function readFile(file) {
//   return new Promise((res, rej) => {
//     const fr = new FileReader();
//     fr.onload = () => res(fr.result);
//     fr.onerror = rej;
//     fr.readAsDataURL(file);
//   });
// }
function readFile(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();

    fr.onload = () => resolve(fr.result);

    fr.onerror = () => reject(new Error("BROKEN_FILE"));

    try {
      fr.readAsDataURL(file);
    } catch (e) {
      reject(new Error("BROKEN_FILE"));
    }
  });
}


// async function onFile(e, key) {
//   const file = e.target.files[0];
//   if (!file) return;

//   // Check file size (5MB max)
//   if (file.size > 5 * 1024 * 1024) {
//     error.value = "حجم فایل باید کمتر از ۵ مگابایت باشد";
//     return;
//   }

//   // Check file type
//   const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf'];
//   if (!validTypes.includes(file.type)) {
//     error.value = "فرمت فایل باید JPG، PNG یا PDF باشد";
//     return;
//   }

//   uploading.value = key;
//   error.value = "";

//   try {
//     const data = await readFile(file);
//     previews[key] = data;

//     // Save to sessionStorage
//     const store = JSON.parse(sessionStorage.getItem("uploads") || "{}");
//     store[key] = data;
//     sessionStorage.setItem("uploads", JSON.stringify(store));
//   } catch (err) {
//     error.value = "خطا در خواندن فایل. لطفاً دوباره تلاش کنید";
//   } finally {
//     uploading.value = null;
//   }
// }
async function onFile(e, key) {
  const file = e.target.files[0];
  if (!file) return;

  // حجم
  if (file.size > 5 * 1024 * 1024) {
    error.value = "حجم فایل باید کمتر از ۵ مگابایت باشد";
    return;
  }

  // فرمت مجاز
  const validTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];
  if (!validTypes.includes(file.type)) {
    error.value = "فرمت فایل باید JPG، PNG یا PDF باشد";
    return;
  }

  // شروع آپلود
  uploading.value = key;
  error.value = "";

  try {
    // خواندن فایل — اگر خراب باشد BROKEN_FILE دریافت می‌کنیم
    const data = await readFile(file);

    // ذخیره پیش‌نمایش
    previews[key] = data;

    // ذخیره در sessionStorage — خطای ذخیره از نوع خواندن فایل نیست
    try {
      const store = JSON.parse(sessionStorage.getItem("uploads") || "{}");
      store[key] = data;
      sessionStorage.setItem("uploads", JSON.stringify(store));
    } catch (storageErr) {
      console.warn("Storage error:", storageErr);
    }

  } catch (err) {
    // فقط خطای واقعی خواندن فایل را به کاربر نمایش می‌دهیم
    if (err.message === "BROKEN_FILE") {
      error.value = "خطا در خواندن فایل. لطفاً دوباره تلاش کنید";
    } else {
      console.warn("Unhandled error:", err);
    }
  } finally {
    uploading.value = null;
  }
}


function removeFile(key) {
  previews[key] = null;
  const store = JSON.parse(sessionStorage.getItem("uploads") || "{}");
  delete store[key];
  sessionStorage.setItem("uploads", JSON.stringify(store));
  error.value = "";
}

function next() {
  if (!previews.insurance || !previews.idcard) {
    error.value = "لطفاً هر دو مدرک را آپلود کنید";
    return;
  }
  router.push("/payment");
}

function back() {
  router.push("/races");
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
    transform: scale(1) rotate(12deg);
  }

  50% {
    transform: scale(1.05) rotate(12deg);
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
  background: linear-gradient(to bottom, #06b6d4, #3b82f6);
  border-radius: 4px;
}

/* Upload area hover effects */
.upload-area {
  transition: all 0.3s ease;
}

.upload-area:hover {
  border-color: #22d3ee;
  background: rgba(6, 182, 212, 0.1);
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .upload-area {
    padding: 2rem 1rem;
  }

  .preview-section img {
    max-height: 12rem;
  }
}
</style>
