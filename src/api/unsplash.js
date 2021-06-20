import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID UVFodcAGOKXWoXG8_zaGxg4Ym1D4taRJGe9Ey_feXsU',
        'Cache-Control': 'No-Cache'
    }
});