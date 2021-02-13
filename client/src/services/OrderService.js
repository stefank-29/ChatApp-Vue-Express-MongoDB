import Api from '@/services/Api';

export default {
    sendOrder(order) {
        return Api().post('/orders', order, {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Headers': 'Content-Type',
        });
    },
};
