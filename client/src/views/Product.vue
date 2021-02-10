<template>
    <div v-if="product" class="inner">
        <div class="single">
            <div class="single__image">
                <img src="@/assets/images/sneaker.jpg" alt="" />
            </div>
            <div class="single__details">
                <div class="single__name">
                    <h1>{{ product.name }}</h1>
                </div>
                <div class="single__price">
                    <p>{{ product.price }} $</p>
                </div>
                <div class="sizes">
                    <p>Choose size:</p>
                    <div v-for="size in product.sizes" :key="size.name" class="sizes__size">
                        <span>{{ size.number }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsService from '@/services/ProductsService';
export default {
    name: 'Product',
    data() {
        return {
            product: null,
        };
    },
    async mounted() {
        try {
            const response = await ProductsService.getSingleProduct(this.$route.params.id);
            if (response.status === 200) {
                this.product = response.data.product[0];
            }
        } catch (error) {
            console.log(error.message);
        }
    },
};
</script>

<style></style>
