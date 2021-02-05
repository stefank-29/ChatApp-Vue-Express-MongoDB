<template>
    <div>
        <header class="top">
            <nav class="nav">
                <div class="nav__section nav__section--pages">
                    <li class="nav__item">
                        <router-link :to="{ name: 'Home' }" class="nav__link nav__link--logo">
                            <img src="@/assets/images/whatsapp.svg" alt="" />
                        </router-link>
                    </li>
                    <li v-for="item in menu" :key="item.title" class="nav__item">
                        <router-link :to="item.slug" class="nav__link">
                            {{ item.title }}
                        </router-link>
                    </li>
                </div>
                <div class="nav__section nav__section--user">
                    <li class="nav__item">
                        <router-link :to="{ name: 'Register' }" class="nav__link">
                            Register
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link :to="{ name: 'Login' }" class="nav__link">
                            Login
                        </router-link>
                    </li>
                </div>
            </nav>
        </header>
    </div>
</template>

<script>
//todo provera da l je user ulogovan
export default {
    name: 'Header',
    data() {
        return {
            menu: [
                { slug: '/chats', title: 'Chats', icon: 'chat' },
                { slug: '/contacts', title: 'Contacts', icon: 'contact' },
            ],
        };
    },
};
</script>

<style></style>
