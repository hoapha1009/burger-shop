import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-shop-2fdbb-default-rtdb.firebaseio.com/',
});

export default instance;
