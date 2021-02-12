<template>
    <form @submit.prevent="confirm" class="card form__cart">
        <div>
            <label for="name">Name</label>
            <input v-model="name" type="text" name="name" required />
        </div>
        <div>
            <label for="surname">Surname</label>
            <input v-model="surname" type="text" name="surname" required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input v-model="email" type="email" name="email" required />
        </div>
        <div>
            <label for="text">Phone number:</label>
            <input v-model="phone" type="text" name="phone" required />
        </div>
        <div>
            <label for="text">City:</label>
            <input v-model="city" type="text" name="city" required />
        </div>
        <div>
            <label for="text">Phone number:</label>
            <input v-model="phone" type="text" name="phone" required />
        </div>
        <div>
            <label for="text">Zip Code:</label>
            <input v-model="zip" type="text" name="zip" required />
        </div>
        <div>
            <label for="text">Street:</label>
            <input v-model="street" type="text" name="street" required />
        </div>
        <div>
            <label for="text">Street number:</label>
            <input v-model="street_number" type="text" name="street_number" required />
        </div>
    </form>
</template>

<script>
export default {
    name: 'AddressForm',
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
};
</script>

<style></style>
