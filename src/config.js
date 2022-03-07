import axios from 'axios'
export const axiosInstance = axios.create({
    baseURL : "https://jcross-autos.herokuapp.com/api/"
})