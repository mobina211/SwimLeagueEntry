<template>
  <div class="page">
    <div class="page-bg"></div>
    <div class="card">
      <h2>مسابقات مناسب شما</h2>
      <p class="muted">نام: {{ user.name }} — سن: {{ user.age }} — رشته: {{ displayMajor }}</p>

      <div v-if="available.length === 0" class="empty">برای سن/رشته شما مسابقه‌ای یافت نشد.</div>

      <div class="list">
        <div v-for="item in available" :key="item.uid" class="event">
          <div class="event-head">
            <strong v-html="item.eventTitle"></strong>
            <span class="time">{{ item.periodTime }}</span>
          </div>

          <div class="races">
            <button v-for="r in item.races" :key="r.key" class="race-btn" @click="pick(item, r)">
              {{ r.name }} <span v-if="r.fee"> — {{ r.fee }} تومان</span>
            </button>
          </div>
        </div>
      </div>

      <div class="actions">
        <button class="ghost" @click="back">بازگشت</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import events from "../data/events.js";
// import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const user = JSON.parse(sessionStorage.getItem("user-full") || "{}");
const displayMajor = {
  parvane: "پروانه", sine: "سینه", posht: "پشت", ghorbaqe: "غورباقه", all: "تمامی"
}[user.major] || user.major;

function categoryMatchesAge(cat, age) {
  return age >= cat.minAge && age <= cat.maxAge;
}

// ایجاد لیستی از مسابقات مطابق سن و رشته
const available = (() => {
  const list = [];
  const age = Number(user.age);
  if (!age) return list;

  events.forEach(ev => {
    ev.periods.forEach(p => {
      p.categories.forEach(cat => {
        if (!categoryMatchesAge(cat, age)) return;
        // فیلتر رشته: اگر کاربر "all" انتخاب کرده همه رشته‌های allowed نشان داده شوند،
        // در غیر این صورت فقط آن رشته‌ای که کاربر انتخاب کرده.
        const races = cat.races.filter(r => r.allowed).filter(r => {
          if (user.major === "all") return true;
          // match by key or name contains
          return r.key.includes(user.major) || r.name.includes(displayMajor);
        });
        if (races.length) {
          list.push({
            uid: ev.id + "|" + p.time + "|" + cat.label,
            eventId: ev.id,
            eventTitle: ev.title,
            periodTime: p.time,
            categoryLabel: cat.label,
            races
          });
        }
      });
    });
  });
  return list;
})();

function pick(item, race) {
  // ذخیره انتخاب نهایی
  const registration = {
    user,
    selected: {
      eventId: item.eventId,
      eventTitle: item.eventTitle,
      periodTime: item.periodTime,
      categoryLabel: item.categoryLabel,
      raceKey: race.key,
      raceName: race.name,
      fee: race.fee
    }
  };
  sessionStorage.setItem("registration-step", JSON.stringify(registration));
  router.push("/upload");
}

function back() { router.push("/age"); }
</script>

<style scoped>
.page-bg{position:fixed;inset:0;z-index:-2;background:url('/bg/pool3.jpg') center/cover no-repeat;filter:brightness(0.65)}
.page{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px}
.card{width:100%;max-width:900px;background:rgba(0,0,0,0.44);padding:26px;border-radius:16px;color:white;backdrop-filter:blur(8px)}
.muted{color:#ffffff;margin-bottom:10px}
.list{margin-top:12px;display:flex;flex-direction:column;gap:14px}
.event{background:rgba(255,255,255,0.03);padding:12px;border-radius:12px}
.event-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.races{display:flex;flex-wrap:wrap;gap:10px}
.race-btn{padding:10px 14px;border-radius:12px;border:none;background:linear-gradient(90deg,#00cfff,#0066ff);color:white;cursor:pointer}
.empty{padding:20px;text-align:center;background:rgba(255,255,255,0.02);border-radius:10px;color:#ffd6d6}
.actions{margin-top:18px;display:flex;justify-content:flex-end}
.ghost{background:transparent;border:1px solid rgba(255,255,255,0.12);color:white;padding:8px 12px;border-radius:10px}
</style>
