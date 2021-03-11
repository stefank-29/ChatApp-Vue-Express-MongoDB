import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: `https://sneakers-shop-website.herokuapp.com/api/`,
        headers: {
            'Content-type': 'application/json',
        },
    });
};
