<template>
    <div class="inner">
        <div class="shopping_cart">
            <div class="title">Your cart</div>
            <div v-if="items.length === 0" class="emptyCart">
                <span>Your cart is empty!</span>
            </div>
            <div v-if="items.length === 0" @click="backToShop" class="backToShop">Back to shop</div>

            <div v-if="items.length !== 0" class="cart_item cart_item__header">
                <div class="cart_item__img"></div>
                <div class="cart_item__details">
                    <div>Item</div>
                </div>
                <div class="cart_item__price cart_item__pricee">
                    <div>Price</div>
                </div>
                <div class="cart_item__price">
                    <div>Discount</div>
                </div>
                <div class="cart_item__price cart_item__discount">
                    <div>Discounted price</div>
                </div>
            </div>

            <div v-for="(item, index) in items" :key="item.product._id" class="cart_item">
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
                    <div @click="showModal(index)" class="removeBtn">Remove</div>
                </div>
            </div>
            <div v-if="items.length !== 0" class="total">
                <span>Total:</span>
                <span class="total__price">{{ cartTotalPrice() }} $</span>
            </div>
            <div v-if="items.length !== 0" class="title">
                Shipping Address
            </div>
            <AddressForm :key="componentKey" v-if="items.length !== 0" :userInfo="user" />
        </div>
        <Modal v-show="isModalVisible" @close="closeModal" :itemIndex="itemToRemove" />
    </div>
</template>

<script>
import Modal from '@/components/Modal';
import AddressForm from '@/components/AddressForm';

import { mapGetters, mapState } from 'vuex';
export default {
    name: 'ShoppingCart',
    components: {
        Modal,
        AddressForm,
    },
    data() {
        return {
            items: [],
            isModalVisible: false,
            itemToRemove: null,
            componentKey: 0,
        };
    },
    computed: {
        ...mapState(['user']),
    },
    methods: {
        ...mapGetters(['cartTotalPrice']),
        showModal(index) {
            this.itemToRemove = index;
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        backToShop() {
            this.$router.push({ name: 'Products' });
        },
    },
    created() {
        this.$store.state.cartItems = [...JSON.parse(localStorage.getItem('items'))]; // izvucem iz storega u state
        this.items = this.$store.state.cartItems;
        // forica za formu da se izrenderuje posle pola sekunde
        setTimeout(() => {
            this.componentKey += 1;
        }, 500);
    },
    mounted() {
        this.items = this.$store.state.cartItems;
    },
};
</script>

<style></style>
