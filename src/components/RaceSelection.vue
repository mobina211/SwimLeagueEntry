<template>
  <div class="min-h-screen flex items-center justify-center p-4 md:p-6 overflow-hidden relative">
    <!-- Background water effect -->
    <div class="absolute inset-0 overflow-hidden bg-linear-to-br from-cyan-900 via-blue-900 to-sky-900">
      <!-- Water waves -->
      <div class="absolute bottom-0 left-0 right-0 h-48 bg-linear-to-t from-cyan-500/20 to-transparent"></div>

      <!-- Floating medals -->
      <div v-for="i in 8" :key="'medal-' + i" :class="`absolute animate-float-slow text-3xl opacity-20`" :style="`
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 3}s;
          animation-duration: ${Math.random() * 20 + 20}s;
        `">
        {{ ['🥇', '🥈', '🥉'][i % 3] }}
      </div>

      <!-- Animated water surface -->
      <div class="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white/10 to-transparent"></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-6xl mx-auto">
      <!-- Header section -->
      <div class="text-center mb-10 md:mb-14">
        <!-- Animated swimming icon -->
        <div class="relative inline-block mb-8">
          <div
            class="w-24 h-24 rounded-full bg-linear-to-r from-yellow-400 via-orange-500 to-cyan-500 flex items-center justify-center shadow-2xl animate-pulse-slow">
            <span class="text-5xl">🏆</span>
          </div>
          <div class="absolute -inset-4 rounded-full border-4 border-cyan-400/30 animate-ping-slow"></div>
        </div>

        <h1 class="text-4xl md:text-5xl font-black mb-4">
          <span class="bg-linear-to-r from-yellow-300 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
            مسابقات پیشنهادی برای شما
          </span>
        </h1>

        <!-- User info card -->
        <div class="inline-block mb-8">
          <div
            class="bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-2xl px-8 py-4 backdrop-blur-sm">
            <div class="flex flex-wrap items-center justify-center gap-6 gap-y-3">
              <!-- Name -->
              <div class="flex items-center space-x-3 space-x-reverse">
                <div
                  class="w-10 h-10 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-2">
                  <span class="text-xl">👤</span>
                </div>
                <div class="text-right">
                  <p class="text-cyan-200 text-sm">نام شناگر</p>
                  <p class="text-lg font-bold text-white">{{ user.name || '---' }}</p>
                </div>
              </div>

              <!-- Age -->
              <div class="w-px h-8 bg-cyan-400/30"></div>

              <div class="flex items-center space-x-3 space-x-reverse">
                <div
                  class="w-10 h-10 rounded-full bg-linear-to-r from-blue-400 to-cyan-500 flex items-center justify-center mx-2">
                  <span class="text-xl">🎂</span>
                </div>
                <div class="text-right">
                  <p class="text-cyan-200 text-sm">سن</p>
                  <p class="text-lg font-bold text-white">{{ user.age || '---' }} سال</p>
                </div>
              </div>

              <!-- Swimming style -->
              <div class="w-px h-8 bg-cyan-400/30"></div>

              <div class="flex items-center space-x-3 space-x-reverse">
                <div
                  class="w-10 h-10 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 flex items-center justify-center mx-2">
                  <span class="text-xl">{{ getMajorIcon(user.major) }}</span>
                </div>
                <div class="text-right">
                  <p class="text-cyan-200 text-sm">رشته انتخابی</p>
                  <p class="text-lg font-bold text-white">{{ displayMajor }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="text-cyan-100/80 text-lg max-w-2xl mx-auto">
          بر اساس مشخصات شما، {{ available.length }} مسابقه مناسب یافت شد
        </p>
      </div>

      <!-- Empty state -->
      <div v-if="available.length === 0" class="text-center py-16">
        <div
          class="inline-block p-8 rounded-3xl bg-linear-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-sm">
          <div class="text-7xl mb-6 opacity-50">🏊‍♂️</div>
          <h3 class="text-2xl font-bold text-white mb-3">مسابقه‌ای یافت نشد</h3>
          <p class="text-cyan-200/80 mb-8 max-w-md mx-auto">
            متأسفانه برای سن و رشته انتخابی شما در حال حاضر مسابقه‌ای برنامه‌ریزی نشده است.
          </p>
          <button @click="back"
            class="group px-8 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center mx-auto">
            <span class="ml-3 transform group-hover:-translate-x-1 transition-transform">←</span>
            بازگشت و انتخاب مجدد
          </button>
        </div>
      </div>

      <!-- Events list -->
      <div v-else class="space-y-6 md:space-y-8">
        <div v-for="(item, index) in available" :key="item.uid" class="group relative overflow-hidden">
          <!-- Event card -->
          <div
            class="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-500">
            <!-- Decorative ribbon for each event -->
            <div class="absolute top-0 right-0">
              <div class="relative">
                <div
                  class="w-32 h-8 bg-linear-to-r from-cyan-500 to-blue-600 transform rotate-45 translate-x-8 translate-y-2">
                </div>
                <div class="absolute top-2 right-2 text-xs font-bold text-white">مسابقه {{ index + 1 }}</div>
              </div>
            </div>

            <!-- Event header -->
            <div class="p-6 md:p-8 border-b border-white/10">
              <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2" v-html="item.eventTitle"></h3>
                  <div class="flex items-center space-x-4 space-x-reverse text-cyan-200">
                    <div class="flex items-center">
                      <span class="ml-2 text-lg">⏰</span>
                      <span class="font-medium">{{ item.periodTime }}</span>
                    </div>
                    <div class="flex items-center">
                      <span class="ml-2 text-lg">🏷️</span>
                      <span class="font-medium">{{ item.categoryLabel }}</span>
                    </div>
                  </div>
                </div>

                <!-- Time badge -->
                <div
                  class="inline-flex items-center px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30">
                  <span class="ml-2 text-lg">🕒</span>
                  <span class="font-bold text-white">{{ formatTime(item.periodTime) }}</span>
                </div>
              </div>
            </div>

            <!-- Races section -->
            <div class="p-6 md:p-8">
              <h4 class="text-lg font-semibold text-cyan-300 mb-6 flex items-center">
                <span class="ml-2 text-xl">🏊</span>
                دسته‌های مسابقه در این رویداد
              </h4>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button v-for="r in item.races" :key="r.key" @click="pick(item, r)"
                  class="group/race relative p-5 rounded-2xl bg-linear-to-br from-white/5 to-white/10 border border-white/10 hover:border-cyan-400/50 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-500/20">
                  <!-- Hover shine effect -->
                  <div
                    class="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-1000">
                  </div>

                  <div class="relative">
                    <!-- Race header -->
                    <div class="flex items-start justify-between mb-3">
                      <div>
                        <h5 class="text-lg font-bold text-white mb-1">{{ r.name }}</h5>
                        <div class="flex items-center text-sm text-cyan-200/80">
                          <span class="ml-1">{{ getSwimmingIcon(r.name) }}</span>
                          <span>مسابقه {{ r.distance || 'استاندارد' }}</span>
                        </div>
                      </div>
                      <div class="text-2xl opacity-70 group-hover/race:opacity-100 transition-opacity">
                        {{ getSwimmingIcon(r.name) }}
                      </div>
                    </div>

                    <!-- Race details -->
                    <div class="space-y-2">
                      <div v-if="r.fee" class="flex items-center justify-between">
                        <span class="text-sm text-cyan-200/70">هزینه ثبت‌نام</span>
                        <span
                          class="font-bold text-white bg-linear-to-r from-yellow-500 to-orange-500 px-3 py-1 rounded-full text-sm">
                          {{ formatNumber(r.fee) }} تومان
                        </span>
                      </div>

                      <div class="flex items-center justify-between">
                        <span class="text-sm text-cyan-200/70">سطح مسابقه</span>
                        <span
                          class="font-medium text-white px-3 py-1 rounded-full text-sm bg-linear-to-r from-blue-500/30 to-cyan-500/30">
                          {{ getCompetitionLevel(item.categoryLabel) }}
                        </span>
                      </div>

                      <div class="flex items-center justify-between">
                        <span class="text-sm text-cyan-200/70">وضعیت</span>
                        <span class="flex items-center">
                          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse ml-1"></span>
                          <span class="font-medium text-green-400 text-sm">دردسترس</span>
                        </span>
                      </div>
                    </div>

                    <!-- CTA -->
                    <div class="mt-6 flex items-center justify-between">
                      <span class="text-sm text-white/50 group-hover/race:text-cyan-300 transition-colors">
                        برای انتخاب کلیک کنید
                      </span>
                      <span class="text-xl transform group-hover/race:translate-x-2 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <!-- Event footer -->
            <div class="px-6 md:px-8 py-4 bg-linear-to-r from-white/5 to-transparent border-t border-white/10">
              <div class="flex items-center justify-between">
                <div class="flex items-center text-sm text-cyan-200/70">
                  <span class="ml-2">📍</span>
                  <span>استخر شهید رئیسی - استان قزوین</span>
                </div>
                <button @click="showEventDetails(item)"
                  class="text-sm text-cyan-300 hover:text-cyan-200 transition-colors flex items-center">
                  مشاهده جزئیات بیشتر
                  <span class="mr-1 text-lg">🔍</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Connecting line between events -->
          <div v-if="index < available.length - 1" class="hidden md:block">
            <div class="h-8 w-px bg-linear-to-b from-cyan-500 to-transparent mx-auto"></div>
            <div class="text-center">
              <span class="text-cyan-400/30 text-2xl">↓</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="mt-12 pt-8 border-t border-white/10">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
          <button @click="back"
            class="group px-8 py-4 rounded-xl border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
            <span class="ml-3 transform group-hover:-translate-x-1 transition-transform duration-300 text-xl">←</span>
            بازگشت به انتخاب رشته
          </button>

          <div class="text-center text-cyan-200/70">
            <div class="flex items-center space-x-2 space-x-reverse">
              <div class="w-6 h-2 rounded-full bg-white/30"></div>
              <div class="w-6 h-2 rounded-full bg-white/30"></div>
              <div class="w-10 h-2 rounded-full bg-cyan-500"></div>
            </div>
            <p class="text-sm mt-3">مرحله ۳ از ۳ • انتخاب مسابقه</p>
          </div>

          <button v-if="available.length > 0" @click="scrollToTop"
            class="px-8 py-4 rounded-xl bg-linear-to-r from-white/10 to-white/5 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
            <span class="mr-3">↑</span>
            بازگشت به بالا
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = JSON.parse(sessionStorage.getItem("user-full") || "{}");
const displayMajor = {
  parvane: "پروانه",
  sine: "سینه",
  posht: "پشت",
  ghorbaqe: "غورباغه",
  all: "تمامی رشته‌ها"
}[user.major] || user.major;

// Get events data
import events from "../data/events.js";

function categoryMatchesAge(cat, age) {
  return age >= cat.minAge && age <= cat.maxAge;
}

// Create available events list
const available = (() => {
  const list = [];
  const age = Number(user.age);
  if (!age) return list;

  events.forEach(ev => {
    ev.periods.forEach(p => {
      p.categories.forEach(cat => {
        if (!categoryMatchesAge(cat, age)) return;
        const races = cat.races.filter(r => r.allowed).filter(r => {
          if (user.major === "all") return true;
          return r.key.includes(user.major) || r.name.includes(displayMajor);
        });
        if (races.length) {
          list.push({
            uid: ev.id + "|" + p.time + "|" + cat.label,
            eventId: ev.id,
            eventTitle: ev.title,
            periodTime: p.time,
            categoryLabel: cat.label,
            races
          });
        }
      });
    });
  });
  return list;
})();

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

function getSwimmingIcon(raceName) {
  if (raceName.includes('پروانه')) return '🦋';
  if (raceName.includes('سینه')) return '🏊‍♂️';
  if (raceName.includes('پشت')) return '🔙';
  if (raceName.includes('غورباغه')) return '🐸';
  if (raceName.includes('آزاد')) return '⚡';
  return '🏊';
}

function formatNumber(num) {
  return new Intl.NumberFormat('fa-IR').format(num);
}

function formatTime(timeStr) {
  // Assuming timeStr is like "8:00-10:00"
  return timeStr || "زمان اعلام خواهد شد";
}

function getCompetitionLevel(category) {
  if (category.includes('مقدماتی')) return 'مقدماتی';
  if (category.includes('نیمه')) return 'نیمه نهایی';
  if (category.includes('پیشرفته')) return 'پیشرفته';
  return 'استاندارد';
}

function showEventDetails(item) {
  // You can implement a modal or expandable section here
  alert(`جزئیات مسابقه: ${item.eventTitle}\nزمان: ${item.periodTime}\nرده: ${item.categoryLabel}`);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function pick(item, race) {
  const registration = {
    user,
    selected: {
      eventId: item.eventId,
      eventTitle: item.eventTitle,
      periodTime: item.periodTime,
      categoryLabel: item.categoryLabel,
      raceKey: race.key,
      raceName: race.name,
      fee: race.fee,
      distance: race.distance || 'استاندارد'
    }
  };
  sessionStorage.setItem("registration-step", JSON.stringify(registration));
  router.push("/upload");
}

function back() {
  router.push("/age");
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
    opacity: 0.2;
  }

  90% {
    opacity: 0.2;
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
  }

  50% {
    transform: scale(1.05);
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

.animate-float-slow {
  animation: float-slow linear infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

.animate-ping-slow {
  animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(6, 78, 120, 0.1);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to bottom, #06b6d4, #3b82f6);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(to bottom, #0891b2, #2563eb);
}

/* Smooth transitions */
* {
  transition-property: background-color, border-color, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .grid-cols-3 {
    grid-template-columns: 1fr;
  }

  .event-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>