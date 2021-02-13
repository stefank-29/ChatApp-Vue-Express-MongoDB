<template>
    <div v-if="product" class="inner">
        <div class="single">
            <div class="single__image">
                <!-- <img :src="`/uploads/${product.photo || 'sneaker.jpg'}`" alt="sneaker photo" /> -->
                <img src="@/assets/images/sneaker.jpg" alt="sneaker photo" />
            </div>
            <div class="single__details">
                <div class="single__name">
                    <h1>{{ product.name }}</h1>
                </div>
                <div class="single__price">
                    <p>{{ product.price }} $</p>
                </div>
                <p v-if="selectedSize" class="choose__size">
                    Choose size: {{ selectedSize.number || '' }}
                </p>
                <p v-else class="choose__size">Choose size:</p>
                <div class="sizes">
                    <div
                        v-for="(size, index) in product.sizes"
                        :key="size.number"
                        @click="selectSize(size, index)"
                        class="sizes__size"
                        :class="sizeClass(size, index)"
                        :title="`${size.quantity > 0 ? `Size: ${size.number}` : `Out of stock`}`"
                    >
                        <span>{{ size.number }}</span>
                    </div>
                </div>
                <div class="addToCart" @click="addToCart" ref="addBtn">
                    Add to cart
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductsService from '@/services/ProductsService';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Product',
    data() {
        return {
            product: null,
            selectedSize: null,
            selectedIndex: null,
        };
    },
    methods: {
        ...mapActions(['addProductToCart']),
        ...mapGetters(['cartItemsNum']),
        selectSize(size, index) {
            if (size.quantity === 0) {
                // out of stock
                return;
            }
            // ako je 'Choose size' na buttonu
            if (this.selectedSize === null) {
                this.$refs.addBtn.textContent = 'Add to cart';
            }
            this.selectedSize = this.product.sizes[index];
            this.selectedIndex = index;
        },
        sizeClass(size, index) {
            return {
                'sizes__size--selected': this.selectedIndex === index,
                'sizes__size--out_of_stock': size.quantity === 0,
            };
        },
        toggleButton() {
            this.$refs.addBtn.classList.add('added');
            this.$refs.addBtn.textContent = 'Added to cart';
            setTimeout(() => {
                this.$refs.addBtn.classList.remove('added');
                this.$refs.addBtn.textContent = 'Add to cart';
            }, 2000);
        },
        addToCart() {
            if (this.selectedSize === null) {
                this.$refs.addBtn.textContent = 'Choose size';
                return;
            }
            const payload = { product: this.product, size: { ...this.selectedSize } };
            this.addProductToCart(payload);
            this.toggleButton();
        },
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
