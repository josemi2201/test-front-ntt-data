import axios from 'axios';

export const testApi = axios.create({
    baseURL: 'https://backend-test-front-ntt-data.netlify.app/api',
});
