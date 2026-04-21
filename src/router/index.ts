import { createRouter, createWebHistory } from "vue-router"
import Main from "@/pages/Main.vue"
import PostPage from "@/pages/PostPage.vue"
import AboutPage from "@/pages/AboutPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/posts",
      component: PostPage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
  ],
})

export default router
