import Api from '@/services/Api';

export default {
    addProduct(product) {
        return Api().post('/products', product);
    },
};
