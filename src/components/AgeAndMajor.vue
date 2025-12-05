<template>
  <div class="min-h-screen flex items-center justify-center p-4 md:p-6 overflow-hidden relative">
    <!-- Background water effect -->
    <div class="absolute inset-0 overflow-hidden bg-linear-to-br from-cyan-900 via-blue-900 to-sky-900">
      <!-- Water waves -->
      <div class="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-cyan-500/20 to-transparent"></div>

      <!-- Animated swimming icons -->
      <div class="absolute top-1/4 left-10 animate-swim-slow">
        <span class="text-4xl">🏊‍♂️</span>
      </div>
      <div class="absolute top-2/3 right-10 animate-swim-fast">
        <span class="text-4xl">🏊‍♀️</span>
      </div>

      <!-- Floating bubbles -->
      <div v-for="i in 12" :key="'bubble-' + i" :class="`absolute rounded-full bg-cyan-300/10 animate-float`" :style="`
          width: ${Math.random() * 25 + 5}px;
          height: ${Math.random() * 25 + 5}px;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 2}s;
          animation-duration: ${Math.random() * 12 + 8}s;
        `">
      </div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-4xl mx-auto">
      <!-- Header section -->
      <div class="text-center mb-8 md:mb-12">
        <div class="inline-flex items-center justify-center mb-6">
          <div class="relative">
            <div
              class="w-20 h-20 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
              <span class="text-4xl">🎯</span>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-300/60 animate-ping"></div>
          </div>
        </div>

        <h1 class="text-4xl md:text-5xl font-black mb-4">
          <span class="bg-linear-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            انتخاب رشته تخصصی شنا
          </span>
        </h1>

        <!-- Age display card -->
        <div v-if="userAge"
          class="inline-block px-6 py-3 rounded-2xl bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
          <div class="flex items-center space-x-4 space-x-reverse">
            <div class="text-right">
              <p class="text-cyan-200 text-sm">سن شناگر</p>
              <p class="text-2xl font-bold text-white">{{ userAge }} سال</p>
            </div>
            <div class="h-10 w-px bg-cyan-400/50 mx-4"></div>
            <div class="text-right">
              <p class="text-cyan-200 text-sm">رده سنی</p>
              <p :class="[
                'font-bold text-lg px-3 py-1 rounded-lg',
                userAge < 12 ? 'bg-linear-to-r from-yellow-500 to-orange-500 text-white' :
                  'bg-linear-to-r from-blue-500 to-cyan-500 text-white'
              ]">
                {{ userAge < 12 ? 'زیر ۱۲ سال' : 'بالای ۱۲ سال' }} </p>
            </div>
          </div>
        </div>

        <p class="text-cyan-100/80 text-lg max-w-2xl mx-auto">
          رشته تخصصی خود را انتخاب کنید تا مسابقات مناسب شما نمایش داده شوند
        </p>
      </div>

      <!-- Swimming styles selection -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-10">
        <!-- پروانه -->
        <button @click="selectMajor('parvane')" :class="[
          'group relative p-6 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105',
          major === 'parvane'
            ? 'border-cyan-400 bg-linear-to-br from-cyan-500/30 to-blue-500/30 scale-105'
            : 'border-white/20 bg-white/5 hover:border-cyan-300'
        ]">
          <div class="text-center">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2"
                :class="major === 'parvane'
                  ? 'bg-linear-to-r from-yellow-400 to-orange-500'
                  : 'bg-linear-to-r from-cyan-400/20 to-blue-400/20 group-hover:from-cyan-400/30 group-hover:to-blue-400/30'">
                <span class="text-3xl">🦋</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">پروانه</h3>
              <p class="text-sm text-cyan-100/70 group-hover:text-cyan-100">Butterfly Stroke</p>
            </div>

            <div class="text-xs text-cyan-200/60 group-hover:text-cyan-200">
              <div class="flex items-center justify-center mb-1">
                <span class="ml-1">⚡</span>
                <span>سخت‌ترین تکنیک</span>
              </div>
              <div class="flex items-center justify-center">
                <span class="ml-1">💪</span>
                <span>نیاز به قدرت بالا</span>
              </div>
            </div>
          </div>

          <!-- Selected indicator -->
          <div v-if="major === 'parvane'"
            class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
            <span class="text-sm">✓</span>
          </div>
        </button>

        <!-- سینه -->
        <button @click="selectMajor('sine')" :class="[
          'group relative p-6 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105',
          major === 'sine'
            ? 'border-cyan-400 bg-linear-to-br from-cyan-500/30 to-blue-500/30 scale-105'
            : 'border-white/20 bg-white/5 hover:border-cyan-300'
        ]">
          <div class="text-center">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2"
                :class="major === 'sine'
                  ? 'bg-linear-to-r from-blue-400 to-cyan-500'
                  : 'bg-linear-to-r from-cyan-400/20 to-blue-400/20 group-hover:from-cyan-400/30 group-hover:to-blue-400/30'">
                <span class="text-3xl">🏊‍♂️</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">سینه</h3>
              <p class="text-sm text-cyan-100/70 group-hover:text-cyan-100">Breaststroke</p>
            </div>

            <div class="text-xs text-cyan-200/60 group-hover:text-cyan-200">
              <div class="flex items-center justify-center mb-1">
                <span class="ml-1">🕊️</span>
                <span>آرام‌ترین حرکت</span>
              </div>
              <div class="flex items-center justify-center">
                <span class="ml-1">🌀</span>
                <span>هماهنگی کامل بدن</span>
              </div>
            </div>
          </div>

          <!-- Selected indicator -->
          <div v-if="major === 'sine'"
            class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-linear-to-r from-blue-400 to-cyan-500 flex items-center justify-center">
            <span class="text-sm">✓</span>
          </div>
        </button>

        <!-- پشت -->
        <button @click="selectMajor('posht')" :class="[
          'group relative p-6 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105',
          major === 'posht'
            ? 'border-cyan-400 bg-linear-to-br from-cyan-500/30 to-blue-500/30 scale-105'
            : 'border-white/20 bg-white/5 hover:border-cyan-300'
        ]">
          <div class="text-center">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2"
                :class="major === 'posht'
                  ? 'bg-linear-to-r from-green-400 to-emerald-500'
                  : 'bg-linear-to-r from-cyan-400/20 to-blue-400/20 group-hover:from-cyan-400/30 group-hover:to-blue-400/30'">
                <span class="text-3xl">🔙</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">پشت</h3>
              <p class="text-sm text-cyan-100/70 group-hover:text-cyan-100">Backstroke</p>
            </div>

            <div class="text-xs text-cyan-200/60 group-hover:text-cyan-200">
              <div class="flex items-center justify-center mb-1">
                <span class="ml-1">👁️</span>
                <span>دید به سقف</span>
              </div>
              <div class="flex items-center justify-center">
                <span class="ml-1">🔄</span>
                <span>حرکت معکوس</span>
              </div>
            </div>
          </div>

          <!-- Selected indicator -->
          <div v-if="major === 'posht'"
            class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-linear-to-r from-green-400 to-emerald-500 flex items-center justify-center">
            <span class="text-sm">✓</span>
          </div>
        </button>

        <!-- قورباغه -->
        <button @click="selectMajor('ghorbaqe')" :class="[
          'group relative p-6 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105',
          major === 'ghorbaqe'
            ? 'border-cyan-400 bg-linear-to-br from-cyan-500/30 to-blue-500/30 scale-105'
            : 'border-white/20 bg-white/5 hover:border-cyan-300'
        ]">
          <div class="text-center">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2"
                :class="major === 'ghorbaqe'
                  ? 'bg-linear-to-r from-purple-400 to-pink-500'
                  : 'bg-linear-to-r from-cyan-400/20 to-blue-400/20 group-hover:from-cyan-400/30 group-hover:to-blue-400/30'">
                <span class="text-3xl">🐸</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">قورباغه</h3>
              <p class="text-sm text-cyan-100/70 group-hover:text-cyan-100">Breaststroke</p>
            </div>

            <div class="text-xs text-cyan-200/60 group-hover:text-cyan-200">
              <div class="flex items-center justify-center mb-1">
                <span class="ml-1">🐢</span>
                <span>حرکت آرام</span>
              </div>
              <div class="flex items-center justify-center">
                <span class="ml-1">🤿</span>
                <span>کشش زیر آب</span>
              </div>
            </div>
          </div>

          <!-- Selected indicator -->
          <div v-if="major === 'ghorbaqe'"
            class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-linear-to-r from-purple-400 to-pink-500 flex items-center justify-center">
            <span class="text-sm">✓</span>
          </div>
        </button>

        <!-- همه -->
        <button @click="selectMajor('all')" :class="[
          'group relative p-6 rounded-2xl border-2 transition-all duration-500 transform hover:scale-105',
          major === 'all'
            ? 'border-cyan-400 bg-linear-to-br from-cyan-500/30 to-blue-500/30 scale-105'
            : 'border-white/20 bg-white/5 hover:border-cyan-300'
        ]">
          <div class="text-center">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2"
                :class="major === 'all'
                  ? 'bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500'
                  : 'bg-linear-to-r from-cyan-400/20 to-blue-400/20 group-hover:from-cyan-400/30 group-hover:to-blue-400/30'">
                <span class="text-3xl">🌟</span>
              </div>
              <h3 class="text-xl font-bold text-white mb-2">همه رشته‌ها</h3>
              <p class="text-sm text-cyan-100/70 group-hover:text-cyan-100">All Styles</p>
            </div>

            <div class="text-xs text-cyan-200/60 group-hover:text-cyan-200">
              <div class="flex items-center justify-center mb-1">
                <span class="ml-1">🏅</span>
                <span>چندرشته‌ای</span>
              </div>
              <div class="flex items-center justify-center">
                <span class="ml-1">🎖️</span>
                <span>تجربه در همه</span>
              </div>
            </div>
          </div>

          <!-- Selected indicator -->
          <div v-if="major === 'all'"
            class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center">
            <span class="text-sm">✓</span>
          </div>
        </button>
      </div>

      <!-- Description of selected style -->
      <div v-if="major" class="mb-10">
        <div class="bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-6">
          <div class="flex items-start">
            <div class="ml-4 text-4xl">
              {{ getMajorIcon(major) }}
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-bold text-white mb-2">{{ getMajorTitle(major) }}</h3>
              <p class="text-cyan-100/80">{{ getMajorDescription(major) }}</p>
              <div class="mt-4 flex items-center text-sm text-cyan-300">
                <span class="ml-2">✅</span>
                <span>مناسب برای رده سنی {{ userAge < 12 ? 'زیر ۱۲ سال' : 'بالای ۱۲ سال' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error message -->
      <div v-if="error" class="mb-8 p-4 bg-red-500/20 border border-red-400/30 rounded-xl animate-shake">
        <div class="flex items-center text-red-300">
          <span class="ml-2 text-xl">⚠️</span>
          <p class="font-medium">{{ error }}</p>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
        <button @click="back"
          class="group px-8 py-4 rounded-xl border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
          <span class="ml-3 transform group-hover:-translate-x-1 transition-transform duration-300 text-xl">←</span>
          بازگشت به مرحله قبل
        </button>

        <button @click="next" :disabled="!major" :class="[
          'group px-10 py-4 rounded-xl text-white font-bold shadow-lg transition-all duration-500 flex items-center justify-center w-full sm:w-auto text-lg',
          major
            ? 'bg-linear-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/30 hover:-translate-y-1'
            : 'bg-linear-to-r from-gray-600 to-gray-700 cursor-not-allowed opacity-70'
        ]">
          مشاهده مسابقات مناسب من
          <span class="mr-3 text-2xl transform group-hover:translate-x-2 transition-transform duration-300">🏅</span>
        </button>
      </div>

      <!-- Progress indicator -->
      <div class="mt-12 pt-6 border-t border-white/10">
        <div class="flex items-center justify-center">
          <div class="w-6 h-2 rounded-full bg-white/30"></div>
          <div class="w-10 h-2 rounded-full mx-2 bg-cyan-500"></div>
          <div class="w-6 h-2 rounded-full bg-white/30"></div>
        </div>
        <p class="text-center text-cyan-200/70 text-sm mt-3">مرحله ۲ از ۳ • انتخاب رشته تخصصی</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const major = ref("");
const error = ref("");

// Get age from previous page
const userAge = computed(() => {
  try {
    const stored = JSON.parse(sessionStorage.getItem("user-base") || "{}");
    if (stored.birthYear) {
      const currentYear = 1404;
      const birthYear = parseInt(stored.birthYear);
      return currentYear - birthYear;
    }
    return null;
  } catch {
    return null;
  }
});

onMounted(() => {
  if (!userAge.value) {
    error.value = "اطلاعات سن یافت نشد. لطفاً از مرحله قبل مجدداً اقدام کنید.";
  }
});

function selectMajor(selected) {
  major.value = selected;
  error.value = "";
}

function getMajorIcon(majorType) {
  const icons = {
    parvane: "🦋",
    sine: "🏊‍♂️",
    posht: "🔙",
    ghorbaqe: "🐸",
    all: "🌟"
  };
  return icons[majorType] || "🏊";
}

function getMajorTitle(majorType) {
  const titles = {
    parvane: "شنا پروانه",
    sine: "شنا سینه",
    posht: "شنا پشت",
    ghorbaqe: "شنا قورباغه",
    all: "همه رشته‌های شنا"
  };
  return titles[majorType] || "";
}

function getMajorDescription(majorType) {
  const descriptions = {
    parvane: "رشته‌ای چالش‌برانگیز که نیاز به قدرت و تکنیک بالا دارد. مناسب برای شناگران با تجربه که به دنبال چالش‌های جدید هستند.",
    sine: "شنا سینه یا کرال سینه، پرطرفدارترین رشته شنا با حرکات هماهنگ دست و پا. مناسب برای تمام رده‌های سنی.",
    posht: "شنا به پشت که در آن صورت رو به آسمان است. این رشته نیاز به جهت‌یابی خوب و حفظ تعادل در آب دارد.",
    ghorbaqe: "شنا قورباغه یا کرال قورباغه، حرکتی آرام و ریتمیک که شبیه حرکت قورباغه در آب است.",
    all: "شناگرانی که در همه رشته‌ها مهارت دارند و می‌توانند در مسابقات چندگانه شرکت کنند."
  };
  return descriptions[majorType] || "";
}

function next() {
  if (!major.value) {
    error.value = "لطفاً یک رشته شنا را انتخاب کنید";
    return;
  }

  if (!userAge.value) {
    error.value = "اطلاعات سن یافت نشد. لطفاً از مرحله قبل مجدداً اقدام کنید.";
    return;
  }

  try {
    const stored = JSON.parse(sessionStorage.getItem("user-base") || "{}");
    const merged = {
      ...stored,
      age: userAge.value,
      major: major.value,
      majorTitle: getMajorTitle(major.value)
    };
    sessionStorage.setItem("user-full", JSON.stringify(merged));
    router.push("/races");
  } catch (err) {
    error.value = "خطا در ذخیره اطلاعات. لطفاً مجدداً تلاش کنید.";
  }
}

function back() {
  router.push("/form");
}
</script>

<style>
/* Custom animations */
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }

  10% {
    opacity: 0.3;
  }

  90% {
    opacity: 0.3;
  }

  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes swim-slow {

  0%,
  100% {
    transform: translateX(0) translateY(0);
  }

  25% {
    transform: translateX(20px) translateY(-10px);
  }

  50% {
    transform: translateX(0) translateY(0);
  }

  75% {
    transform: translateX(-20px) translateY(10px);
  }
}

@keyframes swim-fast {

  0%,
  100% {
    transform: translateX(0) translateY(0);
  }

  33% {
    transform: translateX(-30px) translateY(5px);
  }

  66% {
    transform: translateX(30px) translateY(-5px);
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

.animate-float {
  animation-name: float;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.animate-swim-slow {
  animation: swim-slow 8s ease-in-out infinite;
}

.animate-swim-fast {
  animation: swim-fast 6s ease-in-out infinite;
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(6, 78, 120, 0.3);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #06b6d4, #3b82f6);
  border-radius: 4px;
}

/* Selection button styles */
button:disabled {
  cursor: not-allowed;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-5 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .grid-cols-5 {
    grid-template-columns: 1fr;
  }
}
</style>