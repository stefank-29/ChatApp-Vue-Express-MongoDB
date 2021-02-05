import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },

    //* redirect
    // {
    //     path: '/all-jobs',
    //     redirect: '/jobs',
    // },
    //* catch all 404 (hvata sve rute koje nisu deklarisane)
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
