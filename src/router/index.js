import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/views/Home.vue';
import Imprint from '@/views/Imprint.vue';
import Privacy from '@/views/Privacy.vue';
import NotFound from '@/views/NotFound.vue';

const history = createWebHistory();

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/impressum/',
        name: 'imprint',
        component: Imprint,
    },
    {
        path: '/datenschutz/',
        name: 'privacy',
        component: Privacy,
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
    },
];

const router = createRouter({ history, routes });
export default router;
