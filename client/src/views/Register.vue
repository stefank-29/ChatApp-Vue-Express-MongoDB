<template>
    <div class="inner">
        <form @submit.prevent="register" action="/register" class="form card" autocomplete="off">
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
import axios from 'axios';
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
        async register() {},
    },
};
</script>

<style></style>
