<template>
    <div>
        <div class="product__hero">
            <router-link :to="`/products/${product._id}`">
                <!-- <img :src="`./uploads/${product.photo || 'sneaker.jpg'} `" alt="sneaker image" /> -->
                <img src="@/assets/images/sneaker.jpg" alt="sneaker photo" />
            </router-link>
            <!-- :src="product.image !== '' ? product.image : '@/assets/images/sneaker.jpg'" -->
        </div>
        <div class="product__details">
            <div class="product__name">
                <router-link :to="`/products/${product._id}`">
                    <span>{{ product.name }}</span>
                </router-link>
            </div>
            <div class="product__price">
                <span>{{ product.price }} $</span>
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
