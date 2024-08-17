import { createRouter, createWebHistory } from "vue-router";
import Greeting from "../components/Greeting.vue";
import Modal from "../components/Modal.vue";
import Header from "../components/Header.vue";
import Home from "@/components/Home.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/Greeting",
        name: "Greeting",
        component: Greeting
    },
    {
        path: "/Modal",
        name: "About",
        component: Modal
    }]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})
export default router;