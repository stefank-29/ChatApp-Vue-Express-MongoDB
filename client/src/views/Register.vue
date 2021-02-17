<template>
    <div class="inner">
        <ValidationObserver tag="form" v-slot="{ handleSubmit }">
            <form
                @submit.prevent="handleSubmit(register)"
                autocomplete="off"
                action="/register"
                class="form__register card"
            >
                <h2>Register</h2>
                <div class="form__block">
                    <validation-provider rules="required" v-slot="{ errors }">
                        <label for="name">Name*</label>
                        <input v-model="name" type="text" name="name" />
                        <div class="error">{{ errors[0] }}</div>
                    </validation-provider>
                </div>
                <div class="form__block">
                    <validation-provider rules="required" v-slot="{ errors }">
                        <label for="surname">Surname*</label>
                        <input v-model="surname" type="text" name="surname" />
                        <div class="error">{{ errors[0] }}</div>
                    </validation-provider>
                </div>
                <div class="form__block">
                    <validation-provider rules="required|email" v-slot="{ errors }">
                        <label for="email">Email*</label>
                        <input v-model="email" type="email" name="email" />
                        <div class="error">{{ errors[0] }}</div>
                    </validation-provider>
                </div>
                <div class="form__block">
                    <validation-provider rules="required" v-slot="{ errors }">
                        <label for="text">Phone number*</label>
                        <input v-model="phone" type="text" name="phone" />
                        <div class="error">{{ errors[0] }}</div>
                    </validation-provider>
                </div>
                <div class="form__block">
                    <validation-provider rules="required" v-slot="{ errors }">
                        <label for="text">City*</label>
                        <input v-model="city" type="text" name="city" />
                        <div class="error">{{ errors[0] }}</div>
                    </validation-provider>
                </div>
                <div class="form__block">
                    <validation-provider rules="required" v-slot="{ errors }">
                        <label for="text">Zip Code*</label>
                        <input v-model="zip" type="text" name="zip" />
                        <div class="error">{{ errors[0] }}</div>
                    </validation-provider>
                </div>
                <div class="form__block">
                    <validation-provider rules="required" v-slot="{ errors }">
                        <label for="text">Street*</label>
                        <input v-model="street" type="text" name="street" />
                        <div class="error">{{ errors[0] }}</div>
                    </validation-provider>
                </div>
                <div class="form__block">
                    <validation-provider rules="required" v-slot="{ errors }">
                        <label for="text">Street number*</label>
                        <input v-model="street_number" type="text" name="street_number" />
                        <div class="error">{{ errors[0] }}</div>
                    </validation-provider>
                </div>
                <div class="form__block">
                    <validation-provider rules="required|password" v-slot="{ errors }">
                        <label for="password">Password*</label>
                        <input v-model="password" type="password" name="password" />
                        <div class="error">{{ errors[0] }}</div>
                    </validation-provider>
                </div>
                <div class="form__block">
                    <validation-provider rules="required" v-slot="{ errors }">
                        <label for="password-confirm">Confirm Password*</label>
                        <input v-model="confirm_password" type="password" name="password-confirm" />
                        <div class="error">{{ errors[0] }}</div>
                    </validation-provider>
                </div>

                <input type="submit" value="Register" name="register" class="button save" />
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
//  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
import AuthenticationService from '@/services/AuthenticationService';
import { mapActions, mapState } from 'vuex';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, regex } from 'vee-validate/dist/rules';
import { Validator } from 'vee-validate';

extend('required', {
    ...required,
    message: 'This field is required',
});

extend('email', {
    ...email,
    message: 'Please insert a valid email address',
});
extend('regex', {
    ...regex,
    message: 'Aloooo',
});

extend('password', {
    getMessage: () => 'One uppercase character',
    validate: (value) => value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/) !== null,
});

export default {
    name: 'Register',
    components: {
        ValidationProvider,
        ValidationObserver,
    },
    data() {
        return {
            name: '',
            surname: '',
            email: '',
            phone: '',
            city: '',
            zip: '',
            street: '',
            street_number: '',
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
                    name: this.name,
                    surname: this.surname,
                    email: this.email,
                    phone: this.phone,
                    city: this.city,
                    zip: this.zip,
                    street: this.street,
                    streetNumber: this.street_number,
                    password: this.password,
                    'password-confirm': this.confirm_password,
                });
                console.log(response.data);
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
