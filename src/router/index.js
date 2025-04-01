import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Home.vue";
import Bangbeob from "@/views/bangbeob/Bangbeob.vue";
import Yeyak from "@/views/yeyak/Yeyak.vue";
import Yogeum from "@/views/yogeum/Yogeum.vue";
import Sotong from "@/views/sotong/Sotong.vue";
import Yeohang from "@/views/yeohang/Yeohang.vue";
import Delivery from "@/views/delivery & login/Delivery.vue";
import Login from "@/views/delivery & login/Login.vue";
const routes = [
    { path: "/" , component :Home },
    { path: "/bangbeob" , component :Bangbeob },
    { path: "/yeyak" , component :Yeyak },
    { path: "/yogeum" , component :Yogeum },
    { path: "/sotong" , component :Sotong },
    { path: "/yeohang" , component :Yeohang },
    { path: "/delivery" , component :Delivery },
    { path: "/login" , component :Login }
]
const router = createRouter({
    history : createWebHistory(),
    routes
})
export default router