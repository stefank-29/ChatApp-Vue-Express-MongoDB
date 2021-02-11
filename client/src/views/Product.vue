<template>
    <div v-if="product" class="inner">
        <div class="single">
            <div class="single__image">
                <img :src="`/uploads/${product.photo || 'sneaker.jpg'}`" alt="sneaker photo" />
            </div>
            <div class="single__details">
                <div class="single__name">
                    <h1>{{ product.name }}</h1>
                </div>
                <div class="single__price">
                    <p>{{ product.price }} $</p>
                </div>
                <p class="choose__size">Choose size:</p>
                <div class="sizes">
                    <div
                        v-for="(size, index) in product.sizes"
                        :key="size.name"
                        @click="selectSize(index)"
                        class="sizes__size"
                    >
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
            selectedSize: null,
        };
    },
    methods: {
        selectSize(index) {
            this.selectedSize = this.product.sizes[index];
            console.log(this.selectedSize);
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
