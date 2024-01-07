import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import StockListPage from '../views/StockListPage.vue';
import MonthlyPage from '../views/MonthlyPage.vue';
import CompanyOverviewPage from '../views/CompanyOverviewPage.vue';
import TopPlayersPage from '../views/TopPlayersPage.vue';

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
    },
    {
        path: '/monthlyPage',
        name: 'month',
        component: MonthlyPage,
    },
    {
        path: '/companyOverview',
        name: 'overview',
        component: CompanyOverviewPage,
    },
    {
        path: '/topPlayers',
        name: 'top',
        component: TopPlayersPage,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes 
})

export default router;