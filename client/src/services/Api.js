import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: `http://localhost:3000/api/`,
        headers: {
            'Content-type': 'application/json',
        },
    });
};
