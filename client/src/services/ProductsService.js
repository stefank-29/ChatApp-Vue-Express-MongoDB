import Api from '@/services/Api';

export default {
    addProduct(product) {
        return Api().post('/products', product, {
            'Content-Type': 'multipart/form-data',
        });
    },
    editProduct({ formData, id }) {
        // console.log(formData + ' ' + id);
        return Api().post(`/products/${id}`, formData, {
            'Content-Type': 'multipart/form-data',
        });
    },
    getProducts() {
        return Api().get('/products');
    },
    getSingleProduct(id) {
        return Api().get(`/products/${id}`);
    },
};
