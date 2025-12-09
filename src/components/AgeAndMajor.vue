<template>
  <div class="min-h-screen flex items-center justify-center p-4 md:p-6 overflow-hidden relative">
    <!-- Background water effect -->
    <div class="absolute inset-0 overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-sky-900">
      <!-- Water waves -->
      <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>

      <!-- Animated swimming icons -->
      <div class="absolute top-1/4 left-10 animate-swim-slow">
        <span class="text-4xl">🏊‍♂️</span>
      </div>
      <div class="absolute top-2/3 right-10 animate-swim-fast">
        <span class="text-4xl">🏊‍♂️</span>
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
              class="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
              <span class="text-4xl">🎯</span>
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-300/60 animate-ping"></div>
          </div>
        </div>

        <h1 class="text-4xl md:text-5xl font-black mb-4">
          <span class="bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            انتخاب رشته و ثبت نهایی
          </span>
        </h1>

        <!-- Age and competition info card -->
        <div v-if="userAge"
          class="inline-block px-6 py-4 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-6">
          <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div class="text-center">
              <p class="text-cyan-200 text-sm">سن شناگر</p>
              <p class="text-2xl font-bold text-white">{{ userAge }} سال</p>
            </div>
            <div class="h-10 w-px bg-cyan-400/50 hidden md:block"></div>
            <div class="text-center">
              <p class="text-cyan-200 text-sm">تاریخ و ساعت</p>
              <p class="text-2xl font-bold text-white">
                {{ competitionDate }}
              </p>
              <p class="text-sm text-cyan-300">
                {{ competitionTime }}
              </p>
            </div>
            <div class="h-10 w-px bg-cyan-400/50 hidden md:block"></div>
            <div class="text-center">
              <p class="text-cyan-200 text-sm">متراژ مسابقه</p>
              <p class="text-2xl font-bold text-white">
                {{ competitionDistance }}
              </p>
              <p class="text-sm text-cyan-300">متر</p>
            </div>
          </div>
        </div>

        <p class="text-cyan-100/80 text-lg max-w-2xl mx-auto mb-2">
          با مشورت مربی شنای خود لطفا <span class="text-yellow-300 font-bold">دو رشته شنا</span> را از گزینه‌های زیر
          انتخاب کنید

        </p>

        <!-- Selected majors counter -->
        <div
          class="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 mb-2">
          <span class="text-cyan-300 text-sm font-medium">
            انتخاب شده: <span class="font-bold text-white">{{ selectedMajors.length.toLocaleString('fa-IR') }}</span> از
            ۲ رشته
          </span>
        </div>
      </div>

      <!-- Swimming styles selection -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
        <!-- پروانه -->
        <button @click="toggleMajor('parvane')" :disabled="!isMajorAvailable('parvane')" :class="[
          'group relative p-6 rounded-2xl border-2 transition-all duration-500 transform',
          isMajorAvailable('parvane')
            ? selectedMajors.includes('parvane')
              ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 scale-105 hover:scale-110'
              : 'border-white/20 bg-white/5 hover:border-cyan-300 hover:scale-105 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-blue-500/10'
            : 'border-gray-600/30 bg-gray-800/20 cursor-not-allowed opacity-60'
        ]">
          <div class="text-center">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2" :class="isMajorAvailable('parvane')
                ? selectedMajors.includes('parvane')
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                  : 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20 group-hover:from-cyan-400/30 group-hover:to-blue-400/30'
                : 'bg-gradient-to-r from-gray-600 to-gray-700'">
                <span class="text-3xl" :class="!isMajorAvailable('parvane') ? 'opacity-50' : ''">🦋</span>
              </div>
              <h3 class="text-xl font-bold mb-2" :class="isMajorAvailable('parvane') ? 'text-white' : 'text-gray-400'">
                پروانه</h3>
              <p class="text-sm"
                :class="isMajorAvailable('parvane') ? 'text-cyan-100/70 group-hover:text-cyan-100' : 'text-gray-500'">
                Butterfly Stroke</p>
            </div>

            <div class="text-xs"
              :class="isMajorAvailable('parvane') ? 'text-cyan-200/60 group-hover:text-cyan-200' : 'text-gray-500/60'">
              <div class="flex items-center justify-center mb-1">
                <span class="ml-1">⚡</span>
                <span>سخت‌ترین تکنیک</span>
              </div>
              <div class="flex items-center justify-center">
                <span class="ml-1">💪</span>
                <span>نیاز به قدرت بالا</span>
              </div>
            </div>

            <!-- Price tag -->
            <div v-if="isMajorAvailable('parvane')" class="mt-3">
              <span
                class="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-yellow-300 font-medium whitespace-nowrap">
                مسابقه موجود است
              </span>
            </div>

            <!-- Availability badge -->
            <div v-if="!isMajorAvailable('parvane')" class="mt-3">
              <span class="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                مسابقه‌ای موجود نیست
              </span>
            </div>
          </div>

          <!-- Selected indicator -->
          <div v-if="selectedMajors.includes('parvane')"
            class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
            <span class="text-sm">✓</span>
          </div>
        </button>

        <!-- سینه -->
        <button @click="toggleMajor('sine')" :disabled="!isMajorAvailable('sine')" :class="[
          'group relative p-6 rounded-2xl border-2 transition-all duration-500 transform',
          isMajorAvailable('sine')
            ? selectedMajors.includes('sine')
              ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 scale-105 hover:scale-110'
              : 'border-white/20 bg-white/5 hover:border-cyan-300 hover:scale-105 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-blue-500/10'
            : 'border-gray-600/30 bg-gray-800/20 cursor-not-allowed opacity-60'
        ]">
          <div class="text-center">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2" :class="isMajorAvailable('sine')
                ? selectedMajors.includes('sine')
                  ? 'bg-gradient-to-r from-blue-400 to-cyan-500'
                  : 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20 group-hover:from-cyan-400/30 group-hover:to-blue-400/30'
                : 'bg-gradient-to-r from-gray-600 to-gray-700'">
                <span class="text-3xl" :class="!isMajorAvailable('sine') ? 'opacity-50' : ''">🏊‍♂️</span>
              </div>
              <h3 class="text-xl font-bold mb-2" :class="isMajorAvailable('sine') ? 'text-white' : 'text-gray-400'">سینه
              </h3>
              <p class="text-sm"
                :class="isMajorAvailable('sine') ? 'text-cyan-100/70 group-hover:text-cyan-100' : 'text-gray-500'">
                Breaststroke</p>
            </div>

            <div class="text-xs"
              :class="isMajorAvailable('sine') ? 'text-cyan-200/60 group-hover:text-cyan-200' : 'text-gray-500/60'">
              <div class="flex items-center justify-center mb-1">
                <span class="ml-1">🕊️</span>
                <span>آرام‌ترین حرکت</span>
              </div>
              <div class="flex items-center justify-center">
                <span class="ml-1">🌀</span>
                <span>هماهنگی کامل</span>
              </div>
            </div>

            <!-- Price tag -->
            <div v-if="isMajorAvailable('sine')" class="mt-3">
              <span
                class="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-300 font-medium whitespace-nowrap">
                مسابقه موجود است
              </span>
            </div>

            <!-- Availability badge -->
            <div v-if="!isMajorAvailable('sine')" class="mt-3">
              <span class="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                مسابقه‌ای موجود نیست
              </span>
            </div>
          </div>

          <!-- Selected indicator -->
          <div v-if="selectedMajors.includes('sine')"
            class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center">
            <span class="text-sm">✓</span>
          </div>
        </button>

        <!-- پشت -->
        <button @click="toggleMajor('posht')" :disabled="!isMajorAvailable('posht')" :class="[
          'group relative p-6 rounded-2xl border-2 transition-all duration-500 transform',
          isMajorAvailable('posht')
            ? selectedMajors.includes('posht')
              ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 scale-105 hover:scale-110'
              : 'border-white/20 bg-white/5 hover:border-cyan-300 hover:scale-105 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-blue-500/10'
            : 'border-gray-600/30 bg-gray-800/20 cursor-not-allowed opacity-60'
        ]">
          <div class="text-center">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2" :class="isMajorAvailable('posht')
                ? selectedMajors.includes('posht')
                  ? 'bg-gradient-to-r from-green-400 to-emerald-500'
                  : 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20 group-hover:from-cyan-400/30 group-hover:to-blue-400/30'
                : 'bg-gradient-to-r from-gray-600 to-gray-700'">
                <span class="text-3xl" :class="!isMajorAvailable('posht') ? 'opacity-50' : ''">🔙</span>
              </div>
              <h3 class="text-xl font-bold mb-2" :class="isMajorAvailable('posht') ? 'text-white' : 'text-gray-400'">پشت
              </h3>
              <p class="text-sm"
                :class="isMajorAvailable('posht') ? 'text-cyan-100/70 group-hover:text-cyan-100' : 'text-gray-500'">
                Backstroke</p>
            </div>

            <div class="text-xs"
              :class="isMajorAvailable('posht') ? 'text-cyan-200/60 group-hover:text-cyan-200' : 'text-gray-500/60'">
              <div class="flex items-center justify-center mb-1">
                <span class="ml-1">👁️</span>
                <span>دید به سقف</span>
              </div>
              <div class="flex items-center justify-center">
                <span class="ml-1">🔄</span>
                <span>حرکت معکوس</span>
              </div>
            </div>

            <!-- Price tag -->
            <div v-if="isMajorAvailable('posht')" class="mt-3">
              <span
                class="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-emerald-300 font-medium whitespace-nowrap">
                مسابقه موجود است
              </span>
            </div>

            <!-- Availability badge -->
            <div v-if="!isMajorAvailable('posht')" class="mt-3">
              <span class="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                مسابقه‌ای موجود نیست
              </span>
            </div>
          </div>

          <!-- Selected indicator -->
          <div v-if="selectedMajors.includes('posht')"
            class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center">
            <span class="text-sm">✓</span>
          </div>
        </button>

        <!-- قورباغه -->
        <button @click="toggleMajor('ghorbaqe')" :disabled="!isMajorAvailable('ghorbaqe')" :class="[
          'group relative p-6 rounded-2xl border-2 transition-all duration-500 transform',
          isMajorAvailable('ghorbaqe')
            ? selectedMajors.includes('ghorbaqe')
              ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 scale-105 hover:scale-110'
              : 'border-white/20 bg-white/5 hover:border-cyan-300 hover:scale-105 hover:bg-gradient-to-br hover:from-cyan-500/10 hover:to-blue-500/10'
            : 'border-gray-600/30 bg-gray-800/20 cursor-not-allowed opacity-60'
        ]">
          <div class="text-center">
            <div class="mb-4">
              <div class="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-2" :class="isMajorAvailable('ghorbaqe')
                ? selectedMajors.includes('ghorbaqe')
                  ? 'bg-gradient-to-r from-purple-400 to-pink-500'
                  : 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20 group-hover:from-cyan-400/30 group-hover:to-blue-400/30'
                : 'bg-gradient-to-r from-gray-600 to-gray-700'">
                <span class="text-3xl" :class="!isMajorAvailable('ghorbaqe') ? 'opacity-50' : ''">🐸</span>
              </div>
              <h3 class="text-xl font-bold mb-2" :class="isMajorAvailable('ghorbaqe') ? 'text-white' : 'text-gray-400'">
                قورباغه</h3>
              <p class="text-sm"
                :class="isMajorAvailable('ghorbaqe') ? 'text-cyan-100/70 group-hover:text-cyan-100' : 'text-gray-500'">
                Breaststroke</p>
            </div>

            <div class="text-xs"
              :class="isMajorAvailable('ghorbaqe') ? 'text-cyan-200/60 group-hover:text-cyan-200' : 'text-gray-500/60'">
              <div class="flex items-center justify-center mb-1">
                <span class="ml-1">🐢</span>
                <span>حرکت آرام</span>
              </div>
              <div class="flex items-center justify-center">
                <span class="ml-1">🤿</span>
                <span>کشش زیر آب</span>
              </div>
            </div>

            <!-- Price tag -->
            <div v-if="isMajorAvailable('ghorbaqe')" class="mt-3">
              <span
                class="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 font-medium">
                مسابقه موجود است
              </span>
            </div>

            <!-- Availability badge -->
            <div v-if="!isMajorAvailable('ghorbaqe')" class="mt-3">
              <span class="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                مسابقه‌ای موجود نیست
              </span>
            </div>
          </div>

          <!-- Selected indicator -->
          <div v-if="selectedMajors.includes('ghorbaqe')"
            class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
            <span class="text-sm">✓</span>
          </div>
        </button>
      </div>

      <!-- Summary and payment section -->
      <div class="mb-10 items-center">
        <!-- Selected majors display -->
        <div v-if="selectedMajors.length > 0" class="mb-6">
          <div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl p-6">
            <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
              <div class="flex-1">
                <h3 class="text-xl font-bold text-white mb-3 flex items-center">
                  <span class="ml-2">📋</span>
                  رشته‌های انتخابی شما
                </h3>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="(selectedMajor, index) in selectedMajors" :key="index"
                    class="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium"
                    :class="getMajorBadgeClass(selectedMajor)">
                    <span class="ml-1">{{ getMajorIcon(selectedMajor) }}</span>
                    {{ getMajorTitle(selectedMajor) }}
                    <button @click.stop="removeMajor(selectedMajor)"
                      class="mr-1 text-xs hover:text-white transition-colors">
                      ×
                    </button>
                  </span>
                </div>

                <!-- Competition details -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div class="bg-gradient-to-br from-white/5 to-white/10 p-3 rounded-xl">
                    <p class="text-sm text-cyan-300 mb-1">تاریخ مسابقه</p>
                    <p class="font-bold text-white">{{ competitionDate }}</p>
                  </div>
                  <div class="bg-gradient-to-br from-white/5 to-white/10 p-3 rounded-xl">
                    <p class="text-sm text-cyan-300 mb-1">ساعت برگزاری</p>
                    <p class="font-bold text-white">{{ competitionTime }}</p>
                  </div>
                  <div class="bg-gradient-to-br from-white/5 to-white/10 p-3 rounded-xl">
                    <p class="text-sm text-cyan-300 mb-1">متراژ مسابقه</p>
                    <p class="font-bold text-white">{{ competitionDistance }} متر</p>
                  </div>
                </div>
              </div>

              <!-- Payment summary -->
              <div class="lg:w-1/3">
                <div
                  class="bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-400/30 rounded-xl p-4">
                  <h4 class="text-lg font-bold text-white mb-3 text-center">خلاصه پرداخت</h4>

                  <div class="space-y-2 mb-4">
                    <div class="flex justify-between items-center">
                      <span class="text-cyan-200 text-sm">تعداد رشته‌ها</span>
                      <span class="font-medium text-white">{{ selectedMajors.length }} رشته</span>
                    </div>
                    <div class="h-px bg-emerald-400/30 my-2"></div>
                    <div class="flex justify-between items-center">
                      <span class="text-lg font-bold text-white">مبلغ</span>
                      <span class="text-lg font-bold text-white mx-2">{{ totalFee.toLocaleString('fa-IR') }}
                        تومان</span>
                    </div>
                  </div>

                  <div class="text-xs text-emerald-300 flex items-center justify-center">
                    <span class="ml-1">ℹ️</span>
                    <span>این مبلغ غیرقابل استرداد می‌باشد</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Instructions -->
            <div class="mt-4 pt-4 border-t border-cyan-400/20">
              <div class="flex items-start text-sm text-cyan-200/80">
                <span class="ml-2 mt-0.5">ℹ️</span>
                <div>

                  <p v-if="selectedMajors.length === 1">
                    لطفاً یک رشته دیگر انتخاب کنید یا گزینه "همه رشته‌ها" را انتخاب نمایید.
                  </p>
                  <p v-else>
                    دو رشته با موفقیت انتخاب شدند. می‌توانید برای تغییر، روی × کلیک کنید.
                  </p>
                  <p class="mt-1 text-xs text-cyan-300/70">
                    رشته‌های خاکستری شده در رده سنی شما مسابقه‌ای ندارند.
                  </p>
                </div>
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

        <button @click="next" :disabled="!canContinue" :class="[
          'group px-10 py-4 rounded-xl text-white font-bold shadow-lg transition-all duration-500 flex items-center justify-center w-full sm:w-auto text-lg',
          canContinue
            ? 'bg-gradient-to-r from-blue-500 to-teal-600 hover:shadow-emerald-500/30 hover:-translate-y-1'
            : 'bg-gradient-to-r from-gray-600 to-gray-700 cursor-not-allowed opacity-70'
        ]">
          <span class="flex items-center">
            پرداخت و ادامه
            <span class="mr-3 text-2xl transform group-hover:translate-x-2 transition-transform duration-300">📄</span>
          </span>
        </button>
      </div>

      <!-- Progress indicator -->
      <div class="mt-12 pt-6 border-t border-white/10">
        <div class="flex items-center justify-center">
          <div class="w-6 h-2 rounded-full bg-white/30"></div>
          <div class="w-10 h-2 rounded-full mx-2 bg-cyan-500"></div>
          <div class="w-6 h-2 rounded-full bg-white/30"></div>
        </div>
        <p class="text-center text-cyan-200/70 text-sm mt-3">مرحله ۲ از ۴ • انتخاب رشته و ثبت نهایی</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
const selectedMajors = ref([]);
const error = ref("");

// Registration fee per major
const registrationFee = 350000; // 350,000 تومان برای هر رشته

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

// Competition date based on age
const competitionDate = computed(() => {
  return userAge.value < 12 ? '۴ دی ۱۴۰۴' : '۵ دی ۱۴۰۴';
});

// Competition time based on age
const competitionTime = computed(() => {
  if (userAge.value <= 12 && userAge.value >= 10) {
    return 'ساعت ۸:۰۰ تا ۱۱:۰۰ صبح'
  }
  else if (userAge.value <= 9 && userAge.value >= 6) {
    return 'ساعت ۱۱:۰۰ تا ۱۴:۰۰ صبح'
  }
  return 'ساعت ۸:۰۰ تا ۱۴:۰۰ صبح';
});

// Competition distance based on age
const competitionDistance = computed(() => {

  return userAge.value < 9 ? '۲۵' : '۵۰';
});

// Available majors based on age
const availableMajors = computed(() => {
  if (!userAge.value) return [];

  // زیر ۱۲ سال: فقط سینه و پشت
  if (userAge.value < 8) {
    return ['sine', 'posht'];
  }
  // بالای ۱۲ سال: همه رشته‌ها
  else if (userAge.value < 10) {
    return ['sine', 'posht', 'ghorbaqe'];
  }
  else {
    return ['sine', 'posht', 'ghorbaqe'];
  }
});

// Total fee calculation
const totalFee = computed(() => {
  return 250000;
});

// Check if a major is available
function isMajorAvailable(major) {
  return availableMajors.value.includes(major);
}

// Toggle major selection
function toggleMajor(major) {
  // Toggle the major
  const index = selectedMajors.value.indexOf(major);
  if (index > -1) {
    selectedMajors.value.splice(index, 1);
  } else {
    // Check if we can add more (max 2 unless it's "all")
    if (selectedMajors.value.length < 2) {
      selectedMajors.value.push(major);
    } else {
      error.value = "حداکثر می‌توانید دو رشته انتخاب کنید. برای انتخاب بیشتر، گزینه 'همه رشته‌ها' را انتخاب کنید.";
      setTimeout(() => error.value = "", 3000);
    }
  }
}

// Remove a major
function removeMajor(major) {
  const index = selectedMajors.value.indexOf(major);
  if (index > -1) {
    selectedMajors.value.splice(index, 1);
  }
}

// Get major badge class
function getMajorBadgeClass(major) {
  const classes = {
    parvane: 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-400/30',
    sine: 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-400/30',
    posht: 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-emerald-300 border border-emerald-400/30',
    ghorbaqe: 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-400/30',
    all: 'bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 text-white border border-cyan-400/30'
  };
  return classes[major] || 'bg-gray-700/30 text-gray-300';
}

// Check if user can continue
const canContinue = computed(() => {
  return selectedMajors.value.length === 2;
});

onMounted(() => {
  if (!userAge.value) {
    error.value = "اطلاعات سن یافت نشد. لطفاً از مرحله قبل مجدداً اقدام کنید.";
  }

  // Load previously selected majors from localStorage if exists
  try {
    const saved = localStorage.getItem('selectedMajors');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) {
        selectedMajors.value = parsed;
      }
    }
  } catch (e) {
    console.error('Error loading saved majors:', e);
  }
});

// Save selected majors to localStorage
watch(selectedMajors, (newVal) => {
  try {
    localStorage.setItem('selectedMajors', JSON.stringify(newVal));
  } catch (e) {
    console.error('Error saving majors:', e);
  }
}, { deep: true });

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
    parvane: "پروانه",
    sine: "سینه",
    posht: "پشت",
    ghorbaqe: "قورباغه",
    all: "همه رشته‌ها"
  };
  return titles[majorType] || "";
}

function next() {
  if (!canContinue.value) {
    error.value = "لطفاً دو رشته شنا انتخاب کنید یا گزینه 'همه رشته‌ها' را انتخاب نمایید";
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
      majors: selectedMajors.value,
      majorTitle: selectedMajors.value.map(m => getMajorTitle(m)).join(' و '),
      competitionDate: competitionDate.value,
      competitionTime: competitionTime.value,
      competitionDistance: competitionDistance.value + ' متر',
      registrationFee: totalFee.value,
      registrationDetails: {
        perMajorFee: registrationFee,
        totalFee: totalFee.value
      }
    };

    // Save to sessionStorage
    sessionStorage.setItem("user-full", JSON.stringify(merged));

    // Also save for payment step
    const paymentData = {
      ...merged,
      selectedMajors: selectedMajors.value,
      timestamp: new Date().toISOString()
    };
    sessionStorage.setItem("registration-step", JSON.stringify(paymentData));

    // Clear localStorage
    localStorage.removeItem('selectedMajors');

    // Skip races page and go directly to upload
    router.push("/upload");
  } catch (err) {
    error.value = "خطا در ذخیره اطلاعات. لطفاً مجدداً تلاش کنید.";
    console.error(err);
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
