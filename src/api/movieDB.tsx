import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '2f6b7beb4d61a478942bf015b902f2d2',
        language: 'es-ES'
    }
});

export default movieDB;