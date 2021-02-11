<template>
    <div class="inner">
        <div class="shopping_cart">
            <div class="title">Your cart</div>
            <div v-for="item in items" :key="item._id" class="cart_item">
                <div class="cart_item__img">
                    <img :src="`/uploads/${item.photo || 'sneaker.jpg'}`" alt="sneaker photo" />
                    <!-- <img src="@/assets/images/sneaker.jpg" alt="sneaker photo" /> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShoppingCart',
    data() {
        return {
            items: [],
        };
    },
    created() {
        this.items = this.$store.state.cartItems;
    },
    methods: {},
};
</script>

<style></style>
