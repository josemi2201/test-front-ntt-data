import axios from 'axios';

export const testApi = axios.create({
    baseURL: 'https://front-test-api.herokuapp.com/api',
});
