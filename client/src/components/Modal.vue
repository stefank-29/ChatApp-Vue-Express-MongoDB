<template>
    <div class="bg-modal">
        <div class="modal-content">
            <div class="question">Do you really want to remove item from cart?</div>
            <div class="buttons">
                <div @click="close" class="button">No</div>
                <div class="button">Confirm</div>
            </div>
            <div @click="close" class="close">+</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style></style>
