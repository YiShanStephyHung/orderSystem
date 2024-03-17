import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/order",
    name: "Main",
    children: [
      {
        path: "/order",
        name: "Order",
        component: () => import("@/views/order.vue"),
      }

    ],
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
