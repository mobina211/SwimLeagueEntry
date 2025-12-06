<template>
  <section
    class="min-h-screen flex items-center justify-center overflow-hidden relative bg-linear-to-br from-cyan-900 via-blue-900 to-sky-900">
    <!-- Background water effect -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Water waves -->
      <div class="absolute bottom-0 left-0 right-0 h-64 bg-linear-to-t from-cyan-500/30 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-blue-400/20 to-transparent"></div>

      <!-- Bubbles -->
      <div v-for="i in 20" :key="i" :class="`absolute rounded-full bg-cyan-300/20 animate-float`" :style="`
          width: ${Math.random() * 20 + 5}px;
          height: ${Math.random() * 20 + 5}px;
          left: ${Math.random() * 100}%;
          bottom: -20px;
          animation-delay: ${Math.random() * 5}s;
          animation-duration: ${Math.random() * 10 + 10}s;
        `">
      </div>

      <!-- Water surface light effect -->
      <div class="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white/10 to-transparent"></div>
    </div>

    <!-- Main content -->
    <div class="relative z-10 w-full max-w-4xl mx-auto px-4">
      <div
        class="bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
        <!-- Water ripple effect behind content -->
        <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl"></div>
        <div class="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>

        <!-- Header with logo -->
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-center mb-6">
            <div class="relative">
              <!-- Swimming icon -->
              <div
                class="w-20 h-20 rounded-full bg-linear-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <span class="text-4xl">🏊</span>
              </div>
              <!-- Water drops -->
              <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cyan-300/50"></div>
              <div class="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-blue-300/50"></div>
            </div>
          </div>

          <h1
            class="text-3xl md:text-4xl font-extrabold mb-2 bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            خوش آمدید
          </h1>
          <div class="w-24 h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full mb-6"></div>
        </div>

        <!-- Main title -->
        <div class="">
          <h1 class="text-4xl font-black text-center mb-6 leading-tight">
            <div class="bg-linear-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              مسابقات استانی شنای
            </div>
            <div class="mt-1 bg-linear-to-r from-cyan-100 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
              استخر شهید رئیسی
            </div>
            <span class="block text-xl mt-2 text-teal-500">مخصوص پسران</span>
          </h1>

          <!-- Swimming lanes design -->
          <div class="flex justify-center space-x-2 mb-8">
            <div v-for="i in 5" :key="i"
              :class="`h-2 rounded-full ${i % 2 === 0 ? 'bg-cyan-400' : 'bg-blue-500'} w-12`">
            </div>
          </div>
        </div>

        <!-- Event details -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mx-3">
                <span class="text-2xl">👦</span>
              </div>
              <h3 class="text-xl font-bold text-white">رده‌های سنی</h3>
            </div>
            <p class="text-lg text-cyan-100 font-semibold">زیر ۱۲ سال / بالای ۱۲ سال</p>
            <p class="text-gray-300 text-sm mt-2">زیر 12 سال پنجشنبه 4 دی</p>
            <p class="text-gray-300 text-sm">بالای 12 سال جمعه 5 دی</p>

          </div>

          <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-3">
                <span class="text-2xl">🏊‍♂️</span>
              </div>
              <h3 class="text-xl font-bold text-white">مکان برگزاری</h3>
            </div>
            <p class="text-lg text-cyan-100 font-semibold">استخر شهید رئیسی</p>
            <p class="text-gray-300 mt-2 text-sm">قزوین _ چهارراه مدنی نبش چهارراه نوروزیان _ جنب اداره کل آموزش پرورش
            </p>
          </div>
        </div>

        <!-- Date section -->
        <div class="text-center mb-10">
          <div
            class="inline-flex items-center justify-center bg-linear-to-r from-cyan-500/30 to-blue-500/30 px-8 py-4 rounded-2xl border border-white/20">
            <div class="text-center">
              <div class="flex items-center justify-center mb-2">
                <span class="text-2xl mr-2">📅</span>
                <h4 class="text-2xl font-bold text-white">دی ماه ۱۴۰۴</h4>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to action -->
        <div class="text-center">
          <p class="text-xl text-cyan-100 mb-8 font-medium">برای شروع ثبت‌نام روی دکمه کلیک کنید</p>

          <button @click="go"
            class="relative px-10 py-5 rounded-2xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-extrabold text-xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-1 active:translate-y-0 overflow-hidden group">

            <!-- Button shine effect -->
            <span
              class="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>

            <!-- Button content -->
            <div class="relative flex items-center justify-center">
              <span class="mr-3">شروع ثبت‌نام</span>
              <span
                class="text-2xl transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110 inline-block">→</span>
            </div>

            <!-- Water ripple effect -->
            <div
              class="absolute inset-0 rounded-2xl border-2 border-cyan-300/50 group-hover:border-cyan-300/80 transition-all duration-500">
            </div>
          </button>

          <!-- Additional info -->
          <p class="text-gray-400 mt-6 text-sm">
            ثبت‌نام برای والدین و شرکت‌کنندگان بالای ۱۴ سال امکان‌پذیر است
          </p>
        </div>

        <!-- Decorative elements -->
        <div class="absolute -z-10 top-10 left-10 w-32 h-32 rounded-full bg-cyan-400/10 blur-xl"></div>
        <div class="absolute -z-10 bottom-10 right-10 w-40 h-40 rounded-full bg-blue-400/10 blur-xl"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const go = () => router.push("/form");
</script>

<style>
/* Custom animations for water effects */
@keyframes float {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0;
  }

  10% {
    opacity: 0.5;
  }

  90% {
    opacity: 0.5;
  }

  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

.animate-float {
  animation-name: float;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
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
</style>