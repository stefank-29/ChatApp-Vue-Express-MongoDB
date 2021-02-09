<template>
    <div class="inner">
        <div class="products">
            <div v-for="product in products" :key="product._id">
                {{ product }}
            </div>
        </div>
    </div>
</template>

<script>
import ProductsService from '@/services/ProductsService';
export default {
    name: 'Products',
    data() {
        return {
            products: [],
        };
    },
    async created() {
        const response = await ProductsService.getProducts();
        this.products = response.data;
    },
};
</script>

<style></style>
