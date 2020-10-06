import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../views/products/Products.vue";
import Login from "../views/login/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
