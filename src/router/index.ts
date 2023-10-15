import {createRouter, createWebHistory} from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import { useUserStore } from "@/store/userStore";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Home},
        {path: "/login", component: Login},
        {path: "/register", component: Register},
    ]
});


// router.beforeEach((to, from) => {
//     const userStore = useUserStore();
//     const user = userStore.getUser;

//     if(!user.value && to.path === "/") {
//         return "/login"
//     }
// })