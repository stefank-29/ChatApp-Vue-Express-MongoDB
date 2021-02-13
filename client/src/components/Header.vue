<template>
    <div>
        <header class="top">
            <nav class="nav">
                <div class="nav__section nav__section--pages">
                    <li class="nav__item">
                        <router-link :to="{ name: 'Home' }" class="nav__link nav__link--logo">
                            <img src="@/assets/images/logo1.png" alt="" />
                        </router-link>
                    </li>
                    <li v-for="item in menu" :key="item.title" class="nav__item">
                        <router-link :to="item.slug" class="nav__link">
                            {{ item.title }}
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link
                            v-if="$store.state.isAdmin"
                            :to="{ name: 'Add Product' }"
                            class="nav__link"
                        >
                            Add product
                        </router-link>
                    </li>
                </div>
                <div class="nav__section nav__section--user">
                    <li v-if="!$store.state.isUserLoggedIn" class="nav__item">
                        <router-link :to="{ name: 'Register' }" class="nav__link">
                            Register
                        </router-link>
                    </li>
                    <li v-if="!$store.state.isUserLoggedIn" class="nav__item">
                        <router-link :to="{ name: 'Login' }" class="nav__link">
                            Login
                        </router-link>
                    </li>
                    <li @click="logout" v-if="$store.state.isUserLoggedIn" class="nav__item">
                        <router-link to="/logout" class="nav__link">
                            Logout
                        </router-link>
                    </li>
                    <li v-if="$store.state.isUserLoggedIn" class="nav__item">
                        <router-link to="/account" class="nav__link">
                            <img class="avatar" :src="$store.state.gravatar" alt="" />
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/shopping-cart" class="nav__link nav__link--cart">
                            <div class="cart">
                                <img src="@/assets/images/shopping-cart.svg" alt="" />
                                <div class="items__num">{{ cartItemsNum() }}</div>
                            </div>
                        </router-link>
                    </li>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Header',
    methods: {
        ...mapActions(['removeUser']),
        ...mapGetters(['cartItemsNum']),
        async logout() {
            this.removeUser();
            this.$router.push({ name: 'Home' });
        },
    },
    data() {
        return {
            menu: [
                { slug: '/products', title: 'Products', icon: 'product' },
                // { slug: '/contacts', title: 'Contacts', icon: 'contact' },
            ],
            gravatar: this.$store.state.gravatar,
        };
    },
};
</script>

<style></style>
