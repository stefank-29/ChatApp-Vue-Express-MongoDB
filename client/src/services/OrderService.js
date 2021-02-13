import Api from '@/services/Api';

export default {
    sendOrder(order) {
        return Api().post('/orders', order);
    },
};
