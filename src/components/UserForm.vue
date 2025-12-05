<template>
  <div class="min-h-screen flex items-center justify-center p-4 md:p-6 overflow-hidden relative">
    <!-- Background water effect -->
    <div class="absolute inset-0 overflow-hidden bg-gradient-to-br from-cyan-900 via-blue-900 to-sky-900">
      <!-- Water waves -->
      <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cyan-500/20 to-transparent"></div>
      <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/5 to-transparent"></div>

      <!-- Pool lane lines -->
      <div class="absolute top-1/4 left-0 right-0 space-y-12 opacity-20">
        <div v-for="i in 8" :key="i" class="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      <!-- Floating bubbles -->
      <div v-for="i in 15" :key="'bubble-' + i" :class="`absolute rounded-full bg-cyan-300/10 animate-float`" :style="`
          width: ${Math.random() * 30 + 10}px;
          height: ${Math.random() * 30 + 10}px;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation-delay: ${Math.random() * 3}s;
          animation-duration: ${Math.random() * 15 + 15}s;
        `">
      </div>
    </div>

    <!-- Main form -->
    <div class="relative z-10 w-full max-w-2xl mx-auto">
      <!-- Form header -->
      <div class="text-center mb-8 md:mb-12">
        <div class="inline-flex items-center justify-center mb-6">
          <div class="relative">
            <div
              class="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg mr-4">
              <span class="text-3xl">🏊</span>
            </div>
            <div class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-cyan-300/60"></div>
          </div>
          <h1
            class="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            فرم اطلاعات شناگر
          </h1>
        </div>
        <p class="text-cyan-100/80 text-lg">لطفا اطلاعات صحیح و کامل شناگر را وارد نمایید</p>
      </div>

      <!-- Form card -->
      <div
        class="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-2xl border border-white/20 relative overflow-hidden">
        <!-- Decorative water waves -->
        <div class="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>
        <div class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>

        <!-- Form grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <!-- Column 1 -->
          <div class="space-y-6">
            <!-- نام و نام خانوادگی -->
            <div class="group">
              <label
                class="block mb-2 text-sm font-semibold text-cyan-100 group-focus-within:text-cyan-300 transition-colors">
                <div class="flex items-center mb-1">
                  <span class="ml-2 text-lg">👤</span>
                  نام و نام خانوادگی شناگر
                </div>
              </label>
              <input v-model="local.name" type="text" placeholder="مثال: علی رضایی" @input="validateName"
                class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-cyan-100/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300">
              <div v-if="nameError" class="mt-1 text-red-300 text-sm flex items-center">
                <span class="ml-1">⚠️</span>
                {{ nameError }}
              </div>
            </div>

            <!-- کد ملی -->
            <div class="group">
              <label
                class="block mb-2 text-sm font-semibold text-cyan-100 group-focus-within:text-cyan-300 transition-colors">
                <div class="flex items-center mb-1">
                  <span class="ml-2 text-lg">🆔</span>
                  کد ملی
                </div>
              </label>
              <input v-model="local.nationalCode" type="text" placeholder="۱۰ رقم - مثال: ۱۲۳۴۵۶۷۸۹۰" maxlength="10"
                @input="validateNationalCode"
                class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-cyan-100/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 text-left dir-ltr">
              <div v-if="nationalCodeError" class="mt-1 text-red-300 text-sm flex items-center">
                <span class="ml-1">⚠️</span>
                {{ nationalCodeError }}
              </div>
            </div>

            <!-- نام مربی شنا -->
            <div class="group">
              <label
                class="block mb-2 text-sm font-semibold text-cyan-100 group-focus-within:text-cyan-300 transition-colors">
                <div class="flex items-center mb-1">
                  <span class="ml-2 text-lg">👨‍🏫</span>
                  نام مربی شنا
                </div>
              </label>
              <input v-model="local.coachName" type="text" placeholder="نام مربی رسمی" @input="validateCoachName"
                class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-cyan-100/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300">
              <div v-if="coachNameError" class="mt-1 text-red-300 text-sm flex items-center">
                <span class="ml-1">⚠️</span>
                {{ coachNameError }}
              </div>
            </div>

            <!-- شماره تماس -->
            <div class="group">
              <label
                class="block mb-2 text-sm font-semibold text-cyan-100 group-focus-within:text-cyan-300 transition-colors">
                <div class="flex items-center mb-1">
                  <span class="ml-2 text-lg">📱</span>
                  شماره تماس اولیاء
                </div>
              </label>
              <input v-model="local.phone" type="tel" placeholder="۰۹۱۲۳۴۵۶۷۸۹" maxlength="11" @input="validatePhone"
                class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-cyan-100/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 text-left dir-ltr">
              <div v-if="phoneError" class="mt-1 text-red-300 text-sm flex items-center">
                <span class="ml-1">⚠️</span>
                {{ phoneError }}
              </div>
            </div>
          </div>

          <!-- Column 2 -->
          <div class="space-y-6">
            <!-- نام پدر -->
            <div class="group">
              <label
                class="block mb-2 text-sm font-semibold text-cyan-100 group-focus-within:text-cyan-300 transition-colors">
                <div class="flex items-center mb-1">
                  <span class="ml-2 text-lg">👨</span>
                  نام پدر
                </div>
              </label>
              <input v-model="local.fatherName" type="text" placeholder="مثال: محمد رضایی" @input="validateFatherName"
                class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-cyan-100/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300">
              <div v-if="fatherNameError" class="mt-1 text-red-300 text-sm flex items-center">
                <span class="ml-1">⚠️</span>
                {{ fatherNameError }}
              </div>
            </div>

            <!-- نام مدرسه -->
            <div class="group">
              <label
                class="block mb-2 text-sm font-semibold text-cyan-100 group-focus-within:text-cyan-300 transition-colors">
                <div class="flex items-center mb-1">
                  <span class="ml-2 text-lg">🏫</span>
                  نام مدرسه
                </div>
              </label>
              <input v-model="local.schoolName" type="text" placeholder="نام مدرسه شناگر" @input="validateSchoolName"
                class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-cyan-100/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300">
              <div v-if="schoolNameError" class="mt-1 text-red-300 text-sm flex items-center">
                <span class="ml-1">⚠️</span>
                {{ schoolNameError }}
              </div>
            </div>

            <!-- سال تولد -->
            <div class="group">
              <label
                class="block mb-2 text-sm font-semibold text-cyan-100 group-focus-within:text-cyan-300 transition-colors">
                <div class="flex items-center mb-1">
                  <span class="ml-2 text-lg">🎂</span>
                  سال تولد فرزند
                </div>
              </label>
              <div class="relative">
                <input v-model="local.birthYear" type="number" placeholder="مثال: ۱۳۹۵" min="1370" max="1404"
                  @input="validateBirthYear"
                  class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-cyan-100/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all duration-300 text-left dir-ltr">
                <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-200/60">
                  <span class="text-sm">۱۳</span>
                </div>
              </div>
              <div v-if="birthYearError" class="mt-1 text-red-300 text-sm flex items-center">
                <span class="ml-1">⚠️</span>
                {{ birthYearError }}
              </div>
              <div v-if="age && !birthYearError" class="mt-2 text-sm text-cyan-300">
                سن شناگر: <span class="font-bold">{{ age }}</span> سال
              </div>
            </div>

            <!-- نمایش رده سنی -->
            <div class="mt-8 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30">
              <div class="flex items-center justify-between">
                <div>
                  <h4 class="font-bold text-white mb-1">رده سنی تشخیص داده شده:</h4>
                  <div v-if="age" class="text-lg">
                    <span :class="ageCategory.class" class="font-black px-3 py-1 rounded-lg">
                      {{ ageCategory.text }}
                    </span>
                  </div>
                  <div v-else class="text-cyan-200">
                    پس از وارد کردن سال تولد نمایش داده می‌شود
                  </div>
                </div>
                <span class="text-3xl">🏆</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Error message -->
        <div v-if="generalError" class="mt-8 p-4 bg-red-500/20 border border-red-400/30 rounded-xl">
          <div class="flex items-center text-red-300">
            <span class="ml-2 text-xl">⛔</span>
            <p>{{ generalError }}</p>
          </div>
        </div>

        <!-- Action buttons -->
        <div class="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <button @click="back"
            class="group px-8 py-3 rounded-xl border-2 border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center w-full sm:w-auto">
            <span class="ml-2 transform group-hover:-translate-x-1 transition-transform">←</span>
            بازگشت به صفحه اصلی
          </button>

          <button @click="next" :disabled="isFormInvalid" :class="[
            'group px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg transition-all duration-500 flex items-center justify-center w-full sm:w-auto',
            isFormInvalid ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-cyan-500/30 hover:-translate-y-1'
          ]">
            ادامه به مرحله بعد
            <span class="mr-3 text-xl transform group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

        <!-- Form steps indicator -->
        <div class="mt-8 flex justify-center">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-2 rounded-full bg-cyan-500"></div>
            <div class="w-6 h-2 rounded-full bg-white/30"></div>
            <div class="w-6 h-2 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const local = reactive({
  name: "",
  fatherName: "",
  nationalCode: "",
  schoolName: "",
  coachName: "",
  birthYear: "",
  phone: ""
});

const errors = reactive({
  name: "",
  fatherName: "",
  nationalCode: "",
  schoolName: "",
  coachName: "",
  birthYear: "",
  phone: ""
});

const generalError = ref("");

// Computed properties
const age = computed(() => {
  if (!local.birthYear || isNaN(local.birthYear)) return null;
  const currentYear = 1404; // سال جاری شمسی
  const birthYear = parseInt(local.birthYear);
  return currentYear - birthYear;
});

const ageCategory = computed(() => {
  if (!age.value) return { text: "", class: "" };
  if (age.value < 12) {
    return {
      text: "زیر ۱۲ سال",
      class: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white"
    };
  } else {
    return {
      text: "بالای ۱۲ سال",
      class: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
    };
  }
});

const isFormInvalid = computed(() => {
  return Object.values(errors).some(error => error !== "") ||
    Object.values(local).some(value => !String(value).trim())
});

// Validation functions
function validateName() {
  const nameRegex = /^[\u0600-\u06FF\s]{2,50}$/;
  if (!local.name.trim()) {
    errors.name = "نام و نام خانوادگی الزامی است";
  } else if (!nameRegex.test(local.name)) {
    errors.name = "نام باید حاوی حروف فارسی باشد (حداقل ۲ حرف)";
  } else {
    errors.name = "";
  }
}

function validateFatherName() {
  const nameRegex = /^[\u0600-\u06FF\s]{2,50}$/;
  if (!local.fatherName.trim()) {
    errors.fatherName = "نام پدر الزامی است";
  } else if (!nameRegex.test(local.fatherName)) {
    errors.fatherName = "نام پدر باید حاوی حروف فارسی باشد";
  } else {
    errors.fatherName = "";
  }
}

function validateNationalCode() {
  const code = local.nationalCode.trim();
  const nationalCodeRegex = /^\d{10}$/;

  if (!code) {
    errors.nationalCode = " الزامی است";
  } else if (!nationalCodeRegex.test(code)) {
    errors.nationalCode = "کد ملی باید ۱۰ رقم باشد";
  } else {
    // اعتبارسنجی الگوریتم کد ملی
    const sum = code.split('').slice(0, 9).reduce((acc, digit, index) =>
      acc + (parseInt(digit) * (10 - index)), 0);
    const remainder = sum % 11;
    const controlDigit = parseInt(code[9]);
    const isValid = (remainder < 2 && controlDigit === remainder) ||
      (remainder >= 2 && controlDigit === (11 - remainder));

    if (!isValid) {
      errors.nationalCode = "کد ملی معتبر نیست";
    } else {
      errors.nationalCode = "";
    }
  }
}

function validateSchoolName() {
  if (!local.schoolName.trim()) {
    errors.schoolName = "نام مدرسه الزامی است";
  } else if (local.schoolName.trim().length < 2) {
    errors.schoolName = "نام مدرسه باید حداقل ۲ حرف باشد";
  } else {
    errors.schoolName = "";
  }
}

function validateCoachName() {
  const nameRegex = /^[\u0600-\u06FF\s]{2,50}$/;
  if (!local.coachName.trim()) {
    errors.coachName = "نام مربی الزامی است";
  } else if (!nameRegex.test(local.coachName)) {
    errors.coachName = "نام مربی باید حاوی حروف فارسی باشد";
  } else {
    errors.coachName = "";
  }
}

function validateBirthYear() {
  const year = parseInt(local.birthYear);
  const currentYear = 1404;

  if (!local.birthYear) {
    errors.birthYear = "سال تولد الزامی است";
  } else if (isNaN(year)) {
    errors.birthYear = "سال تولد باید عدد باشد";
  } else if (year < 1370 || year > currentYear) {
    errors.birthYear = `سال تولد باید بین ۱۳۷۰ تا ${currentYear} باشد`;
  } else if (currentYear - year < 5) {
    errors.birthYear = "حداقل سن شرکت ۵ سال است";
  } else {
    errors.birthYear = "";
  }
}

function validatePhone() {
  const phoneRegex = /^09\d{9}$/;
  const cleanedPhone = local.phone.replace(/[^\d]/g, '');

  if (!cleanedPhone) {
    errors.phone = "شماره تماس الزامی است";
  } else if (!phoneRegex.test(cleanedPhone)) {
    errors.phone = "شماره موبایل معتبر نیست (با ۰۹ شروع شود)";
  } else {
    errors.phone = "";
  }
}

// Watch for changes and validate
watch(() => local.name, validateName);
watch(() => local.fatherName, validateFatherName);
watch(() => local.nationalCode, validateNationalCode);
watch(() => local.schoolName, validateSchoolName);
watch(() => local.coachName, validateCoachName);
watch(() => local.birthYear, validateBirthYear);
watch(() => local.phone, validatePhone);

function next() {
  // Validate all fields
  validateName();
  validateFatherName();
  validateNationalCode();
  validateSchoolName();
  validateCoachName();
  validateBirthYear();
  validatePhone();

  // Check if there are any errors
  const hasErrors = Object.values(errors).some(error => error !== "");
  const hasEmptyFields = Object.values(local).some(value => !String(value).trim())


  if (hasErrors || hasEmptyFields) {
    generalError.value = "لطفاً تمام فیلدها را به درستی تکمیل نمایید";
    return;
  }

  // Save to sessionStorage
  sessionStorage.setItem("user-base", JSON.stringify(local));
  router.push("/age");
}

function back() {
  router.push("/");
}
</script>

<style>
/* Custom animations for water effects */
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

/* Input number arrows hide */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

/* RTL support for number inputs */
.dir-ltr {
  direction: ltr;
  text-align: right;
}
</style>
