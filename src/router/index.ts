import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "../shared/pages/AboutPage.vue";
import HomePage from "../shared/pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    // Characters
    {
      path: "/characters",
      name: "characters",
      component: () => import('../modules/characters/layout/CharacterLayout.vue'),
    },
    // Default
    {
      path: "/:pathMatch(.*)*",
      redirect: () => ({ name: "home" }),
    },
  ],
});

export default router;