<template>
    <div class="inner">
        <form @submit.prevent="addProduct" class="form card">
            <h2>Add Product</h2>
            <label for="name">Name*</label>
            <input v-model="name" type="text" name="name" required />
            <label for="price">Price*</label>
            <input v-model="price" type="number" name="price" required />
            <label for="photo">Photo*</label>
            <input type="file" @change="onFileSelected" name="photo" />
            <label for="gender">Gender*</label>
            <select @change="changeInputs($event)" v-model="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="unisex">Unisex</option>
            </select>
            <div class="sizes__inputs">
                <div class="size__input" v-for="(size, index) in sizes" :key="size.number">
                    <label for="size">Size {{ size.number }}</label>
                    <input type="number" v-model="sizes[index].quantity" />
                </div>
            </div>
            <input type="submit" value="Add Product" name="add" class="button save" />
        </form>
    </div>
</template>

<script>
import ProductsService from '@/services/ProductsService';
import FormData from 'form-data';
export default {
    name: 'AddProduct',
    data() {
        return {
            name: '',
            price: '',
            gender: 'unisex',
            SelectedFile: '',
            sizes: [
                { number: 33, quantity: 0 },
                { number: 34, quantity: 0 },
                { number: 35, quantity: 0 },
                { number: 36, quantity: 0 },
                { number: 37, quantity: 0 },
                { number: 38, quantity: 0 },
                { number: 39, quantity: 0 },
                { number: 40, quantity: 0 },
                { number: 41, quantity: 0 },
                { number: 42, quantity: 0 },
                { number: 43, quantity: 0 },
                { number: 44, quantity: 0 },
                { number: 45, quantity: 0 },
                { number: 46, quantity: 0 },
                { number: 47, quantity: 0 },
            ],
        };
    },
    methods: {
        onFileSelected(event) {
            this.SelectedFile = event.target.files[0];
        },
        async addProduct() {
            try {
                const formData = new FormData();
                formData.append('file', this.SelectedFile);
                formData.append('name', this.name);
                formData.append('price', this.price);
                formData.append('gender', this.gender);
                formData.append('sizes', JSON.stringify(this.sizes)); // serijalizacija

                const response = await ProductsService.addProduct(formData);
                if (response.status === 200) {
                    this.$router.push({ name: 'Home' });
                }
            } catch (error) {
                console.log(error.message);
            }
        },
        changeInputs(event) {
            if (event.target.value === 'female') {
                this.sizes = [
                    { number: 33, quantity: 0 },
                    { number: 34, quantity: 0 },
                    { number: 35, quantity: 0 },
                    { number: 36, quantity: 0 },
                    { number: 37, quantity: 0 },
                    { number: 38, quantity: 0 },
                    { number: 39, quantity: 0 },
                    { number: 40, quantity: 0 },
                    { number: 41, quantity: 0 },
                    { number: 42, quantity: 0 },
                ];
            } else if (event.target.value === 'male') {
                this.sizes = [
                    { number: 38, quantity: 0 },
                    { number: 39, quantity: 0 },
                    { number: 40, quantity: 0 },
                    { number: 41, quantity: 0 },
                    { number: 42, quantity: 0 },
                    { number: 43, quantity: 0 },
                    { number: 44, quantity: 0 },
                    { number: 45, quantity: 0 },
                    { number: 46, quantity: 0 },
                    { number: 47, quantity: 0 },
                ];
            } else if (event.target.value === 'unisex') {
                this.sizes = [
                    { number: 33, quantity: 0 },
                    { number: 34, quantity: 0 },
                    { number: 35, quantity: 0 },
                    { number: 36, quantity: 0 },
                    { number: 37, quantity: 0 },
                    { number: 38, quantity: 0 },
                    { number: 39, quantity: 0 },
                    { number: 40, quantity: 0 },
                    { number: 41, quantity: 0 },
                    { number: 42, quantity: 0 },
                    { number: 43, quantity: 0 },
                    { number: 44, quantity: 0 },
                    { number: 45, quantity: 0 },
                    { number: 46, quantity: 0 },
                    { number: 47, quantity: 0 },
                ];
            }
        },
    },
};
</script>

<style></style>
