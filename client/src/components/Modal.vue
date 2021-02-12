<template>
    <div class="bg-modal">
        <div class="modal-content">
            <div class="question">Do you really want to remove item from cart?</div>
            <div class="buttons">
                <div @click="close" class="button">No</div>
                <div @click="confirm" class="button">Confirm</div>
            </div>
            <div @click="close" class="close">+</div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'Modal',
    props: {
        itemIndex: Number,
    },
    methods: {
        ...mapActions(['removeProductFromCart']),
        close() {
            this.$emit('close');
        },
        confirm() {
            this.removeProductFromCart(this.itemIndex);
            this.$emit('close');
        },
    },
};
</script>

<style></style>
