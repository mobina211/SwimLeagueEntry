<template>
  <section class="hero">
    <div class="content">
      <h1>خوش آمدید</h1>
      <h1 class="main">مسابقات اُستانی شنا🏊</h1>
      <h2>رده سنّی زیر ۱۲ سال / بالای ۱۲ سال</h2>
      <h3>استخر شهید رئیسی </h3>
      <h4>دی ماه ۱۴۰۴</h4>
      <p>برای شروع ثبت‌نام روی دکمه کلیک کنید</p>
      <button @click="go" class="primary">شروع ثبت‌نام</button>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const go = () => router.push("/form");
</script>

<style scoped>
.main{color: rgb(0, 0, 0)}
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:40px;}
.content{background:rgba(255,255,255,0.06);padding:40px;border-radius:18px;text-align:center;color:rgb(255, 255, 255);backdrop-filter:blur(6px);}
.primary{padding:12px 24px;border-radius:12px;border:none;background:linear-gradient(90deg,#00cfff,#0066ff);color:white;font-weight:700;cursor:pointer}
</style>
