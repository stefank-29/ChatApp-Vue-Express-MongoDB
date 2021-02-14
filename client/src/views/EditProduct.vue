<template>
    <div class="inner">
        <form @submit.prevent="editProduct" class="form card">
            <h2>Edit Product</h2>
            <label for="name">Name*</label>
            <input v-model="name" type="text" name="name" required />
            <label for="price">Price*</label>
            <input v-model="price" type="number" name="price" required />
            <label for="photo">Photo*</label>
            <input type="file" @change="onFileSelected" name="photo" />
            <img class="form_photo" src="@/assets/images/sneaker.jpg" alt="sneaker photo" />
            <!-- <img :src="`./uploads/${product.photo || 'sneaker.jpg'} `" alt="sneaker image" /> -->

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
            <input type="submit" value="Edit Product" name="add" class="button save" />
        </form>
    </div>
</template>

<script>
import ProductsService from '@/services/ProductsService';
import FormData from 'form-data';
export default {
    name: 'EditProduct',
    data() {
        return {
            name: '',
            price: '',
            gender: 'unisex',
            SelectedFile: '',
            sizes: [],
            photo: '',
            product: null,
        };
    },
    async created() {
        try {
            const response = await ProductsService.getSingleProduct(this.$route.params.id);
            if (response.status === 200) {
                const product = response.data.product[0];
                this.product = product;
                console.log(product);
                this.name = product.name;
                this.price = product.price;
                this.gender = product.gender;
                for (let i = 0; i < product.sizes.length; i++) {
                    this.sizes.push(product.sizes[i]);
                }
            }
        } catch (error) {
            console.log(error.message);
        }
    },
    methods: {
        onFileSelected(event) {
            this.SelectedFile = event.target.files[0];
        },
        async editProduct() {
            try {
                const formData = new FormData();
                formData.append('file', this.SelectedFile);
                formData.append('name', this.name);
                formData.append('price', this.price);
                formData.append('gender', this.gender);
                formData.append('photo', this.photo);

                formData.append('sizes', JSON.stringify(this.sizes)); // serijalizacija
                const payload = { formData, id: this.product._id };
                const response = await ProductsService.editProduct(payload);
                if (response.status === 200) {
                    console.log('aaa');
                    this.$router.push(`/products/${this.product._id}`);
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
