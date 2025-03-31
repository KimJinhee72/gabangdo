import { createRouter, createWebHistory } from "vue-router";
import Home from "@/Home.vue";
import Bb from "@/views/a_Header/Bb.vue";
import Yy from "@/views/a_Header/Yy.vue";
import Yg from "@/views/a_Header/Yg.vue";
import St from "@/views/a_Header/St.vue";
import Yh from "@/views/a_Header/Yh.vue";
import Ex1 from "@/views/a_Header/Ex1.vue";
import Ex2 from "@/views/a_Header/Ex2.vue";
const routes = [
    { path: "/" , component :Home },
    { path: "/bangbeob" , component :Bb },
    { path: "/yeyak" , component :Yy },
    { path: "/yogeum" , component :Yg },
    { path: "/sotong" , component :St },
    { path: "/yeohang" , component :Yh },
    { path: "/delivery" , component :Ex1 },
    { path: "/login" , component :Ex2 }
]
const router = createRouter({
    history : createWebHistory(),
    routes
})
export default router