import axios from 'axios'

const url = "https://fakestoreapi.com"

export const getProducts = ()=>{
    return axios.get(`${url}/products`)
}