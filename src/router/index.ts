import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/learn",
    name: "learn",

    component: () => import("../views/LearningView.vue"),
  },
  {
    path: "/practice",
    name: "practice",

    component: () => import("../views/PracticeView.vue"),
  },
  {
    path: "/profile",
    name: "profile",

    component: () => import("../views/ProfileView.vue"),
  },
  {
    path: "/learn/periodictable",
    name: "Periodic Table",

    component: () => import("../components/PeriodicTable.vue"),
  },
  {
    path: "/learn/labtools",
    name: "Lab Tools",

    component: () => import("../components/LabTools.vue"),
  },
  {
    path: "/learn/chemistryfacts",
    name: "Fun Facts",

    component: () => import("../components/FactsGenerator.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
