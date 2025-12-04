<template>
  <div class="page">
    <div class="page-bg"></div>
    <div class="box">
      <h2>آپلود مدارک</h2>
      <p>لطفاً دو تصویر زیر را ارسال کنید:</p>

      <label>تصویر بیمه ورزشی</label>
      <input type="file" accept="image/*" @change="onFile($event,'insurance')" />
      <img v-if="previews.insurance" :src="previews.insurance" class="preview" />

      <label>عکس شناسنامه</label>
      <input type="file" accept="image/*" @change="onFile($event,'idcard')" />
      <img v-if="previews.idcard" :src="previews.idcard" class="preview" />

      <p class="error" v-if="error">{{ error }}</p>

      <div class="actions">
        <button class="ghost" @click="back">بازگشت</button>
        <button class="primary" @click="next">ادامه به پرداخت</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const previews = reactive({ insurance: null, idcard: null, receipt: null });
const stored = JSON.parse(sessionStorage.getItem("registration-step") || "{}");
const error = ref("");

function readFile(file) {
  return new Promise((res, rej) => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = rej;
    fr.readAsDataURL(file);
  });
}

async function onFile(e, key) {
  const file = e.target.files[0];
  if (!file) return;
  const data = await readFile(file);
  previews[key] = data;
  // ذخیره
  const store = JSON.parse(sessionStorage.getItem("uploads") || "{}");
  store[key] = data;
  sessionStorage.setItem("uploads", JSON.stringify(store));
}

function next() {
  const store = JSON.parse(sessionStorage.getItem("uploads") || "{}");
  if (!store.insurance || !store.idcard) { error.value = "لطفاً هر دو تصویر را آپلود کنید"; return; }
  router.push("/payment");
}

function back() { router.push("/races"); }
</script>

<style scoped>
.page-bg{position:fixed;inset:0;z-index:-2;background:url('/bg/pool4.jpg') center/cover no-repeat;filter:brightness(0.6)}
.page{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
.box{width:100%;max-width:640px;background:rgba(0,0,0,0.45);padding:22px;border-radius:14px;color:white;backdrop-filter:blur(8px)}
.preview{display:block;margin-top:10px;max-width:180px;border-radius:8px}
label{display:block;margin-top:12px}
input[type=file]{margin-top:8px}
.actions{display:flex;justify-content:space-between;margin-top:16px}
.primary{background:linear-gradient(90deg,#00cfff,#0066ff);border:none;color:white;padding:10px 18px;border-radius:10px;cursor:pointer}
.ghost{background:transparent;border:1px solid rgba(255,255,255,0.12);color:white;padding:10px 18px;border-radius:10px}
.error{color:#ff9b9b;margin-top:8px}
</style>
