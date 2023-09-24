import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/learn",
    name: "learn",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LearningView.vue"),
  },
  {
    path: "/practice",
    name: "practice",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PracticeView.vue"),
  },
  {
    path: "/profile",
    name: "profile",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
