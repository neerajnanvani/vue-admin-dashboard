import {createRouter, createWebHistory} from "vue-router";

import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import NotFound from "@/views/404.vue"

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", component: Home},
        {path: "/login", component: Login},
        {path: "/register", component: Register},
        { path: '/:pathMatch(.*)*', component: NotFound },
    ]
});