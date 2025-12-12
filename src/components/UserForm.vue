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
        <!-- Form grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          <!-- 1. نام و نام خانوادگی -->
          <div class="group">
            <label
              class="block mb-2 text-sm font-semibold text-cyan-100 group-focus-within:text-cyan-300 transition-colors">
              <div class="flex items-center mb-1">
                <span class="ml-2 text-lg">👤</span>
                نام و نام خانوادگی شناگر
                <span class="text-red-400 mr-1">*</span>
              </div>
            </label>
            <input v-model="local.name" type="text" placeholder="مثال: علی رضایی" @input="validateName"
              @blur="validateName" :class="[
                'w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-cyan-100/50 transition-all duration-300 focus:outline-none focus:ring-2',
                errors.name
                  ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400/30'
                  : local.name && !errors.name
                    ? 'border-green-400/70 focus:border-green-400 focus:ring-green-400/30'
                    : 'border-white/20 focus:border-cyan-400 focus:ring-cyan-400/30'
              ]">

            <div v-if="errors.name" class="mt-1 text-red-300 text-sm flex items-center animate-shake">
              <span class="ml-1">⚠️</span>{{ errors.name }}
            </div>
            <div v-else-if="local.name && !errors.name" class="mt-1 text-green-300 text-sm flex items-center">
              <span class="ml-1">✅</span> نام وارد شده معتبر است
            </div>
          </div>

          <!-- 2. کد ملی -->
          <div class="group">
            <label class="block mb-2 text-sm font-semibold text-cyan-100">
              <div class="flex items-center mb-1">
                <span class="ml-2 text-lg">🆔</span>
                کد ملی
                <span class="text-red-400 mr-1">*</span>
              </div>
            </label>

            <input v-model="local.nationalCode" type="text" maxlength="10" placeholder=" رقم10 - مثال:  1234567890"
              @input="validateNationalCode" @blur="validateNationalCode" :class="[
                'w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl dir-ltr text-white text-left placeholder-cyan-100/50 transition-all duration-300 focus:outline-none focus:ring-2',
                errors.nationalCode
                  ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400/30'
                  : local.nationalCode && !errors.nationalCode
                    ? 'border-green-400/70 focus:border-green-400 focus:ring-green-400/30'
                    : 'border-white/20 focus:border-cyan-400 focus:ring-cyan-400/30'
              ]">

            <div v-if="errors.nationalCode" class="mt-1 text-red-300 text-sm flex items-center animate-shake">
              <span class="ml-1">⚠️</span>{{ errors.nationalCode }}
            </div>
            <div v-else-if="local.nationalCode && !errors.nationalCode"
              class="mt-1 text-green-300 text-sm flex items-center">
              <span class="ml-1">✅</span> کد ملی معتبر است
            </div>
          </div>

          <!-- 3. نام پدر -->
          <div class="group">
            <label class="block mb-2 text-sm font-semibold text-cyan-100">
              <div class="flex items-center mb-1">
                <span class="ml-2 text-lg">👨</span>
                نام پدر
                <span class="text-red-400 mr-1">*</span>
              </div>
            </label>
            <input v-model="local.fatherName" type="text" placeholder="مثال: محمد" @input="validateFatherName"
              @blur="validateFatherName" :class="[
                'w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-cyan-100/50 transition-all duration-300 focus:outline-none focus:ring-2',
                errors.fatherName
                  ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400/30'
                  : local.fatherName && !errors.fatherName
                    ? 'border-green-400/70 focus:border-green-400 focus:ring-green-400/30'
                    : 'border-white/20 focus:border-cyan-400 focus:ring-cyan-400/30'
              ]">
            <div v-if="errors.fatherName" class="mt-1 text-red-300 text-sm flex items-center animate-shake">
              <span class="ml-1">⚠️</span>{{ errors.fatherName }}
            </div>
            <div v-else-if="local.fatherName && !errors.fatherName"
              class="mt-1 text-green-300 text-sm flex items-center">
              <span class="ml-1">✅</span> نام پدر معتبر است
            </div>
          </div>

          <!-- 4. نام مدرسه تحصیلی -->
          <div class="group">
            <label class="block mb-2 text-sm font-semibold text-cyan-100">
              <div class="flex items-center mb-1">
                <span class="ml-2 text-lg">🏫</span>
                نام مدرسه درحال تحصیل
                <span class="text-red-400 mr-1">*</span>
              </div>
            </label>

            <input v-model="local.schoolName" type="text" placeholder="نام مدرسه تحصیلی" @input="validateSchoolName"
              @blur="validateSchoolName" :class="[
                'w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-cyan-100/50 transition-all duration-300 focus:outline-none focus:ring-2',
                errors.schoolName
                  ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400/30'
                  : local.schoolName && !errors.schoolName
                    ? 'border-green-400/70 focus:border-green-400 focus:ring-green-400/30'
                    : 'border-white/20 focus:border-cyan-400 focus:ring-cyan-400/30'
              ]">

            <div v-if="errors.schoolName" class="mt-1 text-red-300 text-sm flex items-center animate-shake">
              <span class="ml-1">⚠️</span>{{ errors.schoolName }}
            </div>
            <div v-else-if="local.schoolName && !errors.schoolName"
              class="mt-1 text-green-300 text-sm flex items-center">
              <span class="ml-1">✅</span> نام مدرسه معتبر است
            </div>
          </div>

          <!-- 5. نام مربی شنا -->
          <div class="group">
            <label class="block mb-2 text-sm font-semibold text-cyan-100">
              <div class="flex items-center mb-1">
                <span class="ml-2 text-lg">👨‍🏫</span>
                نام مربی شنا
                <span class="text-red-400 mr-1">*</span>
              </div>
            </label>

            <input v-model="local.coachName" type="text" placeholder="نام مربی رسمی" @input="validateCoachName"
              @blur="validateCoachName" :class="[
                'w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-white placeholder-cyan-100/50 transition-all duration-300 focus:outline-none focus:ring-2',
                errors.coachName
                  ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400/30'
                  : local.coachName && !errors.coachName
                    ? 'border-green-400/70 focus:border-green-400 focus:ring-green-400/30'
                    : 'border-white/20 focus:border-cyan-400 focus:ring-cyan-400/30'
              ]">

            <div v-if="errors.coachName" class="mt-1 text-red-300 text-sm flex items-center animate-shake">
              <span class="ml-1">⚠️</span>{{ errors.coachName }}
            </div>
            <div v-else-if="local.coachName && !errors.coachName" class="mt-1 text-green-300 text-sm flex items-center">
              <span class="ml-1">✅</span> نام مربی معتبر است
            </div>
          </div>

          <!-- 6. نام باشگاه شنا -->
          <div class="group">
            <label class="block mb-2 text-sm font-semibold text-cyan-100">
              <div class="flex items-center mb-1">
                <span class="ml-2 text-lg">🏊</span>
                نام مدرسه شنا
                <span class="text-gray-400 mr-1 text-xs">(اختیاری)</span>
              </div>
            </label>

            <input v-model="local.swimSchoolName" type="text" placeholder="در صورت وجود (اختیاری)"
              class="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-cyan-100/50 transition-all duration-300 mb-6">
          </div>

          <!-- 7. شماره تماس -->
          <div class="group">
            <label class="block mb-2 text-sm font-semibold text-cyan-100">
              <div class="flex items-center mb-1">
                <span class="ml-2 text-lg">📱</span>
                شماره تماس اولیا
                <span class="text-red-400 mr-1">*</span>
              </div>
            </label>

            <input v-model="local.phone" type="tel" maxlength="11" placeholder="۰۹۱۲۳۴۵۶۷۸۹" @input="validatePhone"
              @blur="validatePhone" :class="[
                'w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl text-white text-left dir-ltr placeholder-cyan-100/50 transition-all duration-300 focus:outline-none focus:ring-2',
                errors.phone
                  ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400/30'
                  : local.phone && !errors.phone
                    ? 'border-green-400/70 focus:border-green-400 focus:ring-green-400/30'
                    : 'border-white/20 focus:border-cyan-400 focus:ring-cyan-400/30'
              ]">

            <div v-if="errors.phone" class="mt-1 text-red-300 text-sm flex items-center animate-shake">
              <span class="ml-1">⚠️</span>{{ errors.phone }}
            </div>
            <div v-else-if="local.phone && !errors.phone" class="mt-1 text-green-300 text-sm flex items-center">
              <span class="ml-1">✅</span> شماره تماس معتبر است
            </div>
          </div>

          <!-- 8. سال تولد -->
          <div class="group">
            <label class="block mb-2 text-sm font-semibold text-cyan-100">
              <div class="flex items-center mb-1">
                <span class="ml-2 text-lg">🎂</span>
                تاریخ تولد شناگر(فقط سال)
                <span class="text-red-400 mr-1">*</span>
              </div>
            </label>

            <div class="relative">
              <input v-model="local.birthYear" type="number" placeholder="مثال: ۱۳۹۵" min="1386" max="1398"
                @input="validateBirthYear" @blur="validateBirthYear" :class="[
                  'w-full px-4 py-3 bg-white/10 backdrop-blur-sm border rounded-xl dir-ltr pl-10 text-white placeholder-cyan-100/50 transition-all duration-300 focus:outline-none focus:ring-2',
                  errors.birthYear
                    ? 'border-red-400/70 focus:border-red-400 focus:ring-red-400/30'
                    : local.birthYear && !errors.birthYear
                      ? 'border-green-400/70 focus:border-green-400 focus:ring-green-400/30'
                      : 'border-white/20 focus:border-cyan-400 focus:ring-cyan-400/30'
                ]">
              <div class="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-200/60">
                <span class="text-sm">۱۳</span>
              </div>
            </div>

            <div v-if="errors.birthYear" class="mt-1 text-red-300 text-sm flex items-center animate-shake">
              <span class="ml-1">⚠️</span>{{ errors.birthYear }}
            </div>
            <div v-else-if="local.birthYear && !errors.birthYear" class="mt-1 text-green-300 text-sm flex items-center">
              <span class="ml-1">✅</span> سال تولد معتبر است
            </div>
          </div>

        </div>


        <!-- نمایش رده سنی به صورت بزرگتر -->
        <div v-if="age && !errors.birthYear" class="mt-8 p-6 rounded-2xl border"
          :class="age < 13 ? 'bg-gradient-to-r from-yellow-500/30 to-orange-500/30 border-yellow-400/50' : 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border-cyan-400/50'">
          <div class="flex items-center justify-between">
            <div>
              <h4 class="font-bold text-white text-xl mb-2">رده سنی تشخیص داده شده:</h4>
              <div class="flex items-center space-x-4 space-x-reverse">
                <span :class="ageCategory.class" class="font-black text-lg px-4 py-2 rounded-xl">
                  {{ ageCategory.text }}
                </span>
                <div class="text-right mx-4">
                  <p class="text-sm text-cyan-200">تاریخ مسابقه</p>
                  <p class="font-bold text-white text-sm">{{ age < 13 ? '۴ دی ۱۴۰۴' : '۵ دی ۱۴۰۴' }}</p>
                </div>
                <div class="text-right mx-4">
                  <p class="text-sm text-cyan-200">روز هفته</p>
                  <p class="font-bold text-white text-sm">{{ age < 13 ? 'پنجشنبه' : 'جمعه' }}</p>
                </div>
                <div class="text-right mx-4">
                  <p class="text-sm text-cyan-300">سن شناگر:</p>
                  <p class="font-bold text-white text-sm">{{ age }} سال</p>
                </div>
              </div>
            </div>
            <span class="text-4xl">{{ age < 13 ? '👦' : '👨' }}</span>
          </div>
        </div>

        <!-- Status summary -->
        <div v-if="hasValidFields"
          class="mt-6 p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-400/30">
          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <div
                class="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center mx-3">
                <span class="text-lg">📊</span>
              </div>
              <div>
                <p class="text-sm text-cyan-200">وضعیت تکمیل فرم</p>
                <p class="font-bold text-white">
                  {{ validFieldCount }} از {{ totalRequiredFields }} فیلد اجباری تکمیل شد
                </p>
              </div>
            </div>
            <div
              class="h-12 w-12 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center">
              <span class="font-bold text-white">{{ Math.round((validFieldCount / totalRequiredFields) * 100)
                }}%</span>
            </div>
          </div>
          <div class="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
            <div class="h-full bg-gradient-to-r from-emerald-500 to-green-600 rounded-full transition-all duration-500"
              :style="{ width: `${(validFieldCount / totalRequiredFields) * 100}%` }"></div>
          </div>
        </div>

        <!-- Error message -->
        <div v-if="generalError" class="mt-8 p-4 bg-red-500/20 border border-red-400/30 rounded-xl animate-shake">
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
            'group px-10 py-4 rounded-xl text-white font-bold shadow-lg transition-all duration-500 flex items-center justify-center w-full sm:w-auto',
            isFormInvalid
              ? 'bg-gradient-to-r from-gray-600 to-gray-700 opacity-70 cursor-not-allowed'
              : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/30 hover:-translate-y-1'
          ]">
            <span v-if="isFormInvalid">لطفاً فرم را کامل کنید</span>
            <span v-else class="flex items-center">
              ادامه به مرحله بعد
              <span class="mr-3 text-xl transform group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </button>
        </div>

        <!-- Form steps indicator -->
        <div class="mt-8 flex justify-center">
          <div class="flex items-center space-x-2">
            <div class="w-10 h-2 rounded-full bg-cyan-500"></div>
            <div class="w-6 h-2 rounded-full bg-white/30"></div>
            <div class="w-6 h-2 rounded-full bg-white/30"></div>
            <div class="w-6 h-2 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch, onMounted } from "vue";
import { useRouter } from "vue-router";




const router = useRouter();

// Key برای ذخیره‌سازی در localStorage
const STORAGE_KEY = 'swim_registration_form';

// Initialize form data from localStorage or empty
const local = reactive({
  name: "",
  fatherName: "",
  nationalCode: "",
  schoolName: "",
  swimSchoolName: "",
  coachName: "",
  birthYear: "",
  phone: ""
});

// Load data from localStorage on component mount
onMounted(() => {
  loadFromLocalStorage();

  // همچنین میتوانیم گوش دهنده‌ای برای ذخیره کردن هنگام بسته شدن صفحه اضافه کنیم
  window.addEventListener('beforeunload', saveToLocalStorage);

  // و گوش دهنده‌ای برای ذخیره‌سازی دوره‌ای هر 30 ثانیه
  setInterval(saveToLocalStorage, 30000);
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

// Functions for localStorage handling
function loadFromLocalStorage() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.assign(local, parsedData);

      // اعتبارسنجی مجدد داده‌های بارگذاری شده
      if (local.name) validateName();
      if (local.fatherName) validateFatherName();
      if (local.nationalCode) validateNationalCode();
      if (local.schoolName) validateSchoolName();
      if (local.coachName) validateCoachName();
      if (local.birthYear) validateBirthYear();
      if (local.phone) validatePhone();

      console.log('داده‌ها از LocalStorage بارگذاری شدند');
    }
  } catch (error) {
    console.error('خطا در بارگذاری داده‌ها از LocalStorage:', error);
    // در صورت خطا، داده‌ها را پاک می‌کنیم
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveToLocalStorage() {
  try {
    // فقط فیلدهایی که مقدار دارند ذخیره می‌کنیم
    const dataToSave = {};
    Object.keys(local).forEach(key => {
      if (local[key] !== undefined && local[key] !== null && local[key] !== '') {
        dataToSave[key] = local[key];
      }
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  } catch (error) {
    console.error('خطا در ذخیره داده‌ها در LocalStorage:', error);
  }
}

// Functions for sessionStorage (مراحل بعدی)
function saveToSessionStorage() {
  sessionStorage.setItem("user-base", JSON.stringify(local));
}

// Computed properties (بدون تغییر)
const age = computed(() => {
  if (!local.birthYear || isNaN(local.birthYear)) return null;
  const currentYear = 1404;
  const birthYear = parseInt(local.birthYear);
  return currentYear - birthYear;
});

const ageCategory = computed(() => {
  if (!age.value) return { text: "", class: "" };
  if (age.value < 13) {
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

// تعداد فیلدهای معتبر
const validFieldCount = computed(() => {
  const requiredFields = ['name', 'fatherName', 'nationalCode', 'schoolName', 'coachName', 'birthYear', 'phone'];
  return requiredFields.filter(field => {
    const value = String(local[field] || '').trim();
    return value !== '' && !errors[field];
  }).length;
});

// تعداد کل فیلدهای اجباری
const totalRequiredFields = computed(() => {
  return 7;
});

// آیا حداقل یک فیلد معتبر داریم؟
const hasValidFields = computed(() => {
  return validFieldCount.value > 0;
});

const isFormInvalid = computed(() => {
  const requiredFields = ['name', 'fatherName', 'nationalCode', 'schoolName', 'coachName', 'birthYear', 'phone'];
  return requiredFields.some(field => {
    const value = String(local[field] || '').trim();
    return value === '' || errors[field];
  });
});

// Validation functions - با اضافه کردن ذخیره‌سازی خودکار
function validateName() {
  const nameRegex = /^[\u0600-\u06FF\s]{2,50}$/;
  if (!local.name.trim()) {
    errors.name = "نام و نام خانوادگی الزامی است";
  } else if (!nameRegex.test(local.name)) {
    errors.name = "نام باید حاوی حروف فارسی باشد (حداقل ۲ حرف)";
  } else {
    errors.name = "";
  }
  generalError.value = "";
  saveToLocalStorage(); // ذخیره پس از هر تغییر
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
  generalError.value = "";
  saveToLocalStorage();
}

function validateNationalCode() {
  const code = local.nationalCode.trim();
  const nationalCodeRegex = /^\d{10}$/;
  const hasPersianDigits = /[\u06F0-\u06F9\u0660-\u0669]/.test(code);

  if (!code) {
    errors.nationalCode = "کد ملی الزامی است";
  } else if (hasPersianDigits) {
    errors.nationalCode = "لطفاً فقط اعداد انگلیسی وارد کنید";
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

  generalError.value = "";
  saveToLocalStorage();
}

function validateSchoolName() {
  if (!local.schoolName.trim()) {
    errors.schoolName = "نام مدرسه تحصیلی الزامی است";
  } else if (local.schoolName.trim().length < 2) {
    errors.schoolName = "نام مدرسه باید حداقل ۲ حرف باشد";
  } else {
    errors.schoolName = "";
  }
  generalError.value = "";
  saveToLocalStorage();
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
  generalError.value = "";
  saveToLocalStorage();
}

function validateBirthYear() {
  const year = parseInt(local.birthYear);
  const currentYear = 1404;

  if (!local.birthYear) {
    errors.birthYear = "سال تولد الزامی است";
  } else if (isNaN(year)) {
    errors.birthYear = "سال تولد باید عدد باشد";
  } else if (year < 1386 || year > currentYear - 6) {
    errors.birthYear = `سال تولد باید بین ۱۳۸۶ تا ۱۳۹۸ باشد`;
  } else if (currentYear - year < 6) {
    errors.birthYear = "حداقل سن شرکت ۶ سال است";
  } else {
    errors.birthYear = "";
  }
  generalError.value = "";
  saveToLocalStorage();
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
  generalError.value = "";
  saveToLocalStorage();
}

// Watch for changes and validate - با اضافه کردن ذخیره‌سازی
watch(() => local.name, () => {
  if (local.name) {
    validateName();
    saveToLocalStorage();
  }
});

watch(() => local.fatherName, () => {
  if (local.fatherName) {
    validateFatherName();
    saveToLocalStorage();
  }
});

watch(() => local.nationalCode, () => {
  if (local.nationalCode) {
    validateNationalCode();
    saveToLocalStorage();
  }
});

watch(() => local.schoolName, () => {
  if (local.schoolName) {
    validateSchoolName();
    saveToLocalStorage();
  }
});

watch(() => local.swimSchoolName, () => {
  // مدرسه شنا اختیاری است، فقط ذخیره می‌کنیم
  saveToLocalStorage();
});

watch(() => local.coachName, () => {
  if (local.coachName) {
    validateCoachName();
    saveToLocalStorage();
  }
});

watch(() => local.birthYear, () => {
  if (local.birthYear) {
    validateBirthYear();
    saveToLocalStorage();
  }
});

watch(() => local.phone, () => {
  if (local.phone) {
    validatePhone();
    saveToLocalStorage();
  }
});

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
  const requiredFields = ['name', 'fatherName', 'nationalCode', 'schoolName', 'coachName', 'birthYear', 'phone'];
  const hasEmptyFields = requiredFields.some(field => !String(local[field] || '').trim());

  if (hasErrors || hasEmptyFields) {
    generalError.value = "لطفاً تمام فیلدهای اجباری را به درستی تکمیل نمایید";

    // اسکرول به اولین فیلد دارای خطا
    const firstErrorField = Object.keys(errors).find(field => errors[field]);
    if (firstErrorField) {
      const inputElement = document.querySelector(`[v-model="local.${firstErrorField}"]`);
      if (inputElement) {
        inputElement.focus();
        inputElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
    return;
  }

  // Save to sessionStorage برای مراحل بعدی
  saveToSessionStorage();

  // پاک کردن localStorage چون داده‌ها به sessionStorage منتقل شدند
  localStorage.removeItem(STORAGE_KEY);

  // حذف event listenerها
  window.removeEventListener('beforeunload', saveToLocalStorage);

  router.push("/age");
}

function back() {
  // قبل از رفتن به صفحه اصلی، ذخیره می‌کنیم
  saveToLocalStorage();
  router.push("/");
}

// Cleanup function
function cleanup() {
  window.removeEventListener('beforeunload', saveToLocalStorage);
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

/* Smooth transitions */
* {
  transition-property: background-color, border-color, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
