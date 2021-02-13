<template>
    <form @submit.prevent="confirm" class="card form__cart">
        <div class="form__block">
            <label for="name">Name</label>
            <input v-model="name" type="text" name="name" required />
        </div>
        <div class="form__block">
            <label for="surname">Surname</label>
            <input v-model="surname" type="text" name="surname" required />
        </div>
        <div class="form__block">
            <label for="email">Email:</label>
            <input v-model="email" type="email" name="email" required />
        </div>
        <div class="form__block">
            <label for="text">Phone number:</label>
            <input v-model="phone" type="text" name="phone" required />
        </div>
        <div class="form__block">
            <label for="text">City:</label>
            <input v-model="city" type="text" name="city" required />
        </div>
        <div class="form__block">
            <label for="text">Zip Code:</label>
            <input v-model="zip" type="text" name="zip" required />
        </div>
        <div class="form__block">
            <label for="text">Street:</label>
            <input v-model="street" type="text" name="street" required />
        </div>
        <div class="form__block">
            <label for="text">Street number:</label>
            <input v-model="street_number" type="text" name="street_number" required />
        </div>
    </form>
</template>

<script>
export default {
    name: 'AddressForm',
    props: {
        userInfo: Object,
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
        };
    },
    mounted() {
        if (this.userInfo !== null) {
            this.name = this.userInfo.name;
            this.surname = this.userInfo.surname;
            this.email = this.userInfo.email;
            this.phone = this.userInfo.phone;
            this.city = this.userInfo.city;
            this.zip = this.userInfo.zip;
            this.street = this.userInfo.street;
            this.street_number = this.userInfo.streetNumber;
            // setTimeout(() => {
            //     this.name = this.userInfo.name;
            //     this.surname = this.userInfo.surname;
            //     this.email = this.userInfo.email;
            //     this.phone = this.userInfo.phone;
            //     this.city = this.userInfo.city;
            //     this.zip = this.userInfo.zip;
            //     this.street = this.userInfo.street;
            //     this.street_number = this.userInfo.streetNumber;
            // }, 3000);
        }
    },
};
</script>

<style></style>
