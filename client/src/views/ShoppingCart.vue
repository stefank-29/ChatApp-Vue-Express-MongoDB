<template>
    <div class="inner">
        <div class="shopping_cart">
            <div class="title">Your cart</div>
            <div v-if="items.length === 0" class="emptyCart">
                <span>Your cart is empty!</span>
            </div>
            <div v-if="items.length === 0" @click="backToShop" class="backToShop">Back to shop</div>

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
            <AddressForm :userInfo="user" />
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
            //todo header za tabelu
            //todo admin
            //todo podaci user
            //todo slanje porudbine (popunjavanje podataka) + dugme za slanje => cuvati u bazi
            //todo smanjivanje kolicine kad se potvrdi porudzbina
        },
        closeModal() {
            this.isModalVisible = false;
        },
        backToShop() {
            this.$router.push({ name: 'Products' });
        },
    },
    created() {
        this.$store.state.cartItems = [...JSON.parse(localStorage.getItem('items'))];
        this.items = this.$store.state.cartItems;
    },
    mounted() {
        this.items = this.$store.state.cartItems;
    },
};
</script>

<style></style>
