<template>
    <div class="inner">
        <div class="shopping_cart">
            <div class="title">Your cart</div>
            <div v-for="item in items" :key="item._id" class="cart_item">
                <div class="cart_item__img">
                    <!-- <img
                        :src="`/uploads/${item.product.photo || 'sneaker.jpg'}`"
                        alt="sneaker photo"
                    /> -->
                    <img src="@/assets/images/sneaker.jpg" alt="sneaker photo" />
                </div>
                <div class="cart_item__details">
                    <p>{{ item.product.name }}</p>
                    <div>Size: {{ item.size.number }}</div>
                </div>
                <div class="cart_item__price">
                    <div>{{ item.product.price }} $</div>
                </div>
                <div class="cart_item__price">
                    <div>0,00%</div>
                </div>
                <div class="cart_item__price">
                    <div>{{ item.product.price }} $</div>
                </div>
                <div class="cart_item__remove">
                    <div @click="showModal" class="removeBtn">Remove</div>
                </div>
            </div>
        </div>
        <Modal v-show="isModalVisible" @close="closeModal" />
    </div>
</template>

<script>
import Modal from '@/components/Modal';
export default {
    name: 'ShoppingCart',
    components: {
        Modal,
    },
    data() {
        return {
            items: [],
            isModalVisible: false,
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
            //todo proslediti item koji se brise na confirm
            //todo ukupna cena
        },
        closeModal() {
            this.isModalVisible = false;
        },
    },
    created() {
        this.items = this.$store.state.cartItems;
    },
};
</script>

<style></style>
