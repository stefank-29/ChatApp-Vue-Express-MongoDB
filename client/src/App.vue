<template>
    <div id="app">
        <Header />
        <router-view />
    </div>
</template>

<script>
import Header from '@/components/Header';
import AuthenticationService from '@/services/AuthenticationService';
import { mapActions } from 'vuex';
export default {
    components: {
        Header,
    },
    methods: {
        ...mapActions(['setUser']),
    },
    async created() {
        try {
            const response = await AuthenticationService.isLoggedIn();
            if (response.data.user) {
                const payload = { user: response.data.user, gravatar: response.data.gravatar };
                this.setUser(payload);
            } else {
                console.log('No logged user');
            }
        } catch (error) {
            console.log(error.message);
        }
    },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
