<template>
    <div>
        <div class="product__hero">
            <img src="@/assets/images/sneaker.jpg" alt="sneaker image" />

            <!-- :src="product.image !== '' ? product.image : '@/assets/images/sneaker.jpg'" -->
        </div>
        <div class="product__details">
            <div class="product__name">
                <router-link :to="`/products/${product._id}`">
                    <span>{{ product.name }}</span>
                </router-link>
            </div>
            <div class="product__price">
                <span>{{ product.price }} RSD</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        product: Object,
    },
};
</script>

<style></style>
