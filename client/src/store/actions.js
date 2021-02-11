//* prima max dva parametra
import AuthenticationService from '@/services/AuthenticationService';
export default {
    setUser({ commit }, payload) {
        commit('setUser', payload);
    },
    async removeUser({ commit }) {
        try {
            const response = await AuthenticationService.logout();
            // console.log(response);
        } catch (error) {
            console.log(error.message);
        }
        commit('logout');
    },
    addProductToCart({ commit }, item) {
        commit('addToCart', item);
    },
};
