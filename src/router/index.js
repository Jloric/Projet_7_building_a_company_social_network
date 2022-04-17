import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArticlesView from '../views/ArticlesView.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: "signup",
        name: "Signup",
        component: () => import(/* webpackChunkName : "Signup"*/"@/components/users/SignupUser")
      },
      {
        path: "login",
        name: "Login",
        component: () => import(/* webpackChunkName : "Login"*/"@/components/users/LoginUser")
      }

    ]
  },
  {
    path:'/articles',
    name:'ArticlesView',
    component :ArticlesView,
  },
  {
    path: "/articles/update/:id",
    alias: "/articles/update/:id",
    name: "ArticlesUpdate",
    component: () => import(/* webpackChunkName : "ArticlesList"*/"@/components/articles/UpdateArticle")
  },
  {
    path: "/articles/:id",
    name: "ArticleSelected",
    component: () => import(/* webpackChunkName : "ArticleSelected"*/"@/components/articles/ArticleSelected")
  },
  {
    path: "/articles/new-article",
    name: "AddArticle",
    component: () => import(/* webpackChunkName : "AddArticle"*/"@/components/articles/AddArticle")
  },
  {
    path: "/account/:id",
    name: "Account",
    component: () => import(/* webpackChunkName : "Account"*/"@/components/users/UserAccount")
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
