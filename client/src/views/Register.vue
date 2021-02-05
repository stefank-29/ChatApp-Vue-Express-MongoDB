<template>
    <div class="inner">
        <label for="user">{{ user }}*</label>

        <form @submit.prevent="register" action="/register" class="form card">
            <h2>Register</h2>
            <label for="username">Username*</label>
            <input v-model="username" type="text" name="username" required />
            <label for="name">Name</label>
            <input v-model="name" type="text" name="name" required />
            <label for="surname">Surname</label>
            <input v-model="surname" type="text" name="surname" required />
            <label for="email">Email*</label>
            <input v-model="email" type="email" name="email" required />
            <label for="password">Password*</label>
            <input v-model="password" type="password" name="password" required />
            <label for="password-confirm">Confirm Password*</label>
            <input v-model="confirm_password" type="password" name="password-confirm" required />
            <input type="submit" value="Register" name="register" class="button save" />
        </form>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'Register',
    data() {
        return {
            username: '',
            name: '',
            surname: '',
            email: '',
            password: '',
            confirm_password: '',
            error: null,
        };
    },
    methods: {
        ...mapActions(['setUser']),
        async register() {
            let response;
            try {
                response = await AuthenticationService.register({
                    username: this.username,
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    password: this.password,
                    'password-confirm': this.confirm_password,
                });
                if (!response.data.error) {
                    // redirekt na home i postaviti da je user ulogovan
                    const payload = { user: response.data.user, gravatar: response.data.gravatar };
                    this.setUser(payload);
                    this.$router.push({ name: 'Home' });
                } else {
                    // baciti greske i ne redirektovati
                    // error = true
                    // prodjem kroz niz sa greskama (response.data.errors)
                }
            } catch (error) {
                console.log(error.message);
            }
        },
    },
    computed: {
        ...mapState(['user', 'isUserLoggedIn']),
    },
};
</script>

<style></style>
