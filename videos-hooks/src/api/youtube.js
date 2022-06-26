import axios from "axios";

const API_KEY = 'AIzaSyAseaYMFTYX2tpEcPLKdfxPGv7Yo_G2MqE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: API_KEY
    }  
});