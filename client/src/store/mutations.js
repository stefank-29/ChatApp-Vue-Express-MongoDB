//* prima max dva parametra
export default {
    setUser(state, { user, gravatar }) {
        state.user = user;
        state.isUserLoggedIn = true;
        state.gravatar = gravatar;
    },
    logout(state) {
        state.user = null;
        state.gravatar = '';
        state.isUserLoggedIn = false;
    },
    addToCart(state, item) {
        state.cartItems.push(item);
    },
    removeFromCart(state, itemIdx) {
        state.cartItems.splice(itemIdx, 1);
    },
};
