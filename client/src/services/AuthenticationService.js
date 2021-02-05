import Api from '@/services/Api';

export default {
    register(credentials) {
        return Api().post('/register', credentials);
    },
    login(credentials) {
        return Api().post('/login', credentials);
    },
    isLoggedIn() {
        return Api().get('/user');
    },
    logout() {
        return Api().get('/logout');
    },
};
