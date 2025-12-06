<template>
  <div class="min-h-screen flex items-center justify-center p-4 md:p-6 overflow-hidden relative">
    <!-- Background celebration effect -->
    <div class="absolute inset-0 overflow-hidden bg-gradient-to-br from-emerald-900 via-green-900 to-cyan-900">
      <!-- Confetti animation -->
      <div v-for="i in 50" :key="'confetti-' + i" :class="`absolute animate-confetti text-2xl`" :style="`
          left: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 2}s;
          animation-duration: ${Math.random() * 3 + 2}s;
          color: ${['#fbbf24', '#60a5fa', '#34d399', '#f87171', '#a78bfa'][Math.floor(Math.random() * 5)]};
        `">
        {{ ['🎉', '🎊', '✨', '🏆', '🥇', '🥈', '🥉', '🎁', '🏅', '🎈'][i % 10] }}
      </div>

      <!-- Floating success icons -->
      <div v-for="i in 12" :key="'success-' + i" :class="`absolute animate-float-slow text-4xl opacity-20`" :style="`
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 3}s;
          animation-duration: ${Math.random() * 20 + 15}s;
        `">
        ✅
      </div>

      <!-- Shining rays effect -->
      <div class="absolute inset-0 overflow-hidden opacity-10">
        <div v-for="i in 8" :key="'ray-' + i"
          class="absolute h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" :style="`
            width: 50%;
            top: 50%;
            left: 50%;
            transform-origin: left center;
            transform: rotate(${i * 45}deg);
            animation: ray-glow 3s ease-in-out infinite;
            animation-delay: ${i * 0.2}s;
          `">
        </div>
      </div>
    </div>

    <!-- Main success card -->
    <div class="relative z-10 w-full max-w-4xl mx-auto">
      <!-- Celebration header -->
      <div class="text-center mb-10 md:mb-12">
        <!-- Animated trophy -->
        <div class="relative inline-block mb-8">
          <div
            class="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-amber-600 flex items-center justify-center shadow-2xl animate-bounce-slow">
            <span class="text-7xl">🏆</span>
          </div>

          <!-- Orbiting medals -->
          <div v-for="i in 3" :key="'medal-orbit-' + i"
            class="absolute w-16 h-16 rounded-full border-2 border-yellow-400/30" :style="`
              top: 50%;
              left: 50%;
              margin-top: -32px;
              margin-left: -32px;
              transform: rotate(${i * 120}deg) translateY(-120px) rotate(-${i * 120}deg);
              animation: orbit ${8 + i * 2}s linear infinite;
            `">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl">
              {{ ['🥇', '🥈', '🥉'][i - 1] }}
            </div>
          </div>

          <!-- Sparkles -->
          <div
            class="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 animate-ping">
          </div>
          <div
            class="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400 animate-ping"
            style="animation-delay: 0.5s"></div>
        </div>

        <h1 class="text-5xl md:text-6xl font-black mb-6">
          <span class="bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
            تبریک می‌گوییم! 🎊
          </span>
        </h1>

        <p class="text-2xl font-bold text-white mb-4">ثبت‌نام شما با موفقیت تکمیل شد</p>
        <p class="text-cyan-100/80 text-lg max-w-2xl mx-auto">
          شما به صورت رسمی در مسابقات شنای استانی شرکت خواهید کرد
        </p>
      </div>

      <!-- Success card -->
      <div
        class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden mb-10">
        <!-- Success ribbon -->
        <div class="relative h-3 bg-gradient-to-r from-emerald-500 via-green-500 to-cyan-500"></div>
        <div class="absolute top-0 right-0">
          <div class="relative">
            <div
              class="w-40 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 transform rotate-45 translate-x-12 -translate-y-2">
            </div>
            <div class="absolute top-3 right-4 text-sm font-bold text-white">ثبت‌شده</div>
          </div>
        </div>

        <!-- Success content -->
        <div class="p-8 md:p-12">
          <!-- Success icon -->
          <div class="flex justify-center mb-10">
            <div class="relative">
              <div
                class="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                <span class="text-5xl">✅</span>
              </div>
              <div class="absolute -inset-6 rounded-full border-4 border-emerald-400/30 animate-pulse-slow"></div>
            </div>
          </div>

          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-white mb-6">جزئیات ثبت‌نام</h2>
            <p class="text-cyan-200/80 text-lg mb-10">
              ثبت‌نام شما با موفقیت در سیستم ثبت شد. کد رهگیری شما:
            </p>

            <!-- Tracking code -->
            <div class="inline-block mb-10">
              <div class="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-2xl p-6">
                <p class="text-sm text-cyan-300 mb-2">کد رهگیری</p>
                <div class="text-3xl font-mono font-bold text-white tracking-widest bg-black/30 p-4 rounded-xl">
                  {{ generateTrackingCode() }}
                </div>
                <p class="text-sm text-cyan-200/70 mt-3">
                  این کد را برای پیگیری‌های بعدی نگه دارید
                </p>
              </div>
            </div>

            <!-- Important notes -->
            <div class="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-400/30 rounded-2xl p-6">
              <div class="flex items-start">
                <div class="text-3xl">📋</div>
                <div>
                  <h4 class="text-xl font-bold text-white mb-4">نکات مهم بعد از ثبت‌نام</h4>
                  <ul class="space-y-3 text-cyan-100/80">
                    <li class="flex items-start">
                      <span class="text-green-400 ml-3 mt-1">•</span>
                      <span>فاکتور و رسید را میتوانید از بخش پایین دانلود کنید</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-400 ml-3 mt-1">•</span>
                      <span>حضور حداقل ۱ ساعت قبل از شروع مسابقه الزامی است</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-green-400 ml-3 mt-1">•</span>
                      <span>کد رهگیری بالا را همراه داشته باشید</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact info -->
          <div
            class="text-center p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-400/30">
            <h4 class="text-lg font-bold text-white mb-4 flex items-center justify-center">
              <span class="ml-2">📞</span>
              راه‌های ارتباطی
            </h4>
            <div class="flex flex-wrap justify-center gap-6">
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center ml-3">
                  <span class="text-lg">📱</span>
                </div>
                <div class="text-right">
                  <p class="text-sm text-cyan-200">پشتیبانی تلفنی</p>
                  <p class="font-bold text-white dir-ltr">09195486890</p>
                </div>
              </div>
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center ml-3">
                  <span class="text-lg">📍</span>
                </div>
                <div class="text-right">
                  <p class="text-sm text-cyan-200">آدرس استخر</p>
                  <p class="font-bold text-white">استخر شهید رئیسی، قزوین</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
        <button @click="downloadCertificate"
          class="group px-10 py-5 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-bold text-lg shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
          <span class="ml-3">📄</span>
          دانلود گواهی ثبت‌نام
          <span class="mr-3 text-xl transform group-hover:scale-110 transition-transform">⬇️</span>
        </button>

        <button @click="printSummary"
          class="group px-10 py-5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
          <span class="ml-3">🖨️</span>
          چاپ فاکتور و رسید
          <span class="mr-3 text-xl transform group-hover:scale-110 transition-transform">📋</span>
        </button>
      </div>

      <!-- Final message -->
      <div class="text-center mt-12 pt-8 border-t border-white/10">
        <p class="text-cyan-200/70 mb-2">با تشکر از اعتماد شما به مسابقات شنای استانی</p>
        <div class="flex items-center justify-center space-x-2 space-x-reverse">
          <span class="text-2xl">🏊‍♂️</span>
          <span class="text-lg font-bold text-white">موفق و پیروز باشید!</span>
          <span class="text-2xl">🏊‍♀️</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";

const router = useRouter();

// Load data from all available sources
const loadCompleteData = () => {
  try {
    // 1. از sessionStorage
    const raw = JSON.parse(sessionStorage.getItem("submission-response") || "{}");
    const reg = JSON.parse(sessionStorage.getItem("registration-step") || "{}");
    const personal = JSON.parse(sessionStorage.getItem("user-full") || "{}");
    const userBase = JSON.parse(sessionStorage.getItem("user-base") || "{}");

    // 2. از localStorage
    const storageKey = 'swim_registration_form';
    const localData = JSON.parse(localStorage.getItem(storageKey) || "{}");

    // 3. اطلاعات رشته‌های انتخابی از localStorage
    const selectedMajorsStorage = localStorage.getItem('selectedMajors');
    const selectedMajors = selectedMajorsStorage ? JSON.parse(selectedMajorsStorage) : [];

    // ادغام تمام اطلاعات
    const completeData = {
      // اولویت با sessionStorage
      ...raw,
      ...reg,
      ...personal,
      ...userBase,
      // سپس localStorage
      ...localData,
      // رشته‌های انتخابی
      majors: selectedMajors || personal.majors || reg.selectedMajors || [],
      // اطلاعات اضافی
      loadingTime: new Date().toISOString()
    };

    console.log('Complete data loaded:', completeData);
    return completeData;

  } catch (error) {
    console.error('Error loading complete data:', error);
    return {};
  }
};

// بارگذاری داده‌های کامل
const full = ref(loadCompleteData());

// همچنین می‌توانیم در mounted مجدداً بررسی کنیم
onMounted(() => {
  // یک بار دیگر داده‌ها را بررسی می‌کنیم
  full.value = loadCompleteData();

  // برای اطمینان، localStorage را نیز چک می‌کنیم
  console.log('LocalStorage data:', localStorage.getItem('swim_registration_form'));
  console.log('Selected majors from localStorage:', localStorage.getItem('selectedMajors'));
});

const competitionDate = computed(() => {
  return full.value.age < 12 ? '۴ دی ۱۴۰۴' : '۵ دی ۱۴۰۴';
});

// تابع بهبود یافته برای تولید کد رهگیری
function generateTrackingCode() {
  // ابتدا از sessionStorage چک می‌کنیم
  const sessionCode = sessionStorage.getItem('tracking-code');
  if (sessionCode) return sessionCode;

  // سپس از localStorage چک می‌کنیم
  const nationalCode = full.value?.nationalCode ||
    full.value.personal?.nationalCode ||
    full.value.registration?.nationalCode ||
    'UNKNOWN';

  const storedCode = localStorage.getItem('tracking-code-' + nationalCode);
  if (storedCode) {
    // در sessionStorage هم ذخیره می‌کنیم
    sessionStorage.setItem('tracking-code', storedCode);
    return storedCode;
  }

  // اگر کد وجود نداشت، ایجاد می‌کنیم
  let hash = 0;
  const inputString = nationalCode + Date.now().toString();
  for (let i = 0; i < inputString.length; i++) {
    hash = (hash << 5) - hash + inputString.charCodeAt(i);
    hash |= 0;
  }

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let code = 'SWIM-';
  for (let i = 0; i < 8; i++) {
    code += chars[Math.abs((hash >> (i * 4)) % chars.length)];
  }

  // ذخیره در هر دو محل
  localStorage.setItem('tracking-code-' + nationalCode, code);
  sessionStorage.setItem('tracking-code', code);

  return code;
}

const trackingCode = ref(generateTrackingCode());

// تابع بهبود یافته برای نام رشته
function getMajorName(major) {
  const majors = {
    parvane: "پروانه",
    sine: "سینه",
    posht: "پشت",
    ghorbaqe: "غورباغه",
    all: "همه رشته‌ها",
    freestyle: "آزاد",
    backstroke: "پشت",
    breaststroke: "سینه",
    butterfly: "پروانه"
  };

  // اگر رشته از آرایه باشد
  if (Array.isArray(major)) {
    return major.map(m => majors[m] || m).join('، ');
  }

  // اگر رشته مستقیم باشد
  return majors[major] || major || full.value.majorTitle || full.value.registration?.majorTitle || '---';
}

// تابع برای دریافت نام رشته‌های انتخابی
function getSelectedMajors() {
  // اولویت‌ها برای پیدا کردن رشته‌های انتخابی
  if (full.value.majors && full.value.majors.length > 0) {
    return getMajorName(full.value.majors);
  }

  if (full.value.registration?.majors) {
    return getMajorName(full.value.registration.majors);
  }

  if (full.value.personal?.major) {
    return getMajorName(full.value.personal.major);
  }

  if (full.value.selectedMajors) {
    return getMajorName(full.value.selectedMajors);
  }

  return '---';
}

// تابع برای دریافت نام کامل
function getFullName() {
  const name = full.value.name ||
    full.value.personal?.name ||
    full.value.registration?.name ||
    '---';

  const fatherName = full.value.fatherName ||
    full.value.personal?.fatherName ||
    full.value.registration?.fatherName ||
    '';

  if (fatherName) {
    return `${name} ${fatherName}`;
  }

  return name;
}

// تابع برای دریافت کد ملی
function getNationalCode() {
  return full.value.nationalCode ||
    full.value.personal?.nationalCode ||
    full.value.registration?.nationalCode ||
    '---';
}

// تابع برای دریافت نام مسابقه
function getRaceName() {
  return full.value.raceName ||
    full.value.registration?.raceName ||
    full.value.personal?.raceName ||
    'مسابقات استانی شنا';
}

// تابع برای دریافت رده سنی
function getCategoryLabel() {
  return full.value.categoryLabel ||
    full.value.registration?.categoryLabel ||
    full.value.personal?.categoryLabel ||
    (full.value.age ? `رده سنی ${full.value.age} سال` : '---');
}

// تابع برای دریافت زمان دوره
function getPeriodTime() {
  return full.value.periodTime ||
    full.value.registration?.periodTime ||
    full.value.personal?.periodTime ||
    competitionDate.value;
}

// تابع برای دریافت هزینه
function getFee() {
  const fee = full.value.fee ||
    full.value.registrationFee ||
    full.value.registration?.fee ||
    full.value.personal?.registrationFee ||
    0;

  return fee ? fee.toLocaleString('fa-IR') + ' تومان' : 'رایگان';
}

// تابع برای دریافت تاریخ و زمان ثبت‌نام
function getRegistrationDateTime() {
  if (full.value.personal?.registrationDate && full.value.personal?.registrationTime) {
    return `${full.value.personal.registrationDate} - ${full.value.personal.registrationTime}`;
  }

  // اگر در sessionStorage نبود، از localStorage چک می‌کنیم
  const savedData = JSON.parse(localStorage.getItem('swim_registration_form') || "{}");
  if (savedData.savedAt) {
    const date = new Date(savedData.savedAt);
    return `${date.toLocaleDateString('fa-IR')} - ${date.toLocaleTimeString('fa-IR')}`;
  }

  // در نهایت تاریخ جاری
  return new Date().toLocaleDateString('fa-IR') + ' - ' + new Date().toLocaleTimeString('fa-IR');
}

// تابع بهبود یافته برای دانلود گواهی
function downloadCertificate() {
  // ایجاد HTML گواهی با اطلاعات کامل
  const certificateHTML = `
    <!DOCTYPE html>
    <html dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>گواهی ثبت‌نام مسابقات شنا</title>
      <style>
        @page { size: A4 landscape; margin: 0; }
        body {
          font-family: 'B Nazanin', 'Iranian Sans', Tahoma, sans-serif;
          margin: 0;
          padding: 40px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .certificate {
          width: 100%;
          max-width: 1000px;
          background: white;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          position: relative;
          overflow: hidden;
        }
        .watermark {
          position: absolute;
          font-size: 300px;
          opacity: 0.05;
          color: #0066cc;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
        }
        .content {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .header {
          margin-bottom: 40px;
        }
        .header h1 {
          color: #0066cc;
          font-size: 36px;
          margin-bottom: 10px;
        }
        .header h2 {
          color: #00cfff;
          font-size: 24px;
        }
        .user-info {
          margin: 30px 0;
          padding: 30px;
          background: #f8f9fa;
          border-radius: 15px;
          text-align: right;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          padding-bottom: 15px;
          border-bottom: 1px dashed #ddd;
        }
        .info-row:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
        .label {
          color: #666;
          font-weight: bold;
        }
        .value {
          color: #333;
          font-size: 18px;
        }
        .footer {
          margin-top: 40px;
          padding-top: 30px;
          border-top: 2px solid #00cfff;
          display: flex;
          justify-content: space-between;
        }
        .signature {
          text-align: center;
        }
        .signature-line {
          width: 200px;
          border-top: 1px solid #333;
          margin: 20px auto 10px;
        }
        .tracking-code {
          background: linear-gradient(90deg, #00cfff, #0066ff);
          color: white;
          padding: 15px 30px;
          border-radius: 10px;
          font-size: 24px;
          font-weight: bold;
          letter-spacing: 2px;
          margin: 30px auto;
          display: inline-block;
        }
        .logo {
          font-size: 48px;
          margin-bottom: 20px;
        }
        @media print {
          body { background: white; }
          .certificate { box-shadow: none; }
        }
      </style>
    </head>
    <body>
      <div class="certificate">
        <div class="watermark">🏊</div>
        <div class="content">
          <div class="logo">🏆</div>
          <div class="header">
            <h1>گواهی ثبت‌نام در مسابقات استانی شنا</h1>
            <h2>دی‌ماه ۱۴۰۴ - استخر شهید رئیسی</h2>
          </div>

          <div class="tracking-code">
            ${trackingCode.value}
          </div>

          <div class="user-info">
            <div class="info-row">
              <span class="label">نام و نام خانوادگی:</span>
              <span class="value">${getFullName()}</span>
            </div>
            <div class="info-row">
              <span class="label">کد ملی:</span>
              <span class="value">${getNationalCode()}</span>
            </div>
            <div class="info-row">
              <span class="label">رشته انتخابی:</span>
              <span class="value">${getSelectedMajors()}</span>
            </div>
            <div class="info-row">
              <span class="label">مسابقه:</span>
              <span class="value">${getRaceName()}</span>
            </div>
            <div class="info-row">
              <span class="label">رده سنی:</span>
              <span class="value">${getCategoryLabel()}</span>
            </div>
            <div class="info-row">
              <span class="label">تاریخ و زمان مسابقه:</span>
              <span class="value">${getPeriodTime()}</span>
            </div>
            <div class="info-row">
              <span class="label">هزینه:</span>
              <span class="value">${getFee()}</span>
            </div>
            <div class="info-row">
              <span class="label">نام مدرسه:</span>
              <span class="value">${full.value.schoolName || full.value.personal?.schoolName || '---'}</span>
            </div>
            <div class="info-row">
              <span class="label">مربی:</span>
              <span class="value">${full.value.coachName || full.value.personal?.coachName || '---'}</span>
            </div>
            <div class="info-row">
              <span class="label">سال تولد:</span>
              <span class="value">${full.value.birthYear || full.value.personal?.birthYear || '---'}</span>
            </div>
            <div class="info-row">
              <span class="label">تاریخ ثبت‌نام:</span>
              <span class="value">${getRegistrationDateTime()}</span>
            </div>
          </div>

          <div class="footer">
            <div class="signature">
              <p>مهر و امضای مسئول ثبت‌نام</p>
              <div class="signature-line"></div>
              <p>مسابقات استانی شنا</p>
            </div>
            <div class="signature">
              <p>تأییدیه کمیته برگزاری</p>
              <div class="signature-line"></div>
              <p>فدراسیون شنا</p>
            </div>
          </div>

          <div style="margin-top: 30px; color: #666; font-size: 14px; text-align: center;">
            <p>این سند به منزله تأیید ثبت‌نام رسمی در مسابقات می‌باشد.</p>
            <p>لطفاً کارت شناسایی و این گواهی را در روز مسابقه همراه داشته باشید.</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;

  const blob = new Blob([certificateHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `گواهی_ثبت_نام_${getFullName().replace(/\s+/g, '_')}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// تابع بهبود یافته برای چاپ خلاصه
function printSummary() {
  const printWindow = window.open('', '_blank');

  const printHTML = `
    <!DOCTYPE html>
    <html dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>فاکتور ثبت‌نام مسابقات شنا</title>
      <style>
        @page { size: A4; margin: 20mm; }
        body {
          font-family: 'B Nazanin', 'Iranian Sans', Tahoma, sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .invoice-header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 3px solid #00cfff;
        }
        .invoice-header h1 {
          color: #0066cc;
          margin: 0;
          font-size: 28px;
        }
        .invoice-header h2 {
          color: #00cfff;
          margin: 10px 0;
          font-size: 20px;
        }
        .invoice-details {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        .section {
          margin-bottom: 25px;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
        }
        .section h3 {
          color: #0066cc;
          margin-top: 0;
          padding-bottom: 10px;
          border-bottom: 2px solid #00cfff;
        }
        .info-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 15px;
        }
        .info-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px dashed #eee;
        }
        .info-item:last-child {
          border-bottom: none;
        }
        .label {
          color: #666;
          font-weight: bold;
        }
        .value {
          color: #333;
          text-align: left;
        }
        .tracking {
          background: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
          margin: 20px 0;
        }
        .tracking-code {
          font-family: monospace;
          font-size: 22px;
          font-weight: bold;
          color: #0066cc;
          letter-spacing: 2px;
          margin: 10px 0;
        }
        .total {
          background: linear-gradient(90deg, #00cfff, #0066ff);
          color: white;
          padding: 20px;
          border-radius: 10px;
          text-align: center;
          margin: 30px 0;
        }
        .total-amount {
          font-size: 28px;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid #ddd;
          color: #666;
          font-size: 14px;
        }
        .logo {
          font-size: 40px;
          margin-bottom: 10px;
        }
        @media print {
          body { padding: 0; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <div class="invoice-header">
        <div class="logo">🏊</div>
        <h1>فاکتور ثبت‌نام مسابقات استانی شنا</h1>
        <h2>دی‌ماه ۱۴۰۴ - استخر شهید رئیسی</h2>
        <p>تاریخ صدور: ${getRegistrationDateTime()}</p>
      </div>

      <div class="tracking">
        <p><strong>کد رهگیری:</strong></p>
        <div class="tracking-code">${trackingCode.value}</div>
        <p style="color: #666; font-size: 14px;">این کد را برای پیگیری‌های بعدی نگه دارید</p>
      </div>

      <div class="invoice-details">
        <div style="flex: 1;">
          <p><strong>ثبت‌نام کننده:</strong> ${getFullName()}</p>
          <p><strong>کد ملی:</strong> ${getNationalCode()}</p>
          <p><strong>تلفن:</strong> ${full.value.phone || full.value.personal?.phone || '---'}</p>
        </div>
        <div style="flex: 1; text-align: left;">
          <p><strong>شماره فاکتور:</strong> ${Date.now().toString().slice(-8)}</p>
          <p><strong>تاریخ مسابقه:</strong> ${getPeriodTime()}</p>
          <p><strong>مدرسه:</strong> ${full.value.schoolName || full.value.personal?.schoolName || '---'}</p>
        </div>
      </div>

      <div class="section">
        <h3>📋 جزئیات مسابقه</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">نام مسابقه:</span>
            <span class="value">${getRaceName()}</span>
          </div>
          <div class="info-item">
            <span class="label">رشته انتخابی:</span>
            <span class="value">${getSelectedMajors()}</span>
          </div>
          <div class="info-item">
            <span class="label">رده سنی:</span>
            <span class="value">${getCategoryLabel()}</span>
          </div>
          <div class="info-item">
            <span class="label">زمان برگزاری:</span>
            <span class="value">${getPeriodTime()}</span>
          </div>
          <div class="info-item">
            <span class="label">مکان:</span>
            <span class="value">استخر شهید رئیسی، تهران</span>
          </div>
          <div class="info-item">
            <span class="label">مربی:</span>
            <span class="value">${full.value.coachName || full.value.personal?.coachName || '---'}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h3>💰 جزئیات مالی</h3>
        <div class="info-grid">
          <div class="info-item">
            <span class="label">هزینه ثبت‌نام:</span>
            <span class="value">${getFee()}</span>
          </div>
          <div class="info-item">
            <span class="label">تخفیف:</span>
            <span class="value">۰ تومان</span>
          </div>
          <div class="info-item">
            <span class="label">مالیات:</span>
            <span class="value">۰ تومان</span>
          </div>
        </div>
      </div>

      <div class="total">
        <p>مبلغ قابل پرداخت</p>
        <div class="total-amount">
          ${getFee()}
        </div>
      </div>

      <div class="section">
        <h3>📋 شرایط و ضوابط</h3>
        <ul style="color: #666; padding-right: 20px;">
          <li>حضور حداقل ۱ ساعت قبل از شروع مسابقه الزامی است</li>
          <li>کارت شناسایی اصل در روز مسابقه همراه داشته باشید</li>
          <li>مدارک بیمه ورزشی باید معتبر باشد</li>
          <li>این فاکتور به همراه کد رهگیری معتبر می‌باشد</li>
          <li>گواهی ثبت‌نام را دانلود و یا پرینت نمایید</li>
        </ul>
      </div>

      <div class="footer">
        <p><strong>آدرس:</strong> قزوین، استخر شهید رئیسی</p>
        <p>با تشکر از ثبت‌نام شما در مسابقات استانی شنا</p>
        <p style="margin-top: 20px; font-size: 12px;">این فاکتور به صورت خودکار تولید شده و نیاز به مهر و امضا ندارد</p>
      </div>

      <div class="no-print" style="text-align: center; margin-top: 30px;">
        <button onclick="window.print()" style="padding: 10px 20px; background: #0066cc; color: white; border: none; border-radius: 5px; cursor: pointer;">
          🖨️ چاپ فاکتور
        </button>
      </div>
    </body>
    </html>
  `;

  printWindow.document.write(printHTML);
  printWindow.document.close();
  printWindow.focus();

  // Auto print after load
  printWindow.onload = function () {
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };
}

// تابع برای شروع مجدد ثبت‌نام
function again() {
  // Clear all session data
  sessionStorage.removeItem("user-base");
  sessionStorage.removeItem("user-full");
  sessionStorage.removeItem("registration-step");
  sessionStorage.removeItem("uploads");
  sessionStorage.removeItem("submission-response");
  sessionStorage.removeItem("registration-complete");
  sessionStorage.removeItem("tracking-code");

  // Clear registration form data from localStorage
  localStorage.removeItem('swim_registration_form');
  localStorage.removeItem('selectedMajors');

  router.push("/");
}
</script>

<style>
/* Custom animations */
@keyframes confetti {
  0% {
    transform: translateY(-100px) rotate(0deg);
    opacity: 1;
  }

  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes float-slow {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 0.2;
  }

  50% {
    opacity: 0.3;
  }

  100% {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

@keyframes ray-glow {

  0%,
  100% {
    opacity: 0.1;
  }

  50% {
    opacity: 0.3;
  }
}

@keyframes bounce-slow {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

@keyframes pulse-slow {

  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }

  50% {
    transform: scale(1.05);
    opacity: 0.5;
  }
}

@keyframes orbit {
  from {
    transform: rotate(0deg) translateY(-120px) rotate(0deg);
  }

  to {
    transform: rotate(360deg) translateY(-120px) rotate(-360deg);
  }
}

.animate-confetti {
  animation: confetti linear forwards;
}

.animate-float-slow {
  animation: float-slow linear infinite;
}

.animate-bounce-slow {
  animation: bounce-slow 2s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 3s ease-in-out infinite;
}

/* RTL support for numbers */
.dir-ltr {
  direction: ltr;
  display: inline-block;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .contact-info {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
