<template>
  <div class="page">
    <div class="page-bg"></div>
    <div class="box">
      <h2>تکمیل اطلاعات: سن و رشته</h2>

      <label>سن شناگر (عدد)</label>
      <input type="number" v-model.number="age" placeholder="مثلاً: 14">

      <label>رشته تمرینی اصلی</label>
      <select v-model="major">
        <option value="">انتخاب کنید</option>
        <option value="parvane">پروانه</option>
        <option value="sine">سینه</option>
        <option value="posht">پشت</option>
        <option value="ghorbaqe">غورباقه</option>
        <option value="all">همه</option>
      </select>

      <p class="error" v-if="error">{{ error }}</p>

      <div class="actions">
        <button class="ghost" @click="back">بازگشت</button>
        <button class="primary" @click="next">مشاهده مسابقات مناسب</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const age = ref(null);
const major = ref("");
const error = ref("");

function next() {
  if (!age.value || !major.value) { error.value = "لطفاً هر دو فیلد را تکمیل کنید"; return; }
  const stored = JSON.parse(sessionStorage.getItem("user-base") || "{}");
  const merged = { ...stored, age: age.value, major: major.value };
  sessionStorage.setItem("user-full", JSON.stringify(merged));
  router.push("/races");
}

function back() { router.push("/form"); }
</script>

<style scoped>
.page-bg{position:fixed;inset:0;z-index:-2;background:url('/bg/pool2.jpg') center/cover no-repeat;filter:brightness(0.6)}
.page{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
.box{width:100%;max-width:520px;background:rgba(0,0,0,0.42);color:white;padding:26px;border-radius:16px;backdrop-filter:blur(8px)}
label{display:block;margin-top:12px}
input,select{width:100%;padding:10px;border-radius:10px;border:none;margin-top:6px;background:rgba(255,255,255,0.08);color:rgb(149, 197, 248)}
.actions{display:flex;justify-content:space-between;margin-top:16px}
.primary{background:linear-gradient(90deg,#00cfff,#0066ff);border:none;color:rgb(255, 255, 255);padding:10px 18px;border-radius:10px;cursor:pointer}
.ghost{background:transparent;border:1px solid rgba(255,255,255,0.12);color:rgb(255, 255, 255);padding:10px 18px;border-radius:10px}
.error{color:#ff9b9b;margin-top:8px}
</style>
