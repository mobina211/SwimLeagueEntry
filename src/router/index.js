import { createRouter, createWebHistory } from "vue-router";
import WelcomeBanner from "../components/WelcomeBanner.vue";
import UserForm from "../components/UserForm.vue";
import AgeAndMajor from "../components/AgeAndMajor.vue";
import RaceSelection from "../components/RaceSelection.vue";
import ImagesUploading from "../components/ImagesUploading.vue";
import Payment from "../components/Payment.vue";
import RegistrationDone from "../components/RegistrationDone.vue";

const routes = [
  { path: "/", component: WelcomeBanner },
  { path: "/form", component: UserForm },
  { path: "/age", component: AgeAndMajor },
  { path: "/races", component: RaceSelection },
  { path: "/upload", component: ImagesUploading },
  { path: "/payment", component: Payment },
  { path: "/done", component: RegistrationDone }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
   scrollBehavior() {
    // این خط تضمین می‌کند که همیشه صفحه از بالا شروع شود
    return { top: 0 };
  }
});

export default router;


