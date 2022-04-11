import axios from 'axios'
const ROOT_API = 'https://622efc023ff58f023c123c84.mockapi.io/v1'

export const getAllCategories = async () => {
    const request = await axios.get(`${ROOT_API}/categorys`)
    return request.data
}

export const getAllProducts = async (id) => {
    const request = await axios.get(`${ROOT_API}/products?category=${id}`)
    return request.data
}
