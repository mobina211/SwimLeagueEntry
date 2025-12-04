<template>
  <div class="page">
    <div class="page-bg"></div>
    <div class="box">
      <h2>پرداخت و ارسال رسید</h2>

      <div class="summary">
        <p><b>نام:</b> {{ reg.user.name }}</p>
        <p><b>مسابقه انتخابی:</b> {{ reg.selected.raceName }}</p>
        <p><b>هزینه:</b> {{ feeText }}</p>
      </div>

      <p>لطفاً مبلغ را به کارت زیر واریز کرده و عکس رسید را آپلود کنید:</p>

      <div class="card-box">
        <div class="card-num">۶۱۰۴-۳۳۷۰-XXXX-XXXX</div>
        <div class="bank">بانک نمونه</div>
      </div>

      <label>آپلود عکس رسید</label>
      <input type="file" accept="image/*" @change="onReceipt" />
      <img v-if="preview" :src="preview" class="preview" />

      <p class="error" v-if="error">{{ error }}</p>

      <div class="actions">
        <button class="ghost" @click="back">بازگشت</button>
        <button class="primary" @click="finalize">تکمیل ثبت‌نام</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { SHEET_ENDPOINT } from "../config";

const router = useRouter();
const reg = JSON.parse(sessionStorage.getItem("registration-step") || "{}");
const uploads = JSON.parse(sessionStorage.getItem("uploads") || "{}");
const preview = ref(uploads.receipt || null);
const error = ref("");

function readFile(file) {
  return new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = rej;
    fr.readAsDataURL(file);
  });
}

async function onReceipt(e) {
  const file = e.target.files[0];
  if (!file) return;
  preview.value = await readFile(file);
  const store = JSON.parse(sessionStorage.getItem("uploads") || "{}");
  store.receipt = preview.value;
  sessionStorage.setItem("uploads", JSON.stringify(store));
}

function back() { router.push("/upload"); }

const fee = reg.selected && reg.selected.fee ? reg.selected.fee : 0;
const feeText = fee ? fee + " تومان" : "رایگان / یا بدون هزینه";

async function finalize() {
  const uploads = JSON.parse(sessionStorage.getItem("uploads") || "{}");
  if (!uploads.receipt) { error.value = "لطفاً عکس رسید را آپلود کنید"; return; }

  // ساخت payload نهایی
  const userBase = JSON.parse(sessionStorage.getItem("user-full") || "{}");
  const finalPayload = {
    timestamp: new Date().toISOString(),
    personal: userBase,
    registration: reg.selected,
    uploads: uploads // uploads.insurance, uploads.idcard, uploads.receipt are base64 dataURLs
  };

  try {
    const res = await fetch(SHEET_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalPayload)
    });
    const txt = await res.text();
    // ذخیره پاسخ سرور 
    sessionStorage.setItem("submission-response", txt || "ok");
    router.push("/done");
  } catch (err) {
    error.value = "خطا در ارسال اطلاعات: " + String(err);
  }
}
</script>

<style scoped>
.page-bg{position:fixed;inset:0;z-index:-2;background:url('/bg/pool5.jpg') center/cover no-repeat;filter:brightness(0.6)}
.page{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
.box{width:100%;max-width:640px;background:rgba(0,0,0,0.45);padding:22px;border-radius:14px;color:white;backdrop-filter:blur(8px)}
.summary{background:rgba(255,255,255,0.02);padding:10px;border-radius:8px;margin-bottom:12px}
.card-box{background:linear-gradient(90deg,#012a3a,#004b6b);padding:12px;border-radius:10px;color:white;margin:12px 0}
.card-num{font-weight:800;letter-spacing:2px}
.preview{display:block;margin-top:10px;max-width:220px;border-radius:8px}
.actions{display:flex;justify-content:space-between;margin-top:16px}
.primary{background:linear-gradient(90deg,#00cfff,#0066ff);border:none;color:white;padding:10px 18px;border-radius:10px;cursor:pointer}
.ghost{background:transparent;border:1px solid rgba(255,255,255,0.12);color:white;padding:10px 18px;border-radius:10px}
.error{color:#ff9b9b;margin-top:8px}
</style>
