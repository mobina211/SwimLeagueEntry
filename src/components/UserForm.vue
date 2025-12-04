<template>
  <div class="form-wrapper">
    <div class="page-bg"></div>
    <div class="form-card">
      <h2>فرم اطلاعات شناگر</h2>

      <label>نام و نام خانوادگی</label>
      <input v-model="local.name" placeholder="مثلاً: علی رضایی">

      <label>نام پدر</label>
      <input v-model="local.fatherName" placeholder="مثلاً: محمد رضایی">

      <label>کد ملی</label>
      <input v-model="local.nationalCode" placeholder="۱۱رقم">

      <label>نام مدرسه</label>
      <input v-model="local.schoolName">

      <label>نام مربی شنا</label>
      <input v-model="local.coachName">

      <label>سال تولد فرزند</label>
      <input v-model="local.birthYear" type="number" placeholder="مثلاً: 1389">

      <label>شماره تماس اولیاء</label>
      <input v-model="local.phone" placeholder="۰۹۱۲...">

      <p class="error" v-if="error">{{ error }}</p>

      <div class="actions">
        <button class="ghost" @click="back">انصراف</button>
        <button class="primary" @click="next">ادامه</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
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
const error = ref("");

function validateNational(code) {
  
  return String(code).trim().length >= 8;
}

function next() {
  if (!local.name || !local.fatherName || !local.nationalCode || !local.schoolName || !local.coachName || !local.birthYear || !local.phone) {
    error.value = "لطفاً تمام فیلدها را کامل کنید";
    return;
  }
  if (!validateNational(local.nationalCode)) {
    error.value = "کد ملی نامعتبر است";
    return;
  }
  sessionStorage.setItem("user-base", JSON.stringify(local));
  router.push("/age");
}

function back() { router.push("/"); }
</script>

<style scoped>
.page-bg{position:fixed;inset:0;z-index:-2;background:url('/bg/pool.jpg') center/cover no-repeat;filter:brightness(0.7)}
.form-wrapper{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px}
.form-card{width:100%;max-width:640px;background:rgba(0,0,0,0.45);padding:28px;border-radius:18px;color:white;backdrop-filter:blur(8px)}
label{display:block;margin-top:12px;font-weight:600}
input{width:100%;padding:10px;border-radius:10px;border:none;margin-top:6px;background:rgba(255,255,255,0.08);color:white}
.error{color:#ff9b9b;margin-top:8px}
.actions{display:flex;justify-content:space-between;margin-top:18px}
.primary{background:linear-gradient(90deg,#00cfff,#0066ff);border:none;color:white;padding:10px 18px;border-radius:10px;cursor:pointer}
.ghost{background:transparent;border:1px solid rgba(255,255,255,0.12);color:white;padding:10px 18px;border-radius:10px}
</style>

