<template>
  <div class="page">
    <div class="page-bg"></div>
    <div class="card">
      <h2> تبریک — ثبت‌ نام با موفقیت انجام شد</h2>

      <p><b>نام:</b> {{ reg.personal.name }}</p>
      <p><b>مسابقه:</b> {{ reg.registration.raceName }}</p>
      <p><b>هزینه:</b> {{ reg.registration.fee ? reg.registration.fee + ' تومان' : '—' }}</p>

      <div class="actions">
        <button class="primary" @click="again">...</button>
        <button class="ghost" @click="printSummary">...</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const raw = JSON.parse(sessionStorage.getItem("submission-response") || "null");
const reg = JSON.parse(sessionStorage.getItem("registration-step") || "{}");
const personal = JSON.parse(sessionStorage.getItem("user-full") || "{}");

const full = { personal, registration: reg.selected };

function again() {
  
  sessionStorage.removeItem("user-base");
  sessionStorage.removeItem("user-full");
  sessionStorage.removeItem("registration-step");
  sessionStorage.removeItem("uploads");
  sessionStorage.removeItem("submission-response");
  router.push("/");
}

function printSummary() {
  const w = window.open("", "_blank");
  const html = `<pre>${JSON.stringify(full, null, 2)}</pre>`;
  w.document.write(html);
  w.print();
  w.close();
}
</script>

<style scoped>
.page-bg{position:fixed;inset:0;z-index:-2;background:url('/bg/pool6.jpg') center/cover no-repeat;filter:brightness(0.6)}
.page{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
.card{width:100%;max-width:680px;background:rgba(0,0,0,0.45);padding:26px;border-radius:16px;color:white;backdrop-filter:blur(8px);text-align:center}
.actions{display:flex;gap:12px;justify-content:center;margin-top:18px}
.primary{background:linear-gradient(90deg,#00cfff,#0066ff);border:none;color:white;padding:10px 18px;border-radius:10px;cursor:pointer}
.ghost{background:transparent;border:1px solid rgba(255,255,255,0.12);color:white;padding:10px 18px;border-radius:10px}
</style>
