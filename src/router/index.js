import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import StockListPage from '../views/StockListPage.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },

    {
        path: '/letter/:letter',
        name: "byLetter",
        component: StockListPage
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes 
})

export default router;