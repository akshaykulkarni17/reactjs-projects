import axios from "axios";


const unsplash = axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID hR58TwOW9iMpD3jUgHMpv_wC7qpLCfS1G6VM5oIcdV0'
    }
});

export default unsplash;