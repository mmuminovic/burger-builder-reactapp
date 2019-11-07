import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-myapp.firebaseio.com/'
})

export default instance;