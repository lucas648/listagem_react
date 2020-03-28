import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:1803'
});

export default api;
