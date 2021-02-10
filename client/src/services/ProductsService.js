import Api from '@/services/Api';

export default {
    addProduct(product) {
        return Api().post('/products', product);
    },
    getProducts() {
        return Api().get('/products');
    },
    getSingleProduct(id) {
        return Api().get(`/products/${id}`);
    },
};
