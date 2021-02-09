<template>
    <div class="inner">
        <form @submit.prevent="addProduct" class="form card">
            <h2>Add Product</h2>
            <label for="name">Name*</label>
            <input v-model="name" type="text" name="name" required />
            <label for="price">Price</label>
            <input v-model="price" type="number" name="price" required />
            <label for="gender">Gender</label>
            <select v-model="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex" selected>Unisex</option>
            </select>
            <div v-for="(size, index) in sizes" :key="size.number">
                <label for="size">Size {{ size.number }}</label>
                <input type="number" v-model="sizes[index].quantity" />
            </div>

            <input type="submit" value="Add Product" name="add" class="button save" />
        </form>
    </div>
</template>

<script>
import ProductsService from '@/services/ProductsService';
export default {
    name: 'AddProduct',
    data() {
        return {
            name: '',
            price: '',
            gender: 'unisex',
            sizes: [
                { number: 37, quantity: 0 },
                { number: 38, quantity: 0 },
                { number: 39, quantity: 5 },
                { number: 40, quantity: 0 },
                { number: 41, quantity: 7 },
                { number: 42, quantity: 0 },
                { number: 43, quantity: 0 },
                { number: 44, quantity: 0 },
                { number: 45, quantity: 0 },
                { number: 46, quantity: 0 },
            ],
        };
    },
    methods: {
        async addProduct() {
            try {
                const response = await ProductsService.addProduct({
                    name: this.name,
                    price: this.price,
                    gender: this.gender,
                    sizes: [...this.sizes],
                });
                console.log('aaa');
                // if (!response.data.error) {
                this.$router.push({ name: 'Home' });
                //    }
            } catch (error) {}
        },
    },
};
</script>

<style></style>
