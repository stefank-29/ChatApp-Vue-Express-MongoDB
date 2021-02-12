<template>
    <div class="inner">
        <form @submit.prevent="login" class="form card">
            <h2>Login</h2>
            <label for="email">Email*</label>
            <input v-model="email" type="text" name="email" required />
            <label for="password">Password*</label>
            <input v-model="password" type="password" name="password" required />
            <input type="submit" value="Log In" name="login" class="button save" />
        </form>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import { mapActions } from 'vuex';
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: '',
            error: null,
        };
    },
    methods: {
        ...mapActions(['setUser']),
        async login() {
            try {
                const response = await AuthenticationService.login({
                    email: this.email,
                    password: this.password,
                });
                if (!response.data.error) {
                    //* mora objekat da se salje
                    const payload = { user: response.data.user, gravatar: response.data.gravatar };
                    this.setUser(payload);
                    this.$router.push({ name: 'Home' });
                } else {
                    // greska baciti neko obavestenje
                }
            } catch (error) {
                console.log(error.message);
            }
        },
    },
};
</script>

<style></style>
