import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import NotFound from '../views/NotFound.vue';
import AddProduct from '../views/AddProduct.vue';
import Products from '../views/Products.vue';
import Product from '../views/Product.vue';
import ShoppingCart from '../views/ShoppingCart.vue';
import Account from '../views/Account.vue';

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
    {
        path: '/addproduct',
        name: 'Add Product',
        beforeEnter: checkAdminRights,
        component: AddProduct,
    },
    {
        path: '/products',
        name: 'Products',
        component: Products,
    },
    {
        path: '/products/:id',
        name: 'Product',
        component: Product,
    },
    {
        path: '/shopping-cart',
        name: 'ShoppingCart',
        component: ShoppingCart,
    },
    {
        path: '/account',
        name: 'Account',
        beforeEnter: checkIfAuthenticated,
        component: Account,
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
import store from '../store/index';

function checkAdminRights(to, from, next) {
    // check if the user is admin
    if (store.state.isAdmin) {
        next();
    } else {
        next({ path: '/' });
    }
}

function checkIfAuthenticated(to, from, next) {
    if (store.state.isUserLoggedIn) {
        next();
    } else {
        next({ path: '/login' });
    }
}

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to, from, next) => {
//     if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' });
//     else next();
// });

export default router;
