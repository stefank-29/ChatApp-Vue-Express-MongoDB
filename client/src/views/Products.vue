<template>
    <div class="inner">
        <h1 class="title">Sneakers</h1>

        <div class="products">
            <Card
                v-for="product in products"
                :key="product._id"
                :product="product"
                class="product"
            />
        </div>
    </div>
</template>

<script>
import ProductsService from '@/services/ProductsService';
import Card from '@/components/Card';
export default {
    name: 'Products',
    components: {
        Card,
    },
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
