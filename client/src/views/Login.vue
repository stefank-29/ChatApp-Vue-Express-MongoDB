<template>
    <div class="inner">
        <ValidationObserver slim v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(login)" class="form card">
                <h2>Login</h2>
                <validation-provider rules="required|email" v-slot="{ errors }">
                    <label for="email">Email*</label>
                    <input v-model="email" type="text" name="email" />
                    <div class="error">{{ errors[0] }}</div>
                </validation-provider>
                <validation-provider rules="required|password" v-slot="{ errors }">
                    <label for="password">Password*</label>
                    <input v-model="password" type="password" name="password" />
                    <div class="error">{{ errors[0] }}</div>
                </validation-provider>
                <input type="submit" value="Log In" name="login" class="button save" />
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import { mapActions } from 'vuex';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';
import { Validator } from 'vee-validate';

extend('required', {
    ...required,
    message: 'This field is required',
});
extend('email', {
    ...email,
    message: 'Please insert a valid email address',
});

extend('password', {
    getMessage: () => 'One uppercase character',
    validate: (value) => value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) !== null,
});
export default {
    name: 'Login',
    components: {
        ValidationProvider,
        ValidationObserver,
    },
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
