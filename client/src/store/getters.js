export default {
    cartItemsNum(state) {
        return state.cartItems.length;
    },
    cartTotalPrice(state) {
        return state.cartItems.reduce((a, b) => {
            return a + b.product.price;
        }, 0);
    },
};
