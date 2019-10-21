import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID e6f1f32051d54b55d1f51a05a12309a2a25af0ce932873b5c1a6824e4815b519'
    }
});

